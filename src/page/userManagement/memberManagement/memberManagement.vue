<template>
    <div id="memberManagement" class="page w100">
        <div v-if="!isDetail">
            <div>
                <formEdit
                    :formTitel="formTitel"
                    :formVisible="formVisible"
                    :formConfig="searchConfig"
                    :type="type"
                    :labelWidth="labelWidth"
                    :isEdit="isEdit"
                    :updateKeys="updateKeys"
                    :initDate="true"
                    @do-query="doQuery"
                    @reset-form="resetForm"
                    :formType="formType"
                    :showAdd="false">
                </formEdit>
            </div>
            <el-col>
                <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableIndex="false"
                    :tableUrl="tableUrl"
                    :tabOperation="tabOperation"
                    :updated="updated"
                    :isCreated="isCreated"
                    @do-operation="doOperation"
                    :hoverData="hoverData"
                    @do-handle="doHandle">
                </tablegrid>
            </el-col>
        </div>
        <!--资料-->
        <el-col v-if="isDetail">
            <memberManagementDetial
                @return-page="returnPage"
                :nowId="nowId"
                :username="username">
            </memberManagementDetial>
        </el-col>
        <!--打标签-->
        <el-col v-if="!isDetail" class="makeTag">
            <el-dialog title="打标签" v-model="labelVisible" size="tiny">
                <el-form ref="labelform" :model="labelform" label-width="80px">
                    <el-form-item :label="LANG['用户名'] || '用户名'">
                        <span>{{labelform.name}}</span>
                    </el-form-item>
                    <el-form-item :label="LANG['标签'] || '标签'" prop="lid">
                        <el-select v-model="labelform.lid" :placeholder="LANG['请选择标签'] || '请选择标签'">
                            <el-option v-for="(item,index) in labelList" :key="index" :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                        <el-button @click="labelVisible = false">取 消</el-button>
                        <el-button type="primary" @click="saveLabels">确 定</el-button>
                    </span>
            </el-dialog>
            <el-dialog title="会员限额" v-model="limitVisible" size="tiny">
                <el-form ref="limitform" :model="limitform" label-width="80px">
                    <el-form-item :label="LANG['会员账号'] || '会员账号'">
                        <span>{{limitform.name}}</span>
                    </el-form-item>
                    <div style="border-bottom: 1px solid #ccc; line-hieght: 30px;">彩票</div>
                    <!--<div>注意：默认不选择就不会限额</div>-->
                    <!-- <el-form-item :label="LANG['彩票'] || '彩票'">  -->
                    <el-radio-group v-model="limitform.id">
                        <div v-for="(item, index) in limitList" :key="index" style="margin: 5px 0; height: 20px;">
                            <div class="fl">
                                <el-radio :label="item.id"><span></span></el-radio>
                            </div>
                            <div @click="gotoLotteryOdds(item.id, item.name)"
                                 style="float: left;width: 400px; height: 20px; font-size: 14px; line-height: 20px; margin-left: 15px; cursor: pointer;">
                                {{item.name}}
                            </div>
                        </div>
                    </el-radio-group>
                    <!-- </el-form-item> -->
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="limitVisible = false">取 消</el-button>
                    <el-button type="primary" @click="saveLimit">确 定</el-button>
                    <el-button type="primary" v-if="cancelLimitVisible" @click="cancelLimit">解除绑定</el-button>
                </span>
            </el-dialog>
        </el-col>
        <!-- 限额 -->
        <!-- <el-col>

        </el-col> -->
        <!--系统提示-->
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="saveConfirm"></confirm>
        </el-col>
    </div>
</template>

