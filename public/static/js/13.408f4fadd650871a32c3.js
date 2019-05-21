(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13,71],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(15);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/memberHierarSet.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var memberHierarSet = ({
  data() {
    return {
      //表格相关
      LANG,
      //                navSelect: false,
      columnsUrl: "",
      tableUrl: "",
      //锁定接口
      //                lockUrl: "",
      //                infoUrl: "",
      updated: false,
      //                lockType: '',
      //                lockDialogShow: false,
      arrTwo: null,
      arrTwoObj: null,
      //确认
      //                confirmConfig: {
      //                    state: false,
      //                    msg: "",
      //                    fn: ""
      //                },
      //                lockSwitch: 'ON',
      //会员列表
      levelsList: [],
      // 下接数据更新
      listKey: "",
      listArr: [],
      lockType: '',
      //选中的行数据
      mode: [],
      loading: false
    };
  },

  props: {
    levelId: {
      type: String,
      default: ""
    },
    activeName: String,
    searchTableUrl: String,
    showSet: Boolean,
    colTwo: String
  },
  components: {
    tablegrid: tableGrid["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init(str) {
      this.loading = false; //				this.tableUrl = URL.api + ROUTES.GET.user.level.group;

      this.baseUrl = URL.api + ROUTES.GET.user.level.group; //锁定
      //                this.lockUrl = URL.api + ROUTES.PATCH.user.level.lock;
      //获取路由

      this.lid = FORMATNUMBER(this.$route.query.level);
      this.$route.query && this.$route.query.coltwo === true || this.activeName === 'searLevel' ? this.columnsUrl = "/static/json/accoutManage/memberHierarSet/columnsTwo.json" : this.columnsUrl = "/static/json/accoutManage/memberHierarSet/columns.json";
      this.tableUrl = this.baseUrl + '/?lid=' + this.lid;

      if (str) {
        this.updated = false;
        setTimeout(() => {
          this.updated = true;
        }, 500);
      } //批量修改层级
      //                this.infoUrl = URL.api + ROUTES.PATCH.user.info.infoLevel;
      //                this.navSelect = false;
      //                this.listKey = "id";
      //会员层级列表
      //                let levlsListUrl = URL.api + ROUTES.GET.user.levelsList;
      //                this.$.autoAjax('get', levlsListUrl, '', {
      //                    ok: (res) => {
      //                        let mode = res.data;
      //                        this.listArr.splice(0, this.listArr.length);
      //                        this.listArr.push({
      //                            "value": "",
      //                            "label": "默认：不操作"
      //                        })
      //                        for (let i in res.data) {
      //                            this.listArr.push({
      //                                "value": mode[i].id,
      //                                "label": mode[i].name
      //                            })
      //                        }
      //                        this.loading = false;
      //                    },
      //                    p: () => {
      //                    },
      //                    error: e => {
      //                        this.$message.error(LANG['未知错误，请点击“刷新”按钮后，重试'] || '未知错误，请点击“刷新”按钮后，重试');
      //                    }
      //                })

    },

    //            handleCloselockDialog() {
    //                this.lockDialogShow = false;
    //            },
    // 刷新当前页
    //            doInit() {
    //                this.init('init');
    //            },
    //			//返回上一个页面 跳转
    blackMemberHierarchy() {
      this.$router.push({
        path: '/memberHierarchy'
      });
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  watch: {
    searchTableUrl: function (newval) {
      if (newval) {
        this.init();
      }
    }
  },

  activated() {
    this.init('init');
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-64d14d69","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/memberHierarSet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"id":"memberHierartSet"}},[_c('el-row',[(_vm.activeName !== 'searLevel')?_c('el-col',{staticClass:"pb",attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.blackMemberHierarchy}},[_vm._v("\n                返 回\n            ")])],1):_vm._e(),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[(_vm.activeName == 'searLevel')?_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.searchTableUrl,"pageSet":true,"updated":_vm.updated,"isCreated":true,"saveData":false,"showRefresh":false}}):_vm._e(),_vm._v(" "),(_vm.activeName !== 'searLevel')?_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"isCreated":true,"pageSet":true,"showRefresh":false,"updated":_vm.updated}}):_vm._e()],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/memberHierarSet.vue
function injectStyle (context) {
  __webpack_require__(264)
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
  memberHierarSet,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_memberHierarSet = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/memberHierarchy_table.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

vue_esm["default"].filter("formatDate", function (v, format) {
  if (parseInt(v).toString().length == 10) {
    v = parseInt(v) * 1000;
  }

  let t = new Date(v);

  let tf = function (i) {
    return (i < 10 ? '0' : '') + i;
  };

  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear());
        break;

      case 'MM':
        return tf(t.getMonth() + 1);
        break;

      case 'mm':
        return tf(t.getMinutes());
        break;

      case 'dd':
        return tf(t.getDate());
        break;

      case 'HH':
        return tf(t.getHours());
        break;

      case 'ss':
        return tf(t.getSeconds());
        break;
    }
  });
});
vue_esm["default"].filter('formatConnect', function (v, arr) {
  let item = v || {};
  let str = arr || "";
  let contVal = "";
  let list = str.split(",");

  for (let k in list) {
    if (list[k] && item[list[k]]) {
      contVal = contVal + v[list[k]] + " - ";
    }
  }

  contVal = contVal.toString();
  return contVal.substring(0, contVal.length - 2);
});
vue_esm["default"].filter('formatConnect', function (v, arr) {
  let item = v || {};
  let str = arr || "";
  let contVal = "";
  let list = str.split(",");

  for (let k in list) {
    if (list[k] && item[list[k]]) {
      contVal = contVal + v[list[k]] + " - ";
    }
  }

  contVal = contVal.toString();
  return contVal.substring(0, contVal.length - 2);
});
vue_esm["default"].filter('formatInt', function (v) {
  return parseInt(FORMATNUMBER(v) / 100);
});
/* harmony default export */ var memberHierarchy_table = ({
  data() {
    return {
      LANG,
      dataModel: [],
      columnList: []
    };
  },

  props: {
    dataModelUrl: String,
    columnsUrl: String,
    //更新数据
    updateDate: Object,
    updated: {
      type: Boolean,
      default: false
    },
    formType: String
  },
  components: {},
  methods: {
    init() {
      let dataModel = this.dataModel = [];

      let _this = this;

      if (this.dataModelUrl) {
        this.$.autoAjax('get', this.dataModelUrl, '', {
          ok: res => {
            let tableDate = res.data || [];

            for (let i in tableDate) {
              dataModel.push(tableDate[i]);
            }
          },
          p: () => {},
          error: e => {
            this.$message.error(e);
          }
        });
      }

      let columnList = this.columnList = [];

      if (this.columnsUrl) {
        this.$.get(this.columnsUrl, res => {
          let columns = res.columns || [];

          for (let i in columns) {
            columnList.push(columns[i]);
          } //根据columns长度判断是否加横向滚动条


          if (columns.length > 10) {
            _this.tableScroll = true;
          } else {
            _this.tableScroll = false;
          }
        });
      }
    },

    //处理操作公共按钮事件
    doHandle(row, fn) {
      this.$emit("do-handle", {
        "event": event,
        "row": row,
        "fn": fn
      });
    }

  },
  watch: {
    //如果数据网址发生变化，就执行数据请求
    dataModelUrl: function (newQuestion) {
      this.init();
    },
    //根据是否更新，更新数据
    updated: function (newval) {
      if (newval) {
        this.init();
      }
    },
    formType: function (newval) {
      if (newval) {
        this.init();
      }
    }
  },

  created() {
    this.init();
  },

  computed: {
    scrollClass: function () {
      return {
        'scrollX': this.tableScroll
      };
    },
    tableWidth: function () {
      let width = document.body.clientWidth;
      return this.tableScroll ? 'width:' + (width - 270) + 'px' : '';
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-82dda37e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/memberHierarchy_table.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"memberHierarchy_table"}},[_c('div',{ref:"tableSingle",class:_vm.scrollClass,style:(_vm.tableWidth),attrs:{"id":"tableSingle"}},[_c('div',{attrs:{"id":"tables"}},[_c('table',{staticClass:"el-table-data w100",attrs:{"cellspacing":"0","cellpadding":"0","border":"1"}},[_vm._m(0),_vm._v(" "),(_vm.dataModel.length !== 0)?_c('thead',[_c('tr',[_c('th',{attrs:{"colspan":"1","rowspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['会员等级'] || '会员等级'))])]),_vm._v(" "),_c('th',{attrs:{"colspan":"1","rowspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['描述'] || '描述'))])]),_vm._v(" "),_c('th',{attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['晋级所需条件'] || '晋级所需条件'))])]),_vm._v(" "),_c('th',{attrs:{"colspan":"1","rowspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['会员人数'] || '会员人数'))])]),_vm._v(" "),_c('th',{attrs:{"colspan":"1","rowspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['操作'] || '操作')),_c('br')])])]),_vm._v(" "),_c('tr',[_c('th',{attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['有效投注'] || '有效投注'))])]),_vm._v(" "),_c('th',{attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['历史充值'] || '历史充值'))])])])]):_vm._e(),_vm._v(" "),_vm._l((_vm.dataModel),function(col,index){return _c('tr',_vm._l((_vm.columnList),function(item,key){return _c('td',{staticClass:"el-table_1_column_19"},[(item.type != 'button')?_c('div',{staticClass:"cell"},[(item.type === 'link')?_c('div',{staticClass:"success",on:{"click":function($event){return _vm.doHandle(col,item.fn)}}},[(col[item.prop])?_c('a',{staticClass:"state_blue",attrs:{"href":"javascript:;"},on:{"click":function($event){return _vm.doHandle(item,col.fn)}}},[_vm._v("\n                                    "+_vm._s(col[item.prop])+"\n                                ")]):_vm._e(),_vm._v(" "),(!col[item.prop])?_c('span',[_vm._v(_vm._s(col[item.prop]))]):_vm._e()]):_vm._e(),_vm._v(" "),(item.filters == undefined && item.type !='date' && item.type != 'divisionMoney' && item.type !=='link')?_c('span',[_vm._v(_vm._s(col[item.prop]))]):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"line-height":"24px"}},[(item.filters != undefined)?_c('span',{class:{sucess_text: (col[item.prop] == 1),danger_text:(col[item.prop] == 0)}},[_vm._v(_vm._s(_vm._f("formatSex")(col[item.prop],item.filters)))]):_vm._e(),_vm._v(" "),(col['level'] == '0')?_c('p',{staticClass:"defutFont"},[_vm._v("[ "+_vm._s(_vm.LANG['默认'] || '默认')+" ]")]):_vm._e()])]):_vm._e(),_vm._v(" "),(item.type == 'button' && col['level'] !== '0')?_c('div',{staticClass:"cell"},_vm._l((item.btnGroup),function(btn){return _c('div',{staticStyle:{"float":"left","margin-left":"5px"}},[(!btn.prop)?_c('el-button',{attrs:{"size":"small","type":btn.btnType},domProps:{"textContent":_vm._s(btn.label)},on:{"click":function($event){return _vm.doHandle(col,btn.fn)}}}):_vm._e(),_vm._v(" "),(btn.prop && col[btn.prop] != btn.val)?_c('el-button',{attrs:{"size":"small","type":btn.btnType},domProps:{"textContent":_vm._s(btn.label)},on:{"click":function($event){return _vm.doHandle(col,btn.fn)}}}):_vm._e()],1)}),0):_vm._e(),_vm._v(" "),(item.type == 'button' && col['level'] == '0')?_c('div',_vm._l((item.btnGroup),function(btn){return _c('div',{staticStyle:{"float":"left","margin-left":"5px"}},[(btn.label === '编辑')?_c('el-button',{attrs:{"size":"small","type":btn.btnType},domProps:{"textContent":_vm._s(btn.label)},on:{"click":function($event){return _vm.doHandle(col,btn.fn)}}}):_vm._e(),_vm._v(" "),(btn.label === '出入款设置')?_c('el-button',{attrs:{"size":"small","type":btn.btnType},domProps:{"textContent":_vm._s(btn.label)},on:{"click":function($event){return _vm.doHandle(col,btn.fn)}}}):_vm._e()],1)}),0):_vm._e()])}),0)}),_vm._v(" "),(_vm.dataModel.length == 0)?_c('tr',{staticStyle:{"line-height":"100px","text-align":"center","background-color":"#ffffff"}},[_c('div',{staticStyle:{"width":"1439px"}},[_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据'))])]):_vm._e()],2)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('colgroup',[_c('col',{attrs:{"width":"10%"}}),_vm._v(" "),_c('col',{attrs:{"width":"20%"}}),_vm._v(" "),_c('col',{attrs:{"width":"20%"}}),_vm._v(" "),_c('col',{attrs:{"width":"20%"}}),_vm._v(" "),_c('col'),_vm._v(" "),_c('col',{attrs:{"width":"10%"}})])}]

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/memberHierarchy_table.vue
function injectStyle (context) {
  __webpack_require__(484)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-82dda37e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  memberHierarchy_table,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_memberHierarchy_table = (Component.exports);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/userLevelLayer.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var userLevelLayer = ({
  data() {
    return {
      LANG,
      activeData: []
    };
  },

  props: {
    model: Object
  },
  methods: {
    init() {
      this.activeData = [];
    },

    doLayered() {
      console.log(this.model.visible);

      if (this.activeData.length === 0) {
        this.$message.error(LANG['请先选择层级！'] || '请先选择层级！');
      } else {
        this.$emit("update-level", this.activeData);
        this.model.visible = false;
      }
    },

    //切换单选
    checkRadio() {
      let checkData = [];
      let list = this.model.lList;
      list.forEach(item => {
        if (item.disable) checkData.push({
          'lid': item.id,
          'val': item.name
        });
      });
      this.activeData = checkData;
    }

  },
  watch: {
    model: {
      handler(val, old) {
        if (!val.visible) this.activeData = [];
      },

      //是否绑定初始值
      immediate: false,
      //深度监听
      deep: true
    }
  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-75067faa","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/userLevelLayer.vue
var userLevelLayer_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"userLevelLayer"}},[_c('el-dialog',{attrs:{"title":_vm.LANG['修改会员等级'] || '修改会员等级',"size":"tiny"},model:{value:(_vm.model.visible),callback:function ($$v) {_vm.$set(_vm.model, "visible", $$v)},expression:"model.visible"}},[_c('h1',[_vm._v(_vm._s(_vm.LANG[_vm.model.title] || _vm.model.title))]),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.model.lList}},[_c('el-table-column',{attrs:{"prop":"date","label":_vm.LANG['等级选择'] || '等级选择',"width":"100"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('el-checkbox-group',{model:{value:(scope.row.disable),callback:function ($$v) {_vm.$set(scope.row, "disable", $$v)},expression:"scope.row.disable"}},[_c('el-checkbox',{on:{"change":_vm.checkRadio}})],1)]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"name","label":_vm.LANG['等级名称'] || '等级名称',"width":"100"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"desc","label":_vm.LANG['描述'] || '描述'}})],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.model.visible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.doLayered}},[_vm._v("确 定")])],1)],1)],1)}
var userLevelLayer_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/userLevelLayer.vue
function userLevelLayer_injectStyle (context) {
  __webpack_require__(485)
}
/* script */


