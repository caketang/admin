<template>
    <div id="sysMessage">
    <el-col>
        <tablegrid :columnsUrl="columnsUrl" :tableUrl="tableUrl" @do-handle="doHandle" :updated="updated"></tablegrid>
    </el-col>
    <el-dialog :title="LANG['公告详情'] || '公告详情'" v-model="dialogVisible" size="tiny" class="details">
        <el-col :span="24" class="xsDetails">
            <el-row :gutter="30">
                <div class="el-col el-col-24">
                    <el-col :span="5">
                        <h3>{{LANG['公告标题'] || '公告标题'}}:</h3>
                    </el-col>
                    <el-col :span="19">
                        {{dialogText.title}}
                    </el-col>
                </div>
                <div class="el-col el-col-24 mt10">
                    <el-col :span="5">
                        <h3>{{LANG['创建时间'] || '创建时间'}}:</h3>
                    </el-col>
                    <el-col :span="19">
                        {{dialogText.created}}
                    </el-col>
                </div>
                <div class="el-col el-col-24 mt10">
                    <el-col :span="5">
                        <h3>{{LANG['公告详情'] || '公告详情'}}:</h3>
                    </el-col>
                    <el-col :span="19">
                        {{dialogText.content}}
                    </el-col>
                </div>
            <el-col :span="24" class="tCent" style="margin:20px 0;border-top:1px solid #cccccc;padding-top:10px;text-align: right"><el-button @click="dialogVisible = false">{{LANG['关闭'] || '关闭'}}</el-button></el-col>
            </el-row>
        </el-col>
    </el-dialog>
    </div>
</template>

<script>
    import tableGrid from '../../components/tableGrid.vue'
    export default {
        data(){
            return{
                LANG,
                //表格列数据
                columnsUrl:"",
                //表格数据
                tableUrl:"",
                baseUrl:'',
                dialogVisible : false,
                dialogText:{
                    id:-1,
                    title:"",
                    content:"",
                    create_time:"",
                    is_read:false
                },
                //消息ID
                msgId:-1,
                updated: false
            }
        },
        methods:{
            init(){
                let msgId = this.$route.query;
//                if(msgId){
//                    this.doDetail({id:msgId});
//                }
                this.columnsUrl="static/json/webSet/sysMessage/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.messages;
                this.baseUrl = URL.api + ROUTES.GET.messages;
            },
             //表格内按钮事件
            doHandle(e){
                this.updated = false;
                switch (e.fn){
                    case "doDetail":
                        this.doDetail(e.row)
                        break;
                    case "doDelete":
                        this.doDelete(e.row)
                        break;

                }
            },
             doDetail(row){
                let model = row || {};
                let dialogText = this.dialogText;
                if(parseInt(row.status) === 0){

                    this.$.autoAjax('put',URL.api + ROUTES.PUT.admin.message,{"id":row.id ,status:parseInt(row.status) == 0?1:1},{
                        ok: (res) => {
                            if(res.state === 0 && res.data){
//                            this.$message.success(LANG['消息查看成功'] || '消息查看成功');
                                this.updated = true;
                            }else{
                                this.$message.error(LANG['消息查看失败，请稍后试'] || '消息查看失败，请稍后试');
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
//                     this.$http.put(URL.api + ROUTES.PUT.admin.message,JSON.stringify({"id":row.id ,status:parseInt(row.status) == 0?1:1}),URLCONFIG).then((res)=>{
//                         if(res.data.state === 0 && res.data.data){
// //                            this.$message.success(LANG['消息查看成功'] || '消息查看成功');
//                             this.updated = true;
//                         }else{
//                             this.$message.error(LANG['消息查看失败，请稍后试'] || '消息查看失败，请稍后试');
//                         }
//                     })
                    .catch((e)=>{
                        this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
                    });
                }
                this.editVisible=true;
                this.dialogVisible = true;
                for(let i in model){
                    dialogText[i] = model [i];
                }
            },
            doDelete(row){

                this.$.autoAjax('put',URL.api + ROUTES.PUT.admin.message,{"id":row.id, status: 2}, {
                    ok: (res) => {
                        if(res.state === 0 && res.data){
                            this.$message.success(LANG['删除成功'] || '删除成功');
                            this.updated = true;
                        }else{
                            this.$message.success(LANG['删除失败'] || '删除失败');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.put(URL.api + ROUTES.PUT.admin.message,JSON.stringify({"id":row.id, status: 2}),URLCONFIG).then((res)=>{
                //         if(res.data.state === 0 && res.data.data){
                //             this.$message.success(LANG['删除成功'] || '删除成功');
                //             this.updated = true;
                //         }else{
                //             this.$message.success(LANG['删除失败'] || '删除失败');
                //         }
                //     })
                .catch((e)=>{
                        this.$message.success(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
                    });
            }
        },
        components: {
            tablegrid:tableGrid
        },
        created(){
            this.init()
        }
    }
</script>
<style>
    #content h3{margin-bottom: 20px;}
</style>
