<template>
    <div id="ZKCnote">
        <el-col :span="24" class="mb20 pb" style="min-height: 500px;">
            <el-col>
                <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :showExport="false"
                    :times="times"
                    :updated="updated"
                    :getData="true"
                    @do-handle="doHandle">
                </tablegrid>
            </el-col>
        </el-col>
        <el-dialog
            :title="dialogTitle"
            :visible.sync="dialogVisible"
            size="tiny"
            :before-close="handleClose">
            <el-row :gutter="20">
                <div><span class="labelContent">彩种：</span>
                    <el-tag type="gray">{{lotteryData.lottery_name}}</el-tag>
                </div>
                <div><span class="labelContent">彩期列表：</span>
                    <el-tag type="success">{{lottery_number}}</el-tag>
                </div>
                <div><span class="labelContent">封盘时间：</span><span>{{end_time}}</span></div>
                <div><span class="labelContent">当前时间：</span><span>{{time}}</span></div>
                <div><span class="labelContent">预设彩果：</span>
                    <el-input
                        size="small"
                        placeholder="开奖号码请用英文逗号隔开"
                        v-model="manual" class="w60" style="max-width: 240px;">
                    </el-input>
                </div>
                <p class="font14 state_info pleft20">温馨提示：快三开奖号码必须是3个号码0-9的数字组成，赛车为10个号码，且必须使用半角逗号隔开，格式如：5,4,6</p>
            </el-row>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </span>
        </el-dialog>

    </div>
</template>
<script>
    import tablegrid from '../../components/tableGrid.vue'
    import datepicker from '../../components/dateTimePicker.vue'

    export default {
        data() {
            return {
                times: 30,
                //弹窗设置
                dialogVisible: false,
                dialogTitle: '预设彩果',
                lottery_number: '',
                manual: '',
                updated: false,
                //当前时间
                time: null,
                end_time: ''
            }
        },
        components: {
            tablegrid: tablegrid,
        },
        props: {
            lotteryData: Object,
            columnsUrl: String,
            //表格数据
            tableUrl: String,
        },
        methods: {
            init() {
                let _this = this;
                this.lottery_number = '';
                this.$.autoAjax('get', URL.api + ROUTES.GET.timezone, '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            //取得时区
                            let t = res.data.time || "";
                            let zone = res.data.zone || "";
                            let str = res.data.p || "";
                            t = t.replace(/\+.*$/, '').replace(/T/, ' ');
                            let now = (new Date(t)).valueOf();
                            window.TIMEZONE = setInterval(function () {
                                now += 1000;
                                _this.time = zone + " ( " + str + " ) " + _this.getMyDate(now);
                            }, 1000)
                        }
                    },
                    p: (p) => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            getMyDate(str) {
                var oDate = new Date(str),
                    oYear = oDate.getFullYear(),
                    oMonth = oDate.getMonth() + 1,
                    oDay = oDate.getDate(),
                    oHour = oDate.getHours(),
                    oMin = oDate.getMinutes(),
                    oSen = oDate.getSeconds(),
                    oTime = oYear + '-' + this.getzf(oMonth) + '-' + this.getzf(oDay) + ' ' + this.getzf(oHour) + ':' + this.getzf(oMin) + ':' + this.getzf(oSen);//最后拼接时间
                return oTime;
            },
            //补0操作
            getzf(num) {
                if (parseInt(num) < 10) {
                    num = '0' + num;
                }
                return num;
            },
            doHandle(row) {
                switch (row.fn) {
                    case 'doEdit':
                        this.doEdit(row)
                        break;
                }
            },
            handleClose() {
                this.dialogVisible = false
            },
            doEdit(row) {
                this.lottery_number = row.row.lottery_number
                this.dialogVisible = true
                this.manual = row.row.preset_code
                this.end_time = row.row.official_time
            },
            submit() {
                this.updated = false;
                let query = {}
                query.id = this.lotteryData.lottery_type
                query.lottery_number = this.lottery_number
                query.preset_code = this.manual
                if(query.preset_code ==''|| !/[^\d\,]/g.test(query.preset_code)){
                    this.$.autoAjax('patch', URL.api + '/plottery/presetcode', query, {
                        ok: (res) => {
                            if (res.state == 0 && res.data) {
                                this.$message.success('预设彩果成功！')
                                this.dialogVisible = false
                                this.updated = true;
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            this.dialogVisible = false
                            console.log(e);
                            this.updated = true;
                        }
                    })
                }else{
                    this.$message.error('请检查预设彩果的开奖号码格式和长度是否符合规则')
                    this.updated = true;
                }


            }
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init()
        }
    }
</script>
<style scopend lang="less">
    #ZKCnote {
        .labelContent {
            display: inline-block;
            width: 90px;
            line-height: 38px;
            text-align: right;
            padding-right: 5px;
        }

    }
</style>
