<template>
    <div id="testPlay">
        <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="type" :labelWidth="labelWidth"
                  :isEdit="isEdit" @do-query="doQuery" @reset-form="resetForm" :addshow="true" @add-new="doSetting" :addText="LANG['添加试玩代理线'] || '添加试玩代理线'"></formEdit>
        <el-col>
            <tablegrid
                :columnsUrl="columnsUrl"
                :tableUrl="tableUrl"
                :tableCheck="false"
                :pageSet="true"
                :updated="updated"
                @do-handle="doHandle">
            </tablegrid>
        </el-col>
        <el-col>
            <el-dialog
                title="提示"
                :visible.sync="settingDialog"
                size="tiny"
                :before-close="handleClose">
                <el-form ref="addTest" :model="addTest" label-width="100px">
                    <el-form-item label="代理线名称：">
                        <el-input v-model="addTest.name"></el-input>
                    </el-form-item>
                </el-form>
                <span class="help_red"> 【注意】：*添加成功后，你所输入的该用户下所有的代理线将成为测试帐号</span>
                <span slot="footer" class="dialog-footer">
    <el-button @click="settingDialog = false">取 消</el-button>
    <el-button type="primary" @click="submitSetting">确 定</el-button>
  </span>
            </el-dialog>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    export default{
        data(){
            return {
                //表格相关
                LANG,
                columnsUrl: "",
                tableUrl: "",
                //搜索相关
                searchConfig: [//快捷日期
                    {"prop": "name", "value": "", "type": "text", "label": "试玩帐号"},
                    {"prop": "pname", "value": "", "type": "text", "label": "上级代理"}
                ],
                type: "search",
                isEdit: {},
                labelWidth: "135px",
                formVisible: {
                    state: false
                },
                baseUrl:"",
                //批量操作按钮
                updated: false,
                //确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                settingDialog:false,
                addTest:{
                    name:''
                }
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
        },
        methods: {
            init(){
                this.columnsUrl = "static/json/accoutManage/testPlay/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.user.testPlay;
                this.baseUrl = URL.api + ROUTES.GET.user.testPlay;
            },
            doHandle(item) {
                this.nowId = item.row.id || -1;
                switch (item.fn) {
                    case "openUserSet": // 用户名跳转
                        this.openUserSet(item.row)
                        break;
                    default:
                        break;
                }
            },
            doSetting(){
                this.settingDialog = true
            },
            submitSetting(){
                let data = {}
                data.name = this.addTest.name
                this.$.autoAjax('post',URL.api+ROUTES.POST.user.testPlay, data, {
                    ok: (res) => {
                        if( res.state == 0 && res.data){
                            this.$message.success('添加试玩代理线成功')
                            this.loading = true;
                        }
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                this.settingDialog = false
            },
            handleClose(){
                this.settingDialog = false
            },
            //用户名跳转
            openUserSet(item){
                this.$router.push({path:'/memberManagement',query:{name:item.name}});
            },
            //查询
            doQuery(obj){
                this.tableUrl=this.baseUrl+this.addSearch(obj.item);
            },
            //重置
            resetForm(){
                this.tableUrl = this.baseUrl;
            },
        },
        created(){
            this.init()
        }
    }
</script>
<style>

</style>
