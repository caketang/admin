<template>
    <div id="memberDetail">
        <el-col :span="24">
            <span>{{label}}</span>
            <tablegrid
                :columnsUrl="columnsUrl"
                :tableUrl="tableUrl"
                :updated="updated"
                :getData="getData"
                :isCreated="true"
                @get-table-data="getTableData"
                :tableCheck="false"
                :pageSet="true"
                :tableIndex="false"
                :showRefresh="false">
                <!-- 汇总 -->
                <tr :span="12" class="sumdiv ml20" slot="other" v-if="sumShow">
                    <td colspan="1">
                        <div class="cell">
                            <span class="font16 ">{{LANG['总计'] || '总计'}} </span>
                        </div>
                    </td>
                    <td colspan="1">
                        <div class="cell">
                            <span class="font16 ">{{allData.bet_times}} </span>
                        </div>
                    </td>
                    <td colspan="1">
                        <div class="cell">
                            <span class="font16 ">{{allData.bet_money | formatMoney}} </span>
                        </div>
                    </td>
                    <td colspan="1">
                        <div class="cell">
                            <span class="font16 ">{{allData.valid_bet | formatMoney}} </span>
                        </div>
                    </td>
                    <td colspan="1">
                        <div class="cell">
                            <span class="font16 "
                                  :class="{state_danger: parseFloat(allData.lose_earn) < 0 }">{{allData.lose_earn | formatMoney}} </span>
                        </div>
                    </td>
                    <td colspan="1">
                        <div class="cell">
                            <span class="font16 ">{{allData.send_prize | formatMoney(4)}} </span>
                        </div>
                    </td>
                    <td colspan="1">
                        <div class="cell">
                            <span class="font16 ">{{allData.bonus | formatMoney(4)}} </span>
                        </div>
                    </td>
                    <td colspan="1">
                        <div class="cell">
                            <span class="font16 ">{{allData.contri | formatMoney(4)}} </span>
                        </div>
                    </td>
                </tr>
            </tablegrid>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../../components/tableGrid.vue'
    export default {
        data() {
            return {
                LANG,
                columnsUrl: '',
                baseUrl: '',
                getData: true,
                updated: false,
                sumShow: false,
                allData: {}
            }
        },
        props: {
            Url: {
                type: String,
                default: '',
            },
            label: {
                type: String,
                default: '',
            },
            type: {
                type: String,
                default: '',
            },
            agentUrl: {
                type: String,
                default: '',
            },
        },
        components: {
            tablegrid: tableGrid,
        },
        computed: {},
        watch: {},
        methods: {
            init() {

                this.baseUrl = this.Url;
                this.tableUrl = this.Url;
                this.updated = true;
                this.getData = true
                if (this.type === "user") {
                    this.columnsUrl = '../../../../static/json/statement/sumStatement/membercolumns.json'
                } else {
                    this.columnsUrl = '../../../../static/json/statement/sumStatement/agentcolumns.json'
                }
            },
            //取表数据
            getTableData(obj) {
                this.allData = {};
                if (obj.allData && obj.allData.attributes) {
                    let model = obj.allData.attributes;
                    if(obj.item.length) this.sumShow = true;
                    for (let i in model) {
                        this.allData[i] = model[i];
                    }
                } else {
                    this.sumShow = false;
                }
            },
        },

        mounted() {
        },
        created() {
            this.init();
        }
    }
</script>
<style scoped>
</style>
