webpackJsonp([77],{1017:function(e,t,a){var i=a(844);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(220)("2926a81c",i,!0)},1028:function(e,t,a){var i=a(855);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(220)("43c38b23",i,!0)},1115:function(e,t,a){a(1028);var i=a(59)(a(628),a(1269),"data-v-c5446714",null);e.exports=i.exports},1258:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"setup"}},[a("el-row",{staticClass:"tCent",staticStyle:{background:"#00bca4",color:"#ffffff",padding:"10px"}},[a("h1",[e._v(e._s(e.LANG["厅主站点配置"]||"厅主站点配置"))])]),e._v(" "),a("el-row",{staticClass:"steps",staticStyle:{"padding-top":"100px"},attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:8}},[a("step",{attrs:{active:e.num}})],1)],1),e._v(" "),a("el-row",{staticClass:"steps",attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:10}},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:1==e.num,expression:"num == 1"}],ref:"moneyForm",attrs:{model:e.moneyForm,rules:e.moneyRules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:e.LANG["选择货币"]||"选择货币",prop:"money"}},[a("el-select",{model:{value:e.moneyForm.money,callback:function(t){e.$set(e.moneyForm,"money",t)},expression:"moneyForm.money"}},e._l(e.moneylist,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:2==e.num,expression:"num == 2"}],ref:"emailForm",attrs:{model:e.emailForm,rules:e.emailRules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:e.LANG["SMTP服务器"]||"SMTP服务器",prop:"mailhost"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.emailForm.mailhost,callback:function(t){e.$set(e.emailForm,"mailhost",t)},expression:"emailForm.mailhost"}},e._l(e.mailhostArr,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.LANG["邮箱地址"]||"邮箱地址",prop:"mailaddress"}},[a("el-input",{attrs:{type:"email"},model:{value:e.emailForm.mailaddress,callback:function(t){e.$set(e.emailForm,"mailaddress",t)},expression:"emailForm.mailaddress"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.LANG["邮箱密码"]||"邮箱密码",prop:"mailpass"}},[a("el-input",{attrs:{type:"password"},model:{value:e.emailForm.mailpass,callback:function(t){e.$set(e.emailForm,"mailpass",t)},expression:"emailForm.mailpass"}})],1)],1),e._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:3==e.num,expression:"num == 3"}],ref:"adminForm",attrs:{model:e.adminForm,rules:e.adminRules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:e.LANG["站点名称"]||"站点名称",prop:"name"}},[a("el-input",{model:{value:e.adminForm.name,callback:function(t){e.$set(e.adminForm,"name",t)},expression:"adminForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.LANG["站点标题"]||"站点标题",prop:"title"}},[a("el-input",{model:{value:e.adminForm.title,callback:function(t){e.$set(e.adminForm,"title",t)},expression:"adminForm.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.LANG["站点底部信息"]||"站点底部信息",prop:"bottom"}},[a("el-input",{model:{value:e.adminForm.bottom,callback:function(t){e.$set(e.adminForm,"bottom",t)},expression:"adminForm.bottom"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.LANG["厅主域名"]||"厅主域名",prop:"domain"}},[a("el-input",{attrs:{type:"textarea"},on:{change:function(t){e.changewww("admin")}},model:{value:e.adminForm.domain,callback:function(t){e.$set(e.adminForm,"domain",t)},expression:"adminForm.domain"}})],1),e._v(" "),e.adminList.length>0?a("el-form-item",[a("el-collapse",e._l(e.adminList,function(t,i){return a("el-collapse-item",{key:"key",attrs:{title:t.url,name:parseInt(i)+1}},[a("el-col",{staticClass:"bmBorder",attrs:{span:24}},[a("div",{staticClass:"grid-content tCent"},[a("ul",[a("li",{staticClass:"w20 fl bg-purple"},[e._v(e._s(e.LANG["用途"]||"用途"))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple"},[e._v(e._s(e.LANG["域名"]||"域名"))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple"},[e._v(e._s(e.LANG["指向域名"]||"指向域名"))])])])]),e._v(" "),a("el-col",{staticClass:"bmBorder",attrs:{span:24}},[a("div",{staticClass:"grid-content tCent"},[a("ul",[a("li",{staticClass:"w20 fl bg-purple-light"},[e._v(e._s(t.adminlabel))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.adminUrl))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.adminlocalhost))])])])]),e._v(" "),a("el-col",{staticClass:"bmBorder",attrs:{span:24}},[a("div",{staticClass:"grid-content tCent"},[a("ul",[a("li",{staticClass:"w20 fl bg-purple-light"},[e._v(e._s(t.cpilabel))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.cpiUrl))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.cpilocalhost))])])])]),e._v(" "),a("el-col",{staticClass:"bmBorder",attrs:{span:24}},[a("div",{staticClass:"grid-content tCent"},[a("ul",[a("li",{staticClass:"w20 fl bg-purple-light"},[e._v(e._s(t.rpiLabel))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.rpi))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.rpilocalhost))])])])])],1)}))],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"选择语言",prop:"lang"}},[a("el-select",{model:{value:e.adminForm.lang,callback:function(t){e.$set(e.adminForm,"lang",t)},expression:"adminForm.lang"}},e._l(e.langugaeslist,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.LANG["是否SSL加密"]||"是否SSL加密",prop:"is_ssl"}},[a("el-select",{model:{value:e.adminForm.is_ssl,callback:function(t){e.$set(e.adminForm,"is_ssl",t)},expression:"adminForm.is_ssl"}},[a("el-option",{attrs:{label:"启用",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"停用",value:"0"}})],1)],1)],1),e._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:4==e.num,expression:"num == 4"}],ref:"wwwForm",attrs:{model:e.wwwForm,rules:e.wwwRules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:e.LANG["站点名称"]||"站点名称",prop:"name"}},[a("el-input",{model:{value:e.wwwForm.name,callback:function(t){e.$set(e.wwwForm,"name",t)},expression:"wwwForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.LANG["站点标题"]||"站点标题",prop:"title"}},[a("el-input",{model:{value:e.wwwForm.title,callback:function(t){e.$set(e.wwwForm,"title",t)},expression:"wwwForm.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:e.LANG["站点底部信息"]||"站点底部信息",prop:"bottom"}},[a("el-input",{model:{value:e.wwwForm.bottom,callback:function(t){e.$set(e.wwwForm,"bottom",t)},expression:"wwwForm.bottom"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"选择语言",prop:"lang"}},[a("el-select",{model:{value:e.wwwForm.lang,callback:function(t){e.$set(e.wwwForm,"lang",t)},expression:"wwwForm.lang"}},e._l(e.langugaeslist,function(e,t){return a("el-option",{key:t,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:e.LANG["前台主域名"]||"前台主域名",prop:"domain"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入主域名：example.com，实际使用域名将自动添加前缀,如:www.example.com"},on:{change:function(t){e.changewww("www")}},model:{value:e.wwwForm.domain,callback:function(t){e.$set(e.wwwForm,"domain",t)},expression:"wwwForm.domain"}})],1),e._v(" "),e.wwwList.length>0?a("el-form-item",[a("el-collapse",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},e._l(e.wwwList,function(t,i){return a("el-collapse-item",{key:"key",attrs:{title:t.url,name:parseInt(i)+1}},[a("el-col",{staticClass:"bmBorder",attrs:{span:24}},[a("div",{staticClass:"grid-content tCent"},[a("ul",[a("li",{staticClass:"w20 fl bg-purple"},[e._v(e._s(e.LANG["用途"]||"用途"))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple"},[e._v(e._s(e.LANG["域名"]||"域名"))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple"},[e._v(e._s(e.LANG["指向域名"]||"指向域名"))])])])]),e._v(" "),a("el-col",{staticClass:"bmBorder",attrs:{span:24}},[a("div",{staticClass:"grid-content tCent"},[a("ul",[a("li",{staticClass:"w20 fl bg-purple-light"},[e._v(e._s(t.master_wwwlabel))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.master_wwwUrl))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.master_wwwlocalhost))])])])]),e._v(" "),a("el-col",{staticClass:"bmBorder",attrs:{span:24}},[a("div",{staticClass:"grid-content tCent"},[a("ul",[a("li",{staticClass:"w20 fl bg-purple-light"},[e._v(e._s(t.wwwlabel))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.wwwUrl))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.wwwlocalhost))])])])]),e._v(" "),a("el-col",{staticClass:"bmBorder",attrs:{span:24}},[a("div",{staticClass:"grid-content tCent"},[a("ul",[a("li",{staticClass:"w20 fl bg-purple-light"},[e._v(e._s(t.mlabel))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.mUrl))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.h5localhost))])])])]),e._v(" "),a("el-col",{staticClass:"bmBorder",attrs:{span:24}},[a("div",{staticClass:"grid-content tCent"},[a("ul",[a("li",{staticClass:"w20 fl bg-purple-light"},[e._v(e._s(t.agentLabel))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.agentUrl))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.agentlocalhost))])])])]),e._v(" "),a("el-col",{staticClass:"bmBorder",attrs:{span:24}},[a("div",{staticClass:"grid-content tCent"},[a("ul",[a("li",{staticClass:"w20 fl bg-purple-light"},[e._v(e._s(t.apilabel))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.apiUrl))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.apilocalhost))])])])]),e._v(" "),a("el-col",{staticClass:"bmBorder",attrs:{span:24}},[a("div",{staticClass:"grid-content tCent"},[a("ul",[a("li",{staticClass:"w20 fl bg-purple-light"},[e._v(e._s(t.resLabel))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.res))]),e._v(" "),a("li",{staticClass:"w40 fl bg-purple-light"},[e._v(e._s(t.reslocalhost))])])])])],1)}))],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:e.LANG["PC模板"]||"PC模板",prop:"www"}},[a("el-button",{on:{click:function(t){e.getTemplate("pc")}}},[e._v(e._s(e.LANG["模板选择"]||"模板选择"))]),e._v(" "),e.pcSrc?a("img",{staticStyle:{"margin-left":"10px","vertical-align":"top"},attrs:{src:e.pcSrc,alt:"",height:"40px"}}):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:e.LANG["H5模板"]||"H5模板",prop:"m_tname"}},[a("el-button",{on:{click:function(t){e.getTemplate("h5")}}},[e._v(e._s(e.LANG["模板选择"]||"模板选择"))]),e._v(" "),e.h5Src?a("img",{staticStyle:{"margin-left":"10px","vertical-align":"top"},attrs:{src:e.h5Src,alt:"",height:"40px"}}):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:e.LANG["是否SSL加密"]||"是否SSL加密",prop:"is_ssl"}},[a("el-select",{model:{value:e.wwwForm.is_ssl,callback:function(t){e.$set(e.wwwForm,"is_ssl",t)},expression:"wwwForm.is_ssl"}},[a("el-option",{attrs:{label:e.LANG["启用"]||"启用",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:e.LANG["停用"]||"停用",value:"0"}})],1)],1)],1),e._v(" "),a("el-form",{directives:[{name:"show",rawName:"v-show",value:5==e.num,expression:"num == 5"}],ref:"linkForm",attrs:{model:e.linkForm,rules:e.linkRules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:e.LANG["代理网址"]||"代理网址",prop:"domain"}},[a("el-input",{model:{value:e.linkForm.domain,callback:function(t){e.$set(e.linkForm,"domain",t)},expression:"linkForm.domain"}})],1)],1),e._v(" "),6==e.num?a("div",{staticClass:"tCent"},[a("el-button",{on:{click:function(t){e.openUrl("pc")}}},[e._v(e._s(e.LANG["PC站点"]||"PC站点"))]),e._v(" "),a("el-button",{on:{click:function(t){e.openUrl("h5")}}},[e._v(e._s(e.LANG["H5站点"]||"H5站点"))]),e._v(" "),a("el-button",{on:{click:function(t){e.openUrl("agent")}}},[e._v(e._s(e.LANG["代理站点"]||"代理站点"))]),e._v(" "),a("el-button",{staticClass:"mb20",on:{click:function(t){e.openUrl("admin")}}},[e._v(e._s(e.LANG["厅主后台"]||"厅主后台"))]),e._v(" "),a("p",[e._v("PC站点："),a("a",{attrs:{target:"_black",href:e.pcLink}},[e._v(e._s(e.pcLink))])]),e._v(" "),a("p",[e._v("H5站点："),a("a",{attrs:{target:"_black",href:e.h5Link}},[e._v(e._s(e.h5Link))])]),e._v(" "),a("p",[e._v("代理站点："),a("a",{attrs:{target:"_black",href:e.agentLink}},[e._v(e._s(e.agentLink))])]),e._v(" "),a("p",[e._v("厅主首页："),a("a",{attrs:{target:"_black",href:e.adminLink}},[e._v(e._s(e.adminLink))])])],1):e._e()],1)],1),e._v(" "),a("el-row",[a("el-dialog",{attrs:{title:"发送邮箱地址",visible:e.maildialogVisible},on:{"update:visible":function(t){e.maildialogVisible=t}}},[a("el-form",{ref:"addressform",attrs:{model:e.addressform,rules:e.addressRules,"label-width":"150px"}},[a("el-form-item",{attrs:{label:"邮箱地址","label-width":"150px",prop:"mailAddress"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addressform.mailAddress,callback:function(t){e.$set(e.addressform,"mailAddress",t)},expression:"addressform.mailAddress"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.maildialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.loadingThree},on:{click:function(t){e.doTest()}}},[e._v("确 定")])],1)],1)],1),e._v(" "),a("el-row",{staticClass:"operation",attrs:{type:"flex",justify:"center"}},[a("el-col",{staticClass:"butgroup tCent",attrs:{span:16}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.num>1&&e.num<5,expression:"num > 1 && num < 5"}],attrs:{type:"primary"},on:{click:e.prev}},[e._v("上一步")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:2==e.num&&e.showMailNext,expression:"num ==2 && showMailNext"}],attrs:{type:"primary",loading:e.loading},on:{click:e.doNext}},[e._v("下一步")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:2!==e.num&&e.num<5,expression:"num !==2 && num < 5"}],attrs:{type:"primary",loading:e.loading},on:{click:e.doNext}},[e._v("下一步")]),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:2===e.num&&!e.showMailNext,expression:"num === 2 && !showMailNext"}],attrs:{type:"primary",loading:e.loadingTwo},on:{click:e.showMailForm}},[e._v("测试邮箱")]),e._v(" "),5===e.num?a("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v("开启站点")]):e._e(),e._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:2===e.num&&!e.showMailNext,expression:"num === 2 && !showMailNext"}],attrs:{type:"primary",loading:e.loadingFour},on:{click:e.doNextmail}},[e._v("跳过邮箱")])],1),e._v(" "),a("el-col",[a("el-dialog",{attrs:{title:"模板列表",visible:e.dialogVisible,size:"large"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("H5Model",{attrs:{model:e.templist,type:e.tempType},on:{"get-template":e.doGetTemplate}}),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},1269:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:""}},[a("el-steps",{attrs:{space:100,active:e.active,"finish-status":"success"}},[a("el-step",{attrs:{title:"货币"}}),e._v(" "),a("el-step",{attrs:{title:"邮件服务器"}}),e._v(" "),a("el-step",{attrs:{title:"后台站点"}}),e._v(" "),a("el-step",{attrs:{title:"前台站点"}}),e._v(" "),a("el-step",{attrs:{title:"推广链接"}}),e._v(" "),a("el-step",{attrs:{title:"配置成功"}})],1)],1)},staticRenderFns:[]}},290:function(e,t,a){a(1017);var i=a(59)(a(627),a(1258),"data-v-adf0ce68",null);e.exports=i.exports},329:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{keys:{type:String,default:""}},data:function(){return{imgBaseUrl:sessionStorage.URL_RPI,stsToken:sessionStorage.stsToken,LANG:LANG,loading:!1,imgUrl:"",imgConfig:{file:"",key:""}}},created:function(){this.init()},methods:{init:function(){this.loading=!1,this.imgUrl="",this.imgBaseUrl=sessionStorage.URL_RPI,this.stsToken=sessionStorage.stsToken,this.imgConfig.key=this.keys},change:function(){var e=this,t=e.$("#file").val(),a=t.split("\\"),i=new FormData(e.$("#formTag")[0]);e.loading=!0,i.append("pictrue",a[a.length-1]),i.append("pf","h5"),this.$.ajax({url:e.imgBaseUrl,type:"post",dataType:"json",cache:!1,headers:{Authorization:e.stsToken},data:i,processData:!1,contentType:!1,success:function(t){t.data&&1e4===t.code?(e.imgUrl=t.data.cache_url,e.$message.success("上传图片成功"),e.loading=!1,t.data.file_name&&(e.imgConfig.file=t.data.file_name)):(e.loading=!1,e.$message.error("资源站密钥失效，上传图片失败，请重新登录。"))},error:function(t){e.$message.error("上传图片失败"),e.loading=!1}})}},watch:{imgConfig:{handler:function(e,t){e&&e.file&&this.$emit("doUpload",{file:e.file,key:e.key})},immediate:!0,deep:!0}},computed:{}}},330:function(e,t,a){t=e.exports=a(219)(),t.push([e.i,"#formTag[data-v-17958b09],.up-loading[data-v-17958b09]{display:inline-block}.uploadImgBtn[data-v-17958b09]{width:90px;height:34px;border-radius:5px;cursor:pointer;position:relative;background:#20a0ff;border-color:#20a0ff;color:#fff;-webkit-background-size:cover;background-size:cover;text-align:center}.uploadImgBtn[data-v-17958b09]:hover{background:#f59275;border-color:#f59275;color:#fff}.uploadImgBtn .uploadImg[data-v-17958b09]{position:absolute;right:0;top:0;width:100%;height:100%;opacity:0;cursor:pointer}.preview[data-v-17958b09]{width:120px;height:auto;vertical-align:top}.pic[data-v-17958b09]{width:100px;height:100px}.pic img[data-v-17958b09]{width:100%;height:100%}.upload-text[data-v-17958b09]{float:left}.upload-tip[data-v-17958b09]{font-size:12px;color:#8391a5;margin-top:7px}",""])},331:function(e,t,a){var i=a(330);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(220)("1b801603",i,!0)},332:function(e,t,a){a(331);var i=a(59)(a(329),a(333),"data-v-17958b09",null);e.exports=i.exports},333:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"warp"},[a("form",{attrs:{id:"formTag",enctype:"multipart/form-data"}},[a("div",{staticClass:"uploadImgBtn",attrs:{id:"uploadImgBtn"}},[a("input",{staticClass:"uploadImg",attrs:{type:"file",name:"file",id:"file",loading:!0},on:{change:e.change}}),a("i",{staticClass:"el-icon-upload"}),e._v("选择图片\n        ")])]),e._v(" "),e.loading?a("div",{staticClass:"up-loading"},[a("i",{staticClass:"el-icon-loading"}),e._v(" 正在上传图片...")]):e._e(),e._v(" "),e.imgUrl?a("img",{staticClass:"preview",attrs:{src:e.imgUrl,alt:"图片预览"}}):e._e()])},staticRenderFns:[]}},421:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ElButton",props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean},methods:{handleClick:function(e){this.$emit("click",e)},handleInnerClick:function(e){this.disabled&&e.stopPropagation()}}}},426:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(462),l=function(e){return e&&e.__esModule?e:{default:e}}(i);t.default={data:function(){return{imgNumber:13,imgUrlArr:[],imgUrl:"/static/img/mobile_new/",show:!0,bigImage:!1,showIndexImage:0}},props:{showKey:{type:String,default:""},model:Array,type:{type:String,default:"h5"},showWindow:{type:Boolean,default:!1}},components:{ElButton:l.default},methods:{init:function(){this.imgUrlArr.splice(0,this.imgUrlArr.length);var e=this.imgUrlArr;if(this.imgUrl="h5"===this.type?"/static/img/mobile_new/":"/static/img/pc_new/",this.show=!0,this.model.length>0){var t=this.showKey?this.showKey:this.model[0].key;this.model.forEach(function(a){var i="0";a.key===t&&(i="1"),e.push({id:a.id,key:a.key,checked:i})})}this.$emit("get-template",{data:this.imgUrlArr[0],type:this.type})},preview:function(e){this.show=!1,this.showIndexImage=e},back:function(){this.show=!0},open:function(e){for(var t in this.imgUrlArr)this.imgUrlArr[t].checked="0";this.imgUrlArr[e].checked="1",this.$emit("get-template",{data:this.imgUrlArr[e],type:this.type})}},created:function(){this.init()},watch:{showKey:function(e){e&&this.init()},type:function(e){e&&this.init()},showWindow:function(e){e&&(this.show=!0)}}}},443:function(e,t,a){t=e.exports=a(219)(),t.push([e.i,"#mobile .cardCheck{position:absolute;right:0;text-align:right;bottom:-20px;font-size:12px;padding-left:2px}#mobile .active{box-sizing:border-box}#mobile .imgBox{width:282px;display:inline-block}.el-row{flex-wrap:wrap}.mb{margin-bottom:10px}",""])},451:function(e,t,a){var i=a(443);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(220)("314f5d88",i,!0)},462:function(e,t,a){var i=a(59)(a(421),a(474),null,null);e.exports=i.exports},466:function(e,t,a){a(451);var i=a(59)(a(426),a(475),null,null);e.exports=i.exports},474:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"el-button",class:[e.type?"el-button--"+e.type:"",e.size?"el-button--"+e.size:"",{"is-disabled":e.disabled,"is-loading":e.loading,"is-plain":e.plain}],attrs:{disabled:e.disabled,autofocus:e.autofocus,type:e.nativeType},on:{click:e.handleClick}},[e.loading?a("i",{staticClass:"el-icon-loading",on:{click:e.handleInnerClick}}):e._e(),e._v(" "),e.icon&&!e.loading?a("i",{class:"el-icon-"+e.icon,on:{click:e.handleInnerClick}}):e._e(),e._v(" "),e.$slots.default?a("span",{on:{click:e.handleInnerClick}},[e._t("default")],2):e._e()])},staticRenderFns:[]}},475:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"mobile"}},[e.show?a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"contCard",attrs:{span:24}},e._l(e.imgUrlArr,function(t,i){return a("div",{staticClass:"imgBox ml20 mb"},[a("el-card",{staticClass:"mt20 cardBox",class:{active:"1"===t.checked},attrs:{"body-style":{padding:"0"}}},[a("img",{attrs:{src:e.imgUrl+t.key+"_s.jpg",alt:"图片飞走了",width:"100%",height:"auto"},on:{click:function(t){e.preview(i)}}}),e._v(" "),"1"!==t.checked?a("el-row",{staticClass:"mb20 mt20"},[a("el-col",{attrs:{span:5,offset:6}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.preview(i)}}},[e._v("预览")])],1),e._v(" "),a("el-col",{attrs:{span:5,offset:3}},[a("el-button",{attrs:{type:"primary",plain:!0},on:{click:function(t){e.open(i)}}},[e._v("使用")])],1)],1):a("el-row",{staticClass:"mb20 mt20 tCent"},[a("el-col",{attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.preview(i)}}},[e._v("预览")])],1),e._v(" "),a("div",{staticClass:"cardCheck"},[e._v("使用中")])],1)],1)],1)}))],1):a("div",{staticClass:"wrapper"},[a("div",{staticClass:"imgwrapper tCent"},[a("a",{staticStyle:{display:"block",width:"auto",heigth:"auto"},attrs:{href:"javascript:;",title:"点击返回模块列表"},on:{click:e.back}},["h5"===this.type?a("img",{staticClass:"img",attrs:{src:e.imgUrl+e.imgUrlArr[e.showIndexImage].key+".jpg",alt:"图片飞走了",width:"auto",height:"auto"}}):a("img",{staticClass:"img",attrs:{src:e.imgUrl+e.imgUrlArr[e.showIndexImage].key+".jpg",alt:"图片飞走了",width:"100%",height:"auto"}})])])])],1)},staticRenderFns:[]}},627:function(e,t,a){"use strict";(function(e){function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1115),o=i(l),s=a(466),r=i(s),n=a(332),c=i(n);a(899),a(88),t.default={data:function(){return{mailhostArr:ARRAYS.mailConfig,LANG:LANG,num:1,isnext:!0,langugaeslist:[],moneylist:[],pcTmpList:[],h5TmpList:[],templist:[],moneyForm:{money:""},moneyRules:{money:[{required:!0,message:LANG["请选择货币"]||"请选择货币",trigger:"change"}]},emailForm:{mailhost:"",mailpass:"",mailaddress:""},emailRules:{mailhost:[{required:!0,message:LANG["请设置SMTP服务器地址"]||"请设置SMTP服务器地址",trigger:"blur"}],mailpass:[{required:!0,message:LANG["请设置密码"]||"请设置密码",trigger:"blur"}],mailaddress:[{required:!0,message:LANG["请设置邮箱地址"]||"请设置邮箱地址",trigger:"blur"},{type:"email",message:LANG["请输入正确的邮箱地址"]||"请输入正确的邮箱地址",trigger:"blur,change"}]},adminList:[],adminForm:{name:"",title:"",bottom:"",domain:"",is_ssl:"",lang:"",logo:""},adminRules:{name:[{required:!0,message:LANG["请设置厅主站点名称"]||"请设置厅主站点名称",trigger:"blur"}],title:[{required:!0,message:LANG["请设置厅主台头名称"]||"请设置厅主台头名称",trigger:"blur"}],domain:[{required:!0,message:LANG["请设置厅主后台域名"]||"请设置厅主后台域名",trigger:"blur"},{validator:this.validatorUrls,trigger:"change"},{validator:this.validatorwwwTwo,trigger:"blur"}],bottom:[{required:!0,message:LANG["请设置厅主底部"]||"请设置厅主底部",trigger:"blur"}],lang:[{required:!0,message:LANG["请设置厅主后台语言"]||"请设置厅主后台语言",trigger:"blur"}],is_ssl:[{required:!0,message:LANG["请设置SSL"]||"请设置SSL",trigger:"change"}]},wwwList:[],wwwForm:{name:"",title:"",bottom:"",domain:"",www_tid:"",www_tname:"",m_tid:"",m_tname:"",lang:"",logo:"",is_ssl:""},wwwRules:{name:[{required:!0,message:LANG["请设置站点名称"]||"请设置站点名称",trigger:"blur"}],title:[{required:!0,message:LANG["请设置站点标题"]||"请设置站点标题",trigger:"blur"}],domain:[{required:!0,message:LANG["请设置PC站点域名"]||"请设置PC站点域名",trigger:"blur"},{validator:this.validatorUrls,trigger:"change"}],bottom:[{required:!0,message:LANG["请设置厅主底部"]||"请设置厅主底部",trigger:"blur"}],m_tname:[{required:!0,message:LANG["请设置H5站点模板"]||"请设置H5站点模板",trigger:"blur"}],www_tname:[{required:!0,message:LANG["请设置PC站点模板"]||"请设置PC站点模板",trigger:"blur"}],lang:[{required:!0,message:LANG["请设置站点语言"]||"请设置站点语言",trigger:"blur"}],is_ssl:[{required:!0,message:LANG["请设置站点语言"]||"请设置站点语言",trigger:"blur"}]},loading:!1,loadingTwo:!1,loadingThree:!1,loadingFour:!1,showMailNext:!1,maildialogVisible:!1,addressform:{mailAddress:""},addressRules:{mailAddress:[{required:!0,message:LANG["请输入发送的邮箱地址"]||"请输入发送的邮箱地址",trigger:"blur"}]},url:URL.img,linkForm:{domain:""},linkRules:{domain:[{required:!0,message:LANG["请输入推广链接"]||"请输入推广链接",trigger:"blur"},{validator:this.validatorUrlFull,trigger:"blur"}]},tempType:"",dialogVisible:!1,pcSrc:"",h5Src:"",pcLink:"",h5Link:"",agentLink:"",adminLink:"",activeName:""}},components:{step:o.default,upload:c.default,H5Model:r.default},computed:{},watch:{},methods:{init:function(){var t=this;if(this.showMailNext=!1,"undefined"!=typeof settings&&settings.init||this.$router.push({path:"/index"}),!sessionStorage.token||!sessionStorage.userName)return this.$message(LANG["登录超时，请重新登录！"]||"登录超时，请重新登录！"),void this.$router.replace("/login");e.URLCONFIG={emulateJson:!0,headers:{"Content-Type":"application/json",Authorization:sessionStorage.token},validateStatus:function(e){return e}},this.$.autoAjax("get",URL.api+ROUTES.GET.langeages,"",{ok:function(e){if(0==e.state&&e.data){var a=e.data||[];for(var i in a)t.langugaeslist.push({label:a[i].name,value:a[i].code})}},p:function(){},error:function(e){console.log(e)}}),this.$.autoAjax("get",URL.api+ROUTES.GET.system.currency,"",{ok:function(e){if(0==e.state&&e.data){var a=e.data||[];t.moneyForm.money=e.data[0].id.toString()||"";for(var i in a)t.moneylist.push({label:a[i].ctype,value:a[i].id,cytype:a[i].cytype})}},p:function(){},error:function(e){console.log(e)}});var a=URL.api+"/system/website/style";this.$.autoAjax("get",a,"",{ok:function(e){var a=e.data.h5,i=e.data.pc;t.pcTmpList.splice(0,t.pcTmpList.length),t.h5TmpList.splice(0,t.h5TmpList.length);for(var l in a)t.h5TmpList.push({id:a[l].id,key:a[l].key,checked:a[l].checked});for(var o in i)t.pcTmpList.push({id:i[o].id,key:i[o].key,checked:i[o].checked})},p:function(){},error:function(e){console.log(e)}})},doNext:function(){switch(this.num){case 1:this.saveMoney();break;case 2:this.saveEmail();break;case 3:this.saveAdmin();break;case 4:this.saveWWW()}},doNextmail:function(){this.num++},showMailForm:function(){var e=this;this.$refs.emailForm.validate(function(t){t&&(e.maildialogVisible=!0)})},resetForm:function(e){this.$refs[e].resetFields()},doTest:function(){var e=this,t=this;this.$refs.addressform.validate(function(a){if(a){t.loadingThree=!0;for(var i=null,l=0;l<ARRAYS.mailConfig.length;l++)ARRAYS.mailConfig[l].value===e.emailForm.mailhost&&(i={mailhost:ARRAYS.mailConfig[l].value,mailport:ARRAYS.mailConfig[l].port,mailname:e.emailForm.mailaddress.split("@")[0],mailpass:e.emailForm.mailpass,mailaddress:e.emailForm.mailaddress,is_ssl:ARRAYS.mailConfig[l].is_ssl});i.receivers=[{receive:t.addressform.mailAddress,alias:"test"}],e.$.autoAjax("post",URL.api+ROUTES.POST.system.email.test,i,{ok:function(e){0===e.state&&e.data?(t.$message.success(LANG["邮箱测试成功，请点击下一步继续设置！"]||"邮箱测试成功，请点击下一步继续设置！"),t.loadingThree=!1,t.maildialogVisible=!1,t.showMailNext=!0):2===e.state&&(t.$message.error(LANG["邮箱配置错误，请修改后重试！"]||"邮箱配置错误，请修改后重试！"),t.maildialogVisible=!1,t.loadingThree=!1)},p:function(){},error:function(e){console.log(e)}}).catch(function(e){t.loadingThree=!1})}})},saveMoney:function(){var e=this,t=this,a=this.moneyForm.money;this.$refs.moneyForm.validate(function(i){i&&(t.loading=!0,e.$.autoAjax("patch",URL.api+ROUTES.PATCH.system.currency+"/"+parseInt(a),{state:1},{ok:function(e){0===e.state&&e.data?(t.$message.success(LANG["货币配置成功，请继续设置下面内容！"]||"货币配置成功，请继续设置下面内容！"),t.num<5&&++t.num,t.loading=!1,t.resetForm("addressform")):(t.$message.error(LANG["货币配置失败，请稍后重试！"]||"货币配置失败，请稍后重试！"),t.loading=!1)},p:function(){},error:function(e){console.log(e)}}).catch(function(e){}))})},saveEmail:function(){var e=this;e.loading=!0,this.$.autoAjax("put",URL.api+ROUTES.PUT.system.email.settings,e.emailForm,{ok:function(t){0===t.state&&t.data?(e.$message.success(LANG["邮箱配置成功，请继续设置下面内容！"]||"邮箱配置成功，请继续设置下面内容！"),e.num<5&&++e.num,e.loading=!1):(e.$message.error(LANG["邮箱配置失败，请稍后重试！"]||"邮箱配置失败，请稍后重试！"),e.loading=!1)},p:function(){},error:function(e){console.log(e)}}).catch(function(e){})},saveAdmin:function(){var e=this,t=this;this.$refs.adminForm.validate(function(a){if(a){t.loading=!0;var i={type:1,build:1,remarks:""};for(var l in t.adminForm)i[l]="domain"===l?t.adminForm[l].split(/[\n]/g):t.adminForm[l];i.remarks="",e.$.autoAjax("put",URL.api+ROUTES.PUT.system.domain,i,{ok:function(e){0===e.state&&e.data?(t.$message.success(LANG["厅主站点配置成功，请继续设置下面内容！"]||"厅主站点配置成功，请继续设置下面内容！"),t.num<5&&++t.num,t.loading=!1):4005===e.state?(t.$message.error(LANG["厅主站点验证失败，请修改后重试！"]||"厅主站点验证失败，请修改后重试！"),t.showUrlError(e.data),t.loading=!1):t.$message.error(LANG["厅主站点配置失败，请稍后重试！"]||"厅主站点配置失败，请稍后重试！")},p:function(){},error:function(e){console.log(e)}}).catch(function(e){t.loading=!1})}else t.$message.error(LANG["验证未通过，请查看！"]||"验证未通过，请查看！")})},saveWWW:function(){var e=this,t=this;this.$refs.wwwForm.validate(function(a){if(a){t.loading=!0;var i={type:2,build:1,remarks:""};for(var l in t.wwwForm)i[l]="domain"===l?t.wwwForm[l].split(/[\n]/g):t.wwwForm[l];for(var o in t.pcTmpList)t.pcTmpList[o].label===i.www_tname&&(i.www_tid=t.pcTmpList[o].value);for(var s in t.h5TmpList)t.h5TmpList[s].label===i.m_tname&&(i.m_tid=t.h5TmpList[s].value);e.$.autoAjax("put",URL.api+ROUTES.PUT.system.domain,i,{ok:function(a){0===a.state&&a.data?(t.$message.success(LANG["站点配置成功，请继续设置下面内容！"]||"站点配置成功，请继续设置下面内容！"),t.num<5&&++t.num,t.loading=!1,e.getLink()):4005===a.state?(t.$message.error(LANG["厅主站点验证失败，请修改后重试！"]||"厅主站点验证失败，请修改后重试！"),t.showUrlError(a.data),t.loading=!1):(t.$message.error(LANG["站点配置失败，请稍后重试！"]||"站点配置失败，请稍后重试！"),t.loading=!1)},p:function(){},error:function(e){console.log(e)}}).catch(function(e){t.loading=!1})}else t.$message.error(LANG["验证未通过，请查看！"]||"验证未通过，请查看！")})},prev:function(){this.num>1&&--this.num},save:function(){var e=this,t=this;this.$refs.linkForm.validate(function(a){if(a){t.loading=!0;var i={};i.domain=t.linkForm.domain,i.comment="备注",e.$.autoAjax("put",URL.api+ROUTES.PUT.commission.link,i,{ok:function(e){0===e.state&&e.data?(t.$message.success(LANG["推广链接配置成功，点击开启站点完成配置！"]||"推广链接配置成功，点击开启站点完成配置！"),t.loading=!1,t.clearUrl()):(t.$message.error(LANG["站点配置失败，请稍后重试！"]||"站点配置失败，请稍后重试！"),t.loading=!1)},p:function(){},error:function(e){console.log(e)}}).catch(function(e){t.loading=!1})}})},clearUrl:function(){var e=this;this.$.autoAjax("post",URL.api+"/system/domain.clean",{},{ok:function(t){0===t.state&&t.data?(e.num<6&&++e.num,e.$message.success(LANG["域名清除成功，请按配置的文件访问！"]||"域名清除成功，请按配置的文件访问！")):(e.num<6&&++e.num,e.clearUrl())},p:function(){},error:function(e){console.log(e)}})},validatorUrl:function(e,t,a){/^[\w\-]+(\.[\w\-]+)+$/.test(t)?a():a(new Error(LANG["请输入合法的域名，不带HTTP"]||"请输入合法的域名，不带HTTP"))},validatorUrlFull:function(e,t,a){/^http(s)?:\/\/[\w\-]+(\.[\w\-]+)+$/.test(t)?a():a(new Error(LANG["请输入合法的域名，需要带HTTP"]||"请输入合法的域名，需要带HTTP"))},validatorwwwTwo:function(e,t,a){t.split(/[\n]/g).length>2?a(new Error(LANG["域名最多只能两个"]||"域名最多只能两个")):a()},doSaveFile:function(e){var t="";return e.url.forEach(function(e){t+=e}),t},goIndex:function(){this.$router.push({path:"/index"})},changewww:function(e){var t="admin"===e?this.adminForm.domain:this.wwwForm.domain;if(this.adminList.splice(0,this.adminList.length),this.wwwList.splice(0,this.wwwList.length),"admin"===e){var a=this.adminList;if(t)for(var i=t.split(/[\n]/g),l=0;l<i.length;l++)i[l]&&a.push({url:i[l],adminlabel:"厅主后台",adminUrl:"admin."+i[l],cpilabel:"API",cpiUrl:"cpi."+i[l],rpiLabel:"资源",rpi:"rpi."+i[l],adminlocalhost:this.filterUrl(window.location.host,"admin"),cpilocalhost:this.filterUrl(window.location.host,"cpi"),rpilocalhost:this.filterUrl(window.location.host,"rpi")})}else{var o=this.wwwList;if(t)for(var s=t.split(/[\n]/g),r=0;r<s.length;r++)s[r]&&o.push({url:s[r],master_wwwlabel:"主域",master_wwwUrl:s[r],master_wwwlocalhost:this.filterUrl(window.location.host,"www"),wwwlabel:"PC站",wwwUrl:"www."+s[r],mlabel:"H5站",mUrl:"m."+s[r],agentLabel:"代理站",agentUrl:"agent."+s[r],apilabel:"API",apiUrl:"api."+s[r],resLabel:"资源",res:"res."+s[r],wwwlocalhost:this.filterUrl(window.location.host,"www"),h5localhost:this.filterUrl(window.location.host,"m"),apilocalhost:this.filterUrl(window.location.host,"api"),reslocalhost:this.filterUrl(window.location.host,"res"),agentlocalhost:this.filterUrl(window.location.host,"agent")})}},getTemplate:function(e){if(this.tempType=e,this.templist.splice(0,this.templist.length),"h5"===e)for(var t in this.h5TmpList)this.$set(this.templist,t,this.h5TmpList[t]);else for(var a in this.pcTmpList)this.$set(this.templist,a,this.pcTmpList[a]);this.dialogVisible=!0},doGetTemplate:function(e){"pc"===e.type?(this.wwwForm.www_tid=e.data.id,this.wwwForm.www_tname=e.data.key,this.pcSrc="/static/img/pc_new/"+e.data.key+".jpg"):(this.wwwForm.m_tid=e.data.id,this.wwwForm.m_tname=e.data.key,this.h5Src="/static/img/mobile_new/"+e.data.key+".jpg")},getLink:function(){var e="1"===this.wwwForm.is_ssl?"https://":"http://",t=this.wwwForm.domain.split(/[\n]/g),a=this.adminForm.domain.split(/[\n]/g);this.pcLink=e+"www."+t[0],this.h5Link=e+"m."+t[0],this.agentLink=e+"agent."+t[0],this.adminLink=e+"admin."+a[0]},filterUrl:function(e,t){if(e){return/admin/.test(e)?e.replace(/admin/,t):t+"."+e}return""},openUrl:function(e){switch(e){case"pc":window.open(this.pcLink);break;case"h5":window.open(this.h5Link);break;case"agent":window.open(this.agentLink);break;case"admin":window.open(this.adminLink)}},validatorUrls:function(e,t,a){if(t){var i=0;t.split(/[\n]/g).forEach(function(e){/\w+(.([a-zA-Z]{2,}))+$/.test(e)||(i++,a(new Error(e+(LANG["域名不合法，请修改后重试"]||"域名不合法,请修改后重试"))))}),0===i?a():a(new Error(LANG["域名不合法，请修改后重试"]||"域名不合法,请修改后重试"))}else a()},showUrlError:function(e){var t="";if(0!==e.length){for(var a in e)t=t+e[a]+"\r\n";this.$notify.error({title:"域名验证失败列表",message:t,duration:0})}}},mounted:function(){},created:function(){this.init()}}}).call(t,a(9))},628:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},props:{active:{type:Number,default:0}}}},844:function(e,t,a){t=e.exports=a(219)(),t.push([e.i,".steps[data-v-adf0ce68]{margin-bottom:50px;width:100%}.steps p[data-v-adf0ce68]{margin-bottom:10px}.bg-purple[data-v-adf0ce68]{background:#d3dce6}.bg-purple-light[data-v-adf0ce68]{background:#e5e9f2}.bmBorder[data-v-adf0ce68]{border-bottom:1px solid #fff}.butgroup button[data-v-adf0ce68]{margin-left:20px;display:inline-block}",""])},855:function(e,t,a){t=e.exports=a(219)(),t.push([e.i,"",""])},875:function(e,t,a){t=e.exports=a(219)(),t.push([e.i,".pcddMain .header{background:#00bca4;color:#f9fafc}.el-badge__content{background-color:#f88580;color:#fff}.pcddMain .header a{color:#f9fafc}.pcddMain .header .logo{background:#1fc5b1;color:#f9fafc}.top_menu .submenu li a{background-color:#d1e5e5;color:#485c6a}.top_menu .submenu li .router-link-active,.top_menu .submenu li a:hover{background:#00bca4;color:#fff}.top_menu .menu>li>a{color:#fff}.top_menu .menu>li .parentMenu:hover{color:#00bca4;background:#fff}.pcddMain .main .navLeft #leftMenu .nav-slide-o li a:hover,.pcddMain .main .navLeft #leftMenu .nav-ul li a:hover{background:#00bca4;color:#f9fafc}.pcddMain .main .navLeft,.pcddMain .main .navLeft #leftMenu{background-color:#e3ebeb}.pcddMain .main .navLeft .nav-slide-o{background-color:#d1e5e5}.pcddMain .main .navLeft .nav-slide-o li a:before,.pcddMain .main .navLeft .nav-ul li a:before{background:#00bca4}.pcddMain .main .navLeft #leftMenu .nav-slide-o li a,.pcddMain .main .navLeft #leftMenu .nav-ul li a{color:#324057}.pcddMain .main .navLeft #leftMenu .bgStyle{background:#00bca4}.fontStyle,.router-link-active{color:#fff!important;background:#00bca4}.el-button--primary{color:#fff;background-color:#00bca4;border-color:#00bca4}.el-button:focus,.el-button:hover{color:#00bca4}.el-button--primary:focus,.el-button--primary:hover{background:#00d6be;border-color:#00d6be;color:#fff}.el-button--primary.is-active,.el-button--primary:active{background:#00927f;border-color:#00927f;color:#fff}.el-button--primary.is-plain{background:#fff;border:1px solid #bfc1d9;color:#1f213d}.el-button--primary.is-plain:focus,.el-button--primary.is-plain:hover{background:#fff;border-color:#00bca4;color:#00bca4}.el-button--primary.is-plain:active{background:#fff;border-color:#00d6be;color:#00d6be}.el-select-dropdown__item.selected.hover{background-color:#00bca4}.el-select-dropdown__item.selected{color:#fff;background-color:#00bca4}.el-input__inner:focus,.el-select .el-input__inner:focus{border-color:#00bca4}.el-date-table td.current:not(.disabled),.el-date-table td.end-date,.el-date-table td.start-date{background-color:#00bca4!important;color:#fff}.el-date-table td.today:before{border-top:.5em solid #00bca4}.el-date-table td.today{color:#00bca4}.el-pager li.active,.el-textarea__inner:focus{border-color:#00bca4}.el-pager li.active{color:#fff}.el-dialog .el-dialog__header,.el-dialog__header,.el-pager li.active{background-color:#00bca4}.el-dialog__header .el-dialog__close,.el-dialog__header .el-dialog__title{color:#fff}.el-dialog__footer{border-top:1px solid #d3dce6}.el-button:focus,.el-button:hover{border-color:#00bca4}.formCancel:hover{color:#00bca4}.el-checkbox__input.is-checked .el-checkbox__inner,.el-checkbox__input.is-indeterminate .el-checkbox__inner,.el-radio__input.is-checked .el-radio__inner,.el-switch__input:checked+.el-switch__core{border-color:#00bca4;background:#00bca4}.el-checkbox__inner:hover,.el-checkbox__input.is-focus .el-checkbox__inner{border-color:#00bca4}.defutFont{color:#00bca4}#mobile .cardCheck,#pc .cardCheck{background:#00bca4;color:#fff}#mobile .active,#pc .active{border:2px solid #00bca4}.vdp-datepicker__calendar .cell.selected{background:#00bca4;color:#fff}.vdp-datepicker__calendar .cell.selected:hover{color:#00bca4}.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover{background-color:#e4e8f1}.time-picker .dropdown ul li.active,li.active:hover{background:#00bca4;color:#fff}",""])},899:function(e,t,a){var i=a(875);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(220)("5ab2f527",i,!0)}});