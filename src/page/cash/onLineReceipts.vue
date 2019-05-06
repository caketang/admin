<template>
    <div id="onLineReceipts" class="page clearfix" v-loading="loading">
        <formEdit :formVisible="formVisible" :formConfig="searchConfig" :updateKeys="updateKeys" :type="type"
                  :labelWidth="labelWidth" @do-query="doQuery" :isEdit="isEdit" @reset-form="resetForm"
                  :formType="formType" :showAdd="false"></formEdit>
        <!-- <el-col :span="24" class="tCent mt20"><strong>商户编号:</strong><span>39002395</span></el-col> -->
        <el-col>
            <tablegrid
                :columnsUrl="columnsUrl"
                :tableUrl="tableUrl"
                :updated="updated"
                :getData="true"
                @get-table-data="getTableData"
                :autoshowRefresh="true"
                :tableCheck="false"
                :pageSet="true"
                :showExport="isShow"
                :tableIndex="false"
                :automation="true"
                @export-data="exportData"
                @do-handle="doHandle">
                <!-- 汇总 -->
                <tr :span="12" class="sumdiv ml20" slot="other" v-if="sumShow">
                    <td colspan="15">
                        <div class="cell">
                            <span
                                class="font16 ">{{LANG['金额小计'] || '金额小计'}} </span>:<span> {{allData.page_amount_sum | formatMoney}}</span>
                            <span
                                class="font16 ml10">{{LANG['优惠小计'] || '优惠小计'}} </span>:<span> {{allData.page_coupon_sum | formatMoney}}</span>
                            <span
                                class="font16 ml10">{{LANG['金额总计'] || '金额总计'}} </span>:<span> {{allData.total_amount_sum | formatMoney}}</span>
                            <span
                                class="font16 ml10">{{LANG['优惠总计'] || '优惠总计'}} </span>:<span> {{allData.total_coupon_sum | formatMoney}}</span>
                            <span class="font16 ml10">{{LANG['笔数'] || '笔数'}} </span>:<span>{{allData.total}}</span>
                        </div>
                    </td>
                </tr>
            </tablegrid>
        </el-col>
        <el-col>
            <el-dialog title="详情" v-model="dialogVisible" size="small" class="details">
                <el-col :span="24" class="xsDetails">
                    <el-row :gutter="30">
                        <el-col :span="24" class="dialogList">
                            <div>
                                <h3>入款详情:</h3>
                                <el-col :span="12">交易订单号:<span>{{dialogText.trade_no}}</span></el-col>
                                <el-col :span="12">是否首存：<span>{{dialogText.is_new | isNew}}</span></el-col>
                                <el-col :span="12">用户名： <span>{{dialogText.user_name}}</span></el-col>
                                <el-col :span="12">会员等级：<span>{{dialogText.level}}</span></el-col>
                                <el-col :span="12">真实姓名：<span>{{dialogText.true_name}}</span></el-col>
                                <el-col :span="12">用户注册时间：<span>{{dialogText.register_time}}</span></el-col>
                                <el-col :span="12">上级代理：<span>{{dialogText.agent_name}}</span></el-col>
                                <el-col :span="12">
                                    已入款次数/金额：<span>{{dialogText.total_deposit_times}}/{{dialogText.total_deposit_money / 100}}</span>
                                </el-col>
                            </div>
                        </el-col>
                        <el-col :span="24" class="dialogList mt10">
                            <div>
                                <h3>支付渠道:</h3>
                                <el-col :span="12">存款金额：<span>{{dialogText.money / 100}}</span></el-col>
                                <el-col :span="12">支付接口名称：<span>{{dialogText.pay_no}}</span></el-col>
                                <el-col :span="12">支付渠道： <span>{{dialogText.channel_name | getChannel }}</span></el-col>
                                <el-col :span="12">外部交易号：<span>{{dialogText.trade_no}}</span></el-col>
                                <el-col :span="12">存款IP与地区：<span>{{dialogText.ip}}</span></el-col>
                                <el-col :span="12">存款日期：<span>{{dialogText.recharge_time}}</span></el-col>
                            </div>
                        </el-col>
                        <el-col :span="24" class="dialogList mt10">
                            <div>
                                <h3>优惠:</h3>
                                <el-col :span="12">优惠金额：<span>{{dialogText.coupon_money / 100}}</span></el-col>
                                <el-col :span="12">取款要求：<span>{{dialogText.withdraw_bet / 100}}</span></el-col>
                                <el-col :span="12">优惠活动名称： <span>{{dialogText.active_name}}</span></el-col>
                            </div>
                        </el-col>
                        <el-col :span="24" class="dialogList mt10">
                            <div>
                                <label>备注:</label>
                                <el-input
                                    placeholder="当前无备注内容"
                                    v-model="dialogText.memo"
                                    :disabled="true">
                                </el-input>
                                <el-col :span="24">状态:<span>{{dialogText.status}}</span></el-col>
                            </div>
                        </el-col>
                        <el-col :span="24" class="tCent el-dialog__footer"
                                style="margin:20px 0; padding: 0; border-top: 0;">
                            <div>
                                <el-button @click="dialogVisible = false">关 闭</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-dialog>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <el-col>
            <el-dialog
                title="提示"
                :visible.sync="onDialogVisible"
                size="tiny">
                {{LANG['点击”确认“导出数据'] || '点击”确认“导出数据'}}
                <span slot="footer" class="dialog-footer">
                    <el-button @click="onDialogVisible = false">取 消</el-button>
                    <a :href="outUrl" target="_blank" id="outUrl">
                        <el-button type="primary" @click="onDialogVisible = false">确 认</el-button>
                    </a>
              </span>
            </el-dialog>
        </el-col>
    </div>
