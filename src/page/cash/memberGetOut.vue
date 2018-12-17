<template>
    <div id="memberGetOut" class="clearfix" v-loading="loading">
        <div class="search">
            <formEdit :formTitel="formTitel"
                      :formVisible="formVisible"
                      :formConfig="searchConfig"
                      :type="type"
                      :labelWidth="labelWidth"
                      :isEdit="isEdit"
                      :formType="formType"
                      :initDate="initDate"
                      :updateDate="updateDate"
                      @do-query="doQuery"
                      @reset-form="resetForm"
                      :showAdd="false"></formEdit>
        </div>
        <el-col>
            <tablegrid
                :columnsUrl="columnsUrl"
                :updated="updated"
                :tableUrl="tableUrl"
                :autoshowRefresh="true"
                :showExport="isShow"
                :getData="true"
                :automation="true"
                @get-table-data="getTableDatatwo"
                @do-handle="doHandle"
                @export-data="exportData"
            >
                <!-- 汇总 -->
                <tr :span="12" class="sumdiv ml20" slot="other" v-if="sumShow">
                    <td colspan="15">
                        <div class="cell">
                            <span
                                class="font14 tCent">{{LANG['小计'] || '小计'}} : {{allData.money_page_sum | formatMoney}}</span>
                            <span
                                class="font14 ml10">{{LANG['总计'] || '总计'}} : {{allData.money_total_sum | formatMoney}}</span>
                            <span class="ml10 mr10"> | </span>
                            <span
                                class="font14">{{LANG['实际金额小计'] || '实际金额小计'}} : {{allData.actual_page_sum | formatMoney}}</span>
                            <span
                                class="font14 ml10">{{LANG['实际金额总计'] || '实际金额总计'}} : {{allData.actual_total_sum | formatMoney}}</span>
                            <span class="ml10 mr10"> | </span>
                            <span class="font14">{{LANG['扣除金额小计'] || '扣除金额小计'}}: {{allData.deduct_page_sum | formatMoney}}</span>
                            <span
                                class="font14 ml10">{{LANG['扣除金额总计'] || '扣除金额总计'}} : {{allData.deduct_total_sum | formatMoney}}</span>
                            <span class="ml10 mr10"> | </span>
                            <span class="font14">{{LANG['笔数'] || '笔数'}} : {{allData.total}}</span>
                        </div>
                    </td>
                </tr>
            </tablegrid>
            <div class="help_gray" style="margin-top: -40px;margin-left: 20px;" v-if="sumShow">
                预备出款： 多客服给同一会员出款，在给出款前可以先点预备出款，可以先看到操作者来区别（可以不点）
            </div>
        </el-col>
        <el-col>
            <el-dialog title="提示" :visible.sync="dialogVisible" size="tiny">
                {{LANG['点击”确认“导出数据'] || '点击”确认“导出数据'}}
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <a :href="outUrl" target="_blank" id="outUrl">
                        <el-button type="primary" @click="dialogVisible = false">确 认</el-button>
                    </a>
              </span>
            </el-dialog>
        </el-col>
        <!--详情-->
        <el-col>
            <el-dialog :title="LANG['会员提现详情'] || '会员提现详情'" v-model="editVisible" class="vipDialog" size="large">
                <el-form :model="editForm" ref="editForm">
                    <el-col class="state_danger">
                        {{LANG['会员备注'] || '会员备注'}}： {{editForm.comment}}
                    </el-col>
                    <!--取款信息-->
                    <el-col :span="24" style="margin-bottom:20px;">
                        <div class="grid-content bg-purple-dark" style="text-align: center;">
                            {{LANG['取款信息'] || '取款信息'}}
                        </div>
                    </el-col>
                    <el-row :gutter="22">
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['申请金额'] || '申请金额'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span>{{editForm.money | filterMoneyIsNull}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['操作者'] || '操作者'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span>{{editForm.process_uname}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['申请IP'] || '申请IP'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span>{{editForm.ip}}</span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="22">
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['取款银行'] || '取款银行'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span v-if="editForm.receive_bank_info">{{editForm.receive_bank_info.bank}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['户名'] || '户名'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span
                                    v-if="editForm.receive_bank_info">{{editForm.receive_bank_info.accountname}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['支行'] || '支行'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span v-if="editForm.receive_bank_info">{{editForm.receive_bank_info.address}}</span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <!--<el-row :gutter="22">-->
                    <!--<el-col :span="4">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['今日取款次数'] || '今日取款次数'}}</span></div>-->
                    <!--</el-col>-->
                    <!--<el-col :span="8">-->
                    <!--<el-form-item>-->
                    <!--<span>{{editForm.today_withdraw_times}}</span>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--<el-col :span="4">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['今日取款金额'] || '今日取款金额'}}</span></div>-->
                    <!--</el-col>-->
                    <!--<el-col :span="8">-->
                    <!--<el-form-item>-->
                    <!--<span>{{editForm.today_withdraw_money | filterMoneyIsNull}}</span>-->
                    <!--</el-form-item>-->
                    <!--</el-col>-->
                    <!--</el-row>-->
                    <el-row :gutter="22">
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['银行帐号'] || '银行帐号'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span v-if="editForm.receive_bank_info">{{editForm.receive_bank_info.card}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['申请时间'] || '申请时间'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span>{{editForm.created}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['最后确认时间'] || '最后确认时间'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span>{{editForm.confirm_time}}</span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <!--新增字段-->
                    <el-row :gutter="22">
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['总入款'] || '总入款'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span>{{editForm.deposit_money}}</span> |
                                <span>{{editForm.deposit_times}}笔</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['总出款'] || '总出款'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span>{{editForm.withdraw_money}}</span> |
                                <span>{{editForm.withdraw_times}}笔</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['盈利情况'] || '盈利情况'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span>{{editForm.lose_earn}}</span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <!--稽核信息-->
                    <el-row>
                        <el-col>
                            <div class="cell" v-if="tableDate.level_config">
                                <span
                                    class="font14 tCent">{{LANG['当前会员所在层级行政费比例'] || '当前会员所在层级行政费比例'}} : {{(tableDate.level_config.withdraw_expenese || '') | formatNumber(0)}} %</span>
                                <span class="ml10 mr10"> | </span>
                                <span
                                    class="font14 ml10">{{LANG['行政费上限'] || '行政费上限'}} : {{(tableDate.level_config.max_expenese || '') | formatMoney}}</span>
                                <span class="ml10 mr10"> | </span>
                                <span
                                    class="font14">{{LANG['免稽核额度'] || '免稽核额度'}} : {{(tableDate.level_config.nocheck || '') | formatMoney}}</span>
                            </div>
                        </el-col>
                        <el-col :span="24" class="mb20">
                            <div class="grid-content bg-purple-dark tCent" style="color:#fff;">{{LANG['稽核信息'] || '稽核信息'}}</div>
                            <!--<editTable-->
                            <!--:columnsUrl="formColumnsUrl"-->
                            <!--:tableData = "tableDate"-->
                            <!--:pageSet="false"-->
                            <!--:automation = "true"-->
                            <!--@do-handle="doHandleDetail"></editTable>-->
                            <!--<div class="el-dropdown-menu floatDiv" ref="floatDiv" id="tooltip" style="display: none">-->
                            <!--<el-table :data="gridData" border>-->
                            <!--<el-table-column v-for="(item,index) in gridDataCol" width="71" :key="index"-->
                            <!--:prop="item.flag" :label="item.name"></el-table-column>-->
                            <!--</el-table>-->

                            <!--</div>-->
                            <el-table :data="tableDate.list" border class="tCent">
                                <el-table-column width="210" label="交易时间">
                                    <template slot-scope="scope">
                                        <p>起始：{{scope.row.start_date}}</p>
                                        <p>结束：{{scope.row.end_date}}</p>
                                    </template>
                                </el-table-column>
                                <el-table-column property="money" label="存款金额"></el-table-column>
                                <el-table-column property="coupon_money" label="优惠金额"></el-table-column>
                                <el-table-column property="valid_bet" label="有效投注额">
                                    <template slot-scope="scope">
                                        <el-tooltip placement="right" effect="light">
                                            <div slot="content">
                                                <p v-for="(item,key) in gridDataCol" :key="key" :class="{mt10:key >0}">
                                                    <el-tag type="primary">{{item.name}} :</el-tag>
                                                    <span class="pleft">{{item.valid_bet / 100}}</span></p>
                                            </div>
                                            <el-tag type="primary" size="small" style="min-width:60px;"
                                                    @mouseenter.native.prevent="showCommissionProportion(scope.row,$event)">
                                                {{scope.row.valid_bet}}
                                            </el-tag>
                                        </el-tooltip>
                                    </template>
                                </el-table-column>
                                <el-table-column property="withdraw_bet_principal" label="常态打码量"></el-table-column>
                                <el-table-column property="withdraw_bet_coupon" label="优惠打码量"></el-table-column>
                                <el-table-column property="is_pass" label="是否达到投注">
                                    <template slot-scope="scope">
                                        <span
                                            :class="scope.row.is_pass=='是'? 'pass':'nopass' ">{{scope.row.is_pass}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column property="deduct_coupon" label="扣优惠"></el-table-column>
                                <el-table-column property="deduct_admin_fee" label="扣除行政费"></el-table-column>
                            </el-table>
                        </el-col>
                        <el-col :span="24" class="mb20" v-if="auditData.data">
                            <p>需扣除优惠金额：<span>{{auditData.data.total_coupon | filterMoneyIsNull}}</span></p>
                            <p>扣除行政费：<span>{{auditData.data.total_admin_fee | filterMoneyIsNull}}</span></p>
                            <p>
                                共需扣除：出款手续费 <span>{{auditData.data.total_fee | filterMoneyIsNull}}</span>+行政费 <span>{{auditData.data.total_admin_fee | filterMoneyIsNull}}</span>+扣除优惠金{{auditData.data.total_coupon | filterMoneyIsNull}}= <span>{{auditData.data.total_coupon + auditData.data.total_admin_fee + auditData.data.total_fee | filterMoneyIsNull}}</span>
                            </p>
                        </el-col>
                    </el-row>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="editVisible = false">{{LANG['关闭'] || '关闭'}}</el-button>
                    <!--<el-button @click="doAdopt" type="primary">{{_('预备支付')}}</el-button>-->
                    <!--<el-button @click="doRefuse" type="primary">{{_('拒绝')}}</el-button>-->
              </span>
            </el-dialog>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <el-col>
            <el-dialog :title="feeName" v-model="feeVisi" size="tiny">
                <el-row :gutter="20" type="flex" justify="center">
                    <el-col :span="8" :pull="2">
                        <div class="grid-content bg-purple tCent"><span>{{LANG['应扣款'] || '应扣款'}}</span></div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple tCent"><span>{{LANG['实扣款'] || '实扣款'}}</span></div>
                    </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" justify="center">
                    <el-col :span="8" :pull="2">
                        <div class="grid-content bg-purple tCent"><span>手续费:{{receivable.fee}}</span></div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple tCent">
                            <el-input v-model="withdraw.fee" type="number"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" justify="center">
                    <el-col :span="8" :pull="2">
                        <div class="grid-content bg-purple tCent"><span>优惠:{{receivable.coupon}}</span></div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple tCent">
                            <el-input v-model="withdraw.coupon" type="number"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" justify="center">
                    <el-col :span="8" :pull="2">
                        <div class="grid-content bg-purple tCent"><span>行政费:{{receivable.management_cost}}</span></div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple tCent">
                            <el-input v-model="withdraw.management_cost" type="number"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20" type="flex" justify="center">
                    <el-col :span="4">
                        <div class="tCent">
                            <el-button type="primary" @click="saveFee">提 交</el-button>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class=" tCent">
                            <el-button @click="feeVisi = false">取 消</el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-dialog>
        </el-col>
        <el-col>
            <el-dialog
                title="当前用户的备注信息:"
                :visible.sync="dialogVisibleMemo"
                size="tiny"
                :before-close="handleCloseMemo">
                <el-form>
                    <el-form-item>
                        <el-input type="textarea"
                                  :rows="2"
                                  v-model="memoText"
                                  placeholder="当前用户暂无备注信息"
                                  v-if=" memoText ==''|| memoText == undefined">
                        </el-input>
                        <el-input
                            type="textarea"
                            :rows="2"
                            :placeholder="memoText"
                            v-model="memoText"
                            v-else>
                        </el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisibleMemo = false">关 闭</el-button>
                <el-button type="primary" class="formSave" @click="editMemoSubmit">修 改</el-button>
  </span>
            </el-dialog>
        </el-col>
    </div>
</template>
<script>
    import datepicker from '../../components/datepicker.vue'
    import tableGrid from '../../components/tableGrid.vue'
    import editTable from '../../components/editTable.vue'
    import formEdit from '../../components/formEdit.vue'
    import confirm from '../../components/confirm.vue';

    export default {
        data() {
            return {
                feeName: "",
                feeVisi: false,
                LANG,
                memberGradeList: [],
                //备注弹窗
                dialogVisibleMemo: false,
                //备注内容
                memoText: '',
                memoTextUid: '',
                //搜索条件
                type: "search",
                formTitel: "",
                labelWidth: "90px",
                isEdit: {},
                formVisible: {
                    state: false
                },
                searchConfig: [
                    {"type": "quickDate", "showTimes": true},//快捷日期
                    //ID1
                    {"prop": "member_name", "value": "", "type": "text", "label": "用户名"},
                    //ID2
                    {"prop": "trade_no", "value": "", "type": "text", "label": "订单号"},
                    {
                        "prop": "ranting",
                        "value": [],
                        "label": "会员层级",
                        "sReset": false,
                        "checkAll": true,
                        "allBtnShow": true,
                        "type": "checkGroup",
                        "list": [],
                        "Arr": [],

                    },
                    {
                        "type": "dateGroup",
                        "label": "申请时间",
                        "prop": [
                            {"prop": "date_from", "value": "", "label": "开始时间"},
                            {"prop": "date_to", "value": "", "label": "结束时间"}
                        ]
                    },
                    {
                        "type": "numberGroup",
                        "label": "申请金额",
                        "prop": [{"prop": "money_from", "value": null}, {"prop": "money_to", "value": null}]
                    },
                    {
                        "prop": "status",
                        "value": [],
                        "label": "提款状态",
                        "sReset": false,
                        "checkAll": true,
                        "allBtnShow": true,
                        "type": "checkGroup",
                        "list": ["已取消", "已拒绝", "出款中", "待处理", "付款成功"],
                        "Arr": [{"label": "已取消", "value": "refused"},
                            {"label": "出款中", "value": "prepare"},
                            {"label": "待处理", "value": "pending"},
                            {"label": "已拒绝", "value": "rejected"},
                            {"label": "付款成功", "value": "paid"}],
                    },
                    {
                        "prop": "type",
                        "value": "",
                        "label": "提款方式",
                        "type": "select",
                        "list": [
                            {"label": "全部", "value": ""},
                            {"label": "线上", "value": '1'},
                            {"label": "手动", "value": '2'},
                        ]
                    },
                    {"prop": "admin_user", "value": "", "type": "text", "label": "操作者"},
                    {"prop": "tag", "value": "", "type": "text", "label": "会员标签"}
                ],
                //数据接口地址
                tableDate: {
                    list: []
                },
                tableUrl: "",
                baseUrl: "",
                columnsUrl: "",
                //弹窗表格
                formTableUrl: "",
                formColumnsUrl: "",
//                sumArr:[3000,2700],
                //打标签弹窗
                editVisible: false,
                editForm: {
                    id: -1,
                },
                //全局id
                id: null,
                updated: false,
                //确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                auditData: {},
                withdraw: {
                    fee: "",
                    management_cost: "",
                    coupon: "",
                },
                receivable: {
                    fee: "",
                    management_cost: "",
                    coupon: "",
                },
                feeId: 0,
                // 有效投注额表格
                gridData: [],
                gridDataCol: [],
                formType: "",
                loading: false,
                allData: {
                    "page_sum": 0,
                    "total_sum": 0
                },
                // 数据导出相关
                outUrl: "",
                dialogVisible: false,
                // 是否初始化时间
                initDate: false,
                sumShow: false,
                allData: {},
                // 查询条件
                searchObj: {},
                updateDate: "",
                user_id: 0,
                isShow: sessionStorage.user_withdraws_export == 'true' ? true : false
            }
        },
        components: {
            datepicker: datepicker,
            tablegrid: tableGrid,
            formEdit: formEdit,
            confirm: confirm,
            editTable: editTable
        },
        methods: {
            init() {
                let _this = this;
                // 判断query是否有值
                if (JSON.stringify(this.$route.query) == "{}") {
                    this.tableUrl = URL.api + ROUTES.GET.cash.withdraws + "?date_from=" + sessionStorage.sysTime + " 00:00:00&date_to=" + sessionStorage.sysTime + ' 23:59:59';
                }
                this.baseUrl = URL.api + ROUTES.GET.cash.withdraws;
                this.columnsUrl = "static/json/cash/memberGetOut/columns.json";

				this.$.autoAjax('get',URL.api + ROUTES.GET.user.level.list, '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							let model = res.data;
							for (let i in model) {
								_this.searchConfig[3].list.push(model[i].name);
								_this.searchConfig[3].Arr.push({
									"label": model[i].name,
									"value": model[i].id
								})
							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.user.level.list, URLCONFIG).then((res) => {
                //     if (res.data.state == 0 && res.data.data) {
                //         let model = res.data.data;
                //         for (let i in model) {
                //             _this.searchConfig[3].list.push(model[i].name);
                //             _this.searchConfig[3].Arr.push({
                //                 "label": model[i].name,
                //                 "value": model[i].id
                //             })
                //         }
                //     }
                // }).catch(e => {
					// console.log(e)
                // });
                _this.searchObj.date_from = sessionStorage.sysTime + ' 00:00:00';
                _this.searchObj.date_to = sessionStorage.sysTime + ' 23:59:59';
                _this.searchConfig[3].list = this.memberGradeList;
            },

            //执行查询
            doQuery(obj) {
                let temp = {};
                for (let k in obj.item) {
                    if (k === 'status') {
                        let temparr = obj.item[k] || [];
                        let list = this.searchConfig[6].Arr || [];
                        let arrs = [];
                        for (let i = 0; i < temparr.length; i++) {
                            for (let j = 0; j < list.length; j++) {
                                if (temparr[i] === list[j].label) {
                                    arrs.push(list[j].value);
                                }
                            }
                        }
                        temp[k] = arrs.toString();
                    } else if (k === 'ranting') {
                        let temparr = obj.item[k] || [];
                        let list = this.searchConfig[3].Arr || [];
                        let arrs = [];
                        for (let i = 0; i < temparr.length; i++) {
                            for (let j = 0; j < list.length; j++) {
                                if (temparr[i] === list[j].label) {
                                    arrs.push(list[j].value);
                                }
                            }
                        }
                        temp[k] = arrs.toString();
                    } else {
                        temp[k] = obj.item[k];
                    }
                }
                if (temp.money_to > 0) {
                    temp.money_from = temp.money_from * 100;
                    temp.money_to = temp.money_to * 100;
                }
                for (let i in temp) {
                    this.searchObj[i] = temp[i];
                }
                this.tableUrl = this.baseUrl + this.addSearch(temp)
            },
            //表格内按钮事件
            doHandle(e) {
                this.updated = false;
                this.id = e.row.id;
                this.user_id = e.row.user_id;
                switch (e.fn) {
                    case "doDetail":
                        this.doDetail(e.row)
                        break
                    case "doPay":
                        this.doPay(e.row)
                        break
                    case "doPrepare":
                        this.doPrepare(e.row)
                        break
                    case "doRefuse":
                        this.doRefuse(e.row);
                        break
                    case "openUserInformation":
                        this.openUserInformation(e.row)
                        break
                    case "changeFee":
                        this.changeFee(e.row, event)
                        break
                    case "doReject":
                        this.doReject(e.row, event)
                        break
                    case "doMemo":
                        this.doMemo(e.row, event)
                        break
                    case "doUpdate":
                        this.doUpdate(e.row, event)
                        break
                }
            },
            doHandleDetail(e) {
                this.id = e.row.id;
                switch (e.fn) {
                    case "showCommissionProportion":
                        this.showCommissionProportion(e.row, event)
                        break
                    case "hideRebateProportion":
                        this.hideRebateProportion(item.row, item.event)
                        break;
                }
            },
            changeFee(obj, event) {
                if (obj.status === "pending") {
                    this.feeId = obj.id
                    this.feeVisi = true;
                    this.feeName = '修改' + obj.user_name + '扣款';
                    this.receivable.fee = (obj.fee / 100).toFixed(2);
                    if (!obj.coupon_money) {
                        this.receivable.coupon = 0;
                    } else {
                        this.receivable.coupon = (obj.coupon_money / 100).toFixed(2);
                    }
                    this.receivable.management_cost = (obj.admin_fee / 100).toFixed(2);
                    this.withdraw = JSON.parse(JSON.stringify(this.receivable))
                    this.updated = false;
                } else {
                    this.$message.error(LANG['已处理,不能修改'] || '已处理,不能修改');
                }
            },
            saveFee() {
                let _this = this;
                let obj = {
                    fee: this.withdraw.fee * 100,
                    coupon: this.withdraw.coupon * 100,
                    management_cost: this.withdraw.management_cost * 100,
                }

				this.$.autoAjax('patch',URL.api + ROUTES.PATCH.cash.withdraw.fee + this.feeId, obj,{
					ok: (res) => {
						if (res.state == 0 && res.data) {
							_this.$message.success(LANG['保存成功'] || '保存成功');
							_this.feeVisi = false;
							_this.updated = true;
						} else {
							_this.$message.error(LANG['保存失败'] || '保存失败');
						}
						this.feeId = 0;
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
//                 this.$http.patch(URL.api + ROUTES.PATCH.cash.withdraw.fee + this.feeId, JSON.stringify(obj), URLCONFIG).then(res => {
//
//                     if (res.data.state == 0 && res.data.data) {
//                         _this.$message.success(LANG['保存成功'] || '保存成功');
//                         _this.feeVisi = false;
//                         _this.updated = true;
//
//                     } else {
//                         _this.$message.error(LANG['保存失败'] || '保存失败');
//                     }
//                     this.feeId = 0;
// //					this.withdraw.fee = '';
// //					this.withdraw.coupon = '';
// //					this.withdraw.management_cost = '';
//                 })
            },
            //预备支付
            doPrepare(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定预支付吗?'] || '确定预支付吗?');
                    this.confirmConfig.fn = "prepare";
                }
            },
            // 付款
            doUpdate(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.obj = row.id;
                    this.confirmConfig.msg = (this.LANG['确定要操作付款吗?'] || '确定要操作付款吗?');
                    this.confirmConfig.fn = "update";
                }
            },
            //取消
            doRefuse(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定取消吗?'] || '确定取消吗?');
                    this.confirmConfig.fn = "refuse";
                }
            },
            // 拒绝
            doReject(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定拒绝吗?'] || '确定拒绝吗?');
                    this.confirmConfig.fn = "reject";
                }
            },
            //确认支付
            doPay(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定支付吗?'] || '确定支付吗?');
                    this.confirmConfig.fn = "pay";
                }
            },
            //关闭备注弹窗
            handleCloseMemo() {
                this.dialogVisibleMemo = false;
            },
            //备注
            doMemo(row) {
                this.dialogVisibleMemo = true;
                this.memoText = row.memo;
                this.memoTextUid = row.id;
            },
            //修改备注内容
            editMemoSubmit() {
                let _this = this;
                this.updated = false;
                let params = {
                    memo: this.memoText,
                    uid: this.user_id
                };
                this.dialogVisibleMemo = false;

				this.$.autoAjax('patch',URL.api + ROUTES.PATCH.user.info.memo + '/' + parseInt(this.memoTextUid),params, {
					ok: (res) => {
						if (res.data) {
							this.updated = true;
							this.$message.success(LANG['备注写入成功'] || '备注写入成功');
						} else {
							this.$message.error(LANG['备注写入失败'] || '备注写入失败');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.patch(URL.api + ROUTES.PATCH.user.info.memo + '/' + parseInt(this.memoTextUid), params, URLCONFIG).then((res) => {
                //     if (res.data.data) {
                //         this.updated = true;
                //         this.$message.success(LANG['备注写入成功'] || '备注写入成功');
                //     } else {
                //         this.$message.error(LANG['备注写入失败'] || '备注写入失败');
                //     }
                // });
//				this.editVisible=true
            },
            //详情
            doDetail(row) {
                this.loading = true;
                let sum = 0;
                let id = parseInt(row.id);
                this.id = id;
                let uId = parseInt(row.user_id);
                this.editForm = {};
                this.editForm.comment = row.comment || '无';
                console.log(row.comment);
                this.formColumnsUrl = "/static/json/cash/memberGetOut/auditInformation/columns.json";
                let formTableUrl = URL.api + ROUTES.GET.cash.withdraw.audit.$(id) + '?user_id=' + uId + '&withdraw_id=' + id;
                this.tableDate.list = [];
                this.tableDate.level_config = {};
                this.auditData = {};

				this.$.autoAjax('get',formTableUrl, '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							this.auditData = res.data;
							this.tableDate.level_config = res.data.level_config;
							this.editForm.deposit_money = FORMATMONEY(res.data.deposit_money);
							this.editForm.deposit_times = res.data.deposit_times;
							this.editForm.withdraw_money = FORMATMONEY(res.data.withdraw_money);
							this.editForm.withdraw_times = res.data.withdraw_times;
							this.editForm.lose_earn = FORMATMONEY(res.data.lose_earn);
							let model = res.data.list;
							model.forEach(item => {
								item.coupon_money = FORMATMONEY(item.coupon_money);
								item.money = FORMATMONEY(item.money);
								item.valid_bet = FORMATMONEY(item.valid_bet);
								item.withdraw_bet_principal = FORMATMONEY(item.withdraw_bet_principal);
								item.withdraw_bet_coupon = FORMATMONEY(item.withdraw_bet_coupon);
								item.deduct_coupon = FORMATMONEY(item.deduct_coupon);
								item.deduct_admin_fee = FORMATMONEY(item.deduct_admin_fee);
								item.lose_earn = FORMATMONEY(item.lose_earn);
								if (!item.withdraw_bet_coupon && !item.withdraw_bet_principal) {
									item.withdraw_bet_principal = FORMATMONEY(item.withdraw_bet);
									item.withdraw_bet_coupon = 0
								}
								if (item.is_pass) {
									item.is_pass = '是'
								} else {
									item.is_pass = '否'
								}
							})
							for (let i = 0; i < model.length; i++) {
								this.tableDate.list.push(model[i]);
							}
						}
						sum++;
						if (sum === 2) {
							this.loading = false;
							this.editVisible = true;
						}
					},
					p: () => {
					},
					error: e => {
						this.loading = false;
					}
				})
                // this.$http.get(formTableUrl, URLCONFIG).then((res) => {
                //     if (res.data.state == 0 && res.data.data) {
                //         this.auditData = res.data;
                //         this.tableDate.level_config = res.data.data.level_config;
                //         this.editForm.deposit_money = FORMATMONEY(res.data.data.deposit_money);
                //         this.editForm.deposit_times = res.data.data.deposit_times;
                //         this.editForm.withdraw_money = FORMATMONEY(res.data.data.withdraw_money);
                //         this.editForm.withdraw_times = res.data.data.withdraw_times;
                //         this.editForm.lose_earn = FORMATMONEY(res.data.data.lose_earn);
                //         let model = res.data.data.list;
                //         model.forEach(item => {
                //             item.coupon_money = FORMATMONEY(item.coupon_money);
                //             item.money = FORMATMONEY(item.money);
                //             item.valid_bet = FORMATMONEY(item.valid_bet);
                //             item.withdraw_bet_principal = FORMATMONEY(item.withdraw_bet_principal);
                //             item.withdraw_bet_coupon = FORMATMONEY(item.withdraw_bet_coupon);
                //             item.deduct_coupon = FORMATMONEY(item.deduct_coupon);
                //             item.deduct_admin_fee = FORMATMONEY(item.deduct_admin_fee);
                //             item.lose_earn = FORMATMONEY(item.lose_earn);
                //             if (!item.withdraw_bet_coupon && !item.withdraw_bet_principal) {
                //                 item.withdraw_bet_principal = FORMATMONEY(item.withdraw_bet);
                //                 item.withdraw_bet_coupon = 0
                //             }
                //             if (item.is_pass) {
                //                 item.is_pass = '是'
                //             } else {
                //                 item.is_pass = '否'
                //             }
                //         })
                //         for (let i = 0; i < model.length; i++) {
                //             this.tableDate.list.push(model[i]);
                //         }
                //     }
                //     sum++;
                //     if (sum === 2) {
                //         this.loading = false;
                //         this.editVisible = true;
                //     }
                // }).catch((e) => {
                //     this.loading = false;
                // });
                let _this = this;

				this.$.autoAjax('get',URL.api + ROUTES.GET.cash.withdraw.details.$(id), '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							let model = res.data;
							for (let k in model) {
								_this.editForm[k] = model[k];
							}
							_this.editForm.comment = row.comment || '';
						}
						sum++;
						if (sum === 2) {
							this.loading = false;
							this.editVisible = true;
						}
					},
					p: () => {
					},
					error: e => {
						this.loading = false;
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.cash.withdraw.details.$(id), URLCONFIG).then((res) => { //  服务器 500
                //     if (res.data.state == 0 && res.data.data) {
                //         let model = res.data.data;
                //         for (let k in model) {
                //             _this.editForm[k] = model[k];
                //         }
                //         _this.editForm.comment = row.comment || '';
                //     }
                //     sum++;
                //     if (sum === 2) {
                //         this.loading = false;
                //         this.editVisible = true;
                //     }
                // }).catch((e) => {
                //     this.loading = false;
                // });
            },
            //预备支付
            doPrepare(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定预支付吗?'] || '确定预支付吗?');
                    this.confirmConfig.fn = "prepare";
                }
            },
            //取消
            doRefuse(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定取消吗?'] || '确定取消吗?');
                    this.confirmConfig.fn = "refuse";
                }
            },
            // 拒绝
            doReject(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定拒绝吗?'] || '确定拒绝吗?');
                    this.confirmConfig.fn = "reject";
                }
            },
            //确认支付
            doPay(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定支付吗?'] || '确定支付吗?');
                    this.confirmConfig.fn = "pay";
                }
            },
            //确认删除
            doConfirm(obj) {
                this.loading = true;
                // let _this = this;
                let id = this.id;
                switch (obj.fn) {
                    case "prepare":

						this.$.autoAjax('patch', URL.api + ROUTES.GET, {"status": "prepare", "role": 1}, {
							ok: (res) => {
								if (res.state === 0 && res.data) {
									this.$message.success(LANG['预支付成功'] || '预支付成功');
									this.updated = true;
								} else {
									this.$message.error(LANG[res.msg] || res.msg);
								}
								this.loading = false;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // this.$http.patch(URL.api + ROUTES.PATCH.cash.withdraw.state.$(id), JSON.stringify({"status": "prepare", "role": 1}), URLCONFIG).then((res) => {
                        //     if (res.data.state === 0 && res.data.data) {
                        //         this.$message.success(LANG['预支付成功'] || '预支付成功');
                        //         this.updated = true;
                        //     } else {
                        //         this.$message.error(LANG[res.data.msg] || res.data.msg);
                        //     }
                        //     this.loading = false;
                        // });
                        break;
                    case "refuse":

						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.cash.withdraw.state.$(id), {"status": "refused", "role": 1}, {
							ok: (res) => {
								if (res.state === 0 && res.data) {
									this.$message.success(LANG['取消成功'] || '取消成功');
									this.updated = true;
								} else {
									this.$message.error(LANG[res.msg] || res.msg);
								}
								this.loading = false;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // this.$http.patch(URL.api + ROUTES.PATCH.cash.withdraw.state.$(id), JSON.stringify({"status": "refused", "role": 1}), URLCONFIG).then((res) => {
                        //     if (res.data.state === 0 && res.data.data) {
                        //         this.$message.success(LANG['取消成功'] || '取消成功');
                        //         this.updated = true;
                        //     } else {
                        //         this.$message.error(LANG[res.data.msg] || res.data.msg);
                        //     }
                        //     this.loading = false;
                        // });
                        break;
                    case "pay":

						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.cash.withdraw.state.$(id), {"status": "paid"}, {
							ok: (res) => {
								if (res.state === 0 && res.data) {
									this.$message.success(LANG['支付成功'] || '支付成功');
									this.updated = true;
								} else {
									this.$message.error(LANG[res.msg] || res.msg);
								}
								this.loading = false;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // this.$http.patch(URL.api + ROUTES.PATCH.cash.withdraw.state.$(id), JSON.stringify({"status": "paid"}), URLCONFIG).then((res) => {
                        //     if (res.data.state === 0 && res.data.data) {
                        //         this.$message.success(LANG['支付成功'] || '支付成功');
                        //         this.updated = true;
                        //     } else {
                        //         this.$message.error(LANG[res.data.msg] || res.data.msg);
                        //     }
                        //     this.loading = false;
                        // });
                        break;
//                        拒绝 等接口
                    case "reject":

						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.cash.withdraw.state.$(id),{"status": "rejected", "role": 1}, {
							ok: (res) => {
								if (res.state === 0 && res.data) {
									this.$message.success(LANG['拒绝成功'] || '拒绝成功');
									this.updated = true;
								} else {
									this.$message.error(LANG[res.msg] || res.msg);
								}
								this.loading = false;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // this.$http.patch(URL.api + ROUTES.PATCH.cash.withdraw.state.$(id), JSON.stringify({"status": "rejected", "role": 1}), URLCONFIG).then((res) => {
                        //     if (res.data.state === 0 && res.data.data) {
                        //         this.$message.success(LANG['拒绝成功'] || '拒绝成功');
                        //         this.updated = true;
                        //     } else {
                        //         this.$message.error(LANG[res.data.msg] || res.data.msg);
                        //     }
                        //     this.loading = false;
                        // });
                        break;
                    // 付款
                    case "update":

						this.$.autoAjax('patch',URL.api + ROUTES.POST.cash.payment + '?id=' + id, {'status': 'paid'}, {
							ok: (res) => {
								if (res.state === 0 && res.data) {
									this.$message.success(LANG["支付成功"] || "支付成功");
									this.updated = true;
								} else {
									this.$message.error(LANG["支付失败"] || "支付失败");
								}
								this.loading = false;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // this.$http.patch(URL.api + ROUTES.POST.cash.payment + '?id=' + id, JSON.stringify({'status': 'paid'}), URLCONFIG).then((res) => {
                        //     if (res.data.state === 0 && res.data.data) {
                        //         this.$message.success(LANG["支付成功"] || "支付成功");
                        //         this.updated = true;
                        //     } else {
                        //         this.$message.error(LANG["支付失败"] || "支付失败");
                        //     }
                        //     this.loading = false;
                        // });
                        break;
                }
            },
            //待处理
//            doPending(row){
//                let id = this.id;
//                var _this = this;
//                this.$http.patch(URL.api + ROUTES.PATCH.cash.withdraw.user.$("?id="+ id),JSON.stringify({"status":"pending"}),URLCONFIG).then((res) => {
//                    if(res.state === 0){
//                        _this.$message.success(LANG['拒绝成功'] || '拒绝成功');
//                        _this.updated = !_this.updated;
//                    }else{
//                        _this.$message.error(LANG['拒绝失败'] || '拒绝失败');
//                    }
//                });
//            },
            //获取表格数据
            getTableDatatwo(obj) {
                this.sumShow = false;
                this.getTableData = {};
                if (obj.allData && obj.allData.attributes && obj.allData.attributes.total > 0) {
                    let model = obj.allData.attributes;
                    this.sumShow = true;
                    for (let i in model) {
                        this.allData[i] = model[i];
                    }
                }
            },
            //重置查询条件
            resetForm() {
                this.tableUrl = this.baseUrl + this.addSearch(this.$children[0].$refs.editForm.model);
                this.searchObj.date_from = sessionStorage.sysTime + ' 00:00:00';
                this.searchObj.date_to = sessionStorage.sysTime + ' 23:59:59';
            },
            openUserInformation(row) {
                this.$router.push({path: "/memberManagement", query: {name: row.user_name}});
            },
            //显示有效投注额
            showCommissionProportion(row, event) {
                this.gridData = [];

                for (let i = 0; i < row.valid_bet_detail.length; i++) {
                    row.valid_bet_detail[i]['flag'] = i.toString();
                }
                ;
                this.gridDataCol = row.valid_bet_detail;
                let listData = row.valid_bet_detail;
                let obj = {};
                for (let i = 0; i < listData.length; i++) {
                    let col = listData[i]['flag'];
                    obj[col] = listData[i]['valid_bet'] / 100;
                }
                ;
                this.gridData.push(obj);
                // return;


            },
            // 隐藏有效投注稿
//			hideRebateProportion() {
//				this.$refs.floatDiv.style.display = "none";
//			},
            // 导出数据
            exportData() {
                // 当前查询条件
                let form = this.$children[0].$refs.editForm.model;
                let _this = this;
                if (form.date_from && form.date_to) {
                    let url = URL.api + '/export/download/withdraw';

					this.$.autoAjax('get',URL.api + '/dev/download/sign' + '?nonce=' + url, '', {
						ok: (res) => {
							if (res.data) {
								_this.outUrl = url + _this.addSearch(_this.searchObj) + "&nonce=" + res.data.nonce + "&signature=" + res.data.signature + "&time=" + res.data.time + "&uuid=" + res.data.uuid;
								_this.dialogVisible = true;
							} else if (res.msg) {
								_this.$message.error(res.msg);
							} else {
								_this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
							}
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.get(URL.api + '/dev/download/sign' + '?nonce=' + url, URLCONFIG).then((res) => {
                    //     // 执行导出
                    //     if (res.data.data) {
                    //         _this.outUrl = url + _this.addSearch(_this.searchObj) + "&nonce=" + res.data.data.nonce + "&signature=" + res.data.data.signature + "&time=" + res.data.data.time + "&uuid=" + res.data.data.uuid;
                    //         _this.dialogVisible = true;
                    //     } else if (res.data.msg) {
                    //         _this.$message.error(res.data.msg);
                    //     } else {
                    //         _this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
                    //     }
                    // })
                    .catch((e) => {
//						console.log(e);
                    });
                } else {
                    this.$message.error(LANG['必需选择时间才能导出'] || '必需选择时间才能导出');
                    return;
                }
            }
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init()
        },
        activated() {
            this.formType = 'update' + (Math.random() * 9 + 1);
            if (this.$route.query.status) {
                let arrs = [];
                if (this.$route.query.status === 'pending') {
                    arrs.push('待处理');
                }
                this.searchConfig[6]['value'] = arrs;
                this.initDate = true;
                this.tableUrl = URL.api + ROUTES.GET.cash.withdraws + "?status=" + this.$route.query.status;
            } else if (this.$route.query.day_begin) {
                let temp = '';
                if (this.$route.query.member_name) {
                    this.searchConfig[1]['value'] = this.$route.query.member_name;
                    temp = 'member_name=' + this.$route.query.member_name;
                }
                if (this.$route.query.day_begin) {
                    if (temp.length > 6) {
                        temp = temp + '&date_from=' + this.$route.query.day_begin;
                    } else {
                        temp = 'date_from=' + this.$route.query.day_begin;
                    }
                    this.searchConfig[4].prop[0]['value'] = this.$route.query.day_begin;
                }
                if (this.$route.query.day_end) {
                    if (temp.length > 6) {
                        temp = temp + '&date_to=' + this.$route.query.day_end;
                    } else {
                        temp = 'date_to=' + this.$route.query.day_end;
                    }
                    this.searchConfig[4].prop[1]['value'] = this.$route.query.day_end;
                    this.searchConfig[6]['value'].push('付款成功');
                    this.searchConfig[7]['value'] = this.$route.query.type.toString() || '1';
                    temp += temp.length > 6 ? '&status=paid&type=1' : '?status=paid&type=1';
                }
                this.initDate = true;
                this.tableUrl = URL.api + ROUTES.GET.cash.withdraws + ( temp.length > 6 ? ('?' + temp) : '');
            }
        },
        deactivated() {
            this.$route.query.status = null;
        }
    }
</script>
<style lang="less">
    #memberGetOut {
        /*.el-card__body {*/
        /*overflow: auto;*/
        /*}*/
        .el-table__header-wrapper .is-leaf .cell {
            text-align: center;
        }
        .page {
            position: relative
        }
        .vipDialog .el-form-item__content {
            margin: 0 auto;
        }
        /*.mb20 {margin-bottom: 10px!important;}*/
        .vipDialog .grid-content {
            line-height: 36px;
            text-align: center;
        }
        .vipDialog .el-dialog {
            min-width: 860px;
        }
        .vipDialog .groupBuying {
            width: 10%;
            min-width: 60px;
        }
        .el-row {
            margin-bottom: 10px;
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
        #tableSingle #tables {
            /*min-width: 1920px;*/
            /*overflow-x: auto;*/
            white-space: nowrap;
        }
        #tableSingle #tables table {
            /*min-width: 1920px;*/
            overflow-x: auto;
            white-space: nowrap;
        }
        .sumdiv {
            position: relative;
        }
        .pass {
            color: #13CE66;
        }
        .nopass {
            color: #FF4949;
        }
    }

</style>
