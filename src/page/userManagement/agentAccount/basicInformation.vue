<template>
    <div id="basicInformation" class="clearfix" v-loading="fullscreenLoading">
        <el-col :span="16" :offset="4" v-if="!fullscreenLoading">
            <div class="title font18">{{LANG['基本信息'] || '基本信息'}}</div>
        </el-col>
        <el-col :span="16" class="border2" :offset="4" v-if="!fullscreenLoading">
            <el-form :model="baseFrom" :rules="baseRules" label-width="100px" ref="baseFrom">
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['代理用户名'] || '代理用户名'">
                        <span>{{baseFrom.name}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['ID'] || 'ID'">

                        <span>{{baseFrom.id}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['会员数'] || '会员数'">

                        <span v-if="baseFrom.play_num > 0"><router-link
                            :to="{ path: '/memberManagement',  query:{agent: baseFrom.name} }"
                            :class="{change: isActive}">{{baseFrom.play_num}}</router-link></span>
                        <span v-else>{{baseFrom.play_num}}</span>
                        <!--链接跳转未做-->
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['真实姓名'] || '真实姓名'" :prop="permissions['truename']?'':'truename'">
                        <el-input v-model="baseFrom.truename" :disabled="permissions['truename']"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['下级代理数'] || '下级代理数'">
                        <span v-if="baseFrom.inferisors_num > 0"><router-link
                            :to="{ path: '/agentAccount', query:{agentHigher: baseFrom.name}}"
                            :class="{change: isChange}">{{baseFrom.inferisors_num}}</router-link></span>
                        <span v-else>{{baseFrom.inferisors_num}}</span>
                        <el-button @click="addSubordinateAgent" size="small"
                                   v-if=" baseFrom.status == 1 &&  baseFrom.type == 1 ">{{LANG['添加下级代理'] || '添加下级代理'}}
                        </el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['上级代理'] || '上级代理'">

                        <span @click=changeStatus() class="change"
                              :title="topAgentMsg">  {{baseFrom.up_agent_name}}</span>
                        <!--链接跳转未做-->

                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['登录密码'] || '登录密码'">
                        <!--<el-input v-model="baseFrom.login_password" type="password"></el-input>-->
                        <span>******</span>
                        <el-button @click="resetLoginPass" size="small">{{LANG['重置'] || '重置'}}</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['取款密码'] || '取款密码'">
                        <span>****</span>
                        <!--  <el-input v-model="baseFrom.withdraw_password" type="password"></el-input>-->
                        <el-button @click="resetWithdrawPass" size="small">{{LANG['重置'] || '重置'}}</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['用户类型'] || '用户类型'">
                        <span>{{baseFrom.type | filterUserType}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['所属层'] || '所属层'">
                        <span>{{baseFrom.level}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['注册时间'] || '注册时间'">
                        <span>{{baseFrom.created}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['上次登录时间'] || '上次登录时间'">
                        <span>{{baseFrom.last_login}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['注册IP'] || '注册IP'">
                        <span>{{baseFrom.register_ip}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['上次登录IP'] || '上次登录IP'">
                        <span>{{baseFrom.login_ip}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['注册来源'] || '注册来源'">
                        <span>{{baseFrom.channel | filterChnnelAgent}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['联系电话'] || '联系电话'" :prop="permissions['mobile']?'':'mobile'">
                        <el-input v-model="baseFrom.mobile" :disabled="permissions['mobile']"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['电子邮箱'] || '电子邮箱'" :prop="permissions['email']?'':'email'">
                        <el-input v-model="baseFrom.email" type="text" :disabled="permissions['email']"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['QQ'] || 'QQ'" :prop="permissions['qq']?'':'qq'">
                        <el-input v-model="baseFrom.qq" :disabled="permissions['qq']"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['Skype'] || 'Skype'" :prop="permissions['skype']?'':'skype'">
                        <el-input v-model="baseFrom.skype" :disabled="permissions['skype']"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['微信'] || '微信'" :prop="permissions['weixin']?'':'weixin'">
                        <el-input v-model="baseFrom.weixin" :disabled="permissions['weixin']"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['性别'] || '性别'">
                        <span>{{baseFrom.gender | formatSex}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['生日'] || '生日'">
                        <span>{{baseFrom.birth}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['目标市场国家'] || '目标市场国家'">
                        <span>{{baseFrom.country}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['语言'] || '语言'">
                        <span>{{baseFrom.language}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['目标市场省份'] || '目标市场省份'">
                        <span>{{baseFrom.province}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item ">
                    <el-form-item :label="LANG['货币'] || '货币'">
                        <span>{{baseFrom.ctype}}</span>
                    </el-form-item>
                </el-col>

                <!--  <el-col :span="12" class="item">
					<el-form-item :label="LANG['安全验证问题'] || '安全验证问题'">
						<span>{{baseFrom.verification}}</span>
					</el-form-item>
				</el-col> -->
                <el-col :span="24" class="item itemtextarea">
                    <el-form-item :label="LANG['备注'] || '备注'">
                        <el-input v-model="baseFrom.memo" type="textarea"></el-input>
                    </el-form-item>
                </el-col>
                <!--  <el-col :span="12" class="item itemtextarea">
					<el-form-item :label="LANG['问题答案'] || '问题答案'">
						<span>{{baseFrom.answer}}</span>
					</el-form-item>
				</el-col> -->

                <el-col :span="6" :push="6">
                    <el-form-item>
                        <el-button type="primary" @click="saveModel" style="margin:10px 50%">
                            {{LANG['保存基本资料'] || '保存基本资料'}}
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-form>

        </el-col>
        <!--重置密码-->
        <el-col>
            <el-dialog :title="passTitle" v-model="passVisible" size="tiny">
                <el-form :model="passForm" :rules="passRules" ref="passForm" label-width="100px">

                    <el-form-item :label="LANG['新密码'] || '新密码'" prop="password">
                        <el-input v-model="passForm.password" v-if="!passForm.displayPass" type="password"></el-input>
                        <el-input v-model="passForm.password" v-if="passForm.displayPass"></el-input>
                    </el-form-item>
                    <el-form-item prop="password1" :label="LANG['确认密码'] || '确认密码'">
                        <el-input v-model="passForm.password1" v-if="!passForm.displayPass" type="password"></el-input>
                        <el-input v-model="passForm.password1" v-if="passForm.displayPass"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="passForm.displayPass">{{LANG['显示密码'] || '显示密码'}}</el-checkbox>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="resetPassForm">{{LANG['取消'] || '取消'}}</el-button>
                <el-button type="primary" @click="savePass">{{LANG['保存'] || '保存'}}</el-button>
              </span>
            </el-dialog>
        </el-col>
        <!--添加代理-->


        <el-col v-if="!isDetail && !fullscreenLoading">
            <el-dialog :title="editTitel" v-model="editVisible" size="tiny">
                <el-form :model="editForm" :rules="editRules" ref="editForm" label-width="150px">

                    <el-form-item :label="LANG['代理用户名'] || '代理用户名'" prop="username">
                        <el-input v-model="editForm.username"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['密码'] || '密码'" prop="password">
                        <el-input v-model="editForm.password" type="password" v-if="!showpass">
                            <el-button slot="append" @click="showPass">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </el-button>
                        </el-input>
                        <el-input v-model="editForm.password" type="text" v-if="showpass">
                            <el-button slot="append" @click="showPass">
                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                            </el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['确认密码'] || '确认密码'" prop="repeatPassword">
                        <el-input v-model="editForm.repeatPassword" type="password" v-if="!showpass">
                            <el-button slot="append" @click="showPass">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </el-button>
                        </el-input>
                        <el-input v-model="editForm.repeatPassword" type="text" v-if="showpass">
                            <el-button slot="append" @click="showPass">
                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                            </el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['备注'] || '备注'" prop="comment">
                        <el-input v-model="editForm.comment" type="textarea" :row="5"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="resetForm">{{LANG['取消'] || '取消'}}</el-button>
                        <el-button type="primary" @click="saveForm">{{LANG[editBtn] || editBtn}}</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </el-col>


    </div>
</template>
<script>

    export default {
        data() {
            var validateLength = (rule, value, callback) => {
                const reg = /^[0-9]{4}$/g;
                if (!reg.test(value)) {
                    callback(new Error(LANG['提款密码应为四位数字组成!'] || '提款密码应为四位数字组成'))
                } else {
                    callback()
                }
            }
            var loginLength = (rule, value, callback) => {
                if (value && value.length < 6) {
                    callback(new Error(LANG['登录密码至少6位!'] || '登录密码至少6位'));
                } else {
                    callback()
                }
            }
            var validatePass2 = (rule, value, callback) => {
                if (value !== this.passForm.password) {
                    callback(new Error(LANG['两次输入密码不一致!'] || '两次输入密码不一致'));
                } else {
                    callback()
                }
            }
            var validatePass1 = (rule, value, callback) => {
                if (value !== this.addAgentForm.password) {
                    callback(new Error(LANG['两次输入密码不一致!'] || '两次输入密码不一致'))
                } else {
                    callback()
                }
            }
            var validatePass3 = (rule, value, callback) => {
                if (value !== this.editForm.password) {
                    callback(new Error(LANG['两次输入密码不一致!'] || '两次输入密码不一致'))
                } else {
                    callback()
                }
            }
            var validUserName = (rule, value, callback) => {

                if (!/^[A-Za-z0-9]{6,16}$/.test(value)) {
                    callback(new Error(LANG['请输入6-16位的数字及字母!'] || '请输入6-16位的数字及字母'))
                } else if (!/^(\d*[A-Za-z]\d*)+$/.test(value)) {
                    callback(new Error(LANG['不能纯数字'] || '不能纯数字'))
                } else {
                    callback()
                }
            }
            var validateEmail = (rule, value, callback) => {

                if (value && !/[a-zA-Z0-9\\*]{1,15}@[a-zA-Z0-9]{1,8}\.[a-zA-Z0-9]{1,5}/.test(value)) {
                    callback(new Error(LANG['请输入正确的邮箱格式!'] || '请输入正确的邮箱格式'))
                } else if (value && /\s/.test(value)) {
                    callback(new Error(LANG['请输入有效邮箱，不能输入空格!'] || '请输入有效邮箱，不能输入空格'))
                } else {
                    callback()
                }
            }
            // 验证中文
            var validateHans = (rule, value, callback) => {
                if (value && !/^[\u2E80-\u9FFF]+$/.test(value)) {
                    callback(new Error(LANG['请输入中文汉字!'] || '请输入中文汉字'))
                } else if (value && /\s/.test(value)) {
                    callback(new Error(LANG['请输入中文汉字，不能输入空格!'] || '请输入中文汉字，不能输入空格'))
                } else {
                    callback()
                }
            }
            // 验证手机号码
            var validateMobile = (rule, value, callback) => {
                const reg = /^\d{1,15}$/g;
                if (value && !reg.test(value)) {
//                if (value && !/^1[3|4|5|7|8][0-9]\d{8}$/.test(value)) {
                    callback(new Error(LANG['请输入合法的手机号码'] || '请输入合法的手机号码'));
                } else if (value && /\s/.test(value)) {
                    callback(new Error(LANG['请输入合法的手机号码，不能输入空格!'] || '请输入合法的手机号码，不能输入空格'))
                } else {
                    callback()
                }
            }
            // 验证数字
            var validateNumber = (rule, value, callback) => {
                const reg = /^\d{4,16}$/g;
                if (value && !reg.test(value)) {
                    callback(new Error(LANG['请输入合法的QQ号码，只能输入数字!'] || '请输入合法的QQ号码，只能输入数字'))
                } else if (value && /\s/.test(value)) {
                    callback(new Error(LANG['请输入合法的QQ号码，不能输入空格!'] || '请输入合法的QQ号码，不能输入空格'))
                } else {
                    callback()
                }
            }
            // 验证微信或SKYPE
            var validateWeixinSkype = (rule, value, callback) => {
                const reg = /[a-z\d#@!~%^&*]{4,16}/g;
                if (value && !reg.test(value)) {
                    callback(new Error(LANG['请输入数字或字母或特殊字符!'] || '请输入数字或字母或特殊字符'))
                } else if (value && /\s/.test(value)) {
                    callback(new Error(LANG['请输入数字或字母或特殊字符，不能输入空格!'] || '请输入数字或字母或特殊字符，不能输入空格'))
                } else {
                    callback()
                }
            }
            return {
                topAgentMsg: "点击查看上级代理哦",
                showDetail: false,
                showpass: false,
                typeList: [{"label": "层级代理", "value": "1"}, {"label": "直属代理", "value": "2"}],
                editRules: {
                    username: [
                        {required: true, message: LANG['请输入代理用户名'] || '请输入代理用户名', trigger: 'blur'},
                        {validator: validUserName, trigger: 'blur,change'}
                    ],
                    password: [{required: true, message: LANG['请输入密码'] || '请输入密码', trigger: 'blur'}, {
                        "min": 6,
                        message: (LANG['输入密码至少6位'] || '输入密码至少6位')
                    }],
                    comment: [{"min": 1, "max": 128}],
                    repeatPassword: [{
                        required: true,
                        message: LANG['请输入确认密码'] || '请输入确认密码',
                        trigger: "blur"
                    }, {validator: validatePass3, trigger: 'blur,change'}]
                },
                editForm: {
                    username: "",
                    password: "",
                    repeatPassword: "",
                    comment: "",

                },
                editVisible: false,
                editTitel: "", //编辑
                fullscreenLoading: false,
                isDetail: false,
                baseRules: {
                    email: [{validator: validateEmail, trigger: 'blur,change'}],
                    truename: [{validator: validateHans, trigger: 'blur,change'}],
                    mobile: [{validator: validateMobile, trigger: 'blur,change'}],
                    qq: [{validator: validateNumber, trigger: 'blur,change'}],
                    skype: [{validator: validateWeixinSkype, trigger: 'blur,change'}],
                    weixin: [{validator: validateWeixinSkype, trigger: 'blur,change'}]
                },
                LANG,
                baseFrom: {
                    // LANG,
                    id: "",
                    name: "",
                    // 下级会员数， 下级代理数
                    play_num: "",
                    inferisors_num: "",
                    // 登录密码， 存款密码
                    login_password: "",
                    withdraw_password: "",
                    type: "",
                    register_time: "",
                    register_ip: "",
                    //  注册来源
                    channel: "",
                    // 邮箱，微信，qq，语言, 币种, 电话
                    email: "",
                    wechat: "",
                    qq: "",
                    language: "",
                    ctype: "",
                    phone: "",
                    birth: "",
                    comment: "",
                    true_name: "",
                    // 上级代理
                    up_agent_name: "",
                    withdraw: "",
                    level: "",
                    // 注册ip，注册时间， 上次登录时间，上次登录ip
                    register_ip: "",
                    created: "",
                    last_login: "",
                    login_ip: "",
                    gender: "",
                    // 国家，省份，城市
                    country: "",
                    province: "",
                    city: "",
                    verification: "",
                    answer: "",
                    skype: "",

                },
                fullscreenLoading: false,
                //密码弹窗
                passTitle: "",
                passVisible: false,
                passForm: {

                    password: "",
                    password1: "",
                    displayPass: false
                },
                passRules: {

                    password: [{required: true, message: (LANG['请输入密码'] || '请输入密码'), trigger: 'blur'},
                        {validator: validateLength, trigger: 'blur'}],
                    password1: [{required: true, message: (LANG['请输入确认密码'] || '请输入确认密码'), trigger: 'blur'},
                        {validator: validatePass2, trigger: 'blur'}]
                },
                withdrawMoneyRules: {
                    password: [{required: true, message: (LANG['请输入密码'] || '请输入密码'), trigger: 'blur'},
                        {validator: validateLength, trigger: 'blur'}],
                    password1: [{required: true, message: (LANG['请输入确认密码'] || '请输入确认密码'), trigger: 'blur'},
                        {validator: validatePass2, trigger: 'blur'}]
                },
                loginRules: {

                    password: [{required: true, message: (LANG['请输入密码'] || '请输入密码'), trigger: 'blur'},
                        {validator: loginLength, trigger: 'blur'}],
                    password1: [{required: true, message: (LANG['请输入确认密码'] || '请输入确认密码'), trigger: 'blur'},
                        {validator: validatePass2, trigger: 'blur'}]
                },
                //添加代理弹窗
                addAgentVisible: false,
                addAgentForm: {
                    agentName: "",
                    password: "",
                    password1: "",
                    remark: "",
                    displayPass: false
                },
                addAgentRules: {
                    agentName: [{required: true, message: (LANG['请输入代理用户名'] || '请输入代理用户名'), trigger: 'blur'}],
                    password: [{required: true, message: (LANG['请输入密码'] || '请输入密码'), trigger: 'blur'}, {
                        min: 6,
                        message: (LANG['输入密码至少6位'] || '输入密码至少6位')
                    }],
                    password1: [{required: true, message: (LANG['请输入确认密码'] || '请输入确认密码'), trigger: 'blur'},
                        {validator: validatePass1, trigger: 'blur'}]
                },
                getTopagent: false, // 判断是否查询上级代理
                Id: '', //  如果点击了上级代理, 此时Id为上级代理的
                editBtn: '',
                // 权限修改权限
                permissions: {
                    truename: false,
                    qq: false,
                    weixin: false,
                    email: false,
                    mobile: false,
                    skype: false
                }
            }
        },
        filters: {
            formatSex(obj) {
                switch (obj) {
                    case "1":
                        return '男'
                        break
                    case "2":
                        return '女'
                        break
                    case "3":
                        return '保密'
                        break
                    default:
                        return '';
                }
            }
        },
        props: {
            id: Number
        },
        components: {},
        computed: {
            isActive: function () {
                if (this.baseFrom.play_num >= 1) {
                    return true;
                } else {
                    return false;
                }
            },
            isChange: function () {
                if (this.baseFrom.inferisors_num >= 1) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        watch: {},
        methods: {
            //页面初始化
            init() {
                this.fullscreenLoading = true;
                this.changeId();
                //设置修改权限
                if (sessionStorage.true_name === "false") {
                    this.permissions.truename = true;
                }
                if (sessionStorage.mobile === "false") {
                    this.permissions.mobile = true;
                }
                if (sessionStorage.qq === "false") {
                    this.permissions.qq = true;
                }
                if (sessionStorage.weixin === "false") {
                    this.permissions.weixin = true;
                }
                if (sessionStorage.skype === "false") {
                    this.permissions.skype = true;
                }
                if (sessionStorage.email === "false") {
                    this.permissions.email = true;
                }
                let url = URL.api + ROUTES.GET.user.agent.base + '/' + this.Id;
                this.$.autoAjax('get', url, '', {
                    ok: (res) => {
                        let baseFrom = this.baseFrom;
                        if (res.state == 0 && res.data) {
                            let model = res.data;
                            for (let i in model) {
                                if (i === "language") {
                                    if (model[i]) {
                                        baseFrom[i] = model[i][0];
                                    }
                                } else {
                                    baseFrom[i] = model[i];
                                }
                            }
                        }
                        this.fullscreenLoading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })


                // this.$http.get(url,URLCONFIG).then((res)=>{
                //     let baseFrom = this.baseFrom;
                //     if(res.data.state == 0 && res.data.data){
                //
                //         let model = res.data.data;
                //         for(let i in model){
                //             if(i === "language")
                //             {
                //                   if(model[i])
                //                   {
                //                      baseFrom[i]=model[i][0];
                //                   }
                //
                //             }else{
                //                  baseFrom[i]=model[i];
                //             }
                //
                //         }
                //     }
                //     this.fullscreenLoading = false;
                // }).catch((e)=>{
                //     this.fullscreenLoading = false;
                // });
            },
            //添加下级代理
            addSubordinateAgent() {
                this.addAgentVisible = true
                this.editTitel = LANG['新增代理'] || '新增代理';
                this.editVisible = true;
                this.editBtn = LANG['新增'] || '新增';
//
            },
            //重置代理FORM
            resetAddAgentForm() {
                this.$refs.addAgentForm.resetFields()
                this.addAgentForm.displayPass = false
                this.addAgentVisible = false;
            },
            //重置登录密码
            resetLoginPass() {
                this.passVisible = true
                this.passTitle = (LANG['重置登录密码'] || '重置登录密码');
                this.passRules = this.loginRules;
            },
            //重置取款密码
            resetWithdrawPass() {
                this.passVisible = true
                this.passTitle = (LANG['重置取款密码'] || '重置取款密码');
                this.passRules = this.withdrawMoneyRules;
            },
            //重置密码弹窗
            resetPassForm() {
                this.$refs.passForm.resetFields()
                this.passForm.displayPass = false
                this.passVisible = false;
            },
            //保存密码
            savePass() {
                this.changeId();
                let password = this.passForm.password;
                let _this = this
                _this.$refs.passForm.validate((valid) => {
                    let lab = (LANG['重置登录密码'] || '重置登录密码');
                    let lab1 = (LANG['重置取款密码'] || '重置取款密码');
                    if (valid) {
                        //如果是保存登录密码
                        if (_this.passTitle == lab) {
                            // 保存登录密码
                            this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.agent.pw + '/' + _this.baseFrom.id, {
                                "pw-new": _this.passForm.password,
                                "uid": _this.baseFrom.id,
                                "role": "2"
                            }, {
                                ok: (res) => {
                                    if (res.state == 0 && res.data) {
                                        _this.$message.success(LANG['登录密码重置成功！'] || '登录密码重置成功！');
                                    } else {
                                        _this.$message.error(LANG['登录密码重置失败，请稍后重试!'] || '登录密码重置失败，请稍后重试!');
                                    }
                                    if (_this.passTitle == lab1) {

                                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.withdraw.pw.reset + "/" + _this.baseFrom.id, {
                                            "new_password": _this.passForm.password,
                                            "wid": _this.baseFrom.wallet_id
                                        }, {
                                            ok: (res) => {
                                                if (res.state == 0 && res.data) {
                                                    _this.$message.success(LANG['取款密码修改成功！'] || '取款密码修改成功！');
                                                } else {
                                                    _this.$message.error(LANG['取款密码修改失败，请稍后重试！'] || '取款密码修改失败，请稍后重试！');
                                                }
                                            },
                                            p: () => {
                                            },
                                            error: e => {
                                                console.log(e)
                                            }
                                        })
                                        // this.$.autoAjax('patch',URL.api + ROUTES.PATCH.withdraw.pw.reset + "/" + _this.baseFrom.id, JSON.stringify({"new_password": _this.passForm.password,"wid": _this.baseFrom.wallet_id}), {
                                        // 	ok: (res) => {
                                        // 		if (res.state == 0 && res.data) {
                                        // 			_this.$message.success(LANG['取款密码修改成功！'] || '取款密码修改成功！');
                                        // 		} else {
                                        // 			_this.$message.error(LANG['取款密码修改失败，请稍后重试！'] || '取款密码修改失败，请稍后重试！');
                                        // 		}
                                        // 	},
                                        // 	p: () => {
                                        // 	},
                                        // 	error: e => {
                                        // 		console.log(e)
                                        // 	}
                                        // })
                                        // this.$http.patch(URL.api + ROUTES.PATCH.withdraw.pw.reset + "/" + _this.baseFrom.id, JSON.stringify({"new_password": _this.passForm.password, "wid": _this.baseFrom.wallet_id}), URLCONFIG).then((res) => {
                                        // 	if (res.data.state == 0 && res.data) {
                                        // 		_this.$message.success(LANG['取款密码修改成功！'] || '取款密码修改成功！');
                                        // 	} else {
                                        // 		_this.$message.error(LANG['取款密码修改失败，请稍后重试！'] || '取款密码修改失败，请稍后重试！');
                                        // 	}
                                        // })
                                    }
                                    _this.resetPassForm()
                                    _this.fullscreenLoading = false;
                                }
                            })
                        }
                    }
                })
            },


            //     this.$http.patch(URL.api+ROUTES.PATCH.user.agent.pw+'/'+ _this.baseFrom.id,JSON.stringify({"pw-new":_this.passForm.password, "uid": _this.baseFrom.id, "role":"2"}),URLCONFIG).then((res)=>{
            //         if(res.data.state == 0 && res.data.data){
            //             _this.$message.success(LANG['登录密码重置成功！'] || '登录密码重置成功！');
            //         }else{
            //             _this.$message.error(LANG['登录密码重置失败，请稍后重试!'] || '登录密码重置失败，请稍后重试!');
            //         }
            //     })
            // }

            //保存基本信息
            saveModel() {
                this.$refs.baseFrom.validate((valid) => {
                    if (valid) {
                        this.changeId();
                        let query = {};
                        for (let k in this.baseFrom) {
                            if (sessionStorage[k] == 'true' && k !== 'true_name') {
                                query[k] = this.baseFrom[k];
                            } else if (k === 'truename' && (sessionStorage['true_name'] == 'true')) {
                                query[k] = this.baseFrom[k];
                            }
                        }
                        delete query.answer;
                        query.memo = this.baseFrom.memo;
                        let _this = this;
                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.agent.messages + "/" + this.baseFrom.id, query, {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.$message.success(LANG['基本资料修改成功！'] || '基本资料修改成功！');
                                } else if (res.state == 4003 || res.state == 2003 || res.state == 405) {
                                    _this.$message.error(LANG['无权限操作'] || '无权限操作');
                                } else if (res.data.msg) {
                                    _this.$message.error(res.data.msg);
                                } else {
                                    _this.$message.error(LANG['基本资料修改失败，请稍后重试！'] || '基本资料修改失败，请稍后重试！');
                                }
                            }
                        })
                    }
                })
            },
            // this.$http.patch(URL.api+ROUTES.PATCH.user.agent.messages+"/"+ this.baseFrom.id,JSON.stringify(query),URLCONFIG).then((res)=>{
            //     if(res.data.state == 0 && res.data.data){
            //         _this.$message.success(LANG['基本资料修改成功！'] || '基本资料修改成功！');
            //     }else if(res.data.state == 4003 || res.data.state == 2003 || res.data.state == 405){
            //         _this.$message.error(LANG['无权限操作'] || '无权限操作');
            //     }else if(res.data.msg){
            //         _this.$message.error(res.data.msg);
            //     } else {
            //         _this.$message.error(LANG['基本资料修改失败，请稍后重试！'] || '基本资料修改失败，请稍后重试！');
            //     }
            // })

            resetFormbasic() {
                this.$refs.baseFrom.resetFields();
            },
            changeStatus() {
                this.getTopagent = true;
                this.init();
            },
            changeId() // 此方法判断ID应该是父组件的id还是点击查看上级代理的id
            {
                if (this.getTopagent) {
                    this.Id = this.baseFrom.pid;
                } else {
                    this.Id = this.id;
                    this.getTopagent = false;
                }

            },
            //选择代理类型  显示详情
            changeDetail(v) {
                if (parseInt(v) === 2) {
                    this.showDetail = true;
                } else {
                    this.showDetail = false;
                }
            },
            //重置新增表单
            resetForm() {
                this.$refs.editForm.resetFields();
                this.editVisible = false;
            },
            //显示密码开关
            showPass() {
                this.showpass = !this.showpass;
            },
            //保存新增、修改
            saveForm() {
                this.changeId();
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        let query = {};
                        for (let k in this.editForm) {

                        }
                        this.editForm.pid = this.baseFrom.id;
                        this.editForm.pname = this.baseFrom.name;
                        this.editForm.type = 1;
                        delete this.editForm.repeatPassword
                        let _this = this;
                        this.$.autoAjax('put', URL.api + ROUTES.PUT.user.agent.$, _this.editForm, {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {

                                    _this.$message.success(LANG['添加代理成功'] || '添加代理成功');
                                    _this.init()
                                } else if (res.state == 3 && res.data == false) {
                                    _this.$message.error(LANG['用户名已存在'] || '用户名已存在');
                                } else {
                                    _this.$message.error(LANG['添加下级代理失败！'] || '添加下级代理失败！');
                                }
                            }
                        })
                        this.resetForm();
                    }
                });
            },
        },
        created() {
            this.init();
        }
    }

    // this.$http.put(URL.api + ROUTES.PUT.user.agent.$,JSON.stringify(_this.editForm),URLCONFIG).then((res) => {
    //     if( res.data.state == 0 && res.data.data  ) {
    //
    //         _this.$message.success(LANG['添加代理成功'] || '添加代理成功');
    //         _this.init()
    //     }else if(res.data.state == 3 && res.data.data == false)
    //     {
    //         _this.$message.error(LANG['用户名已存在'] || '用户名已存在');
    //     }else{
    //         _this.$message.error(LANG['添加下级代理失败！'] || '添加下级代理失败！');
    //     }
    // })
    // this.resetForm();
    //                 }
    //             });
    //         },
    //     },
    //
    //     created(){
    //         this.init();
    //     }
    // }
</script>
<style>
    #basicInformation .change {
        color: #20A0FF;
        cursor: pointer;
    }

    #basicInformation .title {
        text-align: center;
        font-weight: 700;
    }

    #basicInformation .border2 {
        border: 1px solid #ccc;
        padding: 0 10px;
        box-sizing: border-box;
    }

    #basicInformation .border2 .item {
        border-bottom: 1px solid #ccc;
        margin: auto;
        box-sizing: border-box;
        height: 64px;
        padding: 15px 0;
    }

    #basicInformation .border2 .itemtextarea {
        height: 90px;
    }

    #basicInformation .border2 .title {
        text-align: center;
        width: 100%;
        font-weight: 800;
        font-size: 18px;
    }

    #basicInformation .border2 .el-col, #basicInformation .el-form-item {
        margin: auto;
    }

    /*#basicInformation .border2 .el-form-item__label{background-color: rgba(233, 233, 233, 0.7);width:100%}*/
    #basicInformation .border2 .el-form-item__content span {
        margin-left: 15px
    }

    #basicInformation .border2 .el-form-item__content .el-button {
        margin-left: 15px
    }

    #basicInformation .border2 .el-form-item__content .el-button span {
        margin: auto;
    }

    #basicInformation .border2 .el-input__inner {
        height: 30px;
        margin-left: 15px
    }

    #basicInformation .border2 .el-form-item__content .el-input {
        width: 60%;
    }

    #basicInformation .border2 .el-form-item__content .el-textarea {
        margin: 3px 0 3px 15px;
        width: 90%;
    }

    #basicInformation .border2 .el-form-item__error {
        margin-left: 12px
    }
</style>
