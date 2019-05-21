(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/element-ui/packages/col/src/col.js
var col = __webpack_require__(231);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/webSet/ADList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var ADList = ({
  data() {
    return {
      formLabelWidth: '100px',
      detailform: {},
      dialogTableVisible: false,
      LANG,
      columnsUrl: "",
      //表格数据
      tableUrl: "",
      baseUrl: "",
      //弹窗
      formConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "轮播广告名称",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "pf",
        "value": "",
        "label": "使用平台",
        "type": "select",
        "list": ARRAYS.PLATFORMS,
        "relation": true,
        "relationKey": 2,
        "linkArr": {
          "0": ARRAYS.position,
          "1": [ARRAYS.position[0]]
        },
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "position",
        "value": "",
        "label": "使用于",
        "type": "select",
        "list": ARRAYS.position,
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "link",
        "value": "",
        "type": "url",
        "label": "跳转链接"
      }, {
        "prop": "language_id",
        "value": "",
        "label": "语言",
        "type": "select",
        "list": [],
        "propVal": "language_name",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "sort",
        "value": "",
        "label": "排序",
        'type': "number",
        "rules": [{
          min: 0
        }],
        "rules": [{
          "require": true
        }, {
          "integer": true
        }]
      }, {
        "prop": "images",
        "value": [],
        'type': "upload",
        "fileNum": 1,
        "label": "轮播图片",
        "action": URL.img,
        "folder": "adlist",
        "rules": [{
          "require": false
        }]
      }],
      size: 'small',
      labelWidth: "110px",
      type: "default",
      formTitel: "",
      formType: "",
      editVisible: {
        state: false
      },
      // 是否编辑数据
      isEdit: {
        state: false
      },
      //编辑弹窗
      dialogEdit: false,
      //编辑From
      editFrom: {
        name: '',
        use_for: '',
        images: '',
        language: '',
        status: ''
      },
      use_forList: [],
      langList: [],
      statusList: ARRAYS.state2,
      nowId: -1,
      //当前平台
      pf: "pc",
      nowPlatform: "pc",
      platformList: ARRAYS.PLATFORMS,
      updated: false,
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: null
      },
      loading: false
    };
  },

  components: {
    ElCol: col["a" /* default */],
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      let _this = this;

      this.columnsUrl = "/static/json/ADManage/ADList/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.copywriter.carousel + "?pf=" + this.pf;
      this.baseUrl = URL.api + ROUTES.GET.copywriter.carousel; //获取语言列表

      let langeUrl = URL.api + ROUTES.GET.langeages;
      this.$.autoAjax('get', langeUrl, '', {
        ok: res => {
          let model = res.data;

          for (let i in model) {
            _this.langList.push({
              "label": model[i].name,
              "value": model[i].id.toString()
            });

            _this.formConfig[4].list.push({
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

    //表格操作点击事件处理
    doHandle(e) {
      this.formType = "";
      this.updated = false;
      this.nowId = parseInt(e.row.id) || -1;

      switch (e.fn) {
        case "doCompile":
          this.doCompile(e.row);
          break;

        case "doApply":
          this.doApply(e.row);
          break;

        case "doPass":
          this.doPass(e.row);
          break;

        case "doStart":
          this.doStart(e.row);
          break;

        case "doStop":
          this.doStop(e.row);
          break;

        case "doDel":
          this.doDel(e.row);
          break;

        case "doDetails":
          this.doDetails(e.row);
          break;
      }
    },

    doDetails(obj) {
      let _this = this;

      this.dialogTableVisible = true;
      let detailform = this.detailform;
      ({
        name: detailform.name,
        pf: detailform.pf,
        link: detailform.link,
        language_name: detailform.language_name,
        sort: detailform.sort,
        position: detailform.position
      } = obj);
      let position = ARRAYS.position;

      if (!detailform.link) {
        detailform.link = "无";
      }

      for (let index in position) {
        if (position[index].value === detailform.position) {
          detailform.position = position[index].label;
        }
      }

      this.detailform.picture = URL.img + obj.picture;
    },

    //新增
    doAdd() {
      this.updated = false;
      this.formType = "add";
      this.formTitel = "新增轮播广告";
      this.isEdit.state = false;
      this.editVisible.state = true;
    },

    //申请
    doApply(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定申请'] || '确定申请') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "apply";
        this.confirmConfig.obj = row;
      }
    },

    //启用
    doStart(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "start";
        this.confirmConfig.obj = row;
      }
    },

    //停用
    doStop(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "stop";
        this.confirmConfig.obj = row;
      }
    },

    //编辑
    doCompile() {
      this.loading = true;

      let _this = this;

      _this.isEdit.state = false;
      let fromDataUrl = URL.api + ROUTES.GET.copywriter.carousel;
      this.$.autoAjax('get', fromDataUrl, parseInt(this.nowId), {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.isEdit.state = true;
            _this.formType = "edit";
            _this.formTitel = "修改轮播广告";
            FORMVAL(res.data, _this.formConfig);
            let str = res.data.picture || "";

            _this.formConfig[6].value.push(str);

            _this.editVisible.state = true;
          } else {
            _this.$message.error(LANG['修改轮播广失败，请稍后重试！']);
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //删除
    doDel(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "delete";
      }
    },

    //确认删除
    doConfirm(obj) {
      this.loading = true;

      let _this = this;

      switch (obj.fn) {
        case "delete":
          this.$.autoAjax('delete', URL.api + ROUTES.PUT.copywriter.carousel + "/" + parseInt(this.nowId) + "?pf=" + this.pf, '', {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.formType = "delete";

                _this.$message.success(LANG['恭喜您，删除成功！'] || '恭喜您，删除成功！');

                _this.updated = true;
              } else {
                this.$message.error(LANG['删除失败，请稍后重试！'] || '删除失败，请稍后重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              _this.loading = false;
              console.log(e);
            }
          });
          break;

        case "stop":
          let disableddata = {
            "status": "disabled",
            "pf": this.pf,
            "language_id": parseInt(obj.obj.language_id),
            "position": obj.obj.position,
            "approve": obj.obj.approve
          };
          this.$.autoAjax('patch', URL.api + ROUTES.PUT.copywriter.carousel + "/" + parseInt(this.nowId), disableddata, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，停用成功！'] || '恭喜您，停用成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['停用失败，请稍后重试！']);
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          break;

        case "start":
          let enableddata = {
            "status": "enabled",
            "pf": this.pf,
            "language_id": parseInt(obj.obj.language_id),
            "position": obj.obj.position,
            "approve": obj.obj.approve
          };
          this.$.autoAjax('patch', URL.api + ROUTES.PUT.copywriter.carousel + "/" + parseInt(this.nowId), enableddata, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，启用成功！'] || '恭喜您，启用成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['启用失败，请稍后重试！']);
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          break;

        case "apply":
          let applyddata = {
            "approve": "pass",
            "pf": this.pf,
            "language_id": parseInt(obj.obj.language_id),
            "position": obj.obj.position
          };
          this.$.autoAjax('patch', URL.api + ROUTES.PUT.copywriter.carousel + "/" + parseInt(this.nowId), applyddata, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，申请成功！'] || '恭喜您，申请成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['申请失败，请稍后重试！']);
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.patch(URL.api + ROUTES.PUT.copywriter.carousel + "/" + parseInt(this.nowId), JSON.stringify(applyddata), URLCONFIG).then((res) => {
          //     if (res.data.state == 0 && res.data.data) {
          //         _this.$message.success(LANG['恭喜您，申请成功！'] || '恭喜您，申请成功！');
          //         _this.updated = true;
          //     } else {
          //         _this.$message.error(LANG['申请失败，请稍后重试！']);
          //     }
          //     _this.loading = false;
          // });

          break;
      }
    },

    //切换平台
    changePlatform(val) {
      if (val == this.nowPlatform) {
        return;
      } else {
        this.nowPlatform = val;

        switch (val) {
          case "h5":
            this.tableUrl = this.baseUrl + "?pf=h5";
            break;

          case "pc":
            this.tableUrl = this.baseUrl + "?pf=pc";
            break;
        }
      }
    },

    //保存弹窗数据
    getForm(obj) {
      let _this = this;

      let typeUrl = URL.api + ROUTES.PUT.copywriter.carousel;

      if (this.formType == "edit") {
        typeUrl = URL.api + ROUTES.PUT.copywriter.carousel + '/' + this.nowId;
      } else {
        obj.formObj['status'] = 'disabled';
      }

      if (obj.formObj.link === "") {
        delete obj.formObj.link;
      }

      obj.formObj['picture'] = obj.formObj['images'].toString();
      delete obj.formObj['images'];
      console.log(obj.formObj);
      this.$.autoAjax('put', typeUrl, obj.formObj, {
        ok: res => {
          if (res.state === 2) {
            _this.$message.error(LANG['轮播图片不能为空'] || '轮播图片不能为空');
          } else {
            if (res.state == 0 && res.data) {
              let str = "";

              if (_this.formType == "add") {
                str = LANG['恭喜您，新增轮播广告成功！'] || '恭喜您，新增轮播广告成功！';
              } else {
                str = LANG['恭喜您，修改轮播广告成功！'] || '恭喜您，修改轮播广告成功！';
              }

              _this.updated = true;

              _this.$message.success(str);
            } else {
              let str = "";

              if (_this.formType == "add") {
                str = LANG['新增轮播广告失败！'] || '新增轮播广告失败！';
              } else {
                str = LANG['修改轮播广告失败！'] || '修改轮播广告失败！';
              }

              _this.$message.error(str);
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    }

  },
  computed: {},

  mounted() {},

  created: function () {
    this.init();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cd1c2714","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/webSet/ADList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"templateManage",staticStyle:{"width":"100%"},attrs:{"id":"results"}},[_c('el-row',[_c('el-col',{staticClass:"pb ",staticStyle:{"text-align":"right"},attrs:{"span":24}},[_c('el-col',{staticStyle:{"text-align":"left"},attrs:{"span":12}},[_c('span',[_vm._v(_vm._s(_vm.LANG["使用平台"] || "使用平台"))]),_vm._v(" "),_c('el-select',{staticStyle:{"width":"200px"},attrs:{"size":"small","placeholder":"请选择"},on:{"change":_vm.changePlatform},model:{value:(_vm.pf),callback:function ($$v) {_vm.pf=$$v},expression:"pf"}},_vm._l((_vm.platformList),function(item){return _c('el-option',{key:item.id,staticStyle:{"width":"200px"},attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":12}},[_c('el-button',{attrs:{"type":"primary","size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['新增轮播广告'] || '新增轮播广告')},on:{"click":_vm.doAdd}})],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('div',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"showRefresh":true,"pageSet":true,"updated":_vm.updated,"tableIndex":false},on:{"do-handle":_vm.doHandle}})],1)])],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.editVisible,"formConfig":_vm.formConfig,"type":_vm.type,"size":_vm.size,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}})],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{staticClass:"detail",attrs:{"title":_vm.LANG['轮播广告详情'] || '轮播广告详情',"size":"tiny"},model:{value:(_vm.dialogTableVisible),callback:function ($$v) {_vm.dialogTableVisible=$$v},expression:"dialogTableVisible"}},[_c('el-form',{attrs:{"model":_vm.detailform}},[_c('el-form-item',{attrs:{"label":_vm.LANG['轮播广告名称:'] || '轮播广告名称:',"label-width":_vm.formLabelWidth}},[_c('span',[_vm._v(_vm._s(_vm.detailform.name))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['使用平台:'] || '使用平台:',"label-width":_vm.formLabelWidth}},[_c('p',{staticStyle:{"width":"90%"}},[_vm._v(_vm._s(_vm.detailform.pf))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['使用于:'] || '使用于:',"label-width":_vm.formLabelWidth}},[_c('span',[_vm._v(_vm._s(_vm.detailform.position))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['跳转链接:'] || '跳转链接:',"label-width":_vm.formLabelWidth}},[_c('span',[_vm._v(_vm._s(_vm.detailform.link))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['语言:'] || '语言:',"label-width":_vm.formLabelWidth}},[_c('span',[_vm._v(_vm._s(_vm.detailform['language_name']))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['排序:'] || '排序:',"label-width":_vm.formLabelWidth}},[_c('span',[_vm._v(_vm._s(_vm.detailform.sort))])]),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['轮播图片:'] || '轮播图片:',"label-width":_vm.formLabelWidth}},[_c('img',{staticStyle:{"margin-right":"10px","width":"90%"},attrs:{"src":_vm.detailform.picture}})])],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogTableVisible = false}}},[_vm._v("关 闭")])],1)],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/webSet/ADList.vue
function injectStyle (context) {
  __webpack_require__(416)
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
  ADList,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var webSet_ADList = __webpack_exports__["default"] = (Component.exports);


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

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);