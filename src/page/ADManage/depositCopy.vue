<template>
    <div id="depositCopy" class="clearfix" v-loading="loading">
        <el-col style="text-align: right;" class="pb">
            <el-button class="btn_right" size="small" type="primary" v-text="LANG['新增存款文案'] || '新增存款文案'"
                       @click="AddNew"></el-button>
        </el-col>
        <el-col>
            <tablegrid
                :columnsUrl="columnsUrl"
                :tableUrl="tableUrl"
                :tableCheck="false"
                :tableIndex="false"
                :showRefresh="true"
                :updated="updated"
                @do-handle="doHandle">
            </tablegrid>
        </el-col>
        <formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="formConfig" :type="type"
                  :labelWidth="labelWidth" :isEdit="isEdit" @get-form="getForm" :formType="formType"></formEdit>
        <el-col>
            <el-dialog :title="titleDetails" v-model="dialogTableVisible" class="detail" size="tiny">
                <el-form :model="details">
                    <el-form-item :label="LANG['文案名称:'] || '文案名称:'" :label-width="formLabelWidth">
                        <span>{{details.name}}</span>
                    </el-form-item>
<!--                    <el-form-item :label="LANG['语言:'] || '语言:'" :label-width="formLabelWidth">-->
<!--                        <p style="width: 90%;">{{details['language_name']}}</p>-->
<!--                    </el-form-item>-->
                    <el-form-item :label="LANG['文案内容:'] || '文案内容:'" :label-width="formLabelWidth">
                        <div v-html="details['content']" class="mark_waip"></div>
                    </el-form-item>
                    <el-form-item :label="LANG['生成时间:'] || '生成时间:'" :label-width="formLabelWidth">
                        <span>{{details['created']}}</span>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">关 闭</el-button>
            </span>
            </el-dialog>
        </el-col>
        <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
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
                //数据接口地址
                tableUrl: "",
                //列配置接口地址
                columnsUrl: "",
                //新增修改
                type: "default",
                formTitel: "",
                labelWidth: "90px",
                isEdit: {
                    state: false
                },
                formVisible: {
                    state: false
                },
                //当前FORM类型，新增add,修改edit
                formType: "",
                formConfig: [
                    {
                        "prop": "name", "value": "", "label": "文案名称", "type": "text",
                        "rules": [{"require": true}]
                    },
                    // {
                    //     "prop": "language_id", "value": "", "label": "语言", "type": "select",
                    //     "list": [],
                    //     "propVal": "language_name",
                    //     "rules": [{"require": true}]
                    // },
                    {
                        "prop": "content",
                        "value": "",
                        "type": "markdown",
                        "label": "活动内容",
                        "config": {maximumWords: 500},
                        "rules": [{"require": true}]
                    },
                    {
                        "prop": "apply_to", "value": "", "label": "使用于", "type": "select",
                        "list": ARRAYS.fileTypeUse,
                        "rules": [{"require": true}]
                    }

                ],
                searchConfig: [
                    {
                        "prop": "name", "value": "", "label": "文案类型", "type": "text",
                        "rules": [{"require": true}]
                    },
                    {
                        "prop": "language", "value": "", "label": "语言", "type": "select",
                        "list": [{"label": "中文", "value": "1"},
                            {"label": "English", "value": "2"}],
                        "rules": [{"require": true}]
                    },
                    {
                        "prop": "use_for", "value": "", "label": "使用于", "type": "select",
                        "list": [{"label": "线上入款", "value": "1"},
                            {"label": "公司入款", "value": "2"},
                            {"label": "微信入款", "value": "3"},
                            {"label": "支付宝入款", "value": "4"}],
                        "rules": [{"require": true}]
                    },
                    {
                        "prop": "status", "value": "", "label": "状态", "type": "select",
                        "list": [{"label": "启用", "value": "enabled"},
                            {"label": "停用", "value": "disabled"}],
                        "rules": [{"require": true}]
                    },
                ],
                editflag: false,
                id: null,
                //是否更新数据
                updated: false,
                loading: false,
                //查看详情的标题
                titleDetails: '',
                //查看的窗口状态
                dialogTableVisible: false,
                details: {},
                formLabelWidth: '100px',
                //删除确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: "",
                    obj: null,
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
                this.tableUrl = URL.api + ROUTES.GET.copywriter.deposit;
                this.columnsUrl = "/static/json/ADManage/depositCopy/columns.json";
                //获取语言列表
                // let langeUrl = URL.api + ROUTES.GET.langeages;
                // this.$.autoAjax('get', langeUrl, '', {
                //     ok: (res) => {
                //         res.data.forEach((item) => {
                //             this.formConfig[1].list.push({
                //                 "label": item.name.toString(),
                //                 "value": item.id.toString()
                //             })
                //         })
                //     },
                //     p: () => {
                //     },
                //     error: e => {
                //         console.log(e)
                //     }
                // })
            },
            //表格操作点击事件处理
            doHandle(e) {
                this.id = e.row.id;
                switch (e.fn) {
                    case "doEnabled":
                        this.doEnabled(e.row);
                        break;
                    case "doEdit":
                        this.doEdit(e.row);
                        break;
                    case "doApption":
                        this.doApption(e.row);
                        break;
                    case "doDel":
                        this.doDel(e.row);
                        break;
                    case "doDisabled":
                        this.doDisabled(e.row);
                        break;
                    case "doDetails":
                        this.doDetails(e.row);
                        break;
                }
            },
            //新增
            AddNew() {
                this.formTitel = "新增存款文案";
//                for(let i in this.formConfig){
//                        this.formConfig[i].value= "";
//                }
                this.formType = "add";
                this.formVisible.state = true

            },
            //保存数据
            getForm(obj) {
                let _this = this;
                this.fullscreenLoading = true;
                this.loading = true;
                this.updated = false;
                let str = "";
                console.log('depositCopy.vue getForm 209', obj);
                if (_this.formType != "edit") {
                    obj.formObj.pf = 'pc';
                    obj.formObj.status = 'disabled';
                    obj.formObj.type = 'deposit';

                    this.$.autoAjax('put',URL.api + ROUTES.POST.copywriter.deposit, obj.formObj, {
                        ok: (res) => {
                            if (res.data && res.state == 0) {
                                this.$message.success(LANG["恭喜您，新增存款文案成功！"] || "恭喜您，新增存款文案成功！");
                                this.formType = ""
                                obj.formObj = "";
                                this.loading = false;
                                this.updated = true;
                            } else if (res.data == false && res.state > 3) {
                                str = res.msg;
                                this.$message.error(LANG[str] || str);
                                this.loading = false;
                                this.updated = false;
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                    // this.$http.put(URL.api + ROUTES.POST.copywriter.deposit, obj.formObj, URLCONFIG).then((res) => {
                    //     if (res.data.data && res.data.state == 0) {
                    //         this.$message.success(LANG["恭喜您，新增存款文案成功！"] || "恭喜您，新增存款文案成功！");
                    //         this.formType = ""
                    //         obj.formObj = "";
                    //         this.loading = false;
                    //         this.updated = true;
                    //     } else if (res.data.data == false && res.data.state > 3) {
                    //         str = res.data.msg;
                    //         this.$message.error(LANG[str] || str);
                    //         this.loading = false;
                    //         this.updated = false;
                    //     }
                    // })
                } else {
                    // obj.formObj.id = this.id;
                    this.$http.put(URL.api + ROUTES.POST.copywriter.deposit + '?id=' + this.id, obj.formObj, URLCONFIG).then((res) => {
                        if (res.data.data && res.data.state == 0) {
                            this.$message.success(LANG["恭喜您，修改存款文案成功！"] || "恭喜您，修改存款文案成功！");
                            this.formType = "";
                            obj.formObj = ""
                            this.loading = false;
                            this.updated = true;
                        } else if (res.data.data == false && res.data.state > 3) {
                            str = res.data.msg;
                            this.$message.error(LANG[str] || str);
                            this.loading = false;
                            this.updated = false;
                        }
                    })
                    // this.$http.put(URL.api + ROUTES.POST.copywriter.deposit + '?id=' + this.id, JSON.stringify(obj.formObj), URLCONFIG).then((res) => {
                    //     if (res.data.data && res.data.state == 0) {
                    //         this.$message.success(LANG["恭喜您，修改存款文案成功！"] || "恭喜您，修改存款文案成功！");
                    //         this.formType = "";
                    //         obj.formObj = ""
                    //         this.loading = false;
                    //         this.updated = true;
                    //     } else if (res.data.data == false && res.data.state > 3) {
                    //         str = res.data.msg;
                    //         this.$message.error(LANG[str] || str);
                    //         this.loading = false;
                    //         this.updated = false;
                    //     }
                    // })
                }

            },

            //启用
            doEnabled(obj) {
                this.loading = true;
                this.updated = false;
                let _this = this;
                let val = this.id;

                this.$.autoAjax('patch',URL.api + ROUTES.PATCH.copywriter.deposit.$(val), {"status": "enabled", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}, {
                    ok: (res) => {
                        if (res.state == 0) {
                            this.$message.success(LANG["启用成功"] || "启用成功");
                            this.loading = false;
                            this.updated = true;
                        } else {
                            this.$message.error(LANG["启用失败"] || "启用失败");
                            this.loading = false;
                            this.updated = false;
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.deposit.$(val), {"status": "enabled", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}, URLCONFIG).then((res) => {
                //     if (res.data.state == 0) {
                //         this.$message.success(LANG["启用成功"] || "启用成功");
                //         this.loading = false;
                //         this.updated = true;
                //     } else {
                //         this.$message.error(LANG["启用失败"] || "启用失败");
                //         this.loading = false;
                //         this.updated = false;
                //     }
                // })
                // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.deposit.$(val), JSON.stringify({"status": "enabled", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}), URLCONFIG).then((res) => {
                //     if (res.data.state == 0) {
                //         this.$message.success(LANG["启用成功"] || "启用成功");
                //         this.loading = false;
                //         this.updated = true;
                //     } else {
                //         this.$message.error(LANG["启用失败"] || "启用失败");
                //         this.loading = false;
                //         this.updated = false;
                //     }
				//
                // })
            },
            //停用
            doDisabled(obj) {
                this.loading = true;
                this.updated = false;
                let _this = this;
                let val = this.id;

                this.$.autoAjax('patch', URL.api + ROUTES.PATCH.copywriter.deposit.$(val),{"status": "disabled", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}, {
                    ok: (res) => {
                        if (res.state == 0) {
                            this.$message.success(LANG["停用成功"] || "停用成功");
                            this.loading = false;
                            this.updated = true;
                        } else {
                            this.$message.error(LANG["停用失败"] || "停用失败");
                            this.loading = false;
                            this.updated = false;
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.deposit.$(val), {"status": "disabled", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}, URLCONFIG).then((res) => {
                //     if (res.data.state == 0) {
                //         this.$message.success(LANG["停用成功"] || "停用成功");
                //         this.loading = false;
                //         this.updated = true;
                //     } else {
                //         this.$message.error(LANG["停用失败"] || "停用失败");
                //         this.loading = false;
                //         this.updated = false;
                //     }
                // })
                // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.deposit.$(val), JSON.stringify({"status": "disabled", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}), URLCONFIG).then((res) => {
                //     if (res.data.state == 0) {
                //         this.$message.success(LANG["停用成功"] || "停用成功");
                //         this.loading = false;
                //         this.updated = true;
                //     } else {
                //         this.$message.error(LANG["停用失败"] || "停用失败");
                //         this.loading = false;
                //         this.updated = false;
                //     }
				//
                // })
            },
            //申请
            doApption(obj) {
                this.loading = true;
                this.updated = false;
                let _this = this;
                let val = this.id;
                this.$.autoAjax('patch',URL.api + ROUTES.PATCH.copywriter.deposit.$(val), {"approve_status": "applying", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}, {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            this.$message.success(LANG["申请成功"] || "申请成功");
                            this.loading = false;
                            this.updated = true;
                        } else {
                            this.$message.error(LANG["申请失败"] || "申请失败");
                            this.loading = false;
                            this.updated = false;
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.deposit.$(val), {"approve_status": "applying", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}, URLCONFIG).then((res) => {
                //     if (res.data.state == 0 && res.data.data) {
                //         this.$message.success(LANG["申请成功"] || "申请成功");
                //         this.loading = false;
                //         this.updated = true;
                //     } else {
                //         this.$message.error(LANG["申请失败"] || "申请失败");
                //         this.loading = false;
                //         this.updated = false;
                //     }
                // })
                // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.deposit.$(val), JSON.stringify({"approve_status": "applying", "language_id": obj.language_id, "pf": obj.pf, "apply_to": obj.apply_to}), URLCONFIG).then((res) => {
                //     if (res.data.state == 0 && res.data.data) {
                //         this.$message.success(LANG["申请成功"] || "申请成功");
                //         this.loading = false;
                //         this.updated = true;
                //     } else {
                //         this.$message.error(LANG["申请失败"] || "申请失败");
                //         this.loading = false;
                //         this.updated = false;
                //     }
				//
                // })
            },

            //编辑
            doEdit(row) {
                let _this = this;
                this.formType = "";
                this.formTitel = "修改存款文案";
                setTimeout(() => {
                    this.formType = "edit";
                    FORMVAL(row, this.formConfig);
                    this.isEdit.state = true;
                    this.formVisible.state = true;

                }, 500)
            },
            //删除
            doDel(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (LANG['确定删除'] || '确定删除') + '"' + row.name + '"' + (LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "delete";
                    this.confirmConfig.obj = row;
                }
            },
            doConfirm(obj) {
                this.loading = true;
                this.updated = false;
                var _this = this;
                switch (obj.fn) {
                    case "delete":

                        this.$.autoAjax('delete',URL.api + '/copywriter/deposit?id=' + obj.obj.id + "&pf=" + obj.obj.pf, '', {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    this.$message.success(_this.LANG["删除成功"] || "删除成功");
                                    this.updated = true;
                                } else {
                                    this.$message.error(_this.LANG["删除失败，请稍后重试！"] || "删除失败，请稍后重试！");
                                }
                                this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                this.loading = false;
                                this.$message.error(_this.LANG["删除失败，请稍后重试！"] || "删除失败，请稍后重试！");
                            }
                        })
                        // this.$http.delete(URL.api + '/copywriter/deposit?id=' + obj.obj.id + "&pf=" + obj.obj.pf, URLCONFIG).then((res) => {
                        //     if (res.data.state == 0 && res.data.data) {
                        //         this.$message.success(_this.LANG["删除成功"] || "删除成功");
                        //         this.updated = true;
                        //     } else {
                        //         this.$message.error(_this.LANG["删除失败，请稍后重试！"] || "删除失败，请稍后重试！");
                        //     }
                        //     this.loading = false;
                        // }).catch((e) => {
                        //     this.loading = false;
                        //     this.$message.error(_this.LANG["删除失败，请稍后重试！"] || "删除失败，请稍后重试！");
                        // })
                        break;
                }
            },
            //查看详情
            doDetails(row) {
                row.type_id = row.type;
                this.nowId = row.id;
                this.titleDetails = '《' + row.name + '》' + '的详情';
                this.dialogTableVisible = true;
                this.details = row;
                for (let k in row) {
//                    if(k === 'content'){
//                        this.details[k] = this.markdownTransform(row[k]);
//                    }else{
                    this.details[k] = row[k];
//                    }
                }
//                let _this = this;
//                this.formTitel = "代理文案";
//                setTimeout(() => {
//                    this.formType = "edit";
//                    FORMVAL(row, this.formConfig);
//                    this.isEdit.state = true;
//                    this.formVisible.state = true;
//                }, 500)
            },

        },
        created() {
            this.init();
        }
    }
</script>
<style>
    .tempAdHome .el-dialog {
        min-width: 400px;
    }

    .tempAdHome .bg-purple-dark {
        background: none;
    }

    .tempAdHome .addManage {
        float: right;
    }

    .tempAdHome .block {
        text-align: right;
    }

    #depositCopy .mark_waip table {
        width: 100% !important;
    }

    #depositCopy .detail .el-form-item__content img {
        width: 100%;
    }
</style>
