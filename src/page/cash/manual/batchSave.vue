<template>
    <div id="batchSave" class="w100">
        <el-row :gutter="40">
            <el-col :span="4">
                <div class="mainLeft">
                    <el-button :plain="true" type="success" @click="doManualAddMoney" class="tabBtn">
                        {{LANG['手动增加余额'] || '手动增加余额'}}
                    </el-button>
                    <el-button :plain="true" type="success" @click="doManualReduceMoney" class="tabBtn">
                        {{LANG['手动减少余额'] || '手动减少余额'}}
                    </el-button>
                    <el-button :plain="true" type="success" @click="doBackwater" class="tabBtn">手动返水</el-button>
                    <el-button :plain="true" type="success" @click="doReduceFavorable" class="tabBtn">
                        {{LANG['手动发放优惠'] || '手动发放优惠'}}
                    </el-button>
                </div>
            </el-col>
            <el-col :span="10" v-loading="loading" element-loading-text="拼命加载中">
                <div class="mainRight">
                    <!--手动增加余额-->
                    <el-form :model="manualAddMoney" :rules="manualAddMoneyRules" ref="manualAddMoney"
                             label-width="90px" class="mt10"
                             v-show="formTitle == 0">
                        <h3 v-if="formTitle == 0">{{LANG['手动增加余额'] || '手动增加余额'}}</h3>
                        <el-form-item :label="LANG['状态'] || '状态'" prop="state">
                            <el-radio v-model="manualAddMoney.status" label="1">{{LANG['按用户名'] || '按用户名'}}</el-radio>
                            <el-radio v-model="manualAddMoney.status" label="2">{{LANG['按会员层级'] || '按会员层级'}}</el-radio>
                        </el-form-item>
                        <!-- <el-form-item :label="LANG['文件上传'] || '文件上传'" v-if="manualAddMoney.status == 1">
                            <el-upload
                                    class="upload-demo"
                                    :action="manualAddMoney.upUrl"
                                    :accept="manualAddMoney.upFileType"
                                    :on-change="handleChange"
                                    :file-list="fileList3">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div slot="tip" class="el-upload__tip">只能上传txt,xls,xlsx文件</div>
                            </el-upload>
                        </el-form-item> -->
                        <el-form-item :label="LANG['用户名'] || '用户名'" prop="name" v-if="manualAddMoney.status == 1">
                            <el-input v-model="manualAddMoney.name"
                                      size="small"
                                      :placeholder="LANG['提示:多个用户名之间请用英文逗号隔开'] || '提示:多个用户名之间请用英文逗号隔开'"></el-input>
                            <!--<span class="help_gray">多个用户名之间请用英文逗号隔开</span>-->
                        </el-form-item>
                        <el-form-item label="VIP等级" v-if="manualAddMoney.status == 2">
                            <el-checkbox-group v-model="manualAddMoney.levels">
                                <!-- 会员等级 -->
                                <el-checkbox v-for="(item,index) in levellist" :label="item.value" :name="type"
                                             :key="index"> 等级 {{item.value}}
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item :label="LANG['金额'] || '金额'" prop="amount">
                            <el-input v-model.number="manualAddMoney.amount" size="small"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['打码量'] || '打码量'" prop="statement">
                            <el-input v-model.number="manualAddMoney.statement" size="small"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['备注'] || '备注'" prop="memo">
                            <el-input v-model="manualAddMoney.memo" type="textarea" :rows="5" size="small"></el-input>
                        </el-form-item>
                        <div class="formbtn tCent">
                            <el-button type="primary" :plain="true" size="small" @click="doCash">
                                {{LANG['保存'] || '保存'}}
                            </el-button>
                            <el-button type="primary" :plain="true" size="small" @click="doRest">
                                {{LANG['重置'] || '重置'}}
                            </el-button>
                        </div>
                    </el-form>
                    <!--手动减少余额-->
                    <el-form :model="manualReduceMoney" :rules="manualReduceMoneyRules" ref="manualAddMoney"
                             label-width="90px" class="mt10"
                             v-show="formTitle == 1">
                        <h3 v-if="formTitle == 1">{{LANG['手动减少余额'] || '手动减少余额'}}</h3>
                        <el-form-item :label="LANG['状态'] || '状态'" prop="state">
                            <el-radio v-model="manualReduceMoney.status" label="1">{{LANG['按用户'] || '按用户'}}</el-radio>
                            <el-radio v-model="manualReduceMoney.status" label="2">{{LANG['按会员层级'] || '按会员层级'}}
                            </el-radio>
                        </el-form-item>
                        <el-form-item :label="LANG['用户名'] || '用户名'" prop="name" v-if="manualReduceMoney.status == 1">
                            <el-input v-model="manualReduceMoney.name"
                                      size="small"
                                      :placeholder="LANG['提示:多个用户名之间请用英文逗号隔开'] || '提示:多个用户名之间请用英文逗号隔开'"></el-input>

                        </el-form-item>
                        <el-form-item label="VIP等级" v-if="manualReduceMoney.status == 2">
                            <el-checkbox-group v-model="manualReduceMoney.levels">
                                <!-- 会员等级 -->
                                <el-checkbox v-for="(item,index) in levellist" :label="item.label" :key="index"
                                             name="type">{{item.value}}
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item :label="LANG['金额'] || '金额'" prop="amount">
                            <el-input v-model.number="manualReduceMoney.amount" size="small"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['备注'] || '备注'" prop="memo">
                            <el-input v-model="manualReduceMoney.memo" type="textarea" :rows="5"
                                      size="small"></el-input>
                        </el-form-item>
                        <div class="formbtn tCent">
                            <el-button type="primary" :plain="true" size="small" @click="doCash">
                                {{LANG['保存'] || '保存'}}
                            </el-button>
                            <el-button type="primary" :plain="true" size="small" @click="doRest">
                                {{LANG['重置'] || '重置'}}
                            </el-button>
                        </div>
                    </el-form>
                    <!--手动返水-->
                    <el-form :model="backwater" :rules="backwaterRules" ref="manualAddMoney" label-width="90px"
                             class="mt10"
                             v-show="formTitle == 2">
                        <h3 v-if="formTitle == 2">{{LANG['手动返水'] || '手动返水'}}</h3>
                        <el-form-item :label="LANG['状态'] || '状态'" prop="state">
                            <el-radio v-model="backwater.status" label="1">{{LANG['按用户'] || '按用户'}}</el-radio>
                            <el-radio v-model="backwater.status" label="2">{{LANG['按会员层级'] || '按会员层级'}}</el-radio>
                        </el-form-item>
                        <el-form-item :label="LANG['用户名'] || '用户名'" prop="name" v-if="backwater.status == 1">
                            <el-input v-model="backwater.name"
                                      size="small"
                                      :placeholder="LANG['提示:多个用户名之间请用英文逗号隔开'] || '提示:多个用户名之间请用英文逗号隔开'"></el-input>

                        </el-form-item>
                        <el-form-item label="VIP等级" v-if="backwater.status == 2">
                            <el-checkbox-group v-model="backwater.levels">
                                <!-- 会员等级 -->
                                <el-checkbox v-for="(item,index) in levellist" :label="item.label" :key="index"
                                             name="type">{{item.value}}
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item :label="LANG['金额'] || '金额'" prop="amount">
                            <el-input v-model.number="backwater.amount" size="small"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['打码量'] || '打码量'" prop="statement">
                            <el-input v-model.number="backwater.statement" size="small"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['备注'] || '备注'" prop="memo">
                            <el-input v-model="backwater.memo" type="textarea" :rows="5" size="small"></el-input>
                        </el-form-item>
                        <div class="formbtn tCent">
                            <el-button type="primary" :plain="true" size="small" @click="doCash">
                                {{LANG['保存'] || '保存'}}
                            </el-button>
                            <el-button type="primary" :plain="true" size="small" @click="doRest">
                                {{LANG['重置'] || '重置'}}
                            </el-button>
                        </div>
                    </el-form>
                    <!--发放优惠-->
                    <el-form :model="reduceFavorable" :rules="reduceFavorableRules" ref="grantDiscountForm"
                             label-width="106px" v-show="formTitle == 3" class="mt10">
                        <h3 v-if="formTitle == 3">{{LANG['手动发放优惠'] || '手动发放优惠'}}</h3>
                        <el-form-item :label="LANG['状态'] || '状态'" prop="state">
                            <el-radio v-model="reduceFavorable.status" label="1">{{LANG['按用户'] || '按用户'}}</el-radio>
                            <el-radio v-model="reduceFavorable.status" label="2">{{LANG['按会员层级'] || '按会员层级'}}</el-radio>
                        </el-form-item>
                        <el-form-item :label="LANG['用户名'] || '用户名'" prop="name" v-if="reduceFavorable.status == 1">
                            <el-input v-model="reduceFavorable.name"
                                      size="small"
                                      :placeholder="LANG['提示:多个用户名之间请用英文逗号隔开'] || '提示:多个用户名之间请用英文逗号隔开'"></el-input>

                        </el-form-item>
                        <el-form-item label="VIP等级" v-if="reduceFavorable.status == 2">
                            <el-checkbox-group v-model="reduceFavorable.levels">
                                <!-- 会员等级 -->
                                <!--<el-checkbox v-for="(item,index) in levellist" :label="item.label" :key="index"-->
                                <el-checkbox v-for="(item,index) in levellist" :label="item.label" :key="index"
                                             name="type">{{item.value}}
                                </el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item :label="LANG['优惠金额'] || '优惠金额'" prop="amount">
                            <el-input v-model.number="reduceFavorable.amount" size="small"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['打码量'] || '打码量'" prop="statement">
                            <el-input v-model.number="reduceFavorable.statement" size="small"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['优惠活动名称'] || '优惠活动名称'" prop="aid">
                            <el-select v-model="reduceFavorable.aid" :placeholder="LANG['请选择优惠活动名称'] || '请选择优惠活动名称'"
                                       size="small">
                                <el-option v-for="(item,index) in reduceFavorableList" :key="index"
                                           :label="LANG[item.label] || item.label"
                                           :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item :label="LANG['备注'] || '备注'" prop="memo">
                            <el-input v-model="reduceFavorable.memo" type="textarea" :rows="5"
                                      size="small"></el-input>
                        </el-form-item>
                        <div class="formbtn tCent">
                            <el-button type="primary" :plain="true" size="small" @click="doCash">
                                {{LANG['保存'] || '保存'}}
                            </el-button>
                            <el-button type="primary" :plain="true" size="small" @click="doRest">
                                {{LANG['重置'] || '重置'}}
                            </el-button>
                        </div>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            // 判断非空正整数
            var checkNumber = function (rule, value, callback) {
                if (typeof value != 'number') {
                    callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
                } else if (Math.sign(value) === -1) {
                    callback(new Error(LANG['不能小于0'] || '不能小于0'));
                } else {
                    callback()
                }
            }
            // 判断可非空正整数
            var checkPositiveInteger = function (rule, value, callback) {
                if (value === '') {
                    callback();
                } else {
                    if (typeof value != 'number') {
                        callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
                    } else if (Math.sign(value) === -1) {
                        callback(new Error(LANG['不能小于0'] || '不能小于0'));
                    } else {
                        callback()
                    }
                }
            }
            // 非空验证
            var notNullString = function (rule, value, callback) {
                if (value === '') {
                    callback(new Error(LANG['请输入纯备注'] || '请输入纯备注'));
                } else {
                    callback();
                }
            }
            return {
                LANG,
                //手动增加余额
                manualAddMoney: {
                    status: '1',
                    name: "",
                    levels: [],
                    amount: '',
                    statement: '',
                    memo: '',
                },
                manualAddMoneyRules: {
                    amount: [
                        {validator: checkNumber, required: true, trigger: "blur"}
                    ],
                    statement: [
                        {validator: checkPositiveInteger, trigger: "blur"}
                    ],
                    memo: [
                        {validator: notNullString, required: true, trigger: "blur"}
                    ]
                },
                //手动减少余额
                manualReduceMoney: {
                    status: '1',
                    name: '',
                    amount: '',
                    memo: '',
                    levels: [],
                },
                manualReduceMoneyRules: {
                    amount: [
                        {validator: checkNumber, required: true, trigger: "blur"}
                    ],
                    memo: [
                        {validator: notNullString, required: true, trigger: "blur"}
                    ]
                },
                //手动返水
                backwater: {
                    status: '1',
                    name: '',
                    amount: '',
                    statement: '',
                    memo: '',
                    levels: [],
                },
                backwaterRules: {
                    amount: [
                        {validator: checkNumber, required: true, trigger: "blur"}
                    ],
                    statement: [
                        {validator: checkPositiveInteger, trigger: "blur"}
                    ],
                    memo: [
                        {validator: notNullString, required: true, trigger: "blur"}
                    ]
                },
                //手动发放优惠
                reduceFavorable: {
                    name: '',
                    amount: '',
                    statement: '',
                    aid: '',
                    memo: '',
                    status: '1',
                    levels: []
                },
                reduceFavorableRules: {
                    amount: [
                        {validator: checkNumber, required: true, trigger: "blur"}
                    ],
                    aid: [
                        {required: true, message: LANG['请选择优惠活动名称'] || '请选择优惠活动名称', trigger: 'change'}],
                    statement: [
                        {validator: checkPositiveInteger, trigger: "blur"}
                    ],
                    memo: [
                        {validator: notNullString, required: true, trigger: "blur"}
                    ]
                },
                formTitle: '',
                discountNameList: [],
                reduceFavorableList: [],
                //文件上传
                fileList3: [],
                // 会员层级
                levellist: [],
                loading: false
            };
        },
        methods: {
            init() {
                this.formTitle = "0";
                //获取优惠活动名称
                // let activeUrl = URL.api + ROUTES.GET.actives.short;
                let activeUrl = URL.api + '/active.short'

                this.$.autoAjax('get', activeUrl, '', {
                    ok: (res) => {
                        let model = res.data;
                        this.reduceFavorableList = [];
                        for (let i in model) {
                            this.reduceFavorableList.push({
                                "label": model[i].name,
                                "value": model[i].id
                            })
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // 获取会员层级
                this.$.autoAjax('get', URL.api + ROUTES.GET.user.level.list, '', {
                    ok: (res) => {
                        let model = res.data
                        for (let i in model) {
                            this.levellist.push({
                                "label": parseInt(model[i].id),
                                "value": model[i].level
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
            //手动增加余额
            doManualAddMoney() {
                this.formTitle = "0";
                this.manualAddMoney = {
                    status: '1',
                    name: '',
                    levels: [],
                    amount: '',
                    statement: '',
                    memo: '',
                }
            },
            //手动减少余额
            doManualReduceMoney() {
                this.formTitle = "1";
                this.manualReduceMoney = {
                    status: '1',
                    name: '',
                    amount: '',
                    memo: '',
                    levels: [],
                }
            },
            //手动返水
            doBackwater() {
                this.formTitle = "2";
                this.backwater = {
                    status: '1',
                    name: '',
                    amount: '',
                    statement: '',
                    memo: '',
                    levels: [],
                }
            },
            //手动发放优惠
            doReduceFavorable() {
                this.formTitle = "3";
                this.reduceFavorable = {
                    name: '',
                    amount: '',
                    statement: '',
                    aid: '',
                    memo: '',
                    status: '1',
                    levels: []
                }
            },
            // 这个函数用来过滤数组内的空字符串
            filter_null(arr) {
                let arr_list = [];
                for (let i of arr) {
                    if (i != '') {
                        arr_list.push(i)
                    }
                }
                return arr_list;
            },
            //保存
            doCash() {
                let url = '',
                    query = {};
                if (this.formTitle == '0') {
                    // 手动增加余额
                    url = URL.api + ROUTES.POST.cash.allincrease;
                    if (this.manualAddMoney.status == '1') {
                        query.users = this.manualAddMoney.name ? this.filter_null(this.manualAddMoney.name.split(',')) : [];
                    } else {
                        query.levels = this.manualAddMoney.levels;
                    }
                    query.role = 1;
                    query.amount = parseFloat(this.manualAddMoney.amount);
                    query.withdraw_bet = parseFloat(this.manualAddMoney.statement);
                    query.memo = this.manualAddMoney.memo;
                } else if (this.formTitle == '1') {
                    // 手动减少余额
                    url = URL.api + ROUTES.POST.cash.alldecrease;
                    if (this.manualReduceMoney.status == '1') {
                        query.users = this.manualReduceMoney.name ? this.filter_null(this.manualReduceMoney.name.split(',')) : [];
                    } else {
                        query.levels = this.manualReduceMoney.levels;
                    }
                    query.role = 1;
                    query.amount = parseFloat(this.manualReduceMoney.amount);
                    query.memo = this.manualReduceMoney.memo;
                } else if (this.formTitle == '2') {
                    // 手动反水
                    url = URL.api + ROUTES.POST.cash.allrebate;
                    if (this.backwater.status == '1') {
                        query.users = this.backwater.name ? this.filter_null(this.backwater.name.split(',')) : [];
                    } else {
                        query.levels = this.backwater.levels;
                    }
                    query.role = 1;
                    query.amount = parseFloat(this.backwater.amount)
                    query.withdraw_bet = parseFloat(this.backwater.statement)
                    query.memo = this.backwater.memo;
                } else {
                    // 手动发放优惠
                    url = URL.api + ROUTES.POST.cash.allactivity;
                    if (this.reduceFavorable.status == '1') {
                        query.users = this.reduceFavorable.name ? this.filter_null(this.reduceFavorable.name.split(',')) : [];
                    } else {
                        query.levels = this.reduceFavorable.levels;
                    }
                    query.role = 1;
                    query.amount = parseFloat(this.reduceFavorable.amount)
                    query.withdraw_bet = parseFloat(this.reduceFavorable.statement)
                    query.aid = this.reduceFavorable.aid;
                    query.memo = this.reduceFavorable.memo;
                    // 优先判断是否选中活动
                    if (!query.aid) {
                        this.$message.error(LANG['请选择优惠活动！'] || '请选择优惠活动！');
                        return;
                    }
                    // 后台记录参数需要加上活动名称，匹配当前活动id的活动名称
                    const enough_action = action => action.value == query.aid;
                    let action_list = this.reduceFavorableList.filter(enough_action);
                    query.action_name = action_list[0]['label']
                }
                // 判断是否缺少必要字段
                if ((query.users && !query.users.length) || (query.levels && !query.levels.length)) {
                    this.$message.error(LANG['用户名或层级不能为空！'] || '用户名和层级不能为空！');
                    return;
                }
                if (!query.amount) {
                    this.$message.error(LANG['金额不能为空！'] || '金额不能为空！');
                    return;
                }
                if (!query.memo) {
                    this.$message.error(LANG['备注不能为空！'] || '备注不能为空！');
                    return;
                }
                if (query.amount > 999999999) {
                    this.$message.error(LANG['操作金额不得大于9999999'] || '操作金额不得大于9999999');
                    return;
                }
                this.loading = true;

                this.$.autoAjax('post', url, query, {
                    ok: (res) => {
                        res.data && res.state == 0
                            ? this.$message.success(LANG['操作成功！'] || '操作成功！')
                            : this.$message.error(LANG[res.message] || res.message);
                        this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //重置
            doRest() {
            },
            //保存
            doCashAdd() {
                this.$message.success(LANG['恭喜您，手动增加余额成功！'] || '恭喜您，手动增加余额成功！');
            },
            //重置
            doRestAdd() {
            },
            handleChange(file, fileList) {
                this.fileList3 = fileList.slice(-3);
            }
        },
        created() {
            this.init();
        }
    };
</script>
<style scopend>
    #batchSave .tabBtn {
        width: 80%;
        margin: 10px 10%;
    }

    #batchSave .mainLeft {
        background: #d3dce6;
    }

    #batchSave .mainRight {
        border: 1px solid #D3dce6;
        padding: 20px;
    }

    #batchSave .mainRight h3 {
        margin-bottom: 20px;
    }
</style>
