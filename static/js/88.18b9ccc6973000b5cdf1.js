webpackJsonp([88],{

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(6))(298);

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(756)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(545),
  /* template */
  __webpack_require__(980),
  /* scopeId */
  "data-v-20636c54",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(213),
  /* template */
  __webpack_require__(219),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 213:
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ElButton',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
    handleInnerClick(evt) {
      if (this.disabled) {
        evt.stopPropagation();
      }
    }
  }
});

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_button_src_button__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_button_src_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_button_src_button__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { ElButton: __WEBPACK_IMPORTED_MODULE_0__node_modules_element_ui_packages_button_src_button___default.a },
    name: 'vueupload',
    props: {
        // 上传URL
        uploadUrl: {
            type: String,
            default: URL.rpi
        },
        // 图片建议分辨率大小
        imgResolution: {
            type: String,
            default: ''
        },
        // 上传文件夹
        folder: {
            type: String,
            default: ''
        },
        // 外部KEY
        keys: {
            type: String,
            default: ''
        },
        // 请求头
        requestHeaders: {
            type: Object,
            default: function () {
                return URLCONFIG;
            }
        },
        // 文件大小（默认2m）
        fileSize: {
            type: Number,
            default: function () {
                return 10;
            }
        },
        // 文件格式（默认，jpg、jpeg、png）
        fileFormat: {
            type: Array,
            default: function () {
                return ['jpg', 'jpeg', 'png', 'gif'];
            }
        },
        // 是否需要初始化
        isInit: {
            type: Boolean,
            default: false
        },
        // 初始文件列表
        arrList: {
            type: Array,
            default: function () {
                return [];
            }
        },
        // 上传文件限制
        fileNum: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            imgBaseUrl: URL.img,
            LANG,
            selectList: [],
            // 上传失败列表
            errorList: [],
            uploadStatus: false,
            deleteStatus: false
        };
    },
    methods: {
        init() {
            if (this.arrList.length === 0) {
                this.selectList = [];
                this.fileList = [];
                this.errorList = [];
            } else if (this.arrList[0]) {
                let model = this.arrList;
                let selectList = this.fileList = [];
                for (let k in model) {
                    let str = "";
                    if (/api\/*/g.test(model[k])) {
                        str = model[k].replace(/https?:\/\/\w*\.\w+\.\w+\/\w+\/\w+/, '');
                    } else {
                        str = model[k];
                    }
                    selectList.push({
                        url: model[k],
                        folder: str
                    });
                }
            }
        },
        selectFile(e) {
            this.$refs.fileUpload.click();
            $(this.$refs.fileUpload).one('change', () => {
                this.fileUploadChange();
            });
            e.preventDefault();
        },
        fileUploadChange() {
            let isMatch = function (str) {
                // 匹配字母数字下划线开头或结尾的任意字符
                let reg = /^[a-zA-Z\d_]*$/;
                return reg.test(str);
            };
            var fileInput = this.$refs.fileUpload;
            this.selectList = [];
            for (var i = 0; i < fileInput.files.length; i++) {
                // 判断文件大小是否符合
                if (fileInput.files[i].size / 1024 < this.fileSize * 1024) {
                    // 判断文件格式是否符合
                    let lowerCase = fileInput.files[i].type.split('/')[1];
                    let capital = fileInput.files[i].type.split('/')[1].toUpperCase();
                    let isLowerCase = this.fileFormat.indexOf(lowerCase);
                    let isCapital = this.fileFormat.indexOf(capital);

                    if (isLowerCase != -1 || isCapital != -1) {
                        if (!isMatch(fileInput.files[i].name.split('.')[0])) {
                            this.$message(`${fileInput.files[i].name}文件名格式不符合！只能是英文数字下划线`);
                        } else {
                            // 符合的就push保存起来待上传
                            this.selectList.push(fileInput.files[i]);
                        }
                    } else {
                        this.$message(`${fileInput.files[i].name}文件格式不符合！`);
                    }
                } else {
                    this.$message(`${fileInput.files[i].name}文件大小超过限制！`);
                }
            }
            // 处理完选择的文件之后把input[file]的value重置使得下一次change事件得以触发
            this.$refs.fileUpload.value = '';
        },
        submit() {
            let _this = this;
            var formData = new FormData();
            if (parseInt(this.fileNum) > 0 && this.fileList.length >= parseInt(this.fileNum)) {
                this.$message.error((LANG['只能上传'] || '只能上传') + this.fileNum + (LANG['个文件，请修改后重试！'] || '个文件，请修改后重试！'));
                return;
            }
            formData.append('post_type', 'upfile');
            if (this.selectList.length > 0) {
                this.selectList.forEach(item => {
                    formData.append('upfile[]', item, item.name);
                });
                this.uploadStatus = true;
                this.$http.post(this.uploadUrl + '/' + this.folder, formData, this.requestHeaders).then(res => {
                    this.selectList = [];
                    if (res.data.state && res.data.state == 0 && res.data.data.file[0].type === 'success') {
                        let fileList = res.data.data.file || [];
                        for (let k in fileList) {
                            if (fileList[k].type === "success") {
                                let model = this.fileList;
                                let num = 0;
                                for (let n in model) {
                                    if (model[n].url === fileList[k].url) {
                                        num++;
                                    }
                                }
                                if (num === 0) {
                                    this.fileList.push(fileList[k]);
                                }
                            }
                            // if(fileList[k].type === "error"){
                            //     let model = _this.errorList;
                            //     let num = 0;
                            //     for(let n in model){
                            //         if(model[n].url === fileList[k].url){
                            //             num++ ;
                            //         }
                            //     }
                            //     if(num === 0){
                            //         this.errorList.push(fileList[k].msg);
                            //     }
                            // }
                        }
                        this.$message.success(LANG['文件上传成功！'] || '文件上传成功！'); // 此处为单传一个图片成功提示
                        // if(this.errorList.length >0){
                        //     this.$message.error(this.errorList.toString() + " " + (LANG['文件上传失败，请稍后重试！'] || '文件上传失败，请稍后重试！'));
                        // }else{
                        //     
                        // }
                    } else {
                        this.$message.error(LANG['文件上传失败，请稍后重试！'] || '文件上传失败，请稍后重试！');
                    }
                    // 传到组件外部的回调
                    let model = [];
                    let fileList = this.fileList;
                    for (let k in fileList) {
                        model.push(fileList[k].url);
                    }
                    this.$emit("response", { url: model, key: this.keys });
                    this.uploadStatus = false;
                }).catch(err => {
                    this.uploadStatus = false;
                    this.$message.error(LANG['服务器错误请稍后重试！'] || '服务器错误请稍后重试！');
                });
            } else {
                this.$message('请先选取要上传的文件');
            }
        },
        delectFileItem(index) {
            this.selectList.splice(index, 1);
        },
        delectServerFileItem(item, index) {
            this.deleteStatus = true;
            let _this = this;
            if (/api\/*/g.test(item.url) === false) {
                this.fileList.splice(index, 1);
                this.deleteStatus = false;
                let model = [];
                let fileList = _this.fileList;
                for (let k in fileList) {
                    model.push(fileList[k].url);
                }
                _this.$message.success(LANG['文件删除成功！'] || '文件删除成功！');
                _this.$emit("response", { url: model, key: _this.keys });
                return;
            }
            this.$http.delete(this.uploadUrl + '/' + item.folder, this.requestHeaders).then(res => {

                if (res.data.state && res.data.state == "0") {
                    _this.fileList.splice(index, 1);
                    let model = [];
                    let fileList = _this.fileList;
                    for (let k in fileList) {
                        model.push(fileList[k].url);
                    }
                    _this.$message.success(LANG['文件删除成功！'] || '文件删除成功！');
                    _this.$emit("response", { url: model, key: _this.keys });
                } else {
                    _this.$message.error(res.data.message + LANG['文件删除失败！'] || '文件删除失败！');
                }
                _this.deleteStatus = false;
            }).catch(err => {
                this.$message.error(err);
            });
        }
        // 读取本地文件的方法，暂时不用
        // handleImageFile(file) {
        //     var previewArea = this.$refs.previewArea
        //     previewArea.innerHtml = '';
        //     var img = document.createElement('img');
        //     img.style.marginRight = 10 + 'px';
        //     img.style.width = 100 + 'px';
        //     img.style.height = 100 + 'px';
        //     img.file = file;
        //     previewArea.appendChild(img);
        //     var reader = new FileReader();
        //     reader.onload = (function(aImg) {
        //         return function(e) {
        //             aImg.src = e.target.result;
        //         }
        //     })(img);
        //     reader.readAsDataURL(file);
        // }
    },
    watch: {
        isInit: function (newval) {
            if (newval) {
                this.init();
            }
        }
    },
    computed: {
        arrLength() {
            return this.arrList.length;
        },
        fileList() {
            let selectList = [];
            if (this.arrList.length === 0) {
                this.selectList = [];
                this.errorList = [];
            } else if (this.arrList[0]) {
                let model = this.arrList;
                for (let k in model) {
                    let str = "";
                    if (/api\/*/g.test(model[k])) {
                        str = model[k].replace(/https?:\/\/\w*\.\w+\.\w+\/\w+\/\w+/, '');
                    } else {
                        str = model[k];
                    }
                    selectList.push({
                        url: model[k],
                        folder: str
                    });
                }
            }
            return selectList;
        }
    }
});

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, ".upload-text{float:left}.upload-tip{font-size:12px;color:#8391a5;margin-top:7px}", ""]);

// exports


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(215);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("2f06feb4", content, true);

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(216)

var Component = __webpack_require__(20)(
  /* script */
  __webpack_require__(214),
  /* template */
  __webpack_require__(218),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('el-row', {
    staticClass: "warp"
  }, [_c('div', {
    staticClass: "upload"
  }, [_c('div', {
    staticClass: "upload-text",
    on: {
      "click": _vm.selectFile
    }
  }, [_c('el-button', {
    attrs: {
      "size": "small",
      "type": "primary"
    }
  }, [_vm._v(_vm._s(_vm.LANG['选取文件'] || '选取文件'))])], 1), _vm._v(" "), _c('input', {
    ref: "fileUpload",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "multiple": "",
      "id": "file-upload",
      "type": "file",
      "name": "file",
      "accept": "image/jp2,image/jpeg,image/png,text/plain"
    }
  }), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "size": "small",
      "type": "success",
      "loading": _vm.uploadStatus
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v(_vm._s(_vm.LANG['上传到服务器'] || '上传到服务器'))]), _vm._v(" "), _c('div', {
    ref: "uploadTip",
    staticClass: "upload-tip"
  }, [_vm._v("\n            " + _vm._s(_vm.LANG['只能上传'] || '只能上传') + "\n            "), _vm._l((_vm.fileFormat), function(item, index) {
    return _c('span', {
      key: index
    }, [_vm._v("\n                " + _vm._s(item)), ((index + 1) !== _vm.fileFormat.length) ? _c('span', [_vm._v("、")]) : _vm._e()])
  }), _vm._v(_vm._s(_vm.LANG['文件'] || '文件') + "。\n            " + _vm._s(_vm.LANG['文件名只能是英文、数字、下划线'] || '文件名只能是英文、数字、下划线') + "，\n            " + _vm._s(_vm.LANG['且单个文件大小不能超过'] || '且单个文件大小不能超过') + _vm._s(_vm.fileSize) + "M ,\n            "), (_vm.imgResolution !== '') ? _c('span', [_vm._v("图片建议分辨率大小为" + _vm._s(_vm.imgResolution))]) : _vm._e(), _vm._v(" "), _c('br'), _vm._v("\n            " + _vm._s(_vm.LANG['先点击 “选取文件” ，然后点击 “上传到服务器”，上传文件'] || '先点击 “选取文件” ，然后点击 “上传到服务器”，上传文件') + "\n        ")], 2)], 1), _vm._v(" "), _c('div', {
    ref: "previewArea",
    staticStyle: {
      "max-width": "500px",
      "max-height": "500px",
      "overflow": "auto"
    }
  }, _vm._l((_vm.selectList), function(item, index) {
    return _c('div', {
      key: index
    }, [_vm._v(_vm._s(item.name) + "\n            "), _c('span', {
      on: {
        "click": function($event) {
          _vm.delectFileItem(index)
        }
      }
    }, [_c('i', {
      staticClass: "el-icon-delete"
    })])])
  })), _vm._v(" "), _vm._l((_vm.fileList), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('img', {
      staticStyle: {
        "margin-right": "10px",
        "width": "90%"
      },
      attrs: {
        "src": _vm.imgBaseUrl + item.url + '?t=' + Math.random(),
        "alt": ""
      }
    }), _vm._v(" "), _c('el-button', {
      attrs: {
        "type": "primary",
        "icon": "delete",
        "loading": _vm.deleteStatus,
        "size": "small"
      },
      on: {
        "click": function($event) {
          _vm.delectServerFileItem(item, index)
        }
      }
    })], 1)
  })], 2)
},staticRenderFns: []}

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "el-button",
    class: [
      _vm.type ? 'el-button--' + _vm.type : '',
      _vm.size ? 'el-button--' + _vm.size : '',
      {
        'is-disabled': _vm.disabled,
        'is-loading': _vm.loading,
        'is-plain': _vm.plain
      }
    ],
    attrs: {
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "type": _vm.nativeType
    },
    on: {
      "click": _vm.handleClick
    }
  }, [(_vm.loading) ? _c('i', {
    staticClass: "el-icon-loading",
    on: {
      "click": _vm.handleInnerClick
    }
  }) : _vm._e(), _vm._v(" "), (_vm.icon && !_vm.loading) ? _c('i', {
    class: 'el-icon-' + _vm.icon,
    on: {
      "click": _vm.handleInnerClick
    }
  }) : _vm._e(), _vm._v(" "), (_vm.$slots.default) ? _c('span', {
    on: {
      "click": _vm.handleInnerClick
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk5MzI5MDU4OTc0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjcgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2ODQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4LjM3NSIgaGVpZ2h0PSIxMjgiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEwMjYuMSA4OTFjMCAwIDAtNTgzLjkgMC02NDEuMyAwLTc3LjktNzAuOS03MC42LTcwLjktNzAuNnMtNDIzLjUgMC41LTQwMS4xIDBjLTI0LjMgMC41LTM2LjMtMTIuNy0zNi4zLTEyLjdzLTE2LjktMjktNDcuMi03NC45Yy0zMS44LTQ4LjEtNjguNi00MC4yLTY4LjYtNDAuMkw4OS45IDUxLjNjLTg2LjUgMC04Ny41IDgzLjItODcuNSA4My4yczAgNjkyLjMgMCA3NTIuMmMwIDkyLjggNzAuMSA4MS4zIDcwLjEgODEuM3M4MzYuMyAwIDg4OS4xIDBDMTAzNi42IDk2OCAxMDI2LjEgODkxIDEwMjYuMSA4OTF6IiBwLWlkPSIxNjg1IiBmaWxsPSIjZmZkNjU5Ij48L3BhdGg+PC9zdmc+"

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clipboard__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_upload_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_upload_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
	name: 'resourcesManagement',
	data() {
		return {
			LANG,
			baseURL: URL.rpi,
			imgBaseUrl: URL.img,
			fileUploadDir: '', // 文件上传目录
			addFileFolder: false,
			modifyFileFolder: false, // 是否显示修改文件夹的输入框
			isDisabled: true,
			isShowFileUpload: false,
			fileFolderName: '',
			modifyFileFolderName: '',
			modifyFile: false, // 是否显示修改文件的输入框
			modifyFileName: '',
			dirList: [], // 目录列表
			fileList: [], // 文件列表
			breadcrumbList: [], // 面包屑导航列表
			dirCheckList: [], // 目录选中列表
			fileCheckList: [], // 文件选中列表
			isOpenPreviewImg: false,
			previewImgUrl: ''
		};
	},
	components: {
		upload: __WEBPACK_IMPORTED_MODULE_1__components_upload_vue___default.a
	},
	mounted() {
		this.init();
	},
	activated() {
		this.init();
	},
	methods: {
		init: function () {
			let options = {
				target: this.$refs.fileContent
			};
			let loadingInstance = this.$loading(options);
			this.$http.get(this.baseURL, URLCONFIG).then(res => {
				if (res.data.state == '0') {
					loadingInstance.close();
					this.breadcrumbList = [];
					this.dirList = res.data.data.dir;
					this.fileList = res.data.data.file;
				}
			}).catch(e => {
				loadingInstance.close();
				this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
			});
		},
		// 打开当前目录的子目录
		folder: function (data) {
			let options = {
				target: this.$refs.fileContent
			};
			let loadingInstance = this.$loading(options);
			this.breadcrumbList.push(data.name);
			this.$http.get(this.baseURL + data.folder, URLCONFIG).then(res => {
				if (res.data.state == '0') {
					loadingInstance.close();
					this.dirList = res.data.data.dir;
					this.fileList = res.data.data.file;
				}
			}).catch(e => {
				loadingInstance.close();
				this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
			});
		},
		// 新增文件夹
		addFileFolderFn: function () {
			this.addFileFolder = true;
			// 使滚动条滚动到最顶部
			this.$refs.fileContent.scrollTop = 0 + 'px';
		},
		// 确认新建文件夹
		confirmAddFileFolder: function () {
			let options = {
				target: this.$refs.fileContent
			};
			let loadingInstance = this.$loading(options);
			let param = '';
			this.breadcrumbList.forEach(item => {
				param = param + '/' + item;
			});
			this.$http.post(this.baseURL + (param == '' ? '/' : param), {
				post_type: 'createdir',
				folder: this.fileFolderName
			}, URLCONFIG).then(res => {
				if (res.data.state == '0') {
					loadingInstance.close();
					this.fileFolderName = '';
					this.$message('创建成功！');
					this.addFileFolder = false;
					this.dirList.push(res.data.data.dir[0]);
				} else {
					this.$message(res.data.message);
					loadingInstance.close();
				}
			}).catch(err => {
				loadingInstance.close();
				this.$message(err);
			});
		},
		// 重命名
		rename: function () {
			// 使滚动条滚动到最顶部
			this.$refs.fileContent.scrollTop = 0 + 'px';
			let list = this.dirCheckList.length > 0 ? this.dirCheckList : this.fileCheckList;
			let item = list[0].split('/')[list[0].split('/').length - 1];
			if (this.dirCheckList.length > 0) {
				this.modifyFileFolder = true;
				this.modifyFileFolderName = item;
				this.dirList.forEach((i, index) => {
					if (i.name == item) {
						// 保存被移除的文件夹单项，如果用户点取消可以恢复
						this.temporaryDirItem = this.dirList.splice(index, 1);
						this.temporaryDirIndex = index;
					}
					if (this.dirList[index]) {
						this.dirList[index].dirIsCheck = false;
					}
				});
				this.dirCheckList = [];
				this.isDisabled = true;
			} else {
				this.modifyFile = true;
				this.modifyFileName = item;
				this.fileList.forEach((i, index) => {
					if (i.name == item) {
						// 保存被移除的文件单项，如果用户点取消可以恢复
						this.temporaryFileItem = this.fileList.splice(index, 1);
						this.temporaryFileIndex = index;
					}
					if (this.fileList[index]) {
						this.fileList[index].fileIsCheck = false;
					}
				});
				this.fileCheckList = [];
				this.isDisabled = true;
			}
		},
		// 确认文件夹重命名
		confirmModifyFileFolder: function () {
			let param = '';
			this.breadcrumbList.forEach(item => {
				param = param + '/' + item;
			});
			this.$http.post(this.baseURL + param + this.temporaryDirItem[0].folder, {
				post_type: 'rname',
				nname: this.modifyFileFolderName
			}, URLCONFIG).then(res => {
				if (res.data.state == '0') {
					this.$message('修改成功！');
					this.refresh();
					this.modifyFileFolder = false;
					this.modifyFileFolderName = '';
				}
			}).catch(err => {
				this.$message(err);
			});
		},
		// 取消文件夹重命名
		cancelModifyFileFolder: function () {
			this.modifyFileFolder = false;
			this.temporaryDirItem[0].dirIsCheck = false;
			this.dirList.splice(this.temporaryDirIndex, 0, this.temporaryDirItem[0]);
		},
		// 确认文件重命名
		confirmModifyFile: function () {
			let param = '';
			this.breadcrumbList.forEach(item => {
				param = param + '/' + item;
			});
			this.$http.post(this.baseURL + param + this.temporaryFileItem[0].folder, {
				post_type: 'rname',
				nname: this.modifyFileName
			}, URLCONFIG).then(res => {
				if (res.data.state == '0') {
					this.$message('修改成功！');
					this.refresh();
					this.modifyFile = false;
					this.modifyFileName = '';
				}
			}).catch(err => {
				this.$message(err);
			});
		},
		// 取消文件重命名
		cancelModifyFile: function () {
			this.modifyFile = false;
			this.temporaryFileItem[0].fileIsCheck = false;
			this.fileList.splice(this.temporaryFileIndex, 0, this.temporaryFileItem[0]);
		},
		// 删除
		delect: function () {
			this.$confirm('确认删除吗？该操作不可恢复').then(() => {
				let options = {
					target: this.$refs.fileContent
				};
				let loadingInstance = this.$loading(options);
				let list = this.dirCheckList.length > 0 ? this.dirCheckList : this.fileCheckList;
				this.$http.delete(this.baseURL + list[0], URLCONFIG).then(res => {
					if (res.data.state == '0') {
						loadingInstance.close();
						if (this.dirCheckList.length > 0) {
							this.refresh();
							this.$message('删除成功！');
							this.isDisabled = true;
						} else {
							this.refresh();
							this.$message('删除成功！');
							this.isDisabled = true;
						}
					}
				}).catch(err => {
					loadingInstance.close();
					this.$message(err);
				});
			}).catch(() => {});
		},
		// 面包屑导航
		handleBreadcrumb: function (data, index) {
			let options = {
				target: this.$refs.fileContent
			};
			let loadingInstance = this.$loading(options);
			this.breadcrumbList.splice(index + 1, this.breadcrumbList.length - index);
			let param = '';
			this.breadcrumbList.forEach(item => {
				param = param + '/' + item;
			});
			this.$http.get(this.baseURL + param, URLCONFIG).then(res => {
				if (res.data.state == '0') {
					loadingInstance.close();
					this.dirList = res.data.data.dir;
					this.fileList = res.data.data.file;
				}
			}).catch(err => {
				loadingInstance.close();
				this.$message(err);
			});
		},
		// 目录change事件
		dirItemChange: function (isCheck, index) {
			if (isCheck) {
				this.dirCheckList.push(this.dirList[index].folder);
			} else {
				let i = this.dirCheckList.indexOf(this.dirList[index].folder);
				this.dirCheckList.splice(i, 1);
			}
			if (this.dirCheckList.length == 1 || this.fileCheckList.length == 1) {
				this.isDisabled = false;
			} else {
				this.isDisabled = true;
			}
		},
		// 文件change事件
		fileItemChange: function (isCheck, index) {
			if (isCheck) {
				this.fileCheckList.push(this.fileList[index].folder);
			} else {
				let i = this.fileCheckList.indexOf(this.fileList[index].folder);
				this.fileCheckList.splice(i, 1);
			}
			if (this.dirCheckList.length == 1 || this.fileCheckList.length == 1) {
				this.isDisabled = false;
			} else {
				this.isDisabled = true;
			}
		},
		// 刷新当前目录
		refresh: function () {
			let options = {
				target: this.$refs.fileContent
			};
			let loadingInstance = this.$loading(options);
			let param = '';
			this.breadcrumbList.forEach(item => {
				param = param + '/' + item;
			});
			this.$http.get(this.baseURL + param, URLCONFIG).then(res => {
				if (res.data.state == '0') {
					this.dirCheckList = [];
					this.fileCheckList = [];
					loadingInstance.close();
					res.data.data.dir.forEach(item => {
						item.dirIsCheck = false;
					});
					res.data.data.file.forEach(item => {
						item.fileIsCheck = false;
					});
					this.dirList = res.data.data.dir;
					this.fileList = res.data.data.file;
				}
			}).catch(err => {
				loadingInstance.close();
				this.$message(err);
			});
		},
		// 文件上传
		uploadFile: function () {
			this.isShowFileUpload = true;
			let param = '';
			this.breadcrumbList.forEach(item => {
				param = param + '/' + item;
			});
			this.fileUploadDir = param;
		},
		// 关闭文件上传对话框
		handleClose: function () {
			this.isShowFileUpload = false;
		},
		doSaveFile: function (data) {
			this.$message('上传成功！');
			this.isShowFileUpload = false;
			this.refresh();
		},
		// 图片预览
		previewImg: function (data) {
			this.isOpenPreviewImg = true;
			this.previewImgUrl = data.url;
		},
		// copy图片路径
		copyImgUrl: function () {
			let clipboard = new __WEBPACK_IMPORTED_MODULE_0_clipboard___default.a('.clipboardBtn');
			clipboard.on('success', e => {
				this.$message('复制成功！');
			});
			clipboard.on('error', e => {
				this.$message.error('复制失败请重试！');
			});
		}
	},
	directives: {
		// 计算文件夹内容区高度的指令
		contentHeight: {
			bind: function (el) {
				let calculation = () => {
					el.style.height = window.innerHeight - 270 + 'px';
					el.style.maxHeight = window.innerHeight - 270 + 'px';
					el.style.overflow = 'auto';
				};
				calculation();
				window.onresize = () => calculation();
			}
		}
	}
});

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(106)();
// imports


// module
exports.push([module.i, "img[data-v-20636c54]{vertical-align:middle}.file-header[data-v-20636c54]{height:36px;border-bottom:1px solid #f2f6fd;margin-top:8px;font-size:14px;color:#888}.file-header .name[data-v-20636c54]{width:45%;line-height:36px;float:left}.file-header .name .allSelect[data-v-20636c54]{margin-left:6px;margin-right:6px}.file-header .size[data-v-20636c54]{width:30%;line-height:36px;float:left;text-align:center}.file-header .operating[data-v-20636c54]{width:25%;line-height:36px;float:left;text-align:center}.file-item[data-v-20636c54]{height:36px;border-bottom:1px solid #f2f6fd;margin-top:8px;font-size:14px;color:#888}.file-item .name[data-v-20636c54]{width:45%;line-height:36px;float:left;cursor:pointer}.file-item .name .allSelect[data-v-20636c54]{margin-left:6px;margin-right:6px}.file-item .size[data-v-20636c54]{width:30%;line-height:36px;float:left;text-align:center}.file-item .operating[data-v-20636c54]{width:25%;line-height:36px;float:left;text-align:center}", ""]);

// exports


/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(591);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(107)("11d0ac5e", content, true);

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNDk5ODI5Nzk0ODI1IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1OTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMjc4LjE1NzMxMiA0NDcuMzI0MTZsMC04MC40NjI4NDgtNDAuODY2ODE2IDAgMCA4MC40NjI4NDhMMjc4LjE1NzMxMiA0NDcuMzI0MTZ6TTI1Ny45NTA3MiAzODEuNTM2MjU2bDAuODQ4ODk2IDIuMjk3ODU2YzQuNTY2MDE2IDEyLjM1MjUxMiA5LjMwNDA2NCAyNi43MjMzMjggMTQuMDgyMDQ4IDQyLjcxMjA2NGwwLjczMjE2IDIuNDUwNDMyLTE3LjQwNjk3NiA1LjIyMTM3Ni0wLjcxMDY1Ni0yLjQ5NjUxMmMtNC4yMjcwNzItMTQuODM4Nzg0LTguODIyNzg0LTI5LjA0MzcxMi0xMy42NTkxMzYtNDIuMjIxNTY4bC0wLjkxOTU1Mi0yLjUwNTcyOEwyNTcuOTUwNzIgMzgxLjUzNjI1NnoiIHAtaWQ9IjE1OTEiIGZpbGw9IiNiZmJmYmYiPjwvcGF0aD48cGF0aCBkPSJNMjk3LjYxOTQ1NiAzNjYuODYxMzEybDAgODAuNDYyODQ4IDQwLjg2NjgxNiAwIDAtODAuNDYyODQ4TDI5Ny42MTk0NTYgMzY2Ljg2MTMxMnpNMzMzLjQ5MjIyNCAzODkuNzYxMDI0Yy00Ljk4NDgzMiAxNC41Mzg3NTItMTAuMzUzNjY0IDI4Ljc1MDg0OC0xNS45NTkwNCA0Mi4yNDEwMjRsLTAuOTYxNTM2IDIuMzE3MzEyLTE2LjMwODIyNC02LjM5MDc4NCAxLjAwNjU5Mi0yLjQxNDU5MmM2LjQ4Mzk2OC0xNS41MzgxNzYgMTEuNzAyMjcyLTI5LjUyMjk0NCAxNS41MTA1MjgtNDEuNTY0MTZsMC43OTk3NDQtMi41MjgyNTYgMTYuNzMyMTYgNS45NDMyOTZMMzMzLjQ5MjIyNCAzODkuNzYxMDI0eiIgcC1pZD0iMTU5MiIgZmlsbD0iI2JmYmZiZiI+PC9wYXRoPjxwYXRoIGQ9Ik05MTQuNzQyMjcyIDI2NS42OTkzMjggMTA5LjI1NzcyOCAyNjUuNjk5MzI4Yy0yNS4xMjk5ODQgMC00NS41MDE0NCAyMC4zNzE0NTYtNDUuNTAxNDQgNDUuNTAxNDRsMCAzNDMuODQ1ODg4YzAgMjUuMTI5OTg0IDIwLjM3MTQ1NiA0NS41MDE0NCA0NS41MDE0NCA0NS41MDE0NGw4MDUuNDgzNTIgMGMyNS4xMjk5ODQgMCA0NS41MDE0NC0yMC4zNzE0NTYgNDUuNTAxNDQtMzIuMTY0ODY0TDk2MC4yNDI2ODggMzI0LjUzNjMyQzk2MC4yNDM3MTIgMjg2LjA3MDc4NCA5MzkuODcxMjMyIDI2NS42OTkzMjggOTE0Ljc0MjI3MiAyNjUuNjk5MzI4ek01OTIuNzM5MzI4IDMzOC45MTczNzZsMS42MjA5OTIgMS41NTQ0MzJjMTcuNDEyMDk2IDE2LjY4ODEyOCAzNC4xNzI5MjggMzMuNTU1NDU2IDQ5LjgxODYyNCA1MC4xMzE5NjhsMS44NTAzNjggMS45NTk5MzYtMTguNjMwNjU2IDE1Ljg1NTYxNi0xLjY2MTk1Mi0xLjkwNDY0Yy0xNi4zMjI1Ni0xOC42OTQxNDQtMzIuNTkwODQ4LTM2LjA2MTE4NC00OC4zNTIyNTYtNTEuNjE2NzY4bC0yLjA0Njk3Ni0yLjAxOTMyOEw1OTIuNzM5MzI4IDMzOC45MTczNzZ6TTQ2NS40NTEwMDggMzUxLjA2MjAxNmwxLjQxNTE2OCAxLjg3Njk5MmM5Ljg1MjkyOCAxMy4wNjkzMTIgMTguOTA2MTEyIDI1Ljg1OTA3MiAyNi45MDY2MjQgMzguMDE0OTc2bDEuNDA4IDIuMTM4MTEyLTE3LjEzMDQ5NiAxMS4yODAzODQtMS4zODI0LTIuMjU1ODcyYy04LjEyNDQxNi0xMy4yNjM4NzItMTYuODg5ODU2LTI2LjIwNjIwOC0yNi4wNTU2OC0zOC40NjQ1MTJsLTEuNjYyOTc2LTIuMjI0MTI4TDQ2NS40NTEwMDggMzUxLjA2MjAxNnpNMjA5LjM3MTEzNiA1MzUuNzEzNzkyYzEwLjA0MTM0NC0wLjQxMjY3MiAyNS41NTM5Mi0xLjE5ODA4IDQ2LjEwNjYyNC0yLjMzNTc0NCA5LjYyMTUwNC0wLjUzODYyNCAxNy4xODA2NzItMC45NjE1MzYgMjIuNjc4NTI4LTEuMjY4NzM2TDI3OC4xNTYyODggNTA1LjQ0NjRsLTY0LjIyNjMwNCAwIDAtMTguNTI3MjMyIDY0LjIyNjMwNCAwIDAtMjEuNjkzNDQtNjAuMDE2NjQgMEwyMTguMTM5NjQ4IDM0OC4zMzQwOGwxMzkuNDk2NDQ4IDAgMCAxMTYuODkxNjQ4LTYwLjAxNjY0IDAgMCAyMS42OTM0NCA2MS4yNjQ4OTYgMEwzNTguODg0MzUyIDUwNS40NDY0bC02MS4yNjQ4OTYgMCAwIDI1LjQzMTA0YzE1LjY0OTc5Mi0wLjk2MDUxMiAzNy41NTkyOTYtMi42MzI3MDQgNjUuMTkxOTM2LTQuOTc2NjRsMi45MjE0NzItMC4yNDc4MDgtMC4xNDg0OCAyLjkyNzYxNmMtMC4xMDQ0NDggMi4wNTgyNC0wLjIwNzg3MiA0LjE2MzU4NC0wLjMwOTI0OCA2LjMyMjE3NmwwIDEwLjI4OTE1Mi0yLjM5NDExMiAwLjE1NDYyNGMtNjIuMDY2Njg4IDQuMDI3MzkyLTExMi43NjggNy42OTc0MDgtMTUwLjY5Mzg4OCAxMC45MDg2NzJsLTIuMzY0NDE2IDAuMTk5NjgtMy4zMzUxNjgtMjAuNjIzMzZMMjA5LjM3MTEzNiA1MzUuNzEzNzkyek0yNDAuNjA1MTg0IDU3NC44ODY5MTJjLTUuNzEyODk2IDE4LjM4MTgyNC0xMi4zOTc1NjggMzcuMTE4OTc2LTE5Ljg2NzY0OCA1NS42OTEyNjRsLTAuOTM2OTYgMi4zMzA2MjQtMTkuMjA1MTItNy4zMDYyNCAxLjA4MTM0NC0yLjQ2NDc2OGM3LjcwNDU3Ni0xNy41NjU2OTYgMTQuMjIxMzEyLTM1LjcwNTg1NiAxOS4zNjU4ODgtNTMuOTE2NjcybDAuNzAwNDE2LTIuNDc1MDA4IDE5LjYzOTI5NiA1LjY0MTIxNkwyNDAuNjA1MTg0IDU3NC44ODY5MTJ6TTI2My41MDM4NzIgNjI2LjMzMTY0OGwtMC40MzUyLTIuNjkxMDcyYy0yLjY4MDgzMi0xNi41OTgwMTYtNi4wNzc0NC0zMy40MjEzMTItMTAuMDkyNTQ0LTUwLjAwMTkybC0wLjYyNjY4OC0yLjU4OTY5NiAxOS4wMzYxNi0zLjgwNzIzMiAwLjU5MTg3MiAyLjM2NzQ4OGM0LjM1NzEyIDE3LjQyOTUwNCA4LjE0Mjg0OCAzNC4xNDgzNTIgMTEuMjQ5NjY0IDQ5LjY5MDYyNGwwLjQ4OTQ3MiAyLjQ0NjMzNkwyNjMuNTAzODcyIDYyNi4zMzE2NDh6TTMwNi40Mjk5NTIgNjE2LjQwMDg5NmwtMC43MzkzMjgtMi42MDMwMDhjLTMuOTE1Nzc2LTEzLjgwNTU2OC04Ljg3OTEwNC0yOC45MDEzNzYtMTQuNzQ5Njk2LTQ0Ljg2NjU2bC0wLjk0MTA1Ni0yLjU2IDE3Ljk2MzAwOC01LjM0NTI4IDAuODU5MTM2IDIuMTg5MzEyYzUuMjg2OTEyIDEzLjQ3Njg2NCAxMC42MDE0NzIgMjguMzY2ODQ4IDE1Ljc5NTIgNDQuMjU2MjU2bDAuNzgzMzYgMi4zOTUxMzZMMzA2LjQyOTk1MiA2MTYuNDAwODk2ek0zMjUuODkyMDk2IDU2MS4wNDAzODRsMTcuNDc0NTYtNy40NTg4MTYgMS4xMzc2NjQgMS45NTE3NDRjNi41NDMzNiAxMS4yMTY4OTYgMTIuOTE4Nzg0IDIzLjE3OTI2NCAxOC45NTIxOTIgMzUuNTU1MzI4bDEuMTc1NTUyIDIuNDEyNTQ0LTE4LjE0MzIzMiA3LjgwNTk1Mi0xLjA1NDcyLTIuMjM3NDRjLTUuOTcyOTkyLTEyLjY2MzgwOC0xMi4wODMyLTI0LjYyMzEwNC0xOC4xNjA2NC0zNS41NDYxMTJMMzI1Ljg5MjA5NiA1NjEuMDQwMzg0ek01MTAuMzUxMzYgNjE3Ljc5NzYzMmMtNC41ODY0OTYgNC4xNzY4OTYtOS4wMjY1NiA4LjcyMTQwOC0xMy4yMDI0MzIgMTMuNTA3NTg0bC0xLjgzOTEwNCAyLjEwOTQ0LTEuOTM4NDMyLTIuMDIwMzUyYy0zNC45MTUzMjgtMzYuNDAzMi01Ni42NDI1Ni04My4zOTE0ODgtNjQuNzQyNC0xMzkuOTEyMTkyLTkuMzcyNjcyIDU5LjE1MDMzNi0zMi40MTE2NDggMTA3LjEwNDI1Ni02OC42Mzk3NDQgMTQyLjc3MDE3NmwtMS45NTc4ODggMS45MjgxOTItMS43ODQ4MzItMi4wODk5ODRjLTMuNTMyOC00LjEzNzk4NC03Ljg0Mzg0LTguMzk2OC0xMi44MTMzMTItMTIuNjU2NjRsLTIuMTU1NTItMS44NDgzMiAyLjA2MTMxMi0xLjk1Mzc5MmM0Mi41NDcyLTQwLjMyNjE0NCA2Ny4wMTM2MzItOTguNTcxMjY0IDcyLjc0MDg2NC0xNzMuMTM5OTY4bC00Ny45NzU0MjQgMCAwLTE5LjQ2MjE0NCA1MC4zODI4NDggMGMxLjExODIwOC0xNS42NjAwMzIgMS42ODQ0OC00MS43MjkwMjQgMS42ODQ0OC03Ny41NjU5NTJsMC0xNC4wOTYzODQgMjEuMDIwNjcyIDAgMCAyLjU2YzAgMzIuOTE5NTUyLTAuNjg4MTI4IDYyLjg3ODcyLTIuMDQzOTA0IDg5LjEwMjMzNmw2NS4zMzUyOTYgMCAwIDE5LjQ2MjE0NC02NS4xODE2OTYgMGM4LjU4NDE5MiA3Ny4zNTgwOCAzMi40ODIzMDQgMTM0LjM4NTY2NCA3MS4wNDkyMTYgMTY5LjUxOTEwNGwyLjA3NzY5NiAxLjg5MjM1Mkw1MTAuMzUxMzYgNjE3Ljc5NzYzMnpNNTk3LjMxODY1NiA2MDQuMTg3NjQ4bC0xLjc3ODY4OCAyLjAyNzUyLTE2LjA4MDg5Ni0xNS42Nzk0ODggMS40ODA3MDQtMS44MTU1NTJjMi45OTQxNzYtMy42NzAwMTYgNS4wNDAxMjgtNy4yNTkxMzYgNi4wODI1Ni0xMC42NjU5ODQgMS4xNzU1NTItMy40MzQ0OTYgMS43NTkyMzItNy44NzU1ODQgMS43NTkyMzItMTMuMjgxMjhMNTg4Ljc4MTU2OCA0NTUuODcyNTEybC00MS42MjI1MjggMEw1NDcuMTU5MDQgNDM0Ljg1MTg0bDYzLjg5MDQzMiAwIDAgMTI4Ljc0MjRjMTYuNDUxNTg0LTEzLjQ0NDA5NiAzMy45Mzc0MDgtMjguMTUzODU2IDUyLjA0Mjc1Mi00My43ODQxOTJsMy40OTA4MTYtMy4wMTM2MzIgMC43MTA2NTYgNC41NTY4YzEuMDExNzEyIDYuNDgzOTY4IDIuMzQ0OTYgMTIuMzM0MDggMy45NjE4NTYgMTcuMzg2NDk2bDAuNTMyNDggMS42NjE5NTItMS4zNTE2OCAxLjEwMjg0OGMtMTUuNjcyMzIgMTIuNzg0NjQtMzYuMDYzMjMyIDI5Ljc2ODcwNC02MC42MDc0ODggNTAuNDgxMTUyQzYwNS4xNjU1NjggNTk1LjkzNjI1NiA2MDAuOTU1OTA0IDYwMC4wNDM1MiA1OTcuMzE4NjU2IDYwNC4xODc2NDh6TTg1Mi43NTQ0MzIgNjEyLjUyMTk4NGMtNS41MTAxNDQgNS44MTczNDQtMTAuMTU3MDU2IDExLjMzOTc3Ni0xMy44MDk2NjQgMTYuNDE0NzJsLTEuNTM4MDQ4IDIuMTM1MDQtMi4wOTIwMzItMS41OTUzOTJjLTQ2LjU3NDU5Mi0zNS41MDkyNDgtNzYuNDE4MDQ4LTg5LjY2MjQ2NC04OC44NTk2NDgtMTYxLjEzODY4OC0xMC4xMzc2IDY4Ljk4NDgzMi00MS43NDAyODggMTI1LjI2Mjg0OC05NC4xMTE3NDQgMTY3LjQ4NjQ2NGwtMS45NTc4ODggMS41Nzc5ODQtMS42MTI4LTEuOTI4MTkyYy00LjY5MTk2OC01LjYxMDQ5Ni05LjM5MjEyOC0xMC42MjA5MjgtMTMuOTY5NDA4LTE0Ljg5MjAzMmwtMi4yNjIwMTYtMi4xMTE0ODggMi40OTc1MzYtMS44MjY4MTZjMzEuNjExOTA0LTIzLjEyMDg5NiA1NS43NDM0ODgtNTIuMTIyNjI0IDcxLjcyMDk2LTg2LjIwMDMyIDE2LjAwNDA5Ni0zNC4xMzUwNCAyNC4zMDE1NjgtNzQuMzU4Nzg0IDI0LjY2MDk5Mi0xMTkuNTU0MDQ4IDAuNDEzNjk2LTE2LjgzMjUxMiAwLjYyMjU5Mi00MS4zMDUwODggMC42MjI1OTItNzIuNzc5Nzc2bDAtMi41NiAyMy4zNTk0ODggMCAwIDIuNTZjMCAyMC4wNTkxMzYtMC4zMTMzNDQgNDAuMDEyOC0wLjkzMDgxNiA1OS4zMDkwNTYgNS4yMDE5MiA1My4wMTQ1MjggMTYuMDk1MjMyIDk3LjY4MTQwOCAzMi4zNzc4NTYgMTMyLjc1ODUyOCAxNi4yMDg4OTYgMzQuOTIxNDcyIDM4LjIxNjcwNCA2MS4zMDM4MDggNjUuNDEwMDQ4IDc4LjQxNDg0OGwyLjY0MTkyIDEuNjYxOTUyTDg1Mi43NTQ0MzIgNjEyLjUyMTk4NHoiIHAtaWQ9IjE1OTMiIGZpbGw9IiNiZmJmYmYiPjwvcGF0aD48L3N2Zz4="

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "resourcesManagement"
    }
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-card', {
    staticClass: "box-card"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', {
    staticClass: "wrapper"
  }, [_c('el-button', {
    attrs: {
      "type": "default",
      "size": "small"
    },
    on: {
      "click": _vm.uploadFile
    }
  }, [_vm._v(_vm._s(_vm.LANG['上传文件'] || '上传文件'))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "primary",
      "size": "small"
    },
    on: {
      "click": _vm.addFileFolderFn
    }
  }, [_vm._v(_vm._s(_vm.LANG['新建文件夹'] || '新建文件夹'))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "success",
      "size": "small",
      "disabled": _vm.isDisabled
    },
    on: {
      "click": _vm.rename
    }
  }, [_vm._v(_vm._s(_vm.LANG['重命名'] || '重命名'))]), _vm._v(" "), _c('el-button', {
    attrs: {
      "type": "danger",
      "size": "small",
      "disabled": _vm.isDisabled
    },
    on: {
      "click": _vm.delect
    }
  }, [_vm._v(_vm._s(_vm.LANG['删除'] || '删除'))])], 1)]), _vm._v(" "), _c('div', [_c('el-row', [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('el-breadcrumb', {
    attrs: {
      "separator": "/"
    }
  }, [_c('el-breadcrumb-item', [_c('span', {
    on: {
      "click": _vm.init
    }
  }, [_vm._v(_vm._s(_vm.LANG['全部文件'] || '全部文件'))])]), _vm._v(" "), _vm._l((_vm.breadcrumbList), function(item, index) {
    return _c('el-breadcrumb-item', {
      key: index
    }, [_c('span', {
      on: {
        "click": function($event) {
          _vm.handleBreadcrumb(item, index)
        }
      }
    }, [_vm._v(_vm._s(item))])])
  })], 2)], 1)], 1), _vm._v(" "), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 24
    }
  }, [_c('div', {
    staticClass: "file-header"
  }, [_c('ul', [_c('li', {
    staticClass: "name"
  }, [_c('span', [_vm._v(_vm._s(_vm.LANG['文件名'] || '文件名'))])]), _vm._v(" "), _c('li', {
    staticClass: "size"
  }, [_c('span', [_vm._v(_vm._s(_vm.LANG['大小'] || '大小'))])]), _vm._v(" "), _c('li', {
    staticClass: "operating"
  }, [_c('span', [_vm._v(_vm._s(_vm.LANG['操作'] || '操作'))])])])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "contentHeight",
      rawName: "v-contentHeight"
    }],
    ref: "fileContent"
  }, [(_vm.addFileFolder) ? _c('div', {
    staticClass: "file-item"
  }, [_c('ul', [_c('li', {
    staticClass: "name"
  }, [_c('el-checkbox', {
    staticClass: "allSelect fl"
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "left",
      "margin-left": "4px",
      "margin-right": "9px"
    }
  }, [_c('img', {
    attrs: {
      "width": "20",
      "height": "20",
      "src": __webpack_require__(336)
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "50%",
      "float": "left",
      "margin-right": "10px"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small",
      "placeholder": _vm.LANG['文件夹名称,只能数字、字母、下划线'] || '文件夹名称,只能数字、字母、下划线'
    },
    model: {
      value: (_vm.fileFolderName),
      callback: function($$v) {
        _vm.fileFolderName = $$v
      },
      expression: "fileFolderName"
    }
  })], 1), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "color": "#3b8cff",
      "border-color": "#c5ddff"
    },
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.confirmAddFileFolder
    }
  }, [_c('i', {
    staticClass: "el-icon-check"
  })]), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "color": "#3b8cff",
      "border-color": "#c5ddff"
    },
    attrs: {
      "size": "small"
    },
    on: {
      "click": function($event) {
        _vm.addFileFolder = false
      }
    }
  }, [_c('i', {
    staticClass: "el-icon-close"
  })])], 1), _vm._v(" "), _c('li', {
    staticClass: "size"
  }, [_c('span', [_vm._v("-")])])])]) : _vm._e(), _vm._v(" "), (_vm.modifyFileFolder) ? _c('div', {
    staticClass: "file-item"
  }, [_c('ul', [_c('li', {
    staticClass: "name"
  }, [_c('el-checkbox', {
    staticClass: "allSelect fl"
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "float": "left",
      "margin-left": "4px",
      "margin-right": "9px"
    }
  }, [_c('img', {
    attrs: {
      "width": "20",
      "height": "20",
      "src": __webpack_require__(336)
    }
  })]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "50%",
      "float": "left",
      "margin-right": "10px"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.modifyFileFolderName),
      callback: function($$v) {
        _vm.modifyFileFolderName = $$v
      },
      expression: "modifyFileFolderName"
    }
  })], 1), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "color": "#3b8cff",
      "border-color": "#c5ddff"
    },
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.confirmModifyFileFolder
    }
  }, [_c('i', {
    staticClass: "el-icon-check"
  })]), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "color": "#3b8cff",
      "border-color": "#c5ddff"
    },
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.cancelModifyFileFolder
    }
  }, [_c('i', {
    staticClass: "el-icon-close"
  })])], 1), _vm._v(" "), _c('li', {
    staticClass: "size"
  }, [_c('span', [_vm._v("-")])])])]) : _vm._e(), _vm._v(" "), (_vm.modifyFile) ? _c('div', {
    staticClass: "file-item"
  }, [_c('ul', [_c('li', {
    staticClass: "name"
  }, [_c('el-checkbox', {
    staticClass: "allSelect fl"
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "50%",
      "float": "left",
      "margin-right": "10px"
    }
  }, [_c('el-input', {
    attrs: {
      "size": "small"
    },
    model: {
      value: (_vm.modifyFileName),
      callback: function($$v) {
        _vm.modifyFileName = $$v
      },
      expression: "modifyFileName"
    }
  })], 1), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "color": "#3b8cff",
      "border-color": "#c5ddff"
    },
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.confirmModifyFile
    }
  }, [_c('i', {
    staticClass: "el-icon-check"
  })]), _vm._v(" "), _c('el-button', {
    staticStyle: {
      "color": "#3b8cff",
      "border-color": "#c5ddff"
    },
    attrs: {
      "size": "small"
    },
    on: {
      "click": _vm.cancelModifyFile
    }
  }, [_c('i', {
    staticClass: "el-icon-close"
  })])], 1), _vm._v(" "), _c('li', {
    staticClass: "size"
  }, [_c('span', [_vm._v("-")])])])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.dirList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "file-item"
    }, [_c('ul', [_c('li', {
      staticClass: "name"
    }, [(item.dirtype == 'normal') ? _c('el-checkbox', {
      staticClass: "allSelect",
      on: {
        "change": function($event) {
          _vm.dirItemChange(_vm.dirList[index].dirIsCheck, index)
        }
      },
      model: {
        value: (_vm.dirList[index].dirIsCheck),
        callback: function($$v) {
          _vm.$set(_vm.dirList[index], "dirIsCheck", $$v)
        },
        expression: "dirList[index].dirIsCheck"
      }
    }) : _vm._e(), _vm._v(" "), (item.dirtype == 'sys') ? _c('img', {
      attrs: {
        "width": "40",
        "height": "40",
        "src": __webpack_require__(904)
      },
      on: {
        "click": function($event) {
          _vm.folder(item)
        }
      }
    }) : _vm._e(), _vm._v(" "), _c('img', {
      attrs: {
        "width": "20",
        "height": "20",
        "src": __webpack_require__(336)
      },
      on: {
        "click": function($event) {
          _vm.folder(item)
        }
      }
    }), _vm._v(" "), _c('span', {
      on: {
        "click": function($event) {
          _vm.folder(item)
        }
      }
    }, [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _c('li', {
      staticClass: "size"
    }, [_c('span', [_vm._v("-")])]), _vm._v(" "), _c('li', {
      staticClass: "operating"
    }, [_c('span', [_vm._v("-")])])])])
  }), _vm._v(" "), _vm._l((_vm.fileList), function(item, index) {
    return _c('div', {
      staticClass: "file-item"
    }, [_c('ul', [_c('li', {
      staticClass: "name"
    }, [_c('el-checkbox', {
      staticClass: "allSelect",
      on: {
        "change": function($event) {
          _vm.fileItemChange(_vm.fileList[index].fileIsCheck, index)
        }
      },
      model: {
        value: (_vm.fileList[index].fileIsCheck),
        callback: function($$v) {
          _vm.$set(_vm.fileList[index], "fileIsCheck", $$v)
        },
        expression: "fileList[index].fileIsCheck"
      }
    }), _vm._v(" "), _c('img', {
      attrs: {
        "width": "20",
        "height": "20",
        "src": _vm.imgBaseUrl + item.url
      },
      on: {
        "click": function($event) {
          _vm.previewImg(item)
        }
      }
    }), _vm._v(" "), _c('span', {
      on: {
        "click": function($event) {
          _vm.previewImg(item)
        }
      }
    }, [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _c('li', {
      staticClass: "size"
    }, [_c('span', [_vm._v(_vm._s(item.filesize / 1000) + "k")])]), _vm._v(" "), _c('li', {
      staticClass: "operating"
    }, [_c('el-button', {
      staticClass: "clipboardBtn",
      attrs: {
        "size": "small",
        "data-clipboard-text": _vm.imgBaseUrl + item.url
      },
      on: {
        "click": _vm.copyImgUrl
      }
    }, [_vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t" + _vm._s(_vm.LANG['复制图片路径'] || '复制图片路径') + "\n\t\t\t\t\t\t\t\t\t\t\t\t")])], 1)])])
  }), _vm._v(" "), (_vm.dirList.length == 0 && _vm.fileList == 0 && _vm.modifyFile == false && _vm.modifyFileFolder == false) ? _c('div', {
    staticClass: "file-item tCent"
  }, [_c('span', [_vm._v("该文件夹下无内容")])]) : _vm._e()], 2)])], 1)], 1)])], 1)], 1), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "文件上传",
      "visible": _vm.isShowFileUpload,
      "size": "tiny",
      "before-close": _vm.handleClose
    },
    on: {
      "update:visible": function($event) {
        _vm.isShowFileUpload = $event
      }
    }
  }, [(_vm.isShowFileUpload) ? _c('span', [_c('upload', {
    attrs: {
      "uploadUrl": _vm.baseURL,
      "fileNum": 1,
      "folder": _vm.fileUploadDir
    },
    on: {
      "response": _vm.doSaveFile
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.isShowFileUpload = false
      }
    }
  }, [_vm._v("取 消")])], 1)]), _vm._v(" "), _c('el-dialog', {
    attrs: {
      "title": "预览",
      "visible": _vm.isOpenPreviewImg
    },
    on: {
      "update:visible": function($event) {
        _vm.isOpenPreviewImg = $event
      }
    }
  }, [_c('img', {
    attrs: {
      "width": "660",
      "src": _vm.imgBaseUrl + _vm.previewImgUrl
    }
  })])], 1)
},staticRenderFns: []}

/***/ })

});