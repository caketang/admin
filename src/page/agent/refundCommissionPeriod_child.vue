<template>
    <div id="RefundCommissionPeriod_child" v-loading="loading">
        <div v-show="!showCommissionDetail" class="w100">
            <el-col :span="24">
                <el-button type="primary" size="small" class="call_back" @click="back_pages">返回上一页</el-button>
            </el-col>
            <el-col :span="24" class="period_number">
                <div class="fl">
                    <span>期数名称：</span>
                    <span class="state_blue">{{$route.query.period_name}}</span>
                    <span class="ml20">时间区间：</span>
                    <span class="state_blue">{{$route.query.start}} —— {{$route.query.end}}</span>
                </div>
                <div class="fl ml20">
                    <el-form ref="form" :model="formDate" label-width="90px">
                        <el-form-item label="代理用户名" class="fl">
                            <el-input v-model="formDate.account" class="intW"></el-input>
                        </el-form-item>
                        <el-form-item label="状态" class="fl">
                            <el-select v-model="formDate.status" placeholder="请选择状态" class="intW">
                                <el-option label="全部" value=""></el-option>
                                <!--<el-option label="已发放" value="1"></el-option>-->
                                <el-option label="未发放" value="0"></el-option>
                                <!--<el-option label="取消" value="4"></el-option>-->
                                <el-option label="未达门槛" value="5"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="fl ml20">
                    <el-button type="primary" size="small" class="call_back" @click="seach_list">查 询</el-button>
                    <el-popover
                            ref="popover"
                            placement="top"
                            width="160"
                            v-model="visible">
                        <p>确定要存入本期数据？</p>
                        <div style="text-align: right; margin: 0">
                            <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                            <el-button type="primary" size="mini" @click="save_list">确定</el-button>
                        </div>
                    </el-popover>
                    <el-button type="primary" size="small" class="call_back" v-popover:popover>存入整期数据</el-button>
                </div>
            </el-col>
            <el-col>
                <tablegrid
                        :columnsUrl="columnsUrl"
                        :tableCheck="false"
                        :tableUrl="tableUrl"
                        :hoverData="gridData"
                        :do-hover="doHandle"
                        @do-handle="doHandle"
                        :tableIndex="false"
                        :updated="updated">
                </tablegrid>
            </el-col>
        </div>
        <!--<el-col v-show="showCommissionDetail">-->
            <!--<refund :nowId="nowId" :agentName="agentName" :nowNumber="nowNumber"-->
                           <!--@return-page="returnPage">-->
            <!--</refund>-->
        <!--</el-col>-->
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
//    import refund from './refund_child.vue'

    export default {
        data() {
            return {
                LANG,
                tableUrl: "",
                columnsUrl: "",
                visible: false,
                //编辑界面数据
                formType: "",
                type: "default",
                formTitel: "",
                labelWidth: "90px",
                //解锁dialog
                loading: false,
                formDate: {
                    "account": "",
                    "status": "",
                    "period": "",
                },
                updated: false,
                gridData: [],
                nowId: -1,
                agentName: "",
                nowNumber: "",
                showCommissionDetail: false,

            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
//            refund: refund
        },
        methods: {
            init() {
                this.columnsUrl = "/static/json/agent/RefundCommissionPeriod/columns_child.json";
                let url = URL.api + '/commission/period.static' + '?period=' + this.$route.query.period;

				this.$.autoAjax('get',url, '', {
					ok: (res) => {
						if (res.data) {
							this.tableUrl = URL.api + ROUTES.GET.commission.income + '?period=' + this.$route.query.period + '&type=1';
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(url, URLCONFIG).then((res) => {
                //     if (res.data.data) {
                //         this.tableUrl = URL.api + ROUTES.GET.commission.income + '?period=' + this.$route.query.period + '&type=1';
                //     }
                // })
//                this.tableUrl = URL.api + '/commission/period.static'+'?period='+ this.$route.query.period;
                this.formDate["account"] = '';
                this.formDate["status"] = '';
                this.formDate["period"] = this.$route.query.period;
                this.formDate["type"] = '1';

            },
            // 返回列表
            returnPage() {
                this.showCommissionDetail = false;
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
                    //隐藏返水比例
//                    case "hideRebateProportion":
//                        this.hideRebateProportion(item.row, item.event)
//                        break;
                    case "showCommissionProportion":
                        this.showCommissionProportion(item.row, item.event)
                        break;
//                    case "hideCommissionProportion":
//                        this.hideCommissionProportion(item.row, item.event)
//                        break;
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
//                    case "getCommissionNumber": // 用户名跳转
//                        this.getCommissionNumber(item.row)
//                        break;
                    default:
                        break;
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
//            // 退佣查询
//            getCommissionNumber(row) {
//                console.log(row);
////                if(this.nowId >=0 && FORMATMONEY(row.bkge_amount) != 0){
//                if (this.nowId >= 0) {
//                    this.nowId = row.uid;
//                    this.agentName = row.username;
//                    this.showCommissionDetail = true;
//                    this.nowNumber = parseInt(row.period);
//                } else {
//                    this.$message.error(LANG['当前详情无法查看'] || '当前详情无法查看');
//                }
//            },
            //用户名跳转
            openUserSet(item) {
//                this.$router.push({path: '/agentAccount', query: {name: item.username}});
            },
            back_pages() {
                this.$router.push({path: '/refundCommissionPeriod'});
            },
            //查询数据
            seach_list() {
                this.tableUrl = URL.api + '/commission/income' + this.addSearch(this.formDate);
            },
            save_list() {
                this.visible = false;
                let url = URL.api + '/commission/period.static' + '?period=' + this.$route.query.period + '&save=1';

				this.$.autoAjax('get',url, '', {
					ok: (res) => {
						console.log(res);
						if (res.data && res.msg == 'OK') {
							this.$message.success('恭喜你，存入整期数据成功。')
							this.$router.push({path: '/refundCommissionPeriod'});
						} else {
							this.$message.error('抱歉，存入整期数据失败。')
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(url, URLCONFIG).then((res) => {
                //     console.log(res);
                //     if (res.data && res.data.msg == 'OK') {
                //         this.$message.success('恭喜你，存入整期数据成功。')
                //         this.$router.push({path: '/refundCommissionPeriod'});
                //     } else {
                //         this.$message.error('抱歉，存入整期数据失败。')
                //     }
                // });
            }


        },
        computed: {},
        mounted() {
        },
        created() {
            this.init();
        },
        watch: {
            '$route'() {//监听路由改变
                this.init();

            }
//            columnsUrl: function (newval) {
//                if(newval) {
//                }
//            }
        },

    }
</script>
<style scoped>
    #RefundCommissionPeriod_child .period_number {
        line-height: 32px;
    }
</style>
