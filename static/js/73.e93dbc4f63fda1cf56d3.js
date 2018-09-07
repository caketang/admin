webpackJsonp([73],{

/***/ 1023:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "w100",
    attrs: {
      "id": "activeMode"
    }
  }, [_c('el-col', {
    staticClass: "activeModeForm",
    attrs: {
      "span": 14,
      "offset": 5
    }
  }, [_c('el-form', {
    ref: "form",
    staticClass: "mt20",
    attrs: {
      "model": _vm.modeData,
      "rules": _vm.rules,
      "label-width": "140px"
    }
  }, [_c('el-col', {
    staticClass: "Layout",
    attrs: {
      "span": 24
    }
  }, [_c('h3', {
    staticClass: "tCent",
    domProps: {
      "textContent": _vm._s(_vm.LANG['规则设置'] || '规则设置')
    }
  }), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "优惠活动名称",
      "prop": "name"
    }
  }, [_c('el-input', {
    staticClass: "w80",
    attrs: {
      "placeholder": _vm.placename
    },
    model: {
      value: (_vm.modeData.name),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "name", $$v)
      },
      expression: "modeData.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "优惠类型",
      "prop": "type_id"
    }
  }, [_c('el-select', {
    staticClass: "w80",
    attrs: {
      "placeholder": "请选择类型"
    },
    model: {
      value: (_vm.modeData.type_id),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "type_id", $$v)
      },
      expression: "modeData.type_id"
    }
  }, _vm._l((_vm.type_idList), function(item, index) {
    return _c('el-option', {
      key: item.index,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), (_vm.seachData.type == 'add') ? _c('el-form-item', {
    attrs: {
      "label": "发放奖金",
      "prop": "rule.issueMode"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.modeData.rule.issueMode),
      callback: function($$v) {
        _vm.$set(_vm.modeData.rule, "issueMode", $$v)
      },
      expression: "modeData.rule.issueMode"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": "auto"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['自动发放'] || '自动发放')
    }
  })]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio ml20",
    attrs: {
      "label": "manual"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['手动发放'] || '手动发放')
    }
  })])], 1)], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "优惠规则",
      "required": ""
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['连续签到'] || '连续签到')
    }
  }), _vm._v(" "), _c('el-form-item', {
    staticClass: "to-inline-block",
    attrs: {
      "prop": "rule.rule.signDays"
    }
  }, [_c('el-input', {
    staticClass: "intW",
    model: {
      value: (_vm.modeData.rule.rule.signDays),
      callback: function($$v) {
        _vm.$set(_vm.modeData.rule.rule, "signDays", $$v)
      },
      expression: "modeData.rule.rule.signDays"
    }
  })], 1), _vm._v(" "), _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['天'] || '天')
    }
  }), _vm._v(" "), _c('el-form-item', {
    staticClass: "to-inline-block ml20",
    attrs: {
      "prop": "rule.rule.prize",
      "rules": [{
        validator: _vm.validatorNumber,
        trigger: 'blur'
      }]
    }
  }, [_c('el-input', {
    staticClass: "intW",
    model: {
      value: (_vm.modeData.rule.rule.prize),
      callback: function($$v) {
        _vm.$set(_vm.modeData.rule.rule, "prize", $$v)
      },
      expression: "modeData.rule.rule.prize"
    }
  })], 1), _vm._v(" "), _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['元'] || '元')
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "领取限制"
    }
  }, [_c('el-radio-group', {
    on: {
      "change": function($event) {
        _vm.limitChange()
      }
    },
    model: {
      value: (_vm.get),
      callback: function($$v) {
        _vm.get = $$v
      },
      expression: "get"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": "1"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['限定次数'] || '限定次数')
    }
  }), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "display": "inline-block"
    },
    attrs: {
      "prop": "rule.limit_times",
      "rules": [{
        validator: _vm.validatorLimitNumber,
        trigger: 'blur'
      }]
    }
  }, [_c('el-input', {
    staticClass: "intW",
    model: {
      value: (_vm.modeData.rule.limit_times),
      callback: function($$v) {
        _vm.$set(_vm.modeData.rule, "limit_times", $$v)
      },
      expression: "modeData.rule.limit_times"
    }
  })], 1)], 1), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": "2"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['无限定次数'] || '无限定次数')
    }
  })])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "有效会员层级",
      "prop": "checkedDefut"
    }
  }, [_c('div', {
    staticStyle: {
      "margin": "15px 0"
    }
  }), _vm._v(" "), _c('el-checkbox-group', {
    on: {
      "change": _vm.handleCheckedDefutChange
    },
    model: {
      value: (_vm.modeData.checkedDefut),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "checkedDefut", $$v)
      },
      expression: "modeData.checkedDefut"
    }
  }, _vm._l((_vm.vipList), function(item, index) {
    return _c('el-checkbox', {
      key: index,
      attrs: {
        "label": item.label,
        "name": "type"
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.seachData.type == 'add'),
      expression: "seachData.type=='add'"
    }],
    attrs: {
      "label": "发放时间",
      "required": ""
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['完成后第'] || '完成后第')
    }
  }), _vm._v(" "), _c('el-form-item', {
    staticClass: "to-inline-block",
    attrs: {
      "prop": "rule.issueTime",
      "rules": [{
        validator: _vm.validatorNumber,
        trigger: 'blur'
      }]
    }
  }, [_c('el-input', {
    staticClass: "intW",
    model: {
      value: (_vm.modeData.rule.issueTime),
      callback: function($$v) {
        _vm.$set(_vm.modeData.rule, "issueTime", $$v)
      },
      expression: "modeData.rule.issueTime"
    }
  })], 1), _vm._v(" "), _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['天发放'] || '天发放')
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "提款要求",
      "prop": "rule.withdrawRequire"
    }
  }, [_c('el-radio-group', {
    on: {
      "change": _vm.withdrawRequireChange
    },
    model: {
      value: (_vm.modeData.rule.withdrawRequire),
      callback: function($$v) {
        _vm.$set(_vm.modeData.rule, "withdrawRequire", $$v)
      },
      expression: "modeData.rule.withdrawRequire"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": "times"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['倍数'] || '倍数')
    }
  }), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "display": "inline-block"
    },
    attrs: {
      "prop": "rule.withdrawRequireVal",
      "rules": [{
        validator: _vm.validatorTimeNumber,
        trigger: 'blur'
      }]
    }
  }, [_c('el-input', {
    staticClass: "intW",
    model: {
      value: (_vm.modeData.rule.withdrawRequireVal),
      callback: function($$v) {
        _vm.$set(_vm.modeData.rule, "withdrawRequireVal", $$v)
      },
      expression: "modeData.rule.withdrawRequireVal"
    }
  })], 1)], 1), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": "bet"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['固定投注流水'] || '固定投注流水')
    }
  }), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "display": "inline-block"
    },
    attrs: {
      "prop": "rule.withdrawRequireVal1",
      "rules": [{
        validator: _vm.validatorBetNumber,
        trigger: 'blur'
      }]
    }
  }, [_c('el-input', {
    staticClass: "intW",
    model: {
      value: (_vm.modeData.rule.withdrawRequireVal1),
      callback: function($$v) {
        _vm.$set(_vm.modeData.rule, "withdrawRequireVal1", $$v)
      },
      expression: "modeData.rule.withdrawRequireVal1"
    }
  })], 1)], 1), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": "no"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['无取款要求'] || '无取款要求')
    }
  })])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "状态"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": "enabled"
    },
    model: {
      value: (_vm.modeData.status),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "status", $$v)
      },
      expression: "modeData.status"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['启用'] || '启用')
    }
  })]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": "disabled"
    },
    model: {
      value: (_vm.modeData.status),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "status", $$v)
      },
      expression: "modeData.status"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['停用'] || '停用')
    }
  })])], 1)], 1), _vm._v(" "), _c('el-col', {
    staticClass: "Layout",
    attrs: {
      "span": 24
    }
  }, [_c('h3', {
    staticClass: "tCent",
    domProps: {
      "textContent": _vm._s(_vm.LANG['内容设置'] || '内容设置')
    }
  }), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "优惠活动标题",
      "prop": "title"
    }
  }, [_c('el-input', {
    staticClass: "w80",
    model: {
      value: (_vm.modeData.title),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "title", $$v)
      },
      expression: "modeData.title"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "语言",
      "prop": "language_id"
    }
  }, [_c('el-select', {
    staticClass: "w80",
    attrs: {
      "placeholder": "请选择类型",
      "disabled": ""
    },
    on: {
      "change": _vm.changeLanguage
    },
    model: {
      value: (_vm.modeData.language_id),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "language_id", $$v)
      },
      expression: "modeData.language_id"
    }
  }, _vm._l((_vm.languageList), function(item, index) {
    return _c('el-option', {
      key: index,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "优惠活动描述",
      "prop": "description"
    }
  }, [_c('el-input', {
    staticClass: "w80",
    attrs: {
      "type": "textarea"
    },
    model: {
      value: (_vm.modeData.description),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "description", $$v)
      },
      expression: "modeData.description"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "图片上传",
      "prop": "cover"
    }
  }, [_c('el-input', {
    staticStyle: {
      "display": "none"
    },
    model: {
      value: (_vm.modeData.cover),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "cover", $$v)
      },
      expression: "modeData.cover"
    }
  }), _vm._v(" "), _c('upload', {
    attrs: {
      "uploadUrl": _vm.uploadUrl,
      "keys": _vm.keys,
      "isInit": _vm.imgInit,
      "fileNum": 1,
      "arrList": _vm.modeData.arrList,
      "imgResolution": '460*180'
    },
    on: {
      "response": _vm.doSaveFile
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "排序",
      "prop": "sort"
    }
  }, [_c('el-input', {
    staticClass: "w80",
    attrs: {
      "type": "number"
    },
    model: {
      value: (_vm.modeData.sort),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "sort", $$v)
      },
      expression: "modeData.sort"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "打开方式",
      "prop": "open_mode"
    }
  }, [_c('el-radio-group', {
    on: {
      "change": _vm.radioChange
    },
    model: {
      value: (_vm.modeData.open_mode),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "open_mode", $$v)
      },
      expression: "modeData.open_mode"
    }
  }, [_c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": "2"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['新窗口打开'] || '新窗口打开')
    }
  })]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": "3"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['本页面跳转'] || '本页面跳转')
    }
  })]), _vm._v(" "), _c('el-radio', {
    staticClass: "radio",
    attrs: {
      "label": "4"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['下拉展开'] || '下拉展开')
    }
  })])], 1)], 1), _vm._v(" "), (_vm.linkShow) ? _c('el-form-item', {
    attrs: {
      "label": "链接",
      "prop": "link"
    }
  }, [_c('el-input', {
    staticClass: "w80",
    model: {
      value: (_vm.modeData.link),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "link", $$v)
      },
      expression: "modeData.link"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.pcshow) ? _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['PC活动规则编辑'] || 'PC活动规则编辑',
      "prop": "content"
    }
  }, [_c('el-input', {
    staticStyle: {
      "display": "none"
    },
    model: {
      value: (_vm.modeData.content),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "content", $$v)
      },
      expression: "modeData.content"
    }
  }), _vm._v(" "), _c('markdownEdit', {
    staticClass: "w80",
    attrs: {
      "id": 'pcmd'
    },
    model: {
      value: (_vm.modeData.content),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "content", $$v)
      },
      expression: "modeData.content"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.mbshow) ? _c('el-form-item', {
    staticStyle: {
      "z-index": "9"
    },
    attrs: {
      "label": _vm.LANG['H5活动规则编辑'] || 'H5活动规则编辑',
      "prop": "content2"
    }
  }, [_c('el-input', {
    staticStyle: {
      "display": "none"
    },
    model: {
      value: (_vm.modeData.content2),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "content2", $$v)
      },
      expression: "modeData.content2"
    }
  }), _vm._v(" "), _c('markdownEdit', {
    staticClass: "w80",
    attrs: {
      "id": 'content2'
    },
    model: {
      value: (_vm.modeData.content2),
      callback: function($$v) {
        _vm.$set(_vm.modeData, "content2", $$v)
      },
      expression: "modeData.content2"
    }
  })], 1) : _vm._e()], 1)], 1), _vm._v(" "), (_vm.seachData.type == 'add') ? _c('el-col', {
    staticClass: "tCent",
    attrs: {
      "span": 24
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true
    },
    on: {
      "click": function($event) {
        _vm.goBack(_vm.type = 'add')
      }
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['取消生成'] || '取消生成')
    }
  })]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.doSubmit(_vm.type = 'add')
      }
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['生成优惠'] || '生成优惠')
    }
  })])], 1) : _c('el-col', {
    staticClass: "tCent",
    attrs: {
      "span": 24
    }
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true
    },
    on: {
      "click": function($event) {
        _vm.goBack(_vm.type = 'edit')
      }
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['取消修改'] || '取消修改')
    }
  })]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.doSubmit(_vm.type = 'edit')
      }
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['保存修改'] || '保存修改')
    }
  })])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(797)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(472),
  /* template */
  __webpack_require__(1023),
  /* scopeId */
  "data-v-487dc488",
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

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_UEditor_vue__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_UEditor_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_UEditor_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_upload_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_upload_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dateTimePicker_vue__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_dateTimePicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_dateTimePicker_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        let validatePass = (rule, value, callback) => {
            if (value === '' && this.modeData.rule.withdrawRequire === 'times') {
                callback(new Error('请输入倍数'));
            } else {
                callback();
            }
        };
        let validatePass1 = (rule, value, callback) => {
            if (value === '' && this.modeData.rule.withdrawRequire === 'bet') {
                callback(new Error('请输入投注金额'));
            } else {
                callback();
            }
        };
        //URL验证
        let validatorUrl = (rule, value, callback) => {
            if (value && !/^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/.test(value)) {
                callback(new Error(LANG['请输入合法的网址(格式为http://www.***.com或者https://www.***.com)'] || '请输入合法的网址(格式为http://www.***.com或者https://www.***.com)'));
            } else {
                callback();
            }
        };
        const sortValidate = (rule, value, callback) => {
            if (/^(0|[1-9]\d*)$/.test(value.toString())) {
                callback();
            } else {
                return callback(new Error('请填写非负整数'));
            }
        };
        const validatorTime = (rule, value, callback) => {
            const beginTime = new Date(this.modeData.begin_time).getTime();
            const endTime = new Date(this.modeData.end_time).getTime();
            if (beginTime > endTime) {
                callback(new Error(LANG['开始时间不能大于结束时间'] || '开始时间不能大于结束时间'));
            } else {
                callback();
            }
        };
        return {
            LANG,
            modeData: {
                arrList: [],
                name: "", //string #活动名称
                type_id: "", //int ：活动类型ID
                title: "", //string #活动标题
                begin_time: '', //datetime #开始时间
                end_time: '', //datetime #结束时间
                vipType: [], //会员列表
                status: 'enabled', //string #状态 enabled 启用,disabled 停用
                description: "", //string #描述
                cover: "", //string #封面
                language_id: "", //int #语言ID
                language_name: "", //string #语言名称
                content: "", //string #内容
                content2: "", //string #内容
                //                    state: [],//string #集合信息 apply:可申请, auto:自动参与
                //                    updated_uid: "",//int #更新者ID
                fileList2: [], //文件上传
                //优惠类型下拉选项请求用
                //                    type_idList:[],
                // 排序
                sort: "",
                // 打开方式
                open_mode: "",
                // 链接
                link: null,
                rule: {
                    template_id: '',
                    rule: {
                        prize: '',
                        signDays: ''
                    },
                    luckydraw_condition: [],
                    limit_times: '', //领取限制次数
                    withdrawRequire: '', //提款要求选择
                    withdrawRequireVal: '', //
                    withdrawRequireVal1: '', //提款倍数
                    member_level: '',
                    issueTime: null, //发放时间
                    issue_cycle: 'day',
                    issueMode: '', //string #发放方式
                    game: []
                },
                checkedDefut: []
            },
            pcshow: false,
            mbshow: false,
            get: "", //领取限制方式
            placename: '',
            //下拉优惠类型列表
            type_idList: [],
            //获取有效会员等级
            vipList: [],
            //默认选中项
            isIndeterminate: true,
            checkList: [],
            //                checkAll: true,//全选会员等级
            //获取页面传过来的值
            seachData: {},
            languageList: [],
            // 上传地址
            uploadUrl: URL.rpi,
            // 上传字段名
            keys: "images",
            // 是否初始化
            imgInit: false,
            rules: {
                name: [{ required: true, message: '请填写活动名称', trigger: 'blur' }],
                type_id: [{ required: true, message: '请选择优惠类型', trigger: 'change' }],
                language_id: [{ required: true, message: '请选择语言类型', trigger: 'change' }],
                begin_time: [{ required: true, validator: validatorTime, trigger: 'change' }],
                end_time: [{ required: true, validator: validatorTime, trigger: 'change' }],
                open_mode: [{ required: true, message: '请选择打开方式', trigger: 'change' }],
                link: [{ required: true, validator: validatorUrl, trigger: 'change' }],
                description: [{ required: true, message: '请输入活动描述', trigger: 'blur' }],
                'rule.rule.signDays': [{ required: true, message: '请填写连续签到天数', trigger: 'blur' }],
                'rule.issueMode': [{ required: true, message: '请选择发放奖金方式', trigger: 'change' }],
                'rule.withdrawRequire': [{ required: true, message: '请选择提款要求', trigger: 'change' }],
                'rule.withdrawRequireVal': [{ validator: validatePass, trigger: 'blur' }],
                'rule.withdrawRequireVal1': [{ validator: validatePass1, trigger: 'blur' }],
                checkedDefut: [{ type: "array", required: true, message: '请至少选择一个会员等级', trigger: 'change' }],
                sort: [{ validator: sortValidate, trigger: 'blur', required: true }],
                title: [{ required: true, message: '请输入活动标题', trigger: 'change' }],
                cover: [{ required: true, message: '请上传图片', trigger: 'change' }],
                content: [{ required: true, message: '请输入优惠规则' }],
                content2: [{ required: true, message: '请输入优惠规则' }]
            },
            linkShow: false,
            markDownShow: false
        };
    },
    components: {
        markdownEdit: __WEBPACK_IMPORTED_MODULE_0__components_UEditor_vue___default.a,
        upload: __WEBPACK_IMPORTED_MODULE_1__components_upload_vue___default.a,
        dateTimePicker: __WEBPACK_IMPORTED_MODULE_2__components_dateTimePicker_vue___default.a
    },
    methods: {
        init() {
            let _this = this;
            this.modeData.begin_time = window.sessionStorage.sysTime + ' 00:00:00'; //datetime #开始时间
            this.modeData.end_time = '2118-01-01 23:59:59'; //datetime #结束时间
            let query = this.$route.query;
            for (let k in query) {
                this.seachData[k] = query[k];
            }
            //编辑页面数据获得后要操作会员层级数据，所以先要获得到会员层级数据
            function getMeber() {
                return new Promise(function (resolve, reject) {
                    let alllevel = URL.api + `/user/levels`;
                    _this.$http.get(alllevel, URLCONFIG).then(res => {
                        let model = res.data.data;
                        _this.vipList = [];
                        for (let i in model) {
                            _this.vipList.push({
                                "label": model[i].name,
                                "value": model[i].id.toString(),
                                "disable": true
                            });
                        }
                        resolve();
                    }).catch(function (err) {
                        //                            console.log(err)
                        reject(err);
                    });
                });
            }
            getMeber().then(function () {
                let levelUrl = URL.api + `/active/template/unique?template_id=${_this.seachData.template_id}&&begin_time=${_this.modeData.begin_time}&&end_time=${_this.modeData.end_time}`;
                _this.$http.get(levelUrl, URLCONFIG).then(res => {
                    let model = res.data.data;
                    for (let i in model) {
                        _this.vipList.forEach(item => {
                            if (item.value === model[i].id.toString()) {
                                item.disable = false;
                            }
                        });
                    }
                }).catch(function (err) {
                    //                       console.log(err)
                });
                //获取编辑页面数据
                if (_this.seachData.type === 'edit') {
                    let editUrl = URL.api + `/active/template.fix/${_this.seachData.id}`;
                    _this.$http.get(editUrl, URLCONFIG).then(res => {
                        if (res.data.state === 0 && res.data.data) {
                            let formData = res.data.data;
                            _this.modeData = {
                                arrList: [],
                                name: formData.name,
                                type_id: formData.type_id,
                                title: formData.title,
                                begin_time: formData.begin_time,
                                end_time: formData.end_time,
                                day: formData.day,
                                vipType: [], //会员列表
                                money: formData.money,
                                status: formData.status,
                                description: formData.description,
                                language_id: formData.language_id,
                                language_name: formData.language_name,
                                content: formData.content,
                                content2: formData.content2,
                                sort: formData.sort,
                                cover: formData.cover,
                                link: formData.link,
                                open_mode: formData.open_mode,
                                rule: {
                                    rule: {
                                        prize: (formData.rule.rule.prize / 100).toString(),
                                        signDays: formData.rule.rule.sign_days
                                    },
                                    limit_times: formData.rule.limit_times,
                                    withdrawRequire: formData.rule.withdraw_require,
                                    issueTime: formData.rule.issue_time,
                                    issue_cycle: formData.rule.issue_cycle,
                                    issueMode: formData.rule.issue_mode,
                                    game: []
                                },
                                checkedDefut: []
                            };
                            //处理会员层级数据
                            let model = res.data.data.rule.member_level;
                            for (let i in model) {
                                _this.vipList.forEach(item => {
                                    if (item.value === model[i].id.toString()) {
                                        item.disable = false;
                                    }
                                });
                                _this.modeData.checkedDefut.push(model[i].name);
                            }
                            //活动图片
                            _this.modeData.arrList.push(formData.cover);
                            //处理领取限制
                            if (formData.rule.limit_times > 0) {
                                _this.get = '1';
                            } else {
                                _this.get = '2';
                                _this.modeData.rule.limit_times = null;
                            }
                            //处理提款要求
                            if (formData.rule.withdraw_require === 'bet') {
                                _this.modeData.rule.withdrawRequireVal1 = formData.rule.withdraw_require_val / 100;
                            } else if (formData.rule.withdraw_require === 'times') {
                                _this.modeData.rule.withdrawRequireVal = formData.rule.withdraw_require_val;
                            }
                        }
                    });
                }
            });
            //初始化优惠活动名称
            this.placename = this.seachData.label;
            //                获取优惠类型列表
            this.$http.get(URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", URLCONFIG).then(res => {
                if (res.data.state === 0 && res.data.data) {
                    this.type_idList = [];
                    let model = res.data.data || [];
                    for (let k in model) {
                        this.type_idList.push({
                            "label": model[k].name,
                            "value": model[k].id.toString()
                        });
                    }
                }
            });
            let langeUrl = URL.api + ROUTES.GET.langeages;
            this.$http.get(langeUrl, URLCONFIG).then(res => {
                this.languageList = [];
                let model = res.data.data;
                for (let i in model) {
                    this.languageList.push({
                        "label": model[i].name,
                        "value": model[i].id.toString()
                    });
                }
                this.modeData.language_id = '1';
            });
        },
        //全选
        handleCheckAllChange(event) {
            let checkList = [];
            for (let v in this.vipList) {
                checkList[v] = this.vipList[v].label;
            };
            this.modeData.checkedDefut = event.target.checked ? checkList : [];
            this.isIndeterminate = false;
        },
        //单选
        handleCheckedDefutChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.vipList.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.vipList.length;
        },
        //提交表单
        doSubmit(type) {
            let _this = this;
            this.$refs.form.validate(valid => {
                if (valid) {
                    //会员层级字符串
                    let checklist = [];
                    this.modeData.checkedDefut.forEach(function (it) {
                        _this.vipList.forEach(function (item) {
                            if (item.label === it) {
                                checklist.push(item);
                            }
                        });
                    });
                    let member_level = checklist.map(function (item) {
                        return item.value;
                    }).join(',');
                    //拿到选中的语言
                    let lan = this.languageList.find(function (item) {
                        return item.value = _this.modeData.language_id;
                    });
                    //格式化时
                    // let b_time = FORMATDAT(this.modeData.begin_time,'yyyy/MM/dd');
                    // let e_time = FORMATDAT(this.modeData.end_time,'yyyy/MM/dd');
                    //提款要求数据处理
                    let withdraw_require_val = null;
                    if (this.modeData.rule.withdrawRequire === 'times') {
                        withdraw_require_val = parseInt(this.modeData.rule.withdrawRequireVal);
                    } else if (this.modeData.rule.withdrawRequire === 'bet') {
                        withdraw_require_val = parseInt(this.modeData.rule.withdrawRequireVal1) * 100;
                    } else {
                        withdraw_require_val = 0;
                    }
                    let formData = {
                        name: this.modeData.name,
                        type_id: this.modeData.type_id,
                        title: this.modeData.title,
                        begin_time: this.modeData.begin_time,
                        end_time: this.modeData.end_time,
                        description: this.modeData.description,
                        cover: this.modeData.cover,
                        language_id: parseInt(this.modeData.language_id),
                        language_name: lan ? lan.label : '',
                        content: this.modeData.content,
                        content2: this.modeData.content2,
                        status: this.modeData.status,
                        sort: this.modeData.sort,
                        link: this.modeData.link,
                        open_mode: this.modeData.open_mode,
                        rule_type: 'sign_day',
                        rule: {
                            template_id: 1,
                            rule: {
                                prize: this.modeData.rule.rule.prize * 100,
                                sign_days: this.modeData.rule.rule.signDays
                            },
                            luckydraw_condition: this.modeData.rule.luckydraw_condition,
                            limit_times: this.modeData.rule.limit_times ? this.modeData.rule.limit_times : 0,
                            withdraw_require: this.modeData.rule.withdrawRequire,
                            withdraw_require_val: withdraw_require_val,
                            member_level: member_level,
                            issue_time: parseInt(this.modeData.rule.issueTime),
                            issue_cycle: this.modeData.rule.issue_cycle,
                            issue_mode: this.modeData.rule.issueMode,
                            game: []
                        }
                    };
                    if (type === 'add') {
                        let url = URL.api + `/active/template.fix`;
                        this.$http.put(url, formData, URLCONFIG).then(data => {
                            if (data.data.state === 0) {
                                let str = LANG['添加成功'] || '添加成功';
                                this.$message.success(str);
                                setTimeout(function () {
                                    _this.$router.push({ path: 'addActiveSet' });
                                }, 1000);
                            } else if (data.data.state > 3) {
                                this.$message.error(data.data.message);
                            } else {
                                let str = LANG['修改失败'] || '修改失败';
                                this.$message.error(str);
                            }
                        });
                    } else {
                        let url = URL.api + `/active/template.fix/${this.seachData.id}`;
                        this.$http.put(url, formData, URLCONFIG).then(data => {
                            if (data.data.state === 0) {
                                let str = LANG['修改成功'] || '修改成功';
                                this.$message.success(str);
                                setTimeout(function () {
                                    _this.$router.push({ path: 'activeSet' });
                                }, 1000);
                            } else if (data.data.state > 3) {
                                this.$message.error(data.data.message);
                            } else {
                                let str = LANG['修改失败'] || '修改失败';
                                this.$message.error(str);
                            }
                        });
                    }
                } else {
                    _this.$message.error('请检查表单');
                    return false;
                }
            });
        },
        //領取限制change
        limitChange() {
            if (this.get === '2') {
                //清空limit_times
                this.modeData.rule.limit_times = '';
            }
            this.$refs.form.validateField('rule.limit_times');
        },
        //数字验证
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
        //限制领取次数验证
        validatorLimitNumber(rule, value, callback) {
            if (this.get === '1') {
                this.validatorNumber.apply(this, arguments);
            } else {
                callback();
            }
        },
        //提款要求倍数验证
        validatorTimeNumber(rule, value, callback) {
            if (this.modeData.rule.withdrawRequire === 'times') {
                this.validatorNumber.apply(this, arguments);
            } else {
                callback();
            }
        },
        //提款要求固定投注流水验证
        validatorBetNumber(rule, value, callback) {
            if (this.modeData.rule.withdrawRequire === 'bet') {
                this.validatorNumber.apply(this, arguments);
            } else {
                callback();
            }
        },
        goBack(type) {
            type == "add" ? this.$router.push({ path: 'addActiveSet' }) : this.$router.push({ path: 'activeSet' });
        },
        doSaveFile(obj) {
            this.modeData.cover = obj.url[0];
        },
        changeLanguage(value) {
            let languageList = this.languageList;
        },
        changeText(obj) {
            this.modeData.markdownpc = obj.val;
        },
        changeTextMobile(obj) {
            this.modeData.markdownmobile = obj.val;
        },
        withdrawRequireChange() {
            this.$refs.form.validateField('rule.withdrawRequireVal');
            this.$refs.form.validateField('rule.withdrawRequireVal1');
        },
        timeChange() {
            setTimeout(() => {
                this.$refs.form.validateField('begin_time');
                this.$refs.form.validateField('end_time');
            });
        },
        radioChange(value) {
            this.linkShow = value == '4' ? false : true;
            this.modeData.link = value == '4' ? null : this.modeData.link;
            this.markDownShow = value == '4' ? true : false;
            if (value == '4') {
                this.pcshow = true;
                this.mbshow = true;
                this.rules.content.push({ message: '请输入pc活动规则', trigger: "change" });
                this.rules.content2.push({ message: '请输入H5活动规则', trigger: "change" });
            } else {
                this.rules.content2.shift();
                this.rules.content.shift();
                this.pcshow = false;
                this.mbshow = false;
                this.modeData.content = '';
                this.modeData.content2 = '';
            }
        },
        // 动态验证富文本字符长度
        getconLength(data) {
            this.nowcontentNum = data.num;
            if (data.num) {
                setTimeout(() => {
                    this.$refs.form.validateField(data.key);
                }, 100);
            }
        }
    },
    computed: {},
    activated() {
        this.init();
    },
    beforeRouteLeave(to, from, next) {
        next(true);
        this.$refs.form.resetFields();
        this.modeData.description = '';
        this.modeData.arrList = [];
        this.pcshow = false;
        this.mbshow = false;
    }
});

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, ".tCent[data-v-487dc488]{padding-bottom:10px}#activeMode .Layout[data-v-487dc488]{padding:10px 4%}#activeMode .activeModeForm[data-v-487dc488]{border:1px solid #c8c8c8}#activeMode .el-radio+.el-radio[data-v-487dc488]{margin-left:10px}#activeMode .el-checkbox+.el-checkbox[data-v-487dc488]{margin:0 6px}.to-inline-block[data-v-487dc488]{display:inline-block}.to-inline-block .ruleInput[data-v-487dc488]{width:80px}.addPadding[data-v-487dc488]{padding-bottom:20px}.radio[data-v-487dc488]{padding-right:20px}", ""]);

// exports


/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(632);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("8918660a", content, true);

/***/ })

});