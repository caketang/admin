<template>
    <div id="templateManage" class="templateManage w100">
        <div class="el-tabs el-tabs--border-card">
            <div class="el-tabs__header">
                <div class="el-tabs__nav-wrap">
                    <div class="el-tabs__nav-scroll">
                        <div class="el-tabs__nav">
                            <div class="el-tabs__item" :class="{'is-active': activeType == 'lottery'}" @click="toggle('lottery')">
                                {{LANG['彩票'] || '彩票' }}
                            </div>
                            <div class="el-tabs__item" :class="{'is-active': activeType == 'live'}" @click="toggle('live')">
                                {{LANG['视讯'] || '视讯' }}
                            </div>
                            <div class="el-tabs__item" :class="{'is-active': activeType == 'egame'}" @click="toggle('egame')">
                                {{LANG['电子'] || '电子' }}
                            </div>
                            <!--<div class="el-tabs__item" :class="{'is-active': activeType == 'fish'}" @click="toggle('fish')">-->
                                <!--{{LANG['捕鱼'] || '捕鱼' }}-->
                            <!--</div>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="el-tabs__content">
                <nonetesQuery
                        :formConfig="formConfig"
                        :categorys="categorys"
                        :query="query"
                        :activeType="activeType"
                ></nonetesQuery>
            </div>
        </div>
    </div>
</template>
<script>
    import nonetesQuery from '../../components/notesQuery.vue'

    export default {
        data() {
            return {
                LANG,
                activeType: '',
                // 表单相关
                formConfig: [],
                query:{},
                // 表格相关
                baseUrl: "",
                columnsUrl: "",
                // 二级分类
                categorys: [],
                activeCategory: '',
                gamesTypes: [],
                liveArr: [],
                egameArr: [],
                fishArr: []
            }
        },
        components: {
            nonetesQuery: nonetesQuery
        },
        watch: {},
        methods: {
            init(){
                for(let k in NOTESQUERYCONFIG){
                    if(NOTESQUERYCONFIG[k]['baseUrl'] && NOTESQUERYCONFIG[k]['old_baseurl']){
                        NOTESQUERYCONFIG[k]['baseUrl'] = NOTESQUERYCONFIG[k]['old_baseurl'];
                    }
                }
                this.activeType = 'lottery';
                this.formConfig =  NOTESQUERYCONFIG && NOTESQUERYCONFIG.lottery && NOTESQUERYCONFIG.lottery.formConfig || [];
                this.toggle('lottery');
            },
            // 获取游戏类型
            getGamesType(str){

				this.$.autoAjax('get',URL.api + ROUTES.GET.games.games, '', {
					ok: (res) => {
						let data = res.data || [];
						this.liveArr.splice(0,this.liveArr.length);
						this.egameArr.splice(0,this.egameArr.length);
						if (res.state === 0 && data) {
							data.forEach((item) => {
								this.gamesTypes.push(item);
								if (item['game_type'] === 'live') {
									this.liveArr.push(item);
								} else if (item['game_type'] === 'egame') {
									this.egameArr.push(item);
								} else if (item['game_type'] === 'fish') {
									this.fishArr.push(item);
								}
							})
						} else {
							this.$message.error(LANG["未知错误，请稍后重试！"] || "未知错误，请稍后重试！");
						}
						if(str){
							this.activeType  = this.getNotesCategorys(str);
							this.toggle(this.activeType);
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
            },
            // 点击事件
            toggle(type){
                this.activeType = type;
                switch (type) {
                    case 'lottery':
                        this.categorys = [];
                        break;
                    case 'live':
                        this.categorys = this.liveArr;
                        break;
                    case 'egame':
                        this.categorys = this.egameArr;
                        break;
//                    case 'fish':
//                        this.categorys = this.fishArr;
//                        break;
                }
                this.formConfig = NOTESQUERYCONFIG && NOTESQUERYCONFIG[this.activeType] && NOTESQUERYCONFIG[this.activeType]['formConfig'] || [];
            },
            // 根据数据返回类型
            getNotesCategorys(gameType){
                for(let i=0; i<this.gamesTypes.length; i++){
                    if(this.gamesTypes[i].game_id == gameType){
                        return this.gamesTypes[i].game_type;
                    }
                }
                return '';
            }
        },
        created() {
//            this.getGamesType();
//            this.init();
        },

        activated() {
            this.init();
            // 参数跳转处理
            if (JSON.stringify(this.$route.query) == "{}") {
                this.getGamesType();
            } else {
                let gameType = this.$route.query.game_type || '';
                this.getGamesType(gameType);
            }
        },
        deactivated() {
            this.formConfig = [];
        }
    }

</script>
<style lang="less">
    #templateManage {
        /*.el-card__body:first-child {padding: 0 5px 20px 5px;}*/
        .el-dialog--small {
            width: 30%;
            min-width: 400px;
            max-width: 600px;
            border-radius: 10px;
        }
        .el-dialog--small .fromMargin {
            margin-right: 60px;
        }
        .bg-purple-dark {
            background: none;
        }
        .addManage {
            float: right;
            margin-right: 5%;
        }
        .block {
            text-align: right;
        }
    }

    #templateManage .el-tabs__content {
        overflow: inherit;
    }
</style>
