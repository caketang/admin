<template>
    <div id="withdrawInformation">
        <div class="clearfix">
            <el-col>
                <div class="title">{{LANG['即时稽核'] || '即时稽核'}}</div>
                <div style="float:right">
                    <el-button type="primary" @click="refreshModel" style="margin-left:5px;" size="small">
                        {{LANG['即时稽核'] || '即时稽核'}}
                    </el-button>
                </div>
            </el-col>
            <!--<el-col>-->
                <!--<div class="cell" v-if="allData.level_config">-->
                    <!--<span-->
                        <!--class="font14 tCent">{{LANG['当前会员所在层级行政费比例'] || '当前会员所在层级行政费比例'}} : {{(allData.level_config.withdraw_expenese || '') | formatNumber(0)}} %</span>-->
                    <!--<span class="ml10 mr10"> | </span>-->
                    <!--<span-->
                        <!--class="font14 ml10">{{LANG['行政费上限'] || '行政费上限'}} : {{(allData.level_config.max_expenese || '') | formatMoney}}</span>-->
                    <!--<span class="ml10 mr10"> | </span>-->
                    <!--<span-->
                        <!--class="font14">{{LANG['免稽核额度'] || '免稽核额度'}} : {{(allData.level_config.nocheck || '') | formatMoney}}</span>-->
                <!--</div>-->
            <!--</el-col>-->
            <el-col>
                <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :getData="true"
                    :pageSet="false"
                    :tableData="tableData"
                    @get-table-data="getTableData"
                    :formType="formType"
                    :automation="true"
                    :hoverData="gridData"
                    :isCreated="true"
                    :do-hover="doHandle"
                    @do-handle="doHandleDetail"
                    :showRefresh="false"
                >
                    <!-- 汇总 -->
                    <tr :span="12" class="sumdiv ml20" slot="other" v-if="allData.list && allData.list.length">
                        <td colspan="9">
                            <div class="cell">
                                <span
                                    class="font14 tCent">{{LANG['常态稽核'] || '常态稽核'}} : {{allData.total_admin_fee
                                    }} {{LANG['元'] || '元'}}</span>
                                <span class="ml10 mr10"> | </span>
                                <span
                                    class="font14 ml10">{{LANG['优惠稽核'] || '优惠稽核'}} : {{allData.total_coupon}} {{LANG['元'] || '元'}}</span>
                                <span class="ml10 mr10"> | </span>
                                <span class="font14">{{LANG['出款手续费'] || '出款手续费'}} : {{allData.total_fee}} {{LANG['元'] || '元'}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr :span="12" class="sumdiv ml20" slot="other" v-if="allData.list && allData.list.length">
                        <td colspan="9">
                            <div class="cell">
								<span class="font14">{{LANG['共需扣除费用'] || '共需扣除费用'}} ：{{allData.total_fee}}+{{allData.total_admin_fee}}+{{allData.total_coupon}}
								= {{parseInt(allData.total_coupon + allData.total_fee + allData.total_admin_fee)}} {{LANG['元'] || '元'}}</span>
                            </div>
                        </td>
                    </tr>
                </tablegrid>
            </el-col>
        </div>
        <el-col v-if="!isDetail" class="makeTag">
            <el-dialog title="编辑稽核" v-model="labelVisible" size="tiny">
                <el-form ref="labelform" :model="labelform" :rules="rules" label-width="80px">
                    <el-form-item :label="LANG['常态打码'] || '常态打码'" prop="withdraw_bet_principal">
                        <el-input v-model="labelform.withdraw_bet_principal" type="number"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['优惠打码'] || '优惠打码'" prop="withdraw_bet_coupon">
                        <el-input v-model="labelform.withdraw_bet_coupon" type="number"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                        <el-button @click="labelVisible = false">取 消</el-button>
                        <el-button type="primary" @click="saveDiscount">确 定</el-button>
                </span>
            </el-dialog>
        </el-col>
        <el-dialog title="达标" v-model="reachVisible" size="tiny">
            <span>所在行稽核直接达标，该条不进行稽核，你还要继续吗？</span>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="reachVisible = false">取 消</el-button>
                    <el-button type="primary" @click="reachLabels">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import tablegrid from '../../../components/tableGrid.vue'
    export default {
        data() {
            const sortValidate = (rule, value, callback) => {
                if (/^[0-9]+([.]\d{1,2})?$/.test(value.toString())) {
                    callback();
                } else {
                    return callback(new Error('请输入最大长度10位数字、后两位小数的优惠打码'));
                }
            };
            return {
                LANG,
                columnsUrl: "",
                tableUrl: "",
                formType: "",
                updated: false,
                allData: {},
                tableData: {
                    list: []
                },
                gridData: [],
                labelVisible: false,
                reachVisible:false,
                //是否显示详情
                isDetail: false,
                labelform: {
                    withdraw_bet_principal: "",
                    withdraw_bet_coupon: ""
                },
                rules:{
                    withdraw_bet_principal:[
                        {required: true, message: '请填写常态打码', trigger: 'blur'},
                        {validator: sortValidate, trigger: 'change,blur', required: true},
                        {min: 1, max: 10, message: '请输入 1 到 10 个字符'},
                    ],
                    withdraw_bet_coupon:[
                        {required: true, message: '请填写常态打码', trigger: 'blur'},
                        {validator: sortValidate, trigger: 'change,blur', required: true},
                        {min: 1, max: 10, message: '请输入 1 到 10 个字符'},
                    ],
                }
            }
        },
        components: {
            tablegrid: tablegrid
        },
        props: {
            id: Number
        },
        methods: {
            // 页面初始化
            init() {
                //取用户数据
                this.columnsUrl = "/static/json/accoutManage/memberManagement/withdrawInformation/columns.json"
                //this.tableUrl = URL.api + ROUTES.GET.user.newInfo + "?id=" + parseInt(this.id) + "&type=withdraw";
                this.tableUrl = URL.api + ROUTES.GET.user.Audit + "?id=" + parseInt(this.id) + "&type=withdraw";
            },
            //刷新页面
            refreshModel() {
                this.formType == "edit"
                    ?this.formType = "add"
                    :this.formType = "edit";
            },
            //表格内按钮事件
            doHandle(e) {
            },
            //取表格数据
            getTableData(obj) {
                // this.tableData.list = [];
                this.allData = obj.allData;
                let model = obj.allData.list;
                obj.allData.list &&
                model.forEach(item => {
                    if (!item.withdraw_bet_coupon && !item.withdraw_bet_principal) {
                        item.withdraw_bet_principal = item.withdraw_bet;
                        item.withdraw_bet_coupon = 0
                    }
                })

            },
            doHandleDetail(e) {
                switch (e.fn) {
                    case "showRebateProportion":
                        this.showRebateProportion(e.row, event)
                        break
                    case "hideRebateProportion":
                        this.hideRebateProportion(item.row, item.event)
                        break;
                    // 编辑
                    case "doAddLabel":
                        this.doAddLabel(e.row)
                        break
                    //达标
                    case "doReachLabels":
                        this.doReachLabels(e.row)
                        break
                }
            },
            //显示有效投注额
            showRebateProportion(row, event) {
                let _this = this;
                let data = row.valid_bet_detail;
                if (data.length <= 0) {
                    return;
                } else {
                    this.gridData.splice(0, this.gridData.length);
                    let gridData = this.gridData;
                    for (let i = 0; i < data.length; i++) {
                        gridData.push(
                            {label: data[i].name, value: data[i].valid_bet},)
                    }
                }
            },
            //编辑
            doAddLabel(row) {
                console.log('withdrawInformation.vue doAddLabel 207', row);
                this.nowId = row.user_id;
                this.labelVisible = true;
                this.labelform.withdraw_bet_principal = row["withdraw_bet_principal"];
                this.labelform.withdraw_bet_coupon = row["withdraw_bet_coupon"];
                // if (row.tags) {
                //     for (let k = 0; k < this.labelList.length; k++) {
                //         if (this.labelList[k].label === row["tags"]) {
                //             this.labelform.lid = this.labelList[k].value.toString();
                //         }
                //     }
                // } else {
                //     this.labelform.lid = '';
                // }
            },
            //达标
            doReachLabels(row){
                this.reachVisible = true

            },
            //保存稽核
            saveDiscount() {
                this.$message.success(LANG["恭喜您，会员修改稽核成功！"] || "恭喜您，会员修改稽核成功！");
                this.updated = false;
                console.log('withdrawInformation.vue saveDiscount 230', this.labelform);
                this.$.autoAjax('patch',URL.api + '/cash/manual.comment/' + parseInt(this.nowId), this.labelform, {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.labelVisible = false;
                            this.updated = true;
                            this.$message.success(msg + (LANG['打码量修改成功'] || '打码量修改成功'));
                        } else if(res.state){
                            this.$message.error(msg + (LANG['打码量修改失败'] || '打码量修改失败') );
                        } else {
                            this.$message.error(msg + (LANG['打码量修改失败'] || '打码量修改失败'));
                        }
                        this.$refs.labelform.resetFields();
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //修改达标状态
            reachLabels(){
                this.$message.success(LANG["修改稽核达标成功！"] || "修改稽核达标成功！");
                this.updated = false;
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
<style>
    #withdrawInformation {
        padding: 20px;
    }

    #withdrawInformation .title {
        text-align: center;
        width: 100%;
        font-weight: 800;
        font-size: 18px;
        margin-bottom: 30px !important;
    }
</style>
