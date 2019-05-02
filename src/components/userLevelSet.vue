<template>
    <div id="userLevelSet" class="w50 tCent">
        <el-form :model="editForm" ref="editForm">
            <!--出款相关-->
            <el-col :span="24" class="mb20">
                <div class="grid-content bg-purple-dark mb10" style="text-align: center;">
                    <span>【{{setName ? 'VIP' + setName : '未获取到'}}】</span>
                    {{LANG['出款相关设定'] || '出款相关设定'}}
                </div>
            </el-col>
            <el-row :gutter="22">
                <el-col :span="6">
                    <div class="grid-content bg-purple"><span>{{LANG['每次最低出款金额'] || '每次最低出款金额'}}</span></div>
                </el-col>
                <el-col :span="6">
                    <el-form-item prop="each_min_out"
                                  :rules="[
                                      { required: true, message: '每次最低出款金额不能小于1',min:1},
                                      { validator: this.validatorNumber2}]">
                        <el-input v-model="editForm.each_min_out" type="number" auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"><span>{{LANG['每日出款次数限制'] || '每日出款次数限制'}}</span></div>
                </el-col>
                <el-col :span="6">
                    <el-form-item prop="day_out_times"
                                  :rules="[
                                      { required: true, message: '每日出款次数限制'},
                                      { validator: this.validatorNumber1}]">
                        <el-input v-model="editForm.day_out_times" auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="22">
                <el-col :span="6">
                    <div class="grid-content bg-purple"><span>{{LANG['每次最高出款金额'] || '每次最高出款金额'}}</span></div>
                </el-col>
                <el-col :span="6">
                    <el-form-item prop="each_max_out"
                                  :rules="[
                                      { required: true, message: '每次最高出款金额'},
                                      { validator: this.validatorNumber2}]">
                        <el-input v-model="editForm.each_max_out" type="number" auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"><span>{{LANG['每日出款免手续费笔数'] || '每日出款免手续费笔数'}}</span>
                    </div>
                </el-col>
                <el-col :span="6">
                    <el-form-item prop="day_out_times_nofee"
                                  :rules="[
                                      { required: true, message: '每日出款免手续费笔数'},
                                      { validator: this.validatorNumber1}]">
                        <el-input v-model="editForm.day_out_times_nofee" auto-complete="off"></el-input>
                        <p class="help_red" style="position: absolute;bottom:-2px" v-if="parseInt(editForm.day_out_times_nofee) > parseInt(editForm.day_out_times)">每日限免不能大于每日出款次数</p>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="22">
                <el-col :span="6">
                    <div class="grid-content bg-purple"><span>{{LANG['提现手续费'] || '提现手续费'}}</span></div>
                </el-col>
                <el-col :span="6">
                    <el-form-item prop="withdraw_fee"
                                  :rules="[
                                      { required: true, message: '请输入提现手续费'},
                                      { validator: this.validatorNumber}]">
                        <el-input v-model="editForm.withdraw_fee" auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <!--线上打码倍数-->
                <el-col :span="6">
                    <div class="grid-content bg-purple"><span>{{LANG['请输入线上打码倍数'] || '请输入线上打码倍数'}}</span></div>
                </el-col>
                <el-col :span="6">
                    <el-form-item prop="online_glide_multi"
                                  :rules="[
                                      { required: true, message: '请输入线上打码倍数'},
                                      { validator: this.validatorNumber1}]">
                        <el-input v-model="editForm.online_glide_multi" auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <!--线下打码倍数-->
            <el-row :gutter="22">
                <el-col :span="6">
                    <div class="grid-content bg-purple"><span>{{LANG['线下打码倍数'] || '线下打码倍数'}}</span></div>
                </el-col>
                <el-col :span="6">
                    <el-form-item prop="offline_glide_multi"
                                  :rules="[
                                      { required: true, message: '请输入线下打码倍数'},
                                      { validator: this.validatorNumber1}]">
                        <el-input v-model="editForm.offline_glide_multi" auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="22">
                <el-col class="footer">
                    <el-button type="primary" @click="saveForm">{{LANG['保存'] || '保存'}}</el-button>
                    <el-button type="primary" @click="cancelFrom">{{LANG['取消'] || '取消'}}</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                LANG
            }
        },
        props: {
            editForm: {
                type: Object,
                default: {}
            },
            setName: String
        },
        components: {},
        methods: {
            //保存数据
            saveForm() {
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        this.$emit('get-form', this.setName);
                    }
                });
            },
            //数字金额验证
            validatorNumber(rule, value, callback) {
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (parseInt(value) < 0) {
                        callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                    } else if (parseInt(value) > 99999999) {
                        callback(new Error(LANG['输入金额不能大于99999999'] || '输入金额不能大于99999999'));
                    } else {
                        callback();
                    }
                }
            },
            //数字次数验证
            validatorNumber1(rule, value, callback) {
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (parseInt(value) < 0) {
                        callback(new Error(LANG['输入次数不能小于0次'] || '输入次数不能小于0次'));
                    } else if (parseInt(value) > 999999999) {
                        callback(new Error(LANG['输入次数不能大于999999999次'] || '输入次数不能大于999999999次'));
                    } else {
                        callback();
                    }
                }
            },
            // 每次最低最高出款金额
            validatorNumber2(rule, value, callback) {
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (parseInt(value) < 1) {
                        callback(new Error(LANG['输入金额必需不能少于 1'] || '输入金额必需不能少于 1'));
                    } else if (parseInt(value) > 99999999) {
                        callback(new Error(LANG['输入金额不能大于99999999'] || '输入金额不能大于99999999'));
                    } else {
                        callback();
                    }
                }
            },
            // 打码倍数
            validatorNumber3(rule, value, callback) {
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (parseInt(value) < 1) {
                        callback(new Error(LANG['倍数必须大于或等于1倍'] || '倍数必须大于或等于1倍'));
                    } else if (parseInt(value) > 5) {
                        callback(new Error(LANG['倍数必须小于5倍'] || '倍数必须小于5倍'));
                    } else {
                        callback();
                    }
                }
            },
            //数字百分比验证
            validatorNumber4(rule, value, callback) {
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (value < 0) {
                        callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                    } else if (value > 100) {
                        callback(new Error(LANG['输入金额不能大于100'] || '输入金额不能大于100'));
                    } else {
                        callback();
                    }
                }
            },
            //取消返回
            cancelFrom() {
                this.$emit('cancel-form');
            }
        },
        computed: {},
        mounted() {
        },
        created() {
        }
    }
</script>
<style scoped lang="less">
    #userLevelSet{
        min-width: 750px;
        margin:0 auto;
        .companyInp {
            width: 15%;
            min-width: 150px;
        }
        .radioFrist {
            margin-left: 50px;
        }
        .companyPre {
            margin-top: 15px;
        }
        .el-form-item__content {
            margin: 0 auto;
        }
        .grid-content {
            line-height: 36px;
            text-align: right;
            padding-right: 8px;
        }
    }
    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .footer {
        text-align: center;
        border-top: 1px solid #cccccc;
        margin-top: 20px;
        padding-top: 20px;
    }

    #userLevelSet .cancel {
        text-align: right;
        padding-bottom: 5px;
    }
</style>
