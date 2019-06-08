<template>
    <div id="lotterNoteSet" class="clearfix w100" v-loading="loading">
        <el-row>
            <!--表头-->
            <el-col :span="24">
                <changeplay @do-change-play="doChangePlay" :active="playType"></changeplay>
            </el-col>
        </el-row>
        <el-row id="">
            <el-col :span="24" style="margin:10px 0;">
                <formEdit   :formVisible="formVisible"
                            :formConfig="searchConfig"
                            :type="type"
                            :labelWidth="labelWidth"
                            @get-select="changeLottery"
                            @do-query="doQuery"
                            :isEdit="isEdit"
                            @reset-form="resetForm"
                            :formReset="formReset"
                            :formType="formType"
                            :showAdd="false"
                            :updateKeys = "initName.lottery.nameval"
                            ></formEdit>
            </el-col>
        </el-row>
        <el-col :span="24">
            <tablegrid ref="bankTable" class="bankTable"
                       :updated="updated"
                       :columnsUrl="columnsUrl"
                       :tableUrl="tableUrl"
                       :autoshowRefresh="true"
                       :automation="true"
                       :getData="true"
                       @get-table-data="getTableData"
                       @do-handle="doHandle">
                <tr slot="other" v-if="tableLength > 0">
                    <td colspan="10" ><div class="cell">{{LANG['小计'] || '小计'}}</div></td>
                    <!--<td colspan="10" v-if="playType === 'standard'"><div class="cell">{{LANG['小计'] || '小计'}}</div></td>-->
                    <!--<td colspan="10" v-if="playType === 'fast'"><div class="cell">{{LANG['小计'] || '小计'}}</div></td>-->
                    <td><div class="cell">{{subTotalMoney.pay_money}}</div></td>
                    <td><div class="cell">{{subTotalMoney.valid_bet}}</div></td>
                    <td><div class="cell">{{subTotalMoney.send_prize}}</div></td>
                    <td><div class="cell">{{subTotalMoney.lose_earn}}</div></td>
                    <td colspan="3"></td>
                </tr>
                <tr slot="other" v-if="tableLength > 0">
                    <td colspan="10" ><div class="cell">{{LANG['总计'] || '总计'}}</div></td>
                    <!--<td colspan="10" v-if="playType === 'standard'"><div class="cell">{{LANG['总计'] || '总计'}}</div></td>-->
                    <!--<td colspan="10" v-if="playType === 'fast'"><div class="cell">{{LANG['总计'] || '总计'}}</div></td>-->
                    <td><div class="cell">{{totalMoney.pay_money}}</div></td>
                    <td><div class="cell">{{totalMoney.valid_bet}}</div></td>
                    <td><div class="cell">{{totalMoney.send_prize}}</div></td>
                    <td><div class="cell">{{totalMoney.lose_earn}}</div></td>
                    <td colspan="3"></td>
                </tr>
            </tablegrid>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <el-col :span="24">
            <!--详情界面-->
            <el-dialog :title="formTtile" v-model="FormVisible" class="fromTitle">
                <notedetail :tableData="detailForm"></notedetail>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="FormVisible = false">{{LANG['关闭'] || '关闭'}}</el-button>
                </div>
            </el-dialog>
        </el-col>
    </div>
