<template>
	<div id="agentUserDetails">
		<el-row>
			<el-col :span="4">
				<div  @click="returnPage">
		            <a href="javascript:;">
		                <el-button type="primary" icon="arrow-left" size="small">{{LANG['返 回'] || '返 回'}}</el-button>
		            </a>
		            <span>王二代理下的会员详情</span>
	   		 	</div>
				
			</el-col>
		</el-row>
		<el-row class="mt10">
			<el-col :span="24">
                <formEdit 
                :formVisible="editVisible" 
                :formConfig="userConfig" 
                :type="searchType"
                :isEdit="isEdit"
                :labelWidth="labelWidth" 
                @do-query="doQuery" 
                @reset-form="resetForm"
                :showAdd="false">
                </formEdit>
            </el-col>
		</el-row>
		<el-row>
            <el-col :span="24">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header el-table--border" style="width: 100%;">
                    <thead>
                        <tr>
                            <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['会员帐号'] || '会员帐号'}}</div>
                            </th>
                            <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['真实姓名'] || '真实姓名'}}</div>
                            </th>
                            <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['注册时间'] || '注册时间'}}</div>
                            </th>
                            <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['帐号状态'] || '帐号状态'}}</div>
                            </th>
                            <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['存款笔数'] || '存款笔数'}}</div>
                            </th>
                            <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['存款金额'] || '存款金额'}}</div>
                            </th>
                            <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['取款笔数'] || '取款笔数'}}</div>
                            </th>
                            <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['取款金额'] || '取款金额'}}</div>
                            </th>
                             <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['真实姓名'] || '真实姓名'}}</div>
                            </th>
                             <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['最后存款时间最后取款时间'] || '最后存款时间最后取款时间'}}</div>
                            </th>
                             <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['电话'] || '电话'}}</div>
                            </th>
                             <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['邮箱'] || '邮箱'}}</div>
                            </th>
                             <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['QQ'] || 'QQ'}}</div>
                            </th>
                             <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['微信号'] || '微信号'}}</div>
                            </th>
                        </tr>
                        <tr>
                            <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['线上'] || '线上'}}</div>
                            </th>
                            <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['线下'] || '线下'}}</div>
                            </th>
                             <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['线上'] || '线上'}}</div>
                            </th>
                            <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['线下'] || '线下'}}</div>
                            </th>
                             <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['线上'] || '线上'}}</div>
                            </th>
                            <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['线下'] || '线下'}}</div>
                            </th>
                             <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['线上'] || '线上'}}</div>
                            </th>
                            <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell">{{LANG['线下'] || '线下'}}</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr v-if="tableDataList.length == 0" style="text-align:center;height: 100px;">
                                <td colspan="28">暂无数据</td>
                            </tr>
                    </tbody>
                </table>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" class="toolbar mt20" v-if="tableDataList.length >0 "
                style="position:relative;">
                <el-pagination :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize"
                               layout="total, sizes, prev, pager, next, jumper"
                               :total="total" style="float:right" @size-change="doSizePage"
                               @current-change="doCurrentChange">
                </el-pagination>
            </el-col>
        </el-row>
    </div>