<script>
    import tableGrid from '../../../components/tableGrid.vue'
    import memberManagementDetial from './memberManagementDetial.vue'
    import formEdit from '../../../components/formEdit.vue'
    import confirm from '../../../components/confirm.vue'

    export default {
        data() {
            return {
                LANG,
                //是否显示详情
                isDetail: false,
                isCreated: false,
                //数据接口地址
                tableUrl: "",
                //列配置接口地址
                columnsUrl: "",
                //批量操作按钮
                tabOperation: [{
                    "label": "批量踢线",
                    "fn": "doOffline"
                },
                    {
                        "label": "批量停用",
                        "fn": "doStop"
                    },
                    {
                        "label": "发送消息",
                        "fn": "doSendMsg"
                    },
                    {
                        "label": "调整余额",
                        "fn": "doAllAdjustedBalance"
                    }
                ],
                //搜索条件
                type: "search",
                formTitel: "",
                labelWidth: "90px",
                isEdit: {},
                formVisible: {
                    state: false
                },
                searchConfig: [
                    {
                        "prop": "similar",
                        "value": "",
                        "type": "checkbox",
                        "label": "查询配置",
                        "valLabel": "模糊查询用户名"
                    },
                    {
                        "prop": "name",
                        "value": "",
                        "type": "text",
                        "label": "用户名"
                    },
                    {
                        "prop": "ip",
                        "value": "",
                        "label": "最后登录IP",
                        "type": "text"
                    },
                    {
                        "prop": "online",
                        "value": '',
                        "label": "在线状态",
                        "type": "select",
                        "list": ARRAYS.onlineState1,
                        "isDefault": true
                    },
                    {
                        "prop": "state",
                        "value": '',
                        "label": "帐号状态",
                        "type": "select",
                        "list": [
                            {"label": "全部", "value": ""},
                            {"label": "启用", "value": '1'},
                            {"label": "停用", "value": '0'},
                            {"label": "封号", "value": '4'}
                        ],
                        "isDefault": true
                    },
                    {
                        "prop": "agent",
                        "value": "",
                        "type": "text",
                        "label": "上级代理"
                    },
                    {
                        "prop": "agent_id",
                        "value": "",
                        "type": "checkbox",
                        "label": "",
                        "valLabel": "直属用户"
                    },
                    {
                        "type": "dateGroup",
                        "label": "注册时间",
                        "prop": [{
                            "prop": "register_from",
                            "value": "",
                            "label": "开始时间"
                        }, {
                            "prop": "register_to",
                            "value": "",
                            "label": "结束时间"
                        }]
                    },
                    {
                        "prop": "channel",
                        "value": "",
                        "label": "注册来源",
                        "type": "select",
                        "list": ARRAYS.PALYCHANNEL
                    },
                    {
                        "prop": "tags",
                        "value": "",
                        "label": "标签",
                        "type": "select",
                        "list": []
                    },
                    {
                        "prop": "type",
                        "value": "",
                        "label": "扩展搜索",
                        "type": "selectString",
                        "list": [{
                            'label': '真实姓名',
                            'value': 'pname'
                        }, {
                            'label': '手机',
                            'value': 'moblie'
                        }, {
                            'label': '银行卡',
                            'value': 'card'
                        }, {
                            'label': '邮箱',
                            'value': 'email'
                        }, {
                            'label': 'QQ',
                            'value': 'qq'
                        }, {
                            'label': '微信',
                            'value': 'weixin'
                        }],
                        'propInput': "keyVal",
                        'Inputplaceholder': "请输入关键字"
                    }
                ],
                nowId: -1,
                username: "",
                //打标签
                //标签列表
                labelList: [],
                labelVisible: false,
                labelform: {
                    name: "",
                    lid: ""
                },
                //系统提示
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: "",
                    obj: {}
                },
                baseUrl: "",
                routeQuery: {},
                updated: false,
                formType: "",
                // 会员限额
                limitVisible: false,
                limitform: {
                    name: "",
                    id: ""
                },
                limitList: [],
                cancelLimitVisible: true,
                // 子钱包显示数据
                hoverData: [],
                // 存储查询条件
                query: {},
                updateKeys: ''
            }
        },
        props: {
            userid: Number
        },
        components: {
            tablegrid: tableGrid,
            memberManagementDetial: memberManagementDetial,
            formEdit: formEdit,
            confirm: confirm
        },
        methods: {
            init() {
                this.isCreated = true;
                this.routeQuery = this.$route.query;
                this.baseUrl = URL.api + ROUTES.GET.user.list;
                if (this.routeQuery.userId > 0 && this.routeQuery.isDetail) {
                    this.doDetial({
                        "id": this.routeQuery.userId
                    });
                }
                // 检测this.$route.query各个属性是否有值是否有值，正常路由进来
                if (JSON.stringify(this.$route.query) == "{}") {
                    //this.query = {"online": '1', "state": '1'};
                    this.tableUrl = URL.api + ROUTES.GET.user.list;
                }
                this.columnsUrl = "/static/json/accoutManage/memberManagement/columns.json"
                this.getLables();
                this.getLimitModel();
                if (this.userid > 0) {
                    this.nowId = this.userid;
                    this.isCreated = false;
                    this.isDetail = true;
                }
            },
            //执行查询
            doQuery(obj) {
                // 处理金额
                let query = this.query = {};
                for (let i in obj.item) {
                    // 这里需要判断的原因是因为ele-ui的组件传回来的值时false和true，而后台只接受int类型的参数，所以在这里转换
                    if (i === "similar") {
                        query[i] = obj.item[i] ? 1 : 0;
                    } else if (i === 'agent_id') {
                        // 是否勾选直属用户
                        query['agent_id'] = obj.item[i] ? 0 : null;
                    } else if (obj.item[i] || obj.item[i] == 0) {
                        query[i] = obj.item[i];
                    }
                }
                // 搜索框去掉余额的搜索，这里余额的金额转换注释掉
                // query.balance_from = query.balance_from == "" ? "" : query.balance_from * 100;
                // query.balance_to = query.balance_to == "" ? "" : query.balance_to * 100;
                this.tableUrl = this.baseUrl + this.addSearch(query);
            },
            //导出EXCEL
            outputExcel() {

            },
            // 获取标签
            getLables() {
                // 获取会员标签列表

                this.$.autoAjax('get', URL.api + ROUTES.GET.user.labels, '', {
                    ok: (res) => {
                        this.labelList = [];
                        this.searchConfig[9].list = [];

                        let model = res.data
                        this.searchConfig[9].list.push({
                            "label": "全部",
                            "value": ""
                        });
                        for (let i in model) {
                            this.labelList.push({
                                "label": model[i].title,
                                "value": model[i].id
                            });
                            this.searchConfig[9].list.push({
                                "label": model[i].title,
                                "value": model[i].title
                            })
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            // 获取彩票模版（限额操作用）
            getLimitModel() {

                this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.template, '', {
                    ok: (res) => {
                        if (res.state === 0) {
                            this.limitList = [];
                            let model = res.data;
                            for (let i of model) {
                                // 派出默认的彩票模版
                                if (i.t_id != "1") {
                                    this.limitList.push({
                                        "id": parseInt(i.t_id),
                                        "name": i.t_name
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
            //表格内按钮事件
            doHandle(e) {
                switch (e.fn) {
                    // 打标签
                    case "doAddLabel":
                        this.doAddLabel(e.row)
                        break
                    // 会员详情
                    case "doDetial":
                        this.doDetial(e.row)
                        break
                    // 调整余额
                    case "doAdjustedBalance":
                        this.doAdjustedBalance(e.row)
                        break
                    // 跳转代理
                    case "openAgentInformation":
                        this.openAgentInformation(e.row)
                        break
                    // 跳转注单查询
                    case "doNoteManagement":
                        this.doNoteManagement(e.row)
                        break
                    // 跳转现金流水
                    case "doFundDetails":
                        this.doFundDetails(e.row)
                        break
                    // 启用和停用
                    case "doEnabled":
                        this.doEnabled(e.row)
                        break
                    case "doDisabled":
                        this.doDisabled(e.row)
                        break
                    // 封号和解封
                    case "doSeal":
                        this.doSeal(e.row)
                        break
                    case "doUnlock":
                        this.doUnlock(e.row)
                        break
                    // 取消标签
                    case "doCancelLabel":
                        this.doCancelLabel(e.row)
                        break
                    // 限额
                    case "doLimitLines":
                        this.doLimitLines(e.row)
                        break
                    // 限额
                    case "showSubPurse":
                        this.showSubPurse(e)
                        break
                }
            },
            // 显示子钱包
            showSubPurse(i) {
                let row = i.row;
                this.hoverData = [];
                let hoverData = this.hoverData;
                this.$.autoAjax('get', URL.api + '/cash/funds/secondary?wallet_id=' + parseInt(row.wallet_id), '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            let list = res.data || [];
                            for (let k in list) {
                                hoverData.push({
                                    "label": list[k].gameType,
                                    "value": FORMATMONEY(list[k].balance)
                                });
                            }
                        } else {
                            this.$message.error(LANG["会员打标签失败！"] || "会员打标签失败！");
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //打标签
            doAddLabel(row) {
                this.nowId = row.id;
                this.labelVisible = true;
                this.labelform.name = row["username"];
                if (row.tags) {
                    for (let k = 0; k < this.labelList.length; k++) {
                        if (this.labelList[k].label === row["tags"]) {
                            this.labelform.lid = this.labelList[k].value.toString();
                        }
                    }
                } else {
                    this.labelform.lid = '';
                }
            },
            // 取消标签
            doCancelLabel(row) {
                this.nowId = parseInt(row.id);
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定取消标签'] || '确定取消标签') + '"' + row.tags + '"' + (this.LANG['吗'] || '吗') + "?";
                    this.confirmConfig.fn = "cancelLabel";
                }
            },
            //保存标签
            saveLabels() {
                this.updated = false;

                this.$.autoAjax('put', URL.api + ROUTES.PUT.user.label.bind + '?id=' + parseInt(this.nowId, 10), {"tag": parseInt(this.labelform.lid, 10)}, {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            this.$message.success(LANG["恭喜您，会员打标签成功！"] || "恭喜您，会员打标签成功！");
                            this.labelVisible = false;
                            this.updated = true;
                        } else if (res.state === 4001) {
                            this.$message.error(LANG["请至少选择一个标签！"] || "请至少选择一个标签！");
                        } else if (res.state == 405) {
                            this.$message.error(LANG["打标签失败，权限不足"] || "打标签失败，权限不足！");
                        } else {
                            this.$message.error(LANG["会员打标签失败！"] || "会员打标签失败！");
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //资料
            doDetial(row) {
                this.nowId = parseInt(row.id);
                this.username = row.username;
                this.isCreated = false;
                this.isDetail = true;
            },
            //返回列表
            returnPage() {
                this.updateKeys = '';
                let updateKeys = '';
                for (let i in this.query) {
                    if (i === "similar") {
                        updateKeys = updateKeys + i + ',' + (this.query[i] ? true : false) + ',';
                    } else if (i === 'agent_id') {
                        updateKeys = updateKeys + i + ',' + (this.query[i] === 0 ? true : false) + ',';
                    } else if (this.query[i]) {
                        updateKeys = updateKeys + i + ',' + this.query[i] + ',';
                    }
                }
                setTimeout(() => {
                    this.updateKeys = updateKeys;
                }, 500)
                this.isDetail = false;
                this.isCreated = true;
                this.tableUrl = this.baseUrl + this.addSearch(this.query);
            },
            //批量操作按钮
            doOperation(list) {
                this.selectedrows = [];
                this.selectedrows = list.rows;
                this.operationType = list.fn;
                switch (list.fn) {
                    case "doOffline":
                        this.doConfrim(list.fn)
                        break
                    case "doStop":
                        this.doConfrim(list.fn)
                        break
                    case "doSendMsg":
                        this.doSendMsg()
                        break
                    case "doAllAdjustedBalance":
                        this.doAllAdjustedBalance()
                        break
                }
            },
            //批量踢线
            doOffline() {
                let _this = this;
                let rows = this.selectedrows;
                let ids_arr = [];
                for (let i in rows) {
                    ids_arr.push(rows[i].id);
                }
                let ids = ids_arr.join(',');

                this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.info.$, {"ids": ids, "operation": 3}, {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            _this.$message.success(LANG["恭喜您，所选会员踢线成功！"] || "恭喜您，所选会员踢线成功！");
                        } else if (res.state == 405) {
                            _this.$message.error(LANG["所选会员踢线失败,权限不足！"] || "所选会员踢线失败,权限不足！");
                        } else {
                            _this.$message.error(LANG["所选会员踢线失败,请稍后重试！"] || "所选会员踢线失败,请稍后重试！");
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //批量停用
            doStop() {
                let _this = this;
                let rows = this.selectedrows;
                let ids_arr = [];
                for (let i in rows) {
                    ids_arr.push(rows[i].id);
                }
                let ids = ids_arr.join(',');

                this.$.autoAjax('', URL.api + ROUTES.GET, {"ids": ids, "operation": 2}, {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            _this.$message.success(LANG["恭喜您，所选会员踢线成功！"] || "恭喜您，所选会员踢线成功！");
                        } else if (res.state == 405) {
                            _this.$message.error(LANG["所选会员踢线失败,权限不足！"] || "所选会员踢线失败,权限不足！");
                        } else {
                            _this.$message.error(LANG["所选会员踢线失败,请稍后重试！"] || "所选会员踢线失败,请稍后重试！");
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //批量调整余额
            doAllAdjustedBalance() {
                let rows = this.selectedrows;
                this.$router.push({
                    path: "/manual",
                    query: {
                        userId: this.selectedrows,
                        username: rows["user_name"],
                        type: "会员"
                    }
                });
            },
            //提示确认事件
            doConfrim(fn) {
                let msg = "";
                switch (fn) {
                    case "doOffline":
                        msg = LANG["是否确认踢线选中的会员"] || "是否确认踢线选中的会员";
                        break
                    case "doStop":
                        msg = this.confrimContent = LANG["是否确认批量停用选中的会员"] || "是否确认批量停用选中的会员";
                        break
                }
                this.confirmConfig = {
                    state: true,
                    msg: msg,
                    fn: fn
                }
            },
            saveConfirm(obj) {
                let fn = obj.fn;
                switch (fn) {
                    case "doOffline":
                        this.doOffline();
                        break
                    case "doStop":
                        this.doStop();
                        break
                    case "cancelLabel":
                        this.updated = false;

                        this.$.autoAjax('put', URL.api + ROUTES.PUT.user.label.bind + '?id=' + parseInt(this.nowId, 10), {"tag": 0}, {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    this.$message.success(LANG["恭喜您，会员标签取消成功！"] || "恭喜您，会员标签取消成功！");
                                    this.labelVisible = false;
                                    this.updated = true;
                                } else if (res.state == 405) {
                                    this.$message.error(LANG["会员标签取消失败,权限不足！"] || "会员标签取消失败,权限不足！");
                                } else {
                                    this.$message.error(LANG["会员标签取消失败！"] || "会员标签取消失败！");
                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                        break;
                }
            },
            //doSendMsg 发送消息
            doSendMsg() {
                let rows = this.selectedrows;
                this.$router.push({
                    path: "/notice",
                    query: {
                        userId: this.selectedrows,
                        username: rows["user_name"],
                        type: "会员"
                    }
                });
            },
            //重置查询
            resetForm(obj) {
                this.updateKeys = '';
                let query = {};
                if (!this.$route.query.agent && !this.$route.query.name && !this.$route.query.level) {
                    this.query = {"online": '', "state": ''};
                    //注释的内容为在线状态 在线和帐号状态 启用
                    //this.tableUrl = URL.api + ROUTES.GET.user.list + this.addSearch({"online": '1', "state": '1'});
                    this.tableUrl = URL.api + ROUTES.GET.user.list
//                    query.online = '1';
//                    query.state = '1';
//                    setTimeout(() => {
//                        this.updateKeys = 'online,1,state,1,register_from,,register_to,,';
//                    }, 500)
                } else {
                    setTimeout(() => {
                        this.updateKeys = 'redirect,,';
                    }, 500);
                }
                this.query = query;
            },
            //调整余额
            doAdjustedBalance(row) {
                this.$router.push({path: "/manual", query: {username: row["username"], role: "1"}});
            },
            //跳转代理页面
            openAgentInformation(row) {
                this.$router.push({path: "/agentAccount", query: {agent_name: row.agent}});
            },
            // 跳转注单查询
            doNoteManagement(row) {
                this.$router.push({path: "/noteManagement", query: {user_name: row.username}});
            },
            // 跳转现金流水
            doFundDetails(row) {
                this.$router.push({path: "/fundDetails", query: {username: row.username}});
            },
            // 会员账号的启用和停用
            doEnabled(row) {
                this.updated = false;

                this.$.autoAjax('put', URL.api + ROUTES.PUT.user.setting + parseInt(row.id), {
                    "ids": row.id.toString(),
                    "state": 1
                }, {
                    ok: (res) => {
                        if (res.state != undefined && res.state == 0) {
                            this.$message.success(this.LANG['会员帐号启用成功'] || '会员帐号启用成功');
                            this.updated = true;
                        } else if (res.state == 4003 || res.state == 405) {
                            this.$message.error(this.LANG['会员帐号启用失败，权限不足'] || '会员帐号启用失败，权限不足');
                        } else {
                            this.$message.error(this.LANG['会员帐号启用失败，请稍后重试'] || '会员帐号启用失败，请稍后重试');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            doDisabled(row) {
                this.updated = false;

                this.$.autoAjax('put', URL.api + ROUTES.PUT.user.setting + parseInt(row.id), {
                    "ids": row.id.toString(),
                    'state': 0
                }, {
                    ok: (res) => {
                        if (res.state != undefined && res.state == 0) {
                            this.$message.success(this.LANG['会员帐号停用成功'] || '会员帐号停用成功');
                            this.updated = true;
                        } else if (res.state == 4003 || res.state == 405) {
                            this.$message.error(this.LANG['会员帐号停用失败，权限不足'] || '会员帐号停用失败，权限不足');
                        } else {
                            this.$message.error(this.LANG['会员帐号停用失败，请稍后重试'] || '会员帐号停用失败，请稍后重试');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            // 封号
            doSeal(row) {
                this.updated = false;

                this.$.autoAjax('put', URL.api + ROUTES.PUT.user.setting + parseInt(row.id), {
                    "ids": row.id.toString(),
                    'state': 4
                }, {
                    ok: (res) => {
                        if (res.state != undefined && res.state == 0) {
                            this.$message.success(this.LANG['会员帐号封号成功'] || '会员帐号封号成功');
                            this.updated = true;
                        } else if (res.state == 4003 || res.state == 405) {
                            this.$message.error(this.LANG['会员帐号封号失败，权限不足'] || '会员帐号封号失败，权限不足');
                        } else {
                            this.$message.error(this.LANG['会员帐号封号失败，请稍后重试'] || '会员帐号封号失败，请稍后重试');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            // 解封
            doUnlock(row) {
                this.updated = false;

                this.$.autoAjax('put', URL.api + ROUTES.PUT.user.setting + parseInt(row.id), {
                    "ids": row.id.toString(),
                    'state': 1
                }, {
                    ok: (res) => {
                        if (res.state != undefined && res.state == 0) {
                            this.$message.success(this.LANG['会员帐号解封成功'] || '会员帐号解封成功');
                            this.updated = true;
                        } else if (res.state == 4003 || res.state == 405) {
                            this.$message.error(this.LANG['会员帐号解封失败，权限不足'] || '会员帐号解封失败，权限不足');
                        } else {
                            this.$message.error(this.LANG['会员帐号解封失败，请稍后重试'] || '会员帐号解封失败，请稍后重试');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            // 限额
            doLimitLines(row) {
                this.nowId = row.id;
                this.limitform["name"] = row.username;
                this.limitform["id"] = "";
                // 判断用户是否已经绑定模版
                this.cancelLimitVisible = row.tid ? true : false;
                if (row.tid) {
                    this.cancelLimitVisible = true;
                    this.limitform["id"] = parseInt(row.tid);
                } else {
                    this.cancelLimitVisible = false;
                    this.limitform["id"] = "";
                }
                this.limitVisible = true;
            },
            saveLimit() {
                if (this.limitform["id"] === "") {
                    this.$message.error(LANG["请至少选中一个模版"] || "请至少选中一个模版");
                    return;
                }
                this.updated = false;

                this.$.autoAjax('put', URL.api + '/lottery/template.users', {
                    "tid": parseInt(this.limitform.id),
                    "user_id": this.nowId
                }, {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.$message.success(LANG["恭喜您，会员限额成功！"] || "恭喜您，会员限额成功！");
                            this.updated = true;
                        } else if (res.state == 405) {
                            this.$message.error(LANG["会员限额失败,权限不足！"] || "会员限额失败,权限不足！");
                        } else {
                            this.$message.error(LANG["会员限额失败！"] || "会员限额失败！");
                        }
                        this.limitVisible = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            cancelLimit() {
                let arr = [];
                arr.push(this.nowId);
                this.updated = false;
                this.$.autoAjax('post', URL.api + '/lottery/template.users', {"user_id": arr}, {
                    ok: (res) => {
                        if (res.state === 0) {
                            this.$message.success(LANG["恭喜您，会员取消限额成功！"] || "恭喜您，会员取消限额成功！");
                            this.limitform["id"] = "";
                            this.cancelLimitVisible = false;
                            this.updated = true;
                        } else if (res.state == 405) {
                            this.$message.error(LANG["会员取消限额失败,权限不足！"] || "会员取消限额失败,权限不足！");
                        } else {
                            this.$message.error(LANG["会员取消限额失败！"] || "会员取消限额失败！");
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            // 新窗口打开游戏模版
            gotoLotteryOdds(id, name) {
                window.open(window.location.origin + '/lotteryOdds?id=' + id + '&name=' + name);
            },
            // 代理页面跳转修改相关值
            setAllForm(form) {
                for (let k in form) {
                    if (k === 'agent' && this.$route.query.agent) {
                        form[k] = this.$route.query.agent || '';
                    } else if (k === 'name' && this.$route.query.name) {
                        form[k] = this.$route.query.name || '';
                    } else if (k === 'level' && this.$route.query.level) {
                        form[k] = this.$route.query.level || '';
                    } else {
                        form[k] = '';
                    }
                }
            }
        },
        mounted() {
            $(() => {
                let btn = document.getElementsByClassName('popover_diy_btn')[0];
            })
        },
        created() {
            this.init();
        },
        activated() {
            this.updated = false;
            this.updateKeys = '';
            // 确保任何页面返回会员管理页面显示的是列表页
            if (this.isDetail) this.returnPage();
            this.isCreated = false;
            this.getLables();
            this.getLimitModel();
            this.searchConfig[5]['value'] = '';
            this.searchConfig[1]['value'] = '';
            this.searchConfig[6]['value'] = '';
            this.searchConfig[3]['value'] = '';
            this.searchConfig[4]['value'] = '';
            this.formType = 'update' + (Math.random() * 9 + 1);
            if (this.$route.query.agent) {
                this.searchConfig[5]['value'] = this.$route.query.agent;
                this.tableUrl = URL.api + ROUTES.GET.user.list + "?agent=" + this.$route.query.agent;
            } else {
                this.init();
            }
            ;
            if (this.$route.query.name) {
                this.searchConfig[1]['value'] = this.$route.query.name;
                this.tableUrl = URL.api + ROUTES.GET.user.list + "?name=" + this.$route.query.name;
            } else {
                this.init();
            }
            ;
            if (this.$route.query.level) {
                this.searchConfig[6]['value'] = this.$route.query.level.toString();
                this.tableUrl = URL.api + ROUTES.GET.user.list + "?level=" + this.$route.query.level;
            } else {
                this.init();
            }
            ;
            setTimeout(() => {
                this.updated = true;
            }, 500)
        },
        deactivated() {
            this.$route.query.agent = null;
            this.$route.query.name = null;
            this.$route.query.level = null;
        }
    }
</script>

<style>

</style>
