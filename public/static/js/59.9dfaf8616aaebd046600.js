(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/errorPage/errorPage.vue
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var errorPage = ({
  data() {
    return {
      LANG,
      errorCode: [{
        code: "200",
        title: "OK"
      }, {
        code: "400",
        title: "Bad Request"
      }, {
        code: "401",
        title: "Unauthorized 权限不足"
      }, //权限不足
      {
        code: "402",
        title: "Request Failed"
      }, //
      {
        code: "403",
        title: "Forbidden"
      }, {
        code: "404",
        title: "Not Found 页面丢失"
      }, //页面丢失
      {
        code: "405",
        title: "Method Not Allowed"
      }, {
        code: "406",
        title: "Not Acceptable"
      }, {
        code: "407",
        title: "Proxy Authentication Required"
      }, {
        code: "408",
        title: "Request Time-out"
      }, {
        code: "409",
        title: "Conflict"
      }, {
        code: "410",
        title: "Gone"
      }, {
        code: "411",
        title: "Length Required"
      }, {
        code: "412",
        title: "Precondition Failed"
      }, {
        code: "413",
        title: "Request Entity Too Large"
      }, {
        code: "414",
        title: "Request-URI Too Large"
      }, {
        code: "415",
        title: "Unsupported Media Type"
      }, {
        code: "416",
        title: "Requested range not satisfiable"
      }, {
        code: "417",
        title: "Expectation Failed"
      }, {
        code: "420",
        title: "Version Undefined"
      }, {
        code: "500",
        title: "Internal Server Error 服务器故障"
      }, {
        code: "501",
        title: "Not Implemented"
      }, {
        code: "502",
        title: "Bad Gateway"
      }, {
        code: "503",
        title: "Service Unavailable"
      }, {
        code: "504",
        title: "Gateway Time-out"
      }, {
        code: "505",
        title: "HTTP Version not supported"
      }, {
        code: "510",
        title: "Version Error"
      }, {
        code: "554",
        title: "Under Maintenance"
      }, {
        code: "555",
        title: "Service Offline"
      }],
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
      }

      ;
      console.log(this.errorDada);
    }

  },

  mounted() {
    $(window).on("load resize", () => {
      $('.errorBox').css({
        height: $(window).height() - '90'
      });
    });
  },

  created: function () {
    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7df1768a","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/errorPage/errorPage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w100 tCent",attrs:{"id":"errorPage"}},[_c('el-col',{staticClass:"errorBox w100 tCent",attrs:{"span":24}},[_c('div',{staticClass:"errorBoxChild"},[_c('p',{staticStyle:{"font-size":"16px"}},[_vm._v("请求地址："),_c('span',[_vm._v(_vm._s(_vm.errorDada.url))])]),_c('br'),_vm._v(" "),_c('p',[_vm._v("提示:"),_c('br'),_c('span',[_vm._v(_vm._s(_vm.errorDada.title))])])])])],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/errorPage/errorPage.vue
function injectStyle (context) {
  __webpack_require__(415)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7df1768a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  errorPage,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var errorPage_errorPage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);