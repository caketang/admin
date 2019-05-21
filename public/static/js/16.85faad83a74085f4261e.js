(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/UEditor.vue + 2 modules
var UEditor = __webpack_require__(213);

// EXTERNAL MODULE: ./src/components/upload.vue + 2 modules
var upload = __webpack_require__(209);

// EXTERNAL MODULE: ./src/components/dateTimePicker.vue + 2 modules
var dateTimePicker = __webpack_require__(208);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// EXTERNAL MODULE: ./src/components/changeAll.vue + 2 modules
var changeAll = __webpack_require__(234);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/activeMode_9.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var activeMode_9 = ({
  data() {
    const sortValidate = (rule, value, callback) => {
      if (/^(0|[1-9]\d*)$/.test(value.toString())) {
        callback();
      } else {
        return callback(new Error('请填写非负整数'));
      }
    }; //URL验证


    let validatorUrl = (rule, value, callback) => {
      if (value && !/^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/.test(value)) {
        callback(new Error(LANG['请输入合法的网址(格式为http://www.***.com或者https://www.***.com)'] || '请输入合法的网址(格式为http://www.***.com或者https://www.***.com)'));
      } else {
        callback();
      }
    };

    const validatorTime = (rule, value, callback) => {
      const beginTime = new Date(this.modeData.begin_time).getTime();
      const endTime = new Date(this.modeData.end_time).getTime();

      if (beginTime > endTime) {
        callback(new Error(LANG['开始时间不能大于结束时间'] || '开始时间不能大于结束时间'));
      } else {
        callback();
      }
    };

    return {
      LANG,
      pcshow: false,
      mbshow: false,
      linkShow: false,
      placename: '',
      modeDataCopy: {},
      arrList: [],
      pcshow: false,
      //登出确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: ""
      },
      payList: [{
        cn_name: "支付宝扫码",
        en_name: "alipay"
      }, {
        cn_name: "微信扫码",
        en_name: "wechat"
      }, {
        cn_name: "QQ钱包",
        en_name: "qqpay"
      }, {
        cn_name: "网银支付",
        en_name: "cyberbank"
      }, {
        cn_name: "京东支付",
        en_name: "jdpay"
      }, {
        cn_name: "快捷支付",
        en_name: "unionpay"
      }, {
        cn_name: "百度支付",
        en_name: "baidupay"
      }, {
        cn_name: "财付通",
        en_name: "tenpay"
      }, {
        cn_name: "点卡支付",
        en_name: "kapay"
      }, {
        cn_name: "云闪付",
        en_name: "quickpay"
      }],
      modeData: {
        extra: {
          visible: '0'
        },
        name: "",
        //string #活动名称
        type_id: "",
        //int ：活动类型ID
        title: "",
        //string #活动标题
        begin_time: '',
        //datetime #开始时间
        end_time: '',
        //datetime #结束时间
        issue_mode: "auto",
        //string #发放方式
        day: "",
        //连续签到天数
        money: "",
        //优惠金额
        get: "",
        //领取限制方式
        getMath: "",
        //领取限制次数
        vipType: [],
        //会员列表
        daySign: "",
        //发放时间
        withdrawRequireVal: '',
        //
        statusWdl: "",
        //提款要求选择
        withdrawalsBs: "",
        //提款倍数
        withdrawalsGd: "",
        //提款要求固定输入金额
        status: 'enabled',
        //string #状态 enabled 启用,disabled 停用
        description: "",
        //string #描述
        cover: "",
        //string #封面
        sort: "",
        //排序
        language_id: "",
        //int #语言ID
        language_name: "",
        //string #语言名称
        content: "",
        //string #内容
        content2: "",
        link: '',
        open_mode: "",
        checkedDefut: [],
        fileList2: [],
        //文件上传
        template_id: '',
        checkDeposit: {
          companyCheck: [],
          onlineCheck: {
            "alipay": [],
            "wechat": [],
            "qqpay": [],
            "cyberbank": [],
            "unionpay": [],
            "jdpay": [],
            "baidupay": [],
            "tenpay": [],
            "kapay": [],
            "quickpay": []
          }
        },
        companyCheck: [],
        onlineCheck: {
          "alipay": [],
          "wechat": [],
          "qqpay": [],
          "cyberbank": [],
          "unionpay": [],
          "jdpay": [],
          "baidupay": [],
          "tenpay": [],
          "kapay": [],
          "quickpay": []
        },
        company: {
          // 公司入款优惠
          first: [// 首存
          {
            money: '',
            prize: '',
            upper_limit: '',
            type: '1'
          }],
          again: [// 再存
          {
            money: '',
            prize: '',
            upper_limit: '',
            type: '1'
          }]
        },
        online: {
          // 线上入款优惠
          "alipay": {
            first: [// 首存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }],
            again: [// 再存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }]
          },
          "wechat": {
            first: [// 首存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }],
            again: [// 再存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }]
          },
          "qqpay": {
            first: [// 首存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }],
            again: [// 再存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }]
          },
          "cyberbank": {
            first: [// 首存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }],
            again: [// 再存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }]
          },
          "jdpay": {
            first: [// 首存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }],
            again: [// 再存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }]
          },
          "unionpay": {
            first: [// 首存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }],
            again: [// 再存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }]
          },
          "baidupay": {
            first: [// 首存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }],
            again: [// 再存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }]
          },
          "tenpay": {
            first: [// 首存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }],
            again: [// 再存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }]
          },
          "kapay": {
            first: [// 首存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }],
            again: [// 再存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }]
          },
          "quickpay": {
            first: [// 首存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }],
            again: [// 再存
            {
              money: '',
              prize: '',
              upper_limit: '',
              type: '1'
            }]
          }
        }
      },
      //下拉优惠类型列表
      type_idList: [],
      //获取有效会员等级
      vipList: [],
      //默认选中项
      isIndeterminate: true,
      checkList: [],
      //获取页面传过来的值
      seachData: {},
      languageList: [],
      // 上传地址
      uploadUrl: URL.rpi,
      // 上传字段名
      keys: "images",
      // 是否初始化
      imgInit: false,
      companyFirstType: '',
      companyAgainType: '',
      onlineFirstType: '',
      onlineAgainType: '',
      rules: {
        name: [{
          required: true,
          message: '请填写活动名称',
          trigger: 'blur'
        }],
        type_id: [{
          required: true,
          type: 'array',
          message: '请选择优惠类型',
          trigger: 'change'
        }],
        language_id: [{
          required: true,
          message: '请选择语言类型',
          trigger: 'change'
        }],
        description: [{
          required: true,
          validator: validatorTime,
          trigger: 'blur'
        }],
        begin_time: [{
          required: true,
          validator: validatorTime,
          trigger: 'change'
        }],
        end_time: [{
          required: true,
          message: '请输入结束时间',
          trigger: 'change'
        }],
        'rule.issueTime': [{
          required: true,
          message: '请填写发放时间',
          trigger: 'blur'
        }],
        'rule.issueCycle': [{
          required: true,
          message: '请选择发放周期',
          trigger: 'change'
        }],
        issue_mode: [{
          required: true,
          message: '请选择发放奖金方式',
          trigger: 'change'
        }],
        open_mode: [{
          required: true,
          message: '请选择打开方式',
          trigger: 'change'
        }],
        'rule.withdrawRequire': [{
          required: true,
          message: '请选择提款要求',
          trigger: 'change'
        }],
        'extra.visible': [{
          required: true,
          message: '请选择可否放弃选择选项',
          trigger: 'change'
        }],
        checkedDefut: [{
          type: 'array',
          required: true,
          message: '请至少选择一个会员等级',
          trigger: 'change'
        }],
        title: [{
          required: true,
          message: '请输入活动标题',
          trigger: 'change'
        }],
        cover: [{
          required: true,
          message: '请上传图片',
          trigger: 'change'
        }],
        link: [{
          required: true,
          validator: validatorUrl,
          trigger: 'change'
        }],
        companyCheck: [{
          type: 'array',
          required: true,
          message: '请至少选择一种公司入款优惠',
          trigger: 'change'
        }],
        onlineCheck: [{
          type: 'array',
          required: true,
          message: '请至少选择一种线上入款优惠',
          trigger: 'change'
        }],
        sort: [{
          validator: sortValidate,
          trigger: 'blur',
          required: true
        }],
        content: [{
          required: true,
          message: '请输入优惠规则',
          required: true
        }],
        content2: [{
          required: true,
          message: '请输入优惠规则',
          required: true
        }]
      },
      // 类型全选
      sReset: false,
      checkedval: {
        checked: []
      }
    };
  },

  components: {
    markdownEdit: UEditor["a" /* default */],
    upload: upload["a" /* default */],
    dateTimePicker: dateTimePicker["a" /* default */],
    confirm: components_confirm["a" /* default */],
    checkGroup: changeAll["a" /* default */]
  },
  methods: {
    init() {
      //获取路由传参
      let _this = this;

      this.modeData.begin_time = window.sessionStorage.sysTime + ' 00:00:00'; //datetime #开始时间

      this.modeData.end_time = '2118-01-01 23:59:59'; //datetime #结束时间

      let query = this.$route.query;

      for (let k in query) {
        this.seachData[k] = query[k];
      } //初始化优惠活动名称


      this.placename = this.seachData.label; //获取优惠类型列表

      this.$.autoAjax('get', URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];
            this.type_idList = [];

            for (let k in model) {
              this.type_idList.push({
                "label": model[k].name,
                "value": model[k].id.toString()
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); //                this.$http.get(URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", URLCONFIG).then((res) => {
      //                    if (res.data.state == 0 && res.data.data) {
      //                        let model = res.data.data || [];
      //                        this.type_idList = [];
      //                        for (let k in model) {
      //                            this.type_idList.push({
      //                                "label": model[k].name,
      //                                "value": model[k].id.toString()
      //                            });
      //                        }
      //                    }
      //                });
      //所有层级接口

      function getAllLeverl() {
        return new Promise((resolve, reject) => {
          let alllevel = URL.api + `/user/levels`;

          _this.$.autoAjax('get', alllevel, '', {
            ok: res => {
              let model = res.data;

              for (let i in model) {
                _this.vipList.push({
                  "label": "VIP" + model[i].level,
                  "value": model[i].level.toString(),
                  "disable": true
                });
              }

              resolve();
            },
            p: () => {},
            error: e => {
              reject(err);
            }
          });
        });
      }

      getAllLeverl().then(() => {
        let levelUrl = URL.api + `/active/template/unique?template_id=${_this.seachData.template_id}&&begin_time=${_this.modeData.begin_time}&&end_time=${_this.modeData.end_time}`;
        this.$.autoAjax('get', levelUrl, '', {
          ok: res => {
            let model = res.data;

            for (let i in model) {
              _this.vipList.forEach(item => {
                if (item.value === model[i].id.toString()) {
                  item.disable = false;
                }
              });
            }

            if (model.length == 0 && _this.seachData.type == 'add') {
              _this.confirmConfig.state = true;
              _this.confirmConfig.msg = '所有会员层级都使用了此优惠活动，请到层级关联的优惠活动去修改';
              _this.confirmConfig.fn = 'doError';
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });

        if (this.seachData.type == 'edit') {
          this.checkedval.checked.splice(0, this.checkedval.checked.length);
          let editUrl = URL.api + `/active/template.fix/${this.seachData.id}`;

          let _this = this;

          this.$.autoAjax('get', editUrl, '', {
            ok: res => {
              if (res.state == 0 && res.data) {
                let temp = res.data.types || [],
                    typelist = [];
                temp.forEach((item, key) => {
                  typelist.push(item.id);
                  this.checkedval.checked.push(item.id.toString());
                });
                _this.modeData.begin_time = res.data.begin_time;
                _this.modeData.content = res.data.content;
                _this.modeData.content2 = res.data.content2;
                _this.modeData.open_mode = res.data.open_mode;
                _this.modeData.link = res.data.link;
                _this.modeData.cover = res.data.cover;
                _this.modeData.description = res.data.description;
                _this.modeData.end_time = res.data.end_time;
                _this.modeData.language_id = res.data.language_id;
                _this.modeData.sort = res.data.sort;
                _this.modeData.language_name = res.data.language_name;
                _this.modeData.name = res.data.name;
                _this.modeData.status = res.data.status;
                _this.modeData.withdrawRequireVal = res.data.rule.withdraw_require_val;
                _this.modeData.title = res.data.title;
                _this.modeData.type_id = typelist;
                _this.modeData.issue_mode = res.data.rule.issue_mode;
                _this.modeData.extra.visible = res.data.rule.extra.visible; //活动图片

                _this.arrList.push(res.data.cover);

                const rules = res.data.rule.rule;
                rules.company.again.forEach((item, index) => {
                  if (item.type == 1) {
                    if (item.prize) {
                      item.fixedBonus = item.prize / 100;
                    } else {
                      item.fixedBonus = '';
                    }
                  } else {
                    item.percentageOfDeposits = item.prize;
                    item.upper_limit = item.upper_limit ? item.upper_limit / 100 : '';
                  }

                  item.money = item.money ? item.money / 100 : '';

                  if (item.money && _this.modeData.companyCheck.indexOf('again') === -1) {
                    _this.modeData.companyCheck.push('again');

                    _this.modeData.checkDeposit.companyCheck.push('again');
                  }
                });
                rules.company.first.forEach((item, index) => {
                  if (item.type == 1) {
                    if (item.prize) {
                      item.fixedBonus = item.prize / 100;
                    } else {
                      item.fixedBonus = '';
                    }
                  } else {
                    item.percentageOfDeposits = item.prize;
                    item.upper_limit = item.upper_limit ? item.upper_limit / 100 : '';
                  }

                  item.money = item.money ? item.money / 100 : '';

                  if (item.money && _this.modeData.companyCheck.indexOf('first') === -1) {
                    _this.modeData.companyCheck.push('first');

                    _this.modeData.checkDeposit.companyCheck.push('first');
                  }
                });
                _this.modeData.company = rules.company;

                for (let key in rules.online) {
                  rules.online[key].again.forEach((item, index) => {
                    if (item.type == 1) {
                      if (item.prize) {
                        item.fixedBonus = item.prize / 100;
                      } else {
                        item.fixedBonus = '';
                      }
                    } else {
                      item.percentageOfDeposits = item.prize;
                      item.upper_limit = item.upper_limit ? item.upper_limit / 100 : '';
                    }

                    item.money = item.money ? item.money / 100 : '';

                    if (item.money && _this.modeData.onlineCheck[key].indexOf('again') === -1) {
                      _this.modeData.onlineCheck[key].push('again');

                      _this.modeData.checkDeposit.onlineCheck[key].push('again');
                    }
                  });
                  rules.online[key].first.forEach((item, index) => {
                    if (item.type == 1) {
                      if (item.prize) {
                        item.fixedBonus = item.prize / 100;
                      } else {
                        item.fixedBonus = '';
                      }
                    } else {
                      item.percentageOfDeposits = item.prize;
                      item.upper_limit = item.upper_limit ? item.upper_limit / 100 : '';
                    }

                    item.money = item.money ? item.money / 100 : '';

                    if (item.money && _this.modeData.onlineCheck[key].indexOf('first') === -1) {
                      _this.modeData.onlineCheck[key].push('first');

                      _this.modeData.checkDeposit.onlineCheck[key].push('first');
                    }
                  });
                }

                _this.modeData.online = rules.online; //处理会员层级数据

                let model = res.data.rule.member_level;

                for (let i in model) {
                  _this.vipList.forEach(item => {
                    if (item.value === model[i].id.toString()) {
                      item.disable = false;
                    }
                  });

                  _this.modeData.checkedDefut.push(model[i].name);
                }
              }
            },
            p: () => {},
            error: e => {
              reject(err);
            }
          });
        }
      });
      let langeUrl = URL.api + ROUTES.GET.langeages;
      this.$.autoAjax('get', langeUrl, '', {
        ok: res => {
          let model = res.data;
          this.languageList = [];

          for (let i in model) {
            this.languageList.push({
              "label": model[i].name,
              "value": model[i].id.toString()
            });
          }

          this.modeData.language_id = '1';
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(langeUrl, URLCONFIG).then((res) => {
      //     let model = res.data.data;
      //     this.languageList = [];
      //     for (let i in model) {
      //         this.languageList.push({
      //             "label": model[i].name,
      //             "value": model[i].id.toString()
      //         })
      //     }
      //     this.modeData.language_id = '1';
      // })
    },

    // 优惠类型全选
    changeOption(obj) {
      this.modeData.type_id = obj.item;
    },

    // 全选
    handleCheckAllChange(event) {
      let checkList = [];

      for (let v in this.vipList) {
        checkList[v] = this.vipList[v].label;
      }

      this.modeData.checkedDefut = event.target.checked ? checkList : [];
      this.isIndeterminate = false;
    },

    //单选
    handleCheckedDefutChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.vipList.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.vipList.length;
    },

    //提交表单
    doSubmit(type) {
      let _this = this;

      this.$refs.form.validate(valid => {
        if (valid) {
          //拿到选中的语言
          let lan = this.languageList.find(item => {
            return item.value = this.modeData.language_id;
          }); //规则数据过滤

          let company = JSON.parse(JSON.stringify(this.modeData.company));
          let online = JSON.parse(JSON.stringify(this.modeData.online));

          function companyFirstSelected() {
            if (this.modeData.companyCheck.indexOf('first') !== -1) {
              company.first.forEach((item, index) => {
                item.money = item.money * 100;

                if (item.type == 1) {
                  item.prize = item.fixedBonus * 100;
                  delete item.upper_limit;
                  delete item.fixedBonus;
                  delete item.percentageOfDeposits;
                } else {
                  item.prize = item.percentageOfDeposits;
                  item.upper_limit = item.upper_limit * 100;
                  delete item.fixedBonus;
                  delete item.percentageOfDeposits;
                }
              });
            } else {
              company.first.forEach(item => {
                item.money = 0;
                item.prize = '';
                item.type = '1';
                item.upper_limit = '';
                item.percentageOfDeposits = '';
                item.fixedBonus = '';
              });
            }
          }

          function companyAgainSelected() {
            if (this.modeData.companyCheck.indexOf('again') !== -1) {
              company.again.forEach((item, index) => {
                item.money = item.money * 100;

                if (item.type == 1) {
                  item.prize = item.fixedBonus * 100;
                  item.prize = item.fixedBonus * 100;
                  delete item.upper_limit;
                  delete item.fixedBonus;
                  delete item.percentageOfDeposits;
                } else {
                  item.prize = item.percentageOfDeposits;
                  item.upper_limit = item.upper_limit * 100;
                  delete item.fixedBonus;
                  delete item.percentageOfDeposits;
                }
              });
            } else {
              company.again.forEach(item => {
                item.money = 0;
                item.prize = '';
                item.type = '1';
                item.upper_limit = '';
                item.percentageOfDeposits = '';
                item.fixedBonus = '';
              });
            }
          }

          ;

          function onlineFirstSelected() {
            for (let key in online) {
              if (this.modeData.onlineCheck[key].indexOf('first') !== -1) {
                online[key].first.forEach((item, index) => {
                  item.money = item.money * 100;

                  if (item.type == 1) {
                    item.prize = item.fixedBonus * 100;
                    item.prize = item.fixedBonus * 100;
                    delete item.upper_limit;
                    delete item.fixedBonus;
                    delete item.percentageOfDeposits;
                  } else {
                    item.prize = item.percentageOfDeposits;
                    item.upper_limit = item.upper_limit * 100;
                    delete item.fixedBonus;
                    delete item.percentageOfDeposits;
                  }
                });
              } else {
                online[key].first.forEach((item, index) => {
                  item.money = 0;
                  item.type = '1';
                  item.prize = '';
                  item.upper_limit = '';
                  item.percentageOfDeposits = '';
                  item.fixedBonus = '';
                });
              }
            }
          }

          ;

          function onlineAgainSelected() {
            for (let key in online) {
              if (this.modeData.onlineCheck[key].indexOf('again') !== -1) {
                online[key].again.forEach((item, index) => {
                  item.money = item.money * 100;

                  if (item.type == 1) {
                    item.prize = item.fixedBonus * 100;
                    item.prize = item.fixedBonus * 100;
                    delete item.upper_limit;
                    delete item.fixedBonus;
                    delete item.percentageOfDeposits;
                  } else {
                    item.prize = item.percentageOfDeposits;
                    item.upper_limit = item.upper_limit * 100;
                    delete item.fixedBonus;
                    delete item.percentageOfDeposits;
                  }
                });
              } else {
                online[key].again.forEach((item, index) => {
                  item.money = 0;
                  item.type = '1';
                  item.prize = '';
                  item.upper_limit = '';
                  item.percentageOfDeposits = '';
                  item.fixedBonus = '';
                });
              }
            }
          }

          let companyCheck = this.modeData.companyCheck;
          let onlineCheck = this.modeData.onlineCheck; // if (companyCheck.length === 1) {
          //     if (companyCheck[0] === 'first') {
          //         companyFirstSelected.call(this);
          //     } else {
          //         companyAgainSelected.call(this);
          //     }
          // } else {
          // }

          companyFirstSelected.call(this);
          companyAgainSelected.call(this);

          if (onlineCheck.length === 1) {
            if (onlineCheck[0] === 'first') {
              onlineFirstSelected.call(this);
            } else {
              onlineAgainSelected.call(this);
            }
          } else {
            onlineFirstSelected.call(this);
            onlineAgainSelected.call(this);
          }

          ;
          let checklist = [];
          this.modeData.checkedDefut.forEach(it => {
            this.vipList.forEach(function (item) {
              if (item.label === it) {
                checklist.push(item);
              }
            });
          });
          let member_level = checklist.map(function (item) {
            return item.value;
          }).join(','); //  优惠类型多选

          let type_idList = this.type_idList,
              typeList = [],
              type_id = this.modeData.type_id;

          for (let m = 0; m < type_id.length; m++) {
            for (let n = 0; n < type_idList.length; n++) {
              if (type_id[m] == type_idList[n].value) {
                typeList.push({
                  "id": FORMATINT(type_idList[n].value),
                  "name": type_idList[n].label
                });
              }
            }
          }

          let formData = {
            name: this.modeData.name,
            types: typeList,
            title: this.modeData.title,
            begin_time: this.modeData.begin_time,
            end_time: this.modeData.end_time,
            description: this.modeData.description,
            cover: this.modeData.cover,
            open_mode: parseInt(this.modeData.open_mode),
            language_id: parseInt(this.modeData.language_id),
            language_name: lan ? lan.label : '',
            sort: parseInt(this.modeData.sort),
            content: this.modeData.content,
            content2: this.modeData.content2,
            link: this.modeData.link,
            status: this.modeData.status,
            rule_type: 'favorable',
            rule: {
              template_id: 9,
              extra: {
                visible: this.modeData.extra.visible
              },
              rule: {
                company: company,
                online: online
              },
              luckydraw_condition: null,
              limit_times: 0,
              withdraw_require: 'times',
              withdraw_require_val: this.modeData.withdrawRequireVal,
              member_level: member_level,
              issue_time: '0',
              issue_cycle: 'day',
              issue_mode: this.modeData.issue_mode
            }
          };

          if (type === 'add') {
            let url = URL.api + `/active/template.fix`;
            this.$.autoAjax('put', url, formData, {
              ok: data => {
                if (data.state === 0) {
                  let str = LANG['添加成功'] || '添加成功';
                  this.$message.success(str);
                  setTimeout(function () {
                    _this.$router.push({
                      path: 'addActiveSet'
                    });
                  }, 1000);
                } else if (data.state > 3) {
                  this.$message.error(data.msg);
                } else {
                  let str = LANG['修改失败'] || '修改失败';
                  this.$message.error(str);
                }
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            }); // this.$http.put(url, formData, URLCONFIG).then((data) => {
            //     if (data.data.state === 0) {
            //         let str = LANG['添加成功'] || '添加成功';
            //         this.$message.success(str);
            //         setTimeout(function () {
            //             _this.$router.push({path: 'addActiveSet'})
            //         }, 1000)
            //     }else if(data.data.state > 3){
            //         this.$message.error(data.data.msg)
            //     }else {
            //         let str = LANG['修改失败'] || '修改失败';
            //         this.$message.error(str)
            //     }
            // })
          } else {
            let url = URL.api + `/active/template.fix/${this.seachData.id}`;
            this.$.autoAjax('put', url, formData, {
              ok: data => {
                if (data.state === 0) {
                  let str = LANG['修改成功'] || '修改成功';
                  this.$message.success(str);
                  setTimeout(function () {
                    _this.$router.push({
                      path: 'activeSet'
                    });
                  }, 1000);
                } else if (data.state > 3) {
                  this.$message.error(data.msg);
                } else {
                  let str = LANG['修改失败'] || '修改失败';
                  this.$message.error(str);
                }
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            });
          }
        } else {
          _this.$message.error('请检查表单');

          return false;
        }
      });
    },

    goBack(type) {
      type == "add" ? this.$router.push({
        path: 'addActiveSet'
      }) : this.$router.push({
        path: 'activeSet'
      });
    },

    doSaveFile(obj) {
      this.modeData.cover = obj.url[0];
    },

    changeLanguage(value) {
      let languageList = this.languageList;
    },

    // 新增公司首存优惠
    addCompanyFirst() {
      let obj = {
        money: '',
        type: '1',
        prize: '',
        upper_limit: '',
        radio: 'fixedBonus'
      };
      this.modeData.company.first.push(obj);
    },

    // 删除公司首存优惠
    delectCompanyFirst(index) {
      this.modeData.company.first.splice(index, 1);
    },

    // 新增公司再存优惠
    addCompanyAgain() {
      let obj = {
        money: '',
        type: '1',
        prize: '',
        upper_limit: '',
        radio: 'fixedBonus'
      };
      this.modeData.company.again.push(obj);
    },

    // 删除公司再存优惠
    delectCompanyAgain(data, index) {
      this.modeData.company.again.splice(index, 1);
    },

    // 新增线上首存优惠
    addOnlineFirst(pay) {
      let obj = {
        money: '',
        type: '1',
        prize: '',
        upper_limit: '',
        radio: 'fixedBonus'
      };
      this.modeData.online[pay].first.push(obj);
    },

    // 删除线上首存优惠
    delectOnlineFirst(index, pay) {
      this.modeData.online[pay].first.splice(index, 1);
    },

    // 新增线上再存优惠
    addOnlineAgain(pay) {
      let obj = {
        money: '',
        type: '1',
        prize: '',
        upper_limit: '',
        radio: 'fixedBonus'
      };
      this.modeData.online[pay].again.push(obj);
    },

    // 删除线上再存优惠
    delectOnlineAgain(index, pay) {
      this.modeData.online[pay].again.splice(index, 1);
    },

    timeChange(obj) {
      setTimeout(() => {
        this.$refs.form.validateField('begin_time');
        this.$refs.form.validateField('end_time');
      });
    },

    checkDeposit(rule, value, callback) {
      let onlineEmpty = true;

      for (let key in value.onlineCheck) {
        if (value.onlineCheck[key].length > 0) {
          onlineEmpty = false;
        }
      }

      if (value.companyCheck.length > 0 || !onlineEmpty) {
        callback();
      } else {
        callback(new Error(LANG['至少选择一种入款方式'] || '至少选择一种入款方式'));
      }
    },

    validatorCompanyFirstMoney(rule, value, callback) {
      if (this.modeData.companyCheck.indexOf('first') !== -1) {
        this.validatorNumber.apply(this, arguments);
      } else {
        callback();
      }
    },

    validatorCompanyAgainMoney(rule, value, callback) {
      if (this.modeData.companyCheck.indexOf('again') !== -1) {
        this.validatorNumber.apply(this, arguments);
      } else {
        callback();
      }
    },

    validatorOnlineFirstMoney(rule, value, callback) {
      if (this.modeData.onlineCheck.indexOf('first') !== -1) {
        this.validatorNumber.apply(this, arguments);
      } else {
        callback();
      }
    },

    validatorOnlineAgainMoney(rule, value, callback) {
      if (this.modeData.onlineCheck.indexOf('again') !== -1) {
        this.validatorNumber.apply(this, arguments);
      } else {
        callback();
      }
    },

    //优惠规则数字验证
    validatorCompanyFirstTypeNumber(rule, value, callback) {
      let key = this.companyFirstType;

      if (key !== '') {
        if (this.modeData.company.first[key].type === '2') {
          this.validatorNumber.apply(this, arguments);
        } else {
          callback();
        }
      } else {
        callback();
      }
    },

    validatorCompanyFirstMoneyNumber(rule, value, callback) {
      let key = this.companyFirstType;

      if (key !== '') {
        if (this.modeData.company.first[key].type === '1') {
          this.validatorNumber.apply(this, arguments);
        } else {
          callback();
        }
      } else {
        callback();
      }
    },

    companyFirstInputBlur(key) {
      //储存第几行的数据
      this.companyFirstType = key;
    },

    companyCheckChange() {
      this.modeData.checkDeposit.companyCheck = this.modeData.companyCheck;
      this.$refs.form.validateField('checkDeposit');
    },

    companyFirstTypeChange() {
      let key = this.companyFirstType;
      this.$refs.companyFirstInput.forEach((item, index) => {
        item.handleBlur();
      });
    },

    //优惠规则数字验证
    validatorCompanyAgainTypeNumber(rule, value, callback) {
      let key = this.companyAgainType;

      if (key !== '') {
        if (this.modeData.company.again[key].type === '2') {
          this.validatorNumber.apply(this, arguments);
        } else {
          callback();
        }
      } else {
        callback();
      }
    },

    validatorCompanyAgainMoneyNumber(rule, value, callback) {
      let key = this.companyAgainType;

      if (key !== '') {
        if (this.modeData.company.again[key].type === '1') {
          this.validatorNumber.apply(this, arguments);
        } else {
          callback();
        }
      } else {
        callback();
      }
    },

    companyAgainInputBlur(key) {
      //储存第几行的数据
      this.companyAgainType = key;
    },

    companyAgainTypeChange() {
      this.$refs.companyAgainInput.forEach(item => {
        item.handleBlur();
      });
    },

    //优惠规则数字验证
    validatorOnlineFirstTypeNumber(rule, value, callback) {
      let key = this.onlineFirstType;

      if (key !== '') {
        if (this.modeData.online.first[key].type === '2') {
          this.validatorNumber.apply(this, arguments);
        } else {
          callback();
        }
      } else {
        callback();
      }
    },

    validatorOnlineFirstMoneyNumber(rule, value, callback) {
      let key = this.onlineFirstType;

      if (key !== '') {
        if (this.modeData.online.first[key].type === '1') {
          this.validatorNumber.apply(this, arguments);
        } else {
          callback();
        }
      } else {
        callback();
      }
    },

    onlineCheckChange(pay) {
      this.modeData.checkDeposit.onlineCheck[pay] = this.modeData.onlineCheck[pay];
      this.$refs.form.validateField('checkDeposit');
    },

    onlineFirstInputBlur(key) {
      //储存第几行的数据
      this.onlineFirstType = key;
    },

    onlineFirstTypeChange() {
      this.$refs.onlineFirstInput.forEach(item => {
        item.handleBlur();
      });
    },

    //优惠规则数字验证
    validatorOnlineAgainTypeNumber(rule, value, callback) {
      let key = this.onlineAgainType;

      if (key !== '') {
        if (this.modeData.online.again[key].type === '2') {
          this.validatorNumber.apply(this, arguments);
        } else {
          callback();
        }
      } else {
        callback();
      }
    },

    validatorOnlineAgainMoneyNumber(rule, value, callback) {
      let key = this.onlineAgainType;

      if (key !== '') {
        if (this.modeData.online.again[key].type === '1') {
          this.validatorNumber.apply(this, arguments);
        } else {
          callback();
        }
      } else {
        callback();
      }
    },

    onlineAgainInputBlur(key) {
      //储存第几行的数据
      this.onlineAgainType = key;
    },

    onlineAgainTypeChange() {
      this.$refs.onlineAgainInput.forEach(item => {
        item.handleBlur();
      });
    },

    radioChange(value) {
      this.linkShow = value == '4' ? false : true; // this.modeData.link = value == '4'?null:this.modeData.link;
      // this.markDownShow = value == '4' ? true:false;

      if (value == '4') {
        this.pcshow = true;
        this.mbshow = true;
        this.rules.content.push({
          message: '请输入pc活动规则',
          trigger: "change",
          required: true
        });
        this.rules.content2.push({
          message: '请输入H5活动规则',
          trigger: "change",
          required: true
        });
      } else {
        this.rules.content2.shift();
        this.rules.content.shift();
        this.pcshow = false;
        this.mbshow = false; // this.modeData.content = '';
        // this.modeData.content2 = '';
      }
    },

    // 动态验证富文本字符长度
    getconLength(data) {
      this.nowcontentNum = data.num;

      if (data.num) {
        setTimeout(() => {
          this.$refs.form.validateField(data.key);
        }, 100);
      }
    },

    //数字验证
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

    doShowError(obj) {
      //确认登出
      if (obj.fn == "doError") {
        this.$router.replace('/activeSet');
      }
    },

    //  返回上页
    returnPage() {
      this.$router.replace('/activeSet');
    }

  },
  computed: {},

  activated() {
    this.init();
  },

  beforeRouteLeave(to, from, next) {
    this.$refs.form.resetFields();
    this.checkKeys = []; //清空选中游戏

    this.arrList = [];
    this.vipList = [];
    this.modeData.description = '';
    this.modeData.content = '';
    this.modeData.content2 = '';
    this.pcshow = false;
    this.mbshow = false;
    next(true);
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-11802d99","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/activeMode_9.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"activeMode"}},[_c('el-col',[_c('el-button',{staticClass:"bankBtn pRight20",attrs:{"type":"primary","icon":"arrow-left","size":"small"},on:{"click":_vm.returnPage}},[_vm._v("\n                "+_vm._s(_vm.LANG['返 回'] || '返 回')+"\n            ")])],1),_vm._v(" "),_c('el-form',{ref:"form",staticClass:"mt20 clear",attrs:{"model":_vm.modeData,"label-width":"120px","rules":_vm.rules}},[_c('el-col',{attrs:{"span":24}},[_c('el-row',[_c('el-col',{staticClass:"Layout",attrs:{"span":24}},[_c('h3',{staticClass:"tCent",domProps:{"textContent":_vm._s(_vm.LANG['规则设置'] || '规则设置')}}),_vm._v(" "),_c('div',{staticClass:"clear"},[_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"优惠活动名称","prop":"name"}},[_c('el-input',{staticClass:"w80",attrs:{"placeholder":_vm.placename},model:{value:(_vm.modeData.name),callback:function ($$v) {_vm.$set(_vm.modeData, "name", $$v)},expression:"modeData.name"}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":"优惠类型","prop":"type_id"}},[_c('checkGroup',{attrs:{"checkOptions":_vm.type_idList,"sReset":_vm.sReset,"checkedval":_vm.checkedval},on:{"change-option":_vm.changeOption}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.modeData.type_id),expression:"modeData.type_id"}],staticStyle:{"display":"none"},domProps:{"value":(_vm.modeData.type_id)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.modeData, "type_id", $event.target.value)}}})],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"clear checkContainer"},[_c('el-form-item',{attrs:{"label":"公司入款优惠"}},[_c('el-checkbox-group',{on:{"change":_vm.companyCheckChange},model:{value:(_vm.modeData.companyCheck),callback:function ($$v) {_vm.$set(_vm.modeData, "companyCheck", $$v)},expression:"modeData.companyCheck"}},[_c('el-col',{attrs:{"span":24}},[_c('el-checkbox',{attrs:{"label":"first"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['首次优惠'] || '首次优惠')}})]),_vm._v(" "),_vm._l((_vm.modeData.company.first),function(item,index){return _c('el-row',{key:index},[_c('el-col',{attrs:{"sm":24,"md":24,"lg":4,"xs":4}},[_c('el-col',{staticClass:"addPadding"},[_c('span',[_vm._v("存款金额")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'company.first['+index+'].money'}},[_c('el-input',{model:{value:(item.money),callback:function ($$v) {_vm.$set(item, "money", $$v)},expression:"item.money"}})],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"sm":24,"md":24,"lg":18,"xs":18}},[_c('el-col',{attrs:{"lg":14,"sx":14,"md":19,"sm":19}},[_c('el-radio-group',{on:{"change":_vm.companyFirstTypeChange},model:{value:(item.type),callback:function ($$v) {_vm.$set(item, "type", $$v)},expression:"item.type"}},[_c('el-radio',{staticClass:"radio radioGroup",staticStyle:{"line-height":"35px"},attrs:{"label":"1"}},[_c('span',[_vm._v("固定奖金")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'company.first['+index+'].fixedBonus'}},[_c('el-input',{ref:"companyFirstInput",refInFor:true,on:{"blur":function($event){return _vm.companyFirstInputBlur(index)}},model:{value:(item.fixedBonus),callback:function ($$v) {_vm.$set(item, "fixedBonus", $$v)},expression:"item.fixedBonus"}})],1)],1),_vm._v(" "),_c('el-radio',{staticClass:"radio radioGroup",staticStyle:{"line-height":"35px"},attrs:{"label":"2"}},[_c('span',[_vm._v("存款百分比%")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'company.first['+index+'].percentageOfDeposits'}},[_c('el-input',{ref:"companyFirstInput",refInFor:true,on:{"blur":function($event){return _vm.companyFirstInputBlur(index)}},model:{value:(item.percentageOfDeposits),callback:function ($$v) {_vm.$set(item, "percentageOfDeposits", $$v)},expression:"item.percentageOfDeposits"}})],1)],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('span',[_vm._v("上限")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'company.first['+index+'].upper_limit'}},[_c('el-input',{ref:"companyFirstInput",refInFor:true,on:{"blur":function($event){return _vm.companyFirstInputBlur(index)}},model:{value:(item.upper_limit),callback:function ($$v) {_vm.$set(item, "upper_limit", $$v)},expression:"item.upper_limit"}})],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"height":"37px","line-height":"37px","text-align":"center","background-color":"#ccc"},attrs:{"span":1}},[(index!=0)?_c('div',{on:{"click":function($event){return _vm.delectCompanyFirst(index)}}},[_c('i',{staticClass:"el-icon-minus"})]):_vm._e(),_vm._v(" "),(index==0)?_c('div',{on:{"click":_vm.addCompanyFirst}},[_c('i',{staticClass:"el-icon-plus"})]):_vm._e()])],1)],1)})],2),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-checkbox',{attrs:{"label":"again"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['再存优惠'] || '再存优惠')}})]),_vm._v(" "),_vm._l((_vm.modeData.company.again),function(item,index){return _c('el-row',{key:index},[_c('el-col',{attrs:{"sm":24,"md":24,"lg":4,"xs":4}},[_c('el-col',{staticClass:"addPadding"},[_c('span',[_vm._v("存款金额")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'company.again['+index+'].money'}},[_c('el-input',{model:{value:(item.money),callback:function ($$v) {_vm.$set(item, "money", $$v)},expression:"item.money"}})],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"sm":24,"md":24,"lg":18,"xs":18}},[_c('el-col',{attrs:{"lg":14,"sx":14,"md":19,"sm":19}},[_c('el-radio-group',{on:{"change":_vm.companyAgainTypeChange},model:{value:(item.type),callback:function ($$v) {_vm.$set(item, "type", $$v)},expression:"item.type"}},[_c('el-radio',{staticClass:"radioGroup",staticStyle:{"line-height":"35px"},attrs:{"label":"1"}},[_c('span',[_vm._v("固定奖金")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'company.again['+index+'].fixedBonus'}},[_c('el-input',{ref:"companyAgainInput",refInFor:true,on:{"blur":function($event){return _vm.companyAgainInputBlur(index)}},model:{value:(item.fixedBonus),callback:function ($$v) {_vm.$set(item, "fixedBonus", $$v)},expression:"item.fixedBonus"}})],1)],1),_vm._v(" "),_c('el-radio',{staticClass:"radioGroup",staticStyle:{"line-height":"35px"},attrs:{"label":"2"}},[_c('span',[_vm._v("存款百分比%")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'company.again['+index+'].percentageOfDeposits'}},[_c('el-input',{ref:"companyAgainInput",refInFor:true,on:{"blur":function($event){return _vm.companyAgainInputBlur(index)}},model:{value:(item.percentageOfDeposits),callback:function ($$v) {_vm.$set(item, "percentageOfDeposits", $$v)},expression:"item.percentageOfDeposits"}})],1)],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('span',[_vm._v("上限")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'company.again['+index+'].upper_limit'}},[_c('el-input',{ref:"companyAgainInput",refInFor:true,on:{"blur":function($event){return _vm.companyAgainInputBlur(index)}},model:{value:(item.upper_limit),callback:function ($$v) {_vm.$set(item, "upper_limit", $$v)},expression:"item.upper_limit"}})],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"height":"37px","line-height":"37px","text-align":"center","background-color":"#ccc"},attrs:{"span":1}},[(index!=0)?_c('div',{on:{"click":function($event){return _vm.delectCompanyAgain(index)}}},[_c('i',{staticClass:"el-icon-minus"})]):_vm._e(),_vm._v(" "),(index==0)?_c('div',{on:{"click":_vm.addCompanyAgain}},[_c('i',{staticClass:"el-icon-plus"})]):_vm._e()])],1)],1)})],2)],1)],1)],1),_vm._v(" "),_c('div',{staticClass:"clear checkContainer"},[_c('el-form-item',{attrs:{"label":"线上入款优惠"}},[_c('p',{staticClass:"tip"},[_vm._v("注：线上入款首存优惠只享有所有支付场景中的一个首存优惠")]),_vm._v(" "),_vm._l((_vm.payList),function(pay){return _c('div',[_c('p',{staticClass:"payName"},[_vm._v(_vm._s(pay.cn_name))]),_vm._v(" "),_c('el-checkbox-group',{on:{"change":function($event){return _vm.onlineCheckChange(pay.en_name)}},model:{value:(_vm.modeData.onlineCheck[pay.en_name]),callback:function ($$v) {_vm.$set(_vm.modeData.onlineCheck, pay.en_name, $$v)},expression:"modeData.onlineCheck[pay.en_name]"}},[_c('el-col',{attrs:{"span":24}},[_c('el-checkbox',{attrs:{"label":"first"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['首次优惠'] || '首次优惠(注：线上入款首存优惠只享有所有支付场景中的一个首存优惠)')}})]),_vm._v(" "),_vm._l((_vm.modeData.online[pay.en_name].first),function(item,index){return _c('el-row',{key:index},[_c('el-col',{attrs:{"sm":24,"md":24,"lg":4,"xs":4}},[_c('el-col',{staticClass:"addPadding"},[_c('span',[_vm._v("存款金额")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'online['+pay.en_name+'].first['+index+'].money'}},[_c('el-input',{model:{value:(item.money),callback:function ($$v) {_vm.$set(item, "money", $$v)},expression:"item.money"}})],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"sm":24,"md":24,"lg":18,"xs":18}},[_c('el-col',{attrs:{"lg":14,"sx":14,"md":19,"sm":19}},[_c('el-radio-group',{on:{"change":_vm.onlineFirstTypeChange},model:{value:(item.type),callback:function ($$v) {_vm.$set(item, "type", $$v)},expression:"item.type"}},[_c('el-radio',{staticClass:"radio radioGroup",staticStyle:{"line-height":"35px"},attrs:{"label":"1"}},[_c('span',[_vm._v("固定奖金")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'online['+pay.en_name+'].first['+index+'].fixedBonus'}},[_c('el-input',{ref:"onlineFirstInput",refInFor:true,on:{"blur":function($event){return _vm.onlineFirstInputBlur(index)}},model:{value:(item.fixedBonus),callback:function ($$v) {_vm.$set(item, "fixedBonus", $$v)},expression:"item.fixedBonus"}})],1)],1),_vm._v(" "),_c('el-radio',{staticClass:"radio radioGroup",staticStyle:{"line-height":"35px"},attrs:{"label":"2"}},[_c('span',[_vm._v("存款百分比%")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'online['+pay.en_name+'].first['+index+'].percentageOfDeposits'}},[_c('el-input',{ref:"onlineFirstInput",refInFor:true,on:{"blur":function($event){return _vm.onlineFirstInputBlur(index)}},model:{value:(item.percentageOfDeposits),callback:function ($$v) {_vm.$set(item, "percentageOfDeposits", $$v)},expression:"item.percentageOfDeposits"}})],1)],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('span',[_vm._v("上限")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'online['+pay.en_name+'].first['+index+'].upper_limit'}},[_c('el-input',{ref:"onlineFirstInput",refInFor:true,on:{"blur":function($event){return _vm.onlineFirstInputBlur(index)}},model:{value:(item.upper_limit),callback:function ($$v) {_vm.$set(item, "upper_limit", $$v)},expression:"item.upper_limit"}})],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"height":"37px","line-height":"37px","text-align":"center","background-color":"#ccc"},attrs:{"span":1}},[(index!=0)?_c('div',{on:{"click":function($event){return _vm.delectOnlineFirst(index,pay.en_name)}}},[_c('i',{staticClass:"el-icon-minus"})]):_vm._e(),_vm._v(" "),(index==0)?_c('div',{on:{"click":function($event){return _vm.addOnlineFirst(pay.en_name)}}},[_c('i',{staticClass:"el-icon-plus"})]):_vm._e()])],1)],1)})],2),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('el-checkbox',{attrs:{"label":"again"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['再存优惠'] || '再存优惠')}})]),_vm._v(" "),_vm._l((_vm.modeData.online[pay.en_name].again),function(item,index){return _c('el-row',{key:index},[_c('el-col',{attrs:{"sm":24,"md":24,"lg":4,"xs":4}},[_c('el-col',{staticClass:"addPadding"},[_c('span',[_vm._v("存款金额")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'online['+pay.en_name+'].again['+index+'].money'}},[_c('el-input',{model:{value:(item.money),callback:function ($$v) {_vm.$set(item, "money", $$v)},expression:"item.money"}})],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"sm":24,"md":24,"lg":18,"xs":18}},[_c('el-col',{attrs:{"lg":14,"sx":14,"md":19,"sm":19}},[_c('el-radio-group',{on:{"change":_vm.onlineAgainTypeChange},model:{value:(item.type),callback:function ($$v) {_vm.$set(item, "type", $$v)},expression:"item.type"}},[_c('el-radio',{staticClass:"radio radioGroup",staticStyle:{"line-height":"35px"},attrs:{"label":"1"}},[_c('span',[_vm._v("固定奖金")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'online['+pay.en_name+'].again['+index+'].fixedBonus'}},[_c('el-input',{ref:"onlineAgainInput",refInFor:true,on:{"blur":function($event){return _vm.onlineAgainInputBlur(index)}},model:{value:(item.fixedBonus),callback:function ($$v) {_vm.$set(item, "fixedBonus", $$v)},expression:"item.fixedBonus"}})],1)],1),_vm._v(" "),_c('el-radio',{staticClass:"radio radioGroup",staticStyle:{"line-height":"35px"},attrs:{"label":"2"}},[_c('span',[_vm._v("存款百分比%")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'online['+pay.en_name+'].again['+index+'].percentageOfDeposits'}},[_c('el-input',{ref:"onlineAgainInput",refInFor:true,on:{"blur":function($event){return _vm.onlineAgainInputBlur(index)}},model:{value:(item.percentageOfDeposits),callback:function ($$v) {_vm.$set(item, "percentageOfDeposits", $$v)},expression:"item.percentageOfDeposits"}})],1)],1)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":4}},[_c('span',[_vm._v("上限")]),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":'online['+pay.en_name+'].again['+index+'].upper_limit'}},[_c('el-input',{ref:"onlineAgainInput",refInFor:true,on:{"blur":function($event){return _vm.onlineAgainInputBlur(index)}},model:{value:(item.upper_limit),callback:function ($$v) {_vm.$set(item, "upper_limit", $$v)},expression:"item.upper_limit"}})],1)],1),_vm._v(" "),_c('el-col',{staticStyle:{"height":"37px","line-height":"37px","text-align":"center","background-color":"#ccc"},attrs:{"span":1}},[(index!=0)?_c('div',{on:{"click":function($event){return _vm.delectOnlineAgain(index,pay.en_name)}}},[_c('i',{staticClass:"el-icon-minus"})]):_vm._e(),_vm._v(" "),(index==0)?_c('div',{on:{"click":function($event){return _vm.addOnlineAgain(pay.en_name)}}},[_c('i',{staticClass:"el-icon-plus"})]):_vm._e()])],1)],1)})],2)],1)],1)})],2)],1),_vm._v(" "),_c('el-form-item',{staticClass:"checkDeposit",attrs:{"prop":"checkDeposit","rules":[{ validator:_vm.checkDeposit,trigger:'change'}]}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"有效会员等级","prop":"checkedDefut"}},[_c('div',{staticStyle:{"margin":"15px 0"}}),_vm._v(" "),_c('el-checkbox-group',{on:{"change":_vm.handleCheckedDefutChange},model:{value:(_vm.modeData.checkedDefut),callback:function ($$v) {_vm.$set(_vm.modeData, "checkedDefut", $$v)},expression:"modeData.checkedDefut"}},_vm._l((_vm.vipList),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.label,"disabled":item.disable,"name":"type"}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"优惠提款要求","required":""}},[_c('el-form-item',{staticStyle:{"display":"inline-block"},attrs:{"prop":"withdrawRequireVal","rules":[{ validator:_vm.validatorNumber,trigger:'blur'}]}},[_c('el-input',{staticClass:"intW",model:{value:(_vm.modeData.withdrawRequireVal),callback:function ($$v) {_vm.$set(_vm.modeData, "withdrawRequireVal", $$v)},expression:"modeData.withdrawRequireVal"}})],1),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['倍'] || '倍')}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-radio',{staticClass:"radio",attrs:{"label":"enabled"},model:{value:(_vm.modeData.status),callback:function ($$v) {_vm.$set(_vm.modeData, "status", $$v)},expression:"modeData.status"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['启用'] || '启用')}})]),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"disabled"},model:{value:(_vm.modeData.status),callback:function ($$v) {_vm.$set(_vm.modeData, "status", $$v)},expression:"modeData.status"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['停用'] || '停用')}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"可否放弃选择","prop":"extra.visible"}},[_c('el-radio-group',{model:{value:(_vm.modeData.extra.visible),callback:function ($$v) {_vm.$set(_vm.modeData.extra, "visible", $$v)},expression:"modeData.extra.visible"}},[_c('el-radio',{staticClass:"radio",attrs:{"label":"1"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['是'] || '是')}})]),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"0"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['否'] || '否')}})])],1)],1)],1)],1),_vm._v(" "),_c('el-row',[_c('el-col',{staticClass:"Layout",attrs:{"span":24}},[_c('h3',{staticClass:"tCent",domProps:{"textContent":_vm._s(_vm.LANG['内容设置'] || '内容设置')}}),_vm._v(" "),_c('el-row',[_c('el-form-item',{attrs:{"label":"优惠活动标题","prop":"title"}},[_c('el-input',{staticClass:"w80",model:{value:(_vm.modeData.title),callback:function ($$v) {_vm.$set(_vm.modeData, "title", $$v)},expression:"modeData.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"语言","prop":"language_id"}},[_c('el-select',{staticClass:"w80",attrs:{"placeholder":"请选择类型","disabled":""},on:{"change":_vm.changeLanguage},model:{value:(_vm.modeData.language_id),callback:function ($$v) {_vm.$set(_vm.modeData, "language_id", $$v)},expression:"modeData.language_id"}},_vm._l((_vm.languageList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"优惠活动描述","prop":"description"}},[_c('el-input',{staticClass:"w80",attrs:{"type":"textarea"},model:{value:(_vm.modeData.description),callback:function ($$v) {_vm.$set(_vm.modeData, "description", $$v)},expression:"modeData.description"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"图片上传"}},[_c('el-input',{staticStyle:{"display":"none"},model:{value:(_vm.modeData.cover),callback:function ($$v) {_vm.$set(_vm.modeData, "cover", $$v)},expression:"modeData.cover"}}),_vm._v(" "),_c('upload',{attrs:{"uploadUrl":_vm.uploadUrl,"keys":_vm.keys,"isInit":_vm.imgInit,"fileNum":1,"arrList":_vm.arrList,"imgResolution":'460*180'},on:{"response":_vm.doSaveFile}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"排序","prop":"sort"}},[_c('el-input',{staticClass:"w80",model:{value:(_vm.modeData.sort),callback:function ($$v) {_vm.$set(_vm.modeData, "sort", $$v)},expression:"modeData.sort"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"打开方式","prop":"open_mode"}},[_c('el-radio-group',{on:{"change":_vm.radioChange},model:{value:(_vm.modeData.open_mode),callback:function ($$v) {_vm.$set(_vm.modeData, "open_mode", $$v)},expression:"modeData.open_mode"}},[_c('el-radio',{staticClass:"radio",attrs:{"label":"2"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['新窗口打开'] || '新窗口打开')}})]),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"3"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['本页面跳转'] || '本页面跳转')}})]),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"4"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['下拉展开'] || '下拉展开')}})])],1)],1),_vm._v(" "),(_vm.linkShow)?_c('el-form-item',{attrs:{"label":"链接","prop":"link"}},[_c('el-input',{staticClass:"w80",model:{value:(_vm.modeData.link),callback:function ($$v) {_vm.$set(_vm.modeData, "link", $$v)},expression:"modeData.link"}})],1):_vm._e(),_vm._v(" "),_c('el-col',[(_vm.pcshow)?_c('el-form-item',{attrs:{"label":_vm.LANG['PC活动规则编辑'] || 'PC活动规则编辑',"prop":"content"}},[_c('el-input',{staticStyle:{"display":"none"},model:{value:(_vm.modeData.content),callback:function ($$v) {_vm.$set(_vm.modeData, "content", $$v)},expression:"modeData.content"}}),_vm._v(" "),_c('markdownEdit',{staticClass:"w80",attrs:{"id":'pcmd'},model:{value:(_vm.modeData.content),callback:function ($$v) {_vm.$set(_vm.modeData, "content", $$v)},expression:"modeData.content"}})],1):_vm._e()],1),_vm._v(" "),_c('el-col',[(_vm.mbshow)?_c('el-form-item',{staticStyle:{"z-index":"9"},attrs:{"label":_vm.LANG['H5活动规则编辑'] || 'H5活动规则编辑',"prop":"content2"}},[_c('el-input',{staticStyle:{"display":"none"},model:{value:(_vm.modeData.content2),callback:function ($$v) {_vm.$set(_vm.modeData, "content2", $$v)},expression:"modeData.content2"}}),_vm._v(" "),_c('markdownEdit',{staticClass:"w80",attrs:{"id":'mbshowww'},model:{value:(_vm.modeData.content2),callback:function ($$v) {_vm.$set(_vm.modeData, "content2", $$v)},expression:"modeData.content2"}})],1):_vm._e()],1)],1)],1)],1),_vm._v(" "),(_vm.seachData.type == 'add')?_c('el-col',{staticClass:"tCent",attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary","plain":true},on:{"click":function($event){return _vm.goBack(_vm.type = 'add')}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['取消生成'] || '取消生成')}})]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.doSubmit(_vm.type = 'add')}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['生成优惠'] || '生成优惠')}})])],1):_c('el-col',{staticClass:"tCent",attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary","plain":true},on:{"click":function($event){return _vm.goBack(_vm.type = 'edit')}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['取消修改'] || '取消修改')}})]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.doSubmit(_vm.type = 'edit')}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['保存修改'] || '保存修改')}})])],1)],1)],1),_vm._v(" "),_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doShowError,"do-cancel":_vm.doShowError}})],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/preAct/activeMode_9.vue
function injectStyle (context) {
  __webpack_require__(440)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-11802d99"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  activeMode_9,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var preAct_activeMode_9 = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/confirm.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var components_confirm = ({
  data() {
    return {
      LANG,
      autofocus: false
    };
  },

  props: {
    confirmConfig: {
      type: Object,
      default: {
        state: false,
        msg: "",
        fn: "",
        obj: {}
      }
    }
  },
  watch: {
    'confirmConfig.state': function (newval) {
      if (newval) {
        this.autofocus = true;
      }
    }
  },
  components: {},
  methods: {
    //处理确定事件
    doConfirm() {
      this.$emit("do-confirm", {
        "fn": this.confirmConfig.fn,
        "obj": this.confirmConfig.obj,
        "flag": this.confirmConfig.flag
      });
      this.confirmConfig.state = false;
    },

    doCancel() {
      this.confirmConfig.state = false;
      this.$emit("do-cancel", {
        "fn": this.confirmConfig.fn,
        "obj": this.confirmConfig.obj,
        "flag": this.confirmConfig.flag
      });
    }

  },
  directives: {
    focus: {
      update: function (el, {
        value
      }) {
        if (value) {
          el.focus();
        }
      }
    }
  },

  mounted() {},

  created() {}

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e2013ef6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/confirm.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"confirm"}},[(_vm.confirmConfig.state)?_c('el-dialog',{attrs:{"title":_vm.LANG['系统提示'] || '系统提示',"size":"tiny","before-close":_vm.doCancel},on:{"close":_vm.doCancel},model:{value:(_vm.confirmConfig.state),callback:function ($$v) {_vm.$set(_vm.confirmConfig, "state", $$v)},expression:"confirmConfig.state"}},[_c('p',[_c('span',[_vm._v(_vm._s(_vm.LANG[_vm.confirmConfig.msg] || _vm.confirmConfig.msg))])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"formCancel",on:{"click":_vm.doCancel}},[_vm._v(_vm._s(_vm.LANG['取 消'] || '取 消'))]),_vm._v(" "),_c('el-button',{directives:[{name:"focus",rawName:"v-focus",value:(_vm.autofocus),expression:"autofocus"}],staticClass:"formSave",attrs:{"type":"primary"},on:{"click":_vm.doConfirm}},[_vm._v(_vm._s(_vm.LANG['确 定'] || '确 定'))])],1)]):_vm._e()],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/confirm.vue
function injectStyle (context) {
  __webpack_require__(219)
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
  components_confirm,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_confirm = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/changeAll.vue
//
//
//
//
//
//
//
//
/* harmony default export */ var changeAll = ({
  data() {
    return {
      //选中值
      checkVal: [],
      //是否已全选
      checkAll: false,
      //全选样式
      isIndeterminate: true
    };
  },

  props: {
    //选择数据
    checkOptions: Array,
    //默认选中值
    checkedval: {
      type: Object,
      default: {
        checked: []
      }
    },
    sReset: Boolean
  },
  watch: {
    sReset: function (newVal) {
      if (newVal === true) {
        this.changeReset();
      }
    }
  },
  methods: {
    // 初始化
    init() {
      if (this.checkedval.checked.length > 0) {
        for (let i in this.checkedval) {
          this.checkVal.push(this.checkedval[i]);
          this.checkedval.checked.push(this.checkedval[i]);
        }

        this.checkAll = true;
      } else {
        this.checkVal = [];
        this.checkedval.checked = [];
        this.checkAll = false;
        this.isIndeterminate = false;
      }
    },

    // 全选状态
    checkallState() {
      let _this = this;

      if (this.checkOptions.length === this.checkedval.checked.length && this.checkOptions.length > 0) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
    },

    //全选按钮事件
    handleCheckAllChange(e) {
      let event = window.event || e;
      let obj = event.srcElement ? event.srcElement : event.target;
      let temp = [];

      if (this.checkOptions.length && this.checkOptions[0].value) {
        this.checkOptions.forEach(item => {
          temp.push(item.value);
        });
      } else {
        temp = this.checkOptions;
      }

      this.checkVal = obj.checked ? temp : [];
      this.checkedval.checked = obj.checked ? temp : [];
      this.isIndeterminate = false;
      this.$emit('change-option', {
        "item": this.checkedval.checked
      });
    },

    //checkbox点击事件
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.checkOptions.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.checkOptions.length;
      this.$emit('change-option', {
        "item": this.checkedval.checked
      });
    },

    //重置数据
    changeReset() {
      this.checkVal = [];
      this.checkedval.checked = [];
      this.checkAll = false;
      this.isIndeterminate = false;
    }

  },

  mounted() {
    this.init();
  },

  updated() {
    let _this = this;

    this.$nextTick(function () {
      _this.checkallState();
    });
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7c01861b","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/changeAll.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"changeAll"}},[_c('el-checkbox',{attrs:{"indeterminate":_vm.isIndeterminate},on:{"change":_vm.handleCheckAllChange},model:{value:(_vm.checkAll),callback:function ($$v) {_vm.checkAll=$$v},expression:"checkAll"}},[_vm._v("全选")]),_vm._v(" "),_c('el-checkbox-group',{staticClass:"mt15",on:{"change":_vm.handleCheckedCitiesChange},model:{value:(_vm.checkedval.checked),callback:function ($$v) {_vm.$set(_vm.checkedval, "checked", $$v)},expression:"checkedval.checked"}},_vm._l((_vm.checkOptions),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.value || item}},[_vm._v(_vm._s(item.label || item))])}),1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/changeAll.vue
function injectStyle (context) {
  __webpack_require__(230)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c01861b"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  changeAll,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_changeAll = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);