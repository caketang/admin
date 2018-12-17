<template>
    <div id="results" class="clearfix"  v-loading.body="loading">
        <el-col :span="24" style="text-align: right;" class="pb">
            <el-button type="primary" size="small" @click="doAdd" v-text="LANG['新增文案管理'] || '新增文案管理'" ></el-button>
        </el-col>
        <el-col :span="24">
            <!--编辑界面-->
            <formEdit :formTitel="formTitel"  :formVisible="editVisible" :formConfig="formConfig" :type="type" :labelWidth="labelWidth" @get-form="getForm" :isEdit="isEdit" :formType="formType"></formEdit>
        </el-col>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableIndex="false"
                    :tableCheck="false"
                    :showRefresh="true"
                    :updated = "updated"
                    @do-handle="doHandle"></tablegrid>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <el-col>
            <el-dialog :title="LANG['说明文字详情'] || '说明文字详情' " v-model="dialogTableVisible" class="detail" size="tiny">
                <el-form :model="detailform">
                    <el-form-item :label="LANG['文案名称'] || '文案名称'" :label-width="formLabelWidth">
                        <span>{{detailform.name}}</span>
                    </el-form-item>
                    <el-form-item :label="LANG['语言'] || '语言'" :label-width="formLabelWidth">
                        <p style="width: 90%;">{{detailform['language_name']}}</p>
                    </el-form-item>
                    <el-form-item :label="LANG['当前排序'] || '当前排序'" :label-width="formLabelWidth">
                        <p style="width: 90%;">{{detailform['sort']}}</p>
                    </el-form-item>
                    <el-form-item :label="LANG['文案内容'] || '文案内容'" :label-width="formLabelWidth">
                        <div v-html="detailform['content']" class="mark_waip pre-spe"></div>
                    </el-form-item>
                    <el-form-item :label="LANG['生成时间'] || '生成时间'" :label-width="formLabelWidth">
                        <span>{{detailform['created']}}</span>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">关 闭</el-button>
            </span>
            </el-dialog>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue';
    import formEdit from '../../components/formEdit.vue';
    import confirm from '../../components/confirm.vue';
    export default{
        data(){
            return {
                LANG,
                //数据接口地址
                tableUrl: "",
                baseUrl: "",
                //列配置接口地址
                columnsUrl: "",
                nowId: -1,
                //编辑框状态
                editVisible:{
                    state:false
                },
                //当前表单类型
                formType: "",
                page: 1,
//                //弹窗相关
                formConfig: [
                    {"prop":"name","value":"","type":"text","label":"文案名称","rules":[{"require":true}]},
                    {"prop":"language_id","value":"","label":"语言","type":"select","propVal":"language_name",
                        "list":[],
                        "rules":[{"require":true}]},
                    {"prop":"sort","value":"","type":"number","label":"排序","rules":[{"require":true,"integer":true}]},
                    {"prop":"content","value":"","type":"markdown","label":"文案内容","config":{maximumWords: 5000},"rules":[{"require":true}]},
                    {"prop": "pf", "value": ""},
                ],

                type: "default",
                formTitel: "",
                labelWidth: "90px",
                // 是否编辑数据
                isEdit: {
                    state:false
                },
                updated:false,
                loading:false,
                //删除确认
                confirmConfig:{
                    state:false,
                    msg:"",
                    fn:"",
                    obj:null,
                },
                //详情
                dialogTableVisible: false,
                detailform: {},
                formLabelWidth: '100px'
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
            confirm:confirm
        },
        methods: {
            init(){
                let _this = this;
                this.tableUrl = URL.api + ROUTES.GET.copywriter.desc;
                this.baseUrl = URL.api + ROUTES.GET.copywriter.desc;
                this.columnsUrl = "static/json/ADManage/ADHome/columns.json";
                let  list = this.formConfig[1].list;
				this.$.autoAjax('get', URL.api + ROUTES.GET.langeages, '', {
					ok: (res) => {
						if(res.state ==0 && res.data){
							let model = res.data;
							for(let i in model){
								list.push({
									"label": model[i].name,
									"value": model[i].id.toString()
								});
							}
						}
					},
					p: () => {
					},
					error: e => {
						_this.loading = false;
						_this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
					}
				})
            },
            //表格操作点击事件处理
            doHandle(e){
                this.nowId = parseInt(e.row.id) || -1;
                this.formType = "";
                switch (e.fn) {
                    case "doApply":
                        this.doApply(e.row);
                        break;
                    case "doEdit":
                        this.doEdit(e.row);
                        break;
                    case "doDetail":
                        this.doDetail(e.row);
                        break;
                    case "doEnable":
                        this.doEnable(e.row);
                        break;
                    case "doDisable":
                        this.doDisable(e.row);
                        break;
                    case "doDelete":
                        this.doDelete(e.row);
                        break;
                }
            },
            doAdd(){
                this.formTitel = "新增说明方案";
                this.editVisible.state = true;
                this.formType="add";
            },
            //保存数据
            getForm(obj){
                this.updated = false;
                let _this = this;
                this.fullscreenLoading = true;
                let str="";
                obj.formObj["type"] = "help";
                obj.formObj["pf"] = "pc";
                if(this.formType == "add"){
                    obj.formObj['type']= "help"

					this.$.autoAjax('put',URL.api+ ROUTES.PUT.copywriter.description, obj.formObj, {
						ok: (res) => {
							if (res.state !=undefined && res.state == 0) {

								str=LANG['恭喜您，新增说明方案成功！'] || '恭喜您，新增说明方案成功！';
								_this.updated = true;
								_this.$message.success(str);

							}else if (res.data == false  && res.state > 3){

								this.fullscreenLoading = false;
								str = res.msg;

								_this.$message.error(LANG[str] || str);

							}
							this.fullscreenLoading = false;
							_this.formType = "";
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.put(URL.api+ ROUTES.PUT.copywriter.description, JSON.stringify(obj.formObj),URLCONFIG).then((res)=>{
                    //     if (res.data.state !=undefined && res.data.state == 0) {
					//
                    //             str=LANG['恭喜您，新增说明方案成功！'] || '恭喜您，新增说明方案成功！';
                    //             _this.updated = true;
                    //             _this.$message.success(str);
					//
                    //     }else if (res.data.data == false  && res.data.state > 3){
					//
                    //             this.fullscreenLoading = false;
                    //             str = res.data.msg;
					//
                    //         _this.$message.error(LANG[str] || str);
					//
                    //     }
                    //     this.fullscreenLoading = false;
                    //     _this.formType = "";
                    // })
                    .catch((e)=>{
                        _this.loading = false;
//                        _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
                    });
                }else {



					this.$.autoAjax('put',URL.api+ ROUTES.PATCH.copywriter.description +'?id='+ this.nowId,obj.formObj,{
						ok: (res) => {
							if (res.state !=undefined  && res.state == 0){
								str=LANG['恭喜您，说明方案修改成功！'] || '恭喜您，说明方案修改成功！';
								_this.updated = true;
								_this.$message.success(str);
							}else if (res.data == false  && res.state > 3) {
								str = res.msg;
								_this.$message.error(LANG[str] || str);
							}
							this.fullscreenLoading = false;
							_this.formType = "";
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.put(URL.api+ ROUTES.PATCH.copywriter.description +'?id='+ this.nowId, JSON.stringify(obj.formObj), URLCONFIG).then((res) => {
					//
                    //     if (res.data.state !=undefined  && res.data.state == 0){
                    //         str=LANG['恭喜您，说明方案修改成功！'] || '恭喜您，说明方案修改成功！';
                    //         _this.updated = true;
                    //         _this.$message.success(str);
                    //     }else if (res.data.data == false  && res.data.state > 3) {
                    //           str = res.data.msg;
                    //           _this.$message.error(LANG[str] || str);
                    //     }
                    //     this.fullscreenLoading = false;
                    //     _this.formType = "";
                    // })
                    .catch((e)=>{
                        _this.loading = false;
//                        _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
                    });
                }

            },
            // 编辑
            doEdit(row){
                let _this = this;
                this.loading = true;
                _this.isEdit.state = false;
                let fromDataUrl = URL.api + ROUTES.GET.copywriter.desc + "?id="+ parseInt(this.nowId);

				this.$.autoAjax('get',fromDataUrl, '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							_this.isEdit.state = true;
							_this.formTitel = "修改说明文案";
							FORMVAL(res.data, _this.formConfig);
							_this.formType = "edit";
							_this.editVisible.state = true;
						} else {
							_this.$message.error(LANG['修改说明文案'] || '修改说明文案');
						}
						_this.loading = false;
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(fromDataUrl, URLCONFIG).then((res) => {
                //     if (res.data.state == 0 && res.data.data) {
                //         _this.isEdit.state = true;
                //         _this.formTitel = "修改说明文案";
                //         FORMVAL(res.data.data, _this.formConfig);
                //         _this.formType = "edit";
                //         _this.editVisible.state = true;
                //     } else {
                //         _this.$message.error(LANG['修改说明文案'] || '修改说明文案');
                //     }
                //     _this.loading = false;
                // })
                .catch((e)=>{
                    _this.loading = false;
//                    _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
                });

            },
            //查看详情
            doDetail(row){
                let _this = this;
                this.loading = true;
                let detailform = this.detailform;
                let fromDataUrl = URL.api + ROUTES.GET.copywriter.desc + "?id=" + parseInt(this.nowId);

				this.$.autoAjax('get',fromDataUrl, '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							let model = res.data;
							for(let k in model){
//                            if(k === 'content'){
//                                detailform[k] = this.markdownTransform(model[k]);
//                            }else{
								detailform[k] = model[k];
//                            }
							}
							_this.dialogTableVisible = true;
						} else {
							_this.$message.error(LANG['修改说明文案'] || '修改说明文案');
						}
						_this.loading = false;
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
//                 this.$http.get(fromDataUrl, URLCONFIG).then((res) => {
//                     if (res.data.state == 0 && res.data.data) {
//                         let model = res.data.data;
//                         for(let k in model){
// //                            if(k === 'content'){
// //                                detailform[k] = this.markdownTransform(model[k]);
// //                            }else{
//                                 detailform[k] = model[k];
// //                            }
//                         }
//                         _this.dialogTableVisible = true;
//                     } else {
//                         _this.$message.error(LANG['修改说明文案'] || '修改说明文案');
//                     }
//                     _this.loading = false;
//                 })
                .catch((e)=>{
                    _this.loading = false;
//                    _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
                });
            },
            //申请
            doApply(row)
            {
                if(parseInt(row.id)){
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定申请'] || '确定申请') +'"'+ row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "apply";
                    this.confirmConfig.obj = row;
                }
            },
                       //启用
            doEnable(row){
              if(parseInt(row.id)){
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') +'"'+ row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "enabled";
                    this.confirmConfig.obj = row;
                }
            },
            doDisable(row){
              if(parseInt(row.id)){
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') +'"'+ row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "disabled";
                    this.confirmConfig.obj = row;
                }
            },
            doDelete(row){
              if(parseInt(row.id)){
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') +'"'+ row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "delete";
                    this.confirmConfig.obj = row;
                }
            },
            doConfirm(obj){
                this.loading = true;
                this.updated = false;
                let _this = this;
                switch (obj.fn){
                    case "apply":
                        let applydata = {"approve_status":"applying", "language_id": parseInt(obj.obj.language_id), "pf": obj.obj.pf};
                        this.loading = true;

						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.copywriter.description+"?id="+parseInt(this.nowId), applydata, {
							ok: (res) => {
								if (res.state == 0 && res.data) {
									_this.$message.success(LANG['恭喜您，说明方案申请成功'] || '恭喜您，说明方案申请成功');
									_this.updated = true;

								} else {
									_this.$message.error(LANG['说明方案申请失败，请稍候重试！'] || '说明方案申请失败，请稍候重试！');

								}
								_this.loading = false;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.description+"?id="+parseInt(this.nowId),JSON.stringify(applydata),URLCONFIG).then((res) => {
                        //     if (res.data.state == 0 && res.data.data) {
                        //         _this.$message.success(LANG['恭喜您，说明方案申请成功'] || '恭喜您，说明方案申请成功');
                        //         _this.updated = true;
						//
                        //     } else {
                        //         _this.$message.error(LANG['说明方案申请失败，请稍候重试！'] || '说明方案申请失败，请稍候重试！');
						//
                        //     }
                        //     _this.loading = false;
                        // })
                        .catch((e)=>{
                            _this.loading = false;
//                            _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
                        });
                    break;
                    case "enabled":

						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.copywriter.description+"?id="+parseInt(this.nowId),{"status":"enabled", "language_id": parseInt(obj.obj.language_id),"pf":obj.obj.pf}, {
							ok: (res) => {
								if (res.state == 0 && res.data) {
									_this.$message.success(LANG['恭喜您，说明方案启用成功！'] || '恭喜您，说明方案启用成功！');
									_this.updated = true;
								} else {
									_this.$message.error(LANG['说明方案启用失败，请稍候重试！'] || '说明方案启用失败，请稍候重试！');

								}
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        _this.loading = false;
                    break
                    case "disabled":

						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.copywriter.description+"?id="+parseInt(this.nowId),{"status":"disabled", "language_id": parseInt(obj.obj.language_id),"pf":obj.obj.pf}, {
							ok: (res) => {
								if (res.state == 0 && res.data) {
									_this.$message.success(LANG['恭喜您，说明方案停用成功！'] || '恭喜您，说明方案停用成功！');
									_this.updated = true;
								} else {
									_this.$message.error(LANG['说明方案停用失败，请稍候重试！'] || '说明方案停用失败，请稍候重试！');

								}
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        _this.loading = false;
                    break
                    case "delete":
						this.$.autoAjax('delete',URL.api + ROUTES.DELETE.copywriter.desc+"?id="+parseInt(this.nowId), '', {
							ok: (res) => {
								if (res.state == 0 && res.data) {
									_this.$message.success(LANG['恭喜您，说明方案删除成功！'] || '恭喜您，说明方案删除成功！');
									_this.updated = true;
								} else {
									_this.$message.error(LANG['说明方案删除失败，请稍候重试！'] || '说明方案删除失败，请稍候重试！');

								}
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                           _this.loading = false;
                    break
                }
            },
    },
        created(){
            this.init();
        }
    }
</script>
<style >

    #results .bg-purple-dark {
        background: none;
    }

    #results .addManage {
        float: right;
    }

    #results .block {
        text-align: right;
    }

    #results .mark_waip  table{
        width: 100% !important;
    }
</style>
