<template>
    <div id="agentLink" class="clearfix" v-loading="loading">
        <el-col v-if="!loading">
            <tablegrid
                :columnsUrl="columnsUrl"
                :tableUrl="tableUrl"
                :updated="updated"
                :isCreated="true"
                :pageSet="false"
                :showRefresh="true"
                @do-handle="doHandle"></tablegrid>
        </el-col>
        <el-col v-if="!loading">
            <formEdit :formTitel="formTitel" :formVisible="editVisible" :formConfig="formConfig" :type="type"
                      :labelWidth="labelWidth" @get-form="getForm" :isEdit="isEdit" :formType="formType"></formEdit>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    import confirm from '../../components/confirm.vue'

    export default {
        data() {
            return {
                LANG,
                //加载数据
                loading: false,
                //表格相关
                columnsUrl: "",
                tableUrl: "",
                updated: false,
                //当前操作数据ID
                nowId: -1,
                //当前表单类型
                formType: "",
                //弹窗相关
                formConfig: [
                    {"prop": "domain", "value": "", "type": "url", "label": "网址", "rules": [{"require": true}]},
                    {"prop": "remark", "value": "", "type": "textarea", "label": "备注", "rules": [{"max": 30}]},
                    {
                        "prop": "status",
                        "value": "enabled",
                        "label": "状态",
                        "type": "select",
                        "list": ARRAYS.state4,
                        "rules": [{"max": 30}]
                    }
                ],
                type: "default",
                formTitel: "",
                labelWidth: "90px",
                editVisible: {
                    state: false
                },
                // 是否编辑数据
                isEdit: {
                    state: false
                },
                //删除确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                }
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
            confirm: confirm
        },
        methods: {
            init() {
                this.columnsUrl = "/static/json/agent/agentLink/columns.json"
                this.tableUrl = URL.api + ROUTES.GET.commission.links;
            },
            //保存弹窗数据
            getForm(obj) {
                let _this = this;
                this.loading = true;
                let url;
                if (this.formType === "edit") {
                    obj.formObj.id = this.nowId;
                    url = URL.api + ROUTES.PUT.commission.link
                    let data = {id: obj.formObj.id, status: obj.formObj.status, remark: obj.formObj.remark}
                    this.$.autoAjax('patch', url, data, {
                        ok: (res) => {
                            if (res.state === 0 && res.data) {
                                _this.$message.success(LANG['恭喜您，修改成功！'] || '恭喜您，修改成功！');
                                _this.updated = true;
                            } else {
                                _this.$message.error(LANG['代理链接修改失败，请稍候重试！'] || '代理链接修改失败，请稍候重试！');
                            }
                            this.loading = false;
                        },
                        p: () => {
                        },
                        error: e => {
                            this.loading = false;
                            _this.$message.error(LANG['代理链接修改失败，请稍候重试！'] || '代理链接修改失败，请稍候重试！');
                        }
                    })
//                } else {
//                    url = URL.api + ROUTES.PUT.commission.link
                }
            },
            //表格按钮点击事件
            doHandle(item) {
                this.nowId = parseInt(item.row.id);
                switch (item.fn) {
                    case "doEdit":
                        this.doEdit(item.row)
                        break
                    case "doDelete":
                        this.doDelete(item.row)
                        break
//                    case "doEnabled":
//                        this.doEnabled(item.row)
//                        break
//                    case "doDisabled":
//                        this.doDisabled(item.row)
//                        break
                }
            },
            //编辑
            doEdit(row) {
                let _this = this;
                this.nowId = row.id;
                this.formTitel = "修改代理链接";
                this.formType = "";
                setTimeout(() => {
                    FORMVAL(row, this.formConfig);
                    _this.formConfig[2].value = row.status;
                    _this.formType = "edit";
                    _this.isEdit.state = true;
                    _this.editVisible.state = true;
                }, 500);
            },
            //删除
            doDelete(row) {
                let name = row.domain;
                this.nowId = row.id;
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + " '" + row.name +'的链接'+row.domain+"' " + (this.LANG['吗？'] || '吗？');
                this.confirmConfig.fn = "delete";
            },
            //确认删除
            doConfirm(obj) {
                let _this = this;
                this.loading = true;
                this.updated = false;
                switch (obj.fn) {
                    case "delete":
                        this.$.autoAjax('delete', URL.api + ROUTES.DELETE.commission.link + '?id=' + (this.nowId), '', {
                            ok: (res) => {
                                if (res.data != undefined && res.data) {
                                    _this.$message.success(LANG['恭喜您，代理链接删除成功！'] || '恭喜您，代理链接删除成功！');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(LANG['代理链接删除失败，请稍候重试！'] || '代理链接删除失败，请稍候重试！');
                                }
                                this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                this.loading = false;
                                _this.$message.error(LANG['代理链接删除失败，请稍候重试！'] || '代理链接删除失败，请稍候重试！');
                            }
                        })
                        break;
//                    case "edit":
//                        console.log('pppp')
////                        this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.link.$$+'?id='+(this.nowId),{status:'1',id : parseInt(this.nowId)}, {
////                            ok: (res) => {
////                                if (res.state === 0 && res.data) {
////                                    _this.$message.success(LANG['恭喜您，修改成功！'] || '恭喜您，修改成功！');
////                                    _this.updated = true;
////                                } else {
////                                    _this.$message.error(LANG['代理链接修改失败，请稍候重试！'] || '代理链接修改失败，请稍候重试！');
////                                }
////                                this.loading = false;
////                            },
////                            p: () => {
////                            },
////                            error: e => {
////                                this.loading = false;
////                                _this.$message.error(LANG['代理链接修改失败，请稍候重试！'] || '代理链接修改失败，请稍候重试！');
////                            }
////                        })
//                        break;
//                    case "disabled":
//                        this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.link.$$+'?id='+(this.nowId),{status:'0',id : parseInt(this.nowId)}, {
//                            ok: (res) => {
//                                if (res.data.state === 0 && res.data.data) {
//                                    _this.$message.success(LANG['恭喜您，代理链接停用成功！'] || '恭喜您，代理链接停用成功！');
//                                    _this.updated = true;
//                                } else {
//                                    _this.$message.error(LANG['代理链接停用失败，请稍候重试！'] || '代理链接停用失败，请稍候重试！');
//                                }
//                                this.loading = false;
//                            },
//                            p: () => {
//                            },
//                            error: e => {
//                                this.loading = false;
//                                _this.$message.error(LANG['代理链接停用失败，请稍候重试！'] || '代理链接停用失败，请稍候重试！');
//                            }
//                        })
//                        break;
                }
                _this.formType = "";
            },
            //启用
            doEnabled(row) {
                let name = row.domain;
                this.nowId = row.id;
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') + " '" + name + "' " + (this.LANG['吗？'] || '吗？');
                this.confirmConfig.fn = "enabled";
            },
            //停用
            doDisabled(row) {
                let name = row.domain;
                this.nowId = row.id;
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + " '" + name + "' " + (this.LANG['吗？'] || '吗？');
                this.confirmConfig.fn = "disabled";
            }
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init();
        },
        activated() {
            this.updated = false;
            setTimeout(() => {
                this.updated = true;
            }, 500)
        }
    }
</script>
<style>
    .btn_right {
        float: right;
    }
</style>
