(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/setup/setup.vue
var setup = __webpack_require__(257);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-18bc7d77","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/setup/setup.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"setup"}},[_c('el-row',{staticClass:"tCent",staticStyle:{"background":"#00bca4","color":"#ffffff","padding":"10px"}},[_c('h1',[_vm._v(_vm._s(_vm.LANG['厅主站点配置'] || '厅主站点配置'))])]),_vm._v(" "),_c('el-row',{staticClass:"steps",staticStyle:{"padding-top":"100px"},attrs:{"type":"flex","justify":"center"}},[_c('el-col',{attrs:{"span":8}},[_c('step',{attrs:{"active":_vm.num}})],1)],1),_vm._v(" "),_c('el-row',{staticClass:"steps",attrs:{"type":"flex","justify":"center"}},[_c('el-col',{attrs:{"span":10}},[_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.num == 1),expression:"num == 1"}],ref:"moneyForm",attrs:{"model":_vm.moneyForm,"rules":_vm.moneyRules,"label-width":"150px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['选择货币'] || '选择货币',"prop":"money"}},[_c('el-select',{model:{value:(_vm.moneyForm.money),callback:function ($$v) {_vm.$set(_vm.moneyForm, "money", $$v)},expression:"moneyForm.money"}},_vm._l((_vm.moneylist),function(option,index){return _c('el-option',{key:index,attrs:{"label":option.label,"value":option.value}})}),1)],1)],1),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.num == 2),expression:"num == 2"}],ref:"emailForm",attrs:{"model":_vm.emailForm,"rules":_vm.emailRules,"label-width":"150px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['SMTP服务器'] || 'SMTP服务器',"prop":"mailhost"}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.emailForm.mailhost),callback:function ($$v) {_vm.$set(_vm.emailForm, "mailhost", $$v)},expression:"emailForm.mailhost"}},_vm._l((_vm.mailhostArr),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['邮箱地址'] || '邮箱地址',"prop":"mailaddress"}},[_c('el-input',{attrs:{"type":"email"},model:{value:(_vm.emailForm.mailaddress),callback:function ($$v) {_vm.$set(_vm.emailForm, "mailaddress", $$v)},expression:"emailForm.mailaddress"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['邮箱密码'] || '邮箱密码',"prop":"mailpass"}},[_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.emailForm.mailpass),callback:function ($$v) {_vm.$set(_vm.emailForm, "mailpass", $$v)},expression:"emailForm.mailpass"}})],1)],1),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.num == 3),expression:"num == 3"}],ref:"adminForm",attrs:{"model":_vm.adminForm,"rules":_vm.adminRules,"label-width":"150px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['站点名称'] || '站点名称',"prop":"name"}},[_c('el-input',{model:{value:(_vm.adminForm.name),callback:function ($$v) {_vm.$set(_vm.adminForm, "name", $$v)},expression:"adminForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['站点标题'] || '站点标题',"prop":"title"}},[_c('el-input',{model:{value:(_vm.adminForm.title),callback:function ($$v) {_vm.$set(_vm.adminForm, "title", $$v)},expression:"adminForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['站点底部信息'] || '站点底部信息',"prop":"bottom"}},[_c('el-input',{model:{value:(_vm.adminForm.bottom),callback:function ($$v) {_vm.$set(_vm.adminForm, "bottom", $$v)},expression:"adminForm.bottom"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['厅主域名'] || '厅主域名',"prop":"domain"}},[_c('el-input',{attrs:{"type":"textarea"},on:{"change":function($event){return _vm.changewww('admin')}},model:{value:(_vm.adminForm.domain),callback:function ($$v) {_vm.$set(_vm.adminForm, "domain", $$v)},expression:"adminForm.domain"}})],1),_vm._v(" "),(_vm.adminList.length > 0)?_c('el-form-item',[_c('el-collapse',_vm._l((_vm.adminList),function(item,key){return _c('el-collapse-item',{key:"key",attrs:{"title":item.url,"name":(parseInt(key)+1)}},[_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple"},[_vm._v(_vm._s(_vm.LANG['用途'] || '用途'))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple"},[_vm._v(_vm._s(_vm.LANG['域名'] || '域名'))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple"},[_vm._v(_vm._s(_vm.LANG['指向域名'] || '指向域名'))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.adminlabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.adminUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.adminlocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.cpilabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.cpiUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.cpilocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.rpiLabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.rpi))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.rpilocalhost))])])])])],1)}),1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"选择语言","prop":"lang"}},[_c('el-select',{model:{value:(_vm.adminForm.lang),callback:function ($$v) {_vm.$set(_vm.adminForm, "lang", $$v)},expression:"adminForm.lang"}},_vm._l((_vm.langugaeslist),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['是否SSL加密'] || '是否SSL加密',"prop":"is_ssl"}},[_c('el-select',{model:{value:(_vm.adminForm.is_ssl),callback:function ($$v) {_vm.$set(_vm.adminForm, "is_ssl", $$v)},expression:"adminForm.is_ssl"}},[_c('el-option',{attrs:{"label":"启用","value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":"停用","value":"0"}})],1)],1)],1),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.num == 4),expression:"num == 4"}],ref:"wwwForm",attrs:{"model":_vm.wwwForm,"rules":_vm.wwwRules,"label-width":"150px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['站点名称'] || '站点名称',"prop":"name"}},[_c('el-input',{model:{value:(_vm.wwwForm.name),callback:function ($$v) {_vm.$set(_vm.wwwForm, "name", $$v)},expression:"wwwForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['站点标题'] || '站点标题',"prop":"title"}},[_c('el-input',{model:{value:(_vm.wwwForm.title),callback:function ($$v) {_vm.$set(_vm.wwwForm, "title", $$v)},expression:"wwwForm.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['站点底部信息'] || '站点底部信息',"prop":"bottom"}},[_c('el-input',{model:{value:(_vm.wwwForm.bottom),callback:function ($$v) {_vm.$set(_vm.wwwForm, "bottom", $$v)},expression:"wwwForm.bottom"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"选择语言","prop":"lang"}},[_c('el-select',{model:{value:(_vm.wwwForm.lang),callback:function ($$v) {_vm.$set(_vm.wwwForm, "lang", $$v)},expression:"wwwForm.lang"}},_vm._l((_vm.langugaeslist),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['前台主域名'] || '前台主域名',"prop":"domain"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"请输入主域名：example.com，实际使用域名将自动添加前缀,如:www.example.com"},on:{"change":function($event){return _vm.changewww('www')}},model:{value:(_vm.wwwForm.domain),callback:function ($$v) {_vm.$set(_vm.wwwForm, "domain", $$v)},expression:"wwwForm.domain"}})],1),_vm._v(" "),(_vm.wwwList.length > 0)?_c('el-form-item',[_c('el-collapse',{model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},_vm._l((_vm.wwwList),function(item,key){return _c('el-collapse-item',{key:"key",attrs:{"title":item.url,"name":(parseInt(key)+1)}},[_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple"},[_vm._v(_vm._s(_vm.LANG['用途'] || '用途'))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple"},[_vm._v(_vm._s(_vm.LANG['域名'] || '域名'))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple"},[_vm._v(_vm._s(_vm.LANG['指向域名'] || '指向域名'))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.master_wwwlabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.master_wwwUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.master_wwwlocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.wwwlabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.wwwUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.wwwlocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.mlabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.mUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.h5localhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.agentLabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.agentUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.agentlocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.apilabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.apiUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.apilocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.resLabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.res))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.reslocalhost))])])])])],1)}),1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['PC模板'] || 'PC模板',"prop":"www"}},[_c('el-button',{on:{"click":function($event){return _vm.getTemplate('pc')}}},[_vm._v(_vm._s(_vm.LANG['模板选择'] || '模板选择'))]),_vm._v(" "),(_vm.pcSrc)?_c('img',{staticStyle:{"margin-left":"10px","vertical-align":"top"},attrs:{"src":_vm.pcSrc,"alt":"","height":"40px"}}):_vm._e()],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['H5模板'] || 'H5模板',"prop":"m_tname"}},[_c('el-button',{on:{"click":function($event){return _vm.getTemplate('h5')}}},[_vm._v(_vm._s(_vm.LANG['模板选择'] || '模板选择'))]),_vm._v(" "),(_vm.h5Src)?_c('img',{staticStyle:{"margin-left":"10px","vertical-align":"top"},attrs:{"src":_vm.h5Src,"alt":"","height":"40px"}}):_vm._e()],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['是否SSL加密'] || '是否SSL加密',"prop":"is_ssl"}},[_c('el-select',{model:{value:(_vm.wwwForm.is_ssl),callback:function ($$v) {_vm.$set(_vm.wwwForm, "is_ssl", $$v)},expression:"wwwForm.is_ssl"}},[_c('el-option',{attrs:{"label":_vm.LANG['启用'] || '启用',"value":"1"}}),_vm._v(" "),_c('el-option',{attrs:{"label":_vm.LANG['停用'] || '停用',"value":"0"}})],1)],1)],1),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.num == 5),expression:"num == 5"}],ref:"linkForm",attrs:{"model":_vm.linkForm,"rules":_vm.linkRules,"label-width":"150px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['代理网址'] || '代理网址',"prop":"domain"}},[_c('el-input',{model:{value:(_vm.linkForm.domain),callback:function ($$v) {_vm.$set(_vm.linkForm, "domain", $$v)},expression:"linkForm.domain"}})],1)],1),_vm._v(" "),(_vm.num == 6)?_c('div',{staticClass:"tCent"},[_c('el-button',{on:{"click":function($event){return _vm.openUrl('pc')}}},[_vm._v(_vm._s(_vm.LANG['PC站点'] || 'PC站点'))]),_vm._v(" "),_c('el-button',{on:{"click":function($event){return _vm.openUrl('h5')}}},[_vm._v(_vm._s(_vm.LANG['H5站点'] || 'H5站点'))]),_vm._v(" "),_c('el-button',{on:{"click":function($event){return _vm.openUrl('agent')}}},[_vm._v(_vm._s(_vm.LANG['代理站点'] || '代理站点'))]),_vm._v(" "),_c('el-button',{staticClass:"mb20",on:{"click":function($event){return _vm.openUrl('admin')}}},[_vm._v(_vm._s(_vm.LANG['厅主后台'] || '厅主后台'))]),_vm._v(" "),_c('p',[_vm._v("PC站点："),_c('a',{attrs:{"target":"_black","href":_vm.pcLink}},[_vm._v(_vm._s(_vm.pcLink))])]),_vm._v(" "),_c('p',[_vm._v("H5站点："),_c('a',{attrs:{"target":"_black","href":_vm.h5Link}},[_vm._v(_vm._s(_vm.h5Link))])]),_vm._v(" "),_c('p',[_vm._v("代理站点："),_c('a',{attrs:{"target":"_black","href":_vm.agentLink}},[_vm._v(_vm._s(_vm.agentLink))])]),_vm._v(" "),_c('p',[_vm._v("厅主首页："),_c('a',{attrs:{"target":"_black","href":_vm.adminLink}},[_vm._v(_vm._s(_vm.adminLink))])])],1):_vm._e()],1)],1),_vm._v(" "),_c('el-row',[_c('el-dialog',{attrs:{"title":"发送邮箱地址","visible":_vm.maildialogVisible},on:{"update:visible":function($event){_vm.maildialogVisible=$event}}},[_c('el-form',{ref:"addressform",attrs:{"model":_vm.addressform,"rules":_vm.addressRules,"label-width":"150px"}},[_c('el-form-item',{attrs:{"label":"邮箱地址","label-width":"150px","prop":"mailAddress"}},[_c('el-input',{attrs:{"auto-complete":"off"},model:{value:(_vm.addressform.mailAddress),callback:function ($$v) {_vm.$set(_vm.addressform, "mailAddress", $$v)},expression:"addressform.mailAddress"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.maildialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","loading":_vm.loadingThree},on:{"click":function($event){return _vm.doTest()}}},[_vm._v("确 定")])],1)],1)],1),_vm._v(" "),_c('el-row',{staticClass:"operation",attrs:{"type":"flex","justify":"center"}},[_c('el-col',{staticClass:"butgroup tCent",attrs:{"span":16}},[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.num > 1 && _vm.num < 5),expression:"num > 1 && num < 5"}],attrs:{"type":"primary"},on:{"click":_vm.prev}},[_vm._v("上一步")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.num ==2 && _vm.showMailNext),expression:"num ==2 && showMailNext"}],attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.doNext}},[_vm._v("下一步")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.num !==2 && _vm.num < 5),expression:"num !==2 && num < 5"}],attrs:{"type":"primary","loading":_vm.loading},on:{"click":_vm.doNext}},[_vm._v("下一步")]),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.num === 2 && !_vm.showMailNext),expression:"num === 2 && !showMailNext"}],attrs:{"type":"primary","loading":_vm.loadingTwo},on:{"click":_vm.showMailForm}},[_vm._v("测试邮箱")]),_vm._v(" "),(_vm.num === 5)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.save}},[_vm._v("开启站点")]):_vm._e(),_vm._v(" "),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.num === 2 && !_vm.showMailNext),expression:"num === 2 && !showMailNext"}],attrs:{"type":"primary","loading":_vm.loadingFour},on:{"click":_vm.doNextmail}},[_vm._v("跳过邮箱")])],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":"模板列表","visible":_vm.dialogVisible,"size":"large"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('H5Model',{attrs:{"model":_vm.templist,"type":_vm.tempType},on:{"get-template":_vm.doGetTemplate}}),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("确 定")])],1)],1)],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/setup/setup.vue
function injectStyle (context) {
  __webpack_require__(398)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-18bc7d77"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  setup["a" /* default */],
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var setup_setup = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/upload.vue
//
//
//
//
//
//
//
//
//
//
//
//
//import ElButton from "../../node_modules/element-ui/packages/button/src/button";
/* harmony default export */ var upload = ({
  //components: {ElButton},
  props: {
    // 外部KEY
    keys: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      imgBaseUrl: sessionStorage.URL_RPI,
      stsToken: sessionStorage.stsToken,
      LANG,
      loading: false,
      imgUrl: '',
      imgConfig: {
        file: '',
        key: ''
      }
    };
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      this.loading = false;
      this.imgUrl = '';
      this.imgBaseUrl = sessionStorage.URL_RPI;
      this.stsToken = sessionStorage.stsToken;
      this.imgConfig.key = this.keys;
    },

    change() {
      let _this = this,
          str = _this.$('#file').val(),
          arr = str.split('\\'),
          formData = new FormData(_this.$("#formTag")[0]);

      _this.loading = true, formData.append("pictrue", arr[arr.length - 1]);
      formData.append("pf", 'h5');
      /**
       * 存一下this对象，
       * 将在ajax的回调函数中，
       * 将要用这个对象，
       * 用它来改变父盒子的背景图
       *
       */
      //

      this.$.ajax({
        url: _this.imgBaseUrl,
        type: "post",
        dataType: "json",
        cache: false,
        headers: {
          'Authorization': _this.stsToken
        },
        data: formData,
        processData: false,
        // 不处理数据
        contentType: false,
        // 不设置内容类型
        success: function (v) {
          if (v.data && v.code === 10000) {
            _this.imgUrl = v.data.cache_url;

            _this.$message.success('上传图片成功');

            _this.loading = false;

            if (v.data.file_name) {
              _this.imgConfig.file = v.data.file_name;
            }
          } else {
            _this.loading = false;

            _this.$message.error('资源站密钥失效，上传图片失败，请重新登录。');
          }
        },
        error: function (res) {
          _this.$message.error('上传图片失败');

          _this.loading = false;
        }
      }); //                _this.imgName
      //                    ? _this.$emit('doUpload', {"file": _this.imgName, 'key': _this.keys})
      //                    : _this.$message.error('获取图片失败')
    }

  },
  watch: {
    imgConfig: {
      handler(val, old) {
        if (val && val.file) {
          this.$emit('doUpload', {
            "file": val.file,
            'key': val.key
          });
        }
      },

      //是否绑定初始值
      immediate: true,
      //深度监听
      deep: true
    }
  },
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-478de2d2","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/upload.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{staticClass:"warp"},[_c('form',{attrs:{"id":"formTag","enctype":"multipart/form-data"}},[_c('div',{staticClass:"uploadImgBtn",attrs:{"id":"uploadImgBtn"}},[_c('input',{staticClass:"uploadImg",attrs:{"type":"file","name":"file","id":"file","loading":true},on:{"change":_vm.change}}),_c('i',{staticClass:"el-icon-upload"}),_vm._v("选择图片\n        ")])]),_vm._v(" "),(_vm.loading)?_c('div',{staticClass:"up-loading"},[_c('i',{staticClass:"el-icon-loading"}),_vm._v(" 正在上传图片...")]):_vm._e(),_vm._v(" "),(_vm.imgUrl)?_c('img',{staticClass:"preview",attrs:{"src":_vm.imgUrl,"alt":"图片预览"}}):_vm._e()])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/upload.vue
function injectStyle (context) {
  __webpack_require__(218)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-478de2d2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  upload,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_upload = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _steps_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(548);
/* harmony import */ var _components_mobile_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(268);
/* harmony import */ var _components_upload_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(209);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




__webpack_require__(400);

__webpack_require__(45);

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      mailhostArr: ARRAYS.mailConfig,
      LANG,
      num: 1,
      isnext: true,
      langugaeslist: [],
      moneylist: [],
      pcTmpList: [],
      h5TmpList: [],
      templist: [],
      // 货币设置
      moneyForm: {
        money: ""
      },
      moneyRules: {
        money: [{
          required: true,
          message: LANG['请选择货币'] || '请选择货币',
          trigger: 'change'
        }]
      },
      // 邮件设置
      emailForm: {
        mailhost: "",
        mailpass: "",
        mailaddress: ""
      },
      emailRules: {
        mailhost: [{
          required: true,
          message: LANG['请设置SMTP服务器地址'] || '请设置SMTP服务器地址',
          trigger: 'blur'
        }],
        mailpass: [{
          required: true,
          message: LANG['请设置密码'] || '请设置密码',
          trigger: 'blur'
        }],
        mailaddress: [{
          required: true,
          message: LANG['请设置邮箱地址'] || '请设置邮箱地址',
          trigger: 'blur'
        }, {
          type: 'email',
          message: LANG['请输入正确的邮箱地址'] || '请输入正确的邮箱地址',
          trigger: 'blur,change'
        }]
      },
      // 后台站点
      adminList: [],
      adminForm: {
        name: "",
        title: "",
        bottom: "",
        domain: "",
        is_ssl: "",
        lang: "",
        logo: ""
      },
      adminRules: {
        name: [{
          required: true,
          message: LANG['请设置厅主站点名称'] || '请设置厅主站点名称',
          trigger: 'blur'
        }],
        title: [{
          required: true,
          message: LANG['请设置厅主台头名称'] || '请设置厅主台头名称',
          trigger: 'blur'
        }],
        domain: [{
          required: true,
          message: LANG['请设置厅主后台域名'] || '请设置厅主后台域名',
          trigger: 'blur'
        }, {
          validator: this.validatorUrls,
          trigger: 'change'
        }, {
          validator: this.validatorwwwTwo,
          trigger: 'blur'
        }],
        bottom: [{
          required: true,
          message: LANG['请设置厅主底部'] || '请设置厅主底部',
          trigger: 'blur'
        }],
        lang: [{
          required: true,
          message: LANG['请设置厅主后台语言'] || '请设置厅主后台语言',
          trigger: 'blur'
        }],
        is_ssl: [{
          required: true,
          message: LANG['请设置SSL'] || '请设置SSL',
          trigger: 'change'
        }]
      },
      // 前台站点
      wwwList: [],
      wwwForm: {
        name: "",
        title: "",
        bottom: "",
        domain: "",
        www_tid: "",
        www_tname: "",
        m_tid: "",
        m_tname: "",
        lang: "",
        logo: "",
        is_ssl: ""
      },
      wwwRules: {
        name: [{
          required: true,
          message: LANG['请设置站点名称'] || '请设置站点名称',
          trigger: 'blur'
        }],
        title: [{
          required: true,
          message: LANG['请设置站点标题'] || '请设置站点标题',
          trigger: 'blur'
        }],
        domain: [{
          required: true,
          message: LANG['请设置PC站点域名'] || '请设置PC站点域名',
          trigger: 'blur'
        }, {
          validator: this.validatorUrls,
          trigger: 'change'
        }],
        bottom: [{
          required: true,
          message: LANG['请设置厅主底部'] || '请设置厅主底部',
          trigger: 'blur'
        }],
        m_tname: [{
          required: true,
          message: LANG['请设置H5站点模板'] || '请设置H5站点模板',
          trigger: 'blur'
        }],
        www_tname: [{
          required: true,
          message: LANG['请设置PC站点模板'] || '请设置PC站点模板',
          trigger: 'blur'
        }],
        lang: [{
          required: true,
          message: LANG['请设置站点语言'] || '请设置站点语言',
          trigger: 'blur'
        }],
        is_ssl: [{
          required: true,
          message: LANG['请设置站点语言'] || '请设置站点语言',
          trigger: 'blur'
        }]
      },
      // 按钮状态
      loading: false,
      loadingTwo: false,
      loadingThree: false,
      loadingFour: false,
      showMailNext: false,
      // 邮箱测试弹窗
      maildialogVisible: false,
      addressform: {
        mailAddress: ""
      },
      addressRules: {
        mailAddress: [{
          required: true,
          message: LANG['请输入发送的邮箱地址'] || '请输入发送的邮箱地址',
          trigger: 'blur'
        }]
      },
      url: URL.img,
      linkForm: {
        domain: ''
      },
      linkRules: {
        domain: [{
          required: true,
          message: LANG['请输入推广链接'] || '请输入推广链接',
          trigger: 'blur'
        }, {
          validator: this.validatorUrlFull,
          trigger: 'blur'
        }]
      },
      // 模板中转变量 用于提交赋值
      tempType: "",
      dialogVisible: false,
      pcSrc: "",
      h5Src: "",
      // 生成系统页面
      pcLink: "",
      h5Link: "",
      agentLink: "",
      adminLink: "",
      activeName: ''
    };
  },

  components: {
    step: _steps_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    upload: _components_upload_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    H5Model: _components_mobile_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      let _this = this;

      this.showMailNext = false;

      if (typeof settings === 'undefined' || !settings.init) {
        this.$router.push({
          'path': '/index'
        });
      } //               this.num = 4;


      if (sessionStorage.token && sessionStorage.userName) {
        global.URLCONFIG = {
          emulateJson: true,
          headers: {
            "Content-Type": "application/json",
            //                            "Authorization": "Bearer " + sessionStorage.token
            "Authorization": sessionStorage.token
          },
          validateStatus: function (status) {
            return status;
          }
        };
      } else {
        this.$message(LANG['登录超时，请重新登录！'] || '登录超时，请重新登录！');
        this.$router.replace('/login');
        return;
      } // 取语言列表


      this.$.autoAjax('get', URL.api + ROUTES.GET.langeages, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let obj = res.data || [];

            for (let i in obj) {
              _this.langugaeslist.push({
                "label": obj[i].name,
                "value": obj[i].code
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.langeages, URLCONFIG).then((res) => {
      //     if(res.data.state == 0 && res.data.data) {
      //         let obj = res.data.data || [];
      //         for(let i in obj){
      //             _this.langugaeslist.push({"label":obj[i].name, "value":obj[i].code});
      //         }
      //     }
      // });
      // 取货币列表

      this.$.autoAjax('get', URL.api + ROUTES.GET.system.currency, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let obj = res.data || [];
            _this.moneyForm.money = res.data[0].id.toString() || "";

            for (let i in obj) {
              _this.moneylist.push({
                "label": obj[i].ctype,
                "value": obj[i].id,
                "cytype": obj[i].cytype
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.system.currency, URLCONFIG).then((res) => {
      //     if(res.data.state == 0 && res.data.data) {
      //         let obj = res.data.data || [];
      //         _this.moneyForm.money = res.data.data[0].id.toString() || "";
      //         for(let i in obj){
      //             _this.moneylist.push({"label":obj[i].ctype, "value":obj[i].id, "cytype": obj[i].cytype});
      //         }
      //     }
      // });
      // 取模板列表

      let styleUrl = URL.api + "/system/website/style";
      this.$.autoAjax('get', styleUrl, '', {
        ok: res => {
          let model_h5 = res.data.h5,
              model_pc = res.data.pc;

          _this.pcTmpList.splice(0, _this.pcTmpList.length);

          _this.h5TmpList.splice(0, _this.h5TmpList.length);

          for (let i in model_h5) {
            _this.h5TmpList.push({
              "id": model_h5[i].id,
              "key": model_h5[i].key,
              "checked": model_h5[i].checked
            });
          }

          for (let i in model_pc) {
            _this.pcTmpList.push({
              "id": model_pc[i].id,
              "key": model_pc[i].key,
              "checked": model_pc[i].checked
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(styleUrl,URLCONFIG).then((res) => {
      //     let model_h5 = res.data.data.h5, model_pc = res.data.data.pc;
      //     _this.pcTmpList.splice(0,_this.pcTmpList.length);
      //     _this.h5TmpList.splice(0,_this.h5TmpList.length);
      //     for (let i in model_h5) {
      //         _this.h5TmpList.push({
      //             "id": model_h5[i].id,
      //             "key": model_h5[i].key,
      //             "checked": model_h5[i].checked
      //         })
      //     }
      //     for (let i in model_pc) {
      //         _this.pcTmpList.push({
      //             "id": model_pc[i].id,
      //             "key": model_pc[i].key,
      //             "checked": model_pc[i].checked
      //         })
      //     }
      // })
    },

    doNext() {
      let nowNum = this.num;

      switch (nowNum) {
        case 1:
          this.saveMoney();
          break;

        case 2:
          this.saveEmail();
          break;

        case 3:
          this.saveAdmin();
          break;

        case 4:
          this.saveWWW();
          break;
      }
    },

    doNextmail() {
      this.num++;
    },

    // 测试邮箱
    showMailForm() {
      this.$refs.emailForm.validate(valid => {
        if (valid) {
          this.maildialogVisible = true;
        }
      });
    },

    // 重置FORM
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    doTest() {
      let _this = this;

      this.$refs.addressform.validate(valid => {
        if (valid) {
          _this.loadingThree = true;
          let obj = null;

          for (let i = 0; i < ARRAYS.mailConfig.length; i++) {
            if (ARRAYS.mailConfig[i].value === this.emailForm.mailhost) {
              obj = {
                mailhost: ARRAYS.mailConfig[i].value,
                mailport: ARRAYS.mailConfig[i].port,
                mailname: this.emailForm.mailaddress.split('@')[0],
                mailpass: this.emailForm.mailpass,
                mailaddress: this.emailForm.mailaddress,
                is_ssl: ARRAYS.mailConfig[i].is_ssl
              };
            }
          }

          obj.receivers = [{
            receive: _this.addressform.mailAddress,
            alias: 'test'
          }];
          this.$.autoAjax('post', URL.api + ROUTES.POST.system.email.test, obj, {
            ok: res => {
              if (res.state === 0 && res.data) {
                _this.$message.success(LANG['邮箱测试成功，请点击下一步继续设置！'] || '邮箱测试成功，请点击下一步继续设置！');

                _this.loadingThree = false;
                _this.maildialogVisible = false;
                _this.showMailNext = true;
              } else if (res.state === 2) {
                _this.$message.error(LANG['邮箱配置错误，请修改后重试！'] || '邮箱配置错误，请修改后重试！');

                _this.maildialogVisible = false;
                _this.loadingThree = false;
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }) // _this.$http.post(URL.api + ROUTES.POST.system.email.test,JSON.stringify(obj),URLCONFIG).then((res)=>{
          //     if(res.data.state === 0 && res.data.data){
          //         _this.$message.success(LANG['邮箱测试成功，请点击下一步继续设置！'] || '邮箱测试成功，请点击下一步继续设置！');
          //         _this.loadingThree = false;
          //         _this.maildialogVisible = false;
          //         _this.showMailNext = true;
          //     }else if(res.data.state === 2){
          //         _this.$message.error(LANG['邮箱配置错误，请修改后重试！'] || '邮箱配置错误，请修改后重试！');
          //         _this.maildialogVisible = false;
          //         _this.loadingThree = false;
          //     }
          // })
          .catch(e => {
            _this.loadingThree = false; //                            console.log(e);
          });
        }
      });
    },

    // 保存货币
    saveMoney() {
      let _this = this;

      let num = this.moneyForm.money;
      this.$refs.moneyForm.validate(valid => {
        if (valid) {
          _this.loading = true;
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.system.currency + "/" + parseInt(num), {
            "state": 1
          }, {
            ok: res => {
              if (res.state === 0 && res.data) {
                _this.$message.success(LANG['货币配置成功，请继续设置下面内容！'] || '货币配置成功，请继续设置下面内容！');

                if (_this.num < 5) {
                  ++_this.num;
                }

                _this.loading = false;

                _this.resetForm('addressform');
              } else {
                _this.$message.error(LANG['货币配置失败，请稍后重试！'] || '货币配置失败，请稍后重试！');

                _this.loading = false;
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }) // _this.$http.patch(URL.api + ROUTES.PATCH.system.currency + "/"+ parseInt(num),{"state":1},URLCONFIG).then((res)=>{
          //     if(res.data.state === 0 && res.data.data){
          //         _this.$message.success(LANG['货币配置成功，请继续设置下面内容！'] || '货币配置成功，请继续设置下面内容！');
          //         if(_this.num < 5){
          //             ++_this.num;
          //         }
          //         _this.loading = false;
          //         _this.resetForm('addressform');
          //     }else{
          //         _this.$message.error(LANG['货币配置失败，请稍后重试！'] || '货币配置失败，请稍后重试！');
          //         _this.loading = false;
          //     }
          // })
          .catch(e => {//                            console.log(e);
          });
        }
      });
    },

    // 保存邮箱
    saveEmail() {
      let _this = this;

      _this.loading = true;
      this.$.autoAjax('put', URL.api + ROUTES.PUT.system.email.settings, _this.emailForm, {
        ok: res => {
          if (res.state === 0 && res.data) {
            _this.$message.success(LANG['邮箱配置成功，请继续设置下面内容！'] || '邮箱配置成功，请继续设置下面内容！');

            if (_this.num < 5) {
              ++_this.num;
            }

            _this.loading = false;
          } else {
            _this.$message.error(LANG['邮箱配置失败，请稍后重试！'] || '邮箱配置失败，请稍后重试！');

            _this.loading = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // _this.$http.put(URL.api + ROUTES.PUT.system.email.settings,JSON.stringify(_this.emailForm),URLCONFIG).then((res)=>{
      //     if(res.data.state === 0 && res.data.data){
      //         _this.$message.success(LANG['邮箱配置成功，请继续设置下面内容！'] || '邮箱配置成功，请继续设置下面内容！');
      //         if(_this.num < 5){
      //             ++_this.num;
      //         }
      //         _this.loading = false;
      //     }else{
      //         _this.$message.error(LANG['邮箱配置失败，请稍后重试！'] || '邮箱配置失败，请稍后重试！');
      //         _this.loading = false;
      //     }
      // })
      .catch(e => {//                    console.log(e);
      });
    },

    // 保存 ADMIN
    saveAdmin() {
      let _this = this;

      this.$refs.adminForm.validate(valid => {
        if (valid) {
          _this.loading = true;
          let obj = {
            "type": 1,
            "build": 1,
            "remarks": ""
          };

          for (let k in _this.adminForm) {
            if (k === 'domain') {
              obj[k] = _this.adminForm[k].split(/[\n]/g);
            } else {
              obj[k] = _this.adminForm[k];
            }
          }

          obj.remarks = '';
          this.$.autoAjax('put', URL.api + ROUTES.PUT.system.domain, obj, {
            ok: res => {
              if (res.state === 0 && res.data) {
                _this.$message.success(LANG['厅主站点配置成功，请继续设置下面内容！'] || '厅主站点配置成功，请继续设置下面内容！');

                if (_this.num < 5) {
                  ++_this.num;
                }

                _this.loading = false;
              } else if (res.state === 4005) {
                _this.$message.error(LANG['厅主站点验证失败，请修改后重试！'] || '厅主站点验证失败，请修改后重试！');

                _this.showUrlError(res.data);

                _this.loading = false;
              } else {
                _this.$message.error(LANG['厅主站点配置失败，请稍后重试！'] || '厅主站点配置失败，请稍后重试！');
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }) // _this.$http.put(URL.api + ROUTES.PUT.system.domain,JSON.stringify(obj),URLCONFIG).then((res)=>{
          //     if(res.data.state === 0 && res.data.data){
          //         _this.$message.success(LANG['厅主站点配置成功，请继续设置下面内容！'] || '厅主站点配置成功，请继续设置下面内容！');
          //         if(_this.num < 5){
          //             ++_this.num;
          //         }
          //         _this.loading = false;
          //     }else if(res.data.state === 4005){
          //         _this.$message.error(LANG['厅主站点验证失败，请修改后重试！'] || '厅主站点验证失败，请修改后重试！');
          //         _this.showUrlError(res.data.data);
          //         _this.loading = false;
          //     }else{
          //         _this.$message.error(LANG['厅主站点配置失败，请稍后重试！'] || '厅主站点配置失败，请稍后重试！');
          //     }
          // })
          .catch(e => {
            _this.loading = false; //                            console.log(e);
          });
        } else {
          _this.$message.error(LANG['验证未通过，请查看！'] || '验证未通过，请查看！');
        }
      });
    },

    // 保存主域名
    saveWWW() {
      let _this = this;

      this.$refs.wwwForm.validate(valid => {
        if (valid) {
          _this.loading = true;
          let obj = {
            "type": 2,
            "build": 1,
            "remarks": ""
          };

          for (let k in _this.wwwForm) {
            if (k === 'domain') {
              obj[k] = _this.wwwForm[k].split(/[\n]/g);
            } else {
              obj[k] = _this.wwwForm[k];
            }
          }

          for (let k in _this.pcTmpList) {
            if (_this.pcTmpList[k].label === obj.www_tname) {
              obj.www_tid = _this.pcTmpList[k].value;
            }
          }

          for (let k in _this.h5TmpList) {
            if (_this.h5TmpList[k].label === obj.m_tname) {
              obj.m_tid = _this.h5TmpList[k].value;
            }
          }

          this.$.autoAjax('put', URL.api + ROUTES.PUT.system.domain, obj, {
            ok: res => {
              if (res.state === 0 && res.data) {
                _this.$message.success(LANG['站点配置成功，请继续设置下面内容！'] || '站点配置成功，请继续设置下面内容！');

                if (_this.num < 5) {
                  ++_this.num;
                }

                _this.loading = false;
                this.getLink();
              } else if (res.state === 4005) {
                _this.$message.error(LANG['厅主站点验证失败，请修改后重试！'] || '厅主站点验证失败，请修改后重试！');

                _this.showUrlError(res.data);

                _this.loading = false;
              } else {
                _this.$message.error(LANG['站点配置失败，请稍后重试！'] || '站点配置失败，请稍后重试！');

                _this.loading = false;
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }) // _this.$http.put(URL.api + ROUTES.PUT.system.domain,JSON.stringify(obj),URLCONFIG).then((res)=>{
          //     if(res.data.state === 0 && res.data.data){
          //         _this.$message.success(LANG['站点配置成功，请继续设置下面内容！'] || '站点配置成功，请继续设置下面内容！');
          //         if(_this.num < 5){
          //             ++_this.num;
          //         }
          //         _this.loading = false;
          //         this.getLink();
          //     }else if(res.data.state === 4005){
          //         _this.$message.error(LANG['厅主站点验证失败，请修改后重试！'] || '厅主站点验证失败，请修改后重试！');
          //         _this.showUrlError(res.data.data);
          //         _this.loading = false;
          //     }else{
          //         _this.$message.error(LANG['站点配置失败，请稍后重试！'] || '站点配置失败，请稍后重试！');
          //         _this.loading = false;
          //     }
          // })
          .catch(e => {
            _this.loading = false; //                            console.log(e);
          });
        } else {
          _this.$message.error(LANG['验证未通过，请查看！'] || '验证未通过，请查看！');
        }
      });
    },

    prev() {
      if (this.num > 1) {
        --this.num;
      }
    },

    save() {
      let _this = this;

      this.$refs.linkForm.validate(valid => {
        if (valid) {
          _this.loading = true;
          let obj = {};
          obj.domain = _this.linkForm.domain;
          obj.comment = "备注";
          this.$.autoAjax('put', URL.api + ROUTES.PUT.commission.link, obj, {
            ok: res => {
              if (res.state === 0 && res.data) {
                _this.$message.success(LANG['推广链接配置成功，点击开启站点完成配置！'] || '推广链接配置成功，点击开启站点完成配置！');

                _this.loading = false;

                _this.clearUrl();
              } else {
                _this.$message.error(LANG['站点配置失败，请稍后重试！'] || '站点配置失败，请稍后重试！');

                _this.loading = false;
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }) // _this.$http.put(URL.api + ROUTES.PUT.commission.link,JSON.stringify(obj),URLCONFIG).then((res)=>{
          //     if(res.data.state === 0 && res.data.data){
          //         _this.$message.success(LANG['推广链接配置成功，点击开启站点完成配置！'] || '推广链接配置成功，点击开启站点完成配置！');
          //         _this.loading = false;
          //         _this.clearUrl();
          //     }else{
          //         _this.$message.error(LANG['站点配置失败，请稍后重试！'] || '站点配置失败，请稍后重试！');
          //         _this.loading = false;
          //     }
          // })
          .catch(e => {
            _this.loading = false; //                            console.log(e);
          });
        }
      });
    },

    // 删除临时域名
    clearUrl() {
      let _this = this;

      this.$.autoAjax('post', URL.api + '/system/domain.clean', {}, {
        ok: res => {
          if (res.state === 0 && res.data) {
            if (_this.num < 6) {
              ++_this.num;
            }

            _this.$message.success(LANG['域名清除成功，请按配置的文件访问！'] || '域名清除成功，请按配置的文件访问！');
          } else {
            if (_this.num < 6) {
              ++_this.num;
            }

            _this.clearUrl();
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.post(URL.api + '/system/domain.clean',{},URLCONFIG).then((res)=>{
      //     if(res.data.state === 0 && res.data.data){
      //         if(_this.num < 6){
      //             ++_this.num;
      //         }
      //         _this.$message.success(LANG['域名清除成功，请按配置的文件访问！'] || '域名清除成功，请按配置的文件访问！');
      //     }else{
      //         if(_this.num < 6){
      //             ++_this.num;
      //         }
      //         _this.clearUrl();
      //     }
      // });
    },

    //URL验证
    validatorUrl(rule, value, callback) {
      if (!/^[\w\-]+(\.[\w\-]+)+$/.test(value)) {
        callback(new Error(LANG['请输入合法的域名，不带HTTP'] || '请输入合法的域名，不带HTTP'));
      } else {
        callback();
      }
    },

    validatorUrlFull(rule, value, callback) {
      if (!/^http(s)?:\/\/[\w\-]+(\.[\w\-]+)+$/.test(value)) {
        callback(new Error(LANG['请输入合法的域名，需要带HTTP'] || '请输入合法的域名，需要带HTTP'));
      } else {
        callback();
      }
    },

    //验证后台域名为两个
    validatorwwwTwo(rule, value, callback) {
      let list = value.split(/[\n]/g);

      if (list.length > 2) {
        callback(new Error(LANG['域名最多只能两个'] || '域名最多只能两个'));
      } else {
        callback();
      }
    },

    // 图片上传相关
    doSaveFile(obj) {
      let url = '';
      obj.url.forEach(item => {
        url += item;
      });
      return url;
    },

    // 跳转厅主首页
    goIndex() {
      this.$router.push({
        path: '/index'
      });
    },

    // 动态展示域名
    changewww(type) {
      let str = type === 'admin' ? this.adminForm.domain : this.wwwForm.domain;
      this.adminList.splice(0, this.adminList.length);
      this.wwwList.splice(0, this.wwwList.length);

      if (type === 'admin') {
        let arr = this.adminList;

        if (str) {
          let list = str.split(/[\n]/g);

          for (let k = 0; k < list.length; k++) {
            if (list[k]) {
              arr.push({
                'url': list[k],
                'adminlabel': '厅主后台',
                'adminUrl': "admin." + list[k],
                'cpilabel': 'API',
                'cpiUrl': "cpi." + list[k],
                'rpiLabel': '资源',
                'rpi': 'rpi.' + list[k],
                "adminlocalhost": this.filterUrl(window.location.host, 'admin'),
                "cpilocalhost": this.filterUrl(window.location.host, 'cpi'),
                "rpilocalhost": this.filterUrl(window.location.host, 'rpi')
              });
            }
          }
        }
      } else {
        let arr = this.wwwList;

        if (str) {
          let list = str.split(/[\n]/g);

          for (let k = 0; k < list.length; k++) {
            if (list[k]) {
              arr.push({
                'url': list[k],
                'master_wwwlabel': '主域',
                'master_wwwUrl': list[k],
                "master_wwwlocalhost": this.filterUrl(window.location.host, 'www'),
                'wwwlabel': 'PC站',
                'wwwUrl': "www." + list[k],
                'mlabel': 'H5站',
                'mUrl': "m." + list[k],
                'agentLabel': '代理站',
                'agentUrl': "agent." + list[k],
                'apilabel': 'API',
                'apiUrl': "api." + list[k],
                'resLabel': '资源',
                'res': 'res.' + list[k],
                "wwwlocalhost": this.filterUrl(window.location.host, 'www'),
                "h5localhost": this.filterUrl(window.location.host, 'm'),
                "apilocalhost": this.filterUrl(window.location.host, 'api'),
                "reslocalhost": this.filterUrl(window.location.host, 'res'),
                "agentlocalhost": this.filterUrl(window.location.host, 'agent')
              });
            }
          }
        }
      }
    },

    // 打开模板
    getTemplate(nowType) {
      this.tempType = nowType;
      this.templist.splice(0, this.templist.length);

      if (nowType === 'h5') {
        for (let k in this.h5TmpList) {
          this.$set(this.templist, k, this.h5TmpList[k]);
        }
      } else {
        for (let k in this.pcTmpList) {
          this.$set(this.templist, k, this.pcTmpList[k]);
        }
      }

      this.dialogVisible = true;
    },

    // 获取选择模板
    doGetTemplate(obj) {
      if (obj.type === "pc") {
        this.wwwForm.www_tid = obj.data.id;
        this.wwwForm.www_tname = obj.data.key;
        this.pcSrc = "/static/img/pc_new/" + obj.data.key + ".jpg";
      } else {
        this.wwwForm.m_tid = obj.data.id;
        this.wwwForm.m_tname = obj.data.key;
        this.h5Src = "/static/img/mobile_new/" + obj.data.key + ".jpg";
      }
    },

    // 获取连接
    getLink() {
      let h = this.wwwForm.is_ssl === '1' ? "https://" : "http://";
      let url = this.wwwForm.domain.split(/[\n]/g);
      let urladmin = this.adminForm.domain.split(/[\n]/g);
      this.pcLink = h + "www." + url[0];
      this.h5Link = h + "m." + url[0];
      this.agentLink = h + "agent." + url[0];
      this.adminLink = h + "admin." + urladmin[0];
    },

    //域名过滤
    filterUrl(url, str) {
      if (url) {
        let rep = /admin/.test(url);

        if (rep) {
          return url.replace(/admin/, str);
        } else {
          return str + '.' + url;
        }
      } else {
        return '';
      }
    },

    // 按钮事件
    openUrl(str) {
      switch (str) {
        case 'pc':
          window.open(this.pcLink);
          break;

        case 'h5':
          window.open(this.h5Link);
          break;

        case 'agent':
          window.open(this.agentLink);
          break;

        case 'admin':
          window.open(this.adminLink);
          break;
      }
    },

    // URLS验证
    validatorUrls(rule, value, callback) {
      if (value) {
        let state = 0;
        let list = value.split(/[\n]/g);
        list.forEach(v => {
          // if(!/\w+.[a-zA-Z]+(.[a-zA-Z]+)?$/.test(v)){
          if (!/\w+(.([a-zA-Z]{2,}))+$/.test(v)) {
            state++;
            callback(new Error(v + (LANG['域名不合法，请修改后重试'] || '域名不合法,请修改后重试')));
          }
        });

        if (state === 0) {
          callback();
        } else {
          callback(new Error(LANG['域名不合法，请修改后重试'] || '域名不合法,请修改后重试'));
        }
      } else {
        callback();
      }
    },

    showUrlError(arr) {
      let msg = "";

      if (arr.length === 0) {
        return;
      }

      for (let k in arr) {
        msg = msg + arr[k] + '\r\n';
      }

      this.$notify.error({
        title: '域名验证失败列表',
        message: msg,
        duration: 0
      });
    }

  },

  mounted() {},

  created() {
    this.init();
  }

});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/element-ui/packages/button/src/button.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var src_button = ({
  name: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },

    handleInnerClick(evt) {
      if (this.disabled) {
        evt.stopPropagation();
      }
    }

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6b292da5","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/element-ui/packages/button/src/button.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"el-button",class:[
    _vm.type ? 'el-button--' + _vm.type : '',
    _vm.size ? 'el-button--' + _vm.size : '',
    {
      'is-disabled': _vm.disabled,
      'is-loading': _vm.loading,
      'is-plain': _vm.plain
    }
  ],attrs:{"disabled":_vm.disabled,"autofocus":_vm.autofocus,"type":_vm.nativeType},on:{"click":_vm.handleClick}},[(_vm.loading)?_c('i',{staticClass:"el-icon-loading",on:{"click":_vm.handleInnerClick}}):_vm._e(),_vm._v(" "),(_vm.icon && !_vm.loading)?_c('i',{class:'el-icon-' + _vm.icon,on:{"click":_vm.handleInnerClick}}):_vm._e(),_vm._v(" "),(_vm.$slots.default)?_c('span',{on:{"click":_vm.handleInnerClick}},[_vm._t("default")],2):_vm._e()])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/element-ui/packages/button/src/button.vue
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
  src_button,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var button_src_button = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/mobile.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var mobile = ({
  data() {
    return {
      imgNumber: 13,
      imgUrlArr: [],
      imgUrl: '/static/img/mobile_new/',
      show: true,
      bigImage: false,
      showIndexImage: 0
    };
  },

  props: {
    // 默认选中值
    showKey: {
      type: String,
      default: ''
    },
    // 列表数据
    model: Array,
    // 模板类型
    type: {
      type: String,
      default: 'h5'
    },
    showWindow: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ElButton: button_src_button
  },
  methods: {
    // 初始化
    init() {
      // 取模板列表
      this.imgUrlArr.splice(0, this.imgUrlArr.length);
      let imgUrlArr = this.imgUrlArr;
      this.imgUrl = this.type === 'h5' ? '/static/img/mobile_new/' : '/static/img/pc_new/';
      this.show = true;

      if (this.model.length > 0) {
        let temp = this.showKey ? this.showKey : this.model[0].key;
        this.model.forEach(v => {
          let check = '0';

          if (v.key === temp) {
            check = '1';
          }

          imgUrlArr.push({
            id: v.id,
            key: v.key,
            checked: check
          });
        });
      }

      this.$emit('get-template', {
        'data': this.imgUrlArr[0],
        'type': this.type
      });
    },

    preview(n) {
      this.show = false;
      this.showIndexImage = n;
    },

    back() {
      this.show = true;
    },

    open(i) {
      for (let k in this.imgUrlArr) {
        this.imgUrlArr[k].checked = '0';
      }

      this.imgUrlArr[i].checked = '1';
      this.$emit('get-template', {
        'data': this.imgUrlArr[i],
        'type': this.type
      });
    }

  },

  created() {
    this.init();
  },

  watch: {
    showKey: function (newval) {
      if (newval) {
        this.init();
      }
    },
    type: function (newval) {
      if (newval) {
        this.init();
      }
    },
    showWindow: function (newval) {
      if (newval) {
        this.show = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-121e632a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/mobile.vue
var mobile_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"mobile"}},[(_vm.show)?_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{staticClass:"contCard",attrs:{"span":24}},_vm._l((_vm.imgUrlArr),function(url,index){return _c('div',{staticClass:"imgBox ml20 mb"},[_c('el-card',{staticClass:"mt20 cardBox",class:{ active: url.checked === '1' },attrs:{"body-style":{ padding: '0' }}},[_c('img',{attrs:{"src":_vm.imgUrl + url.key + '_s.jpg',"alt":"图片飞走了","width":"100%","height":"auto"},on:{"click":function($event){return _vm.preview(index)}}}),_vm._v(" "),(!(url.checked === '1'))?_c('el-row',{staticClass:"mb20 mt20"},[_c('el-col',{attrs:{"span":5,"offset":6}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.preview(index)}}},[_vm._v("预览")])],1),_vm._v(" "),_c('el-col',{attrs:{"span":5,"offset":3}},[_c('el-button',{attrs:{"type":"primary","plain":true},on:{"click":function($event){return _vm.open(index)}}},[_vm._v("使用")])],1)],1):_c('el-row',{staticClass:"mb20 mt20 tCent"},[_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.preview(index)}}},[_vm._v("预览")])],1),_vm._v(" "),_c('div',{staticClass:"cardCheck"},[_vm._v("使用中")])],1)],1)],1)}),0)],1):_c('div',{staticClass:"wrapper"},[_c('div',{staticClass:"imgwrapper tCent"},[_c('a',{staticStyle:{"display":"block","width":"auto","heigth":"auto"},attrs:{"href":"javascript:;","title":"点击返回模块列表"},on:{"click":_vm.back}},[(this.type === 'h5')?_c('img',{staticClass:"img",attrs:{"src":_vm.imgUrl + _vm.imgUrlArr[_vm.showIndexImage].key+'.jpg',"alt":"图片飞走了","width":"auto","height":"auto"}}):_c('img',{staticClass:"img",attrs:{"src":_vm.imgUrl + _vm.imgUrlArr[_vm.showIndexImage].key+'.jpg',"alt":"图片飞走了","width":"100%","height":"auto"}})])])])],1)}
var mobile_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/mobile.vue
function injectStyle (context) {
  __webpack_require__(258)
}
/* script */


/* template */

/* template functional */
var mobile_vue_template_functional_ = false
/* styles */
var mobile_vue_styles_ = injectStyle
/* scopeId */
var mobile_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var mobile_vue_module_identifier_ = null

var mobile_Component = Object(component_normalizer["a" /* default */])(
  mobile,
  mobile_render,
  mobile_staticRenderFns,
  mobile_vue_template_functional_,
  mobile_vue_styles_,
  mobile_vue_scopeId_,
  mobile_vue_module_identifier_
)

/* harmony default export */ var components_mobile = __webpack_exports__["a"] = (mobile_Component.exports);


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/setup/steps.vue
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var steps = ({
  data() {
    return {};
  },

  props: {
    active: {
      type: Number,
      default: 0
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4a6945e6","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/setup/steps.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":""}},[_c('el-steps',{attrs:{"space":100,"active":_vm.active,"finish-status":"success"}},[_c('el-step',{attrs:{"title":"货币"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"邮件服务器"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"后台站点"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"前台站点"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"推广链接"}}),_vm._v(" "),_c('el-step',{attrs:{"title":"配置成功"}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/setup/steps.vue
function injectStyle (context) {
  __webpack_require__(399)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4a6945e6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  steps,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var setup_steps = __webpack_exports__["a"] = (Component.exports);


/***/ })

}]);