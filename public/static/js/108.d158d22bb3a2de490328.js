(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{137:function(e,t,s){"use strict";s.r(t);var a=s(202),i=s(203),o={data(){let e=(e,t,s)=>{/^[1-9]\d*$/.test(t)?s():s(new Error("请输入正整数"))};return{LANG:LANG,columnsUrl:"",tableUrl:"",baseUrl:"",formConfig:[{prop:"name",value:"",type:"text",label:"媒体名称",rules:[{require:!0}]},{prop:"width",value:"",type:"text",label:"宽度",rules:[{require:!0},{fns:e}]},{prop:"length",value:"",type:"text",label:"高度",rules:[{require:!0},{fns:e}]},{prop:"file_type",value:"",type:"text",label:"文件类型",rules:[{require:!0}]},{prop:"language_id",value:"",type:"select",label:"语言",list:[]},{prop:"type",value:"",type:"select",label:"媒体类型",list:[]},{prop:"images",value:[],type:"upload",fileNum:1,label:"图片",action:URL.img,folder:"web"},{prop:"script",value:"",type:"textarea",label:"脚本",rules:[{require:!0}]},{prop:"status",value:"",label:"状态",type:"select",list:[{label:"启用",value:"1"},{label:"停用",value:"0"}]}],type:"default",formTitel:"",formType:"",labelWidth:"90px",editVisible:{state:!1},formVisible:{state:!1},isEdit:{state:!1},nowId:-1,updated:!1,loading:!1}},components:{tablegrid:a.a,formEdit:i.a},methods:{init(){this.columnsUrl="/static/json/agent/agentResources/columns.json",this.tableUrl=URL.api+ROUTES.GET.commission.ad;let e=URL.api+ROUTES.GET.langeages;this.$.autoAjax("get",e,"",{ok:e=>{let t=e.data;for(let e in t)this.formConfig[4].list.push({label:t[e].name,value:parseInt(t[e].id,10)})},p:()=>{},error:e=>{console.log(e)}});let t=URL.api+"/games/all";this.$.autoAjax("get",t,"",{ok:e=>{let t=e.data.data;for(let e in t)this.formConfig[5].list.push({label:t[e].name,value:parseInt(t[e].id,10)})},p:()=>{},error:e=>{console.log(e)}})},doHandle(e){switch(this.formType="",e.fn){case"doEdit":this.doEdit(e.row);break;case"doDelete":this.doDelete(e.row);break;case"doEnable":this.doEnable(e.row);break;case"doDesable":this.doDesable(e.row)}},doEdit(e){this.formTitel=LANG["修改推广资源"]||"修改推广资源",this.nowId=e.id,setTimeout(()=>{this.formType="edit",FORMVAL(e,this.formConfig),this.formConfig[6].value.push(e.picture),this.editVisible.state=!0,this.isEdit.state=!0,this.formVisible.state=!0},500)},doDelete(e){this.nowId=e.id;this.loading=!0,this.updated=!1,this.$.autoAjax("delete",URL.api+ROUTES.DELETE.commission.ad+"/"+parseInt(this.nowId),"",{ok:e=>{null!=e.data&&e.data?(this.$message.success(LANG["恭喜您，代理推广图片资源删除成功！"]||"恭喜您，代理推广图片资源删除成功！"),this.updateType="update",this.loading=!1,this.updated=!0):(this.$message.error(LANG["代理推广图片资源删除失败，请稍候重试！"]||"代理推广图片资源删除失败，请稍候重试！"),this.loading=!1,this.updateType="update")},p:()=>{},error:e=>{console.log(e)}}),this.updateType=""},doEnable(e){this.loading=!0,this.updated=!1,this.nowId=e.id;this.$.autoAjax("patch",URL.api+ROUTES.PATCH.commission.ad+"/"+parseInt(this.nowId),{status:1},{ok:e=>{null!=e.data&&e.data?(this.$message.success(LANG["恭喜您，代理推广图片资源启用成功！"]||"恭喜您，代理推广图片资源启用成功！"),this.loading=!1,this.updated=!0):(this.$message.error(LANG["代理推广图片资源启用失败，请稍候重试！"]||"代理推广图片资源启用失败，请稍候重试!"),this.loading=!1,this.updated=!1)},p:()=>{},error:e=>{console.log(e)}}),this.updateType=""},doDesable(e){this.loading=!0,this.updated=!1,this.nowId=e.id;this.$.autoAjax("patch",URL.api+ROUTES.PATCH.commission.ad+"/"+parseInt(this.nowId),{status:0},{ok:e=>{null!=e.data&&e.data?(this.$message.success(LANG["恭喜您，代理推广图片资源停用成功！"]||"恭喜您，代理推广图片资源停用成功！"),this.loading=!1,this.updated=!0):(this.$message.error(LANG["代理推广图片资源停用失败，请稍候重试！"]||"代理推广图片资源停用失败，请稍候重试！"),this.loading=!1,this.updated=!1)},p:()=>{},error:e=>{console.log(e)}}),this.updateType=""},openform(){this.formVisible.state=!0,this.formType="add",this.formTitel=LANG["新增推广资源"]||"新增推广资源"},getForm(e){let t=e.formObj;t.picture=t.images.toString(),delete t.images,t.width=parseInt(t.width,10),t.length=parseInt(t.length,10),this.loading=!0,this.updated=!1;let s="add"==this.formType?URL.api+ROUTES.PUT.commission.ad:URL.api+ROUTES.PUT.commission.ad+"?id="+this.nowId;this.$.autoAjax("put",s,e.formObj,{ok:e=>{0==e.state&&null!=e.data?("add"==this.formType?this.$message.success(LANG["新增成功"]||"新增成功"):this.$message.success(LANG["修改成功"]||"修改成功"),this.loading=!1,this.updated=!0,this.updateType=this.formType):2===e.state?(this.formType,this.$message.error(LANG["请添加图片"]||"请添加图片"),this.loading=!1):("add"==this.formType?this.$message.error(LANG["新增失败，请稍候重试!"]||"新增失败，请稍候重试!"):this.$message.error(LANG["修改失败，请稍候重试!"]||"修改失败，请稍候重试!"),this.loading=!1)},p:()=>{},error:e=>{console.log(e)}}).catch(e=>{})}},computed:{},mounted(){},created(){this.init()}},l=s(10),r=Object(l.a)(o,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"clearfix",attrs:{id:"agentResources"}},[s("el-col",{staticClass:"pb",staticStyle:{"text-align":"right"},attrs:{span:24}},[s("el-button",{staticClass:"addManage",attrs:{type:"primary",size:"small"},domProps:{textContent:e._s(e.LANG["新增代理推广资源"]||"新增代理推广资源")},on:{click:e.openform}})],1),e._v(" "),s("el-col",[s("formEdit",{attrs:{formVisible:e.formVisible,formTitel:e.formTitel,formConfig:e.formConfig,type:e.type,labelWidth:e.labelWidth,size:"tiny",isEdit:e.isEdit,formType:e.formType},on:{"get-form":e.getForm}})],1),e._v(" "),s("el-col",[s("tablegrid",{attrs:{columnsUrl:e.columnsUrl,tableUrl:e.tableUrl,updated:e.updated,showRefresh:!0},on:{"do-handle":e.doHandle}})],1)],1)},[],!1,null,null,null);t.default=r.exports}}]);