(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/systemSettings/logInfo.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var logInfo = ({
  data() {
    return {
      //数据接口地址
      tableUrl: "",
      columnsUrl: "",
      dialogVisible: false,
      details: null
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */]
  },
  methods: {
    init() {
      this.columnsUrl = "/static/json/systemSettings/logInfo/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.system.log.info;
      this.details = null;
    },

    //表格按钮点击事件
    doHandle(item) {
      this.nowId = parseInt(item.row.id) || -1;

      switch (item.fn) {
        case "doDetails":
          this.doDetails(item.row);
          break;
      }
    },

    handleClose() {
      this.dialogVisible = false;
    },

    doDetails(data) {
      this.details = data.message;
      this.dialogVisible = true;
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7f0ca1d7","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/systemSettings/logInfo.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"logInfo"}},[_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableIndex":false,"showRefresh":true,"tableCheck":false},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"详情","visible":_vm.dialogVisible,"size":"tiny","before-close":_vm.handleClose},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.details)}}),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("关 闭")])],1)])],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/systemSettings/logInfo.vue
function injectStyle (context) {
  __webpack_require__(537)
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
  logInfo,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var systemSettings_logInfo = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);