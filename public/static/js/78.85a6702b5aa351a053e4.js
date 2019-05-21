(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/systemSettings/emailSettings.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var emailSettings = ({
  data() {
    return {
      baseUrl: '',
      load: false,
      // 表单
      labelWidth: "90px",
      formVisible: {
        state: false
      },
      formConfig: [{
        "prop": "mailsys",
        "value": "",
        "label": "SMTP服务器",
        "type": "select",
        "list": ARRAYS.mailConfig,
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "mailaddress",
        "value": "",
        "type": "text",
        "label": "邮箱地址",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "mailpass",
        "value": "",
        "type": "password",
        "label": "邮箱密码",
        "rules": [{
          "require": true
        }]
      }],
      updateKeys: ""
    };
  },

  components: {
    formEdit: formEdit["a" /* default */]
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      this.baseUrl = URL.api + ROUTES.GET.system.emailSettings;

      let _this = this;

      this.$.autoAjax('get', this.baseUrl, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let obj = res.data || [];
            obj.is_ssl = obj.is_ssl === "1" ? true : false;
            let temp = obj['mailaddress'].split('@');
            let str = '';

            if (temp[1]) {
              switch (temp[1]) {
                case 'gmail.com':
                  str = "mailsys,smtp.gmail.com";
                  break;

                case 'qq.com':
                  str = "mailsys,smtp.qq.com";
                  break;

                case 'yahoo.com':
                  str = "mailsys,smtp.mail.yahoo.com";
                  break;

                case '163.com':
                  str = "mailsys,smtp.163.com";
                  break;
              }
            }

            _this.updateKeys = str + ",mailaddress," + obj.mailaddress + ",mailpass," + obj.mailpass;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(this.baseUrl, URLCONFIG).then(res => {
      //     if (res.data.state == 0 && res.data.data) {
      //         let obj = res.data.data || [];
      //         obj.is_ssl = obj.is_ssl === "1" ? true : false;
      //         let temp = obj['mailaddress'].split('@');
      //         let str = '';
      //         if (temp[1]) {
      //             switch (temp[1]) {
      //                 case 'gmail.com' :
      //                     str = "mailsys,smtp.gmail.com";
      //                     break;
      //                 case 'qq.com' :
      //                     str = "mailsys,smtp.qq.com";
      //                     break;
      //                 case 'yahoo.com' :
      //                     str = "mailsys,smtp.mail.yahoo.com";
      //                     break;
      //                 case '163.com' :
      //                     str = "mailsys,smtp.163.com";
      //                     break;
      //             }
      //         }
      //         _this.updateKeys = str + ",mailaddress," + obj.mailaddress + ",mailpass," + obj.mailpass;
      //     }
      // })
    },

    saveData(obj) {
      this.load = true;
      let saved = null;

      for (let i = 0; i < ARRAYS.mailConfig.length; i++) {
        if (ARRAYS.mailConfig[i].value === obj.formObj.mailsys) {
          saved = {
            mailhost: ARRAYS.mailConfig[i].value,
            mailport: ARRAYS.mailConfig[i].port,
            mailname: obj.formObj.mailaddress.split('@')[0],
            mailpass: obj.formObj.mailpass,
            mailaddress: obj.formObj.mailaddress,
            is_ssl: ARRAYS.mailConfig[i].is_ssl
          };
        }
      }

      let _this = this;

      this.$.autoAjax('put', URL.api + ROUTES.PUT.system.emailSettings, saved, {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.$message.success(LANG['保存成功'] || '保存成功');

            _this.init();

            _this.load = false;
          } else {
            _this.$message.error(LANG['保存失败'] || '保存失败');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.put(URL.api + ROUTES.PUT.system.emailSettings, JSON.stringify(saved), URLCONFIG).then(res => {
      //     if (res.data.state == 0 && res.data.data) {
      //         _this.$message.success(LANG['保存成功'] || '保存成功');
      //         _this.init();
      //         _this.load = false;
      //     } else {
      //         _this.$message.error(LANG['保存失败'] || '保存失败');
      //     }
      // });
    },

    cancel() {
      this.init();
    }

  },

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-37258d21","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/systemSettings/emailSettings.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.load),expression:"load"}],attrs:{"id":"emailSettings"}},[_c('el-col',{attrs:{"span":12,"offset":9}},[_c('div',{staticClass:"border_style"},[_c('el-row',{attrs:{"type":"flex","justify":"center"}},[_c('el-col',{attrs:{"span":24}},[_c('formEdit',{attrs:{"formTitel":'',"formVisible":_vm.formVisible,"formConfig":_vm.formConfig,"type":'pageForm',"labelWidth":'120px',"isEdit":{},"updateKeys":_vm.updateKeys},on:{"get-form":_vm.saveData,"cancel-form":_vm.cancel}})],1)],1)],1)])],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/systemSettings/emailSettings.vue
function injectStyle (context) {
  __webpack_require__(542)
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
  emailSettings,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var systemSettings_emailSettings = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);