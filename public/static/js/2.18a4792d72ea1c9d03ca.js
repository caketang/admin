(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/formEdit.vue
var formEdit = __webpack_require__(260);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-738169a6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/formEdit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showEditFrom)?_c('div',{directives:[{name:"loading",rawName:"v-loading.body",value:(_vm.formLoading),expression:"formLoading",modifiers:{"body":true}}],attrs:{"id":"formEdit"}},[(_vm.type != 'search' && _vm.type != 'twoCol' && !_vm.formLoading)?_c('el-dialog',{attrs:{"title":_vm.formTitel,"size":_vm.size},on:{"close":function($event){return _vm.closeDialog('noReset')}},model:{value:(_vm.formVisible.state),callback:function ($$v) {_vm.$set(_vm.formVisible, "state", $$v)},expression:"formVisible.state"}},[_c('el-form',{ref:"editForm",staticClass:"pb10",attrs:{"model":_vm.editForm,"rules":_vm.rules,"label-width":_vm.labelWidth}},_vm._l((_vm.formConfig),function(item,index){return _c('div',{key:index},[(item.type == 'title')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label}}):_vm._e(),_vm._v(" "),(item.type == 'remind')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label}},[_c('span',[_vm._v(_vm._s(_vm.LANG[item.remind] || item.remind))])]):_vm._e(),_vm._v(" "),(item.type === 'label')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label}},[_c('span',{staticClass:"help_gray"},[_vm._v(_vm._s(_vm.editForm[item.prop]))])]):_vm._e(),_vm._v(" "),((item.type == 'text' || item.type == 'phone' || item.type == 'email' || item.type == 'url' || item.type == 'textarea' || item.type == 'ip' || item.type == 'account') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[(!(item.type == 'textarea') )?_c('el-input',{attrs:{"placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},on:{"change":function($event){return _vm.changeInput(item.prop)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}}):_vm._e(),_vm._v(" "),(item.type == 'textarea')?_c('el-input',{attrs:{"type":"textarea","rows":(parseInt(item.rows) || 5),"placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},on:{"change":function($event){return _vm.changeTextarea(_vm.editForm[item.prop])}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}}):_vm._e(),_vm._v(" "),(item.type == 'textarea'&& _vm.textareaTest && _vm.textareaTest.type && _vm.editForm[item.prop].length>_vm.textareaTest.length)?_c('span',{staticClass:"help_red"},[_vm._v("不能超过 "),_c('span',[_vm._v(_vm._s(_vm.textareaTest.length))]),_vm._v("个字符最大长度")]):_vm._e(),_vm._v(" "),(item.type == 'textarea'&& _vm.textareaTest && _vm.textareaTest.type && _vm.editForm[item.prop].length<=_vm.textareaTest.length)?_c('span',{staticClass:"help_gray"},[_vm._v("当前还可以输入 "),_c('span',[_vm._v(_vm._s(_vm.textareaTest.length - _vm.editForm[item.prop].length))]),_vm._v(" 个字符")]):_vm._e()],1):_vm._e(),_vm._v(" "),((item.type == 'password') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[(!_vm.showPass)?_c('el-input',{attrs:{"type":"password","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[(item.showpasswordname != false)?_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showpass},slot:"append"},[_c('i',{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})]):_vm._e()],1):_vm._e(),_vm._v(" "),(_vm.showPass)?_c('el-input',{attrs:{"type":"text","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showpass},slot:"append"},[_c('i',{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"}})])],1):_vm._e()],1):_vm._e(),_vm._v(" "),((item.type == 'passwordType')  && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[(!_vm.showPass)?_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showpass},slot:"append"},[_c('i',{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])],1):_vm._e(),_vm._v(" "),(_vm.showPass)?_c('el-input',{attrs:{"type":"text"},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showpass},slot:"append"},[_c('i',{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"}})])],1):_vm._e()],1):_vm._e(),_vm._v(" "),((item.type == 'repeatPassword') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[(!_vm.showPass)?_c('el-input',{attrs:{"type":"password","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showpass},slot:"append"},[_c('i',{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])],1):_vm._e(),_vm._v(" "),(_vm.showPass)?_c('el-input',{attrs:{"type":"text","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showpass},slot:"append"},[_c('i',{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"}})])],1):_vm._e()],1):_vm._e(),_vm._v(" "),((item.type == 'button') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-button',{on:{"click":function($event){return _vm.doButtonClick(item)}}},[_vm._v(_vm._s(item.text))]),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"10px"}},[_vm._v(_vm._s(item.value))])],1):_vm._e(),_vm._v(" "),((item.type == 'number') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-input',{attrs:{"type":"number","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type == 'select') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-select',{attrs:{"placeholder":_vm.LANG['请选择'] || '请选择',"disabled":item.disabled},on:{"change":function($event){return _vm.changeSelect(item.propVal,item.list,_vm.editForm[item.prop],item.relation,item.relationKey,item.linkArr,item.prop)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(option,index){return _c('el-option',{key:index,attrs:{"label":option.label,"value":option.value}})}),1)],1):_vm._e(),_vm._v(" "),((item.type == 'dateGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"required":(item.required ?item.required: false)}},[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[0].prop}},[_c('datetimepicker',{attrs:{"datekey":item.prop[0].prop,"isEnd":false,"showTime":item.showTime},on:{"get-val":_vm.getDateVal},model:{value:(_vm.editForm[item.prop[0].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[0].prop, $$v)},expression:"editForm[item.prop[0].prop]"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"line textcenter",attrs:{"span":2}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[1].prop}},[_c('datetimepicker',{attrs:{"datekey":item.prop[1].prop,"isEnd":true,"showTime":item.showTime},on:{"get-val":_vm.getDateVal},model:{value:(_vm.editForm[item.prop[1].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[1].prop, $$v)},expression:"editForm[item.prop[1].prop]"}})],1)],1)],1):_vm._e(),_vm._v(" "),((item.type == 'numberGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label}},[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[0].prop}},[_c('el-input',{staticClass:"intW",attrs:{"type":"number","size":"small"},model:{value:(_vm.editForm[item.prop[0].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[0].prop, $$v)},expression:"editForm[item.prop[0].prop]"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":2}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[1].prop}},[_c('el-input',{staticClass:"intW",attrs:{"type":"number","size":"small"},model:{value:(_vm.editForm[item.prop[1].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[1].prop, $$v)},expression:"editForm[item.prop[1].prop]"}})],1)],1)],1):_vm._e(),_vm._v(" "),((item.type == 'datePicker') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('mydatepick',{attrs:{"datekey":item.prop},on:{"get-date":_vm.getDateval},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type == 'datePickernotime') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('datepick',{attrs:{"datekey":item.prop},on:{"get-date":_vm.getDayVal},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type == 'dateWeek') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-date-picker',{attrs:{"type":"week","placeholder":_vm.LANG['选择周']  || '选择周'},on:{"change":function($event){return _vm.changeWeek(_vm.editForm[item.prop],item.propOne,item.propTwo)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type == 'switch') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-switch',{model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type == 'checkGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-checkbox',{directives:[{name:"show",rawName:"v-show",value:(item.allBtnShow),expression:"item.allBtnShow"}],attrs:{"indeterminate":_vm.isIndeterminate[item.prop]},on:{"change":function($event){return _vm.handleCheckAllChange($event,index,item.prop)}},model:{value:(_vm.checkAll[item.prop]),callback:function ($$v) {_vm.$set(_vm.checkAll, item.prop, $$v)},expression:"checkAll[item.prop]"}},[_vm._v("\n                        "+_vm._s(_vm.LANG['全选'] || '全选')+"\n                    ")]),_vm._v(" "),_c('el-checkbox-group',{on:{"change":function($event){return _vm.handleCheckedCitiesChange($event,index,item.prop)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(box,index){return _c('el-checkbox',{key:index,staticClass:"mr10",attrs:{"label":_vm.LANG[box] || box,"name":"type"}},[_vm._v(_vm._s(_vm._f("formatcheckitem")(item.Arr,box))+"\n                        ")])}),1)],1):_vm._e(),_vm._v(" "),((item.type == 'checkbox') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-checkbox',{model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_vm._v(_vm._s(_vm.LANG[item.valLabel] || item.valLabel)+"\n                    ")])],1):_vm._e(),_vm._v(" "),((item.type == 'radioGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-radio-group',{on:{"change":function($event){return _vm.changeRadio(item.checkIndex,item.arr,_vm.editForm[item.prop],item.propkey)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(rad,index){return _c('el-radio',{key:index,attrs:{"label":_vm.LANG[rad.value] || rad.value}},[_vm._v(_vm._s(rad.label)+"\n                        ")])}),1)],1):_vm._e(),_vm._v(" "),((item.type == 'dateTimeGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"required":(item.required ?item.required: false)}},[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[0].prop}},[_c('datetimepicker',{attrs:{"datekey":item.prop[0].prop,"isEnd":false,"showTime":item.showTime},on:{"get-val":_vm.getDateVal},model:{value:(_vm.editForm[item.prop[0].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[0].prop, $$v)},expression:"editForm[item.prop[0].prop]"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"line textcenter",attrs:{"span":2}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[1].prop}},[_c('datetimepicker',{attrs:{"datekey":item.prop[1].prop,"isEnd":true,"showTime":item.showTime},on:{"get-val":_vm.getDateVal},model:{value:(_vm.editForm[item.prop[1].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[1].prop, $$v)},expression:"editForm[item.prop[1].prop]"}})],1)],1)],1):_vm._e(),_vm._v(" "),((item.type =='markdown') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('markdownEdit',{attrs:{"id":item.prop,"config":item.config},on:{"getContentLength":_vm.getconLength},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type =='upload') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[(item.prop)?_c('upload',{attrs:{"keys":item.prop},on:{"doUpload":_vm.doUpload}}):_vm._e()],1):_vm._e()],1)}),0),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"formCancel",on:{"click":function($event){return _vm.resetForm('no')}}},[_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))]),_vm._v(" "),_c('el-button',{staticClass:"formSave",attrs:{"type":"primary"},on:{"click":_vm.saveForm}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])],1)],1):_vm._e(),_vm._v(" "),(_vm.formConfig[0].type == 'quickDate' && !_vm.formLoading)?_c('el-col',{staticStyle:{"margin-bottom":"10px"},attrs:{"span":24}},[(_vm.formConfig[0].defaultId)?_c('quickDate',{attrs:{"reSet":_vm.reSet,"defaultId":_vm.formConfig[0].defaultId,"showTimes":_vm.formConfig[0].showTimes},on:{"get-day":_vm.getDay}}):_c('quickDate',{attrs:{"reSet":_vm.reSet,"showTimes":_vm.formConfig[0].showTimes},on:{"get-day":_vm.getDay}})],1):_vm._e(),_vm._v(" "),(_vm.type == 'search' && !_vm.formLoading)?_c('el-form',{ref:"editForm",staticClass:"search",attrs:{"model":_vm.editForm,"rules":_vm.rules,"label-width":_vm.labelWidth,"inline":true}},[_vm._l((_vm.formConfig),function(item,index){return _c('el-form-item',{key:index},[(item.type == 'text' || item.type == 'phone' || item.type == 'email' || item.type == 'url' || item.type == 'ip' || item.type == 'account' || item.type == 'textarea')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[(item.type != 'textarea' && item.style)?_c('el-input',{staticClass:"intW",staticStyle:{"width":"250px !important"},attrs:{"size":"small","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}}):_vm._e(),_vm._v(" "),(item.type != 'textarea' && item.style == undefined)?_c('el-input',{staticClass:"intW",class:{width150: item.width150},attrs:{"size":"small","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}}):_vm._e(),_vm._v(" "),(item.type == 'textarea')?_c('el-input',{style:({ width: item.width + 'px' }),attrs:{"type":"textarea","rows":(item.rows || 1),"size":"small","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}}):_vm._e()],1):_vm._e(),_vm._v(" "),(item.type == 'number')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-input',{staticClass:"intW",attrs:{"type":"number","size":"small","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type =='select') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-select',{staticClass:"intW",attrs:{"placeholder":_vm.LANG['请选择'] || '请选择',"size":"small","filterable":item.filterable,"disabled":item.disabled},on:{"change":function($event){return _vm.changeSelect(item.propVal,item.list,_vm.editForm[item.prop],item.relation,item.relationKey,item.linkArr,item.prop)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(option,index){return _c('el-option',{key:index,attrs:{"label":option.label,"value":option.value}})}),1)],1):_vm._e(),_vm._v(" "),((item.type =='selectString') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-select',{staticClass:"intW",attrs:{"placeholder":_vm.LANG['请选择'] || '请选择',"size":"small","filterable":item.filterable,"disabled":item.disabled},on:{"change":function($event){return _vm.changeSelect(item.propVal,item.list,_vm.editForm[item.prop],item.relation,item.relationKey,item.linkArr,item.prop)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(option,index){return _c('el-option',{key:index,attrs:{"label":option.label,"value":option.value}})}),1),_vm._v(" "),_c('el-input',{staticClass:"intW",staticStyle:{"width":"120px"},attrs:{"type":"text","size":"small","placeholder":_vm.LANG[item.Inputplaceholder] || item.Inputplaceholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.propInput]),callback:function ($$v) {_vm.$set(_vm.editForm, item.propInput, $$v)},expression:"editForm[item.propInput]"}})],1):_vm._e(),_vm._v(" "),(item.type == 'dateGroup')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label}},[_c('el-row',{attrs:{"gutter":6}},[_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"prop":item.prop[0].prop}},[_c('datetimepicker',{attrs:{"datekey":item.prop[0].prop,"isEnd":false,"showTime":item.showTime},model:{value:(_vm.editForm[item.prop[0].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[0].prop, $$v)},expression:"editForm[item.prop[0].prop]"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-form-item',{attrs:{"prop":item.prop[1].prop}},[_c('datetimepicker',{attrs:{"datekey":item.prop[1].prop,"isEnd":true,"showTime":item.showTime},model:{value:(_vm.editForm[item.prop[1].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[1].prop, $$v)},expression:"editForm[item.prop[1].prop]"}})],1)],1)],1)],1):_vm._e(),_vm._v(" "),((item.type == 'dateTimeGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"required":(item.required ?item.required: false)}},[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[0].prop}},[_c('datetimepicker',{attrs:{"datekey":item.prop[0].prop,"isEnd":false,"showTime":item.showTime},model:{value:(_vm.editForm[item.prop[0].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[0].prop, $$v)},expression:"editForm[item.prop[0].prop]"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"line textcenter",attrs:{"span":2}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[1].prop}},[_c('datetimepicker',{attrs:{"datekey":item.prop[1].prop,"isEnd":true,"showTime":item.showTime},model:{value:(_vm.editForm[item.prop[1].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[1].prop, $$v)},expression:"editForm[item.prop[1].prop]"}})],1)],1)],1):_vm._e(),_vm._v(" "),(item.type == 'numberGroup')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label}},[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[0].prop}},[_c('el-input',{staticClass:"intW",attrs:{"type":"number","size":"small"},model:{value:(_vm.editForm[item.prop[0].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[0].prop, $$v)},expression:"editForm[item.prop[0].prop]"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":2}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[1].prop}},[_c('el-input',{staticClass:"intW",attrs:{"type":"number","size":"small"},model:{value:(_vm.editForm[item.prop[1].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[1].prop, $$v)},expression:"editForm[item.prop[1].prop]"}})],1)],1)],1):_vm._e(),_vm._v(" "),(item.type == 'datePicker' && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('mydatepick',{attrs:{"datekey":item.prop},on:{"get-date":_vm.getDateval},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type == 'dateWeek') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-date-picker',{attrs:{"type":"week","format":"yyyy 第 WW 周","placeholder":_vm.LANG['选择日期']  || '选择日期'},on:{"change":function($event){return _vm.changeWeek(_vm.editForm[item.prop],item.propOne,item.propTwo)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),(item.type == 'switch')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-switch',{model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),(item.type == 'checkGroup')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-checkbox',{directives:[{name:"show",rawName:"v-show",value:(item.allBtnShow),expression:"item.allBtnShow"}],staticClass:"fl mr10",attrs:{"indeterminate":_vm.isIndeterminate[item.prop]},on:{"change":function($event){return _vm.handleCheckAllChange($event,index,item.prop)}},model:{value:(_vm.checkAll[item.prop]),callback:function ($$v) {_vm.$set(_vm.checkAll, item.prop, $$v)},expression:"checkAll[item.prop]"}},[_vm._v(_vm._s(_vm.LANG['全选'] || '全选')),_c('span',{staticClass:"ml10"},[_vm._v("|")])]),_vm._v(" "),_c('el-checkbox-group',{staticClass:"fl",on:{"change":function($event){return _vm.handleCheckedCitiesChange($event,index,item.prop)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(box,index){return _c('el-checkbox',{key:index,staticClass:"mr10",attrs:{"label":_vm.LANG[box] || box,"name":"type"}},[_vm._v(_vm._s(_vm._f("formatcheckitem")(item.Arr,box))+"\n                    ")])}),1)],1):_vm._e(),_vm._v(" "),(item.type == 'checkbox')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-checkbox',{model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_vm._v(_vm._s(_vm.LANG[item.valLabel] || item.valLabel))])],1):_vm._e(),_vm._v(" "),(item.type == 'radioGroup')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_vm._v("\\\n                "),_c('el-radio-group',{model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(rad,index){return _c('el-radio',{key:index,attrs:{"label":_vm.LANG[rad] || rad}})}),1)],1):_vm._e()],1)}),_vm._v(" "),_c('el-form-item',{staticClass:"ml20"},[_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.doQuery}},[_vm._v(_vm._s(_vm.LANG['查询'] || '查询'))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":function($event){return _vm.resetForm('ok')}}},[_vm._v(_vm._s(_vm.LANG['重置'] || '重置'))])],1)],2):_vm._e(),_vm._v(" "),(_vm.type == 'search' && !_vm.formLoading)?_c('el-col',{staticStyle:{"text-align":"right","margin-top":"-10px"}},[(_vm.showAdd)?_c('el-button',{staticClass:"tRight addBut",attrs:{"type":"primary","size":"small"},on:{"click":_vm.addNew}},[_vm._v(_vm._s(_vm.addText)+"\n        ")]):_vm._e()],1):_vm._e(),_vm._v(" "),(_vm.type=='twoCol' && !_vm.formLoading)?_c('el-dialog',{attrs:{"title":_vm.formTitel,"size":_vm.large},on:{"close":_vm.closeDialog},model:{value:(_vm.formVisible.state),callback:function ($$v) {_vm.$set(_vm.formVisible, "state", $$v)},expression:"formVisible.state"}},[_c('el-form',{ref:"editForm",attrs:{"model":_vm.editForm,"rules":_vm.rules,"label-width":_vm.labelWidth}},_vm._l((_vm.formConfig),function(item,index){return _c('el-col',{key:index,attrs:{"span":(!(item.type == 'dateGroup' || item.type == 'checkGroup' || item.type == 'radioGroup' || item.type =='upload' || item.type =='markdown')?12:24)}},[(item.type == 'text' || item.type == 'phone' || item.type == 'email' || item.type == 'url' || item.type == 'account' || item.type == 'textarea')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[(!(item.type == 'textarea'))?_c('el-input',{attrs:{"placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}}):_vm._e(),_vm._v(" "),(item.type == 'textarea')?_c('el-input',{attrs:{"type":"textarea","rows":(parseInt(item.rows) || 5),"placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}}):_vm._e()],1):_vm._e(),_vm._v(" "),(item.type == 'password')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[(!_vm.showPass)?_c('el-input',{attrs:{"type":"password","disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_c('el-button',{staticClass:"fa fa-eye",attrs:{"slot":"append","aria-hidden":"true","placeholder":_vm.LANG[item.placeholder] || item.placeholder},slot:"append",model:{value:(_vm.showPass),callback:function ($$v) {_vm.showPass=$$v},expression:"showPass"}})],1):_vm._e(),_vm._v(" "),(_vm.showPass)?_c('el-input',{attrs:{"type":"text","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_c('el-button',{staticClass:"fa fa-eye-slash",attrs:{"slot":"append","aria-hidden":"true"},slot:"append"})],1):_vm._e()],1):_vm._e(),_vm._v(" "),(item.type == 'repeatPassword')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[(!_vm.showPass)?_c('el-input',{attrs:{"type":"password","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}}):_vm._e(),_vm._v(" "),(_vm.showPass)?_c('el-input',{attrs:{"type":"text","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}}):_vm._e()],1):_vm._e(),_vm._v(" "),(item.type == 'number')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-input',{attrs:{"type":"number","placeholder":_vm.LANG[item.placeholder] || item.placeholder,"disabled":(item.disabled?true:false)},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),(item.type == 'select')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-select',{attrs:{"placeholder":_vm.LANG['请选择'] || '请选择',"disabled":item.disabled},on:{"change":function($event){return _vm.changeSelect(item.propVal,item.list,_vm.editForm[item.prop],item.relation,item.relationKey,item.linkArr,item.prop)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(option,index){return _c('el-option',{key:index,attrs:{"label":option.label,"value":option.value}})}),1)],1):_vm._e(),_vm._v(" "),(item.type == 'datePicker')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('mydatepick',{attrs:{"datekey":item.prop},on:{"get-date":_vm.getDateval},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),(item.type == 'dateWeek')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-date-picker',{attrs:{"type":"week","placeholder":_vm.LANG['选择周']  || '选择周'},on:{"change":function($event){return _vm.changeWeek(_vm.editForm[item.prop],item.propOne,item.propTwo)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),(item.type == 'switch')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-switch',{model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),(item.type == 'checkbox')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-checkbox',{model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_vm._v(_vm._s(_vm.LANG[item.valLabel] || item.valLabel)+"\n                    ")])],1):_vm._e(),_vm._v(" "),(item.type == 'dateGroup')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"required":""}},[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[0].prop}},[_c('datetimepicker',{attrs:{"datekey":item.prop[0].prop,"isEnd":false,"showTime":item.showTime},model:{value:(_vm.editForm[item.prop[0].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[0].prop, $$v)},expression:"editForm[item.prop[0].prop]"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"line textcenter",attrs:{"span":2}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[1].prop}},[_c('datetimepicker',{attrs:{"datekey":item.prop[1].prop,"isEnd":true,"showTime":item.showTime},model:{value:(_vm.editForm[item.prop[1].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[1].prop, $$v)},expression:"editForm[item.prop[1].prop]"}})],1)],1)],1):_vm._e(),_vm._v(" "),(item.type == 'checkGroup')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-checkbox',{directives:[{name:"show",rawName:"v-show",value:(item.allBtnShow),expression:"item.allBtnShow"}],attrs:{"indeterminate":_vm.isIndeterminate[item.prop]},on:{"change":function($event){return _vm.handleCheckAllChange($event,index,item.prop)}},model:{value:(_vm.checkAll[item.prop]),callback:function ($$v) {_vm.$set(_vm.checkAll, item.prop, $$v)},expression:"checkAll[item.prop]"}},[_vm._v("\n                        "+_vm._s(_vm.LANG['全选'] || '全选')+"\n                    ")]),_vm._v(" "),_c('el-checkbox-group',{on:{"change":function($event){return _vm.handleCheckedCitiesChange($event,index,item.prop)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(box,index){return _c('el-checkbox',{key:index,attrs:{"label":_vm.LANG[box] || box,"name":"type"}},[_vm._v(_vm._s(_vm._f("formatcheckitem")(item.Arr,box))+"\n                        ")])}),1)],1):_vm._e(),_vm._v(" "),(item.type == 'radioGroup')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-radio-group',{model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(rad,index){return _c('el-radio',{key:index,attrs:{"label":_vm.LANG[rad] || rad}})}),1)],1):_vm._e(),_vm._v(" "),(item.type =='upload')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('upload',{attrs:{"keys":item.prop},on:{"doUpload":_vm.doUpload}})],1):_vm._e(),_vm._v(" "),(item.type =='markdown' )?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label}},[_c('markdownEdit',{attrs:{"id":item.prop,"config":item.config},on:{"getContentLength":_vm.getconLength},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e()],1)}),1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"formCancel",on:{"click":function($event){return _vm.resetForm('no')}}},[_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))]),_vm._v(" "),_c('el-button',{staticClass:"formSave",attrs:{"type":"primary"},on:{"click":_vm.saveForm}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])],1)],1):_vm._e(),_vm._v(" "),(_vm.type === 'pageForm')?_c('el-form',{ref:"editForm",attrs:{"model":_vm.editForm,"rules":_vm.rules,"label-width":_vm.labelWidth}},[_vm._l((_vm.formConfig),function(item,index){return _c('div',{key:index},[((item.type == 'text' || item.type == 'phone' || item.type == 'email' || item.type == 'url' || item.type == 'textarea' || item.type == 'ip') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[(!(item.type == 'textarea'))?_c('el-input',{model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}}):_vm._e(),_vm._v(" "),(item.type == 'textarea')?_c('el-input',{attrs:{"type":"textarea","rows":(parseInt(item.rows) || 5)},on:{"change":function($event){return _vm.changeUrl(item.prop, item.domainType)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}}):_vm._e(),_vm._v(" "),(item.prompt)?_c('span',{staticClass:"help_gray"},[_vm._v(_vm._s(item.prompt))]):_vm._e()],1):_vm._e(),_vm._v(" "),(item.type === 'label')?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label}},[_c('span',{staticClass:"help_gray"},[_vm._v(_vm._s(_vm.editForm[item.prop]))])]):_vm._e(),_vm._v(" "),(item.type == 'textarea')?_c('el-form-item',{attrs:{"label":"域名详情"}},[(_vm.wwwList.length && _vm.wwwList.length > 0 && item.domainType === 'front')?_c('el-form-item',_vm._l((_vm.wwwList),function(item,key){return _c('el-row',{key:key},[_c('el-collapse',{class:{mt10:key>0},attrs:{"accordion":""}},[_c('el-collapse-item',{attrs:{"title":item.url,"name":key}},[_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple"},[_vm._v(_vm._s(_vm.LANG['用途'] || '用途'))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple"},[_vm._v(_vm._s(_vm.LANG['域名'] || '域名'))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple"},[_vm._v(_vm._s(_vm.LANG['指向域名'] || '指向域名'))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.master_wwwlabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.master_wwwUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.master_wwwUrllocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.wwwlabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.wwwUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.wwwUrllocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.mlabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.mUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.mUrllocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.agentLabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.agentUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.agentUrllocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.apilabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.apiUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.apiUrllocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.resLabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.res))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.reslocalhost))])])])])],1)],1)],1)}),1):_vm._e(),_vm._v(" "),(_vm.wwwList.length > 0 && item.domainType === 'end')?_c('el-form-item',_vm._l((_vm.wwwList),function(item,key){return _c('el-row',{key:key},[_c('el-collapse',{class:{mt10:key>0},attrs:{"accordion":""}},[_c('el-collapse-item',{attrs:{"title":item.url,"name":key}},[_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple"},[_vm._v(_vm._s(_vm.LANG['用途'] || '用途'))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple"},[_vm._v(_vm._s(_vm.LANG['域名'] || '域名'))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple"},[_vm._v(_vm._s(_vm.LANG['指向域名'] || '指向域名'))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.adminlabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.adminUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.adminlocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.cpilabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.cpiUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.cpilocalhost))])])])]),_vm._v(" "),_c('el-col',{staticClass:"bmBorder",attrs:{"span":24}},[_c('div',{staticClass:"grid-content tCent"},[_c('ul',[_c('li',{staticClass:"w20 fl bg-purple-light"},[_vm._v(_vm._s(item.rpiLabel))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.rpiUrl))]),_vm._v(" "),_c('li',{staticClass:"w40 fl bg-purple-light"},[_vm._v(_vm._s(item.rpilocalhost))])])])])],1)],1)],1)}),1):_vm._e()],1):_vm._e(),_vm._v(" "),((item.type == 'password') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[(!_vm.showPass)?_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showpass},slot:"append"},[_c('i',{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])],1):_vm._e(),_vm._v(" "),(_vm.showPass)?_c('el-input',{attrs:{"type":"text"},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showpass},slot:"append"},[_c('i',{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"}})])],1):_vm._e()],1):_vm._e(),_vm._v(" "),((item.type == 'repeatPassword') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[(!_vm.showPass)?_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showpass},slot:"append"},[_c('i',{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])],1):_vm._e(),_vm._v(" "),(_vm.showPass)?_c('el-input',{attrs:{"type":"text"},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showpass},slot:"append"},[_c('i',{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"}})])],1):_vm._e()],1):_vm._e(),_vm._v(" "),((item.type == 'button') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-button',{on:{"click":function($event){return _vm.doButtonClick(item)}}},[_vm._v(_vm._s(item.text))]),_vm._v(" "),(_vm.editForm[item.prop])?_c('img',{staticStyle:{"margin-left":"10px","vertical-align":"top"},attrs:{"src":_vm.editForm[item.prop],"alt":"","height":"40px"}}):_vm._e()],1):_vm._e(),_vm._v(" "),((item.type == 'number') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type == 'select') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-select',{attrs:{"placeholder":_vm.LANG['请选择'] || '请选择',"disabled":item.disabled},on:{"change":function($event){return _vm.changeSelect(item.propVal,item.list,_vm.editForm[item.prop],item.relation,item.relationKey,item.linkArr,item.prop)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(option,index){return _c('el-option',{key:index,attrs:{"label":option.label,"value":option.value}})}),1)],1):_vm._e(),_vm._v(" "),((item.type == 'dateGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"required":""}},[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[0].prop}},[_c('datetimepicker',{attrs:{"datekey":item.prop[0].prop,"isEnd":false,"showTime":item.showTime},model:{value:(_vm.editForm[item.prop[0].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[0].prop, $$v)},expression:"editForm[item.prop[0].prop]"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"line textcenter",attrs:{"span":2}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[1].prop}},[_c('datetimepicker',{attrs:{"datekey":item.prop[1].prop,"isEnd":false,"showTime":item.showTime},model:{value:(_vm.editForm[item.prop[1].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[1].prop, $$v)},expression:"editForm[item.prop[1].prop]"}})],1)],1)],1):_vm._e(),_vm._v(" "),((item.type == 'numberGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label}},[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[0].prop}},[_c('el-input',{staticClass:"intW",attrs:{"type":"number","size":"small"},model:{value:(_vm.editForm[item.prop[0].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[0].prop, $$v)},expression:"editForm[item.prop[0].prop]"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":2}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":item.prop[1].prop}},[_c('el-input',{staticClass:"intW",attrs:{"type":"number","size":"small"},model:{value:(_vm.editForm[item.prop[1].prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop[1].prop, $$v)},expression:"editForm[item.prop[1].prop]"}})],1)],1)],1):_vm._e(),_vm._v(" "),((item.type == 'datePicker') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('mydatepick',{attrs:{"datekey":item.prop},on:{"get-date":_vm.getDateval},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type == 'dateWeek') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-date-picker',{attrs:{"type":"week","placeholder":_vm.LANG['选择周']  || '选择周'},on:{"change":function($event){return _vm.changeWeek(_vm.editForm[item.prop],item.propOne,item.propTwo)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type == 'switch') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-switch',{model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type == 'checkGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-checkbox',{directives:[{name:"show",rawName:"v-show",value:(item.allBtnShow),expression:"item.allBtnShow"}],attrs:{"indeterminate":_vm.isIndeterminate[item.prop]},on:{"change":function($event){return _vm.handleCheckAllChange($event,index,item.prop)}},model:{value:(_vm.checkAll[item.prop]),callback:function ($$v) {_vm.$set(_vm.checkAll, item.prop, $$v)},expression:"checkAll[item.prop]"}},[_vm._v("\n                    "+_vm._s(_vm.LANG['全选'] || '全选')+"\n                ")]),_vm._v(" "),_c('el-checkbox-group',{on:{"change":function($event){return _vm.handleCheckedCitiesChange($event,index,item.prop)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(box,index){return _c('el-checkbox',{key:index,attrs:{"label":_vm.LANG[box] || box,"name":"type"}},[_vm._v(_vm._s(_vm._f("formatcheckitem")(item.Arr,box))+"\n                    ")])}),1)],1):_vm._e(),_vm._v(" "),((item.type == 'checkbox') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-checkbox',{model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},[_vm._v(_vm._s(_vm.LANG[item.valLabel] || item.valLabel))])],1):_vm._e(),_vm._v(" "),((item.type == 'radioGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('el-radio-group',{on:{"change":function($event){return _vm.changeRadio(item.checkIndex,item.arr,_vm.editForm[item.prop],item.propkey)}},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}},_vm._l((item.list),function(rad,index){return _c('el-radio',{key:index,attrs:{"label":_vm.LANG[rad.value] || rad.value}},[_vm._v("\n                        "+_vm._s(rad.label)+"\n                    ")])}),1)],1):_vm._e(),_vm._v(" "),((item.type =='markdown') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label}},[_c('markdownEdit',{attrs:{"id":item.prop,"config":item.config},on:{"getContentLength":_vm.getconLength},model:{value:(_vm.editForm[item.prop]),callback:function ($$v) {_vm.$set(_vm.editForm, item.prop, $$v)},expression:"editForm[item.prop]"}})],1):_vm._e(),_vm._v(" "),((item.type =='upload') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) :true))?_c('el-form-item',{attrs:{"label":_vm.LANG[item.label] || item.label,"prop":item.prop}},[_c('upload',{attrs:{"keys":item.prop},on:{"doUpload":_vm.doUpload}})],1):_vm._e()],1)}),_vm._v(" "),_c('el-form-item',{staticClass:"ml20"},[_c('el-button',{staticClass:"formCancel",attrs:{"size":"small"},on:{"click":function($event){return _vm.resetForm('no')}}},[_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":function($event){return _vm.saveForm('save')}}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])],1)],2):_vm._e()],1):_vm._e()}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/formEdit.vue
function injectStyle (context) {
  __webpack_require__(404)
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
  formEdit["a" /* default */],
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_formEdit = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/quickDate.vue
//
//
//
//
//
//
//
/* harmony default export */ var quickDate = ({
  data() {
    return {
      LANG,
      //玩法选中状态
      playType: [],
      //开始时间
      sDate: "",
      //结束时间
      eDate: "",
      //快捷日期数据
      quickDate: [{
        key: "yesterday",
        text: '昨日',
        isActive: false,
        id: "1"
      }, {
        key: "today",
        text: '今日',
        isActive: false,
        id: "2"
      }, {
        key: "thisweek",
        text: '本周',
        isActive: false,
        id: "3"
      }, {
        key: 'lastweek',
        text: '上周',
        isActive: false,
        id: "4"
      }, {
        key: "thismonth",
        text: '本月',
        isActive: false,
        id: "5"
      }, {
        key: "lastmonth",
        text: '上月',
        isActive: false,
        id: "6"
      }]
    };
  },

  props: {
    reSet: false,
    defaultId: {
      type: String
    },
    showTimes: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isReset: function () {
      if (this.reSet) {
        this.resetBtn();
      }

      return false;
    }
  },
  methods: {
    //获取日期
    getDate(dates) {
      var dd = new Date(sessionStorage.sysTime);
      dd.setDate(dd.getDate() + dates);
      var y = dd.getFullYear();
      var m = this.formatday(dd.getMonth() + 1);
      var d = this.formatday(dd.getDate());
      return y + "-" + m + "-" + d;
    },

    //获取周的天数
    getmonday() {
      var d = new Date(sessionStorage.sysTime);
      var year = d.getFullYear();
      var month = this.formatday(d.getMonth() + 1);
      var date = this.formatday(d.getDate()); // 周

      var day = d.getDay();
      var monday = day != 0 ? day - 1 : 6; // 本周一与当前日期相差的天数

      return monday;
    },

    //获取月
    getMonth(type, months) {
      var d = new Date(sessionStorage.sysTime);
      var year = d.getFullYear();
      var month = this.formatday(d.getMonth() + 1);

      if (months != 0) {
        // 如果本月为12月，年份加1，月份为1，否则月份加1。
        if (month == 12 && months > 0) {
          year++;
          month = 1;
        } else if (month == 1 && months < 0) {
          year--;
          month = 12;
        } else {
          month = parseInt(month) + parseInt(months);
        }
      }

      var date = d.getDate();
      var firstday = year + "-" + (months === 0 ? this.formatday(month) : this.formatday(month)) + "-01";
      var lastday = "";

      if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
        lastday = year + "-" + (months === 0 ? month : this.formatday(month)) + "-" + 31;
      } else if (month == 2) {
        // 判断是否为闰年（能被4整除且不能被100整除 或 能被100整除且能被400整除）
        if (year % 4 == 0 && year % 100 != 0 || year % 100 == 0 && year % 400 == 0) {
          lastday = year + "-" + (months === 0 ? month : this.formatday(month)) + "-" + 29;
        } else {
          lastday = year + "-" + (months === 0 ? month : this.formatday(month)) + "-" + 28;
        }
      } else {
        lastday = year + "-" + (months === 0 ? month : this.formatday(month)) + "-" + 30;
      }

      var day = "";

      if (type == "s") {
        day = firstday;
      } else {
        day = lastday;
      }

      return day;
    },

    //获取年
    getYears(type, years) {
      var d = new Date(sessionStorage.sysTime);
      var year = d.getFullYear();
      var fd = year + years + "-01-01";
      var ed = year + years + "-12-31";
      var yr = "";

      if (type == "s") {
        yr = fd;
      } else {
        yr = ed;
      }

      return yr;
    },

    //按钮重置
    resetBtn(key) {
      let quickDate = this.quickDate;

      for (let i in quickDate) {
        if (key && quickDate[i].key == key) {
          quickDate[i].isActive = true;
        } else {
          quickDate[i].isActive = false;
        }
      }
    },

    // 小于10拼上0
    formatday(i) {
      return (parseInt(i) < 10 ? '0' : '') + parseInt(i);
    },

    //日期计算
    change(str) {
      this.resetBtn(str);

      switch (str) {
        //昨天
        case 'yesterday':
          this.sDate = this.showTimes ? this.getDate(-1) + ' 00:00:00' : this.getDate(-1);
          this.eDate = this.showTimes ? this.getDate(-1) + ' 23:59:59' : this.getDate(-1);
          this.returnDate();
          break;
        //今天

        case 'today':
          this.sDate = this.showTimes ? this.getDate(0) + ' 00:00:00' : this.getDate(0);
          this.eDate = this.showTimes ? this.getDate(0) + ' 23:59:59' : this.getDate(0);
          this.returnDate();
          break;
        //本周

        case 'thisweek':
          this.sDate = this.showTimes ? this.getDate(-this.getmonday()) + ' 00:00:00' : this.getDate(-this.getmonday());
          this.eDate = this.showTimes ? this.getDate(-this.getmonday() + 6) + ' 23:59:59' : this.getDate(-this.getmonday() + 6);
          this.returnDate();
          break;
        //上周

        case 'lastweek':
          this.sDate = this.showTimes ? this.getDate(-this.getmonday() - 7) + ' 00:00:00' : this.getDate(-this.getmonday() - 7);
          this.eDate = this.showTimes ? this.getDate(-this.getmonday() - 1) + ' 23:59:59' : this.getDate(-this.getmonday() - 1);
          this.returnDate();
          break;
        //本月

        case 'thismonth':
          this.sDate = this.showTimes ? this.getMonth("s", 0) + ' 00:00:00' : this.getMonth("s", 0);
          this.eDate = this.showTimes ? this.getMonth("e", 0) + ' 23:59:59' : this.getMonth("e", 0);
          this.returnDate();
          break;
        //上月

        case 'lastmonth':
          this.sDate = this.showTimes ? this.getMonth("s", -1) + ' 00:00:00' : this.getMonth("s", -1);
          this.eDate = this.showTimes ? this.getMonth("e", -1) + ' 23:59:59' : this.getMonth("e", -1);
          this.returnDate();
          break;
        //本年

        case 'thisyear':
          this.sDate = this.showTimes ? this.getYears("s", 0) + ' 00:00:00' : this.getYears("s", 0);
          this.eDate = this.showTimes ? this.getYears("e", -1) + ' 23:59:59' : this.getYears("e", -1);
          this.returnDate();
          break;
      }
    },

    //返回选中数据
    returnDate() {
      this.$emit("get-day", {
        "sday": this.sDate,
        "eday": this.eDate
      });
    },

    init() {
      if (this.defaultId) {
        let data = this.quickDate[this.defaultId - 1];
        this.change(data.key, this.defaultId - 1);
      }
    }

  },

  mounted() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6ed2668b","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/quickDate.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._l((_vm.quickDate),function(item,key){return _c('el-button',{key:item.id,class:{ btn_active: item.isActive },attrs:{"size":"small","plain":true,"type":"primary"},on:{"click":function($event){return _vm.change(item.key,key)}}},[_vm._v(_vm._s(_vm.LANG[item.text] || item.text))])}),_vm._v(" "),_c('span',{staticStyle:{"display":"none"}},[_vm._v(_vm._s(_vm.isReset))])],2)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/quickDate.vue
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
  quickDate,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_quickDate = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/changeAll.vue
