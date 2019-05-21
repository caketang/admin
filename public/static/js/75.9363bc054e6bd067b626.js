(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/lottey/lotteryZKCseting.vue
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


/* harmony default export */ var lotteryZKCseting = ({
  data() {
    return {
      LANG,
      //弹窗
      dialogVisible: false,
      //弹窗选项
      dialogTitle: '',
      //数据接口地址
      tableUrl: "",
      //列配置接口地址
      columnsUrl: "lotteryZKCseting",
      //是否刷新表格列表
      updated: false,
      query: {
        id: '',
        lottery_open_type: '1',
        win_bet: {
          win_bet1: '',
          win_bet2: '',
          max_lose_money1: '',
          max_lose_money2: '',
          start_time: '',
          end_time: ''
        }
      }
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      this.dialogTitle = '';
      this.tableUrl = URL.api + '/plottery/list';
      this.columnsUrl = "static/json/lotteryNew/lotteryZKCseting/columns.json";
    },

    //表格按钮点击事件
    doHandle(item) {
      this.updated = false;
      this.formType = "";
      this.nowId = item.row.id;

      switch (item.fn) {
        case "doEdit":
          this.doEdit(item.row);
          break;
      }
    },

    getForm(obj) {},

    //编辑
    doEdit(row) {
      this.dialogVisible = true;
      this.dialogTitle = row.name;
      this.query.id = row.id;
      this.query.lottery_open_type = row.lottery_open_type;
      this.query.win_bet.start_time = row.start_time;
      this.query.win_bet.end_time = row.end_time;
      this.query.win_bet.win_bet1 = row.win_bet1;
      this.query.win_bet.win_bet2 = row.win_bet2;
      this.query.win_bet.max_lose_money1 = (row.max_lose_money1 / 100).toFixed(2);
      this.query.win_bet.max_lose_money2 = (row.max_lose_money2 / 100).toFixed(2);
    },

    //编辑提交
    doSubmit() {
      this.query.win_bet.max_lose_money1 = this.query.win_bet.max_lose_money1 * 100;
      this.query.win_bet.max_lose_money2 = this.query.win_bet.max_lose_money2 * 100;
      this.$.autoAjax('patch', URL.api + '/plottery/info', this.query, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.updated = true;
            this.$message.success('杀率修改成功！');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
      this.dialogVisible = false;
    },

    handleClose() {
      this.dialogVisible = false;
    }

  },
  created: function () {
    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d2f56d48","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/lottey/lotteryZKCseting.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lotteryZKCseting w100",attrs:{"id":"lotteryZKCseting"}},[_c('el-col',{attrs:{"span":24}},[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"updated":_vm.updated,"autoshowRefresh":true},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.dialogTitle,"visible":_vm.dialogVisible,"size":"tiny","before-close":_vm.handleClose},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('div',[_c('el-row',[_c('el-col',[_c('span',[_vm._v("开奖方式：")]),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"1"},model:{value:(_vm.query.lottery_open_type),callback:function ($$v) {_vm.$set(_vm.query, "lottery_open_type", $$v)},expression:"query.lottery_open_type"}},[_vm._v("杀率控制")]),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"2"},model:{value:(_vm.query.lottery_open_type),callback:function ($$v) {_vm.$set(_vm.query, "lottery_open_type", $$v)},expression:"query.lottery_open_type"}},[_vm._v("随 机")])],1),_vm._v(" "),(_vm.query.lottery_open_type=='1')?_c('el-col',{staticClass:"slNav"},[_c('el-card',{staticClass:"box-card-change"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('span',{staticStyle:{"line-height":"26px"}},[_vm._v("自定义杀率")])]),_vm._v(" "),_c('el-form',{attrs:{"label-width":"90px"}},[_c('el-form-item',{attrs:{"label":"杀 率："}},[_c('el-input',{staticClass:"w80",attrs:{"placeholder":"请输入杀率","type":"number","size":"small"},model:{value:(_vm.query.win_bet.win_bet1),callback:function ($$v) {_vm.$set(_vm.query.win_bet, "win_bet1", $$v)},expression:"query.win_bet.win_bet1"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"库 存："}},[_c('el-input',{staticClass:"w80",attrs:{"placeholder":"请输入金额","type":"number","size":"small"},model:{value:(_vm.query.win_bet.max_lose_money1),callback:function ($$v) {_vm.$set(_vm.query.win_bet, "max_lose_money1", $$v)},expression:"query.win_bet.max_lose_money1"}}),_vm._v(" "),_c('p',{staticClass:"help_gray"},[_vm._v("*提 示：库存指每期玩家最高盈利金额,0 表示不控制")])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"执行时间："}},[_c('el-time-select',{staticClass:"intW",attrs:{"placeholder":"起始时间","size":"small","picker-options":{
                                            start: '00:00',
                                            step: '00:10',
                                            end: '23:50',
                                          }},model:{value:(_vm.query.win_bet.start_time),callback:function ($$v) {_vm.$set(_vm.query.win_bet, "start_time", $$v)},expression:"query.win_bet.start_time"}}),_vm._v(" "),_c('el-time-select',{staticClass:"intW",attrs:{"placeholder":"结束时间","size":"small","picker-options":{
                                            start: '00:00',
                                            step: '00:10',
                                            end: '23:50',
                                        minTime:_vm.query.win_bet.start_time
                                       }},model:{value:(_vm.query.win_bet.end_time),callback:function ($$v) {_vm.$set(_vm.query.win_bet, "end_time", $$v)},expression:"query.win_bet.end_time"}})],1)],1)],1),_vm._v(" "),_c('el-card',{staticClass:"box-card-change"},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('span',{staticStyle:{"line-height":"26px"}},[_vm._v("默认杀率")]),_vm._v(" "),_c('span',{staticClass:"help_gray"},[_vm._v("*提示：在【自定义杀率】执行时间区间以外，执行的杀率操作。")])]),_vm._v(" "),_c('el-form',{attrs:{"label-width":"90px"}},[_c('el-form-item',{attrs:{"label":"杀 率："}},[_c('el-input',{staticClass:"w80",attrs:{"placeholder":"请输入杀率","type":"number","size":"small"},model:{value:(_vm.query.win_bet.win_bet2),callback:function ($$v) {_vm.$set(_vm.query.win_bet, "win_bet2", $$v)},expression:"query.win_bet.win_bet2"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"库 存："}},[_c('el-input',{staticClass:"w80",attrs:{"placeholder":"请输入金额","type":"number","size":"small"},model:{value:(_vm.query.win_bet.max_lose_money2),callback:function ($$v) {_vm.$set(_vm.query.win_bet, "max_lose_money2", $$v)},expression:"query.win_bet.max_lose_money2"}}),_vm._v(" "),_c('p',{staticClass:"help_gray"},[_vm._v("*提 示：库存指每期玩家最高盈利金额,0 表示不控制")])],1)],1)],1)],1):_vm._e(),_vm._v(" "),(_vm.query.lottery_open_type=='1')?_c('el-col',{staticClass:"slNav"},[_c('span',{staticClass:"font14"},[_vm._v("温馨提示：杀率指的是厅主的盈利百分比,不得大于100，该值小于0，表示厅主输钱；该值大于0，表示厅主赢钱。")])]):_vm._e()],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.doSubmit}},[_vm._v("确 定")])],1)])],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/lottey/lotteryZKCseting.vue
function injectStyle (context) {
  __webpack_require__(467)
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
  lotteryZKCseting,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var lottey_lotteryZKCseting = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);