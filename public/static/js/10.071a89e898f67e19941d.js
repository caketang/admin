(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/memberManagement/statisticalInformation.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var statisticalInformation = ({
  data() {
    return {
      LANG,
      stat: {
        deposit_times: 0,
        deposit_money: 0,
        withdraw_times: 0,
        withdraw_money: 0,
        order_times: 0,
        order_money: 0,
        send_prize: 0,
        rebet_money: 0,
        coupon_money: 0,
        lose_earn: 0
      },
      loading: false
    };
  },

  props: {
    id: Number
  },
  components: {},
  methods: {
    //页面初始化
    init() {
      this.loading = true;
      let stat = this.stat; //取用户数据

      this.$.autoAjax('get', URL.api + ROUTES.GET.user.info.$(parseInt(this.id)) + "?type=stat", '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data;

            for (let i in model) {
              stat[i] = model[i];
            }
          }

          this.loading = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //刷新数据
    refreshModel() {
      this.init();
      this.$message.success(LANG['刷新成功'] || '刷新成功');
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4e1e4b92","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/memberManagement/statisticalInformation.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"statisticalInformation"}},[_c('div',{staticClass:"clearfix",staticStyle:{"margin":"0 auto","width":"604px"}},[_c('el-col',[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.LANG['统计信息'] || '统计信息'))]),_vm._v(" "),_c('el-button',{staticClass:"refresh",attrs:{"size":"small","type":"primary"},on:{"click":_vm.refreshModel}},[_vm._v(_vm._s(_vm.LANG['刷 新'] || '刷 新'))])],1),_vm._v(" "),_c('el-col',{staticClass:"border1"},[_c('el-form',{attrs:{"label-width":"120px"}},[_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['入款次数累计'] || '入款次数累计'}},[_c('span',[_vm._v(_vm._s(_vm.stat['deposit_times']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['入款总额累计'] || '入款总额累计'}},[_c('span',[_vm._v(_vm._s(parseInt(_vm.stat['deposit_money'])/100))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['出款次数累计'] || '出款次数累计'}},[_c('span',[_vm._v(_vm._s(_vm.stat['withdraw_times']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['出款总额累计'] || '出款总额累计'}},[_c('span',[_vm._v(_vm._s(parseInt(_vm.stat['withdraw_money'])/100))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['注单总数'] || '注单总数'}},[_c('span',[_vm._v(_vm._s(_vm.stat['order_times']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['注单总金额'] || '注单总金额'}},[_c('span',[_vm._v(_vm._s(parseInt(_vm.stat['order_money'])/100))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['返水总金额'] || '返水总金额'}},[_c('span',[_vm._v(_vm._s(parseInt(_vm.stat['rebet_money'])/100))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['优惠活动总金额'] || '优惠活动总金额'}},[_c('span',[_vm._v(_vm._s(parseInt(_vm.stat['coupon_money'])/100))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":_vm.LANG['会员总额盈亏'] || '会员总额盈亏'}},[_c('span',[_vm._v(_vm._s(parseInt(_vm.stat['lose_earn'])/100))])])],1)],1)],1)],1)])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/userManagement/memberManagement/statisticalInformation.vue
function injectStyle (context) {
  __webpack_require__(477)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4e1e4b92"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  statisticalInformation,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var memberManagement_statisticalInformation = (Component.exports);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/memberManagement/basicInformation.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var basicInformation = ({
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.passForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };

    var validatePass1 = (rule, value, callback) => {
      // 这里用this.currentPasswordStatus判断当前弹窗密码的状态，只有取款密码需要进行数字的验证
      const reg = /^[0-9]{6}$/g;

      if (!reg.test(value) && !this.currentPasswordStatus) {
        callback(new Error(LANG['提款密码应为六位数字组成!'] || '提款密码应为六位数字组成'));
      } else {
        callback();
      }
    };

    var validateEmail = (rule, value, callback) => {
      if (value && !/[a-zA-Z0-9\\*]{1,15}@[a-zA-Z0-9]{1,8}\.[a-zA-Z0-9]{1,5}/.test(value)) {
        callback(new Error(LANG['请输入正确的邮箱格式!'] || '请输入正确的邮箱格式'));
      } else if (value && /\s/.test(value)) {
        callback(new Error(LANG['请输入有效邮箱，不能输入空格!'] || '请输入有效邮箱，不能输入空格'));
      } else {
        callback();
      }
    }; // 验证中文


    var validateHans = (rule, value, callback) => {
      value && !/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,14}$/.test(value) ? callback(new Error(LANG['请输入中文汉字,且长度2到14位!'] || '请输入中文汉字，且长度2到14位！')) : callback();
    }; // 验证手机号码


    var validateMobile = (rule, value, callback) => {
      if (value && !/^[0-9]\d{0,14}$/.test(value)) {
        //                if (value && !/^[0-9]*$/.test(value)) {
        callback(new Error(LANG['请输入合法的手机号码'] || '请输入合法的手机号码')); //                } else if(value && value.length <11 && value.length>5){
        //                    callback(new Error(LANG['手机号码长度大于或等于11，小于或等于15位数'] || '手机号码长度大于或等于11，小于或等于15位数'))
      } else if (value && /\s/.test(value)) {
        callback(new Error(LANG['请输入合法的手机号码，不能输入空格!'] || '请输入合法的手机号码，不能输入空格'));
      } else {
        callback();
      }
    }; // 验证数字


    var validateNumber = (rule, value, callback) => {
      const reg = /^\d{4,16}$/g;

      if (value && !reg.test(value)) {
        callback(new Error(LANG['请输入合法的QQ号码，只能输入数字!'] || '请输入合法的QQ号码，只能输入数字'));
      } else if (value && /\s/.test(value)) {
        callback(new Error(LANG['请输入合法的QQ号码，不能输入空格!'] || '请输入合法的QQ号码，不能输入空格'));
      } else {
        callback();
      }
    }; // 验证微信或SKYPE


    var validateWeixinSkype = (rule, value, callback) => {
      const reg = /[a-z\d#@!~%^&*]{4,16}/g;

      if (value && !reg.test(value)) {
        callback(new Error(LANG['请输入数字或字母或特殊字符!'] || '请输入数字或字母或特殊字符'));
      } else if (value && /\s/.test(value)) {
        callback(new Error(LANG['请输入数字或字母或特殊字符，不能输入空格!'] || '请输入数字或字母或特殊字符，不能输入空格'));
      } else {
        callback();
      }
    };

    var validatePostcodes = (rule, value, callback) => {
      //                if(value &&  !/^[1-9][0-9]$/.test(value)){
      if (value && !/^[0-9]*$/.test(value)) {
        callback(new Error(LANG['请输入正确的邮编号码，只能输入数字!'] || '请输入正确的邮编号码，只能输入数字'));
      } else if (value && /\s/.test(value)) {
        callback(new Error(LANG['请输入正确的邮编号码，不能输入空格!'] || '请输入正确的邮编号码，不能输入空格'));
      } else {
        callback();
      }
    };

    return {
      LANG,
      //基本资料
      baseFrom: {// username: "",
        // id: 0,
        // wallet_id: "",
        // level: "",
        // name: "",
        // password: "",
        // wpassword: "",
        // user_type: "",
        // user_level: "",
        // reg_time: "",
        // login_time: "",
        // reg_ip: "",
        // login_ip: "",
        // reg_source: "",
        // agent: "",
        // email: "",
        // email_verify: false,
        // mobile:"",
        // qq: "",
        // wechat: "",
        // country: "",
        // province: "",
        // nationality: "",
        // currency: "",
        // language: "",
        // birthday: "",
        // sex: "",
        // security_q: "",
        // addr: "",
        // security_a: "",
        // note: ""
      },
      baseFromSafe: {},
      baseRules: {
        email: [{
          validator: validateEmail,
          trigger: 'blur,change'
        }],
        truename: [{
          validator: validateHans,
          trigger: 'blur,change'
        }],
        mobile: [{
          validator: validateMobile,
          trigger: 'blur,change'
        }],
        qq: [{
          validator: validateNumber,
          trigger: 'blur,change'
        }],
        skype: [{
          validator: validateWeixinSkype,
          trigger: 'blur,change'
        }],
        weixin: [{
          validator: validateWeixinSkype,
          trigger: 'blur,change'
        }],
        postcode: [{
          validator: validatePostcodes,
          trigger: 'blur,change'
        }]
      },
      //标签弹窗
      tagsVisible: false,
      //会员标签列表
      userTagsList: [],
      //会员层级
      MemberLevelList: [],
      tagsForm: {
        id: -1,
        formUsername: "",
        userTags: ""
      },
      tagsRules: {
        userTags: [{
          required: true,
          message: LANG['请选择用户标签'] || '请选择用户标签',
          trigger: 'change'
        }]
      },
      //密码重置
      passTitle: "",
      passSelect: '',
      passVisible: false,
      passForm: {
        id: -1,
        password: "",
        password1: "",
        displayPass: null
      },
      passRules: {
        password: [{
          required: true,
          message: LANG['请输入确认密码'] || '请输入确认密码',
          trigger: 'blur'
        }, {
          validator: validatePass1,
          trigger: 'blur'
        }],
        password1: [{
          required: true,
          message: LANG['请输入确认密码'] || '请输入确认密码',
          trigger: 'blur'
        }, {
          validator: validatePass2,
          trigger: 'blur'
        }]
      },
      // 调级弹窗
      // adjustmentVisible: false,
      // adjustmentForm: {
      //     MemberLevel: ""
      // },
      // adjustmentRules: {
      //     MemberLevel: [{
      //         required: true,
      //         message: LANG['请选择会员等级'] || '请选择会员等级',
      //         trigger: 'change'
      //     }]
      // },
      //添加调整代理弹窗
      // agentVisible: false,
      // agentForm: {
      //     addAgent: "",
      // },
      // agentRules: {
      //     addAgent: [{
      //         required: true,
      //         message: LANG['请输入代理用户名'] || '请输入代理用户名',
      //         trigger: 'change'
      //     }]
      // },
      // 当前修改密码弹窗的窗台 true为登陆密码 false 为取款密码
      currentPasswordStatus: true,
      loading: false,
      // 安全问题列表
      questionList: [],
      // 权限修改权限
      permissions: {
        true_name: false,
        qq: false,
        weixin: false,
        email: false,
        mobile: false,
        address: false,
        birth: false,
        answer: false,
        gender: false,
        idcard: false,
        skype: false,
        nationality: false,
        language: false,
        question_id: false,
        comment: false
      }
    };
  },

  props: {
    id: Number
  },
  components: {},
  methods: {
    init() {
      this.loading = true; //取用户基础数据

      this.$.autoAjax('get', URL.api + ROUTES.GET.user.newInfo + "?id=" + parseInt(this.id) + "&type=base", '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.baseFrom = res.data;
            this.tagsForm.formUsername = res.data.username;
            this.baseFromSafe = res.data.safe;
          }

          this.loading = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 获取选择列表所需列表
    getSelectList() {
      let userTagsList = this.userTagsList; //取标签数据

      this.$.autoAjax('get', URL.api + ROUTES.GET.user.labels, '', {
        ok: res => {
          if (res.state == 0) {
            let model = res.data;

            for (let i in model) {
              userTagsList.push({
                "label": model[i].title,
                "value": model[i].id
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

    // 获取安全问题
    getQuestionList() {
      this.questionList = [];
      this.$.autoAjax('get', URL.api + '/user/info/question', '', {
        ok: res => {
          if (res.state == 0) {
            let model = res.data;

            for (let i in model) {
              this.questionList.push({
                "label": model[i].question,
                "value": model[i].id
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

    //添加标签
    addTags() {
      this.tagsVisible = true;
    },

    //保存标签
    saveTags() {
      this.$.autoAjax('put', URL.api + ROUTES.PUT.user.label.bind + "?id=" + parseInt(this.id, 10), {
        "tag": parseInt(this.tagsForm.userTags, 10)
      }, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message.success(this.LANG['恭喜您，会员打标签成功！'] || '恭喜您，会员打标签成功！');
            this.tagsVisible = false;
            this.init();
          } else if (res.state === 4001) {
            this.$message.error(LANG["请至少选择一个标签！"] || "请至少选择一个标签！");
          } else {
            this.$message.error(this.LANG['会员打标签失败，请稍后重试！'] || '会员打标签失败，请稍后重试！');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //重置登录密码
    resetLoginPass() {
      this.passVisible = true;
      this.passTitle = this.LANG['重置登录密码'] || '重置登录密码';
      this.passSelect = '1';
      this.currentPasswordStatus = true;
    },

    //重置取款密码
    resetWithdrawPass() {
      this.passVisible = true;
      this.passSelect = '2';
      this.passTitle = this.LANG['重置取款密码'] || '重置取款密码';
      this.currentPasswordStatus = false;
    },

    //调整会员等级
    adjustmentGrade() {
      let model = this.MemberLevelList;
      let level = this.baseFrom['user_level'];

      for (let i in model) {
        if (model[i].label == level) {
          this.adjustmentForm.MemberLevel = model[i].value;
        }
      }

      this.adjustmentVisible = true;
    },

    //保存密码
    savePass() {
      let pass = this.passForm.password;
      this.$refs.passForm.validate(valid => {
        if (valid) {
          //如果是保存登录密码
          if (this.passSelect == '1') {
            this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.info.loginword + "?id=" + parseInt(this.id), {
              "pw-new": this.passForm.password
            }, {
              ok: res => {
                if (res.state == 0 && res.data) {
                  this.$message.success(this.LANG['恭喜您，登录密码修改成功！'] || '恭喜您，登录密码修改成功！');
                  this.tagsVisible = false;
                  this.baseFrom['login_pwd'] = pass;
                } else {
                  this.$message.error(this.LANG['登录密码修改失败，请稍后重试！'] || '登录密码修改失败，请稍后重试！');
                }
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            });
          }

          if (this.passSelect == '2') {
            console.log('hahahha---');
            this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.info.password + "?id=" + parseInt(this.id), {
              "pw-new": this.passForm.password
            }, {
              ok: res => {
                if (res.state == 0 && res.data) {
                  this.$message.success(this.LANG['恭喜您，提款密码修改成功！'] || '恭喜您，提款密码修改成功！');
                  this.baseFrom['withdraw_pwd'] = pass;
                } else {
                  this.$message.error(this.LANG['提款密码修改失败，请稍后重试！'] || '提款密码修改失败，请稍后重试！');
                }
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            });
          }

          this.resetPassForm();
        }
      });
    },

    resetPassForm() {
      this.$refs.passForm.resetFields();
      this.passVisible = false;
    },

    //保存基础数据
    saveModel() {
      let obj = {
        comment: this.baseFrom["comment"]
      }; // 判断权限没有权限则不传该参数
      // 判断当前用户的会员修改真实姓名权限

      if (sessionStorage.true_name === "true") {
        obj.name = this.baseFrom["truename"];
      } // 判断当前用户会员联系信息的修改权限


      if (sessionStorage.nationality === "true") {
        obj.postcode = this.baseFrom["postcode"];
      }

      if (sessionStorage.address === "true") {
        obj.address = this.baseFrom["address"];
      }

      if (sessionStorage.mobile === "true") {
        obj.mobile = this.baseFrom["mobile"];
      }

      if (sessionStorage.qq === "true") {
        obj.qq = this.baseFrom["qq"];
      }

      if (sessionStorage.weixin === "true") {
        obj.weixin = this.baseFrom["weixin"];
      }

      if (sessionStorage.idcard === "true") {
        obj.idcard = this.baseFrom["idcard"];
      }

      if (sessionStorage.answer === "true") {
        obj.qid = this.baseFrom["question_id"];
        obj.answer = this.baseFrom["answer"];
      }

      if (sessionStorage.skype === "true") {
        obj.skype = this.baseFrom["skype"];
      }

      if (sessionStorage.email === "true") {
        obj.email = this.baseFrom["email"];
      } //  PATCH /user/info/base/?id\d


      this.$refs.baseFrom.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.info.base + "?id=" + parseInt(this.id), obj, {
            ok: res => {
              if (res.state == 0 && res.data) {
                this.$message.success(this.LANG['恭喜您，会员资料修改成功！'] || '恭喜您，会员资料修改成功！'); // _this.baseFrom[''] = addAgent;
              } else if (res.state == 405) {
                this.$message.error(this.LANG['会员资料修改失败,权限不足'] || '会员资料修改失败,权限不足');
              } else {
                this.$message.error(this.LANG[res.msg] || res.msg);
              }

              this.init();
              this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
        }
      });
    },

    //手机验证
    validatorPhon(rule, value, callback) {
      if (!/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(value)) {
        callback(new Error(this.LANG["请输入合法的手机号码"] || "请输入合法的手机号码"));
      } else {
        callback();
      }
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
    this.getSelectList();
    this.getQuestionList(); //设置修改权限

    if (sessionStorage.true_name === "false") {
      this.permissions.true_name = true;
    }

    if (sessionStorage.idcard === "false") {
      this.permissions.idcard = true;
    }

    if (sessionStorage.mobile === "false") {
      this.permissions.mobile = true;
    }

    if (sessionStorage.qq === "false") {
      this.permissions.qq = true;
    }

    if (sessionStorage.weixin === "false") {
      this.permissions.weixin = true;
    }

    if (sessionStorage.answer === "false") {
      this.permissions.answer = true;
    }

    if (sessionStorage.skype === "false") {
      this.permissions.skype = true;
    }

    if (sessionStorage.address === "false") {
      this.permissions.address = true;
    }

    if (sessionStorage.email === "false") {
      this.permissions.email = true;
    }

    if (sessionStorage.nationality === "false") {
      this.permissions.nationality = true;
    }
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-78b81b76","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/memberManagement/basicInformation.vue
var basicInformation_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"id":"basicInformation"}},[_c('div',{staticClass:"clearfix",staticStyle:{"margin":"0 auto","width":"933px"}},[_c('el-col',[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.LANG['基本资料'] || '基本资料'))])]),_vm._v(" "),_c('el-col',{staticClass:"border1"},[_c('el-form',{ref:"baseFrom",attrs:{"model":_vm.baseFrom,"rules":_vm.baseRules,"label-width":"100px"}},[_c('el-row',[_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['username']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['ID/昵称'] || 'ID/昵称'}},[_c('span',{staticClass:"mr20"},[_vm._v(_vm._s(_vm.baseFrom['id']))]),_vm._v("|"),_c('span',{staticClass:"ml20"},[_vm._v(_vm._s(_vm.baseFrom['nickname']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['标签'] || '标签'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['tags']))]),_vm._v(" "),_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.addTags}},[_vm._v(_vm._s(_vm.LANG['打标签'] || '打标签'))])],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['真实姓名'] || '真实姓名',"prop":_vm.permissions['true_name']?'':'truename'}},[_c('el-input',{attrs:{"disabled":_vm.permissions['true_name']},model:{value:(_vm.baseFrom['truename']),callback:function ($$v) {_vm.$set(_vm.baseFrom, 'truename', $$v)},expression:"baseFrom['truename']"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['登录密码'] || '登录密码'}},[_c('span',[_vm._v("****")]),_vm._v(" "),_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.resetLoginPass}},[_vm._v(_vm._s(_vm.LANG['重置'] || '重置'))])],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['取款密码'] || '取款密码'}},[_c('span',[_vm._v("****")]),_vm._v(" "),_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.resetWithdrawPass}},[_vm._v(_vm._s(_vm.LANG['重置'] || '重置')+"\n                            ")])],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['用户类型'] || '用户类型'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['user_type']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['会员等级'] || '会员等级'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['level']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['注册时间'] || '注册时间'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['created']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['最后登录时间'] || '最后登录时间'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['last_login']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['注册IP'] || '注册IP'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['ip']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['最后登录IP'] || '最后登录IP'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['last_ip']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['注册来源'] || '注册来源'}},[_c('span',[_vm._v(_vm._s(_vm._f("filterChnnel")(_vm.baseFrom['channel'])))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['邮箱'] || '邮箱',"prop":_vm.permissions['email']?'':'email'}},[_c('el-input',{attrs:{"disabled":_vm.permissions['email']},model:{value:(_vm.baseFrom['email']),callback:function ($$v) {_vm.$set(_vm.baseFrom, 'email', $$v)},expression:"baseFrom['email']"}}),_vm._v(" "),_c('el-tag',{attrs:{"type":"primary"}},[_vm._v(_vm._s((_vm.baseFromSafe['email'] == "1" ? "已验证" : "未验证")))])],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['身份证号码'] || '身份证号码',"prop":_vm.permissions['idcard']?'':'idcard'}},[_c('el-input',{attrs:{"disabled":_vm.permissions['idcard']},model:{value:(_vm.baseFrom['idcard']),callback:function ($$v) {_vm.$set(_vm.baseFrom, 'idcard', $$v)},expression:"baseFrom['idcard']"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['手机'] || '手机',"prop":_vm.permissions['mobile']?'':'mobile'}},[_c('el-input',{attrs:{"disabled":_vm.permissions['mobile']},model:{value:(_vm.baseFrom['mobile']),callback:function ($$v) {_vm.$set(_vm.baseFrom, 'mobile', $$v)},expression:"baseFrom['mobile']"}}),_vm._v(" "),_c('el-tag',{attrs:{"type":"primary"}},[_vm._v(_vm._s((_vm.baseFromSafe['mobile'] == "1" ? "已验证" : "未验证")))])],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['QQ'] || 'QQ',"prop":_vm.permissions['qq']?'':'qq'}},[_c('el-input',{attrs:{"disabled":_vm.permissions['qq'],"type":"number"},model:{value:(_vm.baseFrom['qq']),callback:function ($$v) {_vm.$set(_vm.baseFrom, 'qq', $$v)},expression:"baseFrom['qq']"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['微信'] || '微信',"prop":_vm.permissions['weixin']?'':'weixin'}},[_c('el-input',{attrs:{"disabled":_vm.permissions['weixin']},model:{value:(_vm.baseFrom['weixin']),callback:function ($$v) {_vm.$set(_vm.baseFrom, 'weixin', $$v)},expression:"baseFrom['weixin']"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['安全问题'] || '安全问题',"prop":_vm.permissions['answer']?'':'question_id'}},[_c('el-select',{attrs:{"placeholder":"请选择","disabled":_vm.permissions['answer']},model:{value:(_vm.baseFrom['question_id']),callback:function ($$v) {_vm.$set(_vm.baseFrom, 'question_id', $$v)},expression:"baseFrom['question_id']"}},_vm._l((_vm.questionList),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['安全答案'] || '安全答案',"prop":_vm.permissions['answer']?'':'answer'}},[_c('el-input',{attrs:{"disabled":_vm.permissions['answer']},model:{value:(_vm.baseFrom['answer']),callback:function ($$v) {_vm.$set(_vm.baseFrom, 'answer', $$v)},expression:"baseFrom['answer']"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['国家'] || '国家'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['country']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['省市'] || '省市'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['province'] + " " + _vm.baseFrom['city']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['国籍'] || '国籍'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['nationality']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['货币'] || '货币'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['ctype']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['语言'] || '语言'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['language_name']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['生日'] || '生日'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['birth']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['性别'] || '性别'}},[_c('span',[_vm._v(_vm._s(_vm.baseFrom['sex']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['Skype'] || 'Skype',"prop":_vm.permissions['skype']?'':'skype'}},[_c('el-input',{attrs:{"disabled":_vm.permissions['skype']},model:{value:(_vm.baseFrom['skype']),callback:function ($$v) {_vm.$set(_vm.baseFrom, 'skype', $$v)},expression:"baseFrom['skype']"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['地址'] || '地址',"prop":_vm.permissions['address']?'':'address'}},[_c('el-input',{attrs:{"disabled":_vm.permissions['address']},model:{value:(_vm.baseFrom['address']),callback:function ($$v) {_vm.$set(_vm.baseFrom, 'address', $$v)},expression:"baseFrom['address']"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['邮编'] || '邮编',"prop":_vm.permissions['nationality']?'':'postcode'}},[_c('el-input',{attrs:{"disabled":_vm.permissions['nationality']},model:{value:(_vm.baseFrom['postcode']),callback:function ($$v) {_vm.$set(_vm.baseFrom, 'postcode', $$v)},expression:"baseFrom['postcode']"}})],1)],1),_vm._v(" "),_c('el-col',{staticClass:"item itemtextarea"},[_c('el-form-item',{attrs:{"label":_vm.LANG['备注'] || '备注',"prop":_vm.permissions['comment']?'':'comment'}},[_c('el-input',{staticStyle:{"margin-left":"0px"},attrs:{"type":"textarea"},model:{value:(_vm.baseFrom['comment']),callback:function ($$v) {_vm.$set(_vm.baseFrom, 'comment', $$v)},expression:"baseFrom['comment']"}})],1)],1)],1)],1),_vm._v(" "),_c('el-col',{staticClass:"tCent mt10 pb",attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveModel}},[_vm._v(_vm._s(_vm.LANG['保存基本资料'] || '保存基本资料'))])],1)],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":_vm.LANG['打标签'] || '打标签',"size":"tiny"},model:{value:(_vm.tagsVisible),callback:function ($$v) {_vm.tagsVisible=$$v},expression:"tagsVisible"}},[_c('el-form',{ref:"tagsForm",attrs:{"model":_vm.tagsForm,"rules":_vm.tagsRules,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['用户名:'] || '用户名:'}},[_c('span',[_vm._v(_vm._s(_vm.tagsForm.formUsername))])]),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"userTags","label":_vm.LANG['标签:'] || '标签:'}},[_c('el-select',{attrs:{"placeholder":"请选择"},model:{value:(_vm.tagsForm.userTags),callback:function ($$v) {_vm.$set(_vm.tagsForm, "userTags", $$v)},expression:"tagsForm.userTags"}},_vm._l((_vm.userTagsList),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.tagsVisible = false}}},[_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveTags}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])],1)],1)],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":_vm.passTitle,"size":"tiny"},model:{value:(_vm.passVisible),callback:function ($$v) {_vm.passVisible=$$v},expression:"passVisible"}},[_c('el-form',{ref:"passForm",staticStyle:{"height":"130px"},attrs:{"model":_vm.passForm,"rules":_vm.passRules,"label-width":"100px"}},[_c('el-form-item',{staticStyle:{"height":"60px"},attrs:{"label":_vm.LANG['新密码'] || '新密码',"prop":"password"}},[(!_vm.passForm.displayPass)?_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.passForm.password),callback:function ($$v) {_vm.$set(_vm.passForm, "password", $$v)},expression:"passForm.password"}}):_vm._e(),_vm._v(" "),(_vm.passForm.displayPass)?_c('el-input',{model:{value:(_vm.passForm.password),callback:function ($$v) {_vm.$set(_vm.passForm, "password", $$v)},expression:"passForm.password"}}):_vm._e()],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"height":"50px"},attrs:{"prop":"password1","label":_vm.LANG['确认密码'] || '确认密码'}},[(!_vm.passForm.displayPass)?_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.passForm.password1),callback:function ($$v) {_vm.$set(_vm.passForm, "password1", $$v)},expression:"passForm.password1"}}):_vm._e(),_vm._v(" "),(_vm.passForm.displayPass)?_c('el-input',{model:{value:(_vm.passForm.password1),callback:function ($$v) {_vm.$set(_vm.passForm, "password1", $$v)},expression:"passForm.password1"}}):_vm._e()],1),_vm._v(" "),_c('el-form-item',[_c('el-checkbox',{model:{value:(_vm.passForm.displayPass),callback:function ($$v) {_vm.$set(_vm.passForm, "displayPass", $$v)},expression:"passForm.displayPass"}},[_vm._v(_vm._s(_vm.LANG['显示密码'] || '显示密码'))])],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.resetPassForm}},[_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.savePass}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])],1)],1)],1)],1)])}
var basicInformation_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/userManagement/memberManagement/basicInformation.vue
function basicInformation_injectStyle (context) {
  __webpack_require__(478)
}
/* script */


/* template */

/* template functional */
var basicInformation_vue_template_functional_ = false
/* styles */
var basicInformation_vue_styles_ = basicInformation_injectStyle
/* scopeId */
var basicInformation_vue_scopeId_ = "data-v-78b81b76"
/* moduleIdentifier (server only) */
var basicInformation_vue_module_identifier_ = null

var basicInformation_Component = Object(component_normalizer["a" /* default */])(
  basicInformation,
  basicInformation_render,
  basicInformation_staticRenderFns,
  basicInformation_vue_template_functional_,
  basicInformation_vue_styles_,
  basicInformation_vue_scopeId_,
  basicInformation_vue_module_identifier_
)

/* harmony default export */ var memberManagement_basicInformation = (basicInformation_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/memberManagement/accountBalance.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var accountBalance = ({
  data() {
    return {
      LANG,
      //帐户余额
      accountFrom: {
        currency: "",
        currency_name: "",
        updated: "",
        freeze_withdraw: "",
        freeze_append: "",
        children: [],
        balance: "",
        total_balance: "",
        amount: ""
      },
      refresh_bool: false,
      loading: false
    };
  },

  props: {
    id: Number,
    username: String
  },
  components: {},
  methods: {
    //页面初始化
    init() {
      let _this = this;

      let stat = this.accountFrom; //取用户数据

      let url = !this.refresh_bool ? URL.api + ROUTES.GET.user.newInfo + "?id=" + parseInt(this.id) + "&type=balance" : URL.api + ROUTES.GET.user.newInfo + "?id=" + parseInt(this.id) + "&type=balance&refresh=1";
      this.$.autoAjax('get', url, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data;

            for (let i in model) {
              stat[i] = model[i];
            }

            this.accountFrom.total_balance = parseInt(this.accountFrom.balance) + parseInt(this.accountFrom.freeze_withdraw) + parseInt(this.accountFrom.freeze_append); // 匹配子钱包金额
            // const children_money_keys = Object.keys(this.accountFrom.children_money);
            // for (let child_key of model.children) {
            //     for (let item of children_money_keys) {
            //         //根据属性名和game_type匹配来填写金额
            //         if (item == child_key.game_type) {
            //             this.accountFrom.children_money[item] = child_key.balance;
            //             this.accountFrom.total_balance += parseInt(child_key.balance);
            //             break;
            //         }
            //     }
            // }
          } // refresh_bool为true的时候出现刷新提示


          if (this.refresh_bool) {
            this.loading = false;
            this.$message.success(LANG['刷新成功'] || '刷新成功');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.get(url, URLCONFIG).then((res)=>{
      //     if( res.data.state == 0 && res.data.data){
      //         let model=res.data.data;
      //         for(let i in model){
      //             stat[i]= model[i];
      //         }
      //         this.accountFrom.total_balance = parseInt(this.accountFrom.balance) + parseInt(this.accountFrom.freeze_withdraw) + parseInt(this.accountFrom.freeze_append);
      //         // 匹配子钱包金额
      //         // const children_money_keys = Object.keys(this.accountFrom.children_money);
      //         // for (let child_key of model.children) {
      //         //     for (let item of children_money_keys) {
      //         //         //根据属性名和game_type匹配来填写金额
      //         //         if (item == child_key.game_type) {
      //         //             this.accountFrom.children_money[item] = child_key.balance;
      //         //             this.accountFrom.total_balance += parseInt(child_key.balance);
      //         //             break;
      //         //         }
      //         //     }
      //         // }
      //     }
      //     // refresh_bool为true的时候出现刷新提示
      //     if (this.refresh_bool) {
      //         this.loading = false;
      //         this.$message.success(LANG['刷新成功'] || '刷新成功');
      //     }
      // })
      .catch(err => {//                    console.log(err);
      });
    },

    //刷新余额
    refreshModel() {
      // 设置强制刷新
      this.refresh_bool = true;
      this.loading = true;
      this.init();
    },

    //调整余额
    adjustedBalance() {
      this.$router.push({
        path: "/manual",
        query: {
          username: this.username,
          role: "1"
        }
      });
    }

  },

  created() {
    // 默认不强制刷新
    this.refresh_bool = false;
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e53b0f4c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/memberManagement/accountBalance.vue
var accountBalance_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"id":"accountBalance"}},[_c('div',{staticClass:"clearfix",staticStyle:{"margin":"0 auto","width":"933px"}},[_c('el-col',[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.LANG['帐户余额'] || '帐户余额'))])]),_vm._v(" "),_c('el-col',{staticStyle:{"margin-bottom":"10px"}},[_c('span',{staticClass:"fl10",domProps:{"textContent":_vm._s(_vm.LANG['货币:'] || '货币:')}}),_vm._v(_vm._s(_vm.accountFrom['currency_name'])+"\n            "),_c('span',{staticClass:"fl10",domProps:{"textContent":_vm._s(_vm.LANG['最后更新时间:'] || '最后更新时间:')}}),_vm._v(_vm._s(_vm.accountFrom['updated'])+"\n            "),_c('div',{staticStyle:{"float":"right"}},[_c('el-button',{staticStyle:{"margin-left":"5px"},attrs:{"type":"primary","size":"small"},on:{"click":_vm.refreshModel}},[_vm._v(_vm._s(_vm.LANG['刷新余额'] || '刷新余额'))]),_vm._v(" "),_c('el-button',{staticStyle:{"margin-left":"5px"},attrs:{"type":"primary","size":"small"},on:{"click":_vm.adjustedBalance}},[_vm._v(_vm._s(_vm.LANG['调整余额'] || '调整余额'))])],1)]),_vm._v(" "),_c('el-col',{staticClass:"border1"},[_c('el-form',{attrs:{"model":_vm.accountFrom,"label-width":"100px"}},[_c('el-col',{staticClass:"item",attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":_vm.LANG['主帐户'] || '主帐户'}},[_c('span',[_vm._v(_vm._s(_vm.accountFrom['balance']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['提款冻结'] || '提款冻结'}},[_c('span',[_vm._v(_vm._s(_vm.accountFrom['freeze_withdraw']))])])],1),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":12}},[_c('el-form-item',{attrs:{"label":_vm.LANG['代理钱包'] || '代理钱包'}},[_c('span',[_vm._v(_vm._s(_vm.accountFrom['benefit_balance']))])])],1),_vm._v(" "),_vm._l((_vm.accountFrom.children),function(item,index){return _c('el-col',{key:item.game_type,staticClass:"item",attrs:{"span":(index % 2 === 0 && index === _vm.accountFrom.children.length - 1) ? 24 : 12}},[_c('el-form-item',{attrs:{"label":_vm.LANG[item.game_type + '余额'] || item.game_type + '余额'}},[_c('span',[_vm._v(_vm._s(item.balance))])])],1)}),_vm._v(" "),_c('el-col',{staticClass:"item",attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":_vm.LANG['总余额'] || '总余额'}},[_c('span',[_vm._v(_vm._s(_vm.accountFrom['amount']))])])],1)],2)],1)],1)])}
var accountBalance_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/userManagement/memberManagement/accountBalance.vue
function accountBalance_injectStyle (context) {
  __webpack_require__(479)
}
/* script */


/* template */

/* template functional */
var accountBalance_vue_template_functional_ = false
/* styles */
var accountBalance_vue_styles_ = accountBalance_injectStyle
/* scopeId */
var accountBalance_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var accountBalance_vue_module_identifier_ = null

var accountBalance_Component = Object(component_normalizer["a" /* default */])(
  accountBalance,
  accountBalance_render,
  accountBalance_staticRenderFns,
  accountBalance_vue_template_functional_,
  accountBalance_vue_styles_,
  accountBalance_vue_scopeId_,
  accountBalance_vue_module_identifier_
)

/* harmony default export */ var memberManagement_accountBalance = (accountBalance_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/memberManagement/withdrawInformation.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var withdrawInformation = ({
  data() {
    return {
      LANG,
      columnsUrl: "",
      tableUrl: "",
      formType: "",
      allData: {},
      tableData: {
        list: []
      },
      gridData: []
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */]
  },
  props: {
    id: Number
  },
  methods: {
    // 页面初始化
    init() {
      //取用户数据
      this.columnsUrl = "/static/json/accoutManage/memberManagement/withdrawInformation/columns.json"; //this.tableUrl = URL.api + ROUTES.GET.user.newInfo + "?id=" + parseInt(this.id) + "&type=withdraw";

      this.tableUrl = URL.api + ROUTES.GET.user.Audit + "?id=" + parseInt(this.id) + "&type=withdraw";
    },

    //刷新页面
    refreshModel() {
      this.formType == "edit" ? this.formType = "add" : this.formType = "edit";
    },

    doHandle() {},

    //取表格数据
    getTableData(obj) {
      // this.tableData.list = [];
      this.allData = obj.allData;
      let model = obj.allData.list;
      obj.allData.list && model.forEach(item => {
        if (!item.withdraw_bet_coupon && !item.withdraw_bet_principal) {
          item.withdraw_bet_principal = item.withdraw_bet;
          item.withdraw_bet_coupon = 0;
        }
      });
    },

    doHandleDetail(e) {
      switch (e.fn) {
        case "showRebateProportion":
          this.showRebateProportion(e.row, event);
          break;

        case "hideRebateProportion":
          this.hideRebateProportion(item.row, item.event);
          break;
      }
    },

    //显示有效投注额
    showRebateProportion(row, event) {
      let _this = this;

      let data = row.valid_bet_detail;

      if (data.length <= 0) {
        return;
      } else {
        this.gridData.splice(0, this.gridData.length);
        let gridData = this.gridData;

        for (let i = 0; i < data.length; i++) {
          gridData.push({
            label: data[i].name,
            value: data[i].valid_bet / 100
          });
        }
      }
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b8e034f6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/memberManagement/withdrawInformation.vue
var withdrawInformation_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"withdrawInformation"}},[_c('div',{staticClass:"clearfix"},[_c('el-col',[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.LANG['即时稽核'] || '即时稽核'))]),_vm._v(" "),_c('div',{staticStyle:{"float":"right"}},[_c('el-button',{staticStyle:{"margin-left":"5px"},attrs:{"type":"primary","size":"small"},on:{"click":_vm.refreshModel}},[_vm._v("\n                        "+_vm._s(_vm.LANG['即时稽核'] || '即时稽核')+"\n                    ")])],1)]),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"getData":true,"pageSet":false,"tableData":_vm.tableData,"formType":_vm.formType,"automation":true,"hoverData":_vm.gridData,"isCreated":true,"do-hover":_vm.doHandle,"showRefresh":false},on:{"get-table-data":_vm.getTableData,"do-handle":_vm.doHandleDetail}},[(_vm.allData.list && _vm.allData.list.length)?_c('tr',{staticClass:"sumdiv ml20",attrs:{"slot":"other","span":12},slot:"other"},[_c('td',{attrs:{"colspan":"9"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font14 tCent"},[_vm._v(_vm._s(_vm.LANG['常态稽核'] || '常态稽核')+" : "+_vm._s(_vm._f("formatMoney")(_vm.allData.total_admin_fee))+" "+_vm._s(_vm.LANG['元'] || '元'))]),_vm._v(" "),_c('span',{staticClass:"ml10 mr10"},[_vm._v(" | ")]),_vm._v(" "),_c('span',{staticClass:"font14 ml10"},[_vm._v(_vm._s(_vm.LANG['优惠稽核'] || '优惠稽核')+" : "+_vm._s(_vm._f("formatMoney")(_vm.allData.total_coupon))+" "+_vm._s(_vm.LANG['元'] || '元'))]),_vm._v(" "),_c('span',{staticClass:"ml10 mr10"},[_vm._v(" | ")]),_vm._v(" "),_c('span',{staticClass:"font14"},[_vm._v(_vm._s(_vm.LANG['出款手续费'] || '出款手续费')+" : "+_vm._s(_vm._f("formatMoney")(_vm.allData.total_fee))+" "+_vm._s(_vm.LANG['元'] || '元'))])])])]):_vm._e(),_vm._v(" "),(_vm.allData.list && _vm.allData.list.length)?_c('tr',{staticClass:"sumdiv ml20",attrs:{"slot":"other","span":12},slot:"other"},[_c('td',{attrs:{"colspan":"9"}},[_c('div',{staticClass:"cell"},[_c('span',{staticClass:"font14"},[_vm._v(_vm._s(_vm.LANG['共需扣除费用'] || '共需扣除费用')+" ："+_vm._s(_vm._f("formatMoney")(_vm.allData.total_fee))+"+"+_vm._s(_vm._f("formatMoney")(_vm.allData.total_admin_fee))+"+"+_vm._s(_vm._f("formatMoney")(_vm.allData.total_coupon))+"\n\t\t\t\t\t\t\t\t= "+_vm._s(_vm._f("formatMoney")(parseInt(_vm.allData.total_coupon + _vm.allData.total_fee + _vm.allData.total_admin_fee)))+" "+_vm._s(_vm.LANG['元'] || '元'))])])])]):_vm._e()])],1)],1)])}
var withdrawInformation_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/userManagement/memberManagement/withdrawInformation.vue
function withdrawInformation_injectStyle (context) {
  __webpack_require__(480)
}
/* script */


/* template */

/* template functional */
var withdrawInformation_vue_template_functional_ = false
/* styles */
var withdrawInformation_vue_styles_ = withdrawInformation_injectStyle
/* scopeId */
var withdrawInformation_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var withdrawInformation_vue_module_identifier_ = null

var withdrawInformation_Component = Object(component_normalizer["a" /* default */])(
  withdrawInformation,
  withdrawInformation_render,
  withdrawInformation_staticRenderFns,
  withdrawInformation_vue_template_functional_,
  withdrawInformation_vue_styles_,
  withdrawInformation_vue_scopeId_,
  withdrawInformation_vue_module_identifier_
)

/* harmony default export */ var memberManagement_withdrawInformation = (withdrawInformation_Component.exports);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/memberManagement/bankDetial.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var bankDetial = ({
  data() {
    return {
      LANG,
      columnsUrl: "",
      tableUrl: "",
      sumArr: [3000, 2700],
      //弹窗相关
      type: "default",
      formTitel: "",
      labelWidth: "90px",
      isEdit: {
        state: false
      },
      formVisible: {
        state: false
      },
      formConfig: [{
        "prop": "bank_id",
        "value": "",
        "label": "银行名称",
        "type": "select",
        "list": [],
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "accountname",
        "value": "",
        "type": "text",
        "label": "户名",
        "disabled": false,
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "card",
        "value": "",
        "type": "account",
        "label": "银行账号",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "address",
        "value": "",
        "type": "text",
        "label": "开户行",
        "rules": [{
          "require": true
        }]
      }],
      formType: "",
      nowId: -1,
      updated: false,
      uid: -1
    };
  },

  props: {
    id: Number
  },
  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    // 页面初始化
    init() {
      this.columnsUrl = "/static/json/accoutManage/memberManagement/bankDetial/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.user.newInfo + "?id=" + parseInt(this.id) + "&type=bank"; //厅主可用银行

      let list = this.formConfig[0].list;
      this.$.autoAjax('get', URL.api + ROUTES.GET.banks, '', {
        ok: res => {
          let model = res.data;

          for (let i in model) {
            list.push({
              "label": model[i].name,
              "value": model[i].id.toString()
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //添加银行
    addBank() {
      if (sessionStorage.role !== '0') {
        if (sessionStorage.bank_card === "false") {
          this.$message.error(this.LANG['您没有修改权限'] || '您没有修改权限');
          return;
        }
      }

      this.formConfig[1]["disabled"] = false;
      this.formTitel = this.LANG['添加银行帐号'] || '添加银行帐号';
      this.formType = "add";
      this.formVisible.state = true;
    },

    //保存弹窗数据
    saveForm(obj) {
      let str = "";
      let blank_url = '';
      let query = {};
      query.bank_id = parseInt(obj.formObj.bank_id, 10);
      query.accountname = obj.formObj.accountname;
      query.address = obj.formObj.address;
      query.card = obj.formObj.card;
      query.uid = this.id;
      query.role = 1; // 后台记录参数需要加上银行名称，匹配当前选择银行

      const enough_bank = bank => bank.value == query.bank_id;

      let bank_list = this.formConfig[0].list.filter(enough_bank);
      query.bank_name = bank_list[0]['label'];
      this.formType == 'add' ? blank_url = URL.api + ROUTES.PUT.user.info : blank_url = URL.api + ROUTES.PUT.user.info + "?id=" + parseInt(this.nowId); //	            blank_url = URL.api + ROUTES.PUT.user.info;

      this.updated = false;
      this.$.autoAjax('put', blank_url, query, {
        ok: res => {
          if (res.state == 0 && res.data) {
            if (this.formType == "add") {
              str = this.LANG['恭喜您，银行帐号添加成功！'] || '恭喜您，银行帐号添加成功！';
            } else {
              str = this.LANG['恭喜您，银行帐号修改成功！'] || '恭喜您，银行帐号修改成功！';
            }

            this.$message.success(str);
            this.updated = true;
          } else if (res.state == 4003 || res.state == 405) {
            if (this.formType == "add") {
              str = this.LANG['银行帐号添加失败，权限不足！'] || '银行帐号添加失败，权限不足！';
            } else {
              str = this.LANG['银行帐号修改失败，权限不足！'] || '银行帐号修改失败，权限不足！';
            }

            this.$message.error(str);
          } else {
            this.$message.error(res.msg);
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //表格点击事件
    doHandle(item) {
      // 判断是否有权限
      if (sessionStorage.role !== '0') {
        if (sessionStorage.bank_card === "false") {
          this.$message.error(this.LANG['您没有修改权限'] || '您没有修改权限');
          return;
        }
      }

      switch (item.fn) {
        case "doEdit":
          // this.$message.error(LANG['权限不足！'] || '权限不足！');
          // return;
          this.doEdit(item.row);
          break;

        case "doDisable":
          this.doDisable(item.row);
          break;

        case "doEnable":
          this.doEnable(item.row);
          break;
      }
    },

    //修改
    doEdit(row) {
      console.log(row);
      this.formConfig[1]["disabled"] = true;
      this.nowId = row.id; //赋初值

      this.formType = "";
      this.formTitel = this.LANG['修改银行帐号'] || '修改银行帐号';
      setTimeout(() => {
        let list = this.formConfig[0].list;

        for (let i in list) {
          if (list[i].label == row['bank_name']) {
            this.formConfig[0]['value'] = list[i].value.toString();
          }
        }

        this.formConfig[1]['value'] = row.accountname;
        this.formConfig[2]['value'] = row['card'];
        this.formConfig[3]['value'] = row['address'];
        this.formType = "edit";
        this.isEdit.state = true;
        this.formVisible.state = true;
      }, 500);
    },

    //停用
    doDisable(row) {
      this.nowId = row.id;

      let _this = this;

      this.updated = false;
      this.$.autoAjax('patch', URL.api + ROUTES.PUT.user.info + "?id=" + parseInt(this.nowId, 10), {
        "status": 0,
        "uid": this.id,
        "role": 1
      }, {
        ok: res => {
          if (res.state != undefined && res.state == 0 && res.state == 0) {
            _this.$message.success(_this.LANG['银行卡停用成功'] || '银行卡停用成功');

            _this.updated = true;
          } else if (res.state == 4003 || res.state == 405) {
            this.$message.error(LANG['银行卡停用失败，权限不足！'] || '银行卡停用失败，权限不足！');
          } else {
            _this.$message.error(_this.LANG['银行卡停用失败，请稍后重试'] || '银行卡停用失败，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PUT.user.info + "?id=" + parseInt(this.nowId, 10), JSON.stringify({"status": 0, "uid": this.id, "role": 1}), URLCONFIG).then((res) => {
      //     if (res.data.state != undefined && res.data.state == 0 && res.data.state == 0) {
      //         _this.$message.success(_this.LANG['银行卡停用成功'] || '银行卡停用成功');
      //         _this.updated = true;
      //     } else if (res.data.state == 4003  || res.data.state == 405 ) {
      //         this.$message.error(LANG['银行卡停用失败，权限不足！'] || '银行卡停用失败，权限不足！');
      //     } else {
      //         _this.$message.error(_this.LANG['银行卡停用失败，请稍后重试'] || '银行卡停用失败，请稍后重试');
      //     }
      // })
    },

    //启用
    doEnable(row) {
      this.nowId = row.id;

      let _this = this;

      this.updated = false;
      this.$.autoAjax('patch', URL.api + ROUTES.PUT.user.info + "?id=" + parseInt(this.nowId, 10), {
        "status": 1,
        "uid": this.id,
        "role": 1
      }, {
        ok: res => {
          if (res.state != undefined && res.state == 0 && res.state == 0) {
            _this.$message.success(_this.LANG['银行卡启用成功'] || '银行卡启用成功');

            _this.updated = true;
          } else if (res.state == 4003 || res.state == 405) {
            this.$message.error(LANG['银行卡启用失败，权限不足！'] || '银行卡启用失败，权限不足！');
          } else {
            _this.$message.error(LANG['银行卡启用失败，请稍后重试'] || '银行卡启用失败，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PUT.user.info + "?id=" + parseInt(this.nowId, 10), JSON.stringify({"status": 1, "uid": this.id, "role": 1}), URLCONFIG).then((res) => {
      //     if (res.data.state != undefined && res.data.state == 0 && res.data.state == 0) {
      //         _this.$message.success(_this.LANG['银行卡启用成功'] || '银行卡启用成功');
      //         _this.updated = true;
      //     } else if (res.data.state == 4003  || res.data.state == 405 ) {
      //         this.$message.error(LANG['银行卡启用失败，权限不足！'] || '银行卡启用失败，权限不足！');
      //     } else {_this.$message.error(LANG['银行卡启用失败，请稍后重试'] || '银行卡启用失败，请稍后重试');}
      // })
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.uid = JSON.parse(sessionStorage.getItem("user")).id || -1;
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4c11d854","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/memberManagement/bankDetial.vue
var bankDetial_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"bankDetail"}},[_c('div',{staticClass:"clearfix"},[_c('el-col',[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.LANG['银行信息'] || '银行信息'))]),_vm._v(" "),_c('div',[_c('span',{staticStyle:{"color":"#ff0000"}},[_vm._v(_vm._s(_vm.LANG['注'] || '注')+":")]),_vm._v(_vm._s(_vm.LANG['当会员存在真实姓名，新增或编辑银行卡默认户名为会员的真实姓名！'] || '当会员存在真实姓名，新增或编辑银行卡默认户名为会员的真实姓名！'))]),_vm._v(" "),_c('div',{staticStyle:{"float":"right"}},[_c('el-button',{staticStyle:{"margin-left":"5px"},attrs:{"type":"primary","size":"small"},on:{"click":_vm.addBank}},[_vm._v(_vm._s(_vm.LANG['新增银行卡'] || '新增银行卡'))])],1)]),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"tableIndex":false,"pageSet":false,"automation":true,"isCreated":true,"updated":_vm.updated,"showRefresh":false},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.saveForm}})],1)],1)])}
var bankDetial_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/userManagement/memberManagement/bankDetial.vue
function bankDetial_injectStyle (context) {
  __webpack_require__(481)
}
/* script */


/* template */

/* template functional */
var bankDetial_vue_template_functional_ = false
/* styles */
var bankDetial_vue_styles_ = bankDetial_injectStyle
/* scopeId */
var bankDetial_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var bankDetial_vue_module_identifier_ = null

var bankDetial_Component = Object(component_normalizer["a" /* default */])(
  bankDetial,
  bankDetial_render,
  bankDetial_staticRenderFns,
  bankDetial_vue_template_functional_,
  bankDetial_vue_styles_,
  bankDetial_vue_scopeId_,
  bankDetial_vue_module_identifier_
)

/* harmony default export */ var memberManagement_bankDetial = (bankDetial_Component.exports);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/memberManagement/memberSet.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var memberSet = ({
  data() {
    return {
      LANG,
      memberForm: {
        state: false,
        online: false,
        is_mtoken_bind: true,
        limit_status: false,
        refuse_withdraw: false,
        refuse_sale: false,
        refuse_rebate: false,
        refuse_transfer: [],
        role: 1
      },
      //停用状态
      Enable: false,
      //页面初始值
      num: 0,
      //系统提示框
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: {}
      },
      option: "",
      loading: false
    };
  },

  props: {
    id: Number
  },
  components: {
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      let _this = this;

      let stat = this.memberForm; //取用户数据

      this.$.autoAjax('get', URL.api + "/user/setting/" + parseInt(this.id), '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data;

            for (let i in model) {
              if (i == 'refuse_withdraw' || i == 'refuse_sale' || i == 'refuse_rebate' || i == "limit_status" || i == 'state' || i == 'is_mtoken_bind') {
                stat[i] = model[i] == '1' ? true : false;
              } else if (i == 'refuse_transfer') {
                stat.refuse_transfer = [];

                for (let k in model[i]) {
                  let label = k;
                  let val = model[i][k] == '1' ? true : false;
                  stat.refuse_transfer.push({
                    label: label,
                    val: val
                  });
                }
              } else {
                stat[i] = model[i];
              } // 特殊处理


              if (i == 'state') {
                this.num = model[i] == '0' ? 1 : 0;
              }
            }

            stat.online = parseInt(stat.online);
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //消息提示
    systemConfrim(fn, val) {
      // this.num ++;
      if (fn == "changeLimit") {
        let msg = "是否确认";
        msg = msg + (val ? "启用" : "停用") + "该会员？";
        this.confirmConfig = {
          state: true,
          msg: msg,
          fn: fn,
          obj: {
            val: val
          }
        };
      } else if (fn == "changeStatus") {
        let msg = "确认";
        msg = msg + (val == 'enable' ? "启用" : "停用") + "该会员的代理功能？";
        this.confirmConfig = {
          state: true,
          msg: msg,
          fn: fn,
          obj: {
            val: val
          }
        };
      } else {
        let msg = "是否确认";

        switch (fn) {
          case "offLine":
            msg = msg + "踢线该会员？";
            break;

          case "releaseRestriction":
            msg = msg + "解除该会员自我登录限制？";
            break;

          case "MremoveBinding":
            msg = msg + "M令牌解绑？";
            break;
        }

        this.confirmConfig = {
          state: true,
          msg: msg,
          fn: fn,
          obj: {
            val: val
          }
        };
      }
    },

    // 权限设置
    saveWithdrawSet(val, key) {
      let str = '',
          state = val ? '启用' : '停用',
          fn = '',
          fn_key = '';

      switch (key) {
        case 'refuse_withdraw':
          str = (LANG['确认'] || '确认') + '"' + (LANG[state] || state) + '"' + (LANG["禁止提款吗?"] || '禁止提款吗?');
          fn = 'refuse_withdraw';
          break;

        case 'refuse_sale':
          str = (LANG['确认'] || '确认') + '"' + (LANG[state] || state) + '"' + (LANG["禁止优惠吗?"] || '禁止优惠吗?');
          fn = 'refuse_sale';
          break;

        case 'refuse_rebate':
          str = (LANG['确认'] || '确认') + '"' + (LANG[state] || state) + '"' + (LANG["禁止返水吗?"] || '禁止返水吗?');
          fn = 'refuse_rebate';
          break;

        default:
          str = (LANG['确认'] || '确认') + '"' + (LANG[state] || state) + '"' + (LANG["禁止" + key + "额度转换吗?"] || '禁止' + key + '额度转换吗?');
          fn = key; // fn_key = key;

          break;
      }

      this.confirmConfig = {
        state: true,
        msg: str,
        fn: fn,
        obj: {
          val: val
        }
      };
    },

    //提示确认后事件
    doConfirm(obj) {
      let str = obj.fn;

      switch (str) {
        case "changeLimit":
          this.changeLimit();
          break;

        case "offLine":
          this.offLine();
          break;

        case "changeStatus":
          this.changeStatus(obj);
          break;

        case "accountStatusSet":
          this.accountStatusSet();
          break;

        case "releaseRestriction":
          this.releaseRestriction();
          break;

        case "MremoveBinding":
          this.MremoveBinding();
          break;

        case "refuse_withdraw":
          this.doProhibit('refuse_withdraw');
          break;

        case "refuse_sale":
          this.doProhibit('refuse_sale');
          break;

        case "refuse_rebate":
          this.doProhibit('refuse_rebate');
          break;

        default:
          this.doProhibit('refuse_transfer', str);
          break;
      }
    },

    //修改代理状态
    changeStatus(obj) {
      let query = {
        id: this.id,
        status: obj.obj.val
      };
      this.$.autoAjax('PUT', URL.api + ROUTES.PUT.state.tatus, query, {
        ok: res => {
          if (res.data && res.state == 0) {
            this.$message.success((obj.obj.val == 'disable' ? "停用" : "启用") + "该会员代理功能成功");
          }

          this.loading = false;
          this.init();
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 禁止设置
    doProhibit(str, fn_key) {
      let status = 0;

      if (!fn_key) {
        status = this.confirmConfig.obj.val ? "1" : "0";
      } else {
        // 当禁止额度的时候处理status参数
        let transfer_arr = [];

        for (let k of this.memberForm.refuse_transfer) {
          if (k.val) {
            transfer_arr.push(k.label);
          }
        }

        status = transfer_arr.join(',');
      }

      let query = {
        ids: this.id.toString(),
        auth: str,
        status: status
      };
      this.loading = true;
      this.$.autoAjax('patch', URL.api + '/user/prohibition/' + parseInt(this.id), query, {
        ok: res => {
          if (res.data && res.state == 0) {
            this.$message.success(this.LANG['权限设置成功'] || '权限设置成功');
          } else if (res.state == 4003 || res.state == 405) {
            this.$message.error(this.LANG['权限设置失败，没有权限'] || '权限设置失败，没有权限');
          } else {
            this.$message.error(this.LANG['权限设置失败，请稍后重试'] || '权限设置失败，请稍后重试');
          }

          this.loading = false;
          this.init();
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //账号状态的启用、停用
    changeLimit() {
      if (!this.memberForm['state']) {
        let _this = this;

        this.$.autoAjax('put', URL.api + ROUTES.PUT.user.setting + parseInt(this.id), {
          "ids": this.id.toString(),
          "state": 1
        }, {
          ok: res => {
            if (res.data && res.state == 0) {
              _this.$message.success(_this.LANG['会员帐号启用成功'] || '会员帐号启用成功');
            } else if (res.state == 4003 || res.state == 405) {
              _this.$message.error(_this.LANG['修改失败，没有权限'] || '修改失败，没有权限');
            } else {
              _this.$message.error(_this.LANG['会员帐号启用失败，请稍后重试'] || '会员帐号启用失败，请稍后重试');
            }

            this.init();
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      } else {
        let _this = this;

        this.$.autoAjax('put', URL.api + ROUTES.PUT.user.setting + parseInt(this.id), {
          "ids": this.id.toString(),
          "state": 0
        }, {
          ok: res => {
            if (res.data && res.state == 0) {
              _this.$message.success(_this.LANG['会员帐号停用成功'] || '会员帐号停用成功');
            } else if (res.state == 4003 || res.state == 405) {
              _this.$message.error(_this.LANG['修改失败，没有权限'] || '修改失败，没有权限');
            } else {
              _this.$message.error(_this.LANG['会员帐号停用失败，请稍后重试'] || '会员帐号停用失败，请稍后重试');
            }

            this.Enable = false;
            this.init();
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      }

      this.confirmConfig = {
        state: false
      };
    },

    //踢出在线
    offLine() {
      let _this = this;

      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.setting + parseInt(this.id), {
        "ids": this.id.toString(),
        "online": 0
      }, {
        ok: res => {
          if (res.data && res.state == 0) {
            _this.memberForm['online'] = false;

            _this.$message.success(_this.LANG['会员踢线成功'] || '会员踢线成功');
          } else if (res.state == 4003 || res.state == 405) {
            _this.$message.error(_this.LANG['修改失败，没有权限'] || '修改失败，没有权限');
          } else {
            _this.$message.error(_this.LANG['会员踢线失败，请稍后重试'] || '会员踢线失败，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //解除限制
    releaseRestriction() {
      let _this = this;

      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.setting + parseInt(this.id), {
        "ids": this.id.toString(),
        "limit_status": 0
      }, {
        ok: res => {
          if (res.data && res.state == 0) {
            _this.memberForm['limit_status'] = false;

            _this.$message.success(_this.LANG['解除用户自我登录限制成功'] || '解除用户自我登录限制成功');
          } else if (res.state == 4003 || res.state == 405) {
            _this.$message.error(_this.LANG['解除用户自我登录限制失败，权限不足'] || '解除用户自我登录限制失败，权限不足');
          } else {
            _this.$message.error(_this.LANG['解除用户自我登录限制失败，请稍后重试'] || '解除用户自我登录限制失败，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 解除M令牌绑定
    MremoveBinding() {
      this.$.autoAjax('post', URL.api + "/admin/login.unbind", {
        "uid": this.memberForm["id"],
        "role": this.memberForm["role"]
      }, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.memberForm['is_mtoken_bind'] = false;
            this.$message.success(this.LANG['解绑成功'] || '解绑成功');
          } else if (res.state == 4003 || res.state == 405) {
            this.$message.error(this.LANG['解绑失败，权限不足'] || '解绑失败，权限不足');
          } else {
            this.$message.error(this.LANG['解绑失败'] || '解绑失败');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 取消确认按钮，确保按钮返回之前状态
    doCancel(obj) {
      let key = obj.fn;

      switch (key) {
        case 'refuse_withdraw':
          this.memberForm.refuse_withdraw = !obj.obj.val;
          break;

        case 'refuse_sale':
          this.memberForm.refuse_sale = !obj.obj.val;
          break;

        case 'refuse_rebate':
          this.memberForm.refuse_rebate = !obj.obj.val;
          break;

        default:
          this.setRefuseTransfer(obj);
      }
    },

    setRefuseTransfer(obj) {
      for (let i of this.memberForm.refuse_transfer) {
        if (obj.fn == i.label) {
          i.val = !obj.obj.val;
        }
      }
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-196b3f1e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/memberManagement/memberSet.vue
var memberSet_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"id":"memberSet"}},[_c('div',{staticClass:"clearfix",staticStyle:{"margin":"0 auto","width":"933px"}},[_c('el-col',[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.LANG['会员设置'] || '会员设置'))])]),_vm._v(" "),_c('el-col',[_c('el-col',{attrs:{"span":6}},[_c('span',[_vm._v(_vm._s(_vm.LANG['帐号状态：'] || '帐号状态：'))]),_vm._v(" "),_c('span',{staticClass:"sucess"},[_vm._v(_vm._s(_vm.memberForm['state']?"启用":"停用"))]),_vm._v(" "),(!_vm.memberForm['state'])?_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.systemConfrim('changeLimit', !_vm.memberForm['state'])}}},[_vm._v(_vm._s(_vm.LANG['启用'] || '启用'))]):_vm._e(),_vm._v(" "),(_vm.memberForm['state'])?_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.systemConfrim('changeLimit', !_vm.memberForm['state'])}}},[_vm._v(_vm._s(_vm.LANG['停用'] || '停用'))]):_vm._e()],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('span',[_vm._v(_vm._s(_vm.LANG['代理状态：'] || '代理状态：'))]),_vm._v(" "),_c('span',{staticClass:"sucess"},[_vm._v(_vm._s(_vm.memberForm['agent_status']=='wait'?'待审核':_vm.memberForm['agent_status']=='enable'?"启用":"停用"))]),_vm._v(" "),(_vm.memberForm['agent_status'] =='disable')?_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.systemConfrim('changeStatus', 'enable')}}},[_vm._v(_vm._s(_vm.LANG['启用'] || '启用'))]):_vm._e(),_vm._v(" "),(_vm.memberForm['agent_status'] =='enable')?_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.systemConfrim('changeStatus', 'disable')}}},[_vm._v(_vm._s(_vm.LANG['停用'] || '停用'))]):_vm._e(),_vm._v(" "),(_vm.memberForm['agent_status'] =='wait')?_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.systemConfrim('changeStatus', 'enable')}}},[_vm._v(_vm._s(_vm.LANG['启用'] || '启用'))]):_vm._e()],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('span',{staticStyle:{"margin-right":"10px"}},[_vm._v(_vm._s(_vm.LANG['M令牌状态：'] || 'M令牌状态：'))]),_vm._v(" "),_c('span',{staticClass:"sucess"},[_vm._v(_vm._s(_vm.memberForm['is_mtoken_bind']?"已绑定":"未绑定"))]),_vm._v(" "),(_vm.memberForm['is_mtoken_bind'])?_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.systemConfrim('MremoveBinding')}}},[_vm._v(_vm._s(_vm.LANG['解绑'] || '解绑'))]):_vm._e()],1),_vm._v(" "),_c('el-col',{attrs:{"span":6}},[_c('span',{staticStyle:{"margin-right":"10px"}},[_vm._v(_vm._s(_vm.LANG['在线状态：'] || '在线状态：'))]),_vm._v(" "),_c('span',{staticClass:"sucess"},[_vm._v(_vm._s(_vm.memberForm['online']?"在线":"离线"))]),_vm._v(" "),(_vm.memberForm['online'])?_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":function($event){return _vm.systemConfrim('offLine')}}},[_vm._v(_vm._s(_vm.LANG['踢出'] || '踢出'))]):_vm._e()],1),_vm._v(" "),_c('el-form',{staticClass:"form",staticStyle:{"margin-top":"50px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['权限设置'] || '权限设置'}},[_c('el-checkbox',{on:{"change":function($event){return _vm.saveWithdrawSet(_vm.memberForm.refuse_withdraw,'refuse_withdraw')}},model:{value:(_vm.memberForm.refuse_withdraw),callback:function ($$v) {_vm.$set(_vm.memberForm, "refuse_withdraw", $$v)},expression:"memberForm.refuse_withdraw"}},[_vm._v(_vm._s(_vm.LANG['禁止提款'] || '禁止提款'))]),_vm._v(" "),_c('el-checkbox',{on:{"change":function($event){return _vm.saveWithdrawSet(_vm.memberForm.refuse_sale,'refuse_sale')}},model:{value:(_vm.memberForm.refuse_sale),callback:function ($$v) {_vm.$set(_vm.memberForm, "refuse_sale", $$v)},expression:"memberForm.refuse_sale"}},[_vm._v(_vm._s(_vm.LANG['禁止优惠'] || '禁止优惠'))]),_vm._v(" "),_c('el-checkbox',{on:{"change":function($event){return _vm.saveWithdrawSet(_vm.memberForm.refuse_rebate,'refuse_rebate')}},model:{value:(_vm.memberForm.refuse_rebate),callback:function ($$v) {_vm.$set(_vm.memberForm, "refuse_rebate", $$v)},expression:"memberForm.refuse_rebate"}},[_vm._v(_vm._s(_vm.LANG['禁止返水'] || '禁止返水'))])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['禁止额度转换'] || '禁止额度转换'}},_vm._l((_vm.memberForm.refuse_transfer),function(item){return _c('el-checkbox',{key:item.label,on:{"change":function($event){return _vm.saveWithdrawSet(item.val, item.label)}},model:{value:(item.val),callback:function ($$v) {_vm.$set(item, "val", $$v)},expression:"item.val"}},[_vm._v(_vm._s(item.label))])}),1)],1)],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm,"do-cancel":_vm.doCancel}})],1)],1)])}
var memberSet_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/userManagement/memberManagement/memberSet.vue
function memberSet_injectStyle (context) {
  __webpack_require__(482)
}
/* script */


/* template */

/* template functional */
var memberSet_vue_template_functional_ = false
/* styles */
var memberSet_vue_styles_ = memberSet_injectStyle
/* scopeId */
var memberSet_vue_scopeId_ = "data-v-196b3f1e"
/* moduleIdentifier (server only) */
var memberSet_vue_module_identifier_ = null

var memberSet_Component = Object(component_normalizer["a" /* default */])(
  memberSet,
  memberSet_render,
  memberSet_staticRenderFns,
  memberSet_vue_template_functional_,
  memberSet_vue_styles_,
  memberSet_vue_scopeId_,
  memberSet_vue_module_identifier_
)

/* harmony default export */ var memberManagement_memberSet = (memberSet_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/memberManagement/memberManagementDetial.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var memberManagementDetial = ({
  data() {
    return {
      LANG,
      activeName: "basicInformation"
    };
  },

  props: {
    nowId: Number,
    username: String
  },
  components: {
    sInformation: memberManagement_statisticalInformation,
    basicInformation: memberManagement_basicInformation,
    accountBalance: memberManagement_accountBalance,
    memberManagement: memberManagement_withdrawInformation,
    bankDetail: memberManagement_bankDetial,
    memberSet: memberManagement_memberSet
  },
  methods: {
    init() {},

    //返回会员管理页面
    returnPage() {
      this.$emit('return-page');
    },

    //标签点击事件
    tabClick() {}

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b8212bd4","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/memberManagement/memberManagementDetial.vue
var memberManagementDetial_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"memberManagementDetia"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-button',{staticClass:"bankBtn pRight20",attrs:{"type":"primary","icon":"arrow-left","size":"small"},on:{"click":_vm.returnPage}},[_vm._v(_vm._s(_vm.LANG['返 回'] || '返 回')+"\n            ")])],1),_vm._v(" "),_c('el-col',{staticClass:"mt20",attrs:{"span":24}},[_c('div',{staticClass:"bg-purple-dark userTitle pleft"},[_vm._v("当前:"),_c('el-tag',{staticClass:"font14 ml10 mr10",attrs:{"type":"primary","color":"#fff"}},[_vm._v(_vm._s(_vm.username))]),_vm._v(_vm._s(_vm.LANG['用户资料'] || '用户资料'))],1),_vm._v(" "),_c('el-tabs',{staticClass:"w100",attrs:{"type":"border-card"},on:{"tab-click":_vm.tabClick},model:{value:(_vm.activeName),callback:function ($$v) {_vm.activeName=$$v},expression:"activeName"}},[_c('el-tab-pane',{attrs:{"label":_vm.LANG['基本资料'] || '基本资料',"name":"basicInformation"}},[_c('basicInformation',{attrs:{"id":_vm.nowId}})],1),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":_vm.LANG['帐户余额'] || '帐户余额',"name":"accountBalance"}},[_c('accountBalance',{attrs:{"id":_vm.nowId,"username":_vm.username}})],1),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":_vm.LANG['取款稽核信息'] || '取款稽核信息',"name":"memberManagement"}},[_c('memberManagement',{attrs:{"id":_vm.nowId}})],1),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":_vm.LANG['银行信息'] || '银行信息',"name":"bankDetail"}},[_c('bankDetail',{attrs:{"id":_vm.nowId}})],1),_vm._v(" "),_c('el-tab-pane',{attrs:{"label":_vm.LANG['会员设置'] || '会员设置',"name":"memberSet"}},[_c('memberSet',{attrs:{"id":_vm.nowId}})],1)],1)],1)],1)],1)}
var memberManagementDetial_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/userManagement/memberManagement/memberManagementDetial.vue
function memberManagementDetial_injectStyle (context) {
  __webpack_require__(476)
}
/* script */


/* template */

/* template functional */
var memberManagementDetial_vue_template_functional_ = false
/* styles */
var memberManagementDetial_vue_styles_ = memberManagementDetial_injectStyle
/* scopeId */
var memberManagementDetial_vue_scopeId_ = "data-v-b8212bd4"
/* moduleIdentifier (server only) */
var memberManagementDetial_vue_module_identifier_ = null

var memberManagementDetial_Component = Object(component_normalizer["a" /* default */])(
  memberManagementDetial,
  memberManagementDetial_render,
  memberManagementDetial_staticRenderFns,
  memberManagementDetial_vue_template_functional_,
  memberManagementDetial_vue_styles_,
  memberManagementDetial_vue_scopeId_,
  memberManagementDetial_vue_module_identifier_
)

/* harmony default export */ var memberManagement_memberManagementDetial = (memberManagementDetial_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/memberManagement/memberManagement.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var memberManagement = ({
  data() {
    return {
      LANG,
      //是否显示详情
      isDetail: false,
      isCreated: false,
      //数据接口地址
      tableUrl: "",
      //列配置接口地址
      columnsUrl: "",
      //批量操作按钮
      tabOperation: [{
        "label": "批量踢线",
        "fn": "doOffline"
      }, {
        "label": "批量停用",
        "fn": "doStop"
      }, {
        "label": "发送消息",
        "fn": "doSendMsg"
      }, {
        "label": "调整余额",
        "fn": "doAllAdjustedBalance"
      }],
      //搜索条件
      type: "search",
      formTitel: "",
      labelWidth: "90px",
      isEdit: {},
      formVisible: {
        state: false
      },
      searchConfig: [{
        "prop": "similar",
        "value": "",
        "type": "checkbox",
        "label": "查询配置",
        "valLabel": "模糊查询用户名"
      }, {
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "用户名"
      }, {
        "prop": "ip",
        "value": "",
        "label": "最后登录IP",
        "type": "text"
      }, {
        "prop": "online",
        "value": '',
        "label": "在线状态",
        "type": "select",
        "list": ARRAYS.onlineState1,
        "isDefault": true
      }, {
        "prop": "state",
        "value": '',
        "label": "帐号状态",
        "type": "select",
        "list": [{
          "label": "全部",
          "value": ""
        }, {
          "label": "启用",
          "value": '1'
        }, {
          "label": "停用",
          "value": '0'
        }, {
          "label": "封号",
          "value": '4'
        }],
        "isDefault": true
      }, {
        "prop": "agent",
        "value": "",
        "type": "text",
        "label": "上级代理"
      }, {
        "prop": "agent_id",
        "value": "",
        "type": "checkbox",
        "label": "",
        "valLabel": "直属用户"
      }, {
        "type": "dateGroup",
        "label": "注册时间",
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
        "prop": "channel",
        "value": "",
        "label": "注册来源",
        "type": "select",
        "list": ARRAYS.PALYCHANNEL
      }, {
        "prop": "tags",
        "value": "",
        "label": "标签",
        "type": "select",
        "list": []
      }, {
        "prop": "type",
        "value": "",
        "label": "扩展搜索",
        "type": "selectString",
        "list": [{
          'label': '真实姓名',
          'value': 'pname'
        }, {
          'label': '手机',
          'value': 'moblie'
        }, {
          'label': '银行卡',
          'value': 'card'
        }, {
          'label': '邮箱',
          'value': 'email'
        }, {
          'label': 'QQ',
          'value': 'qq'
        }, {
          'label': '微信',
          'value': 'weixin'
        }],
        'propInput': "keyVal",
        'Inputplaceholder': "请输入关键字"
      }],
      nowId: -1,
      username: "",
      //打标签
      //标签列表
      labelList: [],
      labelVisible: false,
      labelform: {
        name: "",
        lid: ""
      },
      //系统提示
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: {}
      },
      baseUrl: "",
      routeQuery: {},
      updated: false,
      formType: "",
      // 会员限额
      limitVisible: false,
      limitform: {
        name: "",
        id: ""
      },
      limitList: [],
      cancelLimitVisible: true,
      // 子钱包显示数据
      hoverData: [],
      // 存储查询条件
      query: {},
      updateKeys: ''
    };
  },

  props: {
    userid: Number
  },
  components: {
    tablegrid: tableGrid["a" /* default */],
    memberManagementDetial: memberManagement_memberManagementDetial,
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      this.isCreated = true;
      this.routeQuery = this.$route.query;
      this.baseUrl = URL.api + ROUTES.GET.user.list;

      if (this.routeQuery.userId > 0 && this.routeQuery.isDetail) {
        this.doDetial({
          "id": this.routeQuery.userId
        });
      } // 检测this.$route.query各个属性是否有值是否有值，正常路由进来


      if (JSON.stringify(this.$route.query) == "{}") {
        this.query = {
          "online": '1',
          "state": '1'
        };
        this.tableUrl = URL.api + ROUTES.GET.user.list + this.addSearch({
          "online": '1',
          "state": '1'
        });
      }

      this.columnsUrl = "/static/json/accoutManage/memberManagement/columns.json";
      this.getLables();
      this.getLimitModel();

      if (this.userid > 0) {
        this.nowId = this.userid;
        this.isCreated = false;
        this.isDetail = true;
      }
    },

    //执行查询
    doQuery(obj) {
      // 处理金额
      let query = this.query = {};

      for (let i in obj.item) {
        // 这里需要判断的原因是因为ele-ui的组件传回来的值时false和true，而后台只接受int类型的参数，所以在这里转换
        if (i === "similar") {
          query[i] = obj.item[i] ? 1 : 0;
        } else if (i === 'agent_id') {
          // 是否勾选直属用户
          query['agent_id'] = obj.item[i] ? 0 : null;
        } else if (obj.item[i] || obj.item[i] == 0) {
          query[i] = obj.item[i];
        }
      } // 搜索框去掉余额的搜索，这里余额的金额转换注释掉
      // query.balance_from = query.balance_from == "" ? "" : query.balance_from * 100;
      // query.balance_to = query.balance_to == "" ? "" : query.balance_to * 100;


      this.tableUrl = this.baseUrl + this.addSearch(query);
    },

    //导出EXCEL
    outputExcel() {},

    // 获取标签
    getLables() {
      // 获取会员标签列表
      this.$.autoAjax('get', URL.api + ROUTES.GET.user.labels, '', {
        ok: res => {
          this.labelList = [];
          this.searchConfig[9].list = [];
          let model = res.data;
          this.searchConfig[9].list.push({
            "label": "全部",
            "value": ""
          });

          for (let i in model) {
            this.labelList.push({
              "label": model[i].title,
              "value": model[i].id
            });
            this.searchConfig[9].list.push({
              "label": model[i].title,
              "value": model[i].title
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 获取彩票模版（限额操作用）
    getLimitModel() {
      this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.template, '', {
        ok: res => {
          if (res.state === 0) {
            this.limitList = [];
            let model = res.data;

            for (let i of model) {
              // 派出默认的彩票模版
              if (i.t_id != "1") {
                this.limitList.push({
                  "id": parseInt(i.t_id),
                  "name": i.t_name
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

    //表格内按钮事件
    doHandle(e) {
      switch (e.fn) {
        // 打标签
        case "doAddLabel":
          this.doAddLabel(e.row);
          break;
        // 会员详情

        case "doDetial":
          this.doDetial(e.row);
          break;
        // 调整余额

        case "doAdjustedBalance":
          this.doAdjustedBalance(e.row);
          break;
        // 跳转代理

        case "openAgentInformation":
          this.openAgentInformation(e.row);
          break;
        // 跳转注单查询

        case "doNoteManagement":
          this.doNoteManagement(e.row);
          break;
        // 跳转现金流水

        case "doFundDetails":
          this.doFundDetails(e.row);
          break;
        // 启用和停用

        case "doEnabled":
          this.doEnabled(e.row);
          break;

        case "doDisabled":
          this.doDisabled(e.row);
          break;
        // 封号和解封

        case "doSeal":
          this.doSeal(e.row);
          break;

        case "doUnlock":
          this.doUnlock(e.row);
          break;
        // 取消标签

        case "doCancelLabel":
          this.doCancelLabel(e.row);
          break;
        // 限额

        case "doLimitLines":
          this.doLimitLines(e.row);
          break;
        // 限额

        case "showSubPurse":
          this.showSubPurse(e);
          break;
      }
    },

    // 显示子钱包
    showSubPurse(i) {
      let row = i.row;
      this.hoverData = [];
      let hoverData = this.hoverData;
      this.$.autoAjax('get', URL.api + '/cash/funds/secondary?wallet_id=' + parseInt(row.wallet_id), '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let list = res.data || [];

            for (let k in list) {
              hoverData.push({
                "label": list[k].gameType,
                "value": FORMATMONEY(list[k].balance)
              });
            }
          } else {
            this.$message.error(LANG["会员打标签失败！"] || "会员打标签失败！");
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //打标签
    doAddLabel(row) {
      this.nowId = row.id;
      this.labelVisible = true;
      this.labelform.name = row["username"];

      if (row.tags) {
        for (let k = 0; k < this.labelList.length; k++) {
          if (this.labelList[k].label === row["tags"]) {
            this.labelform.lid = this.labelList[k].value.toString();
          }
        }
      } else {
        this.labelform.lid = '';
      }
    },

    // 取消标签
    doCancelLabel(row) {
      this.nowId = parseInt(row.id);

      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定取消标签'] || '确定取消标签') + '"' + row.tags + '"' + (this.LANG['吗'] || '吗') + "?";
        this.confirmConfig.fn = "cancelLabel";
      }
    },

    //保存标签
    saveLabels() {
      this.updated = false;
      this.$.autoAjax('put', URL.api + ROUTES.PUT.user.label.bind + '?id=' + parseInt(this.nowId, 10), {
        "tag": parseInt(this.labelform.lid, 10)
      }, {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.$message.success(LANG["恭喜您，会员打标签成功！"] || "恭喜您，会员打标签成功！");
            this.labelVisible = false;
            this.updated = true;
          } else if (res.state === 4001) {
            this.$message.error(LANG["请至少选择一个标签！"] || "请至少选择一个标签！");
          } else if (res.state == 405) {
            this.$message.error(LANG["打标签失败，权限不足"] || "打标签失败，权限不足！");
          } else {
            this.$message.error(LANG["会员打标签失败！"] || "会员打标签失败！");
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //资料
    doDetial(row) {
      this.nowId = parseInt(row.id);
      this.username = row.username;
      this.isCreated = false;
      this.isDetail = true;
    },

    //返回列表
    returnPage() {
      this.updateKeys = '';
      let updateKeys = '';

      for (let i in this.query) {
        if (i === "similar") {
          updateKeys = updateKeys + i + ',' + (this.query[i] ? true : false) + ',';
        } else if (i === 'agent_id') {
          updateKeys = updateKeys + i + ',' + (this.query[i] === 0 ? true : false) + ',';
        } else if (this.query[i]) {
          updateKeys = updateKeys + i + ',' + this.query[i] + ',';
        }
      }

      setTimeout(() => {
        this.updateKeys = updateKeys;
      }, 500);
      this.isDetail = false;
      this.isCreated = true;
      this.tableUrl = this.baseUrl + this.addSearch(this.query);
    },

    //批量操作按钮
    doOperation(list) {
      this.selectedrows = [];
      this.selectedrows = list.rows;
      this.operationType = list.fn;

      switch (list.fn) {
        case "doOffline":
          this.doConfrim(list.fn);
          break;

        case "doStop":
          this.doConfrim(list.fn);
          break;

        case "doSendMsg":
          this.doSendMsg();
          break;

        case "doAllAdjustedBalance":
          this.doAllAdjustedBalance();
          break;
      }
    },

    //批量踢线
    doOffline() {
      let _this = this;

      let rows = this.selectedrows;
      let ids_arr = [];

      for (let i in rows) {
        ids_arr.push(rows[i].id);
      }

      let ids = ids_arr.join(',');
      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.info.$, {
        "ids": ids,
        "operation": 3
      }, {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.$message.success(LANG["恭喜您，所选会员踢线成功！"] || "恭喜您，所选会员踢线成功！");
          } else if (res.state == 405) {
            _this.$message.error(LANG["所选会员踢线失败,权限不足！"] || "所选会员踢线失败,权限不足！");
          } else {
            _this.$message.error(LANG["所选会员踢线失败,请稍后重试！"] || "所选会员踢线失败,请稍后重试！");
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //批量停用
    doStop() {
      let _this = this;

      let rows = this.selectedrows;
      let ids_arr = [];

      for (let i in rows) {
        ids_arr.push(rows[i].id);
      }

      let ids = ids_arr.join(',');
      this.$.autoAjax('', URL.api + ROUTES.GET, {
        "ids": ids,
        "operation": 2
      }, {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.$message.success(LANG["恭喜您，所选会员踢线成功！"] || "恭喜您，所选会员踢线成功！");
          } else if (res.state == 405) {
            _this.$message.error(LANG["所选会员踢线失败,权限不足！"] || "所选会员踢线失败,权限不足！");
          } else {
            _this.$message.error(LANG["所选会员踢线失败,请稍后重试！"] || "所选会员踢线失败,请稍后重试！");
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //批量调整余额
    doAllAdjustedBalance() {
      let rows = this.selectedrows;
      this.$router.push({
        path: "/manual",
        query: {
          userId: this.selectedrows,
          username: rows["user_name"],
          type: "会员"
        }
      });
    },

    //提示确认事件
    doConfrim(fn) {
      let msg = "";

      switch (fn) {
        case "doOffline":
          msg = LANG["是否确认踢线选中的会员"] || "是否确认踢线选中的会员";
          break;

        case "doStop":
          msg = this.confrimContent = LANG["是否确认批量停用选中的会员"] || "是否确认批量停用选中的会员";
          break;
      }

      this.confirmConfig = {
        state: true,
        msg: msg,
        fn: fn
      };
    },

    saveConfirm(obj) {
      let fn = obj.fn;

      switch (fn) {
        case "doOffline":
          this.doOffline();
          break;

        case "doStop":
          this.doStop();
          break;

        case "cancelLabel":
          this.updated = false;
          this.$.autoAjax('put', URL.api + ROUTES.PUT.user.label.bind + '?id=' + parseInt(this.nowId, 10), {
            "tag": 0
          }, {
            ok: res => {
              if (res.state == 0 && res.data) {
                this.$message.success(LANG["恭喜您，会员标签取消成功！"] || "恭喜您，会员标签取消成功！");
                this.labelVisible = false;
                this.updated = true;
              } else if (res.state == 405) {
                this.$message.error(LANG["会员标签取消失败,权限不足！"] || "会员标签取消失败,权限不足！");
              } else {
                this.$message.error(LANG["会员标签取消失败！"] || "会员标签取消失败！");
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          break;
      }
    },

    //doSendMsg 发送消息
    doSendMsg() {
      let rows = this.selectedrows;
      this.$router.push({
        path: "/notice",
        query: {
          userId: this.selectedrows,
          username: rows["user_name"],
          type: "会员"
        }
      });
    },

    //重置查询
    resetForm(obj) {
      this.updateKeys = '';
      let query = {};

      if (!this.$route.query.agent && !this.$route.query.name && !this.$route.query.level) {
        this.query = {
          "online": '',
          "state": ''
        }; //注释的内容为在线状态 在线和帐号状态 启用
        //this.tableUrl = URL.api + ROUTES.GET.user.list + this.addSearch({"online": '1', "state": '1'});

        this.tableUrl = URL.api + ROUTES.GET.user.list; //                    query.online = '1';
        //                    query.state = '1';
        //                    setTimeout(() => {
        //                        this.updateKeys = 'online,1,state,1,register_from,,register_to,,';
        //                    }, 500)
      } else {
        setTimeout(() => {
          this.updateKeys = 'redirect,,';
        }, 500);
      }

      this.query = query;
    },

    //调整余额
    doAdjustedBalance(row) {
      this.$router.push({
        path: "/manual",
        query: {
          username: row["username"],
          role: "1"
        }
      });
    },

    //跳转代理页面
    openAgentInformation(row) {
      this.$router.push({
        path: "/agentAccount",
        query: {
          agent_name: row.agent
        }
      });
    },

    // 跳转注单查询
    doNoteManagement(row) {
      this.$router.push({
        path: "/noteManagement",
        query: {
          user_name: row.username
        }
      });
    },

    // 跳转现金流水
    doFundDetails(row) {
      this.$router.push({
        path: "/fundDetails",
        query: {
          username: row.username
        }
      });
    },

    // 会员账号的启用和停用
    doEnabled(row) {
      this.updated = false;
      this.$.autoAjax('put', URL.api + ROUTES.PUT.user.setting + parseInt(row.id), {
        "ids": row.id.toString(),
        "state": 1
      }, {
        ok: res => {
          if (res.state != undefined && res.state == 0) {
            this.$message.success(this.LANG['会员帐号启用成功'] || '会员帐号启用成功');
            this.updated = true;
          } else if (res.state == 4003 || res.state == 405) {
            this.$message.error(this.LANG['会员帐号启用失败，权限不足'] || '会员帐号启用失败，权限不足');
          } else {
            this.$message.error(this.LANG['会员帐号启用失败，请稍后重试'] || '会员帐号启用失败，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    doDisabled(row) {
      this.updated = false;
      this.$.autoAjax('put', URL.api + ROUTES.PUT.user.setting + parseInt(row.id), {
        "ids": row.id.toString(),
        'state': 0
      }, {
        ok: res => {
          if (res.state != undefined && res.state == 0) {
            this.$message.success(this.LANG['会员帐号停用成功'] || '会员帐号停用成功');
            this.updated = true;
          } else if (res.state == 4003 || res.state == 405) {
            this.$message.error(this.LANG['会员帐号停用失败，权限不足'] || '会员帐号停用失败，权限不足');
          } else {
            this.$message.error(this.LANG['会员帐号停用失败，请稍后重试'] || '会员帐号停用失败，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 封号
    doSeal(row) {
      this.updated = false;
      this.$.autoAjax('put', URL.api + ROUTES.PUT.user.setting + parseInt(row.id), {
        "ids": row.id.toString(),
        'state': 4
      }, {
        ok: res => {
          if (res.state != undefined && res.state == 0) {
            this.$message.success(this.LANG['会员帐号封号成功'] || '会员帐号封号成功');
            this.updated = true;
          } else if (res.state == 4003 || res.state == 405) {
            this.$message.error(this.LANG['会员帐号封号失败，权限不足'] || '会员帐号封号失败，权限不足');
          } else {
            this.$message.error(this.LANG['会员帐号封号失败，请稍后重试'] || '会员帐号封号失败，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 解封
    doUnlock(row) {
      this.updated = false;
      this.$.autoAjax('put', URL.api + ROUTES.PUT.user.setting + parseInt(row.id), {
        "ids": row.id.toString(),
        'state': 1
      }, {
        ok: res => {
          if (res.state != undefined && res.state == 0) {
            this.$message.success(this.LANG['会员帐号解封成功'] || '会员帐号解封成功');
            this.updated = true;
          } else if (res.state == 4003 || res.state == 405) {
            this.$message.error(this.LANG['会员帐号解封失败，权限不足'] || '会员帐号解封失败，权限不足');
          } else {
            this.$message.error(this.LANG['会员帐号解封失败，请稍后重试'] || '会员帐号解封失败，请稍后重试');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 限额
    doLimitLines(row) {
      this.nowId = row.id;
      this.limitform["name"] = row.username;
      this.limitform["id"] = ""; // 判断用户是否已经绑定模版

      this.cancelLimitVisible = row.tid ? true : false;

      if (row.tid) {
        this.cancelLimitVisible = true;
        this.limitform["id"] = parseInt(row.tid);
      } else {
        this.cancelLimitVisible = false;
        this.limitform["id"] = "";
      }

      this.limitVisible = true;
    },

    saveLimit() {
      if (this.limitform["id"] === "") {
        this.$message.error(LANG["请至少选中一个模版"] || "请至少选中一个模版");
        return;
      }

      this.updated = false;
      this.$.autoAjax('put', URL.api + '/lottery/template.users', {
        "tid": parseInt(this.limitform.id),
        "user_id": this.nowId
      }, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(LANG["恭喜您，会员限额成功！"] || "恭喜您，会员限额成功！");
            this.updated = true;
          } else if (res.state == 405) {
            this.$message.error(LANG["会员限额失败,权限不足！"] || "会员限额失败,权限不足！");
          } else {
            this.$message.error(LANG["会员限额失败！"] || "会员限额失败！");
          }

          this.limitVisible = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    cancelLimit() {
      let arr = [];
      arr.push(this.nowId);
      this.updated = false;
      this.$.autoAjax('post', URL.api + '/lottery/template.users', {
        "user_id": arr
      }, {
        ok: res => {
          if (res.state === 0) {
            this.$message.success(LANG["恭喜您，会员取消限额成功！"] || "恭喜您，会员取消限额成功！");
            this.limitform["id"] = "";
            this.cancelLimitVisible = false;
            this.updated = true;
          } else if (res.state == 405) {
            this.$message.error(LANG["会员取消限额失败,权限不足！"] || "会员取消限额失败,权限不足！");
          } else {
            this.$message.error(LANG["会员取消限额失败！"] || "会员取消限额失败！");
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    // 新窗口打开游戏模版
    gotoLotteryOdds(id, name) {
      window.open(window.location.origin + '/lotteryOdds?id=' + id + '&name=' + name);
    },

    // 代理页面跳转修改相关值
    setAllForm(form) {
      for (let k in form) {
        if (k === 'agent' && this.$route.query.agent) {
          form[k] = this.$route.query.agent || '';
        } else if (k === 'name' && this.$route.query.name) {
          form[k] = this.$route.query.name || '';
        } else if (k === 'level' && this.$route.query.level) {
          form[k] = this.$route.query.level || '';
        } else {
          form[k] = '';
        }
      }
    }

  },

  mounted() {
    $(() => {
      let btn = document.getElementsByClassName('popover_diy_btn')[0];
    });
  },

  created() {
    this.init();
  },

  activated() {
    this.updated = false;
    this.updateKeys = ''; // 确保任何页面返回会员管理页面显示的是列表页

    if (this.isDetail) this.returnPage();
    this.isCreated = false;
    this.getLables();
    this.getLimitModel();
    this.searchConfig[5]['value'] = '';
    this.searchConfig[1]['value'] = '';
    this.searchConfig[6]['value'] = '';
    this.searchConfig[3]['value'] = '';
    this.searchConfig[4]['value'] = '';
    this.formType = 'update' + (Math.random() * 9 + 1);

    if (this.$route.query.agent) {
      this.searchConfig[5]['value'] = this.$route.query.agent;
      this.tableUrl = URL.api + ROUTES.GET.user.list + "?agent=" + this.$route.query.agent;
    } else {
      this.init();
    }

    ;

    if (this.$route.query.name) {
      this.searchConfig[1]['value'] = this.$route.query.name;
      this.tableUrl = URL.api + ROUTES.GET.user.list + "?name=" + this.$route.query.name;
    } else {
      this.init();
    }

    ;

    if (this.$route.query.level) {
      this.searchConfig[6]['value'] = this.$route.query.level.toString();
      this.tableUrl = URL.api + ROUTES.GET.user.list + "?level=" + this.$route.query.level;
    } else {
      this.init();
    }

    ;
    setTimeout(() => {
      this.updated = true;
    }, 500);
  },

  deactivated() {
    this.$route.query.agent = null;
    this.$route.query.name = null;
    this.$route.query.level = null;
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cd6fe34e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/memberManagement/memberManagement.vue
var memberManagement_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page w100",attrs:{"id":"memberManagement"}},[(!_vm.isDetail)?_c('div',[_c('div',[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"updateKeys":_vm.updateKeys,"initDate":true,"formType":_vm.formType,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableIndex":false,"tableUrl":_vm.tableUrl,"tabOperation":_vm.tabOperation,"updated":_vm.updated,"isCreated":_vm.isCreated,"hoverData":_vm.hoverData},on:{"do-operation":_vm.doOperation,"do-handle":_vm.doHandle}})],1)],1):_vm._e(),_vm._v(" "),(_vm.isDetail)?_c('el-col',[_c('memberManagementDetial',{attrs:{"nowId":_vm.nowId,"username":_vm.username},on:{"return-page":_vm.returnPage}})],1):_vm._e(),_vm._v(" "),(!_vm.isDetail)?_c('el-col',{staticClass:"makeTag"},[_c('el-dialog',{attrs:{"title":"打标签","size":"tiny"},model:{value:(_vm.labelVisible),callback:function ($$v) {_vm.labelVisible=$$v},expression:"labelVisible"}},[_c('el-form',{ref:"labelform",attrs:{"model":_vm.labelform,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['用户名'] || '用户名'}},[_c('span',[_vm._v(_vm._s(_vm.labelform.name))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['标签'] || '标签',"prop":"lid"}},[_c('el-select',{attrs:{"placeholder":_vm.LANG['请选择标签'] || '请选择标签'},model:{value:(_vm.labelform.lid),callback:function ($$v) {_vm.$set(_vm.labelform, "lid", $$v)},expression:"labelform.lid"}},_vm._l((_vm.labelList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.labelVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveLabels}},[_vm._v("确 定")])],1)],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"会员限额","size":"tiny"},model:{value:(_vm.limitVisible),callback:function ($$v) {_vm.limitVisible=$$v},expression:"limitVisible"}},[_c('el-form',{ref:"limitform",attrs:{"model":_vm.limitform,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['会员账号'] || '会员账号'}},[_c('span',[_vm._v(_vm._s(_vm.limitform.name))])]),_vm._v(" "),_c('div',{staticStyle:{"border-bottom":"1px solid #ccc","line-hieght":"30px"}},[_vm._v("彩票")]),_vm._v(" "),_c('el-radio-group',{model:{value:(_vm.limitform.id),callback:function ($$v) {_vm.$set(_vm.limitform, "id", $$v)},expression:"limitform.id"}},_vm._l((_vm.limitList),function(item,index){return _c('div',{key:index,staticStyle:{"margin":"5px 0","height":"20px"}},[_c('div',{staticClass:"fl"},[_c('el-radio',{attrs:{"label":item.id}},[_c('span')])],1),_vm._v(" "),_c('div',{staticStyle:{"float":"left","width":"400px","height":"20px","font-size":"14px","line-height":"20px","margin-left":"15px","cursor":"pointer"},on:{"click":function($event){return _vm.gotoLotteryOdds(item.id, item.name)}}},[_vm._v("\n                            "+_vm._s(item.name)+"\n                        ")])])}),0)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.limitVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveLimit}},[_vm._v("确 定")]),_vm._v(" "),(_vm.cancelLimitVisible)?_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.cancelLimit}},[_vm._v("解除绑定")]):_vm._e()],1)],1)],1):_vm._e(),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.saveConfirm}})],1)],1)}
var memberManagement_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/userManagement/memberManagement/memberManagement.vue
function memberManagement_injectStyle (context) {
  __webpack_require__(475)
}
/* script */


/* template */

/* template functional */
var memberManagement_vue_template_functional_ = false
/* styles */
var memberManagement_vue_styles_ = memberManagement_injectStyle
/* scopeId */
var memberManagement_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var memberManagement_vue_module_identifier_ = null

var memberManagement_Component = Object(component_normalizer["a" /* default */])(
  memberManagement,
  memberManagement_render,
  memberManagement_staticRenderFns,
  memberManagement_vue_template_functional_,
  memberManagement_vue_styles_,
  memberManagement_vue_scopeId_,
  memberManagement_vue_module_identifier_
)

/* harmony default export */ var memberManagement_memberManagement = __webpack_exports__["default"] = (memberManagement_Component.exports);


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);