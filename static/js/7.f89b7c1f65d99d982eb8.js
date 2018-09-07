webpackJsonp([7],{

/***/ 1007:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "manual_new"
    }
  }, [_c('el-row', {
    staticClass: "tabsNav"
  }, [_c('el-col', {
    staticClass: "tabsNavItem tCent",
    class: {
      active: _vm.itemIndex == '1'
    },
    attrs: {
      "span": 8
    }
  }, [_c('div', {
    staticClass: "grid-content",
    on: {
      "click": function($event) {
        _vm.handleClick('1')
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['人工存提'] || '人工存提'))])]), _vm._v(" "), _c('el-col', {
    staticClass: "tabsNavItem tCent",
    class: {
      active: _vm.itemIndex == '2'
    },
    attrs: {
      "span": 8
    }
  }, [_c('div', {
    staticClass: "grid-content",
    on: {
      "click": function($event) {
        _vm.handleClick('2')
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['批量存提'] || '批量存提'))])]), _vm._v(" "), _c('el-col', {
    staticClass: "tabsNavItem tCent",
    class: {
      active: _vm.itemIndex == '3'
    },
    attrs: {
      "span": 8
    }
  }, [_c('div', {
    staticClass: "grid-content",
    on: {
      "click": function($event) {
        _vm.handleClick('3')
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['人工存提记录'] || '人工存提记录'))])])], 1), _vm._v(" "), _c('el-col', {
    staticClass: "mt20"
  }, [(_vm.itemIndex == '1') ? _c('artificialtransfer', {
    attrs: {
      "manualData": _vm.seachData
    }
  }) : _vm._e(), _vm._v(" "), (_vm.itemIndex == '2') ? _c('batchSave') : _vm._e(), _vm._v(" "), (_vm.itemIndex == '3') ? _c('history') : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1043:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "page",
    attrs: {
      "id": "artificialTransfer"
    }
  }, [_c('el-row', [_c('el-col', {
    staticClass: "search",
    staticStyle: {
      "z-index": "10"
    }
  }, [_c('el-form', {
    staticClass: "demo-form-inline",
    attrs: {
      "model": _vm.formInline,
      "label-width": "75px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.LANG['体系'] || '体系',
      "prop": "role",
      "rules": {
        required: true,
        message: '请选择用户体系',
        trigger: 'change'
      }
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择",
      "size": "small"
    },
    on: {
      "change": _vm.clearResult
    },
    model: {
      value: (_vm.formInline.role),
      callback: function($$v) {
        _vm.$set(_vm.formInline, "role", $$v)
      },
      expression: "formInline.role"
    }
  }, _vm._l((_vm.memberTypeList), function(item, index) {
    return _c('el-option', {
      key: index,
      attrs: {
        "label": item.label,
        "value": item.role
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "username",
      "rules": [{
        required: true,
        message: '请输入用户名称',
        trigger: 'blur'
      }, {
        min: 2,
        max: 16,
        message: '长度在 3 到16个字符',
        trigger: 'blur'
      }]
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入用户名",
      "size": "small"
    },
    model: {
      value: (_vm.formInline.username),
      callback: function($$v) {
        _vm.$set(_vm.formInline, "username", $$v)
      },
      expression: "formInline.username"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    staticStyle: {
      "margin-left": "-50px"
    },
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.doQuery(0)
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['查询'] || '查询'))])], 1)], 1)], 1), _vm._v(" "), _c('el-col', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    attrs: {
      "element-loading-text": "拼命加载中"
    }
  }, [(_vm.tableDate.length > 0) ? _c('el-col', {
    staticClass: "mt10",
    attrs: {
      "span": 10
    }
  }, [_c('el-button', {
    staticStyle: {
      "float": "right",
      "margin-bottom": "10px"
    },
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.doQuery(1)
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['刷新钱包'] || '刷新钱包'))]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "80%",
      "font-size": "12px"
    }
  }, [_c('div', [_c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("真实姓名:")]), _c('span', [_vm._v(_vm._s(_vm.note.truename))])]), _vm._v(" "), (_vm.formInline.role == '1') ? _c('div', [_c('span', {
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v("备注:")]), _c('span', [_vm._v(_vm._s(_vm.note.comment))])]) : _vm._e()]), _vm._v(" "), _c('el-table', {
    attrs: {
      "data": _vm.tableDate,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": _vm.LANG['钱包'] || '钱包',
      "width": "100px"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "balance",
      "label": _vm.LANG['钱包余额'] || '钱包余额',
      "width": "120px"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row['name'] == '主钱包') ? _c('div', [_vm._l((_vm.btnGroup), function(item, index) {
          return (_vm.formInline.role == 1) ? _c('el-button', {
            key: index,
            staticStyle: {
              "margin-right": "10px",
              "margin-left": "0px"
            },
            attrs: {
              "size": "small",
              "type": "text"
            },
            domProps: {
              "textContent": _vm._s(_vm.LANG[item.txt] || item.txt)
            },
            on: {
              "click": function($event) {
                _vm.doHandle(item.fn, scope.row)
              }
            }
          }) : _vm._e()
        }), _vm._v(" "), _vm._l((_vm.agent_btnGroup), function(item, index) {
          return (_vm.formInline.role == 2) ? _c('el-button', {
            key: index,
            staticStyle: {
              "margin-right": "10px",
              "margin-left": "0px"
            },
            attrs: {
              "size": "small",
              "type": "text"
            },
            domProps: {
              "textContent": _vm._s(_vm.LANG[item.txt] || item.txt)
            },
            on: {
              "click": function($event) {
                _vm.doHandle(item.fn, scope.row)
              }
            }
          }) : _vm._e()
        })], 2) : _vm._e(), _vm._v(" "), (scope.row['name'] != '主钱包' && scope.row['name'] != '总余额') ? _c('div', [_c('el-button', {
          attrs: {
            "size": "small",
            "type": "text"
          },
          domProps: {
            "textContent": _vm._s(_vm.LANG['子转主钱包'] || '子转主钱包')
          },
          on: {
            "click": function($event) {
              _vm.doHandle('childToMaster', scope.row)
            }
          }
        }), _vm._v(" "), _c('el-button', {
          attrs: {
            "size": "small",
            "type": "text"
          },
          domProps: {
            "textContent": _vm._s(_vm.LANG['主转子钱包'] || '主转子钱包')
          },
          on: {
            "click": function($event) {
              _vm.doHandle('masterToChild', scope.row)
            }
          }
        }), _vm._v(" "), (!scope.row.status) ? _c('el-tag', {
          staticClass: "el-tag-maintenance",
          attrs: {
            "type": "info"
          }
        }, [_vm._v(_vm._s(_vm.LANG['维护中'] || '维护中'))]) : _vm._e()], 1) : _vm._e()]
      }
    }])
  })], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.tableDate.length > 0 && _vm.toggle) ? _c('el-col', {
    staticClass: "editform",
    staticStyle: {
      "margin-top": "50px"
    },
    attrs: {
      "span": 10,
      "offset": 1
    }
  }, [_c('h1', [_vm._v(_vm._s(_vm.LANG[_vm.formTitle] || _vm.formTitle)), _c('span', [_vm._v("(" + _vm._s(_vm.LANG[_vm.walletTitle] || _vm.walletTitle) + ")")])]), _vm._v(" "), _c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formTitle == '手动存款'),
      expression: "formTitle == '手动存款'"
    }],
    ref: "depositForm",
    staticClass: "mt10",
    attrs: {
      "model": _vm.depositForm,
      "rules": _vm.depositFormRules,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "disabled": true
    },
    model: {
      value: (_vm.userCont.name),
      callback: function($$v) {
        _vm.$set(_vm.userCont, "name", $$v)
      },
      expression: "userCont.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['存入金额'] || '存入金额',
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.depositForm.amount),
      callback: function($$v) {
        _vm.$set(_vm.depositForm, "amount", _vm._n($$v))
      },
      expression: "depositForm.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['优惠金额'] || '优惠金额',
      "prop": "discount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.depositForm.discount),
      callback: function($$v) {
        _vm.$set(_vm.depositForm, "discount", _vm._n($$v))
      },
      expression: "depositForm.discount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['优惠打码量'] || '优惠打码量',
      "prop": "play_code"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.depositForm.play_code),
      callback: function($$v) {
        _vm.$set(_vm.depositForm, "play_code", _vm._n($$v))
      },
      expression: "depositForm.play_code"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['存入银行'] || '存入银行',
      "prop": "bank_id"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": _vm.LANG['请选择银行'] || '请选择银行',
      "size": "small"
    },
    on: {
      "change": _vm.checkBank
    },
    model: {
      value: (_vm.depositForm.bank_id),
      callback: function($$v) {
        _vm.$set(_vm.depositForm, "bank_id", $$v)
      },
      expression: "depositForm.bank_id"
    }
  }, _vm._l((_vm.bankList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "label": _vm.LANG['银行卡号'] || '银行卡号',
      "prop": "bank_no"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": true,
      "size": "small"
    },
    model: {
      value: (_vm.depositForm.bank_no),
      callback: function($$v) {
        _vm.$set(_vm.depositForm, "bank_no", $$v)
      },
      expression: "depositForm.bank_no"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['备注'] || '备注',
      "prop": "remarks"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "size": "small"
    },
    model: {
      value: (_vm.depositForm.memo),
      callback: function($$v) {
        _vm.$set(_vm.depositForm, "memo", $$v)
      },
      expression: "depositForm.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true,
      "size": "small",
      "disabled": _vm.formControlBtn.deposit_boolean
    },
    on: {
      "click": _vm.doAddDeposit
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存') + "\n                        ")])], 1)], 1), _vm._v(" "), _c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formTitle == '手动提款'),
      expression: "formTitle == '手动提款'"
    }],
    ref: "cashForm",
    staticClass: "mt10",
    attrs: {
      "model": _vm.cashForm,
      "rules": _vm.cashFormRules,
      "label-width": "90px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "disabled": true
    },
    model: {
      value: (_vm.userCont.name),
      callback: function($$v) {
        _vm.$set(_vm.userCont, "name", $$v)
      },
      expression: "userCont.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['提款金额'] || '提款金额',
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.cashForm.amount),
      callback: function($$v) {
        _vm.$set(_vm.cashForm, "amount", _vm._n($$v))
      },
      expression: "cashForm.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['提出银行'] || '提出银行',
      "prop": "bank_id"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": _vm.LANG['请选择银行'] || '请选择银行',
      "size": "small"
    },
    on: {
      "change": _vm.userCheckBank
    },
    model: {
      value: (_vm.cashForm.bank_id),
      callback: function($$v) {
        _vm.$set(_vm.cashForm, "bank_id", $$v)
      },
      expression: "cashForm.bank_id"
    }
  }, _vm._l((_vm.userBankList), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "label": _vm.LANG['银行卡号'] || '银行卡号',
      "prop": "bank_no"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": true,
      "size": "small"
    },
    model: {
      value: (_vm.cashForm.bank_no),
      callback: function($$v) {
        _vm.$set(_vm.cashForm, "bank_no", $$v)
      },
      expression: "cashForm.bank_no"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['备注'] || '备注',
      "prop": "remarks"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "size": "small"
    },
    model: {
      value: (_vm.cashForm.memo),
      callback: function($$v) {
        _vm.$set(_vm.cashForm, "memo", $$v)
      },
      expression: "cashForm.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true,
      "size": "small",
      "disabled": _vm.formControlBtn.cash_boolean
    },
    on: {
      "click": _vm.doCash
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])], 1)], 1), _vm._v(" "), _c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formTitle == '发放优惠'),
      expression: "formTitle == '发放优惠'"
    }],
    ref: "grantDiscountForm",
    staticClass: "mt10",
    attrs: {
      "model": _vm.grantDiscountForm,
      "rules": _vm.grantDiscountFormRules,
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": true,
      "size": "small"
    },
    model: {
      value: (_vm.userCont.name),
      callback: function($$v) {
        _vm.$set(_vm.userCont, "name", $$v)
      },
      expression: "userCont.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['优惠金额'] || '优惠金额',
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.grantDiscountForm.amount),
      callback: function($$v) {
        _vm.$set(_vm.grantDiscountForm, "amount", _vm._n($$v))
      },
      expression: "grantDiscountForm.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['打码量'] || '打码量',
      "prop": "condition"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.grantDiscountForm.condition),
      callback: function($$v) {
        _vm.$set(_vm.grantDiscountForm, "condition", _vm._n($$v))
      },
      expression: "grantDiscountForm.condition"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['优惠活动名称'] || '优惠活动名称',
      "prop": "aid"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": _vm.LANG['请选择优惠活动名称'] || '请选择优惠活动名称',
      "size": "small"
    },
    model: {
      value: (_vm.grantDiscountForm.aid),
      callback: function($$v) {
        _vm.$set(_vm.grantDiscountForm, "aid", $$v)
      },
      expression: "grantDiscountForm.aid"
    }
  }, _vm._l((_vm.discountNameList), function(item, index) {
    return _c('el-option', {
      key: index,
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['备注'] || '备注',
      "prop": "memo"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "size": "small"
    },
    model: {
      value: (_vm.grantDiscountForm.memo),
      callback: function($$v) {
        _vm.$set(_vm.grantDiscountForm, "memo", $$v)
      },
      expression: "grantDiscountForm.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "disabled": _vm.formControlBtn.discount_boolean
    },
    on: {
      "click": _vm.doGrantDiscountForm
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])], 1)], 1), _vm._v(" "), _c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formTitle == '手动减少余额'),
      expression: "formTitle == '手动减少余额'"
    }],
    ref: "artificialReduceForm",
    staticClass: "mt10",
    attrs: {
      "model": _vm.artificialReduceForm,
      "rules": _vm.artificialReduceFormRules,
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": true,
      "size": "small"
    },
    model: {
      value: (_vm.userCont.name),
      callback: function($$v) {
        _vm.$set(_vm.userCont, "name", $$v)
      },
      expression: "userCont.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['减金额'] || '减金额',
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.artificialReduceForm.amount),
      callback: function($$v) {
        _vm.$set(_vm.artificialReduceForm, "amount", _vm._n($$v))
      },
      expression: "artificialReduceForm.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['备注'] || '备注',
      "prop": "memo"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "size": "small"
    },
    model: {
      value: (_vm.artificialReduceForm.memo),
      callback: function($$v) {
        _vm.$set(_vm.artificialReduceForm, "memo", $$v)
      },
      expression: "artificialReduceForm.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "disabled": _vm.formControlBtn.reduce_boolean
    },
    on: {
      "click": _vm.doArtificialReduce
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])], 1)], 1), _vm._v(" "), _c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formTitle == '手动增加余额'),
      expression: "formTitle == '手动增加余额'"
    }],
    ref: "artificialAddForm",
    staticClass: "mt10",
    attrs: {
      "model": _vm.artificialAddForm,
      "rules": _vm.artificialAddFormRules,
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": true,
      "size": "small"
    },
    model: {
      value: (_vm.userCont.name),
      callback: function($$v) {
        _vm.$set(_vm.userCont, "name", $$v)
      },
      expression: "userCont.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['加金额'] || '加金额',
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.artificialAddForm.amount),
      callback: function($$v) {
        _vm.$set(_vm.artificialAddForm, "amount", _vm._n($$v))
      },
      expression: "artificialAddForm.amount"
    }
  })], 1), _vm._v(" "), (_vm.formInline.role == 1) ? _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['打码量'] || '打码量',
      "prop": "withdraw_bet"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.artificialAddForm.withdraw_bet),
      callback: function($$v) {
        _vm.$set(_vm.artificialAddForm, "withdraw_bet", _vm._n($$v))
      },
      expression: "artificialAddForm.withdraw_bet"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['备注'] || '备注',
      "prop": "memo"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "size": "small"
    },
    model: {
      value: (_vm.artificialAddForm.memo),
      callback: function($$v) {
        _vm.$set(_vm.artificialAddForm, "memo", $$v)
      },
      expression: "artificialAddForm.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "disabled": _vm.formControlBtn.add_boolean
    },
    on: {
      "click": _vm.doArtificialAdd
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])], 1)], 1), _vm._v(" "), _c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formTitle == '发放返水'),
      expression: "formTitle == '发放返水'"
    }],
    ref: "grantRebateForm",
    staticClass: "mt10",
    attrs: {
      "model": _vm.grantRebateForm,
      "rules": _vm.grantRebateFormRules,
      "label-width": "120px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": true,
      "size": "small"
    },
    model: {
      value: (_vm.userCont.name),
      callback: function($$v) {
        _vm.$set(_vm.userCont, "name", $$v)
      },
      expression: "userCont.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['返水金额'] || '返水金额',
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.grantRebateForm.amount),
      callback: function($$v) {
        _vm.$set(_vm.grantRebateForm, "amount", _vm._n($$v))
      },
      expression: "grantRebateForm.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['打码量'] || '打码量',
      "prop": "condition"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.grantRebateForm.condition),
      callback: function($$v) {
        _vm.$set(_vm.grantRebateForm, "condition", _vm._n($$v))
      },
      expression: "grantRebateForm.condition"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['备注'] || '备注',
      "prop": "memo"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "size": "small"
    },
    model: {
      value: (_vm.grantRebateForm.memo),
      callback: function($$v) {
        _vm.$set(_vm.grantRebateForm, "memo", $$v)
      },
      expression: "grantRebateForm.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small",
      "disabled": _vm.formControlBtn.rebate_boolean
    },
    on: {
      "click": _vm.doGrantRebate
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])], 1)], 1), _vm._v(" "), _c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formTitle == '子转主钱包'),
      expression: "formTitle == '子转主钱包'"
    }],
    ref: "childToMasterForm",
    staticClass: "mt10",
    attrs: {
      "model": _vm.childToMasterForm,
      "rules": _vm.childToMasterFormRules,
      "label-width": "80px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": true,
      "size": "small"
    },
    model: {
      value: (_vm.userCont.name),
      callback: function($$v) {
        _vm.$set(_vm.userCont, "name", $$v)
      },
      expression: "userCont.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['金额'] || '金额',
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.childToMasterForm.amount),
      callback: function($$v) {
        _vm.$set(_vm.childToMasterForm, "amount", _vm._n($$v))
      },
      expression: "childToMasterForm.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "state"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "1"
    },
    model: {
      value: (_vm.childToMasterForm.status),
      callback: function($$v) {
        _vm.$set(_vm.childToMasterForm, "status", $$v)
      },
      expression: "childToMasterForm.status"
    }
  }, [_vm._v(_vm._s(_vm.LANG['实际加钱'] || '实际加钱'))])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['备注'] || '备注',
      "prop": "memo"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "size": "small"
    },
    model: {
      value: (_vm.childToMasterForm.memo),
      callback: function($$v) {
        _vm.$set(_vm.childToMasterForm, "memo", $$v)
      },
      expression: "childToMasterForm.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true,
      "size": "small",
      "disabled": _vm.formControlBtn.childtomaster_boolean
    },
    on: {
      "click": _vm.doChildToMaster
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])], 1)], 1), _vm._v(" "), _c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formTitle == '主转子钱包'),
      expression: "formTitle == '主转子钱包'"
    }],
    ref: "masterToChildForm",
    staticClass: "mt10",
    attrs: {
      "model": _vm.masterToChildForm,
      "rules": _vm.masterToChildFormRules,
      "label-width": "80px"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": true,
      "size": "small"
    },
    model: {
      value: (_vm.userCont.name),
      callback: function($$v) {
        _vm.$set(_vm.userCont, "name", $$v)
      },
      expression: "userCont.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['金额'] || '金额',
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.masterToChildForm.amount),
      callback: function($$v) {
        _vm.$set(_vm.masterToChildForm, "amount", _vm._n($$v))
      },
      expression: "masterToChildForm.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "state"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "1"
    },
    model: {
      value: (_vm.masterToChildForm.status),
      callback: function($$v) {
        _vm.$set(_vm.masterToChildForm, "status", $$v)
      },
      expression: "masterToChildForm.status"
    }
  }, [_vm._v(_vm._s(_vm.LANG['实际加钱'] || '实际加钱'))])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['备注'] || '备注',
      "prop": "memo"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "size": "small"
    },
    model: {
      value: (_vm.masterToChildForm.memo),
      callback: function($$v) {
        _vm.$set(_vm.masterToChildForm, "memo", $$v)
      },
      expression: "masterToChildForm.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true,
      "size": "small",
      "disabled": _vm.formControlBtn.mastertochild_boolean
    },
    on: {
      "click": _vm.doMasterToChild
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])], 1)], 1)], 1) : _vm._e()], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 1070:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "w100",
    attrs: {
      "id": "batchSave"
    }
  }, [_c('el-row', {
    attrs: {
      "gutter": 40
    }
  }, [_c('el-col', {
    attrs: {
      "span": 4
    }
  }, [_c('div', {
    staticClass: "mainLeft"
  }, [_c('el-button', {
    staticClass: "tabBtn",
    attrs: {
      "plain": true,
      "type": "success"
    },
    on: {
      "click": _vm.doManualAddMoney
    }
  }, [_vm._v(_vm._s(_vm.LANG['手动增加余额'] || '手动增加余额'))]), _vm._v(" "), _c('el-button', {
    staticClass: "tabBtn",
    attrs: {
      "plain": true,
      "type": "success"
    },
    on: {
      "click": _vm.doManualReduceMoney
    }
  }, [_vm._v(_vm._s(_vm.LANG['手动减少余额'] || '手动减少余额') + "\n                ")]), _vm._v(" "), _c('el-button', {
    staticClass: "tabBtn",
    attrs: {
      "plain": true,
      "type": "success"
    },
    on: {
      "click": _vm.doBackwater
    }
  }, [_vm._v("手动返水")]), _vm._v(" "), _c('el-button', {
    staticClass: "tabBtn",
    attrs: {
      "plain": true,
      "type": "success"
    },
    on: {
      "click": _vm.doReduceFavorable
    }
  }, [_vm._v(_vm._s(_vm.LANG['手动发放优惠'] || '手动发放优惠'))])], 1)]), _vm._v(" "), _c('el-col', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    attrs: {
      "span": 10,
      "element-loading-text": "拼命加载中"
    }
  }, [_c('div', {
    staticClass: "mainRight"
  }, [_c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formTitle == 0),
      expression: "formTitle == 0"
    }],
    ref: "manualAddMoney",
    staticClass: "mt10",
    attrs: {
      "model": _vm.manualAddMoney,
      "rules": _vm.manualAddMoneyRules,
      "label-width": "90px"
    }
  }, [(_vm.formTitle == 0) ? _c('h3', [_vm._v(_vm._s(_vm.LANG['手动增加余额'] || '手动增加余额'))]) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['状态'] || '状态',
      "prop": "state"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "1"
    },
    model: {
      value: (_vm.manualAddMoney.status),
      callback: function($$v) {
        _vm.$set(_vm.manualAddMoney, "status", $$v)
      },
      expression: "manualAddMoney.status"
    }
  }, [_vm._v(_vm._s(_vm.LANG['按用户名'] || '按用户名'))]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "2"
    },
    model: {
      value: (_vm.manualAddMoney.status),
      callback: function($$v) {
        _vm.$set(_vm.manualAddMoney, "status", $$v)
      },
      expression: "manualAddMoney.status"
    }
  }, [_vm._v(_vm._s(_vm.LANG['按会员层级'] || '按会员层级'))])], 1), _vm._v(" "), (_vm.manualAddMoney.status == 1) ? _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": _vm.LANG['提示:多个用户名之间请用英文逗号隔开'] || '提示:多个用户名之间请用英文逗号隔开'
    },
    model: {
      value: (_vm.manualAddMoney.name),
      callback: function($$v) {
        _vm.$set(_vm.manualAddMoney, "name", $$v)
      },
      expression: "manualAddMoney.name"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.manualAddMoney.status == 2) ? _c('el-form-item', {
    attrs: {
      "label": "VIP等级"
    }
  }, [_c('el-checkbox-group', {
    model: {
      value: (_vm.manualAddMoney.levels),
      callback: function($$v) {
        _vm.$set(_vm.manualAddMoney, "levels", $$v)
      },
      expression: "manualAddMoney.levels"
    }
  }, _vm._l((_vm.levellist), function(item, index) {
    return _c('el-checkbox', {
      key: index,
      attrs: {
        "label": item.label,
        "name": "type"
      }
    }, [_vm._v(_vm._s(item.value))])
  }))], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['金额'] || '金额',
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.manualAddMoney.amount),
      callback: function($$v) {
        _vm.$set(_vm.manualAddMoney, "amount", _vm._n($$v))
      },
      expression: "manualAddMoney.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['打码量'] || '打码量',
      "prop": "statement"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.manualAddMoney.statement),
      callback: function($$v) {
        _vm.$set(_vm.manualAddMoney, "statement", _vm._n($$v))
      },
      expression: "manualAddMoney.statement"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['备注'] || '备注',
      "prop": "memo"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "size": "small"
    },
    model: {
      value: (_vm.manualAddMoney.memo),
      callback: function($$v) {
        _vm.$set(_vm.manualAddMoney, "memo", $$v)
      },
      expression: "manualAddMoney.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn tCent"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true,
      "size": "small"
    },
    on: {
      "click": _vm.doCash
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true,
      "size": "small"
    },
    on: {
      "click": _vm.doRest
    }
  }, [_vm._v(_vm._s(_vm.LANG['重置'] || '重置'))])], 1)], 1), _vm._v(" "), _c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formTitle == 1),
      expression: "formTitle == 1"
    }],
    ref: "manualAddMoney",
    staticClass: "mt10",
    attrs: {
      "model": _vm.manualReduceMoney,
      "rules": _vm.manualReduceMoneyRules,
      "label-width": "90px"
    }
  }, [(_vm.formTitle == 1) ? _c('h3', [_vm._v(_vm._s(_vm.LANG['手动减少余额'] || '手动减少余额'))]) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['状态'] || '状态',
      "prop": "state"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "1"
    },
    model: {
      value: (_vm.manualReduceMoney.status),
      callback: function($$v) {
        _vm.$set(_vm.manualReduceMoney, "status", $$v)
      },
      expression: "manualReduceMoney.status"
    }
  }, [_vm._v(_vm._s(_vm.LANG['按用户'] || '按用户'))]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "2"
    },
    model: {
      value: (_vm.manualReduceMoney.status),
      callback: function($$v) {
        _vm.$set(_vm.manualReduceMoney, "status", $$v)
      },
      expression: "manualReduceMoney.status"
    }
  }, [_vm._v(_vm._s(_vm.LANG['按会员层级'] || '按会员层级'))])], 1), _vm._v(" "), (_vm.manualReduceMoney.status == 1) ? _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": _vm.LANG['提示:多个用户名之间请用英文逗号隔开'] || '提示:多个用户名之间请用英文逗号隔开'
    },
    model: {
      value: (_vm.manualReduceMoney.name),
      callback: function($$v) {
        _vm.$set(_vm.manualReduceMoney, "name", $$v)
      },
      expression: "manualReduceMoney.name"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.manualReduceMoney.status == 2) ? _c('el-form-item', {
    attrs: {
      "label": "VIP等级"
    }
  }, [_c('el-checkbox-group', {
    model: {
      value: (_vm.manualReduceMoney.levels),
      callback: function($$v) {
        _vm.$set(_vm.manualReduceMoney, "levels", $$v)
      },
      expression: "manualReduceMoney.levels"
    }
  }, _vm._l((_vm.levellist), function(item, index) {
    return _c('el-checkbox', {
      key: index,
      attrs: {
        "label": item.label,
        "name": "type"
      }
    }, [_vm._v(_vm._s(item.value))])
  }))], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['金额'] || '金额',
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.manualReduceMoney.amount),
      callback: function($$v) {
        _vm.$set(_vm.manualReduceMoney, "amount", _vm._n($$v))
      },
      expression: "manualReduceMoney.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['备注'] || '备注',
      "prop": "memo"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "size": "small"
    },
    model: {
      value: (_vm.manualReduceMoney.memo),
      callback: function($$v) {
        _vm.$set(_vm.manualReduceMoney, "memo", $$v)
      },
      expression: "manualReduceMoney.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn tCent"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true,
      "size": "small"
    },
    on: {
      "click": _vm.doCash
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true,
      "size": "small"
    },
    on: {
      "click": _vm.doRest
    }
  }, [_vm._v(_vm._s(_vm.LANG['重置'] || '重置'))])], 1)], 1), _vm._v(" "), _c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formTitle == 2),
      expression: "formTitle == 2"
    }],
    ref: "manualAddMoney",
    staticClass: "mt10",
    attrs: {
      "model": _vm.backwater,
      "rules": _vm.backwaterRules,
      "label-width": "90px"
    }
  }, [(_vm.formTitle == 2) ? _c('h3', [_vm._v(_vm._s(_vm.LANG['手动返水'] || '手动返水'))]) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['状态'] || '状态',
      "prop": "state"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "1"
    },
    model: {
      value: (_vm.backwater.status),
      callback: function($$v) {
        _vm.$set(_vm.backwater, "status", $$v)
      },
      expression: "backwater.status"
    }
  }, [_vm._v(_vm._s(_vm.LANG['按用户'] || '按用户'))]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "2"
    },
    model: {
      value: (_vm.backwater.status),
      callback: function($$v) {
        _vm.$set(_vm.backwater, "status", $$v)
      },
      expression: "backwater.status"
    }
  }, [_vm._v(_vm._s(_vm.LANG['按会员层级'] || '按会员层级'))])], 1), _vm._v(" "), (_vm.backwater.status == 1) ? _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": _vm.LANG['提示:多个用户名之间请用英文逗号隔开'] || '提示:多个用户名之间请用英文逗号隔开'
    },
    model: {
      value: (_vm.backwater.name),
      callback: function($$v) {
        _vm.$set(_vm.backwater, "name", $$v)
      },
      expression: "backwater.name"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.backwater.status == 2) ? _c('el-form-item', {
    attrs: {
      "label": "VIP等级"
    }
  }, [_c('el-checkbox-group', {
    model: {
      value: (_vm.backwater.levels),
      callback: function($$v) {
        _vm.$set(_vm.backwater, "levels", $$v)
      },
      expression: "backwater.levels"
    }
  }, _vm._l((_vm.levellist), function(item, index) {
    return _c('el-checkbox', {
      key: index,
      attrs: {
        "label": item.label,
        "name": "type"
      }
    }, [_vm._v(_vm._s(item.value))])
  }))], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['金额'] || '金额',
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.backwater.amount),
      callback: function($$v) {
        _vm.$set(_vm.backwater, "amount", _vm._n($$v))
      },
      expression: "backwater.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['打码量'] || '打码量',
      "prop": "statement"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.backwater.statement),
      callback: function($$v) {
        _vm.$set(_vm.backwater, "statement", _vm._n($$v))
      },
      expression: "backwater.statement"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['备注'] || '备注',
      "prop": "memo"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "size": "small"
    },
    model: {
      value: (_vm.backwater.memo),
      callback: function($$v) {
        _vm.$set(_vm.backwater, "memo", $$v)
      },
      expression: "backwater.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn tCent"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true,
      "size": "small"
    },
    on: {
      "click": _vm.doCash
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true,
      "size": "small"
    },
    on: {
      "click": _vm.doRest
    }
  }, [_vm._v(_vm._s(_vm.LANG['重置'] || '重置'))])], 1)], 1), _vm._v(" "), _c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.formTitle == 3),
      expression: "formTitle == 3"
    }],
    ref: "grantDiscountForm",
    staticClass: "mt10",
    attrs: {
      "model": _vm.reduceFavorable,
      "rules": _vm.reduceFavorableRules,
      "label-width": "106px"
    }
  }, [(_vm.formTitle == 3) ? _c('h3', [_vm._v(_vm._s(_vm.LANG['手动发放优惠'] || '手动发放优惠'))]) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['状态'] || '状态',
      "prop": "state"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "1"
    },
    model: {
      value: (_vm.reduceFavorable.status),
      callback: function($$v) {
        _vm.$set(_vm.reduceFavorable, "status", $$v)
      },
      expression: "reduceFavorable.status"
    }
  }, [_vm._v(_vm._s(_vm.LANG['按用户'] || '按用户'))]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "2"
    },
    model: {
      value: (_vm.reduceFavorable.status),
      callback: function($$v) {
        _vm.$set(_vm.reduceFavorable, "status", $$v)
      },
      expression: "reduceFavorable.status"
    }
  }, [_vm._v(_vm._s(_vm.LANG['按会员层级'] || '按会员层级'))])], 1), _vm._v(" "), (_vm.reduceFavorable.status == 1) ? _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['用户名'] || '用户名',
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": _vm.LANG['提示:多个用户名之间请用英文逗号隔开'] || '提示:多个用户名之间请用英文逗号隔开'
    },
    model: {
      value: (_vm.reduceFavorable.name),
      callback: function($$v) {
        _vm.$set(_vm.reduceFavorable, "name", $$v)
      },
      expression: "reduceFavorable.name"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.reduceFavorable.status == 2) ? _c('el-form-item', {
    attrs: {
      "label": "VIP等级"
    }
  }, [_c('el-checkbox-group', {
    model: {
      value: (_vm.reduceFavorable.levels),
      callback: function($$v) {
        _vm.$set(_vm.reduceFavorable, "levels", $$v)
      },
      expression: "reduceFavorable.levels"
    }
  }, _vm._l((_vm.levellist), function(item, index) {
    return _c('el-checkbox', {
      key: index,
      attrs: {
        "label": item.label,
        "name": "type"
      }
    }, [_vm._v(_vm._s(item.value))])
  }))], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['优惠金额'] || '优惠金额',
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.reduceFavorable.amount),
      callback: function($$v) {
        _vm.$set(_vm.reduceFavorable, "amount", _vm._n($$v))
      },
      expression: "reduceFavorable.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['打码量'] || '打码量',
      "prop": "statement"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.reduceFavorable.statement),
      callback: function($$v) {
        _vm.$set(_vm.reduceFavorable, "statement", _vm._n($$v))
      },
      expression: "reduceFavorable.statement"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['优惠活动名称'] || '优惠活动名称',
      "prop": "aid"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": _vm.LANG['请选择优惠活动名称'] || '请选择优惠活动名称',
      "size": "small"
    },
    model: {
      value: (_vm.reduceFavorable.aid),
      callback: function($$v) {
        _vm.$set(_vm.reduceFavorable, "aid", $$v)
      },
      expression: "reduceFavorable.aid"
    }
  }, _vm._l((_vm.reduceFavorableList), function(item, index) {
    return _c('el-option', {
      key: index,
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['备注'] || '备注',
      "prop": "memo"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 5,
      "size": "small"
    },
    model: {
      value: (_vm.reduceFavorable.memo),
      callback: function($$v) {
        _vm.$set(_vm.reduceFavorable, "memo", $$v)
      },
      expression: "reduceFavorable.memo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn tCent"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true,
      "size": "small"
    },
    on: {
      "click": _vm.doCash
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true,
      "size": "small"
    },
    on: {
      "click": _vm.doRest
    }
  }, [_vm._v(_vm._s(_vm.LANG['重置'] || '重置'))])], 1)], 1)], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(781)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(444),
  /* template */
  __webpack_require__(1007),
  /* scopeId */
  "data-v-3e0da53a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    translations: {
        'ar': {
            'language': 'Arabic',
            'rtl': true,
            'months': {
                'original': ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوڤمبر', 'ديسمبر'],
                'abbr': ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوڤمبر', 'ديسمبر']
            },
            'days': ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
        },
        'bg': {
            'language': 'Bulgarian',
            'months': {
                'original': ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
                'abbr': ['Ян', 'Фев', 'Мар', 'Апр', 'Май', 'Юни', 'Юли', 'Авг', 'Сеп', 'Окт', 'Ное', 'Дек']
            },
            'days': ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
        },
        'bs': {
            'language': 'Bosnian',
            'months': {
                'original': ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Juni', 'Juli', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'],
                'abbr': ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec']
            },
            'days': ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub']
        },
        'cs': {
            'language': 'Czech',
            'months': {
                'original': ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                'abbr': ['led', 'úno', 'bře', 'dub', 'kvě', 'čer', 'čec', 'srp', 'zář', 'říj', 'lis', 'pro']
            },
            'days': ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so']
        },
        'da': {
            'language': 'Danish',
            'months': {
                'original': ['Januar', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'December'],
                'abbr': ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
            },
            'days': ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø']
        },
        'de': {
            'language': 'German',
            'months': {
                'original': ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                'abbr': ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
            },
            'days': ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']
        },
        'ee': {
            'language': 'Estonian',
            'months': {
                'original': ['Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'],
                'abbr': ['Jaan', 'Veebr', 'Märts', 'Apr', 'Mai', 'Juuni', 'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets']
            },
            'days': ['P', 'E', 'T', 'K', 'N', 'R', 'L']
        },
        'el': {
            'language': 'Greek',
            'months': {
                'original': ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάϊος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
                'abbr': ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαι', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ']
            },
            'days': ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σατ']
        },
        'en': {
            'language': 'English',
            'months': {
                'original': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                'abbr': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            'days': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        'es': {
            'language': 'Spanish',
            'months': {
                'original': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                'abbr': ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
            },
            'days': ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab']
        },
        'ca': {
            'language': 'Catalan',
            'months': {
                'original': ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
                'abbr': ['Gen', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Des']
            },
            'days': ['Diu', 'Dil', 'Dmr', 'Dmc', 'Dij', 'Div', 'Dis']
        },
        'fi': {
            'language': 'Finish',
            'months': {
                'original': ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'],
                'abbr': ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu']
            },
            'days': ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la']
        },
        'fr': {
            'language': 'French',
            'months': {
                'original': ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                'abbr': ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc']
            },
            'days': ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
        },
        'ja': {
            'language': 'Japanese',
            'months': {
                'original': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                'abbr': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            },
            'days': ['日', '月', '火', '水', '木', '金', '土']
        },
        'he': {
            'language': 'Hebrew',
            'rtl': true,
            'months': {
                'original': ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
                'abbr': ['ינו', 'פבר', 'מרץ', 'אפר', 'מאי', 'יונ', 'יול', 'אוג', 'ספט', 'אוק', 'נוב', 'דצמ']
            },
            'days': ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש']
        },
        'hu': {
            'language': 'Hungarian',
            'months': {
                'original': ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
                'abbr': ['Jan', 'Febr', 'Márc', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szept', 'Okt', 'Nov', 'Dec']
            },
            'days': ['Vas', 'Hét', 'Ke', 'Sze', 'Csü', 'Pén', 'Szo']
        },
        'hr': {
            'language': 'Croatian',
            'months': {
                'original': ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'],
                'abbr': ['Sij', 'Velj', 'Ožu', 'Tra', 'Svi', 'Lip', 'Srp', 'Kol', 'Ruj', 'Lis', 'Stu', 'Pro']
            },
            'days': ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub']
        },
        'id': {
            'language': 'Indonesian',
            'months': {
                'original': ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
                'abbr': ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']
            },
            'days': ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
        },
        'it': {
            'language': 'Italian',
            'months': {
                'original': ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
                'abbr': ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic']
            },
            'days': ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']
        },
        'is': {
            'language': 'Icelandic',
            'months': {
                'original': ['Janúar', 'Febrúar', 'Mars', 'Apríl', 'Maí', 'Júní', 'Júlí', 'Ágúst', 'September', 'Október', 'Nóvember', 'Desember'],
                'abbr': ['Jan', 'Feb', 'Mars', 'Apr', 'Maí', 'Jún', 'Júl', 'Ágú', 'Sep', 'Okt', 'Nóv', 'Des']
            },
            'days': ['Sun', 'Mán', 'Þri', 'Mið', 'Fim', 'Fös', 'Lau']
        },
        'fa': {
            'language': 'Persian',
            'months': {
                'original': ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
                'abbr': ['فرو', 'ارد', 'خرد', 'تیر', 'مرد', 'شهر', 'مهر', 'آبا', 'آذر', 'دی', 'بهم', 'اسف']
            },
            'days': ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه']
        },
        'ko': {
            'language': 'Korean',
            'months': {
                'original': ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                'abbr': ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
            },
            'days': ['일', '월', '화', '수', '목', '금', '토']
        },
        'lt': {
            'language': 'Lithuanian',
            'months': {
                'original': ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
                'abbr': ['Sau', 'Vas', 'Kov', 'Bal', 'Geg', 'Bir', 'Lie', 'Rugp', 'Rugs', 'Spa', 'Lap', 'Gru']
            },
            'days': ['Sek', 'Pir', 'Ant', 'Tre', 'Ket', 'Pen', 'Šeš']
        },
        'lv': {
            'language': 'Latvian',
            'months': {
                'original': ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'],
                'abbr': ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jūn', 'Jūl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
            },
            'days': ['Sv', 'Pr', 'Ot', 'Tr', 'Ce', 'Pk', 'Se']
        },
        'mn': {
            'language': 'Mongolia',
            'months': {
                'original': ['1 дүгээр сар', '2 дугаар сар', '3 дугаар сар', '4 дүгээр сар', '5 дугаар сар', '6 дугаар сар', '7 дугаар сар', '8 дугаар сар', '9 дүгээр сар', '10 дугаар сар', '11 дүгээр сар', '12 дугаар сар'],
                'abbr': ['1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар', '7-р сар', '8-р сар', '9-р сар', '10-р сар', '11-р сар', '12-р сар']
            },
            'days': ['Ня', 'Да', 'Мя', 'Лх', 'Пү', 'Ба', 'Бя']
        },
        'nl': {
            'language': 'Dutch',
            'months': {
                'original': ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
                'abbr': ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
            },
            'days': ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
        },
        'nb-no': {
            'language': 'Norwegian Bokmål',
            'months': {
                'original': ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
                'abbr': ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des']
            },
            'days': ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø']
        },
        'pl': {
            'language': 'Polish',
            'months': {
                'original': ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
                'abbr': ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru']
            },
            'days': ['Nd', 'Pn', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob']
        },
        'pt-br': {
            'language': 'Brazilian',
            'months': {
                'original': ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                'abbr': ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
            },
            'days': ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
        },
        'ro': {
            'language': 'Romanian',
            'months': {
                'original': ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
                'abbr': ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec']
            },
            'days': ['D', 'L', 'Ma', 'Mi', 'J', 'V', 'S']
        },
        'ru': {
            'language': 'Russian',
            'months': {
                'original': ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                'abbr': ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек']
            },
            'days': ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
        },
        'sv': {
            'language': 'Swedish',
            'months': {
                'original': ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
                'abbr': ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            'days': ['Sön', 'Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör']
        },
        'sk': {
            'language': 'Slovakian',
            'months': {
                'original': ['január', 'február', 'marec', 'apríl', 'máj', 'jún', 'júl', 'august', 'september', 'október', 'november', 'december'],
                'abbr': ['jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec']
            },
            'days': ['ne', 'po', 'ut', 'st', 'št', 'pi', 'so']
        },
        'sl-si': {
            'language': 'Sloveian',
            'months': {
                'original': ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'],
                'abbr': ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec']
            },
            'days': ['Ned', 'Pon', 'Tor', 'Sre', 'Čet', 'Pet', 'Sob']
        },
        'th': {
            'language': 'Thai',
            'months': {
                'original': ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
                'abbr': ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.']
            },
            'days': ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส']
        },
        'tr': {
            'language': 'Turkish',
            'months': {
                'original': ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
                'abbr': ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
            },

            'days': ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']
        },
        'uk': {
            'language': 'Ukraine',
            'months': {
                'original': ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
                'abbr': ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Чер', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд']
            },
            'days': ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
        },
        'vi': {
            'language': 'Vientnamese',
            'months': {
                'original': ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                'abbr': ['T 01', 'T 02', 'T 03', 'T 04', 'T 05', 'T 06', 'T 07', 'T 08', 'T 09', 'T 10', 'T 11', 'T 12']
            },
            'days': ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']
        },
        'zh': {
            'language': 'Chinese',
            'months': {
                'original': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                'abbr': ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            },
            'days': ['日', '一', '二', '三', '四', '五', '六']
        }
    }
});

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(223)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(220),
  /* template */
  __webpack_require__(224),
  /* scopeId */
  "data-v-a7dceba0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(235)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(232),
  /* template */
  __webpack_require__(237),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(243)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(241),
  /* template */
  __webpack_require__(246),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(213),
  /* template */
  __webpack_require__(219),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_button_src_button__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_button_src_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_button_src_button__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    components: { ElButton: __WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_button_src_button___default.a },
    name: 'vueupload',
    props: {
        // 上传URL
        uploadUrl: {
            type: String,
            default: URL.rpi
        },
        // 图片建议分辨率大小
        imgResolution: {
            type: String,
            default: ''
        },
        // 上传文件夹
        folder: {
            type: String,
            default: ''
        },
        // 外部KEY
        keys: {
            type: String,
            default: ''
        },
        // 请求头
        requestHeaders: {
            type: Object,
            default: function () {
                return URLCONFIG;
            }
        },
        // 文件大小（默认2m）
        fileSize: {
            type: Number,
            default: function () {
                return 10;
            }
        },
        // 文件格式（默认，jpg、jpeg、png）
        fileFormat: {
            type: Array,
            default: function () {
                return ['jpg', 'jpeg', 'png', 'gif'];
            }
        },
        // 是否需要初始化
        isInit: {
            type: Boolean,
            default: false
        },
        // 初始文件列表
        arrList: {
            type: Array,
            default: function () {
                return [];
            }
        },
        // 上传文件限制
        fileNum: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            imgBaseUrl: URL.img,
            LANG,
            selectList: [],
            // 上传失败列表
            errorList: [],
            uploadStatus: false,
            deleteStatus: false
        };
    },
    methods: {
        init() {
            if (this.arrList.length === 0) {
                this.selectList = [];
                this.fileList = [];
                this.errorList = [];
            } else if (this.arrList[0]) {
                let model = this.arrList;
                let selectList = this.fileList = [];
                for (let k in model) {
                    let str = "";
                    if (/api\/*/g.test(model[k])) {
                        str = model[k].replace(/https?:\/\/\w*\.\w+\.\w+\/\w+\/\w+/, '');
                    } else {
                        str = model[k];
                    }
                    selectList.push({
                        url: model[k],
                        folder: str
                    });
                }
            }
        },
        selectFile(e) {
            this.$refs.fileUpload.click();
            $(this.$refs.fileUpload).one('change', () => {
                this.fileUploadChange();
            });
            e.preventDefault();
        },
        fileUploadChange() {
            let isMatch = function (str) {
                // 匹配字母数字下划线开头或结尾的任意字符
                let reg = /^[a-zA-Z\d_]*$/;
                return reg.test(str);
            };
            var fileInput = this.$refs.fileUpload;
            this.selectList = [];
            for (var i = 0; i < fileInput.files.length; i++) {
                // 判断文件大小是否符合
                if (fileInput.files[i].size / 1024 < this.fileSize * 1024) {
                    // 判断文件格式是否符合
                    let lowerCase = fileInput.files[i].type.split('/')[1];
                    let capital = fileInput.files[i].type.split('/')[1].toUpperCase();
                    let isLowerCase = this.fileFormat.indexOf(lowerCase);
                    let isCapital = this.fileFormat.indexOf(capital);

                    if (isLowerCase != -1 || isCapital != -1) {
                        if (!isMatch(fileInput.files[i].name.split('.')[0])) {
                            this.$message(`${fileInput.files[i].name}文件名格式不符合！只能是英文数字下划线`);
                        } else {
                            // 符合的就push保存起来待上传
                            this.selectList.push(fileInput.files[i]);
                        }
                    } else {
                        this.$message(`${fileInput.files[i].name}文件格式不符合！`);
                    }
                } else {
                    this.$message(`${fileInput.files[i].name}文件大小超过限制！`);
                }
            }
            // 处理完选择的文件之后把input[file]的value重置使得下一次change事件得以触发
            this.$refs.fileUpload.value = '';
        },
        submit() {
            let _this = this;
            var formData = new FormData();
            if (parseInt(this.fileNum) > 0 && this.fileList.length >= parseInt(this.fileNum)) {
                this.$message.error((LANG['只能上传'] || '只能上传') + this.fileNum + (LANG['个文件，请修改后重试！'] || '个文件，请修改后重试！'));
                return;
            }
            formData.append('post_type', 'upfile');
            if (this.selectList.length > 0) {
                this.selectList.forEach(item => {
                    formData.append('upfile[]', item, item.name);
                });
                this.uploadStatus = true;
                this.$http.post(this.uploadUrl + '/' + this.folder, formData, this.requestHeaders).then(res => {
                    this.selectList = [];
                    if (res.data.state && res.data.state == 0 && res.data.data.file[0].type === 'success') {
                        let fileList = res.data.data.file || [];
                        for (let k in fileList) {
                            if (fileList[k].type === "success") {
                                let model = this.fileList;
                                let num = 0;
                                for (let n in model) {
                                    if (model[n].url === fileList[k].url) {
                                        num++;
                                    }
                                }
                                if (num === 0) {
                                    this.fileList.push(fileList[k]);
                                }
                            }
                            // if(fileList[k].type === "error"){
                            //     let model = _this.errorList;
                            //     let num = 0;
                            //     for(let n in model){
                            //         if(model[n].url === fileList[k].url){
                            //             num++ ;
                            //         }
                            //     }
                            //     if(num === 0){
                            //         this.errorList.push(fileList[k].msg);
                            //     }
                            // }
                        }
                        this.$message.success(LANG['文件上传成功！'] || '文件上传成功！'); // 此处为单传一个图片成功提示
                        // if(this.errorList.length >0){
                        //     this.$message.error(this.errorList.toString() + " " + (LANG['文件上传失败，请稍后重试！'] || '文件上传失败，请稍后重试！'));
                        // }else{
                        //     
                        // }
                    } else {
                        this.$message.error(LANG['文件上传失败，请稍后重试！'] || '文件上传失败，请稍后重试！');
                    }
                    // 传到组件外部的回调
                    let model = [];
                    let fileList = this.fileList;
                    for (let k in fileList) {
                        model.push(fileList[k].url);
                    }
                    this.$emit("response", { url: model, key: this.keys });
                    this.uploadStatus = false;
                }).catch(err => {
                    this.uploadStatus = false;
                    this.$message.error(LANG['服务器错误请稍后重试！'] || '服务器错误请稍后重试！');
                });
            } else {
                this.$message('请先选取要上传的文件');
            }
        },
        delectFileItem(index) {
            this.selectList.splice(index, 1);
        },
        delectServerFileItem(item, index) {
            this.deleteStatus = true;
            let _this = this;
            if (/api\/*/g.test(item.url) === false) {
                this.fileList.splice(index, 1);
                this.deleteStatus = false;
                let model = [];
                let fileList = _this.fileList;
                for (let k in fileList) {
                    model.push(fileList[k].url);
                }
                _this.$message.success(LANG['文件删除成功！'] || '文件删除成功！');
                _this.$emit("response", { url: model, key: _this.keys });
                return;
            }
            this.$http.delete(this.uploadUrl + '/' + item.folder, this.requestHeaders).then(res => {

                if (res.data.state && res.data.state == "0") {
                    _this.fileList.splice(index, 1);
                    let model = [];
                    let fileList = _this.fileList;
                    for (let k in fileList) {
                        model.push(fileList[k].url);
                    }
                    _this.$message.success(LANG['文件删除成功！'] || '文件删除成功！');
                    _this.$emit("response", { url: model, key: _this.keys });
                } else {
                    _this.$message.error(res.data.message + LANG['文件删除失败！'] || '文件删除失败！');
                }
                _this.deleteStatus = false;
            }).catch(err => {
                this.$message.error(err);
            });
        }
        // 读取本地文件的方法，暂时不用
        // handleImageFile(file) {
        //     var previewArea = this.$refs.previewArea
        //     previewArea.innerHtml = '';
        //     var img = document.createElement('img');
        //     img.style.marginRight = 10 + 'px';
        //     img.style.width = 100 + 'px';
        //     img.style.height = 100 + 'px';
        //     img.file = file;
        //     previewArea.appendChild(img);
        //     var reader = new FileReader();
        //     reader.onload = (function(aImg) {
        //         return function(e) {
        //             aImg.src = e.target.result;
        //         }
        //     })(img);
        //     reader.readAsDataURL(file);
        // }
    },
    watch: {
        isInit: function (newval) {
            if (newval) {
                this.init();
            }
        }
    },
    computed: {
        arrLength() {
            return this.arrList.length;
        },
        fileList() {
            let selectList = [];
            if (this.arrList.length === 0) {
                this.selectList = [];
                this.errorList = [];
            } else if (this.arrList[0]) {
                let model = this.arrList;
                for (let k in model) {
                    let str = "";
                    if (/api\/*/g.test(model[k])) {
                        str = model[k].replace(/https?:\/\/\w*\.\w+\.\w+\/\w+\/\w+/, '');
                    } else {
                        str = model[k];
                    }
                    selectList.push({
                        url: model[k],
                        folder: str
                    });
                }
            }
            return selectList;
        }
    }
});

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, ".upload-text{float:left}.upload-tip{font-size:12px;color:#8391a5;margin-top:7px}", ""]);

// exports


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("2f06feb4", content, true);

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(216)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(214),
  /* template */
  __webpack_require__(218),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp"
  }, [_c('div', {
    staticClass: "upload"
  }, [_c('div', {
    staticClass: "upload-text",
    on: {
      "click": _vm.selectFile
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v(_vm._s(_vm.LANG['选取文件'] || '选取文件'))])], 1), _vm._v(" "), _c('input', {
    ref: "fileUpload",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "multiple": "",
      "id": "file-upload",
      "type": "file",
      "name": "file",
      "accept": "image/jp2,image/jpeg,image/png,text/plain"
    }
  }), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "size": "small",
      "type": "success",
      "loading": _vm.uploadStatus
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v(_vm._s(_vm.LANG['上传到服务器'] || '上传到服务器'))]), _vm._v(" "), _c('div', {
    ref: "uploadTip",
    staticClass: "upload-tip"
  }, [_vm._v("\n            " + _vm._s(_vm.LANG['只能上传'] || '只能上传') + "\n            "), _vm._l((_vm.fileFormat), function(item, index) {
    return _c('span', {
      key: index
    }, [_vm._v("\n                " + _vm._s(item)), ((index + 1) !== _vm.fileFormat.length) ? _c('span', [_vm._v("、")]) : _vm._e()])
  }), _vm._v(_vm._s(_vm.LANG['文件'] || '文件') + "。\n            " + _vm._s(_vm.LANG['文件名只能是英文、数字、下划线'] || '文件名只能是英文、数字、下划线') + "，\n            " + _vm._s(_vm.LANG['且单个文件大小不能超过'] || '且单个文件大小不能超过') + _vm._s(_vm.fileSize) + "M ,\n            "), (_vm.imgResolution !== '') ? _c('span', [_vm._v("图片建议分辨率大小为" + _vm._s(_vm.imgResolution))]) : _vm._e(), _vm._v(" "), _c('br'), _vm._v("\n            " + _vm._s(_vm.LANG['先点击 “选取文件” ，然后点击 “上传到服务器”，上传文件'] || '先点击 “选取文件” ，然后点击 “上传到服务器”，上传文件') + "\n        ")], 2)], 1), _vm._v(" "), _c('div', {
    ref: "previewArea",
    staticStyle: {
      "max-width": "500px",
      "max-height": "500px",
      "overflow": "auto"
    }
  }, _vm._l((_vm.selectList), function(item, index) {
    return _c('div', {
      key: index
    }, [_vm._v(_vm._s(item.name) + "\n            "), _c('span', {
      on: {
        "click": function($event) {
          _vm.delectFileItem(index)
        }
      }
    }, [_c('i', {
      staticClass: "el-icon-delete"
    })])])
  })), _vm._v(" "), _vm._l((_vm.fileList), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('img', {
      staticStyle: {
        "margin-right": "10px",
        "width": "90%"
      },
      attrs: {
        "src": _vm.imgBaseUrl + item.url + '?t=' + Math.random(),
        "alt": ""
      }
    }), _vm._v(" "), _c('el-button', {
      attrs: {
        "type": "primary",
        "icon": "delete",
        "loading": _vm.deleteStatus,
        "size": "small"
      },
      on: {
        "click": function($event) {
          _vm.delectServerFileItem(item, index)
        }
      }
    })], 1)
  })], 2)
},staticRenderFns: []}

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "el-button",
    class: [
      _vm.type ? 'el-button--' + _vm.type : '',
      _vm.size ? 'el-button--' + _vm.size : '',
      {
        'is-disabled': _vm.disabled,
        'is-loading': _vm.loading,
        'is-plain': _vm.plain
      }
    ],
    attrs: {
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "type": _vm.nativeType
    },
    on: {
      "click": _vm.handleClick
    }
  }, [(_vm.loading) ? _c('i', {
    staticClass: "el-icon-loading",
    on: {
      "click": _vm.handleInnerClick
    }
  }) : _vm._e(), _vm._v(" "), (_vm.icon && !_vm.loading) ? _c('i', {
    class: 'el-icon-' + _vm.icon,
    on: {
      "click": _vm.handleInnerClick
    }
  }) : _vm._e(), _vm._v(" "), (_vm.$slots.default) ? _c('span', {
    on: {
      "click": _vm.handleInnerClick
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_DateUtils_js__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_DateLanguages_js__ = __webpack_require__(208);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        value: {
            validator: function (val) {
                return val === null || val instanceof Date || typeof val === 'string';
            }
        },
        name: String,
        id: String,
        format: {
            type: [String, Function],
            default: 'yyyy-MM-dd'
        },
        language: {
            type: String,
            default: 'zh'
        },
        fullMonthName: Boolean,
        disabled: Object,
        highlighted: Object,
        placeholder: String,
        inline: Boolean,
        calendarClass: [String, Object],
        inputClass: [String, Object],
        wrapperClass: [String, Object],
        mondayFirst: Boolean,
        clearButton: Boolean,
        clearButtonIcon: String,
        calendarButton: Boolean,
        calendarButtonIcon: String,
        bootstrapStyling: Boolean,
        initialView: {
            type: String,
            default: 'day'
        },
        disabledPicker: Boolean,
        required: Boolean,
        dayViewOnly: Boolean,
        datekey: {
            type: String,
            default: ""
        },
        showview: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            // 系统默认时间
            initDate: new Date(sessionStorage.sysTime),
            /*
             * Vue cannot observe changes to a Date Object so date must be stored as a timestamp
             * This represents the first day of the current viewing month
             * {Number}
             */
            pageTimestamp: new Date(sessionStorage.sysTime).setDate(1),
            /*
             pageTimestamp: (new Date(this.initval)).setDate(1),
             /*
             * Selected Date
             * {Date}
             */
            selectedDate: null,
            /*
             * Flags to show calendar views
             * {Boolean}
             */
            showDayView: false,
            showMonthView: false,
            showYearView: false,
            /*
             * Positioning
             */
            calendarHeight: 0,
            clearVal: false
        };
    },
    watch: {
        value(value) {
            this.setValue(value);
        },
        initialView() {
            this.setInitialView();
        }
    },
    computed: {
        pageDate() {
            return new Date(this.pageTimestamp);
        },
        formattedValue() {
            if (!this.selectedDate) {
                this.clearVal = false;
                return null;
            }
            if (this.clearVal) {
                this.clearVal = false;
                return null;
            }
            return typeof this.format === 'function' ? this.format(this.selectedDate) : __WEBPACK_IMPORTED_MODULE_0__utils_DateUtils_js__["a" /* default */].formatDate(new Date(this.selectedDate), this.format, this.translation);
        },
        showclose() {
            if (this.formattedValue) {
                return true;
            } else {
                return false;
            }
        },
        translation() {
            return __WEBPACK_IMPORTED_MODULE_1__utils_DateLanguages_js__["a" /* default */].translations[this.language];
        },
        currMonthName() {
            const monthName = this.fullMonthName ? this.translation.months.original : this.translation.months.abbr;
            return __WEBPACK_IMPORTED_MODULE_0__utils_DateUtils_js__["a" /* default */].getMonthNameAbbr(this.pageDate.getMonth(), monthName);
        },
        currYear() {
            return this.pageDate.getFullYear();
        },
        /**
         * Returns the day number of the week less one for the first of the current month
         * Used to show amount of empty cells before the first in the day calendar layout
         * @return {Number}
         */
        blankDays() {
            const d = this.pageDate;
            let dObj = new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
            if (this.mondayFirst) {
                return dObj.getDay() > 0 ? dObj.getDay() - 1 : 6;
            }
            return dObj.getDay();
        },
        daysOfWeek() {
            if (this.mondayFirst) {
                const tempDays = this.translation.days.slice();
                tempDays.push(tempDays.shift());
                return tempDays;
            }
            return this.translation.days;
        },
        days() {
            const d = this.pageDate;
            let days = [];
            // set up a new date object to the beginning of the current 'page'
            let dObj = new Date(d.getFullYear(), d.getMonth(), 1, d.getHours(), d.getMinutes());
            let daysInMonth = __WEBPACK_IMPORTED_MODULE_0__utils_DateUtils_js__["a" /* default */].daysInMonth(dObj.getFullYear(), dObj.getMonth());
            for (let i = 0; i < daysInMonth; i++) {
                let bb = dObj.toDateString() === new Date(this.initDate).toDateString();
                days.push({
                    date: dObj.getDate(),
                    timestamp: dObj.getTime(),
                    isSelected: this.isSelectedDate(dObj),
                    isDisabled: this.isDisabledDate(dObj),
                    isHighlighted: this.isHighlightedDate(dObj),
                    isHighlightStart: this.isHighlightStart(dObj),
                    isHighlightEnd: this.isHighlightEnd(dObj),
                    isToday: dObj.toDateString() === this.initDate.toDateString(),
                    isWeekend: dObj.getDay() === 0 || dObj.getDay() === 6,
                    isSaturday: dObj.getDay() === 6,
                    isSunday: dObj.getDay() === 0
                });
                dObj.setDate(dObj.getDate() + 1);
            }
            return days;
        },
        months() {
            const d = this.pageDate;
            let months = [];
            // set up a new date object to the beginning of the current 'page'
            let dObj = new Date(d.getFullYear(), 0, d.getDate(), d.getHours(), d.getMinutes());
            for (let i = 0; i < 12; i++) {
                months.push({
                    month: __WEBPACK_IMPORTED_MODULE_0__utils_DateUtils_js__["a" /* default */].getMonthName(i, this.translation.months.original),
                    timestamp: dObj.getTime(),
                    isSelected: this.isSelectedMonth(dObj),
                    isDisabled: this.isDisabledMonth(dObj)
                });
                dObj.setMonth(dObj.getMonth() + 1);
            }
            return months;
        },
        years() {
            const d = this.pageDate;
            let years = [];
            // set up a new date object to the beginning of the current 'page'
            let dObj = new Date(Math.floor(d.getFullYear() / 10) * 10, d.getMonth(), d.getDate(), d.getHours(), d.getMinutes());
            for (let i = 0; i < 10; i++) {
                years.push({
                    year: dObj.getFullYear(),
                    timestamp: dObj.getTime(),
                    isSelected: this.isSelectedYear(dObj),
                    isDisabled: this.isDisabledYear(dObj)
                });
                dObj.setFullYear(dObj.getFullYear() + 1);
            }
            return years;
        },
        calendarStyle() {
            return {
                position: this.isInline ? 'static' : undefined
            };
        },
        isOpen() {
            return this.showDayView || this.showMonthView || this.showYearView;
        },
        isInline() {
            return !!this.inline;
        },
        isRtl() {
            return this.translation.rtl === true;
        }
    },
    methods: {
        // 删除日期值
        delVal() {
            if (this.showclose) {
                this.clearVal = true;
                //                    this.$emit('get-date',{'day': '','daykey': this.datekey});
            } else {
                this.clearVal = false;
            }
        },
        /**
         * Close all calendar layers
         */
        close() {
            this.showDayView = this.showMonthView = this.showYearView = false;
            if (!this.isInline) {
                this.$emit('closed');
                document.removeEventListener('click', this.clickOutside, false);
            }
        },
        resetDefaultDate() {
            if (this.selectedDate === null) {
                this.setPageDate();
                return;
            }
            this.setPageDate(this.selectedDate);
        },
        /**
         * Effectively a toggle to show/hide the calendar
         * @return {mixed} [description]
         */
        showCalendar() {
            if (this.disabledPicker || this.isInline) {
                return false;
            }
            if (this.isOpen) {
                return this.close();
            }
            this.setInitialView();
        },
        setInitialView() {
            switch (this.initialView) {
                case 'year':
                    this.showYearCalendar();
                    break;
                case 'month':
                    this.showMonthCalendar();
                    break;
                default:
                    this.showDayCalendar();
                    break;
            }
        },
        showDayCalendar() {
            this.close();
            this.showDayView = true;
            if (!this.isInline) {
                this.$emit('opened');
                document.addEventListener('click', this.clickOutside, false);
            }
        },
        showMonthCalendar() {
            if (this.dayViewOnly) return false;
            this.close();
            this.showMonthView = true;
            if (!this.isInline) {
                document.addEventListener('click', this.clickOutside, false);
            }
        },
        showYearCalendar() {
            this.close();
            this.showYearView = true;
            if (!this.isInline) {
                document.addEventListener('click', this.clickOutside, false);
            }
        },
        setDate(timestamp) {
            const date = new Date(timestamp);
            this.selectedDate = new Date(date);
            this.setPageDate(date);
            this.$emit('selected', new Date(date));
            this.$emit('input', FORMATDAT(new Date(date), 'yyyy-MM-dd'));
            this.$emit('get-date', { 'day': FORMATDAT(timestamp, 'yyyy-MM-dd'), 'daykey': this.datekey });
        },
        clearDate() {
            this.selectedDate = nullz;
            this.$emit('selected', null);
            this.$emit('input', '');
            this.$emit('cleared');
        },
        /**
         * @param {Object} day
         */
        selectDate(day) {
            let nowd = FORMATDAT(day.timestamp, 'yyyy-MM-dd');
            if (day.isDisabled) {
                this.$emit('selectedDisabled', day);
                return false;
            }
            this.setDate(day.timestamp);
            if (this.isInline) {
                return this.showDayCalendar();
            }
            //                this.$emit('get-date',{'day':FORMATDAT(day.timestamp,'yyyy-MM-dd')});
            this.close();
        },
        /**
         * @param {Object} month
         */
        selectMonth(month) {
            if (month.isDisabled) {
                return false;
            }
            const date = new Date(month.timestamp);
            this.setPageDate(date);
            this.showDayCalendar();
            this.$emit('changedMonth', month);
        },
        /**
         * @param {Object} year
         */
        selectYear(year) {
            if (year.isDisabled) {
                return false;
            }
            const date = new Date(year.timestamp);
            this.setPageDate(date);
            this.showMonthCalendar();
            this.$emit('changedYear', year);
        },
        /**
         * @return {Number}
         */
        getPageDate() {
            return this.pageDate.getDate();
        },
        /**
         * @return {Number}
         */
        getPageMonth() {
            return this.pageDate.getMonth();
        },
        /**
         * @return {Number}
         */
        getPageYear() {
            return this.pageDate.getFullYear();
        },
        /**
         * @return {String}
         */
        getPageDecade() {
            let sD = Math.floor(this.pageDate.getFullYear() / 10) * 10;
            return sD + '\'s';
        },
        changeMonth(incrementBy) {
            let date = this.pageDate;
            date.setMonth(date.getMonth() + incrementBy);
            this.setPageDate(date);
            this.$emit('changedMonth', date);
        },
        previousMonth() {
            if (!this.previousMonthDisabled()) {
                this.changeMonth(-1);
            }
        },
        previousMonthDisabled() {
            if (!this.disabled || !this.disabled.to) {
                return false;
            }
            let d = this.pageDate;
            return this.disabled.to.getMonth() >= d.getMonth() && this.disabled.to.getFullYear() >= d.getFullYear();
        },
        nextMonth() {
            if (!this.nextMonthDisabled()) {
                this.changeMonth(+1);
            }
        },
        nextMonthDisabled() {
            if (!this.disabled || !this.disabled.from) {
                return false;
            }
            let d = this.pageDate;
            return this.disabled.from.getMonth() <= d.getMonth() && this.disabled.from.getFullYear() <= d.getFullYear();
        },
        changeYear(incrementBy, emit = 'changedYear') {
            let date = this.pageDate;
            date.setYear(date.getFullYear() + incrementBy);
            this.setPageDate(date);
            this.$emit(emit);
        },
        previousYear() {
            if (!this.previousYearDisabled()) {
                this.changeYear(-1);
            }
        },
        previousYearDisabled() {
            if (!this.disabled || !this.disabled.to) {
                return false;
            }
            return this.disabled.to.getFullYear() >= this.pageDate.getFullYear();
        },
        nextYear() {
            if (!this.nextYearDisabled()) {
                this.changeYear(1);
            }
        },
        nextYearDisabled() {
            if (!this.disabled || !this.disabled.from) {
                return false;
            }
            return this.disabled.from.getFullYear() <= this.pageDate.getFullYear();
        },
        previousDecade() {
            if (!this.previousDecadeDisabled()) {
                this.changeYear(-10, 'changeDecade');
            }
        },
        previousDecadeDisabled() {
            if (!this.disabled || !this.disabled.to) {
                return false;
            }
            return Math.floor(this.disabled.to.getFullYear() / 10) * 10 >= Math.floor(this.pageDate.getFullYear() / 10) * 10;
        },
        nextDecade() {
            if (!this.nextDecadeDisabled()) {
                this.changeYear(10, 'changeDecade');
            }
        },
        nextDecadeDisabled() {
            if (!this.disabled || !this.disabled.from) {
                return false;
            }
            return Math.ceil(this.disabled.from.getFullYear() / 10) * 10 <= Math.ceil(this.pageDate.getFullYear() / 10) * 10;
        },
        /**
         * Whether a day is selected
         * @param {Date}
         * @return {Boolean}
         */
        isSelectedDate(dObj) {
            return this.selectedDate && this.selectedDate.toDateString() === dObj.toDateString();
        },
        /**
         * Whether a day is disabled
         * @param {Date}
         * @return {Boolean}
         */
        isDisabledDate(date) {
            let disabled = false;
            if (typeof this.disabled === 'undefined') {
                return false;
            }
            if (typeof this.disabled.dates !== 'undefined') {
                this.disabled.dates.forEach(d => {
                    if (date.toDateString() === d.toDateString()) {
                        disabled = true;
                        return true;
                    }
                });
            }
            if (typeof this.disabled.to !== 'undefined' && this.disabled.to && date < this.disabled.to) {
                disabled = true;
            }
            if (typeof this.disabled.from !== 'undefined' && this.disabled.from && date > this.disabled.from) {
                disabled = true;
            }
            if (typeof this.disabled.ranges !== 'undefined') {
                this.disabled.ranges.forEach(range => {
                    if (typeof range.from !== 'undefined' && range.from && typeof range.to !== 'undefined' && range.to) {
                        if (date < range.to && date > range.from) {
                            disabled = true;
                            return true;
                        }
                    }
                });
            }
            if (typeof this.disabled.days !== 'undefined' && this.disabled.days.indexOf(date.getDay()) !== -1) {
                disabled = true;
            }
            if (typeof this.disabled.daysOfMonth !== 'undefined' && this.disabled.daysOfMonth.indexOf(date.getDate()) !== -1) {
                disabled = true;
            }
            return disabled;
        },
        /**
         * Whether a day is highlighted (only if it is not disabled already)
         * @param {Date}
         * @return {Boolean}
         */
        isHighlightedDate(date) {
            if (this.isDisabledDate(date)) {
                return false;
            }
            let highlighted = false;
            if (typeof this.highlighted === 'undefined') {
                return false;
            }
            if (typeof this.highlighted.dates !== 'undefined') {
                this.highlighted.dates.forEach(d => {
                    if (date.toDateString() === d.toDateString()) {
                        highlighted = true;
                        return true;
                    }
                });
            }
            if (this.isDefined(this.highlighted.from) && this.isDefined(this.highlighted.to)) {
                highlighted = date >= this.highlighted.from && date <= this.highlighted.to;
            }
            if (typeof this.highlighted.days !== 'undefined' && this.highlighted.days.indexOf(date.getDay()) !== -1) {
                highlighted = true;
            }
            return highlighted;
        },
        /**
         * Whether a day is highlighted and it is the first date
         * in the highlighted range of dates
         * @param {Date}
         * @return {Boolean}
         */
        isHighlightStart(date) {
            return this.isHighlightedDate(date) && this.highlighted.from instanceof Date && this.highlighted.from.getFullYear() === date.getFullYear() && this.highlighted.from.getMonth() === date.getMonth() && this.highlighted.from.getDate() === date.getDate();
        },
        /**
         * Whether a day is highlighted and it is the first date
         * in the highlighted range of dates
         * @param {Date}
         * @return {Boolean}
         */
        isHighlightEnd(date) {
            return this.isHighlightedDate(date) && this.highlighted.to instanceof Date && this.highlighted.to.getFullYear() === date.getFullYear() && this.highlighted.to.getMonth() === date.getMonth() && this.highlighted.to.getDate() === date.getDate();
        },
        /**
         * Helper
         * @param  {mixed}  prop
         * @return {Boolean}
         */
        isDefined(prop) {
            return typeof prop !== 'undefined' && prop;
        },
        /**
         * Whether the selected date is in this month
         * @param {Date}
         * @return {Boolean}
         */
        isSelectedMonth(date) {
            return this.selectedDate && this.selectedDate.getFullYear() === date.getFullYear() && this.selectedDate.getMonth() === date.getMonth();
        },
        /**
         * Whether a month is disabled
         * @param {Date}
         * @return {Boolean}
         */
        isDisabledMonth(date) {
            let disabled = false;
            if (typeof this.disabled === 'undefined') {
                return false;
            }
            if (typeof this.disabled.to !== 'undefined' && this.disabled.to) {
                if (date.getMonth() < this.disabled.to.getMonth() && date.getFullYear() <= this.disabled.to.getFullYear() || date.getFullYear() < this.disabled.to.getFullYear()) {
                    disabled = true;
                }
            }
            if (typeof this.disabled.from !== 'undefined' && this.disabled.from) {
                if (this.disabled.from && date.getMonth() > this.disabled.from.getMonth() && date.getFullYear() >= this.disabled.from.getFullYear() || date.getFullYear() > this.disabled.from.getFullYear()) {
                    disabled = true;
                }
            }
            return disabled;
        },
        /**
         * Whether the selected date is in this year
         * @param {Date}
         * @return {Boolean}
         */
        isSelectedYear(date) {
            return this.selectedDate && this.selectedDate.getFullYear() === date.getFullYear();
        },
        /**
         * Whether a year is disabled
         * @param {Date}
         * @return {Boolean}
         */
        isDisabledYear(date) {
            let disabled = false;
            if (typeof this.disabled === 'undefined' || !this.disabled) {
                return false;
            }
            if (typeof this.disabled.to !== 'undefined' && this.disabled.to) {
                if (date.getFullYear() < this.disabled.to.getFullYear()) {
                    disabled = true;
                }
            }
            if (typeof this.disabled.from !== 'undefined' && this.disabled.from) {
                if (date.getFullYear() > this.disabled.from.getFullYear()) {
                    disabled = true;
                }
            }
            return disabled;
        },
        /**
         * Set the datepicker value
         * @param {Date|String|null} date
         */
        setValue(date) {
            if (typeof date === 'string') {
                let parsed = new Date(date);
                date = isNaN(parsed.valueOf()) ? null : parsed;
            }
            if (!date) {
                this.setPageDate();
                this.selectedDate = null;
                return;
            }
            this.selectedDate = date;
            this.setPageDate(date);
        },
        setPageDate(date) {
            if (!date) {
                date = new Date(sessionStorage.sysTime);
            }
            this.pageTimestamp = new Date(date).setDate(1);
        },
        /**
         * Close the calendar if clicked outside the datepicker
         * @param  {Event} event
         */
        clickOutside(event) {
            if (this.$el && !this.$el.contains(event.target)) {

                if (this.isInline) {
                    return this.showDayCalendar();
                }
                this.resetDefaultDate();
                this.close();
                document.removeEventListener('click', this.clickOutside, false);
            }
        },
        dayClasses(day) {
            return {
                'selected': day.isSelected,
                'disabled': day.isDisabled,
                'highlighted': day.isHighlighted,
                'today': day.isToday,
                'weekend': day.isWeekend,
                'sat': day.isSaturday,
                'sun': day.isSunday,
                'highlight-start': day.isHighlightStart,
                'highlight-end': day.isHighlightEnd
            };
        },
        init() {
            if (this.value) {
                this.setValue(this.value);
            }
            if (this.isInline) {
                this.setInitialView();
            }
        }
    },
    mounted() {
        this.init();
        if (this.showview) {
            this.showCalendar();
        }
    }
});

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DateLanguages__ = __webpack_require__(208);


