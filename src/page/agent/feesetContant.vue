<template>
    <!--费用详情-->
    <div id="feesetContant" v-loading="loading">
        <el-row>
            <el-col>
                <el-button size="small" @click="returnPage">{{LANG['返回'] || '返回'}}</el-button>
                <span class="ml10">{{agentName}}</span>{{LANG['代理报表详情'] || '代理报表详情'}}
            </el-col>
            <el-col :span="24">
                <tablegrid
                        :columnsUrl="columnsUrl"
                        :tableUrl="tableUrl"
                        :getData="true"
                        :isCreated="true"
                        @do-handle="doDetailHandle"
                        @get-table-data="gettabledata"
                        :pageSet="false">
                    <tr slot="other" v-if="datalength > 0">
                        <td>
                            <div class="cell">{{LANG['合计'] || '合计'}}</div>
                        </td>
                        <td>{{sumObj.feesum}}</td>
                        <td>{{sumObj.rebetsum}}</td>
                        <td>{{sumObj.depositsum}}</td>
                        <td>{{sumObj.sumtotal}}</td>
                    </tr>
                </tablegrid>
            </el-col>
            <!--<el-button type="success" @click="openDetail">弹窗</el-button>-->
            <!--弹窗-->
            <el-col :span="24">
                <el-dialog :title="formTitle" :visible.sync="dialogVisible" size="small">
                    <el-table :data="gridData" show-summary v-if="myType === 'fee'" border :summary-method="getSummaries">
                        <el-table-column property="created" :label="LANG['日期'] || '日期'"></el-table-column>
                        <el-table-column property="deal_money_in" :label="LANG['入款金额'] || '入款金额'"></el-table-column>
                        <el-table-column property="deposit_fee" :label="LANG['入款比例（%）'] || '入款比例（%）'"></el-table-column>
                        <el-table-column property="deposit" :label="LANG['入款手续费'] || '入款手续费'"></el-table-column>
                        <el-table-column property="deal_money_out" :label="LANG['出款金额'] || '出款金额'"></el-table-column>
                        <el-table-column property="withdraw_fee"
                                         :label="LANG['出款比例（%）'] || '出款比例（%）'"></el-table-column>
                        <el-table-column property="withdraw" :label="LANG['出款手续费'] || '出款手续费'"></el-table-column>
                    </el-table>
                    <el-table :data="gridData" show-summary v-if="myType === 'rebate'" border>
                        <el-table-column property="created" :label="LANG['返水日期'] || '返水日期'"></el-table-column>
                        <el-table-column property="deal_money" :label="LANG['返水优惠金额'] || '返水优惠金额'"></el-table-column>
                    </el-table>
                    <el-table :data="gridData" show-summary v-if="myType === 'deposit'" border>
                        <el-table-column property="created" :label="LANG['交易日期'] || '交易日期'"></el-table-column>
                        <el-table-column property="deal_type" :label="LANG['优惠类型'] || '优惠类型'"></el-table-column>
                        <el-table-column property="deal_money" :label="LANG['存款金额'] || '存款金额'"></el-table-column>
                        <el-table-column property="coupon_money" :label="LANG['优惠金额'] || '优惠金额'"></el-table-column>
                    </el-table>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">{{LANG['关闭'] || '关闭'}}</el-button>
                    </span>
                </el-dialog>
            </el-col>
        </el-row>
    </div>
