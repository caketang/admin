(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/instantNote/notePremiumTips.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var notePremiumTips = ({
  data() {
    return {
      LANG,
      tableLength: 0,
      // 小计
      subTotalMoney: {},
      totalMoney: {},
      updated: false,
      columnsUrl: '',
      tableUrl: '',
      labelWidthSearch: "100px",
      typeSearch: "search",
      formVisibleSearch: {
        state: false
      },
      //搜索
      searchConfig: [{
        "type": "quickDate",
        "showTimes": true
      }, //快捷日期
      {
        "prop": "user_name",
        "value": "",
        "type": "text",
        "label": "用户名"
      }, {
        "prop": "order_activity_number",
        "value": "",
        "type": "text",
        "label": "订单号"
      }, {
        "type": "dateTimeGroup",
        "label": "交易时间",
        "prop": [{
          "prop": "start_time",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "end_time",
          "value": "",
          "label": "结束时间"
        }]
      }, {
        "prop": "game_name",
        "value": "",
        "label": "游戏",
        "type": "select",
        "list": []
      }],
      //是否编辑数据
      isEditSearch: {
        state: false
      }
    };
  },

  methods: {
    init() {
      this.tableUrl = URL.api + ROUTES.GET.order.activity + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
      this.baseUrl = URL.api + ROUTES.GET.order.activity;
      this.columnsUrl = '../../../static/json/Note/notepremiumtips/notepremiumtips.json';
      this.$.autoAjax('get', URL.api + ROUTES.GET.order.gamelist, '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            for (let [val, item] of Object.entries(res.data)) {
              this.searchConfig[4].list.push({
                label: item,
                value: val
              });
            }
          } else {
            this.$message.error(LANG['获取游戏类型失败'] || '获取游戏类型失败');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    getTableData(obj) {
      this.tableLength = 0;
      this.subTotalMoney = {
        total_money: 0
      };
      this.totalMoney = {
        total_money: 0
      };

      if (obj.allData && obj.allData.attributes != null) {
        this.tableLength = obj.allData.attributes.total;
      } else {
        this.tableLength = 0;
      }

      if (obj.allData && obj.allData.attributes) {
        this.subTotalMoney.total_money = FORMATMONEY(obj.allData.attributes.subTotalMoney.total_money);
        this.totalMoney.total_money = FORMATMONEY(obj.allData.attributes.totalMoney.total_money);
      }
    },

    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    resetForm() {
      this.tableUrl = this.baseUrl + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
    },

    doHandle() {}

  },
  components: {
    formEdit: formEdit["a" /* default */],
    tableGrid: tableGrid["a" /* default */]
  },
  computed: {},
  watch: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-370aa3b0","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/instantNote/notePremiumTips.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"PremiumTips"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('form-edit',{attrs:{"formVisible":_vm.formVisibleSearch,"formConfig":_vm.searchConfig,"type":_vm.typeSearch,"labelWidth":_vm.labelWidthSearch,"isEdit":_vm.isEditSearch,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('table-grid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"tableIndex":false,"showheadbtn":true,"updated":_vm.updated,"showRefresh":true,"getData":true},on:{"get-table-data":_vm.getTableData,"do-handle":_vm.doHandle}},[(_vm.tableLength > 0)?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"7"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.total_money))])])]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0 )?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"7"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['总计'] || '总计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.total_money))])])]):_vm._e()])],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/instantNote/notePremiumTips.vue
function injectStyle (context) {
  __webpack_require__(506)
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
  notePremiumTips,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var instantNote_notePremiumTips = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);