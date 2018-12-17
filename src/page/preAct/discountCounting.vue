<template>
    <div id="subAgentRebate" class="clearfix">
        <div class="search">
            <el-col :span="24">
                <formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="searchConfig" :type="type"
                          :labelWidth="labelWidth" :isEdit="isEdit" :showAdd=false
                           @do-query="doQuery" @reset-form="resetForm"></formEdit>
            </el-col>
        </div>
        <el-col>
            <!--@date-selection="doOperation"-->
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="false"
                    :pageSet="true"
                    :showRefresh="false"
                    :tableIndex="false"
                    @do-handle="doHandle"
                    :getData="true"
                    @get-table-data="getTableData"
            >
                <tr slot="other" v-if="slotShow">
                    <td colspan="5" ><div class="cell">{{LANG['小计'] || '小计'}}</div></td>
                    <td><div class="cell">{{subTotalMoney.valid_bet | formatMoney}}</div></td>
                    <td><div class="cell">{{subTotalMoney.coupon | formatMoney}}</div></td>
                    <td colspan="5"></td>
                </tr>
                <tr slot="other" v-if="slotShow">
                    <td colspan="5" ><div class="cell">{{LANG[' 总计'] || '总计'}}</div></td>
                    <td><div class="cell">{{totalMoney.valid_bet | formatMoney}}</div></td>
                    <td><div class="cell">{{totalMoney.coupon | formatMoney}}</div></td>
                    <td colspan="5"></td>
                </tr>
            </tablegrid>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue';
    import formEdit from '../../components/formEdit.vue';
    export default{
        data(){
            return {
                LANG,
                //搜索框
                type: "search",
                formTitel: "",
                labelWidth: "90px",
                isEdit: {},
                tableUrl:'',
                baseUrl:'',
                subTotalMoney:{},
                totalMoney:{},
                slotShow:false,
                //新增配置
                formVisible: {
                    state: false
                },
                searchConfig: [
                    {"prop": "user_name", "type": "text", "label": "会员账号"},
                    {"type":"dateGroup","label":"建立时间",
                        "prop":[{"prop":"date_from","value":"","label":"开始时间"},
                            {"prop":"date_to","value":"","label":"结束时间"}]},
                    {"prop":"revoked","value":"","label":"是否冲销","type":"select","list":[
                        {"label": "是", "value": "1"},
                        {"label": "否", "value": "0"},
                    ]},
                ]
            }
        },
        components:{
            tablegrid : tableGrid,
            formEdit: formEdit
        },
        methods:{
            init(){
                let _this = this;
                this.columnsUrl = "static/json/preAct/discountCounting/columns.json";
                this.tableUrl = URL.api + '/active/rebetset/detail' + "?date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
                this.baseUrl = URL.api + '/active/rebetset/detail';
            },
            getCheckedKeys() {
                this.checkkeys = this.$refs.tree.getCheckedKeys();
            },
            doHandle(item){
                switch (item.fn) {
                    case "doDetail":
                        this.doDetail(item.row);
                        break;
                }
            },
            doDetail(obj){
                let temp = {};
                for(let k in obj){
                    temp[k] = obj[k];
                }
                let member = `memberDetailData_${temp.user_id}`
                window.localStorage[member] = JSON.stringify(temp)
                this.$router.push({path:"/memberDetail",query:{user_id:obj.user_id,user_name:obj.user_name}})
            },
            //查询
            doQuery(obj){
                this.tableUrl = this.baseUrl + this.addSearch(obj.item);
            },
            resetForm(){
                this.tableUrl = this.baseUrl + "?date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
            },
            getTableData(obj){
               let attributes =  obj.allData.attributes;
                this.slotShow= false;
                if(attributes){
                   this.subTotalMoney = attributes.subTotalMoney;
                   this.totalMoney = attributes.totalMoney;
                   this.slotShow= true;
               }
            }
        },
        computed: {},
        mounted(){

        },
        created(){
            this.init()
        }
    }
</script>
<style scoped>

</style>