/* harmony default export */ __webpack_exports__["a"] = ({

    /**
     * Validates a date object
     * @param {Date} date - an object instantiated with the new Date constructor
     * @return {Boolean}
     */
    isValidDate(date) {
        if (Object.prototype.toString.call(date) !== '[object Date]') {
            return false;
        }
        return !isNaN(date.getTime());
    },

    /**
     * Return abbreviated week day name
     * @param {Date}
     * @param {Array}
     * @return {String}
     */
    getDayNameAbbr(date, days) {
        if (typeof date !== 'object') {
            throw TypeError('Invalid Type');
        }
        return days[date.getDay()];
    },

    /**
     * Return name of the month
     * @param {Number|Date}
     * @param {Array}
     * @return {String}
     */
    getMonthName(month, months) {
        if (!months) {
            throw Error('missing 2nd parameter Months array');
        }
        if (typeof month === 'object') {
            return months[month.getMonth()];
        }
        if (typeof month === 'number') {
            return months[month];
        }
        throw TypeError('Invalid type');
    },

    /**
     * Return an abbreviated version of the month
     * @param {Number|Date}
     * @return {String}
     */
    getMonthNameAbbr(month, monthsAbbr) {
        if (!monthsAbbr) {
            throw Error('missing 2nd paramter Months array');
        }
        if (typeof month === 'object') {
            return monthsAbbr[month.getMonth()];
        }
        if (typeof month === 'number') {
            return monthsAbbr[month];
        }
        throw TypeError('Invalid type');
    },

    /**
     * Alternative get total number of days in month
     * @param {Number} year
     * @param {Number} m
     * @return {Number}
     */
    daysInMonth(year, month) {
        return (/8|3|5|10/.test(month) ? 30 : month === 1 ? !(year % 4) && year % 100 || !(year % 400) ? 29 : 28 : 31
        );
    },

    /**
     * Get nth suffix for date
     * @param {Number} day
     * @return {String}
     */
    getNthSuffix(day) {
        switch (day) {
            case 1:
            case 21:
            case 31:
                return 'st';
            case 2:
            case 22:
                return 'nd';
            case 3:
            case 23:
                return 'rd';
            default:
                return 'th';
        }
    },

    /**
     * Formats date object
     * @param {Date}
     * @param {String}
     * @param {Object}
     * @return {String}
     */
    formatDate(date, format, translation) {
        translation = !translation ? __WEBPACK_IMPORTED_MODULE_0__DateLanguages__["a" /* default */].translations.en : translation;
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let str = format.replace(/dd/, ('0' + day).slice(-2)).replace(/d/, day).replace(/yyyy/, year).replace(/yy/, String(year).slice(2)).replace(/MMMM/, this.getMonthName(date.getMonth(), translation.months.original)).replace(/MMM/, this.getMonthNameAbbr(date.getMonth(), translation.months.abbr)).replace(/MM/, ('0' + month).slice(-2)).replace(/M(?!a|ä)/, month).replace(/su/, this.getNthSuffix(date.getDate())).replace(/D(?!e|é|i)/, this.getDayNameAbbr(date, translation.days));
        return str;
    },

    /**
     * Creates an array of dates for each day in between two dates.
     * @param {Date} start
     * @param {Date} end
     * @return {Array}
     */
    createDateArray(start, end) {
        let dates = [];
        while (start <= end) {
            dates.push(new Date(start));
            start = new Date(start).setDate(new Date(start).getDate() + 1);
        }
        return dates;
    }

});

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, ".rtl[data-v-a7dceba0]{direction:rtl}.dataView[data-v-a7dceba0]{padding:0 4px 2px}.vdp-datepicker[data-v-a7dceba0]{position:relative;text-align:left}.vdp-datepicker [data-v-a7dceba0]{box-sizing:border-box}.vdp-datepicker__calendar[data-v-a7dceba0]{position:absolute;z-index:799;background:#fff;width:260px;border:1px solid #ccc}.vdp-datepicker__calendar header[data-v-a7dceba0]{display:block;line-height:40px}.vdp-datepicker__calendar header span[data-v-a7dceba0]{display:inline-block;text-align:center;width:71.42857142857143%;float:left}.vdp-datepicker__calendar header .next[data-v-a7dceba0],.vdp-datepicker__calendar header .prev[data-v-a7dceba0]{width:14.285714285714286%;float:left;text-indent:-10000px;position:relative}.vdp-datepicker__calendar header .next[data-v-a7dceba0]:after,.vdp-datepicker__calendar header .prev[data-v-a7dceba0]:after{content:\"\";position:absolute;left:50%;top:50%;transform:translateX(-50%) translateY(-50%);border:6px solid transparent}.vdp-datepicker__calendar header .prev[data-v-a7dceba0]:after{border-right:10px solid #475669;margin-left:-5px}.vdp-datepicker__calendar header .prev.disabled[data-v-a7dceba0]:after{border-right:10px solid #ddd}.vdp-datepicker__calendar header .next[data-v-a7dceba0]:after{border-left:10px solid #475669;margin-left:5px}.vdp-datepicker__calendar header .next.disabled[data-v-a7dceba0]:after{border-left:10px solid #ddd}.vdp-datepicker__calendar header .next[data-v-a7dceba0]:not(.disabled),.vdp-datepicker__calendar header .prev[data-v-a7dceba0]:not(.disabled),.vdp-datepicker__calendar header .up[data-v-a7dceba0]:not(.disabled){cursor:pointer}.vdp-datepicker__calendar header .next[data-v-a7dceba0]:not(.disabled):hover,.vdp-datepicker__calendar header .prev[data-v-a7dceba0]:not(.disabled):hover,.vdp-datepicker__calendar header .up[data-v-a7dceba0]:not(.disabled):hover{background:#eee}.vdp-datepicker__calendar .disabled[data-v-a7dceba0]{color:#ddd;cursor:default}.vdp-datepicker__calendar .flex-rtl[data-v-a7dceba0]{display:flex;width:inherit;flex-wrap:wrap}.vdp-datepicker__calendar .cell[data-v-a7dceba0]{display:inline-block;padding:0 5px;width:14.285714285714286%;height:30px;line-height:30px;text-align:center;font-size:80%;vertical-align:middle}.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day[data-v-a7dceba0],.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month[data-v-a7dceba0],.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year[data-v-a7dceba0]{cursor:pointer}.vdp-datepicker__calendar .cell.selected.highlighted[data-v-a7dceba0]{background:#4bd}.vdp-datepicker__calendar .cell.highlighted[data-v-a7dceba0]{background:#cae5ed}.vdp-datepicker__calendar .cell.grey[data-v-a7dceba0]{color:#888}.vdp-datepicker__calendar .cell.grey[data-v-a7dceba0]:hover{background:inherit}.vdp-datepicker__calendar .cell.day-header[data-v-a7dceba0]{font-size:75%;white-space:no-wrap;cursor:inherit}.vdp-datepicker__calendar .cell.day-header[data-v-a7dceba0]:hover{background:inherit}.vdp-datepicker__calendar .month[data-v-a7dceba0],.vdp-datepicker__calendar .year[data-v-a7dceba0]{width:33.333%}.vdp-datepicker__calendar-button[data-v-a7dceba0],.vdp-datepicker__clear-button[data-v-a7dceba0]{cursor:pointer;font-style:normal}.vdp-datepicker__calendar-button.disabled[data-v-a7dceba0],.vdp-datepicker__clear-button.disabled[data-v-a7dceba0]{color:#999;cursor:default}", ""]);

