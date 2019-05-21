(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/myDatePicker.vue + 4 modules
var myDatePicker = __webpack_require__(240);

// EXTERNAL MODULE: ./src/components/timePicker.vue + 2 modules
var timePicker = __webpack_require__(269);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/systemSettings/fieldSettings.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//    import datpicker from  '../../components/datepicker.vue'


/* harmony default export */ var fieldSettings = ({
  data() {
    return {
      LANG,
      globlUrl: '',
      globBase: {},
      // 基本设置数据
      betData: {},
      //  基本数据里有效投注数据处理
      globGames: {},
      // 游戏设置数据
      globGamesleft: [],
      // 基础设置数据左右分割
      globGamesright: [],
      submitData: {},
      opt: '',
      value3: '',
      timevalidator: false,
      create: {
        state: true,
        url: '',
        showKey: false
      }
    };
  },

  components: {
    mydatepick: myDatePicker["a" /* default */],
    timepicker: timePicker["a" /* default */] //            datpicker:datpicker

  },
  methods: {
    //初始化页面 betData
    init() {
      this.globlUrl = URL.api + ROUTES.GET.system.global; //GET.system.google

      this.$.autoAjax('get', this.globlUrl, '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.globBase = res.data.base; //this.globBase.maintaining = false

            for (let k in this.globBase) {
              if (this.globBase[k] == 'false') {
                this.globBase[k] = false;
              } else if (this.globBase[k] == 'true') {
                this.globBase[k] = true;
              } //this.globBase[k] ={'false':false,'true':true}[this.globBase[k]]||res.data.base[k]

            }

            this.globBase.start_day = res.data.base.maintaining_start_time || sessionStorage.sysTime;
            this.globBase.end_day = res.data.base.maintaining_end_time || sessionStorage.sysTime;

            if (res.data.base.maintaining_start_time) {
              this.globBase.start_time = {
                HH: this.getbasetimes(res.data.base.maintaining_start_time, 'HH'),
                mm: this.getbasetimes(res.data.base.maintaining_start_time, 'mm'),
                ss: this.getbasetimes(res.data.base.maintaining_start_time, 'ss')
              };
            } else {
              this.globBase.start_time = {
                HH: "00",
                mm: "00",
                ss: "00"
              };
            }

            if (res.data.base.maintaining_end_time) {
              let t = new Date(res.data.base.maintaining_end_time);
              this.globBase.end_time = {
                HH: this.getbasetimes(res.data.base.maintaining_end_time, 'HH'),
                mm: this.getbasetimes(res.data.base.maintaining_end_time, 'mm'),
                ss: this.getbasetimes(res.data.base.maintaining_end_time, 'ss')
              };
            } else {
              this.globBase.end_time = {
                HH: "00",
                mm: "00",
                ss: "00"
              };
            } //                        let tmepOne = this.globBase.start_day.split(' ')


            this.globGames = res.data.games;
            this.betData = this.globBase['valid_bet_percent'];
            this.cutGamesData(); // 请求完数据直接切割数据

            this.submitData = res.data;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //查看密钥
    showKey() {
      this.$.autoAjax('get', URL.api + ROUTES.GET.system.google, '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.create.url = res.data;
            this.create.showKey = true;
            this.$message.warning(res.msg);
          }
        }
      });
    },

    //生成密钥
    createKey() {
      this.$.autoAjax('post', URL.api + ROUTES.GET.system.google, '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(res.msg);
          }
        }
      });
    },

    // 初始化时分秒
    getbasetimes(val, str) {
      if (!val) {
        return '00';
      }

      let t = new Date(val);

      switch (str) {
        case 'HH':
          return t.getHours().toString().length > 1 ? t.getHours().toString() : '0' + t.getHours().toString();

        case 'mm':
          return t.getMinutes().toString().length > 1 ? t.getMinutes().toString() : '0' + t.getMinutes().toString();

        case 'ss':
          return t.getSeconds().toString().length > 1 ? t.getSeconds().toString() : '0' + t.getSeconds().toString();
      }
    },

    setSwitch(value) {//
    },

    //分割数据
    cutGamesData() {
      this.globGamesleft = [];
      this.globGamesright = [];
      let data = this.globGames;
      let length = Math.floor(data.length / 2);

      for (let i = 0; i < length; i++) {
        this.globGamesleft.push(data[i]);
      }

      for (let j = length; j < data.length; j++) {
        this.globGamesright.push(data[j]);
      }
    },

    //  组装时间
    getTimes(day, time) {
      if (!day) {
        return '';
      }

      return FORMATDATEPICKER(day) + ' ' + time.HH + ':' + time.mm + ':' + time.ss;
    },

    submit() {
      let sport = parseInt(this.betData.sport);
      let live = parseInt(this.betData.live);
      let lottery = parseInt(this.betData.lottery);
      let sports = parseInt(this.betData['e-sports']);
      this.submitData.base['maintaining_start_time'] = this.getTimes(this.globBase.start_day, this.globBase.start_time);
      this.submitData.base['maintaining_end_time'] = this.getTimes(this.globBase.end_day, this.globBase.end_time);
      this.validetimes();

      if (sport <= 200 && sport >= 0 && live <= 200 && live >= 0 && lottery <= 200 && lottery >= 0 && sports <= 200 && sports >= 0) {
        let valid_bet_percent_arr = this.submitData.base['valid_bet_percent'];
        this.submitData.base['valid_bet_percent'] = valid_bet_percent_arr;

        if (!this.submitData.base['maintaining']) {
          this.submitData.base['maintaining_start_time'] = '';
          this.submitData.base['maintaining_end_time'] = '';
          this.$.autoAjax('put', this.globlUrl, this.submitData, {
            ok: res => {
              if (res.state === 0 && res.data) {
                this.$message.success(LANG['保存设置成功！'] || '保存设置成功！');
              } else {
                this.$message.error(res.msg);
              }

              this.init();
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
        } else {
          if (this.submitData.base['maintaining_start_time'] === '' && this.submitData.base['maintaining_end_time'] === '') {
            this.$message.error(LANG['请选择系统维护的时间段'] || '请选择系统维护的时间段');
          } else if (this.timevalidator === false) {
            this.$message.error(LANG['系统维护的结束时间必需大于开始时间'] || '系统维护的结束时间必需大于开始时间');
          } else {
            this.$.autoAjax('put', this.globlUrl, this.submitData, {
              ok: res => {
                if (res.state === 0 && res.data) {
                  this.$message.success(LANG['保存设置成功！'] || '保存设置成功！');
                } else {
                  this.$message.error(res.msg);
                }

                this.init();
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            });
          }
        }
      } else {
        this.$message.error(LANG['设置的数据不符合规则，请重新设置'] || '设置的数据不符合规则，请重新设置');
      }
    },

    // 获取时间值
    changetimes(val) {
      this.validetimes();
    },

    // 删除日期时间
    getDay(val) {
      if (val.day === '') {
        this.globBase[val.daykey] = '';
      }

      if (val.daykey === 'end_day') {
        this.validetimes();
      }
    },

    // 比较两个时间
    validetimes() {
      let s_date = this.getTimes(this.globBase.start_day, this.globBase.start_time);
      let e_date = this.getTimes(this.globBase.end_day, this.globBase.end_time);
      var oDate1 = new Date(s_date);
      var oDate2 = new Date(e_date);

      if (oDate1.getTime() >= oDate2.getTime()) {
        this.timevalidator = false;
      } else {
        this.timevalidator = true;
      }
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3b9ea956","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/systemSettings/fieldSettings.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"fieldSettings"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":12,"offset":4}},[_c('el-form',{ref:"form",staticStyle:{"min-width":"580px","margin":"0 auto"},attrs:{"model":_vm.globBase,"label-width":"140px"}},[_c('h1',{staticClass:"w100"},[_vm._v(_vm._s(_vm.LANG['基础设置'] || '基础设置'))]),_vm._v(" "),_c('div',{staticClass:"base border"},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"grid-content"},[_c('el-form-item',{attrs:{"label":_vm.LANG['登录密码容错次数'] || '登录密码容错次数'}},[_c('el-input',{staticClass:"setInput",attrs:{"type":"number"},model:{value:(_vm.globBase.password_login_fault),callback:function ($$v) {_vm.$set(_vm.globBase, "password_login_fault", $$v)},expression:"globBase.password_login_fault"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"grid-content"},[_c('el-form-item',{attrs:{"label":_vm.LANG['M令牌'] || 'M令牌'}},[_c('el-switch',{attrs:{"on-text":"开","off-text":"关","off-color":"#C0CCDA"},model:{value:(_vm.globBase.opt),callback:function ($$v) {_vm.$set(_vm.globBase, "opt", $$v)},expression:"globBase.opt"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"grid-content"},[_c('el-form-item',{attrs:{"label":_vm.LANG['系统维护中'] || '系统维护中'}},[_c('el-switch',{attrs:{"on-text":"开","off-text":"关","off-color":"#C0CCDA"},on:{"change":function($event){return _vm.setSwitch(_vm.globBase.maintaining)}},model:{value:(_vm.globBase.maintaining),callback:function ($$v) {_vm.$set(_vm.globBase, "maintaining", $$v)},expression:"globBase.maintaining"}})],1)],1)]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"grid-content"},[_c('el-form-item',{attrs:{"label":_vm.LANG['额度转换开关'] || '额度转换开关'}},[_c('el-switch',{attrs:{"on-text":"开","off-text":"关","off-color":"#C0CCDA"},model:{value:(_vm.globBase.transfer),callback:function ($$v) {_vm.$set(_vm.globBase, "transfer", $$v)},expression:"globBase.transfer"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"grid-content"},[_c('el-form-item',{attrs:{"label":_vm.LANG['取款密码容错次数'] || '取款密码容错次数'}},[_c('el-input',{staticClass:"setInput",attrs:{"type":"number"},model:{value:(_vm.globBase.password_withdraw_fault),callback:function ($$v) {_vm.$set(_vm.globBase, "password_withdraw_fault", $$v)},expression:"globBase.password_withdraw_fault"}})],1)],1),_vm._v(" "),_c('div',{staticClass:"grid-content"},[_c('el-form-item',{attrs:{"label":_vm.LANG['同IP注册会员数'] || '同IP注册会员数'}},[_c('el-input',{staticClass:"setInput",attrs:{"type":"number"},model:{value:(_vm.globBase.ip),callback:function ($$v) {_vm.$set(_vm.globBase, "ip", $$v)},expression:"globBase.ip"}}),_vm._v(" "),_c('br'),_c('span',{staticClass:"help_red"},[_vm._v("（0:代表不受限制）")])],1)],1)]),_vm._v(" "),(_vm.globBase.maintaining)?_c('el-col',{staticClass:"datePicker",attrs:{"span":24}},[_c('el-form-item',{attrs:{"label":_vm.LANG['系统维护开始时间'] || '系统维护开始时间'}},[_c('el-row',[_c('div',[_c('el-col',{staticStyle:{"max-width":"138px"},attrs:{"span":12}},[_c('mydatepick',{attrs:{"datekey":'start_day'},on:{"get-date":_vm.getDay},model:{value:(_vm.globBase.start_day),callback:function ($$v) {_vm.$set(_vm.globBase, "start_day", $$v)},expression:"globBase.start_day"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":1}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('timepicker',{attrs:{"format":"HH:mm:ss"},on:{"change":_vm.changetimes},model:{value:(_vm.globBase.start_time),callback:function ($$v) {_vm.$set(_vm.globBase, "start_time", $$v)},expression:"globBase.start_time"}})],1)],1)]),_vm._v(" "),(!_vm.globBase.start_day)?_c('span',{staticClass:"help_red"},[_vm._v("*请选择时间")]):_vm._e()],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['系统维护结束时间'] || '系统维护结束时间'}},[_c('el-row',[_c('div',[_c('el-col',{staticStyle:{"max-width":"138px"},attrs:{"span":12}},[_c('mydatepick',{attrs:{"datekey":'end_day'},on:{"get-date":_vm.getDay},model:{value:(_vm.globBase.end_day),callback:function ($$v) {_vm.$set(_vm.globBase, "end_day", $$v)},expression:"globBase.end_day"}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":1}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('timepicker',{attrs:{"format":"HH:mm:ss"},on:{"change":_vm.changetimes},model:{value:(_vm.globBase.end_time),callback:function ($$v) {_vm.$set(_vm.globBase, "end_time", $$v)},expression:"globBase.end_time"}})],1)],1)]),_vm._v(" "),(!_vm.globBase.end_day)?_c('span',{staticClass:"help_red"},[_vm._v("*请选择时间")]):_vm._e(),_vm._v(" "),(!_vm.timevalidator)?_c('span',{staticClass:"help_red"},[_vm._v("*系统维护的结束时间必需大于开始时间")]):_vm._e()],1)],1):_vm._e()],1),_vm._v(" "),_c('el-row',{staticClass:"tCent"},[_c('el-col',{attrs:{"span":24}},[_c('div',{staticClass:"grid-content title"},[_c('span',{staticStyle:{"color":"#48576a"}},[_vm._v(_vm._s(_vm.LANG['有效投注出款稽核核算比例'] || '有效投注出款稽核核算比例')+"（%)")])])])],1),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"grid-content"},[_c('el-form-item',{class:{gridForm:_vm.betData.sport ==''||_vm.betData.sport>200 || _vm.betData.sport < 0},attrs:{"label":_vm.LANG['体育'] || '体育'}},[_c('el-input',{staticClass:"setInput",attrs:{"max":"200","min":"0","type":"number"},model:{value:(_vm.betData.sport),callback:function ($$v) {_vm.$set(_vm.betData, "sport", $$v)},expression:"betData.sport"}})],1),_vm._v(" "),(_vm.betData.sport ==''||_vm.betData.sport>200 || _vm.betData.sport < 0)?_c('span',{staticClass:"font12 tRight ruleTitle"},[_vm._v("请输入0～200的稽核核算比例")]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"grid-content"},[_c('el-form-item',{class:{gridForm:_vm.betData.live ==''||_vm.betData.live>200 || _vm.betData.live < 0},attrs:{"label":_vm.LANG['视讯'] || '视讯'}},[_c('el-input',{staticClass:"setInput",attrs:{"max":"200","min":"0","type":"number"},model:{value:(_vm.betData.live),callback:function ($$v) {_vm.$set(_vm.betData, "live", $$v)},expression:"betData.live"}})],1),_vm._v(" "),(_vm.betData.live==''||_vm.betData.live>200 ||_vm.betData.live < 0)?_c('span',{staticClass:"font12 tRight ruleTitle"},[_vm._v("请输入0～200的稽核核算比例")]):_vm._e()],1)]),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('div',{staticClass:"grid-content"},[_c('el-form-item',{class:{gridForm:_vm.betData.lottery ==''||_vm.betData.lottery>200 || _vm.betData.lottery < 0},attrs:{"label":_vm.LANG['彩票'] || '彩票'}},[_c('el-input',{staticClass:"setInput",attrs:{"max":"200","min":"0","type":"number"},model:{value:(_vm.betData.lottery),callback:function ($$v) {_vm.$set(_vm.betData, "lottery", $$v)},expression:"betData.lottery"}})],1),_vm._v(" "),(_vm.betData.lottery==''||_vm.betData.lottery>200 ||_vm.betData.lottery < 0)?_c('span',{staticClass:"font12 tRight ruleTitle"},[_vm._v("请输入0～200的稽核核算比例")]):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"grid-content"},[_c('el-form-item',{class:{gridForm:_vm.betData['e-sports'] ==''||_vm.betData['e-sports']>200 || _vm.betData['e-sports'] < 0},attrs:{"label":_vm.LANG['电子'] || '电子'}},[_c('el-input',{staticClass:"setInput",attrs:{"max":"200","min":"0","type":"number"},model:{value:(_vm.betData['e-sports']),callback:function ($$v) {_vm.$set(_vm.betData, 'e-sports', $$v)},expression:"betData['e-sports']"}})],1),_vm._v(" "),(_vm.betData['e-sports'] ==''||_vm.betData['e-sports']>200 || _vm.betData['e-sports']< 0)?_c('span',{staticClass:"font12 tRight ruleTitle"},[_vm._v("请输入0～200的稽核核算比例")]):_vm._e()],1)])],1)],1),_vm._v(" "),_c('h1',[_vm._v(_vm._s(_vm.LANG['游戏设置'] || '游戏设置'))]),_vm._v(" "),_c('div',{staticClass:"games",staticStyle:{"border":"1px solid #cccccc","padding":"10px","margin":"10px 0"}},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{staticStyle:{"min-width":"200px"},attrs:{"span":12}},_vm._l((_vm.globGamesleft),function(key){return _c('div',{staticClass:"grid-content"},[_c('el-form-item',{attrs:{"label":key.long}},[_c('el-switch',{attrs:{"on-text":"开","off-text":"关","disabled":((key.pt_status != undefined) && (key.pt_status === false)) || key.name =='LEBO'},model:{value:(key.status),callback:function ($$v) {_vm.$set(key, "status", $$v)},expression:"key.status"}})],1)],1)}),0),_vm._v(" "),_c('el-col',{staticStyle:{"min-width":"200px"},attrs:{"span":12}},_vm._l((_vm.globGamesright),function(key){return _c('div',{staticClass:"grid-content"},[_c('el-form-item',{attrs:{"label":key.long}},[_c('el-switch',{attrs:{"on-text":"开","off-text":"关","disabled":((key.pt_status != undefined) && (key.pt_status === false)) || key.name =='LEBO'},model:{value:(key.status),callback:function ($$v) {_vm.$set(key, "status", $$v)},expression:"key.status"}})],1)],1)}),0)],1)],1),_vm._v(" "),_c('el-row',[_c('div',{staticClass:"w100 tCent"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submit}},[_vm._v(_vm._s(_vm.LANG['保存设置'] || '保存设置'))])],1)])],1)],1),_vm._v(" "),_c('el-col',{staticClass:"mt20",attrs:{"span":4}},[_c('h1',{staticClass:"w100"},[_vm._v(_vm._s(_vm.LANG['密钥设置'] || '密钥设置'))]),_vm._v(" "),_c('div',{staticClass:"base border w100 tCent"},[_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.showKey}},[_vm._v("查看密钥")]),_vm._v(" "),(_vm.create.state)?_c('el-button',{attrs:{"size":"small"},on:{"click":_vm.createKey}},[_vm._v("生成密钥")]):_vm._e(),_vm._v(" "),(_vm.create.showKey)?_c('img',{attrs:{"src":_vm.create.url,"alt":"密钥"}}):_vm._e()],1)])],1)],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/systemSettings/fieldSettings.vue
function injectStyle (context) {
  __webpack_require__(538)
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
  fieldSettings,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var systemSettings_fieldSettings = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/timePicker.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const CONFIG = {
  HOUR_TOKENS: ['HH', 'H', 'hh', 'h', 'kk', 'k'],
  MINUTE_TOKENS: ['mm', 'm'],
  SECOND_TOKENS: ['ss', 's'],
  APM_TOKENS: ['A', 'a']
};
/* harmony default export */ var timePicker = ({
  name: 'VueTimepicker',
  props: {
    value: {
      type: Object
    },
    hideClearButton: {
      type: Boolean
    },
    format: {
      type: String
    },
    minuteInterval: {
      type: Number
    },
    secondInterval: {
      type: Number
    },
    id: {
      type: String
    }
  },

  data() {
    return {
      hours: [],
      minutes: [],
      seconds: [],
      apms: [],
      showDropdown: false,
      muteWatch: false,
      hourType: 'HH',
      minuteType: 'mm',
      secondType: '',
      apmType: '',
      hour: '',
      minute: '',
      second: '',
      apm: '',
      fullValues: undefined
    };
  },

  computed: {
    displayTime() {
      let formatString = String(this.format || 'HH:mm');

      if (this.hour) {
        formatString = formatString.replace(new RegExp(this.hourType, 'g'), this.hour);
      }

      if (this.minute) {
        formatString = formatString.replace(new RegExp(this.minuteType, 'g'), this.minute);
      }

      if (this.second && this.secondType) {
        formatString = formatString.replace(new RegExp(this.secondType, 'g'), this.second);
      }

      if (this.apm && this.apmType) {
        formatString = formatString.replace(new RegExp(this.apmType, 'g'), this.apm);
      }

      return formatString;
    },

    showClearBtn() {
      if (this.hour && this.hour !== '' || this.minute && this.minute !== '') {
        return true;
      }

      return false;
    }

  },
  watch: {
    'format': 'renderFormat',

    minuteInterval(newInteval) {
      this.renderList('minute', newInteval);
    },

    secondInterval(newInteval) {
      this.renderList('second', newInteval);
    },

    'value': 'readValues',
    'displayTime': 'fillValues'
  },
  methods: {
    formatValue(type, i) {
      switch (type) {
        case 'H':
        case 'm':
        case 's':
          return String(i);

        case 'HH':
        case 'mm':
        case 'ss':
          return i < 10 ? `0${i}` : String(i);

        case 'h':
        case 'k':
          return String(i + 1);

        case 'hh':
        case 'kk':
          return i + 1 < 10 ? `0${i + 1}` : String(i + 1);

        default:
          return '';
      }
    },

    checkAcceptingType(validValues, formatString, fallbackValue) {
      if (!validValues || !formatString || !formatString.length) {
        return '';
      }

      for (let i = 0; i < validValues.length; i++) {
        if (formatString.indexOf(validValues[i]) > -1) {
          return validValues[i];
        }
      }

      return fallbackValue || '';
    },

    renderFormat(newFormat) {
      newFormat = newFormat || this.format;

      if (!newFormat || !newFormat.length) {
        newFormat = 'HH:mm';
      }

      this.hourType = this.checkAcceptingType(CONFIG.HOUR_TOKENS, newFormat, 'HH');
      this.minuteType = this.checkAcceptingType(CONFIG.MINUTE_TOKENS, newFormat, 'mm');
      this.secondType = this.checkAcceptingType(CONFIG.SECOND_TOKENS, newFormat);
      this.apmType = this.checkAcceptingType(CONFIG.APM_TOKENS, newFormat);
      this.renderHoursList();
      this.renderList('minute');

      if (this.secondType) {
        this.renderList('second');
      }

      if (this.apmType) {
        this.renderApmList();
      }

      const self = this;
      this.$nextTick(() => {
        self.readValues();
      });
    },

    renderHoursList() {
      const hoursCount = this.hourType === 'h' || this.hourType === 'hh' ? 12 : 24;
      this.hours = [];

      for (let i = 0; i < hoursCount; i++) {
        this.hours.push(this.formatValue(this.hourType, i));
      }
    },

    renderList(listType, interval) {
      if (listType === 'second') {
        interval = interval || this.secondInterval;
      } else if (listType === 'minute') {
        interval = interval || this.minuteInterval;
      } else {
        return;
      }

      if (interval === 0) {
        interval = 60;
      } else if (interval > 60) {
        window.console.warn('`' + listType + '-interval` should be less than 60. Current value is', interval);
        interval = 1;
      } else if (interval < 1) {
        window.console.warn('`' + listType + '-interval` should be NO less than 1. Current value is', interval);
        interval = 1;
      } else if (!interval) {
        interval = 1;
      }

      if (listType === 'minute') {
        this.minutes = [];
      } else {
        this.seconds = [];
      }

      for (let i = 0; i < 60; i += interval) {
        if (listType === 'minute') {
          this.minutes.push(this.formatValue(this.minuteType, i));
        } else {
          this.seconds.push(this.formatValue(this.secondType, i));
        }
      }
    },

    renderApmList() {
      this.apms = [];

      if (!this.apmType) {
        return;
      }

      this.apms = this.apmType === 'A' ? ['AM', 'PM'] : ['am', 'pm'];
    },

    readValues() {
      if (!this.value || this.muteWatch) {
        return;
      }

      const timeValue = JSON.parse(JSON.stringify(this.value || {}));
      const values = Object.keys(timeValue);

      if (values.length === 0) {
        return;
      }

      if (values.indexOf(this.hourType) > -1) {
        this.hour = timeValue[this.hourType];
      }

      if (values.indexOf(this.minuteType) > -1) {
        this.minute = timeValue[this.minuteType];
      }

      if (values.indexOf(this.secondType) > -1) {
        this.second = timeValue[this.secondType];
      } else {
        this.second = 0;
      }

      if (values.indexOf(this.apmType) > -1) {
        this.apm = timeValue[this.apmType];
      }

      this.fillValues();
    },

    fillValues() {
      let fullValues = {};
      const baseHour = this.hour;
      const baseHourType = this.hourType;
      const hourValue = baseHour || baseHour === 0 ? Number(baseHour) : '';
      const baseOnTwelveHours = this.isTwelveHours(baseHourType);
      const apmValue = baseOnTwelveHours && this.apm ? String(this.apm).toLowerCase() : false;
      CONFIG.HOUR_TOKENS.forEach(token => {
        if (token === baseHourType) {
          fullValues[token] = baseHour;
          return;
        }

        let value;
        let apm;

        switch (token) {
          case 'H':
          case 'HH':
            if (!String(hourValue).length) {
              fullValues[token] = '';
              return;
            } else if (baseOnTwelveHours) {
              if (apmValue === 'pm') {
                value = hourValue < 12 ? hourValue + 12 : hourValue;
              } else {
                value = hourValue % 12;
              }
            } else {
              value = hourValue % 24;
            }

            fullValues[token] = token === 'HH' && value < 10 ? `0${value}` : String(value);
            break;

          case 'k':
          case 'kk':
            if (!String(hourValue).length) {
              fullValues[token] = '';
              return;
            } else if (baseOnTwelveHours) {
              if (apmValue === 'pm') {
                value = hourValue < 12 ? hourValue + 12 : hourValue;
              } else {
                value = hourValue === 12 ? 24 : hourValue;
              }
            } else {
              value = hourValue === 0 ? 24 : hourValue;
            }

            fullValues[token] = token === 'kk' && value < 10 ? `0${value}` : String(value);
            break;

          case 'h':
          case 'hh':
            if (apmValue) {
              value = hourValue;
              apm = apmValue || 'am';
            } else {
              if (!String(hourValue).length) {
                fullValues[token] = '';
                fullValues.a = '';
                fullValues.A = '';
                return;
              } else if (hourValue > 11) {
                apm = 'pm';
                value = hourValue === 12 ? 12 : hourValue % 12;
              } else {
                if (baseOnTwelveHours) {
                  apm = '';
                } else {
                  apm = 'am';
                }

                value = hourValue % 12 === 0 ? 12 : hourValue;
              }
            }

            fullValues[token] = token === 'hh' && value < 10 ? `0${value}` : String(value);
            fullValues.a = apm;
            fullValues.A = apm.toUpperCase();
            break;
        }
      });

      if (this.minute || this.minute === 0) {
        const minuteValue = Number(this.minute);
        fullValues.m = String(minuteValue);
        fullValues.mm = minuteValue < 10 ? `0${minuteValue}` : String(minuteValue);
      } else {
        fullValues.m = '';
        fullValues.mm = '';
      }

      if (this.second || this.second === 0) {
        const secondValue = Number(this.second);
        fullValues.s = String(secondValue);
        fullValues.ss = secondValue < 10 ? `0${secondValue}` : String(secondValue);
      } else {
        fullValues.s = '';
        fullValues.ss = '';
      }

      this.fullValues = fullValues;
      this.updateTimeValue(fullValues);
      this.$emit('change', {
        data: fullValues
      });
    },

    updateTimeValue(fullValues) {
      this.muteWatch = true;
      const self = this;
      const baseTimeValue = JSON.parse(JSON.stringify(this.value || {}));
      let timeValue = {};
      Object.keys(baseTimeValue).forEach(key => {
        timeValue[key] = fullValues[key];
      });
      this.$emit('input', timeValue);
      this.$nextTick(() => {
        self.muteWatch = false;
      });
    },

    isTwelveHours(token) {
      return token === 'h' || token === 'hh';
    },

    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    select(type, value) {
      if (type === 'hour') {
        this.hour = value;
      } else if (type === 'minute') {
        this.minute = value;
      } else if (type === 'second') {
        this.second = value;
      } else if (type === 'apm') {
        this.apm = value;
      }
    },

    clearTime() {
      this.hour = '';
      this.minute = '';
      this.second = '';
      this.apm = '';
    }

  },

  mounted() {
    this.renderFormat();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-677c9490","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/timePicker.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"timePicker"}},[_c('span',{staticClass:"time-picker"},[(!_vm.hideClearButton)?_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.showDropdown && _vm.showClearBtn),expression:"!showDropdown && showClearBtn"}],staticClass:"el-input__icon  el-icon-circle-close closeIcon",on:{"click":function($event){$event.stopPropagation();return _vm.clearTime($event)}}}):_vm._e(),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.displayTime),expression:"displayTime"}],staticClass:"display-time  el-input__inner",attrs:{"id":_vm.id,"type":"text","readonly":""},domProps:{"value":(_vm.displayTime)},on:{"click":function($event){$event.stopPropagation();return _vm.toggleDropdown($event)},"input":function($event){if($event.target.composing){ return; }_vm.displayTime=$event.target.value}}}),_vm._v(" "),(_vm.showDropdown)?_c('div',{staticClass:"time-picker-overlay",on:{"click":function($event){$event.stopPropagation();return _vm.toggleDropdown($event)}}}):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDropdown),expression:"showDropdown"}],staticClass:"dropdown"},[_c('div',{staticClass:"select-list"},[_c('ul',{staticClass:"hours removeScroll"},[_c('li',{staticClass:"hint",domProps:{"textContent":_vm._s(_vm.hourType)}}),_vm._v(" "),_vm._l((_vm.hours),function(hr){return _c('li',{class:{active: _vm.hour === hr},domProps:{"textContent":_vm._s(hr)},on:{"click":function($event){$event.stopPropagation();return _vm.select('hour', hr)}}})})],2),_vm._v(" "),_c('ul',{staticClass:"minutes removeScroll"},[_c('li',{staticClass:"hint",domProps:{"textContent":_vm._s(_vm.minuteType)}}),_vm._v(" "),_vm._l((_vm.minutes),function(m){return _c('li',{class:{active: _vm.minute === m},domProps:{"textContent":_vm._s(m)},on:{"click":function($event){$event.stopPropagation();return _vm.select('minute', m)}}})})],2),_vm._v(" "),(_vm.secondType)?_c('ul',{staticClass:"seconds removeScroll"},[_c('li',{staticClass:"hint",domProps:{"textContent":_vm._s(_vm.secondType)}}),_vm._v(" "),_vm._l((_vm.seconds),function(s){return _c('li',{class:{active: _vm.second === s},domProps:{"textContent":_vm._s(s)},on:{"click":function($event){$event.stopPropagation();return _vm.select('second', s)}}})})],2):_vm._e(),_vm._v(" "),(_vm.apmType)?_c('ul',{staticClass:"apms"},[_c('li',{staticClass:"hint",domProps:{"textContent":_vm._s(_vm.apmType)}}),_vm._v(" "),_vm._l((_vm.apms),function(a){return _c('li',{class:{active: _vm.apm === a},domProps:{"textContent":_vm._s(a)},on:{"click":function($event){$event.stopPropagation();return _vm.select('apm', a)}}})})],2):_vm._e()])])])])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/timePicker.vue
function injectStyle (context) {
  __webpack_require__(261)
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
  timePicker,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_timePicker = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);