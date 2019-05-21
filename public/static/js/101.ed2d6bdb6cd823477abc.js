(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/childAccount.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var childAccount = ({
  data() {
    return {
      nowId: -1,
      nowName: null,
      LANG,
      columnsUrl: "",
      tableUrl: "",
      baseUrl: "",
      //搜索相关
      searchConfig: [{
        "prop": "name",
        "value": "",
        "type": "text",
        "label": "用户名"
      }],
      searchType: "search",
      searchIsEdit: {
        state: false
      },
      // labelWidth: "125px",
      searchFormVisible: {
        state: true
      },
      //弹窗相关
      formTitel: "",
      formVisible: {
        state: false
      },
      userId: '',
      // 更改用户id
      userName: '',
      //被修改的用户名
      // 成功刷新
      updated: false,
      type: "default",
      labelWidth: "100px",
      isEdit: {
        state: false
      },
      formConfig: [{
        "prop": "username",
        "value": "",
        "type": "text",
        "label": "帐号",
        "rules": [{
          "require": true
        }, {
          "min": 1,
          "max": 30
        }]
      }, {
        "prop": "password",
        "value": "",
        "type": "password",
        "label": "密码",
        "rules": [{
          "require": true
        }, {
          "min": 3,
          "max": 10
        }]
      }, {
        "prop": "repeatPassword",
        "value": "",
        "label": "确认密码",
        "type": "repeatPassword",
        "rules": [{
          "require": true
        }, {
          "min": 6
        }]
      }, {
        "prop": "truename",
        "value": "",
        "type": "text",
        "label": "姓名"
      }, {
        "prop": "depart",
        "value": "",
        "type": "text",
        "label": "部门"
      }, {
        "prop": "job",
        "value": "",
        "type": "text",
        "label": "职位"
      }, {
        "prop": "role",
        "radio": "",
        "type": "radioGroup",
        "label": "选择角色权限",
        "radioInput": false,
        "list": [],
        "rules": [{
          "require": true
        }]
      }],
      //修改密码
      passTitle: "",
      passVisible: {
        state: false
      },
      passConfig: [{
        "prop": "password",
        "value": "",
        "type": "password",
        "label": "密码",
        "rules": [{
          "require": true
        }, {
          "min": 6
        }]
      }, {
        "prop": "repeatPassword",
        "value": "",
        "label": "确认密码",
        "type": "repeatPassword",
        "rules": [{
          "require": true
        }, {
          "min": 6
        }]
      }],
      loading: false,
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: ""
      },
      updateKeys: "",
      formType: ""
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    init() {
      this.columnsUrl = "/static/json/accoutManage/childAccount/columns.json";
      this.tableUrl = URL.api + '/sub/accounts';
      this.baseUrl = URL.api + '/sub/accounts'; // 获取子帐号角色列表

      let _this = this;

      this.$.autoAjax('get', URL.api + ROUTES.GET.sub.accounts.role, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let role = res.data;

            for (let i in role) {
              let empty = {
                "label": "",
                "value": ""
              };
              empty.label = role[i].role;
              empty.value = role[i].id;

              _this.formConfig[6].list.push(empty);
            }
          } else if (res.state === 40001) {
            _this.$message.error(LANG['帐号已存在，请修改后重试'] || '帐号已存在，请修改后重试');
          } else {
            _this.$message.error(LANG['获取子帐号角色失败'] || '获取子帐号角色失败');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.sub.accounts.role, URLCONFIG).then((res) => {
      //     if(res.data.state == 0 && res.data.data){
      //         let role = res.data.data;
      //         for(let i in role){  let empty = {"label":"", "value":""}
      //             empty.label = role[i].role;
      //             empty.value = role[i].id;
      //             _this.formConfig[6].list.push(empty)
      //         }
      //     }else if(res.data.state === 40001){
      //         _this.$message.error(LANG['帐号已存在，请修改后重试'] || '帐号已存在，请修改后重试');
      //     }else{
      //         _this.$message.error(LANG['获取子帐号角色失败'] || '获取子帐号角色失败');
      //     }
      // })
    },

    //用户名跳转
    openUserSet(item) {
      this.$router.push({
        path: '/memberManagement',
        query: {
          name: item.name
        }
      });
    },

    //查询
    doQuery(obj) {
      let obj_f = {};

      if (obj.item.name) {
        obj_f.name = obj.item.name;
      }

      this.tableUrl = this.baseUrl + this.addSearch(obj_f);
    },

    //重置
    resetForm() {
      this.tableUrl = this.baseUrl;
    },

    //新增
    doAdd() {
      // 获取子帐号角色列表
      let _this = this;

      _this.formConfig[6].list = [];
      this.$.autoAjax('get', URL.api + ROUTES.GET.sub.accounts.role, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let role = res.data;

            for (let i in role) {
              let empty = {
                "label": "",
                "value": ""
              };
              empty.label = role[i].role;
              empty.value = role[i].id;

              _this.formConfig[6].list.push(empty);
            }
          } else if (res.state === 40001) {
            _this.$message.error(LANG['帐号已存在，请修改后重试'] || '帐号已存在，请修改后重试');
          } else {
            _this.$message.error(LANG['获取子帐号角色失败'] || '获取子帐号角色失败');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.get(URL.api + ROUTES.GET.sub.accounts.role, URLCONFIG).then((res) => {
      //     if(res.data.state == 0 && res.data.data){
      //         let role = res.data.data;
      //         for(let i in role){  let empty = {"label":"", "value":""}
      //             empty.label = role[i].role;
      //             empty.value = role[i].id;
      //             _this.formConfig[6].list.push(empty)
      //         }
      //     }else if(res.data.state === 40001){
      //         _this.$message.error(LANG['帐号已存在，请修改后重试'] || '帐号已存在，请修改后重试');
      //     }else{
      //         _this.$message.error(LANG['获取子帐号角色失败'] || '获取子帐号角色失败');
      //     }
      // })
      //this.$message.error(LANG['权限不足！'] || '权限不足！');
      //return;

      this.formConfig[0].disabled = false;
      this.formConfig[1].disabled = false;
      this.formConfig[2].disabled = false;
      this.formTitel = "新建子帐号";
      this.formType = "add";
      this.formVisible.state = true;
      this.updated = false;
    },

    doEdit(row) {
      this.formConfig[0].disabled = true;
      this.formConfig[1].disabled = true;
      this.formConfig[2].disabled = true;
      let roleId = -1;

      for (let k in this.formConfig[6].list) {
        if (this.formConfig[6].list[k].label === row.role) {
          roleId = this.formConfig[6].list[k].value.toString();
        }
      }

      this.loading = true;
      this.formConfig[0].value = row.username;
      this.formConfig[1].value = "密码在改密中修改";
      this.formConfig[2].value = "密码在改密中修改";
      this.formConfig[3].value = row.truename;
      this.formConfig[4].value = row.part;
      this.formConfig[5].value = row.job;
      this.formConfig[6].value = roleId;
      this.formTitel = "修改子帐号";

      let _this = this;

      setTimeout(function () {
        _this.formType = "edit";
        _this.formVisible.state = true;
        _this.loading = false;
      }, 500);
    },

    //保存表单
    getForm(obj) {
      let _this = this;

      this.loading = true;
      let query = {};

      for (let k in obj.formObj) {
        query[k] = obj.formObj[k];
      }

      if (this.formType == "pass") {
        let password = {};
        password['pw-new'] = query.repeatPassword;
        password['id'] = this.userId;
        password['sub_name'] = this.userName;
        this.$.autoAjax('patch', URL.api + '/sub/account.pw?id=' + this.userId, password, {
          ok: res => {
            if (res.data != undefined && res.data) {
              this.$message.success(LANG['恭喜您，密码修改成功！'] || '恭喜您，密码修改成功！');
              _this.updated = true;
            } else {
              this.$message.error(LANG['密码修改失败！'] || '密码修改失败！');
            }

            _this.loading = false;
            _this.updated = true;
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // this.$http.patch(URL.api + '/sub/account.pw?id='+ this.userId, JSON.stringify(password), URLCONFIG).then( (res) => {
        //     if (res.data.data != undefined && res.data.data){
        //         this.$message.success(LANG['恭喜您，密码修改成功！'] || '恭喜您，密码修改成功！');
        //         _this.updated = true;
        //     }else{
        //         this.$message.error(LANG['密码修改失败！'] || '密码修改失败！');
        //     }
        //     _this.loading = false;
        //     _this.updated = true;
        // })
      } else if (this.formType == "add") {
        delete query.repeatPassword;
        this.$.autoAjax('put', URL.api + ROUTES.PUT.sub.accounts, query, {
          ok: res => {
            if (res.state === 0 && res.data) {
              _this.$message.success(LANG['恭喜您，子帐号添加成功！'] || '恭喜您，子帐号添加成功！');

              _this.updated = true;
            } else {
              _this.$message.error(LANG[`${res.msg}`] || `${res.msg}`);
            }

            _this.loading = false;
            _this.updated = true;
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // this.$http.put(URL.api + ROUTES.PUT.sub.accounts,JSON.stringify(query),URLCONFIG).then((res) => {
        //
        //     if (res.data.state === 0 && res.data.data) {
        //         _this.$message.success(LANG['恭喜您，子帐号添加成功！'] || '恭喜您，子帐号添加成功！');
        //         _this.updated = true;
        //     } else{
        //         _this.$message.error(LANG[`${res.data.msg}`] || `${res.data.msg}`);
        //     }
        //     _this.loading = false;
        //     _this.updated = true;
        // });
      } else if (this.formType == "edit") {
        query.username;
        delete query.password;
        delete query.repeatPassword;
        query.id = this.nowId;
        this.$.autoAjax('put', URL.api + ROUTES.PUT.sub.accounts, query, {
          ok: res => {
            if (res.data != undefined && res.data) {
              _this.$message.success(LANG['恭喜您，修改成功！'] || '恭喜您，修改成功！');

              _this.updated = true;
            } else {
              _this.$message.error(LANG['修改失败！'] || '修改失败！');
            }

            _this.loading = false;
            _this.updated = true;
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }); // this.$http.put(URL.api + ROUTES.PUT.sub.accounts,JSON.stringify(query),URLCONFIG).then((res) => {
        //     if (res.data.data != undefined && res.data.data) {
        //             _this.$message.success(LANG['恭喜您，修改成功！'] || '恭喜您，修改成功！');
        //             _this.updated = true;
        //     }else {
        //             _this.$message.error(LANG['修改失败！'] || '修改失败！');
        //     }
        //     _this.loading = false;
        //     _this.updated = true;
        // });
      }
    },

    //表格事件处理
    doHandle(item) {
      this.nowId = parseInt(item.row.id) || -1;
      this.updated = false;
      this.formType = "";

      switch (item.fn) {
        case "doEnable":
          this.doStart(item.row);
          break;

        case "doDisable":
          this.doStop(item.row);
          break;

        case "doUpdatePass":
          this.doUpdatePass(item.row);
          break;

        case "doDelete":
          this.doDelete(item.row);
          break;

        case "doUnbind":
          this.doUnbind(item.row);
          break;

        case "doEdit":
          this.doEdit(item.row);
          break;
      }
    },

    //启用
    doStart(row) {
      this.nowName = row.username;

      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') + '"' + row.username + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "start";
      }
    },

    //停用
    doStop(row) {
      this.nowName = row.username;

      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + '"' + row.username + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "stop";
      }
    },

    //删除
    doDelete(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + row.username + '"' + (this.LANG['吗？'] || '吗？');
        this.userName = row.username;
        this.confirmConfig.fn = "delete";
      }
    },

    doConfirm(obj) {
      this.loading = true;

      let _this = this;

      switch (obj.fn) {
        case "start":
          this.$.autoAjax('patch', URL.api + "/sub/accounts?id=" + parseInt(_this.nowId), {
            "state": 1,
            "sub_name": _this.nowName
          }, {
            ok: res => {
              if (res.data != undefined && res.data) {
                _this.$message.success(LANG['恭喜您，子帐号启用成功！'] || '恭喜您，子帐号启用成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['子帐号启用失败，请稍候重试！'] || '子帐号启用失败，请稍候重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.patch(URL.api + "/sub/accounts?id=" + parseInt(_this.nowId),JSON.stringify({"state":1,"sub_name":_this.nowName}),URLCONFIG).then((res) => {
          //
          //     if (res.data.data != undefined && res.data.data) {
          //
          //         _this.$message.success(LANG['恭喜您，子帐号启用成功！'] || '恭喜您，子帐号启用成功！');
          //         _this.updated = true;
          //     } else {
          //         _this.$message.error(LANG['子帐号启用失败，请稍候重试！'] || '子帐号启用失败，请稍候重试！');
          //     }
          //     _this.loading = false;
          // });

          break;

        case "delete":
          this.$.autoAjax('delete', URL.api + '/sub/accounts?id=' + parseInt(_this.nowId) + '&sub_name=' + _this.userName, '', {
            ok: res => {
              if (res.data != undefined && res.data) {
                _this.$message.success(LANG['恭喜您，子帐号删除成功！'] || '恭喜您，子帐号删除成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['子帐号删除失败，请稍候重试！'] || '子帐号删除失败，请稍候重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.delete(URL.api + '/sub/accounts?id='+ parseInt(_this.nowId)+'&sub_name='+_this.userName,URLCONFIG).then((res) => {
          //     if (res.data.data != undefined && res.data.data) {
          //
          //         _this.$message.success(LANG['恭喜您，子帐号删除成功！'] || '恭喜您，子帐号删除成功！');
          //         _this.updated = true;
          //     } else {
          //         _this.$message.error(LANG['子帐号删除失败，请稍候重试！'] || '子帐号删除失败，请稍候重试！');
          //     }
          //     _this.loading = false;
          // });

          break;

        case "stop":
          this.$.autoAjax('patch', URL.api + "/sub/accounts?id=" + parseInt(_this.nowId), {
            "state": 0,
            "sub_name": _this.nowName
          }, {
            ok: res => {
              if (res.data != undefined && res.data) {
                _this.$message.success(LANG['恭喜您，子帐号停用成功！'] || '恭喜您，子帐号停用成功！');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['子帐号停用失败，请稍候重试！'] || '子帐号停用失败，请稍候重试！');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // this.$http.patch(URL.api + "/sub/accounts?id=" + parseInt(_this.nowId),JSON.stringify({"state":0,"sub_name":_this.nowName}),URLCONFIG).then((res) => {
          //         if (res.data.data != undefined && res.data.data) {
          //             _this.$message.success(LANG['恭喜您，子帐号停用成功！'] || '恭喜您，子帐号停用成功！');
          //             _this.updated = true;
          //         } else {
          //             _this.$message.error(LANG['子帐号停用失败，请稍候重试！'] || '子帐号停用失败，请稍候重试！');
          //         }
          //         _this.loading = false;
          //     })

          break;
      }
    },

    // 表单修改密码
    doUpdatePass(row) {
      this.formType = "pass";
      this.isEdit.state = true;
      this.passTitle = LANG["修改 " + row.username + " 密码"] || "修改 " + row.username + " 密码";
      this.userId = row.id;
      this.userName = row.username;
      this.passVisible.state = true;
    },

    // 解绑M令牌
    doUnbind(row) {
      let obj = {};
      this.updated = false;
      obj.uid = parseInt(row.id);
      obj.role = 2;

      let _this = this;

      this.$.autoAjax('post', URL.api + ROUTES.POST.admin.login.unbind, obj, {
        ok: res => {
          if (res.state === 0 && res.data) {
            _this.updated = true;

            _this.$message.success(LANG['恭喜您，解绑成功！'] || '恭喜您，解绑成功！');
          } else {
            _this.$message.error(LANG['解绑失败，请稍后重试！'] || '解绑失败，请稍后重试！');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.post(URL.api + ROUTES.POST.admin.login.unbind,JSON.stringify(obj),URLCONFIG).then((res)=>{
      //     if(res.data.state === 0 && res.data.data){
      //         _this.updated = true;
      //         _this.$message.success(LANG['恭喜您，解绑成功！'] || '恭喜您，解绑成功！');
      //     }else{
      //         _this.$message.error(LANG['解绑失败，请稍后重试！'] || '解绑失败，请稍后重试！');
      //     }
      // })
      .catch(e => {
        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      });
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-234a2b62","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/childAccount.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"childAccount"}},[_c('formEdit',{attrs:{"formVisible":_vm.searchFormVisible,"formConfig":_vm.searchConfig,"type":_vm.searchType,"labelWidth":_vm.labelWidth,"isEdit":_vm.searchIsEdit,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}}),_vm._v(" "),_c('el-col',[_c('el-button',{staticClass:"addManage",attrs:{"type":"primary","size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['新增管理员'] || '新增管理员')},on:{"click":_vm.doAdd}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"showRefresh":false,"updated":_vm.updated},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',{staticClass:"addWindow"},[_c('formEdit',{attrs:{"formTitel":_vm.formTitel,"formVisible":_vm.formVisible,"formConfig":_vm.formConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"updateKeys":_vm.updateKeys,"formType":_vm.formType},on:{"get-form":_vm.getForm}})],1),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.passTitle,"formVisible":_vm.passVisible,"formConfig":_vm.passConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit},on:{"get-form":_vm.getForm}})],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/userManagement/childAccount.vue
function injectStyle (context) {
  __webpack_require__(499)
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
  childAccount,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var userManagement_childAccount = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);