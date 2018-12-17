<!--邮件模板-->
<template>
    <div id="emailMode" class="clearfix" v-loading.body="loading">
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableIndex="false"
                    :tableCheck="false"
                    :updated="updateType"
                    @do-handle="doHandle"
                    :tableUrl="tableUrl"></tablegrid>
        </el-col>
        <el-dialog :title="LANG['邮件模板详情'] || '邮件模板详情'" v-model="dialogVisible" size="tiny" class="details">
            <div class="detail">
                <h3>{{LANG['超文本格式'] || '超文本格式'}}:</h3>
                <p>{{parseInt(detailList.hyper_text)? "是":"否"}}</p>
            </div>
            <div class="detail">
                <h3>{{LANG['邮件模板名称'] || '邮件模板名称'}}:</h3>
                <p>{{detailList.title}}</p>
            </div>
            <div class="detail">
                <h3>{{LANG['邮件内容'] || '邮件内容'}}:</h3>
                <p>{{detailList.content}}</p>
            </div>
            <el-col :span="24" class="tCent" style="margin:20px 0;border-top:1px solid #cccccc;padding-top:10px;text-align: right">
                <el-button @click="dialogVisible = false">{{LANG['关闭'] || '关闭'}}</el-button>
            </el-col>
        </el-dialog>
    </div>
</template>
<script type="text/ecmascript-6">
    import tableGrid  from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    export default{
        data(){
            return{
                LANG,
                //数据接口地址
                tableUrl: "",
                columnsUrl: "",
                baseUrl : "",
                nowId: -1,
                //弹窗
                dialogVisible: false,
                detailList:{
                    content:"",
                    hyper_text:"",
                    title:""
                },
                updateType :false,
                loading: false
            }
        },
        components: {
            tablegrid:tableGrid,
            formEdit:formEdit
        },
        methods: {
            init(){
                this.tableUrl = URL.api + ROUTES.GET.system.email.template;
                this.baseUrl = URL.api + ROUTES.GET.system.email.template;
                this.columnsUrl = "static/json/systemSettings/emailMode/columns.json";
            },
            //表格按钮点击事件
            doHandle(item){
                switch (item.fn){
                    case "doDetail":
                        this.doDetial(item.row)
                        break
                }
            },
            //查看
            doDetial(row){
                //请求数据
                let nowId = row.id;
                let _this = this;
                this.loading = true;

				this.$.autoAjax('get', URL.api + ROUTES.GET.system.email.templates+"/"+parseInt(nowId),'', {
					ok: (res) => {
						if(res.state == 0 && res.data){
							let model = res.data[0];
							let detailList = _this.detailList;
							for(let k in model){
								detailList[k] = model[k];
							}
							_this.loading = false;
							_this.dialogVisible = true;
						}else{
							_this.$message.error(LANG['查看数据请求失败，请稍后重试！']|| '查看数据请求失败，请稍后重试！');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.system.email.templates+"/"+parseInt(nowId),URLCONFIG).then((res)=>{
                //     if(res.data.state == 0 && res.data.data){
                //         let model = res.data.data[0];
                //         let detailList = _this.detailList;
                //         for(let k in model){
                //             detailList[k] = model[k];
                //         }
                //         _this.loading = false;
                //         _this.dialogVisible = true;
                //     }else{
                //         _this.$message.error(LANG['查看数据请求失败，请稍后重试！']|| '查看数据请求失败，请稍后重试！');
                //     }
                // });

            }
        },
        computed: {},
        mounted(){
        },
        created(){
            this.init();
        }
    }
</script>
<style scoped>
    .btn_right{float: right;margin-right: 10px;}
    .detail {clear: both;}
    .detail h3{width: 25%;text-align: right;float: left;margin: 5px 10px 5px 0;}
    .detail p{width: 70%;float: left;margin: 5px 0;}
</style>