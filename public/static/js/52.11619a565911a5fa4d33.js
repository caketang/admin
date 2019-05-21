(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/systemSettings/emailList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var emailList = ({
  data() {
    return {
      LANG,
      //弹窗
      editForm: {
        hyper_text: "",
        title: "",
        content: "",
        send_type: "",
        type_value: ""
      },
      //详情
      detailform: {
        hyper_text: "",
        title: "",
        content: "",
        send_type: "",
        updated: "",
        status: ""
      },
      //弹窗
      formConfig: [{
        "prop": "hyper_text",
        "value": "",
        "label": "超文本格式",
        "type": "select",
        "list": ARRAYS.textState
      }, {
        "prop": "title",
        "value": "",
        "type": "text",
        "label": "邮件标题",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "content",
        "value": "",
        "type": "markdown",
        "label": "邮件内容",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "send_type",
        "value": "",
        "label": "发送类型",
        "type": "select",
        "list": [{
          value: "1",
          label: "会员层级"
        }, {
          value: "2",
          label: "代理"
        }, {
          value: "3",
          label: "自定义"
        }],
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "type_value",
        "value": "",
        "label": "会员层级",
        "sReset": false,
        "checkAll": true,
        "allBtnShow": true,
        "type": "select",
        "list": [],
        "Arr": [],
        "ifVal": "1",
        "ifKey": "send_type"
      }, {
        "prop": "type_value",
        "value": "1",
        "type": "checkbox",
        "label": "",
        "valLabel": "全部代理",
        "ifVal": "2",
        "ifKey": "send_type"
      }, {
        "prop": "type_value",
        "value": "",
        "label": "自定义接收人",
        "type": "textarea",
        "ifVal": "3",
        "ifKey": "send_type",
        "placeholder": "多个用户名请用英文逗号隔开"
      }],
      labelWidth: "110px",
      type: "default",
      formTitel: "新增邮件",
      formType: "",
      editVisible: {
        state: false
      },
      // 是否编辑数据
      isEdit: {
        state: false
      },
      checkAll: [],
      checkedList: [],
      isIndeterminate: true,
      //数据接口地址
      tableUrl: "",
      //列配置接口地址
      columnsUrl: "",
      baseUrl: "",
      updateType: false,
      nowId: -1,
      readOnly: false,
      //批量操作按钮
      tabOperation: [{
        "label": "批量删除",
        "fn": "delMeg"
      }],
      dialogTableVisible: false
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      this.tableUrl = URL.api + ROUTES.GET.system.emails;
      this.baseUrl = URL.api + ROUTES.GET.system.emails;
      this.columnsUrl = "static/json/systemSettings/emailList/columns.json"; //取会员层级

      this.$.autoAjax('get', URL.api + ROUTES.GET.user.levels, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data;

            for (let j in model) {
              this.formConfig[4].list.push({
                "label": model[j].name,
                "value": model[j].id
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.user.levels, URLCONFIG).then((res) => {
      //     if (res.data.state == 0 && res.data.data) {
      //         let model = res.data.data;
      //         for (let j in model) {
      //             this.formConfig[4].list.push({
      //                 "label": model[j].name,
      //                 "value": model[j].id
      //             });
      //         }
      //     }
      // })
    },

    //新增
    AddNew() {
      this.editVisible.state = true;
    },

    //保存弹窗数据
    saveEditForm() {
      this.updateType = false;

      if (this.checkedList && this.editForm.send_type == "1") {
        let checkedList = this.checkedList;
        let levels = this.levels;
        let typeValue = [];

        for (let i in levels) {
          for (let j in checkedList) {
            if (levels[i].label == checkedList[j]) {
              typeValue.push(levels[i].value);
            }
          }
        }

        this.editForm['type_value'] = typeValue.toString();
      }

      this.fullscreenLoading = true;
      let str = "";
      this.editForm.id = this.nowId;

      if (this.formType == "edit") {
        this.resetEditForm();
        this.editFormVisible = false;
        this.formType = "";
      } else {
        this.$.autoAjax('put', URL.api + ROUTES.PUT.system.email.$, this.editForm, {
          ok: res => {
            if (res.state == 0 && res.data) {
              if (this.formType == "add") {
                str = LANG['恭喜您，新增邮件成功！'] || '恭喜您，新增邮件成功！';
                this.updateType = true;
              } else {
                str = LANG['恭喜您，邮件修改成功！'] || '恭喜您，邮件修改成功！';
                this.updateType = true;
              }

              this.$message.success(str);
            } else {
              if (this.formType == "add") {
                this.fullscreenLoading = false;
                str = LANG['新增邮件失败，请稍候重试！'] || '新增邮件失败，请稍候重试！';
              } else {
                str = LANG['邮件修改失败，请稍候重试！'] || '邮件修改失败，请稍候重试！';
              }

              this.$message.error(str);
              this.updateType = false;
            }

            this.fullscreenLoading = false;
            this.resetEditForm();
            this.editFormVisible = false;
            this.formType = "";
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // this.$http.put(URL.api + ROUTES.PUT.system.email.$, JSON.stringify(this.editForm), URLCONFIG).then((res) => {
        //     if (res.data.state == 0 && res.data.data) {
        //         if (this.formType == "add") {
        //             str = LANG['恭喜您，新增邮件成功！'] || '恭喜您，新增邮件成功！';
        //             this.updateType = true;
        //         } else {
        //             str = LANG['恭喜您，邮件修改成功！'] || '恭喜您，邮件修改成功！';
        //             this.updateType = true;
        //         }
        //         this.$message.success(str);
        //     } else {
        //         if (this.formType == "add") {
        //             this.fullscreenLoading = false;
        //             str = LANG['新增邮件失败，请稍候重试！'] || '新增邮件失败，请稍候重试！';
        //         } else {
        //             str = LANG['邮件修改失败，请稍候重试！'] || '邮件修改失败，请稍候重试！';
        //         }
        //         this.$message.error(str);
        //         this.updateType = false;
        //     }
        //     this.fullscreenLoading = false;
        //     this.resetEditForm();
        //     this.editFormVisible = false;
        //     this.formType = "";
        // })
      }
    },

    //保存弹窗数据
    getForm(obj) {
      if (obj.formObj.send_type == "2") {
        obj.formObj.type_value = "1";
      }

      if (obj.formObj.hyper_text == "true") {
        obj.formObj.hyper_text = true;
      } else {
        obj.formObj.hyper_text = false;
      }

      this.updateType = false;
      this.$.autoAjax('put', URL.api + "/system/email", obj.formObj, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message.success(LANG['邮件添加成功'] || '邮件添加成功');
            this.updateType = true;
          } else {
            this.$message.error(LANG['邮件添加失败'] || '邮件添加失败');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.put(URL.api+ "/system/email", JSON.stringify(obj.formObj), URLCONFIG).then((res)=>{
      //     if (res.data.state == 0 && res.data.data) {
      //         this.$message.success(LANG['邮件添加成功'] || '邮件添加成功');
      //         this.updateType = true;
      //     } else {
      //         this.$message.error(LANG['邮件添加失败'] || '邮件添加失败');
      //     }
      // })
    },

    //表格按钮点击事件
    doHandle(item) {
      switch (item.fn) {
        case "doDetial":
          this.doDetial(item.row);
          break;

        case "doSend":
          this.doSend(item.row);
          break;
      }
    },

    //查看
    doDetial(row) {
      let detailform = this.detailform;

      for (let k in row) {
        detailform[k] = row[k];
      }

      let _this = this;

      setTimeout(function () {
        _this.dialogTableVisible = true;
        _this.loading = false;
      }, 500);
    },

    //发送邮件
    doSend(row) {
      let nowId = row.id;
      this.updateType = false;
      this.$.autoAjax('post', URL.api + "/system/email.send", {
        id: parseInt(nowId)
      }, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message.success(LANG['邮件发布成功！'] || '邮件发布成功！');
            this.updateType = true;
          } else if (res.msg) {
            this.$message.error(res.msg);
          } else {
            this.$message.error(LANG['邮件发布失败！'] || '邮件发布失败！');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.post(URL.api +  "/system/email.send", {id: parseInt(nowId)}, URLCONFIG).then((res) => {
      //     if (res.data.state == 0 && res.data.data) {
      //         this.$message.success(LANG['邮件发布成功！'] || '邮件发布成功！');
      //         this.updateType = true;
      //     } else if(res.data.msg){
      //         this.$message.error(res.data.msg);
      //     } else {
      //         this.$message.error(LANG['邮件发布失败！'] || '邮件发布失败！');
      //     }
      // });
    },

    //批量删除
    delMeg(list) {
      this.updateType = false;
      let id = list.map(function (i) {
        return i.id;
      });
      let ids = id.join(',');
      let url = URL.api + ROUTES.DELETE.system.mail + '?ids=' + ids;
      this.$.autoAjax('delete', url, '', {
        ok: res => {
          if (res.state === 0) {
            this.$message({
              message: '成功删除所选邮件！',
              type: 'success'
            });
            this.updateType = true;
          } else {
            this.$message({
              message: '删除邮件失败！',
              type: 'error'
            });
            this.updateType = true;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.delete(url,URLCONFIG,null).then((res) => {
      //     if (res.data.state === 0) {
      //         this.$message({
      //             message: '成功删除所选邮件！',
      //             type: 'success'
      //         });
      //         this.updateType = true;
      //     } else {
      //         this.$message({
      //             message: '删除邮件失败！',
      //             type: 'error'
      //         });
      //         this.updateType = true;
      //     }
      // })
      .catch(function (err) {//                console.log(err);
      });
    },

    //表格批量数据
    doOperation(obj) {
      switch (obj.fn) {
        case "delMeg":
          //删除
          this.delMeg(obj.rows);
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-563c13e4","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/systemSettings/emailList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"emailList"}},[_c('el-col',{staticClass:"pb"},[_c('el-button',{staticClass:"btn_right",attrs:{"type":"primary","size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['新增邮件'] || '新增邮件')},on:{"click":_vm.AddNew}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableIndex":false,"tableCheck":true,"tabOperation":_vm.tabOperation,"updated":_vm.updateType,"tableUrl":_vm.tableUrl,"showRefresh":true},on:{"do-handle":_vm.doHandle,"do-operation":_vm.doOperation}})],1),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.editVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}})],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{staticClass:"detail",attrs:{"title":"邮件"},model:{value:(_vm.dialogTableVisible),callback:function ($$v) {_vm.dialogTableVisible=$$v},expression:"dialogTableVisible"}},[_c('el-form',{attrs:{"model":_vm.detailform}},[_c('el-form-item',{attrs:{"label":"超文本"}},[_c('span',[_vm._v(_vm._s(_vm.LANG[_vm.detailform.hyper_text?"是":"否"] || _vm.detailform.hyper_text?"是":"否"))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"邮件标题"}},[_c('span',[_vm._v(_vm._s(_vm.LANG[_vm.detailform.title] || _vm.detailform.title))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发送时间"}},[_c('span',[_vm._v(_vm._s(_vm.LANG[_vm.detailform.created] || _vm.detailform.created))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发送类型"}},[(_vm.detailform.send_type == 1)?_c('span',[_vm._v(_vm._s(_vm.LANG['会员层级'] || '会员层级'))]):_vm._e(),_vm._v(" "),(_vm.detailform.send_type == 2)?_c('span',[_vm._v(_vm._s(_vm.LANG['代理'] || '代理'))]):_vm._e(),_vm._v(" "),(_vm.detailform.send_type == 3)?_c('span',[_vm._v(_vm._s(_vm.LANG['自定义'] || '自定义'))]):_vm._e(),_vm._v(" "),(_vm.detailform.recipient)?_c('p',{staticStyle:{"margin-left":"70px"}},[_vm._v(_vm._s(_vm.detailform.recipient))]):_vm._e()]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发送状态"}},[_c('span',[_vm._v(_vm._s(_vm.LANG[(_vm.detailform.status === '1'?"已发送":"未发送")] || (_vm.detailform.status === '1'?"已发送":"未发送")))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发送内容"}},[_c('p',[_vm._v(_vm._s(_vm.LANG[_vm.detailform.content] || _vm.detailform.content))])])],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogTableVisible = false}}},[_vm._v("关 闭")])],1)],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/systemSettings/emailList.vue
function injectStyle (context) {
  __webpack_require__(539)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-563c13e4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  emailList,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var systemSettings_emailList = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);