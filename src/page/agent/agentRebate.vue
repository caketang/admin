<template>
	<div id="agentRebate">
        <el-row>
            <el-col class="tRight">
                <el-button type="primary" size="small" @click="setConfig">参数设置</el-button>
            </el-col>
            <el-col>
                <tablegrid
                    :columnsUrl="columnsUrl"
                    :updated="updated"
                    :tableUrl="tableUrl"
                    :getData="true"
                    :pageSet="false"
                    @do-handle="doHandle"
                ></tablegrid>
            </el-col>
            <el-col>
                <!--编辑界面-->
                <formEdit :formTitel="formTitel" :formVisible="editVisible" :formConfig="formConfig" :type="type" :size="size"
                          :labelWidth="labelWidth" @get-form="getForm" :isEdit="isEdit" :formType="formType"></formEdit>
            </el-col>
            <el-col>
                <!--参数设置-->
                <el-dialog
                    title="参数设置"
                    :visible.sync="setConfigDialog"
                    size="tiny"
                    :before-close="handleClose">
                    <el-form :model="configForm" :rules="configRules" ref="configForm" label-width="170px" class="demo-ruleForm">
                        <el-form-item label="有效会员条件：" prop="advance_money">
                            <el-input v-model="configForm.advance_money"></el-input>
                        </el-form-item>
                        <el-form-item label="每一个直属可获得：" prop="directly_experience">
                            <el-input v-model="configForm.directly_experience"></el-input>
                        </el-form-item>
                        <el-form-item label="每一个下下级可获得：" prop="level_experience">
                            <el-input v-model="configForm.level_experience"></el-input>
                        </el-form-item>
                        <el-form-item label="每1元退佣可获得：" prop="commission_exp">
                            <el-input v-model="configForm.commission_exp"></el-input>
                        </el-form-item>
                        <el-form-item label="有效领取时间：" prop="type">
                            <el-radio-group v-model="configForm.type">
                                <el-radio label="time">24小时</el-radio>
                                <el-radio label="lasting">永久生效</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                    <el-button @click="setConfigDialog = false">取 消</el-button>
                    <el-button type="primary" @click="setConfigSubmit('configForm')">修 改</el-button>
                  </span>
                </el-dialog>
            </el-col>
        </el-row>
	</div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
	export default {
		data() {
			return {
                columnsUrl:'',
                tableUrl:'',
                updated:false,
                //编辑弹窗
                size:"tiny",
                formConfig: [
                    {"prop": "level", "value": "", "type": "select", "label": "代理等级","disabled":true,
                        "list":[
                            {"label":"青铜", "value":"1"},
                            {"label":"白银", "value":"2"},
                            {"label":"黄金", "value":"3"},
                            {"label":"铂金", "value":"4"},
                            {"label":"钻石", "value":"5"},
                            {"label":"至尊", "value":"6"},
                            ]
                    },
                    {"prop": "experience", "value": "", "type": "number", "label": "晋升所需经验","disabled":false, "rules": [{"require": false}]},
                    {"prop": "commission_self", "value": "", "type": "number", "label": "自身退佣(%)", "rules": [{"require": false}]},
                    {"prop": "commission_level", "value": "", "type": "number", "label": "一级退佣(%)", "rules": [{"require": false}]},
                    {"prop": "commission_directly", "value": "", "type": "number", "label": "二级退佣(%)", "rules": [{"require": false}]},
                ],
                type: "default",
                formType: "",
                formTitel: "",
                labelWidth: "120px",
                editVisible: {
                    state: false
                },
                // 是否编辑数据
                isEdit: {
                    state: false
                },
                name:'',
                //参数设置
                setConfigDialog:false,
                configForm:{
                    advance_money:'',//有效金额
                    directly_experience:'',//直属
                    level_experience:'',//层级
                    type:'lasting',//领取时间
                    commission_exp:''//经验获取比值
                },
                configRules: {
                    advance_money: [
                        { required: true, message: '请输入有效会员条件', trigger: 'blur' },
                    ],
                    directly_experience: [
                        { required: true, message: '请输入每个直属可以获得经验值', trigger: 'blur' },
                    ],
                    level_experience: [
                        { required: true, message: '请输入每个下下级可以获得经验值', trigger: 'blur' },
                    ],
                    commission_exp: [
                        { required: true, message: '请输入每1元退佣可以获得经验值', trigger: 'blur' },
                    ],
                    type: [
                        { required: true, message: '请选择有效领取时间', trigger: 'change' }
                    ],
                }
            }
		},
		methods: {
			init() {
                this.tableUrl = URL.api + ROUTES.GET.user.agent.level
                this.columnsUrl = 'static/json/agent/agentRebate/columns.json'
			},
            doHandle(item){
                this.updated = false;
                switch (item.fn){
                    case "doEdit":
                        this.doEdit(item.row)
                        break
                }
            },
            handleClose(){
                this.setConfigDialog = !this.setConfigDialog
            },
            setConfigSubmit(name){
                let _this = this
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$.autoAjax('post', URL.api + ROUTES.GET.user.agent.global, _this.configForm, {
                            ok: (res) => {
                                if(res.data && res.state === 0 ){
                                    _this.$message.success(LANG['修改参数设置成功'] || '修改参数设置成功');
                                }
                            },
                            error: e => {
                                _this.$message.error(LANG['修改失败，请稍候重试！'] || '修改失败，请稍候重试！');
                            }
                        })
                        this.setConfigDialog = !this.setConfigDialog
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            doEdit(row){
                this.editVisible.state = true;
                this.isEdit.state = true
                if(row.level.toString() == "1"||row.level.toString() == "6"){
                    this.formConfig[1].disabled = true
                }else{
                    this.formConfig[1].disabled = false
                }
                this.formTitel = '当前代理等级：'+{"1":"青铜","2":"白银","3":"黄金","4":"铂金","5":"钻石","6":"至尊",}[row.level]||''
                this.formConfig[0].value = row['level'].toString()
                this.formConfig[1].value = row.experience
                this.formConfig[2].value = row.commission_self
                this.formConfig[3].value = row.commission_level
                this.formConfig[4].value = row.commission_directly
                this.name = row.name
            },
            getForm(data){
                let query = {
                    level:data.formObj.level,
                    experience:data.formObj.experience,
                    commission_self:data.formObj.commission_self,
                    commission_level:data.formObj.commission_level,
                    commission_directly:data.formObj.commission_directly,
                    valid_bet:data.formObj.valid_bet,
                    name:this.name
                }
                this.$.autoAjax('post',URL.api + ROUTES.POST.user.level,query, {
                    ok: (res) => {
                       if(res.data&&res.state === 0){
                           this.$message.success(res.msg)
                           this.updated = true;
                       }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            setConfig(){
                let _this = this;
                this.setConfigDialog = !this.setConfigDialog
                this.$.autoAjax('get', URL.api + ROUTES.GET.user.agent.global,'', {
                    ok: (res) => {
                        if(res.data &&res.state === 0 ){
                            _this.configForm.advance_money = res.data.advance_money
                            _this.configForm.directly_experience = res.data.directly_experience
                            _this.configForm.level_experience = res.data.level_experience
                            _this.configForm.type = res.data.type
                            _this.configForm.commission_exp = res.data.commission_exp
                        }
                    },
                    error: e => {
                        _this.$message.error(LANG['获取配置参数失败，请稍候重试！'] || '获取配置参数失败，请稍候重试！');
                    }
                })
            }
		},
		components: {
            tablegrid:tableGrid,
            formEdit:formEdit,
        },
		computed: {},
		watch: {},
		mounted() {
		},
		created() {
            this.init()
		}
	}
</script>
<style scopend>

</style>
