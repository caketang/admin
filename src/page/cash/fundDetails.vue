<template>
    <div id="fundDetails">
        <div class="search">
            <formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="searchConfig" :type="type"
                      :showAdd=false :labelWidth="labelWidth" :isEdit="isEdit" @do-query="doQuery"
                      @reset-form="resetForm"></formEdit>
        </div>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableIndex="false"
                    :tableCheck="false"
                    :tableUrl="tableUrl"
                    :getData="true"
                    @get-table-data="getTableData"
                    @do-handle="doHandle">
                <!-- 汇总 -->
                <tr :span="12" class="sumdiv ml20" slot="other" v-if="sumShow">
                    <td colspan="15">
                        <div class="cell">
                            <span class="font14 ">{{LANG['金额小计'] || '金额小计'}} </span>:<span class="state_success font16"> {{allData.page_money_sum | formatMoney}}</span>
                            <span class="font14 ml10 ">{{LANG['金额总计'] || '金额总计'}} </span>:<span class="state_blue font16"> {{allData.total_money_sum | formatMoney}}</span>
                        </div>
                    </td>
                </tr>
            </tablegrid>
        </el-col>
    </div>
</template>
<script>
    import datepicker from '../../components/datepicker.vue'
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'

    export default {
        data() {
            return {
                LANG,
                //查询条件
//                system:"",
//                systemList:[],
//                username:"",
//                transactionCategory:"",
//                transactionCategoryList:[],
//                transactionType:"",
//                transactionTypeList:[],
                //日期初始时间
                Sdate: {
                    "dateStart": "",
                    "dateEnd": ""
                },
                //数据接口地址
                tableUrl: "",
                //列配置接口地址
                columnsUrl: "",
                //搜索条件
                type: "search",
                formTitel: "",
                labelWidth: "90px",
                isEdit: {},
                formVisible: {
                    state: false
                },

                searchConfig: [
                    {"type":"quickDate","showTimes": true},//快捷日期
                    {
                        "prop": "user_type", "value": "", "type": "select", "label": "体系",
                        "list": ARRAYS.users
                    },
                    {"prop": "username", "value": "", "type": "text", "label": "用户名"},
                    {
                        "prop": "deal_category", "value": "", "type": "select", "label": "交易类别",
                        "list": [
                            {"value": "", "label": "全部", "ifkey": "deal_type"},
                            {"value": "1", "label": "收入", "ifkey": "deal_type"},
                            {"value": "2", "label": "支出", "ifkey": "deal_type"},
                            {"value": "3", "label": "额度转换", "ifkey": "deal_type"}]
                    },
                    {
                        "prop": "deal_type", "value": "", "label": "交易类型", "type": "select",
                        "list": [{"value": "", "label": "全部",}], "ifKey": "deal_category", "ifVal": ""
                    },
                    {
                        "prop": "deal_type", "value": "", "label": "交易类型", "type": "select",
                        "list": [], "ifKey": "deal_category", "ifVal": "2"
                    },
                    {
                        "prop": "deal_type", "value": "", "label": "交易类型", "type": "select",
                        "list": [], "ifKey": "deal_category", "ifVal": "1"
                    },
                    {
                        "prop": "deal_type", "value": "", "label": "交易类型", "type": "select",
                        "list": [], "ifKey": "deal_category", "ifVal": "3"
                    },
//                    {"type":"dateGroup","label":"交易时间","prop":[{"prop":"register_from","value":"","label":""},{"prop":"register_to","value":"","label":""}]},
                    {
                        "type": "dateGroup",
                        "label": "交易时间",
                        "prop": [{"prop": "start_time", "value": "", "label": ""}, {
                            "prop": "end_time",
                            "value": "",
                            "label": ""
                        }]
                    },
                ],
                baseUrl: "",
                sumShow: false,
                allData : {
                    "page_money_sum" : 0,
                    "total_money_sum" : 0,
                    "total": 0
                },

            }
        },
        components: {
            datepicker: datepicker,
            tablegrid: tableGrid,
            formEdit: formEdit
        },
        methods: {
            init() {
                this.columnsUrl = "static/json/cash/fundDetails/columns.json";
                this.baseUrl = URL.api + ROUTES.GET.funds.flow;
                if (this.$route.query.username) {
                    this.searchConfig[2]['value'] = this.$route.query.username;
                    this.tableUrl = URL.api + ROUTES.GET.funds.flow + "?username=" + this.$route.query.username + "?start_time=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
                } else {
                    this.tableUrl = URL.api + ROUTES.GET.funds.flow + "?start_time=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
                }
                let _this = this;

				this.$.autoAjax('get',URL.api + ROUTES.GET.funds.flows, '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							let funds = res.data;
							let tradetype = _this.searchConfig[3].list;
							for (let index in funds) {
								if (funds[index].id == 1) {
									for (let ele in funds[index].children) {

										_this.searchConfig[6].list.push({
											"label": funds[index].children[ele].name,
											"value": funds[index].children[ele].id
										});
									}
								}
								if (funds[index].id == 2) {
									for (let ele in funds[index].children) {

										_this.searchConfig[5].list.push({
											"label": funds[index].children[ele].name,
											"value": funds[index].children[ele].id
										});
									}
								}
								if (funds[index].id == 3) {
									for (let ele in funds[index].children) {

										_this.searchConfig[7].list.push({
											"label": funds[index].children[ele].name,
											"value": funds[index].children[ele].id
										});
									}
								}
								for (let trade in tradetype) {

									if (tradetype[trade].label == funds[index].name) {

										tradetype[trade].value = funds[index].id
									}
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
                // this.$http.get(URL.api + ROUTES.GET.funds.flows, URLCONFIG).then((res) => {
                //     if (res.data.state == 0 && res.data.data) {
                //         let funds = res.data.data;
                //         let tradetype = _this.searchConfig[3].list;
                //         for (let index in funds) {
                //             if (funds[index].id == 1) {
                //                 for (let ele in funds[index].children) {
				//
                //                     _this.searchConfig[6].list.push({
                //                         "label": funds[index].children[ele].name,
                //                         "value": funds[index].children[ele].id
                //                     });
                //                 }
                //             }
                //             if (funds[index].id == 2) {
                //                 for (let ele in funds[index].children) {
				//
                //                     _this.searchConfig[5].list.push({
                //                         "label": funds[index].children[ele].name,
                //                         "value": funds[index].children[ele].id
                //                     });
                //                 }
                //             }
                //             if (funds[index].id == 3) {
                //                 for (let ele in funds[index].children) {
				//
                //                     _this.searchConfig[7].list.push({
                //                         "label": funds[index].children[ele].name,
                //                         "value": funds[index].children[ele].id
                //                     });
                //                 }
                //             }
                //             for (let trade in tradetype) {
				//
                //                 if (tradetype[trade].label == funds[index].name) {
				//
                //                     tradetype[trade].value = funds[index].id
                //                 }
                //             }
                //         }
                //     }
                // })
                // this.systemList = ARRAYS.users;
                // this.transactionCategoryList = ARRAYS.transactionCategory;
                // this.transactionTypeList = ARRAYS.transactionTypes;
                // console.log(this.transactionTypeList)
            },
            //执行查询
            doQuery(obj) {
                this.tableUrl = this.baseUrl + this.addSearch(obj.item)
            },
            //重置查询
            resetForm() {
                this.tableUrl = this.baseUrl + "?start_time=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
            },
            //表格内按钮事件
            doHandle(e) {
                switch (e.fn) {
                    case "openUserInformation":
                        // this.$message.error(LANG['权限不足！'] || '权限不足！');
                        // return;
                        this.openUserInformation(e.row)
                        break
                }
            },
            openUserInformation(row) {
                // console.log(row);
                this.$router.push({path: "/memberManagement", query: {name: row.username}});
            },
            //取表数据
            getTableData(obj){
                this.sumShow = false;
                this.allData = {};
                if (obj.allData && obj.allData.attributes && obj.allData.attributes.total>0) {
                    let model = obj.allData.attributes;
                    this.sumShow = true;
                    for(let i in model){
                        this.allData[i] = model[i];
                    }
                }
            },

        },
        computed: {},
        mounted() {
        },
        created() {
            this.init()
        },
        activated() {
            if (this.$route.query.username) {
                this.tableUrl = URL.api + ROUTES.GET.funds.flow + "?username=" + this.$route.query.username;
            }
        },
        deactivated() {
            this.$route.query.username = null;
        }
    }
</script>
<style scoped>
    .page {
        position: relative
    }

    .search .el-form-item__label {
        width: 80px
    }

    .search .el-form-item {
        width: 200px;
        float: left;
        margin-bottom: 1px
    }

    .search .el-form-item.lg {
        width: 330px;
        float: left;
    }

    .search .el-form .el-col .line {
        text-align: center
    }

    .search .el-form .formbtn {
        float: left;
        margin-left: 10px;
        padding-top: 5px
    }

    .search .el-form .outexcel {
        position: absolute;
        top: 0;
        right: 10px
    }

    .vipDialog .el-form-item__content {
        margin: 0 auto;
    }

    .vipDialog .grid-content {
        line-height: 36px;
        text-align: right;
        padding-right: 8px;
    }

    .vipDialog .el-dialog {
        min-width: 860px;
    }

    .vipDialog .groupBuying {
        width: 10%;
        min-width: 60px;
    }

    .el-row {
        margin-bottom: 20px;
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
        line-height: 36px;
    }

    .bg-purple {
        background: #d3dce6;
        line-height: 36px;
        padding-left: 10px
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>