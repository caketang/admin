(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/agent/agentRebate.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var agentRebate = ({
  data() {
    return {
      columnsUrl: '',
      tableUrl: '',
      updated: false,
      //编辑弹窗
      size: "tiny",
      formConfig: [{
        "prop": "level",
        "value": "",
        "type": "select",
        "label": "代理等级",
        "disabled": true,
        "list": [{
          "label": "青铜",
          "value": "1"
        }, {
          "label": "白银",
          "value": "2"
        }, {
          "label": "黄金",
          "value": "3"
        }, {
          "label": "铂金",
          "value": "4"
        }, {
          "label": "钻石",
          "value": "5"
        }, {
          "label": "至尊",
          "value": "6"
        }]
      }, {
        "prop": "experience",
        "value": "",
        "type": "number",
        "label": "晋升所需经验",
        "disabled": false,
        "rules": [{
          "require": false
        }]
      }, {
        "prop": "commission_self",
        "value": "",
        "type": "number",
        "label": "自身退佣(%)",
        "rules": [{
          "require": false
        }]
      }, {
        "prop": "commission_level",
        "value": "",
        "type": "number",
        "label": "一级退佣(%)",
        "rules": [{
          "require": false
        }]
      }, {
        "prop": "commission_directly",
        "value": "",
        "type": "number",
        "label": "二级退佣(%)",
        "rules": [{
          "require": false
        }]
      }],
      type: "default",
      formType: "",
      formTitel: "",
      labelWidth: "120px",
      editVisible: {
        state: false
      },
      // 是否编辑数据
      isEdit: {
        state: false
      },
      name: '',
      //参数设置
      setConfigDialog: false,
      configForm: {
        advance_money: '',
        //有效金额
        directly_experience: '',
        //直属
        level_experience: '',
        //层级
        type: 'lasting',
        //领取时间
        commission_exp: '' //经验获取比值

      },
      configRules: {
        advance_money: [{
          required: true,
          message: '请输入有效会员条件',
          trigger: 'blur'
        }],
        directly_experience: [{
          required: true,
          message: '请输入每个直属可以获得经验值',
          trigger: 'blur'
        }],
        level_experience: [{
          required: true,
          message: '请输入每个下下级可以获得经验值',
          trigger: 'blur'
        }],
        commission_exp: [{
          required: true,
          message: '请输入每1元退佣可以获得经验值',
          trigger: 'blur'
        }],
        type: [{
          required: true,
          message: '请选择有效领取时间',
          trigger: 'change'
        }]
      }
    };
  },

  methods: {
    init() {
      this.tableUrl = URL.api + ROUTES.GET.user.agent.level;
      this.columnsUrl = 'static/json/agent/agentRebate/columns.json';
    },

    doHandle(item) {
      this.updated = false;

      switch (item.fn) {
        case "doEdit":
          this.doEdit(item.row);
          break;
      }
    },

    handleClose() {
      this.setConfigDialog = !this.setConfigDialog;
    },

    setConfigSubmit(name) {
      let _this = this;

      this.$refs[name].validate(valid => {
        if (valid) {
          this.$.autoAjax('post', URL.api + ROUTES.GET.user.agent.global, _this.configForm, {
            ok: res => {
              if (res.data && res.state === 0) {
                _this.$message.success(LANG['修改参数设置成功'] || '修改参数设置成功');
              }
            },
            error: e => {
              _this.$message.error(LANG['修改失败，请稍候重试！'] || '修改失败，请稍候重试！');
            }
          });
          this.setConfigDialog = !this.setConfigDialog;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    doEdit(row) {
      this.editVisible.state = true;
      this.isEdit.state = true;

      if (row.level.toString() == "6") {
        this.formConfig[1].disabled = true;
      } else {
        this.formConfig[1].disabled = false;
      }

      this.formTitel = '当前代理等级：' + {
        "1": "青铜",
        "2": "白银",
        "3": "黄金",
        "4": "铂金",
        "5": "钻石",
        "6": "至尊"
      }[row.level] || false;
      this.formConfig[0].value = row['level'].toString();
      this.formConfig[1].value = row.experience;
      this.formConfig[2].value = row.commission_self;
      this.formConfig[3].value = row.commission_level;
      this.formConfig[4].value = row.commission_directly;
      this.name = row.name;
    },

    getForm(data) {
      let query = {
        level: data.formObj.level,
        experience: data.formObj.experience,
        commission_self: data.formObj.commission_self,
        commission_level: data.formObj.commission_level,
        commission_directly: data.formObj.commission_directly,
        valid_bet: data.formObj.valid_bet,
        name: this.name
      };
      this.$.autoAjax('post', URL.api + ROUTES.POST.user.level, query, {
        ok: res => {
          if (res.data && res.state === 0) {
            this.$message.success(res.msg);
            this.updated = true;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    setConfig() {
      let _this = this;

      this.setConfigDialog = !this.setConfigDialog;
      this.$.autoAjax('get', URL.api + ROUTES.GET.user.agent.global, '', {
        ok: res => {
          if (res.data && res.state === 0) {
            _this.configForm.advance_money = res.data.advance_money;
            _this.configForm.directly_experience = res.data.directly_experience;
            _this.configForm.level_experience = res.data.level_experience;
            _this.configForm.type = res.data.type;
            _this.configForm.commission_exp = res.data.commission_exp;
          }
        },
        error: e => {
          _this.$message.error(LANG['获取配置参数失败，请稍候重试！'] || '获取配置参数失败，请稍候重试！');
        }
      });
    }

  },
  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  computed: {},
  watch: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-31a651e3","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/agent/agentRebate.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"agentRebate"}},[_c('el-row',[_c('el-col',{staticClass:"tRight"},[_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.setConfig}},[_vm._v("参数设置")])],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"updated":_vm.updated,"tableUrl":_vm.tableUrl,"getData":true,"pageSet":false},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.editVisible,"formConfig":_vm.formConfig,"type":_vm.type,"size":_vm.size,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}})],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":"参数设置","visible":_vm.setConfigDialog,"size":"tiny","before-close":_vm.handleClose},on:{"update:visible":function($event){_vm.setConfigDialog=$event}}},[_c('el-form',{ref:"configForm",staticClass:"demo-ruleForm",attrs:{"model":_vm.configForm,"rules":_vm.configRules,"label-width":"170px"}},[_c('el-form-item',{attrs:{"label":"有效会员条件：","prop":"advance_money"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.configForm.advance_money),callback:function ($$v) {_vm.$set(_vm.configForm, "advance_money", $$v)},expression:"configForm.advance_money"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"每一个直属可获得：","prop":"directly_experience"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.configForm.directly_experience),callback:function ($$v) {_vm.$set(_vm.configForm, "directly_experience", $$v)},expression:"configForm.directly_experience"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"每一个下下级可获得：","prop":"level_experience"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.configForm.level_experience),callback:function ($$v) {_vm.$set(_vm.configForm, "level_experience", $$v)},expression:"configForm.level_experience"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"每1元退佣可获得：","prop":"commission_exp"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.configForm.commission_exp),callback:function ($$v) {_vm.$set(_vm.configForm, "commission_exp", $$v)},expression:"configForm.commission_exp"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"有效领取时间：","prop":"type"}},[_c('el-radio-group',{model:{value:(_vm.configForm.type),callback:function ($$v) {_vm.$set(_vm.configForm, "type", $$v)},expression:"configForm.type"}},[_c('el-radio',{attrs:{"label":"time"}},[_vm._v("24小时")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"lasting"}},[_vm._v("永久生效")])],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.setConfigDialog = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.setConfigSubmit('configForm')}}},[_vm._v("修 改")])],1)],1)],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/agent/agentRebate.vue
function injectStyle (context) {
  __webpack_require__(520)
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
  agentRebate,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var agent_agentRebate = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);