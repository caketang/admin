(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/memberLabel.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var memberLabel = ({
  data() {
    return {
      LANG,
      //加载数据
      fullscreenLoading: false,
      //表格相关
      columnsUrl: "",
      tableUrl: "",
      updateType: "",
      //当前操作数据ID
      nowId: -1,
      //当前表单类型
      formType: "",
      page: 1,
      //                //弹窗相关
      formConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "标签名称",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "desc",
        "value": "",
        "type": "textarea",
        "label": "描述",
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
      },
      updated: false
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      this.columnsUrl = "/static/json/accoutManage/memberLabel/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.user.labels;
    },

    //新增
    AddNew() {
      this.updated = false;
      this.formTitel = "新增会员标签";
      this.editVisible.state = true;
      this.formType = "add";
    },

    //保存弹窗数据
    getForm(obj) {
      let _this = this;

      this.fullscreenLoading = true;
      let str = "";
      obj.formObj.id = this.nowId; // let edit_id = parseInt(this.nowId, 10);
      // 编辑在api后面直接加上ID， 新增不用
      // if (_this.formType == 'add') {
      //     this.$http.put(URL.api+ ROUTES.PUT.user.label.$,JSON.stringify(obj.formObj),URLCONFIG).then((res)=>{
      //         if (res.data.state !=undefined  && res.data.state == 0) {
      //             str=LANG['恭喜您，新增会员标签成功！'] || '恭喜您，新增会员标签成功！';
      //             _this.updateType = "add";
      //             _this.$message.success(str);
      //         }else{
      //             this.fullscreenLoading = false;
      //             str=LANG['新增会员标签失败，请稍候重试！'] || '新增会员标签失败，请稍候重试！';
      //             _this.$message.error(str);
      //             _this.updateType = "";
      //         }
      //         this.fullscreenLoading = false;
      //         _this.formType = "";
      //     })
      // } else {
      //     this.$http.put(URL.api+ ROUTES.PUT.user.label.$ + '/' + obj.formObj.id,JSON.stringify(obj.formObj),URLCONFIG).then((res)=>{
      //         if (res.data.state !=undefined  && res.data.state == 0) {
      //             str=LANG['恭喜您，会员标签修改成功！'] || '恭喜您，会员标签修改成功！';
      //             _this.updateType = "edit";
      //             _this.$message.success(str);
      //         }else{
      //             this.fullscreenLoading = false;
      //             str=LANG['会员标签修改失败，请稍候重试！'] || '会员标签修改失败，请稍候重试！';
      //             _this.$message.error(str);
      //             _this.updateType = "";
      //         }
      //         this.fullscreenLoading = false;
      //         _this.formType = "";
      //     })
      // }

      let url = '';
      url = this.formType == "add" ? url = URL.api + ROUTES.PUT.user.label.$ + '/' : url = URL.api + ROUTES.PUT.user.label.$ + '/' + obj.formObj.id;
      this.$http.put(url, obj.formObj, URLCONFIG).then(res => {
        if (res.data.data && res.data.state == 0) {
          if (_this.formType == "add") {
            str = LANG['恭喜您，新增会员标签成功！'] || '恭喜您，新增会员标签成功！';
            _this.updateType = "add";
          } else {
            str = LANG['恭喜您，会员标签修改成功！'] || '恭喜您，会员标签修改成功！';
            _this.updateType = "edit";
          }

          _this.updated = true;

          _this.$message.success(str);
        } else if (res.data.state == 1002) {
          str = LANG[res.data.msg] || res.data.msg;

          _this.$message.error(str);

          _this.updateType = "";
        } else {
          if (_this.formType == "add") {
            this.fullscreenLoading = false;
            str = LANG['新增会员标签失败，请稍候重试！'] || '新增会员标签失败，请稍候重试！';
          } else {
            str = LANG['会员标签修改失败，请稍候重试！'] || '会员标签修改失败，请稍候重试！';
          }

          _this.$message.error(str);

          _this.updateType = "";
          _this.updated = false;
        }

        this.fullscreenLoading = false;
        _this.formType = "";
      }).catch(error => {// if(_this.formType == "add"){
        //     this.fullscreenLoading = false;
        //     str=LANG['新增会员标签失败，请稍候重试！'] || '新增会员标签失败，请稍候重试！';
        // }else{
        //     str=LANG['会员标签修改失败，请稍候重试！'] || '会员标签修改失败，请稍候重试！';
        // }
        // _this.$message.error(str);
        // _this.updateType = "";
        // this.fullscreenLoading = false;
        // _this.formType = "";
      });
    },

    //表格按钮点击事件
    doHandle(item) {
      switch (item.fn) {
        case "doEdit":
          // this.$message.error(this.LANG['权限不足！'] || '权限不足！');
          // return;
          this.doEdit(item.row);
          break;

        case "doDelete":
          this.doDelete(item.row);
          break;
      }
    },

    //编辑
    doEdit(row) {
      this.nowId = row.id;
      this.formTitel = LANG["修改会员标签"] || '修改会员标签';
      this.formType = "";
      row.name = row.title;
      row.desc = row.content;
      setTimeout(() => {
        FORMVAL(row, this.formConfig);
        this.formType = "edit";
        this.isEdit.state = true;
        this.editVisible.state = true;
      }, 500);
    },

    //删除
    doDelete(row) {
      let name = row.title;
      this.nowId = row.id;
      this.confirmConfig.state = true;
      this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + name + (this.LANG['吗？'] || '吗？');
      this.confirmConfig.fn = "delete";
    },

    //确认删除
    doConfirm(obj) {
      if (obj.fn == "delete") {
        this.fullscreenLoading = true;

        let _this = this;

        this.$http.delete(URL.api + ROUTES.DELETE.user.label + "/" + parseInt(_this.nowId), URLCONFIG).then(res => {
          if (res.data.state === 0 && res.data.data) {
            _this.$message.success(LANG['恭喜您，会员标签删除成功！'] || '恭喜您，会员标签删除成功！');

            _this.updateType = "delete";
          } else if (res.data.state === 2004 && res.data.data) {
            _this.$message.error(LANG[res.data.msg] || res.data.msg);
          }

          this.fullscreenLoading = false;
        });
        _this.updateType = "";
      }
    },

    //获取表格数据
    getTableDate(obj) {}

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cee94fa6","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/memberLabel.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.fullscreenLoading),expression:"fullscreenLoading"}],staticClass:"clearfix",attrs:{"id":"memberLabel"}},[(!_vm.fullscreenLoading)?_c('el-col',{staticClass:"pb"},[_c('el-button',{staticClass:"btn_right addBut",attrs:{"type":"primary","size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['新增会员标签'] || '新增会员标签')},on:{"click":_vm.AddNew}})],1):_vm._e(),_vm._v(" "),(!_vm.fullscreenLoading)?_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableIndex":false,"tableCheck":false,"showRefresh":true,"isCreated":true,"updated":_vm.updated},on:{"get-table-data":_vm.getTableDate,"do-handle":_vm.doHandle}})],1):_vm._e(),_vm._v(" "),(!_vm.fullscreenLoading)?_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.editVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}})],1):_vm._e(),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/userManagement/memberLabel.vue
function injectStyle (context) {
  __webpack_require__(488)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cee94fa6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  memberLabel,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var userManagement_memberLabel = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);