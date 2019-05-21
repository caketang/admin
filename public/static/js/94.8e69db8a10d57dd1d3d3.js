(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/statement/agentLine.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var agentLine = ({
  data() {
    return {
      LANG,
      formType: "search",
      searchConfig: [{
        "type": "quickDate",
        "showTimes": true
      }, //快捷日期
      {
        "type": "dateTimeGroup",
        "label": "报表日期",
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
        "prop": "name",
        "value": "",
        "label": "用户名",
        "type": "text",
        "placeholder": "请输入用户名"
      }],
      type: "search",
      labelWidth: "120px",
      formVisible: {
        state: false
      },
      isEdit: {
        state: false
      },
      columnsUrl: '',
      tableUrl: '',
      updated: false,
      getData: true,
      sumShow: false,
      breadcrumb: [],
      start_time: sessionStorage.dateTimeStart,
      end_time: sessionStorage.dateTimeEnd,
      childShow: true,
      allData: {}
    };
  },

  methods: {
    init() {
      this.updated = false;
      this.tableUrl = URL.api + ROUTES.GET.user.agent.line + this.addSearch({
        start_time: sessionStorage.dateTimeStart,
        end_time: sessionStorage.dateTimeEnd
      });
      this.beastUrl = URL.api + ROUTES.GET.user.agent.line;
      this.columnsUrl = '../../../static/json/statement/agentLine/columns.json';
    },

    doQuery(data) {
      this.start_time = data['item'].start_time ? data['item'].start_time : sessionStorage.dateTimeStart;
      this.end_time = data['item'].end_time ? data['item'].end_time : sessionStorage.dateTimeEnd;
      this.tableUrl = this.beastUrl + this.addSearch(data.item);
      this.breadcrumb = [];
    },

    resetForm() {
      this.start_time = sessionStorage.dateTimeStart;
      this.end_time = sessionStorage.dateTimeEnd;
      this.tableUrl = this.beastUrl + this.addSearch({
        start_time: this.start_time,
        end_time: this.end_time
      });
    },

    linkAgent(name) {
      if (name == 'home') {
        this.tableUrl = this.beastUrl + this.addSearch({
          start_time: this.start_time,
          end_time: this.end_time
        });
        this.breadcrumb = [];
      } else {
        this.tableUrl = this.beastUrl + this.addSearch({
          start_time: this.start_time,
          end_time: this.end_time,
          name: name.name
        });
        let m = null;
        this.breadcrumb.forEach((items, index) => {
          if (items.name == name.name) {
            m = index;
          }

          if (index > m && m !== null) {
            this.breadcrumb.splice(m + 1, this.breadcrumb.length);
          }
        });
      }
    },

    //取表数据
    getTableData(obj) {
      this.allData = {};

      if (obj.allData && obj.allData.attributes) {
        this.childShow = obj.allData.attributes.total == 1 ? false : true;
        let model = obj.allData.attributes;
        this.sumShow = obj.item.length ? true : false;

        for (let i in model) {
          this.allData[i] = model[i];
        }
      } else {
        this.sumShow = false;
      }
    },

    doHandle(item) {
      switch (item.fn) {
        case "showDetails":
          this.showDetails(item.row);
          break;
      }
    },

    showDetails(obj) {
      let _this = this;

      if (_this.childShow) {
        if (_this.breadcrumb.length < 1) {
          _this.breadcrumb.push({
            name: obj.name,
            pid: obj.pid,
            id: obj.id
          });
        } else {
          _this.breadcrumb.forEach(item => {
            if (obj.pid == item.id) {
              _this.breadcrumb.push({
                name: obj.name,
                pid: obj.pid,
                id: obj.id
              });
            }
          });
        }

        _this.tableUrl = _this.beastUrl + this.addSearch({
          start_time: this.start_time,
          end_time: this.end_time,
          name: obj.name
        }); // _this.breadcrumb.push({name: obj.name, pid:obj.pid, id:obj.id})
      } else {
        this.$message('当前用户暂无下级代理。');
      }
    }

  },
  components: {
    formEdit: formEdit["a" /* default */],
    tableGrid: tableGrid["a" /* default */]
  },
  computed: {},
  watch: {//            tableUrl: {
    //                handler(val, old) {
    //
    //                },
    //                //是否绑定初始值
    //                immediate: true,
    //                //深度监听
    //                deep: true
    //            },
  },

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6b8942b8","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/statement/agentLine.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"agentLine"}},[_c('el-row',[_c('el-col',[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"formType":_vm.formType,"type":'search',"isEdit":_vm.isEdit,"labelWidth":_vm.labelWidth,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1),_vm._v(" "),_c('el-col',[_c('p',{staticClass:"help_gray mb10"},[_vm._v("提示：报表每隔5到10分钟会更新一次。（非及时更新）")]),_vm._v(" "),(_vm.breadcrumb.length)?_c('span',{staticClass:"font14"},[_vm._v("团队收益详情 :")]):_vm._e(),_vm._v(" "),_c('el-breadcrumb',{staticStyle:{"display":"inline-block","vertical-align":"middle"},attrs:{"separator":"/"}},[_c('el-breadcrumb-item',{nativeOn:{"click":function($event){return _vm.linkAgent('home')}}},[_vm._v("首页")]),_vm._v(" "),_vm._l((_vm.breadcrumb),function(item,key){return _c('el-breadcrumb-item',{key:key,nativeOn:{"click":function($event){return _vm.linkAgent(item)}}},[_vm._v("\n                    "+_vm._s(item.name)+"\n                ")])})],2),_vm._v(" "),_c('tableGrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"updated":_vm.updated,"getData":_vm.getData,"isCreated":true,"tableCheck":false,"pageSet":true,"tableIndex":false},on:{"get-table-data":_vm.getTableData,"do-handle":_vm.doHandle}},[(_vm.sumShow)?_c('tr',{staticClass:"sumdiv ml20",attrs:{"slot":"other","span":12},slot:"other"},[_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.LANG['总计'] || '总计')+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.allData.bet_times_num)+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.allData.bet_money_sum)+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.allData.valid_bet_sum)+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.allData.deposit_money_sum)+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.allData.withdraw_money_sum)+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 ",class:{state_danger: parseFloat(_vm.allData.profit_loss_sum) < 0 }},[_vm._v(_vm._s(_vm.allData.profit_loss_sum)+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.allData.send_prize_sum)+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.allData.bonus_sum)+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.allData.contri_sum)+" ")])])])]):_vm._e()])],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/statement/agentLine.vue
function injectStyle (context) {
  __webpack_require__(526)
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
  agentLine,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var statement_agentLine = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);