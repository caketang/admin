<template>
    <div id="cs" class="templateManage w100">
        <el-row>
            <el-col :span="24">
                <el-button :type="standardActive" size="small" v-text="LANG['官方玩法'] || '官方玩法'"
                           @click="doChangePlay('standard')"></el-button>
                <el-button :type="quickActive" size="small" v-text="LANG['信用玩法'] || '信用玩法'"
                           @click="doChangePlay('fast')"></el-button>
            </el-col>
            <el-col :span="24">
                <el-form :model="editForm" ref="editForm" class="search el-form--inline">
                    <el-form-item :span="4">
                        <label class="el-form-item__label" v-text="LANG['模板名称'] || '模板名称'"></label>
                        <el-select class="inputW" size="small" v-model="editForm.tid"
                                   :placeholder="LANG['请选择'] || '请选择'" @change="changeTid">
                            <el-option
                                    v-for="(item,index) in tidList" :key="index"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :span="4">
                        <label class="el-form-item__label" v-text="LANG['彩种名称'] || '彩种名称'"></label>
                        <el-select class="inputW" size="small" v-model="editForm.lottery_id"
                                   :placeholder="LANG['请选择'] || '请选择'" @change="doQueryNum">
                            <el-option
                                    v-for="(item,index) in lotteryList" :key="index"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :span="4" v-if="nowType === 1">
                        <label class="el-form-item__label" v-text="LANG['玩法类型'] || '玩法类型'"></label>
                        <el-select class="inputW" size="small" v-model="editForm.play_type1"
                                   :placeholder="LANG['请选择'] || '请选择'">
                            <el-option
                                    v-for="(item,index) in lotteryGameType" :key="index"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :span="4">
                        <label class="el-form-item__label" :span="8" v-text="LANG['期号'] || '期号'"></label>
                        <el-select class="inputW" size="small" v-model="editForm.lottery_number"
                                   :placeholder="LANG['请选择'] || '请选择'">
                            <el-option
                                    v-for="(item,index) in lotteryNumList" :key="index"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :span="4">
                        <el-button type="primary" size="small" @click="doQuery">{{LANG['查询'] || '查询'}}</el-button>
                    </el-form-item>
                    <el-form-item :span="4" class="ml20">
                        <label class="font14" style="display: inline-block">自动刷新时间
                            <el-select v-model="times" placeholder="请选择" size="small" class="intW mr10"
                                       @change="changeTimes">
                                <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </label>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="4">

            </el-col>

        </el-row>
        <el-col :span="24">
            <oddsSet :tableUrl="tableUrl" :columnsUrl="columnsUrl" @save-data="saveOdds" :playType="playType"
                     :updated="updated" :lotteryId="editForm.lottery_id" :lotteryNumber="editForm.lottery_number"
                     :playname="editForm.play_type1" :lotteryName="lotteryname"></oddsSet>
        </el-col>
    </div>
