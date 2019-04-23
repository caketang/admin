
<template>
    <div id="memberHierarchy" class="page clearfix" v-loading="loading">
        <div class="w100 main el-card box-card el-tabs">
            <div class="el-tabs__header clearfix" style="border:0;margin:0;">
                <ul class="navTabs font14 el-tabs__nav w100">
                    <li class="fl tCent el-tabs__item" style="padding:0;">
                        <a href="javascript:;"
                           :class="{navOne:activeType}"
                           @click="navTabsChange1">{{LANG['等级管理'] || '等级管理'}}</a>
                    </li>
                    <li class="fl tCent el-tabs__item" style="padding:0;">
                        <a href="javascript:;"
                           :class="{navTwo:!activeType}"
                           @click="navTabsChange2">{{LANG['会员查询'] || '会员查询'}}</a>
                    </li>
                </ul>
            </div>
            <ul class="navContant w100 el-tabs__content">
                <li class="w100 el-tab-pane" v-if="activeType">
                    <el-row class="pleft20 pRight20 mt10 mb10">
                        <el-col class="tRight">
                            <el-button type="primary" size="small" class="rightTopBtn" @click="addNew"
                                       v-show="!levelSet">
                                {{LANG['新增会员层级'] || '新增会员层级'}}
                            </el-button>
                        </el-col>
                        <el-col v-show="!levelSet" class="mt10">
                            <memberHierarchy
                                :columnsUrl="columnsUrl"
                                :dataModelUrl="tableUrl"
                                :updated="updated"
                                :formType="formType"
                                @do-handle="doHandle"></memberHierarchy>
                        </el-col>
                        <el-col>
                            <formEdit class="addLevers" :formTitel="formTitel" :formVisible="editVisible"
                                      :formConfig="formConfig" :type="type" :labelWidth="labelWidth" @get-form="getForm"
                                      :isEdit="isEdit" :formType="formType" :size="size"></formEdit>
                        </el-col>
                        <el-col>
                            <userLevelLayer :model="userLeve" @update-level="updateLevel"
                                            :updateDate="updateDate"></userLevelLayer>
                        </el-col>
                        <el-col>
                            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
                        </el-col>
                        <div class="bankBtn" @click="returnPage" v-show="levelSet">
                            <el-button type="primary" size="small" icon="arrow-left" @click="returnPage">
                                {{LANG['返 回'] || '返 回'}}
                            </el-button>
                        </div>
                        <el-col v-if="levelSet" :span="20" :offset="2">
                            <userLevelSet :editForm="editForm" :setName="setName" @get-form="saveSet"
                                          @cancel-form="cancelForm"></userLevelSet>
                        </el-col>
                    </el-row>
                </li>
                <li class="w100 el-tab-pane" v-if="!activeType">
                    <el-row>
                        <el-col :span="24">
                            <el-col :span="24" style="padding:10px;">
                                <label class="font14" style="width:80px;color:#475669;">用户名:</label>
                                <el-input
                                    style="width: 300px;vertical-align: middle;"
                                    type="textarea"
                                    :rows="1"
                                    placeholder="多用户之间用英文逗号隔开"
                                    v-model="members">
                                </el-input>
                                <el-button type="primary" size="small" @click="doQuery">
                                    {{LANG['查 询'] || '查 询'}}
                                </el-button>
                                <span class="help_gray">提示：多用户查询，请在多用户之间用英文逗号隔开。</span>
                            </el-col>
                        </el-col>
                        <el-col :span="24">
                            <memberHierarSet v-if="LevelTableShow" :activeName="activeName" :colTwo="colTwo"
                                             :searchTableUrl="searchTableUrl" @get-reset="getResetPage"
                                             @save-data="saveData" @clearFrom="cleanFrom"></memberHierarSet>
                        </el-col>
                    </el-row>
                </li>
            </ul>
        </div>
        <el-dialog title="层级限额" v-model="limitVisible" size="tiny">
            <el-form ref="limitform" :model="limitform" label-width="80px">
                <div style="line-height: 30px;">{{LANG['层级名称'] || '层级名称'}}： {{limitform.name}}</div>
                <div style="border-bottom: 1px solid #ccc; line-hieght: 30px;margin-bottom: 10px;">彩票</div>
                <!--<div style="line-height: 30px;font-size: 10px;">注意：默认不选择就不会限额</div>-->
                <!-- <el-form-item :label="LANG['彩票'] || '彩票'">  -->
                <el-radio-group v-model="limitform.id">
                    <div v-for="(item, index) in limitList" :key="index" style="margin: 5px 0; height: 20px;">
                        <div style="float: left;">
                            <el-radio :label="item.id"><span></span></el-radio>
                        </div>
                        <div @click="gotoLotteryOdds(item.id, item.name)"
                             style="float: left;width: 400px; height: 20px; font-size: 14px; line-height: 20px; margin-left: 15px; cursor: pointer;">
                            {{item.name}}
                        </div>
                    </div>
                </el-radio-group>
                <!-- </el-form-item> -->
            </el-form>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="limitVisible = false">取 消</el-button>
                    <el-button type="primary" @click="saveLimit">确 定</el-button>
                </span>
        </el-dialog>
    </div>
