<template>
    <div id="agentSet">
        <el-row :gutter="20" class="w50" style="margin:0 auto;">
            <!--计算设置-->
            <el-col :span="24" class="mainStyle">
                <div class="">
                    <!--<div class="fl setPlay">-->
                        <!--<el-form :model="agentSet" label-width="100px" class="mt10">-->
                            <!--<h3>{{LANG['计算设置'] || '计算设置'}}</h3>-->
                            <!--<el-form-item :label="LANG['最小支付金额'] || '最小支付金额'" prop="pay_min" class="w90">-->
                                <!--<el-input v-model="agentSet.minPay" size="small" type="number"></el-input>-->
                            <!--</el-form-item>-->
                            <!--&lt;!&ndash;<el-form-item :label="LANG['佣金结算日期'] || '佣金结算日期'" prop="accountDate"&ndash;&gt;-->
                                          <!--&lt;!&ndash;class="w90">&ndash;&gt;-->
                                <!--&lt;!&ndash;<el-select v-model="agentSet.accountDate" placeholder="请选择佣金结算日期"&ndash;&gt;-->
                                           <!--&lt;!&ndash;class="setPlaySel">&ndash;&gt;-->
                                    <!--&lt;!&ndash;<el-option v-for="(item,index) in dataList" :label="item.label + item.value + '日'"&ndash;&gt;-->
                                               <!--&lt;!&ndash;:value="item.value" :key="index"></el-option>&ndash;&gt;-->
                                <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                            <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
                            <!--<el-form-item :label="LANG['退佣发放方式'] || '退佣发放方式'" prop="settlement_type">-->
                                <!--<el-radio v-model="agentSet.payType" label="1">-->
                                    <!--{{LANG['自动发放'] || '自动发放'}}-->
                                <!--</el-radio>-->
                                <!--<el-radio v-model="agentSet.payType" label="2">-->
                                    <!--{{LANG['手动发放'] || '手动发放'}}-->
                                <!--</el-radio>-->
                            <!--</el-form-item>-->
                        <!--</el-form>-->
                    <!--</div>-->
                    <div class="fl setPlay">
                        <div class="">
                            <el-form :model="agentSet" label-width="110px" class="mt10">
                                <h3>{{LANG['退佣有效会员定义'] || '退佣有效会员定义'}}</h3>
                                <el-form-item :label="LANG['有效会员投注额'] || '有效会员投注额'" prop="active_player_valid_bet"
                                              class="w90">
                                    <el-input type="number" v-model="agentSet.userBet"
                                              size="small"></el-input>
                                </el-form-item>
                                <el-form-item :label="LANG['期间存款金额'] || '期间存款金额'" prop="active_player_deposit"
                                              class="w90">
                                    <el-input type="number" v-model="agentSet.monthDeposit"
                                              size="small"></el-input>
                                </el-form-item>
                            </el-form>
                            <span class="help_gray">提示：二者其中一个达到，即为有效会员。</span>
                        </div>
                    </div>
                </div>
            </el-col>
            <!--多级代理佣金百分比-->
            <el-col :span="24" class="mainStyle">
                <h3>{{LANG['多级代理佣金百分比'] || '多级代理佣金百分比'}}</h3>
                <el-form :model="agentSet" label-width="100px" class="mt10 agencySet w100"  ref="agentSet">
                    <el-form-item   :label="LANG['代理层级限制'] || '代理层级限制'" class="w50 fl" :rules="[{validator: checkNumber,trigger:'blur'}]"  :prop="'max_agent_levels'">
                        <el-input  type="number" v-model="agentSet.max_agent_levels" @change="showLevles"></el-input>
                    </el-form-item>
                </el-form>
                <el-form :model="agentSet" label-width="100px" ref="agentSet" class="mt10 agencySet w100 cl"  v-if="agentSet.max_agent_levels >=2 && agentSet.max_agent_levels <= 20">
                    <el-form-item class="w50 fl" v-for="item in levels" :key="item" :label="(LANG['下'] || '下') + ' ' + item + ' ' + (LANG['级'] || '级') "
                                  :rules="[{validator: validatorNumber,trigger:'blur'}]"
                                  :prop="'levels.level'+item"
                    >  <!--级别加1,去掉了-->
                        <el-input placeholder="请输入代理佣金百分比"s type="number" v-model="agentSet.levels[`level${item}`]" >
                            <template slot="append">%</template>
                        </el-input>
                    </el-form-item>
                </el-form>
            </el-col>
            <div class="formbtn tCent mt20">
                <el-button type="primary" @click="doCash">{{LANG['保存'] || '保存'}}</el-button>
                <el-button type="primary" :plain="true" @click="doRest">{{LANG['重置'] || '重置'}}</el-button>
            </div>
        </el-row>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                LANG,
                agentSet: {
                    minPay: '',
                    accountDate: '',
                    payType: '',
                    userBet: '',
                    monthDeposit: '',
	                max_agent_levels:'',
                    levels:{}
                },
                levels: [],
                dataList: [],
            }
        },
        components: {},
        methods: {
            init(){
                for (let i = 1; i < 31; i++) {
                    this.dataList.push({
                        "label": '每月',
                        "value": i.toString()
                    })
                };
                let levelUrl = URL.api + ROUTES.GET.commission.level;
                let _this = this;

                this.$.autoAjax('get',levelUrl,  '', {
                    ok: (res) => {
                        let oModel = res.data;
                        _this.agentSet.levels = {};
                        _this.agentSet.minPay = FORMATMONEY(oModel.minPay);
                        _this.agentSet.accountDate = oModel.accountDate;
                        _this.agentSet.payType = oModel.payType.toString()?oModel.payType.toString():'';
                        _this.agentSet.userBet = FORMATMONEY(oModel.userBet);
                        _this.agentSet.monthDeposit = FORMATMONEY(oModel.monthDeposit);
                        _this.agentSet.max_agent_levels = oModel.commission_level_percent.length;
                        let levels = this.agentSet.levels;
                        oModel.commission_level_percent.map((item,i)=>{
                            levels[`level${i+1}`] = item.value;
                        });
                        _this.showLevles(this.agentSet.max_agent_levels);
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
//                 this.$http.get(levelUrl, URLCONFIG).then((res) => {
//                     let oModel = res.data.data;
//                     _this.agentSet.levels = {};
//                     _this.agentSet.minPay = FORMATMONEY(oModel.minPay);
//                     _this.agentSet.accountDate = oModel.accountDate;
//                     _this.agentSet.payType = oModel.payType.toString()?oModel.payType.toString():'';
//                     _this.agentSet.userBet = FORMATMONEY(oModel.userBet);
//                     _this.agentSet.monthDeposit = FORMATMONEY(oModel.monthDeposit);
//                     _this.agentSet.max_agent_levels = oModel.commission_level_percent.length;
//                     let levels = this.agentSet.levels;
//                     oModel.commission_level_percent.map((item,i)=>{
//                         levels[`level${i+1}`] = item.value;
//                     });
//                     _this.showLevles(this.agentSet.max_agent_levels);
//                 }).catch(function (err) {
// //                    console.log(err)
//                 });
            },
            doCash(){
                this.$refs.agentSet.validate((valid) => {
                    if (valid) {
                        let formData = this.agentSet;
                        let newDatea = formData.levels;
                        let levels = this.levels;
                        let str = '';
                        for(let k=0; k<levels.length;k++){
                            if(newDatea[`level${k+1}`]){
                                str = str + `level${k+1}` + ":" + newDatea[`level${k+1}`] + ",";
                            }
                        }

                        str = str.substring(0,str.length-1);
                        let newFormDate = {
                            minPay: this.agentSet.minPay*100,
                            accountDate: this.agentSet.accountDate,
                            // payType: this.agentSet.payType,
                            userBet: this.agentSet.userBet*100,
                            monthDeposit: this.agentSet.monthDeposit*100,
                            commission_level_percent: str
                        }
                        let levelUrl = URL.api + ROUTES.PUT.commission.level;

                        this.$.autoAjax('put',levelUrl, newFormDate, '', {
                            ok: (res) => {
                                if (res.data) {
                                    this.$message.success(this.LANG['保存成功'] || '保存成功');
                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
//                         this.$http.put(levelUrl, newFormDate, URLCONFIG).then((res) => {
//                             if (res.data.data) {
//                                 this.$message.success(this.LANG['保存成功'] || '保存成功');
//                             }
//                         }).catch(function (err) {
// //                            console.log(err)
//                         });
                    }
                })
            },
            doRest(){
                this.init();
                this.$message('重置成功!')
            },
            validatorNumber(rule, value, callback) {
                if (parseInt(value) < 0  ||  parseInt(value) > 50) {
                    callback(new Error(LANG['百分比在0到50之间'] || '百分比在0到50之间'));
                } else {
                    callback()
                }
            },
            checkNumber(rule, value, callback){
                if (parseInt(value) < 2 ||  parseInt(value) > 20) {
                    callback(new Error(LANG['层级在2到20之间'] || '层级在2到20之间'));
                } else {
                    callback()
                }
            },
            // 显示设置层级
            showLevles(num){
                let max = num ? num : this.agentSet.max_agent_levels;
                this.levels.splice(0,this.levels.length);
                let numb = parseInt(max);
                let agentlevels = this.agentSet.levels;
                for(let k = 0; k < numb; k++){
                    this.levels.push(k+1);
                    if(!agentlevels[`level${k+1}`]){
                        agentlevels[`level${k+1}`] = 0;
                    }
                }
            }
        },
        created(){
            this.init();
        }
    }
</script>
<style scoped>
    #agentSet .setPlaySel .el-input__inner {
        height: 30px;
    }

    #agentSet .agencySet {
        float: left;
    }

    #agentSet .setPlay {
        border: 1px solid #e0e6ed;
        box-sizing: border-box;
        width: 46%;
        margin-left: 2.8%;
        padding: 2%;
    }

    #agentSet .mainStyle {
        border: 1px solid #D3DCE6;
        margin: 10px 0;
        padding: 20px 0;
    }
</style>
