(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/cash/manual/artificialTransfer.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var artificialTransfer = ({
  data() {
    // 判断非空正整数
    var checkNumber = function (rule, value, callback) {
      if (typeof value != 'number') {
        callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
      } else if (Math.sign(value) === -1) {
        callback(new Error(LANG['不能小于0'] || '不能小于0'));
      } else {
        callback();
      }
    }; // 判断可非空正整数


    var checkPositiveInteger = function (rule, value, callback) {
      if (value === '') {
        callback();
      } else {
        if (typeof value != 'number') {
          callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
        } else if (Math.sign(value) === -1) {
          callback(new Error(LANG['不能小于0'] || '不能小于0'));
        } else {
          callback();
        }
      }
    };

    return {
      LANG,
      formInline: {
        username: '',
        role: '1'
      },
      memberTypeList: [{
        "label": "会员",
        "role": "1"
      }, {
        "label": "代理",
        "role": "2"
      }],
      tableDate: [],
      // 权限控制
      // 是否禁止返水，优惠，取款
      permissions: {
        is_refuse_rebate: 0,
        is_refuse_sale: 0,
        is_refuse_withdraw: 0
      },
      //表格数据路径
      tableDateUrl: '',
      btnGroup: [],
      agent_btnGroup: [],
      //表单标题
      formTitle: "",
      walletTitle: "",
      bankNameList: [],
      discountNameList: [],
      //手动存款
      depositForm: {
        uid: 0,
        wid: 0,
        amount: "",
        play_code: "",
        discount: "",
        bank_id: "",
        bank_no: "",
        memo: "" // status: '1',
        // created_uid : 0

      },
      depositFormRules: {
        amount: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }],
        play_code: [{
          validator: checkPositiveInteger,
          trigger: "blur"
        }],
        discount: [{
          validator: checkPositiveInteger,
          trigger: "blur"
        }],
        bank_id: [{
          required: true,
          message: LANG['请选择存入银行'] || '请选择存入银行',
          trigger: 'change'
        }]
      },
      //手动提现
      cashForm: {
        uid: 0,
        wid: 0,
        amount: "",
        bank_id: "",
        bank_no: "",
        memo: "" // status: '1',
        // created_uid : 0

      },
      cashFormRules: {
        amount: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }],
        bank_id: [{
          required: true,
          message: LANG['请选择提出银行'] || '请选择提出银行',
          trigger: 'change'
        }]
      },
      //发放优惠
      grantDiscountForm: {
        uid: "",
        amount: "",
        condition: "",
        aid: "",
        memo: "" // status: '1'

      },
      grantDiscountFormRules: {
        amount: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }],
        condition: [{
          validator: checkPositiveInteger,
          trigger: "blur"
        }],
        aid: [{
          required: true,
          message: LANG['请选择优惠活动名称'] || '请选择优惠活动名称',
          trigger: 'change'
        }]
      },
      //手动减少余额
      artificialReduceForm: {
        uid: "",
        wid: "",
        amount: "",
        memo: ""
      },
      artificialReduceFormRules: {
        amount: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }]
      },
      //手动增加余额
      artificialAddForm: {
        uid: "",
        wid: "",
        amount: "",
        withdraw_bet: "",
        memo: ""
      },
      artificialAddFormRules: {
        amount: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }],
        withdraw_bet: [{
          validator: checkPositiveInteger,
          trigger: "blur"
        }]
      },
      //发放返水
      grantRebateForm: {
        uid: "",
        amount: "",
        condition: "",
        memo: ""
      },
      grantRebateFormRules: {
        amount: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }],
        condition: [{
          validator: checkPositiveInteger,
          trigger: "blur"
        }]
      },
      //子转主钱包
      childToMasterForm: {
        uid: "",
        wid: "",
        sid: "",
        amount: "",
        memo: "",
        type: "2",
        status: "1"
      },
      childToMasterFormRules: {
        amount: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }]
      },
      //主转子钱包
      masterToChildForm: {
        uid: "",
        wid: "",
        sid: "",
        amount: "",
        memo: "",
        type: "1",
        status: "1"
      },
      masterToChildFormRules: {
        amount: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }]
      },
      //主钱包ID;
      primaryId: null,
      //厅主银行列表
      bankList: [],
      // 用户银行卡列表
      userBankList: [],
      //用户资料
      userCont: {
        name: '',
        uid: ''
      },
      toggle: false,
      loading: false,
      // 真实姓名和备注
      note: {
        truename: '',
        comment: ''
      },
      // 表单提交按钮控制
      formControlBtn: {
        deposit_boolean: false,
        cash_boolean: false,
        discount_boolean: false,
        reduce_boolean: false,
        add_boolean: false,
        rebate_boolean: false,
        childtomaster_boolean: false,
        mastertochild_boolean: false
      }
    };
  },

  props: {
    manualData: Object
  },
  components: {},
  methods: {
    init() {
      //初始化请求地址
      this.tableDateUrl = URL.api + ROUTES.GET.cash.manual; //页面跳转传值初始化

      if (this.manualData.role || this.manualData.username) {
        this.formInline.role = this.manualData.role;
        this.formInline.username = this.manualData.username;
        this.doQuery(0);
      } else if (this.manualData.member_name && this.manualData.type) {
        this.formInline.role = this.manualData.type;
        this.formInline.username = this.manualData.member_name;
        this.doQuery(0);
      } //获取厅主银行卡列表


      let acountsUrl = URL.api + ROUTES.GET.cash.bank.acounts;
      this.$.autoAjax('get', acountsUrl, '', {
        ok: res => {
          let model = res.data;
          this.bankList = [];

          for (let i in model) {
            if (model[i].state === 'enabled') {
              this.bankList.push({
                "label": model[i].bank_name + ':' + model[i].card + ':' + model[i].accountname,
                "value": model[i].id,
                "card": model[i].card,
                "id": model[i].id
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
      let activeUrl = URL.api + '/active.short';
      this.$.autoAjax('get', activeUrl, '', {
        ok: res => {
          let model = res.data;
          this.discountNameList = [];

          for (let i in model) {
            // if (model[i].status) {
            this.discountNameList.push({
              "label": model[i].name,
              "value": model[i].id
            }); // }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
      this.btnGroup = [{
        "txt": "手动公司入款",
        "fn": "manualDeposit",
        "id": 1
      }, {
        "txt": "手动提款",
        "fn": "manualCash",
        "id": 2
      }, {
        "txt": "发放优惠",
        "fn": "grantDiscount",
        "id": 3
      }, {
        "txt": "手动减少余额",
        "fn": "artificialReduce",
        "id": 4
      }]; //                 this.formTitle = "手动存款"

      this.agent_btnGroup = [//{"txt": "手动增加余额", "fn": "artificialAdd", "id": 1},
      {
        "txt": "手动减少余额",
        "fn": "artificialReduce",
        "id": 2
      }];
    },

    // 选择不同体系将页面搜索结果清空
    clearResult() {
      this.tableDate = [];
    },

    /**
     * 执行查询
     *props refresh 0不强制 1强制
     */
    doQuery(refresh) {
      for (let i in this.formControlBtn) {
        this.formControlBtn[i] = false;
      }

      let formData = this.formInline;

      if (!formData.username || !formData.role) {
        this.$message.error(this.LANG['请选择体系和填写用户名'] || '请选择体系和填写用户名');
        return;
      }

      this.loading = true;
      this.toggle = false;
      this.tableDate = [];
      let url = "";
      this.formInline.username = STRINGTRIM(this.formInline.username);

      if (parseInt(formData.role) === 1) {
        // 用户
        url = this.tableDateUrl + '?role=' + parseInt(formData.role) + '&username=' + formData.username + '&refresh=' + refresh;
      } else {
        // 代理
        url = this.tableDateUrl + '?role=' + parseInt(formData.role) + '&username=' + formData.username;
      }

      this.$.autoAjax('get', url, '', {
        ok: res => {
          if (res.state == 0) {
            // 设置真实姓名和备注
            this.note.truename = res.data.truename || '';
            this.note.comment = res.data.comment || '';
            let primaryAccount = res.data.primary,
                tableDate = res.data.secondary,
                benefit = res.data.benefit[0];
            let totalArr = {
              "name": "总余额",
              "balance": res.data.total_balance
            };
            this.userCont.name = res.data.username;
            this.userCont.uid = res.data.uid;
            benefit.status = true;
            primaryAccount.push(benefit);
            tableDate.forEach(json => {
              primaryAccount.push(json);
            });
            this.tableDate = primaryAccount;
            this.tableDate.push(totalArr);

            for (let i = 0; i < this.tableDate.length; i++) {
              this.tableDate[i]["name"] == "主钱包" && (this.primaryId = this.tableDate[i]["sid"]); // 显示金额需要除余100

              this.tableDate[i]["balance"] = this.tableDate[i]["balance"] / 100;
            } // 处理权限问题


            if (parseInt(formData.role) === 1) {
              this.permissions['is_refuse_rebate'] = parseInt(res.data.is_refuse_rebate);
              this.permissions['is_refuse_sale'] = parseInt(res.data.is_refuse_sale);
              this.permissions['is_refuse_withdraw'] = parseInt(res.data.is_refuse_withdraw);
            } // 获取当前用户的银行卡列表


            this.$.autoAjax('get', URL.api + ROUTES.GET.user.newInfo + "?id=" + parseInt(this.userCont.uid) + "&type=bank", '', {
              ok: res2 => {
                // 清空原来上一个查询留下的数据
                this.userBankList = [];
                let model = res2.data;

                for (let i in model) {
                  // 判断该会员下的改银行卡是否启用
                  if (model[i].state === 'enabled') {
                    this.userBankList.push({
                      "label": model[i].bank_name + ':' + model[i].card + ':' + model[i].accountname,
                      "value": model[i].id,
                      "card": model[i].card,
                      "id": model[i].id
                    });
                  }
                }
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            });
          } else {
            this.$message.error(this.LANG[res.msg] || res.msg);
          }

          this.loading = false;
        },
        p: () => {},
        error: e => {
          this.loading = false;
        }
      });
    },

    // 表格按钮事件
    doHandle(fn, row) {
      // 对于普通会员需要进行权限判断
      if (parseInt(this.formInline.role) === 1) {
        if (fn === 'manualCash') {
          if (this.permissions['is_refuse_withdraw']) {
            this.$message({
              message: '禁止提款',
              type: 'error'
            });
            return;
          }
        } else if (fn === 'grantDiscount') {
          if (this.permissions['is_refuse_sale']) {
            this.$message({
              message: '禁止优惠',
              type: 'error'
            });
            return;
          }
        } else if (fn === 'grantRebate') {
          if (this.permissions['is_refuse_rebate']) {
            this.$message({
              message: '禁止返水',
              type: 'error'
            });
            return;
          }
        }
      }

      this.toggle = true;

      switch (fn) {
        // 手动存款
        case "manualDeposit":
          this.manualDeposit(row);
          break;
        // 手动提款

        case "manualCash":
          this.manualCash(row);
          break;
        // 发放优惠

        case "grantDiscount":
          this.grantDiscount(row);
          break;
        // 手动减少余额

        case "artificialReduce":
          this.artificialReduce(row);
          break;
        // 手动增加余额

        case "artificialAdd":
          this.artificialAdd(row);
          break;
        // 发放返水

        case "grantRebate":
          this.grantRebate(row);
          break;
        // 子转主钱包

        case "childToMaster":
          this.childToMaster(row);
          break;
        // 主转子钱包

        case "masterToChild":
          this.masterToChild(row);
          break;
      }
    },

    //卡号
    checkBank() {
      for (let i = 0; i < this.bankList.length; i++) {
        this.depositForm.bank_id == this.bankList[i]["value"] && (this.depositForm.bank_no = this.bankList[i]["card"]);
      }
    },

    userCheckBank() {
      for (let i = 0; i < this.userBankList.length; i++) {
        this.cashForm.bank_id == this.userBankList[i]["value"] && (this.cashForm.bank_no = this.userBankList[i]["card"]);
      }
    },

    //重置FORM
    resetForm(formName) {
      this.$refs[formName].resetFields();

      if (formName == 'grantDiscountForm') {
        this.grantDiscountForm.ckje = null;
        this.grantDiscountForm.yhje = null;
      }
    },

    //手动存款
    manualDeposit(row) {
      this.walletTitle = "主钱包";
      this.formTitle = "手动存款";
      this.depositForm.wid = parseInt(row.sid);
      this.depositForm.uid = parseInt(this.userCont.uid);
      this.depositForm.amount = "";
      this.depositForm.play_code = "";
      this.depositForm.discount = "";
      this.depositForm.bank_id = '';
      this.depositForm.bank_no = '';
      this.depositForm.memo = '';
    },

    //验证非空参数
    judgmentProp(obj) {
      let flag = true;

      for (let i = 0; i < obj.length; i++) {
        if (!obj[i]['name']) {
          this.$message({
            message: obj[i]['message'],
            type: 'warning'
          });
          flag = false;
          break;
        }
      }

      return flag;
    },

    //保存手动存款
    doAddDeposit() {
      // 设置手动存款参数
      let formData = {};
      formData.role = parseInt(this.formInline.role);

      for (let i in this.depositForm) {
        formData[i] = this.depositForm[i];
      } //需要验证的参数


      let formInline_prop = [{
        name: formData.amount,
        message: '请输入存入金额'
      }, {
        name: formData.bank_id,
        message: '请选择存入银行'
      }];

      if (!this.judgmentProp(formInline_prop)) {
        return;
      } //对输入数值参数进行转换
      //                formData.amount = formData.amount?formData.amount.toFixed(2) * 100:'';


      formData.play_code = formData.play_code;
      formData.discount = formData.discount;
      if (!this.djOperateMoney(formData.amount)) return false;
      this.formControlBtn.deposit_boolean = true;
      let acountsUrl = URL.api + ROUTES.POST.cash.deposit;
      this.$.autoAjax('post', acountsUrl, formData, {
        ok: res => {
          // debugger;
          if (res.state == 0 && res.data) {
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            this.doQuery(1);
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            });
          }

          this.formControlBtn.deposit_boolean = false;
        },
        p: () => {},
        error: e => {
          this.$message.error(e.responseJSON.msg);
          this.formControlBtn.deposit_boolean = false;
        }
      });
    },

    //手动提款
    manualCash(row) {
      this.walletTitle = "主钱包";
      this.formTitle = "手动提款";
      this.cashForm.wid = parseInt(row.sid);
      this.cashForm.uid = parseInt(this.userCont.uid);
      this.cashForm.amount = "";
      this.cashForm.bank_id = "";
      this.cashForm.bank_no = "";
      this.cashForm.memo = "";
    },

    //保存手动提款
    doCash() {
      // 设置手动提款参数
      let formData = {};
      formData.role = parseInt(this.formInline.role);

      for (let i in this.cashForm) {
        formData[i] = this.cashForm[i];
      } //需要验证的参数


      let formInline_prop = [{
        name: formData.bank_id,
        message: '请选择提出银行'
      }];

      if (!this.judgmentProp(formInline_prop)) {
        return;
      }

      formData.amount = this.cashForm.amount;
      if (!this.djOperateMoney(formData.amount)) return false;
      this.formControlBtn.cash_boolean = true;
      let acountsUrl = URL.api + ROUTES.POST.cash.withdrawal;
      (formData.name != '' || this.$message({
        message: '请查询体系后添加',
        type: 'warning'
      }) && false) && (formData.amount != null || this.$message({
        message: '请输入存入金额',
        type: 'warning'
      }) && false) && (formData.bank_id != '' || this.$message({
        message: '请选择存入银行',
        type: 'warning'
      }) && false) && this.$.autoAjax('post', acountsUrl, formData, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            this.doQuery(1);
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            });
          }

          this.formControlBtn.cash_boolean = false;
        },
        p: () => {},
        error: e => {
          this.$message.error(e.responseJSON.msg);
          this.formControlBtn.cash_boolean = false;
        }
      });
    },

    //发放优惠
    grantDiscount(row) {
      this.walletTitle = "主钱包";
      this.formTitle = "发放优惠", this.grantDiscountForm.uid = parseInt(this.userCont.uid);
      this.grantDiscountForm.amount = "";
      this.grantDiscountForm.condition = "";
      this.grantDiscountForm.aid = "";
      this.grantDiscountForm.memo = "";
    },

    //保存发放优惠
    doGrantDiscountForm() {
      let _this = this;

      let active_name = '';

      for (let i in _this.discountNameList) {
        if (_this.grantDiscountForm.aid === _this.discountNameList[i].value) {
          active_name = _this.discountNameList[i].label;
        }
      } // 设置手动发放优惠参数


      let formData = {};
      formData.role = parseInt(this.formInline.role);

      for (let i in this.grantDiscountForm) {
        formData[i] = this.grantDiscountForm[i];
      } //需要验证的参数


      let formInline_prop = [{
        name: formData.amount,
        message: '请输入优惠金额'
      }, {
        name: formData.aid,
        message: '请选择优惠活动'
      }];

      if (!this.judgmentProp(formInline_prop)) {
        return;
      }

      formData.amount = this.grantDiscountForm.amount;
      formData.condition = this.grantDiscountForm.condition;
      if (!this.djOperateMoney(formData.amount)) return false;
      this.formControlBtn.discount_boolean = true;
      let acountsUrl = URL.api + ROUTES.POST.cash.activity;
      formData.active_name = active_name;
      this.$.autoAjax('post', acountsUrl, formData, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            this.doQuery(1);
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            });
          }

          this.formControlBtn.discount_boolean = false;
        },
        p: () => {},
        error: e => {
          this.$message.error(e.responseJSON.msg);
          this.formControlBtn.discount_boolean = false;
        }
      });
    },

    //手动减少余额
    artificialReduce(row) {
      // this.artificialReduceForm.wid = row.sid;
      this.walletTitle = "主钱包";
      this.formTitle = "手动减少余额";
      this.artificialReduceForm.wid = parseInt(row.sid);
      this.artificialReduceForm.uid = parseInt(this.userCont.uid);
      this.artificialReduceForm.amount = "";
      this.artificialReduceForm.memo = "";
    },

    //保存手动减少余额
    doArtificialReduce() {
      // 设置手动减少余额参数
      let formData = {};
      formData.role = parseInt(this.formInline.role);

      for (let i in this.artificialReduceForm) {
        formData[i] = this.artificialReduceForm[i];
      }

      formData.amount = this.artificialReduceForm.amount;
      if (!this.djOperateMoney(formData.amount)) return false;
      this.formControlBtn.reduce_boolean = true;
      let acountsUrl = URL.api + ROUTES.POST.cash.decrease;
      this.$.autoAjax('post', acountsUrl, formData, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            this.doQuery(1);
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            });
          }

          this.formControlBtn.reduce_boolean = false;
        },
        p: () => {},
        error: e => {
          this.$message.error(e.responseJSON.msg);
          this.formControlBtn.reduce_boolean = false;
        }
      });
    },

    //手动增加余额
    artificialAdd(row) {
      this.walletTitle = "主钱包";
      this.formTitle = "手动增加余额";
      this.artificialAddForm.wid = parseInt(row.sid);
      this.artificialAddForm.uid = parseInt(this.userCont.uid);
      this.artificialAddForm.amount = '';
      this.artificialAddForm.withdraw_bet = '';
      this.artificialAddForm.memo = '';
    },

    //保存手动增加余额
    doArtificialAdd() {
      // 设置手动增加余额参数
      let formData = {};
      formData.role = parseInt(this.formInline.role);

      for (let i in this.artificialAddForm) {
        formData[i] = this.artificialAddForm[i];
      } //需要验证的参数
      // 手动增加金额代理没有打码量


      let formInline_prop = formData.role == 1 ? [{
        name: formData.amount,
        message: '请输入加金额'
      }] : [{
        name: formData.amount,
        message: '请输入加金额'
      }];

      if (!this.judgmentProp(formInline_prop)) {
        return;
      }

      formData.amount = this.artificialAddForm.amount;
      formData.withdraw_bet = this.artificialAddForm.withdraw_bet;
      if (!this.djOperateMoney(formData.amount)) return false;
      this.formControlBtn.add_boolean = true; // console.log(JSON.stringify(formData));

      let acountsUrl = URL.api + ROUTES.POST.cash.increase;
      this.$.autoAjax('post', acountsUrl, formData, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            this.doQuery(1);
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            });
          }

          this.formControlBtn.add_boolean = false;
        },
        p: () => {},
        error: e => {
          this.$message.error(e.responseJSON.msg);
          this.formControlBtn.add_boolean = false;
        }
      });
    },

    //发放返水
    grantRebate(row) {
      this.walletTitle = "主钱包";
      this.formTitle = "发放返水";
      this.grantRebateForm.uid = parseInt(this.userCont.uid);
      this.grantRebateForm.amount = '';
      this.grantRebateForm.condition = '';
      this.grantRebateForm.memo = '';
    },

    //保存发放返水
    doGrantRebate() {
      // 设置手动发放反水参数
      let formData = {};
      formData.role = parseInt(this.formInline.role);

      for (let i in this.grantRebateForm) {
        formData[i] = this.grantRebateForm[i];
      } //需要验证的参数


      let formInline_prop = [{
        name: formData.amount,
        message: '请输入返水金额'
      }];

      if (!this.judgmentProp(formInline_prop)) {
        return;
      }

      formData.amount = this.grantRebateForm.amount;
      formData.condition = this.grantRebateForm.condition;
      if (!this.djOperateMoney(formData.amount)) return false;
      this.formControlBtn.rebate_boolean = true;
      let acountsUrl = URL.api + ROUTES.POST.cash.rebate;
      this.$.autoAjax('post', acountsUrl, formData, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            this.doQuery(1);
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            });
          }

          this.formControlBtn.rebate_boolean = false;
        },
        p: () => {},
        error: e => {
          this.$message.error(e.responseJSON.msg);
          this.formControlBtn.rebate_boolean = false;
        }
      });
    },

    //子转主钱包
    childToMaster(row) {
      this.walletTitle = row.name;
      this.formTitle = "子转主钱包";
      this.childToMasterForm.uid = parseInt(this.userCont.uid);
      this.childToMasterForm.wid = parseInt(this.primaryId);
      this.childToMasterForm.sid = parseInt(row.sid);
      this.childToMasterForm.amount = '';
      this.childToMasterForm.memo = '';
      this.childToMasterForm.gameType = row.gameType;
    },

    //保存子转主钱包
    doChildToMaster() {
      // 设置子转主钱包参数
      let formData = {};
      formData.role = parseInt(this.formInline.role);

      for (let i in this.childToMasterForm) {
        formData[i] = this.childToMasterForm[i];
      } //需要验证的参数


      let formInline_prop = [{
        name: formData.amount,
        message: '请输入金额'
      }];

      if (!this.judgmentProp(formInline_prop)) {
        return;
      }

      formData.amount = this.childToMasterForm.amount;
      if (!this.djOperateMoney(formData.amount)) return false;
      this.formControlBtn.childtomaster_boolean = true;
      let acountsUrl = URL.api + ROUTES.POST.cash.childOrmaster;
      this.$.autoAjax('post', acountsUrl, formData, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            this.doQuery(1);
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            });
          }

          this.formControlBtn.childtomaster_boolean = false;
        },
        p: () => {},
        error: e => {
          this.$message.error(e.responseJSON.msg);
          this.formControlBtn.childtomaster_boolean = false;
        }
      });
    },

    //主转子钱包
    masterToChild(row) {
      this.walletTitle = row.name;
      this.formTitle = "主转子钱包";
      this.masterToChildForm.uid = parseInt(this.userCont.uid);
      this.masterToChildForm.wid = parseInt(this.primaryId);
      this.masterToChildForm.sid = parseInt(row.sid);
      this.masterToChildForm.amount = '';
      this.masterToChildForm.memo = '';
      this.masterToChildForm.gameType = row.gameType;
    },

    //保存主转子钱包
    doMasterToChild() {
      // 设置手动主转子钱包参数
      let formData = {};
      formData.role = parseInt(this.formInline.role);

      for (let i in this.masterToChildForm) {
        formData[i] = this.masterToChildForm[i];
      } //需要验证的参数


      let formInline_prop = [{
        name: formData.amount,
        message: '请输入金额'
      }];

      if (!this.judgmentProp(formInline_prop)) {
        return;
      }

      formData.amount = this.masterToChildForm.amount ? this.masterToChildForm.amount.toFixed(2) * 100 : '';
      if (!this.djOperateMoney(formData.amount)) return false;
      this.formControlBtn.mastertochild_boolean = true;
      let acountsUrl = URL.api + ROUTES.POST.cash.childOrmaster;
      this.$.autoAjax('post', acountsUrl, formData, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            this.doQuery(1);
          } else {
            this.$message({
              message: res.msg,
              type: 'error'
            });
          }

          this.formControlBtn.mastertochild_boolean = false;
        },
        p: () => {},
        error: e => {
          this.$message.error(e.responseJSON.msg);
          this.formControlBtn.mastertochild_boolean = false;
        }
      });
    },

    // 判断操作金额
    djOperateMoney(money) {
      if (parseInt(money) > 999999999) {
        this.$message({
          message: '操作金额不得大于9999999',
          type: 'error'
        });
        return false;
      } else {
        return true;
      }
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  activated() {
    setTimeout(() => {
      this.init();
    }, 500);
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-498c2c10","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/cash/manual/artificialTransfer.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page",attrs:{"id":"artificialTransfer"}},[_c('el-row',[_c('el-col',{staticClass:"search",staticStyle:{"z-index":"10"}},[_c('el-form',{staticClass:"demo-form-inline",attrs:{"model":_vm.formInline,"label-width":"75px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['体系'] || '体系',"prop":"role","rules":{ required: true, message: '请选择用户体系', trigger: 'change' }}},[_c('el-select',{attrs:{"placeholder":"请选择","size":"small"},on:{"change":_vm.clearResult},model:{value:(_vm.formInline.role),callback:function ($$v) {_vm.$set(_vm.formInline, "role", $$v)},expression:"formInline.role"}},_vm._l((_vm.memberTypeList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.role}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名',"prop":"username","rules":[{ required: true, message: '请输入用户名称', trigger: 'blur' },{ min: 2, max: 16, message: '长度在 3 到16个字符', trigger: 'blur' }]}},[_c('el-input',{attrs:{"placeholder":"请输入用户名","size":"small"},model:{value:(_vm.formInline.username),callback:function ($$v) {_vm.$set(_vm.formInline, "username", $$v)},expression:"formInline.username"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{staticStyle:{"margin-left":"-50px"},attrs:{"type":"primary","size":"small"},on:{"click":function($event){return _vm.doQuery(0)}}},[_vm._v(_vm._s(_vm.LANG['查询'] || '查询'))])],1)],1)],1),_vm._v(" "),_c('el-col',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[(_vm.tableDate.length > 0)?_c('el-col',{staticClass:"mt10",attrs:{"span":10}},[_c('el-button',{staticStyle:{"float":"right","margin-bottom":"10px"},attrs:{"type":"primary","size":"small"},on:{"click":function($event){return _vm.doQuery(1)}}},[_vm._v(_vm._s(_vm.LANG['刷新钱包'] || '刷新钱包'))]),_vm._v(" "),_c('div',{staticStyle:{"width":"80%","font-size":"12px"}},[_c('div',[_c('span',{staticStyle:{"color":"red"}},[_vm._v("真实姓名:")]),_c('span',[_vm._v(_vm._s(_vm.note.truename))])]),_vm._v(" "),(_vm.formInline.role == '1')?_c('div',[_c('span',{staticStyle:{"color":"red"}},[_vm._v("备注:")]),_c('span',[_vm._v(_vm._s(_vm.note.comment))])]):_vm._e()]),_vm._v(" "),_c('el-table',{attrs:{"data":_vm.tableDate,"border":""}},[_c('el-table-column',{attrs:{"prop":"name","label":_vm.LANG['钱包'] || '钱包',"width":"100px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"balance","label":_vm.LANG['钱包余额'] || '钱包余额',"width":"120px"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"操作"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [(scope.row['name'] == '主钱包')?_c('div',[_vm._l((_vm.btnGroup),function(item,index){return (_vm.formInline.role == 1)?_c('el-button',{key:index,staticStyle:{"margin-right":"10px","margin-left":"0px"},attrs:{"size":"small","type":"text"},domProps:{"textContent":_vm._s(_vm.LANG[item.txt] || item.txt)},on:{"click":function($event){return _vm.doHandle(item.fn,scope.row)}}}):_vm._e()}),_vm._v(" "),_vm._l((_vm.agent_btnGroup),function(item,index){return (_vm.formInline.role == 2)?_c('el-button',{key:index,staticStyle:{"margin-right":"10px","margin-left":"0px"},attrs:{"size":"small","type":"text"},domProps:{"textContent":_vm._s(_vm.LANG[item.txt] || item.txt)},on:{"click":function($event){return _vm.doHandle(item.fn,scope.row)}}}):_vm._e()})],2):_vm._e(),_vm._v(" "),(scope.row['name'] == '代理钱包')?_c('div',[_c('el-button',{attrs:{"size":"small","type":"text"},domProps:{"textContent":_vm._s(_vm.LANG['转入主钱包'] || '转入主钱包')},on:{"click":function($event){return _vm.doHandle('childToMaster',scope.row)}}})],1):_vm._e(),_vm._v(" "),(scope.row['name'] != '主钱包' && scope.row['name'] != '代理钱包' && scope.row['name'] != '总余额')?_c('div',[_c('el-button',{attrs:{"size":"small","type":"text"},domProps:{"textContent":_vm._s(_vm.LANG['子转主钱包'] || '子转主钱包')},on:{"click":function($event){return _vm.doHandle('childToMaster',scope.row)}}}),_vm._v(" "),_c('el-button',{attrs:{"size":"small","type":"text"},domProps:{"textContent":_vm._s(_vm.LANG['主转子钱包'] || '主转子钱包')},on:{"click":function($event){return _vm.doHandle('masterToChild',scope.row)}}}),_vm._v(" "),(!scope.row.status)?_c('el-tag',{staticClass:"el-tag-maintenance",attrs:{"type":"info"}},[_vm._v(_vm._s(_vm.LANG['维护中'] || '维护中'))]):_vm._e()],1):_vm._e()]}}],null,false,1101575130)})],1)],1):_vm._e(),_vm._v(" "),(_vm.tableDate.length > 0 && _vm.toggle)?_c('el-col',{staticClass:"editform",staticStyle:{"margin-top":"50px"},attrs:{"span":10,"offset":1}},[_c('h1',[_vm._v(_vm._s(_vm.LANG[_vm.formTitle] || _vm.formTitle)),_c('span',[_vm._v("("+_vm._s(_vm.LANG[_vm.walletTitle] || _vm.walletTitle)+")")])]),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.formTitle == '手动存款'),expression:"formTitle == '手动存款'"}],ref:"depositForm",staticClass:"mt10",attrs:{"model":_vm.depositForm,"rules":_vm.depositFormRules,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名',"prop":"name"}},[_c('el-input',{attrs:{"size":"small","disabled":true},model:{value:(_vm.userCont.name),callback:function ($$v) {_vm.$set(_vm.userCont, "name", $$v)},expression:"userCont.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['存入金额'] || '存入金额',"prop":"amount"}},[_c('el-input',{attrs:{"size":"small","type":"number","placeholder":"请填写存入金额"},model:{value:(_vm.depositForm.amount),callback:function ($$v) {_vm.$set(_vm.depositForm, "amount", _vm._n($$v))},expression:"depositForm.amount"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['优惠金额'] || '优惠金额',"prop":"discount"}},[_c('el-input',{attrs:{"size":"small","type":"number","placeholder":"请填写优惠金额"},model:{value:(_vm.depositForm.discount),callback:function ($$v) {_vm.$set(_vm.depositForm, "discount", _vm._n($$v))},expression:"depositForm.discount"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['优惠打码量'] || '优惠打码量',"prop":"play_code"}},[_c('el-input',{attrs:{"type":"number","size":"small"},model:{value:(_vm.depositForm.play_code),callback:function ($$v) {_vm.$set(_vm.depositForm, "play_code", _vm._n($$v))},expression:"depositForm.play_code"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['存入银行'] || '存入银行',"prop":"bank_id"}},[_c('el-select',{attrs:{"placeholder":_vm.LANG['请选择银行'] || '请选择银行',"size":"small"},on:{"change":_vm.checkBank},model:{value:(_vm.depositForm.bank_id),callback:function ($$v) {_vm.$set(_vm.depositForm, "bank_id", $$v)},expression:"depositForm.bank_id"}},_vm._l((_vm.bankList),function(item){return _c('el-option',{key:item.id,attrs:{"label":_vm.LANG[item.label] || item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"none"},attrs:{"label":_vm.LANG['银行卡号'] || '银行卡号',"prop":"bank_no"}},[_c('el-input',{attrs:{"disabled":true,"size":"small"},model:{value:(_vm.depositForm.bank_no),callback:function ($$v) {_vm.$set(_vm.depositForm, "bank_no", $$v)},expression:"depositForm.bank_no"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['备注'] || '备注',"prop":"remarks"}},[_c('el-input',{attrs:{"type":"textarea","rows":5,"size":"small"},model:{value:(_vm.depositForm.memo),callback:function ($$v) {_vm.$set(_vm.depositForm, "memo", $$v)},expression:"depositForm.memo"}})],1),_vm._v(" "),_c('div',{staticClass:"formbtn"},[_c('el-button',{attrs:{"type":"primary","plain":true,"size":"small","disabled":_vm.formControlBtn.deposit_boolean},on:{"click":_vm.doAddDeposit}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存')+"\n                        ")])],1)],1),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.formTitle == '手动提款'),expression:"formTitle == '手动提款'"}],ref:"cashForm",staticClass:"mt10",attrs:{"model":_vm.cashForm,"rules":_vm.cashFormRules,"label-width":"90px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名',"prop":"name"}},[_c('el-input',{attrs:{"size":"small","disabled":true},model:{value:(_vm.userCont.name),callback:function ($$v) {_vm.$set(_vm.userCont, "name", $$v)},expression:"userCont.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['提款金额'] || '提款金额',"prop":"amount"}},[_c('el-input',{attrs:{"size":"small","type":"number"},model:{value:(_vm.cashForm.amount),callback:function ($$v) {_vm.$set(_vm.cashForm, "amount", _vm._n($$v))},expression:"cashForm.amount"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['提出银行'] || '提出银行',"prop":"bank_id"}},[_c('el-select',{attrs:{"placeholder":_vm.LANG['请选择银行'] || '请选择银行',"size":"small"},on:{"change":_vm.userCheckBank},model:{value:(_vm.cashForm.bank_id),callback:function ($$v) {_vm.$set(_vm.cashForm, "bank_id", $$v)},expression:"cashForm.bank_id"}},_vm._l((_vm.userBankList),function(item){return _c('el-option',{key:item.id,attrs:{"label":_vm.LANG[item.label] || item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"none"},attrs:{"label":_vm.LANG['银行卡号'] || '银行卡号',"prop":"bank_no"}},[_c('el-input',{attrs:{"disabled":true,"size":"small"},model:{value:(_vm.cashForm.bank_no),callback:function ($$v) {_vm.$set(_vm.cashForm, "bank_no", $$v)},expression:"cashForm.bank_no"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['备注'] || '备注',"prop":"remarks"}},[_c('el-input',{attrs:{"type":"textarea","rows":5,"size":"small"},model:{value:(_vm.cashForm.memo),callback:function ($$v) {_vm.$set(_vm.cashForm, "memo", $$v)},expression:"cashForm.memo"}})],1),_vm._v(" "),_c('div',{staticClass:"formbtn"},[_c('el-button',{attrs:{"type":"primary","plain":true,"size":"small","disabled":_vm.formControlBtn.cash_boolean},on:{"click":_vm.doCash}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])],1)],1),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.formTitle == '发放优惠'),expression:"formTitle == '发放优惠'"}],ref:"grantDiscountForm",staticClass:"mt10",attrs:{"model":_vm.grantDiscountForm,"rules":_vm.grantDiscountFormRules,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名',"prop":"name"}},[_c('el-input',{attrs:{"disabled":true,"size":"small"},model:{value:(_vm.userCont.name),callback:function ($$v) {_vm.$set(_vm.userCont, "name", $$v)},expression:"userCont.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['优惠金额'] || '优惠金额',"prop":"amount"}},[_c('el-input',{attrs:{"size":"small","type":"number"},model:{value:(_vm.grantDiscountForm.amount),callback:function ($$v) {_vm.$set(_vm.grantDiscountForm, "amount", _vm._n($$v))},expression:"grantDiscountForm.amount"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['打码量'] || '打码量',"prop":"condition"}},[_c('el-input',{attrs:{"size":"small","type":"number"},model:{value:(_vm.grantDiscountForm.condition),callback:function ($$v) {_vm.$set(_vm.grantDiscountForm, "condition", _vm._n($$v))},expression:"grantDiscountForm.condition"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['优惠活动名称'] || '优惠活动名称',"prop":"aid"}},[_c('el-select',{attrs:{"placeholder":_vm.LANG['请选择优惠活动名称'] || '请选择优惠活动名称',"size":"small"},model:{value:(_vm.grantDiscountForm.aid),callback:function ($$v) {_vm.$set(_vm.grantDiscountForm, "aid", $$v)},expression:"grantDiscountForm.aid"}},_vm._l((_vm.discountNameList),function(item,index){return _c('el-option',{key:index,attrs:{"label":_vm.LANG[item.label] || item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['备注'] || '备注',"prop":"memo"}},[_c('el-input',{attrs:{"type":"textarea","rows":5,"size":"small"},model:{value:(_vm.grantDiscountForm.memo),callback:function ($$v) {_vm.$set(_vm.grantDiscountForm, "memo", $$v)},expression:"grantDiscountForm.memo"}})],1),_vm._v(" "),_c('div',{staticClass:"formbtn"},[_c('el-button',{attrs:{"type":"primary","size":"small","disabled":_vm.formControlBtn.discount_boolean},on:{"click":_vm.doGrantDiscountForm}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])],1)],1),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.formTitle == '手动减少余额'),expression:"formTitle == '手动减少余额'"}],ref:"artificialReduceForm",staticClass:"mt10",attrs:{"model":_vm.artificialReduceForm,"rules":_vm.artificialReduceFormRules,"label-width":"120px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名',"prop":"name"}},[_c('el-input',{attrs:{"disabled":true,"size":"small"},model:{value:(_vm.userCont.name),callback:function ($$v) {_vm.$set(_vm.userCont, "name", $$v)},expression:"userCont.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['减金额'] || '减金额',"prop":"amount"}},[_c('el-input',{attrs:{"size":"small","type":"number"},model:{value:(_vm.artificialReduceForm.amount),callback:function ($$v) {_vm.$set(_vm.artificialReduceForm, "amount", _vm._n($$v))},expression:"artificialReduceForm.amount"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['备注'] || '备注',"prop":"memo"}},[_c('el-input',{attrs:{"type":"textarea","rows":5,"size":"small"},model:{value:(_vm.artificialReduceForm.memo),callback:function ($$v) {_vm.$set(_vm.artificialReduceForm, "memo", $$v)},expression:"artificialReduceForm.memo"}})],1),_vm._v(" "),_c('div',{staticClass:"formbtn"},[_c('el-button',{attrs:{"type":"primary","size":"small","disabled":_vm.formControlBtn.reduce_boolean},on:{"click":_vm.doArtificialReduce}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])],1)],1),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.formTitle == '子转主钱包'),expression:"formTitle == '子转主钱包'"}],ref:"childToMasterForm",staticClass:"mt10",attrs:{"model":_vm.childToMasterForm,"rules":_vm.childToMasterFormRules,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名',"prop":"name"}},[_c('el-input',{attrs:{"disabled":true,"size":"small"},model:{value:(_vm.userCont.name),callback:function ($$v) {_vm.$set(_vm.userCont, "name", $$v)},expression:"userCont.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['金额'] || '金额',"prop":"amount"}},[_c('el-input',{attrs:{"size":"small","type":"number"},model:{value:(_vm.childToMasterForm.amount),callback:function ($$v) {_vm.$set(_vm.childToMasterForm, "amount", _vm._n($$v))},expression:"childToMasterForm.amount"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"state"}},[_c('el-radio',{attrs:{"label":"1"},model:{value:(_vm.childToMasterForm.status),callback:function ($$v) {_vm.$set(_vm.childToMasterForm, "status", $$v)},expression:"childToMasterForm.status"}},[_vm._v(_vm._s(_vm.LANG['实际加钱'] || '实际加钱'))])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['备注'] || '备注',"prop":"memo"}},[_c('el-input',{attrs:{"type":"textarea","rows":5,"size":"small"},model:{value:(_vm.childToMasterForm.memo),callback:function ($$v) {_vm.$set(_vm.childToMasterForm, "memo", $$v)},expression:"childToMasterForm.memo"}})],1),_vm._v(" "),_c('div',{staticClass:"formbtn"},[_c('el-button',{attrs:{"type":"primary","plain":true,"size":"small","disabled":_vm.formControlBtn.childtomaster_boolean},on:{"click":_vm.doChildToMaster}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])],1)],1),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.formTitle == '主转子钱包'),expression:"formTitle == '主转子钱包'"}],ref:"masterToChildForm",staticClass:"mt10",attrs:{"model":_vm.masterToChildForm,"rules":_vm.masterToChildFormRules,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名',"prop":"name"}},[_c('el-input',{attrs:{"disabled":true,"size":"small"},model:{value:(_vm.userCont.name),callback:function ($$v) {_vm.$set(_vm.userCont, "name", $$v)},expression:"userCont.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['金额'] || '金额',"prop":"amount"}},[_c('el-input',{attrs:{"size":"small","type":"number"},model:{value:(_vm.masterToChildForm.amount),callback:function ($$v) {_vm.$set(_vm.masterToChildForm, "amount", _vm._n($$v))},expression:"masterToChildForm.amount"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"state"}},[_c('el-radio',{attrs:{"label":"1"},model:{value:(_vm.masterToChildForm.status),callback:function ($$v) {_vm.$set(_vm.masterToChildForm, "status", $$v)},expression:"masterToChildForm.status"}},[_vm._v(_vm._s(_vm.LANG['实际加钱'] || '实际加钱'))])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['备注'] || '备注',"prop":"memo"}},[_c('el-input',{attrs:{"type":"textarea","rows":5,"size":"small"},model:{value:(_vm.masterToChildForm.memo),callback:function ($$v) {_vm.$set(_vm.masterToChildForm, "memo", $$v)},expression:"masterToChildForm.memo"}})],1),_vm._v(" "),_c('div',{staticClass:"formbtn"},[_c('el-button',{attrs:{"type":"primary","plain":true,"size":"small","disabled":_vm.formControlBtn.mastertochild_boolean},on:{"click":_vm.doMasterToChild}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])],1)],1)],1):_vm._e()],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/cash/manual/artificialTransfer.vue
function injectStyle (context) {
  __webpack_require__(515)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-498c2c10"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  artificialTransfer,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var manual_artificialTransfer = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/cash/manual/batchSave.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var batchSave = ({
  data() {
    // 判断非空正整数
    var checkNumber = function (rule, value, callback) {
      if (typeof value != 'number') {
        callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
      } else if (Math.sign(value) === -1) {
        callback(new Error(LANG['不能小于0'] || '不能小于0'));
      } else {
        callback();
      }
    }; // 判断可非空正整数


    var checkPositiveInteger = function (rule, value, callback) {
      if (value === '') {
        callback();
      } else {
        if (typeof value != 'number') {
          callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
        } else if (Math.sign(value) === -1) {
          callback(new Error(LANG['不能小于0'] || '不能小于0'));
        } else {
          callback();
        }
      }
    }; // 非空验证


    var notNullString = function (rule, value, callback) {
      if (value === '') {
        callback(new Error(LANG['请输入纯备注'] || '请输入纯备注'));
      } else {
        callback();
      }
    };

    return {
      LANG,
      //手动增加余额
      manualAddMoney: {
        status: '1',
        name: "",
        levels: [],
        amount: '',
        statement: '',
        memo: ''
      },
      manualAddMoneyRules: {
        amount: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }],
        statement: [{
          validator: checkPositiveInteger,
          trigger: "blur"
        }],
        memo: [{
          validator: notNullString,
          required: true,
          trigger: "blur"
        }]
      },
      //手动减少余额
      manualReduceMoney: {
        status: '1',
        name: '',
        amount: '',
        memo: '',
        levels: []
      },
      manualReduceMoneyRules: {
        amount: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }],
        memo: [{
          validator: notNullString,
          required: true,
          trigger: "blur"
        }]
      },
      //手动返水
      backwater: {
        status: '1',
        name: '',
        amount: '',
        statement: '',
        memo: '',
        levels: []
      },
      backwaterRules: {
        amount: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }],
        statement: [{
          validator: checkPositiveInteger,
          trigger: "blur"
        }],
        memo: [{
          validator: notNullString,
          required: true,
          trigger: "blur"
        }]
      },
      //手动发放优惠
      reduceFavorable: {
        name: '',
        amount: '',
        statement: '',
        aid: '',
        memo: '',
        status: '1',
        levels: []
      },
      reduceFavorableRules: {
        amount: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }],
        aid: [{
          required: true,
          message: LANG['请选择优惠活动名称'] || '请选择优惠活动名称',
          trigger: 'change'
        }],
        statement: [{
          validator: checkPositiveInteger,
          trigger: "blur"
        }],
        memo: [{
          validator: notNullString,
          required: true,
          trigger: "blur"
        }]
      },
      formTitle: '',
      discountNameList: [],
      reduceFavorableList: [],
      //文件上传
      fileList3: [],
      // 会员层级
      levellist: [],
      loading: false
    };
  },

  methods: {
    init() {
      this.formTitle = "0"; //获取优惠活动名称
      // let activeUrl = URL.api + ROUTES.GET.actives.short;

      let activeUrl = URL.api + '/active.short';
      this.$.autoAjax('get', activeUrl, '', {
        ok: res => {
          let model = res.data;
          this.reduceFavorableList = [];

          for (let i in model) {
            this.reduceFavorableList.push({
              "label": model[i].name,
              "value": model[i].id
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // 获取会员层级

      this.$.autoAjax('get', URL.api + ROUTES.GET.user.level.list, '', {
        ok: res => {
          let model = res.data;

          for (let i in model) {
            this.levellist.push({
              "label": parseInt(model[i].id),
              "value": model[i].name
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //手动增加余额
    doManualAddMoney() {
      this.formTitle = "0";
      this.manualAddMoney = {
        status: '1',
        name: '',
        levels: [],
        amount: '',
        statement: '',
        memo: ''
      };
    },

    //手动减少余额
    doManualReduceMoney() {
      this.formTitle = "1";
      this.manualReduceMoney = {
        status: '1',
        name: '',
        amount: '',
        memo: '',
        levels: []
      };
    },

    //手动返水
    doBackwater() {
      this.formTitle = "2";
      this.backwater = {
        status: '1',
        name: '',
        amount: '',
        statement: '',
        memo: '',
        levels: []
      };
    },

    //手动发放优惠
    doReduceFavorable() {
      this.formTitle = "3";
      this.reduceFavorable = {
        name: '',
        amount: '',
        statement: '',
        aid: '',
        memo: '',
        status: '1',
        levels: []
      };
    },

    // 这个函数用来过滤数组内的空字符串
    filter_null(arr) {
      let arr_list = [];

      for (let i of arr) {
        if (i != '') {
          arr_list.push(i);
        }
      }

      return arr_list;
    },

    //保存
    doCash() {
      let url = '',
          query = {};

      if (this.formTitle == '0') {
        // 手动增加余额
        url = URL.api + ROUTES.POST.cash.allincrease;

        if (this.manualAddMoney.status == '1') {
          query.users = this.manualAddMoney.name ? this.filter_null(this.manualAddMoney.name.split(',')) : [];
        } else {
          query.levels = this.manualAddMoney.levels;
        }

        query.role = 1;
        query.amount = parseFloat(this.manualAddMoney.amount);
        query.withdraw_bet = parseFloat(this.manualAddMoney.statement);
        query.memo = this.manualAddMoney.memo;
      } else if (this.formTitle == '1') {
        // 手动减少余额
        url = URL.api + ROUTES.POST.cash.alldecrease;

        if (this.manualReduceMoney.status == '1') {
          query.users = this.manualReduceMoney.name ? this.filter_null(this.manualReduceMoney.name.split(',')) : [];
        } else {
          query.levels = this.manualReduceMoney.levels;
        }

        query.role = 1;
        query.amount = parseFloat(this.manualReduceMoney.amount);
        query.memo = this.manualReduceMoney.memo;
      } else if (this.formTitle == '2') {
        // 手动反水
        url = URL.api + ROUTES.POST.cash.allrebate;

        if (this.backwater.status == '1') {
          query.users = this.backwater.name ? this.filter_null(this.backwater.name.split(',')) : [];
        } else {
          query.levels = this.backwater.levels;
        }

        query.role = 1;
        query.amount = parseFloat(this.backwater.amount);
        query.withdraw_bet = parseFloat(this.backwater.statement);
        query.memo = this.backwater.memo;
      } else {
        // 手动发放优惠
        url = URL.api + ROUTES.POST.cash.allactivity;

        if (this.reduceFavorable.status == '1') {
          query.users = this.reduceFavorable.name ? this.filter_null(this.reduceFavorable.name.split(',')) : [];
        } else {
          query.levels = this.reduceFavorable.levels;
        }

        query.role = 1;
        query.amount = parseFloat(this.reduceFavorable.amount);
        query.withdraw_bet = parseFloat(this.reduceFavorable.statement);
        query.aid = this.reduceFavorable.aid;
        query.memo = this.reduceFavorable.memo; // 优先判断是否选中活动

        if (!query.aid) {
          this.$message.error(LANG['请选择优惠活动！'] || '请选择优惠活动！');
          return;
        } // 后台记录参数需要加上活动名称，匹配当前活动id的活动名称


        const enough_action = action => action.value == query.aid;

        let action_list = this.reduceFavorableList.filter(enough_action);
        query.action_name = action_list[0]['label'];
      } // 判断是否缺少必要字段


      if (query.users && !query.users.length || query.levels && !query.levels.length) {
        this.$message.error(LANG['用户名或层级不能为空！'] || '用户名和层级不能为空！');
        return;
      }

      if (!query.amount) {
        this.$message.error(LANG['金额不能为空！'] || '金额不能为空！');
        return;
      }

      if (!query.memo) {
        this.$message.error(LANG['备注不能为空！'] || '备注不能为空！');
        return;
      }

      if (query.amount > 999999999) {
        this.$message.error(LANG['操作金额不得大于9999999'] || '操作金额不得大于9999999');
        return;
      }

      this.loading = true;
      this.$.autoAjax('post', url, query, {
        ok: res => {
          res.data && res.state == 0 ? this.$message.success(LANG['操作成功！'] || '操作成功！') : this.$message.error(LANG[res.message] || res.message);
          this.loading = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //重置
    doRest() {},

    //保存
    doCashAdd() {
      this.$message.success(LANG['恭喜您，手动增加余额成功！'] || '恭喜您，手动增加余额成功！');
    },

    //重置
    doRestAdd() {},

    handleChange(file, fileList) {
      this.fileList3 = fileList.slice(-3);
    }

  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-57a555c6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/cash/manual/batchSave.vue
var batchSave_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w100",attrs:{"id":"batchSave"}},[_c('el-row',{attrs:{"gutter":40}},[_c('el-col',{attrs:{"span":4}},[_c('div',{staticClass:"mainLeft"},[_c('el-button',{staticClass:"tabBtn",attrs:{"plain":true,"type":"success"},on:{"click":_vm.doManualAddMoney}},[_vm._v("\n                    "+_vm._s(_vm.LANG['手动增加余额'] || '手动增加余额')+"\n                ")]),_vm._v(" "),_c('el-button',{staticClass:"tabBtn",attrs:{"plain":true,"type":"success"},on:{"click":_vm.doManualReduceMoney}},[_vm._v("\n                    "+_vm._s(_vm.LANG['手动减少余额'] || '手动减少余额')+"\n                ")]),_vm._v(" "),_c('el-button',{staticClass:"tabBtn",attrs:{"plain":true,"type":"success"},on:{"click":_vm.doBackwater}},[_vm._v("手动返水")]),_vm._v(" "),_c('el-button',{staticClass:"tabBtn",attrs:{"plain":true,"type":"success"},on:{"click":_vm.doReduceFavorable}},[_vm._v("\n                    "+_vm._s(_vm.LANG['手动发放优惠'] || '手动发放优惠')+"\n                ")])],1)]),_vm._v(" "),_c('el-col',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"span":10,"element-loading-text":"拼命加载中"}},[_c('div',{staticClass:"mainRight"},[_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.formTitle == 0),expression:"formTitle == 0"}],ref:"manualAddMoney",staticClass:"mt10",attrs:{"model":_vm.manualAddMoney,"rules":_vm.manualAddMoneyRules,"label-width":"90px"}},[(_vm.formTitle == 0)?_c('h3',[_vm._v(_vm._s(_vm.LANG['手动增加余额'] || '手动增加余额'))]):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['状态'] || '状态',"prop":"state"}},[_c('el-radio',{attrs:{"label":"1"},model:{value:(_vm.manualAddMoney.status),callback:function ($$v) {_vm.$set(_vm.manualAddMoney, "status", $$v)},expression:"manualAddMoney.status"}},[_vm._v(_vm._s(_vm.LANG['按用户名'] || '按用户名'))]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"},model:{value:(_vm.manualAddMoney.status),callback:function ($$v) {_vm.$set(_vm.manualAddMoney, "status", $$v)},expression:"manualAddMoney.status"}},[_vm._v(_vm._s(_vm.LANG['按会员层级'] || '按会员层级'))])],1),_vm._v(" "),(_vm.manualAddMoney.status == 1)?_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名',"prop":"name"}},[_c('el-input',{attrs:{"size":"small","placeholder":_vm.LANG['提示:多个用户名之间请用英文逗号隔开'] || '提示:多个用户名之间请用英文逗号隔开'},model:{value:(_vm.manualAddMoney.name),callback:function ($$v) {_vm.$set(_vm.manualAddMoney, "name", $$v)},expression:"manualAddMoney.name"}})],1):_vm._e(),_vm._v(" "),(_vm.manualAddMoney.status == 2)?_c('el-form-item',{attrs:{"label":"VIP等级"}},[_c('el-checkbox-group',{model:{value:(_vm.manualAddMoney.levels),callback:function ($$v) {_vm.$set(_vm.manualAddMoney, "levels", $$v)},expression:"manualAddMoney.levels"}},_vm._l((_vm.levellist),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.label,"name":"type"}},[_vm._v(_vm._s(item.value)+"\n                            ")])}),1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['金额'] || '金额',"prop":"amount"}},[_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.manualAddMoney.amount),callback:function ($$v) {_vm.$set(_vm.manualAddMoney, "amount", _vm._n($$v))},expression:"manualAddMoney.amount"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['打码量'] || '打码量',"prop":"statement"}},[_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.manualAddMoney.statement),callback:function ($$v) {_vm.$set(_vm.manualAddMoney, "statement", _vm._n($$v))},expression:"manualAddMoney.statement"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['备注'] || '备注',"prop":"memo"}},[_c('el-input',{attrs:{"type":"textarea","rows":5,"size":"small"},model:{value:(_vm.manualAddMoney.memo),callback:function ($$v) {_vm.$set(_vm.manualAddMoney, "memo", $$v)},expression:"manualAddMoney.memo"}})],1),_vm._v(" "),_c('div',{staticClass:"formbtn tCent"},[_c('el-button',{attrs:{"type":"primary","plain":true,"size":"small"},on:{"click":_vm.doCash}},[_vm._v("\n                            "+_vm._s(_vm.LANG['保存'] || '保存')+"\n                        ")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","plain":true,"size":"small"},on:{"click":_vm.doRest}},[_vm._v("\n                            "+_vm._s(_vm.LANG['重置'] || '重置')+"\n                        ")])],1)],1),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.formTitle == 1),expression:"formTitle == 1"}],ref:"manualAddMoney",staticClass:"mt10",attrs:{"model":_vm.manualReduceMoney,"rules":_vm.manualReduceMoneyRules,"label-width":"90px"}},[(_vm.formTitle == 1)?_c('h3',[_vm._v(_vm._s(_vm.LANG['手动减少余额'] || '手动减少余额'))]):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['状态'] || '状态',"prop":"state"}},[_c('el-radio',{attrs:{"label":"1"},model:{value:(_vm.manualReduceMoney.status),callback:function ($$v) {_vm.$set(_vm.manualReduceMoney, "status", $$v)},expression:"manualReduceMoney.status"}},[_vm._v(_vm._s(_vm.LANG['按用户'] || '按用户'))]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"},model:{value:(_vm.manualReduceMoney.status),callback:function ($$v) {_vm.$set(_vm.manualReduceMoney, "status", $$v)},expression:"manualReduceMoney.status"}},[_vm._v(_vm._s(_vm.LANG['按会员层级'] || '按会员层级')+"\n                        ")])],1),_vm._v(" "),(_vm.manualReduceMoney.status == 1)?_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名',"prop":"name"}},[_c('el-input',{attrs:{"size":"small","placeholder":_vm.LANG['提示:多个用户名之间请用英文逗号隔开'] || '提示:多个用户名之间请用英文逗号隔开'},model:{value:(_vm.manualReduceMoney.name),callback:function ($$v) {_vm.$set(_vm.manualReduceMoney, "name", $$v)},expression:"manualReduceMoney.name"}})],1):_vm._e(),_vm._v(" "),(_vm.manualReduceMoney.status == 2)?_c('el-form-item',{attrs:{"label":"VIP等级"}},[_c('el-checkbox-group',{model:{value:(_vm.manualReduceMoney.levels),callback:function ($$v) {_vm.$set(_vm.manualReduceMoney, "levels", $$v)},expression:"manualReduceMoney.levels"}},_vm._l((_vm.levellist),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.label,"name":"type"}},[_vm._v(_vm._s(item.value)+"\n                            ")])}),1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['金额'] || '金额',"prop":"amount"}},[_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.manualReduceMoney.amount),callback:function ($$v) {_vm.$set(_vm.manualReduceMoney, "amount", _vm._n($$v))},expression:"manualReduceMoney.amount"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['备注'] || '备注',"prop":"memo"}},[_c('el-input',{attrs:{"type":"textarea","rows":5,"size":"small"},model:{value:(_vm.manualReduceMoney.memo),callback:function ($$v) {_vm.$set(_vm.manualReduceMoney, "memo", $$v)},expression:"manualReduceMoney.memo"}})],1),_vm._v(" "),_c('div',{staticClass:"formbtn tCent"},[_c('el-button',{attrs:{"type":"primary","plain":true,"size":"small"},on:{"click":_vm.doCash}},[_vm._v("\n                            "+_vm._s(_vm.LANG['保存'] || '保存')+"\n                        ")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","plain":true,"size":"small"},on:{"click":_vm.doRest}},[_vm._v("\n                            "+_vm._s(_vm.LANG['重置'] || '重置')+"\n                        ")])],1)],1),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.formTitle == 2),expression:"formTitle == 2"}],ref:"manualAddMoney",staticClass:"mt10",attrs:{"model":_vm.backwater,"rules":_vm.backwaterRules,"label-width":"90px"}},[(_vm.formTitle == 2)?_c('h3',[_vm._v(_vm._s(_vm.LANG['手动返水'] || '手动返水'))]):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['状态'] || '状态',"prop":"state"}},[_c('el-radio',{attrs:{"label":"1"},model:{value:(_vm.backwater.status),callback:function ($$v) {_vm.$set(_vm.backwater, "status", $$v)},expression:"backwater.status"}},[_vm._v(_vm._s(_vm.LANG['按用户'] || '按用户'))]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"},model:{value:(_vm.backwater.status),callback:function ($$v) {_vm.$set(_vm.backwater, "status", $$v)},expression:"backwater.status"}},[_vm._v(_vm._s(_vm.LANG['按会员层级'] || '按会员层级'))])],1),_vm._v(" "),(_vm.backwater.status == 1)?_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名',"prop":"name"}},[_c('el-input',{attrs:{"size":"small","placeholder":_vm.LANG['提示:多个用户名之间请用英文逗号隔开'] || '提示:多个用户名之间请用英文逗号隔开'},model:{value:(_vm.backwater.name),callback:function ($$v) {_vm.$set(_vm.backwater, "name", $$v)},expression:"backwater.name"}})],1):_vm._e(),_vm._v(" "),(_vm.backwater.status == 2)?_c('el-form-item',{attrs:{"label":"VIP等级"}},[_c('el-checkbox-group',{model:{value:(_vm.backwater.levels),callback:function ($$v) {_vm.$set(_vm.backwater, "levels", $$v)},expression:"backwater.levels"}},_vm._l((_vm.levellist),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.label,"name":"type"}},[_vm._v(_vm._s(item.value)+"\n                            ")])}),1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['金额'] || '金额',"prop":"amount"}},[_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.backwater.amount),callback:function ($$v) {_vm.$set(_vm.backwater, "amount", _vm._n($$v))},expression:"backwater.amount"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['打码量'] || '打码量',"prop":"statement"}},[_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.backwater.statement),callback:function ($$v) {_vm.$set(_vm.backwater, "statement", _vm._n($$v))},expression:"backwater.statement"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['备注'] || '备注',"prop":"memo"}},[_c('el-input',{attrs:{"type":"textarea","rows":5,"size":"small"},model:{value:(_vm.backwater.memo),callback:function ($$v) {_vm.$set(_vm.backwater, "memo", $$v)},expression:"backwater.memo"}})],1),_vm._v(" "),_c('div',{staticClass:"formbtn tCent"},[_c('el-button',{attrs:{"type":"primary","plain":true,"size":"small"},on:{"click":_vm.doCash}},[_vm._v("\n                            "+_vm._s(_vm.LANG['保存'] || '保存')+"\n                        ")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","plain":true,"size":"small"},on:{"click":_vm.doRest}},[_vm._v("\n                            "+_vm._s(_vm.LANG['重置'] || '重置')+"\n                        ")])],1)],1),_vm._v(" "),_c('el-form',{directives:[{name:"show",rawName:"v-show",value:(_vm.formTitle == 3),expression:"formTitle == 3"}],ref:"grantDiscountForm",staticClass:"mt10",attrs:{"model":_vm.reduceFavorable,"rules":_vm.reduceFavorableRules,"label-width":"106px"}},[(_vm.formTitle == 3)?_c('h3',[_vm._v(_vm._s(_vm.LANG['手动发放优惠'] || '手动发放优惠'))]):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['状态'] || '状态',"prop":"state"}},[_c('el-radio',{attrs:{"label":"1"},model:{value:(_vm.reduceFavorable.status),callback:function ($$v) {_vm.$set(_vm.reduceFavorable, "status", $$v)},expression:"reduceFavorable.status"}},[_vm._v(_vm._s(_vm.LANG['按用户'] || '按用户'))]),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"},model:{value:(_vm.reduceFavorable.status),callback:function ($$v) {_vm.$set(_vm.reduceFavorable, "status", $$v)},expression:"reduceFavorable.status"}},[_vm._v(_vm._s(_vm.LANG['按会员层级'] || '按会员层级'))])],1),_vm._v(" "),(_vm.reduceFavorable.status == 1)?_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名',"prop":"name"}},[_c('el-input',{attrs:{"size":"small","placeholder":_vm.LANG['提示:多个用户名之间请用英文逗号隔开'] || '提示:多个用户名之间请用英文逗号隔开'},model:{value:(_vm.reduceFavorable.name),callback:function ($$v) {_vm.$set(_vm.reduceFavorable, "name", $$v)},expression:"reduceFavorable.name"}})],1):_vm._e(),_vm._v(" "),(_vm.reduceFavorable.status == 2)?_c('el-form-item',{attrs:{"label":"VIP等级"}},[_c('el-checkbox-group',{model:{value:(_vm.reduceFavorable.levels),callback:function ($$v) {_vm.$set(_vm.reduceFavorable, "levels", $$v)},expression:"reduceFavorable.levels"}},_vm._l((_vm.levellist),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.label,"name":"type"}},[_vm._v(_vm._s(item.value)+"\n                            ")])}),1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['优惠金额'] || '优惠金额',"prop":"amount"}},[_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.reduceFavorable.amount),callback:function ($$v) {_vm.$set(_vm.reduceFavorable, "amount", _vm._n($$v))},expression:"reduceFavorable.amount"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['打码量'] || '打码量',"prop":"statement"}},[_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.reduceFavorable.statement),callback:function ($$v) {_vm.$set(_vm.reduceFavorable, "statement", _vm._n($$v))},expression:"reduceFavorable.statement"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['优惠活动名称'] || '优惠活动名称',"prop":"aid"}},[_c('el-select',{attrs:{"placeholder":_vm.LANG['请选择优惠活动名称'] || '请选择优惠活动名称',"size":"small"},model:{value:(_vm.reduceFavorable.aid),callback:function ($$v) {_vm.$set(_vm.reduceFavorable, "aid", $$v)},expression:"reduceFavorable.aid"}},_vm._l((_vm.reduceFavorableList),function(item,index){return _c('el-option',{key:index,attrs:{"label":_vm.LANG[item.label] || item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['备注'] || '备注',"prop":"memo"}},[_c('el-input',{attrs:{"type":"textarea","rows":5,"size":"small"},model:{value:(_vm.reduceFavorable.memo),callback:function ($$v) {_vm.$set(_vm.reduceFavorable, "memo", $$v)},expression:"reduceFavorable.memo"}})],1),_vm._v(" "),_c('div',{staticClass:"formbtn tCent"},[_c('el-button',{attrs:{"type":"primary","plain":true,"size":"small"},on:{"click":_vm.doCash}},[_vm._v("\n                            "+_vm._s(_vm.LANG['保存'] || '保存')+"\n                        ")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","plain":true,"size":"small"},on:{"click":_vm.doRest}},[_vm._v("\n                            "+_vm._s(_vm.LANG['重置'] || '重置')+"\n                        ")])],1)],1)],1)])],1)],1)}
var batchSave_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/cash/manual/batchSave.vue
function batchSave_injectStyle (context) {
  __webpack_require__(516)
}
/* script */


/* template */

/* template functional */
var batchSave_vue_template_functional_ = false
/* styles */
var batchSave_vue_styles_ = batchSave_injectStyle
/* scopeId */
var batchSave_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var batchSave_vue_module_identifier_ = null

var batchSave_Component = Object(component_normalizer["a" /* default */])(
  batchSave,
  batchSave_render,
  batchSave_staticRenderFns,
  batchSave_vue_template_functional_,
  batchSave_vue_styles_,
  batchSave_vue_scopeId_,
  batchSave_vue_module_identifier_
)

/* harmony default export */ var manual_batchSave = (batchSave_Component.exports);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/cash/manual/history.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var manual_history = ({
  data() {
    return {
      LANG,
      updated: false,
      //表格列数据
      columnsUrl: "",
      //表格数据
      tableUrl: "",
      //搜索相关
      searchConfig: [{
        "prop": "user_type",
        "value": "",
        "type": "select",
        "label": "体系",
        "list": [{
          "label": "用户",
          "value": "1"
        }, {
          "label": "代理",
          "value": "2"
        }]
      }, {
        "prop": "username",
        "value": "",
        "type": "text",
        "label": "用户名"
      }, {
        "type": "dateGroup",
        "label": "交易时间",
        "prop": [{
          "prop": "time_begin",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "time_end",
          "value": "",
          "label": "结束时间"
        }]
      }, // {"type":"dateTimeGroup","label":"操作时间","prop":[{"prop":"time_begin","value":"","label":"开始时间"},{"prop":"time_end","value":"","label":"结束时间"}]},
      {
        "prop": "type",
        "value": "",
        "label": "交易类型",
        "type": "select",
        "list": []
      }, {
        "prop": "admin_user",
        "value": "",
        "label": "操作者",
        "type": "text"
      }],
      type: "search",
      labelWidth: "90px",
      formVisible: {
        state: false
      },
      //是否编辑数据
      isEdit: {
        state: false
      },
      baseUrl: "",
      allData: "",
      // 备注弹窗
      dialogVisibleMemo: false,
      // 备注内容
      memoText: '',
      nowId: -1,
      // 修改打码量
      dialog_show_edit: false,
      show_edit_title: '',
      withdraw_bet_coupon: 0,
      withdraw_bet_principal: 0,
      from_edit_money: {},
      popKey: '',
      updateKeys: '',
      isShow: sessionStorage.deposit_offlines_export == 'true' ? true : false,
      exportForm: {}
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      this.updateKeys = '';
      this.columnsUrl = "static/json/manual/columns.json";
      this.baseUrl = URL.api + '/cash/manual.records';

      if (this.$route.query && this.$route.query.day_begin) {
        let query = {};

        for (let k in this.$route.query) {
          if (k != 'history') {
            query[k] = this.$route.query[k];
          }
        }

        setTimeout(() => {
          this.updateKeys = 'time_begin,' + (query.day_begin || '') + ',time_end,' + (query.day_end || '') + ',user_type,' + (query.type || '') + ',username,' + (query.member_name || '');
          this.tableUrl = this.baseUrl + this.addSearch(query);
          this.exportForm = query;
        }, 500);
      } else {
        this.tableUrl = URL.api + '/cash/manual.records';
      } // 获取存提交易类型


      this.$.autoAjax('get', URL.api + ROUTES.GET.cash.record.type, '', {
        ok: res => {
          if (res.data && res.state == 0) {
            let model = res.data || [];

            for (let i in model) {
              this.searchConfig[3].list.push({
                "label": model[i].name,
                "value": parseInt(model[i].id, 10)
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //表格内按钮事件
    doHandle(row) {
      this.formType = "";
      this.updated = false;
      this.nowId = row.row.id;

      switch (row.fn) {
        case "openUserInformation":
          this.openUserInformation(row.row);
          break;

        case "doWriteRemarks":
          // 编辑
          this.doWriteRemarks(row.row);
          break;

        case "updateNormality":
          // 修改常态打码量
          this.updateNormality(row.row);
          break;

        case "updateDiscount":
          // 修改优惠打码量
          this.updateDiscount(row.row);
          break;
      }
    },

    // 修改常态打码量
    updateNormality(row) {
      if (row.isfixBet) {
        this.show_edit_title = '修改用户：' + row.username + '的常态打码量';
        this.dialog_show_edit = true;
        this.withdraw_bet_principal = row.withdraw_bet_principal;
        this.withdraw_bet_coupon = '';
      } else {
        this.$message.error(LANG['该记录已出款或免稽核额度被清零，不可修改'] || '该记录已出款或免稽核额度被清零，不可修改');
      }
    },

    // 修改优惠打码量
    updateDiscount(row) {
      if (row.isfixBet) {
        this.show_edit_title = '修改用户：' + row.username + '的优惠打码量';
        this.dialog_show_edit = true;
        this.withdraw_bet_coupon = row.withdraw_bet_coupon;
        this.withdraw_bet_principal = '';
      } else {
        this.$message.error(LANG['该记录已出款或免稽核额度被清零，不可修改'] || '该记录已出款或免稽核额度被清零，不可修改');
      }
    },

    // 修改打码量
    saveDiscount() {
      let key = this.withdraw_bet_coupon === '' ? 'withdraw_bet_principal' : 'withdraw_bet_coupon';

      let _this = this;

      this.updated = false;
      let params = {};
      params[key] = this.from_edit_money[key];
      this.dialog_show_edit = false;
      let msg = key === 'withdraw_bet_coupon' ? '优惠打码量' : '常态打码量';
      this.$.autoAjax('patch', URL.api + '/cash/manual.comment/' + parseInt(this.nowId), params, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.updated = true;
            this.$message.success(msg + (LANG['打码量修改成功'] || '打码量修改成功'));
          } else if (res.state) {
            this.$message.error(msg + (LANG['打码量修改失败'] || '打码量修改失败') + res.data.msg);
          } else {
            this.$message.error(msg + (LANG['打码量修改失败'] || '打码量修改失败'));
          }

          this.$refs.from_edit_money.resetFields();
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    doWriteRemarks(row) {
      this.dialogVisibleMemo = true;
      this.memoText = row.memo;
    },

    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
      this.exportForm = obj.item;
    },

    //重置查询
    resetForm() {
      if (this.$route.query && this.$route.query.day_begin) {
        let query = {};

        for (let k in this.$route.query) {
          if (k != 'history') {
            query[k] = this.$route.query[k];
          }
        }
      } else {
        this.tableUrl = this.baseUrl;
      }
    },

    openUserInformation(row) {
      // 根据user_type的类型来判断跳转的是会员或代理
      row.user_type == '1' ? this.$router.push({
        path: "/memberManagement",
        query: {
          name: row.username
        }
      }) : this.$router.push({
        path: "/agentAccount",
        query: {
          agent_name: row.username
        }
      });
    },

    // 小记和总记
    getTableData(obj) {
      this.allData = obj.allData.attributes;
    },

    validatorNumber(rule, value, callback) {
      //检测值是不是为空
      if (!value) {
        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
        return;
      }

      if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value.toString().replace(/^\s+|\s+$/, ''))) {
        if (isNaN(value) || !!value.replace(/^\s+|\s+$/, '') == false) {
          callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
        } else {
          callback(new Error(LANG['小数点后不超过两位'] || '小数点后不超过两位'));
        }
      } else {
        if (value < 0) {
          callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
        } else if (value > 9999999) {
          callback(new Error(LANG['输入金额不能大于9999999'] || '输入金额不能大于9999999'));
        } else {
          callback();
        }
      }
    },

    // 导出数据
    exportData() {
      // 当前查询条件 signature = 1
      let form = this.$children[0].$refs.editForm.model;
      this.exportForm.signature = 1;

      if (form.time_begin && form.time_end) {
        this.$.autoAjax('get', this.baseUrl, this.exportForm, {
          ok: res => {
            if (res.state === 0 && res.data) {
              window.location.href = res.data.url;
            }
          },
          error: e => {
            this.$message.error(e.responseText.msg);
          }
        });
      } else {
        this.$message.error(LANG['必需选择时间才能导出'] || '必需选择时间才能导出');
        return;
      }
    },

    //修改备注内容
    editMemoSubmit() {
      let _this = this;

      this.updated = false;
      let params = {
        memo: this.memoText
      };
      this.dialogVisibleMemo = false;
      this.$.autoAjax('patch', URL.api + '/cash/manual.comment/' + parseInt(this.nowId), params, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.updated = true;
            this.$message.success(LANG['备注写入成功'] || '备注写入成功');
          } else {
            this.$message.error(LANG['备注写入失败'] || '备注写入失败');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    }

  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-42c522cc","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/cash/manual/history.vue
var history_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"showAdd":false,"updateKeys":_vm.updateKeys,"initDate":true},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}}),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"pageSet":true,"tableIndex":false,"autoshowRefresh":true,"showExport":_vm.isShow,"automation":true,"updated":_vm.updated,"getData":true,"isCreated":true},on:{"export-data":_vm.exportData,"get-table-data":_vm.getTableData,"do-handle":_vm.doHandle}},[(_vm.allData)?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"4"}},[_c('div',{staticClass:"cell tCent"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.allData.page_money_sum))])]),_vm._v(" "),_c('td',{attrs:{"colspan":"9"}})]):_vm._e(),_vm._v(" "),(_vm.allData)?_c('tr',{attrs:{"slot":"other"},slot:"other"},[_c('td',{attrs:{"colspan":"4"}},[_c('div',{staticClass:"cell tCent"},[_vm._v(_vm._s(_vm.LANG[' 总计'] || '总计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.allData.total_money_sum))])]),_vm._v(" "),_c('td',{attrs:{"colspan":"9"}})]):_vm._e()])],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":"当前用户的备注信息:","visible":_vm.dialogVisibleMemo,"size":"tiny"},on:{"update:visible":function($event){_vm.dialogVisibleMemo=$event}}},[_c('el-form',[_c('el-form-item',[( _vm.memoText ==''|| _vm.memoText == undefined)?_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":"暂无备注信息"},model:{value:(_vm.memoText),callback:function ($$v) {_vm.memoText=$$v},expression:"memoText"}}):_c('el-input',{attrs:{"type":"textarea","rows":2,"placeholder":_vm.memoText},model:{value:(_vm.memoText),callback:function ($$v) {_vm.memoText=$$v},expression:"memoText"}})],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisibleMemo = false}}},[_vm._v("关 闭")]),_vm._v(" "),_c('el-button',{staticClass:"formSave",attrs:{"type":"primary"},on:{"click":_vm.editMemoSubmit}},[_vm._v("修 改")])],1)],1)],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":_vm.show_edit_title,"visible":_vm.dialog_show_edit,"width":"'120px'","size":"tiny","center":""},on:{"update:visible":function($event){_vm.dialog_show_edit=$event}}},[(parseInt(_vm.withdraw_bet_principal) >= 0)?_c('span',{staticClass:"tCent w100"},[_vm._v(_vm._s(_vm.LANG['原常态打码量']||'原常态打码量')+" ："+_vm._s(_vm.withdraw_bet_principal))]):_vm._e(),_vm._v(" "),(parseInt(_vm.withdraw_bet_coupon) >= 0)?_c('span',{staticClass:"tCent w100"},[_vm._v(_vm._s(_vm.LANG['原优惠打码量']||'原优惠打码量')+" ："+_vm._s(_vm.withdraw_bet_coupon))]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"mt10"},[_c('el-form',{ref:"from_edit_money",attrs:{"model":_vm.from_edit_money,"label-width":"100px"}},[(parseInt(_vm.withdraw_bet_principal) >= 0)?_c('el-form-item',{attrs:{"label":_vm.LANG['现常态打码量']||'现常态打码量'+':',"rules":[{ validator:_vm.validatorNumber,trigger:'blur'}],"prop":"withdraw_bet_principal"}},[_c('el-input',{staticClass:"intW",model:{value:(_vm.from_edit_money.withdraw_bet_principal),callback:function ($$v) {_vm.$set(_vm.from_edit_money, "withdraw_bet_principal", $$v)},expression:"from_edit_money.withdraw_bet_principal"}})],1):_vm._e(),_vm._v(" "),(parseInt(_vm.withdraw_bet_coupon) >= 0)?_c('el-form-item',{attrs:{"label":_vm.LANG['现优惠打码量']||'现优惠打码量'+':',"rules":[{ validator:_vm.validatorNumber,trigger:'blur'}],"prop":"withdraw_bet_coupon"}},[_c('el-input',{staticClass:"intW",model:{value:(_vm.from_edit_money.withdraw_bet_coupon),callback:function ($$v) {_vm.$set(_vm.from_edit_money, "withdraw_bet_coupon", $$v)},expression:"from_edit_money.withdraw_bet_coupon"}})],1):_vm._e()],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialog_show_edit = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveDiscount}},[_vm._v("修 改")])],1)])],1)],1)}
var history_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/cash/manual/history.vue
function history_injectStyle (context) {
  __webpack_require__(517)
}
/* script */


/* template */

/* template functional */
var history_vue_template_functional_ = false
/* styles */
var history_vue_styles_ = history_injectStyle
/* scopeId */
var history_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var history_vue_module_identifier_ = null

var history_Component = Object(component_normalizer["a" /* default */])(
  manual_history,
  history_render,
  history_staticRenderFns,
  history_vue_template_functional_,
  history_vue_styles_,
  history_vue_scopeId_,
  history_vue_module_identifier_
)

/* harmony default export */ var cash_manual_history = (history_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/cash/manual/manual_new.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var manual_new = ({
  data() {
    return {
      LANG,
      activeName: 'second',
      //点击的是哪个选项Nav
      itemIndex: '1',
      seachData: {}
    };
  },

  components: {
    artificialtransfer: manual_artificialTransfer,
    batchSave: manual_batchSave,
    history: cash_manual_history
  },
  methods: {
    init() {
      if (this.$route.query) {
        let query = this.$route.query;

        for (let k in query) {
          this.seachData[k] = query[k];
        }

        if (this.$route.query.history) {
          this.handleClick('3');
        }
      }
    },

    handleClick(i) {
      this.itemIndex = i;
    }

  },
  computed: {},

  mounted() {//            $('.tabsNavItem:first').addClass('active');
    //            $('.tabsNavItem').click(function(){
    //                $(this).addClass('active').siblings('.tabsNavItem').removeClass('active');
    //            })
  },

  created() {
    this.init();
  },

  activated() {
    //            this.handleClick('1');
    //            $('.tabsNavItem:first').addClass('active').siblings('.tabsNavItem').removeClass('active');
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-598bb3c6","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/cash/manual/manual_new.vue
var manual_new_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"manual_new"}},[_c('el-row',{staticClass:"tabsNav"},[_c('el-col',{staticClass:"tabsNavItem tCent",class:{active: _vm.itemIndex == '1'},attrs:{"span":8}},[_c('div',{staticClass:"grid-content",on:{"click":function($event){return _vm.handleClick('1')}}},[_vm._v(_vm._s(_vm.LANG['人工存提'] || '人工存提'))])]),_vm._v(" "),_c('el-col',{staticClass:"tabsNavItem tCent",class:{active: _vm.itemIndex == '2'},attrs:{"span":8}},[_c('div',{staticClass:"grid-content",on:{"click":function($event){return _vm.handleClick('2')}}},[_vm._v(_vm._s(_vm.LANG['批量存提'] || '批量存提'))])]),_vm._v(" "),_c('el-col',{staticClass:"tabsNavItem tCent",class:{active: _vm.itemIndex == '3'},attrs:{"span":8}},[_c('div',{staticClass:"grid-content",on:{"click":function($event){return _vm.handleClick('3')}}},[_vm._v(_vm._s(_vm.LANG['人工存提记录'] || '人工存提记录'))])])],1),_vm._v(" "),_c('el-col',{staticClass:"mt20"},[(_vm.itemIndex == '1')?_c('artificialtransfer',{attrs:{"manualData":_vm.seachData}}):_vm._e(),_vm._v(" "),(_vm.itemIndex == '2')?_c('batchSave'):_vm._e(),_vm._v(" "),(_vm.itemIndex == '3')?_c('history'):_vm._e()],1)],1)}
var manual_new_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/cash/manual/manual_new.vue
function manual_new_injectStyle (context) {
  __webpack_require__(514)
}
/* script */


/* template */

/* template functional */
var manual_new_vue_template_functional_ = false
/* styles */
var manual_new_vue_styles_ = manual_new_injectStyle
/* scopeId */
var manual_new_vue_scopeId_ = "data-v-598bb3c6"
/* moduleIdentifier (server only) */
var manual_new_vue_module_identifier_ = null

var manual_new_Component = Object(component_normalizer["a" /* default */])(
  manual_new,
  manual_new_render,
  manual_new_staticRenderFns,
  manual_new_vue_template_functional_,
  manual_new_vue_styles_,
  manual_new_vue_scopeId_,
  manual_new_vue_module_identifier_
)

/* harmony default export */ var manual_manual_new = __webpack_exports__["default"] = (manual_new_Component.exports);


/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);