(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/login/authorization.vue
var authorization = __webpack_require__(256);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-713ac1d7","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/login/authorization.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"w100",attrs:{"id":"authorization"}},[_c('el-row',[_c('el-col',{staticClass:"mb20 mt200"},[_vm._v("\n            "+_vm._s(_vm.str)),(!_vm.state)?_c('span',[_vm._v(_vm._s(_vm.num)+_vm._s(_vm.LANG['后跳转页面'] || '后跳转页面'))]):_vm._e(),_vm._v("！\n        ")]),_vm._v(" "),(!_vm.state)?_c('el-col',[_c('el-button',{on:{"click":_vm.docancel}},[_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))])],1):_vm._e()],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/login/authorization.vue
function injectStyle (context) {
  __webpack_require__(397)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-713ac1d7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  authorization["a" /* default */],
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var login_authorization = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _getErrorCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
//
//
//
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
      parms: {},
      num: 5,
      loading: false,
      state: false,
      str: ""
    };
  },

  methods: {
    init() {
      let _this = this;

      this.state = false;
      this.str = (LANG['点击 "取消" 后停止页面跳转'] || '点击 "取消" 后停止页面跳转') + "," + (LANG['等待'] || '等待');
      let myset = setInterval(function () {
        _this.num--;

        if (_this.num === 0) {
          clearInterval(myset);
        }
      }, 1000);
    },

    //取消事件
    docancel() {
      this.state = true;
      this.str = LANG['您已取消跳转，请关闭本页'] || '您已取消跳转，请关闭本页';
    },

    //关闭事件
    doclose() {
      this.state = true;
      this.str = LANG['请关闭本页'] || '请关闭本页';
    },

    // 路由跳转
    goPath() {
      this.loading = true;

      let _this = this; //                "tid": "string(required) #分配给厅主的id",
      //                    "nonce": "string(required) #随机数",
      //                    "timestamp": "int(required) #时间戳",
      //                    "signature": "string(required) #生成的签名"


      if (JUMPCONFIG && JUMPCONFIG.path) {
        let obj = {
          tid: JUMPCONFIG.tid || '',
          nonce: JUMPCONFIG.nonce || '',
          timestamp: parseInt(JUMPCONFIG.timestamp) || 0,
          signature: JUMPCONFIG.signature || '',
          path: JUMPCONFIG.path || ''
        };

        let _this = this;

        if (this.state) {
          this.loading = false;
          return;
        }

        this.$.autoAjax('post', URL.api + ROUTES.POST.admin.login.pt, obj, {
          ok: res => {
            if (res.state == 0 && res.data) {
              sessionStorage.clear();
              let model = res.data;
              sessionStorage.user = JSON.stringify(model.list);
              sessionStorage.userId = parseInt(model.list.id) || -1;
              sessionStorage.userName = model.list.username || "admin";
              sessionStorage.routers = JSON.stringify(model.route);
              sessionStorage.timeOut = res.data.expire ? parseInt(res.data.expire) * 1000 : 0;
              sessionStorage.timeOutString = res.data.expire ? new Date(parseInt(res.data.expire) * 1000) : 0;
              sessionStorage.refresh_token = res.data.refresh_token;
              sessionStorage.token = model.token; // 总平台跳转过来为管理员角色

              sessionStorage.role = 1;
              this.setPermissions();
              let routes = model.route || [];

              if (routes.length > 0) {
                _this.getRouters(routes);
              }

              global.URLCONFIG = {
                emulateJson: true,
                headers: {
                  "Content-Type": "application/json",
                  //                                    "Authorization": "Bearer " + sessionStorage.token
                  "Authorization": sessionStorage.token
                },
                validateStatus: function (status) {
                  return status;
                }
              };

              if (typeof settings !== 'undefined' && settings.init) {
                _this.$router.push({
                  path: '/setup'
                });
              } else {
                _this.$router.push({
                  path: '/' + JUMPCONFIG.path
                });
              }
            } else if (res.state == 4001) {
              _this.$message.error(LANG['无效用户'] || '无效用户');

              _this.doclose();
            } else if (res.state == 4002) {
              _this.$message.error(LANG['跳转超时'] || '跳转超时');

              _this.doclose();
            }

            _this.loading = false;
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }) //                     this.$http.post(URL.api + ROUTES.POST.admin.login.pt,JSON.stringify(obj),URLCONFIG).then((res)=>{
        //                         if(res.data.state == 0 && res.data.data){
        //                             sessionStorage.clear();
        //                             let model = res.data.data;
        //                             sessionStorage.user = JSON.stringify(model.list);
        //                             sessionStorage.userId = parseInt(model.list.id) || -1;
        //                             sessionStorage.userName = model.list.username || "admin";
        //                             sessionStorage.routers = JSON.stringify(model.route);
        //                             sessionStorage.timeOut = res.data.data.expire ? parseInt(res.data.data.expire)*1000 : 0;
        //                             sessionStorage.timeOutString = res.data.data.expire ? new Date(parseInt(res.data.data.expire)*1000) : 0;
        //                             sessionStorage.refresh_token = res.data.data.refresh_token;
        //                             sessionStorage.token = model.token;
        //                             // 总平台跳转过来为管理员角色
        //                             sessionStorage.role = 1;
        //                             this.setPermissions();
        //
        //                             let routes = model.route || [];
        //                             if(routes.length>0){
        //                                 _this.getRouters(routes);
        //                             }
        //                             global.URLCONFIG = {
        //                                 emulateJson: true,
        //                                 headers: {
        //                                     "Content-Type": "application/json",
        // //                                    "Authorization": "Bearer " + sessionStorage.token
        //                                     "Authorization":sessionStorage.token
        //                                 },
        //                                 validateStatus: function (status) {
        //                                     return status;
        //                                 }
        //                             };
        //                             if(typeof(settings) !== 'undefined' && settings.init){
        //                                 _this.$router.push({path: ('/setup')});
        //                             }else{
        //                                 _this.$router.push({path: ('/' + JUMPCONFIG.path)});
        //                             }
        //                         }else if(res.data.state == 4001){
        //                             _this.$message.error(LANG['无效用户'] || '无效用户');
        //                             _this.doclose();
        //                         }else if(res.data.state == 4002) {
        //                             _this.$message.error(LANG['跳转超时'] || '跳转超时');
        //                             _this.doclose();
        //                         }
        //                         _this.loading = false;
        //                     })
        .catch(e => {
          _this.loading = false;

          _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
        });
      }
    },

    // 获取路由对象
    getRouters($router) {
      SETSESSIONSTORAGE('deposit', 'false');
      SETSESSIONSTORAGE('withdrawals', 'false');
      SETSESSIONSTORAGE('rebate', 'false');
      $router.forEach(v => {
        this.setRoutesList(v);

        if (v.children && v.children.length > 0) {
          v.children.forEach(val => {
            this.setRoutesList(val, 'two');
          });
        }
      });
    },

    // 跟据路由写值
    setRoutesList(obj, str) {
      let routes = this.$router.options.routes;

      for (let j = 0; j < routes.length; j++) {
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
      }

      routes.forEach(val => {
        if ('/' + obj.path === val.path && obj.name === val.name) {
          let list = obj.action || [];
          val.action = [];
          list.forEach(vOne => {
            val.action.push(vOne);
          });
        } else if (val.children && val.children.length > 0 && str === 'two') {
          val.children.forEach(value => {
            if ('/' + obj.path === value.path) {
              let listTwo = obj.action || [];
              value.action = [];
              listTwo.forEach(vTwo => {
                value.action.push(vTwo);
              });
            }
          });
        }
      });
    },

    // 设置权限
    setPermissions() {
      sessionStorage.true_name = true;
      sessionStorage.bank_card = true;
      sessionStorage.account_disabled = true;
      sessionStorage.account_black = true;
      sessionStorage.account_forbidden = true;
      sessionStorage.account_kick = true;
      sessionStorage.account_limit = true;
      sessionStorage.qq = true;
      sessionStorage.email = true;
      sessionStorage.mobile = true;
      sessionStorage.address = true;
      sessionStorage.birth = true;
      sessionStorage.answer = true;
      sessionStorage.gender = true;
      sessionStorage.idcard = true;
      sessionStorage.weixin = true;
      sessionStorage.skype = true;
      sessionStorage.nationality = true;
      sessionStorage.language = true;
      sessionStorage.active_applys_export = true;
      sessionStorage.deposit_offlines_export = true;
      sessionStorage.deposit_onlines_export = true;
      sessionStorage.user_withdraws_export = true;
      sessionStorage.valid_user_export = true;
      sessionStorage.rebate_export = true;
      sessionStorage.rebate_details_export = true;
    }

  },
  watch: {
    num: function (newval) {
      if (newval === 0) {
        this.goPath();
      }
    }
  },
  components: {
    errorcode: _getErrorCode_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
  },

  mounted() {
    this.init();
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/login/getErrorCode.vue
//
//
//
//
//
/* harmony default export */ var getErrorCode = ({
  data() {
    return {};
  },

  methods: {
    init() {//                if(typeof(settings) === 'undefined' ) {
      //                    let _this = this;
      //                    this.$http.get(URL.api + '/dev/error.codes', URLCONFIG).then((res) => {
      //                        if (res.data.state === 0 && res.data.data) {
      //                            let list = res.data.data || [];
      //                            for (let i = 0; i < list.length; i++) {
      //                                STATEERROR[list[i].code] = list[i].msg;
      //                            }
      //                        }
      //                    })
      //                }
    }

  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-32966705","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/login/getErrorCode.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"getErrorCode"}})}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/login/getErrorCode.vue
function injectStyle (context) {
  __webpack_require__(242)
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
  getErrorCode,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var login_getErrorCode = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);