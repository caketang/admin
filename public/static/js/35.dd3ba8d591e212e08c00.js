(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/cash/depositStatus.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var depositStatus = ({
  data() {
    return {
      LANG,
      // 条件搜索
      searchConfig: [{
        "type": "quickDate"
      }, //快捷日期
      {
        "type": "dateGroup",
        "label": "日期",
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
      type: "search",
      labelWidth: "120px",
      formVisible: {
        state: false
      },
      isEdit: {
        state: false
      },
      // 表格相关
      columnsUrlone: "",
      tableUrlone: "",
      baseUrlone: "",
      updated: false,
      // 汇总表格
      sumData: [],
      slotShow: false
    };
  },

  props: {
    depositId: Number,
    paymentName: String
  },
  components: {
    formEdit: formEdit["a" /* default */],
    tablegrid: tableGrid["a" /* default */]
  },
  methods: {
    init() {
      // 详情数据
      this.columnsUrlone = "static/json/agent/depositStatus/columns.json";
      this.tableUrlone = URL.api + "/cash/deposit/status?id=" + this.depositId + "&date_from=" + FORMATDATEPICKER(new Date()) + "&date_to=" + FORMATDATEPICKER(new Date());
      this.baseUrlone = URL.api + "/cash/deposit/status"; // 汇总数据
      //                this.columnsUrlone="static/json/cash/depositStatus/columnsSum.json"
      //                this.tableUrlone=URL.api+ROUTES.GET.state.summary + "?date_from=" + FORMATDATEPICKER(new Date()) + "?date_to=" + FORMATDATEPICKER(new Date());
      //                this.baseUrlone =URL.api+ROUTES.GET.state.summary;
    },

    returnPage() {
      this.$emit('return-page', {
        "itme": 'return'
      });
    },

    // 查询数据
    doQuery(obj) {
      this.tableUrlone = this.baseUrlone + this.addSearch(obj.item) + `&&id=${this.depositId}`;
    },

    // 重置表单
    resetForm() {},

    //
    getTableData(obj) {
      this.sumData.splice(0, this.sumData.length);
      let sumData = this.sumData;
      let temp = {};
      this.slotShow = false;

      if (obj.allData.attributes) {
        let attobj = obj.allData.attributes;

        for (let k in attobj) {
          if (k === 'moneyStop' || k === 'subTotalMoney' || k === 'totalMoney') {
            temp[k] = FORMATMONEY(attobj[k]);
          } else {
            temp[k] = attobj[k];
          }
        }
      }

      sumData.push(temp);

      if (sumData[0].subTotalMoney) {
        this.slotShow = true;
      }
    }

  },

  created() {
    this.init();
  },

  activated() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dbb5b2de","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/cash/depositStatus.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',{staticClass:"box-card"},[_c('div',{attrs:{"id":"depositStatus"}},[_c('div',[_c('el-button',{attrs:{"type":"primary","icon":"arrow-left","size":"small"},on:{"click":_vm.returnPage}},[_vm._v(_vm._s(_vm.LANG['返 回'] || '返 回')+"\n            ")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.paymentName)+" ")]),_vm._v(_vm._s(_vm.LANG['存款状况'] || '存款状况')+"\n        ")],1),_vm._v(" "),_c('el-col',{staticClass:"mt10"},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"isEdit":_vm.isEdit,"labelWidth":_vm.labelWidth,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticClass:"lists"},[_c('p',{staticClass:"mb10"},[_vm._v(_vm._s(_vm.LANG['商户名称存款统计'] || '商户名称存款统计'))]),_vm._v(" "),_c('el-table',{staticClass:"mt10",staticStyle:{"max-width":"1080px"},attrs:{"data":_vm.sumData,"border":""}},[_c('el-table-column',{attrs:{"prop":"total","label":_vm.LANG['存款笔数'] || '存款笔数'}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"totalMoney","label":_vm.LANG['累计存款金额'] || '累计存款金额'}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"moneyStop","label":_vm.LANG['停用金额'] || '停用金额'}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"lastTime","label":_vm.LANG['最后存款时间'] || '最后存款时间'}})],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticClass:"lists"},[_c('el-col',[_vm._v("\n                    "+_vm._s(_vm.LANG['存款详情'] || '存款详情')+"\n                ")]),_vm._v(" "),_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrlone,"tableUrl":_vm.tableUrlone,"getData":true,"isCreated":true,"updated":_vm.updated},on:{"get-table-data":_vm.getTableData}},[(_vm.slotShow)?_c('div',{attrs:{"slot":"other"},slot:"other"},[_vm._v("小计："+_vm._s(_vm.sumData[0].subTotalMoney ? _vm.sumData[0].subTotalMoney : 0)+"\n                    ")]):_vm._e()])],1)],1)],1)])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/cash/depositStatus.vue
function injectStyle (context) {
  __webpack_require__(509)
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
  depositStatus,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var cash_depositStatus = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/cash/otherPayment.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var otherPayment = ({
  data() {
    return {
      LANG,
      loading: false,
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: null
      },
      //表格数据
      tableUrl: "",
      useScene: "",
      baseUrl: '',
      //列配置
      columnsUrl: "",
      //搜索框
      type: "search",
      formTitel: "",
      labelWidth: "90px",
      isEdit: {},
      //--------
      AddFormState: false,
      AddFormTitle: '',
      AddFormData: {
        name: '',
        pay_id: '',
        //第三方支付平台
        pay_scene: [],
        //支付场景
        terminal: [],
        //终端设备
        day_deact: '',
        //帐户使用限制设置
        sort: '',
        //排序
        levels: [],
        //开放层级
        status: '',
        //是否启用
        configs: {}
      },
      AddFormConfig: {
        disabled: false,
        paylist: [],
        scenelist: [],
        scenelistall: ARRAYS.paymentScenariosOne,
        terminalList: [],
        terminalListall: ARRAYS.PLATFORMStWO,
        statusList: ARRAYS.state2,
        payConfigsList: [],
        levelslist: []
      },
      payList: [],
      isError: false,
      //新增配置
      formVisible: {
        state: false
      },
      searchConfig: [{
        "prop": "pay_code",
        "value": "",
        "type": "select",
        "label": "支付平台",
        "list": [],
        "filterable": true
      }, {
        "prop": "status",
        "value": "",
        "label": "状态",
        "type": "select",
        "list": [{
          "label": "全部",
          "value": ""
        }, {
          "label": "启用",
          "value": "enabled"
        }, {
          "label": "停用",
          "value": "disabled"
        }]
      }, {
        "prop": "name",
        "value": "",
        "label": "商户名称",
        "type": "text",
        "placeholder": "请输入商户名称"
      }, {
        "prop": "parter",
        "value": "",
        "label": "商户编号",
        "type": "text",
        "placeholder": "请输入商户编号"
      }, {
        "prop": "pay_scene",
        "value": "",
        "label": "支付场景",
        "type": "select",
        "list": ARRAYS.paymentScenarios
      }, {
        "prop": "levels",
        "value": "",
        "label": "会员等级",
        "type": "select",
        "list": []
      }, {
        "prop": "terminal",
        "value": "",
        "label": "终端设备",
        "type": "select",
        "list": [{
          "label": "全部",
          "value": ""
        }, {
          "label": "PC",
          "value": "PC"
        }, {
          "label": "H5",
          "value": "H5"
        }, {
          "label": "APP",
          "value": "APP"
        }]
      }],
      //现数据ID
      nowId: -1,
      updated: false,
      depositShow: false,
      //批量操作按钮
      tabOperation: [{
        "label": "批量启用",
        "fn": "doEnable"
      }, {
        "label": "批量停用",
        "fn": "doDisable"
      }],
      // 支付场景
      pay_scene_list: {},
      // 存储查询条件
      query: {},
      updateKeys: '',
      AddFormDataRules: {
        pay_id: [{
          required: true,
          message: '请选择新增支付平台',
          trigger: 'change'
        }],
        pay_scene: [{
          type: 'array',
          required: true,
          message: '请选择第三方支付场景',
          trigger: 'change'
        }],
        day_deact: [{
          required: true,
          message: '请输入每日充值最大金额',
          trigger: 'blur'
        }],
        terminal: [{
          type: 'array',
          required: true,
          message: '请选择使用终端',
          trigger: 'change'
        }],
        sort: [{
          required: true,
          message: '请设置排列顺序',
          trigger: 'blur'
        }],
        levels: [{
          type: 'array',
          required: true,
          message: '请选择可使用的会员层级',
          trigger: 'change'
        }],
        status: [{
          required: true,
          message: '请选择支付平台状态',
          trigger: 'change'
        }],
        name: [{
          required: true,
          message: '请填写商户名称',
          trigger: 'blur'
        }]
      },
      formType: ''
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */],
    DepositStatus: cash_depositStatus
  },
  methods: {
    init() {
      this.searchConfig[0].list = [];
      let list2 = this.AddFormConfig.paylist;
      let channel = this.searchConfig[0].list;
      this.baseUrl = URL.api + ROUTES.GET.cash.thirds.$;
      this.tableUrl = URL.api + ROUTES.GET.cash.thirds.$;
      this.columnsUrl = "/static/json/cash/otherPayment/columns.json"; //取支付渠道

      this.$.autoAjax('get', URL.api + ROUTES.GET.cash.third.providers, '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            let model = res.data;
            _this.payList = model;

            for (let i in model) {
              list2.push({
                "label": model[i].name,
                "code": model[i].code,
                "value": model[i].id.toString()
              });
              channel.push({
                "label": model[i].name,
                "code": model[i].code,
                "value": model[i].code
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); //                // 获取层级

      let levelUrl = URL.api + ROUTES.GET.user.level.list;

      let _this = this;

      _this.searchConfig[5].list = [{
        "label": LANG['全部'] || '全部',
        "value": ''
      }];
      this.$.autoAjax('get', levelUrl, '', {
        ok: res => {
          let model = res.data || [];

          for (let k in model) {
            _this.AddFormConfig.levelslist.push({
              "label": "VIP" + model[k].level,
              "value": model[k].level.toString()
            });

            _this.searchConfig[5].list.push({
              "label": "VIP" + model[k].level,
              "value": model[k].level
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // 支付场景

      this.$.autoAjax('get', URL.api + '/cash/3th.providers', '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            let model = res.data || [],
                pay_scene_list = this.pay_scene_list;

            if (model.length && model.length > 0) {
              for (let k = 0; k < model.length; k++) {
                pay_scene_list[model[k].id] = model[k];
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

    //新增配置
    handleClose() {
      this.AddFormState = false;
      this.AddFormData.pay_id = '';
    },

    changePay(data) {
      let _this = this,
          scenelist = [],
          terminalList = [],
          configList = [];

      _this.payList.forEach(item => {
        if (item.id == data) {
          configList = item.configs; //避免重复叠加

          item.pay_scene.split(',').forEach(a => {
            _this.AddFormConfig.scenelistall.forEach(b => {
              if (a === b.value) {
                scenelist.push(b);
              }
            });
          });
          item.terminal.split(',').forEach(a => {
            _this.AddFormConfig.terminalListall.forEach(b => {
              if (a === b.value) {
                terminalList.push(b);
              }
            });
          });
          _this.AddFormData.configs = {};
          configList.forEach(c => {
            _this.$set(_this.AddFormData.configs, c.param, '');
          });
          _this.AddFormConfig.scenelist = scenelist;
          _this.AddFormConfig.terminalList = terminalList;
          _this.AddFormConfig.payConfigsList = configList;
        }
      });
    },

    AddPay(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.getForm(this.AddFormData);
        } else {
          this.$message.error('请检查第三方支付配置数据是否填写完整');
          return false;
        }
      }); //
    },

    ruleConfig(r) {
      if (r.length == 0) {
        this.$message.error('第三方支付配置必须填写');
      }
    },

    //表格数据按钮
    doHandle(item) {
      this.formType = "";
      this.updated = false;
      this.nowId = parseInt(item.row.id);

      switch (item.fn) {
        case "doEdit":
          // 编辑
          this.doEdit(item.row);
          break;

        case "doDisable":
          this.doDisable(item.row);
          break;

        case "doEnable":
          this.doEnable(item.row);
          break;

        case "dayUsedMoney":
          this.dayUsedMoney(item.row);
          break;

        case "usedMoney":
          this.usedMoney(item.row);
          break;

        case "doDelete":
          this.doDelete(item.row);
          break;

        case "doDepositStatus":
          this.doDepositStatus(item.row);
          break;
      }
    },

    // 存款状况
    doDepositStatus(row) {
      if (parseInt(row.id) >= 0) {
        this.paymentName = row.name;
        this.depositShow = true;
      }
    },

    // 返回列表
    returnPage() {
      let updateKeys;

      for (let i in this.query) {
        updateKeys = i + ',' + this.query[i] + ',';
      }

      setTimeout(() => {
        this.updateKeys = updateKeys;
      }, 500);
      this.tableUrl = this.baseUrl + this.addSearch(this.query);
      this.depositShow = false;
    },

    // 日累计金额页面跳转
    dayUsedMoney(row) {
      if (FORMATMONEY(row['money_day_used']) > 0) {
        this.$router.push({
          path: '/onLineReceipts',
          query: {
            app_id: parseInt(row['app_id']),
            app_id_time: FORMATDATEPICKER(new Date())
          }
        });
      } else {
        this.$message.error(LANG['暂无交易记录'] || '暂无交易记录');
      }
    },

    // 累计金额页面跳转
    usedMoney(row) {
      if (FORMATMONEY(row['money_used']) > 0) {
        this.$router.push({
          path: '/onLineReceipts',
          query: {
            app_id: parseInt(row['app_id'])
          }
        });
      } else {
        this.$message.error(LANG['暂无交易记录'] || '暂无交易记录');
      }
    },

    // 删除第三方支付
    doDelete(row) {
      if (parseInt(row.id) >= 0) {
        if (parseInt(row.id)) {
          this.confirmConfig.state = true;
          this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
          this.confirmConfig.fn = "delete";
          this.confirmConfig.obj = row;
        }
      }
    },

    //            // 新增支付渠道
    doAdd(formName) {
      this.AddFormData = {
        name: '',
        pay_id: '',
        //第三方支付平台
        pay_scene: [],
        //支付场景
        terminal: [],
        //终端设备
        day_deact: '',
        //帐户使用限制设置
        sort: '',
        //排序
        levels: [],
        //开放层级
        status: '',
        //是否启用
        configs: {}
      };
      this.AddFormState = true;
      this.AddFormConfig.disabled = false;
      this.formType = 'add';
      this.AddFormTitle = this.LANG["新增第三方支付"] || "新增第三方支付";
    },

    // 批量操作
    doOperation(obj) {
      switch (obj.fn) {
        case 'doEnable':
          this.doEnable(obj.rows);
          break;

        case "doDisable":
          this.doDisable(obj.rows);
          break;
      }
    },

    //保存数据
    getForm(obj) {
      obj.day_deact = obj.day_deact * 100;
      this.updated = false;

      let _this = this;

      let url = URL.api + ROUTES.POST.cash.third.third;

      if (this.formType == "add") {
        this.$.autoAjax('put', url, obj, {
          ok: res => {
            res.state == 0 && res.data ? _this.$message.success(LANG['恭喜您，新增第三方支付成功！'] || '恭喜您，新增第三方支付成功！') : _this.$message.error(res.msg + "," + (LANG['新增第三方支付失败，请稍候重试！'] || '新增第三方支付失败，请稍候重试！'));
            _this.updated = true;
            _this.AddFormState = false;
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      } else {
        this.$.autoAjax('put', url + '?id=' + parseInt(this.nowId), obj, {
          ok: res => {
            res.state == 0 && res.data ? _this.$message.success(LANG['恭喜您，第三方支付修改成功！'] || '恭喜您，第三方支付修改成功！') : _this.$message.error(res.msg + "," + (LANG['修改第三方支付失败，请稍候重试！'] || '修改第三方支付失败，请稍候重试！'));
            _this.updated = true;
            _this.AddFormState = false;
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      }
    },

    doDisable(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "disable";
        this.confirmConfig.obj = row;
      } else if (row.length && row.length > 0) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = this.LANG['确定批量停用吗？'] || '确定批量停用吗';
        this.confirmConfig.fn = "disables";
        this.confirmConfig.obj = row;
      }
    },

    doEnable(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "enable";
        this.confirmConfig.obj = row;
      } else if (row.length && row.length > 0) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = this.LANG['确定批量启用吗？'] || '确定批量启用吗';
        this.confirmConfig.fn = "enables";
        this.confirmConfig.obj = row;
      }
    },

    doConfirm(row) {
      this.loading = true;

      let _this = this;

      this.updated = false;
      let nowId = row.obj.id;

      switch (row.fn) {
        case "enable":
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.cash.third + '?id=' + nowId, [{
            "id": parseInt(nowId),
            "status": "enabled",
            "name": row.obj.name
          }], {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(_this.LANG['第三方支付启用成功'] || '第三方支付启用成功');

                _this.updated = true;
              } else {
                _this.$message.error(_this.LANG['第三方支付启用失败，请稍后重试'] || '第三方支付启用失败，请稍后重试');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              _this.loading = false;

              _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
            }
          });
          break;

        case "disable":
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.cash.third + '?id=' + nowId, [{
            "id": parseInt(nowId),
            "status": "disabled",
            "name": row.obj.name
          }], {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(_this.LANG['第三方支付停用成功'] || '第三方支付停用成功');

                _this.updated = true;
              } else {
                _this.$message.error(_this.LANG['第三方支付停用失败，请稍后重试'] || '第三方支付停用失败，请稍后重试');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              _this.loading = false;

              _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
            }
          });
          break;

        case "disables":
          let templist = row.obj || [],
              query = [];

          if (templist.length > 0) {
            for (let i = 0; i < templist.length; i++) {
              query.push({
                id: templist[i].id,
                name: templist[i].name,
                status: 'disabled'
              });
            }
          }

          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.cash.third, query, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(_this.LANG['第三方支付批量停用成功'] || '第三方支付批量停用成功');

                _this.updated = true;
              } else {
                _this.$message.error(_this.LANG['第三方支付批量停用失败，请稍后重试'] || '第三方支付批量停用失败，请稍后重试');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              _this.loading = false;

              _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
            }
          });
          break;

        case "enables":
          let templists = row.obj || [],
              mode = {};
          mode.querys = [];

          if (templists.length > 0) {
            for (let i = 0; i < templists.length; i++) {
              mode.querys.push({
                'id': templists[i].id,
                'name': templists[i].name,
                'status': 'enabled'
              });
            }
          }

          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.cash.third, mode, {
            ok: res => {
              if (res.state === 0 && res.data) {
                _this.$message.success(_this.LANG['第三方支付批量启用成功'] || '第三方支付批量启用成功');

                _this.updated = true;
              } else {
                _this.$message.error(_this.LANG['第三方支付批量启用失败，请稍后重试'] || '第三方支付批量启用失败，请稍后重试');
              }

              _this.loading = false;
            },
            error: e => {
              _this.loading = false;

              _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
            }
          });
          break;

        case "delete":
          let nowid = parseInt(row.id);
          this.$.autoAjax('delete', URL.api + ROUTES.DELETE.cash.threeTh.del + '?id=' + parseInt(nowId) + "&name=" + row.obj.name, '', {
            ok: res => {
              if (res.state === 0 && res.data) {
                _this.$message.success(LANG['恭喜您，第三方支付删除成功！'] || '恭喜您，第三方支付删除成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['第三方支付删除失败，请稍后重试！'] || '第三方支付删除失败，请稍后重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              _this.loading = false;

              _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
            }
          });
          break;
      }
    },

    //编辑
    doEdit(row) {
      let _this = this,
          scenelist = [],
          terminalList = [],
          configList = [];

      _this.formType = "edit";
      _this.AddFormConfig.disabled = true;
      _this.AddFormTitle = this.LANG["编辑第三方支付"] || "编辑第三方支付";
      _this.loading = true;
      _this.nowId = row.id;

      _this.$.autoAjax('get', URL.api + ROUTES.GET.cash.third.$ + "?id=" + parseInt(this.nowId), '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.AddFormState = true;
            let mode = res.data;

            _this.payList.forEach(item => {
              if (item.id == mode.pay_id) {
                configList = item.configs; //避免重复叠加

                item.pay_scene.split(',').forEach(a => {
                  _this.AddFormConfig.scenelistall.forEach(b => {
                    if (a === b.value) {
                      scenelist.push(b);
                    }
                  });
                });
                item.terminal.split(',').forEach(a => {
                  _this.AddFormConfig.terminalListall.forEach(b => {
                    if (a === b.value) {
                      terminalList.push(b);
                    }
                  });
                });
                _this.AddFormData.configs = {};
                setTimeout(() => {
                  configList.forEach(c => {
                    _this.$set(_this.AddFormData.configs, c.param, mode.configs[c.param]);
                  });
                }, 500);
                _this.AddFormConfig.scenelist = scenelist;
                _this.AddFormConfig.terminalList = terminalList;
                _this.AddFormConfig.payConfigsList = configList;
              }
            });

            setTimeout(() => {
              _this.AddFormData.pay_id = mode.pay_id;
              _this.AddFormData.pay_scene = mode.pay_scene;
              _this.AddFormData.terminal = mode.terminal;
              _this.AddFormData.day_deact = FORMATMONEY(mode.day_deact).toString();
              _this.AddFormData.name = mode.name;
              _this.AddFormData.sort = mode.sort;
              _this.AddFormData.status = mode.status == '1' ? 'enabled' : 'disabled';
              _this.AddFormData.levels = mode.levels.split(',');
            }, 400);
          } else {
            _this.$message.error(_this.LANG['第三方支付信息请求失败，请稍后重试'] || '第三方支付信息请求失败，请稍后重试');
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //查询
    doQuery(obj) {
      for (let k in obj.item) {
        if (obj.item[k]) {
          this.query[k] = obj.item[k];
        }
      }

      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    resetForm() {
      this.tableUrl = this.baseUrl;
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  activated() {
    this.updated = false;
    setTimeout(() => {
      this.updated = true;
    }, 500);

    if (this.depositShow) {
      this.returnPage();
    }
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-082911d0","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/cash/otherPayment.vue
var otherPayment_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"otherPayment"}},[_c('el-dialog',{attrs:{"title":_vm.AddFormTitle,"visible":_vm.AddFormState,"size":"tiny","before-close":_vm.handleClose},on:{"update:visible":function($event){_vm.AddFormState=$event}}},[_c('el-form',{ref:"AddFormData",attrs:{"model":_vm.AddFormData,"label-width":"120px","rules":_vm.AddFormDataRules}},[_c('el-form-item',{staticClass:"w85",attrs:{"label":"第三方支付平台","prop":"pay_id"}},[_c('el-select',{staticClass:"w100",attrs:{"placeholder":"请选择支付平台","clearable":"","disabled":_vm.AddFormConfig.disabled},on:{"change":_vm.changePay},model:{value:(_vm.AddFormData.pay_id),callback:function ($$v) {_vm.$set(_vm.AddFormData, "pay_id", $$v)},expression:"AddFormData.pay_id"}},_vm._l((_vm.AddFormConfig.paylist),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}},[_c('span',{staticStyle:{"float":"left"}},[_vm._v(_vm._s(item.label))]),_vm._v(" "),_c('span',{staticStyle:{"float":"right","color":"#8492a6","font-size":"13px"}},[_vm._v(_vm._s(item.code))])])}),1)],1),_vm._v(" "),(_vm.AddFormData.pay_id)?_c('el-form-item',{staticClass:"w85",attrs:{"label":"商户名称","prop":"name"}},[_c('el-input',{model:{value:(_vm.AddFormData.name),callback:function ($$v) {_vm.$set(_vm.AddFormData, "name", $$v)},expression:"AddFormData.name"}})],1):_vm._e(),_vm._v(" "),_vm._l((_vm.AddFormConfig.payConfigsList),function(item,d){return (_vm.AddFormData.pay_id)?_c('el-form-item',{key:d,staticClass:"configs w85",class:{'warn':_vm.AddFormData.configs[item.param]&&_vm.AddFormData.configs[item.param].length ==0},attrs:{"label":'(必填)'+item.name}},[_c('el-input',{attrs:{"type":"password"},on:{"blur":function($event){return _vm.ruleConfig(_vm.AddFormData.configs[item.param])}},model:{value:(_vm.AddFormData.configs[item.param]),callback:function ($$v) {_vm.$set(_vm.AddFormData.configs, item.param, $$v)},expression:"AddFormData.configs[item.param]"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-eye-slash",staticStyle:{"position":"absolute","right":"10px","top":"10px"},attrs:{"aria-hidden":"true"}})],1):_vm._e()}),_vm._v(" "),(_vm.AddFormData.pay_id)?_c('el-form-item',{staticClass:"w85",attrs:{"label":"支付场景","prop":"pay_scene"}},[_c('el-checkbox-group',{model:{value:(_vm.AddFormData.pay_scene),callback:function ($$v) {_vm.$set(_vm.AddFormData, "pay_scene", $$v)},expression:"AddFormData.pay_scene"}},_vm._l((_vm.AddFormConfig.scenelist),function(s,x){return _c('el-checkbox',{key:x,attrs:{"label":s.value,"name":"type"}},[_vm._v(_vm._s(s.label)+"\n                      ")])}),1)],1):_vm._e(),_vm._v(" "),(_vm.AddFormData.pay_id)?_c('el-form-item',{staticClass:"w85",attrs:{"label":"终端设备","prop":"terminal"}},[_c('el-checkbox-group',{model:{value:(_vm.AddFormData.terminal),callback:function ($$v) {_vm.$set(_vm.AddFormData, "terminal", $$v)},expression:"AddFormData.terminal"}},_vm._l((_vm.AddFormConfig.terminalList),function(cm,z){return _c('el-checkbox',{key:z,attrs:{"label":cm.value,"name":"type"}},[_vm._v(_vm._s(cm.label)+"\n                      ")])}),1)],1):_vm._e(),_vm._v(" "),(_vm.AddFormData.pay_id)?_c('el-form-item',{staticClass:"w85",attrs:{"label":"每日最高额度","prop":"day_deact"}},[_c('el-input',{attrs:{"placeholder":"请输入金额","type":"number","max":"99999999"},model:{value:(_vm.AddFormData.day_deact),callback:function ($$v) {_vm.$set(_vm.AddFormData, "day_deact", $$v)},expression:"AddFormData.day_deact"}})],1):_vm._e(),_vm._v(" "),(_vm.AddFormData.pay_id)?_c('el-form-item',{attrs:{"label":"会员层级","prop":"levels"}},[_c('el-checkbox-group',{model:{value:(_vm.AddFormData.levels),callback:function ($$v) {_vm.$set(_vm.AddFormData, "levels", $$v)},expression:"AddFormData.levels"}},_vm._l((_vm.AddFormConfig.levelslist),function(items,k){return _c('el-checkbox',{key:k,attrs:{"label":items.value,"name":"type"}},[_vm._v(_vm._s(items.label)+"\n                      ")])}),1)],1):_vm._e(),_vm._v(" "),(_vm.AddFormData.pay_id)?_c('el-form-item',{staticClass:"w85",attrs:{"label":"排 序","prop":"sort"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.AddFormData.sort),callback:function ($$v) {_vm.$set(_vm.AddFormData, "sort", $$v)},expression:"AddFormData.sort"}})],1):_vm._e(),_vm._v(" "),(_vm.AddFormData.pay_id)?_c('el-form-item',{staticClass:"w85",attrs:{"label":"状 态","prop":"status"}},[_c('el-select',{staticClass:"w100",attrs:{"placeholder":"请选择支付平台状态"},model:{value:(_vm.AddFormData.status),callback:function ($$v) {_vm.$set(_vm.AddFormData, "status", $$v)},expression:"AddFormData.status"}},_vm._l((_vm.AddFormConfig.statusList),function(t,i){return _c('el-option',{key:i,attrs:{"label":t.label,"value":t.value}})}),1)],1):_vm._e()],2),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.AddFormState = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.AddPay('AddFormData')}}},[_vm._v("确 定")])],1)],1),_vm._v(" "),(!_vm.depositShow)?_c('div',{staticClass:"search"},[_c('el-col',{staticClass:"pb",attrs:{"span":24}},[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"showAdd":true,"updateKeys":_vm.updateKeys,"addText":_vm.LANG['新增支付'] || '新增支付'},on:{"add-new":_vm.doAdd,"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1)],1):_vm._e(),_vm._v(" "),(!_vm.depositShow)?_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"getData":true,"isCreated":!_vm.depositShow,"updated":_vm.updated,"tableCheck":true,"tabOperation":_vm.tabOperation},on:{"do-operation":_vm.doOperation,"do-handle":_vm.doHandle}})],1):_vm._e(),_vm._v(" "),_c('el-col'),_vm._v(" "),_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}}),_vm._v(" "),(_vm.depositShow)?_c('el-col',[_c('DepositStatus',{attrs:{"depositId":_vm.nowId,"paymentName":_vm.paymentName},on:{"return-page":_vm.returnPage}})],1):_vm._e()],1)}
var otherPayment_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/cash/otherPayment.vue
function otherPayment_injectStyle (context) {
  __webpack_require__(508)
}
/* script */


/* template */

/* template functional */
var otherPayment_vue_template_functional_ = false
/* styles */
var otherPayment_vue_styles_ = otherPayment_injectStyle
/* scopeId */
var otherPayment_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var otherPayment_vue_module_identifier_ = null

var otherPayment_Component = Object(component_normalizer["a" /* default */])(
  otherPayment,
  otherPayment_render,
  otherPayment_staticRenderFns,
  otherPayment_vue_template_functional_,
  otherPayment_vue_styles_,
  otherPayment_vue_scopeId_,
  otherPayment_vue_module_identifier_
)

/* harmony default export */ var cash_otherPayment = __webpack_exports__["default"] = (otherPayment_Component.exports);


/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);