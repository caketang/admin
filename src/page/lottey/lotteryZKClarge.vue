<template>
    <div id="lotteryZKCprophesy" class="w100">
        <el-card>
            <el-tabs v-model="lotteryData.lottery_type" @tab-click="handleClick">
                <el-tab-pane :label="item.lottery_name" :name="item.lottery_type" v-for="item,key in gameList"
                             :key="key">
                </el-tab-pane>
            </el-tabs>
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
            <el-col>
                <ZKClargeNote :columnsUrl="columnsUrl" :tableUrl="tableUrl" :lotteryData="lotteryData"></ZKClargeNote>
            </el-col>
        </el-card>
    </div>
</template>
<script>
    import formEdit from '../../components/formEdit.vue'
    import ZKClargeNote from './ZKClargeNote.vue'

    export default {
        data() {
            return {
                LANG,
                //表格列数据
                columnsUrl: "",
                tableUrl:'',
                //表格数据
                lotteryData: {
                    lottery_type: '',
                    user_name: '',
                    pay_money:''
                },
                gameList: [],
                //条件搜索
                formType: "",
                type: "search",
                labelWidth: "90px",
                //搜索相关
                searchConfig: [
                    {"prop": "user_name", "value": "", "label": "玩家账号", "type": "text"},
                    {"prop": "pay_money", "value": "", "label": "投注金额 ≥", "type": "number"},
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
            ZKClargeNote: ZKClargeNote
        },
        methods: {
            init() {
                let _this = this;
                this.columnsUrl="static/json/lotteryNew/ZKClarge/columns.json";
                //获取自开彩的彩种
                this.$.autoAjax('get', URL.api + '/plottery/menu', '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            this.gameList = res.data;
                            //默认选中第一个
                            this.lotteryData.lottery_type = res.data[0].lottery_type;
                            this.tableUrl = URL.api + '/plottery/bet'+this.addSearch(this.lotteryData)
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
                console.log(obj)
                this.lotteryData.user_name = obj.item.user_name,
                this.lotteryData.pay_money = obj.item.pay_money*100,
                this.tableUrl = URL.api + '/plottery/bet' + this.addSearch(this.lotteryData)
            },
            resetForm() {
            },
            handleClick(value) {
                this.lotteryData.lottery_type = value.name;
                this.tableUrl = URL.api + '/plottery/bet' + this.addSearch(this.lotteryData)
            },
        },
        created: function () {
            this.init()
        }
    }
</script>
<style scopend>

</style>