</template>
<script type="text/ecmascript-6">
	import tablegrid from '../../components/tableGrid.vue'
	import oddsSet from '../instantNote/oddsSet.vue'
	import ElCol from "element-ui/packages/col/src/col";
	export default {
		data() {
			return {
				LANG,
				//搜索相关
				editForm: {
					tid: "",
					lottery_id: "",
					lottery_number: "",
					lottery_type: "",
					play_type1: "",
				},
				tidList: [],
				lotteryList: [],
				lotteryNumList: [],
				lotteryGameType: [],  // 快捷模式  玩法类型
				lotteryGame: [], // 存彩种一级玩法
				//表格相关
				columnsUrl: "",
				tableUrl: "",
				baseUrl: "",
				//玩法类型（快捷、标准）
				playType: "",
				nowId: -1,
				updated: false,
				//彩票玩法
				lotteryType: false,
				aId: [],
				lotteryname: '',
				// 超时时间
				options: [
					{"label": "不刷新", "value": "0"},
					{"label": "30秒", "value": "30"},
					{"label": "60秒", "value": "60"},
					{"label": "120秒", "value": "120"},
					{"label": "180秒", "value": "180"}
				],
				times: 60,
				standardActive: "primary",
				quickActive: "",
                cloneQuery: {}
			}
		},

		components: {

			ElCol,
			tablegrid: tablegrid,
			oddsSet: oddsSet,
		},
		computed: {
			nowType: function () {
				return this.playType === "standard" ? 0 : 1;
			}
		},
		mounted() {
		},
		methods: {
			init() {
				this.columnsUrl = "/static/json/lotteryNew/lotteryinstantnote/columns.json";
				this.baseUrl = URL.api + ROUTES.GET.lottery.realtime;
				this.tableUrl = "";
				this.cloneQuery = {};
				this.playType = this.playType ? this.playType : "standard";
				let nowType = this.playType === "standard" ? 0 : 1;

				let _this = this;
				//彩票模板

				this.$.autoAjax('get',URL.api + ROUTES.GET.lottery.template + "?enabled=1&template_type=" + nowType + "&page=1&page_size=10",'', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							let model = res.data || [];
							_this.tidList = [];
							for (let k in model) {
								_this.tidList.push({
									"label": model[k]['t_name'],
									"value": model[k]['t_id'].toString()
								});
							}
							if (_this.tidList.length > 0) {
								_this.editForm.tid = _this.tidList[0].value;
							}
							_this.changeTid(_this.editForm.tid)
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
				this.getLotteryList();
			},
			checkType(obj) {
			},
			changeTimes(v) {
				if (parseInt(v) === 0) {
					window.clearInterval(window.TIMEREF);
				} else {
					this.createTimes(parseInt(v));
				}
			},
			createTimes(times) {
				window.clearInterval(window.TIMEREF);
				window.TIMEREF = setInterval(() => {
					this.getNumList(this.editForm.lottery_id);
					this.doQuery();
				}, times * 1000);
			},
			//获取彩票名称
			getLotteryList() {
				let _this = this;

				this.$.autoAjax('get',URL.api + ROUTES.GET.lottery.types.$, '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							let model = res.data || [];
							_this.lotteryList = [];
							for (let k in model) {
								if (model[k].pid != 0) {
									if (model[k].state) {
										let list = model[k].state.split(",");
										let playType = this.playType === "standard" ? "standard" : "fast";
										for (let j  in list) {
											if (list[j] === playType) {
												_this.lotteryList.push({
													"label": model[k]['name'],
													"value": model[k]['id'].toString()
												});
											}
										}
									}
								}
							}
							if (_this.lotteryList.length > 0) {
								let num = parseInt(_this.lotteryList[0].value);
								_this.editForm.lottery_id = _this.lotteryList[0].value;
								if (this.nowType == 1) {

									_this.doQueryNum(_this.editForm.lottery_id);

								}

							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
			},
			//获取期号
			getNumList(num) {
				let _this = this;
				this.$.autoAjax('get',URL.api + ROUTES.GET.lottery.order.number + "?lottery_id=" + num + "&page=1&page_size=10", '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							let model = res.data || [];
							_this.lotteryNumList = [];
							for (let k in model) {
								if (model[k].pid != 0) {
									_this.lotteryNumList.push({
										"label": model[k]['lottery_number'],
										"value": model[k]['lottery_number']
									});
								}
							}
							if (_this.lotteryNumList.length > 0) {
								_this.editForm.lottery_number = _this.lotteryNumList[0].value;
								_this.initForm();
							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
			},
			// 初始化询条件
			initForm() {
				if (this.nowType == 0) {
					this.editForm.play_type1 = 0;
				}
				if (this.editForm.tid && this.editForm.lottery_id && this.editForm.lottery_number) {
					let nowType = this.playType === "standard" ? 0 : 1;
					this.editForm.lottery_type = this.nowType;

					this.tableUrl = this.baseUrl + this.addSearch(this.editForm);
				}
			},
//            执行查询
			doQuery() {
			    let _this = this;
				if (this.nowType == 0) {
					this.editForm.play_type1 = 0;
				}
				this.editForm.lottery_type = this.nowType;
				this.tableUrl = this.baseUrl + this.addSearch(this.editForm);
                if(EQUALOBJECT(_this.editForm,_this.cloneQuery)){
                    Bus.$emit('form_query_lottery',true);
                }
                for(let i in _this.editForm){
                    if(typeof(_this.editForm[i]) === 'object'){
                        for(let n in _this.editForm[i]){
                            _this.cloneQuery[i][n] = _this.editForm[i][n];
                        }
                    }else{
                        _this.cloneQuery[i] = _this.editForm[i];
                    }
                }
			},
			/* doReset(){
                 this.init();
                 debugger
             },*/
			//切换彩种
			doQueryNum(obj) {
				this.lotteryList.forEach((ele) => {
					if (ele.value === obj) {
						this.lotteryname = ele.label;
					}
				})
				if (this.nowType == 1) {
					for (let el in this.lotteryGame) {
						if (this.lotteryGame[el].lottery_id == obj) {
							this.lotteryGameType = [];
							let arr = this.lotteryGame[el].sub;
							for (let i in arr) {
								this.lotteryGameType.push({"label": arr[i].play_type1_name, "value": arr[i].play_type1})
							}
							this.editForm.play_type1 = this.lotteryGameType[0].value
						}
					}
				}
			},
			changeTid(obj) {
				if (this.nowType == 1 && this.editForm.tid) {
					let _this = this;

					this.$.autoAjax('get',URL.api + ROUTES.GET.lottery.types.play + '?tid=' + this.editForm.tid + '&lottery_type=1', '', {
						ok: (res) => {
							if (res.state == 0 && res.data) {
								_this.lotteryGame = res.data;
								_this.doQueryNum(_this.editForm.lottery_id)
							} else {
								_this.$message.error(LANG['获取玩法类型失败'] || '获取玩法类型失败');
							}
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
				}
			},
			//切换玩法
			doChangePlay(str) {
				if (this.playType === str) {
					return

				} else {
					this.playType = str;
					if (str === "fast") {
						this.standardActive = "";
						this.quickActive = "primary";
						this.lotteryType = true;
					} else {
						this.standardActive = "primary";
						this.quickActive = "";
						this.lotteryType = false;
					}
					this.editForm.tid = "";
					this.editForm.lottery_id = "";
					this.editForm.lottery_number = "";
					this.editForm.lottery_type = "";
					this.editForm.play_type1 = "";

				}
				this.init();
			},
			//保存数据
			saveOdds(obj) {
				this.updated = false;
				let _this = this;
				let model = obj.item;
				let odds = [];
				for (let k in model) {
					if (model[k].id && !model[k].sub_odds) {
						odds.push({id: model[k]['id'], type: 1, odds: model[k]['odds']})
					} else {
						if (model[k].sub_odds && model[k].sub_odds.length) {
							for (let index in model[k].sub_odds) {
								odds.push({
									id: model[k].sub_odds[index]['id'],
									type: 2,
									odds: model[k].sub_odds[index]['odds']
								});

							}
						}
					}
				}

				let lotteryData = {
					tid: this.editForm.tid,
					lid: this.editForm.lottery_id,
					type: this.playType,
					odds: odds
				}

				this.$.autoAjax('put',URL.api + ROUTES.PUT.lottery.realtime, lotteryData, {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							_this.updated = true;
							_this.$message.success(LANG['恭喜您，赔率设置成功！'] || '恭喜您，赔率设置成功！');
						} else {
							_this.$message.error(LANG['赔率设置失败，请稍后重试！'] || '赔率设置失败，请稍后重试');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
				// this.$http.put(URL.api + ROUTES.PUT.lottery.realtime, JSON.stringify(lotteryData), URLCONFIG).then((res) => {
				// 	if (res.data.state == 0 && res.data.data) {
				// 		_this.updated = true;
				// 		_this.$message.success(LANG['恭喜您，赔率设置成功！'] || '恭喜您，赔率设置成功！');
				// 	} else {
				// 		_this.$message.error(LANG['赔率设置失败，请稍后重试！'] || '赔率设置失败，请稍后重试');
				// 	}
				// });
			}
		},
		watch: {
			'editForm.lottery_id': function (val, oldval) {
				if (val) {
					this.getNumList(val);
				}
			}
		},
		created() {
			this.init();

		},
		activated() {
			window.TIMEREF = null;
			if (this.times >= 60) {
				this.createTimes(parseInt(this.times));
			}
            //  初始化页面选项
            this.standardActive = "primary";
            this.quickActive = "";
            this.lotteryType = false;
            this.init();
		},
		deactivated() {
			window.clearInterval(window.TIMEREF);
		}
	}
</script>
<style scoped>
    .search {
        margin-bottom: -10px;
    }

    .templateManage .el-dialog--small {
        width: 30%;
        min-width: 400px;
        max-width: 600px;
        border-radius: 10px;
    }

    .templateManage .el-dialog--small .fromMargin {
        margin-right: 60px;
    }

    .templateManage .bg-purple-dark {
        background: none;
    }

    .templateManage .addManage {
        float: right;
        margin-right: 5%;
    }

    .templateManage .block {
        text-align: right;
    }

    .templateManage .cpSearch {
        min-width: 210px;
        max-width: 380px;
    }

    .templateManage .search .inputW {
        width: 140px;
    }
</style>
