<template>
    <div id="validUserDetail">
            <el-col style="margin-bottom: 10px;" >
                <el-button @click="doReturn" size="small" type="primary">{{LANG['返回'] || '返回'}}</el-button>
            </el-col>
            <el-col>
                <span class="ml10" v-if="!showGames">{{agentName}} {{LANG['代理下的会员详情'] || '代理下的会员详情'}}</span>
                <span class="ml10" v-if="showGames">{{LANG['会员'] || '会员'}} {{username}}</span>
                <span class="ml10">{{LANG['时间'] || '时间'}} ( {{stime}} {{LANG['到'] || '到'}} {{etime}} )</span>
                <span class="ml10" v-if="!showGames">{{LANG['总报表'] || '总报表'}}</span>
                <span class="ml10" v-if="showGames">{{LANG['游戏报表'] || '游戏报表'}}</span>
            </el-col>
        <el-col v-if="!showGames">
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :isCreated="true"
                    @do-handle="doHandle">
            </tablegrid>
        </el-col>
        <el-col v-if="showGames">
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :isCreated="true"
                    :sumGame="true"
                    @do-handle="doHandle">
            </tablegrid>
        </el-col>
    </div>
</template>
<script>
    import tablegrid from '../../components/tableGrid.vue'
    export default {
        data() {
            return {
                LANG,
                tableUrl: '',
                columnsUrl: '',
                baseUrl: '',
                showGames: false,
                username: '',
                gameList: []
            }
        },
        methods: {
            init() {
                //this.baseUrl = URL.api + '/state/summary';
                this.baseUrl = URL.api + ROUTES.GET.user.agent.line
                this.columnsUrl = "static/json/userManagement/agentAccount/userAgentcolumns.json";
                //this.tableUrl = this.baseUrl + '?date_from=' + this.stime + '&date_to=' + this.etime  + '&type=member&agent_id=' + this.nowId;
                this.tableUrl = this.baseUrl + '?name=' + this.agentName;
                // 取游戏列表
                this.gameList.splice(0,this.gameList.length);
                let gamelist = this.gameList;

//				this.$.autoAjax('get',URL.api + ROUTES.GET.games.listTwo, '', {
//					ok: (res) => {
//						if(res.state === 0 && res.data){
//							let model=res.data || [];
//							for(let i in model){
//								gamelist.push({
//									"game_id":model[i].game_id,
//									"game_type":model[i].game_type
//								});
//							};
//						}
//					},
//					p: () => {
//					},
//					error: e => {
//						console.log(e)
//					}
//				})
            },
            // 回上页
            doReturn(){
                if(this.showGames){
                    this.showGames = false;
                    this.columnsUrl = "static/json/userManagement/agentAccount/userAgentcolumns.json";
                    this.tableUrl = URL.api + '/state/summary' + '?date_from=' + this.stime + '&date_to=' + this.etime  + '&type=member&agent_id=' + this.nowId;
                }else{
                    this.$emit('return-page',{});
                }
            },
            // 表格事件
            doHandle(obj){
                switch(obj.fn){
                    case "openGameReport":
                        this.openGameReport(obj.row);
                        break
                    case "openUser": // 用户名跳转
                        this.openUser(obj.row)
                        break;
                }
            },
            // 打开游戏报表
            openGameReport(row){
                let temp = {
                    date_from: this.stime,
                    date_to: this.etime,
                    type: 'user',
                    user_name: row.name
                };
                this.showGames = true;
                this.username = row.name;
                this.columnsUrl = "static/json/statement/gameStatement/columns2.json";
                this.tableUrl = URL.api + ROUTES.GET.state.game+'?flag=0&type=user&games='+ JSON.stringify(this.gameList) + '&date_from='+ this.stime + '&date_to=' + this.etime + '&user_name=' + row.name;
            },
            // 用户跳转
            openUser(row){
                this.$router.push({path:'/noteManagement',query:{user_name:row.user_name,game_name:row.game_name,game_type:row.game_type,start_time:this.stime,end_time:this.etime,isopen: 1}});
            }
        },
        props:{
            nowId: String,
            agentName: String,
            etime: String,
            stime: String,
            type: String
        },
        components: {
            tablegrid: tablegrid
        },
        created(){
          this.init();
        },
        watch:{
            agentName:function (newval) {
                if(newval){
                    this.init();
                }
            }
        }
    }
</script>
<style scopend>

</style>