</template>
<script>
    import Vue from 'vue'
    import quickDate from '../../components/quickDate.vue'
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    import confirm from '../../components/confirm.vue';

    Vue.filter('isNew', function (data) {
        return data === '1' ? '是' : '否'
    })
    export default {
        data() {
            return {
                updated: false,
                loading: false,
                LANG,
                //表格列数据
                columnsUrl: "",
                //表格数据
                tableUrl: "",
                dialogVisible: false,
                dialogText: '',
                xqStatus: '',//详情状态
                dialogUrl: '',
                //搜索相关
                updateKeys: '',
                searchConfig: [
                    {"type": "quickDate", "showTimes": true},//快捷日期
                    {"prop": "user_name", "value": "", "type": "text", "label": "用户名"},
                    {"prop": "trade_no", "value": "", "type": "text", "label": "交易订单号", width150: true},
                    {
                        "prop": "status", "value": "", "label": "交易状态", "type": "select",
                        "list": [
                            {"label": "全部", "value": ""},
                            {"label": "已支付", "value": "paid"},
                            {"label": "待支付", "value": "pending"},
                            {"label": "支付失败", "value": "failed"},
                        ]
                    },
//                    {"prop":"channel","value":"","label":"充值渠道","type":"select",
//                        "list":[], "filterable": true},
//                    {"prop":"app_id","value":"","type":"text","label":"商户编号"},
//                    {"prop":"pay_scene","value":"","label":"支付场景","type":"select",
//                        "list":ARRAYS.registrationSourceTwo, "filterable": true},
                    {
                        "prop": "pay_scene", "value": "", "label": "支付场景", "type": "select",
                        "list": [
                            {"label": "全部", "value": ""},
                            {"label": "支付宝", "value": "alipay"},
                            {"label": "微信支付", "value": "wechat"},
                            {"label": "QQ钱包", "value": "qqpay"},
                            {"label": "网银支付", "value": "cyberbank"},
                            {"label": "京东支付", "value": "jdpay"},
                            {"label": "银联支付", "value": "unionpay"},
                            {"label": "百度支付", "value": "baidupay"},
                            {"label": "财付通", "value": "tenpay"},
                            {"label": "点卡支付", "value": "kapay"},
                            {"label": "云闪付", "value": "quickpay"},
                        ]
                        , "filterable": true
                    },
                    {"prop": "name", "value": "", "label": "商户名称", "type": "text", "placeholde": ""},
                    {
                        "type": "dateGroup",
                        "label": "提交时间",
                        "prop": [{"prop": "date_from", "value": "", "label": "开始时间"}, {
                            "prop": "date_to",
                            "value": "",
                            "label": "结束时间"
                        }]
                    },
                    // 优惠搜索
                    {
                        "prop": "give_active", "value": "", "label": "存款优惠", "type": "select",
                        "list": [
                            {"label": "全部", "value": ""},
                            {"label": "有优惠", "value": "1"},
                            {"label": "无优惠", "value": "0"}]
                    },
                    // ID8
                    {
                        "type": "numberGroup",
                        "label": "交易金额",
                        "prop": [{"prop": "money_from", "value": ""}, {"prop": "money_to", "value": ""}]
                    },
                    {"prop": "admin_user", "value": "", "type": "text", "label": "操作者"},
                    {
                        "prop": "levels",
                        "value": [],
                        "label": "会员等级",
                        "sReset": false,
                        "checkAll": true,
                        "allBtnShow": true,
                        "type": "checkGroup",
                        "list": [],
                        "Arr": [],
                        "ifVal": "1",
                        "ifKey": "send_type"
                    },
//                    {"prop":"name","value":"","type":"text","label":"操作者"},
                ],

                type: "search",
                labelWidth: "90px",
                formVisible: {
                    state: false
                },
                //是否编辑数据
                isEdit: {
                    state: false
                },
                baseUrl: "",
                //确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: "",
                    obj: '',
                },
                allData: {
                    "page_amount_sum": 0,
                    "page_coupon_sum": 0,
                    "total_amount_sum": 0,
                    "total_coupon_sum": 0,
                    "total": 0
                },
                formType: "",
                //导出数据
                // 数据导出相关
                outUrl: "",
                onDialogVisible: false,
                sumShow: false,
                // 查询条件
                searchObj: {},
                isShow: sessionStorage.deposit_onlines_export == 'true' ? true : false,
                exportForm:{}
            }

        },
        components: {
            tablegrid: tableGrid,
            quickDate: quickDate,
            formEdit: formEdit,
            confirm: confirm
        },

        methods: {
            init() {
                this.columnsUrl = "static/json/cash/onLineReceipts/columns.json";
                this.baseUrl = URL.api + ROUTES.GET.cash.onlines;
                this.searchObj.date_from = sessionStorage.dateTimeStart;
                this.searchObj.date_to = sessionStorage.dateTimeEnd;
                if (JSON.stringify(this.$route.query) == "{}") {
                    this.tableUrl = URL.api + ROUTES.GET.cash.onlines + "?date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
                }
                let levelUrl = URL.api + ROUTES.GET.user.level.list;
                this.dialogUrl = URL.api + ROUTES.GET.cash.online;
                let _this = this;
                _this.exportForm = {date_from:sessionStorage.dateTimeStart,date_to:sessionStorage.dateTimeEnd,signature:1}
                this.$.autoAjax('get', levelUrl, '', {
                    ok: (res) => {
                        let model = res.data;
                        for (let i in model) {
                            _this.searchConfig[10].Arr.push({
                                "label": "VIP"+model[i].level,
                                "value": model[i].level
                            });
                            _this.searchConfig[10].list.push("VIP"+model[i].level);
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //执行查询
            doQuery(obj) {
                let temp = {};
                for (let k in obj.item) {
                    console.log(k)
                    if (k === 'levels') {
                        let temparr = obj.item[k] || [];
                        let list = this.searchConfig[10].Arr || [];
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
                this.tableUrl = this.baseUrl + this.addSearch(temp);
                this.exportForm = temp
                this.exportForm.signature = 1
            },
            //表格内按钮事件
            doHandle(e) {
                this.formType = "";
                this.updated = false;
                switch (e.fn) {
                    case "doSupplement":
                        this.doSupplement(e.row);
                        break;
                    case "openUserInformation":
                        this.openUserInformation(e.row)
                        break;
                }
            },
            //详情
            doDetail(row) {
                this.editVisible = true;
                this.dialogVisible = true;
                let nowId = row.id;
                this.$.autoAjax('get', this.dialogUrl + '/' + nowId, '', {
                    ok: (res) => {
                        this.dialogText = res.data;
                        switch (row.status) {
                            case "paid":
                                this.dialogText.status = '已支付'
                                break;
                            case "pending":
                                this.dialogText.status = '待支付'
                                break;
                            case "failed":
                                this.dialogText.status = '支付失败';
                                break;
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                this.loading = false;
            },
            //补单
            doSupplement(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定补单'] || '确定补单') + '"' + row.user_name + '"' + (this.LANG['吗？'] || '吗？')
                    this.confirmConfig.fn = "supplement";
                    this.confirmConfig.obj = row;
                }
            },
            doConfirm(obj) {
                this.loading = true;
                let _this = this;
                let id = obj.obj.id;
                switch (obj.fn) {
                    case "supplement":
                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.cash.deposit + `/${obj.obj.trade_no}`, {'uid': obj.obj.user_id}, {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.formType = "supplement";
                                    _this.$message.success(_this.LANG['补单成功！'] || '补单成功！');
                                } else {
                                    _this.$message.error(_this.LANG['补单失败，请稍后重试！'] || '补单失败，请稍后重试！');
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                                _this.loading = false;
                            }
                        })
                        break;
                }
            },
            resetForm() {
                this.tableUrl = this.baseUrl + "?date_from=" + sessionStorage.sysTime + " 00:00:00&date_to=" + sessionStorage.sysTime + ' 23:59:59';
            },
            openUserInformation(row) {
                this.$router.push({path: "/memberManagement", query: {name: row.user_name}});
            },
            //取表数据
            getTableData(obj) {
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
            // 导出数据
            exportData() {
                // 当前查询条件
                let form = this.$children[0].$refs.editForm.model;
                if (form.date_from && form.date_to) {
                    //let url = URL.api + '/export/download/onlines';
                    //                this.tableUrl = this.baseUrl + this.addSearch(temp);
                    this.$.autoAjax('get',URL.api + ROUTES.GET.cash.onlines,this.exportForm, {
                        ok:(res) =>{
                            if(res.state ===0 && res.data){
                                window.location.href = res.data.url
                            }
                        },
                        error: e => {
                            this.$message.error(e.responseText.msg);
                        }
                    })
//                    this.$.autoAjax('get', URL.api + '/dev/download/sign' + '?nonce=' + url, '', {
//                        ok: (res) => {
//                            if (res.data) {
//                                this.outUrl = url + this.addSearch(this.searchObj) + "&nonce=" + res.data.nonce + "&signature=" + res.data.signature + "&time=" + res.data.time + "&uuid=" + res.data.uuid;
//                                this.onDialogVisible = true;
//                            } else if (res.msg) {
//                                this.$message.error(res.msg);
//                            } else {
//                                this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
//                            }
//                        },
//                        p: () => {
//                        },
//                        error: e => {
//                            console.log(e)
//                        }
//                    })
                } else {
                    this.$message.error(LANG['必需选择时间才能导出'] || '必需选择时间才能导出');
                    return;
                }
            }
        },
        filters: {
            getChannel: function (value) {
                let a;
                if (value) {
                    a = JSON.parse(value)
                    return a.pay || '';
                }
            },
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init()
        },
        activated() {
            this.searchConfig[1].value = '';
            this.searchConfig[5].value = '';
            this.searchConfig[6]['prop'][0].value = '';
            this.searchConfig[6]['prop'][1].value = '';
            this.formType = 'update' + (Math.random() * 9 + 1);
            // debugger;
            if (this.$route.query.app_id) {
                this.searchConfig[5].value = this.$route.query.app_id;
                if (this.$route.query.app_id_time) {
                    //  今日累计
                    this.searchConfig[6]['prop'][0].value = this.searchConfig[6]['prop'][1].value = this.$route.query.app_id_time;
                    this.tableUrl = URL.api + ROUTES.GET.cash.onlines + '?app_id=' + this.$route.query.app_id + '&start_time=' + this.$route.query.app_id_time + '&end_time=' + this.$route.query.app_id_time;
                } else {
                    // 全部累计
                    this.tableUrl = URL.api + ROUTES.GET.cash.onlines + '?app_id=' + this.$route.query.app_id;
                }
            }
            if (this.$route.query.user_name) {
                this.searchConfig[1].value = this.$route.query.user_name;
                this.tableUrl = URL.api + ROUTES.GET.cash.onlines + '?user_name=' + this.$route.query.user_name
            }
            if (this.$route.query.day_begin) {
                let temp = {};
                temp = {
                    user_name: this.$route.query.member_name,
                    start_time: this.$route.query.day_begin,
                    end_time: this.$route.query.day_end
                }
                this.searchConfig[1].value = this.$route.query.member_name || '';

                this.tableUrl = URL.api + ROUTES.GET.cash.onlines + this.addSearch(temp);
                setTimeout(() => {
                    this.updateKeys = 'date_from,' + this.$route.query.day_begin + ',date_to,' + this.$route.query.day_end;
                }, 1000)
            }
        },
        deactivated() {
            this.$route.query.app_id = null;
            this.$route.query.app_id_time = null;
            this.$route.query.user_name = null;
        }
    }
</script>
<style scoped>
    #onLineReceipts .page {
        position: relative
    }

    #onLineReceipts .details .el-dialog__body {
        height: 450px;
    }

    #onLineReceipts .xsDetails {
        height: auto;
    }

    #onLineReceipts .dialogList {
        border: 1px solid #8492A6;
        width: 90%;
        margin-left: 5.5%;
        padding: 10px 0;
    }

    #onLineReceipts .borNone {
        border: none;
    }

    #onLineReceipts .dialogList .el-col-12 {
        line-height: 30px;
    }

    #onLineReceipts #tableSingle #tables {
        /*min-width: 1920px;*/
        overflow-x: auto;
        white-space: nowrap;
    }

    #onLineReceipts #tableSingle #tables table {
        /*min-width: 1920px!important;*/
        overflow-x: auto;
        white-space: nowrap;
    }

    #onLineReceipts .sumdiv {
        position: relative;
    }
</style>
