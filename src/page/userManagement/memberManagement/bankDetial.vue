<template>
    <div id="bankDetail">
        <div class="clearfix">
            <el-col>
                <div class="title">{{LANG['银行信息'] || '银行信息'}}</div>
                <div><span style="color: #ff0000">{{LANG['注'] || '注'}}:</span>{{LANG['当会员存在真实姓名，新增或编辑银行卡默认户名为会员的真实姓名！'] || '当会员存在真实姓名，新增或编辑银行卡默认户名为会员的真实姓名！'}}</div>
                <div style="float:right">
                    <el-button type="primary" @click="addBank" style="margin-left:5px;" size="small">{{LANG['新增银行卡'] || '新增银行卡'}}</el-button>
                </div>
            </el-col>
            <el-col>
                <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="false"
                    :tableIndex="false"
                    :pageSet="false"
                    :automation="true"
                    :isCreated="true"
                    :updated="updated"
                    @do-handle="doHandle"
                    :showRefresh="false">
                </tablegrid>
            </el-col>
            <!--添加银行-->
            <el-col>
                <formEdit
                    :formTitel="formTitel"
                    :formVisible="formVisible"
                    :formConfig="formConfig"
                    :type="type"
                    :labelWidth="labelWidth"
                    :isEdit="isEdit"
                    :formType="formType"
                    @get-form="saveForm">
                </formEdit>
            </el-col>
        </div>
    </div>
</template>

