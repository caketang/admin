<template>
    <div id="demo7">
        <!--曲线图-->
        <tubiao :domName="domName" :type="type" :titleList="titleList" :dataList="dataList" :dataConfig="dataConfig"></tubiao>
        <!--环形图-->
        <tubiao :domName="roundName" :type="typeRound" :titleList="roundtitleList" :dataList="roundDataList" :dataConfig="roundDataConfig"></tubiao>
        <!--柱状图-->
        <tubiao :domName="histogramName" :type="typeHistogram" :titleList="histogramTitleList" :dataList="histogramDataList" :dataConfig="histogramDataConfig"></tubiao>
    </div>
</template>
<script>
    import tubiao from '../../components/charts/echarts.vue';
    export default{
        data(){
            return {
                //线形图
                domName: "line",
                type: "line",
                titleList: ["业务1","业务2","业务3","业务4"],
                dataList:[{day: ["2017-04-10", "2017-04-11", "2017-04-12", "2017-04-13", "2017-04-14"]},
                    {deposit:[65487, 54871, 64487, 65487, 65489]},
                    {newly:[200, 210, 220, 200, 20]},
                    {orders:[54873, 65497, 50871, 54871, 51871]},
                    {total:[265431, 265421, 265531, 265431, 262331]}],
                dataConfig:["day","deposit","newly","orders","total"],
                //环形图
                roundName: "round",
                typeRound: "round",
                roundtitleList: ["h5","pc","mobile"],
                roundDataList:[["h5","pc","mobile"],[93,8000,50]],
                //柱状图
                histogramName: "histogram",
                typeHistogram: "histogram",
                histogramTitleList: ["游戏下单数","游戏下注金额","游戏盈亏金额"],
                histogramDataList:{
                    "orders": [["体育","彩票","MG","AG"],
                        [1,95,0,4]],
                    "amount": [["体育","彩票","MG","AG"],
                        [1,91,0,7]],
                    "profit": [["体育", "彩票","MG","AG"],
                        [-2,73,-11,41]]
                },
                histogramDataConfig:["orders","amount","profit"]
            }
        },
        components: {
            tubiao:tubiao
        },
        methods: {},
        computed: {},
        mounted(){
        },
        created(){
        }
    }
</script>
<style>
</style>