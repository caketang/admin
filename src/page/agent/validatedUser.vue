<template>
	<div id="validatedUser">
		<el-row>
			<el-col :span="2">
				<el-tabs v-model="activeName" @tab-click="changeType">
					<el-tab-pane label="代理" name="agent"></el-tab-pane>
					<el-tab-pane label="会员" name="user"></el-tab-pane>
				</el-tabs>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24" v-show="activeName === 'agent'">
			 	<formEdit
	            :formVisible="editVisible"
	            :formConfig="agentConfig"
	            :type="searchType"
	            :isEdit="isEdit"
	           	:labelWidth="labelWidth"
	            @do-query="doQuery"
	            @reset-form="resetForm"
	            :showAdd="false">
        		</formEdit>
			</el-col>
            <el-col :span="24" v-show="activeName === 'user'">
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
		<el-row v-loading="loading">
            <el-col :span="24" v-show="activeName === 'agent'">
                <tablegrid
                        :columnsUrl="columnsUrl"
                        :tableUrl="tableUrl"
                        :updated="updated"
                        @do-handle="doHandle">
                </tablegrid>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" v-show="activeName === 'user'">
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
	import tablegrid from '../../components/tableGrid';
	export default{
      	data(){
            return {
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
            	activeName: 'agent',
            	editVisible:{ state: false },
            	agentConfig:[	{"prop":"date","value":"","type":"quickDate"},//快捷日期
            					{"prop":"name","value":"","type":"select","label":"代理体系"},
            					{"prop":"name","value":"","type":"text","label":"帐号"},
    					 	 	{"type":"dateGroup","label":"日期区间","prop":[{"prop":"start_time","value":"","label":"开始时间"},{"prop":"end_time","value":"","label":"结束时间"}]}],
                userConfig:[   {"prop":"date","value":"","type":"quickDate"},//快捷日期
                                {"prop":"name","value":"","type":"textarea","label":"会员帐号","placeholder":"多个帐号英文,逗号隔开"},
                                {"prop":"name","value":"","type":"select","label":"存取款方式"},
                                {"type":"dateGroup","label":"日期区间","prop":[{"prop":"start_time","value":"","label":"开始时间"},{"prop":"end_time","value":"","label":"结束时间"}]}],
            	searchType:'search',
            	labelWidth: '90px',
            	isEdit:{ state: false},
            	loading: false,
            	updated: false,
            	columnsUrl:'',
            	tableUrl:'',
            	baseUrl:'',


            }
        },
        components:{
        	formEdit,
        	tablegrid,
        },
        computed:{},
        watch:{},
        methods:{
        	init(){
        		this.columnsUrl = "/static/json/agent/agencyStatistics/columns.json";
                this.tableUrl = URL.api+ROUTES.GET.commission.total
                this.baseUrl = URL.api+ROUTES.GET.commission.total;

        	},
        	changeType(tab, event)
        	{

        	},
        	doQuery(){},
        	resetForm(){},
        	//表格按钮点击事件
            doHandle(item){
                switch (item.fn){
                    case "openUserSet": // 用户名跳转
                        this.openUserSet(item.row);
                        break;
                    case "openMembers":
                        this.openMembers(item.row);
                    default:
                        break;
                }
            },
            openMembers(item){
               if(parseInt(item.members) > 0)
                {
                    this.$router.push({path:'/userDetails',query:{agent:item.agent_name}});
                }
            },
            //用户名跳转
            openUserSet(item){
                this.$router.push({path:'/agentAccount',query:{name:item.agent_name}});
            },
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

                this.$.autoAjax('get',this.baseUrl,'', {
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
        created(){
        	this.init();
        }
    }
</script>
<style scoped>
</style>
