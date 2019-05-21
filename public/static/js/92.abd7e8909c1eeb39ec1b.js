(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/contentManagement.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 //    Vue.directive('insertTip',{
//        update:function (el,binding,vnode) {
//            console.log(el.querySelector('.upload-tip'));
//        }
//    })

/* harmony default export */ var contentManagement = ({
  data() {
    return {
      LANG,
      //数据接口地址
      tableUrl: "",
      //列配置接口地址
      columnsUrl: "",
      baseUrl: "",
      searchConfigtitle: [{
        "prop": "type_id",
        "value": "",
        "label": "优惠类型",
        "type": "select",
        "list": []
      }, {
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "优惠活动名称"
      }],
      searchtype: "search",
      searchlabelWidth: "100px",
      searchformVisible: {
        state: false
      },
      searchisEdit: {
        state: false
      },
      //新增修改
      type: "default",
      formTitel: "",
      labelWidth: "110px",
      isEdit: {
        state: false
      },
      formVisible: {
        state: false
      },
      //当前FORM类型，新增add,修改edit
      formType: "",
      formConfig: [{
        "prop": "types_id",
        "value": [],
        "label": "优惠类型",
        "sReset": false,
        "checkAll": false,
        "allBtnShow": true,
        "type": "checkGroup",
        "list": [],
        "Arr": [],
        "rules": [{
          "require": true
        }]
      }, //                    {"prop":"type_id","value":"","label":"优惠类型","type":"select","list":[],"rules":[{"require":true}]},
      {
        "prop": "name",
        "value": "",
        "label": "优惠活动名称",
        "type": "text",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "title",
        "value": "",
        "label": "优惠活动标题",
        "type": "text",
        "rules": [{
          "require": true
        }]
      }, {
        "type": "dateGroup",
        "label": "有效时间",
        required: true,
        "prop": [{
          "prop": "begin_time",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "end_time",
          "value": "",
          "label": "结束时间"
        }],
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
        "prop": "description",
        "value": "",
        "type": "textarea",
        "label": "优惠活动描述",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "cover",
        "value": [],
        "action": URL.img,
        "folder": "active",
        //上传图片列表  list-type:[text/picture/picture-card]
        "list": [],
        "type": "upload",
        "label": "优惠活动页",
        "listType": "picture",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "sort",
        "value": "",
        "label": "排序",
        "type": "text",
        "rules": [{
          "require": true
        }, {
          "integer": true
        }]
      }, {
        "prop": "open_mode",
        "value": "",
        "type": "radioGroup",
        "label": "打开方式",
        "radioInput": true,
        "list": [{
          "value": "2",
          "label": "新窗口"
        }, {
          "value": "3",
          "label": "本页面跳转"
        }, {
          "value": "4",
          "label": "下拉展开"
        }],
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "state",
        "value": "apply",
        "label": "前台申请",
        "type": "select",
        "ifVal": "4",
        "ifKey": "open_mode",
        "isDefault": true,
        "list": [{
          "label": "启用",
          "value": "apply"
        }, {
          "label": "停用",
          "value": ""
        }]
      }, {
        "prop": "link",
        "value": "",
        "label": "链接",
        "type": "url",
        "ifVal": "2",
        "ifKey": "open_mode",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "content",
        "value": "",
        "type": "markdown",
        "ifVal": "4",
        "ifKey": "open_mode",
        "label": "PC优惠规则编辑",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "content2",
        "value": "",
        "type": "markdown",
        "ifVal": "4",
        "ifKey": "open_mode",
        "label": "h5优惠规则编辑",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "apply_times",
        "value": "",
        "label": "会员申请次数",
        "type": "text",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "status",
        "value": "enabled",
        "label": "状态",
        "type": "select",
        "isDefault": true,
        "list": [{
          "label": "启用",
          "value": "enabled"
        }, {
          "label": "停用",
          "value": "disabled"
        }],
        "rules": [{
          "require": true
        }]
      }],
      size: "small",
      editflag: false,
      nowId: -1,
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: ""
      },
      loading: false,
      updated: false,
      getData: true,
      //模板类型
      modeType: 1,
      modeName: ''
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      this.tableUrl = URL.api + ROUTES.GET.actives.manage;
      this.baseUrl = URL.api + ROUTES.GET.actives.manage;
      this.columnsUrl = "static/json/preAct/contentManagement/columns.json";

      let _this = this;

      let list = this.searchConfigtitle[0].list;
      let list1 = this.formConfig[0].list;
      let list2 = this.formConfig[4].list;
      let Arr = this.formConfig[0].Arr;
      this.$.autoAjax('get', URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];

            for (let k in model) {
              list.push({
                "label": model[k].name,
                "value": model[k].id.toString()
              });
              Arr.push({
                "label": model[k].name,
                "value": model[k].id.toString()
              });
              list1.push(model[k].id.toString());
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
      this.$.autoAjax('get', URL.api + ROUTES.GET.langeages, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];

            for (let k in model) {
              list2.push({
                "label": model[k].name,
                "value": model[k].id.toString()
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //表格操作点击事件处理
    doHandle(e) {
      this.updated = false;
      this.nowId = e.row.id;
      this.formType = "";

      switch (e.fn) {
        case "doEnabled":
          this.doEnabled(e.row);
          break;

        case "doEdit":
          this.doEdit(e.row);
          break;

        case "doDisabled":
          this.doDisabled(e.row);
          break;

        case "doDel":
          this.doDel(e.row);
          break;
      }
    },

    //新增
    AddNew() {
      this.formTitel = this.LANG["新增活动"] || '新增活动';
      this.formType = "add";
      this.formConfig[this.formConfig.length - 1]['disabled'] = false;
      this.formVisible.state = true;
    },

    //重置方法
    resetForm(item) {
      if (item.state == "init") {
        this.tableUrl = this.baseUrl;
      }
    },

    //保存数据
    getForm(obj) {
      // let param = JSON.stringify(obj)
      let query = {};

      for (let k in obj.formObj) {
        if (k === 'types_id') {
          let temp = [];
          obj.formObj[k].forEach(item => {
            this.formConfig[0].Arr.forEach(obj => {
              if (item == obj.value) {
                temp.push({
                  id: FORMATINT(obj.value),
                  name: obj.label
                });
              }
            });
          });
          query['types'] = temp;
        } else {
          query[k] = obj.formObj[k];
        }
      }

      if (query['open_mode'] == '4') {
        delete query['link'];
      }

      let cover = '';
      obj.formObj.cover.forEach(item => {
        cover += item;
      });
      query.cover = cover;
      query.created_uid = sessionStorage.userId;

      let _this = this;

      this.loading = true;
      this.updated = false;
      this.fullscreenLoading = true;

      if (_this.formType == "add") {
        this.$.autoAjax('put', URL.api + ROUTES.POST.active.manual, query, {
          ok: res => {
            if (res.state == 0 && res.data) {
              this.$message.success(LANG["恭喜您，新增优惠活动成功！"] || "恭喜您，新增优惠活动成功！");
              this.formType = "";
              this.updated = true;
            } else if (res.state == 2002 && res.msg) {
              this.$message.error(LANG[res.msg] || res.msg);
            } else {
              this.$message.error(LANG["新增优惠活动失败，请稍后重试！"] || "新增优惠活动失败，请稍后重试！");
            }

            _this.loading = false;
          },
          p: () => {},
          error: e => {
            this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
            _this.loading = false;
          }
        });
      } else {
        obj.formObj.id = _this.nowId; //清掉空值

        for (let k in query) {
          if (query[k] === '') {
            delete query[k]; // 前台申请要保留

            if (k === 'state') {
              query['state'] = '';
            }
          }
        }

        this.$.autoAjax('put', URL.api + ROUTES.PUT.active.manual.$(parseInt(obj.formObj.id)), query, {
          ok: res => {
            if (res.state == 0 && res.data) {
              this.$message.success(LANG["恭喜您，修改优惠活动成功！"] || "恭喜您，修改优惠活动成功！");
              this.formType = "";
              this.updated = true;
            } else {
              this.$message.error(LANG["修改优惠活动失败，请稍后重试！"] || "修改优惠活动失败，请稍后重试！");
            }

            _this.loading = false;
          },
          p: () => {},
          error: e => {
            this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
            _this.loading = false;
          }
        });
      }
    },

    //启用
    doEnabled(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "enabled";
      }
    },

    //停用
    doDisabled(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "disabled";
      }
    },

    //编辑
    doEdit(row) {
      if (parseInt(row.id) < 0) {
        return;
      }

      this.loading = true;
      this.formConfig[this.formConfig.length - 1]['disabled'] = true;

      let _this = this;

      this.formTitel = "修改活动列表";
      this.$.autoAjax('get', URL.api + ROUTES.GET.active.manual.$(parseInt(row.id)), '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            FORMVAL(res.data, _this.formConfig);

            if (res.data.disabled === "1") {
              _this.formConfig[_this.formConfig.length - 1].value = "disabled";
            }

            if (res.data.enabled === "1") {
              _this.formConfig[_this.formConfig.length - 1].value = "enabled";
            }

            _this.formConfig[11].value = res.data.content || "";
            _this.formConfig[12].value = res.data.content2 || "";
            _this.formConfig[8].value = res.data.open_mode || ""; // 优惠类型多选

            _this.formConfig[0].value.splice(0, _this.formConfig[0].value.length);

            if (res.data.types) {
              res.data.types.forEach(item => {
                _this.formConfig[0].value.push(item.id.toString());
              });
            }

            _this.formType = "edit";
            _this.isEdit.state = true;
            _this.formVisible.state = true;
            _this.loading = false;
          }
        },
        p: () => {},
        error: e => {
          this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
          _this.loading = false;
        }
      });
    },

    //删除
    doDel(row) {
      this.modeName = row.name;

      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "delete";
      }
    },

    //执行查询
    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    //确认操作
    doConfirm(obj) {
      this.loading = true;

      let _this = this;

      switch (obj.fn) {
        case "delete":
          this.$.autoAjax('delete', URL.api + ROUTES.DELETE.active.manual.$(parseInt(this.nowId)) + '?type=' + _this.modeType + '&name=' + _this.modeName, '', {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.updated = true;
                this.$message.success(LANG["删除成功"] || "删除成功");
              } else {
                this.$message.error(LANG["删除失败，请稍后重试！"] || "删除失败，请稍后重试！");
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
              _this.loading = false;
            }
          });
          break;

        case "disabled":
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.active.manual.$(parseInt(this.nowId)), {
            "status": "disabled"
          }, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.updated = true;
                this.$message.success(LANG["停用成功"] || "停用成功");
              } else {
                this.$message.error(LANG[`${res.msg}`] || `${res.msg}`);
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          break;

        case "enabled":
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.active.manual.$(parseInt(this.nowId)), {
            "status": "enabled"
          }, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.updated = true;
                this.$message.success(LANG["启用成功"] || "启用成功");
              } else {
                this.$message.error(LANG[`${res.msg}`] || `${res.msg}`);
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
              _this.loading = false;
            }
          });
          break;
      }
    },

    changeRadio(obj) {
      const value = obj.item;

      if (value == 2 || value == 3) {
        this.formConfig[10]['ifVal'] = value;
      }
    }

  },

  mounted() {
    this.init();
  },

  directives: {
    insertTip: {
      update: function (el, binding, vnode) {
        setTimeout(() => {
          let tip = el.querySelector('.upload-tip');

          if (tip) {
            let html = tip.innerHTML;

            if (!!html.match(/460/)) {
              return;
            } else {
              tip.innerHTML = html.replace(/2M/, '2M，分辨率大小为460*180像素');
            }
          }
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-978c588a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/contentManagement.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"proxyCopy"}},[_c('el-col',{staticClass:"pb"},[_c('div',{staticClass:"search"},[_c('formEdit',{attrs:{"formVisible":_vm.searchformVisible,"formConfig":_vm.searchConfigtitle,"type":_vm.searchtype,"labelWidth":_vm.searchlabelWidth,"isEdit":_vm.searchisEdit,"addText":_vm.LANG['新增活动'] || '新增活动'},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm,"add-new":_vm.AddNew}})],1)]),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"tableIndex":false,"showRefresh":false,"updated":_vm.updated},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',{directives:[{name:"insertTip",rawName:"v-insertTip"}]},[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType,"size":_vm.size},on:{"get-form":_vm.getForm,"change-radio":_vm.changeRadio}})],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/preAct/contentManagement.vue
function injectStyle (context) {
  __webpack_require__(446)
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
  contentManagement,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var preAct_contentManagement = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);