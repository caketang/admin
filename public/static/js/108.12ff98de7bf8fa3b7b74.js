(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/webSet/promotionalResources.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var promotionalResources = ({
  data() {
    let validatePass = (rule, value, callback) => {
      let regex = /^[1-9]\d*$/;
      let isZs = regex.test(value);

      if (isZs) {
        callback();
      } else {
        callback(new Error('请输入正整数'));
      }
    };

    return {
      LANG,
      //表格相关
      columnsUrl: "",
      tableUrl: "",
      baseUrl: "",
      formConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "媒体名称",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "width",
        "value": "",
        "type": "text",
        "label": "宽度",
        "rules": [{
          "require": true
        }, {
          "fns": validatePass
        }]
      }, {
        "prop": "length",
        "value": "",
        "type": "text",
        "label": "高度",
        "rules": [{
          "require": true
        }, {
          "fns": validatePass
        }]
      }, {
        "prop": "file_type",
        "value": "",
        "type": "text",
        "label": "文件类型",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "language_id",
        "value": "",
        "type": "select",
        "label": "语言",
        "list": []
      }, {
        "prop": "type",
        "value": "",
        "type": "select",
        "label": "媒体类型",
        "list": []
      }, {
        "prop": "images",
        "value": [],
        'type': "upload",
        "fileNum": 1,
        "label": "图片",
        "action": URL.img,
        "folder": "web"
      }, {
        "prop": "script",
        "value": "",
        "type": "textarea",
        "label": "脚本",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "status",
        "value": "",
        "label": "状态",
        "type": "select",
        "list": [{
          "label": "启用",
          "value": "1"
        }, {
          "label": "停用",
          "value": "0"
        }] // {"type":"datePicker","label":"创建日期","prop":"created"},

      }],
      type: "default",
      formTitel: "",
      // 修改类型
      formType: "",
      labelWidth: "90px",
      // 是否编辑
      editVisible: {
        state: false
      },
      formVisible: {
        state: false
      },
      // 是否编辑数据
      isEdit: {
        state: false
      },
      nowId: -1,
      updated: false,
      loading: false
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      this.columnsUrl = "/static/json/agent/agentResources/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.commission.ad; //获取语言列表

      let langeUrl = URL.api + ROUTES.GET.langeages;
      this.$.autoAjax('get', langeUrl, '', {
        ok: res => {
          let model = res.data;

          for (let i in model) {
            this.formConfig[4].list.push({
              "label": model[i].name,
              "value": parseInt(model[i].id, 10)
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(langeUrl, URLCONFIG).then((res) => {
      //   let model = res.data.data
      //     for (let i in model) {
      //         this.formConfig[4].list.push({
      //             "label": model[i].name,
      //             "value": parseInt(model[i].id, 10)
      //         })
      //     }
      // })
      // 获取游戏类型

      let gamesUrl = URL.api + '/games/all';
      this.$.autoAjax('get', gamesUrl, '', {
        ok: res => {
          let model = res.data.data;

          for (let i in model) {
            this.formConfig[5].list.push({
              "label": model[i].name,
              "value": parseInt(model[i].id, 10)
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(gamesUrl, URLCONFIG).then((res) => {
      //     let model = res.data.data.data
      //     for (let i in model) {
      //         this.formConfig[5].list.push({
      //             "label": model[i].name,
      //             "value": parseInt(model[i].id, 10)
      //         })
      //     }
      // })
    },

    //表格按钮点击事件
    doHandle(item) {
      this.formType = "";

      switch (item.fn) {
        case "doEdit":
          this.doEdit(item.row);
          break;

        case "doDelete":
          this.doDelete(item.row);
          break;

        case "doEnable":
          this.doEnable(item.row);
          break;

        case "doDesable":
          this.doDesable(item.row);
          break;
      }
    },

    //编辑
    doEdit(row) {
      this.formTitel = LANG['修改推广资源'] || '修改推广资源';
      this.nowId = row.id;
      setTimeout(() => {
        this.formType = "edit";
        FORMVAL(row, this.formConfig);
        this.formConfig[6].value.push(row.picture);
        this.editVisible.state = true;
        this.isEdit.state = true;
        this.formVisible.state = true;
      }, 500);
    },

    //删除
    doDelete(row) {
      this.nowId = row.id;

      let _this = this;

      this.loading = true;
      this.updated = false;
      this.$.autoAjax('delete', URL.api + ROUTES.DELETE.commission.ad + "/" + parseInt(this.nowId), '', {
        ok: res => {
          if (res.data != undefined && res.data) {
            this.$message.success(LANG['恭喜您，代理推广图片资源删除成功！'] || '恭喜您，代理推广图片资源删除成功！');
            this.updateType = "update";
            this.loading = false;
            this.updated = true;
          } else {
            this.$message.error(LANG['代理推广图片资源删除失败，请稍候重试！'] || '代理推广图片资源删除失败，请稍候重试！');
            this.loading = false;
            this.updateType = "update";
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.delete(URL.api + ROUTES.DELETE.commission.ad+"/"+parseInt(this.nowId), URLCONFIG).then((res) => {
      //     if (res.data.data != undefined && res.data.data) {
      //          this.$message.success(LANG['恭喜您，代理推广图片资源删除成功！'] || '恭喜您，代理推广图片资源删除成功！');
      //          this.updateType = "update";
      //          this.loading = false;
      //          this.updated = true;
      //     } else {
      //          this.$message.error(LANG['代理推广图片资源删除失败，请稍候重试！'] || '代理推广图片资源删除失败，请稍候重试！');
      //          this.loading = false;
      //          this.updateType = "update";
      //     }
      // });

      _this.updateType = "";
    },

    //启用
    doEnable(row) {
      this.loading = true;
      this.updated = false;
      this.nowId = row.id;

      let _this = this;

      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.commission.ad + "/" + parseInt(this.nowId), {
        "status": 1
      }, {
        ok: res => {
          if (res.data != undefined && res.data) {
            this.$message.success(LANG['恭喜您，代理推广图片资源启用成功！'] || '恭喜您，代理推广图片资源启用成功！');
            this.loading = false;
            this.updated = true;
          } else {
            this.$message.error(LANG['代理推广图片资源启用失败，请稍候重试！'] || '代理推广图片资源启用失败，请稍候重试!');
            this.loading = false;
            this.updated = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.commission.ad+"/"+parseInt(this.nowId),JSON.stringify({"status":1}),URLCONFIG).then((res) => {
      //     if (res.data.data != undefined && res.data.data) {
      //         this.$message.success(LANG['恭喜您，代理推广图片资源启用成功！'] || '恭喜您，代理推广图片资源启用成功！');
      //         this.loading = false;
      //         this.updated = true;
      //     } else {
      //         this.$message.error(LANG['代理推广图片资源启用失败，请稍候重试！'] || '代理推广图片资源启用失败，请稍候重试!');
      //         this.loading = false;
      //         this.updated = false;
      //     }
      // });

      _this.updateType = "";
    },

    //停用
    doDesable(row) {
      this.loading = true;
      this.updated = false;
      this.nowId = row.id;

      let _this = this;

      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.commission.ad + "/" + parseInt(this.nowId), {
        "status": 0
      }, {
        ok: res => {
          if (res.data != undefined && res.data) {
            this.$message.success(LANG['恭喜您，代理推广图片资源停用成功！'] || '恭喜您，代理推广图片资源停用成功！');
            this.loading = false;
            this.updated = true;
          } else {
            this.$message.error(LANG['代理推广图片资源停用失败，请稍候重试！'] || '代理推广图片资源停用失败，请稍候重试！');
            this.loading = false;
            this.updated = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.commission.ad+"/"+parseInt(this.nowId),JSON.stringify({"status":0}),URLCONFIG).then((res) => {
      //     if (res.data.data != undefined && res.data.data) {
      //         this.$message.success(LANG['恭喜您，代理推广图片资源停用成功！'] || '恭喜您，代理推广图片资源停用成功！');
      //         this.loading = false;
      //         this.updated = true;
      //     } else {
      //         this.$message.error(LANG['代理推广图片资源停用失败，请稍候重试！'] || '代理推广图片资源停用失败，请稍候重试！' );
      //         this.loading = false;
      //         this.updated = false;
      //     }
      // });

      _this.updateType = "";
    },

    openform() {
      this.formVisible.state = true;
      this.formType = "add";
      this.formTitel = LANG['新增推广资源'] || '新增推广资源';
    },

    // 保存新数据
    getForm(data) {
      let backData = data.formObj; // backData.updated = backData.created = Date.now(backData.created);
      // backData.created = Date.now(backData.created)

      backData['picture'] = backData['images'].toString();
      delete backData['images'];
      backData.width = parseInt(backData.width, 10);
      backData.length = parseInt(backData.length, 10);
      this.loading = true;
      this.updated = false;
      let url = this.formType == "add" ? URL.api + ROUTES.PUT.commission.ad : URL.api + ROUTES.PUT.commission.ad + '?id=' + this.nowId;
      this.$.autoAjax('put', url, data.formObj, {
        ok: res => {
          if (res.state == 0 && res.data != null) {
            if (this.formType == "add") {
              this.$message.success(LANG['新增成功'] || '新增成功');
            } else {
              this.$message.success(LANG['修改成功'] || '修改成功');
            }

            this.loading = false;
            this.updated = true;
            this.updateType = this.formType;
          } else if (res.state === 2) {
            if (this.formType === "add") {
              this.$message.error(LANG['请添加图片'] || '请添加图片');
            } else {
              this.$message.error(LANG['请添加图片'] || '请添加图片');
            }

            this.loading = false;
          } else {
            if (this.formType == "add") {
              this.$message.error(LANG['新增失败，请稍候重试!'] || '新增失败，请稍候重试!');
            } else {
              this.$message.error(LANG['修改失败，请稍候重试!'] || '修改失败，请稍候重试!');
            }

            this.loading = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.put(url, JSON.stringify(data.formObj), URLCONFIG).then( (res) => {
      //    if(res.data.state == 0  && res.data.data != null){
      //        if(this.formType == "add"){
      //            this.$message.success(LANG['新增成功'] || '新增成功');
      //        }else{
      //            this.$message.success(LANG['修改成功'] || '修改成功');
      //        }
      //        this.loading = false;
      //        this.updated = true;
      //        this.updateType = this.formType;
      //    }else if(res.data.state === 2){
      //        if(this.formType === "add"){
      //            this.$message.error(LANG['请添加图片'] || '请添加图片');
      //        }else{
      //            this.$message.error(LANG['请添加图片'] || '请添加图片');
      //        }
      //        this.loading = false;
      //    } else {
      //        if(this.formType == "add"){
      //            this.$message.error(LANG['新增失败，请稍候重试!'] || '新增失败，请稍候重试!');
      //        }else{
      //            this.$message.error(LANG['修改失败，请稍候重试!'] || '修改失败，请稍候重试!');
      //        }
      //        this.loading = false;
      //    }
      // })
      .catch(err => {//                        console.log(err)
      });
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5afea606","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/webSet/promotionalResources.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"agentResources"}},[_c('el-col',{staticClass:"pb",staticStyle:{"text-align":"right"},attrs:{"span":24}},[_c('el-button',{staticClass:"addManage",attrs:{"type":"primary","size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['新增代理推广资源'] || '新增代理推广资源')},on:{"click":_vm.openform}})],1),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formTitel":_vm.formTitel,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"size":"tiny","isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"updated":_vm.updated,"showRefresh":true},on:{"do-handle":_vm.doHandle}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/webSet/promotionalResources.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  promotionalResources,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var webSet_promotionalResources = __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);