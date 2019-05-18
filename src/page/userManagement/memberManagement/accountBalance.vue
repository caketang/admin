<template>
    <div id="accountBalance" v-loading="loading">
        <div class="clearfix" style="margin: 0 auto; width: 933px;">
            <el-col>
                <div class="title">{{LANG['帐户余额'] || '帐户余额'}}</div>
            </el-col>
            <el-col style="margin-bottom: 10px;">
                <span v-text="LANG['货币:'] || '货币:'" class="fl10"></span>{{accountFrom['currency_name']}}
                <span v-text="LANG['最后更新时间:'] || '最后更新时间:'" class="fl10"></span>{{accountFrom['updated']}}
                <div style="float:right">
                    <el-button type="primary" @click="refreshModel" style="margin-left:5px;" size="small">{{LANG['刷新余额'] || '刷新余额'}}</el-button>
                    <el-button type="primary" @click="adjustedBalance" style="margin-left:5px;" size="small">{{LANG['调整余额'] || '调整余额'}}</el-button>
                </div>
            </el-col>
            <el-col class="border1">
                <el-form :model="accountFrom" label-width="100px" >
                    <el-col :span="24" class="item">
                        <el-form-item :label="LANG['主帐户'] || '主帐户'">
                            <span>{{accountFrom['balance']}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" class="item">
                        <el-form-item :label="LANG['提款冻结'] || '提款冻结'">
                            <span>{{accountFrom['freeze_withdraw']}}</span>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12" class="item">
                        <el-form-item :label="LANG['代理钱包'] || '代理钱包'">
                            <span>{{accountFrom['benefit_balance']}}</span>
                        </el-form-item>
                    </el-col>
                    <!-- S.渲染子钱包 -->
                    <!-- 不确定子钱包个数，确保最后一个子钱包能占满整行 -->
                    <el-col v-for="(item, index) in accountFrom.children" :span="(index % 2 === 0 && index === accountFrom.children.length - 1) ? 24 : 12" class="item" :key="item.game_type">
                        <el-form-item :label="LANG[item.game_type + '余额'] || item.game_type + '余额'">
                            <span>{{item.balance}}</span>
                        </el-form-item>
                    </el-col>
                    <!-- E.渲染子钱包 -->
                    <el-col :span="24" class="item">
                        <el-form-item :label="LANG['总余额'] || '总余额'">
                            <span>{{accountFrom['amount']}}</span>
                        </el-form-item>
                    </el-col>
                </el-form>
            </el-col>
        </div>
    </div>
</template>
<script>
    import NProgress from 'nprogress'
    export default{
        data(){
            return{
                LANG,
                //帐户余额
                accountFrom:{
                    currency: "",
                    currency_name: "",
                    updated: "",
                    freeze_withdraw:"",
                    freeze_append: "",
                    children: [],
                    balance: "",
                    total_balance: "",
                    amount: ""
                },
                refresh_bool: false,
                loading: false
            }
        },
        props:{
            id:Number,
            username:String
        },
        components: {
        },
        methods: {
            //页面初始化
            init(){
                let _this= this;
                let stat = this.accountFrom;
                //取用户数据
                let url = !this.refresh_bool ? URL.api+ROUTES.GET.user.newInfo+"?id="+parseInt(this.id)+"&type=balance" : URL.api+ROUTES.GET.user.newInfo+"?id="+parseInt(this.id)+"&type=balance&refresh=1"

				this.$.autoAjax('get',url, '', {
					ok: (res) => {
						if( res.state == 0 && res.data){
							let model=res.data;
							for(let i in model){
								stat[i]= model[i];
							}
							this.accountFrom.total_balance = parseInt(this.accountFrom.balance) + parseInt(this.accountFrom.freeze_withdraw) + parseInt(this.accountFrom.freeze_append);
							// 匹配子钱包金额
							// const children_money_keys = Object.keys(this.accountFrom.children_money);
							// for (let child_key of model.children) {
							//     for (let item of children_money_keys) {
							//         //根据属性名和game_type匹配来填写金额
							//         if (item == child_key.game_type) {
							//             this.accountFrom.children_money[item] = child_key.balance;
							//             this.accountFrom.total_balance += parseInt(child_key.balance);
							//             break;
							//         }
							//     }
							// }
						}
						// refresh_bool为true的时候出现刷新提示
						if (this.refresh_bool) {
							this.loading = false;
							this.$message.success(LANG['刷新成功'] || '刷新成功');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(url, URLCONFIG).then((res)=>{
                //     if( res.data.state == 0 && res.data.data){
                //         let model=res.data.data;
                //         for(let i in model){
                //             stat[i]= model[i];
                //         }
                //         this.accountFrom.total_balance = parseInt(this.accountFrom.balance) + parseInt(this.accountFrom.freeze_withdraw) + parseInt(this.accountFrom.freeze_append);
                //         // 匹配子钱包金额
                //         // const children_money_keys = Object.keys(this.accountFrom.children_money);
                //         // for (let child_key of model.children) {
                //         //     for (let item of children_money_keys) {
                //         //         //根据属性名和game_type匹配来填写金额
                //         //         if (item == child_key.game_type) {
                //         //             this.accountFrom.children_money[item] = child_key.balance;
                //         //             this.accountFrom.total_balance += parseInt(child_key.balance);
                //         //             break;
                //         //         }
                //         //     }
                //         // }
                //     }
                //     // refresh_bool为true的时候出现刷新提示
                //     if (this.refresh_bool) {
                //         this.loading = false;
                //         this.$message.success(LANG['刷新成功'] || '刷新成功');
                //     }
                // })
                .catch((err) => {
//                    console.log(err);
                })
            },
            //刷新余额
            refreshModel(){
                // 设置强制刷新
                this.refresh_bool = true;
                this.loading = true;
                this.init();
            },
            //调整余额
            adjustedBalance(){
                this.$router.push({path: "/manual",query: {username: this.username,role: "1"}});
            }
        },
        created(){
            // 默认不强制刷新
            this.refresh_bool = false;
            this.init();
        }
    }
</script>
<style>
    #accountBalance{padding:20px;}
    #accountBalance .fl10{margin-left:10px}
    #accountBalance .title { text-align: center; width: 100%; font-weight: 800; font-size: 18px; margin-bottom: 30px !important; }
    #accountBalance .border1{border: 1px solid #ccc;padding:3px;}
    #accountBalance .border1 .item{border-bottom: 1px solid #ccc;margin:0;box-sizing: border-box}
    #accountBalance .border1 .itemtextarea{height:62px}
    #accountBalance .border1 .itemtextarea .el-form-item__label{height:62px}
    #accountBalance .border1 .title{text-align: center;width:100%;font-weight: 800;font-size: 18px;margin-bottom: 30px !important;}
    #accountBalance .border1 .el-col,#basicInformation .el-form-item{margin:0}
    #accountBalance .border1 .el-form-item {margin-bottom: 0}
    #accountBalance .border1 .el-form-item__label{background-color: #ececec;width:100%}
    #accountBalance .border1 .el-form-item__content span{margin-left:15px}
    #accountBalance .border1 .el-form-item__content .el-button {margin-left:15px}
    #accountBalance .border1 .el-form-item__content .el-button span{margin:0}
    #accountBalance .border1 .el-input__inner{height:30px;margin-left: 15px}
    #accountBalance .border1 .el-form-item__content .el-input{width:60%;}
    #accountBalance .border1 .el-form-item__content .el-textarea{margin:3px 0 3px 15px;width:90%}
    #accountBalance .border1 .border1{border:1px solid #ccc;padding:10px;}
    #accountBalance .el-dialog__body .el-form-item{margin-bottom: 20px}
</style>
