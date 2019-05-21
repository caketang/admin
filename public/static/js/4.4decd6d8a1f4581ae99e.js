(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/confirm.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var components_confirm = ({
  data() {
    return {
      LANG,
      autofocus: false
    };
  },

  props: {
    confirmConfig: {
      type: Object,
      default: {
        state: false,
        msg: "",
        fn: "",
        obj: {}
      }
    }
  },
  watch: {
    'confirmConfig.state': function (newval) {
      if (newval) {
        this.autofocus = true;
      }
    }
  },
  components: {},
  methods: {
    //处理确定事件
    doConfirm() {
      this.$emit("do-confirm", {
        "fn": this.confirmConfig.fn,
        "obj": this.confirmConfig.obj,
        "flag": this.confirmConfig.flag
      });
      this.confirmConfig.state = false;
    },

    doCancel() {
      this.confirmConfig.state = false;
      this.$emit("do-cancel", {
        "fn": this.confirmConfig.fn,
        "obj": this.confirmConfig.obj,
        "flag": this.confirmConfig.flag
      });
    }

  },
  directives: {
    focus: {
      update: function (el, {
        value
      }) {
        if (value) {
          el.focus();
        }
      }
    }
  },

  mounted() {},

  created() {}

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e2013ef6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/confirm.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"confirm"}},[(_vm.confirmConfig.state)?_c('el-dialog',{attrs:{"title":_vm.LANG['系统提示'] || '系统提示',"size":"tiny","before-close":_vm.doCancel},on:{"close":_vm.doCancel},model:{value:(_vm.confirmConfig.state),callback:function ($$v) {_vm.$set(_vm.confirmConfig, "state", $$v)},expression:"confirmConfig.state"}},[_c('p',[_c('span',[_vm._v(_vm._s(_vm.LANG[_vm.confirmConfig.msg] || _vm.confirmConfig.msg))])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"formCancel",on:{"click":_vm.doCancel}},[_vm._v(_vm._s(_vm.LANG['取 消'] || '取 消'))]),_vm._v(" "),_c('el-button',{directives:[{name:"focus",rawName:"v-focus",value:(_vm.autofocus),expression:"autofocus"}],staticClass:"formSave",attrs:{"type":"primary"},on:{"click":_vm.doConfirm}},[_vm._v(_vm._s(_vm.LANG['确 定'] || '确 定'))])],1)]):_vm._e()],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/confirm.vue
function injectStyle (context) {
  __webpack_require__(219)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  components_confirm,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_confirm = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },
  computed: {
    gutter() {
      let parent = this.$parent;

      while (parent && parent.$options.componentName !== 'ElRow') {
        parent = parent.$parent;
      }

      return parent ? parent.gutter : 0;
    }

  },

  render(h) {
    let classList = [];
    let style = {};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }

    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop]) {
        classList.push(prop !== 'span' ? `el-col-${prop}-${this[prop]}` : `el-col-${this[prop]}`);
      }
    });
    ['xs', 'sm', 'md', 'lg'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`el-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(prop !== 'span' ? `el-col-${size}-${prop}-${props[prop]}` : `el-col-${size}-${props[prop]}`);
        });
      }
    });
    return h(this.tag, {
      class: ['el-col', classList],
      style
    }, this.$slots.default);
  }

});

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _components_leftMenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(549);
/* harmony import */ var _components_topMenu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(550);
/* harmony import */ var _components_language_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _components_formEdit_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var _components_confirm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(206);
/* harmony import */ var _messageNotification_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(551);
/* harmony import */ var _components_theme_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(547);
/* harmony import */ var element_ui_packages_col_src_col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(231);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var selTheme = ""; //require('./themeMode/default.css');//默认皮肤文件;

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      LANG,
      URL,
      pickerOptions2: {
        shortcuts: [{
          text: "昨 天",

          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24);
            end.setTime(end.getTime() - 3600 * 1000 * 24);
            picker.$emit("pick", [start, end]);
          }

        }, {
          text: "最近一周",

          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
            picker.$emit("pick", [start, end]);
          }

        }, {
          text: "最近十天",

          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 9);
            picker.$emit("pick", [start, end]);
          }

        }, {
          text: "最近三十天",

          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 29);
            picker.$emit("pick", [start, end]);
          }

        }]
      },
      changIndexData: "",
      changIndexDataShow: true,
      userName: "",
      navSwitch: false,
      sysName: "后台管理系统",
      theme: "主题",
      //管理后台的LOGO的地址
      logoUrl: "",
      //                logodefault:URL.logoIcon,
      logoImgType: true,
      //音量切换
      command: true,
      currentPathNameParent: "",
      dialogVisible: false,
      parTd: "70",
      isHide: true,
      //修改密码
      formConfig: [{
        prop: "old-pw",
        value: "",
        type: "password",
        label: "旧密码",
        rules: [{
          require: true
        }]
      }, {
        prop: "password",
        value: "",
        type: "password",
        label: "密码",
        rules: [{
          require: true
        }]
      }, {
        prop: "repeatPassword",
        value: "",
        label: "确认密码",
        type: "repeatPassword",
        rules: [{
          require: true
        }]
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
      cssUrl: "",
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
      sound_agent_out: true,
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
      documentTitle: "",
      showMenu: true
    };
  },

  components: {
    ElCol: element_ui_packages_col_src_col__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    leftMenu: _components_leftMenu_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    langeage: _components_language_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    formEdit: _components_formEdit_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    confirm: _components_confirm_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    msgNotification: _messageNotification_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    theme: _components_theme_vue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    topMenu: _components_topMenu_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  watch: {
    $route: {
      handler(to, from) {
        //监听路由改变
        this.currentPathName = to.name;
        this.showAddMenu = false;

        for (let k in QUICKCD) {
          if (to.path === k) {
            this.showAddMenu = true;
          }
        } //清除定时刷新


        if (to.path != '/index') {
          this.changIndexDataShow = false;
          window.clearInterval(window.TIME1);
        } else {
          this.changIndexDataShow = true;
        }
      },

      //是否绑定初始值
      immediate: true,
      //深度监听
      deep: true
    }
  },
  methods: {
    //新增窗口修改窗口title
    addNewWin() {
      window.localStorage["openNewWindow"] = "openNewWindow";
    },

    init() {
      if (this.$route.query && this.$route.query.open) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }

      if (typeof localStorage.getItem("sound") === "undefined") {
        localStorage.setItem("sound", "true");
      }

      this.logoUrl = URL.logoImg ? URL.img + URL.logoImg : "";
      this.menu_type = localStorage.menu_type || "left";
      this.userName = sessionStorage.userName || "";
      this.isOpenSound_message = localStorage.sound_message === "true" ? true : false;
      this.isOpenSound_line = localStorage.sound_line === "true" ? true : false;
      this.isOpenSound_out = localStorage.sound_out === "true" ? true : false;
      this.sound_agent_out = localStorage.sound_agent_out === "true" ? true : false;
      this.isOpenSound_rebate = localStorage.sound_rebate === "true" ? true : false;

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
            Authorization: sessionStorage.token
          },
          validateStatus: function (status) {
            return status;
          }
        };

        if (sessionStorage.langkey) {
          URLCONFIG.headers["Accept-Language"] = LANGHEAD[sessionStorage.langkey];
        }
      } else {
        //                    this.$message(LANG['登录超时，请重新登录！'] || '登录超时，请重新登录！');
        this.$router.push("/login");
        return;
      }

      if (sessionStorage.routers) {
        let temp = JSON.parse(sessionStorage.routers) || [];
        this.getRouters(temp);
      }

      this.getSysTime();
      this.navSwitch = false;
      this.command = true; //检测localstorage是否有openNewWindow这个值 如果有就修改窗口title

      this.documentTitle = document.title;

      if (this.$route.query.open == "1") {
        document.title = this.$route.name;
        window.localStorage.removeItem("openNewWindow");
      } else {
        document.title = this.documentTitle;
      }
    },

    //取得导航时间
    getSysTime() {
      let _this = this;

      if (this.$route.path !== "/login") {
        this.$.autoAjax("get", URL.api + ROUTES.GET.timezone, "", {
          ok: res => {
            if (res.state == 0 && res.data) {
              //取得时区
              let t = res.data.time || "";
              let zone = res.data.zone || "";
              let str = res.data.p || "";
              t = t.replace(/\+.*$/, "").replace(/T/, " ");
              let now = new Date(t).valueOf();
              clearInterval(window.TIMEZONE);
              window.TIMEZONE = setInterval(function () {
                now += 1000;
                _this.time = zone + " ( " + str + " ) " + _this.getMyDate(now);
                sessionStorage.dateTime = now.toString();
                sessionStorage.sysTime = FORMATDATEPICKER(now);
                sessionStorage.dateTimeStart = FORMATDATEPICKER(now) + " 00:00:00";
                sessionStorage.dateTimeEnd = FORMATDATEPICKER(now) + " 23:59:59";
              }, 1000);
            }
          },
          p: p => {},
          error: e => {
            console.log(e);
          }
        });
      }
    },

    //选择时间首页展示统计数据
    changIndexFn(obj) {
      EVENT.$emit('changeIndexDate', obj);
    },

    change_menu_type(i) {
      this.menu_type = i;
      localStorage.menu_type = i;
      location.reload(true);
    },

    isOpenSoundFn_message(v) {
      localStorage.setItem("sound_message", v.toString());
    },

    isOpenSoundFn_line(v) {
      localStorage.setItem("sound_line", v.toString());
    },

    isOpenSoundFn_out(v) {
      localStorage.setItem("sound_out", v.toString());
    },

    isOpenSoundAgentFn_out(v) {
      localStorage.setItem("sound_agent_out", v.toString());
    },

    isOpenSoundFn_rebate(v) {
      localStorage.setItem("sound_rebate", v.toString());
    },

    //获取主题
    getTheme(url) {
      let style = document.createElement("link");
      style.setAttribute("rel", "stylesheet");
      style.setAttribute("href", url.theme);

      style.onerror = function () {
        this.$message.error = LANG["主题加载超时"] || "主题加载超时";
      };

      document.getElementsByTagName("HEAD")[0].appendChild(style);
    },

    doOnerror() {
      this.logoImgType = false;
    },

    //返回首页
    goIndex() {
      this.$router.push({
        path: "/index"
      });
    },

    //退出登录
    logout() {
      this.confirmConfig.state = true;
      this.confirmConfig.msg = this.LANG["确认要退出吗？"] || "确认要退出吗？";
      this.confirmConfig.fn = "loginout";
    },

    //确认登出
    doConfirm(obj) {
      this.loading = true;
      let query = {
        uid: sessionStorage.userId,
        username: sessionStorage.userName,
        refresh_token: sessionStorage.refresh_token
      };

      if (obj.fn == "loginout") {
        this.$.autoAjax("post", URL.api + ROUTES.POST.admin.logout, query, {
          ok: res => {
            if (res.state == 0 && res.data) {
              sessionStorage.token = "";

              if (JUMPCONFIG && JUMPCONFIG.path) {
                JUMPCONFIG.path = "";
              }

              window.clearInterval(window.TIME1);
              this.$notify.success({
                message: "你已安全退出登录！",
                offset: 40,
                duration: 3000
              });
              this.$router.push("/login");
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });

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
        this.$router.push("/login");
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
      this.formTitel = LANG["修改系统登录密码"] || "修改系统登录密码";
      this.formVisible.state = true;
    },

    //修改密码请求
    getForm(obj) {
      let formData = {
        "old-pw": obj.formObj["old-pw"],
        "new-pw": obj.formObj["password"],
        user_name: sessionStorage.userName
      };

      let _this = this;

      this.$.autoAjax("patch", URL.api + ROUTES.PATCH.admin.pwd + "?id=" + sessionStorage.userId, formData, {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.$message.success(LANG["密码修改成功"] || "密码修改成功");

            _this.$router.push({
              path: "/login"
            });
          } else {
            _this.$message.error(LANG["密码修改失败，请稍候重试！"] || "密码修改失败，请稍候重试！");
          }
        },
        p: () => {},
        error: e => {
          _this.$message.error(e.responseJSON.msg);
        }
      });
    },

    //获取时间
    getMyDate(str) {
      var oDate = new Date(str),
          oYear = oDate.getFullYear(),
          oMonth = oDate.getMonth() + 1,
          oDay = oDate.getDate(),
          oHour = oDate.getHours(),
          oMin = oDate.getMinutes(),
          oSen = oDate.getSeconds(),
          oTime = oYear + "-" + this.getzf(oMonth) + "-" + this.getzf(oDay) + " " + this.getzf(oHour) + ":" + this.getzf(oMin) + ":" + this.getzf(oSen); //最后拼接时间

      return oTime;
    },

    //补0操作
    getzf(num) {
      if (parseInt(num) < 10) {
        num = "0" + num;
      }

      return num;
    },

    //网站初始化设置
    doWebSet() {
      this.$router.push({
        path: "/loginsettings"
      });
    },

    settingClick: function (e) {
      e.stopPropagation();
      this.isShowSettingWrap = !this.isShowSettingWrap;
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
                localStorage.removeItem("quickmenu");
                localStorage.quickmenu = JSON.stringify(QUICKCD);
                this.$message.success(LANG["快捷菜单删除成功"] || "快捷菜单删除成功");
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
                localStorage.removeItem("quickmenu");
                localStorage.quickmenu = JSON.stringify(QUICKCD);
                this.$message.success(LANG["快捷菜单添加成功"] || "快捷菜单添加成功");
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
        quickmenukey: "",
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
      $router.forEach(v => {
        this.setRoutesList(v);

        if (v.children && v.children.length > 0) {
          v.children.forEach(val => {
            this.setRoutesList(val, "two");
          });
        }
      });
    },

    // 跟据路由写值
    setRoutesList(obj, str) {
      let routes = URLROUTERS;

      for (let j = 0; j < routes.length; j++) {
        if (obj.path === routes[j].path && obj.name === routes[j].name) {
          let list = obj.action || [];
          routes[j].action = [];
          list.forEach(vOne => {
            routes[j].action.push(vOne);
          });
        } else if (routes[j].children && routes[j].children.length > 0 && str === "two") {
          for (let k = 0; k < routes[j].children.length; k++) {
            if (obj.path === routes[j].children[k].path) {
              let listTwo = obj.action || [];
              routes[j].children[k].action = [];
              listTwo.forEach(vTwo => {
                routes[j].children[k].action.push(vTwo);
              });
            }
          }
        }
      }
    }

  },

  mounted() {
    let _this = this;

    window.clearInterval(window.GETSYSTIME);
    window.GETSYSTIME = setInterval(function () {
      _this.getSysTime();
    }, 10 * 60 * 1000);
    $(function () {
      let tableH = document.getElementsByClassName("container_tabel")[0],
          navLeftH = null;

      if (localStorage.menu_type == "left") {
        navLeftH = document.getElementsByClassName("nav-box")[0] || "";
      } //横版适应高度


      function minFn() {
        if (tableH.style.minHeight) {
          tableH.style.minHeight = window.innerHeight + "px";
          localStorage.menu_type == "left" ? navLeftH.style.minHeight = window.innerHeight + "px" : "";
        }
      }

      minFn();
      $(window).on("load resize", function () {
        minFn();
        let wHeight = window.innerHeight;
        $("html").css("min-height", wHeight);
      });
    });
    $("body").on("click", () => {
      this.isShowSettingWrap = false;
    });
  },

  created() {
    this.init();
    let arr = ['', '皇', '家', '科', '技', '团', '队'];

    for (var x = 1; x < arr.length; x++) {
      arr[0] += '%c' + arr[x];
      arr[x] = 'color:#' + Math.random().toFixed(3) * 1000 + ';font-size:50px;text-shadow:5px 5px 5px #DCDFE6;';
    }

    console.log.apply(console, arr);
  },

  directives: {
    settingWrapHeight: {
      bind: function (el) {
        el.addEventListener("click", e => {
          e.stopPropagation();
        });

        const fn = () => {
          el.style.height = window.innerHeight - 70 + "px";
          el.style.maxHeight = window.innerHeight - 70 + "px";
          el.style.overflow = "auto";
        };

        fn();

        window.onresize = () => fn();
      }
    }
  },

  destroyed() {
    window.msgTimer = null;
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      LANG,
      //音量切换
      oMessage: 0,
      offlines: 0,
      withdraws: 0,
      agentWithdraw: 0,
      rebate: 0,
      autoMusic: {
        root_common: '',
        root_deposit: '',
        root_withdrawals: '',
        root_rebate: '',
        root_agent: ''
      },
      root_routers: "",
      startTime: 0,
      num: 0
    };
  },

  watch: {
    '$route'() {
      //监听路由改变
      this.root_routers = this.$route.path;
    }

  },
  methods: {
    init() {
      this.autoMusic.root_deposit = sessionStorage.deposit || '';
      this.autoMusic.root_withdrawals = sessionStorage.withdrawals || '';
      this.autoMusic.root_rebate = sessionStorage.rebate || '';
      this.autoMusic.root_agent = sessionStorage.agentWithdraw || '';
      this.root_routers = this.$route.path;
    },

    //系统消息跳转
    sysMessage(nowid) {
      this.$router.push({
        path: '/sysMessage'
      });
    },

    memberGetOut() {
      this.$router.push({
        path: '/memberGetOut',
        query: {
          status: 'pending'
        }
      });
    },

    offlineReceipts() {
      this.$router.push({
        path: '/offlineReceipts',
        query: {
          status: 'pending'
        }
      });
    },

    agentDrawing() {
      this.$router.push({
        path: '/agentDrawing',
        query: {
          status: 'pending'
        }
      });
    },

    doRebate() {
      this.$router.push({
        path: '/apply'
      });
    },

    //平台消息
    getMsg() {
      let url = URL.api + ROUTES.GET.messsage.num;

      if (this.num > 0) {
        url = url + '?from_time=' + this.startTime;
        this.startTime = FORMATDAT(sessionStorage.dateTime, 'yyyy-MM-dd HH:mm:ss');
      } else {
        this.startTime = FORMATDAT(sessionStorage.dateTime, 'yyyy-MM-dd HH:mm:ss');
        this.num++;
      }

      let _this = this;

      this.$.autoAjax('get', url, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.oMessage = FORMATINT(res.data.common) || 0;
            _this.offlines = FORMATINT(res.data.offline_deposit) || 0;
            _this.withdraws = FORMATINT(res.data.withdraw) || 0;
            _this.agentWithdraw = FORMATINT(res.data.agent_withdraw) || 0; //优惠

            _this.rebate = FORMATINT(res.data.rebate) || 0;
            let oMessage = _this.oMessage,
                offlines = _this.offlines,
                withdraws = _this.withdraws,
                rebate = _this.rebate,
                agentWithdraw = _this.agentWithdraw;
            localStorage.setItem('msgNum', this.oMessage);
            let audioPlay = document.querySelector('#audioPlay'),
                audioPlay1 = '',
                audioPlay2 = '',
                audioPlay3 = '';

            if (this.autoMusic.root_withdrawals) {
              audioPlay1 = document.querySelector('#audioPlay1'); //会员提现
            }

            if (this.autoMusic.root_deposit === 'true') {
              audioPlay2 = document.querySelector('#audioPlay2'); //公司入款
            }

            if (this.autoMusic.root_agent === 'true') {
              audioPlay3 = document.querySelector('#audioPlay3'); //代理提现
            } //                            if (this.autoMusic.root_rebate === 'true') {
            //                                audioPlay3 = document.querySelector('#audioPlay3');//优惠申请
            //                            }
            //消息


            if (oMessage || offlines || withdraws || rebate || agentWithdraw) {
              if (localStorage.getItem('sound_message') === 'true' && oMessage > 0) {
                audioPlay.play();

                audioPlay.onended = () => {
                  if (localStorage.getItem('sound_line') === 'true' && _this.autoMusic.root_deposit === 'true' && offlines > 0) {
                    // 入款
                    audioPlay2.play();

                    audioPlay2.onended = () => {
                      if (localStorage.getItem('sound_out') === 'true' && _this.autoMusic.root_withdrawals === 'true' && withdraws > 0) {
                        // 出款
                        audioPlay1.play();

                        audioPlay1.onended = () => {
                          if (localStorage.getItem('sound_agent_out') === 'true' && _this.autoMusic.root_agent === 'true' && agentWithdraw > 0) {
                            // 代理出款
                            audioPlay3.play();
                          }
                        };
                      }
                    };
                  } else if (localStorage.getItem('sound_out') === 'true' && withdraws > 0 && _this.autoMusic.root_withdrawals === 'true') {
                    // 出款
                    audioPlay1.play();
                  } else if (localStorage.getItem('sound_agent_out') === 'true' && agentWithdraw > 0 && _this.autoMusic.root_agent === 'true') {
                    // 代理出款
                    audioPlay3.play();
                  }
                };
              } else if (localStorage.getItem('sound_line') === 'true' && offlines > 0 && _this.autoMusic.root_deposit === 'true') {
                // 入款
                audioPlay2.play();

                audioPlay2.onended = () => {
                  if (localStorage.getItem('sound_out') === 'true' && withdraws > 0 && _this.autoMusic.root_withdrawals === 'true') {
                    // 出款
                    audioPlay1.play();

                    audioPlay1.onended = () => {
                      if (localStorage.getItem('sound_agent_out') === 'true' && _this.autoMusic.root_agent === 'true' && agentWithdraw > 0) {
                        // 代理出款
                        audioPlay3.play();
                      }
                    };
                  }
                };
              } else if (localStorage.getItem('sound_out') === 'true' && withdraws > 0 && _this.autoMusic.root_withdrawals === 'true') {
                // 出款
                audioPlay1.play();

                audioPlay1.onended = () => {
                  if (localStorage.getItem('sound_agent_out') === 'true' && _this.autoMusic.root_agent === 'true' && agentWithdraw > 0) {
                    // 代理出款
                    audioPlay3.play();
                  }
                };
              }
            }
          }
        }
      });
    },

    //刷新token
    updateToken() {
      setTimeout(() => {
        // 刷新token
        this.$.autoAjax('post', URL.api + '/admin/refresh/token', {
          'refresh_token': sessionStorage.refresh_token
        }, {
          ok: res => {
            if (res.state == 0 && res.data) {
              // 更新token,重新设置URLCONFIG和timeOut
              //                            global.URLCONFIG.headers.Authorization = "Bearer " + res.data.data.token;
              global.URLCONFIG.headers.Authorization = res.data.token;
              SETSESSIONSTORAGE('token', res.data.token);
              sessionStorage.setItem('timeOut', res.data.expire ? parseInt(res.data.expire) * 1000 : 0);
              sessionStorage.setItem('timeOutString', new Date(sessionStorage.timeOut * 1));
              this.updateToken();
            }
          }
        });
      }, sessionStorage.timeOut * 1 - (sessionStorage.dateTime * 1 - 10 * 60 * 1000));
    }

  },

  mounted() {
    this.getMsg();
  },

  created() {
    this.init();
    this.updateToken();

    if (window.msgTimer) {
      clearInterval(window.msgTimer);
      this.startTime = 0;
      this.num = 0;
    } else {
      window.msgTimer = setInterval(() => {
        setTimeout(() => {
          if (this.$route.path !== '/login') {
            this.getMsg();
          }
        }, 0);
      }, 20 * 1000); //                window.msgTimer = setInterval(() => {
      //                    if (this.$route.path !== '/login') {
      //                        this.getMsg();
      //                    }
      //                }, 20 * 1000)
    }
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/index/index.vue
var index = __webpack_require__(259);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-57d07b6d","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/index/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"pcddMain w100",attrs:{"id":"home"}},[(_vm.showMenu)?_c('el-col',{staticClass:"header",class:{left_header:_vm.menu_type =='left',top_header:_vm.menu_type =='top'},attrs:{"span":24}},[_c('el-col',{staticClass:"logo",class:{left_menu_logo:_vm.menu_type =='left',top_menu_logo:_vm.menu_type =='top'},attrs:{"span":4}},[_c('a',{attrs:{"href":"javascript:;"},on:{"click":_vm.goIndex}},[(_vm.logoUrl)?_c('img',{staticClass:"logoImg",attrs:{"src":_vm.logoUrl,"width":"auto","height":"40px"}}):_c('i',{staticClass:"iconfont ml20 font24 icon-37750 font28"}),_vm._v(" "),_c('strong',{on:{"click":_vm.goIndex}},[_vm._v(_vm._s(_vm.LANG[_vm.URL.title] || _vm.URL.title))])])]),_vm._v(" "),_c('div',{staticClass:"header_top_nav"},[_c('div',{staticClass:"headNav"},[_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"settingWrapHeight",rawName:"v-settingWrapHeight"},{name:"show",rawName:"v-show",value:(_vm.isShowSettingWrap),expression:"isShowSettingWrap"}],staticClass:"settingWrap"},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.LANG['导航设置'] || '导航设置'))]),_vm._v(" "),_c('div',{staticClass:"sound-content"},[_c('el-radio-group',{on:{"change":_vm.change_menu_type},model:{value:(_vm.menu_type),callback:function ($$v) {_vm.menu_type=$$v},expression:"menu_type"}},[_c('div',[_c('el-radio',{attrs:{"label":"left"}},[_vm._v(_vm._s(_vm.LANG['左侧导航'] || '左侧导航'))])],1),_vm._v(" "),_c('div',[_c('el-radio',{attrs:{"label":"top"}},[_vm._v(_vm._s(_vm.LANG['顶部导航'] || '顶部导航'))])],1)])],1),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.LANG['声音设置'] || '声音设置'))]),_vm._v(" "),_c('div',{staticClass:"sound-content sound-content-switch"},[_c('p',[_vm._v("\n                                "+_vm._s(_vm.LANG['消息提示'] || '消息提示')+"\n                                "),_c('el-switch',{staticClass:"volSwitch",on:{"change":_vm.isOpenSoundFn_message},model:{value:(_vm.isOpenSound_message),callback:function ($$v) {_vm.isOpenSound_message=$$v},expression:"isOpenSound_message"}})],1),_vm._v(" "),_c('p',[_vm._v("\n                                "+_vm._s(_vm.LANG['入款提示'] || '入款提示')+"\n                                "),_c('el-switch',{staticClass:"volSwitch",on:{"change":_vm.isOpenSoundFn_line},model:{value:(_vm.isOpenSound_line),callback:function ($$v) {_vm.isOpenSound_line=$$v},expression:"isOpenSound_line"}})],1),_vm._v(" "),_c('p',[_vm._v("\n                                "+_vm._s(_vm.LANG['会员出款提示'] || '会员出款提示')+"\n                                "),_c('el-switch',{staticClass:"volSwitch",on:{"change":_vm.isOpenSoundFn_out},model:{value:(_vm.isOpenSound_out),callback:function ($$v) {_vm.isOpenSound_out=$$v},expression:"isOpenSound_out"}})],1),_vm._v(" "),_c('p',[_vm._v("\n                                "+_vm._s(_vm.LANG['代理出款提示'] || '代理出款提示')+"\n                                "),_c('el-switch',{staticClass:"volSwitch",on:{"change":_vm.isOpenSoundAgentFn_out},model:{value:(_vm.sound_agent_out),callback:function ($$v) {_vm.sound_agent_out=$$v},expression:"sound_agent_out"}})],1)]),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.LANG['语言设置'] || '语言设置'))]),_vm._v(" "),_c('div',{staticClass:"langeage-content"},[_c('langeage')],1),_vm._v(" "),_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.LANG['主题设置'] || '主题设置'))]),_vm._v(" "),_c('div',{staticClass:"theme-content"},[_c('theme',{on:{"change-theme":_vm.getTheme}})],1)])]),_vm._v(" "),_c('ul',{staticStyle:{"float":"right"}},[_c('li',[_c('el-dropdown',{staticClass:"dropdown",attrs:{"trigger":"click"},on:{"command":_vm.handleCommand}},[_c('a',{staticClass:"el-dropdown-link",attrs:{"href":"javascript:;"}},[_c('span',[_vm._v(_vm._s(_vm.userName))]),_vm._v(" "),_c('i',{staticClass:"el-icon-caret-bottom el-icon--right",staticStyle:{"font-size":"12px"}})]),_vm._v(" "),_c('el-dropdown-menu',{attrs:{"slot":"dropdown"},slot:"dropdown"},[_c('el-dropdown-item',{attrs:{"command":"update"},domProps:{"textContent":_vm._s(_vm.LANG['修改密码'] || '修改密码')}}),_vm._v(" "),_c('el-dropdown-item',{attrs:{"command":"exit"},domProps:{"textContent":_vm._s(_vm.LANG['退出'] || '退出')}})],1)],1)],1),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.settingClick($event)}}},[_c('span',{staticStyle:{"font-size":"14px","cursor":"pointer"}},[_vm._v(_vm._s(_vm.LANG['设置'] || '设置'))])])]),_vm._v(" "),_c('msg-notification'),_vm._v(" "),_c('ul',[(_vm.changIndexDataShow)?_c('li',{staticClass:"ml20"},[_c('div',{staticClass:"block"},[_c('span',{staticClass:"demonstration"},[_vm._v("时间区间：")]),_vm._v(" "),_c('el-date-picker',{attrs:{"type":"daterange","align":"right","size":"small","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":_vm.pickerOptions2},on:{"change":_vm.changIndexFn},model:{value:(_vm.changIndexData),callback:function ($$v) {_vm.changIndexData=$$v},expression:"changIndexData"}})],1)]):_vm._e(),_vm._v(" "),_c('li',{staticClass:"ml20"},[_vm._v(_vm._s(_vm.time))]),_vm._v(" "),_c('li',{staticClass:"ml20"},[_vm._v(_vm._s(_vm.timeTxt))])])],1)]),_vm._v(" "),(_vm.menu_type == 'top' && _vm.showMenu)?_c('div',{staticClass:"header_top_menu"},[_c('topMenu',{staticClass:"top_menu",attrs:{"menu":_vm.navSwitch}})],1):_vm._e()],1):_vm._e(),_vm._v(" "),_c('el-col',{staticClass:"main",attrs:{"span":24}},[_c('table',{staticClass:"container_tabel w100",attrs:{"cellspacing":"0","cellpadding":"0"}},[_c('tr',[(_vm.menu_type == 'left' && _vm.showMenu)?_c('td',{staticClass:"navLeft",attrs:{"valign":"top","width":_vm.parTd}},[_c('leftMenu',{attrs:{"menu":_vm.navSwitch}})],1):_vm._e(),_vm._v(" "),_c('td',{staticClass:"contRight w100",class:{top_contRight: (_vm.menu_type == 'top' && _vm.showMenu),left_contRight: (_vm.menu_type =='left' && _vm.showMenu),pd10: !_vm.showMenu},attrs:{"valign":"top"}},[_c('el-row',[(_vm.$route.name !=='首页' && _vm.$route.name !== 'error')?_c('el-col',{staticClass:"navTitle",attrs:{"span":24}},[_c('strong',[_vm._v("|")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.LANG[_vm.$route.name] || _vm.$route.name))]),_vm._v(" "),_c('el-tooltip',{staticClass:"item",attrs:{"effect":"light","content":"添加到快捷菜单","placement":"right"}},[_c('a',{staticClass:"ml10",attrs:{"href":"javascript:;"},on:{"click":_vm.addQuickMenu}},[(_vm.showAddMenu)?_c('i',{staticClass:"iconfont font16 icon-shoucangjia",staticStyle:{"color":"#ff8040"}}):_c('i',{staticClass:"iconfont font16 icon-shoucang1",staticStyle:{"color":"#ff8040"}})])]),_vm._v(" "),_c('el-tooltip',{staticClass:"item",attrs:{"effect":"light","content":"新窗口打开此页","placement":"right"}},[_c('a',{attrs:{"href":_vm.$route.path+'?open=1',"target":"_blank"},on:{"click":function($event){return _vm.addNewWin()}}},[_c('i',{staticClass:"iconfont font16 icon-dakaixinchuangkou"})])])],1):_vm._e(),_vm._v(" "),_c('el-col',{staticClass:"content",staticStyle:{"box-sizing":"border-box"},attrs:{"span":24}},[_c('transition',{attrs:{"name":"fade"}},[_c('keep-alive',[_c('router-view')],1)],1)],1)],1)],1)])])]),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"size":"small"},on:{"get-form":_vm.getForm}})],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfigLogin},on:{"do-confirm":_vm.doShowLogin}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/index/index.vue
function injectStyle (context) {
  __webpack_require__(401)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  index["a" /* default */],
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var page_index = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/theme.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var theme = ({
  name: "language",

  data() {
    return {
      LANG,
      themeList: [{
        id: "default",
        label: "经典主题",
        class: 'selTheme',
        cssUrl: '/static/themeMode/default.css',
        style: 'background:#4f546a;'
      }, {
        id: "red",
        label: "红色主题",
        class: 'selTheme',
        cssUrl: '/static/themeMode/red.css',
        style: 'background:#e94d3e;'
      }, {
        id: "blue",
        label: "蓝色主题",
        class: 'selTheme',
        cssUrl: '/static/themeMode/blue.css',
        style: 'background:#0197d2;'
      }, {
        id: "yellow",
        label: "黄色主题",
        class: 'selTheme',
        cssUrl: '/static/themeMode/yellow.css',
        style: 'background:#f59275;'
      }, {
        id: "green",
        label: "绿色主题",
        class: 'selTheme',
        cssUrl: '/static/themeMode/green.css',
        style: 'background:#00bca4;'
      }, {
        id: "shade",
        label: "渐变主题",
        class: 'selTheme',
        cssUrl: '/static/themeMode/shade.css',
        style: 'background:#b494d5;'
      }],
      nowTheme: '/static/themeMode/default.css'
    };
  },

  components: {},
  methods: {
    //切换主题
    init() {},

    changeTheme(command) {
      //旧主题路径
      let oldTheme = localStorage.oldtheme; //匹配新主题路径

      if (command !== localStorage.theme) {
        oldTheme = localStorage.theme;
        localStorage.theme = command;
        this.$emit('change-theme', {
          "theme": command,
          "oldTheme": oldTheme
        });
      }
    }

  },

  mounted() {
    this.nowTheme = localStorage.theme || this.nowTheme;
    this.$emit('change-theme', {
      "theme": localStorage.theme || this.nowTheme
    });
  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-858c37cc","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/theme.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"theme"}},[_c('el-radio-group',{on:{"change":function($event){return _vm.changeTheme(_vm.nowTheme)}},model:{value:(_vm.nowTheme),callback:function ($$v) {_vm.nowTheme=$$v},expression:"nowTheme"}},_vm._l((_vm.themeList),function(item,index){return _c('el-radio',{key:item.id,staticClass:"radio",attrs:{"label":item.cssUrl}},[_c('span',{staticClass:"color_box themeBox",style:(item.style)}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.LANG[item.label] || item.label))])])}),1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/theme.vue
function injectStyle (context) {
  __webpack_require__(411)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  theme,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_theme = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/leftMenu.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var leftMenu = ({
  data() {
    return {
      URLROUTERS,
      LANG,
      QUICKMENU: this.$router.options.routes
    };
  },

  props: {
    menu: Boolean
  },
  components: {},
  methods: {
    init() {
      //中由传参
      this.seachData = this.$route.query;
      this.initQuickMenu();
    },

    // 初始化快捷菜单
    initQuickMenu() {
      QUICKMENU = this.$router.options.routes;
      let myquick = QUICKMENU[5].children = [];
      QUICKCD = {};
      let qkMenu = localStorage.quickmenu && JSON.parse(localStorage.quickmenu) || {};

      for (let i = 6; i < QUICKMENU.length; i++) {
        if (QUICKMENU[i].children && QUICKMENU[i].children.length && QUICKMENU[i].action && QUICKMENU[i].action.length) {
          for (let n = 0; n < QUICKMENU[i].children.length; n++) {
            let temp = QUICKMENU[i].children[n];

            for (let k in qkMenu) {
              if (temp && qkMenu[k].path === temp.path && temp.action && temp.action.length > 0) {
                myquick.push(qkMenu[k]);
                QUICKCD[qkMenu[k].path] = qkMenu[k];
                qkNumber++;
              }
            }
          }
        }
      }
    }

  },
  computed: {
    url() {
      return this.$router.options.routes;
    }

  },

  mounted() {
    $(function () {
      let oSlide = $('.nav-slide');
      let oItm = $('.nav-slide  > .nav-slide-o ul  li').find('a');
      let oLi = $('.nav-ul li').eq($(this).parents('.nav-slide-o').index());
      oItm.each(function () {
        $(this).is('.router-link-active') ? $('.nav-ul > li').eq($(this).parents('.nav-slide-o').index()).addClass('bgStyle').find('a').addClass('fontStyle') : oLi.removeClass('bgStyle');
      });
      var thisTime;
      $('.nav-ul li').mouseleave(function (even) {
        thisTime = setTimeout(thisMouseOut, 1000);
      });
      $('.nav-ul li').mouseenter(function () {
        let oDemo = $('.nav-slide-o');
        clearTimeout(thisTime);
        let thisUB = $('.nav-ul li').index($(this));
        let oChild = oDemo.eq(thisUB).find('.childMenu').length;

        if ($.trim(oDemo.eq(thisUB).html()) != "") {
          oSlide.addClass('hover');
          oDemo.hide();
          thisUB > 0 ? oChild > thisUB ? oDemo.eq(thisUB).show().css({
            marginTop: 44
          }) : oDemo.eq(thisUB).show().css({
            marginTop: (thisUB - oChild + 1) * 44
          }) : oDemo.eq(thisUB).show().css({
            marginTop: 0
          });
        } else {
          oSlide.removeClass('hover');
        }
      });

      function thisMouseOut() {
        oSlide.removeClass('hover');
      }

      oSlide.mouseenter(() => {
        clearTimeout(thisTime);
        oSlide.addClass('hover');
      });
      oSlide.mouseleave(() => {
        oSlide.removeClass('hover');
      }); //点击选中

      $('.nav-slide-o li').click(function () {
        let oNan = $(this).parents('.nav-slide-o').index();
        let oNav = $('.nav-ul li').eq(oNan);
        oNav.addClass('bgStyle').siblings().removeClass('bgStyle');
        oNav.find('a').addClass('fontStyle');
        oNav.siblings().find('a').removeClass('fontStyle');
      });
    });
  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b231de84","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/leftMenu.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nav-box",attrs:{"id":"leftMenu"}},[_c('div',{staticClass:"nav"},[_c('ul',{staticClass:"nav-ul",attrs:{"default-active":_vm.$route.path}},_vm._l((_vm.URLROUTERS),function(item,index){return (!item.hidden && ((item.action && item.action.length>0)  || item.name === '快捷') )?_c('li',[(item.name != '首 页')?_c('a',{attrs:{"href":"javascript:;"}},[_c('i',{class:item.iconCls}),_vm._v(_vm._s(_vm.LANG[item.name] || item.name))]):_vm._e()]):_vm._e()}),0)]),_vm._v(" "),_c('div',{staticClass:"nav-slide",attrs:{"default-active":_vm.$route.path}},_vm._l((_vm.URLROUTERS),function(items){return (!items.hidden && ((items.action && items.action.length>0)  || items.name === '快捷') )?_c('div',{staticClass:"nav-slide-o "},[_c('ul',{staticStyle:{"z-index":"3000"}},_vm._l((items.children),function(item){return (!item.hidden && item.action && item.action.length>0)?_c('li',{staticClass:"tCent childMenu"},[(!item.hidden)?_c('router-link',{attrs:{"to":item.path}},[_vm._v(_vm._s(_vm.LANG[item.name] || item.name))]):_vm._e()],1):_vm._e()}),0)]):_vm._e()}),0)])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/leftMenu.vue
function injectStyle (context) {
  __webpack_require__(402)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b231de84"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  leftMenu,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_leftMenu = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/topMenu.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var topMenu = ({
  data() {
    return {
      URLROUTERS,
      LANG,
      QUICKMENU: this.$router.options.routes
    };
  },

  props: {
    menu: Boolean
  },
  components: {},
  methods: {
    init() {
      //中由传参
      this.seachData = this.$route.query;
      this.initQuickMenu();
    },

    // 初始化快捷菜单
    initQuickMenu() {
      QUICKMENU = this.$router.options.routes;
      let myquick = QUICKMENU[5].children = [];
      QUICKCD = {};
      let qkMenu = localStorage.quickmenu && JSON.parse(localStorage.quickmenu) || {};

      for (let i = 6; i < QUICKMENU.length; i++) {
        if (QUICKMENU[i].children && QUICKMENU[i].children.length && QUICKMENU[i].action && QUICKMENU[i].action.length) {
          for (let n = 0; n < QUICKMENU[i].children.length; n++) {
            let temp = QUICKMENU[i].children[n];

            for (let k in qkMenu) {
              if (temp && qkMenu[k].path === temp.path && temp.action && temp.action.length > 0) {
                myquick.push(qkMenu[k]);
                QUICKCD[qkMenu[k].path] = qkMenu[k];
                qkNumber++;
              }
            }
          }
        }
      }
    },

    hoverNav() {}

  },
  computed: {
    url() {
      return this.$router.options.routes;
    }

  },

  mounted() {
    $(function () {
      $('#topMenu .menu>li').children('a').hover(function () {
        $(this).parent('.active_top_menu').find('.submenu >li').show().css({
          "z-index": "1999",
          "opacity": "1",
          "-webkit-transform": "none",
          "-moz-transform": "none",
          "-ms-transform": "none",
          "-o-transform": "none",
          "transform": "none"
        });
      });
      $('#topMenu .menu>li').mouseleave(function () {
        $('.submenu >li').css({
          "z-index": "0",
          "opacity": "0",
          "-webkit-transform": "rotateY(90deg)",
          "-moz-transform": "rotateY(90deg)",
          "-ms-transform": "rotateY(90deg)",
          "-o-transform": "rotateY(90deg)",
          "transform": "rotateY(90deg)"
        }).hide();
      });
    });
  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-84cc027e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/topMenu.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"top_menu container",attrs:{"id":"topMenu"}},[_c('ul',{staticClass:"menu",attrs:{"default-active":_vm.$route.path}},_vm._l((_vm.URLROUTERS),function(item,index){return (!item.hidden && ((item.action && item.action.length>0)  || item.name === '快捷') )?_c('li',{staticClass:"active active_top_menu"},[(item.name != '首 页')?_c('a',{staticClass:"font16 parentMenu topNavTitle",attrs:{"href":"javascript:;"}},[_c('i',{class:item.iconCls}),_vm._v(_vm._s(_vm.LANG[item.name] || item.name))]):_vm._e(),_vm._v(" "),(!item.hidden && ((item.action && item.action.length>0)  || item.name === '快捷') )?_c('ul',{staticClass:"submenu"},_vm._l((item.children),function(item){return (!item.hidden && item.action && item.action.length>0)?_c('li',{staticClass:"tCent childMenu"},[(!item.hidden)?_c('router-link',{staticClass:"font14 topNavTitle",attrs:{"to":item.path}},[_vm._v("\n                        "+_vm._s(_vm.LANG[item.name] || item.name)+"\n                    ")]):_vm._e()],1):_vm._e()}),0):_vm._e()]):_vm._e()}),0)])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/topMenu.vue
function injectStyle (context) {
  __webpack_require__(403)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  topMenu,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_topMenu = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/index/messageNotification.vue
var messageNotification = __webpack_require__(262);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-25608214","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/index/messageNotification.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{attrs:{"id":"message"}},[_c('li',[(_vm.autoMusic.root_common === 'true')?_c('a',{staticStyle:{"display":"none"},attrs:{"href":"javascript:;"}},[_c('audio',{attrs:{"id":"audioPlay","src":"../../../static/music/newMsg.wav"}})]):_vm._e(),_vm._v(" "),_c('el-tooltip',{staticClass:"item",staticStyle:{"z-index":"2000"},attrs:{"effect":"light","content":_vm.LANG['消息总数'] || '消息总数',"placement":"bottom"}},[_c('el-badge',{staticClass:"item",attrs:{"value":_vm.oMessage,"rel":"wobble-vertical"}},[_c('a',{staticClass:"el-dropdown-link",attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.sysMessage()}}},[_c('span',{staticClass:"font14"},[_vm._v(_vm._s(_vm.LANG['消息'] || '消息'))])])]),_vm._v(" "),_c('a',{attrs:{"href":"javascript:;"},on:{"click":_vm.memberGetOut}},[_c('i',{staticClass:"fa fa-credit-card-alt font14",attrs:{"aria-hidden":"true"}})])],1)],1),_vm._v(" "),(_vm.autoMusic.root_withdrawals === 'true')?_c('li',[_vm._m(0),_vm._v(" "),_c('el-tooltip',{staticClass:"item",attrs:{"effect":"light","content":_vm.LANG['会员提现'] || '会员提现',"placement":"bottom"}},[_c('el-badge',{staticClass:"item",attrs:{"value":_vm.withdraws,"rel":"wobble-vertical"}},[_c('a',{staticClass:"el-dropdown-link",attrs:{"href":"javascript:;"},on:{"click":_vm.memberGetOut}},[_c('span',{staticClass:"font14"},[_vm._v(_vm._s(_vm.LANG['出款'] || '出款'))])])])],1)],1):_vm._e(),_vm._v(" "),(_vm.autoMusic.root_deposit === 'true')?_c('li',[_vm._m(1),_vm._v(" "),_c('el-tooltip',{staticClass:"item",attrs:{"effect":"light","content":_vm.LANG['公司入款'] || '公司入款',"placement":"bottom"}},[_c('el-badge',{staticClass:"item",attrs:{"value":_vm.offlines,"rel":"wobble-vertical"}},[_c('a',{staticClass:"el-dropdown-link",attrs:{"href":"javascript:;"},on:{"click":_vm.offlineReceipts}},[_c('span',{staticClass:"font14"},[_vm._v(_vm._s(_vm.LANG['入款'] || '入款'))])])])],1)],1):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticStyle:{"display":"none"},attrs:{"href":"javascript:;"}},[_c('audio',{attrs:{"id":"audioPlay1","src":"../../../static/music/chukuan.wav"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticStyle:{"display":"none"},attrs:{"href":"javascript:;"}},[_c('audio',{attrs:{"id":"audioPlay2","src":"../../../static/music/gsrk.wav"}})])}]

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/index/messageNotification.vue
function injectStyle (context) {
  __webpack_require__(410)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  messageNotification["a" /* default */],
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var index_messageNotification = __webpack_exports__["a"] = (Component.exports);


/***/ })

}]);