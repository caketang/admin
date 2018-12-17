<template>
    <div id="CommissionFeeset" class="clearfix" v-loading="loading">
        <div class="search el-col">
            <el-button class="btn_right addBut" size="small" type="primary" v-text="LANG['新增退佣手续费'] || '新增退佣手续费'" @click="AddNew"></el-button>
        </div>
        <el-col class="mt10">
            <tablegrid
                    :updated="updataTable"
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableIndex="false"
                    :showRefresh="true"
                    :tableCheck="false"
                    @do-handle="doHandle"></tablegrid>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <el-col>
            <!--编辑界面-->
            <!--<formEdit :formTitel="formTitle" :formVisible="editVisible" :formConfig="formConfig" :type="type" :labelWidth="labelWidth" @get-form="saveEditForm" :isEdit="isEdit" :formType="formType"></formEdit>-->
        </el-col>
        <el-col>
            <el-dialog :title="formTitle" v-model="formVisible" v-if="formVisible" size="tiny">
                <el-form :model="editForm" ref="editForm" label-width="130px" :rules="rules">
                    <el-form-item :label="LANG['入款手续费率(%)'] || '入款手续费率(%)'" prop="deposit_fee">
                        <el-input v-model.number="editForm.deposit_fee" type="number"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['入款手续费上限'] || '入款手续费上限'" prop="deposit_max">
                        <el-input v-model.number="editForm.deposit_max" type="number"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['出款手续费率(%)'] || '出款手续费率(%)'" prop="withdraw_fee">
                        <el-input v-model.number="editForm.withdraw_fee" type="number"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['出款手续费上限'] || '出款手续费上限'" prop="withdraw_max">
                        <el-input v-model.number="editForm.withdraw_max" type="number"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['状态'] || '状态'" prop="status">
                        <el-select v-model="editForm.status" placeholder="请选择">
                            <el-option label="启用" value="1"></el-option>
                            <el-option label="停用" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="resetEditForm">{{LANG['取消'] || '取消'}}</el-button>
                <el-button type="primary" @click="saveForm">{{LANG['保存'] || '保存'}}</el-button>
              </span>
            </el-dialog>
        </el-col>
    </div>
