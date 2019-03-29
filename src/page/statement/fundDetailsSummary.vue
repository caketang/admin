<template>
    <div id="fundDetailsSummary" v-loading="loading" class="clearfix">
        <el-card class="box-card">
            <el-col class="mb20">
                <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="type" @get-day="getDay"
                          :labelWidth="labelWidth" :showAdd=false @do-query="doQuery" :isEdit="isEdit"
                          @reset-form="resetForm"></formEdit>
            </el-col>
            <!--<el-col>-->
            <!--<el-button type="primary" size="small" class="outexcel" @click="doRefresh">{{LANG['刷新'] || '刷新'}}</el-button>-->
            <!--</el-col>-->
            <el-col>
                <table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header el-table--border"
                       style="width: 100%;">
                    <thead>
                    <tr class="tritem">
                        <td colspan="1" rowspan="1" class="el-table_1_column_36">
                            <div class="cell">{{LANG['收入'] || '收入'}}</div>
                        </td>
                        <td colspan="1" rowspan="1" class="el-table_1_column_36">
                            <div class="cell">{{LANG['收入金额'] || '收入金额'}}</div>
                        </td>
                        <td colspan="1" rowspan="1" class="el-table_1_column_36">
                            <div class="cell">{{LANG['支出'] || '支出'}}</div>
                        </td>
                        <td colspan="1" rowspan="1" class="el-table_1_column_36">
                            <div class="cell">{{LANG['支出明细'] || '支出明细'}}</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tditem">
                            <div class="cell">{{LANG['公司入款'] || '公司入款'}}</div>
                        </td>
                        <td>
                            <div class="cell" >
                                <el-button type="text" @click="pageJump('offlineReceipts',model.recharge_company)">
                                    <el-tag type="primary">
                                        {{model.recharge_company | formatMoney}}({{model.recharge_company_num}}人)
                                    </el-tag>
                                </el-button>
                            </div>
                        </td>
                        <td class="tditem">
                            <div class="cell">{{LANG['会员出款'] || '会员出款'}}</div>
                        </td>
                        <td>
                            <div class="cell" >
                                <el-button type="text" @click="pageJump('memberGetOut',model.withdraw_user)">
                                    <el-tag type="primary">
                                        {{model.withdraw_user | formatMoney}}({{model.withdraw_user_num}}人)
                                    </el-tag>
                                </el-button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tditem">
                            <div class="cell ">{{LANG['线上支付'] || '线上支付'}}</div>
                        </td>
                        <td>
                            <div class="cell" >
                                <el-button type="text" @click="pageJump('onLineReceipts',model.recharge_online)">
                                    <el-tag type="primary">
                                        {{model.recharge_online | formatMoney}}({{model.recharge_online_num}}人)

                                    </el-tag>
                                </el-button>
                            </div>
                        </td>
                        <td class="tditem">
                            <div class="cell">{{LANG['给予优惠'] || '给予优惠'}}</div>
                        </td>
                        <td>
                            <div class="cell">{{model.active_sum | formatMoney}}({{model.active_num}}人)</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tditem">
                            <div class="cell">{{LANG['手动存款'] || '手动存款'}}</div>
                        </td>
                        <td>
                            <div class="cell">
                                <el-button type="text" @click="pageJump('offlineReceipts',model.recharge_tz,'type')">
                                    <el-tag type="primary">
                                        {{model.recharge_tz | formatMoney}}({{model.recharge_tz_num}}人)
                                    </el-tag>
                                </el-button>
                            </div>
                        </td>
                        <td class="tditem">
                            <div class="cell">{{LANG['手动提款'] || '手动提款'}}</div>
                        </td>
                        <td>
                            <div class="cell">
                                <el-button type="text" @click="pageJump('memberGetOut',model.withdraw_tz,'type')">
                                    <el-tag type="primary">
                                        {{model.withdraw_tz | formatMoney}}({{model.withdraw_tz_num}}人)
                                    </el-tag>
                                </el-button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tditem">
                            <div class="cell">{{LANG['手动增加'] || '手动增加'}}</div>
                        </td>
                        <td>
                            <div class="cell">{{model.increase_sum | formatMoney}}({{model.increase_num}}人)</div>
                        </td>
                        <td class="tditem">
                            <div class="cell">{{LANG['手动减少'] || '手动减少'}}</div>
                        </td>
                        <td>
                            <div class="cell">{{model.outcrease_sum | formatMoney}}({{model.outcrease_num}}人)</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tditem">
                            <div class="cell">{{LANG['会员出款被扣金额'] || '会员出款被扣金额'}}</div>
                        </td>
                        <td>
                            <div class="cell">{{model.withdraw_deduct_sum | formatMoney}}({{model.withdraw_deduct_num}}人)</div>
                        </td>
                        <td class="tditem">
                            <div class="cell">{{LANG['给予返水'] || '给予返水'}}</div>
                        </td>
                        <td>
                            <div class="cell">{{model.rebet_sum | formatMoney}}({{model.rebet_num}}人)</div>
                        </td>
                    </tr>
                    </thead>
                </table>
                <div class="countRow">
                    <span class="countSpan font14">{{LANG['实际盈亏:'] || '实际盈亏:'}}</span>
                    <span class="countNum mr20"
                          :class="{state_danger: parseFloat(model.true_total) < 0 }">{{model.true_total | formatMoney}}</span>
                    <span class="countSpan font14">{{LANG['账目统计:'] || '账目统计:'}}</span>
                    <span class="countNum mr20"
                          :class="{state_danger: parseFloat(model.account_total) < 0 }">{{model.account_total | formatMoney}}</span>
                </div>
            </el-col>
        </el-card>
    </div>
