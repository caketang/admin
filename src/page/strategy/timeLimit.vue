<template>
    <div id="index">

        <el-row>
                <formEdit
                        :formTitel="formTitel"
                        :formVisible="formVisible"
                        :formConfig="searchConfig"
                        :type="type"
                        :isEdit="isEdit"
                        :labelWidth="labelWidth">
                </formEdit>
            <!-- </el-col> -->
        </el-row>
        <el-row >
            <el-col :span="24">
                <tableGrid
                        :columnsUrl="columnsUrl"
                        :tableUrl="tableUrl"
                        :tableCheck="false"
                        :tableIndex="false">
                </tableGrid>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import formEdit from '../../components/formEdit.vue'
    import tableGrid from '../../components/tableGrid.vue'
    export default{
        data(){
            return {
                columnsUrl: '',
                tableUrl: '',
                baseUrl: '',
                // 搜索框配置
                type: 'search',
                searchConfig: [
                    {
                        "prop":"lottery_id", "value":"", "label":"彩种", "type":"select",
                        "list":[
                            {"label":"11选5", "value": 0},
                            {"label":"广东11选5", "value": 1},
                            {"label":"实时彩票", "value": 2},
                            {"label":"重庆实时彩票", "value": 3},
                            {"label":"快三", "value": 4}
                        ]
                    },
                    {
                        "prop":"issue_no", "value":"", "label":"期号", "type":"select",
                        "list": []
                    },
                    {
                        "prop":"keywords", "value":"", "label":"关键字", "type":"text"
                    },
                    {
                        "prop":"state", "value":"", "label":"状态", "type":"select",
                        "list": [
                            {"label":"停售", "value": "stop"},
                            {"label":"已开奖", "value": "open"},
                            {"label":"有效", "value": "valid"}
                        ]
                    }

                ],
                formTitel : "",
                labelWidth : "90px",
                formVisible : {
                    state : false
                },
                isEdit : {},
            }

        },
        components: {
            tableGrid: tableGrid,
            formEdit: formEdit
        },
        methods: {
            init(){
                this.playType = "彩票标准玩法";
                this.nowPlayType = "lottery";
                this.columnsUrl="/static/json/Note/lottery/columns2.json";
                this.tableUrl= URL.api + '/system/risk.limit';
                // 获取彩票种类
                let lotteryUel = URL.api + '/lottery/types';
                this.$http.get(lotteryUel,URLCONFIG).then((res) => {
                    let  model = res.data.data
                    for(let i in model){
                        this.searchConfig[0].list.push({
                            "label":model[i].name,
                            "value":model[i].id
                        })
                    }
                })
                // 获取期号
                let issueUrl = URL.api + '/lottery/order.period';
                this.$http.get(issueUrl,URLCONFIG).then((res) => {
                    let  model = res.data.data
                    for(let i in model){
                        this.searchConfig[0].list.push({
                            "label":model[i].name,
                            "value":model[i].id
                        })
                    }
                })
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