webpackJsonp([78],{

/***/ 1025:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.checkGrounpList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "checkboxContainer"
    }, [_c('el-checkbox', {
      on: {
        "change": function($event) {
          _vm.handleCheckAllChange(item.checkAll, item.children, item.isIndeterminate, index)
        }
      },
      model: {
        value: (item.checkAll),
        callback: function($$v) {
          _vm.$set(item, "checkAll", $$v)
        },
        expression: "item.checkAll"
      }
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('el-checkbox-group', {
      on: {
        "change": function($event) {
          _vm.handleCheckedCitiesChange(item.checkedChildren, item.children, index)
        }
      },
      model: {
        value: (item.checkedChildren),
        callback: function($$v) {
          _vm.$set(item, "checkedChildren", $$v)
        },
        expression: "item.checkedChildren"
      }
    }, _vm._l((item.children), function(option, n) {
      return _c('el-checkbox', {
        key: n,
        staticStyle: {
          "margin-right": "5px"
        },
        attrs: {
          "label": option
        }
      }, [_vm._v(_vm._s(option))])
    }))], 1)
  }))
},staticRenderFns: []}

/***/ }),

/***/ 1095:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "clearfix",
    attrs: {
      "id": "childRoleAccount"
    }
  }, [_c('el-col', {
    staticClass: "pb"
  }, [_c('el-button', {
    staticClass: "addManage",
    attrs: {
      "type": "primary",
      "size": "small"
    },
    domProps: {
      "textContent": _vm._s(_vm.LANG['新增角色'] || '新增角色')
    },
    on: {
      "click": _vm.doAdd
    }
  })], 1), _vm._v(" "), _c('el-col', [_c('tablegrid', {
    attrs: {
      "columnsUrl": _vm.columnsUrl,
      "tableUrl": _vm.tableUrl,
      "tableCheck": false,
      "pageSet": true,
      "showRefresh": true,
      "updated": _vm.updated
    },
    on: {
      "do-handle": _vm.doHandle
    }
  })], 1), _vm._v(" "), _c('el-col', [_c('el-dialog', {
    staticClass: "fromTitle",
    attrs: {
      "title": _vm.editFormTtile,
      "size": "small"
    },
    model: {
      value: (_vm.editFormVisible),
      callback: function($$v) {
        _vm.editFormVisible = $$v
      },
      expression: "editFormVisible"
    }
  }, [_c('el-form', {
    ref: "editForm",
    attrs: {
      "model": _vm.editForm,
      "label-width": "100px",
      "rules": _vm.editFormRules
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": _vm.LANG['角色名称'] || '角色名称',
      "prop": "role"
    }
  }, [_c('el-input', {
    attrs: {
      "auto-complete": "off"
    },
    model: {
      value: (_vm.editForm.role),
      callback: function($$v) {
        _vm.$set(_vm.editForm, "role", $$v)
      },
      expression: "editForm.role"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['菜单权限'] || '菜单权限',
      "prop": ""
    }
  }, [_c('el-tree', {
    ref: "tree",
    attrs: {
      "data": _vm.permissionsList,
      "show-checkbox": "",
      "accordion": "",
      "node-key": "id",
      "props": _vm.defaultProps
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['会员权限'] || '会员权限'
    }
  }, [_c('checkgroup', {
    attrs: {
      "checkGrounpList": _vm.checkGrounpList
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": _vm.LANG['导出权限'] || '导出权限'
    }
  }, [_c('checkgroup', {
    attrs: {
      "checkGrounpList": _vm.checkExportList
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    nativeOn: {
      "click": function($event) {
        return _vm.resetForm($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['取消'] || '取消'))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.saveFrom($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG[_vm.btnEditText] || _vm.btnEditText))])], 1)], 1), _vm._v(" "), _c('confirm', {
    attrs: {
      "confirmConfig": _vm.confirmConfig
    },
    on: {
      "do-confirm": _vm.doConfirm
    }
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(866)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(526),
  /* template */
  __webpack_require__(1095),
  /* scopeId */
  "data-v-ed724e06",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(243)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(241),
  /* template */
  __webpack_require__(246),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(257)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(255),
  /* template */
  __webpack_require__(259),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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
            this.$emit("do-confirm", { "fn": this.confirmConfig.fn, "obj": this.confirmConfig.obj, "flag": this.confirmConfig.flag });
            this.confirmConfig.state = false;
        },
        doCancel() {
            this.confirmConfig.state = false;
            this.$emit("do-cancel", { "fn": this.confirmConfig.fn, "obj": this.confirmConfig.obj, "flag": this.confirmConfig.flag });
        }
    },
    directives: {
        focus: {
            update: function (el, { value }) {
                if (value) {
                    el.focus();
                }
            }
        }
    },
    mounted() {},
    created() {}
});

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(242);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("69843c3c", content, true);

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(240),
  /* template */
  __webpack_require__(245),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.setState) ? _c('i', {
    staticClass: "fa fa-cog",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      "click": _vm.changeSet
    }
  }) : _vm._e(), _vm._v(" "), (_vm.setState) ? _c('el-select', {
    staticStyle: {
      "width": "700px"
    },
    attrs: {
      "multiple": "",
      "placeholder": _vm._('表格列配置')
    },
    on: {
      "change": _vm.changeColumnConfig
    },
    model: {
      value: (_vm.columnConfig),
      callback: function($$v) {
        _vm.columnConfig = $$v
      },
      expression: "columnConfig"
    }
  }, _vm._l((_vm.columnsModel), function(item) {
    return _c('el-option', {
      key: item.id,
      attrs: {
        "label": item.label,
        "value": item.prop
      }
    })
  })) : _vm._e(), _vm._v(" "), (_vm.setState) ? _c('el-button', {
    attrs: {
      "type": "success"
    },
    domProps: {
      "textContent": _vm._s(_vm._('保存配置'))
    },
    on: {
      "click": _vm.saveSet
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "confirm"
    }
  }, [(_vm.confirmConfig.state) ? _c('el-dialog', {
    attrs: {
      "title": _vm.LANG['系统提示'] || '系统提示',
      "size": "tiny",
      "before-close": _vm.doCancel
    },
    on: {
      "close": _vm.doCancel
    },
    model: {
      value: (_vm.confirmConfig.state),
      callback: function($$v) {
        _vm.$set(_vm.confirmConfig, "state", $$v)
      },
      expression: "confirmConfig.state"
    }
  }, [_c('p', [_c('span', [_vm._v(_vm._s(_vm.LANG[_vm.confirmConfig.msg] || _vm.confirmConfig.msg))])]), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    staticClass: "formCancel",
    on: {
      "click": _vm.doCancel
    }
  }, [_vm._v(_vm._s(_vm.LANG['取 消'] || '取 消'))]), _vm._v(" "), _c('el-button', {
    directives: [{
      name: "focus",
      rawName: "v-focus",
      value: (_vm.autofocus),
      expression: "autofocus"
    }],
    staticClass: "formSave",
    attrs: {
      "type": "primary"
    },
    on: {
      "click": _vm.doConfirm
    }
  }, [_vm._v(_vm._s(_vm.LANG['确 定'] || '确 定'))])], 1)]) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__columnSet_vue__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__columnSet_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__columnSet_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirm_vue__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__confirm_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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



/* harmony default export */ __webpack_exports__["default"] = ({
	data() {
		return {
			LANG,
			//列配置
			columnConfig: [],
			//复制列参数
			columnList: [],
			//表格列表数据
			tableDataList: [],
			tableDataColen: [],
			// 合计相关
			subTotalBet: {
				bet_money: 0,
				bet_times: 0,
				lose_earn: 0,
				send_prize: 0,
				bonus: 0,
				contri: 0,
				valid_bet: 0
			},
			totalBet: {
				bet_money: 0,
				bet_times: 0,
				lose_earn: 0,
				send_prize: 0,
				bonus: 0,
				contri: 0,
				valid_bet: 0
			},
			times: 0,
			//分页相关
			//总页数
			total: 0,
			//一页多少条
			pageSize: 20,
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
			options: [{ "label": "不更新", "value": "0" }, { "label": "30秒", "value": "30" }, { "label": "60秒", "value": "60" }, { "label": "120秒", "value": "120" }, { "label": "180秒", "value": "180" }],
			// 下接对象
			listObj: {},
			//会员层级
			levelSelectvalue: '',
			lockSwitch: 'ON',
			ascKey: {},
			confirmConfig: {
				state: false,
				msg: "",
				fn: ""
			},
			levelNum: 1,
			levelNUmRow: 1,
			// 按钮拼接对象
			btnLinkGroup: [],
			classObj: {
				state_blue: false,
				state_success: false,
				state_warning: false,
				state_danger: false,
				state_info: false
			},
			isInit: false
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
		//是否表格自适应宽度
		automation: {
			type: Boolean,
			default: false
		},
		//多选中表格数据之后是否显示锁定
		lockShow: Boolean,
		//表格hover展示数据
		hoverData: Array,
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
		},
		// 表格下拉数据更新
		listKey: {
			type: String,
			default: ''
		},
		listArr: Array,
		// 刷新数据
		showRefresh: {
			type: Boolean,
			default: false
		},
		// 自动刷新
		autoshowRefresh: {
			type: Boolean,
			default: false
		},
		// 表格单页条数
		pageSizeList: {
			type: Array,
			default: function () {
				return [10, 20, 50, 100, 200, 500, 1000];
			}
		},
		// 表格头部按钮配置
		headTextconf: {
			type: Object,
			default: function () {
				return { label: '', fn: '', show: false };
			}
		},
		// 刷新时间
		refreshTimes: {
			type: String,
			default: '0'
		},
		// 初始化创建
		isCreated: {
			type: Boolean,
			default: false
			//表格自适应滚动条
			//            scorAuto:{
			//            	type:Boolean,
			//	            default: false
			//            }
		} },
	components: {
		confirm: __WEBPACK_IMPORTED_MODULE_1__confirm_vue___default.a
	},
	methods: {
		// 数据初始化
		reSet() {
			//表格初始化
			this.allChecked = false;
			this.checkList = [];
			this.rowsList = {};
			this.checkSum = 0;
			this.listOjb = null;
			this.levelNUmRow = 1;
			this.levelNum = 1;
			this.isInit = false;
			//总条数
			this.total = 20;
			//每次页条数
			this.pageSize = 20;
			//总页数
			this.pageCount = 1;
			//当前页
			this.currentPage = 1;
			// 其它数据
			this.otherData = {};
			this.tableDataList.splice(0, this.tableDataList.length);
			this.tableDataColen.splice(0, this.tableDataColen.length);
			this.columnList.splice(0, this.columnList.length);
			this.btnLinkGroup = this.btnLinkGroup.splice(0, this.btnLinkGroup);
		},
		//初始化数据
		Datainit(changeUrl) {
			let _this = this;
			this.loading = true;
			//总条数
			let total = this.total;
			//每次页条数
			let pageSize = this.pageSize;
			//总页数
			let pageCount = this.pageCount;
			//当前页
			let currentPage = changeUrl ? 1 : this.currentPage;
			this.otherData = {};
			let otherData = this.otherData;
			let colKey = this.sumKey;
			let columnList = _this.columnList || [];
			this.baseUrl = this.tableUrl;
			if (this.columnsUrl != "" && this.columnsUrl != undefined) {
				this.$http.get(this.columnsUrl, URLCONFIG).then(res => {
					columnList.splice(0, columnList.length);
					let columns = res && res.data && res.data.columns ? res.data.columns : [];
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
							if (columns[i].sort === true) {
								_this.$set(_this.ascKey, columns[i].prop, '');
							}
						}
					}
					// 取列表数据
					if (this.baseUrl != "" && this.baseUrl != undefined) {
						let query = {};
						if (this.query && this.query.toString().length > 0) {
							query = this.query;
						}
						if (this.pageSet) {
							let index = this.baseUrl.indexOf('?');
							if (index === -1) {
								this.baseUrl = this.baseUrl + "?page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 20 : pageSize);
							} else {
								let n = this.baseUrl.indexOf('page=');
								if (/standard/g.test(this.baseUrl) || /fast/g.test(this.baseUrl)) {
									//                                currentPage = currentPage;
								} else {
									currentPage = 1;
								}
								if (n > 0) {
									this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + currentPage || 1);
								} else {
									this.baseUrl = this.baseUrl + "&page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 20 : pageSize);
								}
								let m = this.baseUrl.indexOf('page_size=');
								if (m > 0) {
									this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + (pageSize === 0 ? 20 : pageSize));
								} else {
									this.baseUrl = this.baseUrl + "&page_size=20";
								}
							}
						}
						this.$http.get(this.baseUrl, URLCONFIG).then(res => {
							_this.tableDataList = [];
							_this.tableDataColen = [];
							let tableDate = res && res.data && res.data.data ? res.data.data : [];
							if (_this.getData) {
								let model = res.data || {};
								for (let k in model) {
									otherData[k] = model[k];
								}
							}
							let list = res && res.data && res.data.data && res.data.tableDemoDate || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
							if (res.data.data.length === undefined) {
								if (res.data.data.list != undefined && res.data.data.list.length) {
									list = res.data.data.list || [];
								}
							}
							_this.subTotalBet = {};
							_this.totalBet = {};
							if (res.data.attributes) {
								if (res.data.attributes.subTotalBet) {

									let obj = res.data.attributes.subTotalBet;
									for (let k in obj) {
										_this.subTotalBet[k] = obj[k];
									}
								}
								if (res.data.attributes.totalBet) {

									let obj = res.data.attributes.totalBet;
									for (let k in obj) {
										_this.totalBet[k] = obj[k];
									}
								}
								_this.total = res && res.data && res.data.attributes && res.data.attributes.total || 20;
								_this.pageSize = res && res.data && res.data.attributes && res.data.attributes.size || 20;
								_this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
								_this.currentPage = parseInt(res.data.attributes.page) ? parseInt(res.data.attributes.page) : 1;
							}
							if (list.length && list.length > 0) {
								for (let i in list) {
									// 根据列表配置写数据
									let temp = list[i],
									    tempobj = {};
									for (let m in temp) {
										tempobj[m] = temp[m];
									}
									_this.tableDataColen.push(tempobj);
									_this.tableDataList.push(_this.formatRowDate(list[i], columnList, i));
								}
								_this.initCheckList(list);
							} else if (tableDate.length && tableDate.length > 0) {
								let sumNumber = _this.sumNumber;
								for (let j in tableDate) {
									_this.tableDataList.push(_this.formatRowDate(tableDate[j], columnList, j));
									let temp = tableDate[j],
									    tempobj = {};
									for (let m in temp) {
										tempobj[m] = temp[m];
									}
									_this.tableDataColen.push(tempobj);
								}
								this.initCheckList(tableDate);
							}
							_this.tableDataList.prototype.clone = function () {
								return [].concat(this);
							};
							if (_this.getData) {
								_this.$emit("get-table-data", {
									"item": _this.tableDataColen,
									"allData": otherData
								});
							}
							_this.loading = false;
						}).catch(e => {
							if (_this.getData) {
								_this.$emit("get-table-data", {
									"item": _this.tableDataColen,
									"allData": otherData
								});
							}
							_this.loading = false;
							//                        _this.$message.error(LANG['网络问题，请稍后重试！'] || '网络问题，请稍后重试！');
						});
					} else {
						this.loading = false;
						// 通过formData渲染表格
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
							_this.pageSize = tableDate.page_size ? tableDate.page_size : 20;
							_this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
							_this.currentPage = tableDate.page ? tableDate.page : 1;
							for (let i in list) {
								_this.tableDataList.push(_this.formatRowDate(list[i], columnList, i));
								let temp = list[i],
								    tempobj = {};
								for (let m in temp) {
									tempobj[m] = temp[m];
								}
								_this.tableDataColen.push(tempobj);
							}
							_this.initCheckList(list);
						}
						if (_this.getData) {
							_this.$emit("get-table-data", {
								"item": _this.tableDataColen,
								"otherData": _this.otherData
							});
						}
					}
				}).catch(e => {
					_this.loading = false;
					_this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
				});
			} else {
				this.loading = false;
			}
		},
		formatRowDate(row, col, index) {
			let _this = this;
			let obj = {},
			    keys = [];
			for (let k in row) {
				obj[k] = row[k];
				for (let i = 0; i < col.length; i++) {
					keys = col[i].prop ? col[i].prop.split(',') : ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'];
					if (col[i].prop === k || keys[0] === k || keys[1] === k || keys[2] === k || keys[3] === k || keys[4] === k || keys[5] === k) {
						if (col[i].type != undefined) {
							switch (col[i].type) {
								case 'date':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatDate(row[k], 'yyyy-MM-dd HH:mm:ss');
									}
									continue;
								case 'contentFilterLink':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatContentFilterLink(row, row['game_name'], col[i].prop);
									}
									continue;
								case 'filterConnect':
									obj[k] = tableFilter.formatContentFilter(row, col[i].prop, col[i].filters, col[i].delimiter);
									continue;
								case 'regular':
									obj[k] = row[k];
									continue;
								case 'allState':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatAllState(row, col[i].prop, col[i].formatkey, col[i].truelabel, col[i].falselabel);
									}
									continue;
								case 'connectProp':
									if (obj[keys[1]] === row[keys[1]]) {
										obj[keys[1]] = tableFilter.formatConnectProp(row, col[i].prop);
									}
									continue;
								case 'connectPropMoney':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatContentFilterLink(row, col[i].prop);
									}
									continue;
								case 'moneyDelimiter':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatMoneyDelimiter(item[col[i].prop], col[i].delimiter);
									}
									continue;
								case 'connectAdd':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatConnectAdd(row, col[i].prop);
									}
									continue;
								case 'linkConnectAdd':
									if (obj[keys[0]] === row[keys[0]]) {
										obj[keys[0]] = tableFilter.formatConnectAdd(row, col[i].prop);
									}
									continue;
								case 'img':
									let str = row[col[i].prop] || '';
									if (str.toString().length < 5) {
										obj[k] = '暂无图片';
									} else if (col[i].imgtype && col[i].imgtype == 'bank') {
										obj[k] = '/static/img/bank/' + row['code'] + '.png';
									} else if (row[col[i].prop].toString().length > 5 && col[i].imgtype !== 'bank') {
										obj[k] = tableFilter.getrpiurl(row[col[i].prop]);
									}
									continue;
								case 'object,prop':
									obj[keys[0]] = row[keys[0]];
									if (keys[2] != undefined) {
										obj[keys[2]] = row[keys[2]];
									}
									continue;
								case 'object':
									if (col[i].formatKey && col[i].formatKey != 'bank') {
										if (obj[keys[1]] === row[keys[1]]) {
											obj[keys[1]] = tableFilter.formatObject(row, col[i].prop);
										}
									} else {
										obj[keys[0]] = row[keys[0]];
									}
									continue;
								case 'array':
									if (col[i].filterType && col[i].filterType == 'array' && col[i].type == 'array' && obj[k] === row[k]) {
										obj[k] = tableFilter.formatArray(row[k], col[i].separators);
									}
									continue;
								case 'connect_odds_type':
									if (obj[keys[0]] === row[keys[0]]) {
										obj[keys[0]] = tableFilter.formatConnectodds(row, col[i].prop);
									}
									continue;
								case 'json':
									if (col[i].arr) {
										if (obj[k] === row[k]) {
											obj[k] = tableFilter.formatContentFilterLink(row[col[i].prop], col[i].arr);
										}
									} else {
										obj[k] = '';
									}
									continue;
								case 'connect':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatConnect(row, col[i].prop, col[i].delimiter, col[i].type);
									}
									continue;
								case 'connectInt':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatConnect(row, col[i].prop, col[i].delimiter, col[i].type, 'int');
									}
									continue;
								case 'connect,twoDivisionMoney':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatConnectTwo(row, col[i].prop, col[i].delimiter);
									}
									continue;
								case 'connectArray':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatConnectArray(row, col[i].prop);
									}
									break;
								case 'connectLottery':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatConnectLottery(row, col[i].prop, _this.lotteryType);
									}
									continue;
								case 'contentDate':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatContentDate(row, col[i].prop, _this.lotteryType);
									}
									continue;
								case 'connect,divisionMoney':
									let key = col[i].prop.split(',')[0];
									obj[key] = tableFilter.formatConnect(row, col[i].prop, col[i].delimiter, col[i].type);
									continue;
								case 'link':
									obj[k] = row[k];
									continue;
								case 'linkDivisionMoney':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatMoney(row[k]);
									}
									continue;
								case 'linkNumberButton':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatLinkNumberButton(row, col[i].prop, _this.btnLinkGroup, index);
									}
									continue;
								case 'ipBlack':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatSex(row[col[i].prop], col[i].filters);
									}
									continue;
								case 'divisionMoney':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatMoney(row[col[i].prop]);
									}
									continue;
								case 'divisionMoney,fours':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatMoney(row[col[i].prop], 4);
									}
									continue;
								case 'subtract':
									if (obj[keys[keys.length - 1]] == undefined) {
										obj[keys[keys.length - 1]] = tableFilter.formatSubtract(row, col[i].prop);
									}
									continue;
								case 'lotteryCustom':
									if (obj[k] === row[k]) {
										obj[k] = tableFilter.formatLotteryCustom(row[col[i].prop], _this.tableUrl);
									}
									continue;
								// 定制拼接过滤字段，并除100
								case 'filterAdddivisionMoney':
									if (obj[k] === row[k]) {
										obj[keys[1]] = tableFilter.formatContentFilterAdd(row, col[i].prop);
									}
									continue;
								default:
									obj[k] = row[k];
									continue;
							}
						} else if (col[i].filterType && col[i].filterType == 'json' && col[i].type == 'json') {
							obj[k] = tableFilter.formatJson(row[col[i].prop]);
						} else if (col[i].filterType && col[i].filterType == 'array' && col[i].type == 'array') {
							obj[k] = tableFilter.formatArray(row[col[i].prop], col[i].separators);
						} else if (col[i].filters != undefined) {
							obj[k] = tableFilter.formatSex(row[col[i].prop], col[i].filters);
						} else if (!col[i].type) {
							obj[k] = row[col[i].prop];
						}
						break;
					}
				}
			}
			return obj;
		},
		//处理操作公共按钮事件
		doHandle(event, row, fn, prop, btn) {
			this.$emit("do-handle", {
				"event": event,
				"row": row,
				"fn": fn,
				"page": this.currentPage,
				"prop": prop,
				"btn": btn,
				"x": event.pageX,
				"y": event.pageY
			});
		},
		//处理表格的按钮的hover展示信息
		//            doHover(row, fn) {
		//                let event = window.event || event;
		//                this.$emit("do-hover", {
		//                    "event": event,
		//                    "row": row,
		//                    "fn": fn,
		//                    "page": this.currentPage
		//                });
		//            },
		//写各状态初始
		initCheckList(arr) {
			for (let i in arr) {
				this.$set(this.checkList, i, false);
			}
		},
		// 头部文字事件
		headTextFn(event, obj) {
			this.$emit("do-handle", {
				"event": event,
				"row": {},
				"page": this.currentPage,
				"fn": obj.fn
			});
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
				for (let i in this.tableDataColen) {
					arrs.push(this.tableDataColen[i]);
					rows[i] = this.tableDataColen[i];
				}
				this.checkSum = this.tableDataColen.length;
			} else {
				bl = false;
				this.checkSum = 0;
				arrs.splice(0, arrs.length);
				// rows = null;
				for (let i in rows) {
					delete rows[i];
				}
			}
			for (let k in model) {
				checks[k] = bl;
			}
			this.$emit("do-operation", {
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
				rows[num] = this.tableDataColen[num];
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
				"rows": arrs,
				"page": this.currentPage
			});
		},
		//切换每页条数
		doSizePage(v) {
			this.tableDataColen.splice(0, this.tableDataColen.length);
			this.loading = true;
			let total = this.total;
			let pageSize = this.pageSize;
			let pageCount = this.pageCount;
			let page = 0;
			let _this = this;
			if (v == 1000) {
				// 选择1000条后，默认刷新时间为120秒
				this.times = 120;
			}
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
					this.baseUrl = this.baseUrl + "&page_size=" + 20;
				}
			}
			let otherData = {};
			this.$http.get(this.baseUrl, URLCONFIG).then(res => {
				_this.total = res.data.attributes.total || 20;
				_this.pageSize = res.data.attributes.size || 20;
				_this.pageCount = Math.ceil(this.total / this.pageSize);
				_this.currentPage = 1;

				if (_this.getData) {
					let model = res.data || {};
					for (let k in model) {
						otherData[k] = model[k];
					}
				}
				let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
				if (tableDate.list) {
					for (let i in tableDate.list) {
						_this.tableDataList.push(_this.formatRowDate(tableDate.list[i], this.columnList, i));
						let temp = tableDate.list[i],
						    tempobj = {};
						for (let m in temp) {
							tempobj[m] = temp[m];
						}
						_this.tableDataColen.push(tempobj);
					}
				} else {
					for (let i in tableDate) {
						_this.tableDataList.push(_this.formatRowDate(tableDate[i], this.columnList, i));
						let temp = tableDate[i],
						    tempobj = {};
						for (let m in temp) {
							tempobj[m] = temp[m];
						}
						_this.tableDataColen.push(tempobj);
					}
				}
				if (_this.getData) {
					_this.$emit("get-table-data", {
						"item": _this.tableDataColen,
						"allData": otherData
					});
				}
				_this.loading = false;
			}).catch(e => {
				_this.loading = false;
				if (_this.getData) {
					_this.$emit("get-table-data", {
						"item": _this.tableDataColen,
						"allData": otherData
					});
				}
				_this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
			});
		},
		//切换页数
		doCurrentChange(v) {
			this.loading = true;
			let total = this.total;
			let pageSize = this.pageSize;
			let pageCount = this.pageCount;
			this.tableDataColen.splice(0, this.tableDataColen.length);
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
					this.baseUrl = this.baseUrl + "&page_size=" + 20;
				}
			}
			this.$http.get(this.baseUrl, URLCONFIG).then(res => {
				_this.total = res.data.attributes.total || 20;
				_this.pageSize = res.data.attributes.size || 20;
				_this.pageCount = Math.ceil(this.total / this.pageSize);
				_this.currentPage = res.data.attributes.page || 1;
				let otherData = {};
				if (_this.getData) {
					let model = res.data || {};
					for (let k in model) {
						otherData[k] = model[k];
					}
				}
				let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
				if (tableDate.list) {
					for (let i in tableDate.list) {
						_this.tableDataList.push(_this.formatRowDate(tableDate.list[i], this.columnList, i));
						let temp = tableDate.list[i],
						    tempobj = {};
						for (let m in temp) {
							tempobj[m] = temp[m];
						}
						_this.tableDataColen.push(tempobj);
					}
				} else {
					for (let i in tableDate) {
						_this.tableDataList.push(_this.formatRowDate(tableDate[i], this.columnList, i));
						let temp = tableDate[i],
						    tempobj = {};
						for (let m in temp) {
							tempobj[m] = temp[m];
						}
						_this.tableDataColen.push(tempobj);
					}
				}
				if (_this.getData) {
					_this.$emit("get-table-data", {
						"item": _this.tableDataColen,
						"allData": otherData
					});
				}
				_this.loading = false;
			}).catch(e => {
				_this.loading = false;
				if (_this.getData) {
					_this.$emit("get-table-data", {
						"item": _this.tableDataColen,
						"allData": otherData
					});
				}
				_this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
			});
		},
		//批量操作
		doOperation(fn) {
			let model = this.rowsList;
			let arrs = [];
			for (let k in model) {
				arrs.push(model[k]);
			}
			this.$emit("do-operation", {
				"fn": fn,
				"rows": arrs,
				"page": this.currentPage
			});
		},
		// 连接拼接单击事件
		showLink(fn, row) {
			this.$emit("do-handle", {
				"row": row,
				"fn": fn,
				"page": this.currentPage
			});
		},
		//            updateFormData() {
		//                if (this.tableData.list.length > 0) {
		//                    this.Datainit();
		//                }
		//            },
		//            数据变化事件
		changes(index, row, keys) {
			if (!row[keys]) {
				if (this.levelNUmRow % 2 === 0) {
					this.$message.error(LANG['请选择你要修改的层级！'] || '请选择你要修改的层级！');
				}
			} else {
				if (row.lock == 1) {
					this.$message.error(LANG['层级已锁定，不可操作！'] || '层级已锁定，不可操作！');
					row[keys] = this.tableDataColen[index][keys];
					return;
				}
				if (this.levelNUmRow === 0) {
					this.levelNUmRow = 1;
				} else {
					this.levelNUmRow++;
				}
				if (this.levelNUmRow % 2 === 0) {
					let level = '';
					for (let k = 0; k < this.listArr.length; k++) {
						if (this.listArr[k].value === row[keys]) {
							level = this.listArr[k].label;
						}
					}
					this.confirmConfig.state = true;
					this.confirmConfig.msg = (this.LANG['确定将层级修改为'] || '确定将层级修改为') + '"' + level + '"' + (this.LANG['吗？'] || '吗？');
					this.confirmConfig.fn = "doChanges";
					this.confirmConfig.obj = { row: row, keys: keys, index: index };
					//                        this.levelNUmRow -- ;
				}
			}
		},
		changeSwit(index, row, keys) {
			if (index >= 0) {
				this.$emit("do-Lock", {
					"row": row,
					"index": index,
					"key": keys
				});
			}
		},
		//保存表格数据
		dataSave() {
			this.$emit("data-save", {
				"dataList": this.tableDataColen
			});
		},
		getTableWidth() {

			//                if (this.fullWidth) {
			//                    let sum = 0;
			//                    this.$http.get(this.columnsUrl, URLCONFIG).then((res) => {
			//                        if (res.data.columns) {
			//                            let list = res.data.columns;
			//                            for (let k in list) {
			//                                if (list[k].width) {
			//                                    sum = sum + parseInt(list[k].width);
			//                                }
			//                            }
			//                            sum = sum > 1130 ? sum : 1130;
			//                            if(localStorage.menu_type =='left'){
			//                                if ($(window).width() > 1200 && this.automation == false ) {
			//                                    $('.tablesOverall').css('width', ($(window).width() - 136)+'px').addClass('socr').find('table').css('min-width', sum + 'px');
			//                                }
			//                                $(window).resize(function(){
			//                                    if ($(window).width() > 1200 && this.automation == false) {
			//                                        $('.tablesOverall').css('width',($(window).width() - 136)+'px').addClass('socr').find('table').css('min-width', sum + 'px');
			//                                    }
			//                                })
			//                            }else {
			//                                if ($(window).width() > 1200 && this.automation == false ) {
			//                                    $('.tablesOverall').css('width', ($(window).width()-136)+'px').addClass('socr').find('table').css('min-width', sum + 'px');
			//                                }
			//                                $(window).resize(function(){
			//                                    if ($(window).width() > 1200 && this.automation == false) {
			//                                        $('.tablesOverall').css('width', ($(window).width() - 136)+"px").addClass('socr').find('table').css('min-width', sum + 'px');
			//                                    }
			//                                })
			//                            }
			//                        }
			//                    })
			//                }
		},
		// 导出数据
		exportData() {
			this.$emit("export-data");
		},
		// 切换刷新时间
		changeTimes(v) {
			let _this = this;
			if (parseInt(v) === 0) {
				window.clearInterval(window.PAGEREF);
			} else {
				this.createTimes(parseInt(v));
			}
		},
		// 创建定时器
		createTimes(times) {
			let _this = this;
			window.clearInterval(window.PAGEREF);
			window.PAGEREF = setInterval(function () {
				_this.Datainit();
			}, times * 1000);
		},
		//批量获取会员层级
		//            handelSelect(){
		//                this.$emit('do-handelSelect',{
		//                    value:this.levelSelectvalue
		//                })
		//            },
		//            handelLock(){
		//                this.$emit('do-handelLock',{
		//                    value:this.lockSwitch
		//                })
		//            },
		// 批量保存操作
		alldataSave() {
			let model = this.rowsList;
			let arrs = [];
			for (let k in model) {
				arrs.push(model[k]);
			}
			this.$emit('save-all-data', {
				"rows": arrs,
				"level": this.levelSelectvalue,
				"lock": this.lockSwitch
			});
		},
		//批量下啦选中
		all_select_data(value) {
			if (this.levelNum === 0) {
				this.levelNum = 1;
			} else {
				this.levelNum++;
			}
			if (!value) {
				if (this.levelNum % 2 === 0) {
					this.$message.error(LANG['请选择你要修改的层级！'] || '请选择你要修改的层级！');
				}
			} else if (this.levelNum % 2 === 0) {
				let level = '';
				for (let k = 0; k < this.listArr.length; k++) {
					if (this.listArr[k].value === value) {
						level = this.listArr[k].label;
					}
				}
				this.confirmConfig.state = true;
				this.confirmConfig.msg = (this.LANG['确定将层级修改为'] || '确定将层级修改为') + '"' + level + '"' + (this.LANG['吗？'] || '吗？');
				this.confirmConfig.fn = "updateLevel";
			}
		},
		doCancel(obj) {
			if (obj && obj.obj && obj.obj.index != undefined && obj.obj.keys && obj.obj.row) {
				this.levelNUmRow = 0;
				obj.obj.row[obj.obj.keys] = this.tableDataColen[obj.obj.index][obj.obj.keys];
			} else {
				this.levelNum = 0;
				this.levelSelectvalue = '';
				this.lockSwitch = false;
			}
		},
		// 确认修改层级
		doConfirm(obj) {
			let _this = this;
			if (obj && obj.fn) {
				switch (obj.fn) {
					case 'updateLevel':
						let model = this.rowsList;
						let arrs = [];
						for (let k in model) {
							arrs.push(model[k]);
						}
						_this.$emit('all_select_data', {
							"rows": arrs,
							"level": _this.levelSelectvalue,
							"lock": _this.lockSwitch
						});
						_this.levelNum = 0;
						break;
					case 'doChanges':
						if (obj.obj && obj.obj.index >= 0) {
							_this.$emit("do-changes", {
								"row": obj.obj.row,
								"index": obj.obj.index,
								"key": obj.obj.keys
							});
							_this.tableDataColen[obj.obj.index][obj.obj.keys] = obj.obj.row[obj.obj.keys];
							_this.levelNUmRow = 0;
						}
						break;
				}
			}
		},
		//批量switch操作
		all_switch_data(value) {
			let temp = [],
			    tempModel = this.rowsList;
			for (let k in tempModel) {
				temp.push(tempModel[k]);
			}
			this.$emit('all_switch_data', {
				"rows": temp,
				"lock": value,
				"level": this.levelSelectvalue
			});
			//                this.lockNum ++;
			//                let str = '';
			//                if(value){
			//                    str = this.LANG['确定锁定所选层级吗？'] || '确定锁定所选层级吗';
			//                }else{
			//                    str = this.LANG['确定取消锁定所选层级吗？'] || '确定取消锁定所选层级吗';
			//                }
			//                if(this.lockNum % 2 === 0){
			//                    this.confirmConfig.state = true;
			//                    this.confirmConfig.msg = str;
			//                    this.confirmConfig.fn = "lockLevel";
			//                }
		},

		// 排序
		doSort(prop, type) {
			let temp = this.ascKey[prop];
			for (let k in this.ascKey) {
				this.ascKey[k] = '';
			}
			if (temp === 'ascending') {
				this.ascKey[prop] = 'descending';
			} else if (temp === 'descending' || temp === '') {
				this.ascKey[prop] = 'ascending';
			}

			if (this.ascKey[prop] === 'ascending') {
				this.tableDataList.sort(function (a, b) {
					let tmepa, tempb;
					if (type === 'date') {
						tmepa = !isNaN(Date.parse(a[prop])) ? Date.parse(a[prop]) : 0;
						tempb = !isNaN(Date.parse(b[prop])) ? Date.parse(b[prop]) : 0;
					} else {
						tmepa = a[prop] ? a[prop] : 0;
						tempb = b[prop] ? b[prop] : 0;
					}
					return tmepa - tempb;
				});
			} else {
				this.tableDataList.sort(function (a, b) {
					let tmepone, temptwo;
					if (type === 'date') {
						tmepone = !isNaN(Date.parse(a[prop])) ? Date.parse(a[prop]) : 0;
						temptwo = !isNaN(Date.parse(b[prop])) ? Date.parse(b[prop]) : 0;
					} else {
						tmepone = a[prop] ? a[prop] : 0;
						temptwo = b[prop] ? b[prop] : 0;
					}
					return temptwo - tmepone;
				});
			}
		},
		// 算表格宽度
		autoTable(sum) {
			//                let _this = this;
			//                let tableW = $('.tablesOverall'), top_contRight = $('.top_contRight'), oWin = window.innerWidth;
			//                sum = sum > 1130 ? sum : 1130;
			//                let menu_type = localStorage.menu_type == 'top' ? localStorage.menu_type : 'left';
			// automation 是否开关表格自适应 true 是关闭
			//                if (_this.automation == false) {
			//                    if (menu_type == 'left') {
			//                        $("#table_card,#tables").removeClass('w100_impor');
			//                        tableW.parents('.box-card').css({'width': (oWin - 100) + 'px', 'min-width': '1170px'});
			//                        tableW.css({
			//                            'width': (oWin - 136) + 'px',
			//                            'min-width': '1130px'
			//                        }).addClass('socr').find('table').css('min-width', sum < 1130 ? 1130 : sum + 'px');
			//                    } else if (menu_type == 'top') {
			//                        $("#table_card,#tables").removeClass('w100_impor');
			//                        top_contRight.css('width', (oWin - 64) + 'px')
			//                        tableW.css({
			//                            'width': (oWin - 64) + 'px',
			//                            'min-width': '1170px'
			//                        }).addClass('socr').find('table').css('min-width', sum < 1200 ? 1200 : sum + 'px');
			//                    }
			//                } else {
			//                    $("#table_card,#tables").addClass('w100_impor');
			//                    tableW.removeClass('socr');
			//                    tableW.parents('.box-card').css({'width': "100%"});
			//                }
		},
		doRefresh() {
			this.Datainit();
		}
	},
	filters: {
		getStatusColor: function (value, statusKey) {
			let obj = {};
			var statsu_str = "";
			// statusKey 代理审核页面状态个别处理
			if (statusKey && statusKey === 'agentAudit') {
				if (value == "0") {
					statsu_str = "sucess_text";
				} else if (value == "2") {
					statsu_str = "state_danger";
				} else if (value == "3") {
					statsu_str = "state_info";
				}
				obj[statsu_str] = true;
			} else {
				if (value == "1" || value == "enabled" || value == "paid" || value == 'pass' || value == 'underway') {
					statsu_str = "sucess_text";
				} else if (value == "0" || value == "disabled" || value == "rejected" || value == "failed" || value == "2" || value == 'open') {
					statsu_str = "state_danger";
				} else if (value == "4" || value == 'cancel' || value == 'canceled' || value == 'refused') {
					statsu_str = "state_info";
				} else if (value == "paid" || value == "3") {
					statsu_str = "state_success";
				} else if (value == "applying" || value == "pending") {
					statsu_str = "state_warning";
				}
				obj[statsu_str] = true;
			}
			return obj;
		}
	},
	watch: {
		//            '$route'() {//监听路由改变
		////                this.autoTable();
		//            },
		//            'tableData.list': 'updateFormData',
		tableUrl: function (newQuestion) {
			if (newQuestion && this.isInit) {
				this.Datainit('changeUrl');
			}
		},
		tableDataList() {
			this.getTableWidth();
		},
		//            columnsUrl(newval){
		//                if(newval && this.isInit){
		//                    this.Datainit();
		//                }
		//            },
		//根据是否更新，更新数据
		updated: function (newval) {
			if (newval && this.isInit) {
				this.Datainit();
			}
		},
		formType: function (newval) {
			if ((newval == "add" || newval == "edit" || newval == "delete") && this.isInit) {
				this.Datainit();
			}
		},
		refreshTimes: function (newval) {
			this.times = newval.toString();
		},
		opts: function (newval) {
			if (newval && this.isInit) {
				this.Datainit();
			}
		},
		// 根据刷新状态创建定时器
		autoshowRefresh: function (newval) {
			let _this = this;
			window.clearInterval(window.PAGEREF);
			window.PAGEREF = null;
			if (newval) {
				if (parseInt(this.times) > 0 && (this.$route.path === '/onLineReceipts' || this.$route.path === '/offlineReceipts' || this.$route.path === '/memberGetOut' || this.$route.path === '/noteManagement' || this.$route.path === '/apply')) {
					let times = parseInt(this.times) > 0 ? parseInt(this.times) : 0;
					if (times >= 30) {
						_this.createTimes(parseInt(times));
					}
				} else {
					this.Datainit();
				}
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
		if (this.isCreated) {
			if (!this.isInit) {
				this.isInit = true;
			}
			this.Datainit();
		}
	},
	mounted() {
		let sum = 0,
		    _this = this;
		this.$nextTick(() => {
			if (this.columnsUrl) {
				this.$http.get(this.columnsUrl, URLCONFIG).then(res => {
					if (res.data.columns) {
						let list = res.data.columns;
						for (let k in list) {
							if (list[k].width) {
								sum = sum + parseInt(list[k].width);
							}
						}
					}
				});
				this.autoTable(sum);
				$(window).on('load resize', function () {
					//                        _this.autoTable(sum);

				});
				this.$nextTick(() => {
					EVENT.$emit('table.loaded');
				});
			}
		});
	},
	activated() {
		let _this = this;
		if (!this.isInit) {
			this.isInit = true;
		}
		window.PAGEREF = null;
		if (this.$route.path === '/onLineReceipts' || this.$route.path === '/offlineReceipts' || this.$route.path === '/memberGetOut' || this.$route.path === '/apply') {
			this.times = '30';
		} else {
			this.times = '0';
		}
		if (parseInt(this.times) > 0 && this.autoshowRefresh && (this.$route.path === '/onLineReceipts' || this.$route.path === '/offlineReceipts' || this.$route.path === '/memberGetOut' || this.$route.path === '/noteManagement' || this.$route.path === '/apply')) {
			let times = parseInt(this.times) > 0 ? parseInt(this.times) : 0;
			if (times >= 30) {
				_this.Datainit();
				_this.createTimes(parseInt(times));
			}
		} else {
			if (!this.isCreated) {
				this.Datainit();
			}
		}
		Bus.$on('form_query', function (v) {
			if (v) {
				_this.Datainit();
			}
		});
		Bus.$emit('form_Reset', true);
	},
	deactivated() {
		window.clearInterval(window.PAGEREF);
		Bus.$off('form_query');
		this.reSet();
	}
});

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "#tableSingle .el-table,#tableSingle .el-table a,#tableSingle .el-table button,#tableSingle .el-table th{font-size:.8rem}#tableSingle .el-table td,#tableSingle .el-table th{min-width:60px}#tableSingle .el-table .cell,#tableSingle .el-table th>div{padding-left:4px;padding-right:0}#tableSingle .col2{background-color:#fafafa}#tableSingle .el-table .sucess_text{color:#13ce66}#tableSingle .el-table .info_text{color:#20a0ff}#tableSingle .el-table .danger_text{color:#ff4949}#tableSingle .fontWeight{font-weight:500}#tableSingle .linkCell{min-width:50px}#tableSingle .line_height30{line-height:30px}.w100_impor{width:100%!important}", ""]);

