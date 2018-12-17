<template>
    <div id="commissionIncomeQuery" class="page  clearfix" v-loading="loading">
        <div class="search" v-if="!showCommissionDetail">
            <el-col>
                <formEdit :formTitel="''"
                          :isEdit="isEdit"
                          :formVisible="formVisible"
                          :formConfig="searchConfig"
                          :type="type"
                          :showAdd=false
                          :labelWidth="searchLbelWidth"
                          @do-query="doQuery"
                          @reset-form="resetForm"
                ></formEdit>
            </el-col>
        </div>
        <el-col style="position: relative;" v-if="!showCommissionDetail">
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableCheck="true"
                    :tableUrl="tableUrl"
                    :tableIndex="false"
                    :isCreated="true"
                    :tabOperation="tabOperation"
                    :updated="updated"
                    :hoverData="gridData"
                    :do-hover="doHandle"
                    @do-operation="doOperation"
                    @do-handle="doHandle"></tablegrid>
            <!--<div class="el-dropdown-menu floatDiv" ref="floatDiv" id="tooltip" style="display: none">-->
            <!--<el-table :data="gridData" border>-->
            <!--<el-table-column width="71" property="a" label="视讯"></el-table-column>-->
            <!--<el-table-column width="71" property="b" label="体育"></el-table-column>-->
            <!--<el-table-column width="71" property="c" label="电子"></el-table-column>-->
            <!--<el-table-column width="71" property="d" label="彩票"></el-table-column>-->
            <!--</el-table>-->
            <!--</div>-->
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <!--显示退佣金额详情-->
        <el-col v-if="showCommissionDetail">
            <feesetContant :nowId="nowId" :agentName="agentName" :nowNumber="nowNumber"
                           @return-page="returnPage"></feesetContant>
        </el-col>
    </div>
