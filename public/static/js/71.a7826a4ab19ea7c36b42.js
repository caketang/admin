(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(15);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/memberHierarSet.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var memberHierarSet = ({
  data() {
    return {
      //表格相关
      LANG,
      //                navSelect: false,
      columnsUrl: "",
      tableUrl: "",
      //锁定接口
      //                lockUrl: "",
      //                infoUrl: "",
      updated: false,
      //                lockType: '',
      //                lockDialogShow: false,
      arrTwo: null,
      arrTwoObj: null,
      //确认
      //                confirmConfig: {
      //                    state: false,
      //                    msg: "",
      //                    fn: ""
      //                },
      //                lockSwitch: 'ON',
      //会员列表
      levelsList: [],
      // 下接数据更新
      listKey: "",
      listArr: [],
      lockType: '',
      //选中的行数据
      mode: [],
      loading: false
    };
  },

  props: {
    levelId: {
      type: String,
      default: ""
    },
    activeName: String,
    searchTableUrl: String,
    showSet: Boolean,
    colTwo: String
  },
  components: {
    tablegrid: tableGrid["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init(str) {
      this.loading = false; //				this.tableUrl = URL.api + ROUTES.GET.user.level.group;

      this.baseUrl = URL.api + ROUTES.GET.user.level.group; //锁定
      //                this.lockUrl = URL.api + ROUTES.PATCH.user.level.lock;
      //获取路由

      this.lid = FORMATNUMBER(this.$route.query.level);
      this.$route.query && this.$route.query.coltwo === true || this.activeName === 'searLevel' ? this.columnsUrl = "/static/json/accoutManage/memberHierarSet/columnsTwo.json" : this.columnsUrl = "/static/json/accoutManage/memberHierarSet/columns.json";
      this.tableUrl = this.baseUrl + '/?lid=' + this.lid;

      if (str) {
        this.updated = false;
        setTimeout(() => {
          this.updated = true;
        }, 500);
      } //批量修改层级
      //                this.infoUrl = URL.api + ROUTES.PATCH.user.info.infoLevel;
      //                this.navSelect = false;
      //                this.listKey = "id";
      //会员层级列表
      //                let levlsListUrl = URL.api + ROUTES.GET.user.levelsList;
      //                this.$.autoAjax('get', levlsListUrl, '', {
      //                    ok: (res) => {
      //                        let mode = res.data;
      //                        this.listArr.splice(0, this.listArr.length);
      //                        this.listArr.push({
      //                            "value": "",
      //                            "label": "默认：不操作"
      //                        })
      //                        for (let i in res.data) {
      //                            this.listArr.push({
      //                                "value": mode[i].id,
      //                                "label": mode[i].name
      //                            })
      //                        }
      //                        this.loading = false;
      //                    },
      //                    p: () => {
      //                    },
      //                    error: e => {
      //                        this.$message.error(LANG['未知错误，请点击“刷新”按钮后，重试'] || '未知错误，请点击“刷新”按钮后，重试');
      //                    }
      //                })

    },

    //            handleCloselockDialog() {
    //                this.lockDialogShow = false;
    //            },
    // 刷新当前页
    //            doInit() {
    //                this.init('init');
    //            },
    //			//返回上一个页面 跳转
    blackMemberHierarchy() {
      this.$router.push({
        path: '/memberHierarchy'
      });
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  watch: {
    searchTableUrl: function (newval) {
      if (newval) {
        this.init();
      }
    }
  },

  activated() {
    this.init('init');
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-64d14d69","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/memberHierarSet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"id":"memberHierartSet"}},[_c('el-row',[(_vm.activeName !== 'searLevel')?_c('el-col',{staticClass:"pb",attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.blackMemberHierarchy}},[_vm._v("\n                返 回\n            ")])],1):_vm._e(),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[(_vm.activeName == 'searLevel')?_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.searchTableUrl,"pageSet":true,"updated":_vm.updated,"isCreated":true,"saveData":false,"showRefresh":false}}):_vm._e(),_vm._v(" "),(_vm.activeName !== 'searLevel')?_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"isCreated":true,"pageSet":true,"showRefresh":false,"updated":_vm.updated}}):_vm._e()],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/memberHierarSet.vue
function injectStyle (context) {
  __webpack_require__(264)
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
  memberHierarSet,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_memberHierarSet = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);