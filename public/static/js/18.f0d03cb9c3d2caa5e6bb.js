(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{147:function(t,e,a){"use strict";a.r(e);var s=a(228),i=a(197),o=a(268),l=a(198),r=a(201),n={data:()=>({feeName:"",feeVisi:!1,LANG:LANG,dialogVisibleMemo:!1,memoText:"",memoTextUid:"",type:"search",formTitel:"",labelWidth:"90px",isEdit:{},formVisible:{state:!1},searchConfig:[{type:"quickDate",showTimes:!0},{prop:"member_name",value:"",type:"text",label:"用户名"},{prop:"trade_no",value:"",type:"text",label:"订单号"},{prop:"levels",value:[],label:"会员层级",sReset:!1,checkAll:!0,allBtnShow:!0,type:"checkGroup",list:[],Arr:[]},{type:"dateGroup",label:"申请时间",prop:[{prop:"date_from",value:"",label:"开始时间"},{prop:"date_to",value:"",label:"结束时间"}]},{type:"numberGroup",label:"申请金额",prop:[{prop:"money_from",value:null},{prop:"money_to",value:null}]},{prop:"status",value:[],label:"提款状态",sReset:!1,checkAll:!0,allBtnShow:!0,type:"checkGroup",list:["已取消","已拒绝","审核中","待处理","付款成功"],Arr:[{label:"已取消",value:"refused"},{label:"审核中",value:"prepare"},{label:"待处理",value:"pending"},{label:"已拒绝",value:"rejected"},{label:"付款成功",value:"paid"}]},{prop:"type",value:"",label:"提款方式",type:"select",list:[{label:"全部",value:""},{label:"线上",value:"1"},{label:"手动",value:"2"}]},{prop:"admin_user",value:"",type:"text",label:"操作者"},{prop:"tag",value:"",type:"text",label:"会员标签"}],tableDate:{list:[]},tableUrl:"",baseUrl:"",columnsUrl:"",formTableUrl:"",formColumnsUrl:"",editVisible:!1,editForm:{id:-1},id:null,updated:!1,confirmConfig:{state:!1,msg:"",fn:""},auditData:{},withdraw:{fee:"",management_cost:"",coupon:""},receivable:{fee:"",management_cost:"",coupon:""},feeId:0,gridData:[],gridDataCol:[],formType:"",loading:!1,allData:{page_sum:0,total_sum:0},outUrl:"",dialogVisible:!1,initDate:!1,sumShow:!1,allData:{},searchObj:{},updateDate:"",user_id:0,isShow:"true"==sessionStorage.user_withdraws_export,exportForm:{},userName:"",showChange:!1,showEditMemo:!1}),components:{datepicker:s.a,tablegrid:i.a,formEdit:l.a,confirm:r.a,editTable:o.a},methods:{init(){let t=this;"{}"==JSON.stringify(this.$route.query)&&(this.tableUrl=URL.api+ROUTES.GET.cash.withdraws+"?date_from="+sessionStorage.sysTime+" 00:00:00&date_to="+sessionStorage.sysTime+" 23:59:59"),this.baseUrl=URL.api+ROUTES.GET.cash.withdraws,this.columnsUrl="static/json/cash/memberGetOut/columns.json",t.exportForm={date_from:sessionStorage.sysTime+" 00:00:00",date_to:sessionStorage.sysTime+" 23:59:59",signature:1},this.$.autoAjax("get",URL.api+ROUTES.GET.user.level.list,"",{ok:e=>{if(0==e.state&&e.data){let a=e.data;for(let e in a)t.searchConfig[3].list.push("VIP"+a[e].level),t.searchConfig[3].Arr.push({label:"VIP"+a[e].level,value:a[e].level})}},p:()=>{},error:t=>{console.log(t)}}),t.searchObj.date_from=sessionStorage.sysTime+" 00:00:00",t.searchObj.date_to=sessionStorage.sysTime+" 23:59:59"},editMemo(t){if(this.showEditMemo){let e={memo:t.memo,uid:t.user_id};this.$.autoAjax("patch",URL.api+ROUTES.PATCH.user.info.memo+"/"+parseInt(t.id),e,{ok:t=>{t.data?(this.updated=!0,this.$message.success(LANG["备注写入成功"]||"备注写入成功")):this.$message.error(LANG["备注写入失败"]||"备注写入失败")},p:()=>{},error:t=>{console.log(t)}})}this.showEditMemo=!this.showEditMemo},copyGetOutMoney(){document.getElementById("getOutMoney_input").select(),document.execCommand("copy"),this.$message.success(LANG["复制出款金额成功"]||"复制出款金额成功")},copyGetOutBankNumber(){document.getElementById("getOutBankNumber_input").select(),document.execCommand("copy"),this.$message.success(LANG["复制银行帐号成功"]||"复制银行帐号成功")},copyGetOutBankUser(){document.getElementById("getOutBankUser_input").select(),document.execCommand("copy"),this.$message.success(LANG["复制户名成功"]||"复制户名成功")},closeDialog(t){let e=URL.api+ROUTES.GET.cash.withdraw.audit.$(t.id)+"?user_id="+t.user_id+"&withdraw_id="+t.id+"&cancel=yes";this.$.autoAjax("get",e,"",{ok:t=>{t.data&&0===t.state&&(this.updated=!0)}}),this.editVisible=!1},handleClose(){let t=this.editForm,e=URL.api+ROUTES.GET.cash.withdraw.audit.$(t.id)+"?user_id="+t.user_id+"&withdraw_id="+t.id+"&cancel=yes";this.$.autoAjax("get",e,"",{ok:t=>{t.data&&0===t.state&&(this.updated=!0)}}),this.editVisible=!1},doQuery(t){let e={};for(let a in t.item)if("status"===a){let s=t.item[a]||[],i=this.searchConfig[6].Arr||[],o=[];for(let t=0;t<s.length;t++)for(let e=0;e<i.length;e++)s[t]===i[e].label&&o.push(i[e].value);e[a]=o.toString()}else if("levels"===a){let s=t.item[a]||[],i=this.searchConfig[3].Arr||[],o=[];for(let t=0;t<s.length;t++)for(let e=0;e<i.length;e++)s[t]===i[e].label&&o.push(i[e].value);e[a]=o.toString()}else e[a]=t.item[a];e.money_to>0&&(e.money_from=e.money_from,e.money_to=e.money_to);for(let t in e)this.searchObj[t]=e[t];this.tableUrl=this.baseUrl+this.addSearch(e),this.exportForm=e,this.exportForm.signature=1},doHandle(t){switch(this.updated=!1,this.id=t.row.id,this.user_id=t.row.user_id,t.fn){case"doDetail":this.doDetail(t.row);break;case"changeFee":this.changeFee(t.row,event);break;case"doMemo":this.doMemo(t.row,event)}},doHandleDetail(t){switch(this.id=t.row.id,t.fn){case"showCommissionProportion":this.showCommissionProportion(t.row,event)}},changeFee(t,e){"pending"===t.status?(this.feeId=t.id,this.feeVisi=!0,this.feeName="修改"+t.user_name+"扣款",this.receivable.fee=t.fee.toFixed(2),t.coupon_money?this.receivable.coupon=t.coupon_money.toFixed(2):this.receivable.coupon=0,this.receivable.management_cost=t.admin_fee.toFixed(2),this.withdraw=JSON.parse(JSON.stringify(this.receivable)),this.updated=!1):this.$message.error(LANG["已处理,不能修改"]||"已处理,不能修改")},saveFee(){let t=this,e={fee:this.withdraw.fee,coupon:this.withdraw.coupon,management_cost:this.withdraw.management_cost};this.$.autoAjax("patch",URL.api+ROUTES.PATCH.cash.withdraw.fee+this.feeId,e,{ok:e=>{0==e.state&&e.data?(t.$message.success(LANG["保存成功"]||"保存成功"),t.feeVisi=!1,t.updated=!0):t.$message.error(LANG["保存失败"]||"保存失败"),this.feeId=0},p:()=>{},error:t=>{console.log(t)}})},doUpdate(t){parseInt(t.id)&&(this.confirmConfig.state=!0,this.confirmConfig.obj=t.id,this.confirmConfig.msg=this.LANG["确定要操作付款吗?"]||"确定要操作付款吗?",this.confirmConfig.fn="update")},handleCloseMemo(){this.dialogVisibleMemo=!1},doMemo(t){this.dialogVisibleMemo=!0,this.memoText=t.memo,this.memoTextUid=t.id},editMemoSubmit(){this.updated=!1;let t={memo:this.memoText,uid:this.user_id};this.dialogVisibleMemo=!1,this.$.autoAjax("patch",URL.api+ROUTES.PATCH.user.info.memo+"/"+parseInt(this.memoTextUid),t,{ok:t=>{t.data?(this.updated=!0,this.$message.success(LANG["备注写入成功"]||"备注写入成功")):this.$message.error(LANG["备注写入失败"]||"备注写入失败")},p:()=>{},error:t=>{console.log(t)}})},doDetail(t){this.showChange={refused:!1,prepare:!0,pending:!0,rejected:!1,paid:!1}[t.status]||!1,this.userName=t.user_name,this.loading=!0;let e=0,a=parseInt(t.id);this.id=a;let s=parseInt(t.user_id);this.editForm={},this.editForm.comment=t.comment||"无",this.formColumnsUrl="/static/json/cash/memberGetOut/auditInformation/columns.json";let i=URL.api+ROUTES.GET.cash.withdraw.audit.$(a)+"?user_id="+s+"&withdraw_id="+a;this.tableDate.list=[],this.tableDate.level_config={},this.auditData={},this.$.autoAjax("get",i,"",{ok:t=>{if(0==t.state&&t.data){this.auditData=t.data,this.tableDate.level_config=t.data.level_config,this.editForm.deposit_money=t.data.deposit_money,this.editForm.deposit_times=t.data.deposit_times,this.editForm.withdraw_money=t.data.withdraw_money,this.editForm.withdraw_times=t.data.withdraw_times,this.editForm.lose_earn=t.data.lose_earn;let e=t.data.list;e.forEach(t=>{t.withdraw_bet_coupon||t.withdraw_bet_principal||(t.withdraw_bet_principal=t.withdraw_bet,t.withdraw_bet_coupon=0),t.is_pass?t.is_pass="是":t.is_pass="否"});for(let t=0;t<e.length;t++)this.tableDate.list.push(e[t])}2===++e&&(this.loading=!1,this.editVisible=!0)},p:()=>{},error:t=>{this.loading=!1}});let o=this;this.$.autoAjax("get",URL.api+ROUTES.GET.cash.withdraw.details.$(a),"",{ok:a=>{if(0==a.state&&a.data){let e=a.data;for(let t in e)o.editForm[t]=e[t];o.editForm.comment=t.comment||""}2===++e&&(this.loading=!1,this.editVisible=!0)},p:()=>{},error:t=>{this.loading=!1}})},doRefuse(t){parseInt(t.id)&&(this.confirmConfig.state=!0,this.confirmConfig.msg=this.LANG["确定取消吗?"]||"确定取消吗?",this.confirmConfig.fn="refuse")},toLink(t,e,a){this.editVisible=!1,"lottery"==t&&this.$router.push({path:"/lotterSingleNote",query:{name:this.userName,start:e,end:a}})},doReject(t){parseInt(t.id)&&(this.confirmConfig.state=!0,this.confirmConfig.msg=this.LANG["确定拒绝吗?"]||"确定拒绝吗?",this.confirmConfig.fn="reject")},doPay(t){parseInt(t.id)&&(this.confirmConfig.state=!0,this.confirmConfig.msg=this.LANG["确定支付吗?"]||"确定支付吗?",this.confirmConfig.fn="pay")},doConfirm(t){this.loading=!0;let e=this.id;switch(t.fn){case"refuse":this.$.autoAjax("patch",URL.api+ROUTES.PATCH.cash.withdraw.state.$(e),{status:"refused",role:1},{ok:t=>{0===t.state&&t.data?(this.$message.success(LANG["取消成功"]||"取消成功"),this.editVisible=!1):this.$message.error(LANG[t.msg]||t.msg),this.loading=!1,this.updated=!0},p:()=>{},error:t=>{console.log(t)}});break;case"reject":this.$.autoAjax("patch",URL.api+ROUTES.PATCH.cash.withdraw.state.$(e),{status:"rejected",role:1},{ok:t=>{0===t.state&&t.data?(this.$message.success(LANG["拒绝成功"]||"拒绝成功"),this.editVisible=!1,this.updated=!0):this.$message.error(LANG[t.msg]||t.msg),this.loading=!1},p:()=>{},error:t=>{console.log(t)}});break;case"update":this.$.autoAjax("patch",URL.api+ROUTES.POST.cash.payment+"?id="+e,{status:"paid"},{ok:t=>{0===t.state&&t.data?(this.$message.success(LANG["支付成功"]||"支付成功"),this.editVisible=!1,this.updated=!0):this.$message.error(LANG["支付失败"]||"支付失败"),this.loading=!1},p:()=>{},error:t=>{console.log(t)}})}},getTableDatatwo(t){if(this.sumShow=!1,this.getTableData={},t.allData&&t.allData.attributes&&t.allData.attributes.total>0){let e=t.allData.attributes;this.sumShow=!0;for(let t in e)this.allData[t]=e[t]}},resetForm(){this.tableUrl=this.baseUrl+this.addSearch(this.$children[0].$refs.editForm.model),this.searchObj.date_from=sessionStorage.sysTime+" 00:00:00",this.searchObj.date_to=sessionStorage.sysTime+" 23:59:59"},openUserInformation(t){this.$router.push({path:"/memberManagement",query:{name:t.user_name}})},showCommissionProportion(t,e){this.gridData=[];for(let e=0;e<t.valid_bet_detail.length;e++)t.valid_bet_detail[e].flag=e.toString();this.gridDataCol=t.valid_bet_detail;let a=t.valid_bet_detail,s={};for(let t=0;t<a.length;t++){s[a[t].flag]=a[t].valid_bet}this.gridData.push(s)},exportData(){let t=this.$children[0].$refs.editForm.model;t.date_from&&t.date_to?this.$.autoAjax("get",ROUTES.GET.cash.withdraws,this.exportForm,{ok:t=>{0===t.state&&t.data&&(window.location.href=t.data.url)},error:t=>{this.$message.error(t.responseText.msg)}}):this.$message.error(LANG["必需选择时间才能导出"]||"必需选择时间才能导出")}},computed:{},mounted(){},created(){this.init()},activated(){if(this.formType="update"+(9*Math.random()+1),this.$route.query.status){let t=[];"pending"===this.$route.query.status&&t.push("待处理"),this.searchConfig[6].value=t,this.initDate=!0,this.tableUrl=URL.api+ROUTES.GET.cash.withdraws+"?status="+this.$route.query.status}else if(this.$route.query.day_begin){let t="";this.$route.query.member_name&&(this.searchConfig[1].value=this.$route.query.member_name,t="member_name="+this.$route.query.member_name),this.$route.query.day_begin&&(t=t.length>6?t+"&date_from="+this.$route.query.day_begin:"date_from="+this.$route.query.day_begin,this.searchConfig[4].prop[0].value=this.$route.query.day_begin),this.$route.query.day_end&&(t=t.length>6?t+"&date_to="+this.$route.query.day_end:"date_to="+this.$route.query.day_end,this.searchConfig[4].prop[1].value=this.$route.query.day_end,this.searchConfig[6].value.push("付款成功"),this.searchConfig[7].value=this.$route.query.type.toString()||"1",t+=t.length>6?"&status=paid&type=1":"?status=paid&type=1"),this.initDate=!0,this.tableUrl=URL.api+ROUTES.GET.cash.withdraws+(t.length>6?"?"+t:"")}},deactivated(){this.$route.query.status=null}},d=a(24);var c=function(t){a(511)},p=Object(d.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"memberGetOut"}},[a("div",{staticClass:"search"},[a("formEdit",{attrs:{formTitel:t.formTitel,formVisible:t.formVisible,formConfig:t.searchConfig,type:t.type,labelWidth:t.labelWidth,isEdit:t.isEdit,formType:t.formType,initDate:t.initDate,updateDate:t.updateDate,showAdd:!1},on:{"do-query":t.doQuery,"reset-form":t.resetForm}})],1),t._v(" "),a("el-row",[a("el-col",[a("tablegrid",{attrs:{columnsUrl:t.columnsUrl,updated:t.updated,tableUrl:t.tableUrl,autoshowRefresh:!0,showExport:t.isShow,getData:!0,automation:!0},on:{"get-table-data":t.getTableDatatwo,"do-handle":t.doHandle,"export-data":t.exportData}},[t.sumShow?a("tr",{staticClass:"sumdiv ml20",attrs:{slot:"other",span:12},slot:"other"},[a("td",{attrs:{colspan:"15"}},[a("div",{staticClass:"cell"},[a("span",{staticClass:"font14 tCent"},[t._v(t._s(t.LANG["小计"]||"小计")+" : "+t._s(t.allData.money_page_sum))]),t._v(" "),a("span",{staticClass:"font14 ml10"},[t._v(t._s(t.LANG["总计"]||"总计")+" : "+t._s(t.allData.money_total_sum))]),t._v(" "),a("span",{staticClass:"ml10 mr10"},[t._v(" | ")]),t._v(" "),a("span",{staticClass:"font14"},[t._v(t._s(t.LANG["实际金额小计"]||"实际金额小计")+" : "+t._s(t.allData.actual_page_sum))]),t._v(" "),a("span",{staticClass:"font14 ml10"},[t._v(t._s(t.LANG["实际金额总计"]||"实际金额总计")+" : "+t._s(t.allData.actual_total_sum))]),t._v(" "),a("span",{staticClass:"ml10 mr10"},[t._v(" | ")]),t._v(" "),a("span",{staticClass:"font14"},[t._v(t._s(t.LANG["扣除金额小计"]||"扣除金额小计")+": "+t._s(t.allData.deduct_page_sum))]),t._v(" "),a("span",{staticClass:"font14 ml10"},[t._v(t._s(t.LANG["扣除金额总计"]||"扣除金额总计")+" : "+t._s(t.allData.deduct_total_sum))]),t._v(" "),a("span",{staticClass:"ml10 mr10"},[t._v(" | ")]),t._v(" "),a("span",{staticClass:"font14"},[t._v(t._s(t.LANG["笔数"]||"笔数")+" : "+t._s(t.allData.total))])])])]):t._e()]),t._v(" "),t.sumShow?a("div",{staticClass:"help_gray",staticStyle:{"margin-top":"-40px","margin-left":"20px"}},[t._v("\n                审核中： 某一位客服给会员出款，点击审核后，则绑定该操作者，后续只能由他（她）完成出款。\n            ")]):t._e()],1),t._v(" "),a("el-col",[a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,size:"tiny"},on:{"update:visible":function(e){t.dialogVisible=e}}},[t._v("\n                "+t._s(t.LANG["点击”确认“导出数据"]||"点击”确认“导出数据")+"\n                "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("a",{attrs:{href:t.outUrl,target:"_blank",id:"outUrl"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 认")])],1)],1)])],1),t._v(" "),a("el-col",[a("el-dialog",{staticClass:"vipDialog",attrs:{title:"【"+t.userName+"】"+t.LANG["会员提现详情"]||!1,size:"large","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":t.handleClose},model:{value:t.editVisible,callback:function(e){t.editVisible=e},expression:"editVisible"}},[a("el-row",[a("el-col",{staticClass:"state_danger",attrs:{span:24}},[t._v("\n                        "+t._s(t.LANG["会员备注"]||"会员备注")+"：\n                        "),t.showEditMemo?a("el-input",{staticClass:"intW",attrs:{size:"mini"},model:{value:t.editForm.memo,callback:function(e){t.$set(t.editForm,"memo",e)},expression:"editForm.memo"}}):a("span",[t._v(t._s(t.editForm.memo))]),t._v(" "),t.showEditMemo?a("el-button",{attrs:{plain:!0,type:"info",size:"mini"},on:{click:function(e){return t.editMemo(t.editForm)}}},[t._v("提 交\n                        ")]):a("el-button",{attrs:{plain:!0,type:"info",icon:"edit",size:"mini"},on:{click:function(e){return t.editMemo(t.editForm)}}},[t._v("修 改\n                        ")])],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-dark tCent"},[t._v("\n                            "+t._s(t.LANG["取款信息"]||"取款信息")+"\n                        ")])])],1),t._v(" "),a("el-row",{staticClass:"hover_row",attrs:{gutter:22}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[t._v(t._s(t.LANG["申请金额"]||"申请金额"))])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"menberGetOutContentData"},[a("input",{staticClass:"remove",attrs:{id:"getOutMoney_input",readonly:"readonly"},domProps:{value:t.editForm.money}}),t._v(" "),a("el-button",{attrs:{plain:!0,type:"info",icon:"document",size:"mini"},on:{click:function(e){return t.copyGetOutMoney()}}},[t._v("复 制\n                            ")])],1)]),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[t._v(t._s(t.LANG["操作者"]||"操作者"))])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"menberGetOutContentData"},[t.editForm.process_uname?a("span",[t._v(t._s(t.editForm.process_uname))]):a("span",{staticClass:"help_gray"},[t._v("暂无数据")])])]),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[t._v(t._s(t.LANG["申请IP"]||"申请IP"))])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"menberGetOutContentData"},[t._v(t._s(t.editForm.ip))])])],1),t._v(" "),a("el-row",{staticClass:"hover_row",attrs:{gutter:22}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[t._v(t._s(t.LANG["户名"]||"户名"))])])]),t._v(" "),a("el-col",{attrs:{span:6}},[t.editForm.receive_bank_info?a("div",[a("input",{staticClass:"remove",attrs:{id:"getOutBankUser_input",readonly:"readonly"},domProps:{value:t.editForm.receive_bank_info.accountname}}),t._v(" "),a("el-button",{attrs:{plain:!0,type:"info",icon:"document",size:"mini"},on:{click:function(e){return t.copyGetOutBankUser()}}},[t._v("复 制\n                            ")])],1):t._e()]),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[t._v(t._s(t.LANG["取款银行"]||"取款银行"))])])]),t._v(" "),a("el-col",{attrs:{span:6}},[t.editForm.receive_bank_info?a("div",{staticClass:"menberGetOutContentData"},[t._v("\n                            "+t._s(t.editForm.receive_bank_info.bank)+"\n                        ")]):t._e()]),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[t._v(t._s(t.LANG["支行"]||"支行"))])])]),t._v(" "),a("el-col",{attrs:{span:6}},[t.editForm.receive_bank_info?a("div",{staticClass:"menberGetOutContentData"},[t._v("\n                            "+t._s(t.editForm.receive_bank_info.address)+"\n                        ")]):t._e()])],1),t._v(" "),a("el-row",{staticClass:"hover_row",attrs:{gutter:22}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[t._v(t._s(t.LANG["银行帐号"]||"银行帐号"))])])]),t._v(" "),a("el-col",{attrs:{span:6}},[t.editForm.receive_bank_info?a("div",[a("input",{staticClass:"remove",attrs:{id:"getOutBankNumber_input",readonly:"readonly"},domProps:{value:t.editForm.receive_bank_info.card}}),t._v(" "),a("el-button",{attrs:{plain:!0,type:"info",icon:"document",size:"mini"},on:{click:function(e){return t.copyGetOutBankNumber()}}},[t._v("复 制\n                            ")])],1):t._e()]),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[t._v(t._s(t.LANG["申请时间"]||"申请时间"))])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"menberGetOutContentData"},[t._v(t._s(t.editForm.created))])]),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[t._v(t._s(t.LANG["确认时间"]||"确认时间"))])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"menberGetOutContentData"},[t._v(t._s(t.editForm.confirm_time))])])],1),t._v(" "),a("el-row",{staticClass:"hover_row",attrs:{gutter:22}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[t._v(t._s(t.LANG["总入款"]||"总入款"))])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"menberGetOutContentData"},[a("span",[t._v(t._s(t.editForm.deposit_money))]),t._v(" |\n                            "),a("span",[t._v(t._s(t.editForm.deposit_times)+"笔")])])]),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[t._v(t._s(t.LANG["总出款"]||"总出款"))])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"menberGetOutContentData"},[a("span",[t._v(t._s(t.editForm.withdraw_money))]),t._v(" |\n                            "),a("span",[t._v(t._s(t.editForm.withdraw_times)+"笔")])])]),t._v(" "),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content bg-purple"},[a("span",[t._v(t._s(t.LANG["盈利情况"]||"盈利情况"))])])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"menberGetOutContentData"},[t._v(t._s(t.editForm.lose_earn))])])],1),t._v(" "),a("el-row",[a("el-col"),t._v(" "),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-dark tCent mb10"},[t._v(t._s(t.LANG["稽核信息"]||"稽核信息"))]),t._v(" "),a("div",{staticClass:"hiddenScrollbar"},[a("el-table",{staticClass:"tCent",attrs:{data:t.tableDate.list,border:""}},[a("el-table-column",{attrs:{width:"230",label:"交易时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("p",[t._v("起始："+t._s(e.row.start_date))]),t._v(" "),a("p",[t._v("结束："+t._s(e.row.end_date))])]}}])}),t._v(" "),a("el-table-column",{attrs:{property:"money",label:"存款金额"}}),t._v(" "),a("el-table-column",{attrs:{property:"coupon_money",label:"优惠金额"}}),t._v(" "),a("el-table-column",{attrs:{property:"valid_bet",label:"有效投注额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{placement:"right",effect:"light"}},[a("div",{attrs:{slot:"content"},slot:"content"},t._l(t.gridDataCol,function(s,i){return a("p",{key:i,class:{mt10:i>0}},[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.toLink(s["name-en"],e.row.start_date,e.row.end_date)}}},[a("el-tag",{attrs:{type:"primary"}},[t._v(t._s(s.name)+" :")])],1),t._v(" "),a("span",{staticClass:"pleft"},[t._v(t._s(s.valid_bet))])])}),0),t._v(" "),a("el-tag",{staticStyle:{"min-width":"60px"},attrs:{type:"primary",size:"small"},nativeOn:{mouseenter:function(a){return a.preventDefault(),t.showCommissionProportion(e.row,a)}}},[t._v("\n                                                "+t._s(e.row.valid_bet)+"\n                                            ")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{property:"withdraw_bet_principal",label:"常态打码量"}}),t._v(" "),a("el-table-column",{attrs:{property:"withdraw_bet_coupon",label:"优惠打码量"}}),t._v(" "),a("el-table-column",{attrs:{property:"is_pass",label:"是否达到投注"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{class:"是"==e.row.is_pass?"pass":"nopass"},[t._v(t._s(e.row.is_pass))])]}}])})],1)],1)]),t._v(" "),t.auditData.data?a("el-col",{staticClass:"mb20",attrs:{span:24}},[a("p",[t._v("需扣除优惠金额："),a("span",[t._v(t._s(t.auditData.data.total_coupon))])]),t._v(" "),a("p",[t._v("扣除行政费："),a("span",[t._v(t._s(t.auditData.data.total_admin_fee))])]),t._v(" "),a("p",[t._v("\n                            共需扣除：出款手续费 "),a("span",[t._v(t._s(t.auditData.data.total_fee))]),t._v("+行政费 "),a("span",[t._v(t._s(t.auditData.data.total_admin_fee))]),t._v("+扣除优惠金"+t._s(t.auditData.data.total_coupon)+"= "),a("span",[t._v(t._s(t.auditData.data.total_coupon+t.auditData.data.total_admin_fee+t.auditData.data.total_fee))])])]):t._e()],1),t._v(" "),t.showChange?a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){return t.closeDialog(t.editForm)}}},[t._v(t._s(t.LANG["取消审核"]||"取消审核"))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.doRefuse(t.editForm)}}},[t._v(t._s(t.LANG["取消出款"]||"取消出款"))]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.doReject(t.editForm)}}},[t._v(t._s(t.LANG["拒绝"]||"拒绝"))]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(e){return t.doUpdate(t.editForm)}}},[t._v(t._s(t.LANG["确认出款"]||"确认出款"))])],1):t._e()],1)],1),t._v(" "),a("el-col",[a("confirm",{attrs:{confirmConfig:t.confirmConfig},on:{"do-confirm":t.doConfirm}})],1),t._v(" "),a("el-col",[a("el-dialog",{attrs:{title:t.feeName,size:"tiny"},model:{value:t.feeVisi,callback:function(e){t.feeVisi=e},expression:"feeVisi"}},[a("el-row",{attrs:{gutter:20,type:"flex",justify:"center"}},[a("el-col",{attrs:{span:8,pull:2}},[a("div",{staticClass:"grid-content bg-purple tCent"},[a("span",[t._v(t._s(t.LANG["应扣款"]||"应扣款"))])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple tCent"},[a("span",[t._v(t._s(t.LANG["实扣款"]||"实扣款"))])])])],1),t._v(" "),a("el-row",{attrs:{gutter:20,type:"flex",justify:"center"}},[a("el-col",{attrs:{span:8,pull:2}},[a("div",{staticClass:"grid-content bg-purple tCent"},[a("span",[t._v("手续费:"+t._s(t.receivable.fee))])])]),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple tCent"},[a("el-input",{attrs:{type:"number"},model:{value:t.withdraw.fee,callback:function(e){t.$set(t.withdraw,"fee",e)},expression:"withdraw.fee"}})],1)])],1),t._v(" "),a("el-row",{attrs:{gutter:20,type:"flex",justify:"center"}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"tCent"},[a("el-button",{attrs:{type:"primary"},on:{click:t.saveFee}},[t._v("提 交")])],1)]),t._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:" tCent"},[a("el-button",{on:{click:function(e){t.feeVisi=!1}}},[t._v("取 消")])],1)])],1)],1)],1),t._v(" "),a("el-col",[a("el-dialog",{attrs:{title:"当前用户的备注信息:",visible:t.dialogVisibleMemo,size:"tiny","before-close":t.handleCloseMemo},on:{"update:visible":function(e){t.dialogVisibleMemo=e}}},[a("el-form",[a("el-form-item",[""==t.memoText||null==t.memoText?a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"当前用户暂无备注信息"},model:{value:t.memoText,callback:function(e){t.memoText=e},expression:"memoText"}}):a("el-input",{attrs:{type:"textarea",rows:2,placeholder:t.memoText},model:{value:t.memoText,callback:function(e){t.memoText=e},expression:"memoText"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisibleMemo=!1}}},[t._v("关 闭")]),t._v(" "),a("el-button",{staticClass:"formSave",attrs:{type:"primary"},on:{click:t.editMemoSubmit}},[t._v("修 改")])],1)],1)],1)],1)],1)},[],!1,c,null,null);e.default=p.exports},227:function(t,e,a){},228:function(t,e,a){"use strict";var s={data:()=>({LANG:LANG}),props:{label:String,Sdate:{type:Object,default:{date_from:"",date_to:""}}},methods:{changestart(){this.date_from=this.formatDate(this.date_from,"yyyy-MM-dd HH:mm:ss")},changeend(){if(""==this.Sdate.date_from&&this.$message.error(LANG["开始时间必需选择"]||"开始时间必需选择"),this.date_to=this.formatDate(this.Sdate.date_to,"yyyy-MM-dd HH:mm:ss"),!this.DateComparison(this.Sdate.date_from,this.Sdate.date_to)){this.$message.error(LANG["结束时间必需大于开始时间"]||"结束时间必需大于开始时间");let t=this;setTimeout(()=>{t.Sdate.date_to=""},3e3)}},formatDate(t,e){var a=new Date(t),s=function(t){return(t<10?"0":"")+t};return e.replace(/yyyy|MM|dd|HH|mm|ss/g,function(t){switch(t){case"yyyy":return s(a.getFullYear());case"MM":return s(a.getMonth()+1);case"mm":return s(a.getMinutes());case"dd":return s(a.getDate());case"HH":return s(a.getHours());case"ss":return s(a.getSeconds())}})},DateComparison(t,e){var a=new Date(t),s=new Date(e);return!(a.getTime()>s.getTime())}}},i=a(24);var o=function(t){a(227)},l=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block"},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{attrs:{align:"left",type:"date",placeholder:t.LANG["选择日期"]||"选择日期","picker-options":t.pickerOptions,size:"small"},on:{change:t.changestart},model:{value:t.Sdate.date_from,callback:function(e){t.$set(t.Sdate,"date_from",e)},expression:"Sdate.date_from"}})],1),t._v(" "),a("el-col",{staticClass:"line",staticStyle:{"padding-left":"5px"},attrs:{span:2}},[t._v("-")]),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-date-picker",{attrs:{align:"left",type:"date",placeholder:t.LANG["选择日期"]||"选择日期","picker-options":t.pickerOptions,size:"small"},on:{change:t.changeend},model:{value:t.Sdate.date_to,callback:function(e){t.$set(t.Sdate,"date_to",e)},expression:"Sdate.date_to"}})],1)],1)},[],!1,o,"data-v-28b8676e",null);e.a=l.exports},263:function(t,e,a){},268:function(t,e,a){"use strict";var s=a(0);s.default.filter("formatCheck",function(t){return"1"==t}),s.default.filter("formatDate",function(t,e){let a=new Date(t),s=function(t){return(t<10?"0":"")+t};return e.replace(/yyyy|MM|dd|HH|mm|ss/g,function(t){switch(t){case"yyyy":return s(a.getFullYear());case"MM":return s(a.getMonth()+1);case"mm":return s(a.getMinutes());case"dd":return s(a.getDate());case"HH":return s(a.getHours());case"ss":return s(a.getSeconds())}})});var i={data:()=>({bodyModel:[],columnsModel:[],dialogVisible:!1,switchIndex:[],inputVal:-1}),props:{columnsUrl:{type:String,default:""},bodyModelUrl:{type:String,default:""},updateModelUrl:{type:String,default:""},getData:{type:Boolean,default:!1}},methods:{init(){if(this.columnsModel.splice(0,this.columnsModel.length),""!=this.columnsUrl&&null!=this.columnsUrl){let t=this.columnsUrl,e=this.columnsModel,a=this;this.$http.get(t,URLCONFIG).then(t=>{let s=t.data.columns;if(s.length>0)for(let t in s)"switch"==s[t].type&&a.switchIndex.push(s[t].prop),e.push(s[t])}).catch(t=>{})}if(this.bodyModel.splice(0,this.bodyModel.length),""!=this.bodyModelUrl&&null!=this.bodyModelUrl){let t=this.bodyModelUrl,e=this.bodyModel,a=this,s=this.switchIndex;this.$http.get(t,URLCONFIG).then(t=>{let i=t.data.data,o=t.data.data.list;if(i.length>0)for(let t in i){for(let e in s)i[t][s[e]]?i[t][s[e]]=!0:i[t][s[e]]=!1;e.push(i[t])}else if(o.length)for(let t in o){for(let e in s)o[t][s[e]]?o[t][s[e]]=!0:o[t][s[e]]=!1;e.push(o[t])}a.getData&&a.$emit("get-table-data",{event:event,item:a.bodyModel,allData:i})}).catch(t=>{})}},showDialog(t,e,a,s,i){let o=this.bodyModel,l=(s.id,this);if(null!=this.updateModelUrl&&this.updateModelUrl,20==a){o[t][e]="number"==i?this.inputVal:this.updateVal(a);var r=l._("修改失败");l.$message.success(r)}else{r=l._("修改成功");l.$message.success(r)}},updateVal(t){switch(t){case 1:return 0;case 0:return 1;case!0:return!1;case!1:return!0}},saveInputVal(t){this.inputVal=t},doSave(){this.$emit("save-data",{item:this.bodyModel})},foo:()=>!0,doHandle(t,e){this.$emit("do-handle",{event:event,row:t,fn:e})}},created:function(){this.init()},watch:{bodyModelUrl:function(t){this.init()}}},o=a(24);var l=function(t){a(263)},r=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editTable",attrs:{id:"editTable"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"mt10",attrs:{span:24}},[a("table",{staticClass:"el-table el-table__header w100",attrs:{cellspacing:"0",cellpadding:"0",border:"1"}},[a("tr",t._l(t.columnsModel,function(e,s){return a("th",{staticClass:"is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[t._v(t._s(e.label))])])}),0),t._v(" "),t._l(t.bodyModel,function(e,s){return a("tr",t._l(t.columnsModel,function(i,o){return a("td",{staticClass:"el-table_1_column_19"},["date"==i.type?a("div",{staticClass:"cell"},[a("span",[t._v(t._s(t._f("formatDate")(e[i.prop],"yyyy-MM-dd HH:mm:ss")))])]):t._e(),t._v(" "),"divisionMoney"==i.type?a("div",{staticClass:"cell"},[a("span",[t._v(t._s(t._f("formatMoney")(e[i.prop])))])]):t._e(),t._v(" "),i.type?t._e():a("div",{staticClass:"cell"},[a("span",[t._v(t._s(e[i.prop]))])]),t._v(" "),"linkDivisionMoney"==i.type?a("div",{staticClass:"cell",class:{tCent:null!=i.class}},[e[i.prop]?a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(a){return t.doHandle(e,i.fn)}}},[a("el-tag",{staticClass:"linkCell",attrs:{type:"primary"}},[t._v(t._s(t._f("formatMoney")(e[i.prop])))])],1):t._e(),t._v(" "),e[i.prop]?t._e():a("span",[t._v(t._s(e[i.prop]))])],1):t._e(),t._v(" "),"checkbox"==i.type?a("div",{staticClass:"cell",on:{click:function(a){return t.showDialog(s,i.prop,e[i.prop],e)}}},[a("el-checkbox",{attrs:{"true-label":1,checked:t._f("formatCheck")(e[i.prop])},model:{value:e[i.prop],callback:function(a){t.$set(e,i.prop,a)},expression:"item[col.prop]"}})],1):t._e(),t._v(" "),"number"==i.type?a("div",{staticClass:"cell"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e[i.prop],expression:"item[col.prop]"}],staticClass:"el-input__inner",attrs:{type:"number",min:"1"},domProps:{value:e[i.prop]},on:{keyup:function(a){return a.type.indexOf("key")||13===a.keyCode?t.showDialog(s,i.prop,e[i.prop],e,"number"):null},blur:function(a){return t.showDialog(s,i.prop,e[i.prop],e,"number")},focus:function(a){return t.saveInputVal(e[i.prop])},input:function(a){a.target.composing||t.$set(e,i.prop,a.target.value)}}})]):t._e(),t._v(" "),"switch"==i.type?a("div",{staticClass:"cell",on:{click:function(a){return t.showDialog(s,i.prop,e[i.prop],e)}}},[a("el-switch",{model:{value:e[i.prop],callback:function(a){t.$set(e,i.prop,a)},expression:"item[col.prop]"}})],1):t._e()])}),0)})],2)])],1)],1)},[],!1,l,"data-v-cb36b58e",null);e.a=r.exports},511:function(t,e,a){}}]);