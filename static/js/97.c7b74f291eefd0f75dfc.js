webpackJsonp([97],{

/***/ 1060:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "addActiveSet"
    }
  }, [_c('div', [(_vm.windowsOpen == '0') ? _c('el-button', {
    staticClass: "ml20",
    attrs: {
      "type": "primary"
    },
    domProps: {
      "textContent": _vm._s(_vm.LANG['取消创建活动'] || '取消创建活动')
    },
    on: {
      "click": _vm.docancel
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('el-row', {
    attrs: {
      "gutter": 20
    }
  }, [_c('div', [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, _vm._l((_vm.addModeList), function(item) {
    return _c('el-col', {
      key: item.id,
      staticClass: "mt20 activeCent"
    }, [_c('el-card', {
      attrs: {
        "body-style": {
          padding: '0px'
        }
      }
    }, [_c('div', {
      staticClass: "cardHeader"
    }, [_c('div', {
      staticClass: "w30 fl mt20",
      staticStyle: {
        "margin-left": "10%"
      }
    }, [_c('img', {
      attrs: {
        "src": item.imgUrl,
        "alt": "优惠活动图片",
        "title": "点击下方按钮可创建新活动"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "w60 fl mt20"
    }, [_c('h3', [_vm._v(_vm._s(item.label))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.details))])])]), _vm._v(" "), _c('div', {
      staticClass: "cl",
      staticStyle: {
        "padding": "14px"
      }
    }, [_c('div', {
      staticClass: "bottom clearfix tCent"
    }, [_c('el-button', {
      attrs: {
        "plain": true,
        "type": "primary",
        "size": "small"
      },
      on: {
        "click": function($event) {
          _vm.doClick(item)
        }
      }
    }, [_c('i', [_vm._v(" + ")]), _c('span', {
      domProps: {
        "textContent": _vm._s(_vm.LANG['创建活动'] || '创建活动')
      }
    })])], 1)])]), _vm._v(" "), (item.id == '1' || item.id == '2' || item.id == '3' || item.id == '4' || item.id == '6' || item.id == '5' || item.id == '7' || item.id == '8') ? _c('div', {
      staticClass: "mask"
    }, [_vm._v("\n                        敬请期待\n                    ")]) : _vm._e()], 1)
  }))], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(832)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(484),
  /* template */
  __webpack_require__(1060),
  /* scopeId */
  "data-v-7e03c25c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 484:
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

//    import activeMode from './activeMode.vue';
/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            LANG,
            windowsOpen: '0',
            addModeList: [],
            imgList: [{ label: '每日签到', imgUrl: 'static/img/activity/active_11.png', "id": "1" }, { label: '验证邮箱', imgUrl: 'static/img/activity/active_22.png', "id": "2" }, { label: '手机验证', imgUrl: 'static/img/activity/active_33.png', "id": "3" }, { label: '每日抽奖', imgUrl: 'static/img/activity/active_44.png', "id": "4" }, { label: '救援金', imgUrl: 'static/img/activity/active_55.png', "id": "5" }, { label: '擂台赛', imgUrl: 'static/img/activity/active_66.png', "id": "6" }, { label: '奖上奖', imgUrl: 'static/img/activity/active_77.png', "id": "7" }, { label: '连续闯关', imgUrl: 'static/img/activity/active_88.png', "id": "8" }, { label: '存款优惠', imgUrl: 'static/img/activity/active_99.png', "id": "9" }, { label: '注册优惠', imgUrl: 'static/img/activity/active_00.png', "id": "0" }]
        };
    },
    components: {
        //            activeMode:activeMode,
    },
    methods: {
        init() {
            //                this.windowsOpen = '0';
            let listUrl = URL.api + ROUTES.GET.template.tempList;
            this.$http.get(listUrl, URLCONFIG).then(res => {
                let model = res.data.data;
                for (let i in model) {
                    this.addModeList.push({
                        "id": model[i].id,
                        "label": model[i].name,
                        "details": model[i].description,
                        //                            'imgUrl':this.imgList[i].imgUrl,
                        'imgUrl': 'static/img/activity/active_' + model[i].id + model[i].id + '.png',
                        "fn": 'tempBtn' + model[i].id
                    });
                }
            });
        },
        tempBtn(i, item) {
            this.$router.push({ path: `activeMode_${i}`, query: { label: item, template_id: i, type: "add" } });
        },
        doClick(item) {
            this.tempBtn(item.id, item.label);
        },
        //返回上一层
        docancel() {
            this.$router.push({ path: '/activeSet' });
        },
        doBack(data) {
            this.windowsOpen = data;
        }

    },
    //        components: {
    //            activeMode:activeMode
    //        },
    computed: {},
    mounted() {},
    created() {
        this.init();
    }
});

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "#addActiveSet .activeCent[data-v-7e03c25c]{max-width:320px}#addActiveSet .cardHeader[data-v-7e03c25c]{height:120px;background:#f9fafc;border-bottom:1px solid #e5e9f2}#addActiveSet .cardHeader h3[data-v-7e03c25c],#addActiveSet .cardHeader p[data-v-7e03c25c]{line-height:40px}#addActiveSet .activeCent[data-v-7e03c25c]{position:relative;padding:0!important;margin-right:10px}#addActiveSet .mask[data-v-7e03c25c]{width:100%;height:100%;background:rgba(0,0,0,.5);position:absolute;left:0;top:0;text-align:center;line-height:160px;font-size:40px;color:#fff}", ""]);

// exports


/***/ }),

/***/ 832:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(667);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("147450a7", content, true);

/***/ })

});