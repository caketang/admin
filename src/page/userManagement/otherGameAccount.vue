<template>
    <div id="otherGameAccount">
        <div class="search">
            <el-form label-width="90px">
                <el-form-item :label="LANG['用户名'] || '用户名'" >
                    <el-input v-model="query['user_name']" size="small"></el-input>
                </el-form-item>
                <div class="formbtn">
                    <el-button type="primary" size="small" @click="doQuery">{{LANG['查询'] || '查询'}}</el-button>
                    <el-button type="primary" size="small" @click="resetForm">{{LANG['重置'] || '重置'}}</el-button>
                </div>
            </el-form>
        </div>
        <el-col>
            <otherGameAccount :headModelUrl="columnsUrl" :bodyModelUrl="tableUrl" @do-handle="doHandle" :username="userName" :optType="optType"></otherGameAccount>

        </el-col>
    </div>
</template>
<script>

    import otherGameAccount from '../../components/otherGameAccount_tz.vue'
    export default{
        data(){
            return{
                LANG,
                //表格数据
                tableUrl:"",
                //列配置
                columnsUrl:"",
                query:{
                    user_name:"",
                },
                userName:"",
                nowId:-1,
                optType:"",
                baseUrl:"",

            }
        },
        components: {

            otherGameAccount: otherGameAccount
        },
        methods: {
            init(){
                this.tableUrl = URL.api +ROUTES.GET.user.games.third;
                this.baseUrl = URL.api +ROUTES.GET.user.games.third;
                this.columnsUrl="/static/json/accoutManage/otherGameAccount/columns.json"

            },
            //表格数据按钮
            doHandle(item){
                this.formType = "";

                switch (item.fn){

                    case "doDisable":
                        this.doDisable(item.row)
                        break
                    /*case "doEnable":
                        this.Enable(item.row)
                        break*/
                }
            },
           /* //停用
            doDisable(row){
                this.nowId = row.id;
                let _this = this;
                this.$http.patch(URL.api+ROUTES.PATCH.user.games.third+"/"+parseInt(this.nowId),JSON.stringify({"state":false}),URLCONFIG).then((res)=>{
                    if(res.data.state == 0 && res.data.data){
                        debugger
                        _this.optType = "停用";

                        this.$message.success(LANG['恭喜您，第三方游戏帐户停用成功！'] || '恭喜您，第三方游戏帐户停用成功！');

                    }else{
                        this.$message.error(LANG['第三方游戏帐户停用失败，请稍后重试！'] || '第三方游戏帐户停用失败，请稍后重试！');
                    }
                });

            },
            //启用
            Enable(row){
                this.nowId = row.id;
                let _this = this;
                this.$http.patch(URL.api+ROUTES.PATCH.user.games.third+"/"+parseInt(this.nowId),JSON.stringify({"state":true}),URLCONFIG).then((res)=>{
                    if(res.data.state == 0 && res.data.data){

                        _this.optType = "启用";
                        this.$message.success(LANG['恭喜您，第三方游戏帐户启用成功！'] || '恭喜您，第三方游戏帐户启用成功！');
                    }else{
                        this.$message.error(LANG['第三方游戏帐户启用失败，请稍后重试！'] || '第三方游戏帐户启用失败，请稍后重试！');
                    }
                });

            },*/
            //查询
            doQuery(){
                if(this.query.user_name){
                    this.userName = this.query.user_name;
                }else{
                    this.$message.error(LANG['请输入用户名后再查询！'] || '请输入用户名后再查询！');
                    return;
                }
                this.tableUrl = this.baseUrl + "?user_name=" + encodeURI(this.userName);


            },
            // 重置
            reset()
            {
                if(this.query.username)
                {
                    this.query.username = '';
                }

            },
             //重置查询
            resetForm(){
                this.tableUrl = this.baseUrl;
            }
        },
        computed:{
        },
        mounted(){
        },
        created(){
            this.init()
        }
    }
</script>
<style >
    #otherGameAccount .search .el-form-item__label{width:80px}
    #otherGameAccount .search .el-form-item{width:200px;float:left;margin-bottom: 1px}
    #otherGameAccount .search .el-form-item.lg{width:330px;float:left;}
    #otherGameAccount .search .el-form .el-col .line{text-align: center}
    #otherGameAccount .search .el-form .formbtn{float:left;margin-left:10px;padding-top:5px}
</style>