
<template>
    <div id="ZKCstatement" class="w100">
        <el-card>
            <el-tabs v-model="seachData.lottery_type" @tab-click="handleClick">
                <el-tab-pane :label="item.lottery_name" :name="item.lottery_type" v-for="item,key in gameList"
                             :key="key">
                </el-tab-pane>
            </el-tabs>
            <!--搜索-->
            <el-col>
                <formEdit :formVisible="formVisible"
                          :formConfig="searchConfig"
                          :type="type"
                          :labelWidth="labelWidth"
                          @do-query="doQuery"
                          :isEdit="isEdit"
                          @reset-form="resetForm"
                          :formReset="formReset"
                          :formType="formType"
                          :showAdd="false"
                ></formEdit>
            </el-col>
            <el-col>
                <Note :columnsUrl="columnsUrl" :tableUrl="tableUrl" :lotteryData="seachData"></Note>
            </el-col>
        </el-card>
    </div>
</template>
<script>
    import formEdit from '../../components/formEdit.vue'
    import Note from './ZKCnote.vue'

    export default {
        data() {
            return {
                LANG,
                //表格列数据
                columnsUrl: "",
                //表格数据
                tableUrl: "",
                //seach
                seachData:{
                    start_time: "",
                    end_time: "",
                    lottery_number: "",
                    lottery_type: ""
                },
                //游戏列表
                gameList: [],
                //条件搜索
                formType: "",
                type: "search",
                labelWidth: "90px",
                //搜索相关
                searchConfig: [
                    {"type": "quickDate", "showTimes": true},//快捷日期
                    {
                        "type": "dateTimeGroup",
                        "label": "日期",
                        "prop": [{"prop": "date_from", "value": "", "label": "开始时间"}, {
                            "prop": "date_to",
                            "value": "",
                            "label": "结束时间"
                        }]
                    },
                    {"prop": "lottery_number", "value": "", "label": "期号", "type": "number"},
                ],
                formVisible: {
                    state: false
                },
                LANG,
                isEdit: {
                    state: false
                },
                formReset: false,
            }
        },
        components: {
            formEdit: formEdit,
            Note: Note
        },
        methods: {
            init() {
                let _this = this;
                this.columnsUrl = "static/json/lotteryNew/ZKCstatement/columns.json";
                //获取自开彩的彩种
                this.$.autoAjax('get', URL.api + '/plottery/menu', '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            this.gameList = res.data;
                            this.seachData.start_time = sessionStorage.dateTimeStart
                            this.seachData.end_time = sessionStorage.dateTimeEnd
                            //默认选中第一个
                            this.seachData.lottery_type = res.data[0].lottery_type;
                            console.log(this.seachData)
                            this.tableUrl = URL.api + '/plottery/report'+ this.addSearch(this.seachData)
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            doQuery(obj) {
                this.seachData.start_time = obj.item.date_from
                this.seachData.end_time = obj.item.date_to
                this.seachData.lottery_number = obj.item.lottery_number
                this.tableUrl = URL.api + '/plottery/report' + this.addSearch(this.seachData)
            },
            resetForm() {
            },
            handleClick(value) {
                this.seachData.lottery_type = value.name
                this.tableUrl = URL.api + '/plottery/report' + this.addSearch(this.seachData)
            },
        },
        created: function () {
            this.init()
        }
    }
</script>
<style scopend>

</style>
