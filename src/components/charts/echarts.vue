<template>
    <div class="chart">
        <el-row :gutter="22">
            <el-col :class="domName" style="height:400px;"></el-col>
        </el-row>
    </div>
</template>

<script>
    import echarts from 'echarts';
    export default{
        data(){
            return {
                chartZxt: null,
                chartMobile: null,
                chartGame: null
            }
        },
        props:{
            //DOM样式名
            domName: {
                type: String,
                default: ""
            },
            //图表类型
            type: {
                type: String,
                default: ""
            },
            //数据源列表
            titleList: {
                type: Array,
                default: () => { return [];}
            },
            //图表数据
            dataList: [Array,Object],
            //数据源配置
            dataConfig:{
                type: Array,
                default: () => { return [];}
            },
            colors:{
                type: Array,
                default: () => { return ['#13CE66','#09b3cc','#fc5a58','#fd8560','#f8a72b','#01b68d','#2b8fda','#ad8ce5','#ff5c91','#cccccc']}
            },
            updateData: Boolean
        },
        components: {
        },
        methods: {
            init(){
                this.chartZxt = echarts.init(document.getElementsByClassName(this.domName)[0]);
                this.chartZxt.setOption(this.chartConfig());
            },
            chartConfig(){
                let obj = {};
                let model = this.titleList;
                if(this.type === "line"){
                    //曲线图
                    //鼠标移上效果
                    obj.tooltip = {trigger: 'axis'};
                    obj.legend = {data: []};
                    //写图表数据类型
                    for(let k in model){
                        obj.legend.data.push(model[k]);
                    }
                    //样式，边框
                    obj.grid= {left: '3%',right: '4%',bottom: '3%',containLabel: true};
                    //X柚配置
                    let xArr = this.dataConfig;
                    let list1 = this.dataList[this.dataConfig[0]];
                    obj.xAxis = {
                        data: []};
                    for(let i in list1){
                        obj.xAxis.data.push(list1[i]);
                    }
                    //Y柚  设置
                    obj.yAxis = {splitLine: {show: true}};
                    //曲线图值数据
                    obj.series = [];
                    //根据配置写数据
                    for(let i=0;i< this.titleList.length; i ++ ){
                        obj.series.push({
                            name: this.titleList[i],
                            type: 'line',
                            stack: null,
                            itemStyle: {normal: {color: this.colors[i-1]}},
                            data: []
                        });
                        let arr1 = this.dataList[this.dataConfig[parseInt(i)+1]] || [];
                        for(let k in arr1){
                            obj.series[i].data.push(arr1[k]);
                        }
                    }
                }else if(this.type === "round"){
                    //环形图
                    //鼠标移上效果
                    obj.tooltip = { trigger: 'item',formatter: "{a} <br/>{b}: {d}%"};
                    obj.legend = {
                        orient: 'vertical',//垂直
                        x : 'left',//方向
                        data: []
                    };
                    //写图表数据类型
                    for(let k in model){
                        obj.legend.data.push(model[k]);
                    }
                    // 写图表数据
                    obj.series = [];
                    obj.series[0] = {
                        name: LANG["当前占比"] || "当前占比",
                        type: 'pie',
                        radius: ['80%', '30%'],//左为外半径，右边为内半径
//                        center: ['50%', '60%'],//位置
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '24',
                                    fontWeight: '600'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    };
                    //根据配置写数据
                    let list = this.dataList[0] || [];
                    let list1 = this.dataList[1] || [];
                    for(let i=0;i< list.length; i ++ ){
                        obj.series[0].data.push({
                            value: list1[i],
                            name: list[i],
                            itemStyle: {normal: {color: this.colors[i]}}
                        });
                    }
                }else if(this.type === "histogram"){
                    //柱状图
                    obj.color = this.colors;   //颜色数组
                    obj.tooltip ={
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    };
                    obj.legend = {data:[]};
                    //写图表数据类型
                    for(let k in model){
                        obj.legend.data.push(model[k]);
                    }
                    obj.grid= {left: '3%',right: '4%', bottom: '3%',containLabel: true}
                    obj.xAxis =[];
                    obj.xAxis = {
                        type : 'category',
                        data: []
                    };
                    let xArr = this.dataList[this.dataConfig[0]][0] || [];
                    for(let j in xArr){
                        obj.xAxis.data.push(xArr[j])
                    }
                    obj.yAxis =[{ type : 'value'}];
                    obj.series = [];
                    for(let m=0;m<this.titleList.length; m++){
                        obj.series.push({
                            name: this.titleList[m],
                            type:'bar',
                            data: this.dataList[this.dataConfig[m]][1]
                        });
                    }
                }
                return obj;
            }
        },
        mounted: function () {
            // 线形图
            this.init();
        },
        watch:{
            updateData:function (newVal) {
                if(newVal){
                    this.init();
                }else{
                    this.init();
                }
            }
        },
        created(){
        }
    }
</script>

<style scoped>
    .w18 {
        width: 18%;
    }

    /*.fontStyel{font-size:24px;font-weight:700;}*/
    .chart {
        width: 100%;
        float: left;
    }

    #userEchat, #noteEchat, #mobileEchat, #gameEchat {
        background: #fff !important;
        width: 49%;
    }
    .chart .sortData{ background: #fff;margin-left:5%;}
    .chart .sortData:first-child{margin-left:0;}
    #noteEchat, #gameEchat {
        margin-left: 2%
    }

    .chart .indexData, .chart .noteData {
        background: #fff;
        border: 1px solid #eee;
        padding: 20px 0;
    }

    .chart .noteData p:first-child, .chart .indexData p:first-child {
        font-size: 24px;
        font-weight: 700;
    }

    .chart .noteData {
        margin-left: 5%;
    }

    .chart .noteData:first-child {
        margin-left: 0;
    }

    .chart .indexData {
        margin-left: 2.5%;
    }

    .chart .indexData:first-child {
        margin-left: 0;
    }
</style>