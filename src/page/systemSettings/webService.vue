<template>
    <div id="activeSet">
        <el-col>
            <el-button size="large" type="primary" @click="">服务内容</el-button>
            <el-button size="large" type="primary" @click="">发起请求</el-button>
            <el-button size="large" type="primary" @click="">购买历史</el-button>
        </el-col>
        <div v-for="(item,index) in contents">
            <div class="mould">
                <div class="icon" @click="showIcon(index)"><img :src="item.icon">
                </div>
                <div class="btn">
                    <div class="money">￥988元/月</div>
                    <el-button size="small" type="primary" @click="">购买</el-button>
                    <el-button size="small" type="primary" @click="">查看</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                isShow:-1,
                //测试图片地址
                contents:[
                    {"icon":"../../static/img/china_bank.png"},
                    {"icon":"../../static/img/logo2.png"},
                    {"icon":"../../static/img/logo_sm.png"},
                    {"icon":"../../static/img/jianshe_bank.png"},
                    {"icon":"../../static/img/china_bank.png"},
                    {"icon":"../../static/img/china_bank.png"},
                    {"icon":"../../static/img/china_bank.png"},
                    {"icon":"../../static/img/china_bank.png"},
                    {"icon":"../../static/img/china_bank.png"}
                ],
            }
        },
        components: {

        },
        methods: {
            showIcon(index){
                this.isShow=index;
            },
            init(){
//                this.tableUrl = URL.api + "";
//                this.baseUrl = URL.api + ROUTES.GET;
//                this.columnsUrl = "static/json/preAct/typeList/columns.json";
            },


            //表格按钮点击事件
            doHandle(item){

            },

        },
        computed: {},
        mounted(){
        },
        created(){
            this.init();
        }
    }
</script>
<style>
    .mould{width: 200px;float: left;margin-right:10px;margin-top:10px;margin-bottom:10px;border: 1px solid #33CCCC;padding-bottom: 10px;}
    .mould .money{margin-bottom: 10px;}
    .icon{position:relative;background: #33CCCC;height: 60px;overflow: hidden;width: 200px;}
    .icon img{width:100%;height: 100%;display: block;}
    .btn{height:60px;padding-top:25px;text-align: center;}
    .bigIcon{position:absolute;z-index:100;left:50px;top:50px;width: 300px;height: 300px;}
</style>