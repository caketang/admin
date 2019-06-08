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
                    <el-button type="primary" @click="awardButton">手动派彩</el-button>
                    <el-button type="primary" @click="editButton">修改开奖结果</el-button>
                    <el-button type="primary" @click="reSettleButton">重置开奖结果</el-button>
                </div>
                <div>
                    <el-dialog
                        :title="{'0':'手动派彩','1':'修改开奖结果','2':'重置派彩'}[editShow]||'0'"
                        :visible.sync="dialogVisible"
                        size="tiny"
                        :before-close="handleClose">
                        <el-form ref="form" :model="manualAward" label-width="80px" v-if="editShow=='0'||editShow=='2'">
                            <el-form-item label="彩种名称">
                                <el-select class="inputW" v-model="manualAward.lottery_id" placeholder="请选择彩种名称">
                                    <el-option :label="item.label" :value="item.value" v-for="item,index in lotteryList" :key="index"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="彩期">
                                <el-input class="inputW" type="number" v-model="manualAward.lottery_number"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-form ref="form" :model="editResult" label-width="80px" v-else-if="editShow=='1'">
                            <el-form-item label="彩种名称">
                                <el-select class="inputW" v-model="editResult.lottery_type" placeholder="请选择彩种名称">
                                    <el-option :label="item.label" :value="item.value" v-for="item,index in lotteryList" :key="index"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="彩期">
                                <el-input class="inputW" type="number" v-model="editResult.lottery_number"></el-input>
                            </el-form-item>
                            <el-form-item label="开奖结果">
                                <el-input class="inputW" type="text" v-model="editResult.period_code" placeholder="开奖结果请用英文逗号隔开"></el-input>
                                <p class="help_gray">*提示：开奖结果请用英文逗号隔开</p>
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
                :updated="updated"
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
                updated:false,
                //列配置接口地址
                columnsUrl: "",
                //搜索条件
                lottery_id: "",
                lotteryTypeList: [],
                manualAward: {
                    lottery_number: '',
                    lottery_id: ''
                },
                editResult:{
                    lottery_number:"",
                    lottery_type : "",
                    period_code:""
                },
                lotteryList: [],
                dialogVisible: false,
                editShow:'0',//字符串0，手动派奖，1是修改开奖结果，2是重置
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
                this.editShow = '0'
            },
            editButton(){
                this.dialogVisible = true
                this.editShow = '1'
            },
            reSettleButton(){
                this.dialogVisible = true
                this.editShow = '2'
            },
            handleClose(){
                this.dialogVisible = false
            },
            manualAwardSubmit() {
                let _this = this//lottery.setResult
                switch(_this.editShow){
                    case '0':
                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.lottery.handSettle, _this.manualAward, {
                            ok:v=>{
                                v.state === 0&&v.data
                                    ? _this.$message.success('手动派彩成功')
                                    : _this.$message.error('手动派彩失败')
                            }
                        })
                        break;
                    case '1':
                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.lottery.setResult, _this.editResult, {
                            ok:v=>{
                                v.state === 0&&v.data
                                    ? _this.$message.success('修改开奖结果成功')
                                    : _this.$message.error('修改开奖结果失败')
                            }
                        })
                        break;
                    case '2':
                        this.$.autoAjax('patch', URL.api + ROUTES.PATCH.lottery.reSettle, _this.manualAward, {
                            ok:v=>{
                                v.state === 0&&v.data
                                    ? _this.$message.success('重置派彩成功')
                                    : _this.$message.error('重置派彩失败')
                            }
                        })
                        break;
                }
                _this.updated = true
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
