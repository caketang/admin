<template><!-- 总报表组件 -->
	<div id="reportForms"  v-loading="loading"  class="clearfix">
		<table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header el-table--border" style="width: 100%;">
                <thead>
                    <tr>
                        <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                            <div class="cell tCent" v-text="LANG['会员帐号'] || '会员帐号'"></div>
                        </th>
                        <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                            <div class="cell  tCent"  v-text="LANG['总投注笔数'] || '总投注笔数'"></div>
                        </th>
                        <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                            <div class="cell  tCent"  v-text="LANG['总投注金额'] || '总投注金额'"></div>
                        </th>
                        <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                            <div class="cell  tCent"  v-text="LANG['总有效投注金额'] || '总有效投注金额'"></div>
                        </th>
                        <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                            <div class="cell  tCent"  v-text="LANG['输赢'] || '输赢'"></div>
                        </th>
                        <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                            <div class="cell  tCent"  v-text="LANG['彩金'] || '彩金'"></div>
                        </th>
                        <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                            <div class="cell  tCent"  v-text="LANG['贡献'] || '贡献'"></div>
                        </th>
                    </tr>
                </thead>
                    <tr v-for="(item,index) in dataModel" v-if="dataModel.length">
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                              	<span  class="link">{{item.name}}</span>
                            </div>
						</td>
						<td colspan="2" class="el-table_1_column_19" v-if="tag==3">
                            <div class="cell tCent" >
                                <span  class="link"  v-if="item.type==='level_agent'" @click=queryLevel(item)>{{item.name}}</span>
                                <span  class="link"  v-if="item.type==='agent'">{{item.name}}</span>
                            </div>
						</td>
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>{{item.bet_times}}</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>{{item.bet_money | formatMoney}}</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>{{item.valid_bet | formatMoney}}</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>{{item.lose_earn | formatMoney}}</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>{{item.bonus | formatMoney}}</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>{{item.contri | formatMoney}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="dataModel.length">
                         <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>总计</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>{{totalData.bet_times}}</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>{{totalData.bet_money | formatMoney}}</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>{{totalData.valid_bet | formatMoney}}</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>{{totalData.lose_earn | formatMoney}}</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>{{totalData.bonus | formatMoney}}</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19">
                            <div class="cell tCent" >
                                <span>{{totalData.contri | formatMoney}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="dataModel.length == 0" style="text-align:  center;height: 100px;">
                        <td colspan="14">暂无数据</td>
                    </tr>
        </table>
         <!--分页-->
        <el-col :span="24" class="toolbar mt20" v-if="dataModel.length >0 "
                style="position:relative;">
            <el-pagination :current-page="currentPage" :page-sizes="[10,20,30,40]" :page-size="50"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="total" style="float:right" @current-change="doCurrentChange">
            </el-pagination>
        </el-col>
    </div>
</template>
<script>
	export default{
      	data(){
            return {
            	totalData:{},
            	LANG,
            	dataModel:[],
            	totalData:{},
            	//加载状态
	            loading: false,
	            //总条数
	            total: 0,
	            //每次页条数
	            pageSize: 50,
	            //总页数
	            pageCount: 0,
	            //当前页
	            currentPage: 0

            }
        },
        props:{
        	tableUrl:String,
            updated:{
                type: Boolean,
                default: false
            },
            tag: Number,
           	type:String
        },
        components:{},
        computed:{},
        watch:{
        	//如果数据网址发生变化，就执行数据请求
            tableUrl: function (newQuestion) {
                if(newQuestion){
                    this.init();
                }
            },
            updated: function (newval) {
                if(newval){
                    this.init();
                }
            }
        },
        methods:{
        	//系统初始化
            init(){
                let  _this=this;
                //总条数
                let total = this.total;
                //每次页条数
                let pageSize = this.pageSize;
                //总页数
                let pageCount = this.pageCount;
                //当前页
                let currentPage = this.currentPage;
                if(this.tableUrl){
                    this.loading = true;

					this.$.autoAjax('get', this.tableUrl, '', {
						ok: (res) => {
							if(res.state === 0 && res.data.length){
								_this.total = res.attributes.total || 10;
								_this.pageSize = res.attributes.size || 50;
								_this.pageCount = Math.ceil(this.total / this.pageSize);
								_this.currentPage = res.attributes.number || 1;
								this.dataModel = res.data;
								this.totalData = res.attributes.totalData

							}
							_this.loading = false;
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.get(this.tableUrl,URLCONFIG).then((res) => {
                    //     if(res.data.state === 0 && res.data.data.length){
                    //     	_this.total = res.data.attributes.total || 10;
                    //         _this.pageSize = res.data.attributes.size || 50;
                    //         _this.pageCount = Math.ceil(this.total / this.pageSize);
                    //         _this.currentPage = res.data.attributes.number || 1;
                    //         this.dataModel = res.data.data;
                    //         this.totalData = res.data.attributes.totalData
                    //
                    //     }
                    //     _this.loading = false;
                    // })
                    .catch((e)=>{
                        _this.loading = false;
                        _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！')
                    });
                }
            },
        	//切换页数
            doCurrentChange(v){
                this.loading = true;
                let total = this.total;
                let pageSize = 50;
                let pageCount = this.pageCount;
                this.currentPage = v;
                this.dataModel = [];
                let dataModel = this.dataModel;
                let page = 0;
                let _this = this
                page = Math.ceil((pageSize * pageCount) / total) || 1;
                let index = this.tableUrl.indexOf('?');
                if (index === -1) {
                    this.tableUrl = this.tableUrl + "?page=" + v + "&page_size=50";
                } else {
                    let n = this.tableUrl.indexOf('page=');
                    if (n > 0) {
                        this.tableUrl = this.tableUrl.replace(/page=\d+/, "page=" + v);
                    } else {
                        this.tableUrl = this.tableUrl + "&page=" + v + "&page_size=50";
                    }
                }

				this.$.autoAjax('get',this.tableUrl, '', {
					ok: (res) => {
						_this.total = res.attributes.total || 10;
						_this.pageSize = res.attributes.size || 50;
						_this.pageCount = Math.ceil(this.total / this.pageSize);
						_this.currentPage = res.attributes.number || 1;
						let tableDate = res.data || res.data.list || [];
						for (let i in tableDate) {
							_this.dataModel.push(tableDate[i])
						}
						_this.loading = false;
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(this.tableUrl, URLCONFIG).then((res) => {
                //     _this.total = res.data.attributes.total || 10;
                //     _this.pageSize = res.data.attributes.size || 50;
                //     _this.pageCount = Math.ceil(this.total / this.pageSize);
                //     _this.currentPage = res.data.attributes.number || 1;
                //     let tableDate = res.data.data || res.data.data.list || [];
                //     for (let i in tableDate) {
                //         _this.dataModel.push(tableDate[i])
                //     }
                //     _this.loading = false;
                // })
                .catch((e)=>{
                    _this.loading = false;
                    _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
                })
            },
            showMember()
            {
            	this.$emit('showAgent',{
            		type: 'member',
            	})
            },
            showAgent()
            {
            	this.$emit('showAgent',{
            		type: 'agent',
            	})
            },
           	showLevelAgent(){
           		this.$emit('showAgent',{
            		type: 'level_agent',
            	})
           	},
           	queryLevel(obj){
           		this.$emit('queryLevl',{
           			item: obj
           		})
           	},
        },
        mounted(){},
        created(){
        	 this.init()
        }
    }
</script>
<style scoped>
	.link{
		color: #20A0FF;
	}

</style>
