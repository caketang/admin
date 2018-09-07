webpackJsonp([99],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(773)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(451),
  /* template */
  __webpack_require__(999),
  /* scopeId */
  "data-v-392452c0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
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

            errorCode: [{ code: "200", title: "OK" }, { code: "400", title: "Bad Request" }, { code: "401", title: "Unauthorized 权限不足" }, //权限不足
            { code: "402", title: "Request Failed" }, //
            { code: "403", title: "Forbidden" }, { code: "404", title: "Not Found 页面丢失" }, //页面丢失
            { code: "405", title: "Method Not Allowed" }, { code: "406", title: "Not Acceptable" }, { code: "407", title: "Proxy Authentication Required" }, { code: "408", title: "Request Time-out" }, { code: "409", title: "Conflict" }, { code: "410", title: "Gone" }, { code: "411", title: "Length Required" }, { code: "412", title: "Precondition Failed" }, { code: "413", title: "Request Entity Too Large" }, { code: "414", title: "Request-URI Too Large" }, { code: "415", title: "Unsupported Media Type" }, { code: "416", title: "Requested range not satisfiable" }, { code: "417", title: "Expectation Failed" }, { code: "420", title: "Version Undefined" }, { code: "500", title: "Internal Server Error 服务器故障" }, { code: "501", title: "Not Implemented" }, { code: "502", title: "Bad Gateway" }, { code: "503", title: "Service Unavailable" }, { code: "504", title: "Gateway Time-out" }, { code: "505", title: "HTTP Version not supported" }, { code: "510", title: "Version Error" }, { code: "554", title: "Under Maintenance" }, { code: "555", title: "Service Offline" }],
            errorDada: {
                lable: null,
                code: null
            }
        };
    },
    props: {},
    watch: {},
    computed: {},
    methods: {
        //初始化
        //            404   401  403  500  400
        init() {
            if (this.$route.query) {
                let query = this.$route.query;
                this.errorDada.url = query.url || "";
                for (let i in this.errorCode) {
                    if (query.code == this.errorCode[i].code) {
                        this.errorDada.title = this.errorCode[i].title;
                        this.errorDada.code = query.code;
                        return;
                    }
                }
            };
            console.log(this.errorDada);
        }
    },
    mounted() {
        $(window).on("load resize", () => {
            $('.errorBox').css({ height: $(window).height() - '90' });
        });
    },
    created: function () {
        this.init();
    }
});

/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "#errorPage .errorBox[data-v-392452c0]{background:#fff;min-height:645px}#errorPage .errorBox .errorBoxChild[data-v-392452c0]{width:800px;height:645px;background:url(\"/static/img/error.png\");background-size:100% 100%;margin:0 auto}#errorPage .errorBox .errorBoxChild p[data-v-392452c0]{font-size:200%;font-weight:700;font-family:宋体;color:#99a9bf;position:relative;max-width:460px;word-break:break-all;left:340px;top:360px;text-align:left}", ""]);

// exports


/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(608);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("084f9592", content, true);

/***/ }),

/***/ 999:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "w100 tCent",
    attrs: {
      "id": "errorPage"
    }
  }, [_c('el-col', {
    staticClass: "errorBox w100 tCent",
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "errorBoxChild"
  }, [_c('p', {
    staticStyle: {
      "font-size": "16px"
    }
  }, [_vm._v("请求地址："), _c('span', [_vm._v(_vm._s(_vm.errorDada.url))])]), _c('br'), _vm._v(" "), _c('p', [_vm._v("提示:"), _c('br'), _c('span', [_vm._v(_vm._s(_vm.errorDada.title))])])])])], 1)
},staticRenderFns: []}

/***/ })

});