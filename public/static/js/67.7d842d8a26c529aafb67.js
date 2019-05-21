(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/chaseNoteDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

vue_esm["default"].filter("formatDate", function (v, format) {
  let t = new Date(v);

  let tf = function (i) {
    return (i < 10 ? '0' : '') + i;
  };

  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear());
        break;

      case 'MM':
        return tf(t.getMonth() + 1);
        break;

      case 'mm':
        return tf(t.getMinutes());
        break;

      case 'dd':
        return tf(t.getDate());
        break;

      case 'HH':
        return tf(t.getHours());
        break;

      case 'ss':
        return tf(t.getSeconds());
        break;
    }
  });
});
vue_esm["default"].filter("filterOrign", function (value) {
  return value == "1" ? "pc" : value == '2' ? "h5" : "app";
});
vue_esm["default"].filter("filterArray", function (arr) {
  if (arr && arr.length > 1) {
    return arr.join("/");
  } else if (arr && arr.length === 1) {
    return arr[0];
  }
});
vue_esm["default"].filter("filterStatus", function (value) {
  let data;

  switch (value) {
    case 'open':
      data = '已开奖';
      break;

    case 'winning':
      data = '已中奖';
      break;

    case 'fast':
      data = '快速玩法';
      break;

    case 'canceled':
      data = '撤销';
      break;
  }

  return data;
});
/* harmony default export */ var chaseNoteDetail = ({
  data() {
    return {
      LANG
    };
  },

  props: ['tableData'],

  created() {},

  mounted() {},

  watch: {
    tableData: function () {}
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-efc0f0da","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/chaseNoteDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"noteDetail"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('table',{staticClass:"el-table el-table__header",staticStyle:{"width":"100%"},attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('tr',[_c('th',{staticClass:"is-leaf",attrs:{"colspan":"4","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['注单号：'] || '注单号：')+_vm._s(_vm.tableData.order_number))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['用户名'] || '用户名'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.user_name))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['上级代理'] || '上级代理'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.agent_name))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['投注时间'] || '投注时间'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatDate")(_vm.tableData.created,'yyyy-MM-dd HH:mm:ss'))+" ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['投注金额'] || '投注金额'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.pay_money/100))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['彩票名称'] || '彩票名称'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.lottery_name))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['有效投注'] || '有效投注'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.valid_bet /100))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['玩法'] || '玩法'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.play_type1_name))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['赔率'] || '赔率'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("filterArray")(_vm.tableData.odds)))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['期号'] || '期号'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.lottery_number))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['派彩金额'] || '派彩金额'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.send_prize /100))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['状态'] || '状态'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("filterStatus")(_vm.tableData.state)))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['输赢'] || '输赢'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.lose_earn/100))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['来源'] || '来源'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("filterOrign")(_vm.tableData.origin)))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['所属追号'] || '所属追号'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.chase_number))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['投注内容'] || '投注内容'))])]),_vm._v(" "),_c('td',{attrs:{"colspan":"3"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.play_number))])])])])])],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/chaseNoteDetail.vue
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
  chaseNoteDetail,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_chaseNoteDetail = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/instantNote/chaseNumber.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





vue_esm["default"].filter('state', function (item) {
  if (item === 'underway') {
    return '进行中';
  } else if (item === 'open') {
    return '已结算';
  } else if (item === 'cancel') {
    return '已取消';
  }
});
/* harmony default export */ var chaseNumber = ({
  data() {
    return {
      LANG,
      columnsUrl: '',
      tableUrl: '',
      baseUrl: '',
      //弹窗相关
      formTtile: "",
      FormVisible: false,
      detailForm: {},
      searchConfig: [{
        "prop": "user_name",
        "value": "",
        "type": "text",
        "label": "用户名"
      }, {
        "prop": "chase_number",
        "value": "",
        "type": "text",
        "label": "追号单号"
      }, {
        "prop": "lottery_id",
        "value": "",
        "label": "彩票名称",
        "type": "select",
        "list": []
      }, {
        "prop": "state",
        "value": "",
        "label": "状态",
        "type": "select",
        "list": [{
          "label": "进行中",
          "value": "underway"
        }, {
          "label": "已结算",
          "value": "open"
        }]
      }, {
        "prop": "origin",
        "value": "",
        "label": "来源",
        "type": "select",
        "list": [{
          "label": "PC",
          "value": "1"
        }, {
          "label": "H5",
          "value": "2"
        }, {
          "label": "移动端",
          "value": "3"
        }]
      }, {
        "type": "dateGroup",
        "label": "建立时间",
        "prop": [{
          "prop": "start_time",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "end_time",
          "value": "",
          "label": "结束时间"
        }]
      }],
      typeSearch: "search",
      labelWidthSearch: "100px",
      formVisibleSearch: {
        state: false
      },
      //是否编辑数据
      isEditSearch: {
        state: false
      },
      //详情界面数据
      dialogVisible: false,
      dialogTitle: '',
      // 是否编辑数据
      isEdit: {
        state: false
      },
      //刷新当前数据
      updated: false,
      formType: '',
      loading: false,
      //确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: ""
      },
      btnShow: false,
      chase_number: null,
      tableData: [{
        label: '用户名',
        value: ''
      }, {
        label: '上级代理',
        value: ''
      }, {
        label: '建立时间',
        value: ''
      }, {
        label: '追号金额',
        value: ''
      }, {
        label: '彩票名称',
        value: ''
      }, {
        label: '玩法',
        value: ''
      }, {
        label: '内容',
        value: ''
      }, {
        label: '赔率',
        value: ''
      }, {
        label: '追号类型',
        value: ''
      }, {
        label: '来源',
        value: ''
      }, {
        label: '状态',
        value: ''
      }, {
        label: '盈亏',
        value: ''
      }],
      tableList: '',
      modeData: {}
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    chaseNoteDetail: components_chaseNoteDetail,
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      var _this = this;

      this.playType = "彩票标准玩法";
      this.nowPlayType = "lottery";
      this.columnsUrl = "/static/json/Note/lottery/columns2.json";
      this.tableUrl = URL.api + ROUTES.GET.lottery.chase + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
      this.baseUrl = URL.api + ROUTES.GET.lottery.chase; //获取彩票名称

      this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.types.$, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];

            for (let k in model) {
              if (model[k].pid !== 0 && model[k].is_standard === '1') {
                _this.searchConfig[2].list.push({
                  "label": model[k]['name'],
                  "value": model[k]['id']
                });
              }
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.lottery.types.$, URLCONFIG).then(function (res) {
      //     if (res.data.state == 0 && res.data.data) {
      //         let model = res.data.data || [];
      //         for (let k in model) {
      //             if (model[k].pid !== 0 && model[k].is_standard === '1') {
      //                 _this.searchConfig[2].list.push({
      //                     "label": model[k]['name'],
      //                     "value": model[k]['id']
      //                 });
      //             }
      //         }
      //     }
      // });
    },

    //搜索
    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    //  重置搜索条件
    resetForm(obj) {
      if (obj.state && obj.state == "init") {
        this.tableUrl = this.baseUrl + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
      }
    },

    doHandle(item) {
      switch (item.fn) {
        case "doStop":
          this.doStop(item.row);
          break;

        case "doDet":
          this.doDet(item.row);
          break;

        case "openMember":
          this.openMember(item.row);
          break;
      }
    },

    openMember(obj) {
      this.$router.push({
        path: "/memberManagement",
        query: {
          name: obj.user_name
        }
      });
    },

    //停用   停用的接口还没有出
    doStop(item) {
      this.confirmConfig.state = true;
      this.confirmConfig.msg = this.LANG['确定停用吗?'] || '确定停用吗?';
      this.confirmConfig.fn = "stop";
      this.confirmConfig.obj = item.chase_number;
    },

    doConfirm(obj) {
      let _this = this;

      this.updated = false;

      switch (obj.fn) {
        case "stop":
          this.dialogVisible = false;
          let chase_number = obj.obj;
          let url = URL.api + ROUTES.PATCH.lottery.chase + `${chase_number}`;
          this.$.autoAjax('patch', url, {}, {
            ok: res => {
              if (res.state === 0 && res.data !== false) {
                let str = LANG['停用成功'] || '停用成功';
                this.$message.success(str);
                _this.updated = true;
              } else {
                let str = LANG['停用失败'] || '停用失败';
                this.$message.error(str + ':' + res.msg);
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.patch(url, {}, URLCONFIG).then((res) => {
          //     if (res.data.state === 0 && res.data.data !== false) {
          //         let str = LANG['停用成功'] || '停用成功';
          //         this.$message.success(str);
          //         _this.updated = true;
          //     } else {
          //         let str = LANG['停用失败'] || '停用失败';
          //         this.$message.error(str + ':' + res.data.msg)
          //     }
          // }).catch(function (err) {
          //    console.log(err)
          // });

          break;
      }
    },

    handleClose() {
      this.dialogVisible = false;
    },

    //停止追号操作
    stopZh(done) {
      this.confirmConfig.state = true;
      this.confirmConfig.msg = this.LANG['确定停用吗?'] || '确定停用吗?';
      this.confirmConfig.fn = "stop";
      this.confirmConfig.obj = this.chase_number;
    },

    doDet(item) {
      let _this = this;

      this.dialogTitle = '用户' + item.user_name + ' 的详情';
      this.dialogVisible = true;
      this.chase_number = item.chase_number; //item.chase_number;

      let infoUrl = URL.api + ROUTES.GET.lottery.info + '/' + item.chase_number;
      this.$.autoAjax('get', infoUrl, '', {
        ok: res => {
          if (res.state === 0) {
            let model = res.data || [];
            this.modeData = model;
            _this.tableData[0].value = model.name;
            _this.tableData[1].value = model.agent;
            _this.tableData[2].value = model.created;
            _this.tableData[3].value = model.total_price / 100;
            _this.tableData[4].value = model.lottery_name;
            _this.tableData[5].value = model.odds_type;
            _this.tableData[6].value = model.result || model.odds_type || '';
            _this.tableData[7].value = model.odds;
            _this.tableData[8].value = model.prize_stop;
            _this.tableData[9].value = model.origin;
            _this.tableList = model.chase_list; //处理状态数据

            let state = '';

            switch (model.state) {
              case 'underway':
                this.btnShow = true;
                state = '进行中';
                break;

              case 'open':
                this.btnShow = false;
                state = '已结算';
                break;

              case 'cancel':
                this.btnShow = false;
                state = '已取消';
                break;
            }

            _this.tableData[10].value = state;
            _this.tableData[11].value = model.lose_earn / 100;
          } else {
            let str = LANG['获取详情失败'] || '获取详情失败';
            this.$message.error(str);
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(infoUrl, URLCONFIG).then((res) => {
      //     if (res.data.state === 0) {
      //         let model = res.data.data || [];
      //         this.modeData = model;
      //         _this.tableData[0].value = model.name;
      //         _this.tableData[1].value = model.agent;
      //         _this.tableData[2].value = model.created;
      //         _this.tableData[3].value = model.total_price / 100;
      //         _this.tableData[4].value = model.lottery_name;
      //         _this.tableData[5].value = model.odds_type;
      //         _this.tableData[6].value = model.result || model.odds_type || '';
      //         _this.tableData[7].value = model.odds;
      //         _this.tableData[8].value = model.prize_stop;
      //         _this.tableData[9].value = model.origin;
      //         _this.tableList = model.chase_list;
      //         //处理状态数据
      //         let state = '';
      //         switch (model.state) {
      //             case 'underway':
      //                 this.btnShow = true;
      //                 state = '进行中';
      //                 break;
      //             case 'open':
      //                 this.btnShow = false;
      //                 state = '已结算';
      //                 break;
      //             case 'cancel':
      //                 this.btnShow = false;
      //                 state = '已取消';
      //                 break;
      //         }
      //         _this.tableData[10].value = state;
      //         _this.tableData[11].value = model.lose_earn / 100;
      //     } else {
      //         let str = LANG['获取详情失败'] || '获取详情失败';
      //         this.$message.error(str)
      //     }
      // });
    },

    getDetail(obj) {
      this.FormVisible = true;
      this.formTtile = '注单详情';
      let url = URL.api + `/lottery/order/${obj}`;

      let _this = this;

      this.$.autoAjax('get', url, '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            let model = res.data;

            for (let i in model) {
              _this.$set(_this.detailForm, i, model[i]);
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(url, URLCONFIG).then(res => {
      //     if (res.data.state === 0 && res.data.data) {
      //         let model = res.data.data;
      //         for (let i in model) {
      //             _this.$set(_this.detailForm, i, model[i])
      //         }
      //     }
      // })
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dc5e41a2","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/instantNote/chaseNumber.vue
var chaseNumber_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"chaseNumber"}},[_c('el-row',[_c('formEdit',{attrs:{"formVisible":_vm.formVisibleSearch,"formConfig":_vm.searchConfig,"type":_vm.typeSearch,"labelWidth":_vm.labelWidthSearch,"isEdit":_vm.isEditSearch,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"pageSet":true,"updated":_vm.updated,"tableIndex":false},on:{"do-handle":_vm.doHandle}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-dialog',{attrs:{"title":_vm.dialogTitle,"visible":_vm.dialogVisible,"size":"small","before-close":_vm.handleClose},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('span',[_vm._v("追号编号"+_vm._s(_vm.chase_number))]),_vm._v(" "),_c('el-row',{staticClass:"tCent"},_vm._l((_vm.tableData),function(items,index){return _c('el-col',{key:index,attrs:{"span":12}},[_c('div',[_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(items.label))]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_vm._v(_vm._s(items.value))])],1)])}),1),_vm._v(" "),_c('div',[_c('span',[_vm._v("追号状态")]),_vm._v(" "),_c('span',[_vm._v("已追 "),_c('font',[_vm._v(_vm._s(_vm.modeData.finish))]),_vm._v("期/共"+_vm._s(_vm.modeData.total)+"期")],1)]),_vm._v(" "),_c('el-row',{staticClass:"tCent"},_vm._l((_vm.tableList),function(items,index){return _c('el-col',{key:index,attrs:{"span":24}},[_c('div',[_c('el-col',{attrs:{"span":5}},[_vm._v("第"+_vm._s(items.lottery_number)+"期")]),_vm._v(" "),_c('el-col',{attrs:{"span":5}},[_vm._v(_vm._s(_vm._f("formatMoney")(items.price))+"元")]),_vm._v(" "),_c('el-col',{attrs:{"span":5}},[_vm._v(_vm._s(_vm._f("state")(items.state)))]),_vm._v(" "),_c('el-col',{attrs:{"span":5}},[_vm._v(_vm._s(_vm._f("formatMoney")(items.lose_earn)))]),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[(items.order_id)?_c('a',{staticClass:"orderDetail",on:{"click":function($event){return _vm.getDetail(items.order_id)}}},[_vm._v("注单详情")]):_vm._e()])],1)])}),1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[(_vm.btnShow)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.stopZh}},[_vm._v("停止追号")]):_vm._e(),_vm._v(" "),_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("关闭")])],1)],1)],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-dialog',{staticClass:"fromTitle",attrs:{"title":_vm.formTtile},model:{value:(_vm.FormVisible),callback:function ($$v) {_vm.FormVisible=$$v},expression:"FormVisible"}},[_c('chaseNoteDetail',{attrs:{"tableData":_vm.detailForm}}),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.FormVisible = false}}},[_vm._v(_vm._s(_vm.LANG['关闭'] || '关闭'))])],1)],1)],1)],1)}
var chaseNumber_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/instantNote/chaseNumber.vue
function injectStyle (context) {
  __webpack_require__(503)
}
/* script */


/* template */

/* template functional */
var chaseNumber_vue_template_functional_ = false
/* styles */
var chaseNumber_vue_styles_ = injectStyle
/* scopeId */
var chaseNumber_vue_scopeId_ = "data-v-dc5e41a2"
/* moduleIdentifier (server only) */
var chaseNumber_vue_module_identifier_ = null

var chaseNumber_Component = Object(component_normalizer["a" /* default */])(
  chaseNumber,
  chaseNumber_render,
  chaseNumber_staticRenderFns,
  chaseNumber_vue_template_functional_,
  chaseNumber_vue_styles_,
  chaseNumber_vue_scopeId_,
  chaseNumber_vue_module_identifier_
)

/* harmony default export */ var instantNote_chaseNumber = __webpack_exports__["default"] = (chaseNumber_Component.exports);


/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);