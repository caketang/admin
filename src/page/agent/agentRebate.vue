<template>
	<div id="agentRebate">
        <el-row>
            <el-col>
                <tablegrid
                    :columnsUrl="columnsUrl"
                    :updated="updated"
                    :tableUrl="tableUrl"
                    :getData="true"
                    :pageSet="false"
                    @get-table-data="getTableDatatwo"
                    @do-handle="doHandle"
                ></tablegrid>
            </el-col>
            <el-col>
                <!--编辑界面-->
                <formEdit :formTitel="formTitel" :formVisible="editVisible" :formConfig="formConfig" :type="type" :size="size"
                          :labelWidth="labelWidth" @get-form="getForm" :isEdit="isEdit" :formType="formType"></formEdit>
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
                    {"prop": "level", "value": "", "type": "text", "label": "代理等级","disabled":true},
                    {"prop": "experience", "value": "", "type": "number", "label": "所需经验", "rules": [{"require": false}]},
                    {"prop": "commission_self", "value": "", "type": "number", "label": "自身退佣(%)", "rules": [{"require": false}]},
                    {"prop": "commission_level", "value": "", "type": "number", "label": "一级退佣(%)", "rules": [{"require": false}]},
                    {"prop": "commission_directly", "value": "", "type": "number", "label": "二级退佣(%)", "rules": [{"require": false}]},
                    {"prop": "valid_bet", "value": "", "type": "number", "label": "有效会员条件(¥)", "rules": [{"require": false}]},
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
                name:''
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
            getTableDatatwo(){},
            doEdit(row){
                this.editVisible.state = true;
                this.isEdit.state = true
                this.formTitel = '当前代理等级：'+{"1":"青铜","2":"白银","3":"黄金","4":"铂金","5":"钻石","6":"至尊",}[row.level]||''
                this.formConfig[0].value = row['level']
                this.formConfig[1].value = row.experience
                this.formConfig[2].value = row.commission_self
                this.formConfig[3].value = row.commission_level
                this.formConfig[4].value = row.commission_directly
                this.formConfig[5].value = row['valid_bet']
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
