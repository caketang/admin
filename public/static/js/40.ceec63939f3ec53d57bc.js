(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/cash/offlineReceipts.vue
var offlineReceipts = __webpack_require__(266);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1bf028c6","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/cash/offlineReceipts.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"offlineReceipts"}},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"updateKeys":_vm.updateKeys,"formType":_vm.formType,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}}),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"tableIndex":false,"getData":true,"autoshowRefresh":true,"showExport":_vm.isShow,"automation":true,"pageSet":true,"updated":_vm.updated},on:{"do-handle":_vm.doHandle,"get-table-data":_vm.getTableData,"export-data":_vm.exportData}},[(_vm.sumShow)?_c('tr',{staticClass:"sumdiv ml20",attrs:{"slot":"other","span":12},slot:"other"},[_c('td',{attrs:{"colspan":"15"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font14 "},[_vm._v(_vm._s(_vm.LANG['金额小计'] || '金额小计')+" ")]),_vm._v(":"),_c('span',[_vm._v(" "+_vm._s(_vm._f("formatMoney")(_vm.allData.page_amount_sum)))]),_vm._v(" "),_c('span',{staticClass:"font14 ml10"},[_vm._v(_vm._s(_vm.LANG['金额总计'] || '金额总计')+" ")]),_vm._v(":"),_c('span',[_vm._v(" "+_vm._s(_vm._f("formatMoney")(_vm.allData.total_amount_sum)))]),_vm._v(" "),_c('span',{staticClass:"ml10 mr10"},[_vm._v(" | ")]),_vm._v(" "),_c('span',{staticClass:"font14 ml10"},[_vm._v(_vm._s(_vm.LANG['优惠小计'] || '优惠小计')+" ")]),_vm._v(":"),_c('span',[_vm._v(" "+_vm._s(_vm._f("formatMoney")(_vm.allData.page_coupon_sum)))]),_vm._v(" "),_c('span',{staticClass:"font14 ml10"},[_vm._v(_vm._s(_vm.LANG['优惠总计'] || '优惠总计')+" ")]),_vm._v(":"),_c('span',[_vm._v(" "+_vm._s(_vm._f("formatMoney")(_vm.allData.total_coupon_sum)))]),_vm._v(" "),_c('span',{staticClass:"ml10 mr10"},[_vm._v(" | ")]),_vm._v(" "),_c('span',{staticClass:"font14 ml10"},[_vm._v(_vm._s(_vm.LANG['笔数'] || '笔数')+" ")]),_vm._v(":"),_c('span',[_vm._v(_vm._s(_vm.allData.total))])])])]):_vm._e()])],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":"提示","visible":_vm.dialogVisible,"size":"tiny"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_vm._v("\n            "+_vm._s(_vm.LANG['点击”确认“导出数据'] || '点击”确认“导出数据')+"\n            "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('a',{attrs:{"href":_vm.outUrl,"target":"_blank","id":"outUrl"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("确 认")])],1)],1)])],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.LANG['公司入款详情'] || '公司入款详情',"size":"small"},model:{value:(_vm.dialogDetail.state),callback:function ($$v) {_vm.$set(_vm.dialogDetail, "state", $$v)},expression:"dialogDetail.state"}},[_c('el-row',{attrs:{"gutter":30}},[_c('el-col',{staticClass:"borStyle",attrs:{"span":24}},[_c('div',[_c('h3',[_vm._v(_vm._s(_vm.LANG['入款详情'] || '入款详情')+":")]),_vm._v(" "),_c('el-col',{staticClass:"font16",attrs:{"span":24}},[_vm._v("\n                        "+_vm._s(_vm.LANG['存款金额'] || '存款金额')+" :"),_c('span',[_vm._v(_vm._s(_vm.Detailcontent.money))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(_vm.LANG['订单号'] || '订单号')+" ： "),_c('span',[_vm._v(_vm._s(_vm.Detailcontent.trade_no))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(_vm.LANG['是否首存'] || '是否首存')+" ："),_c('span',[_vm._v(_vm._s(_vm._f("isNew")(_vm.Detailcontent.state)))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(_vm.LANG['用户名'] || '用户名')+" ："),_c('span',[_vm._v(_vm._s(_vm.Detailcontent.user_name))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(_vm.LANG['会员等级'] || '会员等级')+" ："),_c('span',[_vm._v("VIP"+_vm._s(_vm.Detailcontent.level))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(_vm.LANG['真实姓名'] || '真实姓名')+" ："),_c('span',[_vm._v(_vm._s(_vm.Detailcontent.true_name))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(_vm.LANG['操作时间'] || '操作时间')+" ："),_c('span',[_vm._v(_vm._s(_vm.Detailcontent.process_time))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(_vm.LANG['上级代理'] || '上级代理')+" ："),_c('span',[_vm._v(_vm._s(_vm.Detailcontent.agent_name))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(_vm.LANG['已入款次数/金额'] || '已入款次数/金额')+" ："),_c('span',[_vm._v(_vm._s(_vm.Detailcontent.total_deposit_times)+" / "+_vm._s(_vm._f("filterMoneyIsNull")(_vm.Detailcontent.total_deposit_money)))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(_vm.LANG['存款日期'] || '存款日期')+" ："),_c('span',[_vm._v(_vm._s(_vm.Detailcontent.recharge_time))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(_vm.LANG['存款IP'] || '存款IP')+" ："),_c('span',[_vm._v(_vm._s(_vm.Detailcontent.ip))])])],1)]),_vm._v(" "),_c('el-col',{staticClass:"mt10 borStyle bankStyle",attrs:{"span":24}},[_c('div',[_c('h3',[_vm._v("银行账户:")]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_vm._v(_vm._s(_vm.LANG['存款银行'] || '存款银行')+" :\n                        "),(_vm.Detailcontent.pay_bank_info)?_c('span',[_vm._v(_vm._s(_vm.Detailcontent.pay_bank_info.bank))]):_vm._e()]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_vm._v(_vm._s(_vm.LANG['存款账号'] || '存款账号')+" ：\n                        "),(_vm.Detailcontent.pay_bank_info)?_c('span',[_vm._v(_vm._s(_vm.Detailcontent.pay_bank_info.card))]):_vm._e()]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_vm._v(_vm._s(_vm.LANG['存款户名'] || '存款户名')+" ：\n                        "),(_vm.Detailcontent.pay_bank_info)?_c('span',[_vm._v(_vm._s(_vm.Detailcontent.pay_bank_info.name))]):_vm._e()]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_vm._v(_vm._s(_vm.LANG['收款银行'] || '收款银行')+" :\n                        "),(_vm.Detailcontent.receive_bank_info)?_c('span',[_vm._v(_vm._s(_vm.Detailcontent.receive_bank_info.bank))]):_vm._e()]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_vm._v(_vm._s(_vm.LANG['收款账号'] || '收款账号')+" ：\n                        "),(_vm.Detailcontent.receive_bank_info)?_c('span',[_vm._v(_vm._s(_vm.Detailcontent.receive_bank_info.card))]):_vm._e()]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_vm._v(_vm._s(_vm.LANG['收款户名'] || '收款户名')+" ：\n                        "),(_vm.Detailcontent.receive_bank_info)?_c('span',[_vm._v(_vm._s(_vm.Detailcontent.receive_bank_info.accountname))]):_vm._e()])],1)]),_vm._v(" "),_c('el-col',{staticClass:"mt10 borStyle",attrs:{"span":24}},[_c('div',[_c('h3',[_vm._v("优惠:")]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v("\n                        "+_vm._s(_vm.LANG['优惠金额'] || '优惠金额')+"  :"),_c('span',[_vm._v(_vm._s(_vm._f("filterMoneyIsNull")(_vm.Detailcontent.coupon_money)))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v("\n                        "+_vm._s(_vm.LANG['打码要求'] || '打码要求')+"  ："),_c('span',[_vm._v(_vm._s(_vm._f("filterMoneyIsNull")(_vm.Detailcontent.withdraw_bet_coupon)))])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(_vm.LANG['优惠活动名称'] || '优惠活动名称')+"  ： "),_c('span',[_vm._v(_vm._s(_vm.Detailcontent.active_name))])])],1)]),_vm._v(" "),_c('el-col',{staticClass:"mt10 borStyle",attrs:{"span":24}},[_c('div',[_c('el-col',{staticClass:"mt10",attrs:{"span":24}},[_c('label',[_vm._v(_vm._s(_vm.LANG['备注'] || '备注')+" :")]),_vm._v(" "),_c('el-input',{attrs:{"type":"textarea","span":5},model:{value:(_vm.Detailcontent.memo),callback:function ($$v) {_vm.$set(_vm.Detailcontent, "memo", $$v)},expression:"Detailcontent.memo"}})],1),_vm._v(" "),_c('el-col',{staticClass:"mt10",attrs:{"span":24}},[_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(_vm.LANG['状态'] || '状态')+" :"),_c('span',[_vm._v(_vm._s(_vm.Detailcontent.status))])])],1)],1)]),_vm._v(" "),_c('el-col',{staticClass:"tCent mt20",attrs:{"span":24}},[_c('span',{staticClass:"wrapper"},[_c('el-button',{attrs:{"plain":true,"type":"success"},on:{"click":_vm.doSendMemo}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))]),_vm._v(" "),_c('el-button',{on:{"click":_vm.dialogDetais}},[_vm._v(_vm._s(_vm.LANG['关闭'] || '关闭'))])],1)])],1)],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/cash/offlineReceipts.vue
function injectStyle (context) {
  __webpack_require__(512)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1bf028c6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  offlineReceipts["a" /* default */],
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var cash_offlineReceipts = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _components_quickDate_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(223);
/* harmony import */ var _components_tableGrid_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(202);
/* harmony import */ var _components_formEdit_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(203);
/* harmony import */ var _components_confirm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(206);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





vue__WEBPACK_IMPORTED_MODULE_0__["default"].filter('isNew', function (data) {
  let str = data || "";
  return /new/.test(str) ? '是' : '否';
});
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      close: true,
      LANG,
      //表格列数据
      columnsUrl: "",
      //表格数据
      tableUrl: "",
      momeUrl: '',
      //详情弹出请求地址
      DetailUrl: '',
      radio: 0,
      //详情弹出
      dialogDetail: {
        state: false
      },
      //详情列表
      Detailcontent: {},
      formMemo: {
        memo: '222'
      },
      //当前表单类型
      formType: "",
      //搜索相关
      searchConfig: [{
        "type": "quickDate",
        "showTimes": true
      }, //快捷日期
      //ID1
      {
        "prop": "user_name",
        "value": "",
        "type": "text",
        "label": "用户名"
      }, //ID2
      {
        "prop": "pay_no",
        "value": "",
        "type": "text",
        "label": "交易订单号",
        "style": {
          width: '250px'
        }
      }, // 优惠搜索
      {
        "prop": "give_active",
        "value": "",
        "label": "存款优惠",
        "type": "select",
        "list": [{
          "label": "全部",
          "value": ""
        }, {
          "label": "有优惠",
          "value": "1"
        }, {
          "label": "无优惠",
          "value": "0"
        }]
      }, //ID4
      {
        "prop": "levels",
        "value": [],
        "label": "会员层级",
        "sReset": false,
        "checkAll": true,
        "allBtnShow": true,
        "type": "checkGroup",
        "list": [],
        "Arr": ARRAYS.LEVELSLIST
      }, {
        "prop": "status",
        "value": "",
        "label": "交易状态",
        "type": "select",
        "list": [{
          "label": "全部",
          "value": "all"
        }, {
          "label": "审核中",
          "value": "pending"
        }, {
          "label": "充值成功",
          "value": "paid"
        }, {
          "label": "充值失败",
          "value": "canceled"
        }]
      }, {
        "prop": "bank_id",
        "value": "",
        "label": "存入银行",
        "type": "select",
        "list": []
      }, {
        "type": "dateGroup",
        "label": "交易时间",
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
        "type": "numberGroup",
        "label": "交易金额",
        "prop": [{
          "prop": "money_from",
          "value": null
        }, {
          "prop": "money_to",
          "value": null
        }]
      }, //ID9
      {
        "prop": "deposit_type",
        "value": [],
        "label": "存款方式",
        "sReset": false,
        "checkAll": true,
        "allBtnShow": true,
        "type": "checkGroup",
        "list": ["银行柜台", "ATM现金入款", "ATM自动柜员机", "手机转账", "支付宝转账", "财付通", "微信支付", "手动存款", "网银转账", "云闪付", "QQ转账"],
        "Arr": [{
          "label": "银行柜台",
          "value": "1"
        }, {
          "label": "ATM现金入款",
          "value": "2"
        }, {
          "label": "ATM自动柜员机",
          "value": "3"
        }, {
          "label": "手机转账",
          "value": "4"
        }, {
          "label": "支付宝转账",
          "value": "5"
        }, {
          "label": "财付通",
          "value": "6"
        }, {
          "label": "微信支付",
          "value": "7"
        }, {
          "label": "手动存款",
          "value": "8"
        }, {
          "label": "网银转账",
          "value": "9"
        }, {
          "label": "云闪付",
          "value": "10"
        }, {
          "label": "QQ转账",
          "value": "11"
        }],
        "ifVal": "1",
        "ifKey": "send_type"
      }, {
        "prop": "process_uname",
        "value": "",
        "type": "text",
        "label": "操作者"
      }],
      type: "search",
      labelWidth: "90px",
      updateKeys: '',
      formVisible: {
        state: false
      },
      //是否编辑数据
      isEdit: {
        state: false
      },
      nowId: -1,
      baseUrl: "",
      btnShow: false,
      updated: false,
      //确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: ""
      },
      allData: {
        "page_amount_sum": 0,
        "page_coupon_sum": 0,
        "total_amount_sum": 0,
        "total_coupon_sum": 0,
        "total": 0
      },
      // 数据导出
      dialogVisible: false,
      outUrl: "",
      sumShow: false,
      // 查询条件
      searchObj: {},
      oDetail: null,
      oDetailStatus: false,
      isShow: sessionStorage.deposit_offlines_export == 'true' ? true : false,
      exportForm: {}
    };
  },

  components: {
    tablegrid: _components_tableGrid_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    quickDate: _components_quickDate_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    formEdit: _components_formEdit_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    confirm: _components_confirm_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  },
  watch: {
    '$route'(to, from) {
      //监听路由改变
      console.log(to);
    }

  },
  methods: {
    init() {
      let _this = this;

      this.columnsUrl = "static/json/cash/offlineReceipts/columns.json";
      this.searchObj['date_from'] = sessionStorage.sysTime + ' 00:00:00';
      this.searchObj['date_to'] = sessionStorage.sysTime + ' 23:59:59';
      this.updateKeys = '';
      this.baseUrl = URL.api + ROUTES.GET.cash.offlines;
      this.momeUrl = URL.api + ROUTES.PATCH.cash.doMemo;
      this.DetailUrl = URL.api + ROUTES.GET.cash.offline;

      if (JSON.stringify(this.$route.query) == "{}") {
        this.tableUrl = URL.api + ROUTES.GET.cash.offlines + "?date_from=" + sessionStorage.sysTime + " 00:00:00&date_to=" + sessionStorage.sysTime + ' 23:59:59';
      } else {
        this.searchConfig[5].value = this.$route.query.status;
        this.tableUrl = this.baseUrl + '?status=' + this.$route.query.status;
      }

      _this.exportForm = {
        date_from: sessionStorage.sysTime + " 00:00:00",
        date_to: sessionStorage.sysTime + " 23:59:59",
        signature: 1 // 获取层级

      };
      let model = global.ARRAYS.LEVELSLIST;

      for (let k in model) {
        _this.searchConfig[4].list.push(model[k].label);
      } //获取银行列表


      let acountsUrl = URL.api + ROUTES.GET.cash.bank.acounts + '?page=1&page_size=10';

      _this.searchConfig[6].list.splice(0, _this.searchConfig[6].list.length);

      _this.searchConfig[6].list.push({
        "label": LANG['全部'] || '全部',
        "value": ''
      });

      this.$.autoAjax('get', acountsUrl, '', {
        ok: res => {
          let model = res.data;

          for (let i in model) {
            _this.searchConfig[6].list.push({
              "label": model[i].bank_name,
              "value": model[i].id
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    dialogDetais() {
      this.dialogDetail.state = false;
      this.radio = 0;
    },

    doHandle(e) {
      this.updated = false;
      this.nowId = e.row.id || 0;

      switch (e.fn) {
        case "doDetail":
          this.doDetail(e.row);
          break;

        case "doMemo":
          this.doMemo(e.row);
          break;

        case "doPass":
          this.doPass(e.row);
          break;

        case "doRefuse":
          this.doRefuse(e.row);
          break;

        case "openUserInformation":
          this.openUserInformation(e.row);
          break;
      }
    },

    doQuery(obj) {
      let temp = {};

      for (let k in obj.item) {
        if (k === 'deposit_type') {
          let temparr = obj.item[k] || [];
          let list = this.searchConfig[9].Arr || [];
          let arrs = [];

          for (let i = 0; i < temparr.length; i++) {
            for (let j = 0; j < list.length; j++) {
              if (temparr[i] === list[j].label) {
                arrs.push(list[j].value);
              }
            }
          }

          temp[k] = arrs.toString();
        } else if (k === 'levels') {
          let temparr = obj.item[k] || [];
          let list = this.searchConfig[4].Arr || [];
          let arrs = [];

          for (let i = 0; i < temparr.length; i++) {
            for (let j = 0; j < list.length; j++) {
              if (temparr[i] === list[j].label) {
                arrs.push(list[j].value);
              }
            }
          }

          temp[k] = arrs.toString();
        } else {
          temp[k] = obj.item[k];
        }
      }

      if (temp.money_to > 0) {
        temp.money_from = temp.money_from * 100;
        temp.money_to = temp.money_to * 100;
      }

      for (let i in temp) {
        this.searchObj[i] = temp[i];
      }

      this.tableUrl = this.baseUrl + this.addSearch(temp);
      this.exportForm = temp;
      this.exportForm.signature = 1;
    },

    //详情
    doDetail(row) {
      let _this = this;

      if (row.status === 'pending') {
        this.btnShow = true;
      } else {
        this.btnShow = false;
      }

      this.dialogDetail.state = true;
      this.nowId = row.id;
      let DetailId = row.id;
      this.$.autoAjax('get', this.DetailUrl + '/' + DetailId, '', {
        ok: res => {
          this.Detailcontent = res.data;

          switch (row.status) {
            case "paid":
              this.Detailcontent.status = '已存入';
              break;

            case "pending":
              this.Detailcontent.status = '未处理';
              break;

            case "canceled":
              this.Detailcontent.status = '取消';
              break;
          }

          _this.oDetailStatus = true;
          _this.oDetail = row.user_id;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //通过
    doPass(row) {
      if (parseInt(this.nowId)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (LANG['确定通过'] || '确定通过') + row.user_name + (LANG['吗?'] || '吗?');
        this.confirmConfig.fn = "pass";
        this.confirmConfig.obj = row;
      }
    },

    //取消
    doRefuse(row) {
      if (parseInt(this.nowId)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (LANG['确定取消'] || '确定取消') + row.user_name + (LANG['吗?'] || '吗?');
        this.confirmConfig.fn = "refuse";
        this.confirmConfig.obj = row;
      }
    },

    //发送备注
    doSendMemo() {
      let formData,
          _this = this;

      formData = {
        comment: this.Detailcontent.memo,
        uid: this.oDetail
      };
      this.$.autoAjax('patch', this.DetailUrl + '/' + this.nowId, formData, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message.success(LANG['恭喜您，备注发送成功！'] || '恭喜您，备注发送成功！');
            _this.updated = true;
            _this.oDetailStatus = false;
          } else {
            this.$message.error(LANG['备注发送失败，请稍候重试！'] || '备注发送失败，请稍候重试！');
            _this.oDetailStatus = false;
          }

          _this.formType = "memo";
          _this.dialogDetail.state = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //获取表格数据
    getTableData(obj) {
      this.sumShow = false;
      this.allData = {};

      if (obj.allData.attributes && obj.allData.attributes.total > 0) {
        let model = obj.allData.attributes;
        this.sumShow = true;

        for (let i in model) {
          this.allData[i] = model[i];
        }
      }
    },

    doConfirm(obj) {
      this.loading = true;

      let _this = this;

      switch (obj.fn) {
        case "pass":
          let formData;

          if (this.radio == 2) {
            formData = {
              state: "paid",
              coupon: 0,
              comment: this.Detailcontent.memo,
              uid: obj.obj.user_id
            };

            if (_this.oDetailStatus) {
              formData = {
                state: "paid",
                coupon: 0,
                comment: this.Detailcontent.memo,
                uid: _this.oDetail
              };
            }
          } else {
            formData = {
              state: "paid",
              coupon: 1,
              comment: this.Detailcontent.memo,
              uid: obj.obj.user_id
            };

            if (_this.oDetailStatus) {
              formData = {
                state: "paid",
                coupon: 1,
                comment: this.Detailcontent.memo,
                uid: _this.oDetail
              };
            }
          }

          this.$.autoAjax('patch', this.DetailUrl + '/' + this.nowId, formData, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，确定成功！'] || '恭喜您，确定成功！');

                _this.updated = true;
                _this.oDetailStatus = false;
              } else {
                _this.$message.error(LANG['确定失败，请稍候重试！'] || '确定失败，请稍候重试！');

                _this.oDetailStatus = false;
              }

              _this.formType = "pass";
              _this.dialogDetail.state = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          this.radio = 0;
          break;

        case "refuse":
          let formData1 = {
            state: "failed",
            coupon: 0,
            comment: this.Detailcontent.memo,
            uid: obj.obj.user_id
          };

          if (_this.oDetailStatus) {
            formData1 = {
              state: "failed",
              coupon: 0,
              comment: this.Detailcontent.memo,
              uid: _this.oDetail
            };
          }

          this.$.autoAjax('patch', this.DetailUrl + '/' + this.nowId, formData1, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，取消成功！'] || '恭喜您，取消成功！');

                _this.updated = true;
                _this.oDetailStatus = false;
              } else {
                _this.$message.error(LANG['取消失败，请稍候重试！'] || '取消失败，请稍候重试！');

                _this.oDetailStatus = false;
              }

              _this.dialogDetail.state = false;
              _this.formType = "refuse";
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          this.radio = 0;
          break;
      }
    },

    //重置查询
    resetForm() {
      this.$route.query ? this.tableUrl = this.baseUrl + '?status=' + this.$route.query.status : this.tableUrl = this.baseUrl + "?date_from=" + sessionStorage.sysTime + " 00:00:00&date_to=" + sessionStorage.sysTime + ' 23:59:59';
    },

    openUserInformation(row) {
      this.$router.push({
        path: "/memberManagement",
        query: {
          name: row.user_name
        }
      });
    },

    // 导出数据
    exportData() {
      // 当前查询条件
      let form = this.$children[0].$refs.editForm.model;

      if (form.date_from && form.date_to) {
        this.$.autoAjax('get', ROUTES.GET.cash.offlines, this.exportForm, {
          ok: res => {
            if (res.state === 0 && res.data) {
              window.location.href = res.data.url;
            }
          },
          error: e => {
            this.$message.error(e.responseText.msg);
          }
        }); //                    let url = URL.api + '/export/download/offlines';
        //                    let _this = this;
        //					this.$.autoAjax('get',URL.api + '/dev/download/sign' + '?nonce=' + url, '', {
        //						ok: (res) => {
        //							if (res.data) {
        //								this.outUrl = url + this.addSearch(this.searchObj) + "&nonce=" + res.data.nonce + "&signature=" + res.data.signature + "&time=" + res.data.time + "&uuid=" + res.data.uuid;
        //								this.dialogVisible = true;
        //							} else if (res.msg) {
        //								_this.$message.error(res.msg);
        //							} else {
        //								_this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
        //							}
        //						},
        //						p: () => {
        //						},
        //						error: e => {
        //							console.log(e)
        //						}
        //					})
      } else {
        this.$message.error(LANG['必需选择时间才能导出'] || '必需选择时间才能导出');
        return;
      }
    },

    // 修改FORM对象值
    setFormArray(key, obj) {
      if (key == 'deposit_type') {
        if (this.$route.query.type) {
          obj[key].push('手动存款');
        } else {
          let temp = this.searchConfig[9].list || [];

          for (let k = 0; k < temp.length; k++) {
            if (temp[k] !== '手动存款') {
              obj[key].push(temp[k]);
            }
          }
        }
      }
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  activated() {
    if (this.$route.query.user_name) {
      let query = this.$route.query;

      if (query['user_name'] && query['user_name'].length > 0) {
        this.tableUrl = this.baseUrl + '?user_name=' + query['user_name'];
        this.searchConfig[1].value = query['user_name'];
        this.searchConfig[5].value = this.$route.query.status;
      }
    } else if (this.$route.query.status) {
      this.tableUrl = this.baseUrl + '?status=' + this.$route.query.status;
    } else if (this.$route.query && this.$route.query.day_begin && this.$route.query.day_begin.length > 1) {
      let query = {
        date_from: this.$route.query.day_begin,
        date_to: this.$route.query.day_end,
        user_name: this.$route.query.member_name,
        deposit_type: this.$route.query.type == '' ? '1,2,3,4,5,6,7,9,10,11' : '8',
        status: 'paid'
      };
      setTimeout(() => {
        this.updateKeys = 'date_from,' + (query.date_from || '') + ',date_to,' + (query.date_to || '') + ',user_name,' + (query.user_name || '') + ',status,paid,deposit_type,手动存款';
        this.tableUrl = this.baseUrl + this.addSearch(query);
      }, 500);
    } else {
      this.tableUrl = this.baseUrl + "?date_from=" + sessionStorage.sysTime + " 00:00:00&date_to=" + sessionStorage.sysTime + ' 23:59:59';
    }
  },

  deactivated() {
    this.$route.query.status = null;
    this.$route.query.user_name = null;
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);