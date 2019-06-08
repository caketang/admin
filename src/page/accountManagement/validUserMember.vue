<template>
    <div id="validUser">
        <el-col v-if="activeName == 'member' && !showDetail">
            <formEdit :formVisible="{}"
                      :formConfig="formConfigUser"
                      :showAdd="false"
                      :formType="'other'"
                      :type="'search'"
                      :labelWidth="'120px'"
                      :isEdit="{'state':false}"
                      :formTitel="''"
                      @do-query="doQuery"
                      @reset-form="resetForm"></formEdit>
            <div style="width: 100%; height: 38px;" v-if="isShow">
                <el-button type="primary" size="small" style="float: right;" @click="exportData('member')">
                    {{LANG['导出'] || '导出'}}
                </el-button>
            </div>
            <tableUsers :dataModelUrl="dataModelUrl"></tableUsers>
        </el-col>
        <el-col>
            <el-dialog
                title="提示"
                :visible.sync="onDialogVisible"
                size="tiny">
                {{LANG['点击”确认“导出数据'] || '点击”确认“导出数据'}}
                <span slot="footer" class="dialog-footer">
                    <el-button @click="onDialogVisible = false">取 消</el-button>
                    <a :href="outUrl" target="_blank" id="outUrl">
                        <el-button type="primary" @click="onDialogVisible = false">确 认</el-button>
                    </a>
              </span>
            </el-dialog>
        </el-col>

        <el-col v-if="showDetail">
            <validUserDetail :nowId="nowId" :agentNames="agentNames" :activeName="activeName" @return-page="returnList"
                             :stime="stimes" :etime="etimes"></validUserDetail>
        </el-col>
    </div>
</template>
<script>
    import formEdit from '../../components/formEdit.vue'
    import tableGrid from '../../components/tableGrid.vue'
    import validUserDetail from './validUserDetail.vue'
    import tableUsers from '../../components/tableUsers.vue'

    export default {
        data() {
            return {
                LANG,
                // 会员相关
                formConfigUser: [
                    {"type": "quickDate", "showTimes": true},//快捷日期
                    {
                        "type": "dateGroup", "label": "注册日期", "prop": [
                        {"prop": "register_from", "value": "", "label": "开始时间"},
                        {"prop": "register_to", "value": "", "label": "结束时间"}

                    ]
                    },
                    {
                        "prop": "name",
                        "value": "",
                        "type": "textarea",
                        "label": "帐号",
                        "placeholder": "输入会员账号，多个会员帐号之间用英文逗号 , 隔开",
                        "width": 400
                    },
                    {
                        "prop": "type", "value": "", "label": "存取款方式", "type": "select",
                        "list": [
                            {'label': '全部', 'value': '1'},
                            {'label': '有存款', 'value': '2'},
                            {'label': '有出款', 'value': '3'},
                            {'label': '有存取款', 'value': '4'},
                            {'label': '无存款', 'value': '5'},
                            {'label': '无取款', 'value': '6'},
                            {'label': '无存取款', 'value': '7'}
                        ]
                    },
                ],
                showDetail: false,
                // 会员详情
                dataModelUrl: "",
                columnsUrl: "",
                stimes: sessionStorage.sysTime,
                etimes: sessionStorage.sysTime,
                // 查询会员不显示日期
                updateuserKeys: "",
                // 数据导出相关
                outUrl: "",
                onDialogVisible: false,
//                sumShow: false,
//                searchObj: {},
                searchObjUser: {},
                isShow: sessionStorage.valid_user_export == 'true' ? true : false
//                export_form:{}

            }
        },
        props: {
            activeName: String()
        },
        methods: {
            // 初始化
            init() {
                this.searchObjUser.register_from = sessionStorage.sysTime;
                this.searchObjUser.register_to = sessionStorage.sysTime;
                this.memberbaseUrl = URL.api + ROUTES.GET.user.valid;
                this.dataModelUrl = URL.api + ROUTES.GET.user.valid + "?register_from=" + sessionStorage.dateTimeStart + "&register_to=" + sessionStorage.dateTimeEnd + "&get_total=1";
            },
            // 执行查询
            doQuery(obj) {
                console.log(obj)
                for (let i in obj.item) {
                    this.searchObjUser[i] = obj.item[i];
                }
                if (this.addSearch(obj.item)) {
                    this.dataModelUrl = this.memberbaseUrl + this.addSearch(obj.item) + "&get_total=1";
                } else {
                    this.dataModelUrl = this.memberbaseUrl + "?get_total=1";
                }

            },

            // 重置代理表单
            resetForm() {
                this.dataModelUrl = this.memberbaseUrl + "?register_from=" + sessionStorage.dateTimeStart + "&register_to=" + sessionStorage.dateTimeEnd;
            },
//
//            // 测试详情页
//            showAgent(obj){
//                this.agentNames = obj.name;
//                this.nowId = parseInt(obj.id, 10);
//                this.showDetail = true;
//                this.updateuserKeys = "time_start,''";
//                this.updateuserKeys = "time_end,''";
//            },
            // 返回列表
            returnList() {
                this.showDetail = false;
            },
            // 导出数据
            exportData() {
                let form = this.searchObjUser;
                let url = "";
                let time_form = null;
                let time_to = null;
//                if (export_flag === "member") {
//                    form = this.$children[1].$children[0].$refs.editForm.model;
//                    url = URL.api + '/export/download/agent';
//                    time_form = form.time_start;
//                    time_to = form.time_end;
//                } else {
//                    form = this.$children[2].$children[0].$refs.editForm.model;
//                    form = this.$children[1].$children[0].$refs.editForm.model;
                url = URL.api + "/export/download/user";
                time_form = form.register_from;
                time_to = form.register_to;
//                }
                if (time_form && time_to) {
                    this.$.autoAjax('get', URL.api + '/dev/download/sign' + '?nonce=' + url, '', {
                        ok: (res) => {
                            if (res.data) {
                                let url_code = this.addSearch(this.searchObjUser)
                                this.outUrl = url + url_code + "&nonce=" + res.data.nonce + "&signature=" + res.data.signature + "&time=" + res.data.time + "&uuid=" + res.data.uuid;
                                this.onDialogVisible = true;
                            } else if (res.message) {
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
                    //         let url_code = this.addSearch(this.searchObjUser)
                    //         this.outUrl = url + url_code + "&nonce=" + res.data.data.nonce + "&signature=" + res.data.data.signature + "&time="+ res.data.data.time + "&uuid=" + res.data.data.uuid;
                    //        this.onDialogVisible = true;
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
            }
        },
        components: {
            formEdit: formEdit,
            tableGrid: tableGrid,
            validUserDetail: validUserDetail,
            tableUsers: tableUsers
        },
        computed: {},
        watch: {
            activeName: function (val, oldval) {
                if (val != oldval) {
                    if (val === "member") {
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

</style>
