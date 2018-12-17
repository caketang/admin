<template>
    <div id="templateManage" class="templateManage w100">
        <el-row>
            <el-col :span="24" class="mb10">
                <el-tabs v-model="activeName" type="border-card" @tab-click="changeType">
                    <el-tab-pane :label="LANG['彩票'] || '彩票'" name="lottery">
                        <el-tabs v-model="activeNames" @tab-click="handleClick">
                            <formEdit
                                    :formVisible="formVisible"
                                    :formConfig="lotteryConfig"
                                    :type="type"
                                    :labelWidth="labelWidth"
                                    @do-query="doQuery"
                                    :isEdit="isEdit"
                                    @reset-form="resetForm"
                                    @get-select="getSelectLottery"
                                    :formReset="formReset"
                                    :formType="formType"
                                    :showAdd="false"
                                    :updateDate="initDate.lottery.dateval"
                                    :updateKeys="initName.lottery.nameval"
                            ></formEdit>
                        </el-tabs>
                    </el-tab-pane>
                    <el-tab-pane :label="LANG['视讯'] || '视讯'" name="live">
                        <el-tabs v-model="activeNames" @tab-click="handleClick">
                            <el-tab-pane v-for="item in liveArr" :key="item.game_id" :label="item.game_name"
                                         :name="item.game_short"></el-tab-pane>
                        </el-tabs>
                        <el-row v-show="nowPlayType =='live'">
                            <formEdit :formVisible="formVisible" :formConfig="liveConfig" :type="type"
                                      :labelWidth="labelWidth" @do-query="doQuery" :isEdit="isEdit"
                                      @reset-form="resetForm" :showAdd="false" :formType="formType"
                                      :formReset="formReset"
                                      :updateDate="initDate.live.dateval"
                                      :updateKeys="initName.live.nameval"></formEdit>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane :label="LANG['电子'] || '电子'" name="egame">
                        <el-tabs v-model="activeNames" @tab-click="handleClick">
                            <el-tab-pane v-for="item in egameArr" :key="item.game_id" :label="item.game_name"
                                         :name="item.game_short"></el-tab-pane>
                        </el-tabs>
                    </el-tab-pane>
                    <el-row v-show="nowPlayType =='egame'">
                        <formEdit :formVisible="formVisible"
                                  :formConfig="egameConfig"
                                  :formReset="formReset"
                                  :type="type"
                                  :labelWidth="labelWidth"
                                  @do-query="doQuery"
                                  :isEdit="isEdit"
                                  @reset-form="resetForm"
                                  @get-select="getSelectVal"
                                  :showAdd="false"
                                  :formType="formType"
                                  :updateDate="initDate.egame.dateval"
                                  :updateKeys="initName.egame.nameval"></formEdit>
                    </el-row>
                    <tablegrid
                            :columnsUrl="columnsUrl"
                            :tableUrl="tableUrl"
                            :updated="updated"
                            :showExport="false"
                            :times="times"
                            @get-table-data="getTableData"
                            :getData="true"
                            @do-handle="doHandle">
                        <tr slot="other" v-if="tableLength > 0 && activeName === 'lottery'">
                            <td colspan="9">
                                <div class="cell">{{LANG['小计'] || '小计'}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.pay_money}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.valid_bet}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.send_prize}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.lose_earn}}</div>
                            </td>

                        </tr>
                        <tr slot="other" v-if="tableLength > 0 && activeName === 'lottery'">
                            <td colspan="9">
                                <div class="cell">{{LANG['总计'] || '总计'}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.pay_money}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.valid_bet}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.send_prize}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.lose_earn}}</div>
                            </td>

                        </tr>
                        <tr slot="other" v-if="tableLength > 0 && activeName === 'live'">
                            <td colspan="6">
                                <div class="cell">{{LANG['小计'] || '小计'}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.pay_money}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.valid_bet}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.lose_earn}}</div>
                            </td>

                        </tr>
                        <tr slot="other" v-if="tableLength > 0 && activeName === 'live'">
                            <td colspan="6">
                                <div class="cell">{{LANG['总计'] || '总计'}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.pay_money}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.valid_bet}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.lose_earn}}</div>
                            </td>

                        </tr>
                        <tr slot="other" v-if="tableLength > 0 && activeName === 'egame' && activeNames === 'PT'">
                            <td colspan="8">
                                <div class="cell">{{LANG['小计'] || '小计'}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.pay_money}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.send_prize}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.jp_contri_subtotal}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.jackpot_bonus_subtotal}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.dollar_ball_bets_subtotal}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.prize_us_subtotal}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.contri_us_subtotal}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.db_jp_subtotal}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.valid_bet}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.lose_earn}}</div>
                            </td>

                        </tr>
                        <tr slot="other" v-if="tableLength > 0 && activeName === 'egame' && activeNames === 'PT'">
                            <td colspan="8">
                                <div class="cell">{{LANG['总计'] || '总计'}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.pay_money}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.send_prize}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.jp_contri_total}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.jackpot_bonus_total}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.dollar_ball_bets_total}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.prize_us_total}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.contri_us_total}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.db_jp_total}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.valid_bet}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.lose_earn}}</div>
                            </td>

                        </tr>
                        <tr slot="other"
                            v-if="tableLength > 0 && activeName === 'egame'&& (activeNames == 'FG' || activeNames == 'JDB')">
                            <td :colspan="egamecol">
                                <div class="cell">{{LANG['小计'] || '小计'}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.pay_money}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.send_prize}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.jackpot_bonus_subtotal}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.jp_contri_subtotal}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.valid_bet}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.lose_earn}}</div>
                            </td>

                        </tr>
                        <tr slot="other"
                            v-if="tableLength > 0 && activeName === 'egame'&& (activeNames == 'FG' || activeNames == 'JDB')">
                            <td :colspan="egamecol">
                                <div class="cell">{{LANG['总计'] || '总计'}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.pay_money}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.send_prize}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.jackpot_bonus_total}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.jp_contri_total}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.valid_bet}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.lose_earn}}</div>
                            </td>
                        </tr>
                        <!--<tr slot="other"-->
                        <!--v-if="tableLength > 0 && activeName === 'egame'&& activeNames !== 'PT' && activeNames !== 'FG' && activeNames !== 'JDB'">-->
                        <!--<td :colspan="egamecol">-->
                        <!--<div class="cell">{{LANG['小计'] || '小计'}}</div>-->
                        <!--</td>-->
                        <!--<td>-->
                        <!--<div class="cell">{{subTotalMoney.pay_money}}</div>-->
                        <!--</td>-->
                        <!--<td>-->
                        <!--<div class="cell">{{subTotalMoney.valid_bet}}</div>-->
                        <!--</td>-->
                        <!--<td>-->
                        <!--<div class="cell">{{subTotalMoney.send_prize}}</div>-->
                        <!--</td>-->
                        <!--<td>-->
                        <!--<div class="cell">{{subTotalMoney.lose_earn}}</div>-->
                        <!--</td>-->

                        <!--</tr>-->
                        <!--<tr slot="other"-->
                        <!--v-if="tableLength > 0 && activeName === 'egame'&& activeNames !== 'PT' && activeNames !== 'FG' && activeNames !== 'JDB'">-->
                        <!--<td :colspan="egamecol">-->
                        <!--<div class="cell">{{LANG['总计'] || '总计'}}</div>-->
                        <!--</td>-->
                        <!--<td>-->
                        <!--<div class="cell">{{totalMoney.pay_money}}</div>-->
                        <!--</td>-->
                        <!--<td>-->
                        <!--<div class="cell">{{totalMoney.valid_bet}}</div>-->
                        <!--</td>-->
                        <!--<td>-->
                        <!--<div class="cell">{{totalMoney.send_prize}}</div>-->
                        <!--</td>-->
                        <!--<td>-->
                        <!--<div class="cell">{{totalMoney.lose_earn}}</div>-->
                        <!--</td>-->
                        <!--</tr>-->
                        <tr slot="other"
                            v-if="tableLength > 0 && activeName === 'egame'&& (activeNames == 'MG' || activeNames === 'BG')">

                            <td :colspan="egamecol">
                                <div class="cell">{{LANG['小-计'] || '小-计'}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.pay_money}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.valid_bet}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.jp_contri_subtotal}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.send_prize}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.lose_earn}}</div>
                            </td>

                        </tr>
                        <tr slot="other"
                            v-if="tableLength > 0 && activeName === 'egame'&& (activeNames == 'MG' || activeNames === 'BG')">
                            <td :colspan="egamecol">
                                <div class="cell">{{LANG['总-计'] || '总-计'}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.pay_money}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.valid_bet}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.jp_contri_total}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.send_prize}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.lose_earn}}</div>
                            </td>
                        </tr>
                        <tr slot="other"
                            v-if="tableLength > 0 && activeName === 'egame'&& (activeNames == 'CQ9' || activeNames == 'GNS' || activeNames == 'HB')">

                            <td :colspan="egamecol">
                                <div class="cell">{{LANG['小-计'] || '小-计'}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.pay_money}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.valid_bet}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.send_prize}}</div>
                            </td>
                            <td>
                                <div class="cell">{{subTotalMoney.lose_earn}}</div>
                            </td>
                        </tr>
                        <tr slot="other"
                            v-if="tableLength > 0 && activeName === 'egame'&& (activeNames == 'CQ9' || activeNames == 'GNS' || activeNames == 'HB')">
                            <td :colspan="egamecol">
                                <div class="cell">{{LANG['总-计'] || '总-计'}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.pay_money}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.valid_bet}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.send_prize}}</div>
                            </td>
                            <td>
                                <div class="cell">{{totalMoney.lose_earn}}</div>
                            </td>
                        </tr>
                    </tablegrid>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'

    export default {
        data() {
            return {
                times: '0',
                egamecol: 6,
                activeNames: "alllottery",
                activeName: "lottery",
                LANG,
                //存储玩法
                liveArr: [],
                egameArr: [],
                loading: false,
                //彩票玩法
                playType: "",
                //选中的玩法类型
                nowPlayType: "",
                //彩票类型
                lotteryType: "",
                //查询表单状态
                formType: "updated",
                //用户名
                userName: "",
                //表格列数据
                columnsUrl: "",
                //表格数据
                tableUrl: "",
                baseUrl: "",
                //重置日期
                updated: false,
                //修改后的搜索表单
                formVisible: false,
                formTitel: "",
                labelWidth: "90px",
                isEdit: {
                    state: false
                },
                formVisible: {
                    state: false
                },
                type: "search",
                lotteryConfig: [
                    {"type": "quickDate", "showTimes": true},//快捷日期
                    {
                        "prop": "type",
                        "value": "all",
                        "type": "select",
                        "label": "类型",
                        "list": [{"label": "全部", "value": "all"}, {"label": "官方", "value": "standard"}, {
                            "label": "信用",
                            "value": "fast"
                        }]
                    },
                    {"prop": "user_name", "value": "", "type": "text", "label": "用户名"},
                    {"prop": "order_number", "value": "", "type": "text", "label": "注单号"},
                    {
                        "prop": "lottery_id", "value": "", "label": "彩票名称", "type": "select",
                        "list": []
                    },
                    {"prop": "lottery_number", "value": "", "type": "text", "label": "期号"},
                    {
                        "prop": "order_origin", "value": "", "label": "来源", "type": "select",
                        "list": ARRAYS.PLATFORMS1
                    },
                    {
                        "type": "dateTimeGroup",
                        "label": "投注时间",
                        "prop": [{"prop": "start_time", "value": "", "label": "开始时间"}, {
                            "prop": "end_time",
                            "value": "",
                            "label": "结束时间"
                        }]
                    }],
                sportConfig: [
                    {"type": "quickDate", "showTimes": true},//快捷日期
                    {"prop": "user_name", "value": "", "type": "text", "label": "用户名"},
                    {"prop": "order_number", "value": "", "type": "text", "label": "注单号"},
                    {
                        "prop": "category", "value": "", "label": "投注类型", "type": "select",
                        "list": [{"label": "足球让球", "value": "足球让球"},
                            {"label": "足球大小", "value": "足球大小"},
                            {"label": "足球单双", "value": "足球单双"},
                            {"label": "足球独赢", "value": "足球独赢"},
                            {"label": "足球串关", "value": "足球串关"}]
                    },
                    {
                        "type": "dateTimeGroup",
                        "label": "投注时间",
                        "prop": [{"prop": "start_time", "value": "", "label": "开始时间"}, {
                            "prop": "end_time",
                            "value": "",
                            "label": "结束时间"
                        }]
                    }],
                liveConfig: [
                    {"type": "quickDate", "showTimes": true},//快捷日期
                    {"prop": "user_name", "value": "", "type": "text", "label": "用户名"},
                    {"prop": "order_number", "value": "", "type": "text", "label": "注单号"},
                    {
                        "type": "dateTimeGroup",
                        "label": "投注时间",
                        "prop": [{"prop": "start_time", "value": "", "label": "开始时间"}, {
                            "prop": "end_time",
                            "value": "",
                            "label": "结束时间"
                        }]
                    }],
                egameConfig: [

                    {"type": "quickDate", "showTimes": true},//快捷日期
                    {"prop": "user_name", "value": "", "type": "text", "label": "用户名"},
                    {"prop": "order_number", "value": "", "type": "text", "label": "注单号"},
                    {
                        "prop": "type_child",
                        "value": "",
                        "type": "select",
                        "label": "游戏类型",
                        "list": [],
                        "filterable": true
                    },
                    {"prop": "game_id", "value": "", "type": "select", "label": "游戏名称", "list": []},
                    {
                        "type": "dateTimeGroup",
                        "label": "投注时间",
                        "prop": [{"prop": "start_time", "value": "", "label": "开始时间"}, {
                            "prop": "end_time",
                            "value": "",
                            "label": "结束时间"
                        }]
                    }],
                initDate: {
                    lottery: {
                        dateval: ""
                    },
                    live: {
                        dateval: ""
                    },
                    egame: {
                        dateval: ""
                    }
                },
                initName: {
                    lottery: {
                        nameval: ""
                    },
                    live: {
                        nameval: ""
                    },
                    egame: {
                        nameval: ""
                    }
                },
                tableLength: 0,
                // 小计
                subTotalMoney: {},
                totalMoney: {},
                totalDate: {
                    lottery: {
                        sstime: sessionStorage.dateTimeStart,
                        setime: sessionStorage.dateTimeEnd,
                    },
                    live: {
                        lebostime: sessionStorage.dateTimeStart,
                        leboetime: sessionStorage.dateTimeEnd,
                        lebousername: "",
                    },
                    egame: {
                        ptstime: sessionStorage.dateTimeStart,
                        ptetime: sessionStorage.dateTimeEnd,
                        ptusername: "",
                    }
                },
                allgames: [],//注单电子所有游戏
                alllottery: [], //注单彩票所有游戏
                formReset: false
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit
        },
        watch: {},
        methods: {
            init() {
                this.getGames();
                let _this = this;
                this.playType = "alllottery";
                this.nowPlayType = "lottery";
                this.columnsUrl = "/static/json/Note/lottery/columns.json";
                if (!this.$route.query.user_name) { // 检查是否正常跳转
                    /*this.tableUrl = URL.api + ROUTES.GET.order.$ +"?start_time=" + sessionStorage.dateTimeStart + "&end_time=" +sessionStorage.dateTimeEnd;*/
                    this.baseUrl = URL.api + ROUTES.GET.order.$;
                }

            },
            getGames() {

				this.$.autoAjax('get',URL.api + ROUTES.GET.games.games, '', {
					ok: (res) => {
						let data = res.data
						this.liveArr = [];
						this.egameArr = [];
						if (res.state === 0 && data) {
							data.forEach((item) => {
								if (item['game_type'] === 'live') {
									this.liveArr.push(item);
								} else if (item['game_type'] === 'egame') {
									this.egameArr.push(item);
								}

							})
						} else {
							this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
				// this.$http.get(URL.api + ROUTES.GET.games.games, URLCONFIG).then((res) => {
                //     let data = res.data.data
                //     this.liveArr = [];
                //     this.egameArr = [];
                //     if (res.data.state === 0 && data) {
                //         data.forEach((item) => {
                //             if (item['game_type'] === 'live') {
                //                 this.liveArr.push(item);
                //             } else if (item['game_type'] === 'egame') {
                //                 this.egameArr.push(item);
                //             }
				//
                //         })
                //     } else {
                //         this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
                //     }
                // })

				this.$.autoAjax('get', URL.api + ROUTES.GET, '', {
					ok: (res) => {
						let data = res.data
						if (res.state === 0 && data.length) {
							this.allgames = data;
						} else {
							this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.games.list + "?category=1", URLCONFIG).then((res) => {// 获取所有游戏
                //     let data = res.data.data
                //     if (res.data.state === 0 && data.length) {
                //         this.allgames = data;
                //     } else {
                //         this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
                //     }
                // })

				this.$.autoAjax('get',URL.api + ROUTES.GET.lottery.types.$ + "?type=0", '', {
					ok: (res) => {
						let data = res.data
						if (res.state === 0 && data.length) {
							this.alllottery = data;
						} else {
							this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
						}
						this.getSelectLottery({key: "type", obj: {type: "all"}});
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.lottery.types.$ + "?type=0", URLCONFIG).then((res) => {// 获取注单彩票所有游戏
                //     let data = res.data.data
                //     if (res.data.state === 0 && data.length) {
                //         this.alllottery = data;
                //     } else {
                //         this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
                //     }
                //     this.getSelectLottery({key: "type", obj: {type: "all"}});
                // })
            },
            getTableData(obj) {
                this.tableLength = 0;
                this.subTotalMoney = {};
                this.totalMoney = {};
                if (obj.allData && obj.allData.attributes != null) {
                    this.tableLength = obj.allData.attributes.total;
                } else {
                    this.tableLength = 0;
                }
                switch (this.activeNames) {
                    case "HB": // 以后表头会改, 不要写统一。
                        this.egamecol = 7;
                        break;
                    case "CQ9":
                        this.egamecol = 7;
                        break;
                    case "FG":
                        this.egamecol = 7;
                        break;
                    case "JDB":
                        this.egamecol = 7;
                        break;
                    case "GNS": // 以后表头会改, 不要写统一。
                        this.egamecol = 7;
                        break;
                    case "MG":
                        this.egamecol = 7;
                        break;
                    case "BG":
                        this.egamecol = 7;
                        break;
                }
                if (this.activeName != "egame") {
                    if (obj.allData && obj.allData.attributes) {
                        this.subTotalMoney.lose_earn = FORMATMONEY(obj.allData.attributes.subTotalMoney.lose_earn);
                        this.subTotalMoney.pay_money = FORMATMONEY(obj.allData.attributes.subTotalMoney.pay_money);
                        this.subTotalMoney.send_prize = FORMATMONEY(obj.allData.attributes.subTotalMoney.send_prize);
                        this.subTotalMoney.valid_bet = FORMATMONEY(obj.allData.attributes.subTotalMoney.valid_bet);
                        this.totalMoney.lose_earn = FORMATMONEY(obj.allData.attributes.totalMoney.lose_earn);
                        this.totalMoney.pay_money = FORMATMONEY(obj.allData.attributes.totalMoney.pay_money);
                        this.totalMoney.send_prize = FORMATMONEY(obj.allData.attributes.totalMoney.send_prize);
                        this.totalMoney.valid_bet = FORMATMONEY(obj.allData.attributes.totalMoney.valid_bet);
                    }

                } else {
                    if (this.activeNames === "PT") {
                        if (obj.allData && obj.allData.attributes) {
                            this.subTotalMoney.lose_earn = FORMATMONEY(obj.allData.attributes.subTotalMoney.lose_earn);
                            this.subTotalMoney.pay_money = FORMATMONEY(obj.allData.attributes.subTotalMoney.pay_money);
                            this.subTotalMoney.send_prize = FORMATMONEY(obj.allData.attributes.subTotalMoney.send_prize);
                            this.subTotalMoney.valid_bet = FORMATMONEY(obj.allData.attributes.subTotalMoney.valid_bet);
                            this.subTotalMoney.dollar_ball_bets_subtotal = FORMATMONEY(obj.allData.attributes.subTotalMoney.dollar_ball_bets_subtotal, 4);
                            this.subTotalMoney.prize_us_subtotal = FORMATMONEY(obj.allData.attributes.subTotalMoney.prize_us_subtotal, 4);
                            this.subTotalMoney.jp_contri_subtotal = FORMATMONEY(obj.allData.attributes.subTotalMoney.jp_contri_subtotal, 4);
                            this.subTotalMoney.jackpot_bonus_subtotal = FORMATMONEY(obj.allData.attributes.subTotalMoney.jackpot_bonus_subtotal, 4);
                            this.subTotalMoney.contri_us_subtotal = FORMATMONEY(obj.allData.attributes.subTotalMoney.contri_us_subtotal, 4);
                            this.subTotalMoney.db_jp_subtotal = FORMATMONEY(obj.allData.attributes.subTotalMoney.db_jp_subtotal, 4);
                            this.totalMoney.lose_earn = FORMATMONEY(obj.allData.attributes.totalMoney.lose_earn);
                            this.totalMoney.pay_money = FORMATMONEY(obj.allData.attributes.totalMoney.pay_money);
                            this.totalMoney.send_prize = FORMATMONEY(obj.allData.attributes.totalMoney.send_prize);
                            this.totalMoney.valid_bet = FORMATMONEY(obj.allData.attributes.totalMoney.valid_bet);
                            this.totalMoney.dollar_ball_bets_total = FORMATMONEY(obj.allData.attributes.totalMoney.dollar_ball_bets_total, 4);
                            this.totalMoney.prize_us_total = FORMATMONEY(obj.allData.attributes.totalMoney.prize_us_total, 4);
                            this.totalMoney.jp_contri_total = FORMATMONEY(obj.allData.attributes.totalMoney.jp_contri_total, 4);
                            this.totalMoney.jackpot_bonus_total = FORMATMONEY(obj.allData.attributes.totalMoney.jackpot_bonus_total, 4);
                            this.totalMoney.contri_us_total = FORMATMONEY(obj.allData.attributes.totalMoney.contri_us_total, 4);
                            this.totalMoney.db_jp_total = FORMATMONEY(obj.allData.attributes.totalMoney.db_jp_total, 4);
                        }
                    } else if (this.activeNames === "FG" || this.activeNames === "JDB" || this.activeNames === "MG" || this.activeNames === "BG") {

                        if (obj.allData && obj.allData.attributes) {
                            this.subTotalMoney.lose_earn = FORMATMONEY(obj.allData.attributes.subTotalMoney.lose_earn);
                            this.subTotalMoney.pay_money = FORMATMONEY(obj.allData.attributes.subTotalMoney.pay_money);
                            ;
                            this.subTotalMoney.jp_contri_subtotal = FORMATMONEY(obj.allData.attributes.subTotalMoney.jp_contri_subtotal, 4);
                            this.subTotalMoney.jackpot_bonus_subtotal = FORMATMONEY(obj.allData.attributes.subTotalMoney.jackpot_bonus_subtotal, 4);
                            this.subTotalMoney.send_prize = FORMATMONEY(obj.allData.attributes.subTotalMoney.send_prize);
                            this.subTotalMoney.valid_bet = FORMATMONEY(obj.allData.attributes.subTotalMoney.valid_bet);
                            this.totalMoney.lose_earn = FORMATMONEY(obj.allData.attributes.totalMoney.lose_earn);
                            this.totalMoney.jp_contri_total = FORMATMONEY(obj.allData.attributes.totalMoney.jp_contri_total, 4);
                            this.totalMoney.jackpot_bonus_total = FORMATMONEY(obj.allData.attributes.totalMoney.jackpot_bonus_total, 4);
                            this.totalMoney.pay_money = FORMATMONEY(obj.allData.attributes.totalMoney.pay_money);
                            this.totalMoney.send_prize = FORMATMONEY(obj.allData.attributes.totalMoney.send_prize);
                            this.totalMoney.valid_bet = FORMATMONEY(obj.allData.attributes.totalMoney.valid_bet);
                        }
                    } else if (this.activeNames === "HB" || this.activeNames === "CQ9" || this.activeNames === "GNS") {
                        if (obj.allData && obj.allData.attributes) {
                            this.subTotalMoney.lose_earn = FORMATMONEY(obj.allData.attributes.subTotalMoney.lose_earn);
                            this.subTotalMoney.pay_money = FORMATMONEY(obj.allData.attributes.subTotalMoney.pay_money);
                            this.subTotalMoney.send_prize = FORMATMONEY(obj.allData.attributes.subTotalMoney.send_prize);
                            this.subTotalMoney.valid_bet = FORMATMONEY(obj.allData.attributes.subTotalMoney.valid_bet);
                            this.totalMoney.lose_earn = FORMATMONEY(obj.allData.attributes.totalMoney.lose_earn);
                            this.totalMoney.pay_money = FORMATMONEY(obj.allData.attributes.totalMoney.pay_money);
                            this.totalMoney.send_prize = FORMATMONEY(obj.allData.attributes.totalMoney.send_prize);
                            this.totalMoney.valid_bet = FORMATMONEY(obj.allData.attributes.totalMoney.valid_bet);
                        }
                    }
                }
            },
            changeType() {
                this.tableUrl = '';
                this.tableLength = 0;
                this.times = '0';
                this.formReset = false;
                this.nowPlayType = this.activeName;
                setTimeout(()=>{
                    this.formReset = true;
                },500)
                switch (this.activeName) {
                    case "lottery":
                        this.activeNames = 'alllottery';
                        this.changePlayType({item: {name: 'alllottery', category: this.activeName}});

                        break
                    case "sports":
                        break
                    case "live":
                        this.activeNames = 'LEBO';
                        this.changePlayType({item: {name: 'LEBO', category: this.activeName}});
                        break;
                    case "egame":
                        this.activeNames = 'PT';
                        this.changeGame(this.activeNames)
                        this.changePlayType({item: {name: 'PT', category: this.activeName}});
                        break;
                    case "fishing":
                        break;
                    case "mg":
                        this.activeNames = 'MG';
                        this.changeGame(this.activeNames)
                        this.changePlayType({item: {name: 'MG', category: this.activeName}});
                        break;
                }
            },
            handleClick(tab, event) {
                this.formReset = false;
                this.tableUrl = '';
                this.tableLength = 0;
                this.initName.egame.nameval = "";
                if (this.activeName === "egame") {
                    this.$nextTick(() => {
                        this.initName.egame.nameval = "type_child,,game_id,";
                    })
                    this.changeGame(tab.name)
                }
                this.changePlayType({item: {name: this.activeNames, category: this.activeName}});
                setTimeout(()=>{
                    this.formReset = true;
                },500)
            },
            changeGame(name) {
                let _this = this;
                this.egameConfig[3].list = [{label: "全部", value: "all"}];
                this.egameConfig[4].list = [];
                this.allgames.forEach((item) => {
                    if (item.name === name) {
                        if (item.category != null) {
                            for (let keys of Object.keys(item.category)) {
                                _this.egameConfig[3].list.push({label: keys, value: keys});
                                for (let [name, id] of Object.entries(item.category[keys])) {
                                    _this.egameConfig[4].list.push({label: id, value: name})
                                }
                            }
                        }
                    }

                })
            },
            getSelectVal(obj) // egame里面切换每个游戏的类型
            {
                if (obj.key === "type_child" && obj.obj.type_child === "捕猎" && this.activeNames === "FG") {
                    this.columnsUrl = "/static/json/Note/electronics/FGFishcolumns.json";

                } else if (obj.key === "type_child" && obj.obj.type_child !== "捕猎" && this.activeNames === "FG") {
                    this.columnsUrl = "/static/json/Note/electronics/FGcolumns.json";

                }
                if (obj.key === "type_child" && obj.obj.type_child === "鱼机" && this.activeNames === "JDB") {
                    this.columnsUrl = "/static/json/Note/electronics/JDBFishcolumns.json";

                } else if (obj.key === "type_child" && obj.obj.type_child !== "鱼机" && this.activeNames === "JDB") {
                    this.columnsUrl = "/static/json/Note/electronics/JDBcolumns.json";

                }
                if (obj.key !== "type_child") {
                    return;
                }
                this.egameConfig[4].list = [];
                if (obj.obj.type_child === "all") {

                    this.egameConfig[4].list.push({label: "全部", value: ""})
                    this.allgames.forEach((item) => {
                        if (item.name === this.activeNames) {

                            if (item.category != null) {
                                for (let key of Object.keys(item.category)) {


                                    for (let [id, value] of Object.entries(item.category[key])) {

                                        this.egameConfig[4].list.push({label: value, value: id})

                                    }


                                }
                            }
                        }
                    })

                } else {
                    this.allgames.forEach((item) => {
                        if (item.name === this.activeNames) {
                            if (item.category != null) {
                                for (let key of Object.keys(item.category)) {

                                    if (key === obj.obj.type_child) {
                                        this.egameConfig[4].list.push({label: "全部", value: ""})
                                        for (let [id, value] of Object.entries(item.category[obj.obj.type_child])) {

                                            this.egameConfig[4].list.push({label: value, value: id})
                                        }
                                        this.initName.egame.nameval = "game_id,";
                                        setTimeout(() => {
                                            this.initName.egame.nameval = "-1";
                                        })

                                    }

                                }
                            }


                        }

                    })


                }
            },
            //请求彩票名称
            getSelectLottery(obj) { // 注单彩票里面官方和信用彩票名下拉切换

                if (obj.key !== "type") {
                    return;
                }
                let type = obj.obj.type;
                this.lotteryConfig[4].list = [];
                this.lotteryConfig[4].list.push({"label": "全部", "value": ""});
                let model = this.alllottery;
                for (let k of model.values()) {

                    if (type === "standard" && k.is_standard === "1") {
                        push(this.lotteryConfig[4].list, k.name, k.id.toString());

                    } else if (type === "fast" && k.is_fast === "1") {
                        push(this.lotteryConfig[4].list, k.name, k.id.toString());

                    } else {

                        push(this.lotteryConfig[4].list, k.name, k.id.toString());
                    }
                }
                this.initName.lottery.nameval = "lottery_id,";
                setTimeout(() => {
                    this.initName.lottery.nameval = "-1";
                }, 100)

                function push(arr, label, value) {
                    arr.push({"label": label, "value": value});
                }
            },

            //切换快捷玩法
            changePlayType(obj) {
                this.updated = false
                let _this = this;
                if (this.playType == obj.item.name) return;
                this.playType = obj.item.name;
                this.nowPlayType = obj.item.category;
                this.initName.live.nameval = '';
                this.initName.lottery.nameval = '';
                this.initName.egame.nameval = '';
                let sTime, eTime, username; // 判断是否选中时间和输入用户名
                /*this.initDate.lottery.dateval = "start_time,"+ sessionStorage.sysTime + ",end_time,"+ sessionStorage.sysTime;*/
                switch (this.nowPlayType) {
                    case "lottery"://彩票
                        let lottreyname = this.$route.query.user_name || '';
                        let etime = this.$route.query.end_time || '';
                        let isopen = this.$route.query.isopen || '';
                        if (lottreyname && etime && isopen) {
                            // 如果是游戏报表跳过来的, 则要把时间加上
                            this.tableUrl = URL.api + ROUTES.GET.order.$ + "?start_time=" + this.$route.query.start_time + "&end_time=" + this.$route.query.end_time + "&user_name=" + lottreyname + "&isopen=" + isopen;
                            this.initDate.lottery.dateval = "start_time," + this.$route.query.start_time + ",end_time," + this.$route.query.end_time;
                            this.initName.lottery.nameval = "user_name," + lottreyname;
                        } else if (lottreyname && !etime) {

                            this.tableUrl = URL.api + ROUTES.GET.order.$ + "?start_time=" + this.totalDate.lottery.sstime + "&end_time=" + this.totalDate.lottery.setime + "&user_name=" + lottreyname;

                        } else {// 此处判断正常切换
                            sTime = this.totalDate.lottery.sstime || '';
                            eTime = this.totalDate.lottery.setime || '';
                            this.tableUrl = URL.api + ROUTES.GET.order.$ + '?start_time=' + sTime + "&end_time=" + eTime;

                        }
                        this.columnsUrl = "/static/json/Note/lottery/columns.json";
                        this.baseUrl = URL.api + ROUTES.GET.order.$;
                        _this.updated = true;
                        this.getSelectLottery({key: "type", obj: {type: "all"}});
                        break;
                    /*case "sports"://体育
                        if(this.$route.query.user_name&&!this.$route.query.game_type)
                        {
                            this.tableUrl = URL.api + ROUTES.GET.order.sports;
                        }else{
                            this.tableUrl = URL.api + ROUTES.GET.order.sports;
                        }

                        this.baseUrl = URL.api + ROUTES.GET.order.sports;
                        this.columnsUrl="/static/json/Note/sport/columns.json";
                        _this.updated = true;
                        break;*/
                    case "live"://视讯
                        if (this.$route.query.user_name && !this.$route.query.game_type) {
                            this.tableUrl = URL.api + ROUTES.GET.order.live + "?type_name=" + this.playType + "&start_time=" + this.totalDate.live.lebostime + "&end_time=" + this.totalDate.live.leboetime + "&user_name=" + this.$route.query.user_name;
                            this.initName.live.nameval = "user_name," + this.$route.query.user_name;
                        } else {
                            sTime = this.totalDate.live.lebostime != "" ? ("&start_time=" + this.totalDate.live.lebostime) : "";
                            eTime = this.totalDate.live.leboetime != "" ? ("&end_time=" + this.totalDate.live.leboetime) : "";
                            username = this.totalDate.live.lebousername != "" ? ("&user_name=" + this.totalDate.live.lebousername) : "";
                            this.tableUrl = URL.api + ROUTES.GET.order.live + "?type_name=" + this.playType;

                            if (username) {
                                this.tableUrl = this.tableUrl + username;
                            }if (eTime) {
                                this.tableUrl = this.tableUrl + eTime;
                            }if (sTime) {
                                this.tableUrl = this.tableUrl + sTime;
                            }
                        }
                        this.baseUrl = URL.api + ROUTES.GET.order.live;
                        if (this.playType == 'DG') {
                            this.columnsUrl = "/static/json/Note/video/DGcolumns.json";
                        } else if (this.playType == 'LEBO') {
                            this.columnsUrl = "/static/json/Note/video/LEBOcolumns.json";
                        }

                        _this.updated = true;
                        break;
                    case "egame"://电子
                        this.baseUrl = URL.api + ROUTES.GET.order.esports;
                        if (this.$route.query.user_name && !this.$route.query.game_type) {
                            this.tableUrl = URL.api + ROUTES.GET.order.esports + "?type_name=" + this.playType + "&start_time=" + this.totalDate.egame.ptstime + "&end_time=" + this.totalDate.egame.ptetime + "&user_name=" + this.$route.query.user_name;

                            this.initName.egame.nameval = "user_name," + this.$route.query.user_name;
                        } else {
                            sTime = this.totalDate.egame.ptstime != "" ? ("&start_time=" + this.totalDate.egame.ptstime) : "";
                            eTime = this.totalDate.egame.ptetime != "" ? ("&end_time=" + this.totalDate.egame.ptetime) : "";
                            username = this.totalDate.egame.ptusername != "" ? ("&user_name=" + this.totalDate.egame.ptusername) : "";
                            this.tableUrl = URL.api + ROUTES.GET.order.esports + "?type_name=" + this.playType
                            if (username) {
                                this.tableUrl = this.tableUrl + username;
                            }if (sTime) {
                                this.tableUrl = this.tableUrl + sTime;
                            }if (eTime) {
                                this.tableUrl = this.tableUrl + eTime;
                            }

                        }
                        this.egameColumn(this.activeNames);
                        _this.updated = true;
                        break;
                    /*case "fishing"://捕鱼
                        this.tableUrl = URL.api + ROUTES.GET.order.fishing;
                        this.baseUrl = URL.api + ROUTES.GET.order.fishing;
                        this.columnsUrl="static/json/Note/fishing/columns.json";
                        _this.updated = true;
                        break;*/
                }
                this.updated = false
            },
            egameColumn(item)// 判断PT下面的子游戏columns
            {
                switch (item) {
                    case "PT":
                        this.columnsUrl = "/static/json/Note/electronics/PTcolumns.json";
                        break;
                    case "HB":
                        this.columnsUrl = "/static/json/Note/electronics/HBcolumns.json";
                        break;
                    case "CQ9":
                        this.columnsUrl = "/static/json/Note/electronics/CQ9columns.json";
                        break;
                    case "FG":
                        this.columnsUrl = "/static/json/Note/electronics/FGcolumns.json";
                        break;
                    case "JDB":
                        this.columnsUrl = "/static/json/Note/electronics/FGcolumns.json";
                        break;
                    case "MG":
                        this.columnsUrl = "/static/json/Note/electronics/mg_columns.json";
                        break;
                    case "GNS":
                        this.columnsUrl = "/static/json/Note/electronics/gns_columns.json";
                        break;
                    default:
                        this.columnsUrl = "static/json/Note/electronics/columns.json";
                }
            },
            //表格数据按钮
            doHandle(item) {
                switch (item.fn) {
                    case "openMember":
                        this.openMember(item.row)
                        break;
                    case "openAgent":
                        this.openAgent(item.row)
                        break;
                }
            },
            openAgent(obj) {
                this.$router.push({path: "/agentAccount", query: {name: obj.agent_name}});
            },
            openMember(obj) {
                this.$router.push({path: "/memberManagement", query: {name: obj.user_name}});
            },
            //查询搜索
            doQuery(obj) {
                let nowPlayType = this.nowPlayType;
                let isEmpty = this.addSearch(obj.item);
                let isopen = this.$route.query.isopen;
                switch (nowPlayType) {
                    case "lottery":
                        this.columnsUrl = "/static/json/Note/lottery/columns.json";
                        if (isEmpty) {
                            if (obj.item.type === "all") {
                                obj.item.type = "";
                            }
                            if (isopen) {
                                this.tableUrl = this.baseUrl + this.addSearch(obj.item) + "&isopen=" + isopen;
                            } else {
                                this.tableUrl = this.baseUrl + this.addSearch(obj.item)
                            }

                            this.totalDate.lottery.sstime = obj.item.start_time;
                            this.totalDate.lottery.setime = obj.item.end_time;
                        } else {
                            this.tableUrl = this.baseUrl;
                        }
                        break
                    case "live":
                        if (isEmpty) {
                            this.tableUrl = this.baseUrl + this.addSearch(obj.item) + "&type_name=" + this.playType;
                            this.totalDate.live.lebostime = obj.item.start_time;
                            this.totalDate.live.leboetime = obj.item.end_time;
                            this.totalDate.live.lebousername = obj.item.user_name;
                        } else {
                            this.tableUrl = this.baseUrl + "?type_name=" + this.playType;
                        }

                        break;
                    case "egame":
                        if (isEmpty) {
                            if (obj.item.type_child === "all") // 当
                            {
                                obj.item.type_child = "";
                                let str = this.addSearch(obj.item);
                                if (str) {
                                    this.tableUrl = this.baseUrl + this.addSearch(obj.item) + "&type_name=" + this.playType;
                                } else {
                                    this.tableUrl = this.baseUrl + "?type_name=" + this.playType;
                                }
                            } else {
                                this.tableUrl = this.baseUrl + this.addSearch(obj.item) + "&type_name=" + this.playType;
                            }

                            this.totalDate.egame.ptstime = obj.item.start_time;
                            this.totalDate.egame.ptetime = obj.item.end_time;
                            this.totalDate.egame.ptusername = obj.item.user_name;
                        } else {
                            this.tableUrl = this.baseUrl + "?type_name=" + this.playType;
                        }
                        break;
                }
            },
            //重置查询条件
            resetForm(obj) {
                switch (this.nowPlayType) {
                    case "lottery":
                        this.columnsUrl = "/static/json/Note/lottery/columns.json";
                        this.tableUrl = this.baseUrl + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
                        break
                    case "live":
                        this.tableUrl = this.baseUrl + "?type_name=" + this.playType + "&start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
                        break;
                    case "egame":
                        this.tableUrl = this.baseUrl + "?type_name=" + this.playType + "&start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
                        break;
                }
            },
            dealWithRouter(type, name, stime, etime, isopen) {
                this.nowPlayType = 'egame';
                this.activeName = 'egame';
                this.activeNames = type;
                this.playType = type;
                this.initName.egame.nameval = "user_name," + name;
                this.baseUrl = URL.api + ROUTES.GET.order.esports
                if (stime == '' || etime == '') {
                    this.tableUrl = URL.api + ROUTES.GET.order.esports + "?type_name=" + type + "&start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
                } else {
                    this.initDate.egame.dateval = "start_time," + stime + ",end_time," + etime;

                    setTimeout(() => {
                        this.tableUrl = URL.api + ROUTES.GET.order.esports + "?type_name=" + type + "&start_time=" + stime + "&end_time=" + etime + "&user_name=" + name;
                    }, 500)
                    this.totalDate.egame.ptstime = stime;
                    this.totalDate.egame.ptetime = etime;
                    this.totalDate.egame.ptusername = name;
                }
                this.egameColumn(type);
                this.$nextTick(() => {
                    this.initName.egame.nameval = "type_child,,game_id,";
                })
                setTimeout(() => {
                    this.changeGame(type);
                }, 1000);
            }
        },
        created() {
            this.init();
        },

        activated() {
            let name = this.$route.query.user_name || '';
            let type = this.$route.query.game_type || '';
            let gamename = this.$route.query.game_name;
            let stime = this.$route.query.start_time || '';
            let etime = this.$route.query.end_time || '';
            let isopen = this.$route.query.isopen || '';
            if (name && (type === "13" || type === "8")) {
                this.nowPlayType = 'live';
                this.initName.live.nameval = "user_name," + name;
                this.activeName = 'live';
                this.activeNames = type === "13" ? 'LEBO' : 'BG';
                this.playType = type === "13" ? 'LEBO' : 'BG';
                this.baseUrl = URL.api + ROUTES.GET.order.live;
                if (stime == '' || etime == '') {
                    this.tableUrl = URL.api + ROUTES.GET.order.live + "?type_name=" + this.playType + "&user_name=" + name + "&start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
                } else {
                    this.initDate.live.dateval = "start_time," + stime + ",end_time," + etime;
                    setTimeout(() => {
                        this.tableUrl = URL.api + ROUTES.GET.order.live + "?type_name=" + this.playType + "&start_time=" + stime + "&end_time=" + etime + "&user_name=" + name;
                    }, 500)
                    this.totalDate.live.lebostime = stime;
                    this.totalDate.live.leboetime = etime;
                }
                this.columnsUrl = "/static/json/Note/video/LEBOcolumns.json";
            }
            else if (name && type === "-1") {
                this.nowPlayType = 'lottery';
                this.activeName = 'lottery';
                this.activeNames = 'alllottery';
                this.initName.lottery.nameval = "user_name," + name;
                this.baseUrl = URL.api + ROUTES.GET.order.$;
                if (stime == '' || etime == '') {
                    this.tableUrl = URL.api + ROUTES.GET.order.$ + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd + "&isopen=" + isopen;
                } else {
                    this.initDate.lottery.dateval = "start_time," + stime + ",end_time," + etime;
                    setTimeout(() => {
                        this.tableUrl = URL.api + ROUTES.GET.order.$ + "?start_time=" + stime + "&end_time=" + etime + "&user_name=" + name + "&isopen=" + isopen;
                        this.totalDate.lottery.sstime = stime;
                        this.totalDate.lottery.setime = etime;
                    }, 1000)
                }
                this.columnsUrl = "/static/json/Note/lottery/columns.json";
            }
            else if (name && type === "1")// PT
            {
                this.dealWithRouter('PT', name, stime, etime, isopen)

            } else if (name && type === "19")// PT
            {
                this.dealWithRouter('GNS', name, stime, etime, isopen)

            } else if (name && type === "20")//CQ9
            {
                this.dealWithRouter('CQ9', name, stime, etime, isopen)

            } else if (name && type === "21") {// JDB
                this.dealWithRouter('JDB', name, stime, etime, isopen)
            }
            else if (name && type === "18") {// FG
                this.dealWithRouter('FG', name, stime, etime, isopen)
            }
            else if (name && type === "14") // HB
            {
                this.dealWithRouter('HB', name, stime, etime, isopen)
            }
            else if (name && type === "2") // HB
            {
                this.dealWithRouter('MG', name, stime, etime, isopen)
            } else if (name) {
                // 从会员管理跳转过来的
                this.initName.lottery.nameval = "user_name," + name;
                this.nowPlayType = 'lottery';
                this.activeName = 'lottery';
                this.activeNames = 'alllottery';
                this.baseUrl = URL.api + ROUTES.GET.order.$;
                /* setTimeout(() => {
                     this.tableUrl =  URL.api + ROUTES.GET.order.$ +"?start_time=" + stime + "&end_time=" + etime + "&user_name="+name+"&isopen="+isopen;

               },500)*/
                this.tableUrl = URL.api + ROUTES.GET.order.$ + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd + "&user_name=" + name;
                this.columnsUrl = "/static/json/Note/lottery/columns.json";
            } else {
                this.columnsUrl = "/static/json/Note/lottery/columns.json";
                this.baseUrl = URL.api + ROUTES.GET.order.$;
                this.tableUrl = this.baseUrl + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
            }

        },
        deactivated() {
            this.$route.query.user_name = "";
            this.$route.query.start_time = "";
            this.$route.query.end_time = "";
            this.$route.query.game_type = "";
            this.$route.query.game_name = "";
            this.nowPlayType = "";
            this.playType = "";
            this.initDate.egame.dateval = -1;
            this.initName.lottery.nameval = "user_name,";
            this.initName.live.nameval = "user_name,";
            this.initName.egame.nameval = "user_name,";
            this.initDate.egame.dateval = "start_time," + sessionStorage.dateTimeStart + ",end_time," + sessionStorage.dateTimeEnd;
            this.initDate.live.dateval = "start_time," + sessionStorage.dateTimeStart + ",end_time," + sessionStorage.dateTimeEnd;
            this.initDate.lottery.dateval = "start_time," + sessionStorage.dateTimeStart + ",end_time," + sessionStorage.dateTimeEnd;
            this.activeNames = "alllottery";
            this.activeName = "lottery";
        }
    }
</script>
<style lang="less">
    #templateManage {
        /*.el-card__body:first-child {padding: 0 5px 20px 5px;}*/
        .el-dialog--small {
            width: 30%;
            min-width: 400px;
            max-width: 600px;
            border-radius: 10px;
        }
        .el-dialog--small .fromMargin {
            margin-right: 60px;
        }
        .bg-purple-dark {
            background: none;
        }
        .addManage {
            float: right;
            margin-right: 5%;
        }
        .block {
            text-align: right;
        }
    }

    #templateManage .el-tabs__content {
        overflow: inherit;
    }
</style>