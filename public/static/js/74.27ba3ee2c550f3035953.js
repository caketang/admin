(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[74],{

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/lottey/lotteryZKCmanual.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lotteryZKCmanual = ({
  data() {
    return {
      LANG,
      input: '',
      hr: 0,
      min: 0,
      sec: 0
    };
  },

  components: {},
  methods: {
    init() {
      this.countdown();
    },

    countdown() {
      const end = Date.parse(new Date('2018-12-10'));
      const now = Date.parse(new Date());
      const msec = end - now;
      let hr = parseInt(msec / 1000 / 60 / 60 % 24);
      let min = parseInt(msec / 1000 / 60 % 60);
      let sec = parseInt(msec / 1000 % 60);
      this.hr = hr > 9 ? hr : '0' + hr;
      this.min = min > 9 ? min : '0' + min;
      this.sec = sec > 9 ? sec : '0' + sec;
      const that = this;
      setTimeout(function () {
        that.countdown();
      }, 1000);
    },

    submit() {}

  },
  created: function () {
    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7d641fa2","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/lottey/lotteryZKCmanual.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"lotteryZKCmanual w100",attrs:{"id":"lotteryZKCmanual"}},_vm._l((8),function(item,k){return _c('el-card',{key:k,staticClass:"box-card tCent"},[_c('el-row',[_c('el-col',{staticClass:"container",attrs:{"span":24}},[_c('h3',[_vm._v("三分时时彩")])]),_vm._v(" "),_c('el-col',{staticClass:"container",attrs:{"span":24}},[_vm._v("\n                期号："),_c('span',[_vm._v("1233232")])]),_vm._v(" "),_c('el-col',{staticClass:"container",attrs:{"span":24}},[_vm._v("\n                预设彩果："),_c('el-tag',{staticClass:"font16",attrs:{"type":"success"}},[_vm._v("4,8,9")])],1),_vm._v(" "),_c('el-col',{staticClass:"container",attrs:{"span":24}},[_vm._v("\n                距离封盘时间："),_c('el-tag',{staticClass:"font16",attrs:{"type":"warning"}},[_vm._v(_vm._s((_vm.hr + ":" + _vm.min + ":" + _vm.sec)))])],1),_vm._v(" "),_c('el-col',{staticClass:"container",attrs:{"span":24}},[_vm._v("\n                手动设置开奖号码：\n            ")]),_vm._v(" "),_c('el-col',{staticClass:"container",attrs:{"span":24}},[_c('el-input',{staticClass:"w80",attrs:{"type":"number","placeholder":"请输入开奖号码","size":"small"},model:{value:(_vm.input),callback:function ($$v) {_vm.input=$$v},expression:"input"}})],1),_vm._v(" "),_c('el-col',{staticClass:"container",attrs:{"span":24}},[_c('el-button',{attrs:{"type":"warning"},on:{"click":_vm.submit}},[_vm._v("确 认")])],1)],1)],1)}),1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/lottey/lotteryZKCmanual.vue
function injectStyle (context) {
  __webpack_require__(468)
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
  lotteryZKCmanual,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var lottey_lotteryZKCmanual = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);