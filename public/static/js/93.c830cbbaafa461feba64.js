(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/typeList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var typeList = ({
  data() {
    return {
      LANG,
      //弹窗
      formConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "优惠活动类型名称",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "description",
        "value": "",
        "type": "textarea",
        "label": "优惠活动类型描述",
        "rules": [{
          "max": 30,
          "require": true
        }]
      }, {
        "prop": "sort",
        "value": "0",
        "type": "text",
        "label": "排序",
        "rules": [{
          "max": 30,
          "require": true
        }, {
          "integer": true
        }]
      }],
      type: "default",
      formTitel: "",
      labelWidth: "150px",
      editVisible: {
        state: false
      },
      // 是否编辑数据
      isEdit: {
        state: false
      },
      //数据接口地址
      tableUrl: "",
      //列配置接口地址
      columnsUrl: "",
      baseUrl: "",
      //是否刷新表格列表
      updated: false,
      formType: '',
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: ""
      },
      loading: false,
      nowId: -1
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      this.tableUrl = URL.api + ROUTES.GET.activity.types;
      this.columnsUrl = "static/json/preAct/typeList/columns.json";
    },

    //新增
    AddNew() {
      this.formTitel = this.LANG["新增优惠活动类型"] || "新增优惠活动类型";
      this.editVisible.state = true;
      this.formType = "add";
    },

    //保存弹窗数据
    getForm(obj) {
      let _this = this;

      this.updated = false;
      this.fullscreenLoading = true;
      obj.formObj.id = this.nowId;

      if (this.formType == "add") {
        this.$.autoAjax('put', URL.api + ROUTES.POST.activity.type, obj.formObj, {
          ok: res => {
            if (res.state == 0 && res.data) {
              _this.$message.success(_this.LANG["恭喜您，新增优惠活动类型成功！"] || "恭喜您，新增优惠活动类型成功！");

              _this.formType = "";
              _this.updated = true;
            } else {
              _this.$message.success((_this.LANG["新增优惠活动类型失败！"] || "新增优惠活动类型失败！") + res.msg);

              _this.formType = "";
              _this.updated = true;
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // this.$http.put(URL.api+ ROUTES.POST.activity.type,JSON.stringify(obj.formObj),URLCONFIG).then((res)=>{
        //      if (res.data.state == 0 && res.data.data) {
        //          _this.$message.success(_this.LANG["恭喜您，新增优惠活动类型成功！"] || "恭喜您，新增优惠活动类型成功！");
        //          _this.formType = "";
        //         _this.updated = true;
        //     }else{
        //          _this.$message.success((_this.LANG["新增优惠活动类型失败！"] || "新增优惠活动类型失败！") + res.data.msg);
        //          _this.formType = "";
        //          _this.updated = true;
        //      }
        // })
      } else {
        obj.formObj.id = this.nowId;
        this.$.autoAjax('put', URL.api + ROUTES.PUT.activity.newType + "?id=" + obj.formObj.id, obj.formObj, {
          ok: res => {
            if (res.state != undefined && res.state == 0) {
              _this.$message.success(_this.LANG["恭喜您，修改优惠活动类型成功！"] || "恭喜您，修改优惠活动类型成功！");

              _this.formType = "";
              _this.updated = true;
            } else {
              _this.$message.success((_this.LANG["新增优惠活动类型失败！"] || "新增优惠活动类型失败！") + res.msg);

              _this.formType = "";
              _this.updated = true;
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // this.$http.put(URL.api+ ROUTES.PUT.activity.newType+"?id="+(obj.formObj.id),JSON.stringify(obj.formObj),URLCONFIG).then((res)=>{
        //     if (res.data.state !=undefined  && res.data.state == 0) {
        //         _this.$message.success(_this.LANG["恭喜您，修改优惠活动类型成功！"] || "恭喜您，修改优惠活动类型成功！");
        //         _this.formType = "";
        //         _this.updated = true;
        //     }else{
        //     _this.$message.success((_this.LANG["新增优惠活动类型失败！"] || "新增优惠活动类型失败！") + res.data.msg);
        //     _this.formType = "";
        //     _this.updated = true;
        // }
        // })
      }
    },

    //表格按钮点击事件
    doHandle(item) {
      this.updated = false;
      this.formType = "";
      this.nowId = item.row.id;

      switch (item.fn) {
        case "doEdit":
          this.doEdit(item.row);
          break;

        case "doDelete":
          this.doDelete(item.row);
          break;
      }
    },

    //编辑
    doEdit(row) {
      // let val = row.id;
      let _this = this;

      this.loading = true;
      this.formTitel = this.LANG["修改优惠活动类型"] || "修改优惠活动类型";
      FORMVAL(row, this.formConfig);
      setTimeout(() => {
        _this.formType = "edit";
        _this.loading = false;
        _this.editVisible.state = true;
      }, 1000);
    },

    //删除
    doDelete(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "delete";
      }
    },

    //确认操作
    doConfirm(obj) {
      this.loading = true;

      let _this = this;

      switch (obj.fn) {
        case "delete":
          this.$.autoAjax('delete', URL.api + ROUTES.DELETE.activity.type.$(parseInt(this.nowId)), {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.updated = true;

                _this.$message.success(_this.LANG["删除成功"] || "删除成功");
              } else {
                _this.updated = false;

                _this.$message.success(_this.LANG["删除失败"] || "删除失败");
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.delete(URL.api + ROUTES.DELETE.activity.type.$(parseInt(this.nowId)),URLCONFIG).then((res) => {
          //     if(res.data.state == 0 && res.data.data){
          //         _this.updated = true;
          //         _this.$message.success(_this.LANG["删除成功"] || "删除成功");
          //
          //     }else{
          //         _this.updated = false;
          //         _this.$message.success(_this.LANG["删除失败"] || "删除失败");
          //
          //     }
          //     _this.loading = false;
          // })

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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-00ed0002","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/typeList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"typeList"}},[_c('el-col',{staticStyle:{"text-align":"right","margin-bottom":"10px"}},[_c('el-button',{staticClass:"btn_right",attrs:{"type":"primary","size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['新增优惠类型'] || '新增优惠类型')},on:{"click":_vm.AddNew}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableIndex":false,"tableCheck":false,"updated":_vm.updated,"showRefresh":true,"tableUrl":_vm.tableUrl},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.editVisible,"formConfig":_vm.formConfig,"type":_vm.type,"size":"small","labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}})],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/preAct/typeList.vue
function injectStyle (context) {
  __webpack_require__(429)
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
  typeList,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var preAct_typeList = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);