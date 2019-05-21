(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/ADManage/proxyCopy.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var proxyCopy = ({
  data() {
    return {
      loading: false,
      LANG,
      //数据接口地址
      tableUrl: "",
      //列配置接口地址
      columnsUrl: "",
      //新增修改
      type: "default",
      formTitel: "",
      labelWidth: "90px",
      isEdit: {
        state: false
      },
      formVisible: {
        state: false
      },
      //当前FORM类型，新增add,修改edit
      formType: "",
      // 详情弹窗参数配置
      formConfig: [{
        "prop": "name",
        "value": "",
        "label": "文案类型",
        "type": "select",
        "list": ARRAYS.proxyCopyList,
        // 司机要求前端写死
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "language_id",
        "value": "",
        "label": "语言",
        "type": "select",
        "list": [],
        "propVal": "language_name",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "sort",
        "value": "",
        "type": "number",
        "label": "排序",
        "rules": [{
          "require": true,
          "integer": true
        }]
      }, {
        "prop": "content",
        "value": "",
        "type": "markdown",
        "label": "文案内容",
        "rules": [{
          "require": true
        }]
      }],
      editflag: false,
      updated: false,
      nowId: -1,
      //查看详情的标题
      titleDetails: '',
      //查看的窗口状态
      dialogTableVisible: false,
      details: {},
      formLabelWidth: '100px'
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      this.tableUrl = URL.api + ROUTES.GET.copywriter.proxy;
      this.baseUrl = URL.api + ROUTES.GET.copywriter.proxy;
      this.columnsUrl = "/static/json/ADManage/proxyCopy/columns.json"; //获取语言列表

      let langeUrl = URL.api + ROUTES.GET.langeages;
      this.$.autoAjax('get', langeUrl, '', {
        ok: res => {
          let model = res.data;

          for (let i in model) {
            this.formConfig[1].list.push({
              "label": model[i].name.toString(),
              "value": model[i].id.toString()
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(langeUrl, URLCONFIG).then((res) => {
      //   let model = res.data.data
      //   for (let i in model) {
      //     this.formConfig[1].list.push({
      //       "label": model[i].name.toString(),
      //       "value": model[i].id.toString()
      //     })
      //   }
      // })

      /* // 获取代理文案类型 司机要求前端写死
      let typeUrl = URL.api + '/copywriter/types';
      this.$http.get(typeUrl, URLCONFIG).then((res) => {
      let model = res.data.data
      for (let i in model) {
      this.formConfig[0].list.push({
      "label": model[i].name,
      "value": model[i].name
      })
      }
      })*/
    },

    //表格操作点击事件处理
    doHandle(e) {
      this.formType = "";

      switch (e.fn) {
        case "doDetails":
          this.doDetails(e.row);
          break;

        case "doApption":
          this.doApption(e.row);
          break;

        case "doEnabled":
          this.doEnabled(e.row);
          break;

        case "doDisabled":
          this.doDisabled(e.row);
          break;

        case "doEdit":
          this.doEdit(e.row);
          break;

        case "doDelete":
          this.doDelete(e.row);
          break;
      }
    },

    //新增
    AddNew() {
      this.formTitel = "新增代理文案";
      this.formType = "add";
      this.formVisible.state = true;
    },

    //保存数据
    getForm(obj) {
      // 代理文案只有pc平台拥有
      obj.formObj.pf = 'pc';
      this.fullscreenLoading = true;
      this.updated = false;
      let str = "";

      if (this.formType != "edit") {
        this.$.autoAjax('put', URL.api + ROUTES.POST.copywriter.proxy, obj.formObj, {
          ok: res => {
            if (res.data && res.state == 0) {
              this.$message.success(LANG["恭喜您，新增代理文案成功！"] || "恭喜您，新增代理文案成功！");
            } else if (res.data == false && res.state > 3) {
              str = res.msg;
              this.$message.error(LANG[str] || str);
            }

            this.formType = "";
            obj.formObj = "";
            this.updated = true;
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // this.$http.put(URL.api + ROUTES.POST.copywriter.proxy, JSON.stringify(obj.formObj), URLCONFIG).then((res) => {
        //   if (res.data.data && res.data.state == 0) {
        //     this.$message.success(LANG["恭喜您，新增代理文案成功！"] || "恭喜您，新增代理文案成功！");
        //   } else if (res.data.data == false && res.data.state > 3) {
        //     str = res.data.msg;
        //     this.$message.error(LANG[str] || str);
        //   }
        //   this.formType = ""
        //   obj.formObj = "";
        //   this.updated = true;
        // })
      } else {
        this.$.autoAjax('put', URL.api + ROUTES.PUT.copywriter.proxy.newProxy + "?id=" + this.nowId, obj.formObj, {
          ok: res => {
            if (res.data && res.state == 0) {
              this.$message.success(LANG["恭喜您，修改代理文案成功！"] || "恭喜您，修改代理文案成功！");
            } else if (res.data == false && res.state > 3) {
              str = res.msg;
              this.$message.error(LANG[str] || str);
            }

            this.formType = "";
            obj.formObj = "";
            this.updated = true;
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // this.$http.put(URL.api + ROUTES.PUT.copywriter.proxy.newProxy+"?id="+(this.nowId), JSON.stringify(obj.formObj), URLCONFIG).then((res) => {
        //   if (res.data.data && res.data.state == 0) {
        //     this.$message.success(LANG["恭喜您，修改代理文案成功！"] || "恭喜您，修改代理文案成功！");
        //   } else if (res.data.data == false && res.data.state > 3) {
        //     str = res.data.msg;
        //     this.$message.error(LANG[str] || str);
        //   }
        //   this.formType = "";
        //   obj.formObj = ""
        //   this.updated = true;
        // })
      }
    },

    //启用
    doEnabled(row) {
      let _this = this;

      let val = row.id;
      this.updated = false;
      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.proxy.$(val), {
        "status": "enabled",
        "language_id": parseInt(row.language_id),
        "pf": row.pf
      }, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message.success(LANG["启用成功"] || "启用成功");
            this.updated = true;
          } else {
            this.$message.error(LANG["启用失败"] || "启用失败");
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.proxy.$(val), JSON.stringify({"status": "enabled", "language_id": parseInt(row.language_id), "pf": row.pf}), URLCONFIG).then((res) => {
      //   if (res.data.state == 0 && res.data.data) {
      //     this.$message.success(LANG["启用成功"] || "启用成功");
      //     this.updated = true;
      //   } else {
      //     this.$message.error(LANG["启用失败"] || "启用失败");
      //   }
      //
      // })
    },

    doDelete(row) {
      let _this = this;

      let val = row.id;
      this.updated = false;
      this.$.autoAjax('delete', URL.api + ROUTES.DELETE.copywriter.proxy.$(val), '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message.success(LANG["删除成功"] || "删除成功");
            this.updated = true;
          } else {
            this.$message.error(LANG["删除失败"] || "删除失败");
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.delete(URL.api + ROUTES.DELETE.copywriter.proxy.$(val), URLCONFIG).then((res) => {
      //   if (res.data.state == 0 && res.data.data) {
      //     this.$message.success(LANG["删除成功"] || "删除成功");
      //     this.updated = true;
      //   } else {
      //     this.$message.error(LANG["删除失败"] || "删除失败");
      //   }
      //
      // })
    },

    //停用
    doDisabled(row) {
      let _this = this;

      let val = row.id;
      this.updated = false;
      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.proxy.$(val), {
        "status": "disabled",
        "language_id": parseInt(row.language_id),
        "pf": row.pf
      }, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message.success(LANG["停用成功"] || "停用成功");
            this.updated = true;
          } else {
            this.$message.error(LANG["停用失败"] || "停用失败");
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.proxy.$(val), JSON.stringify({"status": "disabled", "language_id": parseInt(row.language_id), "pf": row.pf}), URLCONFIG).then((res) => {
      //   if (res.data.state == 0 && res.data.data) {
      //     this.$message.success(LANG["停用成功"] || "停用成功");
      //     this.updated = true;
      //   } else {
      //     this.$message.error(LANG["停用失败"] || "停用失败");
      //   }
      //
      // })
    },

    //申请
    doApption(obj) {
      let val = obj.id;
      this.updated = false;
      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.proxy.$(val), {
        "approve_status": "applying",
        "language_id": obj.language_id,
        "pf": obj.pf
      }, {
        ok: res => {
          if (res.data && res.state == 0) {
            //刷新数据
            this.$message.success(LANG["申请成功"] || "申请成功");
          } else {
            this.$message.error(LANG["申请失败"] || "申请失败");
          }

          this.updated = true;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.proxy.$(val), JSON.stringify({"approve_status": "applying", "language_id": obj.language_id, "pf": obj.pf}), URLCONFIG).then((res) => {
      //   if (res.data && res.data.state == 0) {
      //     //刷新数据
      //     this.$message.success(LANG["申请成功"] || "申请成功");
      //   } else {
      //     this.$message.error(LANG["申请失败"] || "申请失败");
      //   }
      //   this.updated = true;
      // })
    },

    //编辑
    doDetails(row) {
      row.type_id = row.type;
      this.nowId = row.id;
      this.titleDetails = '《' + row.name + '》' + '的详情';
      this.dialogTableVisible = true;

      for (let k in row) {
        //                    if(k === 'content'){
        //                        this.details[k] = this.markdownTransform(row[k]);
        //                    }else{
        this.details[k] = row[k]; //                    }
      }
    },

    doEdit(row) {
      this.nowId = row.id;
      this.loading = true;
      this.formVisible.state = true;
      this.isEdit.state = true;
      this.formTitel = "修改代理文案";
      FORMVAL(row, this.formConfig);
      this.formType = "edit";
      this.loading = false;
    }

  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-63a2c32c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/ADManage/proxyCopy.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"id":"proxyCopy"}},[_c('el-col',{staticClass:"pb",attrs:{"STYLE":"text-align: right;"}},[_c('el-button',{staticClass:"btn_right",attrs:{"size":"small","type":"primary"},domProps:{"textContent":_vm._s(_vm.LANG['新增代理文案'] || '新增代理文案')},on:{"click":_vm.AddNew}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"tableIndex":false,"showRefresh":true,"updated":_vm.updated},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}}),_vm._v(" "),_c('el-col',[_c('el-dialog',{staticClass:"detail",attrs:{"title":_vm.titleDetails,"size":"tiny"},model:{value:(_vm.dialogTableVisible),callback:function ($$v) {_vm.dialogTableVisible=$$v},expression:"dialogTableVisible"}},[_c('el-form',{attrs:{"model":_vm.details}},[_c('el-form-item',{attrs:{"label":_vm.LANG['文案名称:'] || '文案名称:',"label-width":_vm.formLabelWidth}},[_c('span',[_vm._v(_vm._s(_vm.details.name))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['语言:'] || '语言:',"label-width":_vm.formLabelWidth}},[_c('p',{staticStyle:{"width":"90%"}},[_vm._v(_vm._s(_vm.details['language_name']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['当前排序'] || '当前排序',"label-width":_vm.formLabelWidth}},[_c('p',{staticStyle:{"width":"90%"}},[_vm._v(_vm._s(_vm.details['sort']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['文案内容:'] || '文案内容:',"label-width":_vm.formLabelWidth}},[_c('div',{staticClass:"mark_waip",domProps:{"innerHTML":_vm._s(_vm.details['content'])}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['生成时间:'] || '生成时间:',"label-width":_vm.formLabelWidth}},[_c('span',[_vm._v(_vm._s(_vm.details['created']))])])],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogTableVisible = false}}},[_vm._v("关 闭")])],1)],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/ADManage/proxyCopy.vue
function injectStyle (context) {
  __webpack_require__(418)
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
  proxyCopy,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var ADManage_proxyCopy = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);