<template>
    <div id="theme">
                <el-radio-group v-model="nowTheme" @change="changeTheme(nowTheme)">
                    <el-radio class="radio" :label="item.cssUrl" v-for="(item,index) in themeList" :key="item.id">
                        <span class="color_box themeBox"  :style="item.style"></span>
                        <span>{{ LANG[item.label] || item.label }}</span>
                    </el-radio>
                    <!--<el-row>-->
                        <!--<el-col :span="6">{{ LANG[item.label] || item.label }}</el-col>-->
                        <!--<el-col :span="18"><div class="fr themeBox" :style="item.style"></div></el-col>-->
                    <!--</el-row>-->
                </el-radio-group>
    </div>
</template>
<script>
    export default{
        name:"language",
        data(){
			return{
			    LANG,
                themeList: [{
                    id: "default",
                    label: "经典主题",
                    class: 'selTheme',
                    cssUrl: '/static/themeMode/default.css',
                    style: 'background:#4f546a;'
                },
                {
                    id: "red",
                    label: "红色主题",
                    class: 'selTheme',
                    cssUrl: '/static/themeMode/red.css',
                    style: 'background:#e94d3e;'
                },
                {
                    id: "blue",
                    label: "蓝色主题",
                    class: 'selTheme',
                    cssUrl: '/static/themeMode/blue.css',
                    style: 'background:#0197d2;'
                },
                {
                    id: "yellow",
                    label: "黄色主题",
                    class: 'selTheme',
                    cssUrl: '/static/themeMode/yellow.css',
                    style: 'background:#f59275;'
                },
                {
                    id: "green",
                    label: "绿色主题",
                    class: 'selTheme',
                    cssUrl: '/static/themeMode/green.css',
                    style: 'background:#00bca4;'
                },
                {
                    id: "shade",
                    label: "渐变主题",
                    class: 'selTheme',
                    cssUrl: '/static/themeMode/shade.css',
                    style: 'background:#b494d5;'
                }],
                nowTheme:'/static/themeMode/default.css'
			}
		},
		components: {
		},
		methods: {
            //切换主题
            init(){

            },
            changeTheme(command){
                //旧主题路径
                let oldTheme = localStorage.oldtheme;
                //匹配新主题路径
                if(command !== localStorage.theme){
                    oldTheme = localStorage.theme;
                    localStorage.theme = command;
                    this.$emit('change-theme',{"theme": command,"oldTheme":oldTheme});
                }
            }
		},
		mounted(){
            this.nowTheme = localStorage.theme || this.nowTheme;
            this.$emit('change-theme',{"theme": (localStorage.theme || this.nowTheme)});
		},
        created(){
            this.init();
        },
    }
</script>
<style lang="less">
    #theme{
        .radio{width: 108px;line-height:28px;height:28px;vertical-align: middle;}
        .themeBox{width:20px;height:20px;}
        .color_box{display:-moz-inline-box; display:inline-block;vertical-align: middle;}
        .el-radio+.el-radio{margin-left:0;}
        .el-radio .el-radio__input{
            /*line-height:28px;height:28px;*/
            /*float: left;*/
            padding-right: 6px;
        }
        .el-radio__label{padding-left:0;}
    }
</style>