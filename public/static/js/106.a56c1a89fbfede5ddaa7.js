(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/systemSettings/domainNameManage.vue
//
//
//
//
//
//
//
//


/* harmony default export */ var domainNameManage = ({
  data() {
    return {
      LANG,
      formVisible: {},
      isEdit: {},
      formTitel: "",
      formType: "",
      formConfig: [{
        "prop": "title",
        "value": "",
        "type": "text",
        "label": "后台站点名称",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "title",
        "value": "",
        "type": "text",
        "label": "后台站点标题",
        "rules": [{
          "require": true
        }]
      }, // {
      //     "prop": "bottom",
      //     "value": "",
      //     "type": "text",
      //     "label": "后台站点底部信息",
      //     "rules": [{
      //         "require": true
      //     }]
      // },
      {
        "prop": "domain",
        "value": "",
        "type": "textarea",
        "domainType": "end",
        "label": "后台域名列表",
        "rulesType": "urls",
        "rules": [{
          "require": true,
          "disabled": true
        }],
        "prompt": LANG['绑定多个域名请使用换行（回车）隔开'] || '绑定多个域名请使用换行（回车）隔开'
      }, {
        "prop": "is_ssl",
        "value": "",
        "label": "SSL加密",
        "type": "select",
        "list": [{
          "label": "是",
          "value": "1"
        }, {
          "label": "否",
          "value": "0"
        }],
        "rules": [{
          "require": true
        }]
      }, // {
      //     "prop": "lang",
      //     "value": "",
      //     "label": "语言",
      //     "type": "select",
      //     "list": [],
      //     "rules": [{
      //         "require": true
      //     }]
      // },
      {
        "prop": "logos",
        "value": [],
        'type': "upload",
        "fileNum": 1,
        "label": "LOGO",
        "action": URL.img,
        "folder": "adlist",
        "rules": [{
          "require": true
        }]
      }],
      labelWidth: "150px",
      dnsUrl: ""
    };
  },

  components: {
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      this.formType = '';
      this.tableUrl = URL.api + ROUTES.GET.system.domain;
      this.baseUrl = URL.api + ROUTES.GET.system.domain; // 语言
      // let langeUrl = URL.api + ROUTES.GET.langeages;
      // this.$http.get(langeUrl, URLCONFIG).then((res) => {
      //     let model = res.data.data || [];
      //     for (let i in model) {
      //         this.formConfig[5].list.push({
      //             "label": model[i].name,
      //             "value": model[i].code
      //         })
      //     }
      // })
      // 初始化数据

      this.$.autoAjax('get', URL.api + ROUTES.GET.system.domain + "?type=1", '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.dnsUrl = res.data.domain || window.location.host;
            let model = res.data.info || [];
            FORMVAL(model, this.formConfig);
            let temp = "";
            let arrs = model.domains || [];

            for (let i in arrs) {
              if (arrs[i].domain) {
                temp = temp + arrs[i].domain + "\r\n";
              }
            }

            this.formConfig[0].value = model.name;
            this.formConfig[1].value = model.title; // this.formConfig[2].value = model.bottom;

            this.formConfig[2].value = temp;
            this.formConfig[3].value = model.is_ssl; // this.formConfig[5].value = model.lang;

            this.formConfig[4].value.push(model.logo);
            this.formType = "eidt";
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.system.domain + "?type=1", URLCONFIG).then((res) => {
      //     if (res.data.state === 0 && res.data.data) {
      //         this.dnsUrl = res.data.data.domain || window.location.host;
      //         let model = res.data.data.info || [];
      //         FORMVAL(model, this.formConfig);
      //         let temp = "";
      //         let arrs = model.domains || [];
      //         for (let i in arrs) {
      //             if (arrs[i].domain) {
      //                 temp = temp + arrs[i].domain + "\r\n";
      //             }
      //         }
      //         this.formConfig[0].value = model.name;
      //         this.formConfig[1].value = model.title;
      //         // this.formConfig[2].value = model.bottom;
      //         this.formConfig[2].value = temp;
      //         this.formConfig[3].value = model.is_ssl;
      //         // this.formConfig[5].value = model.lang;
      //         this.formConfig[4].value.push(model.logo);
      //         this.formType = "eidt";
      //     }
      // });
    },

    // 保存数据
    saveForm(obj) {
      let query = {
        type: 1,
        build: 0
      };

      for (let k in obj.formObj) {
        if (k === 'domain') {
          query[k] = [];
          obj.formObj[k].split(/[\n]/g).forEach(v => {
            if (v) {
              query[k].push(v);
            }
          });
        } else {
          query[k] = obj.formObj[k];
        }
      }

      query.name = obj.formObj.title;
      query.title = obj.formObj.title;
      query.bottom = "默认底部信息";
      query.is_ssl = obj.formObj.is_ssl;
      query.lang = "zh-CN";
      query.logo = obj.formObj.logos[0].toString();
      delete query['logos'];
      this.$.autoAjax('put', URL.api + ROUTES.PUT.system.domain, query, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(LANG['保存成功'] || '保存成功');
          } else if (res.state === 2002) {
            this.$message.error(LANG['无效域名'] || '无效域名');
            this.loading = false;
          } else if (res.state === 1002) {
            this.$message.error(LANG['域名已经存在'] || '域名已经存在');
            this.loading = false;
          } else if (res.state === 5001) {
            this.$message.error(LANG['配置错误'] || '配置错误');
            this.loading = false;
          } else {
            this.$message.error(LANG['保存失败'] || '保存失败');
            this.loading = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.put(URL.api + ROUTES.PUT.system.domain, JSON.stringify(query), URLCONFIG).then((res) => {
      //     if (res.data.state === 0 && res.data.data) {
      //         this.$message.success(LANG['保存成功'] || '保存成功');
      //     } else if (res.data.state === 2002) {
      //         this.$message.error(LANG['无效域名'] || '无效域名');
      //         this.loading = false;
      //     } else if (res.data.state === 1002) {
      //         this.$message.error(LANG['域名已经存在'] || '域名已经存在');
      //         this.loading = false;
      //     } else if (res.data.state === 5001) {
      //         this.$message.error(LANG['配置错误'] || '配置错误');
      //         this.loading = false;
      //     } else {
      //         this.$message.error(LANG['保存失败'] || '保存失败');
      //         this.loading = false;
      //     }
      // })
      .catch(e => {//                    console.log(e);
      });
    }

  },

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-62628dea","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/systemSettings/domainNameManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"domainNameManage"}},[_c('el-col',{staticClass:"mt20",staticStyle:{"max-width":"600px"},attrs:{"span":12,"offset":6}},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.formConfig,"formType":_vm.formType,"type":'pageForm',"dnsUrl":_vm.dnsUrl,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formTitel":_vm.formTitel},on:{"get-form":_vm.saveForm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/systemSettings/domainNameManage.vue
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
  domainNameManage,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var systemSettings_domainNameManage = __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);