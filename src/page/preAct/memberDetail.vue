<template>
    <div id="subAgentRebate" class="clearfix" v-loading="loading">
        <div class="title">
            <a href="javascript:;" @click="goback">
                <el-button type="primary" icon="arrow-left" size="small">{{LANG['返 回'] || '返 回'}}</el-button>
            </a>
        </div>
        <span>
            <el-tag type="gray">{{query.user_name}}</el-tag>
            会员返水比例
        </span>
        <el-col>
            <!--@date-selection="doOperation"-->
            <tableDetail
                    :tableData = "tableData"
                    :columnsUrl="columnsUrl"
                    :showDetail="true"
                    :assembleColumns="assembleColumns"
            >
            </tableDetail>
        </el-col>
    </div>
</template>
<script>
    import tableDetail from '../../components/table.vue'
    export default{
        data(){
            return {
                LANG,
                columnsUrl: "",
                loading:false,
                tableUrl:'',
                assembleColumns:{
                    index:1,
                    data:[]
                },
                allData:{},
                query:{},
                tableData:{
                    list:[]
                }
            }
        },
        components:{
            tableDetail : tableDetail
        },
        methods:{
            init(){
                let _this = this;
                let query = this.$route.query;
                for (let k in query) {
                    this.$set(this.query,k,query[k])
                }
                /*获取游戏选项*/
                function getGame() {
                    return new Promise((resolve,reject) => {
                        if(_this.assembleColumns.data.length === 0) {

							this.$.autoAjax('get',URL.api + "/games", '', {
								ok: (res) => {
									if (res.state === 0 && res.data) {
										let model = res.data;
										model.forEach(item => {
											let obj = {"label":item.game_name,'type': "twoLine","game_id":item.game_id,"game_type":item.game_type,filterByWord:"games",prop:"val",filterCondition:"game_type,game_id"};
											_this.assembleColumns.data.push(obj);
										})
										resolve();
									}
								},
								p: () => {
								},
								error: e => {
									console.log(e)
								}
							})
                            // _this.$http.get(URL.api + "/games", URLCONFIG).then((res) => {
                            //     if (res.data.state === 0 && res.data.data) {
                            //         let model = res.data.data;
                            //         model.forEach(item => {
                            //             let obj = {"label":item.game_name,'type': "twoLine","game_id":item.game_id,"game_type":item.game_type,filterByWord:"games",prop:"val",filterCondition:"game_type,game_id"};
                            //             _this.assembleColumns.data.push(obj);
                            //         })
                            //         resolve();
                            //     }
                            // })
                            .catch((res) => {
                                _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
                                reject(res)
                            });
                        }else{
                            resolve();
                        }
                    })
                }
                getGame().then(()=> {
                    _this.columnsUrl = "static/json/preAct/memberDetail/columns.json";
                    let memberId = `memberDetailData_${_this.query.user_id}`;
                    _this.tableData.list = [];
                    _this.tableData.list.push(JSON.parse(window.localStorage[memberId]));
                })
            },
            goback(){
               this.$router.push({path:"/discountCounting"})
            }
        },
        computed: {},
        mounted(){

        },
        activated(){
            this.init()
        }
    }
</script>
<style lang="less">
    #subAgentRebate {
        .title {
            margin-bottom: 10px;}
        .toolbar{display: none;}
    }
</style>