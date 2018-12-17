<template>
    <div id="app" style="margin-top: 100px;">
        <userLevelSet :editForm="editForm"></userLevelSet>
    </div>
</template>
<script>
    import userLevelSet from '../../components/userLevelSet.vue'
    export default{
        data(){
            return{
                //币种
                currencyList:[],
                //币种表单
                editForm:{
                    deposit:{
                        online_min: 50,
                        offline_min: 50,
                        online_max: 5000,
                        offline_max: 5000,
                        online_bet: 1,
                        offline_bet: 1,
                        wechat_per: 5,
                        alipay_per: 5
                    },
                    withdraw: {
                        with_min: 50,
                        with_times: 5,
                        with_max: 5000,
                        non_fee_times: 5,
                        admin_per: 20,
                        admin_max: 1000,
                        with_per: 5,
                        non_check: 500
                    },
                    company_with_coupon: {
                        first_discount: {
                            selected: true,
                            check: "fixed",
                            fixed_bonus: 100,
                            depo_per: "",
                            limit: "",
                            with_condition: 5
                        },
                        every_time_discount: {
                            selected: true,
                            check: "percent",
                            fixed_bonus: "",
                            depo_per: 1,
                            limit: 500,
                            with_condition: 5
                        },
                        give_up_discount: {
                            selected: true
                        }
                    },
                }
            }
        },
        components: {
            userLevelSet:userLevelSet
        },
        methods: {

        },
        created() {}
    }
</script>
<style scoped>
    .vipDialog .el-form-item__content {
        margin: 0 auto;
    }

    .vipDialog .grid-content {
        line-height: 36px;
        text-align: right;
        padding-right: 8px;
    }

    .vipDialog .el-dialog {
        min-width: 860px;
    }

    .vipDialog .groupBuying {
        width: auto;
        max-width: 80px;
    }

    .el-row {
        margin-bottom: 20px;

    &
    :last-child {
        margin-bottom: 0;
    }

    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .mb20 div{margin:20px 0;}
    .fastAct .actInput{float:left;margin-left:20px;}
    .fastAct .actInput:first-child{margin-left: 0;}
</style>