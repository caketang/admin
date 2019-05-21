(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/statement/sumStatecom/reportForms.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var reportForms = ({
  data() {
    return {
      LANG,
      dataModel: [],
      totalData: {},
      //加载状态
      loading: false,
      //总条数
      total: 0,
      //每次页条数
      pageSize: 10,
      //总页数
      pageCount: 0,
      //当前页
      currentPage: 0
    };
  },

  props: {
    tableUrl: String,
    updated: {
      type: Boolean,
      default: false
    },
    type: String
  },
  components: {},
  computed: {},
  watch: {
    //如果数据网址发生变化，就执行数据请求
    tableUrl: function (newQuestion) {
      if (newQuestion) {
        this.init();
      }
    },
    updated: function (newval) {
      if (newval) {
        this.init();
      }
    }
  },
  methods: {
    //系统初始化
    init() {
      let _this = this; //总条数


      let total = this.total; //每次页条数

      let pageSize = this.pageSize; //总页数

      let pageCount = this.pageCount; //当前页

      let currentPage = this.currentPage;

      if (this.tableUrl) {
        this.loading = true;
        this.$.autoAjax('get', this.tableUrl, '', {
          ok: res => {
            if (res.state === 0 && res.data) {
              //								_this.total = res.attributes.total || 10;
              //								_this.pageSize = res.attributes.size || 50;
              //								_this.pageCount = Math.ceil(this.total / this.pageSize);
              //								_this.currentPage = res.attributes.number || 1;
              this.dataModel = res.data;
              this.totalData = res.attributes; //
            }

            _this.loading = false;
          },
          p: () => {},
          error: e => {
            _this.loading = false;

            _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
          }
        });
      }
    },

    //切换页数
    //            doCurrentChange(v) {
    //                this.loading = true;
    //                let total = this.total;
    //                let pageSize = 50;
    //                let pageCount = this.pageCount;
    //                this.currentPage = v;
    //                this.dataModel = [];
    //                let dataModel = this.dataModel;
    //                let page = 0;
    //                let _this = this
    //                page = Math.ceil((pageSize * pageCount) / total) || 1;
    //                let index = this.tableUrl.indexOf('?');
    //                if (index === -1) {
    //                    this.tableUrl = this.tableUrl + "?page=" + v + "&page_size=50";
    //                } else {
    //                    let n = this.tableUrl.indexOf('page=');
    //                    if (n > 0) {
    //                        this.tableUrl = this.tableUrl.replace(/page=\d+/, "page=" + v);
    //                    } else {
    //                        this.tableUrl = this.tableUrl + "&page=" + v + "&page_size=50";
    //                    }
    //                }
    //
    //                this.$.autoAjax('get', URL.api + ROUTES.GET, '', {
    //                    ok: (res) => {
    //                        _this.total = res.attributes.total || 10;
    //                        _this.pageSize = res.attributes.size || 50;
    //                        _this.pageCount = Math.ceil(this.total / this.pageSize);
    //                        _this.currentPage = res.attributes.number || 1;
    //                        let tableDate = res.data || res.data.list || [];
    //                        for (let i in tableDate) {
    //                            _this.dataModel.push(tableDate[i])
    //                        }
    //                        _this.loading = false;
    //                    },
    //                    p: () => {
    //                    },
    //                    error: e => {
    //                        _this.loading = false;
    //                        _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
    //
    //                    }
    //                })
    //            },
    showMember() {
      this.$emit('showAgent', {
        type: 'user'
      });
    },

    showAgent() {
      this.$emit('showAgent', {
        type: 'agent'
      });
    },

    showLevelAgent() {
      this.$emit('showAgent', {
        type: 'level'
      });
    },

    queryLevel(obj) {
      this.$emit('queryLevl', {
        item: obj
      });
    }

  },

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4d8fe6cf","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/statement/sumStatecom/reportForms.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"reportForms"}},[_c('table',{staticClass:"el-table el-table__header el-table--border",staticStyle:{"width":"100%"},attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('thead',[_c('tr',[_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell tCent",domProps:{"textContent":_vm._s(_vm.LANG['类别'] || '类别')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell  tCent",domProps:{"textContent":_vm._s(_vm.LANG['总投注笔数'] || '总投注笔数')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell  tCent",domProps:{"textContent":_vm._s(_vm.LANG['总投注金额'] || '总投注金额')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell  tCent",domProps:{"textContent":_vm._s(_vm.LANG['总有效投注金额'] || '总有效投注金额')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell  tCent",domProps:{"textContent":_vm._s(_vm.LANG['输赢'] || '输赢')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell  tCent",domProps:{"textContent":_vm._s(_vm.LANG['总中奖金额'] || '总中奖金额')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell  tCent",domProps:{"textContent":_vm._s(_vm.LANG['活动礼金'] || '活动礼金')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell  tCent",domProps:{"textContent":_vm._s(_vm.LANG['贡献'] || '贡献')}})])])]),_vm._v(" "),_vm._l((_vm.dataModel),function(item,index){return (_vm.dataModel.length)?_c('tr',[_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[(item.type==='user')?_c('span',{staticClass:"link",on:{"click":_vm.showMember}},[_vm._v("直属会员")]):_vm._e(),_vm._v(" "),(item.type==='agent')?_c('span',{staticClass:"link",on:{"click":_vm.showAgent}},[_vm._v("直属代理")]):_vm._e(),_vm._v(" "),(item.type==='level')?_c('span',{staticClass:"link",on:{"click":_vm.showLevelAgent}},[_vm._v("层级代理")]):_vm._e()])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(item.bet_times_sum))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(item.bet_money)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(item.valid_bet)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{class:{state_danger: parseFloat(item.lose_earn) < 0 }},[_vm._v(_vm._s(_vm._f("formatMoney")(item.lose_earn)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(item.send_prize_sum,4)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(item.bonus,4)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(item.contri,4)))])])])]):_vm._e()}),_vm._v(" "),(_vm.dataModel.length > 0)?_c('tr',[_vm._m(0),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(_vm.totalData.bet_times))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalData.bet_money)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalData.valid_bet)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{class:{state_danger: parseFloat(_vm.totalData.lose_earn) < 0 }},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalData.lose_earn)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalData.send_prize,4)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalData.bonus,4)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalData.contri,4)))])])])]):_c('tr',{staticStyle:{"text-align":"center","height":"100px"}},[_c('td',{attrs:{"colspan":"14"}},[_vm._v("暂无数据")])])],2)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v("总计")])])])}]

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/statement/sumStatecom/reportForms.vue
function injectStyle (context) {
  __webpack_require__(522)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4d8fe6cf"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  reportForms,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var sumStatecom_reportForms = (Component.exports);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/statement/sumStatecom/memberDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var memberDetail = ({
  data() {
    return {
      LANG,
      columnsUrl: '',
      baseUrl: '',
      getData: true,
      updated: false,
      sumShow: false,
      allData: {}
    };
  },

  props: {
    Url: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    agentUrl: {
      type: String,
      default: ''
    }
  },
  components: {
    tablegrid: tableGrid["a" /* default */]
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      this.baseUrl = this.Url;
      this.tableUrl = this.Url;
      this.updated = true;
      this.getData = true;

      if (this.type === "user") {
        this.columnsUrl = '../../../../static/json/statement/sumStatement/membercolumns.json';
      } else {
        this.columnsUrl = '../../../../static/json/statement/sumStatement/agentcolumns.json';
      }
    },

    //取表数据
    getTableData(obj) {
      this.allData = {};

      if (obj.allData && obj.allData.attributes) {
        let model = obj.allData.attributes;
        if (obj.item.length) this.sumShow = true;

        for (let i in model) {
          this.allData[i] = model[i];
        }
      } else {
        this.sumShow = false;
      }
    }

  },

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6826f052","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/statement/sumStatecom/memberDetail.vue
var memberDetail_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"memberDetail"}},[_c('el-col',{attrs:{"span":24}},[_c('span',[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"updated":_vm.updated,"getData":_vm.getData,"isCreated":true,"tableCheck":false,"pageSet":true,"tableIndex":false,"showRefresh":false},on:{"get-table-data":_vm.getTableData}},[(_vm.sumShow)?_c('tr',{staticClass:"sumdiv ml20",attrs:{"slot":"other","span":12},slot:"other"},[_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.LANG['总计'] || '总计')+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.allData.bet_times)+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.bet_money))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.valid_bet))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 ",class:{state_danger: parseFloat(_vm.allData.lose_earn) < 0 }},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.lose_earn))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.send_prize,4))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.bonus,4))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.contri,4))+" ")])])])]):_vm._e()])],1)],1)}
var memberDetail_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/statement/sumStatecom/memberDetail.vue
function memberDetail_injectStyle (context) {
  __webpack_require__(523)
}
/* script */


