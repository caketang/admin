(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/checkGroup.vue
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var checkGroup = ({
  data() {
    return {
      LANG
    };
  },

  props: {
    checkGrounpList: Array
  },
  methods: {
    handleCheckAllChange(val, children, isIndeterminate, index) {
      // console.log(val);
      if (val) {
        this.checkGrounpList[index]["checkedChildren"] = this.checkGrounpList[index]["children"];
        this.checkGrounpList[index]["childrenStatus"].forEach(item => {
          item.status = true;
        });
      } else {
        this.checkGrounpList[index]["checkedChildren"] = [];
        this.checkGrounpList[index]["childrenStatus"].forEach(item => {
          item.status = false;
        });
      } // this.checkGrounpList[index]["isIndeterminate"] = false;
      // console.log(this.checkGrounpList);

    },

    handleCheckedCitiesChange(value, children, index) {
      // console.log(value);
      // 获取当前选择数组的长度
      let checkedCount = value.length;
      this.checkGrounpList[index]["checkAll"] = checkedCount === children.length; // this.checkGrounpList[index]["isIndeterminate"] = checkedCount > 0 && checkedCount < children.length;
      // 处理数组
      // 

      this.checkGrounpList[index]["childrenStatus"].forEach(item => {
        item.status = false;
      });

      for (let i of this.checkGrounpList[index]["checkedChildren"]) {
        this.checkGrounpList[index]["childrenStatus"].forEach(item => {
          if (i === item.cn_name) {
            item.status = true;
          }
        });
      } // console.log(this.checkGrounpList);

    }

  },

  mounted() {// console.log(this.checkGrounpList);
  },

  created() {}

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-29410f7a","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/checkGroup.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.checkGrounpList),function(item,index){return _c('div',{key:index,staticClass:"checkboxContainer"},[_c('el-checkbox',{on:{"change":function($event){return _vm.handleCheckAllChange(item.checkAll, item.children, item.isIndeterminate, index)}},model:{value:(item.checkAll),callback:function ($$v) {_vm.$set(item, "checkAll", $$v)},expression:"item.checkAll"}},[_vm._v(_vm._s(item.name))]),_vm._v(" "),_c('el-checkbox-group',{on:{"change":function($event){return _vm.handleCheckedCitiesChange(item.checkedChildren, item.children, index)}},model:{value:(item.checkedChildren),callback:function ($$v) {_vm.$set(item, "checkedChildren", $$v)},expression:"item.checkedChildren"}},_vm._l((item.children),function(option,n){return _c('el-checkbox',{key:n,staticStyle:{"margin-right":"5px"},attrs:{"label":option}},[_vm._v(_vm._s(option))])}),1)],1)}),0)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/checkGroup.vue
function injectStyle (context) {
  __webpack_require__(501)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-29410f7a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  checkGroup,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_checkGroup = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/childRoleAccount.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var childRoleAccount = ({
  data() {
    return {
      LANG,
      columnsUrl: "",
      tableUrl: "",
      updated: false,
      //弹窗相关
      editFormTtile: "",
      editFormVisible: false,
      btnEditText: "",
      editForm: {
        id: -1,
        role: "",
        roleList: [],
        member_control: {
          true_name: false,
          bank_card: false,
          address_book: false,
          user_status: false
        }
      },
      editFormRules: {
        role: [{
          required: true,
          message: LANG['请输入角色名称'] || '请输入角色名称',
          trigger: 'blur'
        }]
      },
      formType: "add",
      //树列表
      permissionsList: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      defaultChecked: [],
      // 添加ACTION的ID
      num: 500,
      // 页面加载动画
      loading: false,
      arrId: -1,
      updateList: [],
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: null
      },
      // 会员权限
      checkGrounpList: [{
        name: "真实姓名：",
        checkAll: false,
        // isIndeterminate: false,
        children: ["真实姓名"],
        checkedChildren: [],
        childrenStatus: [{
          cn_name: "真实姓名",
          en_name: "true_name",
          status: false
        }]
      }, {
        name: "状态控制",
        checkAll: false,
        // isIndeterminate: false,
        children: ["停号", "封号", "黑名单", "踢出在线", "自我限制"],
        checkedChildren: [],
        childrenStatus: [{
          cn_name: "停号",
          en_name: "account_disabled",
          status: false
        }, {
          cn_name: "封号",
          en_name: "account_forbidden",
          status: false
        }, {
          cn_name: "黑名单",
          en_name: "account_black",
          status: false
        }, {
          cn_name: "踢出在线",
          en_name: "account_kick",
          status: false
        }, {
          cn_name: "自我限制",
          en_name: "account_limit",
          status: false
        }]
      }, {
        name: "银行信息",
        checkAll: false,
        // isIndeterminate: false,
        children: ["银行卡号和开户信息"],
        checkedChildren: [],
        childrenStatus: [{
          cn_name: "银行卡号和开户信息",
          en_name: "bank_card",
          status: false
        }]
      }, {
        name: "联系信息",
        checkAll: false,
        // isIndeterminate: false,
        children: ["qq", "手机号码", "邮箱", "微信", "skype", "安全问题与答案", "出生日期", "出生地", "性别", "邮编与国籍", "货币与语言", "身份证号码"],
        checkedChildren: [],
        childrenStatus: [{
          cn_name: "qq",
          en_name: "qq",
          status: false
        }, {
          cn_name: "手机号码",
          en_name: "mobile",
          status: false
        }, {
          cn_name: "邮箱",
          en_name: "email",
          status: false
        }, {
          cn_name: "微信",
          en_name: "weixin",
          status: false
        }, {
          cn_name: "skype",
          en_name: "skype",
          status: false
        }, {
          cn_name: "安全问题与答案",
          en_name: "answer",
          status: false
        }, {
          cn_name: "出生日期",
          en_name: "birth",
          status: false
        }, {
          cn_name: "出生地",
          en_name: "address",
          status: false
        }, {
          cn_name: "性别",
          en_name: "gender",
          status: false
        }, {
          cn_name: "邮编与国籍",
          en_name: "nationality",
          status: false
        }, {
          cn_name: "货币与语言",
          en_name: "language",
          status: false
        }, {
          cn_name: "身份证号码",
          en_name: "idcard",
          status: false
        }]
      }],
      // 导出权限
      checkExportList: [{
        name: "全选",
        checkAll: false,
        // isIndeterminate: false,
        children: ["有效用户导出", "优惠申请导出", "线上充值导出", "公司入款导出", "会员提现导出", "返水导出"],
        checkedChildren: [],
        childrenStatus: [{
          cn_name: "有效用户导出",
          en_name: "valid_user_export",
          status: false
        }, {
          cn_name: "优惠申请导出",
          en_name: "active_applys_export",
          status: false
        }, {
          cn_name: "线上充值导出",
          en_name: "deposit_onlines_export",
          status: false
        }, {
          cn_name: "公司入款导出",
          en_name: "deposit_offlines_export",
          status: false
        }, {
          cn_name: "会员提现导出",
          en_name: "user_withdraws_export",
          status: false
        }, {
          cn_name: "返水导出",
          en_name: "rebate_details_export",
          status: false
        }]
      }]
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    confirm: components_confirm["a" /* default */],
    checkgroup: components_checkGroup
  },
  methods: {
    init() {
      this.columnsUrl = "/static/json/accoutManage/childRoleAccount/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.sub.accounts.role;

      let _this = this;

      let permissionsList = this.permissionsList;
      let roleList = this.editForm.roleList;
      this.arrId = -1;
      this.permissionsList.splice(0, _this.permissionsList.length);
      this.loading = true;
      this.$.autoAjax('get', URL.api + ROUTES.GET.sub.accounts.auth + '?id=1', '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            let model = res.data.routes || []; // 这里做特殊处理，配合后台权限隐藏后台域名管理（业务需求，暂时这样）

            for (let index = 0; index < model[9]['children'].length; index++) {
              if (model[9]['children'][index].path === '/domainNameManage') {
                model[9]['children'].splice(index, 1);
                break;
              }
            }

            for (let k in model) {
              _this.arrId++;
              roleList.push({
                id: _this.arrId,
                name: model[k].name,
                action: [],
                path: model[k].path,
                children: this.getChilds(model[k].children, true)
              });
              permissionsList.push({
                id: _this.arrId,
                name: model[k].name,
                action: model[k].action,
                actionList: this.getActions(model[k]),
                path: model[k].path,
                children: this.getChilds(model[k].children)
              });
            }
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.get(URL.api + ROUTES.GET.sub.accounts.auth +'?id=1',URLCONFIG).then((res)=>{
      //     if(res.data.state === 0 && res.data.data){
      //         let model = res.data.data.routes || [];
      //
      //         // 这里做特殊处理，配合后台权限隐藏后台域名管理（业务需求，暂时这样）
      //         for (let index = 0; index < model[9]['children'].length; index++) {
      //             if (model[9]['children'][index].path === '/domainNameManage') {
      //                 model[9]['children'].splice(index, 1);
      //                 break;
      //             }
      //         }
      //
      //         for(let k in model){
      //             _this.arrId++;
      //             roleList.push({
      //                 id: _this.arrId,
      //                 name: model[k].name,
      //                 action: [],
      //                 path: model[k].path,
      //                 children: this.getChilds(model[k].children,true)
      //             });
      //             permissionsList.push({
      //                 id: _this.arrId,
      //                 name: model[k].name,
      //                 action: model[k].action,
      //                 actionList: this.getActions(model[k]),
      //                 path: model[k].path,
      //                 children: this.getChilds(model[k].children)
      //             });
      //         }
      //     }
      //     _this.loading = false;
      // })
      .catch(e => {
        _this.loading = false;

        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      });
    },

    //格式化操作
    getActions(obj) {
      let arr = obj.action;
      let str = [];

      for (let n in arr) {
        let temp = {};

        switch (arr[n]) {
          case "delete":
            str.push({
              id: this.num++,
              name: "删除",
              fn: "delete"
            });
            break;

          case "update":
            str.push({
              id: this.num++,
              name: "修改",
              fn: "update"
            });
            break;

          case "fetch":
            str.push({
              id: this.num++,
              name: "查询",
              fn: "fetch"
            });
            break;

          case "insert":
            str.push({
              id: this.num++,
              name: "新增",
              fn: "insert"
            });
            break;
        }
      }

      return str;
    },

    //格式化子类
    getChilds(obj, action) {
      let arr = obj || [];
      let str = [];

      for (let m in arr) {
        this.arrId++;

        if (action) {
          str.push({
            id: this.arrId,
            name: arr[m].name,
            action: [],
            path: arr[m].path
          });
        } else {
          str.push({
            id: this.arrId,
            name: arr[m].name,
            action: arr[m].action,
            children: this.getActions(arr[m]),
            path: arr[m].path
          });
        }
      }

      return str;
    },

    //新增
    doAdd() {
      this.formType = "add";
      this.editForm.id = -1;
      this.editForm.role = "";
      this.editFormTtile = "新建子帐号";
      this.btnEditText = "保存";
      this.checkGrounpList.forEach(item => {
        item["checkAll"] = false;
        item["checkedChildren"] = [];
        item["childrenStatus"].forEach(option => {
          option.status = false;
        });
      });
      this.checkExportList.forEach(item => {
        item["checkAll"] = false;
        item["checkedChildren"] = [];
        item["childrenStatus"].forEach(option => {
          option.status = false;
        });
      });
      this.editFormVisible = true;

      if (this.$refs.tree) {
        this.$refs.tree.setCheckedKeys([]);
      }
    },

    //表格点击事件
    doHandle(item) {
      if (item.fn == "doEdit") {
        this.doEdit(item.row);
      } else if (item.fn == "doDelete") {
        this.doDelete(item.row);
      }
    },

    // 删除角色
    doDelete(row) {
      if (parseInt(row.id) && parseInt(row.num) === 0) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + row.role + '"' + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "delete";
        this.confirmConfig.obj = row;
      } else if (parseInt(row.num) > 0) {
        this.$message.error(LANG['角色有使用，不可删除！'] || '角色有使用，不可删除！');
      }
    },

    //确认删除
    doConfirm(obj) {
      this.loading = true;

      let _this = this;

      switch (obj.fn) {
        case "delete":
          if (parseInt(obj.obj.id) > 0 && parseInt(obj.obj.num) === 0) {
            this.updated = false;

            let _this = this;

            this.$.autoAjax('delete', URL.api + ROUTES.DELETE.sub.account.del + "?id=" + parseInt(obj.obj.id), '', {
              ok: res => {
                if (res.state === 0 && res.data) {
                  _this.updated = true;

                  _this.$message.success(LANG['恭喜您，角色删除成功！'] || '恭喜您，角色删除成功！');
                } else if (res.state === 2) {
                  _this.$message.error(LANG['角色删除失败，该角色名不存在'] || '角色删除失败，该角色名不存在');
                }
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            }); // this.$http.delete(URL.api + ROUTES.DELETE.sub.account.del+"?id="+parseInt(obj.obj.id),URLCONFIG).then((res)=>{
            //     if(res.data.state === 0 && res.data.data){
            //         _this.updated = true;
            //         _this.$message.success(LANG['恭喜您，角色删除成功！'] || '恭喜您，角色删除成功！');
            //     }else if(res.data.state === 2){
            //         _this.$message.error(LANG['角色删除失败，该角色名不存在'] || '角色删除失败，该角色名不存在');
            //     }
            // })

            _this.loading = false;
          } else if (parseInt(row.num) > 0) {
            _this.loading = false;
            this.$message.error(LANG['角色有帐号使用，不可删除！'] || '角色有帐号使用，不可删除！');
          }

          break;
      }
    },

    //重置表单
    resetForm() {
      this.$refs.editForm.resetFields();
      let member_control = this.editForm.member_control;

      for (let k in member_control) {
        member_control[k] = false;
      }

      this.editFormVisible = false;
      this.$refs.tree.setCheckedKeys([]);
    },

    //保存角色
    saveFrom() {
      var _this = this; // NProgress.start();


      _this.$refs.editForm.validate(valid => {
        let check_control = {};
        let check_export = {};

        for (let i of this.checkGrounpList) {
          i["childrenStatus"].map(item => {
            check_control[item.en_name] = item.status;
          });
        }

        for (let k of this.checkExportList) {
          k["childrenStatus"].map(item => {
            check_export[item.en_name] = item.status;
          });
        }

        if (valid) {
          _this.loading = true;
          this.getCheckTree();
          this.updated = false;
          let url = this.formType === 'add' ? URL.api + ROUTES.GET.sub.accounts.role : URL.api + ROUTES.GET.sub.accounts.role + '?id=' + this.editForm.id;
          let query = {
            role_name: this.editForm.role,
            auth: this.editForm.roleList,
            // member_control: {
            //     true_name: this.editForm.member_control.true_name,
            //     bank_card: this.editForm.member_control.bank_card,
            //     address_book: this.editForm.member_control.address_book,
            //     user_status: this.editForm.member_control.user_status
            // }
            member_control: check_control,
            export_control: check_export
          };
          this.$.autoAjax('put', url, query, {
            ok: res => {
              if (res.state == 0 && res.data) {
                if (this.formType === 'add') {
                  this.$message.success(LANG['新增角色成功'] || '新增角色成功');
                } else {
                  console.log(query);
                  this.$message.success(LANG['修改角色成功'] || '修改角色成功');
                }

                this.updated = true;
              } else if (res.state == 405) {
                if (this.formType === 'add') {
                  this.$message.error(LANG['新增角色失败,权限不足'] || '新增角色失败,权限不足');
                } else {
                  this.$message.error(LANG['修改角色失败,权限不足'] || '修改角色失败,权限不足');
                }
              } else {
                if (this.formType === 'add') {
                  this.$message.error((res.msg ? res.msg : '') + (LANG['新增角色失败'] || '新增角色失败'));
                } else {
                  this.$message.error((res.msg ? res.msg : '') + (LANG['修改角色失败'] || '修改角色失败'));
                }
              }

              _this.initRoleList();

              _this.loading = false;
              this.editFormVisible = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }) // this.$http.put(url, query, URLCONFIG).then((res) => {
          //     if (res.data.state == 0 && res.data.data) {
          //         if(this.formType === 'add'){
          //             this.$message.success(LANG['新增角色成功'] || '新增角色成功');
          //         } else {
          //             console.log(query);
          //             this.$message.success(LANG['修改角色成功'] || '修改角色成功');
          //         }
          //         this.updated = true;
          //     } else if(res.data.state == 405){
          //         if(this.formType === 'add'){
          //             this.$message.error((LANG['新增角色失败,权限不足'] || '新增角色失败,权限不足'));
          //         }else {
          //             this.$message.error((LANG['修改角色失败,权限不足'] || '修改角色失败,权限不足'));
          //         }
          //     }else {
          //         if(this.formType === 'add'){
          //             this.$message.error((res.data.msg? res.data.msg : '') + (LANG['新增角色失败'] || '新增角色失败'));
          //         }else {
          //             this.$message.error((res.data.msg ? res.data.msg : '') + (LANG['修改角色失败'] || '修改角色失败'));
          //         }
          //     }
          //     _this.initRoleList();
          //     _this.loading = false;
          //     this.editFormVisible=false;
          // })
          .catch(e => {
            _this.loading = false;
            this.$message.error(e.data.msg + LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
          });

          _this.resetForm();
        } else {
          _this.$message.error(LANG['验证未通过，请修改后提交'] || '验证未通过，请修改后提交');
        }
      });
    },

    // 初始化角色值
    initRoleList() {
      let roleList = this.editForm.roleList;
      roleList.forEach(v => {
        v.action = [];

        if (v.children && v.children.length > 0) {
          v.children.forEach(val => {
            val.action = [];
          });
        }
      });
    },

    //查找ACTION ID值
    setActions(arr, index, keys) {
      if (this.permissionsList[index].children[keys] === undefined) {
        return;
      }

      let list = this.permissionsList[index].children[keys].children;
      let temp = this.updateList;
      arr.forEach(val => {
        list.forEach(v => {
          if (v.fn === val) {
            temp.push(v.id);
          }
        });
      });
    },

    // 初始化树
    setCheckedKeys(arr) {
      this.$refs.tree.setCheckedKeys(arr);
    },

    //格式化树节点
    getCheckTree() {
      let arr = this.$refs.tree.getCheckedNodes();
      let list = this.permissionsList;
      let roleList = this.editForm.roleList;
      let index = -1;
      let keys = -1;

      for (let h in arr) {
        if (arr[h].fn) {
          list.forEach((v, k) => {
            index = k;
            v.children && v.children.forEach((val, key) => {
              keys = key;
              val.children && val.children.forEach(fn => {
                if (fn.id === arr[h].id) {
                  let lists = roleList[index].action;
                  let numbers = 0;

                  for (let j in lists) {
                    if (lists[j] === fn.fn) {
                      numbers++;
                      break;
                    }
                  }

                  if (numbers === 0) {
                    lists.push(fn.fn);
                  }

                  roleList[index].children[keys].action.push(fn.fn);
                }
              });
            });
          });
        }
      }
    },

    //编辑
    doEdit(row) {
      this.formType = "edit";
      this.editForm.id = row.id;
      let editForm = this.editForm;

      let _this = this;

      this.loading = true;
      let tree = this.$refs.tree;
      this.$.autoAjax('get', this.tableUrl + "?id=" + row.id, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            let model = res.data[0].auth || [];
            editForm.role = res.data[0].role || ""; // let tempObj = res.data.data[0].member_control;
            // editForm.member_control.true_name = tempObj.true_name || false;
            // editForm.member_control.bank_card = tempObj.bank_card || false;
            // editForm.member_control.address_book = tempObj.address_book || false;
            // editForm.member_control.user_status = tempObj.user_status || false;

            let tempobjTwo = res.data[0].export_control || {};
            let sum = 0,
                num = 0;
            this.checkExportList.forEach(item => {
              item["checkAll"] = false;
              item["checkedChildren"] = [];
              item["childrenStatus"].forEach((option, key) => {
                num++;

                if (tempobjTwo[option.en_name]) {
                  sum++;
                  item["checkedChildren"].push(option.cn_name);
                }

                option.status = false;
              });
            });

            if (sum === num) {
              this.checkExportList[0].checkAll = true;
            }

            let tempObj = res.data[0].member_control || {};
            this.checkGrounpList.forEach(item => {
              item["checkAll"] = false;
              item["checkedChildren"] = [];
              item["childrenStatus"].forEach(option => {
                option.status = false;
              });
            }); // 真实姓名权限

            if (tempObj.true_name) {
              this.checkGrounpList[0]["checkAll"] = true;
              this.checkGrounpList[0]["checkedChildren"].push("真实姓名");
              this.checkGrounpList[0]["childrenStatus"].forEach(item => {
                item["status"] = true;
              });
            } // 银行卡权限


            if (tempObj.bank_card) {
              this.checkGrounpList[2]["checkAll"] = true;
              this.checkGrounpList[2]["checkedChildren"].push("银行卡号和开户信息");
              this.checkGrounpList[2]["childrenStatus"].forEach(item => {
                item["status"] = true;
              });
            } // 状态控制权限


            if (tempObj.account_disabled && tempObj.account_black && tempObj.account_forbidden && tempObj.account_kick && tempObj.account_limit) {
              this.checkGrounpList[1]["checkAll"] = true;
              this.checkGrounpList[1]["checkedChildren"] = this.checkGrounpList[1]["children"] || [];
              this.checkGrounpList[1]["childrenStatus"].forEach(item => {
                item["status"] = true;
              });
            } else {
              // 停号
              if (tempObj.account_disabled) {
                this.checkGrounpList[1]["checkedChildren"].push("停号");
                this.checkGrounpList[1]["childrenStatus"][0]["status"] = true;
              } // 封号


              if (tempObj.account_forbidden) {
                this.checkGrounpList[1]["checkedChildren"].push("封号");
                this.checkGrounpList[1]["childrenStatus"][1]["status"] = true;
              } // 黑名单


              if (tempObj.account_black) {
                this.checkGrounpList[1]["checkedChildren"].push("黑名单");
                this.checkGrounpList[1]["childrenStatus"][2]["status"] = true;
              } // 踢出在线


              if (tempObj.account_kick) {
                this.checkGrounpList[1]["checkedChildren"].push("踢出在线");
                this.checkGrounpList[1]["childrenStatus"][3]["status"] = true;
              } // 自我限制


              if (tempObj.account_limit) {
                this.checkGrounpList[1]["checkedChildren"].push("自我限制");
                this.checkGrounpList[1]["childrenStatus"][4]["status"] = true;
              }
            } // 联系信息


            if (tempObj.qq && tempObj.mobile && tempObj.email && tempObj.weixin && tempObj.skype && tempObj.answer && tempObj.birth && tempObj.address && tempObj.gender && tempObj.nationality && tempObj.language && tempObj.idcard) {
              this.checkGrounpList[3]["checkAll"] = true;
              this.checkGrounpList[3]["checkedChildren"] = this.checkGrounpList[3]["children"] || [];
              this.checkGrounpList[3]["childrenStatus"].forEach(item => {
                item["status"] = true;
              });
            } else {
              if (tempObj.qq) {
                this.checkGrounpList[3]["checkedChildren"].push("qq");
                this.checkGrounpList[3]["childrenStatus"][0]["status"] = true;
              }

              if (tempObj.mobile) {
                this.checkGrounpList[3]["checkedChildren"].push("手机号码");
                this.checkGrounpList[3]["childrenStatus"][1]["status"] = true;
              }

              if (tempObj.email) {
                this.checkGrounpList[3]["checkedChildren"].push("邮箱");
                this.checkGrounpList[3]["childrenStatus"][2]["status"] = true;
              }

              if (tempObj.weixin) {
                this.checkGrounpList[3]["checkedChildren"].push("微信");
                this.checkGrounpList[3]["childrenStatus"][3]["status"] = true;
              }

              if (tempObj.skype) {
                this.checkGrounpList[3]["checkedChildren"].push("skype");
                this.checkGrounpList[3]["childrenStatus"][4]["status"] = true;
              }

              if (tempObj.answer) {
                this.checkGrounpList[3]["checkedChildren"].push("安全问题与答案");
                this.checkGrounpList[3]["childrenStatus"][5]["status"] = true;
              }

              if (tempObj.birth) {
                this.checkGrounpList[3]["checkedChildren"].push("出生日期");
                this.checkGrounpList[3]["childrenStatus"][6]["status"] = true;
              }

              if (tempObj.address) {
                this.checkGrounpList[3]["checkedChildren"].push("出生地");
                this.checkGrounpList[3]["childrenStatus"][7]["status"] = true;
              }

              if (tempObj.gender) {
                this.checkGrounpList[3]["checkedChildren"].push("性别");
                this.checkGrounpList[3]["childrenStatus"][8]["status"] = true;
              }

              if (tempObj.nationality) {
                this.checkGrounpList[3]["checkedChildren"].push("邮编与国籍");
                this.checkGrounpList[3]["childrenStatus"][9]["status"] = true;
              }

              if (tempObj.language) {
                this.checkGrounpList[3]["checkedChildren"].push("货币与语言");
                this.checkGrounpList[3]["childrenStatus"][10]["status"] = true;
              }

              if (tempObj.idcard) {
                this.checkGrounpList[3]["checkedChildren"].push("身份证号码");
                this.checkGrounpList[3]["childrenStatus"][11]["status"] = true;
              }
            }

            _this.updateList = [];
            let index = -1;
            let keys = -1;
            model.forEach((v, k) => {
              if (v.action && v.action.length > 0) {
                index = k;

                if (v.children && v.children.length > 0) {
                  v.children.forEach((val, key) => {
                    keys = key;

                    if (val.action && val.action.length > 0) {
                      _this.setActions(val.action, index, keys);
                    }
                  });
                }
              }
            });
            _this.editFormTtile = "修改子帐号";
            _this.btnEditText = "修改";
            _this.editFormVisible = true; //                      // 设置树初始化

            setTimeout(function () {
              if (_this.updateList.length === 0) {
                _this.$refs.tree.setCheckedKeys([]);
              } else {
                _this.$refs.tree.setCheckedKeys(_this.updateList);
              }
            }, 300);
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) //                 this.$http.get(this.tableUrl + "?id=" + row.id , URLCONFIG).then((res) => {
      //                     if (res.data.state == 0 && res.data.data) {
      //                         let model = res.data.data[0].auth || [];
      //                         editForm.role = res.data.data[0].role || "";
      //
      //                         // let tempObj = res.data.data[0].member_control;
      //                         // editForm.member_control.true_name = tempObj.true_name || false;
      //                         // editForm.member_control.bank_card = tempObj.bank_card || false;
      //                         // editForm.member_control.address_book = tempObj.address_book || false;
      //                         // editForm.member_control.user_status = tempObj.user_status || false;
      //                         let tempobjTwo = res.data.data[0].export_control || {};
      //                         let sum = 0 , num = 0;
      //                         this.checkExportList.forEach((item) => {
      //                             item["checkAll"] = false;
      //                             item["checkedChildren"] = [];
      //                             item["childrenStatus"].forEach((option,key) => {
      //                                 num ++;
      //                                 if(tempobjTwo[option.en_name]){
      //                                     sum ++;
      //                                     item["checkedChildren"].push(option.cn_name);
      //                                 }
      //                                 option.status = false;
      //                             })
      //                         })
      //                         if(sum === num){
      //                             this.checkExportList[0].checkAll = true;
      //                         }
      //
      //                         let tempObj = res.data.data[0].member_control || {};
      //                         this.checkGrounpList.forEach((item) => {
      //                             item["checkAll"] = false;
      //                             item["checkedChildren"] = [];
      //                             item["childrenStatus"].forEach((option) => {
      //                                 option.status = false;
      //                             })
      //                         })
      //                         // 真实姓名权限
      //                         if (tempObj.true_name) {
      //                             this.checkGrounpList[0]["checkAll"] = true;
      //                             this.checkGrounpList[0]["checkedChildren"].push("真实姓名");
      //                             this.checkGrounpList[0]["childrenStatus"].forEach((item) => {
      //                                 item["status"] = true;
      //                             })
      //                         }
      //                         // 银行卡权限
      //                         if (tempObj.bank_card) {
      //                             this.checkGrounpList[2]["checkAll"] = true;
      //                             this.checkGrounpList[2]["checkedChildren"].push("银行卡号和开户信息");
      //                             this.checkGrounpList[2]["childrenStatus"].forEach((item) => {
      //                                 item["status"] = true;
      //                             })
      //                         }
      //                         // 状态控制权限
      //                         if (tempObj.account_disabled && tempObj.account_black && tempObj.account_forbidden && tempObj.account_kick && tempObj.account_limit) {
      //                             this.checkGrounpList[1]["checkAll"] = true;
      //                             this.checkGrounpList[1]["checkedChildren"] = this.checkGrounpList[1]["children"] || [];
      //                             this.checkGrounpList[1]["childrenStatus"].forEach((item) => {
      //                                 item["status"] = true;
      //                             })
      //                         } else {
      //                             // 停号
      //                             if (tempObj.account_disabled) {
      //                                 this.checkGrounpList[1]["checkedChildren"].push("停号");
      //                                 this.checkGrounpList[1]["childrenStatus"][0]["status"] = true;
      //                             }
      //                             // 封号
      //                             if (tempObj.account_forbidden) {
      //                                 this.checkGrounpList[1]["checkedChildren"].push("封号");
      //                                 this.checkGrounpList[1]["childrenStatus"][1]["status"] = true;
      //                             }
      //                             // 黑名单
      //                             if (tempObj.account_black) {
      //                                 this.checkGrounpList[1]["checkedChildren"].push("黑名单");
      //                                 this.checkGrounpList[1]["childrenStatus"][2]["status"] = true;
      //                             }
      //                             // 踢出在线
      //                             if (tempObj.account_kick) {
      //                                 this.checkGrounpList[1]["checkedChildren"].push("踢出在线");
      //                                 this.checkGrounpList[1]["childrenStatus"][3]["status"] = true;
      //                             }
      //                             // 自我限制
      //                             if (tempObj.account_limit) {
      //                                 this.checkGrounpList[1]["checkedChildren"].push("自我限制");
      //                                 this.checkGrounpList[1]["childrenStatus"][4]["status"] = true;
      //                             }
      //                         }
      //                         // 联系信息
      //                         if (tempObj.qq && tempObj.mobile && tempObj.email && tempObj.weixin && tempObj.skype && tempObj.answer && tempObj.birth && tempObj.address && tempObj.gender && tempObj.nationality && tempObj.language && tempObj.idcard) {
      //                             this.checkGrounpList[3]["checkAll"] = true;
      //                             this.checkGrounpList[3]["checkedChildren"] = this.checkGrounpList[3]["children"] || [];
      //                             this.checkGrounpList[3]["childrenStatus"].forEach((item) => {
      //                                 item["status"] = true;
      //                             })
      //                         } else {
      //                             if (tempObj.qq) { this.checkGrounpList[3]["checkedChildren"].push("qq"); this.checkGrounpList[3]["childrenStatus"][0]["status"] = true;}
      //                             if (tempObj.mobile) { this.checkGrounpList[3]["checkedChildren"].push("手机号码"); this.checkGrounpList[3]["childrenStatus"][1]["status"] = true;}
      //                             if (tempObj.email) { this.checkGrounpList[3]["checkedChildren"].push("邮箱"); this.checkGrounpList[3]["childrenStatus"][2]["status"] = true;}
      //                             if (tempObj.weixin) { this.checkGrounpList[3]["checkedChildren"].push("微信"); this.checkGrounpList[3]["childrenStatus"][3]["status"] = true;}
      //                             if (tempObj.skype) { this.checkGrounpList[3]["checkedChildren"].push("skype"); this.checkGrounpList[3]["childrenStatus"][4]["status"] = true;}
      //                             if (tempObj.answer) { this.checkGrounpList[3]["checkedChildren"].push("安全问题与答案"); this.checkGrounpList[3]["childrenStatus"][5]["status"] = true;}
      //                             if (tempObj.birth) { this.checkGrounpList[3]["checkedChildren"].push("出生日期"); this.checkGrounpList[3]["childrenStatus"][6]["status"] = true;}
      //                             if (tempObj.address) { this.checkGrounpList[3]["checkedChildren"].push("出生地"); this.checkGrounpList[3]["childrenStatus"][7]["status"] = true;}
      //                             if (tempObj.gender) { this.checkGrounpList[3]["checkedChildren"].push("性别"); this.checkGrounpList[3]["childrenStatus"][8]["status"] = true;}
      //                             if (tempObj.nationality) { this.checkGrounpList[3]["checkedChildren"].push("邮编与国籍"); this.checkGrounpList[3]["childrenStatus"][9]["status"] = true;}
      //                             if (tempObj.language) { this.checkGrounpList[3]["checkedChildren"].push("货币与语言"); this.checkGrounpList[3]["childrenStatus"][10]["status"] = true;}
      //                             if (tempObj.idcard) { this.checkGrounpList[3]["checkedChildren"].push("身份证号码"); this.checkGrounpList[3]["childrenStatus"][11]["status"] = true;}
      //
      //                         }
      //
      //
      //                         _this.updateList = [];
      //                         let index = -1;
      //                         let keys = -1;
      //                         model.forEach((v,k)=>{
      //                             if(v.action && v.action.length>0){
      //                                 index = k;
      //                                 if(v.children && v.children.length >0){
      //                                     v.children.forEach((val,key)=>{
      //                                         keys = key;
      //                                         if(val.action && val.action.length>0){
      //                                             _this.setActions(val.action,index,keys);
      //                                         }
      //                                     })
      //                                 }
      //                             }
      //                         })
      //                         _this.editFormTtile="修改子帐号"
      //                         _this.btnEditText="修改"
      //                         _this.editFormVisible=true
      //
      // //                      // 设置树初始化
      //                         setTimeout(function(){
      //                             if(_this.updateList.length === 0) {
      //                                 _this.$refs.tree.setCheckedKeys([]);
      //                             }else{
      //                                 _this.$refs.tree.setCheckedKeys(_this.updateList);
      //                             }
      //                         },300)
      //                     }
      //                     _this.loading = false;
      //                 })
      .catch(e => {
        _this.loading = false;
        this.$message.error(e + LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
      });
    },

    getEditChildren(obj) {
      let tempList = [];
      let arrList = obj.children || [];
      arrList.forEach(value => {
        tempList.push({
          action: [],
          id: value.id,
          name: value.name,
          path: value.path
        });
      });
      return tempList;
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1b995e2d","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/childRoleAccount.vue
var childRoleAccount_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],staticClass:"clearfix",attrs:{"id":"childRoleAccount"}},[_c('el-col',{staticClass:"pb"},[_c('el-button',{staticClass:"addManage",attrs:{"type":"primary","size":"small"},domProps:{"textContent":_vm._s(_vm.LANG['新增角色'] || '新增角色')},on:{"click":_vm.doAdd}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":false,"pageSet":true,"showRefresh":true,"updated":_vm.updated},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{staticClass:"fromTitle",attrs:{"title":_vm.editFormTtile,"size":"small"},model:{value:(_vm.editFormVisible),callback:function ($$v) {_vm.editFormVisible=$$v},expression:"editFormVisible"}},[_c('el-form',{ref:"editForm",attrs:{"model":_vm.editForm,"label-width":"100px","rules":_vm.editFormRules}},[_c('el-form-item',{attrs:{"label":_vm.LANG['角色名称'] || '角色名称',"prop":"role"}},[_c('el-input',{attrs:{"auto-complete":"off"},model:{value:(_vm.editForm.role),callback:function ($$v) {_vm.$set(_vm.editForm, "role", $$v)},expression:"editForm.role"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['菜单权限'] || '菜单权限',"prop":""}},[_c('el-tree',{ref:"tree",attrs:{"data":_vm.permissionsList,"show-checkbox":"","accordion":"","node-key":"id","props":_vm.defaultProps}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['会员权限'] || '会员权限'}},[_c('checkgroup',{attrs:{"checkGrounpList":_vm.checkGrounpList}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['导出权限'] || '导出权限'}},[_c('checkgroup',{attrs:{"checkGrounpList":_vm.checkExportList}})],1)],1),_vm._v(" "),_c('div',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{nativeOn:{"click":function($event){return _vm.resetForm($event)}}},[_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},nativeOn:{"click":function($event){return _vm.saveFrom($event)}}},[_vm._v(_vm._s(_vm.LANG[_vm.btnEditText] || _vm.btnEditText))])],1)],1),_vm._v(" "),_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var childRoleAccount_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/userManagement/childRoleAccount.vue
function childRoleAccount_injectStyle (context) {
  __webpack_require__(500)
}
/* script */


/* template */

/* template functional */
var childRoleAccount_vue_template_functional_ = false
/* styles */
var childRoleAccount_vue_styles_ = childRoleAccount_injectStyle
/* scopeId */
var childRoleAccount_vue_scopeId_ = "data-v-1b995e2d"
/* moduleIdentifier (server only) */
var childRoleAccount_vue_module_identifier_ = null

var childRoleAccount_Component = Object(component_normalizer["a" /* default */])(
  childRoleAccount,
  childRoleAccount_render,
  childRoleAccount_staticRenderFns,
  childRoleAccount_vue_template_functional_,
  childRoleAccount_vue_styles_,
  childRoleAccount_vue_scopeId_,
  childRoleAccount_vue_module_identifier_
)

/* harmony default export */ var userManagement_childRoleAccount = __webpack_exports__["default"] = (childRoleAccount_Component.exports);


/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);