</template>
<script>
	import tableGrid from '../../components/tableGrid.vue'

	export default {
		data() {
			return {
				LANG,
				tableUrl: '',
				columnsUrl: '',
				//弹窗数据
				dialogVisible: false,
				//表格假数据
				gridData: [],
				myId: -1,
				formTitle: "",
				sumObj: {
					feesum: 0,
					rebetsum: 0,
					depositsum: 0,
					sumtotal: 0
				},
				loading: false,
				myType: "",
				typeList: [],
				datalength: 0
			}
		},
		props: {
			nowId: String,
			agentName: String,
			nowNumber: Number
		},
		components: {
			tablegrid: tableGrid,
		},
		methods: {
			init() {
				this.typeList.splice(0, this.typeList.length);
				let typeList = this.typeList;
				this.tableUrl = URL.api + "/commission/fee.detail?agent_id=" + this.nowId + "&period=" + this.nowNumber;
//                this.tableUrl = URL.api + "/commission/fee.detail?agent_id=0&period=201611";
				this.columnsUrl = "/static/json/agent/feesetContant/columns.json";
				// 入款类型
				this.$http.get(URL.api + '/funds/flows', URLCONFIG).then(res => {
					let model = res.data.data[0].children || [];
					for (let i in model) {
						typeList.push({
							"name": model[i].name,
							"id": model[i].id
						})
					}
				}).catch(err => {
//					console.log(err)
				})
			},
			doDetailHandle(item) {
				this.myId = parseInt(item.row.id);
				switch (item.fn) {
					case "openAdminiAtive": // 行政费
						this.openAdminiAtive(item.row)
						break
					case "openPreferential": // 返水优惠
						this.openPreferential(item.row)
						break
					case "opendeposit": // 存款优惠
						this.opendeposit(item.row)
						break
				}
			},
			// 行政费
			openAdminiAtive(row) {
				this.myType = 'fee';
				this.formTitle = LANG['行政费'] || '行政费';
				this.doshowdtail('fee');
			},
			// 返水优惠
			openPreferential(row) {
				this.myType = 'rebate';
				this.formTitle = LANG['返水优惠费用'] || '返水优惠费用';
				this.doshowdtail('rebate');
			},
			// 存款优惠
			opendeposit(row) {
				this.myType = 'deposit';
				this.formTitle = LANG['优惠费用'] || '优惠费用';
				this.doshowdtail('deposit');
			},
			// 查看明细
			doshowdtail(type) {
				let _this = this;
				this.loading = true;
				this.gridData.splice(0, this.gridData.length);
				let typeList = this.typeList;
				let gridData = this.gridData;
				this.$http.get(URL.api + '/commission/fee.detail.info/' + type + "?uid=" + this.myId + "&period=" + this.nowNumber, URLCONFIG).then((res) => {
//                this.$http.get(URL.api + '/commission/fee.detail.info/' + type + "?uid=342&period=20170724", URLCONFIG).then((res)=>{
					if (res.data.state === 0 && res.data.data) {
						let model = res.data.data || [];
						model.forEach((v) => {
							let temp = {};
							for (let k in v) {
								temp[k] = v[k];
								switch (k) {
									case "deal_money":
										if (v['deal_category'] == "1") {
											temp['deal_money_in'] = FORMATMONEY(v['deal_money']);
											temp['deal_money_out'] = 0;
										} else if (v['deal_category'] == "2") {
											temp['deal_money_out'] = FORMATMONEY(v['deal_money']);
											temp['deal_money_in'] = 0;
										} else {
											temp[k] = FORMATMONEY(v[k]);
										}
										break;
									case "deposit_fee":
										// temp['deposit_fee'] = FORMATMONEY(v['deposit_fee']);
										temp['deposit_fee'] = v['deposit_fee'];
										break;
									case "withdraw":
										temp['withdraw'] = FORMATMONEY(v['withdraw']);
										break;
									case "withdraw_fee":
										// temp['withdraw_fee'] = FORMATMONEY(v['withdraw_fee']);
										temp['withdraw_fee'] = v['withdraw_fee'];
										break;
									case "withdraw_max":
										temp['withdraw_max'] = FORMATMONEY(v['withdraw_max']);
										break;
									case "deal_money":
										temp['deal_money'] = FORMATMONEY(v['deal_money']);
										break;
									case "deposit":
										temp['deposit'] = FORMATMONEY(v['deposit']);
										break;
									case "coupon_money":
										temp['coupon_money'] = FORMATMONEY(v['coupon_money']);
										break;
									case "deal_type":
										for (let j = 0; j < typeList.length; j++) {
											if (typeList[j]['id'] == v['deal_type']) {
												temp['deal_type'] = typeList[j]['name'];
											}
										}
										temp['deal_type'] = temp['deal_type'] ? temp['deal_type'] : "";
										break;
								}
							}
                            gridData.push(temp);
						});
						_this.dialogVisible = true;
					}
					_this.loading = false;
				}).catch((e) => {
					_this.loading = false;
//					console.log(e);
				});
			},
			// 查看详情
			openDetail() {
				this.dialogVisible = true;
			},
			// 返回上页
			returnPage() {
				this.$emit('return-page');
			},
			// 获取日期
			gettabledata(obj) {
				let feesum = 0, rebetsum = 0, depositsum = 0, sumtotal = 0;
				this.sumObj.feesum = 0;
				this.sumObj.rebetsum = 0;
				this.sumObj.depositsum = 0;
				this.sumObj.sumtotal = 0;
				this.datalength = obj.item.length || 0;
				if (obj.item && obj.item.length > 0) {
					let model = obj.item || [];
					for (let i = 0; i < model.length; i++) {
						feesum = feesum + FORMATMONEY(model[i].fee);
						rebetsum = rebetsum + FORMATMONEY(model[i].rebet_money);
						depositsum = depositsum + FORMATMONEY(model[i].coupon_money);
						sumtotal = sumtotal + FORMATMONEY(model[i].sum);
					}
					this.sumObj.feesum = FORMATMONEYTOFIXS2(feesum);
					this.sumObj.rebetsum = FORMATMONEYTOFIXS2(rebetsum);
					this.sumObj.depositsum = FORMATMONEYTOFIXS2(depositsum);
					this.sumObj.sumtotal = FORMATMONEYTOFIXS2(sumtotal);
				}
			},
            getSummaries(param) {
                const { columns, data } = param;
                const sums = [];
                columns.forEach((column, index) => {
                    if (index === 0) {
                        sums[index] = '总计';
                        return;
                    }
                    const values = data.map(item => Number(item[column.property]));
                    if (!values.every(value => isNaN(value))) {
                        sums[index] = values.reduce((prev, curr) => {
                            const value = Number(curr);
                            if (!isNaN(value)) {
                                return prev + curr;
                            } else {
                                return prev;
                            }
                        }, 0);
                        sums[index] += '';
                    } else {
                        sums[index] = 'N/A';
                    }
                });
                sums[2] = '';
                sums[5] = '';
                return sums;
            }
		},
		created() {
			this.init();
		}
	}
</script>
<style scoped>

</style>