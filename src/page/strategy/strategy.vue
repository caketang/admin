<template>

        <div id="indexEcharts" class="chart w100">
        <el-col :span="24">
            <div class="echarMode mt20" style="background: #fff;">
                <div class="w50 fl">{{LANG['实时注单'] || '实时注单'}}</div>

                <div style="height:420px;" class="cl bor" v-if="state.memberShow">
                    <echarts :domName="domName" :type="type" :titleList="titleList" :dataList="dataList"
                             :dataConfig="dataConfig" :updateData="reportUpdate.memberActive" :colors="color"></echarts>
                </div>
                <div style="height:420px;" class="cl bor dataWu" v-if="!state.memberShow">{{LANG['暂无数据'] || '暂无数据'}}
                </div>
            </div>
        </el-col>
    </div>
</template>
<script>
    import echarts from '../../components/charts/echarts.vue'
    import editTable from '../../components/editTable.vue';
    export default{
        data(){
            return {
                hide: true,
                color:['red','green','blue'],
                LANG,
                //今日汇总
                active: "",
                newly: "",
                online: "",
                deposite: "",
                orders: "",
                amount: "",
                profit: "",
                //表格列数据
                columnsUrl: "",
                //表格数据
                tableUrl1: "",
                tableUrl2: "",
                tableUrl3: "",
                //会员统计
                //线形图
                domName: "line",
                type: "line",
                titleList: ["今日注单金额", "今日注单数", "下注会员数",],
                dataList: [],
                dataConfig: [ "day","deposit", "newly", "orders", "total"],
                //线形图2
                sumDomName: "sumDom",
                sumType: "line",
                sumTitleList: ["总取款", "总存款", "总输赢"],
                sumDataList: [],
                sumDataConfig: ["day", "deposit", "withdraw", "profit"],
                //环形图
                roundName: "round",
                typeRound: "round",
                state: {
                    memberShow: false,
                    sumShow: false,
                    gameShow: false,
                    profitShow: true,
                    depositShow: true,
                    WithdrawShow: true
                },
                //各日期选中状态
                day: {
                    chanelActive: false,
                    gameActive: false,
                    memberActive: false,
                    sumActive: false
                },
                //各图表刷新状态
                reportUpdate:{
                    chanelActive : false,
                    gameActive: false,
                    memberActive: false,
                    sumActive: false
                },
                //图表切换更新
                updateData: false
            }



        },
        components: {
            editTable: editTable,
            echarts: echarts
        },
        methods: {
            init(){
                this.columnsUrl = "static/json/indexEcharts/columns.json"
                this.tableUrl1 = URL.api + ROUTES.GET.stat.profit;
                this.tableUrl2 = URL.api + ROUTES.GET.stat.deposit;
                this.tableUrl3 = URL.api + ROUTES.GET.stat.withdraw;
                this.initStat();
                this.sevenDaysMenber(7);
                this.sevenDaysMoney(7);
                this.channelDays(7);
                this.gamesDays(7);
            },
            // 今日统计  今日活跃用户 新增用户等按钮初始化
            initStat(){
                var _this = this;
                _this.$http.get(URL.api + ROUTES.GET.stat.today,URLCONFIG).then((res) => {
                    if (res.data.state == 0 && res.data.data) {
                        _this.active = res.data.data.active_members || 0;
                        _this.newly = res.data.data.new_members || 0;
                        _this.online = res.data.data.online_members || 0;
                        _this.deposite = res.data.data.deposit_money || 0;
                        _this.orders = res.data.data.bet_times || 0;
                        _this.amount = res.data.data.bet_money || 0;
                        _this.profit = res.data.data.withdraw_money || 0;
                    }
                })
            },
            //游戏对比统计方法 7天跟30天统计
            channelDays(val,type){
                if(type){
                    this.gameType = type;
                }
                if(val === 7){
                    this.day.chanelActive = true;
                }else{
                    this.day.chanelActive = false;
                }
                let _this = this;
                this.reportUpdate.chanelActive = false;
                this.$http.get(URL.api + ROUTES.GET.stat.channel.$(parseInt(val)),URLCONFIG).then((res) => {
                    if (res.data.state == 0 && res.data.data) {

                        let model = res.data.data;
                        let roundtitleList = _this.roundtitleList = [];
                        let roundDataList1 = _this.roundDataList1 = [];
                        let roundDataList = _this.roundDataList = [];
                        let arrs = [];
                        _this.state.gameShow = true;
                        if (_this.gameType === "default" || _this.gameType === "") {
                            //下注占比
                            arrs = res.data.data.channel || [];
                            _this.isActive = true;
                        } else {
                            //下注金额比
                            arrs = res.data.data.orders || [];
                            _this.isActive = false;
                        }
                        if (arrs[0]) {
                            for (let i = 0; i < arrs[0].length; i++) {
                                roundtitleList.push(arrs[0][i]);
                            }
                        }
                        for (let k in arrs) {
                            roundDataList.push(arrs[k]);
                            roundDataList1.push(arrs[k]);
                        }
                        _this.reportUpdate.chanelActive = true;
                    }
                })
            },

            //游戏下单数、金额、盈亏统计 7天跟30天统计
            gamesDays(val){
                var _this = this;
                if(val === 7){
                    this.day.gameActive = true;
                }else{
                    this.day.gameActive = false;
                }
                this.reportUpdate.gameActive = false;
                this.$http.get(URL.api + ROUTES.GET.stat.games.$(val),URLCONFIG).then((res) => {
                    if (false) {
                        let model = res.data.data.orders || {};
                        let histogramDataList = this.histogramDataList;
                        for (let k in model) {
                            let arrs = model[k] || [];
                            for (let j in arrs) {
                                histogramDataList[k].push(arrs[j]);
                            }
                        }
                        _this.reportUpdate.gameActive = true;
                    }
                })
            },

            //会员统计 7天跟30天统计
            sevenDaysMenber(val){
                var _this = this;
                if(val === 7){
                    this.day.memberActive = true;
                }else{
                    this.day.memberActive = false;
                }
                this.reportUpdate.memberActive = false;
                this.$http.get(URL.api + ROUTES.GET.stat.member.$(parseInt(val)),URLCONFIG).then((res) => {
                    if (res.data.state == 0 && res.data.data) {

                        res.data.data.day = ['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h','11h','12h','13h','14h','15h','16h','17h','18h','19h',
                        '20h','21h','22h','23h','24h'];
                        _this.state.memberShow = true;
                        for(let i = 0; i < 11; i++)
                        {
                            res.data.data.deposit.push(parseInt(Math.random()*12000 + 5000));
                            res.data.data.newly.push(parseInt(Math.random()*12000 + 4000));
                            res.data.data.orders.push(parseInt(Math.random()*12000 + 3000));
                            res.data.data.total.push(parseInt(Math.random()*12000 + 3000));

                        }

                        for (let k in res.data.data) {
                            let arr = res.data.data[k] || [];
                            let list = _this.dataList[k] = [];
                            for (let i in arr) {
                                list.push(arr[i]);
                            }
                            ;
                        }
                        _this.reportUpdate.memberActive = true;
                    }
                })
            },
            //总报表 7天跟30天统计
            sevenDaysMoney(val){
                var _this = this;
                if(val === 7){
                    this.day.sumActive = true;
                }else{
                    this.day.sumActive = false;
                }
                this.reportUpdate.sumActive = false;
                this.$http.get(URL.api + ROUTES.GET.stat.amount.$(parseInt(val)),URLCONFIG).then((res) => {
                    if (res.data.state == 0 && res.data.data) {
                        _this.state.sumShow = true;
                        for (let k in res.data.data) {
                            let arr1 = res.data.data[k] || [];
                            let list1 = _this.sumDataList[k] = [];
                            for (let i in arr1) {
                                list1.push(arr1[i]);
                            }
                            ;
                        }
                        _this.reportUpdate.sumActive = true;
                    }
                })
            }
        },
        mounted(){
            let _this = this;
            setInterval(function(){
                let addnum =Math.ceil(Math.random()*35);
                _this.active = (parseInt(_this.active) + addnum) >1000000?53453 : (parseInt(_this.active) + addnum);
                _this.newly = (parseInt(_this.newly) + addnum) >1000000?6867 : (parseInt(_this.newly) + addnum);
                _this.online = (parseInt(_this.online) + addnum) >1000000?60867 : (parseInt(_this.online) + addnum);
                _this.deposite = (parseInt(_this.deposite) + addnum) >10000000?15462538 : (parseInt(_this.deposite) + addnum);
                _this.orders = (parseInt(_this.orders) + addnum) >10000000?2543474 : (parseInt(_this.orders) + addnum);
                _this.amount = (parseInt(_this.amount) + addnum) >10000000?14627272 : (parseInt(_this.amount) + addnum);
            },2000)
        },
        created(){
            this.init();
        }
    }
