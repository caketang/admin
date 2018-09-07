webpackJsonp([93],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(752)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(464),
  /* template */
  __webpack_require__(975),
  /* scopeId */
  "data-v-18028bb4",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    methods: {
        init() {
            //                if(typeof(settings) === 'undefined' ) {
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

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(319);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("294cd6da", content, true);

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(327)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(310),
  /* template */
  __webpack_require__(352),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "getErrorCode"
    }
  })
},staticRenderFns: []}

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getErrorCode_vue__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getErrorCode_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__getErrorCode_vue__);
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
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
            let _this = this;
            //                "tid": "string(required) #分配给厅主的id",
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
                this.$http.post(URL.api + ROUTES.POST.admin.login.pt, JSON.stringify(obj), URLCONFIG).then(res => {
                    if (res.data.state == 0 && res.data.data) {
                        sessionStorage.clear();
                        let model = res.data.data;
                        sessionStorage.user = JSON.stringify(model.list);
                        sessionStorage.userId = parseInt(model.list.id) || -1;
                        sessionStorage.userName = model.list.username || "admin";
                        sessionStorage.routers = JSON.stringify(model.route);
                        sessionStorage.timeOut = res.data.data.expire ? parseInt(res.data.data.expire) * 1000 : 0;
                        sessionStorage.timeOutString = res.data.data.expire ? new Date(parseInt(res.data.data.expire) * 1000) : 0;
                        sessionStorage.refresh_token = res.data.data.refresh_token;
                        sessionStorage.token = model.token;
                        // 总平台跳转过来为管理员角色
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
                            _this.$router.push({ path: '/setup' });
                        } else {
                            _this.$router.push({ path: '/' + JUMPCONFIG.path });
                        }
                    } else if (res.data.state == 4001) {
                        _this.$message.error(LANG['无效用户'] || '无效用户');
                        _this.doclose();
                    } else if (res.data.state == 4002) {
                        _this.$message.error(LANG['跳转超时'] || '跳转超时');
                        _this.doclose();
                    }
                    _this.loading = false;
                }).catch(e => {
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
        errorcode: __WEBPACK_IMPORTED_MODULE_0__getErrorCode_vue___default.a
    },
    mounted() {
        this.init();
    }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "#authorization[data-v-18028bb4]{height:100%;min-height:720px;position:absolute;top:0;-moz-background-size:100% 100%;background-size:100% 100%;text-align:center}.mt200[data-v-18028bb4]{margin-top:20%}", ""]);

// exports


/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(587);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("0be06d62", content, true);

/***/ }),

/***/ 975:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "w100",
    attrs: {
      "id": "authorization"
    }
  }, [_c('el-row', [_c('el-col', {
    staticClass: "mb20 mt200"
  }, [_vm._v("\n            " + _vm._s(_vm.str)), (!_vm.state) ? _c('span', [_vm._v(_vm._s(_vm.num) + _vm._s(_vm.LANG['后跳转页面'] || '后跳转页面'))]) : _vm._e(), _vm._v("！\n        ")]), _vm._v(" "), (!_vm.state) ? _c('el-col', [_c('el-button', {
    on: {
      "click": _vm.docancel
    }
  }, [_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))])], 1) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ })

});