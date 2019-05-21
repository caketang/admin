(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/effectiveBettingQuery.vue
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


/* harmony default export */ var effectiveBettingQuery = ({
  data() {
    return {
      dataModel: [],
      LANG,
      searchConfig: [{
        "prop": "date",
        "value": "",
        "type": "quickDate",
        "showTimes": true
      }, //快捷日期
      {
        "type": "dateGroup",
        "label": "日期",
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
        "prop": "user_name",
        "value": "",
        "type": "text",
        "label": "用户名"
      }],
      formVisible: {
        state: false
      },
      type: "search",
      labelWidth: "90px",
      isEdit: {
        state: false
      },
      formType: "",
      columnsUrl: "",
      tableUrl: "",
      baseUrl: "",
      updated: false,
      loading: false,
      subTotalValidBet: {},
      totalValidBet: {},
      tableLength: 0,
      assembleColumns: {
        index: 3,
        data: []
      },
      tableData: {
        list: []
      },
      games: []
    };
  },

  components: {
    formEdit: formEdit["a" /* default */],
    tablegrid: tableGrid["a" /* default */]
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      let _this = this;

      this.baseUrl = URL.api + ROUTES.GET.state.rebate;

      function getGame() {
        return new Promise((resolve, reject) => {
          if (_this.assembleColumns.data.length === 0) {
            _this.$.autoAjax('get', URL.api + "/games/list", '', {
              ok: res => {
                //								    console.log(res)
                if (res.state === 0 && res.data) {
                  let model = res.data;
                  let games = _this.games;
                  model.forEach(item => {
                    let obj = {
                      "label": item.name,
                      prop: `games,${item.name}`,
                      "type": "connectProp"
                    };
                    games.push(item.name);

                    _this.assembleColumns.data.push(obj);
                  });

                  _this.assembleColumns.data.push({
                    "prop": 'total',
                    "label": "小计",
                    "type": "divisionMoney"
                  });

                  resolve(); //										stop();
                }
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            });
          } else {
            resolve();
          }
        });
      }

      getGame().then(() => {
        _this.columnsUrl = "/static/json/userManagement/agentAccount/columns.json";
        _this.tableUrl = URL.api + ROUTES.GET.state.rebate + "?date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
      });
    },

    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    resetForm() {
      // this.tableUrl = URL.api+ROUTES.GET.state.rebate+"?date_from=" + sessionStorage.sysTime + "&date_to=" + sessionStorage.sysTime;
      this.init();
    },

    getTableData(obj) {
      this.totalMoney = {};
      this.tableLength = obj.allData.length || 0;
      this.subTotalValidBet = obj.item.subTotalValidBet || {};
      this.totalValidBet = obj.item.totalValidBet || {};
    }

  },

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d5822ebc","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/effectiveBettingQuery.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"betquery"}},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}}),_vm._v(" "),_c('el-col',[_c('tablegrid',{staticClass:"bankTable",attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"getData":true,"assembleColumns":_vm.assembleColumns,"updated":_vm.updated},on:{"get-table-data":_vm.getTableData}},[(_vm.tableLength>0)?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]),_vm._v(" "),_vm._l((_vm.games),function(name){return _c('td',[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalValidBet[name])))])])])}),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalValidBet['total'])))])])])],2):_vm._e(),_vm._v(" "),(_vm.tableLength>0)?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_vm._v(_vm._s(_vm.LANG['合计'] || '合计'))])]),_vm._v(" "),_vm._l((_vm.games),function(name){return _c('td',[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalValidBet[name])))])])])}),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalValidBet['total'])))])])])],2):_vm._e()])],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/userManagement/effectiveBettingQuery.vue
function injectStyle (context) {
  __webpack_require__(502)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d5822ebc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  effectiveBettingQuery,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var userManagement_effectiveBettingQuery = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);