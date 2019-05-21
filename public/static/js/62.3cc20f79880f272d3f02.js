(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/UEditor.vue + 2 modules
var UEditor = __webpack_require__(213);

// EXTERNAL MODULE: ./src/components/upload.vue + 2 modules
var upload = __webpack_require__(209);

// EXTERNAL MODULE: ./src/components/dateTimePicker.vue + 2 modules
var dateTimePicker = __webpack_require__(208);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/activeMode_3.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var activeMode_3 = ({
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === '' && this.modeData.rule.withdrawRequire === 'times') {
        callback(new Error('请输入倍数'));
      } else {
        callback();
      }
    };

    let validatePass1 = (rule, value, callback) => {
      if (value === '' && this.modeData.rule.withdrawRequire === 'bet') {
        callback(new Error('请输入投注金额'));
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
      modeData: {
        arrList: [],
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
        vipType: [],
        //会员列表
        status: 'enabled',
        //string #状态 enabled 启用,disabled 停用
        description: "",
        //string #描述
        cover: "",
        //string #封面
        language_id: "",
        //int #语言ID
        language_name: "",
        //string #语言名称
        content: "",
        //string #内容
        content2: "",
        //string #内容
        //                    state: [],//string #集合信息 apply:可申请, auto:自动参与
        //                    updated_uid: "",//int #更新者ID
        fileList2: [],
        //文件上传
        //优惠类型下拉选项请求用
        //                    type_idList:[],
        // 排序
        sort: "",
        // 打开方式
        open_mode: "",
        // 链接
        link: "",
        rule: {
          template_id: '',
          rule: {
            prize: ''
          },
          luckydraw_condition: [],
          limit_times: '',
          //领取限制次数
          withdrawRequire: '',
          //提款要求选择
          withdrawRequireVal: '',
          //
          withdrawRequireVal1: '',
          //提款倍数
          member_level: '',
          issueTime: null,
          //发放时间
          issue_cycle: 'day',
          issueMode: '',
          //string #发放方式
          game: []
        },
        checkedDefut: []
      },
      pcshow: false,
      get: "",
      //领取限制方式
      placename: '',
      //下拉优惠类型列表
      type_idList: [],
      //获取有效会员等级
      vipList: [],
      //默认选中项
      isIndeterminate: true,
      checkList: [],
      //                checkAll: true,//全选会员等级
      //获取页面传过来的值
      seachData: {},
      languageList: [],
      // 上传地址
      uploadUrl: URL.rpi,
      // 上传字段名
      keys: "images",
      // 是否初始化
      imgInit: false,
      rules: {
        name: [{
          required: true,
          message: '请填写活动名称',
          trigger: 'blur'
        }],
        type_id: [{
          required: true,
          message: '请选择优惠类型',
          trigger: 'change'
        }],
        language_id: [{
          required: true,
          message: '请选择语言类型',
          trigger: 'change'
        }],
        cover: [{
          required: true,
          message: '请上传图片',
          trigger: 'change'
        }],
        description: [{
          required: true,
          message: '请输入活动描述',
          trigger: 'blur'
        }],
        begin_time: [{
          required: true,
          validator: validatorTime,
          trigger: 'change'
        }],
        end_time: [{
          required: true,
          validator: validatorTime,
          trigger: 'change'
        }],
        'rule.issueMode': [{
          required: true,
          message: '请选择发放奖金方式',
          trigger: 'change'
        }],
        'rule.withdrawRequire': [{
          required: true,
          message: '请选择提款要求',
          trigger: 'change'
        }],
        'rule.withdrawRequireVal': [{
          validator: validatePass,
          trigger: 'blur'
        }],
        'rule.withdrawRequireVal1': [{
          validator: validatePass1,
          trigger: 'blur'
        }],
        checkedDefut: [{
          type: "array",
          required: true,
          message: '请至少选择一个会员等级',
          trigger: 'change'
        }],
        title: [{
          required: true,
          message: '请输入活动标题',
          trigger: 'change'
        }],
        content: [{
          required: true,
          message: '请输入优惠规则',
          trigger: 'change'
        }]
      }
    };
  },

  components: {
    markdownEdit: UEditor["a" /* default */],
    upload: upload["a" /* default */],
    dateTimePicker: dateTimePicker["a" /* default */]
  },
  methods: {
    init() {
      let _this = this;

      this.modeData.begin_time = window.sessionStorage.sysTime + ' 00:00:00'; //datetime #开始时间

      this.modeData.end_time = '2118-01-01 23:59:59'; //datetime #结束时间

      this.pcshow = true;
      let query = this.$route.query;

      for (let k in query) {
        this.seachData[k] = query[k];
      } //编辑页面数据获得后要操作会员层级数据，所以先要获得到会员层级数据


      function getMeber() {
        return new Promise(function (resolve, reject) {
          let alllevel = URL.api + `/user/levels`;

          _this.$http.get(alllevel, URLCONFIG).then(res => {
            let model = res.data.data;
            _this.vipList = [];

            for (let i in model) {
              _this.vipList.push({
                "label": model[i].name,
                "value": model[i].id.toString(),
                "disable": true
              });
            }

            resolve();
          }).catch(function (err) {
            //                            console.log(err)
            reject(err);
          });
        });
      }

      getMeber().then(function () {
        let levelUrl = URL.api + `/active/template/unique?template_id=${_this.seachData.template_id}&&begin_time=${_this.modeData.begin_time}&&end_time=${_this.modeData.end_time}`;

        _this.$http.get(levelUrl, URLCONFIG).then(res => {
          let model = res.data.data;

          for (let i in model) {
            _this.vipList.forEach(item => {
              if (item.value === model[i].id.toString()) {
                item.disable = false;
              }
            });
          }
        }).catch(function (err) {//                       console.log(err)
        }); //获取编辑页面数据


        if (_this.seachData.type === 'edit') {
          let editUrl = URL.api + `/active/template.fix/${_this.seachData.id}`;

          _this.$http.get(editUrl, URLCONFIG).then(res => {
            if (res.data.state === 0 && res.data.data) {
              let formData = res.data.data;
              _this.modeData = {
                arrList: [],
                name: formData.name,
                type_id: formData.type_id,
                title: formData.title,
                begin_time: formData.begin_time,
                end_time: formData.end_time,
                day: formData.day,
                vipType: [],
                //会员列表
                money: formData.money,
                status: formData.status,
                description: formData.description,
                language_id: formData.language_id,
                language_name: formData.language_name,
                cover: formData.cover,
                content: formData.content,
                rule: {
                  rule: {
                    prize: (formData.rule.rule.prize / 100).toString()
                  },
                  limit_times: formData.rule.limit_times,
                  withdrawRequire: formData.rule.withdraw_require,
                  issueTime: formData.rule.issue_time,
                  issue_cycle: formData.rule.issue_cycle,
                  issueMode: formData.rule.issue_mode,
                  game: []
                },
                checkedDefut: formData.rule.member_level[0].id.toString()
              }; //处理会员层级数据

              let model = res.data.data.rule.member_level;

              for (let i in model) {
                _this.vipList.forEach(item => {
                  if (item.value === model[i].id.toString()) {
                    item.disable = false;
                  }
                });

                _this.modeData.checkedDefut.push(model[i].name);
              } //活动图片


              _this.modeData.arrList.push(formData.cover); //处理领取限制


              if (formData.rule.limit_times > 0) {
                _this.get = '1';
              } else {
                _this.get = '2';
                _this.modeData.rule.limit_times = null;
              } //处理提款要求


              if (formData.rule.withdraw_require === 'bet') {
                _this.modeData.rule.withdrawRequireVal1 = formData.rule.withdraw_require_val / 100;
              } else if (formData.rule.withdraw_require === 'times') {
                _this.modeData.rule.withdrawRequireVal = formData.rule.withdraw_require_val;
              }
            }
          });
        }
      }); //初始化优惠活动名称

      this.placename = this.seachData.label; //                获取优惠类型列表

      this.$http.get(URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", URLCONFIG).then(res => {
        if (res.data.state === 0 && res.data.data) {
          this.type_idList = [];
          let model = res.data.data || [];

          for (let k in model) {
            this.type_idList.push({
              "label": model[k].name,
              "value": model[k].id.toString()
            });
          }
        }
      });
      let langeUrl = URL.api + ROUTES.GET.langeages;
      this.$http.get(langeUrl, URLCONFIG).then(res => {
        this.languageList = [];
        let model = res.data.data;

        for (let i in model) {
          this.languageList.push({
            "label": model[i].name,
            "value": model[i].id.toString()
          });
        }

        this.modeData.language_id = '1';
      });
    },

    //全选
    handleCheckAllChange(event) {
      let checkList = [];

      for (let v in this.vipList) {
        checkList[v] = this.vipList[v].label;
      }

      ;
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
          //会员层级字符串
          let checklist = [];
          this.modeData.checkedDefut.forEach(function (it) {
            _this.vipList.forEach(function (item) {
              if (item.label === it) {
                checklist.push(item);
              }
            });
          });
          let member_level = checklist.map(function (item) {
            return item.value;
          }).join(','); //拿到选中的语言

          let lan = this.languageList.find(function (item) {
            return item.value = _this.modeData.language_id;
          }); //提款要求数据处理

          let withdraw_require_val = null;

          if (this.modeData.rule.withdrawRequire === 'times') {
            withdraw_require_val = parseInt(this.modeData.rule.withdrawRequireVal);
          } else if (this.modeData.rule.withdrawRequire === 'bet') {
            withdraw_require_val = parseInt(this.modeData.rule.withdrawRequireVal1) * 100;
          } else {
            withdraw_require_val = 0;
          }

          let formData = {
            name: this.modeData.name,
            type_id: this.modeData.type_id,
            title: this.modeData.title,
            begin_time: this.modeData.begin_time,
            end_time: this.modeData.end_time,
            description: this.modeData.description,
            cover: this.modeData.cover,
            language_id: parseInt(this.modeData.language_id),
            language_name: lan ? lan.label : '',
            content: this.modeData.content,
            status: this.modeData.status,
            rule_type: 'verification_mobile',
            rule: {
              template_id: this.modeData.rule.template_id ? this.modeData.rule.template_id : 3,
              rule: {
                prize: this.modeData.rule.rule.prize * 100
              },
              luckydraw_condition: this.modeData.rule.luckydraw_condition,
              limit_times: this.modeData.rule.limit_times ? this.modeData.rule.limit_times : 0,
              withdraw_require: this.modeData.rule.withdrawRequire,
              withdraw_require_val: withdraw_require_val,
              member_level: member_level,
              issue_time: parseInt(this.modeData.rule.issueTime),
              issue_cycle: this.modeData.rule.issue_cycle,
              issue_mode: this.modeData.rule.issueMode,
              game: []
            }
          };

          if (type === 'add') {
            let url = URL.api + `/active/template.fix`;
            this.$http.put(url, formData, URLCONFIG).then(data => {
              if (data.data.state === 0) {
                let str = LANG['添加成功'] || '添加成功';
                this.$message.success(str);
                setTimeout(function () {
                  _this.$router.push({
                    path: 'addActiveSet'
                  });
                }, 1000);
              } else if (data.data.state > 3) {
                this.$message.error(data.data.msg);
              } else {
                let str = LANG['修改失败'] || '修改失败';
                this.$message.error(str);
              }
            });
          } else {
            let url = URL.api + `/active/template.fix/${this.seachData.id}`;
            this.$http.put(url, formData, URLCONFIG).then(data => {
              if (data.data.state === 0) {
                let str = LANG['修改成功'] || '修改成功';
                this.$message.success(str);
                setTimeout(function () {
                  _this.$router.push({
                    path: 'activeSet'
                  });
                }, 1000);
              } else if (data.data.state > 3) {
                this.$message.error(data.data.msg);
              } else {
                let str = LANG['修改失败'] || '修改失败';
                this.$message.error(str);
              }
            });
          }
        } else {
          _this.$message.error('请检查表单');

          return false;
        }
      });
    },

    //領取限制change
    limitChange() {
      if (this.get === '2') {
        //清空limit_times
        this.modeData.rule.limit_times = '';
      }

      this.$refs.form.validateField('rule.limit_times');
    },

    //数字验证
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

    //限制领取次数验证
    validatorLimitNumber(rule, value, callback) {
      if (this.get === '1') {
        this.validatorNumber.apply(this, arguments);
      } else {
        callback();
      }
    },

    //提款要求倍数验证
    validatorTimeNumber(rule, value, callback) {
      if (this.modeData.rule.withdrawRequire === 'times') {
        this.validatorNumber.apply(this, arguments);
      } else {
        callback();
      }
    },

    //提款要求固定投注流水验证
    validatorBetNumber(rule, value, callback) {
      if (this.modeData.rule.withdrawRequire === 'bet') {
        this.validatorNumber.apply(this, arguments);
      } else {
        callback();
      }
    },

    goBack(type) {
      type == "add" ? this.$router.push({
        path: 'addActiveSet'
      }) : this.$router.push({
        path: 'activeSet'
      });
    },

    //
    doSaveFile(obj) {
      this.modeData.cover = obj.url[0];
    },

    changeLanguage(value) {
      let languageList = this.languageList;
    },

    withdrawRequireChange() {
      this.$refs.form.validateField('rule.withdrawRequireVal');
      this.$refs.form.validateField('rule.withdrawRequireVal1');
    },

    timeChange(obj) {
      setTimeout(() => {
        this.$refs.form.validateField('begin_time');
        this.$refs.form.validateField('end_time');
      });
    }

  },
  computed: {},

  activated() {
    this.init();
  },

  beforeRouteLeave(to, from, next) {
    this.$refs.form.resetFields();
    this.modeData.description = '';
    this.modeData.arrList = [];
    this.pcshow = false;
    next(true);
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-c10362d2","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/activeMode_3.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"activeMode"}},[_c('el-col',{staticClass:"activeModeForm",attrs:{"span":14,"offset":5}},[_c('el-form',{ref:"form",staticClass:"mt20",attrs:{"model":_vm.modeData,"rules":_vm.rules,"label-width":"140px"}},[_c('el-col',{staticClass:"Layout",attrs:{"span":24}},[_c('h3',{staticClass:"tCent",domProps:{"textContent":_vm._s(_vm.LANG['规则设置'] || '规则设置')}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"优惠活动名称","prop":"name"}},[_c('el-input',{staticClass:"w80",attrs:{"placeholder":_vm.placename},model:{value:(_vm.modeData.name),callback:function ($$v) {_vm.$set(_vm.modeData, "name", $$v)},expression:"modeData.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"优惠类型","prop":"type_id"}},[_c('el-select',{staticClass:"w80",attrs:{"placeholder":"请选择类型"},model:{value:(_vm.modeData.type_id),callback:function ($$v) {_vm.$set(_vm.modeData, "type_id", $$v)},expression:"modeData.type_id"}},_vm._l((_vm.type_idList),function(item,index){return _c('el-option',{key:item.index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),(_vm.seachData.type=='add')?_c('el-form-item',{attrs:{"label":"发放奖金","prop":"rule.issueMode"}},[_c('el-radio-group',{model:{value:(_vm.modeData.rule.issueMode),callback:function ($$v) {_vm.$set(_vm.modeData.rule, "issueMode", $$v)},expression:"modeData.rule.issueMode"}},[_c('el-radio',{staticClass:"radio",attrs:{"label":"auto"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['自动发放'] || '自动发放')}})]),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"manual"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['手动发放'] || '手动发放')}})])],1)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":"优惠规则","required":""}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['完成手机验证优惠'] || '完成手机验证优惠')}}),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":"rule.rule.prize","rules":[{ validator:_vm.validatorNumber,trigger:'blur'}]}},[_c('el-input',{staticClass:"intW",model:{value:(_vm.modeData.rule.rule.prize),callback:function ($$v) {_vm.$set(_vm.modeData.rule.rule, "prize", $$v)},expression:"modeData.rule.rule.prize"}})],1),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['元'] || '元')}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"领取限制"}},[_c('el-radio-group',{on:{"change":function($event){return _vm.limitChange()}},model:{value:(_vm.get),callback:function ($$v) {_vm.get=$$v},expression:"get"}},[_c('el-radio',{staticClass:"radio",attrs:{"label":"1"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['限定次数'] || '限定次数')}}),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"inline-block"},attrs:{"prop":"rule.limit_times","rules":[{ validator:_vm.validatorLimitNumber,trigger:'blur'}]}},[_c('el-input',{staticClass:"intW",model:{value:(_vm.modeData.rule.limit_times),callback:function ($$v) {_vm.$set(_vm.modeData.rule, "limit_times", $$v)},expression:"modeData.rule.limit_times"}})],1)],1),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"2"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['无限定次数'] || '无限定次数')}})])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"有效会员等级","prop":"checkedDefut"}},[_c('el-checkbox',{attrs:{"indeterminate":_vm.isIndeterminate},on:{"change":_vm.handleCheckAllChange},model:{value:(_vm.modeData.vipType),callback:function ($$v) {_vm.$set(_vm.modeData, "vipType", $$v)},expression:"modeData.vipType"}},[_vm._v("全部\n                    ")]),_vm._v(" "),_c('div',{staticStyle:{"margin":"15px 0"}}),_vm._v(" "),_c('el-checkbox-group',{on:{"change":_vm.handleCheckedDefutChange},model:{value:(_vm.modeData.checkedDefut),callback:function ($$v) {_vm.$set(_vm.modeData, "checkedDefut", $$v)},expression:"modeData.checkedDefut"}},_vm._l((_vm.vipList),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.label,"name":"type"}})}),1)],1),_vm._v(" "),_c('el-form-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.seachData.type=='add'),expression:"seachData.type=='add'"}],attrs:{"label":"发放时间","required":""}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['手机验证完成后第'] || '手机验证完成后第')}}),_vm._v(" "),_c('el-form-item',{staticClass:"to-inline-block",attrs:{"prop":"rule.issueTime","rules":[{ validator:_vm.validatorNumber,trigger:'blur'}]}},[_c('el-input',{staticClass:"intW",model:{value:(_vm.modeData.rule.issueTime),callback:function ($$v) {_vm.$set(_vm.modeData.rule, "issueTime", $$v)},expression:"modeData.rule.issueTime"}})],1),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['天发放'] || '天发放')}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"提款要求","prop":"rule.withdrawRequire"}},[_c('el-radio-group',{on:{"change":_vm.withdrawRequireChange},model:{value:(_vm.modeData.rule.withdrawRequire),callback:function ($$v) {_vm.$set(_vm.modeData.rule, "withdrawRequire", $$v)},expression:"modeData.rule.withdrawRequire"}},[_c('el-radio',{staticClass:"radio",attrs:{"label":"times"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['倍数'] || '倍数')}}),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"inline-block"},attrs:{"prop":"rule.withdrawRequireVal","rules":[{ validator:_vm.validatorTimeNumber,trigger:'blur'}]}},[_c('el-input',{staticClass:"intW",model:{value:(_vm.modeData.rule.withdrawRequireVal),callback:function ($$v) {_vm.$set(_vm.modeData.rule, "withdrawRequireVal", $$v)},expression:"modeData.rule.withdrawRequireVal"}})],1)],1),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"bet"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['固定投注流水'] || '固定投注流水')}}),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"inline-block"},attrs:{"prop":"rule.withdrawRequireVal1","rules":[{ validator:_vm.validatorBetNumber,trigger:'blur'}]}},[_c('el-input',{staticClass:"intW",model:{value:(_vm.modeData.rule.withdrawRequireVal1),callback:function ($$v) {_vm.$set(_vm.modeData.rule, "withdrawRequireVal1", $$v)},expression:"modeData.rule.withdrawRequireVal1"}})],1)],1),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"no"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['无取款要求'] || '无取款要求')}})])],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-radio',{staticClass:"radio",attrs:{"label":"enabled"},model:{value:(_vm.modeData.status),callback:function ($$v) {_vm.$set(_vm.modeData, "status", $$v)},expression:"modeData.status"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['启用'] || '启用')}})]),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"disabled"},model:{value:(_vm.modeData.status),callback:function ($$v) {_vm.$set(_vm.modeData, "status", $$v)},expression:"modeData.status"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['停用'] || '停用')}})])],1)],1),_vm._v(" "),_c('el-col',{staticClass:"Layout",attrs:{"span":24}},[_c('h3',{staticClass:"tCent",domProps:{"textContent":_vm._s(_vm.LANG['内容设置'] || '内容设置')}}),_vm._v(" "),_c('el-form-item',{attrs:{"label":"优惠活动标题","prop":"title"}},[_c('el-input',{staticClass:"w80",model:{value:(_vm.modeData.title),callback:function ($$v) {_vm.$set(_vm.modeData, "title", $$v)},expression:"modeData.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"语言","prop":"language_id"}},[_c('el-select',{staticClass:"w80",attrs:{"placeholder":"请选择类型","disabled":""},on:{"change":_vm.changeLanguage},model:{value:(_vm.modeData.language_id),callback:function ($$v) {_vm.$set(_vm.modeData, "language_id", $$v)},expression:"modeData.language_id"}},_vm._l((_vm.languageList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"优惠活动描述","prop":"description"}},[_c('el-input',{staticClass:"w80",attrs:{"type":"textarea"},model:{value:(_vm.modeData.description),callback:function ($$v) {_vm.$set(_vm.modeData, "description", $$v)},expression:"modeData.description"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"图片上传","prop":"cover"}},[_c('el-input',{staticStyle:{"display":"none"},model:{value:(_vm.modeData.cover),callback:function ($$v) {_vm.$set(_vm.modeData, "cover", $$v)},expression:"modeData.cover"}}),_vm._v(" "),_c('upload',{attrs:{"uploadUrl":_vm.uploadUrl,"keys":_vm.keys,"isInit":_vm.imgInit,"fileNum":1,"arrList":_vm.modeData.arrList,"imgResolution":'460*180'},on:{"response":_vm.doSaveFile}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['优惠规则编辑'] || '优惠规则编辑',"prop":"content"}},[_c('el-input',{staticStyle:{"display":"none"},model:{value:(_vm.modeData.content),callback:function ($$v) {_vm.$set(_vm.modeData, "content", $$v)},expression:"modeData.content"}}),_vm._v(" "),(_vm.pcshow)?_c('markdownEdit',{attrs:{"id":'pcid'},model:{value:(_vm.modeData.content),callback:function ($$v) {_vm.$set(_vm.modeData, "content", $$v)},expression:"modeData.content"}}):_vm._e()],1)],1)],1),_vm._v(" "),(_vm.seachData.type == 'add')?_c('el-col',{staticClass:"tCent",attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary","plain":true},on:{"click":function($event){return _vm.goBack(_vm.type = 'add')}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['取消生成'] || '取消生成')}})]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.doSubmit(_vm.type = 'add')}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['生成优惠'] || '生成优惠')}})])],1):_c('el-col',{staticClass:"tCent",attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary","plain":true},on:{"click":function($event){return _vm.goBack(_vm.type = 'edit')}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['取消修改'] || '取消修改')}})]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.doSubmit(_vm.type = 'edit')}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['保存修改'] || '保存修改')}})])],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/preAct/activeMode_3.vue
function injectStyle (context) {
  __webpack_require__(434)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c10362d2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  activeMode_3,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var preAct_activeMode_3 = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);