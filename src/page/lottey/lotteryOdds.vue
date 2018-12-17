<template>
    <div id="lotteryOdds" class="clearfix" v-loading="loading">
        <el-row style="margin-bottom: 10px;">
            <el-col :span="20">
                <changeplay @do-change-play="doChangePlay"></changeplay>
            </el-col>
            <el-col :span="4" class="tRight">
                <el-button type="primary" size="small" icon="arrow-left" @click="goBlack">返 回</el-button>
                <!--<el-button :plain="true" size="small">返 回</el-button>-->
            </el-col>
        </el-row>
        <el-col :span="24" style="text-align: left;margin-bottom: 10px;">
            <span>{{LANG["当前模板"] || "当前模板"}} => {{lotteryTemplate}}</span>
        </el-col>
        <el-col class="btngroup">
            <el-button v-for="(item,index) in lotteryList" :key="index" @click="changeGame(item,index)" class="formCancel" style="margin-bottom: 10px;" size="small" :class="{'el-button--primary':parseInt(item.id) == parseInt(nowLotteryId)}">{{item.name}}</el-button>
        </el-col>
        <el-col>
            <el-button type="text" v-for="(item,index) in playTypeList" :key="index" @click="changePlayType(item)" class="formCancel" :class="{'el-button--primary':parseInt(item.id) == parseInt(nowPlayTypeId)}" style="padding: 10px;">{{item.name}}</el-button>
        </el-col>
        <el-col>
            <oddsSet :tableUrl="tableUrl" :columnsUrl="columnsUrl" @save-data="saveOdds" :playTypeId="lotteryTypeId" :updated="updated"></oddsSet>
        </el-col>
    </div>
