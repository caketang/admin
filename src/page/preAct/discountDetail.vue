<template>
    <div id="subAgentRebate" class="clearfix" v-loading="loading">
        <div class="title">
            <a href="javascript:;" @click="goback">
                <el-button type="primary" icon="arrow-left" size="small">{{LANG['返 回'] || '返 回'}}</el-button>
            </a>
        </div>
        <span>
            <el-tag type="gray">{{query.name}}</el-tag>
            返水活动详情
        </span>
        <!--<el-row type="flex" class="row-bg" justify="space-between">-->
                <!--<span>返水()</span>-->
                <!--<el-button type="text">{{LANG['导出excel'] || '导出excel'}}</el-button>-->
        <!--</el-row>-->
        <el-col>
            <!--@date-selection="doOperation"-->
            <tableDetail
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="true"
                    :tableIndex="false"
                    :sumGame="true"
                    :assembleColumns="assembleColumns"
                    @do-operation="doOperation"
                    @export-data="exportData"
                    :isLoading="isLoading"
                    :updated = "updated"
                    :showExport="isShow"
                    :colspan = 3
            >
                <!--<div class="cell tCent" slot="sub">人数/冲销 : {{attributes.subTotal}}/{{attributes.subTotalRevoke}}</div>-->
                <!--<div class="cell tCent" slot="total">总人数/冲销 : {{attributes.total}}/{{attributes.totalRevoke}}</div>-->
            </tableDetail>
        </el-col>
        <el-col>
            <el-dialog title="提示" :visible.sync="dialogVisible" size="tiny">
                {{LANG['点击”确认“导出数据'] || '点击”确认“导出数据'}}
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <a :href="outUrl" target="_blank" id="outUrl">
                        <el-button type="primary" @click="dialogVisible = false">确 认</el-button>
                    </a>
              </span>
            </el-dialog>
        </el-col>
    </div>
</template>
<script>
    import tableDetail from '../../components/tableDiscount.vue'
    export default{
        data(){
            return {
                LANG,
                columnsUrl: "",
                loading:false,
                tableUrl:'',
                assembleColumns:{
                    index:4,
                    data:[]
                },
                checkCondition:{
                    prop:"revoked",
                    value:"1"
                },
                query:{},
                updated:false,
                attributes:{},
                timeXJ:0,
                timeTZ:0,
                isLoading: true,
                isShow: sessionStorage.rebate_details_export == 'true' ? true :  sessionStorage.rebate_export == 'true'? true : false,
                // 导出提示框
                dialogVisible: false,
                outUrl: '',

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
                    _this.columnsUrl = "static/json/preAct/discountDetail/columns.json";
                    _this.tableUrl = URL.api + `/active/rebetset/detail?id=${_this.$route.query.id}`;
                })
            },
            goback(){
              this.$router.push({path:"/discount"})
            },
            getCheckedKeys() {
                this.checkkeys = this.$refs.tree.getCheckedKeys();
            },
            // 导出数据
            exportData(){
                // 当前查询条件
                let _this = this;
                if (sessionStorage.rebate_export == 'true' || sessionStorage.rebate_details_export == 'true') {
                    let url = URL.api + '/export/download/active.rebetset/';
                    let nowid = this.$route.query.id;

					this.$.autoAjax('get',URL.api + '/dev/download/sign'+'?nonce='+ url, '', {
						ok: (res) => {
							if (res.data.data) {
								_this.outUrl = url + "?id="+ nowid + "&nonce=" + res.data.data.nonce + "&signature=" + res.data.data.signature + "&time=" + res.data.data.time + "&uuid=" + res.data.data.uuid;
								_this.dialogVisible = true;
							}else if(res.data.msg){
								this.$message.error(res.data.msg);
							} else {
								_this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
							}
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.get(URL.api + '/dev/download/sign'+'?nonce='+ url, URLCONFIG).then((res) => {
                    //     // 执行导出
                    //     if (res.data.data) {
                    //         _this.outUrl = url + "?id="+ nowid + "&nonce=" + res.data.data.nonce + "&signature=" + res.data.data.signature + "&time=" + res.data.data.time + "&uuid=" + res.data.data.uuid;
                    //         _this.dialogVisible = true;
                    //     }else if(res.data.msg){
                    //         this.$message.error(res.data.msg);
                    //     } else {
                    //         _this.$message.error(LANG['数据导出失败，请稍后重试'] || '数据导出失败，请稍后重试');
                    //     }
                    // })
                    .catch((e) => {
//						console.log(e);
                    });
                } else {
                    this.$message.error(LANG['权限不足'] || '权限不足');
                }
            },
            doHandle(item){
                switch (item.fn) {
                    case "doDetail":
                        this.doDetail(item.row);
                        break;
                }
            },
            // 批量冲销
            doOperation(obj){
              this.updated = false;
              if(obj.dataList.length > 0){
                  let url = URL.api+'/active/rebetset/revoke';
                  let data = {
                      id: this.query.id || 0,
                      detail_id: obj.dataList || []
                  };
                  this.isLoading = true;

				  this.$.autoAjax('put',url,data,  {
					  ok: (res) => {
						  if(res.data && res.state == 0){
							  let str = LANG['冲销成功'] || '冲销成功';
							  this.updated = true;
							  this.$message.success(str);
							  this.isLoading = false;
							  this.$router.push({path: '/discount'})
						  } else {
							  let str = LANG['冲销失败，请稍后重试'] || '冲销失败，请稍后重试';
							  this.updated = true;
							  this.$message.success(str)
						  }
					  },
					  p: () => {
					  },
					  error: e => {
						  console.log(e)
					  }
				  })
                  // this.$http.put(url,JSON.stringify(data),URLCONFIG).then(res => {
                  //         if(res.data.data && res.data.state == 0){
                  //             let str = LANG['冲销成功'] || '冲销成功';
                  //             this.updated = true;
                  //             this.$message.success(str);
                  //             this.isLoading = false;
                  //             this.$router.push({path: '/discount'})
                  //         } else {
                  //             let str = LANG['冲销失败，请稍后重试'] || '冲销失败，请稍后重试';
                  //             this.updated = true;
                  //             this.$message.success(str)
                  //         }
                  //     })
                  .catch((res) => {
                      this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
                  });
              }else{
                  let str = LANG['请选择数据'] || '请选择数据'
                  this.$message.error(str)
              }
            },
//            doSort(obj){
//
//            }
        },
        computed: {},
        mounted(){

        },
        activated(){
            this.init()
        }
    }
</script>
<style scoped>
 .title {
     margin-bottom: 10px;
 }
</style>
