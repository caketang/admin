webpackJsonp([95],{

/***/ 1055:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "otherService"
    }
  }, [_c('div', {
    staticClass: "el-col"
  }, [_c('el-form', {
    ref: "form",
    staticClass: "el-form",
    attrs: {
      "model": _vm.modeData
    }
  }, [_c('el-col', [_c('el-form-item', [_c('el-radio-group', {
    staticStyle: {
      "width": "100%"
    },
    model: {
      value: (_vm.select),
      callback: function($$v) {
        _vm.select = $$v
      },
      expression: "select"
    }
  }, [_c('el-col', {
    staticClass: "radio-block"
  }, [_c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "lebo"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['LEBO客服系统'] || 'LEBO客服系统')
    }
  })])], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 19
    }
  }, [_c('div', [_c('p', {
    staticClass: "title"
  }, [_vm._v("pc端")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "lebo.pc.code"
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.modeData.lebo.pc.code),
      expression: "modeData.lebo.pc.code"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "name": "",
      "rows": "10",
      "placeholder": "请输入在线客服代码"
    },
    domProps: {
      "value": (_vm.modeData.lebo.pc.code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.modeData.lebo.pc, "code", $event.target.value)
      }
    }
  })])], 1), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "title"
  }, [_vm._v("移动端")]), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "请输入在线客服链接"
    },
    model: {
      value: (_vm.modeData.lebo.mobile.code),
      callback: function($$v) {
        _vm.$set(_vm.modeData.lebo.mobile, "code", $$v)
      },
      expression: "modeData.lebo.mobile.code"
    }
  })], 1)])], 1), _vm._v(" "), _c('el-col', {
    staticClass: "radio-block"
  }, [_c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "usa"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['美国客服系统'] || '美国客服系统')
    }
  })])], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 19
    }
  }, [_c('div', [_c('p', {
    staticClass: "title"
  }, [_vm._v("pc端")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.modeData.usa.pc.code),
      expression: "modeData.usa.pc.code"
    }],
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "name": "",
      "rows": "10",
      "placeholder": "请输入在线客服代码"
    },
    domProps: {
      "value": (_vm.modeData.usa.pc.code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.modeData.usa.pc, "code", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "supportPos"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("客服入口显示位置")]), _vm._v(" "), _c('el-radio-group', {
    model: {
      value: (_vm.modeData.usa.pc.position),
      callback: function($$v) {
        _vm.$set(_vm.modeData.usa.pc, "position", $$v)
      },
      expression: "modeData.usa.pc.position"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "left-middle"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['左中'] || '左中')
    }
  })]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "left-bottom"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['左下'] || '左下')
    }
  })]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "right-middle"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['右中'] || '右中')
    }
  })]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "right-bottom"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['右下'] || '右下')
    }
  })])], 1)], 1), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "title"
  }, [_vm._v("移动端")]), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "请输入在线客服链接"
    },
    model: {
      value: (_vm.modeData.usa.mobile.code),
      callback: function($$v) {
        _vm.$set(_vm.modeData.usa.mobile, "code", $$v)
      },
      expression: "modeData.usa.mobile.code"
    }
  })], 1)])], 1), _vm._v(" "), _c('el-col', {
    staticClass: "radio-block"
  }, [_c('el-col', {
    attrs: {
      "span": 5
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "live800"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['LIVE800客服系统'] || 'LIVE800客服系统')
    }
  })])], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 19
    }
  }, [_c('div', [_c('p', {
    staticClass: "title"
  }, [_vm._v("pc端")]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "prop": "live800.pc.code"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入在线客服窗口地址URL"
    },
    model: {
      value: (_vm.modeData.live800.pc.code),
      callback: function($$v) {
        _vm.$set(_vm.modeData.live800.pc, "code", $$v)
      },
      expression: "modeData.live800.pc.code"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "supportPos"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("客服入口显示位置")]), _vm._v(" "), _c('el-radio-group', {
    model: {
      value: (_vm.modeData.live800.pc.position),
      callback: function($$v) {
        _vm.$set(_vm.modeData.live800.pc, "position", $$v)
      },
      expression: "modeData.live800.pc.position"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": "left-middle"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['左中'] || '左中')
    }
  })]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "left-bottom"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['左下'] || '左下')
    }
  })]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "right-middle"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['右中'] || '右中')
    }
  })]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": "right-bottom"
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['右下'] || '右下')
    }
  })])], 1)], 1), _vm._v(" "), _c('div', [_c('p', {
    staticClass: "title"
  }, [_vm._v("移动端")]), _vm._v(" "), _c('el-input', {
    attrs: {
      "placeholder": "请输入在线客服链接"
    },
    model: {
      value: (_vm.modeData.live800.mobile.code),
      callback: function($$v) {
        _vm.$set(_vm.modeData.live800.mobile, "code", $$v)
      },
      expression: "modeData.live800.mobile.code"
    }
  })], 1)])], 1)], 1)], 1)], 1), _vm._v(" "), _c('el-button', {
    staticClass: "saveBtn",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.doSave
    }
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.LANG['保存修改'] || '保存修改')
    }
  })])], 1)], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(827)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(517),
  /* template */
  __webpack_require__(1055),
  /* scopeId */
  "data-v-7674cfe3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 517:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            LANG,
            select: 'lebo',
            modeData: {
                lebo: {
                    pc: {
                        code: "",
                        position: ""
                    },
                    mobile: {
                        code: ""
                    },
                    selected: false
                },
                usa: {
                    pc: {
                        code: "",
                        position: "left-middle"
                    },
                    mobile: {
                        code: ""
                    },
                    selected: false
                },
                live800: {
                    pc: {
                        code: "",
                        position: "left-middle"
                    },
                    mobile: {
                        code: ""
                    },
                    selected: false
                }
                //                    display: true
            }
        };
    },
    methods: {
        init() {
            this.submitData = JSON.parse(JSON.stringify(this.modeData));
            this.$http.get(URL.api + ROUTES.GET.system.service, URLCONFIG).then(res => {
                if (res.data.state == 0 && res.data.data) {
                    let list = res.data.data.services;
                    let modeData = this.modeData;
                    this.modeData.display = res.data.data.display;
                    for (let key in list) {
                        if (list[key].mobile && list[key].mobile.code || list[key].pc && list[key].pc.code) {
                            modeData[key] = list[key];
                        }
                        if (this.modeData[key].selected === true) {
                            this.select = key;
                        }
                    }
                }
            });
        },
        //保存
        doSave() {
            let select = this.select;
            let data = { services: this.modeData, display: this.modeData.display };
            data.services.lebo.selected = false;
            data.services.usa.selected = false;
            data.services.live800.selected = false;
            data.services[select].selected = true;
            delete data.display;
            this.$http.patch(URL.api + ROUTES.PATCH.system.service, JSON.stringify(data), URLCONFIG).then(res => {
                if (res.data.state == 0 && res.data.data) {
                    this.$message.success(LANG["保存成功"] || "保存成功");
                    this.init();
                } else {
                    this.$message.success(LANG["保存失败！"] || "保存失败！");
                }
            });
        },
        doReset() {},
        validateLeboPcCode(rule, value, callback) {
            if (this.select === 'lebo' && value == '') {
                callback(new Error(LANG['请输入在线客服代码'] || '请输入在线客服代码'));
            } else {
                callback();
            }
        },
        validateLivePcCode(rule, value, callback) {
            if (this.select === 'live800' && value == '') {
                callback(new Error(LANG['请输入在线客服窗口地址URL'] || '请输入在线客服窗口地址URL'));
            } else {
                callback();
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

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "#otherService[data-v-7674cfe3]{width:50%;min-width:800px;margin:0 auto;padding-top:30px}.border[data-v-7674cfe3]{border:1px solid #ccc;padding:20px;margin:10px 0}.base[data-v-7674cfe3]{text-align:center}.base textarea[data-v-7674cfe3]{width:80%;min-height:200px}.server-title[data-v-7674cfe3]{float:none;text-align:left;line-height:normal;color:inherit;font-size:inherit;padding:0}.title[data-v-7674cfe3]{font-size:14px;padding-bottom:10px}.radio-block[data-v-7674cfe3]{padding-bottom:20px}.supportPos[data-v-7674cfe3]{padding:20px 0}.supportPos .title[data-v-7674cfe3]{padding-right:15px}.saveBtn[data-v-7674cfe3]{float:right}", ""]);

// exports


/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(662);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("4667d9bc", content, true);

/***/ })

});