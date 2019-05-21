(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/addActiveSet.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
/* harmony default export */ var addActiveSet = ({
  data() {
    return {
      LANG,
      windowsOpen: '0',
      addModeList: [],
      imgList: [{
        label: '每日签到',
        imgUrl: 'static/img/activity/active_11.png',
        "id": "1"
      }, {
        label: '验证邮箱',
        imgUrl: 'static/img/activity/active_22.png',
        "id": "2"
      }, {
        label: '手机验证',
        imgUrl: 'static/img/activity/active_33.png',
        "id": "3"
      }, {
        label: '每日抽奖',
        imgUrl: 'static/img/activity/active_44.png',
        "id": "4"
      }, {
        label: '救援金',
        imgUrl: 'static/img/activity/active_55.png',
        "id": "5"
      }, {
        label: '擂台赛',
        imgUrl: 'static/img/activity/active_66.png',
        "id": "6"
      }, {
        label: '奖上奖',
        imgUrl: 'static/img/activity/active_77.png',
        "id": "7"
      }, {
        label: '连续闯关',
        imgUrl: 'static/img/activity/active_88.png',
        "id": "8"
      }, {
        label: '存款优惠',
        imgUrl: 'static/img/activity/active_99.png',
        "id": "9"
      }, {
        label: '注册优惠',
        imgUrl: 'static/img/activity/active_00.png',
        "id": "0"
      }]
    };
  },

  components: {//            activeMode:activeMode,
  },
  methods: {
    init() {
      //                this.windowsOpen = '0';
      let listUrl = URL.api + ROUTES.GET.template.tempList;
      this.$.autoAjax('get', listUrl, '', {
        ok: res => {
          let model = res.data;

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
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); //                 this.$http.get(listUrl,URLCONFIG).then((res) => {
      //                     let model = res.data.data;
      //                     for (let i in model){
      //                         this.addModeList.push({
      //                             "id": model[i].id,
      //                             "label": model[i].name,
      //                             "details":model[i].description,
      // //                            'imgUrl':this.imgList[i].imgUrl,
      //                             'imgUrl':'static/img/activity/active_' + model[i].id + model[i].id +'.png',
      //                             "fn":'tempBtn' + model[i].id,
      //                         });
      //                     }
      //                 });
    },

    tempBtn(i, item) {
      this.$router.push({
        path: `activeMode_${i}`,
        query: {
          label: item,
          template_id: i,
          type: "add"
        }
      });
    },

    doClick(item) {
      this.tempBtn(item.id, item.label);
    },

    //返回上一层
    docancel() {
      this.$router.push({
        path: '/activeSet'
      });
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7f1c1d7e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/addActiveSet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"addActiveSet"}},[_c('div',[(_vm.windowsOpen == '0')?_c('el-button',{staticClass:"ml20",attrs:{"type":"primary"},domProps:{"textContent":_vm._s(_vm.LANG['取消创建活动'] || '取消创建活动')},on:{"click":_vm.docancel}}):_vm._e()],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('div',[_c('el-col',{attrs:{"span":24}},_vm._l((_vm.addModeList),function(item){return _c('el-col',{key:item.id,staticClass:"mt20 activeCent"},[_c('el-card',{attrs:{"body-style":{ padding: '0px' }}},[_c('div',{staticClass:"cardHeader"},[_c('div',{staticClass:"w30 fl mt20",staticStyle:{"margin-left":"10%"}},[_c('img',{attrs:{"src":item.imgUrl,"alt":"优惠活动图片","title":"点击下方按钮可创建新活动"}})]),_vm._v(" "),_c('div',{staticClass:"w60 fl mt20"},[_c('h3',[_vm._v(_vm._s(item.label))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.details))])])]),_vm._v(" "),_c('div',{staticClass:"cl",staticStyle:{"padding":"14px"}},[_c('div',{staticClass:"bottom clearfix tCent"},[_c('el-button',{attrs:{"plain":true,"type":"primary","size":"small"},on:{"click":function($event){return _vm.doClick(item)}}},[_c('i',[_vm._v(" + ")]),_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['创建活动'] || '创建活动')}})])],1)])]),_vm._v(" "),(item.id=='1'||item.id=='2'||item.id=='3'||item.id=='4'||item.id=='6'||item.id=='5'||item.id=='7'||item.id=='8')?_c('div',{staticClass:"mask"},[_vm._v("\n                        敬请期待\n                    ")]):_vm._e()],1)}),1)],1)])],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/preAct/addActiveSet.vue
function injectStyle (context) {
  __webpack_require__(431)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7f1c1d7e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  addActiveSet,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var preAct_addActiveSet = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);