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
                        <!--<el-col class="tRight">-->
                        <!--<el-button type="primary" size="small" class="rightTopBtn" @click="addNew"-->
                        <!--v-show="!levelSet">-->
                        <!--{{LANG['新增会员层级'] || '新增会员层级'}}-->
                        <!--</el-button>-->
                        <!--</el-col>-->
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
                            <!--@update-level="updateLevel"-->
                            <!--<userLevelLayer :model="userLeve" :updateDate="updateDate"></userLevelLayer>-->
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
                //会员层级编辑
                formConfig: [
                    {//0
                        "prop": "level",
                        "value": "",
                        "type": "select",
                        "label": "会员层级",
                        "placeholder": "请选择会员等级",
                        "list": ARRAYS.LEVELSLIST, "disabled": true,
                    },
                    {//1
                        "prop": "advance_valid_bet",
                        "value": "",
                        "type": "number",
                        "label": "有效投注额",
                        "placeholder": "请输入有效投注金额",
                        "rules": [{"require": true}, {"varMax": 99999999}]
                    },
                    {//2
                        "prop": "advance_money",
                        "value": "",
                        "type": "text",
                        "label": "历史充值",
                        "placeholder": "请输入历史充值金额",
                        "rules": [{"require": true}, {"moreZero": true}]
                    },
                    {//3
                        "prop": "gift",
                        "value": "",
                        "type": "number",
                        "label": "奖励",
                        "placeholder": "请输入奖励金额",
                        "rules": [{"require": false, "max": 9, "min:": 1}]
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
                size: 'tiny',
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
                    "level_id": "",
                    "online_glide_multi": "",
                    "offline_glide_multi": "",
                    "each_min_out": "",
                    "each_max_out": "",
                    "day_out_times": "",
                    "day_out_times_nofee": "",
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
                params: {},
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
                    case "doEdit":
                        this.doEdit(item.row);
                        break;
                    case "doSet":
                        this.doSet(item.row);
                        break;
                    case "doSeatchMember":
                        this.doSeatchMember(item.row);
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
                this.level_id = row.level;
                parseInt(row.num) > 0 ? this.$router.push({
                    path: "/memberHierarSet",
                    query: {level: parseInt(row.level), coltwo: colTwo}
                }) : this.$message.error(LANG['无层级人数'] || '无层级人数');
            },
            //保存
            getForm(obj) {
                let str = "", url = "", model = {}, _this = this;
                model.advance_money = obj.formObj.advance_money
                model.advance_valid_bet = obj.formObj.advance_valid_bet
                model.gift = obj.formObj.gift
                model.level = obj.formObj.level
                model.memo = obj.formObj.memo
                url = URL.api + ROUTES.PUT.user.level.$ + '/' + obj.formObj.level;
                this.$.autoAjax('put', url, model, {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            str = _this.LANG['恭喜您，会员等级修改成功！'] || '恭喜您，会员等级修改成功！';
                            _this.$message.success(str);
                        } else {
                            str = _this.LANG['会员等级修改失败，请稍候重试！'] || '会员等级修改失败，请稍候重试！';
                            _this.$message.error(str);
                        }
                        _this.updated = true;
                        _this.loading = false;
                        _this.formType = "";
                    },
                    error: e => {
                        _this.loading = false;
                        console.log(e.responseJSON.msg)
                    }
                })
            },
            //编辑
            doEdit(row) {
                console.log(row)
                this.loading = true;
                this.formType = "";
                this.nowId = row.id;
                this.formTitel = "编辑会员等级";
                let _this = this;
                setTimeout(() => {
                    FORMVAL(row, _this.formConfig);
                    _this.formConfig[0].value = row['level'];
                    _this.formConfig[1].value = row['advance_valid_bet'];
                    _this.formConfig[2].value = row['advance_money'];
                    _this.formConfig[3].value = row['gift']
                    _this.formConfig[4].value = row['memo'];
                    _this.formType = "edit";
                    _this.isEdit.state = true;
                    _this.editVisible.state = true;
                    _this.loading = false;
                }, 500);
            },
            //系统提示
            doConfirm(obj) {
                this.updated = false;
            },
            //会员等级设定
            doSet(row) {
                this.setName = row.level;
                let _this = this, editForm = this.editForm;
                this.loading = true;
                this.$.autoAjax('get', URL.api + ROUTES.GET.user.level.set.$(parseInt(row.level)), '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            let obj = res.data || [];
                            editForm['each_min_out'] = obj['each_min_out'].toString();
                            editForm['each_max_out'] = obj['each_max_out'].toString();
                            editForm['day_out_times'] = obj['day_out_times'].toString();
                            editForm['day_out_times_nofee'] = obj['day_out_times_nofee'].toString();
                            editForm['online_glide_multi'] = obj['online_glide_multi'].toString();
                            editForm['offline_glide_multi'] = obj['offline_glide_multi'].toString();
                            editForm['withdraw_fee'] = obj['withdraw_fee'].toString();
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
            saveSet(setlevel) {
                let _this = this;
                let query = {
                    "each_min_out": this.editForm.each_min_out,
                    "each_max_out": this.editForm.each_max_out,
                    "day_out_times": this.editForm.day_out_times,
                    "day_out_times_nofee": this.editForm.day_out_times_nofee,
                    "withdraw_fee": this.editForm.withdraw_fee,
                    "online_glide_multi": this.editForm.online_glide_multi,
                    "offline_glide_multi": this.editForm.offline_glide_multi,
                }
                if(parseInt(query.day_out_times_nofee) > parseInt(query.day_out_times)){
                    this.$message.error('请检查填写内容是否符合要求')
                }else{
                    this.loading = true;
                    this.$.autoAjax('put', URL.api + ROUTES.PUT.user.level.set + '/' + setlevel, query, {
                        ok: (res) => {
                            if (res.state == 0 && res.data) {
                                this.$message.success(this.LANG['恭喜您，VIP' + setlevel + '出入款设置成功！'] || '恭喜您，VIP' + setlevel + '出入款设置成功！');
                                this.levelSet = false;
                            } else {
                                this.$message.error(this.LANG['Sorry，VIP' + setlevel + '出入款设置失败！'] || 'Sorry，VIP' + setlevel + '出入款设置失败！');
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
                }
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
