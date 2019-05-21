(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/table.vue + 2 modules
var table = __webpack_require__(309);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/memberDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      columnsUrl: "",
      loading: false,
      tableUrl: '',
      assembleColumns: {
        index: 1,
        data: []
      },
      allData: {},
      query: {},
      tableData: {
        list: []
      }
    };
  },

  components: {
    tableDetail: table["a" /* default */]
  },
  methods: {
    init() {
      let _this = this;

      let query = this.$route.query;

      for (let k in query) {
        this.$set(this.query, k, query[k]);
      }
      /*获取游戏选项*/


      function getGame() {
        return new Promise((resolve, reject) => {
          if (_this.assembleColumns.data.length === 0) {
            this.$.autoAjax('get', URL.api + "/games", '', {
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
                  resolve();
                }
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            }) // _this.$http.get(URL.api + "/games", URLCONFIG).then((res) => {
            //     if (res.data.state === 0 && res.data.data) {
            //         let model = res.data.data;
            //         model.forEach(item => {
            //             let obj = {"label":item.game_name,'type': "twoLine","game_id":item.game_id,"game_type":item.game_type,filterByWord:"games",prop:"val",filterCondition:"game_type,game_id"};
            //             _this.assembleColumns.data.push(obj);
            //         })
            //         resolve();
            //     }
            // })
            .catch(res => {
              _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');

              reject(res);
            });
          } else {
            resolve();
          }
        });
      }

      getGame().then(() => {
        _this.columnsUrl = "static/json/preAct/memberDetail/columns.json";
        let memberId = `memberDetailData_${_this.query.user_id}`;
        _this.tableData.list = [];

        _this.tableData.list.push(JSON.parse(window.localStorage[memberId]));
      });
    },

    goback() {
      this.$router.push({
        path: "/discountCounting"
      });
    }

  },
  computed: {},

  mounted() {},

  activated() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2f590a86","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/memberDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"subAgentRebate"}},[_c('div',{staticClass:"title"},[_c('a',{attrs:{"href":"javascript:;"},on:{"click":_vm.goback}},[_c('el-button',{attrs:{"type":"primary","icon":"arrow-left","size":"small"}},[_vm._v(_vm._s(_vm.LANG['返 回'] || '返 回'))])],1)]),_vm._v(" "),_c('span',[_c('el-tag',{attrs:{"type":"gray"}},[_vm._v(_vm._s(_vm.query.user_name))]),_vm._v("\n        会员返水比例\n    ")],1),_vm._v(" "),_c('el-col',[_c('tableDetail',{attrs:{"tableData":_vm.tableData,"columnsUrl":_vm.columnsUrl,"showDetail":true,"assembleColumns":_vm.assembleColumns}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/preAct/memberDetail.vue
function injectStyle (context) {
  __webpack_require__(456)
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
  memberDetail,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var preAct_memberDetail = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);