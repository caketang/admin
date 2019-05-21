(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/changePlay.vue + 2 modules
var changePlay = __webpack_require__(271);

// EXTERNAL MODULE: ./src/components/dateTimePicker.vue + 2 modules
var dateTimePicker = __webpack_require__(208);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/noteDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  if (arr.length && arr.length > 1) {
    return arr.join("/");
  } else {
    return arr[0];
  }
});
vue_esm["default"].filter("filterStatus", function (value) {
  return value == "open" ? "已结算" : value == "unopen" ? "未结算" : "已撤销";
});
/* harmony default export */ var noteDetail = ({
  data() {
    return {
      LANG
    };
  },

  props: {
    tableData: Array
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-792db5b0","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/noteDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"noteDetail"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('table',{staticClass:"el-table el-table__header",staticStyle:{"width":"100%"},attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('tr',[_c('th',{staticClass:"is-leaf",attrs:{"colspan":"4","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['注单号：'] || '注单号：')+_vm._s(_vm.tableData.order_number))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['用户名'] || '用户名'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.user_name))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['上级代理'] || '上级代理'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.agent_name))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['投注时间'] || '投注时间'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatDate")(_vm.tableData.created,'yyyy-MM-dd HH:mm:ss'))+" ")])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['投注金额'] || '投注金额'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.tableData.pay_money)))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['彩票名称'] || '彩票名称'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.lottery_name))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['有效投注'] || '有效投注'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.tableData.valid_bet)))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['玩法'] || '玩法'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.odds_type))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['赔率'] || '赔率'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("filterArray")(_vm.tableData.odds)))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['期号'] || '期号'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.lottery_number))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['派彩金额'] || '派彩金额'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.tableData.send_prize)))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['注数'] || '注数'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.bet_num))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['倍数'] || '倍数'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.times))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['状态'] || '状态'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("filterStatus")(_vm.tableData.status)))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['输赢'] || '输赢'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.tableData.lose_earn)))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['来源'] || '来源'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("filterOrign")(_vm.tableData.origin)))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['所属追号'] || '所属追号'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.chase_number))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['投注内容'] || '投注内容'))])]),_vm._v(" "),_c('td',{attrs:{"colspan":"3"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.play_number))])])]),_vm._v(" "),_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['开奖号码'] || '开奖号码'))])]),_vm._v(" "),_c('td',{attrs:{"colspan":"3"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.tableData.period_code))])])])])])],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/noteDetail.vue
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
  noteDetail,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_noteDetail = (Component.exports);