</script>

<style scoped>
    /*#userEchat, #noteEchat, #mobileEchat, #gameEchat {*/
    /*background: #fff !important;*/
    /*padding: 20px 0;*/
    /*z-index: 200;*/
    /*}*/
    .bor {
        text-align: center;
    }

    .dataWu {
        padding-top: 170px;
        box-sizing: border-box;
    }

    .chart .indexData {
        background: #fff;
        padding: 20px 0 20px 20px;
    }

    /*图表样式*/
    .chart .echarMode {
        padding: 15px;
    }

    .chart .tRight {
        text-align: right;
    }
    /*游戏占比切换按钮*/
    .col1 {
        color: #8492A6;
    }
    /*7天30天切换样式*/
    .btn-active{border-color:#20A0FF;color:#20A0FF;}
    .num {
        font-size: 38px;
        font-weight: 200
    }

    /*.chart .noteData p:first-child, .chart .indexData p:first-child {*/
    /*font-size: 24px;*/
    /*font-weight: 700;*/
    /*}*/

    /*.chart .indexData:first-child {*/
    /*margin-left: 0;*/
    /*}*/

    .chart .sortData .sortTable {
        background: #fff;
        min-height: 440px;
    }

    /*.chart .sortData h3 {*/
    /*padding: 20px 0;*/
    /*}*/

    /*.chart .chartBtn {*/
    /*position: relative;*/
    /*top: 38px;*/
    /*z-index: 2;*/
    /*padding: 5px 10px;*/
    /*}*/

    /*.chart .noData {*/
    /*line-height: 420px;*/
    /*background: #fff;*/
    /*padding: 20px 0;*/
    /*}*/

    /*.chart .noDataTable {*/
    /*line-height: 10px;*/
    /*background: #fff;*/
    /*padding: 20px 0;*/
    /*border-top: 1px solid #cccccc*/
    /*}*/
</style>
