(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{162:function(t,e,i){"use strict";i.r(e);var o=i(203),l=(i(15),i(268)),a={data:()=>({LANG:LANG,formVisible:{},isEdit:{},formTitel:"",labelWidth:"150px",tabOperation:[{label:"批量停用",fn:"delMeg"}],updated:!1,confirmConfig:{state:!1,msg:"",fn:""},formType:"",nowId:0,formConfig:[{prop:"name",value:"",type:"text",label:"站点名称",rules:[{require:!0}]},{prop:"title",value:"",type:"text",label:"站点标题",rules:[{require:!0}]},{prop:"bottom",value:"",type:"text",label:"站点底部信息",rules:[{require:!0}]},{prop:"domain",value:"",type:"textarea",domainType:"front",label:"域名列表",rulesType:"urls",rules:[{require:!0,disabled:!0}],prompt:LANG["绑定多个域名请使用换行（回车）隔开"]||"绑定多个域名请使用换行（回车）隔开"},{prop:"www_tname",text:"模板选择",label:"PC模板",type:"button",value:"",img:"",model:[],showKey:"",temtype:"pc"},{prop:"m_tname",text:"模板选择",label:"H5前台模板",type:"button",value:"",img:"",model:[],showKey:"",temtype:"h5"},{prop:"is_ssl",value:"",label:"SSL加密",type:"select",list:[{label:"是",value:"1"},{label:"否",value:"0"}],rules:[{require:!0}]},{prop:"lang",value:"",label:"语言",type:"select",list:[],rules:[{require:!0}]},{prop:"logos",value:[],type:"upload",fileNum:1,label:"LOGO",action:URL.img,folder:"adlist",rules:[{require:!0}]}],templist:[],showKey:"",tempType:"",h5Temp:"",wwwTemp:"",loading:!1,dialogVisible:!1,updateKeys:"",dnsUrl:""}),components:{formEdit:o.a,H5Model:l.a},methods:{init(){this.formType="",this.columnsUrl="static/json/systemSettings/domainNameSet/columns.json",this.tableUrl=URL.api+ROUTES.GET.system.domain,this.baseUrl=URL.api+ROUTES.GET.system.domain;let t=URL.api+ROUTES.GET.langeages;this.$.autoAjax("get",t,"",{ok:t=>{let e=t.data||[];for(let t in e)this.formConfig[7].list.push({label:e[t].name,value:e[t].code})},p:()=>{},error:t=>{console.log(t)}});let e=URL.api+"/system/website/style",i=this;this.$.autoAjax("get",e,"",{ok:t=>{let e=t.data.h5,o=t.data.pc;for(let t in e)i.formConfig[5].model.push({id:e[t].id,key:e[t].key,checked:e[t].checked});for(let t in o)i.formConfig[4].model.push({id:o[t].id,key:o[t].key,checked:o[t].checked})},p:()=>{},error:t=>{console.log(t)}}),this.$.autoAjax("get",URL.api+ROUTES.GET.system.domain+"?type=2","",{ok:t=>{if(0===t.state&&t.data){this.dnsUrl=t.data.domain||window.location.host;let e=t.data.info||[];FORMVAL(e,i.formConfig);i.formConfig[7].list;i.formConfig[7].value=e.lang;let o="",l=e.domains||[];for(let t in l)l[t].domain&&(o=o+l[t].domain+"\r\n");i.formConfig[3].value=o,i.formConfig[8].value.push(e.logo),i.formConfig[4].showKey=e.www_tname,i.formConfig[5].showKey=e.m_tname,i.formConfig[4].value="/static/img/pc_new/"+e.www_tname+".jpg",i.formConfig[5].value="/static/img/mobile_new/"+e.m_tname+".jpg",this.h5Temp=e.m_tname,this.wwwTemp=e.www_tname,this.formType="eidt"}},p:()=>{},error:t=>{console.log(t)}})},doTemplate(t){this.showKey=t.item.showKey||("h5"===t.item.temtype?e.formConfig[5].model[0].key:e.formConfig[4].model[0].key),this.tempType="h5"===t.item.temtype?"h5":"pc";let e=this;this.templist=[],t.item.model.forEach(t=>{e.templist.push(t)}),this.dialogVisible=!0},doGetTemplate(t){"pc"===t.type?(this.updateKeys="www_tname,/static/img/pc_new/"+t.data.key+".jpg",this.wwwTemp=t.data.key):(this.updateKeys="m_tname,/static/img/mobile_new/"+t.data.key+".jpg",this.h5Temp=t.data.key)},saveForm(t){let e=this,i={type:2,build:0,remarks:""};for(let e in t.formObj)"domain"===e?(i[e]=[],t.formObj[e].replace(new RegExp("\r\n|\n\r|\n|\r","g"),"|").split("|").forEach(t=>{t&&i[e].push(t)})):i[e]=t.formObj[e];i.m_tname=this.h5Temp,i.www_tname=this.wwwTemp,i.logo=t.formObj.logos.toString(),delete i.logos;let o=this.formConfig[5].model,l=e.formConfig[4].model;for(let t in o)this.h5Temp===o[t].key&&(i.m_tid=o[t].id);for(let t in l)this.wwwTemp===l[t].key&&(i.www_tid=l[t].id);this.$.autoAjax("put",URL.api+ROUTES.PUT.system.domain,i,{ok:t=>{0===t.state&&t.data?e.$message.success(LANG["恭喜您，站点配置成功！"]||"恭喜您，站点配置成功！"):4005===t.state?(e.$message.error(LANG["厅主站点验证失败，请修改后重试！"]||"厅主站点验证失败，请修改后重试！"),e.showUrlError(t.data),e.loading=!1):1002===t.state?(e.$message.error(LANG[t.msg]||t.msg),e.showUrlError(t.data),e.loading=!1):(e.$message.error(LANG["站点配置失败，请稍后重试！"]||"站点配置失败，请稍后重试！"),e.loading=!1)},p:()=>{},error:t=>{console.log(t)}}).catch(t=>{})},showUrlError(t){let e="";if(0!==t.length){for(let i in t)e=e+t[i]+"\r\n";this.$notify.error({title:"域名验证失败列表",message:e,duration:0})}}},mounted(){},created(){this.init()}},s=i(10);var r=function(t){i(543)},n=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"clearfix",attrs:{id:"domainNameSet"}},[i("el-col",{staticClass:"mt20",staticStyle:{"max-width":"600px"},attrs:{span:12,offset:6}},[i("formEdit",{attrs:{formVisible:t.formVisible,formConfig:t.formConfig,formType:t.formType,type:"pageForm",labelWidth:t.labelWidth,updateKeys:t.updateKeys,dnsUrl:t.dnsUrl,isEdit:t.isEdit,formTitel:t.formTitel},on:{"get-button":t.doTemplate,"get-form":t.saveForm}})],1),t._v(" "),i("el-col",[i("el-dialog",{attrs:{title:t.LANG["提示"]||"提示",visible:t.dialogVisible,size:"large"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("H5Model",{attrs:{model:t.templist,showKey:t.showKey,type:t.tempType,showWindow:t.dialogVisible},on:{"get-template":t.doGetTemplate}}),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.LANG["取消"]||"取消"))]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v(t._s(t.LANG["确定"]||"确定"))])],1)],1)],1)],1)},[],!1,r,null,null);e.default=n.exports},258:function(t,e,i){},268:function(t,e,i){"use strict";var o={name:"ElButton",props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean},methods:{handleClick(t){this.$emit("click",t)},handleInnerClick(t){this.disabled&&t.stopPropagation()}}},l=i(10),a=Object(l.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"el-button",class:[t.type?"el-button--"+t.type:"",t.size?"el-button--"+t.size:"",{"is-disabled":t.disabled,"is-loading":t.loading,"is-plain":t.plain}],attrs:{disabled:t.disabled,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.loading?i("i",{staticClass:"el-icon-loading",on:{click:t.handleInnerClick}}):t._e(),t._v(" "),t.icon&&!t.loading?i("i",{class:"el-icon-"+t.icon,on:{click:t.handleInnerClick}}):t._e(),t._v(" "),t.$slots.default?i("span",{on:{click:t.handleInnerClick}},[t._t("default")],2):t._e()])},[],!1,null,null,null).exports,s={data:()=>({imgNumber:13,imgUrlArr:[],imgUrl:"/static/img/mobile_new/",show:!0,bigImage:!1,showIndexImage:0}),props:{showKey:{type:String,default:""},model:Array,type:{type:String,default:"h5"},showWindow:{type:Boolean,default:!1}},components:{ElButton:a},methods:{init(){this.imgUrlArr.splice(0,this.imgUrlArr.length);let t=this.imgUrlArr;if(this.imgUrl="h5"===this.type?"/static/img/mobile_new/":"/static/img/pc_new/",this.show=!0,this.model.length>0){let e=this.showKey?this.showKey:this.model[0].key;this.model.forEach(i=>{let o="0";i.key===e&&(o="1"),t.push({id:i.id,key:i.key,checked:o})})}this.$emit("get-template",{data:this.imgUrlArr[0],type:this.type})},preview(t){this.show=!1,this.showIndexImage=t},back(){this.show=!0},open(t){for(let t in this.imgUrlArr)this.imgUrlArr[t].checked="0";this.imgUrlArr[t].checked="1",this.$emit("get-template",{data:this.imgUrlArr[t],type:this.type})}},created(){this.init()},watch:{showKey:function(t){t&&this.init()},type:function(t){t&&this.init()},showWindow:function(t){t&&(this.show=!0)}}};var r=function(t){i(258)},n=Object(l.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"mobile"}},[t.show?i("el-row",{attrs:{gutter:20}},[i("el-col",{staticClass:"contCard",attrs:{span:24}},t._l(t.imgUrlArr,function(e,o){return i("div",{staticClass:"imgBox ml20 mb"},[i("el-card",{staticClass:"mt20 cardBox",class:{active:"1"===e.checked},attrs:{"body-style":{padding:"0"}}},[i("img",{attrs:{src:t.imgUrl+e.key+"_s.jpg",alt:"图片飞走了",width:"100%",height:"auto"},on:{click:function(e){return t.preview(o)}}}),t._v(" "),"1"!==e.checked?i("el-row",{staticClass:"mb20 mt20"},[i("el-col",{attrs:{span:5,offset:6}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.preview(o)}}},[t._v("预览")])],1),t._v(" "),i("el-col",{attrs:{span:5,offset:3}},[i("el-button",{attrs:{type:"primary",plain:!0},on:{click:function(e){return t.open(o)}}},[t._v("使用")])],1)],1):i("el-row",{staticClass:"mb20 mt20 tCent"},[i("el-col",{attrs:{span:24}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.preview(o)}}},[t._v("预览")])],1),t._v(" "),i("div",{staticClass:"cardCheck"},[t._v("使用中")])],1)],1)],1)}),0)],1):i("div",{staticClass:"wrapper"},[i("div",{staticClass:"imgwrapper tCent"},[i("a",{staticStyle:{display:"block",width:"auto",heigth:"auto"},attrs:{href:"javascript:;",title:"点击返回模块列表"},on:{click:t.back}},["h5"===this.type?i("img",{staticClass:"img",attrs:{src:t.imgUrl+t.imgUrlArr[t.showIndexImage].key+".jpg",alt:"图片飞走了",width:"auto",height:"auto"}}):i("img",{staticClass:"img",attrs:{src:t.imgUrl+t.imgUrlArr[t.showIndexImage].key+".jpg",alt:"图片飞走了",width:"100%",height:"auto"}})])])])],1)},[],!1,r,null,null);e.a=n.exports},543:function(t,e,i){}}]);