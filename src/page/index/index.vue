<template>
    <el-row class="pcddMain w100" id="home" v-loading="loading">
        <el-col :span="24" v-if="showMenu" class="header"
                :class="{left_header:menu_type =='left',top_header:menu_type =='top'}">
            <el-col :span="4" class="logo" :class="{left_menu_logo:menu_type =='left',top_menu_logo:menu_type =='top'}">
                <a href="javascript:;" @click="goIndex">
                    <img :src="logoUrl" width="auto" height="40px" class="logoImg" v-if="logoUrl">
                    <i class="iconfont ml20 font24 icon-37750 font28" v-else></i>
                    <!--:class="logodefault" -->
                    <strong @click="goIndex">{{LANG[URL.title] || URL.title}}</strong>
                </a>
            </el-col>
            <div class="header_top_nav">
                <div class="headNav">
                    <transition name="fade">
                        <div class="settingWrap" v-settingWrapHeight v-show="isShowSettingWrap">
                            <div class="title">{{LANG['导航设置'] || '导航设置'}}</div>
                            <div class="sound-content">
                                <!--{{LANG['导航菜单'] || '导航菜单'}}-->
                                <el-radio-group v-model="menu_type" @change="change_menu_type">
                                    <div>
                                        <el-radio label="left">{{LANG['左侧导航'] || '左侧导航'}}</el-radio>
                                    </div>
                                    <div>
                                        <el-radio label="top">{{LANG['顶部导航'] || '顶部导航'}}</el-radio>
                                    </div>
                                </el-radio-group>
                            </div>
                            <div class="title">{{LANG['声音设置'] || '声音设置'}}</div>
                            <div class="sound-content sound-content-switch">
                                <p>
                                    {{LANG['消息提示'] || '消息提示'}}
                                    <el-switch v-model="isOpenSound_message" @change="isOpenSoundFn_message"
                                               class="volSwitch"></el-switch>
                                </p>
                                <p>
                                    {{LANG['入款提示'] || '入款提示'}}
                                    <el-switch v-model="isOpenSound_line" @change="isOpenSoundFn_line"
                                               class="volSwitch"></el-switch>
                                </p>
                                <p>
                                    {{LANG['出款提示'] || '出款提示'}}
                                    <el-switch v-model="isOpenSound_out" @change="isOpenSoundFn_out"
                                               class="volSwitch"></el-switch>
                                </p>
                                <p>
                                    {{LANG['新优惠申请提示'] || '新优惠申请提示'}}
                                    <el-switch v-model="isOpenSound_rebate " @change="isOpenSoundFn_rebate"
                                               class="volSwitch"></el-switch>
                                </p>
                            </div>
                            <div class="title">{{LANG['语言设置'] || '语言设置'}}</div>
                            <div class="langeage-content">
                                <langeage></langeage>
                            </div>
                            <div class="title">{{LANG['主题设置'] || '主题设置'}}</div>
                            <div class="theme-content">
                                <theme @change-theme="getTheme"></theme>
                            </div>
                        </div>
                    </transition>
                    <ul style="float:right">
                        <li>
                            <el-dropdown trigger="click" class="dropdown" @command="handleCommand">
                                <a href="javascript:;" class="el-dropdown-link">
                                    <span>{{userName}}</span>
                                    <i class="el-icon-caret-bottom el-icon--right" style="font-size:12px"></i>
                                </a>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item v-text="LANG['修改密码'] || '修改密码'"
                                                      command="update"></el-dropdown-item>
                                    <el-dropdown-item v-text="LANG['退出'] || '退出'" command="exit"></el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </li>
                        <li @click="settingClick($event)">
                            <span style="font-size:14px;cursor:pointer">{{LANG['设置'] || '设置'}}</span>
                        </li>
                    </ul>
                    <msg-notification></msg-notification>
                    <ul>
                        <li class="ml20">{{time}}</li>
                        <li class="ml20">{{timeTxt}}</li>
                    </ul>
                </div>
            </div>
            <div class="header_top_menu" v-if="menu_type == 'top' && showMenu">
                <topMenu class="top_menu" :menu="navSwitch"></topMenu>
            </div>

        </el-col>
        <el-col :span="24" class="main">
            <table cellspacing=0   cellpadding=0   class="container_tabel w100">
                <tr>
                    <!--左侧导航栏-->
                    <td v-if="menu_type == 'left' && showMenu" class="navLeft" valign="top" :width="parTd">
                        <!-- :class="{'isMinNav': !isHide}"-->
                        <leftMenu :menu="navSwitch"></leftMenu>
                    </td>
                    <td valign="top" class="contRight w100 "
                        :class="{top_contRight: (menu_type == 'top' && showMenu),left_contRight: (menu_type =='left' && showMenu),pd10: !showMenu}">
                        <!--右侧内容模块-->
                        <el-row>
                            <el-col class="navTitle" :span="24" v-if="$route.name !=='首页' && $route.name !== 'error'">
                                <!-- 导航标题 -->
                                <strong> | </strong><span>{{LANG[$route.name] || $route.name}}</span>
                                <el-tooltip class="item" effect="light" content="添加到快捷菜单" placement="right">
                                    <a href="javascript:;" class="ml10" @click="addQuickMenu"><i
                                        class="iconfont font16 icon-shoucangjia" style="color:#ff8040;"
                                        v-if="showAddMenu"></i><i class="iconfont font16 icon-shoucang1"
                                                                  style="color:#ff8040;" v-else></i></a>
                                </el-tooltip>
                                <!--<a :href="$route.path" target="_blank" class="">{{LANG['新窗口打开本页'] || '新窗口打开本页'}}</a>-->
                                <el-tooltip class="item" effect="light" content="新窗口打开此页" placement="right">

                                    <a :href="$route.path+'?open=1'" target="_blank" @click="addNewWin()">
                                        <i class="iconfont font16 icon-dakaixinchuangkou"></i>
                                    </a>
                                </el-tooltip>
                            </el-col>
                            <el-col :span="24" style="box-sizing: border-box;" class="content">
                                <!-- router页面 -->
                                <transition name="fade">
                                    <keep-alive>
                                        <router-view></router-view>
                                    </keep-alive>
                                </transition>
                            </el-col>
                        </el-row>
                    </td>
                </tr>
            </table>
        </el-col>
        <el-col>
            <formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="formConfig" :type="type"
                      :labelWidth="labelWidth" :isEdit="isEdit" @get-form="getForm" size="small"></formEdit>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfigLogin" @do-confirm="doShowLogin"></confirm>
        </el-col>
    </el-row>