// exports


/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("9e2862ee", content, true);

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vdp-datepicker",
    class: [_vm.wrapperClass, _vm.isRtl ? 'rtl' : ''],
    staticStyle: {
      "width": "150px"
    }
  }, [_c('div', {
    class: {
      'input-group': _vm.bootstrapStyling
    }
  }, [(_vm.calendarButton) ? _c('span', {
    staticClass: "vdp-datepicker__calendar-button",
    class: {
      'input-group-addon': _vm.bootstrapStyling
    },
    style: ({
      'cursor:not-allowed;': _vm.disabledPicker
    }),
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showCalendar($event)
      }
    }
  }, [_c('i', {
    class: _vm.calendarButtonIcon
  }, [(!_vm.calendarButtonIcon) ? _c('span', [_vm._v("…")]) : _vm._e()])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "el-date-editor el-input el-date-editor--date intDataW"
  }, [_c('i', {
    staticClass: "el-input__icon ",
    class: {
      'el-icon-circle-close closeIcon': _vm.formattedValue, 'el-icon-date': !_vm.formattedValue,
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.delVal($event)
      }
    }
  }), _vm._v(" "), _c('input', {
    staticClass: "el-input__inner",
    class: [_vm.inputClass, {
      'form-control': _vm.bootstrapStyling
    }],
    attrs: {
      "type": _vm.inline ? 'hidden' : 'text',
      "name": _vm.name,
      "id": _vm.id,
      "placeholder": _vm.placeholder,
      "clear-button": _vm.clearButton,
      "disabled": _vm.disabledPicker,
      "required": _vm.required,
      "readonly": ""
    },
    domProps: {
      "value": _vm.formattedValue
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showCalendar($event)
      }
    }
  })]), _vm._v(" "), (_vm.clearButton && _vm.selectedDate) ? _c('span', {
    staticClass: "vdp-datepicker__clear-button",
    class: {
      'input-group-addon': _vm.bootstrapStyling
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.clearDate()
      }
    }
  }, [_c('i', {
    class: _vm.clearButtonIcon
  }, [(!_vm.clearButtonIcon) ? _c('span', [_vm._v("×")]) : _vm._e()])]) : _vm._e()]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDayView),
      expression: "showDayView"
    }],
    ref: "datediv",
    class: [_vm.calendarClass, 'vdp-datepicker__calendar'],
    style: (_vm.calendarStyle)
  }, [_c('header', [_c('span', {
    staticClass: "prev",
    class: {
      'disabled': _vm.isRtl ? _vm.nextMonthDisabled(_vm.pageTimestamp) : _vm.previousMonthDisabled(_vm.pageTimestamp)
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.isRtl ? _vm.nextMonth() : _vm.previousMonth()
      }
    }
  }, [_vm._v("<")]), _vm._v(" "), _c('span', {
    staticClass: "yearColor",
    class: !_vm.dayViewOnly ? 'up' : '',
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showMonthCalendar($event)
      }
    }
  }, [_vm._v(" " + _vm._s(_vm.currYear) + "年-" + _vm._s(_vm.currMonthName) + "\n            ")]), _vm._v(" "), _c('span', {
    staticClass: "next",
    class: {
      'disabled': _vm.isRtl ? _vm.previousMonthDisabled(_vm.pageTimestamp) : _vm.nextMonthDisabled(_vm.pageTimestamp)
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.isRtl ? _vm.previousMonth() : _vm.nextMonth()
      }
    }
  }, [_vm._v(">")])]), _vm._v(" "), _c('div', {
    class: _vm.isRtl ? 'flex-rtl' : ''
  }, [_vm._l((_vm.daysOfWeek), function(d) {
    return _c('span', {
      key: d.timestamp,
      staticClass: "cell day-header",
      staticStyle: {
        "background": "#EFF2F7"
      }
    }, [_vm._v(_vm._s(d))])
  }), _vm._v(" "), _vm._l((_vm.blankDays), function(d) {
    return _c('span', {
      key: d.timestamp,
      staticClass: "cell day blank"
    })
  }), _vm._l((_vm.days), function(day) {
    return _c('span', {
      key: day.timestamp,
      staticClass: "cell day",
      class: _vm.dayClasses(day),
      attrs: {
        "track-by": "timestamp"
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectDate(day)
        }
      }
    }, [_vm._v(_vm._s(day.date))])
  })], 2)]), _vm._v(" "), (!_vm.dayViewOnly) ? [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showMonthView),
      expression: "showMonthView"
    }],
    class: [_vm.calendarClass, 'vdp-datepicker__calendar'],
    style: (_vm.calendarStyle)
  }, [_c('header', [_c('span', {
    staticClass: "prev",
    class: {
      'disabled': _vm.previousYearDisabled(_vm.pageTimestamp)
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.previousYear($event)
      }
    }
  }, [_vm._v("<")]), _vm._v(" "), _c('span', {
    staticClass: "up",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.showYearCalendar($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.getPageYear()))]), _vm._v(" "), _c('span', {
    staticClass: "next",
    class: {
      'disabled': _vm.nextYearDisabled(_vm.pageTimestamp)
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.nextYear($event)
      }
    }
  }, [_vm._v(">")])]), _vm._v(" "), _vm._l((_vm.months), function(month) {
    return _c('span', {
      key: month.timestamp,
      staticClass: "cell month",
      class: {
        'selected': month.isSelected, 'disabled': month.isDisabled
      },
      attrs: {
        "track-by": "timestamp"
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectMonth(month)
        }
      }
    }, [_vm._v(_vm._s(month.month))])
  })], 2)] : _vm._e(), _vm._v(" "), (!_vm.dayViewOnly) ? [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showYearView),
      expression: "showYearView"
    }],
    class: [_vm.calendarClass, 'vdp-datepicker__calendar'],
    style: (_vm.calendarStyle)
  }, [_c('header', [_c('span', {
    staticClass: "prev",
    class: {
      'disabled': _vm.previousDecadeDisabled(_vm.pageTimestamp)
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.previousDecade($event)
      }
    }
  }, [_vm._v("<")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.getPageDecade()))]), _vm._v(" "), _c('span', {
    staticClass: "next",
    class: {
      'disabled': _vm.nextMonthDisabled(_vm.pageTimestamp)
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.nextDecade($event)
      }
    }
  }, [_vm._v(">")])]), _vm._v(" "), _vm._l((_vm.years), function(year) {
    return _c('span', {
      key: year.timestamp,
      staticClass: "cell year",
      class: {
        'selected': year.isSelected, 'disabled': year.isDisabled
      },
      attrs: {
        "track-by": "timestamp"
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.selectYear(year)
        }
      }
    }, [_vm._v(_vm._s(year.year))])
  })], 2)] : _vm._e()], 2)
},staticRenderFns: []}

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const CONFIG = {
    HOUR_TOKENS: ['HH', 'H', 'hh', 'h', 'kk', 'k'],
    MINUTE_TOKENS: ['mm', 'm'],
    SECOND_TOKENS: ['ss', 's'],
    APM_TOKENS: ['A', 'a']
};
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VueTimepicker',
    props: {
        value: { type: Object },
        hideClearButton: { type: Boolean },
        format: { type: String },
        minuteInterval: { type: Number },
        secondInterval: { type: Number },
        id: { type: String }
    },
    data() {
        return {
            hours: [],
            minutes: [],
            seconds: [],
            apms: [],
            showDropdown: false,
            muteWatch: false,
            hourType: 'HH',
            minuteType: 'mm',
            secondType: '',
            apmType: '',
            hour: '',
            minute: '',
            second: '',
            apm: '',
            fullValues: undefined
        };
    },
    computed: {
        displayTime() {
            let formatString = String(this.format || 'HH:mm');
            if (this.hour) {
                formatString = formatString.replace(new RegExp(this.hourType, 'g'), this.hour);
            }
            if (this.minute) {
                formatString = formatString.replace(new RegExp(this.minuteType, 'g'), this.minute);
            }
            if (this.second && this.secondType) {
                formatString = formatString.replace(new RegExp(this.secondType, 'g'), this.second);
            }
            if (this.apm && this.apmType) {
                formatString = formatString.replace(new RegExp(this.apmType, 'g'), this.apm);
            }
            return formatString;
        },
        showClearBtn() {
            if (this.hour && this.hour !== '' || this.minute && this.minute !== '') {
                return true;
            }
            return false;
        }
    },
    watch: {
        'format': 'renderFormat',
        minuteInterval(newInteval) {
            this.renderList('minute', newInteval);
        },
        secondInterval(newInteval) {
            this.renderList('second', newInteval);
        },
        'value': 'readValues',
        'displayTime': 'fillValues'
    },
    methods: {
        formatValue(type, i) {
            switch (type) {
                case 'H':
                case 'm':
                case 's':
                    return String(i);
                case 'HH':
                case 'mm':
                case 'ss':
                    return i < 10 ? `0${i}` : String(i);
                case 'h':
                case 'k':
                    return String(i + 1);
                case 'hh':
                case 'kk':
                    return i + 1 < 10 ? `0${i + 1}` : String(i + 1);
                default:
                    return '';
            }
        },
        checkAcceptingType(validValues, formatString, fallbackValue) {
            if (!validValues || !formatString || !formatString.length) {
                return '';
            }
            for (let i = 0; i < validValues.length; i++) {
                if (formatString.indexOf(validValues[i]) > -1) {
                    return validValues[i];
                }
            }
            return fallbackValue || '';
        },
        renderFormat(newFormat) {
            newFormat = newFormat || this.format;
            if (!newFormat || !newFormat.length) {
                newFormat = 'HH:mm';
            }
            this.hourType = this.checkAcceptingType(CONFIG.HOUR_TOKENS, newFormat, 'HH');
            this.minuteType = this.checkAcceptingType(CONFIG.MINUTE_TOKENS, newFormat, 'mm');
            this.secondType = this.checkAcceptingType(CONFIG.SECOND_TOKENS, newFormat);
            this.apmType = this.checkAcceptingType(CONFIG.APM_TOKENS, newFormat);
            this.renderHoursList();
            this.renderList('minute');
            if (this.secondType) {
                this.renderList('second');
            }
            if (this.apmType) {
                this.renderApmList();
            }
            const self = this;
            this.$nextTick(() => {
                self.readValues();
            });
        },
        renderHoursList() {
            const hoursCount = this.hourType === 'h' || this.hourType === 'hh' ? 12 : 24;
            this.hours = [];
            for (let i = 0; i < hoursCount; i++) {
                this.hours.push(this.formatValue(this.hourType, i));
            }
        },
        renderList(listType, interval) {
            if (listType === 'second') {
                interval = interval || this.secondInterval;
            } else if (listType === 'minute') {
                interval = interval || this.minuteInterval;
            } else {
                return;
            }
            if (interval === 0) {
                interval = 60;
            } else if (interval > 60) {
                window.console.warn('`' + listType + '-interval` should be less than 60. Current value is', interval);
                interval = 1;
            } else if (interval < 1) {
                window.console.warn('`' + listType + '-interval` should be NO less than 1. Current value is', interval);
                interval = 1;
            } else if (!interval) {
                interval = 1;
            }
            if (listType === 'minute') {
                this.minutes = [];
            } else {
                this.seconds = [];
            }
            for (let i = 0; i < 60; i += interval) {
                if (listType === 'minute') {
                    this.minutes.push(this.formatValue(this.minuteType, i));
                } else {
                    this.seconds.push(this.formatValue(this.secondType, i));
                }
            }
        },
        renderApmList() {
            this.apms = [];
            if (!this.apmType) {
                return;
            }
            this.apms = this.apmType === 'A' ? ['AM', 'PM'] : ['am', 'pm'];
        },
        readValues() {
            if (!this.value || this.muteWatch) {
                return;
            }
            const timeValue = JSON.parse(JSON.stringify(this.value || {}));
            const values = Object.keys(timeValue);
            if (values.length === 0) {
                return;
            }
            if (values.indexOf(this.hourType) > -1) {
                this.hour = timeValue[this.hourType];
            }
            if (values.indexOf(this.minuteType) > -1) {
                this.minute = timeValue[this.minuteType];
            }
            if (values.indexOf(this.secondType) > -1) {
                this.second = timeValue[this.secondType];
            } else {
                this.second = 0;
            }
            if (values.indexOf(this.apmType) > -1) {
                this.apm = timeValue[this.apmType];
            }
            this.fillValues();
        },
        fillValues() {
            let fullValues = {};
            const baseHour = this.hour;
            const baseHourType = this.hourType;
            const hourValue = baseHour || baseHour === 0 ? Number(baseHour) : '';
            const baseOnTwelveHours = this.isTwelveHours(baseHourType);
            const apmValue = baseOnTwelveHours && this.apm ? String(this.apm).toLowerCase() : false;
            CONFIG.HOUR_TOKENS.forEach(token => {
                if (token === baseHourType) {
                    fullValues[token] = baseHour;
                    return;
                }
                let value;
                let apm;
                switch (token) {
                    case 'H':
                    case 'HH':
                        if (!String(hourValue).length) {
                            fullValues[token] = '';
                            return;
                        } else if (baseOnTwelveHours) {
                            if (apmValue === 'pm') {
                                value = hourValue < 12 ? hourValue + 12 : hourValue;
                            } else {
                                value = hourValue % 12;
                            }
                        } else {
                            value = hourValue % 24;
                        }
                        fullValues[token] = token === 'HH' && value < 10 ? `0${value}` : String(value);
                        break;
                    case 'k':
                    case 'kk':
                        if (!String(hourValue).length) {
                            fullValues[token] = '';
                            return;
                        } else if (baseOnTwelveHours) {
                            if (apmValue === 'pm') {
                                value = hourValue < 12 ? hourValue + 12 : hourValue;
                            } else {
                                value = hourValue === 12 ? 24 : hourValue;
                            }
                        } else {
                            value = hourValue === 0 ? 24 : hourValue;
                        }
                        fullValues[token] = token === 'kk' && value < 10 ? `0${value}` : String(value);
                        break;
                    case 'h':
                    case 'hh':
                        if (apmValue) {
                            value = hourValue;
                            apm = apmValue || 'am';
                        } else {
                            if (!String(hourValue).length) {
                                fullValues[token] = '';
                                fullValues.a = '';
                                fullValues.A = '';
                                return;
                            } else if (hourValue > 11) {
                                apm = 'pm';
                                value = hourValue === 12 ? 12 : hourValue % 12;
                            } else {
                                if (baseOnTwelveHours) {
                                    apm = '';
                                } else {
                                    apm = 'am';
                                }
                                value = hourValue % 12 === 0 ? 12 : hourValue;
                            }
                        }
                        fullValues[token] = token === 'hh' && value < 10 ? `0${value}` : String(value);
                        fullValues.a = apm;
                        fullValues.A = apm.toUpperCase();
                        break;
                }
            });
            if (this.minute || this.minute === 0) {
                const minuteValue = Number(this.minute);
                fullValues.m = String(minuteValue);
                fullValues.mm = minuteValue < 10 ? `0${minuteValue}` : String(minuteValue);
            } else {
                fullValues.m = '';
                fullValues.mm = '';
            }
            if (this.second || this.second === 0) {
                const secondValue = Number(this.second);
                fullValues.s = String(secondValue);
                fullValues.ss = secondValue < 10 ? `0${secondValue}` : String(secondValue);
            } else {
                fullValues.s = '';
                fullValues.ss = '';
            }
            this.fullValues = fullValues;
            this.updateTimeValue(fullValues);
            this.$emit('change', { data: fullValues });
        },
        updateTimeValue(fullValues) {
            this.muteWatch = true;
            const self = this;
            const baseTimeValue = JSON.parse(JSON.stringify(this.value || {}));
            let timeValue = {};
            Object.keys(baseTimeValue).forEach(key => {
                timeValue[key] = fullValues[key];
            });
            this.$emit('input', timeValue);
            this.$nextTick(() => {
                self.muteWatch = false;
            });
        },
        isTwelveHours(token) {
            return token === 'h' || token === 'hh';
        },
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        select(type, value) {
            if (type === 'hour') {
                this.hour = value;
            } else if (type === 'minute') {
                this.minute = value;
            } else if (type === 'second') {
                this.second = value;
            } else if (type === 'apm') {
                this.apm = value;
            }
        },
        clearTime() {
            this.hour = '';
            this.minute = '';
            this.second = '';
            this.apm = '';
        }
    },
    mounted() {
        this.renderFormat();
    }
});

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, ".time-picker{display:inline-block;position:relative;width:8em}.time-picker *{box-sizing:border-box}.time-picker .time-picker-overlay{z-index:2;position:fixed;top:0;left:0;right:0;bottom:0}.time-picker .dropdown{position:absolute;z-index:800;left:0;background:#fff;box-shadow:0 1px 6px rgba(0,0,0,.15);width:10em;height:10em;font-weight:400}.time-picker .dropdown .select-list{width:10em;height:10em;overflow:hidden;display:flex;flex-flow:row nowrap;align-items:stretch;justify-content:space-between}.time-picker .dropdown ul.apms,.time-picker .dropdown ul.minutes,.time-picker .dropdown ul.seconds{border-left:1px solid #fff}.time-picker .dropdown ul{padding:0;margin:0;list-style:none;flex:1;overflow-x:hidden;overflow-y:auto}.time-picker .dropdown ul li{text-align:center;padding:.3em 0;color:#161616}.time-picker .dropdown ul li:not(.hint):hover{background:rgba(0,0,0,.08);color:#161616;cursor:pointer}.time-picker .dropdown .hint{color:#a5a5a5;cursor:default;font-size:.8em}", ""]);

// exports


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(226);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("39f007ba", content, true);

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(227)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(225),
  /* template */
  __webpack_require__(229),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "timePicker"
    }
  }, [_c('span', {
    staticClass: "time-picker"
  }, [(!_vm.hideClearButton) ? _c('i', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.showDropdown && _vm.showClearBtn),
      expression: "!showDropdown && showClearBtn"
    }],
    staticClass: "el-input__icon  el-icon-circle-close closeIcon",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.clearTime($event)
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.displayTime),
      expression: "displayTime"
    }],
    staticClass: "display-time  el-input__inner",
    attrs: {
      "id": _vm.id,
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": (_vm.displayTime)
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.toggleDropdown($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.displayTime = $event.target.value
      }
    }
  }), _vm._v(" "), (_vm.showDropdown) ? _c('div', {
    staticClass: "time-picker-overlay",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.toggleDropdown($event)
      }
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDropdown),
      expression: "showDropdown"
    }],
    staticClass: "dropdown"
  }, [_c('div', {
    staticClass: "select-list"
  }, [_c('ul', {
    staticClass: "hours"
  }, [_c('li', {
    staticClass: "hint",
    domProps: {
      "textContent": _vm._s(_vm.hourType)
    }
  }), _vm._v(" "), _vm._l((_vm.hours), function(hr) {
    return _c('li', {
      class: {
        active: _vm.hour === hr
      },
      domProps: {
        "textContent": _vm._s(hr)
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.select('hour', hr)
        }
      }
    })
  })], 2), _vm._v(" "), _c('ul', {
    staticClass: "minutes"
  }, [_c('li', {
    staticClass: "hint",
    domProps: {
      "textContent": _vm._s(_vm.minuteType)
    }
  }), _vm._v(" "), _vm._l((_vm.minutes), function(m) {
    return _c('li', {
      class: {
        active: _vm.minute === m
      },
      domProps: {
        "textContent": _vm._s(m)
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.select('minute', m)
        }
      }
    })
  })], 2), _vm._v(" "), (_vm.secondType) ? _c('ul', {
    staticClass: "seconds"
  }, [_c('li', {
    staticClass: "hint",
    domProps: {
      "textContent": _vm._s(_vm.secondType)
    }
  }), _vm._v(" "), _vm._l((_vm.seconds), function(s) {
    return _c('li', {
      class: {
        active: _vm.second === s
      },
      domProps: {
        "textContent": _vm._s(s)
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.select('second', s)
        }
      }
    })
  })], 2) : _vm._e(), _vm._v(" "), (_vm.apmType) ? _c('ul', {
    staticClass: "apms"
  }, [_c('li', {
    staticClass: "hint",
    domProps: {
      "textContent": _vm._s(_vm.apmType)
    }
  }), _vm._v(" "), _vm._l((_vm.apms), function(a) {
    return _c('li', {
      class: {
        active: _vm.apm === a
      },
      domProps: {
        "textContent": _vm._s(a)
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.select('apm', a)
        }
      }
    })
  })], 2) : _vm._e()])])])])
},staticRenderFns: []}

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(236)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(231),
  /* template */
  __webpack_require__(238),
  /* scopeId */
  "data-v-283e36ca",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

const toolbar = [[
// 'anchor', //锚点
// 'undo', //撤销
// 'redo', //重做
'bold', //加粗
'indent', //首行缩进
// 'snapscreen', //截图
'italic', //斜体
'underline', //下划线
'strikethrough', //删除线
'subscript', //下标
'fontborder', //字符边框
'superscript', //上标
'formatmatch', //格式刷
// 'source', //源代码
'blockquote', //引用
'pasteplain', //纯文本粘贴模式
'selectall', //全选
// 'print', //打印
// 'preview', //预览
'horizontal', //分隔线
'removeformat', //清除格式
'time', //时间
'date', //日期
'unlink', //取消链接
'insertrow', //前插入行
'insertcol', //前插入列
'mergeright', //右合并单元格
'mergedown', //下合并单元格
'deleterow', //删除行
'deletecol', //删除列
'splittorows', //拆分成行
'splittocols', //拆分成列
'splittocells', //完全拆分单元格
'deletecaption', //删除表格标题
'inserttitle', //插入标题
'mergecells', //合并多个单元格
'deletetable', //删除表格
'cleardoc', //清空文档
'insertparagraphbeforetable', //"表格前插入行"
'insertcode', //代码语言
'fontfamily', //字体
'fontsize', //字号
'paragraph', //段落格式
// 'simpleupload', //单图上传
'insertimage', //多图上传
// 'edittable', //表格属性
'edittd', //单元格属性
'link', //超链接
// 'emotion', //表情
'spechars', //特殊字符
'searchreplace', //查询替换
// 'map', //Baidu地图
// 'gmap', //Google地图
// 'insertvideo', //视频
'help', //帮助
'justifyleft', //居左对齐
'justifyright', //居右对齐
'justifycenter', //居中对齐
'justifyjustify', //两端对齐
'forecolor', //字体颜色
'backcolor', //背景色
'insertorderedlist', //有序列表
'insertunorderedlist', //无序列表
// 'fullscreen', //全屏
'directionalityltr', //从左向右输入
'directionalityrtl', //从右向左输入
'rowspacingtop', //段前距
'rowspacingbottom', //段后距
'pagebreak', //分页
// 'insertframe', //插入Iframe
'imagenone', //默认
'imageleft', //左浮动
'imageright', //右浮动
// 'attachment', //附件
'imagecenter', //居中
// 'wordimage', //图片转存
'lineheight', //行间距
'edittip ', //编辑提示
'customstyle', //自定义标题
'autotypeset', //自动排版
// 'webapp', //百度应用
'touppercase', //字母大写
'tolowercase', //字母小写
// 'background', //背景
// 'template', //模板
// 'scrawl', //涂鸦
// 'music', //音乐
'inserttable']];
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'wangEditor',
  data() {
    return {};
  },
  props: {
    value: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: 'editor'
    },
    config: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },
  mounted() {
    window.UEditorValueCount = 0;
    const config = {
      toolbars: toolbar,
      autoFloatEnabled: false,
      enableAutoSave: false,
      autoSyncData: false,
      serverUrl: URL.api + "/ueditor",
      autoHeightEnabled: false,
      initialFrameHeight: 300
    };
    this.UE = UE.getEditor(this.id, Object.assign(config, this.config));

    this.UE.ready(() => {
      this.UE.setContent(this.value);
    });

    this.UE.addListener('contentChange', () => {
      let content = UE.getEditor(this.id).getContent();
      this.$emit('getContentLength', { 'num': this.UE.getContentLength(true), 'key': this.id });
      this.$emit('input', content);
    });
  },
  destroyed() {
    this.UE.destroy();
    delete window.UEditorValueCount;
  },
  watch: {
    value: function (newval, oldval) {
      if (window.UEditorValueCount === 0) {
        this.$nextTick(() => {
          if (this.UE.isReady === 1) {
            this.UE.setContent(newval);
            this.UE.focus(true);
            window.UEditorValueCount++;
          }
        });
      }
    }
  },
  directives: {
    modifyDefaultWidth: {
      bind: function (el) {
        el.style.width = '100%';
      }
    }
  }
});

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myDatePicker_vue__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myDatePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__myDatePicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timePicker_vue__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__timePicker_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            LANG,
            myval: '',
            showdrop: false,
            times: {
                HH: '00',
                mm: '00',
                ss: '00'
            },
            vueinit: false,
            datetimes: '',
            // 是否删除
            isDel: false
        };
    },
    props: {
        datekey: String,
        value: String,
        showview: {
            type: Boolean,
            default: true
        },
        isEnd: {
            type: Boolean,
            default: false
        },
        showTime: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        init() {
            this.myval = this.value;
            this.vueinit = true;
            if (this.myval) {
                this.setVal();
            } else {
                this.delVal();
            }
        },
        setVal() {
            this.myval = this.value || '';
            if (this.myval.length === 10) {
                this.times.HH = '00';
                this.times.mm = '00';
                this.times.ss = '00';
            } else {
                this.times.HH = this.getbasetimes(this.value, 'HH');
                this.times.mm = this.getbasetimes(this.value, 'mm');
                this.times.ss = this.getbasetimes(this.value, 'ss');
            }
            this.datetimes = this.mergeDateTime(this.myval);
        },
        getDateval(val) {
            this.datetimes = this.mergeDateTime(val.day);
            this.$emit('input', this.datetimes);
            this.$emit('get-val', { data: this.datetimes, daykey: this.datekey });
        },
        toggleDropdown(e) {
            this.$nextTick(() => {
                if (this.showdrop) {
                    e.stopPropagation();
                }
                this.showdrop = !this.showdrop;
            });
        },
        // 拼接时分秒
        mergeDateTime(day, times) {
            this.isDel = false;
            if (!day) {
                return sessionStorage.sysTime;
            }
            if (times) {
                return FORMATDATEPICKER(day) + ' ' + times.HH + ':' + times.mm + ':' + times.ss;
            } else {
                return FORMATDATEPICKER(day) + ' ' + this.times.HH + ':' + this.times.mm + ':' + this.times.ss;
            }
        },
        // 初始化时分秒
        getbasetimes(val, str) {
            if (!val) {
                return '00';
            }
            let t = new Date(val);
            switch (str) {
                case 'HH':
                    return t.getHours().toString().length > 1 ? t.getHours().toString() : '0' + t.getHours().toString();
                case 'mm':
                    return t.getMinutes().toString().length > 1 ? t.getMinutes().toString() : '0' + t.getMinutes().toString();
                case 'ss':
                    return t.getSeconds().toString().length > 1 ? t.getSeconds().toString() : '0' + t.getSeconds().toString();
            }
        },
        // 切换时分秒
        changetimes(val) {
            this.isDel = false;
            this.datetimes = this.mergeDateTime(this.datetimes, val.data);
        },
        // 删除值
        delVal() {
            this.isDel = true;
            this.myval = '';
            this.times.HH = '00';
            this.times.mm = '00';
            this.times.ss = '00';
            this.$emit('input', '');
            this.$emit('get-val', { data: '', daykey: this.datekey });
        }
    },
    components: {
        mydatepicker: __WEBPACK_IMPORTED_MODULE_0__myDatePicker_vue___default.a,
        timepicker: __WEBPACK_IMPORTED_MODULE_1__timePicker_vue___default.a
    },
    computed: {
        nowval() {
            if (this.isDel) {
                this.$emit('input', '');
                this.$emit('get-val', { data: '', daykey: this.datekey });
                return '';
            } else {
                this.$emit('input', this.datetimes);
                this.$emit('get-val', { data: this.datetimes, daykey: this.datekey });
                return this.datetimes;
            }
        }
    },
    watch: {
        value: function (newval) {
            this.init();
        }
    },
    mounted() {
        if (this.vueinit) {
            $('body').on('click', () => {
                this.showdrop = false;
            });
        }
    },
    created() {
        this.init();
        if (this.isEnd) {
            this.times.HH = '23', this.times.mm = '59', this.times.ss = '59';
        }
    }
});

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "#dateTimePicker{position:relative}#dateTimePicker .dateInput{position:relative;width:175px}#dateTimePicker .date_and_time{position:absolute;top:36px;border:1px solid #ccc;width:260px;z-index:888;background-color:#fff}#dateTimePicker .date_and_time .date_select .vdp-datepicker__calendar{margin-left:-1px}#dateTimePicker .date_and_time .date_select .el-icon-circle-close{top:3px}#dateTimePicker .date_and_time .date_select .el-input__inner{margin-left:6px}#dateTimePicker .date_container{position:relative}#dateTimePicker .dateEnter{position:absolute;right:-102%;z-index:9}", ""]);

// exports


/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, ".edui-default .edui-editor[data-v-283e36ca]{z-index:20!important}", ""]);

// exports


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(233);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("dcf05dbe", content, true);

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(234);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("3f029cf2", content, true);

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    attrs: {
      "id": "dateTimePicker"
    }
  }, [_c('el-col', {
    staticClass: "dateInput",
    attrs: {
      "span": 15
    }
  }, [_c('input', {
    staticClass: "el-input__inner",
    attrs: {
      "autocomplete": "off",
      "size": "small",
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.nowval
    },
    on: {
      "click": _vm.toggleDropdown
    }
  }), _vm._v(" "), _c('i', {
    staticClass: "el-input__icon ",
    class: {
      'el-icon-circle-close closeIcon': _vm.nowval, 'el-icon-date': !_vm.nowval,
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.delVal($event)
      }
    }
  })]), _vm._v(" "), _c('el-col', [(_vm.showdrop) ? _c('el-row', {
    staticClass: "date_and_time"
  }, [_c('el-col', {
    staticClass: "date_container"
  }, [_c('el-col', {
    staticClass: "date_select",
    attrs: {
      "span": 12
    }
  }, [_c('mydatepicker', {
    staticClass: "date",
    attrs: {
      "datekey": _vm.datekey,
      "showview": _vm.showview
    },
    on: {
      "get-date": _vm.getDateval
    },
    model: {
      value: (_vm.myval),
      callback: function($$v) {
        _vm.myval = $$v
      },
      expression: "myval"
    }
  })], 1), _vm._v(" "), _c('el-col', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showTime),
      expression: "showTime"
    }],
    staticClass: "ml10",
    attrs: {
      "span": 11
    }
  }, [_c('timepicker', {
    attrs: {
      "format": "HH:mm:ss",
      "value": _vm.times
    },
    on: {
      "change": _vm.changetimes
    }
  })], 1), _vm._v(" "), (_vm.showdrop) ? _c('el-col', {
    staticClass: "dateEnter"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.toggleDropdown($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['确定'] || ''))])], 1) : _vm._e()], 1)], 1) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('script', {
    directives: [{
      name: "modifyDefaultWidth",
      rawName: "v-modifyDefaultWidth"
    }],
    attrs: {
      "id": _vm.id,
      "type": "text/plain"
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(257)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(255),
  /* template */
  __webpack_require__(259),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            //配置选中数据
            columnsModel: [],
            //显示状态
            setState: false
        };
    },
    props: {
        //数据列配置
        columns: Array,
        columnConfig: Array
    },
    methods: {
        changeColumnConfig() {
            this.$emit("do_change-col", {
                "event": event,
                "item": this.columnConfig
            });
        },
        saveSet() {
            this.setState = false;
        },
        changeSet() {
            this.setState = true;
        }
    },
    mounted: function () {
        var _this = this;
        let columns = this.columns;
        for (let i in columns) {
            this.columnsModel.push({
                "id": i,
                "label": columns[i],
                "prop": columns[i]
            });
        }
    }
});

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            LANG,
            autofocus: false
        };
    },
    props: {
        confirmConfig: {
            type: Object,
            default: {
                state: false,
                msg: "",
                fn: "",
                obj: {}
            }
        }
    },
    watch: {
        'confirmConfig.state': function (newval) {
            if (newval) {
                this.autofocus = true;
            }
        }
    },
    components: {},
    methods: {
        //处理确定事件
        doConfirm() {
            this.$emit("do-confirm", { "fn": this.confirmConfig.fn, "obj": this.confirmConfig.obj, "flag": this.confirmConfig.flag });
            this.confirmConfig.state = false;
        },
        doCancel() {
            this.confirmConfig.state = false;
            this.$emit("do-cancel", { "fn": this.confirmConfig.fn, "obj": this.confirmConfig.obj, "flag": this.confirmConfig.flag });
        }
    },
    directives: {
        focus: {
            update: function (el, { value }) {
                if (value) {
                    el.focus();
                }
            }
        }
    },
    mounted() {},
    created() {}
});

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("69843c3c", content, true);

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(240),
  /* template */
  __webpack_require__(245),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.setState) ? _c('i', {
    staticClass: "fa fa-cog",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": _vm.changeSet
    }
  }) : _vm._e(), _vm._v(" "), (_vm.setState) ? _c('el-select', {
    staticStyle: {
      "width": "700px"
    },
    attrs: {
      "multiple": "",
      "placeholder": _vm._('表格列配置')
    },
    on: {
      "change": _vm.changeColumnConfig
    },
    model: {
      value: (_vm.columnConfig),
      callback: function($$v) {
        _vm.columnConfig = $$v
      },
      expression: "columnConfig"
    }
  }, _vm._l((_vm.columnsModel), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.label,
        "value": item.prop
      }
    })
  })) : _vm._e(), _vm._v(" "), (_vm.setState) ? _c('el-button', {
    attrs: {
      "type": "success"
    },
    domProps: {
      "textContent": _vm._s(_vm._('保存配置'))
    },
    on: {
      "click": _vm.saveSet
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "confirm"
    }
  }, [(_vm.confirmConfig.state) ? _c('el-dialog', {
    attrs: {
      "title": _vm.LANG['系统提示'] || '系统提示',
      "size": "tiny",
      "before-close": _vm.doCancel
    },
    on: {
      "close": _vm.doCancel
    },
    model: {
      value: (_vm.confirmConfig.state),
      callback: function($$v) {
        _vm.$set(_vm.confirmConfig, "state", $$v)
      },
      expression: "confirmConfig.state"
    }
  }, [_c('p', [_c('span', [_vm._v(_vm._s(_vm.LANG[_vm.confirmConfig.msg] || _vm.confirmConfig.msg))])]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    staticClass: "formCancel",
    on: {
      "click": _vm.doCancel
    }
  }, [_vm._v(_vm._s(_vm.LANG['取 消'] || '取 消'))]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "focus",
      rawName: "v-focus",
      value: (_vm.autofocus),
      expression: "autofocus"
    }],
    staticClass: "formSave",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.doConfirm
    }
  }, [_vm._v(_vm._s(_vm.LANG['确 定'] || '确 定'))])], 1)]) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(266)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(260),
  /* template */
  __webpack_require__(271),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(254),
  /* template */
  __webpack_require__(258),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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
            this.$emit('change-option', { "item": this.checkedval.checked });
        },
        //checkbox点击事件
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.checkOptions.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.checkOptions.length;
            this.$emit('change-option', { "item": this.checkedval.checked });
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

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, ".mt15[data-v-38ecce0e]{margin-top:10px}", ""]);

