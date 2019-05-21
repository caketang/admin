(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/lottey/lotterPeriodManagement.vue
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

/* harmony default export */ var lotterPeriodManagement = ({
  data() {
    return {
      //表格列地址
      columnsUrl: "",
      tableModelUrl: "",
      oType: {
        standard: '',
        fast: '',
        is_auto: ''
      },
      //                baseUrl: ""
      //请求后刷新
      updated: false
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */]
  },
  methods: {
    //初始化页面
    init(row) {
      this.columnsUrl = "/static/json/lotteryNew/lotterperiodManagement/columns.json";
      this.tableModelUrl = URL.api + ROUTES.GET.lottery.order.period;
      this.updated = false; // this.baseUrl = URL.api + ROUTES.GET.lottery.order.period;
    },

    // 开关配置
    // { "prop":"is_standard",
    //     "label":"标准玩法开关",
    //     "type":"switch",
    //     "switchStatus":true,
    //     "class":"tCent",
    //     "show":"support_standard",
    //     "sortable":true,
    //     "disabled": true
    // },
    // { "prop":"is_fast",
    //     "label":"快速玩法开关",
    //     "class":"tCent",
    //     "switchStatus":true,
    //     "type":"switch",
    //     "show":"support_fast",
    //     "sortable":true,
    //     "disabled": true
    // }
    //开关修改事件,
    doChanges(obj) {
      let _this = this;

      _this.updated = false;
      let oUrl = URL.api + ROUTES.PATCH.lottery.switch + "/" + obj.row.l_id;
      let oType = {};
      setTimeout(() => {
        oType.fast = obj.row['is_fast'];
        oType.standard = obj.row['is_standard'];
        oType.is_auto = obj.row['is_auto'];
        this.$.autoAjax('patch', oUrl, oType, {
          ok: res => {
            if (res.data && res.state == 0) {
              this.$message({
                showClose: true,
                message: '操作成功',
                type: 'success'
              });
              _this.updated = true;
            } else {
              this.$message({
                showClose: true,
                message: '操作失败，请稍后重试！',
                type: 'error'
              });
              _this.updated = true;
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      }, 0);
    }

  },

  mounted() {},

  created: function () {
    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6055a6ca","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/lottey/lotterPeriodManagement.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"templateManage w100",staticStyle:{"z-index":"4"},attrs:{"id":"lotterSingleNote"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableModelUrl,"pageSet":false,"updated":_vm.updated,"showRefresh":false},on:{"do-Lock":_vm.doChanges}})],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/lottey/lotterPeriodManagement.vue
function injectStyle (context) {
  __webpack_require__(463)
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
  lotterPeriodManagement,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var lottey_lotterPeriodManagement = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);