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
                        <el-col>
                            <label>杀 率：
                                <el-input placeholder="请输入杀率" type="number" size="small" v-model="query.win_bet" class="w60">
                                    <template slot="append">%</template>
                                </el-input>
                            </label>
                        </el-col>
                        <el-col class="mt10">
                            <label>库 存：
                                <el-input placeholder="请输入金额" type="number" size="small" v-model="query.max_lose_money" class="w60">
                                </el-input>
                            </label>
                            <p class="help_gray" style="margin-left: 50px;">*提 示：库存指每期玩家最高盈利金额,0 表示不控制</p>
                            <div class="block">
                                <span class="demonstration">默认</span>
                                <el-date-picker
                                    v-model="value3"
                                    type="datetimerange"
                                    placeholder="选择时间范围">
                                </el-date-picker>
                            </div>
                        </el-col>
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
                dialogTitle:'',
                //数据接口地址
                tableUrl: "",
                //列配置接口地址
                columnsUrl: "lotteryZKCseting",
                //是否刷新表格列表
                updated: false,
                query:{
                    id:'',
                    lottery_open_type:'1',
                    win_bet:'',
                    max_lose_money:''
                },
                value3:[]
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
                this.query.id= row.id;
                this.query.win_bet = row.win_bet;
                this.query.max_lose_money = ((row.max_lose_money)/100).toFixed(2);
                this.query.lottery_open_type = row.lottery_open_type;
            },
            //编辑提交
            doSubmit(){
                this.query.max_lose_money = (this.query.max_lose_money)*100
                this.$.autoAjax('patch',URL.api +'/plottery/info',this.query, {
                    ok: (res) => {
                        if(res.state === 0 && res.data){
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
           padding:15px 0;
        }
    }
</style>
