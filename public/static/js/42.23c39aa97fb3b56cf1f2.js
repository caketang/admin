(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/myDatePicker.vue + 4 modules
var myDatePicker = __webpack_require__(240);

// EXTERNAL MODULE: ./src/components/quickDate.vue + 2 modules
var quickDate = __webpack_require__(223);

// CONCATENATED MODULE: ./node_modules/element-ui/packages/row/src/row.js
/* harmony default export */ var row = ({
  name: 'ElRow',
  componentName: 'ElRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    style() {
      var ret = {};

      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`;
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    }

  },

  render(h) {
    return h(this.tag, {
      class: ['el-row', this.justify !== 'start' ? `is-justify-${this.justify}` : '', this.align !== 'top' ? `is-align-${this.align}` : '', {
        'el-row--flex': this.type === 'flex'
      }],
      style: this.style
    }, this.$slots.default);
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/discountCondition.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var discountCondition = ({
  data() {
    return {
      LANG,
      //表格相关
      activeName: "allMembers",
      reSet: false,
      reSet1: false,
      vipList: [],
      gameList: [],
      editForm: {
        //默认选中项
        isIndeterminate: true,
        isIndeterminate1: true,
        date_from: '',
        date_to: '',
        vipType: true,
        gameType: true,
        gameTypeDz: false,
        gameTypeSx: false,
        checkedDefut: [],
        checkedDefut1: []
      },
      editForm1: {
        //默认选中项
        isIndeterminate: true,
        isIndeterminate1: true,
        date_from: '',
        date_to: '',
        input: '',
        vipType: true,
        gameType: true,
        gameTypeDz: false,
        gameTypeSx: false,
        checkedDefut: [],
        checkedDefut1: []
      },
      rules: {
        date_from: [{
          required: true,
          message: '请输入开始时间',
          trigger: 'change'
        }],
        date_to: [{
          required: true,
          message: '请输入结束时间',
          trigger: 'change'
        }],
        checkedDefut: [{
          type: 'array',
          required: true,
          message: '请至少选择一个会员等级',
          trigger: 'change'
        }],
        checkedDefut1: [{
          type: 'array',
          required: true,
          message: '请至少选择一个会员等级',
          trigger: 'change'
        }]
      },
      rules1: {
        date_from: [{
          required: true,
          message: '请输入开始时间',
          trigger: 'change'
        }],
        date_to: [{
          required: true,
          message: '请输入结束时间',
          trigger: 'change'
        }],
        input: [{
          required: true,
          message: '请输入会员账号',
          trigger: 'change'
        }],
        checkedDefut1: [{
          type: 'array',
          required: true,
          message: '请至少选择一个会员等级',
          trigger: 'change'
        }]
      }
    };
  },

  components: {
    ElRow: row,
    datepicker: myDatePicker["a" /* default */],
    quickDate: quickDate["a" /* default */]
  },
  methods: {
    init() {
      this.editForm.date_to = FORMATDATEPICKER(new Date(parseInt(sessionStorage.dateTime)));
      this.editForm.date_from = FORMATDATEPICKER(new Date(parseInt(sessionStorage.dateTime)));
      this.editForm1.date_to = FORMATDATEPICKER(new Date(parseInt(sessionStorage.dateTime)));
      this.editForm1.date_from = FORMATDATEPICKER(new Date(parseInt(sessionStorage.dateTime)));
      this.reqVips();
      this.reqGames();
    },

    handleClick() {},

    reqGames() {
      let _this = this;

      let url = URL.api + '/games';
      this.$.autoAjax('get', url, '', {
        ok: res => {
          if (res.data) {
            let model = res.data;

            for (let i in model) {
              _this.gameList.push({
                "label": model[i].game_name,
                "type": model[i].game_type,
                "value": model[i].game_id
              });

              this.editForm.checkedDefut1.push(model[i].game_name);
              this.editForm1.checkedDefut1.push(model[i].game_name);
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    /**
     * 获取会员等级
     */
    reqVips() {
      let _this = this,
          levelUrl = URL.api + ROUTES.GET.user.level.list;

      this.$.autoAjax('get', levelUrl, '', {
        ok: res => {
          if (res.data) {
            let model = res.data;

            for (let i in model) {
              _this.vipList.push({
                "label": "VIP" + model[i].level,
                "value": model[i].level
              });

              this.editForm.checkedDefut.push("VIP" + model[i].level);
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    getDay(obj) {
      this.editForm.date_from = obj.sday;
      this.editForm.date_to = obj.eday;
    },

    getDay1(obj) {
      this.editForm1.date_from = obj.sday;
      this.editForm1.date_to = obj.eday;
    },

    //会员全选
    handleCheckAllChange(event) {
      let checkList = [];

      for (let v in this.vipList) {
        checkList[v] = this.vipList[v].label;
      }

      ;
      this.editForm.checkedDefut = event.target.checked ? checkList : [];
      this.editForm.isIndeterminate = false;
    },

    //游戏全选
    handleCheckGameAllChange(event) {
      let checkList = [];

      for (let v in this.gameList) {
        checkList[v] = this.gameList[v].label;
      }

      ;
      this.editForm.checkedDefut1 = event.target.checked ? checkList : [];
      this.editForm.isIndeterminate1 = false;
      this.editForm.gameTypeDz = false;
      this.editForm.gameTypeSx = false;
    },

    //全选
    handleCheckAllChange1(event) {
      let checkList = [];

      for (let v in this.gameList) {
        checkList[v] = this.gameList[v].label;
      }

      ;
      this.editForm1.checkedDefut1 = event.target.checked ? checkList : [];
      this.editForm1.isIndeterminate = false;
      this.editForm1.gameTypeDz = false;
      this.editForm1.gameTypeSx = false;
    },

    handleCheckAllChangeDz(event) {
      let arr = this.gameList.filter(item => {
        return item.type === "egame";
      });
      let checkList = [];

      for (let v in arr) {
        checkList[v] = arr[v].label;
      }

      ;
      this.editForm.checkedDefut1 = event.target.checked ? checkList : [];
      this.editForm.isIndeterminate1 = false;
      this.editForm.gameType = false;
      this.editForm.gameTypeSx = false;
    },

    handleCheckAllChangeSx(event) {
      let arr = this.gameList.filter(item => {
        return item.type === "live";
      });
      let checkList = [];

      for (let v in arr) {
        checkList[v] = arr[v].label;
      }

      ;
      this.editForm.checkedDefut1 = event.target.checked ? checkList : [];
      this.editForm.isIndeterminate1 = false;
      this.editForm.gameType = false;
      this.editForm.gameTypeDz = false;
    },

    handleCheckAllChangeDz1(event) {
      let arr = this.gameList.filter(item => {
        return item.type === "egame";
      });
      let checkList = [];

      for (let v in arr) {
        checkList[v] = arr[v].label;
      }

      ;
      this.editForm1.checkedDefut1 = event.target.checked ? checkList : [];
      this.editForm1.isIndeterminate1 = false;
      this.editForm1.gameType = false;
      this.editForm1.gameTypeSx = false;
    },

    handleCheckAllChangeSx1(event) {
      let arr = this.gameList.filter(item => {
        return item.type === "live";
      });
      let checkList = [];

      for (let v in arr) {
        checkList[v] = arr[v].label;
      }

      ;
      this.editForm1.checkedDefut1 = event.target.checked ? checkList : [];
      this.editForm1.isIndeterminate1 = false;
      this.editForm1.gameTypeDz = false;
      this.editForm1.gameType = false;
    },

    handleCheckedDefutChange() {},

    //提交表单
    doSubmit() {
      let _this = this;

      let name = this.activeName;

      if (name === 'allMembers') {
        this.$refs.form.validate(valid => {
          if (valid) {
            let dateFrom = this.editForm.date_from;
            let dateTo = this.editForm.date_to;
            let member = '';
            let check = this.editForm.checkedDefut;
            let checkList = [];
            let memberAll = '';
            check.forEach(item => {
              this.vipList.forEach(item1 => {
                if (item === item1.label) {
                  checkList.push(item1);
                }
              });
            });

            if (check.length === 1) {
              member = checkList.map(item => {
                return item.value;
              })[0];
            } else {
              member = checkList.map(item => {
                return item.value;
              }).join(',');
            }

            if (check.length === this.vipList.length) {
              memberAll = '全部';
            } else if (check.length === 1) {
              memberAll = check[0];
            } else {
              memberAll = check.join(',');
            }

            let game = '';
            let gameType = '';
            let gameCheck = this.editForm.checkedDefut1;
            let gameCheckList = [];
            let gameAll = '';
            gameCheck.forEach(item => {
              this.gameList.forEach(item1 => {
                if (item === item1.label) {
                  gameCheckList.push(item1);
                }
              });
            });

            if (gameCheck.length === 1) {
              game = gameCheckList.map(item => {
                return item.value;
              })[0];
              gameType = gameCheckList.map(item => {
                return item.type;
              })[0];
            } else {
              game = gameCheckList.map(item => {
                return parseInt(item.value);
              }).join(',');
              gameType = gameCheckList.map(item => {
                return item.type;
              }).join(',');
            }

            if (gameCheck.length === this.gameList.length) {
              gameAll = '全部';
            } else if (gameCheck.length === 1) {
              gameAll = gameCheck[0];
            } else {
              gameAll = gameCheck.join(',');
            }

            this.$router.push({
              path: "/queryDetail",
              query: {
                date_from: dateFrom,
                date_to: dateTo,
                level_id: member,
                game_id: game,
                gameType: gameType,
                type: "level",
                gameAll: gameAll,
                memberAll: memberAll
              }
            });
          } else {
            //							console.log('error submit!!');
            return false;
          }
        });
      } else {
        this.$refs.form1.validate(valid => {
          if (valid) {
            let dateFrom = this.editForm1.date_from;
            let dateTo = this.editForm1.date_to;
            let user_name = this.editForm1.input;
            let game = '';
            let gameType = '';
            let gameCheck = this.editForm1.checkedDefut1;
            let gameCheckList = [];
            let gameAll = '';
            gameCheck.forEach(item => {
              this.gameList.forEach(item1 => {
                if (item === item1.label) {
                  gameCheckList.push(item1);
                }
              });
            });

            if (gameCheck.length === 1) {
              game = gameCheckList.map(item => {
                return item.value;
              })[0];
              gameType = gameCheckList.map(item => {
                return item.type;
              })[0];
            } else {
              game = gameCheckList.map(item => {
                return item.value;
              }).join(',');
              gameType = gameCheckList.map(item => {
                return item.type;
              }).join(',');
            }

            if (gameCheck.length === this.gameList.length) {
              gameAll = '全部';
            } else if (gameCheck.length === 1) {
              gameAll = gameCheck[0];
            } else {
              gameAll = gameCheck.join(',');
            }

            this.$router.push({
              path: "/queryDetail",
              query: {
                date_from: dateFrom,
                date_to: dateTo,
                user_name: user_name,
                game_id: game,
                gameType: gameType,
                gameAll: gameAll,
                type: "uname"
              }
            });
          } else {
            //							console.log('error submit!!');
            return false;
          }
        });
      }
    },

    beginTimeChange() {
      this.editForm.date_from = FORMATDAT(this.editForm.date_from, 'yyyy-MM-dd');
    },

    endTimeChange() {
      this.editForm.date_to = FORMATDAT(this.editForm.date_to, 'yyyy-MM-dd');
    },

    beginTimeChange1() {
      this.editForm1.date_from = FORMATDAT(this.editForm1.date_from, 'yyyy-MM-dd');
    },

    endTimeChange1() {
      this.editForm1.date_to = FORMATDAT(this.editForm1.date_to, 'yyyy-MM-dd');
    },

    goback() {
      this.$router.push({
        path: "/discount"
      });
    }

  },
  computed: {},

  mounted() {
    $('body').on('click', () => {
      $('#tooltip').hide();
    });
    let wHeight = window.innerHeight;
    $('#act_apply').css('height', wHeight - 100);
  },

  created() {
    this.init();
  },

  beforeRouteLeave(to, from, next) {
    this.$refs.form.resetFields();
    this.$refs.form1.resetFields();
    this.vipList.forEach(item => {
      this.editForm.checkedDefut.push(item.label);
    });
    this.gameList.forEach(item => {
      this.editForm.checkedDefut1.push(item.label);
      this.editForm1.checkedDefut1.push(item.label);
    });
    next(true);
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-25584818","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/discountCondition.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"act_apply"}},[_c('div',{staticClass:"title"},[_c('a',{attrs:{"href":"javascript:;"},on:{"click":_vm.goback}},[_c('el-button',{attrs:{"type":"primary","icon":"arrow-left","size":"small"}},[_vm._v(_vm._s(_vm.LANG['返 回'] || '返 回'))])],1)]),_vm._v(" "),_c('el-tabs',{on:{"tab-click":_vm.handleClick},model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},[_c('el-tab-pane',{attrs:{"label":_vm.LANG['所有会员'] || '所有会员',"name":"allMembers"}},[_c('el-form',{ref:"form",staticClass:"w60 pleft",staticStyle:{"border":"1px solid #e4e4e4","min-width":"730px"},attrs:{"model":_vm.editForm,"rules":_vm.rules,"label-width":"80px"}},[_c('div',{staticClass:"clear"},[_c('el-col',{staticClass:"cpSeachData mt10 fl",attrs:{"span":13}},[_c('el-form-item',{attrs:{"label":_vm.LANG['日期'] || '日期',"required":""}},[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":"date_from"}},[_c('datepicker',{on:{"get-date":_vm.beginTimeChange},model:{value:(_vm.editForm.date_from),callback:function ($$v) {_vm.$set(_vm.editForm, "date_from", $$v)},expression:"editForm.date_from"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":2}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":"date_to"}},[_c('datepicker',{on:{"get-date":_vm.endTimeChange},model:{value:(_vm.editForm.date_to),callback:function ($$v) {_vm.$set(_vm.editForm, "date_to", $$v)},expression:"editForm.date_to"}})],1)],1)],1)],1),_vm._v(" "),_c('el-col',{staticClass:"mt10 mb10 fl",staticStyle:{"padding-top":"5px"},attrs:{"span":11}},[_c('quickDate',{attrs:{"reSet":_vm.reSet},on:{"get-day":_vm.getDay}})],1)],1),_vm._v(" "),_c('div',{staticClass:"clear cl",staticStyle:{"padding":"20px 0"}},[_c('el-col',{attrs:{"span":20}},[_c('el-form-item',{attrs:{"label":"会员层级","prop":"checkedDefut","required":""}},[_c('el-checkbox',{attrs:{"indeterminate":_vm.editForm.isIndeterminate},on:{"change":_vm.handleCheckAllChange},model:{value:(_vm.editForm.vipType),callback:function ($$v) {_vm.$set(_vm.editForm, "vipType", $$v)},expression:"editForm.vipType"}},[_vm._v("全部\n                            ")]),_vm._v(" "),_c('div',{staticStyle:{"margin":"15px 0"}}),_vm._v(" "),_c('el-checkbox-group',{on:{"change":_vm.handleCheckedDefutChange},model:{value:(_vm.editForm.checkedDefut),callback:function ($$v) {_vm.$set(_vm.editForm, "checkedDefut", $$v)},expression:"editForm.checkedDefut"}},_vm._l((_vm.vipList),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.label,"name":"type"}})}),1)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"clear game"},[_c('el-col',{attrs:{"span":20}},[_c('el-form-item',{attrs:{"prop":"checkedDefut1","label":"游戏平台","required":""}},[_c('el-checkbox',{attrs:{"indeterminate":_vm.editForm.isIndeterminate1},on:{"change":_vm.handleCheckGameAllChange},model:{value:(_vm.editForm.gameType),callback:function ($$v) {_vm.$set(_vm.editForm, "gameType", $$v)},expression:"editForm.gameType"}},[_vm._v("全部")]),_vm._v(" "),_c('el-checkbox',{on:{"change":_vm.handleCheckAllChangeDz},model:{value:(_vm.editForm.gameTypeDz),callback:function ($$v) {_vm.$set(_vm.editForm, "gameTypeDz", $$v)},expression:"editForm.gameTypeDz"}},[_vm._v("电子")]),_vm._v(" "),_c('el-checkbox',{on:{"change":_vm.handleCheckAllChangeSx},model:{value:(_vm.editForm.gameTypeSx),callback:function ($$v) {_vm.$set(_vm.editForm, "gameTypeSx", $$v)},expression:"editForm.gameTypeSx"}},[_vm._v("视讯")]),_vm._v(" "),_c('div',{staticStyle:{"margin":"15px 0"}}),_vm._v(" "),_c('el-checkbox-group',{model:{value:(_vm.editForm.checkedDefut1),callback:function ($$v) {_vm.$set(_vm.editForm, "checkedDefut1", $$v)},expression:"editForm.checkedDefut1"}},_vm._l((_vm.gameList),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.label,"name":"type"}})}),1)],1)],1)],1)])],1),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":_vm.LANG['单个会员'] || '单个会员',"name":"single"}},[_c('el-form',{ref:"form1",staticClass:"w60 pleft",staticStyle:{"border":"1px solid #e4e4e4","min-width":"730px"},attrs:{"model":_vm.editForm1,"rules":_vm.rules1,"label-width":"80px"}},[_c('div',{staticClass:"clear"},[_c('el-col',{staticClass:"cpSeachData mt10",attrs:{"span":13}},[_c('el-form-item',{attrs:{"label":_vm.LANG['日期'] || '日期',"required":""}},[_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":"date_from"}},[_c('datepicker',{on:{"get-date":_vm.beginTimeChange1},model:{value:(_vm.editForm1.date_from),callback:function ($$v) {_vm.$set(_vm.editForm1, "date_from", $$v)},expression:"editForm1.date_from"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":2}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('el-form-item',{attrs:{"prop":"date_to"}},[_c('datepicker',{on:{"get-date":_vm.endTimeChange1},model:{value:(_vm.editForm1.date_to),callback:function ($$v) {_vm.$set(_vm.editForm1, "date_to", $$v)},expression:"editForm1.date_to"}})],1)],1)],1)],1),_vm._v(" "),_c('el-col',{staticClass:"mt10 mb10",staticStyle:{"padding-top":"5px"},attrs:{"span":11}},[_c('quickDate',{attrs:{"reSet":_vm.reSet},on:{"get-day":_vm.getDay1}})],1)],1),_vm._v(" "),_c('div',{staticClass:"clear",staticStyle:{"padding":"20px 0"}},[_c('el-col',{attrs:{"span":20}},[_c('el-form-item',{staticClass:"w70",attrs:{"prop":"input","label":"会员账号"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"输入会员账号，多个会员帐号之间用英文逗号(,)隔开"},model:{value:(_vm.editForm1.input),callback:function ($$v) {_vm.$set(_vm.editForm1, "input", $$v)},expression:"editForm1.input"}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"clear game"},[_c('el-col',{attrs:{"span":20}},[_c('el-form-item',{attrs:{"prop":"checkedDefut1","label":"游戏平台","required":""}},[_c('el-checkbox',{attrs:{"indeterminate":_vm.editForm1.isIndeterminate1},on:{"change":_vm.handleCheckAllChange1},model:{value:(_vm.editForm1.gameType),callback:function ($$v) {_vm.$set(_vm.editForm1, "gameType", $$v)},expression:"editForm1.gameType"}},[_vm._v("全部")]),_vm._v(" "),_c('el-checkbox',{on:{"change":_vm.handleCheckAllChangeDz1},model:{value:(_vm.editForm1.gameTypeDz),callback:function ($$v) {_vm.$set(_vm.editForm1, "gameTypeDz", $$v)},expression:"editForm1.gameTypeDz"}},[_vm._v("电子")]),_vm._v(" "),_c('el-checkbox',{on:{"change":_vm.handleCheckAllChangeSx1},model:{value:(_vm.editForm1.gameTypeSx),callback:function ($$v) {_vm.$set(_vm.editForm1, "gameTypeSx", $$v)},expression:"editForm1.gameTypeSx"}},[_vm._v("视讯")]),_vm._v(" "),_c('div',{staticStyle:{"margin":"15px 0"}}),_vm._v(" "),_c('el-checkbox-group',{model:{value:(_vm.editForm1.checkedDefut1),callback:function ($$v) {_vm.$set(_vm.editForm1, "checkedDefut1", $$v)},expression:"editForm1.checkedDefut1"}},_vm._l((_vm.gameList),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.label,"name":"type"}})}),1)],1)],1)],1)])],1)],1),_vm._v(" "),_c('div',{staticClass:"w60 tCent",staticStyle:{"min-width":"730px"}},[_c('el-button',{staticClass:"act_apply_submit intW mt20",attrs:{"size":"small"},on:{"click":function($event){return _vm.doSubmit()}}},[_vm._v(_vm._s(_vm.LANG['统计会员'] || '统计会员'))])],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/preAct/discountCondition.vue
function injectStyle (context) {
  __webpack_require__(448)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-25584818"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  discountCondition,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var preAct_discountCondition = __webpack_exports__["default"] = (Component.exports);


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

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);