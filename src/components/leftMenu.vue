 <template>
    <div id="leftMenu" class="nav-box">
        <div class="nav">
            <ul :default-active="$route.path" class="nav-ul">
                <li v-for="(item,index) in URLROUTERS" v-if="!item.hidden && ((item.action && item.action.length>0)  || item.name === '快捷') ">
                    <!-- && verify[index-4].type -->
                    <a href="javascript:;" v-if="item.name != '首 页'"><i :class="item.iconCls"></i>{{LANG[item.name] || item.name}}</a>
                </li>
            </ul>
        </div>
        <div class="nav-slide" :default-active="$route.path">
            <div class="nav-slide-o " v-for="items in URLROUTERS" v-if="!items.hidden && ((items.action && items.action.length>0)  || items.name === '快捷') ">
                <ul style="z-index: 3000">
                    <li v-for="item in items.children" class="tCent childMenu" v-if="!item.hidden && item.action && item.action.length>0">
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
                let myquick = QUICKMENU[5].children =[];
                QUICKCD = {};
                let qkMenu = localStorage.quickmenu && JSON.parse(localStorage.quickmenu) || {}
                for(let i=6;i<QUICKMENU.length;i++){
                    if( QUICKMENU[i].children && QUICKMENU[i].children.length && QUICKMENU[i].action && QUICKMENU[i].action.length){
                        for(let n=0; n<QUICKMENU[i].children.length; n++){
                            let temp = QUICKMENU[i].children[n];
                            for(let k in qkMenu){
                                if(temp && qkMenu[k].path === temp.path && temp.action && temp.action.length > 0){
                                    myquick.push(qkMenu[k]);
                                    QUICKCD[qkMenu[k].path] = qkMenu[k]
                                    qkNumber ++;
                                }
                            }
                        }
                    }
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
                let oSlide = $('.nav-slide');
                let  oItm = $('.nav-slide  > .nav-slide-o ul  li').find('a');
                let oLi = $('.nav-ul li').eq($(this).parents('.nav-slide-o').index());
                oItm.each(function () {
                     $(this).is('.router-link-active') ? $('.nav-ul > li').eq($(this).parents('.nav-slide-o').index()).addClass('bgStyle').find('a').addClass('fontStyle'):oLi.removeClass('bgStyle');
                })
                var thisTime;
                $('.nav-ul li').mouseleave(function (even) {
                    thisTime = setTimeout(thisMouseOut, 1000);
                })
                $('.nav-ul li').mouseenter(function () {
                    let oDemo = $('.nav-slide-o');
                    clearTimeout(thisTime);
                    let thisUB = $('.nav-ul li').index($(this));
	                let oChild = oDemo.eq(thisUB).find('.childMenu').length;
	                if ($.trim(oDemo.eq(thisUB).html()) != "") {
                        oSlide.addClass('hover');
                        oDemo.hide();
                        thisUB > 0? oChild>thisUB? oDemo.eq(thisUB).show().css({marginTop: 44}): oDemo.eq(thisUB).show().css({marginTop: (thisUB-oChild+1)*44}): oDemo.eq(thisUB).show().css({marginTop:0});
                    }
                    else {
                        oSlide.removeClass('hover');
                    }

                });

                function thisMouseOut() {
                    oSlide.removeClass('hover');
                }
                oSlide.mouseenter(() => {
                    clearTimeout(thisTime);
                    oSlide.addClass('hover');
                })
                oSlide.mouseleave(() => {
                    oSlide.removeClass('hover');
                });
                //点击选中
                $('.nav-slide-o li').click(function () {
                    let oNan = $(this).parents('.nav-slide-o').index();
                    let oNav = $('.nav-ul li').eq(oNan);
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
<style scoped>
    .nav-box {
        position: fixed;
        perspective: 200px;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        /*height: 100%;*/
        z-index: 99;
        height: 100%;
    }

    .nav-ul li a {
        display: block;
        font-size: 14px;
        width: 70px;
        height: 44px;
        line-height: 44px;
        overflow: hidden;
        text-align: center;
        position: relative;
        transition: all .5s;
        text-align:left;
    }

    .nav-ul li a i {
        margin-left:8px;
        /*!*margin-left: 2px;*!*/
        /*position:relative;*/
        /*left:0*/
    }
    .nav-ul li a:before {
        content: '';
        position: absolute;
        left: -240px;
        top: 0px;
        width: 130px;
        height: 100%;
        z-index: -1;
        transform: skew(30deg, 0);
        transition: all .5s;

    }

    .nav-ul li a:hover:before {
        left: -30px;
    }

    .nav-ul li a:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 30px;
        left: 0;
        top: 20px;
        z-index: 1;
    }

    .nav-ul li a span {
        display: block;
        margin-top: 60px;
        /*perspective: ;*/
        position: relative;
        z-index: 1;
    }

    .nav-slide {
        position: fixed;
        left: 70px;
        top: 0;
        min-width: 130px;
        /*height: 100%;*/
        /*transform: rotateY(120deg);*/
        z-index: 99;
        visibility: hidden;
        /*transform-origin: 0 0;*/
        /*backface-visibility: hidden;*/
        /*transition: all .5s;*/
        /*transition-timing-function: cubic-bezier(.08, .72, .71, .96);*/

    }

    .nav-slide.hover {
        transform: rotateY(0deg);
        z-index: 15;
        visibility: visible;
    }
    /*去掉边框占比*/
    .nav-box  .nav-ul  li,.nav-box  .nav-slide-o  li{
        box-sizing: border-box;
    }
    /*二级菜单*/
    .nav-slide-o li a {
        line-height: 44px;
        display: block;
        /*padding: 0 20px;*/
        text-align: center;
        font-size: 14px;
        overflow: hidden;
        position: relative;
        /*transition: all .5s;*/
    }
    .nav-slide-o li a:before {
        content: '';
        position: absolute;
        left: -230%;
        top: 0px;
        width: 200%;
        height: 100%;
        z-index: -1;
        transform: skew(30deg, 0);
        transition: all .5s;
    }

    .nav-slide-o li a:hover:before {
        left: -60px;
    }

    .nav-slide-o li a span {
        position: relative;
        z-index: 1;
    }

    .nav-slide-o {
        display: none;
    }
</style>
