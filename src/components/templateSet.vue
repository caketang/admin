<template>
    <div>
        <!--头部-->
        <div id="switcher">
            <div class="center">
                <ul>
                    <div id="Device">
                        <li class="device-monitor" >
                            <a href="javascript:">
                                 <div class="icon-monitor" @click="deviceClick('pc')"></div>
                            </a>
                        </li>
                        <li class="device-mobile-2" >
                            <a href="javascript:" >
                                <div class="icon-mobile-2" @click="deviceClick('mobile')"></div>
                            </a>
                        </li>
                    </div>
                    <li class="top2" id="sj"><a href="#">手机二维码预览</a><div class="vm" ><div id="output"></div><p style="color:#808080">扫一扫，直接在手机上打开</p></div></li>
                    <!--输出当前地址二维码-->
                    </li>

                </ul>
            </div>
        </div>

        <div id="iframe-wrap" v-if="equipment == 'mobile'">
            <div class="components">
                <div class="item item1" v-for="(item,index) in model" >
                    <div>{{item.label}}</div>
                </div>
            </div>

            <!--手机部分-->
            <div class="mobile-width-2">
                <div style="position: relative;"><div>1</div>
                    <a href="javascript:;" class="closemodel">×</a>
                </div>
                <div v-for="item in modelList" v-html="item" class="mobil_model" @mouseover.stop="doHover($event)" @mouseout.stop="doMouseout($event)"></div>
            </div>
            <!--页面列表-->
            <div class="example">
                <div class="pageList">
                    <p ><h1 style="font-size: 25px;background-color: #1faeff;color:#fff">页面列表</h1></p>
                    <div style="line-height: 50px;border-bottom: 1px solid #ccc">首页</div>
                    <div style="line-height: 50px;border-bottom: 1px solid #ccc">个人中心</div>
                </div>
            </div>
        </div>
        <div id="iframe-pc" v-if="equipment == 'pc'"></div>
    </div>
</template>
<script>
import '../../assets/jquery.dad.js'
import '../../assets/jquery.qrcode.min.js'
import Vue from 'vue'

    export default{
        data(){
            return{
                modelList:[],
                equipment:"mobile"
            }
        },
        props:{
            componentsList:Array,
            componentsListUrl:String
        },
        methods:{
            //系统初始化
            init(){

            },
            //选择设备
            deviceClick(device){
//                console.log(device)
            },
            //模板鼠标经过事件
            doHover(e){
                let event= window.event|| e ;
                event.target.setAttribute('class','active')
                event.target.childNodes[event.target.childNodes.length-1].style.display="block"
            },
            //模板鼠标移出事件
            doMouseout(e){
                window.event|| e ;
                event.target.setAttribute('class','')
                event.target.childNodes[event.target.childNodes.length-1].style.display="none"
            }
        },
        computed:{
            model:function () {
                let componentsList=this.componentsList
                let modList=[]
                for(var i in componentsList){
                    if(componentsList[i].display === true){
                        modList.push(componentsList[i])
                    }
                }
                return modList
            }
        },
        mounted(){
            var _this=this;
                $('.components').dad()
                var d = $('.components').dad()
                var target = $('.mobile-width-2')

                d.addDropzone(target, function(e){
                    let componentsList=_this.componentsList
                    let nowI=e[0].children[0].innerHTML
                    let modelList=_this.modelList
                    let str=`<a href="javascript:;" class="closemodel">×</a>`
                    for(let i in componentsList){
                        if(componentsList[i].label == nowI){
                            componentsList[i].display=false
                            let dom=componentsList[i].text
                            dom=dom.substring(0,dom.length-6)+str+"</div>"
                            modelList.push(dom)
                            break
                        }
                    }
                    $('.mobile-width-2').dad()
                })

            $('#output').qrcode({width:150,height: 150,text: window.location.href})
//
//            $(function () {
//                function fixHeight() {
//                    var headerHeight = $("#switcher").height();
//                    $("#iframe").attr("height", $(window).height()-headerHeight+ "px");
//                }
//                $(window).resize(function () {
//                    fixHeight();
//                }).resize();
//
//                $('.icon-mobile-2').addClass('active')
//
//                $(".icon-mobile-2").click(function () {
//                    $("#by").css("overflow-y", "auto")
//                    $('#iframe-wrap').removeClass().addClass('mobile-width-2')
//                    $('.icon-monitor,.icon-mobile-2').removeClass('active')
//                    $(this).addClass('active')
//                    return false;
//                });
//
//                $(".icon-monitor").click(function () {
//                    $("#by").css("overflow-y", "hidden")
//                    $('#iframe-wrap').removeClass().addClass('full-width')
//                    $('.icon-monitor,.icon-mobile-2').removeClass('active')
//                    $(this).addClass('active')
//                    return false;
//                })
//            })
        },
        created(){
            this.init()
        }
    }
</script>
<style>
    @import "../../assets/css/demo.css";
    body{-moz-user-select:none;
        -webkit-user-select: none;
        -ms-user-select: none;}
    .components{
        width:300px;
        margin-top: 54px;
        margin-left:100px;
        float: left;
    }
    .example{
        float: left;
    }
    .item { display: inline-block; width: 100px; height: 100px; margin: 0 20px 20px 0; }
    .item div { display: block; height: 100px; line-height: 100px; font-size: 2rem; text-align: center; color: #fff; }
    .item1 { background-color: #1faeff;}
    .item2 { background-color: #ff2e12;}
    .item3 { background-color: #00c13f;}
    .item4 { background-color: #e1b700;}
    .mobile-width-2{float: left;}
    .mobile-width-2 div{width:100%; height:30px;background-color: #a6e1ec;margin-bottom: 5px;}
    .pageList{width:400px;padding:10px;margin-top:60px;margin-left: 50px;}
    .mobil_model{position: relative}
    .active{border: 1px solid #ff8040;box-sizing: border-box;}
    .closemodel{position:absolute;top:0;right:0;display: none; width:20px;height:20px;border-radius:0px 0px 0px 20px;background: #ff8040;text-align:center;color:#fff;margin:0 auto;}
</style>
