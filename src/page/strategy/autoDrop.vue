<template>
    <div id="index">

            <el-row>
                <el-col :span="2">
                    <div class="grid-content bg-purple-dark " style="color: #324057">{{warnTitle}}</div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple-dark " style="color: #324057">
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                @change="change">
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
            <el-row >
                <el-col :span="24">
                    <tablegrid
                            :columnsUrl="columnsUrl"
                            :tableUrl="tableUrl"
                            :tableCheck="false"
                            :tableIndex="false">

                    </tablegrid>
                </el-col>
        </el-row>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    export default{
        data(){
            return {
                warnTitle: '彩种名称',
                options: [],
                value: '',
                palyType: '',
                nowPlayType: '',
                columnsUrl: '',
                tableUrl: '',
                baseUrl: '',
            }

        },
        components: {
            tablegrid: tableGrid,
        },
        methods: {
           init(){
               this.playType = "彩票标准玩法";
               this.nowPlayType = "lottery";
               this.columnsUrl="/static/json/Note/lottery/columns1.json";
               this.tableUrl="/static/json/Note/lottery/tableDate2.json";
               // 获取彩票种类
                let lotteryUel = URL.api + '/lottery/types';
                this.$http.get(lotteryUel,URLCONFIG).then((res) => {
                    let  model = res.data.data
                    for(let i in model){
                        this.options.push({
                            "label":model[i].name,
                            "value":model[i].id
                        })
                    }
                })
           },
           change() {

           }
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
</style>