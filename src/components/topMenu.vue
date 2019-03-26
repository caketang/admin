<template>
    <div id="topMenu" class="top_menu container">
        <ul class="menu" :default-active="$route.path">
            <li class="active active_top_menu" v-for="(item,index) in URLROUTERS"
                v-if="!item.hidden && ((item.action && item.action.length>0)  || item.name === '快捷') ">
                <a href="javascript:;" v-if="item.name != '首 页'" class="font16 parentMenu topNavTitle"><i
                        :class="item.iconCls"></i>{{LANG[item.name] || item.name}}</a>
                <ul class="submenu"
                    v-if="!item.hidden && ((item.action && item.action.length>0)  || item.name === '快捷') ">
                    <li v-for="item in item.children" v-if="!item.hidden && item.action && item.action.length>0"
                        class="tCent childMenu">
                        <router-link :to="item.path" v-if="!item.hidden" class="font14 topNavTitle">
                            {{LANG[item.name] || item.name}}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                URLROUTERS,
                LANG,
                QUICKMENU: this.$router.options.routes,

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
            initQuickMenu() {
                QUICKMENU = this.$router.options.routes;
                let myquick = QUICKMENU[5].children = [];
                QUICKCD = {};
                let qkMenu = localStorage.quickmenu && JSON.parse(localStorage.quickmenu) || {}
                for (let i = 6; i < QUICKMENU.length; i++) {
                    if (QUICKMENU[i].children && QUICKMENU[i].children.length && QUICKMENU[i].action && QUICKMENU[i].action.length) {
                        for (let n = 0; n < QUICKMENU[i].children.length; n++) {
                            let temp = QUICKMENU[i].children[n];
                            for (let k in qkMenu) {
                                if (temp && qkMenu[k].path === temp.path && temp.action && temp.action.length > 0) {
                                    myquick.push(qkMenu[k]);
                                    QUICKCD[qkMenu[k].path] = qkMenu[k]
                                    qkNumber++;
                                }
                            }
                        }
                    }
                }
            },
            hoverNav(){
            }
        },
        computed: {
            url() {
                return this.$router.options.routes
            },
        },
        mounted() {
            $(function () {
                $('#topMenu .menu>li').children('a').hover(function(){
                    $(this).parent('.active_top_menu').find('.submenu >li').show().css({
                        "z-index":"1999",
                        "opacity": "1",
                        "-webkit-transform": "none",
                        "-moz-transform": "none",
                        "-ms-transform": "none",
                        "-o-transform": "none",
                        "transform": "none"
                    });
                });
                $('#topMenu .menu>li').mouseleave(function(){
                    $('.submenu >li').css({
                        "z-index":"0",
                        "opacity": "0",
                        "-webkit-transform": "rotateY(90deg)",
                        "-moz-transform": "rotateY(90deg)",
                        "-ms-transform": "rotateY(90deg)",
                        "-o-transform": "rotateY(90deg)",
                        "transform": "rotateY(90deg)"
                    }).hide();
                });
            })

        },
        created() {
            this.init();
        },
    }