/* template */

/* template functional */
var userLevelLayer_vue_template_functional_ = false
/* styles */
var userLevelLayer_vue_styles_ = userLevelLayer_injectStyle
/* scopeId */
var userLevelLayer_vue_scopeId_ = "data-v-75067faa"
/* moduleIdentifier (server only) */
var userLevelLayer_vue_module_identifier_ = null

var userLevelLayer_Component = Object(component_normalizer["a" /* default */])(
  userLevelLayer,
  userLevelLayer_render,
  userLevelLayer_staticRenderFns,
  userLevelLayer_vue_template_functional_,
  userLevelLayer_vue_styles_,
  userLevelLayer_vue_scopeId_,
  userLevelLayer_vue_module_identifier_
)

/* harmony default export */ var components_userLevelLayer = (userLevelLayer_Component.exports);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/userLevelSet.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var userLevelSet = ({
  data() {
    return {
      LANG
    };
  },

  props: {
    editForm: {
      type: Object,
      default: {}
    },
    setName: String
  },
  components: {},
  methods: {
    //保存数据
    saveForm() {
      this.$refs.editForm.validate(valid => {
        if (valid) {
          this.$emit('get-form', this.setName);
        }
      });
    },

    //数字金额验证
    validatorNumber(rule, value, callback) {
      if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
      } else {
        if (parseInt(value) < 0) {
          callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
        } else if (parseInt(value) > 99999999) {
          callback(new Error(LANG['输入金额不能大于99999999'] || '输入金额不能大于99999999'));
        } else {
          callback();
        }
      }
    },

    //数字次数验证
    validatorNumber1(rule, value, callback) {
      if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
      } else {
        if (parseInt(value) < 0) {
          callback(new Error(LANG['输入次数不能小于0次'] || '输入次数不能小于0次'));
        } else if (parseInt(value) > 999999999) {
          callback(new Error(LANG['输入次数不能大于999999999次'] || '输入次数不能大于999999999次'));
        } else {
          callback();
        }
      }
    },

    // 每次最低最高出款金额
    validatorNumber2(rule, value, callback) {
      if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
      } else {
        if (parseInt(value) < 1) {
          callback(new Error(LANG['输入金额必需不能少于 1'] || '输入金额必需不能少于 1'));
        } else if (parseInt(value) > 99999999) {
          callback(new Error(LANG['输入金额不能大于99999999'] || '输入金额不能大于99999999'));
        } else {
          callback();
        }
      }
    },

    // 打码倍数
    validatorNumber3(rule, value, callback) {
      if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
      } else {
        if (parseInt(value) < 1) {
          callback(new Error(LANG['倍数必须大于或等于1倍'] || '倍数必须大于或等于1倍'));
        } else if (parseInt(value) > 5) {
          callback(new Error(LANG['倍数必须小于5倍'] || '倍数必须小于5倍'));
        } else {
          callback();
        }
      }
    },

    //数字百分比验证
    validatorNumber4(rule, value, callback) {
      if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
      } else {
        if (value < 0) {
          callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
        } else if (value > 100) {
          callback(new Error(LANG['输入金额不能大于100'] || '输入金额不能大于100'));
        } else {
          callback();
        }
      }
    },

    //取消返回
    cancelFrom() {
      this.$emit('cancel-form');
    }

  },
  computed: {},

  mounted() {},

  created() {}

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-72c6a0d4","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/userLevelSet.vue
var userLevelSet_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w50 tCent",attrs:{"id":"userLevelSet"}},[_c('el-form',{ref:"editForm",attrs:{"model":_vm.editForm}},[_c('el-col',{staticClass:"mb20",attrs:{"span":24}},[_c('div',{staticClass:"grid-content bg-purple-dark mb10",staticStyle:{"text-align":"center"}},[_c('span',[_vm._v("【"+_vm._s(_vm.setName ? 'VIP' + _vm.setName : '未获取到')+"】")]),_vm._v("\n                "+_vm._s(_vm.LANG['出款相关设定'] || '出款相关设定')+"\n            ")])]),_vm._v(" "),_c('el-row',{attrs:{"gutter":22}},[_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"grid-content bg-purple"},[_c('span',[_vm._v(_vm._s(_vm.LANG['每次最低出款金额'] || '每次最低出款金额'))])])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"prop":"each_min_out","rules":[
                                  { required: true, message: '每次最低出款金额不能小于1',min:1},
                                  { validator: this.validatorNumber2}]}},[_c('el-input',{attrs:{"type":"number","auto-complete":"off"},model:{value:(_vm.editForm.each_min_out),callback:function ($$v) {_vm.$set(_vm.editForm, "each_min_out", $$v)},expression:"editForm.each_min_out"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"grid-content bg-purple"},[_c('span',[_vm._v(_vm._s(_vm.LANG['每日出款次数限制'] || '每日出款次数限制'))])])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"prop":"day_out_times","rules":[
                                  { required: true, message: '每日出款次数限制'},
                                  { validator: this.validatorNumber1}]}},[_c('el-input',{attrs:{"auto-complete":"off"},model:{value:(_vm.editForm.day_out_times),callback:function ($$v) {_vm.$set(_vm.editForm, "day_out_times", $$v)},expression:"editForm.day_out_times"}})],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":22}},[_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"grid-content bg-purple"},[_c('span',[_vm._v(_vm._s(_vm.LANG['每次最高出款金额'] || '每次最高出款金额'))])])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"prop":"each_max_out","rules":[
                                  { required: true, message: '每次最高出款金额'},
                                  { validator: this.validatorNumber2}]}},[_c('el-input',{attrs:{"type":"number","auto-complete":"off"},model:{value:(_vm.editForm.each_max_out),callback:function ($$v) {_vm.$set(_vm.editForm, "each_max_out", $$v)},expression:"editForm.each_max_out"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"grid-content bg-purple"},[_c('span',[_vm._v(_vm._s(_vm.LANG['每日出款免手续费笔数'] || '每日出款免手续费笔数'))])])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"prop":"day_out_times_nofee","rules":[
                                  { required: true, message: '每日出款免手续费笔数'},
                                  { validator: this.validatorNumber1}]}},[_c('el-input',{attrs:{"auto-complete":"off"},model:{value:(_vm.editForm.day_out_times_nofee),callback:function ($$v) {_vm.$set(_vm.editForm, "day_out_times_nofee", $$v)},expression:"editForm.day_out_times_nofee"}}),_vm._v(" "),(parseInt(_vm.editForm.day_out_times_nofee) > parseInt(_vm.editForm.day_out_times))?_c('p',{staticClass:"help_red",staticStyle:{"position":"absolute","bottom":"-2px"}},[_vm._v("每日限免不能大于每日出款次数")]):_vm._e()],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":22}},[_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"grid-content bg-purple"},[_c('span',[_vm._v(_vm._s(_vm.LANG['提现手续费'] || '提现手续费'))])])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"prop":"withdraw_fee","rules":[
                                  { required: true, message: '请输入提现手续费'},
                                  { validator: this.validatorNumber}]}},[_c('el-input',{attrs:{"auto-complete":"off"},model:{value:(_vm.editForm.withdraw_fee),callback:function ($$v) {_vm.$set(_vm.editForm, "withdraw_fee", $$v)},expression:"editForm.withdraw_fee"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"grid-content bg-purple"},[_c('span',[_vm._v(_vm._s(_vm.LANG['请输入线上打码倍数'] || '请输入线上打码倍数'))])])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"prop":"online_glide_multi","rules":[
                                  { required: true, message: '请输入线上打码倍数'},
                                  { validator: this.validatorNumber1}]}},[_c('el-input',{attrs:{"auto-complete":"off"},model:{value:(_vm.editForm.online_glide_multi),callback:function ($$v) {_vm.$set(_vm.editForm, "online_glide_multi", $$v)},expression:"editForm.online_glide_multi"}})],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":22}},[_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"grid-content bg-purple"},[_c('span',[_vm._v(_vm._s(_vm.LANG['线下打码倍数'] || '线下打码倍数'))])])]),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('el-form-item',{attrs:{"prop":"offline_glide_multi","rules":[
                                  { required: true, message: '请输入线下打码倍数'},
                                  { validator: this.validatorNumber1}]}},[_c('el-input',{attrs:{"auto-complete":"off"},model:{value:(_vm.editForm.offline_glide_multi),callback:function ($$v) {_vm.$set(_vm.editForm, "offline_glide_multi", $$v)},expression:"editForm.offline_glide_multi"}})],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":22}},[_c('el-col',{staticClass:"footer"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveForm}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.cancelFrom}},[_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))])],1)],1)],1)],1)}
