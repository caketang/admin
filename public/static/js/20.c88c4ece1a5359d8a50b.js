(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/columnSet.vue + 2 modules
var columnSet = __webpack_require__(220);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/discountTable.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


vue_esm["default"].filter('formatJson', function (v) {
  //        let str = v  || "";
  let jsonval = "";

  if (v) {
    //            let model = JSON.parse(str) || {};
    let model = v;

    for (let k in model) {
      if (model[k]) {
        jsonval = jsonval + model[k].toString() + " ";
      }
    }
  }

  return jsonval;
});
vue_esm["default"].filter('formatConnectAdd', function (v, props) {
  let item = v || {};
  let str = props.toString() || "";
  let list = str.split(",");
  let sum = 0;

  for (let k in list) {
    let num = isNaN(parseInt(item[list[k]])) ? 0 : parseInt(item[list[k]]);
    sum = sum + num;
  }

  return (sum / 100).toFixed(2);
});
vue_esm["default"].filter('formatArray', function (v) {
  let arr = v || [];
  let jsonval = "";

  if (arr.length > 0) {
    for (let k in arr) {
      if (arr[k]) {
        jsonval = jsonval + arr[k].toString() + " ";
      }
    }
  }

  return jsonval;
});
vue_esm["default"].filter('formatConnectLottery', function (v, props, lotteryType) {
  let str = props || "";
  let list = str.split(",");
  let conval = "";

  if (list.length > 0 && lotteryType) {
    conval = (v[list[0]] || "") + "-" + (v[list[1]] || "");
  } else {
    conval = v[list[1]] || "";
  }

  return conval;
});
vue_esm["default"].filter('formatJsonArr', function (v, arr) {
  let str = v || "";
  let list = str.split(",");
  let jsonval = "";

  if (v && arr) {
    for (let k in arr) {
      for (let j in list) {
        if (arr[k]['val'] == list[j]) {
          jsonval = jsonval + arr[k]['lab'] + " ";
        }
      }
    }
  }

  return jsonval;
});
vue_esm["default"].filter('formatSubtract', function (v, props) {
  let item = v || {};
  let propList = props.split(",");
  let result = 0;

  if (propList.length > 0) {
    result = item[propList[0]];

    for (let k = 1; k <= propList.length; k++) {
      let num = isNaN(parseInt(item[propList[k]])) ? 0 : parseInt(item[propList[k]]);
      result = result - num;
    }
  }

  return (result / 100).toFixed(2);
});
vue_esm["default"].filter('formatConnect', function (v, arr, delimiter, types) {
  let item = v || {};
  let str = arr || "";
  let contVal = "";
  let list = str.split(",");

  for (let k in list) {
    let num = 0;

    if (list[k] && item[list[k]] != "null" && item[list[k]] != "" && item[list[k]] != null) {
      if (/divisionMoney/.test(types)) {
        ///divisionMoney/.test(type)
        num = (item[list[k]] / 100).toFixed(2);
      } else {
        num = item[list[k]];
      }

      if (delimiter && num) {
        contVal = contVal + num + " " + delimiter + " ";
      } else {
        contVal = contVal + num;
      }
    }
  }

  contVal = contVal.toString();

  if (delimiter) {
    return contVal.substring(0, contVal.length - 3);
  } else {
    return contVal;
  }
});
vue_esm["default"].filter('formatMoneyDelimiter', function (v, delimiter) {
  let st = v || "";
  let list = [];
  let str = "";

  if (delimiter) {
    list = st.split(delimiter);
  } else {
    list = st.split(",");
  }

  if (list.length) {
    for (let k in list) {
      if (delimiter) {
        str = str + FORMATMONEY(list[k]) + " " + delimiter + " ";
      } else {
        str = str + list[k];
      }
    }
  }

  return delimiter ? str.substring(0, str.length - 3) : str;
});
vue_esm["default"].filter('formatCheck', function (v) {
  if (parseInt(v) === 1) {
    return true;
  } else {
    return false;
  }
});
vue_esm["default"].filter('formatObject', function (v, prop) {
  let props = prop || "";
  let list = props.split(",");
  let str = "";

  if (list.length && list.length >= 2) {
    if (v[list[0]]) {
      for (let i = 1; i < list.length; i++) {
        str += v[list[0]][list[i]] + " ";
      }

      return str;
    }
  } else {
    return v[prop];
  }
});
vue_esm["default"].filter("formatDate", function (v, format) {
  if (!v || v === '0') {
    return "";
  }

  if (v.toString().length == 10 && !isNaN(v)) {
    v = parseInt(v) * 1000;
  }

  let t = new Date(v);

  let tf = function (i) {
    return (i < 10 ? '0' : '') + i;
  };

  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear());
        break;

      case 'MM':
        return tf(t.getMonth() + 1);
        break;

      case 'mm':
        return tf(t.getMinutes());
        break;

      case 'dd':
        return tf(t.getDate());
        break;

      case 'HH':
        return tf(t.getHours());
        break;

      case 'ss':
        return tf(t.getSeconds());
        break;
    }
  });
});
/* harmony default export */ var discountTable = ({
  //        computed:{
  //          scrollClass:function () {
  //              return {
  //                  'scrollX':this.tableScroll
  //              }
  //          },
  //          tableWidth:function () {
  //              let width = document.body.clientWidth;
  //              return this.tableScroll?'width:' + (width -270) + 'px':''
  //          }
  //        },
  data() {
    return {
      LANG,
      //列配置
      columnConfig: [],
      //复制列参数
      columnList: [],
      //表格列表数据
      tableDataList: [],
      gridData: [],
      // 合计相关
      subTotalBet: {
        bet_money: 0,
        bet_times: 0,
        lose_earn: 0,
        send_prize: 0,
        valid_bet: 0
      },
      totalBet: {
        bet_money: 0,
        bet_times: 0,
        lose_earn: 0,
        send_prize: 0,
        valid_bet: 0
      },
      //分页相关
      //总页数
      total: 0,
      //一页多少条
      pageSize: 10,
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
      // 超时时间
      options: [{
        "label": "不更新",
        "value": "0"
      }, {
        "label": "30秒",
        "value": "30"
      }, {
        "label": "60秒",
        "value": "60"
      }, {
        "label": "120秒",
        "value": "120"
      }, {
        "label": "180秒",
        "value": "180"
      }],
      times: 30
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
    tabOperation: Array,
    //表格汇总相关
    sumGame: {
      type: Boolean,
      default: false
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
    } //表格自适应滚动条
    //            scorAuto:{
    //            	type:Boolean,
    //	            default: false
    //            }

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
      this.checkSum = 0; //总条数

      let total = this.total; //每次页条数

      let pageSize = this.pageSize; //总页数

      let pageCount = this.pageCount; //当前页

      let currentPage = this.currentPage; // 其它数据

      let otherData = this.otherData = {};
      let colKey = this.sumKey;

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
            this.baseUrl = this.baseUrl + "?page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 10 : pageSize);
          } else {
            let n = this.baseUrl.indexOf('page=');

            if (/standard/g.test(this.baseUrl) || /fast/g.test(this.baseUrl)) {//                                currentPage = currentPage;
            } else {
              currentPage = 1;
            }

            if (n > 0) {
              this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + currentPage || false);
            } else {
              this.baseUrl = this.baseUrl + "&page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 10 : pageSize);
            }

            let m = this.baseUrl.indexOf('page_size=');

            if (m > 0) {
              this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + (pageSize === 0 ? 10 : pageSize));
            } else {
              this.baseUrl = this.baseUrl + "&page_size=10";
            }
          }
        }

        this.$.autoAjax('get', this.baseUrl, '', {
          ok: res => {
            _this.tableDataList = [];
            let tableDate = res && res.data && res.data ? res.data : [];

            if (_this.getData) {
              let model = res.data || {};

              for (let k in model) {
                otherData[k] = model[k];
              }
            }

            let list = res && res.data && res.tableDemoDate || res.data || res.data.list || res.data.data || res.data.deposit || [];

            if (res.data.length === undefined) {
              if (res.data.list != undefined && res.data.list.length) {
                list = res.data.list || [];
              }
            }

            _this.subTotalBet = {};
            _this.totalBet = {};

            if (res.attributes) {
              if (res.attributes.subTotalBet) {
                let obj = res.attributes.subTotalBet;

                for (let k in obj) {
                  _this.subTotalBet[k] = obj[k];
                }
              }

              if (res.attributes.totalBet) {
                let obj = res.attributes.totalBet;

                for (let k in obj) {
                  _this.totalBet[k] = obj[k];
                }
              }

              _this.total = res && res.data && res.attributes && res.attributes.total || 10;
              _this.pageSize = res && res.data && res.attributes && res.attributes.size || 10;
              _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
              _this.currentPage = parseInt(res.attributes.number) ? parseInt(res.attributes.number) : 1;
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
            }

            _this.loading = false;
          },
          p: () => {},
          error: e => {
            _this.loading = false;
          }
        }); //                     this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
        //                         _this.tableDataList = [];
        //                         let tableDate = res && res.data && res.data.data ? res.data.data : [];
        //                         if (_this.getData) {
        //                             let model = res.data || {};
        //                             for (let k in model) {
        //                                 otherData[k] = model[k];
        //                             }
        //                         }
        //                         let list = res && res.data && res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
        //                         if (res.data.data.length === undefined) {
        //                             if (res.data.data.list != undefined && res.data.data.list.length) {
        //                                 list = res.data.data.list || [];
        //                             }
        //                         }
        //                         _this.subTotalBet = {};
        //                         _this.totalBet = {};
        //                         if (res.data.attributes) {
        //                             if (res.data.attributes.subTotalBet) {
        //
        //                                 let obj = res.data.attributes.subTotalBet;
        //                                 for (let k in obj) {
        //                                     _this.subTotalBet[k] = obj[k];
        //                                 }
        //                             }
        //                             if (res.data.attributes.totalBet) {
        //
        //                                 let obj = res.data.attributes.totalBet;
        //                                 for (let k in obj) {
        //                                     _this.totalBet[k] = obj[k];
        //                                 }
        //                             }
        //                             _this.total = res && res.data && res.data.attributes && res.data.attributes.total || 10;
        //                             _this.pageSize = res && res.data && res.data.attributes && res.data.attributes.size || 10;
        //                             _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
        //                             _this.currentPage = parseInt(res.data.attributes.number) ? parseInt(res.data.attributes.number) : 1;
        //                         }
        //                         if (list.length && list.length > 0) {
        //                             for (let i in list) {
        //                                 _this.tableDataList.push(list[i]);
        //                             }
        //                             _this.initCheckList(list);
        //                         } else if (tableDate.length && tableDate.length > 0) {
        //                             let sumNumber = _this.sumNumber;
        //                             for (let j in tableDate) {
        //                                 _this.tableDataList.push(tableDate[j]);
        //                             }
        //                             this.initCheckList(tableDate);
        //                         }
        //                         if (_this.getData) {
        //                             _this.$emit("get-table-data", {
        //                                 "event": event,
        //                                 "item": _this.tableDataList,
        //                                 "allData": _this.otherData
        //                             });
        //                         }
        //                         _this.loading = false;
        //                     }).catch((e) => {
        //                         _this.loading = false;
        // //                        console.log(e);
        // //                        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
        //                     })
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
          _this.pageSize = tableDate.page_size ? tableDate.page_size : 10;
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
          let columns = res && res.data && res.columns ? res.columns : [];

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
          }

          if (columns.length > 0) {
            for (let i in columns) {
              columnList.push(columns[i]);

              if (columns[i].disabled == true) {
                _this.columnConfig.push(columns[i].prop);
              }
            }
          }
        }); //                    this.$.autoAjax('get',this.columnsUrl, '', {
        //                        ok: (res) => {
        //
        //                        },
        //                        p: () => {
        //                        },
        //                        error: e => {
        //                            _this.loading = false;
        //                            _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
        //                        }
        //                    })
        //                     this.$http.get(this.columnsUrl, URLCONFIG).then((res) => {
        //                         columnList.splice(0, columnList.length);
        //                         let columns = res && res.data && res.data.columns ? res.data.columns : [];
        //                         if(this.assembleColumns){
        //                             let index = this.assembleColumns.index;
        //                             let origin = columns.slice(0,index);
        //                             let end = columns.slice(index,columns.length);
        //                             let columsObj = {
        //                                 orignCol:origin,
        //                                 endCol:end,
        //                                 connectCol:this.assembleColumns.data
        //                             };
        //                             columns = CONNECTCOLUMS(columsObj,100);
        //                         }
        //                         if (columns.length > 0) {
        //                             for (let i in columns) {
        //                                 columnList.push(columns[i])
        //                                 if (columns[i].disabled == true) {
        //                                     _this.columnConfig.push(columns[i].prop);
        //                                 }
        //                             }
        //                         }
        //                         //根据
        // //                        if(columns.length > 10){
        // //                            _this.tableScroll = true;
        // //                        }else {
        // //                            _this.tableScroll = false;
        // //                        }
        //                     }).catch((e) => {
        // //                        console.log(e)
        //                         _this.loading = false;
        //                         _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
        //                     })
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
      for (let i in arr) {
        this.$set(this.checkList, i, false);
      }
    },

    //选据择所有数据
    allchecked() {
      let allChecked = this.allChecked;
      let model = this.tableDataList;
      let checks = this.checkList;
      let rows = this.rowsList;
      let arrs = [];
      let bl = false;

      if (allChecked) {
        bl = true;

        for (let i in this.tableDataList) {
          arrs.push(this.tableDataList[i]);
          rows[i] = this.tableDataList[i];
        }

        this.checkSum = this.tableDataList.length;
      } else {
        bl = false;
        this.checkSum = 0;
        arrs.splice(0, arrs.length); // rows = null;

        for (let i in rows) {
          delete rows[i];
        }
      }

      for (let k in model) {
        checks[k] = bl;
      }

      this.$emit("do-operation", {
        "event": event,
        "rows": arrs,
        "page": this.currentPage
      });
    },

    //选择当前数据
    thisChecked(num) {
      let allChecked = this.allChecked;
      let model = this.tableDataList;
      let checks = this.checkList;
      let rows = this.rowsList;
      let arrs = [];

      if (checks[num]) {
        rows[num] = this.tableDataList[num];
        this.checkSum = this.checkSum + 1;
      } else {
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
      }

      this.$emit("do-operation", {
        "event": event,
        "rows": arrs,
        "page": this.currentPage
      });
    },

    //切换每页条数
    doSizePage(v) {
      this.loading = true;
      let total = this.total;
      let pageSize = this.pageSize;
      let pageCount = this.pageCount;
      let page = 0;

      let _this = this;

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
          _this.total = res.attributes.total || 10;
          _this.pageSize = res.attributes.size || 10;
          _this.pageCount = Math.ceil(this.total / this.pageSize);
          _this.currentPage = 1;
          let tableDate = res.tableDemoDate || res.data || res.data.list || res.data.data || res.data.deposit || [];

          if (tableDate.list) {
            for (let i in tableDate.list) {
              _this.tableDataList.push(tableDate.list[i]);
            }
          } else {
            for (let i in tableDate) {
              _this.tableDataList.push(tableDate[i]);
            }
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          _this.loading = false;

          _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
        }
      }); // this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
      //     _this.total = res.data.attributes.total || 10;
      //     _this.pageSize = res.data.attributes.size || 10;
      //     _this.pageCount = Math.ceil(this.total / this.pageSize);
      //     _this.currentPage = 1;
      //     let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
      //     if (tableDate.list) {
      //         for (let i in tableDate.list) {
      //             _this.tableDataList.push(tableDate.list[i])
      //         }
      //     } else {
      //         for (let i in tableDate) {
      //             _this.tableDataList.push(tableDate[i])
      //         }
      //     }
      //     _this.loading = false;
      // }).catch((e) => {
      //     _this.loading = false;
      //     _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      // })
    },

    //切换页数
    doCurrentChange(v) {
      this.loading = true;
      let total = this.total;
      let pageSize = this.pageSize;
      let pageCount = this.pageCount;
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
          _this.total = res.attributes.total || 10;
          _this.pageSize = res.attributes.size || 10;
          _this.pageCount = Math.ceil(this.total / this.pageSize);
          _this.currentPage = res.attributes.number || 1;
          let tableDate = res.tableDemoDate || res.data || res.data.list || res.data.data || res.data.deposit || [];

          if (tableDate.list) {
            for (let i in tableDate.list) {
              _this.tableDataList.push(tableDate.list[i]);
            }
          } else {
            for (let i in tableDate) {
              _this.tableDataList.push(tableDate[i]);
            }
          }

          _this.loading = false;
        },
        p: () => {},
        error: e => {
          _this.loading = false;

          _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
        }
      }); // this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
      //     _this.total = res.data.attributes.total || 10;
      //     _this.pageSize = res.data.attributes.size || 10;
      //     _this.pageCount = Math.ceil(this.total / this.pageSize);
      //     _this.currentPage = res.data.attributes.number || 1;
      //     let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
      //     if (tableDate.list) {
      //         for (let i in tableDate.list) {
      //             _this.tableDataList.push(tableDate.list[i])
      //         }
      //     } else {
      //         for (let i in tableDate) {
      //             _this.tableDataList.push(tableDate[i])
      //         }
      //     }
      //     _this.loading = false;
      // }).catch((e) => {
      //     _this.loading = false;
      //     _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
      // })
    },

    //批量操作
    doOperation(fn) {
      let model = this.rowsList;
      let arrs = [];

      for (let k in model) {
        arrs.push(model[k]);
      }

      this.$emit("do-operation", {
        "event": event,
        "fn": fn,
        "rows": arrs,
        "page": this.currentPage
      });
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
            }
          });
        }
      }
    },

    // 导出数据
    exportData() {
      this.$emit("export-data");
    }

  },
  watch: {
    'tableData': 'updateFormData',
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
    },
    //修改数据失败处理
    updateMessage: function (newval) {
      if (newval) {
        let str = newval;
        let list = str.split(",");

        if (list.length === 3) {
          switch (list[2]) {
            case "true":
              this.tableDataList[list[0]][list[1]] = false;

            case "false":
              this.tableDataList[list[0]][list[1]] = true;

            case "0":
              this.tableDataList[list[0]][list[1]] = "0";

            case "q":
              this.tableDataList[list[0]][list[1]] = "1";
          }
        }
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
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-eff4fa3e","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/discountTable.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],ref:"tableSingle",attrs:{"id":"tableSingle"}},[(_vm.showExport)?_c('el-col',{staticClass:"tRight mb20"},[_vm._v("\n        "+_vm._s(_vm.LANG['刷新'] || '刷新')+"：\n        "),_c('el-select',{staticClass:"intW mr10",attrs:{"placeholder":"请选择","size":"small"},model:{value:(_vm.times),callback:function ($$v) {_vm.times=$$v},expression:"times"}},_vm._l((_vm.options),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.exportData}},[_vm._v(_vm._s(_vm.LANG['导出'] || '导出')+" ")])],1):_vm._e(),_vm._v(" "),(_vm.checkSum && _vm.checkList.length)?_c('el-col',{staticClass:"ft14 mb10"},[_c('label',{staticClass:"fl mr10",attrs:{"for":""}},[_vm._v(_vm._s(_vm.LANG['您选择了'] || '您选择了')+"\n            "),_c('span',{staticClass:"selecttext"},[_vm._v(_vm._s(_vm.checkSum))]),_vm._v(_vm._s(_vm.LANG['条数据'] || '条数据')+" ")]),_vm._v(" "),(_vm.tabOperation !=undefined)?_c('div',{staticClass:"btngroup"},_vm._l((_vm.tabOperation),function(opt,index){return _c('el-button',{key:index,attrs:{"size":"small"},on:{"click":function($event){return _vm.doOperation(opt.fn)}}},[_vm._v(_vm._s(_vm.LANG[opt.label] || opt.label)+"\n            ")])}),1):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.saveData)?_c('el-col',{staticClass:"tRight mb10"},[_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":_vm.dataSave}},[_vm._v(_vm._s(_vm.LANG['保存数据'] || '保存数据'))])],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"tablesOverall",attrs:{"id":"tables"}},[_c('table',{staticClass:"el-table w100 el-table--border mt10",attrs:{"cellspacing":"0","cellpadding":"0","border":"1"}},[_c('tr',[(_vm.tableCheck && _vm.tableDataList.length)?_c('th',[_c('div',{staticClass:"cell"},[_c('el-checkbox',{on:{"change":_vm.allchecked},model:{value:(_vm.allChecked),callback:function ($$v) {_vm.allChecked=$$v},expression:"allChecked"}})],1)]):_vm._e(),_vm._v(" "),(_vm.tableIndex && _vm.tableDataList.length)?_c('th',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['序号'] || '序号'))])]):_vm._e(),_vm._v(" "),_vm._l((_vm.columnList),function(col,index){return (col.disabled == true)?_c('th',{key:index,staticClass:"is-leaf"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(col.label))])]):_vm._e()})],2),_vm._v(" "),_vm._l((_vm.tableDataList),function(item,k){return (_vm.tableDataList.length)?_c('tr',{key:k,class:{col2 : !parseInt((k+1)%2)}},[(_vm.tableCheck && _vm.tableDataList.length)?_c('td',{staticClass:"el-table_1_column_19",attrs:{"width":"55px"}},[_c('div',{staticClass:"cell tCent"},[_c('el-checkbox',{on:{"change":function($event){return _vm.thisChecked(k)}},model:{value:(_vm.checkList[k]),callback:function ($$v) {_vm.$set(_vm.checkList, k, $$v)},expression:"checkList[k]"}})],1)]):_vm._e(),_vm._v(" "),(_vm.tableIndex && _vm.tableDataList.length)?_c('td',{staticClass:"el-table_ 1_column_19"},[_c('div',{staticClass:"cell tCent"},[_vm._v(_vm._s(parseInt(k) + 1))])]):_vm._e(),_vm._v(" "),_vm._l((_vm.columnList),function(col,index){return (col.disabled == true)?_c('td',{key:index,staticClass:"el-table_1_column_19",style:({'min-Width': (col.width +'px')})},[(col.type == 'date')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('span',[_vm._v(_vm._s(_vm._f("formatDate")(item[col.prop],'yyyy-MM-dd HH:mm:ss')))])]):_vm._e(),_vm._v(" "),(col.type == 'object')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('span',[_vm._v(_vm._s(_vm._f("formatObject")(item,col.prop)))])]):_vm._e(),_vm._v(" "),(col.type == 'moneyDelimiter')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoneyDelimiter")(item[col.prop],col.delimiter)))])]):_vm._e(),_vm._v(" "),(!col.type && !col.filters)?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[(col.prop == 'admin_uid')?_c('span',[_vm._v(_vm._s(_vm.LANG['管理员'] || '管理员'))]):_vm._e(),_vm._v(" "),(col.prop != 'admin_uid')?_c('span',[_vm._v(_vm._s(item[col.prop]))]):_vm._e(),_vm._v(" "),(item['t_default'] == '0')?_c('span',{staticClass:"defutFont"},[_vm._v("[ "+_vm._s(_vm.LANG['系统默认'] || '系统默认')+" ]")]):_vm._e()]):_vm._e(),_vm._v(" "),(col.type && col.type == 'connectAdd')?_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(_vm._f("formatConnectAdd")(item,col.prop)))])]):_vm._e(),_vm._v(" "),(col.type && col.type == 'connectString')?_c('div',{staticClass:"cell"},[_c('p',[_vm._v(_vm._s(_vm.LANG['户名'] || '户名')+"："+_vm._s(item[col.prop.split(",")[0]] || ""))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.LANG['账号'] || '账号')+"："+_vm._s(item[col.prop.split(",")[1]] || ""))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.LANG['开户行'] || '开户行')+"："+_vm._s(item[col.prop.split(",")[2]] || ""))])]):_vm._e(),_vm._v(" "),(col.type && col.type == 'linkConnectAdd')?_c('div',{staticClass:"cell"},[_c('el-button',{attrs:{"size":"small","type":"text"},on:{"click":function($event){return _vm.doHandle(item,col.fn)}}},[_vm._v("\n                            "+_vm._s(_vm._f("formatConnectAdd")(item,col.prop))+"\n                        ")])],1):_vm._e(),_vm._v(" "),(col.type === 'regular')?_c('div',{staticClass:"cell"},[(col.filters[0]['value'] === 'enabled')?_c('span',[(/enabled/.test(item[col.prop]))?_c('span',{staticClass:"sucess_text"},[_vm._v(" "+_vm._s(col.filters[0]['text'] || "")+"\n                            ")]):_c('span',{staticClass:"danger_text"},[_vm._v(_vm._s(col.filters[1]['text'] || ""))])]):_vm._e(),_vm._v(" "),(col.filters[0]['value'] === 'default')?_c('span',[(/default/.test(item[col.prop]))?_c('span',{staticClass:"sucess_text"},[_vm._v("\n                                "+_vm._s(col.filters[0]['text'] || "")+"\n                            ")]):_c('span',{staticClass:"danger_text"},[_vm._v(_vm._s(col.filters[1]['text'] || ""))])]):_vm._e(),_vm._v(" "),(col.filters[0]['value'] === 'new')?_c('span',[(/new/.test(item[col.prop]))?_c('span',{staticClass:"sucess_text"},[_vm._v("\n                                "+_vm._s(col.filters[0]['text'] || "")+"\n                            ")]):_c('span',{staticClass:"danger_text"},[_vm._v(_vm._s(col.filters[1]['text'] || ""))])]):_vm._e()]):_vm._e(),_vm._v(" "),(col.filterType && col.filterType == 'json' && col.type == 'json')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('span',[_vm._v(_vm._s(_vm._f("formatJson")(item[col.prop])))])]):_vm._e(),_vm._v(" "),(col.filterType && col.filterType == 'array' && col.type == 'array')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('span',[_vm._v(_vm._s(_vm._f("formatArray")(item[col.prop])))])]):_vm._e(),_vm._v(" "),(col.type == 'json' && col.arr)?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('span',[_vm._v(_vm._s(_vm._f("formatJsonArr")(item[col.prop],col.arr)))])]):_vm._e(),_vm._v(" "),(col.filterByWord)?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},_vm._l((item[col.filterByWord]),function(item1){return _c('div',[(col.filterCondition.split(',').length > 1)?_c('div',[(col[col.filterCondition.split(',')[0]] == item1[col.filterCondition.split(',')[0]] && col[col.filterCondition.split(',')[1]] == item1[col.filterCondition.split(',')[1]])?_c('span',[_vm._v(_vm._s(item1[col.prop]))]):_vm._e()]):_c('div',[(col[col.filterCondition.split(',')[0]] == item1[col.filterCondition.split(',')[0]])?_c('span',[_vm._v(_vm._s(item1[col.prop]))]):_vm._e()])])}),0):_vm._e(),_vm._v(" "),(col.type == 'connect')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('span',{class:{fontWeight:col['fontweight']}},[_vm._v(_vm._s(_vm._f("formatConnect")(item,col.prop, col.delimiter, col.type)))])]):_vm._e(),_vm._v(" "),(col.type == 'connectLottery')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('span',[_vm._v(_vm._s(_vm._f("formatConnectLottery")(item,col.prop, _vm.lotteryType)))])]):_vm._e(),_vm._v(" "),(col.type == 'connect,divisionMoney')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('span',{class:{fontWeight:col['fontweight']}},[_vm._v(_vm._s(_vm._f("formatConnect")(item,col.prop, col.delimiter, col.type)))])]):_vm._e(),_vm._v(" "),(col.type == 'link')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[(item[col.prop])?_c('el-button',{attrs:{"size":"small","type":"text"},domProps:{"textContent":_vm._s(item[col.prop])},on:{"click":function($event){return _vm.doHandle(item,col.fn)}}}):_vm._e(),_vm._v(" "),(!item[col.prop])?_c('span',[_vm._v(_vm._s(item[col.prop]))]):_vm._e()],1):_vm._e(),_vm._v(" "),(col.type == 'linkDivisionMoney')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[(item[col.prop])?_c('el-button',{attrs:{"size":"small","type":"text"},on:{"click":function($event){return _vm.doHandle(item,col.fn)}}},[_vm._v(_vm._s(_vm._f("formatMoney")(item[col.prop]))+"\n                        ")]):_vm._e(),_vm._v(" "),(!item[col.prop])?_c('span',[_vm._v(_vm._s(item[col.prop]))]):_vm._e()],1):_vm._e(),_vm._v(" "),_c('div'),_vm._v(" "),(col.type == 'img')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[(item[col.prop].toString().length>10 && col.imgtype !== 'bank')?_c('img',{attrs:{"src":item[col.prop],"alt":"item[col.prop]","height":"20px","width":"auto"}}):_vm._e(),_vm._v(" "),(col.imgtype == 'bank')?_c('img',{staticStyle:{"vertical-align":"middle"},attrs:{"src":'/static/img/bank/'+item['code']+'.png',"alt":"item[col.prop]","height":"20px","width":"auto"}}):_vm._e(),_vm._v(" "),(col.imgtype == 'bank')?_c('span',[_vm._v(_vm._s(item['code']))]):_vm._e(),_vm._v(" "),(item[col.prop].toString().length<10)?_c('span',[_vm._v(_vm._s(_vm.LANG['暂无图片'] || '暂无图片'))]):_vm._e()]):_vm._e(),_vm._v(" "),(col.type == 'button' && ((item['t_default'] == undefined && col.filters == undefined) || item['t_default'] == '1'))?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},_vm._l((col.btnGroup),function(btn){return _c('div',{staticStyle:{"float":"left","margin-left":"5px"}},[(btn.prop == undefined && !item[btn.valueKey])?_c('el-button',{attrs:{"size":"small","type":btn.btnType},domProps:{"textContent":_vm._s(btn.label)},on:{"click":function($event){return _vm.doHandle(item,btn.fn)}}}):_vm._e(),_vm._v(" "),(btn.prop && item[btn.prop] == btn.val && (btn.equal == undefined) && !item[btn.valueKey])?_c('el-button',{attrs:{"size":"small","type":btn.btnType},domProps:{"textContent":_vm._s(btn.label)},on:{"click":function($event){return _vm.doHandle(item,btn.fn)}}}):_vm._e(),_vm._v(" "),(btn.prop && item[btn.prop] != btn.val && (btn.equal == false)  && btn.valNum == 1 && !item[btn.valueKey])?_c('el-button',{attrs:{"size":"small","type":btn.btnType},domProps:{"textContent":_vm._s(btn.label)},on:{"click":function($event){return _vm.doHandle(item,btn.fn)}}}):_vm._e(),_vm._v(" "),(btn.prop && (item[btn.prop] != btn.val && item[btn.prop] != btn.val1) && (btn.equal == false)  && btn.valNum == 2 && !item[btn.valueKey])?_c('el-button',{attrs:{"size":"small","type":btn.btnType},domProps:{"textContent":_vm._s(btn.label)},on:{"click":function($event){return _vm.doHandle(item,btn.fn)}}}):_vm._e(),_vm._v(" "),(btn.valueKey && item[btn.valueKey])?_c('span',[_vm._v(_vm._s(item[btn.valueKey]))]):_vm._e()],1)}),0):_vm._e(),_vm._v(" "),(col.type == 'button' && item['t_default'] == '0')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},_vm._l((col.btnGroup),function(btn){return _c('div',{staticStyle:{"float":"left","margin-left":"5px"}},[(btn.prop == undefined && btn.label == '复制新增')?_c('el-button',{attrs:{"size":"small","type":btn.btnType},domProps:{"textContent":_vm._s(btn.label)},on:{"click":function($event){return _vm.doHandle(item,btn.fn)}}}):_vm._e()],1)}),0):_vm._e(),_vm._v(" "),(col.type == 'button' && col.filters)?_c('div',{staticClass:"cell"},_vm._l((col.btnGroup),function(btn){return _c('div',{staticStyle:{"float":"left","margin-left":"5px"}},[(btn.filters == undefined )?_c('span',[_c('el-button',{attrs:{"size":"small","type":btn.btnType},domProps:{"textContent":_vm._s(btn.label)},on:{"click":function($event){return _vm.doHandle(item,btn.fn)}}})],1):_vm._e(),_vm._v(" "),(btn.filters && col.filters[0]['value'] === 'enabled')?_c('span',[(/enabled/.test(item[btn.key]) && btn.filters === 'enabled')?_c('el-button',{attrs:{"size":"small","type":btn.btnType},domProps:{"textContent":_vm._s(_vm.LANG['停用'] || '停用')},on:{"click":function($event){return _vm.doHandle(item,btn.fn)}}}):_vm._e(),_vm._v(" "),(!(/enabled/.test(item[btn.key])) && btn.filters === 'disabled')?_c('el-button',{attrs:{"size":"small","type":btn.btnType},domProps:{"textContent":_vm._s(_vm.LANG['启用'] || '启用')},on:{"click":function($event){return _vm.doHandle(item,btn.fn)}}}):_vm._e()],1):_vm._e()])}),0):_vm._e(),_vm._v(" "),(col.filters != undefined && col.type != 'regular')?_c('div',{staticClass:"cell",class:{sucess_text: (item[col.prop] == 1 || item[col.prop] == true || item[col.prop] == 'enabled'),info_text:(item[col.prop] == 2),danger_text:(item[col.prop] == 0 || item[col.prop] == false || item[col.prop] == null)}},[_vm._v("\n                        "+_vm._s(_vm._f("formatSex")(item[col.prop],col.filters))+"\n                    ")]):_vm._e(),_vm._v(" "),(col.type == 'reduce')?_c('div',{staticClass:"cell"},[_c('span',{staticClass:"sucess_text"},[_vm._v(_vm._s((isNaN(parseInt(item[col.prop[0]])) ? 0 : parseInt(item[col.prop[0]])) - (isNaN(parseInt(item[col.prop[1]])) ? 0 : parseInt(item[col.prop[1]]))))])]):_vm._e(),_vm._v(" "),(col.type == 'divisionMoney')?_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(_vm._f("formatMoney")(item[col.prop])))])]):_vm._e(),_vm._v(" "),(col.type == 'subtract')?_c('div',{staticClass:"cell"},[_c('span',[_vm._v(_vm._s(_vm._f("formatSubtract")(item,col.prop)))])]):_vm._e(),_vm._v(" "),(col.type == 'checkbox')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('el-checkbox',{attrs:{"true-label":1,"false-label":0,"checked":_vm._f("formatCheck")(item[col.prop])},on:{"change":function($event){return _vm.changes(k,item,col.prop)}},model:{value:(item[col.prop]),callback:function ($$v) {_vm.$set(item, col.prop, $$v)},expression:"item[col.prop]"}})],1):_vm._e(),_vm._v(" "),(col.type == 'number')?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(item[col.prop]),expression:"item[col.prop]"}],staticClass:"el-input__inner",attrs:{"type":"number","min":"1"},domProps:{"value":(item[col.prop])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(item, col.prop, $event.target.value)}}})]):_vm._e(),_vm._v(" "),(col.type == 'switch' && col.show)?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[(item[col.show].toString() === '1')?_c('el-switch',{attrs:{"on-value":col.onValue || '1',"off-value":col.offValue || '0'},on:{"change":function($event){return _vm.changes(k,item,col.prop)}},model:{value:(item[col.prop]),callback:function ($$v) {_vm.$set(item, col.prop, $$v)},expression:"item[col.prop]"}}):_vm._e()],1):_vm._e(),_vm._v(" "),(col.type == 'switch' && col.show === undefined)?_c('div',{staticClass:"cell",class:{tCent:(col.class != undefined)?true:false}},[_c('el-switch',{attrs:{"on-value":col.onValue || '1',"off-value":col.offValue || '0'},on:{"change":function($event){return _vm.changes(k,item,col.prop)}},model:{value:(item[col.prop]),callback:function ($$v) {_vm.$set(item, col.prop, $$v)},expression:"item[col.prop]"}})],1):_vm._e()]):_vm._e()})],2):_vm._e()}),_vm._v(" "),(_vm.sumGame && _vm.subTotalBet)?_c('tr',[(_vm.columnList.length === 8)?_c('td',{attrs:{"colspan":"3"}},[_c('div',{staticClass:"cell tCent"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]):_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.subTotalBet.bet_times))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.bet_money)))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.valid_bet)))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.send_prize)))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.lose_earn)))])])]):_vm._e(),_vm._v(" "),(_vm.sumGame && _vm.totalBet)?_c('tr',[(_vm.columnList.length === 8)?_c('td',{attrs:{"colspan":"3"}},[_c('div',{staticClass:"cell tCent"},[_vm._v(_vm._s(_vm.LANG['合计'] || '合计'))])]):_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.LANG['合计'] || '合计'))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm.totalBet.bet_times))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.bet_money)))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.valid_bet)))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.send_prize)))])]),_vm._v(" "),_c('td',[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.lose_earn)))])])]):_vm._e()],2),_vm._v(" "),(_vm.tableDataList.length == 0)?_c('el-col',{staticStyle:{"line-height":"100px","text-align":"center","background-color":"#ffffff"}},[_c('div',{staticClass:"dell"},[_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据'))])]):_vm._e()],1),_vm._v(" "),(_vm.pageSet && _vm.tableDataList.length >0 )?_c('el-col',{staticClass:"toolbar mt20 pRight20",staticStyle:{"position":"relative","text-align":"right"},attrs:{"span":24}},[_c('el-pagination',{staticStyle:{"float":"right"},attrs:{"current-page":_vm.currentPage,"page-sizes":[10, 20, 30, 40],"page-size":_vm.pageSize,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.total},on:{"size-change":_vm.doSizePage,"current-change":_vm.doCurrentChange}})],1):_vm._e()],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/discountTable.vue
function injectStyle (context) {
  __webpack_require__(452)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-eff4fa3e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(component_normalizer["a" /* default */])(
  discountTable,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_discountTable = (Component.exports);

// EXTERNAL MODULE: ./src/components/formEdit.vue + 1 modules
var formEdit = __webpack_require__(203);

// EXTERNAL MODULE: ./src/components/confirm.vue + 2 modules
var components_confirm = __webpack_require__(206);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/preAct/discountSetting.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var discountSetting = ({
  data() {
    return {
      sss: false,
      statuslist: [{
        value: 'enabled',
        label: '启用'
      }, {
        value: 'disabled',
        label: '停用'
      }],
      checkAll: false,
      checkedUserLevel: [],
      LANG,
      activetype: null,
      //表格相关
      columnsUrl: "",
      assembleColumns: {},
      editid: null,
      // 游戏选中
      checkkeys: [],
      allData: [],
      tableUrl: "",
      tableData: {
        list: []
      },
      //搜索相关
      searchConfig: [{}],
      nowId: -1,
      formVisible: {
        state: false
      },
      // 选中游戏
      "default-checked-keys": [],
      formTitle: "",
      isEdit: {
        state: false
      },
      labelWidth: "90px",
      baseUrl: "",
      //新增配置
      //弹窗相关
      editTitle: "",
      //日返水时间，开始
      day_rebet_begin_time: "00:00:00",
      day_rebet_end_time: "23:59:59",
      //周返水时间，开始
      week_rebet_begin_time: "周一 00:00:00",
      week_rebet_end_time: "周日 23:59:59",
      editFormVisible: false,
      editForm: {
        valid_bet: '',
        member_level: '',
        status: 'enabled',
        upper_limit: '',
        memo: '',
        rebet_per: []
      },
      editVisible: false,
      editflag: false,
      editBtnText: "",
      //控制是否是新增还是修改
      formType: "",
      //优惠类型数据
      optionsData: [],
      //模拟树的数据
      treeData: [],
      //树的配置props
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      pickerOptions0: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }

      },
      updated: false,
      rules: {},
      loading: false,
      //删除确认
      confirmConfig: {
        state: false,
        msg: "",
        fn: ""
      },
      nowId: -1,
      params: {
        type_id: null,
        type_name: null,
        begin_time: null,
        end_time: null,
        name: null,
        day_rebet: null,
        week_rebet: null,
        game: null,
        member_level: null,
        withdraw_require: null,
        withdraw_require_val: null,
        min_rebet_money: null,
        day_rebet_issue_time: null,
        week_rebet_issue_time: null,
        state: null
      },
      copyValidBet: ''
    };
  },

  components: {
    discountTable: components_discountTable,
    confirm: components_confirm["a" /* default */],
    formedit: formEdit["a" /* default */]
  },
  methods: {
    init() {
      let _this = this;

      this.columnsUrl = "static/json/preAct/discountSetting/columns.json";
      this.loading = true;
      this.getLevel().then(() => {
        this.getTableData();
      }); //获取游戏列表ROUTES.GET.active.rebates

      this.assembleColumns = {
        index: 1,
        data: []
      };
      this.editForm.rebet_per = [];
      this.$.autoAjax('get', URL.api + "/games", '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            let model = res.data;
            model.forEach(item => {
              let obj = {
                "label": item.game_name,
                "game_id": item.game_id,
                "game_type": item.game_type,
                filterByWord: "rebet_per",
                prop: "val",
                filterCondition: "game_type,game_id"
              };

              _this.assembleColumns.data.push(obj);

              this.editForm.rebet_per.push({
                "name": item.game_name,
                "value": '',
                "id": item.game_id,
                "game_type": item.game_type
              });
            });
          }
        },
        p: () => {},
        error: e => {
          this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
        }
      });
    },

    getLevel() {
      return new Promise((resolve, reject) => {
        // 获取会员层级列表
        this.$.autoAjax('get', URL.api + ROUTES.GET.user.level.list, '', {
          ok: res => {
            if (res.state === 0 && res.data) {
              this.editForm.member_level = res.data;
              resolve();
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        });
      });
    },

    getTableData() {
      //列表数据
      this.$.autoAjax('get', URL.api + '/active/rebetset?page=1&page_size=30', '', {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.allData = [];
            let model = res.data || [];

            for (let key in model) {
              let obj = {};
              let levelName = [];

              if (key === '0') {
                obj.name = "全部(系统默认)";
              } else {
                this.editForm.member_level.forEach(item => {
                  key.split(',').forEach(item1 => {
                    if (item1 === item.id) {
                      levelName.push(item);
                    }
                  });
                });
                obj.name = levelName.map(item => {
                  return item.name;
                }).join(',');
              }

              obj.list = [];
              model[key].forEach(item => {
                let data = {};

                for (let key in item) {
                  this.$set(data, key, item[key]);
                }

                obj.list.push(data);
              });
              this.allData.push(obj);
            }

            this.loading = false;
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }).catch(res => {
        this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
      });
    },

    handleCheckAllChange() {
      let idArr = [];

      for (let i in this.editForm.member_level) {
        idArr.push(this.editForm.member_level[i].id);
      }

      this.checkedUserLevel = event.target.checked ? idArr : [];
    },

    handleCheckedCitiesChanges(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount == this.editForm.member_level.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.editForm.member_level.length;
    },

    handleCheckedCitiesChange(item) {
      if (item.typeMoney == true) {
        item.dayhandType = false;
        item.dayhandTypeMoney = true;
        item.typeFixed = false;
      } else {
        item.dayhandType = true;
      }
    },

    handleCheckedTypeChange(item) {
      if (item.typeFixed == true) {
        item.dayhandTypeMoney = false;
        item.dayhandType = true;
        item.typeMoney = false;
      } else {
        item.dayhandTypeMoney = true;
      }
    },

    getCheckedKeys() {
      this.checkkeys = this.$refs.tree.getCheckedKeys();
    },

    saveEditForm() {
      let addUrl = URL.api + '/active/rebetset';

      let _this = this;

      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true;
          let data = {
            valid_bet: this.editForm.valid_bet * 100,
            member_level: '',
            status: this.editForm.status,
            memo: this.editForm.memo,
            upper_limit: this.editForm.upper_limit * 100,
            rebet_per: []
          };

          if (this.checkedUserLevel.length === this.editForm.member_level.length || this.checkedUserLevel.length === 0) {
            data.member_level = '0';
          } else {
            data.member_level = this.checkedUserLevel.join(',');
          }

          this.editForm.rebet_per.forEach(item => {
            let obj = {
              game_id: item.id,
              game_name: item.name,
              game_type: item.game_type,
              val: item.value
            };
            data.rebet_per.push(obj);
          });
          this.formVisible.state = false;
          this.editVisible = false;

          if (this.formType == "add") {
            this.$.autoAjax('put', addUrl, data, {
              ok: res => {
                if (res.state == 0 && res.data) {
                  _this.$message.success(LANG['新增返水成功'] || '新增返水成功');

                  _this.getTableData();
                } else {
                  let str = LANG[`${res.msg}`] || res.msg;

                  _this.$message.error(str);
                }

                _this.loading = false;

                _this.resetEditForm();
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            });
          }

          if (this.formType == "edit") {
            this.$.autoAjax('put', addUrl + '/' + this.nowId, data, {
              ok: res => {
                if (res.state == 0 && res.data) {
                  _this.$message.success(LANG['修改返水成功'] || '修改返水成功');

                  _this.getTableData();
                } else {
                  let str = LANG[`${res.msg}`] || res.msg;

                  _this.$message.error(str);
                }

                _this.loading = false;

                _this.resetEditForm();
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            });
          }
        } else {
          return false;
        }
      });
    },

    //重置
    resetEditForm() {
      this.editVisible = false;
      this.$refs.form.resetFields();
      this.checkedUserLevel = [];
      this.checkAll = false;
      this.copyValidBet = '';
    },

    doHandle(item) {
      this.updated = false;
      this.nowId = parseInt(item.row.id) || -1;

      switch (item.fn) {
        case "doEdit":
          // 编辑
          this.doEdit(item.row);
          break;

        case "doRefuse":
          this.doRefuse(item.row);
          break;
      }
    },

    resetData() {
      this.editForm.valid_bet = '';
      this.editForm.status = 'enabled';
      this.editForm.upper_limit = '';
      this.editForm.memo = '';
      this.editForm.rebet_per.forEach(item => {
        item.value = '';
      });
    },

    doAddSetting() {
      this.resetData();
      this.formTitle = this.LANG["新增返水设置"] || "新增返水设置";
      this.formType = "add";
      this.isEdit.state = true;
      this.formVisible.state = true;
      this.editVisible = true;
      this.updated = false;
    },

    doEdit(row) {
      this.formTitle = this.LANG["修改返水设置"] || "修改返水设置";
      this.editForm.status = row.status;
      this.editForm.valid_bet = row.valid_bet / 100;
      this.copyValidBet = row.valid_bet / 100;

      for (let key in row.rebet_per) {
        this.editForm.rebet_per.forEach(item => {
          if (item.id == row.rebet_per[key].game_id && item.game_type == row.rebet_per[key].game_type) {
            item.value = row.rebet_per[key].val;
          }
        });
      }

      this.editForm.upper_limit = row.upper_limit / 100;
      this.editForm.memo = row.memo;

      if (row.member_level === '0') {
        let idArr = [];

        for (let i in this.editForm.member_level) {
          idArr.push(this.editForm.member_level[i].id);
        }

        this.checkedUserLevel = idArr;
        this.checkAll = true;
      } else {
        this.checkedUserLevel = row.member_level.split(',');
      }

      this.editVisible = true;
      this.isEdit.state = true;
      this.formVisible.state = true;
      this.formType = "edit";
    },

    //停用
    doRefuse(row) {
      if (parseInt(row.id)) {
        this.confirmConfig.state = true;
        this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + (this.LANG['吗？'] || '吗？');
        this.confirmConfig.fn = "stop";
      }
    },

    /**
     * 启用
     * @param row
     */
    doConfirm(obj) {
      this.loading = true;

      let _this = this;

      switch (obj.fn) {
        case "stop":
          this.$.autoAjax('patch', URL.api + '/active/rebetset/status/' + this.nowId, {
            status: "deleted"
          }, {
            ok: res => {
              if (res.state === 0 && res.data) {
                _this.getTableData();

                _this.$message.success(this.LANG['删除成功'] || '删除成功');
              } else {
                _this.$message.error(this.LANG['停用失败，请稍后重试'] || '停用失败，请稍后重试');
              }

              _this.loading = false;
            },
            p: () => {},
            error: e => {
              console.log(e);
            }
          });
          break;
      }
    },

    //重置FORM
    resetForm() {
      this.tableUrl = this.baseUrl;
    },

    doQuery(obj) {
      this.tableUrl = this.baseUrl + "?type_id=" + parseInt(obj.item.type_id);
    },

    //数字验证
    validatorNumber(rule, value, callback) {
      if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
      } else {
        if (value == 0) {
          callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
        } else if (value > 9999999) {
          callback(new Error(LANG['输入金额不能大于9999999'] || '输入金额不能大于9999999'));
        } else {
          callback();
        }
      }
    },

    validatorBet(rule, value, callback) {
      if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
      } else {
        if (value <= 0) {
          callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
        } else if (value > 9999999) {
          callback(new Error(LANG['输入金额不能大于9999999'] || '输入金额不能大于9999999'));
        } else {
          //this.copyValidBet为空说明是新增
          if (!this.copyValidBet) {
            let member_level = '';

            if (this.checkedUserLevel.length === this.editForm.member_level.length || this.checkedUserLevel.length === 0) {
              member_level = '0';
            } else {
              member_level = this.checkedUserLevel.join(',');
            }

            let url = URL.api + `/active/rebetset/check?member_level=${member_level}&&valid_bet=${value * 100}`;
            this.$.autoAjax('get', url, '', {
              ok: res => {
                if (res.state === 0 && res.data) {
                  callback();
                } else {
                  callback(new Error(LANG['同一个会员层级不能有相同的投注金额'] || '同一个会员层级不能有相同的投注金额'));
                }
              },
              p: () => {},
              error: e => {
                console.log(e);
              }
            });
          } else {
            //修改
            //此时当value和copyValidBet的值不同，即value的值有变化需要验证,否则不验证
            if (value !== this.copyValidBet) {
              let member_level = '';

              if (this.checkedUserLevel.length === this.editForm.member_level.length || this.checkedUserLevel.length === 0) {
                member_level = '0';
              } else {
                member_level = this.checkedUserLevel.join(',');
              }

              let url = URL.api + `/active/rebetset/check?member_level=${member_level}&&valid_bet=${value * 100}`;
              this.$.autoAjax('get', url, '', {
                ok: res => {
                  if (res.state === 0 && res.data) {
                    callback();
                  } else {
                    callback(new Error(LANG['同一个会员层级不能有相同的投注金额'] || '同一个会员层级不能有相同的投注金额'));
                  }
                },
                p: () => {},
                error: e => {
                  console.log(e);
                }
              });
            } else {
              callback();
            }
          }
        }
      }
    },

    handleClose() {
      this.resetEditForm();
    }

  },
  computed: {},

  mounted() {},

  activated() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-71086648","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/preAct/discountSetting.vue
var discountSetting_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"id":"subAgentRebate"}},[_c('el-row',[_c('el-col',{attrs:{"span":24}},[_c('el-button',{staticClass:"ml20",staticStyle:{"float":"right"},attrs:{"type":"primary","size":"small"},on:{"click":_vm.doAddSetting}},[_vm._v("\n                "+_vm._s(_vm.LANG['新增返水设置'] || '新增返水设置')+"\n            ")])],1)],1),_vm._v(" "),_c('el-col',_vm._l((_vm.allData),function(item,index){return _c('div',{staticClass:"tableDiv"},[_c('span',[_vm._v(_vm._s(_vm.LANG['会员层级'] || '会员层级')),_c('el-tag',{attrs:{"type":"gray"}},[_vm._v(_vm._s(item.name))])],1),_vm._v(" "),_c('discountTable',{attrs:{"tableData":item,"columnsUrl":_vm.columnsUrl,"tableCheck":false,"pageSet":false,"tableIndex":false,"assembleColumns":_vm.assembleColumns,"updated":_vm.updated},on:{"do-handle":_vm.doHandle}})],1)}),0),_vm._v(" "),_c('el-col',[_c('el-dialog',{directives:[{name:"show",rawName:"v-show",value:(_vm.editVisible),expression:"editVisible"}],staticClass:"vipDialog",attrs:{"title":_vm.formTitle,"size":"small","before-close":_vm.handleClose},model:{value:(_vm.editVisible),callback:function ($$v) {_vm.editVisible=$$v},expression:"editVisible"}},[_c('el-form',{ref:"form",staticClass:"clearfix",attrs:{"model":_vm.editForm,"label-width":"120px","rules":_vm.rules}},[_c('el-form-item',{staticClass:"rebeat m20",attrs:{"label":_vm.LANG['有效会员等级'] || '有效会员等级'}},[_c('el-checkbox',{attrs:{"disabled":_vm.formType=='edit'?true:false},on:{"change":function($event){return _vm.handleCheckAllChange()}},model:{value:(_vm.checkAll),callback:function ($$v) {_vm.checkAll=$$v},expression:"checkAll"}},[_vm._v(_vm._s(_vm.LANG['全选'] || '全选')+"\n                    ")]),_vm._v(" "),_c('div',{staticStyle:{"margin":"15px 0"}}),_vm._v(" "),_c('el-checkbox-group',{on:{"change":_vm.handleCheckedCitiesChanges},model:{value:(_vm.checkedUserLevel),callback:function ($$v) {_vm.checkedUserLevel=$$v},expression:"checkedUserLevel"}},_vm._l((_vm.editForm.member_level),function(ele){return _c('el-checkbox',{key:ele.name,attrs:{"label":ele.id,"disabled":_vm.formType=='edit'?true:false}},[_vm._v(_vm._s(ele.name)+"\n                        ")])}),1)],1),_vm._v(" "),_c('el-form-item',{staticClass:"mt20 clearfix",attrs:{"label":_vm.LANG['有效金额投注'] || '有效金额投注',"rules":[{ validator:_vm.validatorBet,trigger:'blur'}],"prop":"valid_bet","required":""}},[_c('el-input',{staticClass:"wd",attrs:{"type":"text"},model:{value:(_vm.editForm.valid_bet),callback:function ($$v) {_vm.$set(_vm.editForm, "valid_bet", $$v)},expression:"editForm.valid_bet"}}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['以上'] || '以上')}})],1),_vm._v(" "),_vm._l((_vm.editForm.rebet_per),function(item,index){return _c('el-form-item',{key:index,staticClass:"w50 fl clearfix",attrs:{"label":item.name,"prop":'rebet_per['+index+'].value',"rules":[{ validator:_vm.validatorNumber,trigger:'blur'}],"required":""}},[_c('el-input',{staticClass:"wd",attrs:{"type":"number"},model:{value:(item.value),callback:function ($$v) {_vm.$set(item, "value", $$v)},expression:"item.value"}}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s( '%' )}})],1)}),_vm._v(" "),_c('el-form-item',{staticClass:"w50 fl",attrs:{"label":_vm.LANG['优惠上限'] || '优惠上限',"rules":[{ validator:_vm.validatorNumber,trigger:'blur'}],"prop":"upper_limit","required":""}},[_c('el-input',{staticClass:"wd",attrs:{"type":"number"},model:{value:(_vm.editForm.upper_limit),callback:function ($$v) {_vm.$set(_vm.editForm, "upper_limit", $$v)},expression:"editForm.upper_limit"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"w50 fl",attrs:{"label":_vm.LANG['备注'] || '备注'}},[_c('el-input',{staticClass:"wd",attrs:{"type":"text"},model:{value:(_vm.editForm.memo),callback:function ($$v) {_vm.$set(_vm.editForm, "memo", $$v)},expression:"editForm.memo"}})],1),_vm._v(" "),_c('el-form-item',{staticClass:"fl",attrs:{"label":_vm.LANG['状 态'] || '状 态'}},[_c('el-radio-group',{model:{value:(_vm.editForm.status),callback:function ($$v) {_vm.$set(_vm.editForm, "status", $$v)},expression:"editForm.status"}},[_c('el-radio',{staticClass:"radio",attrs:{"label":"enabled"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['启用'] || '启用')}})]),_vm._v(" "),_c('el-radio',{staticClass:"radio",attrs:{"label":"disabled"}},[_c('span',{domProps:{"textContent":_vm._s(_vm.LANG['停用'] || '停用')}})])],1)],1)],2),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{on:{"click":_vm.resetEditForm}},[_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.saveEditForm}},[_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])],1)],1)],1),_vm._v(" "),_c('el-col',[_c('confirm',{attrs:{"confirmConfig":_vm.confirmConfig},on:{"do-confirm":_vm.doConfirm}})],1)],1)}
var discountSetting_staticRenderFns = []

