(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/systemSettings/operationLog.vue
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


/* harmony default export */ var operationLog = ({
  data() {
    return {
      //搜索条件
      type: "search",
      formTitel: "",
      labelWidth: "90px",
      isEdit: {},
      formVisible: {
        state: false
      },
      searchConfig: [{
        "prop": "username",
        "value": "",
        "type": "text",
        "label": "用户名"
      }, {
        "prop": "ip",
        "value": "",
        "type": "text",
        "label": "ip"
      }, {
        "prop": "domain",
        "value": "",
        "type": "text",
        "label": "域名"
      }, {
        "type": "dateGroup",
        "label": "起止时间",
        "prop": [{
          "prop": "date_begin",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "date_end",
          "value": "",
          "label": "结束时间"
        }]
      }, {
        "prop": "type",
        "value": "",
        "label": "类型",
        "type": "select",
        "list": []
      }, {
        "prop": "status",
        "value": "",
        "label": "结果",
        "type": "select",
        "list": [{
          "label": "成功",
          "value": "1"
        }, {
          "label": "失败",
          "value": "0"
        }]
      }],
      //数据接口地址
      tableUrl: "",
      columnsUrl: "",
      baseUrl: ""
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      //                for (let k in this.searchConfig[4].list) {
      //                    debugger;
      //                    this.searchConfig[3].list[k].value = parseInt(this.searchConfig[3].list[k].value);
      //                }
      this.columnsUrl = "/static/json/systemSettings/operationLog/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.system.log.user.operation + "?date_begin=" + sessionStorage.dateTimeStart + "&date_end=" + sessionStorage.dateTimeEnd;
      this.baseUrl = URL.api + ROUTES.GET.system.log.user.operation;
      this.getLogType();
    },

    // 取日志类型
    getLogType() {
      let typeList = this.searchConfig[4].list;
      this.$.autoAjax('get', URL.api + '/system/log/user.type', '', {
        ok: res => {
          if (res.data && res.state === 0) {
            let list = res.data || [];

            for (let k = 0; k < list.length; k++) {
              typeList.push({
                "label": list[k].name,
                "value": list[k].id.toString()
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.get(URL.api + '/system/log/user.type/',URLCONFIG).then((res)=>{
      //     if(res.data.data && res.data.state === 0){
      //         let list = res.data.data || [];
      //         for(let k=0; k<list.length; k++){
      //             typeList.push({
      //                 "label": list[k].name,
      //                 "value": list[k].id.toString()
      //             });
      //         }
      //     }
      // })
      .catch(e => {//                    console.log(e);
      });
    },

    // 连接跳转
    doHandle(obj) {
      if (obj.fn === "openUserDetail") {
        this.$router.push({
          path: "/memberManagement",
          query: {
            name: obj.row.name
          }
        });
      }
    },

    //执行查询
    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    //重置查询
    resetForm() {
      this.tableUrl = this.baseUrl + "?date_begin=" + sessionStorage.dateTimeStart + "&date_end=" + sessionStorage.dateTimeEnd;
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c0e7e9e8","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/systemSettings/operationLog.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"operationLog"}},[_c('div',{staticClass:"search"},[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"showAdd":false,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableIndex":false,"tableCheck":false,"tableUrl":_vm.tableUrl},on:{"do-handle":_vm.doHandle}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/systemSettings/operationLog.vue
function injectStyle (context) {
  __webpack_require__(536)
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
  operationLog,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var systemSettings_operationLog = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);