</template>
<script>
	import formEdit from '../../components/formEdit';
	export default{
      	data(){
            return {
            		editVisible:{
            			state: false,
            		},
            		userConfig:[ {"prop":"date","value":"","type":"quickDate"},//快捷日期
                                {"prop":"name","value":"","type":"text","label":"会员帐号","placeholder":"输入会员帐号"},  
                                {"prop":"name","value":"","type":"select","label":"存取款方式"},
                                {"type":"dateGroup","label":"日期区间","prop":[{"prop":"start_time","value":"","label":"开始时间"},{"prop":"end_time","value":"","label":"结束时间"}]}],
            		searchType:'search',
            		isEdit:{ state: false},
            		labelWidth: '90px',
            		tableDataList:[],
	                //分页相关
	                //总页数
	                total: 0,
	                //一页多少条
	                pageSize: 0,
	                //共多少页
	                pageCount: 1,
	                // 当前页
	                currentPage: 1,
	                LANG,
            	
            }
        },
        components:{
        	formEdit,
        },
        computed:{},
        watch:{},
        methods:{
        	doQuery(){},
        	resetForm(){},
        	returnPage(){},
        	 //设置每页条数据
            doSizePage(v){
                let total = this.total;
                let pageSize = this.pageSize;
                let pageCount = this.pageCount;
                let page = 0;
                let _this = this
                page = Math.ceil((pageSize * pageCount) / total) || 1;
                _this.tableDataList.splice(0, _this.tableDataList.length);
                let index = this.baseUrl.indexOf('?');
                if (index === -1) {
                    this.baseUrl = this.baseUrl + "?page=1&page_size=" + v;
                } else {
                    let n = this.baseUrl.indexOf('page=');
                    if (n > 0) {
                        this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + this.currentPage);
                    } else {
                        this.baseUrl = this.baseUrl + "&page=1&page_size=" + v;
                    }
                    let m = this.baseUrl.indexOf('page_size=');
                    if (m > 0) {
                        this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + v);
                    } else {
                        this.baseUrl = this.baseUrl + "&page_size=" + 10;
                    }
                }

				this.$.autoAjax('get',this.baseUrl, '', {
					ok: (res) => {
						_this.total = res.attributes.total || 10;
						_this.pageSize = res.attributes.size || 10;
						_this.pageCount = Math.ceil(this.total / this.pageSize);
						_this.currentPage = 1;
						let tableDate = res.data || res.data.list || res.data.data || [];
						for (let i in tableDate) {
							_this.tableDataList.push(tableDate[i])
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
                //     _this.total = res.data.attributes.total || 10;
                //     _this.pageSize = res.data.attributes.size || 10;
                //     _this.pageCount = Math.ceil(this.total / this.pageSize);
                //     _this.currentPage = 1;
                //     let tableDate = res.data.data || res.data.data.list || res.data.data.data || [];
                //     for (let i in tableDate) {
                //         _this.tableDataList.push(tableDate[i])
                //     }
                // })
            },
            //切换页数
            doCurrentChange(v){
                let total = this.total;
                let pageSize = this.pageSize;
                let pageCount = this.pageCount;
                this.currentPage = v;
                let page = 0;
                let _this = this
                page = Math.ceil((pageSize * pageCount) / total) || 1;
                _this.tableDataList.splice(0, _this.tableDataList.length);
                let index = this.baseUrl.indexOf('?');
                if (index === -1) {
                    this.baseUrl = this.baseUrl + "?page=" + v + "&page_size=" + this.pageSize;
                } else {
                    let n = this.baseUrl.indexOf('page=');
                    if (n > 0) {
                        this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + v);
                    } else {
                        this.baseUrl = this.baseUrl + "&page=" + v + "&page_size=" + this.pageSize;
                    }
                    let m = this.baseUrl.indexOf('page_size=');
                    if (m > 0) {
                        this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + this.pageSize);
                    } else {
                        this.baseUrl = this.baseUrl + "&page_size=" + 10;
                    }
                }

				this.$.autoAjax('get',this.baseUrl, '', {
					ok: (res) => {
						_this.total = res.attributes.total || 10;
						_this.pageSize = res.attributes.size || 10;
						_this.pageCount = Math.ceil(this.total / this.pageSize);
						_this.currentPage = res.attributes.number || 1;
						let tableDate = res.tableDemoDate || res.data || res.data.list || res.data.data || res.data.deposit || [];
						for (let i in tableDate) {
							_this.tableDataList.push(tableDate[i])
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
                //     _this.total = res.data.attributes.total || 10;
                //     _this.pageSize = res.data.attributes.size || 10;
                //     _this.pageCount = Math.ceil(this.total / this.pageSize);
                //     _this.currentPage = res.data.attributes.number || 1;
                //     let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
                //     for (let i in tableDate) {
                //         _this.tableDataList.push(tableDate[i])
                //     }
                // })
            },
        },
        mounted(){},
        created(){}
    }
</script>
<style scoped>
</style>