// exports


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(250);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("9c29e9b8", content, true);

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(251)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(249),
  /* template */
  __webpack_require__(253),
  /* scopeId */
  "data-v-38ecce0e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "changeAll"
    }
  }, [_c('el-checkbox', {
    attrs: {
      "indeterminate": _vm.isIndeterminate
    },
    on: {
      "change": _vm.handleCheckAllChange
    },
    model: {
      value: (_vm.checkAll),
      callback: function($$v) {
        _vm.checkAll = $$v
      },
      expression: "checkAll"
    }
  }, [_vm._v("全选")]), _vm._v(" "), _c('el-checkbox-group', {
    staticClass: "mt15",
    on: {
      "change": _vm.handleCheckedCitiesChange
    },
    model: {
      value: (_vm.checkedval.checked),
      callback: function($$v) {
        _vm.$set(_vm.checkedval, "checked", $$v)
      },
      expression: "checkedval.checked"
    }
  }, _vm._l((_vm.checkOptions), function(item, index) {
    return _c('el-checkbox', {
      key: index,
      attrs: {
        "label": item.value || item
      }
    }, [_vm._v(_vm._s(item.label || item))])
  }))], 1)
},staticRenderFns: []}

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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
            quickDate: [{ key: "yesterday", text: '昨日', isActive: false, id: "1" }, { key: "today", text: '今日', isActive: false, id: "2" }, { key: "thisweek", text: '本周', isActive: false, id: "3" }, { key: 'lastweek', text: '上周', isActive: false, id: "4" }, { key: "thismonth", text: '本月', isActive: false, id: "5" }, { key: "lastmonth", text: '上月', isActive: false, id: "6" }]
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
            var date = this.formatday(d.getDate());

            // 周
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
                    year++;month = 1;
                } else if (month == 1 && months < 0) {
                    year--;month = 12;
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

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__columnSet_vue__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__columnSet_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__columnSet_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirm_vue__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__confirm_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//列配置



/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			LANG,
			//列配置
			columnConfig: [],
			//复制列参数
			columnList: [],
			//表格列表数据
			tableDataList: [],
			tableDataColen: [],
			// 合计相关
			subTotalBet: {
				bet_money: 0,
				bet_times: 0,
				lose_earn: 0,
				send_prize: 0,
				bonus: 0,
				contri: 0,
				valid_bet: 0
			},
			totalBet: {
				bet_money: 0,
				bet_times: 0,
				lose_earn: 0,
				send_prize: 0,
				bonus: 0,
				contri: 0,
				valid_bet: 0
			},
			times: 0,
			//分页相关
			//总页数
			total: 0,
			//一页多少条
			pageSize: 20,
			//共多少页
			pageCount: 1,
			// 当前页
			currentPage: 1,
			otherData: null,
			//求和数据
			sumArr: [],
			baseUrl: "",
			sumNumber: 0,
			//全选CHECKBOX
			allChecked: false,
			checkList: [],
			//当前选中数据
			rowsList: {},
			//当前选中总数
			checkSum: 0,
			loading: false,
			//横向滚动条
			tableScroll: false,
			// 超时时间
			options: [{ "label": "不更新", "value": "0" }, { "label": "30秒", "value": "30" }, { "label": "60秒", "value": "60" }, { "label": "120秒", "value": "120" }, { "label": "180秒", "value": "180" }],
			// 下接对象
			listObj: {},
			//会员层级
			levelSelectvalue: '',
			lockSwitch: 'ON',
			ascKey: {},
			confirmConfig: {
				state: false,
				msg: "",
				fn: ""
			},
			levelNum: 1,
			levelNUmRow: 1,
			// 按钮拼接对象
			btnLinkGroup: [],
			classObj: {
				state_blue: false,
				state_success: false,
				state_warning: false,
				state_danger: false,
				state_info: false
			},
			isInit: false
		};
	},
	props: {

		//表格数据
		tableData: Object,
		//数据请求地址
		tableUrl: String,
		//数据列配置
		columns: Array,
		columnsUrl: String,
		//是否拼接columns
		assembleColumns: Object,
		//是否表格自适应宽度
		automation: {
			type: Boolean,
			default: false
		},
		//多选中表格数据之后是否显示锁定
		lockShow: Boolean,
		//表格hover展示数据
		hoverData: Array,
		//是否显示选择框
		tableCheck: {
			type: Boolean,
			default: false
		},
		//是否显增索引
		tableIndex: {
			type: Boolean,
			default: false
		},
		//是否显示列内边框
		tableBorder: {
			type: Boolean,
			default: true
		},
		//行内双击事件
		tableRowDbclick: {
			type: Boolean,
			default: true
		},
		//是否显示分页
		pageSet: {
			type: Boolean,
			default: true
		},
		//批量操作按钮
		tabOperation: Array,
		//表格汇总相关
		sumGame: {
			type: Boolean,
			default: false
		},
		sumKey: "",
		updateDate: Object,
		updated: {
			type: Boolean,
			default: false
		},
		//表单类型，刷新数据
		formType: String,
		//传入查询对象
		query: Object,
		//操作类型，用于查询数据刷新
		opts: String,
		//是否给页面发送数据 默认不发送
		getData: {
			type: Boolean,
			default: false
		},
		//保存数据
		saveData: {
			type: Boolean,
			default: false
		},
		//数据修改后回调
		updateMessage: {
			type: String,
			default: ""
		},
		// 表格宽度自适应
		autoWidth: {
			type: Boolean,
			default: false
		},
		lotteryType: {
			type: Boolean,
			default: false
		},
		// 表格宽度
		fullWidth: {
			type: Boolean,
			default: true
		},
		// 导出按钮
		showExport: {
			type: Boolean,
			default: false
		},
		// 表格下拉数据更新
		listKey: {
			type: String,
			default: ''
		},
		listArr: Array,
		// 刷新数据
		showRefresh: {
			type: Boolean,
			default: false
		},
		// 自动刷新
		autoshowRefresh: {
			type: Boolean,
			default: false
		},
		// 表格单页条数
		pageSizeList: {
			type: Array,
			default: function () {
				return [10, 20, 50, 100, 200, 500, 1000];
			}
		},
		// 表格头部按钮配置
		headTextconf: {
			type: Object,
			default: function () {
				return { label: '', fn: '', show: false };
			}
		},
		// 刷新时间
		refreshTimes: {
			type: String,
			default: '0'
		},
		// 初始化创建
		isCreated: {
			type: Boolean,
			default: false
			//表格自适应滚动条
			//            scorAuto:{
			//            	type:Boolean,
			//	            default: false
			//            }
		} },
	components: {
		confirm: __WEBPACK_IMPORTED_MODULE_1__confirm_vue___default.a
	},
	methods: {
		// 数据初始化
		reSet() {
			//表格初始化
			this.allChecked = false;
			this.checkList = [];
			this.rowsList = {};
			this.checkSum = 0;
			this.listOjb = null;
			this.levelNUmRow = 1;
			this.levelNum = 1;
			this.isInit = false;
			//总条数
			this.total = 20;
			//每次页条数
			this.pageSize = 20;
			//总页数
			this.pageCount = 1;
			//当前页
			this.currentPage = 1;
			// 其它数据
			this.otherData = {};
			this.tableDataList.splice(0, this.tableDataList.length);
			this.tableDataColen.splice(0, this.tableDataColen.length);
			this.columnList.splice(0, this.columnList.length);
			this.btnLinkGroup = this.btnLinkGroup.splice(0, this.btnLinkGroup);
		},
		//初始化数据
		Datainit(changeUrl) {
			let _this = this;
			this.loading = true;
			//总条数
			let total = this.total;
			//每次页条数
			let pageSize = this.pageSize;
			//总页数
			let pageCount = this.pageCount;
			//当前页
			let currentPage = changeUrl ? 1 : this.currentPage;
			this.otherData = {};
			let otherData = this.otherData;
			let colKey = this.sumKey;
			let columnList = _this.columnList || [];
			this.baseUrl = this.tableUrl;
			if (this.columnsUrl != "" && this.columnsUrl != undefined) {
				this.$http.get(this.columnsUrl, URLCONFIG).then(res => {
					columnList.splice(0, columnList.length);
					let columns = res && res.data && res.data.columns ? res.data.columns : [];
					if (this.assembleColumns) {
						let index = this.assembleColumns.index;
						let origin = columns.slice(0, index);
						let end = columns.slice(index, columns.length);
						let columsObj = {
							orignCol: origin,
							endCol: end,
							connectCol: this.assembleColumns.data
						};
						columns = CONNECTCOLUMS(columsObj, 100);
					}
					if (columns.length > 0) {
						for (let i in columns) {
							columnList.push(columns[i]);
							if (columns[i].disabled == true) {
								_this.columnConfig.push(columns[i].prop);
							}
							if (columns[i].sort === true) {
								_this.$set(_this.ascKey, columns[i].prop, '');
							}
						}
					}
					// 取列表数据
					if (this.baseUrl != "" && this.baseUrl != undefined) {
						let query = {};
						if (this.query && this.query.toString().length > 0) {
							query = this.query;
						}
						if (this.pageSet) {
							let index = this.baseUrl.indexOf('?');
							if (index === -1) {
								this.baseUrl = this.baseUrl + "?page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 20 : pageSize);
							} else {
								let n = this.baseUrl.indexOf('page=');
								if (/standard/g.test(this.baseUrl) || /fast/g.test(this.baseUrl)) {
									//                                currentPage = currentPage;
								} else {
									currentPage = 1;
								}
								if (n > 0) {
									this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + currentPage || 1);
								} else {
									this.baseUrl = this.baseUrl + "&page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 20 : pageSize);
								}
								let m = this.baseUrl.indexOf('page_size=');
								if (m > 0) {
									this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + (pageSize === 0 ? 20 : pageSize));
								} else {
									this.baseUrl = this.baseUrl + "&page_size=20";
								}
							}
						}
						this.$http.get(this.baseUrl, URLCONFIG).then(res => {
							_this.tableDataList = [];
							_this.tableDataColen = [];
							let tableDate = res && res.data && res.data.data ? res.data.data : [];
							if (_this.getData) {
								let model = res.data || {};
								for (let k in model) {
									otherData[k] = model[k];
								}
							}
							let list = res && res.data && res.data.data && res.data.tableDemoDate || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
							if (res.data.data.length === undefined) {
								if (res.data.data.list != undefined && res.data.data.list.length) {
									list = res.data.data.list || [];
								}
							}
							_this.subTotalBet = {};
							_this.totalBet = {};
							if (res.data.attributes) {
								if (res.data.attributes.subTotalBet) {

									let obj = res.data.attributes.subTotalBet;
									for (let k in obj) {
										_this.subTotalBet[k] = obj[k];
									}
								}
								if (res.data.attributes.totalBet) {

									let obj = res.data.attributes.totalBet;
									for (let k in obj) {
										_this.totalBet[k] = obj[k];
									}
								}
								_this.total = res && res.data && res.data.attributes && res.data.attributes.total || 20;
								_this.pageSize = res && res.data && res.data.attributes && res.data.attributes.size || 20;
								_this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
								_this.currentPage = parseInt(res.data.attributes.page) ? parseInt(res.data.attributes.page) : 1;
							}
							if (list.length && list.length > 0) {
								for (let i in list) {
									// 根据列表配置写数据
									let temp = list[i],
									    tempobj = {};
									for (let m in temp) {
										tempobj[m] = temp[m];
									}
									_this.tableDataColen.push(tempobj);
									_this.tableDataList.push(_this.formatRowDate(list[i], columnList, i));
								}
								_this.initCheckList(list);
							} else if (tableDate.length && tableDate.length > 0) {
								let sumNumber = _this.sumNumber;
								for (let j in tableDate) {
									_this.tableDataList.push(_this.formatRowDate(tableDate[j], columnList, j));
									let temp = tableDate[j],
									    tempobj = {};
									for (let m in temp) {
										tempobj[m] = temp[m];
									}
									_this.tableDataColen.push(tempobj);
								}
								this.initCheckList(tableDate);
							}
							_this.tableDataList.prototype.clone = function () {
								return [].concat(this);
							};
							if (_this.getData) {
								_this.$emit("get-table-data", {
									"item": _this.tableDataColen,
									"allData": otherData
								});
							}
							_this.loading = false;
						}).catch(e => {
							if (_this.getData) {
								_this.$emit("get-table-data", {
									"item": _this.tableDataColen,
									"allData": otherData
								});
							}
							_this.loading = false;
							//                        _this.$message.error(LANG['网络问题，请稍后重试！'] || '网络问题，请稍后重试！');
						});
					} else {
						this.loading = false;
						// 通过formData渲染表格
						if (!this.tableData) return;
						let query = {};
						if (this.query && this.query.toString().length > 0) {
							query = this.query;
						}
						let tableDate = this.tableData;
						let otherData = _this.otherData[0] = {};
						let list = this.tableData.list || [];
						if (list.length && list.length > 0) {
							//写相关其它数据
							for (let i in tableDate) {
								otherData[i] = tableDate[i];
							}
							_this.total = tableDate.total ? tableDate.total : 0;
							_this.pageSize = tableDate.page_size ? tableDate.page_size : 20;
							_this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
							_this.currentPage = tableDate.page ? tableDate.page : 1;
							for (let i in list) {
								_this.tableDataList.push(_this.formatRowDate(list[i], columnList, i));
								let temp = list[i],
								    tempobj = {};
								for (let m in temp) {
									tempobj[m] = temp[m];
								}
								_this.tableDataColen.push(tempobj);
							}
							_this.initCheckList(list);
						}
						if (_this.getData) {
							_this.$emit("get-table-data", {
								"item": _this.tableDataColen,
								"otherData": _this.otherData
							});
						}
					}
				}).catch(e => {
					_this.loading = false;
					_this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
				});
			} else {
				this.loading = false;
			}
		},
		formatRowDate(row, col, index) {
			let _this = this;
			let obj = {},
			    keys = [];
			for (let k in row) {
				obj[k] = row[k];
				for (let i = 0; i < col.length; i++) {
					keys = col[i].prop ? col[i].prop.split(',') : ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'];
					if (col[i].prop === k || keys[0] === k || keys[1] === k || keys[2] === k || keys[3] === k || keys[4] === k || keys[5] === k) {
						if (col[i].type != undefined) {
							switch (col[i].type) {
								case 'date':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatDate(row[k], 'yyyy-MM-dd HH:mm:ss');
									}
									continue;
								case 'contentFilterLink':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatContentFilterLink(row, row['game_name'], col[i].prop);
									}
									continue;
								case 'filterConnect':
									obj[k] = tableFilter.formatContentFilter(row, col[i].prop, col[i].filters, col[i].delimiter);
									continue;
								case 'regular':
									obj[k] = row[k];
									continue;
								case 'allState':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatAllState(row, col[i].prop, col[i].formatkey, col[i].truelabel, col[i].falselabel);
									}
									continue;
								case 'connectProp':
									if (obj[keys[1]] === row[keys[1]]) {
										obj[keys[1]] = tableFilter.formatConnectProp(row, col[i].prop);
									}
									continue;
								case 'connectPropMoney':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatContentFilterLink(row, col[i].prop);
									}
									continue;
								case 'moneyDelimiter':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatMoneyDelimiter(item[col[i].prop], col[i].delimiter);
									}
									continue;
								case 'connectAdd':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatConnectAdd(row, col[i].prop);
									}
									continue;
								case 'linkConnectAdd':
									if (obj[keys[0]] === row[keys[0]]) {
										obj[keys[0]] = tableFilter.formatConnectAdd(row, col[i].prop);
									}
									continue;
								case 'img':
									let str = row[col[i].prop] || '';
									if (str.toString().length < 5) {
										obj[k] = '暂无图片';
									} else if (col[i].imgtype && col[i].imgtype == 'bank') {
										obj[k] = '/static/img/bank/' + row['code'] + '.png';
									} else if (row[col[i].prop].toString().length > 5 && col[i].imgtype !== 'bank') {
										obj[k] = tableFilter.getrpiurl(row[col[i].prop]);
									}
									continue;
								case 'object,prop':
									obj[keys[0]] = row[keys[0]];
									if (keys[2] != undefined) {
										obj[keys[2]] = row[keys[2]];
									}
									continue;
								case 'object':
									if (col[i].formatKey && col[i].formatKey != 'bank') {
										if (obj[keys[1]] === row[keys[1]]) {
											obj[keys[1]] = tableFilter.formatObject(row, col[i].prop);
										}
									} else {
										obj[keys[0]] = row[keys[0]];
									}
									continue;
								case 'array':
									if (col[i].filterType && col[i].filterType == 'array' && col[i].type == 'array' && obj[k] === row[k]) {
										obj[k] = tableFilter.formatArray(row[k], col[i].separators);
									}
									continue;
								case 'connect_odds_type':
									if (obj[keys[0]] === row[keys[0]]) {
										obj[keys[0]] = tableFilter.formatConnectodds(row, col[i].prop);
									}
									continue;
								case 'json':
									if (col[i].arr) {
										if (obj[k] === row[k]) {
											obj[k] = tableFilter.formatContentFilterLink(row[col[i].prop], col[i].arr);
										}
									} else {
										obj[k] = '';
									}
									continue;
								case 'connect':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatConnect(row, col[i].prop, col[i].delimiter, col[i].type);
									}
									continue;
								case 'connectInt':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatConnect(row, col[i].prop, col[i].delimiter, col[i].type, 'int');
									}
									continue;
								case 'connect,twoDivisionMoney':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatConnectTwo(row, col[i].prop, col[i].delimiter);
									}
									continue;
								case 'connectArray':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatConnectArray(row, col[i].prop);
									}
									break;
								case 'connectLottery':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatConnectLottery(row, col[i].prop, _this.lotteryType);
									}
									continue;
								case 'contentDate':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatContentDate(row, col[i].prop, _this.lotteryType);
									}
									continue;
								case 'connect,divisionMoney':
									let key = col[i].prop.split(',')[0];
									obj[key] = tableFilter.formatConnect(row, col[i].prop, col[i].delimiter, col[i].type);
									continue;
								case 'link':
									obj[k] = row[k];
									continue;
								case 'linkDivisionMoney':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatMoney(row[k]);
									}
									continue;
								case 'linkNumberButton':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatLinkNumberButton(row, col[i].prop, _this.btnLinkGroup, index);
									}
									continue;
								case 'ipBlack':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatSex(row[col[i].prop], col[i].filters);
									}
									continue;
								case 'divisionMoney':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatMoney(row[col[i].prop]);
									}
									continue;
								case 'divisionMoney,fours':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatMoney(row[col[i].prop], 4);
									}
									continue;
								case 'subtract':
									if (obj[keys[keys.length - 1]] == undefined) {
										obj[keys[keys.length - 1]] = tableFilter.formatSubtract(row, col[i].prop);
									}
									continue;
								case 'lotteryCustom':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatLotteryCustom(row[col[i].prop], _this.tableUrl);
									}
									continue;
								// 定制拼接过滤字段，并除100
								case 'filterAdddivisionMoney':
									if (obj[k] === row[k]) {
										obj[keys[1]] = tableFilter.formatContentFilterAdd(row, col[i].prop);
									}
									continue;
								default:
									obj[k] = row[k];
									continue;
							}
						} else if (col[i].filterType && col[i].filterType == 'json' && col[i].type == 'json') {
							obj[k] = tableFilter.formatJson(row[col[i].prop]);
						} else if (col[i].filterType && col[i].filterType == 'array' && col[i].type == 'array') {
							obj[k] = tableFilter.formatArray(row[col[i].prop], col[i].separators);
						} else if (col[i].filters != undefined) {
							obj[k] = tableFilter.formatSex(row[col[i].prop], col[i].filters);
						} else if (!col[i].type) {
							obj[k] = row[col[i].prop];
						}
						break;
					}
				}
			}
			return obj;
		},
		//处理操作公共按钮事件
		doHandle(event, row, fn, prop, btn) {
			this.$emit("do-handle", {
				"event": event,
				"row": row,
				"fn": fn,
				"page": this.currentPage,
				"prop": prop,
				"btn": btn,
				"x": event.pageX,
				"y": event.pageY
			});
		},
		//处理表格的按钮的hover展示信息
		//            doHover(row, fn) {
		//                let event = window.event || event;
		//                this.$emit("do-hover", {
		//                    "event": event,
		//                    "row": row,
		//                    "fn": fn,
		//                    "page": this.currentPage
		//                });
		//            },
		//写各状态初始
		initCheckList(arr) {
			for (let i in arr) {
				this.$set(this.checkList, i, false);
			}
		},
		// 头部文字事件
		headTextFn(event, obj) {
			this.$emit("do-handle", {
				"event": event,
				"row": {},
				"page": this.currentPage,
				"fn": obj.fn
			});
		},
		//选据择所有数据
		allchecked() {
			let allChecked = this.allChecked;
			let model = this.tableDataList;
			let checks = this.checkList;
			let rows = this.rowsList;
			let arrs = [];
			let bl = false;
			if (allChecked) {
				bl = true;
				for (let i in this.tableDataColen) {
					arrs.push(this.tableDataColen[i]);
					rows[i] = this.tableDataColen[i];
				}
				this.checkSum = this.tableDataColen.length;
			} else {
				bl = false;
				this.checkSum = 0;
				arrs.splice(0, arrs.length);
				// rows = null;
				for (let i in rows) {
					delete rows[i];
				}
			}
			for (let k in model) {
				checks[k] = bl;
			}
			this.$emit("do-operation", {
				"rows": arrs,
				"page": this.currentPage
			});
		},
		//选择当前数据
		thisChecked(num) {
			let allChecked = this.allChecked;
			let model = this.tableDataList;
			let checks = this.checkList;
			let rows = this.rowsList;
			let arrs = [];
			if (checks[num]) {
				rows[num] = this.tableDataColen[num];
				this.checkSum = this.checkSum + 1;
			} else {
				delete rows[num];
				this.checkSum = this.checkSum - 1;
			}
			if (this.checkSum === model.length) {
				this.allChecked = true;
			}
			if (this.checkSum === 0) {
				this.allChecked = false;
			}
			for (let k in rows) {
				arrs.push(rows[k]);
			}
			this.$emit("do-operation", {
				"rows": arrs,
				"page": this.currentPage
			});
		},
		//切换每页条数
		doSizePage(v) {
			this.tableDataColen.splice(0, this.tableDataColen.length);
			this.loading = true;
			let total = this.total;
			let pageSize = this.pageSize;
			let pageCount = this.pageCount;
			let page = 0;
			let _this = this;
			if (v == 1000) {
				// 选择1000条后，默认刷新时间为120秒
				this.times = 120;
			}
			page = Math.ceil(pageSize * pageCount / total) || 1;
			_this.tableDataList.splice(0, _this.tableDataList.length);
			let index = this.baseUrl.indexOf('?');
			if (index === -1) {
				this.baseUrl = this.baseUrl + "?page=1&page_size=" + v;
			} else {
				let n = this.baseUrl.indexOf('page=');
				if (n > 0) {
					this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=1");
				} else {
					this.baseUrl = this.baseUrl + "&page=1&page_size=" + v;
				}
				let m = this.baseUrl.indexOf('page_size=');
				if (m > 0) {
					this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + v);
				} else {
					this.baseUrl = this.baseUrl + "&page_size=" + 20;
				}
			}
			let otherData = {};
			this.$http.get(this.baseUrl, URLCONFIG).then(res => {
				_this.total = res.data.attributes.total || 20;
				_this.pageSize = res.data.attributes.size || 20;
				_this.pageCount = Math.ceil(this.total / this.pageSize);
				_this.currentPage = 1;

				if (_this.getData) {
					let model = res.data || {};
					for (let k in model) {
						otherData[k] = model[k];
					}
				}
				let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
				if (tableDate.list) {
					for (let i in tableDate.list) {
						_this.tableDataList.push(_this.formatRowDate(tableDate.list[i], this.columnList, i));
						let temp = tableDate.list[i],
						    tempobj = {};
						for (let m in temp) {
							tempobj[m] = temp[m];
						}
						_this.tableDataColen.push(tempobj);
					}
				} else {
					for (let i in tableDate) {
						_this.tableDataList.push(_this.formatRowDate(tableDate[i], this.columnList, i));
						let temp = tableDate[i],
						    tempobj = {};
						for (let m in temp) {
							tempobj[m] = temp[m];
						}
						_this.tableDataColen.push(tempobj);
					}
				}
				if (_this.getData) {
					_this.$emit("get-table-data", {
						"item": _this.tableDataColen,
						"allData": otherData
					});
				}
				_this.loading = false;
			}).catch(e => {
				_this.loading = false;
				if (_this.getData) {
					_this.$emit("get-table-data", {
						"item": _this.tableDataColen,
						"allData": otherData
					});
				}
				_this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
			});
		},
		//切换页数
		doCurrentChange(v) {
			this.loading = true;
			let total = this.total;
			let pageSize = this.pageSize;
			let pageCount = this.pageCount;
			this.tableDataColen.splice(0, this.tableDataColen.length);
			this.currentPage = v;
			let page = 0;
			let _this = this;
			page = Math.ceil(pageSize * pageCount / total) || 1;
			_this.tableDataList.splice(0, _this.tableDataList.length);
			let index = this.baseUrl.indexOf('?');
			if (index === -1) {
				this.baseUrl = this.baseUrl + "?page=" + v + "&page_size=" + this.pageSize;
			} else {
				let n = this.baseUrl.indexOf('page=');
				if (n > 0) {
					this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + v);
				} else {
					this.baseUrl = this.baseUrl + "&page=" + v + "&page_size=" + this.pageSize;
				}
				let m = this.baseUrl.indexOf('page_size=');
				if (m > 0) {
					this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + this.pageSize);
				} else {
					this.baseUrl = this.baseUrl + "&page_size=" + 20;
				}
			}
			this.$http.get(this.baseUrl, URLCONFIG).then(res => {
				_this.total = res.data.attributes.total || 20;
				_this.pageSize = res.data.attributes.size || 20;
				_this.pageCount = Math.ceil(this.total / this.pageSize);
				_this.currentPage = res.data.attributes.page || 1;
				let otherData = {};
				if (_this.getData) {
					let model = res.data || {};
					for (let k in model) {
						otherData[k] = model[k];
					}
				}
				let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
				if (tableDate.list) {
					for (let i in tableDate.list) {
						_this.tableDataList.push(_this.formatRowDate(tableDate.list[i], this.columnList, i));
						let temp = tableDate.list[i],
						    tempobj = {};
						for (let m in temp) {
							tempobj[m] = temp[m];
						}
						_this.tableDataColen.push(tempobj);
					}
				} else {
					for (let i in tableDate) {
						_this.tableDataList.push(_this.formatRowDate(tableDate[i], this.columnList, i));
						let temp = tableDate[i],
						    tempobj = {};
						for (let m in temp) {
							tempobj[m] = temp[m];
						}
						_this.tableDataColen.push(tempobj);
					}
				}
				if (_this.getData) {
					_this.$emit("get-table-data", {
						"item": _this.tableDataColen,
						"allData": otherData
					});
				}
				_this.loading = false;
			}).catch(e => {
				_this.loading = false;
				if (_this.getData) {
					_this.$emit("get-table-data", {
						"item": _this.tableDataColen,
						"allData": otherData
					});
				}
				_this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
			});
		},
		//批量操作
		doOperation(fn) {
			let model = this.rowsList;
			let arrs = [];
			for (let k in model) {
				arrs.push(model[k]);
			}
			this.$emit("do-operation", {
				"fn": fn,
				"rows": arrs,
				"page": this.currentPage
			});
		},
		// 连接拼接单击事件
		showLink(fn, row) {
			this.$emit("do-handle", {
				"row": row,
				"fn": fn,
				"page": this.currentPage
			});
		},
		//            updateFormData() {
		//                if (this.tableData.list.length > 0) {
		//                    this.Datainit();
		//                }
		//            },
		//            数据变化事件
		changes(index, row, keys) {
			if (!row[keys]) {
				if (this.levelNUmRow % 2 === 0) {
					this.$message.error(LANG['请选择你要修改的层级！'] || '请选择你要修改的层级！');
				}
			} else {
				if (row.lock == 1) {
					this.$message.error(LANG['层级已锁定，不可操作！'] || '层级已锁定，不可操作！');
					row[keys] = this.tableDataColen[index][keys];
					return;
				}
				if (this.levelNUmRow === 0) {
					this.levelNUmRow = 1;
				} else {
					this.levelNUmRow++;
				}
				if (this.levelNUmRow % 2 === 0) {
					let level = '';
					for (let k = 0; k < this.listArr.length; k++) {
						if (this.listArr[k].value === row[keys]) {
							level = this.listArr[k].label;
						}
					}
					this.confirmConfig.state = true;
					this.confirmConfig.msg = (this.LANG['确定将层级修改为'] || '确定将层级修改为') + '"' + level + '"' + (this.LANG['吗？'] || '吗？');
					this.confirmConfig.fn = "doChanges";
					this.confirmConfig.obj = { row: row, keys: keys, index: index };
					//                        this.levelNUmRow -- ;
				}
			}
		},
		changeSwit(index, row, keys) {
			if (index >= 0) {
				this.$emit("do-Lock", {
					"row": row,
					"index": index,
					"key": keys
				});
			}
		},
		//保存表格数据
		dataSave() {
			this.$emit("data-save", {
				"dataList": this.tableDataColen
			});
		},
		getTableWidth() {

			//                if (this.fullWidth) {
			//                    let sum = 0;
			//                    this.$http.get(this.columnsUrl, URLCONFIG).then((res) => {
			//                        if (res.data.columns) {
			//                            let list = res.data.columns;
			//                            for (let k in list) {
			//                                if (list[k].width) {
			//                                    sum = sum + parseInt(list[k].width);
			//                                }
			//                            }
			//                            sum = sum > 1130 ? sum : 1130;
			//                            if(localStorage.menu_type =='left'){
			//                                if ($(window).width() > 1200 && this.automation == false ) {
			//                                    $('.tablesOverall').css('width', ($(window).width() - 136)+'px').addClass('socr').find('table').css('min-width', sum + 'px');
			//                                }
			//                                $(window).resize(function(){
			//                                    if ($(window).width() > 1200 && this.automation == false) {
			//                                        $('.tablesOverall').css('width',($(window).width() - 136)+'px').addClass('socr').find('table').css('min-width', sum + 'px');
			//                                    }
			//                                })
			//                            }else {
			//                                if ($(window).width() > 1200 && this.automation == false ) {
			//                                    $('.tablesOverall').css('width', ($(window).width()-136)+'px').addClass('socr').find('table').css('min-width', sum + 'px');
			//                                }
			//                                $(window).resize(function(){
			//                                    if ($(window).width() > 1200 && this.automation == false) {
			//                                        $('.tablesOverall').css('width', ($(window).width() - 136)+"px").addClass('socr').find('table').css('min-width', sum + 'px');
			//                                    }
			//                                })
			//                            }
			//                        }
			//                    })
			//                }
		},
		// 导出数据
		exportData() {
			this.$emit("export-data");
		},
		// 切换刷新时间
		changeTimes(v) {
			let _this = this;
			if (parseInt(v) === 0) {
				window.clearInterval(window.PAGEREF);
			} else {
				this.createTimes(parseInt(v));
			}
		},
		// 创建定时器
		createTimes(times) {
			let _this = this;
			window.clearInterval(window.PAGEREF);
			window.PAGEREF = setInterval(function () {
				_this.Datainit();
			}, times * 1000);
		},
		//批量获取会员层级
		//            handelSelect(){
		//                this.$emit('do-handelSelect',{
		//                    value:this.levelSelectvalue
		//                })
		//            },
		//            handelLock(){
		//                this.$emit('do-handelLock',{
		//                    value:this.lockSwitch
		//                })
		//            },
		// 批量保存操作
		alldataSave() {
			let model = this.rowsList;
			let arrs = [];
			for (let k in model) {
				arrs.push(model[k]);
			}
			this.$emit('save-all-data', {
				"rows": arrs,
				"level": this.levelSelectvalue,
				"lock": this.lockSwitch
			});
		},
		//批量下啦选中
		all_select_data(value) {
			if (this.levelNum === 0) {
				this.levelNum = 1;
			} else {
				this.levelNum++;
			}
			if (!value) {
				if (this.levelNum % 2 === 0) {
					this.$message.error(LANG['请选择你要修改的层级！'] || '请选择你要修改的层级！');
				}
			} else if (this.levelNum % 2 === 0) {
				let level = '';
				for (let k = 0; k < this.listArr.length; k++) {
					if (this.listArr[k].value === value) {
						level = this.listArr[k].label;
					}
				}
				this.confirmConfig.state = true;
				this.confirmConfig.msg = (this.LANG['确定将层级修改为'] || '确定将层级修改为') + '"' + level + '"' + (this.LANG['吗？'] || '吗？');
				this.confirmConfig.fn = "updateLevel";
			}
		},
		doCancel(obj) {
			if (obj && obj.obj && obj.obj.index != undefined && obj.obj.keys && obj.obj.row) {
				this.levelNUmRow = 0;
				obj.obj.row[obj.obj.keys] = this.tableDataColen[obj.obj.index][obj.obj.keys];
			} else {
				this.levelNum = 0;
				this.levelSelectvalue = '';
				this.lockSwitch = false;
			}
		},
		// 确认修改层级
		doConfirm(obj) {
			let _this = this;
			if (obj && obj.fn) {
				switch (obj.fn) {
					case 'updateLevel':
						let model = this.rowsList;
						let arrs = [];
						for (let k in model) {
							arrs.push(model[k]);
						}
						_this.$emit('all_select_data', {
							"rows": arrs,
							"level": _this.levelSelectvalue,
							"lock": _this.lockSwitch
						});
						_this.levelNum = 0;
						break;
					case 'doChanges':
						if (obj.obj && obj.obj.index >= 0) {
							_this.$emit("do-changes", {
								"row": obj.obj.row,
								"index": obj.obj.index,
								"key": obj.obj.keys
							});
							_this.tableDataColen[obj.obj.index][obj.obj.keys] = obj.obj.row[obj.obj.keys];
							_this.levelNUmRow = 0;
						}
						break;
				}
			}
		},
		//批量switch操作
		all_switch_data(value) {
			let temp = [],
			    tempModel = this.rowsList;
			for (let k in tempModel) {
				temp.push(tempModel[k]);
			}
			this.$emit('all_switch_data', {
				"rows": temp,
				"lock": value,
				"level": this.levelSelectvalue
			});
			//                this.lockNum ++;
			//                let str = '';
			//                if(value){
			//                    str = this.LANG['确定锁定所选层级吗？'] || '确定锁定所选层级吗';
			//                }else{
			//                    str = this.LANG['确定取消锁定所选层级吗？'] || '确定取消锁定所选层级吗';
			//                }
			//                if(this.lockNum % 2 === 0){
			//                    this.confirmConfig.state = true;
			//                    this.confirmConfig.msg = str;
			//                    this.confirmConfig.fn = "lockLevel";
			//                }
		},

		// 排序
		doSort(prop, type) {
			let temp = this.ascKey[prop];
			for (let k in this.ascKey) {
				this.ascKey[k] = '';
			}
			if (temp === 'ascending') {
				this.ascKey[prop] = 'descending';
			} else if (temp === 'descending' || temp === '') {
				this.ascKey[prop] = 'ascending';
			}

			if (this.ascKey[prop] === 'ascending') {
				this.tableDataList.sort(function (a, b) {
					let tmepa, tempb;
					if (type === 'date') {
						tmepa = !isNaN(Date.parse(a[prop])) ? Date.parse(a[prop]) : 0;
						tempb = !isNaN(Date.parse(b[prop])) ? Date.parse(b[prop]) : 0;
					} else {
						tmepa = a[prop] ? a[prop] : 0;
						tempb = b[prop] ? b[prop] : 0;
					}
					return tmepa - tempb;
				});
			} else {
				this.tableDataList.sort(function (a, b) {
					let tmepone, temptwo;
					if (type === 'date') {
						tmepone = !isNaN(Date.parse(a[prop])) ? Date.parse(a[prop]) : 0;
						temptwo = !isNaN(Date.parse(b[prop])) ? Date.parse(b[prop]) : 0;
					} else {
						tmepone = a[prop] ? a[prop] : 0;
						temptwo = b[prop] ? b[prop] : 0;
					}
					return temptwo - tmepone;
				});
			}
		},
		// 算表格宽度
		autoTable(sum) {
			//                let _this = this;
			//                let tableW = $('.tablesOverall'), top_contRight = $('.top_contRight'), oWin = window.innerWidth;
			//                sum = sum > 1130 ? sum : 1130;
			//                let menu_type = localStorage.menu_type == 'top' ? localStorage.menu_type : 'left';
			// automation 是否开关表格自适应 true 是关闭
			//                if (_this.automation == false) {
			//                    if (menu_type == 'left') {
			//                        $("#table_card,#tables").removeClass('w100_impor');
			//                        tableW.parents('.box-card').css({'width': (oWin - 100) + 'px', 'min-width': '1170px'});
			//                        tableW.css({
			//                            'width': (oWin - 136) + 'px',
			//                            'min-width': '1130px'
			//                        }).addClass('socr').find('table').css('min-width', sum < 1130 ? 1130 : sum + 'px');
			//                    } else if (menu_type == 'top') {
			//                        $("#table_card,#tables").removeClass('w100_impor');
			//                        top_contRight.css('width', (oWin - 64) + 'px')
			//                        tableW.css({
			//                            'width': (oWin - 64) + 'px',
			//                            'min-width': '1170px'
			//                        }).addClass('socr').find('table').css('min-width', sum < 1200 ? 1200 : sum + 'px');
			//                    }
			//                } else {
			//                    $("#table_card,#tables").addClass('w100_impor');
			//                    tableW.removeClass('socr');
			//                    tableW.parents('.box-card').css({'width': "100%"});
			//                }
		},
		doRefresh() {
			this.Datainit();
		}
	},
	filters: {
		getStatusColor: function (value, statusKey) {
			let obj = {};
			var statsu_str = "";
			// statusKey 代理审核页面状态个别处理
			if (statusKey && statusKey === 'agentAudit') {
				if (value == "0") {
					statsu_str = "sucess_text";
				} else if (value == "2") {
					statsu_str = "state_danger";
				} else if (value == "3") {
					statsu_str = "state_info";
				}
				obj[statsu_str] = true;
			} else {
				if (value == "1" || value == "enabled" || value == "paid" || value == 'pass' || value == 'underway') {
					statsu_str = "sucess_text";
				} else if (value == "0" || value == "disabled" || value == "rejected" || value == "failed" || value == "2" || value == 'open') {
					statsu_str = "state_danger";
				} else if (value == "4" || value == 'cancel' || value == 'canceled' || value == 'refused') {
					statsu_str = "state_info";
				} else if (value == "paid" || value == "3") {
					statsu_str = "state_success";
				} else if (value == "applying" || value == "pending") {
					statsu_str = "state_warning";
				}
				obj[statsu_str] = true;
			}
			return obj;
		}
	},
	watch: {
		//            '$route'() {//监听路由改变
		////                this.autoTable();
		//            },
		//            'tableData.list': 'updateFormData',
		tableUrl: function (newQuestion) {
			if (newQuestion && this.isInit) {
				this.Datainit('changeUrl');
			}
		},
		tableDataList() {
			this.getTableWidth();
		},
		//            columnsUrl(newval){
		//                if(newval && this.isInit){
		//                    this.Datainit();
		//                }
		//            },
		//根据是否更新，更新数据
		updated: function (newval) {
			if (newval && this.isInit) {
				this.Datainit();
			}
		},
		formType: function (newval) {
			if ((newval == "add" || newval == "edit" || newval == "delete") && this.isInit) {
				this.Datainit();
			}
		},
		refreshTimes: function (newval) {
			this.times = newval.toString();
		},
		opts: function (newval) {
			if (newval && this.isInit) {
				this.Datainit();
			}
		},
		// 根据刷新状态创建定时器
		autoshowRefresh: function (newval) {
			let _this = this;
			window.clearInterval(window.PAGEREF);
			window.PAGEREF = null;
			if (newval) {
				if (parseInt(this.times) > 0 && (this.$route.path === '/onLineReceipts' || this.$route.path === '/offlineReceipts' || this.$route.path === '/memberGetOut' || this.$route.path === '/noteManagement' || this.$route.path === '/apply')) {
					let times = parseInt(this.times) > 0 ? parseInt(this.times) : 0;
					if (times >= 30) {
						_this.createTimes(parseInt(times));
					}
				} else {
					this.Datainit();
				}
			}
		},
		//修改数据失败处理
		updateMessage: function (newval) {
			if (newval) {
				let str = newval;
				let list = str.split(",");
				if (list.length === 3) {
					switch (list[2]) {
						case "true":
							this.tableDataList[list[0]][list[1]] = false;
						case "false":
							this.tableDataList[list[0]][list[1]] = true;
						case "0":
							this.tableDataList[list[0]][list[1]] = "0";
						case "q":
							this.tableDataList[list[0]][list[1]] = "1";
					}
				}
			}
		}
	},
	created() {
		//初始化列配置
		if (this.isCreated) {
			if (!this.isInit) {
				this.isInit = true;
			}
			this.Datainit();
		}
	},
	mounted() {
		let sum = 0,
		    _this = this;
		this.$nextTick(() => {
			if (this.columnsUrl) {
				this.$http.get(this.columnsUrl, URLCONFIG).then(res => {
					if (res.data.columns) {
						let list = res.data.columns;
						for (let k in list) {
							if (list[k].width) {
								sum = sum + parseInt(list[k].width);
							}
						}
					}
				});
				this.autoTable(sum);
				$(window).on('load resize', function () {
					//                        _this.autoTable(sum);

				});
				this.$nextTick(() => {
					EVENT.$emit('table.loaded');
				});
			}
		});
	},
	activated() {
		let _this = this;
		if (!this.isInit) {
			this.isInit = true;
		}
		window.PAGEREF = null;
		if (this.$route.path === '/onLineReceipts' || this.$route.path === '/offlineReceipts' || this.$route.path === '/memberGetOut' || this.$route.path === '/apply') {
			this.times = '30';
		} else {
			this.times = '0';
		}
		if (parseInt(this.times) > 0 && this.autoshowRefresh && (this.$route.path === '/onLineReceipts' || this.$route.path === '/offlineReceipts' || this.$route.path === '/memberGetOut' || this.$route.path === '/noteManagement' || this.$route.path === '/apply')) {
			let times = parseInt(this.times) > 0 ? parseInt(this.times) : 0;
			if (times >= 30) {
				_this.Datainit();
				_this.createTimes(parseInt(times));
			}
		} else {
			if (!this.isCreated) {
				this.Datainit();
			}
		}
		Bus.$on('form_query', function (v) {
			if (v) {
				_this.Datainit();
			}
		});
		Bus.$emit('form_Reset', true);
	},
	deactivated() {
		window.clearInterval(window.PAGEREF);
		Bus.$off('form_query');
		this.reSet();
	}
});

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "#tableSingle .el-table,#tableSingle .el-table a,#tableSingle .el-table button,#tableSingle .el-table th{font-size:.8rem}#tableSingle .el-table td,#tableSingle .el-table th{min-width:60px}#tableSingle .el-table .cell,#tableSingle .el-table th>div{padding-left:4px;padding-right:0}#tableSingle .col2{background-color:#fafafa}#tableSingle .el-table .sucess_text{color:#13ce66}#tableSingle .el-table .info_text{color:#20a0ff}#tableSingle .el-table .danger_text{color:#ff4949}#tableSingle .fontWeight{font-weight:500}#tableSingle .linkCell{min-width:50px}#tableSingle .line_height30{line-height:30px}.w100_impor{width:100%!important}", ""]);

