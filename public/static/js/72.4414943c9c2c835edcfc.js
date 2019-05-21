(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/notesQuery.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var notesQuery = ({
  data() {
    return {
      LANG,
      // 表单相关
      updateDate: '',
      updateKeys: '',
      tableUrl: '',
      // 二级分类
      activeNames: '',
      times: 30,
      nowActiveType: '',
      loading: false,
      // 表格相关
      baseUrl: '',
      columnsUrl: '',
      subTotalMoney: {},
      totalMoney: {},
      tableLength: 0,
      egamecol: 0,
      num: 0,
      formReset: false
    };
  },

  props: {
    // 表单相关
    formConfig: Array,
    // 二级分类
    categorys: Array,
    activeType: {
      type: String,
      default: 'lottery'
    }
  },
  methods: {
    init(newval) {
      this.loading = true;
      let list = []; //获取彩票名称

      this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.types.$, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];

            for (let k in model) {
              if (model[k].pid !== 0 && model[k].is_standard === '1') {
                list.push({
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
      });
      setTimeout(() => {
        let nowquery,
            updateKeys,
            query = this.$route.query;

        if (query == '{}') {
          nowquery = '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd;
        } else {
          nowquery = this.getRouteQuery();
        }

        let game_tye = this.$route.query.game_type;

        if (this.categorys.length) {
          for (let i = 0; i < this.categorys.length; i++) {
            if (this.categorys[i].game_id == game_tye) {
              this.activeNames = this.categorys[i].game_short;
              this.nowActiveType = this.categorys[i].game_type;
              this.getDefaultCategorys(this.categorys[i].game_type, newval, nowquery);
            }
          }
        } else {
          this.activeNames = 'lottery';
          this.nowActiveType = 'lottery';
          this.getDefaultCategorys('lottery', newval, nowquery);
        }

        if (this.activeType != this.nowActiveType) {
          updateKeys = 'user_name,,';
        }

        this.updateKeys = updateKeys;
        this.loading = false;
        this.formConfig[4].list = list;
      }, 100);
    },

    // 处理默认二级分类值
    getDefaultCategorys(type, newval, nowquery) {
      this.formReset = false;

      if (!type) {
        return;
      }

      this.activeNames = '';
      setTimeout(() => {
        this.formReset = true;
      }, 800);
      this.baseUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[type] && NOTESQUERYCONFIG[type]['baseUrl'] || '';

      switch (type) {
        case 'lottery':
          this.columnsUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[type] && NOTESQUERYCONFIG[type]['columnsUrls']['lottery'] || '';
          this.tableUrl = (newval ? newval : this.baseUrl) + nowquery;
          break;

        case 'live':
          this.activeNames = this.activeNames || 'LEBO';
          this.columnsUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[type] && NOTESQUERYCONFIG[type]['columnsUrls'][this.activeNames] || '';
          this.tableUrl = (newval ? newval : this.baseUrl) + nowquery + '&type_name=' + this.activeNames + '&order_type=2';
          break;

        case 'egame':
          this.activeNames = this.activeNames || 'YOPLAY';
          this.columnsUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[type] && NOTESQUERYCONFIG[type]['columnsUrls'][this.activeNames] || '';
          this.tableUrl = (newval ? newval : this.baseUrl) + nowquery + '&type_name=' + this.activeNames + '&order_type=1';
          break;
      }
    },

    // 处理查询参数
    getRouteQuery() {
      let nowquery = '?',
          name,
          s_time,
          e_time;

      if (this.$route.query != '{}') {
        let query = this.$route.query;
        name = query.user_name || '';
        s_time = query.start_time || '';
        e_time = query.end_time || '';

        if (name) {
          nowquery += 'user_name=' + name;
        }

        if (s_time) {
          if (nowquery.length > 5) {
            nowquery += '&start_time=' + s_time;
          } else {
            nowquery += 'start_time=' + s_time;
          }
        }

        if (e_time) {
          if (nowquery.length > 5) {
            nowquery += '&end_time=' + e_time;
          } else {
            nowquery += 'end_time=' + e_time;
          }
        }
      }

      return nowquery;
    },

    // 表单查询
    doQuery(obj) {
      if (this.activeType === 'lottery') {
        this.tableUrl = this.baseUrl + this.addSearch(obj.item);
      } else if (this.activeType === 'fish') {
        this.tableUrl = this.baseUrl + this.addSearch(obj.item) + '&type_name=' + this.activeNames;
      } else {
        this.tableUrl = this.addSearch(obj.item) ? this.baseUrl + this.addSearch(obj.item) + '&type_name=' + this.activeNames + '&order_type=' + (this.activeType === 'live' ? 2 : 1) : this.baseUrl + '?type_name=' + this.activeNames + '&order_type=' + (this.activeType === 'live' ? 2 : 1); //					this.tableUrl = this.baseUrl + this.addSearch(obj.item) + '&type_name=' + this.activeNames + '&order_type=' + (this.activeType === 'live' ? 2 : 1);
        //					console.log(this.addSearch(obj.item))
      }
    },

    // 重置FORM
    resetFormData() {
      if (this.activeType === 'lottery') {//this.tableUrl = this.baseUrl + '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd;
      } else if (this.activeType === 'fish') {
        this.tableUrl = this.baseUrl + '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd + '&type_name=' + this.activeNames;
      } else {
        this.tableUrl = this.baseUrl + '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd + '&type_name=' + this.activeNames + '&order_type=' + (this.activeType === 'live' ? 2 : 1);
      }
    },

    // 获取表格数据
    getTableData(obj) {
      this.tableLength = 0;
      this.subTotalMoney = {};
      this.totalMoney = {};

      if (obj.allData && obj.allData.attributes) {
        this.tableLength = obj.allData.attributes.total;
        let attributes = obj.allData.attributes;

        if (attributes.subTotalMoney) {
          for (let k in attributes.subTotalMoney) {
            this.subTotalMoney[k] = FORMATMONEY(attributes.subTotalMoney[k]);
          }
        }

        if (attributes.totalMoney) {
          for (let i in attributes.totalMoney) {
            this.totalMoney[i] = FORMATMONEY(attributes.totalMoney[i]);
          }
        }
      }
    },

    // 表格点击事件
    doHandle(item) {
      switch (item.fn) {
        case "openMember":
          this.openMember(item.row);
          break;

        case "openAgent":
          this.openAgent(item.row);
          break;
      }
    },

    // 代理跳转
    openAgent(obj) {
      this.$router.push({
        path: "/agentAccount",
        query: {
          name: obj.agent || obj.agent_name
        }
      });
    },

    // 用户跳转
    openMember(obj) {
      this.$router.push({
        path: "/memberManagement",
        query: {
          name: obj.user_name
        }
      });
    },

    // 分类切换
    handleClick(type) {
      this.updateKeys = '';
      setTimeout(() => {
        this.updateKeys = 'user_name,,order_number,,start_time,' + sessionStorage.dateTimeStart + ',end_time,' + sessionStorage.dateTimeEnd;
      });

      switch (this.activeType) {
        case 'live':
          this.tableUrl = this.baseUrl + '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd + '&type_name=' + type.name + '&order_type=2';
          break;

        case 'egame':
          this.columnsUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[this.activeType] && NOTESQUERYCONFIG[this.activeType]['columnsUrls'][type.name] || '';
          this.tableUrl = this.baseUrl + '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd + '&type_name=' + type.name + '&order_type=1';
          break;
      }
    }

  },
  components: {
    formEdit: formEdit["a" /* default */],
    tablegrid: tableGrid["a" /* default */]
  },
  computed: {},
  watch: {
    activeType: function (newval) {
      if (newval && this.nowActiveType && newval != this.nowActiveType) {
        let temp = '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd;
        this.getDefaultCategorys(newval, '', temp);
      } else if (this.nowActiveType) {
        this.init();
      }
    }
  },

  mounted() {},

  activated() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3364b683","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/notesQuery.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"id":"notesQuery"}},[(_vm.categorys && _vm.categorys.length)?_c('el-tabs',{on:{"tab-click":_vm.handleClick},model:{value:(_vm.activeNames),callback:function ($$v) {_vm.activeNames=$$v},expression:"activeNames"}},_vm._l((_vm.categorys),function(item){return _c('el-tab-pane',{key:item.game_id,attrs:{"label":item.game_name,"name":item.game_short}})}),1):_vm._e(),_vm._v(" "),(_vm.formConfig && _vm.formConfig.length)?_c('formEdit',{attrs:{"formVisible":{state: false},"formConfig":_vm.formConfig,"type":'search',"labelWidth":'90px',"isEdit":{state:false},"showAdd":false,"formReset":_vm.formReset,"updateDate":_vm.updateDate,"updateKeys":_vm.updateKeys},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetFormData}}):_vm._e(),_vm._v(" "),_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"showExport":false,"times":_vm.times,"getData":true},on:{"get-table-data":_vm.getTableData,"do-handle":_vm.doHandle}},[(_vm.tableLength > 0 && (_vm.activeType === 'lottery' || _vm.activeType === 'fish'))?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":_vm.activeType === 'lottery' ? 9 : 6}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.send_prize))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.lose_earn))])])]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0 && (_vm.activeType === 'lottery' || _vm.activeType === 'fish'))?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":_vm.activeType === 'lottery' ? 9 : 6}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['总计'] || '总计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.send_prize))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.lose_earn))])])]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0 && _vm.activeType === 'live')?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"6"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.lose_earn))])])]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0 && _vm.activeType === 'live')?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"6"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['总计'] || '总计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.lose_earn))])])]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0 && _vm.activeType === 'egame' && _vm.activeNames === 'PT')?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"8"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.send_prize))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.jp_contri_subtotal))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.jackpot_bonus_subtotal))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.dollar_ball_bets_subtotal))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.prize_us_subtotal))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.contri_us_subtotal))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.db_jp_subtotal))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.lose_earn))])])]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0 && _vm.activeType === 'egame' && _vm.activeNames === 'PT')?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"8"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['总计'] || '总计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.send_prize))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.jp_contri_total))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.jackpot_bonus_total))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.dollar_ball_bets_total))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.prize_us_total))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.contri_us_total))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.db_jp_total))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.lose_earn))])])]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0 && _vm.activeType === 'egame' && (_vm.activeNames == 'MG' || _vm.activeNames == 'MW'))?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":7}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['小-计'] || '小-计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.jp_contri_subtotal))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.send_prize))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.lose_earn))])])]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0 && _vm.activeType === 'egame' && (_vm.activeNames == 'MG' || _vm.activeNames == 'MW'))?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"7"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['总-计'] || '总-计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.jp_contri_total))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.send_prize))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.lose_earn))])])]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0 && _vm.activeType === 'egame' && (_vm.activeNames == 'CQ9' || _vm.activeNames == 'GNS' || _vm.activeNames == 'HB'))?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"7"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['小-计'] || '小-计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.send_prize))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.lose_earn))])])]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0 && _vm.activeType === 'egame' && (_vm.activeNames == 'CQ9' || _vm.activeNames == 'GNS' || _vm.activeNames == 'HB'))?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"7"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['总-计'] || '总-计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.send_prize))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.lose_earn))])])]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0 && _vm.activeType === 'egame' && (_vm.activeNames == 'FG' || _vm.activeNames == 'JDB'))?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"7"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.send_prize))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.jackpot_bonus_subtotal))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.jp_contri_subtotal))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalMoney.lose_earn))])])]):_vm._e(),_vm._v(" "),(_vm.tableLength > 0 && _vm.activeType === 'egame' && (_vm.activeNames == 'FG' || _vm.activeNames == 'JDB'))?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"7"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['总计'] || '总计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.pay_money))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.send_prize))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.jackpot_bonus_total))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.jp_contri_total))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.valid_bet))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalMoney.lose_earn))])])]):_vm._e()])],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/notesQuery.vue
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
  notesQuery,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_notesQuery = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/instantNote/noteManagement.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var noteManagement = ({
  data() {
    return {
      LANG,
      activeType: '',
      // 表单相关
      formConfig: [],
      query: {},
      // 表格相关
      baseUrl: "",
      columnsUrl: "",
      // 二级分类
      categorys: [],
      activeCategory: '',
      gamesTypes: [],
      liveArr: [],
      egameArr: [],
      fishArr: []
    };
  },

  components: {
    nonetesQuery: components_notesQuery
  },
  watch: {},
  methods: {
    init() {
      for (let k in NOTESQUERYCONFIG) {
        if (NOTESQUERYCONFIG[k]['baseUrl'] && NOTESQUERYCONFIG[k]['old_baseurl']) {
          NOTESQUERYCONFIG[k]['baseUrl'] = NOTESQUERYCONFIG[k]['old_baseurl'];
        }
      }

      this.activeType = 'lottery';
      this.formConfig = NOTESQUERYCONFIG && NOTESQUERYCONFIG.lottery && NOTESQUERYCONFIG.lottery.formConfig || [];
      this.toggle('lottery');
    },

    // 获取游戏类型
    getGamesType(str) {
      this.$.autoAjax('get', URL.api + ROUTES.GET.games.games, '', {
        ok: res => {
          let data = res.data || [];
          this.liveArr.splice(0, this.liveArr.length);
          this.egameArr.splice(0, this.egameArr.length);

          if (res.state === 0 && data) {
            data.forEach(item => {
              this.gamesTypes.push(item);

              if (item['game_type'] === 'live') {
                this.liveArr.push(item);
              } else if (item['game_type'] === 'egame') {
                this.egameArr.push(item);
              } else if (item['game_type'] === 'fish') {
                this.fishArr.push(item);
              }
            });
          } else {
            this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
          }

          if (str) {
            this.activeType = this.getNotesCategorys(str);
            this.toggle(this.activeType);
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 点击事件
    toggle(type) {
      this.activeType = type;

      switch (type) {
        case 'lottery':
          this.categorys = [];
          break;

        case 'live':
          this.categorys = this.liveArr;
          break;

        case 'egame':
          this.categorys = this.egameArr;
          break;
        //                    case 'fish':
        //                        this.categorys = this.fishArr;
        //                        break;
      }

      this.formConfig = NOTESQUERYCONFIG && NOTESQUERYCONFIG[this.activeType] && NOTESQUERYCONFIG[this.activeType]['formConfig'] || [];
    },

    // 根据数据返回类型
    getNotesCategorys(gameType) {
      for (let i = 0; i < this.gamesTypes.length; i++) {
        if (this.gamesTypes[i].game_id == gameType) {
          return this.gamesTypes[i].game_type;
        }
      }

      return '';
    }

  },

  created() {//            this.getGamesType();
    //            this.init();
  },

  activated() {
    this.init(); // 参数跳转处理

    if (JSON.stringify(this.$route.query) == "{}") {
      this.getGamesType();
    } else {
      let gameType = this.$route.query.game_type || '';
      this.getGamesType(gameType);
    }
  },

  deactivated() {
    this.formConfig = [];
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6dc0df59","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/instantNote/noteManagement.vue
var noteManagement_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"templateManage w100",attrs:{"id":"templateManage"}},[_c('div',{staticClass:"el-tabs el-tabs--border-card"},[_c('div',{staticClass:"el-tabs__header"},[_c('div',{staticClass:"el-tabs__nav-wrap"},[_c('div',{staticClass:"el-tabs__nav-scroll"},[_c('div',{staticClass:"el-tabs__nav"},[_c('div',{staticClass:"el-tabs__item",class:{'is-active': _vm.activeType == 'lottery'},on:{"click":function($event){return _vm.toggle('lottery')}}},[_vm._v("\n                            "+_vm._s(_vm.LANG['彩票'] || '彩票')+"\n                        ")]),_vm._v(" "),_c('div',{staticClass:"el-tabs__item",class:{'is-active': _vm.activeType == 'live'},on:{"click":function($event){return _vm.toggle('live')}}},[_vm._v("\n                            "+_vm._s(_vm.LANG['视讯'] || '视讯')+"\n                        ")]),_vm._v(" "),_c('div',{staticClass:"el-tabs__item",class:{'is-active': _vm.activeType == 'egame'},on:{"click":function($event){return _vm.toggle('egame')}}},[_vm._v("\n                            "+_vm._s(_vm.LANG['电子'] || '电子')+"\n                        ")])])])])]),_vm._v(" "),_c('div',{staticClass:"el-tabs__content"},[_c('nonetesQuery',{attrs:{"formConfig":_vm.formConfig,"categorys":_vm.categorys,"query":_vm.query,"activeType":_vm.activeType}})],1)])])}
var noteManagement_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/instantNote/noteManagement.vue
function injectStyle (context) {
  __webpack_require__(504)
}
/* script */


/* template */

/* template functional */
var noteManagement_vue_template_functional_ = false
/* styles */
var noteManagement_vue_styles_ = injectStyle
/* scopeId */
var noteManagement_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var noteManagement_vue_module_identifier_ = null

var noteManagement_Component = Object(component_normalizer["a" /* default */])(
  noteManagement,
  noteManagement_render,
  noteManagement_staticRenderFns,
  noteManagement_vue_template_functional_,
  noteManagement_vue_styles_,
  noteManagement_vue_scopeId_,
  noteManagement_vue_module_identifier_
)

/* harmony default export */ var instantNote_noteManagement = __webpack_exports__["default"] = (noteManagement_Component.exports);


/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);