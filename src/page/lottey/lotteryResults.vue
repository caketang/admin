<template>
    <div id="lotteryResults">
        <el-col class="pb">
            <span>{{LANG["彩种名称"] || "彩种名称"}}</span>
            <el-select v-model="lottery_id" placeholder="请选择" @change="changeLottery" style="width: 200px;">
                <el-option style="width:200px;"
                           v-for="item in lotteryTypeList"
                           :label="item.name"
                           :key="item.id"
                           :value="item.id">
                </el-option>
            </el-select>
        </el-col>
        <el-col>
            <tableGrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :pageSet="true"
                    :showRefresh="false"
                    :tableIndex="false">
            </tableGrid>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue';
    export default{
        data(){
            return {
                LANG,
                //数据接口地址
                tableUrl: "",
                baseUrl: "",
                //列配置接口地址
                columnsUrl: "",
                //搜索条件
                lottery_id: "",
                lotteryTypeList: []
            }
        },
        components: {
            tableGrid:tableGrid
        },
        methods: {
            init(){
                let _this = this;
                this.columnsUrl = "/static/json/lotteryNew/lotterytResults/columns.json";
//                this.tableUrl = URL.api + ROUTES.GET.lottery.result;
                this.baseUrl = URL.api + ROUTES.GET.lottery.result;

                //获取彩种列表
                let url = URL.api + ROUTES.GET.lottery.types.$;

                this.$.autoAjax('get',url, '', {
                    ok: (res) => {
                        if(res.state == 0 && res.data){
                            let model = res.data || [];
                            let num = 0;
                            _this.lotteryTypeList = [];
                            for(let k in model){
                                if(model[k].pid != 0){
                                    num = num + 1;
                                    if(num === 1){
                                        _this.lottery_id = parseInt(model[k].id).toString();
                                        _this.tableUrl = _this.baseUrl + "?lottery_id=" + _this.lottery_id ;
                                    }
                                    _this.lotteryTypeList.push({
                                        "name":model[k].name,
                                        "id":model[k].id.toString()//id为38 是香港六合彩
                                    });
                                }
                            }
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.get(url,URLCONFIG).then((res) => {
                //     if(res.data.state == 0 && res.data.data){
                //         let model = res.data.data || [];
                //         let num = 0;
                //         _this.lotteryTypeList = [];
                //         for(let k in model){
                //             if(model[k].pid != 0){
                //                 num = num + 1;
                //                 if(num === 1){
                //                     _this.lottery_id = parseInt(model[k].id).toString();
                //                     _this.tableUrl = _this.baseUrl + "?lottery_id=" + _this.lottery_id ;
                //                 }
                //                 _this.lotteryTypeList.push({
                //                     "name":model[k].name,
                //                     "id":model[k].id.toString()//id为38 是香港六合彩
                //                 });
                //             }
                //         }
                //     }
                // })
            },
            //查询
            changeLottery(val){
                this.lottery_id = val;
                this.tableUrl = this.baseUrl + "?lottery_id=" + parseInt(val) ;
            }
        },
        created(){
            this.init();
        }
    }
</script>
<style>
</style>
