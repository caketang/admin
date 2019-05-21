(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/table.vue + 2 modules
var table = __webpack_require__(309);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/queryDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var queryDetail = ({
  data() {
    return {
      LANG,
      //默认全选
      allChecked: false,
      loading: false,
      tableData: {},
      columnsUrl: "",
      tableUrl: '',
      baseUrl: '',
      sLoading: false,
      //批量操作按钮
      tabOperation: [],
      assembleColumns: {
        index: 4,
        data: []
      },
      allData: {},
      query: {},
      userId: '',
      del_userId: '',
      games: [],
      modeData: {
        name: '',
        withdraw_per: ''
      },
      rules: {
        name: [{
          required: true,
          message: '请输入事件名称',
          trigger: 'blur'
        }],
        withdraw_per: [{
          required: true,
          message: '请输入打码量',
          trigger: 'blur'
        }]
      },
      //                timeXJ: 0,
      //                timeTZ: 0,
      //搜索相关
      searchConfig: [{
        "prop": "coupon_type",
        "value": 1,
        "label": "状态",
        "type": "select",
        "list": [{
          "label": "全部",
          "value": 0
        }, {
          "label": "有优惠",
          "value": 1
        }, {
          "label": "无优惠",
          "value": 2
        }]
      }],
      isEdit: {},
      labelWidth: "100px",
      // form
      formVisible: {
        state: false
      }
    };
  },

  components: {
    tableDetail: table["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      let _this = this;

      let query = this.$route.query;

      if (sessionStorage.del_userId !== null || sessionStorage.del_userId !== undefined) {} //                    sessionStorage.del_userId = null;
      //默认全部勾选


      _this.allChecked = true;
      this.query = {}; //初始化query

      for (let k in query) {
        this.query[k] = query[k];
      }

      if (Object.keys(query).indexOf('user_name') == -1) {
        delete this.query.user_name;
      }

      if (Object.keys(query).indexOf('memberAll') == -1) {
        delete this.query.memberAll;
      }
      /*获取游戏选项*/


      function getGame() {
        return new Promise((resolve, reject) => {
          if (_this.assembleColumns.data.length === 0) {
            _this.$.autoAjax('get', URL.api + "/games", '', {
              ok: res => {
                if (res.state === 0 && res.data) {
                  let model = res.data;
                  model.forEach(item => {
                    let obj = {
                      "label": item.game_name,
                      'type': "twoLine",
                      "game_id": item.game_id,
                      "game_type": item.game_type,
                      filterByWord: "games",
                      prop: "val",
                      filterCondition: "game_type,game_id"
                    };

                    _this.assembleColumns.data.push(obj);
                  });
                  resolve(model);
                }
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            });
          } else {
            resolve();
          }
        });
      }

      getGame().then(() => {
        _this.columnsUrl = "static/json/preAct/queryDetail/columns.json";

        _this.queryUrl.apply(this);
      });
    },

    queryUrl() {
      let idIsNotNumber = isNaN(this.query.game_id);
      let ids = [];
      let gameType = [];

      if (idIsNotNumber) {
        ids = this.query.game_id.split(',');
        gameType = this.query.gameType.split(',');
      } else {
        ids.push(this.query.game_id);
        gameType.push(this.query.gameType);
      }

      let games = [];
      ids.forEach((item, index) => {
        games.push({
          game_type: gameType[index],
          game_id: item
        });
      });
      this.games = games;
      this.tableUrl = URL.api + `/active/rebetset/member?date_from=${this.query.date_from}&&date_to=${this.query.date_to}&&games=${JSON.stringify(games)}&&type=${this.query.type}&&coupon_type=1`;
      this.baseUrl = URL.api + `/active/rebetset/member?date_from=${this.query.date_from}&&date_to=${this.query.date_to}&&games=${JSON.stringify(games)}&&type=${this.query.type}`;

      if (this.query.user_name) {
        this.tableUrl = this.tableUrl + `&&user_name=${this.query.user_name}`;
        this.baseUrl = this.baseUrl + `&&user_name=${this.query.user_name}`;
      }

      if (this.query.level_id) {
        this.tableUrl = this.tableUrl + `&&levels=${this.query.level_id}`;
        this.baseUrl = this.baseUrl + `&&levels=${this.query.level_id}`;
      }
    },

    doHandle(item) {
      switch (item.fn) {
        case "doDetail":
          this.doDetail(item.row);
          break;
      }
    },

    //            getData(obj) {
    //                let attributes = obj.allData.attributes;
    //                if (attributes) {
    //                    this.attributes = attributes;
    //                    this.attributes.subTotal = obj.allData.data.length
    //                }
    //            },
    //表格批量操作触发  save_del_userId
    doOperation(obj) {
      let check_user = {};
      this.userId = obj.rows.map(item => {
        return item.user_id;
      }).join(',');

      if (obj.del_rows !== undefined) {
        this.del_userId = obj.del_rows.map(item => {
          return item.user_id;
        }).join(',');
        this.del_userId.split(',').map(item => {
          check_user[item] = item;
        });
        sessionStorage.check_user = JSON.stringify(check_user);
      }
    },

    // 获取未选择列表
    nowUnChecked(obj) {
      this.sLoading = true;
      let url = URL.api + '/active/rebetset/records';
      let arr = [];

      if (this.query.user_name && obj.rows) {
        for (let k in obj.rows) {
          arr[k] = obj.rows[k].user_id;
        }
      }

      let data = {
        "start_time": this.query.date_from,
        "end_time": this.query.date_to,
        "name": obj.modeData.name,
        "withdraw_per": FORMATMultiplyMoney(obj.modeData.withdraw_per),
        "member_level": this.query.memberAll === "全部" ? '0' : this.query.level_id || '0',
        "games": this.query.gameAll === "全部" ? [] : this.games,
        "user_id": arr,
        //需要排除的ID
        "excluded_user_id": obj.dataList.length > 0 ? obj.dataList : []
      };
      this.$.autoAjax('put', url, data, {
        ok: res => {
          if (res.state === 0 && res.data) {
            let str = LANG['存入成功'] || '存入成功';
            this.$message.success(str);
            this.$router.push({
              path: '/discount'
            });
          } else {
            this.$message.error(LANG['存入失败，请稍候重试'] || '存入失败，请稍候重试');
            this.$router.push({
              path: '/discount'
            });
          }

          this.sLoading = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    goback() {
      this.$router.push({
        path: "/discountCondition"
      });
    },

    doQuery(obj) {
      this.tableUrl = this.baseUrl + `&&coupon_type=${obj.item.coupon_type}`;
    },

    //重置查询
    resetForm() {
      this.tableUrl = this.baseUrl;
    }

  },
  computed: {},

  mounted() {},

  activated() {
    this.init();
  },

  beforeRouteLeave(to, from, next) {
    if (this.$refs.form) {
      this.$refs.form.resetFields();
    } // this.query = {};


    next(true);
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e4f15276","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/queryDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"subAgentRebate"}},[_c('el-row',{staticClass:"row-bg",attrs:{"type":"flex","justify":"space-between"}},[_c('el-col',{attrs:{"span":20}},[_c('div',{staticClass:"title"},[_c('a',{attrs:{"href":"javascript:;"},on:{"click":_vm.goback}},[_c('el-button',{attrs:{"type":"primary","icon":"arrow-left","size":"small"}},[_vm._v(_vm._s(_vm.LANG['返 回'] || '返 回'))])],1)]),_vm._v(" "),_c('div',[_c('p',{staticClass:"font14"},[_vm._v("当前查询条件：\n                    "),_c('span',{staticClass:"pleft"},[_vm._v("日期："),_c('el-tag',{attrs:{"type":"gray"}},[_vm._v(_vm._s(_vm.query.date_from)+"至"+_vm._s(_vm.query.date_to))])],1),_vm._v(" "),_c('span',{staticClass:"pleft"},[_vm._v("游戏平台："),_c('el-tag',{attrs:{"type":"gray"}},[_vm._v(_vm._s(_vm.query.gameAll))])],1),_vm._v(" "),(_vm.query.memberAll)?_c('span',{staticClass:"pleft"},[_vm._v("会员层级："),_c('el-tag',{attrs:{"type":"gray"}},[_vm._v(_vm._s(_vm.query.memberAll))])],1):_vm._e(),_vm._v(" "),(_vm.query.user_name)?_c('span',{staticClass:"pleft"},[_vm._v("会员名："),_c('span',{staticClass:"membername",attrs:{"type":"gray"}},[_vm._v(_vm._s(_vm.query.user_name))])]):_vm._e()])]),_vm._v(" "),_c('div',[_c('div',{staticClass:"fl w40"},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":'search',"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1)])])],1),_vm._v(" "),_c('el-col',[_c('tableDetail',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":true,"tabOperation":_vm.tabOperation,"tableIndex":false,"allCheck":true,"getData":true,"sumGame":true,"colspan":3,"showAdd":true,"assembleColumns":_vm.assembleColumns},on:{"unchecked":_vm.nowUnChecked}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/preAct/queryDetail.vue
function injectStyle (context) {
  __webpack_require__(449)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e4f15276"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  queryDetail,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var preAct_queryDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);