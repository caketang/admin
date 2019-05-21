(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/agent/agentLink.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var agentLink = ({
  data() {
    return {
      LANG,
      //加载数据
      loading: false,
      //表格相关
      columnsUrl: "",
      tableUrl: "",
      baseUrl: "",
      updated: false,
      name: '',
      //当前操作数据ID
      nowId: -1,
      //当前表单类型
      formType: "",
      //弹窗相关
      formConfig: [{
        "prop": "domain",
        "value": "",
        "type": "url",
        "label": "网址",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "remark",
        "value": "",
        "type": "textarea",
        "label": "备注",
        "rules": [{
          "max": 30
        }]
      }, {
        "prop": "status",
        "value": "enabled",
        "label": "状态",
        "type": "select",
        "list": ARRAYS.state4,
        "rules": [{
          "max": 30
        }]
      }],
      type: "default",
      formTitel: "",
      labelWidth: "90px",
      editVisible: {
        state: false
      },
      // 是否编辑数据
      isEdit: {
        state: false
      },
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
      this.columnsUrl = "/static/json/agent/agentLink/columns.json";
      this.baseUrl = URL.api + ROUTES.GET.user.agent.domain;

      if (this.$route.query == "{}") {
        this.tableUrl = URL.api + ROUTES.GET.user.agent.domain;
      } else {
        this.tableUrl = URL.api + ROUTES.GET.user.agent.domain + '?name=' + this.$route.query.name;
        this.name = this.$route.query.name;
      }
    },

    //保存弹窗数据
    getForm(obj) {
      let _this = this;

      this.loading = true;
      let url;

      if (this.formType === "edit") {
        obj.formObj.id = this.nowId;
        url = URL.api + ROUTES.PUT.commission.link;
        let data = {
          id: obj.formObj.id,
          status: obj.formObj.status,
          remark: obj.formObj.remark
        };
        this.$.autoAjax('patch', url, data, {
          ok: res => {
            if (res.state === 0 && res.data) {
              _this.$message.success(LANG['恭喜您，修改成功！'] || '恭喜您，修改成功！');

              _this.updated = true;
            } else {
              _this.$message.error(LANG['代理链接修改失败，请稍候重试！'] || '代理链接修改失败，请稍候重试！');
            }

            this.loading = false;
          },
          p: () => {},
          error: e => {
            this.loading = false;

            _this.$message.error(LANG['代理链接修改失败，请稍候重试！'] || '代理链接修改失败，请稍候重试！');
          }
        });
      }
    },

    toSearch() {
      if (this.name) {
        this.tableUrl = this.baseUrl + this.addSearch({
          name: this.name
        });
      }
    },

    //编辑
    doEdit(row) {
      let _this = this;

      this.nowId = row.id;
      this.formTitel = "修改代理链接";
      this.formType = "";
      setTimeout(() => {
        FORMVAL(row, this.formConfig);
        _this.formConfig[2].value = row.status;
        _this.formType = "edit";
        _this.isEdit.state = true;
        _this.editVisible.state = true;
      }, 500);
    },

    //删除
    doDelete(row) {
      let name = row.domain;
      this.nowId = row.id;
      this.confirmConfig.state = true;
      this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + " '" + row.name + '的链接' + row.domain + "' " + (this.LANG['吗？'] || '吗？');
      this.confirmConfig.fn = "delete";
    },

    //确认删除
    doConfirm(obj) {
      let _this = this;

      this.loading = true;
      this.updated = false;

      switch (obj.fn) {
        case "delete":
          this.$.autoAjax('delete', URL.api + ROUTES.DELETE.commission.link + '?id=' + this.nowId, '', {
            ok: res => {
              if (res.data != undefined && res.data) {
                _this.$message.success(LANG['恭喜您，代理链接删除成功！'] || '恭喜您，代理链接删除成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['代理链接删除失败，请稍候重试！'] || '代理链接删除失败，请稍候重试！');
              }

              this.loading = false;
            },
            p: () => {},
            error: e => {
              this.loading = false;

              _this.$message.error(LANG['代理链接删除失败，请稍候重试！'] || '代理链接删除失败，请稍候重试！');
            }
          });
          break;
      }

      _this.formType = "";
    },

    //启用
    doEnabled(row) {
      let name = row.domain;
      this.nowId = row.id;
      this.confirmConfig.state = true;
      this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') + " '" + name + "' " + (this.LANG['吗？'] || '吗？');
      this.confirmConfig.fn = "enabled";
    },

    //停用
    doDisabled(row) {
      let name = row.domain;
      this.nowId = row.id;
      this.confirmConfig.state = true;
      this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + " '" + name + "' " + (this.LANG['吗？'] || '吗？');
      this.confirmConfig.fn = "disabled";
    }

  },
  //        watch: {
  //            $route: {
  //                handler(to, from) {
  //                    console.log(from)
  //                    if(to.query.name){
  //                        this.tableUrl = URL.api + ROUTES.GET.user.agent.domain + '?name=' + to.query.name
  //                        this.name = this.$route.query.name;
  //                    }else{
  //                        this.tableUrl = URL.api + ROUTES.GET.user.agent.domain + '?name=' + from.query.name
  //                        this.name = this.$route.query.name;
  //                    }
  //                },
  //                //是否绑定初始值
  //                immediate: true,
  //                //深度监听
  //                deep: true
  //            },
  //        },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  activated() {
    this.updated = false;
    setTimeout(() => {
      this.updated = true;
    }, 500);
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f8b7dda0","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/agent/agentLink.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"agentLink"}},[_c('label',{staticClass:"state_info"},[_c('span',[_vm._v("用户名：")]),_vm._v(" "),_c('el-input',{staticClass:"intW",attrs:{"placeholder":"请输入用户名","size":"small"},model:{value:(_vm.name),callback:function ($$v) {_vm.name=$$v},expression:"name"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.toSearch}},[_c('i',{staticClass:"icon el-icon-search"}),_vm._v("查 询")])],1),_vm._v(" "),(!_vm.loading)?_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"updated":_vm.updated,"isCreated":true,"pageSet":false,"showRefresh":true}})],1):_vm._e(),_vm._v(" "),(!_vm.loading)?_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.editVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}})],1):_vm._e(),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/agent/agentLink.vue
function injectStyle (context) {
  __webpack_require__(487)
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
  agentLink,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var agent_agentLink = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);