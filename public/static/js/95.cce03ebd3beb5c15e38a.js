(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/statement/memberBalance.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var memberBalance = ({
  data() {
    return {
      LANG,
      tableUrl: "",
      tableDate: [],
      mbList: [],
      amount: 0
    };
  },

  components: {},
  methods: {
    init() {
      this.$.autoAjax('get', URL.api + ROUTES.GET.cash.record.balance, '', {
        ok: res => {
          res.data.forEach(item => {
            item.balance = item.balance / 100;
          });
          this.tableDate = res.data;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // 				this.$http.get(URL.api + ROUTES.GET.cash.record.balance,URLCONFIG).then((res) => {
      //                     res.data.data.forEach((item)=>{
      //                         item.balance = item.balance/100
      //                     })
      //                     this.tableDate = res.data.data
      // 				}).catch((err)=>{
      // //					console.log(err)
      // 				})
    },

    //刷校招页面
    doRefresh() {
      this.init();
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  directives: {
    tableWidth: {
      bind: function (el) {
        el.style.width = window.innerWidth - 250 + 'px';
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-313196fd","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/statement/memberBalance.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{staticClass:"w100",attrs:{"id":"fundDetailsSummary"}},[_c('el-col',{attrs:{"span":20,"offset":2}},[_c('el-button',{staticClass:"outexcel",attrs:{"type":"primary","size":"small"},on:{"click":_vm.doRefresh}},[_vm._v(_vm._s(_vm.LANG['刷新'] || '刷新'))])],1),_vm._v(" "),_c('el-col',{attrs:{"span":20,"offset":2}},[_c('el-table',{staticStyle:{"width":"100%"},attrs:{"data":_vm.tableDate,"border":""}},[_c('el-table-column',{attrs:{"prop":"name","label":_vm.LANG['游戏钱包'] || '游戏钱包'}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"balance","label":_vm.LANG['余额'] || '余额'}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"time","label":_vm.LANG['更新时间'] || '更新时间'}})],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/statement/memberBalance.vue
function injectStyle (context) {
  __webpack_require__(533)
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
  memberBalance,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var statement_memberBalance = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);