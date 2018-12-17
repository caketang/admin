<template>
    <div id="validUser">
        <formEdit :formVisible="{}"
                  :formConfig="formConfig"
                  :showAdd="false"
                  :formType="'other'"
                  :type="'search'"
                  :labelWidth="'120px'"
                  :isEdit="{'state':false}"
                  :formTitel = "''"
                  @do-query="doQuery"
                  @reset-form="resetForm"></formEdit>
        <el-col v-if="showTable">
            <el-card class="box-card-form" v-if="showAgent">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">代理基本资料</span>
                </div>
                <formEdit :formVisible="{}"
                          :formConfig="formAgentConfig"
                          :showAdd="false"
                          :formType="'other'"
                          :type="'pageForm'"
                          :labelWidth="'120px'"
                          :updateKeys="updateKeys"
                          :isEdit="{'state':false}"
                          :formTitel = "'代理基本资料'"
                          @get-form="saveForm"></formEdit>
            </el-card>
            <div style="width: 100%; height: 38px;" v-if="isShow">
                <el-button type="primary" size="small" style="float: right;" @click="exportData('user')">{{LANG['导出'] || '导出'}}</el-button>
            </div>
            <tableUsers :dataModelUrl="tableUrl"  @get_agentinfo="getAgentInfo"></tableUsers>
        </el-col>
        <el-col :span="8">

        </el-col>
        <el-col>
            <el-dialog
                    title="提示"
                    :visible.sync="onDialogVisible"
                    size="tiny">
                {{LANG['点击”确认“导出数据'] || '点击”确认“导出数据'}}
                <span slot="footer" class="dialog-footer">
                    <el-button @click="onDialogVisible = false">取 消</el-button>
                    <a :href="outUrl"  target="_blank" id="outUrl">
                        <el-button type="primary" @click="onDialogVisible = false">确 认</el-button>
                    </a>
              </span>
            </el-dialog>
        </el-col>
    </div>
