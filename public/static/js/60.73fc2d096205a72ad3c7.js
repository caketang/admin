(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{147:function(t,i,a){"use strict";a.r(i);var e={data:()=>({LANG:LANG,windowsOpen:"0",addModeList:[],imgList:[{label:"每日签到",imgUrl:"static/img/activity/active_11.png",id:"1"},{label:"验证邮箱",imgUrl:"static/img/activity/active_22.png",id:"2"},{label:"手机验证",imgUrl:"static/img/activity/active_33.png",id:"3"},{label:"每日抽奖",imgUrl:"static/img/activity/active_44.png",id:"4"},{label:"救援金",imgUrl:"static/img/activity/active_55.png",id:"5"},{label:"擂台赛",imgUrl:"static/img/activity/active_66.png",id:"6"},{label:"奖上奖",imgUrl:"static/img/activity/active_77.png",id:"7"},{label:"连续闯关",imgUrl:"static/img/activity/active_88.png",id:"8"},{label:"存款优惠",imgUrl:"static/img/activity/active_99.png",id:"9"},{label:"注册优惠",imgUrl:"static/img/activity/active_00.png",id:"0"}]}),components:{},methods:{init(){let t=URL.api+ROUTES.GET.template.tempList;this.$.autoAjax("get",t,"",{ok:t=>{let i=t.data;for(let t in i)this.addModeList.push({id:i[t].id,label:i[t].name,details:i[t].description,imgUrl:"static/img/activity/active_"+i[t].id+i[t].id+".png",fn:"tempBtn"+i[t].id})},p:()=>{},error:t=>{console.log(t)}})},tempBtn(t,i){this.$router.push({path:`activeMode_${t}`,query:{label:i,template_id:t,type:"add"}})},doClick(t){this.tempBtn(t.id,t.label)},docancel(){this.$router.push({path:"/activeSet"})},doBack(t){this.windowsOpen=t}},computed:{},mounted(){},created(){this.init()}},l=a(10);var s=function(t){a(431)},c=Object(l.a)(e,function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"addActiveSet"}},[a("div",["0"==t.windowsOpen?a("el-button",{staticClass:"ml20",attrs:{type:"primary"},domProps:{textContent:t._s(t.LANG["取消创建活动"]||"取消创建活动")},on:{click:t.docancel}}):t._e()],1),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("div",[a("el-col",{attrs:{span:24}},t._l(t.addModeList,function(i){return a("el-col",{key:i.id,staticClass:"mt20 activeCent"},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("div",{staticClass:"cardHeader"},[a("div",{staticClass:"w30 fl mt20",staticStyle:{"margin-left":"10%"}},[a("img",{attrs:{src:i.imgUrl,alt:"优惠活动图片",title:"点击下方按钮可创建新活动"}})]),t._v(" "),a("div",{staticClass:"w60 fl mt20"},[a("h3",[t._v(t._s(i.label))]),t._v(" "),a("p",[t._v(t._s(i.details))])])]),t._v(" "),a("div",{staticClass:"cl",staticStyle:{padding:"14px"}},[a("div",{staticClass:"bottom clearfix tCent"},[a("el-button",{attrs:{plain:!0,type:"primary",size:"small"},on:{click:function(a){return t.doClick(i)}}},[a("i",[t._v(" + ")]),a("span",{domProps:{textContent:t._s(t.LANG["创建活动"]||"创建活动")}})])],1)])]),t._v(" "),"1"==i.id||"2"==i.id||"3"==i.id||"4"==i.id||"6"==i.id||"5"==i.id||"7"==i.id||"8"==i.id?a("div",{staticClass:"mask"},[t._v("\n                        敬请期待\n                    ")]):t._e()],1)}),1)],1)])],1)},[],!1,s,"data-v-7f1c1d7e",null);i.default=c.exports},431:function(t,i,a){}}]);