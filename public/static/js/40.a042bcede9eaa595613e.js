(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{198:function(t,e,a){"use strict";a.r(e);var s=a(266),o=a(10);var l=function(t){a(512)},i=Object(o.a)(s.a,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"offlineReceipts"}},[a("formEdit",{attrs:{formVisible:t.formVisible,formConfig:t.searchConfig,type:t.type,labelWidth:t.labelWidth,isEdit:t.isEdit,updateKeys:t.updateKeys,formType:t.formType,showAdd:!1},on:{"do-query":t.doQuery,"reset-form":t.resetForm}}),t._v(" "),a("el-col",[a("tablegrid",{attrs:{columnsUrl:t.columnsUrl,tableUrl:t.tableUrl,tableCheck:!1,tableIndex:!1,getData:!0,autoshowRefresh:!0,showExport:t.isShow,automation:!0,pageSet:!0,updated:t.updated},on:{"do-handle":t.doHandle,"get-table-data":t.getTableData,"export-data":t.exportData}},[t.sumShow?a("tr",{staticClass:"sumdiv ml20",attrs:{slot:"other",span:12},slot:"other"},[a("td",{attrs:{colspan:"15"}},[a("div",{staticClass:"cell"},[a("span",{staticClass:"font14 "},[t._v(t._s(t.LANG["金额小计"]||"金额小计")+" ")]),t._v(":"),a("span",[t._v(" "+t._s(t._f("formatMoney")(t.allData.page_amount_sum)))]),t._v(" "),a("span",{staticClass:"font14 ml10"},[t._v(t._s(t.LANG["金额总计"]||"金额总计")+" ")]),t._v(":"),a("span",[t._v(" "+t._s(t._f("formatMoney")(t.allData.total_amount_sum)))]),t._v(" "),a("span",{staticClass:"ml10 mr10"},[t._v(" | ")]),t._v(" "),a("span",{staticClass:"font14 ml10"},[t._v(t._s(t.LANG["优惠小计"]||"优惠小计")+" ")]),t._v(":"),a("span",[t._v(" "+t._s(t._f("formatMoney")(t.allData.page_coupon_sum)))]),t._v(" "),a("span",{staticClass:"font14 ml10"},[t._v(t._s(t.LANG["优惠总计"]||"优惠总计")+" ")]),t._v(":"),a("span",[t._v(" "+t._s(t._f("formatMoney")(t.allData.total_coupon_sum)))]),t._v(" "),a("span",{staticClass:"ml10 mr10"},[t._v(" | ")]),t._v(" "),a("span",{staticClass:"font14 ml10"},[t._v(t._s(t.LANG["笔数"]||"笔数")+" ")]),t._v(":"),a("span",[t._v(t._s(t.allData.total))])])])]):t._e()])],1),t._v(" "),a("el-col",[a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,size:"tiny"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t._v("\n            "+t._s(t.LANG["点击”确认“导出数据"]||"点击”确认“导出数据")+"\n            "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("a",{attrs:{href:t.outUrl,target:"_blank",id:"outUrl"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 认")])],1)],1)])],1),t._v(" "),a("el-dialog",{attrs:{title:t.LANG["公司入款详情"]||"公司入款详情",size:"small"},model:{value:t.dialogDetail.state,callback:function(e){t.$set(t.dialogDetail,"state",e)},expression:"dialogDetail.state"}},[a("el-row",{attrs:{gutter:30}},[a("el-col",{staticClass:"borStyle",attrs:{span:24}},[a("div",[a("h3",[t._v(t._s(t.LANG["入款详情"]||"入款详情")+":")]),t._v(" "),a("el-col",{staticClass:"font16",attrs:{span:24}},[t._v("\n                        "+t._s(t.LANG["存款金额"]||"存款金额")+" :"),a("span",[t._v(t._s(t.Detailcontent.money))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(t._s(t.LANG["订单号"]||"订单号")+" ： "),a("span",[t._v(t._s(t.Detailcontent.trade_no))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(t._s(t.LANG["是否首存"]||"是否首存")+" ："),a("span",[t._v(t._s(t._f("isNew")(t.Detailcontent.state)))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(t._s(t.LANG["用户名"]||"用户名")+" ："),a("span",[t._v(t._s(t.Detailcontent.user_name))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(t._s(t.LANG["会员等级"]||"会员等级")+" ："),a("span",[t._v("VIP"+t._s(t.Detailcontent.level))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(t._s(t.LANG["真实姓名"]||"真实姓名")+" ："),a("span",[t._v(t._s(t.Detailcontent.true_name))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(t._s(t.LANG["操作时间"]||"操作时间")+" ："),a("span",[t._v(t._s(t.Detailcontent.process_time))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(t._s(t.LANG["上级代理"]||"上级代理")+" ："),a("span",[t._v(t._s(t.Detailcontent.agent_name))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(t._s(t.LANG["已入款次数/金额"]||"已入款次数/金额")+" ："),a("span",[t._v(t._s(t.Detailcontent.total_deposit_times)+" / "+t._s(t._f("filterMoneyIsNull")(t.Detailcontent.total_deposit_money)))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(t._s(t.LANG["存款日期"]||"存款日期")+" ："),a("span",[t._v(t._s(t.Detailcontent.recharge_time))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(t._s(t.LANG["存款IP"]||"存款IP")+" ："),a("span",[t._v(t._s(t.Detailcontent.ip))])])],1)]),t._v(" "),a("el-col",{staticClass:"mt10 borStyle bankStyle",attrs:{span:24}},[a("div",[a("h3",[t._v("银行账户:")]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.LANG["存款银行"]||"存款银行")+" :\n                        "),t.Detailcontent.pay_bank_info?a("span",[t._v(t._s(t.Detailcontent.pay_bank_info.bank))]):t._e()]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.LANG["存款账号"]||"存款账号")+" ：\n                        "),t.Detailcontent.pay_bank_info?a("span",[t._v(t._s(t.Detailcontent.pay_bank_info.card))]):t._e()]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.LANG["存款户名"]||"存款户名")+" ：\n                        "),t.Detailcontent.pay_bank_info?a("span",[t._v(t._s(t.Detailcontent.pay_bank_info.name))]):t._e()]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.LANG["收款银行"]||"收款银行")+" :\n                        "),t.Detailcontent.receive_bank_info?a("span",[t._v(t._s(t.Detailcontent.receive_bank_info.bank))]):t._e()]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.LANG["收款账号"]||"收款账号")+" ：\n                        "),t.Detailcontent.receive_bank_info?a("span",[t._v(t._s(t.Detailcontent.receive_bank_info.card))]):t._e()]),t._v(" "),a("el-col",{attrs:{span:8}},[t._v(t._s(t.LANG["收款户名"]||"收款户名")+" ：\n                        "),t.Detailcontent.receive_bank_info?a("span",[t._v(t._s(t.Detailcontent.receive_bank_info.accountname))]):t._e()])],1)]),t._v(" "),a("el-col",{staticClass:"mt10 borStyle",attrs:{span:24}},[a("div",[a("h3",[t._v("优惠:")]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v("\n                        "+t._s(t.LANG["优惠金额"]||"优惠金额")+"  :"),a("span",[t._v(t._s(t._f("filterMoneyIsNull")(t.Detailcontent.coupon_money)))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v("\n                        "+t._s(t.LANG["打码要求"]||"打码要求")+"  ："),a("span",[t._v(t._s(t._f("filterMoneyIsNull")(t.Detailcontent.withdraw_bet_coupon)))])]),t._v(" "),a("el-col",{attrs:{span:12}},[t._v(t._s(t.LANG["优惠活动名称"]||"优惠活动名称")+"  ： "),a("span",[t._v(t._s(t.Detailcontent.active_name))])])],1)]),t._v(" "),a("el-col",{staticClass:"mt10 borStyle",attrs:{span:24}},[a("div",[a("el-col",{staticClass:"mt10",attrs:{span:24}},[a("label",[t._v(t._s(t.LANG["备注"]||"备注")+" :")]),t._v(" "),a("el-input",{attrs:{type:"textarea",span:5},model:{value:t.Detailcontent.memo,callback:function(e){t.$set(t.Detailcontent,"memo",e)},expression:"Detailcontent.memo"}})],1),t._v(" "),a("el-col",{staticClass:"mt10",attrs:{span:24}},[a("el-col",{attrs:{span:12}},[t._v(t._s(t.LANG["状态"]||"状态")+" :"),a("span",[t._v(t._s(t.Detailcontent.status))])])],1)],1)]),t._v(" "),a("el-col",{staticClass:"tCent mt20",attrs:{span:24}},[a("span",{staticClass:"wrapper"},[a("el-button",{attrs:{plain:!0,type:"success"},on:{click:t.doSendMemo}},[t._v(t._s(t.LANG["保存"]||"保存"))]),t._v(" "),a("el-button",{on:{click:t.dialogDetais}},[t._v(t._s(t.LANG["关闭"]||"关闭"))])],1)])],1)],1),t._v(" "),a("el-col",[a("confirm",{attrs:{confirmConfig:t.confirmConfig},on:{"do-confirm":t.doConfirm}})],1)],1)},[],!1,l,"data-v-1bf028c6",null);e.default=i.exports},266:function(t,e,a){"use strict";(function(t){var s=a(0),o=a(223),l=a(202),i=a(203),n=a(206);s.default.filter("isNew",function(t){return/new/.test(t||"")?"是":"否"}),e.a={data:()=>({close:!0,LANG:LANG,columnsUrl:"",tableUrl:"",momeUrl:"",DetailUrl:"",radio:0,dialogDetail:{state:!1},Detailcontent:{},formMemo:{memo:"222"},formType:"",searchConfig:[{type:"quickDate",showTimes:!0},{prop:"user_name",value:"",type:"text",label:"用户名"},{prop:"pay_no",value:"",type:"text",label:"交易订单号",style:{width:"250px"}},{prop:"give_active",value:"",label:"存款优惠",type:"select",list:[{label:"全部",value:""},{label:"有优惠",value:"1"},{label:"无优惠",value:"0"}]},{prop:"levels",value:[],label:"会员层级",sReset:!1,checkAll:!0,allBtnShow:!0,type:"checkGroup",list:[],Arr:ARRAYS.LEVELSLIST},{prop:"status",value:"",label:"交易状态",type:"select",list:[{label:"全部",value:"all"},{label:"审核中",value:"pending"},{label:"充值成功",value:"paid"},{label:"充值失败",value:"canceled"}]},{prop:"bank_id",value:"",label:"存入银行",type:"select",list:[]},{type:"dateGroup",label:"交易时间",prop:[{prop:"date_from",value:"",label:"开始时间"},{prop:"date_to",value:"",label:"结束时间"}]},{type:"numberGroup",label:"交易金额",prop:[{prop:"money_from",value:null},{prop:"money_to",value:null}]},{prop:"deposit_type",value:[],label:"存款方式",sReset:!1,checkAll:!0,allBtnShow:!0,type:"checkGroup",list:["银行柜台","ATM现金入款","ATM自动柜员机","手机转账","支付宝转账","财付通","微信支付","手动存款","网银转账","云闪付","QQ转账"],Arr:[{label:"银行柜台",value:"1"},{label:"ATM现金入款",value:"2"},{label:"ATM自动柜员机",value:"3"},{label:"手机转账",value:"4"},{label:"支付宝转账",value:"5"},{label:"财付通",value:"6"},{label:"微信支付",value:"7"},{label:"手动存款",value:"8"},{label:"网银转账",value:"9"},{label:"云闪付",value:"10"},{label:"QQ转账",value:"11"}],ifVal:"1",ifKey:"send_type"},{prop:"process_uname",value:"",type:"text",label:"操作者"}],type:"search",labelWidth:"90px",updateKeys:"",formVisible:{state:!1},isEdit:{state:!1},nowId:-1,baseUrl:"",btnShow:!1,updated:!1,confirmConfig:{state:!1,msg:"",fn:"",obj:""},allData:{page_amount_sum:0,page_coupon_sum:0,total_amount_sum:0,total_coupon_sum:0,total:0},dialogVisible:!1,outUrl:"",sumShow:!1,searchObj:{},oDetail:null,oDetailStatus:!1,isShow:"true"==sessionStorage.deposit_offlines_export,exportForm:{}}),components:{tablegrid:l.a,quickDate:o.a,formEdit:i.a,confirm:n.a},watch:{$route(t,e){console.log(t)}},methods:{init(){let e=this;this.columnsUrl="static/json/cash/offlineReceipts/columns.json",this.searchObj.date_from=sessionStorage.sysTime+" 00:00:00",this.searchObj.date_to=sessionStorage.sysTime+" 23:59:59",this.updateKeys="",this.baseUrl=URL.api+ROUTES.GET.cash.offlines,this.momeUrl=URL.api+ROUTES.PATCH.cash.doMemo,this.DetailUrl=URL.api+ROUTES.GET.cash.offline,"{}"==JSON.stringify(this.$route.query)?this.tableUrl=URL.api+ROUTES.GET.cash.offlines+"?date_from="+sessionStorage.sysTime+" 00:00:00&date_to="+sessionStorage.sysTime+" 23:59:59":(this.searchConfig[5].value=this.$route.query.status,this.tableUrl=this.baseUrl+"?status="+this.$route.query.status),e.exportForm={date_from:sessionStorage.sysTime+" 00:00:00",date_to:sessionStorage.sysTime+" 23:59:59",signature:1};let a=t.ARRAYS.LEVELSLIST;for(let t in a)e.searchConfig[4].list.push(a[t].label);let s=URL.api+ROUTES.GET.cash.bank.acounts+"?page=1&page_size=10";e.searchConfig[6].list.splice(0,e.searchConfig[6].list.length),e.searchConfig[6].list.push({label:LANG["全部"]||"全部",value:""}),this.$.autoAjax("get",s,"",{ok:t=>{let a=t.data;for(let t in a)e.searchConfig[6].list.push({label:a[t].bank_name,value:a[t].id})},p:()=>{},error:t=>{console.log(t)}})},dialogDetais(){this.dialogDetail.state=!1,this.radio=0},doHandle(t){switch(this.updated=!1,this.nowId=t.row.id||0,t.fn){case"doDetail":this.doDetail(t.row);break;case"doMemo":this.doMemo(t.row);break;case"doPass":this.doPass(t.row);break;case"doRefuse":this.doRefuse(t.row);break;case"openUserInformation":this.openUserInformation(t.row)}},doQuery(t){let e={};for(let a in t.item)if("deposit_type"===a){let s=t.item[a]||[],o=this.searchConfig[9].Arr||[],l=[];for(let t=0;t<s.length;t++)for(let e=0;e<o.length;e++)s[t]===o[e].label&&l.push(o[e].value);e[a]=l.toString()}else if("levels"===a){let s=t.item[a]||[],o=this.searchConfig[4].Arr||[],l=[];for(let t=0;t<s.length;t++)for(let e=0;e<o.length;e++)s[t]===o[e].label&&l.push(o[e].value);e[a]=l.toString()}else e[a]=t.item[a];e.money_to>0&&(e.money_from=100*e.money_from,e.money_to=100*e.money_to);for(let t in e)this.searchObj[t]=e[t];this.tableUrl=this.baseUrl+this.addSearch(e),this.exportForm=e,this.exportForm.signature=1},doDetail(t){let e=this;"pending"===t.status?this.btnShow=!0:this.btnShow=!1,this.dialogDetail.state=!0,this.nowId=t.id;let a=t.id;this.$.autoAjax("get",this.DetailUrl+"/"+a,"",{ok:a=>{switch(this.Detailcontent=a.data,t.status){case"paid":this.Detailcontent.status="已存入";break;case"pending":this.Detailcontent.status="未处理";break;case"canceled":this.Detailcontent.status="取消"}e.oDetailStatus=!0,e.oDetail=t.user_id},p:()=>{},error:t=>{console.log(t)}})},doPass(t){parseInt(this.nowId)&&(this.confirmConfig.state=!0,this.confirmConfig.msg=(LANG["确定通过"]||"确定通过")+t.user_name+(LANG["吗?"]||"吗?"),this.confirmConfig.fn="pass",this.confirmConfig.obj=t)},doRefuse(t){parseInt(this.nowId)&&(this.confirmConfig.state=!0,this.confirmConfig.msg=(LANG["确定取消"]||"确定取消")+t.user_name+(LANG["吗?"]||"吗?"),this.confirmConfig.fn="refuse",this.confirmConfig.obj=t)},doSendMemo(){let t,e=this;t={comment:this.Detailcontent.memo,uid:this.oDetail},this.$.autoAjax("patch",this.DetailUrl+"/"+this.nowId,t,{ok:t=>{0==t.state&&t.data?(this.$message.success(LANG["恭喜您，备注发送成功！"]||"恭喜您，备注发送成功！"),e.updated=!0,e.oDetailStatus=!1):(this.$message.error(LANG["备注发送失败，请稍候重试！"]||"备注发送失败，请稍候重试！"),e.oDetailStatus=!1),e.formType="memo",e.dialogDetail.state=!1},p:()=>{},error:t=>{console.log(t)}})},getTableData(t){if(this.sumShow=!1,this.allData={},t.allData.attributes&&t.allData.attributes.total>0){let e=t.allData.attributes;this.sumShow=!0;for(let t in e)this.allData[t]=e[t]}},doConfirm(t){this.loading=!0;let e=this;switch(t.fn){case"pass":let a;2==this.radio?(a={state:"paid",coupon:0,comment:this.Detailcontent.memo,uid:t.obj.user_id},e.oDetailStatus&&(a={state:"paid",coupon:0,comment:this.Detailcontent.memo,uid:e.oDetail})):(a={state:"paid",coupon:1,comment:this.Detailcontent.memo,uid:t.obj.user_id},e.oDetailStatus&&(a={state:"paid",coupon:1,comment:this.Detailcontent.memo,uid:e.oDetail})),this.$.autoAjax("patch",this.DetailUrl+"/"+this.nowId,a,{ok:t=>{0==t.state&&t.data?(e.$message.success(LANG["恭喜您，确定成功！"]||"恭喜您，确定成功！"),e.updated=!0,e.oDetailStatus=!1):(e.$message.error(LANG["确定失败，请稍候重试！"]||"确定失败，请稍候重试！"),e.oDetailStatus=!1),e.formType="pass",e.dialogDetail.state=!1},p:()=>{},error:t=>{console.log(t)}}),this.radio=0;break;case"refuse":let s={state:"failed",coupon:0,comment:this.Detailcontent.memo,uid:t.obj.user_id};e.oDetailStatus&&(s={state:"failed",coupon:0,comment:this.Detailcontent.memo,uid:e.oDetail}),this.$.autoAjax("patch",this.DetailUrl+"/"+this.nowId,s,{ok:t=>{0==t.state&&t.data?(e.$message.success(LANG["恭喜您，取消成功！"]||"恭喜您，取消成功！"),e.updated=!0,e.oDetailStatus=!1):(e.$message.error(LANG["取消失败，请稍候重试！"]||"取消失败，请稍候重试！"),e.oDetailStatus=!1),e.dialogDetail.state=!1,e.formType="refuse"},p:()=>{},error:t=>{console.log(t)}}),this.radio=0}},resetForm(){this.$route.query?this.tableUrl=this.baseUrl+"?status="+this.$route.query.status:this.tableUrl=this.baseUrl+"?date_from="+sessionStorage.sysTime+" 00:00:00&date_to="+sessionStorage.sysTime+" 23:59:59"},openUserInformation(t){this.$router.push({path:"/memberManagement",query:{name:t.user_name}})},exportData(){let t=this.$children[0].$refs.editForm.model;t.date_from&&t.date_to?this.$.autoAjax("get",ROUTES.GET.cash.offlines,this.exportForm,{ok:t=>{0===t.state&&t.data&&(window.location.href=t.data.url)},error:t=>{this.$message.error(t.responseText.msg)}}):this.$message.error(LANG["必需选择时间才能导出"]||"必需选择时间才能导出")},setFormArray(t,e){if("deposit_type"==t)if(this.$route.query.type)e[t].push("手动存款");else{let a=this.searchConfig[9].list||[];for(let s=0;s<a.length;s++)"手动存款"!==a[s]&&e[t].push(a[s])}}},computed:{},mounted(){},created(){this.init()},activated(){if(this.$route.query.user_name){let t=this.$route.query;t.user_name&&t.user_name.length>0&&(this.tableUrl=this.baseUrl+"?user_name="+t.user_name,this.searchConfig[1].value=t.user_name,this.searchConfig[5].value=this.$route.query.status)}else if(this.$route.query.status)this.tableUrl=this.baseUrl+"?status="+this.$route.query.status;else if(this.$route.query&&this.$route.query.day_begin&&this.$route.query.day_begin.length>1){let t={date_from:this.$route.query.day_begin,date_to:this.$route.query.day_end,user_name:this.$route.query.member_name,deposit_type:""==this.$route.query.type?"1,2,3,4,5,6,7,9,10,11":"8",status:"paid"};setTimeout(()=>{this.updateKeys="date_from,"+(t.date_from||"")+",date_to,"+(t.date_to||"")+",user_name,"+(t.user_name||"")+",status,paid,deposit_type,手动存款",this.tableUrl=this.baseUrl+this.addSearch(t)},500)}else this.tableUrl=this.baseUrl+"?date_from="+sessionStorage.sysTime+" 00:00:00&date_to="+sessionStorage.sysTime+" 23:59:59"},deactivated(){this.$route.query.status=null,this.$route.query.user_name=null}}}).call(this,a(4))},512:function(t,e,a){}}]);