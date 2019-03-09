<template>
    <div id="lotteryResults">
        <el-row>
            <el-col :span="12" class="pb">
                <div>
                    <span>{{LANG["彩种名称"] || "彩种名称"}}</span>
                    <el-select v-model="lottery_id" placeholder="请选择" @change="changeLottery" style="width: 200px;">
                        <el-option style="width:200px;"
                                   v-for="item in lotteryTypeList"
                                   :label="item.name"
                                   :key="item.id"
                                   :value="item.id">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
            <el-col :span="12" class="manualAward">
                <div class="manualAwardBtn">
                    <el-button class="" type="primary" @click="awardButton">手动派彩</el-button>
                </div>
                <div>
                    <el-dialog
                        title="提示"
                        :visible.sync="dialogVisible"
                        size="tiny"
                        :before-close="handleClose">
                        <el-form ref="form" :model="manualAward" label-width="80px">
                            <el-form-item label="彩种名称">
                                <el-select class="inputW" v-model="manualAward.lottery_id" placeholder="请选择彩种名称">
                                    <el-option :label="item.label" :value="item.value" v-for="item,index in lotteryList" :key="index"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="彩期">
                                <el-input class="inputW" type="number" v-model="manualAward.lottery_number"></el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="manualAwardSubmit">确 定</el-button>
                    </span>
                    </el-dialog>
                </div>
            </el-col>
        </el-row>
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

    export default {
        data() {
            return {
                LANG,
                //数据接口地址
                tableUrl: "",
                baseUrl: "",
                //列配置接口地址
                columnsUrl: "",
                //搜索条件
                lottery_id: "",
                lotteryTypeList: [],
                manualAward: {
                    lottery_number: '',
                    lottery_id: ''
                },
                lotteryList: [],
                dialogVisible: false
            }
        },
        components: {
            tableGrid: tableGrid
        },
        methods: {
            init() {
                let _this = this;
                _this.lotteryList = [];
                _this.dialogVisible = false
                this.columnsUrl = "/static/json/lotteryNew/lotterytResults/columns.json";
                this.baseUrl = URL.api + ROUTES.GET.lottery.result;
                //获取彩种列表
                let url = URL.api + ROUTES.GET.lottery.types.$;
                this.$.autoAjax('get', url, '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            let model = res.data || [];
                            let num = 0;
                            model.forEach((item) => {
                                _this.lotteryList.push({
                                    "label": item.name,
                                    "value": item.id.toString(),
                                    "pid": item.pid
                                })
                            })
                            _this.lotteryTypeList = [];
                            for (let k in model) {
                                if (model[k].pid != 0) {
                                    num = num + 1;
                                    if (num === 1) {
                                        _this.lottery_id = parseInt(model[k].id).toString();
                                        _this.tableUrl = _this.baseUrl + "?lottery_id=" + _this.lottery_id;
                                    }
                                    _this.lotteryTypeList.push({
                                        "name": model[k].name,
                                        "id": model[k].id.toString()//id为38 是香港六合彩
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
            },
            //查询
            changeLottery(val) {
                this.lottery_id = val;
                this.tableUrl = this.baseUrl + "?lottery_id=" + parseInt(val);
            },
            awardButton() {
                this.dialogVisible = true
            },
            handleClose(){
                this.dialogVisible = false
            },
            manualAwardSubmit() {
                let _this = this
                this.$.autoAjax('patch', URL.api + ROUTES.PATCH.lottery.handSettle, this.manualAward, {
                    ok:v=>{
                        v.state === 0&&v.data
                            ? _this.$message.success('手动派彩成功')
                            : _this.$message.error('手动派彩失败')
                    }
                })
                this.dialogVisible = false
            }
        },
        created() {
            this.init();
        }
    }
</script>
<style scoped>
    .manualAward .manualAwardBtn{
        text-align: right;
    }
    .inputW{
        width: 85%;
    }
</style>
