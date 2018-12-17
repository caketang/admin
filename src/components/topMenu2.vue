<template>
    <div id="topMenu" class="top_menu">
        <div class="top_menu_parent w100">
            <ul :default-active="$route.path" class="top_menu_parent_ul w100">
                <li class="fl tCent" v-for="(item,index) in URLROUTERS" v-if="!item.hidden && ((item.action && item.action.length>0)  || item.name === '快捷') ">
                    <!-- && verify[index-4].type -->
                    <a href="javascript:;" class="cl" v-if="item.name != '首 页'"><i :class="item.iconCls"></i>{{LANG[item.name] || item.name}}</a>
                </li>
            </ul>
        </div>
        <div class="top_menu_child cl" :default-active="$route.path">
            <div class="top_menu_child_box" v-for="items in URLROUTERS" v-if="!items.hidden && ((items.action && items.action.length>0)  || items.name === '快捷') ">
                <ul style="z-index: 3000">
                    <li v-for="item in items.children" class=" tCent top_menu_child_li font14" v-if="!item.hidden && item.action && item.action.length>0">
                        <router-link :to="item.path" v-if="!item.hidden">{{LANG[item.name] || item.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                URLROUTERS,
                LANG,
                QUICKMENU: this.$router.options.routes
            }
        },
        props: {
            menu: Boolean,
        },
        components: {},
        methods: {
            init() {
                //中由传参
                this.seachData = this.$route.query;
                this.initQuickMenu();
            },
            // 初始化快捷菜单
            initQuickMenu(){
                QUICKMENU = this.$router.options.routes;
                QUICKMENU[5].children =[];
                QUICKCD = {};
                let qkMenu = localStorage.quickmenu && JSON.parse(localStorage.quickmenu) || {};
                for(let k in qkMenu){
                    QUICKMENU[5].children.push(qkMenu[k]);
                    QUICKCD[qkMenu[k].path] = qkMenu[k]
                    qkNumber ++;
                }
            }
        },
        computed: {
            url(){
                return this.$router.options.routes
            },
        },
        mounted() {
            $(function () {
                let top_menu_parent_li = $('.top_menu_parent ul li');
                let top_menu_child_box = $('.top_menu_child .top_menu_child_box');
                let  oItm = $('.top_menu_child  > .top_menu_child_box ul  li').find('a');
                let oLi = $('.top_menu_parent_ul li').eq($(this).parents('.top_menu_child_box').index());
                //hover
                top_menu_parent_li.hover(function(){
                    top_menu_child_box.eq($(this).index()).show(100).siblings().hide();
                    $('.top_menu_child').css({left:200+($(this).index())*80});
                },function () {
                    $('.top_menu_child ul').mouseleave(function(){
                        $('.top_menu_child_box').hide();
                    })
                })
                //子菜单 选中效果
                oItm.each(function () {
                    $(this).is('.router-link-active') ? $('.top_menu_parent_ul > li').eq($(this).parents('.top_menu_child_box').index()).addClass('bgStyle').find('a').addClass('fontStyle'):oLi.removeClass('bgStyle');
                });
                //点击选中
                $('.top_menu_child_box li').click(function () {
                    let oNan = $(this).parents('.top_menu_child_box').index();
                    let oNav = $('.top_menu_parent_ul li').eq(oNan);
                    oNav.addClass('bgStyle').siblings().removeClass('bgStyle');
                    oNav.find('a').addClass('fontStyle');
                    oNav.siblings().find('a').removeClass('fontStyle');
                })

            });
        },
        created() {
            this.init();
        },
    }
</script>
<style lang="less" scoped>
    #topMenu {
        height:40px;
        .top_menu_parent {
            .top_menu_parent_ul {
                li{width: 80px;
                    a{display: block;}
                }
            }
        }
        .top_menu_child{
            width: 120px;
            position: relative;
            transform: rotateY(0deg);
            z-index: 15;
            visibility: visible;
            .top_menu_child_box{
                display:none;
                width: 120px;
                position: relative;
                ul li{
                   a{display: block;}
                }
            }
        }
    }
</style>