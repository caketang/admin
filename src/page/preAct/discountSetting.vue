<template>
    <div id="subAgentRebate" v-loading="loading">
        <el-row>
            <el-col :span="24">
                <el-button @click="doAddSetting" class="ml20" type="primary" size="small" style="float: right;">
                    {{LANG['新增返水设置'] || '新增返水设置'}}
                </el-button>
            </el-col>
        </el-row>
        <el-col>
            <!--@date-selection="doOperation"-->
            <div v-for="(item,index) in allData" class="tableDiv">
                <span>{{LANG['会员层级'] || '会员层级'}}<el-tag type="gray">{{item.name}}</el-tag></span>
                <discountTable
                    :tableData="item"
                    :columnsUrl="columnsUrl"
                    :tableCheck="false"
                    :pageSet="false"
                    :tableIndex="false"
                    :assembleColumns="assembleColumns"
                    @do-handle="doHandle"
                    :updated="updated"
                >
                </discountTable>
            </div>
        </el-col>
        <el-col>
            <el-dialog :title="formTitle" v-model="editVisible" class="vipDialog" v-show="editVisible" size="small"
                       :before-close="handleClose">
                <el-form :model="editForm" ref="form" label-width="120px" :rules="rules" class="clearfix">
                    <el-form-item class="rebeat m20" :label="LANG['有效会员等级'] || '有效会员等级'">
                        <el-checkbox v-model="checkAll" @change="handleCheckAllChange()"
                                     :disabled="formType=='edit'?true:false">{{LANG['全选'] || '全选'}}
                        </el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="checkedUserLevel" @change="handleCheckedCitiesChanges">
                            <el-checkbox v-for="ele in editForm.member_level" :label="ele.id" :key="ele.name"
                                         :disabled="formType=='edit'?true:false">{{ele.name}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item :label="LANG['有效金额投注'] || '有效金额投注'"
                                  :rules="[{ validator:validatorBet,trigger:'blur'}]" prop="valid_bet"
                                  class="mt20 clearfix" required>
                        <el-input type="text" v-model="editForm.valid_bet" class="wd"></el-input>
                        <span v-text="LANG['以上'] || '以上'"></span>
                    </el-form-item>
                    <el-form-item v-for="(item,index) in editForm.rebet_per" :label="item.name" :key="index"
                                  :prop="'rebet_per['+index+'].value'"
                                  :rules="[{ validator:validatorNumber,trigger:'blur'}]" class="w50 fl clearfix"
                                  required>
                        <el-input type="number" v-model="item.value" class="wd"></el-input>
                        <span v-text=" '%' "></span>
                    </el-form-item>
                    <el-form-item :label="LANG['优惠上限'] || '优惠上限'" :rules="[{ validator:validatorNumber,trigger:'blur'}]"
                                  prop="upper_limit" class="w50 fl" required>
                        <el-input type="number" v-model="editForm.upper_limit" class="wd"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['备注'] || '备注'" class="w50 fl">
                        <el-input type="text" v-model="editForm.memo" class="wd"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['状 态'] || '状 态'" class="fl">
                        <el-radio-group v-model="editForm.status">
                            <el-radio class="radio" label="enabled"><span
                                v-text="LANG['启用'] || '启用'"></span>
                            </el-radio>
                            <el-radio class="radio" label="disabled"><span
                                v-text="LANG['停用'] || '停用'"></span>
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="resetEditForm">{{LANG['取消'] || '取消'}}</el-button>
                <el-button type="primary" @click="saveEditForm">{{LANG['保存'] || '保存'}}</el-button>
              </span>
            </el-dialog>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
    </div>
</template>
<script>
    import discountTable from '../../components/discountTable.vue'
    import formEdit from '../../components/formEdit.vue'
    import confirm from '../../components/confirm.vue';
    import Vue from 'vue';

    export default {
        data() {
            return {
                sss: false,
                statuslist: [{value: 'enabled', label: '启用'}, {value: 'disabled', label: '停用'}],
                checkAll: false,
                checkedUserLevel: [],
                LANG,
                activetype: null,
                //表格相关
                columnsUrl: "",
                assembleColumns: {},
                editid: null,
                // 游戏选中
                checkkeys: [],
                allData: [],
                tableUrl: "",
                tableData: {
                    list: []
                },
                //搜索相关
                searchConfig: [{}],
                nowId: -1,
                formVisible: {
                    state: false
                },
                // 选中游戏
                "default-checked-keys": [],

                formTitle: "",
                isEdit: {
                    state: false,
                },
                labelWidth: "90px",
                baseUrl: "",
                //新增配置
                //弹窗相关
                editTitle: "",
                //日返水时间，开始
                day_rebet_begin_time: "00:00:00",
                day_rebet_end_time: "23:59:59",
                //周返水时间，开始
                week_rebet_begin_time: "周一 00:00:00",
                week_rebet_end_time: "周日 23:59:59",
                editFormVisible: false,
                editForm: {
                    valid_bet: '',
                    member_level: '',
                    status: 'enabled',
                    upper_limit: '',
                    memo: '',
                    rebet_per: []
                },
                editVisible: false,
                editflag: false,
                editBtnText: "",
                //控制是否是新增还是修改
                formType: "",
                //优惠类型数据
                optionsData: [],
                //模拟树的数据
                treeData: [],
                //树的配置props
                defaultProps: {
                    children: 'children',
                    label: 'name'
                },
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },
                updated: false,
                rules: {},
                loading: false,
                //删除确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                nowId: -1,
                params: {
                    type_id: null,
                    type_name: null,
                    begin_time: null,
                    end_time: null,
                    name: null,
                    day_rebet: null,
                    week_rebet: null,
                    game: null,
                    member_level: null,
                    withdraw_require: null,
                    withdraw_require_val: null,
                    min_rebet_money: null,
                    day_rebet_issue_time: null,
                    week_rebet_issue_time: null,
                    state: null,
                },
                copyValidBet: ''
            }
        },
        components: {
            discountTable: discountTable,
            confirm: confirm,
            formedit: formEdit,
        },
        methods: {
            init() {
                let _this = this;
                this.columnsUrl = "static/json/preAct/discountSetting/columns.json";
                this.loading = true;
                this.getLevel()
                .then(() => {
                    this.getTableData();
                });
                //获取游戏列表ROUTES.GET.active.rebates
                this.assembleColumns = {
                    index: 1,
                    data: []
                };
                this.editForm.rebet_per = [];

                this.$.autoAjax('get', URL.api + "/games", '', {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            let model = res.data;
                            model.forEach(item => {
                                let obj = {
                                    "label": item.game_name,
                                    "game_id": item.game_id,
                                    "game_type": item.game_type,
                                    filterByWord: "rebet_per",
                                    prop: "val",
                                    filterCondition: "game_type,game_id"
                                };
                                _this.assembleColumns.data.push(obj);
                                this.editForm.rebet_per.push({
                                    "name": item.game_name,
                                    "value": '',
                                    "id": item.game_id,
                                    "game_type": item.game_type
                                });
                            })
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
                    }
                })


            },
            getLevel() {
                return new Promise((resolve, reject) => {
                    // 获取会员层级列表

                    this.$.autoAjax('get', URL.api + ROUTES.GET.user.level.list, '', {
                        ok: (res) => {
                            if (res.state === 0 && res.data) {
                                this.editForm.member_level = res.data;
                                resolve();
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })

                })
            },
            getTableData() {
                //列表数据

                this.$.autoAjax('get', URL.api + '/active/rebetset?page=1&page_size=30', '', {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.allData = [];
                            let model = res.data || [];
                            for (let key in model) {
                                let obj = {};
                                let levelName = [];
                                if (key === '0') {
                                    obj.name = "全部(系统默认)"
                                } else {
                                    this.editForm.member_level.forEach(item => {
                                        key.split(',').forEach(item1 => {
                                            if (item1 === item.id) {
                                                levelName.push(item)
                                            }
                                        })
                                    })
                                    obj.name = levelName.map(item => {
                                        return item.name
                                    }).join(',')
                                }
                                obj.list = [];
                                model[key].forEach(item => {
                                    let data = {};
                                    for (let key in item) {
                                        this.$set(data, key, item[key])
                                    }
                                    obj.list.push(data)
                                })
                                this.allData.push(obj)
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

                .catch((res) => {
                    this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
                });
            },
            handleCheckAllChange() {
                let idArr = [];
                for (let i in this.editForm.member_level) {
                    idArr.push(this.editForm.member_level[i].id)
                }
                this.checkedUserLevel = event.target.checked ? idArr : [];
            },
            handleCheckedCitiesChanges(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount == this.editForm.member_level.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.editForm.member_level.length;
            },
            handleCheckedCitiesChange(item) {
                if (item.typeMoney == true) {
                    item.dayhandType = false;
                    item.dayhandTypeMoney = true;
                    item.typeFixed = false;
                } else {
                    item.dayhandType = true
                }
            },
            handleCheckedTypeChange(item) {
                if (item.typeFixed == true) {
                    item.dayhandTypeMoney = false;
                    item.dayhandType = true
                    item.typeMoney = false
                } else {
                    item.dayhandTypeMoney = true
                }
            },
            getCheckedKeys() {
                this.checkkeys = this.$refs.tree.getCheckedKeys();
            },
            saveEditForm() {
                let addUrl = URL.api + '/active/rebetset';
                let _this = this;
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        this.loading = true;
                        let data = {
                            valid_bet: this.editForm.valid_bet * 100,
                            member_level: '',
                            status: this.editForm.status,
                            memo: this.editForm.memo,
                            upper_limit: this.editForm.upper_limit * 100,
                            rebet_per: []
                        };
                        if (this.checkedUserLevel.length === this.editForm.member_level.length || this.checkedUserLevel.length === 0) {
                            data.member_level = '0';
                        } else {
                            data.member_level = this.checkedUserLevel.join(',');
                        }
                        this.editForm.rebet_per.forEach(item => {
                            let obj = {
                                game_id: item.id,
                                game_name: item.name,
                                game_type: item.game_type,
                                val: item.value
                            }
                            data.rebet_per.push(obj)
                        })
                        this.formVisible.state = false;
                        this.editVisible = false;
                        if (this.formType == "add") {
                            this.$.autoAjax('put', addUrl, data, {
                                ok: (res) => {
                                    if (res.state == 0 && res.data) {
                                        _this.$message.success(LANG['新增返水成功'] || '新增返水成功');
                                        _this.getTableData();
                                    }
                                    else {
                                        let str = LANG[`${res.msg}`] || res.msg
                                        _this.$message.error(str)
                                    }
                                    _this.loading = false;
                                    _this.resetEditForm();
                                },
                                p: () => {
                                },
                                error: e => {
                                    console.log(e)
                                }
                            })
                        }
                        if (this.formType == "edit") {

                            this.$.autoAjax('put', addUrl + '/' + this.nowId, data, {
                                ok: (res) => {
                                    if (res.state == 0 && res.data) {
                                        _this.$message.success(LANG['修改返水成功'] || '修改返水成功');
                                        _this.getTableData();
                                    } else {
                                        let str = LANG[`${res.msg}`] || res.msg
                                        _this.$message.error(str)
                                    }
                                    _this.loading = false;
                                    _this.resetEditForm();
                                },
                                p: () => {
                                },
                                error: e => {
                                    console.log(e)
                                }
                            })
                        }
                    } else {
                        return false;
                    }
                });

            },
            //重置
            resetEditForm() {
                this.editVisible = false;
                this.$refs.form.resetFields();
                this.checkedUserLevel = [];
                this.checkAll = false;
                this.copyValidBet = '';
            },
            doHandle(item) {
                this.updated = false;
                this.nowId = parseInt(item.row.id) || -1;
                switch (item.fn) {
                    case "doEdit": // 编辑
                        this.doEdit(item.row)
                        break
                    case "doRefuse":
                        this.doRefuse(item.row)
                        break
                }
            },
            resetData() {
                this.editForm.valid_bet = '';
                this.editForm.status = 'enabled';
                this.editForm.upper_limit = '';
                this.editForm.memo = '';
                this.editForm.rebet_per.forEach(item => {
                    item.value = ''
                })
            },
            doAddSetting() {
                this.resetData();
                this.formTitle = this.LANG["新增返水设置"] || "新增返水设置";
                this.formType = "add";
                this.isEdit.state = true;
                this.formVisible.state = true;
                this.editVisible = true;
                this.updated = false;
            },
            doEdit(row) {
                this.formTitle = this.LANG["修改返水设置"] || "修改返水设置";
                this.editForm.status = row.status;
                this.editForm.valid_bet = row.valid_bet / 100;
                this.copyValidBet = row.valid_bet / 100;
                for (let key in row.rebet_per) {
                    this.editForm.rebet_per.forEach(item => {
                        if (item.id == row.rebet_per[key].game_id && item.game_type == row.rebet_per[key].game_type) {
                            item.value = row.rebet_per[key].val
                        }
                    })
                }
                this.editForm.upper_limit = row.upper_limit / 100;
                this.editForm.memo = row.memo;
                if (row.member_level === '0') {
                    let idArr = [];
                    for (let i in this.editForm.member_level) {
                        idArr.push(this.editForm.member_level[i].id)
                    }
                    this.checkedUserLevel = idArr;
                    this.checkAll = true;
                } else {
                    this.checkedUserLevel = row.member_level.split(',');
                }
                this.editVisible = true;
                this.isEdit.state = true;
                this.formVisible.state = true;
                this.formType = "edit";
            },
            //停用
            doRefuse(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "stop";
                }
            },
            /**
             * 启用
             * @param row
             */
            doConfirm(obj) {
                this.loading = true;
                let _this = this;
                switch (obj.fn) {
                    case "stop":

                        this.$.autoAjax('patch', URL.api + '/active/rebetset/status/' + this.nowId, {status: "deleted"}, {
                            ok: (res) => {
                                if (res.state === 0 && res.data) {
                                    _this.getTableData();
                                    _this.$message.success(this.LANG['删除成功'] || '删除成功');
                                } else {
                                    _this.$message.error(this.LANG['停用失败，请稍后重试'] || '停用失败，请稍后重试');
                                }
                                _this.loading = false
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })

                        break;
                }
            },
            //重置FORM
            resetForm() {
                this.tableUrl = this.baseUrl;
            },
            doQuery(obj) {
                this.tableUrl = this.baseUrl + "?type_id=" + parseInt(obj.item.type_id);
            },
            //数字验证
            validatorNumber(rule, value, callback) {
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (value == 0) {
                        callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                    } else if (value > 9999999) {
                        callback(new Error(LANG['输入金额不能大于9999999'] || '输入金额不能大于9999999'));
                    } else {
                        callback();
                    }
                }
            },
            validatorBet(rule, value, callback) {
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (value <= 0) {
                        callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                    } else if (value > 9999999) {
                        callback(new Error(LANG['输入金额不能大于9999999'] || '输入金额不能大于9999999'));
                    } else {
                        //this.copyValidBet为空说明是新增
                        if (!this.copyValidBet) {
                            let member_level = '';
                            if (this.checkedUserLevel.length === this.editForm.member_level.length || this.checkedUserLevel.length === 0) {
                                member_level = '0';
                            } else {
                                member_level = this.checkedUserLevel.join(',');
                            }
                            let url = URL.api + `/active/rebetset/check?member_level=${member_level}&&valid_bet=${value * 100}`

                            this.$.autoAjax('get', url, '', {
                                ok: (res) => {
                                    if (res.state === 0 && res.data) {
                                        callback()
                                    } else {
                                        callback(new Error(LANG['同一个会员层级不能有相同的投注金额'] || '同一个会员层级不能有相同的投注金额'));
                                    }
                                },
                                p: () => {
                                },
                                error: e => {
                                    console.log(e)
                                }
                            })

                        } else {
                            //修改
                            //此时当value和copyValidBet的值不同，即value的值有变化需要验证,否则不验证
                            if (value !== this.copyValidBet) {
                                let member_level = '';
                                if (this.checkedUserLevel.length === this.editForm.member_level.length || this.checkedUserLevel.length === 0) {
                                    member_level = '0';
                                } else {
                                    member_level = this.checkedUserLevel.join(',');
                                }
                                let url = URL.api + `/active/rebetset/check?member_level=${member_level}&&valid_bet=${value * 100}`

                                this.$.autoAjax('get', url, '', {
                                    ok: (res) => {
                                        if (res.state === 0 && res.data) {
                                            callback()
                                        } else {
                                            callback(new Error(LANG['同一个会员层级不能有相同的投注金额'] || '同一个会员层级不能有相同的投注金额'));
                                        }
                                    },
                                    p: () => {
                                    },
                                    error: e => {
                                        console.log(e)
                                    }
                                })

                            } else {
                                callback()
                            }
                        }
                    }
                }
            },
            handleClose() {
                this.resetEditForm()
            }
        },
        computed: {},
        mounted() {
        },
        activated() {
            this.init()
        },
    }
