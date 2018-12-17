<template>
    <div id="modelSet" v-loading="loading" class="mt20">
        <el-row>
            <el-col>
                <el-card>
                <table cellspacing="0" cellpadding="0" border="1" class="el-table el-table__header el-table--border w100" >
                    <thead>
                    <tr>
                        <th colspan="2" rowspan="3" class="el-table_1_column_36 is-leaf">
                            <div class="cell" v-text="LANG['玩法名称'] || '玩法名称'"></div>
                        </th>
                        <th colspan="2" rowspan="3" class="el-table_1_column_36 is-leaf">
                            <div class="cell"  v-text="LANG['当前赔率'] || '当前赔率'"></div>
                            <!-- <input type="number" placeholder="快调" class="el-input__inner el-input" style="margin-top:10px;display:block;"  @keyup.13="changeCol($event,'odds')" @blur="changeCol($event,'odds')" min="1"> -->
                        </th>
                        <th colspan="2" rowspan="3" class="el-table_1_column_36 is-leaf">
                            <div class="cell"  v-text="LANG['注单数'] || '注单数'"></div>
                        </th>
                        <th colspan="2" rowspan="3" class="el-table_1_column_36 is-leaf">
                            <div class="cell"  v-text="LANG['金额'] || '金额'"><br/>
                                <el-checkbox style="margin-top:10px" :checked="checksPlayOn?true:false" v-model="checksPlayOn" @change="checkAllChange($event,'stateus')"></el-checkbox></div>
                        </th>
                        <th colspan="2" rowspan="3" class="el-table_1_column_36 is-leaf">
                            <div class="cell"  v-text="LANG['输赢'] || '输赢'"></div>
                        </th>
                    </tr>
                    </thead>
                    <tr v-for="(item,index) in dataModel" v-if="dataModel.length">
                        <td colspan="2" class="el-table_1_column_19" >
                            <div class="cell" >
                                <span v-if="playType=='standard'">{{item.odds_type}} - {{item.result}}</span>
                                <span v-else-if="item.odds_type==='和值'">{{item.odds_type}} - {{item.result}}</span>
                                <span v-else>{{item.odds_type}}-{{item.result}}</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19" >
                            <div class="cell">
                                <div v-for="(sub,key) in item.sub_odds" style="clear: both;">
                                    <span class="sub">{{sub.name}}</span>
                                    <span class="sub">{{sub.odds}}</span>
                                    <!--<input type="number"  class="el-input__inner" v-model="sub.odds" @keyup.13="doEnter(index,'odds')" @blur="doEnter(index,'odds')" >-->
                                </div>
                                <!-- 去掉即时注单修改赔率的入口 -->
                                <span v-if="!item.sub_odds">{{item.odds}}</span>
                                <!-- <span @click="changeInput($event,index,'zdpl')"  v-if="!item.sub_odds">{{item.odds}}</span> -->
                                <!-- <input type="number"  class="el-input__inner" v-model="item.odds" @keyup.13="doEnter(index,'odds')" @blur="doEnter(index,'odds')" > -->
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19" >
                            <div class="cell" :class="{sub_color: item.bet_num > 0}" v-if="item.bet_num == 0">{{item.bet_num}}</div>
                            <div class="cell sub_color" v-else>
                                <span @click="showDetails(item)">{{item.bet_num}}</span>
                            </div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19" >
                            <div class="cell" >{{item.pay_money |formatMoney}}</div>
                        </td>
                        <td colspan="2" class="el-table_1_column_19" >
                            <div class="cell" >{{item.lose_earn  |formatMoney}}</div>
                        </td>
                    </tr>
                     <!--总计-->
                    <tr v-if="total">
                        <td colspan="4" class="el-table_1_column_19"> <div class="cell"><span>{{LANG['总计'] || '总计'}}</span></div></td>
                        <td colspan="2" class="el-table_1_column_19"><div class="cell"><span>{{totalMoney.bet_num || 0}}</span></div></td>
                        <td colspan="2" class="el-table_1_column_19"><div class="cell"><span>{{totalMoney.pay_money || 0}}</span></div></td>
                        <td colspan="2" class="el-table_1_column_19"><div class="cell"><span>{{totalMoney.lose_earn || 0}}</span></div></td>
                    </tr>
                    <tr v-if="dataModel.length == 0" style="text-align:center;height: 100px;">
                        <td colspan="8">暂无数据</td>
                    </tr>
                </table>
                </el-card>
            </el-col>
        </el-row>
        <el-dialog
          :title="details"
          :visible.sync="dialogVisible"
          size="large"
            >
            <el-col>
                 <table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header el-table--border" style="width: 100%;">
                    <thead>
                        <tr>
                            <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell" v-text="LANG['序号'] || '序号'"></div>
                            </th>
                            <th colspan="4" rowspan="1" class="el-table_1_column_36 is-leaf" style="padding: 0 20px;">
                                <div class="cell" v-text="LANG['订单号'] || '订单号'"></div>
                                   
                            </th>
                            <th colspan="4" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell"  v-text="LANG['下单时间'] || '下单时间'"></div>
                            </th>
                            <th colspan="4" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell"  v-text="LANG['期数'] || '期数'"></div>
                            </th>
                             <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell"  v-text="LANG['会员'] || '会员'"></div>
                            </th>
                             <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell"  v-text="LANG['总额'] || '总额'"></div>
                            </th>
                               <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                                <div class="cell"  v-text="LANG['内容'] || '内容'"></div>
                            </th>
                        </tr>
                    </thead>
                    <tr v-for="(item,index) in detaildataModel" v-if="detaildataModel.length">
                        <td colspan="2" class="el-table_1_column_19" >
                            <div class="cell" >
                                <span >{{item.id}}</span>
                            </div>
                        </td>
                        <td colspan="4" class="el-table_1_column_19" >
                            <div class="cell" >
                                <span >{{item.order_number}}</span>
                            </div>
                        </td>
                         <td colspan="4" class="el-table_1_column_19" >
                            <div class="cell" >
                                <span >{{item.created}}</span>
                            </div>
                        </td>
                         <td colspan="4" class="el-table_1_column_19" >
                            <div class="cell" >
                                <span >{{item.lottery_number}}</span>
                            </div>
                        </td>
                         <td colspan="2" class="el-table_1_column_19" >
                            <div class="cell" >
                                <span >{{item.user_name}}</span>
                            </div>
                        </td>
                         <td colspan="2" class="el-table_1_column_19" >
                            <div class="cell" >
                                <span >{{item.pay_money | formatMoney}}</span>
                            </div>
                        </td>
                         <td colspan="2" class="el-table_1_column_19" >
                            <div class="cell" >
                                <span >{{item.play_number}}</span>
                            </div>
                        </td>
                    
                    </tr>
                    <tr>
                        <td colspan="6" class="el-table_1_column_19" >
                            <div class="cell" >
                                <span >总计</span>
                            </div>
                        </td>
                        <td colspan="14" class="el-table_1_column_19" >
                            <div class="cell tCent" >
                                <span >{{dialogTotal | formatMoney}}</span>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="detaildataModel.length == 0" style="text-align:center;height: 100px;">
                        <td colspan="22">暂无数据</td>
                    </tr>
                </table>
                <!--分页-->
                <el-col :span="24" class="toolbar pagemar" v-if="detaildataModel.length >0 "
                        style="position:relative;">
                    <el-pagination :current-page="dialogcurrentPage" :page-sizes="[10,20,30,40]" :page-size="dialogpageSize"
                                   layout="total, sizes, prev, pager, next, jumper"
                                   :total="dialogtotal" style="float:right" @current-change="dodialogCurrentChange">
                    </el-pagination>
                </el-col>
            </el-col>

        </el-dialog>
       
    </div>
