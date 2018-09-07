webpackJsonp([96],{

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(769)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(501),
  /* template */
  __webpack_require__(994),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 501:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            LANG,
            tableUrl: "",
            tableDate: [],
            mbList: [],
            amount: 0
        };
    },
    components: {},
    methods: {
        init() {
            this.$http.get(URL.api + ROUTES.GET.cash.record.balance, URLCONFIG).then(res => {
                res.data.data.forEach(item => {
                    item.balance = item.balance / 100;
                });
                this.tableDate = res.data.data;
            }).catch(err => {
                //					console.log(err)
            });
        },
        //刷校招页面
        doRefresh() {
            this.init();
        }
    },
    computed: {},
    mounted() {},
    created() {
        this.init();
    },
    directives: {
        tableWidth: {
            bind: function (el) {
                el.style.width = window.innerWidth - 250 + 'px';
            }
        }
    }
});

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, ".page{position:relative}.outexcel{float:right;margin-bottom:10px}.cell{text-align:center}.tditem{background-color:#eef1f6}.tritem{background-color:#d3dce6!important}", ""]);

// exports


/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(604);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("5981a4b0", content, true);

/***/ }),

/***/ 994:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "w100",
    attrs: {
      "id": "fundDetailsSummary"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 20,
      "offset": 2
    }
  }, [_c('el-button', {
    staticClass: "outexcel",
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.doRefresh
    }
  }, [_vm._v(_vm._s(_vm.LANG['刷新'] || '刷新'))])], 1), _vm._v(" "), _c('el-col', {
    attrs: {
      "span": 20,
      "offset": 2
    }
  }, [_c('el-table', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "data": _vm.tableDate,
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "name",
      "label": _vm.LANG['游戏钱包'] || '游戏钱包'
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "balance",
      "label": _vm.LANG['余额'] || '余额'
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "time",
      "label": _vm.LANG['更新时间'] || '更新时间'
    }
  })], 1)], 1)], 1)
},staticRenderFns: []}

/***/ })

});