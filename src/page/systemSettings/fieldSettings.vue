<template>
    <div id="fieldSettings">
        <el-row>
            <el-col :span="24">
                <el-row :gutter="20">
                    <el-col :span="12" :offset="4">
                        <el-form ref="form" :model="globBase" label-width="140px"
                                 style="min-width:580px;margin: 0 auto;">
                            <h1 class="w100">{{LANG['基础设置'] || '基础设置'}}</h1>
                            <div class="base border">
                                <el-row :gutter="20">
                                    <el-col :span="12">
                                        <div class="grid-content">
                                            <el-form-item :label="LANG['登录密码容错次数'] || '登录密码容错次数'">
                                                <el-input type="number" class="setInput"
                                                          v-model="globBase.password_login_fault"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="grid-content">
                                            <el-form-item :label="LANG['M令牌'] || 'M令牌'">
                                                <el-switch on-text="开" off-text="关" off-color="#C0CCDA"
                                                           v-model="globBase.opt"></el-switch>
                                            </el-form-item>
                                        </div>
                                        <div class="grid-content">
                                            <el-form-item :label="LANG['系统维护中'] || '系统维护中'">
                                                <el-switch on-text="开" off-text="关" off-color="#C0CCDA"
                                                           v-model="globBase.maintaining"
                                                           @change="setSwitch(globBase.maintaining)"></el-switch>
                                            </el-form-item>
                                        </div>
                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content">
                                            <el-form-item :label="LANG['额度转换开关'] || '额度转换开关'">
                                                <el-switch on-text="开" off-text="关" off-color="#C0CCDA"
                                                           v-model="globBase.transfer"></el-switch>
                                            </el-form-item>
                                        </div>
                                        <div class="grid-content">
                                            <el-form-item :label="LANG['取款密码容错次数'] || '取款密码容错次数'">
                                                <el-input type="number" v-model="globBase.password_withdraw_fault"
                                                          class="setInput"></el-input>
                                            </el-form-item>
                                        </div>
                                        <div class="grid-content">
                                            <el-form-item :label="LANG['同IP注册会员数'] || '同IP注册会员数'">
                                                <el-input type="number" v-model="globBase.ip"
                                                          class="setInput"></el-input>
                                                <br/><span class="help_red">（0:代表不受限制）</span>
                                            </el-form-item>
                                        </div>
                                    </el-col>
                                    <el-col :span="24" v-if="globBase.maintaining" class="datePicker">
                                        <el-form-item :label="LANG['系统维护开始时间'] || '系统维护开始时间'">
                                            <el-row>
                                                <div>
                                                    <el-col :span="12" style="max-width: 138px;">
                                                        <mydatepick v-model="globBase.start_day" :datekey="'start_day'"
                                                                    @get-date="getDay"></mydatepick>
                                                    </el-col>
                                                    <el-col :span="1">-</el-col>
                                                    <el-col :span="11">
                                                        <timepicker format="HH:mm:ss" v-model="globBase.start_time"
                                                                    @change="changetimes"></timepicker>
                                                    </el-col>
                                                </div>
                                            </el-row>
                                            <!--<el-col :span="24">-->

                                            <!--<el-date-picker-->
                                            <!--v-model="globBase.maintaining_start_time"-->
                                            <!--type="datetime"-->
                                            <!--placeholder="请选择时间">-->
                                            <!--</el-date-picker>-->
                                            <span v-if="!globBase.start_day" class="help_red">*请选择时间</span>
                                            <!--</el-col>-->
                                        </el-form-item>
                                        <el-form-item :label="LANG['系统维护结束时间'] || '系统维护结束时间'">
                                            <el-row>
                                                <div>
                                                    <el-col :span="12" style="max-width: 138px;">
                                                        <mydatepick v-model="globBase.end_day" :datekey="'end_day'"
                                                                    @get-date="getDay"></mydatepick>
                                                    </el-col>
                                                    <el-col :span="1">-</el-col>
                                                    <el-col :span="11">
                                                        <timepicker format="HH:mm:ss" v-model="globBase.end_time"
                                                                    @change="changetimes"></timepicker>
                                                    </el-col>
                                                </div>
                                            </el-row>
                                            <!--<el-date-picker-->
                                            <!--v-model="globBase.maintaining_end_time"-->
                                            <!--type="datetime"-->
                                            <!--placeholder="请选择时间">-->
                                            <!--</el-date-picker>-->
                                            <span v-if="!globBase.end_day" class="help_red">*请选择时间</span>
                                            <span v-if="!timevalidator" class="help_red">*系统维护的结束时间必需大于开始时间</span>
                                        </el-form-item>
                                    </el-col>
                                </el-row>
                                <el-row class="tCent">
                                    <el-col :span="24">
                                        <div class="grid-content title">
                                            <span
                                                style="color: #48576a">{{LANG['有效投注出款稽核核算比例'] || '有效投注出款稽核核算比例'}}（%)</span>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="12">
                                        <div class="grid-content">
                                            <el-form-item :label="LANG['体育'] || '体育'"
                                                          :class="{gridForm:betData.sport ==''||betData.sport>200 || betData.sport < 0}">
                                                <el-input max="200" min="0" type="number" class="setInput"
                                                          v-model="betData.sport"></el-input>
                                            </el-form-item>
                                            <span v-if="betData.sport ==''||betData.sport>200 || betData.sport < 0"
                                                  class="font12 tRight ruleTitle">请输入0～200的稽核核算比例</span>
                                        </div>
                                        <div class="grid-content">
                                            <el-form-item :label="LANG['视讯'] || '视讯'"
                                                          :class="{gridForm:betData.live ==''||betData.live>200 || betData.live < 0}">
                                                <el-input max="200" min="0" type="number" class="setInput"
                                                          v-model="betData.live"></el-input>
                                            </el-form-item>
                                            <span v-if="betData.live==''||betData.live>200 ||betData.live < 0"
                                                  class="font12 tRight ruleTitle">请输入0～200的稽核核算比例</span>
                                        </div>

                                    </el-col>
                                    <el-col :span="12">
                                        <div class="grid-content">
                                            <el-form-item :label="LANG['彩票'] || '彩票'"
                                                          :class="{gridForm:betData.lottery ==''||betData.lottery>200 || betData.lottery < 0}">
                                                <el-input max="200" min="0" type="number" class="setInput"
                                                          v-model="betData.lottery"></el-input>
                                            </el-form-item>
                                            <span v-if="betData.lottery==''||betData.lottery>200 ||betData.lottery < 0"
                                                  class="font12 tRight ruleTitle">请输入0～200的稽核核算比例</span>

                                        </div>
                                        <div class="grid-content">
                                            <el-form-item :label="LANG['电子'] || '电子'"
                                                          :class="{gridForm:betData['e-sports'] ==''||betData['e-sports']>200 || betData['e-sports'] < 0}">
                                                <el-input max="200" min="0" type="number" class="setInput"
                                                          v-model="betData['e-sports']"></el-input>
                                            </el-form-item>
                                            <span
                                                v-if="betData['e-sports'] ==''||betData['e-sports']>200 || betData['e-sports']< 0"
                                                class="font12 tRight ruleTitle">请输入0～200的稽核核算比例</span>

                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <h1>{{LANG['游戏设置'] || '游戏设置'}}</h1>
                            <div class="games" style="border: 1px solid #cccccc; padding: 10px;margin: 10px 0;">
                                <el-row :gutter="20">
                                    <el-col :span="12" style="min-width:200px;">
                                        <div class="grid-content" v-for="key in globGamesleft">
                                            <el-form-item :label="key.long">
                                                <!--<el-switch on-text="开" off-text="关"  v-model="key.val"></el-switch>-->
                                                <el-switch on-text="开" off-text="关" v-model="key.status"
                                                           :disabled="((key.pt_status != undefined) && (key.pt_status === false)) || key.name =='LEBO'"></el-switch>
                                            </el-form-item>
                                        </div>
                                    </el-col>
                                    <el-col :span="12" style="min-width:200px;">
                                        <div class="grid-content" v-for="key in globGamesright">
                                            <el-form-item :label="key.long">
                                                <!--<el-switch on-text="开" off-text="关" v-if="key.name =='LEBO'" :disabled="true" v-model="key.val"></el-switch>-->
                                                <el-switch on-text="开" off-text="关" v-model="key.status"
                                                           :disabled="((key.pt_status != undefined) && (key.pt_status === false)) || key.name =='LEBO'"></el-switch>
                                            </el-form-item>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                            <el-row>
                                <div class="w100 tCent">
                                    <el-button type="primary" @click="submit">{{LANG['保存设置'] || '保存设置'}}</el-button>
                                </div>
                            </el-row>
                        </el-form>
                    </el-col>
                    <el-col :span="4" class="mt20">
                        <h1 class="w100">{{LANG['密钥设置'] || '密钥设置'}}</h1>
                        <div class="base border w100 tCent">
                            <el-button @click="showKey" size="small">查看密钥</el-button>
                            <el-button @click="createKey" size="small" v-if="create.state">生成密钥</el-button>
                            <img :src="create.url" alt="密钥" v-if="create.showKey">
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>
<script type="text/ecmascript-6">
    //    import datpicker from  '../../components/datepicker.vue'
    import mydatepick from '../../components/myDatePicker.vue'
    import timepicker from '../../components/timePicker.vue'

    export default {
        data() {
            return {
                LANG,
                globlUrl: '',
                globBase: {}, // 基本设置数据
                betData: {},  //  基本数据里有效投注数据处理
                globGames: {}, // 游戏设置数据
                globGamesleft: [], // 基础设置数据左右分割
                globGamesright: [],
                submitData: {},
                opt: '',
                value3: '',
                timevalidator: false,
                create: {
                    state: true,
                    url: '',
                    showKey: false,
                },
            }
        },
        components: {
            mydatepick: mydatepick,
            timepicker: timepicker
//            datpicker:datpicker
        },
        methods: {
            //初始化页面 betData
            init() {
                this.globlUrl = URL.api + ROUTES.GET.system.global;//GET.system.google
                this.$.autoAjax('get', this.globlUrl, '', {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.globBase = res.data.base;
                            //this.globBase.maintaining = false
                            for (let k in this.globBase) {
                                if (this.globBase[k] == 'false') {
                                    this.globBase[k] = false
                                } else if (this.globBase[k] == 'true') {
                                    this.globBase[k] = true
                                }
                                //this.globBase[k] ={'false':false,'true':true}[this.globBase[k]]||res.data.base[k]
                            }
                            this.globBase.start_day = res.data.base.maintaining_start_time || sessionStorage.sysTime;
                            this.globBase.end_day = res.data.base.maintaining_end_time || sessionStorage.sysTime;
                            if (res.data.base.maintaining_start_time) {
                                this.globBase.start_time = {
                                    HH: this.getbasetimes(res.data.base.maintaining_start_time, 'HH'),
                                    mm: this.getbasetimes(res.data.base.maintaining_start_time, 'mm'),
                                    ss: this.getbasetimes(res.data.base.maintaining_start_time, 'ss')
                                };
                            } else {
                                this.globBase.start_time = {HH: "00", mm: "00", ss: "00"};
                            }
                            if (res.data.base.maintaining_end_time) {
                                let t = new Date(res.data.base.maintaining_end_time);
                                this.globBase.end_time = {
                                    HH: this.getbasetimes(res.data.base.maintaining_end_time, 'HH'),
                                    mm: this.getbasetimes(res.data.base.maintaining_end_time, 'mm'),
                                    ss: this.getbasetimes(res.data.base.maintaining_end_time, 'ss')
                                };
                            } else {
                                this.globBase.end_time = {HH: "00", mm: "00", ss: "00"};
                            }
//                        let tmepOne = this.globBase.start_day.split(' ')
                            this.globGames = res.data.games;
                            this.betData = this.globBase['valid_bet_percent'];
                            this.cutGamesData(); // 请求完数据直接切割数据
                            this.submitData = res.data;
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //查看密钥
            showKey() {
                this.$.autoAjax('get', URL.api + ROUTES.GET.system.google, '', {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.create.url = res.data
                            this.create.showKey = true;
                            this.$message.warning(res.msg)
                        }
                    }
                })
            },
            //生成密钥
            createKey() {
                this.$.autoAjax('post', URL.api + ROUTES.GET.system.google, '', {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.$message.success(res.msg)
                        }
                    }
                })
            },
            // 初始化时分秒
            getbasetimes(val, str) {
                if (!val) {
                    return '00';
                }
                let t = new Date(val);
                switch (str) {
                    case 'HH':
                        return t.getHours().toString().length > 1 ? t.getHours().toString() : '0' + t.getHours().toString();
                    case 'mm':
                        return t.getMinutes().toString().length > 1 ? t.getMinutes().toString() : '0' + t.getMinutes().toString();
                    case 'ss':
                        return t.getSeconds().toString().length > 1 ? t.getSeconds().toString() : '0' + t.getSeconds().toString();
                }
            },
            setSwitch(value) {
//
            },
            //分割数据
            cutGamesData() {
                this.globGamesleft = []
                this.globGamesright = []
                let data = this.globGames
                let length = Math.floor(data.length / 2);
                for (let i = 0; i < length; i++) {
                    this.globGamesleft.push(data[i]);
                }
                for (let j = length; j < data.length; j++) {
                    this.globGamesright.push(data[j]);
                }
            },
            //  组装时间
            getTimes(day, time) {
                if (!day) {
                    return '';
                }
                return FORMATDATEPICKER(day) + ' ' + time.HH + ':' + time.mm + ':' + time.ss;
            },
            submit() {
                let sport = parseInt(this.betData.sport);
                let live = parseInt(this.betData.live);
                let lottery = parseInt(this.betData.lottery);
                let sports = parseInt(this.betData['e-sports']);
                this.submitData.base['maintaining_start_time'] = this.getTimes(this.globBase.start_day, this.globBase.start_time);
                this.submitData.base['maintaining_end_time'] = this.getTimes(this.globBase.end_day, this.globBase.end_time);
                this.validetimes();
                if ((sport <= 200 && sport >= 0) && (live <= 200 && live >= 0) && (lottery <= 200 && lottery >= 0) && (sports <= 200 && sports >= 0)) {
                    let valid_bet_percent_arr = this.submitData.base['valid_bet_percent'];
                    this.submitData.base['valid_bet_percent'] = valid_bet_percent_arr;
                    if (!this.submitData.base['maintaining']) {
                        this.submitData.base['maintaining_start_time'] = '';
                        this.submitData.base['maintaining_end_time'] = '';

                        this.$.autoAjax('put', this.globlUrl, this.submitData, {
                            ok: (res) => {
                                if (res.state === 0 && res.data) {
                                    this.$message.success(LANG['保存设置成功！'] || '保存设置成功！');
                                } else {
                                    this.$message.error(res.msg);
                                }
                                this.init();
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                    } else {
                        if (this.submitData.base['maintaining_start_time'] === '' && this.submitData.base['maintaining_end_time'] === '') {
                            this.$message.error(LANG['请选择系统维护的时间段'] || '请选择系统维护的时间段')
                        } else if (this.timevalidator === false) {
                            this.$message.error(LANG['系统维护的结束时间必需大于开始时间'] || '系统维护的结束时间必需大于开始时间')
                        } else {

                            this.$.autoAjax('put', this.globlUrl, this.submitData, {
                                ok: (res) => {
                                    if (res.state === 0 && res.data) {
                                        this.$message.success(LANG['保存设置成功！'] || '保存设置成功！');
                                    } else {
                                        this.$message.error(res.msg);
                                    }
                                    this.init();
                                },
                                p: () => {
                                },
                                error: e => {
                                    console.log(e)
                                }
                            })
                        }
                    }
                } else {
                    this.$message.error(LANG['设置的数据不符合规则，请重新设置'] || '设置的数据不符合规则，请重新设置')
                }

            },
            // 获取时间值
            changetimes(val) {
                this.validetimes();
            },
            // 删除日期时间
            getDay(val) {
                if (val.day === '') {
                    this.globBase[val.daykey] = '';
                }
                if (val.daykey === 'end_day') {
                    this.validetimes();
                }
            },
            // 比较两个时间
            validetimes() {
                let s_date = this.getTimes(this.globBase.start_day, this.globBase.start_time);
                let e_date = this.getTimes(this.globBase.end_day, this.globBase.end_time);
                var oDate1 = new Date(s_date);
                var oDate2 = new Date(e_date);
                if (oDate1.getTime() >= oDate2.getTime()) {
                    this.timevalidator = false;
                } else {
                    this.timevalidator = true;
                }
            }
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init()
        }
    }
</script>
<style lang="less">
    #fieldSettings {
        .border {
            border: 1px solid #cccccc;
            padding: 10px;
            margin: 10px 0;
        }
        .setInput {
            width: 90px;
        }
        .ruleTitle {
            position: relative;
            left: 100px;
            color: red;
            line-height: 22px;
        }
        /*.gridForm{margin-bottom:0px;}*/
        /*.help{line-height:36px;}*/
        .datePicker {
            max-width: 580px;
            .el-form-item {
                margin-bottom: 2px;
            }
            /*.el-form-item__content{line-height:32px;}*/
            .el-date-editor.el-input {
                width: 180px;
            }
        }
        .title {
            border-bottom: 1px solid #cccccc;
            margin-bottom: 20px;
            padding-bottom: 10px;
        }
        .el-form {
            padding: 20px;
            .base {
                padding: 20px;
            }
            .el-input {
                text-align: center;
            }
        }
    }

    .el-picker-panel__link-btn {
        display: none;
    }
</style>