</template>
<script>
    import formEdit from '../../components/formEdit.vue'
    import tableUsers from '../../components/tableUsers.vue'
    export default {
        data() {
            return {
                LANG,
                //搜索框
                isEdit: {},
                // 会员相关
                formConfig:[
                    {"type":"quickDate","showTimes": true},//快捷日期
                    {"prop":"agent_account","value":"","label":"代理账号","type":"text"},
                    {"prop":"user_account","value":"","type":"text","label":"会员帐号"},
                    {"type":"dateGroup","label":"时间","prop":[
                        {"prop":"start_time","value":"","label":"开始时间"},
                        {"prop":"end_time","value":"","label":"结束时间"}

                    ]},
                    {"prop":"type","value":"","label":"存取款方式","type":"select",
                        "list":[
                            {'label':'全部','value':'1'},
                            {'label':'有存款','value':'2'},
                            {'label':'有出款','value':'3'},
                            {'label':'有存取款','value':'4'},
                            {'label':'无存款','value':'5'},
                            {'label':'无取款','value':'6'},
                            {'label':'无存取款','value':'7'}
                        ]},
                ],
                // 代理相关
                formAgentConfig:[
                    {"prop":"name","value":"","label":"代理账号","type":"label"},
                    {"prop":"truename","value":"","type":"text","label":"真实姓名"},
                    {"prop":"mobile","value":"","type":"text","label":"手机号码"},
                    {"prop":"qq","value":"","type":"text","label":"QQ"},
                    {"prop":"weixin","value":"","type":"text","label":"微信"},
                    {"prop":"email","value":"","type":"text","label":"电子邮箱"},
                    {"prop":"created","value":"","type":"label","label":"注册日期"},
                ],
                showTable: false,
                tableUrl: '',
                baseUrl: '',
                // 查询会员不显示日期
                updateuserKeys: "",
                // 数据导出相关
                outUrl: "",
                onDialogVisible: false,
                sumShow: false,
                searchObj: {
                    agentName:'',
                    memberName:'',
                    register_from:'',
                    register_to:'',
                    type:''
                },
                updateKeys: '',
                agentId: -1,
                showAgent: false,
                isShow: sessionStorage.valid_user_export == 'true'? true : false
            }
        },
        props:{
            activeName:String()
        },
        methods: {
            // 初始化
            init() {
                this.searchObj.time_form = sessionStorage.sysTime;
                this.searchObj.time_to = sessionStorage.sysTime;
                this.tableUrl = URL.api + '/user/valid/agent.info/';
                this.baseUrl = URL.api + '/user/valid/agent.info/';
            },
            // 获取代理资料
            getAgentInfo(obj){
                let _this = this;
                this.showAgent = false;
                if(obj.data){
                    this.agentId = obj.data.id;
                    let temp ={
                        'name' : obj.data['name'] || '',
                        'truename' : obj.data['truename'] || '',
                        'mobile' : obj.data['mobile'] || '',
                        'qq' : obj.data['qq'] || '',
                        'weixin' : obj.data['weixin'] || '',
                        'email' : obj.data['email'] || '',
                        'created' : FORMATDATEPICKER(obj.data['created']) || ''
                    }
                    this.showAgent = true;
                    setTimeout(function () {
                        _this.updateKeys = 'name,'+ temp.name +',truename,' + temp.truename + ',mobile,' + temp.mobile
                            +',qq,'+ temp.qq + ',weixin,' + temp.weixin + ',email,' +  temp.email + ',created,' + temp.created;
                    },1000)
                }else{
                    _this.updateKeys = 'name,,truename,,mobile,,qq,,weixin,,email,,created,';
                }
            },
            // 执行查询
            doQuery(obj){
                if(obj.item.agent_account || obj.item.user_account){
                    this.showTable = true;
                    this.tableUrl = this.baseUrl+ this.addSearch(obj.item) + "&get_total=1";
                }else{
                    this.showTable = false;
                    this.tableUrl = '';
                    this.$message.error(LANG['代理帐号、会员帐号必填其一'] || '代理帐号、会员帐号必填其一');
                }
                for(let i in obj.item){
                    this.searchObj[i] = obj.item[i];
                }
            },
            // 重置代理表单
            resetForm(){
                this.tableUrl = '';
            },
            // 导出数据
            exportData(export_flag) {
                let url = "";
                url = URL.api + "/export/download/user";
                if (this.searchObj.time_form && this.searchObj.time_to) {

                    this.$.autoAjax('get',URL.api + '/dev/download/sign' + '?nonce=' + url, '', {
                        ok: (res) => {
                            if (res.data) {
                                let url_code = export_flag === "agent" ? this.addSearch(this.searchObj) : this.addSearch(this.searchObj)
                                this.outUrl = url + url_code + "&nonce=" + res.data.nonce + "&signature=" + res.data.signature + "&time="+ res.data.time + "&uuid=" + res.data.uuid;

                                this.onDialogVisible = true;
                            }else if(res.message){
                                this.$message.error(res.message);
                            } else {
                                this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                    // this.$http.get(URL.api + '/dev/download/sign' + '?nonce=' + url, URLCONFIG).then((res)=>{
                    //     if (res.data.data) {
                    //         let url_code = export_flag === "agent" ? this.addSearch(this.searchObj) : this.addSearch(this.searchObj)
                    //         this.outUrl = url + url_code + "&nonce=" + res.data.data.nonce + "&signature=" + res.data.data.signature + "&time="+ res.data.data.time + "&uuid=" + res.data.data.uuid;
					//
                    //         this.onDialogVisible = true;
                    //     }else if(res.data.message){
                    //         this.$message.error(res.data.message);
                    //     } else {
                    //         this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
                    //     }
                    // })
                } else {
                    this.$message.error(LANG['必需选择时间才能导出'] || '必需选择时间才能导出');
                    return;
                }
            },
            // 保存代理资料
            saveForm(obj){
                let baseFrom = obj.formObj;
                let _this = this;
                let data={
                    email: baseFrom.email,
                    mobile: baseFrom.mobile,
                    qq: baseFrom.qq,
                    weixin: baseFrom.weixin
                };

                this.$.autoAjax('patch',URL.api+ROUTES.PATCH.user.agent.messages+"/"+ this.agentId,data, {
                    ok: (res) => {
                        if(res.state == 0 && res.data){
                            _this.$message.success(LANG['代理资料修改成功！'] || '代理资料修改成功！');
                        }else if(res.state == 4003 || res.state == 2003 || res.state == 405){
                            _this.$message.error(LANG['无权限操作'] || '无权限操作');
                        }else{
                            _this.$message.error(LANG['基本资料修改失败，请稍后重试！'] || '基本资料修改失败，请稍后重试！');

                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.patch(URL.api+ROUTES.PATCH.user.agent.messages+"/"+ this.agentId,JSON.stringify(data),URLCONFIG).then((res)=>{
                //     if(res.data.state == 0 && res.data.data){
                //         _this.$message.success(LANG['代理资料修改成功！'] || '代理资料修改成功！');
                //     }else if(res.data.state == 4003 || res.data.state == 2003 || res.data.state == 405){
                //         _this.$message.error(LANG['无权限操作'] || '无权限操作');
                //     }else{
                //         _this.$message.error(LANG['基本资料修改失败，请稍后重试！'] || '基本资料修改失败，请稍后重试！');
				//
                //     }
                // })


//                this.$refs.baseFrom.validate((valid) => {
//                    if (valid) {
//                        this.changeId();
//                        let baseFrom = this.baseFrom;
//                        let _this = this;
//                        let data={ email: baseFrom.email == "" ? null : baseFrom.email, mobile: baseFrom.mobile, qq: baseFrom.qq.toString(), weixin: baseFrom.weixin, memo: baseFrom.memo, skype: baseFrom.skype };
//                        this.$http.patch(URL.api+ROUTES.PATCH.user.agent.messages+"/"+ baseFrom.id,JSON.stringify(data),URLCONFIG).then((res)=>{
//                            if(res.data.state == 0 && res.data.data){
//                                _this.$message.success(LANG['基本资料修改成功！'] || '基本资料修改成功！');
//                            }else if(res.data.state == 4003 || res.data.state == 2003 || res.data.state == 405)
//                            {
//                                _this.$message.error(LANG['无权限操作'] || '无权限操作');
//                            }else{
//
//                                _this.$message.error(LANG['基本资料修改失败，请稍后重试！'] || '基本资料修改失败，请稍后重试！');
//
//                            }
//                        })
//                    }
//
//                });
            }
        },
        components: {
            formEdit: formEdit,
            tableUsers: tableUsers
        },
        computed: {},
        watch: {
            activeName: function(val, oldval) {
                if(val != oldval)
                {
                    if(val === "member")
                    {
                        this.init();

                    }
                }
            }
        },
        mounted() {
        },
        created() {
            this.init();
        },

    }
</script>
<style scopend>
    #validUser .box-card-form{
        width: 500px;
    }
</style>
