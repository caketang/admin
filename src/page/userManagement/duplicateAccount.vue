<template>
    <div id="duplicateAccount">
        <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="type" :labelWidth="labelWidth"
                  @do-query="doQuery" :isEdit="isEdit"  @reset-form="resetForm" :showAdd="false"></formEdit>
        <!--<el-button type="primary"  size="small" v-text="LANG['评分设置'] || '评分设置'" @click="doAdd"-->
                   <!--style="position: absolute;right:0;top:50px"></el-button>-->
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="false"
                    :pageSet="true"
                    :tableIndex="false">
            </tablegrid>
        </el-col>
        <!--<el-dialog :title="editTitle" v-model="gradeParticular" >-->
            <!--<el-form :model="editForm" :rules="rules" ref="editForm" label-width="0px" >-->
                <!--<table cellspacing="0" cellpadding="0" border="1" class="el-table el-table__header tCent w100 setUp">-->
                    <!--<tr><td>评分选项</td>-->
                        <!--<td>完全相同评分</td>-->
                        <!--<td>相似评分</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>账户</td>-->
                        <!--<td>-->
                            <!--<el-form-item prop="username">-->
                                <!--<el-input v-model="editForm.username['alike']" size="small"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</td>-->
                        <!--<td>-->
                            <!--<el-form-item prop="username">-->
                                <!--<el-input v-model="editForm.username['similar']" size="small"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>密码</td>-->
                        <!--<td>-->
                            <!--<el-form-item  prop="password">-->
                                <!--<el-input v-model="editForm.password['alike']" size="small"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</td>-->
                        <!--<td>  <el-form-item  prop="password">-->
                            <!--<el-input v-model="editForm.password['similar']" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>真实姓名</td>-->
                        <!--<td>-->
                            <!--<el-form-item  prop="name">-->
                                <!--<el-input v-model="editForm.name['alike']" size="small"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</td>-->
                        <!--<td>  <el-form-item  prop="name">-->
                            <!--<el-input v-model="editForm.name['similar']" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>手机号码</td>-->
                        <!--<td>-->
                            <!--<el-form-item  prop="mobile">-->
                                <!--<el-input v-model="editForm.mobile['alike']" size="small"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</td>-->
                        <!--<td>  <el-form-item  prop="mobile">-->
                            <!--<el-input v-model="editForm.mobile['similar']" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>电子邮箱</td>-->
                        <!--<td>-->
                            <!--<el-form-item prop="email">-->
                                <!--<el-input v-model="editForm.email['alike']" size="small"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</td>-->
                        <!--<td>  <el-form-item  prop="email">-->
                            <!--<el-input v-model="editForm.email['similar']" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>QQ</td>-->
                        <!--<td>-->
                            <!--<el-form-item  prop="qq">-->
                                <!--<el-input v-model="editForm.qq['alike']" size="small"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</td>-->
                        <!--<td>  <el-form-item prop="qq">-->
                            <!--<el-input v-model="editForm.qq['similar']" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>微信</td>-->
                        <!--<td>-->
                            <!--<el-form-item  prop="weixin">-->
                                <!--<el-input v-model="editForm.weixin['alike']" size="small"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</td>-->
                        <!--<td>  <el-form-item  prop="weixin">-->
                            <!--<el-input v-model="editForm.weixin['similar']" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>城市</td>-->
                        <!--<td>-->
                            <!--<el-form-item  prop="city">-->
                                <!--<el-input v-model="editForm.city['alike']" size="small"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</td>-->
                        <!--<td>  <el-form-item  prop="city">-->
                            <!--<el-input v-model="editForm.city['similar']" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>注册ID</td>-->
                        <!--<td>-->
                            <!--<el-form-item  prop="region_id">-->
                                <!--<el-input v-model="editForm.region_id['alike']" size="small"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</td>-->
                        <!--<td>  <el-form-item  prop="region_id">-->
                            <!--<el-input v-model="editForm.region_id['similar']" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>注册IP</td>-->
                        <!--<td>-->
                            <!--<el-form-item  prop="ip">-->
                                <!--<el-input v-model="editForm.ip['alike']" size="small"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</td>-->
                        <!--<td>  <el-form-item  prop="ip">-->
                            <!--<el-input v-model="editForm.ip['similar']" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--</td>-->
                    <!--</tr>-->
                    <!--<tr>-->
                        <!--<td>登录IP</td>-->
                        <!--<td>-->
                            <!--<el-form-item  prop="login_ip">-->
                                <!--<el-input v-model="editForm.login_ip['alike']" size="small"></el-input>-->
                            <!--</el-form-item>-->
                        <!--</td>-->
                        <!--<td>  <el-form-item  prop="login_ip">-->
                            <!--<el-input v-model="editForm.login_ip['similar']" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--</td>-->
                    <!--</tr>-->

                <!--</table>-->
            <!--</el-form>-->
            <!--<div slot="footer" class="dialog-footer">-->
                <!--<el-button @click="gradeParticular = false">{{LANG['取消'] || '取消'}}</el-button>-->
                <!--<el-button type="primary" @click.native="doSave">{{LANG['保存'] || '保存'}}</el-button>-->
            <!--</div>-->
        <!--</el-dialog>-->
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    export default{
        data(){
            let validteNumber = (rule, value, callback) => {
                let alike_bo = Number.isInteger(parseInt(value['alike']));
                let similar_bo = Number.isInteger(parseInt(value['similar']))
                if (value['alike'] === undefined || value['similar'] === undefined) {
                    callback(new Error(LANG['请输入内容'] || '请输入内容'));
                } else if (!alike_bo || !similar_bo) {
                    callback(new Error(LANG['请输入内容'] || '请输入内容'));
                } else {
                    callback();
                }
            };
            return {//表格列数据
                LANG,
                columnsUrl: "",
                //表格数据
                tableUrl: "",
                gradeParticular: false,
                dialogVisible: false,
                //搜索相关
                searchConfig: [
                    {"prop": "username", "value": "", "type": "text", "label": "用户名"},
                ],
                type: "search",
                labelWidth: "90px",
                formVisible: {
                    state: false
                },
                //是否编辑数据
                isEdit: {
                    state: false
                },
                gradeList:'',
                oColumn:[
                    {label:'评分选项',},
                    {label:'完全相同评分'},
                    {label:'相似评分'},
                ],
                tbody:null,
                //弹窗相关
                editTitle:"重复账号评分设置",
                editFormVisible:false,
                editflag:false,
                editBtnText:"",
                //评分设置
                editForm:{
                    "username":[],
                    "name": [],
                    "region_id": [],
                    "login_ip":[],
                    "ip": [],
                    "password": [],
                    "email": [],
                    "qq":[],
                    "weixin": [],
                    "city": [],
                    "mobile":[]
                },
                rules: {
                    username: [
                        {validator: validteNumber, trigger: 'blur'}
                    ],
                    name: [
                        {validator: validteNumber, trigger: 'blur'}
                    ],
                    region_id: [
                        {validator: validteNumber, trigger: 'blur'}
                    ],
                    login_ip: [
                        {validator: validteNumber, trigger: 'blur'}
                    ],
                    ip: [
                        {validator: validteNumber, trigger: 'blur'}
                    ],
                    password: [
                        {validator: validteNumber, trigger: 'blur'}
                    ],
                    email: [
                        {validator: validteNumber, trigger: 'blur'}
                    ],
                    qq: [
                        {validator: validteNumber, trigger: 'blur'}
                    ],
                    weixin: [
                        {validator: validteNumber, trigger: 'blur'}
                    ],
                    city: [
                        {validator: validteNumber, trigger: 'blur'}
                    ],
                    mobile: [
                        {validator: validteNumber, trigger: 'blur'}
                    ],
                },
            }

        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit
        },
        methods: {
            init(){
                this.columnsUrl = "static/json/systemSettings/duplicateAccount/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.system.account;
                this.baseUrl = URL.api + ROUTES.GET.system.account;
                this.gradeList = URL.api + ROUTES.GET.system.grade;

				this.$.autoAjax('get',this.gradeList, '', {
					ok: (res) => {
						this.tbody = res.data;
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(this.gradeList, URLCONFIG).then((res) => {
                //     this.tbody = res.data.data;
                // })
                .catch((err)=>{
//                    console.log(err)
                })
            },
            //执行查询
            doQuery(obj){
                this.tableUrl = URL.api + ROUTES.GET.system.account + this.addSearch(obj.item)
            },
            //重置查询条件
            doReset(){
                let searchform = this.searchform;
                for (let i in searchform) {
                    if (i != "Sdate") {
                        searchform[i] = ""
                    } else {
                        searchform[i] = {dateEnd: "", dateStart: ""}
                    }
                }
            },
            doAdd(){
                let _this = this;
                this.gradeParticular = true;

				this.$.autoAjax('get', URL.api + ROUTES.GET.system.same, '', {
					ok: (res) => {
						if(res.state == 0 && res.data){
							let model=res.data;
							for(let i in model){
								this.editForm[i]=model[i];
							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.system.same, URLCONFIG).then((res) => {
                //     if(res.data.state == 0 && res.data.data){
                //         let model=res.data.data;
                //         for(let i in model){
                //             this.editForm[i]=model[i];
                //         }
                //     }
                // })
            },
            doSave(){
                let _this = this;
                let res_obj = {};
                this.$refs.editForm.validate((valid) => {
                    if(valid){
                        for (let i in this.editForm) {
                            res_obj[i] = this.editForm[i]['alike'] + ',' + this.editForm[i]['similar'];
                        }
                        // return;

						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.system.same,res_obj, {
							ok: (res) => {
								if(res.state == 0){
									this.$message.success(LANG["评分保存成功"] || "评分保存成功");
									//关闭modal
									this.gradeParticular = false;
								}
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // this.$http.patch(URL.api + ROUTES.PATCH.system.same,JSON.stringify(res_obj), URLCONFIG).then((res) => {
                        //     if(res.data.state == 0){
                        //         this.$message.success(LANG["评分保存成功"] || "评分保存成功");
                        //         //关闭modal
                        //         this.gradeParticular = false;
                        //     }
                        // })
                    }
                });
            },
            //重置查询
            resetForm(){
                this.tableUrl = this.baseUrl;
            }
        },
        mounted(){
        },
        created: function () {
            this.init();
        }
    }
</script>
<style>
    .setUp input{
        width: calc(100% - 30px);
        margin: 10px 15px;
    }
    .setUp .el-form-item{
        margin-bottom: 0px;
    }
</style>
