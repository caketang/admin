(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{196:function(e,t,s){"use strict";s.r(t);var a=s(272),i=s(202),l={data:()=>({LANG:LANG,columnsUrl:"",baseUrl:"",tableUrl:"",checkList:[],gameList:[],searchConfig:[{type:"quickDate",showTimes:!0},{type:"dateTimeGroup",label:"报表日期",showTime:!1,prop:[{prop:"date_from",value:"",label:"开始时间"},{prop:"date_to",value:"",label:"结束时间"}]},{prop:"type",value:"user",label:"账号体系",type:"select",list:[{label:"会员",value:"user"}],rules:[{require:!0}]},{prop:"user_name",value:"",type:"text",label:"用户名"},{prop:"gamelist",value:[],label:"游戏",sReset:!1,checkAll:!0,allBtnShow:!0,type:"checkGroup",list:[],Arr:[]}],type:"search",labelWidth:"120px",formVisible:{state:!1},isEdit:{state:!1},updated:!1,formType:"",flag:"0",levelList:[],levelListInit:[],dateObj:{date_from:"",date_to:"",type:"user",user_name:""},updateKeys:"",loading:!1}),components:{formEdit:s(203).a,edittable:a.a,tableGrid:i.a},methods:{init(){this.loading=!0,this.updateKeys="",this.columnsUrl="static/json/statement/gameStatement/columns.json";let e=URL.api+"/games";this.$.autoAjax("get",e,"",{ok:e=>{this.checkList.splice(0,this.checkList.length),this.levelListInit.splice(0,this.levelListInit.length),this.levelList.splice(0,this.levelList.length),this.searchConfig[4].list=[],this.searchConfig[4].Arr=[],this.dateObj.date_from=sessionStorage.dateTimeStart,this.dateObj.date_to=sessionStorage.dateTimeEnd;let t=e.data;if(t.length>0)for(let e in t)this.searchConfig[4].Arr.push({value:t[e].game_id,label:t[e].game_name,game_type:t[e].game_type}),this.searchConfig[4].list.push(t[e].game_name),this.checkList.push(t[e].game_name);let s=this.addCheckGame(this.checkList);this.baseUrl=URL.api+ROUTES.GET.state.game,this.$route.query&&this.$route.query.type?(this.dateObj.date_from=this.$route.query.date_from,this.dateObj.date_to=this.$route.query.date_to,this.dateObj.type=this.$route.query.type,this.dateObj.user_name=this.$route.query.user_name,this.columnsUrl="static/json/statement/gameStatement/columns2.json",this.updateKeys="date_from,"+this.dateObj.date_from+",date_to,"+this.dateObj.date_to+",type,"+this.dateObj.type+",user_name,"+this.dateObj.user_name,this.tableUrl=this.baseUrl+"?flag=0&type="+this.dateObj.type+"&games="+JSON.stringify(s)+"&date_from="+this.dateObj.date_from+"&date_to="+this.dateObj.date_to+"&user_name="+this.dateObj.user_name):(this.updateKeys="type,user,gamelist,"+JSON.stringify(this.searchConfig[4].list),this.tableUrl=this.baseUrl+"?flag=0&type=user&games="+JSON.stringify(s)+"&date_from="+sessionStorage.dateTimeStart+"&date_to="+sessionStorage.dateTimeEnd),this.loading=!1,this.levelList.push({name:"游戏报表",url:this.tableUrl,type:"user",username:"",querygames:this.searchConfig[4].list.toString()})},p:()=>{},error:e=>{this.loading=!1}})},setFormArray(e,t){t[e]&&(t[e]=[],this.checkList.forEach(s=>{t[e].push(s)}))},addCheckGame(e){this.levelListInit.splice(0,this.levelListInit.length);let t=[],s=this.levelListInit;for(let a in e){s.push(e[a]);for(let s in this.searchConfig[4].Arr)this.searchConfig[4].Arr[s].label===e[a]&&t.push({game_id:this.searchConfig[4].Arr[s].value,game_type:this.searchConfig[4].Arr[s].game_type})}return this.gameList=t,t},doHandle(e){switch(this.updateKeys="",this.nowId=e.row.id||-1,e.fn){case"openUser":this.openUser(e.row);break;case"openGameClass":this.openGameClass(e.row)}},updateGames(e){this.checkList.splice(0,this.checkList.length),e.forEach(e=>{this.checkList.push(e)}),setTimeout(()=>{this.updateKeys="gamelist,"+JSON.stringify(this.checkList)},500)},openGameClass(e){this.flag=e.flag||"0";let t=e.type||"user",s=[];s.push(e.game_name),this.updateGames(s);let a=this.addCheckGame(this.checkList),i="";this.dateObj.date_from&&(i="&date_from="+this.dateObj.date_from),this.dateObj.date_to&&(i=i+"&date_to="+this.dateObj.date_to),this.updateKeys="",this.tableUrl=i?this.baseUrl+"?type="+t+"&flag="+this.flag+"&games="+JSON.stringify(a)+i:this.baseUrl+"?type="+t+"&flag="+this.flag+"&games="+JSON.stringify(a),this.columnsUrl="static/json/statement/gameStatement/columns2.json",this.levelList.push({name:e.game_name,url:this.tableUrl,type:"",username:this.levelList[0].username,querygames:s.toString()})},openUser(e){this.flag=e.flag||"0";let t=e.type,s=e.user_name||"",a=[];a.push(e.game_name),this.updateGames(a);this.addCheckGame(this.checkList);if("user"===e.type)this.$router.push({path:"/noteManagement",query:{user_name:e.user_name,game_name:e.game_name,game_type:e.game_type,start_time:this.dateObj.date_from,end_time:this.dateObj.date_to,isopen:1}});else{let i="",l=this.addCheckGame(this.checkList);this.dateObj.date_from&&(i="&date_from="+this.dateObj.date_from),this.dateObj.date_to&&(i=i+"&date_to="+this.dateObj.date_to),this.tableUrl=i?this.baseUrl+"?type="+t+"&flag="+this.flag+"&user_name="+s+"&games="+JSON.stringify(l)+i:this.baseUrl+"?type="+t+"&flag="+this.flag+"&user_name="+s+"&games="+JSON.stringify(l),this.levelList.push({name:e.user_name,url:this.tableUrl,type:e.type,username:this.levelList[0].username,querygames:a.toString()})}},doQuery(e){this.dateObj.date_from=e.item.date_from,this.dateObj.date_to=e.item.date_to,this.dateObj.type=e.item.type,this.dateObj.user_name=e.item.user_name,this.checkList=e.item.gamelist,e.item.user_name?this.columnsUrl="static/json/statement/gameStatement/columns2.json":this.columnsUrl="static/json/statement/gameStatement/columns.json";let t=this.addCheckGame(e.item.gamelist);this.tableUrl=this.baseUrl+this.addSearch(e.item)+"&flag=0&games="+JSON.stringify(t),this.levelList.splice(0,this.levelList.length),this.levelList.push({name:"游戏报表",url:this.tableUrl,type:e.item.type,username:e.item.user_name,querygames:e.item.gamelist.toString()})},resetform(){this.init()},doChangeClass(e,t){console.log(e),"游戏报表"!=e.name?(this.columnsUrl="static/json/statement/gameStatement/columns2.json",this.levelList.splice(t+1,this.levelList.length-1),this.tableUrl=e.url):(this.levelList.splice(t+1,this.levelList.length-1),this.columnsUrl="static/json/statement/gameStatement/columns.json",this.tableUrl=e.url),e.querygames&&this.updateGames(e.querygames.split(","))}},created(){},activated(){this.init()}},r=s(10);var n=function(e){s(527)},o=Object(r.a)(l,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{id:"gameStatement"}},[s("formEdit",{attrs:{formVisible:e.formVisible,formConfig:e.searchConfig,type:e.type,isEdit:e.isEdit,labelWidth:e.labelWidth,showAdd:!1,formType:e.formType,updateKeys:e.updateKeys},on:{"do-query":e.doQuery,"reset-form":e.resetform}}),e._v(" "),s("el-col",e._l(e.levelList,function(t,a){return s("span",{key:a},[s("el-button",{attrs:{type:"text"},on:{click:function(s){return e.doChangeClass(t,a)}}},[e._v(e._s(t.name))]),e._v(" "),a!==e.levelList.length-1?s("span",[e._v(" / ")]):e._e()],1)}),0),e._v(" "),s("el-col",{attrs:{span:24}},[s("tableGrid",{attrs:{columnsUrl:e.columnsUrl,tableUrl:e.tableUrl,updated:e.updated,sumGame:!0},on:{"do-handle":e.doHandle}})],1)],1)},[],!1,n,null,null);t.default=o.exports},267:function(e,t,s){},272:function(e,t,s){"use strict";var a=s(0);a.default.filter("formatCheck",function(e){return"1"==e}),a.default.filter("formatDate",function(e,t){let s=new Date(e),a=function(e){return(e<10?"0":"")+e};return t.replace(/yyyy|MM|dd|HH|mm|ss/g,function(e){switch(e){case"yyyy":return a(s.getFullYear());case"MM":return a(s.getMonth()+1);case"mm":return a(s.getMinutes());case"dd":return a(s.getDate());case"HH":return a(s.getHours());case"ss":return a(s.getSeconds())}})});var i={data:()=>({bodyModel:[],columnsModel:[],dialogVisible:!1,switchIndex:[],inputVal:-1}),props:{columnsUrl:{type:String,default:""},bodyModelUrl:{type:String,default:""},updateModelUrl:{type:String,default:""},getData:{type:Boolean,default:!1}},methods:{init(){if(this.columnsModel.splice(0,this.columnsModel.length),""!=this.columnsUrl&&null!=this.columnsUrl){let e=this.columnsUrl,t=this.columnsModel,s=this;this.$http.get(e,URLCONFIG).then(e=>{let a=e.data.columns;if(a.length>0)for(let e in a)"switch"==a[e].type&&s.switchIndex.push(a[e].prop),t.push(a[e])}).catch(e=>{})}if(this.bodyModel.splice(0,this.bodyModel.length),""!=this.bodyModelUrl&&null!=this.bodyModelUrl){let e=this.bodyModelUrl,t=this.bodyModel,s=this,a=this.switchIndex;this.$http.get(e,URLCONFIG).then(e=>{let i=e.data.data,l=e.data.data.list;if(i.length>0)for(let e in i){for(let t in a)i[e][a[t]]?i[e][a[t]]=!0:i[e][a[t]]=!1;t.push(i[e])}else if(l.length)for(let e in l){for(let t in a)l[e][a[t]]?l[e][a[t]]=!0:l[e][a[t]]=!1;t.push(l[e])}s.getData&&s.$emit("get-table-data",{event:event,item:s.bodyModel,allData:i})}).catch(e=>{})}},showDialog(e,t,s,a,i){let l=this.bodyModel,r=(a.id,this);if(null!=this.updateModelUrl&&this.updateModelUrl,20==s){l[e][t]="number"==i?this.inputVal:this.updateVal(s);var n=r._("修改失败");r.$message.success(n)}else{n=r._("修改成功");r.$message.success(n)}},updateVal(e){switch(e){case 1:return 0;case 0:return 1;case!0:return!1;case!1:return!0}},saveInputVal(e){this.inputVal=e},doSave(){this.$emit("save-data",{item:this.bodyModel})},foo:()=>!0,doHandle(e,t){this.$emit("do-handle",{event:event,row:e,fn:t})}},created:function(){this.init()},watch:{bodyModelUrl:function(e){this.init()}}},l=s(10);var r=function(e){s(267)},n=Object(l.a)(i,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"editTable",attrs:{id:"editTable"}},[s("el-row",{attrs:{gutter:20}},[s("el-col",{staticClass:"mt10",attrs:{span:24}},[s("table",{staticClass:"el-table el-table__header w100",attrs:{cellspacing:"0",cellpadding:"0",border:"1"}},[s("tr",e._l(e.columnsModel,function(t,a){return s("th",{staticClass:"is-leaf",attrs:{colspan:"1",rowspan:"1"}},[s("div",{staticClass:"cell"},[e._v(e._s(t.label))])])}),0),e._v(" "),e._l(e.bodyModel,function(t,a){return s("tr",e._l(e.columnsModel,function(i,l){return s("td",{staticClass:"el-table_1_column_19"},["date"==i.type?s("div",{staticClass:"cell"},[s("span",[e._v(e._s(e._f("formatDate")(t[i.prop],"yyyy-MM-dd HH:mm:ss")))])]):e._e(),e._v(" "),"divisionMoney"==i.type?s("div",{staticClass:"cell"},[s("span",[e._v(e._s(e._f("formatMoney")(t[i.prop])))])]):e._e(),e._v(" "),i.type?e._e():s("div",{staticClass:"cell"},[s("span",[e._v(e._s(t[i.prop]))])]),e._v(" "),"linkDivisionMoney"==i.type?s("div",{staticClass:"cell",class:{tCent:null!=i.class}},[t[i.prop]?s("el-button",{attrs:{size:"small",type:"text"},on:{click:function(s){return e.doHandle(t,i.fn)}}},[s("el-tag",{staticClass:"linkCell",attrs:{type:"primary"}},[e._v(e._s(e._f("formatMoney")(t[i.prop])))])],1):e._e(),e._v(" "),t[i.prop]?e._e():s("span",[e._v(e._s(t[i.prop]))])],1):e._e(),e._v(" "),"checkbox"==i.type?s("div",{staticClass:"cell",on:{click:function(s){return e.showDialog(a,i.prop,t[i.prop],t)}}},[s("el-checkbox",{attrs:{"true-label":1,checked:e._f("formatCheck")(t[i.prop])},model:{value:t[i.prop],callback:function(s){e.$set(t,i.prop,s)},expression:"item[col.prop]"}})],1):e._e(),e._v(" "),"number"==i.type?s("div",{staticClass:"cell"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t[i.prop],expression:"item[col.prop]"}],staticClass:"el-input__inner",attrs:{type:"number",min:"1"},domProps:{value:t[i.prop]},on:{keyup:function(s){return s.type.indexOf("key")||13===s.keyCode?e.showDialog(a,i.prop,t[i.prop],t,"number"):null},blur:function(s){return e.showDialog(a,i.prop,t[i.prop],t,"number")},focus:function(s){return e.saveInputVal(t[i.prop])},input:function(s){s.target.composing||e.$set(t,i.prop,s.target.value)}}})]):e._e(),e._v(" "),"switch"==i.type?s("div",{staticClass:"cell",on:{click:function(s){return e.showDialog(a,i.prop,t[i.prop],t)}}},[s("el-switch",{model:{value:t[i.prop],callback:function(s){e.$set(t,i.prop,s)},expression:"item[col.prop]"}})],1):e._e()])}),0)})],2)])],1)],1)},[],!1,r,"data-v-cb36b58e",null);t.a=n.exports},527:function(e,t,s){}}]);