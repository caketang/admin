(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: delegated ./node_modules/echarts/index.js from dll-reference vendor_library
var echartsfrom_dll_reference_vendor_library = __webpack_require__(46);
var echartsfrom_dll_reference_vendor_library_default = /*#__PURE__*/__webpack_require__.n(echartsfrom_dll_reference_vendor_library);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/charts/echarts.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var echarts = ({
  data() {
    return {
      chartZxt: null,
      chartMobile: null,
      chartGame: null
    };
  },

  props: {
    //DOM样式名
    domName: {
      type: String,
      default: ""
    },
    //图表类型
    type: {
      type: String,
      default: ""
    },
    //数据源列表
    titleList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    //图表数据
    dataList: [Array, Object],
    //数据源配置
    dataConfig: {
      type: Array,
      default: () => {
        return [];
      }
    },
    colors: {
      type: Array,
      default: () => {
        return ['#13CE66', '#09b3cc', '#fc5a58', '#fd8560', '#f8a72b', '#01b68d', '#2b8fda', '#ad8ce5', '#ff5c91', '#cccccc'];
      }
    },
    updateData: Boolean
  },
  components: {},
  methods: {
    init() {
      this.chartZxt = echartsfrom_dll_reference_vendor_library_default.a.init(document.getElementsByClassName(this.domName)[0]);
      this.chartZxt.setOption(this.chartConfig());
    },

    chartConfig() {
      let obj = {};
      let model = this.titleList;

      if (this.type === "line") {
        //曲线图
        //鼠标移上效果
        obj.tooltip = {
          trigger: 'axis'
        };
        obj.legend = {
          data: []
        }; //写图表数据类型

        for (let k in model) {
          obj.legend.data.push(model[k]);
        } //样式，边框


        obj.grid = {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        }; //X柚配置

        let xArr = this.dataConfig;
        let list1 = this.dataList[this.dataConfig[0]];
        obj.xAxis = {
          data: []
        };

        for (let i in list1) {
          obj.xAxis.data.push(list1[i]);
        } //Y柚  设置


        obj.yAxis = {
          splitLine: {
            show: true
          }
        }; //曲线图值数据

        obj.series = []; //根据配置写数据

        for (let i = 0; i < this.titleList.length; i++) {
          obj.series.push({
            name: this.titleList[i],
            type: 'line',
            stack: null,
            itemStyle: {
              normal: {
                color: this.colors[i - 1]
              }
            },
            data: []
          });
          let arr1 = this.dataList[this.dataConfig[parseInt(i) + 1]] || [];

          for (let k in arr1) {
            obj.series[i].data.push(arr1[k]);
          }
        }
      } else if (this.type === "round") {
        //环形图
        //鼠标移上效果
        obj.tooltip = {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {d}%"
        };
        obj.legend = {
          orient: 'vertical',
          //垂直
          x: 'left',
          //方向
          data: []
        }; //写图表数据类型

        for (let k in model) {
          obj.legend.data.push(model[k]);
        } // 写图表数据


        obj.series = [];
        obj.series[0] = {
          name: LANG["当前占比"] || "当前占比",
          type: 'pie',
          radius: ['80%', '30%'],
          //左为外半径，右边为内半径
          //                        center: ['50%', '60%'],//位置
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '24',
                fontWeight: '600'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }; //根据配置写数据

        let list = this.dataList[0] || [];
        let list1 = this.dataList[1] || [];

        for (let i = 0; i < list.length; i++) {
          obj.series[0].data.push({
            value: list1[i],
            name: list[i],
            itemStyle: {
              normal: {
                color: this.colors[i]
              }
            }
          });
        }
      } else if (this.type === "histogram") {
        //柱状图
        obj.color = this.colors; //颜色数组

        obj.tooltip = {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

          }
        };
        obj.legend = {
          data: []
        }; //写图表数据类型

        for (let k in model) {
          obj.legend.data.push(model[k]);
        }

        obj.grid = {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        };
        obj.xAxis = [];
        obj.xAxis = {
          type: 'category',
          data: []
        };
        let xArr = this.dataList[this.dataConfig[0]][0] || [];

        for (let j in xArr) {
          obj.xAxis.data.push(xArr[j]);
        }

        obj.yAxis = [{
          type: 'value'
        }];
        obj.series = [];

        for (let m = 0; m < this.titleList.length; m++) {
          obj.series.push({
            name: this.titleList[m],
            type: 'bar',
            data: this.dataList[this.dataConfig[m]][1]
          });
        }
      }

      return obj;
    }

  },
  mounted: function () {
    // 线形图
    this.init();
  },
  watch: {
    updateData: function (newVal) {
      if (newVal) {
        this.init();
      } else {
        this.init();
      }
    }
  },

  created() {}

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-afc3960e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/charts/echarts.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chart"},[_c('el-row',{attrs:{"gutter":22}},[_c('el-col',{class:_vm.domName,staticStyle:{"height":"400px"}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/charts/echarts.vue
function injectStyle (context) {
  __webpack_require__(413)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-afc3960e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  echarts,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var charts_echarts = (Component.exports);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/index/indexEcharts.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var indexEcharts = ({
  data() {
    return {
      LANG,
      //今日汇总
      active: 0,
      newly: 0,
      online: 0,
      deposite: 0,
      orders: 0,
      amount: 0,
      profit: 0,
      gross_profit: 0,
      new_deposit_members: 0,
      withdraw_money: 0,
      //表格列数据
      columnsUrl: "static/json/indexEcharts/columns.json",
      //表格数据
      tableUrl1: "",
      tableUrl2: "",
      tableUrl3: "",
      //会员统计
      //线形图
      domName: "line",
      type: "line",
      titleList: [LANG["总会员数"] || "总会员数", LANG["新增会员"] || "新增会员", LANG["存款会员数"] || "存款会员数", LANG["下注会员数"] || "下注会员数"],
      dataList: null,
      dataConfig: ["day", "total", "newly", "deposit", "orders"],
      //线形图2
      sumDomName: "sumDom",
      sumType: "line",
      sumTitleList: [LANG["总存款"] || "总存款", LANG["总取款"] || "总取款", LANG["总输赢"] || "总输赢"],
      sumDataList: null,
      sumDataConfig: ["day", "deposit", "withdraw", "profit"],
      //环形图
      roundName: "round",
      typeRound: "round",
      roundtitleList: [],
      roundDataList: [],
      roundDataList1: [],
      dataConfig1: ["channel", "orders"],
      gameType: "",
      //柱状图
      histogramName: "histogram",
      typeHistogram: "histogram",
      histogramTitleList: [LANG["彩票下单数"] || "彩票下单数", LANG["彩票下注金额"] || "彩票下注金额", LANG["彩票盈亏金额"] || "彩票盈亏金额"],
      histogramDataList: {
        "orders": [],
        "amount": [],
        "profit": []
      },
      histogramDataConfig: ["orders", "amount", "profit"],
      state: {
        memberShow: false,
        sumShow: false,
        gameShow: false,
        profitShow: true,
        depositShow: true,
        WithdrawShow: true
      },
      //各日期选中状态
      day: {
        chanelActive: false,
        gameActive: false,
        memberActive: false,
        sumActive: false
      },
      //各图表刷新状态
      reportUpdate: {
        chanelActive: false,
        gameActive: false,
        memberActive: false,
        sumActive: false
      },
      //图表切换更新
      updateData: false,
      //表格更新
      updatedProfit: false,
      updatedDeposit: false,
      updatedWithdraw: false,
      isActive: false,
      roundDataConfig: [],
      timeObj: {
        game_one: false,
        game_two: false,
        product_one: false,
        product_two: false,
        member_one: false,
        member_two: false,
        report_one: false,
        report_two: false
      }
    };
  },

  components: {
    editTable: tableGrid["a" /* default */],
    echarts: charts_echarts,
    tablegrid: tableGrid["a" /* default */]
  },
  watch: {
    '$route'(to, from) {
      //监听路由改变
      $('#indexEcharts').find('.tablesOverall').css('width', 'auto').find('table').css('min-width', '0px');
    }

  },
  methods: {
    init() {
      let _this = this;

      this.columnsUrl = "static/json/indexEcharts/columns.json";
      setTimeout(() => {
        this.tableUrl1 = URL.api + ROUTES.GET.stat.profit;
        this.tableUrl2 = URL.api + ROUTES.GET.stat.deposit;
        this.tableUrl3 = URL.api + ROUTES.GET.stat.withdraw;
      }, 3000); // 初始化状态

      this.timeObj = {
        game_one: false,
        game_two: false,
        product_one: false,
        product_two: false,
        member_one: false,
        member_two: false,
        report_one: false,
        report_two: false
      };
      this.initStat();
      this.sevenDaysMenber(7);
      this.sevenDaysMoney(7);
      this.channelDays(7);
      this.gamesDays(7);
      this.updatedProfit = true;
      this.updatedDeposit = true;
      this.updatedWithdraw = true;
      setTimeout(function () {
        _this.updatedProfit = false;
        _this.updatedDeposit = false;
        _this.updatedWithdraw = false;
      }, 2000);
    },

    // 设置多久不能点
    setTimeOutFn(key, num, state) {
      if (!key) {
        return;
      }

      if (num && FORMATNUMBER(num)) {
        num = FORMATNUMBER(num) * 1000;
      } else {
        num = 3 * 1000;
      }

      let obj = this.timeObj;

      if (obj[key] != undefined) {
        setTimeout(() => {
          obj[key] = state != undefined ? state : false;
        }, num);
      }
    },

    // 今日统计  今日活跃用户 新增用户等按钮初始化
    initStat() {
      this.getToday();
    },

    //游戏对比统计方法 7天跟30天统计
    channelDays(val, type) {
      if (type) {
        this.gameType = type;
      }

      if (val === 7) {
        this.timeObj.game_one = true;
        this.day.chanelActive = true;
      } else {
        this.timeObj.game_two = true;
        this.day.chanelActive = false;
      }

      let _this = this;

      this.reportUpdate.chanelActive = false;
      this.$.autoAjax('get', URL.api + ROUTES.GET.stat.channel.$(parseInt(val)), '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data;
            let roundtitleList = _this.roundtitleList = [];
            let roundDataList1 = _this.roundDataList1 = [];
            let roundDataList = _this.roundDataList = [];
            let arrs = [];
            _this.state.gameShow = true;

            if (_this.gameType === "default" || _this.gameType === "") {
              //下注占比
              arrs = res.data.channel || [];
              _this.isActive = true;
            } else {
              //下注金额比
              arrs = res.data.orders || [];
              _this.isActive = false;
            }

            if (arrs[0]) {
              for (let i = 0; i < arrs[0].length; i++) {
                roundtitleList.push(arrs[0][i]);
              }
            }

            for (let k in arrs) {
              roundDataList.push(arrs[k]);
              roundDataList1.push(arrs[k]);
            }

            _this.reportUpdate.chanelActive = true;

            if (val === 7) {
              _this.setTimeOutFn('game_one', '', false);
            } else {
              _this.setTimeOutFn('game_two', '', false);
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //游戏下单数、金额、盈亏统计 7天跟30天统计
    gamesDays(val) {
      var _this = this;

      if (val === 7) {
        this.timeObj.product_one = true;
        this.day.gameActive = true;
      } else {
        this.timeObj.product_two = true;
        this.day.gameActive = false;
      }

      this.reportUpdate.gameActive = false;
      this.$.autoAjax('get', URL.api + ROUTES.GET.stat.games.$(val), '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data.orders || {};
            this.histogramDataList = {
              "orders": [],
              "amount": [],
              "profit": []
            };
            let histogramDataList = this.histogramDataList;

            for (let k in model) {
              let arrs = model[k] || [];

              for (let j in arrs) {
                if (parseInt(j) === 1 && k != "orders") {
                  let money = [];
                  let aList = arrs[j];

                  for (let l in aList) {
                    money.push(FORMATMONEY(aList[l]));
                  }

                  histogramDataList[k].push(money);
                } else {
                  histogramDataList[k].push(arrs[j]);
                }
              }
            }

            if (val === 7) {
              _this.setTimeOutFn('product_one', '', false);
            } else {
              _this.setTimeOutFn('product_two', '', false);
            }

            _this.reportUpdate.gameActive = true;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //会员统计 7天跟30天统计
    sevenDaysMenber(val) {
      var _this = this;

      if (val === 7) {
        this.timeObj.member_one = true;
        this.day.memberActive = true;
      } else {
        this.timeObj.member_two = true;
        this.day.memberActive = false;
      }

      this.dataList = {};
      this.reportUpdate.memberActive = false;
      this.$.autoAjax('get', URL.api + ROUTES.GET.stat.member.$(parseInt(val)), '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.state.memberShow = true;

            for (let k in res.data) {
              let arr = res.data[k] || [];
              let list = _this.dataList[k] = [];

              for (let i in arr) {
                list.push(arr[i]);
              }

              ;
            }

            if (val === 7) {
              _this.setTimeOutFn('member_one', '', false);
            } else {
              _this.setTimeOutFn('member_two', '', false);
            }

            _this.reportUpdate.memberActive = true;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //总报表 7天跟30天统计
    sevenDaysMoney(val) {
      var _this = this;

      if (val === 7) {
        this.timeObj.report_one = true;
        this.day.sumActive = true;
      } else {
        this.timeObj.report_two = true;
        this.day.sumActive = false;
      }

      this.reportUpdate.sumActive = false;
      this.sumDataList = {};
      this.$.autoAjax('get', URL.api + ROUTES.GET.stat.amount.$(parseInt(val)), '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];
            _this.state.sumShow = true;

            for (let k in model) {
              let arr1 = model[k] || [];
              let list1 = _this.sumDataList[k] = [];

              for (let i in arr1) {
                if (/^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/.test(arr1[i])) {
                  list1.push(arr1[i]);
                } else {
                  let money = parseInt(arr1[i]);

                  if (isNaN(money) == false) {
                    list1.push(parseInt(arr1[i]) / 100);
                  } else {
                    list1.push(0);
                  }
                }
              }

              ;
            }

            if (val === 7) {
              _this.setTimeOutFn('report_one', '', false);
            } else {
              _this.setTimeOutFn('report_two', '', false);
            }

            _this.reportUpdate.sumActive = true;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    getToday(data) {
      let _this = this,
          query = data ? data : '';

      this.$.autoAjax('get', URL.api + ROUTES.GET.stat.today, query, {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.active = res.data.active_members || 0;
            _this.newly = res.data.new_members || 0;
            _this.online = res.data.online_members || 0;
            _this.deposite = res.data.deposit_money || 0;
            _this.orders = res.data.bet_times || 0;
            _this.amount = res.data.bet_money || 0; //_this.profit = res.data.withdraw_money || 0;

            _this.gross_profit = res.data.gross_profit || 0;
            _this.new_deposit_members = res.data.new_deposit_members || 0;
            _this.withdraw_money = res.data.withdraw_money || 0;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    changeDate(date) {
      let d = date.split('至'),
          obj = {};

      if (d.length) {
        obj.date_from = d[0];
        obj.date_to = d[1];
        this.getToday(obj);
      } else {
        this.getToday();
      }
    },

    toSumStatement() {
      this.$router.push({
        path: "/memberRanking"
      });
    }

  },

  mounted() {
    let _this = this; //定时请求


    if (localStorage.token) {
      window.TIME1 = setInterval(() => {
        setTimeout(() => {
          _this.init();
        }, 0);
      }, 300000);
    }

    window.onload = function () {
      setInterval(() => {
        setTimeout(() => {
          _this.initStat();
        }, 0);
      }, 300000);
    };

    EVENT.$on('changeIndexDate', this.changeDate);
    this.init();
  },

  created() {},

  destroyed() {
    window.clearInterval(window.TIME1);
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-682dbcc2","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/index/indexEcharts.vue
var indexEcharts_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"chart w100",attrs:{"id":"indexEcharts"}},[_c('el-row',{attrs:{"gutter":10}},[_c('el-col',{attrs:{"span":4}},[_c('div',{staticClass:"indexData",staticStyle:{"background":"#0fbed1"}},[_c('p',{staticClass:"num",attrs:{"title":'今日活跃用户：'+_vm.active}},[_vm._v(_vm._s(_vm.active))]),_vm._v(" "),_c('p',{staticClass:"textHide"},[_vm._v(_vm._s(_vm.LANG['今日活跃用户'] || '今日活跃用户'))])])]),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('div',{staticClass:"indexData",staticStyle:{"background":"#99ABC6"}},[_c('p',{staticClass:"num"},[_vm._v("\n                    "+_vm._s(_vm.new_deposit_members? _vm.new_deposit_members: 0))]),_vm._v(" "),_c('p',{staticClass:"textHide"},[_vm._v(_vm._s(_vm.LANG['首充人数'] || '首充人数'))])])]),_vm._v(" "),_c('el-col',{staticClass:"border_bottom",attrs:{"span":4}},[_c('div',{staticClass:"indexData",staticStyle:{"background":"#39bc30"}},[_c('p',{staticClass:"num",attrs:{"title":'今日新增用户：'+_vm.newly}},[_vm._v(_vm._s(_vm.newly))]),_vm._v(" "),_c('p',{staticClass:"textHide"},[_vm._v(_vm._s(_vm.LANG['今日新增用户'] || '今日新增用户'))])])]),_vm._v(" "),_c('el-col',{staticClass:"border_bottom",attrs:{"span":4}},[_c('div',{staticClass:"indexData",staticStyle:{"background":"#ff6360"}},[_c('p',{staticClass:"num",attrs:{"title":'今日上线用户数：'+_vm.online}},[_vm._v(_vm._s(_vm.online))]),_vm._v(" "),_c('p',{staticClass:"textHide"},[_vm._v(_vm._s(_vm.LANG['当前在线用户数'] || '当前在线用户数'))])])]),_vm._v(" "),_c('el-col',{staticClass:"border_bottom",attrs:{"span":4}},[_c('div',{staticClass:"indexData",staticStyle:{"background":"#ffb72f"}},[_c('p',{staticClass:"num",attrs:{"title":'今日总注单数：'+_vm.orders}},[_vm._v(_vm._s(_vm.orders))]),_vm._v(" "),_c('p',{staticClass:"textHide"},[_vm._v(_vm._s(_vm.LANG['今日总注单数'] || '今日总注单数'))])])]),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('div',{staticClass:"indexData",staticStyle:{"background":"#C9592D"}},[_c('p',{staticClass:"num"},[_vm._v(_vm._s(_vm.amount?_vm.amount:0))]),_vm._v(" "),_c('p',{staticClass:"textHide"},[_vm._v(_vm._s(_vm.LANG['今日总注单金额'] || '今日总注单金额'))])])]),_vm._v(" "),_c('el-col',{staticClass:"border_bottom",attrs:{"span":4}},[_c('div',{staticClass:"indexData",staticStyle:{"background":"#ff9269"}},[_c('p',{staticClass:"num"},[_vm._v(_vm._s(_vm.deposite? _vm.deposite:0))]),_vm._v(" "),_c('p',{staticClass:"textHide"},[_vm._v(_vm._s(_vm.LANG['今日存款总金额'] || '今日存款总金额'))])])]),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('div',{staticClass:"indexData",staticStyle:{"background":"#56C9C5"}},[_c('p',{staticClass:"num"},[_vm._v("\n                    "+_vm._s(_vm.withdraw_money?_vm.withdraw_money: 0))]),_vm._v(" "),_c('p',{staticClass:"textHide"},[_vm._v(_vm._s(_vm.LANG['提款总额'] || '提款总额'))])])]),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('div',{staticClass:"indexData",staticStyle:{"background":"#ab8def"}},[_c('p',{staticClass:"num"},[_vm._v("\n                    "+_vm._s(_vm.gross_profit?_vm.gross_profit:0))]),_vm._v(" "),_c('p',{staticClass:"textHide"},[_vm._v(_vm._s(_vm.LANG['总输赢'] || '总输赢'))])])])],1),_vm._v(" "),_c('el-row',{staticClass:"mt20",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"echarMode mt20 textHide",staticStyle:{"background":"#fff"}},[_c('div',{staticClass:"w50 fl"},[_vm._v(_vm._s(_vm.LANG['总报表'] || '总报表'))]),_vm._v(" "),_c('div',{staticClass:"w50 fl tRight"},[_c('el-button',{staticClass:"ml300",class:{'btn-active' :(_vm.day.sumActive)},attrs:{"size":"mini","loading":_vm.timeObj.report_one},on:{"click":function($event){return _vm.sevenDaysMoney(7)}}},[_vm._v("\n                        "+_vm._s(_vm.LANG['最近7天'] || '最近7天')+"\n                    ")]),_vm._v(" "),_c('el-button',{class:{'btn-active' :!(_vm.day.sumActive)},attrs:{"size":"mini","loading":_vm.timeObj.report_two},on:{"click":function($event){return _vm.sevenDaysMoney(30)}}},[_vm._v("\n                        "+_vm._s(_vm.LANG['最近30天'] || '最近30天')+"\n                    ")])],1),_vm._v(" "),(_vm.state.sumShow)?_c('div',{staticClass:"cl bor",staticStyle:{"height":"420px"}},[_c('echarts',{attrs:{"domName":_vm.sumDomName,"type":_vm.sumType,"titleList":_vm.sumTitleList,"dataList":_vm.sumDataList,"dataConfig":_vm.sumDataConfig,"updateData":_vm.reportUpdate.sumActive}})],1):_vm._e(),_vm._v(" "),(!_vm.state.sumShow)?_c('div',{staticClass:"cl bor dataWu",staticStyle:{"height":"420px"}},[_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据')+"\n                ")]):_vm._e()])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"echarMode mt20 textHide",staticStyle:{"background":"#fff"}},[_c('div',{staticClass:"w50 fl"},[_vm._v(_vm._s(_vm.LANG['会员统计'] || '会员统计'))]),_vm._v(" "),_c('div',{staticClass:"w50 fl tRight"},[_c('el-button',{staticClass:"ml300",class:{'btn-active' :(_vm.day.memberActive)},attrs:{"size":"mini","loading":_vm.timeObj.member_one},on:{"click":function($event){return _vm.sevenDaysMenber(7)}}},[_vm._v(_vm._s(_vm.LANG['最近7天'] || '最近7天')+"\n                    ")]),_vm._v(" "),_c('el-button',{class:{'btn-active' :!(_vm.day.memberActive)},attrs:{"size":"mini","loading":_vm.timeObj.member_two},on:{"click":function($event){return _vm.sevenDaysMenber(30)}}},[_vm._v(_vm._s(_vm.LANG['最近30天'] || '最近30天')+"\n                    ")])],1),_vm._v(" "),(_vm.state.memberShow)?_c('div',{staticClass:"cl bor",staticStyle:{"height":"420px"}},[_c('echarts',{attrs:{"domName":_vm.domName,"type":_vm.type,"titleList":_vm.titleList,"dataList":_vm.dataList,"dataConfig":_vm.dataConfig,"updateData":_vm.reportUpdate.memberActive}})],1):_vm._e(),_vm._v(" "),(!_vm.state.memberShow)?_c('div',{staticClass:"cl bor dataWu",staticStyle:{"height":"420px"}},[_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据')+"\n                ")]):_vm._e()])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"echarMode textHide",staticStyle:{"background":"#fff"}},[_c('div',{staticClass:"w20 fl"},[_vm._v(_vm._s(_vm.LANG['游戏对比'] || '游戏对比'))]),_vm._v(" "),_c('div',{staticClass:"w50 fl tCent"},[_c('el-button',{class:{ col1: !_vm.isActive },attrs:{"size":"mini","type":"text"},on:{"click":function($event){return _vm.channelDays(7,'default')}}},[_vm._v(_vm._s(_vm.LANG['移动PC下注占比'] || '移动PC下注占比')+"\n                    ")]),_vm._v(" "),_c('el-button',{class:{col1 :_vm.isActive},attrs:{"size":"mini","type":"text"},on:{"click":function($event){return _vm.channelDays(7,'orders')}}},[_vm._v("\n                        "+_vm._s(_vm.LANG['彩票下注金额占比'] || '彩票下注金额占比')+"\n                    ")])],1),_vm._v(" "),_c('div',{staticClass:"w30 fl tRight"},[_c('el-button',{staticClass:"ml300",class:{'btn-active' :(_vm.day.chanelActive)},attrs:{"size":"mini","loading":_vm.timeObj.game_one},on:{"click":function($event){return _vm.channelDays(7)}}},[_vm._v(_vm._s(_vm.LANG['最近7天'] || '最近7天')+"\n                    ")]),_vm._v(" "),_c('el-button',{class:{'btn-active' :!(_vm.day.chanelActive)},attrs:{"size":"mini","loading":_vm.timeObj.game_two},on:{"click":function($event){return _vm.channelDays(30)}}},[_vm._v("\n                        "+_vm._s(_vm.LANG['最近30天'] || '最近30天')+"\n                    ")])],1),_vm._v(" "),(_vm.state.gameShow)?_c('div',{staticClass:"cl bor",staticStyle:{"height":"420px"}},[_c('echarts',{attrs:{"domName":_vm.roundName,"type":_vm.typeRound,"titleList":_vm.roundtitleList,"dataList":_vm.roundDataList,"dataConfig":[],"updateData":_vm.reportUpdate.chanelActive}})],1):_vm._e(),_vm._v(" "),(!_vm.state.gameShow)?_c('div',{staticClass:"cl bor dataWu",staticStyle:{"height":"420px"}},[_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据')+"\n                ")]):_vm._e()])]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"echarMode textHide",staticStyle:{"background":"#fff"}},[_c('div',{staticClass:"w50 fl"},[_vm._v(_vm._s(_vm.LANG['产品汇总'] || '产品汇总'))]),_vm._v(" "),_c('div',{staticClass:"w50 fl tRight"},[_c('el-button',{staticClass:"ml300",class:{'btn-active' :(_vm.day.gameActive)},attrs:{"size":"mini","loading":_vm.timeObj.product_one},on:{"click":function($event){return _vm.gamesDays(7)}}},[_vm._v(_vm._s(_vm.LANG['最近7天'] || '最近7天')+"\n                    ")]),_vm._v(" "),_c('el-button',{class:{'btn-active' :!(_vm.day.gameActive)},attrs:{"size":"mini","loading":_vm.timeObj.product_two},on:{"click":function($event){return _vm.gamesDays(30)}}},[_vm._v("\n                        "+_vm._s(_vm.LANG['最近30天'] || '最近30天')+"\n                    ")])],1),_vm._v(" "),(_vm.state.gameShow)?_c('div',{staticClass:"cl bor",staticStyle:{"height":"420px"}},[_c('echarts',{attrs:{"domName":_vm.histogramName,"type":_vm.typeHistogram,"titleList":_vm.histogramTitleList,"dataList":_vm.histogramDataList,"dataConfig":_vm.histogramDataConfig,"updateData":_vm.reportUpdate.gameActive}})],1):_vm._e(),_vm._v(" "),(!_vm.state.gameShow)?_c('div',{staticClass:"cl bor dataWu",staticStyle:{"height":"420px"}},[_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据')+"\n                ")]):_vm._e()])])],1),_vm._v(" "),_c('el-row',{staticClass:"mt20 topTen",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"tCent sortData"},[_c('h3',[_vm._v(_vm._s(_vm.LANG['今日盈利金额前十名'] || '今日盈利金额前十名'))]),_vm._v(" "),(!_vm.state.profitShow)?_c('div',{staticClass:"noDataTable"},[_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据'))]):_vm._e(),_vm._v(" "),_c('el-col',{staticClass:"tRight",attrs:{"span":24}},[_c('a',{staticClass:"state_blue",attrs:{"href":"javascript:;"},on:{"click":_vm.toSumStatement}},[_c('i',{staticClass:"icon el-icon-more"})])]),_vm._v(" "),(_vm.state.profitShow)?_c('tablegrid',{staticClass:"sortTable mt20",attrs:{"columnsUrl":_vm.columnsUrl,"automation":true,"tableUrl":_vm.tableUrl1,"showRefresh":false,"pageSet":false,"fullWidth":false,"updated":_vm.updatedProfit,"tableIndex":false}}):_vm._e()],1)]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"tCent sortData"},[_c('h3',[_vm._v(_vm._s(_vm.LANG['今日存款金额前十名'] || '今日存款金额前十名'))]),_vm._v(" "),(!_vm.state.depositShow)?_c('div',{staticClass:"noDataTable"},[_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据'))]):_vm._e(),_vm._v(" "),_c('el-col',{staticClass:"tRight",attrs:{"span":24}},[_c('a',{staticClass:"state_blue",attrs:{"href":"javascript:;"},on:{"click":_vm.toSumStatement}},[_c('i',{staticClass:"icon el-icon-more"})])]),_vm._v(" "),(_vm.state.depositShow)?_c('tablegrid',{staticClass:"sortTable mt20",attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl2,"showRefresh":false,"automation":true,"pageSet":false,"fullWidth":false,"updated":_vm.updatedDeposit,"tableIndex":false}}):_vm._e()],1)]),_vm._v(" "),_c('el-col',{attrs:{"span":8}},[_c('div',{staticClass:"tCent sortData"},[_c('h3',[_vm._v(_vm._s(_vm.LANG['今日取款金额前十名'] || '今日取款金额前十名'))]),_vm._v(" "),(!_vm.state.WithdrawShow)?_c('div',{staticClass:"noDataTable"},[_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据'))]):_vm._e(),_vm._v(" "),_c('el-col',{staticClass:"tRight",attrs:{"span":24}},[_c('a',{staticClass:"state_blue",attrs:{"href":"javascript:;"},on:{"click":_vm.toSumStatement}},[_c('i',{staticClass:"icon el-icon-more"})])]),_vm._v(" "),(_vm.state.WithdrawShow)?_c('tablegrid',{staticClass:"sortTable mt20",attrs:{"columnsUrl":_vm.columnsUrl,"automation":true,"tableUrl":_vm.tableUrl3,"showRefresh":false,"pageSet":false,"fullWidth":false,"updated":_vm.updatedWithdraw,"tableIndex":false}}):_vm._e()],1)])],1)],1)}
var indexEcharts_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/index/indexEcharts.vue
function indexEcharts_injectStyle (context) {
  __webpack_require__(412)
}
/* script */


/* template */

/* template functional */
var indexEcharts_vue_template_functional_ = false
/* styles */
var indexEcharts_vue_styles_ = indexEcharts_injectStyle
/* scopeId */
var indexEcharts_vue_scopeId_ = "data-v-682dbcc2"
/* moduleIdentifier (server only) */
var indexEcharts_vue_module_identifier_ = null

var indexEcharts_Component = Object(component_normalizer["a" /* default */])(
  indexEcharts,
  indexEcharts_render,
  indexEcharts_staticRenderFns,
  indexEcharts_vue_template_functional_,
  indexEcharts_vue_styles_,
  indexEcharts_vue_scopeId_,
  indexEcharts_vue_module_identifier_
)

/* harmony default export */ var index_indexEcharts = __webpack_exports__["default"] = (indexEcharts_Component.exports);


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);