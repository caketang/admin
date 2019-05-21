(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/accountManagement/validUserDetail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var validUserDetail = ({
  data() {
    return {
      LANG,
      tableUrl: '',
      columnsUrl: '',
      baseUrl: '',
      showGames: false,
      username: '',
      gameList: []
    };
  },

  methods: {
    init() {
      this.baseUrl = URL.api + '/state/summary';
      this.columnsUrl = "static/json/userManagement/agentAccount/userAgentcolumns.json";
      this.tableUrl = this.baseUrl + '?date_from=' + this.stime + '&date_to=' + this.etime + '&type=member&agent_id=' + this.nowId; // 取游戏列表

      this.gameList.splice(0, this.gameList.length);
      let gamelist = this.gameList;
      this.$.autoAjax('get', URL.api + ROUTES.GET.games.listTwo, '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            let model = res.data || [];

            for (let i in model) {
              gamelist.push({
                "game_id": model[i].game_id,
                "game_type": model[i].game_type
              });
            }

            ;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.get(URL.api + ROUTES.GET.games.listTwo,URLCONFIG).then((res) => {
      //     if(res.data.state === 0 && res.data.data){
      //         let model=res.data.data || [];
      //         for(let i in model){
      //             gamelist.push({
      //                 "game_id":model[i].game_id,
      //                 "game_type":model[i].game_type
      //             });
      //         };
      //     }
      // })
      .catch(function (err) {//                    console.log(err)
      });
    },

    // 回上页
    doReturn() {
      if (this.showGames) {
        this.showGames = false;
        this.columnsUrl = "static/json/userManagement/agentAccount/userAgentcolumns.json";
        this.tableUrl = this.baseUrl + '?date_from=' + this.stime + '&date_to=' + this.etime + '&type=member&agent_id=' + this.nowId;
      } else {
        this.$emit('return-page', {});
      }
    },

    // 表格事件
    doHandle(obj) {
      switch (obj.fn) {
        case "openGameReport":
          this.openGameReport(obj.row);
          break;

        case "openUser":
          // 用户名跳转
          this.openUser(obj.row);
          break;
      }
    },

    // 打开游戏报表
    openGameReport(row) {
      let temp = {
        date_from: this.stime,
        date_to: this.etime,
        type: 'user',
        user_name: row.name
      };
      this.showGames = true;
      this.username = row.name;
      this.columnsUrl = "static/json/statement/gameStatement/columns2.json";
      this.tableUrl = URL.api + ROUTES.GET.state.game + '?flag=0&type=user&games=' + JSON.stringify(this.gameList) + '&date_from=' + this.stime + '&date_to=' + this.etime + '&user_name=' + row.name;
    },

    // 用户跳转
    openUser(row) {
      this.$router.push({
        path: '/noteManagement',
        query: {
          user_name: row.user_name,
          game_name: row.game_name,
          game_type: row.game_type,
          start_time: this.stime,
          end_time: this.etime,
          isopen: 1
        }
      });
    }

  },
  props: {
    nowId: String,
    agentName: String,
    etime: String,
    stime: String,
    type: String
  },
  components: {
    tablegrid: tableGrid["a" /* default */]
  },

  created() {
    this.init();
  },

  watch: {
    agentName: function (newval) {
      if (newval) {
        this.init();
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-305d216d","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/accountManagement/validUserDetail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"validUserDetail"}},[_c('el-col',{staticStyle:{"margin-bottom":"10px"}},[_c('el-button',{attrs:{"size":"small","type":"primary"},on:{"click":_vm.doReturn}},[_vm._v(_vm._s(_vm.LANG['返回'] || '返回'))])],1),_vm._v(" "),_c('el-col',[(!_vm.showGames)?_c('span',{staticClass:"ml10"},[_vm._v(_vm._s(_vm.agentName)+" "+_vm._s(_vm.LANG['代理下的会员详情'] || '代理下的会员详情'))]):_vm._e(),_vm._v(" "),(_vm.showGames)?_c('span',{staticClass:"ml10"},[_vm._v(_vm._s(_vm.LANG['会员'] || '会员')+" "+_vm._s(_vm.username))]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"ml10"},[_vm._v(_vm._s(_vm.LANG['时间'] || '时间')+" ( "+_vm._s(_vm.stime)+" "+_vm._s(_vm.LANG['到'] || '到')+" "+_vm._s(_vm.etime)+" )")]),_vm._v(" "),(!_vm.showGames)?_c('span',{staticClass:"ml10"},[_vm._v(_vm._s(_vm.LANG['总报表'] || '总报表'))]):_vm._e(),_vm._v(" "),(_vm.showGames)?_c('span',{staticClass:"ml10"},[_vm._v(_vm._s(_vm.LANG['游戏报表'] || '游戏报表'))]):_vm._e()]),_vm._v(" "),(!_vm.showGames)?_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"isCreated":true},on:{"do-handle":_vm.doHandle}})],1):_vm._e(),_vm._v(" "),(_vm.showGames)?_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"isCreated":true,"sumGame":true},on:{"do-handle":_vm.doHandle}})],1):_vm._e()],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/accountManagement/validUserDetail.vue
function injectStyle (context) {
  __webpack_require__(495)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  validUserDetail,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var accountManagement_validUserDetail = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/accountManagement/validUserAgent.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var validUserAgent = ({
  data() {
    return {
      LANG,
      //搜索框
      isEdit: {},
      formConfig: [{
        "type": "quickDate",
        "showTimes": true
      }, //快捷日期
      {
        "type": "dateGroup",
        "label": "时间",
        "prop": [{
          "prop": "time_start",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "time_end",
          "value": "",
          "label": "结束时间"
        }]
      }, {
        "prop": "type",
        "value": "",
        "label": "账号体系",
        "type": "select",
        "list": [{
          'label': '全部',
          'value': ""
        }, {
          'label': '层级代理',
          'value': "1"
        }, {
          'label': '直属代理',
          'value': "2"
        }]
      }, {
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "用户名"
      }],
      // 代理表格相关
      columnsUrl: "",
      tableUrl: "",
      agentbaseUrl: "",
      // 代理会员详情
      agentNames: "",
      stimes: sessionStorage.sysTime,
      etimes: sessionStorage.sysTime,
      // 数据导出相关
      outUrl: "",
      onDialogVisible: false,
      sumShow: false,
      searchObj: {},
      searchObjUser: {},
      showDetail: false,
      sumData: {
        total: 0,
        sub_members: 0,
        tatal_members: 0
      },
      updateKeys: '',
      isShow: sessionStorage.valid_user_export == 'true' ? true : false
    };
  },

  props: {
    stime: String,
    etime: String
  },
  methods: {
    // 初始化
    init() {
      this.searchObj.time_start = this.stime ? this.stime : sessionStorage.dateTimeStart;
      this.searchObj.time_end = this.etime ? this.etime : sessionStorage.dateTimeEnd;
      this.stimes = this.searchObj.time_start;
      this.etimes = this.searchObj.time_end;
      this.columnsUrl = "static/json/accoutManage/validUser/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.user.agent.valid + "?time_start=" + this.stimes + "&time_end=" + this.etimes;
      this.agentbaseUrl = URL.api + ROUTES.GET.user.agent.valid;
      this.dates = "?time_start=" + this.stimes + "&time_end=" + this.etimes;

      if (this.stime || this.etime) {
        this.formConfig[1].prop[0].value = this.stimes;
        this.formConfig[1].prop[1].value = this.etimes;
      }
    },

    // 显示小计总计
    getDate(obj) {
      if (obj.allData && obj.allData.attributes) {
        this.sumData.total = obj.allData.attributes.total || 0;
        this.sumData.sub_members = obj.allData.attributes.sub_members || 0;
        this.sumData.tatal_members = obj.allData.attributes.tatal_members || 0;
      }
    },

    // 执行查询
    doQuery(obj) {
      if (obj.item.time_start === '') {
        this.$message.error(LANG['开始时间必需填写'] || '开始时间必需填写');
      } else if (obj.item.time_end === '') {
        this.$message.error(LANG['结束时间必需填写'] || '结束时间必需填写');
      } else {
        this.tableUrl = this.agentbaseUrl + this.addSearch(obj.item);
        this.dates = "?time_start=" + obj.item.time_start + "&time_end=" + obj.item.time_end + "&get_total=1";
        this.stimes = obj.item.time_start;
        this.etimes = obj.item.time_end;

        for (let i in obj.item) {
          this.searchObj[i] = obj.item[i];
        }
      }
    },

    // 代理表格事件
    doHandle(obj) {
      switch (obj.fn) {
        case "showAgent":
          this.showAgent(obj.row);
          break;

        case "showDetails":
          this.showDetails(obj.row);
      }
    },

    // 重置代理表单
    resetForm() {
      this.tableUrl = this.agentbaseUrl + "?time_start=" + sessionStorage.dateTimeStart + "&time_end=" + sessionStorage.dateTimeEnd;
    },

    showDetails(row) {
      this.$router.push({
        path: '/agentAccount',
        query: {
          id: row.id,
          type: row.type
        }
      });
    },

    showAgent(row) {
      let temp = {
        id: row.agent_id,
        type: row.type == '1' ? 'level_agent' : 'agent',
        stime: this.stimes,
        etime: this.etimes,
        agentName: row.name
      };
      this.$emit('show-detail', temp);
    },

    // 导出数据
    exportData(export_flag) {
      let url = "";
      let time_form = this.searchObj.time_start;
      let time_to = this.searchObj.time_end;
      url = URL.api + '/export/download/agent';

      if (time_form && time_to) {
        this.$.autoAjax('get', URL.api + '/dev/download/sign' + '?nonce=' + url, '', {
          ok: res => {
            if (res.data) {
              let url_code = export_flag === "agent" ? this.addSearch(this.searchObj) : this.addSearch(this.searchObjUser);
              this.outUrl = url + url_code + "&nonce=" + res.data.nonce + "&signature=" + res.data.signature + "&time=" + res.data.time + "&uuid=" + res.data.uuid;
              this.onDialogVisible = true;
            } else if (res.message) {
              this.$message.error(res.message);
            } else {
              this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      } else {
        this.$message.error(LANG['必需选择时间才能导出'] || '必需选择时间才能导出');
        return;
      }
    }

  },
  components: {
    formEdit: formEdit["a" /* default */],
    tableGrid: tableGrid["a" /* default */],
    validUserDetail: accountManagement_validUserDetail
  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  activated() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5472d1a6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/accountManagement/validUserAgent.vue
var validUserAgent_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"validUserAgent"}},[_c('formEdit',{attrs:{"formVisible":{},"formConfig":_vm.formConfig,"showAdd":false,"formType":'otherone',"type":'search',"labelWidth":'120px',"isEdit":{'state':false},"formTitel":'',"defaultForm":true},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}}),_vm._v(" "),(_vm.isShow)?_c('el-button',{staticStyle:{"float":"right"},attrs:{"type":"primary","size":"small"},on:{"click":function($event){return _vm.exportData('agent')}}},[_vm._v(_vm._s(_vm.LANG['导出'] || '导出'))]):_vm._e(),_vm._v(" "),_c('tableGrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"isCreated":true,"getData":true},on:{"do-handle":_vm.doHandle,"get-table-data":_vm.getDate}},[(_vm.sumData.total)?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.sumData.sub_members))])])]):_vm._e(),_vm._v(" "),(_vm.sumData.total)?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['总计'] || '总计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.sumData.tatal_members))])])]):_vm._e()]),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":"提示","visible":_vm.onDialogVisible,"size":"tiny"},on:{"update:visible":function($event){_vm.onDialogVisible=$event}}},[_vm._v("\n            "+_vm._s(_vm.LANG['点击”确认“导出数据'] || '点击”确认“导出数据')+"\n            "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.onDialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('a',{attrs:{"href":_vm.outUrl,"target":"_blank","id":"outUrl"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onDialogVisible = false}}},[_vm._v("确 认")])],1)],1)])],1)],1)}
var validUserAgent_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/accountManagement/validUserAgent.vue
function validUserAgent_injectStyle (context) {
  __webpack_require__(494)
}
/* script */


