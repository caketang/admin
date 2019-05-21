(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/dateTimePicker.vue + 2 modules
var dateTimePicker = __webpack_require__(208);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/statement/ZKCnote.vue
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


/* harmony default export */ var ZKCnote = ({
  data() {
    return {
      updated: false,
      times: 30
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */]
  },
  props: {
    columnsUrl: String,
    //表格数据
    tableUrl: String
  },
  methods: {
    init() {},

    doHandle() {}

  },
  computed: {},

  //		watch: {
  //            //如果数据网址发生变化，就执行数据请求
  //            lotteryData: {
  //                handler(val, old) {
  ////                    this.init();
  //                    console.log(val)
  //                },
  //                //是否绑定初始值
  //                immediate: true,
  //                //深度监听
  //                deep: true
  //            },
  //        },
  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-04cc9e45","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/statement/ZKCnote.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"ZKCnote"}},[_c('el-col',{staticClass:"mb20 pb",staticStyle:{"min-height":"500px"},attrs:{"span":24}},[_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"showExport":false,"times":_vm.times,"getData":true},on:{"do-handle":_vm.doHandle}})],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/statement/ZKCnote.vue
function injectStyle (context) {
  __webpack_require__(529)
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
  ZKCnote,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var statement_ZKCnote = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/statement/ZKCstatement.vue
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


/* harmony default export */ var ZKCstatement = ({
  data() {
    return {
      LANG,
      //表格列数据
      columnsUrl: "",
      //表格数据
      tableUrl: "",
      //seach
      seachData: {
        start_time: "",
        end_time: "",
        lottery_number: "",
        lottery_type: ""
      },
      //游戏列表
      gameList: [],
      //条件搜索
      formType: "",
      type: "search",
      labelWidth: "90px",
      //搜索相关
      searchConfig: [{
        "type": "quickDate",
        "showTimes": true
      }, //快捷日期
      {
        "type": "dateTimeGroup",
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
        "prop": "lottery_number",
        "value": "",
        "label": "期号",
        "type": "number"
      }],
      formVisible: {
        state: false
      },
      LANG,
      isEdit: {
        state: false
      },
      formReset: false
    };
  },

  components: {
    formEdit: formEdit["a" /* default */],
    Note: statement_ZKCnote
  },
  methods: {
    init() {
      let _this = this;

      this.columnsUrl = "static/json/lotteryNew/ZKCstatement/columns.json"; //获取自开彩的彩种

      this.$.autoAjax('get', URL.api + '/plottery/menu', '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.gameList = res.data;
            this.seachData.start_time = sessionStorage.dateTimeStart;
            this.seachData.end_time = sessionStorage.dateTimeEnd; //默认选中第一个

            this.seachData.lottery_type = res.data[0].lottery_type;
            console.log(this.seachData);
            this.tableUrl = URL.api + '/plottery/report' + this.addSearch(this.seachData);
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    doQuery(obj) {
      this.seachData.start_time = obj.item.date_from;
      this.seachData.end_time = obj.item.date_to;
      this.seachData.lottery_number = obj.item.lottery_number;
      this.tableUrl = URL.api + '/plottery/report' + this.addSearch(this.seachData);
    },

    resetForm() {},

    handleClick(value) {
      this.seachData.lottery_type = value.name;
      this.tableUrl = URL.api + '/plottery/report' + this.addSearch(this.seachData);
    }

  },
  created: function () {
    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-29eaaadb","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/statement/ZKCstatement.vue
var ZKCstatement_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w100",attrs:{"id":"ZKCstatement"}},[_c('el-card',[_c('el-tabs',{on:{"tab-click":_vm.handleClick},model:{value:(_vm.seachData.lottery_type),callback:function ($$v) {_vm.$set(_vm.seachData, "lottery_type", $$v)},expression:"seachData.lottery_type"}},_vm._l((_vm.gameList),function(item,key){return _c('el-tab-pane',{key:key,attrs:{"label":item.lottery_name,"name":item.lottery_type}})}),1),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formReset":_vm.formReset,"formType":_vm.formType,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1),_vm._v(" "),_c('el-col',[_c('Note',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"lotteryData":_vm.seachData}})],1)],1)],1)}
var ZKCstatement_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/statement/ZKCstatement.vue
function ZKCstatement_injectStyle (context) {
  __webpack_require__(528)
}
/* script */


/* template */

/* template functional */
var ZKCstatement_vue_template_functional_ = false
/* styles */
var ZKCstatement_vue_styles_ = ZKCstatement_injectStyle
/* scopeId */
var ZKCstatement_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var ZKCstatement_vue_module_identifier_ = null

var ZKCstatement_Component = Object(component_normalizer["a" /* default */])(
  ZKCstatement,
  ZKCstatement_render,
  ZKCstatement_staticRenderFns,
  ZKCstatement_vue_template_functional_,
  ZKCstatement_vue_styles_,
  ZKCstatement_vue_scopeId_,
  ZKCstatement_vue_module_identifier_
)

/* harmony default export */ var statement_ZKCstatement = __webpack_exports__["default"] = (ZKCstatement_Component.exports);


/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);