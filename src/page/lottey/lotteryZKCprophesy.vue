<template>
    <div id="lotteryZKCprophesy" class="w100">
        <el-card>
            <el-tabs v-model="lotteryData.lottery_type" @tab-click="handleClick(lotteryData.lottery_type)">
                <el-tab-pane :label="item.lottery_name" :name="item.lottery_type" v-for="item,key in gameList"
                             :key="key">
                </el-tab-pane>
            </el-tabs>
            <!--搜索-->
            <!--<el-col>-->
                <!--<formEdit :formVisible="formVisible"-->
                          <!--:formConfig="searchConfig"-->
                          <!--:type="type"-->
                          <!--:labelWidth="labelWidth"-->
                          <!--@do-query="doQuery"-->
                          <!--:isEdit="isEdit"-->
                          <!--@reset-form="resetForm"-->
                          <!--:formReset="formReset"-->
                          <!--:formType="formType"-->
                          <!--:showAdd="false"-->
                <!--&gt;</formEdit>-->
            <!--</el-col>-->
            <el-col>
                <LotteryNote :columnsUrl="columnsUrl" :tableUrl="tableUrl" :lotteryData="lotteryData"></LotteryNote>
            </el-col>
        </el-card>
    </div>
</template>
<script>
    import formEdit from '../../components/formEdit.vue'
    import LotteryNote from './lotteryZKCnote.vue'

    export default {
        data() {
            return {
                LANG,
                //表格列数据
                columnsUrl: "",
                //表格数据
                tableUrl: "",
                lotteryData: {
                    lottery_type: '',
                    lottery_number: '',
                },
                gameList: [],
            }
        },
        components: {
            formEdit: formEdit,
            LotteryNote: LotteryNote
        },
        methods: {
            init() {
                let _this = this;
                this.columnsUrl = "static/json/lotteryNew/lotteryZKCprophesy/columns.json";
                //获取自开彩的彩种
                this.$.autoAjax('get', URL.api + '/plottery/menu', '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            this.gameList = res.data;
                            //默认选中第一个
                            this.lotteryData.lottery_type = res.data[0].lottery_type;
                            this.tableUrl = URL.api + '/plottery/presetlist?id=' + res.data[0].lottery_type
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
                let j = obj.item;
                j.id = this.lotteryData.lottery_type
                this.tableUrl = URL.api + '/plottery/presetlist' + this.addSearch(j)
                console.log(j)
            },
            resetForm() {
            },
            handleClick(value) {
                this.formReset = true
                this.lotteryData.lottery_type = value;
                this.tableUrl = URL.api + '/plottery/presetlist' + this.addSearch({
                    id: value,
                })
            },
            doHandle() {
            }
        },
        created: function () {
            this.init()
        }
    }
</script>
<style scopend>

</style>
