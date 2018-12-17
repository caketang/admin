<template>
    <div>
        <el-button :type="memberActive" v-text="_('会员列表')" @click="doChangeMember('member')"></el-button>
        <el-button :type="agentActive"  v-text="_('代理列表')" @click="doChangeMember('agent')"></el-button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                //标准玩法选中状态
                memberActive:"primary",
                //快捷玩法选中状态
                agentActive:"",
            }
        },
        props:{
            active:{
                type:String,
                default:"memberActive"
            }
        },
        methods: {
            //初始化
            init(){
                if(this.active != "member"){
                    this.doChangeMember("member")
                }
            },
            //切换玩法
            doChangeMember(str){
                if (str == 'member') {
                    this.memberActive = "primary";
                    this.agentActive = "";
                    this.$emit("do-change-member", {
                        "item": "member"
                    });
                } else {
                    this.memberActive = "";
                    this.agentActive = "primary";
                    this.$emit("do-change-member", {
                        "item": "agent"
                    });
                }
            }
        },
        created(){
            this.init()
        }
    }
</script>
