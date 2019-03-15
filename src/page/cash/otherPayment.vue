<template>
    <div id="otherPayment" v-loading="loading" class="clearfix">
        <el-dialog
            :title="AddFormTitle"
            :visible.sync="AddFormState"
            size="tiny"
            :before-close="handleClose">
            <el-form ref="AddFormData" :model="AddFormData" label-width="120px" :rules="AddFormDataRules">
                <el-form-item label="第三方支付平台" prop="pay_id">
                    <el-select v-model="AddFormData.pay_id" placeholder="请选择支付平台" class="w80" clearable
                               :disabled= "AddFormConfig.disabled"
                               @change="changePay">
                        <el-option
                            v-for="item in AddFormConfig.paylist"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            <span style="float: left">{{ item.label }}</span>
                            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.code }}</span>
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="商户名称" v-if="AddFormData.pay_id" prop="name">
                    <el-input v-model="AddFormData.name" class="w80"></el-input>
                </el-form-item>
                <el-form-item :label="'(必填)'+item.name" v-if="AddFormData.pay_id" class="configs"
                              :class="{'warn':AddFormData.configs[item.param]&&AddFormData.configs[item.param].length ==0}"
                              v-for="item,d in AddFormConfig.payConfigsList"
                              :key="d">
                    <el-input v-model="AddFormData.configs[item.param]" class="w80"
                              @blur="ruleConfig(AddFormData.configs[item.param])"></el-input>
                </el-form-item>
                <el-form-item label="支付场景" v-if="AddFormData.pay_id" prop="pay_scene">
                    <el-checkbox-group v-model="AddFormData.pay_scene" class="w80">
                        <el-checkbox :label="s.value" name="type" v-for="s,x in AddFormConfig.scenelist"
                                     :key="x">{{s.label}}
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="终端设备" v-if="AddFormData.pay_id" prop="terminal">
                    <el-checkbox-group v-model="AddFormData.terminal">
                        <el-checkbox :label="cm.value" name="type" v-for="cm,z in AddFormConfig.terminalList"
                                     :key="z">{{cm.label}}
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="每日最高额度" v-if="AddFormData.pay_id" prop="day_deact">
                    <el-input placeholder="请输入金额" v-model="AddFormData.day_deact" type="number" class="w80"
                              max="99999999"></el-input>
                </el-form-item>
                <el-form-item label="会员层级" v-if="AddFormData.pay_id" prop="levels">
                    <el-checkbox-group v-model="AddFormData.levels">
                        <el-checkbox :label="items.value" name="type" v-for="items,k in AddFormConfig.levelslist"
                                     :key="k">{{items.label}}
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="排 序" v-if="AddFormData.pay_id" prop="sort">
                    <el-input v-model="AddFormData.sort" class="w80" type="number"></el-input>
                </el-form-item>
                <el-form-item label="状 态" v-if="AddFormData.pay_id" prop="status">
                    <el-select v-model="AddFormData.status" placeholder="请选择支付平台状态" class="w80">
                        <el-option :label="t.label" :value="t.value" v-for="t,i in AddFormConfig.statusList"
                                   :key="i"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="AddFormState = false">取 消</el-button>
    <el-button type="primary" @click="AddPay('AddFormData')">确 定</el-button>
  </span>
        </el-dialog>
        <div class="search" v-if="!depositShow">
            <el-col :span="24" class="pb">
                <formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="searchConfig" :type="type"
                          :labelWidth="labelWidth" :isEdit="isEdit" @add-new="doAdd" :showAdd=true
                          :updateKeys="updateKeys"
                          :addText="LANG['新增支付'] || '新增支付'" @do-query="doQuery" @reset-form="resetForm"></formEdit>
            </el-col>
        </div>
        <el-col v-if="!depositShow">
            <tablegrid
                :columnsUrl="columnsUrl"
                :tableUrl="tableUrl"
                :getData="true"
                :isCreated="!depositShow"
                :updated="updated"
                :tableCheck="true"
                :tabOperation="tabOperation"
                @do-operation="doOperation"
                @do-handle="doHandle"></tablegrid>
        </el-col>
        <el-col>
        </el-col>
        <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        <el-col v-if="depositShow">
            <DepositStatus :depositId="nowId" @return-page="returnPage" :paymentName="paymentName"></DepositStatus>
        </el-col>
    </div>
