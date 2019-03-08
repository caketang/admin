<template>
    <div id="logInfo">
        <el-col>
            <tablegrid
                :columnsUrl="columnsUrl"
                :tableUrl="tableUrl"
                :tableIndex="false"
                :showRefresh="true"
                :tableCheck="false"
                @do-handle="doHandle"></tablegrid>
        </el-col>
        <el-dialog
            title="详情"
            :visible.sync="dialogVisible"
            size="tiny"
            :before-close="handleClose">
            <span v-html="details"></span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">关 闭</el-button>
  </span>
        </el-dialog>
    </div>
</template>
<script>
    import tableGrid  from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    export default{
        data(){
            return {
                //数据接口地址
                tableUrl : "",
                columnsUrl : "",
                dialogVisible:false,
                details:null
            }
        },
        components: {
            tablegrid:tableGrid,
        },
        methods: {
            init(){
                this.columnsUrl = "/static/json/systemSettings/logInfo/columns.json"
                this.tableUrl = URL.api + ROUTES.GET.system.log.info
                this.details = null
            },
            //表格按钮点击事件
            doHandle(item){
                this.nowId = parseInt(item.row.id) || -1;
                switch (item.fn){
                    case "doDetails":
                        this.doDetails(item.row)
                        break
                }
            },
            handleClose(){
                this.dialogVisible = false;
            },
            doDetails(data){
                this.details = data.message
                this.dialogVisible = true;
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
<style>
</style>
