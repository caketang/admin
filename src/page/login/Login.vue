<template>
    <div id="Login" v-show="toggle" class="w100" ref="login">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-ruleForm longin-box"
                 onSubmit="return false;">
            <p class="title"><i class="iconfont icon-37750 mr10"
                                style="font-size:32px;vertical-align: bottom;"></i><span>{{title}}</span></p>
            <el-form-item prop="username" v-if="!validate">
                <el-input type="text" v-model="loginForm.username" auto-complete="off"
                          :placeholder="LANG['请输入用户名'] || '请输入用户名'"></el-input>
            </el-form-item>
            <el-form-item prop="password" v-if="!validate">
                <div class="el-input">
                    <input autocomplete="off" v-model="loginForm.password" :placeholder="LANG['请输入密码'] || '请输入密码'"
                           type="password" rows="2" validateevent="true" class="el-input__inner" @keyup.13="doLogin">
                </div>
            </el-form-item>
            <el-form-item prop="checked" v-if="!validate">
                <el-checkbox v-model="loginForm.checked" style="color:#fff;">{{LANG['记住密码'] || '记住密码'}}</el-checkbox>
            </el-form-item>
            <el-button type="primary" round class="formSave" @click="doLogin" v-if="!validate" :loading="loadingOne">
                {{LANG['登 录'] || '登 录'}}
            </el-button>
        </el-form>
        <errorcode></errorcode>
    </div>
