(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/instantNote/oddsSet.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var oddsSet = ({
  data() {
    return {
      dialogVisible: false,
      details: '',
      money: '',
      LANG,
      //表头玩法开启
      checksPlayOn: false,
      //表格数据
      dataModel: [],
      //加载状态
      loading: false,
      //总条数
      total: 0,
      //每次页条数
      pageSize: 10,
      //总页数
      pageCount: 1,
      //当前页
      currentPage: 1,
      //弹出框分页
      //总页数
      dialogtotal: 0,
      //一页多少条
      dialogpageSize: 10,
      //共多少页
      dialogpageCount: 1,
      // 当前页
      dialogcurrentPage: 1,
      detaildataModel: [],
      dialogUrl: '',
      dialogTotal: 0,
      totalMoney: {}
    };
  },

  components: {},
  props: {
    tableUrl: String,
    columnsUrl: String,
    updated: {
      type: Boolean,
      default: false
    },
    playname: {
      default: 0
    },
    lotteryName: {
      type: String,
      default: ''
    },
    lotteryId: String,
    lotteryNumber: String,
    playType: String
  },
  filters: {},
  watch: {
    //如果数据网址发生变化，就执行数据请求
    tableUrl: function (newQuestion) {
      if (newQuestion) {
        this.init();
      }
    },
    updated: function (newval) {
      if (newval) {
        this.init();
      }
    }
  },
  methods: {
    //系统初始化
    init() {
      let _this = this; //总条数


      let total = this.total; //每次页条数

      let pageSize = this.pageSize; //总页数

      let pageCount = this.pageCount; //当前页

      let currentPage = this.currentPage;

      if (this.tableUrl) {
        this.loading = true;
        this.dataModel = [];
        this.$.autoAjax('get', this.tableUrl, '', {
          ok: res => {
            if (res.state === 0 && res.data) {
              let attributes = res.attributes.totalMoney || {};
              _this.total = res.attributes.total || 10;
              _this.pageSize = res.attributes.size || 50;
              _this.pageCount = Math.ceil(this.total / this.pageSize);
              _this.currentPage = res.attributes.number || 1;
              let data = res.data || res.data.list || [];
              let dataModel = _this.dataModel;

              for (let i in data) {
                //                                let reg = RegExp('enabled');
                //                                if(reg.test(data[i].state)){
                //                                    data[i]['status'] = true;
                //                                }else{
                //                                    data[i]['status'] = false;
                //                                }
                _this.$set(dataModel, i, data[i]);
              }

              for (let k in attributes) {
                if (k === 'bet_num') {
                  _this.totalMoney[k] = attributes[k];
                } else {
                  _this.totalMoney[k] = FORMATMONEY(attributes[k]);
                }
              }
            }

            _this.loading = false;
          },
          p: () => {},
          error: e => {
            _this.loading = false;

            _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
          }
        }); //                     this.$http.get(this.tableUrl,URLCONFIG).then((res) => {
        //                         if(res.data.state === 0 && res.data.data){
        //                             let attributes = res.data.attributes.totalMoney || {};
        //                             _this.total = res.data.attributes.total || 10;
        //                             _this.pageSize = res.data.attributes.size || 50;
        //                             _this.pageCount = Math.ceil(this.total / this.pageSize);
        //                             _this.currentPage = res.data.attributes.number || 1;
        //                             let data = res.data.data || res.data.data.list || [];
        //                             let dataModel = _this.dataModel;
        //                             for (let i in data) {
        // //                                let reg = RegExp('enabled');
        // //                                if(reg.test(data[i].state)){
        // //                                    data[i]['status'] = true;
        // //                                }else{
        // //                                    data[i]['status'] = false;
        // //                                }
        //                                 _this.$set(dataModel,i, data[i]);
        //
        //                             }
        //                             for(let k in attributes){
        //                                 if(k=== 'bet_num'){
        //                                     _this.totalMoney[k] = attributes[k];
        //                                 }else{
        //                                     _this.totalMoney[k] = FORMATMONEY(attributes[k]);
        //
        //                                 }
        //                             }
        //                         }
        //                         _this.loading = false;
        //                     }).catch((e)=>{
        //                         _this.loading = false;
        //                         _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！')
        //                     });
      }
    },

    //保存数据
    doSave() {
      this.$emit('save-data', {
        "item": this.dataModel
      });
    },

    formatMoney(value) {
      let m;

      if (value) {
        m = (parseInt(value) / 100).toFixed(2);
        return m;
      }

      return value;
    },

    //切换页数
    doCurrentChange(v) {
      this.loading = true;
      let total = this.total;
      let pageSize = 50;
      let pageCount = this.pageCount;
      this.currentPage = v;
      this.dataModel = [];
      let dataModel = this.dataModel;
      let page = 0;

      let _this = this;

      page = Math.ceil(pageSize * pageCount / total) || 1;
      let index = this.tableUrl.indexOf('?');

      if (index === -1) {
        this.tableUrl = this.tableUrl + "?page=" + v + "&page_size=50";
      } else {
        let n = this.tableUrl.indexOf('page=');

        if (n > 0) {
          this.tableUrl = this.tableUrl.replace(/page=\d+/, "page=" + v);
        } else {
          this.tableUrl = this.tableUrl + "&page=" + v + "&page_size=50";
        }
      }

      this.$.autoAjax('get', this.tableUrl, '', {
        ok: res => {
          _this.total = res.attributes.total || 10;
          _this.pageSize = res.attributes.size || 50;
          _this.pageCount = Math.ceil(this.total / this.pageSize);
          _this.currentPage = res.attributes.number || 1;
          let tableDate = res.data || res.data.list || [];

          for (let i in tableDate) {
            _this.dataModel.push(tableDate[i]);
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          _this.loading = false;

          _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
        }
      }); // this.$http.get(this.tableUrl, URLCONFIG).then((res) => {
      //     _this.total = res.data.attributes.total || 10;
      //     _this.pageSize = res.data.attributes.size || 50;
      //     _this.pageCount = Math.ceil(this.total / this.pageSize);
      //     _this.currentPage = res.data.attributes.number || 1;
      //     let tableDate = res.data.data || res.data.data.list || [];
      //     for (let i in tableDate) {
      //         _this.dataModel.push(tableDate[i])
      //     }
      //     _this.loading = false;
      // }).catch((e)=>{
      //     _this.loading = false;
      //     _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
      // })
    },

    //显示编辑框
    changeInput(e, index, prop) {
      let event = window.event || e;
      let obj = event.srcElement ? event.srcElement : event.target;
      event.target.style.display = "none";
      event.target.nextElementSibling.style.display = "block";
      event.target.focus();
    },

    //点击回车
    doEnter(index, prop) {
      let e = window.event || event;
      let obj = e.srcElement ? e.srcElement : e.target;
      event.target.style.display = "none";
      event.target.previousElementSibling.style.display = "block";
    },

    //开启所有玩法
    checkAllChange(e, str) {
      let event = window.event || e;
      let dataModel = this.dataModel;
      let obj = event.srcElement ? event.srcElement : event.target;

      if (obj.checked) {
        for (let i in this.dataModel) {
          dataModel[i][str] = true;
        }
      } else {
        for (let i in this.dataModel) {
          dataModel[i][str] = false;
        }
      }
    },

    //修改快调
    changeCol(e, prop) {
      let event = window.event || e;
      let obj = event.srcElement ? event.srcElement : event.target;

      if (obj.value) {
        for (let i in this.dataModel) {
          this.dataModel[i][prop] = obj.value;
        }

        obj.blur();
      }
    },

    showDetails(item) {
      this.detaildataModel = [];
      this.dialogTotal = item.pay_money;
      this.dialogVisible = true;
      this.details = this.lotteryName + '-' + item.odds_type + ':' + item.result + '明细';
      let url = URL.api + ROUTES.GET.lottery.orders + "?lottery_id=" + this.lotteryId + "&lottery_number=" + this.lotteryNumber + "&odds_id=" + item.id + "&type=" + this.playType;
      this.dialogUrl = url;

      let _this = this;

      if (this.dialogUrl) {
        this.$.autoAjax('get', this.dialogUrl, '', {
          ok: res => {
            if (res.state === 0 && res.data) {
              _this.dialogtotal = res.attributes.total || 10;
              _this.dialogpageSize = res.attributes.size || 50;
              _this.dialogpageCount = Math.ceil(this.total / this.pageSize);
              _this.dialogcurrentPage = res.attributes.number || 1;
              let data = res.data || [];

              for (let i in data) {
                _this.detaildataModel.push(data[i]);
              }
            }
          },
          p: () => {},
          error: e => {
            _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
          }
        }); // this.$http.get(this.dialogUrl,URLCONFIG).then((res) => {
        //     if(res.data.state === 0 && res.data.data){
        //         _this.dialogtotal = res.data.attributes.total || 10;
        //         _this.dialogpageSize = res.data.attributes.size || 50;
        //         _this.dialogpageCount = Math.ceil(this.total / this.pageSize);
        //         _this.dialogcurrentPage = res.data.attributes.number || 1;
        //         let data = res.data.data || [];
        //         for (let i in data) {
        //             _this.detaildataModel.push(data[i])
        //         }
        //     }
        // }).catch((e)=>{
        //     _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！')
        // });
      }
    },

    dodialogCurrentChange(v) {
      let total = this.dialogtotal;
      let pageSize = 50;
      let pageCount = this.dialogpageCount;
      this.currentPage = v;
      this.detaildataModel = [];
      let page = 0;

      let _this = this;

      page = Math.ceil(pageSize * pageCount / total) || 1;
      let index = this.tableUrl.indexOf('?');

      if (index === -1) {
        this.tableUrl = this.tableUrl + "?page=" + v + "&page_size=50";
      } else {
        let n = this.tableUrl.indexOf('page=');

        if (n > 0) {
          this.tableUrl = this.tableUrl.replace(/page=\d+/, "page=" + v);
        } else {
          this.tableUrl = this.tableUrl + "&page=" + v + "&page_size=50";
        }
      }

      this.$.autoAjax('get', this.tableUrl, '', {
        ok: res => {
          _this.dialogtotal = res.attributes.total || 10;
          _this.dialogpageSize = res.attributes.size || 50;
          _this.dialogpageCount = Math.ceil(this.total / this.pageSize);
          _this.dialogcurrentPage = res.attributes.number || 1;
          let tableDate = res.data || [];

          for (let i in tableDate) {
            _this.detaildataModel.push(tableDate[i]);
          }
        },
        p: () => {},
        error: e => {
          _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
        }
      }); // this.$http.get(this.tableUrl, URLCONFIG).then((res) => {
      //     _this.dialogtotal = res.data.attributes.total || 10;
      //     _this.dialogpageSize = res.data.attributes.size || 50;
      //     _this.dialogpageCount = Math.ceil(this.total / this.pageSize);
      //     _this.dialogcurrentPage = res.data.attributes.number || 1;
      //     let tableDate = res.data.data ||  [];
      //     for (let i in tableDate) {
      //         _this.detaildataModel.push(tableDate[i])
      //     }
      //
      // }).catch((e)=>{
      //
      //     _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
      // })
    }

  },
  created: function () {
    this.init();

    let _this = this;

    Bus.$on('form_query_lottery', function (v) {
      if (v) {
        _this.init();
      }
    });
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8f3c912c","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/instantNote/oddsSet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"mt20",attrs:{"id":"modelSet"}},[_c('el-row',[_c('el-col',[_c('el-card',[_c('table',{staticClass:"el-table el-table__header el-table--border w100",attrs:{"cellspacing":"0","cellpadding":"0","border":"1"}},[_c('thead',[_c('tr',[_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"3"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['玩法名称'] || '玩法名称')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"3"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['当前赔率'] || '当前赔率')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"3"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['注单数'] || '注单数')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"3"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['金额'] || '金额')}},[_c('br'),_vm._v(" "),_c('el-checkbox',{staticStyle:{"margin-top":"10px"},attrs:{"checked":_vm.checksPlayOn?true:false},on:{"change":function($event){return _vm.checkAllChange($event,'stateus')}},model:{value:(_vm.checksPlayOn),callback:function ($$v) {_vm.checksPlayOn=$$v},expression:"checksPlayOn"}})],1)]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"3"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['输赢'] || '输赢')}})])])]),_vm._v(" "),_vm._l((_vm.dataModel),function(item,index){return (_vm.dataModel.length)?_c('tr',[_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[(_vm.playType=='standard')?_c('span',[_vm._v(_vm._s(item.odds_type)+" - "+_vm._s(item.result))]):(item.odds_type==='和值')?_c('span',[_vm._v(_vm._s(item.odds_type)+" - "+_vm._s(item.result))]):_c('span',[_vm._v(_vm._s(item.odds_type)+"-"+_vm._s(item.result))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._l((item.sub_odds),function(sub,key){return _c('div',{staticStyle:{"clear":"both"}},[_c('span',{staticClass:"sub"},[_vm._v(_vm._s(sub.name))]),_vm._v(" "),_c('span',{staticClass:"sub"},[_vm._v(_vm._s(sub.odds))])])}),_vm._v(" "),(!item.sub_odds)?_c('span',[_vm._v(_vm._s(item.odds))]):_vm._e()],2)]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[(item.bet_num == 0)?_c('div',{staticClass:"cell",class:{sub_color: item.bet_num > 0}},[_vm._v(_vm._s(item.bet_num))]):_c('div',{staticClass:"cell sub_color"},[_c('span',{on:{"click":function($event){return _vm.showDetails(item)}}},[_vm._v(_vm._s(item.bet_num))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.pay_money))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.lose_earn))])])]):_vm._e()}),_vm._v(" "),(_vm.total)?_c('tr',[_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"4"}},[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(_vm.LANG['总计'] || '总计'))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(_vm.totalMoney.bet_num || 0))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(_vm.totalMoney.pay_money || 0))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(_vm.totalMoney.lose_earn || 0))])])])]):_vm._e(),_vm._v(" "),(_vm.dataModel.length == 0)?_c('tr',{staticStyle:{"text-align":"center","height":"100px"}},[_c('td',{attrs:{"colspan":"8"}},[_vm._v("暂无数据")])]):_vm._e()],2)])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":_vm.details,"visible":_vm.dialogVisible,"size":"large"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_c('el-col',[_c('table',{staticClass:"el-table el-table__header el-table--border",staticStyle:{"width":"100%"},attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('thead',[_c('tr',[_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['序号'] || '序号')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",staticStyle:{"padding":"0 20px"},attrs:{"colspan":"4","rowspan":"1"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['订单号'] || '订单号')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"4","rowspan":"1"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['下单时间'] || '下单时间')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"4","rowspan":"1"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['期数'] || '期数')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['会员'] || '会员')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['总额'] || '总额')}})]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell",domProps:{"textContent":_vm._s(_vm.LANG['内容'] || '内容')}})])])]),_vm._v(" "),_vm._l((_vm.detaildataModel),function(item,index){return (_vm.detaildataModel.length)?_c('tr',[_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(item.id))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"4"}},[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(item.order_number))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"4"}},[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(item.created))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"4"}},[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(item.lottery_number))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(item.user_name))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(item.pay_money)))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(item.play_number))])])])]):_vm._e()}),_vm._v(" "),_c('tr',[_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"6"}},[_c('div',{staticClass:"cell"},[_c('span',[_vm._v("总计")])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"14"}},[_c('div',{staticClass:"cell tCent"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.dialogTotal)))])])])]),_vm._v(" "),(_vm.detaildataModel.length == 0)?_c('tr',{staticStyle:{"text-align":"center","height":"100px"}},[_c('td',{attrs:{"colspan":"22"}},[_vm._v("暂无数据")])]):_vm._e()],2),_vm._v(" "),(_vm.detaildataModel.length >0 )?_c('el-col',{staticClass:"toolbar pagemar",staticStyle:{"position":"relative"},attrs:{"span":24}},[_c('el-pagination',{staticStyle:{"float":"right"},attrs:{"current-page":_vm.dialogcurrentPage,"page-sizes":[10,20,30,40],"page-size":_vm.dialogpageSize,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.dialogtotal},on:{"current-change":_vm.dodialogCurrentChange}})],1):_vm._e()],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/instantNote/oddsSet.vue
function injectStyle (context) {
  __webpack_require__(461)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8f3c912c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  oddsSet,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var instantNote_oddsSet = (Component.exports);

// EXTERNAL MODULE: ./node_modules/element-ui/packages/col/src/col.js
var col = __webpack_require__(231);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/instantNote/lotterInstantNote.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var lotterInstantNote = ({
  data() {
    return {
      LANG,
      //搜索相关
      editForm: {
        tid: "",
        lottery_id: "",
        lottery_number: "",
        lottery_type: "",
        play_type1: ""
      },
      tidList: [],
      lotteryList: [],
      lotteryNumList: [],
      lotteryGameType: [],
      // 快捷模式  玩法类型
      lotteryGame: [],
      // 存彩种一级玩法
      //表格相关
      columnsUrl: "",
      tableUrl: "",
      baseUrl: "",
      //玩法类型（快捷、标准）
      playType: "",
      nowId: -1,
      updated: false,
      //彩票玩法
      lotteryType: false,
      aId: [],
      lotteryname: '',
      // 超时时间
      options: [{
        "label": "不刷新",
        "value": "0"
      }, {
        "label": "30秒",
        "value": "30"
      }, {
        "label": "60秒",
        "value": "60"
      }, {
        "label": "120秒",
        "value": "120"
      }, {
        "label": "180秒",
        "value": "180"
      }],
      times: 60,
      standardActive: "primary",
      quickActive: "",
      cloneQuery: {}
    };
  },

  components: {
    ElCol: col["a" /* default */],
    tablegrid: tableGrid["a" /* default */],
    oddsSet: instantNote_oddsSet
  },
  computed: {
    nowType: function () {
      return this.playType === "standard" ? 0 : 1;
    }
  },

  mounted() {},

  methods: {
    init() {
      this.columnsUrl = "/static/json/lotteryNew/lotteryinstantnote/columns.json";
      this.baseUrl = URL.api + ROUTES.GET.lottery.realtime;
      this.tableUrl = "";
      this.cloneQuery = {};
      this.playType = this.playType ? this.playType : "standard";
      let nowType = this.playType === "standard" ? 0 : 1;

      let _this = this; //彩票模板


      this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.template + "?enabled=1&template_type=" + nowType + "&page=1&page_size=10", '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];
            _this.tidList = [];

            for (let k in model) {
              _this.tidList.push({
                "label": model[k]['t_name'],
                "value": model[k]['t_id'].toString()
              });
            }

            if (_this.tidList.length > 0) {
              _this.editForm.tid = _this.tidList[0].value;
            }

            _this.changeTid(_this.editForm.tid);
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
      this.getLotteryList();
    },

    checkType(obj) {},

    changeTimes(v) {
      if (parseInt(v) === 0) {
        window.clearInterval(window.TIMEREF);
      } else {
        this.createTimes(parseInt(v));
      }
    },

    createTimes(times) {
      window.clearInterval(window.TIMEREF);
      window.TIMEREF = setInterval(() => {
        this.getNumList(this.editForm.lottery_id);
        this.doQuery();
      }, times * 1000);
    },

    //获取彩票名称
    getLotteryList() {
      let _this = this;

      this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.types.$, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];
            _this.lotteryList = [];

            for (let k in model) {
              if (model[k].pid != 0) {
                if (model[k].state) {
                  let list = model[k].state.split(",");
                  let playType = this.playType === "standard" ? "standard" : "fast";

                  for (let j in list) {
                    if (list[j] === playType) {
                      _this.lotteryList.push({
                        "label": model[k]['name'],
                        "value": model[k]['id'].toString()
                      });
                    }
                  }
                }
              }
            }

            if (_this.lotteryList.length > 0) {
              let num = parseInt(_this.lotteryList[0].value);
              _this.editForm.lottery_id = _this.lotteryList[0].value;

              if (this.nowType == 1) {
                _this.doQueryNum(_this.editForm.lottery_id);
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

    //获取期号
    getNumList(num) {
      let _this = this;

      this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.order.number + "?lottery_id=" + num + "&page=1&page_size=10", '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];
            _this.lotteryNumList = [];

            for (let k in model) {
              if (model[k].pid != 0) {
                _this.lotteryNumList.push({
                  "label": model[k]['lottery_number'],
                  "value": model[k]['lottery_number']
                });
              }
            }

            if (_this.lotteryNumList.length > 0) {
              _this.editForm.lottery_number = _this.lotteryNumList[0].value;

              _this.initForm();
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 初始化询条件
    initForm() {
      if (this.nowType == 0) {
        this.editForm.play_type1 = 0;
      }

      if (this.editForm.tid && this.editForm.lottery_id && this.editForm.lottery_number) {
        let nowType = this.playType === "standard" ? 0 : 1;
        this.editForm.lottery_type = this.nowType;
        this.tableUrl = this.baseUrl + this.addSearch(this.editForm);
      }
    },

    //            执行查询
    doQuery() {
      let _this = this;

      if (this.nowType == 0) {
        this.editForm.play_type1 = 0;
      }

      this.editForm.lottery_type = this.nowType;
      this.tableUrl = this.baseUrl + this.addSearch(this.editForm);

      if (EQUALOBJECT(_this.editForm, _this.cloneQuery)) {
        Bus.$emit('form_query_lottery', true);
      }

      for (let i in _this.editForm) {
        if (typeof _this.editForm[i] === 'object') {
          for (let n in _this.editForm[i]) {
            _this.cloneQuery[i][n] = _this.editForm[i][n];
          }
        } else {
          _this.cloneQuery[i] = _this.editForm[i];
        }
      }
    },

    /* doReset(){
                  this.init();
                  debugger
              },*/
    //切换彩种
    doQueryNum(obj) {
      this.lotteryList.forEach(ele => {
        if (ele.value === obj) {
          this.lotteryname = ele.label;
        }
      });

      if (this.nowType == 1) {
        for (let el in this.lotteryGame) {
          if (this.lotteryGame[el].lottery_id == obj) {
            this.lotteryGameType = [];
            let arr = this.lotteryGame[el].sub;

            for (let i in arr) {
              this.lotteryGameType.push({
                "label": arr[i].play_type1_name,
                "value": arr[i].play_type1
              });
            }

            this.editForm.play_type1 = this.lotteryGameType[0].value;
          }
        }
      }
    },

    changeTid(obj) {
      if (this.nowType == 1 && this.editForm.tid) {
        let _this = this;

        this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.types.play + '?tid=' + this.editForm.tid + '&lottery_type=1', '', {
          ok: res => {
            if (res.state == 0 && res.data) {
              _this.lotteryGame = res.data;

              _this.doQueryNum(_this.editForm.lottery_id);
            } else {
              _this.$message.error(LANG['获取玩法类型失败'] || '获取玩法类型失败');
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      }
    },

    //切换玩法
    doChangePlay(str) {
      if (this.playType === str) {
        return;
      } else {
        this.playType = str;

        if (str === "fast") {
          this.standardActive = "";
          this.quickActive = "primary";
          this.lotteryType = true;
        } else {
          this.standardActive = "primary";
          this.quickActive = "";
          this.lotteryType = false;
        }

        this.editForm.tid = "";
        this.editForm.lottery_id = "";
        this.editForm.lottery_number = "";
        this.editForm.lottery_type = "";
        this.editForm.play_type1 = "";
      }

      this.init();
    },

    //保存数据
    saveOdds(obj) {
      this.updated = false;

      let _this = this;

      let model = obj.item;
      let odds = [];

      for (let k in model) {
        if (model[k].id && !model[k].sub_odds) {
          odds.push({
            id: model[k]['id'],
            type: 1,
            odds: model[k]['odds']
          });
        } else {
          if (model[k].sub_odds && model[k].sub_odds.length) {
            for (let index in model[k].sub_odds) {
              odds.push({
                id: model[k].sub_odds[index]['id'],
                type: 2,
                odds: model[k].sub_odds[index]['odds']
              });
            }
          }
        }
      }

      let lotteryData = {
        tid: this.editForm.tid,
        lid: this.editForm.lottery_id,
        type: this.playType,
        odds: odds
      };
      this.$.autoAjax('put', URL.api + ROUTES.PUT.lottery.realtime, lotteryData, {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.updated = true;

            _this.$message.success(LANG['恭喜您，赔率设置成功！'] || '恭喜您，赔率设置成功！');
          } else {
            _this.$message.error(LANG['赔率设置失败，请稍后重试！'] || '赔率设置失败，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.put(URL.api + ROUTES.PUT.lottery.realtime, JSON.stringify(lotteryData), URLCONFIG).then((res) => {
      // 	if (res.data.state == 0 && res.data.data) {
      // 		_this.updated = true;
      // 		_this.$message.success(LANG['恭喜您，赔率设置成功！'] || '恭喜您，赔率设置成功！');
      // 	} else {
      // 		_this.$message.error(LANG['赔率设置失败，请稍后重试！'] || '赔率设置失败，请稍后重试');
      // 	}
      // });
    }

  },
  watch: {
    'editForm.lottery_id': function (val, oldval) {
      if (val) {
        this.getNumList(val);
      }
    }
  },

  created() {
    this.init();
  },

  activated() {
    window.TIMEREF = null;

    if (this.times >= 60) {
      this.createTimes(parseInt(this.times));
    } //  初始化页面选项


    this.standardActive = "primary";
    this.quickActive = "";
    this.lotteryType = false;
    this.init();
  },

  deactivated() {
    window.clearInterval(window.TIMEREF);
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-71ddfc52","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/instantNote/lotterInstantNote.vue
var lotterInstantNote_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"templateManage w100",attrs:{"id":"cs"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-button',{attrs:{"type":_vm.standardActive,"size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['官方玩法'] || '官方玩法')},on:{"click":function($event){return _vm.doChangePlay('standard')}}}),_vm._v(" "),_c('el-button',{attrs:{"type":_vm.quickActive,"size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['信用玩法'] || '信用玩法')},on:{"click":function($event){return _vm.doChangePlay('fast')}}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-form',{ref:"editForm",staticClass:"search el-form--inline",attrs:{"model":_vm.editForm}},[_c('el-form-item',{attrs:{"span":4}},[_c('label',{staticClass:"el-form-item__label",domProps:{"textContent":_vm._s(_vm.LANG['模板名称'] || '模板名称')}}),_vm._v(" "),_c('el-select',{staticClass:"inputW",attrs:{"size":"small","placeholder":_vm.LANG['请选择'] || '请选择'},on:{"change":_vm.changeTid},model:{value:(_vm.editForm.tid),callback:function ($$v) {_vm.$set(_vm.editForm, "tid", $$v)},expression:"editForm.tid"}},_vm._l((_vm.tidList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"span":4}},[_c('label',{staticClass:"el-form-item__label",domProps:{"textContent":_vm._s(_vm.LANG['彩种名称'] || '彩种名称')}}),_vm._v(" "),_c('el-select',{staticClass:"inputW",attrs:{"size":"small","placeholder":_vm.LANG['请选择'] || '请选择'},on:{"change":_vm.doQueryNum},model:{value:(_vm.editForm.lottery_id),callback:function ($$v) {_vm.$set(_vm.editForm, "lottery_id", $$v)},expression:"editForm.lottery_id"}},_vm._l((_vm.lotteryList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),(_vm.nowType === 1)?_c('el-form-item',{attrs:{"span":4}},[_c('label',{staticClass:"el-form-item__label",domProps:{"textContent":_vm._s(_vm.LANG['玩法类型'] || '玩法类型')}}),_vm._v(" "),_c('el-select',{staticClass:"inputW",attrs:{"size":"small","placeholder":_vm.LANG['请选择'] || '请选择'},model:{value:(_vm.editForm.play_type1),callback:function ($$v) {_vm.$set(_vm.editForm, "play_type1", $$v)},expression:"editForm.play_type1"}},_vm._l((_vm.lotteryGameType),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"span":4}},[_c('label',{staticClass:"el-form-item__label",attrs:{"span":8},domProps:{"textContent":_vm._s(_vm.LANG['期号'] || '期号')}}),_vm._v(" "),_c('el-select',{staticClass:"inputW",attrs:{"size":"small","placeholder":_vm.LANG['请选择'] || '请选择'},model:{value:(_vm.editForm.lottery_number),callback:function ($$v) {_vm.$set(_vm.editForm, "lottery_number", $$v)},expression:"editForm.lottery_number"}},_vm._l((_vm.lotteryNumList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"span":4}},[_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.doQuery}},[_vm._v(_vm._s(_vm.LANG['查询'] || '查询'))])],1),_vm._v(" "),_c('el-form-item',{staticClass:"ml20",attrs:{"span":4}},[_c('label',{staticClass:"font14",staticStyle:{"display":"inline-block"}},[_vm._v("自动刷新时间\n                        "),_c('el-select',{staticClass:"intW mr10",attrs:{"placeholder":"请选择","size":"small"},on:{"change":_vm.changeTimes},model:{value:(_vm.times),callback:function ($$v) {_vm.times=$$v},expression:"times"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1)])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('oddsSet',{attrs:{"tableUrl":_vm.tableUrl,"columnsUrl":_vm.columnsUrl,"playType":_vm.playType,"updated":_vm.updated,"lotteryId":_vm.editForm.lottery_id,"lotteryNumber":_vm.editForm.lottery_number,"playname":_vm.editForm.play_type1,"lotteryName":_vm.lotteryname},on:{"save-data":_vm.saveOdds}})],1)],1)}
var lotterInstantNote_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/instantNote/lotterInstantNote.vue
function lotterInstantNote_injectStyle (context) {
  __webpack_require__(460)
}
/* script */


/* template */

/* template functional */
var lotterInstantNote_vue_template_functional_ = false
/* styles */
var lotterInstantNote_vue_styles_ = lotterInstantNote_injectStyle
/* scopeId */
var lotterInstantNote_vue_scopeId_ = "data-v-71ddfc52"
/* moduleIdentifier (server only) */
var lotterInstantNote_vue_module_identifier_ = null

var lotterInstantNote_Component = Object(component_normalizer["a" /* default */])(
  lotterInstantNote,
  lotterInstantNote_render,
  lotterInstantNote_staticRenderFns,
  lotterInstantNote_vue_template_functional_,
  lotterInstantNote_vue_styles_,
  lotterInstantNote_vue_scopeId_,
  lotterInstantNote_vue_module_identifier_
)

/* harmony default export */ var instantNote_lotterInstantNote = __webpack_exports__["default"] = (lotterInstantNote_Component.exports);


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },
  computed: {
    gutter() {
      let parent = this.$parent;

      while (parent && parent.$options.componentName !== 'ElRow') {
        parent = parent.$parent;
      }

      return parent ? parent.gutter : 0;
    }

  },

  render(h) {
    let classList = [];
    let style = {};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }

    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop]) {
        classList.push(prop !== 'span' ? `el-col-${prop}-${this[prop]}` : `el-col-${this[prop]}`);
      }
    });
    ['xs', 'sm', 'md', 'lg'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`el-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(prop !== 'span' ? `el-col-${size}-${prop}-${props[prop]}` : `el-col-${size}-${props[prop]}`);
        });
      }
    });
    return h(this.tag, {
      class: ['el-col', classList],
      style
    }, this.$slots.default);
  }

});

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);