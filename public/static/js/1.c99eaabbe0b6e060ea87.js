(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/components/myDatePicker.vue + 4 modules
var myDatePicker = __webpack_require__(240);

// EXTERNAL MODULE: ./src/components/timePicker.vue + 2 modules
var timePicker = __webpack_require__(269);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/dateTimePicker.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var dateTimePicker = ({
  data() {
    return {
      LANG,
      myval: '',
      showdrop: false,
      times: {
        HH: '00',
        mm: '00',
        ss: '00'
      },
      vueinit: false,
      datetimes: '',
      // 是否删除
      isDel: false
    };
  },

  props: {
    datekey: String,
    value: String,
    showview: {
      type: Boolean,
      default: true
    },
    isEnd: {
      type: Boolean,
      default: false
    },
    showTime: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    init() {
      this.myval = this.value;
      this.vueinit = true;

      if (this.myval) {
        this.setVal();
      } else {
        this.delVal();
      }
    },

    setVal() {
      this.myval = this.value || '';

      if (this.myval.length === 10) {
        this.times.HH = '00';
        this.times.mm = '00';
        this.times.ss = '00';
      } else {
        this.times.HH = this.getbasetimes(this.value, 'HH');
        this.times.mm = this.getbasetimes(this.value, 'mm');
        this.times.ss = this.getbasetimes(this.value, 'ss');
      }

      this.datetimes = this.mergeDateTime(this.myval);
    },

    getDateval(val) {
      this.datetimes = this.mergeDateTime(val.day);
      this.$emit('input', this.datetimes);
      this.$emit('get-val', {
        data: this.datetimes,
        daykey: this.datekey
      });
    },

    toggleDropdown(e) {
      this.$nextTick(() => {
        if (this.showdrop) {
          e.stopPropagation();
        }

        this.showdrop = !this.showdrop;
      });
    },

    // 拼接时分秒
    mergeDateTime(day, times) {
      this.isDel = false;

      if (!day) {
        return sessionStorage.sysTime;
      }

      if (times) {
        return FORMATDATEPICKER(day) + ' ' + times.HH + ':' + times.mm + ':' + times.ss;
      } else {
        return FORMATDATEPICKER(day) + ' ' + this.times.HH + ':' + this.times.mm + ':' + this.times.ss;
      }
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

    // 切换时分秒
    changetimes(val) {
      this.isDel = false;
      this.datetimes = this.mergeDateTime(this.datetimes, val.data);
    },

    // 删除值
    delVal() {
      this.isDel = true;
      this.myval = '';
      this.times.HH = '00';
      this.times.mm = '00';
      this.times.ss = '00';
      this.$emit('input', '');
      this.$emit('get-val', {
        data: '',
        daykey: this.datekey
      });
    }

  },
  components: {
    mydatepicker: myDatePicker["a" /* default */],
    timepicker: timePicker["a" /* default */]
  },
  computed: {
    nowval() {
      if (this.isDel) {
        this.$emit('input', '');
        this.$emit('get-val', {
          data: '',
          daykey: this.datekey
        });
        return '';
      } else {
        this.$emit('input', this.datetimes);
        this.$emit('get-val', {
          data: this.datetimes,
          daykey: this.datekey
        });
        return this.datetimes;
      }
    }

  },
  watch: {
    value: function (newval) {
      this.init();
    }
  },

  mounted() {
    if (this.vueinit) {
      $('body').on('click', () => {
        this.showdrop = false;
      });
    }
  },

  created() {
    this.init();

    if (this.isEnd) {
      this.times.HH = '23', this.times.mm = '59', this.times.ss = '59';
    }
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d56ff54e","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/dateTimePicker.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{attrs:{"id":"dateTimePicker"}},[_c('el-col',{staticClass:"dateInput",attrs:{"span":15}},[_c('input',{staticClass:"el-input__inner",attrs:{"autocomplete":"off","size":"small","type":"text","readonly":""},domProps:{"value":_vm.nowval},on:{"click":_vm.toggleDropdown}}),_vm._v(" "),_c('i',{staticClass:"el-input__icon ",class:{'el-icon-circle-close closeIcon':_vm.nowval,'el-icon-date':!_vm.nowval,},on:{"click":function($event){$event.stopPropagation();return _vm.delVal($event)}}})]),_vm._v(" "),_c('el-col',[(_vm.showdrop)?_c('el-row',{staticClass:"date_and_time"},[_c('el-col',{staticClass:"date_select",attrs:{"span":13}},[_c('mydatepicker',{staticClass:"date",attrs:{"datekey":_vm.datekey,"showview":_vm.showview},on:{"get-date":_vm.getDateval},model:{value:(_vm.myval),callback:function ($$v) {_vm.myval=$$v},expression:"myval"}})],1),_vm._v(" "),_c('el-col',{directives:[{name:"show",rawName:"v-show",value:(_vm.showTime),expression:"showTime"}],attrs:{"span":11}},[_c('timepicker',{attrs:{"format":"HH:mm:ss","value":_vm.times},on:{"change":_vm.changetimes}})],1),_vm._v(" "),(_vm.showdrop)?_c('el-col',{staticClass:"dateEnter"},[_c('el-button',{on:{"click":function($event){$event.stopPropagation();return _vm.toggleDropdown($event)}}},[_vm._v(_vm._s(_vm.LANG['确定'] || ''))])],1):_vm._e()],1):_vm._e()],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/dateTimePicker.vue
function injectStyle (context) {
  __webpack_require__(408)
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
  dateTimePicker,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_dateTimePicker = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/upload.vue
//
//
//
//
//
//
//
//
//
//
//
//
//import ElButton from "../../node_modules/element-ui/packages/button/src/button";
/* harmony default export */ var upload = ({
  //components: {ElButton},
  props: {
    // 外部KEY
    keys: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      imgBaseUrl: sessionStorage.URL_RPI,
      stsToken: sessionStorage.stsToken,
      LANG,
      loading: false,
      imgUrl: '',
      imgConfig: {
        file: '',
        key: ''
      }
    };
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      this.loading = false;
      this.imgUrl = '';
      this.imgBaseUrl = sessionStorage.URL_RPI;
      this.stsToken = sessionStorage.stsToken;
      this.imgConfig.key = this.keys;
    },

    change() {
      let _this = this,
          str = _this.$('#file').val(),
          arr = str.split('\\'),
          formData = new FormData(_this.$("#formTag")[0]);

      _this.loading = true, formData.append("pictrue", arr[arr.length - 1]);
      formData.append("pf", 'h5');
      /**
       * 存一下this对象，
       * 将在ajax的回调函数中，
       * 将要用这个对象，
       * 用它来改变父盒子的背景图
       *
       */
      //

      this.$.ajax({
        url: _this.imgBaseUrl,
        type: "post",
        dataType: "json",
        cache: false,
        headers: {
          'Authorization': _this.stsToken
        },
        data: formData,
        processData: false,
        // 不处理数据
        contentType: false,
        // 不设置内容类型
        success: function (v) {
          if (v.data && v.code === 10000) {
            _this.imgUrl = v.data.cache_url;

            _this.$message.success('上传图片成功');

            _this.loading = false;

            if (v.data.file_name) {
              _this.imgConfig.file = v.data.file_name;
            }
          } else {
            _this.loading = false;

            _this.$message.error('资源站密钥失效，上传图片失败，请重新登录。');
          }
        },
        error: function (res) {
          _this.$message.error('上传图片失败');

          _this.loading = false;
        }
      }); //                _this.imgName
      //                    ? _this.$emit('doUpload', {"file": _this.imgName, 'key': _this.keys})
      //                    : _this.$message.error('获取图片失败')
    }

  },
  watch: {
    imgConfig: {
      handler(val, old) {
        if (val && val.file) {
          this.$emit('doUpload', {
            "file": val.file,
            'key': val.key
          });
        }
      },

      //是否绑定初始值
      immediate: true,
      //深度监听
      deep: true
    }
  },
  computed: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-478de2d2","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/upload.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{staticClass:"warp"},[_c('form',{attrs:{"id":"formTag","enctype":"multipart/form-data"}},[_c('div',{staticClass:"uploadImgBtn",attrs:{"id":"uploadImgBtn"}},[_c('input',{staticClass:"uploadImg",attrs:{"type":"file","name":"file","id":"file","loading":true},on:{"change":_vm.change}}),_c('i',{staticClass:"el-icon-upload"}),_vm._v("选择图片\n        ")])]),_vm._v(" "),(_vm.loading)?_c('div',{staticClass:"up-loading"},[_c('i',{staticClass:"el-icon-loading"}),_vm._v(" 正在上传图片...")]):_vm._e(),_vm._v(" "),(_vm.imgUrl)?_c('img',{staticClass:"preview",attrs:{"src":_vm.imgUrl,"alt":"图片预览"}}):_vm._e()])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/upload.vue
function injectStyle (context) {
  __webpack_require__(218)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-478de2d2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  upload,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_upload = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/UEditor.vue
//
//
//
//
//
//
const toolbar = [[// 'anchor', //锚点
// 'undo', //撤销
// 'redo', //重做
'bold', //加粗
'indent', //首行缩进
// 'snapscreen', //截图
'italic', //斜体
'underline', //下划线
'strikethrough', //删除线
'subscript', //下标
'fontborder', //字符边框
'superscript', //上标
'formatmatch', //格式刷
// 'source', //源代码
'blockquote', //引用
'pasteplain', //纯文本粘贴模式
'selectall', //全选
// 'print', //打印
// 'preview', //预览
'horizontal', //分隔线
'removeformat', //清除格式
'time', //时间
'date', //日期
'unlink', //取消链接
'insertrow', //前插入行
'insertcol', //前插入列
'mergeright', //右合并单元格
'mergedown', //下合并单元格
'deleterow', //删除行
'deletecol', //删除列
'splittorows', //拆分成行
'splittocols', //拆分成列
'splittocells', //完全拆分单元格
'deletecaption', //删除表格标题
'inserttitle', //插入标题
'mergecells', //合并多个单元格
'deletetable', //删除表格
'cleardoc', //清空文档
'insertparagraphbeforetable', //"表格前插入行"
'insertcode', //代码语言
'fontfamily', //字体
'fontsize', //字号
'paragraph', //段落格式
// 'simpleupload', //单图上传
'insertimage', //多图上传
// 'edittable', //表格属性
'edittd', //单元格属性
'link', //超链接
// 'emotion', //表情
'spechars', //特殊字符
'searchreplace', //查询替换
// 'map', //Baidu地图
// 'gmap', //Google地图
// 'insertvideo', //视频
'help', //帮助
'justifyleft', //居左对齐
'justifyright', //居右对齐
'justifycenter', //居中对齐
'justifyjustify', //两端对齐
'forecolor', //字体颜色
'backcolor', //背景色
'insertorderedlist', //有序列表
'insertunorderedlist', //无序列表
// 'fullscreen', //全屏
'directionalityltr', //从左向右输入
'directionalityrtl', //从右向左输入
'rowspacingtop', //段前距
'rowspacingbottom', //段后距
'pagebreak', //分页
// 'insertframe', //插入Iframe
'imagenone', //默认
'imageleft', //左浮动
'imageright', //右浮动
// 'attachment', //附件
'imagecenter', //居中
// 'wordimage', //图片转存
'lineheight', //行间距
'edittip ', //编辑提示
'customstyle', //自定义标题
'autotypeset', //自动排版
// 'webapp', //百度应用
'touppercase', //字母大写
'tolowercase', //字母小写
// 'background', //背景
// 'template', //模板
// 'scrawl', //涂鸦
// 'music', //音乐
'inserttable']];
/* harmony default export */ var UEditor = ({
  name: 'wangEditor',

  data() {
    return {};
  },

  props: {
    value: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: 'editor'
    },
    config: {
      type: Object,
      default: function () {
        return {};
      }
    }
  },

  mounted() {
    window.UEditorValueCount = 0;
    const config = {
      toolbars: toolbar,
      autoFloatEnabled: false,
      enableAutoSave: false,
      autoSyncData: false,
      serverUrl: URL.api + "/ueditor",
      autoHeightEnabled: false,
      initialFrameHeight: 300
    };
    this.UE = UE.getEditor(this.id, Object.assign(config, this.config));
    this.UE.ready(() => {
      this.UE.setContent(this.value);
    });
    this.UE.addListener('contentChange', () => {
      let content = UE.getEditor(this.id).getContent();
      this.$emit('getContentLength', {
        'num': this.UE.getContentLength(true),
        'key': this.id
      });
      this.$emit('input', content);
    });
  },

  destroyed() {
    this.UE.destroy();
    delete window.UEditorValueCount;
  },

  watch: {
    value: function (newval, oldval) {
      if (window.UEditorValueCount === 0) {
        this.$nextTick(() => {
          if (this.UE.isReady === 1) {
            this.UE.setContent(newval);
            this.UE.focus(true);
            window.UEditorValueCount++;
          }
        });
      }
    }
  },
  directives: {
    modifyDefaultWidth: {
      bind: function (el) {
        el.style.width = '100%';
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9611ed94","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/UEditor.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('script',{directives:[{name:"modifyDefaultWidth",rawName:"v-modifyDefaultWidth"}],attrs:{"id":_vm.id,"type":"text/plain"}})])}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/UEditor.vue
function injectStyle (context) {
  __webpack_require__(405)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9611ed94"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  UEditor,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_UEditor = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);