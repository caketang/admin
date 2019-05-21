(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.js
var nprogress = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/apply.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var apply = ({
  data() {
    return {
      LANG,
      // 数据导出相关
      outUrl: "",
      dialogVisible: false,
      // 详情
      applyInfoVisible: false,
      //优惠金额弹窗配置
      dialog_show_edit: false,
      show_edit_title: '',
      //原优惠金额
      show_edit_coupon_money: '',
      from_edit_money: {
        coupon_money: ''
      },
      dialog_widthdraw_edit: false,
      show_withdraw_title: '',
      show_edit_withdraw_require: '',
      from_withdraw_money: {
        withdraw_money: ''
      },
      //---------- 分割线-----------
      applyInfo: {},
      //表格相关
      columnsUrl: "",
      tableUrl: "",
      //批量操作按钮
      tabOperation: [{
        "label": "批量通过",
        "fn": "doAllAdopt"
      }, {
        "label": "批量拒绝",
        "fn": "doAllRefuse"
      }],
      //搜索相关
      searchConfig: [//快捷日期
      {
        "type": "dateGroup",
        "label": "申请时间",
        "prop": [{
          "prop": "date_from",
          "value": "",
          "label": "开始时间"
        }, {
          "prop": "date_to",
          "value": "",
          "label": "结束时间"
        }]
      }, {
        "prop": "user_name",
        "value": "",
        "type": "text",
        "label": "用户名"
      }, {
        "prop": "level",
        "value": "",
        "label": "会员等级",
        "type": "select",
        "list": []
      }, {
        "prop": "active_title",
        "value": "",
        "label": "优惠活动标题",
        "type": "select",
        "list": []
      }, {
        "prop": "status",
        "value": "",
        "label": "状态",
        "type": "select",
        "list": [{
          "label": "未处理",
          "value": "pending"
        }, {
          "label": "已通过",
          "value": "pass"
        }, {
          "label": "已拒绝",
          "value": "rejected"
        }]
      }],
      nowId: -1,
      isEdit: {},
      labelWidth: "100px",
      baseUrl: "",
      // form
      formVisible: {
        state: false
      },
      formTitle: "备注",
      formType: "default",
      formLabelWidth: "60px",
      formConfig: [{
        "prop": "remarks",
        "value": "",
        "label": "备注",
        "type": "textarea",
        "rules": [{
          "require": true
        }]
      }],
      selectedIds: [],
      // table选中的选项
      editInfo: {},
      // 编辑的信息
      nowId: -1,
      updated: false,
      sum: '',
      allData: {
        "subTotalMoney": '',
        "totalMoney": ''
      },
      sumShow: false,
      searchObj: {},
      isShow: sessionStorage.active_applys_export == 'true' ? true : false
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    formEdit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      this.columnsUrl = "static/json/preAct/apply/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.active.applys + "?date_from=" + sessionStorage.sysTime + ' 00:00:00' + "&date_to=" + sessionStorage.sysTime + ' 23:59:59';
      this.baseUrl = URL.api + ROUTES.GET.active.applys;
      this.searchObj.date_from = sessionStorage.sysTime;
      this.searchObj.date_to = sessionStorage.sysTime;
      this.reqVips();
      this.reqActTypes();
    },

    /**
     * 获取会员等级
     */
    reqVips() {
      let levelUrl = URL.api + ROUTES.GET.user.levels;
      this.$.autoAjax('get', levelUrl, '', {
        ok: res => {
          let model = res.data;

          for (let i in model) {
            this.searchConfig[2].list.push({
              "label": "VIP" + model[i].level,
              "value": model[i].level
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.get(levelUrl, URLCONFIG).then((res) => {
      // 	let model = res.data.data
      // 	for (let i in model) {
      // 		this.searchConfig[2].list.push({
      // 			"label": model[i].name,
      // 			"value": model[i].id
      // 		})
      // 	}
      // })
      .catch(function (err) {//                    console.log(err)
      });
    },

    /**
     * 获取活动名
     * 这里改成text输入框查询 所以不需要请求数据了
     */
    reqActTypes() {
      let activeUrl = URL.api + ROUTES.GET.actives.$ + "?type=all";
      this.$.autoAjax('get', activeUrl, '', {
        ok: res => {
          let model = res.data;

          for (let i in model) {
            this.searchConfig[3].list.push({
              "label": model[i].title,
              "value": model[i].title
            });
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.get(activeUrl, URLCONFIG).then((res) => {
      // 	let model = res.data.data;
      // 	for (let i in model) {
      // 		this.searchConfig[3].list.push({
      // 			"label": model[i].title,
      // 			"value": model[i].title
      // 		})
      // 	}
      // })
      .catch(e => {
        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      });
    },

    //查询
    doQuery(obj) {
      let temp = obj.item;
      this.tableUrl = this.baseUrl + this.addSearch(obj.item);

      for (let i in temp) {
        this.searchObj[i] = temp[i];
      }
    },

    //表格数据按钮
    doHandle(item) {
      this.updated = false;
      this.nowId = item.row.id || -1;

      switch (item.fn) {
        case "doAllow":
          // 通过
          this.submitAllow(item.row);
          break;

        case "doRefuse":
          // 拒绝
          this.submitRefuse(item.row);
          break;

        case "doViewInfo":
          // 编辑
          this.doViewInfo(item.row);
          break;

        case "doWriteRemarks":
          // 编辑
          this.doWriteRemarks(item.row);
          break;

        case "openUserSet":
          // 用户名跳转
          this.openUserSet(item.row);
          break;
        //修改未处理的优惠金额 doShowEdit

        case "doShowEdit":
          this.doShowEdit(item.row);
          break;
        //修改取款条件

        case "doEdit":
          this.doEdit(item.row);
          break;

        default:
          break;
      }
    },

    //			//用户名跳转
    //			openUserSet(item) {
    //				this.$router.push({path: '/memberManagement', query: {name: item.user_name}});
    //			},
    //批量按钮
    doOperation(item) {
      switch (item.fn) {
        case "doAllAdopt":
          // 通过
          this.doAllAdopt(item.rows);
          break;

        case "doAllRefuse":
          // 拒绝
          this.doAllRefuse(item.rows);
          break;
      }
    },

    doWriteRemarks(row) {
      this.editInfo = row;
      this.formVisible.state = true;
      this.formConfig[0].value = row.memo;
    },

    //关闭修改未处理的优惠金额弹窗
    dialog_close_edit() {
      this.dialog_show_edit = false;
    },

    //关闭修改未处理的优惠金额弹窗
    dialog_close_withdraw() {
      this.dialog_widthdraw_edit = false;
    },

    //修改未处理的优惠金额
    doShowEdit(row) {
      if (row.status == 'pending') {
        this.dialog_show_edit = true;
        this.show_edit_title = '修改用户：' + row.user_name + '的优惠金额';
        this.show_edit_coupon_money = FORMATMONEY(row.coupon_money);
      } else {
        this.$message.error(LANG['已处理的不可修改优惠'] || '已处理的不可修改优惠');
      }
    },

    //修改未处理的取款条件
    doEdit(row) {
      if (row.status == 'pending') {
        this.dialog_widthdraw_edit = true;
        this.show_edit_title = '修改用户：' + row.user_name + '的取款条件你';
        this.show_edit_withdraw_require = FORMATMONEY(row.withdraw_require);
      } else {
        this.$message.error(LANG['已处理的不可修改取款条件'] || '已处理的不可修改取款条件');
      }
    },

    //批量通过
    doAllAdopt(rows) {
      let ids = [];

      for (let k in rows) {
        ids.push(parseInt(rows[k].id));
      }

      this.$.autoAjax('put', URL.api + ROUTES.PUT.active.apply.status, {
        "id": ids.toString(),
        "status": "pass"
      }, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(this.LANG['批量通过成功'] || '批量通过成功');
          } else {
            this.$message.error(this.LANG['批量通过失败，请稍后重试'] || '批量通过失败，请稍后重试');
          }

          this.updated = true;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.put(URL.api + ROUTES.PUT.active.apply.status, JSON.stringify({"id": ids.toString(), "status": "pass"}), URLCONFIG).then((res) => {
      // 	if (res.data.state === 0 && res.data.data) {
      // 		this.$message.success(this.LANG['批量通过成功'] || '批量通过成功');
      // 	} else {
      // 		this.$message.error(this.LANG['批量通过失败，请稍后重试'] || '批量通过失败，请稍后重试');
      // 	}
      // 	this.updated = true;
      // })
      .catch(e => {
        this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      });
    },

    //批量拒绝
    doAllRefuse(rows) {
      let ids = [];

      for (let k in rows) {
        ids.push(parseInt(rows[k].id));
      }

      this.$.autoAjax('put', URL.api + ROUTES.PUT.active.apply.status, {
        "id": ids.toString(),
        "status": "rejected"
      }, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(this.LANG['批量拒绝成功'] || '批量拒绝成功');
          } else {
            this.$message.error(this.LANG['批量拒绝失败，请稍后重试'] || '批量拒绝失败，请稍后重试');
          }

          this.updated = true;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.put(URL.api + ROUTES.PUT.active.apply.status, JSON.stringify({"id": ids.toString(), "status": "rejected"}), URLCONFIG).then((res) => {
      // 	if (res.data.state === 0 && res.data.data) {
      // 		this.$message.success(this.LANG['批量拒绝成功'] || '批量拒绝成功');
      // 	} else {
      // 		this.$message.error(this.LANG['批量拒绝失败，请稍后重试'] || '批量拒绝失败，请稍后重试');
      // 	}
      // 	this.updated = true;
      // })
      .catch(e => {
        this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      });
    },

    /**
     * 查看详情
     */
    doViewInfo(row) {
      let id = row.id;
      this.$.autoAjax('get', URL.api + ROUTES.GET.active.apply + '/' + id, '', {
        ok: res => {
          if (res.state == 0 && res.data) {
            this.applyInfo = res.data[0];
          }

          this.applyInfoVisible = true;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.get(URL.api + ROUTES.GET.active.apply + '/' + id, URLCONFIG).then((res) => {
      // 	if (res.data.state == 0 && res.data.data) {
      // 		this.applyInfo = res.data.data[0];
      // 	}
      // 	this.applyInfoVisible = true;
      // })
      .catch(e => {
        this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      });
    },

    /**
     * 提交备注
     */
    submitRemarks(row) {
      let id = this.editInfo.id;
      let remarks = {
        content: ""
      };
      remarks.content = row.formObj.remarks;
      this.$.autoAjax('put', URL.api + ROUTES.PUT.active.apply.comment + "/" + parseInt(id), remarks, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(this.LANG['提交成功'] || '提交成功');
          } else {
            this.$message.error(this.LANG['提交失败，请稍后重试'] || '提交失败，请稍后重试');
          }

          this.updated = true;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.put(URL.api + ROUTES.PUT.active.apply.comment + "/" + parseInt(id), JSON.stringify(remarks), URLCONFIG).then((res) => {
      // 	if (res.data.state === 0 && res.data.data) {
      // 		this.$message.success(this.LANG['提交成功'] || '提交成功');
      // 	} else {
      // 		this.$message.error(this.LANG['提交失败，请稍后重试'] || '提交失败，请稍后重试');
      // 	}
      // 	this.updated = true;
      // })
      .catch(e => {
        this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      });
    },

    /**
     * 通过（单个）
     * @param row
     */
    submitAllow(row) {
      this.$.autoAjax('put', URL.api + ROUTES.PUT.active.apply.status, {
        id: row.id,
        status: 'pass',
        user_id: parseInt(row.user_id),
        user_name: row.user_name,
        memo: row.memo
      }, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(this.LANG['通过成功'] || '通过成功');
          } else {
            this.$message.error(this.LANG['通过失败，请稍后重试'] || '通过失败，请稍后重试');
          }

          this.updated = true;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.put(URL.api + ROUTES.PUT.active.apply.status, JSON.stringify({id: row.id, status: 'pass', user_id: parseInt(row.user_id), user_name: row.user_name, memo:row.memo}), URLCONFIG).then((res) => {
      // 	if (res.data.state === 0 && res.data.data) {
      // 		this.$message.success(this.LANG['通过成功'] || '通过成功');
      // 	} else {
      // 		this.$message.error(this.LANG['通过失败，请稍后重试'] || '通过失败，请稍后重试');
      // 	}
      // 	this.updated = true;
      // })
      .catch(e => {
        this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      });
    },

    /**
     * 拒绝 （单个）
     * @param row
     */
    submitRefuse(row) {
      this.$.autoAjax('put', URL.api + ROUTES.PUT.active.apply.status, {
        id: row.id,
        status: 'rejected',
        user_id: parseInt(row.user_id),
        user_name: row.user_name,
        memo: row.memo
      }, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(this.LANG['拒绝成功'] || '拒绝成功');
          } else {
            this.$message.error(this.LANG['拒绝失败，请稍后重试'] || '拒绝失败，请稍后重试');
          }

          this.updated = true;
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.put(URL.api + ROUTES.PUT.active.apply.status, JSON.stringify({id: row.id, status: 'rejected', user_id: parseInt(row.user_id), user_name: row.user_name, memo:row.memo}), URLCONFIG).then((res) => {
      // 	if (res.data.state === 0 && res.data.data) {
      // 		this.$message.success(this.LANG['拒绝成功'] || '拒绝成功');
      // 	} else {
      // 		this.$message.error(this.LANG['拒绝失败，请稍后重试'] || '拒绝失败，请稍后重试');
      // 	}
      // 	this.updated = true;
      // })
      .catch(e => {
        this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      });
    },

    //重置查询
    resetForm() {
      this.tableUrl = this.baseUrl + "?date_from=" + sessionStorage.sysTime + ' 00:00:00' + "&date_to=" + sessionStorage.sysTime + ' 23:59:59';
      this.searchObj.date_from = sessionStorage.sysTime;
      this.searchObj.date_to = sessionStorage.sysTime;
    },

    //获取表格数据
    getTableData(obj) {//				this.sumShow = false;
      //				this.allData = {};
      //				if (obj.allData.attributes && obj.allData.attributes.total > 0) {
      //					let model = obj.allData.attributes;
      //					this.sumShow = true;
      //					for (let i in model) {
      //						this.allData[i] = model[i];
      //					}
      //				}
    },

    // 修改优惠
    saveDiscount() {
      let _this = this;

      let query = {};
      this.updated = false;
      this.$refs['from_edit_money'].validate(valid => {
        if (valid) {
          query.coupon_money = FORMATMultiplyMoney(_this.from_edit_money.coupon_money);
          _this.dialog_show_edit = false;
          _this.from_edit_money.coupon_money = '';
          this.$.autoAjax('patch', URL.api + '/active.discount/' + _this.nowId, query, {
            ok: res => {
              _this.dialog_show_edit = false;
              _this.from_edit_money.coupon_money = '';

              if (res.state === 0 && res.data) {
                _this.$message.success(LANG['恭喜您，优惠修改成功！'] || '恭喜您，优惠修改成功！');

                _this.updated = true;
              } else if (res.state === 2002) {
                _this.$message.error(LANG[res.msg] || res.msg);
              } else {
                _this.$message.error(LANG['未知错误，请稍候重试'] || '未知错误，请稍候重试');
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // _this.$http.patch(URL.api + '/active.discount/' + _this.nowId ,JSON.stringify(query),URLCONFIG).then((res)=>{
          //     _this.dialog_show_edit = false;
          //     _this.from_edit_money.coupon_money = '';
          //     if(res.data.state === 0 && res.data.data){
          //         _this.$message.success(LANG['恭喜您，优惠修改成功！'] || '恭喜您，优惠修改成功！');
          //         _this.updated = true;
          //     }else if(res.data.state === 2002){
          //         _this.$message.error(LANG[res.data.msg] || res.data.msg);
          //     }else{
          //         _this.$message.error(LANG['未知错误，请稍候重试'] || '未知错误，请稍候重试');
          //     }
          // });
        }
      });
    },

    saveWithdraw() {
      let _this = this;

      let query = {};
      this.updated = false;
      this.$refs['from_withdraw_money'].validate(valid => {
        if (valid) {
          query.withdraw_require = FORMATMultiplyMoney(_this.from_withdraw_money.withdraw_money);
          _this.dialog_widthdraw_edit = false;
          _this.from_withdraw_money.withdraw_money = '';
          this.$.autoAjax('patch', URL.api + '/active.withdraw.require/' + _this.nowId, query, {
            ok: res => {
              _this.dialog_widthdraw_edit = false;
              _this.from_withdraw_money.withdraw_money = '';

              if (res.state === 0 && res.data) {
                _this.$message.success(LANG['恭喜您，取款条件修改成功！'] || '恭喜您，取款条件修改成功！');

                _this.updated = true;
              } else if (res.state === 2002) {
                _this.$message.error(LANG[res.msg] || res.msg);
              } else {
                _this.$message.error(LANG['未知错误，请稍候重试'] || '未知错误，请稍候重试');
              }
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          }); // _this.$http.patch(URL.api + '/active.withdraw.require/'+_this.nowId,JSON.stringify(query),URLCONFIG).then((res)=>{
          //     _this.dialog_widthdraw_edit = false;
          //     _this.from_withdraw_money.withdraw_money = '';
          //     if(res.data.state === 0 && res.data.data){
          //         _this.$message.success(LANG['恭喜您，取款条件修改成功！'] || '恭喜您，取款条件修改成功！');
          //         _this.updated = true;
          //     }else if(res.data.state === 2002){
          //         _this.$message.error(LANG[res.data.msg] || res.data.msg);
          //     }else{
          //         _this.$message.error(LANG['未知错误，请稍候重试'] || '未知错误，请稍候重试');
          //     }
          // });
        }
      });
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

    // 导出数据
    exportData() {
      // 当前查询条件
      let form = this.$children[0].$refs.editForm.model;

      let _this = this;

      if (form.date_from && form.date_to) {
        let url = URL.api + '/export/download/active/applys';
        this.$.autoAjax('get', URL.api + '/dev/download/sign' + '?nonce=' + url, '', {
          ok: res => {
            if (res.data) {
              _this.outUrl = url + _this.addSearch(_this.searchObj) + "&nonce=" + res.data.nonce + "&signature=" + res.data.signature + "&time=" + res.data.time + "&uuid=" + res.data.uuid;
              _this.dialogVisible = true;
            } else if (res.msg) {
              this.$message.error(res.msg);
            } else {
              _this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }) // this.$http.get(URL.api + '/dev/download/sign'+'?nonce='+ url, URLCONFIG).then((res) => {
        // 	// 执行导出
        // 	if (res.data.data) {
        // _this.outUrl = url + _this.addSearch(_this.searchObj) + "&nonce=" + res.data.data.nonce + "&signature=" + res.data.data.signature + "&time=" + res.data.data.time + "&uuid=" + res.data.data.uuid;
        // _this.dialogVisible = true;
        //    }else if(res.data.msg){
        //        this.$message.error(res.data.msg);
        //    } else {
        // 		_this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
        // 	}
        // })
        .catch(e => {//						console.log(e);
        });
      } else {
        this.$message.error(LANG['必需选择时间才能导出'] || '必需选择时间才能导出');
        return;
      }
    }

  },
  computed: {},

  mounted() {//                let sum = 0;
    //                $.get(this.columnsUrl, function (data) {
    //                    for (let i in data.columns) {
    //                        if (data.columns[i].width != undefined) {
    //                            sum = sum + (parseInt(data.columns[i].width));
    //                        }
    //                    }
    //                    $('#tables').find('table').css('min-width',sum+'px');
    //                    window.onresize = function(){
    //                        if($(window).width() <  $('#tables').find('table').width()){
    //                            $('#tables').css('width',$(window).width()-90).addClass('socr');
    //                        }else {
    //                            $('#tables').css('width',$(window).width()-90).removeClass('socr');
    //                        }
    //                    }
    //                });
  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-08b5b72f","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/apply.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"w100",attrs:{"id":"act_apply"}},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":'search',"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"showAdd":false},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm}}),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"pageSet":true,"tableIndex":false,"tabOperation":_vm.tabOperation,"getData":true,"showRefresh":false,"autoshowRefresh":true,"showExport":_vm.isShow,"updated":_vm.updated},on:{"do-operation":_vm.doOperation,"get-table-data":_vm.getTableData,"do-handle":_vm.doHandle,"export-data":_vm.exportData}},[(_vm.sumShow)?_c('tr',{staticClass:"sumdiv ml20",attrs:{"slot":"other","span":12},slot:"other"}):_vm._e()])],1),_vm._v(" "),_c('el-col',[_c('formEdit',{attrs:{"formTitel":_vm.formTitle,"formVisible":_vm.formVisible,"formConfig":_vm.formConfig,"type":_vm.formType,"labelWidth":_vm.formLabelWidth,"isEdit":_vm.isEdit,"formType":_vm.formType},on:{"get-form":_vm.submitRemarks}})],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":"提示","visible":_vm.dialogVisible,"size":"tiny"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[_vm._v("\n              "+_vm._s(_vm.LANG['点击”确认“导出数据'] || '点击”确认“导出数据')+"\n              "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('a',{attrs:{"href":_vm.outUrl,"target":"_blank","id":"outUrl"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v("确 认")])],1)],1)])],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{staticClass:"dialog-apply-info",attrs:{"title":_vm.LANG['申请详情'] || '申请详情',"size":"tiny"},model:{value:(_vm.applyInfoVisible),callback:function ($$v) {_vm.applyInfoVisible=$$v},expression:"applyInfoVisible"}},[_c('el-row',{staticClass:"lineDialog",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":6}},[_c('div',{staticClass:"grid-content bg-purple tRight"},[_c('span',[_vm._v(_vm._s(_vm.LANG['用户名称'] || '用户名称')+"：")])])]),_vm._v(" "),_c('el-col',{attrs:{"span":18}},[_c('div',{staticClass:"grid-content bg-purple-light"},[_c('span',[_vm._v(_vm._s(_vm.applyInfo['user_name']))])])]),_vm._v(" "),_c('el-col',{staticClass:"mt10",attrs:{"span":6}},[_c('div',{staticClass:"grid-content bg-purple tRight"},[_c('span',[_vm._v(_vm._s(_vm.LANG['联系电话'] || '联系电话')+"：")])])]),_vm._v(" "),_c('el-col',{staticClass:"mt10",attrs:{"span":18}},[_c('div',{staticClass:"grid-content bg-purple-light"},[_c('span',[_vm._v(_vm._s(_vm.applyInfo.mobile))])])]),_vm._v(" "),_c('el-col',{staticClass:"mt10",attrs:{"span":6}},[_c('div',{staticClass:"grid-content bg-purple tRight"},[_c('span',[_vm._v(_vm._s(_vm.LANG['邮箱'] || '邮箱')+"：")])])]),_vm._v(" "),_c('el-col',{staticClass:"mt10",attrs:{"span":18}},[_c('div',{staticClass:"grid-content bg-purple-light"},[_c('span',[_vm._v(_vm._s(_vm.applyInfo.email))])])]),_vm._v(" "),_c('el-col',{staticClass:"mt10",attrs:{"span":6}},[_c('div',{staticClass:"grid-content bg-purple tRight"},[_c('span',[_vm._v(_vm._s(_vm.LANG['申请活动'] || '申请活动')+"：")])])]),_vm._v(" "),_c('el-col',{staticClass:"mt10",attrs:{"span":18}},[_c('div',{staticClass:"grid-content bg-purple-light"},[_c('span',[_vm._v(_vm._s(_vm.applyInfo['active_name']))])])]),_vm._v(" "),_c('el-col',{staticClass:"mt10",attrs:{"span":6}},[_c('div',{staticClass:"grid-content bg-purple tRight"},[_c('span',[_vm._v(_vm._s(_vm.LANG['申请内容'] || '申请内容')+"：")])])]),_vm._v(" "),_c('el-col',{staticClass:"mt10",attrs:{"span":18}},[_c('div',{staticClass:"grid-content bg-purple-light"},[_c('span',[_vm._v(_vm._s(_vm.applyInfo.content))])])])],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.applyInfoVisible=false}}},[_vm._v(_vm._s(_vm.LANG['关闭'] || '关闭'))])],1)],1)],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":_vm.show_edit_title,"visible":_vm.dialog_show_edit,"width":"'120px'","size":"tiny","before-close":_vm.dialog_close_edit,"center":""},on:{"update:visible":function($event){_vm.dialog_show_edit=$event}}},[_c('span',{staticClass:"tCent w100"},[_vm._v(_vm._s(_vm.LANG['原优惠金额'] || '原优惠金额')+" ："+_vm._s(_vm.show_edit_coupon_money))]),_vm._v(" "),_c('p',{staticClass:"mt10"},[_c('el-form',{ref:"from_edit_money",attrs:{"model":_vm.from_edit_money,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['现优惠金额']||'现优惠金额'+':',"rules":[{ validator:_vm.validatorNumber,trigger:'blur'}],"prop":"coupon_money"}},[_c('el-input',{staticClass:"intW",model:{value:(_vm.from_edit_money.coupon_money),callback:function ($$v) {_vm.$set(_vm.from_edit_money, "coupon_money", $$v)},expression:"from_edit_money.coupon_money"}})],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialog_show_edit = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveDiscount}},[_vm._v("修 改")])],1)])],1),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":_vm.show_withdraw_title,"visible":_vm.dialog_widthdraw_edit,"width":"'120px'","size":"tiny","before-close":_vm.dialog_close_withdraw,"center":""},on:{"update:visible":function($event){_vm.dialog_widthdraw_edit=$event}}},[_c('span',{staticClass:"tCent w100"},[_vm._v(_vm._s(_vm.LANG['原取款条件'] || '原取款条件')+" ："+_vm._s(_vm.show_edit_withdraw_require))]),_vm._v(" "),_c('p',{staticClass:"mt10"},[_c('el-form',{ref:"from_withdraw_money",attrs:{"model":_vm.from_withdraw_money,"label-width":"100px"}},[_c('el-form-item',{attrs:{"label":_vm.LANG['取款条件']||'取款条件'+':',"rules":[{ validator:_vm.validatorNumber,trigger:'blur'}],"prop":"withdraw_money"}},[_c('el-input',{staticClass:"intW",model:{value:(_vm.from_withdraw_money.withdraw_money),callback:function ($$v) {_vm.$set(_vm.from_withdraw_money, "withdraw_money", $$v)},expression:"from_withdraw_money.withdraw_money"}})],1)],1)],1),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":function($event){_vm.dialog_widthdraw_edit = false}}},[_vm._v("取 消")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveWithdraw}},[_vm._v("修 改")])],1)])],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/preAct/apply.vue
function injectStyle (context) {
  __webpack_require__(428)
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
  apply,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var preAct_apply = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);