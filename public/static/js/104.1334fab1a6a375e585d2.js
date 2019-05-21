(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/webSet/msgManagement.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var msgManagement = ({
  data() {
    return {
      LANG,
      //表格相关
      columnsUrl: "",
      tableUrl: "",
      baseUrl: "",
      //textarea的输入验证
      formVisible: {
        state: false
      },
      //搜索相关
      searchConfig: [{
        "prop": "type",
        "value": "",
        "label": "类型",
        "type": "select",
        "list": [{
          "value": "",
          "label": "全部"
        }, {
          "value": "2",
          "label": "一般消息"
        }, {
          "value": "1",
          "label": "重要消息"
        }]
      }, {
        "prop": "title",
        "value": "",
        "type": "text",
        "label": "标题"
      }, {
        "type": "dateGroup",
        "label": "日期",
        "prop": [{
          "prop": "start_time",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "end_time",
          "value": "",
          "label": "结束时间"
        }]
      }, {
        "prop": "admin_name",
        "value": "",
        "type": "text",
        "label": "发布人"
      }],
      formConfig: [{
        "prop": "send_type",
        "value": "1",
        "label": "发送类型",
        "type": "select",
        "list": [{
          "value": "1",
          "label": "会员等级"
        }, {
          "value": "2",
          "label": "代理"
        }, {
          "value": "3",
          "label": "自定义"
        }]
      }, {
        "prop": "send_type_valueOne",
        "value": [],
        "label": "使用等级",
        "sReset": false,
        "checkAll": false,
        "allBtnShow": true,
        "type": "checkGroup",
        "list": [],
        "Arr": [],
        "ifKey": "send_type",
        "ifVal": "1"
      }, {
        "prop": "send_type_valueTwo",
        "value": "",
        "type": "textarea",
        "label": "自定义接收人",
        "placeholder": "注:自定义接收人只能发送到会员账号.",
        "ifKey": "send_type",
        "ifVal": "3"
      }, {
        "prop": "message_type",
        "value": "1",
        "label": "消息类型",
        "type": "select",
        "list": [{
          "value": "2",
          "label": "一般消息"
        }, {
          "value": "1",
          "label": "重要消息"
        }],
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "title",
        "value": "",
        "type": "text",
        "label": "标题",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "desc",
        "value": "",
        "type": "textarea",
        "label": "内容",
        "rules": [{
          "require": true
        }, {
          "max": 230,
          "min": 1
        }]
      }],
      formType: "",
      formTitel: "",
      isEdit: {},
      labelWidth: "110px",
      nowId: -1,
      // 详情相关
      dialogVisible: false,
      detailform: {},
      loading: false,
      updated: false,
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: null
      }
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formedit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      this.tableUrl = URL.api + ROUTES.GET.messsage.show + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
      this.baseUrl = URL.api + ROUTES.GET.messsage.show;
      this.columnsUrl = "static/json/webSet/msgMangemnet/columns.json"; //获取会员层级

      let _this = this;

      this.$.autoAjax('get', URL.api + ROUTES.GET.user.level.list, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];

            for (let k in model) {
              _this.formConfig[1].list.push(model[k].level);

              _this.formConfig[1].Arr.push({
                "label": "VIP" + model[k].level,
                "value": model[k].level.toString()
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api+ROUTES.GET.user.level.list, URLCONFIG).then((res) => {
      //   if (res.data.state == 0 && res.data.data) {
      //     let model = res.data.data || [];
      //     for (let k in model) {
      //       _this.formConfig[1].list.push(model[k].name);
      //       _this.formConfig[1].Arr.push({
      //         "label": model[k].name,
      //         "value": model[k].id.toString()
      //       });
      //     }
      //   }
      // })
    },

    //查询
    doQuery(obj) {
      if (!obj.item['title']) {
        return;
      }

      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    //获取到textarea参数
    getTextarea(item) {},

    //新增消息
    doAdd() {
      this.formType = "add";
      this.formTitel = "新增消息";
      this.formVisible.state = true;
    },

    //保存弹窗数据
    saveForm(obj) {
      //          admin_uid
      this.updated = false;
      let val = obj.formObj.send_type;

      switch (val) {
        case "1":
          obj.formObj.send_type_value = obj.formObj.send_type_valueOne.toString() || "";
          break;

        case "2":
          obj.formObj.send_type_value = '1';
          break;

        case "3":
          obj.formObj.send_type_value = obj.formObj.send_type_valueTwo || "";
          break;
      }

      let model = obj.formObj;
      let query = {};

      for (let k in model) {
        query[k] = model[k];
      }

      delete query.send_type_valueOne;
      delete query.send_type_valueTwo;
      query.admin_uid = sessionStorage.userId;

      let _this = this;

      this.$.autoAjax('post', URL.api + ROUTES.POST.message.new, query, {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.$message.success(LANG['消息添加成功！'] || '消息添加成功！');

            _this.updated = true;
          } else {
            _this.$message.error(LANG['消息添加失败！请稍候重试'] || '消息添加失败！请稍候重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.post(URL.api + ROUTES.POST.message.new, JSON.stringify(query), URLCONFIG).then((res)=>{
      //     if(res.data.state == 0 && res.data.data){
      //       _this.$message.success(LANG['消息添加成功！'] || '消息添加成功！');
      //       _this.updated = true;
      //     } else {
      //       _this.$message.error(LANG['消息添加失败！请稍候重试'] || '消息添加失败！请稍候重试');
      //     }
      // });
    },

    //表格事件处理
    doHandle(obj) {
      this.updated = false;
      this.nowId = parseInt(obj.row.id);

      switch (obj.fn) {
        case "doDetail":
          this.doDetail(obj.row);
          break;

        case "doDesable":
          this.doDesable(obj.row);
          break;

        case "doDel":
          this.doDel(obj.row);
          break;
      }
    },

    //详情
    doDetail(row) {
      if (this.nowId === -1) {
        return;
      }

      this.loading = true;
      let detailform = this.detailform;

      let _this = this;

      this.$.autoAjax('get', URL.api + ROUTES.GET.messsage.show + "/" + this.nowId, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];

            for (let k in model) {
              detailform[k] = model[k];
            }
          }

          _this.dialogVisible = true;
          _this.loading = false;
        },
        p: () => {},
        error: e => {
          _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');

          _this.loading = false;
        }
      }); // this.$http.get(URL.api + ROUTES.GET.messsage.show + "/" + this.nowId, URLCONFIG).then((res)=>{
      //     if(res.data.state == 0 && res.data.data){
      //         let model = res.data.data || [];
      //         for(let k in model){
      //             detailform[k] = model[k];
      //         }
      //     }
      //     _this.dialogVisible = true;
      //     _this.loading = false;
      // }).catch((e)=>{
      //     _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
      //     _this.loading = false;
      // });
    },

    //发布
    doDesable(row) {
      //            let megId = {id : parseInt(row.id)}
      this.loading = true;

      let _this = this;

      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.message.to + "?id=" + this.nowId, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.$message.success(LANG['恭喜您，发布成功！'] || '恭喜您，发布成功！');
          }

          _this.updated = true;
          _this.loading = false;
        },
        p: () => {},
        error: e => {
          _this.$message.error(LANG['发布失败，请稍后重试'] || '发布失败，请稍后重试');
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.message.to + "?id="+(this.nowId),'',URLCONFIG).then((res)=>{
      //     if(res.data.state == 0 && res.data.data){
      //         _this.$message.success(LANG['恭喜您，发布成功！'] || '恭喜您，发布成功！');
      //     }
      //     _this.updated = true;
      //     _this.loading = false;
      // }).catch((e)=>{
      //     _this.$message.error(LANG['发布失败，请稍后重试'] || '发布失败，请稍后重试');
      // });
    },

    //删除
    doDel(row) {
      if (this.nowId === -1) {
        return;
      }

      this.confirmConfig.state = true;
      this.confirmConfig.msg = (LANG['确定删除'] || '确定删除') + '"' + row.title + '"' + (LANG['吗？'] || '吗？');
      this.confirmConfig.fn = "delete";
    },

    //重置查询条件
    resetForm() {
      this.tableUrl = this.baseUrl + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
    },

    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    doConfirm(obj) {
      this.loading = true;

      let _this = this;

      switch (obj.fn) {
        case "delete":
          this.$.autoAjax('delete', URL.api + "/messages?ids=" + this.nowId, '', {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，删除成功！'] || '恭喜您，删除成功！');
              }

              _this.loading = false;
              _this.updated = true;
            },
            p: () => {},
            error: e => {
              _this.$message.error(LANG['删除失败，请稍后重试'] || '删除失败，请稍后重试');

              _this.loading = false;
            }
          }); // this.$http.delete(URL.api + "/messages?ids="+this.nowId,URLCONFIG).then((res)=>{
          //     if(res.data.state == 0 && res.data.data){
          //         _this.$message.success(LANG['恭喜您，删除成功！'] || '恭喜您，删除成功！');
          //     }
          //     _this.loading = false;
          //     _this.updated = true;
          // }).catch((e)=>{
          //     _this.$message.error(LANG['删除失败，请稍后重试'] || '删除失败，请稍后重试');
          //     _this.loading = false;
          // });

          break;
      }
    }

  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-356cbd9c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/webSet/msgManagement.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"msgMangagment"}},[_c('el-col',{staticClass:"pb"},[_c('formedit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":'search',"labelWidth":'60px',"isEdit":_vm.isEdit,"addText":_vm.LANG['新增消息'] || '新增消息'},on:{"add-new":_vm.doAdd,"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"updated":_vm.updated,"showRefresh":false},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',[_c('formedit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.formConfig,"type":'default',"formType":_vm.formType,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formTitel":_vm.formTitel},on:{"get-textarea":_vm.getTextarea,"get-form":_vm.saveForm}})],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{staticClass:"detail",attrs:{"title":_vm.LANG['消息详情'] || '消息详情',"size":"tiny"},model:{value:(_vm.dialogVisible),callback:function ($$v) {_vm.dialogVisible=$$v},expression:"dialogVisible"}},[_c('el-form',{attrs:{"model":_vm.detailform,"label-width":'110px'}},[_c('el-form-item',{attrs:{"label":_vm.LANG['发送类型：'] || '发送类型：'}},[(_vm.detailform.send_type === '1')?_c('span',[_vm._v(_vm._s(_vm.LANG['会员层级'] || '会员层级'))]):_vm._e(),_vm._v(" "),(_vm.detailform.send_type === '2')?_c('span',[_vm._v(_vm._s(_vm.LANG['全部代理'] || '全部代理'))]):_vm._e(),_vm._v(" "),(_vm.detailform.send_type === '3')?_c('span',[_vm._v(_vm._s(_vm.LANG['自定义'] || '自定义'))]):_vm._e()]),_vm._v(" "),(_vm.detailform.send_type === '1')?_c('el-form-item',{attrs:{"label":_vm.LANG['会员层级：'] || '会员层级：'}},[_c('p',[_vm._v(_vm._s(_vm.detailform['recipient']))])]):_vm._e(),_vm._v(" "),(_vm.detailform.send_type === '3')?_c('el-form-item',{attrs:{"label":_vm.LANG['自定义接收人：'] || '自定义接收人：'}},[_c('span',[_vm._v(_vm._s(_vm.detailform['recipient']))])]):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['消息类型：'] || '消息类型：'}},[(_vm.detailform.type === '2')?_c('span',[_vm._v(_vm._s(_vm.LANG['一般消息'] || '一般消息'))]):_vm._e(),_vm._v(" "),(_vm.detailform.type === '1')?_c('span',[_vm._v(_vm._s(_vm.LANG['重要消息'] || '重要消息'))]):_vm._e()]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['标题：'] || '标题：'}},[_c('span',[_vm._v(_vm._s(_vm.detailform['title']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['内容：'] || '内容：'}},[_c('p',[_vm._v(_vm._s(_vm.detailform['content']))])])],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("关 闭")])],1)],1)],1),_vm._v(" "),_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/webSet/msgManagement.vue
function injectStyle (context) {
  __webpack_require__(424)
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
  msgManagement,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var webSet_msgManagement = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);