//
//
//
//
//
//
//
//
/* harmony default export */ var changeAll = ({
  data() {
    return {
      //选中值
      checkVal: [],
      //是否已全选
      checkAll: false,
      //全选样式
      isIndeterminate: true
    };
  },

  props: {
    //选择数据
    checkOptions: Array,
    //默认选中值
    checkedval: {
      type: Object,
      default: {
        checked: []
      }
    },
    sReset: Boolean
  },
  watch: {
    sReset: function (newVal) {
      if (newVal === true) {
        this.changeReset();
      }
    }
  },
  methods: {
    // 初始化
    init() {
      if (this.checkedval.checked.length > 0) {
        for (let i in this.checkedval) {
          this.checkVal.push(this.checkedval[i]);
          this.checkedval.checked.push(this.checkedval[i]);
        }

        this.checkAll = true;
      } else {
        this.checkVal = [];
        this.checkedval.checked = [];
        this.checkAll = false;
        this.isIndeterminate = false;
      }
    },

    // 全选状态
    checkallState() {
      let _this = this;

      if (this.checkOptions.length === this.checkedval.checked.length && this.checkOptions.length > 0) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
    },

    //全选按钮事件
    handleCheckAllChange(e) {
      let event = window.event || e;
      let obj = event.srcElement ? event.srcElement : event.target;
      let temp = [];

      if (this.checkOptions.length && this.checkOptions[0].value) {
        this.checkOptions.forEach(item => {
          temp.push(item.value);
        });
      } else {
        temp = this.checkOptions;
      }

      this.checkVal = obj.checked ? temp : [];
      this.checkedval.checked = obj.checked ? temp : [];
      this.isIndeterminate = false;
      this.$emit('change-option', {
        "item": this.checkedval.checked
      });
    },

    //checkbox点击事件
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.checkOptions.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.checkOptions.length;
      this.$emit('change-option', {
        "item": this.checkedval.checked
      });
    },

    //重置数据
    changeReset() {
      this.checkVal = [];
      this.checkedval.checked = [];
      this.checkAll = false;
      this.isIndeterminate = false;
    }

  },

  mounted() {
    this.init();
  },

  updated() {
    let _this = this;

    this.$nextTick(function () {
      _this.checkallState();
    });
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7c01861b","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/changeAll.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"changeAll"}},[_c('el-checkbox',{attrs:{"indeterminate":_vm.isIndeterminate},on:{"change":_vm.handleCheckAllChange},model:{value:(_vm.checkAll),callback:function ($$v) {_vm.checkAll=$$v},expression:"checkAll"}},[_vm._v("全选")]),_vm._v(" "),_c('el-checkbox-group',{staticClass:"mt15",on:{"change":_vm.handleCheckedCitiesChange},model:{value:(_vm.checkedval.checked),callback:function ($$v) {_vm.$set(_vm.checkedval, "checked", $$v)},expression:"checkedval.checked"}},_vm._l((_vm.checkOptions),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.value || item}},[_vm._v(_vm._s(item.label || item))])}),1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/changeAll.vue
function injectStyle (context) {
  __webpack_require__(230)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c01861b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  changeAll,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_changeAll = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _UEditor_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(213);
/* harmony import */ var _changeAll_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(234);
/* harmony import */ var _quickDate_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(223);
/* harmony import */ var _inputGroup_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(545);
/* harmony import */ var _radioGroup_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(546);
/* harmony import */ var _upload_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(209);
/* harmony import */ var _dateTimePicker_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(208);
/* harmony import */ var _myDatePicker_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(240);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










vue__WEBPACK_IMPORTED_MODULE_0__["default"].filter('formatcheckitem', (arrs, val) => {
  if (!val || arrs.length === undefined || arrs.length === 0) {
    return '';
  }

  for (let k = 0; k < arrs.length; k++) {
    if (arrs[k].value && arrs[k].value === val) {
      return arrs[k].label;
    }
  }

  return val;
});
/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      LANG,
      checks: [],
      //显示密码
      showPass: false,
      wwwList: [],
      //全选按钮状态
      isIndeterminate: {},
      checkAll: {},
      //文件上传数组索引
      nowindex: -1,
      //选中值
      checkVal: [],
      checkKeys: [],
      //FORM数据
      editForm: {},
      rules: {},
      reSet: false,
      inputRset: false,
      //日期字段 KEY
      dateKey: [],
      dateGroupKeys: {},
      //单个时间字段
      datePickerKey: [],
      formLoading: false,
      updated: false,
      imgInit: false,
      numberMax: -1,
      numberMin: -1,
      // dateIimeGroupKey
      dateIimeGroupKeys: {},
      // markdownKey
      markdownKey: {},
      showEditFrom: true,
      nowcontentNum: 0,
      // 查询数据克隆
      cloneQuery: {},
      domainkeys: {}
    };
  },

  props: {
    //textarea 长度是否要做验证
    textareaTest: Object,
    //markdown 长度是否要做验证
    markdownTest: Object,
    //弹窗台头
    formTitel: {
      type: String,
      default: ""
    },
    //弹窗是否显示
    formVisible: {
      type: Object,
      default: function () {
        return {
          state: false
        };
      }
    },
    formType: String,
    //弹窗大小
    size: {
      //tiny/small/large/full
      type: String,
      default: "large"
    },
    //弹窗上配置
    formConfig: Array,
    //表格LABEL宽度
    labelWidth: {
      type: String,
      default: "100px"
    },
    type: {
      type: String,
      default: "default"
    },
    isEdit: {
      type: Object,
      default: {
        state: false
      }
    },
    showAdd: {
      type: Boolean,
      default: true
    },
    addText: {
      type: String,
      default: LANG['新增'] || '新增'
    },
    // 修改表单值  KEY和值中间用逗号隔开
    updateKeys: "",
    updateDate: "",
    initDate: {
      type: Boolean,
      default: false
    },
    // 拼接DOMAIN
    dnsUrl: {
      type: String,
      default: ""
    },
    // 是否重置FORM
    formReset: {
      type: Boolean,
      default: false
    },
    // 是否自动修改FORM值
    defaultForm: {
      type: Boolean,
      default: false
    }
  },
  components: {
    markdownEdit: _UEditor_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"],
    changeAll: _changeAll_vue__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
    inputGroup: _inputGroup_vue__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    quickDate: _quickDate_vue__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],
    radioGroup: _radioGroup_vue__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    upload: _upload_vue__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    mydatepick: _dateTimePicker_vue__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    datetimepicker: _dateTimePicker_vue__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    datepick: _myDatePicker_vue__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]
  },
  methods: {
    init() {
      let formConfig = this.formConfig;
      let editForm = this.editForm = {};
      let rules = this.rules;
      let checkAll = this.checkAll;
      let isIndeterminate = this.isIndeterminate;
      let checkKeys = this.checkKeys = [];
      let cloneQuery = this.cloneQuery = {};
      this.markdownKey = {};

      let _this = this;

      if (this.formVisible.state) {
        this.formLoading = true;
      }

      if (this.formType == "add") {
        FORMVAL([], this.formConfig);
      }

      this.datePickerKey = [];
      this.imgInit = true;
      this.updated = true;
      this.dateKey = [];
      let dateIimeGroupKeys = this.dateIimeGroupKeys = {};
      this.dateGroupKeys = {};

      if (formConfig) {
        for (let i in formConfig) {
          if (formConfig[i].type != 'dateGroup' && formConfig[i].type != 'numberGroup' && formConfig[i].type != "quickDate" && formConfig[i].type != 'select' && formConfig[i].type != 'checkGroup' && formConfig[i].type != "dateWeek" && formConfig[i].type != 'datePicker' && formConfig[i].type != "textarea" && formConfig[i].type != "selectString" && formConfig[i].type != 'remind' && formConfig[i].type != 'dateTimeGroup' && formConfig[i].type != 'markdown' && formConfig[i].type != 'datePickernotime') {
            this.$set(editForm, formConfig[i].prop, formConfig[i].value);
            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value);
          } else if (formConfig[i].type == 'remind') {} else if (formConfig[i].type == 'checkbox') {
            this.$set(editForm, formConfig[i].prop, formConfig[i].value || false);
            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value || false);
          } else if (formConfig[i].type == 'markdown') {
            formConfig[i].domname = 'markdown' + i;
            formConfig[i].showdom = true;
            this.markdownKey[formConfig[i].prop] = formConfig[i].prop;
            this.$set(editForm, formConfig[i].prop, formConfig[i].value);
            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value);
          } else if (formConfig[i].type == "textarea") {
            this.$set(editForm, formConfig[i].prop, formConfig[i].value);
            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value);
            this.changeUrl(formConfig[i].prop, formConfig[i].domainType);
          } else if (formConfig[i].type == 'select') {
            this.$set(editForm, formConfig[i].prop, formConfig[i].value);
            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value);

            if (formConfig[i].propVal) {
              let arr = formConfig[i].list || [];
              let nowv = "";

              for (let k in arr) {
                if (arr[k].value && formConfig[i].value == arr[k].value) {
                  nowv = arr[k].label || "";
                }
              }

              this.$set(editForm, formConfig[i].propVal, nowv);
              this.$set(cloneQuery, formConfig[i].propVal, nowv);
            }
          } else if (formConfig[i].type == "selectString") {
            this.$set(editForm, formConfig[i].prop, formConfig[i].value);
            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value);

            if (formConfig[i].propInput) {
              this.$set(editForm, formConfig[i].propInput, '');
              this.$set(cloneQuery, formConfig[i].propInput, '');
            }
          } else if (formConfig[i].type == 'datePicker' || formConfig[i].type == 'datePickernotime') {
            let dateKey = this.dateKey,
                value = '';
            dateKey.push(formConfig[i]["prop"]);

            if (this.type === 'search' && this.initDate === false) {
              value = sessionStorage.sysTime + ' 00:00:00';
            } else {
              if (formConfig[i]["prop"] && formConfig[i]["value"].length > 7 && !/0000-/.test(formConfig[i]["value"]) && !/NaN-NaN/.test(formConfig[i]["value"])) {
                let object = new Date(formConfig[i]["prop"][0]["value"]);
                value = object instanceof Date ? FORMATDAT(formConfig[i]["value"], 'yyyy-MM-dd HH:mm:ss') : '';
              }
            }

            this.$set(editForm, formConfig[i]["prop"], value);
            this.$set(cloneQuery, formConfig[i]["prop"], value);
          } else if (formConfig[i].type == 'dateGroup' || formConfig[i].type == 'numberGroup' || formConfig[i].type == 'dateTimeGroup') {
            let value1 = "";
            let value2 = "";

            if (formConfig[i].type == 'dateGroup' || formConfig[i].type == 'dateTimeGroup') {
              let dateKey = this.dateKey;
              dateKey.push(formConfig[i]["prop"][0]["prop"]);
              dateKey.push(formConfig[i]["prop"][1]["prop"]);
              this.dateIimeGroupKeys[formConfig[i]["prop"][1]["prop"]] = formConfig[i]["prop"][0]["prop"];

              if (this.type === 'search' && this.initDate === false) {
                if (this.defaultForm) {
                  if (formConfig[i]["prop"][0]["value"]) {
                    let object = new Date(formConfig[i]["prop"][0]["value"]);
                    value1 = object instanceof Date ? FORMATDAT(formConfig[i]["prop"][0]["value"], 'yyyy-MM-dd HH:mm:ss') : sessionStorage.sysTime + ' 00:00:00';
                  }

                  if (formConfig[i]["prop"][1]["value"]) {
                    let object = new Date(formConfig[i]["prop"][1]["value"]);
                    value2 = object instanceof Date ? FORMATDAT(formConfig[i]["prop"][1]["value"], 'yyyy-MM-dd HH:mm:ss') : sessionStorage.sysTime + ' 23:59:59';
                  }
                } else {
                  value1 = sessionStorage.dateTimeStart;
                  value2 = sessionStorage.dateTimeEnd;
                }
              } else if (formConfig[i].type == 'dateTimeGroup' || formConfig[i].type == 'dateGroup') {
                if (formConfig[i]["prop"][0]["value"] && formConfig[i]["prop"][0]["value"].length > 7 && !/0000-/.test(formConfig[i]["prop"][0]["value"]) && !/NaN-NaN/.test(formConfig[i]["prop"][0]["value"])) {
                  let object = new Date(formConfig[i]["prop"][0]["value"]);
                  value1 = object instanceof Date ? FORMATDAT(formConfig[i]["prop"][0]["value"], 'yyyy-MM-dd HH:mm:ss') : '';
                } else {
                  value1 = '';
                }

                if (formConfig[i]["prop"][1]["value"] && formConfig[i]["prop"][1]["value"].length > 7 && !/0000-/.test(formConfig[i]["prop"][0]["value"]) && !/NaN-NaN/.test(formConfig[i]["prop"][0]["value"])) {
                  let object = new Date(formConfig[i]["prop"][1]["value"]);
                  value2 = object instanceof Date ? FORMATDAT(formConfig[i]["prop"][1]["value"], 'yyyy-MM-dd HH:mm:ss') : '';
                } else {
                  value2 = '';
                }
              }

              this.$set(editForm, formConfig[i]["prop"][0].prop, value1);
              this.$set(editForm, formConfig[i]["prop"][1].prop, value2);
              this.$set(cloneQuery, formConfig[i]["prop"][0].prop, value1);
              this.$set(cloneQuery, formConfig[i]["prop"][1].prop, value2);
            } else {
              value1 = formConfig[i]["prop"][0].value;
              value2 = formConfig[i]["prop"][1].value;
              this.$set(editForm, formConfig[i]["prop"][0].prop, value1);
              this.$set(editForm, formConfig[i]["prop"][1].prop, value2);
              this.$set(cloneQuery, formConfig[i]["prop"][0].prop, value1);
              this.$set(cloneQuery, formConfig[i]["prop"][1].prop, value2);
            }
          } else if (formConfig[i].type == 'checkGroup') {
            this.checkKeys.push(formConfig[i].prop);
            this.$set(checkKeys, formConfig[i].prop, formConfig[i].prop);
            this.$set(isIndeterminate, formConfig[i].prop, true);
            this.$set(checkAll, formConfig[i].prop, true);
            this.$set(editForm, formConfig[i].prop, formConfig[i].value);
            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value);
          } else if (formConfig[i].type == "dateWeek") {
            this.$set(editForm, formConfig[i].prop, new Date(formConfig[i].value));
            this.$set(editForm, formConfig[i].propOne, "");
            this.$set(editForm, formConfig[i].propTwo, "");
            this.$set(cloneQuery, formConfig[i].prop, new Date(formConfig[i].value));
            this.$set(cloneQuery, formConfig[i].propOne, "");
            this.$set(cloneQuery, formConfig[i].propTwo, "");
          }

          if (formConfig[i].type == 'email' || formConfig[i].type == 'url' || formConfig[i].type == 'phone' || formConfig[i].type == 'repeatPassword' || formConfig[i].type == 'ip' || formConfig[i].fns) {
            rules[formConfig[i].prop] = [];
          }

          if (formConfig[i].rules || formConfig[i].required || formConfig[i].fns || formConfig[i].moreZero || formConfig[i].integer) {
            rules[formConfig[i].prop] = [];

            for (let key in formConfig[i].rules) {
              if (formConfig[i].rules[key].require && formConfig[i].type != 'select' && formConfig[i].type != 'dateGroup' && formConfig[i].type != 'checkGroup' && formConfig[i].type != "radioGroup" && formConfig[i].type != "upload" && formConfig[i].type != "textarea" && formConfig[i].type != 'datePicker' && formConfig[i].type != 'dateTimeGroup' && formConfig[i].type != 'datePickernotime') {
                rules[formConfig[i].prop].push({
                  required: true,
                  message: (LANG['请输入'] || '请输入') + formConfig[i].label,
                  trigger: 'blur'
                });
              } else if (formConfig[i].rules[key].require && (formConfig[i].type == 'datePicker' || formConfig[i].type == 'datePickernotime')) {
                rules[formConfig[i].prop].push({
                  required: true,
                  message: LANG['请选择时间'] || '请选择时间',
                  trigger: 'change'
                });
              } else if (formConfig[i].rules[key].require && formConfig[i].type == 'select') {
                rules[formConfig[i].prop].push({
                  required: true,
                  message: (LANG['请输入'] || '请输入') + formConfig[i].label,
                  trigger: 'change'
                });
              } else if (formConfig[i].rules[key].require && formConfig[i].type == "textarea") {
                if (formConfig[i].rulesType === "urls") {
                  rules[formConfig[i].prop].push({
                    required: true,
                    message: (LANG['请输入'] || '请输入') + formConfig[i].label,
                    trigger: 'blur'
                  });
                  rules[formConfig[i].prop].push({
                    validator: this.validatorUrls,
                    trigger: 'change'
                  });
                } else {
                  rules[formConfig[i].prop].push({
                    required: true,
                    message: (LANG['请输入'] || '请输入') + formConfig[i].label,
                    trigger: 'blur'
                  });
                }
              } else if (formConfig[i].rules[key].require && (formConfig[i].type == 'dateGroup' || formConfig[i].type == 'dateTimeGroup')) {
                rules[formConfig[i]["prop"][0].prop] = [];
                rules[formConfig[i]["prop"][1].prop] = [];
                rules[formConfig[i]["prop"][0].prop].push({
                  required: true,
                  message: (LANG['请选择'] || '请选择') + formConfig[i]["prop"][0].label,
                  trigger: 'blur,change'
                });
                rules[formConfig[i]["prop"][1].prop].push({
                  required: true,
                  message: (LANG['请选择'] || '请选择') + formConfig[i]["prop"][1].label,
                  trigger: 'blur,change'
                });
                rules[formConfig[i]["prop"][1].prop].push({
                  validator: this.validatorTimeEnd,
                  trigger: 'blur,change'
                });
              } else if (formConfig[i].rules[key].require && formConfig[i].type == 'checkGroup') {
                rules[formConfig[i].prop].push({
                  type: 'array',
                  required: true,
                  message: (LANG['请至少选择一项'] || '请至少选择一项') + formConfig[i].label,
                  trigger: 'change'
                });
              } else if (formConfig[i].rules[key].require && formConfig[i].type == 'radioGroup') {
                rules[formConfig[i].prop].push({
                  required: true,
                  message: (LANG['请至少选择一项'] || '请至少选择一项') + formConfig[i].label,
                  trigger: 'change'
                });
              } else if (formConfig[i].type == "upload") {
                rules[formConfig[i].prop].push({
                  type: 'array',
                  required: true,
                  message: (LANG['请上传图片'] || '请上传图片') + formConfig[i].label,
                  trigger: 'change'
                });
              }

              if (formConfig[i].rules[key].min != undefined && formConfig[i].rules[key].max != undefined && formConfig[i].type != 'select') {
                rules[formConfig[i].prop].push({
                  min: formConfig[i].rules[key]['min'],
                  max: formConfig[i].rules[key].max,
                  message: (LANG['输入应该在'] || '输入应该在') + formConfig[i].rules[key].min + '个字符和' + formConfig[i].rules[key].max + '个字符之间',
                  trigger: "blur"
                });
              }

              if (formConfig[i].rules[key].min != undefined && formConfig[i].rules[key].max == undefined && formConfig[i].type != 'select') {
                rules[formConfig[i].prop].push({
                  min: formConfig[i].rules[key]['min'],
                  message: (LANG['输入不能少于'] || '输入不能少于') + formConfig[i].rules[key].min + '位',
                  trigger: "blur"
                });
              }

              if (formConfig[i].rules[key].max != undefined && formConfig[i].rules[key].min == undefined && formConfig[i].type != 'select') {
                rules[formConfig[i].prop].push({
                  max: formConfig[i].rules[key].max,
                  message: (LANG['输入不能大于'] || '输入不能大于') + formConfig[i].rules[key].max + '位',
                  trigger: "blur"
                });
              }

              if (formConfig[i].rules[key].varMax != undefined && formConfig[i].rules[key].varMin != undefined && formConfig[i].type == 'number') {
                this.numberMax = formConfig[i].rules[key].varMax;
                this.numberMin = formConfig[i].rules[key].varMin;
                rules[formConfig[i].prop].push({
                  validator: this.validatorNumberMinMax,
                  trigger: 'blur'
                });
              }

              if (formConfig[i].rules[key].varMax != undefined && formConfig[i].rules[key].varMin == undefined && formConfig[i].type == 'number') {
                this.numberMax = formConfig[i].rules[key].varMax;
                rules[formConfig[i].prop].push({
                  validator: this.validatorNumberMax,
                  trigger: 'blur'
                });
              }

              if (formConfig[i].rules[key].fns) {
                rules[formConfig[i].prop].push({
                  validator: this.formConfig[i].rules[key].fns,
                  trigger: 'blur,change'
                });
              }

              if (formConfig[i].rules[key].moreZero) {
                if (formConfig[i].type == 'numberGroup') {
                  rules[formConfig[i]["prop"][0]["prop"]] = [];
                  rules[formConfig[i]["prop"][1]["prop"]] = [];
                  rules[formConfig[i]["prop"][0]["prop"]].push({
                    validator: this.validatorMoreZero,
                    trigger: 'blur'
                  });
                  rules[formConfig[i]["prop"][1]["prop"]].push({
                    validator: this.validatorMoreZero,
                    trigger: 'blur'
                  });
                } else {
                  rules[formConfig[i].prop].push({
                    validator: this.validatorMoreZero,
                    trigger: 'blur'
                  });
                }
              }

              if (formConfig[i].rules[key].integer) {
                rules[formConfig[i].prop].push({
                  validator: this.validatorinteger,
                  trigger: 'blur'
                });
              }
            }
          }

          if (formConfig[i].type == 'email') {
            rules[formConfig[i].prop].push({
              type: 'email',
              message: LANG['请输入正确的邮箱地址'] || '请输入正确的邮箱地址',
              trigger: 'blur,change'
            });
          }

          if (formConfig[i].type == 'ip') {
            rules[formConfig[i].prop].push({
              validator: this.validatorIP,
              trigger: 'blur'
            });
          }

          if (formConfig[i].type == 'url') {
            rules[formConfig[i].prop].push({
              validator: this.validatorUrl,
              trigger: 'blur'
            });
          }

          if (formConfig[i].type == 'phone') {
            rules[formConfig[i].prop].push({
              validator: this.validatorPhon,
              trigger: 'blur'
            });
          }

          if (formConfig[i].type == 'repeatPassword') {
            rules[formConfig[i].prop].push({
              validator: this.validatePass,
              trigger: 'blur'
            });
          }

          if (formConfig[i].type == 'account') {
            rules[formConfig[i].prop].push({
              validator: this.validateAccount,
              trigger: 'blur'
            });
          }

          if (formConfig[i].type == 'markdown' && formConfig[i].config && formConfig[i].config.maximumWords) {
            rules[formConfig[i].prop].push({
              validator: this.validateMarkdown
            });
            rules[formConfig[i].prop].push({
              message: (LANG['输入的文字不能超过'] || '输入的文字不能超过') + formConfig[i].config.maximumWords + (LANG['个字符'] || '个字符'),
              trigger: 'blur,change'
            });
          }
        }
      }

      this.imgInit = false;
      this.formLoading = false;
    },

    //保存FROM
    saveForm(str) {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          let statelist = {};

          if (this.dateKey.length > 0) {
            let keys = this.dateKey;

            for (let k in keys) {
              statelist[keys[k]] = true;
              this.editForm[keys[k]] = FORMATDAT(this.editForm[keys[k]], 'yyyy-MM-dd HH:mm:ss');
            }
          }

          if (this.datePickerKey.length) {
            for (let k = 0; k < this.datePickerKey.length; k++) {
              this.editForm[this.datePickerKey[k]] = FORMATDAT(this.editForm[this.datePickerKey[k]], 'yyyy-MM-dd HH:mm:ss');
            }
          }

          let temp = {}; // 去除前后空格

          for (let n in this.editForm) {
            if (statelist[n] || this.domainkeys['keys'] === n || this.markdownKey[n]) {
              temp[n] = this.editForm[n];
            } else {
              temp[n] = STRINGTRIM(this.editForm[n]);
            }
          }

          this.$emit("get-form", {
            "formObj": temp
          });
        } else {
          this.$message.error(LANG['表单验证不通过，请查看填写内容！'] || '表单验证不通过，请查看填写内容！');
          return false;
        }

        if (str !== 'save') {
          this.resetForm('noReset');
        }
      });
    },

    // 修改时间日期组件验证
    getDateVal(obj) {
      let tempkey = '';

      for (let k in this.dateIimeGroupKeys) {
        if (k === obj.daykey) {
          tempkey = this.dateIimeGroupKeys[k];
        } else if (this.dateIimeGroupKeys[k] === obj.daykey) {
          tempkey = k;
        }
      }

      if (obj.data) {
        setTimeout(() => {
          this.$refs.editForm.validateField(obj.daykey);

          if (tempkey) {
            this.$refs.editForm.validateField(tempkey);
          }
        });
      }
    },

    // 验证富文本字符
    validateMarkdown(rule, value, callback) {
      let keys = rule.field,
          conLength = 0;

      for (let i = 0; i < this.formConfig.length; i++) {
        if (this.formConfig[i].prop === keys) {
          conLength = this.formConfig[i].config.maximumWords;
          break;
        }
      }

      if (this.nowcontentNum > conLength) {
        callback(new Error((LANG['输入的文字不能超过'] || '输入的文字不能超过') + conLength + (LANG['个字符'] || '个字符')));
      } else {
        callback();
      }
    },

    // 动态验证富文本字符长度
    getconLength(data) {
      this.nowcontentNum = data.num;

      if (data.num) {
        setTimeout(() => {
          this.$refs.editForm.validateField(data.key);
        }, 100);
      }
    },

    //新增
    addNew() {
      this.$emit("add-new", {});
    },

    // 非空验证
    validatormydatepicker(rule, value, callback) {
      if (value) {
        callback(new Error(LANG['请选择日期'] || '请选择日期'));
      } else {
        callback();
      }
    },

    //重置FROM
    resetForm(str) {
      if (str === 'no') {
        this.$emit("cancel-form", {
          "state": "init"
        }); // return;
      }

      this.reSet = false;
      this.inputRset = true;

      if (this.type !== 'search') {
        this.$refs.editForm.resetFields();
      }

      this.formVisible.state = false;

      let _this = this;

      let isIndeterminate = this.isIndeterminate;

      for (let k in isIndeterminate) {
        isIndeterminate[k] = true;
      } //search 重置


      if (str === "ok") {
        FORMVAL([], this.formConfig);

        for (let i in this.formConfig) {
          if (this.formConfig[i].type === 'selectString') {
            let temp = this.formConfig[i].list || [];

            for (let n = 0; n < temp.length; n++) {
              if (this.editForm[temp[n].propInput]) {
                this.editForm[temp[n].propInput] = '';
              }
            }

            if (this.editForm[this.formConfig[i].propInput]) {
              this.editForm[this.formConfig[i].propInput] = '';
            }
          } else if (this.formConfig[i].type === 'dateGroup' || this.formConfig[i].type === 'dateTimeGroup') {
            if (this.initDate === false) {
              let value1 = sessionStorage.sysTime + ' 00:00:00',
                  value2 = sessionStorage.sysTime + ' 23:59:59';
              this.editForm[this.formConfig[i]["prop"][0].prop] = value1;
              this.editForm[this.formConfig[i]["prop"][1].prop] = value2;
            } else {
              this.editForm[this.formConfig[i]["prop"][0].prop] = this.formConfig[i]["prop"][0].value;
              this.editForm[this.formConfig[i]["prop"][1].prop] = this.formConfig[i]["prop"][1].value;
            }
          } else if (this.formConfig[i].type === 'numberGroup') {
            if (this.initDate === false) {
              this.editForm[this.formConfig[i]["prop"][0].prop] = '';
              this.editForm[this.formConfig[i]["prop"][1].prop] = '';
            } else {
              this.editForm[this.formConfig[i]["prop"][0].prop] = this.formConfig[i]["prop"][0].value;
              this.editForm[this.formConfig[i]["prop"][1].prop] = this.formConfig[i]["prop"][1].value;
            }
          } else {
            let type = typeof this.editForm[this.formConfig[i].prop],
                key = this.formConfig[i].prop;

            switch (type) {
              case 'string':
                this.editForm[key] = '';
                break;

              case 'object':
                this.editForm[key] = [];
                break;

              case 'boolean':
                this.editForm[key] = '';
                break;
            }
          }
        }

        for (let m in this.editForm) {
          if (typeof this.editForm[m] === 'object') {
            for (let n in this.editForm[m]) {
              this.cloneQuery[m][n] = this.editForm[m][n];
            }
          } else {
            this.cloneQuery[m] = this.editForm[m];
          }
        }

        this.$emit("reset-form", {
          "state": "init",
          "form": this.editForm
        });
      }

      setTimeout(() => {
        _this.inputRset = false;
        _this.updated = false;
        if (str !== 'noReset') _this.reSet = true;
      }, 500);
    },

    //重复密码验证
    validatePass(rule, value, callback) {
      if (value !== this.editForm.password) {
        callback(new Error(LANG['两次输入密码不一致'] || '两次输入密码不一致!'));
      } else {
        callback();
      }
    },

    // 验证结束时间
    validatorTimeEnd(rule, value, callback) {
      let list = this.dateIimeGroupKeys,
          s_key = '',
          editForm = this.editForm;

      for (let k in list) {
        if (k === rule.field) {
          s_key = list[k];
        }
      }

      if (s_key) {
        if (ISDATE(editForm[rule.field]) && ISDATE(editForm[s_key])) {
          if (new Date(value).getTime() < new Date(editForm[s_key]).getTime()) {
            callback(new Error(LANG['结束间不能小于开始时间'] || '结束间不能小于开始时间!'));
          } else {
            callback();
          }
        } else {
          callback();
        }
      } else {
        callback();
      }
    },

    // 验证是否大于
    validatorMoreZero(rule, value, callback) {
      if (value && FORMATNUMBER(value) < 0) {
        callback(new Error(LANG['不能输入负数'] || '不能输入负数'));
      } else {
        callback();
      }
    },

    //验证是否为整数
    validatorinteger(rule, value, callback) {
      let integer = /^[0-9]*[0-9][0-9]*$/;

      if (!integer.test(value)) {
        callback(new Error(LANG['请输入整数'] || '请输入整数'));
      } else {
        callback();
      }
    },

    //IP验证
    validatorIP(rule, value, callback) {
      if (value && !/^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/.test(value)) {
        callback(new Error(LANG['请输入合法的IP地址'] || '请输入合法的IP地址!'));
      } else {
        callback();
      }
    },

    //URL验证
    validatorUrl(rule, value, callback) {
      if (value && !/^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/.test(value)) {
        callback(new Error(LANG['网址格式为http://www.***.com或者https://www.***.com'] || '网址格式为http://www.***.com或者https://www.***.com'));
      } else {
        callback();
      }
    },

    // URLS验证
    validatorUrls(rule, value, callback) {
      if (value) {
        let list = value.replace(new RegExp('\r\n|\n\r|\n|\r', 'g'), '|').split('|');
        let num = 0;
        list.forEach(v => {
          if (v && /[a-zA-Z0-9-]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/.test(v) === false) {
            callback(new Error(v + (LANG['域名不合法，请修改后重试'] || '域名不合法,请修改后重试')));
            num++;
          }
        });

        if (num === 0) {
          callback();
        }
      } else {
        callback();
      }
    },

    //手机验证
    validatorPhon(rule, value, callback) {
      if (value && !/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(value)) {
        callback(new Error(LANG['请输入合法的手机号码'] || '请输入合法的手机号码'));
      } else {
        callback();
      }
    },

    //数字验证
    validatorNumber(rule, value, callback) {
      if (value && !/^[0-9]*$/.test(value)) {
        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
      } else {
        if (value < 0) {
          callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
        } else {
          callback();
        }
      }
    },

    // 验证银行账号
    validateAccount(rule, value, callback) {
      if (!value) {
        callback(new Error(LANG['账号不能为空'] || '账号不能为空'));
      } else if (!/^[0-9]+$/.test(value)) {
        callback(new Error(LANG['账号必须全部由数字组成'] || '账号必须全部由数字组成'));
      } else {
        callback();
      }
    },

    // 数字大小验证
    validatorNumberMinMax(rule, value, callback) {
      if (value && (value < this.numberMin || value > this.numberMax)) {
        callback(new Error((LANG['金额应该在'] || '金额应该在') + this.numberMin + (LANG['和'] || '和') + this.numberMax + (LANG['之间'] || '之间')));
      } else {
        callback();
      }
    },

    validatorNumberMax(rule, value, callback) {
      if (value && value > this.numberMax) {
        callback(new Error((LANG['金额不能大于'] || '金额不能大于') + this.numberMax));
      } else {
        callback();
      }
    },

    validatorNumberMin(rule, value, callback) {
      if (value && value < this.numberMin) {
        callback(new Error((LANG['金额不能小于'] || '金额不能小于') + this.numberMax));
      } else {
        callback();
      }
    },

    //验证结束金额
    validatorLasterNumber(rule, value, callback) {
      if (value && !/^[0-9]*$/.test(value)) {
        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
      } else if (value <= this.editForm['money_from']) {
        callback(new Error(LANG['结束金额应该大于起始金额'] || '结束金额应该大于起始金额'));
      } else {
        callback();
      }
    },

    //验证结束时间
    validatorLasterDate(rule, value, callback) {
      let date_s = Date.parse(this.editForm["dateStart"]);
      let date_e = Date.parse(value);

      if (date_e <= date_s) {
        callback(new Error(LANG['结束日期应该大于起始日期'] || '结束日期应该大于起始日期'));
      } else {
        callback();
      }
    },

    //全选多选框
    handleCheckAllChange(e, index, formprop) {
      let event = window.event || e;
      let obj = event.srcElement ? event.srcElement : event.target;
      this.checkVal = obj.checked ? this.formConfig[index].list : [];
      this.editForm[formprop] = obj.checked ? this.formConfig[index].list : [];
      this.isIndeterminate[formprop] = false;
    },

    //多选组点击事件
    handleCheckedCitiesChange(e, index, formprop) {
      let checkedCount = this.editForm[formprop].length;
      this.checkAll[formprop] = checkedCount === this.formConfig[index].list.length;
      this.isIndeterminate[formprop] = checkedCount > 0 && checkedCount < this.formConfig[index].list.length;
    },

    //重置全选数据
    changeReset() {
      this.checkVal = [];
      this.checkedval.checked = [];
      let checks = this.checkAll;
      let isIndeterminate = this.isIndeterminate;

      for (let k in checks) {
        checks[k] = false;
        isIndeterminate[k] = false;
      }
    },

    //文本框值修改
    //            changeText(obj){
    //                this.editForm[obj.keys] = obj.val;
    //            },
    //执行查询
    doQuery() {
      let _this = this;

      this.$refs.editForm.validate(valid => {
        if (valid) {
          let config = _this.formConfig;
          let query = {};

          for (let k in config) {
            if (config[k].type == "dateGroup") {
              query[config[k]["prop"][0]["prop"]] = FORMATDAT(_this.editForm[config[k]["prop"][0]["prop"]], 'yyyy-MM-dd HH:mm:ss');
              query[config[k]["prop"][1]["prop"]] = FORMATDAT(_this.editForm[config[k]["prop"][1]["prop"]], 'yyyy-MM-dd HH:mm:ss');
            } else if (config[k].type === 'dateTimeGroup') {
              query[config[k]["prop"][0]["prop"]] = _this.editForm[config[k]["prop"][0]["prop"]];
              query[config[k]["prop"][1]["prop"]] = _this.editForm[config[k]["prop"][1]["prop"]];
            } else if (config[k].type == "numberGroup") {
              _this.editForm[config[k]["prop"][0]["prop"]] = isNaN(parseInt(_this.editForm[config[k]["prop"][0]["prop"]])) ? "" : parseInt(_this.editForm[config[k]["prop"][0]["prop"]]);
              _this.editForm[config[k]["prop"][1]["prop"]] = isNaN(parseInt(_this.editForm[config[k]["prop"][1]["prop"]])) ? "" : parseInt(_this.editForm[config[k]["prop"][1]["prop"]]);
              query[config[k]["prop"][0]["prop"]] = _this.editForm[config[k]["prop"][0]["prop"]];
              query[config[k]["prop"][1]["prop"]] = _this.editForm[config[k]["prop"][1]["prop"]];
            } else if (config[k].type == "selectString") {
              _this.editForm[config[k].propInput] = STRINGTRIM(_this.editForm[config[k].propInput]);
              query[_this.editForm[config[k].prop]] = STRINGTRIM(_this.editForm[config[k].propInput]);
            } else if (config[k].type !== "quickDate") {
              _this.editForm[config[k].prop] = STRINGTRIM(_this.editForm[config[k].prop]);
              query[config[k].prop] = STRINGTRIM(_this.editForm[config[k].prop]);
            }
          }

          if (EQUALOBJECT(_this.editForm, _this.cloneQuery)) {
            Bus.$emit('form_query', true);
          } else {
            _this.$emit('do-query', {
              "item": query
            });
          }

          for (let i in _this.editForm) {
            if (typeof _this.editForm[i] === 'object') {
              for (let n in _this.editForm[i]) {
                _this.cloneQuery[i][n] = _this.editForm[i][n];
              }
            } else {
              _this.cloneQuery[i] = _this.editForm[i];
            }
          }
        }
      });
    },

    //快捷日期事件
    getDay(obj) {
      let dateKey = this.dateKey;
      this.editForm[dateKey[0]] = obj.sday;
      this.editForm[dateKey[1]] = obj.eday;
      this.$emit("get-day", {
        "sday": obj.sday,
        "eday": obj.eday
      });
    },

    //组件事件
    getGroupVal(obj) {
      if (obj.item) {
        this.copyEditForm[obj.keyS] = obj.item.optStart;
        this.copyEditForm[obj.keyE] = obj.item.optEnd;
      }
    },

    //获取RADIOGROUP值
    getRadioVal(obj) {
      this.editForm[obj.key] = obj.val;
    },

    //切换密码
    showpass() {
      this.showPass = !this.showPass;
    },

    //单选组切换事件
    changeRadio(checkIndex, arr, val, propkey) {
      if (!val) {
        return;
      }

      if (checkIndex >= 0) {
        for (let k in arr) {
          if (arr[k].value === val) {
            let obj = this.formConfig[checkIndex].list = [];

            for (let n in arr[k].list) {
              obj.push(arr[k].list[n]);
            }

            this.editForm[propkey] = obj[0].value || obj[0].label;
          }
        }
      }

      this.$emit("change-radio", {
        "item": val
      });
    },

    //下拉切换事件
    changeSelect(key, arr, val, relation, relationKey, linkArr, prop) {
      if (!val) {
        return;
      }

      if (key) {
        let Arr = arr || [];

        for (let k in Arr) {
          if (Arr[k].value == val) {
            this.editForm[key] = Arr[k].label;
          }

          if (Arr[k].label == val) {
            this.editForm[key] = Arr[k].value;
          }
        }
      }

      if (relation) {
        let index = -1;

        for (let j in arr) {
          if (arr[j].value == val) {
            index = j;
          }
        }

        if (index >= 0) {
          this.formConfig[relationKey].list = [];

          for (let k in linkArr) {
            if (k === index) {
              let model = linkArr[k] || {};

              for (let n in model) {
                this.formConfig[relationKey].list.push(model[n]);
              }
            }
          }
        }
      }

      if (arr.length) {
        for (let k = 0; k < arr.length; k++) {
          if (this.editForm[arr[k].ifkey] != undefined) {
            this.editForm[arr[k].ifkey] = '';
            break;
          }
        }
      }

      this.$emit("get-select", {
        "key": prop,
        "obj": this.editForm
      });
    },

    // 按钮点击事件
    doButtonClick(obj) {
      this.$emit("get-button", {
        "item": obj
      });
    },

    //关闭弹窗
    closeDialog(str) {
      this.resetForm(str);
      this.showEditFrom = false; //                this.init();
    },

    //周组件切换
    changeWeek(val, keyOne, keyTwo) {
      let t = new Date(val);
      let e = t.valueOf() + 6 * 24 * 60 * 60 * 1000;
      this.editForm[keyOne] = FORMATDATEPICKER(val);
      this.editForm[keyTwo] = FORMATDATEPICKER(e);
    },

    // 保存上传文件
    //            doSaveFile(obj){
    //                let list = obj.url || [];
    //                this.editForm[obj.key] = [];
    //                for(let k in list){
    //                    this.editForm[obj.key].push(list[k]);
    //                }
    //            },
    doUpload(o) {
      this.editForm[o.key].push(o.file);
    },

    // 域名配置列表
    changeUrl(keys, domainType) {
      this.domainkeys.keys = keys;
      let str = this.editForm[keys];
      this.wwwList.splice(0, this.wwwList.length);
      let arr = this.wwwList;
      let dnsUrl = this.dnsUrl || window.location.host;

      if (str) {
        let list = str.replace(new RegExp('\r\n|\n\r|\n|\r', 'g'), '|').split('|');

        for (let k = 0; k < list.length; k++) {
          if (list[k] != "" && /\w+.[a-zA-Z]+(.[a-zA-Z]+)?$/.test(list[k])) {
            if (domainType === "front") {
              arr.push({
                'url': list[k],
                'wwwlabel': 'PC站',
                'wwwUrl': "www." + list[k],
                "wwwUrllocalhost": "www." + dnsUrl,
                'master_wwwlabel': '主域',
                'master_wwwUrl': list[k],
                "master_wwwUrllocalhost": "www." + dnsUrl,
                'mlabel': 'H5',
                'mUrl': "m." + list[k],
                "mUrllocalhost": "m." + dnsUrl,
                'agentLabel': '代理站',
                'agentUrl': "agent." + list[k],
                "agentUrllocalhost": "agent." + dnsUrl,
                'apilabel': 'API',
                'apiUrl': "api." + list[k],
                "apiUrllocalhost": "api." + dnsUrl,
                'resLabel': '资源',
                'res': 'res.' + list[k],
                "reslocalhost": "res." + dnsUrl
              });
            } else if (domainType === "end") {
              arr.push({
                'url': list[k],
                'adminlabel': '厅主后台',
                'adminUrl': "admin." + list[k],
                "adminlocalhost": "admin." + dnsUrl,
                'cpilabel': 'API',
                'cpiUrl': "cpi." + list[k],
                "cpilocalhost": "cpi." + dnsUrl,
                'rpiLabel': 'RPI',
                'rpiUrl': 'rpi.' + list[k],
                "rpilocalhost": 'rpi.' + dnsUrl
              });
            }
          }
        }
      }
    },

    // 日期单击回调
    getDayVal(obj) {
      if (obj.daykey && this.editForm[obj.daykey]) {
        this.editForm[obj.daykey] = obj.day;
      }
    },

    // 日期时间值修改
    //            getDateTimeval(val){
    //                if(val.data){
    //                    this.editForm[val.daykey] = val.data;
    //                }
    //            },
    // INPUT输入事件
    changeInput(key) {
      if (this.editForm[key]) {
        this.$emit("get-input", {
          "key": key,
          "form": this.editForm
        });
      }
    },

    //textarea 输入事件
    changeTextarea(item) {
      let textareaVal = {
        length: item.length,
        value: item
      };
      this.$emit("get-textarea", textareaVal);
    }

  },
  //        watch: {
  //            formConfig: {
  //                handler(val, old) {
  //                    val.config.forEach((items) => {
  //                        this.rules[items.prop] = items.rules;
  //                    })
  //                },
  //                //是否绑定初始值
  //                immediate: true,
  //                //深度监听
  //                deep: true
  //            }
  //        },
  watch: {
    formType: function (newval) {
      if (newval) {
        this.init();
      }
    },
    'formVisible.state': function (newval) {
      if (newval) {
        this.showEditFrom = true;
        this.init();
      }
    },
    updateKeys: function (newval) {
      if (newval) {
        let list = newval.split(',');

        for (let i = 0; i < list.length; i++) {
          if ((i === 0 || i % 2 === 0) && typeof this.editForm[list[i]] != "undefined") {
            let type = typeof this.editForm[list[i]],
                temp;

            switch (type) {
              case 'boolean':
                temp = list[i + 1] && eval(list[i + 1].toLowerCase()) ? true : false;
                break;

              case 'number':
                let num = parseInt(list[i + 1]);
                temp = isNaN(num) ? '' : num;
                break;

              case 'object':
                if (this.$parent.setFormArray) {
                  this.$parent.setFormArray(list[i], this.editForm);
                }

                return;

              default:
                temp = list[i + 1];
                break;
            }

            if (list[i] === 'redirect') {
              if (this.$parent.setAllForm) {
                this.$parent.setAllForm(this.editForm);
              }

              return;
            }

            this.editForm[list[i]] = temp;
            this.cloneQuery[list[i]] = temp;
          }
        }
      }
    },
    updateDate: function (newval) {
      if (newval) {
        let list = newval.split(',');

        if (typeof this.editForm[list[0]] != "undefined") {
          this.editForm[list[0]] = list[1] ? list[1] : '';
          this.cloneQuery[list[0]] = list[1] ? list[1] : '';
        }

        if (typeof this.editForm[list[2]] != "undefined") {
          this.editForm[list[2]] = list[3] ? list[3] : '';
          this.cloneQuery[list[2]] = list[3] ? list[3] : '';
        }
      }
    },
    formReset: function (newval) {
      if (newval) {
        this.resetForm('ok');
      }
    }
  },

  mounted() {},

  activated() {
    let _this = this;

    this.init();
    Bus.$on('form_Reset', function (v) {
      if (v && _this.$refs.editForm) {
        _this.resetForm('ok');
      }
    });
  },

  created() {
    this.init();
  },

  deactivated() {
    this.editForm = {};
    this.checkKeys = [];
    this.cloneQuery = {};
  }

});

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/inputGroup.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var inputGroup = ({
  data() {
    return {
      LANG,
      optStart: "",
      optEnd: "",
      inputStart: "",
      inputEnd: ""
    };
  },

  props: {
    type: String,
    opts: String,
    optE: String,
    placeS: String,
    placeE: String,
    getInputData: Boolean,
    state: {
      type: Boolean,
      default: false
    },
    reset: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  methods: {
    init() {
      this.optStart = this.opts;
      this.optEnd = this.optE;
      this.inputStart = parseInt(this.placeS);
      this.inputEnd = parseInt(this.placeE);
    },

    getVal() {
      let dates = 0;
      let datee = 0;
      let str = "";

      let _this = this;

      if (this.type == 'dateGroup') {
        dates = Date.parse(this.optStart);
        datee = Date.parse(this.optEnd);
        str = "日期";
      } else {
        dates = parseInt(this.inputStart);
        datee = parseInt(this.inputEnd);
        str = "金额";
      }

      if ((dates || datee) && datee <= dates) {
        this.$message.error((LANG['结束'] || '结束') + str + (LANG['必需大于起始'] || '必需大于起始') + str);
        setTimeout(() => {
          _this.optEnd = null;
          _this.inputEnd = 0;
        }, 3000);
      } else {
        this.$emit('get-val', {
          'item': {
            "optStart": dates,
            "optEnd": datee
          },
          "keyS": this.opts,
          "keyE": this.optE
        });
      }
    }

  },
  watch: {
    //如果重置，就清空数据
    reset: function (newval) {
      if (newval) {
        this.optStart = "";
        this.optEnd = "";
        this.inputStart = "";
        this.inputEnd = "";
      }
    },

    getInputData() {
      this.getVal();
    },

    opts: function (newval) {
      this.optStart = newval;
    },
    optE: function (newval) {
      this.optEnd = newval;
    },
    placeS: function (newval) {
      this.inputStart = newval;
    },
    placeE: function (newval) {
      this.inputEnd = newval;
    }
  },
  computed: {},

  mounted() {
    $(function () {});
  },

  created() {
    this.init();
  },

  destroyed() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-79f33b8e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/inputGroup.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"inputGroup"}},[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":_vm.placeS}},[(_vm.type == 'numberGroup')?_c('el-input',{staticClass:"intW",attrs:{"placeholder":_vm.placeS,"type":"number","size":"small"},on:{"blur":_vm.getVal},model:{value:(_vm.inputStart),callback:function ($$v) {_vm.inputStart=$$v},expression:"inputStart"}}):_vm._e(),_vm._v(" "),(_vm.type == 'dateGroup')?_c('el-date-picker',{staticClass:"intW",attrs:{"type":"date","placeholder":_vm.LANG['选择日期'] || '选择日期',"size":"small"},on:{"change":_vm.getVal},model:{value:(_vm.optStart),callback:function ($$v) {_vm.optStart=$$v},expression:"optStart"}}):_vm._e()],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":2}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":_vm.placeE}},[(_vm.type == 'numberGroup')?_c('el-input',{staticClass:"intW",attrs:{"placeholder":_vm.placeE,"type":"number","size":"small"},on:{"blur":_vm.getVal},model:{value:(_vm.inputEnd),callback:function ($$v) {_vm.inputEnd=$$v},expression:"inputEnd"}}):_vm._e(),_vm._v(" "),(_vm.type == 'dateGroup')?_c('el-date-picker',{staticClass:"intW",attrs:{"type":"date","placeholder":_vm.LANG['选择日期'] || '选择日期',"size":"small"},on:{"change":_vm.getVal},model:{value:(_vm.optEnd),callback:function ($$v) {_vm.optEnd=$$v},expression:"optEnd"}}):_vm._e()],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/inputGroup.vue
function injectStyle (context) {
  __webpack_require__(406)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79f33b8e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  inputGroup,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_inputGroup = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/radioGroup.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var radioGroup = ({
  data() {
    return {
      LANG,
      list: [],
      radioVal: "",
      err: ""
    };
  },

  props: {
    opts: Array,
    keys: String,
    radioInput: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  methods: {
    init() {
      let opts = this.opts;
      let list = this.list;

      if (opts.length > 0) {
        for (let i in opts) {
          if (opts[i]) list.push(opts[i]);
        }
      }
    },

    getVal() {
      let getVal = null;

      if (this.radioVal == 'day' && this.radioInput) {
        getVal = this.list[0].input;

        if (getVal > 31 && this.radioInput) {
          this.err = this.LANG['输入值月日期值不能大于31，已修改为31'] || '输入值月日期值不能大于31，已修改为31';
          this.list[0].input = 31;

          let _this = this;

          setTimeout(() => {
            _this.err = "";
          }, 3000);
        }
      } else if (this.radioInput) {
        getVal = this.list[1].input;
      } else {
        getVal = this.radioVal;
      }

      if (getVal == "" && this.radioInput) {
        this.err = this.LANG['请输入INPUT的值'] || '请输入INPUT的值';
      } else {
        this.err = "";
        this.$emit("get-radioVal", {
          "val": getVal,
          "key": this.keys,
          "groupVal": this.radioVal
        });
      }
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-33703e9f","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/radioGroup.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"radioGroup"}},[_c('el-radio-group',{staticClass:"w100",on:{"change":_vm.getVal},model:{value:(_vm.radioVal),callback:function ($$v) {_vm.radioVal=$$v},expression:"radioVal"}},_vm._l((_vm.list),function(opt){return _c('div',{staticClass:"group w50"},[_c('div',{staticClass:"item"},[_c('el-radio',{attrs:{"label":opt.radioLabel}},[_vm._v(_vm._s(_vm.LANG[opt.label] || opt.label))])],1),_vm._v(" "),(_vm.radioInput)?_c('div',{staticClass:"item"},[(opt.inputType == 'day')?_c('el-input',{staticClass:"intW",attrs:{"min":(opt.min)?opt.min:1,"max":(opt.max)?opt.max:1000,"size":"small","type":"number"},on:{"blur":_vm.getVal},model:{value:(opt.input),callback:function ($$v) {_vm.$set(opt, "input", $$v)},expression:"opt.input"}}):_vm._e(),_vm._v(" "),(opt.inputType == 'week')?_c('el-select',{staticStyle:{"width":"100px"},attrs:{"placeholder":_vm.LANG['请选择'] || '请选择',"size":"small"},on:{"change":_vm.getVal},model:{value:(opt.input),callback:function ($$v) {_vm.$set(opt, "input", $$v)},expression:"opt.input"}},[_c('el-option',{attrs:{"label":"一","value":41}}),_vm._v(" "),_c('el-option',{attrs:{"label":"二","value":42}}),_vm._v(" "),_c('el-option',{attrs:{"label":"三","value":43}}),_vm._v(" "),_c('el-option',{attrs:{"label":"四","value":44}}),_vm._v(" "),_c('el-option',{attrs:{"label":"五","value":45}}),_vm._v(" "),_c('el-option',{attrs:{"label":"六","value":46}}),_vm._v(" "),_c('el-option',{attrs:{"label":"日","value":47}})],1):_vm._e()],1):_vm._e(),_vm._v(" "),(opt.label2)?_c('div',{staticClass:"item"},[_c('label',{staticClass:"el-form-item__label",domProps:{"textContent":_vm._s(opt.label2)}})]):_vm._e()])}),0),_vm._v(" "),(_vm.err)?_c('div',{staticClass:"el-form-item__error"},[_vm._v(_vm._s(_vm.LANG[_vm.err] || _vm.err))]):_vm._e()],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/radioGroup.vue
function injectStyle (context) {
  __webpack_require__(407)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-33703e9f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  radioGroup,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_radioGroup = __webpack_exports__["a"] = (Component.exports);


/***/ })

}]);