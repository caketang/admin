(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/statement/deliveryStatement.vue
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


/* harmony default export */ var deliveryStatement = ({
  data() {
    return {
      LANG,
      //表格列数据
      columnsUrl: "",
      //表格数据
      tableUrl: "",
      //重置数据url
      baseUrl: "",
      //搜索相关
      searchConfig: [{
        "prop": "period_number",
        "value": "",
        "label": "期数",
        "type": "select",
        "placeholder": "选择期数",
        "list": []
      }, {
        "prop": "status",
        "value": "",
        "label": "状态",
        "type": "select",
        "placeholder": "请选择状态",
        "list": [{
          "label": "全部",
          "value": "all"
        }, {
          "label": "未付款",
          "value": "pending"
        }, {
          "label": "已付款",
          "value": "paid"
        }]
      }],
      type: "search",
      labelWidth: "90px",
      formVisible: {
        state: false
      },
      //是否编辑数据
      isEdit: {
        state: false
      }
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      this.columnsUrl = "static/json/statement/deliveryStatement/columns.json"; //表格数据

      this.tableUrl = URL.api + ROUTES.GET.system.settlement;
      this.baseUrl = URL.api + ROUTES.GET.system.settlement; //获取期数列表

      let periodUrl = URL.api + '/system/website.settlement.period';
      this.$.autoAjax('get', periodUrl, '', {
        ok: res => {
          let mode = res.data;

          for (let i in mode) {
            this.searchConfig[0].list.push({
              'id': mode[i].id,
              'label': '第' + mode[i].number + '期',
              'value': mode[i].number
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(periodUrl, URLCONFIG).then((res) => {
      // 	let mode = res.data.data;
      // 	for (let i in mode) {
      // 		this.searchConfig[0].list.push({
      //            'id': mode[i].id,
      // 			'label': '第' + mode[i].number + '期',
      // 			'value': mode[i].number
      // 		})
      // 	}
      // });
    },

    //执行查询
    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    resetForm() {//				console.log('重置')
    },

    doHandle(item) {
      //				this.updated = false;
      switch (item.fn) {
        case "toDeliveDetail":
          this.toDeliveDetail(item.row);
          break;
      }
    },

    toDeliveDetail(row) {
      this.$router.push({
        path: '/deliveryDetail',
        query: {
          period_number: row.period_number,
          id: row.id
        }
      });
    }

  },

  created() {
    this.init();
  },

  activated() {}

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d67f37b4","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/statement/deliveryStatement.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"deliveryStatement"}},[_c('el-row',{staticClass:"deliveryStatement_main"},[_c('el-col',{staticClass:"deliveryStatement_searchForm",attrs:{"span":24}},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":'search',"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('div',{staticClass:" deliveryStatement_title"}),_vm._v(" "),_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"pageSet":false,"tableIndex":false,"getData":true},on:{"do-handle":_vm.doHandle}})],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/statement/deliveryStatement.vue
function injectStyle (context) {
  __webpack_require__(530)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d67f37b4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  deliveryStatement,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var statement_deliveryStatement = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);