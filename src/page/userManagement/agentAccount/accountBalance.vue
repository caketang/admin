<template>
    <div id="accountBalance" class="clearfix">
        <el-col :span="16" :offset="4">
            <div class="title">{{LANG['推广信息'] || '推广信息'}}</div>
        </el-col>
        <el-col :span="16" class="border1" :offset="4">
            <el-form   label-width="120px" >
                <el-form-item :label="LANG['个人网站:'] || '个人网站:'" class="item">
                    <span>{{extension.website}}</span>
                </el-form-item>
                <el-form-item :label="LANG['推广码：'] || '推广码：'" class="item">
                    <span>{{extension.code}}</span>
                </el-form-item>
                <el-form-item :label="LANG['会员推广链接：'] || '会员推广链接：'" class="item">
                    <span>{{extension.member_ads_site}}</span>
                </el-form-item>
                <el-form-item :label="LANG['下级代理链接：'] || '下级代理链接：'" class="item">
                    <span>{{extension.sub_agent_site}}</span>
                </el-form-item>
            </el-form>
        </el-col>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                LANG,
                extension:{
                    website:"",
                    code:"",
                    member_ads_site:"",
                    sub_agent_site:""
                }
            }
        },
        props:{
            id:Number
        },
        components: {
        },
        methods: {
            init(){
                if(parseInt(this.id) >0){
                    let _this = this;

                    this.$.autoAjax('get',URL.api+ROUTES.GET.user.agent.market+"/"+_this.id, '', {
                        ok: (res) => {
                            let model = res.data;
                            if(res.state == 0 && res.data){
                                _this.extension.code = model.code;
                                if(model.website)
                                {
                                    model.website.forEach((ele) =>{
                                        if(ele.url)
                                        {
                                            _this.extension.website += ele.url+'; ';
                                        }
                                    })
                                }

                                if(model.member_ads_site && model.member_ads_site.length)
                                {

                                    _this.extension.member_ads_site = model.member_ads_site.join("; ")

                                }
                                if(model.sub_agent_site && model.sub_agent_site.length){

                                    _this.extension.sub_agent_site = model.sub_agent_site.join("; ")

                                }
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                    // this.$http.get(URL.api+ROUTES.GET.user.agent.market+"/"+_this.id,URLCONFIG).then((res)=>{
                    //     let model = res.data.data;
                    //      if(res.data.state == 0 && res.data.data){
                    //         _this.extension.code = model.code;
                    //        if(model.website)
                    //        {
                    //            model.website.forEach((ele) =>{
                    //                 if(ele.url)
                    //                 {
                    //                     _this.extension.website += ele.url+'; ';
                    //                 }
                    //            })
                    //        }
					//
                    //        if(model.member_ads_site && model.member_ads_site.length)
                    //        {
					//
                    //             _this.extension.member_ads_site = model.member_ads_site.join("; ")
					//
                    //        }
                    //        if(model.sub_agent_site && model.sub_agent_site.length){
					//
                    //            _this.extension.sub_agent_site = model.sub_agent_site.join("; ")
					//
                    //        }
                    //      }
                    // })
                }
            }
        },
        computed:{
        },
        mounted(){
        },
        created(){
            this.init();
        }
    }
</script>
<style scoped>
    /*#accountBalance{min-width:1200px;}*/
    #accountBalance .title { text-align: center; width: 100%; font-weight: 800; font-size: 18px; margin-bottom: 30px !important; }
    #accountBalance .border1{border: 1px solid #ccc;padding:3px;}
    #accountBalance .border1 .item{border-bottom: 1px solid #ccc;margin:0;box-sizing: border-box}
    #accountBalance .border1 .title{text-align: center;width:100%;font-weight: 800;font-size: 18px;margin-bottom: 30px !important;}
    #accountBalance .border1 .el-form-item__label{background-color: #ececec;}
</style>
