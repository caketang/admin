(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[100],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/systemSettings/otherGamesAccounts.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var otherGamesAccounts = ({
  data() {
    return {
      LANG,
      columnsUrl: "",
      tableUrl: ""
    };
  },

  methods: {
    init() {
      this.tableUrl = URL.api + '/system/games/backend';
      this.columnsUrl = "/static/json/systemSettings/otherGamesAccounts/columns.json";
    }

  },
  components: {
    tablegrid: tableGrid["a" /* default */]
  },
  computed: {},
  watch: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-24fcec23","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/systemSettings/otherGamesAccounts.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"otherGamesAccounts"}},[_c('el-col',{staticClass:"cont"},[_c('el-col',{staticClass:"mb10"},[_c('span',[_vm._v(_vm._s(_vm.LANG['游戏后台帐号列表'] || '游戏后台帐号列表'))])]),_vm._v(" "),_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"pageSet":false,"showRefresh":false}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/systemSettings/otherGamesAccounts.vue
function injectStyle (context) {
  __webpack_require__(544)
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
  otherGamesAccounts,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var systemSettings_otherGamesAccounts = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);