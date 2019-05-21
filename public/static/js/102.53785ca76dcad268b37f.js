(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(15);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/idleAccount.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var idleAccount = ({
  data() {
    return {
      //表格相关
      LANG,
      columnsUrl: "",
      tableUrl: "",
      //搜索相关
      searchConfig: [//快捷日期
      {
        "prop": "username",
        "value": "",
        "type": "text",
        "label": "用户名"
      }, {
        "prop": "balance",
        "value": "",
        "type": "text",
        "label": "总额小于"
      }, {
        "prop": "over_day",
        "value": "",
        "type": "number",
        "label": "超过几天没有登录",
        "rules": [{
          "require": true,
          "moreZero": true,
          "integer": true
        }]
      }],
      type: "search",
      isEdit: {},
      labelWidth: "135px",
      formVisible: {
        state: false
      },
      baseUrl: "",
      //批量操作按钮
      tabOperation: [{
        "label": "批量停用",
        "fn": "delMeg"
      }, {
        "label": "批量封号",
        "fn": "sealMeg"
      }],
      updated: false,
      //确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: ""
      }
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      this.columnsUrl = "static/json/accoutManage/idleAccount/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.unused.list;
      this.baseUrl = URL.api + ROUTES.GET.unused.list;
    },

    doHandle(item) {
      this.updated = false;
      this.nowId = item.row.id || -1;

      switch (item.fn) {
        case "openUserSet":
          // 用户名跳转
          this.openUserSet(item.row);
          break;

        default:
          break;
      }
    },

    //用户名跳转
    openUserSet(item) {
      this.$router.push({
        path: '/memberManagement',
        query: {
          name: item.name
        }
      });
    },

    //查询
    doQuery(obj) {
      let obj_f = {};

      if (obj.item.balance) {
        obj_f.balance = obj.item.balance * 100;
      }

      if (obj.item.over_day) {
        obj_f.over_day = obj.item.over_day;
      }

      if (obj.item.username) {
        obj_f.username = obj.item.username;
      }

      this.tableUrl = this.baseUrl + this.addSearch(obj_f);
    },

    //重置
    resetForm() {
      this.tableUrl = this.baseUrl;
    },

    //确认删除
    doConfirm(obj) {
      let _this = this;

      this.updated = false;
      let id = obj.obj.map(function (i) {
        return i.id;
      });
      let ids = id.join(",");

      switch (obj.fn) {
        // 批量删除
        case "delete":
          let url = URL.api + '/user/unused';
          let id = ids.split(',');
          this.$.autoAjax('patch', url, {
            'ids': id
          }, {
            ok: res => {
              if (res.state == 0) {
                this.$message.success(this.LANG['成功停用所选用户'] || '成功停用所选用户');
                this.updated = true;
              } else {
                this.$message.error(this.LANG['批量停用失败'] || '批量停用失败');
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }) // this.$http.patch(url, JSON.stringify({'ids': id}),URLCONFIG).then((res) => {
          //     if (res.data.state == 0) {
          //         this.$message.success(this.LANG['成功停用所选用户'] || '成功停用所选用户');
          //         this.updated = true;
          //     } else {
          //         this.$message.error(this.LANG['批量停用失败'] || '批量停用失败');
          //     }
          // })
          .catch(function (err) {//                            console.log(err)
          });
          break;
        // 批量封号

        case "seal":
          this.$.autoAjax('put', URL.api + ROUTES.PUT.user.setting, {
            'ids': ids,
            'state': 4
          }, {
            ok: res => {
              if (res.state != undefined && res.state == 0 && res.state == 0) {
                this.$message.success(this.LANG['闲置帐号封号成功'] || '闲置帐号封号成功');
                this.updated = true;
              } else {
                this.$message.error(this.LANG['闲置帐号封号失败，请稍后重试'] || '闲置帐号封号失败，请稍后重试');
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.put(URL.api + ROUTES.PUT.user.setting, JSON.stringify({'ids': ids, 'state': 4}), URLCONFIG).then((res) => {
          //     if (res.data.state != undefined && res.data.state == 0 && res.data.state == 0) {
          //         this.$message.success(this.LANG['闲置帐号封号成功'] || '闲置帐号封号成功');
          //         this.updated = true;
          //     } else {
          //         this.$message.error(this.LANG['闲置帐号封号失败，请稍后重试'] || '闲置帐号封号失败，请稍后重试');
          //     }
          // })
          //等接口

          break;
      }
    },

    //批量删除提示
    delMeg(list) {
      if (list.length > 0) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = this.LANG['确定批量停用吗?'] || '确定批量停用吗?';
        this.confirmConfig.fn = "delete";
        this.confirmConfig.obj = list;
      }
    },

    // 批量封号提示
    sealMeg(list) {
      if (list.length > 0) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = this.LANG['确定批量封号吗?'] || '确定批量封号吗?';
        this.confirmConfig.fn = "seal";
        this.confirmConfig.obj = list;
      }
    },

    //表格批量操作触发
    doOperation(obj) {
      switch (obj.fn) {
        // 批量删除
        case "delMeg":
          this.delMeg(obj.rows);
          break;
        // 批量封号

        case "sealMeg":
          this.sealMeg(obj.rows);
          break;
      }
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1d56957e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/idleAccount.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"idleAccount"}},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}}),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":true,"pageSet":true,"tabOperation":_vm.tabOperation,"updated":_vm.updated},on:{"do-operation":_vm.doOperation,"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/userManagement/idleAccount.vue
function injectStyle (context) {
  __webpack_require__(489)
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
  idleAccount,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var userManagement_idleAccount = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 489:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);