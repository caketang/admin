(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{176:function(e,t,a){"use strict";a.r(t);var l=a(202),s=a(203),o={data:()=>({type:"search",formTitel:"",labelWidth:"90px",isEdit:{},formVisible:{state:!1},searchConfig:[{prop:"username",value:"",type:"text",label:"用户名"},{prop:"ip",value:"",type:"text",label:"ip"},{prop:"domain",value:"",type:"text",label:"域名"},{type:"dateGroup",label:"起止时间",prop:[{prop:"date_begin",value:"",label:"开始时间"},{prop:"date_end",value:"",label:"结束时间"}]},{prop:"type",value:"",label:"类型",type:"select",list:[]},{prop:"status",value:"",label:"结果",type:"select",list:[{label:"成功",value:"1"},{label:"失败",value:"0"}]}],tableUrl:"",columnsUrl:"",baseUrl:""}),components:{tablegrid:l.a,formEdit:s.a},methods:{init(){this.columnsUrl="/static/json/systemSettings/operationLog/columns.json",this.tableUrl=URL.api+ROUTES.GET.system.log.user.operation+"?date_begin="+sessionStorage.dateTimeStart+"&date_end="+sessionStorage.dateTimeEnd,this.baseUrl=URL.api+ROUTES.GET.system.log.user.operation,this.getLogType()},getLogType(){let e=this.searchConfig[4].list;this.$.autoAjax("get",URL.api+"/system/log/user.type","",{ok:t=>{if(t.data&&0===t.state){let a=t.data||[];for(let t=0;t<a.length;t++)e.push({label:a[t].name,value:a[t].id.toString()})}},p:()=>{},error:e=>{console.log(e)}}).catch(e=>{})},doHandle(e){"openUserDetail"===e.fn&&this.$router.push({path:"/memberManagement",query:{name:e.row.name}})},doQuery(e){this.tableUrl=this.baseUrl+this.addSearch(e.item)},resetForm(){this.tableUrl=this.baseUrl+"?date_begin="+sessionStorage.dateTimeStart+"&date_end="+sessionStorage.dateTimeEnd}},computed:{},mounted(){},created(){this.init()}},r=a(10);var i=function(e){a(536)},n=Object(r.a)(o,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"operationLog"}},[a("div",{staticClass:"search"},[a("formEdit",{attrs:{formTitel:e.formTitel,formVisible:e.formVisible,showAdd:!1,formConfig:e.searchConfig,type:e.type,labelWidth:e.labelWidth,isEdit:e.isEdit},on:{"do-query":e.doQuery,"reset-form":e.resetForm}})],1),e._v(" "),a("el-col",[a("tablegrid",{attrs:{columnsUrl:e.columnsUrl,tableIndex:!1,tableCheck:!1,tableUrl:e.tableUrl},on:{"do-handle":e.doHandle}})],1)],1)},[],!1,i,null,null);t.default=n.exports},536:function(e,t,a){}}]);