/* template */

/* template functional */
var memberDetail_vue_template_functional_ = false
/* styles */
var memberDetail_vue_styles_ = memberDetail_injectStyle
/* scopeId */
var memberDetail_vue_scopeId_ = "data-v-6826f052"
/* moduleIdentifier (server only) */
var memberDetail_vue_module_identifier_ = null

var memberDetail_Component = Object(component_normalizer["a" /* default */])(
  memberDetail,
  memberDetail_render,
  memberDetail_staticRenderFns,
  memberDetail_vue_template_functional_,
  memberDetail_vue_styles_,
  memberDetail_vue_scopeId_,
  memberDetail_vue_module_identifier_
)

/* harmony default export */ var sumStatecom_memberDetail = (memberDetail_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/statement/sumStatecom/levelAgentDetails.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var levelAgentDetails = ({
  data() {
    return {
      LANG,
      //                activeName: 'agent',
      columnsUrl: '',
      tableUrl: '',
      updated: false,
      sumShow: false,
      allData: {},
      getData: true
    };
  },

  props: {
    id: {
      default: -1
    },
    dates: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    furl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  computed: {},
  components: {
    tablegrid: tableGrid["a" /* default */]
  },
  watch: {
    activeName: function (val, oldval) {
      if (val != oldval) {
        if (val === "member") {
          this.init();
        }
      }
    },
    id: function (val, oldval) {
      if (val != oldval) {
        if (this.activeName === "level_agent") {
          this.init();
        }
      }
    }
  },
  methods: {
    init() {
      this.tableUrl = this.furl + "&pid=" + this.id + "&type=level";
      this.columnsUrl = '../../../../static/json/statement/sumStatement/levelAgentcolumns.json';
    },

    //            handleClick(obj) {
    //                if (obj == "agent") {
    //                    this.tableUrl = this.furl + "&pid=" + this.id + "&type=agent"
    //                    this.columnsUrl = '../../../../static/json/statement/sumStatement/levelAgentcolumns.json'
    //                }
    //                if (obj == "user") {
    //                    this.tableUrl = this.furl + "&pid=" + this.id + "&type=user";
    //                    this.columnsUrl = '../../../../static/json/statement/sumStatement/membercolumns.json'
    //                }
    //            },
    doHandle(obj) {
      if (obj.row.id) {
        this.tableUrl = this.furl + "&pid=" + obj.row.id + "&type=level";
        this.$emit('update:id', obj.row.id);
        this.$emit('update:name', obj.row.name);

        if (this.$parent.$parent.$parent.$parent.pushUrls) {
          this.$parent.$parent.$parent.$parent.pushUrls({
            name: obj.row.name,
            id: obj.row.id,
            type: "level",
            url: this.tableUrl
          });
        }
      }
    },

    //取表数据
    getTableData(obj) {
      this.allData = {};

      if (obj.allData && obj.allData.attributes) {
        let model = obj.allData.attributes;
        if (obj.item.length) this.sumShow = true;

        for (let i in model) {
          this.allData[i] = model[i];
        }
      } else {
        this.sumShow = false;
      }
    }

  },

  mounted() {},

  created() {
    this.init();

    let _this = this;

    VUE.$on('loadings', function (obj) {
      _this.$emit('update:id', obj.id);
    });
  },

  activated() {
    this.updated = false;
    setTimeout(() => {
      this.updated = true;
      console.log(this);
    }, 500);
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0c5c1f7b","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/statement/sumStatecom/levelAgentDetails.vue
var levelAgentDetails_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"levelAgent"}},[_c('el-col',[_c('span',[_vm._v("报表详情"+_vm._s(_vm.title))])]),_vm._v(" "),_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"pageSet":true,"isCreated":true,"updated":_vm.updated,"tableIndex":false,"getData":_vm.getData},on:{"do-handle":_vm.doHandle,"get-table-data":_vm.getTableData}},[(_vm.sumShow)?_c('tr',{staticClass:"sumdiv ml20",attrs:{"slot":"other","span":12},slot:"other"},[_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.LANG['总计'] || '总计')+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.allData.bet_times)+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.bet_money))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.valid_bet))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 ",class:{state_danger: parseFloat(_vm.allData.lose_earn) < 0 }},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.lose_earn))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.send_prize,4))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.bonus,4))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.contri,4))+" ")])])])]):_vm._e()])],1)}
var levelAgentDetails_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/statement/sumStatecom/levelAgentDetails.vue
function levelAgentDetails_injectStyle (context) {
  __webpack_require__(525)
}
/* script */


