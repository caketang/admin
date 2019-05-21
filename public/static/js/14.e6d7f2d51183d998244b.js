(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: delegated ./node_modules/mavon-editor/dist/mavon-editor.js from dll-reference vendor_library
var mavon_editorfrom_dll_reference_vendor_library = __webpack_require__(444);

// EXTERNAL MODULE: ./node_modules/mavon-editor/dist/css/index.css
var css = __webpack_require__(445);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/markdownEdit.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


let toolbarsObj = {
  bold: true,
  // 粗体
  italic: true,
  // 斜体
  header: true,
  // 标题
  underline: false,
  // 下划线
  strikethrough: true,
  // 中划线
  mark: true,
  // 标记
  superscript: true,
  // 上角标
  subscript: true,
  // 下角标
  quote: true,
  // 引用
  ol: true,
  // 有序列表
  ul: true,
  // 无序列表
  link: true,
  // 链接
  imagelink: true,
  // 图片链接
  code: false,
  // code
  table: true,
  // 表格
  subfield: true,
  // 是否需要分栏
  fullscreen: false,
  // 全屏编辑
  readmodel: false,
  // 沉浸式阅读
  htmlcode: false,
  // 展示html源码
  help: true,
  // 帮助
  undo: true,
  // 上一步
  redo: true,
  // 下一步
  trash: true,
  // 清空
  save: false,
  // 保存（触发events中的save事件）
  navigation: false,
  // 导航目录
  alignleft: false,
  // 左对齐
  aligncenter: false,
  // 居中
  alignright: false // 右对齐

};
/* harmony default export */ var markdownEdit = ({
  data() {
    return {
      defaultValue: "",
      imgUploadBaseUrl: URL.rpi,
      imgBaseUrl: URL.img
    };
  },

  props: {
    content: String,
    keys: {
      type: String,
      default: ""
    },
    updated: {
      type: Boolean,
      default: false
    },
    toolbarConfig: {
      type: Object,
      default: function () {
        return toolbarsObj;
      }
    }
  },

  mounted() {
    Object.assign(toolbarsObj, this.toolbarConfig);
    this.defaultValue = this.content;
  },

  beforeDestroy() {
    this.defaultValue = "";
  },

  methods: {
    // 编辑区的值发生变化的回调，参数value：原始markdowm字符串，reder：解析后的结果
    valueChange: function (value, reder) {
      // 向父组件派发事件并传值
      this.$emit("change_text", {
        val: value,
        keys: this.keys
      });
    },
    // 图片文件添加回调事件, 参数filename: 写在md中的文件名, File: File Object)
    imgAdd: function (filename, File) {
      this.formatDetection(filename, File);
    },
    // 检测选择的图片是否符合上传要求
    formatDetection: function (filename, file) {
      const fileFormat = ['jpg', 'jpeg', 'png'];

      if (file.size / 1024 < 10 * 1024) {
        // 判断文件格式是否符合
        let lowerCase = file.type.split('/')[1];
        let capital = lowerCase.toUpperCase();
        let isLowerCase = fileFormat.indexOf(lowerCase);
        let isCapital = fileFormat.indexOf(capital);

        if (isLowerCase != -1 || isCapital != -1) {
          if (!this.isMatch(file.name.split('.')[0])) {
            this.$message(`${file.name}文件名格式不符合！只能是英文数字下划线`); // 不符合的就del掉

            this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(filename);
            setTimeout(() => {
              document.querySelector('.fa-mavon-undo').click();
            }, 500);
          } else {
            // 符合的就submit
            this.imgSubmit(filename, file);
          }
        } else {
          this.$message(`${file.name}文件格式不符合！`);
          this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(filename);
          setTimeout(() => {
            document.querySelector('.fa-mavon-undo').click();
          }, 500);
        }
      } else {
        this.$message(`${file.name}文件大小超过限制！`);
        this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(filename);
        setTimeout(() => {
          document.querySelector('.fa-mavon-undo').click();
        }, 500);
      }
    },
    isMatch: function (str) {
      // 匹配字母数字下划线开头或结尾的任意字符
      let reg = /^[a-zA-Z\d_]*$/;
      return reg.test(str);
    },

    imgSubmit(name, img) {
      let formData = new FormData();
      formData.append('post_type', 'upfile');
      formData.append('upfile[]', img, img.name);
      let vm = this;
      this.$.autoAjax('post', this.imgUploadBaseUrl, formData, '', {
        ok: res => {
          if (res.state && res.state == 0) {
            let url = '';
            url = this.imgBaseUrl + res.data.file[0].url;
            vm.$refs.mavonEditor.$img2Url(name, url);
            this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(name);
          } else {
            this.$message.error(LANG['文件上传失败，请稍后重试！'] || '文件上传失败，请稍后重试！');
            this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(name);
            setTimeout(() => {
              document.querySelector('.fa-mavon-undo').click();
            }, 500);
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.post(this.imgUploadBaseUrl, formData, URLCONFIG).then((res)=>{
      //   if (res.data.state  && res.data.state == 0) {
      //     let url = '';
      //     url = this.imgBaseUrl + res.data.data.file[0].url;
      //     vm.$refs.mavonEditor.$img2Url(name, url);
      //     this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(name);
      //   } else {
      //     this.$message.error(LANG['文件上传失败，请稍后重试！'] || '文件上传失败，请稍后重试！');
      //     this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(name);
      //     setTimeout(() => {
      //       document.querySelector('.fa-mavon-undo').click();
      //     }, 500);
      //   }
      // })
      .catch(err => {
        this.$message.error(LANG['服务器错误请稍后重试！'] || '服务器错误请稍后重试！');
        this.$refs.mavonEditor.$refs.toolbar_left.$imgDelByFilename(name);
        setTimeout(() => {
          document.querySelector('.fa-mavon-undo').click();
        }, 500);
      });
    }

  },
  watch: {
    content: function (newval, oldval) {
      this.$nextTick(() => {
        this.defaultValue = newval;
      });
    }
  },
  components: {
    mavonEditor: mavon_editorfrom_dll_reference_vendor_library["mavonEditor"]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-207a88ad","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/markdownEdit.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"markdownEdit"}},[_c('mavon-editor',{ref:"mavonEditor",staticClass:"mavonEditorContainer",attrs:{"toolbars":_vm.toolbarConfig,"value":_vm.defaultValue,"toolbarsFlag":true,"default_open":'edit',"subfield":false},on:{"change":_vm.valueChange,"imgAdd":_vm.imgAdd}})],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/markdownEdit.vue
function injectStyle (context) {
  __webpack_require__(443)
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
  markdownEdit,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_markdownEdit = (Component.exports);

// EXTERNAL MODULE: ./src/components/upload.vue + 2 modules
var upload = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/activeMode_email.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var activeMode_email = ({
  data() {
    return {
      LANG,
      modeData: {
        name: "",
        //string #活动名称
        type_id: "",
        //int ：活动类型ID
        title: "",
        //string #活动标题
        begin_time: "",
        //datetime #开始时间
        end_time: "",
        //datetime #结束时间
        issue_mode: "",
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
        statusWdl: "",
        //提款要求选择
        withdrawalsBs: "",
        //提款倍数
        withdrawalsGd: "",
        //提款要求固定输入金额
        status: '1',
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
        link: ""
      },
      //下拉优惠类型列表
      type_idList: [],
      //获取有效会员等级
      vipList: [],
      //默认选中项
      checkedDefut: [],
      isIndeterminate: true,
      checkList: [],
      //                checkAll: true,//全选会员等级
      //获取页面传过来的值
      seachData: {},
      languageList: [],
      // 图片上传地址
      uploadUrl: ""
    };
  },

  components: {
    markdownEdit: components_markdownEdit,
    upload: upload["a" /* default */]
  },
  methods: {
    init() {
      //获取路由传参
      if (this.$route.query) {
        let query = this.$route.query;

        for (let k in query) {
          this.seachData[k] = query[k];
        }
      } //初始化优惠活动名称


      this.modeData.name = this.seachData.label; //                获取优惠类型列表

      this.$http.get(URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", URLCONFIG).then(res => {
        if (res.data.state == 0 && res.data.data) {
          let model = res.data.data || [];

          for (let k in model) {
            this.type_idList.push({
              "label": model[k].name,
              "value": model[k].id.toString()
            });
          }
        }
      }); //获取会员列表

      let levelUrl = URL.api + ROUTES.GET.user.level.list;
      this.$http.get(levelUrl, URLCONFIG).then(res => {
        let model = res.data.data;

        for (let i in model) {
          this.vipList.push({
            "label": model[i].name,
            "value": model[i].id
          });
        }
      }).catch(function (err) {//                    console.log(err)
      });
      let langeUrl = URL.api + ROUTES.GET.langeages;
      this.$http.get(langeUrl, URLCONFIG).then(res => {
        let model = res.data.data;

        for (let i in model) {
          this.languageList.push({
            "label": model[i].name,
            "value": model[i].id.toString()
          });
        }
      });
    },

    //全选
    handleCheckAllChange(event) {
      let checkList = [];

      for (let v in this.vipList) {
        checkList[v] = this.vipList[v].label;
      }

      ;
      this.checkedDefut = event.target.checked ? checkList : [];
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
      let formData = {
        id: "37",
        name: this.modeData.name,
        type_id: "9",
        title: this.modeData.title,
        begin_time: this.modeData.begin_time,
        end_time: this.modeData.end_time,
        description: this.modeData.description,
        cover: this.modeData.cover,
        language_id: parseInt(this.modeData.language_id),
        language_name: this.modeData.language_name,
        content: this.modeData.content,
        issue_mode: this.modeData.issue_mode,
        status: this.modeData.status,
        sort: this.modeData.sort,
        open_mode: this.modeData.open_mode,
        link: this.modeData.link,
        rule: {
          id: "37",
          template_id: "9",
          template_name: "充值优惠",
          active_id: "37",
          rule: {
            company: {
              first: [{
                money: 100000,
                type: 1,
                prize: 10000
              }, {
                money: 200000,
                type: 2,
                prize: 10,
                upper_limit: 100000
              }],
              again: [{
                money: 100000,
                type: 1,
                prize: 5000
              }, {
                money: 200000,
                type: 2,
                prize: 8,
                upper_limit: 100000
              }]
            },
            online: {
              first: [{
                money: 100000,
                type: 1,
                prize: 10
              }, {
                money: 200000,
                type: 2,
                prize: 10,
                upper_limit: 100000
              }],
              again: [{
                money: 100000,
                type: 1,
                prize: 10000
              }, {
                money: 200000,
                type: 2,
                prize: 10,
                upper_limit: 100000
              }]
            }
          },
          luckydraw_condition: null,
          limit_times: null,
          withdraw_require: "times",
          withdraw_require_val: "5",
          member_level: null,
          issue_time: "0",
          issue_cycle: null,
          issue_mode: "auto",
          games: ""
        }
      };
      let url = URL.api + `/active/template.fix/${formData.id}`;

      if (type == 'add') {
        this.$http.put(url, formData, URLCONFIG).then(data => {//                            console.log(data)
        });
      } else {
        this.$http.put(url, URLCONFIG).then(data => {//                            console.log(data)
        });
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
      this.modeData.cover = obj[0];
    },

    changeLanguage(value) {
      let languageList = this.languageList;
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  watch: {
    '$route'(to, from) {
      //获取路由传参
      if (this.$route.query) {
        let query = this.$route.query;

        for (let k in query) {
          this.seachData[k] = query[k];
        }
      } //初始化优惠活动名称


      this.modeData.name = this.seachData.label;
    }

  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7fc0a322","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/activeMode_email.vue
var activeMode_email_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"activeMode"}},[_c('el-col',{attrs:{"span":24}},[_c('el-col',{staticClass:"Layout",attrs:{"span":12}},[_c('h3',{staticClass:"tCent",domProps:{"textContent":_vm._s(_vm.LANG['规则设置'] || '规则设置')}}),_vm._v(" "),_c('el-form',{ref:"form",staticClass:"mt20",attrs:{"model":_vm.modeData,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"优惠活动名称"}},[_c('el-input',{staticClass:"w80",attrs:{"disabled":"true"},model:{value:(_vm.modeData.name),callback:function ($$v) {_vm.$set(_vm.modeData, "name", $$v)},expression:"modeData.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"优惠类型"}},[_c('el-select',{staticClass:"w80",attrs:{"placeholder":"请选择类型"},model:{value:(_vm.modeData.type_id),callback:function ($$v) {_vm.$set(_vm.modeData, "type_id", $$v)},expression:"modeData.type_id"}},_vm._l((_vm.type_idList),function(item,index){return _c('el-option',{key:item.index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"有效时间"}},[_c('el-col',{attrs:{"span":10}},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择开始日期"},model:{value:(_vm.modeData.begin_time),callback:function ($$v) {_vm.$set(_vm.modeData, "begin_time", $$v)},expression:"modeData.begin_time"}})],1),_vm._v(" "),_c('el-col',{staticClass:"line",attrs:{"span":1}},[_vm._v("-")]),_vm._v(" "),_c('el-col',{attrs:{"span":10}},[_c('el-date-picker',{attrs:{"type":"date","placeholder":"选择结束日期"},model:{value:(_vm.modeData.end_time),callback:function ($$v) {_vm.$set(_vm.modeData, "end_time", $$v)},expression:"modeData.end_time"}})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发放奖金","prop":"issue_mode"}},[_c('el-radio',{staticClass:"radio",attrs:{"label":"1"},model:{value:(_vm.modeData.issue_mode),callback:function ($$v) {_vm.$set(_vm.modeData, "issue_mode", $$v)},expression:"modeData.issue_mode"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['自动发放'] || '自动发放')}})]),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"2"},model:{value:(_vm.modeData.issue_mode),callback:function ($$v) {_vm.$set(_vm.modeData, "issue_mode", $$v)},expression:"modeData.issue_mode"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['手动发放'] || '手动发放')}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"优惠规则"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['完成邮箱验证优惠金额'] || '完成邮箱验证优惠金额')}}),_vm._v(" "),_c('el-input',{staticClass:"intW",model:{value:(_vm.modeData.money),callback:function ($$v) {_vm.$set(_vm.modeData, "money", $$v)},expression:"modeData.money"}}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['元'] || '元')}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"领取限制"}},[_c('el-radio',{attrs:{"label":"1"},model:{value:(_vm.modeData.get),callback:function ($$v) {_vm.$set(_vm.modeData, "get", $$v)},expression:"modeData.get"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['限定次数'] || '限定次数')}}),_vm._v(" "),_c('el-input',{staticClass:"intW",model:{value:(_vm.modeData.getMath),callback:function ($$v) {_vm.$set(_vm.modeData, "getMath", $$v)},expression:"modeData.getMath"}})],1),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"},model:{value:(_vm.modeData.get),callback:function ($$v) {_vm.$set(_vm.modeData, "get", $$v)},expression:"modeData.get"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['无限定次数'] || '无限定次数')}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"有效会员等级"}},[_c('el-checkbox',{attrs:{"indeterminate":_vm.isIndeterminate},on:{"change":_vm.handleCheckAllChange},model:{value:(_vm.modeData.vipType),callback:function ($$v) {_vm.$set(_vm.modeData, "vipType", $$v)},expression:"modeData.vipType"}},[_vm._v("全部\n                    ")]),_vm._v(" "),_c('div',{staticStyle:{"margin":"15px 0"}}),_vm._v(" "),_c('el-checkbox-group',{on:{"change":_vm.handleCheckedDefutChange},model:{value:(_vm.checkedDefut),callback:function ($$v) {_vm.checkedDefut=$$v},expression:"checkedDefut"}},_vm._l((_vm.vipList),function(item,index){return _c('el-checkbox',{key:index,attrs:{"label":item.label,"name":"type"}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"发放时间"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['完成邮箱验证后'] || '完成邮箱验证后')}}),_vm._v(" "),_c('el-input',{staticClass:"intW",model:{value:(_vm.modeData.daySign),callback:function ($$v) {_vm.$set(_vm.modeData, "daySign", $$v)},expression:"modeData.daySign"}}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['天发放'] || '天发放')}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"提款要求"}},[_c('el-radio',{attrs:{"label":"1"},model:{value:(_vm.modeData.statusWdl),callback:function ($$v) {_vm.$set(_vm.modeData, "statusWdl", $$v)},expression:"modeData.statusWdl"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['倍数'] || '倍数')}}),_vm._v(" "),_c('el-input',{staticClass:"intW",model:{value:(_vm.modeData.withdrawalsBs),callback:function ($$v) {_vm.$set(_vm.modeData, "withdrawalsBs", $$v)},expression:"modeData.withdrawalsBs"}})],1),_vm._v(" "),_c('el-radio',{attrs:{"label":"2"},model:{value:(_vm.modeData.statusWdl),callback:function ($$v) {_vm.$set(_vm.modeData, "statusWdl", $$v)},expression:"modeData.statusWdl"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['投注流水'] || '投注流水')}}),_vm._v(" "),_c('el-input',{staticClass:"intW",model:{value:(_vm.modeData.withdrawalsGd),callback:function ($$v) {_vm.$set(_vm.modeData, "withdrawalsGd", $$v)},expression:"modeData.withdrawalsGd"}})],1),_vm._v(" "),_c('el-radio',{attrs:{"label":"3"},model:{value:(_vm.modeData.statusWdl),callback:function ($$v) {_vm.$set(_vm.modeData, "statusWdl", $$v)},expression:"modeData.statusWdl"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['无取款要求'] || '无取款要求')}})])],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"状态"}},[_c('el-radio',{staticClass:"radio",attrs:{"label":"1"},model:{value:(_vm.modeData.status),callback:function ($$v) {_vm.$set(_vm.modeData, "status", $$v)},expression:"modeData.status"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['启用'] || '启用')}})]),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"0"},model:{value:(_vm.modeData.status),callback:function ($$v) {_vm.$set(_vm.modeData, "status", $$v)},expression:"modeData.status"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['停用'] || '停用')}})])],1)],1)],1),_vm._v(" "),_c('el-col',{staticClass:"Layout",attrs:{"span":12}},[_c('h3',{staticClass:"tCent",domProps:{"textContent":_vm._s(_vm.LANG['内容设置'] || '内容设置')}}),_vm._v(" "),_c('el-form',{ref:"form",staticClass:"mt20",attrs:{"model":_vm.modeData,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":"优惠活动标题"}},[_c('el-input',{staticClass:"w80",model:{value:(_vm.modeData.title),callback:function ($$v) {_vm.$set(_vm.modeData, "title", $$v)},expression:"modeData.title"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"语言"}},[_c('el-select',{staticClass:"w80",attrs:{"placeholder":"请选择类型"},on:{"change":_vm.changeLanguage},model:{value:(_vm.modeData.language_id),callback:function ($$v) {_vm.$set(_vm.modeData, "language_id", $$v)},expression:"modeData.language_id"}},_vm._l((_vm.languageList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"优惠活动描述"}},[_c('el-input',{staticClass:"w80",attrs:{"type":"textarea"},model:{value:(_vm.modeData.description),callback:function ($$v) {_vm.$set(_vm.modeData, "description", $$v)},expression:"modeData.description"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"优惠活动图片"}},[_c('upload',{attrs:{"uploadUrl":_vm.uploadUrl,"arrList":""},on:{"response":_vm.doSaveFile}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['优惠规则编辑'] || '优惠规则编辑'}},[_c('markdownEdit')],1)],1)],1),_vm._v(" "),(_vm.seachData.type == 'add')?_c('el-col',{staticClass:"tCent",attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary","plain":true},on:{"click":function($event){return _vm.goBack(_vm.type = 'add')}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['取消生成'] || '取消生成')}})]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.doSubmit(_vm.type = 'add')}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['生成优惠'] || '生成优惠')}})])],1):_c('el-col',{staticClass:"tCent",attrs:{"span":24}},[_c('el-button',{attrs:{"type":"primary","plain":true},on:{"click":function($event){return _vm.goBack(_vm.type = 'edit')}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['取消修改'] || '取消修改')}})]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){return _vm.doSubmit(_vm.type = 'edit')}}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['保存修改'] || '保存修改')}})])],1)],1)],1)}
var activeMode_email_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/preAct/activeMode_email.vue
function activeMode_email_injectStyle (context) {
  __webpack_require__(442)
}
/* script */


/* template */

/* template functional */
var activeMode_email_vue_template_functional_ = false
/* styles */
var activeMode_email_vue_styles_ = activeMode_email_injectStyle
/* scopeId */
var activeMode_email_vue_scopeId_ = null
/* moduleIdentifier (server only) */
var activeMode_email_vue_module_identifier_ = null

var activeMode_email_Component = Object(component_normalizer["a" /* default */])(
  activeMode_email,
  activeMode_email_render,
  activeMode_email_staticRenderFns,
  activeMode_email_vue_template_functional_,
  activeMode_email_vue_styles_,
  activeMode_email_vue_scopeId_,
  activeMode_email_vue_module_identifier_
)

/* harmony default export */ var preAct_activeMode_email = __webpack_exports__["default"] = (activeMode_email_Component.exports);


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

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(818);

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);