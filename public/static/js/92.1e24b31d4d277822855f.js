(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{158:function(e,t,a){"use strict";a.r(t);var i=a(202),s=a(203),r=a(206),o={data:()=>({LANG:LANG,tableUrl:"",columnsUrl:"",baseUrl:"",searchConfigtitle:[{prop:"type_id",value:"",label:"优惠类型",type:"select",list:[]},{prop:"name",value:"",type:"text",label:"优惠活动名称"}],searchtype:"search",searchlabelWidth:"100px",searchformVisible:{state:!1},searchisEdit:{state:!1},type:"default",formTitel:"",labelWidth:"110px",isEdit:{state:!1},formVisible:{state:!1},formType:"",formConfig:[{prop:"types_id",value:[],label:"优惠类型",sReset:!1,checkAll:!1,allBtnShow:!0,type:"checkGroup",list:[],Arr:[],rules:[{require:!0}]},{prop:"name",value:"",label:"优惠活动名称",type:"text",rules:[{require:!0}]},{prop:"title",value:"",label:"优惠活动标题",type:"text",rules:[{require:!0}]},{type:"dateGroup",label:"有效时间",required:!0,prop:[{prop:"begin_time",value:"",label:"开始时间"},{prop:"end_time",value:"",label:"结束时间"}],rules:[{require:!0}]},{prop:"language_id",value:"",label:"语言",type:"select",list:[],propVal:"language_name",rules:[{require:!0}]},{prop:"description",value:"",type:"textarea",label:"优惠活动描述",rules:[{require:!0}]},{prop:"cover",value:[],action:URL.img,folder:"active",list:[],type:"upload",label:"优惠活动页",listType:"picture",rules:[{require:!0}]},{prop:"sort",value:"",label:"排序",type:"text",rules:[{require:!0},{integer:!0}]},{prop:"open_mode",value:"",type:"radioGroup",label:"打开方式",radioInput:!0,list:[{value:"2",label:"新窗口"},{value:"3",label:"本页面跳转"},{value:"4",label:"下拉展开"}],rules:[{require:!0}]},{prop:"state",value:"apply",label:"前台申请",type:"select",ifVal:"4",ifKey:"open_mode",isDefault:!0,list:[{label:"启用",value:"apply"},{label:"停用",value:""}]},{prop:"link",value:"",label:"链接",type:"url",ifVal:"2",ifKey:"open_mode",rules:[{require:!0}]},{prop:"content",value:"",type:"markdown",ifVal:"4",ifKey:"open_mode",label:"PC优惠规则编辑",rules:[{require:!0}]},{prop:"content2",value:"",type:"markdown",ifVal:"4",ifKey:"open_mode",label:"h5优惠规则编辑",rules:[{require:!0}]},{prop:"apply_times",value:"",label:"会员申请次数",type:"text",rules:[{require:!0}]},{prop:"status",value:"enabled",label:"状态",type:"select",isDefault:!0,list:[{label:"启用",value:"enabled"},{label:"停用",value:"disabled"}],rules:[{require:!0}]}],size:"small",editflag:!1,nowId:-1,confirmConfig:{state:!1,msg:"",fn:""},loading:!1,updated:!1,getData:!0,modeType:1,modeName:""}),components:{tablegrid:i.a,formEdit:s.a,confirm:r.a},methods:{init(){this.tableUrl=URL.api+ROUTES.GET.actives.manage,this.baseUrl=URL.api+ROUTES.GET.actives.manage,this.columnsUrl="static/json/preAct/contentManagement/columns.json";let e=this.searchConfigtitle[0].list,t=this.formConfig[0].list,a=this.formConfig[4].list,i=this.formConfig[0].Arr;this.$.autoAjax("get",URL.api+ROUTES.GET.activity.types+"?page=1&page_size=100","",{ok:a=>{if(0==a.state&&a.data){let s=a.data||[];for(let a in s)e.push({label:s[a].name,value:s[a].id.toString()}),i.push({label:s[a].name,value:s[a].id.toString()}),t.push(s[a].id.toString())}},p:()=>{},error:e=>{console.log(e)}}),this.$.autoAjax("get",URL.api+ROUTES.GET.langeages,"",{ok:e=>{if(0==e.state&&e.data){let t=e.data||[];for(let e in t)a.push({label:t[e].name,value:t[e].id.toString()})}},p:()=>{},error:e=>{console.log(e)}})},doHandle(e){switch(this.updated=!1,this.nowId=e.row.id,this.formType="",e.fn){case"doEnabled":this.doEnabled(e.row);break;case"doEdit":this.doEdit(e.row);break;case"doDisabled":this.doDisabled(e.row);break;case"doDel":this.doDel(e.row)}},AddNew(){this.formTitel=this.LANG["新增活动"]||"新增活动",this.formType="add",this.formConfig[this.formConfig.length-1].disabled=!1,this.formVisible.state=!0},resetForm(e){"init"==e.state&&(this.tableUrl=this.baseUrl)},getForm(e){let t={};for(let a in e.formObj)if("types_id"===a){let i=[];e.formObj[a].forEach(e=>{this.formConfig[0].Arr.forEach(t=>{e==t.value&&i.push({id:FORMATINT(t.value),name:t.label})})}),t.types=i}else t[a]=e.formObj[a];"4"==t.open_mode&&delete t.link;let a="";e.formObj.cover.forEach(e=>{a+=e}),t.cover=a,t.created_uid=sessionStorage.userId;let i=this;if(this.loading=!0,this.updated=!1,this.fullscreenLoading=!0,"add"==i.formType)this.$.autoAjax("put",URL.api+ROUTES.POST.active.manual,t,{ok:e=>{0==e.state&&e.data?(this.$message.success(LANG["恭喜您，新增优惠活动成功！"]||"恭喜您，新增优惠活动成功！"),this.formType="",this.updated=!0):2002==e.state&&e.msg?this.$message.error(LANG[e.msg]||e.msg):this.$message.error(LANG["新增优惠活动失败，请稍后重试！"]||"新增优惠活动失败，请稍后重试！"),i.loading=!1},p:()=>{},error:e=>{this.$message.error(LANG["未知错误，请稍后重试！"]||"未知错误，请稍后重试！"),i.loading=!1}});else{e.formObj.id=i.nowId;for(let e in t)""===t[e]&&(delete t[e],"state"===e&&(t.state=""));this.$.autoAjax("put",URL.api+ROUTES.PUT.active.manual.$(parseInt(e.formObj.id)),t,{ok:e=>{0==e.state&&e.data?(this.$message.success(LANG["恭喜您，修改优惠活动成功！"]||"恭喜您，修改优惠活动成功！"),this.formType="",this.updated=!0):this.$message.error(LANG["修改优惠活动失败，请稍后重试！"]||"修改优惠活动失败，请稍后重试！"),i.loading=!1},p:()=>{},error:e=>{this.$message.error(LANG["未知错误，请稍后重试！"]||"未知错误，请稍后重试！"),i.loading=!1}})}},doEnabled(e){parseInt(e.id)&&(this.confirmConfig.state=!0,this.confirmConfig.msg=(this.LANG["确定启用"]||"确定启用")+'"'+e.name+'"'+(this.LANG["吗？"]||"吗？"),this.confirmConfig.fn="enabled")},doDisabled(e){parseInt(e.id)&&(this.confirmConfig.state=!0,this.confirmConfig.msg=(this.LANG["确定停用"]||"确定停用")+'"'+e.name+'"'+(this.LANG["吗？"]||"吗？"),this.confirmConfig.fn="disabled")},doEdit(e){if(parseInt(e.id)<0)return;this.loading=!0,this.formConfig[this.formConfig.length-1].disabled=!0;let t=this;this.formTitel="修改活动列表",this.$.autoAjax("get",URL.api+ROUTES.GET.active.manual.$(parseInt(e.id)),"",{ok:e=>{0==e.state&&e.data&&(FORMVAL(e.data,t.formConfig),"1"===e.data.disabled&&(t.formConfig[t.formConfig.length-1].value="disabled"),"1"===e.data.enabled&&(t.formConfig[t.formConfig.length-1].value="enabled"),t.formConfig[11].value=e.data.content||"",t.formConfig[12].value=e.data.content2||"",t.formConfig[8].value=e.data.open_mode||"",t.formConfig[0].value.splice(0,t.formConfig[0].value.length),e.data.types&&e.data.types.forEach(e=>{t.formConfig[0].value.push(e.id.toString())}),t.formType="edit",t.isEdit.state=!0,t.formVisible.state=!0,t.loading=!1)},p:()=>{},error:e=>{this.$message.error(LANG["未知错误，请稍后重试！"]||"未知错误，请稍后重试！"),t.loading=!1}})},doDel(e){this.modeName=e.name,parseInt(e.id)&&(this.confirmConfig.state=!0,this.confirmConfig.msg=(this.LANG["确定删除"]||"确定删除")+'"'+e.name+'"'+(this.LANG["吗？"]||"吗？"),this.confirmConfig.fn="delete")},doQuery(e){this.tableUrl=this.baseUrl+this.addSearch(e.item)},doConfirm(e){this.loading=!0;let t=this;switch(e.fn){case"delete":this.$.autoAjax("delete",URL.api+ROUTES.DELETE.active.manual.$(parseInt(this.nowId))+"?type="+t.modeType+"&name="+t.modeName,"",{ok:e=>{0==e.state&&e.data?(t.updated=!0,this.$message.success(LANG["删除成功"]||"删除成功")):this.$message.error(LANG["删除失败，请稍后重试！"]||"删除失败，请稍后重试！"),t.loading=!1},p:()=>{},error:e=>{this.$message.error(LANG["未知错误，请稍后重试！"]||"未知错误，请稍后重试！"),t.loading=!1}});break;case"disabled":this.$.autoAjax("patch",URL.api+ROUTES.PATCH.active.manual.$(parseInt(this.nowId)),{status:"disabled"},{ok:e=>{0==e.state&&e.data?(t.updated=!0,this.$message.success(LANG["停用成功"]||"停用成功")):this.$message.error(LANG[`${e.msg}`]||`${e.msg}`),t.loading=!1},p:()=>{},error:e=>{console.log(e)}});break;case"enabled":this.$.autoAjax("patch",URL.api+ROUTES.PATCH.active.manual.$(parseInt(this.nowId)),{status:"enabled"},{ok:e=>{0==e.state&&e.data?(t.updated=!0,this.$message.success(LANG["启用成功"]||"启用成功")):this.$message.error(LANG[`${e.msg}`]||`${e.msg}`),t.loading=!1},p:()=>{},error:e=>{this.$message.error(LANG["未知错误，请稍后重试！"]||"未知错误，请稍后重试！"),t.loading=!1}})}},changeRadio(e){const t=e.item;2!=t&&3!=t||(this.formConfig[10].ifVal=t)}},mounted(){this.init()},directives:{insertTip:{update:function(e,t,a){setTimeout(()=>{let t=e.querySelector(".upload-tip");if(t){let e=t.innerHTML;if(e.match(/460/))return;t.innerHTML=e.replace(/2M/,"2M，分辨率大小为460*180像素")}})}}}},l=a(10);var n=function(e){a(446)},d=Object(l.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"clearfix",attrs:{id:"proxyCopy"}},[a("el-col",{staticClass:"pb"},[a("div",{staticClass:"search"},[a("formEdit",{attrs:{formVisible:e.searchformVisible,formConfig:e.searchConfigtitle,type:e.searchtype,labelWidth:e.searchlabelWidth,isEdit:e.searchisEdit,addText:e.LANG["新增活动"]||"新增活动"},on:{"do-query":e.doQuery,"reset-form":e.resetForm,"add-new":e.AddNew}})],1)]),e._v(" "),a("el-col",[a("tablegrid",{attrs:{columnsUrl:e.columnsUrl,tableUrl:e.tableUrl,tableCheck:!1,tableIndex:!1,showRefresh:!1,updated:e.updated},on:{"do-handle":e.doHandle}})],1),e._v(" "),a("el-col",{directives:[{name:"insertTip",rawName:"v-insertTip"}]},[a("formEdit",{attrs:{formTitel:e.formTitel,formVisible:e.formVisible,formConfig:e.formConfig,type:e.type,labelWidth:e.labelWidth,isEdit:e.isEdit,formType:e.formType,size:e.size},on:{"get-form":e.getForm,"change-radio":e.changeRadio}})],1),e._v(" "),a("el-col",[a("confirm",{attrs:{confirmConfig:e.confirmConfig},on:{"do-confirm":e.doConfirm}})],1)],1)},[],!1,n,null,null);t.default=d.exports},446:function(e,t,a){}}]);