// exports


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("573e950b", content, true);

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._l((_vm.quickDate), function(item, key) {
    return _c('el-button', {
      key: item.id,
      class: {
        btn_active: item.isActive
      },
      attrs: {
        "size": "small",
        "plain": true,
        "type": "primary"
      },
      on: {
        "click": function($event) {
          _vm.change(item.key, key)
        }
      }
    }, [_vm._v(_vm._s(_vm.LANG[item.text] || item.text))])
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "display": "none"
    }
  }, [_vm._v(_vm._s(_vm.isReset))])], 2)
},staticRenderFns: []}

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    ref: "tableSingle",
    attrs: {
      "id": "tableSingle"
    }
  }, [(_vm.showExport || _vm.autoshowRefresh) ? _c('el-col', {
    staticClass: "tRight mb20"
  }, [(_vm.autoshowRefresh) ? _c('span', [_vm._v(_vm._s(_vm.LANG['刷新'] || '刷新'))]) : _vm._e(), _vm._v(" "), (_vm.autoshowRefresh) ? _c('el-select', {
    staticClass: "intW mr10",
    attrs: {
      "placeholder": "请选择",
      "size": "small"
    },
    on: {
      "change": _vm.changeTimes
    },
    model: {
      value: (_vm.times),
      callback: function($$v) {
        _vm.times = $$v
      },
      expression: "times"
    }
  }, _vm._l((_vm.options), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  })) : _vm._e(), _vm._v(" "), (_vm.showExport) ? _c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.exportData($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['导出'] || '导出') + "\n        ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (!_vm.showExport) ? _c('el-col', {
    staticClass: "tRight mb20"
  }, [_c('el-col', {
    staticStyle: {
      "text-align": "left",
      "margin-bottom": "10px"
    },
    attrs: {
      "span": 12
    }
  }, [(_vm.headTextconf.show) ? _c('a', {
    staticClass: "linkCell tag_link tCent",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.headTextFn(_vm.$evnet, _vm.headTextconf)
      }
    }
  }, [_vm._v(_vm._s(_vm.headTextconf.label))]) : _vm._e()]), _vm._v(" "), (_vm.showRefresh) ? _c('el-col', {
    staticStyle: {
      "margin-bottom": "10px"
    },
    attrs: {
      "span": 12
    }
  }, [_c('el-button', {
    staticClass: "addBut",
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.doRefresh($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['刷新'] || '刷新') + " ")])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.saveData && _vm.checkSum === 0) ? _c('div', {
    staticClass: "tRight mb10"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.dataSave($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])], 1) : _vm._e(), _vm._v(" "), (_vm.checkSum && _vm.checkList.length) ? _c('el-col', {
    staticClass: "ft14 line_height30"
  }, [_c('label', {
    staticClass: "fl mr10 pleft mb10",
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.LANG['您选择了'] || '您选择了') + "\n            "), _c('span', {
    staticClass: "selecttext"
  }, [_vm._v(_vm._s(_vm.checkSum))]), _vm._v(_vm._s(_vm.LANG['条数据'] || '条数据') + " ")]), _vm._v(" "), (_vm.tabOperation != undefined) ? _c('div', {
    staticClass: "btngroup"
  }, _vm._l((_vm.tabOperation), function(opt, index) {
    return _c('el-button', {
      key: index,
      attrs: {
        "size": "small"
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.doOperation(opt.fn)
        }
      }
    }, [_vm._v(_vm._s(_vm.LANG[opt.label] || opt.label) + "\n            ")])
  })) : _vm._e(), _vm._v(" "), (_vm.lockShow) ? _c('div', {
    staticClass: "w40"
  }, [_c('el-select', {
    staticClass: "intW",
    attrs: {
      "placeholder": "请选择",
      "size": "small"
    },
    on: {
      "change": _vm.all_select_data
    },
    model: {
      value: (_vm.levelSelectvalue),
      callback: function($$v) {
        _vm.levelSelectvalue = $$v
      },
      expression: "levelSelectvalue"
    }
  }, _vm._l((_vm.listArr), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  })), _vm._v(" "), _c('el-switch', {
    attrs: {
      "on-value": "1",
      "off-value": "0"
    },
    on: {
      "change": _vm.all_switch_data
    },
    model: {
      value: (_vm.lockSwitch),
      callback: function($$v) {
        _vm.lockSwitch = $$v
      },
      expression: "lockSwitch"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "comments font12 ml10 help_gray"
  }, [_vm._v("提示：锁定后的会员层级不能被移动分层。")])], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('el-card', {
    staticClass: "box-card pb",
    attrs: {
      "id": "table_card"
    }
  }, [_c('div', {
    staticClass: "tablesOverall",
    attrs: {
      "id": "tables"
    }
  }, [_c('table', {
    staticClass: "el-table w100 el-table--border",
    attrs: {
      "cellspacing": "0",
      "cellpadding": "0",
      "border": "1"
    }
  }, [_c('tr', [(_vm.tableCheck && _vm.tableDataList.length) ? _c('th', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('el-checkbox', {
    on: {
      "change": _vm.allchecked
    },
    model: {
      value: (_vm.allChecked),
      callback: function($$v) {
        _vm.allChecked = $$v
      },
      expression: "allChecked"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), (_vm.tableIndex && _vm.tableDataList.length) ? _c('th', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.LANG['序号'] || '序号'))])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.columnList), function(col, index) {
    return (col.disabled == true) ? _c('th', {
      key: index,
      staticClass: "is-leaf",
      class: _vm.ascKey[col.prop] ? _vm.ascKey[col.prop] : ''
    }, [(col.sort) ? _c('div', {
      staticClass: "cell",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.doSort(col.prop, col.sortType)
        }
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.LANG[col.label] || col.label) + "\n                            "), (col.sort) ? _c('span', {
      staticClass: "caret-wrapper"
    }, [_c('i', {
      staticClass: "sort-caret ascending"
    }), _vm._v(" "), _c('i', {
      staticClass: "sort-caret descending"
    })]) : _vm._e()]) : _c('div', {
      staticClass: "cell"
    }, [_vm._v(_vm._s(_vm.LANG[col.label] || col.label) + " "), (col.sortRemarks) ? _c('span', {
      staticClass: "defutFont",
      staticStyle: {
        "font-size": "10px"
      }
    }, [_c('el-tooltip', {
      attrs: {
        "content": col.sortRemarks || '前台实际展示时数字大的排在前面。',
        "placement": "right",
        "effect": "light"
      }
    }, [_c('i', {
      staticClass: "el-icon-information"
    })])], 1) : _vm._e()])]) : _vm._e()
  })], 2), _vm._v(" "), _vm._l((_vm.tableDataList), function(item, k) {
    return (_vm.tableDataList.length) ? _c('tr', {
      key: k,
      class: {
        col2: !parseInt((k + 1) % 2)
      }
    }, [(_vm.tableCheck && _vm.tableDataList.length) ? _c('td', {
      staticClass: "el-table_1_column_19",
      attrs: {
        "width": "55px"
      }
    }, [_c('div', {
      staticClass: "cell tCent"
    }, [_c('el-checkbox', {
      on: {
        "change": function($event) {
          _vm.thisChecked(k)
        }
      },
      model: {
        value: (_vm.checkList[k]),
        callback: function($$v) {
          _vm.$set(_vm.checkList, k, $$v)
        },
        expression: "checkList[k]"
      }
    })], 1)]) : _vm._e(), _vm._v(" "), (_vm.tableIndex && _vm.tableDataList.length) ? _c('td', {
      staticClass: "el-table_ 1_column_19"
    }, [_c('div', {
      staticClass: "cell tCent"
    }, [_vm._v(_vm._s(parseInt(k) + 1))])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.columnList), function(col, index) {
      return (col.disabled == true) ? _c('td', {
        key: index,
        staticClass: "el-table_1_column_19"
      }, [(col.type == 'date' || col.type == 'allState' || col.type == 'array' || col.type == 'filterConnect' || col.type == 'divisionMoney,fours') ? _c('div', {
        staticClass: "cell"
      }, [_c('span', {
        class: {
          state_blue: /new/.test(_vm.tableDataColen[k][col.prop])
        }
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (col.type == 'divisionMoney' && col.setred) ? _c('div', {
        staticClass: "cell"
      }, [_c('span', {
        class: {
          state_danger: parseFloat(item[col.prop]) < 0
        }
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (col.type == 'connectArray') ? _c('div', {
        staticClass: "cell"
      }, [_c('span', [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (col.type == 'divisionMoney' && !col.setred) ? _c('div', {
        staticClass: "cell"
      }, [_c('span', [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (col.type == 'lottory_play') ? _c('div', {
        staticClass: "cell"
      }, [_c('p', [_vm._v(_vm._s(_vm.LANG['下注'] || '下注') + " ：" + _vm._s(item[col.prop.split(',')[0]] != undefined ? item[col.prop.split(',')[0]] : ''))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.LANG['开奖'] || '开奖') + " ：" + _vm._s(item[col.prop.split(',')[1]] != undefined ? item[col.prop.split(',')[1]] : ''))])]) : _vm._e(), _vm._v(" "), (col.type == 'connectProp') ? _c('div', {
        staticClass: "cell"
      }, [_c('span', [_vm._v(_vm._s(item[col.prop.split(',')[1]]))])]) : _vm._e(), _vm._v(" "), (col.type == 'filterAdddivisionMoney') ? _c('div', {
        staticClass: "cell"
      }, [_c('span', [_vm._v(_vm._s(item[col.prop.split(',')[1]]))])]) : _vm._e(), _vm._v(" "), (col.type == 'connect_odds_type') ? _c('div', {
        staticClass: "cell"
      }, [_c('span', [_vm._v(_vm._s(item[col.prop.split(',')[0]]))])]) : _vm._e(), _vm._v(" "), (col.type == 'object') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(col.formatKey != 'bank') ? _c('span', [_vm._v(_vm._s(item[col.prop.split(',')[1]]))]) : _vm._e(), _vm._v(" "), (col.formatKey == 'bank') ? _c('div', [(col.prop.split(',')[1] !== undefined && col.prop.split(',')[1] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['户名'] || '户名') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[1]] || ""))]) : _vm._e(), _vm._v(" "), (col.prop.split(',')[2] !== undefined && col.prop.split(',')[2] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['账号'] || '账号') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[2]] || ""))]) : _vm._e(), _vm._v(" "), (col.prop.split(',')[3] !== undefined && col.prop.split(',')[3] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['银行名称'] || '银行名称') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[3]] || ""))]) : _vm._e(), _vm._v(" "), (col.prop.split(',')[4] !== undefined && col.prop.split(',')[4] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['支行'] || '支行') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[4]] || ""))]) : _vm._e()]) : _vm._e()]) : _vm._e(), _vm._v(" "), (col.type == 'object,prop') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(col.formatKey == 'bank') ? _c('div', [(col.prop.split(',')[1] !== undefined && col.prop.split(',')[1] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['户名'] || '户名') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[1]] || ""))]) : _vm._e(), _vm._v(" "), (col.prop.split(',')[3] !== undefined && col.prop.split(',')[3] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['账号'] || '账号') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[3]] || ""))]) : _vm._e(), _vm._v(" "), (col.prop.split(',')[2] !== undefined && col.prop.split(',')[2] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['银行名称'] || '银行名称') + "：" + _vm._s(item[col.prop.split(",")[2]] || ""))]) : _vm._e(), _vm._v(" "), (col.prop.split(',')[4] !== undefined && col.prop.split(',')[4] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['支行'] || '支行') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[4]] || ""))]) : _vm._e()]) : _vm._e()]) : _vm._e(), _vm._v(" "), (col.type && col.type == 'connectString') ? _c('div', {
        staticClass: "cell"
      }, [_c('p', [_vm._v(_vm._s(_vm.LANG['户名'] || '户名') + "：" + _vm._s(item[col.prop.split(",")[0]] || ""))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.LANG['账号'] || '账号') + "：" + _vm._s(item[col.prop.split(",")[1]] || ""))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.LANG['支行'] || '支行') + "：" + _vm._s(item[col.prop.split(",")[2]] || ""))])]) : _vm._e(), _vm._v(" "), (col.type && col.type == 'connectSdateEdate') ? _c('div', {
        staticClass: "cell"
      }, [_c('p', [_vm._v(_vm._s(_vm.LANG['起始'] || '起始') + "：" + _vm._s(item[col.prop.split(",")[0]] || ""))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.LANG['结束'] || '结束') + "：" + _vm._s(item[col.prop.split(",")[1]] || ""))])]) : _vm._e(), _vm._v(" "), (col.type == 'connectDate') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('p', [_vm._v(_vm._s(item[col.prop.split(",")[0]] || ""))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item[col.prop.split(",")[1]] || ""))])]) : _vm._e(), _vm._v(" "), (col.type == 'button' && ((item['t_default'] == undefined && col.filters == undefined) || item['t_default'] == '1')) ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, _vm._l((col.btnGroup), function(btn) {
        return _c('div', {
          staticStyle: {
            "float": "left",
            "margin-left": "5px"
          }
        }, [(btn.prop == undefined && !_vm.tableDataColen[k][btn.valueKey] && btn.propOne == undefined && !col.hover) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e(), _vm._v(" "), (col.hover && _vm.hoverData) ? _c('el-tooltip', {
          attrs: {
            "placement": "right",
            "effect": "light"
          }
        }, [_c('div', {
          attrs: {
            "slot": "content"
          },
          slot: "content"
        }, _vm._l((_vm.hoverData), function(items, key) {
          return _c('p', {
            key: key,
            class: {
              mt10: key > 0
            }
          }, [_c('el-tag', {
            attrs: {
              "type": "primary"
            }
          }, [_vm._v(_vm._s(items.label) + ":")]), _vm._v(" "), _c('span', {
            staticClass: "pleft"
          }, [_vm._v(_vm._s(items.value))])], 1)
        })), _vm._v(" "), (btn.prop == undefined && !_vm.tableDataColen[k][btn.valueKey] && btn.propOne == undefined && col.hover) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          nativeOn: {
            "mouseenter": function($event) {
              $event.preventDefault();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                    ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (btn.prop && _vm.tableDataColen[k][btn.prop] == btn.val && (btn.equal == undefined) && !_vm.tableDataColen[k][btn.valueKey] && btn.propOne == undefined) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e(), _vm._v(" "), (btn.prop && _vm.tableDataColen[k][btn.prop] != btn.val && (btn.equal == false) && btn.valNum == 1 && !_vm.tableDataColen[k][btn.valueKey] && btn.propOne == undefined) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e(), _vm._v(" "), (btn.prop && (_vm.tableDataColen[k][btn.prop] != btn.val && _vm.tableDataColen[k][btn.prop] != btn.val1) && (btn.equal == false) && btn.valNum == 2 && !_vm.tableDataColen[k][btn.valueKey] && btn.propOne == undefined) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e(), _vm._v(" "), (btn.propOne && btn.propTwo && _vm.tableDataColen[k][btn.propOne] == btn.valOne && _vm.tableDataColen[k][btn.propTwo] == btn.valTwo && btn.prop == undefined && !btn.equal) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e(), _vm._v(" "), (btn.val && btn.val1 && (_vm.tableDataColen[k][btn.prop] == btn.val || _vm.tableDataColen[k][btn.prop] == btn.val1) && btn.prop && btn.equal) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e(), _vm._v(" "), (btn.valueKey && _vm.tableDataColen[k][btn.valueKey]) ? _c('span', [_vm._v(_vm._s(_vm.LANG[_vm.tableDataColen[k][btn.valueKey]] || _vm.tableDataColen[k][btn.valueKey]))]) : _vm._e()], 1)
      })) : _vm._e(), _vm._v(" "), (col.type == 'button' && col.filters) ? _c('div', {
        staticClass: "cell"
      }, _vm._l((col.btnGroup), function(btn) {
        return _c('div', {
          staticStyle: {
            "float": "left",
            "margin-left": "5px"
          }
        }, [(btn.filters == undefined) ? _c('span', [_c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label))])], 1) : _vm._e(), _vm._v(" "), (btn.filters && col.filters[0]['value'] === 'enabled') ? _c('span', [(/enabled/.test(_vm.tableDataColen[k][btn.key]) && btn.filters === 'enabled') ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          domProps: {
            "textContent": _vm._s(_vm.LANG['停用'] || '停用')
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }) : _vm._e(), _vm._v(" "), (!(/enabled/.test(_vm.tableDataColen[k][btn.key])) && btn.filters === 'disabled') ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          domProps: {
            "textContent": _vm._s(_vm.LANG['启用'] || '启用')
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }) : _vm._e()], 1) : _vm._e()])
      })) : _vm._e(), _vm._v(" "), (col.type == 'switch' || col.show) ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(_vm.tableDataColen[k][col.show] && _vm.tableDataColen[k][col.show].toString() === '1') ? _c('el-switch', {
        attrs: {
          "on-value": '1' || col.onValue,
          "off-value": '0' || col.offValue
        },
        on: {
          "change": function($event) {
            _vm.changeSwit(k, _vm.tableDataColen[k], col.prop)
          }
        },
        model: {
          value: (_vm.tableDataColen[k][col.prop]),
          callback: function($$v) {
            _vm.$set(_vm.tableDataColen[k], col.prop, $$v)
          },
          expression: "tableDataColen[k][col.prop]"
        }
      }) : _c('el-switch', {
        attrs: {
          "on-value": '1' || col.onValue,
          "off-value": '0' || col.offValue
        },
        on: {
          "change": function($event) {
            _vm.changeSwit(k, _vm.tableDataColen[k], col.prop)
          }
        },
        model: {
          value: (_vm.tableDataColen[k][col.prop]),
          callback: function($$v) {
            _vm.$set(_vm.tableDataColen[k], col.prop, $$v)
          },
          expression: "tableDataColen[k][col.prop]"
        }
      })], 1) : _vm._e(), _vm._v(" "), (col.type == 'list') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(_vm.listArr.length) ? _c('el-select', {
        attrs: {
          "placeholder": _vm.LANG['请选择'] || '请选择',
          "size": "small"
        },
        on: {
          "change": function($event) {
            _vm.changes(k, item, col.prop)
          }
        },
        model: {
          value: (item[col.prop]),
          callback: function($$v) {
            _vm.$set(item, col.prop, $$v)
          },
          expression: "item[col.prop]"
        }
      }, _vm._l((_vm.listArr), function(lev) {
        return _c('el-option', {
          key: lev.value,
          attrs: {
            "label": lev.label,
            "value": lev.value,
            "disabled": item[col.prop] == lev.value ? true : false
          }
        })
      })) : _vm._e(), _vm._v(" "), (_vm.listArr.length == 0) ? _c('el-select', {
        attrs: {
          "placeholder": _vm.LANG['请选择'] || '请选择',
          "size": "small"
        },
        on: {
          "change": function($event) {
            _vm.changes(k, item, col.prop)
          }
        },
        model: {
          value: (item[col.prop]),
          callback: function($$v) {
            _vm.$set(item, col.prop, $$v)
          },
          expression: "item[col.prop]"
        }
      }, _vm._l((_vm.listArr), function(lev) {
        return _c('el-option', {
          key: lev.value,
          attrs: {
            "label": lev.label,
            "value": lev.value,
            "disabled": item[col.prop] == lev.value ? true : false
          }
        })
      })) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (col.type == 'checkbox') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('el-checkbox', {
        attrs: {
          "true-label": 1,
          "false-label": 0,
          "checked": _vm._f("formatCheck")(_vm.tableDataColen[k][col.prop])
        },
        on: {
          "change": function($event) {
            _vm.changes(k, _vm.tableDataColen[k], col.prop)
          }
        },
        model: {
          value: (_vm.tableDataColen[k][col.prop]),
          callback: function($$v) {
            _vm.$set(_vm.tableDataColen[k], col.prop, $$v)
          },
          expression: "tableDataColen[k][col.prop]"
        }
      })], 1) : _vm._e(), _vm._v(" "), (col.type == 'number') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (item[col.prop]),
          expression: "item[col.prop]"
        }],
        staticClass: "el-input__inner",
        attrs: {
          "type": "number",
          "min": "1"
        },
        domProps: {
          "value": (item[col.prop])
        },
        on: {
          "input": function($event) {
            if ($event.target.composing) { return; }
            _vm.$set(item, col.prop, $event.target.value)
          }
        }
      })]) : _vm._e(), _vm._v(" "), (col.type == 'reduce') ? _c('div', {
        staticClass: "cell"
      }, [_c('span', {
        staticClass: "sucess_text"
      }, [_vm._v(_vm._s((isNaN(parseInt(item[col.prop[0]])) ? 0 : parseInt(item[col.prop[0]])) - (isNaN(parseInt(item[col.prop[1]])) ? 0 : parseInt(item[col.prop[1]]))))])]) : _vm._e(), _vm._v(" "), (col.type == 'button' && item['t_default'] == '0') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, _vm._l((col.btnGroup), function(btn) {
        return _c('div', {
          staticStyle: {
            "float": "left",
            "margin-left": "5px"
          }
        }, [(btn.prop == undefined && btn.label == '复制新增') ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e()], 1)
      })) : _vm._e(), _vm._v(" "), (col.type == 'img') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(item[col.prop] && item[col.prop].toString().length > 5 && col.imgtype !== 'bank') ? _c('img', {
        attrs: {
          "src": item[col.prop],
          "alt": "item[col.prop]",
          "height": "20px",
          "width": "auto"
        }
      }) : _vm._e(), _vm._v(" "), (col.imgtype == 'bank') ? _c('img', {
        staticStyle: {
          "vertical-align": "middle"
        },
        attrs: {
          "src": '/static/img/bank/' + item['code'] + '.png',
          "alt": "item[col.prop]",
          "height": "20px",
          "width": "auto"
        }
      }) : _vm._e(), _vm._v(" "), (col.imgtype == 'bank') ? _c('span', [_vm._v(_vm._s(item['code']))]) : _vm._e(), _vm._v(" "), (!item[col.prop] || (item[col.prop] && item[col.prop].toString().length < 5)) ? _c('span', [_vm._v(_vm._s(_vm.LANG['暂无图片'] || '暂无图片'))]) : _vm._e()]) : _vm._e(), _vm._v(" "), (col.type == 'contentFilterLink') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.showLink(col.fn, _vm.tableDataColen[k])
          }
        }
      }, [_c('el-button', {
        attrs: {
          "size": "small",
          "type": "text"
        }
      }, [_vm._v(_vm._s(item[col.prop]))])], 1) : _vm._e(), _vm._v(" "), (col.type === 'regular') ? _c('div', {
        staticClass: "cell"
      }, [(col.filters[0]['value'] === 'enabled') ? _c('span', [(/enabled/.test(item[col.prop])) ? _c('span', {
        staticClass: "sucess_text"
      }, [_vm._v(" " + _vm._s(col.filters[0]['text'] || "") + "\n                                ")]) : _c('span', {
        staticClass: "danger_text"
      }, [_vm._v(_vm._s(col.filters[1]['text'] || ""))])]) : _vm._e(), _vm._v(" "), (col.filters[0]['value'] === 'default') ? _c('span', [(/default/.test(item[col.prop])) ? _c('span', {
        staticClass: "sucess_text"
      }, [_vm._v("\n                                    " + _vm._s(col.filters[0]['text'] || "") + "\n                                ")]) : _c('span', {
        staticClass: "danger_text"
      }, [_vm._v(_vm._s(col.filters[1]['text'] || ""))])]) : _vm._e(), _vm._v(" "), (col.filters[0]['value'] === 'new') ? _c('span', [(/new/.test(item[col.prop])) ? _c('span', {
        staticClass: "sucess_text"
      }, [_vm._v("\n                                    " + _vm._s(col.filters[0]['text'] || "") + "\n                                ")]) : _c('span', {
        staticClass: "danger_text"
      }, [_vm._v(_vm._s(col.filters[1]['text'] || ""))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (col.type && col.type == 'linkConnectAdd' || col.type == 'subtract') ? _c('div', {
        staticClass: "cell"
      }, [(col.type == 'subtract') ? _c('span', [_vm._v(_vm._s(item[col.prop.split(',')[col.prop.split(',').length - 1]]))]) : (col.prop === 'withdraw_bet_principal' && item['fix_type'] && item['isfixBet'] && (item['fix_type'] == '1' || item['fix_type'] == '3')) ? _c('a', {
        attrs: {
          "href": "javascript:;"
        }
      }, [_c('span', {
        staticClass: "linkCell tag_link",
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_vm._v(_vm._s(item[col.prop.split(',')[0]]))])]) : (col.prop === 'withdraw_bet_coupon' && item['isfixBet'] && (item['fix_type'] == '2' || item['fix_type'] == '3')) ? _c('a', {
        attrs: {
          "href": "javascript:;"
        }
      }, [_c('span', {
        staticClass: "linkCell tag_link",
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_vm._v(_vm._s(item[col.prop.split(',')[0]]))])]) : (((col.prop === 'withdraw_bet_principal' || col.prop === 'withdraw_bet_coupon') && (item['fix_type'] == 0)) || (col.prop === 'withdraw_bet_principal' && item['fix_type'] == 2) || (col.prop === 'withdraw_bet_coupon' && item['fix_type'] == 1)) ? _c('span', [_vm._v("否")]) : (item[col.prop.split(',')[0]] != undefined && col.fn && col.prop !== 'withdraw_bet_principal' && col.prop !== 'withdraw_bet_coupon') ? _c('a', {
        attrs: {
          "href": "javascript:;"
        }
      }, [_c('span', {
        staticClass: "linkCell tag_link",
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_vm._v(_vm._s(item[col.prop.split(',')[0]]))])]) : _c('span', {
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_vm._v(_vm._s(item[col.prop.split(',')[0]]))])]) : _vm._e(), _vm._v(" "), (col.type == 'connect') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('span', {
        class: {
          fontWeight: col['fontweight']
        }
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (col.type == 'connectInt') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('span', {
        class: {
          fontWeight: col['fontweight']
        }
      }, [_vm._v(_vm._s(item[col.type]))])]) : _vm._e(), _vm._v(" "), (col.type == 'connect,twoDivisionMoney') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('span', {
        class: {
          fontWeight: col['fontweight']
        }
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (col.type == 'link') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        },
        staticStyle: {
          "word-wrap": "break-word",
          "word-break": "normal"
        }
      }, [(item[col.prop] && item['t_default'] == undefined) ? _c('a', {
        staticClass: "tag_link",
        attrs: {
          "href": "javascript:;"
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_c('span', {
        staticClass: "linkCell"
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (item[col.prop] && item['t_default'] && item['t_default'] != 0) ? _c('a', {
        attrs: {
          "href": "javascript:;"
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_c('span', {
        staticClass: "linkCell tag_link"
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (item['t_default'] == '0') ? _c('span', {
        staticClass: "defutFont"
      }, [_vm._v("[ " + _vm._s(_vm.LANG['系统默认'] || '系统默认') + " ]")]) : _vm._e(), _vm._v(" "), (!item[col.prop]) ? _c('span', {
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_vm._v(_vm._s(item[col.prop]))]) : _vm._e()]) : _vm._e(), _vm._v(" "), (col.type == 'linkFilter') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(item[col.prop]) ? _c('el-button', {
        attrs: {
          "size": "small",
          "type": "text"
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_c('span', {
        staticClass: "linkCell tag_link"
      }, [_vm._v(_vm._s(_vm._f("formatSex")(item[col.prop], col.filters)) + "\n                                ")])]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (col.type == 'linkDivisionMoney') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(col.hover && _vm.hoverData) ? _c('el-popover', {
        staticClass: "popover_diy",
        attrs: {
          "placement": "right",
          "title": col.prop === 'th3_amount' ? (_vm.LANG['子钱包明细：'] || '子钱包明细：') : '',
          "width": "50%",
          "trigger": "click"
        }
      }, [(_vm.hoverData.length) ? _c('div', _vm._l((_vm.hoverData), function(items, keys) {
        return _c('p', {
          key: keys,
          class: {
            mt10: keys > 0
          }
        }, [_c('span', {
          staticClass: "tag_link"
        }, [_vm._v(_vm._s(items.label) + ":")]), _vm._v(" "), _c('span', {
          staticClass: "pleft"
        }, [_vm._v(_vm._s(items.value))])])
      })) : _vm._e(), _vm._v(" "), _c('el-button', {
        staticClass: "popover_diy_btn",
        staticStyle: {
          "min-width": "60px",
          "border": "none",
          "background": "rgba(110,183,249,0)"
        },
        attrs: {
          "slot": "reference",
          "size": "mini"
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle(_vm.$evnet, _vm.tableDataColen[k], col.fn)
          }
        },
        slot: "reference"
      }, [_c('el-tag', {
        staticStyle: {
          "min-width": "60px"
        },
        attrs: {
          "type": "primary",
          "size": "small"
        }
      }, [_vm._v(_vm._s(item[col.prop]))])], 1)], 1) : (col.mousehover && _vm.hoverData) ? _c('el-popover', {
        staticClass: "popover_diy",
        attrs: {
          "placement": "right",
          "title": col.prop === 'th3_amount' ? (_vm.LANG['子钱包明细：'] || '子钱包明细：') : '',
          "width": "50%",
          "trigger": "hover"
        }
      }, [(_vm.hoverData.length) ? _c('div', _vm._l((_vm.hoverData), function(items, keys) {
        return _c('p', {
          key: keys,
          class: {
            mt10: keys > 0
          }
        }, [_c('span', {
          staticClass: "tag_link"
        }, [_vm._v(_vm._s(items.label) + ":")]), _vm._v(" "), _c('span', {
          staticClass: "pleft"
        }, [_vm._v(_vm._s(items.value))])])
      })) : _vm._e(), _vm._v(" "), _c('el-button', {
        staticClass: "popover_diy_btn",
        staticStyle: {
          "min-width": "60px",
          "border": "none",
          "background": "rgba(110,183,249,0)"
        },
        attrs: {
          "slot": "reference",
          "size": "mini"
        },
        nativeOn: {
          "mouseenter": function($event) {
            $event.preventDefault();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        },
        slot: "reference"
      }, [_c('el-tag', {
        staticStyle: {
          "min-width": "60px"
        },
        attrs: {
          "type": "primary",
          "size": "small"
        }
      }, [_vm._v(_vm._s(item[col.prop]))])], 1)], 1) : (item[col.prop] != undefined && !col.hover) ? _c('el-button', {
        attrs: {
          "size": "small",
          "type": "text"
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_c('span', {
        staticClass: "linkCell tag_link"
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _c('span', [_vm._v(_vm._s(item[col.prop]))])], 1) : _vm._e(), _vm._v(" "), (col.type == 'linkNumberButton') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('span', [_vm._v(" " + _vm._s(item[col.prop]) + " ")]), _vm._v(" "), _vm._l((_vm.btnLinkGroup[k]), function(btn) {
        return _c('div', {
          staticStyle: {
            "float": "left",
            "margin-left": "5px"
          }
        }, [_c('el-button', {
          attrs: {
            "size": "small",
            "type": "text"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], col.fn, col.prop, btn)
            }
          }
        }, [_c('span', {
          staticClass: "tag_link"
        }, [_vm._v(" " + _vm._s(btn.value) + "\n                                    ")])])], 1)
      })], 2) : _vm._e(), _vm._v(" "), (col.type == 'ipBlack') ? _c('div', {
        staticClass: "cell",
        class: {
          'state_blue': _vm.tableDataColen[k][col.prop] == '0', 'state_danger': _vm.tableDataColen[k][col.prop] == '1'
        }
      }, [_vm._v("\n                            " + _vm._s(item[col.prop]) + "\n                        ")]) : _vm._e(), _vm._v(" "), ((col.type == 'connect') || (col.type == 'contentDate') || (col.type == 'connect,twoDivisionMoney') || (col.type == 'connect,divisionMoney')) ? _c('div', {
        staticClass: "cell",
        class: {
          sucess_text: (item[col.prop] == 0 || item[col.prop] == false || item[col.prop] == 'disabled'), danger_text: (item[col.prop] == 1 || item[col.prop] == true)
        }
      }, [_vm._v("\n                            " + _vm._s(item[(col.prop.split(',')[0])]) + "\n                        ")]) : _vm._e(), _vm._v(" "), (col.type == undefined && col.filters == undefined) ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined && col.class == 'tCent') ? true : false, state_blue: (col.class != undefined && col.class == 'state_blue') ? true : false
        }
      }, [(col.tenWords) ? _c('span', {
        class: {
          fontWeight: col['fontweight']
        },
        staticStyle: {
          "display": "inline-block",
          "max-width": "140px"
        }
      }, [_vm._v(_vm._s(item[col.prop]))]) : _vm._e(), _vm._v(" "), (!col.tenWords) ? _c('span', {
        class: {
          fontWeight: col['fontweight']
        }
      }, [_vm._v(_vm._s(item[col.prop]))]) : _vm._e(), _vm._v(" "), (item['t_default'] == '0') ? _c('span', {
        staticClass: "defutFont"
      }, [_vm._v("[ " + _vm._s(_vm.LANG['系统默认'] || '系统默认') + " ]")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (col.type == undefined && col.filters) ? _c('div', {
        staticClass: "cell"
      }, [_c('span', {
        class: _vm._f("getStatusColor")(_vm.tableDataColen[k][col.prop], col.statusKey)
      }, [_vm._v(_vm._s(item[col.prop]))]), _vm._v(" "), (item['t_default'] == '0') ? _c('span', {
        staticClass: "defutFont"
      }, [_vm._v("[ " + _vm._s(_vm.LANG['系统默认'] || '系统默认') + " ]")]) : _vm._e()]) : _vm._e()]) : _vm._e()
    })], 2) : _vm._e()
  }), _vm._v(" "), (_vm.sumGame && _vm.subTotalBet && _vm.tableDataList.length) ? _c('tr', [(_vm.columnList.length === 9) ? _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "cell tCent"
  }, [_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]) : _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.subTotalBet.bet_times))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.bet_money)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.valid_bet)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.bonus, 4)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.contri, 4)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell",
    class: {
      state_danger: parseFloat(_vm.subTotalBet.lose_earn) < 0
    }
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.lose_earn)))])])]) : _vm._e(), _vm._v(" "), (_vm.sumGame && _vm.totalBet && _vm.tableDataList.length) ? _c('tr', [(_vm.columnList.length === 9) ? _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "cell tCent"
  }, [_vm._v(_vm._s(_vm.LANG['合计'] || '合计'))])]) : _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.LANG['合计'] || '合计'))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.totalBet.bet_times))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.bet_money)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.valid_bet)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.bonus, 4)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.contri, 4)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell",
    class: {
      state_danger: parseFloat(_vm.totalBet.lose_earn) < 0
    }
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.lose_earn)))])])]) : _vm._e(), _vm._v(" "), _vm._t("other")], 2), _vm._v(" "), (_vm.tableDataList.length == 0) ? _c('el-col', {
    staticStyle: {
      "line-height": "100px",
      "text-align": "center",
      "background-color": "#ffffff",
      "border": "1px solid #dfe6ec"
    }
  }, [_c('div', {
    staticClass: "dell"
  }, [_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据'))])]) : _vm._e()], 1), _vm._v(" "), _c('el-col', [_c('confirm', {
    attrs: {
      "confirmConfig": _vm.confirmConfig
    },
    on: {
      "do-confirm": _vm.doConfirm,
      "do-cancel": _vm.doCancel
    }
  })], 1), _vm._v(" "), (_vm.pageSet && _vm.tableDataList.length > 0) ? _c('el-col', {
    staticClass: "toolbar mt20 pRight20",
    staticStyle: {
      "position": "relative",
      "text-align": "right"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": _vm.pageSizeList,
      "page-size": _vm.pageSize,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.doSizePage,
      "current-change": _vm.doCurrentChange
    }
  })], 1) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UEditor_vue__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__UEditor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__UEditor_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changeAll_vue__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changeAll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__changeAll_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quickDate_vue__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quickDate_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__quickDate_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputGroup_vue__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inputGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__inputGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__radioGroup_vue__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__radioGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__radioGroup_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dateTimePicker_vue__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dateTimePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__dateTimePicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__myDatePicker_vue__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__myDatePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__myDatePicker_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











