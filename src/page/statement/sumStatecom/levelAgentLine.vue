<template>
    <div id="levelAgent">
        <el-col>
            <span>团队收益详情</span>
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
                @do-handle="doHandle">
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
        <!--<el-col v-if="isDetails">-->
        <!--<agentdetails :id.sync="agenId" :dates="dates" :name.sync="name" :furl ="fUrl" :title="label"></agentdetails>-->
        <!--</el-col>-->
    </div>
</template>
<script>
    import tableGrid from '../../../components/tableGrid.vue'
    import levelAgentDetails from './levelAgentDetails.vue'

    export default {
        data() {
            return {
                LANG,
                activeName: 'agent',
                columnsUrl: '',
                tableUrl: '',
                updated: false,
                getData: true,
                sumShow: false,
//                isDetails: false,
                agenId: -1,
                dates: '',
                name: '',
                agentdetailsId: '',
                allData: {},
                oDate: ''
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
            date: {
                type: Object,
                default: {},
            },
            fUrl: {
                type: String,
                default: '',
            },
            title: {
                type: String,
                default: '',
            }
        },
        computed: {},
        components: {
            tablegrid: tableGrid,
            agentdetails: levelAgentDetails
        },
        methods: {
            init() {
                this.tableUrl = this.Url + this.addSearch(this.date);
                this.columnsUrl = '../../../../static/json/statement/sumStatement/levelAgentcolumns.json';
            },
            handleClick() {
            },
            doHandle(item) {
                switch (item.fn) {
                    case "showDetails" :
                        this.showDetails(item.row);
                        break;
                }
            },
            showDetails(obj) {
                let query = {name:obj.name,start_time:this.date.start_time,end_time:this.date.end_time}
                this.tableUrl = this.Url + this.addSearch(query);
//                this.isDetails = true;
//                this.agenId = obj.id
//                this.name = obj.name;
//                if(this.$parent.$parent.pushUrls && !obj.pushList){
//                    this.$parent.$parent.pushUrls({"name":obj.name,"type": "level","url": this.fUrl,id:obj.id,name:obj.name});
//                }
            },
            //取表数据
            getTableData(obj) {
                this.allData = {};
                if (obj.allData && obj.allData.attributes) {
                    let model = obj.allData.attributes;
                    if (obj.item.length) this.sumShow = true;
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
        watch: {
            //如果数据网址发生变化，就执行数据请求
            date: {
                handler(val, old) {
                    console.log(val)
                },
                //是否绑定初始值
                immediate: true,
                //深度监听
                deep: true
            },
        },
        created() {
            this.init()
        }
    }
</script>
<style scoped>
</style>
