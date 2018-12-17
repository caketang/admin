<template>
    <div id="RefundCommissionPeriod" class="templateManage clearfix" v-loading="loading">
        <el-col :span="24" class="addManage pb">
            <el-button type="primary" size="small" class="addManage" @click="doAdd"
                       v-text="LANG['新增期数'] || '新增期数'"></el-button>
        </el-col>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :showRefresh="true"
                    :updated="updated"
                    @do-handle="doHandle"></tablegrid>
        </el-col>
        <el-col :span="24">
            <formEdit :formTitel="formTitel" :formVisible="editVisible" :formConfig="formConfig" :type="type"
                      :labelWidth="labelWidth" @get-form="getForm" :isEdit="isEdit" :formType="formType"
                      :size="'tiny'"></formEdit>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <el-col>
            <el-dialog
                    :title="lock_name"
                    :visible.sync="dialogVisible"
                    size="tiny"
                    :before-close="handleClose">
                <span>注：如需解锁本期重新统计，请先把已发放的佣金包括下级佣金撤销回来。</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="doUnlock">确 定</el-button>
                </span>
            </el-dialog>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    import confirm from '../../components/confirm.vue'
    import ElCol from "element-ui/packages/col/src/col";

    export default {
        data() {
            var checkDate = (rule, value, callback) => {
                if (new Date(this.$children[2].$children[0].editForm.op_time).getTime() < new Date(this.$children[2].$children[0].editForm.end).getTime()) {
                    callback(new Error(LANG['结算日期不能小于结束日期'] || '结算日期不能小于结束日期'));
                } else {
                    callback();
                }
            };
            var checkEndDate = (rule, value, callback) => {
                callback(new Error(LANG['本期结束日期不能小于'] || '本期结束日期不能小于'));
                let tt = this.$children[1].$children[0].tableDataList[0].end.substr(0, 10);
                let t = new Date(tt);
                let tf = function (i) {
                    return (i < 10 ? '0' : '') + i
                };
                let oldTime = t.getFullYear() + "-" + tf(t.getMonth() + 1) + "-" + tf(parseInt(t.getDate()));
                let newTime = new Date(this.$children[2].$children[0].editForm.end).getTime();
                if (newTime < t.getTime()) {
                    callback(new Error(LANG['本期结束日期不能小于'] || '本期结束日期不能小于' + FORMATDATEPICKER(oldTime)));
                } else {
                    callback();
                }
            };
            return {
                LANG,
                tableUrl: "",
                baseUrl: "",
                //编辑界面数据
                formType: "",
                period: '',
                start: '',
                type: "default",
                formTitel: "",
                labelWidth: "90px",
                //解锁dialog
                dialogVisible: false,
                lock_name: '',
                query_Unlock: {},
                editVisible: {
                    state: false
                },
                // 是否编辑数据
                isEdit: {
                    state: false
                },
                formConfig: [
                    {"prop": "period_name", "value": "", "type": "text", "label": "期数名称", "rules": [{"require": true}]},
                    {
                        "prop": "start",
                        "value": "",
                        "type": "datePickernotime",
                        "label": "起始日期",
                        "rules": [{"require": true}]
                    },
                    // {"prop":"end","value":"","type":"datePicker","label":"结束日期","rules":[{"require":true},{"fns":checkEndDate}]},
                    {
                        "prop": "end",
                        "value": "",
                        "type": "datePickernotime",
                        "label": "结束日期",
                        "rules": [{"require": true}]
                    },
//                    {"prop":"op_time","value":"","type":"datePickernotime","label":"结算日期","rules":[{"require":true},{"fns":checkDate}]},
//                    {"prop":"","value":""}
                    // {"prop":"op_time","value":"","type":"datePicker","label":"结算日期"}
                ],
                nowId: -1,
                updated: false,
                loading: false,
                //删除确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: "",
                    obj: {}
                },
            }
        },
        components: {
            ElCol,
            tablegrid: tableGrid,
            formEdit: formEdit,
            confirm: confirm
        },
        methods: {
            init() {
                this.columnsUrl = "/static/json/agent/RefundCommissionPeriod/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.commission.period;
            },
            doHandle(e) {
                this.nowId = parseInt(e.row.id);
                this.formType = "";
                this.nowId = parseInt(e.row['id']) || -1;
                this.updated = false;
                switch (e.fn) {
                    case "doEdit":
                        this.doEdit(e.row);
                        break;
                    case "doDelete":
                        this.doDelete(e.row);
                        break;
                    //解锁操作
                    case "doLock":
                        this.doLock(e.row);
                        break;
                    //统计
                    case "doStat":
                        this.doStat(e.row);
                        break;
                }
            },
            //选中修改数据
            doEdit(row) {
                this.formConfig.ifVal = 'edit';
                //FORM赋值
                this.loading = true;
                FORMVAL(row, this.formConfig);
                this.period = row.period;
//                this.start = row.start;
                // this.formConfig[0].value = row.period;
                this.formTitel = "修改退佣期数";
                let _this = this;
                setTimeout(function () {
                    _this.formType = "edit";
                    _this.editVisible.state = true;
                    _this.loading = false;
                }, 500)
            },
            //新增数据
            doAdd() {
                this.updated = false;
                this.formTitel = "新增退佣期数";
                this.editVisible.state = true;
                this.formType = "add";
            },
            //保存数据
            getForm(obj) {
                // 新增不需要start参数，在这里进行处理
                console.log(obj);
                let query_obj = {}
                for (let i in obj.formObj) {
                    query_obj[i] = obj.formObj[i];
                }
                if (query_obj['end']) {
                    query_obj['end'] = FORMATDAT(query_obj['end'], 'yyyy-MM-dd')
                }
                if (query_obj['period']) {
                    query_obj['period'] = query_obj['period']
                }
                if (query_obj['start']) {
                    query_obj['start'] = FORMATDAT(query_obj['start'], 'yyyy-MM-dd')
                }
                console.log(query_obj['start'])
                this.loading = true;
                let _this = this;
                let str = "";
                let url = '';
                if (this.formType == 'edit') {
                    // obj.formObj.id = this.nowId;
                    url = URL.api + '/commission/period?id=' + this.nowId;
                    query_obj['period'] = this.period;
                } else {
                    url = URL.api + '/commission/period';
                }

				this.$.autoAjax('put',url, query_obj, {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							if (_this.formType == "add") {
								str = LANG['恭喜您，新增退佣期数成功！'] || '恭喜您，新增退佣期数成功！';
							} else {
								str = LANG['恭喜您，退佣期数修改成功！'] || '恭喜您，退佣期数修改成功！';
							}
							_this.updated = true;
							_this.$message.success(str);
						} else if (res.state === 2002) {
							if (_this.formType == "add") {
								str = LANG[res.msg] || res.msg;
							} else {
								str = LANG[res.msg] || res.msg;
							}
							_this.$message.error(str);
						} else {
							if (_this.formType == "add") {
								str = LANG['新增失败！'] || '新增失败！';
							} else {
								str = LANG['保存失败！'] || '保存失败！';
							}
							_this.$message.error(str);
						}
						this.loading = false;
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.put(url, JSON.stringify(query_obj), URLCONFIG).then((res) => {
                //     if (res.data.state == 0 && res.data.data) {
                //         if (_this.formType == "add") {
                //             str = LANG['恭喜您，新增退佣期数成功！'] || '恭喜您，新增退佣期数成功！';
                //         } else {
                //             str = LANG['恭喜您，退佣期数修改成功！'] || '恭喜您，退佣期数修改成功！';
                //         }
                //         _this.updated = true;
                //         _this.$message.success(str);
                //     } else if (res.data.state === 2002) {
                //         if (_this.formType == "add") {
                //             str = LANG[res.data.msg] || res.data.msg;
                //         } else {
                //             str = LANG[res.data.msg] || res.data.msg;
                //         }
                //         _this.$message.error(str);
                //     } else {
                //         if (_this.formType == "add") {
                //             str = LANG['新增失败！'] || '新增失败！';
                //         } else {
                //             str = LANG['保存失败！'] || '保存失败！';
                //         }
                //         _this.$message.error(str);
                //     }
                //     this.loading = false;
                // })
            },
            //删除数据
            doDelete(row) {
                let name = row['period'];
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + name + '"' + (this.LANG['吗？'] || '吗？');
                this.confirmConfig.fn = "delete";
                this.confirmConfig.obj = row;
            },
            //确认删除
            doConfirm(obj) {
                this.loading = true;
                let _this = this;
                let object = {};
                if (obj.obj) {
                    object = obj.obj;
                }
                object.id = parseInt(this.nowId);
                switch (obj.fn) {
                    case "delete":

						this.$.autoAjax('delete',URL.api + '/commission/period?ids=' + this.nowId, '', {
							ok: (res) => {
								if (res.state == 0 && res.data) {
									_this.$message.success(LANG['恭喜您，退佣期数删除成功！'] || '恭喜您，退佣期数删除成功！');
									_this.updated = true;
								} else {
									_this.$message.error(LANG[res.msg] || res.msg);
								}
								_this.loading = false;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // this.$http.delete(URL.api + '/commission/period?ids=' + this.nowId, URLCONFIG).then((res) => {
                        //     if (res.data.state == 0 && res.data.data) {
                        //         _this.$message.success(LANG['恭喜您，退佣期数删除成功！'] || '恭喜您，退佣期数删除成功！');
                        //         _this.updated = true;
                        //     } else {
                        //         _this.$message.error(LANG[res.data.msg] || res.data.msg);
                        //     }
                        //     _this.loading = false;
                        // })
                        .catch((e) => {
                            _this.$message.error(LANG['退佣期数删除失败，请稍候重试！'] || '退佣期数删除失败，请稍候重试！');
                            _this.loading = false;
                        });
                        this.loading = false;
                        break;
                }
            },
            handleClose() {
                this.dialogVisible = false;
            },
            //解锁
            doLock(obj) {
                let _this = this;
                _this.lock_name = "确定要解锁：【 " + obj.period_name + ' 】吗？';
                _this.dialogVisible = true;
                _this.query_Unlock = obj;
                _this.updated = false;
            },
            doUnlock() {//commission/period/statics
                console.log(this.query_Unlock);
                let _this = this, url = URL.api + '/commission/incomes/';
                let params = {
                    "type": 5,
                    "list": [{
                        "id": "",
                        "uid": "",
                        "period_name": "",
                        "period": ""
                    }]
                }
                params.list[0].id = this.query_Unlock.id;
                params.list[0].uid = this.query_Unlock.admin_uid;
                params.list[0].period_name = this.query_Unlock.period_name;
                params.list[0].period = this.query_Unlock.period;

				this.$.autoAjax('patch',url, params, {
					ok: (res) => {
						if (res.data && res.msg == 'OK') {
							_this.$message.success(LANG['恭喜您，解锁成功！'] || '恭喜您，解锁成功！');
							_this.updated = true;
						} else {
							_this.$message.error(LANG['抱歉，解锁失败！'] || '抱歉，解锁失败！！');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.patch(url, JSON.stringify(params), URLCONFIG).then((res) => {
                //     if (res.data && res.data.msg == 'OK') {
                //         _this.$message.success(LANG['恭喜您，解锁成功！'] || '恭喜您，解锁成功！');
                //         _this.updated = true;
                //     } else {
                //         _this.$message.error(LANG['抱歉，解锁失败！'] || '抱歉，解锁失败！！');
                //     }
                // });
                _this.dialogVisible = false;
            },
            //统计
            doStat(obj) {
                this.$router.push({path: '/refundCommissionPeriod_child', query: obj});
            }
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init();
        }
    }
</script>
<style>
    .templateManage .addManage {
        text-align: right;
    }
</style>
