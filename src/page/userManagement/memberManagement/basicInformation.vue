<template>
    <div id="basicInformation" v-loading="loading">
        <div class="clearfix" style="margin: 0 auto; width: 933px;">
            <el-col>
                <div class="title">{{LANG['基本资料'] || '基本资料'}}</div>
            </el-col>
            <el-col class="border1">
                <el-form :model="baseFrom" :rules="baseRules" label-width="100px" ref="baseFrom">
                    <el-row>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['用户名'] || '用户名'">
                                <span>{{baseFrom['username']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['ID/昵称'] || 'ID/昵称'">
                                <span class="mr20">{{baseFrom['id']}}</span>|<span class="ml20">{{baseFrom['nickname']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['标签'] || '标签'">
                                <span>{{baseFrom['tags']}}</span>
                                <el-button @click="addTags" size="small">{{LANG['打标签'] || '打标签'}}</el-button>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['真实姓名'] || '真实姓名'" :prop="permissions['true_name']?'':'truename'">
                                <el-input v-model="baseFrom['truename']" :disabled="permissions['true_name']"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['登录密码'] || '登录密码'">
                                <!-- <el-input v-model="baseFrom['password']" type="password"></el-input> -->
                                <span>****</span>
                                <el-button @click="resetLoginPass" size="small">{{LANG['重置'] || '重置'}}</el-button>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['取款密码'] || '取款密码'">
                                <!-- <el-input v-model="baseFrom['wpassword']" type="password"></el-input> -->
                                <span>****</span>
                                <el-button @click="resetWithdrawPass" size="small">{{LANG['重置'] || '重置'}}
                                </el-button>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['用户类型'] || '用户类型'">
                                <span>{{baseFrom['user_type']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['会员等级'] || '会员等级'">
                                <span>{{baseFrom['level']}}</span>
                                <!-- <el-button @click="adjustmentGrade" size="small">{{LANG['调级'] || '调级'}}</el-button> -->
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['注册时间'] || '注册时间'">
                                <span>{{baseFrom['created']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['最后登录时间'] || '最后登录时间'">
                                <span>{{baseFrom['last_login']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['注册IP'] || '注册IP'">
                                <span>{{baseFrom['ip']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['最后登录IP'] || '最后登录IP'">
                                <span>{{baseFrom['last_ip']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['注册来源'] || '注册来源'">
                                <span>{{baseFrom['channel'] | filterChnnel}}</span>
                            </el-form-item>
                        </el-col>
                        <!-- <el-col :span="12" class="item">
                            <el-form-item :label="LANG['所属代理'] || '所属代理'">
                                <span v-text="baseFrom['agent']"></span>
                                <el-button @click="doSetAgent" v-if="!baseFrom['agent']" size="small">{{LANG['添加'] || '添加'}}</el-button>
                                <el-button @click="doSetAgent" v-if="baseFrom['agent']" size="small">{{LANG['移动'] || '移动'}}</el-button>
                            </el-form-item>
                        </el-col> -->
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['邮箱'] || '邮箱'" :prop="permissions['email']?'':'email'">
                                <el-input v-model="baseFrom['email']" :disabled="permissions['email']"></el-input>
                                <el-tag type="primary" >{{(baseFromSafe['email'] == "1" ? "已验证" : "未验证")}}</el-tag>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['身份证号码'] || '身份证号码'" :prop="permissions['idcard']?'':'idcard'">
                                <el-input v-model="baseFrom['idcard']" :disabled="permissions['idcard']"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['手机'] || '手机'" :prop="permissions['mobile']?'':'mobile'">
                                <el-input v-model="baseFrom['mobile']" :disabled="permissions['mobile']"></el-input>
                                <el-tag type="primary" >{{(baseFromSafe['mobile'] == "1" ? "已验证" : "未验证")}}</el-tag>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['QQ'] || 'QQ'" :prop="permissions['qq']?'':'qq'">
                                <el-input v-model="baseFrom['qq']" :disabled="permissions['qq']" type="number"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['微信'] || '微信'" :prop="permissions['weixin']?'':'weixin'">
                                <el-input v-model="baseFrom['weixin']" :disabled="permissions['weixin']"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['安全问题'] || '安全问题'" :prop="permissions['answer']?'':'question_id'">
                                <!-- <el-input v-model="baseFrom['question']"></el-input> -->
                                <el-select v-model="baseFrom['question_id']" placeholder="请选择" :disabled="permissions['answer']">
                                    <el-option v-for="item in questionList" :key="item.value" :label="item.label"
                                               :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['安全答案'] || '安全答案'" :prop="permissions['answer']?'':'answer'">
                                <el-input v-model="baseFrom['answer']" :disabled="permissions['answer']"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['国家'] || '国家'">
                                <span>{{baseFrom['country']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['省市'] || '省市'">
                                <span>{{baseFrom['province'] + " " + baseFrom['city']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['国籍'] || '国籍'">
                                <span>{{baseFrom['nationality']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['货币'] || '货币'">
                                <span>{{baseFrom['ctype']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['语言'] || '语言'">
                                <span>{{baseFrom['language_name']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['生日'] || '生日'">
                                <span>{{baseFrom['birth']}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['性别'] || '性别'">
                                <span>{{baseFrom['sex']}}</span>
                            </el-form-item>
                        </el-col>
                        <!-- <el-col :span="12" class="item">
                            <el-form-item :label="LANG['skype'] || 'skype'">
                                <span>{{baseFrom['skype']}}</span>
                            </el-form-item>
                        </el-col> -->
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['Skype'] || 'Skype'"  :prop="permissions['skype']?'':'skype'">
                                <el-input v-model="baseFrom['skype']" :disabled="permissions['skype']"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['地址'] || '地址'"  :prop="permissions['address']?'':'address'">
                                <el-input v-model="baseFrom['address']" :disabled="permissions['address']"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" class="item">
                            <el-form-item :label="LANG['邮编'] || '邮编'"  :prop="permissions['nationality']?'':'postcode'">
                                <el-input v-model="baseFrom['postcode']" :disabled="permissions['nationality']"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="item itemtextarea">
                            <el-form-item :label="LANG['备注'] || '备注'" :prop="permissions['comment']?'':'comment'">
                                <el-input v-model="baseFrom['comment']" type="textarea"
                                          style="margin-left: 0px;"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
                <el-col :span="24" class="tCent mt10 pb">
                    <el-button type="primary" @click="saveModel">{{LANG['保存基本资料'] || '保存基本资料'}}</el-button>
                </el-col>
            </el-col>
            <!--标签-->
            <el-col>
                <el-dialog :title="LANG['打标签'] || '打标签'" v-model="tagsVisible" size="tiny">
                    <el-form :model="tagsForm" :rules="tagsRules" ref="tagsForm" label-width="100px">
                        <el-form-item :label="LANG['用户名:'] || '用户名:'">
                            <span>{{tagsForm.formUsername}}</span>
                        </el-form-item>
                        <el-form-item prop="userTags" :label="LANG['标签:'] || '标签:'">
                            <el-select v-model="tagsForm.userTags" placeholder="请选择">
                                <el-option v-for="item in userTagsList" :key="item.value" :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="tagsVisible = false">{{LANG['取消'] || '取消'}}</el-button>
                        <el-button type="primary" @click="saveTags">{{LANG['保存'] || '保存'}}</el-button>
                      </span>
                </el-dialog>
            </el-col>
            <!--重置密码-->
            <el-col>
                <el-dialog :title="passTitle" v-model="passVisible" size="tiny">
                    <el-form :model="passForm" :rules="passRules" ref="passForm" label-width="100px" style="height: 130px;">
                        <el-form-item :label="LANG['新密码'] || '新密码'" prop="password" style="height:60px">
                            <el-input v-model="passForm.password" v-if="!passForm.displayPass"
                                      type="password"></el-input>
                            <el-input v-model="passForm.password" v-if="passForm.displayPass"></el-input>
                        </el-form-item>
                        <el-form-item prop="password1" :label="LANG['确认密码'] || '确认密码'" style="height:50px">
                            <el-input v-model="passForm.password1" v-if="!passForm.displayPass"
                                      type="password"></el-input>
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
            <!--调级  暂时取消-->
            <!-- <el-col>
                <el-dialog :title="'会员等级调级'" v-model="adjustmentVisible" size="tiny">
                    <el-form :model="adjustmentForm" :rules="adjustmentRules" ref="adjustmentForm" label-width="100px">
                        <el-form-item :label="LANG['会员等级'] || '会员等级'" prop="MemberLevel">
                            <el-select v-model="adjustmentForm.MemberLevel" placeholder="请选择">
                                <el-option v-for="item in MemberLevelList" :label="item.label" :key="item.id"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="resetAdjustmentForm">{{LANG['取消'] || '取消'}}</el-button>
                        <el-button type="primary" @click="saveAdjustment">{{LANG['保存'] || '保存'}}</el-button>
                      </span>
                </el-dialog>
            </el-col> -->
            <!--添加代理-->
            <!-- <el-col>
                <el-dialog :title="'添加所属代理'" v-model="agentVisible" size="tiny">
                    <el-form :model="agentForm" :rules="agentRules" ref="agentForm" label-width="100px">
                        <el-form-item :label="LANG['添加代理'] || '添加代理'" prop="addAgent">
                            <el-input v-model="agentForm.addAgent"></el-input>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="resetAgentForm">{{LANG['取消'] || '取消'}}</el-button>
                        <el-button type="primary" @click="saveAgent">{{LANG['保存'] || '保存'}}</el-button>
                      </span>
                </el-dialog>
            </el-col> -->
        </div>
    </div>
</template>

<script>
    import NProgress from 'nprogress'

    export default {
        data() {
            var validatePass2 = (rule, value, callback) => {
                if (value !== this.passForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            var validatePass1 = (rule, value, callback) => {
                // 这里用this.currentPasswordStatus判断当前弹窗密码的状态，只有取款密码需要进行数字的验证
                const reg = /^[0-9]{6}$/g;
                if (!reg.test(value) && !this.currentPasswordStatus) {
                    callback(new Error(LANG['提款密码应为六位数字组成!'] || '提款密码应为六位数字组成'))
                } else {
                    callback()
                }
            }
            var validateEmail = (rule, value, callback) => {

                if (value && !/[a-zA-Z0-9\\*]{1,15}@[a-zA-Z0-9]{1,8}\.[a-zA-Z0-9]{1,5}/.test(value)) {
                    callback(new Error(LANG['请输入正确的邮箱格式!'] || '请输入正确的邮箱格式'))
                } else if(value && /\s/.test(value)){
                    callback(new Error(LANG['请输入有效邮箱，不能输入空格!'] || '请输入有效邮箱，不能输入空格'))
                } else {
                    callback()
                }
            }
            // 验证中文
            var validateHans = (rule, value, callback) =>{
                value && !/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,10}$/.test(value)
                    ?callback(new Error(LANG['请输入中文汉字,且长度2到10位!'] || '请输入中文汉字，且长度2到10位！'))
                    :callback()
            }
            // 验证手机号码
            var validateMobile = (rule, value, callback) =>{
                if (value && !/^[0-9]\d{0,14}$/.test(value)) {
//                if (value && !/^[0-9]*$/.test(value)) {
                    callback(new Error(LANG['请输入合法的手机号码'] || '请输入合法的手机号码'));
//                } else if(value && value.length <11 && value.length>5){
//                    callback(new Error(LANG['手机号码长度大于或等于11，小于或等于15位数'] || '手机号码长度大于或等于11，小于或等于15位数'))
                } else if(value && /\s/.test(value)){
                    callback(new Error(LANG['请输入合法的手机号码，不能输入空格!'] || '请输入合法的手机号码，不能输入空格'))
                } else {
                    callback()
                }
            }
            // 验证数字
            var validateNumber = (rule, value, callback) =>{
                const reg = /^\d{4,16}$/g;
                if (value && !reg.test(value)) {
                    callback(new Error(LANG['请输入合法的QQ号码，只能输入数字!'] || '请输入合法的QQ号码，只能输入数字'))
                } else if(value && /\s/.test(value)){
                    callback(new Error(LANG['请输入合法的QQ号码，不能输入空格!'] || '请输入合法的QQ号码，不能输入空格'))
                } else {
                    callback()
                }
            }
            // 验证微信或SKYPE
            var validateWeixinSkype = (rule, value, callback) =>{
                const reg = /[a-z\d#@!~%^&*]{4,16}/g;
                if (value && !reg.test(value)) {
                    callback(new Error(LANG['请输入数字或字母或特殊字符!'] || '请输入数字或字母或特殊字符'))
                } else if(value && /\s/.test(value)){
                    callback(new Error(LANG['请输入数字或字母或特殊字符，不能输入空格!'] || '请输入数字或字母或特殊字符，不能输入空格'))
                } else {
                    callback()
                }
            }
            var validatePostcodes = (rule, value, callback)=>{
//                if(value &&  !/^[1-9][0-9]$/.test(value)){
                if(value && !/^[0-9]*$/.test(value)){
                    callback(new Error(LANG['请输入正确的邮编号码，只能输入数字!'] || '请输入正确的邮编号码，只能输入数字'))
                } else if(value && /\s/.test(value)){
                    callback(new Error(LANG['请输入正确的邮编号码，不能输入空格!'] || '请输入正确的邮编号码，不能输入空格'))
                } else {
                    callback()
                }
            }
            return {
                LANG,
                //基本资料
                baseFrom: {
                    // username: "",
                    // id: 0,
                    // wallet_id: "",
                    // level: "",
                    // name: "",
                    // password: "",
                    // wpassword: "",
                    // user_type: "",
                    // user_level: "",
                    // reg_time: "",
                    // login_time: "",
                    // reg_ip: "",
                    // login_ip: "",
                    // reg_source: "",
                    // agent: "",
                    // email: "",
                    // email_verify: false,
                    // mobile:"",
                    // qq: "",
                    // wechat: "",
                    // country: "",
                    // province: "",
                    // nationality: "",
                    // currency: "",
                    // language: "",
                    // birthday: "",
                    // sex: "",
                    // security_q: "",
                    // addr: "",
                    // security_a: "",
                    // note: ""
                },
                baseFromSafe: {},
                baseRules: {
                    email: [{validator: validateEmail,trigger: 'blur,change'}],
                    truename: [
                        {validator: validateHans,trigger: 'blur,change'}
                        ],
                    mobile: [{validator: validateMobile,trigger: 'blur,change'}],
                    qq: [{validator: validateNumber,trigger: 'blur,change'}],
                    skype: [{validator: validateWeixinSkype,trigger: 'blur,change'}],
                    weixin: [{validator: validateWeixinSkype,trigger: 'blur,change'}],
                    postcode: [{validator: validatePostcodes,trigger: 'blur,change'}]
                },
                //标签弹窗
                tagsVisible: false,
                //会员标签列表
                userTagsList: [],
                //会员层级
                MemberLevelList: [],
                tagsForm: {
                    id: -1,
                    formUsername: "",
                    userTags: ""
                },
                tagsRules: {
                    userTags: [{
                        required: true,
                        message: LANG['请选择用户标签'] || '请选择用户标签',
                        trigger: 'change'
                    }]
                },
                //密码重置
                passTitle: "",
                passSelect: '',
                passVisible: false,
                passForm: {
                    id: -1,
                    password: "",
                    password1: "",
                    displayPass: null
                },
                passRules: {
                    password: [{
                        required: true,
                        message: LANG['请输入确认密码'] || '请输入确认密码',
                        trigger: 'blur'
                    },
                        {
                            validator: validatePass1,
                            trigger: 'blur'
                        }
                    ],
                    password1: [{
                        required: true,
                        message: LANG['请输入确认密码'] || '请输入确认密码',
                        trigger: 'blur'
                    },
                        {
                            validator: validatePass2,
                            trigger: 'blur'
                        }
                    ]
                },
                // 调级弹窗
                // adjustmentVisible: false,
                // adjustmentForm: {
                //     MemberLevel: ""
                // },
                // adjustmentRules: {
                //     MemberLevel: [{
                //         required: true,
                //         message: LANG['请选择会员等级'] || '请选择会员等级',
                //         trigger: 'change'
                //     }]
                // },
                //添加调整代理弹窗
                // agentVisible: false,
                // agentForm: {
                //     addAgent: "",
                // },
                // agentRules: {
                //     addAgent: [{
                //         required: true,
                //         message: LANG['请输入代理用户名'] || '请输入代理用户名',
                //         trigger: 'change'
                //     }]
                // },
                // 当前修改密码弹窗的窗台 true为登陆密码 false 为取款密码
                currentPasswordStatus: true,
                loading: false,
                // 安全问题列表
                questionList: [],
                // 权限修改权限
                permissions: {
                    true_name: false,
                    qq: false,
                    weixin: false,
                    email: false,
                    mobile: false,
                    address: false,
                    birth: false,
                    answer: false,
                    gender: false,
                    idcard: false,
                    skype: false,
                    nationality: false,
                    language: false,
                    question_id:false,
                    comment:false,
                }
            }
        },
        props: {
            id: Number
        },
        components: {},
        methods: {
            init() {
                this.loading = true;
                //取用户基础数据

				this.$.autoAjax('get',URL.api + ROUTES.GET.user.newInfo+"?id="+parseInt(this.id) + "&type=base", '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							this.baseFrom = res.data;
							this.tagsForm.formUsername = res.data.username;
							this.baseFromSafe = res.data.safe;
						}
						this.loading = false;
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
            },
            // 获取选择列表所需列表
            getSelectList() {
                let userTagsList = this.userTagsList;
                //取标签数据
				this.$.autoAjax('get',URL.api + ROUTES.GET.user.labels, '', {
					ok: (res) => {
						if (res.state == 0) {
							let model = res.data
							for (let i in model) {
								userTagsList.push({
									"label": model[i].title,
									"value": model[i].id
								});
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
            // 获取安全问题
            getQuestionList() {
                this.questionList = [];

				this.$.autoAjax('get',URL.api + '/user/info/question', '', {
					ok: (res) => {
						if (res.state == 0) {
							let model = res.data
							for (let i in model) {
								this.questionList.push({
									"label": model[i].question,
									"value": model[i].id
								});
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
            //添加标签
            addTags() {
                this.tagsVisible = true;
            },
            //保存标签
            saveTags() {

				this.$.autoAjax('put',URL.api + ROUTES.PUT.user.label.bind + "?id=" + parseInt(this.id, 10),{"tag": parseInt(this.tagsForm.userTags, 10)}, {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							this.$message.success(this.LANG['恭喜您，会员打标签成功！'] || '恭喜您，会员打标签成功！');
							this.tagsVisible = false;
							this.init();
						} else if (res.state === 4001) {
							this.$message.error(LANG["请至少选择一个标签！"] || "请至少选择一个标签！");
						} else {
							this.$message.error(this.LANG['会员打标签失败，请稍后重试！'] || '会员打标签失败，请稍后重试！');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
            },
            //重置登录密码
            resetLoginPass() {
                this.passVisible = true;
                this.passTitle = this.LANG['重置登录密码'] || '重置登录密码';
                this.passSelect = '1'
                this.currentPasswordStatus = true;

            },
            //重置取款密码
            resetWithdrawPass() {
                this.passVisible = true
                this.passSelect = '2'
                this.passTitle = this.LANG['重置取款密码'] || '重置取款密码'
                this.currentPasswordStatus = false;
            },
            //调整会员等级
            adjustmentGrade() {
                let model = this.MemberLevelList;
                let level = this.baseFrom['user_level'];
                for (let i in model) {
                    if (model[i].label == level) {
                        this.adjustmentForm.MemberLevel = model[i].value;
                    }
                }
                this.adjustmentVisible = true;
            },
            //保存密码
            savePass() {
                let pass = this.passForm.password;
                this.$refs.passForm.validate((valid) => {
                    if (valid) {
                        //如果是保存登录密码
                        if ( this.passSelect == '1') {
							this.$.autoAjax('patch',URL.api + ROUTES.PATCH.user.info.loginword + "?id=" + parseInt(this.id),{"pw-new": this.passForm.password},{
								ok: (res) => {
									if (res.state == 0 && res.data) {
										this.$message.success(this.LANG['恭喜您，登录密码修改成功！'] || '恭喜您，登录密码修改成功！');
										this.tagsVisible = false;
										this.baseFrom['login_pwd'] = pass;
									} else {
										this.$message.error(this.LANG['登录密码修改失败，请稍后重试！'] || '登录密码修改失败，请稍后重试！');
									}
								},
								p: () => {
								},
								error: e => {
									console.log(e)
								}
							})
                        }
                        if ( this.passSelect == '2') {
                            console.log('hahahha---')
							this.$.autoAjax('patch',URL.api + ROUTES.PATCH.user.info.password + "?id=" + parseInt(this.id), {"pw-new": this.passForm.password}, {
								ok: (res) => {
									if (res.state == 0 && res.data) {
										this.$message.success(this.LANG['恭喜您，提款密码修改成功！'] || '恭喜您，提款密码修改成功！');
										this.baseFrom['withdraw_pwd'] = pass;
									} else {
										this.$message.error(this.LANG['提款密码修改失败，请稍后重试！'] || '提款密码修改失败，请稍后重试！');
									}
								},
								p: () => {
								},
								error: e => {
									console.log(e)
								}
							})
                        }
                        this.resetPassForm();
                    }
                })
            },
            resetPassForm() {
                this.$refs.passForm.resetFields();
                this.passVisible = false;
            },
            //保存基础数据
            saveModel() {
                let obj = {
                    comment: this.baseFrom["comment"]
                };
                // 判断权限没有权限则不传该参数
                // 判断当前用户的会员修改真实姓名权限
                if (sessionStorage.true_name === "true") { obj.name = this.baseFrom["truename"]; }
                // 判断当前用户会员联系信息的修改权限
                if (sessionStorage.nationality === "true") { obj.postcode = this.baseFrom["postcode"]; }
                if (sessionStorage.address === "true") { obj.address = this.baseFrom["address"]; }
                if (sessionStorage.mobile === "true") { obj.mobile = this.baseFrom["mobile"]; }
                if (sessionStorage.qq === "true") { obj.qq = this.baseFrom["qq"];}
                if (sessionStorage.weixin === "true") { obj.weixin = this.baseFrom["weixin"]; }
                if (sessionStorage.idcard === "true") { obj.idcard = this.baseFrom["idcard"]; }
                if (sessionStorage.answer === "true") {
                    obj.qid = this.baseFrom["question_id"];
                    obj.answer = this.baseFrom["answer"];
                }
                if (sessionStorage.skype === "true") { obj.skype = this.baseFrom["skype"]; }
                if (sessionStorage.email === "true") { obj.email = this.baseFrom["email"]; }
                //  PATCH /user/info/base/?id\d
                this.$refs.baseFrom.validate((valid) => {
                    if (valid) {
                        this.loading = true;
						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.user.info.base + "?id=" + parseInt(this.id),obj, {
							ok: (res) => {
								if (res.state == 0 && res.data) {
									this.$message.success(this.LANG['恭喜您，会员资料修改成功！'] || '恭喜您，会员资料修改成功！');
									// _this.baseFrom[''] = addAgent;
								} else if(res.state == 405){
									this.$message.error(this.LANG['会员资料修改失败,权限不足'] || '会员资料修改失败,权限不足');
								}else{
									this.$message.error(this.LANG[res.msg] || res.msg);
								}
								this.init();
								this.loading = false;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                    }

                })
            },
            //手机验证
            validatorPhon(rule, value, callback) {
                if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(value)) {
                    callback(new Error(this.LANG["请输入合法的手机号码"] || "请输入合法的手机号码"));
                } else {
                    callback()
                }
            },
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init();
            this.getSelectList();
            this.getQuestionList();
            //设置修改权限
            if (sessionStorage.true_name === "false") {this.permissions.true_name = true; }
            if (sessionStorage.idcard === "false") { this.permissions.idcard = true; }
            if (sessionStorage.mobile === "false") { this.permissions.mobile = true; }
            if (sessionStorage.qq === "false") { this.permissions.qq = true; }
            if (sessionStorage.weixin === "false") { this.permissions.weixin = true; }
            if (sessionStorage.answer === "false") { this.permissions.answer = true; }
            if (sessionStorage.skype === "false") { this.permissions.skype = true; }
            if (sessionStorage.address === "false") { this.permissions.address = true; }
            if (sessionStorage.email === "false") { this.permissions.email = true; }
            if (sessionStorage.nationality === "false") { this.permissions.nationality = true; }
        }
    }
</script>

<style scoped>
    #basicInformation {
        padding: 20px;
    }
    #basicInformation .title {
        text-align: center;
        width: 100%;
        font-weight: 800;
        font-size: 18px;
    }

    #basicInformation .border1 {
        border: 1px solid #ccc;
        padding: 3px;
    }

    #basicInformation .border1 .item {
        border-bottom: 1px solid #ccc;
        box-sizing: border-box;
        height:64px;padding:15px 0;
    }
    #basicInformation .border1 .itemtextarea {
        height: 90px
    }

    #basicInformation .border1 .itemtextarea .el-form-item__label {
        height: 70px
    }

    #basicInformation .border1 .title {
        text-align: center;
        width: 100%;
        font-weight: 800;
        font-size: 18px;
    }
    #basicInformation .el-form-item__label {
        background-color: rgba(233, 233, 233, 0.7);
        width: 100%
    }
    #basicInformation .border1 .el-form-item__content span {
        margin-left: 15px
    }

    #basicInformation .border1 .el-form-item__content .el-button {
        margin-left: 15px
    }

    #basicInformation .border1 .el-form-item__content .el-button span {
        margin: auto;
    }

    #basicInformation .border1 .el-input__inner {
        height: 30px;
        margin-left: 15px
    }

    #basicInformation .border1 .el-form-item__content .el-input {
        width: 60%;
    }

    #basicInformation .border1 .el-form-item__content .el-textarea {
        margin: 3px 0 3px 15px;
        width: 90%
    }

    #basicInformation .border1{
        border: 1px solid #ccc;
        padding:0 10px;
    }

    /*#basicInformation .el-dialog__body .el-form-item {*/
        /*margin-bottom: 20px*/
    /*}*/

    #basicInformation .hidden {
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    #basicInformation .splspan {
        display: inline-block;
        position: absolute;
        width: 200px;
        height: 23px;
        top: 6.5px;
        line-height: 23px;
    }
</style>