__WEBPACK_IMPORTED_MODULE_0_vue__["default"].filter('formatcheckitem', (arrs, val) => {
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
/* harmony default export */ __webpack_exports__["default"] = ({
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
                return { state: false };
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
        markdownEdit: __WEBPACK_IMPORTED_MODULE_1__UEditor_vue___default.a,
        changeAll: __WEBPACK_IMPORTED_MODULE_2__changeAll_vue___default.a,
        inputGroup: __WEBPACK_IMPORTED_MODULE_4__inputGroup_vue___default.a,
        quickDate: __WEBPACK_IMPORTED_MODULE_3__quickDate_vue___default.a,
        radioGroup: __WEBPACK_IMPORTED_MODULE_5__radioGroup_vue___default.a,
        upload: __WEBPACK_IMPORTED_MODULE_6__upload_vue___default.a,
        mydatepick: __WEBPACK_IMPORTED_MODULE_7__dateTimePicker_vue___default.a,
        datetimepicker: __WEBPACK_IMPORTED_MODULE_7__dateTimePicker_vue___default.a,
        datepick: __WEBPACK_IMPORTED_MODULE_8__myDatePicker_vue___default.a
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
                                rules[formConfig[i].prop].push({ required: true, message: (LANG['请输入'] || '请输入') + formConfig[i].label, trigger: 'blur' });
                            } else if (formConfig[i].rules[key].require && (formConfig[i].type == 'datePicker' || formConfig[i].type == 'datePickernotime')) {
                                rules[formConfig[i].prop].push({ required: true, message: LANG['请选择时间'] || '请选择时间', trigger: 'change' });
                            } else if (formConfig[i].rules[key].require && formConfig[i].type == 'select') {
                                rules[formConfig[i].prop].push({ required: true, message: (LANG['请输入'] || '请输入') + formConfig[i].label, trigger: 'change' });
                            } else if (formConfig[i].rules[key].require && formConfig[i].type == "textarea") {
                                if (formConfig[i].rulesType === "urls") {
                                    rules[formConfig[i].prop].push({ required: true, message: (LANG['请输入'] || '请输入') + formConfig[i].label, trigger: 'blur' });
                                    rules[formConfig[i].prop].push({ validator: this.validatorUrls, trigger: 'change' });
                                } else {
                                    rules[formConfig[i].prop].push({ required: true, message: (LANG['请输入'] || '请输入') + formConfig[i].label, trigger: 'blur' });
                                }
                            } else if (formConfig[i].rules[key].require && (formConfig[i].type == 'dateGroup' || formConfig[i].type == 'dateTimeGroup')) {
                                rules[formConfig[i]["prop"][0].prop] = [];
                                rules[formConfig[i]["prop"][1].prop] = [];
                                rules[formConfig[i]["prop"][0].prop].push({ required: true, message: (LANG['请选择'] || '请选择') + formConfig[i]["prop"][0].label, trigger: 'blur,change' });
                                rules[formConfig[i]["prop"][1].prop].push({ required: true, message: (LANG['请选择'] || '请选择') + formConfig[i]["prop"][1].label, trigger: 'blur,change' });
                                rules[formConfig[i]["prop"][1].prop].push({ validator: this.validatorTimeEnd, trigger: 'blur,change' });
                            } else if (formConfig[i].rules[key].require && formConfig[i].type == 'checkGroup') {
                                rules[formConfig[i].prop].push({ type: 'array', required: true, message: (LANG['请至少选择一项'] || '请至少选择一项') + formConfig[i].label, trigger: 'change' });
                            } else if (formConfig[i].rules[key].require && formConfig[i].type == 'radioGroup') {
                                rules[formConfig[i].prop].push({ required: true, message: (LANG['请至少选择一项'] || '请至少选择一项') + formConfig[i].label, trigger: 'change' });
                            } else if (formConfig[i].type == "upload") {
                                rules[formConfig[i].prop].push({ type: 'array', required: true, message: (LANG['请上传图片'] || '请上传图片') + formConfig[i].label, trigger: 'change' });
                            }
                            if (formConfig[i].rules[key].min != undefined && formConfig[i].rules[key].max != undefined && formConfig[i].type != 'select') {
                                rules[formConfig[i].prop].push({ min: formConfig[i].rules[key]['min'], max: formConfig[i].rules[key].max, message: (LANG['输入应该在'] || '输入应该在') + formConfig[i].rules[key].min + '个字符和' + formConfig[i].rules[key].max + '个字符之间', trigger: "blur" });
                            }
                            if (formConfig[i].rules[key].min != undefined && formConfig[i].rules[key].max == undefined && formConfig[i].type != 'select') {
                                rules[formConfig[i].prop].push({ min: formConfig[i].rules[key]['min'], message: (LANG['输入不能少于'] || '输入不能少于') + formConfig[i].rules[key].min + '位', trigger: "blur" });
                            }
                            if (formConfig[i].rules[key].max != undefined && formConfig[i].rules[key].min == undefined && formConfig[i].type != 'select') {
                                rules[formConfig[i].prop].push({ max: formConfig[i].rules[key].max, message: (LANG['输入不能大于'] || '输入不能大于') + formConfig[i].rules[key].max + '位', trigger: "blur" });
                            }
                            if (formConfig[i].rules[key].varMax != undefined && formConfig[i].rules[key].varMin != undefined && formConfig[i].type == 'number') {
                                this.numberMax = formConfig[i].rules[key].varMax;
                                this.numberMin = formConfig[i].rules[key].varMin;
                                rules[formConfig[i].prop].push({ validator: this.validatorNumberMinMax, trigger: 'blur' });
                            }
                            if (formConfig[i].rules[key].varMax != undefined && formConfig[i].rules[key].varMin == undefined && formConfig[i].type == 'number') {
                                this.numberMax = formConfig[i].rules[key].varMax;
                                rules[formConfig[i].prop].push({ validator: this.validatorNumberMax, trigger: 'blur' });
                            }
                            if (formConfig[i].rules[key].fns) {
                                rules[formConfig[i].prop].push({ validator: this.formConfig[i].rules[key].fns, trigger: 'blur,change' });
                            }
                            if (formConfig[i].rules[key].moreZero) {
                                if (formConfig[i].type == 'numberGroup') {
                                    rules[formConfig[i]["prop"][0]["prop"]] = [];
                                    rules[formConfig[i]["prop"][1]["prop"]] = [];
                                    rules[formConfig[i]["prop"][0]["prop"]].push({ validator: this.validatorMoreZero, trigger: 'blur' });
                                    rules[formConfig[i]["prop"][1]["prop"]].push({ validator: this.validatorMoreZero, trigger: 'blur' });
                                } else {
                                    rules[formConfig[i].prop].push({ validator: this.validatorMoreZero, trigger: 'blur' });
                                }
                            }
                            if (formConfig[i].rules[key].integer) {
                                rules[formConfig[i].prop].push({ validator: this.validatorinteger, trigger: 'blur' });
                            }
                        }
                    }
                    if (formConfig[i].type == 'email') {
                        rules[formConfig[i].prop].push({ type: 'email', message: LANG['请输入正确的邮箱地址'] || '请输入正确的邮箱地址', trigger: 'blur,change' });
                    }
                    if (formConfig[i].type == 'ip') {
                        rules[formConfig[i].prop].push({ validator: this.validatorIP, trigger: 'blur' });
                    }
                    if (formConfig[i].type == 'url') {
                        rules[formConfig[i].prop].push({ validator: this.validatorUrl, trigger: 'blur' });
                    }
                    if (formConfig[i].type == 'phone') {
                        rules[formConfig[i].prop].push({ validator: this.validatorPhon, trigger: 'blur' });
                    }
                    if (formConfig[i].type == 'repeatPassword') {
                        rules[formConfig[i].prop].push({ validator: this.validatePass, trigger: 'blur' });
                    }
                    if (formConfig[i].type == 'account') {
                        rules[formConfig[i].prop].push({ validator: this.validateAccount, trigger: 'blur' });
                    }
                    if (formConfig[i].type == 'markdown' && formConfig[i].config && formConfig[i].config.maximumWords) {
                        rules[formConfig[i].prop].push({ validator: this.validateMarkdown });
                        rules[formConfig[i].prop].push({ message: (LANG['输入的文字不能超过'] || '输入的文字不能超过') + formConfig[i].config.maximumWords + (LANG['个字符'] || '个字符'), trigger: 'blur,change' });
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
                    let temp = {};
                    // 去除前后空格
                    for (let n in this.editForm) {
                        if (statelist[n] || this.domainkeys['keys'] === n || this.markdownKey[n]) {
                            temp[n] = this.editForm[n];
                        } else {
                            temp[n] = STRINGTRIM(this.editForm[n]);
                        }
                    }
                    this.$emit("get-form", { "formObj": temp });
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
                this.$emit("cancel-form", { "state": "init" });
                // return;
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
            }
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
                            let value1 = sessionStorage.sysTime + ' 00:00:00';
                            let value2 = sessionStorage.sysTime + ' 23:59:59';
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
                this.$emit("reset-form", { "state": "init", "form": this.editForm });
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
                        _this.$emit('do-query', { "item": query });
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
            this.$emit("change-radio", { "item": val });
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
            this.$emit("get-select", { "key": prop, "obj": this.editForm });
        },
        // 按钮点击事件
        doButtonClick(obj) {
            this.$emit("get-button", { "item": obj });
        },
        //关闭弹窗
        closeDialog(str) {
            this.resetForm(str);
            this.showEditFrom = false;
            //                this.init();
        },
        //周组件切换
        changeWeek(val, keyOne, keyTwo) {
            let t = new Date(val);
            let e = t.valueOf() + 6 * 24 * 60 * 60 * 1000;
            this.editForm[keyOne] = FORMATDATEPICKER(val);
            this.editForm[keyTwo] = FORMATDATEPICKER(e);
        },
        // 保存上传文件
        doSaveFile(obj) {
            let list = obj.url || [];
            this.editForm[obj.key] = [];
            for (let k in list) {
                this.editForm[obj.key].push(list[k]);
            }
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
                this.$emit("get-input", { "key": key, "form": this.editForm });
            }
        },
        //textarea 输入事件
        changeTextarea(item) {
            let textareaVal = { length: item.length, value: item };
            this.$emit("get-textarea", textareaVal);
        }
    },
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

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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
                this.$emit('get-val', { 'item': { "optStart": dates, "optEnd": datee }, "keyS": this.opts, "keyE": this.optE });
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

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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
                this.$emit("get-radioVal", { "val": getVal, "key": this.keys, "groupVal": this.radioVal });
            }
        }
    },
    computed: {},
    mounted() {},
    created() {
        this.init();
    }
});

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "#formEdit .search{min-width:860px}#formEdit .el-date-editor.el-input{width:120px;height:30px}#formEdit .el-form-item:first-child{margin-right:0}#formEdit .el-input__inner{height:30px}#formEdit .formbtn{float:left}#formEdit .el-form-item__content .el-date-editor .el-icon-date{padding-top:3px}#formEdit .el-dialog__wrapper .el-dialog .el-dialog__body .el-form{overflow:inherit}#formEdit .el-dialog__wrapper .el-dialog .el-dialog__body .el-form .el-select{width:100%}#formEdit .el-checkbox+.el-checkbox{margin-left:0}#formEdit .el-dialog__wrapper .el-dialog .el-dialog__body .el-checkbox{margin-right:15px}#formEdit .el-radio__label{white-space:normal}#formEdit .el-radio-group{width:100%}#formEdit .width150{width:155px!important}", ""]);

// exports


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, ".group[data-v-48a062cc]{margin-left:5px}.group .item[data-v-48a062cc]{float:left;margin-left:5px;line-height:36px}.group .item .intW[data-v-48a062cc]{width:100px}.group[data-v-48a062cc]:last-child{clear:both}", ""]);

// exports


/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, ".line[data-v-de121046]{text-align:center}#inputGroup input[data-v-de121046]{width:100%}", ""]);

// exports


