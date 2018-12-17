<template>
    <div id="otherPayment" v-loading="loading" class="clearfix">
        <div class="search">
            <el-col :span="24" class="pb">
                <formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="searchConfig" :type="type"
                          :labelWidth="labelWidth" :isEdit="isEdit" @add-new="doAdd" :showAdd=true
                          :addText="LANG['新增活动'] || '新增活动'" @do-query="doQuery" @reset-form="resetForm"></formEdit>
            </el-col>
        </div>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :getData="true"
                    :showRefresh="false"
                    @do-handle="doHandle"></tablegrid>
        </el-col>
    </div>
</template>
<script>
    import tablegrid from '../../components/tableGrid.vue';
    import formEdit from '../../components/formEdit.vue';
    import confirm from '../../components/confirm.vue';
    export default{
        data(){
            return {
                LANG,
                loading:false,
                //删除确认
                confirmConfig:{
                    state:false,
                    msg:"",
                    fn:"",
                    obj:null,
                },
                //表格数据
                tableUrl: "",
                useScene: "",
                baseUrl: '',
                //列配置
                columnsUrl: "",
                //搜索框
                type: "search",
                formTitel: "",
                labelWidth: "90px",
                isEdit: {},
                //新增配置
                formVisible: {
                    state: false
                },
                searchConfig: [{"prop": "name", "type": "text", "label": "活动名称"}]
            }
        },
        components: {
            tablegrid: tablegrid,
            formEdit: formEdit,
            confirm:confirm,
        },
        methods: {
            init(){
                this.baseUrl = URL.api + '/active/rebetset/records';
                this.tableUrl = URL.api + '/active/rebetset/records';
                this.columnsUrl = "/static/json/preAct/discount/columns.json";
            },
            //表格数据按钮
            doHandle(item){
                this.formType = "";
                this.updated = false;
                switch (item.fn) {
                    case "getActivity": // 编辑
                        this.getActivity(item.row);
                        break
                }
            },
            getActivity(obj){
                this.$router.push({path:"/discountDetail",query:{id:obj.id,name:obj.name}})
            },
            doAdd(){
                this.$router.push({path:"/discountCondition"})
            },
            //查询
            doQuery(obj){
                this.tableUrl = this.baseUrl + this.addSearch(obj.item);
            },
            resetForm(){
                this.tableUrl = this.baseUrl;
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
    .addManage {
        float: right;
        margin-right: 10px;
        margin-top: 5px;
    }

    /*.addManage{float:right;margin-right: 10px;margin-top:5px;}*/
</style>
