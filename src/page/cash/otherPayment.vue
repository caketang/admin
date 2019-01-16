<template>
    <div id="otherPayment" v-loading="loading" class="clearfix">
        <div class="search" v-if="!depositShow">
            <el-col :span="24" class="pb">
                <formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="searchConfig" :type="type"
                          :labelWidth="labelWidth" :isEdit="isEdit" @add-new="doAdd" :showAdd=true :updateKeys="updateKeys"
                          :addText="LANG['新增支付'] || '新增支付'" @do-query="doQuery" @reset-form="resetForm"></formEdit>
            </el-col>
            <!--<el-button type="primary" class="addManage" @click="doAdd" v-text="LANG['新增支付'] || '新增支付'"-->
            <!--size="small"></el-button>-->
        </div>
        <el-col v-if="!depositShow">
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :getData="true"
                    :isCreated="!depositShow"
                    :updated="updated"
                    :tableCheck="true"
                    :tabOperation="tabOperation"
                    @do-operation="doOperation"
                    @do-handle="doHandle"></tablegrid>
        </el-col>
        <el-col>
            <!--编辑界面-->
            <formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="formConfig" :type="formType"
                      :labelWidth="formLabelWidth" :isEdit="isEdit" @get-form="getForm" :formType="formType"
                      @get-select="getSelect" @changeRadio="changeRadio"></formEdit>
        </el-col>
        <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        <el-col v-if="depositShow">
            <DepositStatus :depositId="nowId" @return-page="returnPage" :paymentName="paymentName"></DepositStatus>
        </el-col>
    </div>
