<template>
    <div id="bankManagement">
        <div class="search">
            <el-form label-width="90px">
                <el-form-item :label="LANG['银行名称'] || '银行名称'" >
                    <el-input v-model="bankName" size="small"></el-input>
                </el-form-item>
                <el-form-item style="margin-left: -60px;">
                    <el-button type="primary" size="small" @click="doQuery" >{{LANG['查询'] || '查询'}}</el-button>
                    <el-button type="primary" size="small" @click="resetForm" >{{LANG['重置'] || '重置'}}</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :query="query"
                    :opts="operation"
                    @do-handle="doHandle"></tablegrid>
        </el-col>
        <el-col>

        </el-col>
    </div>
</template>
<script>
    import tablegrid from '../../components/tableGrid.vue'
    export default{
        data(){
            return{
                LANG,
                //表格数据
                tableUrl:"",
                baseUrl:"",
                //列配置
                columnsUrl:"",
                //搜索
                bankName:"",
                query:{},
                operation:""
            }
        },
        components: {
            tablegrid:tablegrid
        },
        methods: {
            init(){
                this.columnsUrl="static/json/cash/bankManagement/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.banks;
                this.baseUrl = URL.api + ROUTES.GET.banks;
            },
            //表格数据按钮
            doHandle(item){
                switch (item.fn){
                    case "doEdit":
                        this.doEdit(item.row)
                        break
                    case "doDisable":
                        this.doDisable(item.row)
                        break
                    case "doEnable":
                        this.doEnable(item.row)
                        break
                }
            },
            //编辑
            doEdit(){
                this.editFormTtile=this.LANG["修改银行"] || "修改银行"
                this.btnEditText=this.LANG["修改"] || "修改"
                this.editFormVisible=true;
            },
            //查询
            doQuery(){
                this.bankName = STRINGTRIM(this.bankName);
                this.tableUrl = this.baseUrl + "?name="+ STRINGTRIM(this.bankName);
            },
            resetForm(){
                this.tableUrl = this.baseUrl;
                this.bankName = "";
            },
        },
        computed:{
        },
        mounted(){
        },
        activated() {
            this.bankName= '';
            this.init();
        },
        created(){
            this.init()
        }
    }
</script>
<style scoped>
    #bankManagement .search .el-form-item__label{width:80px;}
    #bankManagement .search .el-form-item{width:200px;float:left;margin-bottom: 1px;}
    #bankManagement .search .el-form-item.lg{width:330px;float:left;}
    #bankManagement .search .el-form .el-col .line{text-align: center;}
    #bankManagement .search .el-form .formbtn{float:left;margin-left:10px;padding-top:5px;}
    #bankManagement .addManage{float:right;margin-top:5px;}
</style>