</script>
<style lang="less">
    #topMenu {
        .menu {
            height: 30px;
            min-width: 1000px;
            line-height: 40px;
            z-index: 999;
        }
        .menu > li {
            display: block;
            float: left;
            /*width: 6%;*/
            text-align: center;
            width: 6%;
            /*min-width: 80px;*/
            max-width: 150px;
            position: relative;
        }
        .menu > li > a {
            display: block;
            width: 100%;
            height: 100%;
            border: none;
            line-height: 39px;
            /*padding: 0 15px;*/
            width: 100%;
        }
        .menu > li .topNavTitle {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .submenu {
            /*display: none;*/
            left: 0;
            position: absolute;
            top: 100%;
            -webkit-perspective: 400px;
            -moz-perspective: 400px;
            -ms-perspective: 400px;
            -o-perspective: 400px;
            perspective: 400px;
        }

        .submenu > li {
            /*display: none;*/
            opacity: 0;
            width: 130px;
            line-height: 40px;
            -webkit-transform: rotateY(90deg);
            -moz-transform: rotateY(90deg);
            -ms-transform: rotateY(90deg);
            -o-transform: rotateY(90deg);
            transform: rotateY(90deg);
            -webkit-transition: opacity .4s, -webkit-transform .5s;
            -moz-transition: opacity .4s, -moz-transform .5s;
            -ms-transition: opacity .4s, -ms-transform .5s;
            -o-transition: opacity .4s, -o-transform .5s;
            transition: opacity .4s, transform .5s;

        }
        .submenu > li > a {
            display: block;
        }
        .menu > li:hover .submenu, .menu > li:focus .submenu {
            max-height: 1000px;
            z-index: 0;
        }
       .menu > li:focus .submenu li {
            /*display: inherit;*/
            opacity: 1;
            -webkit-transform: none;
            -moz-transform: none;
            -ms-transform: none;
            -o-transform: none;
            transform: none;
        }

        .menu > li:hover .submenu > li:nth-child(1) {
            -webkit-transition-delay: 0s;
            -moz-transition-delay: 0s;
            -ms-transition-delay: 0s;
            -o-transition-delay: 0s;
            transition-delay: 0s;
        }

        .menu > li:hover .submenu li:nth-child(2) {
            -webkit-transition-delay: 20ms;
            -moz-transition-delay: 20ms;
            -ms-transition-delay: 20ms;
            -o-transition-delay: 20ms;
            transition-delay: 20ms;
        }

        .menu > li:hover .submenu li:nth-child(3) {
            -webkit-transition-delay: 40ms;
            -moz-transition-delay: 40ms;
            -ms-transition-delay: 40ms;
            -o-transition-delay: 40ms;
            transition-delay: 40ms;
        }

        .menu > li:hover .submenu li:nth-child(4) {
            -webkit-transition-delay: 60ms;
            -moz-transition-delay: 60ms;
            -ms-transition-delay: 60ms;
            -o-transition-delay: 60ms;
            transition-delay: 60ms;
        }

        .menu > li:hover .submenu li:nth-child(5) {
            -webkit-transition-delay: 80ms;
            -moz-transition-delay: 80ms;
            -ms-transition-delay: 80ms;
            -o-transition-delay: 80ms;
            transition-delay: 80ms;
        }

        .menu > li:hover .submenu li:nth-child(6) {
            -webkit-transition-delay: 100ms;
            -moz-transition-delay: 100ms;
            -ms-transition-delay: 100ms;
            -o-transition-delay: 100ms;
            transition-delay: 100ms;
        }

        .menu > li:hover .submenu li:nth-child(7) {
            -webkit-transition-delay: 120ms;
            -moz-transition-delay: 120ms;
            -ms-transition-delay: 120ms;
            -o-transition-delay: 120ms;
            transition-delay: 120ms;
        }

        .menu > li:hover .submenu li:nth-child(8) {
            -webkit-transition-delay: 140ms;
            -moz-transition-delay: 140ms;
            -ms-transition-delay: 140ms;
            -o-transition-delay: 140ms;
            transition-delay: 140ms;
        }
        .menu > li:hover .submenu li:nth-child(9) {
            -webkit-transition-delay: 160ms;
            -moz-transition-delay: 160ms;
            -ms-transition-delay: 160ms;
            -o-transition-delay: 160ms;
            transition-delay: 160ms;
        }
        .menu > li:hover .submenu li:nth-child(10) {
            -webkit-transition-delay: 180ms;
            -moz-transition-delay: 180ms;
            -ms-transition-delay: 180ms;
            -o-transition-delay: 180ms;
            transition-delay: 180ms;
        }
        .menu > li:hover .submenu li:nth-child(11) {
            -webkit-transition-delay: 200ms;
            -moz-transition-delay: 200ms;
            -ms-transition-delay: 200ms;
            -o-transition-delay: 200ms;
            transition-delay: 200ms;
        }
        /*分割先*/
        .submenu > li:nth-child(1) {
            -webkit-transition-delay: 200ms;
            -moz-transition-delay: 200ms;
            -ms-transition-delay: 200ms;
            -o-transition-delay: 200ms;
            transition-delay: 200ms;
        }
        .submenu > li:nth-child(2) {
            -webkit-transition-delay: 180ms;
            -moz-transition-delay: 180ms;
            -ms-transition-delay: 180ms;
            -o-transition-delay: 180ms;
            transition-delay: 180ms;
        }
        .submenu > li:nth-child(3) {
            -webkit-transition-delay: 160ms;
            -moz-transition-delay: 160ms;
            -ms-transition-delay: 160ms;
            -o-transition-delay: 160ms;
            transition-delay: 160ms;
        }
        .submenu > li:nth-child(4) {
            -webkit-transition-delay: 140ms;
            -moz-transition-delay: 140ms;
            -ms-transition-delay: 140ms;
            -o-transition-delay: 140ms;
            transition-delay: 140ms;
        }

        .submenu > li:nth-child(5) {
            -webkit-transition-delay: 120ms;
            -moz-transition-delay: 120ms;
            -ms-transition-delay: 120ms;
            -o-transition-delay: 120ms;
            transition-delay: 120ms;
        }

        .submenu > li:nth-child(6) {
            -webkit-transition-delay: 100ms;
            -moz-transition-delay: 100ms;
            -ms-transition-delay: 100ms;
            -o-transition-delay: 100ms;
            transition-delay: 100ms;
        }

        .submenu > li:nth-child(7) {
            -webkit-transition-delay: 80ms;
            -moz-transition-delay: 80ms;
            -ms-transition-delay: 80ms;
            -o-transition-delay: 80ms;
            transition-delay: 80ms;
        }

        .submenu > li:nth-child(8) {
            -webkit-transition-delay: 60ms;
            -moz-transition-delay: 60ms;
            -ms-transition-delay: 60ms;
            -o-transition-delay: 60ms;
            transition-delay: 60ms;
        }

        .submenu > li:nth-child(9) {
            -webkit-transition-delay: 40ms;
            -moz-transition-delay: 40ms;
            -ms-transition-delay: 40ms;
            -o-transition-delay: 40ms;
            transition-delay: 40ms;
        }

        .submenu > li:nth-child(10) {
            -webkit-transition-delay: 20ms;
            -moz-transition-delay: 20ms;
            -ms-transition-delay: 20ms;
            -o-transition-delay: 20ms;
            transition-delay: 20ms;
        }

        .submenu > li:nth-child(11) {
            -webkit-transition-delay: 0s;
            -moz-transition-delay: 0s;
            -ms-transition-delay: 0s;
            -o-transition-delay: 0s;
            transition-delay: 0s;
        }
    }
</style>
