(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{115:function(t,e,a){"use strict";a.r(e);var n={data:()=>({LANG:LANG,checksPlayOn:!1,dataModel:[],loading:!1,total:0,pageSize:50,pageCount:0,currentPage:0,all_min_odds:0,old_odds:"",inputsix:"",inputfive:"",inputfour:"",inputthree:"",inputtwo:"",inputone:"",allChecked:!1,currentCheck:[],baseUrl:""}),props:{tableUrl:String,columnsUrl:String,updated:{type:Boolean,default:!1},playTypeId:Number},watch:{tableUrl:function(t){t&&this.init()},updated:function(t){t&&this.init()}},methods:{init(){let t=this;this.inputfive="",this.inputfour="",this.inputthree="",this.inputtwo="",this.inputone="";this.total;let e=this.pageSize,a=(this.pageCount,this.currentPage);if(this.baseUrl=this.tableUrl,this.baseUrl){if(this.loading=!0,-1===this.baseUrl.indexOf("?"))this.baseUrl=this.baseUrl+"?page="+(0===a?1:a)+"&page_size="+(0===e?10:e);else{let t=this.baseUrl.indexOf("page=");this.baseUrl=t>0?this.baseUrl.replace(/page=\d+/,"page="+a||!1):this.baseUrl+"&page="+(0===a?1:a)+"&page_size="+(0===e?10:e);let n=this.baseUrl.indexOf("page_size=");this.baseUrl=n>0?this.baseUrl.replace(/page_size=\d+/,"page_size="+(0===e?10:e)):this.baseUrl+"&page_size=10"}this.dataModel=[],this.all_min_odds=0,this.$.autoAjax("get",this.baseUrl,"",{ok:e=>{if(0===e.state&&e.data){t.total=e.attributes.total||10,t.pageSize=e.attributes.size||50,t.pageCount=Math.ceil(this.total/this.pageSize),t.currentPage=e.attributes.number||1;let a=e.data||e.data.list||[],n=t.dataModel;for(let t of a)t.checked=!1;t.all_min_odds=FORMATNUMBER(e.data[0].max_odds);for(let e in a){let s=a[e],l={};for(let e in s)"min_bet"===e||"one_bet"===e||"one_term"===e||"one_max_money"===e?l[e]=FORMATMONEY(s[e]):("max_odds"===e&&FORMATNUMBER(t.all_min_odds)>0&&FORMATNUMBER(s[e])<FORMATNUMBER(t.all_min_odds)&&(t.all_min_odds=FORMATNUMBER(s[e])),l[e]=s[e]);t.$set(n,e,l)}let s=n;sessionStorage.setItem("old_odds",JSON.stringify(s))}t.loading=!1},p:()=>{},error:t=>{console.log(t)}})}},doSave(){let t=this.dataModel,e=JSON.parse(sessionStorage.getItem("old_odds")),a=[],n=[];for(let e in t){let n=t[e],s={};for(let t in n)s[t]="min_bet"===t||"one_bet"===t||"one_term"===t||"one_max_money"===t?FORMATMultiplyMoney(n[t]):n[t];a.push(s)}for(let t in e){let a=e[t],s={};for(let t in a)s[t]="min_bet"===t||"one_bet"===t||"one_term"===t||"one_max_money"===t?FORMATMultiplyMoney(a[t]):a[t];n.push(s)}this.$emit("save-data",{item:a,old_odds:n})},doCurrentChange(t){this.currentPage=t,this.init()},doSizePage(t){this.pageSize=t,this.init()},changeInput(t,e,a){let n=window.event||t;n.srcElement?n.srcElement:n.target;n.target.style.display="none",n.target.nextElementSibling.style.display="block",n.target.focus()},doEnter(t,e,a){if("odds"===e){this.$createElement;parseInt(a)}let n=window.event||event;n.srcElement?n.srcElement:n.target;event.target.style.display="none",event.target.previousElementSibling.style.display="block"},checkAllChange(t,e){let a=window.event||t,n=this.dataModel;if((a.srcElement?a.srcElement:a.target).checked)for(let t in this.dataModel)n[t][e]=!0;else for(let t in this.dataModel)n[t][e]=!1},changeCol(t,e){this.$createElement;let a=window.event||t,n=a.srcElement?a.srcElement:a.target;if("odds"===e&&this.currentCheck.length>0){let t=0,e=0,a=[],n=[];for(let t of this.currentCheck)a.push(FORMATNUMBER(this.dataModel[t].max_odds)),n.push(FORMATNUMBER(this.dataModel[t].min_odds));t=GETARRAYMIN(a),e=GETARRAYMAX(n)}if(FORMATNUMBER(n.value)<0)return this.$message.error(LANG["最小值为0"]||"最小值为0");if(n.value){for(let t in this.dataModel)if(this.dataModel[t].sub_odds&&"odds"===e){if(0===this.currentCheck.length){let e=this.dataModel[t].sub_odds;for(let t=0;t<e.length;t++)e[t].odds=n.value}else for(let e of this.currentCheck)if(e==t){let e=this.dataModel[t].sub_odds;for(let t=0;t<e.length;t++)e[t].odds=n.value}}else if(0===this.currentCheck.length)this.dataModel[t][e]=n.value;else for(let a of this.currentCheck)a==t&&(this.dataModel[t][e]=n.value);n.blur()}},allCheckedOdd(){let t=this.allChecked;for(let e of this.dataModel)e.checked=t;if(this.allChecked){this.currentCheck=[];for(let t of this.dataModel.keys())this.currentCheck.push(t)}else this.currentCheck=[]},checkedOdd(t,e){if(e)this.currentCheck.push(t),new Set(this.currentCheck);else{let e=this.currentCheck.indexOf(t);this.currentCheck.splice(e,1)}}},created:function(){this.init()}},s=a(10);var l=function(t){a(459)},i={data:()=>({LANG:LANG,tableUrl:"",columnsUrl:"",lotteryTemplate:"",lotteryTemplateId:-1,lotteryTypeId:0,lotteryTypeName:"标准玩法",lotteryList:[],nowLotteryId:-1,nowLotteryTemplate:"",nowLotteryPid:-1,nowPlayTypeId:-1,playTypeList:[],loading:!1,updated:!1}),components:{oddsSet:Object(s.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{id:"modelSet"}},[a("el-button",{staticStyle:{position:"absolute",right:"10px",top:"-36px"},attrs:{type:"primary",size:"small"},domProps:{textContent:t._s(t.LANG["保 存"]||"保 存")},on:{click:t.doSave}}),t._v(" "),a("table",{staticClass:"el-table el-table__header el-table--border",staticStyle:{width:"100%"},attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[a("thead",[a("tr",[a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"3"}},[a("div",{staticClass:"cell"},[a("el-checkbox",{on:{change:t.allCheckedOdd},model:{value:t.allChecked,callback:function(e){t.allChecked=e},expression:"allChecked"}})],1)]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"3"}},[a("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["玩法名称"]||"玩法名称")}})]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",staticStyle:{padding:"0 20px"},attrs:{colspan:"1",rowspan:"3"}},[a("div",{staticClass:"cell",staticStyle:{"padding-top":"46px"},domProps:{textContent:t._s(t.LANG["当前赔率"]||"当前赔率")}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputone,expression:"inputone"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px",display:"block"},attrs:{type:"number",placeholder:"快调",min:"1"},domProps:{value:t.inputone},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.changeCol(e,"odds"):null},blur:function(e){return t.changeCol(e,"odds")},input:function(e){e.target.composing||(t.inputone=e.target.value)}}})]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",staticStyle:{padding:"0 20px"},attrs:{colspan:"1",rowspan:"3"}},[a("div",{staticClass:"cell",staticStyle:{"padding-top":"46px"},domProps:{textContent:t._s(t.LANG["0.001返奖"]||"0.001返奖")}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputsix,expression:"inputsix"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px",display:"block"},attrs:{type:"number",placeholder:"快调",min:"1"},domProps:{value:t.inputsix},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.changeCol(e,"per_odds"):null},blur:function(e){return t.changeCol(e,"per_odds")},input:function(e){e.target.composing||(t.inputsix=e.target.value)}}})]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"3"}},[a("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["最高赔率"]||"最高赔率")}})]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"1",rowspan:"3"}},[a("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["玩法开启"]||"玩法开启")}},[a("br"),t._v(" "),a("el-checkbox",{staticStyle:{"margin-top":"10px"},attrs:{checked:!!t.checksPlayOn},on:{change:function(e){return t.checkAllChange(e,"stateus")}},model:{value:t.checksPlayOn,callback:function(e){t.checksPlayOn=e},expression:"checksPlayOn"}})],1)]),t._v(" "),a("th",{staticClass:"el-table_1_column_36 is-leaf",attrs:{colspan:"4",rowspan:"1"}},[a("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["限额设置"]||"限额设置")}})])]),t._v(" "),a("tr",[a("th",{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["单注最小"]||"单注最小")}})]),t._v(" "),a("th",{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["单注最大"]||"单注最大")}})]),t._v(" "),a("th",{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["单项最大"]||"单项最大")}},[t._v(t._s())])]),t._v(" "),a("th",{staticClass:"el-table_1_column_37_column_38 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell",domProps:{textContent:t._s(t.LANG["单注最高派奖"]||"单注最高派奖")}})])]),t._v(" "),a("tr",[a("th",{staticClass:"el-table_1_column_37_column_39_column_40 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputtwo,expression:"inputtwo"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px",display:"block"},attrs:{type:"number",min:"2",placeholder:"快调"},domProps:{value:t.inputtwo},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.changeCol(e,"min_bet"):null},blur:function(e){return t.changeCol(e,"min_bet")},input:function(e){e.target.composing||(t.inputtwo=e.target.value)}}})])]),t._v(" "),a("th",{staticClass:"el-table_1_column_37_column_39_column_41 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputthree,expression:"inputthree"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px",display:"block"},attrs:{type:"number",placeholder:"快调"},domProps:{value:t.inputthree},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.changeCol(e,"one_bet"):null},blur:function(e){return t.changeCol(e,"one_bet")},input:function(e){e.target.composing||(t.inputthree=e.target.value)}}})])]),t._v(" "),a("th",{staticClass:"el-table_1_column_37_column_39_column_42 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputfour,expression:"inputfour"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px",display:"block"},attrs:{type:"number",placeholder:"快调"},domProps:{value:t.inputfour},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.changeCol(e,"one_term"):null},blur:function(e){return t.changeCol(e,"one_term")},input:function(e){e.target.composing||(t.inputfour=e.target.value)}}})])]),t._v(" "),a("th",{staticClass:"el-table_1_column_37_column_39_column_43 is-leaf",attrs:{colspan:"1",rowspan:"1"}},[a("div",{staticClass:"cell"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputfive,expression:"inputfive"}],staticClass:"el-input__inner el-input",staticStyle:{"margin-top":"10px",display:"block"},attrs:{type:"number",placeholder:"快调"},domProps:{value:t.inputfive},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.changeCol(e,"one_max_money"):null},blur:function(e){return t.changeCol(e,"one_max_money")},input:function(e){e.target.composing||(t.inputfive=e.target.value)}}})])])])]),t._v(" "),t._l(t.dataModel,function(e,n){return t.dataModel.length?a("tr",[a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[a("el-checkbox",{on:{change:function(a){return t.checkedOdd(n,e.checked)}},model:{value:e.checked,callback:function(a){t.$set(e,"checked",a)},expression:"item.checked"}})],1)]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[1===t.playTypeId?a("span",[t._v(t._s(e.odds_type)+" - "+t._s(e.result))]):a("span",[t._v(t._s(e.result))])])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._l(e.sub_odds,function(e,s){return a("div",{staticStyle:{clear:"both"}},[a("span",{staticClass:"sub"},[t._v(t._s(e?e.name:""))]),t._v(" "),a("span",{staticClass:"sub",on:{click:function(e){return t.changeInput(e,n,"zdpl")}}},[t._v(t._s(e?e.odds:""))]),t._v(" "),e?a("input",{directives:[{name:"model",rawName:"v-model",value:e.odds,expression:"sub.odds"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.odds},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.doEnter(n,"odds",s):null},blur:function(e){return t.doEnter(n,"odds",s)},input:function(a){a.target.composing||t.$set(e,"odds",a.target.value)}}}):t._e()])}),t._v(" "),e.sub_odds?t._e():a("span",{on:{click:function(e){return t.changeInput(e,n,"zdpl")}}},[t._v(t._s(e.odds))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.odds,expression:"item.odds"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.odds},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.doEnter(n,"odds"):null},blur:function(e){return t.doEnter(n,"odds")},input:function(a){a.target.composing||t.$set(e,"odds",a.target.value)}}})],2)]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._l(e.sub_odds,function(e,s){return a("div",{staticStyle:{clear:"both"}},[a("span",{staticClass:"sub"},[t._v(t._s(e?e.name:""))]),t._v(" "),a("span",{staticClass:"sub",on:{click:function(e){return t.changeInput(e,n,"fj")}}},[t._v(t._s(e?e.per_odds:""))]),t._v(" "),e?a("input",{directives:[{name:"model",rawName:"v-model",value:e.per_odds,expression:"sub.per_odds"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.per_odds},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.doEnter(n,"per_odds",s):null},blur:function(e){return t.doEnter(n,"per_odds",s)},input:function(a){a.target.composing||t.$set(e,"per_odds",a.target.value)}}}):t._e()])}),t._v(" "),e.sub_odds?t._e():a("span",{on:{click:function(e){return t.changeInput(e,n,"fj")}}},[t._v(t._s(e.per_odds))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.per_odds,expression:"item.per_odds"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.per_odds},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.doEnter(n,"per_odds"):null},blur:function(e){return t.doEnter(n,"per_odds")},input:function(a){a.target.composing||t.$set(e,"per_odds",a.target.value)}}})],2)]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[t._v(t._s(e.max_odds))])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[a("el-checkbox",{attrs:{"true-label":"enabled","false-label":"disabled"},model:{value:e.status,callback:function(a){t.$set(e,"status",a)},expression:"item.status"}})],1)]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[a("span",{on:{click:function(e){return t.changeInput(e,n,"dzzx")}}},[t._v(t._s(e.min_bet))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.min_bet,expression:"item.min_bet"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.min_bet},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.doEnter(n,"min_bet"):null},blur:function(e){return t.doEnter(n,"min_bet")},input:function(a){a.target.composing||t.$set(e,"min_bet",a.target.value)}}})])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[a("span",{on:{click:function(e){return t.changeInput(e,n,"dzzd")}}},[t._v(t._s(e.one_bet))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.one_bet,expression:"item.one_bet"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.one_bet},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.doEnter(n,"one_bet"):null},blur:function(e){return t.doEnter(n,"one_bet")},input:function(a){a.target.composing||t.$set(e,"one_bet",a.target.value)}}})])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[a("span",{on:{click:function(e){return t.changeInput(e,n,"dxzx")}}},[t._v(t._s(e.one_term))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.one_term,expression:"item.one_term"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.one_term},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.doEnter(n,"one_term"):null},blur:function(e){return t.doEnter(n,"one_term")},input:function(a){a.target.composing||t.$set(e,"one_term",a.target.value)}}})])]),t._v(" "),a("td",{staticClass:"el-table_1_column_19"},[a("div",{staticClass:"cell"},[a("span",{on:{click:function(e){return t.changeInput(e,n,"dxzgpj")}}},[t._v(t._s(e.one_max_money))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.one_max_money,expression:"item.one_max_money"}],staticClass:"el-input__inner",attrs:{type:"number"},domProps:{value:e.one_max_money},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.doEnter(n,"one_max_money"):null},blur:function(e){return t.doEnter(n,"one_max_money")},input:function(a){a.target.composing||t.$set(e,"one_max_money",a.target.value)}}})])])]):t._e()}),t._v(" "),0==t.dataModel.length?a("tr",{staticStyle:{"text-align":"center",height:"100px"}},[a("td",{attrs:{colspan:"8"}},[t._v("暂无数据")])]):t._e()],2),t._v(" "),t.dataModel.length>0?a("el-col",{staticClass:"toolbar mt20",staticStyle:{position:"relative"},attrs:{span:24}},[a("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":t.currentPage,"page-sizes":[10,50,100,200,500],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.doCurrentChange,"size-change":t.doSizePage}})],1):t._e()],1)},[],!1,l,"data-v-5892c86e",null).exports,changeplay:a(271).a},methods:{init(){this.lotteryTemplate=this.$route.query.name||"",this.lotteryTemplateId=this.$route.query.id||-1,this.baseUrl="",this.baseUrl=URL.api+ROUTES.GET.lottery.rate+"?tid="+this.lotteryTemplateId,this.getPlayType()},getPlayType(){let t=this;this.loading=!0;let e=URL.api+ROUTES.GET.lottery.types.play+"?tid="+this.lotteryTemplateId+"&lottery_type="+this.lotteryTypeId;this.$.autoAjax("get",e,"",{ok:e=>{if(0==e.state&&e.data){e.data&&e.data[0]&&e.data[0].sub&&e.data[0].sub[0]&&(t.nowPlayTypeId=e.data[0].sub[0].play_type1||-1,t.nowLotteryId=e.data[0].lottery_id||-1,t.nowLotteryTemplate=e.data[0].name||""),t.lotteryList=[];let a=e.data||[];for(let e in a)t.lotteryList.push({id:a[e].lottery_id,name:a[e].name,sub:a[e].sub});t.getPlayTypeList(0),t.tableUrl=t.baseUrl+"&lottery_type="+this.lotteryTypeId+"&lottery_id="+this.nowLotteryId+"&play_id="+this.nowPlayTypeId}t.loading=!1},p:()=>{},error:e=>{t.$message.error(LANG["未知错误，请稍后重试！"]||"未知错误，请稍后重试！"),t.loading=!1}})},getPlayTypeList(t){this.playTypeList=[],this.nowPlayTypeId=this.lotteryList[t].sub[0].play_type1||-1;let e=this.playTypeList,a=this.lotteryList[t].sub||[];for(let t in a)e.push({id:a[t].play_type1,name:a[t].play_type1_name})},changeGame(t,e){this.nowLotteryId=parseInt(t.id),this.getPlayTypeList(e),this.tableUrl=this.baseUrl+"&lottery_type="+this.lotteryTypeId+"&lottery_id="+this.nowLotteryId+"&play_id="+this.nowPlayTypeId},changePlayType(t){this.nowPlayTypeId=t.id||-1,this.tableUrl=this.baseUrl+"&lottery_type="+this.lotteryTypeId+"&lottery_id="+this.nowLotteryId+"&play_id="+this.nowPlayTypeId},doChangePlay(t){"fast"==t.item&&0===this.lotteryTypeId&&(this.lotteryTypeId=1,this.lotteryTypeName="快捷玩法",this.init()),"standard"==t.item&&1===this.lotteryTypeId&&(this.lotteryTypeId=0,this.lotteryTypeName="标准玩法",this.init())},saveOdds(t){console.log(t);let e=this;this.updated=!1;let a={};a.tid=this.lotteryTemplateId,a.tname=this.lotteryTemplate,a.lid=this.nowLotteryId,a.lottery_name=this.nowLotteryTemplate,a.odds=t.item,a.old_odds=t.old_odds;let n="";n=URL.api+ROUTES.PUT.lottery.rate,this.$.autoAjax("put",n,a,{ok:t=>{0==t.state&&t.data?(e.updated=!0,e.$message.success(LANG["恭喜您，赔率设置成功！"]||"恭喜您，赔率设置成功！")):t.msg?e.$message.error(t.msg):e.$message.error(LANG["赔率设置失败！"]||"赔率设置失败！")},p:()=>{},error:t=>{e.$message.error(LANG["未知错误，请稍后重试！"]||"未知错误，请稍后重试！")}})},goBlack(){window.history.go(-1)}},computed:{},mounted(){},created(){this.init()},watch:{$route:function(t){t.query.name&&this.init()}}};var o=function(t){a(458)},r=Object(s.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"clearfix",attrs:{id:"lotteryOdds"}},[a("el-row",{staticStyle:{"margin-bottom":"10px"}},[a("el-col",{attrs:{span:20}},[a("changeplay",{on:{"do-change-play":t.doChangePlay}})],1),t._v(" "),a("el-col",{staticClass:"tRight",attrs:{span:4}},[a("el-button",{attrs:{type:"primary",size:"small",icon:"arrow-left"},on:{click:t.goBlack}},[t._v("返 回")])],1)],1),t._v(" "),a("el-col",{staticStyle:{"text-align":"left","margin-bottom":"10px"},attrs:{span:24}},[a("span",[t._v(t._s(t.LANG["当前模板"]||"当前模板")+" => "+t._s(t.lotteryTemplate))])]),t._v(" "),a("el-col",{staticClass:"btngroup"},t._l(t.lotteryList,function(e,n){return a("el-button",{key:n,staticClass:"formCancel",class:{"el-button--primary":parseInt(e.id)==parseInt(t.nowLotteryId)},staticStyle:{"margin-bottom":"10px"},attrs:{size:"small"},on:{click:function(a){return t.changeGame(e,n)}}},[t._v(t._s(e.name)+"\n        ")])}),1),t._v(" "),a("el-col",t._l(t.playTypeList,function(e,n){return a("el-button",{key:n,staticClass:"formCancel",class:{"el-button--primary":parseInt(e.id)==parseInt(t.nowPlayTypeId)},staticStyle:{padding:"10px"},attrs:{type:"text"},on:{click:function(a){return t.changePlayType(e)}}},[t._v(t._s(e.name)+"\n        ")])}),1),t._v(" "),a("el-col",[a("oddsSet",{attrs:{tableUrl:t.tableUrl,columnsUrl:t.columnsUrl,playTypeId:t.lotteryTypeId,updated:t.updated},on:{"save-data":t.saveOdds}})],1)],1)},[],!1,o,"data-v-d247bc12",null);e.default=r.exports},271:function(t,e,a){"use strict";var n={data:()=>({LANG:LANG,standardActive:"primary",quickActive:""}),props:{active:{type:String,default:"standard"}},methods:{init(){},doChangePlay(t){"standard"==t?(this.standardActive="primary",this.quickActive="",this.$emit("do-change-play",{item:"standard"})):(this.standardActive="",this.quickActive="primary",this.$emit("do-change-play",{item:"fast"}))}},watch:{active:function(t){t&&this.doChangePlay(t)}}},s=a(10),l=Object(s.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"typeBtn"},[a("el-button",{attrs:{type:t.standardActive,size:"small"},domProps:{textContent:t._s(t.LANG["官方玩法"]||"官方玩法")},on:{click:function(e){return t.doChangePlay("standard")}}}),t._v(" "),a("el-button",{attrs:{type:t.quickActive,size:"small"},domProps:{textContent:t._s(t.LANG["信用玩法"]||"信用玩法")},on:{click:function(e){return t.doChangePlay("fast")}}})],1)},[],!1,null,null,null);e.a=l.exports},458:function(t,e,a){},459:function(t,e,a){}}]);