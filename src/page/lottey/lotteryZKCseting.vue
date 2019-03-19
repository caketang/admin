<template>
    <div id="lotteryZKCseting" class="lotteryZKCseting w100">
        <el-col :span="24">
            <tablegrid
                :columnsUrl="columnsUrl"
                :tableUrl="tableUrl"
                :updated="updated"
                :autoshowRefresh="true"
                @do-handle="doHandle"></tablegrid>
        </el-col>
        <!--编辑-->
        <el-dialog
            :title="dialogTitle"
            :visible.sync="dialogVisible"
            size="tiny"
            :before-close="handleClose">
            <div>
                <el-row>
                    <el-col>
                        <span>开奖方式：</span>
                        <el-radio class="radio" v-model="query.lottery_open_type" label="1">杀率控制</el-radio>
                        <el-radio class="radio" v-model="query.lottery_open_type" label="2">随 机</el-radio>
                    </el-col>
                    <el-col class="slNav" v-if="query.lottery_open_type=='1'">
                        <el-card class="box-card-change">
                            <div slot="header">
                                <span style="line-height: 26px;">自定义杀率</span>
                            </div>
                            <el-form label-width="90px">
                                <el-form-item label="杀 率：">
                                    <el-input placeholder="请输入杀率" type="number" size="small" v-model="query.win_bet.win_bet1"
                                              class="w80">
                                        <template slot="append">%</template>
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="库 存：">
                                    <el-input placeholder="请输入金额" type="number" size="small"
                                              v-model="query.win_bet.max_lose_money1"
                                              class="w80">
                                    </el-input>
                                    <p class="help_gray">*提 示：库存指每期玩家最高盈利金额,0 表示不控制</p>
                                </el-form-item>
                                <el-form-item label="执行时间：">
                                    <el-time-select
                                        class="intW"
                                        placeholder="起始时间"
                                        v-model="query.win_bet.start_time"
                                        size="small"
                                        :picker-options="{
                                              start: '00:00',
                                              step: '00:10',
                                              end: '23:50',
                                            }">
                                    </el-time-select>
                                    <el-time-select
                                        class="intW"
                                        placeholder="结束时间"
                                        v-model="query.win_bet.end_time"
                                        size="small"
                                        :picker-options="{
                                              start: '00:00',
                                              step: '00:10',
                                              end: '23:50',
                                          minTime:query.win_bet.start_time
                                         }">
                                    </el-time-select>
                                </el-form-item>
                            </el-form>
                        </el-card>
                        <el-card class="box-card-change">
                            <div slot="header">
                                <span style="line-height: 26px;">默认杀率</span>
                                <span class="help_gray">*提示：在【自定义杀率】执行时间区间以外，执行的杀率操作。</span>
                            </div>
                            <el-form label-width="90px">
                                <el-form-item label="杀 率：">
                                    <el-input placeholder="请输入杀率" type="number" size="small" v-model="query.win_bet.win_bet2"
                                              class="w80">
                                        <template slot="append">%</template>
                                    </el-input>
                                </el-form-item>
                                <el-form-item label="库 存：">
                                    <el-input placeholder="请输入金额" type="number" size="small"
                                              v-model="query.win_bet.max_lose_money2"
                                              class="w80">
                                    </el-input>
                                    <p class="help_gray">*提 示：库存指每期玩家最高盈利金额,0 表示不控制</p>
                                </el-form-item>
                            </el-form>
                        </el-card>
                    </el-col>
                    <el-col class="slNav" v-if="query.lottery_open_type=='1'">
                        <span class="font14">温馨提示：杀率指的是厅主的盈利百分比,不得大于100，该值小于0，表示厅主输钱；该值大于0，表示厅主赢钱。</span>
                    </el-col>
                </el-row>
            </div>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="doSubmit">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'

    export default {
        data() {
            return {
                LANG,
                //弹窗
                dialogVisible: false,
                //弹窗选项
                dialogTitle: '',
                //数据接口地址
                tableUrl: "",
                //列配置接口地址
                columnsUrl: "lotteryZKCseting",
                //是否刷新表格列表
                updated: false,
                query: {
                    id: '',
                    lottery_open_type: '1',
                    win_bet:{
                        win_bet1: '',
                        win_bet2: '',
                        max_lose_money1: '',
                        max_lose_money2:'',
                        start_time: '',
                        end_time: '',
                    }
                },
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
        },
        methods: {
            init() {
                this.dialogTitle = '';
                this.tableUrl = URL.api + '/plottery/list';
                this.columnsUrl = "static/json/lotteryNew/lotteryZKCseting/columns.json";
            },
            //表格按钮点击事件
            doHandle(item) {
                this.updated = false;
                this.formType = "";
                this.nowId = item.row.id;
                switch (item.fn) {
                    case "doEdit":
                        this.doEdit(item.row)
                        break
                }
            },
            getForm(obj) {
            },
            //编辑
            doEdit(row) {
                this.dialogVisible = true;
                this.dialogTitle = row.name;
                this.query.id = row.id;
                this.query.lottery_open_type = row.lottery_open_type;
                this.query.win_bet.start_time = row.start_time;
                this.query.win_bet.end_time = row.end_time;
                this.query.win_bet.win_bet1 = row.win_bet1;
                this.query.win_bet.win_bet2 = row.win_bet2;
                this.query.win_bet.max_lose_money1 = ((row.max_lose_money1) / 100).toFixed(2);
                this.query.win_bet.max_lose_money2 = ((row.max_lose_money2) / 100).toFixed(2);
            },
            //编辑提交
            doSubmit() {
                this.query.win_bet.max_lose_money1 = (this.query.win_bet.max_lose_money2) * 100
                this.query.win_bet.max_lose_money2 = (this.query.win_bet.max_lose_money2) * 100
                this.$.autoAjax('patch', URL.api + '/plottery/info', this.query, {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.updated = true;
                            this.$message.success('杀率修改成功！')
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                this.dialogVisible = false;
            },
            handleClose() {
                this.dialogVisible = false;
            }
        },
        created: function () {
            this.init()
        }
    }
</script>
<style scopend lang="less">
    #lotteryZKCseting {
        .slNav {
            padding: 15px 0;
        }
        .box-card-change{
            /*max-width: 350px;*/
            /*display: inline-block;*/
        }
    }
</style>
