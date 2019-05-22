<template>
    <div id="otherPayment">
        <div class="search">
            <formEdit :formTitel="formTitel"
                      :formVisible="formVisible"
                      :formConfig="searchConfig"
                      :type="type"
                      :labelWidth="labelWidth"
                      :isEdit="isEdit"
                      :showAdd="false"
                      :initDate="initDate"
                      :formType="formType"
                      :updateDate="updateDate"
                      @do-query="doQuery"
                      @reset-form="resetForm"></formEdit>
        </div>
        <el-col>
            <tablegrid
                    :updated="updated"
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tabOperation="tabOperation"
                    :showExport="true"
                    :getData="true"
                    :automation="true"
                    @get-table-data="getTableDatatwo"
                    @date-selection="doSelection"
                    @do-handle="doHandle"
                    @export-data="exportData"
                    @do-operation="doOperation">
                <!-- 汇总 -->
                <tr :span="12" class="sumdiv ml20" slot="other" v-if="sumShow">
                    <td colspan="15">
                        <div class="cell">
                            <span class="font14 tCent">{{LANG['付款金额小计'] || '付款金额小计'}} : {{allData.actual_page_sum}}</span>
                            <span class="font14 ml10">{{LANG['付款金额总计'] || '付款金额总计'}} : {{allData.actual_total_sum}}</span>
                            <span class="ml10 mr10"> | </span>
                            <span class="font14 tCent">{{LANG['扣除金额小计'] || '扣除金额小计'}} : {{allData.deduct_page_sum}}</span>
                            <span class="font14 ml10">{{LANG['扣除金额总计'] || '扣除金额总计'}} : {{allData.deduct_total_sum}}</span>
                            <span class="ml10 mr10"> | </span>
                            <span class="font14">{{LANG['笔数'] || '笔数'}} : {{allData.total}}</span>
                        </div>
                    </td>
                </tr>
            </tablegrid>
            <!-- <div style="width: 100px;line-height: 40px;height: 40px;overflow: hidden;text-align: center;background: #999;" @click="doBatch">批量下发</div> -->
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
        <el-col>
            <formEdit :formTitel="artTitel" :formVisible="artVisible" :formConfig="artformConfig" :type="arttype"
                      :labelWidth="artlabelWidth" :isEdit="isEdit" @get-form="getForm"></formEdit>
        </el-col>
        <!--详情-->
        <el-col>
            <el-dialog :title="LANG['提现付款详情'] || '提现付款详情'" v-model="editVisible" size="large" class="vipDialog">
                <el-form :model="editForm" ref="editForm">
                    <!--取款信息-->
                    <el-row>
                        <el-col :span="24" class="mb10">
                            <div class="grid-content bg-purple-dark tCent font_color_white font14">
                                {{LANG['取款信息'] || '取款信息'}}
                            </div>
                        </el-col>
                    </el-row>
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
                            <div class="grid-content bg-purple"><span>{{LANG['申请时间'] || '申请时间'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span>{{editForm.created}}</span>
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
                            <div class="grid-content bg-purple"><span>{{LANG['取款银行名称'] || '取款银行名称'}}</span></div>
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
                                <span v-if="editForm.receive_bank_info">{{editForm.receive_bank_info.accountname}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['银行帐号'] || '银行帐号'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span v-if="editForm.receive_bank_info">{{editForm.receive_bank_info.card}}</span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="22">
                        <el-col :span="3">
                            <div class="grid-content bg-purple"><span>{{LANG['支行'] || '支行'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span v-if="editForm.receive_bank_info">{{editForm.receive_bank_info.address}}</span>
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
                            <div class="grid-content bg-purple"><span>{{LANG['最后确认时间'] || '最后确认时间'}}</span></div>
                        </el-col>
                        <el-col :span="5">
                            <el-form-item>
                                <span>{{editForm.confirm_time}}</span>
                            </el-form-item>
                        </el-col>
                        <!--<el-col :span="3">-->
                        <!--<div class="grid-content bg-purple"><span>{{LANG['今日取款次数'] || '今日取款次数'}}</span></div>-->
                        <!--</el-col>-->
                        <!--<el-col :span="5">-->
                        <!--<el-form-item>-->
                        <!--<span>{{editForm.today_withdraw_times }}</span>-->
                        <!--</el-form-item>-->
                        <!--</el-col>-->
                        <!--<el-col :span="3">-->
                        <!--<div class="grid-content bg-purple"><span>{{LANG['今日取款金额'] || '今日取款金额'}}</span></div>-->
                        <!--</el-col>-->
                        <!--<el-col :span="5">-->
                        <!--<el-form-item>-->
                        <!--<span>{{editForm.today_withdraw_money | filterMoneyIsNull}}</span>-->
                        <!--</el-form-item>-->
                        <!--</el-col>-->
                    </el-row>
                    <!--<el-row :gutter="22">-->

                    <!--</el-row>-->
                    <!--稽核信息-->
                    <el-row>
                        <el-col :span="24" class="mb10">
                            <div class="grid-content bg-purple-dark tCent font_color_white font14">
                                {{LANG['稽核信息'] || '稽核信息'}}
                            </div>
                            <div class="el-dropdown-menu floatDiv" ref="floatDiv" id="tooltip" style="display: none">
                                <el-table :data="gridData" border>
                                    {{gridDataCol}}
                                    <el-table-column v-for="(item,index) in gridDataCol" width="71" :key="index"
                                                     :prop="item.flag" :label="item.name"></el-table-column>
                                </el-table>
                            </div>
                            <el-table :data="tableDate.list" border>
                                <el-table-column width="180" property="date" label="交易时间"></el-table-column>
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
                                    <!--<template scope="scope">-->
                                        <!--<el-button-->
                                                <!--@click.native.prevent="showCommissionProportion(scope.row,$event)"-->
                                                <!--type="text"-->
                                                <!--size="small" v-if="scope.row.valid_bet !== 0">-->
                                            <!--{{scope.row.valid_bet}}-->
                                        <!--</el-button>-->
                                        <!--<span v-else>{{scope.row.valid_bet}}</span>-->
                                    <!--</template>-->
                                </el-table-column>
                                <el-table-column property="withdraw_bet_principal" label="常态打码量"></el-table-column>
                                <el-table-column property="withdraw_bet_coupon" label="优惠打码量"></el-table-column>
                                <el-table-column property="is_pass" label="是否达到投注">
                                    <template slot-scope="scope">
                                        <span :class="scope.row.is_pass=='是'? 'pass':'nopass' ">{{scope.row.is_pass}}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column property="deduct_coupon" label="扣优惠"></el-table-column>
                                <el-table-column property="deduct_admin_fee" label="扣除行政费"></el-table-column>
                            </el-table>
                        </el-col>
                        <el-col :span="24" class="mb10" v-if="auditData.data">
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
    </div>
</template>
<script>
	import tablegrid from '../../components/tableGrid.vue'
	import formEdit from '../../components/formEdit.vue'
	import confirm from '../../components/confirm.vue';
	import editTable from '../../components/editTable.vue'
	import ElRow from "element-ui/packages/row/src/row";

	export default {
		data() {
			return {
				LANG,
				//表格数据
				tableUrl: "",
				baseUrl: "",
				//列配置
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
					{"prop": "username", "value": "", "type": "text", "label": "用户名"},
					{"prop": "order_no", "value": "", "type": "text", "label": "订单号"},
					{
						"type": "dateGroup",
						"label": "申请时间",
						"prop": [{"prop": "apply_time_start", "value": "", "label": "开始时间"}, {
							"prop": "apply_time_end",
							"value": "",
							"label": "结束时间"
						}]
					},
					{
						"type": "dateGroup",
						"label": "付款时间",
						"prop": [{"prop": "confirm_time_start", "value": "", "label": "开始时间"}, {
							"prop": "confirm_time_end",
							"value": "",
							"label": "结束时间"
						}]
					},

//                    {"type":"accountBalance","label":"申请金额","prop":[{"prop":"accountBalance_s","value":"","label":""},{"prop":"accountBalance_e","value":"","label":""}]},
					{
						"prop": "status",
						"value": [],
						"label": "状态",
						"sReset": false,
						"checkAll": true,
						"allBtnShow": true,
						"type": "checkGroup",
						"list": ["未支付", "付款成功", "取消支付", "拒绝支付"],
						"Arr": [{"label": "未支付", "value": "prepare"}, {"label": "付款成功", "value": "paid"
						}, {"label": "拒绝支付", "value": "rejected"}, {"label": "取消支付", "value": "refused"}],
						"ifVal": "1",
						"ifKey": "send_type"
					},
					{
						"prop": "type",
						"value": "",
						"label": "提款方式",
						"type": "select",
						"list": [
							{"label": "全部", "value": ""},
							{"label": "线上", "value": 1},
							{"label": "手动", "value": 2},
						]
					},
					{"prop": "admin_user", "value": "", "type": "text", "label": "操作者"},

					/* {"prop":"status","value":"","label":"状态","type":"select",
                         "list":[{"label":"未支付","value":"prepare"},{"label":"付款成功","value":"paid"},{"label":"付款失败","value":"failed"}]},*/
				],
				artTitel: "",
				artVisible: {
					state: false
				},
				artisEdit: {},
				//搜索条件
				arttype: "default",
				artformTitel: "",
				artlabelWidth: "90px",
				artformConfig: [
					{"prop": "comment", "value": "", "type": "textarea", "label": "备注", "rules": [{"require": true}]},
				],
				nowId: -1,
				//select 选中的数据
				selection: [],
				//批量下发操作
				tabOperation: [{"label": "批量下发", "fn": "doBatch"}],
				updated: false,
				//弹窗表格
				formTableUrl: "",
				formColumnsUrl: "",
				//打标签弹窗
				editVisible: false,
				editForm: {},
				//确认
				confirmConfig: {
					state: false,
					msg: "",
					fn: ""
				},
				auditData: {},
				formType: "",
				allData: {
					"page_sum": 0,
					"total_sum": 0
				},
				initDate: false,
				dialogVisible: false,
				outUrl: "",
				allData: {},
				sumShow: false,
				//数据接口地址
				tableDate: {
					list: []
				},
				// 有效投注额表格
				gridData: [],
				gridDataCol: [],
				// 查询条件
				searchObj: {},
				updateDate: "",
                user_id : 0
			}
		},
		components: {
			ElRow,
			tablegrid: tablegrid,
			formEdit: formEdit,
			confirm: confirm,
			editTable: editTable
		},
		methods: {
			init() {
                this.updateDate = '';
				this.tableUrl = URL.api + ROUTES.GET.cash.payment + '?apply_time_start=' + sessionStorage.dateTimeStart + "&apply_time_end=" + sessionStorage.dateTimeEnd;
				this.baseUrl = URL.api + ROUTES.GET.cash.payment;
				this.columnsUrl = "/static/json/cash/artificialTransfer/columns.json";
				setTimeout(() => {
					this.updateDate = "confirm_time_start,,confirm_time_end,";
				}, 500)
				this.searchObj.apply_time_start = sessionStorage.dateTimeStart;
				this.searchObj.apply_time_end = sessionStorage.dateTimeEnd;
			},
			//表格数据按钮
			doHandle(item) {
				this.updated = false;
				this.nowId = parseInt(item.row.id);
				this.user_id = item.row.user_id;
				switch (item.fn) {
//                    case "doAdopt":
//                        this.doAdopt(item.row)
//                        break
					case "doUpdate":
						this.doUpdate(item.row)
						break
					case "doDetail":
						this.doDetail(item.row)
						break
					case "doRemarks":
						this.doRemarks(item.row)
						break
					case "openUserInformation":
						this.openUserInformation(item.row)
						break
					//取消
					case "doRefuse":
						this.doRefuse(item.row)
						break
					//拒绝
					case "doRejected":
						this.doRejected(item.row)
						break
				}
			},
			//备注
			doRemarks() {
				this.artTitel = "新增备注";
				this.artVisible.state = true;
			},
			//保存弹窗数据
			getForm(obj) {
				let _this = this;
				let comment = obj.formObj;
                comment.uid = this.user_id;
				this.nowId = this.nowId || 10;
				this.$http.put(URL.api + ROUTES.PUT.cash.comment + '/' + this.nowId, comment, URLCONFIG).then((res) => {
					if (res.data.state == 0) {
						this.$message.success(LANG["备注写入成功"] || "备注写入成功");
						_this.updated = true;
					} else {
						this.$message.error(LANG["备注写入失败"] || "备注写入失败");
					}
				})
			},
			//详情
			doDetail(row) {
				let id = parseInt(row.id);
				this.id = id;
				let uId = parseInt(row.user_id);
//                this.formColumnsUrl="/static/json/cash/memberGetOut/auditInformation/columns.json";
				let formTableUrl = URL.api + ROUTES.GET.cash.withdraw.audit.$(id) + '?user_id=' + uId + '&withdraw_id=' + id;
				let formCash = URL.api + ROUTES.GET.user.cash;
				let _this = this;
				//清空稽核数据
				this.auditData = {};
				this.tableDate.list = [];
				this.$http.get(formCash + "/" + parseInt(id), URLCONFIG).then((res) => {
					if (res.data.state == 0 && res.data.data) {
						let model = res.data.data;
						_this.editForm = model;
					}
				});
				this.$http.get(formTableUrl, URLCONFIG).then((res) => {
					if (res.data.state == 0 && res.data.data) {
						this.auditData = res.data;
						let model = res.data.data.list;
						model.forEach(item => {
							item.coupon_money = FORMATMONEY(item.coupon_money);
							item.money = FORMATMONEY(item.money);
							item.valid_bet = FORMATMONEY(item.valid_bet);
							item.withdraw_bet_principal = FORMATMONEY(item.withdraw_bet_principal);
							item.withdraw_bet_coupon = FORMATMONEY(item.withdraw_bet_coupon);
							item.deduct_coupon = FORMATMONEY(item.deduct_coupon);
							item.deduct_admin_fee = FORMATMONEY(item.deduct_admin_fee);
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
				});
				this.editVisible = true
			},
			//显示有效投注额
			showCommissionProportion(row, event) {
				this.gridData = [];
//				if (this.$refs.floatDiv.style.display === "none") {
					for (let i = 0; i < row.valid_bet_detail.length; i++) {
						row.valid_bet_detail[i]['flag'] = i.toString();
					}
					this.gridDataCol = row.valid_bet_detail;
					let listData = row.valid_bet_detail;
					let obj = {};
					for (let i = 0; i < listData.length; i++) {
						let col = listData[i]['flag'];
						obj[col] = listData[i]['valid_bet'] / 100;
					}
					this.gridData.push(obj);
					// return;
//					this.$refs.floatDiv.style.display = "block"
//					this.$refs.floatDiv.style.left = (event.clientX - 405) + 'px'
//					this.$refs.floatDiv.style.top = (event.clientY - 330) + 'px'
//				}
//				else {
//					this.$refs.floatDiv.style.display = "none"
//				}
			},
			//改成功
			doUpdate(row) {
				if (parseInt(row.id)) {
					this.confirmConfig.state = true;
					this.confirmConfig.obj = row.id;
					this.confirmConfig.msg = (this.LANG['确定要操作付款吗?'] || '确定要操作付款吗?');
					this.confirmConfig.fn = "update";
				}
			},
			// 取消付款
			doRefuse(row) {
				if (parseInt(row.id)) {
					this.confirmConfig.state = true;
					this.confirmConfig.obj = row.id;
					this.confirmConfig.msg = (this.LANG['确定取消付款吗?'] || '确定取消付款吗?');
					this.confirmConfig.fn = "refuse";
				}
			},
			//拒绝支付
			doRejected(row) {
				if (parseInt(row.id)) {
					this.confirmConfig.state = true;
					this.confirmConfig.obj = row.id;
					this.confirmConfig.msg = (this.LANG['确定要拒绝付款吗?'] || '确定要拒绝付款吗?');
					this.confirmConfig.fn = "rejected";
				}
			},

			//下发付款
//            doAdopt(row){
//                this.confirmConfig.state = true;
//                this.confirmConfig.msg = (this.LANG['确定下发付款吗?'] || '确定下发付款吗?');
//                this.confirmConfig.fn = "adopt";
//            },
			//checkbox点击
			doSelection(item) {
				this.selection = item.row;
			},
			//批量下发
			doBatch(item) {
				this.confirmConfig.state = true;
				this.confirmConfig.msg = (this.LANG['确定批量下发付款吗?'] || '确定批量下发付款吗?');
				this.confirmConfig.fn = "batch";
			},
			//查询
			doQuery(obj) {
				let temp = {};
				for (let k in obj.item) {
					if (k === 'status') {
						let temparr = obj.item[k] || [];
						let list = this.searchConfig[4].Arr || [];
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
					this.searchObj[k] = temp[k];
				}
				this.tableUrl = this.baseUrl + this.addSearch(temp);
			},
			// 批量操作事件匹配
			doOperation(obj) {
				switch (obj.fn) {
					case "doBatch": // 批量下发
						this.doBatch(obj.rows)
						break
				}
			},
			//获取表格数据
			getallTableData() {
				if (obj.allData.attributes && obj.allData.attributes.total > 0) {
					let model = obj.allData.attributes;
					for (let i in model) {
						this.allData[i] = model[i];
					}
				} else {
					for (let i in this.allData) {
						this.allData[i] = 0;
					}
				}
			},
			//获取表格数据
			getTableDatatwo(obj) {
				this.sumShow = false;
				this.allData = {};
				if (obj.allData && obj.allData.attributes && obj.allData.attributes.total > 0) {
					let model = obj.allData.attributes;
					this.sumShow = true;
					for (let i in model) {
						this.allData[i] = model[i];
					}
				}
			},
			//获取弹出框表格数据
			getTableData(obj) {
				this.auditData = obj.allData;
			},
			//确认删除
			doConfirm(obj) {
				this.loading = true;
				let _this = this;
				switch (obj.fn) {
					// 支付
					case "update":

                        this.$.autoAjax('patch',URL.api + ROUTES.POST.cash.payment + '/' + this.nowId, {'status': 'paid'}, {
                            ok: (res) => {
                                if (res.state === 0) {
                                    _this.$message.success(LANG["支付成功"] || "支付成功");
                                    _this.updated = true;
                                } else {
                                    this.$message.error(LANG["支付失败"] || "支付失败");
                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
						// this.$http.patch(URL.api + ROUTES.POST.cash.payment + '/' + this.nowId, JSON.stringify({'status': 'paid'}), URLCONFIG).then((res) => {
						// 	if (res.data.state === 0) {
						// 		_this.$message.success(LANG["支付成功"] || "支付成功");
						// 		_this.updated = true;
						// 	} else {
						// 		this.$message.error(LANG["支付失败"] || "支付失败");
						// 	}
						// });
						//下发付款
//                    case "update":
//                        let uId = parseInt(window.sessionStorage.getItem('userId'));
//                        let obj1 = {'state' : 'paid'};
//                        this.$http.patch(URL.api + ROUTES.PATCH.cash.payment + '/' + this.nowId, JSON.stringify(obj1),URLCONFIG).then((res) => {
//                            let model = res.data;
//                            if(model.state === 0 ){
//                                this.$message.success(LANG["已付款操作成功"] || "已付款操作成功");
//                                _this.updated = true;
//                            }else{
//                                let str = LANG[model.msg] || model.msg;
//                                _this.$message.error(str)
//                            }
//                        });
//                        break;
//                    case "adopt":
//                        this.$message.success(LANG['功能暂未开放，敬请期待！'] || '功能暂未开放，敬请期待！');
						//已屏蔽了 下发付款的按钮 后期如果使用 请直接将下一行注释的代码粘贴到列配置文件中的操作栏
						//{"btnType":"text","label":"下发付款","fn":"doAdopt","prop":"status","val":"prepare"},

//                        let data = { "ids":parseInt(this.nowId)};
//                        this.$http.post(URL.api + ROUTES.POST.cash.payment,JSON.stringify(data),URLCONFIG).then((res) => {
//                            if(res.data.state === 0 ){
//                                _this.$message.success(LANG["下发成功"] || "下发成功");
//                                _this.updated = true;
//                            }else{
//                                this.$message.error(LANG["下发失败"] || "下发失败");
//                            }
//                        });
						break;
					case "batch":
                        this.$.autoAjax('post',URL.api + ROUTES.POST.cash.payment + '/' + this.nowId, data1, {
                            ok: (res) => {
                                if (res.state === 0) {
                                    _this.$message.success(LANG["批量下发成功"] || "批量下发成功");
                                    _this.updated = true;
                                } else {
                                    this.$message.error(LANG["批量下发失败"] || "批量下发失败");
                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
						// this.$http.post(URL.api + ROUTES.POST.cash.payment + '/' + this.nowId, data1, URLCONFIG).then((res) => {
						// 	if (res.data.state === 0) {
						// 		_this.$message.success(LANG["批量下发成功"] || "批量下发成功");
						// 		_this.updated = true;
						// 	} else {
						// 		this.$message.error(LANG["批量下发失败"] || "批量下发失败");
						// 	}
						// });
						break;
					// 取消
					case "refuse":

                        this.$.autoAjax('patch',URL.api + ROUTES.POST.cash.payment + '/' + this.nowId,{'status': 'refused'},{
                            ok: (res) => {
                                if (res.state === 0) {
                                    _this.$message.success(LANG["取消支付操作成功"] || "取消支付操作成功");
                                    _this.updated = true;
                                } else {
                                    this.$message.error(LANG["取消操作失败"] || "取消操作失败");
                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
						// this.$http.patch(URL.api + ROUTES.POST.cash.payment + '/' + this.nowId, JSON.stringify({'status': 'refused'}), URLCONFIG).then((res) => {
						// 	if (res.data.state === 0) {
						// 		_this.$message.success(LANG["取消支付操作成功"] || "取消支付操作成功");
						// 		_this.updated = true;
						// 	} else {
						// 		this.$message.error(LANG["取消操作失败"] || "取消操作失败");
						// 	}
						// });
						break;
					//拒绝
					case "rejected":

                        this.$.autoAjax('patch',URL.api + ROUTES.POST.cash.payment + '/' + this.nowId, {'status': 'rejected'}, {
                            ok: (res) => {
                                if (res.state === 0) {
                                    _this.$message.success(LANG["拒绝支付操作成功"] || "拒绝支付操作成功");
                                    _this.updated = true;
                                } else {
                                    this.$message.error(LANG["拒绝支付失败"] || "拒绝支付失败");
                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
						// this.$http.patch(URL.api + ROUTES.POST.cash.payment + '/' + this.nowId, {'status': 'rejected'}, URLCONFIG).then((res) => {
						// 	if (res.data.state === 0) {
						// 		_this.$message.success(LANG["拒绝支付操作成功"] || "拒绝支付操作成功");
						// 		_this.updated = true;
						// 	} else {
						// 		this.$message.error(LANG["拒绝支付失败"] || "拒绝支付失败");
						// 	}
						// });
						break;
				}
			},
			//重置查询
			resetForm() {
				this.init();
			},
			openUserInformation(row) {
				this.$router.push({path: "/memberManagement", query: {name: row.user_name}});
			},
			// 导出数据
			exportData() {
				// 当前查询条件
				let form = this.$children[0].$refs.editForm.model;
				if (form.apply_time_end && form.apply_time_end) {
					let url = URL.api + '/export/download/cash/payment';
					let _this = this;

                    this.$.autoAjax('get',URL.api + '/dev/download/sign' + '?nonce=' + url, '', {
                        ok: (res) => {
                            if (res.data) {
                                this.outUrl = url + this.addSearch(this.searchObj) + "&nonce=" + res.data.nonce + "&signature=" + res.data.signature + "&time=" + res.data.time + "&uuid=" + res.data.uuid;
                                this.dialogVisible = true;
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
// 					this.$http.get(URL.api + '/dev/download/sign' + '?nonce=' + url, URLCONFIG).then((res) => {
// 						// 执行导出
// 						if (res.data.data) {
// 							this.outUrl = url + this.addSearch(this.searchObj) + "&nonce=" + res.data.data.nonce + "&signature=" + res.data.data.signature + "&time=" + res.data.data.time + "&uuid=" + res.data.data.uuid;
// 							this.dialogVisible = true;
// 						} else {
// 							_this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
// 						}
// 					}).catch((e) => {
// //						console.log(e);
// 					});
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
			this.updateDate = "";
			setTimeout(() => {
				this.updateDate = "confirm_time_start,,confirm_time_end,";
			}, 500)
			this.formType = 'update' + (Math.random() * 9 + 1);
			if (this.$route.query.username) {
				this.searchConfig[0].value = this.$route.query.username;
				this.tableUrl = this.baseUrl + '?username=' + this.$route.query.username
			}
		}
	}
</script>
<style scoped>
    /*.search .el-form-item__label{width:80px;}*/
    /*.search .el-form-item{width:200px;float:left;margin-bottom: 1px;}*/
    /*.search .el-form-item.lg{width:330px;float:left;}*/
    /*.search .el-form .el-col .line{text-align: center;}*/
    /*.search .el-form .formbtn{float:left;margin-left:10px;padding-top:5px;}*/
    .font_color_white {
        color: #fff;
    }

    .addManage {
        float: right;
        margin-right: 5%;
        margin-top: 5px;
    }

    .vipDialog .el-form-item__content {
        margin: 0 auto;

    }

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

    #otherPayment .sumdiv {
        position: relative;
    }

    .pass {
        color: #13CE66;
    }

    .nopass {
        color: #FF4949;

    }
</style>
