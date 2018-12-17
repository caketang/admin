<template>
    <div id="emailSettings" v-loading="load">
        <el-col :span="12" :offset="9">
        <div class="border_style">
            <el-row type="flex" justify="center">
                <el-col :span="24">
                    <formEdit :formTitel="''"
                              :formVisible="formVisible"
                              :formConfig="formConfig"
                              :type="'pageForm'"
                              :labelWidth="'120px'"
                              :isEdit="{}"
                              :updateKeys="updateKeys"
                              @get-form="saveData"
                              @cancel-form="cancel"></formEdit>
                </el-col>
            </el-row>
        </div>
        </el-col>
    </div>
</template>
<script>
    import formEdit from '../../components/formEdit.vue'

    export default {
        data() {
            return {
                baseUrl: '',
                load: false,
                // 表单
                labelWidth: "90px",
                formVisible: {
                    state: false
                },
                formConfig: [{
                    "prop": "mailsys",
                    "value": "",
                    "label": "SMTP服务器",
                    "type": "select",
                    "list": ARRAYS.mailConfig,
                    "rules": [{"require": true}]
                },
                    {"prop": "mailaddress", "value": "", "type": "text", "label": "邮箱地址", "rules": [{"require": true}]},
                    {
                        "prop": "mailpass",
                        "value": "",
                        "type": "password",
                        "label": "邮箱密码",
                        "rules": [{"require": true}]
                    },
                ],
                updateKeys: ""
            }
        },
        components: {formEdit: formEdit},
        computed: {},
        watch: {},
        methods: {
            init() {
                this.baseUrl = URL.api + ROUTES.GET.system.emailSettings;
                let _this = this;

				this.$.autoAjax('get',this.baseUrl, '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							let obj = res.data || [];
							obj.is_ssl = obj.is_ssl === "1" ? true : false;
							let temp = obj['mailaddress'].split('@');
							let str = '';
							if (temp[1]) {
								switch (temp[1]) {
									case 'gmail.com' :
										str = "mailsys,smtp.gmail.com";
										break;
									case 'qq.com' :
										str = "mailsys,smtp.qq.com";
										break;
									case 'yahoo.com' :
										str = "mailsys,smtp.mail.yahoo.com";
										break;
									case '163.com' :
										str = "mailsys,smtp.163.com";
										break;
								}
							}
							_this.updateKeys = str + ",mailaddress," + obj.mailaddress + ",mailpass," + obj.mailpass;
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(this.baseUrl, URLCONFIG).then(res => {
                //     if (res.data.state == 0 && res.data.data) {
                //         let obj = res.data.data || [];
                //         obj.is_ssl = obj.is_ssl === "1" ? true : false;
                //         let temp = obj['mailaddress'].split('@');
                //         let str = '';
                //         if (temp[1]) {
                //             switch (temp[1]) {
                //                 case 'gmail.com' :
                //                     str = "mailsys,smtp.gmail.com";
                //                     break;
                //                 case 'qq.com' :
                //                     str = "mailsys,smtp.qq.com";
                //                     break;
                //                 case 'yahoo.com' :
                //                     str = "mailsys,smtp.mail.yahoo.com";
                //                     break;
                //                 case '163.com' :
                //                     str = "mailsys,smtp.163.com";
                //                     break;
                //             }
                //         }
                //         _this.updateKeys = str + ",mailaddress," + obj.mailaddress + ",mailpass," + obj.mailpass;
                //     }
                // })
            },
            saveData(obj) {
                this.load = true;
                let saved = null;
                for (let i = 0; i < ARRAYS.mailConfig.length; i++) {
                    if (ARRAYS.mailConfig[i].value === obj.formObj.mailsys) {
                        saved = {
                            mailhost: ARRAYS.mailConfig[i].value,
                            mailport: ARRAYS.mailConfig[i].port,
                            mailname: obj.formObj.mailaddress.split('@')[0],
                            mailpass: obj.formObj.mailpass,
                            mailaddress: obj.formObj.mailaddress,
                            is_ssl: ARRAYS.mailConfig[i].is_ssl
                        }
                    }
                }
                let _this = this;

				this.$.autoAjax('put',URL.api + ROUTES.PUT.system.emailSettings,saved, {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							_this.$message.success(LANG['保存成功'] || '保存成功');
							_this.init();
							_this.load = false;
						} else {
							_this.$message.error(LANG['保存失败'] || '保存失败');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.put(URL.api + ROUTES.PUT.system.emailSettings, JSON.stringify(saved), URLCONFIG).then(res => {
                //     if (res.data.state == 0 && res.data.data) {
                //         _this.$message.success(LANG['保存成功'] || '保存成功');
                //         _this.init();
                //         _this.load = false;
                //     } else {
                //         _this.$message.error(LANG['保存失败'] || '保存失败');
                //     }
                // });
            },
            cancel() {
                this.init();
            },
        },
        mounted() {
        },
        created() {
            this.init();
        }
    }
</script>
<style lang="less">
    #emailSettings {
        padding-top: 30px;
        .border_style {
            padding: 20px 0;
            border: 1px solid #cccccc;
            width: 400px;
            input {
                width: 200px;
            }
            .el-input-group--append {
                input {
                    width: 154px;
                }
                width: 200px;
            }
        }
    }
</style>