</template>
<script>
    import tablegrid from '../../components/tableGrid.vue';
    import formEdit from '../../components/formEdit.vue';
    import confirm from '../../components/confirm.vue';
    import DepositStatus from './depositStatus.vue'

    export default {
        data() {
            return {
                LANG,
                loading: false,
                //删除确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: "",
                    obj: null,
                },
                //表格数据
                tableUrl: "",
                useScene: "",
                baseUrl: '',
                //列配置
                columnsUrl: "",
                //搜索框
                type: "search",
                formTitel: "",
                labelWidth: "90px",
                isEdit: {},
                //--------
                AddFormState: false,
                AddFormTitle: '',
                AddFormData: {
                    name: '',
                    pay_id: '',//第三方支付平台
                    pay_scene: [],//支付场景
                    terminal: [],//终端设备
                    day_deact: '',//帐户使用限制设置
                    sort: '',//排序
                    levels: [],//开放层级
                    status: '',//是否启用
                    configs: {}
                },
                AddFormConfig: {
                    disabled: false,
                    paylist: [],
                    scenelist: [],
                    scenelistall: ARRAYS.paymentScenariosOne,
                    terminalList: [],
                    terminalListall: ARRAYS.PLATFORMStWO,
                    statusList: ARRAYS.state2,
                    payConfigsList: [],
                    levelslist: []
                },
                payList: [],
                isError: false,
                //新增配置

                formVisible: {
                    state: false
                },
                searchConfig: [
                    {"prop": "pay_id", "value": "", "type": "select", "label": "支付平台", "list": [], "filterable": true},
                    {
                        "prop": "status", "value": "", "label": "状态", "type": "select",
                        "list": [{"label": "全部", "value": ""}, {"label": "启用", "value": "enabled"}, {
                            "label": "停用",
                            "value": "disabled"
                        }]
                    },
                    {"prop": "name", "value": "", "label": "商户名称", "type": "text", "placeholder": "请输入商户名称"},
                    {"prop": "parter", "value": "", "label": "商户编号", "type": "text", "placeholder": "请输入商户编号"},
                    {
                        "prop": "pay_scene", "value": "", "label": "支付场景", "type": "select",
                        "list": ARRAYS.paymentScenarios
                    },
                    {
                        "prop": "levels", "value": "", "label": "会员等级", "type": "select",
                        "list": []
                    },
                    {
                        "prop": "terminal", "value": "", "label": "终端设备", "type": "select",
                        "list": [{"label": "全部", "value": ""}, {"label": "PC", "value": "PC"}, {
                            "label": "H5",
                            "value": "H5"
                        }, {"label": "APP", "value": "APP"},]
                    },
                ],
//                formType: "default",
//                formLabelWidth: "150px",
//                formConfig: [
//                    {"type": 'title', "label": "第三方支付平台账户"},
//                    {
//                        "prop": "pay_id", "value": "", "label": "第三方支付平台", "type": "select", "showpasswordname": false,
//                        "list": [], "rules": [{"require": true}]
//                    },
//                    {"prop": "name", "value": "", "label": "商户名称", "type": "text", "rules": [{"require": true}]},
//                    {
//                        "prop": "parter",
//                        "value": "",
//                        "label": "商户编号",
//                        "type": "text",
//                        "ifVal": "101",
//                        "ifKey": "pay_id",
//                        "rules": [{"require": true}]
//                    },
//                    //全银 ID4-5
//                    {
//                        "prop": "payKey",
//                        "value": "",
//                        "label": "支付密钥",
//                        "type": "password",
//                        "ifVal": "106", "ifKey": "pay_id",
//                        "rules": [{"require": true, "isDefault": true}]
//                    },
//                    {
//                        "prop": "paySecret",
//                        "value": "",
//                        "label": "应用密钥",
//                        "type": "password",
//                        "ifVal": "106", "ifKey": "pay_id",
//                        "rules": [{"require": true, "isDefault": true}]
//                    },
//                    //龙城 6
//                    {
//                        "prop": "customerid",
//                        "value": "",
//                        "label": "支付ID",
//                        "type": "password",
//                        "ifVal": "107", "ifKey": "pay_id",
//                        "rules": [{"require": true, "isDefault": true}]
//                    },
//                    //捷达支付 7-10
//                    {
//                        "prop": "alipay_merId",
//                        "value": "",
//                        "label": "支付ID",
//                        "type": "password",
//                        "ifVal": "108", "ifKey": "pay_id",
//                        "rules": [{"require": true, "isDefault": true}]
//                    },
//                    {
//                        "prop": "alipay_merKey",
//                        "value": "",
//                        "label": "支付密钥",
//                        "type": "password",
//                        "ifVal": "108", "ifKey": "pay_id",
//                        "rules": [{"require": true, "isDefault": true}]
//                    },
//                    {
//                        "prop": "wechat_merId",
//                        "value": "",
//                        "label": "微支付ID",
//                        "type": "password",
//                        "ifVal": "108", "ifKey": "pay_id",
//                        "rules": [{"require": true, "isDefault": true}]
//                    },
//                    {
//                        "prop": "wechat_merKey",
//                        "value": "",
//                        "label": "微支付密钥",
//                        "type": "password",
//                        "ifVal": "108", "ifKey": "pay_id",
//                        "rules": [{"require": true, "isDefault": true}]
//                    },
//                    // 支付场景
//                    {
//                        "prop": "pay_scene",
//                        "value": [],
//                        "label": "支付场景",
//                        "sReset": false,
//                        "checkAll": false,
//                        "allBtnShow": true,
//                        "type": "checkGroup",
//                        "list": ARRAYS.paymentScenariosList,
//                        "Arr": ARRAYS.paymentScenariosOne,
//                        "rules": [{"require": true}]
//                    },
//
//                    {
//                        "prop": "terminal",
//                        "value": [],
//                        "label": "终端设备",
//                        "sReset": false,
//                        "checkAll": false,
//                        "allBtnShow": true,
//                        "type": "checkGroup",
//                        "list": ARRAYS.PLATFORMS1List,
//                        "Arr": ARRAYS.PLATFORMStWO,
//                        "rules": [{"require": true}]
//                    },
//                    {"type": 'title', "label": "帐户使用限制设置"},
//                    {
//                        "prop": "day_deact",
//                        "value": "",
//                        "label": "日停用金额",
//                        "type": "number",
//                        "rules": [{"varMax": 99999999, "varMin": 0}, {"require": true}]
//                    },
//                    {
//                        "prop": "sort",
//                        "value": "0",
//                        "label": "排序",
//                        "type": "number",
//                        "isDefault": true,
//                        "rules": [{"integer": true}]
//                    },
//                    {
//                        "prop": "levels",
//                        "value": [],
//                        "label": "开放层级",
//                        "sReset": false,
//                        "checkAll": false,
//                        "allBtnShow": true,
//                        "type": "checkGroup",
//                        "list": [],
//                        "Arr": [],
//                        "rules": [{"require": true}]
//                    },
//                    {
//                        "prop": "status", "value": "disabled", "label": "是否启用", "type": "select",
//                        "list": ARRAYS.state2, "isDefault": true, "rules": [{"require": true}]
//                    }
//                ],
                //现数据ID
                nowId: -1,
                updated: false,
                depositShow: false,
                //批量操作按钮
                tabOperation: [
                    {"label": "批量启用", "fn": "doEnable"},
                    {"label": "批量停用", "fn": "doDisable"}],
                // 支付场景
                pay_scene_list: {},
                // 存储查询条件
                query: {},
                updateKeys: '',
                AddFormDataRules: {
                    pay_id: [
                        {required: true, message: '请选择新增支付平台', trigger: 'change'},
                    ],
                    pay_scene: [
                        {type: 'array', required: true, message: '请选择第三方支付场景', trigger: 'change'}
                    ],
                    day_deact: [
                        {required: true, message: '请输入每日充值最大金额', trigger: 'blur'}
                    ],
                    terminal: [
                        {type: 'array', required: true, message: '请选择使用终端', trigger: 'change'}
                    ],
                    sort: [
                        {required: true, message: '请设置排列顺序', trigger: 'blur'}
                    ],
                    levels: [
                        {type: 'array', required: true, message: '请选择可使用的会员层级', trigger: 'change'}
                    ],
                    status: [
                        {required: true, message: '请选择支付平台状态', trigger: 'change'},
                    ],
                    name: [
                        {required: true, message: '请填写商户名称', trigger: 'blur'}]
                },
                formType:'',
            }
        },
        components: {
            tablegrid: tablegrid,
            formEdit: formEdit,
            confirm: confirm,
            DepositStatus: DepositStatus
        },
        methods: {
            init() {
                this.searchConfig[0].list = [];
                let list2 = this.AddFormConfig.paylist;
                let channel = this.searchConfig[0].list;
                this.baseUrl = URL.api + ROUTES.GET.cash.thirds.$;
                this.tableUrl = URL.api + ROUTES.GET.cash.thirds.$;
                this.columnsUrl = "/static/json/cash/otherPayment/columns.json";
                //取支付渠道
                this.$.autoAjax('get', URL.api + ROUTES.GET.cash.third.providers, '', {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            let model = res.data;
                            _this.payList = model;
                            for (let i in model) {
                                list2.push({
                                    "label": model[i].name,
                                    "code": model[i].code,
                                    "value": model[i].id.toString()
                                })
                                channel.push({
                                    "label": model[i].name,
                                    "code": model[i].code,
                                    "value": model[i].id.toString()
                                })
                            }
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
//                // 获取层级
                let levelUrl = URL.api + ROUTES.GET.user.level.list;
                let _this = this
                _this.searchConfig[5].list = [{"label": LANG['全部'] || '全部', "value": ''}];
                this.$.autoAjax('get', levelUrl, '', {
                    ok: (res) => {
                        let model = res.data || [];
                        for (let k in model) {
                            _this.AddFormConfig.levelslist.push({
                                "label": model[k].name,
                                "value": model[k].id.toString()
                            });
                            _this.searchConfig[5].list.push({
                                "label": model[k].name,
                                "value": model[k].id
                            })
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // 支付场景
                this.$.autoAjax('get', URL.api + '/cash/3th.providers', '', {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            let model = res.data || [], pay_scene_list = this.pay_scene_list;
                            if (model.length && model.length > 0) {
                                for (let k = 0; k < model.length; k++) {
                                    pay_scene_list[model[k].id] = model[k];
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
            //新增配置
            handleClose() {
                this.AddFormState = false;
                this.AddFormData.pay_id = '';
            },
            changePay(data) {
                let _this = this, scenelist = [], terminalList = [], configList = [];
                _this.payList.forEach((item) => {
                    if (item.id == data) {
                        configList = item.configs;//避免重复叠加
                        item.pay_scene.split(',').forEach((a) => {
                            _this.AddFormConfig.scenelistall.forEach((b) => {
                                if (a === b.value) {
                                    scenelist.push(b)
                                }
                            })
                        })
                        item.terminal.split(',').forEach((a) => {
                            _this.AddFormConfig.terminalListall.forEach((b) => {
                                if (a === b.value) {
                                    terminalList.push(b)
                                }
                            })
                        })
                        _this.AddFormData.configs = {};
                        configList.forEach((c) => {
                            _this.$set(_this.AddFormData.configs, c.param, '')
                        })
                        _this.AddFormConfig.scenelist = scenelist
                        _this.AddFormConfig.terminalList = terminalList
                        _this.AddFormConfig.payConfigsList = configList
                    }
                })
            },
            AddPay(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.getForm(this.AddFormData)
                    } else {
                        this.$message.error('请检查第三方支付配置数据是否填写完整');
                        return false;
                    }
                });
//
            },
            ruleConfig(r) {
                if (r.length == 0) {
                    this.$message.error('第三方支付配置必须填写');
                }
            },
            //表格数据按钮
            doHandle(item) {
                this.formType = "";
                this.updated = false;
                this.nowId = parseInt(item.row.id);
                switch (item.fn) {
                    case "doEdit": // 编辑
                        this.doEdit(item.row)
                        break
                    case "doDisable":
                        this.doDisable(item.row)
                        break
                    case "doEnable":
                        this.doEnable(item.row)
                        break
                    case "dayUsedMoney":
                        this.dayUsedMoney(item.row)
                        break
                    case "usedMoney":
                        this.usedMoney(item.row)
                        break
                    case "doDelete":
                        this.doDelete(item.row)
                        break
                    case "doDepositStatus":
                        this.doDepositStatus(item.row)
                        break
                }
            },
            // 存款状况
            doDepositStatus(row) {
                if (parseInt(row.id) >= 0) {
                    this.paymentName = row.name;
                    this.depositShow = true;
                }
            },
            // 返回列表
            returnPage() {
                let updateKeys;
                for (let i in this.query) {
                    updateKeys = i + ',' + this.query[i] + ',';
                }
                setTimeout(() => {
                    this.updateKeys = updateKeys;
                }, 500)
                this.tableUrl = this.baseUrl + this.addSearch(this.query);
                this.depositShow = false;
            },
            // 日累计金额页面跳转
            dayUsedMoney(row) {
                if (FORMATMONEY(row['money_day_used']) > 0) {
                    this.$router.push({
                        path: '/onLineReceipts',
                        query: {app_id: parseInt(row['app_id']), app_id_time: FORMATDATEPICKER(new Date())}
                    });
                } else {
                    this.$message.error(LANG['暂无交易记录'] || '暂无交易记录');
                }
            },
            // 累计金额页面跳转
            usedMoney(row) {
                if (FORMATMONEY(row['money_used']) > 0) {
                    this.$router.push({path: '/onLineReceipts', query: {app_id: parseInt(row['app_id'])}});
                } else {
                    this.$message.error(LANG['暂无交易记录'] || '暂无交易记录');
                }
            },
            // 删除第三方支付
            doDelete(row) {
                if (parseInt(row.id) >= 0) {
                    if (parseInt(row.id)) {
                        this.confirmConfig.state = true;
                        this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
                        this.confirmConfig.fn = "delete";
                        this.confirmConfig.obj = row;
                    }
                }
            },
//            // 新增支付渠道
            doAdd(formName) {
                this.AddFormData = {
                    name: '',
                    pay_id: '',//第三方支付平台
                    pay_scene: [],//支付场景
                    terminal: [],//终端设备
                    day_deact: '',//帐户使用限制设置
                    sort: '',//排序
                    levels: [],//开放层级
                    status: '',//是否启用
                    configs: {}
                };
                this.AddFormState = true
                this.AddFormConfig.disabled = false;
                this.formType = 'add'
                this.AddFormTitle = this.LANG["新增第三方支付"] || "新增第三方支付";
            },
            // 批量操作
            doOperation(obj) {
                switch (obj.fn) {
                    case 'doEnable':
                        this.doEnable(obj.rows)
                        break
                    case "doDisable":
                        this.doDisable(obj.rows)
                        break;
                }
            },
            //保存数据
            getForm(obj) {
                obj.day_deact = obj.day_deact*100;
                this.updated = false;
                let _this = this;
                let url = URL.api + ROUTES.POST.cash.third.third;
                if (this.formType == "add") {
                    this.$.autoAjax('put', url, obj, {
                        ok: (res) => {
                            res.state == 0 && res.data
                                ? _this.$message.success(LANG['恭喜您，新增第三方支付成功！'] || '恭喜您，新增第三方支付成功！')
                                : _this.$message.error(res.msg + "," + (LANG['新增第三方支付失败，请稍候重试！'] || '新增第三方支付失败，请稍候重试！'));
                            _this.updated = true;
                            _this.AddFormState = false;
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                } else {
                    this.$.autoAjax('put', url + '?id=' + parseInt(this.nowId), obj, {
                        ok: (res) => {
                            res.state == 0 && res.data
                                ? _this.$message.success(LANG['恭喜您，第三方支付修改成功！'] || '恭喜您，第三方支付修改成功！')
                                : _this.$message.error(res.msg + "," + (LANG['修改第三方支付失败，请稍候重试！'] || '修改第三方支付失败，请稍候重试！'))
                            _this.updated = true;
                            _this.AddFormState = false;
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                }

            },
            doDisable(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "disable";
                    this.confirmConfig.obj = row;
                } else if (row.length && row.length > 0) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = this.LANG['确定批量停用吗？'] || '确定批量停用吗';
                    this.confirmConfig.fn = "disables";
                    this.confirmConfig.obj = row;
                }
            },
            doEnable(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "enable";
                    this.confirmConfig.obj = row;
                } else if (row.length && row.length > 0) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = this.LANG['确定批量启用吗？'] || '确定批量启用吗';
                    this.confirmConfig.fn = "enables";
                    this.confirmConfig.obj = row;
                }
            },
            doConfirm(row) {
                this.loading = true;
                let _this = this;
                this.updated = false;
                let nowId = row.obj.id;
                switch (row.fn) {
                    case "enable":
                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.cash.third + '?id=' + nowId, [{
                            "id": parseInt(nowId),
                            "status": "enabled",
                            "name": row.obj.name
                        }], {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.$message.success(_this.LANG['第三方支付启用成功'] || '第三方支付启用成功');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(_this.LANG['第三方支付启用失败，请稍后重试'] || '第三方支付启用失败，请稍后重试');
                                }
                                _this.loading = false
                            },
                            p: () => {
                            },
                            error: e => {
                                _this.loading = false
                                _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                            }
                        })
                        break;
                    case "disable":
                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.cash.third + '?id=' + nowId, [{
                            "id": parseInt(nowId),
                            "status": "disabled",
                            "name": row.obj.name
                        }], {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.$message.success(_this.LANG['第三方支付停用成功'] || '第三方支付停用成功');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(_this.LANG['第三方支付停用失败，请稍后重试'] || '第三方支付停用失败，请稍后重试');
                                }
                                _this.loading = false
                            },
                            p: () => {
                            },
                            error: e => {
                                _this.loading = false
                                _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                            }
                        })
                        break;
                    case "disables":
                        let templist = row.obj || [], query = [];
                        if (templist.length > 0) {
                            for (let i = 0; i < templist.length; i++) {
                                query.push({
                                    id: templist[i].id,
                                    name: templist[i].name,
                                    status: 'disabled'
                                });
                            }
                        }
                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.cash.third, query, {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.$message.success(_this.LANG['第三方支付批量停用成功'] || '第三方支付批量停用成功');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(_this.LANG['第三方支付批量停用失败，请稍后重试'] || '第三方支付批量停用失败，请稍后重试');
                                }
                                _this.loading = false
                            },
                            p: () => {
                            },
                            error: e => {
                                _this.loading = false
                                _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                            }
                        })
                        break;
                    case "enables":
                        let templists = row.obj || [], querys = [];
                        if (templists.length > 0) {
                            for (let i = 0; i < templists.length; i++) {
                                querys.push({
                                    id: templists[i].id,
                                    name: templists[i].name,
                                    status: 'enabled'
                                });
                            }
                        }
                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.cash.third, querys, {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.$message.success(_this.LANG['第三方支付批量启用成功'] || '第三方支付批量启用成功');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(_this.LANG['第三方支付批量启用失败，请稍后重试'] || '第三方支付批量启用失败，请稍后重试');
                                }
                                _this.loading = false
                            },
                            p: () => {
                            },
                            error: e => {
                                _this.loading = false
                                _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                            }
                        })
                        break;
                    case "delete":
                        let nowid = parseInt(row.id);
                        this.$.autoAjax('delete', URL.api + ROUTES.DELETE.cash.threeTh.del + '?id=' + parseInt(nowId) + "&name=" + row.obj.name, '', {
                            ok: (res) => {
                                if (res.state === 0 && res.data) {
                                    _this.$message.success(LANG['恭喜您，第三方支付删除成功！'] || '恭喜您，第三方支付删除成功！');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(LANG['第三方支付删除失败，请稍后重试！'] || '第三方支付删除失败，请稍后重试！');
                                }
                                _this.loading = false
                            },
                            p: () => {
                            },
                            error: e => {
                                _this.loading = false
                                _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                            }
                        })
                        break;
                }
            },
            //编辑
            doEdit(row) {
                let _this = this,scenelist = [], terminalList = [], configList = [];
                _this.formType = "edit"
                _this.AddFormConfig.disabled = true;
                _this.AddFormTitle = this.LANG["编辑第三方支付"] || "编辑第三方支付";
                _this.loading = true;
                _this.nowId = row.id;
                _this.$.autoAjax('get', URL.api + ROUTES.GET.cash.third.$ + "?id=" + parseInt(this.nowId), '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            _this.AddFormState = true
                            let mode = res.data;
                            _this.payList.forEach((item) => {
                                if (item.id == mode.pay_id) {
                                    configList = item.configs;//避免重复叠加
                                    item.pay_scene.split(',').forEach((a) => {
                                        _this.AddFormConfig.scenelistall.forEach((b) => {
                                            if (a === b.value) {
                                                scenelist.push(b)
                                            }
                                        })
                                    })
                                    item.terminal.split(',').forEach((a) => {
                                        _this.AddFormConfig.terminalListall.forEach((b) => {
                                            if (a === b.value) {
                                                terminalList.push(b)
                                            }
                                        })
                                    })
                                    _this.AddFormData.configs = {};
                                    setTimeout(()=>{
                                        configList.forEach((c) => {
                                            console.log(mode.configs[c.param])
                                            _this.$set(_this.AddFormData.configs,c.param, mode.configs[c.param])
                                        })
                                    },500)
                                    _this.AddFormConfig.scenelist = scenelist
                                    _this.AddFormConfig.terminalList = terminalList
                                    _this.AddFormConfig.payConfigsList = configList
                                }
                            })
                            setTimeout(()=>{
                                _this.AddFormData.pay_id = mode.pay_id
                                _this.AddFormData.pay_scene = mode.pay_scene
                                _this.AddFormData.terminal = mode.terminal
                                _this.AddFormData.day_deact = FORMATMONEY(mode.day_deact).toString()
                                _this.AddFormData.name = mode.name
                                _this.AddFormData.sort = mode.sort
                                _this.AddFormData.status = mode.status == '1' ? 'enabled' : 'disabled'
                                _this.AddFormData.levels = mode.levels.split(',')
                            },400)
                        } else {
                            _this.$message.error(_this.LANG['第三方支付信息请求失败，请稍后重试'] || '第三方支付信息请求失败，请稍后重试');
                        }
                        _this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //查询
            doQuery(obj) {
                for (let k in obj.item) {
                    if (obj.item[k]) {
                        this.query[k] = obj.item[k];
                    }
                }
                this.tableUrl = this.baseUrl + this.addSearch(obj.item);
            },
            resetForm() {
                this.tableUrl = this.baseUrl;
            }
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init()
        },
        activated() {
            this.updated = false;
            setTimeout(() => {
                this.updated = true;
            }, 500)
            if (this.depositShow) {
                this.returnPage();
            }
        }
    }
</script>
<style lang="less">
    #otherPayment {
        .addManage {
            float: right;
            margin-right: 10px;
            margin-top: 5px;
        }
        .configs .el-form-item__label {
            color: #d3903b;
        }
        .warn {
            input {
                border-color: #d3903b;
            }
        }
    }

    /*.addManage{float:right;margin-right: 10px;margin-top:5px;}*/
</style>
