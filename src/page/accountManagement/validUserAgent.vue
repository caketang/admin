<template>
    <div id="validUserAgent">
            <formEdit :formVisible="{}"
                          :formConfig="formConfig"
                          :showAdd="false"
                          :formType="'otherone'"
                          :type="'search'"
                          :labelWidth="'120px'"
                          :isEdit="{'state':false}"
                          :formTitel = "''"
                          :defaultForm="true"
                          @do-query="doQuery"
                          @reset-form="resetForm"></formEdit>
                <el-button type="primary" size="small" style="float: right;" @click="exportData('agent')" v-if="isShow">{{LANG['导出'] || '导出'}}</el-button>
                <tableGrid
                        :columnsUrl="columnsUrl"
                        :tableUrl="tableUrl"
                        :isCreated="true"
                        @do-handle="doHandle"
                        :getData="true"
                        @get-table-data="getDate"
                >
                    <tr slot="other" v-if="sumData.total">
                        <td colspan="2"><div class="cell">{{LANG['小计'] || '小计'}}</div></td>
                        <td><div class="cell">{{sumData.sub_members}}</div></td>
                    </tr>
                    <tr slot="other" v-if="sumData.total">
                        <td colspan="2"><div class="cell">{{LANG['总计'] || '总计'}}</div></td>
                        <td><div class="cell">{{sumData.tatal_members}}</div></td>
                    </tr>
                </tableGrid>
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
    import tableGrid from '../../components/tableGrid.vue'
    import validUserDetail from './validUserDetail.vue'
    export default {
        data() {
            return {
                LANG,
                //搜索框
                isEdit: {},
                formConfig:[
                    {"type":"quickDate","showTimes": true},//快捷日期
                    {"type":"dateGroup","label":"时间","prop":[
                         {"prop":"time_start","value":"","label":"开始时间"},
                        {"prop":"time_end","value":"","label":"结束时间"}
                    ]},
                    {"prop":"type","value":"","label":"账号体系","type":"select","list":[{'label':'全部','value':""},{'label':'层级代理','value':"1"},{'label':'直属代理','value': "2"}]},
                    {"prop":"name","value":"","type":"text","label":"用户名"},
                ],
                // 代理表格相关
                columnsUrl: "",
                tableUrl: "",
                agentbaseUrl: "",
                // 代理会员详情
                agentNames: "",
                stimes: sessionStorage.sysTime,
                etimes: sessionStorage.sysTime,
                // 数据导出相关
	            outUrl: "",
	            onDialogVisible: false,
                sumShow: false,
                searchObj: {},
                searchObjUser: {},
                showDetail: false,
                sumData: {
                    total: 0,
                    sub_members: 0,
                    tatal_members: 0
                },
                updateKeys: '',
                isShow: sessionStorage.valid_user_export == 'true'? true : false
            }
        },
        props: {
            stime : String,
            etime : String
        },
        methods: {
            // 初始化
            init() {
                this.searchObj.time_start = this.stime? this.stime : sessionStorage.dateTimeStart;
                this.searchObj.time_end = this.etime? this.etime : sessionStorage.dateTimeEnd;
                this.stimes = this.searchObj.time_start;
                this.etimes = this.searchObj.time_end;
                this.columnsUrl = "static/json/accoutManage/validUser/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.user.agent.valid+"?time_start=" + this.stimes + "&time_end=" + this.etimes;
                this.agentbaseUrl = URL.api + ROUTES.GET.user.agent.valid;
                this.dates = "?time_start=" + this.stimes + "&time_end=" + this.etimes;
                if(this.stime || this.etime){
                    this.formConfig[1].prop[0].value = this.stimes
                    this.formConfig[1].prop[1].value = this.etimes;
                }
            },
            // 显示小计总计
            getDate(obj){
                if(obj.allData && obj.allData.attributes){
                    this.sumData.total = obj.allData.attributes.total || 0;
                    this.sumData.sub_members = obj.allData.attributes.sub_members || 0;
                    this.sumData.tatal_members = obj.allData.attributes.tatal_members || 0;
                }
            },
            // 执行查询
            doQuery(obj){
                if(obj.item.time_start === ''){
                    this.$message.error(LANG['开始时间必需填写'] || '开始时间必需填写');
                } else if(obj.item.time_end === ''){
                    this.$message.error(LANG['结束时间必需填写'] || '结束时间必需填写');
                } else {
                    this.tableUrl = this.agentbaseUrl + this.addSearch(obj.item);
                    this.dates = "?time_start=" + obj.item.time_start + "&time_end=" +obj.item.time_end + "&get_total=1";
                    this.stimes = obj.item.time_start;
                    this.etimes = obj.item.time_end;
                    for(let i in obj.item){
                        this.searchObj[i] = obj.item[i];
                    }
                }
            },
           // 代理表格事件
            doHandle(obj){
               switch(obj.fn){
                    case "showAgent":
                        this.showAgent(obj.row);
                    break
                    case "showDetails":
                        this.showDetails(obj.row);
                }
            },
            // 重置代理表单
            resetForm(){
                this.tableUrl = this.agentbaseUrl+"?time_start=" + sessionStorage.dateTimeStart + "&time_end=" + sessionStorage.dateTimeEnd;
            },
            showDetails(row){
                this.$router.push({path: '/agentAccount', query:{id: row.id, type: row.type}});
            },
            showAgent(row){
                let temp = {
                    id: row.agent_id,
                    type: row.type == '1' ? 'level_agent' : 'agent',
                    stime: this.stimes,
                    etime: this.etimes,
                    agentName: row.name
                };
                this.$emit('show-detail',temp);
            },
            // 导出数据
            exportData(export_flag) {
                let url = "";
                let time_form = this.searchObj.time_start;
                let time_to = this.searchObj.time_end;
                url = URL.api + '/export/download/agent';
                if (time_form && time_to) {

					this.$.autoAjax('get',URL.api + '/dev/download/sign' + '?nonce=' + url, '', {
						ok: (res) => {
							if (res.data) {
								let url_code = export_flag === "agent" ? this.addSearch(this.searchObj) : this.addSearch(this.searchObjUser)
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
                } else {
                    this.$message.error(LANG['必需选择时间才能导出'] || '必需选择时间才能导出');
		            return;
                }
            }
        },
        components: {
            formEdit: formEdit,
            tableGrid: tableGrid,
            validUserDetail: validUserDetail
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init();
        },
        activated(){
            this.init();
        }

    }
</script>
<style scopend>

</style>
