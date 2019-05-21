(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/ADManage/ADHome.vue
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



/* harmony default export */ var ADHome = ({
  data() {
    return {
      LANG,
      //数据接口地址
      tableUrl: "",
      baseUrl: "",
      //列配置接口地址
      columnsUrl: "",
      nowId: -1,
      //编辑框状态
      editVisible: {
        state: false
      },
      //当前表单类型
      formType: "",
      page: 1,
      //                //弹窗相关
      formConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "文案名称",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "language_id",
        "value": "",
        "label": "语言",
        "type": "select",
        "propVal": "language_name",
        "list": [],
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
        "config": {
          maximumWords: 5000
        },
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "pf",
        "value": ""
      }],
      type: "default",
      formTitel: "",
      labelWidth: "90px",
      // 是否编辑数据
      isEdit: {
        state: false
      },
      updated: false,
      loading: false,
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: null
      },
      //详情
      dialogTableVisible: false,
      detailform: {},
      formLabelWidth: '100px'
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      let _this = this;

      this.tableUrl = URL.api + ROUTES.GET.copywriter.desc;
      this.baseUrl = URL.api + ROUTES.GET.copywriter.desc;
      this.columnsUrl = "static/json/ADManage/ADHome/columns.json";
      let list = this.formConfig[1].list;
      this.$.autoAjax('get', URL.api + ROUTES.GET.langeages, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data;

            for (let i in model) {
              list.push({
                "label": model[i].name,
                "value": model[i].id.toString()
              });
            }
          }
        },
        p: () => {},
        error: e => {
          _this.loading = false;

          _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
        }
      });
    },

    //表格操作点击事件处理
    doHandle(e) {
      this.nowId = parseInt(e.row.id) || -1;
      this.formType = "";

      switch (e.fn) {
        case "doApply":
          this.doApply(e.row);
          break;

        case "doEdit":
          this.doEdit(e.row);
          break;

        case "doDetail":
          this.doDetail(e.row);
          break;

        case "doEnable":
          this.doEnable(e.row);
          break;

        case "doDisable":
          this.doDisable(e.row);
          break;

        case "doDelete":
          this.doDelete(e.row);
          break;
      }
    },

    doAdd() {
      this.formTitel = "新增说明方案";
      this.editVisible.state = true;
      this.formType = "add";
    },

    //保存数据
    getForm(obj) {
      this.updated = false;

      let _this = this;

      this.fullscreenLoading = true;
      let str = "";
      obj.formObj["type"] = "help";
      obj.formObj["pf"] = "pc";

      if (this.formType == "add") {
        obj.formObj['type'] = "help";
        this.$.autoAjax('put', URL.api + ROUTES.PUT.copywriter.description, obj.formObj, {
          ok: res => {
            if (res.state != undefined && res.state == 0) {
              str = LANG['恭喜您，新增说明方案成功！'] || '恭喜您，新增说明方案成功！';
              _this.updated = true;

              _this.$message.success(str);
            } else if (res.data == false && res.state > 3) {
              this.fullscreenLoading = false;
              str = res.msg;

              _this.$message.error(LANG[str] || str);
            }

            this.fullscreenLoading = false;
            _this.formType = "";
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }) // this.$http.put(URL.api+ ROUTES.PUT.copywriter.description, JSON.stringify(obj.formObj),URLCONFIG).then((res)=>{
        //     if (res.data.state !=undefined && res.data.state == 0) {
        //
        //             str=LANG['恭喜您，新增说明方案成功！'] || '恭喜您，新增说明方案成功！';
        //             _this.updated = true;
        //             _this.$message.success(str);
        //
        //     }else if (res.data.data == false  && res.data.state > 3){
        //
        //             this.fullscreenLoading = false;
        //             str = res.data.msg;
        //
        //         _this.$message.error(LANG[str] || str);
        //
        //     }
        //     this.fullscreenLoading = false;
        //     _this.formType = "";
        // })
        .catch(e => {
          _this.loading = false; //                        _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
        });
      } else {
        this.$.autoAjax('put', URL.api + ROUTES.PATCH.copywriter.description + '?id=' + this.nowId, obj.formObj, {
          ok: res => {
            if (res.state != undefined && res.state == 0) {
              str = LANG['恭喜您，说明方案修改成功！'] || '恭喜您，说明方案修改成功！';
              _this.updated = true;

              _this.$message.success(str);
            } else if (res.data == false && res.state > 3) {
              str = res.msg;

              _this.$message.error(LANG[str] || str);
            }

            this.fullscreenLoading = false;
            _this.formType = "";
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }) // this.$http.put(URL.api+ ROUTES.PATCH.copywriter.description +'?id='+ this.nowId, JSON.stringify(obj.formObj), URLCONFIG).then((res) => {
        //
        //     if (res.data.state !=undefined  && res.data.state == 0){
        //         str=LANG['恭喜您，说明方案修改成功！'] || '恭喜您，说明方案修改成功！';
        //         _this.updated = true;
        //         _this.$message.success(str);
        //     }else if (res.data.data == false  && res.data.state > 3) {
        //           str = res.data.msg;
        //           _this.$message.error(LANG[str] || str);
        //     }
        //     this.fullscreenLoading = false;
        //     _this.formType = "";
        // })
        .catch(e => {
          _this.loading = false; //                        _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
        });
      }
    },

    // 编辑
    doEdit(row) {
      let _this = this;

      this.loading = true;
      _this.isEdit.state = false;
      let fromDataUrl = URL.api + ROUTES.GET.copywriter.desc + "?id=" + parseInt(this.nowId);
      this.$.autoAjax('get', fromDataUrl, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.isEdit.state = true;
            _this.formTitel = "修改说明文案";
            FORMVAL(res.data, _this.formConfig);
            _this.formType = "edit";
            _this.editVisible.state = true;
          } else {
            _this.$message.error(LANG['修改说明文案'] || '修改说明文案');
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.get(fromDataUrl, URLCONFIG).then((res) => {
      //     if (res.data.state == 0 && res.data.data) {
      //         _this.isEdit.state = true;
      //         _this.formTitel = "修改说明文案";
      //         FORMVAL(res.data.data, _this.formConfig);
      //         _this.formType = "edit";
      //         _this.editVisible.state = true;
      //     } else {
      //         _this.$message.error(LANG['修改说明文案'] || '修改说明文案');
      //     }
      //     _this.loading = false;
      // })
      .catch(e => {
        _this.loading = false; //                    _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
      });
    },

    //查看详情
    doDetail(row) {
      let _this = this;

      this.loading = true;
      let detailform = this.detailform;
      let fromDataUrl = URL.api + ROUTES.GET.copywriter.desc + "?id=" + parseInt(this.nowId);
      this.$.autoAjax('get', fromDataUrl, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data;

            for (let k in model) {
              //                            if(k === 'content'){
              //                                detailform[k] = this.markdownTransform(model[k]);
              //                            }else{
              detailform[k] = model[k]; //                            }
            }

            _this.dialogTableVisible = true;
          } else {
            _this.$message.error(LANG['修改说明文案'] || '修改说明文案');
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) //                 this.$http.get(fromDataUrl, URLCONFIG).then((res) => {
      //                     if (res.data.state == 0 && res.data.data) {
      //                         let model = res.data.data;
      //                         for(let k in model){
      // //                            if(k === 'content'){
      // //                                detailform[k] = this.markdownTransform(model[k]);
      // //                            }else{
      //                                 detailform[k] = model[k];
      // //                            }
      //                         }
      //                         _this.dialogTableVisible = true;
      //                     } else {
      //                         _this.$message.error(LANG['修改说明文案'] || '修改说明文案');
      //                     }
      //                     _this.loading = false;
      //                 })
      .catch(e => {
        _this.loading = false; //                    _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
      });
    },

    //申请
    doApply(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定申请'] || '确定申请') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "apply";
        this.confirmConfig.obj = row;
      }
    },

    //启用
    doEnable(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "enabled";
        this.confirmConfig.obj = row;
      }
    },

    doDisable(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "disabled";
        this.confirmConfig.obj = row;
      }
    },

    doDelete(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "delete";
        this.confirmConfig.obj = row;
      }
    },

    doConfirm(obj) {
      this.loading = true;
      this.updated = false;

      let _this = this;

      switch (obj.fn) {
        case "apply":
          let applydata = {
            "approve_status": "applying",
            "language_id": parseInt(obj.obj.language_id),
            "pf": obj.obj.pf
          };
          this.loading = true;
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.description + "?id=" + parseInt(this.nowId), applydata, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，说明方案申请成功'] || '恭喜您，说明方案申请成功');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['说明方案申请失败，请稍候重试！'] || '说明方案申请失败，请稍候重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }) // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.description+"?id="+parseInt(this.nowId),JSON.stringify(applydata),URLCONFIG).then((res) => {
          //     if (res.data.state == 0 && res.data.data) {
          //         _this.$message.success(LANG['恭喜您，说明方案申请成功'] || '恭喜您，说明方案申请成功');
          //         _this.updated = true;
          //
          //     } else {
          //         _this.$message.error(LANG['说明方案申请失败，请稍候重试！'] || '说明方案申请失败，请稍候重试！');
          //
          //     }
          //     _this.loading = false;
          // })
          .catch(e => {
            _this.loading = false; //                            _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
          });
          break;

        case "enabled":
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.description + "?id=" + parseInt(this.nowId), {
            "status": "enabled",
            "language_id": parseInt(obj.obj.language_id),
            "pf": obj.obj.pf
          }, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，说明方案启用成功！'] || '恭喜您，说明方案启用成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['说明方案启用失败，请稍候重试！'] || '说明方案启用失败，请稍候重试！');
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          _this.loading = false;
          break;

        case "disabled":
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.description + "?id=" + parseInt(this.nowId), {
            "status": "disabled",
            "language_id": parseInt(obj.obj.language_id),
            "pf": obj.obj.pf
          }, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，说明方案停用成功！'] || '恭喜您，说明方案停用成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['说明方案停用失败，请稍候重试！'] || '说明方案停用失败，请稍候重试！');
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          _this.loading = false;
          break;

        case "delete":
          this.$.autoAjax('delete', URL.api + ROUTES.DELETE.copywriter.desc + "?id=" + parseInt(this.nowId), '', {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，说明方案删除成功！'] || '恭喜您，说明方案删除成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['说明方案删除失败，请稍候重试！'] || '说明方案删除失败，请稍候重试！');
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          _this.loading = false;
          break;
      }
    }

  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-558980c0","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/ADManage/ADHome.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading.body",value:(_vm.loading),expression:"loading",modifiers:{"body":true}}],staticClass:"clearfix",attrs:{"id":"results"}},[_c('el-col',{staticClass:"pb",staticStyle:{"text-align":"right"},attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary","size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['新增文案管理'] || '新增文案管理')},on:{"click":_vm.doAdd}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.editVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableIndex":false,"tableCheck":false,"showRefresh":true,"updated":_vm.updated},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{staticClass:"detail",attrs:{"title":_vm.LANG['说明文字详情'] || '说明文字详情',"size":"tiny"},model:{value:(_vm.dialogTableVisible),callback:function ($$v) {_vm.dialogTableVisible=$$v},expression:"dialogTableVisible"}},[_c('el-form',{attrs:{"model":_vm.detailform}},[_c('el-form-item',{attrs:{"label":_vm.LANG['文案名称'] || '文案名称',"label-width":_vm.formLabelWidth}},[_c('span',[_vm._v(_vm._s(_vm.detailform.name))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['语言'] || '语言',"label-width":_vm.formLabelWidth}},[_c('p',{staticStyle:{"width":"90%"}},[_vm._v(_vm._s(_vm.detailform['language_name']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['当前排序'] || '当前排序',"label-width":_vm.formLabelWidth}},[_c('p',{staticStyle:{"width":"90%"}},[_vm._v(_vm._s(_vm.detailform['sort']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['文案内容'] || '文案内容',"label-width":_vm.formLabelWidth}},[_c('div',{staticClass:"mark_waip pre-spe",domProps:{"innerHTML":_vm._s(_vm.detailform['content'])}})]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['生成时间'] || '生成时间',"label-width":_vm.formLabelWidth}},[_c('span',[_vm._v(_vm._s(_vm.detailform['created']))])])],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogTableVisible = false}}},[_vm._v("关 闭")])],1)],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/ADManage/ADHome.vue
function injectStyle (context) {
  __webpack_require__(417)
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
  ADHome,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var ADManage_ADHome = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);