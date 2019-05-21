(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/dateTimePicker.vue + 2 modules
var dateTimePicker = __webpack_require__(208);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/lottey/lotteryZKCnote.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lotteryZKCnote = ({
  data() {
    return {
      times: 30,
      //弹窗设置
      dialogVisible: false,
      dialogTitle: '预设彩果',
      lottery_number: '',
      manual: '',
      updated: false,
      //当前时间
      time: null,
      end_time: ''
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */]
  },
  props: {
    lotteryData: Object,
    columnsUrl: String,
    //表格数据
    tableUrl: String
  },
  methods: {
    init() {
      let _this = this;

      this.lottery_number = '';
      this.$.autoAjax('get', URL.api + ROUTES.GET.timezone, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            //取得时区
            let t = res.data.time || "";
            let zone = res.data.zone || "";
            let str = res.data.p || "";
            t = t.replace(/\+.*$/, '').replace(/T/, ' ');
            let now = new Date(t).valueOf();
            window.TIMEZONE = setInterval(function () {
              now += 1000;
              _this.time = zone + " ( " + str + " ) " + _this.getMyDate(now);
            }, 1000);
          }
        },
        p: p => {},
        error: e => {
          console.log(e);
        }
      });
    },

    getMyDate(str) {
      var oDate = new Date(str),
          oYear = oDate.getFullYear(),
          oMonth = oDate.getMonth() + 1,
          oDay = oDate.getDate(),
          oHour = oDate.getHours(),
          oMin = oDate.getMinutes(),
          oSen = oDate.getSeconds(),
          oTime = oYear + '-' + this.getzf(oMonth) + '-' + this.getzf(oDay) + ' ' + this.getzf(oHour) + ':' + this.getzf(oMin) + ':' + this.getzf(oSen); //最后拼接时间

      return oTime;
    },

    //补0操作
    getzf(num) {
      if (parseInt(num) < 10) {
        num = '0' + num;
      }

      return num;
    },

    doHandle(row) {
      switch (row.fn) {
        case 'doEdit':
          this.doEdit(row);
          break;
      }
    },

    handleClose() {
      this.dialogVisible = false;
    },

    doEdit(row) {
      this.lottery_number = row.row.lottery_number;
      this.dialogVisible = true;
      this.manual = row.row.preset_code;
      this.end_time = row.row.official_time;
    },

    submit() {
      this.updated = false;
      let query = {};
      query.id = this.lotteryData.lottery_type;
      query.lottery_number = this.lottery_number;
      query.preset_code = this.manual;

      if (query.preset_code == '' || /^\d{1}(,\d{1})*$/.test(query.preset_code)) {
        this.$.autoAjax('patch', URL.api + '/plottery/presetcode', query, {
          ok: res => {
            if (res.state == 0 && res.data) {
              this.$message.success('预设彩果成功！');
              this.dialogVisible = false;
              this.updated = true;
            }
          },
          p: () => {},
          error: e => {
            this.dialogVisible = false;
            this.$message.error(e.responseJSON.msg);
            this.updated = true;
          }
        });
      } else {
        this.$message.error('请检查预设彩果的开奖号码格式和长度是否符合规则');
        this.updated = true;
      }
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e43c47c4","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/lottey/lotteryZKCnote.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"ZKCnote"}},[_c('el-col',{staticClass:"mb20 pb",staticStyle:{"min-height":"500px"},attrs:{"span":24}},[_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"showExport":false,"times":_vm.times,"updated":_vm.updated,"autoshowRefresh":true,"getData":true},on:{"do-handle":_vm.doHandle}})],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.dialogTitle,"visible":_vm.dialogVisible,"size":"tiny","before-close":_vm.handleClose},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('el-row',{attrs:{"gutter":20}},[_c('div',[_c('span',{staticClass:"labelContent"},[_vm._v("彩种：")]),_vm._v(" "),_c('el-tag',{attrs:{"type":"gray"}},[_vm._v(_vm._s(_vm.lotteryData.lottery_name))])],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"labelContent"},[_vm._v("彩期列表：")]),_vm._v(" "),_c('el-tag',{attrs:{"type":"success"}},[_vm._v(_vm._s(_vm.lottery_number))])],1),_vm._v(" "),_c('div',[_c('span',{staticClass:"labelContent"},[_vm._v("封盘时间：")]),_c('span',[_vm._v(_vm._s(_vm.end_time))])]),_vm._v(" "),_c('div',[_c('span',{staticClass:"labelContent"},[_vm._v("当前时间：")]),_c('span',[_vm._v(_vm._s(_vm.time))])]),_vm._v(" "),_c('div',[_c('span',{staticClass:"labelContent"},[_vm._v("预设彩果：")]),_vm._v(" "),_c('el-input',{staticClass:"w60",staticStyle:{"max-width":"240px"},attrs:{"size":"small","placeholder":"开奖号码请用英文逗号隔开"},model:{value:(_vm.manual),callback:function ($$v) {_vm.manual=$$v},expression:"manual"}})],1),_vm._v(" "),_c('p',{staticClass:"font14 state_info pleft20"},[_vm._v("温馨提示：开奖号码必须是数字组成，且必须使用半角逗号隔开，格式如：5,4,6")])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/lottey/lotteryZKCnote.vue
function injectStyle (context) {
  __webpack_require__(471)
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
  lotteryZKCnote,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var lottey_lotteryZKCnote = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/lottey/lotteryZKCprophesy.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lotteryZKCprophesy = ({
  data() {
    return {
      LANG,
      //表格列数据
      columnsUrl: "",
      //表格数据
      tableUrl: "",
      lotteryData: {
        lottery_type: '',
        lottery_number: '',
        lottery_name: ''
      },
      gameList: []
    };
  },

  components: {
    formEdit: formEdit["a" /* default */],
    LotteryNote: lottey_lotteryZKCnote
  },
  methods: {
    init() {
      let _this = this;

      this.columnsUrl = "static/json/lotteryNew/lotteryZKCprophesy/columns.json"; //获取自开彩的彩种

      this.$.autoAjax('get', URL.api + '/plottery/menu', '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.gameList = res.data; //默认选中第一个

            this.lotteryData.lottery_type = res.data[0].lottery_type;
            this.lotteryData.lottery_name = res.data[0].lottery_name;
            this.tableUrl = URL.api + '/plottery/presetlist?id=' + res.data[0].lottery_type;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    doQuery(obj) {
      let j = obj.item;
      j.id = this.lotteryData.lottery_type;
      this.tableUrl = URL.api + '/plottery/presetlist' + this.addSearch(j);
    },

    resetForm() {},

    handleClick(value) {
      console.log(value);
      this.formReset = true;
      this.lotteryData.lottery_type = value.name;
      this.lotteryData.lottery_name = value.label;
      this.tableUrl = URL.api + '/plottery/presetlist' + this.addSearch({
        id: value.name
      });
    },

    doHandle() {}

  },
  created: function () {
    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-fafb34e4","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/lottey/lotteryZKCprophesy.vue
var lotteryZKCprophesy_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w100",attrs:{"id":"lotteryZKCprophesy"}},[_c('el-card',[_c('el-tabs',{on:{"tab-click":_vm.handleClick},model:{value:(_vm.lotteryData.lottery_type),callback:function ($$v) {_vm.$set(_vm.lotteryData, "lottery_type", $$v)},expression:"lotteryData.lottery_type"}},_vm._l((_vm.gameList),function(item,key){return _c('el-tab-pane',{key:key,attrs:{"label":item.lottery_name,"name":item.lottery_type}})}),1),_vm._v(" "),_c('el-col',[_c('LotteryNote',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"lotteryData":_vm.lotteryData}})],1)],1)],1)}
var lotteryZKCprophesy_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/lottey/lotteryZKCprophesy.vue
function lotteryZKCprophesy_injectStyle (context) {
  __webpack_require__(470)
}
/* script */


/* template */

/* template functional */
var lotteryZKCprophesy_vue_template_functional_ = false
/* styles */
var lotteryZKCprophesy_vue_styles_ = lotteryZKCprophesy_injectStyle
/* scopeId */
var lotteryZKCprophesy_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var lotteryZKCprophesy_vue_module_identifier_ = null

var lotteryZKCprophesy_Component = Object(component_normalizer["a" /* default */])(
  lotteryZKCprophesy,
  lotteryZKCprophesy_render,
  lotteryZKCprophesy_staticRenderFns,
  lotteryZKCprophesy_vue_template_functional_,
  lotteryZKCprophesy_vue_styles_,
  lotteryZKCprophesy_vue_scopeId_,
  lotteryZKCprophesy_vue_module_identifier_
)

/* harmony default export */ var lottey_lotteryZKCprophesy = __webpack_exports__["default"] = (lotteryZKCprophesy_Component.exports);


/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);