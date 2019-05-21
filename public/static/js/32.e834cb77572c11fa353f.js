(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/systemSettings/modelSet.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var modelSet = ({
  data() {
    return {
      LANG,
      // 全选注册
      allshow: false,
      // 全选必填
      allrequire: false,
      allValidate: false,
      //表格数据
      tableData: [],
      oColumn: []
    };
  },

  props: {
    headModel: String,
    bodyModelUrl: String
  },
  methods: {
    //初始化
    init() {
      let _this = this;

      if (this.bodyModelUrl) {
        let url = this.bodyModelUrl;
        this.$.autoAjax('get', url, '', {
          ok: res => {
            this.tableData = res.data;
            this.allshow = this.changeAll('visibility') === this.tableData.length;
            this.allrequire = this.changeAll('necessity') === this.tableData.length;
            this.allValidate = this.changeAll('validate') === 6;
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      } //表头


      this.$.get(this.headModel, res => {
        _this.oColumn = res.columns || [];
      });
    },

    //            //列全选事件
    checkAllChange(type) {
      this.tableData.forEach(item => {
        switch (type) {
          case 'allshow':
            if (!this.allshow) {
              this.allrequire = false;
              item.necessity = '0';
            }

            this.allshow ? item.visibility = '1' : item.visibility = '0';
            break;

          case 'allrequire':
            this.allrequire ? item.necessity = '1' : item.necessity = '0';
            break;

          case 'allValidate':
            if (this.allValidate) {
              if (item.validate == '1' || item.validate == '0') {
                item.validate = '1';
              }
            } else {
              if (item.validate == '1' || item.validate == '0') {
                item.validate = '0';
              }
            }

            break;
        }
      });
    },

    changeAll(prop) {
      let n = 0;
      this.tableData.forEach(items => {
        if (items[prop] == '1') {
          n++;
        } else if (items[prop] == '0') {
          n--;
        }
      });
      return n;
    },

    //单条数据操作
    changeCheck(key, col, k) {
      this.tableData[k][key] = this.tableData[k][key] == '1' ? '0' : '1';

      switch (key) {
        case 'visibility':
          this.tableData[k]['necessity'] = this.tableData[k][key] == '0' ? '0' : this.tableData[k]['necessity'];
          this.tableData[k]['validate'] = this.tableData[k][key] == '0' ? '0' : this.tableData[k]['validate'];
          this.allshow = this.changeAll(key) === this.tableData.length;
          break;

        case 'necessity':
          this.allrequire = this.changeAll(key) === this.tableData.length;
          break;

        case 'validate':
          this.allValidate = this.changeAll(key) === 6;
          break;
      }
    },

    doSave() {
      this.$emit('save-data', {
        "item": this.tableData
      });
    }

  },
  watch: {
    //如果数据网址发生变化，就执行数据请求
    bodyModelUrl: {
      handler(val, old) {
        this.init();
      },

      //是否绑定初始值
      immediate: true,
      //深度监听
      deep: true
    }
  },
  created: function () {
    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-67326c12","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/systemSettings/modelSet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"modelSet"}},[_c('el-button',{staticStyle:{"float":"right"},attrs:{"type":"primary","size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['保存'] || '保存')},on:{"click":_vm.doSave}}),_vm._v(" "),_c('table',{staticClass:"el-table el-table__header tCent w100",attrs:{"cellspacing":"0","cellpadding":"0","border":"1"}},[_c('tr',[_c('th',{staticClass:"is-leaf three tCent",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',[_vm._v(_vm._s(_vm.LANG['注册内容'] || '注册内容'))])]),_vm._v(" "),_c('th',{staticClass:"is-leaf three tCent",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',[_vm._v(_vm._s(_vm.LANG['是否显示'] || '是否显示')+"\n                    "),_c('el-checkbox',{on:{"change":function($event){return _vm.checkAllChange('allshow')}},model:{value:(_vm.allshow),callback:function ($$v) {_vm.allshow=$$v},expression:"allshow"}})],1)]),_vm._v(" "),_c('th',{staticClass:"is-leaf three tCent",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',[_vm._v(_vm._s(_vm.LANG['是否必填'] || '是否必填')+"\n                    "),_c('el-checkbox',{attrs:{"disabled":_vm.allshow?false:true},on:{"change":function($event){return _vm.checkAllChange('allrequire')}},model:{value:(_vm.allrequire),callback:function ($$v) {_vm.allrequire=$$v},expression:"allrequire"}})],1)]),_vm._v(" "),_c('th',{staticClass:"is-leaf three tCent",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',[_vm._v(_vm._s(_vm.LANG['是否验证'] || '是否验证')+"\n                    "),_c('el-checkbox',{on:{"change":function($event){return _vm.checkAllChange('allValidate')}},model:{value:(_vm.allValidate),callback:function ($$v) {_vm.allValidate=$$v},expression:"allValidate"}})],1)])]),_vm._v(" "),_c('tbody',_vm._l((_vm.tableData),function(item,k){return _c('tr',_vm._l((_vm.oColumn),function(col,index){return _c('td',{staticClass:"el-table_1_column_19 three"},[(!col.checkbox)?_c('el-tag',{staticClass:"font14",attrs:{"type":"success"}},[_vm._v(_vm._s(_vm.LANG[item[col.prop]] || item[col.prop]))]):_vm._e(),_vm._v(" "),(item[col.prop] == '1')?_c('el-button',{attrs:{"type":"success","size":"mini","disabled":item.visibility=='0'&&col.prop =='necessity'?true:false},on:{"click":function($event){return _vm.changeCheck(col.prop,col,k)}}},[_vm._v("启用")]):_vm._e(),_vm._v(" "),(item[col.prop] == '0')?_c('el-button',{attrs:{"type":"warning","size":"mini","disabled":item.visibility=='0'&&col.prop =='necessity'?true:false},on:{"click":function($event){return _vm.changeCheck(col.prop,col,k)}}},[_vm._v("停用")]):_vm._e()],1)}),0)}),0)])],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/systemSettings/modelSet.vue
function injectStyle (context) {
  __webpack_require__(421)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-67326c12"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  modelSet,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var systemSettings_modelSet = (Component.exports);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/webSet/registerSet.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var registerSet = ({
  data() {
    return {
      radio: 'agent',
      LANG,
      checkedgx: false,
      //数据接口地址
      tableUrl: "",
      //列配置接口地址
      columnsUrl: "",
      // 默认选中样式
      select: true,
      btntype: "agent",
      type: "",
      numberType: "pc"
    };
  },

  components: {
    modelset: systemSettings_modelSet,
    tablegrid: tableGrid["a" /* default */]
  },
  watch: {
    radio: function (val, oldval) {
      if (val !== oldval) {
        if (val === 'user') {
          this.type = "user";
          this.tableUrl = URL.api + ROUTES.GET.system.vipOrAgency + '?type=user' + "&pf=" + this.numberType;
        }

        if (val === 'agent') {
          this.type = "agent";
          this.tableUrl = URL.api + ROUTES.GET.system.vipOrAgency + '?type=agent';
        }
      }
    }
  },
  methods: {
    init() {
      //获取列配置
      this.columnsUrl = "static/json/systemSettings/registerSettings/columns.json"; //数据请求

      this.tableUrl = URL.api + ROUTES.GET.system.vipOrAgency + '?type=agent';
      this.type = "agent";
      this.radio = "agent";
    },

    //保存数据
    saveData(data) {
      // 过滤数据
      if (data['item']) {
        let temp = {
          type: this.type,
          pf: this.numberType,
          data: data['item']
        };

        let _this = this,
            url = URL.api + ROUTES.PATCH.system.registration;

        console.log(temp);
        this.$.autoAjax('patch', url, temp, {
          ok: res => {
            if (res.state == 0 && res.data) {
              _this.$message.success(LANG['保存配置成功'] || '保存配置成功');
            } else {
              _this.$message.error(LANG['保存配置失败'] || '保存配置失败');
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      }
    },

    // 设置PC或h5
    setNumberType(str) {
      if (this.numberType === str) {
        return;
      } else {
        this.numberType = str;
        this.tableUrl = URL.api + ROUTES.GET.system.vipOrAgency + '?type=' + this.type + "&pf=" + this.numberType;
      }
    },

    // 切换代理会员
    changeRadio(v) {
      this.numberType = 'pc';
    }

  },
  created: function () {
    this.init();
  },

  activated() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f4948394","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/webSet/registerSet.vue
var registerSet_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"templateManage w100",attrs:{"id":"currencySettings"}},[_c('el-card',[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":24}},[_c('el-radio-group',{on:{"change":_vm.changeRadio},model:{value:(_vm.radio),callback:function ($$v) {_vm.radio=$$v},expression:"radio"}},[_c('el-radio',{attrs:{"label":"agent"}},[_vm._v(_vm._s(_vm.LANG['代理注册'] || '代理注册'))]),_vm._v(" "),_c('el-radio',{attrs:{"label":"user"}},[_vm._v(_vm._s(_vm.LANG['会员注册'] || '会员注册'))])],1)],1),_vm._v(" "),_c('el-col',{staticClass:"mt10"},[_c('el-button',{attrs:{"size":"small","type":(_vm.numberType === 'pc'?'primary':'')},on:{"click":function($event){return _vm.setNumberType('pc')}}},[_vm._v("PC\n                ")]),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":(_vm.numberType === 'h5'?'primary':''),"disabled":(_vm.radio === 'agent')},on:{"click":function($event){return _vm.setNumberType('h5')}}},[_vm._v("H5\n                ")])],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('modelset',{attrs:{"headModel":_vm.columnsUrl,"bodyModelUrl":_vm.tableUrl},on:{"save-data":_vm.saveData}})],1)],1)],1)],1)}
var registerSet_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/webSet/registerSet.vue
function registerSet_injectStyle (context) {
  __webpack_require__(420)
}
/* script */


/* template */

/* template functional */
var registerSet_vue_template_functional_ = false
/* styles */
var registerSet_vue_styles_ = registerSet_injectStyle
/* scopeId */
var registerSet_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var registerSet_vue_module_identifier_ = null

var registerSet_Component = Object(component_normalizer["a" /* default */])(
  registerSet,
  registerSet_render,
  registerSet_staticRenderFns,
  registerSet_vue_template_functional_,
  registerSet_vue_styles_,
  registerSet_vue_scopeId_,
  registerSet_vue_module_identifier_
)

/* harmony default export */ var webSet_registerSet = __webpack_exports__["default"] = (registerSet_Component.exports);


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);