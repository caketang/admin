(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/components/tableGrid.vue + 2 modules
var tableGrid = __webpack_require__(202);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/page/webSet/sysMessage.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var sysMessage = ({
  data() {
    return {
      LANG,
      //表格列数据
      columnsUrl: "",
      //表格数据
      tableUrl: "",
      baseUrl: '',
      dialogVisible: false,
      dialogText: {
        id: -1,
        title: "",
        content: "",
        create_time: "",
        is_read: false
      },
      //消息ID
      msgId: -1,
      updated: false
    };
  },

  methods: {
    init() {
      let msgId = this.$route.query; //                if(msgId){
      //                    this.doDetail({id:msgId});
      //                }

      this.columnsUrl = "static/json/webSet/sysMessage/columns.json";
      this.tableUrl = URL.api + ROUTES.GET.messages;
      this.baseUrl = URL.api + ROUTES.GET.messages;
    },

    //表格内按钮事件
    doHandle(e) {
      this.updated = false;

      switch (e.fn) {
        case "doDetail":
          this.doDetail(e.row);
          break;

        case "doDelete":
          this.doDelete(e.row);
          break;
      }
    },

    doDetail(row) {
      let model = row || {};
      let dialogText = this.dialogText;

      if (parseInt(row.status) === 0) {
        this.$.autoAjax('put', URL.api + ROUTES.PUT.admin.message, {
          "id": row.id,
          status: parseInt(row.status) == 0 ? 1 : 1
        }, {
          ok: res => {
            if (res.state === 0 && res.data) {
              //                            this.$message.success(LANG['消息查看成功'] || '消息查看成功');
              this.updated = true;
            } else {
              this.$message.error(LANG['消息查看失败，请稍后试'] || '消息查看失败，请稍后试');
            }
          },
          p: () => {},
          error: e => {
            console.log(e);
          }
        }) //                     this.$http.put(URL.api + ROUTES.PUT.admin.message,JSON.stringify({"id":row.id ,status:parseInt(row.status) == 0?1:1}),URLCONFIG).then((res)=>{
        //                         if(res.data.state === 0 && res.data.data){
        // //                            this.$message.success(LANG['消息查看成功'] || '消息查看成功');
        //                             this.updated = true;
        //                         }else{
        //                             this.$message.error(LANG['消息查看失败，请稍后试'] || '消息查看失败，请稍后试');
        //                         }
        //                     })
        .catch(e => {
          this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
        });
      }

      this.editVisible = true;
      this.dialogVisible = true;

      for (let i in model) {
        dialogText[i] = model[i];
      }
    },

    doDelete(row) {
      this.$.autoAjax('put', URL.api + ROUTES.PUT.admin.message, {
        "id": row.id,
        status: 2
      }, {
        ok: res => {
          if (res.state === 0 && res.data) {
            this.$message.success(LANG['删除成功'] || '删除成功');
            this.updated = true;
          } else {
            this.$message.success(LANG['删除失败'] || '删除失败');
          }
        },
        p: () => {},
        error: e => {
          console.log(e);
        }
      }) // this.$http.put(URL.api + ROUTES.PUT.admin.message,JSON.stringify({"id":row.id, status: 2}),URLCONFIG).then((res)=>{
      //         if(res.data.state === 0 && res.data.data){
      //             this.$message.success(LANG['删除成功'] || '删除成功');
      //             this.updated = true;
      //         }else{
      //             this.$message.success(LANG['删除失败'] || '删除失败');
      //         }
      //     })
      .catch(e => {
        this.$message.success(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
      });
    }

  },
  components: {
    tablegrid: tableGrid["a" /* default */]
  },

  created() {
    this.init();
  }

});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4d5bcfa4","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/page/webSet/sysMessage.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"sysMessage"}},[_c('el-col',[_c('tablegrid',{attrs:{"columnsUrl":_vm.columnsUrl,"tableUrl":_vm.tableUrl,"updated":_vm.updated},on:{"do-handle":_vm.doHandle}})],1),_vm._v(" "),_c('el-dialog',{staticClass:"details",attrs:{"title":_vm.LANG['公告详情'] || '公告详情',"size":"tiny"},model:{value:(_vm.dialogVisible),callback:function ($$v) {_vm.dialogVisible=$$v},expression:"dialogVisible"}},[_c('el-col',{staticClass:"xsDetails",attrs:{"span":24}},[_c('el-row',{attrs:{"gutter":30}},[_c('div',{staticClass:"el-col el-col-24"},[_c('el-col',{attrs:{"span":5}},[_c('h3',[_vm._v(_vm._s(_vm.LANG['公告标题'] || '公告标题')+":")])]),_vm._v(" "),_c('el-col',{attrs:{"span":19}},[_vm._v("\n                    "+_vm._s(_vm.dialogText.title)+"\n                ")])],1),_vm._v(" "),_c('div',{staticClass:"el-col el-col-24 mt10"},[_c('el-col',{attrs:{"span":5}},[_c('h3',[_vm._v(_vm._s(_vm.LANG['创建时间'] || '创建时间')+":")])]),_vm._v(" "),_c('el-col',{attrs:{"span":19}},[_vm._v("\n                    "+_vm._s(_vm.dialogText.created)+"\n                ")])],1),_vm._v(" "),_c('div',{staticClass:"el-col el-col-24 mt10"},[_c('el-col',{attrs:{"span":5}},[_c('h3',[_vm._v(_vm._s(_vm.LANG['公告详情'] || '公告详情')+":")])]),_vm._v(" "),_c('el-col',{attrs:{"span":19}},[_vm._v("\n                    "+_vm._s(_vm.dialogText.content)+"\n                ")])],1),_vm._v(" "),_c('el-col',{staticClass:"tCent",staticStyle:{"margin":"20px 0","border-top":"1px solid #cccccc","padding-top":"10px","text-align":"right"},attrs:{"span":24}},[_c('el-button',{on:{"click":function($event){_vm.dialogVisible = false}}},[_vm._v(_vm._s(_vm.LANG['关闭'] || '关闭'))])],1)],1)],1)],1)],1)}
var staticRenderFns = []

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
var component_normalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./src/page/webSet/sysMessage.vue
function injectStyle (context) {
  __webpack_require__(422)
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
  sysMessage,
  render,
  staticRenderFns,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var webSet_sysMessage = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);