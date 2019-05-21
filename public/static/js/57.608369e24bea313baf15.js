(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/systemSettings/currencySettings.vue
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
//    import editTable from '../../components/editTable.vue'

/* harmony default export */ var currencySettings = ({
  data() {
    return {
      LANG,
      //表格列地址
      columnsUrl: "",
      tableUrl: "",
      formDataLength: '',
      loading: true,
      updataTable: false
    };
  },

  components: {
    //            edittable:editTable,
    tablegrid: tableGrid["a" /* default */]
  },
  methods: {
    //初始化页面
    init() {
      this.columnsUrl = "static/json/systemSettings/currencySettings/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.system.currency; //                this.$http.get(this.tableUrl).then((res) => {
      //                    this.formDataLength = res.data.data.length;
      //                }).catch(function (err) {
      //                        console.log(err)
      //                })
    },

    doHandle(e) {
      switch (e.fn) {
        case "dostart":
          this.dostart(e.row);
          break;
      }
    },

    dostart(row) {
      this.updataTable = false;
      let doStart = {
        state: '1'
      };
      let doStop = {
        state: '0'
      };
      let formDataUrl = URL.api + ROUTES.PATCH.system.currency + '/' + row.id;
      row.status == '1' && this.$.autoAjax('patch', formDataUrl, doStop, {
        ok: res => {
          if (res.data && res.state === 0) {
            this.$message.success(this.LANG['状态改变成功！'] || '状态改变成功！'); //刷新数据

            this.updataTable = true;
          } else {
            this.$message.error(this.LANG['状态改变失败！'] || '状态改变失败！');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.patch(formDataUrl, doStop,URLCONFIG).then((res) => {
      //     if (res.data.data && res.data.state === 0) {
      //         this.$message.success(this.LANG['状态改变成功！'] || '状态改变成功！');
      //         //刷新数据
      //         this.updataTable=true;
      //     } else {
      //         this.$message.error(this.LANG['状态改变失败！'] || '状态改变失败！');
      //     }
      // })
      .catch(function (err) {//                    console.log(err)
      });
      row.status == '0' && this.$.autoAjax('patch', formDataUrl, doStart, {
        ok: res => {
          if (res.data && res.state === 0) {
            this.$message.success(this.LANG['状态改变成功！'] || '状态改变成功！'); //刷新数据

            this.updataTable = true;
          } else {
            this.$message.error(this.LANG['状态改变失败！'] || '状态改变失败！');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.patch(formDataUrl, doStart,URLCONFIG).then((res) => {
      //     if (res.data.data && res.data.state === 0) {
      //         this.$message.success(this.LANG['状态改变成功！'] || '状态改变成功！');
      //         //刷新数据
      //         this.updataTable=true;
      //     } else {
      //         this.$message.error(this.LANG['状态改变失败！'] || '状态改变失败！');
      //     }
      // })
      .catch(function (err) {//                    console.log(err)
      });
    }

  },
  created: function () {
    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7b0a94c0","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/systemSettings/currencySettings.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"templateManage w100",attrs:{"id":"currencySettings"}},[_c('el-row',[_c('el-col',{staticClass:"currencyMain"},[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"showRefresh":false,"pageSet":false,"tableIndex":false,"updated":_vm.updataTable},on:{"do-handle":_vm.doHandle}})],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/systemSettings/currencySettings.vue
function injectStyle (context) {
  __webpack_require__(540)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7b0a94c0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  currencySettings,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var systemSettings_currencySettings = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);