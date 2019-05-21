(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/cash/transferRecord.vue
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


/* harmony default export */ var transferRecord = ({
  data() {
    return {
      //查询条件
      searchConfig: [{
        "prop": "username",
        "value": "",
        "type": "text",
        "label": "用户名"
      }, {
        "prop": "no",
        "value": "",
        "type": "text",
        "label": "交易订单号"
      }, {
        "prop": "status",
        "value": "",
        "label": "状态",
        "type": "select",
        "list": [{
          "label": "成功",
          "value": "success"
        }, {
          "label": "失败",
          "value": "fail"
        }]
      }, {
        "type": "dateGroup",
        "label": "转帐时间",
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
        "prop": "out_id",
        "value": "",
        "label": "转出",
        "type": "select",
        "list": []
      }, {
        "prop": "in_id",
        "value": "",
        "label": "转入",
        "type": "select",
        "list": []
      }],
      type: "search",
      labelWidth: "90px",
      formVisible: {
        state: false
      },
      //是否编辑数据
      isEdit: {
        state: false
      },
      turnOutList: [],
      turnInList: [],
      //数据接口地址
      tableUrl: "",
      //列配置接口地址
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
      this.tableUrl = URL.api + ROUTES.GET.cash.record.transfer + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
      this.baseUrl = URL.api + ROUTES.GET.cash.record.transfer;
      this.columnsUrl = "static/json/cash/transferRecord/columns.json"; //第三方游戏

      let _this = this;

      this.$.autoAjax('get', URL.api + ROUTES.GET.wallet.types, '', {
        ok: res => {
          let turnOutList = _this.searchConfig[4].list;
          let turnInList = _this.searchConfig[5].list;

          if (res.state == 0 && res.data) {
            let model = res.data || [];

            for (let i in model) {
              turnOutList.push({
                "label": model[i].name,
                "value": model[i].id.toString()
              });
              turnInList.push({
                "label": model[i].name,
                "value": model[i].id.toString()
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.wallet.types,URLCONFIG).then((res) => {
      //     let turnOutList = _this.searchConfig[4].list;
      //     let turnInList = _this.searchConfig[5].list;
      //     if(res.data.state == 0 && res.data.data){
      //         let model= res.data.data || [];
      //         for(let i in model){
      //             turnOutList.push({
      //                 "label": model[i].name,
      //                 "value": model[i].id.toString()
      //             });
      //             turnInList.push({
      //                 "label": model[i].name,
      //                 "value": model[i].id.toString()
      //             });
      //         }
      //     }
      // })
    },

    //执行查询
    doQuery(obj) {
      // 对于金额作出处理
      let obj_f = {};
      obj_f.end_time = obj.item.end_time;
      obj_f.in_id = obj.item.in_id;

      if (obj.item.lower_limit) {
        obj_f.lower_limit = obj.item.lower_limit * 100;
      }

      obj_f.out_id = obj.item.out_id;
      obj_f.start_time = obj.item.start_time;
      obj_f.status = obj.item.status;
      obj_f.no = obj.item.no;

      if (obj.item.upper_limit) {
        obj_f.upper_limit = obj.item.upper_limit * 100;
      }

      obj_f.username = obj.item.username;
      this.tableUrl = this.baseUrl + this.addSearch(obj_f);
    },

    //重置查询
    resetForm() {
      this.tableUrl = this.baseUrl + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
    },

    //表格数据按钮
    doHandle(item) {
      switch (item.fn) {
        case "openUserSet":
          // 用户名跳转
          this.openUserSet(item.row);
          break;

        default:
          break;
      }
    },

    //用户名跳转
    openUserSet(item) {
      this.$router.push({
        path: '/memberManagement',
        query: {
          name: item.username
        }
      });
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1b5a2fad","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/cash/transferRecord.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"transferRecord"}},[_c('div',{staticClass:"search"},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"showAdd":false,"isEdit":_vm.isEdit},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableIndex":false,"tableCheck":false,"tableUrl":_vm.tableUrl},on:{"do-handle":_vm.doHandle}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/cash/transferRecord.vue
function injectStyle (context) {
  __webpack_require__(519)
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
  transferRecord,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var cash_transferRecord = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);