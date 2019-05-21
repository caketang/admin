(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/testPlay.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var testPlay = ({
  data() {
    return {
      //表格相关
      LANG,
      columnsUrl: "",
      tableUrl: "",
      //搜索相关
      searchConfig: [//快捷日期
      {
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "试玩帐号"
      }, {
        "prop": "pname",
        "value": "",
        "type": "text",
        "label": "上级代理"
      }],
      type: "search",
      isEdit: {},
      labelWidth: "135px",
      formVisible: {
        state: false
      },
      baseUrl: "",
      //批量操作按钮
      updated: false,
      //确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: ""
      },
      settingDialog: false,
      addTest: {
        name: ''
      }
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      this.columnsUrl = "static/json/accoutManage/testPlay/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.user.testPlay;
      this.baseUrl = URL.api + ROUTES.GET.user.testPlay;
    },

    doHandle(item) {
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

    doSetting() {
      this.settingDialog = true;
    },

    submitSetting() {
      let data = {};
      data.name = this.addTest.name;
      this.$.autoAjax('post', URL.api + ROUTES.POST.user.testPlay, data, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message.success('添加试玩代理线成功');
            this.loading = true;
          }
        },
        error: e => {
          console.log(e);
        }
      });
      this.settingDialog = false;
    },

    handleClose() {
      this.settingDialog = false;
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
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    //重置
    resetForm() {
      this.tableUrl = this.baseUrl;
    }

  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-74c69b43","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/testPlay.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"testPlay"}},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"addshow":true,"addText":_vm.LANG['添加试玩代理线'] || '添加试玩代理线'},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm,"add-new":_vm.doSetting}}),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"pageSet":true,"updated":_vm.updated},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":"提示","visible":_vm.settingDialog,"size":"tiny","before-close":_vm.handleClose},on:{"update:visible":function($event){_vm.settingDialog=$event}}},[_c('el-form',{ref:"addTest",attrs:{"model":_vm.addTest,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"代理线名称："}},[_c('el-input',{model:{value:(_vm.addTest.name),callback:function ($$v) {_vm.$set(_vm.addTest, "name", $$v)},expression:"addTest.name"}})],1)],1),_vm._v(" "),_c('span',{staticClass:"help_red"},[_vm._v(" 【注意】：*添加成功后，你所输入的该用户下所有的代理线将成为测试帐号")]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.settingDialog = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitSetting}},[_vm._v("确 定")])],1)],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/userManagement/testPlay.vue
function injectStyle (context) {
  __webpack_require__(490)
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
  testPlay,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var userManagement_testPlay = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);