/* template */

/* template functional */
var levelAgentDetails_vue_template_functional_ = false
/* styles */
var levelAgentDetails_vue_styles_ = levelAgentDetails_injectStyle
/* scopeId */
var levelAgentDetails_vue_scopeId_ = "data-v-0c5c1f7b"
/* moduleIdentifier (server only) */
var levelAgentDetails_vue_module_identifier_ = null

var levelAgentDetails_Component = Object(component_normalizer["a" /* default */])(
  levelAgentDetails,
  levelAgentDetails_render,
  levelAgentDetails_staticRenderFns,
  levelAgentDetails_vue_template_functional_,
  levelAgentDetails_vue_styles_,
  levelAgentDetails_vue_scopeId_,
  levelAgentDetails_vue_module_identifier_
)

/* harmony default export */ var sumStatecom_levelAgentDetails = (levelAgentDetails_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/statement/sumStatecom/levelAgent.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var levelAgent = ({
  data() {
    return {
      LANG,
      activeName: 'agent',
      columnsUrl: '',
      tableUrl: '',
      updated: false,
      getData: true,
      sumShow: false,
      isShow: true,
      isDetails: false,
      agenId: -1,
      dates: '',
      name: '',
      agentdetailsId: '',
      allData: {}
    };
  },

  props: {
    Url: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    fUrl: {
      type: String,
      default: ''
    }
  },
  computed: {},
  components: {
    tablegrid: tableGrid["a" /* default */],
    agentdetails: sumStatecom_levelAgentDetails
  },
  methods: {
    init() {
      this.tableUrl = this.Url;
      this.columnsUrl = '../../../../static/json/statement/sumStatement/levelAgentcolumns.json';
      this.dates = this.date;
    },

    handleClick() {},

    doHandle(item) {
      switch (item.fn) {
        case "showDetails":
          this.showDetails(item.row);
          break;
      }
    },

    showDetails(obj) {
      this.isShow = false;
      this.isDetails = true;
      this.agenId = obj.id;
      this.name = obj.name;

      if (this.$parent.$parent.pushUrls && !obj.pushList) {
        this.$parent.$parent.pushUrls({
          "name": obj.name,
          "type": "level",
          "url": this.fUrl,
          id: obj.id,
          name: obj.name
        });
      }
    },

    //取表数据
    getTableData(obj) {
      this.allData = {};

      if (obj.allData && obj.allData.attributes) {
        let model = obj.allData.attributes;
        if (obj.item.length) this.sumShow = true;

        for (let i in model) {
          this.allData[i] = model[i];
        }
      } else {
        this.sumShow = false;
      }
    }

  },

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5445fa5c","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/statement/sumStatecom/levelAgent.vue
var levelAgent_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"levelAgent"}},[(_vm.isShow)?_c('el-col',[_c('span',[_vm._v("层级代理报表详情"+_vm._s(_vm.label))]),_vm._v(" "),_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"updated":_vm.updated,"getData":_vm.getData,"isCreated":true,"tableCheck":false,"pageSet":true,"tableIndex":false},on:{"get-table-data":_vm.getTableData,"do-handle":_vm.doHandle}},[(_vm.sumShow)?_c('tr',{staticClass:"sumdiv ml20",attrs:{"slot":"other","span":12},slot:"other"},[_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.LANG['总计'] || '总计')+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm.allData.bet_times)+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.bet_money))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.valid_bet))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 ",class:{state_danger: parseFloat(_vm.allData.lose_earn) < 0 }},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.lose_earn))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.send_prize,4))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.bonus,4))+" ")])])]),_vm._v(" "),_c('td',{attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font16 "},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allData.contri,4))+" ")])])])]):_vm._e()])],1):_vm._e(),_vm._v(" "),(_vm.isDetails)?_c('el-col',[_c('agentdetails',{attrs:{"id":_vm.agenId,"dates":_vm.dates,"name":_vm.name,"furl":_vm.fUrl,"title":_vm.label},on:{"update:id":function($event){_vm.agenId=$event},"update:name":function($event){_vm.name=$event}}})],1):_vm._e()],1)}
var levelAgent_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/statement/sumStatecom/levelAgent.vue
function levelAgent_injectStyle (context) {
  __webpack_require__(524)
}
/* script */


