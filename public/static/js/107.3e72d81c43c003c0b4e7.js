(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/webSet/ckManage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ckManage = ({
  data() {
    // 判断非空正整数
    var checkNumber = function (rule, value, callback) {
      if (typeof value !== 'number') {
        callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
      } else if (Math.sign(value) === -1) {
        callback(new Error(LANG['不能小于0'] || '不能小于0'));
      } else if (value > 100) {
        callback(new Error(LANG['不能大于100'] || '不能大于100'));
      } else {
        callback();
      }
    };

    return {
      headTextconf: {
        label: "浮动图边距设置",
        fn: "setMargins",
        show: true
      },
      Marginsformrules: {
        leftvertical: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }],
        lefthorizontal: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }],
        rightvertical: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }],
        righthorizontal: [{
          validator: checkNumber,
          required: true,
          trigger: "blur"
        }]
      },
      MarginsVisible: false,
      Marginsform: {
        leftvertical: '',
        lefthorizontal: '',
        rightvertical: '',
        righthorizontal: '',
        left_value: false,
        right_value: false
      },
      //是否编辑数据
      isEditSearch: {
        state: false
      },
      typeSearch: "search",
      labelWidthSearch: "100px",
      formVisibleSearch: {
        state: false
      },
      //搜索
      searchConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "图片名称"
      }, {
        "prop": "status",
        "value": "",
        "label": "启用状态",
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
      }],
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: null
      },
      LANG,
      //数据接口地址
      tableUrl: "",
      baseUrl: "",
      //列配置接口地址
      columnsUrl: "",
      nowId: -1,
      //编辑框状态
      type: "default",
      formTitel: "",
      labelWidth: "90px",
      isEdit: {
        state: false
      },
      formVisible: {
        state: false
      },
      pf: '',
      //当前FORM类型，新增add,修改edit
      formType: "",
      formConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "图片名称",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "link",
        "value": "",
        "type": "text",
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
        "prop": "images",
        "value": [],
        'type': "upload",
        "fileNum": 1,
        "label": "图片",
        "action": URL.img,
        "folder": "web",
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "position",
        "value": "",
        "type": "radioGroup",
        "label": "显示位置",
        "radioInput": false,
        "list": [{
          "radio1": "",
          "value": "left-middle",
          "label": "左中"
        }, {
          "radio2": "",
          "value": "right-middle",
          "label": "右中"
        }, {
          "radio3": "",
          "value": "left-bottom",
          "label": "左下"
        }, {
          "radio4": "",
          "value": "right-bottom",
          "label": "右下"
        }],
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "pf",
        "value": "pc",
        "label": "平台",
        "type": "select",
        "list": [{
          "label": "PC",
          "value": "pc"
        }],
        "rules": [{
          "require": true
        }]
      }, {
        "prop": "sort",
        "value": "",
        "label": "排序",
        "type": "text",
        "rules": [{
          "require": true
        }, {
          "integer": true
        }]
      }],
      updateType: "",
      //更新表格数据
      updated: false,
      loading: false,
      LANG
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    //页面初始化
    init() {
      this.tableUrl = URL.api + ROUTES.GET.copywriter.float;
      this.baseUrl = URL.api + ROUTES.GET.copywriter.float;
      this.columnsUrl = "/static/json/ADManage/ckManage/columns.json"; //获取语言

      let list = this.formConfig[2].list; // let _this = this;

      this.$.autoAjax('get', URL.api + ROUTES.GET.langeages, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data.data || [];

            for (let i in model) {
              list.push({
                "label": model[i].name,
                "value": model[i].id.toString()
              });
            }
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.langeages, URLCONFIG).then((res) => {
      //     if (res.data.state == 0 && res.data.data) {
      //         let model = res.data.data || [];
      //         for (let i in model) {
      //             list.push({
      //                 "label": model[i].name,
      //                 "value": model[i].id.toString()
      //             });
      //         }
      //     }
      // });
    },

    doQuery(obj) {
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);
    },

    resetForm() {
      this.tableUrl = this.baseUrl;
    },

    saveMargins() {
      let obj = {
        'left-middle': {
          vertical: this.Marginsform.leftvertical,
          horizontal: this.Marginsform.lefthorizontal
        },
        'right-middle': {
          vertical: this.Marginsform.rightvertical,
          horizontal: this.Marginsform.righthorizontal
        },
        'fold-controller': {
          "left": this.Marginsform.left_value ? 1 : 0,
          "right": this.Marginsform.right_value ? 1 : 0
        }
      };
      this.updated = false;
      this.$.autoAjax('put', URL.api + ROUTES.PUT.copywriter.align, obj, {
        ok: res => {
          if (res.state === 0 && res.data === true) {
            this.$message.success(LANG['修改边距成功'] || '修改边距成功');
            this.updated = true;
          } else {
            this.$message.error(LANG['修改边距失败'] || '修改边距失败');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.put(URL.api + ROUTES.PUT.copywriter.align, JSON.stringify(obj), URLCONFIG).then((res) => {
      //     if (res.data.state === 0 && res.data.data === true) {
      //         this.$message.success(LANG['修改边距成功'] || '修改边距成功');
      //         this.updated = true;
      //
      //     } else {
      //         this.$message.error(LANG['修改边距失败'] || '修改边距失败');
      //     }
      // })

      this.MarginsVisible = false;
    },

    resetMargins(name) {
      this.$refs[name].resetFields();
      this.MarginsVisible = false;
    },

    //表格操作点击事件处理
    doHandle(e) {
      this.updated = false;
      this.formType = "";
      this.nowId = parseInt(e.row.id) || -1;

      switch (e.fn) {
        case "doApply":
          this.doApply(e.row);
          break;

        case "doEdit":
          this.doEdit(e.row);
          break;

        case "doDelete":
          this.doDelete(e.row);
          break;

        case "doEnable":
          this.doEnable(e.row);
          break;

        case "doDisable":
          this.doDisable(e.row);
          break;

        case "setMargins":
          this.setMargins(e.row);
          break;
      }
    },

    //新增
    doAdd() {
      this.formTitel = "新增浮动图";
      this.formVisible.state = true;
      this.formType = "add";
    },

    //获取编剧
    setMargins(obj) {
      this.MarginsVisible = true;
      this.$.autoAjax('get', URL.api + ROUTES.GET.copywriter.align, '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            let obj = res.data;
            this.Marginsform = {
              leftvertical: obj['left-middle'].vertical,
              lefthorizontal: obj['left-middle'].horizontal,
              rightvertical: obj['right-middle'].vertical,
              righthorizontal: obj['right-middle'].horizontal,
              left_value: obj['fold-controller'].left == '1' ? true : false,
              right_value: obj['fold-controller'].right == '1' ? true : false
            };
          } else {
            this.$message.error(LANG['获取边距设置失败'] || '获取边距设置失败');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.copywriter.align, URLCONFIG).then((res) => {
      //     if (res.data.state === 0 && res.data.data) {
      //         let obj = res.data.data;
      //         this.Marginsform = {
      //             leftvertical: obj['left-middle'].vertical,
      //             lefthorizontal: obj['left-middle'].horizontal,
      //             rightvertical: obj['right-middle'].vertical,
      //             righthorizontal: obj['right-middle'].horizontal,
      //             left_value:obj['fold-controller'].left=='1'?true:false,
      //             right_value:obj['fold-controller'].right=='1'?true:false,
      //         };
      //     } else {
      //         this.$message.error(LANG['获取边距设置失败'] || '获取边距设置失败');
      //     }
      // })
    },

    //保存表单
    getForm(obj) {
      // let _this = this;
      let str = "";

      let _this = this;

      this.loading = true;
      this.updated = false;
      let query = {};

      for (let k in obj.formObj) {
        query[k] = obj.formObj[k];
      }

      query['picture'] = query['images'].toString();
      delete query['images'];

      if (this.formType == "add") {
        _this.loading = true;
        this.$.autoAjax('put', URL.api + ROUTES.PUT.copywriter.float, query, {
          ok: res => {
            if (res.state == 0 && res.data) {
              _this.formType = "add";

              _this.$message.success(LANG['恭喜您，新增浮动图成功！'] || '恭喜您，新增浮动图成功！');

              _this.updated = true;
            } else {
              _this.$message.error(LANG['新增浮动图失败，请稍候重试！'] || '新增浮动图失败，请稍候重试！');

              _this.formType = "";
            }

            _this.formType = "";
            _this.loading = false;
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // this.$http.put(URL.api + ROUTES.PUT.copywriter.float, JSON.stringify(query), URLCONFIG).then((res) => {
        //     if (res.data.state == 0 && res.data.data) {
        //         _this.formType = "add";
        //         _this.$message.success(LANG['恭喜您，新增浮动图成功！'] || '恭喜您，新增浮动图成功！');
        //
        //         _this.updated = true;
        //     } else {
        //         _this.$message.error(LANG['新增浮动图失败，请稍候重试！'] || '新增浮动图失败，请稍候重试！');
        //         _this.formType = "";
        //
        //     }
        //     _this.formType = "";
        //     _this.loading = false;
        // })
      } else if (_this.formType == "edit") {
        _this.loading = true;
        this.$.autoAjax('put', URL.api + ROUTES.PUT.copywriter.float + "/" + parseInt(_this.nowId), query, {
          ok: res => {
            if (res.state == 0 && res.data) {
              _this.formType = "add";

              _this.$message.success(LANG['恭喜您，修改浮动图成功！'] || '恭喜您，修改浮动图成功！');

              _this.updated = true;
            } else {
              _this.$message.error(LANG['浮动图修改失败，请稍候重试！'] || '浮动图修改失败，请稍候重试！');

              _this.loading = false;
              _this.formType = "";
            }

            _this.loading = false;
            _this.formType = "";
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // _this.$http.put(URL.api + ROUTES.PUT.copywriter.float + "/" + parseInt(_this.nowId), JSON.stringify(query), URLCONFIG).then((res) => {
        //
        //     if (res.data.state == 0 && res.data.data) {
        //         _this.formType = "add";
        //         _this.$message.success(LANG['恭喜您，修改浮动图成功！'] || '恭喜您，修改浮动图成功！');
        //
        //         _this.updated = true;
        //     } else {
        //         _this.$message.error(LANG['浮动图修改失败，请稍候重试！'] || '浮动图修改失败，请稍候重试！');
        //         _this.loading = false;
        //         _this.formType = "";
        //     }
        //     _this.loading = false;
        //     _this.formType = "";
        // })
      }
    },

    //编辑
    doEdit(row) {
      // let _this = this;
      this.nowId = row.id;
      this.loading = true;
      this.$.autoAjax('get', URL.api + ROUTES.GET.copywriter.float + "/" + parseInt(row.id), '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data || [];
            this.formTitel = "修改会员标签";
            this.formType = "edit";
            FORMVAL(model, this.formConfig);
            this.formConfig[3]['value'].push(model['picture']);
            this.isEdit.state = true;
            this.formVisible.state = true;
            this.loading = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.copywriter.float + "/" + parseInt(row.id), URLCONFIG).then((res) => {
      //     if (res.data.state == 0 && res.data.data) {
      //         let model = res.data.data || [];
      //         this.formTitel = "修改会员标签";
      //         this.formType = "edit";
      //         FORMVAL(model, this.formConfig);
      //         this.formConfig[3]['value'].push(model['picture']);
      //         this.isEdit.state = true;
      //         this.formVisible.state = true;
      //         this.loading = false;
      //     }
      // });
    },

    doConfirm(obj) {
      this.loading = true;

      let _this = this;

      switch (obj.fn) {
        case "start":
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.float + "/" + parseInt(_this.nowId), JSON.stringify({
            "status": "enabled",
            "language_id": obj.obj.language_id,
            "pf": obj.obj.pf,
            "position": obj.obj.position
          }), {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，浮动图启用成功！'] || '恭喜您，浮动图启用成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['浮动图启用失败，请稍后重试！'] || '浮动图启用失败，请稍后重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.float + "/" + parseInt(_this.nowId), JSON.stringify({"status": "enabled", "language_id": obj.obj.language_id, "pf": obj.obj.pf, "position": obj.obj.position}), URLCONFIG).then((res) => {
          //     if (res.data.state == 0 && res.data.data) {
          //         _this.$message.success(LANG['恭喜您，浮动图启用成功！'] || '恭喜您，浮动图启用成功！');
          //
          //         _this.updated = true;
          //     } else {
          //         _this.$message.error(LANG['浮动图启用失败，请稍后重试！'] || '浮动图启用失败，请稍后重试！');
          //     }
          //     _this.loading = false;
          // });

          break;

        case "stop":
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.float + "/" + parseInt(_this.nowId), JSON.stringify({
            "status": "disabled",
            "language_id": obj.obj.language_id,
            "pf": obj.obj.pf,
            "position": obj.obj.position
          }), {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，浮动图停用成功！'] || '恭喜您，浮动图停用成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['浮动图停用失败，请稍后重试！'] || '浮动图停用失败，请稍后重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.float + "/" + parseInt(_this.nowId), JSON.stringify({"status": "disabled", "language_id": obj.obj.language_id, "pf": obj.obj.pf, "position": obj.obj.position}), URLCONFIG).then((res) => {
          //     if (res.data.state == 0 && res.data.data) {
          //         _this.$message.success(LANG['恭喜您，浮动图停用成功！'] || '恭喜您，浮动图停用成功！');
          //
          //         _this.updated = true;
          //     } else {
          //         _this.$message.error(LANG['浮动图停用失败，请稍后重试！'] || '浮动图停用失败，请稍后重试！');
          //
          //
          //     }
          //     _this.loading = false;
          // });

          break;

        case "apply":
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.float + "/" + parseInt(_this.nowId), JSON.stringify({
            "approve": "applying",
            "language_id": obj.obj.language_id,
            "pf": obj.obj.pf,
            "position": obj.obj.position
          }), {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，浮动图申请成功！'] || '恭喜您，浮动图申请成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['浮动图申请失败，请稍后重试！'] || '浮动图申请失败，请稍后重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.float + "/" + parseInt(_this.nowId), JSON.stringify({"approve": "applying", "language_id": obj.obj.language_id, "pf": obj.obj.pf, "position": obj.obj.position}), URLCONFIG).then((res) => {
          //     if (res.data.state == 0 && res.data.data) {
          //         _this.$message.success(LANG['恭喜您，浮动图申请成功！'] || '恭喜您，浮动图申请成功！');
          //
          //         _this.updated = true;
          //     } else {
          //         _this.$message.error(LANG['浮动图申请失败，请稍后重试！'] || '浮动图申请失败，请稍后重试！');
          //     }
          //     _this.loading = false;
          // });

          break;

        case "delete":
          this.$.autoAjax('delete', URL.api + ROUTES.DELETE.copywriter.float + "/?id=" + parseInt(_this.nowId) + "&pf=pc", '', {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['恭喜您，浮动图删除成功！'] || '恭喜您，浮动图删除成功！');

                _this.formType = "delete";
                _this.updated = true;
              } else {
                _this.$message.error(LANG['浮动图删除失败，请稍候重试！'] || '浮动图删除失败，请稍候重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.delete(URL.api + ROUTES.DELETE.copywriter.float + "/?id=" + parseInt(_this.nowId) + "&pf=pc", URLCONFIG).then((res) => {
          //     if (res.data.state == 0 && res.data.data) {
          //         _this.$message.success(LANG['恭喜您，浮动图删除成功！'] || '恭喜您，浮动图删除成功！');
          //         _this.formType = "delete";
          //
          //         _this.updated = true;
          //     } else {
          //         _this.$message.error(LANG['浮动图删除失败，请稍候重试！'] || '浮动图删除失败，请稍候重试！');
          //
          //
          //     }
          //     _this.loading = false;
          // });

          break;
      }
    },

    //删除
    doDelete(row) {
      this.pf = row.pf;

      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (LANG['确定删除'] || '确定删除') + '"' + row.name + '"' + (LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "delete";
      }
    },

    //申请
    doApply(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (LANG['确定申请'] || '确定申请') + '"' + row.name + '"' + (LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "apply";
        this.confirmConfig.obj = row;
      }
    },

    //启用
    doEnable(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (LANG['确定启用'] || '确定启用') + '"' + row.name + '"' + (LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "start";
        this.confirmConfig.obj = row;
      }
    },

    //停用
    doDisable(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "stop";
        this.confirmConfig.obj = row;
      }
    }

  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7afd3166","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/webSet/ckManage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"tempAdHome clearfix",attrs:{"id":"results"}},[_c('el-col',{staticClass:"mb20 pb",attrs:{"span":24}},[_c('formEdit',{attrs:{"formVisible":_vm.formVisibleSearch,"formConfig":_vm.searchConfig,"type":_vm.typeSearch,"labelWidth":_vm.labelWidthSearch,"isEdit":_vm.isEditSearch,"addText":_vm.LANG['新增浮动图'] || '新增浮动图'},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm,"add-new":_vm.doAdd}})],1),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.getForm}})],1),_vm._v(" "),_c('el-col',{attrs:{"span":24}},[_c('div',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"tableIndex":false,"showheadbtn":true,"formType":_vm.updateType,"updated":_vm.updated,"showRefresh":true,"headTextconf":_vm.headTextconf},on:{"do-handle":_vm.doHandle}})],1)]),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1),_vm._v(" "),_c('el-dialog',{attrs:{"title":"浮动图边距设置","size":"tiny"},model:{value:(_vm.MarginsVisible),callback:function ($$v) {_vm.MarginsVisible=$$v},expression:"MarginsVisible"}},[_c('el-form',{ref:"Marginsform",attrs:{"model":_vm.Marginsform,"label-width":"80px","rules":_vm.Marginsformrules}},[_c('div',[_vm._v("左中部浮动图边距控制")]),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":10}},[_c('el-form-item',{attrs:{"label":_vm.LANG['垂直居顶'] || '垂直居顶',"prop":"leftvertical"}},[_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.Marginsform.leftvertical),callback:function ($$v) {_vm.$set(_vm.Marginsform, "leftvertical", _vm._n($$v))},expression:"Marginsform.leftvertical"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":10,"offset":4}},[_c('el-form-item',{attrs:{"label":_vm.LANG['水平居左'] || '水平居左',"prop":"lefthorizontal"}},[_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.Marginsform.lefthorizontal),callback:function ($$v) {_vm.$set(_vm.Marginsform, "lefthorizontal", _vm._n($$v))},expression:"Marginsform.lefthorizontal"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1)],1)],1),_vm._v(" "),_c('div',[_vm._v("右中部浮动图边距控制")]),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":10}},[_c('el-form-item',{attrs:{"label":_vm.LANG['垂直居顶'] || '垂直居顶',"prop":"rightvertical"}},[_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.Marginsform.rightvertical),callback:function ($$v) {_vm.$set(_vm.Marginsform, "rightvertical", _vm._n($$v))},expression:"Marginsform.rightvertical"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1)],1),_vm._v(" "),_c('el-col',{attrs:{"span":10,"offset":4}},[_c('el-form-item',{attrs:{"label":_vm.LANG['水平居右'] || '水平居右',"prop":"righthorizontal"}},[_c('el-input',{attrs:{"size":"small"},model:{value:(_vm.Marginsform.righthorizontal),callback:function ($$v) {_vm.$set(_vm.Marginsform, "righthorizontal", _vm._n($$v))},expression:"Marginsform.righthorizontal"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":10}},[_c('span',[_vm._v("右侧浮动图折叠控制")]),_vm._v(" "),_c('div',{staticClass:"grid-content mt10",staticStyle:{"display":"inline-block"}},[_c('el-switch',{attrs:{"on-text":"开","off-text":"关","off-color":"#C0CCDA"},model:{value:(_vm.Marginsform.right_value),callback:function ($$v) {_vm.$set(_vm.Marginsform, "right_value", $$v)},expression:"Marginsform.right_value"}})],1)])],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){return _vm.resetMargins('Marginsform')}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveMargins}},[_vm._v("确 定")])],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/webSet/ckManage.vue
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  ckManage,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var webSet_ckManage = __webpack_exports__["default"] = (Component.exports);


/***/ })

}]);