</template>
<script type="text/ecmascript-6">
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from  '../../components/formEdit.vue'
    import NProgress from 'nprogress'
    import confirm from '../../components/confirm.vue'
    export default {
        data () {
            var checkD = (rule,value,callback) => {
              if(!value){
                  return callback(new Error('请输入入款手续费率'));
              }
                setTimeout(()=>{
                    if (isNaN(value)){
                        callback(new Error('请输入数字'));
                    }else {
                        if(value>100){
                            callback(new Error('费率不能大于100%'));
                        }else if(value<0){
                            callback(new  Error('不能小于0'));
                        }else {
                            callback();
                        }
                    }
                },500);
            };
            var checkW = (rule,value,callback) => {
                if(!value){
                    return callback(new Error('请输入出款手续费率'));
                }
                setTimeout(()=>{
                    if (isNaN(value)){
                        callback(new Error('请输入数字'));
                    }else {
                        if(value>100){
                            callback(new Error('费率不能大于100%'));
                        }else if(value<0){
                            callback(new  Error('不能小于0'));
                        }else {
                            callback();
                        }
                    }
                },500);
            };
            var checkDM = (rule,value,callback) => {
                if (!value){
                    return callback(new Error('请输入入款手续费上限'));
                }
                setTimeout(()=>{
                    if(isNaN(value)){
                        callback(new Error('请输入数字'));
                    }else if(value<0){
                        callback(new  Error('不能小于0'));
                    }else {
                        callback();
                    }
                },500);
            };
            var checkWM = (rule,value,callback) => {
                if (!value){
                    return callback(new Error('请输入出款手续费上限'));
                }
                setTimeout(()=>{
                    if(isNaN(value)){
                        callback(new Error('请输入数字'));
                    }else if(value<0){
                        callback(new  Error('不能小于0'));
                    }else {
                        callback();
                    }
                },500);
            };
            return {
                LANG,
                rules:{
                    deposit_fee:[{validator:checkD,trigger:'blur',required:true}],
                    withdraw_fee:[{validator:checkW,trigger:'blur',required:true}],
                    deposit_max:[{validator:checkDM,trigger:'blur',required:true}],
                    withdraw_max:[{validator:checkWM,trigger:'blur',required:true}],
                    status:[{required:true,message:"请选择状态"}]
                },
                updataTable:false,
                //表格相关
                columnsUrl: "",
                baseUrl: "",
                tableUrl: "",
                //弹窗相关
                editTitle: "",
                editFormVisible: false,
                editForm: {
                   deposit_fee:"",
                    deposit_max:"",
                    withdraw_fee:"",
                    withdraw_max:"",
                    status:""
                },
                editBtnText: "",
                editFormRules: {
                    tagName: [{required: true, message: LANG['请输入标签名称'] || '请输入标签名称', trigger: 'blur'}]
                },
                // formEdit 配置
                formConfig: [
                    {"prop":"deposit_fee", "value":"", "type":"number", "label":"入款手续费率(%)", "rules":[{"require":true}]},
                    {"prop":"deposit_max", "value":"", "type":"number", "label":"入款手续费上限", "rules":[{"require":true}]},
                    {"prop":"withdraw_fee", "value":"", "type":"number", "label":"出款手续费率(%)", "rules":[{"require":true}]},
                    {"prop":"withdraw_max", "value":"", "type":"number", "label":"出款手续费上限", "rules":[{"require":true}]},
                    {"prop":"status", "value":true, "label":"状态", "type":"select",
                        "list":[{"label":"启用", "value":'1'}, {"label":"停用", "value":'0'}]},
                ],
                formType: "",
                formTitle: "",
                labelWidth: "135px",
                editVisible:{
                    state:false
                },
                formVisible:false,
                // 是否编辑数据
                isEdit: {
                    state:false
                },
                nowId:-1,
                //删除确认
                confirmConfig:{
                    state:false,
                    msg:"",
                    fn:""
                },
                loading: false
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
            confirm:confirm
        },
        methods: {
            init(){
                this.columnsUrl = "/static/json/agent/CommissionFeeset/columns.json";
                this.tableUrl = URL.api+ROUTES.GET.commission.fee;
                this.baseUrl = URL.api+ROUTES.GET.commission.fee;
            },
            resetEditForm(){
                this.editForm = {
                    deposit_fee:"",
                      deposit_max:"",
                      withdraw_fee:"",
                      withdraw_max:"",
                    status:""
                };
                this.formVisible=false;
            },
            saveForm(){
                this.updataTable=false;
                let _this = this;
                this.$refs.editForm.validate((valid)=>{
                   if(valid){
                       if (this.formType === 'add') {
                           let data = JSON.parse(JSON.stringify(this.editForm));
                           data.deposit_max = data.deposit_max*100;
                           data.withdraw_max = data.withdraw_max*100;

						   this.$.autoAjax('post',URL.api+ ROUTES.POST.commission.fee, data, {
							   ok: (res) => {
								   if (res.state !== undefined  && res.state === 0) {
									   this.$message.success(LANG['恭喜您，新增手续费成功！'] || '恭喜您，新增手续费成功！');
									   _this.updataTable=true;
								   }else{
									   this.$message.error(LANG['新增手续费失败，请稍候重试！'] || '新增手续费失败，请稍候重试！');
								   }
								   _this.formVisible = false;
							   },
							   p: () => {
							   },
							   error: e => {
								   console.log(e)
							   }
						   })
                           // this.$http.post(URL.api+ ROUTES.POST.commission.fee, JSON.stringify(data), URLCONFIG).then(res => {
                           //     if (res.data.state !== undefined  && res.data.state === 0) {
                           //         this.$message.success(LANG['恭喜您，新增手续费成功！'] || '恭喜您，新增手续费成功！');
                           //         _this.updataTable=true;
                           //     }else{
                           //         this.$message.error(LANG['新增手续费失败，请稍候重试！'] || '新增手续费失败，请稍候重试！');
                           //     }
                           //     _this.formVisible = false;
                           // });
                       } else if (this.formType === 'edit') {
                           let data = JSON.parse(JSON.stringify(this.editForm));
                           data.deposit_max = data.deposit_max*100;
                           data.withdraw_max = data.withdraw_max*100;

						   this.$.autoAjax('put',URL.api+ ROUTES.PUT.commission.fee+'?id='+parseInt(this.nowId),  data, {
							   ok: (res) => {
								   if (res.state !== undefined  && res.state === 0) {
									   this.$message.success(LANG['恭喜您，手续费修改成功！'] || '恭喜您，手续费修改成功！');
									   _this.updataTable=true;
								   }else{
									   this.$message.error('手续费修改失败，请稍候重试！');
								   }
								   _this.formVisible = false;
							   },
							   p: () => {
							   },
							   error: e => {
								   console.log(e)
							   }
						   })
                           // this.$http.put(URL.api+ ROUTES.PUT.commission.fee+'?id='+parseInt(this.nowId),  JSON.stringify(data), URLCONFIG).then(res => {
                           //     if (res.data.state !== undefined  && res.data.state === 0) {
                           //         this.$message.success(LANG['恭喜您，手续费修改成功！'] || '恭喜您，手续费修改成功！');
                           //         _this.updataTable=true;
                           //     }else{
                           //         this.$message.error('手续费修改失败，请稍候重试！');
                           //     }
                           //     _this.formVisible = false;
                           // });
                       }
                   } else {
                       return false;
                   }
                });

            },
            //新增
            AddNew(){
                this.formType = "add";
                this.formTitle = LANG["新增退佣手续费"] || "新增退佣手续费";
                this.formVisible = true;
                this.editForm = {
                    deposit_fee:"",
                    deposit_max:"",
                    withdraw_fee:"",
                    withdraw_max:"",
                    status:""
                }
            },
            //保存数据
//            saveEditForm (obj) {
//                this.updataTable=false;
//                NProgress.start();
//                if (this.formType === 'add') {
//                    this.$http.post(URL.api+ ROUTES.POST.commission.fee, JSON.stringify(obj.formObj), URLCONFIG).then(res => {
//                        NProgress.done();
//                        if (res.data.state !== undefined  && res.data.state === 0) {
//                            this.$message.success(LANG['恭喜您，新增手续费成功！'] || '恭喜您，新增手续费成功！');
//                            this.updataTable=true;
//                        }else{
//                            this.$message.error(LANG['新增手续费失败，请稍候重试！'] || '新增手续费失败，请稍候重试！');
//                        }
//                    });
//                } else if (this.formType === 'edit') {
//                    this.$http.put(URL.api+ ROUTES.PUT.commission.fee+'/'+parseInt(this.nowId),  JSON.stringify(obj.formObj), URLCONFIG).then(res => {
//                        NProgress.done();
//                        if (res.data.state !== undefined  && res.data.state === 0) {
//                            this.$message.success(LANG['恭喜您，手续费修改成功！'] || '恭喜您，手续费修改成功！');
//                            this.updataTable=true;
//                        }else{
//                            this.$message.error('手续费修改失败，请稍候重试！');
//                        }
//                    });
//                }
//            },
            //表格按钮点击事件
            doHandle(item){
                this.nowId = parseInt(item.row.id) || -1;
                this.formType = "";
                this.updataTable = false;
                switch (item.fn){
                    case "doEdit":
                        this.doEdit(item.row)
                        break
                    case "doEnable":
                        this.doEnable(item.row)
                        break
                    case "doDesable":
                        this.doDesable(item.row)
                        break
                    case "doDelete":
                        this.doDelete(item.row)
                }
            },
            //确认删除,启用，停用
            doConfirm(obj){
                // let _this = this;
                let object = {};
                if(obj.obj){
                    object = obj.obj;
                }
                object.id = parseInt(this.nowId);
                this.loading = true;
                switch (obj.fn){
                    case "doEnable":

						this.$.autoAjax('patch',URL.api+ ROUTES.PATCH.commission.fee+'?id='+object.id,{"status": 1}, {
							ok: (res) => {
								if (res.state == 0 && res.state == 0) {
									this.updataTable=true;
									this.$message.success(LANG['手续费启用成功'] || '手续费启用成功');
								}else{
									this.$message.error(LANG['手续费启用失败，请先停用已启用状态手续费，再重试！'] || '手续费启用失败，请先停用已启用状态手续费，再重试！');
								}
								this.loading = false;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // this.$http.patch(URL.api+ ROUTES.PATCH.commission.fee+'?id='+object.id,JSON.stringify({"status": 1}), URLCONFIG).then((res)=>{
                        //     if (res.data.state == 0 && res.data.state == 0) {
                        //         this.updataTable=true;
                        //         this.$message.success(LANG['手续费启用成功'] || '手续费启用成功');
                        //     }else{
                        //         this.$message.error(LANG['手续费启用失败，请先停用已启用状态手续费，再重试！'] || '手续费启用失败，请先停用已启用状态手续费，再重试！');
                        //     }
                        //     this.loading = false;
                        // })
                   break;
                    case "doDesable":

						this.$.autoAjax('patch', URL.api+ ROUTES.PATCH.commission.fee+'?id='+object.id,{"status": 0}, {
							ok: (res) => {
								if (res.state !=undefined && res.state == 0) {
									this.updataTable=true;
									this.$message.success(LANG['手续费停用成功'] || '手续费停用成功');
								}else{
									this.$message.error(LANG['手续费停用失败，请稍后重试'] || '手续费停用失败，请稍后重试');
								}
								this.loading = false;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // this.$http.patch(URL.api+ ROUTES.PATCH.commission.fee+'?id='+object.id,JSON.stringify({"status": 0}), URLCONFIG).then((res)=>{
                        //     if (res.data.state !=undefined && res.data.state == 0) {
                        //         this.updataTable=true;
                        //         this.$message.success(LANG['手续费停用成功'] || '手续费停用成功');
                        //     }else{
                        //         this.$message.error(LANG['手续费停用失败，请稍后重试'] || '手续费停用失败，请稍后重试');
                        //     }
                        //     this.loading = false;
                        // });
                    break;
                    case "doDelete":

						this.$.autoAjax('delete',URL.api + ROUTES.DELETE.commission.fee+'?id='+object.id, '', {
							ok: (res) => {
								if (res.state == 0 && res.data) {
									this.updataTable=true;
									this.$message.success(LANG['删除手续费成功'] || '删除手续费成功');
								}else{
									this.$message.success(LANG['手续费删除失败，请稍后重试'] || '手续费删除失败，请稍后重试');
								}
								this.loading = false;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // this.$http.delete(URL.api + ROUTES.DELETE.commission.fee+'?id='+object.id, URLCONFIG).then((res) => {
                        //     if (res.data.state == 0 && res.data.data) {
                        //         this.updataTable=true;
                        //         this.$message.success(LANG['删除手续费成功'] || '删除手续费成功');
                        //     }else{
                        //         this.$message.success(LANG['手续费删除失败，请稍后重试'] || '手续费删除失败，请稍后重试');
                        //     }
                        //     this.loading = false;
                        // })

                }
            },
            //编辑
            doEdit(row){
                this.formTitle = LANG["修改退佣手续费"] || "修改退佣手续费";
                this.formType = "edit";
                this.formVisible = true;
                this.editForm = {
                    deposit_fee:Number(row.deposit_fee),
                    deposit_max:Number(row.deposit_max/100),
                    withdraw_fee:Number(row.withdraw_fee),
                    withdraw_max:Number(row.withdraw_max/100),
                    status:row.status
                };
//                setTimeout(() => {
//                    FORMVAL(row, this.formConfig);
//                    this.formType = "edit";
//                    this.isEdit.state = true;
//                    this.editVisible.state = true;
//                },500)
            },
            //启用
            doEnable(row){
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定要启用'] || '确定要启用')  +
                  (this.LANG['此手续费么？当前手续费将停止使用。'] || '此手续费么？当前手续费将停止使用。');
                this.confirmConfig.fn = "doEnable";
                this.confirmConfig.obj = row;
            },
            //停用
            doDesable(row){
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定要停用'] || '确定要停用')  +
                  (this.LANG['此手续费么？当前手续费将停止使用。'] || '此手续费么？当前手续费将停止使用。');
                this.confirmConfig.fn = "doDesable";
                this.confirmConfig.obj = row;
            },
            // 删除
            doDelete(row) {
                if(row.status == '1'){
                    this.$message.error(LANG['启用状态的手续费不可删除'] || '启用状态的手续费不可删除');
                    return ;
                }
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定要删除'] || '确定要删除')  +
                  (this.LANG['此退佣手续费。'] || '此退佣手续费。');
                this.confirmConfig.fn = "doDelete";
            }
        },
        computed:{
        },
        mounted(){
        },
        created(){
            this.init()
        }
    }
</script>
<style >
    .btn_right{float:right;}
    .page{position: relative}
    /*.search .el-form-item__label{width:80px}*/
    /*.search .el-form-item{width:200px;float:left;margin-bottom: 1px}*/
    /*.search .el-form .formbtn{float:left;margin-left:10px;padding-top:5px}*/
    /*.search .el-form .outexcel{position: absolute;top:0;right:10px}*/
</style>