// CONCATENATED MODULE: ./src/page/preAct/discountSetting.vue
function discountSetting_injectStyle (context) {
  __webpack_require__(451)
}
/* script */


/* template */

/* template functional */
var discountSetting_vue_template_functional_ = false
/* styles */
var discountSetting_vue_styles_ = discountSetting_injectStyle
/* scopeId */
var discountSetting_vue_scopeId_ = "data-v-71086648"
/* moduleIdentifier (server only) */
var discountSetting_vue_module_identifier_ = null

var discountSetting_Component = Object(component_normalizer["a" /* default */])(
  discountSetting,
  discountSetting_render,
  discountSetting_staticRenderFns,
  discountSetting_vue_template_functional_,
  discountSetting_vue_styles_,
  discountSetting_vue_scopeId_,
  discountSetting_vue_module_identifier_
)

/* harmony default export */ var preAct_discountSetting = __webpack_exports__["default"] = (discountSetting_Component.exports);


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/confirm.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var components_confirm = ({
  data() {
    return {
      LANG,
      autofocus: false
    };
  },

  props: {
    confirmConfig: {
      type: Object,
      default: {
        state: false,
        msg: "",
        fn: "",
        obj: {}
      }
    }
  },
  watch: {
    'confirmConfig.state': function (newval) {
      if (newval) {
        this.autofocus = true;
      }
    }
  },
  components: {},
  methods: {
    //处理确定事件
    doConfirm() {
      this.$emit("do-confirm", {
        "fn": this.confirmConfig.fn,
        "obj": this.confirmConfig.obj,
        "flag": this.confirmConfig.flag
      });
      this.confirmConfig.state = false;
    },

    doCancel() {
      this.confirmConfig.state = false;
      this.$emit("do-cancel", {
        "fn": this.confirmConfig.fn,
        "obj": this.confirmConfig.obj,
        "flag": this.confirmConfig.flag
      });
    }

  },
  directives: {
    focus: {
      update: function (el, {
        value
      }) {
        if (value) {
          el.focus();
        }
      }
    }
  },

  mounted() {},

  created() {}

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e2013ef6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/confirm.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"confirm"}},[(_vm.confirmConfig.state)?_c('el-dialog',{attrs:{"title":_vm.LANG['系统提示'] || '系统提示',"size":"tiny","before-close":_vm.doCancel},on:{"close":_vm.doCancel},model:{value:(_vm.confirmConfig.state),callback:function ($$v) {_vm.$set(_vm.confirmConfig, "state", $$v)},expression:"confirmConfig.state"}},[_c('p',[_c('span',[_vm._v(_vm._s(_vm.LANG[_vm.confirmConfig.msg] || _vm.confirmConfig.msg))])]),_vm._v(" "),_c('span',{staticClass:"dialog-footer",attrs:{"slot":"footer"},slot:"footer"},[_c('el-button',{staticClass:"formCancel",on:{"click":_vm.doCancel}},[_vm._v(_vm._s(_vm.LANG['取 消'] || '取 消'))]),_vm._v(" "),_c('el-button',{directives:[{name:"focus",rawName:"v-focus",value:(_vm.autofocus),expression:"autofocus"}],staticClass:"formSave",attrs:{"type":"primary"},on:{"click":_vm.doConfirm}},[_vm._v(_vm._s(_vm.LANG['确 定'] || '确 定'))])],1)]):_vm._e()],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/components/confirm.vue
function injectStyle (context) {
  __webpack_require__(219)
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
  components_confirm,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_confirm = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

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

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);