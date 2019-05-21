(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/accountManagement/agentAudit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var agentAudit = ({
  data() {
    return {
      LANG,
      //代理用户名
      agentName: "",
      //审核状态
      examineState: "",
      //代理状态LIST
      examineStateList: [{
        "label": "待审核",
        "value": 0
      }, {
        "label": "已审核",
        "value": 1
      }, {
        "label": "已拒绝",
        "value": 2
      }],
      //表格数据配置
      columnsUrl: "",
      tableUrl: "",
      baseUrl: "",
      updated: "",
      searchType: "search",
      searchEdit: {},
      searchConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "代理名称"
      }, {
        "prop": "status",
        "value": "",
        "label": "状态",
        "type": "select",
        "list": [{
          "label": "未审核",
          "value": "0"
        }, {
          "label": "已拒绝",
          "value": "2"
        }]
      }],
      formType: "",
      formTitel: "",
      labelWidth: "90px",
      editVisible: {
        state: false
      },
      loading: false,
      nowId: -1,
      //删除确认
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
      this.columnsUrl = "static/json/accoutManage/agentAudit/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.user.agent.reviews + '?' + 'n_status=1';
      this.baseUrl = URL.api + ROUTES.GET.user.agent.reviews;
    },

    //查询
    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    //表格事件
    doHandle(item) {
      this.nowId = parseInt(item.row.id);

      switch (item.fn) {
        case "doReject":
          this.doReject(item.row);
          break;

        case "doAudit":
          this.doAudit(item.row);
          break;

        case "doDetial":
          this.doDetial(item.row);
          break;
      }
    },

    //拒绝
    doReject(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定拒绝'] || '确定拒绝') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "reject";
      }
    },

    //审核通过
    doAudit(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定审核'] || '确定审核') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "audit";
      }
    },

    //确认删除
    doConfirm(obj) {
      this.loading = true;
      this.updated = false;

      let _this = this;

      switch (obj.fn) {
        case "reject":
          this.$.autoAjax('patch', URL.api + '/user/agent/handle/' + parseInt(this.nowId), {
            "status": "2"
          }, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，代理拒绝成功！'] || '恭喜您，代理拒绝成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['代理拒绝失败，请稍候重试！'] || '代理拒绝失败，请稍候重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.patch(URL.api + '/user/agent/handle/'+parseInt(this.nowId),JSON.stringify({"status":"2"}),URLCONFIG).then((res) => {
          //     if (res.data.state == 0 && res.data.data) {
          //         _this.$message.success(LANG['恭喜您，代理拒绝成功！'] || '恭喜您，代理拒绝成功！');
          //         _this.updated = true;
          //     } else {
          //         _this.$message.error(LANG['代理拒绝失败，请稍候重试！'] || '代理拒绝失败，请稍候重试！');
          //     }
          //     _this.loading = false;
          // });

          break;

        case "audit":
          this.$.autoAjax('patch', URL.api + '/user/agent/handle/' + parseInt(this.nowId), '', {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，代理审核通过！'] || '恭喜您，代理审核通过！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['代理审核失败，请稍候重试！'] || '代理审核失败，请稍候重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.patch(URL.api + '/user/agent/handle/'+parseInt(this.nowId),JSON.stringify({"status":"1"}),URLCONFIG).then((res) => {
          //     if (res.data.state == 0 && res.data.data) {
          //         _this.$message.success(LANG['恭喜您，代理审核通过！'] || '恭喜您，代理审核通过！');
          //         _this.updated = true;
          //     } else {
          //         _this.$message.error(LANG['代理审核失败，请稍候重试！'] || '代理审核失败，请稍候重试！');
          //     }
          //     _this.loading = false;
          // });

          break;
      }
    },

    //资料
    doDetial(row) {
      this.$router.push({
        path: '/agentAccount',
        query: {
          id: row.id,
          type: row.type
        }
      });
    },

    //重置查询
    resetForm() {
      this.tableUrl = this.baseUrl;
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-70850a76","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/accountManagement/agentAudit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"page clearfix",attrs:{"id":"agentAudit"}},[_c('formEdit',{attrs:{"formVisible":_vm.editVisible,"formConfig":_vm.searchConfig,"type":_vm.searchType,"isEdit":_vm.searchEdit,"labelWidth":_vm.labelWidth,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}}),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableIndex":false,"updated":_vm.updated,"tableUrl":_vm.tableUrl},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/accountManagement/agentAudit.vue
function injectStyle (context) {
  __webpack_require__(492)
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
  agentAudit,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var accountManagement_agentAudit = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);