</template>
<script type="text/ecmascript-6">
	import tableGrid from '../../components/tableGrid.vue'
	import formEdit from '../../components/formEdit.vue'
	import confirm from '../../components/confirm.vue'
	import feesetContant from './feesetContant.vue'
	export default {
		data() {
			return {
				LANG,
				//表格相关
				columnsUrl: "",
				tableUrl: "",
				oType: true,
				//搜索条件
				searchConfig: [{"prop": "account", "value": "", "type": "text", "label": "代理帐号"},
					{
						"prop": "period_name", "value": "", "label": "期数名称", "type": "select",
						"list": [],
					},
					{
						"prop": "bkge_amount", "value": "", "label": "退佣", "type": "select",
						"list": [{"label": "全部", "value": ""},
							{"label": "大于0", "value": ">0"},
							{"label": "等于0", "value": "=0"},]
					},
					{
						"type": "numberGroup",
						"label": "有效会员数",
						"prop": [{"prop": "valid_user_begin", "value": ""}, {"prop": "valid_user_end", "value": ""}]
					},
					{
						"prop": "status", "value": "", "label": "状态", "type": "select",
						"list": [
                            {"label": "全部", "value": ""},
                            {"label": "未发放", "value": "0"},
                            {"label": "已发放", "value": "1"},
                            {"label": "取消", "value": "2"},
                            {"label": "撤消", "value": "4"},
                            {"label": "未达门槛", "value": "5"}
                            ],

					}],
				searchType: "search",
				searchLbelWidth: "100px",
				//弹窗
				editConfig: [],
				editType: "",
				editTitel: "",
				editVisible: {
					state: false
				},
				formVisible: {
					state: false
				},
				editLbelWidth: "",
				gridData: [],
				isEdit: {},
				//checkbox 点击保存数据
				selection: [],
				//批量操作按钮
				tabOperation: [{"label": "批量发放", "fn": "doRelease"},
					{"label": "批量取消", "fn": "doClose"},{"label": "批量撤销", "fn": "doBackNote"}],
				type: "search",
				updated: false,
				loading: false,
				//删除确认
				confirmConfig: {
					state: false,
					msg: "",
					fn: ""
				},
				nowId: -1,
				basicUrl: '',
				showCommissionDetail: false,
				agentName: "",
				nowNumber: ""
			}
		},
		components: {
			formEdit: formEdit,
			tablegrid: tableGrid,
			confirm: confirm,
			feesetContant: feesetContant
		},
		methods: {
			init() {
				let _this = this;

                this.$.autoAjax('get',URL.api + ROUTES.GET.commission.period + '?page=1&page_size=37', '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            let data = res.data;
                            for (let index in data) {
                                let listData = {
                                    "id": data[index].id,
                                    "value": data[index].period_name,
                                    "label": data[index].period_name
                                };
                                _this.searchConfig[1]['list'].push(listData)
                            }
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
				// this.$http.get(URL.api + ROUTES.GET.commission.period + '?page=1&page_size=37', URLCONFIG).then((res) => {
				// 	if (res.data.state == 0 && res.data.data) {
				// 		let data = res.data.data;
				// 		for (let index in data) {
				// 			let listData = {
				// 				"id": data[index].id,
				// 				"value": data[index].period_name,
				// 				"label": data[index].period_name
				// 			};
				// 			_this.searchConfig[1]['list'].push(listData)
				// 		}
				// 	}
				// });
				_this.searchConfig[1]["NN"] = 'SS';
				this.columnsUrl = "/static/json/agent/CommissionIncomeQuery/columns.json"
				this.tableUrl = URL.api + ROUTES.GET.commission.income;
				this.basicUrl = URL.api + ROUTES.GET.commission.income;
			},
			//表格按钮点击事件
			doHandle(item) {
				item.event.stopPropagation();
				this.updated = false;
				this.nowId = parseInt(item.row.id) || -1;
				switch (item.fn) {
					case "doEdit":
						this.doEdit(item.row)
						break
					//显示返水比例
					case "showRebateProportion":
						this.showRebateProportion(item.row, item.event)
						break;
//					//隐藏返水比例
//					case "hideRebateProportion":
//						this.hideRebateProportion(item.row, item.event)
//						break;
					case "showCommissionProportion":
						this.showCommissionProportion(item.row, item.event)
						break;
//					case "hideCommissionProportion":
//						this.hideCommissionProportion(item.row, item.event)
//						break;
					case "getPreviousBet":
						this.getPreviousBet(item.row, item.event)
						break;
					case "getNowBet":
						this.getNowBet(item.row, item.event)
						break;
					case "getPreviousEarn":
						this.getPreviousEarn(item.row, item.event)
						break;
					case "getNowEarn":
						this.getNowEarn(item.row, item.event)
						break;
					case "doGrant":
						this.doGrant(item.row)
						break
					case "doCancel":
						this.doCancel(item.row)
						break;
					case "undo":
						this.undo(item.row)
						break;
					case "doTurnNext":
						this.doTurnNext(item.row)
						break;
					case "openUserSet": // 用户名跳转
						this.openUserSet(item.row)
						break;
					case "getCommissionNumber": // 用户名跳转
						this.getCommissionNumber(item.row)
						break;
					default:
						break;
				}
			},
			//批量操作按钮
			doOperation(list) {
				this.selection = [];
				this.selection = list.rows;
				this.updated = false;
				switch (list.fn) {
					case "doRelease":
						this.doRelease(list.fn)
						break
//					case "doNexttime":
//						this.doNexttime(list.fn)
//						break
					case "doClose":
						this.doClose(list.fn)
						break;
                    case "doBackNote":
						this.doBackNote(list.fn)
						break
				}
			},
			doGrant(row) {
				if (parseFloat(row.bkge_amount) <= 0) {
					this.$message.error(LANG["发放金额需大于0"] || '发放金额需大于0');
					return;
				}
				if (parseInt(row.id)) {
					this.confirmConfig.state = true;
					this.confirmConfig.msg = (LANG['确定发放'] || '确定发放') + '"' + row.username + '"' + (LANG['吗？'] || '吗？');
					this.confirmConfig.fn = "grant";
					this.confirmConfig.obj = row;
				}
			},
			doTurnNext(row) {
				if (parseInt(row.id)) {
					this.confirmConfig.state = true;
					this.confirmConfig.msg = (LANG['确定转下期'] || '确定转下期') + '"' + row.username + '"' + (LANG['吗？'] || '吗？');
					this.confirmConfig.fn = "next";
					this.confirmConfig.obj = row;
				}
			},
			doCancel(row) {
				if (parseInt(row.id)) {
					this.confirmConfig.state = true;
					this.confirmConfig.msg = (LANG['确定取消'] || '确定取消') + '"' + row.username + '"' + (LANG['吗？'] || '吗？');
					this.confirmConfig.fn = "cancel";
					this.confirmConfig.obj = row;
				}
			},
			undo(row) {
				if (parseInt(row.id)) {
					this.confirmConfig.state = true;
					this.confirmConfig.msg = (LANG['确定撤销'] || '确定撤销') + '"' + row.username + '"' + (LANG['吗？'] || '吗？');
					this.confirmConfig.fn = "undo";
					this.confirmConfig.obj = row;
				}
			},
			doConfirm(obj) {
				let emptyObj = {};
				 ({uid: emptyObj.uid, id: emptyObj.id, username: emptyObj.username, period_name:  emptyObj.period_name, period:  emptyObj.period}  = obj.obj);
				let _this = this;
				switch (obj.fn) {
					case "grant":

                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.commission.incomes, {"list": [emptyObj], "type": 1}, {
                            ok: (res) => {
                                if (res.state === 0 && res.data === true) {
                                    //刷新数据
                                    _this.$message.success(LANG["发放成功"] || '发放成功');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(res.msg);
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
						// this.$http.patch(URL.api + ROUTES.PATCH.commission.incomes, JSON.stringify({"list": [emptyObj], "type": 1}), URLCONFIG).then((res) => {
						// 	if (res.state === 0 && res.data === true) {
						// 		//刷新数据
						// 		_this.$message.success(LANG["发放成功"] || '发放成功');
						// 		_this.updated = true;
						// 	} else {
						// 		_this.$message.error(res.msg);
						// 	}
						// 	_this.loading = false;
						//
						// })
						break;
					case "cancel":

                        this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.incomes, {"list": [emptyObj], "type": 2}, {
                            ok: (res) => {
                                if (res.state == 0 && res.data === true) {
                                    //刷新数据
                                    this.updated = true;
                                    this.$message.success(LANG["取消成功"] || '取消成功');
                                } else {
                                    this.$message.error(res.msg);
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
						// this.$http.patch(URL.api + ROUTES.PATCH.commission.incomes, JSON.stringify({"list": [emptyObj], "type": 2}), URLCONFIG).then((res) => {
						// 	if (res.data.state == 0 && res.data.data === true) {
						// 		//刷新数据
						// 		this.updated = true;
						// 		this.$message.success(LANG["取消成功"] || '取消成功');
						// 	} else {
						// 		this.$message.error(res.data.msg);
						// 	}
						// 	_this.loading = false;
						// })
						break;
					case "undo":

                        this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.incomes, {"list": [emptyObj], "type": 4}, {
                            ok: (res) => {
                                if (res.state == 0 && res.data === true) {
                                    //刷新数据
                                    this.updated = true;
                                    this.$message.success(LANG["撤销成功"] || '撤销成功');
                                } else {
                                    this.$message.error(res.msg);
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
						// this.$http.patch(URL.api + ROUTES.PATCH.commission.incomes, JSON.stringify({"list": [emptyObj], "type": 4}), URLCONFIG).then((res) => {
						// 	if (res.data.state == 0 && res.data.data === true) {
						// 		//刷新数据
						// 		this.updated = true;
						// 		this.$message.success(LANG["撤销成功"] || '撤销成功');
						// 	} else {
						// 		this.$message.error(res.data.msg);
						// 	}
						// 	_this.loading = false;
						// })
						break;
					case "release":
						let id = obj.obj;
						let obj1 = {"list": id, "type": 1};

                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.commission.incomesArr, obj1, {
                            ok: (res) => {
                                if (res.state == 0 && res.data === true) {
                                    //刷新数据
                                    let msg = res.msg;
                                    _this.$message.success(LANG[msg] || msg);
                                    _this.updated = true;
                                    //清空选中的数据
                                    this.selection = [];
                                } else {
                                    _this.$message.error(res.msg);
                                    //清空选中的数据
                                    _this.selection = [];
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
						// this.$http.patch(URL.api + ROUTES.PATCH.commission.incomesArr, JSON.stringify(obj1), URLCONFIG).then((res) => {
						// 	if (res.data.state == 0 && res.data.data === true) {
						// 		//刷新数据
						// 		let msg = res.data.msg;
						// 		_this.$message.success(LANG[msg] || msg);
						// 		_this.updated = true;
						// 		//清空选中的数据
						// 		this.selection = [];
						// 	} else {
						// 		_this.$message.error(res.data.msg);
						// 		//清空选中的数据
						// 		_this.selection = [];
						// 	}
						// 	_this.loading = false;
						// });
						break;
					case 'close':
						let idArr = obj.obj;
						let obj2 = {"list": idArr, "type": 2};

                        this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.incomesArr, obj2, {
                            ok: (res) => {
                                if (res.state == 0 && res.data === true) {
                                    //刷新数据
                                    _this.$message.success(LANG["批量取消成功"] || '批量取消成功');
                                    _this.updated = true;
                                    //清空选中的数据
                                    _this.selection = [];
                                } else {
                                    _this.$message.error(res.msg);
                                    //清空选中的数据
                                    _this.selection = [];
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
						// this.$http.patch(URL.api + ROUTES.PATCH.commission.incomesArr, JSON.stringify(obj2), URLCONFIG).then((res) => {
						// 	if (res.data.state == 0 && res.data.data === true) {
						// 		//刷新数据
						// 		_this.$message.success(LANG["批量取消成功"] || '批量取消成功');
						// 		_this.updated = true;
						// 		//清空选中的数据
						// 		_this.selection = [];
						// 	} else {
						// 		_this.$message.error(res.data.msg);
						// 		//清空选中的数据
						// 		_this.selection = [];
						// 	}
						// 	_this.loading = false;
						// })
						break;
                    case 'doBackNote':
						let idArr_note = obj.obj;
						let obj2_note = {"list": idArr_note, "type": 4};

                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.commission.incomesArr, obj2_note, {
                            ok: (res) => {
                                if (res.state == 0 && res.data === true) {
                                    //刷新数据
                                    _this.$message.success(LANG["批量撤销成功"] || '批量撤销成功');
                                    _this.updated = true;
                                    //清空选中的数据
                                    _this.selection = [];
                                } else {
                                    _this.$message.error(res.msg);
                                    //清空选中的数据
                                    _this.selection = [];
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
						// this.$http.patch(URL.api + ROUTES.PATCH.commission.incomesArr, JSON.stringify(obj2_note), URLCONFIG).then((res) => {
						// 	if (res.data.state == 0 && res.data.data === true) {
						// 		//刷新数据
						// 		_this.$message.success(LANG["批量撤销成功"] || '批量撤销成功');
						// 		_this.updated = true;
						// 		//清空选中的数据
						// 		_this.selection = [];
						// 	} else {
						// 		_this.$message.error(res.data.msg);
						// 		//清空选中的数据
						// 		_this.selection = [];
						// 	}
						// 	_this.loading = false;
						// })
                    break;
//
				}
			},
			//批量踢线
			//发放
			doRelease(item) {
				let _this = this;
				if (this.selection.length == 0) {
					this.$message.error(LANG["请选择一条数据"] || ['请选择一条数据']);
					return;
				}
				let objData = this.selection.filter(function (i) {
					return i.status === '0';
				}).map(function (item) {
					let emptyObj = {};
				 	({uid: emptyObj.uid, id: emptyObj.id, username: emptyObj.username, period_name:  emptyObj.period_name, period:  emptyObj.period}  = item);
					return emptyObj
				});
				if (objData.length > 0) {
					this.confirmConfig.state = true;
					this.confirmConfig.msg = (LANG['确定批量发送吗?'] || '确定批量发送吗?');
					this.confirmConfig.fn = "release";
					this.confirmConfig.obj = objData;
				} else {
					let str = LANG['没有未操作选项'] || '没有未操作选项';
					this.$message.error(str);
				}
			},
			//取消
			doClose(item) {
				let _this = this;
				if (this.selection.length == 0) {
					this.$message.error(LANG["请选择一条数据"] || ['请选择一条数据']);
					return;
				}
				let objData = this.selection.filter(function (i) {
					return i.status === '0';
				}).map(function (item) {
					let emptyObj = {};
				 	({uid: emptyObj.uid, id: emptyObj.id, username: emptyObj.username, period_name:  emptyObj.period_name, period:  emptyObj.period}  = item);
					return emptyObj
				});
				if (objData.length > 0) {
					this.confirmConfig.state = true;
					this.confirmConfig.msg = (LANG['确定批量发送吗?'] || '确定批量发送吗?');
					this.confirmConfig.fn = "close";
					this.confirmConfig.obj = objData;
				} else {
					let str = LANG['没有未操作选项'] || '没有未操作选项';
					this.$message.error(str);
				}

			},
            //撤销
            doBackNote(item) {
                let _this = this;
                if (this.selection.length == 0) {
                    this.$message.error(LANG["请选择一条数据"] || ['请选择一条数据']);
                    return;
                }
                let objData = this.selection.filter(function (i) {
                    return i.status === '1';
                }).map(function (item) {
                    let emptyObj = {};
                    ({uid: emptyObj.uid, id: emptyObj.id, username: emptyObj.username, period_name:  emptyObj.period_name, period:  emptyObj.period}  = item);
                    return emptyObj
                });
                if (objData.length > 0) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (LANG['确定批量撤销吗?'] || '确定批量撤销吗?');
                    this.confirmConfig.fn = "doBackNote";
                    this.confirmConfig.obj = objData;
                } else {
                    let str = LANG['没有未操作选项'] || '没有未操作选项';
                    this.$message.error(str);
                }

            },
			//返水比例查看
			showRebateProportion(row, event) {
				let data = row.rebet_percent.split("|");
				this.gridData.splice(0, this.gridData.length)
				this.gridData.push(
					{label: "体育", value: data[0]},//体育
					{label: "电子", value: data[1]},//电子
					{label: "彩票", value: data[2]},//彩票
					{label: "视讯", value: data[3]})//视讯


			},

			//显示退佣比例
			showCommissionProportion(row, event) {
				let listData = row.bkge_percent.split("|");
				this.gridData.splice(0, this.gridData.length)
				this.gridData.push(
					{label: "视讯", value: listData[0]},
					{label: "体育", value: listData[1]},
					{label: "电子", value: listData[2]},
					{label: "彩票", value: listData[3]})
			},
			//显示往期有效投注
			getPreviousBet(row, event) {
				this.gridData.splice(0, this.gridData.length)
				this.gridData.push(
					{label: '体育', value: row.pre_liushui_tiyu / 100},
					{label: '电子', value: row.pre_liushui_dianzi / 100},
					{label: '彩票', value: row.pre_liushui_caipiao / 100},
					{label: '视讯', value: row.pre_liushui_shixun / 100})
			},
			//显示当期有效投注
			getNowBet(row, event) {
				this.gridData.splice(0, this.gridData.length)
				this.gridData.push(
					{label: '体育', value: row.liushui_tiyu / 100},
					{label: '电子', value: row.liushui_dianzi / 100},
					{label: '彩票', value: row.liushui_caipiao / 100},
					{label: '视讯', value: row.liushui_shixun / 100})
			},
			getNowEarn(row, event) {
				this.gridData.splice(0, this.gridData.length)
				this.gridData.push(
					{label: '体育', value: row.mao_tiyu / 100},
					{label: '电子', value: row.mao_dianzi / 100},
					{label: '彩票', value: row.mao_caipiao / 100},
					{label: '视讯', value: row.mao_shixun / 100})
			},
			getPreviousEarn(row, event) {

				this.gridData.splice(0, this.gridData.length)
				this.gridData.push(
					{label: '体育', value: row.pre_mao_tiyu / 100},
					{label: '电子', value: row.pre_mao_dianzi / 100},
					{label: '彩票', value: row.pre_mao_caipiao / 100},
					{label: '视讯', value: row.pre_mao_shixun / 100}
				)

			},
			// 退佣查询
			getCommissionNumber(row) {
				//if(this.nowId >=0 && FORMATMONEY(row.bkge_amount) != 0){
				if (this.nowId >= 0) {
					this.nowId = row.uid;
					this.agentName = row.username;
					this.showCommissionDetail = true;
					this.nowNumber = parseInt(row.period);
				} else {
					this.$message.error(LANG['当前详情无法查看'] || '当前详情无法查看');
				}
			},
			//执行查询
			doQuery(obj) {
				this.tableUrl = this.basicUrl + this.addSearch(obj.item);
			},
			//重置查询
			resetForm() {
				this.tableUrl = this.basicUrl;
			},
			//用户名跳转
			openUserSet(item) {
				this.$router.push({path: '/agentAccount', query: {name: item.username}});
			},
			// 返回列表
			returnPage() {
				this.showCommissionDetail = false;
			}
		},
		computed: {},
		created() {
			this.init()
		},
		mounted() {

		},
        activated(){
		    this.updated = false;
		    setTimeout(()=>{
		        this.updated = true;
		        this.showCommissionDetail = false;
            },500)
        }
	}
</script>
<style>
    .floatDiv:hover {
        display: block;
    }

    /*.page{position: relative;}*/
    /*.search .outexcel{position: absolute;top:0;right:10px;}*/
    /*.floatDiv{padding:0;width:284px;height:90px;position: absolute;z-index:10;background:#ffffff;display: none;}*/
    /*.pageList{width: 100px;line-height: 40px;height: 40px;overflow: hidden;text-align: center;background: #999;float:left;margin-right: 10px; cursor: pointer;}*/
</style>
