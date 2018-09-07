webpackJsonp([100],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(737)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(430),
  /* template */
  __webpack_require__(960),
  /* scopeId */
  "data-v-054191ad",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 430:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            LANG,
            agentSet: {
                minPay: '',
                accountDate: '',
                payType: '',
                userBet: '',
                monthDeposit: '',
                max_agent_levels: '',
                levels: {}
            },
            levels: [],
            dataList: []
        };
    },
    components: {},
    methods: {
        init() {
            for (let i = 1; i < 31; i++) {
                this.dataList.push({
                    "label": '每月',
                    "value": i.toString()
                });
            };
            let levelUrl = URL.api + ROUTES.GET.commission.level;
            let _this = this;
            this.$http.get(levelUrl, URLCONFIG).then(res => {
                let oModel = res.data.data;
                _this.agentSet.levels = {};
                _this.agentSet.minPay = FORMATMONEY(oModel.minPay);
                _this.agentSet.accountDate = oModel.accountDate;
                _this.agentSet.payType = oModel.payType.toString() ? oModel.payType.toString() : '';
                _this.agentSet.userBet = FORMATMONEY(oModel.userBet);
                _this.agentSet.monthDeposit = FORMATMONEY(oModel.monthDeposit);
                _this.agentSet.max_agent_levels = oModel.commission_level_percent.length;
                let levels = this.agentSet.levels;
                oModel.commission_level_percent.map((item, i) => {
                    levels[`level${i + 1}`] = item.value;
                });
                _this.showLevles(this.agentSet.max_agent_levels);
            }).catch(function (err) {
                //                    console.log(err)
            });
        },
        doCash() {
            this.$refs.agentSet.validate(valid => {
                if (valid) {
                    let formData = this.agentSet;
                    let newDatea = formData.levels;
                    let levels = this.levels;
                    let str = '';
                    for (let k = 0; k < levels.length; k++) {
                        if (newDatea[`level${k + 1}`]) {
                            str = str + `level${k + 1}` + ":" + newDatea[`level${k + 1}`] + ",";
                        }
                    }

                    str = str.substring(0, str.length - 1);
                    let newFormDate = {
                        minPay: this.agentSet.minPay * 100,
                        accountDate: this.agentSet.accountDate,
                        // payType: this.agentSet.payType,
                        userBet: this.agentSet.userBet * 100,
                        monthDeposit: this.agentSet.monthDeposit * 100,
                        commission_level_percent: str
                    };
                    let levelUrl = URL.api + ROUTES.PUT.commission.level;
                    this.$http.put(levelUrl, newFormDate, URLCONFIG).then(res => {
                        if (res.data.data) {
                            this.$message.success(this.LANG['保存成功'] || '保存成功');
                        }
                    }).catch(function (err) {
                        //                            console.log(err)
                    });
                }
            });
        },
        doRest() {
            this.init();
            this.$message('重置成功!');
        },
        validatorNumber(rule, value, callback) {
            if (parseInt(value) < 0 || parseInt(value) > 50) {
                callback(new Error(LANG['百分比在0到50之间'] || '百分比在0到50之间'));
            } else {
                callback();
            }
        },
        checkNumber(rule, value, callback) {
            if (parseInt(value) < 2 || parseInt(value) > 20) {
                callback(new Error(LANG['层级在2到20之间'] || '层级在2到20之间'));
            } else {
                callback();
            }
        },
        // 显示设置层级
        showLevles(num) {
            let max = num ? num : this.agentSet.max_agent_levels;
            this.levels.splice(0, this.levels.length);
            let numb = parseInt(max);
            let agentlevels = this.agentSet.levels;
            for (let k = 0; k < numb; k++) {
                this.levels.push(k + 1);
                if (!agentlevels[`level${k + 1}`]) {
                    agentlevels[`level${k + 1}`] = 0;
                }
            }
        }
    },
    created() {
        this.init();
    }
});

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "#agentSet .setPlaySel .el-input__inner[data-v-054191ad]{height:30px}#agentSet .agencySet[data-v-054191ad]{float:left}#agentSet .setPlay[data-v-054191ad]{border:1px solid #e0e6ed;box-sizing:border-box;width:46%;margin-left:2.8%;padding:2%}#agentSet .mainStyle[data-v-054191ad]{border:1px solid #d3dce6;margin:10px 0;padding:20px 0}", ""]);

// exports


/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(572);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("c76f2146", content, true);