/* template */

/* template functional */
var validUserAgent_vue_template_functional_ = false
/* styles */
var validUserAgent_vue_styles_ = validUserAgent_injectStyle
/* scopeId */
var validUserAgent_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var validUserAgent_vue_module_identifier_ = null

var validUserAgent_Component = Object(component_normalizer["a" /* default */])(
  validUserAgent,
  validUserAgent_render,
  validUserAgent_staticRenderFns,
  validUserAgent_vue_template_functional_,
  validUserAgent_vue_styles_,
  validUserAgent_vue_scopeId_,
  validUserAgent_vue_module_identifier_
)

/* harmony default export */ var accountManagement_validUserAgent = (validUserAgent_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/tableUsers.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tableUsers = ({
  data() {
    return {
      baseUrl: "",
      LANG,
      dataModel: [],
      //总条数
      total: 0,
      //每次页条数
      pageSize: 20,
      //总页数
      pageCount: 0,
      //当前页
      subtotal: {
        balance: 0,
        deposit_manual_count: 0,
        deposit_manual_price: 0,
        deposit_online_count: 0,
        deposit_online_price: 0,
        withdraw_manual_count: 0,
        withdraw_manual_price: 0,
        withdraw_online_count: 0,
        withdraw_online_price: 0
      },
      totals: {
        balance: 0,
        deposit_manual_count: 0,
        deposit_manual_price: 0,
        deposit_online_count: 0,
        deposit_online_price: 0,
        withdraw_manual_count: 0,
        withdraw_manual_price: 0,
        withdraw_online_count: 0,
        withdraw_online_price: 0
      }
    };
  },

  props: {
    dataModelUrl: String
  },
  methods: {
    init() {
      //总条数
      let total = this.total; //每次页条数

      let pageSize = this.pageSize; //总页数

      let pageCount = this.pageCount;
      let dataModel = this.dataModel;

      let _this = this;

      this.baseUrl = this.dataModelUrl;

      if (this.dataModelUrl) {
        let index = this.baseUrl.indexOf('?');

        if (index === -1) {
          this.baseUrl = this.baseUrl + "?page=" + (this.currentPage === 0 ? 1 : this.currentPage) + "&page_size=" + (pageSize === 0 ? 10 : pageSize);
        } else {
          let n = this.baseUrl.indexOf('page=');

          if (/standard/g.test(this.baseUrl) || /fast/g.test(this.baseUrl)) {//                                currentPage = currentPage;
          } else {
            this.currentPage = 1;
          }

          if (n > 0) {
            this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + this.currentPage || false);
          } else {
            this.baseUrl = this.baseUrl + "&page=" + (this.currentPage === 0 ? 1 : this.currentPage) + "&page_size=" + (pageSize === 0 ? 10 : pageSize);
          }

          let m = this.baseUrl.indexOf('page_size=');

          if (m > 0) {
            this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + (pageSize === 0 ? 10 : pageSize));
          } else {
            this.baseUrl = this.baseUrl + "&page_size=10";
          }
        }

        this.$http.get(this.baseUrl, URLCONFIG).then(res => {
          dataModel.splice(0, dataModel.length);

          if (res.data.state == 0 && res.data.data) {
            let tableDate = res.data.data.list || [];

            if (res.data.attributes) {
              if (res.data.attributes.subTotalBet) {
                let obj = res.data.attributes.subTotalBet;

                for (let k in obj) {
                  _this.subTotalBet[k] = obj[k];
                }
              }

              if (res.data.attributes.totalBet) {
                let obj = res.data.attributes.totalBet;

                for (let k in obj) {
                  _this.totalBet[k] = obj[k];
                }
              }

              _this.total = res && res.data && res.data.attributes && res.data.attributes.total || 10;
              _this.pageSize = res && res.data && res.data.attributes && res.data.attributes.size || 10;
              _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
              _this.currentPage = parseInt(res.data.attributes.number) ? parseInt(res.data.attributes.number) : 1;
            }

            if (res.data.data.agent_info && res.data.data.agent_info.toString().length > 5) {
              this.$emit('get_agentinfo', {
                'data': res.data.data.agent_info
              });
            } else {
              this.$emit('get_agentinfo', {
                'data': null
              });
            }

            for (let i in tableDate) {
              dataModel.push(tableDate[i]);
            }

            let subtotal = res.data.data.subtotal || {};

            for (let n in subtotal) {
              _this.subtotal[n] = subtotal[n];
            }

            let total = res.data.data.total || {};

            for (let j in subtotal) {
              _this.totals[j] = total[j];
            }
          } else {//                           _this.$message.error(LANG['无数据, 请稍后再试!'] || '无数据, 请稍后再试!');
          }
        }); //                    this.$http.get(this.baseUrl+"&get_total=1",URLCONFIG).then((res) =>{
        //                        if(res.data.state == 0 && res.data.data !== null)
        //                        {
        //                            this.totals.offline_count = res.data.data.total.offline_count || 0;
        //                            this.totals.offline_total = res.data.data.total.offline_total || 0;
        //                            this.totals.online_count = res.data.data.total.online_count || 0;
        //                            this.totals.online_total = res.data.data.total.online_total || 0;
        //                            this.totals.withdraw_total = res.data.data.total.withdraw_total || 0;
        //                            this.totals.withdraw_count = res.data.data.total.withdraw_count || 0;
        //                        }else{
        //                            this.$message.error(LANG['无数据, 请稍后再试!'] || '无数据, 请稍后再试!');
        //                        }
        //
        //                    })
      }
    },

    //处理操作公共按钮事件
    doHandle(row, fn) {
      this.$emit("do-handle", {
        "event": event,
        "row": row,
        "fn": fn
      });
    },

    //切换每页条数
    doSizePage(v) {
      this.loading = true;
      let total = this.total;
      let pageSize = this.pageSize;
      let pageCount = this.pageCount;
      let page = 0;

      let _this = this;

      page = Math.ceil(pageSize * pageCount / total) || 1;

      _this.dataModel.splice(0, _this.dataModel.length);

      let index = this.baseUrl.indexOf('?');

      if (index === -1) {
        this.baseUrl = this.baseUrl + "?page=1&page_size=" + v;
      } else {
        let n = this.baseUrl.indexOf('page=');

        if (n > 0) {
          this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=1");
        } else {
          this.baseUrl = this.baseUrl + "&page=1&page_size=" + v;
        }

        let m = this.baseUrl.indexOf('page_size=');

        if (m > 0) {
          this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + v);
        } else {
          this.baseUrl = this.baseUrl + "&page_size=" + 10;
        }
      }

      this.$http.get(this.baseUrl, URLCONFIG).then(res => {
        _this.total = res.data.attributes.total || 10;
        _this.pageSize = res.data.attributes.size || 10;
        _this.pageCount = Math.ceil(this.total / this.pageSize);
        _this.currentPage = 1;
        let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];

        if (tableDate.list) {
          for (let i in tableDate.list) {
            _this.dataModel.push(tableDate.list[i]);
          }
        } else {
          for (let i in tableDate) {
            _this.dataModel.push(tableDate[i]);
          }
        }

        let subtotal = res.data.data.subtotal || {};

        for (let n in subtotal) {
          _this.subtotal[n] = subtotal[n];
        }

        let total = res.data.data.total || {};

        for (let j in subtotal) {
          _this.totals[j] = total[j];
        }

        _this.loading = false;
      }).catch(e => {
        _this.loading = false;

        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      });
    },

    //切换页数
    doCurrentChange(v) {
      this.loading = true;
      let total = this.total;
      let pageSize = this.pageSize;
      let pageCount = this.pageCount;
      this.currentPage = v;
      let page = 0;

      let _this = this;

      page = Math.ceil(pageSize * pageCount / total) || 1;

      _this.dataModel.splice(0, _this.dataModel.length);

      let index = this.baseUrl.indexOf('?');

      if (index === -1) {
        this.baseUrl = this.baseUrl + "?page=" + v + "&page_size=" + this.pageSize;
      } else {
        let n = this.baseUrl.indexOf('page=');

        if (n > 0) {
          this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + v);
        } else {
          this.baseUrl = this.baseUrl + "&page=" + v + "&page_size=" + this.pageSize;
        }

        let m = this.baseUrl.indexOf('page_size=');

        if (m > 0) {
          this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + this.pageSize);
        } else {
          this.baseUrl = this.baseUrl + "&page_size=" + 10;
        }
      }

      this.$http.get(this.baseUrl, URLCONFIG).then(res => {
        _this.total = res.data.attributes.total || 10;
        _this.pageSize = res.data.attributes.size || 10;
        _this.pageCount = Math.ceil(this.total / this.pageSize);
        _this.currentPage = res.data.attributes.number || 1;
        let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];

        if (tableDate.list) {
          for (let i in tableDate.list) {
            _this.dataModel.push(tableDate.list[i]);
          }
        } else {
          for (let i in tableDate) {
            _this.dataModel.push(tableDate[i]);
          }
        }

        let subtotal = res.data.data.subtotal || {};

        for (let n in subtotal) {
          _this.subtotal[n] = subtotal[n];
        }

        let total = res.data.data.total || {};

        for (let j in subtotal) {
          _this.totals[j] = total[j];
        }

        _this.loading = false;
      }).catch(e => {
        _this.loading = false;

        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      });
    }

  },
  watch: {
    //如果数据网址发生变化，就执行数据请求
    dataModelUrl: function (newval) {
      if (newval) {
        this.init();
      }
    }
  },

  created() {
    this.init();
  },

  computed: {
    scrollClass: function () {
      return {
        'scrollX': this.tableScroll
      };
    },
    tableWidth: function () {
      let width = document.body.clientWidth;
      return this.tableScroll ? 'width:' + (width - 270) + 'px' : '';
    }
  },

  mounted() {
    let _this = this;

    Bus.$on('form_query', function (v) {
      if (v) {
        _this.init();
      }
    });
  },

  deactivated() {
    window.clearInterval(window.PAGEREF); //            Bus.$off('form_query');
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-311eeb9e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/tableUsers.vue
var tableUsers_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"tableSingle",class:_vm.scrollClass,style:(_vm.tableWidth),attrs:{"id":"tableUsers"}},[_c('el-card',[_c('table',{staticClass:"el-table el-table__header el-table--border",attrs:{"cellspacing":"0","cellpadding":"0","border":"1"}},[_c('thead',[_c('tr',[_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"2","width":"70px"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['会员帐号'] || '会员帐号'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"2","width":"60px"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['真实姓名'] || '真实姓名'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['注册时间'] || '注册时间'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['代理帐号'] || '代理帐号'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['帐号状态'] || '帐号状态'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['主钱包余额'] || '主钱包余额'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['存款笔数'] || '存款笔数'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['存款金额'] || '存款金额'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['取款笔数'] || '取款笔数'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['取款金额'] || '取款金额'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v("\n                        "+_vm._s(_vm.LANG['最后存款时间'] || '最后存款时间')+"\n                    ")])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"2","rowspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v("\n                        "+_vm._s(_vm.LANG['最后取款时间'] || '最后取款时间')+"\n                    ")])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"2","width":"80px"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['电话'] || '电话')),_c('br')])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"2","width":"150px"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['邮箱'] || '邮箱')),_c('br')])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"2","width":"70px"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['QQ'] || 'QQ')),_c('br')])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"2","width":"70px"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['微信号'] || '微信号')),_c('br')])])]),_vm._v(" "),_c('tr',[_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['线上'] || '线上'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['人工'] || '人工')),_c('br')])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['线上'] || '线上'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['人工'] || '人工'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['线上'] || '线上')),_c('br')])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['人工'] || '人工'))])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_36 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['线上'] || '线上')),_c('br')])]),_vm._v(" "),_c('th',{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{"colspan":"1","rowspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['人工'] || '人工'))])])])]),_vm._v(" "),_vm._l((_vm.dataModel),function(item,index){return _c('tr',[_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.user_name))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.truename))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.created))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.agent_name))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.state))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s((item.balance/100).toFixed(2)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.deposit_online_times || 0))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.deposit_manual_times || 0))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(item.deposit_online_money)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(item.deposit_manual_money)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.withdraw_times))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.withdraw_manual_times))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(item.withdraw_money)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(item.withdraw_manual_money)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_c('p',[_vm._v(_vm._s(item.deposit_last_time))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"2"}},[_c('div',{staticClass:"cell"},[_c('p',[_vm._v(_vm._s(item.withdraw_last_time))])])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.mobile))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.email))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.qq))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(item.weixin))])])])}),_vm._v(" "),(_vm.dataModel.length > 0)?_c('tr',[_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"6"}},[_c('div',{staticClass:"cell"},[_vm._v("小计")])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subtotal.balance)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subtotal.deposit_online_count))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subtotal.deposit_manual_count))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subtotal.deposit_online_price)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subtotal.deposit_manual_price)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subtotal.withdraw_online_count))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subtotal.withdraw_manual_count))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subtotal.withdraw_online_price)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subtotal.withdraw_manual_price)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"8"}})]):_vm._e(),_vm._v(" "),(_vm.dataModel.length > 0)?_c('tr',[_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"6"}},[_c('div',{staticClass:"cell"},[_vm._v("总计")])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totals.balance)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totals.deposit_online_count))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totals.deposit_manual_count))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totals.deposit_online_price)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totals.deposit_manual_price)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totals.withdraw_online_count))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totals.withdraw_manual_count))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totals.withdraw_online_price)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"1"}},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totals.withdraw_manual_price)))])]),_vm._v(" "),_c('td',{staticClass:"el-table_1_column_19",attrs:{"colspan":"8"}})]):_vm._e(),_vm._v(" "),(_vm.dataModel.length == 0)?_c('tr',{staticStyle:{"line-height":"100px","text-align":"center","background-color":"#ffffff"}},[_c('td',{attrs:{"colspan":"22"}},[_c('div',{staticClass:"tCent"},[_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据'))])])]):_vm._e()],2),_vm._v(" "),(_vm.dataModel.length >0 )?_c('el-col',{staticClass:"toolbar mt20 pb pRight20",staticStyle:{"text-align":"right"},attrs:{"span":24}},[_c('el-pagination',{staticStyle:{"float":"right"},attrs:{"current-page":_vm.currentPage,"page-sizes":[10, 20, 50,100,1000],"page-size":_vm.pageSize,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.total},on:{"size-change":_vm.doSizePage,"current-change":_vm.doCurrentChange}})],1):_vm._e()],1)],1)}
var tableUsers_staticRenderFns = []

// CONCATENATED MODULE: ./src/components/tableUsers.vue
function tableUsers_injectStyle (context) {
  __webpack_require__(497)
}
/* script */


/* template */

/* template functional */
var tableUsers_vue_template_functional_ = false
/* styles */
var tableUsers_vue_styles_ = tableUsers_injectStyle
/* scopeId */
var tableUsers_vue_scopeId_ = "data-v-311eeb9e"
/* moduleIdentifier (server only) */
var tableUsers_vue_module_identifier_ = null

var tableUsers_Component = Object(component_normalizer["a" /* default */])(
  tableUsers,
  tableUsers_render,
  tableUsers_staticRenderFns,
  tableUsers_vue_template_functional_,
  tableUsers_vue_styles_,
  tableUsers_vue_scopeId_,
  tableUsers_vue_module_identifier_
)

/* harmony default export */ var components_tableUsers = (tableUsers_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/accountManagement/validUserMember.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var validUserMember = ({
  data() {
    return {
      LANG,
      // 会员相关
      formConfigUser: [{
        "type": "quickDate",
        "showTimes": true
      }, //快捷日期
      {
        "type": "dateGroup",
        "label": "注册日期",
        "prop": [{
          "prop": "register_from",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "register_to",
          "value": "",
          "label": "结束时间"
        }]
      }, {
        "prop": "name",
        "value": "",
        "type": "textarea",
        "label": "帐号",
        "placeholder": "输入会员账号，多个会员帐号之间用英文逗号 , 隔开",
        "width": 500
      }, {
        "prop": "type",
        "value": "",
        "label": "存取款方式",
        "type": "select",
        "list": [{
          'label': '全部',
          'value': '1'
        }, {
          'label': '有存款',
          'value': '2'
        }, {
          'label': '有出款',
          'value': '3'
        }, {
          'label': '有存取款',
          'value': '4'
        }, {
          'label': '无存款',
          'value': '5'
        }, {
          'label': '无取款',
          'value': '6'
        }, {
          'label': '无存取款',
          'value': '7'
        }]
      }],
      showDetail: false,
      // 会员详情
      dataModelUrl: "",
      columnsUrl: "",
      stimes: sessionStorage.sysTime,
      etimes: sessionStorage.sysTime,
      // 查询会员不显示日期
      updateuserKeys: "",
      // 数据导出相关
      outUrl: "",
      onDialogVisible: false,
      //                sumShow: false,
      //                searchObj: {},
      searchObjUser: {},
      isShow: sessionStorage.valid_user_export == 'true' ? true : false //                export_form:{}

    };
  },

  props: {
    activeName: String()
  },
  methods: {
    // 初始化
    init() {
      this.searchObjUser.register_from = sessionStorage.sysTime;
      this.searchObjUser.register_to = sessionStorage.sysTime;
      this.dataModelUrl = URL.api + ROUTES.GET.user.valid + "?register_from=" + sessionStorage.dateTimeStart + "&register_to=" + sessionStorage.dateTimeEnd + "&get_total=1";
      this.memberbaseUrl = URL.api + ROUTES.GET.user.valid;
    },

    // 执行查询
    doQuery(obj) {
      if (this.addSearch(obj.item)) {
        this.dataModelUrl = this.memberbaseUrl + this.addSearch(obj.item) + "&get_total=1";
      } else {
        this.dataModelUrl = this.memberbaseUrl + "?get_total=1";
      }

      for (let i in obj.item) {
        this.searchObjUser[i] = obj.item[i];
      }
    },

    // 重置代理表单
    resetForm() {
      this.dataModelUrl = this.memberbaseUrl + "?register_from=" + sessionStorage.dateTimeStart + "&register_to=" + sessionStorage.dateTimeEnd;
    },

    //
    //            // 测试详情页
    //            showAgent(obj){
    //                this.agentNames = obj.name;
    //                this.nowId = parseInt(obj.id, 10);
    //                this.showDetail = true;
    //                this.updateuserKeys = "time_start,''";
    //                this.updateuserKeys = "time_end,''";
    //            },
    // 返回列表
    returnList() {
      this.showDetail = false;
    },

    // 导出数据
    exportData() {
      let form = this.searchObjUser;
      let url = "";
      let time_form = null;
      let time_to = null; //                if (export_flag === "member") {
      //                    form = this.$children[1].$children[0].$refs.editForm.model;
      //                    url = URL.api + '/export/download/agent';
      //                    time_form = form.time_start;
      //                    time_to = form.time_end;
      //                } else {
      //                    form = this.$children[2].$children[0].$refs.editForm.model;
      //                    form = this.$children[1].$children[0].$refs.editForm.model;

      url = URL.api + "/export/download/user";
      time_form = form.register_from;
      time_to = form.register_to; //                }

      if (time_form && time_to) {
        this.$.autoAjax('get', URL.api + '/dev/download/sign' + '?nonce=' + url, '', {
          ok: res => {
            if (res.data) {
              let url_code = this.addSearch(this.searchObjUser);
              this.outUrl = url + url_code + "&nonce=" + res.data.nonce + "&signature=" + res.data.signature + "&time=" + res.data.time + "&uuid=" + res.data.uuid;
              this.onDialogVisible = true;
            } else if (res.message) {
              this.$message.error(res.message);
            } else {
              this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // this.$http.get(URL.api + '/dev/download/sign' + '?nonce=' + url, URLCONFIG).then((res)=>{
        //     if (res.data.data) {
        //         let url_code = this.addSearch(this.searchObjUser)
        //         this.outUrl = url + url_code + "&nonce=" + res.data.data.nonce + "&signature=" + res.data.data.signature + "&time="+ res.data.data.time + "&uuid=" + res.data.data.uuid;
        //        this.onDialogVisible = true;
        //     }else if(res.data.message){
        //         this.$message.error(res.data.message);
        //     } else {
        //         this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
        //     }
        // })
      } else {
        this.$message.error(LANG['必需选择时间才能导出'] || '必需选择时间才能导出');
        return;
      }
    }

  },
  components: {
    formEdit: formEdit["a" /* default */],
    tableGrid: tableGrid["a" /* default */],
    validUserDetail: accountManagement_validUserDetail,
    tableUsers: components_tableUsers
  },
  computed: {},
  watch: {
    activeName: function (val, oldval) {
      if (val != oldval) {
        if (val === "member") {
          this.init();
        }
      }
    }
  },

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-21fad6c6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/accountManagement/validUserMember.vue
var validUserMember_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"validUser"}},[(_vm.activeName == 'member' && !_vm.showDetail)?_c('el-col',[_c('formEdit',{attrs:{"formVisible":{},"formConfig":_vm.formConfigUser,"showAdd":false,"formType":'other',"type":'search',"labelWidth":'120px',"isEdit":{'state':false},"formTitel":''},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}}),_vm._v(" "),(_vm.isShow)?_c('div',{staticStyle:{"width":"100%","height":"38px"}},[_c('el-button',{staticStyle:{"float":"right"},attrs:{"type":"primary","size":"small"},on:{"click":function($event){return _vm.exportData('member')}}},[_vm._v(_vm._s(_vm.LANG['导出'] || '导出'))])],1):_vm._e(),_vm._v(" "),_c('tableUsers',{attrs:{"dataModelUrl":_vm.dataModelUrl}})],1):_vm._e(),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":"提示","visible":_vm.onDialogVisible,"size":"tiny"},on:{"update:visible":function($event){_vm.onDialogVisible=$event}}},[_vm._v("\n            "+_vm._s(_vm.LANG['点击”确认“导出数据'] || '点击”确认“导出数据')+"\n            "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.onDialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('a',{attrs:{"href":_vm.outUrl,"target":"_blank","id":"outUrl"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onDialogVisible = false}}},[_vm._v("确 认")])],1)],1)])],1),_vm._v(" "),(_vm.showDetail)?_c('el-col',[_c('validUserDetail',{attrs:{"nowId":_vm.nowId,"agentNames":_vm.agentNames,"activeName":_vm.activeName,"stime":_vm.stimes,"etime":_vm.etimes},on:{"return-page":_vm.returnList}})],1):_vm._e()],1)}
var validUserMember_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/accountManagement/validUserMember.vue
function validUserMember_injectStyle (context) {
  __webpack_require__(496)
}
/* script */


/* template */

/* template functional */
var validUserMember_vue_template_functional_ = false
/* styles */
var validUserMember_vue_styles_ = validUserMember_injectStyle
/* scopeId */
var validUserMember_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var validUserMember_vue_module_identifier_ = null

var validUserMember_Component = Object(component_normalizer["a" /* default */])(
  validUserMember,
  validUserMember_render,
  validUserMember_staticRenderFns,
  validUserMember_vue_template_functional_,
  validUserMember_vue_styles_,
  validUserMember_vue_scopeId_,
  validUserMember_vue_module_identifier_
)

/* harmony default export */ var accountManagement_validUserMember = (validUserMember_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/accountManagement/validUserAgentInformation.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var validUserAgentInformation = ({
  data() {
    return {
      LANG,
      //搜索框
      isEdit: {},
      // 会员相关
      formConfig: [{
        "type": "quickDate",
        "showTimes": true
      }, //快捷日期
      {
        "prop": "agent_account",
        "value": "",
        "label": "代理账号",
        "type": "text"
      }, {
        "prop": "user_account",
        "value": "",
        "type": "text",
        "label": "会员帐号"
      }, {
        "type": "dateGroup",
        "label": "时间",
        "prop": [{
          "prop": "start_time",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "end_time",
          "value": "",
          "label": "结束时间"
        }]
      }, {
        "prop": "type",
        "value": "",
        "label": "存取款方式",
        "type": "select",
        "list": [{
          'label': '全部',
          'value': '1'
        }, {
          'label': '有存款',
          'value': '2'
        }, {
          'label': '有出款',
          'value': '3'
        }, {
          'label': '有存取款',
          'value': '4'
        }, {
          'label': '无存款',
          'value': '5'
        }, {
          'label': '无取款',
          'value': '6'
        }, {
          'label': '无存取款',
          'value': '7'
        }]
      }],
      // 代理相关
      formAgentConfig: [{
        "prop": "name",
        "value": "",
        "label": "代理账号",
        "type": "label"
      }, {
        "prop": "truename",
        "value": "",
        "type": "text",
        "label": "真实姓名"
      }, {
        "prop": "mobile",
        "value": "",
        "type": "text",
        "label": "手机号码"
      }, {
        "prop": "qq",
        "value": "",
        "type": "text",
        "label": "QQ"
      }, {
        "prop": "weixin",
        "value": "",
        "type": "text",
        "label": "微信"
      }, {
        "prop": "email",
        "value": "",
        "type": "text",
        "label": "电子邮箱"
      }, {
        "prop": "created",
        "value": "",
        "type": "label",
        "label": "注册日期"
      }],
      showTable: false,
      tableUrl: '',
      baseUrl: '',
      // 查询会员不显示日期
      updateuserKeys: "",
      // 数据导出相关
      outUrl: "",
      onDialogVisible: false,
      sumShow: false,
      searchObj: {
        agentName: '',
        memberName: '',
        register_from: '',
        register_to: '',
        type: ''
      },
      updateKeys: '',
      agentId: -1,
      showAgent: false,
      isShow: sessionStorage.valid_user_export == 'true' ? true : false
    };
  },

  props: {
    activeName: String()
  },
  methods: {
    // 初始化
    init() {
      this.searchObj.time_form = sessionStorage.sysTime;
      this.searchObj.time_to = sessionStorage.sysTime;
      this.tableUrl = URL.api + '/user/valid/agent.info/';
      this.baseUrl = URL.api + '/user/valid/agent.info/';
    },

    // 获取代理资料
    getAgentInfo(obj) {
      let _this = this;

      this.showAgent = false;

      if (obj.data) {
        this.agentId = obj.data.id;
        let temp = {
          'name': obj.data['name'] || '',
          'truename': obj.data['truename'] || '',
          'mobile': obj.data['mobile'] || '',
          'qq': obj.data['qq'] || '',
          'weixin': obj.data['weixin'] || '',
          'email': obj.data['email'] || '',
          'created': FORMATDATEPICKER(obj.data['created']) || ''
        };
        this.showAgent = true;
        setTimeout(function () {
          _this.updateKeys = 'name,' + temp.name + ',truename,' + temp.truename + ',mobile,' + temp.mobile + ',qq,' + temp.qq + ',weixin,' + temp.weixin + ',email,' + temp.email + ',created,' + temp.created;
        }, 1000);
      } else {
        _this.updateKeys = 'name,,truename,,mobile,,qq,,weixin,,email,,created,';
      }
    },

    // 执行查询
    doQuery(obj) {
      if (obj.item.agent_account || obj.item.user_account) {
        this.showTable = true;
        this.tableUrl = this.baseUrl + this.addSearch(obj.item) + "&get_total=1";
      } else {
        this.showTable = false;
        this.tableUrl = '';
        this.$message.error(LANG['代理帐号、会员帐号必填其一'] || '代理帐号、会员帐号必填其一');
      }

      for (let i in obj.item) {
        this.searchObj[i] = obj.item[i];
      }
    },

    // 重置代理表单
    resetForm() {
      this.tableUrl = '';
    },

    // 导出数据
    exportData(export_flag) {
      let url = "";
      url = URL.api + "/export/download/user";

      if (this.searchObj.time_form && this.searchObj.time_to) {
        this.$.autoAjax('get', URL.api + '/dev/download/sign' + '?nonce=' + url, '', {
          ok: res => {
            if (res.data) {
              let url_code = export_flag === "agent" ? this.addSearch(this.searchObj) : this.addSearch(this.searchObj);
              this.outUrl = url + url_code + "&nonce=" + res.data.nonce + "&signature=" + res.data.signature + "&time=" + res.data.time + "&uuid=" + res.data.uuid;
              this.onDialogVisible = true;
            } else if (res.message) {
              this.$message.error(res.message);
            } else {
              this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // this.$http.get(URL.api + '/dev/download/sign' + '?nonce=' + url, URLCONFIG).then((res)=>{
        //     if (res.data.data) {
        //         let url_code = export_flag === "agent" ? this.addSearch(this.searchObj) : this.addSearch(this.searchObj)
        //         this.outUrl = url + url_code + "&nonce=" + res.data.data.nonce + "&signature=" + res.data.data.signature + "&time="+ res.data.data.time + "&uuid=" + res.data.data.uuid;
        //
        //         this.onDialogVisible = true;
        //     }else if(res.data.message){
        //         this.$message.error(res.data.message);
        //     } else {
        //         this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
        //     }
        // })
      } else {
        this.$message.error(LANG['必需选择时间才能导出'] || '必需选择时间才能导出');
        return;
      }
    },

    // 保存代理资料
    saveForm(obj) {
      let baseFrom = obj.formObj;

      let _this = this;

      let data = {
        email: baseFrom.email,
        mobile: baseFrom.mobile,
        qq: baseFrom.qq,
        weixin: baseFrom.weixin
      };
      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.agent.messages + "/" + this.agentId, data, {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.$message.success(LANG['代理资料修改成功！'] || '代理资料修改成功！');
          } else if (res.state == 4003 || res.state == 2003 || res.state == 405) {
            _this.$message.error(LANG['无权限操作'] || '无权限操作');
          } else {
            _this.$message.error(LANG['基本资料修改失败，请稍后重试！'] || '基本资料修改失败，请稍后重试！');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api+ROUTES.PATCH.user.agent.messages+"/"+ this.agentId,JSON.stringify(data),URLCONFIG).then((res)=>{
      //     if(res.data.state == 0 && res.data.data){
      //         _this.$message.success(LANG['代理资料修改成功！'] || '代理资料修改成功！');
      //     }else if(res.data.state == 4003 || res.data.state == 2003 || res.data.state == 405){
      //         _this.$message.error(LANG['无权限操作'] || '无权限操作');
      //     }else{
      //         _this.$message.error(LANG['基本资料修改失败，请稍后重试！'] || '基本资料修改失败，请稍后重试！');
      //
      //     }
      // })
      //                this.$refs.baseFrom.validate((valid) => {
      //                    if (valid) {
      //                        this.changeId();
      //                        let baseFrom = this.baseFrom;
      //                        let _this = this;
      //                        let data={ email: baseFrom.email == "" ? null : baseFrom.email, mobile: baseFrom.mobile, qq: baseFrom.qq.toString(), weixin: baseFrom.weixin, memo: baseFrom.memo, skype: baseFrom.skype };
      //                        this.$http.patch(URL.api+ROUTES.PATCH.user.agent.messages+"/"+ baseFrom.id,JSON.stringify(data),URLCONFIG).then((res)=>{
      //                            if(res.data.state == 0 && res.data.data){
      //                                _this.$message.success(LANG['基本资料修改成功！'] || '基本资料修改成功！');
      //                            }else if(res.data.state == 4003 || res.data.state == 2003 || res.data.state == 405)
      //                            {
      //                                _this.$message.error(LANG['无权限操作'] || '无权限操作');
      //                            }else{
      //
      //                                _this.$message.error(LANG['基本资料修改失败，请稍后重试！'] || '基本资料修改失败，请稍后重试！');
      //
      //                            }
      //                        })
      //                    }
      //
      //                });
    }

  },
  components: {
    formEdit: formEdit["a" /* default */],
    tableUsers: components_tableUsers
  },
  computed: {},
  watch: {
    activeName: function (val, oldval) {
      if (val != oldval) {
        if (val === "member") {
          this.init();
        }
      }
    }
  },

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-040fd651","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/accountManagement/validUserAgentInformation.vue
var validUserAgentInformation_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"validUser"}},[_c('formEdit',{attrs:{"formVisible":{},"formConfig":_vm.formConfig,"showAdd":false,"formType":'other',"type":'search',"labelWidth":'120px',"isEdit":{'state':false},"formTitel":''},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}}),_vm._v(" "),(_vm.showTable)?_c('el-col',[(_vm.showAgent)?_c('el-card',{staticClass:"box-card-form"},[_c('div',{staticClass:"clearfix",attrs:{"slot":"header"},slot:"header"},[_c('span',{staticStyle:{"line-height":"36px"}},[_vm._v("代理基本资料")])]),_vm._v(" "),_c('formEdit',{attrs:{"formVisible":{},"formConfig":_vm.formAgentConfig,"showAdd":false,"formType":'other',"type":'pageForm',"labelWidth":'120px',"updateKeys":_vm.updateKeys,"isEdit":{'state':false},"formTitel":'代理基本资料'},on:{"get-form":_vm.saveForm}})],1):_vm._e(),_vm._v(" "),(_vm.isShow)?_c('div',{staticStyle:{"width":"100%","height":"38px"}},[_c('el-button',{staticStyle:{"float":"right"},attrs:{"type":"primary","size":"small"},on:{"click":function($event){return _vm.exportData('user')}}},[_vm._v(_vm._s(_vm.LANG['导出'] || '导出'))])],1):_vm._e(),_vm._v(" "),_c('tableUsers',{attrs:{"dataModelUrl":_vm.tableUrl},on:{"get_agentinfo":_vm.getAgentInfo}})],1):_vm._e(),_vm._v(" "),_c('el-col',{attrs:{"span":8}}),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":"提示","visible":_vm.onDialogVisible,"size":"tiny"},on:{"update:visible":function($event){_vm.onDialogVisible=$event}}},[_vm._v("\n            "+_vm._s(_vm.LANG['点击”确认“导出数据'] || '点击”确认“导出数据')+"\n            "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.onDialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('a',{attrs:{"href":_vm.outUrl,"target":"_blank","id":"outUrl"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.onDialogVisible = false}}},[_vm._v("确 认")])],1)],1)])],1)],1)}
var validUserAgentInformation_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/accountManagement/validUserAgentInformation.vue
function validUserAgentInformation_injectStyle (context) {
  __webpack_require__(498)
}
/* script */


/* template */

/* template functional */
var validUserAgentInformation_vue_template_functional_ = false
/* styles */
var validUserAgentInformation_vue_styles_ = validUserAgentInformation_injectStyle
/* scopeId */
var validUserAgentInformation_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var validUserAgentInformation_vue_module_identifier_ = null

var validUserAgentInformation_Component = Object(component_normalizer["a" /* default */])(
  validUserAgentInformation,
  validUserAgentInformation_render,
  validUserAgentInformation_staticRenderFns,
  validUserAgentInformation_vue_template_functional_,
  validUserAgentInformation_vue_styles_,
  validUserAgentInformation_vue_scopeId_,
  validUserAgentInformation_vue_module_identifier_
)

/* harmony default export */ var accountManagement_validUserAgentInformation = (validUserAgentInformation_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/accountManagement/validUser.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var validUser = ({
  data() {
    return {
      LANG,
      activeName: "agent",
      showDetail: false,
      nowId: -1,
      agentName: '',
      stime: '',
      etime: '',
      nowtype: ''
    };
  },

  methods: {
    // 初始化
    init() {
      this.activeName = 'agent';
    },

    // showDetail
    doShowDetail(obj) {
      this.showDetail = true;
      this.nowId = obj.id;
      this.agentName = obj.agentName;
      this.stime = obj.stime;
      this.etime = obj.etime;
      this.nowtype = obj.type;
    },

    //  返回初始页
    returnList() {
      this.showDetail = false;
    }

  },
  components: {
    agent: accountManagement_validUserAgent,
    member: accountManagement_validUserMember,
    agentinformation: accountManagement_validUserAgentInformation,
    validUserDetail: accountManagement_validUserDetail
  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  activated() {
    this.init();
    this.activeName = 'agent';
    this.showDetail = false;
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-68a70176","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/accountManagement/validUser.vue
var validUser_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"validUser"}},[_c('el-radio-group',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showDetail),expression:"!showDetail"}],staticClass:"mb10",model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},[_c('el-radio',{attrs:{"label":"agent"}},[_vm._v(_vm._s(_vm.LANG['有效会员列表'] || '有效会员列表'))]),_vm._v(" "),_c('el-radio',{attrs:{"label":"member"}},[_vm._v(_vm._s(_vm.LANG['会员查询'] || '会员查询'))]),_vm._v(" "),_c('el-radio',{attrs:{"label":"agentInformation"}},[_vm._v(_vm._s(_vm.LANG['代理资料'] || '代理资料'))])],1),_vm._v(" "),(_vm.activeName == 'agent' && !_vm.showDetail)?_c('el-col',[_c('agent',{attrs:{"stime":_vm.stime,"etime":_vm.etime},on:{"show-detail":_vm.doShowDetail,"return-page":_vm.returnList}})],1):_vm._e(),_vm._v(" "),(_vm.activeName == 'member' && !_vm.showDetail)?_c('el-col',[_c('member',{attrs:{"activeName":_vm.activeName}})],1):_vm._e(),_vm._v(" "),(_vm.activeName == 'agentInformation' && !_vm.showDetail)?_c('el-col',[_c('agentinformation')],1):_vm._e(),_vm._v(" "),(_vm.showDetail)?_c('el-col',[_c('validUserDetail',{attrs:{"nowId":_vm.nowId,"agentName":_vm.agentName,"stime":_vm.stime,"etime":_vm.etime,"type":_vm.nowtype},on:{"return-page":_vm.returnList}})],1):_vm._e()],1)}
var validUser_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/accountManagement/validUser.vue
function validUser_injectStyle (context) {
  __webpack_require__(493)
}
/* script */


/* template */

/* template functional */
var validUser_vue_template_functional_ = false
/* styles */
var validUser_vue_styles_ = validUser_injectStyle
/* scopeId */
var validUser_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var validUser_vue_module_identifier_ = null

var validUser_Component = Object(component_normalizer["a" /* default */])(
  validUser,
  validUser_render,
  validUser_staticRenderFns,
  validUser_vue_template_functional_,
  validUser_vue_styles_,
  validUser_vue_scopeId_,
  validUser_vue_module_identifier_
)

/* harmony default export */ var accountManagement_validUser = __webpack_exports__["default"] = (validUser_Component.exports);


/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);