</template>
<script>
    import  oddsSet from '../../components/oddsSet.vue'
    import changeplay from '../../components/changePlay.vue'
    export default{
        data(){
            return {
                LANG,
                tableUrl: "",
                columnsUrl: "",
                //彩票模板
                lotteryTemplate: "",
                lotteryTemplateId: -1,
                //标准快速玩法
                lotteryTypeId: 0,
                lotteryTypeName: "标准玩法",
                //彩票ID
                lotteryList: [],
                nowLotteryId: -1,
                nowLotteryTemplate: '',
                nowLotteryPid:-1,
                nowPlayTypeId: -1,
                playTypeList: [],
                loading: false,
                updated: false
            }
        },
        components: {
            oddsSet:oddsSet,
            changeplay:changeplay
        },
        methods: {
            init(){
                this.lotteryTemplate = this.$route.query.name || "";
                this.lotteryTemplateId = this.$route.query.id || -1;
                this.baseUrl = "";
                if(this.lotteryTypeId === 0){
                    this.baseUrl = URL.api + ROUTES.GET.lottery.rate + "?tid="+this.lotteryTemplateId;
                }else{
                    this.baseUrl = URL.api + ROUTES.GET.lottery.fast + "?tid="+this.lotteryTemplateId;;
                }
                this.getPlayType();
            },
            // 获取玩法类型
            getPlayType(){
                let _this = this;
                this.loading = true;
                let gameUrl = URL.api + ROUTES.GET.lottery.types.play + "?tid=" + this.lotteryTemplateId + "&lottery_type=" + this.lotteryTypeId;

                this.$.autoAjax('get', gameUrl, '', {
                    ok: (res) => {
                        if(res.state == 0 && res.data){
                            if(res.data && res.data[0] && res.data[0].sub && res.data[0].sub[0]){
                                _this.nowPlayTypeId =  res.data[0].sub[0].play_type1 || -1;
                                _this.nowLotteryId = res.data[0].lottery_id || -1;
                                _this.nowLotteryTemplate = res.data[0].name || '';
                            }
                            _this.lotteryList = [];
                            let model = res.data || [];
                            for(let k in model){
                                _this.lotteryList.push({
                                    id: model[k].lottery_id,
                                    name: model[k].name,
                                    sub: model[k].sub
                                });
                            }
                            _this.getPlayTypeList(0);
                            _this.tableUrl = _this.baseUrl + "&lottery_type=" + this.lotteryTypeId + "&lottery_id=" + this.nowLotteryId + "&play_id=" + this.nowPlayTypeId;
                        }
                        _this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                        _this.loading = false;
                    }
                })
                // this.$http.get(gameUrl,URLCONFIG).then((res)=>{
                //     if(res.data.state == 0 && res.data.data){
                //         if(res.data.data && res.data.data[0] && res.data.data[0].sub && res.data.data[0].sub[0]){
                //             _this.nowPlayTypeId =  res.data.data[0].sub[0].play_type1 || -1;
                //             _this.nowLotteryId = res.data.data[0].lottery_id || -1;
                //             _this.nowLotteryTemplate = res.data.data[0].name || '';
                //         }
                //         _this.lotteryList = [];
                //         let model = res.data.data || [];
                //         for(let k in model){
                //             _this.lotteryList.push({
                //                 id: model[k].lottery_id,
                //                 name: model[k].name,
                //                 sub: model[k].sub
                //             });
                //         }
                //         _this.getPlayTypeList(0);
                //         _this.tableUrl = _this.baseUrl + "&lottery_type=" + this.lotteryTypeId + "&lottery_id=" + this.nowLotteryId + "&play_id=" + this.nowPlayTypeId;
                //     }
                //     _this.loading = false;
                // }).catch((e)=>{
                //     _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                //     _this.loading = false;
                // });
            },
            // 写相关玩法
            getPlayTypeList(index){
                this.playTypeList = [];
                this.nowPlayTypeId = this.lotteryList[index].sub[0].play_type1 || -1;
                let playTypeList = this.playTypeList;
                let model = this.lotteryList[index].sub || [];
                for(let k in model){
                    playTypeList.push({
                        id: model[k].play_type1,
                        name: model[k].play_type1_name
                    });
                }
            },
            changeGame(obj,index){
                this.nowLotteryId = parseInt(obj.id);
                this.getPlayTypeList(index);
                this.tableUrl = this.baseUrl + "&lottery_type=" + this.lotteryTypeId + "&lottery_id=" + this.nowLotteryId + "&play_id=" + this.nowPlayTypeId;
            },
            //切换玩法分类
            changePlayType(item){
                this.nowPlayTypeId = item.id || -1;
                this.tableUrl = this.baseUrl + "&lottery_type=" + this.lotteryTypeId + "&lottery_id=" + this.nowLotteryId + "&play_id=" + this.nowPlayTypeId;
            },
            //切换玩法
            doChangePlay(obj){
                if(obj.item == "fast" && this.lotteryTypeId === 0){
                    this.lotteryTypeId = 1;
                    this.lotteryTypeName = "快捷玩法";
                    this.init();
                }
                if(obj.item == "standard" && this.lotteryTypeId === 1){
                    this.lotteryTypeId = 0;
                    this.lotteryTypeName = "标准玩法";
                    this.init();
                }
            },
            //保存设置
            saveOdds(obj){
                let _this = this;
                this.updated = false;
                let oData = {};
                oData.tid = this.lotteryTemplateId;
                oData.tname = this.lotteryTemplate;
                oData.lid = this.nowLotteryId;
                oData.lottery_name = this.nowLotteryTemplate;
                oData.odds = obj.item;
                oData.old_odds = obj.old_odds;
                let url = "";
                if(this.lotteryTypeId === 0){
                    url = URL.api + ROUTES.PUT.lottery.rate;
                }else{
                    url = URL.api + ROUTES.PUT.lottery.fast;
                }

                this.$.autoAjax('put',url,oData, {
                    ok: (res) => {
                        if(res.state == 0 && res.data){
                            _this.updated = true;
                            _this.$message.success(LANG["恭喜您，赔率设置成功！"] || "恭喜您，赔率设置成功！");
                        }else if(res.msg) {
                            _this.$message.error(res.msg);
                        }else {
                            _this.$message.error(LANG["赔率设置失败！"] || "赔率设置失败！");
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        _this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
                    }
                })
                // this.$http.put(url,JSON.stringify(oData),URLCONFIG).then((res)=>{
                //     if(res.state == 0 && res.data){
                //         _this.updated = true;
                //         _this.$message.success(LANG["恭喜您，赔率设置成功！"] || "恭喜您，赔率设置成功！");
                //     }else if(res.msg) {
                //         _this.$message.error(res.msg);
                //     }else {
                //         _this.$message.error(LANG["赔率设置失败！"] || "赔率设置失败！");
                //     }
                // }).catch((e)=>{
                //     _this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
                // });
            },
            goBlack(){
	            window.history.go(-1);
            },
        },
        computed: {},
        mounted(){
        },
        created(){
            this.init();
        },
        watch: {
            $route: function (newval) {
                if (newval.query.name) {
                    this.init();
                }
            }
        }
    }
</script>
<style scoped>
    #lotteryOdds .btngroup>.el-button{margin-right: 10px;}
    #lotteryOdds .btngroup > .el-button+.el-button {margin-left: 0;}
</style>
