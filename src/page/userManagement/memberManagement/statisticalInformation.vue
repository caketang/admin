<template>
    <div id="statisticalInformation" class="clearfix" v-loading="loading">
        <div class="clearfix" style="margin: 0 auto; width: 604px;">
        <el-col>
            <div class="title">{{LANG['统计信息'] || '统计信息'}}</div>
            <el-button size="small" class="refresh" type="primary" @click="refreshModel">{{LANG['刷 新'] || '刷 新'}}</el-button>
        </el-col>
        <el-col  class="border1">
            <el-form label-width="120px" >
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['入款次数累计'] || '入款次数累计'">
                        <span>{{stat['deposit_times']}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['入款总额累计'] || '入款总额累计'">
                        <span>{{parseInt(stat['deposit_money'])/100}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['出款次数累计'] || '出款次数累计'">
                        <span>{{stat['withdraw_times']}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['出款总额累计'] || '出款总额累计'">
                        <span>{{parseInt(stat['withdraw_money'])/100}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['注单总数'] || '注单总数'">
                        <span>{{stat['order_times']}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['注单总金额'] || '注单总金额'">
                        <span>{{parseInt(stat['order_money'])/100}}</span>
                    </el-form-item>
                </el-col>
                <!-- <el-col :span="12" class="item">
                    <el-form-item :label="LANG['派彩总金额'] || '派彩总金额'">
                        <span>{{parseInt(stat['send_prize'])/100}}</span>
                    </el-form-item>
                </el-col> -->
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['返水总金额'] || '返水总金额'">
                        <span>{{parseInt(stat['rebet_money'])/100}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="item">
                    <el-form-item :label="LANG['优惠活动总金额'] || '优惠活动总金额'">
                        <span>{{parseInt(stat['coupon_money'])/100}}</span>
                    </el-form-item>
                </el-col>
                <el-col :span="24" class="item">
                    <el-form-item :label="LANG['会员总额盈亏'] || '会员总额盈亏'">
                        <span>{{parseInt(stat['lose_earn'])/100}}</span>
                    </el-form-item>
                </el-col>
            </el-form>
        </el-col>
    </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                LANG,
                stat:{
                    deposit_times:0,
                    deposit_money:0,
                    withdraw_times: 0,
                    withdraw_money: 0,
                    order_times: 0,
                    order_money: 0,
                    send_prize: 0,
                    rebet_money: 0,
                    coupon_money: 0,
                    lose_earn: 0
                },
                loading: false
            }
        },
        props:{
            id:Number
        },
        components: {
        },
        methods: {
            //页面初始化
            init(){
                this.loading = true;
                let stat = this.stat;
                //取用户数据

				this.$.autoAjax('get',URL.api+ROUTES.GET.user.info.$(parseInt(this.id))+"?type=stat", '', {
					ok: (res) => {
						if( res.state == 0 && res.data){
							let model=res.data;
							for(let i in model){
								stat[i]= model[i];
							}
						}
						this.loading = false;
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api+ROUTES.GET.user.info.$(parseInt(this.id))+"?type=stat",URLCONFIG).then((res)=>{
                //     if( res.data.state == 0 && res.data.data){
                //         let model=res.data.data;
                //         for(let i in model){
                //             stat[i]= model[i];
                //         }
                //     }
                //     this.loading = false;
                // });
            },
            //刷新数据
            refreshModel(){
                this.init();
                this.$message.success(LANG['刷新成功'] || '刷新成功');
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
<style scoped>
    #statisticalInformation{padding:20px;}
    #statisticalInformation .el-form-item{margin:0}
    #statisticalInformation .item{border-bottom: 1px solid #ccc;margin:0;box-sizing: border-box}
    #statisticalInformation .title{text-align: center;width:100%;font-weight: 800;font-size: 18px;margin-bottom: 30px !important;}
    #statisticalInformation .el-form-item__label{background-color: #ececec;width:100%}
    #statisticalInformation .el-col-12 span{line-height: 37px;margin-left:10px}
    #statisticalInformation .border1{border:1px solid #ccc;padding:10px;}
    #statisticalInformation .refresh{float:right;margin-top:-35px;}
</style>