<script>
    import tablegrid from '../../../components/tableGrid.vue'
    import formEdit from '../../../components/formEdit.vue'
    import NProgress from 'nprogress'
    export default {
        data() {
            return {
                LANG,
                columnsUrl: "",
                tableUrl: "",
                sumArr: [3000, 2700],
                //弹窗相关
                type: "default",
                formTitel: "",
                labelWidth: "90px",
                isEdit: {
                    state: false
                },
                formVisible: {
                    state: false
                },
                formConfig: [{
                        "prop": "bank_id",
                        "value": "",
                        "label": "银行名称",
                        "type": "select",
                        "list": [],
                        "rules": [{
                            "require": true
                        }]
                    },
                    {
                        "prop": "accountname",
                        "value": "",
                        "type": "text",
                        "label": "户名",
                        "disabled": false,
                        "rules": [{
                            "require": true
                        }]
                    },
                    {
                        "prop": "card",
                        "value": "",
                        "type": "account",
                        "label": "银行账号",
                        "rules": [{
                            "require": true
                        }]
                    },
                    {
                        "prop": "address",
                        "value": "",
                        "type": "text",
                        "label": "开户行",
                        "rules": [{
                            "require": true
                        }]
                    }
                ],
                formType: "",
                nowId: -1,
                updated: false,
                uid: -1
            }
        },
        props: {
            id: Number
        },
        components: {
            tablegrid: tablegrid,
            formEdit: formEdit
        },
        methods: {
            // 页面初始化
            init() {
                this.columnsUrl = "/static/json/accoutManage/memberManagement/bankDetial/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.user.newInfo+"?id="+parseInt(this.id)+ "&type=bank";
                //厅主可用银行
                let list = this.formConfig[0].list;
				this.$.autoAjax('get',URL.api + ROUTES.GET.banks, '', {
					ok: (res) => {
						let model = res.data;
						for (let i in model) {
							list.push({
								"label": model[i].name,
								"value": model[i].id.toString()
							})
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
            },
            //添加银行
            addBank() {
                if (sessionStorage.role !== '0') {
                    if (sessionStorage.bank_card === "false") {
                        this.$message.error(this.LANG['您没有修改权限'] || '您没有修改权限');
                        return;
                    }
                }
                this.formConfig[1]["disabled"] = false;
                this.formTitel = this.LANG['添加银行帐号'] || '添加银行帐号';
                this.formType = "add";
                this.formVisible.state = true;
            },
            //保存弹窗数据
            saveForm(obj) {
                let str = "";
                let blank_url = '';
                let query = {};
                query.bank_id = parseInt(obj.formObj.bank_id, 10);
                query.accountname = obj.formObj.accountname;
                query.address = obj.formObj.address;
                query.card = obj.formObj.card;
                query.uid =  this.id;
                query.role = 1;
                // 后台记录参数需要加上银行名称，匹配当前选择银行
                    const enough_bank = bank => bank.value == query.bank_id;
                    let bank_list = this.formConfig[0].list.filter(enough_bank);
                    query.bank_name = bank_list[0]['label']
                this.formType == 'add' ? blank_url = URL.api + ROUTES.PUT.user.info : blank_url = URL.api + ROUTES.PUT.user.info + "?id=" + parseInt(this.nowId)
//	            blank_url = URL.api + ROUTES.PUT.user.info;
                this.updated = false;

				this.$.autoAjax('put', blank_url, query, {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							if (this.formType == "add") {
								str = this.LANG['恭喜您，银行帐号添加成功！'] || '恭喜您，银行帐号添加成功！';
							} else {
								str = this.LANG['恭喜您，银行帐号修改成功！'] || '恭喜您，银行帐号修改成功！';
							}
							this.$message.success(str);
							this.updated = true;
						} else if (res.state == 4003  || res.state == 405 ) {
							if (this.formType == "add") {
								str = this.LANG['银行帐号添加失败，权限不足！'] || '银行帐号添加失败，权限不足！';
							} else {
								str = this.LANG['银行帐号修改失败，权限不足！'] || '银行帐号修改失败，权限不足！';
							}
							this.$message.error(str);
						} else {
							this.$message.error(res.msg);
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
            },
            //表格点击事件
            doHandle(item) {
                // 判断是否有权限
                if (sessionStorage.role !== '0') {
                    if (sessionStorage.bank_card === "false") {
                        this.$message.error(this.LANG['您没有修改权限'] || '您没有修改权限');
                        return;
                    }
                }
                switch (item.fn) {
                    case "doEdit":
                        // this.$message.error(LANG['权限不足！'] || '权限不足！');
                        // return;
                        this.doEdit(item.row)
                        break
                    case "doDisable":
                        this.doDisable(item.row)
                        break
                    case "doEnable":
                        this.doEnable(item.row)
                        break
                }
            },
            //修改
            doEdit(row) {
            	console.log(row);
                this.formConfig[1]["disabled"] = true;
                this.nowId = row.id;
                //赋初值
                this.formType = "";
                this.formTitel = this.LANG['修改银行帐号'] || '修改银行帐号';
                setTimeout(() => {
                    let list = this.formConfig[0].list;
                    for (let i in list) {
                        if (list[i].label == row['bank_name']) {
                            this.formConfig[0]['value'] = list[i].value.toString();
                        }
                    }
                    this.formConfig[1]['value'] = row.accountname;
                    this.formConfig[2]['value'] = row['card'];
                    this.formConfig[3]['value'] = row['address'];

                    this.formType = "edit";
                    this.isEdit.state = true;
                    this.formVisible.state = true;
                }, 500)
            },
            //停用
            doDisable(row) {
                this.nowId = row.id;
                let _this = this;
                this.updated = false;

				this.$.autoAjax('patch',URL.api + ROUTES.PUT.user.info + "?id=" + parseInt(this.nowId, 10), {"status": 0, "uid": this.id, "role": 1}, {
					ok: (res) => {
						if (res.state != undefined && res.state == 0 && res.state == 0) {
							_this.$message.success(_this.LANG['银行卡停用成功'] || '银行卡停用成功');
							_this.updated = true;
						} else if (res.state == 4003  || res.state == 405 ) {
							this.$message.error(LANG['银行卡停用失败，权限不足！'] || '银行卡停用失败，权限不足！');
						} else {
							_this.$message.error(_this.LANG['银行卡停用失败，请稍后重试'] || '银行卡停用失败，请稍后重试');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.patch(URL.api + ROUTES.PUT.user.info + "?id=" + parseInt(this.nowId, 10), JSON.stringify({"status": 0, "uid": this.id, "role": 1}), URLCONFIG).then((res) => {
                //     if (res.data.state != undefined && res.data.state == 0 && res.data.state == 0) {
                //         _this.$message.success(_this.LANG['银行卡停用成功'] || '银行卡停用成功');
                //         _this.updated = true;
                //     } else if (res.data.state == 4003  || res.data.state == 405 ) {
                //         this.$message.error(LANG['银行卡停用失败，权限不足！'] || '银行卡停用失败，权限不足！');
                //     } else {
                //         _this.$message.error(_this.LANG['银行卡停用失败，请稍后重试'] || '银行卡停用失败，请稍后重试');
                //     }
                // })
            },
            //启用
            doEnable(row) {
                this.nowId = row.id;
                let _this = this;
                this.updated = false;

				this.$.autoAjax('patch',URL.api + ROUTES.PUT.user.info + "?id=" + parseInt(this.nowId, 10), {"status": 1, "uid": this.id, "role": 1}, {
					ok: (res) => {
						if (res.state != undefined && res.state == 0 && res.state == 0) {
							_this.$message.success(_this.LANG['银行卡启用成功'] || '银行卡启用成功');
							_this.updated = true;
						} else if (res.state == 4003  || res.state == 405 ) {
							this.$message.error(LANG['银行卡启用失败，权限不足！'] || '银行卡启用失败，权限不足！');
						} else {_this.$message.error(LANG['银行卡启用失败，请稍后重试'] || '银行卡启用失败，请稍后重试');}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.patch(URL.api + ROUTES.PUT.user.info + "?id=" + parseInt(this.nowId, 10), JSON.stringify({"status": 1, "uid": this.id, "role": 1}), URLCONFIG).then((res) => {
                //     if (res.data.state != undefined && res.data.state == 0 && res.data.state == 0) {
                //         _this.$message.success(_this.LANG['银行卡启用成功'] || '银行卡启用成功');
                //         _this.updated = true;
                //     } else if (res.data.state == 4003  || res.data.state == 405 ) {
                //         this.$message.error(LANG['银行卡启用失败，权限不足！'] || '银行卡启用失败，权限不足！');
                //     } else {_this.$message.error(LANG['银行卡启用失败，请稍后重试'] || '银行卡启用失败，请稍后重试');}
                // })
            }
        },
        computed: {},
        mounted() {},
        created() {
            this.uid = JSON.parse(sessionStorage.getItem("user")).id || -1;
            this.init()
        }
    }
</script>

<style>
    #bankDetail {
        padding:20px 0;
    }

    #bankDetail .title {
        text-align: center;
        width: 100%;
        font-weight: 800;
        font-size: 18px;
        margin-bottom: 30px !important;
    }
</style>
