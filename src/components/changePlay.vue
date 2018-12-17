<template>
    <div class="typeBtn">
        <el-button :type="standardActive" size="small" v-text="LANG['官方玩法'] || '官方玩法'"  @click="doChangePlay('standard')"></el-button>
        <el-button :type="quickActive"  size="small" v-text="LANG['信用玩法'] || '信用玩法'"  @click="doChangePlay('fast')"></el-button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                LANG,
                //标准玩法选中状态
                standardActive:"primary",
                //快捷玩法选中状态
                quickActive:"",
            }
        },
        props:{
            active:{
                type:String,
                default:"standard"
            }
        },
        methods: {
            //初始化
            init(){
                // if(this.active != "standard"){
                //     this.doChangePlay("fast")
                // }
            },
            //切换玩法
            doChangePlay(str){
                if (str == 'standard') {
                    this.standardActive = "primary";
                    this.quickActive = "";
                    this.$emit("do-change-play", {
                        "item": "standard"
                    });
                } else {
                    this.standardActive = "";
                    this.quickActive = "primary";
                    this.$emit("do-change-play", {
                        "item": "fast"
                    });
                }
            }
        },
        watch: {
            active: function (newval) {
                if(newval){
                    this.doChangePlay(newval);
                }
            },
        }
    }

</script>