</template>
<script type="text/ecmascript-6">
    import errorcode from './getErrorCode.vue'
    import uuid from 'uuidjs'

    export default {
        data() {
            return {
                URLROUTERS,
                uuid,
                LANG,
                loginForm: {
                    username: "",
                    password: "",
                    code: "",
                    checked: true,
                    uid: 0,
                    fid: 0,
                },
                rules: {
                    username: [
                        {required: true, message: LANG['请输入用户名'] || '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: LANG['请输入密码'] || '请输入密码', trigger: "blur"},
                        {min: 3, max: 10, message: LANG['密码在3位至10位'] || '密码在3位至10位', trigger: "blur"}
                    ],
//                    code:[
//                        {required: true, message: LANG['请输入M令牌的验证码'] || '请输入M令牌的验证码', trigger: "blur"},
//                        {min: 6, max: 6, message: LANG['请输入6位验证码'] || '请输入6位验证码', trigger: "blur"}]
                },
                //是否需要验证
                validate: false,
                dialogVisible: false,
                binding: true,
                loadingOne: false,
//                loadingTwo: false,
                loadingThree: false,
                toggle: true,
                optStaus: '',
                sign: "",
                mac: "",
                title: URL.title || '厅主后台登录'
            }
        },
        methods: {
            init() {
                // 千万不能删除下面内容，总平台跳转的。
                if (typeof(JUMPCONFIG) != "undefined" && JUMPCONFIG.path) {
                    this.$router.push({'path': "/authorization"});
                }
                if (!localStorage.uuid) {
                    SETSTORAGE('uuid', uuid.generate() || '');
                }
                if (this.loginForm.checked) {
                    this.loginForm.username = localStorage.username;
                    this.loginForm.password = localStorage.password;
                }
                ;
                this.validate = false;
                this.binding = true;
                $('#Login .longin-box').show(800);
            },
            doLogin() {
                var _this = this;
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.$.autoAjax('post', URL.api + ROUTES.POST.admin.login.one, {
                            "username": _this.loginForm.username,
                            "password": _this.loginForm.password, "mac": localStorage.uuid
                        }, {
                            ok: res => {
                                if (res.state == 0 && res.data) {
                                    if (_this.loginForm.checked) {
                                        SETSTORAGE('username', _this.loginForm.username);
                                        SETSTORAGE('password', _this.loginForm.password);
                                    } else {
                                        SETSTORAGE('username', '');
                                        SETSTORAGE('password', '');
                                    }
                                    _this.loginForm.uid = parseInt(res.data.uid ? res.data.uid : 0);
                                    _this.sign = res.data.sign ? res.data.sign : '';
                                    //二次请求
                                    this.$.autoAjax('post', URL.api + ROUTES.POST.admin.login.two, {
                                        "uid": this.loginForm.uid ? this.loginForm.uid : 0,
                                        "code": '0000',
                                        "fid": _this.loginForm.fid,
                                        "mac": localStorage.uuid,
                                        "sign": _this.sign
                                    }, {
                                        ok: resTwo => {
                                            if (resTwo.state == 0 && resTwo.data) {
                                                let model = resTwo.data;
                                                sessionStorage.user = JSON.stringify(model.list);
                                                sessionStorage.userId = parseInt(model.list.id) || -1;
                                                sessionStorage.userName = model.list.username || "admin";
                                                sessionStorage.routers = JSON.stringify(model.route);
                                                sessionStorage.timeOut = model.expire ? parseInt(model.expire) * 1000 : 0;
                                                sessionStorage.timeOutString = model.expire ? new Date(parseInt(model.expire) * 1000) : 0;
                                                sessionStorage.refresh_token = model.refresh_token;
                                                //日工资分成比例
                                                sessionStorage.site_wage_max = model.site.site_wage_max.toString();
                                                SETSESSIONSTORAGE('token', model.token);
                                                SETSESSIONSTORAGE('stsToken', model.stsToken);
                                                // 当前用户的操作权限
                                                sessionStorage.role = model.list.role;
                                                this.setPermissions(model.member_control);
                                                let routes = model.route || [];
                                                if (routes.length > 0) {
                                                    sessionStorage.routes = JSON.stringify(routes);
                                                    this.getRouters(routes);
                                                }
                                                global.URLCONFIG = {
                                                    emulateJson: true,
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "Authorization": sessionStorage.stsToken
                                                    },
                                                    validateStatus: function (status) {
                                                        return status;
                                                    }
                                                };
                                                _this.toggle = false;
                                                this.$notify.success({
                                                    title: '登录成功',
                                                    message: '恭喜你登录成功！',
                                                    offset: 40,
                                                    duration: 2000
                                                });
                                                //请求资源站
                                                this.$.autoAjax('post', URL.api + ROUTES.POST.admin.login.stsToken,'', {
                                                    ok:v => {
                                                        if(v.state === 0 && v.data){
//                                                            URL.rpi = v.data.api_host + '/sts/file/upload'
                                                            SETSESSIONSTORAGE('stsToken', v.data.stsToken)
                                                            SETSESSIONSTORAGE('URL_RPI', v.data.api_host + '/sts/file/upload')
                                                        }else{
                                                            _this.$message.error((LANG["获取资源站授权失败"] || "获取资源站授权失败"));
                                                        }
                                                    }
                                                })
                                                _this.$router.push({path: '/index'});
                                            } else if (resTwo.msg) {
                                                _this.$message.error(resTwo.msg + "," + (LANG["登录失败，请稍后重试！"] || "登录失败，请稍后重试！"));
                                            }
                                        },
                                        p: () => {
                                        },
                                        error: e => {
                                            console.log(e)
                                        }
                                    })
                                }
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
            // 获取路由对象
            getRouters($router) {
                SETSESSIONSTORAGE('deposit', 'false');
                SETSESSIONSTORAGE('withdrawals', 'false');
                SETSESSIONSTORAGE('rebate', 'false');
                $router.forEach((v) => {
                    this.setRoutesList(v);
                    if (v.children && v.children.length > 0) {
                        v.children.forEach((val) => {
                            this.setRoutesList(val, 'two');
                        })
                    }
                })
            },
            // 跟据路由写值
            setRoutesList(obj, str) {
                let routes = URLROUTERS;
                for (let j = 0; j < routes.length; j++) {
                    let list = obj.action || [];
                    routes[j].action = [];
                    if (obj.path === '/offlineReceipts' && obj.action.length > 0) {
                        SETSESSIONSTORAGE('deposit', 'true');
                    }
                    if (obj.path === '/memberGetOut' && obj.action.length > 0) {
                        SETSESSIONSTORAGE('withdrawals', 'true');
                    }
                    if (obj.path === '/apply' && obj.action.length > 0) {
                        SETSESSIONSTORAGE('rebate', 'true');
                    }
                    if (obj.path === routes[j].path && obj.name === routes[j].name) {
                        list.forEach((vOne) => {
                            routes[j].action.push(vOne);
                        });
                    } else if (routes[j].children && routes[j].children.length > 0 && str === 'two') {
                        for (let k = 0; k < routes[j].children.length; k++) {
                            let listTwo = obj.action || [];
                            routes[j].children[k].action = [];
                            if ((obj.path) === routes[j].children[k].path) {
                                listTwo.forEach((vTwo) => {
                                    routes[j].children[k].action.push(vTwo);
                                })
                            }
                        }
                    }
                }
//                routes.forEach((val)=>{
//                    if((obj.path) === val.path && obj.name === val.name){
//                        let list = obj.action || [];
//                        val.action = [];
//                        list.forEach((vOne)=>{
//                            val.action.push(vOne);
//                        });
//                    }else if(val.children && val.children.length > 0 && str === 'two'){
//                        val.children.forEach((value)=>{
//                            if((obj.path) === value.path){
//                                let listTwo = obj.action || [];
//                                value.action = [];
//                                listTwo.forEach((vTwo)=>{
//                                    value.action.push(vTwo);
//                                })
//                            }
//                        })
//                    }
//                })
            },
            //返回重登录
            returnLogin() {
                this.validate = false;
                this.loadingOne = false;
                this.loadingTwo = false;
                this.loadingThree = false;
                this.binding = true;
            },
            // 设置权限
            setPermissions(member_control) {
                sessionStorage.true_name = member_control.true_name;
                sessionStorage.bank_card = member_control.bank_card;
                sessionStorage.account_disabled = member_control.account_disabled;
                sessionStorage.account_black = member_control.account_black;
                sessionStorage.account_forbidden = member_control.account_forbidden;
                sessionStorage.account_kick = member_control.account_kick;
                sessionStorage.account_limit = member_control.account_limit;
                sessionStorage.qq = member_control.qq;
                sessionStorage.email = member_control.email;
                sessionStorage.mobile = member_control.mobile;
                sessionStorage.address = member_control.address;
                sessionStorage.birth = member_control.birth;
                sessionStorage.answer = member_control.answer;
                sessionStorage.gender = member_control.gender;
                sessionStorage.idcard = member_control.idcard;
                sessionStorage.weixin = member_control.weixin;
                sessionStorage.skype = member_control.skype;
                sessionStorage.nationality = member_control.nationality;
                sessionStorage.language = member_control.language;
                sessionStorage.active_applys_export = member_control.active_applys_export;
                sessionStorage.deposit_offlines_export = member_control.deposit_offlines_export;
                sessionStorage.deposit_onlines_export = member_control.deposit_onlines_export;
                sessionStorage.user_withdraws_export = member_control.user_withdraws_export;
                sessionStorage.valid_user_export = member_control.valid_user_export;
                sessionStorage.rebate_export = member_control.rebate_export;
                sessionStorage.rebate_details_export = member_control.rebate_details_export;
            }
        },
        components: {
            errorcode: errorcode
        },
        mounted() {
            this.init();
        },
        beforeDestroy() {
            $(this.$refs.login).remove();
        }
    }
</script>
<style>
    #Login {
        min-width: 800px;
        height: 100%;
        min-height: 720px;
        position: absolute;
        top: 0;
        background: #00a7d0;
        background: -webkit-linear-gradient(left top, rgba(92, 60, 69, 0.8), rgba(27, 48, 84, 0.8)); /* Safari*/
        background: -moz-linear-gradient(bottom right, rgba(92, 60, 69, 0.8), rgba(27, 48, 84, 0.8)); /* Firefox*/
        background: linear-gradient(to bottom right, rgba(92, 60, 69, 0.8), rgba(27, 48, 84, 0.8));
    }

    #Login .longin-box {
        display: none;
        position: relative;
        top: 25%;
        width: 20%;
        max-width: 500px;
        min-width: 300px;
        margin: 0 auto;

        background-clip: padding-box;
    }

    #Login .longin-box .el-form-item {
        width: 80%;
        margin: 0 auto;
        margin-top: 20px;
    }

    #Login .longin-box .el-form-item input {
        background: rgba(43, 41, 58, 0.5);
        color: #fff;
        border: 1px solid rgba(43, 41, 58, 0.7);
    }

    #Login .longin-box .el-form-item input:focus {
        background: #F9FAFC;
        color: #1F2D3D;
    }

    #Login .longin-box .el-form-item img {
        vertical-align: middle;
        border: none;
    }

    #Login .longin-box button {
        width: 80%;
        margin: 0 auto;
        margin-left: 10%;
        font-size: 16px;
    }

    #Login .title {
        line-height: 60px;
        color: #fff;
        font-size: 26px;
        text-align: center;
    }

    #Login .wd150 {
        text-align: center;
        margin-bottom: 30px;
    }

    #Login .name h3 {
        color: #fff;
        font-size: 24px;
    }

    #Login .name h3 span {
        color: #fff;
        font-size: 18px;
    }

    /*#Login  #box{margin-left:75px;text-align: center;}*/
    #Login .wd150 h1 {
        color: #ffffff;
    }

    #Login #box img {
        display: inline;
    }

    #Login .formreturn {
        display: block;
        color: #fff;
        font-size: 16px;
        margin-left: 75%;
    }

    #Login .formreturn:hover {
        color: #45b1ed;
    }
</style>
