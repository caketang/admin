(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{190:function(t,e,a){"use strict";a.r(e);var s=a(202),i=a(203),l={data:()=>({LANG:LANG,columnsUrl:"",tableUrl:"",searchConfig:[{prop:"name",value:"",type:"text",label:"试玩帐号"},{prop:"pname",value:"",type:"text",label:"上级代理"}],type:"search",isEdit:{},labelWidth:"135px",formVisible:{state:!1},baseUrl:"",updated:!1,confirmConfig:{state:!1,msg:"",fn:""},settingDialog:!1,addTest:{name:""}}),components:{tablegrid:s.a,formEdit:i.a},methods:{init(){this.columnsUrl="static/json/accoutManage/testPlay/columns.json",this.tableUrl=URL.api+ROUTES.GET.user.testPlay,this.baseUrl=URL.api+ROUTES.GET.user.testPlay},doHandle(t){switch(this.nowId=t.row.id||-1,t.fn){case"openUserSet":this.openUserSet(t.row)}},doSetting(){this.settingDialog=!0},submitSetting(){let t={};t.name=this.addTest.name,this.$.autoAjax("post",URL.api+ROUTES.POST.user.testPlay,t,{ok:t=>{0==t.state&&t.data&&(this.$message.success("添加试玩代理线成功"),this.loading=!0)},error:t=>{console.log(t)}}),this.settingDialog=!1},handleClose(){this.settingDialog=!1},openUserSet(t){this.$router.push({path:"/memberManagement",query:{name:t.name}})},doQuery(t){this.tableUrl=this.baseUrl+this.addSearch(t.item)},resetForm(){this.tableUrl=this.baseUrl}},created(){this.init()}},o=a(10);var n=function(t){a(490)},r=Object(o.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"testPlay"}},[a("formEdit",{attrs:{formVisible:t.formVisible,formConfig:t.searchConfig,type:t.type,labelWidth:t.labelWidth,isEdit:t.isEdit,addshow:!0,addText:t.LANG["添加试玩代理线"]||"添加试玩代理线"},on:{"do-query":t.doQuery,"reset-form":t.resetForm,"add-new":t.doSetting}}),t._v(" "),a("el-col",[a("tablegrid",{attrs:{columnsUrl:t.columnsUrl,tableUrl:t.tableUrl,tableCheck:!1,pageSet:!0,updated:t.updated},on:{"do-handle":t.doHandle}})],1),t._v(" "),a("el-col",[a("el-dialog",{attrs:{title:"提示",visible:t.settingDialog,size:"tiny","before-close":t.handleClose},on:{"update:visible":function(e){t.settingDialog=e}}},[a("el-form",{ref:"addTest",attrs:{model:t.addTest,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"代理线名称："}},[a("el-input",{model:{value:t.addTest.name,callback:function(e){t.$set(t.addTest,"name",e)},expression:"addTest.name"}})],1)],1),t._v(" "),a("span",{staticClass:"help_red"},[t._v(" 【注意】：*添加成功后，你所输入的该用户下所有的代理线将成为测试帐号")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.settingDialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitSetting}},[t._v("确 定")])],1)],1)],1)],1)},[],!1,n,null,null);e.default=r.exports},490:function(t,e,a){}}]);