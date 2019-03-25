<template>
    <div id="indexEcharts" class="chart w100">
        <el-row :gutter="10">
            <!--顶部用户数据直观展示-->
            <el-col :span="4">
                <div class="indexData" style="background:#0fbed1">
                    <p class="num" :title="'今日活跃用户：'+active">{{active}}</p>
                    <p class="textHide">{{LANG['今日活跃用户'] || '今日活跃用户'}}</p>
                </div>
            </el-col>
            <!--首充人数-->
            <el-col :span="4">
                <div class="indexData" style="background:#99ABC6">
                    <p class="num">
                        {{new_deposit_members? new_deposit_members: 0}}</p>
                    <p class="textHide">{{LANG['首充人数'] || '首充人数'}}</p>
                </div>
            </el-col>
            <el-col class="border_bottom" :span="4">
                <div class="indexData" style="background:#39bc30">
                    <p class="num" :title="'今日新增用户：'+newly">{{newly}}</p>
                    <p class="textHide">{{LANG['今日新增用户'] || '今日新增用户'}}</p></div>
            </el-col>
            <el-col class="border_bottom" :span="4">
                <div class="indexData" style="background:#ff6360">
                    <p class="num" :title="'今日上线用户数：'+online">{{online}}</p>
                    <p class="textHide">{{LANG['当前在线用户数'] || '当前在线用户数'}}</p>
                </div>
            </el-col>
            <el-col class="border_bottom" :span="4">
                <div class="indexData" style="background:#ffb72f">
                    <p class="num" :title="'今日总注单数：'+orders">{{orders}}</p>
                    <p class="textHide">{{LANG['今日总注单数'] || '今日总注单数'}}</p>
                </div>
            </el-col>
            <!--注单总额-->
            <el-col :span="4">
                <div class="indexData" style="background:#C9592D">
                    <p class="num">{{amount?amount:0}}</p>
                    <p class="textHide">{{LANG['今日总注单金额'] || '今日总注单金额'}}</p>
                </div>
            </el-col>
            <el-col class="border_bottom" :span="4">
                <div class="indexData" style="background:#ff9269">
                    <p class="num">{{deposite? deposite:0}}</p>
                    <p class="textHide">{{LANG['今日存款总金额'] || '今日存款总金额'}}</p>
                </div>
            </el-col>
            <!--提款总额-->
            <el-col :span="4">
                <div class="indexData" style="background:#56C9C5">
                    <p class="num">
                        {{withdraw_money?withdraw_money: 0}}</p>
                    <p class="textHide">{{LANG['提款总额'] || '提款总额'}}</p>
                </div>
            </el-col>
            <!--总输赢-->
            <el-col :span="4">
                <div class="indexData" style="background:#ab8def">
                    <p class="num">
                        {{gross_profit?gross_profit:0}}</p>
                    <p class="textHide">{{LANG['总输赢'] || '总输赢'}}</p>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="mt20">
            <el-col :span="12">
                <div class="echarMode mt20 textHide" style="background: #fff;">
                    <div class="w50 fl">{{LANG['总报表'] || '总报表'}}</div>
                    <div class="w50 fl tRight">
                        <el-button size="mini" @click="sevenDaysMoney(7)" class="ml300" :loading="timeObj.report_one"
                                   :class="{'btn-active' :(day.sumActive)}">
                            {{LANG['最近7天'] || '最近7天'}}
                        </el-button>
                        <el-button size="mini" @click="sevenDaysMoney(30)" :class="{'btn-active' :!(day.sumActive)}"
                                   :loading="timeObj.report_two">
                            {{LANG['最近30天'] || '最近30天'}}
                        </el-button>
                    </div>
                    <div style="height:420px;" class="cl bor" v-if="state.sumShow">
                        <echarts :domName="sumDomName" :type="sumType" :titleList="sumTitleList" :dataList="sumDataList"
                                 :dataConfig="sumDataConfig" :updateData="reportUpdate.sumActive"></echarts>
                    </div>
                    <div style="height:420px;" class="cl bor dataWu" v-if="!state.sumShow">{{LANG['暂无数据'] || '暂无数据'}}
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="echarMode mt20 textHide" style="background: #fff;">
                    <div class="w50 fl">{{LANG['会员统计'] || '会员统计'}}</div>
                    <div class="w50 fl tRight">
                        <el-button size="mini" @click="sevenDaysMenber(7)" class="ml300" :loading="timeObj.member_one"
                                   :class="{'btn-active' :(day.memberActive)}">{{LANG['最近7天'] || '最近7天'}}
                        </el-button>
                        <el-button size="mini" @click="sevenDaysMenber(30)" :loading="timeObj.member_two"
                                   :class="{'btn-active' :!(day.memberActive)}">{{LANG['最近30天'] || '最近30天'}}
                        </el-button>
                    </div>
                    <div style="height:420px;" class="cl bor" v-if="state.memberShow">
                        <echarts :domName="domName" :type="type" :titleList="titleList" :dataList="dataList"
                                 :dataConfig="dataConfig" :updateData="reportUpdate.memberActive"></echarts>
                    </div>
                    <div style="height:420px;" class="cl bor dataWu" v-if="!state.memberShow">{{LANG['暂无数据'] || '暂无数据'}}
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="echarMode textHide" style="background: #fff;">
                    <div class="w20 fl">{{LANG['游戏对比'] || '游戏对比'}}</div>
                    <div class="w50 fl tCent">
                        <el-button size="mini" type="text" :class="{ col1: !isActive }"
                                   @click="channelDays(7,'default')">{{LANG['移动PC下注占比'] || '移动PC下注占比'}}
                        </el-button>
                        <el-button size="mini" type="text" :class="{col1 :isActive}" @click="channelDays(7,'orders')">
                            {{LANG['彩票下注金额占比'] || '彩票下注金额占比'}}
                        </el-button>
                    </div>
                    <div class="w30 fl tRight">
                        <el-button size="mini" @click="channelDays(7)" class="ml300" :loading="timeObj.game_one"
                                   :class="{'btn-active' :(day.chanelActive)}">{{LANG['最近7天'] || '最近7天'}}
                        </el-button>
                        <el-button size="mini" @click="channelDays(30)" :class="{'btn-active' :!(day.chanelActive)}"
                                   :loading="timeObj.game_two">
                            {{LANG['最近30天'] || '最近30天'}}
                        </el-button>
                    </div>
                    <div style="height:420px;" class="cl bor" v-if="state.gameShow">
                        <echarts :domName="roundName" :type="typeRound" :titleList="roundtitleList"
                                 :dataList="roundDataList" :dataConfig="[]"
                                 :updateData="reportUpdate.chanelActive"></echarts>
                    </div>
                    <div style="height:420px;" class="cl bor dataWu" v-if="!state.gameShow">{{LANG['暂无数据'] || '暂无数据'}}
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="echarMode textHide" style="background: #fff;">
                    <div class="w50 fl">{{LANG['产品汇总'] || '产品汇总'}}</div>
                    <div class="w50 fl tRight">
                        <el-button size="mini" @click="gamesDays(7)" class="ml300" :loading="timeObj.product_one"
                                   :class="{'btn-active' :(day.gameActive)}">{{LANG['最近7天'] || '最近7天'}}
                        </el-button>
                        <el-button size="mini" @click="gamesDays(30)" :class="{'btn-active' :!(day.gameActive)}"
                                   :loading="timeObj.product_two">
                            {{LANG['最近30天'] || '最近30天'}}
                        </el-button>
                    </div>
                    <div style="height:420px;" class="cl bor" v-if="state.gameShow">
                        <echarts :domName="histogramName" :type="typeHistogram" :titleList="histogramTitleList"
                                 :dataList="histogramDataList" :dataConfig="histogramDataConfig"
                                 :updateData="reportUpdate.gameActive"></echarts>
                    </div>
                    <div style="height:420px;" class="cl bor dataWu" v-if="!state.gameShow">{{LANG['暂无数据'] || '暂无数据'}}
                    </div>
                </div>
            </el-col>
        </el-row>
        <!--尾部数据排名-->
        <el-row :gutter="20" class="mt20 topTen">
            <el-col :span="8">
                <div class="tCent sortData">
                    <h3>{{LANG['今日盈利金额前十名'] || '今日盈利金额前十名'}}</h3>
                    <div v-if="!state.profitShow" class="noDataTable">{{LANG['暂无数据'] || '暂无数据'}}</div>
                    <tablegrid
                        class="sortTable mt20"
                        v-if="state.profitShow"
                        :columnsUrl="columnsUrl"
                        :automation="true"
                        :tableUrl="tableUrl1"
                        :showRefresh="false"
                        :pageSet="false"
                        :fullWidth="false"
                        :updated="updatedProfit"
                        :tableIndex="false">
                    </tablegrid>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="tCent sortData">
                    <h3>{{LANG['今日存款金额前十名'] || '今日存款金额前十名'}}</h3>
                    <div v-if="!state.depositShow" class="noDataTable">{{LANG['暂无数据'] || '暂无数据'}}</div>
                    <tablegrid
                        class="sortTable mt20"
                        v-if="state.depositShow"
                        :columnsUrl="columnsUrl"
                        :tableUrl="tableUrl2"
                        :showRefresh="false"
                        :automation="true"
                        :pageSet="false"
                        :fullWidth="false"
                        :updated="updatedDeposit"
                        :tableIndex="false">
                    </tablegrid>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="tCent sortData">
                    <h3>{{LANG['今日取款金额前十名'] || '今日取款金额前十名'}}</h3>
                    <div v-if="!state.WithdrawShow" class="noDataTable">{{LANG['暂无数据'] || '暂无数据'}}</div>
                    <tablegrid
                        class="sortTable mt20"
                        v-if="state.WithdrawShow"
                        :columnsUrl="columnsUrl"
                        :automation="true"
                        :tableUrl="tableUrl3"
                        :showRefresh="false"
                        :pageSet="false"
                        :fullWidth="false"
                        :updated="updatedWithdraw"
                        :tableIndex="false">
                    </tablegrid>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    import echarts from '../../components/charts/echarts.vue'
    import editTable from '../../components/tableGrid.vue';
    import tableGrid from '../../components/tableGrid.vue';

    export default {
        data() {
            return {
                LANG,
                //今日汇总
                active: 0,
                newly: 0,
                online: 0,
                deposite: 0,
                orders: 0,
                amount: 0,
                profit: 0,
                gross_profit: 0,
                new_deposit_members: 0,
                withdraw_money: 0,
                //表格列数据
                columnsUrl: "static/json/indexEcharts/columns.json",
                //表格数据
                tableUrl1: "",
                tableUrl2: "",
                tableUrl3: "",
                //会员统计
                //线形图
                domName: "line",
                type: "line",
                titleList: [LANG["总会员数"] || "总会员数", LANG["新增会员"] || "新增会员", LANG["存款会员数"] || "存款会员数", LANG["下注会员数"] || "下注会员数"],
                dataList: null,
                dataConfig: ["day", "total", "newly", "deposit", "orders"],
                //线形图2
                sumDomName: "sumDom",
                sumType: "line",
                sumTitleList: [LANG["总存款"] || "总存款", LANG["总取款"] || "总取款", LANG["总输赢"] || "总输赢"],
                sumDataList: null,
                sumDataConfig: ["day", "deposit", "withdraw", "profit"],
                //环形图
                roundName: "round",
                typeRound: "round",
                roundtitleList: [],
                roundDataList: [],
                roundDataList1: [],
                dataConfig1: ["channel", "orders"],
                gameType: "",
                //柱状图
                histogramName: "histogram",
                typeHistogram: "histogram",
                histogramTitleList: [LANG["彩票下单数"] || "彩票下单数", LANG["彩票下注金额"] || "彩票下注金额", LANG["彩票盈亏金额"] || "彩票盈亏金额"],
                histogramDataList: {
                    "orders": [],
                    "amount": [],
                    "profit": []
                },
                histogramDataConfig: ["orders", "amount", "profit"],
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
                reportUpdate: {
                    chanelActive: false,
                    gameActive: false,
                    memberActive: false,
                    sumActive: false
                },
                //图表切换更新
                updateData: false,
                //表格更新
                updatedProfit: false,
                updatedDeposit: false,
                updatedWithdraw: false,
                isActive: false,
                roundDataConfig: [],
                timeObj: {
                    game_one: false,
                    game_two: false,
                    product_one: false,
                    product_two: false,
                    member_one: false,
                    member_two: false,
                    report_one: false,
                    report_two: false
                },
            }
        },
        components: {
            editTable: editTable,
            echarts: echarts,
            tablegrid: tableGrid,
        },
        watch: {
            '$route'(to, from) {//监听路由改变
                $('#indexEcharts').find('.tablesOverall').css('width', 'auto').find('table').css('min-width', '0px');
            },
        },
        methods: {
            init() {
                let _this = this;
                this.columnsUrl = "static/json/indexEcharts/columns.json"
                setTimeout(() => {
                    this.tableUrl1 = URL.api + ROUTES.GET.stat.profit;
                    this.tableUrl2 = URL.api + ROUTES.GET.stat.deposit;
                    this.tableUrl3 = URL.api + ROUTES.GET.stat.withdraw;
                }, 3000)
                // 初始化状态
                this.timeObj = {
                    game_one: false,
                    game_two: false,
                    product_one: false,
                    product_two: false,
                    member_one: false,
                    member_two: false,
                    report_one: false,
                    report_two: false
                };
                this.initStat();
                this.sevenDaysMenber(7);
                this.sevenDaysMoney(7);
                this.channelDays(7);
                this.gamesDays(7);
                this.updatedProfit = true;
                this.updatedDeposit = true;
                this.updatedWithdraw = true;
                setTimeout(function () {
                    _this.updatedProfit = false;
                    _this.updatedDeposit = false;
                    _this.updatedWithdraw = false;
                }, 2000);
            },
            // 设置多久不能点
            setTimeOutFn(key, num, state) {
                if (!key) {
                    return;
                }
                if (num && FORMATNUMBER(num)) {
                    num = FORMATNUMBER(num) * 1000;
                } else {
                    num = 3 * 1000;
                }
                let obj = this.timeObj;
                if (obj[key] != undefined) {
                    setTimeout(() => {
                        obj[key] = (state != undefined) ? state : false;
                    }, num);
                }
            },
            // 今日统计  今日活跃用户 新增用户等按钮初始化
            initStat() {
                var _this = this;
                this.$.autoAjax('get', URL.api + ROUTES.GET.stat.today, '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            _this.active = res.data.active_members || 0;
                            _this.newly = res.data.new_members || 0;
                            _this.online = res.data.online_members || 0;
                            _this.deposite = res.data.deposit_money || 0;
                            _this.orders = res.data.bet_times || 0;
                            _this.amount = res.data.bet_money || 0;
                            //_this.profit = res.data.withdraw_money || 0;
                            _this.gross_profit = res.data.gross_profit || 0;
                            _this.new_deposit_members = res.data.new_deposit_members || 0;
                            _this.withdraw_money = res.data.withdraw_money || 0;
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //游戏对比统计方法 7天跟30天统计
            channelDays(val, type) {
                if (type) {
                    this.gameType = type;
                }
                if (val === 7) {
                    this.timeObj.game_one = true;
                    this.day.chanelActive = true;
                } else {
                    this.timeObj.game_two = true;
                    this.day.chanelActive = false;
                }
                let _this = this;
                this.reportUpdate.chanelActive = false;
                this.$.autoAjax('get', URL.api + ROUTES.GET.stat.channel.$(parseInt(val)), '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            let model = res.data;
                            let roundtitleList = _this.roundtitleList = [];
                            let roundDataList1 = _this.roundDataList1 = [];
                            let roundDataList = _this.roundDataList = [];
                            let arrs = [];
                            _this.state.gameShow = true;
                            if (_this.gameType === "default" || _this.gameType === "") {
                                //下注占比
                                arrs = res.data.channel || [];
                                _this.isActive = true;
                            } else {
                                //下注金额比
                                arrs = res.data.orders || [];
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
                            if (val === 7) {
                                _this.setTimeOutFn('game_one', '', false);
                            } else {
                                _this.setTimeOutFn('game_two', '', false);
                            }
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //游戏下单数、金额、盈亏统计 7天跟30天统计
            gamesDays(val) {
                var _this = this;
                if (val === 7) {
                    this.timeObj.product_one = true;
                    this.day.gameActive = true;
                } else {
                    this.timeObj.product_two = true;
                    this.day.gameActive = false;
                }

                this.reportUpdate.gameActive = false;
                this.$.autoAjax('get', URL.api + ROUTES.GET.stat.games.$(val), '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            let model = res.data.orders || {};
                            this.histogramDataList = {
                                "orders": [],
                                "amount": [],
                                "profit": []
                            }
                            let histogramDataList = this.histogramDataList;
                            for (let k in model) {
                                let arrs = model[k] || [];

                                for (let j in arrs) {
                                    if (parseInt(j) === 1 && k != "orders") {
                                        let money = [];
                                        let aList = arrs[j];
                                        for (let l in aList) {
                                            money.push(FORMATMONEY(aList[l]));
                                        }
                                        histogramDataList[k].push(money);
                                    } else {
                                        histogramDataList[k].push(arrs[j]);
                                    }

                                }
                            }
                            if (val === 7) {
                                _this.setTimeOutFn('product_one', '', false);
                            } else {
                                _this.setTimeOutFn('product_two', '', false);
                            }
                            _this.reportUpdate.gameActive = true;
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //会员统计 7天跟30天统计
            sevenDaysMenber(val) {
                var _this = this;
                if (val === 7) {
                    this.timeObj.member_one = true;
                    this.day.memberActive = true;
                } else {
                    this.timeObj.member_two = true;
                    this.day.memberActive = false;
                }
                this.dataList = {};
                this.reportUpdate.memberActive = false;
                this.$.autoAjax('get', URL.api + ROUTES.GET.stat.member.$(parseInt(val)), '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            _this.state.memberShow = true;
                            for (let k in res.data) {
                                let arr = res.data[k] || [];
                                let list = _this.dataList[k] = [];
                                for (let i in arr) {
                                    list.push(arr[i]);
                                }
                                ;
                            }
                            if (val === 7) {
                                _this.setTimeOutFn('member_one', '', false);
                            } else {
                                _this.setTimeOutFn('member_two', '', false);
                            }
                            _this.reportUpdate.memberActive = true;
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //总报表 7天跟30天统计
            sevenDaysMoney(val) {
                var _this = this;
                if (val === 7) {
                    this.timeObj.report_one = true;
                    this.day.sumActive = true;
                } else {
                    this.timeObj.report_two = true;
                    this.day.sumActive = false;
                }
                this.reportUpdate.sumActive = false;
                this.sumDataList = {};
                this.$.autoAjax('get', URL.api + ROUTES.GET.stat.amount.$(parseInt(val)), '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            let model = res.data || [];
                            _this.state.sumShow = true;
                            for (let k in model) {
                                let arr1 = model[k] || [];
                                let list1 = _this.sumDataList[k] = [];
                                for (let i in arr1) {
                                    if (/^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/.test(arr1[i])) {
                                        list1.push(arr1[i]);
                                    } else {
                                        let money = parseInt(arr1[i]);
                                        if (isNaN(money) == false) {
                                            list1.push(parseInt(arr1[i]) / 100);
                                        } else {
                                            list1.push(0);
                                        }
                                    }
                                }
                                ;
                            }
                            if (val === 7) {
                                _this.setTimeOutFn('report_one', '', false);
                            } else {
                                _this.setTimeOutFn('report_two', '', false);
                            }
                            _this.reportUpdate.sumActive = true;
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
        },
        mounted() {
            let _this = this;
            //定时请求
            if (localStorage.token) {
                window.TIME1 = setInterval(() => {
                    setTimeout(()=>{
                        _this.init();
                    }, 0)
                }, 300000)
            }
            window.onload = function(){
                setInterval(() => {
                    setTimeout(()=>{
                        _this.initStat()
                    }, 0)
                }, 300000);
            }
            this.init();
        },
        created() {

        },
        destroyed() {
            window.clearInterval(window.TIME1);
        }
    }
</script>

<style scoped>
    .bor {
        text-align: center;
    }

    .textHide {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .dataWu {
        padding-top: 170px;
        box-sizing: border-box;
    }

    .chart .indexData {
        /*background: #fff;*/
        color: #fff;
        border-radius: 8px 8px;
        border-bottom: 1px solid #EBEEF5;
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
    .chart .col1 {
        color: #8492A6;
    }

    /*7天30天切换样式*/
    .chart .btn-active {
        border-color: #20A0FF;
        color: #20A0FF;
    }

    .chart .num {
        font-size:1.8em;
        font-weight: 400;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .chart .sortData .sortTable {
        background: #fff;
        min-height: 440px;
    }

    .chart .sortData {
        background: #fff;
        padding: 20px;
    }
</style>