/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(263);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("9f03f464", content, true);

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(264);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("bb95b374", content, true);

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(265);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("1cfeb0be", content, true);

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(268)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(261),
  /* template */
  __webpack_require__(273),
  /* scopeId */
  "data-v-de121046",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(267)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(262),
  /* template */
  __webpack_require__(272),
  /* scopeId */
  "data-v-48a062cc",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.showEditFrom) ? _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading.body",
      value: (_vm.formLoading),
      expression: "formLoading",
      modifiers: {
        "body": true
      }
    }],
    attrs: {
      "id": "formEdit"
    }
  }, [(_vm.type != 'search' && _vm.type != 'twoCol' && !_vm.formLoading) ? _c('el-dialog', {
    attrs: {
      "title": _vm.formTitel,
      "size": _vm.size
    },
    on: {
      "close": function($event) {
        _vm.closeDialog('noReset')
      }
    },
    model: {
      value: (_vm.formVisible.state),
      callback: function($$v) {
        _vm.$set(_vm.formVisible, "state", $$v)
      },
      expression: "formVisible.state"
    }
  }, [_c('el-form', {
    ref: "editForm",
    staticClass: "pb10",
    attrs: {
      "model": _vm.editForm,
      "rules": _vm.rules,
      "label-width": _vm.labelWidth
    }
  }, _vm._l((_vm.formConfig), function(item, index) {
    return _c('div', {
      key: index
    }, [(item.type == 'title') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label
      }
    }) : _vm._e(), _vm._v(" "), (item.type == 'remind') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label
      }
    }, [_c('span', [_vm._v(_vm._s(_vm.LANG[item.remind] || item.remind))])]) : _vm._e(), _vm._v(" "), (item.type === 'label') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label
      }
    }, [_c('span', {
      staticClass: "help_gray"
    }, [_vm._v(_vm._s(_vm.editForm[item.prop]))])]) : _vm._e(), _vm._v(" "), ((item.type == 'text' || item.type == 'phone' || item.type == 'email' || item.type == 'url' || item.type == 'textarea' || item.type == 'ip' || item.type == 'account') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [(!(item.type == 'textarea')) ? _c('el-input', {
      attrs: {
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      on: {
        "change": function($event) {
          _vm.changeInput(item.prop)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }) : _vm._e(), _vm._v(" "), (item.type == 'textarea') ? _c('el-input', {
      attrs: {
        "type": "textarea",
        "rows": (parseInt(item.rows) || 5),
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      on: {
        "change": function($event) {
          _vm.changeTextarea(_vm.editForm[item.prop])
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }) : _vm._e(), _vm._v(" "), (item.type == 'textarea' && _vm.textareaTest && _vm.textareaTest.type && _vm.editForm[item.prop].length > _vm.textareaTest.length) ? _c('span', {
      staticClass: "help_red"
    }, [_vm._v("不能超过 "), _c('span', [_vm._v(_vm._s(_vm.textareaTest.length))]), _vm._v("个字符最大长度")]) : _vm._e(), _vm._v(" "), (item.type == 'textarea' && _vm.textareaTest && _vm.textareaTest.type && _vm.editForm[item.prop].length <= _vm.textareaTest.length) ? _c('span', {
      staticClass: "help_gray"
    }, [_vm._v("当前还可以输入 "), _c('span', [_vm._v(_vm._s(_vm.textareaTest.length - _vm.editForm[item.prop].length))]), _vm._v(" 个字符")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), ((item.type == 'password') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [(!_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "password",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [(item.showpasswordname != false) ? _c('el-button', {
      attrs: {
        "slot": "append"
      },
      on: {
        "click": _vm.showpass
      },
      slot: "append"
    }, [_c('i', {
      staticClass: "fa fa-eye",
      attrs: {
        "aria-hidden": "true"
      }
    })]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "text",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_c('el-button', {
      attrs: {
        "slot": "append"
      },
      on: {
        "click": _vm.showpass
      },
      slot: "append"
    }, [_c('i', {
      staticClass: "fa fa-eye-slash",
      attrs: {
        "aria-hidden": "true"
      }
    })])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), ((item.type == 'passwordType') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [(!_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "password"
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_c('el-button', {
      attrs: {
        "slot": "append"
      },
      on: {
        "click": _vm.showpass
      },
      slot: "append"
    }, [_c('i', {
      staticClass: "fa fa-eye",
      attrs: {
        "aria-hidden": "true"
      }
    })])], 1) : _vm._e(), _vm._v(" "), (_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "text"
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_c('el-button', {
      attrs: {
        "slot": "append"
      },
      on: {
        "click": _vm.showpass
      },
      slot: "append"
    }, [_c('i', {
      staticClass: "fa fa-eye-slash",
      attrs: {
        "aria-hidden": "true"
      }
    })])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), ((item.type == 'repeatPassword') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [(!_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "password",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_c('el-button', {
      attrs: {
        "slot": "append"
      },
      on: {
        "click": _vm.showpass
      },
      slot: "append"
    }, [_c('i', {
      staticClass: "fa fa-eye",
      attrs: {
        "aria-hidden": "true"
      }
    })])], 1) : _vm._e(), _vm._v(" "), (_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "text",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_c('el-button', {
      attrs: {
        "slot": "append"
      },
      on: {
        "click": _vm.showpass
      },
      slot: "append"
    }, [_c('i', {
      staticClass: "fa fa-eye-slash",
      attrs: {
        "aria-hidden": "true"
      }
    })])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), ((item.type == 'button') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          _vm.doButtonClick(item)
        }
      }
    }, [_vm._v(_vm._s(item.text))]), _vm._v(" "), _c('span', {
      staticStyle: {
        "margin-left": "10px"
      }
    }, [_vm._v(_vm._s(item.value))])], 1) : _vm._e(), _vm._v(" "), ((item.type == 'number') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-input', {
      attrs: {
        "type": "number",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'select') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-select', {
      attrs: {
        "placeholder": _vm.LANG['请选择'] || '请选择',
        "disabled": item.disabled
      },
      on: {
        "change": function($event) {
          _vm.changeSelect(item.propVal, item.list, _vm.editForm[item.prop], item.relation, item.relationKey, item.linkArr, item.prop)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(option, index) {
      return _c('el-option', {
        key: index,
        attrs: {
          "label": option.label,
          "value": option.value
        }
      })
    }))], 1) : _vm._e(), _vm._v(" "), ((item.type == 'dateGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "required": (item.required ? item.required : false)
      }
    }, [_c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[0].prop
      }
    }, [_c('datetimepicker', {
      attrs: {
        "datekey": item.prop[0].prop,
        "isEnd": false,
        "showTime": item.showTime
      },
      on: {
        "get-val": _vm.getDateVal
      },
      model: {
        value: (_vm.editForm[item.prop[0].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[0].prop, $$v)
        },
        expression: "editForm[item.prop[0].prop]"
      }
    })], 1)], 1), _vm._v(" "), _c('el-col', {
      staticClass: "line textcenter",
      attrs: {
        "span": 2
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[1].prop
      }
    }, [_c('datetimepicker', {
      attrs: {
        "datekey": item.prop[1].prop,
        "isEnd": true,
        "showTime": item.showTime
      },
      on: {
        "get-val": _vm.getDateVal
      },
      model: {
        value: (_vm.editForm[item.prop[1].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[1].prop, $$v)
        },
        expression: "editForm[item.prop[1].prop]"
      }
    })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), ((item.type == 'numberGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label
      }
    }, [_c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[0].prop
      }
    }, [_c('el-input', {
      staticClass: "intW",
      attrs: {
        "type": "number",
        "size": "small"
      },
      model: {
        value: (_vm.editForm[item.prop[0].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[0].prop, $$v)
        },
        expression: "editForm[item.prop[0].prop]"
      }
    })], 1)], 1), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 2
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[1].prop
      }
    }, [_c('el-input', {
      staticClass: "intW",
      attrs: {
        "type": "number",
        "size": "small"
      },
      model: {
        value: (_vm.editForm[item.prop[1].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[1].prop, $$v)
        },
        expression: "editForm[item.prop[1].prop]"
      }
    })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), ((item.type == 'datePicker') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('mydatepick', {
      attrs: {
        "datekey": item.prop
      },
      on: {
        "get-date": _vm.getDateval
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'datePickernotime') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('datepick', {
      attrs: {
        "datekey": item.prop
      },
      on: {
        "get-date": _vm.getDayVal
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'dateWeek') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-date-picker', {
      attrs: {
        "type": "week",
        "placeholder": _vm.LANG['选择周'] || '选择周'
      },
      on: {
        "change": function($event) {
          _vm.changeWeek(_vm.editForm[item.prop], item.propOne, item.propTwo)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'switch') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-switch', {
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'checkGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-checkbox', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.allBtnShow),
        expression: "item.allBtnShow"
      }],
      attrs: {
        "indeterminate": _vm.isIndeterminate[item.prop]
      },
      on: {
        "change": function($event) {
          _vm.handleCheckAllChange($event, index, item.prop)
        }
      },
      model: {
        value: (_vm.checkAll[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.checkAll, item.prop, $$v)
        },
        expression: "checkAll[item.prop]"
      }
    }, [_vm._v(_vm._s(_vm.LANG['全选'] || '全选'))]), _vm._v(" "), _c('el-checkbox-group', {
      on: {
        "change": function($event) {
          _vm.handleCheckedCitiesChange($event, index, item.prop)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(box, index) {
      return _c('el-checkbox', {
        key: index,
        staticClass: "mr10",
        attrs: {
          "label": _vm.LANG[box] || box,
          "name": "type"
        }
      }, [_vm._v(_vm._s(_vm._f("formatcheckitem")(item.Arr, box)))])
    }))], 1) : _vm._e(), _vm._v(" "), ((item.type == 'checkbox') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-checkbox', {
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_vm._v(_vm._s(_vm.LANG[item.valLabel] || item.valLabel))])], 1) : _vm._e(), _vm._v(" "), ((item.type == 'radioGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-radio-group', {
      on: {
        "change": function($event) {
          _vm.changeRadio(item.checkIndex, item.arr, _vm.editForm[item.prop], item.propkey)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(rad, index) {
      return _c('el-radio', {
        key: index,
        attrs: {
          "label": _vm.LANG[rad.value] || rad.value
        }
      }, [_vm._v(_vm._s(rad.label))])
    }))], 1) : _vm._e(), _vm._v(" "), ((item.type == 'dateTimeGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "required": (item.required ? item.required : false)
      }
    }, [_c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[0].prop
      }
    }, [_c('datetimepicker', {
      attrs: {
        "datekey": item.prop[0].prop,
        "isEnd": false,
        "showTime": item.showTime
      },
      on: {
        "get-val": _vm.getDateVal
      },
      model: {
        value: (_vm.editForm[item.prop[0].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[0].prop, $$v)
        },
        expression: "editForm[item.prop[0].prop]"
      }
    })], 1)], 1), _vm._v(" "), _c('el-col', {
      staticClass: "line textcenter",
      attrs: {
        "span": 2
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[1].prop
      }
    }, [_c('datetimepicker', {
      attrs: {
        "datekey": item.prop[1].prop,
        "isEnd": true,
        "showTime": item.showTime
      },
      on: {
        "get-val": _vm.getDateVal
      },
      model: {
        value: (_vm.editForm[item.prop[1].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[1].prop, $$v)
        },
        expression: "editForm[item.prop[1].prop]"
      }
    })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), ((item.type == 'markdown') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('markdownEdit', {
      attrs: {
        "id": item.prop,
        "config": item.config
      },
      on: {
        "getContentLength": _vm.getconLength
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'upload') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('upload', {
      attrs: {
        "keys": item.prop,
        "folder": item.folder,
        "isInit": _vm.imgInit,
        "arrList": item.value,
        "fileNum": item.fileNum
      },
      on: {
        "response": _vm.doSaveFile
      }
    })], 1) : _vm._e()], 1)
  })), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    staticClass: "formCancel",
    on: {
      "click": function($event) {
        _vm.resetForm('no')
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))]), _vm._v(" "), _c('el-button', {
    staticClass: "formSave",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveForm
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.formConfig[0].type == 'quickDate' && !_vm.formLoading) ? _c('el-col', {
    staticStyle: {
      "margin-bottom": "10px"
    },
    attrs: {
      "span": 24
    }
  }, [(_vm.formConfig[0].defaultId) ? _c('quickDate', {
    attrs: {
      "reSet": _vm.reSet,
      "defaultId": _vm.formConfig[0].defaultId,
      "showTimes": _vm.formConfig[0].showTimes
    },
    on: {
      "get-day": _vm.getDay
    }
  }) : _c('quickDate', {
    attrs: {
      "reSet": _vm.reSet,
      "showTimes": _vm.formConfig[0].showTimes
    },
    on: {
      "get-day": _vm.getDay
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.type == 'search' && !_vm.formLoading) ? _c('el-form', {
    ref: "editForm",
    staticClass: "search",
    attrs: {
      "model": _vm.editForm,
      "rules": _vm.rules,
      "label-width": _vm.labelWidth,
      "inline": true
    }
  }, [_vm._l((_vm.formConfig), function(item, index) {
    return _c('el-form-item', {
      key: index
    }, [(item.type == 'text' || item.type == 'phone' || item.type == 'email' || item.type == 'url' || item.type == 'ip' || item.type == 'account' || item.type == 'textarea') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [(item.type != 'textarea' && item.style) ? _c('el-input', {
      staticClass: "intW",
      staticStyle: {
        "width": "250px !important"
      },
      attrs: {
        "size": "small",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }) : _vm._e(), _vm._v(" "), (item.type != 'textarea' && item.style == undefined) ? _c('el-input', {
      staticClass: "intW",
      class: {
        width150: item.width150
      },
      attrs: {
        "size": "small",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }) : _vm._e(), _vm._v(" "), (item.type == 'textarea') ? _c('el-input', {
      style: ({
        width: item.width + 'px'
      }),
      attrs: {
        "type": "textarea",
        "rows": (item.rows || 1),
        "size": "small",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (item.type == 'number') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-input', {
      staticClass: "intW",
      attrs: {
        "type": "number",
        "size": "small",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'select') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-select', {
      staticClass: "intW",
      attrs: {
        "placeholder": _vm.LANG['请选择'] || '请选择',
        "size": "small",
        "filterable": item.filterable,
        "disabled": item.disabled
      },
      on: {
        "change": function($event) {
          _vm.changeSelect(item.propVal, item.list, _vm.editForm[item.prop], item.relation, item.relationKey, item.linkArr, item.prop)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(option, index) {
      return _c('el-option', {
        key: index,
        attrs: {
          "label": option.label,
          "value": option.value
        }
      })
    }))], 1) : _vm._e(), _vm._v(" "), ((item.type == 'selectString') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-select', {
      staticClass: "intW",
      attrs: {
        "placeholder": _vm.LANG['请选择'] || '请选择',
        "size": "small",
        "filterable": item.filterable,
        "disabled": item.disabled
      },
      on: {
        "change": function($event) {
          _vm.changeSelect(item.propVal, item.list, _vm.editForm[item.prop], item.relation, item.relationKey, item.linkArr, item.prop)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(option, index) {
      return _c('el-option', {
        key: index,
        attrs: {
          "label": option.label,
          "value": option.value
        }
      })
    })), _vm._v(" "), _c('el-input', {
      staticClass: "intW",
      staticStyle: {
        "width": "120px"
      },
      attrs: {
        "type": "text",
        "size": "small",
        "placeholder": _vm.LANG[item.Inputplaceholder] || item.Inputplaceholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.propInput]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.propInput, $$v)
        },
        expression: "editForm[item.propInput]"
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.type == 'dateGroup') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label
      }
    }, [_c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[0].prop
      }
    }, [_c('datetimepicker', {
      attrs: {
        "datekey": item.prop[0].prop,
        "isEnd": false,
        "showTime": item.showTime
      },
      model: {
        value: (_vm.editForm[item.prop[0].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[0].prop, $$v)
        },
        expression: "editForm[item.prop[0].prop]"
      }
    })], 1)], 1), _vm._v(" "), _c('el-col', {
      staticClass: "line textcenter",
      attrs: {
        "span": 2
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[1].prop
      }
    }, [_c('datetimepicker', {
      attrs: {
        "datekey": item.prop[1].prop,
        "isEnd": true,
        "showTime": item.showTime
      },
      model: {
        value: (_vm.editForm[item.prop[1].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[1].prop, $$v)
        },
        expression: "editForm[item.prop[1].prop]"
      }
    })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), ((item.type == 'dateTimeGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "required": (item.required ? item.required : false)
      }
    }, [_c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[0].prop
      }
    }, [_c('datetimepicker', {
      attrs: {
        "datekey": item.prop[0].prop,
        "isEnd": false,
        "showTime": item.showTime
      },
      model: {
        value: (_vm.editForm[item.prop[0].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[0].prop, $$v)
        },
        expression: "editForm[item.prop[0].prop]"
      }
    })], 1)], 1), _vm._v(" "), _c('el-col', {
      staticClass: "line textcenter",
      attrs: {
        "span": 2
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[1].prop
      }
    }, [_c('datetimepicker', {
      attrs: {
        "datekey": item.prop[1].prop,
        "isEnd": true,
        "showTime": item.showTime
      },
      model: {
        value: (_vm.editForm[item.prop[1].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[1].prop, $$v)
        },
        expression: "editForm[item.prop[1].prop]"
      }
    })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), (item.type == 'numberGroup') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label
      }
    }, [_c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[0].prop
      }
    }, [_c('el-input', {
      staticClass: "intW",
      attrs: {
        "type": "number",
        "size": "small"
      },
      model: {
        value: (_vm.editForm[item.prop[0].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[0].prop, $$v)
        },
        expression: "editForm[item.prop[0].prop]"
      }
    })], 1)], 1), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 2
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[1].prop
      }
    }, [_c('el-input', {
      staticClass: "intW",
      attrs: {
        "type": "number",
        "size": "small"
      },
      model: {
        value: (_vm.editForm[item.prop[1].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[1].prop, $$v)
        },
        expression: "editForm[item.prop[1].prop]"
      }
    })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), (item.type == 'datePicker' && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('mydatepick', {
      attrs: {
        "datekey": item.prop
      },
      on: {
        "get-date": _vm.getDateval
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'dateWeek') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-date-picker', {
      attrs: {
        "type": "week",
        "format": "yyyy 第 WW 周",
        "placeholder": _vm.LANG['选择日期'] || '选择日期'
      },
      on: {
        "change": function($event) {
          _vm.changeWeek(_vm.editForm[item.prop], item.propOne, item.propTwo)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.type == 'switch') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-switch', {
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.type == 'checkGroup') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-checkbox', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.allBtnShow),
        expression: "item.allBtnShow"
      }],
      staticClass: "fl mr10",
      attrs: {
        "indeterminate": _vm.isIndeterminate[item.prop]
      },
      on: {
        "change": function($event) {
          _vm.handleCheckAllChange($event, index, item.prop)
        }
      },
      model: {
        value: (_vm.checkAll[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.checkAll, item.prop, $$v)
        },
        expression: "checkAll[item.prop]"
      }
    }, [_vm._v(_vm._s(_vm.LANG['全选'] || '全选')), _c('span', {
      staticClass: "ml10"
    }, [_vm._v("|")])]), _vm._v(" "), _c('el-checkbox-group', {
      staticClass: "fl",
      on: {
        "change": function($event) {
          _vm.handleCheckedCitiesChange($event, index, item.prop)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(box, index) {
      return _c('el-checkbox', {
        key: index,
        staticClass: "mr10",
        attrs: {
          "label": _vm.LANG[box] || box,
          "name": "type"
        }
      }, [_vm._v(_vm._s(_vm._f("formatcheckitem")(item.Arr, box)))])
    }))], 1) : _vm._e(), _vm._v(" "), (item.type == 'checkbox') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-checkbox', {
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_vm._v(_vm._s(_vm.LANG[item.valLabel] || item.valLabel))])], 1) : _vm._e(), _vm._v(" "), (item.type == 'radioGroup') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_vm._v("\\\n                "), _c('el-radio-group', {
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(rad, index) {
      return _c('el-radio', {
        key: index,
        attrs: {
          "label": _vm.LANG[rad] || rad
        }
      })
    }))], 1) : _vm._e()], 1)
  }), _vm._v(" "), _c('el-form-item', {
    staticClass: "ml20"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.doQuery
    }
  }, [_vm._v(_vm._s(_vm.LANG['查询'] || '查询'))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.resetForm('ok')
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['重置'] || '重置'))])], 1)], 2) : _vm._e(), _vm._v(" "), (_vm.type == 'search' && !_vm.formLoading) ? _c('el-col', {
    staticStyle: {
      "text-align": "right",
      "margin-top": "-10px"
    }
  }, [(_vm.showAdd) ? _c('el-button', {
    staticClass: "tRight addBut",
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.addNew
    }
  }, [_vm._v(_vm._s(_vm.addText))]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.type == 'twoCol' && !_vm.formLoading) ? _c('el-dialog', {
    attrs: {
      "title": _vm.formTitel,
      "size": _vm.large
    },
    on: {
      "close": _vm.closeDialog
    },
    model: {
      value: (_vm.formVisible.state),
      callback: function($$v) {
        _vm.$set(_vm.formVisible, "state", $$v)
      },
      expression: "formVisible.state"
    }
  }, [_c('el-form', {
    ref: "editForm",
    attrs: {
      "model": _vm.editForm,
      "rules": _vm.rules,
      "label-width": _vm.labelWidth
    }
  }, _vm._l((_vm.formConfig), function(item, index) {
    return _c('el-col', {
      key: index,
      attrs: {
        "span": (!(item.type == 'dateGroup' || item.type == 'checkGroup' || item.type == 'radioGroup' || item.type == 'upload' || item.type == 'markdown') ? 12 : 24)
      }
    }, [(item.type == 'text' || item.type == 'phone' || item.type == 'email' || item.type == 'url' || item.type == 'account' || item.type == 'textarea') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [(!(item.type == 'textarea')) ? _c('el-input', {
      attrs: {
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }) : _vm._e(), _vm._v(" "), (item.type == 'textarea') ? _c('el-input', {
      attrs: {
        "type": "textarea",
        "rows": (parseInt(item.rows) || 5),
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (item.type == 'password') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [(!_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "password",
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_c('el-button', {
      staticClass: "fa fa-eye",
      attrs: {
        "slot": "append",
        "aria-hidden": "true",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder
      },
      slot: "append",
      model: {
        value: (_vm.showPass),
        callback: function($$v) {
          _vm.showPass = $$v
        },
        expression: "showPass"
      }
    })], 1) : _vm._e(), _vm._v(" "), (_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "text",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_c('el-button', {
      staticClass: "fa fa-eye-slash",
      attrs: {
        "slot": "append",
        "aria-hidden": "true"
      },
      slot: "append"
    })], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (item.type == 'repeatPassword') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [(!_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "password",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }) : _vm._e(), _vm._v(" "), (_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "text",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (item.type == 'number') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-input', {
      attrs: {
        "type": "number",
        "placeholder": _vm.LANG[item.placeholder] || item.placeholder,
        "disabled": (item.disabled ? true : false)
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.type == 'select') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-select', {
      attrs: {
        "placeholder": _vm.LANG['请选择'] || '请选择',
        "disabled": item.disabled
      },
      on: {
        "change": function($event) {
          _vm.changeSelect(item.propVal, item.list, _vm.editForm[item.prop], item.relation, item.relationKey, item.linkArr, item.prop)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(option, index) {
      return _c('el-option', {
        key: index,
        attrs: {
          "label": option.label,
          "value": option.value
        }
      })
    }))], 1) : _vm._e(), _vm._v(" "), (item.type == 'datePicker') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('mydatepick', {
      attrs: {
        "datekey": item.prop
      },
      on: {
        "get-date": _vm.getDateval
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.type == 'dateWeek') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-date-picker', {
      attrs: {
        "type": "week",
        "placeholder": _vm.LANG['选择周'] || '选择周'
      },
      on: {
        "change": function($event) {
          _vm.changeWeek(_vm.editForm[item.prop], item.propOne, item.propTwo)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.type == 'switch') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-switch', {
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.type == 'checkbox') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-checkbox', {
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_vm._v(_vm._s(_vm.LANG[item.valLabel] || item.valLabel))])], 1) : _vm._e(), _vm._v(" "), (item.type == 'dateGroup') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "required": ""
      }
    }, [_c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[0].prop
      }
    }, [_c('datetimepicker', {
      attrs: {
        "datekey": item.prop[0].prop,
        "isEnd": false,
        "showTime": item.showTime
      },
      model: {
        value: (_vm.editForm[item.prop[0].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[0].prop, $$v)
        },
        expression: "editForm[item.prop[0].prop]"
      }
    })], 1)], 1), _vm._v(" "), _c('el-col', {
      staticClass: "line textcenter",
      attrs: {
        "span": 2
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[1].prop
      }
    }, [_c('datetimepicker', {
      attrs: {
        "datekey": item.prop[1].prop,
        "isEnd": true,
        "showTime": item.showTime
      },
      model: {
        value: (_vm.editForm[item.prop[1].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[1].prop, $$v)
        },
        expression: "editForm[item.prop[1].prop]"
      }
    })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), (item.type == 'checkGroup') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-checkbox', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.allBtnShow),
        expression: "item.allBtnShow"
      }],
      attrs: {
        "indeterminate": _vm.isIndeterminate[item.prop]
      },
      on: {
        "change": function($event) {
          _vm.handleCheckAllChange($event, index, item.prop)
        }
      },
      model: {
        value: (_vm.checkAll[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.checkAll, item.prop, $$v)
        },
        expression: "checkAll[item.prop]"
      }
    }, [_vm._v(_vm._s(_vm.LANG['全选'] || '全选'))]), _vm._v(" "), _c('el-checkbox-group', {
      on: {
        "change": function($event) {
          _vm.handleCheckedCitiesChange($event, index, item.prop)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(box, index) {
      return _c('el-checkbox', {
        key: index,
        attrs: {
          "label": _vm.LANG[box] || box,
          "name": "type"
        }
      }, [_vm._v(_vm._s(_vm._f("formatcheckitem")(item.Arr, box)))])
    }))], 1) : _vm._e(), _vm._v(" "), (item.type == 'radioGroup') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-radio-group', {
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(rad, index) {
      return _c('el-radio', {
        key: index,
        attrs: {
          "label": _vm.LANG[rad] || rad
        }
      })
    }))], 1) : _vm._e(), _vm._v(" "), (item.type == 'upload') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('upload', {
      attrs: {
        "keys": item.prop,
        "isInit": _vm.imgInit,
        "folder": item.folder
      },
      on: {
        "response": _vm.doSaveFile
      }
    })], 1) : _vm._e(), _vm._v(" "), (item.type == 'markdown') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label
      }
    }, [_c('markdownEdit', {
      attrs: {
        "id": item.prop,
        "config": item.config
      },
      on: {
        "getContentLength": _vm.getconLength
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e()], 1)
  })), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    staticClass: "formCancel",
    on: {
      "click": function($event) {
        _vm.resetForm('no')
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))]), _vm._v(" "), _c('el-button', {
    staticClass: "formSave",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveForm
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.type === 'pageForm') ? _c('el-form', {
    ref: "editForm",
    attrs: {
      "model": _vm.editForm,
      "rules": _vm.rules,
      "label-width": _vm.labelWidth
    }
  }, [_vm._l((_vm.formConfig), function(item, index) {
    return _c('div', {
      key: index
    }, [((item.type == 'text' || item.type == 'phone' || item.type == 'email' || item.type == 'url' || item.type == 'textarea' || item.type == 'ip') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [(!(item.type == 'textarea')) ? _c('el-input', {
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }) : _vm._e(), _vm._v(" "), (item.type == 'textarea') ? _c('el-input', {
      attrs: {
        "type": "textarea",
        "rows": (parseInt(item.rows) || 5)
      },
      on: {
        "change": function($event) {
          _vm.changeUrl(item.prop, item.domainType)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }) : _vm._e(), _vm._v(" "), (item.prompt) ? _c('span', {
      staticClass: "help_gray"
    }, [_vm._v(_vm._s(item.prompt))]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (item.type === 'label') ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label
      }
    }, [_c('span', {
      staticClass: "help_gray"
    }, [_vm._v(_vm._s(_vm.editForm[item.prop]))])]) : _vm._e(), _vm._v(" "), (item.type == 'textarea') ? _c('el-form-item', {
      attrs: {
        "label": "域名详情"
      }
    }, [(_vm.wwwList.length && _vm.wwwList.length > 0 && item.domainType === 'front') ? _c('el-form-item', _vm._l((_vm.wwwList), function(item, key) {
      return _c('el-row', {
        key: key
      }, [_c('el-collapse', {
        class: {
          mt10: key > 0
        },
        attrs: {
          "accordion": ""
        }
      }, [_c('el-collapse-item', {
        attrs: {
          "title": item.url,
          "name": key
        }
      }, [_c('el-col', {
        staticClass: "bmBorder",
        attrs: {
          "span": 24
        }
      }, [_c('div', {
        staticClass: "grid-content tCent"
      }, [_c('ul', [_c('li', {
        staticClass: "w20 fl bg-purple"
      }, [_vm._v(_vm._s(_vm.LANG['用途'] || '用途'))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple"
      }, [_vm._v(_vm._s(_vm.LANG['域名'] || '域名'))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple"
      }, [_vm._v(_vm._s(_vm.LANG['指向域名'] || '指向域名'))])])])]), _vm._v(" "), _c('el-col', {
        staticClass: "bmBorder",
        attrs: {
          "span": 24
        }
      }, [_c('div', {
        staticClass: "grid-content tCent"
      }, [_c('ul', [_c('li', {
        staticClass: "w20 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.master_wwwlabel))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.master_wwwUrl))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.master_wwwUrllocalhost))])])])]), _vm._v(" "), _c('el-col', {
        staticClass: "bmBorder",
        attrs: {
          "span": 24
        }
      }, [_c('div', {
        staticClass: "grid-content tCent"
      }, [_c('ul', [_c('li', {
        staticClass: "w20 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.wwwlabel))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.wwwUrl))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.wwwUrllocalhost))])])])]), _vm._v(" "), _c('el-col', {
        staticClass: "bmBorder",
        attrs: {
          "span": 24
        }
      }, [_c('div', {
        staticClass: "grid-content tCent"
      }, [_c('ul', [_c('li', {
        staticClass: "w20 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.mlabel))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.mUrl))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.mUrllocalhost))])])])]), _vm._v(" "), _c('el-col', {
        staticClass: "bmBorder",
        attrs: {
          "span": 24
        }
      }, [_c('div', {
        staticClass: "grid-content tCent"
      }, [_c('ul', [_c('li', {
        staticClass: "w20 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.agentLabel))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.agentUrl))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.agentUrllocalhost))])])])]), _vm._v(" "), _c('el-col', {
        staticClass: "bmBorder",
        attrs: {
          "span": 24
        }
      }, [_c('div', {
        staticClass: "grid-content tCent"
      }, [_c('ul', [_c('li', {
        staticClass: "w20 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.apilabel))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.apiUrl))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.apiUrllocalhost))])])])]), _vm._v(" "), _c('el-col', {
        staticClass: "bmBorder",
        attrs: {
          "span": 24
        }
      }, [_c('div', {
        staticClass: "grid-content tCent"
      }, [_c('ul', [_c('li', {
        staticClass: "w20 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.resLabel))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.res))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.reslocalhost))])])])])], 1)], 1)], 1)
    })) : _vm._e(), _vm._v(" "), (_vm.wwwList.length > 0 && item.domainType === 'end') ? _c('el-form-item', _vm._l((_vm.wwwList), function(item, key) {
      return _c('el-row', {
        key: key
      }, [_c('el-collapse', {
        class: {
          mt10: key > 0
        },
        attrs: {
          "accordion": ""
        }
      }, [_c('el-collapse-item', {
        attrs: {
          "title": item.url,
          "name": key
        }
      }, [_c('el-col', {
        staticClass: "bmBorder",
        attrs: {
          "span": 24
        }
      }, [_c('div', {
        staticClass: "grid-content tCent"
      }, [_c('ul', [_c('li', {
        staticClass: "w20 fl bg-purple"
      }, [_vm._v(_vm._s(_vm.LANG['用途'] || '用途'))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple"
      }, [_vm._v(_vm._s(_vm.LANG['域名'] || '域名'))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple"
      }, [_vm._v(_vm._s(_vm.LANG['指向域名'] || '指向域名'))])])])]), _vm._v(" "), _c('el-col', {
        staticClass: "bmBorder",
        attrs: {
          "span": 24
        }
      }, [_c('div', {
        staticClass: "grid-content tCent"
      }, [_c('ul', [_c('li', {
        staticClass: "w20 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.adminlabel))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.adminUrl))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.adminlocalhost))])])])]), _vm._v(" "), _c('el-col', {
        staticClass: "bmBorder",
        attrs: {
          "span": 24
        }
      }, [_c('div', {
        staticClass: "grid-content tCent"
      }, [_c('ul', [_c('li', {
        staticClass: "w20 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.cpilabel))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.cpiUrl))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.cpilocalhost))])])])]), _vm._v(" "), _c('el-col', {
        staticClass: "bmBorder",
        attrs: {
          "span": 24
        }
      }, [_c('div', {
        staticClass: "grid-content tCent"
      }, [_c('ul', [_c('li', {
        staticClass: "w20 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.rpiLabel))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.rpiUrl))]), _vm._v(" "), _c('li', {
        staticClass: "w40 fl bg-purple-light"
      }, [_vm._v(_vm._s(item.rpilocalhost))])])])])], 1)], 1)], 1)
    })) : _vm._e()], 1) : _vm._e(), _vm._v(" "), ((item.type == 'password') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [(!_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "password"
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_c('el-button', {
      attrs: {
        "slot": "append"
      },
      on: {
        "click": _vm.showpass
      },
      slot: "append"
    }, [_c('i', {
      staticClass: "fa fa-eye",
      attrs: {
        "aria-hidden": "true"
      }
    })])], 1) : _vm._e(), _vm._v(" "), (_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "text"
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_c('el-button', {
      attrs: {
        "slot": "append"
      },
      on: {
        "click": _vm.showpass
      },
      slot: "append"
    }, [_c('i', {
      staticClass: "fa fa-eye-slash",
      attrs: {
        "aria-hidden": "true"
      }
    })])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), ((item.type == 'repeatPassword') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [(!_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "password"
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_c('el-button', {
      attrs: {
        "slot": "append"
      },
      on: {
        "click": _vm.showpass
      },
      slot: "append"
    }, [_c('i', {
      staticClass: "fa fa-eye",
      attrs: {
        "aria-hidden": "true"
      }
    })])], 1) : _vm._e(), _vm._v(" "), (_vm.showPass) ? _c('el-input', {
      attrs: {
        "type": "text"
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_c('el-button', {
      attrs: {
        "slot": "append"
      },
      on: {
        "click": _vm.showpass
      },
      slot: "append"
    }, [_c('i', {
      staticClass: "fa fa-eye-slash",
      attrs: {
        "aria-hidden": "true"
      }
    })])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), ((item.type == 'button') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-button', {
      on: {
        "click": function($event) {
          _vm.doButtonClick(item)
        }
      }
    }, [_vm._v(_vm._s(item.text))]), _vm._v(" "), (_vm.editForm[item.prop]) ? _c('img', {
      staticStyle: {
        "margin-left": "10px",
        "vertical-align": "top"
      },
      attrs: {
        "src": _vm.editForm[item.prop],
        "alt": "",
        "height": "40px"
      }
    }) : _vm._e()], 1) : _vm._e(), _vm._v(" "), ((item.type == 'number') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-input', {
      attrs: {
        "type": "number"
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'select') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-select', {
      attrs: {
        "placeholder": _vm.LANG['请选择'] || '请选择',
        "disabled": item.disabled
      },
      on: {
        "change": function($event) {
          _vm.changeSelect(item.propVal, item.list, _vm.editForm[item.prop], item.relation, item.relationKey, item.linkArr, item.prop)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(option, index) {
      return _c('el-option', {
        key: index,
        attrs: {
          "label": option.label,
          "value": option.value
        }
      })
    }))], 1) : _vm._e(), _vm._v(" "), ((item.type == 'dateGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "required": ""
      }
    }, [_c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[0].prop
      }
    }, [_c('datetimepicker', {
      attrs: {
        "datekey": item.prop[0].prop,
        "isEnd": false,
        "showTime": item.showTime
      },
      model: {
        value: (_vm.editForm[item.prop[0].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[0].prop, $$v)
        },
        expression: "editForm[item.prop[0].prop]"
      }
    })], 1)], 1), _vm._v(" "), _c('el-col', {
      staticClass: "line textcenter",
      attrs: {
        "span": 2
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[1].prop
      }
    }, [_c('datetimepicker', {
      attrs: {
        "datekey": item.prop[1].prop,
        "isEnd": false,
        "showTime": item.showTime
      },
      model: {
        value: (_vm.editForm[item.prop[1].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[1].prop, $$v)
        },
        expression: "editForm[item.prop[1].prop]"
      }
    })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), ((item.type == 'numberGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label
      }
    }, [_c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[0].prop
      }
    }, [_c('el-input', {
      staticClass: "intW",
      attrs: {
        "type": "number",
        "size": "small"
      },
      model: {
        value: (_vm.editForm[item.prop[0].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[0].prop, $$v)
        },
        expression: "editForm[item.prop[0].prop]"
      }
    })], 1)], 1), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 2
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
      attrs: {
        "span": 11
      }
    }, [_c('el-form-item', {
      attrs: {
        "prop": item.prop[1].prop
      }
    }, [_c('el-input', {
      staticClass: "intW",
      attrs: {
        "type": "number",
        "size": "small"
      },
      model: {
        value: (_vm.editForm[item.prop[1].prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop[1].prop, $$v)
        },
        expression: "editForm[item.prop[1].prop]"
      }
    })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), ((item.type == 'datePicker') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('mydatepick', {
      attrs: {
        "datekey": item.prop
      },
      on: {
        "get-date": _vm.getDateval
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'dateWeek') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-date-picker', {
      attrs: {
        "type": "week",
        "placeholder": _vm.LANG['选择周'] || '选择周'
      },
      on: {
        "change": function($event) {
          _vm.changeWeek(_vm.editForm[item.prop], item.propOne, item.propTwo)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'switch') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-switch', {
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'checkGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-checkbox', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.allBtnShow),
        expression: "item.allBtnShow"
      }],
      attrs: {
        "indeterminate": _vm.isIndeterminate[item.prop]
      },
      on: {
        "change": function($event) {
          _vm.handleCheckAllChange($event, index, item.prop)
        }
      },
      model: {
        value: (_vm.checkAll[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.checkAll, item.prop, $$v)
        },
        expression: "checkAll[item.prop]"
      }
    }, [_vm._v(_vm._s(_vm.LANG['全选'] || '全选'))]), _vm._v(" "), _c('el-checkbox-group', {
      on: {
        "change": function($event) {
          _vm.handleCheckedCitiesChange($event, index, item.prop)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(box, index) {
      return _c('el-checkbox', {
        key: index,
        attrs: {
          "label": _vm.LANG[box] || box,
          "name": "type"
        }
      }, [_vm._v(_vm._s(_vm._f("formatcheckitem")(item.Arr, box)))])
    }))], 1) : _vm._e(), _vm._v(" "), ((item.type == 'checkbox') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-checkbox', {
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, [_vm._v(_vm._s(_vm.LANG[item.valLabel] || item.valLabel))])], 1) : _vm._e(), _vm._v(" "), ((item.type == 'radioGroup') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('el-radio-group', {
      on: {
        "change": function($event) {
          _vm.changeRadio(item.checkIndex, item.arr, _vm.editForm[item.prop], item.propkey)
        }
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    }, _vm._l((item.list), function(rad, index) {
      return _c('el-radio', {
        key: index,
        attrs: {
          "label": _vm.LANG[rad.value] || rad.value
        }
      }, [_vm._v(_vm._s(rad.label))])
    }))], 1) : _vm._e(), _vm._v(" "), ((item.type == 'markdown') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label
      }
    }, [_c('markdownEdit', {
      attrs: {
        "id": item.prop,
        "config": item.config
      },
      on: {
        "getContentLength": _vm.getconLength
      },
      model: {
        value: (_vm.editForm[item.prop]),
        callback: function($$v) {
          _vm.$set(_vm.editForm, item.prop, $$v)
        },
        expression: "editForm[item.prop]"
      }
    })], 1) : _vm._e(), _vm._v(" "), ((item.type == 'upload') && (item.ifKey ? (_vm.editForm[item.ifKey] == item.ifVal) : true)) ? _c('el-form-item', {
      attrs: {
        "label": _vm.LANG[item.label] || item.label,
        "prop": item.prop
      }
    }, [_c('upload', {
      attrs: {
        "keys": item.prop,
        "folder": item.folder,
        "isInit": _vm.imgInit,
        "arrList": item.value,
        "fileNum": item.fileNum
      },
      on: {
        "response": _vm.doSaveFile
      }
    })], 1) : _vm._e()], 1)
  }), _vm._v(" "), _c('el-form-item', {
    staticClass: "ml20"
  }, [_c('el-button', {
    staticClass: "formCancel",
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.resetForm('no')
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.saveForm('save')
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])], 1)], 2) : _vm._e()], 1) : _vm._e()
},staticRenderFns: []}

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "radioGroup"
    }
  }, [_c('el-radio-group', {
    staticClass: "w100",
    on: {
      "change": _vm.getVal
    },
    model: {
      value: (_vm.radioVal),
      callback: function($$v) {
        _vm.radioVal = $$v
      },
      expression: "radioVal"
    }
  }, _vm._l((_vm.list), function(opt) {
    return _c('div', {
      staticClass: "group w50"
    }, [_c('div', {
      staticClass: "item"
    }, [_c('el-radio', {
      attrs: {
        "label": opt.radioLabel
      }
    }, [_vm._v(_vm._s(_vm.LANG[opt.label] || opt.label))])], 1), _vm._v(" "), (_vm.radioInput) ? _c('div', {
      staticClass: "item"
    }, [(opt.inputType == 'day') ? _c('el-input', {
      staticClass: "intW",
      attrs: {
        "min": (opt.min) ? opt.min : 1,
        "max": (opt.max) ? opt.max : 1000,
        "size": "small",
        "type": "number"
      },
      on: {
        "blur": _vm.getVal
      },
      model: {
        value: (opt.input),
        callback: function($$v) {
          _vm.$set(opt, "input", $$v)
        },
        expression: "opt.input"
      }
    }) : _vm._e(), _vm._v(" "), (opt.inputType == 'week') ? _c('el-select', {
      staticStyle: {
        "width": "100px"
      },
      attrs: {
        "placeholder": _vm.LANG['请选择'] || '请选择',
        "size": "small"
      },
      on: {
        "change": _vm.getVal
      },
      model: {
        value: (opt.input),
        callback: function($$v) {
          _vm.$set(opt, "input", $$v)
        },
        expression: "opt.input"
      }
    }, [_c('el-option', {
      attrs: {
        "label": "一",
        "value": 41
      }
    }), _vm._v(" "), _c('el-option', {
      attrs: {
        "label": "二",
        "value": 42
      }
    }), _vm._v(" "), _c('el-option', {
      attrs: {
        "label": "三",
        "value": 43
      }
    }), _vm._v(" "), _c('el-option', {
      attrs: {
        "label": "四",
        "value": 44
      }
    }), _vm._v(" "), _c('el-option', {
      attrs: {
        "label": "五",
        "value": 45
      }
    }), _vm._v(" "), _c('el-option', {
      attrs: {
        "label": "六",
        "value": 46
      }
    }), _vm._v(" "), _c('el-option', {
      attrs: {
        "label": "日",
        "value": 47
      }
    })], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (opt.label2) ? _c('div', {
      staticClass: "item"
    }, [_c('label', {
      staticClass: "el-form-item__label",
      domProps: {
        "textContent": _vm._s(opt.label2)
      }
    })]) : _vm._e()])
  })), _vm._v(" "), (_vm.err) ? _c('div', {
    staticClass: "el-form-item__error"
  }, [_vm._v(_vm._s(_vm.LANG[_vm.err] || _vm.err))]) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "inputGroup"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 11
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": _vm.placeS
    }
  }, [(_vm.type == 'numberGroup') ? _c('el-input', {
    staticClass: "intW",
    attrs: {
      "placeholder": _vm.placeS,
      "type": "number",
      "size": "small"
    },
    on: {
      "blur": _vm.getVal
    },
    model: {
      value: (_vm.inputStart),
      callback: function($$v) {
        _vm.inputStart = $$v
      },
      expression: "inputStart"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type == 'dateGroup') ? _c('el-date-picker', {
    staticClass: "intW",
    attrs: {
      "type": "date",
      "placeholder": _vm.LANG['选择日期'] || '选择日期',
      "size": "small"
    },
    on: {
      "change": _vm.getVal
    },
    model: {
      value: (_vm.optStart),
      callback: function($$v) {
        _vm.optStart = $$v
      },
      expression: "optStart"
    }
  }) : _vm._e()], 1)], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 2
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 11
    }
  }, [_c('el-form-item', {
    attrs: {
      "prop": _vm.placeE
    }
  }, [(_vm.type == 'numberGroup') ? _c('el-input', {
    staticClass: "intW",
    attrs: {
      "placeholder": _vm.placeE,
      "type": "number",
      "size": "small"
    },
    on: {
      "blur": _vm.getVal
    },
    model: {
      value: (_vm.inputEnd),
      callback: function($$v) {
        _vm.inputEnd = $$v
      },
      expression: "inputEnd"
    }
  }) : _vm._e(), _vm._v(" "), (_vm.type == 'dateGroup') ? _c('el-date-picker', {
    staticClass: "intW",
    attrs: {
      "type": "date",
      "placeholder": _vm.LANG['选择日期'] || '选择日期',
      "size": "small"
    },
    on: {
      "change": _vm.getVal
    },
    model: {
      value: (_vm.optEnd),
      callback: function($$v) {
        _vm.optEnd = $$v
      },
      expression: "optEnd"
    }
  }) : _vm._e()], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        // 判断非空正整数
        var checkNumber = function (rule, value, callback) {
            if (typeof value != 'number') {
                callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
            } else if (Math.sign(value) === -1) {
                callback(new Error(LANG['不能小于0'] || '不能小于0'));
            } else {
                callback();
            }
        };
        // 判断可非空正整数
        var checkPositiveInteger = function (rule, value, callback) {
            if (value === '') {
                callback();
            } else {
                if (typeof value != 'number') {
                    callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
                } else if (Math.sign(value) === -1) {
                    callback(new Error(LANG['不能小于0'] || '不能小于0'));
                } else {
                    callback();
                }
            }
        };
        return {
            LANG,
            formInline: {
                username: '',
                role: '1'
            },
            memberTypeList: [{ "label": "会员", "role": "1" }, { "label": "代理", "role": "2" }],
            tableDate: [],
            // 权限控制
            // 是否禁止返水，优惠，取款
            permissions: {
                is_refuse_rebate: 0,
                is_refuse_sale: 0,
                is_refuse_withdraw: 0
            },
            //表格数据路径
            tableDateUrl: '',
            btnGroup: [],
            agent_btnGroup: [],
            //表单标题
            formTitle: "",
            walletTitle: "",
            bankNameList: [],
            discountNameList: [],
            //手动存款
            depositForm: {
                uid: 0,
                wid: 0,
                amount: "",
                play_code: "",
                discount: "",
                bank_id: "",
                bank_no: "",
                memo: ""
                // status: '1',
                // created_uid : 0
            },
            depositFormRules: {
                amount: [{ validator: checkNumber, required: true, trigger: "blur" }],
                play_code: [{ validator: checkPositiveInteger, trigger: "blur" }],
                discount: [{ validator: checkPositiveInteger, trigger: "blur" }],
                bank_id: [{ required: true, message: LANG['请选择存入银行'] || '请选择存入银行', trigger: 'change' }]
            },
            //手动提现
            cashForm: {
                uid: 0,
                wid: 0,
                amount: "",
                bank_id: "",
                bank_no: "",
                memo: ""
                // status: '1',
                // created_uid : 0
            },
            cashFormRules: {
                amount: [{ validator: checkNumber, required: true, trigger: "blur" }],
                bank_id: [{ required: true, message: LANG['请选择提出银行'] || '请选择提出银行', trigger: 'change' }]
            },
            //发放优惠
            grantDiscountForm: {
                uid: "",
                amount: "",
                condition: "",
                aid: "",
                memo: ""
                // status: '1'
            },
            grantDiscountFormRules: {
                amount: [{ validator: checkNumber, required: true, trigger: "blur" }],
                condition: [{ validator: checkPositiveInteger, trigger: "blur" }],
                aid: [{ required: true, message: LANG['请选择优惠活动名称'] || '请选择优惠活动名称', trigger: 'change' }]
            },
            //手动减少余额
            artificialReduceForm: {
                uid: "",
                wid: "",
                amount: "",
                memo: ""
            },
            artificialReduceFormRules: {
                amount: [{ validator: checkNumber, required: true, trigger: "blur" }]
                // qkbs: [{required: true, message: LANG['请选择提出银行'] || '请选择提出银行', trigger: 'blur'}],
                // discountName: [{required: true, message: LANG['请选择提出银行'] || '请选择提出银行', trigger: 'change'}]
            },
            //手动增加余额
            artificialAddForm: {
                uid: "",
                wid: "",
                amount: "",
                withdraw_bet: "",
                memo: ""
            },
            artificialAddFormRules: {
                amount: [{ validator: checkNumber, required: true, trigger: "blur" }],
                withdraw_bet: [{ validator: checkPositiveInteger, trigger: "blur" }]
            },
            //发放返水
            grantRebateForm: {
                uid: "",
                amount: "",
                condition: "",
                memo: ""
            },
            grantRebateFormRules: {
                amount: [{ validator: checkNumber, required: true, trigger: "blur" }],
                condition: [{ validator: checkPositiveInteger, trigger: "blur" }]
            },
            //子转主钱包
            childToMasterForm: {
                uid: "",
                wid: "",
                sid: "",
                amount: "",
                memo: "",
                type: "2",
                status: "1"
            },
            childToMasterFormRules: {
                amount: [{ validator: checkNumber, required: true, trigger: "blur" }]
            },
            //主转子钱包
            masterToChildForm: {
                uid: "",
                wid: "",
                sid: "",
                amount: "",
                memo: "",
                type: "1",
                status: "1"
            },
            masterToChildFormRules: {
                amount: [{ validator: checkNumber, required: true, trigger: "blur" }]
            },
            //主钱包ID;
            primaryId: null,
            //厅主银行列表
            bankList: [],
            // 用户银行卡列表
            userBankList: [],
            //用户资料
            userCont: {
                name: '',
                uid: ''
            },
            toggle: false,
            loading: false,
            // 真实姓名和备注
            note: {
                truename: '',
                comment: ''
            },
            // 表单提交按钮控制
            formControlBtn: {
                deposit_boolean: false,
                cash_boolean: false,
                discount_boolean: false,
                reduce_boolean: false,
                add_boolean: false,
                rebate_boolean: false,
                childtomaster_boolean: false,
                mastertochild_boolean: false
            }
        };
    },
    props: {
        manualData: Object
    },
    components: {},
    methods: {
        init() {
            //初始化请求地址
            this.tableDateUrl = URL.api + ROUTES.GET.cash.manual;
            //页面跳转传值初始化
            if (this.manualData.role || this.manualData.username) {
                this.formInline.role = this.manualData.role;
                this.formInline.username = this.manualData.username;
                this.doQuery(0);
            } else if (this.manualData.member_name && this.manualData.type) {
                this.formInline.role = this.manualData.type;
                this.formInline.username = this.manualData.member_name;
                this.doQuery(0);
            }
            //获取厅主银行卡列表
            let acountsUrl = URL.api + ROUTES.GET.cash.bank.acounts;
            this.$http.get(acountsUrl, URLCONFIG).then(res => {
                let model = res.data.data;
                this.bankList = [];
                for (let i in model) {
                    if (model[i].state === 'enabled') {
                        this.bankList.push({
                            "label": model[i].bank_name + ':' + model[i].card + ':' + model[i].name,
                            "value": model[i].id,
                            "card": model[i].card,
                            "id": model[i].id
                        });
                    }
                }
            });
            //获取优惠活动名称
            // let activeUrl = URL.api + ROUTES.GET.actives.short;
            let activeUrl = URL.api + '/active.short';
            this.$http.get(activeUrl, URLCONFIG).then(res => {
                let model = res.data.data;
                this.discountNameList = [];
                for (let i in model) {
                    // if (model[i].status) {
                    this.discountNameList.push({
                        "label": model[i].name,
                        "value": model[i].id
                    });
                    // }
                }
            });
            this.btnGroup = [{ "txt": "手动存款", "fn": "manualDeposit", "id": 1 }, { "txt": "手动提款", "fn": "manualCash", "id": 2 }, { "txt": "发放优惠", "fn": "grantDiscount", "id": 3 }, { "txt": "手动减少余额", "fn": "artificialReduce", "id": 4 }, { "txt": "手动增加余额", "fn": "artificialAdd", "id": 5 }, { "txt": "发放返水", "fn": "grantRebate", "id": 6 }];
            //                 this.formTitle = "手动存款"
            this.agent_btnGroup = [{ "txt": "手动增加余额", "fn": "artificialAdd", "id": 1 }, { "txt": "手动减少余额", "fn": "artificialReduce", "id": 2 }];
        },
        // 选择不同体系将页面搜索结果清空
        clearResult() {
            this.tableDate = [];
        },
        /**
         * 执行查询
         *props refresh 0不强制 1强制
         */
        doQuery(refresh) {
            for (let i in this.formControlBtn) {
                this.formControlBtn[i] = false;
            }
            let formData = this.formInline;
            if (!formData.username || !formData.role) {
                this.$message.error(this.LANG['请选择体系和填写用户名'] || '请选择体系和填写用户名');
                return;
            }
            this.loading = true;
            this.toggle = false;
            this.tableDate = [];
            let url = "";
            this.formInline.username = STRINGTRIM(this.formInline.username);
            if (parseInt(formData.role) === 1) {
                // 用户
                url = this.tableDateUrl + '?role=' + parseInt(formData.role) + '&username=' + formData.username + '&refresh=' + refresh;
            } else {
                // 代理
                url = this.tableDateUrl + '?role=' + parseInt(formData.role) + '&username=' + formData.username;
            }
            this.$http.get(url, URLCONFIG).then(res => {
                if (res.data.state == 0) {
                    // 设置真实姓名和备注
                    this.note.truename = res.data.data.truename || '';
                    this.note.comment = res.data.data.comment || '';

                    let primaryAccount = res.data.data.primary;
                    let tableDate = res.data.data.secondary;
                    let totalArr = { "name": "总余额", "balance": res.data.data.total_balance };
                    this.userCont.name = res.data.data.username;
                    this.userCont.uid = res.data.data.uid;
                    tableDate.forEach(function (json) {
                        primaryAccount.push(json);
                    });
                    this.tableDate = primaryAccount;
                    this.tableDate.push(totalArr);
                    for (let i = 0; i < this.tableDate.length; i++) {
                        this.tableDate[i]["name"] == "主钱包" && (this.primaryId = this.tableDate[i]["sid"]);
                        // 显示金额需要除余100
                        this.tableDate[i]["balance"] = this.tableDate[i]["balance"] / 100;
                    }
                    // 处理权限问题
                    if (parseInt(formData.role) === 1) {
                        this.permissions['is_refuse_rebate'] = parseInt(res.data.data.is_refuse_rebate);
                        this.permissions['is_refuse_sale'] = parseInt(res.data.data.is_refuse_sale);
                        this.permissions['is_refuse_withdraw'] = parseInt(res.data.data.is_refuse_withdraw);
                    }
                    // 获取当前用户的银行卡列表
                    this.$http.get(URL.api + ROUTES.GET.user.info.$(parseInt(this.userCont.uid)) + "?type=bank", URLCONFIG).then(res2 => {
                        // 清空原来上一个查询留下的数据
                        this.userBankList = [];
                        let model = res2.data.data;
                        for (let i in model) {
                            // 判断该会员下的改银行卡是否启用
                            if (model[i].state === 'enabled') {
                                this.userBankList.push({
                                    "label": model[i].bank_name + ':' + model[i].card + ':' + model[i].accountname,
                                    "value": model[i].id,
                                    "card": model[i].card,
                                    "id": model[i].id
                                });
                            }
                        }
                    }).catch(function (err) {
                        //                            console.log(err)
                    });
                } else {
                    this.$message.error(this.LANG[res.data.message] || res.data.message);
                }
                this.loading = false;
            }).catch(function (err) {
                //                    console.log(err)
                this.loading = false;
            });
        },
        // 表格按钮事件
        doHandle(fn, row) {
            // 对于普通会员需要进行权限判断
            if (parseInt(this.formInline.role) === 1) {
                if (fn === 'manualCash') {
                    if (this.permissions['is_refuse_withdraw']) {
                        this.$message({ message: '禁止提款', type: 'error' });
                        return;
                    }
                } else if (fn === 'grantDiscount') {
                    if (this.permissions['is_refuse_sale']) {
                        this.$message({ message: '禁止优惠', type: 'error' });
                        return;
                    }
                } else if (fn === 'grantRebate') {
                    if (this.permissions['is_refuse_rebate']) {
                        this.$message({ message: '禁止返水', type: 'error' });
                        return;
                    }
                }
            }
            this.toggle = true;
            switch (fn) {
                // 手动存款
                case "manualDeposit":
                    this.manualDeposit(row);
                    break;
                // 手动提款
                case "manualCash":
                    this.manualCash(row);
                    break;
                // 发放优惠
                case "grantDiscount":
                    this.grantDiscount(row);
                    break;
                // 手动减少余额
                case "artificialReduce":
                    this.artificialReduce(row);
                    break;
                // 手动增加余额
                case "artificialAdd":
                    this.artificialAdd(row);
                    break;
                // 发放返水
                case "grantRebate":
                    this.grantRebate(row);
                    break;
                // 子转主钱包
                case "childToMaster":
                    this.childToMaster(row);
                    break;
                // 主转子钱包
                case "masterToChild":
                    this.masterToChild(row);
                    break;
            }
        },
        //卡号
        checkBank() {
            for (let i = 0; i < this.bankList.length; i++) {
                this.depositForm.bank_id == this.bankList[i]["value"] && (this.depositForm.bank_no = this.bankList[i]["card"]);
            }
        },
        userCheckBank() {
            for (let i = 0; i < this.userBankList.length; i++) {
                this.cashForm.bank_id == this.userBankList[i]["value"] && (this.cashForm.bank_no = this.userBankList[i]["card"]);
            }
        },
        //重置FORM
        resetForm(formName) {
            this.$refs[formName].resetFields();
            if (formName == 'grantDiscountForm') {
                this.grantDiscountForm.ckje = null;
                this.grantDiscountForm.yhje = null;
            }
        },
        //手动存款
        manualDeposit(row) {
            this.walletTitle = "主钱包";
            this.formTitle = "手动存款";
            this.depositForm.wid = parseInt(row.sid);
            this.depositForm.uid = parseInt(this.userCont.uid);
            this.depositForm.amount = "";
            this.depositForm.play_code = "";
            this.depositForm.discount = "";
            this.depositForm.bank_id = '';
            this.depositForm.bank_no = '';
            this.depositForm.memo = '';
        },
        //验证非空参数
        judgmentProp(obj) {
            let flag = true;
            for (let i = 0; i < obj.length; i++) {
                if (!obj[i]['name']) {
                    this.$message({ message: obj[i]['message'], type: 'warning' });
                    flag = false;
                    break;
                }
            }
            return flag;
        },
        //保存手动存款
        doAddDeposit() {
            // 设置手动存款参数
            let formData = {};
            formData.role = parseInt(this.formInline.role);
            for (let i in this.depositForm) {
                formData[i] = this.depositForm[i];
            }

            // (formData.name != '' || (this.$message({message: '请查询体系后添加', type: 'warning'})) && false)
            // && (formData.amount != '' || (this.$message({message: '请输入存入金额', type: 'warning'})) && false)
            // && (formData.bank_id != '' || (this.$message({message: '请选择存入银行', type: 'warning'})) && false)

            //需要验证的参数
            let formInline_prop = [{ name: formData.amount, message: '请输入存入金额' }, { name: formData.bank_id, message: '请选择存入银行' }];
            if (!this.judgmentProp(formInline_prop)) {
                return;
            }

            //对输入数值参数进行转换
            formData.amount = parseFloat(formData.amount).toFixed(2) * 100;
            formData.play_code = parseFloat(formData.play_code).toFixed(2) * 100;
            formData.discount = parseFloat(formData.discount).toFixed(2) * 100;

            if (!this.djOperateMoney(formData.amount)) return false;
            this.formControlBtn.deposit_boolean = true;
            let acountsUrl = URL.api + ROUTES.POST.cash.deposit;
            this.$http.post(acountsUrl, JSON.stringify(formData), URLCONFIG).then(res => {
                // debugger;
                if (res.data.state == 0 && res.data.data) {
                    this.$message({ message: '保存成功', type: 'success' });
                    this.doQuery(1);
                } else {
                    this.$message({ message: res.data.message, type: 'error' });
                }
                this.formControlBtn.deposit_boolean = false;
            }).catch(function (err) {
                //                   console.log(err)
            });
        },
        //手动提款
        manualCash(row) {
            this.walletTitle = "主钱包";
            this.formTitle = "手动提款";
            this.cashForm.wid = parseInt(row.sid);
            this.cashForm.uid = parseInt(this.userCont.uid);
            this.cashForm.amount = "";
            this.cashForm.bank_id = "";
            this.cashForm.bank_no = "";
            this.cashForm.memo = "";
        },
        //保存手动提款
        doCash() {
            // 设置手动提款参数
            let formData = {};
            formData.role = parseInt(this.formInline.role);
            for (let i in this.cashForm) {
                formData[i] = this.cashForm[i];
            }

            //需要验证的参数
            let formInline_prop = [{ name: formData.bank_id, message: '请选择提出银行' }];
            if (!this.judgmentProp(formInline_prop)) {
                return;
            }

            formData.amount = parseFloat(this.cashForm.amount).toFixed(2) * 100;

            if (!this.djOperateMoney(formData.amount)) return false;
            this.formControlBtn.cash_boolean = true;
            let acountsUrl = URL.api + ROUTES.POST.cash.withdrawal;
            (formData.name != '' || this.$message({ message: '请查询体系后添加', type: 'warning' }) && false) && (formData.amount != null || this.$message({ message: '请输入存入金额', type: 'warning' }) && false) && (formData.bank_id != '' || this.$message({ message: '请选择存入银行', type: 'warning' }) && false) && this.$http.post(acountsUrl, formData, URLCONFIG).then(res => {
                if (res.data.state == 0 && res.data.data) {
                    this.$message({ message: '保存成功', type: 'success' });
                    this.doQuery(1);
                } else {
                    this.$message({ message: res.data.message, type: 'error' });
                }
                this.formControlBtn.cash_boolean = false;
            }).catch(function (err) {
                //                   console.log(err)
            });
        },
        //发放优惠
        grantDiscount(row) {
            this.walletTitle = "主钱包";
            this.formTitle = "发放优惠", this.grantDiscountForm.uid = parseInt(this.userCont.uid);
            this.grantDiscountForm.amount = "";
            this.grantDiscountForm.condition = "";
            this.grantDiscountForm.aid = "";
            this.grantDiscountForm.memo = "";
        },
        //保存发放优惠
        doGrantDiscountForm() {
            let _this = this;
            let active_name = '';
            for (let i in _this.discountNameList) {
                if (_this.grantDiscountForm.aid === _this.discountNameList[i].value) {
                    active_name = _this.discountNameList[i].label;
                }
            }

            // 设置手动发放优惠参数
            let formData = {};
            formData.role = parseInt(this.formInline.role);
            for (let i in this.grantDiscountForm) {
                formData[i] = this.grantDiscountForm[i];
            }

            //需要验证的参数
            let formInline_prop = [{ name: formData.amount, message: '请输入优惠金额' }, { name: formData.aid, message: '请选择优惠活动' }];
            if (!this.judgmentProp(formInline_prop)) {
                return;
            }

            formData.amount = parseFloat(this.grantDiscountForm.amount).toFixed(2) * 100;
            formData.condition = parseFloat(this.grantDiscountForm.condition).toFixed(2) * 100;

            if (!this.djOperateMoney(formData.amount)) return false;
            this.formControlBtn.discount_boolean = true;
            let acountsUrl = URL.api + ROUTES.POST.cash.activity;
            formData.active_name = active_name;
            this.$http.post(acountsUrl, formData, URLCONFIG).then(res => {
                if (res.data.state == 0 && res.data.data) {
                    this.$message({ message: '保存成功', type: 'success' });
                    this.doQuery(1);
                } else {
                    this.$message({ message: res.data.message, type: 'error' });
                }
                this.formControlBtn.discount_boolean = false;
            }).catch(function (err) {
                //                    console.log(err)
            });
        },
        //手动减少余额
        artificialReduce(row) {
            // this.artificialReduceForm.wid = row.sid;
            this.walletTitle = "主钱包";
            this.formTitle = "手动减少余额";
            // this.artificialReduceForm.name = this.userCont.name;
            this.artificialReduceForm.wid = parseInt(row.sid);
            this.artificialReduceForm.uid = parseInt(this.userCont.uid);
            this.artificialReduceForm.amount = "";
            this.artificialReduceForm.memo = "";
        },
        //保存手动减少余额
        doArtificialReduce() {
            // 设置手动减少余额参数
            let formData = {};
            formData.role = parseInt(this.formInline.role);
            for (let i in this.artificialReduceForm) {
                formData[i] = this.artificialReduceForm[i];
            }

            //需要验证的参数
            // let formInline_prop = [{name: formData.amount, message: '请输入减金额'}]
            // if (!this.judgmentProp(formInline_prop)) {
            //     return;
            // }

            formData.amount = parseFloat(this.artificialReduceForm.amount).toFixed(2) * 100;

            if (!this.djOperateMoney(formData.amount)) return false;
            this.formControlBtn.reduce_boolean = true;
            let acountsUrl = URL.api + ROUTES.POST.cash.decrease;
            this.$http.post(acountsUrl, formData, URLCONFIG).then(res => {
                if (res.data.state == 0 && res.data.data) {
                    this.$message({ message: '保存成功', type: 'success' });
                    this.doQuery(1);
                } else {
                    this.$message({ message: res.data.message, type: 'error' });
                }
                this.formControlBtn.reduce_boolean = false;
            }).catch(function (err) {
                //                    console.log(err)
            });
        },
        //手动增加余额
        artificialAdd(row) {
            this.walletTitle = "主钱包";
            this.formTitle = "手动增加余额";
            this.artificialAddForm.wid = parseInt(row.sid);
            this.artificialAddForm.uid = parseInt(this.userCont.uid);
            this.artificialAddForm.amount = '';
            this.artificialAddForm.withdraw_bet = '';
            this.artificialAddForm.memo = '';
        },
        //保存手动增加余额
        doArtificialAdd() {
            // 设置手动增加余额参数
            let formData = {};
            formData.role = parseInt(this.formInline.role);
            for (let i in this.artificialAddForm) {
                formData[i] = this.artificialAddForm[i];
            }

            //需要验证的参数
            // 手动增加金额代理没有打码量
            let formInline_prop = formData.role == 1 ? [{ name: formData.amount, message: '请输入加金额' }] : [{ name: formData.amount, message: '请输入加金额' }];
            if (!this.judgmentProp(formInline_prop)) {
                return;
            }

            formData.amount = parseFloat(this.artificialAddForm.amount).toFixed(2) * 100;
            formData.withdraw_bet = parseFloat(this.artificialAddForm.withdraw_bet).toFixed(2) * 100;

            if (!this.djOperateMoney(formData.amount)) return false;
            this.formControlBtn.add_boolean = true;
            // console.log(JSON.stringify(formData));
            let acountsUrl = URL.api + ROUTES.POST.cash.increase;
            this.$http.post(acountsUrl, JSON.stringify(formData), URLCONFIG).then(res => {
                if (res.data.state == 0 && res.data.data) {
                    this.$message({ message: '保存成功', type: 'success' });
                    this.doQuery(1);
                } else {
                    this.$message({ message: res.data.message, type: 'error' });
                }
                this.formControlBtn.add_boolean = false;
            }).catch(function (err) {
                //                    console.log(err)
            });
        },
        //发放返水
        grantRebate(row) {
            this.walletTitle = "主钱包";
            this.formTitle = "发放返水";
            this.grantRebateForm.uid = parseInt(this.userCont.uid);
            this.grantRebateForm.amount = '';
            this.grantRebateForm.condition = '';
            this.grantRebateForm.memo = '';
        },
        //保存发放返水
        doGrantRebate() {
            // 设置手动发放反水参数
            let formData = {};
            formData.role = parseInt(this.formInline.role);
            for (let i in this.grantRebateForm) {
                formData[i] = this.grantRebateForm[i];
            }

            //需要验证的参数
            let formInline_prop = [{ name: formData.amount, message: '请输入返水金额' }];
            if (!this.judgmentProp(formInline_prop)) {
                return;
            }

            formData.amount = parseFloat(this.grantRebateForm.amount).toFixed(2) * 100;
            formData.condition = parseFloat(this.grantRebateForm.condition).toFixed(2) * 100;

            if (!this.djOperateMoney(formData.amount)) return false;
            this.formControlBtn.rebate_boolean = true;
            let acountsUrl = URL.api + ROUTES.POST.cash.rebate;
            this.$http.post(acountsUrl, formData, URLCONFIG).then(res => {
                if (res.data.state == 0 && res.data.data) {
                    this.$message({ message: '保存成功', type: 'success' });
                    this.doQuery(1);
                } else {
                    this.$message({ message: res.data.message, type: 'error' });
                }
                this.formControlBtn.rebate_boolean = false;
            }).catch(function (err) {
                //                    console.log(err)
            });
        },
        //子转主钱包
        childToMaster(row) {
            this.walletTitle = row.name;
            this.formTitle = "子转主钱包";
            this.childToMasterForm.uid = parseInt(this.userCont.uid);
            this.childToMasterForm.wid = parseInt(this.primaryId);
            this.childToMasterForm.sid = parseInt(row.sid);
            this.childToMasterForm.amount = '';
            this.childToMasterForm.memo = '';
            this.childToMasterForm.gameType = row.gameType;
        },
        //保存子转主钱包
        doChildToMaster() {
            // 设置子转主钱包参数
            let formData = {};
            formData.role = parseInt(this.formInline.role);
            for (let i in this.childToMasterForm) {
                formData[i] = this.childToMasterForm[i];
            }

            //需要验证的参数
            let formInline_prop = [{ name: formData.amount, message: '请输入金额' }];
            if (!this.judgmentProp(formInline_prop)) {
                return;
            }

            formData.amount = parseFloat(this.childToMasterForm.amount).toFixed(2) * 100;

            if (!this.djOperateMoney(formData.amount)) return false;
            this.formControlBtn.childtomaster_boolean = true;
            // console.log(JSON.stringify(formData));
            let acountsUrl = URL.api + ROUTES.POST.cash.childOrmaster;
            this.$http.post(acountsUrl, JSON.stringify(formData), URLCONFIG).then(res => {
                if (res.data.state == 0 && res.data.data) {
                    this.$message({ message: '保存成功', type: 'success' });
                    this.doQuery(1);
                } else {
                    this.$message({ message: res.data.message, type: 'error' });
                }
                this.formControlBtn.childtomaster_boolean = false;
            }).catch(function (err) {
                //                   console.log(err)
            });
        },
        //主转子钱包
        masterToChild(row) {
            this.walletTitle = row.name;
            this.formTitle = "主转子钱包";
            this.masterToChildForm.uid = parseInt(this.userCont.uid);
            this.masterToChildForm.wid = parseInt(this.primaryId);
            this.masterToChildForm.sid = parseInt(row.sid);
            this.masterToChildForm.amount = '';
            this.masterToChildForm.memo = '';
            this.masterToChildForm.gameType = row.gameType;
        },
        //保存主转子钱包
        doMasterToChild() {
            // 设置手动主转子钱包参数
            let formData = {};
            formData.role = parseInt(this.formInline.role);
            for (let i in this.masterToChildForm) {
                formData[i] = this.masterToChildForm[i];
            }

            //需要验证的参数
            let formInline_prop = [{ name: formData.amount, message: '请输入金额' }];
            if (!this.judgmentProp(formInline_prop)) {
                return;
            }

            formData.amount = parseFloat(this.masterToChildForm.amount).toFixed(2) * 100;

            if (!this.djOperateMoney(formData.amount)) return false;
            this.formControlBtn.mastertochild_boolean = true;
            let acountsUrl = URL.api + ROUTES.POST.cash.childOrmaster;
            this.$http.post(acountsUrl, JSON.stringify(formData), URLCONFIG).then(res => {
                if (res.data.state == 0 && res.data.data) {
                    this.$message({ message: '保存成功', type: 'success' });
                    this.doQuery(1);
                } else {
                    this.$message({ message: res.data.message, type: 'error' });
                }
                this.formControlBtn.mastertochild_boolean = false;
            }).catch(function (err) {
                //                   console.log(err)
            });
        },
        // 判断操作金额
        djOperateMoney(money) {
            if (parseInt(money) > 999999999) {
                this.$message({ message: '操作金额不得大于9999999', type: 'error' });
                return false;
            } else {
                return true;
            }
        }
    },
    computed: {},
    mounted() {},
    created() {
        this.init();
    },
    activated() {
        setTimeout(() => {
            this.init();
        }, 500);
    }
});

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        // 判断非空正整数
        var checkNumber = function (rule, value, callback) {
            if (typeof value != 'number') {
                callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
            } else if (Math.sign(value) === -1) {
                callback(new Error(LANG['不能小于0'] || '不能小于0'));
            } else {
                callback();
            }
        };
        // 判断可非空正整数
        var checkPositiveInteger = function (rule, value, callback) {
            if (value === '') {
                callback();
            } else {
                if (typeof value != 'number') {
                    callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
                } else if (Math.sign(value) === -1) {
                    callback(new Error(LANG['不能小于0'] || '不能小于0'));
                } else {
                    callback();
                }
            }
        };
        // 非空验证
        var notNullString = function (rule, value, callback) {
            if (value === '') {
                callback(new Error(LANG['请输入纯备注'] || '请输入纯备注'));
            } else {
                callback();
            }
        };
        return {
            LANG,
            //手动增加余额
            manualAddMoney: {
                status: '1',
                name: "",
                levels: [],
                amount: '',
                statement: '',
                memo: ''
            },
            manualAddMoneyRules: {
                amount: [{ validator: checkNumber, required: true, trigger: "blur" }],
                statement: [{ validator: checkPositiveInteger, trigger: "blur" }],
                memo: [{ validator: notNullString, required: true, trigger: "blur" }]
            },
            //手动减少余额
            manualReduceMoney: {
                status: '1',
                name: '',
                amount: '',
                memo: '',
                levels: []
            },
            manualReduceMoneyRules: {
                amount: [{ validator: checkNumber, required: true, trigger: "blur" }],
                memo: [{ validator: notNullString, required: true, trigger: "blur" }]
            },
            //手动返水
            backwater: {
                status: '1',
                name: '',
                amount: '',
                statement: '',
                memo: '',
                levels: []
            },
            backwaterRules: {
                amount: [{ validator: checkNumber, required: true, trigger: "blur" }],
                statement: [{ validator: checkPositiveInteger, trigger: "blur" }],
                memo: [{ validator: notNullString, required: true, trigger: "blur" }]
            },
            //手动发放优惠
            reduceFavorable: {
                name: '',
                amount: '',
                statement: '',
                aid: '',
                memo: '',
                status: '1',
                levels: []
            },
            reduceFavorableRules: {
                amount: [{ validator: checkNumber, required: true, trigger: "blur" }],
                aid: [{ required: true, message: LANG['请选择优惠活动名称'] || '请选择优惠活动名称', trigger: 'change' }],
                statement: [{ validator: checkPositiveInteger, trigger: "blur" }],
                memo: [{ validator: notNullString, required: true, trigger: "blur" }]
            },
            formTitle: '',
            discountNameList: [],
            reduceFavorableList: [],
            //文件上传
            fileList3: [],
            // 会员层级
            levellist: [],
            loading: false
        };
    },
    methods: {
        init() {
            this.formTitle = "0";
            //获取优惠活动名称
            // let activeUrl = URL.api + ROUTES.GET.actives.short;
            let activeUrl = URL.api + '/active.short';
            this.$http.get(activeUrl, URLCONFIG).then(res => {
                let model = res.data.data;
                this.reduceFavorableList = [];
                for (let i in model) {
                    this.reduceFavorableList.push({
                        "label": model[i].name,
                        "value": model[i].id
                    });
                }
            }).catch(function (err) {
                //                    console.log(err)
            });
            // 获取会员层级
            this.$http.get(URL.api + ROUTES.GET.user.level.list, URLCONFIG).then(res => {
                let model = res.data.data;
                for (let i in model) {
                    this.levellist.push({
                        "label": parseInt(model[i].id),
                        "value": model[i].name
                    });
                }
            }).catch(function (err) {
                //                    console.log(err)
            });
        },
        //手动增加余额
        doManualAddMoney() {
            this.formTitle = "0";
            this.manualAddMoney = {
                status: '1',
                name: '',
                levels: [],
                amount: '',
                statement: '',
                memo: ''
            };
        },
        //手动减少余额
        doManualReduceMoney() {
            this.formTitle = "1";
            this.manualReduceMoney = {
                status: '1',
                name: '',
                amount: '',
                memo: '',
                levels: []
            };
        },
        //手动返水
        doBackwater() {
            this.formTitle = "2";
            this.backwater = {
                status: '1',
                name: '',
                amount: '',
                statement: '',
                memo: '',
                levels: []
            };
        },
        //手动发放优惠
        doReduceFavorable() {
            this.formTitle = "3";
            this.reduceFavorable = {
                name: '',
                amount: '',
                statement: '',
                aid: '',
                memo: '',
                status: '1',
                levels: []
            };
        },
        // 这个函数用来过滤数组内的空字符串
        filter_null(arr) {
            let arr_list = [];
            for (let i of arr) {
                if (i != '') {
                    arr_list.push(i);
                }
            }
            return arr_list;
        },
        //保存
        doCash() {
            let url = '',
                query = {};
            if (this.formTitle == '0') {
                // 手动增加余额
                url = URL.api + ROUTES.POST.cash.allincrease;
                if (this.manualAddMoney.status == '1') {
                    query.users = this.manualAddMoney.name ? this.filter_null(this.manualAddMoney.name.split(',')) : [];
                } else {
                    query.levels = this.manualAddMoney.levels;
                }
                query.role = 1;
                query.amount = parseFloat(this.manualAddMoney.amount) * 100;
                query.withdraw_bet = parseFloat(this.manualAddMoney.statement) * 100;
                query.memo = this.manualAddMoney.memo;
            } else if (this.formTitle == '1') {
                // 手动减少余额
                url = URL.api + ROUTES.POST.cash.alldecrease;
                if (this.manualReduceMoney.status == '1') {
                    query.users = this.manualReduceMoney.name ? this.filter_null(this.manualReduceMoney.name.split(',')) : [];
                } else {
                    query.levels = this.manualReduceMoney.levels;
                }
                query.role = 1;
                query.amount = parseFloat(this.manualReduceMoney.amount) * 100;
                query.memo = this.manualReduceMoney.memo;
            } else if (this.formTitle == '2') {
                // 手动反水
                url = URL.api + ROUTES.POST.cash.allrebate;
                if (this.backwater.status == '1') {
                    query.users = this.backwater.name ? this.filter_null(this.backwater.name.split(',')) : [];
                } else {
                    query.levels = this.backwater.levels;
                }
                query.role = 1;
                query.amount = parseFloat(this.backwater.amount) * 100;
                query.withdraw_bet = parseFloat(this.backwater.statement) * 100;
                query.memo = this.backwater.memo;
            } else {
                // 手动发放优惠
                url = URL.api + ROUTES.POST.cash.allactivity;
                if (this.reduceFavorable.status == '1') {
                    query.users = this.reduceFavorable.name ? this.filter_null(this.reduceFavorable.name.split(',')) : [];
                } else {
                    query.levels = this.reduceFavorable.levels;
                }
                query.role = 1;
                query.amount = parseFloat(this.reduceFavorable.amount) * 100;
                query.withdraw_bet = parseFloat(this.reduceFavorable.statement) * 100;
                query.aid = this.reduceFavorable.aid;
                query.memo = this.reduceFavorable.memo;
                // 优先判断是否选中活动
                if (!query.aid) {
                    this.$message.error(LANG['请选择优惠活动！'] || '请选择优惠活动！');
                    return;
                }
                // 后台记录参数需要加上活动名称，匹配当前活动id的活动名称
                const enough_action = action => action.value == query.aid;
                let action_list = this.reduceFavorableList.filter(enough_action);
                query.action_name = action_list[0]['label'];
            }
            // 判断是否缺少必要字段
            if (query.users && !query.users.length || query.levels && !query.levels.length) {
                this.$message.error(LANG['用户名或层级不能为空！'] || '用户名和层级不能为空！');
                return;
            }
            if (!query.amount) {
                this.$message.error(LANG['金额不能为空！'] || '金额不能为空！');
                return;
            }
            if (!query.memo) {
                this.$message.error(LANG['备注不能为空！'] || '备注不能为空！');
                return;
            }
            // if (this.formTitle == '0' || this.formTitle == '2' || this.formTitle == '3') {
            //     if (!query.withdraw_bet) {
            //         this.$message.error(LANG['取款条件只能输入金额！'] || '取款条件只能输入金额！');
            //         return;
            //     }
            // }
            // if (this.formTitle == '3') {
            //     if (!query.aid) {
            //         this.$message.error(LANG['优惠活动规则不能为空！'] || '优惠活动规则不能为空！');
            //         return;
            //     }
            // }
            if (query.amount > 999999999) {
                this.$message.error(LANG['操作金额不得大于9999999'] || '操作金额不得大于9999999');
                return;
            }
            this.loading = true;
            this.$http.post(url, query, URLCONFIG).then(res => {
                if (res.data.data && res.data.state == 0) {
                    // if (res.data.data.fail.length > 0) {
                    //     let fail_str = res.data.data.fail.join(',');
                    //     this.$message.error(LANG[fail_str + '保存失败！'] || fail_str + '保存失败！');
                    // } else {
                    //     this.$message.success(LANG['恭喜您，保存成功！'] || '恭喜您，保存成功！');
                    // }
                    this.$message.success(LANG['操作成功！'] || '操作成功！');
                } else {
                    this.$message.error(LANG[res.data.message] || res.data.message);
                }
                this.loading = false;
            }).catch(error => {
                //                    console.log(error);
                this.loading = false;
            });
        },
        //重置
        doRest() {},
        //保存
        doCashAdd() {
            this.$message.success(LANG['恭喜您，手动增加余额成功！'] || '恭喜您，手动增加余额成功！');
        },
        //重置
        doRestAdd() {},
        handleChange(file, fileList) {
            this.fileList3 = fileList.slice(-3);
        }
    },
    created() {
        this.init();
    }
});

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tableGrid_vue__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tableGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_tableGrid_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_formEdit_vue__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_formEdit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_formEdit_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            LANG,
            updated: false,
            //表格列数据
            columnsUrl: "",
            //表格数据
            tableUrl: "",
            //搜索相关
            searchConfig: [{ "prop": "user_type", "value": "", "type": "select", "label": "体系", "list": [{ "label": "用户", "value": "1" }, { "label": "代理", "value": "2" }] }, { "prop": "username", "value": "", "type": "text", "label": "用户名" }, { "type": "dateTimeGroup", "label": "操作时间", "prop": [{ "prop": "time_begin", "value": "", "label": "开始时间" }, { "prop": "time_end", "value": "", "label": "结束时间" }] }, { "prop": "type", "value": "", "label": "交易类型", "type": "select", "list": [] }, { "prop": "admin_user", "value": "", "label": "操作者", "type": "text" }],
            type: "search",
            labelWidth: "90px",
            formVisible: {
                state: false
            },
            //是否编辑数据
            isEdit: {
                state: false
            },
            baseUrl: "",
            allData: "",
            // 备注弹窗
            dialogVisibleMemo: false,
            // 备注内容
            memoText: '',
            nowId: -1,
            // 修改打码量
            dialog_show_edit: false,
            show_edit_title: '',
            withdraw_bet_coupon: 0,
            withdraw_bet_principal: 0,
            from_edit_money: {},
            popKey: '',
            updateKeys: ''
        };
    },
    components: {
        tablegrid: __WEBPACK_IMPORTED_MODULE_0__components_tableGrid_vue___default.a,
        formEdit: __WEBPACK_IMPORTED_MODULE_1__components_formEdit_vue___default.a
    },
    methods: {
        init() {
            this.updateKeys = '';
            this.columnsUrl = "static/json/manual/columns.json";
            this.baseUrl = URL.api + '/cash/manual.records';
            if (this.$route.query && this.$route.query.day_begin) {
                let query = {};
                for (let k in this.$route.query) {
                    if (k != 'history') {
                        query[k] = this.$route.query[k];
                    }
                }
                setTimeout(() => {
                    this.updateKeys = 'time_begin,' + (query.day_begin || '') + ',time_end,' + (query.day_end || '') + ',user_type,' + (query.type || '') + ',username,' + (query.member_name || '');
                    this.tableUrl = this.baseUrl + this.addSearch(query);
                }, 500);
            } else {
                this.tableUrl = URL.api + '/cash/manual.records';
            }
            // 获取存提交易类型
            this.$http.get(URL.api + ROUTES.GET.cash.record.type, URLCONFIG).then(res => {
                if (res.data.data && res.data.state == 0) {
                    let model = res.data.data || [];
                    for (let i in model) {
                        this.searchConfig[3].list.push({
                            "label": model[i].name,
                            "value": parseInt(model[i].id, 10)
                        });
                    }
                }
            }).catch(error => {});
        },
        //表格内按钮事件
        doHandle(row) {
            this.formType = "";
            this.updated = false;
            this.nowId = row.row.id;
            switch (row.fn) {
                case "openUserInformation":
                    this.openUserInformation(row.row);
                    break;
                case "doWriteRemarks":
                    // 编辑
                    this.doWriteRemarks(row.row);
                    break;
                case "updateNormality":
                    // 修改常态打码量
                    this.updateNormality(row.row);
                    break;
                case "updateDiscount":
                    // 修改优惠打码量
                    this.updateDiscount(row.row);
                    break;
            }
        },
        // 修改常态打码量
        updateNormality(row) {
            if (row.isfixBet) {
                this.show_edit_title = '修改用户：' + row.username + '的常态打码量';
                this.dialog_show_edit = true;
                this.withdraw_bet_principal = FORMATMONEY(row.withdraw_bet_principal);
                this.withdraw_bet_coupon = '';
            } else {
                this.$message.error(LANG['该记录已出款或免稽核额度被清零，不可修改'] || '该记录已出款或免稽核额度被清零，不可修改');
            }
        },
        // 修改优惠打码量
        updateDiscount(row) {
            if (row.isfixBet) {
                this.show_edit_title = '修改用户：' + row.username + '的优惠打码量';
                this.dialog_show_edit = true;
                this.withdraw_bet_coupon = FORMATMONEY(row.withdraw_bet_coupon);
                this.withdraw_bet_principal = '';
            } else {
                this.$message.error(LANG['该记录已出款或免稽核额度被清零，不可修改'] || '该记录已出款或免稽核额度被清零，不可修改');
            }
        },
        // 修改打码量
        saveDiscount() {
            let key = this.withdraw_bet_coupon === '' ? 'withdraw_bet_principal' : 'withdraw_bet_coupon';
            let _this = this;
            this.updated = false;
            let params = {};
            params[key] = FORMATMultiplyMoney(this.from_edit_money[key]);
            this.dialog_show_edit = false;
            let msg = key === 'withdraw_bet_coupon' ? '优惠打码量' : '常态打码量';
            this.$http.patch(URL.api + '/cash/manual.comment/' + parseInt(this.nowId), params, URLCONFIG).then(res => {
                if (res.data.state === 0 && res.data.data) {
                    this.updated = true;
                    this.$message.success(msg + (LANG['打码量修改成功'] || '打码量修改成功'));
                } else if (res.data.state) {
                    this.$message.error(msg + (LANG['打码量修改失败'] || '打码量修改失败') + res.data.message);
                } else {
                    this.$message.error(msg + (LANG['打码量修改失败'] || '打码量修改失败'));
                }
                this.$refs.from_edit_money.resetFields();
            });
        },
        doWriteRemarks(row) {
            this.dialogVisibleMemo = true;
            this.memoText = row.memo;
        },
        //接收快捷日期数据
        doQuery(obj) {
            this.tableUrl = this.baseUrl + this.addSearch(obj.item);
        },
        //重置查询
        resetForm() {
            if (this.$route.query && this.$route.query.day_begin) {
                let query = {};
                for (let k in this.$route.query) {
                    if (k != 'history') {
                        query[k] = this.$route.query[k];
                    }
                }
                setTimeout(() => {
                    this.updateKeys = 'time_begin,' + (query.day_begin || '') + ',time_end,' + (query.day_end || '') + ',user_type,' + (query.type || '') + ',username,' + (query.member_name || '');
                    this.tableUrl = this.baseUrl + this.addSearch(query);
                }, 500);
            } else {
                this.tableUrl = this.baseUrl;
            }
        },
        openUserInformation(row) {
            // 根据user_type的类型来判断跳转的是会员或代理
            if (row.user_type == '1') {
                this.$router.push({ path: "/memberManagement", query: { name: row.username } });
            } else {
                this.$router.push({ path: "/agentAccount", query: { agent_name: row.username } });
            }
        },
        // 小记和总记
        getTableData(obj) {
            this.allData = obj.allData.attributes;
        },
        validatorNumber(rule, value, callback) {
            //检测值是不是为空
            if (!value) {
                callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                return;
            }
            if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value.toString().replace(/^\s+|\s+$/, ''))) {
                if (isNaN(value) || !!value.replace(/^\s+|\s+$/, '') == false) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    callback(new Error(LANG['小数点后不超过两位'] || '小数点后不超过两位'));
                }
            } else {
                if (value < 0) {
                    callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                } else if (value > 9999999) {
                    callback(new Error(LANG['输入金额不能大于9999999'] || '输入金额不能大于9999999'));
                } else {
                    callback();
                }
            }
        },
        //修改备注内容
        editMemoSubmit() {
            let _this = this;
            this.updated = false;
            let params = {
                memo: this.memoText
            };
            this.dialogVisibleMemo = false;
            this.$http.patch(URL.api + '/cash/manual.comment/' + parseInt(this.nowId), params, URLCONFIG).then(res => {
                if (res.data.state === 0 && res.data.data) {
                    this.updated = true;
                    this.$message.success(LANG['备注写入成功'] || '备注写入成功');
                } else {
                    this.$message.error(LANG['备注写入失败'] || '备注写入失败');
                }
            });
        }
    },
    created() {
        this.init();
    }
});

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__artificialTransfer_vue__ = __webpack_require__(933);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__artificialTransfer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__artificialTransfer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__batchSave_vue__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__batchSave_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__batchSave_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_vue__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__history_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            LANG,
            activeName: 'second',
            //点击的是哪个选项Nav
            itemIndex: '1',
            seachData: {}
        };
    },
    components: {
        artificialtransfer: __WEBPACK_IMPORTED_MODULE_0__artificialTransfer_vue___default.a,
        batchSave: __WEBPACK_IMPORTED_MODULE_1__batchSave_vue___default.a,
        history: __WEBPACK_IMPORTED_MODULE_2__history_vue___default.a
    },
    methods: {
        init() {
            if (this.$route.query) {
                let query = this.$route.query;
                for (let k in query) {
                    this.seachData[k] = query[k];
                }
                if (this.$route.query.history) {
                    this.handleClick('3');
                }
            }
        },
        handleClick(i) {
            this.itemIndex = i;
        }
    },
    computed: {},
    mounted() {
        //            $('.tabsNavItem:first').addClass('active');
        //            $('.tabsNavItem').click(function(){
        //                $(this).addClass('active').siblings('.tabsNavItem').removeClass('active');
        //            })
    },
    created() {
        this.init();
    },
    activated() {
        //            this.handleClick('1');
        //            $('.tabsNavItem:first').addClass('active').siblings('.tabsNavItem').removeClass('active');
        this.init();
    }
});

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "#manual_new .tabsNav[data-v-3e0da53a]{border-bottom:1px solid #d3dce6;height:48px;line-height:48px;box-sizing:border-box}#manual_new .tabsNav .tabsNavItem[data-v-3e0da53a]{height:48px;line-height:48px;max-width:180px;cursor:pointer}#manual_new .active[data-v-3e0da53a]{border-bottom:3px solid #20a0ff;color:#20a0ff}", ""]);

// exports


/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, ".page[data-v-6711d1fe]{position:relative}.search[data-v-6711d1fe]{margin-bottom:10px}.search .el-form-item__label[data-v-6711d1fe]{width:80px}.search .el-form-item[data-v-6711d1fe]{width:200px;float:left;margin-bottom:1px}.search .el-form-item.lg[data-v-6711d1fe]{width:330px;float:left}.search .el-form .el-col .line[data-v-6711d1fe]{text-align:center}.search .el-form .formbtn[data-v-6711d1fe]{float:left;margin-left:10px;padding-top:5px}.search .el-form .outexcel[data-v-6711d1fe]{position:absolute;top:0;right:10px}.editform[data-v-6711d1fe]{border:1px solid #ccc;padding:20px}.editform .el-form .formbtn[data-v-6711d1fe]{margin-left:100px;padding-top:5px}.page .el-tag-maintenance[data-v-6711d1fe]{margin-left:10px}", ""]);

// exports


/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "#batchSave .tabBtn{width:80%;margin:10px 10%}#batchSave .mainLeft{background:#d3dce6}#batchSave .mainRight{border:1px solid #d3dce6;padding:20px}#batchSave .mainRight h3{margin-bottom:20px}", ""]);

// exports


/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(607);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("68e673f3", content, true);

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(616);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("5a7ffeec", content, true);

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(650);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("4f28d1e7", content, true);

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(677);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("39c55f4a", content, true);

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(815)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(441),
  /* template */
  __webpack_require__(1043),
  /* scopeId */
  "data-v-6711d1fe",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(842)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(442),
  /* template */
  __webpack_require__(1070),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(772)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(443),
  /* template */
  __webpack_require__(998),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 998:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('formEdit', {
    attrs: {
      "formVisible": _vm.formVisible,
      "formConfig": _vm.searchConfig,
      "type": _vm.type,
      "labelWidth": _vm.labelWidth,
      "isEdit": _vm.isEdit,
      "showAdd": false,
      "updateKeys": _vm.updateKeys,
      "initDate": true
    },
    on: {
      "do-query": _vm.doQuery,
      "reset-form": _vm.resetForm
    }
  }), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('tablegrid', {
    attrs: {
      "columnsUrl": _vm.columnsUrl,
      "tableUrl": _vm.tableUrl,
      "tableCheck": false,
      "pageSet": true,
      "tableIndex": false,
      "updated": _vm.updated,
      "getData": true,
      "isCreated": true
    },
    on: {
      "get-table-data": _vm.getTableData,
      "do-handle": _vm.doHandle
    }
  }, [(_vm.allData) ? _c('tr', {
    attrs: {
      "slot": "other"
    },
    slot: "other"
  }, [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s((parseFloat(_vm.allData.page_money_sum) / 100).toFixed(2)))])]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": ""
    }
  }, [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s((parseFloat(_vm.allData.page_coupon_sum) / 100).toFixed(2)))])]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "8"
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.allData) ? _c('tr', {
    attrs: {
      "slot": "other"
    },
    slot: "other"
  }, [_c('td', {
    attrs: {
      "colspan": "4"
    }
  }, [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.LANG[' 总计'] || '总计'))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s((parseFloat(_vm.allData.total_money_sum) / 100).toFixed(2)))])]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": ""
    }
  }, [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s((parseFloat(_vm.allData.total_coupon_sum) / 100).toFixed(2)))])]), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "8"
    }
  })]) : _vm._e()])], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": "当前用户的备注信息:",
      "visible": _vm.dialogVisibleMemo,
      "size": "tiny"
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogVisibleMemo = $event
      }
    }
  }, [_c('el-form', [_c('el-form-item', [(_vm.memoText == '' || _vm.memoText == undefined) ? _c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 2,
      "placeholder": "暂无备注信息"
    },
    model: {
      value: (_vm.memoText),
      callback: function($$v) {
        _vm.memoText = $$v
      },
      expression: "memoText"
    }
  }) : _c('el-input', {
    attrs: {
      "type": "textarea",
      "rows": 2,
      "placeholder": _vm.memoText
    },
    model: {
      value: (_vm.memoText),
      callback: function($$v) {
        _vm.memoText = $$v
      },
      expression: "memoText"
    }
  })], 1)], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialogVisibleMemo = false
      }
    }
  }, [_vm._v("关 闭")]), _vm._v(" "), _c('el-button', {
    staticClass: "formSave",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.editMemoSubmit
    }
  }, [_vm._v("修 改")])], 1)], 1)], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    attrs: {
      "title": _vm.show_edit_title,
      "visible": _vm.dialog_show_edit,
      "width": "'120px'",
      "size": "tiny",
      "center": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.dialog_show_edit = $event
      }
    }
  }, [(parseInt(_vm.withdraw_bet_principal) >= 0) ? _c('span', {
    staticClass: "tCent w100"
  }, [_vm._v(_vm._s(_vm.LANG['原常态打码量'] || '原常态打码量') + " ：" + _vm._s(_vm.withdraw_bet_principal))]) : _vm._e(), _vm._v(" "), (parseInt(_vm.withdraw_bet_coupon) >= 0) ? _c('span', {
    staticClass: "tCent w100"
  }, [_vm._v(_vm._s(_vm.LANG['原优惠打码量'] || '原优惠打码量') + " ：" + _vm._s(_vm.withdraw_bet_coupon))]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "mt10"
  }, [_c('el-form', {
    ref: "from_edit_money",
    attrs: {
      "model": _vm.from_edit_money,
      "label-width": "100px"
    }
  }, [(parseInt(_vm.withdraw_bet_principal) >= 0) ? _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['现常态打码量'] || '现常态打码量' + ':',
      "rules": [{
        validator: _vm.validatorNumber,
        trigger: 'blur'
      }],
      "prop": "withdraw_bet_principal"
    }
  }, [_c('el-input', {
    staticClass: "intW",
    model: {
      value: (_vm.from_edit_money.withdraw_bet_principal),
      callback: function($$v) {
        _vm.$set(_vm.from_edit_money, "withdraw_bet_principal", $$v)
      },
      expression: "from_edit_money.withdraw_bet_principal"
    }
  })], 1) : _vm._e(), _vm._v(" "), (parseInt(_vm.withdraw_bet_coupon) >= 0) ? _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['现优惠打码量'] || '现优惠打码量' + ':',
      "rules": [{
        validator: _vm.validatorNumber,
        trigger: 'blur'
      }],
      "prop": "withdraw_bet_coupon"
    }
  }, [_c('el-input', {
    staticClass: "intW",
    model: {
      value: (_vm.from_edit_money.withdraw_bet_coupon),
      callback: function($$v) {
        _vm.$set(_vm.from_edit_money, "withdraw_bet_coupon", $$v)
      },
      expression: "from_edit_money.withdraw_bet_coupon"
    }
  })], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.dialog_show_edit = false
      }
    }
  }, [_vm._v("取 消")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.saveDiscount
    }
  }, [_vm._v("修 改")])], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ })

});