<template>
    <div id="depositStatus">
        <div>
            <el-button type="primary" icon="arrow-left" size="small" @click="returnPage">{{LANG['返 回'] || '返 回'}}</el-button>
            <span>{{paymentName}} </span>{{LANG['存款状况'] || '存款状况'}}
        </div>
        <el-col class="mt10">
            <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="type"
                      :isEdit="isEdit" :labelWidth="labelWidth" @do-query="doQuery" @reset-form="resetForm" :showAdd="false"></formEdit>
        </el-col>
        <!--汇总数据-->
        <el-col class="lists">
            <p class="mb10">{{LANG['商户名称存款统计'] || '商户名称存款统计'}}</p>
            <!--<tablegrid-->
                    <!--:columnsUrl="columnsUrlone"-->
                    <!--:tableUrl="tableUrlone"-->
                    <!--:updated="updatedOne"></tablegrid>-->
            <el-table :data="sumData" style="width: 100%" border class="mt10">
                <el-table-column prop="total" :label="LANG['存款笔数'] || '存款笔数'" >
                </el-table-column>
                <el-table-column prop="totalMoney" :label="LANG['累计存款金额'] || '累计存款金额'" >
                </el-table-column>
                <el-table-column prop="moneyStop" :label="LANG['停用金额'] || '停用金额'">
                </el-table-column>
                <el-table-column prop="lastTime" :label="LANG['最后存款时间'] || '最后存款时间'">
                </el-table-column>
            </el-table>
        </el-col>
        <!--明细数据-->
        <el-col class="lists">
            <el-col>
                {{LANG['存款详情'] || '存款详情'}}
            </el-col>
            <tablegrid
                    :columnsUrl="columnsUrlone"
                    :tableUrl="tableUrlone"
                    :getData="true"
                    :isCreated="true"
                    @get-table-data="getTableData"
                    :updated="updated">
                <div slot="other" v-if="slotShow">小计：{{sumData[0].subTotalMoney?sumData[0].subTotalMoney:0}}</div>
            </tablegrid>
        </el-col>
    </div>
</template>
<script>
    import formEdit from '../../components/formEdit.vue'
    import tablegrid from '../../components/tableGrid.vue'
    export default{
        data(){
            return {
                LANG,
                // 条件搜索
                searchConfig: [{"type":"quickDate"},//快捷日期
                    {"type":"dateGroup","label":"日期","prop":[{"prop":"date_from","value":"","label":"开始时间"},
                        {"prop":"date_to","value":"","label":"结束时间"}]},
                ],
                type:"search",
                labelWidth:"120px",
                formVisible:{
                    state:false
                },
                isEdit: {
                    state: false
                },
                // 表格相关
                columnsUrlone: "",
                tableUrlone: "",
                baseUrlone: "",
                updated: false,
                // 汇总表格
                sumData: [],
                slotShow:false
            }
        },
        props:{
            depositId:Number,
            paymentName:String
        },
        components:{
            formEdit: formEdit,
            tablegrid: tablegrid
        },
        methods:{
            init(){
                // 详情数据
                this.columnsUrlone="static/json/agent/depositStatus/columns.json"
                this.tableUrlone= URL.api + "/cash/deposit/status?id="+ this.depositId +"&date_from=" + FORMATDATEPICKER(new Date()) + "&date_to=" + FORMATDATEPICKER(new Date());
                this.baseUrlone= URL.api + "/cash/deposit/status";
                // 汇总数据
//                this.columnsUrlone="static/json/cash/depositStatus/columnsSum.json"
//                this.tableUrlone=URL.api+ROUTES.GET.state.summary + "?date_from=" + FORMATDATEPICKER(new Date()) + "?date_to=" + FORMATDATEPICKER(new Date());
//                this.baseUrlone =URL.api+ROUTES.GET.state.summary;
            },
            returnPage(){
                this.$emit('return-page',{"itme":'return'})
            },
            // 查询数据
            doQuery(obj){
                this.tableUrlone = this.baseUrlone + this.addSearch(obj.item)+`&&id=${this.depositId}`;
            },
            // 重置表单
            resetForm(){

            },
            //
            getTableData(obj){
                this.sumData.splice(0,this.sumData.length);
                let sumData = this.sumData;
                let temp = {};
                this.slotShow = false;
                if(obj.allData.attributes){
                    let attobj = obj.allData.attributes;
                    for(let k in attobj){
                        if(k === 'moneyStop' || k === 'subTotalMoney' || k === 'totalMoney'){
                            temp[k] = FORMATMONEY(attobj[k]);
                        }else{
                            temp[k] = attobj[k];
                        }
                    }
                }
                sumData.push(temp);
                if(sumData[0].subTotalMoney){
                    this.slotShow = true;
                }
            }
        },
        created(){
            this.init();
        },
        activated(){
            this.init();
        }
    }
</script>
<style scopend>
    .lists {margin: 10px 0;background-color: #ffffff;padding: 10px}
</style>