</template>
<script>
    import memberHierarchy from '../../components/memberHierarchy_table.vue'
    import formEdit from '../../components/formEdit.vue'
    import userLevelLayer from '../../components/userLevelLayer.vue'
    import confirm from '../../components/confirm.vue'
    import userLevelSet from '../../components/userLevelSet.vue'
    import memberHierarSet from '../../components/memberHierarSet.vue'
    export default {
        data() {
            return {
                LANG,
                // 会员层级限额
                limitVisible: false,
                limitform: {
                    name: "",
                    id: ""
                },
                nowId: 0,
                limitList: [],
                cancelLimitVisible: true,
                //tabs
                activeType: true,
                activeName: "agents",
                level_id: "",
                //表格数据
                columnsUrl: "",
                tableUrl: "",
                agentbaseUrl: "",
                //作为组件时的table
                searchTableUrl: "",
                //select 设置
                showSet: false,
                tableData: [],
                //新增会员层级
                formConfig: [
                    {//0
                        "prop": "level",
                        "value": "",
                        "type": "select",
                        "label": "会员层级",
                        "placeholder": "请选择会员层级",
                        "list":ARRAYS.LEVELSLIST
                    },
                    {//1
                        "prop": "advance_money",
                        "value": "",
                        "type": "number",
                        "label": "有效投注额",
                        "placeholder": "请输入有效投注金额",
                        "rules": [{"require": true}, {"varMax": 99999999}, {"moreZero": true}]
                    },
                    {//2
                        "prop": "name",
                        "value": "",
                        "type": "text",
                        "label": "历史充值",
                        "placeholder": "请输入历史充值金额",
                        "rules": [{"require": true}, {"moreZero": true}]
                    },
                    {//3
                        "prop": "advance_valid_bet",
                        "value": "",
                        "type": "number",
                        "label": "奖励",
                        "placeholder": "请输入奖励金额",
                        "rules": [{"require": true, "max": 9, "min:": 1}, {"moreZero": true, "integer": true}]
                    },
                    {//4
                        "prop": "memo",
                        "value": "",
                        "type": "textarea",
                        "label": "描述",
                        "placeholder": "请输入描述",
                        "rules": [{"max": 40}]
                    }
                ],
                size:'tiny',
                type: "default",
                formType: "",
                formTitel: "",
                labelWidth: "110px",
                editVisible: {
                    state: false
                },
                //查询条件
                searchType: "search",
                searchEdit: {},
                searchConfig: [{"prop": "name", "value": "", "type": "text", "label": "会员名称"}],
                //会员分层
                userLeve: {
                    lList: [],
                    title: "",
                    visible: false,
                    nowLeve: ""
                },
                //当前数据ID
                nowId: -1,
                updateDate: {
                    id: -1,
                    row: {}
                },
                updated: false,
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                //是否编辑数据
                isEdit: {
                    state: false
                },
                //会员层级设定
                editForm: {
                    "id": "",
                    "level_id": "",
                    "offline_min_in": "",
                    "offline_max_in": "",
                    "online_glide_multi": "",
                    "offline_glide_multi": "",
                    "wechat_in_fee": "",
                    "alipay_in_fee": "",
                    "each_min_out": "",
                    "each_max_out": "",
                    "day_out_times": "",
                    "day_out_times_nofee": "",
                    "withdraw_expenese": "",
                    "max_expenese": "",
                    "withdraw_fee": "",
                    "day_withdraw_max": "",
                    "memberHierarchy": "",
                    "nocheck": "",
                    "onlines": {
                        "wechat": {
                            "min": '',
                            "max": ''
                        },
                        "alipay": {
                            "min": '',
                            "max": ''
                        },
                        "qqpay": {
                            "min": '',
                            "max": ''
                        },
                        "cyberbank": {
                            "min": '',
                            "max": ''
                        },
                        "tenpay": {
                            "min": '',
                            "max": ''
                        },
                        "jdpay": {
                            "min": '',
                            "max": ''
                        },
                        "unionpay": {
                            "min": '',
                            "max": ''
                        },
                        "baidupay": {
                            "min": '',
                            "max": ''
                        },
                        "kapay": {
                            "min": '',
                            "max": ''
                        },
                        "quickpay": {
                            "min": '',
                            "max": ''
                        }
                    }
                },
                //层级设定显示开关
                levelSet: false,
                //会员层名称
                setName: "",
                baseUrl: "",
                loading: false,

                //会员搜索
                members: '',
                //会员表格是否显示
                LevelTableShow: false,
                // 跳转会员显示列表
                colTwo: "",
                updateKeys: "",
                params: {}
            }
        },
        components: {
            memberHierarchy: memberHierarchy,
            formEdit: formEdit,
            userLevelLayer: userLevelLayer,
            confirm: confirm,
            userLevelSet: userLevelSet,
            memberHierarSet: memberHierarSet,
        },

        methods: {
            init() {
                this.loading = true;
                this.activeType = true;
                this.members = "";
                this.activeName = 'agents';
                this.columnsUrl = "/static/json/accoutManage/memberHierarchy/columns.json";
                this.agentbaseUrl = URL.api + ROUTES.GET.user.levelsList;
                this.tableUrl = this.agentbaseUrl;
                //会员搜索
                this.searchTableUrl = URL.api + ROUTES.GET.user.level.group;
                this.baseUrl = URL.api + ROUTES.GET.user.level.group;
                this.LevelTableShow = false;
                this.getLimitModel();
                this.loading = false;
            },
            //会员层级的tabs
            navTabsChange1() {
                this.activeType = true;
                this.activeName = 'agents';
            },
            navTabsChange2() {
                this.members = "";
                this.LevelTableShow = false;
                this.activeType = false;
                this.activeName = 'searLevel';
            },
            //返回显示表格
            returnPage() {
                this.levelSet = false;
                this.updated = true;
            },
            cleanFrom(date) {
                if (date.clear) {
                    this.members = "";
                }
            },
            //表格按钮事件
            doHandle(item) {
                this.updated = false;
                this.nowId = item.id || -1;
                this.formType = "";
                switch (item.fn) {
                    case "doReject":
                        this.doReject(item.row);
                        break;
                    case "doAudit":
                        this.doAudit(item.row);
                        break;
                    case "doEdit":
                        this.doEdit(item.row);
                        break;
                    case "doSet":
                        this.doSet(item.row);
                        break;
                    case "doSeatchMember":
                        this.doSeatchMember(item.row);
                        break;
                    case "doDelete":
                        this.doDelete(item.row);
                        break;
                    case "doLimitLines":
                        this.doLimitLines(item.row);
                        break;
                }
            },
            // 限额
            doLimitLines(row) {
                this.nowId = row.id;
                this.limitform["name"] = row.name;
                this.limitform["id"] = "";
                // 判断用户是否已经绑定模版
                this.cancelLimitVisible = row.tid ? true : false;
                if (row.tid) {
                    this.cancelLimitVisible = true;
                    this.limitform["id"] = parseInt(row.tid);
                } else {
                    this.cancelLimitVisible = false;
                    this.limitform["id"] = "";
                }
                this.limitVisible = true;
            },
            // 删除层级
            doDelete(row) {
                let name = row.name;
                this.nowId = row.id;
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (LANG['确定删除'] || '确定删除') + name + (LANG["吗？"] || "吗");
                this.confirmConfig.fn = "delete";
            },
            // 显示分层弹窗，设置当前被改数据id
            doReject(row) {
                this.nowId = row.id;
                let _this = this;
                let vipLevel = row.name;
                this.userLeve.lList.splice(0, this.userLeve.lList.length);
                let userLevelList = _this.userLeve.lList;
                this.loading = true;
                this.$.autoAjax('get', URL.api + '/user/levels', '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            let model = res.data;
                            for (let i in model) {
                                if (model[i].name !== row.name) {
                                    userLevelList.push({
                                        "num": i,
                                        "id": model[i].id,
                                        "name": model[i].name,
                                        "desc": model[i].desc,
                                        "disable": false
                                    });
                                }
                            }
                            this.loading = false;
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                this.userLeve.title = this.LANG["将下面会员分层导入至:"] + vipLevel || "将下面会员分层导入至:" + vipLevel;
                this.userLeve.visible = true;
                this.userLeve.nowLeve = vipLevel;
            },
            //保存分层信息
            updateLevel(obj) {
                let _this = this;
                this.loading = true;
                let temp = [];
                for (let i in obj) {
                    temp.push(obj[i].lid);
                }
                let params = {
                    'ids': temp.toString(),
                    'to': parseInt(this.nowId)
                }
                this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.level.layer, params, {
                    ok: (res) => {
                        if (res.state == 0 && res.data > 0) {
                            let n = res.data
                            _this.$message.success(LANG['成功分层' + n + '个会员!'] || '成功分层' + n + '个会员!');
                            _this.updated = true;
                        } else if (res.data == false && res.msg) {
                            let message = res.msg
                            _this.$message.error(LANG[message] || message);
                        } else if (res.data.length == 0 && res.msg) {
                            let message = res.msg
                            _this.$message.error(LANG[message] || message);
                        }
                        _this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        _this.loading = false;
                    }
                })
            },
            //回归弹窗
            doAudit(row) {
                let name = row.name;
                this.nowId = row.id;
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (LANG['确定将'] || '确定将') + name + (LANG["层回归到未分层？"] || "层回归到未分层");
                this.confirmConfig.fn = "audit";
            },
            //查询
            doQuery(obj) {
                let query = {};
                query.members = this.members;
                this.colTwo = "init";
                this.LevelTableShow = true;
                this.searchTableUrl = this.baseUrl + this.addSearch(query);
            },
            resetForm() {
                this.LevelTableShow = false;
            },
            // 跳转会员页
            doSeatchMember(row) {
                let colTwo = false;
                if (/^0000/.test(row.deposit_stime) || /^0000/.test(row.deposit_etime)) {
                    colTwo = true;
                } else {
                    colTwo = false;
                }
                this.level_id = row.id;
                parseInt(row.num) > 0 ? this.$router.push({
                    path: "/memberHierarSet",
                    query: {level: parseInt(row.id), coltwo: colTwo}
                }) : this.$message.error(LANG['无层级人数'] || '无层级人数');
            },
            //新增
            addNew() {
                this.formTitel = "新增会员层级";
                this.formType = "add";
                this.isEdit.state = false;
                this.editVisible.state = true;
            },
            //保存新增表格
            getForm(obj) {
                let str = "",url = "",model = {},_this = this;
                model.level = obj.formObj.level
                model.name = obj.formObj.name
                model.memo = obj.formObj.memo
                model.advance_money = FORMATMultiplyMoney(obj.formObj.advance_money);//deposit_money
                model.advance_valid_bet = obj.formObj.advance_valid_bet
                model.deposit_times = obj.formObj.deposit_times
                model.deposit_money = FORMATMultiplyMoney(obj.formObj.deposit_money);
                model.max_deposit_money = FORMATDATEPICKER(obj.formObj.deposit_etime);
                model.withdraw_times = obj.formObj.withdraw_times
                model.withdraw_count = FORMATDATEPICKER(obj.formObj.withdraw_count);
                model.comment = obj.formObj.comment
               // model.register_stime = FORMATDATEPICKER(model.register_stime);
                this.formType == "add" ? url = URL.api + ROUTES.PUT.user.level.$ : url = URL.api + ROUTES.PUT.user.level.$ + '/' + this.nowId;
//                if (model.deposit_max / 100 > _this.formConfig[4].rules[0].varMax) {
//                    _this.$message.error('区间存款总额不能大于' + _this.formConfig[4].rules[0].varMax)
//                } else {
                    this.updated = false;
                    this.loading = true;
                    for (let k in model) {
                        if (model[k] === '') {
                            delete model[k];
                        }
                    }
                    this.$.autoAjax('put', url, model, {
                        ok: (res) => {
                            if (res.state === 0 && res.data) {
                                if (_this.formType == "add") {
                                    str = _this.LANG['恭喜您，新增会员等级成功！'] || '恭喜您，新增会员等级成功！';
                                } else {
                                    str = _this.LANG['恭喜您，会员等级修改成功！'] || '恭喜您，会员等级修改成功！';
                                }
                                _this.$message.success(str);
                                _this.updated = true;
                            } else {
                                if (_this.formType == "add") {
                                    str = _this.LANG['新增会员等级失败，请稍候重试！'] || '新增会员等级失败，请稍候重试！';
                                } else {
                                    str = _this.LANG['会员等级修改失败，请稍候重试！'] || '会员等级修改失败，请稍候重试！';
                                }
                                _this.$message.error(str);
                            }
                            _this.loading = false;
                            _this.formType = "";
                        },
                        p: () => {
                        },
                        error: e => {
                            _this.loading = false;
                            console.log(e.responseJSON.msg)
                        }
                    })
//                }
            },
            //编辑
            doEdit(row) {
                console.log(row)
                this.loading = true;
                this.formType = "";
                this.nowId = row.id;
                this.formTitel = "修改会员层级";
                let _this = this;
                setTimeout(() => {
//                    FORMVAL(row, _this.formConfig);
                    _this.formConfig[0].value = row['level'];
                    _this.formConfig[1].value = row['name'];
                    _this.formConfig[2].value = row['memo'];
                    _this.formConfig[3].value = FORMATMONEY(row['advance_money']).toString();
                    _this.formConfig[4].value = row['advance_valid_bet'];
                    _this.formConfig[5].value = row['deposit_times']
                    _this.formConfig[6].value = FORMATMONEY(row['deposit_money']).toString();
                    _this.formConfig[7].value = FORMATMONEY(row['max_deposit_money']).toString();
                    _this.formConfig[8].value = row['withdraw_times']
                    _this.formConfig[9].value = FORMATMONEY(row['withdraw_count']).toString();
                    _this.formConfig[10].value = row['comment'];
                    _this.formType = "edit";
                    _this.isEdit.state = true;
                    _this.editVisible.state = true;
                    _this.loading = false;
                }, 500);
//				this.$router.push({
//					path: "",
//					query: {startM:FORMATMONEY(row['deposit_min']),endM:FORMATMONEY(row['deposit_max'])}
//				})
            },
            //系统提示
            doConfirm(obj) {
                this.updated = false;
                if (obj.fn == "audit") {
                    let _this = this;
                    this.loading = true;

                    this.$.autoAjax('patch', URL.api + ROUTES.PATCH.user.level.restore + "/" + parseInt(_this.nowId), '', {
                        ok: (res) => {
                            if (res.state === 0 && res.data) {
                                _this.$message.success(_this.LANG['恭喜您，会员等级回归成功！'] || '恭喜您，会员等级回归成功！');
                                this.updated = true;
                            } else {
                                _this.$message.error(_this.LANG['会员等级回归失败，请稍候重试！'] || '会员等级回归失败，请稍候重试！');
                            }
                            _this.loading = false;
                        },
                        p: () => {
                        },
                        error: e => {
                            _this.loading = false;
                            consoel.log(e.responseJSON.msg);
                        }
                    })
                }
                if (obj.fn == "delete") {
                    let _this = this;
                    this.$.autoAjax('delete', URL.api + ROUTES.DELETE.user.level.set + '/' + parseInt(_this.nowId), '', {
                        ok: (res) => {
                            if (res.state === 0 && res.data) {
                                _this.$message.success(LANG['恭喜您，会员层级删除成功！'] || '恭喜您，会员层级删除成功！');
                                _this.updated = true;
                            } else {
                                _this.$message.error(LANG['会员层级删除失败，请稍后重试！'] || '会员层级删除失败，请稍后重试！');
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log()
                        }
                    })
                }
            },
            //会员等级设定
            doSet(row) {
                this.setName = row.name;
                let _this = this;
                let editForm = this.editForm;
                this.loading = true;
                this.$.autoAjax('get', URL.api + ROUTES.GET.user.level.set.$(parseInt(row.id)), '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            let obj = res.data[0] || [];
                            for (let i in obj) {
                                if (i != 'onlines') {
                                    editForm[i] = obj[i].toString();
                                }
                            }
                            let tempObj = JSON.parse(obj['onlines']);
                            for (let k in tempObj) {
                                editForm['onlines'][k].min = FORMATMONEY(tempObj[k].min).toString() || '';
                                editForm['onlines'][k].max = FORMATMONEY(tempObj[k].max).toString() || '';
                            }
                            editForm['online_max_in'] = FORMATMONEY(editForm['online_max_in']).toString();
                            editForm['offline_max_in'] = FORMATMONEY(editForm['offline_max_in']).toString();
                            editForm['offline_min_in'] = FORMATMONEY(editForm['offline_min_in']).toString();
                            editForm['each_min_out'] = FORMATMONEY(editForm['each_min_out']).toString();
                            editForm['each_max_out'] = FORMATMONEY(editForm['each_max_out']).toString();
                            editForm['max_expenese'] = FORMATMONEY(editForm['max_expenese']).toString();
                            editForm['nocheck'] = FORMATMONEY(editForm['nocheck']).toString();
                            editForm['withdraw_fee'] = FORMATMONEY(editForm['withdraw_fee']).toString();
                            editForm['day_withdraw_max'] = FORMATMONEY(editForm['day_withdraw_max']).toString();
                            editForm['online_glide_multi'] = editForm['online_glide_multi'];
                            this.levelSet = true;
                        } else {
                            _this.$message.error(_this.LANG['会员等级获取资料失败，请稍候重试！'] || '会员等级获取资料失败，请稍候重试！');
                        }
                        _this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e.responseJSON.msg)
                    }
                })
            },
            MultiplyMoney(num) {
                let money = parseFloat(num);
                return money === 0 ? 0 : (money * 100);
            },
            //保存会员层级设定
            saveSet() {
                let _this = this;
                let query = {
                    "level_id": this.editForm.level_id,
                    "offline_min_in": this.MultiplyMoney(this.editForm.offline_min_in),
                    "offline_max_in": this.MultiplyMoney(this.editForm.offline_max_in),
                    "online_glide_multi": Number(this.editForm.online_glide_multi),
                    "offline_glide_multi": Number(this.editForm.offline_glide_multi),
//                    "wechat_in_fee": this.editForm.wechat_in_fee,
//                    "alipay_in_fee": this.editForm.alipay_in_fee,
                    "each_min_out": this.MultiplyMoney(this.editForm.each_min_out),
                    "each_max_out": this.MultiplyMoney(this.editForm.each_max_out),
                    "day_out_times": this.editForm.day_out_times,
                    "day_out_times_nofee": this.editForm.day_out_times_nofee,
                    "withdraw_expenese": Number(this.editForm.withdraw_expenese),
                    "max_expenese": this.MultiplyMoney(this.editForm.max_expenese),
                    "withdraw_fee": this.MultiplyMoney(this.editForm.withdraw_fee),
                    "day_withdraw_max": this.MultiplyMoney(this.editForm.day_withdraw_max),
                    "nocheck": this.MultiplyMoney(this.editForm.nocheck),
                    "onlines": {}
                }
                let temp = this.editForm.onlines;
                for (let k in temp) {
                    query.onlines[k] = {
                        min: this.MultiplyMoney(temp[k].min),
                        max: this.MultiplyMoney(temp[k].max)
                    }
                }
                query.onlines = JSON.stringify(query.onlines);
                this.loading = true;

                this.$.autoAjax('put', URL.api + ROUTES.PUT.user.level.set + '/' + this.editForm.id, query, {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            this.$message.success(this.LANG['恭喜您，会员层级设置成功！'] || '恭喜您，会员层级设置成功！');
                            this.levelSet = false;
                        } else {
                            this.$message.error(this.LANG['会员层级设定失败，请稍候重试！'] || '会员层级设定失败，请稍候重试！');
                            this.levelSet = false;
                        }
                        this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e.responseJSON.msg)
                    }
                })
            },
            //取消设定
            cancelForm() {
                this.levelSet = false;
            },
            resetForm() {
                this.init();
            },
            // 重置查询
            getResetPage() {
//                this.LevelTableShow = false;
            },
            // 保存数据,清除数据并隐藏表格
            saveData(obj) {
                this.LevelTableShow = false;
                this.updateKeys = "members";
            },
            // 限额操作
            saveLimit() {
                if (this.limitform["id"] === "") {
                    this.$message.error(LANG["请至少选中一个模版"] || "请至少选中一个模版");
                    return;
                }
                this.updated = false;

                this.$.autoAjax('put', URL.api + '/lottery/template.levels', {
                    "tid": parseInt(this.limitform.id),
                    "level_id": this.nowId
                }, {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.$message.success(LANG["恭喜您，会员层级限额成功！"] || "恭喜您，会员层级限额成功！");
                            this.updated = true;
                        } else if (res.state == 405) {
                            this.$message.error(LANG["会员层级限额失败,权限不足！"] || "会员层级限额失败,权限不足！");
                        } else {
                            this.$message.error(LANG["会员层级限额失败！"] || "会员层级限额失败！");
                        }
                        this.limitVisible = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e.responseJSON.msg)
                    }
                })
            },
            cancelLimit() {
                let arr = [];
                arr.push(this.nowId);
                this.updated = false;
                this.$.autoAjax('post', URL.api + '/lottery/template.users', {"user_id": arr}, {
                    ok: (res) => {
                        if (res.state === 0) {
                            this.$message.success(LANG["恭喜您，会员层级取消限额成功！"] || "恭喜您，会员层级取消限额成功！");
                            this.limitform["id"] = "";
                            this.cancelLimitVisible = false;
                            this.updated = true;
                        } else if (res.state == 405) {
                            this.$message.error(LANG["会员层级取消限额失败,权限不足！"] || "会员层级取消限额失败,权限不足！");
                        } else {
                            this.$message.error(LANG["会员层级取消限额失败！"] || "会员层级取消限额失败！");
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e.responseJSON.msg)
                    }
                })
            },
            // 获取彩票模版（限额操作用）
            getLimitModel() {
                this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.template, '', {
                    ok: (res) => {
                        if (res.state === 0) {
                            this.limitList = [];
                            let model = res.data;
                            for (let i of model) {
                                // 派出默认的彩票模版
                                if (i.t_id != "1") {
                                    this.limitList.push({
                                        "id": parseInt(i.t_id),
                                        "name": i.t_name
                                    })
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
            // 新窗口打开游戏模版
            gotoLotteryOdds(id, name) {
                window.open(window.location.origin + '/lotteryOdds?id=' + id + '&name=' + name);
            }
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init();
        },
        activated() {
            this.init();
            this.returnPage();
        },

    }
</script>
<style lang="less" scoped>
    #memberHierarchy {
        .main {
            border: 1px solid #d1dbe5;
            .navTabs {
                background-color: #eef1f6;
                border-bottom: 1px solid #d1dbe5;
            }
            .navTabs, .navTabs li {
                height: 40px;
            }
            .navTabs li {
                width: 100px;
            }
            //行高设置为41是为了覆盖住Ul的底部边框 修改请加 1
            .navTabs li a {
                display: block;
                width: 100%;
                line-height: 41px;
                color: #8391a5;
            }

        }
        //选中样式
        .navOne {
            border-right: 1px solid #d1dbe5;
            background: #fff;
            z-index: 9;
            color: #20a0ff !important;
        }
        .navTwo {
            border-right: 1px solid #d1dbe5;
            border-left: 1px solid #d1dbe5;
            background: #fff;
            z-index: 9;
            color: #20a0ff !important;
        }

    }

    .page {
        position: relative;
    }

    .search .el-form-item__label {
        width: 80px;
    }

    .search .el-form-item {
        width: 200px;
        float: left;
        margin-bottom: 1px
    }

    .cell {
        text-align: center;
    }

    .el-radio {
        margin-left: 20px;
        /*top: -12px;*/
    }

    .el-table {
        margin-top: 10px;
    }

    .el-input__inner {
        width: 50px;
        display: inline-block;
        margin: 0 5px;
    }

    .bankBtn a, a:visited, a:active {
        color: #cccccc;
    }

    /*.rightTopBtn{position: relative;}*/
</style>
