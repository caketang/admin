<template>
    <div id="deliveryDetail">
        <el-row>
            <el-col :span="24">
                <el-button type="primary" size="small" @click="blackPgUp">
                    {{LANG['返回'] || '返回'}}
                </el-button>
            </el-col>
            <el-col :span="24" class="mt20">
                <el-card class="box-card">
                    <div id="">
                        <div class="titleBox_One font16"><span>{{LANG[(fee_type === 'mincost'?"包底费" : "线路费")] || (fee_type === 'mincost'?"包底费" : "线路费")}}</span></div>
                        <table class="el-table w100  mt10 tCent" border="1px" v-model="lineFeeData">
                            <tr>
                                <th colspan="2">{{LANG['交收项目'] || '交收项目'}}</th>
                                <th>{{LANG['数量(月/个)'] || '数量(月/个)'}}</th>
                                <th>{{LANG['收费标准'] || '收费标准'}}</th>
                                <th>{{LANG['应交收金额'] || '应交收金额'}}</th>
                                <th>{{LANG['实际交收金额'] || '实际交收金额'}}</th>
                            </tr>
                            <tr v-for="item in lineFeeData" >
                                <td colspan="2">{{item.item_name}}</td>
                                <td v-if="item.item_name === '其他费用'">
                                    <div class="cell">
                                        <div><el-button size="small" type="text" @click="viewDetail(item.quantity)">{{LANG['查看'] || '查看'}}</el-button></div>
                                    </div>
                                </td>
                                <td v-else>{{(item.quantity?item.quantity:1)}}</td>
                                <td>{{item.fee_scale | formatMoney}}</td>
                                <td>{{item.receivable | formatMoney}}</td>
                                <td>{{item.receipts | formatMoney}}</td>
                            </tr>
                            <tr class="col2" v-if="feeSum.receivable && feeSum.receipts">
                                <td colspan="4" class="font16" v-if="fee_type === 'mincost'">{{LANG['合计（SSL证书费+其它费用）'] || '合计（SSL证书费+其它费用）'}}</td>
                                <td colspan="4" class="font16" v-else>{{LANG['合计'] || '合计'}}</td>
                                <td >{{feeSum.receivable}}</td>
                                <td >{{feeSum.receipts}}</td>
                            </tr>
                        </table>
                    </div>
                </el-card>
            </el-col>
            <!--弹出查看 备注信息-->
            <el-col :span="24">
                <el-dialog
                        :title="LANG['备注信息'] || '备注信息'"
                        :visible.sync="dialogVisible"
                        size="tiny"
                        :before-close="handleClose">
                    <h3 class="mb20">{{LANG['其它费用备注'] || '其它费用备注'}}</h3>
                    <div style="background-color: #eef1f6;padding: 20px;">
                        {{dialoaMsg}}
                    </div>
                    <span slot="footer" class="dialog-footer"></span>
                </el-dialog>
            </el-col>
            <el-col :span="24" class="mt20">
                <el-card class="box-card">
                    <div class="titleBox_Two font16">{{LANG['第'] || '第'}}<span>{{periodsView.period_number}}</span>{{LANG['期游戏抽成费用'] || '期游戏抽成费用'}}</div>
                    <table class="el-table w100 mt20 tCent" border="1px">
                        <tr>
                            <th>{{LANG['交收项目'] || '交收项目'}}</th>
                            <th>{{LANG['金额(输赢)'] || '金额(输赢)'}}</th>
                            <th>{{LANG['抽成比例'] || '抽成比例'}}(%)</th>
                            <th>{{LANG['实际交收金额'] || '实际交收金额'}}</th>
                        </tr>
                        <tr v-for="(items,i) in RoyaltyFeeData">
                            <td>{{items.game_type}}</td>
                            <td>{{items.gross_profit | formatMoney}}</td>
                            <td>{{items.proportion}}</td>
                            <td>{{items.received | formatMoney}}</td>
                        </tr>
                        <tr class="col2">
                            <td colspan="3" class="font16">{{LANG['合计'] || '合计'}}:</td>
                            <td>{{RoyaltyFeeDataAll}}</td>
                        </tr>
                    </table>
                    <!--<div class="block tRight">-->
                        <!--&lt;!&ndash;<span class="demonstration">完整功能</span>&ndash;&gt;-->
                        <!--<el-pagination-->
                                <!--@size-change="handleSizeChange"-->
                                <!--@current-change="handleCurrentChange"-->
                                <!--:current-page="currentPage4"-->
                                <!--:page-sizes="[10, 40, 60, 80]"-->
                                <!--:page-size="10"-->
                                <!--layout="total, sizes, prev, pager, next, jumper"-->
                                <!--:total=RoyaltyFeeData.length>-->
                        <!--</el-pagination>-->
                    <!--</div>-->
                </el-card>
            </el-col>
            <el-col :span="24" class="mt10">
                <el-card class="box-card">
                    <div v-for="(item,k) in costStatistics" :key="k" class="text item">
                        <span class="font16">{{LANG[item.label] || item.label}}: </span><span>{{item.val}}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
	import ElCard from "../../../node_modules/element-ui/packages/card/src/main.vue";
	export default {
		data() {
			return {
				LANG,
				dialogVisible: false,
				costStatistics: [
					{label: "线路费用合计", val: null},
					{label: "游戏抽成费用合计", val: null},
					{label: "总应缴纳金额", val: null},
				],
                feeSum:{
                    receivable: 0,
                    receipts: 0
                },
                nowBaodifei: 0,
				periodsView: {
                    period_number: "",
                    id: -1
                },
				tableDate: '',
				//页码
				currentPage4: null,
				//线路/包底费用 data
				lineFeeData: [],
				//抽成费用data
				RoyaltyFeeData: [],
                //fee_type 判断是保底费还是线路费 fee_type
				fee_type:'',
                //包底费用合计
				lineFeeAll: null,
				//游戏抽成合计
				RoyaltyFeeDataAll:null,
                nowType:"",
                dialoaMsg: ""
			}
		},
		components: {ElCard},
		methods: {
			init() {
				this.periodsView.id = this.$route.query.id || -1;
                this.periodsView.period_number = this.$route.query.period_number || "";
				let _this = this;
                this.lineFeeData.splice(0,this.lineFeeData.length);
                this.RoyaltyFeeData.splice(0,this.RoyaltyFeeData.length);
				let tablUrl = URL.api + ROUTES.GET.system.detail;

				this.$.autoAjax('get',tablUrl + '/' + this.periodsView.id, '', {
					ok: (res) => {
						if(res.data && res.state === 0 && res.data){
							//获取是保底费还是线路费
							_this.fee_type = res.data.fee_type;
							let list = res.data.costitems || [];
							let temp = {receivable:0,receipts:0};
							_this.nowBaodifei = FORMATNUMBER(list[0].receipts);
							for(let i=0;i<list.length;i++){
								_this.lineFeeData.push({
									created: list[i].created,
									fee_scale: list[i].fee_scale,
									id: list[i].id,
									item_name: list[i].item_name,
									quantity: list[i].quantity?list[i].quantity:1,
									receipts: list[i].receipts,
									receivable: FORMATNUMBER(list[i].quantity?list[i].quantity:1) * FORMATNUMBER(list[i].fee_scale),
									receive_id: list[i].receive_id,
									updated: list[i].updated
								});
								temp.receivable = FORMATNUMBER(temp.receivable) + FORMATNUMBER(_this.lineFeeData[i].receivable);
								temp.receipts = FORMATNUMBER(temp.receipts) + FORMATNUMBER(_this.lineFeeData[i].receipts);
							}
							if(_this.fee_type === "mincost"){
								temp.receipts = temp.receipts - _this.nowBaodifei;
								_this.costStatistics[0].label = "合计（SSL证书费+其它费用）";
							}else{
								_this.costStatistics[0].label = "线路费合计";
							}
							_this.feeSum.receivable = FORMATMONEY(temp.receivable) > 0 ? FORMATMONEY(temp.receivable) : 0.00;
							_this.feeSum.receipts = FORMATMONEY(temp.receipts) > 0 ? FORMATMONEY(temp.receipts) : 0.00;

							// 总合计
							_this.costStatistics[0].val = 0;
							_this.costStatistics[1].val = 0;
							_this.costStatistics[2].val = 0;
							_this.costStatistics[0].val = _this.feeSum.receipts;
							_this.RoyaltyFeeDataAll = 0;
							//游戏抽成
							for(let n in res.data.items){
								_this.RoyaltyFeeData[n] = res.data.items[n];
								_this.RoyaltyFeeDataAll  += FORMATNUMBER(res.data.items[n].received);
							}
							_this.RoyaltyFeeDataAll = FORMATMONEY(_this.RoyaltyFeeDataAll);
							if(_this.fee_type === 'mincost'){
								if(FORMATNUMBER(_this.RoyaltyFeeDataAll) > FORMATNUMBER(_this.nowBaodifei)){
									_this.costStatistics[1].label = "游戏抽成费合计";
									_this.costStatistics[1].val = FORMATNUMBER(_this.RoyaltyFeeDataAll);
								}else{
									_this.costStatistics[1].label = "保底费";
									_this.costStatistics[1].val = FORMATMONEY(_this.nowBaodifei) > 0 ? FORMATMONEY(_this.nowBaodifei) : 0.00;
								}
							}else{
								_this.costStatistics[1].val = FORMATNUMBER(_this.RoyaltyFeeDataAll);
							}
							_this.costStatistics[2].val  = (FORMATNUMBER(_this.costStatistics[0].val) + FORMATNUMBER(_this.costStatistics[1].val)).toFixed(2);
						};
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
			},
			blackPgUp() {
				this.$router.push({path: '/deliveryStatement'});
			},
			//查看备注信息
			viewDetail(obj) {
			    this.dialoaMsg = obj;
				this.dialogVisible = true;
			},
			//关闭查看详情
			handleClose() {
				this.dialogVisible = false;
			},
			//翻页
			handleSizeChange(val) {
			},
			handleCurrentChange(val) {
			}
		},
		activated() {
            this.init()
		},
	}

</script>
<style lang="less" scopend>
    #deliveryDetail {
        .box-card {
            .titleBox_One, .titleBox_Two {
                border-bottom: 1px solid #e4e4e4;
            }
            .el-table {
                .col2 {
                    background: #fafafa;
                }
                th {
                    text-align: center;
                }
            }
        }

    }
</style>
