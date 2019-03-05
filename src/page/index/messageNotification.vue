<template>
    <ul id="message">
        <!-- 消息总数 -->
        <li>
            <a href="javascript:;" style="display: none" v-if="autoMusic.root_common === 'true'">
                <audio id='audioPlay' src='../../../static/music/newMsg.wav'></audio>
            </a>
            <el-tooltip class="item" effect="light" :content="LANG['消息总数'] || '消息总数' " placement="bottom"
                        style="z-index:2000;">
                <el-badge :value="oMessage" class="item" rel="wobble-vertical">
                    <a href="javascript:;" class="el-dropdown-link" @click="sysMessage()">
                        <span class="font14">{{LANG['消息'] || '消息'}}</span>
                    </a>
                </el-badge>
                <a href="javascript:;" @click="memberGetOut">
                    <i class="fa fa-credit-card-alt font14" aria-hidden="true"></i>
                </a>
            </el-tooltip>
        </li>
        <!-- 出款 -->
        <li v-if="autoMusic.root_withdrawals === 'true'">
            <a href="javascript:;" style="display: none">
                <audio id='audioPlay1' src='../../../static/music/chukuan.wav'></audio>
            </a>
            <el-tooltip class="item" effect="light" :content="LANG['会员提现'] || '会员提现' " placement="bottom">
                <el-badge :value="withdraws" class="item" rel="wobble-vertical">
                    <a href="javascript:;" class="el-dropdown-link" @click="memberGetOut">
                        <span class="font14">{{LANG['出款'] || '出款'}}</span>
                    </a>
                </el-badge>
            </el-tooltip>
        </li>
        <!-- 入款 -->
        <li v-if="autoMusic.root_deposit === 'true'">
            <a href="javascript:;" style="display: none">
                <audio id='audioPlay2' src="../../../static/music/gsrk.wav"></audio>
            </a>
            <el-tooltip class="item" effect="light" :content="LANG['公司入款'] || '公司入款'" placement="bottom">
                <el-badge :value="offlines" class="item" rel="wobble-vertical">
                    <a href="javascript:;" class="el-dropdown-link" @click="offlineReceipts">
                        <span class="font14">{{LANG['入款'] || '入款'}}</span>
                    </a>
                </el-badge>
            </el-tooltip>
        </li>
        <!-- 新优惠申请 -->
        <!--<li v-if="autoMusic.root_rebate === 'true'">-->
            <!--<a href="javascript:;" style="display: none">-->
                <!--<audio id='audioPlay3' src="../../../static/music/gsrk.wav"></audio>-->
            <!--</a>-->
            <!--<el-tooltip class="item" effect="light" :content="LANG['优惠申请'] || '优惠申请'" placement="bottom">-->
                <!--<el-badge :value="rebate" class="item" rel="wobble-vertical">-->
                    <!--<a href="javascript:;" class="el-dropdown-link" @click="doRebate">-->
                        <!--<span class="font14">{{LANG['优惠'] || '优惠'}}</span>-->
                    <!--</a>-->
                <!--</el-badge>-->
            <!--</el-tooltip>-->
        <!--</li>-->
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                LANG,
                //音量切换
                oMessage: 0,
                offlines: 0,
                withdraws: 0,
                rebate: 0,
                autoMusic: {root_common:'',root_deposit: '', root_withdrawals: '', root_rebate: ''},
                root_routers: "",
                startTime: 0,
                num: 0
            }
        },
        watch: {
            '$route'() {//监听路由改变
                this.root_routers = this.$route.path;
            }
        },
        methods: {
            init() {
                this.autoMusic.root_deposit = sessionStorage.deposit || '';
                this.autoMusic.root_withdrawals = sessionStorage.withdrawals || '';
                this.autoMusic.root_rebate = sessionStorage.rebate || '';
                this.root_routers = this.$route.path;
            },
            //系统消息跳转
            sysMessage(nowid) {
                this.$router.push({path: '/sysMessage'});
            },
            memberGetOut() {
                this.$router.push({path: '/memberGetOut', query: {status: 'pending'}});
            },
            offlineReceipts() {
                this.$router.push({path: '/offlineReceipts', query: {status: 'pending'}});
            },
            doRebate() {
                this.$router.push({path: '/apply'});
            },
            //平台消息
            getMsg() {
                let url = URL.api + ROUTES.GET.messsage.num;
                if (this.num > 0) {
                    url = url + '?from_time=' + this.startTime;
                    this.startTime = FORMATDAT(sessionStorage.dateTime, 'yyyy-MM-dd HH:mm:ss');
                } else {
                    this.startTime = FORMATDAT(sessionStorage.dateTime, 'yyyy-MM-dd HH:mm:ss');
                    this.num++;
                }
                let _this = this
                this.$.autoAjax('get', url, '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            _this.oMessage = FORMATINT(res.data.common) || 0;
                            _this.offlines = FORMATINT(res.data.offline_deposit) || 0;
                            _this.withdraws = FORMATINT(res.data.withdraw) || 0;
                            //优惠
                            _this.rebate = FORMATINT(res.data.rebate) || 0;
                            let oMessage = _this.oMessage, offlines = _this.offlines, withdraws = _this.withdraws, rebate = _this.rebate;
                            localStorage.setItem('msgNum', this.oMessage)
                            let audioPlay = document.querySelector('#audioPlay'),audioPlay1 = '', audioPlay2 = '', audioPlay3 = '';
                            if (this.autoMusic.root_withdrawals) {
                                audioPlay1 = document.querySelector('#audioPlay1');//会员提现
                            }
                            if (this.autoMusic.root_deposit === 'true') {
                                audioPlay2 = document.querySelector('#audioPlay2');//公司入款
                            }
//                            if (this.autoMusic.root_rebate === 'true') {
//                                audioPlay3 = document.querySelector('#audioPlay3');//优惠申请
//                            }
                            //消息
                            if (oMessage || offlines || withdraws || rebate) {
                                if ((localStorage.getItem('sound_message') === 'true') && (oMessage > 0)) {
                                    audioPlay.play();
                                    audioPlay.onended = () => {
                                        if ((localStorage.getItem('sound_line') === 'true') && (_this.autoMusic.root_deposit === 'true')&& (offlines > 0)) { // 入款
                                            audioPlay2.play();
                                            audioPlay2.onended = () => {
                                                if ((localStorage.getItem('sound_out') === 'true') && (_this.autoMusic.root_withdrawals === 'true') && (withdraws > 0)) { // 出款
                                                    audioPlay1.play();
                                                }
                                            }
                                        } else if ((localStorage.getItem('sound_out') === 'true') && (withdraws > 0) && (_this.autoMusic.root_withdrawals === 'true')) { // 出款
                                            audioPlay1.play();
                                        }
                                    }
                                } else if ((localStorage.getItem('sound_line') === 'true') && (offlines > 0) && (_this.autoMusic.root_deposit === 'true')) {// 入款
                                    audioPlay2.play();
                                    audioPlay2.onended = () => {
                                        if ((localStorage.getItem('sound_out') === 'true') && (withdraws > 0) && (_this.autoMusic.root_withdrawals === 'true') ) { // 出款
                                            audioPlay1.play();
                                        }
                                    }
                                } else if ((localStorage.getItem('sound_out') === 'true') && (withdraws > 0) && (_this.autoMusic.root_withdrawals === 'true')) { // 出款
                                    audioPlay1.play();
                                }
                            }
                        }
                    },
                })
            },
            //刷新token
            updateToken() {
                setTimeout(() => {
                    // 刷新token
                    this.$.autoAjax('post', URL.api + '/admin/refresh/token', {'refresh_token': sessionStorage.refresh_token}, {
                        ok: (res) => {
                            if (res.state == 0 && res.data) {
                                // 更新token,重新设置URLCONFIG和timeOut
//                            global.URLCONFIG.headers.Authorization = "Bearer " + res.data.data.token;
                                global.URLCONFIG.headers.Authorization = res.data.token;
                                SETSESSIONSTORAGE('token', res.data.token);
                                sessionStorage.setItem('timeOut', res.data.expire ? parseInt(res.data.expire) * 1000 : 0);
                                sessionStorage.setItem('timeOutString', new Date(sessionStorage.timeOut * 1));
                                this.updateToken();
                            }
                        }
                    })
                }, (sessionStorage.timeOut * 1) - (sessionStorage.dateTime * 1 - 10 * 60 * 1000));
            },
        },
        mounted() {
            this.getMsg();
        },
        created() {
            this.init();
            this.updateToken();
            if (window.msgTimer) {
                clearInterval(window.msgTimer);
                this.startTime = 0;
                this.num = 0;
            } else {
                window.msgTimer = setInterval(() => {
                    setTimeout(()=>{
                        if (this.$route.path !== '/login') {
                            this.getMsg();
                        }
                    }, 0)
                }, 20 * 1000)
//                window.msgTimer = setInterval(() => {
//                    if (this.$route.path !== '/login') {
//                        this.getMsg();
//                    }
//                }, 20 * 1000)
            }
        }
    }
</script>

<style>
    #message li {
        float: right;
        margin-right: 30px;
        display: inline-block;
    }

    #message .el-badge__content {
        border-style: none;
        font-size: 10px;
        height: 14px;
        line-height: 14px;
        padding: 0 4px;
    }
</style>
