(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{129:function(e,i,t){"use strict";t.r(i);var o=t(202),l=t(203),r={data:()=>({columnsUrl:"",tableUrl:"",updated:!1,size:"tiny",formConfig:[{prop:"level",value:"",type:"select",label:"代理等级",disabled:!0,list:[{label:"青铜",value:"1"},{label:"白银",value:"2"},{label:"黄金",value:"3"},{label:"铂金",value:"4"},{label:"钻石",value:"5"},{label:"至尊",value:"6"}]},{prop:"experience",value:"",type:"number",label:"晋升所需经验",disabled:!1,rules:[{require:!1}]},{prop:"commission_self",value:"",type:"number",label:"自身退佣(%)",rules:[{require:!1}]},{prop:"commission_level",value:"",type:"number",label:"一级退佣(%)",rules:[{require:!1}]},{prop:"commission_directly",value:"",type:"number",label:"二级退佣(%)",rules:[{require:!1}]}],type:"default",formType:"",formTitel:"",labelWidth:"120px",editVisible:{state:!1},isEdit:{state:!1},name:"",setConfigDialog:!1,configForm:{advance_money:"",directly_experience:"",level_experience:"",type:"lasting",commission_exp:""},configRules:{advance_money:[{required:!0,message:"请输入有效会员条件",trigger:"blur"}],directly_experience:[{required:!0,message:"请输入每个直属可以获得经验值",trigger:"blur"}],level_experience:[{required:!0,message:"请输入每个下下级可以获得经验值",trigger:"blur"}],commission_exp:[{required:!0,message:"请输入每1元退佣可以获得经验值",trigger:"blur"}],type:[{required:!0,message:"请选择有效领取时间",trigger:"change"}]}}),methods:{init(){this.tableUrl=URL.api+ROUTES.GET.user.agent.level,this.columnsUrl="static/json/agent/agentRebate/columns.json"},doHandle(e){switch(this.updated=!1,e.fn){case"doEdit":this.doEdit(e.row)}},handleClose(){this.setConfigDialog=!this.setConfigDialog},setConfigSubmit(e){let i=this;this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;this.$.autoAjax("post",URL.api+ROUTES.GET.user.agent.global,i.configForm,{ok:e=>{e.data&&0===e.state&&i.$message.success(LANG["修改参数设置成功"]||"修改参数设置成功")},error:e=>{i.$message.error(LANG["修改失败，请稍候重试！"]||"修改失败，请稍候重试！")}}),this.setConfigDialog=!this.setConfigDialog})},doEdit(e){this.editVisible.state=!0,this.isEdit.state=!0,"6"==e.level.toString()?this.formConfig[1].disabled=!0:this.formConfig[1].disabled=!1,this.formTitel="当前代理等级："+{1:"青铜",2:"白银",3:"黄金",4:"铂金",5:"钻石",6:"至尊"}[e.level]||!1,this.formConfig[0].value=e.level.toString(),this.formConfig[1].value=e.experience,this.formConfig[2].value=e.commission_self,this.formConfig[3].value=e.commission_level,this.formConfig[4].value=e.commission_directly,this.name=e.name},getForm(e){let i={level:e.formObj.level,experience:e.formObj.experience,commission_self:e.formObj.commission_self,commission_level:e.formObj.commission_level,commission_directly:e.formObj.commission_directly,valid_bet:e.formObj.valid_bet,name:this.name};this.$.autoAjax("post",URL.api+ROUTES.POST.user.level,i,{ok:e=>{e.data&&0===e.state&&(this.$message.success(e.msg),this.updated=!0)},p:()=>{},error:e=>{console.log(e)}})},setConfig(){let e=this;this.setConfigDialog=!this.setConfigDialog,this.$.autoAjax("get",URL.api+ROUTES.GET.user.agent.global,"",{ok:i=>{i.data&&0===i.state&&(e.configForm.advance_money=i.data.advance_money,e.configForm.directly_experience=i.data.directly_experience,e.configForm.level_experience=i.data.level_experience,e.configForm.type=i.data.type,e.configForm.commission_exp=i.data.commission_exp)},error:i=>{e.$message.error(LANG["获取配置参数失败，请稍候重试！"]||"获取配置参数失败，请稍候重试！")}})}},components:{tablegrid:o.a,formEdit:l.a},computed:{},watch:{},mounted(){},created(){this.init()}},s=t(10);var a=function(e){t(520)},n=Object(s.a)(r,function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"agentRebate"}},[t("el-row",[t("el-col",{staticClass:"tRight"},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.setConfig}},[e._v("参数设置")])],1),e._v(" "),t("el-col",[t("tablegrid",{attrs:{columnsUrl:e.columnsUrl,updated:e.updated,tableUrl:e.tableUrl,getData:!0,pageSet:!1},on:{"do-handle":e.doHandle}})],1),e._v(" "),t("el-col",[t("formEdit",{attrs:{formTitel:e.formTitel,formVisible:e.editVisible,formConfig:e.formConfig,type:e.type,size:e.size,labelWidth:e.labelWidth,isEdit:e.isEdit,formType:e.formType},on:{"get-form":e.getForm}})],1),e._v(" "),t("el-col",[t("el-dialog",{attrs:{title:"参数设置",visible:e.setConfigDialog,size:"tiny","before-close":e.handleClose},on:{"update:visible":function(i){e.setConfigDialog=i}}},[t("el-form",{ref:"configForm",staticClass:"demo-ruleForm",attrs:{model:e.configForm,rules:e.configRules,"label-width":"170px"}},[t("el-form-item",{attrs:{label:"有效会员条件：",prop:"advance_money"}},[t("el-input",{attrs:{type:"number"},model:{value:e.configForm.advance_money,callback:function(i){e.$set(e.configForm,"advance_money",i)},expression:"configForm.advance_money"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"每一个直属可获得：",prop:"directly_experience"}},[t("el-input",{attrs:{type:"number"},model:{value:e.configForm.directly_experience,callback:function(i){e.$set(e.configForm,"directly_experience",i)},expression:"configForm.directly_experience"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"每一个下下级可获得：",prop:"level_experience"}},[t("el-input",{attrs:{type:"number"},model:{value:e.configForm.level_experience,callback:function(i){e.$set(e.configForm,"level_experience",i)},expression:"configForm.level_experience"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"每1元退佣可获得：",prop:"commission_exp"}},[t("el-input",{attrs:{type:"number"},model:{value:e.configForm.commission_exp,callback:function(i){e.$set(e.configForm,"commission_exp",i)},expression:"configForm.commission_exp"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"有效领取时间：",prop:"type"}},[t("el-radio-group",{model:{value:e.configForm.type,callback:function(i){e.$set(e.configForm,"type",i)},expression:"configForm.type"}},[t("el-radio",{attrs:{label:"time"}},[e._v("24小时")]),e._v(" "),t("el-radio",{attrs:{label:"lasting"}},[e._v("永久生效")])],1)],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(i){e.setConfigDialog=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(i){return e.setConfigSubmit("configForm")}}},[e._v("修 改")])],1)],1)],1)],1)],1)},[],!1,a,null,null);i.default=n.exports},520:function(e,i,t){}}]);