</template>
<script type="text/ecmascript-6">
    import leftMenu from '../../components/leftMenu.vue';
    import topMenu from '../../components/topMenu.vue';
    import langeage from '../../components/language.vue';
    import formEdit from '../../components/formEdit.vue';
    import confirm from '../../components/confirm.vue';
    import msgNotification from './messageNotification.vue';
    import theme from '../../components/theme.vue';
    import ElCol from "element-ui/packages/col/src/col";

    var selTheme = '';
    //require('./themeMode/default.css');//默认皮肤文件;
    export default {
        data() {
            return {
                LANG,
                URL,
                userName: "",
                navSwitch: false,
                sysName: '后台管理系统',
                theme: '主题',
                //管理后台的LOGO的地址
                logoUrl: '',
//                logodefault:URL.logoIcon,
                logoImgType: true,
                //音量切换
                command: true,
                currentPathNameParent: '',
                dialogVisible: false,
                parTd: '70',
                isHide: true,
                //修改密码
                formConfig: [
                    {"prop": "old-pw", "value": "", "type": "password", "label": "旧密码", "rules": [{"require": true}]},
                    {"prop": "password", "value": "", "type": "password", "label": "密码", "rules": [{"require": true}]},
                    {
                        "prop": "repeatPassword",
                        "value": "",
                        "label": "确认密码",
                        "type": "repeatPassword",
                        "rules": [{"require": true}]
                    }],
                type: "default",
                formTitel: "",
                labelWidth: "90px",
                formVisible: {
                    state: false
                },
                isEdit: {},
                //导航时间
                time: null,
                //时区
                timeTxt: null,
                //消息总数
                message: null,
                //消息线上存款
                online_deposit: null,
                //消息线下存款
                offline_deposit: null,
                //消息提款
                withdraw: null,
                flag: false,
                //表格消息
                tableText: Array,
                //主题皮肤
                cssUrl: '',
                //登出确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                loading: false,
                isShowSettingWrap: false,
                isOpenSound_message: true,
                isOpenSound_line: true,
                isOpenSound_out: true,
                isOpenSound_rebate: true,
                showAddMenu: false,
                //导航状态开关
                menu_type: "left",
                confirmConfigLogin: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                doConfirmLogin: false,
                documentTitle: '',
                showMenu: true
            }
        },
        components: {
            ElCol,
            leftMenu: leftMenu,
            langeage: langeage,
            formEdit: formEdit,
            confirm: confirm,
            msgNotification: msgNotification,
            theme: theme,
            topMenu: topMenu
        },
        watch: {
            '$route'(to, from) {//监听路由改变
                this.currentPathName = to.name;
                this.showAddMenu = false;
                for (let k in QUICKCD) {
                    if (to.path === k) {
                        this.showAddMenu = true;
                    }
                }
                //清除定时刷新
                if (to.name != "首页") {
                    window.clearInterval(window.TIME1);
                }
            }
        },
        methods: {
            //新增窗口修改窗口title
            addNewWin() {
                window.localStorage['openNewWindow'] = 'openNewWindow';
            },
            init() {
                if (this.$route.query && this.$route.query.open) {
                    this.showMenu = false;
                } else {
                    this.showMenu = true;
                }
                if (typeof(localStorage.getItem('sound')) === "undefined") {
                    localStorage.setItem('sound', 'true');
                }
                this.logoUrl = URL.logoImg ? (URL.img + URL.logoImg) : '';
                this.menu_type = localStorage.menu_type || "left";
                this.userName = sessionStorage.userName || "";
                this.isOpenSound_message = localStorage.sound_message === 'true' ? true : false;
                this.isOpenSound_line = localStorage.sound_line === 'true' ? true : false;
                this.isOpenSound_out = localStorage.sound_out === 'true' ? true : false;
                this.isOpenSound_rebate = localStorage.sound_rebate === 'true' ? true : false;
                let _this = this;
                if (!sessionStorage.sysTime) {
                    sessionStorage.sysTime = FORMATDATEPICKER(new Date());
                }
                if (sessionStorage.token && sessionStorage.userName) {
                    global.URLCONFIG = {
                        emulateJson: true,
                        headers: {
                            "Content-Type": "application/json",
//                            "Authorization": "Bearer " + sessionStorage.token
                            "Authorization": sessionStorage.token
                        },
                        validateStatus: function (status) {
                            return status;
                        }
                    };
                    if (sessionStorage.langkey) {
                        URLCONFIG.headers['Accept-Language'] = LANGHEAD[sessionStorage.langkey];
                    }
                } else {
                    this.$message(LANG['登录超时，请重新登录！'] || '登录超时，请重新登录！');
                    this.$router.push('/login');
                    return;
                }
                if (sessionStorage.routers) {
                    let temp = JSON.parse(sessionStorage.routers) || [];
                    this.getRouters(temp);
                }
                this.getSysTime();
                this.navSwitch = false;
                this.command = true;
                //检测localstorage是否有openNewWindow这个值 如果有就修改窗口title
                this.documentTitle = document.title;
                if (this.$route.query.open == '1') {
                    document.title = this.$route.name;
                    window.localStorage.removeItem('openNewWindow');
                } else {
                    document.title = this.documentTitle;
                }
            },
            //取得导航时间
            getSysTime() {
                let _this = this;
                if (this.$route.path !== '/login') {
                    this.$.autoAjax('get', URL.api + ROUTES.GET.timezone, '', {
                        ok: (res) => {
                            if (res.state == 0 && res.data) {
                                //取得时区
                                let t = res.data.time || "";
                                let zone = res.data.zone || "";
                                let str = res.data.p || "";
                                t = t.replace(/\+.*$/, '').replace(/T/, ' ');
                                let now = (new Date(t)).valueOf();
                                clearInterval(window.TIMEZONE);
                                window.TIMEZONE = setInterval(function () {
                                    now += 1000;
                                    _this.time = zone + " ( " + str + " ) " + _this.getMyDate(now);
                                    sessionStorage.dateTime = now.toString();
                                    sessionStorage.sysTime = FORMATDATEPICKER(now);
                                    sessionStorage.dateTimeStart = FORMATDATEPICKER(now) + ' 00:00:00';
                                    sessionStorage.dateTimeEnd = FORMATDATEPICKER(now) + ' 23:59:59';
                                }, 1000)
                            }
                        },
                        p: (p) => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                }

            },
            change_menu_type(i) {
                this.menu_type = i;
                localStorage.menu_type = i;
                location.reload(true);
            },
            isOpenSoundFn_message(v) {
                localStorage.setItem('sound_message', v.toString());
            },
            isOpenSoundFn_line(v) {
                localStorage.setItem('sound_line', v.toString());
            },
            isOpenSoundFn_out(v) {
                localStorage.setItem('sound_out', v.toString());
            },
            isOpenSoundFn_rebate(v) {
                localStorage.setItem('sound_rebate', v.toString());
            },
            //获取主题
            getTheme(url) {
                let style = document.createElement('link');
                style.setAttribute("rel", "stylesheet");
                style.setAttribute("href", url.theme);
                style.onerror = function () {
                    this.$message.error = (LANG["主题加载超时"] || "主题加载超时");
                };
                document.getElementsByTagName('HEAD')[0].appendChild(style);
            },
            doOnerror() {
                this.logoImgType = false;
            },
            //返回首页
            goIndex() {
                this.$router.push({"path": "/index"});
            },
            //退出登录
            logout() {
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确认要退出吗？'] || '确认要退出吗？');
                this.confirmConfig.fn = "loginout";
            },
            //确认登出
            doConfirm(obj) {
                this.loading = true;
                let query = {
                    uid: sessionStorage.userId,
                    username: sessionStorage.userName,
                    refresh_token: sessionStorage.refresh_token
                }
                if (obj.fn == "loginout") {
                    this.$.autoAjax('post', URL.api + ROUTES.POST.admin.logout, query, {
                        ok: (res) => {
                            if (res.state == 0 && res.data) {
                                sessionStorage.token = "";
                                if (JUMPCONFIG && JUMPCONFIG.path) {
                                    JUMPCONFIG.path = '';
                                }
                                window.clearInterval(window.TIME1);
                                this.$notify.success({
                                    message: '你已安全退出登录！',
                                    offset: 40,
                                    duration: 3000
                                });
                                this.$router.push('/login');
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                    if (obj.fn == "volSwitch") {
                        localStorage.msgSound = !this.command;
                        this.command = !this.command;
                        this.loading = false;
                    }
                }
            },

            //确认登出
            doShowLogin(obj) {
                this.loading = true;
                if (obj.fn == "doLogin") {
                    this.$router.push('/login');
                }
            },
            //用户下接点击
            handleCommand(command) {
                switch (command) {
                    case "update":
                        this.updatePass();
                        break;
                    case "sysmessage":
                        this.sysMessage(command);
                        break;
                    case "exit":
                        this.logout();
                        break;
                }
            },
            //消息列表点击事件
            handleMessage(index) {
                this.sysMessage(index);
            },
            //修改密码事件
            updatePass() {
                this.formTitel = LANG['修改系统登录密码'] || '修改系统登录密码';
                this.formVisible.state = true;
            },
            //修改密码请求
            getForm(obj) {
                let formData = {
                    "old-pw": obj.formObj['old-pw'],
                    "new-pw": obj.formObj['password'],
                    "user_name": sessionStorage.userName
                };
                let _this = this;
                this.$.autoAjax('patch', URL.api + ROUTES.PATCH.admin.pwd + "?id=" + sessionStorage.userId, formData, {
                    ok: (res) => {
                        if (res.data.state == 0 && res.data.data) {
                            _this.$message.success(LANG['密码修改成功'] || '密码修改成功');
                            _this.$router.push({path: '/login'});
                        } else {
                            _this.$message.error(LANG['密码修改失败，请稍候重试！'] || '密码修改失败，请稍候重试！');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },

            // 	this.$http.patch(URL.api + ROUTES.PATCH.admin.pwd + "?id=" + sessionStorage.userId, JSON.stringify(formData), URLCONFIG).then((res) => {
            // 		if (res.data.state == 0 && res.data.data) {
            // 			_this.$message.success(LANG['密码修改成功'] || '密码修改成功');
            // 			_this.$router.push({path: '/login'});
            // 		} else {
            // 			_this.$message.error(LANG['密码修改失败，请稍候重试！'] || '密码修改失败，请稍候重试！');
            // 		}
            // 	}).catch((e) => {
            // 		_this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
            // 	});
            // },
            //获取时间
            getMyDate(str) {
                var oDate = new Date(str),
                    oYear = oDate.getFullYear(),
                    oMonth = oDate.getMonth() + 1,
                    oDay = oDate.getDate(),
                    oHour = oDate.getHours(),
                    oMin = oDate.getMinutes(),
                    oSen = oDate.getSeconds(),
                    oTime = oYear + '-' + this.getzf(oMonth) + '-' + this.getzf(oDay) + ' ' + this.getzf(oHour) + ':' + this.getzf(oMin) + ':' + this.getzf(oSen);//最后拼接时间
                return oTime;
            },
            //补0操作
            getzf(num) {
                if (parseInt(num) < 10) {
                    num = '0' + num;
                }
                return num;
            },
            //网站初始化设置
            doWebSet() {
                this.$router.push({path: '/loginsettings'});
            },
            settingClick: function (e) {
                e.stopPropagation();
                this.isShowSettingWrap = !this.isShowSettingWrap
            },
            // 添加快捷菜单
            addQuickMenu() {
                QUICKMENU = this.$router.options.routes;
                let tempQuick = this.$route;
                let success = -1;
                let _this = this;
                for (let i = 0; i < QUICKMENU.length; i++) {
                    if (i > 3 && QUICKMENU[i].children && QUICKMENU[i].children.length > 0) {
                        let childs = QUICKMENU[i].children;
                        for (let k in childs) {
                            if (childs[k].path === tempQuick.path) {
                                let temp = this.checkQuickMenu(childs[k].path);
                                if (temp.del) {
                                    delete QUICKCD[childs[k].path];
                                    QUICKMENU[5].children.splice(temp.quickmenukey, 1);
                                    _this.showAddMenu = false;
                                    localStorage.removeItem('quickmenu');
                                    localStorage.quickmenu = JSON.stringify(QUICKCD);
                                    this.$message.success(LANG['快捷菜单删除成功'] || '快捷菜单删除成功');
                                    return;
                                } else {
                                    if (QUICKMENU[5].children.length >= URL.quicknum) {
                                        QUICKMENU[5].children.splice(0, 1);
                                        let temp = QUICKMENU[5].children[0].path;
                                        delete QUICKCD[temp];
                                    }
                                    QUICKMENU[5].children.push(childs[k]);
                                    QUICKCD[childs[k].path] = childs[k];
                                    _this.showAddMenu = true;
                                    localStorage.removeItem('quickmenu');
                                    localStorage.quickmenu = JSON.stringify(QUICKCD);
                                    this.$message.success(LANG['快捷菜单添加成功'] || '快捷菜单添加成功');
                                    return;
                                }
                            }
                        }
                    }
                }
            },
            // 检查快捷菜单是否已存在
            checkQuickMenu(path) {
                let obj = {
                    quickmenukey: '',
                    del: false
                };
                let num = 0;
                for (let k in QUICKCD) {
                    if (k === path) {
                        num++;
                    }
                }
                QUICKMENU[5].children.forEach((v, index) => {
                    if (v.path === path) {
                        num++;
                        obj.quickmenukey = index;
                    }
                });
                if (num === 2) {
                    obj.del = true;
                }
                return obj;
            },
            // 获取路由对象
            getRouters($router) {
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
                    if (obj.path === routes[j].path && obj.name === routes[j].name) {
                        let list = obj.action || [];
                        routes[j].action = [];
                        list.forEach((vOne) => {
                            routes[j].action.push(vOne);
                        });
                    } else if (routes[j].children && routes[j].children.length > 0 && str === 'two') {
                        for (let k = 0; k < routes[j].children.length; k++) {
                            if ((obj.path) === routes[j].children[k].path) {
                                let listTwo = obj.action || [];
                                routes[j].children[k].action = [];
                                listTwo.forEach((vTwo) => {
                                    routes[j].children[k].action.push(vTwo);
                                })
                            }
                        }
                    }
                }
            },
        },
        mounted() {
            let _this = this;
            window.clearInterval(window.GETSYSTIME);
            window.GETSYSTIME = setInterval(function () {
                _this.getSysTime();
            }, 10 * 60 * 1000);
            $(function () {
                let tableH = document.getElementsByClassName('container_tabel')[0], navLeftH = null;
                if (localStorage.menu_type == 'left') {
                    navLeftH = document.getElementsByClassName('nav-box')[0] || '';
                }

                //横版适应高度
                function minFn() {
                    if (tableH.style.minHeight) {
                        tableH.style.minHeight = window.innerHeight + 'px';
                        localStorage.menu_type == 'left' ? navLeftH.style.minHeight = window.innerHeight + 'px' : ''
                    }
                };
                minFn();
                $(window).on('load resize', function () {
                    minFn();
                    let wHeight = window.innerHeight;
                    $('html').css('min-height', wHeight);
                });
            })

            $('body').on('click', () => {
                this.isShowSettingWrap = false;
            });
        },
        created() {
            this.init();
        },
        directives: {
            settingWrapHeight: {
                bind: function (el) {
                    el.addEventListener('click', (e) => {
                        e.stopPropagation();
                    })
                    const fn = () => {
                        el.style.height = window.innerHeight - 70 + 'px';
                        el.style.maxHeight = window.innerHeight - 70 + 'px';
                        el.style.overflow = 'auto';
                    }
                    fn();
                    window.onresize = () => (fn())
                }
            }
        },
        destroyed() {
            window.msgTimer = null;
        }
    }
</script>
<style>
    /*---滚动条的共用样式--*/
    .pcddMain .pd10 {
        padding: 10px;
    }

    .settingWrap {
        position: fixed;
        top: 44px;
        right: 1px;
        z-index: 1000;
        background-color: #FFFFFF;
        padding: 10px;
        width: 200px;
        border: 1px solid #dfe6ec;
        color: #48576a;
        box-shadow: -5px 8px 19px #D3DCE6;
    }

    .settingWrap .title {
        border-bottom: 1px solid #dfe6ec;
    }

    .settingWrap .sound {
        font-size: 14px;
    }

    .settingWrap .langeage-content {
        text-align: left;
    }

    .fade-enter-active, .fade-leave-active {
        transition: right .2s
    }

    .fade-enter, .fade-leave-to {
        right: -201px
    }

    /*****************/
    .pcddMain {
        /*min-width: 860px;*/
    }

    .pcddMain .header .icon-zhuti {
        padding-bottom: 4px;
        vertical-align: middle;
    }

    .pcddMain .header {
        min-width: 880px;
        position: fixed;
        left: 0;
        right: 0;
        z-index: 1000;
    }

    .pcddMain .top_header {
        line-height: 40px;
        height: 80px;
    }

    .pcddMain .left_header {
        line-height: 44px;
        height: 44px;
    }

    .pcddMain .header .volSwitch {
        margin-left: 20px;
        /*top: -46px;*/
    }

    .pcddMain .header .sound-content {
        height: 45px;
    }

    .pcddMain .header .sound-content-switch {
        height: 165px;
    }

    .pcddMain .header .webSetting .webSetPath {
        color: #48576a;
    }

    .pcddMain .header .logo {
        min-width: 200px;
        max-width: 200px;
    }

    .pcddMain .header .left_menu_logo {
        line-height: 44px;
        height: 44px;
    }

    .pcddMain .header .top_menu_logo {
        line-height: 80px;
        height: 80px;
    }

    /*首页LOGO*/
    .pcddMain .header .logo .logoImg {
        vertical-align: middle;
    }

    .pcddMain .header .logo strong, .pcddMain .header .logo i {
        vertical-align: middle;
    }

    /*.pcddMain .header .logo .backHome {*/
    /*display: block;*/
    /*width: 100%;*/
    /*height: 100%;*/
    /*text-decoration: none;*/
    /*}*/

    .pcddMain .header .headNav {
        /*min-width: 950px;*/
    }

    .pcddMain .header_top_nav,
    .pcddMain .header_top_menu {
        /*min-width: 1000px;*/
        height: 40px;
    }

    .pcddMain .header .headNav ul li {
        float: left;
        margin-right: 20px;
    }

    .pcddMain .header .headNav ul li a {
        min-width: 24px;
        display: block;
    }

    .pcddMain .main {
        /*min-width: 1130px;*/
    }

    .pcddMain .main table {
        /*width: 100%;*/
        border-style: none;
    }

    /*文字提示样式覆盖组件的*/
    .el-tooltip__popper {
        margin-top: -5px !important;
    }

    /*表格布局*/
    .pcddMain .main .container_tabel {
        height: auto;
    }

    /*左侧菜单样式文件*/
    .pcddMain .main .navLeft {
        padding-top: 44px;
        width: 70px;
        min-width: 70px;

    }

    /*右侧内容快*/
    .pcddMain .main table .contRight {
        /*background: #f5f5f7;*/
    }

    .pcddMain .main table .top_contRight {
        padding: 85px 8px 0 8px;
        /*min-width: 1200px;*/

    }

    .pcddMain .main table .left_contRight {
        padding: 55px 8px 0 8px;
        /*min-width: 1130px;*/
    }

    .pcddMain .main table .contRight .navTitle {
        border-bottom: 1px solid #d3d3d3;
        padding-bottom: 2px;
    }

    .pcddMain .main table .contRight .content {
        padding: 10px 2px;
        /*min-height: 720px;*/
    }

    .pcddMain .main table .contRight .navTitle .addMenu i {
        color: #000;
    }

    .pcddMain .el-col {
        margin-bottom: 0;
    }

    /*信息提示角标样式*/
    .el-badge__content {
        border-style: none;
        font-size: 10px;
        height: 14px;
        line-height: 14px;
        padding: 0 4px;
    }

    /*选项卡css3动画特效*/
    @-webkit-keyframes wobble-vertical {
        16.65% {
            -webkit-transform: translateY(8px);
            transform: translateY(8px);
        }
        33.3% {
            -webkit-transform: translateY(-6px);
            transform: translateY(-6px);
        }
        49.95% {
            -webkit-transform: translateY(4px);
            transform: translateY(4px);
        }
        66.6% {
            -webkit-transform: translateY(-2px);
            transform: translateY(-2px);
        }
        83.25% {
            -webkit-transform: translateY(1px);
            transform: translateY(1px);
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }

    @keyframes wobble-vertical {
        16.65% {
            -webkit-transform: translateY(8px);
            -ms-transform: translateY(8px);
            transform: translateY(8px);
        }
        33.3% {
            -webkit-transform: translateY(-6px);
            -ms-transform: translateY(-6px);
            transform: translateY(-6px);
        }
        49.95% {
            -webkit-transform: translateY(4px);
            -ms-transform: translateY(4px);
            transform: translateY(4px);
        }
        66.6% {
            -webkit-transform: translateY(-2px);
            -ms-transform: translateY(-2px);
            transform: translateY(-2px);
        }
        83.25% {
            -webkit-transform: translateY(1px);
            -ms-transform: translateY(1px);
            transform: translateY(1px);
        }
        100% {
            -webkit-transform: translateY(0);
            -ms-transform: translateY(0);
            transform: translateY(0);
        }
    }

    .megIco {
        display: inline-block;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }

    .megIco:hover {
        -webkit-animation-name: wobble-vertical;
        animation-name: wobble-vertical;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
    }

    /*动画样式结束*/
</style>