// EXTERNAL MODULE: ./src/components/quickDate.vue + 2 modules
var quickDate = __webpack_require__(223);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/lottey/lotterSingleNote.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var lotterSingleNote = ({
  data() {
    return {
      initName: {
        lottery: {
          nameval: ""
        }
      },
      formType: "",
      type: "search",
      labelWidth: "90px",
      //搜索相关
      searchConfig: [{
        "type": "quickDate",
        "showTimes": true
      }, //快捷日期
      {
        "prop": "user_name",
        "value": "",
        "label": "用户名",
        "type": "text"
      }, {
        "prop": "order_number",
        "value": "",
        "type": "text",
        "label": "注单号"
      }, {
        "prop": "lottery_id",
        "value": "",
        "label": "彩票名称",
        "type": "select",
        "list": []
      }, {
        "prop": "play_type",
        "value": "",
        "label": "玩 法",
        "type": "select",
        "list": []
      }, {
        "prop": "status",
        "value": "",
        "label": "注单状态",
        "type": "select",
        "list": [{
          "value": "open",
          "label": "已结算"
        }, {
          "value": "unopen",
          "label": "未结算"
        }, {
          "value": "canceled",
          "label": "已撤销"
        }]
      }, {
        "prop": "origin",
        "value": "",
        "label": "来 源",
        "type": "select",
        "list": ARRAYS.PLATFORMS1
      }, {
        "prop": "lottery_number",
        "value": "",
        "type": "text",
        "label": "期 号"
      }, {
        "type": "dateTimeGroup",
        "label": "投注时间",
        "prop": [{
          "prop": "date_from",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "date_to",
          "value": "",
          "label": "结束时间"
        }]
      }],
      formVisible: {
        state: false
      },
      LANG,
      isEdit: {
        state: false
      },
      //表格地址
      columnsUrl: "",
      tableUrl: "",
      baseUrl: "",
      //当前彩票玩法
      playType: "",
      //日期初始时间
      Sdate: {
        "dateStart": "",
        "dateEnd": ""
      },
      reSet: false,
      //彩票名称列表
      lotteryList: [],
      playTypeList: [],
      numList: [],
      //搜索条件
      editForm: {
        user_name: '',
        order_number: '',
        lottery_id: '',
        play_type: '',
        status: '',
        origin: '',
        lottery_number: '',
        date_from: sessionStorage.sysTime,
        date_to: sessionStorage.sysTime
      },
      //弹窗相关
      formTtile: "",
      FormVisible: false,
      detailForm: [],
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: ""
      },
      updated: false,
      lotteryPid: -1,
      // 请求loading
      loading: false,
      // 小计
      subTotalMoney: {
        lose_earn: 0,
        pay_money: 0,
        send_prize: 0,
        valid_bet: 0
      },
      totalMoney: {
        lose_earn: 0,
        pay_money: 0,
        send_prize: 0,
        valid_bet: 0
      },
      tableLength: 0,
      formReset: false
    };
  },

  components: {
    changeplay: changePlay["a" /* default */],
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    notedetail: components_noteDetail,
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    //页面初始化
    init() {
      var _this = this;

      this.playType = this.playType === "standard" ? "standard" : "fast";
      this.$route.query.name; // 判断玩法

      if (this.playType === "standard") {
        // 标准
        this.$route.query.name ? this.$route.query.lotteryType ? this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType + "&lottery_id=" + this.$route.query.lotteryId + "&lottery_number=" + this.$route.query.lotteryNumber + "?date_from=" + sessionStorage.sysTime + "&date_to=" + sessionStorage.sysTime : this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType + "&date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd + "&user_name=" + this.$route.query.name : this.$route.query.lotteryType ? this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType + "&lottery_id=" + this.$route.query.lotteryId + "&lottery_number=" + this.$route.query.lotteryNumber + "?date_from=" + sessionStorage.sysTime + "&date_to=" + sessionStorage.sysTime : this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType + "&date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
        this.columnsUrl = "static/json/lotteryNew/lottersinglenote/standard/columns.json";
      } else {
        // 快速
        this.$route.query.lotteryType ? this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType + "&lottery_id=" + this.$route.query.lotteryId + "&lottery_number=" + this.$route.query.lotteryNumber + "&play_type=" + this.$route.query.playName + "&date_from=" + sessionStorage.sysTime + "&date_to=" + sessionStorage.sysTime : this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType + "&date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
        this.columnsUrl = "static/json/lotteryNew/lottersinglenote/quick/columns.json";
      } // this.tableUrl = URL.api + ROUTES.GET.lottery.orders + "?type=" + this.playType;


      this.baseUrl = URL.api + ROUTES.GET.lottery.orders; //初始化彩票名称

      this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.types.$, '', {
        ok: res => {
          let model = res.data || [];
          this.searchConfig[3].list = []; // if (model.length > 0) {

          for (let i in model) {
            if (model[i].pid != 0) {
              let state = model[i].state || "";
              let regular = _this.playType === "standard" ? /standard/ : /fast/;

              if (regular.test(state)) {
                this.searchConfig[3].list.push({
                  "label": model[i].name,
                  "value": model[i].id.toString(),
                  "pid": model[i].pid
                });
              }
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //切换彩票名称
    changeLottery(obj) {
      if (obj.key !== "lottery_id") {
        return;
      }

      let model = this.searchConfig[3].list;

      for (let k in model) {
        if (model[k].value === obj.obj.lottery_id) {
          this.lotteryPid = model[k].pid;
        }
      }

      this.initName.lottery.nameval = "play_type,";
      setTimeout(() => {
        this.initName.lottery.nameval = "-1";
      }, 500);
      this.getPlayList();
    },

    //获取玩法
    getPlayList() {
      let _this = this;

      this.searchConfig[4].list = [];
      this.playType = this.playType === "standard" ? "standard" : "fast";
      this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.types.class.$(this.playType), '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];
            let lotteryPid = _this.lotteryPid;
            _this.playTypeList = [];

            for (let k in model) {
              if (model[k].id == lotteryPid) {
                let data = model[k].sub || [];

                for (let n in data) {
                  _this.searchConfig[4].list.push({
                    "label": data[n].name,
                    "value": data[n].id.toString()
                  });
                }

                return;
              }
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //切换玩法
    doChangePlay(str) {
      let _this = this;

      this.formReset = false;

      if (str.item === this.playType) {
        return;
      }

      this.playType = str.item;
      this.resetForm();
      setTimeout(() => {
        _this.formReset = true;
      }, 200);
    },

    getDateval(obj) {
      if (obj.day === "") {
        if (obj.daykey) {
          this.editForm[obj.daykey] = "";
        }
      }
    },

    getDay(obj) {
      this.editForm.date_from = obj.sday;
      this.editForm.date_to = obj.eday;
    },

    //执行查询
    doQuery(obj) {
      let str = this.addSearch(obj.item);

      if (!str) {
        this.tableUrl = this.baseUrl + '?type=' + this.playType;
      } else {
        this.tableUrl = this.baseUrl + this.addSearch(obj.item) + '&type=' + this.playType;
      }
    },

    resetForm() {
      this.tableUrl = this.baseUrl + '?type=' + this.playType + "&date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
    },

    //处理操作事件
    doHandle(obj) {
      this.updated = false;

      if (obj.fn == 'doDetail') {
        this.doDetail(obj.row);
      }

      if (obj.fn == 'doKillOrder') {
        this.doKillOrder(obj.row);
      }

      switch (obj.fn) {
        case "openUserSet":
          // 用户名跳转
          this.openUserSet(obj.row);
          break;

        case "openAgentSet":
          //代理跳转跳转
          this.openAgentSet(obj.row);
          break;

        default:
          break;
      }
    },

    openUserSet(item) {
      this.$router.push({
        path: '/memberManagement',
        query: {
          name: item.user_name
        }
      });
    },

    openAgentSet(item) {
      this.$router.push({
        path: "/agentAccount",
        query: {
          name: item.agent_name
        }
      });
    },

    //显示详情
    doDetail(row) {
      this.detailForm = [];
      this.FormVisible = true;
      this.formTtile = '注单详情';
      let detailForm = this.detailForm;

      for (let i in row) {
        detailForm[i] = row[i];
      }
    },

    doConfirm(obj) {
      // let _this = this;
      this.updated = false;
      let object = {};

      if (obj.obj) {
        object = obj.obj;
      }

      let id = parseInt(obj.obj.id);

      switch (obj.fn) {
        case "doKillOrder":
          this.loading = true;
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.lottery.order + "/" + id, {
            "state": "canceled"
          }, {
            ok: res => {
              if (res.state == 0 && res.data) {
                this.$message.success(LANG['恭喜您，撤销成功！'] || '恭喜您，撤销成功！');
                this.updated = true;
              } else {
                res.data ? this.$message.error(LANG['撤销失败，请稍候重试！'] || '撤销失败，请稍候重试！') : this.$message(res.msg);
              }

              this.loading = false;
            },
            p: () => {},
            error: e => {
              this.loading = false;
            }
          });
          break;
      }
    },

    //撤单
    doKillOrder(row) {
      this.confirmConfig.state = true;
      this.confirmConfig.msg = this.LANG['确定撤销么？'] || '确定撤销么？';
      this.confirmConfig.fn = "doKillOrder";
      this.confirmConfig.obj = row;
    },

    // 获取总计小计
    getTableData(obj) {
      this.tableLength = 0;
      this.subTotalMoney = {
        lose_earn: 0,
        pay_money: 0,
        send_prize: 0,
        valid_bet: 0
      };
      this.totalMoney = {
        lose_earn: 0,
        pay_money: 0,
        sendPrize: 0,
        valid_bet: 0
      };

      if (obj.allData && obj.allData.attributes) {
        this.tableLength = parseInt(obj.allData.attributes.total);
      }

      if (obj.allData && obj.allData.attributes && obj.allData.attributes.subTotalMoney) {
        this.subTotalMoney.lose_earn = FORMATMONEY(obj.allData.attributes.subTotalMoney.lose_earn);
        this.subTotalMoney.pay_money = FORMATMONEY(obj.allData.attributes.subTotalMoney.pay_money);
        this.subTotalMoney.send_prize = FORMATMONEY(obj.allData.attributes.subTotalMoney.send_prize);
        this.subTotalMoney.valid_bet = FORMATMONEY(obj.allData.attributes.subTotalMoney.valid_bet);
      }

      if (obj.allData && obj.allData.attributes && obj.allData.attributes.totalMoney) {
        this.totalMoney.lose_earn = FORMATMONEY(obj.allData.attributes.totalMoney.lose_earn);
        this.totalMoney.pay_money = FORMATMONEY(obj.allData.attributes.totalMoney.pay_money);
        this.totalMoney.send_prize = FORMATMONEY(obj.allData.attributes.totalMoney.send_prize);
        this.totalMoney.valid_bet = FORMATMONEY(obj.allData.attributes.totalMoney.valid_bet);
      }
    }

  },

  mounted() {},

  activated() {
    this.searchConfig[1]['value'] = '';
    this.formType = 'update' + (Math.random() * 9 + 1);

    if (this.$route.query.name) {
      this.searchConfig[1]['value'] = this.$route.query.name;
    }

    this.$route.query.lotteryType ? this.playType = this.$route.query.lotteryType : this.playType = 'standard';
    this.init();
  },

  deactivated() {
    this.$route.query.lotteryType = null;
    this.searchConfig[1]['value'] = '';
  },

  created: function () {
    // 默认查看标准玩法
    if (this.$route.query.lotteryType) {
      this.playType = this.$route.query.lotteryType;
    } else {
      this.playType = 'standard';
    }

    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-680f8b09","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/lottey/lotterSingleNote.vue
var lotterSingleNote_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix w100",attrs:{"id":"lotterNoteSet"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('changeplay',{attrs:{"active":_vm.playType},on:{"do-change-play":_vm.doChangePlay}})],1)],1),_vm._v(" "),_c('el-row',{attrs:{"id":""}},[_c('el-col',{staticStyle:{"margin":"10px 0"},attrs:{"span":24}},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formReset":_vm.formReset,"formType":_vm.formType,"showAdd":false,"updateKeys":_vm.initName.lottery.nameval},on:{"get-select":_vm.changeLottery,"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('tablegrid',{ref:"bankTable",staticClass:"bankTable",attrs:{"updated":_vm.updated,"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"showRefresh":false,"getData":true},on:{"get-table-data":_vm.getTableData,"do-handle":_vm.doHandle}},[(_vm.tableLength > 0)?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"10"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.send_prize))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.lose_earn))])]),_vm._v(" "),_c('td',{attrs:{"colspan":"3"}})]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0)?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"10"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['总计'] || '总计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.send_prize))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.lose_earn))])]),_vm._v(" "),_c('td',{attrs:{"colspan":"3"}})]):_vm._e()])],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-dialog',{staticClass:"fromTitle",attrs:{"title":_vm.formTtile},model:{value:(_vm.FormVisible),callback:function ($$v) {_vm.FormVisible=$$v},expression:"FormVisible"}},[_c('notedetail',{attrs:{"tableData":_vm.detailForm}}),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.FormVisible = false}}},[_vm._v(_vm._s(_vm.LANG['关闭'] || '关闭'))])],1)],1)],1)],1)}
var lotterSingleNote_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/lottey/lotterSingleNote.vue
function injectStyle (context) {
  __webpack_require__(462)
}
/* script */