var userLevelSet_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/userLevelSet.vue
function userLevelSet_injectStyle (context) {
  __webpack_require__(486)
}
/* script */


/* template */

/* template functional */
var userLevelSet_vue_template_functional_ = false
/* styles */
var userLevelSet_vue_styles_ = userLevelSet_injectStyle
/* scopeId */
var userLevelSet_vue_scopeId_ = "data-v-72c6a0d4"
/* moduleIdentifier (server only) */
var userLevelSet_vue_module_identifier_ = null

var userLevelSet_Component = Object(component_normalizer["a" /* default */])(
  userLevelSet,
  userLevelSet_render,
  userLevelSet_staticRenderFns,
  userLevelSet_vue_template_functional_,
  userLevelSet_vue_styles_,
  userLevelSet_vue_scopeId_,
  userLevelSet_vue_module_identifier_
)

/* harmony default export */ var components_userLevelSet = (userLevelSet_Component.exports);

// EXTERNAL MODULE: ./src/components/memberHierarSet.vue + 2 modules
var memberHierarSet = __webpack_require__(102);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/memberHierarchy.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var memberHierarchy = ({
  data() {
    return {
      LANG,
      // 会员层级限额
      limitVisible: false,
      limitform: {
        name: "",
        id: ""
      },
      nowId: 0,
      limitList: [],
      cancelLimitVisible: true,
      //tabs
      activeType: true,
      activeName: "agents",
      level_id: "",
      //表格数据
      columnsUrl: "",
      tableUrl: "",
      agentbaseUrl: "",
      //作为组件时的table
      searchTableUrl: "",
      //select 设置
      showSet: false,
      tableData: [],
      //会员层级编辑
      formConfig: [{
        //0
        "prop": "level",
        "value": "",
        "type": "select",
        "label": "会员层级",
        "placeholder": "请选择会员等级",
        "list": ARRAYS.LEVELSLIST,
        "disabled": true
      }, {
        //1
        "prop": "advance_valid_bet",
        "value": "",
        "type": "number",
        "label": "有效投注额",
        "placeholder": "请输入有效投注金额",
        "rules": [{
          "require": true
        }, {
          "varMax": 99999999
        }]
      }, {
        //2
        "prop": "advance_money",
        "value": "",
        "type": "text",
        "label": "历史充值",
        "placeholder": "请输入历史充值金额",
        "rules": [{
          "require": true
        }, {
          "moreZero": true
        }]
      }, {
        //3
        "prop": "gift",
        "value": "",
        "type": "number",
        "label": "奖励",
        "placeholder": "请输入奖励金额",
        "rules": [{
          "require": false,
          "max": 9,
          "min:": 1
        }]
      }, {
        //4
        "prop": "memo",
        "value": "",
        "type": "textarea",
        "label": "描述",
        "placeholder": "请输入描述",
        "rules": [{
          "max": 40
        }]
      }],
      size: 'tiny',
      type: "default",
      formType: "",
      formTitel: "",
      labelWidth: "110px",
      editVisible: {
        state: false
      },
      //查询条件
      searchType: "search",
      searchEdit: {},
      searchConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "会员名称"
      }],
      //会员分层
      userLeve: {
        lList: [],
        title: "",
        visible: false,
        nowLeve: ""
      },
      //当前数据ID
      nowId: -1,
      updateDate: {
        id: -1,
        row: {}
      },
      updated: false,
      confirmConfig: {
        state: false,
        msg: "",
        fn: ""
      },
      //是否编辑数据
      isEdit: {
        state: false
      },
      //会员层级设定
      editForm: {
        "level_id": "",
        "online_glide_multi": "",
        "offline_glide_multi": "",
        "each_min_out": "",
        "each_max_out": "",
        "day_out_times": "",
        "day_out_times_nofee": ""
      },
      //层级设定显示开关
      levelSet: false,
      //会员层名称
      setName: "",
      baseUrl: "",
      loading: false,
      //会员搜索
      members: '',
      //会员表格是否显示
      LevelTableShow: false,
      // 跳转会员显示列表
      colTwo: "",
      updateKeys: "",
      params: {}
    };
  },

  components: {
    memberHierarchy: components_memberHierarchy_table,
    formEdit: formEdit["a" /* default */],
    userLevelLayer: components_userLevelLayer,
    confirm: components_confirm["a" /* default */],
    userLevelSet: components_userLevelSet,
    memberHierarSet: memberHierarSet["default"]
  },
  methods: {
    init() {
      this.loading = true;
      this.activeType = true;
      this.members = "";
      this.activeName = 'agents';
      this.columnsUrl = "/static/json/accoutManage/memberHierarchy/columns.json";
      this.agentbaseUrl = URL.api + ROUTES.GET.user.levelsList;
      this.tableUrl = this.agentbaseUrl; //会员搜索

      this.searchTableUrl = URL.api + ROUTES.GET.user.level.group;
      this.baseUrl = URL.api + ROUTES.GET.user.level.group;
      this.LevelTableShow = false;
      this.getLimitModel();
      this.loading = false;
    },

    //会员层级的tabs
    navTabsChange1() {
      this.activeType = true;
      this.activeName = 'agents';
    },

    navTabsChange2() {
      this.members = "";
      this.LevelTableShow = false;
      this.activeType = false;
      this.activeName = 'searLevel';
    },

    //返回显示表格
    returnPage() {
      this.levelSet = false;
      this.updated = true;
    },

    cleanFrom(date) {
      if (date.clear) {
        this.members = "";
      }
    },

    //表格按钮事件
    doHandle(item) {
      this.updated = false;
      this.nowId = item.id || -1;
      this.formType = "";

      switch (item.fn) {
        case "doEdit":
          this.doEdit(item.row);
          break;

        case "doSet":
          this.doSet(item.row);
          break;

        case "doSeatchMember":
          this.doSeatchMember(item.row);
          break;

        case "doLimitLines":
          this.doLimitLines(item.row);
          break;
      }
    },

    // 限额
    doLimitLines(row) {
      this.nowId = row.id;
      this.limitform["name"] = row.name;
      this.limitform["id"] = ""; // 判断用户是否已经绑定模版

      this.cancelLimitVisible = row.tid ? true : false;

      if (row.tid) {
        this.cancelLimitVisible = true;
        this.limitform["id"] = parseInt(row.tid);
      } else {
        this.cancelLimitVisible = false;
        this.limitform["id"] = "";
      }

      this.limitVisible = true;
    },

    //查询
    doQuery(obj) {
      let query = {};
      query.members = this.members;
      this.colTwo = "init";
      this.LevelTableShow = true;
      this.searchTableUrl = this.baseUrl + this.addSearch(query);
    },

    resetForm() {
      this.LevelTableShow = false;
    },

    // 跳转会员页
    doSeatchMember(row) {
      let colTwo = false;

      if (/^0000/.test(row.deposit_stime) || /^0000/.test(row.deposit_etime)) {
        colTwo = true;
      } else {
        colTwo = false;
      }

      this.level_id = row.level;
      parseInt(row.num) > 0 ? this.$router.push({
        path: "/memberHierarSet",
        query: {
          level: parseInt(row.level),
          coltwo: colTwo
        }
      }) : this.$message.error(LANG['无层级人数'] || '无层级人数');
    },

    //保存
    getForm(obj) {
      let str = "",
          url = "",
          model = {},
          _this = this;

      model.advance_money = obj.formObj.advance_money;
      model.advance_valid_bet = obj.formObj.advance_valid_bet;
      model.gift = obj.formObj.gift;
      model.level = obj.formObj.level;
      model.memo = obj.formObj.memo;
      url = URL.api + ROUTES.PUT.user.level.$ + '/' + obj.formObj.level;
      this.$.autoAjax('put', url, model, {
        ok: res => {
          if (res.state === 0 && res.data) {
            str = _this.LANG['恭喜您，会员等级修改成功！'] || '恭喜您，会员等级修改成功！';

            _this.$message.success(str);
          } else {
            str = _this.LANG['会员等级修改失败，请稍候重试！'] || '会员等级修改失败，请稍候重试！';

            _this.$message.error(str);
          }

          _this.updated = true;
          _this.loading = false;
          _this.formType = "";
        },
        error: e => {
          _this.loading = false;
          console.log(e.responseJSON.msg);
        }
      });
    },

    //编辑
    doEdit(row) {
      console.log(row);
      this.loading = true;
      this.formType = "";
      this.nowId = row.id;
      this.formTitel = "编辑会员等级";

      let _this = this;

      setTimeout(() => {
        FORMVAL(row, _this.formConfig);
        _this.formConfig[0].value = row['level'];
        _this.formConfig[1].value = row['advance_valid_bet'];
        _this.formConfig[2].value = row['advance_money'];
        _this.formConfig[3].value = row['gift'];
        _this.formConfig[4].value = row['memo'];
        _this.formType = "edit";
        _this.isEdit.state = true;
        _this.editVisible.state = true;
        _this.loading = false;
      }, 500);
    },

    //系统提示
    doConfirm(obj) {
      this.updated = false;
    },

    //会员等级设定
    doSet(row) {
      this.setName = row.level;

      let _this = this,
          editForm = this.editForm;

      this.loading = true;
      this.$.autoAjax('get', URL.api + ROUTES.GET.user.level.set.$(parseInt(row.level)), '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let obj = res.data || [];
            editForm['each_min_out'] = obj['each_min_out'].toString();
            editForm['each_max_out'] = obj['each_max_out'].toString();
            editForm['day_out_times'] = obj['day_out_times'].toString();
            editForm['day_out_times_nofee'] = obj['day_out_times_nofee'].toString();
            editForm['online_glide_multi'] = obj['online_glide_multi'].toString();
            editForm['offline_glide_multi'] = obj['offline_glide_multi'].toString();
            editForm['withdraw_fee'] = obj['withdraw_fee'].toString();
            this.levelSet = true;
          } else {
            _this.$message.error(_this.LANG['会员等级获取资料失败，请稍候重试！'] || '会员等级获取资料失败，请稍候重试！');
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          console.log(e.responseJSON.msg);
        }
      });
    },

    MultiplyMoney(num) {
      let money = parseFloat(num);
      return money === 0 ? 0 : money * 100;
    },

    //保存会员层级设定
    saveSet(setlevel) {
      let _this = this;

      let query = {
        "each_min_out": this.editForm.each_min_out,
        "each_max_out": this.editForm.each_max_out,
        "day_out_times": this.editForm.day_out_times,
        "day_out_times_nofee": this.editForm.day_out_times_nofee,
        "withdraw_fee": this.editForm.withdraw_fee,
        "online_glide_multi": this.editForm.online_glide_multi,
        "offline_glide_multi": this.editForm.offline_glide_multi
      };

      if (parseInt(query.day_out_times_nofee) > parseInt(query.day_out_times)) {
        this.$message.error('请检查填写内容是否符合要求');
      } else {
        this.loading = true;
        this.$.autoAjax('put', URL.api + ROUTES.PUT.user.level.set + '/' + setlevel, query, {
          ok: res => {
            if (res.state == 0 && res.data) {
              this.$message.success(this.LANG['恭喜您，VIP' + setlevel + '出入款设置成功！'] || '恭喜您，VIP' + setlevel + '出入款设置成功！');
              this.levelSet = false;
            } else {
              this.$message.error(this.LANG['Sorry，VIP' + setlevel + '出入款设置失败！'] || 'Sorry，VIP' + setlevel + '出入款设置失败！');
              this.levelSet = false;
            }

            this.loading = false;
          },
          p: () => {},
          error: e => {
            console.log(e.responseJSON.msg);
          }
        });
      }
    },

    //取消设定
    cancelForm() {
      this.levelSet = false;
    },

    resetForm() {
      this.init();
    },

    // 重置查询
    getResetPage() {//                this.LevelTableShow = false;
    },

    // 保存数据,清除数据并隐藏表格
    saveData(obj) {
      this.LevelTableShow = false;
      this.updateKeys = "members";
    },

    // 限额操作
    saveLimit() {
      if (this.limitform["id"] === "") {
        this.$message.error(LANG["请至少选中一个模版"] || "请至少选中一个模版");
        return;
      }

      this.updated = false;
      this.$.autoAjax('put', URL.api + '/lottery/template.levels', {
        "tid": parseInt(this.limitform.id),
        "level_id": this.nowId
      }, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(LANG["恭喜您，会员层级限额成功！"] || "恭喜您，会员层级限额成功！");
            this.updated = true;
          } else if (res.state == 405) {
            this.$message.error(LANG["会员层级限额失败,权限不足！"] || "会员层级限额失败,权限不足！");
          } else {
            this.$message.error(LANG["会员层级限额失败！"] || "会员层级限额失败！");
          }

          this.limitVisible = false;
        },
        p: () => {},
        error: e => {
          console.log(e.responseJSON.msg);
        }
      });
    },

    cancelLimit() {
      let arr = [];
      arr.push(this.nowId);
      this.updated = false;
      this.$.autoAjax('post', URL.api + '/lottery/template.users', {
        "user_id": arr
      }, {
        ok: res => {
          if (res.state === 0) {
            this.$message.success(LANG["恭喜您，会员层级取消限额成功！"] || "恭喜您，会员层级取消限额成功！");
            this.limitform["id"] = "";
            this.cancelLimitVisible = false;
            this.updated = true;
          } else if (res.state == 405) {
            this.$message.error(LANG["会员层级取消限额失败,权限不足！"] || "会员层级取消限额失败,权限不足！");
          } else {
            this.$message.error(LANG["会员层级取消限额失败！"] || "会员层级取消限额失败！");
          }
        },
        p: () => {},
        error: e => {
          console.log(e.responseJSON.msg);
        }
      });
    },

    // 获取彩票模版（限额操作用）
    getLimitModel() {
      this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.template, '', {
        ok: res => {
          if (res.state === 0) {
            this.limitList = [];
            let model = res.data;

            for (let i of model) {
              // 派出默认的彩票模版
              if (i.t_id != "1") {
                this.limitList.push({
                  "id": parseInt(i.t_id),
                  "name": i.t_name
                });
              }
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 新窗口打开游戏模版
    gotoLotteryOdds(id, name) {
      window.open(window.location.origin + '/lotteryOdds?id=' + id + '&name=' + name);
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  activated() {
    this.init();
    this.returnPage();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5545c2ea","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/memberHierarchy.vue
var memberHierarchy_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"page clearfix",attrs:{"id":"memberHierarchy"}},[_c('div',{staticClass:"w100 main el-card box-card el-tabs"},[_c('div',{staticClass:"el-tabs__header clearfix",staticStyle:{"border":"0","margin":"0"}},[_c('ul',{staticClass:"navTabs font14 el-tabs__nav w100"},[_c('li',{staticClass:"fl tCent el-tabs__item",staticStyle:{"padding":"0"}},[_c('a',{class:{navOne:_vm.activeType},attrs:{"href":"javascript:;"},on:{"click":_vm.navTabsChange1}},[_vm._v(_vm._s(_vm.LANG['等级管理'] || '等级管理'))])]),_vm._v(" "),_c('li',{staticClass:"fl tCent el-tabs__item",staticStyle:{"padding":"0"}},[_c('a',{class:{navTwo:!_vm.activeType},attrs:{"href":"javascript:;"},on:{"click":_vm.navTabsChange2}},[_vm._v(_vm._s(_vm.LANG['会员查询'] || '会员查询'))])])])]),_vm._v(" "),_c('ul',{staticClass:"navContant w100 el-tabs__content"},[(_vm.activeType)?_c('li',{staticClass:"w100 el-tab-pane"},[_c('el-row',{staticClass:"pleft20 pRight20 mt10 mb10"},[_c('el-col',{directives:[{name:"show",rawName:"v-show",value:(!_vm.levelSet),expression:"!levelSet"}],staticClass:"mt10"},[_c('memberHierarchy',{attrs:{"columnsUrl":_vm.columnsUrl,"dataModelUrl":_vm.tableUrl,"updated":_vm.updated,"formType":_vm.formType},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',[_c('formEdit',{staticClass:"addLevers",attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.editVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType,"size":_vm.size},on:{"get-form":_vm.getForm}})],1),_vm._v(" "),_c('el-col'),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.levelSet),expression:"levelSet"}],staticClass:"bankBtn",on:{"click":_vm.returnPage}},[_c('el-button',{attrs:{"type":"primary","size":"small","icon":"arrow-left"},on:{"click":_vm.returnPage}},[_vm._v("\n                            "+_vm._s(_vm.LANG['返 回'] || '返 回')+"\n                        ")])],1),_vm._v(" "),(_vm.levelSet)?_c('el-col',{attrs:{"span":20,"offset":2}},[_c('userLevelSet',{attrs:{"editForm":_vm.editForm,"setName":_vm.setName},on:{"get-form":_vm.saveSet,"cancel-form":_vm.cancelForm}})],1):_vm._e()],1)],1):_vm._e(),_vm._v(" "),(!_vm.activeType)?_c('li',{staticClass:"w100 el-tab-pane"},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-col',{staticStyle:{"padding":"10px"},attrs:{"span":24}},[_c('label',{staticClass:"font14",staticStyle:{"width":"80px","color":"#475669"}},[_vm._v("用户名:")]),_vm._v(" "),_c('el-input',{staticStyle:{"width":"300px","vertical-align":"middle"},attrs:{"type":"textarea","rows":1,"placeholder":"多用户之间用英文逗号隔开"},model:{value:(_vm.members),callback:function ($$v) {_vm.members=$$v},expression:"members"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.doQuery}},[_vm._v("\n                                "+_vm._s(_vm.LANG['查 询'] || '查 询')+"\n                            ")]),_vm._v(" "),_c('span',{staticClass:"help_gray"},[_vm._v("提示：多用户查询，请在多用户之间用英文逗号隔开。")])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[(_vm.LevelTableShow)?_c('memberHierarSet',{attrs:{"activeName":_vm.activeName,"colTwo":_vm.colTwo,"searchTableUrl":_vm.searchTableUrl},on:{"get-reset":_vm.getResetPage,"save-data":_vm.saveData,"clearFrom":_vm.cleanFrom}}):_vm._e()],1)],1)],1):_vm._e()])]),_vm._v(" "),_c('el-dialog',{attrs:{"title":"层级限额","size":"tiny"},model:{value:(_vm.limitVisible),callback:function ($$v) {_vm.limitVisible=$$v},expression:"limitVisible"}},[_c('el-form',{ref:"limitform",attrs:{"model":_vm.limitform,"label-width":"80px"}},[_c('div',{staticStyle:{"line-height":"30px"}},[_vm._v(_vm._s(_vm.LANG['层级名称'] || '层级名称')+"： "+_vm._s(_vm.limitform.name))]),_vm._v(" "),_c('div',{staticStyle:{"border-bottom":"1px solid #ccc","line-hieght":"30px","margin-bottom":"10px"}},[_vm._v("彩票")]),_vm._v(" "),_c('el-radio-group',{model:{value:(_vm.limitform.id),callback:function ($$v) {_vm.$set(_vm.limitform, "id", $$v)},expression:"limitform.id"}},_vm._l((_vm.limitList),function(item,index){return _c('div',{key:index,staticStyle:{"margin":"5px 0","height":"20px"}},[_c('div',{staticStyle:{"float":"left"}},[_c('el-radio',{attrs:{"label":item.id}},[_c('span')])],1),_vm._v(" "),_c('div',{staticStyle:{"float":"left","width":"400px","height":"20px","font-size":"14px","line-height":"20px","margin-left":"15px","cursor":"pointer"},on:{"click":function($event){return _vm.gotoLotteryOdds(item.id, item.name)}}},[_vm._v("\n                        "+_vm._s(item.name)+"\n                    ")])])}),0)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.limitVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveLimit}},[_vm._v("确 定")])],1)],1)],1)}
var memberHierarchy_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/userManagement/memberHierarchy.vue
function memberHierarchy_injectStyle (context) {
  __webpack_require__(483)
}
/* script */


/* template */

/* template functional */
var memberHierarchy_vue_template_functional_ = false
/* styles */
var memberHierarchy_vue_styles_ = memberHierarchy_injectStyle
/* scopeId */
var memberHierarchy_vue_scopeId_ = "data-v-5545c2ea"
/* moduleIdentifier (server only) */
var memberHierarchy_vue_module_identifier_ = null

var memberHierarchy_Component = Object(component_normalizer["a" /* default */])(
  memberHierarchy,
  memberHierarchy_render,
  memberHierarchy_staticRenderFns,
  memberHierarchy_vue_template_functional_,
  memberHierarchy_vue_styles_,
  memberHierarchy_vue_scopeId_,
  memberHierarchy_vue_module_identifier_
)

/* harmony default export */ var userManagement_memberHierarchy = __webpack_exports__["default"] = (memberHierarchy_Component.exports);


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);