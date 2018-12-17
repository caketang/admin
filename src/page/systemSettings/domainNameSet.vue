<template>
    <div id="domainNameSet" class="clearfix" v-loading="loading">
        <el-col :span="12" class="mt20" :offset="6" style="max-width: 600px;">
            <formEdit :formVisible="formVisible"
                      :formConfig="formConfig"
                      :formType="formType"
                      :type="'pageForm'"
                      :labelWidth="labelWidth"
                      :updateKeys="updateKeys"
                      @get-button="doTemplate"
                      :dnsUrl="dnsUrl"
                      :isEdit="isEdit"
                      :formTitel = "formTitel"
                      @get-form="saveForm"></formEdit>
        </el-col>
        <el-col>
            <el-dialog
                    :title="LANG['提示'] || '提示'"
                    :visible.sync="dialogVisible"
                    size="large">
                <H5Model :model="templist" :showKey="showKey" :type="tempType" @get-template="doGetTemplate" :showWindow="dialogVisible"></H5Model>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">{{LANG['取消'] || '取消'}}</el-button>
                    <el-button type="primary" @click="dialogVisible = false">{{LANG['确定'] || '确定'}}</el-button>
                </span>
            </el-dialog>
        </el-col>
    </div>
</template>
<script>
    //    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    import NProgress from 'nprogress'
    import H5Model from '../../components/mobile.vue'
    export default{
        data(){
            return {
                LANG,
                formVisible: {},
                isEdit: {},
                formTitel: "",
                labelWidth: "150px",
                //批量操作按钮
                tabOperation : [{"label":"批量停用","fn":"delMeg"}],
                updated: false,
                //确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                formType: "",
                nowId: 0,
                formConfig:[
                    {"prop":"name","value":"","type":"text","label":"站点名称","rules":[{"require":true}]},
                    {"prop":"title","value":"","type":"text","label":"站点标题","rules":[{"require":true}]},
                    {"prop":"bottom","value":"","type":"text","label":"站点底部信息","rules":[{"require":true}]},
                    {"prop":"domain","value":"","type":"textarea","domainType":"front","label":"域名列表","rulesType":"urls","rules":[{"require":true,"disabled":true,}],"prompt":LANG['绑定多个域名请使用换行（回车）隔开'] || '绑定多个域名请使用换行（回车）隔开'},
                    {"prop":"www_tname","text":"模板选择","label":"PC模板","type":"button","value":"","img":"","model":[],"showKey":"","temtype":"pc"},
                    {"prop":"m_tname","text":"模板选择","label":"H5前台模板","type":"button","value":"","img":"","model":[],"showKey":"","temtype":"h5"},
                    {
                        "prop":"is_ssl","value":"","label":"SSL加密","type":"select",
                        "list":[{"label":"是","value":"1"},
                            {"label":"否","value":"0"}],
                        "rules":[{"require":true}]
                    },
                    {
                        "prop":"lang","value":"","label":"语言","type":"select",
                        "list":[],
                        "rules":[{"require":true}]
                    },
                    {"prop":"logos","value":[],'type': "upload","fileNum":1,"label": "LOGO","action": URL.img,"folder":"adlist","rules":[{"require":true}]},
                ],
                // H5模板列表
                templist:[],
                showKey: "",
                tempType: "",
                // 模板中转变量 用于提交赋值
                h5Temp:"",
                wwwTemp:"",
                loading: false,
                dialogVisible:false,
                updateKeys:"",
                dnsUrl:""
            }
        },
        components: {
            formEdit: formEdit,
            H5Model: H5Model
        },
        methods: {
            init(){
                this.formType = '';
                this.columnsUrl = "static/json/systemSettings/domainNameSet/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.system.domain;
                this.baseUrl = URL.api + ROUTES.GET.system.domain;
                // 语言
                let langeUrl = URL.api + ROUTES.GET.langeages;

				this.$.autoAjax('get',langeUrl, '', {
					ok: (res) => {
						let model = res.data || [];
						for (let i in model) {
							this.formConfig[7].list.push({
								"label": model[i].name,
								"value": model[i].code
							})
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(langeUrl,URLCONFIG).then((res) => {
                //     let model = res.data.data || [];
                //     for (let i in model) {
                //         this.formConfig[7].list.push({
                //             "label": model[i].name,
                //             "value": model[i].code
                //         })
                //     }
                // })

                // pc模版和H5模版
                let styleUrl = URL.api + "/system/website/style";
                let _this = this;

				this.$.autoAjax('get',styleUrl,'', {
					ok: (res) => {
						let model_h5 = res.data.h5, model_pc = res.data.pc;
						for (let i in model_h5) {
							_this.formConfig[5].model.push({
								"id": model_h5[i].id,
								"key": model_h5[i].key,
								"checked": model_h5[i].checked
							})
						}
						for (let i in model_pc) {
							_this.formConfig[4].model.push({
								"id": model_pc[i].id,
								"key": model_pc[i].key,
								"checked": model_pc[i].checked
							})
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(styleUrl,URLCONFIG).then((res) => {
                //     let model_h5 = res.data.data.h5, model_pc = res.data.data.pc;
                //     for (let i in model_h5) {
                //         _this.formConfig[5].model.push({
                //             "id": model_h5[i].id,
                //             "key": model_h5[i].key,
                //             "checked": model_h5[i].checked
                //         })
                //     }
                //     for (let i in model_pc) {
                //         _this.formConfig[4].model.push({
                //             "id": model_pc[i].id,
                //             "key": model_pc[i].key,
                //             "checked": model_pc[i].checked
                //         })
                //     }
                // })
                // 初始化数据

				this.$.autoAjax('get',URL.api + ROUTES.GET.system.domain + "?type=2", '', {
					ok: (res) => {
						if(res.state === 0 && res.data){
							this.dnsUrl = res.data.domain || window.location.host;
							let model = res.data.info || [];
							FORMVAL(model,_this.formConfig);
							let list = _this.formConfig[7].list;
							_this.formConfig[7].value = model.lang;
							let temp = "";
							let arrs = model.domains || [];
							for(let i in arrs){
								if(arrs[i].domain){
									temp = temp + arrs[i].domain + "\r\n";
								}
							}
							_this.formConfig[3].value = temp;
							_this.formConfig[8].value.push(model.logo);
							_this.formConfig[4].showKey = model.www_tname;
							_this.formConfig[5].showKey = model.m_tname;
							_this.formConfig[4].value = '/static/img/pc_new/' + model.www_tname + '.jpg';
							_this.formConfig[5].value = '/static/img/mobile_new/' + model.m_tname + '.jpg';
							this.h5Temp = model.m_tname;
							this.wwwTemp = model.www_tname;
							this.formType = "eidt";
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.system.domain + "?type=2",URLCONFIG).then((res) => {
                //     if(res.data.state === 0 && res.data.data){
                //         this.dnsUrl = res.data.data.domain || window.location.host;
                //         let model = res.data.data.info || [];
                //         FORMVAL(model,_this.formConfig);
                //         let list = _this.formConfig[7].list;
                //         _this.formConfig[7].value = model.lang;
                //         let temp = "";
                //         let arrs = model.domains || [];
                //         for(let i in arrs){
                //             if(arrs[i].domain){
                //                 temp = temp + arrs[i].domain + "\r\n";
                //             }
                //         }
                //         _this.formConfig[3].value = temp;
                //         _this.formConfig[8].value.push(model.logo);
                //         _this.formConfig[4].showKey = model.www_tname;
                //         _this.formConfig[5].showKey = model.m_tname;
                //         _this.formConfig[4].value = '/static/img/pc_new/' + model.www_tname + '.jpg';
                //         _this.formConfig[5].value = '/static/img/mobile_new/' + model.m_tname + '.jpg';
                //         this.h5Temp = model.m_tname;
                //         this.wwwTemp = model.www_tname;
                //         this.formType = "eidt";
                //     }
                // });
            },
            //选择模板
            doTemplate(obj){
                this.showKey = obj.item.showKey || (obj.item.temtype === "h5" ?_this.formConfig[5].model[0].key:_this.formConfig[4].model[0].key);
                this.tempType = obj.item.temtype === "h5" ? "h5" : "pc";
                let _this = this;
                this.templist = [];
                obj.item.model.forEach((v)=>{
                    _this.templist.push(v);
                })
                this.dialogVisible = true;
            },
            // 获取点击模板
            doGetTemplate(obj){
                if(obj.type === "pc"){
//                    /static/img/pc_new/redclassics_s.jpg
                    this.updateKeys = 'www_tname,/static/img/pc_new/' + obj.data.key + '.jpg';
                    this.wwwTemp = obj.data.key;
                }else{
                    this.updateKeys = 'm_tname,/static/img/mobile_new/' + obj.data.key + '.jpg';
                    this.h5Temp = obj.data.key;
                }
            },

            // 保存信息
            saveForm(obj){
                let _this = this;
                let query = {
                    "type":2,
                    "build":0,
                    "remarks":""
                };
                for(let k in obj.formObj){
                    if(k === 'domain'){
                        query[k] = [];
                        obj.formObj[k].replace(new RegExp('\r\n|\n\r|\n|\r','g'),'|').split('|').forEach((v)=>{
                            if(v){
                                query[k] .push(v);
                            }
                        })
                    }else{
                        query[k] = obj.formObj[k];
                    }
                }
                query.m_tname = this.h5Temp;
                query.www_tname = this.wwwTemp;
                query['logo'] = obj.formObj['logos'].toString();
                delete query['logos'];
                //  h5模板
                let arrOne = this.formConfig[5].model;
                let arrTwo = _this.formConfig[4].model;
                for(let j in arrOne){
                    if(this.h5Temp === arrOne[j]['key']){
                        query.m_tid = arrOne[j]['id'];
                    }
                }
                for(let i in arrTwo){
                    if(this.wwwTemp === arrTwo[i].key){
                        query.www_tid = arrTwo[i].id;
                    }
                }

				this.$.autoAjax('put',URL.api + ROUTES.PUT.system.domain,query, {
					ok: (res) => {
						if(res.state === 0 && res.data){
							_this.$message.success(LANG['恭喜您，站点配置成功！'] || '恭喜您，站点配置成功！');
						}else if(res.state === 4005){
							_this.$message.error(LANG['厅主站点验证失败，请修改后重试！'] || '厅主站点验证失败，请修改后重试！');
							_this.showUrlError(res.data);
							_this.loading = false;
						}else if(res.state === 1002){
							_this.$message.error(LANG[res.msg] || res.msg);
							_this.showUrlError(res.data);
							_this.loading = false;
						}else{
							_this.$message.error(LANG['站点配置失败，请稍后重试！'] || '站点配置失败，请稍后重试！');
							_this.loading = false;
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // _this.$http.put(URL.api + ROUTES.PUT.system.domain,JSON.stringify(query),URLCONFIG).then((res)=>{
                //     if(res.data.state === 0 && res.data.data){
                //         _this.$message.success(LANG['恭喜您，站点配置成功！'] || '恭喜您，站点配置成功！');
                //     }else if(res.data.state === 4005){
                //         _this.$message.error(LANG['厅主站点验证失败，请修改后重试！'] || '厅主站点验证失败，请修改后重试！');
                //         _this.showUrlError(res.data.data);
                //         _this.loading = false;
                //     }else if(res.data.state === 1002){
                //         _this.$message.error(LANG[res.data.msg] || res.data.msg);
                //         _this.showUrlError(res.data.data);
                //         _this.loading = false;
                //     }else{
                //         _this.$message.error(LANG['站点配置失败，请稍后重试！'] || '站点配置失败，请稍后重试！');
                //         _this.loading = false;
                //     }
                // })
                .catch((e)=>{
//                    console.log(e);
                })
            },
            // 显示错误域名
            showUrlError(arr){
                let msg = "";
                if(arr.length === 0){
                    return;
                }
                for(let k in arr){
                    msg = msg + arr[k] +'\r\n';
                }
                this.$notify.error({
                    title: '域名验证失败列表',
                    message: msg,
                    duration: 0
                });
            }
        },
        mounted(){
        },
        created(){
            this.init();
        }
    }
</script>
<style>
    #domainNameSet .bg-purple {
        background: #d3dce6;
    }
    #domainNameSet .bg-purple-light {
        background: #e5e9f2;
    }
    #domainNameSet .bmBorder{border-bottom: 1px solid #fff;}
</style>
