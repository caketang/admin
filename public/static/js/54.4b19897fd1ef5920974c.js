(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/lottey/lotteryResults.vue
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
//
//
//
//
//

/* harmony default export */ var lotteryResults = ({
  data() {
    return {
      LANG,
      //数据接口地址
      tableUrl: "",
      baseUrl: "",
      //列配置接口地址
      columnsUrl: "",
      //搜索条件
      lottery_id: "",
      lotteryTypeList: [],
      manualAward: {
        lottery_number: '',
        lottery_id: ''
      },
      lotteryList: [],
      dialogVisible: false
    };
  },

  components: {
    tableGrid: tableGrid["a" /* default */]
  },
  methods: {
    init() {
      let _this = this;

      _this.lotteryList = [];
      _this.dialogVisible = false;
      this.columnsUrl = "/static/json/lotteryNew/lotterytResults/columns.json";
      this.baseUrl = URL.api + ROUTES.GET.lottery.result; //获取彩种列表

      let url = URL.api + ROUTES.GET.lottery.types.$;
      this.$.autoAjax('get', url, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];
            let num = 0;
            model.forEach(item => {
              _this.lotteryList.push({
                "label": item.name,
                "value": item.id.toString(),
                "pid": item.pid
              });
            });
            _this.lotteryTypeList = [];

            for (let k in model) {
              if (model[k].pid != 0) {
                num = num + 1;

                if (num === 1) {
                  _this.lottery_id = parseInt(model[k].id).toString();
                  _this.tableUrl = _this.baseUrl + "?lottery_id=" + _this.lottery_id;
                }

                _this.lotteryTypeList.push({
                  "name": model[k].name,
                  "id": model[k].id.toString() //id为38 是香港六合彩

                });
              }
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //查询
    changeLottery(val) {
      this.lottery_id = val;
      this.tableUrl = this.baseUrl + "?lottery_id=" + parseInt(val);
    },

    awardButton() {
      this.dialogVisible = true;
    },

    handleClose() {
      this.dialogVisible = false;
    },

    manualAwardSubmit() {
      let _this = this;

      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.lottery.handSettle, this.manualAward, {
        ok: v => {
          v.state === 0 && v.data ? _this.$message.success('手动派彩成功') : _this.$message.error('手动派彩失败');
        }
      });
      this.dialogVisible = false;
    }

  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5e2c60d6","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/lottey/lotteryResults.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"lotteryResults"}},[_c('el-row',[_c('el-col',{staticClass:"pb",attrs:{"span":12}},[_c('div',[_c('span',[_vm._v(_vm._s(_vm.LANG["彩种名称"] || "彩种名称"))]),_vm._v(" "),_c('el-select',{staticStyle:{"width":"200px"},attrs:{"placeholder":"请选择"},on:{"change":_vm.changeLottery},model:{value:(_vm.lottery_id),callback:function ($$v) {_vm.lottery_id=$$v},expression:"lottery_id"}},_vm._l((_vm.lotteryTypeList),function(item){return _c('el-option',{key:item.id,staticStyle:{"width":"200px"},attrs:{"label":item.name,"value":item.id}})}),1)],1)]),_vm._v(" "),_c('el-col',{staticClass:"manualAward",attrs:{"span":12}},[_c('div',{staticClass:"manualAwardBtn"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.awardButton}},[_vm._v("手动派彩")])],1),_vm._v(" "),_c('div',[_c('el-dialog',{attrs:{"title":"提示","visible":_vm.dialogVisible,"size":"tiny","before-close":_vm.handleClose},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('el-form',{ref:"form",attrs:{"model":_vm.manualAward,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"彩种名称"}},[_c('el-select',{staticClass:"inputW",attrs:{"placeholder":"请选择彩种名称"},model:{value:(_vm.manualAward.lottery_id),callback:function ($$v) {_vm.$set(_vm.manualAward, "lottery_id", $$v)},expression:"manualAward.lottery_id"}},_vm._l((_vm.lotteryList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"彩期"}},[_c('el-input',{staticClass:"inputW",attrs:{"type":"number"},model:{value:(_vm.manualAward.lottery_number),callback:function ($$v) {_vm.$set(_vm.manualAward, "lottery_number", $$v)},expression:"manualAward.lottery_number"}})],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.manualAwardSubmit}},[_vm._v("确 定")])],1)],1)],1)])],1),_vm._v(" "),_c('el-col',[_c('tableGrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"pageSet":true,"showRefresh":false,"tableIndex":false}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/lottey/lotteryResults.vue
function injectStyle (context) {
  __webpack_require__(466)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5e2c60d6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  lotteryResults,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var lottey_lotteryResults = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);