<template>
    <div id="agentLine">
        <el-row>
            <el-col>
                <formEdit :formVisible="formVisible"
                          :formConfig="searchConfig"
                          :formType="formType"
                          :type="'search'"
                          :isEdit="isEdit"
                          :labelWidth="labelWidth"
                          @do-query="doQuery"
                          @reset-form="resetForm"
                          :showAdd="false">
                </formEdit>
            </el-col>
            <el-col>
                <p class="help_gray mb10">提示：报表每隔5到10分钟会更新一次。（非及时更新）</p>
                <span v-if="breadcrumb.length" class="font14">团队收益详情 :</span>
                <el-breadcrumb separator="/" style="display: inline-block;vertical-align: middle">
                    <el-breadcrumb-item @click.native="linkAgent('home')">首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-for="item,key in breadcrumb" :key="key" @click.native="linkAgent(item)">
                        {{item.name}}
                    </el-breadcrumb-item>
                </el-breadcrumb>
                <tableGrid
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
                                <span class="font16 ">{{allData.bet_times_num}} </span>
                            </div>
                        </td>
                        <td colspan="1">
                            <div class="cell">
                                <span class="font16 ">{{allData.bet_money_sum}} </span>
                            </div>
                        </td>
                        <td colspan="1">
                            <div class="cell">
                                <span class="font16 ">{{allData.valid_bet_sum}} </span>
                            </div>
                        </td>
                        <!-------->
                        <td colspan="1">
                            <div class="cell">
                                <span class="font16 ">{{allData.deposit_money_sum}} </span>
                            </div>
                        </td>
                        <td colspan="1">
                            <div class="cell">
                                <span class="font16 ">{{allData.withdraw_money_sum}} </span>
                            </div>
                        </td>
                        <td colspan="1">
                            <div class="cell">
                            <span class="font16 "
                                  :class="{state_danger: parseFloat(allData.profit_loss_sum) < 0 }">{{allData.profit_loss_sum}} </span>
                            </div>
                        </td>
                        <td colspan="1">
                            <div class="cell">
                                <span class="font16 ">{{allData.send_prize_sum}} </span>
                            </div>
                        </td>
                        <td colspan="1">
                            <div class="cell">
                                <span class="font16 ">{{allData.bonus_sum}} </span>
                            </div>
                        </td>
                        <td colspan="1">
                            <div class="cell">
                                <span class="font16 ">{{allData.contri_sum}} </span>
                            </div>
                        </td>
                    </tr>
                </tableGrid>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import formEdit from '../../components/formEdit.vue'
    import tableGrid from '../../components/tableGrid.vue'
    export default {
        data() {
            return {
                LANG,
                formType: "search",
                searchConfig: [
                    {"type": "quickDate", "showTimes": true},//快捷日期
                    {
                        "type": "dateTimeGroup",
                        "label": "报表日期",
                        "prop": [
                            {"prop": "start_time", "value": "", "label": "开始时间"},
                            {"prop": "end_time", "value": "", "label": "结束时间"}
                        ]
                    },
                    {"prop": "name", "value": "", "label": "用户名", "type": "text", "placeholder": "请输入用户名"},
                ],
                type: "search",
                labelWidth: "120px",
                formVisible: {
                    state: false
                },
                isEdit: {
                    state:false
                },
                columnsUrl: '',
                tableUrl: '',
                updated: false,
                getData: true,
                sumShow: false,
                breadcrumb: [],
                start_time: sessionStorage.dateTimeStart,
                end_time: sessionStorage.dateTimeEnd,
                childShow: true,
                allData:{}
            }
        },
        methods: {
            init() {
                this.updated = false
                this.tableUrl = URL.api + ROUTES.GET.user.agent.line + this.addSearch({
                    start_time: sessionStorage.dateTimeStart,
                    end_time: sessionStorage.dateTimeEnd
                })
                this.beastUrl = URL.api + ROUTES.GET.user.agent.line
                this.columnsUrl = '../../../static/json/statement/agentLine/columns.json';
            },
            doQuery(data) {
                this.start_time = data['item'].start_time ? data['item'].start_time: sessionStorage.dateTimeStart
                this.end_time = data['item'].end_time ? data['item'].end_time : sessionStorage.dateTimeEnd
                this.tableUrl = this.beastUrl + this.addSearch(data.item)
                this.breadcrumb = []
            },
            resetForm() {
                this.start_time = sessionStorage.dateTimeStart
                this.end_time = sessionStorage.dateTimeEnd
                this.tableUrl = this.beastUrl + this.addSearch({
                    start_time: this.start_time,
                    end_time: this.end_time
                })
            },
            linkAgent(name) {
                if (name == 'home') {
                    this.tableUrl = this.beastUrl + this.addSearch({
                        start_time: this.start_time,
                        end_time: this.end_time
                    })
                    this.breadcrumb = []
                } else {
                    this.tableUrl = this.beastUrl + this.addSearch({
                        start_time: this.start_time,
                        end_time: this.end_time,
                        name: name.name
                    })
                    let m = null;
                    this.breadcrumb.forEach((items,index)=>{
                        if(items.name == name.name){
                            m = index
                        }
                        if(index > m && m !==null){
                            this.breadcrumb.splice(m+1,this.breadcrumb.length)
                        }
                    })
                }
            },
            //取表数据
            getTableData(obj) {
                this.allData = {};
                if (obj.allData && obj.allData.attributes) {
                    this.childShow = obj.allData.attributes.total == 1 ? false : true
                    let model = obj.allData.attributes;
                    this.sumShow = obj.item.length?true:false
                    for (let i in model) {
                        this.allData[i] = model[i];
                    }
                } else {
                    this.sumShow = false;
                }
            },
            doHandle(item) {
                switch (item.fn) {
                    case "showDetails" :
                        this.showDetails(item.row);
                        break;
                }
            },
            showDetails(obj) {
                let _this = this
                if (_this.childShow) {
                    if (_this.breadcrumb.length < 1) {
                        _this.breadcrumb.push({name: obj.name, pid: obj.pid, id: obj.id})
                    } else {
                        _this.breadcrumb.forEach((item) => {
                            if (obj.pid == item.id) {
                                _this.breadcrumb.push({name: obj.name, pid: obj.pid, id: obj.id})
                            }
                        })
                    }
                    _this.tableUrl = _this.beastUrl + this.addSearch({
                        start_time: this.start_time,
                        end_time: this.end_time,
                        name: obj.name
                    })
                    // _this.breadcrumb.push({name: obj.name, pid:obj.pid, id:obj.id})
                } else {
                    this.$message('当前用户暂无下级代理。')
                }
            },
        },
        components: {
            formEdit: formEdit,
            tableGrid: tableGrid
        },
        computed: {},
        watch: {
//            tableUrl: {
//                handler(val, old) {
//
//                },
//                //是否绑定初始值
//                immediate: true,
//                //深度监听
//                deep: true
//            },
        },
        mounted() {
        },
        created() {
            this.init()
        }
    }
</script>
<style scopend>

</style>
