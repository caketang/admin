(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/userManagement/agentAccount/agentAccount.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//    import datepicker from '../../../components/datepicker.vue'
 //    import agentAccountDetail from './agentAccountDetail.vue'



/* harmony default export */ var agentAccount = ({
  data() {
    var checkPercent = (rule, value, callback) => {
      if (Number.parseFloat(value) > 100) {
        callback(new Error(LANG['百分比不能大于100%'] || '百分比不能大于100'));
      } else if (Number.parseFloat(value) < 0) {
        callback(new Error(LANG['百分比不能小于0'] || '百分比不能小于0'));
      } else {
        callback();
      }
    };

    var validUserName = (rule, value, callback) => {
      if (this.editForm.type === "1") {
        if (!/^[A-Za-z0-9]{6,16}$/.test(value)) {
          callback(new Error(LANG['请输入6-16位的数字及字母!'] || '请输入6-16位的数字及字母'));
        } else if (/^[0-9]{6,16}$/.test(value)) {
          callback(new Error(LANG['不能纯数字'] || '不能纯数字'));
        } else {
          callback();
        }
      } else {
        if (!/^[A-Za-z0-9]{6,16}$/.test(value) && !/^[\u4e00-\u9fa5]{1,10}$/.test(value)) {
          callback(new Error(LANG['请输入6到16位长度的数字及字母或者1到10位长度的中文!'] || '请输入6到16位长度的数字及字母或者1到10位长度的中文!'));
        } else if (/^[0-9]{6,16}$/.test(value)) {
          callback(new Error(LANG['不能纯数字'] || '不能纯数字'));
        } else {
          callback();
        }
      }
    };

    var checkNumber = function (rule, value, callback) {
      if (!/^([\-1-9]\d*|0)(\.\d{1,2})?$/.test(value.replace(/^\s+|\s+$/, ''))) {
        callback(new Error(LANG['小数点后不超过两位'] || '小数点后不超过两位'));
      } else {
        if (Number.parseFloat(value) < 0) {
          callback(new Error(LANG['请输入不小于0的数字'] || '请输入不小于0的数字'));
        } else if (Number.parseFloat(value) > 9999999) {
          callback(new Error(LANG['请输入小于9999999的数字'] || '请输入小于9999999的数字'));
        } else {
          callback();
        }
      }
    };

    var checkIntNumber = function (rule, value, callback) {
      if (!/^-?\d+$/.test(value.replace(/^\s+|\s+$/, ''))) {
        callback(new Error(LANG['请输入整数'] || '请输入整数'));
      } else {
        if (Number.parseFloat(value) < 0) {
          callback(new Error(LANG['请输入不小于0的数字'] || '请输入不小于0的数字'));
        } else if (Number.parseFloat(value) > 9999999) {
          callback(new Error(LANG['请输入小于9999999的数字'] || '请输入小于9999999的数字'));
        } else {
          callback();
        }
      }
    };

    return {
      agentType: -1,
      // 判断是直属代理还是层级代理
      LANG,
      updated: false,
      //页面刷新标识
      fullscreenLoading: false,
      //数据接口地址
      tableUrl: "",
      //列配置接口地址
      columnsUrl: "",
      //批量操作按钮
      tabOperation: [{
        "label": "批量启用",
        "fn": "doEnable"
      }, //原型没有
      {
        "label": "批量停用",
        "fn": "doDisable"
      }],
      //批量操作提示按钮
      //是否详细页
      isDetail: false,
      isCreated: false,
      //搜索相关
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
        "label": "代理名"
      }, {
        "prop": "agent_type",
        "value": "",
        "label": "代理类型",
        "type": "select",
        "list": [{
          'label': '直属代理',
          'value': '2'
        }, {
          'label': '层级代理',
          'value': '1'
        }]
      }, {
        "prop": "online",
        "value": "",
        "label": "在线状态",
        "type": "select",
        "list": [{
          "label": "全部",
          "value": ""
        }, {
          "label": "在线",
          "fn": true,
          "value": '1'
        }, {
          "label": "离线",
          "fn": false,
          "value": '0'
        }]
      }, {
        "prop": "status",
        "value": "",
        "label": "帐号状态",
        "type": "select",
        "list": [{
          "label": "全部",
          "value": ""
        }, {
          "label": "启用",
          "fn": true,
          "value": '1'
        }, {
          "label": "停用",
          "fn": false,
          "value": '3'
        }]
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
        "prop": "origin",
        "value": "",
        "label": "注册来源",
        "type": "select",
        "list": ARRAYS.PALYORIGINL
      }, {
        "prop": "agent_higher",
        "value": "",
        "type": "text",
        "label": "上级代理"
      }, {
        "prop": "code",
        "value": "",
        "type": "text",
        "label": "推广码"
      }],
      type: "search",
      labelWidth: "90px",
      formVisible: {
        state: false
      },
      isEdit: {
        state: false
      },
      //新增编辑
      editTitel: "",
      editVisible: false,
      typeList: [{
        "label": "层级代理",
        "value": "1"
      }, {
        "label": "直属代理",
        "value": "2"
      }],
      showDetial: false,
      editForm: {
        pname: "",
        // 添加顶级代理 pname传空
        type: "1",
        username: "",
        password: "",
        repeatPassword: "",
        comment: "",
        earn_start: "",
        valid_user: "",
        valid_bet_start: "",
        bkge_percent: "",
        bkge_percent1: "",
        bkge_percent2: "",
        bkge_percent3: "",
        rebet_percent: "",
        rebet_percent1: "",
        rebet_percent2: "",
        rebet_percent3: ""
      },
      editRules: {
        type: [{
          required: true
        }],
        username: [{
          required: true,
          message: LANG['请输入代理用户名'] || '请输入代理用户名',
          trigger: 'blur'
        }, {
          validator: validUserName,
          trigger: 'blur,change'
        }],
        password: [{
          required: true,
          message: LANG['请输入密码'] || '请输入密码',
          trigger: 'blur'
        }, {
          "min": 6,
          message: LANG['密码最少6位'] || '密码最少6位'
        }],
        repeatPassword: [{
          required: true,
          message: LANG['请输入确认密码'] || '请输入确认密码',
          trigger: "blur"
        }, {
          validator: this.validatePass,
          trigger: 'blur,change'
        }],
        earn_start: [{
          required: true,
          message: LANG['请输入盈利金额'] || '请输入盈利金额',
          trigger: 'blur'
        }, {
          validator: checkNumber,
          trigger: 'blur'
        }],
        valid_bet_start: [{
          required: true,
          message: LANG['请输入投注额'] || '请输入投注额',
          trigger: "blur"
        }, {
          validator: checkNumber,
          trigger: 'blur'
        }],
        bkge_percent: [{
          required: true,
          message: LANG['请输入百分比'] || '请输入百分比',
          trigger: "blur"
        }, {
          validator: checkPercent,
          trigger: 'blur'
        }],
        valid_user: [{
          required: true,
          message: LANG['请输入会员数'] || '请输入会员数',
          trigger: "blur"
        }, {
          validator: checkIntNumber,
          trigger: 'blur'
        }],
        bkge_percent1: [{
          required: true,
          message: LANG['请输入百分比'] || '请输入百分比',
          trigger: "blur"
        }, {
          validator: checkPercent,
          trigger: 'blur'
        }],
        bkge_percent2: [{
          required: true,
          message: LANG['请输入百分比'] || '请输入百分比',
          trigger: "blur"
        }, {
          validator: checkPercent,
          trigger: 'blur'
        }],
        bkge_percent3: [{
          required: true,
          message: LANG['请输入百分比'] || '请输入百分比',
          trigger: "blur"
        }, {
          validator: checkPercent,
          trigger: 'blur'
        }],
        rebet_percent: [{
          required: true,
          message: LANG['请输入百分比'] || '请输入百分比',
          trigger: "blur"
        }, {
          validator: checkPercent,
          trigger: 'blur'
        }],
        rebet_percent1: [{
          required: true,
          message: LANG['请输入百分比'] || '请输入百分比',
          trigger: "blur"
        }, {
          validator: checkPercent,
          trigger: 'blur'
        }],
        rebet_percent2: [{
          required: true,
          message: LANG['请输入百分比'] || '请输入百分比',
          trigger: "blur"
        }, {
          validator: checkPercent,
          trigger: 'blur'
        }],
        rebet_percent3: [{
          required: true,
          message: LANG['请输入百分比'] || '请输入百分比',
          trigger: "blur"
        }, {
          validator: checkPercent,
          trigger: 'blur'
        }],
        comment: [{
          min: 1,
          max: 128
        }]
      },
      showpass: false,
      showDetail: false,
      baseUrl: "",
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: "",
        obj: null,
        flag: null
      },
      formType: "",
      urlQuery: null,
      agentHigher: "",
      localQuery: {}
    };
  },

  components: {
    tablegrid: tableGrid["a" /* default */],
    //            agentAccountDetail: agentAccountDetail,
    formEdit: formEdit["a" /* default */],
    confirm: components_confirm["a" /* default */]
  },
  methods: {
    //页面初始化
    init() {
      this.isCreated = true;
      this.urlQuery = this.$route.query;
      this.baseUrl = URL.api + ROUTES.GET.user.agent.$; // 检测this.$route.query各个属性是否有值是否有值，正常路由进来

      if (!this.$route.query.agent_name && !this.$route.query.name) {
        this.tableUrl = URL.api + ROUTES.GET.user.agent.$;
      } else if (this.$route.query.name || this.$route.query.agent_name) {
        let username = this.$route.query.name || this.$route.query.agent_name;
        this.tableUrl = URL.api + ROUTES.GET.user.agent.$ + "?name=" + name;
      }

      this.columnsUrl = "/static/json/accoutManage/agentAccount/columns.json";
    },

    //重复密码验证
    validatePass(rule, value, callback) {
      if (value !== this.editForm.password) {
        callback(new Error(LANG['两次输入密码不一致!'] || '两次输入密码不一致!'));
      } else {
        callback();
      }
    },

    //新增代理
    addNew() {
      this.editTitel = LANG['新增代理'] || '新增代理';
      this.editVisible = true;
    },

    //重置新增表单
    resetForms() {
      this.$refs.editForm.resetFields();
      this.editVisible = false;
      this.tableUrl = this.baseUrl;
    },

    //保存新增、修改
    saveForm() {
      this.updated = false;

      let _this = this;

      this.$refs.editForm.validate(valid => {
        if (valid) {
          let query = {
            pid: 0
          };
          let bkge_percent = this.editForm.bkge_percent + "|" + this.editForm.bkge_percent1 + "|" + this.editForm.bkge_percent2 + "|" + this.editForm.bkge_percent3;
          let rebet_percent = this.editForm.rebet_percent + "|" + this.editForm.rebet_percent1 + "|" + this.editForm.rebet_percent2 + "|" + this.editForm.rebet_percent3;

          if (this.editForm.type == "2") {
            ({
              type: query.type,
              username: query.username,
              password: query.password,
              comment: query.comment,
              pname: query.pname,
              earn_start: query.earn_start,
              valid_user: query.valid_user,
              valid_bet_start: query.valid_bet_start
            } = this.editForm);
            query['bkge_percent'] = bkge_percent === "|||" ? "" : bkge_percent;
            query['rebet_percent'] = rebet_percent === "|||" ? "" : rebet_percent;
            query['earn_start'] = parseInt(query['earn_start'], 10) * 100;
            query['valid_bet_start'] = parseInt(query['valid_bet_start'], 10) * 100;
            query.rebate = {
              key: ''
            };
            this.$.autoAjax('put', URL.api + ROUTES.PUT.user.agent.$, query, {
              ok: res => {
                console.log(res);

                if (res.state == 0 && res.data) {
                  _this.$message.success(LANG[res.msg] || res.msg);
                } else {
                  _this.$message.error(LANG[res.msg] || res.msg);
                }

                _this.updated = true;
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            });
          }

          if (this.editForm.type == "1") {
            ({
              type: query.type,
              pname: query.pname,
              username: query.username,
              password: query.password,
              comment: query.comment
            } = this.editForm);
            query.rebate = {
              key: ''
            };
            this.$.autoAjax('put', URL.api + ROUTES.PUT.user.agent.$, query, {
              ok: res => {
                if (res.state == 0 && res.data) {
                  _this.$message.success(LANG[res.msg] || res.msg);
                } else {
                  _this.$message.error(LANG[res.msg] || res.msg);
                }

                _this.updated = true;
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            });
          }

          this.resetForms();
        } else {
          return false;
        }
      });
    },

    //显示密码开关
    showPass() {
      this.showpass = !this.showpass;
    },

    //批量操作事件
    doOperation(item) {
      this.updated = false;

      switch (item.fn) {
        case "doEnable":
          this.doEnable(item.rows, true);
          break;

        case "doDisable":
          this.doDisable(item.rows, true);
          break;

        case "doSendMsg":
          this.doSendMsg(item.rows);
          break;
      }
    },

    //批量启用
    doEnable(rows, flag) {
      let _this = this;

      let dataId = [];
      let query = {};

      if (flag) {
        for (let index in rows) {
          if (rows[index].id) {
            dataId.push(rows[index].id);
          }
        }
      } else {
        dataId.push(parseInt(rows.id));
      }

      query.ids = dataId;
      query.status = 1;
      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.agent.$, query, {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.$message.success(LANG['启用成功'] || '启用成功');

            _this.updated = true;
          } else {
            _this.$message.error(LANG['启用失败'] || '启用失败');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      });
    },

    //批量停用
    doDisable(rows, flag) {
      let _this = this;

      let dataId = [];
      let query = {};

      if (flag) {
        for (let index in rows) {
          if (rows[index].id) {
            dataId.push(rows[index].id);
          }
        }
      } else {
        dataId.push(parseInt(rows.id));
      }

      query.ids = dataId;
      query.status = 2;
      this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.agent.$, query, {
        ok: res => {
          if (res.state == 0 && res.data) {
            _this.updated = true;

            _this.$message.success(LANG['停用成功'] || '停用成功');
          } else {
            _this.$message.error(LANG['停用失败'] || '停用失败');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }); // this.$http.patch(URL.api + ROUTES.PATCH.user.agent.$, JSON.stringify(query), URLCONFIG).then((res) => {
      //     if (res.data.state == 0 && res.data.data) {
      //         _this.updated = true;
      //         _this.$message.success(LANG['停用成功'] || '停用成功');
      //     } else {
      //         _this.$message.error(LANG['停用失败'] || '停用失败');
      //     }
      //
      // })
    },

    //批量表格按钮事件
    doHandle(item) {
      this.updated = false;

      switch (item.fn) {
        case "doDetial":
          this.doDetial(item.row);
          break;

        case "openMember":
          this.openMember(item.row);
          break;

        case "openAgentInformation":
          this.openAgentInformation(item.row);
          break;

        case "doEnable":
          this.doEnable(item.row, false);
          break;

        case "doDisable":
          this.doDisable(item.row, false);
          break;
      }
    },

    //批量启用
    doEnable(rows, flag) {
      this.confirmConfig.state = true;

      if (flag) {
        this.confirmConfig.msg = this.LANG['确定批量启用吗'] || '确定批量启用吗';
      } else {
        this.confirmConfig.msg = this.LANG['确定启用吗'] || '确定启用吗';
      }

      this.confirmConfig.fn = "enable";
      this.confirmConfig.obj = rows;
      this.confirmConfig.flag = flag;
    },

    //批量停用
    doDisable(rows, flag) {
      this.confirmConfig.state = true;
      flag ? this.confirmConfig.msg = this.LANG['确定批量停用吗'] || '确定批量停用吗' : this.confirmConfig.msg = this.LANG['确定停用吗'] || '确定停用吗';
      this.confirmConfig.fn = "disable";
      this.confirmConfig.obj = rows;
      this.confirmConfig.flag = flag;
    },

    doConfirm(obj) {
      this.fullscreenLoading = true;

      let _this = this;

      let dataId = [];
      let query = {};

      switch (obj.fn) {
        case "enable":
          if (obj.flag) {
            for (let index in obj.obj) {
              if (obj.obj[index].id) {
                dataId.push(obj.obj[index].id);
              }
            }
          } else {
            dataId.push(parseInt(obj.obj.id));
          }

          query.ids = dataId;
          query.status = 1;
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.agent.$, query, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.$message.success(LANG['启用成功'] || '启用成功');

                _this.updated = true;
              } else {
                _this.$message.error(LANG['启用失败'] || '启用失败');
              }

              _this.fullscreenLoading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          break;

        case "disable":
          if (obj.flag) {
            for (let index in obj.obj) {
              if (obj.obj[index].id) {
                dataId.push(obj.obj[index].id);
              }
            }
          } else {
            dataId.push(parseInt(obj.obj.id));
          }

          query.ids = dataId;
          query.status = 3;
          this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.agent.$, query, {
            ok: res => {
              if (res.state == 0 && res.data) {
                _this.updated = true;

                _this.$message.success(LANG['停用成功'] || '停用成功');
              } else {
                _this.$message.error(LANG['停用失败'] || '停用失败');
              }

              _this.fullscreenLoading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          break;
      }
    },

    //查看详情
    doDetial(row) {
      this.$router.push({
        path: '/agentLink',
        query: {
          name: row.name
        }
      }); //                this.agentType = parseInt(row.type);
      //                this.isCreated = false;
      //                this.isDetail = true;
      //                if (row.id) {
      //                    this.rowId = parseInt(row.id, 10);
      //                }
    },

    //查询
    doQuery(obj) {
      let temp = this.localQuery = {};

      for (let k in obj.item) {
        if (k === 'similar') {
          temp[k] = obj.item[k] ? 1 : 0;
        } else {
          temp[k] = obj.item[k];
        }
      }

      this.tableUrl = this.baseUrl + this.addSearch(temp);
    },

    checkSeartch() {
      let searchform = this.searchform;

      for (let i in searchform) {
        if (searchform[i] != null && searchform[i] != "" && i != "Sdate") {
          return true;
        }

        if (searchform[i].dateEnd != "" && searchform[i].dateStart != "" && i == "Sdate") {
          return true;
        }
      }

      return false;
    },

    //重置查询
    doReset() {
      let searchform = this.searchform;

      for (let i in searchform) {
        if (i != "Sdate") {
          searchform[i] = "";
        } else {
          searchform[i] = {
            dateEnd: "",
            dateStart: ""
          };
        }
      }
    },

    //返回页面
    retrunPage() {
      if (!this.$route.query.id && !this.$route.query.type) {
        let updateKeys = '';

        for (let i in this.localQuery) {
          if (this.localQuery[i]) {
            updateKeys = updateKeys + i + ',' + this.localQuery[i] + ',';
          }
        }

        setTimeout(() => {
          this.agentHigher = updateKeys;
        }, 500);
        this.tableUrl = this.baseUrl + this.addSearch(this.localQuery);
        this.isCreated = true;
        this.isDetail = false;
      } else {
        this.$router.go(-1);
      }
    },

    //数据导出
    outputExcel() {},

    //选择代理类型  显示详情
    changeDetail(v) {
      if (parseInt(v) === 2) {
        this.showDetail = true;
      } else {
        this.showDetail = false;
      }
    },

    //重置查询
    resetForm() {
      this.localQuery = {};
      this.tableUrl = this.baseUrl;
      this.localQuery = {};
    },

    openAgentInformation(obj) {
      //查询下级代理
      if (Number(obj.inferisors_num) > 0) {
        this.doQuery({
          item: {
            agent_higher: obj.name
          }
        });
        this.agentHigher = "agent_higher," + obj.name;
      } else {
        this.$message.error(LANG['无下级代理'] || '无下级代理');
      }
    },

    openMember(obj) {
      //查询会员
      if (Number(obj.play_num) > 0) {
        this.$router.push({
          path: 'memberManagement',
          query: {
            agent: obj.name
          }
        });
      } else {
        this.$message.error(LANG['无下级会员'] || '无下级会员');
      }
    }

  },
  computed: {},

  mounted() {},

  created() {
    this.init();
  },

  activated() {
    this.isCreated = false;
    this.searchConfig[1]['value'] = '';
    this.formType = 'update' + (Math.random() * 9 + 1);
    this.baseUrl = URL.api + ROUTES.GET.user.agent.$;
    this.updated = false;

    if (this.$route.query.agent_name) {
      this.tableUrl = URL.api + ROUTES.GET.user.agent.$ + "?name=" + this.$route.query.agent_name;
      this.searchConfig[1]['value'] = this.$route.query.agent_name;
    } else if (this.$route.query.name) {
      setTimeout(() => {
        this.tableUrl = URL.api + ROUTES.GET.user.agent.$ + "?name=" + this.$route.query.name;
        this.updated = true;
      }, 500);
      this.searchConfig[1]['value'] = this.$route.query.name;
    } else if (this.$route.query.id) {
      this.doDetial({
        id: this.$route.query.id,
        type: this.$route.query.type
      });
    } else {
      this.tableUrl = URL.api + ROUTES.GET.user.agent.$;
    }
  },

  deactivated() {
    this.$route.query.name = null;
    this.$route.query.id = null;
    this.$route.query.type = null;
    this.searchConfig[1]['value'] = "";
    this.$route.query.agent_name = null;
    this.isDetail = false;
    this.isCreated = false;
  },

  watch: {
    '$route': function () {
      if (this.$route.query.agentHigher) {
        this.tableUrl = URL.api + ROUTES.GET.user.agent.$ + "?agent_higher=" + this.$route.query.agentHigher;
        this.isDetail = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-283d758e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/userManagement/agentAccount/agentAccount.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.fullscreenLoading),expression:"fullscreenLoading"}],staticClass:"page clearfix",attrs:{"id":"agentAccount"}},[(!_vm.isDetail)?_c('div',[_c('div',{staticClass:"search mb20"},[_c('formEdit',{attrs:{"formVisible":_vm.formVisible,"formConfig":_vm.searchConfig,"type":_vm.type,"labelWidth":_vm.labelWidth,"isEdit":_vm.isEdit,"addText":_vm.LANG['新增代理'] || '新增代理',"formType":_vm.formType,"initDate":true,"updateKeys":_vm.agentHigher},on:{"do-query":_vm.doQuery,"reset-form":_vm.resetForm,"add-new":_vm.addNew}})],1),_vm._v(" "),_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"tableCheck":true,"isCreated":_vm.isCreated,"tabOperation":_vm.tabOperation,"updated":_vm.updated},on:{"do-operation":_vm.doOperation,"do-handle":_vm.doHandle}})],1)],1):_vm._e(),_vm._v(" "),_c('el-col',[_c('el-dialog',{attrs:{"title":_vm.editTitel,"size":"tiny"},model:{value:(_vm.editVisible),callback:function ($$v) {_vm.editVisible=$$v},expression:"editVisible"}},[_c('el-form',{ref:"editForm",attrs:{"model":_vm.editForm,"rules":_vm.editRules,"label-width":"150px"}},[_c('el-form-item',{staticClass:"mt10",attrs:{"label":_vm.LANG['代理类型'] || '代理类型',"prop":"type"}},[_c('el-select',{attrs:{"placeholder":"必须选择代理类型"},on:{"change":_vm.changeDetail},model:{value:(_vm.editForm.type),callback:function ($$v) {_vm.$set(_vm.editForm, "type", $$v)},expression:"editForm.type"}},_vm._l((_vm.typeList),function(item,index){return _c('el-option',{key:index,attrs:{"label":item.label,"value":item.value}})}),1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['代理用户名'] || '代理用户名',"prop":"username"}},[_c('el-input',{model:{value:(_vm.editForm.username),callback:function ($$v) {_vm.$set(_vm.editForm, "username", $$v)},expression:"editForm.username"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['密码'] || '密码',"prop":"password"}},[(!_vm.showpass)?_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.editForm.password),callback:function ($$v) {_vm.$set(_vm.editForm, "password", $$v)},expression:"editForm.password"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showPass},slot:"append"},[_c('i',{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])],1):_vm._e(),_vm._v(" "),(_vm.showpass)?_c('el-input',{attrs:{"type":"text"},model:{value:(_vm.editForm.password),callback:function ($$v) {_vm.$set(_vm.editForm, "password", $$v)},expression:"editForm.password"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showPass},slot:"append"},[_c('i',{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"}})])],1):_vm._e()],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['确认密码'] || '确认密码',"prop":"repeatPassword"}},[(!_vm.showpass)?_c('el-input',{attrs:{"type":"password"},model:{value:(_vm.editForm.repeatPassword),callback:function ($$v) {_vm.$set(_vm.editForm, "repeatPassword", $$v)},expression:"editForm.repeatPassword"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showPass},slot:"append"},[_c('i',{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])],1):_vm._e(),_vm._v(" "),(_vm.showpass)?_c('el-input',{attrs:{"type":"text"},model:{value:(_vm.editForm.repeatPassword),callback:function ($$v) {_vm.$set(_vm.editForm, "repeatPassword", $$v)},expression:"editForm.repeatPassword"}},[_c('el-button',{attrs:{"slot":"append"},on:{"click":_vm.showPass},slot:"append"},[_c('i',{staticClass:"fa fa-eye-slash",attrs:{"aria-hidden":"true"}})])],1):_vm._e()],1),_vm._v(" "),(_vm.showDetail)?_c('el-form-item',{attrs:{"label":_vm.LANG['公司盈利金额'] || '公司盈利金额',"prop":"earn_start"}},[_c('el-col',{attrs:{"span":11}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.editForm.earn_start),callback:function ($$v) {_vm.$set(_vm.editForm, "earn_start", $$v)},expression:"editForm.earn_start"}})],1)],1):_vm._e(),_vm._v(" "),(_vm.showDetail)?_c('el-form-item',{attrs:{"label":_vm.LANG['有效会员数'] || '有效会员数',"prop":"valid_user"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.editForm.valid_user),callback:function ($$v) {_vm.$set(_vm.editForm, "valid_user", $$v)},expression:"editForm.valid_user"}})],1):_vm._e(),_vm._v(" "),(_vm.showDetail)?_c('el-form-item',{attrs:{"label":_vm.LANG['体育退佣百分比'] || '体育退佣百分比',"prop":"bkge_percent"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.editForm.bkge_percent),callback:function ($$v) {_vm.$set(_vm.editForm, "bkge_percent", $$v)},expression:"editForm.bkge_percent"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1):_vm._e(),_vm._v(" "),(_vm.showDetail)?_c('el-form-item',{attrs:{"label":_vm.LANG['电子退佣百分比'] || '电子退佣百分比',"prop":"bkge_percent1"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.editForm.bkge_percent1),callback:function ($$v) {_vm.$set(_vm.editForm, "bkge_percent1", $$v)},expression:"editForm.bkge_percent1"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1):_vm._e(),_vm._v(" "),(_vm.showDetail)?_c('el-form-item',{attrs:{"label":_vm.LANG['彩票退佣百分比'] || '彩票退佣百分比',"prop":"bkge_percent2"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.editForm.bkge_percent2),callback:function ($$v) {_vm.$set(_vm.editForm, "bkge_percent2", $$v)},expression:"editForm.bkge_percent2"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1):_vm._e(),_vm._v(" "),(_vm.showDetail)?_c('el-form-item',{attrs:{"label":_vm.LANG['视讯退佣百分比'] || '视讯退佣百分比',"prop":"bkge_percent3"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.editForm.bkge_percent3),callback:function ($$v) {_vm.$set(_vm.editForm, "bkge_percent3", $$v)},expression:"editForm.bkge_percent3"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1):_vm._e(),_vm._v(" "),(_vm.showDetail)?_c('el-form-item',{attrs:{"label":_vm.LANG['有效投注金额'] || '有效投注金额',"prop":"valid_bet_start"}},[_c('el-col',{attrs:{"span":11}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.editForm.valid_bet_start),callback:function ($$v) {_vm.$set(_vm.editForm, "valid_bet_start", $$v)},expression:"editForm.valid_bet_start"}})],1)],1):_vm._e(),_vm._v(" "),(_vm.showDetail)?_c('el-form-item',{attrs:{"label":_vm.LANG['体育退水百分比'] || '体育退水百分比',"prop":"rebet_percent"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.editForm.rebet_percent),callback:function ($$v) {_vm.$set(_vm.editForm, "rebet_percent", $$v)},expression:"editForm.rebet_percent"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1):_vm._e(),_vm._v(" "),(_vm.showDetail)?_c('el-form-item',{attrs:{"label":_vm.LANG['电子退水百分比'] || '电子退水百分比',"prop":"rebet_percent1"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.editForm.rebet_percent1),callback:function ($$v) {_vm.$set(_vm.editForm, "rebet_percent1", $$v)},expression:"editForm.rebet_percent1"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1):_vm._e(),_vm._v(" "),(_vm.showDetail)?_c('el-form-item',{attrs:{"label":_vm.LANG['彩票退水百分比'] || '彩票退水百分比',"prop":"rebet_percent2"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.editForm.rebet_percent2),callback:function ($$v) {_vm.$set(_vm.editForm, "rebet_percent2", $$v)},expression:"editForm.rebet_percent2"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1):_vm._e(),_vm._v(" "),(_vm.showDetail)?_c('el-form-item',{attrs:{"label":_vm.LANG['视讯退水百分比'] || '视讯退水百分比',"prop":"rebet_percent3"}},[_c('el-input',{attrs:{"type":"number"},model:{value:(_vm.editForm.rebet_percent3),callback:function ($$v) {_vm.$set(_vm.editForm, "rebet_percent3", $$v)},expression:"editForm.rebet_percent3"}},[_c('template',{slot:"append"},[_vm._v("%")])],2)],1):_vm._e(),_vm._v(" "),_c('el-form-item',{attrs:{"label":_vm.LANG['备注'] || '备注',"prop":"comment"}},[_c('el-input',{attrs:{"type":"textarea","row":5},model:{value:(_vm.editForm.comment),callback:function ($$v) {_vm.$set(_vm.editForm, "comment", $$v)},expression:"editForm.comment"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{on:{"click":_vm.resetForms}},[_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveForm}},[_vm._v(_vm._s(_vm.LANG['新增'] || '新增'))])],1)],1)],1)],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/userManagement/agentAccount/agentAccount.vue
function injectStyle (context) {
  __webpack_require__(491)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-283d758e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  agentAccount,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var agentAccount_agentAccount = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 491:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);