/* template */

/* template functional */
var levelAgent_vue_template_functional_ = false
/* styles */
var levelAgent_vue_styles_ = levelAgent_injectStyle
/* scopeId */
var levelAgent_vue_scopeId_ = "data-v-5445fa5c"
/* moduleIdentifier (server only) */
var levelAgent_vue_module_identifier_ = null

var levelAgent_Component = Object(component_normalizer["a" /* default */])(
  levelAgent,
  levelAgent_render,
  levelAgent_staticRenderFns,
  levelAgent_vue_template_functional_,
  levelAgent_vue_styles_,
  levelAgent_vue_scopeId_,
  levelAgent_vue_module_identifier_
)

/* harmony default export */ var sumStatecom_levelAgent = (levelAgent_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/statement/sumStatement.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // 总报表组件

 // 直属代理和直属会员报表详情组件

 // 层级代理报表

/* harmony default export */ var sumStatement = ({
  data() {
    return {
      LANG,
      columnsUrl: '',
      tableUrl: '',
      totalData: {},
      LANG,
      formType: "search",
      detailslabel: '',
      detailsUrl: '',
      updated: false,
      homeform: true,
      // 判断总报表是否显示
      loading: true,
      date: '',
      isDetail: false,
      // 判断直属代理和会员代理下面的会员详情是否显示
      type: 'agent',
      nowId: -1,
      levelAgent: false,
      // 判断层级代理下的会员详情是否显示
      dataModel: [],
      //表格列数据
      showtype: "",
      //表格数据
      searchConfig: [{
        "type": "quickDate",
        "showTimes": true
      }, //快捷日期
      {
        "type": "dateTimeGroup",
        "label": "报表日期",
        "showTime": false,
        "prop": [{
          "prop": "date_from",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "date_to",
          "value": "",
          "label": "结束时间"
        }]
      }],
      type: "search",
      labelWidth: "120px",
      formVisible: {
        state: false
      },
      isEdit: {
        state: false
      },
      // 导航条
      levelList: [],
      firstUrl: '',
      agentUrl: '',
      stime: sessionStorage.dateTimeStart,
      etime: sessionStorage.dateTimeEnd
    };
  },

  components: {
    formEdit: formEdit["a" /* default */],
    tableData: sumStatecom_reportForms,
    memberdetails: sumStatecom_memberDetail,
    levelagent: sumStatecom_levelAgent
  },
  methods: {
    init() {
      this.baseUrl = URL.api + ROUTES.GET.state.summary;
      this.tableUrl = this.baseUrl + "?date_from=" + this.stime + "&date_to=" + this.etime;
      this.date = "&date_from=" + this.stime + "&date_to=" + this.etiem;
      this.label = '(' + this.stime + '至' + this.etime + ')';
      this.levelList.splice(0, this.levelList.length);
      this.levelList.push({
        name: '总报表',
        "url": this.tableUrl
      });
      this.firstUrl = URL.api + ROUTES.GET.state.summary + "?date_from=" + this.stime + "&date_to=" + this.etime;
    },

    //接收快捷日期数据
    getdays(item) {
      this.Sdate.dateStart = item.sday;
      this.Sdate.dateEnd = item.eday;
      this.reSetDate = false;
    },

    pushList(obj) {
      this.levelList.push(obj);
    },

    pushUrls(obj) {
      this.levelList.push(obj);
    },

    // 表格点击代理查看
    showAgent(row) {
      switch (row.type) {
        case "agent":
          this.showtype = "agent";
          this.homeform = false;
          this.isDetail = true;
          this.agentUrl = this.tableUrl;
          this.detailsUrl = this.tableUrl + "&type=agent";
          this.detailslabel = '代理报表详情' + this.label;
          this.levelList.push({
            name: '直属代理',
            "url": this.detailsUrl
          });
          break;

        case "user":
          this.showtype = "user";
          this.homeform = false;
          this.isDetail = true;
          this.detailsUrl = this.tableUrl + "&type=user";
          this.detailslabel = '直属会员报表详情' + this.label;
          this.levelList.push({
            name: '直属会员'
          });
          break;

        case "level":
          this.homeform = false;
          this.isDetail = false;
          this.levelAgent = true;
          this.detailsUrl = this.tableUrl + "&type=level";
          this.detailslabel = this.label;
          this.levelList.push({
            name: '层级代理',
            "url": this.detailsUrl
          });
          break;
      }
    },

    doHandle(obj) {},

    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
      this.date = "&date_from=" + obj.item.date_from + "&date_to=" + obj.item.date_to;
      this.firstUrl = this.baseUrl + "?date_from=" + obj.item.date_from + "&date_to=" + obj.item.date_to;
      this.label = '(' + obj.item.date_from + '至' + obj.item.date_to + ')';
      this.levelList.splice(0, this.levelList.length);
      this.levelList.push({
        name: '总报表',
        "url": this.tableUrl
      });
    },

    returnPage(obj) {
      if (obj.item === "details") {
        if (this.levelList.length > 1) {
          this.levelList.pop();
        }
      } else {
        if (this.levelList.length > 1) {
          this.levelList.pop();
        }

        this.homeform = true;
        this.isDetail = false;
        this.levelAgent = false;
      }
    },

    returnPages() {
      this.levelList.pop();
      this.homeform = false;
      this.isDetail = false;
      this.levelAgent = true;
    },

    // 重置查询条件
    resetForm() {
      this.init();
    },

    // 切换层级
    doChangeClass(obj, index) {
      if (obj.name == "总报表") {
        this.levelList.splice(index + 1, this.levelList.length - 1);
        this.tableUrl = obj.url;
        this.homeform = true;
        this.isDetail = false;
        this.levelAgent = false;
      } else if (obj.name == "层级代理") {
        this.homeform = false;
        this.isDetail = false;
        this.levelAgent = true;
        this.$refs.child.isShow = true;
        this.$refs.child.isDetails = false;
        this.levelList.splice(index + 1, this.levelList.length - 1);
      } else if (obj.type === "level_agent") // 层级代理下的
        {
          this.homeform = false;
          this.isDetail = false;
          this.levelAgent = true;
          this.$refs.child.isShow = false;
          this.$refs.child.isDetails = true;

          if (this.$children[3].$children[0].showDetails) {
            this.$children[3].$children[0].showDetails({
              id: obj.id,
              name: obj.name,
              pushList: false
            });
          }

          this.levelList.splice(index + 1, this.levelList.length - 1);
        } else if (obj.name == "直属代理") {
        this.$refs.reload.init();
        this.$refs.reload.updated = false;
        this.showtype = "agent";
        this.levelList.splice(index + 1, this.levelList.length - 1);
      }
    }

  },

  created() {
    this.init();
  },

  activated() {
    this.init();
    this.homeform = true;
    this.isDetail = false;
    this.levelAgent = false;
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6ff5c66b","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/statement/sumStatement.vue
var sumStatement_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_c('el-col',{directives:[{name:"show",rawName:"v-show",value:(_vm.homeform),expression:"homeform"}],staticClass:"clearfix"},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"formType":_vm.formType,"type":'search',"isEdit":_vm.isEdit,"labelWidth":_vm.labelWidth,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1),_vm._v(" "),_c('el-col',_vm._l((_vm.levelList),function(item,index){return _c('span',{key:index},[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){return _vm.doChangeClass(item,index)}}},[_vm._v(_vm._s(_vm.LANG[item.name] || item.name))]),_vm._v(" "),(index !== (_vm.levelList.length-1))?_c('span',[_vm._v(" / ")]):_vm._e()],1)}),0),_vm._v(" "),_c('el-col',{directives:[{name:"show",rawName:"v-show",value:(_vm.homeform),expression:"homeform"}]},[_c('el-col',[_c('tableData',{attrs:{"tableUrl":_vm.tableUrl},on:{"showAgent":_vm.showAgent}})],1)],1),_vm._v(" "),(_vm.isDetail)?_c('el-col',[_c('memberdetails',{ref:"reload",attrs:{"Url":_vm.detailsUrl,"label":_vm.detailslabel,"type":_vm.showtype,"agentUrl":_vm.agentUrl}})],1):_vm._e(),_vm._v(" "),(_vm.levelAgent)?_c('el-col',[_c('levelagent',{ref:"child",attrs:{"Url":_vm.detailsUrl,"label":_vm.detailslabel,"date":_vm.label,"fUrl":_vm.firstUrl}})],1):_vm._e()],1)}
var sumStatement_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/statement/sumStatement.vue
function sumStatement_injectStyle (context) {
  __webpack_require__(521)
}
/* script */


/* template */

/* template functional */
var sumStatement_vue_template_functional_ = false
/* styles */
var sumStatement_vue_styles_ = sumStatement_injectStyle
/* scopeId */
var sumStatement_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var sumStatement_vue_module_identifier_ = null

var sumStatement_Component = Object(component_normalizer["a" /* default */])(
  sumStatement,
  sumStatement_render,
  sumStatement_staticRenderFns,
  sumStatement_vue_template_functional_,
  sumStatement_vue_styles_,
  sumStatement_vue_scopeId_,
  sumStatement_vue_module_identifier_
)

/* harmony default export */ var statement_sumStatement = __webpack_exports__["default"] = (sumStatement_Component.exports);


/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);