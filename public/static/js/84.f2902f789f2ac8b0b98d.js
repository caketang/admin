(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{193:function(t,e,i){"use strict";i.r(e);var s=i(202),a=i(203),o=i(206),n={data:()=>({LANG:LANG,loading:!1,columnsUrl:"",tableUrl:"",baseUrl:"",updated:!1,name:"",nowId:-1,formType:"",formConfig:[{prop:"domain",value:"",type:"url",label:"网址",rules:[{require:!0}]},{prop:"remark",value:"",type:"textarea",label:"备注",rules:[{max:30}]},{prop:"status",value:"enabled",label:"状态",type:"select",list:ARRAYS.state4,rules:[{max:30}]}],type:"default",formTitel:"",labelWidth:"90px",editVisible:{state:!1},isEdit:{state:!1},confirmConfig:{state:!1,msg:"",fn:""}}),components:{tablegrid:s.a,formEdit:a.a,confirm:o.a},methods:{init(){this.columnsUrl="/static/json/agent/agentLink/columns.json",this.baseUrl=URL.api+ROUTES.GET.user.agent.domain,"{}"==this.$route.query?this.tableUrl=URL.api+ROUTES.GET.user.agent.domain:(this.tableUrl=URL.api+ROUTES.GET.user.agent.domain+"?name="+this.$route.query.name,this.name=this.$route.query.name)},getForm(t){let e,i=this;if(this.loading=!0,"edit"===this.formType){t.formObj.id=this.nowId,e=URL.api+ROUTES.PUT.commission.link;let s={id:t.formObj.id,status:t.formObj.status,remark:t.formObj.remark};this.$.autoAjax("patch",e,s,{ok:t=>{0===t.state&&t.data?(i.$message.success(LANG["恭喜您，修改成功！"]||"恭喜您，修改成功！"),i.updated=!0):i.$message.error(LANG["代理链接修改失败，请稍候重试！"]||"代理链接修改失败，请稍候重试！"),this.loading=!1},p:()=>{},error:t=>{this.loading=!1,i.$message.error(LANG["代理链接修改失败，请稍候重试！"]||"代理链接修改失败，请稍候重试！")}})}},toSearch(){this.name&&(this.tableUrl=this.baseUrl+this.addSearch({name:this.name}))},doEdit(t){let e=this;this.nowId=t.id,this.formTitel="修改代理链接",this.formType="",setTimeout(()=>{FORMVAL(t,this.formConfig),e.formConfig[2].value=t.status,e.formType="edit",e.isEdit.state=!0,e.editVisible.state=!0},500)},doDelete(t){t.domain;this.nowId=t.id,this.confirmConfig.state=!0,this.confirmConfig.msg=(this.LANG["确定删除"]||"确定删除")+" '"+t.name+"的链接"+t.domain+"' "+(this.LANG["吗？"]||"吗？"),this.confirmConfig.fn="delete"},doConfirm(t){let e=this;switch(this.loading=!0,this.updated=!1,t.fn){case"delete":this.$.autoAjax("delete",URL.api+ROUTES.DELETE.commission.link+"?id="+this.nowId,"",{ok:t=>{null!=t.data&&t.data?(e.$message.success(LANG["恭喜您，代理链接删除成功！"]||"恭喜您，代理链接删除成功！"),e.updated=!0):e.$message.error(LANG["代理链接删除失败，请稍候重试！"]||"代理链接删除失败，请稍候重试！"),this.loading=!1},p:()=>{},error:t=>{this.loading=!1,e.$message.error(LANG["代理链接删除失败，请稍候重试！"]||"代理链接删除失败，请稍候重试！")}})}e.formType=""},doEnabled(t){let e=t.domain;this.nowId=t.id,this.confirmConfig.state=!0,this.confirmConfig.msg=(this.LANG["确定启用"]||"确定启用")+" '"+e+"' "+(this.LANG["吗？"]||"吗？"),this.confirmConfig.fn="enabled"},doDisabled(t){let e=t.domain;this.nowId=t.id,this.confirmConfig.state=!0,this.confirmConfig.msg=(this.LANG["确定停用"]||"确定停用")+" '"+e+"' "+(this.LANG["吗？"]||"吗？"),this.confirmConfig.fn="disabled"}},computed:{},mounted(){},created(){this.init()},activated(){this.updated=!1,setTimeout(()=>{this.updated=!0},500)}},r=i(10);var l=function(t){i(487)},d=Object(r.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"clearfix",attrs:{id:"agentLink"}},[i("label",{staticClass:"state_info"},[i("span",[t._v("用户名：")]),t._v(" "),i("el-input",{staticClass:"intW",attrs:{placeholder:"请输入用户名",size:"small"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),i("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.toSearch}},[i("i",{staticClass:"icon el-icon-search"}),t._v("查 询")])],1),t._v(" "),t.loading?t._e():i("el-col",[i("tablegrid",{attrs:{columnsUrl:t.columnsUrl,tableUrl:t.tableUrl,updated:t.updated,isCreated:!0,pageSet:!1,showRefresh:!0}})],1),t._v(" "),t.loading?t._e():i("el-col",[i("formEdit",{attrs:{formTitel:t.formTitel,formVisible:t.editVisible,formConfig:t.formConfig,type:t.type,labelWidth:t.labelWidth,isEdit:t.isEdit,formType:t.formType},on:{"get-form":t.getForm}})],1),t._v(" "),i("el-col",[i("confirm",{attrs:{confirmConfig:t.confirmConfig},on:{"do-confirm":t.doConfirm}})],1)],1)},[],!1,l,null,null);e.default=d.exports},487:function(t,e,i){}}]);