/* template */

/* template functional */
var lotterSingleNote_vue_template_functional_ = false
/* styles */
var lotterSingleNote_vue_styles_ = injectStyle
/* scopeId */
var lotterSingleNote_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var lotterSingleNote_vue_module_identifier_ = null

var lotterSingleNote_Component = Object(component_normalizer["a" /* default */])(
  lotterSingleNote,
  lotterSingleNote_render,
  lotterSingleNote_staticRenderFns,
  lotterSingleNote_vue_template_functional_,
  lotterSingleNote_vue_styles_,
  lotterSingleNote_vue_scopeId_,
  lotterSingleNote_vue_module_identifier_
)

/* harmony default export */ var lottey_lotterSingleNote = __webpack_exports__["default"] = (lotterSingleNote_Component.exports);


/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/changePlay.vue
//
//
//
//
//
//
/* harmony default export */ var changePlay = ({
  data() {
    return {
      LANG,
      //标准玩法选中状态
      standardActive: "primary",
      //快捷玩法选中状态
      quickActive: ""
    };
  },

  props: {
    active: {
      type: String,
      default: "standard"
    }
  },
  methods: {
    //初始化
    init() {// if(this.active != "standard"){
      //     this.doChangePlay("fast")
      // }
    },

    //切换玩法
    doChangePlay(str) {
      if (str == 'standard') {
        this.standardActive = "primary";
        this.quickActive = "";
        this.$emit("do-change-play", {
          "item": "standard"
        });
      } else {
        this.standardActive = "";
        this.quickActive = "primary";
        this.$emit("do-change-play", {
          "item": "fast"
        });
      }
    }

  },
  watch: {
    active: function (newval) {
      if (newval) {
        this.doChangePlay(newval);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4923e83e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/changePlay.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"typeBtn"},[_c('el-button',{attrs:{"type":_vm.standardActive,"size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['官方玩法'] || '官方玩法')},on:{"click":function($event){return _vm.doChangePlay('standard')}}}),_vm._v(" "),_c('el-button',{attrs:{"type":_vm.quickActive,"size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['信用玩法'] || '信用玩法')},on:{"click":function($event){return _vm.doChangePlay('fast')}}})],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/changePlay.vue
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
  changePlay,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_changePlay = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);