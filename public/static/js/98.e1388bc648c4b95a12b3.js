(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{174:function(t,l,e){"use strict";e.r(l);var s=e(202),i=(e(203),{data:()=>({tableUrl:"",columnsUrl:"",dialogVisible:!1,details:null}),components:{tablegrid:s.a},methods:{init(){this.columnsUrl="/static/json/systemSettings/logInfo/columns.json",this.tableUrl=URL.api+ROUTES.GET.system.log.info,this.details=null},doHandle(t){switch(this.nowId=parseInt(t.row.id)||-1,t.fn){case"doDetails":this.doDetails(t.row)}},handleClose(){this.dialogVisible=!1},doDetails(t){this.details=t.message,this.dialogVisible=!0}},computed:{},mounted(){},created(){this.init()}}),o=e(10);var n=function(t){e(537)},a=Object(o.a)(i,function(){var t=this,l=t.$createElement,e=t._self._c||l;return e("div",{attrs:{id:"logInfo"}},[e("el-col",[e("tablegrid",{attrs:{columnsUrl:t.columnsUrl,tableUrl:t.tableUrl,tableIndex:!1,showRefresh:!0,tableCheck:!1},on:{"do-handle":t.doHandle}})],1),t._v(" "),e("el-dialog",{attrs:{title:"详情",visible:t.dialogVisible,size:"tiny","before-close":t.handleClose},on:{"update:visible":function(l){t.dialogVisible=l}}},[e("span",{domProps:{innerHTML:t._s(t.details)}}),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(l){t.dialogVisible=!1}}},[t._v("关 闭")])],1)])],1)},[],!1,n,null,null);l.default=a.exports},537:function(t,l,e){}}]);