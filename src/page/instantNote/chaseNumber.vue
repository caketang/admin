<template>
    <div id="chaseNumber">
        <el-row>
            <!--搜索-->
            <formEdit :formVisible="formVisibleSearch" :formConfig="searchConfig" :type="typeSearch"
                      :labelWidth="labelWidthSearch"
                      @do-query="doQuery" :isEdit="isEditSearch" @reset-form="resetForm"
                      :showAdd="false"
            ></formEdit>
        </el-row>
        <el-row>
            <el-col :span="24">
                <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="false"
                    @do-handle="doHandle"
                    :pageSet="true"
                    :updated="updated"
                    :tableIndex="false">
                </tablegrid>
            </el-col>
        </el-row>
        <el-col :span="24">
            <!--详情界面-->
            <el-dialog
                :title=dialogTitle
                :visible.sync="dialogVisible"
                size="small"
                :before-close="handleClose">
                <span>追号编号{{chase_number}}</span>
                <el-row class="tCent">
                    <el-col :span="12" v-for="(items,index) in tableData" :key=index>
                        <div>
                            <el-col :span="12">{{items.label}}</el-col>
                            <el-col :span="12">{{items.value}}</el-col>
                        </div>
                    </el-col>
                </el-row>
                <div>
                    <span>追号状态</span>
                    <span>已追 <font>{{modeData.finish}}</font>期/共{{modeData.total}}期</span>
                </div>
                <el-row class="tCent">
                    <el-col :span="24" v-for="(items,index) in tableList" :key=index>
                        <div>
                            <el-col :span="5">第{{items.lottery_number}}期</el-col>
                            <el-col :span="5">{{items.price | formatMoney}}元</el-col>
                            <el-col :span="5">{{items.state | state}}</el-col>
                            <el-col :span="5">{{items.lose_earn | formatMoney}}</el-col>
                            <el-col :span="4">
                                <a @click="getDetail(items.order_id)" class="orderDetail" v-if="items.order_id">注单详情</a>
                            </el-col>
                        </div>
                    </el-col>
                </el-row>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="stopZh" v-if="btnShow">停止追号</el-button>
                    <el-button @click="dialogVisible = false">关闭</el-button>
                </span>
            </el-dialog>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <el-col :span="24">
            <!--详情界面-->
            <el-dialog :title="formTtile" v-model="FormVisible" class="fromTitle">
                <chaseNoteDetail :tableData="detailForm"></chaseNoteDetail>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="FormVisible = false">{{LANG['关闭'] || '关闭'}}</el-button>
                </div>
            </el-dialog>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue';
    import formEdit from '../../components/formEdit.vue';
    import confirm from '../../components/confirm.vue'
    import chaseNoteDetail from '../../components/chaseNoteDetail.vue'
    import Vue from 'vue'

    Vue.filter('state', function (item) {
        if (item === 'underway') {
            return '进行中'
        } else if (item === 'open') {
            return '已结算'
        } else if (item === 'cancel') {
            return '已取消'
        }
    });
    export default {
        data() {
            return {
                LANG,
                columnsUrl: '',
                tableUrl: '',
                baseUrl: '',
                //弹窗相关
                formTtile: "",
                FormVisible: false,
                detailForm: {},
                searchConfig: [
                    {"prop": "user_name", "value": "", "type": "text", "label": "用户名"},
                    {"prop": "chase_number", "value": "", "type": "text", "label": "追号单号"},
                    {
                        "prop": "lottery_id",
                        "value": "",
                        "label": "彩票名称",
                        "type": "select",
                        "list": []
                    },
                    {
                        "prop": "state", "value": "", "label": "状态", "type": "select",
                        "list": [{"label": "进行中", "value": "underway"},
                            {"label": "已结算", "value": "open"},
                        ]
                    },
                    {
                        "prop": "origin", "value": "", "label": "来源", "type": "select",
                        "list": [{"label": "PC", "value": "1"}, {"label": "H5", "value": "2"}, {
                            "label": "移动端",
                            "value": "3"
                        }]
                    },
                    {
                        "type": "dateGroup",
                        "label": "建立时间",
                        "prop": [{"prop": "start_time", "value": "", "label": "开始时间"},
                            {"prop": "end_time", "value": "", "label": "结束时间"}]
                    }
                ],
                typeSearch: "search",
                labelWidthSearch: "100px",
                formVisibleSearch: {
                    state: false
                },
                //是否编辑数据
                isEditSearch: {
                    state: false
                },
                //详情界面数据
                dialogVisible: false,
                dialogTitle: '',
                // 是否编辑数据
                isEdit: {
                    state: false
                },
                //刷新当前数据
                updated: false,
                formType: '',
                loading: false,
                //确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                btnShow: false,
                chase_number: null,
                tableData: [
                    {label: '用户名', value: ''},
                    {label: '上级代理', value: ''},
                    {label: '建立时间', value: ''},
                    {label: '追号金额', value: ''},
                    {label: '彩票名称', value: ''},
                    {label: '玩法', value: ''},
                    {label: '内容', value: ''},
                    {label: '赔率', value: ''},
                    {label: '追号类型', value: ''},
                    {label: '来源', value: ''},
                    {label: '状态', value: ''},
                    {label: '盈亏', value: ''}],
                tableList: '',
                modeData: {}
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
            chaseNoteDetail: chaseNoteDetail,
            confirm: confirm,
        },
        methods: {
            init() {
                var _this = this;
                this.playType = "彩票标准玩法";
                this.nowPlayType = "lottery";
                this.columnsUrl = "/static/json/Note/lottery/columns2.json";
                this.tableUrl = URL.api + ROUTES.GET.lottery.chase + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
                this.baseUrl = URL.api + ROUTES.GET.lottery.chase;
                //获取彩票名称

				this.$.autoAjax('get',URL.api + ROUTES.GET.lottery.types.$, '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							let model = res.data || [];
							for (let k in model) {
								if (model[k].pid !== 0 && model[k].is_standard === '1') {
									_this.searchConfig[2].list.push({
										"label": model[k]['name'],
										"value": model[k]['id']
									});
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
                // this.$http.get(URL.api + ROUTES.GET.lottery.types.$, URLCONFIG).then(function (res) {
                //     if (res.data.state == 0 && res.data.data) {
                //         let model = res.data.data || [];
                //         for (let k in model) {
                //             if (model[k].pid !== 0 && model[k].is_standard === '1') {
                //                 _this.searchConfig[2].list.push({
                //                     "label": model[k]['name'],
                //                     "value": model[k]['id']
                //                 });
                //             }
                //         }
                //     }
                // });
            },
            //搜索
            doQuery(obj) {
                this.tableUrl = this.baseUrl + this.addSearch(obj.item);
            },
            //  重置搜索条件
            resetForm(obj) {
                if (obj.state && obj.state == "init") {
                    this.tableUrl = this.baseUrl + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
                }
            },
            doHandle(item) {
                switch (item.fn) {
                    case "doStop":
                        this.doStop(item.row)
                        break;
                    case "doDet":
                        this.doDet(item.row)
                        break;
                    case "openMember":
                        this.openMember(item.row)
                        break;
                }
            },
            openMember(obj) {
                this.$router.push({path: "/memberManagement", query: {name: obj.user_name}});
            },
            //停用   停用的接口还没有出
            doStop(item) {
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定停用吗?'] || '确定停用吗?');
                this.confirmConfig.fn = "stop";
                this.confirmConfig.obj = item.chase_number;
            },
            doConfirm(obj) {
                let _this = this;
                this.updated = false;
                switch (obj.fn) {
                    case "stop":
                        this.dialogVisible = false;
                        let chase_number = obj.obj
                        let url = URL.api + ROUTES.PATCH.lottery.chase + `${chase_number}`;
						this.$.autoAjax('patch',url, {}, {
							ok: (res) => {
								if (res.state === 0 && res.data !== false) {
									let str = LANG['停用成功'] || '停用成功';
									this.$message.success(str);
									_this.updated = true;
								} else {
									let str = LANG['停用失败'] || '停用失败';
									this.$message.error(str + ':' + res.msg)
								}
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})

                        // this.$http.patch(url, {}, URLCONFIG).then((res) => {
                        //     if (res.data.state === 0 && res.data.data !== false) {
                        //         let str = LANG['停用成功'] || '停用成功';
                        //         this.$message.success(str);
                        //         _this.updated = true;
                        //     } else {
                        //         let str = LANG['停用失败'] || '停用失败';
                        //         this.$message.error(str + ':' + res.data.msg)
                        //     }
                        // }).catch(function (err) {
                        //    console.log(err)
                        // });
                        break;
                }
            },
            handleClose() {
                this.dialogVisible = false;
            },
            //停止追号操作
            stopZh(done) {
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定停用吗?'] || '确定停用吗?');
                this.confirmConfig.fn = "stop";
                this.confirmConfig.obj = this.chase_number;
            },
            doDet(item) {
                let _this = this;
                this.dialogTitle = '用户' + item.user_name + ' 的详情';
                this.dialogVisible = true;
                this.chase_number = item.chase_number;
                //item.chase_number;
                let infoUrl = URL.api + ROUTES.GET.lottery.info + '/' + item.chase_number;

				this.$.autoAjax('get',infoUrl, '', {
					ok: (res) => {
						if (res.state === 0) {
							let model = res.data || [];
							this.modeData = model;
							_this.tableData[0].value = model.name;
							_this.tableData[1].value = model.agent;
							_this.tableData[2].value = model.created;
							_this.tableData[3].value = model.total_price;
							_this.tableData[4].value = model.lottery_name;
							_this.tableData[5].value = model.odds_type;
							_this.tableData[6].value = model.result || model.odds_type || '';
							_this.tableData[7].value = model.odds;
							_this.tableData[8].value = model.prize_stop;
							_this.tableData[9].value = model.origin;
							_this.tableList = model.chase_list;
							//处理状态数据
							let state = '';
							switch (model.state) {
								case 'underway':
									this.btnShow = true;
									state = '进行中';
									break;
								case 'open':
									this.btnShow = false;
									state = '已结算';
									break;
								case 'cancel':
									this.btnShow = false;
									state = '已取消';
									break;
							}
							_this.tableData[10].value = state;
							_this.tableData[11].value = model.lose_earn;
						} else {
							let str = LANG['获取详情失败'] || '获取详情失败';
							this.$message.error(str)
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})

                // this.$http.get(infoUrl, URLCONFIG).then((res) => {
                //     if (res.data.state === 0) {
                //         let model = res.data.data || [];
                //         this.modeData = model;
                //         _this.tableData[0].value = model.name;
                //         _this.tableData[1].value = model.agent;
                //         _this.tableData[2].value = model.created;
                //         _this.tableData[3].value = model.total_price / 100;
                //         _this.tableData[4].value = model.lottery_name;
                //         _this.tableData[5].value = model.odds_type;
                //         _this.tableData[6].value = model.result || model.odds_type || '';
                //         _this.tableData[7].value = model.odds;
                //         _this.tableData[8].value = model.prize_stop;
                //         _this.tableData[9].value = model.origin;
                //         _this.tableList = model.chase_list;
                //         //处理状态数据
                //         let state = '';
                //         switch (model.state) {
                //             case 'underway':
                //                 this.btnShow = true;
                //                 state = '进行中';
                //                 break;
                //             case 'open':
                //                 this.btnShow = false;
                //                 state = '已结算';
                //                 break;
                //             case 'cancel':
                //                 this.btnShow = false;
                //                 state = '已取消';
                //                 break;
                //         }
                //         _this.tableData[10].value = state;
                //         _this.tableData[11].value = model.lose_earn / 100;
                //     } else {
                //         let str = LANG['获取详情失败'] || '获取详情失败';
                //         this.$message.error(str)
                //     }
                // });
            },
            getDetail(obj) {
                this.FormVisible = true;
                this.formTtile = '注单详情';
                let url = URL.api + `/lottery/order/${obj}`;
                let _this = this;
				this.$.autoAjax('get',url, '', {
					ok: (res) => {
						if (res.state === 0 && res.data) {
							let model = res.data;
							for (let i in model) {
								_this.$set(_this.detailForm, i, model[i])
							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})

                // this.$http.get(url, URLCONFIG).then(res => {
                //     if (res.data.state === 0 && res.data.data) {
                //         let model = res.data.data;
                //         for (let i in model) {
                //             _this.$set(_this.detailForm, i, model[i])
                //         }
                //     }
                // })
            }
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init();
        }
    }
</script>
<style scoped>
    .el-col {
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #eeeeee;
    }

    .orderDetail {
        color: #20a0ff;
        cursor: pointer;
    }
</style>