</script>
<style scoped>
    .clearfix {
        zoom: 1;
    }

    .clearfix:after {
        content: '';
        display: table;
        clear: both;
    }

    .mt {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .wd {
        width: 200px;
    }

    .intermediate {
        position: absolute;
        left: 33%;
    }

    .intermediates {
        position: absolute;
        left: 73%;
    }

    .discountSetting_map p {
        font-size: 16px;
        color: #000000;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .discountSetting_map .el-tree {
        border: 0px;
    }

    .discountSetting_map .sub {
        position: absolute;
        left: 50px;
        top: 3px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        background: #d4d4d4;
        font-size: 18px;
        cursor: pointer;
    }

    .discountSetting_map .add {

        position: absolute;
        left: 10px;
        top: 3px;
        width: 30px;
        line-height: 30px;
        text-align: center;
        background: #d4d4d4;
        font-size: 18px;
        cursor: pointer;
    }

    .discountSetting_map .center {
        border: 1px solid #d4d4d4;
        overflow: hidden;
        position: relative;
        padding-top: 20px;
        min-height: 100px;
    }

    .rebeat {
        border: 1px solid #d4d4d4;
        overflow: hidden;
        position: relative;
        height: auto;
        padding: 15px;
    }

    .discountSetting_map .list {
        /*margin-left: 20px;*/
        width: 100%;
        overflow: hidden;
        margin-top: 15px;
        margin-bottom: 15px;

    }

    .discountSetting_map .list .el-form-item:last-child {
        float: left;
        width: 12%;
        font-size: 12px;
        margin-right: 1%;
    }

    /*定义最后一个封顶的input*/
    .discountSetting_map .list .el-form-item:last-child .el-form-item__label {
        width: 40px !important;
        font-size: 12px;
    }

    .discountSetting_map .list .el-form-item:last-child .el-input {
        width: calc(100% - 40px);
    }

    /*第一个*/
    .discountSetting_map .list .el-form-item {
        width: 33%;
        float: left;
    }

    .discountSetting_map .list .el-form-item .el-form-item__label {
        float: left;
        width: 140px !important;
    }

    .discountSetting_map .list .el-form-item .el-form-item__content {
        margin-left: 0px !important;
    }

    .discountSetting_map .list .el-form-item .el-input {
        float: left;
        width: 27%;
    }

    /*中间*/
    .discountSetting_map .list .intermediate {
        float: left;
        width: 50%;
    }

    .discountSetting_map .list .intermediate .el-radio__label {
        font-size: 12px;
    }

    .discountSetting_map .list .intermediate .el-radio {
        margin-top: 10px;
    }

    .discountSetting_map .list .intermediate .el-input {
        width: 20%;
        float: left;
        margin-left: 10px;
    }

    .discountSetting_map .list .intermediate .el-checkbox__label {
        font-size: 12px;
    }

    .discountSetting_map .list .intermediate .el-checkbox {
        margin-top: 10px;
    }

    .discountSetting_map .list .intermediate .el-input, .discountSetting_map .list .intermediate .el-checkbox-group {
        width: 20%;
        float: left;
        margin-left: 10px;

    }

    /*最后一个*/
    .discountSetting_map .item {
        width: 100%;
        overflow: hidden;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .discountSetting_map .item .el-left {
        float: left;
        width: 70%;
    }

    .discountSetting_map .item .el-left .el-radio-group {
        float: left;
        width: 19%;
        margin-top: 10px;
    }

    .discountSetting_map .item .el-left .el-input {
        width: 20%;
        float: left;
    }

    .discountSetting_map .item .el-rigth {
        float: right;
        width: 30%;

    }

    .discountSetting_map .footer {
        clear: both;
        overflow: hidden;
    }

    .discountSetting_map .footer .el-form-item:last-child {
        width: 45%;
    }

    .discountSetting_map .footer .el-form-item {
        width: 55%;
        float: left;
    }

    .discountSetting_map .footer .el-form-item:last-child .el-form-item__label {
        width: auto !important;
    }

    .discountSetting_map .footer .el-form-item .el-form-item__content {
        margin-left: 0px !important;
    }

    .discountSetting_map .footer .el-form-item:last-child input {
        /*width: 40%;*/
    }

    .discountSetting_map .footer .el-form-item:last-child .el-input {
        width: 20%;
        float: left;
    }

    .discountSetting_map .footer .el-form-item .el-input {
        width: 30%;
        float: left;
    }

    .add {
        position: absolute;
        top: 0;
        left: 0;
    }

    .tableDiv {
        margin-bottom: 20px;
    }
</style>
