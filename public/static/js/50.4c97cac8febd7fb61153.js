(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/statement/fundDetailsSummary.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var fundDetailsSummary = ({
  data() {
    return {
      LANG,
      tableUrl: "",
      baseUrl: '',
      tableDate: [],
      model: {},
      sday: sessionStorage.dateTimeStart,
      eday: sessionStorage.dateTimeEnd,
      //搜索相关
      searchConfig: [{
        "type": "quickDate",
        "showTimes": true
      }, //快捷日期
      {
        "type": "dateGroup",
        "label": "日期",
        "prop": [{
          "prop": "day_begin",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "day_end",
          "value": "",
          "label": "结束时间"
        }]
      }, //                    {
      //                        "prop": "type",
      //                        "value": "1",
      //                        "label": "账号体系",
      //                        "type": "select",
      //                        "list": [{'label': '会员', 'value': '1'}]
      //                    },
      {
        "prop": "member_name",
        "value": "",
        "type": "text",
        "label": "用户名",
        'placeholder': "请输入用户名"
      }],
      type: "search",
      labelWidth: "120px",
      formVisible: {
        state: false
      },
      isEdit: {
        state: false
      },
      loading: false,
      query: {
        member_name: '',
        day_begin: '',
        day_end: '',
        type: ''
      }
    };
  },

  components: {
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init(str) {
      this.loading = true;

      if (str) {
        this.tableUrl = this.baseUrl + str;
      } else {
        this.tableUrl = URL.api + ROUTES.GET.cash.trade + `?day_begin=${this.sday}&day_end=${this.eday}`;
      }

      this.query.day_begin = this.query.day_begin || this.sday;
      this.query.day_end = this.query.day_end || this.eday;
      this.baseUrl = URL.api + ROUTES.GET.cash.trade;
      let tableUrl = this.tableUrl;
      this.model = {
        account_total: 0,
        active_num: 0,
        active_sum: 0,
        increase_num: 0,
        increase_sum: 0,
        outcrease_num: 0,
        outcrease_sum: 0,
        rebet_num: 0,
        rebet_sum: 0,
        recharge_company: 0,
        recharge_company_num: 0,
        recharge_online: 0,
        recharge_online_num: 0,
        recharge_tz: 0,
        recharge_tz_num: 0,
        true_total: 0,
        withdraw_deduct_num: 0,
        withdraw_deduct_sum: 0,
        withdraw_tz: 0,
        withdraw_tz_num: 0,
        withdraw_user: 0,
        withdraw_user_num: 0
      };

      let _this = this;

      if (tableUrl != null && tableUrl != "") {
        this.$.autoAjax('get', tableUrl, '', {
          ok: res => {
            if (res.state === 0 && res.data) {
              _this.model = res.data;

              for (let k in res.data) {
                _this.model[k] = res.data[k];
              }
            } else {
              _this.$message.error(res.msg);
            }

            _this.loading = false;
          },
          p: () => {},
          error: e => {
            _this.loading = false;
          }
        }); //                     this.$http.get(tableUrl, URLCONFIG).then((res) => {
        //                         if (res.data.state === 0 && res.data.data) {
        //                             _this.model = res.data.data;
        //                             for (let k in res.data.data) {
        //                                 _this.model[k] = res.data.data[k];
        //                             }
        //                         } else {
        //                             _this.$message.error(res.data.msg);
        //                         }
        //                         _this.loading = false;
        //                     }).catch((err) => {
        //                         _this.loading = false;
        // //                        console.log(err)
        //                     })
      }
    },

    //刷校招页面
    doRefresh() {
      this.init();
    },

    // 页面跳转处理
    pageJump(type, num, history) {
      if (FORMATMONEY(num)) {
        if (history) {
          this.query.type = 2;
        } else {
          this.query.type = '';
        }

        this.$router.push({
          path: '/' + type,
          query: this.query
        });
      } else {
        this.$message.error(LANG['无金额不需跳转查看'] || '无金额不需跳转查看');
      }
    },

    //获取日期
    //查询数据
    doQuery(obj) {
      let str = "";

      if (obj.item.type && !obj.item.member_name) {
        this.$message.error(LANG['请输入用户名'] || '请输入用户名');
        return;
      } //                if (obj.item.member_name && !obj.item.type) {
      //                    this.$message.error(LANG['请选择帐号体系'] || '请选择帐号体系');
      //                    return;
      //                }


      if (!obj.item.day_begin || !obj.item.day_end) {
        this.$message.error(LANG['请输入完整的日期查询'] || '请输入完整的日期查询');
        return;
      }

      this.query.member_name = obj.item.member_name;
      this.query.day_begin = obj.item.day_begin;
      this.query.day_end = obj.item.day_end;
      this.query.type = obj.item.type;
      str = this.addSearch(obj.item);
      this.init(str);
    },

    getDay(obj) {
      this.sday = obj.sday;
      this.eday = obj.eday;
      this.query.day_begin = this.sday;
      this.query.day_end = this.eday;
      this.init();
    },

    resetForm(obj) {
      let str = '?day_begin=' + sessionStorage.dateTimeStart + '&day_end=' + sessionStorage.dateTimeEnd;
      this.query.day_begin = sessionStorage.dateTimeStart;
      this.query.day_end = sessionStorage.dateTimeEnd;
      this.init(str);
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3fcdfd17","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/statement/fundDetailsSummary.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"fundDetailsSummary"}},[_c('el-card',{staticClass:"box-card"},[_c('el-col',{staticClass:"mb20"},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"showAdd":false,"isEdit":_vm.isEdit},on:{"get-day":_vm.getDay,"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1),_vm._v(" "),_c('el-col',[_c('table',{staticClass:"el-table el-table__header el-table--border",staticStyle:{"width":"100%"},attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('thead',[_c('tr',{staticClass:"tritem"},[_c('td',{staticClass:"el-table_1_column_36",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['收入'] || '收入'))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_36",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['收入金额'] || '收入金额'))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_36",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['支出'] || '支出'))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_36",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['支出明细'] || '支出明细'))])])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"tditem"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['公司入款'] || '公司入款'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.pageJump('offlineReceipts',_vm.model.recharge_company)}}},[_c('el-tag',{attrs:{"type":"primary"}},[_vm._v("\n                                    "+_vm._s(_vm._f("formatMoney")(_vm.model.recharge_company))+"("+_vm._s(_vm.model.recharge_company_num)+"人)\n                                ")])],1)],1)]),_vm._v(" "),_c('td',{staticClass:"tditem"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['会员出款'] || '会员出款'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.pageJump('memberGetOut',_vm.model.withdraw_user)}}},[_c('el-tag',{attrs:{"type":"primary"}},[_vm._v("\n                                    "+_vm._s(_vm._f("formatMoney")(_vm.model.withdraw_user))+"("+_vm._s(_vm.model.withdraw_user_num)+"人)\n                                ")])],1)],1)])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"tditem"},[_c('div',{staticClass:"cell "},[_vm._v(_vm._s(_vm.LANG['线上支付'] || '线上支付'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.pageJump('onLineReceipts',_vm.model.recharge_online)}}},[_c('el-tag',{attrs:{"type":"primary"}},[_vm._v("\n                                    "+_vm._s(_vm._f("formatMoney")(_vm.model.recharge_online))+"("+_vm._s(_vm.model.recharge_online_num)+"人)\n\n                                ")])],1)],1)]),_vm._v(" "),_c('td',{staticClass:"tditem"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['给予优惠'] || '给予优惠'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.model.active_sum))+"("+_vm._s(_vm.model.active_num)+"人)")])])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"tditem"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['手动存款'] || '手动存款'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.pageJump('offlineReceipts',_vm.model.recharge_tz,'type')}}},[_c('el-tag',{attrs:{"type":"primary"}},[_vm._v("\n                                    "+_vm._s(_vm._f("formatMoney")(_vm.model.recharge_tz))+"("+_vm._s(_vm.model.recharge_tz_num)+"人)\n                                ")])],1)],1)]),_vm._v(" "),_c('td',{staticClass:"tditem"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['手动提款'] || '手动提款'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.pageJump('memberGetOut',_vm.model.withdraw_tz,'type')}}},[_c('el-tag',{attrs:{"type":"primary"}},[_vm._v("\n                                    "+_vm._s(_vm._f("formatMoney")(_vm.model.withdraw_tz))+"("+_vm._s(_vm.model.withdraw_tz_num)+"人)\n                                ")])],1)],1)])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"tditem"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['手动增加'] || '手动增加'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.model.increase_sum))+"("+_vm._s(_vm.model.increase_num)+"人)")])]),_vm._v(" "),_c('td',{staticClass:"tditem"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['手动减少'] || '手动减少'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.model.outcrease_sum))+"("+_vm._s(_vm.model.outcrease_num)+"人)")])])]),_vm._v(" "),_c('tr',[_c('td',{staticClass:"tditem"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['会员出款被扣金额'] || '会员出款被扣金额'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.model.withdraw_deduct_sum))+"("+_vm._s(_vm.model.withdraw_deduct_num)+"人)")])]),_vm._v(" "),_c('td',{staticClass:"tditem"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['给予返水'] || '给予返水'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.model.rebet_sum))+"("+_vm._s(_vm.model.rebet_num)+"人)")])])])])]),_vm._v(" "),_c('div',{staticClass:"countRow"},[_c('span',{staticClass:"countSpan font14"},[_vm._v(_vm._s(_vm.LANG['实际盈亏:'] || '实际盈亏:'))]),_vm._v(" "),_c('span',{staticClass:"countNum mr20",class:{state_danger: parseFloat(_vm.model.true_total) < 0 }},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.model.true_total)))]),_vm._v(" "),_c('span',{staticClass:"countSpan font14"},[_vm._v(_vm._s(_vm.LANG['账目统计:'] || '账目统计:'))]),_vm._v(" "),_c('span',{staticClass:"countNum mr20",class:{state_danger: parseFloat(_vm.model.account_total) < 0 }},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.model.account_total)))])])])],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/statement/fundDetailsSummary.vue
function injectStyle (context) {
  __webpack_require__(532)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3fcdfd17"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  fundDetailsSummary,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var statement_fundDetailsSummary = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);