</template>
<script>
    import  Vue from 'vue'
   
    export default{
        data(){
            return{
                dialogVisible: false,
                details:'',
                money:'',
                LANG,
                //表头玩法开启
                checksPlayOn: false,
                //表格数据
                dataModel: [],
                 //加载状态
                loading: false,
                //总条数
                total: 0,
                //每次页条数
                pageSize: 10,
                //总页数
                pageCount: 1,
                //当前页
                currentPage: 1,
                //弹出框分页
                //总页数
                dialogtotal: 0,
                //一页多少条
                 dialogpageSize: 10,
                //共多少页
                 dialogpageCount: 1,
                // 当前页
                 dialogcurrentPage: 1,
                detaildataModel:[],
                dialogUrl:'',
                dialogTotal: 0,
                totalMoney: {}

          } 
        },
        components:{
           
        },
        props:{
            tableUrl:String,
            columnsUrl:String,
            updated:{
                type: Boolean,
                default: false
            },
            playname:{
                default:0
            },
            lotteryName:{
                type: String,
                default: '',
            },
            lotteryId:String,
            lotteryNumber:String,
            playType:String,

            
        },
        filters:{},
        watch: {
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
                    this.dataModel = [];

					this.$.autoAjax('get',this.tableUrl, '', {
						ok: (res) => {
							if(res.state === 0 && res.data){
								let attributes = res.attributes.totalMoney || {};
								_this.total = res.attributes.total || 10;
								_this.pageSize = res.attributes.size || 50;
								_this.pageCount = Math.ceil(this.total / this.pageSize);
								_this.currentPage = res.attributes.number || 1;
								let data = res.data || res.data.list || [];
								let dataModel = _this.dataModel;
								for (let i in data) {
//                                let reg = RegExp('enabled');
//                                if(reg.test(data[i].state)){
//                                    data[i]['status'] = true;
//                                }else{
//                                    data[i]['status'] = false;
//                                }
									_this.$set(dataModel,i, data[i]);

								}
								for(let k in attributes){
									if(k=== 'bet_num'){
										_this.totalMoney[k] = attributes[k];
									}else{
										_this.totalMoney[k] = FORMATMONEY(attributes[k]);

									}
								}
							}
							_this.loading = false;
						},
						p: () => {
						},
						error: e => {
							_this.loading = false;
							_this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！')
						}
					})
//                     this.$http.get(this.tableUrl,URLCONFIG).then((res) => {
//                         if(res.data.state === 0 && res.data.data){
//                             let attributes = res.data.attributes.totalMoney || {};
//                             _this.total = res.data.attributes.total || 10;
//                             _this.pageSize = res.data.attributes.size || 50;
//                             _this.pageCount = Math.ceil(this.total / this.pageSize);
//                             _this.currentPage = res.data.attributes.number || 1;
//                             let data = res.data.data || res.data.data.list || [];
//                             let dataModel = _this.dataModel;
//                             for (let i in data) {
// //                                let reg = RegExp('enabled');
// //                                if(reg.test(data[i].state)){
// //                                    data[i]['status'] = true;
// //                                }else{
// //                                    data[i]['status'] = false;
// //                                }
//                                 _this.$set(dataModel,i, data[i]);
//
//                             }
//                             for(let k in attributes){
//                                 if(k=== 'bet_num'){
//                                     _this.totalMoney[k] = attributes[k];
//                                 }else{
//                                     _this.totalMoney[k] = FORMATMONEY(attributes[k]);
//
//                                 }
//                             }
//                         }
//                         _this.loading = false;
//                     }).catch((e)=>{
//                         _this.loading = false;
//                         _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！')
//                     });
                }
            },
            //保存数据
            doSave(){
                this.$emit('save-data',{
                    "item":this.dataModel
                })
            },
            formatMoney(value)
            {   let m;
                if(value)
                {   
                    m = (parseInt(value) /100).toFixed(2);
                    return m;
                }
                return value;   
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
						_this.loading = false;
						_this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
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
                // }).catch((e)=>{
                //     _this.loading = false;
                //     _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
                // })
            },
            //显示编辑框
            changeInput(e,index,prop){
                let event = window.event || e ;
                let obj = event.srcElement ? event.srcElement: event.target;
                event.target.style.display="none";
                event.target.nextElementSibling.style.display="block";
                event.target.focus();
            },
            //点击回车
            doEnter(index,prop){
                let e = window.event|| event;
                let obj = e.srcElement ? e.srcElement: e.target;
                event.target.style.display="none";
                event.target.previousElementSibling.style.display="block";
            },
            //开启所有玩法
            checkAllChange(e,str){
                let event = window.event|| e;
                let dataModel=this.dataModel;
                let obj = event.srcElement ? event.srcElement: event.target;
                if(obj.checked){
                    for(let i in this.dataModel){
                        dataModel[i][str] = true;
                    }
                }else{
                    for(let i in this.dataModel){
                        dataModel[i][str] = false;
                    }
                }
            },
            //修改快调
            changeCol(e,prop){
                let event = window.event|| e;
                let obj = event.srcElement ? event.srcElement: event.target;
                if(obj.value){
                    for(let i in this.dataModel){
                        this.dataModel[i][prop] = obj.value
                    }
                    obj.blur();
                }
            },
            showDetails(item){
                this.detaildataModel = [];
                this.dialogTotal = item.pay_money; 
                this.dialogVisible = true;
                this.details = this.lotteryName +'-'+ item.odds_type + ':' + item.result +'明细';
                let url = URL.api+ ROUTES.GET.lottery.orders+"?lottery_id="+this.lotteryId+"&lottery_number="+this.lotteryNumber+"&odds_id="+item.id+"&type="+this.playType;
                this.dialogUrl = url;
                let  _this=this;
                if(this.dialogUrl){

					this.$.autoAjax('get',this.dialogUrl, '', {
						ok: (res) => {
							if(res.state === 0 && res.data){
								_this.dialogtotal = res.attributes.total || 10;
								_this.dialogpageSize = res.attributes.size || 50;
								_this.dialogpageCount = Math.ceil(this.total / this.pageSize);
								_this.dialogcurrentPage = res.attributes.number || 1;
								let data = res.data || [];
								for (let i in data) {
									_this.detaildataModel.push(data[i])
								}
							}
						},
						p: () => {
						},
						error: e => {
							_this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！')
						}
					})
                    // this.$http.get(this.dialogUrl,URLCONFIG).then((res) => {
                    //     if(res.data.state === 0 && res.data.data){
                    //         _this.dialogtotal = res.data.attributes.total || 10;
                    //         _this.dialogpageSize = res.data.attributes.size || 50;
                    //         _this.dialogpageCount = Math.ceil(this.total / this.pageSize);
                    //         _this.dialogcurrentPage = res.data.attributes.number || 1;
                    //         let data = res.data.data || [];
                    //         for (let i in data) {
                    //             _this.detaildataModel.push(data[i])
                    //         }
                    //     }
                    // }).catch((e)=>{
                    //     _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！')
                    // });
                }
                
                
            },
            dodialogCurrentChange(v){
                
                let total = this.dialogtotal;
                let pageSize = 50;
                let pageCount = this.dialogpageCount;
                this.currentPage = v;
                this.detaildataModel = [];
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
						_this.dialogtotal = res.attributes.total || 10;
						_this.dialogpageSize = res.attributes.size || 50;
						_this.dialogpageCount = Math.ceil(this.total / this.pageSize);
						_this.dialogcurrentPage = res.attributes.number || 1;
						let tableDate = res.data ||  [];
						for (let i in tableDate) {
							_this.detaildataModel.push(tableDate[i])
						}
					},
					p: () => {
					},
					error: e => {
						_this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
					}
				})
                // this.$http.get(this.tableUrl, URLCONFIG).then((res) => {
                //     _this.dialogtotal = res.data.attributes.total || 10;
                //     _this.dialogpageSize = res.data.attributes.size || 50;
                //     _this.dialogpageCount = Math.ceil(this.total / this.pageSize);
                //     _this.dialogcurrentPage = res.data.attributes.number || 1;
                //     let tableDate = res.data.data ||  [];
                //     for (let i in tableDate) {
                //         _this.detaildataModel.push(tableDate[i])
                //     }
                //
                // }).catch((e)=>{
                //
                //     _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
                // })
            },
            //玩法开启
//            changeCheckbox(event,index,key1,key2){
//                let e = window.event|| event;
//                let obj = e.srcElement ? e.srcElement: e.target;
//                let str = this.detaildataModel[index][key2] || "";
//                let list = str.split(",");
//                let val = this.dataModel[index][key1];
//                for(let k in list){
//                    if(list[k] == "enabled" && !val){
//                        list[k] = "";
//                    }
//                    if(list[k] == "" && val){
//                        list[k] = "enabled";
//                    }
//                }
//                this.dataModel[index][key2] = list.toString();
//            }
        },
        created: function () {
            this.init();
            let _this = this;
            Bus.$on('form_query_lottery',function(v){
                if(v){
                    _this.init();
                }
            })

        }
    }
</script>
<style scoped>
    #modelSet{}
    .cell{
        text-align: center;
    }
    .cell input{
        display:none
    }
    .cell span{
        display: block;
        width: 100%;
        height: 100%
    }
    .cell .sub{
        display: block;
        width: 50%;
        float: left;
    }
    .sub_color{
        color:#20a0ff;
        cursor: pointer;
    }

    #modelSet .pagemar{
        margin-top: 20px;
        margin-bottom: 10px;
    }
</style>