</template>
<script>
    import formEdit from '../../components/formEdit.vue'

    export default {
        data() {
            return {
                LANG,
                tableUrl: "",
                baseUrl: '',
                tableDate: [],
                model: {},
                sday: sessionStorage.dateTimeStart,
                eday: sessionStorage.dateTimeEnd,
                //搜索相关
                searchConfig: [
                    {"type": "quickDate", "showTimes": true},//快捷日期
                    {
                        "type": "dateGroup", "label": "日期", "prop": [
                        {"prop": "day_begin", "value": "", "label": "开始时间"},
                        {"prop": "day_end", "value": "", "label": "结束时间"}
                    ]
                    },
                    {
                        "prop": "type",
                        "value": "1",
                        "label": "账号体系",
                        "type": "select",
                        "list": [{'label': '会员', 'value': '1'}]
                    },
                    {"prop": "member_name", "value": "", "type": "text", "label": "用户名", 'placeholder': "请输入用户名"},
                ],
                type: "search",
                labelWidth: "120px",
                formVisible: {
                    state: false
                },
                isEdit: {
                    state: false
                },
                loading: false,
                query: {
                    member_name: '',
                    day_begin: '',
                    day_end: '',
                    type: ''
                }
            }
        },
        components: {
            formEdit: formEdit
        },
        methods: {
            init(str) {
                this.loading = true;
                if (str) {
                    this.tableUrl = this.baseUrl + str;
                } else {
                    this.tableUrl = URL.api + ROUTES.GET.cash.trade + `?day_begin=${this.sday}&day_end=${this.eday}`;
                }
                this.query.day_begin = this.query.day_begin || this.sday;
                this.query.day_end = this.query.day_end || this.eday;
                this.baseUrl = URL.api + ROUTES.GET.cash.trade;
                let tableUrl = this.tableUrl;
                this.model = {
                    account_total: 0,
                    active_num: 0,
                    active_sum: 0,
                    increase_num: 0,
                    increase_sum: 0,
                    outcrease_num: 0,
                    outcrease_sum: 0,
                    rebet_num: 0,
                    rebet_sum: 0,
                    recharge_company: 0,
                    recharge_company_num: 0,
                    recharge_online: 0,
                    recharge_online_num: 0,
                    recharge_tz: 0,
                    recharge_tz_num: 0,
                    true_total: 0,
                    withdraw_deduct_num: 0,
                    withdraw_deduct_sum: 0,
                    withdraw_tz: 0,
                    withdraw_tz_num: 0,
                    withdraw_user: 0,
                    withdraw_user_num: 0
                };
                let _this = this;
                if (tableUrl != null && tableUrl != "") {

					this.$.autoAjax('get',tableUrl, '', {
						ok: (res) => {
							if (res.state === 0 && res.data) {
								_this.model = res.data;
								for (let k in res.data) {
									_this.model[k] = res.data[k];
								}
							} else {
								_this.$message.error(res.msg);
							}
							_this.loading = false;
						},
						p: () => {
						},
						error: e => {
							_this.loading = false;
						}
					})
//                     this.$http.get(tableUrl, URLCONFIG).then((res) => {
//                         if (res.data.state === 0 && res.data.data) {
//                             _this.model = res.data.data;
//                             for (let k in res.data.data) {
//                                 _this.model[k] = res.data.data[k];
//                             }
//                         } else {
//                             _this.$message.error(res.data.msg);
//                         }
//                         _this.loading = false;
//                     }).catch((err) => {
//                         _this.loading = false;
// //                        console.log(err)
//                     })
                }
            },
            //刷校招页面
            doRefresh() {
                this.init()
            },
            // 页面跳转处理
            pageJump(type, num, history) {
                if (FORMATMONEY(num)) {
                    if (history) {
                        this.query.type = 2;
                    } else {
                        this.query.type = '';
                    }
                    this.$router.push({path: ('/' + type), query: this.query});
                } else {
                    this.$message.error(LANG['无金额不需跳转查看'] || '无金额不需跳转查看');
                }
            },
            //获取日期
            //查询数据
            doQuery(obj) {
                let str = "";
                if (obj.item.type && !obj.item.member_name) {
                    this.$message.error(LANG['请输入用户名'] || '请输入用户名');
                    return;
                }
                if (obj.item.member_name && !obj.item.type) {
                    this.$message.error(LANG['请选择帐号体系'] || '请选择帐号体系');
                    return;
                }
                if (!obj.item.day_begin || !obj.item.day_end) {
                    this.$message.error(LANG['请输入完整的日期查询'] || '请输入完整的日期查询');
                    return;
                }
                this.query.member_name = obj.item.member_name;
                this.query.day_begin = obj.item.day_begin;
                this.query.day_end =  obj.item.day_end;
                this.query.type = obj.item.type;
                str = this.addSearch(obj.item);
                this.init(str);
            },
            getDay(obj) {
                this.sday = obj.sday;
                this.eday = obj.eday;
                this.query.day_begin = this.sday;
                this.query.day_end = this.eday;
                this.init()
            },
            resetForm(obj) {
                let str = '?day_begin=' + sessionStorage.dateTimeStart + '&day_end=' + sessionStorage.dateTimeEnd;
                this.query.day_begin = sessionStorage.dateTimeStart;
                this.query.day_end = sessionStorage.dateTimeEnd;
                this.init(str);
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
    .page {
        position: relative;
    }

    .outexcel {
        float: right;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .cell {
        text-align: center;
    }

    .tditem {
        background-color: #eef1f6;
    }

    .tritem {
        background-color: #d3dce6 !important;
    }

    .countRow {
        color: #303133;
        padding: 10px 0;
        text-align: right;
    }

    .mb20 {
        margin-bottom: 20px !important;
    }
</style>
