(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[56],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/systemSettings/otherService.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var otherService = ({
  data() {
    return {
      LANG,
      select: 'lebo',
      modeData: {
        lebo: {
          pc: {
            code: "",
            position: ""
          },
          mobile: {
            code: ""
          },
          selected: false
        },
        usa: {
          pc: {
            code: "",
            position: "left-middle"
          },
          mobile: {
            code: ""
          },
          selected: false
        },
        live800: {
          pc: {
            code: "",
            position: "left-middle"
          },
          mobile: {
            code: ""
          },
          selected: false
        } //                    display: true

      }
    };
  },

  methods: {
    init() {
      this.submitData = JSON.parse(JSON.stringify(this.modeData));
      this.$.autoAjax('get', URL.api + ROUTES.GET.system.service, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let list = res.data.services;
            let modeData = this.modeData;
            this.modeData.display = res.data.display;

            for (let key in list) {
              if (list[key].mobile && list[key].mobile.code || list[key].pc && list[key].pc.code) {
                modeData[key] = list[key];
              }

              if (this.modeData[key].selected === true) {
                this.select = key;
              }
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.system.service,URLCONFIG).then((res) => {
      //     if(res.data.state == 0 && res.data.data ){
      //         let list = res.data.data.services;
      //         let modeData = this.modeData;
      //         this.modeData.display = res.data.data.display;
      //         for(let key in list){
      //             if((list[key].mobile && list[key].mobile.code) || (list[key].pc && list[key].pc.code)){
      //                 modeData[key] = list[key];
      //             }
      //             if(this.modeData[key].selected === true){
      //                 this.select = key;
      //             }
      //         }
      //     }
      // })
    },

    //保存
    doSave() {
      let select = this.select;
      let data = {
        services: this.modeData,
        display: this.modeData.display
      };
      data.services.lebo.selected = false;
      data.services.usa.selected = false;
      data.services.live800.selected = false;
      data.services[select].selected = true;
      delete data.display;
      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.system.service, data, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message.success(LANG["保存成功"] || "保存成功");
            this.init();
          } else {
            this.$message.success(LANG["保存失败！"] || "保存失败！");
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.system.service,JSON.stringify(data),URLCONFIG).then((res) => {
      //     if(res.data.state == 0 && res.data.data){
      //         this.$message.success(LANG["保存成功"] || "保存成功");
      //         this.init();
      //     }else{
      //         this.$message.success(LANG["保存失败！"] || "保存失败！");
      //     }
      // })
    },

    doReset() {},

    validateLeboPcCode(rule, value, callback) {
      if (this.select === 'lebo' && value == '') {
        callback(new Error(LANG['请输入在线客服代码'] || '请输入在线客服代码'));
      } else {
        callback();
      }
    },

    validateLivePcCode(rule, value, callback) {
      if (this.select === 'live800' && value == '') {
        callback(new Error(LANG['请输入在线客服窗口地址URL'] || '请输入在线客服窗口地址URL'));
      } else {
        callback();
      }
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7ae7ef53","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/systemSettings/otherService.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"otherService"}},[_c('div',{staticClass:"el-col"},[_c('el-form',{ref:"form",staticClass:"el-form",attrs:{"model":_vm.modeData}},[_c('el-col',[_c('el-form-item',[_c('el-radio-group',{staticStyle:{"width":"100%"},model:{value:(_vm.select),callback:function ($$v) {_vm.select=$$v},expression:"select"}},[_c('el-col',{staticClass:"radio-block"},[_c('el-col',{attrs:{"span":5}},[_c('el-radio',{attrs:{"label":"lebo"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['皇家客服系统'] || '皇家客服系统')}})])],1),_vm._v(" "),_c('el-col',{attrs:{"span":19}},[_c('div',[_c('p',{staticClass:"title"},[_vm._v("pc端")]),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"lebo.pc.code"}},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.modeData.lebo.pc.code),expression:"modeData.lebo.pc.code"}],staticStyle:{"width":"100%"},attrs:{"name":"","rows":"10","placeholder":"请输入在线客服代码"},domProps:{"value":(_vm.modeData.lebo.pc.code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.modeData.lebo.pc, "code", $event.target.value)}}})])],1),_vm._v(" "),_c('div',[_c('p',{staticClass:"title"},[_vm._v("移动端")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"请输入在线客服链接"},model:{value:(_vm.modeData.lebo.mobile.code),callback:function ($$v) {_vm.$set(_vm.modeData.lebo.mobile, "code", $$v)},expression:"modeData.lebo.mobile.code"}})],1)])],1),_vm._v(" "),_c('el-col',{staticClass:"radio-block"},[_c('el-col',{attrs:{"span":5}},[_c('el-radio',{attrs:{"label":"usa"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['美国客服系统'] || '美国客服系统')}})])],1),_vm._v(" "),_c('el-col',{attrs:{"span":19}},[_c('div',[_c('p',{staticClass:"title"},[_vm._v("pc端")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.modeData.usa.pc.code),expression:"modeData.usa.pc.code"}],staticStyle:{"width":"100%"},attrs:{"name":"","rows":"10","placeholder":"请输入在线客服代码"},domProps:{"value":(_vm.modeData.usa.pc.code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.modeData.usa.pc, "code", $event.target.value)}}})]),_vm._v(" "),_c('div',{staticClass:"supportPos"},[_c('span',{staticClass:"title"},[_vm._v("客服入口显示位置")]),_vm._v(" "),_c('el-radio-group',{model:{value:(_vm.modeData.usa.pc.position),callback:function ($$v) {_vm.$set(_vm.modeData.usa.pc, "position", $$v)},expression:"modeData.usa.pc.position"}},[_c('el-radio',{attrs:{"label":"left-middle"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['左中'] || '左中')}})]),_vm._v(" "),_c('el-radio',{attrs:{"label":"left-bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['左下'] || '左下')}})]),_vm._v(" "),_c('el-radio',{attrs:{"label":"right-middle"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['右中'] || '右中')}})]),_vm._v(" "),_c('el-radio',{attrs:{"label":"right-bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['右下'] || '右下')}})])],1)],1),_vm._v(" "),_c('div',[_c('p',{staticClass:"title"},[_vm._v("移动端")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"请输入在线客服链接"},model:{value:(_vm.modeData.usa.mobile.code),callback:function ($$v) {_vm.$set(_vm.modeData.usa.mobile, "code", $$v)},expression:"modeData.usa.mobile.code"}})],1)])],1),_vm._v(" "),_c('el-col',{staticClass:"radio-block"},[_c('el-col',{attrs:{"span":5}},[_c('el-radio',{attrs:{"label":"live800"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['LIVE800客服系统'] || 'LIVE800客服系统')}})])],1),_vm._v(" "),_c('el-col',{attrs:{"span":19}},[_c('div',[_c('p',{staticClass:"title"},[_vm._v("pc端")]),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"live800.pc.code"}},[_c('el-input',{attrs:{"placeholder":"请输入在线客服窗口地址URL"},model:{value:(_vm.modeData.live800.pc.code),callback:function ($$v) {_vm.$set(_vm.modeData.live800.pc, "code", $$v)},expression:"modeData.live800.pc.code"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"supportPos"},[_c('span',{staticClass:"title"},[_vm._v("客服入口显示位置")]),_vm._v(" "),_c('el-radio-group',{model:{value:(_vm.modeData.live800.pc.position),callback:function ($$v) {_vm.$set(_vm.modeData.live800.pc, "position", $$v)},expression:"modeData.live800.pc.position"}},[_c('el-radio',{attrs:{"label":"left-middle"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['左中'] || '左中')}})]),_vm._v(" "),_c('el-radio',{attrs:{"label":"left-bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['左下'] || '左下')}})]),_vm._v(" "),_c('el-radio',{attrs:{"label":"right-middle"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['右中'] || '右中')}})]),_vm._v(" "),_c('el-radio',{attrs:{"label":"right-bottom"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['右下'] || '右下')}})])],1)],1),_vm._v(" "),_c('div',[_c('p',{staticClass:"title"},[_vm._v("移动端")]),_vm._v(" "),_c('el-input',{attrs:{"placeholder":"请输入在线客服链接"},model:{value:(_vm.modeData.live800.mobile.code),callback:function ($$v) {_vm.$set(_vm.modeData.live800.mobile, "code", $$v)},expression:"modeData.live800.mobile.code"}})],1)])],1)],1)],1)],1),_vm._v(" "),_c('el-button',{staticClass:"saveBtn",attrs:{"type":"primary"},on:{"click":_vm.doSave}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['保存修改'] || '保存修改')}})])],1)],1)])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/systemSettings/otherService.vue
function injectStyle (context) {
  __webpack_require__(541)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ae7ef53"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  otherService,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var systemSettings_otherService = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);