</template>
<script>
    import tablegrid from '../../components/tableGrid.vue';
    import formEdit from '../../components/formEdit.vue';
    import confirm from '../../components/confirm.vue';
    import DepositStatus from './depositStatus.vue'

    export default {
        data() {
            return {
                LANG,
                loading: false,
                //删除确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: "",
                    obj: null,
                },
                //表格数据
                tableUrl: "",
                useScene: "",
                baseUrl: '',
                //列配置
                columnsUrl: "",
                //搜索框
                type: "search",
                formTitel: "",
                labelWidth: "90px",
                isEdit: {},
                //新增配置

                formVisible: {
                    state: false
                },
                searchConfig: [
                    {"prop": "pay_id", "value": "", "type": "select", "label": "支付平台", "list": [], "filterable": true},
                    {
                        "prop": "status", "value": "", "label": "状态", "type": "select",
                        "list": [{"label": "全部", "value": ""}, {"label": "启用", "value": "enabled"}, {
                            "label": "停用",
                            "value": "disabled"
                        }]
                    },
                    {"prop": "name", "value": "", "label": "商户名称", "type": "text", "placeholder": "请输入商户名称"},
                    {"prop": "parter", "value": "", "label": "商户编号", "type": "text", "placeholder": "请输入商户编号"},
                    {
                        "prop": "pay_scene", "value": "", "label": "支付场景", "type": "select",
                        "list": ARRAYS.paymentScenarios
                    },
                    {
                        "prop": "levels", "value": "", "label": "会员等级", "type": "select",
                        "list": []
                    },
                    {
                        "prop": "terminal", "value": "", "label": "终端设备", "type": "select",
                        "list": [{"label": "全部", "value": ""}, {"label": "PC", "value": "PC"}, {
                            "label": "H5",
                            "value": "H5"
                        }, {"label": "APP", "value": "APP"},]
                    },
                ],
                formType: "default",
                formLabelWidth: "150px",
                formConfig: [
                    {"type": 'title', "label": "第三方支付平台账户"},
                    {
                        "prop": "pay_id", "value": "", "label": "第三方支付平台", "type": "select", "showpasswordname": false,
                        "list": [], "rules": [{"require": true}]
                    },
                    {"prop": "name", "value": "", "label": "商户名称", "type": "text", "rules": [{"require": true}]},
                    {"prop": "parter", "value": "", "label": "商户编号", "type": "text", "ifVal": "101", "ifKey": "pay_id", "rules": [{"require": true}]},
                     //薄情付财 ID4
                    {
                        "prop": "keyTwo",
                        "value": "",
                        "label": "应用密钥",
                        "type": "password",
                        "ifVal": "101", "ifKey": "pay_id",
                        "rules": [{"require": true, "isDefault": true}]
                    },
                    //a支付
                    {
                        "prop": "payKey",
                        "value": "",
                        "label": "商户密钥",
                        "type": "password",
                        "ifVal": "104", "ifKey": "pay_id",
                        "rules": [{"require": true, "isDefault": true}]
                    },
                    {
                        "prop": "paySecret",
                        "value": "",
                        "label": "支付密钥",
                        "type": "password",
                        "ifVal": "104", "ifKey": "pay_id",
                        "rules": [{"require": true, "isDefault": true}]
                    },
                    //贝壳支付 7-8
                    {
                        "prop": "account_id",
                        "value": "",
                        "label": "商户ID",
                        "type": "password",
                        "ifVal": "105", "ifKey": "pay_id",
                        "rules": [{"require": true, "isDefault": true}]
                    },
                    {
                        "prop": "key",
                        "value": "",
                        "label": "支付密钥",
                        "type": "password",
                        "ifVal": "105", "ifKey": "pay_id",
                        "rules": [{"require": true, "isDefault": true}]
                    },
                    // 支付场景
                    {
                        "prop": "pay_scene",
                        "value": [],
                        "label": "支付场景",
                        "sReset": false,
                        "checkAll": false,
                        "allBtnShow": true,
                        "type": "checkGroup",
                        "list": ARRAYS.paymentScenariosList,
                        "Arr": ARRAYS.paymentScenariosOne,
                        "rules": [{"require": true}]
                    },

                    {
                        "prop": "terminal",
                        "value": [],
                        "label": "终端设备",
                        "sReset": false,
                        "checkAll": false,
                        "allBtnShow": true,
                        "type": "checkGroup",
                        "list": ARRAYS.PLATFORMS1List,
                        "Arr": ARRAYS.PLATFORMStWO,
                        "rules": [{"require": true}]
                    },
                    {"type": 'title', "label": "帐户使用限制设置"},
                    {
                        "prop": "day_deact",
                        "value": "",
                        "label": "日停用金额",
                        "type": "number",
                        "rules": [{"varMax": 99999999, "varMin": 0}, {"require": true}]
                    },
                    {
                        "prop": "sort",
                        "value": "0",
                        "label": "排序",
                        "type": "number",
                        "isDefault": true,
                        "rules": [{"integer": true}]
                    },
                    {
                        "prop": "levels",
                        "value": [],
                        "label": "开放层级",
                        "sReset": false,
                        "checkAll": false,
                        "allBtnShow": true,
                        "type": "checkGroup",
                        "list": [],
                        "Arr": [],
                        "rules": [{"require": true}]
                    },
                    {
                        "prop": "status", "value": "disabled", "label": "是否启用", "type": "select",
                        "list": ARRAYS.state2, "isDefault": true, "rules": [{"require": true}]
                    }
                ],
                //现数据ID
                nowId: -1,
                updated: false,
                depositShow: false,
                //批量操作按钮
                tabOperation: [
                    {"label": "批量启用", "fn": "doEnable"},
                    {"label": "批量停用", "fn": "doDisable"}],
                // 支付场景
                pay_scene_list: {},
                // 存储查询条件
                query: {},
                updateKeys: ''
            }
        },
        components: {
            tablegrid: tablegrid,
            formEdit: formEdit,
            confirm: confirm,
            DepositStatus: DepositStatus
        },
        methods: {
            init() {
                this.searchConfig[0].list = [];
                this.formConfig[1].list = [];
                let list2 = this.formConfig[1].list;
                let channel = this.searchConfig[0].list;
                this.baseUrl = URL.api + ROUTES.GET.cash.thirds.$;
                this.tableUrl = URL.api + ROUTES.GET.cash.thirds.$;
                this.columnsUrl = "/static/json/cash/otherPayment/columns.json";
                //取支付渠道
				this.$.autoAjax('get',URL.api + ROUTES.GET.cash.third.providers, '', {
					ok: (res) => {
						if (res.state === 0 && res.data) {
							let model = res.data;
							for (let i in model) {
								// 支付 更新
								if (model[i].code.toUpperCase() === 'BQZF') {
									_this.formConfig[4].ifVal = model[i].id.toString();
                                }else if (model[i].code.toUpperCase() === 'aabill') {
                                    _this.formConfig[5].ifVal = model[i].id.toString();
                                    _this.formConfig[6].ifVal = model[i].id.toString();
								}else if (model[i].code.toUpperCase() === 'beke') {
									_this.formConfig[7].ifVal = model[i].id.toString();
									_this.formConfig[8].ifVal = model[i].id.toString();
								}
								list2.push({
									"label": model[i].name,
									"code": model[i].code,
									"value": model[i].id.toString()
								})
								channel.push({
									"label": model[i].name,
									"code": model[i].code,
									"value": model[i].id.toString()
								})
							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // 获取层级
                let levelUrl = URL.api + ROUTES.GET.user.level.list;
                let _this = this, listLevels;
                for (let m = 0; m < this.formConfig.length; m++) {
                    if (this.formConfig[m].prop === 'levels') {
                        this.formConfig[m].list = [];
                        listLevels = this.formConfig[m];
                    }
                }
                _this.searchConfig[5].list = [{"label": LANG['全部'] || '全部', "value": ''}];

				this.$.autoAjax('get',levelUrl, '', {
					ok: (res) => {
						let model = res.data || [];
						for (let k in model) {
							listLevels.list.push(model[k].id.toString())
							listLevels.Arr.push({
								"label": model[k].name,
								"value": model[k].id.toString()
							});
							_this.searchConfig[5].list.push({
								"label": model[k].name,
								"value": model[k].id
							})
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // 支付场景
				this.$.autoAjax('get',URL.api + '/cash/3th.providers', '', {
					ok: (res) => {
						if (res.state === 0 && res.data) {
							let model = res.data || [], pay_scene_list = this.pay_scene_list;
							if (model.length && model.length > 0) {
								for (let k = 0; k < model.length; k++) {
									pay_scene_list[model[k].id] = model[k];
								}
							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
            },
            //readio
            changeRadio(item) {
//                console.log(item);
            },
            //表格数据按钮
            doHandle(item) {
                this.formType = "";
                this.updated = false;
                this.nowId = parseInt(item.row.id);
                switch (item.fn) {
                    case "doEdit": // 编辑
                        this.doEdit(item.row)
                        break
                    case "doDisable":
                        this.doDisable(item.row)
                        break
                    case "doEnable":
                        this.doEnable(item.row)
                        break
                    case "dayUsedMoney":
                        this.dayUsedMoney(item.row)
                        break
                    case "usedMoney":
                        this.usedMoney(item.row)
                        break
                    case "doDelete":
                        this.doDelete(item.row)
                        break
                    case "doDepositStatus":
                        this.doDepositStatus(item.row)
                        break
                }
            },
            // 存款状况
            doDepositStatus(row) {
                if (parseInt(row.id) >= 0) {
                    this.paymentName = row.name;
                    this.depositShow = true;
                }
            },
            // 返回列表
            returnPage() {
                let updateKeys;
                for(let i in this.query){
                    updateKeys = i + ',' + this.query[i] + ',';
                }
                setTimeout(()=>{
                    this.updateKeys = updateKeys;
                },500)
                this.tableUrl = this.baseUrl +  this.addSearch(this.query);
                this.depositShow = false;
            },
            // 日累计金额页面跳转
            dayUsedMoney(row) {
                if (FORMATMONEY(row['money_day_used']) > 0) {
                    this.$router.push({
                        path: '/onLineReceipts',
                        query: {app_id: parseInt(row['app_id']), app_id_time: FORMATDATEPICKER(new Date())}
                    });
                } else {
                    this.$message.error(LANG['暂无交易记录'] || '暂无交易记录');
                }
//                this.$router.push({path:'/onLineReceipts',query:{app_id: parseInt(row['app_id']),app_id_time: FORMATDATEPICKER(new Date())}});
            },
            // 累计金额页面跳转
            usedMoney(row) {
                if (FORMATMONEY(row['money_used']) > 0) {
                    this.$router.push({path: '/onLineReceipts', query: {app_id: parseInt(row['app_id'])}});
                } else {
                    this.$message.error(LANG['暂无交易记录'] || '暂无交易记录');
                }
            },
            // 删除第三方支付
            doDelete(row) {
                if (parseInt(row.id) >= 0) {
                    if (parseInt(row.id)) {
                        this.confirmConfig.state = true;
                        this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
                        this.confirmConfig.fn = "delete";
                        this.confirmConfig.obj = row;
                    }
                }
            },
//            // 新增支付渠道
            doAdd() {
                this.formTitel = this.LANG["新增第三方支付"] || "新增第三方支付";
                this.formVisible.state = true;
                this.formType = "add";
            },
            // 批量操作
            doOperation(obj) {
                switch (obj.fn) {
                    case 'doEnable':
                        this.doEnable(obj.rows)
                        break
                    case "doDisable":
                        this.doDisable(obj.rows)
                        break;
                }
            },
            //保存数据
            getForm(obj) {
                this.updated = false;
                let _this = this, str = "", query = {}, tempLevels = [];
                let url = URL.api + ROUTES.POST.cash.third.third;
                let arr = obj.formObj.levels;
                for (let k in obj.formObj) {
                    query[k] = obj.formObj[k];
                }
                for (let i = 0; i < this.formConfig[1].list.length; i++) {
                    if (this.formConfig[1].list[i].value === query['pay_id']) {
                        query['pay_name'] = this.formConfig[1].list[i].label;
                        query['code'] = this.formConfig[1].list[i].code;
                    }
                }
                switch (query['code']) {
                    case 'bqzf':
                        query['configs'] = {
                            'merchant':query['parter'],
                            'key': query['keyTwo']
                        }
                        break;
                    case 'aabill':
                        query['configs'] = {
                            'payKey':query['payKey'],
                            'paySecret': query['paySecret']
                        }
                        break;
                    case 'beke':
                        query['configs'] = {
                            'account_id':query['account_id'],
                            'key': query['key']
                        }
                        break;
                }
                delete query['keyTwo'];
                delete query['parter'];
                delete query['payKey'];
                delete query['paySecret'];
                delete query['account_id'];
                delete query['key'];
                query['pay_scene'] = query['pay_scene'].toString();
                query['terminal'] = (query['terminal'].toString()).toUpperCase();
                // 防止前台不填写金额直接传null过去，避免后台直接过滤null
                query.day_deact = FORMATMultiplyMoney(query.day_deact);
                //清掉空值
                for (let k in query.configs) {
                    if (query.configs[k] === '') {
                        delete query.configs[k];
                    }
                }
                if (this.formType == "add") {
					this.$.autoAjax('put',url,query,{
						ok: (res) => {
							if (res.state == 0 && res.data) {
								_this.$message.success(LANG['恭喜您，新增第三方支付成功！'] || '恭喜您，新增第三方支付成功！');
							} else {
								_this.$message.error(res.msg + "," + (LANG['新增第三方支付失败，请稍候重试！'] || '新增第三方支付失败，请稍候重试！'));
							}
							_this.updated = true;
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                } else {
                    query['id'] = parseInt(this.nowId);
					this.$.autoAjax('put', url + '?id=' + parseInt(this.nowId), query, {
						ok: (res) => {
							if (res.state == 0 && res.data) {
								_this.$message.success(LANG['恭喜您，第三方支付修改成功！'] || '恭喜您，第三方支付修改成功！');
							} else {
								_this.$message.error(res.msg + "," + (LANG['修改第三方支付失败，请稍候重试！'] || '修改第三方支付失败，请稍候重试！'));
							}
							_this.updated = true;
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                }

            },
            // select下拉事件
            getSelect(obj) {
                console.log(obj)
                if (obj.key === 'pay_id') {
                    let payId = obj.obj.pay_id, pay_scene, terminal, _this = this, pay_scene_list = this.pay_scene_list;
                    for (let k = 0; k < this.formConfig.length; k++) {
                        if (this.formConfig[k].prop == 'pay_scene') {
                            pay_scene = this.formConfig[k].list;
                            pay_scene.splice(0, pay_scene.length);
                        }
                        if (this.formConfig[k].prop == 'terminal') {
                            terminal = this.formConfig[k].list;
                            terminal.splice(0, terminal.length);
                        }
                    }
                    for (let i in pay_scene_list) {
                        if (i === obj.obj[obj.key]) {
                            let tempTerminal = pay_scene_list[i].terminal.split(',');
                            for (let m in tempTerminal) {
                                terminal.push(tempTerminal[m]);
                            }
                            let tempPayScene = pay_scene_list[i].pay_scene.split(',');
                            for (let n in tempPayScene) {
                                pay_scene.push(tempPayScene[n]);
                            }
                        }
                    }
                }
            },
            doDisable(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "disable";
                    this.confirmConfig.obj = row;
                } else if (row.length && row.length > 0) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = this.LANG['确定批量停用吗？'] || '确定批量停用吗';
                    this.confirmConfig.fn = "disables";
                    this.confirmConfig.obj = row;
                }
            },
            doEnable(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "enable";
                    this.confirmConfig.obj = row;
                } else if (row.length && row.length > 0) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = this.LANG['确定批量启用吗？'] || '确定批量启用吗';
                    this.confirmConfig.fn = "enables";
                    this.confirmConfig.obj = row;
                }
            },
            doConfirm(row) {
                this.loading = true;
                let _this = this;
                this.updated = false;
                let nowId = row.obj.id;
                switch (row.fn) {
                    case "enable":
						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.cash.third + '?id=' + nowId,[{"id": parseInt(nowId), "status": "enabled", "name": row.obj.name}], {
							ok: (res) => {
								if (res.state == 0 && res.data) {
									_this.$message.success(_this.LANG['第三方支付启用成功'] || '第三方支付启用成功');
									_this.updated = true;
								} else {
									_this.$message.error(_this.LANG['第三方支付启用失败，请稍后重试'] || '第三方支付启用失败，请稍后重试');
								}
								_this.loading = false
							},
							p: () => {
							},
							error: e => {
								_this.loading = false
								_this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
							}
						})
                        break;
                    case "disable":
						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.cash.third + '?id=' + nowId, [{"id": parseInt(nowId), "status": "disabled", "name": row.obj.name}],{
							ok: (res) => {
								if (res.state == 0 && res.data) {
									_this.$message.success(_this.LANG['第三方支付停用成功'] || '第三方支付停用成功');
									_this.updated = true;
								} else {
									_this.$message.error(_this.LANG['第三方支付停用失败，请稍后重试'] || '第三方支付停用失败，请稍后重试');
								}
								_this.loading = false
							},
							p: () => {
							},
							error: e => {
								_this.loading = false
								_this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
							}
						})
                        break;
                    case "disables":
                        let templist = row.obj || [], query = [];
                        if (templist.length > 0) {
                            for (let i = 0; i < templist.length; i++) {
                                query.push({
                                    id: templist[i].id,
                                    name: templist[i].name,
                                    status: 'disabled'
                                });
                            }
                        }
						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.cash.third,query, {
							ok: (res) => {
								if (res.state == 0 && res.data) {
									_this.$message.success(_this.LANG['第三方支付批量停用成功'] || '第三方支付批量停用成功');
									_this.updated = true;
								} else {
									_this.$message.error(_this.LANG['第三方支付批量停用失败，请稍后重试'] || '第三方支付批量停用失败，请稍后重试');
								}
								_this.loading = false
							},
							p: () => {
							},
							error: e => {
								_this.loading = false
								_this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
							}
						})
                        break;
                    case "enables":
                        let templists = row.obj || [], querys = [];
                        if (templists.length > 0) {
                            for (let i = 0; i < templists.length; i++) {
                                querys.push({
                                    id: templists[i].id,
                                    name: templists[i].name,
                                    status: 'enabled'
                                });
                            }
                        }
						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.cash.third, querys, {
							ok: (res) => {
								if (res.state == 0 && res.data) {
									_this.$message.success(_this.LANG['第三方支付批量启用成功'] || '第三方支付批量启用成功');
									_this.updated = true;
								} else {
									_this.$message.error(_this.LANG['第三方支付批量启用失败，请稍后重试'] || '第三方支付批量启用失败，请稍后重试');
								}
								_this.loading = false
							},
							p: () => {
							},
							error: e => {
								_this.loading = false
								_this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
							}
						})
                        break;
                    case "delete":
                        let nowid = parseInt(row.id);
						this.$.autoAjax('delete',URL.api + ROUTES.DELETE.cash.threeTh.del+'?id=' + parseInt(nowId) + "&name=" + row.obj.name, '', {
							ok: (res) => {
								if (res.state === 0 && res.data) {
									_this.$message.success(LANG['恭喜您，第三方支付删除成功！'] || '恭喜您，第三方支付删除成功！');
									_this.updated = true;
								} else {
									_this.$message.error(LANG['第三方支付删除失败，请稍后重试！'] || '第三方支付删除失败，请稍后重试！');
								}
								_this.loading = false
							},
							p: () => {
							},
							error: e => {
								_this.loading = false
								_this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
							}
						})
                        break;
                }
            },
            //编辑
            doEdit(row) {
                this.loading = true;
                this.nowId = row.id;
                let _this = this, pay_scene_list = this.pay_scene_list, pay_scene, terminal;

				this.$.autoAjax('get',URL.api + ROUTES.GET.cash.third.$ + "?id=" + parseInt(this.nowId), '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							_this.formTitel = "修改第三方支付";
							_this.formType = "edit";
							res.data.day_deact = FORMATMONEY(res.data.day_deact).toString();
							res.data.money_day_stop = FORMATMONEY(res.data.money_day_stop).toString();
							FORMVAL(res.data, _this.formConfig);
							this.formConfig[1].value = res.data.pay_id;
							if(res.data.pay_name === "BQZF"){
								this.formConfig[4].value = res.data.configs.keyTwo || '';
							}else if(res.data.pay_name === "AABILL"){
								this.formConfig[5].value = res.data.configs.payKey || '';
								this.formConfig[6].value = res.data.configs.paySecret || '';
							}else if(res.data.pay_name === "BEKE"){
								this.formConfig[7].value = res.data.configs.account_id || '';
								this.formConfig[8].value = res.data.configs.key || '';
							}
							for (let k = 0; k < this.formConfig.length; k++) {
								if (this.formConfig[k].prop == 'pay_scene') {
									pay_scene = this.formConfig[k].list;
									pay_scene.splice(0, pay_scene.length);
								}
								if (this.formConfig[k].prop == 'terminal') {
									terminal = this.formConfig[k].list;
									terminal.splice(0, terminal.length);
								}
							}
							for (let i in pay_scene_list) {
								if (i === res.data.pay_id) {
									let tempTerminal = pay_scene_list[i].terminal.split(',');
									for (let m in tempTerminal) {
										terminal.push(tempTerminal[m]);
									}
									let tempPayScene = pay_scene_list[i].pay_scene.split(',');
									for (let n in tempPayScene) {
										pay_scene.push(tempPayScene[n]);
									}
								}
							}
							_this.isEdit.state = true;
							_this.formVisible.state = true;
                        } else {
							_this.$message.error(_this.LANG['第三方支付信息请求失败，请稍后重试'] || '第三方支付信息请求失败，请稍后重试');
						}
						_this.loading = false;
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.cash.third.$ + "?id=" + parseInt(this.nowId), URLCONFIG).then((res) => {
                //     if (res.data.state == 0 && res.data.data) {
                //         _this.formTitel = "修改第三方支付";
                //         _this.formType = "edit";
                //         res.data.data.day_deact = FORMATMONEY(res.data.data.day_deact).toString();
                //         res.data.data.money_day_stop = FORMATMONEY(res.data.data.money_day_stop).toString();
                //         FORMVAL(res.data.data, _this.formConfig);
                //         this.formConfig[1].value = res.data.data.pay_id;
                //         if (res.data.data.pay_name === "FMF") {
                //             this.formConfig[4].value = res.data.data.configs.key || '';
                //             this.formConfig[5].value = res.data.data.configs.pub_key || '';
                //             this.formConfig[6].value = res.data.data.configs.pri_key || '';
                //         }else if(res.data.data.pay_name === "BQZF"){
                //             this.formConfig[3].value = res.data.data.configs.merchant || '';
                //             this.formConfig[7].value = res.data.data.configs.key || '';
                //         }
                //         for (let k = 0; k < this.formConfig.length; k++) {
                //             if (this.formConfig[k].prop == 'pay_scene') {
                //                 pay_scene = this.formConfig[k].list;
                //                 pay_scene.splice(0, pay_scene.length);
                //             }
                //             if (this.formConfig[k].prop == 'terminal') {
                //                 terminal = this.formConfig[k].list;
                //                 terminal.splice(0, terminal.length);
                //             }
                //         }
                //         for (let i in pay_scene_list) {
                //             if (i === res.data.data.pay_id) {
                //                 let tempTerminal = pay_scene_list[i].terminal.split(',');
                //                 for (let m in tempTerminal) {
                //                     terminal.push(tempTerminal[m]);
                //                 }
                //                 let tempPayScene = pay_scene_list[i].pay_scene.split(',');
                //                 for (let n in tempPayScene) {
                //                     pay_scene.push(tempPayScene[n]);
                //                 }
                //             }
                //         }
                //         _this.isEdit.state = true;
                //         _this.formVisible.state = true;
                //     } else {
                //         _this.$message.error(_this.LANG['第三方支付信息请求失败，请稍后重试'] || '第三方支付信息请求失败，请稍后重试');
                //     }
                //     _this.loading = false;
                // })

            },

            //查询
            doQuery(obj) {
                for(let k in obj.item){
                    if(obj.item[k]){
                        this.query[k] = obj.item[k];
                    }
                }
                this.tableUrl = this.baseUrl + this.addSearch(obj.item);
            },
            resetForm() {
                this.tableUrl = this.baseUrl;
            }
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init()
        },
        activated() {
            this.updated = false;
            setTimeout(()=>{
                this.updated = true;
            },500)
            if (this.depositShow) {
                this.returnPage();
            }
        }
    }
</script>
<style scoped>
    .addManage {
        float: right;
        margin-right: 10px;
        margin-top: 5px;
    }

    /*.addManage{float:right;margin-right: 10px;margin-top:5px;}*/
</style>
