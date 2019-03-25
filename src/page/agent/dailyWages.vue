<template>
    <div id="dailyWagesAndReportform">
        <el-tabs v-model="activeName" @tab-click="changMenu(activeName)">
            <el-tab-pane label="日工资列表" name="first"></el-tab-pane>
            <el-tab-pane label="日工资报表" name="second"></el-tab-pane>
        </el-tabs>
        <div id="dailyWages" v-if="activeName == 'first'">
            <div class="search mb20">
                <formEdit :formVisible="formVisible"
                          :formConfig="searchConfig"
                          :type="type"
                          :labelWidth="labelWidth"
                          @do-query="doQuery"
                          :isEdit="isEdit"
                          @reset-form="resetForm"
                          @add-new="addNew"
                          :addText="LANG['新 建'] || '新 建'"
                          :formType="formType"></formEdit>
                <!--新增-->
                <el-dialog
                    :title="title"
                    :visible.sync="dialogVisible"
                    size="tiny"
                    :before-close="handleClose">
                    <el-form ref="addForm" :model="addForm" label-width="80px" :rules="addFormRules">
                        <el-form-item label="标 题" prop="title" placeholder="请输入标题" class="mt20">
                            <el-input v-model="addForm.title"></el-input>
                        </el-form-item>
                        <el-form-item label="一级代理" prop="name" class="mt20">
                            <el-autocomplete
                                v-model="addForm.name"
                                :fetch-suggestions="querySearchAsync"
                                placeholder="请输入一级代理用户名"
                                @select="handleSelect"
                                class="w100"
                            ></el-autocomplete>
                        </el-form-item>
                        <el-form-item label="团队亏损" prop="team_loss" class="mt20">
                            <div>
                                <el-input placeholder="请输入团队亏损金额" v-model="addForm.team_loss">
                                    <template slot="prepend"> ¥ </template>
                                    <el-checkbox v-model="condition.team_loss" slot="append"></el-checkbox>
                                </el-input>
                            </div>
                        </el-form-item>
                        <el-form-item label="团队充值" prop="team_deposit" class="mt20">
                            <el-input placeholder="请输入团队充值金额" v-model="addForm.team_deposit" type="number">
                                <template slot="prepend"> ¥ </template>
                                <el-checkbox v-model="condition.team_deposit" value="b" slot="append"></el-checkbox>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="有效投注" prop="team_valid_bet" class="mt20">
                            <el-input placeholder="请输入有效投注金额" v-model="addForm.team_valid_bet" type="number">
                                <template slot="prepend"> ¥ </template>
                                <el-checkbox v-model="condition.team_valid_bet" value="c" slot="append"></el-checkbox>
                            </el-input>
                        </el-form-item>
                        <el-form-item label="有效会员" prop="team_valid_user" class="mt20">
                            <el-input v-model="addForm.team_valid_user" placeholder="请输入有效会员人数"
                                      type="number"></el-input>
                        </el-form-item>
                        <el-form-item label="日工资" prop="proportion" class="mt20">
                            <el-input :placeholder="'请输入日工资百分比,且不能超过'+ maxD+'%'" v-model="addForm.proportion"
                                      type="number">
                                <template slot="append"> % </template>
                            </el-input>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addSave('addForm')">确 定</el-button>
              </span>
                </el-dialog>
            </div>
            <el-col>
                <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :updated="updated"
                    :isCreated="true"
                    :pageSet="true"
                    @do-handle="doHandle"></tablegrid>
            </el-col>
            <el-dialog
                title="提示"
                :visible.sync="visible.state"
                size="tiny"
                :before-close="handleClose">
                <span>{{visible.text}}</span>
                <span slot="footer" class="dialog-footer">
                <el-button @click="visible.state = false">取 消</el-button>
                <el-button type="primary" @click="doConfirm">确 定</el-button>
                </span>
            </el-dialog>
        </div>
        <!--日工资报表-->
        <div id="dailyWageStatement" v-if="activeName == 'second'">
            <el-row>
                <el-col :span="24">
                    <formEdit :formVisible="formVisibleStatement"
                              :formConfig="searchConfigStatement"
                              :type="type"
                              :labelWidth="labelWidth"
                              @do-query="doQueryStatement"
                              :isEdit="isEdit"
                              @reset-form="resetForm"
                              :formType="formType"></formEdit>
                </el-col>
                <el-col :span="24">
                    <tablegrid
                        :columnsUrl="columnsUrl_1"
                        :tableUrl="tableUrl_1"
                        :updated="updated"
                        :isCreated="true"
                        :pageSet="true"
                        @do-handle="doHandle"></tablegrid>
                </el-col>
            </el-row>

        </div>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'

    export default {
        data() {
            var checkProportion = (rule, value, callback) => {
                setTimeout(() => {
                    if (value > Number(sessionStorage.site_wage_max)) {//sessionStorage.site_wage_max
                        callback(new Error('日工资比例不能大于' + sessionStorage.site_wage_max + '%'));
                    } else {
                        callback();
                    }
                }, 500);
            };
            return {
                LANG,
                //数据接口地址
                tableUrl: "",
                baseUrl: '',
                //报表数据接口地址
                tableUrl_1: "",
                baseUrl_1: "",
                //列配置接口地址
                columnsUrl: "",
                columnsUrl_1: "",
                updated: false,
                //菜单tab
                activeName:'first',
                //搜索相关
                formType: "",
                searchConfig: [
                    {"prop": "title", "value": "", "type": "text", "label": "标 题"},
                    {"prop": "name", "value": "", "type": "text", "label": "代理名称"},
                    {
                        "prop": "status", "value": "", "label": "状 态", "type": "select",
                        "list": [
                            {"label": "启 用", "value": 'enable'},
                            {"label": "禁 用", "value": 'disable'},
                            {"label": "删 除", "value": 'delete'}
                        ]
                    }
                ],
                //报表
                searchConfigStatement:[
                    {"type":"dateTimeGroup","label":"投注时间","prop":[{"prop":"start_time","value":"","label":"开始时间"}, {"prop":"end_time","value":"","label":"结束时间"}]},
                    {"prop": "issue", "value": "", "label": "期 数", "type": "number"},
                    {"prop": "name", "value": "", "type": "text", "label": "代理帐号"},
                    {
                        "prop": "treaty_status", "value": "", "label": "状 态", "type": "select",
                        "list": [
                            {"label": "已签约", "value": 'enable'},
                            {"label": "未签约", "value": 'disable'},
                        ]
                    }
                ],
                type: "search",
                labelWidth: "90px",
                formVisible: {
                    state: false
                },
                //报表
                formVisibleStatement: {
                    state: false
                },
                isEdit: {
                    state: false
                },
                //新增
                dialogVisible: false,
                addForm: {
                    title: "", //#标题
                    name: "", //#直属代理账户
                    team_loss: "",//#团队亏损
                    team_deposit: "",//#团队有效存款
                    team_valid_bet: "",//#团队有效打码量
                    team_valid_user: "",//#团队有效会员人数
                    proportion: "",//#比例
                },
                condition: {
                    team_loss: true,
                    team_deposit: true,
                    team_valid_bet: true,
                },
                updated: false,
                addFormRules: {
                    title: [
                        {required: true, message: '请输入标题名称', trigger: 'blur'},
                        {min: 2, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '请输入一级代理用户名', trigger: 'blur'},
                        {min: 2, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
                    ],
                    team_loss: [
                        {required: true, message: '请输入团队亏损金额', trigger: 'blur'},
                    ],
                    team_deposit: [
                        {required: true, message: '请输入团队有效存款', trigger: 'blur'},
                    ],
                    team_valid_bet: [
                        {required: true, message: '请输入团队有效投注', trigger: 'blur'},
                    ],
                    team_valid_user: [
                        {required: true, message: '请输入团队有效会员人数', trigger: 'blur'},
                    ],
                    proportion: [
                        {required: true, message: '请输入日工资百分比', trigger: 'blur'},
                        {min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur'},
                        {validator: checkProportion, trigger: 'blur'}
                    ],
                },
                title: '',
                maxD: sessionStorage.site_wage_max,
                visible: {
                    state: false,
                    text: '',
                    data: []
                },
                restaurants: [],
            }
        },
        methods: {
            changMenu(data){
                if(data =="second"){
                    this.tableUrl_1 = URL.api + ROUTES.GET.user.agent.report + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
                }
            },
            //表格按钮点击事件
            doHandle(item) {
                switch (item.fn) {
                    case "doRescission":
                        this.doRescission(item.row)
                        break
                }
            },
            //确认提示操作
            doConfirm() {
                this.visible.state = false;
                let data = this.visible.data, query = {id: data.id, treaty_status: 'release'}, _this = this;
                this.$.autoAjax('post', URL.api + ROUTES.POST.user.release, query, {
                    ok: v => {
                        if (v.state === 0 && v.data) {
                            _this.$message.success(v.msg);
                            _this.updated = true;
                        }
                    },
                    error: e => {
                        _this.$message.error(e.responseJSON.msg);
                    }
                })
            },
            doRescission(data) {
                this.visible.data = data;
                this.visible.text = '确定和一级代理：' + data.agent_name + '解约吗？'
                this.visible.state = true;
            },
            //查询
            doQuery(obj) {
                this.tableUrl = this.baseUrl + this.addSearch(obj.item);
            },
            //报表查询
            doQueryStatement(obj) {
                console.log(obj)
                this.tableUrl_1 = this.baseUrl_1 + this.addSearch(obj.item);
            },
            resetForm() {
                this.tableUrl = this.baseUrl;
                this.tableUrl_1 = this.baseUrl_1;
            },
            handleClose() {
                this.dialogVisible = false;
                this.visible.state = false;
            },
            //动态搜索代理
            querySearchAsync(queryString, callback) {
                let list = [];
                if (queryString) {
                    this.$.autoAjax('get', URL.api + ROUTES.GET.user.agent.like, {key: queryString}, {
                        ok: v => {
                            if (v.state === 0 && v.data) {
                                let mode = v.data
                                mode.forEach((item) => {
                                    item.value = item.id
                                })
                                list = mode
                                clearTimeout(this.timeout);
                                this.timeout = setTimeout(() => {
                                    callback(list);
                                }, 2000 * Math.random());

                            } else {
                                clearTimeout(this.timeout);
                                this.timeout = setTimeout(() => {
                                    callback(list);
                                }, 1000 * Math.random());
                            }
                        }
                    })
                } else {
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(() => {
                        callback(list);
                    }, 10 * Math.random());
                }
            },
            handleSelect(item) {
                console.log(item)
            },
            //新增保存数据
            addSave(formName) {
                this.updated = false;
                //判断条件是否选中
                let _this = this, data = {};
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        data = this.addForm
                        data.team_loss = _this.condition.team_loss ? (this.addForm.team_loss) * 100 : '';
                        data.team_deposit = _this.condition.team_deposit ? (this.addForm.team_deposit) * 100 : '';
                        data.team_valid_bet = _this.condition.team_valid_bet ? (this.addForm.team_valid_bet) * 100 : '';
                        this.$.autoAjax('post', URL.api + ROUTES.POST.user.treaty, data, {
                            ok: v => {
                                if (v.state === 0 && v.data) {
                                    _this.$message.success(v.msg);
                                    _this.updated = true;
                                }
                            },
                            error: e => {
                                _this.$message.error(e.responseJSON.msg);
                            }
                        })
                        this.dialogVisible = false;
                    }
                })
            },
            //新增操作
            addNew() {
                this.dialogVisible = true;
                this.title = '新 增';
                this.addForm = {
                    title: "", //#标题
                    name: "", //#直属代理账户
                    team_loss: "",//#团队亏损
                    team_deposit: "",//#团队有效存款
                    team_valid_bet: "",//#团队有效打码量
                    team_valid_user: "",//#团队有效会员人数
                    proportion: "",//#比例
                }
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
        },
        computed: {},
        watch: {},
        mounted() {
        },
        created() {
            this.columnsUrl = "/static/json/agent/dailyWages/columns.json"
            this.tableUrl = URL.api + ROUTES.GET.user.agent.list;
            this.baseUrl = URL.api + ROUTES.GET.user.agent.list;
            //日工资报表
            this.columnsUrl_1 = "/static/json/agent/dailyWages/columns_1.json"
            this.tableUrl_1 = URL.api + ROUTES.GET.user.agent.report;
            this.baseUrl_1 = URL.api + ROUTES.GET.user.agent.report;
        }
    }
</script>
<style scopend>

</style>
