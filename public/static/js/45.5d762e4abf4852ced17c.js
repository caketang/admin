(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/discount.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var discount = ({
  data() {
    return {
      LANG,
      loading: false,
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: null
      },
      //表格数据
      tableUrl: "",
      useScene: "",
      baseUrl: '',
      //列配置
      columnsUrl: "",
      //搜索框
      type: "search",
      formTitel: "",
      labelWidth: "90px",
      isEdit: {},
      //新增配置
      formVisible: {
        state: false
      },
      searchConfig: [{
        "prop": "name",
        "type": "text",
        "label": "活动名称"
      }]
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      this.baseUrl = URL.api + '/active/rebetset/records';
      this.tableUrl = URL.api + '/active/rebetset/records';
      this.columnsUrl = "/static/json/preAct/discount/columns.json";
    },

    //表格数据按钮
    doHandle(item) {
      this.formType = "";
      this.updated = false;

      switch (item.fn) {
        case "getActivity":
          // 编辑
          this.getActivity(item.row);
          break;
      }
    },

    getActivity(obj) {
      this.$router.push({
        path: "/discountDetail",
        query: {
          id: obj.id,
          name: obj.name
        }
      });
    },

    doAdd() {
      this.$router.push({
        path: "/discountCondition"
      });
    },

    //查询
    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    resetForm() {
      this.tableUrl = this.baseUrl;
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-046e924b","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/discount.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"otherPayment"}},[_c('div',{staticClass:"search"},[_c('el-col',{staticClass:"pb",attrs:{"span":24}},[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"showAdd":true,"addText":_vm.LANG['新增活动'] || '新增活动'},on:{"add-new":_vm.doAdd,"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1)],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"getData":true,"showRefresh":false},on:{"do-handle":_vm.doHandle}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/preAct/discount.vue
function injectStyle (context) {
  __webpack_require__(447)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-046e924b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  discount,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var preAct_discount = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);