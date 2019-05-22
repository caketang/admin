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
    </div>
</template>
<script>
    import tablegrid from '../../../components/tableGrid.vue'
    export default {
        data() {
            return {
                LANG,
                columnsUrl: "",
                tableUrl: "",
                formType: "",
                allData: {},
                tableData: {
                    list: []
                },
                gridData: [],
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
            doHandle() {

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
