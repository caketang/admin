<template>
    <div id="subAgentRebate" v-loading="loading" class="clearfix">
        <formEdit :formVisible="formVisible"
                  :formConfig="searchConfig"
                  :type="type"
                  :labelWidth="labelWidth"
                  :isEdit="isEdit"
                  :showAdd="false"
                  @do-query="doQuery"
                  @do-resetForm="resetForm"></formEdit>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="true"
                    :pageSet="true"
                    :tableIndex="false"
                    :tabOperation="tabOperation"
                    @do-operation="doOperation"
                    :updated="updated"
                    @do-handle="doHandle">
            </tablegrid>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <el-col :span="24">
            <el-dialog
                    :title="agentTitle"
                    :visible.sync="dialogAgent"
                    size="tiny"
                    :before-close="handleClose">
                <el-col :span="24" class="font12">
                    <span>期数名称：</span><span>{{this.rowData["termName"]}}</span>
                    <span>代理用户名：</span><span>{{ this.rowData["user"]}}</span>
                    <span>下级佣金金额：</span><span>{{ this.rowData["money"]}}</span>
                    <span>总计：</span><span>{{this.rowData["Subtotal"] | formatMoney}}</span>
                    <span>状态：</span><span>{{this.rowData["status"]}}</span>
                </el-col>
                <tablegrid
                        :columnsUrl="agentColumnsUrl"
                        :tableUrl="agentTableUrl"
                        :pageSet="true"
                        :tableIndex="false"
                        :showRefresh="false"
                        :getData="true"
                        :isCreated="true"
                        @get-table-data="getTableData"
                        :updated="updated">
                    <!-- 汇总 -->
                    <tr :span="12" class="sumdiv ml20" slot="other" v-if="">
                        <td colspan="15">
                            <div class="cell">
                                <span class="font14 ">{{LANG['退佣金额小计'] || '退佣金额小计'}} </span>:<span> {{this.allData['Subtotal'] | formatMoney}}</span>
                                <span class="ml10 mr10"> | </span>
                                <span class="font14 ml10">{{LANG['退佣金额总计'] || '退佣金额总计'}} </span>:<span>{{this.rowData["money"]}}</span>
                            </div>
                        </td>
                    </tr>
                </tablegrid>
                <span slot="footer" class="dialog-footer">
    <el-button @click="dialogAgent = false">关 闭</el-button>
                    <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
  </span>
            </el-dialog>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    import confirm from '../../components/confirm.vue';

    export default {
        data() {
            return {
                LANG,
                //显示代理详情的dialog
                dialogAgent: false,
                //代理详情的弹窗标题
                agentTitle: '',
                //表格相关
                columnsUrl: "",
                tableUrl: "",
                //代理佣金详情
                agentColumnsUrl: "",
                agentTableUrl: "",
                allData: {
                    "Subtotal": 0,
                    "total": 0
                },
                rowData: {
                    "termName": "",
                    "user": "",
                    "Subtotal": "",
                    "status": "",
                    "money": "",
                },
                //搜索相关
                searchConfig: [//快捷日期
                    {
                        "prop": "uname", "value": "", "type": "text", "label": "代理帐号"
                    },
                    {
                        "prop": "period_name", "value": "", "label": "期数名称", "type": "select",
                        "list": []
                    },
                    {
                        "prop": "status", "value": "", "label": "状态", "type": "select",
                        "list": [
                            {"label": "全部", "value": ""},
                            {"label": "未发放", "value": "0"},
                            {"label": "已发放", "value": "1"},
                            {"label": "撤销", "value": "2"}
                        ]
                    }
                ],
                type: "search",
                isEdit: {},
                labelWidth: "90px",
                formVisible: {
                    state: false
                },
                baseUrl: "",
                //批量删除按钮
                tabOperation: [{"label": "批量发放", "fn": "doGrants"}, {"label": "批量撤销", "fn": "doBacks"}],
                updated: false,
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                nowId: -1,
                loading: false,
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
            confirm: confirm,
        },
        methods: {
            init() {
                this.columnsUrl = "static/json/agent/subAgentRebate/columns.json";
                //代理佣金详情
                this.agentColumnsUrl = "static/json/agent/subAgentRebate/columns2.json";
                this.agentTableUrl = URL.api + "/commission/chain";
                this.agentBaseUrl = URL.api + "/commission/chain";
                this.tableUrl = URL.api + ROUTES.GET.commission.commis;
                this.baseUrl = URL.api + ROUTES.GET.commission.commis;
                // 获取退佣期数

                this.$.autoAjax('get',URL.api + ROUTES.GET.commission.period, '', {
                    ok: (res) => {
                        let model = res.data
                        for (let i in model) {
                            this.searchConfig[1].list.push({
                                "label": model[i].period_name,
                                "value": model[i].period_name
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
            //获取表格数据
            getTableData(obj) {
                this.allData['Subtotal'] = obj.allData.attributes.subtotal;
                this.allData['total'] = obj.allData.attributes.total;
            },
            //表格按钮点击事件
            doHandle(item) {
                this.updated = false;
                this.nowId = parseInt(item.row.id) || -1;
//               return {'doGrant':this.doGrant(item.row),"openUserSet":this.openUserSet(item.row)}[item.fn]||0;
                switch (item.fn) {
                    case "doGrant":
                        this.doGrant(item.row)
                        break;
                    case "openUserSet": // 用户名跳转
                        this.openUserSet(item.row)
                        break;
                    case "openAgentMoney": // 下级金额详情
                        this.openAgentMoney(item)
                        break;
                    case "doBack": //
                        this.doBack(item.row)
                        break;
                    default:
                        break;
                }
            },
            //查询
            doQuery(obj) {
                this.tableUrl = this.baseUrl + this.addSearch(obj.item)
            },
            //重置
            resetForm() {
                this.tableUrl = URL.api + ROUTES.GET.commission.commis;
                this.updated = true;
            },
            doConfirm(obj) {
                let _this = this;
                _this.updated = false;
                switch (obj.fn) {
                    case "grant":
                        let idArr = [];
                        let uidArr = [];
                        if (obj.obj.length > 0) {
                            obj.obj.forEach(function (item) {
                                if (item.status === '0') {
                                    idArr.push(item.id);
                                    uidArr.push(item.uid)
                                }
                            })
                        } else {
                            idArr.push(parseInt(obj.obj.id))
                            uidArr.push(parseInt(obj.obj.uid))
                        }
                        // return;
                        if (idArr.length > 0) {
                            this.loading = true;
                            this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.commis, {"ids": idArr, "uids": uidArr, "type": "1"}, {
                                ok: (res) => {
                                    if (res.state == 0 && res.data) {
                                        //刷新数据
                                        _this.$message.success(LANG["发放成功"] || '发放成功');
                                        _this.updated = true;
                                    } else {
                                        res.msg?_this.$message.error(res.msg):
                                            _this.$message.error(LANG["发放失败"] || '发放失败');
                                    }
                                    this.loading = false;
                                },
                                p: () => {
                                },
                                error: e => {
                                    console.log(e)
                                }
                            })
                        } else {
                            let str = LANG['请检查发放内容是否未发放'] || '请检查发放内容是否未发放';
                            this.$message.error(str);
                        }
                        break;
                    case"backNote":
                        let UidArr = [], IdArr = [];
                        if (obj.obj.length > 0) {
                            obj.obj.forEach(function (item) {
                                if (item.status === '1') {
                                    IdArr.push(item.id);
                                    UidArr.push(item.uid)
                                }
                            })
                        } else {
                            IdArr.push(parseInt(obj.obj.id))
                            UidArr.push(parseInt(obj.obj.uid))
                        }
                        // return;
                        if (IdArr.length > 0) {
                            this.loading = true;
                            console.log({"ids": IdArr, "uids": UidArr, "type": "2"})
                            this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.commis, {"ids": IdArr, "uids": UidArr, "type": "2"}, {
                                ok: (res) => {
                                    if (res.state == 0 && res.data) {
                                        //刷新数据
                                        _this.$message.success(LANG["撤销成功"] || '撤销成功');
                                        _this.updated = true;
                                    } else {
                                        _this.$message.error(LANG["撤销失败"] || '撤销失败');
                                    }
                                    this.loading = false;
                                },
                                p: () => {
                                },
                                error: e => {
                                    console.log(e)
                                }
                            })
                        } else {
                            let oStr = LANG['请检查撤销内容'] || '请检查撤销内容';
                            this.$message.error(oStr);
                        }
                        break;
                }
            },
            //发放
            doGrant(row) {
                if (parseInt(row.id) || row.rows) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (LANG['确定发放'] || '确定发放') + '"' + row.uname + '"' + (LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "grant";
                    this.confirmConfig.obj = row;
                }
            },
            //撤单
            doBack(row) {
                if (parseInt(row.id) || row.rows) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (LANG['确定撤销'] || '确定撤销') + '"' + row.uname + '"' + (LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "backNote";
                    this.confirmConfig.obj = row;
                }
            },
            doGrants(obj) {
                if (obj) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (LANG['确定批量发放'] || '确定批量发放') + (LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "grant";
                    this.confirmConfig.obj = obj;
                }
            },
            doBacks(obj) {
                console.log('oopopopopuu')
                if (obj) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (LANG['确定批量撤销'] || '确定批量撤销') + (LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "backNote";
                    this.confirmConfig.obj = obj;
                }
            },
            //表格批量数据
            doOperation(obj) {
                switch (obj.fn) {
                    case "doGrants": // 批量下发
                        this.doGrants(obj.rows)
                        break;
                    case "doBacks": //批量撤单
                        this.doBacks(obj.rows)
                        break;
                }
            },
            //用户名跳转
            openUserSet(item) {
                this.$router.push({path: '/agentAccount', query: {name: item.uname}});

            },
            handleClose() {
                this.dialogAgent = false;
            },
            //下级佣金详情
            openAgentMoney(item) {
                this.agentTitle = (LANG['代理账号'] || '代理账号') + ":【" + item.row.uname + "】" + (LANG['的下'] || '的下') +
                    "【" + item.btn.key.split('c')[1] + "】" + (LANG['级退佣详情'] || '级退佣详情');
                this.dialogAgent = true;
                this.rowData["termName"] = item.row.period_name;
                this.rowData["user"] = item.row.uname;
                this.rowData["Subtotal"] = item.row.total;
                this.rowData["money"] = item.btn.value;
                this.rowData["status"] = item.row.status == "1" ? "已发放" : "未发放";

                let query = {};
                query.period = item.row.period;
                query.agent_id = Number(item.row.uid);
                query.level = Number(item.btn.key.split('c')[1]);
                this.agentTableUrl = this.agentBaseUrl + this.addSearch(query);
            }
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init()
        }
    }
</script>
<style>
    /*.search .el-form-item__label {*/
    /*width: 80px*/
    /*}*/

    /*.search .el-form-item {*/
    /*width: 200px;*/
    /*float: left;*/
    /*margin-bottom: 1px*/
    /*}*/

    /*.search .el-form-item.lg {*/
    /*width: 330px;*/
    /*float: left;*/
    /*}*/

    /*.search .el-form .el-col .line {*/
    /*text-align: center*/
    /*}*/

    /*.search .el-form .formbtn {*/
    /*float: left;*/
    /*margin-left: 10px;*/
    /*padding-top: 5px*/
    /*}*/

    /*.search .el-form .outexcel {*/
    /*position: absolute;*/
    /*top: 0;*/
    /*right: 10px*/
    /*}*/
</style>