/***/ }),

/***/ 960:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "agentSet"
    }
  }, [_c('el-row', {
    staticClass: "w50",
    staticStyle: {
      "margin": "0 auto"
    },
    attrs: {
      "gutter": 20
    }
  }, [_c('el-col', {
    staticClass: "mainStyle",
    attrs: {
      "span": 24
    }
  }, [_c('div', {}, [_c('div', {
    staticClass: "fl setPlay"
  }, [_c('div', {}, [_c('el-form', {
    staticClass: "mt10",
    attrs: {
      "model": _vm.agentSet,
      "label-width": "110px"
    }
  }, [_c('h3', [_vm._v(_vm._s(_vm.LANG['退佣有效会员定义'] || '退佣有效会员定义'))]), _vm._v(" "), _c('el-form-item', {
    staticClass: "w90",
    attrs: {
      "label": _vm.LANG['有效会员投注额'] || '有效会员投注额',
      "prop": "active_player_valid_bet"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "size": "small"
    },
    model: {
      value: (_vm.agentSet.userBet),
      callback: function($$v) {
        _vm.$set(_vm.agentSet, "userBet", $$v)
      },
      expression: "agentSet.userBet"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "w90",
    attrs: {
      "label": _vm.LANG['期间存款金额'] || '期间存款金额',
      "prop": "active_player_deposit"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "size": "small"
    },
    model: {
      value: (_vm.agentSet.monthDeposit),
      callback: function($$v) {
        _vm.$set(_vm.agentSet, "monthDeposit", $$v)
      },
      expression: "agentSet.monthDeposit"
    }
  })], 1)], 1), _vm._v(" "), _c('span', {
    staticClass: "help_gray"
  }, [_vm._v("提示：二者其中一个达到，即为有效会员。")])], 1)])])]), _vm._v(" "), _c('el-col', {
    staticClass: "mainStyle",
    attrs: {
      "span": 24
    }
  }, [_c('h3', [_vm._v(_vm._s(_vm.LANG['多级代理佣金百分比'] || '多级代理佣金百分比'))]), _vm._v(" "), _c('el-form', {
    ref: "agentSet",
    staticClass: "mt10 agencySet w100",
    attrs: {
      "model": _vm.agentSet,
      "label-width": "100px"
    }
  }, [_c('el-form-item', {
    staticClass: "w50 fl",
    attrs: {
      "label": _vm.LANG['代理层级限制'] || '代理层级限制',
      "rules": [{
        validator: _vm.checkNumber,
        trigger: 'blur'
      }],
      "prop": 'max_agent_levels'
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number"
    },
    on: {
      "change": _vm.showLevles
    },
    model: {
      value: (_vm.agentSet.max_agent_levels),
      callback: function($$v) {
        _vm.$set(_vm.agentSet, "max_agent_levels", $$v)
      },
      expression: "agentSet.max_agent_levels"
    }
  })], 1)], 1), _vm._v(" "), (_vm.agentSet.max_agent_levels >= 2 && _vm.agentSet.max_agent_levels <= 20) ? _c('el-form', {
    ref: "agentSet",
    staticClass: "mt10 agencySet w100 cl",
    attrs: {
      "model": _vm.agentSet,
      "label-width": "100px"
    }
  }, _vm._l((_vm.levels), function(item) {
    return _c('el-form-item', {
      key: item,
      staticClass: "w50 fl",
      attrs: {
        "label": (_vm.LANG['下'] || '下') + ' ' + item + ' ' + (_vm.LANG['级'] || '级'),
        "rules": [{
          validator: _vm.validatorNumber,
          trigger: 'blur'
        }],
        "prop": 'levels.level' + item
      }
    }, [_c('el-input', {
      attrs: {
        "placeholder": "请输入代理佣金百分比",
        "s": "",
        "type": "number"
      },
      model: {
        value: (_vm.agentSet.levels[("level" + item)]),
        callback: function($$v) {
          _vm.$set(_vm.agentSet.levels, ("level" + item), $$v)
        },
        expression: "agentSet.levels[`level${item}`]"
      }
    }, [_c('template', {
      slot: "append"
    }, [_vm._v("%")])], 2)], 1)
  })) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "formbtn tCent mt20"
  }, [_c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.doCash
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "plain": true
    },
    on: {
      "click": _vm.doRest
    }
  }, [_vm._v(_vm._s(_vm.LANG['重置'] || '重置'))])], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

});