// exports


/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("573e950b", content, true);

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    ref: "tableSingle",
    attrs: {
      "id": "tableSingle"
    }
  }, [(_vm.showExport || _vm.autoshowRefresh) ? _c('el-col', {
    staticClass: "tRight mb20"
  }, [(_vm.autoshowRefresh) ? _c('span', [_vm._v(_vm._s(_vm.LANG['刷新'] || '刷新'))]) : _vm._e(), _vm._v(" "), (_vm.autoshowRefresh) ? _c('el-select', {
    staticClass: "intW mr10",
    attrs: {
      "placeholder": "请选择",
      "size": "small"
    },
    on: {
      "change": _vm.changeTimes
    },
    model: {
      value: (_vm.times),
      callback: function($$v) {
        _vm.times = $$v
      },
      expression: "times"
    }
  }, _vm._l((_vm.options), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  })) : _vm._e(), _vm._v(" "), (_vm.showExport) ? _c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.exportData($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['导出'] || '导出') + "\n        ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (!_vm.showExport) ? _c('el-col', {
    staticClass: "tRight mb20"
  }, [_c('el-col', {
    staticStyle: {
      "text-align": "left",
      "margin-bottom": "10px"
    },
    attrs: {
      "span": 12
    }
  }, [(_vm.headTextconf.show) ? _c('a', {
    staticClass: "linkCell tag_link tCent",
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.headTextFn(_vm.$evnet, _vm.headTextconf)
      }
    }
  }, [_vm._v(_vm._s(_vm.headTextconf.label))]) : _vm._e()]), _vm._v(" "), (_vm.showRefresh) ? _c('el-col', {
    staticStyle: {
      "margin-bottom": "10px"
    },
    attrs: {
      "span": 12
    }
  }, [_c('el-button', {
    staticClass: "addBut",
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.doRefresh($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['刷新'] || '刷新') + " ")])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.saveData && _vm.checkSum === 0) ? _c('div', {
    staticClass: "tRight mb10"
  }, [_c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        return _vm.dataSave($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.LANG['保存'] || '保存'))])], 1) : _vm._e(), _vm._v(" "), (_vm.checkSum && _vm.checkList.length) ? _c('el-col', {
    staticClass: "ft14 line_height30"
  }, [_c('label', {
    staticClass: "fl mr10 pleft mb10",
    attrs: {
      "for": ""
    }
  }, [_vm._v(_vm._s(_vm.LANG['您选择了'] || '您选择了') + "\n            "), _c('span', {
    staticClass: "selecttext"
  }, [_vm._v(_vm._s(_vm.checkSum))]), _vm._v(_vm._s(_vm.LANG['条数据'] || '条数据') + " ")]), _vm._v(" "), (_vm.tabOperation != undefined) ? _c('div', {
    staticClass: "btngroup"
  }, _vm._l((_vm.tabOperation), function(opt, index) {
    return _c('el-button', {
      key: index,
      attrs: {
        "size": "small"
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.doOperation(opt.fn)
        }
      }
    }, [_vm._v(_vm._s(_vm.LANG[opt.label] || opt.label) + "\n            ")])
  })) : _vm._e(), _vm._v(" "), (_vm.lockShow) ? _c('div', {
    staticClass: "w40"
  }, [_c('el-select', {
    staticClass: "intW",
    attrs: {
      "placeholder": "请选择",
      "size": "small"
    },
    on: {
      "change": _vm.all_select_data
    },
    model: {
      value: (_vm.levelSelectvalue),
      callback: function($$v) {
        _vm.levelSelectvalue = $$v
      },
      expression: "levelSelectvalue"
    }
  }, _vm._l((_vm.listArr), function(item) {
    return _c('el-option', {
      key: item.value,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    })
  })), _vm._v(" "), _c('el-switch', {
    attrs: {
      "on-value": "1",
      "off-value": "0"
    },
    on: {
      "change": _vm.all_switch_data
    },
    model: {
      value: (_vm.lockSwitch),
      callback: function($$v) {
        _vm.lockSwitch = $$v
      },
      expression: "lockSwitch"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "comments font12 ml10 help_gray"
  }, [_vm._v("提示：锁定后的会员层级不能被移动分层。")])], 1) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('el-card', {
    staticClass: "box-card pb",
    attrs: {
      "id": "table_card"
    }
  }, [_c('div', {
    staticClass: "tablesOverall",
    attrs: {
      "id": "tables"
    }
  }, [_c('table', {
    staticClass: "el-table w100 el-table--border",
    attrs: {
      "cellspacing": "0",
      "cellpadding": "0",
      "border": "1"
    }
  }, [_c('tr', [(_vm.tableCheck && _vm.tableDataList.length) ? _c('th', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('div', {
    staticClass: "cell"
  }, [_c('el-checkbox', {
    on: {
      "change": _vm.allchecked
    },
    model: {
      value: (_vm.allChecked),
      callback: function($$v) {
        _vm.allChecked = $$v
      },
      expression: "allChecked"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), (_vm.tableIndex && _vm.tableDataList.length) ? _c('th', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.LANG['序号'] || '序号'))])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.columnList), function(col, index) {
    return (col.disabled == true) ? _c('th', {
      key: index,
      staticClass: "is-leaf",
      class: _vm.ascKey[col.prop] ? _vm.ascKey[col.prop] : ''
    }, [(col.sort) ? _c('div', {
      staticClass: "cell",
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.doSort(col.prop, col.sortType)
        }
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.LANG[col.label] || col.label) + "\n                            "), (col.sort) ? _c('span', {
      staticClass: "caret-wrapper"
    }, [_c('i', {
      staticClass: "sort-caret ascending"
    }), _vm._v(" "), _c('i', {
      staticClass: "sort-caret descending"
    })]) : _vm._e()]) : _c('div', {
      staticClass: "cell"
    }, [_vm._v(_vm._s(_vm.LANG[col.label] || col.label) + " "), (col.sortRemarks) ? _c('span', {
      staticClass: "defutFont",
      staticStyle: {
        "font-size": "10px"
      }
    }, [_c('el-tooltip', {
      attrs: {
        "content": col.sortRemarks || '前台实际展示时数字大的排在前面。',
        "placement": "right",
        "effect": "light"
      }
    }, [_c('i', {
      staticClass: "el-icon-information"
    })])], 1) : _vm._e()])]) : _vm._e()
  })], 2), _vm._v(" "), _vm._l((_vm.tableDataList), function(item, k) {
    return (_vm.tableDataList.length) ? _c('tr', {
      key: k,
      class: {
        col2: !parseInt((k + 1) % 2)
      }
    }, [(_vm.tableCheck && _vm.tableDataList.length) ? _c('td', {
      staticClass: "el-table_1_column_19",
      attrs: {
        "width": "55px"
      }
    }, [_c('div', {
      staticClass: "cell tCent"
    }, [_c('el-checkbox', {
      on: {
        "change": function($event) {
          _vm.thisChecked(k)
        }
      },
      model: {
        value: (_vm.checkList[k]),
        callback: function($$v) {
          _vm.$set(_vm.checkList, k, $$v)
        },
        expression: "checkList[k]"
      }
    })], 1)]) : _vm._e(), _vm._v(" "), (_vm.tableIndex && _vm.tableDataList.length) ? _c('td', {
      staticClass: "el-table_ 1_column_19"
    }, [_c('div', {
      staticClass: "cell tCent"
    }, [_vm._v(_vm._s(parseInt(k) + 1))])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.columnList), function(col, index) {
      return (col.disabled == true) ? _c('td', {
        key: index,
        staticClass: "el-table_1_column_19"
      }, [(col.type == 'date' || col.type == 'allState' || col.type == 'array' || col.type == 'filterConnect' || col.type == 'divisionMoney,fours') ? _c('div', {
        staticClass: "cell"
      }, [_c('span', {
        class: {
          state_blue: /new/.test(_vm.tableDataColen[k][col.prop])
        }
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (col.type == 'divisionMoney' && col.setred) ? _c('div', {
        staticClass: "cell"
      }, [_c('span', {
        class: {
          state_danger: parseFloat(item[col.prop]) < 0
        }
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (col.type == 'connectArray') ? _c('div', {
        staticClass: "cell"
      }, [_c('span', [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (col.type == 'divisionMoney' && !col.setred) ? _c('div', {
        staticClass: "cell"
      }, [_c('span', [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (col.type == 'lottory_play') ? _c('div', {
        staticClass: "cell"
      }, [_c('p', [_vm._v(_vm._s(_vm.LANG['下注'] || '下注') + " ：" + _vm._s(item[col.prop.split(',')[0]] != undefined ? item[col.prop.split(',')[0]] : ''))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.LANG['开奖'] || '开奖') + " ：" + _vm._s(item[col.prop.split(',')[1]] != undefined ? item[col.prop.split(',')[1]] : ''))])]) : _vm._e(), _vm._v(" "), (col.type == 'connectProp') ? _c('div', {
        staticClass: "cell"
      }, [_c('span', [_vm._v(_vm._s(item[col.prop.split(',')[1]]))])]) : _vm._e(), _vm._v(" "), (col.type == 'filterAdddivisionMoney') ? _c('div', {
        staticClass: "cell"
      }, [_c('span', [_vm._v(_vm._s(item[col.prop.split(',')[1]]))])]) : _vm._e(), _vm._v(" "), (col.type == 'connect_odds_type') ? _c('div', {
        staticClass: "cell"
      }, [_c('span', [_vm._v(_vm._s(item[col.prop.split(',')[0]]))])]) : _vm._e(), _vm._v(" "), (col.type == 'object') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(col.formatKey != 'bank') ? _c('span', [_vm._v(_vm._s(item[col.prop.split(',')[1]]))]) : _vm._e(), _vm._v(" "), (col.formatKey == 'bank') ? _c('div', [(col.prop.split(',')[1] !== undefined && col.prop.split(',')[1] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['户名'] || '户名') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[1]] || ""))]) : _vm._e(), _vm._v(" "), (col.prop.split(',')[2] !== undefined && col.prop.split(',')[2] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['账号'] || '账号') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[2]] || ""))]) : _vm._e(), _vm._v(" "), (col.prop.split(',')[3] !== undefined && col.prop.split(',')[3] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['银行名称'] || '银行名称') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[3]] || ""))]) : _vm._e(), _vm._v(" "), (col.prop.split(',')[4] !== undefined && col.prop.split(',')[4] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['支行'] || '支行') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[4]] || ""))]) : _vm._e()]) : _vm._e()]) : _vm._e(), _vm._v(" "), (col.type == 'object,prop') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(col.formatKey == 'bank') ? _c('div', [(col.prop.split(',')[1] !== undefined && col.prop.split(',')[1] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['户名'] || '户名') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[1]] || ""))]) : _vm._e(), _vm._v(" "), (col.prop.split(',')[3] !== undefined && col.prop.split(',')[3] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['账号'] || '账号') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[3]] || ""))]) : _vm._e(), _vm._v(" "), (col.prop.split(',')[2] !== undefined && col.prop.split(',')[2] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['银行名称'] || '银行名称') + "：" + _vm._s(item[col.prop.split(",")[2]] || ""))]) : _vm._e(), _vm._v(" "), (col.prop.split(',')[4] !== undefined && col.prop.split(',')[4] != 'null') ? _c('p', [_vm._v("\n                                    " + _vm._s(_vm.LANG['支行'] || '支行') + "：" + _vm._s(item[col.prop.split(",")[0]][col.prop.split(",")[4]] || ""))]) : _vm._e()]) : _vm._e()]) : _vm._e(), _vm._v(" "), (col.type && col.type == 'connectString') ? _c('div', {
        staticClass: "cell"
      }, [_c('p', [_vm._v(_vm._s(_vm.LANG['户名'] || '户名') + "：" + _vm._s(item[col.prop.split(",")[0]] || ""))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.LANG['账号'] || '账号') + "：" + _vm._s(item[col.prop.split(",")[1]] || ""))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.LANG['支行'] || '支行') + "：" + _vm._s(item[col.prop.split(",")[2]] || ""))])]) : _vm._e(), _vm._v(" "), (col.type && col.type == 'connectSdateEdate') ? _c('div', {
        staticClass: "cell"
      }, [_c('p', [_vm._v(_vm._s(_vm.LANG['起始'] || '起始') + "：" + _vm._s(item[col.prop.split(",")[0]] || ""))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.LANG['结束'] || '结束') + "：" + _vm._s(item[col.prop.split(",")[1]] || ""))])]) : _vm._e(), _vm._v(" "), (col.type == 'connectDate') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('p', [_vm._v(_vm._s(item[col.prop.split(",")[0]] || ""))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item[col.prop.split(",")[1]] || ""))])]) : _vm._e(), _vm._v(" "), (col.type == 'button' && ((item['t_default'] == undefined && col.filters == undefined) || item['t_default'] == '1')) ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, _vm._l((col.btnGroup), function(btn) {
        return _c('div', {
          staticStyle: {
            "float": "left",
            "margin-left": "5px"
          }
        }, [(btn.prop == undefined && !_vm.tableDataColen[k][btn.valueKey] && btn.propOne == undefined && !col.hover) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e(), _vm._v(" "), (col.hover && _vm.hoverData) ? _c('el-tooltip', {
          attrs: {
            "placement": "right",
            "effect": "light"
          }
        }, [_c('div', {
          attrs: {
            "slot": "content"
          },
          slot: "content"
        }, _vm._l((_vm.hoverData), function(items, key) {
          return _c('p', {
            key: key,
            class: {
              mt10: key > 0
            }
          }, [_c('el-tag', {
            attrs: {
              "type": "primary"
            }
          }, [_vm._v(_vm._s(items.label) + ":")]), _vm._v(" "), _c('span', {
            staticClass: "pleft"
          }, [_vm._v(_vm._s(items.value))])], 1)
        })), _vm._v(" "), (btn.prop == undefined && !_vm.tableDataColen[k][btn.valueKey] && btn.propOne == undefined && col.hover) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          nativeOn: {
            "mouseenter": function($event) {
              $event.preventDefault();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                    ")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (btn.prop && _vm.tableDataColen[k][btn.prop] == btn.val && (btn.equal == undefined) && !_vm.tableDataColen[k][btn.valueKey] && btn.propOne == undefined) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e(), _vm._v(" "), (btn.prop && _vm.tableDataColen[k][btn.prop] != btn.val && (btn.equal == false) && btn.valNum == 1 && !_vm.tableDataColen[k][btn.valueKey] && btn.propOne == undefined) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e(), _vm._v(" "), (btn.prop && (_vm.tableDataColen[k][btn.prop] != btn.val && _vm.tableDataColen[k][btn.prop] != btn.val1) && (btn.equal == false) && btn.valNum == 2 && !_vm.tableDataColen[k][btn.valueKey] && btn.propOne == undefined) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e(), _vm._v(" "), (btn.propOne && btn.propTwo && _vm.tableDataColen[k][btn.propOne] == btn.valOne && _vm.tableDataColen[k][btn.propTwo] == btn.valTwo && btn.prop == undefined && !btn.equal) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e(), _vm._v(" "), (btn.val && btn.val1 && (_vm.tableDataColen[k][btn.prop] == btn.val || _vm.tableDataColen[k][btn.prop] == btn.val1) && btn.prop && btn.equal) ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e(), _vm._v(" "), (btn.valueKey && _vm.tableDataColen[k][btn.valueKey]) ? _c('span', [_vm._v(_vm._s(_vm.LANG[_vm.tableDataColen[k][btn.valueKey]] || _vm.tableDataColen[k][btn.valueKey]))]) : _vm._e()], 1)
      })) : _vm._e(), _vm._v(" "), (col.type == 'button' && col.filters) ? _c('div', {
        staticClass: "cell"
      }, _vm._l((col.btnGroup), function(btn) {
        return _c('div', {
          staticStyle: {
            "float": "left",
            "margin-left": "5px"
          }
        }, [(btn.filters == undefined) ? _c('span', [_c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label))])], 1) : _vm._e(), _vm._v(" "), (btn.filters && col.filters[0]['value'] === 'enabled') ? _c('span', [(/enabled/.test(_vm.tableDataColen[k][btn.key]) && btn.filters === 'enabled') ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          domProps: {
            "textContent": _vm._s(_vm.LANG['停用'] || '停用')
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }) : _vm._e(), _vm._v(" "), (!(/enabled/.test(_vm.tableDataColen[k][btn.key])) && btn.filters === 'disabled') ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          domProps: {
            "textContent": _vm._s(_vm.LANG['启用'] || '启用')
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }) : _vm._e()], 1) : _vm._e()])
      })) : _vm._e(), _vm._v(" "), (col.type == 'switch' || col.show) ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(_vm.tableDataColen[k][col.show] && _vm.tableDataColen[k][col.show].toString() === '1') ? _c('el-switch', {
        attrs: {
          "on-value": '1' || col.onValue,
          "off-value": '0' || col.offValue
        },
        on: {
          "change": function($event) {
            _vm.changeSwit(k, _vm.tableDataColen[k], col.prop)
          }
        },
        model: {
          value: (_vm.tableDataColen[k][col.prop]),
          callback: function($$v) {
            _vm.$set(_vm.tableDataColen[k], col.prop, $$v)
          },
          expression: "tableDataColen[k][col.prop]"
        }
      }) : _c('el-switch', {
        attrs: {
          "on-value": '1' || col.onValue,
          "off-value": '0' || col.offValue
        },
        on: {
          "change": function($event) {
            _vm.changeSwit(k, _vm.tableDataColen[k], col.prop)
          }
        },
        model: {
          value: (_vm.tableDataColen[k][col.prop]),
          callback: function($$v) {
            _vm.$set(_vm.tableDataColen[k], col.prop, $$v)
          },
          expression: "tableDataColen[k][col.prop]"
        }
      })], 1) : _vm._e(), _vm._v(" "), (col.type == 'list') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(_vm.listArr.length) ? _c('el-select', {
        attrs: {
          "placeholder": _vm.LANG['请选择'] || '请选择',
          "size": "small"
        },
        on: {
          "change": function($event) {
            _vm.changes(k, item, col.prop)
          }
        },
        model: {
          value: (item[col.prop]),
          callback: function($$v) {
            _vm.$set(item, col.prop, $$v)
          },
          expression: "item[col.prop]"
        }
      }, _vm._l((_vm.listArr), function(lev) {
        return _c('el-option', {
          key: lev.value,
          attrs: {
            "label": lev.label,
            "value": lev.value,
            "disabled": item[col.prop] == lev.value ? true : false
          }
        })
      })) : _vm._e(), _vm._v(" "), (_vm.listArr.length == 0) ? _c('el-select', {
        attrs: {
          "placeholder": _vm.LANG['请选择'] || '请选择',
          "size": "small"
        },
        on: {
          "change": function($event) {
            _vm.changes(k, item, col.prop)
          }
        },
        model: {
          value: (item[col.prop]),
          callback: function($$v) {
            _vm.$set(item, col.prop, $$v)
          },
          expression: "item[col.prop]"
        }
      }, _vm._l((_vm.listArr), function(lev) {
        return _c('el-option', {
          key: lev.value,
          attrs: {
            "label": lev.label,
            "value": lev.value,
            "disabled": item[col.prop] == lev.value ? true : false
          }
        })
      })) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (col.type == 'checkbox') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('el-checkbox', {
        attrs: {
          "true-label": 1,
          "false-label": 0,
          "checked": _vm._f("formatCheck")(_vm.tableDataColen[k][col.prop])
        },
        on: {
          "change": function($event) {
            _vm.changes(k, _vm.tableDataColen[k], col.prop)
          }
        },
        model: {
          value: (_vm.tableDataColen[k][col.prop]),
          callback: function($$v) {
            _vm.$set(_vm.tableDataColen[k], col.prop, $$v)
          },
          expression: "tableDataColen[k][col.prop]"
        }
      })], 1) : _vm._e(), _vm._v(" "), (col.type == 'number') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: (item[col.prop]),
          expression: "item[col.prop]"
        }],
        staticClass: "el-input__inner",
        attrs: {
          "type": "number",
          "min": "1"
        },
        domProps: {
          "value": (item[col.prop])
        },
        on: {
          "input": function($event) {
            if ($event.target.composing) { return; }
            _vm.$set(item, col.prop, $event.target.value)
          }
        }
      })]) : _vm._e(), _vm._v(" "), (col.type == 'reduce') ? _c('div', {
        staticClass: "cell"
      }, [_c('span', {
        staticClass: "sucess_text"
      }, [_vm._v(_vm._s((isNaN(parseInt(item[col.prop[0]])) ? 0 : parseInt(item[col.prop[0]])) - (isNaN(parseInt(item[col.prop[1]])) ? 0 : parseInt(item[col.prop[1]]))))])]) : _vm._e(), _vm._v(" "), (col.type == 'button' && item['t_default'] == '0') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, _vm._l((col.btnGroup), function(btn) {
        return _c('div', {
          staticStyle: {
            "float": "left",
            "margin-left": "5px"
          }
        }, [(btn.prop == undefined && btn.label == '复制新增') ? _c('el-button', {
          attrs: {
            "size": "small",
            "type": btn.btnType
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], btn.fn)
            }
          }
        }, [_vm._v(_vm._s(_vm.LANG[btn.label] || btn.label) + "\n                                ")]) : _vm._e()], 1)
      })) : _vm._e(), _vm._v(" "), (col.type == 'img') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(item[col.prop] && item[col.prop].toString().length > 5 && col.imgtype !== 'bank') ? _c('img', {
        attrs: {
          "src": item[col.prop],
          "alt": "item[col.prop]",
          "height": "20px",
          "width": "auto"
        }
      }) : _vm._e(), _vm._v(" "), (col.imgtype == 'bank') ? _c('img', {
        staticStyle: {
          "vertical-align": "middle"
        },
        attrs: {
          "src": '/static/img/bank/' + item['code'] + '.png',
          "alt": "item[col.prop]",
          "height": "20px",
          "width": "auto"
        }
      }) : _vm._e(), _vm._v(" "), (col.imgtype == 'bank') ? _c('span', [_vm._v(_vm._s(item['code']))]) : _vm._e(), _vm._v(" "), (!item[col.prop] || (item[col.prop] && item[col.prop].toString().length < 5)) ? _c('span', [_vm._v(_vm._s(_vm.LANG['暂无图片'] || '暂无图片'))]) : _vm._e()]) : _vm._e(), _vm._v(" "), (col.type == 'contentFilterLink') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.showLink(col.fn, _vm.tableDataColen[k])
          }
        }
      }, [_c('el-button', {
        attrs: {
          "size": "small",
          "type": "text"
        }
      }, [_vm._v(_vm._s(item[col.prop]))])], 1) : _vm._e(), _vm._v(" "), (col.type === 'regular') ? _c('div', {
        staticClass: "cell"
      }, [(col.filters[0]['value'] === 'enabled') ? _c('span', [(/enabled/.test(item[col.prop])) ? _c('span', {
        staticClass: "sucess_text"
      }, [_vm._v(" " + _vm._s(col.filters[0]['text'] || "") + "\n                                ")]) : _c('span', {
        staticClass: "danger_text"
      }, [_vm._v(_vm._s(col.filters[1]['text'] || ""))])]) : _vm._e(), _vm._v(" "), (col.filters[0]['value'] === 'default') ? _c('span', [(/default/.test(item[col.prop])) ? _c('span', {
        staticClass: "sucess_text"
      }, [_vm._v("\n                                    " + _vm._s(col.filters[0]['text'] || "") + "\n                                ")]) : _c('span', {
        staticClass: "danger_text"
      }, [_vm._v(_vm._s(col.filters[1]['text'] || ""))])]) : _vm._e(), _vm._v(" "), (col.filters[0]['value'] === 'new') ? _c('span', [(/new/.test(item[col.prop])) ? _c('span', {
        staticClass: "sucess_text"
      }, [_vm._v("\n                                    " + _vm._s(col.filters[0]['text'] || "") + "\n                                ")]) : _c('span', {
        staticClass: "danger_text"
      }, [_vm._v(_vm._s(col.filters[1]['text'] || ""))])]) : _vm._e()]) : _vm._e(), _vm._v(" "), (col.type && col.type == 'linkConnectAdd' || col.type == 'subtract') ? _c('div', {
        staticClass: "cell"
      }, [(col.type == 'subtract') ? _c('span', [_vm._v(_vm._s(item[col.prop.split(',')[col.prop.split(',').length - 1]]))]) : (col.prop === 'withdraw_bet_principal' && item['fix_type'] && item['isfixBet'] && (item['fix_type'] == '1' || item['fix_type'] == '3')) ? _c('a', {
        attrs: {
          "href": "javascript:;"
        }
      }, [_c('span', {
        staticClass: "linkCell tag_link",
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_vm._v(_vm._s(item[col.prop.split(',')[0]]))])]) : (col.prop === 'withdraw_bet_coupon' && item['isfixBet'] && (item['fix_type'] == '2' || item['fix_type'] == '3')) ? _c('a', {
        attrs: {
          "href": "javascript:;"
        }
      }, [_c('span', {
        staticClass: "linkCell tag_link",
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_vm._v(_vm._s(item[col.prop.split(',')[0]]))])]) : (((col.prop === 'withdraw_bet_principal' || col.prop === 'withdraw_bet_coupon') && (item['fix_type'] == 0)) || (col.prop === 'withdraw_bet_principal' && item['fix_type'] == 2) || (col.prop === 'withdraw_bet_coupon' && item['fix_type'] == 1)) ? _c('span', [_vm._v("否")]) : (item[col.prop.split(',')[0]] != undefined && col.fn && col.prop !== 'withdraw_bet_principal' && col.prop !== 'withdraw_bet_coupon') ? _c('a', {
        attrs: {
          "href": "javascript:;"
        }
      }, [_c('span', {
        staticClass: "linkCell tag_link",
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_vm._v(_vm._s(item[col.prop.split(',')[0]]))])]) : _c('span', {
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_vm._v(_vm._s(item[col.prop.split(',')[0]]))])]) : _vm._e(), _vm._v(" "), (col.type == 'connect') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('span', {
        class: {
          fontWeight: col['fontweight']
        }
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (col.type == 'connectInt') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('span', {
        class: {
          fontWeight: col['fontweight']
        }
      }, [_vm._v(_vm._s(item[col.type]))])]) : _vm._e(), _vm._v(" "), (col.type == 'connect,twoDivisionMoney') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('span', {
        class: {
          fontWeight: col['fontweight']
        }
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (col.type == 'link') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        },
        staticStyle: {
          "word-wrap": "break-word",
          "word-break": "normal"
        }
      }, [(item[col.prop] && item['t_default'] == undefined) ? _c('a', {
        staticClass: "tag_link",
        attrs: {
          "href": "javascript:;"
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_c('span', {
        staticClass: "linkCell"
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (item[col.prop] && item['t_default'] && item['t_default'] != 0) ? _c('a', {
        attrs: {
          "href": "javascript:;"
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_c('span', {
        staticClass: "linkCell tag_link"
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _vm._e(), _vm._v(" "), (item['t_default'] == '0') ? _c('span', {
        staticClass: "defutFont"
      }, [_vm._v("[ " + _vm._s(_vm.LANG['系统默认'] || '系统默认') + " ]")]) : _vm._e(), _vm._v(" "), (!item[col.prop]) ? _c('span', {
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_vm._v(_vm._s(item[col.prop]))]) : _vm._e()]) : _vm._e(), _vm._v(" "), (col.type == 'linkFilter') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(item[col.prop]) ? _c('el-button', {
        attrs: {
          "size": "small",
          "type": "text"
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_c('span', {
        staticClass: "linkCell tag_link"
      }, [_vm._v(_vm._s(_vm._f("formatSex")(item[col.prop], col.filters)) + "\n                                ")])]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (col.type == 'linkDivisionMoney') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [(col.hover && _vm.hoverData) ? _c('el-popover', {
        staticClass: "popover_diy",
        attrs: {
          "placement": "right",
          "title": col.prop === 'th3_amount' ? (_vm.LANG['子钱包明细：'] || '子钱包明细：') : '',
          "width": "50%",
          "trigger": "click"
        }
      }, [(_vm.hoverData.length) ? _c('div', _vm._l((_vm.hoverData), function(items, keys) {
        return _c('p', {
          key: keys,
          class: {
            mt10: keys > 0
          }
        }, [_c('span', {
          staticClass: "tag_link"
        }, [_vm._v(_vm._s(items.label) + ":")]), _vm._v(" "), _c('span', {
          staticClass: "pleft"
        }, [_vm._v(_vm._s(items.value))])])
      })) : _vm._e(), _vm._v(" "), _c('el-button', {
        staticClass: "popover_diy_btn",
        staticStyle: {
          "min-width": "60px",
          "border": "none",
          "background": "rgba(110,183,249,0)"
        },
        attrs: {
          "slot": "reference",
          "size": "mini"
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle(_vm.$evnet, _vm.tableDataColen[k], col.fn)
          }
        },
        slot: "reference"
      }, [_c('el-tag', {
        staticStyle: {
          "min-width": "60px"
        },
        attrs: {
          "type": "primary",
          "size": "small"
        }
      }, [_vm._v(_vm._s(item[col.prop]))])], 1)], 1) : (col.mousehover && _vm.hoverData) ? _c('el-popover', {
        staticClass: "popover_diy",
        attrs: {
          "placement": "right",
          "title": col.prop === 'th3_amount' ? (_vm.LANG['子钱包明细：'] || '子钱包明细：') : '',
          "width": "50%",
          "trigger": "hover"
        }
      }, [(_vm.hoverData.length) ? _c('div', _vm._l((_vm.hoverData), function(items, keys) {
        return _c('p', {
          key: keys,
          class: {
            mt10: keys > 0
          }
        }, [_c('span', {
          staticClass: "tag_link"
        }, [_vm._v(_vm._s(items.label) + ":")]), _vm._v(" "), _c('span', {
          staticClass: "pleft"
        }, [_vm._v(_vm._s(items.value))])])
      })) : _vm._e(), _vm._v(" "), _c('el-button', {
        staticClass: "popover_diy_btn",
        staticStyle: {
          "min-width": "60px",
          "border": "none",
          "background": "rgba(110,183,249,0)"
        },
        attrs: {
          "slot": "reference",
          "size": "mini"
        },
        nativeOn: {
          "mouseenter": function($event) {
            $event.preventDefault();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        },
        slot: "reference"
      }, [_c('el-tag', {
        staticStyle: {
          "min-width": "60px"
        },
        attrs: {
          "type": "primary",
          "size": "small"
        }
      }, [_vm._v(_vm._s(item[col.prop]))])], 1)], 1) : (item[col.prop] != undefined && !col.hover) ? _c('el-button', {
        attrs: {
          "size": "small",
          "type": "text"
        },
        on: {
          "click": function($event) {
            $event.stopPropagation();
            _vm.doHandle($event, _vm.tableDataColen[k], col.fn)
          }
        }
      }, [_c('span', {
        staticClass: "linkCell tag_link"
      }, [_vm._v(_vm._s(item[col.prop]))])]) : _c('span', [_vm._v(_vm._s(item[col.prop]))])], 1) : _vm._e(), _vm._v(" "), (col.type == 'linkNumberButton') ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined) ? true : false
        }
      }, [_c('span', [_vm._v(" " + _vm._s(item[col.prop]) + " ")]), _vm._v(" "), _vm._l((_vm.btnLinkGroup[k]), function(btn) {
        return _c('div', {
          staticStyle: {
            "float": "left",
            "margin-left": "5px"
          }
        }, [_c('el-button', {
          attrs: {
            "size": "small",
            "type": "text"
          },
          on: {
            "click": function($event) {
              $event.stopPropagation();
              _vm.doHandle($event, _vm.tableDataColen[k], col.fn, col.prop, btn)
            }
          }
        }, [_c('span', {
          staticClass: "tag_link"
        }, [_vm._v(" " + _vm._s(btn.value) + "\n                                    ")])])], 1)
      })], 2) : _vm._e(), _vm._v(" "), (col.type == 'ipBlack') ? _c('div', {
        staticClass: "cell",
        class: {
          'state_blue': _vm.tableDataColen[k][col.prop] == '0', 'state_danger': _vm.tableDataColen[k][col.prop] == '1'
        }
      }, [_vm._v("\n                            " + _vm._s(item[col.prop]) + "\n                        ")]) : _vm._e(), _vm._v(" "), ((col.type == 'connect') || (col.type == 'contentDate') || (col.type == 'connect,twoDivisionMoney') || (col.type == 'connect,divisionMoney')) ? _c('div', {
        staticClass: "cell",
        class: {
          sucess_text: (item[col.prop] == 0 || item[col.prop] == false || item[col.prop] == 'disabled'), danger_text: (item[col.prop] == 1 || item[col.prop] == true)
        }
      }, [_vm._v("\n                            " + _vm._s(item[(col.prop.split(',')[0])]) + "\n                        ")]) : _vm._e(), _vm._v(" "), (col.type == undefined && col.filters == undefined) ? _c('div', {
        staticClass: "cell",
        class: {
          tCent: (col.class != undefined && col.class == 'tCent') ? true : false, state_blue: (col.class != undefined && col.class == 'state_blue') ? true : false
        }
      }, [(col.tenWords) ? _c('span', {
        class: {
          fontWeight: col['fontweight']
        },
        staticStyle: {
          "display": "inline-block",
          "max-width": "140px"
        }
      }, [_vm._v(_vm._s(item[col.prop]))]) : _vm._e(), _vm._v(" "), (!col.tenWords) ? _c('span', {
        class: {
          fontWeight: col['fontweight']
        }
      }, [_vm._v(_vm._s(item[col.prop]))]) : _vm._e(), _vm._v(" "), (item['t_default'] == '0') ? _c('span', {
        staticClass: "defutFont"
      }, [_vm._v("[ " + _vm._s(_vm.LANG['系统默认'] || '系统默认') + " ]")]) : _vm._e()]) : _vm._e(), _vm._v(" "), (col.type == undefined && col.filters) ? _c('div', {
        staticClass: "cell"
      }, [_c('span', {
        class: _vm._f("getStatusColor")(_vm.tableDataColen[k][col.prop], col.statusKey)
      }, [_vm._v(_vm._s(item[col.prop]))]), _vm._v(" "), (item['t_default'] == '0') ? _c('span', {
        staticClass: "defutFont"
      }, [_vm._v("[ " + _vm._s(_vm.LANG['系统默认'] || '系统默认') + " ]")]) : _vm._e()]) : _vm._e()]) : _vm._e()
    })], 2) : _vm._e()
  }), _vm._v(" "), (_vm.sumGame && _vm.subTotalBet && _vm.tableDataList.length) ? _c('tr', [(_vm.columnList.length === 9) ? _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "cell tCent"
  }, [_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]) : _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.LANG['小计'] || '小计'))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.subTotalBet.bet_times))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.bet_money)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.valid_bet)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.bonus, 4)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.contri, 4)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell",
    class: {
      state_danger: parseFloat(_vm.subTotalBet.lose_earn) < 0
    }
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.subTotalBet.lose_earn)))])])]) : _vm._e(), _vm._v(" "), (_vm.sumGame && _vm.totalBet && _vm.tableDataList.length) ? _c('tr', [(_vm.columnList.length === 9) ? _c('td', {
    attrs: {
      "colspan": "3"
    }
  }, [_c('div', {
    staticClass: "cell tCent"
  }, [_vm._v(_vm._s(_vm.LANG['合计'] || '合计'))])]) : _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.LANG['合计'] || '合计'))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm.totalBet.bet_times))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.bet_money)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.valid_bet)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.bonus, 4)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell"
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.contri, 4)))])]), _vm._v(" "), _c('td', [_c('div', {
    staticClass: "cell",
    class: {
      state_danger: parseFloat(_vm.totalBet.lose_earn) < 0
    }
  }, [_vm._v(_vm._s(_vm._f("formatMoney")(_vm.totalBet.lose_earn)))])])]) : _vm._e(), _vm._v(" "), _vm._t("other")], 2), _vm._v(" "), (_vm.tableDataList.length == 0) ? _c('el-col', {
    staticStyle: {
      "line-height": "100px",
      "text-align": "center",
      "background-color": "#ffffff",
      "border": "1px solid #dfe6ec"
    }
  }, [_c('div', {
    staticClass: "dell"
  }, [_vm._v(_vm._s(_vm.LANG['暂无数据'] || '暂无数据'))])]) : _vm._e()], 1), _vm._v(" "), _c('el-col', [_c('confirm', {
    attrs: {
      "confirmConfig": _vm.confirmConfig
    },
    on: {
      "do-confirm": _vm.doConfirm,
      "do-cancel": _vm.doCancel
    }
  })], 1), _vm._v(" "), (_vm.pageSet && _vm.tableDataList.length > 0) ? _c('el-col', {
    staticClass: "toolbar mt20 pRight20",
    staticStyle: {
      "position": "relative",
      "text-align": "right"
    },
    attrs: {
      "span": 24
    }
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.currentPage,
      "page-sizes": _vm.pageSizeList,
      "page-size": _vm.pageSize,
      "layout": "total, sizes, prev, pager, next, jumper",
      "total": _vm.total
    },
    on: {
      "size-change": _vm.doSizePage,
      "current-change": _vm.doCurrentChange
    }
  })], 1) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
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
            }
            // this.checkGrounpList[index]["isIndeterminate"] = false;
            // console.log(this.checkGrounpList);
        },
        handleCheckedCitiesChange(value, children, index) {
            // console.log(value);

            // 获取当前选择数组的长度
            let checkedCount = value.length;
            this.checkGrounpList[index]["checkAll"] = checkedCount === children.length;
            // this.checkGrounpList[index]["isIndeterminate"] = checkedCount > 0 && checkedCount < children.length;

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
            }
            // console.log(this.checkGrounpList);
        }
    },
    mounted() {
        // console.log(this.checkGrounpList);
    },
    created() {}
});

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tableGrid_vue__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tableGrid_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_tableGrid_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_confirm_vue__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_confirm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_confirm_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nprogress__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_checkGroup_vue__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_checkGroup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_checkGroup_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
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
                role: [{ required: true, message: LANG['请输入角色名称'] || '请输入角色名称', trigger: 'blur' }]
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
                childrenStatus: [{ cn_name: "真实姓名", en_name: "true_name", status: false }]
            }, {
                name: "状态控制",
                checkAll: false,
                // isIndeterminate: false,
                children: ["停号", "封号", "黑名单", "踢出在线", "自我限制"],
                checkedChildren: [],
                childrenStatus: [{ cn_name: "停号", en_name: "account_disabled", status: false }, { cn_name: "封号", en_name: "account_forbidden", status: false }, { cn_name: "黑名单", en_name: "account_black", status: false }, { cn_name: "踢出在线", en_name: "account_kick", status: false }, { cn_name: "自我限制", en_name: "account_limit", status: false }]
            }, {
                name: "银行信息",
                checkAll: false,
                // isIndeterminate: false,
                children: ["银行卡号和开户信息"],
                checkedChildren: [],
                childrenStatus: [{ cn_name: "银行卡号和开户信息", en_name: "bank_card", status: false }]
            }, {
                name: "联系信息",
                checkAll: false,
                // isIndeterminate: false,
                children: ["qq", "手机号码", "邮箱", "微信", "skype", "安全问题与答案", "出生日期", "出生地", "性别", "邮编与国籍", "货币与语言", "身份证号码"],
                checkedChildren: [],
                childrenStatus: [{ cn_name: "qq", en_name: "qq", status: false }, { cn_name: "手机号码", en_name: "mobile", status: false }, { cn_name: "邮箱", en_name: "email", status: false }, { cn_name: "微信", en_name: "weixin", status: false }, { cn_name: "skype", en_name: "skype", status: false }, { cn_name: "安全问题与答案", en_name: "answer", status: false }, { cn_name: "出生日期", en_name: "birth", status: false }, { cn_name: "出生地", en_name: "address", status: false }, { cn_name: "性别", en_name: "gender", status: false }, { cn_name: "邮编与国籍", en_name: "nationality", status: false }, { cn_name: "货币与语言", en_name: "language", status: false }, { cn_name: "身份证号码", en_name: "idcard", status: false }]
            }],
            // 导出权限
            checkExportList: [{
                name: "全选",
                checkAll: false,
                // isIndeterminate: false,
                children: ["有效用户导出", "优惠申请导出", "线上充值导出", "公司入款导出", "会员提现导出", "返水导出"],
                checkedChildren: [],
                childrenStatus: [{ cn_name: "有效用户导出", en_name: "valid_user_export", status: false }, { cn_name: "优惠申请导出", en_name: "active_applys_export", status: false }, { cn_name: "线上充值导出", en_name: "deposit_onlines_export", status: false }, { cn_name: "公司入款导出", en_name: "deposit_offlines_export", status: false }, { cn_name: "会员提现导出", en_name: "user_withdraws_export", status: false }, { cn_name: "返水导出", en_name: "rebate_details_export", status: false }]
            }]
        };
    },
    components: {
        tablegrid: __WEBPACK_IMPORTED_MODULE_0__components_tableGrid_vue___default.a,
        confirm: __WEBPACK_IMPORTED_MODULE_1__components_confirm_vue___default.a,
        checkgroup: __WEBPACK_IMPORTED_MODULE_3__components_checkGroup_vue___default.a
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
            this.$http.get(URL.api + ROUTES.GET.sub.accounts.auth + '?id=1', URLCONFIG).then(res => {
                if (res.data.state === 0 && res.data.data) {
                    let model = res.data.data.routes || [];

                    // 这里做特殊处理，配合后台权限隐藏后台域名管理（业务需求，暂时这样）
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
            }).catch(e => {
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
                        this.$http.delete(URL.api + ROUTES.DELETE.sub.account.del + "?id=" + parseInt(obj.obj.id), URLCONFIG).then(res => {
                            if (res.data.state === 0 && res.data.data) {
                                _this.updated = true;
                                _this.$message.success(LANG['恭喜您，角色删除成功！'] || '恭喜您，角色删除成功！');
                            } else if (res.data.state === 2) {
                                _this.$message.error(LANG['角色删除失败，该角色名不存在'] || '角色删除失败，该角色名不存在');
                            }
                        });
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
            var _this = this;
            // NProgress.start();
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

                    let url = this.formType === 'add' ? URL.api + ROUTES.GET.sub.accounts.role : URL.api + ROUTES.GET.sub.accounts.role + '/' + this.editForm.id;
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
                    this.$http.put(url, query, URLCONFIG).then(res => {
                        if (res.data.state == 0 && res.data.data) {
                            if (this.formType === 'add') {
                                this.$message.success(LANG['新增角色成功'] || '新增角色成功');
                            } else {
                                console.log(query);
                                this.$message.success(LANG['修改角色成功'] || '修改角色成功');
                            }
                            this.updated = true;
                        } else if (res.data.state == 405) {
                            if (this.formType === 'add') {
                                this.$message.error(LANG['新增角色失败,权限不足'] || '新增角色失败,权限不足');
                            } else {
                                this.$message.error(LANG['修改角色失败,权限不足'] || '修改角色失败,权限不足');
                            }
                        } else {
                            if (this.formType === 'add') {
                                this.$message.error((res.data.message ? res.data.message : '') + (LANG['新增角色失败'] || '新增角色失败'));
                            } else {
                                this.$message.error((res.data.message ? res.data.message : '') + (LANG['修改角色失败'] || '修改角色失败'));
                            }
                        }
                        _this.initRoleList();
                        _this.loading = false;
                        this.editFormVisible = false;
                    }).catch(e => {
                        _this.loading = false;
                        this.$message.error(e.data.message + LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
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
            this.$http.get(this.tableUrl + "/" + row.id, URLCONFIG).then(res => {
                if (res.data.state == 0 && res.data.data) {
                    let model = res.data.data[0].auth || [];
                    editForm.role = res.data.data[0].role || "";

                    // let tempObj = res.data.data[0].member_control;
                    // editForm.member_control.true_name = tempObj.true_name || false;
                    // editForm.member_control.bank_card = tempObj.bank_card || false;
                    // editForm.member_control.address_book = tempObj.address_book || false;
                    // editForm.member_control.user_status = tempObj.user_status || false;
                    let tempobjTwo = res.data.data[0].export_control || {};
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

                    let tempObj = res.data.data[0].member_control || {};
                    this.checkGrounpList.forEach(item => {
                        item["checkAll"] = false;
                        item["checkedChildren"] = [];
                        item["childrenStatus"].forEach(option => {
                            option.status = false;
                        });
                    });
                    // 真实姓名权限
                    if (tempObj.true_name) {
                        this.checkGrounpList[0]["checkAll"] = true;
                        this.checkGrounpList[0]["checkedChildren"].push("真实姓名");
                        this.checkGrounpList[0]["childrenStatus"].forEach(item => {
                            item["status"] = true;
                        });
                    }
                    // 银行卡权限
                    if (tempObj.bank_card) {
                        this.checkGrounpList[2]["checkAll"] = true;
                        this.checkGrounpList[2]["checkedChildren"].push("银行卡号和开户信息");
                        this.checkGrounpList[2]["childrenStatus"].forEach(item => {
                            item["status"] = true;
                        });
                    }
                    // 状态控制权限
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
                        }
                        // 封号
                        if (tempObj.account_forbidden) {
                            this.checkGrounpList[1]["checkedChildren"].push("封号");
                            this.checkGrounpList[1]["childrenStatus"][1]["status"] = true;
                        }
                        // 黑名单
                        if (tempObj.account_black) {
                            this.checkGrounpList[1]["checkedChildren"].push("黑名单");
                            this.checkGrounpList[1]["childrenStatus"][2]["status"] = true;
                        }
                        // 踢出在线
                        if (tempObj.account_kick) {
                            this.checkGrounpList[1]["checkedChildren"].push("踢出在线");
                            this.checkGrounpList[1]["childrenStatus"][3]["status"] = true;
                        }
                        // 自我限制
                        if (tempObj.account_limit) {
                            this.checkGrounpList[1]["checkedChildren"].push("自我限制");
                            this.checkGrounpList[1]["childrenStatus"][4]["status"] = true;
                        }
                    }
                    // 联系信息
                    if (tempObj.qq && tempObj.mobile && tempObj.email && tempObj.weixin && tempObj.skype && tempObj.answer && tempObj.birth && tempObj.address && tempObj.gender && tempObj.nationality && tempObj.language && tempObj.idcard) {
                        this.checkGrounpList[3]["checkAll"] = true;
                        this.checkGrounpList[3]["checkedChildren"] = this.checkGrounpList[3]["children"] || [];
                        this.checkGrounpList[3]["childrenStatus"].forEach(item => {
                            item["status"] = true;
                        });
                    } else {
                        if (tempObj.qq) {
                            this.checkGrounpList[3]["checkedChildren"].push("qq");this.checkGrounpList[3]["childrenStatus"][0]["status"] = true;
                        }
                        if (tempObj.mobile) {
                            this.checkGrounpList[3]["checkedChildren"].push("手机号码");this.checkGrounpList[3]["childrenStatus"][1]["status"] = true;
                        }
                        if (tempObj.email) {
                            this.checkGrounpList[3]["checkedChildren"].push("邮箱");this.checkGrounpList[3]["childrenStatus"][2]["status"] = true;
                        }
                        if (tempObj.weixin) {
                            this.checkGrounpList[3]["checkedChildren"].push("微信");this.checkGrounpList[3]["childrenStatus"][3]["status"] = true;
                        }
                        if (tempObj.skype) {
                            this.checkGrounpList[3]["checkedChildren"].push("skype");this.checkGrounpList[3]["childrenStatus"][4]["status"] = true;
                        }
                        if (tempObj.answer) {
                            this.checkGrounpList[3]["checkedChildren"].push("安全问题与答案");this.checkGrounpList[3]["childrenStatus"][5]["status"] = true;
                        }
                        if (tempObj.birth) {
                            this.checkGrounpList[3]["checkedChildren"].push("出生日期");this.checkGrounpList[3]["childrenStatus"][6]["status"] = true;
                        }
                        if (tempObj.address) {
                            this.checkGrounpList[3]["checkedChildren"].push("出生地");this.checkGrounpList[3]["childrenStatus"][7]["status"] = true;
                        }
                        if (tempObj.gender) {
                            this.checkGrounpList[3]["checkedChildren"].push("性别");this.checkGrounpList[3]["childrenStatus"][8]["status"] = true;
                        }
                        if (tempObj.nationality) {
                            this.checkGrounpList[3]["checkedChildren"].push("邮编与国籍");this.checkGrounpList[3]["childrenStatus"][9]["status"] = true;
                        }
                        if (tempObj.language) {
                            this.checkGrounpList[3]["checkedChildren"].push("货币与语言");this.checkGrounpList[3]["childrenStatus"][10]["status"] = true;
                        }
                        if (tempObj.idcard) {
                            this.checkGrounpList[3]["checkedChildren"].push("身份证号码");this.checkGrounpList[3]["childrenStatus"][11]["status"] = true;
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
                    _this.editFormVisible = true;

                    //                      // 设置树初始化
                    setTimeout(function () {
                        if (_this.updateList.length === 0) {
                            _this.$refs.tree.setCheckedKeys([]);
                        } else {
                            _this.$refs.tree.setCheckedKeys(_this.updateList);
                        }
                    }, 300);
                }
                _this.loading = false;
            }).catch(e => {
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

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, ".el-checkbox.el-checkbox[data-v-4b66705f]{margin-left:0}.checkboxContainer[data-v-4b66705f]{border-bottom:1px solid #ccc}.checkboxContainer[data-v-4b66705f]:last-child{border-bottom:none}", ""]);

// exports


/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "#childRoleAccount .addManage[data-v-ed724e06]{float:right}#childRoleAccount .treeChildContent .is-expanded .el-tree-node__children .is-expanded .el-tree-node__children .el-tree-node .el-tree-node__content[data-v-ed724e06]{width:18%;float:left}", ""]);

// exports


/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(634);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("023b59ea", content, true);

/***/ }),

/***/ 866:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(701);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("1ba5b98a", content, true);

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(799)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(404),
  /* template */
  __webpack_require__(1025),
  /* scopeId */
  "data-v-4b66705f",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

});