<!--<template>-->
    <!--<div id="agentAccountDetail">-->
        <!--<div  @click="returnPage">-->
            <!--<a href="javascript:;">-->
                <!--<el-button type="primary" icon="arrow-left" size="small">{{LANG['返 回'] || '返 回'}}</el-button>-->
            <!--</a>-->
        <!--</div>-->
        <!--<el-tabs v-model="activeName" type="card" @tab-click="tabClick" class="mt20">-->
            <!--<el-tab-pane :label="LANG['基本资料'] || '基本资料'" name="basicInformation">-->
                <!--<basicInformation :id="agentId"  ></basicInformation>-->
            <!--</el-tab-pane>-->
            <!--<el-tab-pane :label="LANG['推广信息'] || '推广信息'" name="accountBalance">-->
                <!--<accountBalance :id="agentId"></accountBalance>-->
            <!--</el-tab-pane>-->
            <!--<el-tab-pane :label="LANG['帐户余额'] || '帐户余额'" name="bankDetial">-->
                <!--<bankDetial :id="agentId"></bankDetial>-->
            <!--</el-tab-pane>-->
            <!--<el-tab-pane :label="LANG['代理佣金'] || '代理佣金'" name="agentCommission" v-if="agentType == 2">-->
                <!--<agentCommission :id="agentId" v-if="agentType == 2"></agentCommission>-->
            <!--</el-tab-pane>-->
        <!--</el-tabs>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--import basicInformation from './basicInformation.vue'-->
    <!--import accountBalance from './accountBalance.vue'-->
    <!--import bankDetial from './bankDetial.vue'-->
    <!--import agentCommission from './commission.vue'-->
    <!--export default{-->
        <!--data(){-->
            <!--return{-->
                <!--LANG,-->
                <!--activeName:"basicInformation"-->
            <!--}-->
        <!--},-->
        <!--props:{-->
            <!--agentId:{ // 获取代理id-->
                <!--type:Number,-->
                <!--required: true,-->
                <!--validator: function (value) {-->
                    <!--return value >= 0 -->
                <!--}-->
            <!--},-->
            <!--agentType: { // 获取代理类型-->
                <!--type:Number,-->
                <!--required: true,-->
                <!--validator: function (value) {-->
                    <!--return value == 1 || value ==2-->
                <!--}-->
            <!--},-->
        <!--},-->
        <!--components: {-->
            <!--basicInformation:basicInformation,-->
            <!--accountBalance:accountBalance,-->
            <!--bankDetial:bankDetial,-->
            <!--agentCommission: agentCommission-->
        <!--},-->
        <!--methods: {-->
            <!--//返回主页面-->
            <!--returnPage(){-->
                <!--this.$emit('return-page')-->
            <!--},-->
            <!--//TAB切换事件-->
            <!--tabClick(){-->

            <!--},-->

        <!--}-->
    <!--}-->
<!--</script>-->
<!--<style scoped>-->
    <!--#agentAccountDetail{background: #fff;}-->
    <!--.mt20{margin-top:20px}-->


<!--</style>-->
