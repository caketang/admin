(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{130:function(e,t,i){"use strict";i.r(t);var a=i(202),s=i(203),l={data:()=>({searchConfig:[{prop:"username",value:"",type:"text",label:"用户名"},{prop:"no",value:"",type:"text",label:"交易订单号"},{prop:"status",value:"",label:"状态",type:"select",list:[{label:"成功",value:"success"},{label:"失败",value:"fail"}]},{type:"dateGroup",label:"转帐时间",prop:[{prop:"start_time",value:"",label:"开始时间"},{prop:"end_time",value:"",label:"结束时间"}]},{prop:"out_id",value:"",label:"转出",type:"select",list:[]},{prop:"in_id",value:"",label:"转入",type:"select",list:[]}],type:"search",labelWidth:"90px",formVisible:{state:!1},isEdit:{state:!1},turnOutList:[],turnInList:[],tableUrl:"",columnsUrl:"",baseUrl:""}),components:{tablegrid:a.a,formEdit:s.a},methods:{init(){this.tableUrl=URL.api+ROUTES.GET.cash.record.transfer+"?start_time="+sessionStorage.dateTimeStart+"&end_time="+sessionStorage.dateTimeEnd,this.baseUrl=URL.api+ROUTES.GET.cash.record.transfer,this.columnsUrl="static/json/cash/transferRecord/columns.json";let e=this;this.$.autoAjax("get",URL.api+ROUTES.GET.wallet.types,"",{ok:t=>{let i=e.searchConfig[4].list,a=e.searchConfig[5].list;if(0==t.state&&t.data){let e=t.data||[];for(let t in e)i.push({label:e[t].name,value:e[t].id.toString()}),a.push({label:e[t].name,value:e[t].id.toString()})}},p:()=>{},error:e=>{console.log(e)}})},doQuery(e){let t={};t.end_time=e.item.end_time,t.in_id=e.item.in_id,e.item.lower_limit&&(t.lower_limit=100*e.item.lower_limit),t.out_id=e.item.out_id,t.start_time=e.item.start_time,t.status=e.item.status,t.no=e.item.no,e.item.upper_limit&&(t.upper_limit=100*e.item.upper_limit),t.username=e.item.username,this.tableUrl=this.baseUrl+this.addSearch(t)},resetForm(){this.tableUrl=this.baseUrl+"?start_time="+sessionStorage.dateTimeStart+"&end_time="+sessionStorage.dateTimeEnd},doHandle(e){switch(e.fn){case"openUserSet":this.openUserSet(e.row)}},openUserSet(e){this.$router.push({path:"/memberManagement",query:{name:e.username}})}},computed:{},mounted(){},created(){this.init()}},r=i(10);var o=function(e){i(519)},n=Object(r.a)(l,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"transferRecord"}},[i("div",{staticClass:"search"},[i("formEdit",{attrs:{formVisible:e.formVisible,formConfig:e.searchConfig,type:e.type,labelWidth:e.labelWidth,showAdd:!1,isEdit:e.isEdit},on:{"do-query":e.doQuery,"reset-form":e.resetForm}})],1),e._v(" "),i("el-col",[i("tablegrid",{attrs:{columnsUrl:e.columnsUrl,tableIndex:!1,tableCheck:!1,tableUrl:e.tableUrl},on:{"do-handle":e.doHandle}})],1)],1)},[],!1,o,null,null);t.default=n.exports},519:function(e,t,i){}}]);