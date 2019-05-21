(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/discountCounting.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var discountCounting = ({
  data() {
    return {
      LANG,
      //搜索框
      type: "search",
      formTitel: "",
      labelWidth: "90px",
      isEdit: {},
      tableUrl: '',
      baseUrl: '',
      subTotalMoney: {},
      totalMoney: {},
      slotShow: false,
      //新增配置
      formVisible: {
        state: false
      },
      searchConfig: [{
        "prop": "user_name",
        "type": "text",
        "label": "会员账号"
      }, {
        "type": "dateGroup",
        "label": "建立时间",
        "prop": [{
          "prop": "date_from",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "date_to",
          "value": "",
          "label": "结束时间"
        }]
      }, {
        "prop": "revoked",
        "value": "",
        "label": "是否冲销",
        "type": "select",
        "list": [{
          "label": "是",
          "value": "1"
        }, {
          "label": "否",
          "value": "0"
        }]
      }]
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      let _this = this;

      this.columnsUrl = "static/json/preAct/discountCounting/columns.json";
      this.tableUrl = URL.api + '/active/rebetset/detail' + "?date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
      this.baseUrl = URL.api + '/active/rebetset/detail';
    },

    getCheckedKeys() {
      this.checkkeys = this.$refs.tree.getCheckedKeys();
    },

    doHandle(item) {
      switch (item.fn) {
        case "doDetail":
          this.doDetail(item.row);
          break;
      }
    },

    doDetail(obj) {
      let temp = {};

      for (let k in obj) {
        temp[k] = obj[k];
      }

      let member = `memberDetailData_${temp.user_id}`;
      window.localStorage[member] = JSON.stringify(temp);
      this.$router.push({
        path: "/memberDetail",
        query: {
          user_id: obj.user_id,
          user_name: obj.user_name
        }
      });
    },

    //查询
    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    resetForm() {
      this.tableUrl = this.baseUrl + "?date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
    },

    getTableData(obj) {
      let attributes = obj.allData.attributes;
      this.slotShow = false;

      if (attributes) {
        this.subTotalMoney = attributes.subTotalMoney;
        this.totalMoney = attributes.totalMoney;
        this.slotShow = true;
      }
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3ddc8524","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/discountCounting.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"clearfix",attrs:{"id":"subAgentRebate"}},[_c('div',{staticClass:"search"},[_c('el-col',{attrs:{"span":24}},[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1)],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"pageSet":true,"showRefresh":false,"tableIndex":false,"getData":true},on:{"do-handle":_vm.doHandle,"get-table-data":_vm.getTableData}},[(_vm.slotShow)?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"5"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalMoney.valid_bet)))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalMoney.coupon)))])]),_vm._v(" "),_c('td',{attrs:{"colspan":"5"}})]):_vm._e(),_vm._v(" "),(_vm.slotShow)?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"5"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG[' 总计'] || '总计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalMoney.valid_bet)))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalMoney.coupon)))])]),_vm._v(" "),_c('td',{attrs:{"colspan":"5"}})]):_vm._e()])],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/preAct/discountCounting.vue
function injectStyle (context) {
  __webpack_require__(453)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3ddc8524"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  discountCounting,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var preAct_discountCounting = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);