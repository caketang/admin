(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/datepicker.vue + 2 modules
var datepicker = __webpack_require__(233);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/cash/fundDetails.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var fundDetails = ({
  data() {
    return {
      LANG,
      //查询条件
      //                system:"",
      //                systemList:[],
      //                username:"",
      //                transactionCategory:"",
      //                transactionCategoryList:[],
      //                transactionType:"",
      //                transactionTypeList:[],
      //日期初始时间
      Sdate: {
        "dateStart": "",
        "dateEnd": ""
      },
      //数据接口地址
      tableUrl: "",
      //列配置接口地址
      columnsUrl: "",
      //搜索条件
      type: "search",
      formTitel: "",
      labelWidth: "90px",
      isEdit: {},
      formVisible: {
        state: false
      },
      searchConfig: [{
        "type": "quickDate",
        "showTimes": true
      }, //快捷日期
      {
        "prop": "user_type",
        "value": "",
        "type": "select",
        "label": "体系",
        "list": ARRAYS.users
      }, {
        "prop": "username",
        "value": "",
        "type": "text",
        "label": "用户名"
      }, {
        "prop": "deal_category",
        "value": "",
        "type": "select",
        "label": "交易类别",
        "list": [{
          "value": "",
          "label": "全部",
          "ifkey": "deal_type"
        }, {
          "value": "1",
          "label": "收入",
          "ifkey": "deal_type"
        }, {
          "value": "2",
          "label": "支出",
          "ifkey": "deal_type"
        }, {
          "value": "3",
          "label": "额度转换",
          "ifkey": "deal_type"
        }]
      }, {
        "prop": "deal_type",
        "value": "",
        "label": "交易类型",
        "type": "select",
        "list": [{
          "value": "",
          "label": "全部"
        }],
        "ifKey": "deal_category",
        "ifVal": ""
      }, {
        "prop": "deal_type",
        "value": "",
        "label": "交易类型",
        "type": "select",
        "list": [],
        "ifKey": "deal_category",
        "ifVal": "2"
      }, {
        "prop": "deal_type",
        "value": "",
        "label": "交易类型",
        "type": "select",
        "list": [],
        "ifKey": "deal_category",
        "ifVal": "1"
      }, {
        "prop": "deal_type",
        "value": "",
        "label": "交易类型",
        "type": "select",
        "list": [],
        "ifKey": "deal_category",
        "ifVal": "3"
      }, //                    {"type":"dateGroup","label":"交易时间","prop":[{"prop":"register_from","value":"","label":""},{"prop":"register_to","value":"","label":""}]},
      {
        "type": "dateGroup",
        "label": "交易时间",
        "prop": [{
          "prop": "start_time",
          "value": "",
          "label": ""
        }, {
          "prop": "end_time",
          "value": "",
          "label": ""
        }]
      }],
      baseUrl: "",
      sumShow: false,
      allData: {
        "page_money_sum": 0,
        "total_money_sum": 0,
        "total": 0
      }
    };
  },

  components: {
    datepicker: datepicker["a" /* default */],
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      this.columnsUrl = "static/json/cash/fundDetails/columns.json";
      this.baseUrl = URL.api + ROUTES.GET.funds.flow;

      if (this.$route.query.username) {
        this.searchConfig[2]['value'] = this.$route.query.username;
        this.tableUrl = URL.api + ROUTES.GET.funds.flow + "?username=" + this.$route.query.username + "?start_time=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
      } else {
        this.tableUrl = URL.api + ROUTES.GET.funds.flow + "?start_time=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
      }

      let _this = this;

      this.$.autoAjax('get', URL.api + ROUTES.GET.funds.flows, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let funds = res.data;
            let tradetype = _this.searchConfig[3].list;

            for (let index in funds) {
              if (funds[index].id == 1) {
                for (let ele in funds[index].children) {
                  _this.searchConfig[6].list.push({
                    "label": funds[index].children[ele].name,
                    "value": funds[index].children[ele].id
                  });
                }
              }

              if (funds[index].id == 2) {
                for (let ele in funds[index].children) {
                  _this.searchConfig[5].list.push({
                    "label": funds[index].children[ele].name,
                    "value": funds[index].children[ele].id
                  });
                }
              }

              if (funds[index].id == 3) {
                for (let ele in funds[index].children) {
                  _this.searchConfig[7].list.push({
                    "label": funds[index].children[ele].name,
                    "value": funds[index].children[ele].id
                  });
                }
              }

              for (let trade in tradetype) {
                if (tradetype[trade].label == funds[index].name) {
                  tradetype[trade].value = funds[index].id;
                }
              }
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.funds.flows, URLCONFIG).then((res) => {
      //     if (res.data.state == 0 && res.data.data) {
      //         let funds = res.data.data;
      //         let tradetype = _this.searchConfig[3].list;
      //         for (let index in funds) {
      //             if (funds[index].id == 1) {
      //                 for (let ele in funds[index].children) {
      //
      //                     _this.searchConfig[6].list.push({
      //                         "label": funds[index].children[ele].name,
      //                         "value": funds[index].children[ele].id
      //                     });
      //                 }
      //             }
      //             if (funds[index].id == 2) {
      //                 for (let ele in funds[index].children) {
      //
      //                     _this.searchConfig[5].list.push({
      //                         "label": funds[index].children[ele].name,
      //                         "value": funds[index].children[ele].id
      //                     });
      //                 }
      //             }
      //             if (funds[index].id == 3) {
      //                 for (let ele in funds[index].children) {
      //
      //                     _this.searchConfig[7].list.push({
      //                         "label": funds[index].children[ele].name,
      //                         "value": funds[index].children[ele].id
      //                     });
      //                 }
      //             }
      //             for (let trade in tradetype) {
      //
      //                 if (tradetype[trade].label == funds[index].name) {
      //
      //                     tradetype[trade].value = funds[index].id
      //                 }
      //             }
      //         }
      //     }
      // })
      // this.systemList = ARRAYS.users;
      // this.transactionCategoryList = ARRAYS.transactionCategory;
      // this.transactionTypeList = ARRAYS.transactionTypes;
      // console.log(this.transactionTypeList)
    },

    //执行查询
    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    //重置查询
    resetForm() {
      this.tableUrl = this.baseUrl + "?start_time=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
    },

    //表格内按钮事件
    doHandle(e) {
      switch (e.fn) {
        case "openUserInformation":
          // this.$message.error(LANG['权限不足！'] || '权限不足！');
          // return;
          this.openUserInformation(e.row);
          break;
      }
    },

    openUserInformation(row) {
      // console.log(row);
      this.$router.push({
        path: "/memberManagement",
        query: {
          name: row.username
        }
      });
    },

    //取表数据
    getTableData(obj) {
      this.sumShow = false;
      this.allData = {};

      if (obj.allData && obj.allData.attributes && obj.allData.attributes.total > 0) {
        let model = obj.allData.attributes;
        this.sumShow = true;

        for (let i in model) {
          this.allData[i] = model[i];
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
    if (this.$route.query.username) {
      this.tableUrl = URL.api + ROUTES.GET.funds.flow + "?username=" + this.$route.query.username;
    }
  },

  deactivated() {
    this.$route.query.username = null;
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7b11e759","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/cash/fundDetails.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"fundDetails"}},[_c('div',{staticClass:"search"},[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"showAdd":false,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableIndex":false,"tableCheck":false,"tableUrl":_vm.tableUrl,"getData":true},on:{"get-table-data":_vm.getTableData,"do-handle":_vm.doHandle}},[(_vm.sumShow)?_c('tr',{staticClass:"sumdiv ml20",attrs:{"slot":"other","span":12},slot:"other"},[_c('td',{attrs:{"colspan":"15"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font14 "},[_vm._v(_vm._s(_vm.LANG['金额小计'] || '金额小计')+" ")]),_vm._v(":"),_c('span',{staticClass:"state_success font16"},[_vm._v(" "+_vm._s(_vm._f("formatMoney")(_vm.allData.page_money_sum)))]),_vm._v(" "),_c('span',{staticClass:"font14 ml10 "},[_vm._v(_vm._s(_vm.LANG['金额总计'] || '金额总计')+" ")]),_vm._v(":"),_c('span',{staticClass:"state_blue font16"},[_vm._v(" "+_vm._s(_vm._f("formatMoney")(_vm.allData.total_money_sum)))])])])]):_vm._e()])],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/cash/fundDetails.vue
function injectStyle (context) {
  __webpack_require__(518)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7b11e759"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  fundDetails,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var cash_fundDetails = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/datepicker.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var datepicker = ({
  data() {
    return {
      LANG //                pickerOptions: {
      //                    shortcuts: [{
      //                        text: '今天',
      //                        onClick(picker) {
      //                            picker.$emit('pick', new Date());
      //                        }
      //                    }, {
      //                        text: '昨天',
      //                        onClick(picker) {
      //                            const date = new Date();
      //                            date.setTime(date.getTime() - 3600 * 1000 * 24);
      //                            picker.$emit('pick', date);
      //                        }
      //                    }]
      //                }

    };
  },

  props: {
    label: String,
    Sdate: {
      type: Object,
      default: {
        "date_from": "",
        "date_to": ""
      }
    }
  },
  methods: {
    //开始时间
    changestart() {
      this.date_from = this.formatDate(this.date_from, 'yyyy-MM-dd HH:mm:ss');
    },

    //结束时间
    changeend() {
      if (this.Sdate.date_from == "") {
        this.$message.error(LANG['开始时间必需选择'] || '开始时间必需选择');
      }

      this.date_to = this.formatDate(this.Sdate.date_to, 'yyyy-MM-dd HH:mm:ss');
      var result = this.DateComparison(this.Sdate.date_from, this.Sdate.date_to);

      if (!result) {
        this.$message.error(LANG['结束时间必需大于开始时间'] || '结束时间必需大于开始时间');

        let _this = this;

        setTimeout(() => {
          _this.Sdate.date_to = "";
        }, 3000);
      } //                if(this.date_from !="" && this.date_to!="" && result){
      //                    debugger;
      //                    this.$emit("do_select-date", {"sDate": this.Sdate.date_from,"eDate":this.Sdate.date_to});
      //                }

    },

    //格式化日期
    formatDate(time, format) {
      var t = new Date(time);

      var tf = function (i) {
        return (i < 10 ? '0' : '') + i;
      };

      return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
          case 'yyyy':
            return tf(t.getFullYear());
            break;

          case 'MM':
            return tf(t.getMonth() + 1);
            break;

          case 'mm':
            return tf(t.getMinutes());
            break;

          case 'dd':
            return tf(t.getDate());
            break;

          case 'HH':
            return tf(t.getHours());
            break;

          case 'ss':
            return tf(t.getSeconds());
            break;
        }
      });
    },

    //比较日期
    DateComparison(dateS, dateE) {
      var oDate1 = new Date(dateS);
      var oDate2 = new Date(dateE);

      if (oDate1.getTime() > oDate2.getTime()) {
        return false;
      } else {
        return true;
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-28b8676e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/datepicker.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"block"},[_c('el-col',{attrs:{"span":11}},[_c('el-date-picker',{attrs:{"align":"left","type":"date","placeholder":_vm.LANG['选择日期'] || '选择日期',"picker-options":_vm.pickerOptions,"size":"small"},on:{"change":_vm.changestart},model:{value:(_vm.Sdate.date_from),callback:function ($$v) {_vm.$set(_vm.Sdate, "date_from", $$v)},expression:"Sdate.date_from"}})],1),_vm._v(" "),_c('el-col',{staticClass:"line",staticStyle:{"padding-left":"5px"},attrs:{"span":2}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-date-picker',{attrs:{"align":"left","type":"date","placeholder":_vm.LANG['选择日期'] || '选择日期',"picker-options":_vm.pickerOptions,"size":"small"},on:{"change":_vm.changeend},model:{value:(_vm.Sdate.date_to),callback:function ($$v) {_vm.$set(_vm.Sdate, "date_to", $$v)},expression:"Sdate.date_to"}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/datepicker.vue
function injectStyle (context) {
  __webpack_require__(232)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-28b8676e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  datepicker,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_datepicker = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);