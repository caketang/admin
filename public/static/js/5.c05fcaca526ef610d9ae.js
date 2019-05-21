(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/columnSet.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var columnSet = ({
  data() {
    return {
      //配置选中数据
      columnsModel: [],
      //显示状态
      setState: false
    };
  },

  props: {
    //数据列配置
    columns: Array,
    columnConfig: Array
  },
  methods: {
    changeColumnConfig() {
      this.$emit("do_change-col", {
        "event": event,
        "item": this.columnConfig
      });
    },

    saveSet() {
      this.setState = false;
    },

    changeSet() {
      this.setState = true;
    }

  },
  mounted: function () {
    var _this = this;

    let columns = this.columns;

    for (let i in columns) {
      this.columnsModel.push({
        "id": i,
        "label": columns[i],
        "prop": columns[i]
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ef70e20a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/columnSet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.setState)?_c('i',{staticClass:"fa fa-cog",attrs:{"aria-hidden":"true"},on:{"click":_vm.changeSet}}):_vm._e(),_vm._v(" "),(_vm.setState)?_c('el-select',{staticStyle:{"width":"700px"},attrs:{"multiple":"","placeholder":_vm._('表格列配置')},on:{"change":_vm.changeColumnConfig},model:{value:(_vm.columnConfig),callback:function ($$v) {_vm.columnConfig=$$v},expression:"columnConfig"}},_vm._l((_vm.columnsModel),function(item){return _c('el-option',{key:item.id,attrs:{"label":item.label,"value":item.prop}})}),1):_vm._e(),_vm._v(" "),(_vm.setState)?_c('el-button',{attrs:{"type":"success"},domProps:{"textContent":_vm._s(_vm._('保存配置'))},on:{"click":_vm.saveSet}}):_vm._e()],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/columnSet.vue
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
  columnSet,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_columnSet = (Component.exports);


/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/components/columnSet.vue + 2 modules
var columnSet = __webpack_require__(220);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/table.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//列配置


/* harmony default export */ var table = ({
  data() {
    return {
      LANG,
      //列配置
      columnConfig: [],
      //复制列参数
      columnList: [],
      bottomColumnList: [],
      //表格列表数据
      tableDataList: [],
      //总计数据
      allTableDataList: {},
      gridData: [],
      // 合计相关
      subTotalBet: {},
      totalBetArray: [],
      totalBet: {},
      //分页相关
      //总页数
      total: 0,
      //一页多少条
      pageSize: 1000,
      //共多少页
      pageCount: 1,
      // 当前页
      currentPage: 1,
      otherData: null,
      //求和数据
      sumArr: [],
      baseUrl: "",
      sumNumber: 0,
      //全选CHECKBOX
      allChecked: false,
      checkList: [],
      //当前选中数据
      rowsList: {},
      //当前选中总数
      checkSum: 0,
      loading: false,
      //横向滚动条
      tableScroll: false,
      colorIndex: null,
      checkDisabled: false,
      //  打码量操作
      modeData: {
        name: '',
        withdraw_per: ''
      },
      sLoading: false,
      rules: {
        name: [{
          required: true,
          message: '请输入事件名称',
          trigger: 'blur'
        }],
        withdraw_per: [{
          required: true,
          message: '请输入打码量',
          trigger: 'blur'
        }]
      },
      unchecked: {},
      attributes: {
        subTotal: 0,
        total: 0
      },
      timeXJ: 0,
      timeTZ: 0,
      // 冲销和存入加载状态
      loadingOne: false,
      loadingTwo: false
    };
  },

  props: {
    //表格数据
    tableData: Object,
    //数据请求地址
    tableUrl: String,
    //数据列配置
    columns: Array,
    columnsUrl: String,
    //是否拼接columns
    assembleColumns: Object,
    //是否显示选择框
    tableCheck: {
      type: Boolean,
      default: false
    },
    //是否显增索引
    tableIndex: {
      type: Boolean,
      default: false
    },
    //是否全选
    allCheck: {
      type: Boolean,
      default: false
    },
    //是否显示列内边框
    tableBorder: {
      type: Boolean,
      default: true
    },
    //行内双击事件
    tableRowDbclick: {
      type: Boolean,
      default: true
    },
    //是否显示分页
    pageSet: {
      type: Boolean,
      default: true
    },
    //批量操作按钮
    //            tabOperation: Array,
    //            checkCondition:Object,
    //表格汇总相关
    sumGame: {
      type: Boolean,
      default: false
    },
    colspan: {
      type: Number,
      default: 1
    },
    sumKey: "",
    updateDate: Object,
    updated: {
      type: Boolean,
      default: false
    },
    //表单类型，刷新数据
    formType: String,
    //传入查询对象
    query: Object,
    //操作类型，用于查询数据刷新
    opts: String,
    //是否给页面发送数据 默认不发送
    getData: {
      type: Boolean,
      default: false
    },
    //保存数据
    saveData: {
      type: Boolean,
      default: false
    },
    //数据修改后回调
    updateMessage: {
      type: String,
      default: ""
    },
    // 表格宽度自适应
    autoWidth: {
      type: Boolean,
      default: false
    },
    lotteryType: {
      type: Boolean,
      default: false
    },
    // 表格宽度
    fullWidth: {
      type: Boolean,
      default: true
    },
    // 导出按钮
    showExport: {
      type: Boolean,
      default: false
    },
    showAdd: {
      type: Boolean,
      default: false
    },
    showDetail: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  methods: {
    //初始化数据
    Datainit() {
      //表格初始化
      this.loading = true;

      let _this = this;

      this.allChecked = false;
      this.checkList = [];
      this.rowsList = {};
      this.checkSum = 0;
      this.unchecked = {};
      this.modeData.withdraw_per = '';
      this.modeData.name = ''; //总条数

      let total = this.total; //每次页条数

      let pageSize = this.pageSize; //总页数

      let pageCount = this.pageCount; //当前页

      let currentPage = this.currentPage; // 其它数据

      let otherData = this.otherData = {};
      let colKey = this.sumKey;

      if (this.$refs.form) {
        this.$refs.form.resetFields();
      }

      this.attributes.subTotal = 0;
      this.attributes.total = 0;

      _this.tableDataList.splice(0, _this.tableDataList.length);

      _this.columnList.splice(0, _this.columnList.length);

      let columnList = _this.columnList || [];
      this.baseUrl = this.tableUrl;

      if (this.baseUrl != "" && this.baseUrl != undefined) {
        let query = {};

        if (this.query && this.query.toString().length > 0) {
          query = this.query;
        }

        if (this.pageSet) {
          let index = this.baseUrl.indexOf('?');

          if (index === -1) {
            this.baseUrl = this.baseUrl + "?page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 1000 : pageSize);
          } else {
            let n = this.baseUrl.indexOf('page=');
            currentPage = 1;

            if (n > 0) {
              this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + currentPage || false);
            } else {
              this.baseUrl = this.baseUrl + "&page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 1000 : pageSize);
            }

            let m = this.baseUrl.indexOf('page_size=');

            if (m > 0) {
              this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + (pageSize === 0 ? 1000 : pageSize));
            } else {
              this.baseUrl = this.baseUrl + "&page_size=10";
            }
          }
        }

        this.$.autoAjax('get', this.baseUrl, '', {
          ok: res => {
            _this.tableDataList = [];
            let tableDate = res && res.data ? res.data : [];

            if (_this.getData) {
              let model = res.data || {};

              for (let k in model) {
                otherData[k] = model[k];
              }
            }

            let list = res && res.data && res.data.list || []; // if (res.data.data.length === undefined) {
            //     if (res.data.data.list != undefined && res.data.data.list.length) {
            //         list = res.data.data.list || [];
            //     }
            // }

            _this.subTotalBet = {};
            _this.totalBet = {};

            if (res.attributes) {
              this.attributes.subTotal = res.attributes.size > res.attributes.total ? res.attributes.total : res.attributes.size;
              this.attributes.total = res.attributes.total || 0;

              if (res.attributes.subTotalValidBet) {
                let obj = res.attributes.subTotalValidBet;

                if (_this.totalBetArray.length === 0) {
                  for (let k in obj) {
                    _this.totalBetArray.push(k);
                  }
                }

                _this.subTotalBet = obj;
              }

              if (res.attributes.totalValidBet) {
                _this.totalBet = res.attributes.totalValidBet;
              }
              /*总计*/


              if (res.attributes && res.attributes.totalData) {
                _this.allTableDataList.totalData = res.attributes.totalData;
                _this.allTableDataList.totalMoney = res.attributes.totalMoney;
              }
              /*小计*/


              if (res.attributes && res.attributes.subTotalData) {
                _this.allTableDataList.subTotalData = res.attributes.subTotalData;
                _this.allTableDataList.subTotalMoney = res.attributes.subTotalMoney;
              }

              _this.allTableDataList.size = tableDate.length;
              _this.total = res && res.attributes && res.attributes.total || 1000;
              _this.pageSize = res && res.attributes && res.attributes.size || 1000;
              _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
              _this.currentPage = parseInt(res.attributes.number) ? parseInt(res.attributes.number) : 1;
            } else {
              _this.allTableDataList = {};
            }

            if (list.length && list.length > 0) {
              for (let i in list) {
                _this.tableDataList.push(list[i]);
              }

              _this.initCheckList(list);
            } else if (tableDate.length && tableDate.length > 0) {
              let sumNumber = _this.sumNumber;

              for (let j in tableDate) {
                _this.tableDataList.push(tableDate[j]);
              }

              this.initCheckList(tableDate);
            }

            if (_this.getData) {
              _this.$emit("get-table-data", {
                "event": event,
                "item": _this.tableDataList,
                "allData": _this.otherData
              });
            } //                        let checkCondition = this.checkCondition;
            //                        if(checkCondition){
            //                            let arrs = [];
            //                            for (let i in this.tableDataList) {
            //                                if(this.tableDataList[i][checkCondition.prop] == checkCondition.value){
            //                                    arrs.push(this.tableDataList[i]);
            //                                }
            //                            }
            //                            if(arrs.length === this.tableDataList.length){
            //                                this.checkDisabled = true;
            //                            }else{
            //                                this.checkDisabled = false;
            //                            }
            //                        }


            _this.loading = false; //                        if(this.allCheck){
            //                            this.allChecked = this.allCheck;
            //                            _this.allchecked();
            //                        }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      } else {
        this.loading = false; // 通过formData渲染表格

        if (!this.tableData) return;
        let query = {};

        if (this.query && this.query.toString().length > 0) {
          query = this.query;
        }

        let tableDate = this.tableData;
        let otherData = _this.otherData[0] = {};
        let list = this.tableData.list || [];

        if (list.length && list.length > 0) {
          //写相关其它数据
          for (let i in tableDate) {
            otherData[i] = tableDate[i];
          }

          _this.total = tableDate.total ? tableDate.total : 0;
          _this.pageSize = tableDate.page_size ? tableDate.page_size : 1000;
          _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
          _this.currentPage = tableDate.page ? tableDate.page : 1;

          for (let i in list) {
            _this.tableDataList.push(list[i]);
          }

          _this.initCheckList(list);
        }

        if (_this.getData) {
          _this.$emit("get-table-data", {
            "event": event,
            "item": _this.tableDataList,
            "otherData": _this.otherData
          });
        }
      }

      if (this.columnsUrl != "" && this.columnsUrl != undefined) {
        this.$.get(this.columnsUrl, res => {
          columnList.splice(0, columnList.length);
          let columns = res && res.columns ? res.columns : [];

          if (this.assembleColumns) {
            let index = this.assembleColumns.index;
            let origin = columns.slice(0, index);
            let end = columns.slice(index, columns.length);
            let columsObj = {
              orignCol: origin,
              endCol: end,
              connectCol: this.assembleColumns.data
            };
            columns = CONNECTCOLUMS(columsObj, 100);
            this.bottomColumnList = columns.slice(index, columns.length);
          }

          if (columns.length > 0) {
            for (let i in columns) {
              columnList.push(columns[i]);

              if (columns[i].disabled == true) {
                _this.columnConfig.push(columns[i].prop);
              }
            }
          }
        });
      }
    },

    //处理操作公共按钮事件
    doHandle(row, fn) {
      this.$emit("do-handle", {
        "event": event,
        "row": row,
        "fn": fn,
        "page": this.currentPage
      });
    },

    //写各状态初始
    initCheckList(arr) {
      let rows = this.rowsList = {};
      this.checkSum = 0;
      this.allChecked = true;
      let sum = 0;

      for (let i in arr) {
        if (this.unchecked[arr[i].user_id]) {
          this.$set(this.checkList, i, false);
        } else if (this.showDetail === false) {
          sum++;
          this.$set(this.checkList, i, true);
          this.checkSum++;
        } else {
          this.$set(this.checkList, i, false);
        }

        rows[i] = arr[i];
      }

      if (sum === arr.length) {
        this.allChecked = true;
      } else {
        this.allChecked = false;
      }
    },

    //选据择所有数据
    allchecked() {
      let allChecked = this.allChecked;
      let unchecked = this.unchecked;
      let model = this.tableDataList;
      let checks = this.checkList;
      let checkCondition = this.checkCondition;
      let rows = this.rowsList;
      let arrs = [];
      let bl = false;

      if (allChecked) {
        bl = true;

        if (checkCondition) {
          for (let i in this.tableDataList) {
            if (this.tableDataList[i][checkCondition.prop] !== checkCondition.value) {
              arrs.push(this.tableDataList[i]);

              if (unchecked[this.tableDataList[i].userid]) {
                delete unchecked[this.tableDataList[i].userid];
              }
            }

            rows[i] = this.tableDataList[i];
          }

          this.checkSum = arrs.length;
        } else {
          for (let i in this.tableDataList) {
            arrs.push(this.tableDataList[i]);

            if (unchecked[this.tableDataList[i].user_id]) {
              delete unchecked[this.tableDataList[i].user_id];
            }

            rows[i] = this.tableDataList[i];
          }

          this.checkSum = this.tableDataList.length;
        }
      } else {
        bl = false;
        this.checkSum = 0;
        arrs.splice(0, arrs.length); // rows = null;

        for (let i in this.tableDataList) {
          unchecked[this.tableDataList[i].user_id] = this.tableDataList[i].user_id;

          if (rows[i]) {
            delete rows[i];
          }
        }
      }

      if (checkCondition) {
        for (let k in model) {
          if (model[k][checkCondition.prop] !== checkCondition.value) {
            checks[k] = bl;
          }
        }
      } else {
        for (let k in model) {
          checks[k] = bl;
        }
      } //                this.$emit("do-operation", {
      //                    "event": event,
      //                    "rows": arrs,
      //                    "page": this.currentPage
      //                });

    },

    //选择当前数据
    thisChecked(num) {
      let allChecked = this.allChecked;
      let unchecked = this.unchecked;
      let model = this.tableDataList;
      let checks = this.checkList;
      let rows = this.rowsList;
      let arrs = [];

      if (checks[num]) {
        rows[num] = this.tableDataList[num];

        if (unchecked[rows[num].user_id]) {
          delete unchecked[this.tableDataList[num].user_id];
        }

        this.checkSum = this.checkSum + 1;
      } else {
        unchecked[rows[num].user_id] = rows[num].user_id;
        delete rows[num];
        this.checkSum = this.checkSum - 1;
      }

      if (this.checkSum === model.length) {
        this.allChecked = true;
      }

      if (this.checkSum === 0) {
        this.allChecked = false;
      }

      for (let k in rows) {
        arrs.push(rows[k]);
      } //                this.$emit("do-operation", {
      //                    "event": event,
      //                    "rows": arrs,
      //                    'dataList': unchecked,
      //                    "page": this.currentPage
      //                });

    },

    //切换每页条数
    doSizePage(v) {
      this.loading = true;

      let _this = this;

      let total = this.total;
      let pageSize = this.pageSize;
      let pageCount = this.pageCount;
      let otherData = {};
      let page = 0;
      page = Math.ceil(pageSize * pageCount / total) || 1;

      _this.tableDataList.splice(0, _this.tableDataList.length);

      let index = this.baseUrl.indexOf('?');

      if (index === -1) {
        this.baseUrl = this.baseUrl + "?page=1&page_size=" + v;
      } else {
        let n = this.baseUrl.indexOf('page=');

        if (n > 0) {
          this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=1");
        } else {
          this.baseUrl = this.baseUrl + "&page=1&page_size=" + v;
        }

        let m = this.baseUrl.indexOf('page_size=');

        if (m > 0) {
          this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + v);
        } else {
          this.baseUrl = this.baseUrl + "&page_size=" + 10;
        }
      }

      this.$.autoAjax('get', this.baseUrl, '', {
        ok: res => {
          _this.total = res.attributes.total || 1000;
          _this.pageSize = res.attributes.size || 1000;
          _this.pageCount = Math.ceil(this.total / this.pageSize);
          _this.currentPage = 1;
          let tableDate = res.tableDemoDate || res.data || res.data.list || res.data.data || res.data.deposit || [];

          if (tableDate.list) {
            for (let i in tableDate.list) {
              _this.tableDataList.push(tableDate.list[i]);
            }

            _this.initCheckList(tableDate.list);
          } else {
            for (let i in tableDate) {
              _this.tableDataList.push(tableDate[i]);
            }

            _this.initCheckList(tableDate);
          }

          if (_this.getData) {
            let model = res.data || {};

            for (let k in model) {
              otherData[k] = model[k];
            }
          }
          /*总计*/


          _this.allTableDataList = {}; //先清空数据

          if (res.attributes && res.attributes.totalData) {
            _this.allTableDataList.totalData = res.attributes.totalData;
            _this.allTableDataList.totalMoney = res.attributes.totalMoney;
          }
          /*小计*/


          if (res.attributes && res.attributes.subTotalData) {
            _this.allTableDataList.subTotalData = res.attributes.subTotalData;
            _this.allTableDataList.subTotalMoney = res.attributes.subTotalMoney;
          }

          _this.allTableDataList.size = tableDate.length;

          if (_this.getData) {
            _this.$emit("get-table-data", {
              "event": event,
              "item": _this.tableDataList,
              "allData": otherData
            });
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          _this.loading = false;

          _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
        }
      });
    },

    //切换页数
    doCurrentChange(v) {
      this.loading = true;
      let total = this.total;
      let pageSize = this.pageSize;
      let pageCount = this.pageCount;
      let otherData = {};
      this.currentPage = v;
      let page = 0;

      let _this = this;

      page = Math.ceil(pageSize * pageCount / total) || 1;

      _this.tableDataList.splice(0, _this.tableDataList.length);

      let index = this.baseUrl.indexOf('?');

      if (index === -1) {
        this.baseUrl = this.baseUrl + "?page=" + v + "&page_size=" + this.pageSize;
      } else {
        let n = this.baseUrl.indexOf('page=');

        if (n > 0) {
          this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + v);
        } else {
          this.baseUrl = this.baseUrl + "&page=" + v + "&page_size=" + this.pageSize;
        }

        let m = this.baseUrl.indexOf('page_size=');

        if (m > 0) {
          this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + this.pageSize);
        } else {
          this.baseUrl = this.baseUrl + "&page_size=" + 10;
        }
      }

      this.$.autoAjax('get', this.baseUrl, '', {
        ok: res => {
          _this.total = res.attributes.total || 1000;
          _this.pageSize = res.attributes.size || 1000;
          _this.pageCount = Math.ceil(this.total / this.pageSize);
          _this.currentPage = res.attributes.number || 1;
          let tableDate = res.tableDemoDate || res.data || res.data.list || res.data.data || res.data.deposit || [];

          if (tableDate.list) {
            for (let i in tableDate.list) {
              _this.tableDataList.push(tableDate.list[i]);
            }

            _this.initCheckList(tableDate.list);
          } else {
            for (let i in tableDate) {
              _this.tableDataList.push(tableDate[i]);
            }

            _this.initCheckList(tableDate);
          }

          if (_this.getData) {
            let model = res.data || {};

            for (let k in model) {
              otherData[k] = model[k];
            }
          }
          /*总计*/


          _this.allTableDataList = {}; //先清空数据

          if (res.attributes && res.attributes.totalData) {
            _this.allTableDataList.totalData = res.attributes.totalData;
            _this.allTableDataList.totalMoney = res.attributes.totalMoney;
          }
          /*小计*/


          if (res.attributes && res.attributes.subTotalData) {
            _this.allTableDataList.subTotalData = res.attributes.subTotalData;
            _this.allTableDataList.subTotalMoney = res.attributes.subTotalMoney;
          }

          _this.allTableDataList.size = tableDate.length;

          if (_this.getData) {
            _this.$emit("get-table-data", {
              "event": event,
              "item": _this.tableDataList,
              "allData": otherData
            });
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          _this.loading = false;

          _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
        }
      });
    },

    //批量冲销
    doSort(fn, index) {
      this.colorIndex = index;
      let data = this.tableDataList;
      let timeXJ = this.timeXJ;
      let timeTZ = this.timeTZ;

      switch (fn) {
        case "sortByXJ":
          if (timeXJ % 2 === 0) {
            data.sort(function (a, b) {
              return a.coupon - b.coupon;
            });
          } else {
            data.sort(function (a, b) {
              return b.coupon - a.coupon;
            });
          }

          this.timeXJ++;
          break;

        case "sortByTZ":
          if (timeTZ % 2 === 0) {
            data.sort(function (a, b) {
              return a.valid_bet - b.valid_bet;
            });
          } else {
            data.sort(function (a, b) {
              return b.valid_bet - a.valid_bet;
            });
          }

          this.timeTZ++;
          break;
      } //                this.$emit("do-sort",{
      //                    "event":event,
      //                    "fn":fn,
      //                    "data":this.tableDataList
      //                })

    },

    updateFormData() {
      if (this.tableData.list.length > 0) {
        this.Datainit();
      }
    },

    //处理操作公共按钮事件
    doHandle(row, fn) {
      this.$emit("do-handle", {
        "event": event,
        "row": row,
        "fn": fn,
        "page": this.currentPage
      });
    },

    //数据变化事件
    changes(index, row, keys) {
      if (index >= 0) {
        this.$emit("do-changes", {
          "row": row,
          "index": index,
          "key": keys
        });
      }
    },

    //保存表格数据
    dataSave() {
      this.$emit("data-save", {
        "dataList": this.tableDataList
      });
    },

    getTableWidth() {
      if (this.fullWidth) {
        let sum = 0;

        if (this.columnsUrl) {
          this.$.get(this.columnsUrl, res => {
            if (res.columns) {
              let list = res.columns;

              for (let k in list) {
                if (list[k].width) {
                  sum = sum + parseInt(list[k].width);
                }
              }

              sum = sum > 900 ? sum : 1100;

              if ($(window).width() > 1200) {
                $('.tablesOverall').find('table').css('min-width', sum + 'px');
                $('.tablesOverall').css('width', $(window).width() - 110).addClass('socr');
              }
            }
          });
        }
      }
    },

    // 导出数据
    exportData() {
      this.$emit("export-data");
    },

    // 保存优惠
    save() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loadingOne = true;
          let arr = [];

          for (let k in this.unchecked) {
            arr.push(k);
          }

          this.$emit("unchecked", {
            "dataList": arr,
            "modeData": this.modeData,
            "rows": this.rowsList
          });
        } else {
          //                        console.log('error submit!!');
          return false;
        }
      });
    }

  },
  watch: {
    'tableData.list': 'updateFormData',
    tableUrl: function (newQuestion) {
      this.Datainit();
    },

    tableDataList() {
      this.getTableWidth();
    },

    //根据是否更新，更新数据
    updated: function (newval) {
      if (newval) {
        this.Datainit();
      }
    },
    formType: function (newval) {
      if (newval == "add" || newval == "edit" || newval == "delete") {
        this.Datainit();
      }
    },
    opts: function (newval) {
      if (newval) {
        this.Datainit();
      }
    }
  },

  created() {
    //初始化列配置
    this.Datainit();
  },

  mounted() {
    this.$nextTick(() => {
      EVENT.$emit('table.loaded');
    }); //this.getTableWidth();
  },

  activated() {
    this.loadingOne = false;
    this.loadingTwo = false;
    this.pageSize = 1000;
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0513b3c6","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/table.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"tableSingle",attrs:{"id":"tableSingle"}},[(_vm.showExport)?_c('el-col',{staticClass:"tRight mb20"},[_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.exportData}},[_vm._v(_vm._s(_vm.LANG['导出'] || '导出')+" ")])],1):_vm._e(),_vm._v(" "),_c('el-col',{staticClass:"ft14 mb10"},[_c('div',{staticClass:"font14 mt10 fl w50"},[(_vm.showAdd || _vm.checkSum)?_c('span',{staticClass:"fl mr10",staticStyle:{"line-height":"36px"}},[_vm._v(_vm._s(_vm.LANG['本页您选择了'] || '本页您选择了')+"\n            "),(_vm.showAdd || _vm.checkSum)?_c('span',{staticClass:"selecttext"},[_vm._v(_vm._s(_vm.checkSum))]):_vm._e(),_vm._v(_vm._s(_vm.LANG['条数据'] || '条数据')+" ")]):_vm._e(),_vm._v(" "),(_vm.showAdd)?_c('el-form',{ref:"form",attrs:{"model":_vm.modeData,"rules":_vm.rules}},[_c('el-form-item',{staticClass:" fl"},[_c('span',[_vm._v("事件名称")]),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"inline-block"},attrs:{"prop":"name"}},[_c('el-input',{staticClass:"name",attrs:{"placeholder":"请输入事件名称","size":"small"},model:{value:(_vm.modeData.name),callback:function ($$v) {_vm.$set(_vm.modeData, "name", $$v)},expression:"modeData.name"}})],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"fl"},[_c('span',{staticClass:"ml20"},[_vm._v("打码量 ")]),_vm._v(" "),_c('el-form-item',{staticStyle:{"display":"inline-block"},attrs:{"prop":"withdraw_per"}},[_c('el-input',{staticClass:"intW",attrs:{"placeholder":"请输入打码量","size":"small"},model:{value:(_vm.modeData.withdraw_per),callback:function ($$v) {_vm.$set(_vm.modeData, "withdraw_per", $$v)},expression:"modeData.withdraw_per"}})],1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"fl"},[_c('el-button',{staticClass:"ml20",attrs:{"type":"primary","size":"small","loading":_vm.loadingOne},on:{"click":function($event){return _vm.save()}}},[_vm._v("\n                        "+_vm._s(_vm.LANG['存入'] || '存入')+"\n                    ")])],1)],1):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"tablesOverall",attrs:{"id":"tables"}},[_c('table',{staticClass:"el-table w100 el-table--border mt10",attrs:{"cellspacing":"0","cellpadding":"0","border":"1"}},[_c('tr',[(_vm.tableCheck && _vm.tableDataList.length)?_c('th',[_c('div',{staticClass:"cell"},[_c('el-checkbox',{attrs:{"disabled":_vm.checkDisabled},on:{"change":_vm.allchecked},model:{value:(_vm.allChecked),callback:function ($$v) {_vm.allChecked=$$v},expression:"allChecked"}})],1)]):_vm._e(),_vm._v(" "),(_vm.tableIndex && _vm.tableDataList.length)?_c('th',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['序号'] || '序号'))])]):_vm._e(),_vm._v(" "),_vm._l((_vm.columnList),function(col,index){return (col.disabled == true)?_c('th',{key:index,staticClass:"is-leaf"},[(!col.click)?_c('div',[_vm._v(_vm._s(col.label))]):_c('div',_vm._l((col.btnGroup),function(item,index){return _c('el-button',{key:index,class:_vm.colorIndex===index?'clickState':'',staticStyle:{"display":"block"},attrs:{"size":"small","type":"text"},on:{"click":function($event){return _vm.doSort(item.fn,index)}}},[_vm._v(_vm._s(item.label)+"\n                        ")])}),1)]):_vm._e()})],2),_vm._v(" "),_vm._l((_vm.tableDataList),function(item,k){return (_vm.tableDataList.length)?_c('tr',{key:k,class:{col2 : !parseInt((k+1)%2)}},[(_vm.tableCheck && _vm.tableDataList.length)?_c('td',{staticClass:"el-table_1_column_19",attrs:{"width":"55px"}},[_c('div',{staticClass:"cell"},[_c('el-checkbox',{on:{"change":function($event){return _vm.thisChecked(k)}},model:{value:(_vm.checkList[k]),callback:function ($$v) {_vm.$set(_vm.checkList, k, $$v)},expression:"checkList[k]"}})],1)]):_vm._e(),_vm._v(" "),(_vm.tableIndex && _vm.tableDataList.length)?_c('td',{staticClass:"el-table_ 1_column_19"},[_c('div',{staticClass:"cell tCent"},[_vm._v(_vm._s(parseInt(k) + 1))])]):_vm._e(),_vm._v(" "),_vm._l((_vm.columnList),function(col,index){return (col.disabled == true)?_c('td',{key:index,staticClass:"el-table_1_column_19",style:({'min-Width': (col.width +'px')})},[(col.type == 'twoLine')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[(col.filterByWord)?_c('div',_vm._l((item[col.filterByWord]),function(item1){return _c('div',[(col.filterCondition.split(',').length > 1)?_c('div',[(col[col.filterCondition.split(',')[0]] == item1[col.filterCondition.split(',')[0]] && col[col.filterCondition.split(',')[1]] == item1[col.filterCondition.split(',')[1]])?_c('div',[_c('span',{staticStyle:{"display":"block"}},[_vm._v(_vm._s(_vm._f("formatMoney")(item1.valid_bet)))]),_vm._v(" "),_c('span',{staticStyle:{"display":"block","color":"#20a0ff"}},[_vm._v(_vm._s(_vm._f("formatMoney")(item1.coupon)))])]):_vm._e()]):_c('div',[(col[col.filterCondition.split(',')[0]] == item1[col.filterCondition.split(',')[0]])?_c('span',[_c('span',{staticStyle:{"display":"block"}},[_vm._v(_vm._s(_vm._f("formatMoney")(item1.valid_bet)))]),_vm._v(" "),_c('span',{staticStyle:{"display":"block","color":"#20a0ff"}},[_vm._v(_vm._s(_vm._f("formatMoney")(item1.coupon)))])]):_vm._e()])])}),0):_c('div',[_c('span',{staticStyle:{"display":"block"}},[_vm._v(_vm._s(_vm._f("formatMoney")(item[col.prop.split(',')[0]])))]),_vm._v(" "),_c('span',{staticStyle:{"display":"block","color":"#20a0ff"}},[_vm._v(_vm._s(_vm._f("formatMoney")(item[col.prop.split(',')[1]])))])])]):_vm._e(),_vm._v(" "),(!col.type && !col.filters)?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('span',[_vm._v(_vm._s(item[col.prop]))])]):_vm._e()]):_vm._e()})],2):_vm._e()}),_vm._v(" "),(_vm.sumGame && _vm.allTableDataList.subTotalData && _vm.allTableDataList.subTotalData.length > 0 && _vm.allTableDataList.size )?_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]),_vm._v(" "),_c('td',{attrs:{"colspan":_vm.colspan}},[_c('div',{staticClass:"cell tCent",attrs:{"slot":"sub"},slot:"sub"},[_vm._v("人数 : "+_vm._s(_vm.attributes.subTotal))])]),_vm._v(" "),_c('td',[_c('span',{staticClass:"cell",staticStyle:{"display":"block"}},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allTableDataList.subTotalMoney.valid_bet)))]),_vm._v(" "),_c('span',{staticClass:"cell",staticStyle:{"display":"block","color":"#20a0ff"}},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allTableDataList.subTotalMoney.coupon)))])]),_vm._v(" "),_vm._l((_vm.bottomColumnList),function(col,index){return _c('td',{key:index},_vm._l((_vm.allTableDataList.subTotalData),function(item,index1){return (col.filterCondition && col[col.filterCondition.split(',')[0]] == item[col.filterCondition.split(',')[0]] && col[col.filterCondition.split(',')[1]] == item[col.filterCondition.split(',')[1]])?_c('div',{key:index1,staticClass:"cell"},[_c('span',{staticStyle:{"display":"block"}},[_vm._v(_vm._s(_vm._f("formatMoney")(item.valid_bet)))]),_vm._v(" "),_c('span',{staticStyle:{"display":"block","color":"#20a0ff"}},[_vm._v(_vm._s(_vm._f("formatMoney")(item.coupon)))])]):_vm._e()}),0)})],2):_vm._e(),_vm._v(" "),(_vm.sumGame && _vm.allTableDataList.totalMoney && _vm.allTableDataList.size)?_c('tr',[_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['总计'] || '总计'))])]),_vm._v(" "),_c('td',{attrs:{"colspan":_vm.colspan}},[_c('div',{staticClass:"cell tCent",attrs:{"slot":"total"},slot:"total"},[_vm._v("总人数 : "+_vm._s(_vm.attributes.total))])]),_vm._v(" "),_c('td',[_c('span',{staticClass:"cell",staticStyle:{"display":"block"}},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allTableDataList.totalMoney.valid_bet)))]),_vm._v(" "),_c('span',{staticClass:"cell",staticStyle:{"display":"block","color":"#20a0ff"}},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.allTableDataList.totalMoney.coupon)))])]),_vm._v(" "),_vm._l((_vm.bottomColumnList),function(col,index){return _c('td',{key:index},_vm._l((_vm.allTableDataList.totalData),function(item,index1){return (col.filterCondition && col[col.filterCondition.split(',')[0]] == item[col.filterCondition.split(',')[0]] && col[col.filterCondition.split(',')[1]] == item[col.filterCondition.split(',')[1]])?_c('div',{key:index1,staticClass:"cell"},[_c('span',{staticStyle:{"display":"block"}},[_vm._v(_vm._s(_vm._f("formatMoney")(item.valid_bet)))]),_vm._v(" "),_c('span',{staticStyle:{"display":"block","color":"#20a0ff"}},[_vm._v(_vm._s(_vm._f("formatMoney")(item.coupon)))])]):_vm._e()}),0)})],2):_vm._e()],2),_vm._v(" "),(_vm.tableDataList.length == 0)?_c('el-col',{staticStyle:{"line-height":"100px","text-align":"center","background-color":"#ffffff"}},[_c('div',{staticClass:"dell"},[_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据'))])]):_vm._e()],1),_vm._v(" "),(_vm.pageSet && _vm.tableDataList.length >0 )?_c('el-col',{staticClass:"toolbar mt20 pRight20",staticStyle:{"position":"relative","text-align":"right"},attrs:{"span":24}},[_c('el-pagination',{staticStyle:{"float":"right"},attrs:{"current-page":_vm.currentPage,"page-sizes":[10, 20, 50, 100, 1000],"page-size":_vm.pageSize,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.total},on:{"size-change":_vm.doSizePage,"current-change":_vm.doCurrentChange}})],1):_vm._e()],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/table.vue
function injectStyle (context) {
  __webpack_require__(450)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0513b3c6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  table,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_table = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 450:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);