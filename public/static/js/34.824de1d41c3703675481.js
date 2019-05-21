(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/newTree.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var newTree = ({
  data() {
    return {
      LANG,
      input: '',
      //是否全部展开
      showTree: true,
      show: {}
    };
  },

  props: {
    lotterydata: Array,
    sortObj: Object
  },
  methods: {
    init() {
      for (let i = 0; i < this.lotterydata.length; i++) {
        this.$set(this.show, i, true);
      }
    },

    // 编辑数字
    doEdit(row, subkey, itemId) {
      this.$emit('sub-edit', {
        row: row,
        subkey: subkey,
        itemId: itemId
      });
    },

    // 输入框切换
    doChange(value, index, hierarchy, sub) {//                switch (hierarchy) {
      //                    case 'top':
      //
      //
      ////                        for (let k in this.sortObj) {
      ////                            if (this.sortObj[k].id == index) {
      ////                                this.lotterydata[this.sortObj[k].key].sort = this.sortObj[index].sort;
      ////                                this.sortObj[this.sortObj[k].key].sort = this.sortObj[index].sort;
      ////                                this.sortObj[index].sort = value;
      ////                            }
      ////                        };
      //                        break;
      //                    case 'sub':
      //                        let temp = this.sortObj[index].sub || [];
      //                        for (let i in temp) {
      //                            if ((temp[i].sort == value) && (sub != i)) {
      //                                this.lotterydata[this.sortObj[index].key].sub[i].sort = temp[sub].sort;
      //                                temp[i].sort = temp[sub].sort;
      //                                temp[sub].sort = value;
      //                            }
      //                        }
      //                        break;
      //                }
    },

    // 保存数据
    saveForm() {
      this.$emit('save-form', {
        data: this.lotterydata
      });
    },

    new_toggle(i) {
      this.show[i] = !this.show[i];
    }

  },
  components: {},
  computed: {},
  watch: {
    'lotterydata.length': function (newval) {
      if (newval) {
        this.init();
      }
    }
  },

  mounted() {},

  created() {},

  activated() {//            setTimeout(() => {
    //                this.init();
    //            }, 500)
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2f543f20","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/newTree.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"newTree"}},[_c('el-card',{staticClass:"box-card diyTree font12"},[_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('span',[_vm._v("注：前台实际展示时数字大的排在前面；彩票聚合页全部分类这里无法排序")])]),_vm._v(" "),_c('el-col',{staticClass:"tRight",attrs:{"span":12}},[_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.saveForm}},[_vm._v("保存")])],1)],1),_vm._v(" "),_c('el-row',{staticClass:"mt10"},[_c('el-col',[_c('el-col',{staticClass:"treeHeader"},[_c('el-col',{staticClass:"pleft",attrs:{"span":6}},[_vm._v("一级排序")]),_vm._v(" "),_c('el-col',{staticClass:"pleft",attrs:{"span":5}},[_vm._v("二级排序")]),_vm._v(" "),_c('el-col',{staticClass:"pleft",attrs:{"span":4}},[_vm._v("信用默认玩法")]),_vm._v(" "),_c('el-col',{staticClass:"pleft",attrs:{"span":4}},[_vm._v("官方默认玩法")]),_vm._v(" "),_c('el-col',{staticClass:"pleft",attrs:{"span":2}},[_vm._v("是否显示")]),_vm._v(" "),_c('el-col',{staticClass:"pleft",attrs:{"span":3}},[_vm._v("操作")])],1),_vm._v(" "),_c('el-col',{staticClass:"menu w100"},_vm._l((_vm.lotterydata),function(item,index){return _c('el-col',{key:item.id,staticClass:"toggle w100"},[_c('el-col',{staticClass:"toggle_show",nativeOn:{"click":function($event){return _vm.new_toggle(index)}}},[_c('el-col',{staticClass:"pleft",attrs:{"span":6}},[(_vm.show[index])?_c('i',{staticClass:"el-icon-arrow-down"}):_c('i',{staticClass:"el-icon-arrow-right"}),_vm._v(" "),_c('el-input',{staticClass:"intW ml10",attrs:{"size":"small","placeholder":"请输入排列序号"},on:{"change":function($event){return _vm.doChange(item,item.id,'top')}},model:{value:(item['sort']),callback:function ($$v) {_vm.$set(item, 'sort', $$v)},expression:"item['sort']"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.name))])],1)],1),_vm._v(" "),_vm._l((item['sub']),function(sub,k){return _c('el-col',{directives:[{name:"show",rawName:"v-show",value:(_vm.show[index]),expression:"show[index]"}],key:sub.id,staticClass:"child",attrs:{"span":24}},[_c('el-col',{attrs:{"span":5,"offset":6}},[_c('div',[_c('el-input',{staticClass:"intW ml10",attrs:{"size":"small","placeholder":"请输入内容"},on:{"change":function($event){return _vm.doChange(sub['sort'],index,'sub',k)}},model:{value:(sub['sort']),callback:function ($$v) {_vm.$set(sub, 'sort', $$v)},expression:"sub['sort']"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(sub.name))])],1)]),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_vm._v("\n                                    "+_vm._s(sub.default_fast_name === '无' ? '无' : ('信用玩法-' + sub.default_fast_name))+"\n                                ")]),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_vm._v("\n                                    "+_vm._s(sub.default_standard_name === '无' ? '无' : ('官方玩法-' + sub.default_standard_name))+"\n                                ")]),_vm._v(" "),_c('el-col',{attrs:{"span":2}},[_vm._v("\n                                    "+_vm._s(sub.display == '1' ? '是' : '否')+"\n                                ")]),_vm._v(" "),_c('el-col',{attrs:{"span":3}},[_c('el-button',{attrs:{"size":"small"},on:{"click":function($event){return _vm.doEdit(sub,k,item.id)}}},[_vm._v("编辑")])],1)],1)})],2)}),1)],1)],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/newTree.vue
function injectStyle (context) {
  __webpack_require__(465)
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
  newTree,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_newTree = (Component.exports);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/lottey/lotterSort.vue
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lotterSort = ({
  data() {
    return {
      LANG,
      list: [],
      list_show: [],
      //配置哪些是需要展开
      sortObj: {},
      //弹窗
      formConfig: [{
        "prop": "name",
        "value": "",
        "type": "label",
        "label": "名称"
      }, {
        "prop": "display",
        "value": "",
        "label": "是否显示",
        "type": "select",
        "list": [{
          label: '是',
          value: '1'
        }, {
          label: '否',
          value: '0'
        }],
        "rules": [{
          "require": true
        }]
      }],
      labelWidth: "110px",
      formTitel: '',
      editVisible: {
        state: false
      },
      isEdit: {
        state: false
      },
      formType: '',
      nowSubId: -1,
      loading: false
    };
  },

  methods: {
    init() {
      this.loading = true;
      this.list.splice(0, this.list.length);
      this.editVisible.state = false;
      let data = this.list;
      this.sortObj = {};
      let sortObj = this.sortObj; // 请求彩票数据

      this.$.autoAjax('get', URL.api + '/lottery/sort', '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            let list = res.data || [];

            for (let i = 0; i < list.length; i++) {
              let obj = {
                key: i,
                id: list[i].id,
                sort: list[i].sort,
                show: true
              };
              list[i].sort = list[i].sort.split(',', 1)[0];

              if (list[i].sub) {
                obj.sub = [];
                let temp = list[i].sub;

                for (let k = 0; k < temp.length; k++) {
                  obj.sub.push({
                    id: temp[k].id,
                    sort: temp[k].sort
                  });
                }
              }

              sortObj[i] = obj;
              data.push(list[i]);
              this.list_show[i] = true;
            }
          }

          this.loading = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 保存排序
    doSaveForm(obj) {
      this.loading = true;
      let temp = obj.data || {},
          list = [];

      for (let k in temp) {
        list.push({
          id: temp[k].id,
          sort: temp[k].sort,
          sub: temp[k].sub ? temp[k].sub : []
        });
      }

      let query = {};
      query.list = list;
      this.$.autoAjax('post', URL.api + '/lottery/sort', query, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(LANG['彩票排序成功'] || '彩票排序成功');
            this.init();
          } else if (res.msg) {
            this.$message.error(res.msg);
          } else {
            this.$message.error(LANG['彩票排序失败，请稍候重试'] || '彩票排序失败，请稍候重试');
          }

          this.loading = false;
        },
        p: () => {},
        error: e => {
          this.loading = false;
        }
      });
    },

    // 编辑彩票子类
    doSubEdit(obj) {
      this.loading = true;
      this.formConfig = [{
        "prop": "name",
        "value": "",
        "type": "label",
        "label": "名称"
      }, {
        "prop": "display",
        "value": "",
        "label": "是否显示",
        "type": "select",
        "list": [{
          label: '是',
          value: '1'
        }, {
          label: '否',
          value: '0'
        }],
        "rules": [{
          "require": true
        }]
      }];
      this.$.autoAjax('get', URL.api + '/lottery/sort.set/' + obj.row.id, '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            let temp = res.data;
            this.nowSubId = temp.id;
            this.formConfig[0].value = temp.name || '';
            this.formConfig[1].value = temp.display;

            if (temp.options['fast']) {
              this.formConfig.push({
                "prop": "default_fast",
                "value": "",
                "label": "信用",
                "type": "select",
                "list": [],
                "rules": [{
                  "require": true
                }]
              });
              let fast = this.formConfig[2].list;
              this.formConfig[2].value = temp.default_fast;
              temp.options['fast'].forEach(item => {
                fast.push({
                  label: item.name,
                  value: item.id
                });
              });
            }

            if (temp.options['standard']) {
              this.formConfig.push({
                "prop": "default_standard",
                "value": "",
                "label": "官方",
                "type": "select",
                "list": [],
                "rules": [{
                  "require": true
                }]
              });
              this.formConfig[3].value = temp.default_standard;
              let standard = this.formConfig[3].list;
              temp.options['standard'].forEach(item => {
                standard.push({
                  label: item.name,
                  value: item.id
                });
              });
            }

            this.editVisible.state = true;
            this.loading = false;
          } else {
            this.$message.error(LANG['数据错误，请稍后重试'] || '数据错误，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 保存编辑内容
    getForm(obj) {
      this.loading = true;
      let temp = {
        id: this.nowSubId,
        display: obj.formObj.display,
        default_fast: obj.formObj.default_fast,
        default_standard: obj.formObj.default_standard
      };
      this.$.autoAjax('post', URL.api + '/lottery/sort.set', temp, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(LANG['彩票信息修改成功'] || '彩票信息修改成功');
            this.init();
          } else if (res.msg) {
            this.$message.error(res.msg);
          } else {
            this.$message.error(LANG['彩票信息修改失败，请稍后重试'] || '彩票信息修改失败，请稍后重试');
          }

          this.loading = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    }

  },
  components: {
    newtree: components_newTree,
    formEdit: formEdit["a" /* default */]
  },
  computed: {},
  watch: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-10d8e4a8","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/lottey/lotterSort.vue
var lotterSort_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"id":"lotterSort"}},[_c('newtree',{attrs:{"lotterydata":_vm.list,"sortObj":_vm.sortObj},on:{"save-form":_vm.doSaveForm,"sub-edit":_vm.doSubEdit}}),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.editVisible,"formConfig":_vm.formConfig,"type":'default',"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}})],1)],1)}
var lotterSort_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/lottey/lotterSort.vue
function lotterSort_injectStyle (context) {
  __webpack_require__(464)
}
/* script */


/* template */

/* template functional */
var lotterSort_vue_template_functional_ = false
/* styles */
var lotterSort_vue_styles_ = lotterSort_injectStyle
/* scopeId */
var lotterSort_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var lotterSort_vue_module_identifier_ = null

var lotterSort_Component = Object(component_normalizer["a" /* default */])(
  lotterSort,
  lotterSort_render,
  lotterSort_staticRenderFns,
  lotterSort_vue_template_functional_,
  lotterSort_vue_styles_,
  lotterSort_vue_scopeId_,
  lotterSort_vue_module_identifier_
)

/* harmony default export */ var lottey_lotterSort = __webpack_exports__["default"] = (lotterSort_Component.exports);


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);