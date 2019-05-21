(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/instantNote/MarkSixQuery.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var MarkSixQuery = ({
  data() {
    return {
      dataModel: [],
      sumObj: {},
      odds_type: "",
      dialogModel: [],
      LANG,
      editVisible: {
        state: false
      },
      userConfig: [{
        "prop": "user_name",
        "value": "",
        "type": "text",
        "label": "会员帐号",
        "placeholder": "输入会员帐号"
      }, {
        "prop": "lottery_number",
        "value": "",
        "type": "text",
        "label": "期数"
      }],
      searchType: 'search',
      isEdit: {
        state: false
      },
      labelWidth: '90px',
      money: '',
      dialogVisible: false,
      message: '',
      // 搜索栏数据修改
      updateKeys: "",
      // 期号
      lotteryNum: "",
      lotteryMember: "",
      nowNumber: ""
    };
  },

  components: {
    formEdit: formEdit["a" /* default */]
  },
  computed: {},
  watch: {},
  methods: {
    init() {
      this.dataModel.splice(0, this.dataModel.length);
      this.sumObj = {};
      let sumObj = this.sumObj;
      let dataModel = this.dataModel;
      this.updateKeys = '';

      let _this = this;

      this.$.autoAjax('get', URL.api + ROUTES.GET.order.six, '', {
        ok: res => {
          console.log(res);

          if (res.state == 0 && res.data) {
            sumObj.total_count = res.attributes.total_count || 0;
            sumObj.total_lose_earn = res.attributes.total_lose_earn || 0;
            sumObj.total_num = res.attributes.total_num || 0;
            _this.lotteryNum = res.data.period;
            _this.updateKeys = "lottery_number," + (res.data.period || '');
            let model = res.data || [];
            _this.odds_type = model[0].odds_type;
            model.forEach(v => {
              dataModel.push(v);
            });
          } else if (res.data.state === 4004) {
            _this.$message.error(LANG['当前期号未生成或缺失！'] || '当前期号未生成或缺失！');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); //         		this.$http.get(URL.api+ROUTES.GET.order.six,URLCONFIG).then((res) =>{ // 获取彩期
      //                     console.log(res)
      //         			if(res.data.state == 0 && res.data.data){
      //                         sumObj.total_count = res.data.attributes.total_count || 0;
      //                         sumObj.total_lose_earn = res.data.attributes.total_lose_earn || 0;
      //                         sumObj.total_num = res.data.attributes.total_num || 0;
      //                         _this.lotteryNum = res.data.data.period;
      //                         _this.updateKeys = "lottery_number," + (res.data.data.period || '');
      //         			    let model = res.data.data || [];
      //                         _this.odds_type = model[0].odds_type;
      //                         model.forEach((v)=>{
      //                             dataModel.push(v);
      // 						})
      //         			}else if(res.data.state === 4004){
      //                         _this.$message.error(LANG['当前期号未生成或缺失！'] || '当前期号未生成或缺失！');
      // 					}
      //         		}).catch((e)=>{
      // //        		    console.log(e);
      // 				})
    },

    openDetails(obj) {
      this.dialogModel.splice(0, this.dialogModel.length);
      let dialogModel = this.dialogModel;

      let _this = this;

      let temp = "?";

      if (this.lotteryNum) {
        temp = temp + "lottery_number=" + this.lotteryNum;

        if (this.lotteryMember) {
          temp = temp + "&user_name=" + this.lotteryMember;
        }
      } else {
        temp = temp + "user_name=" + this.lotteryMember;
      }

      temp = temp + "&base_id=" + obj.base_id;
      this.$.autoAjax('get', URL.api + ROUTES.GET.order.six + ".detail" + temp, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];
            model.forEach(v => {
              dialogModel.push(v);
            });
          } else if (res.state === 4004) {
            _this.$message.error(LANG['未找到相关数据！'] || '未找到相关数据！');
          }

          _this.dialogVisible = true;
          _this.nowNumber = obj.result;
          _this.message = (LANG["彩期"] || '彩期') + this.lotteryNum + '- ' + (LANG["明细"] || '明细');
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); //                 this.$http.get(URL.api+ROUTES.GET.order.six + ".detail" + temp,URLCONFIG).then((res) =>{ // 获取彩期
      //                     if(res.data.state == 0 && res.data.data){
      //                         let model = res.data.data|| [];
      //                         model.forEach((v)=>{
      //                             dialogModel.push(v);
      //                         })
      //                     }else if(res.data.state === 4004){
      //                         _this.$message.error(LANG['未找到相关数据！'] || '未找到相关数据！');
      //                     }
      //                     _this.dialogVisible = true;
      //                     _this.nowNumber = obj.result;
      //                     _this.message = (LANG["彩期"] || '彩期') + this.lotteryNum + '- ' +  (LANG["明细"] || '明细');
      //                 }).catch((e)=>{
      // //                    console.log(e);
      //                 })
    },

    doQuery(obj) {
      this.lotteryNum = obj.item.lottery_number || '';
      this.lotteryMember = obj.item.user_name || '';
      let temp = "?";

      if (this.lotteryNum) {
        temp = temp + "lottery_number=" + this.lotteryNum;

        if (this.lotteryMember) {
          temp = temp + "&user_name=" + this.lotteryMember;
        }
      } else {
        temp = temp + "user_name=" + this.lotteryMember;
      }

      this.dataModel.splice(0, this.dataModel.length);
      this.sumObj = {};
      let sumObj = this.sumObj;
      let dataModel = this.dataModel;

      let _this = this;

      this.$.autoAjax('get', URL.api + ROUTES.GET.order.six + temp, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            sumObj.total_count = res.data.total_count || 0;
            sumObj.total_lose_earn = res.data.total_lose_earn || 0;
            sumObj.total_num = res.data.total_num || 0;
            _this.lotteryNum = res.data.period;
            _this.updateKeys = "lottery_number," + res.data.period;
            let model = res.data || [];
            model.forEach(v => {
              dataModel.push(v);
            });
          } else if (res.state === 4004) {
            _this.$message.error(LANG['当前期号未生成或缺失！'] || '当前期号未生成或缺失！');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); //                 this.$http(URL.api+ROUTES.GET.order.six + temp,URLCONFIG).then((res) =>{ // 获取彩期
      //                     if(res.data.state == 0 && res.data.data){
      //                         sumObj.total_count = res.data.data.total_count || 0;
      //                         sumObj.total_lose_earn = res.data.data.total_lose_earn || 0;
      //                         sumObj.total_num = res.data.data.total_num || 0;
      //                         _this.lotteryNum = res.data.data.period;
      //                         _this.updateKeys = "lottery_number," + res.data.data.period;
      //                         let model = res.data.data || [];
      //                         model.forEach((v)=>{
      //                             dataModel.push(v);
      //                         })
      //                     }else if(res.data.state === 4004){
      //                         _this.$message.error(LANG['当前期号未生成或缺失！'] || '当前期号未生成或缺失！');
      //                     }
      //                 }).catch((e)=>{
      // //                    console.log(e);
      //                 })
    },

    resetForm() {}

  },

  mounted() {},

  created() {
    this.init();
  },

  activated() {
    this.updateKeys = -1;
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ce381630","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/instantNote/MarkSixQuery.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"MarkSixQuery"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('formEdit',{attrs:{"formVisible":_vm.editVisible,"formConfig":_vm.userConfig,"type":_vm.searchType,"isEdit":_vm.isEdit,"labelWidth":_vm.labelWidth,"updateKeys":_vm.updateKeys,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1)],1),_vm._v(" "),_c('el-row',{staticClass:"pb",attrs:{"type":"flex","justify":"space-between"}},[_c('el-col',{attrs:{"span":3}},[_c('span',{staticClass:"font16"},[_vm._v(_vm._s(_vm.LANG['六合彩'] || '六合彩'))])]),_vm._v(" "),_c('el-col',{attrs:{"span":2}},[_c('el-input',{attrs:{"placeholder":"注单金额提醒","size":"small"},model:{value:(_vm.money),callback:function ($$v) {_vm.money=_vm._n($$v)},expression:"money"}})],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('table',{staticClass:"el-table el-table__header el-table--border",staticStyle:{"width":"100%"},attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('thead',[_c('tr',[_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"3"}},[_c('div',{staticClass:"cell tCent",domProps:{"textContent":_vm._s(_vm.LANG['号码'] || '号码')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"3"}},[_c('div',{staticClass:"cell tCent",domProps:{"textContent":_vm._s(_vm.LANG['注单数'] || '注单数')}})]),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"3"}},[_c('div',{staticClass:"cell tCent",domProps:{"textContent":_vm._s(_vm.LANG['注单金额'] || '注单金额')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"3"}},[_c('div',{staticClass:"cell tCent",domProps:{"textContent":_vm._s(_vm.LANG['输赢'] || '输赢')}})])])]),_vm._v(" "),_vm._l((_vm.dataModel),function(item,index){return (_vm.dataModel.length)?_c('tr',[_c('td',{staticClass:"el-table_1_column_19",class:{warning: item.count > _vm.money*100 && _vm.money != '' },attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(item.result))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",class:{warning: item.count > _vm.money*100 && _vm.money != ''},attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub",class:{link: item.A >0 },on:{"click":function($event){return _vm.openDetails(item)}}},[_vm._v(_vm._s(item.num))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",class:{warning: item.count > _vm.money*100 && _vm.money != ''},attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(_vm._f("formatMoney")(item.count)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",class:{warning: item.count > _vm.money*100 && _vm.money != ''},attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(_vm._f("formatMoney")(item.lose_earn)))])])])]):_vm._e()}),_vm._v(" "),(_vm.dataModel.length>0)?_c('tr',[_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(_vm.LANG['合计'] || '合计')+":")])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(_vm.sumObj.total_num))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.sumObj.total_count)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.sumObj.total_lose_earn)))])])])]):_vm._e(),_vm._v(" "),(_vm.dataModel.length == 0)?_c('tr',{staticStyle:{"text-align":"center","height":"100px"}},[_c('td',{attrs:{"colspan":"8"}},[_vm._v("暂无数据")])]):_vm._e()],2)])],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.message,"visible":_vm.dialogVisible,"size":"small"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('span',[_vm._v(_vm._s(_vm.LANG['六合彩'] || '六合彩')+" ["+_vm._s(_vm.odds_type)+" : "+_vm._s(_vm.nowNumber)+" ] "+_vm._s(_vm.LANG['下注明細'] || '下注明細'))]),_vm._v(" "),_c('table',{staticClass:"el-table el-table__header el-table--border mt10",staticStyle:{"width":"100%"},attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('thead',[_c('tr',[_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell tCent",domProps:{"textContent":_vm._s(_vm.LANG['序号'] || '序号')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell tCent",domProps:{"textContent":_vm._s(_vm.LANG['订单号'] || '订单号')}})]),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell tCent",domProps:{"textContent":_vm._s(_vm.LANG['下单时间'] || '下单时间')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell tCent",domProps:{"textContent":_vm._s(_vm.LANG['期数'] || '期数')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell tCent",domProps:{"textContent":_vm._s(_vm.LANG['会员'] || '会员')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"3","rowspan":"1"}},[_c('div',{staticClass:"cell tCent",domProps:{"textContent":_vm._s(_vm.LANG['下注总额'] || '下注总额')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"3","rowspan":"1"}},[_c('div',{staticClass:"cell tCent",domProps:{"textContent":_vm._s(_vm.LANG['下注内容'] || '下注内容')}})])])]),_vm._v(" "),_vm._l((_vm.dialogModel),function(item,index){return (_vm.dialogModel.length)?_c('tr',[_c('td',{staticClass:"el-table_1_column_19",class:{warning: item.count > _vm.money*100 && _vm.money != ''},attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(item.A))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",class:{warning: item.count > _vm.money*100 && _vm.money != ''},attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub",class:{link: item.A >0 },on:{"click":_vm.openDetails}},[_vm._v(_vm._s(item.A))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",class:{warning: item.count > _vm.money*100 && _vm.money != ''},attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(item.B))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",class:{warning: item.count > _vm.money*100 && _vm.money != ''},attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(item.C))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",class:{warning: item.count > _vm.money*100 && _vm.money != ''},attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(item.C))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",class:{warning: item.count > _vm.money*100 && _vm.money != ''},attrs:{"colspan":"3"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(item.C))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",class:{warning: item.count > _vm.money*100 && _vm.money != ''},attrs:{"colspan":"3"}},[_c('div',{staticClass:"cell tCent"},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(item.C))])])])]):_vm._e()})],2),_vm._v(" "),(_vm.dialogModel.length == 0)?_c('el-col',{staticStyle:{"line-height":"100px","text-align":"center","background-color":"#ffffff"}},[_c('div',{staticClass:"dell"},[_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据'))])]):_vm._e()],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/instantNote/MarkSixQuery.vue
function injectStyle (context) {
  __webpack_require__(505)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ce381630"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  MarkSixQuery,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var instantNote_MarkSixQuery = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);