</template>
<script type="text/ecmascript-6">
    import changePlay from '../../components/changePlay.vue'
    import datepicker from '../../components/dateTimePicker.vue'
    import tableGrid from '../../components/tableGrid.vue'
    import noteDetail from '../../components/noteDetail.vue'
    import quickDate from '../../components/quickDate.vue'
    import confirm from '../../components/confirm.vue'
    import formEdit from '../../components/formEdit.vue'
    export default {
        data() {
            return {
                initName:{
                    lottery:{
                        nameval: ""
                    },
                },
                formType:"",
                type:"search",
                labelWidth:"90px",
                 //搜索相关
                searchConfig:[
                    {"type":"quickDate","showTimes": true},//快捷日期
                    {"prop":"user_name","value":"","label":"用户名","type":"text"},
                    {"prop":"order_number","value":"","type":"text","label":"注单号"},
                    {"prop":"lottery_id","value":"","label":"彩票名称","type":"select",
                        "list":[]},
                    {"prop":"play_type","value":"","label":"玩 法","type":"select",
                        "list":[]},
                    {"prop":"status","value":"","label":"注单状态","type":"select",
                        "list": [
                        {"value": "open", "label": "已结算"},
                        {"value": "unopen", "label": "未结算"},
                        {"value": "canceled", "label": "已撤销"}
                    ]},
                    {"prop":"origin","value":"","label":"来 源","type":"select",
                        "list":ARRAYS.PLATFORMS1},
                     {"prop":"lottery_number","value":"","type":"text","label":"期 号"},
                    {"type":"dateTimeGroup","label":"投注时间","prop":[{"prop":"date_from","value":"","label":"开始时间"}, {"prop":"date_to","value":"","label":"结束时间"}]},
                ],
                formVisible:{
                    state:false
                },
                LANG,
                 isEdit:{
                    state:false
                },
                //表格地址
                columnsUrl: "",
                tableUrl: "",
                baseUrl: "",
                //当前彩票玩法
                playType: "",
                //日期初始时间
                Sdate: {
                    "dateStart": "",
                    "dateEnd": ""
                },
                reSet: false,
                //彩票名称列表
                lotteryList: [],
                playTypeList: [],

                numList: [],
                //搜索条件
                editForm: {
                    user_name: '',
                    order_number: '',
                    lottery_id: '',
                    play_type: '',
                    status: '',
                    origin: '',
                    lottery_number: '',
                    date_from: sessionStorage.sysTime,
                    date_to: sessionStorage.sysTime
                },
                //弹窗相关
                formTtile: "",
                FormVisible: false,
                detailForm: [],
                //删除确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                updated: false,
                lotteryPid: -1,
                // 请求loading
                loading: false,
                // 小计
                subTotalMoney: {
                    lose_earn: 0,
                    pay_money: 0,
                    send_prize: 0,
                    valid_bet: 0
                },
                totalMoney: {
                    lose_earn: 0,
                    pay_money: 0,
                    send_prize: 0,
                    valid_bet: 0
                },
                tableLength: 0,
                formReset: false,
            }
        },
        components: {
            changeplay: changePlay,
            tablegrid: tableGrid,
            formEdit:formEdit,
            notedetail: noteDetail,
            confirm: confirm
        },
        methods: {
            //页面初始化
            init() {
                var _this = this;
                this.playType = this.playType === "standard" ? "standard" : "fast";
                this.$route.query.name
                // 判断玩法
                if (this.playType === "standard") {
                    // 标准
                    this.$route.query.name
                        ?this.$route.query.lotteryType
                            ?this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType + "&lottery_id=" + this.$route.query.lotteryId + "&lottery_number=" + this.$route.query.lotteryNumber + "?date_from=" + sessionStorage.sysTime + "&date_to=" + sessionStorage.sysTime
                            :this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType + "&date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd+ "&user_name=" +this.$route.query.name
                        :this.$route.query.lotteryType
                            ?this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType + "&lottery_id=" + this.$route.query.lotteryId + "&lottery_number=" + this.$route.query.lotteryNumber + "?date_from=" + sessionStorage.sysTime + "&date_to=" + sessionStorage.sysTime
                            :this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType + "&date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
                    this.columnsUrl = "static/json/lotteryNew/lottersinglenote/standard/columns.json";
                } else {
                    // 快速
                    this.$route.query.lotteryType
                        ?this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType + "&lottery_id=" + this.$route.query.lotteryId + "&lottery_number=" + this.$route.query.lotteryNumber + "&play_type=" + this.$route.query.playName + "&date_from=" + sessionStorage.sysTime + "&date_to=" + sessionStorage.sysTime
                        :this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType + "&date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
                    this.columnsUrl = "static/json/lotteryNew/lottersinglenote/quick/columns.json";
                }
                // this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType;
                this.baseUrl = URL.api + ROUTES.GET.lottery.orders;
                //初始化彩票名称
                this.$.autoAjax('get',URL.api + ROUTES.GET.lottery.types.$, '', {
                    ok: (res) => {
                        let model = res.data || [];
                        this.searchConfig[3].list=[];
                        // if (model.length > 0) {
                        for (let i in model) {
                            if (model[i].pid != 0) {
                                let state = model[i].state || "";
                                let regular = _this.playType === "standard" ? /standard/ : /fast/;
                                if (regular.test(state)) {
                                    this.searchConfig[3].list.push({
                                        "label": model[i].name,
                                        "value": model[i].id.toString(),
                                        "pid": model[i].pid
                                    })
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
            },
            //切换彩票名称
            changeLottery(obj) {
                if(obj.key !== "lottery_id")
                {
                    return;
                }
                let model = this.searchConfig[3].list;
                for (let k in model) {
                    if (model[k].value === obj.obj.lottery_id) {
                        this.lotteryPid = model[k].pid;
                    }
                }
                this.initName.lottery.nameval = "play_type,";
                setTimeout(() => {
                     this.initName.lottery.nameval = "-1";
                }, 500)
                this.getPlayList();
            },
            //获取玩法
            getPlayList() {
                let _this = this;
                this.searchConfig[4].list = [];
                this.playType = this.playType === "standard" ? "standard" : "fast";

                this.$.autoAjax('get',URL.api + ROUTES.GET.lottery.types.class.$(this.playType), '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            let model = res.data || [];
                            let lotteryPid = _this.lotteryPid;
                            _this.playTypeList = [];
                            for (let k in model) {
                                if (model[k].id == lotteryPid) {
                                    let data = model[k].sub || [];
                                    for (let n in data) {
                                        _this.searchConfig[4].list.push({
                                            "label": data[n].name,
                                            "value": data[n].id.toString()
                                        });
                                    }
                                    return;
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
            },
            //切换玩法
            doChangePlay(str) {
                let _this = this;
                this.formReset = false;
                if (str.item === this.playType) {
                    return;
                }
                this.playType = str.item;
                this.resetForm();
                setTimeout(()=>{
                  _this.formReset = true;
                },200)
            },
            getDateval(obj){
                if(obj.day === ""){
                    if(obj.daykey){
                        this.editForm[obj.daykey] = "";
                    }
                }
            },
            getDay(obj) {
                this.editForm.date_from = obj.sday;
                this.editForm.date_to = obj.eday;
            },
            //执行查询
            doQuery(obj) {
                let str = this.addSearch(obj.item);
                if(!str)
                {
                    this.tableUrl = this.baseUrl + '?type=' + this.playType;

                }else{
                    this.tableUrl = this.baseUrl + this.addSearch(obj.item) + '&type=' + this.playType;
                }

            },
            resetForm(){
                this.tableUrl = this.baseUrl+'?type=' + this.playType+ "&date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
            },
            //处理操作事件
            doHandle(obj) {
                this.updated = false;
                if (obj.fn == 'doDetail') {
                    this.doDetail(obj.row)
                }
                if (obj.fn == 'doKillOrder') {
                    this.doKillOrder(obj.row)
                }
                switch (obj.fn) {
                    case "openUserSet": // 用户名跳转
                        this.openUserSet(obj.row)
                        break;
                    case "openAgentSet": //代理跳转跳转
                        this.openAgentSet(obj.row)
                        break;
                    default:
                        break;
                }
            },
            openUserSet(item) {
                this.$router.push({path: '/memberManagement', query: {name: item.user_name}});
            },
            openAgentSet(item) {
                this.$router.push({path: "/agentAccount",query:{name: item.agent_name}});

            },
            //显示详情
            doDetail(row) {
                this.detailForm = [];
                this.FormVisible = true;
                this.formTtile = '注单详情';
                let detailForm = this.detailForm;
                for (let i in row) {
                    detailForm[i] = row[i]
                }
            },
            doConfirm(obj) {
                // let _this = this;
                this.updated = false;
                let object = {};
                if (obj.obj) {
                    object = obj.obj;
                }
                let id = parseInt(obj.obj.id);
                switch (obj.fn) {
                    case "doKillOrder":
                        this.loading = true;
                        this.$.autoAjax('patch',URL.api + ROUTES.PATCH.lottery.order + "/" + id, {"state": "canceled"}, {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    this.$message.success(LANG['恭喜您，撤销成功！'] || '恭喜您，撤销成功！');
                                    this.updated = true;
                                } else {
                                    res.data?this.$message.error(LANG['撤销失败，请稍候重试！'] || '撤销失败，请稍候重试！'):this.$message(res.msg);
                                }
                                this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                this.loading = false;
                            }
                        })
                        break;
                }
            },
           //撤单
            doKillOrder(row) {
                this.confirmConfig.state = true;
                this.confirmConfig.msg = this.LANG['确定撤销么？'] || '确定撤销么？';
                this.confirmConfig.fn = "doKillOrder";
                this.confirmConfig.obj = row;
            },
            // 获取总计小计
            getTableData(obj){
                this.tableLength = 0;
                this.subTotalMoney = {lose_earn: 0, pay_money: 0, send_prize: 0, valid_bet: 0};
                this.totalMoney = { lose_earn: 0, pay_money: 0, sendPrize: 0, valid_bet: 0 };
                if(obj.allData && obj.allData.attributes){
                    this.tableLength = parseInt(obj.allData.attributes.total);
                }
                if(obj.allData && obj.allData.attributes && obj.allData.attributes.subTotalMoney){
                    this.subTotalMoney.lose_earn = FORMATMONEY(obj.allData.attributes.subTotalMoney.lose_earn);
                    this.subTotalMoney.pay_money = FORMATMONEY(obj.allData.attributes.subTotalMoney.pay_money);
                    this.subTotalMoney.send_prize = FORMATMONEY(obj.allData.attributes.subTotalMoney.send_prize);
                    this.subTotalMoney.valid_bet = FORMATMONEY(obj.allData.attributes.subTotalMoney.valid_bet);
                }
                if(obj.allData && obj.allData.attributes && obj.allData.attributes.totalMoney){
                    this.totalMoney.lose_earn = FORMATMONEY(obj.allData.attributes.totalMoney.lose_earn);
                    this.totalMoney.pay_money = FORMATMONEY(obj.allData.attributes.totalMoney.pay_money);
                    this.totalMoney.send_prize = FORMATMONEY(obj.allData.attributes.totalMoney.send_prize);
                    this.totalMoney.valid_bet = FORMATMONEY(obj.allData.attributes.totalMoney.valid_bet);
                }
            },

        },
        mounted() {
        },
        activated() {
            this.searchConfig[1]['value'] = '';
                this.formType = 'update' + (Math.random() * 9 + 1);
            if (this.$route.query.name) {
                this.searchConfig[1]['value'] = this.$route.query.name;
            }
            this.$route.query.lotteryType
            ?this.playType = this.$route.query.lotteryType
            :this.playType = 'standard';
            this.init();
        },
        deactivated() {
            this.$route.query.lotteryType = null;
            this.searchConfig[1]['value'] = '';
        },
        created: function () {
            // 默认查看标准玩法
            if (this.$route.query.lotteryType) {
                this.playType = this.$route.query.lotteryType;
            } else {
                this.playType = 'standard'
            }
            this.init()
        }
    }
</script>
<style>
    #lotterNoteSet .cpSeachData .el-input {
        width: 100%;
    }

    #lotterNoteSet .line {
        text-align: center
    }

    #lotterNoteSet .search {
        padding: 0px
    }

    #lotterNoteSet .cpSeach {
        min-width: 210px;
        max-width: 380px;
    }
    #lotterNoteSet .el-date-editor .el-input__inner {
        height:30px;
    }
</style>
