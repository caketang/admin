<template>
	<div id="MarkSixQuery">
		<el-row>
			<el-col :span="24">
			 	<formEdit
	            :formVisible="editVisible"
	            :formConfig="userConfig"
	            :type="searchType"
	            :isEdit="isEdit"
	           	:labelWidth="labelWidth"
	            @do-query="doQuery"
           	 	@reset-form="resetForm"
				:updateKeys="updateKeys"
	            :showAdd="false">
        		</formEdit>
			</el-col>
        </el-row>
        <el-row type="flex" justify="space-between" class="pb">
        	<el-col :span="3">
        		<span class="font16">{{LANG['六合彩'] || '六合彩'}}</span>
        	</el-col>
        	<el-col :span="2">
    		 	<el-input v-model.number="money" placeholder="注单金额提醒"   size="small"></el-input>
        	</el-col>
        </el-row>
      	<el-row>
        	<el-col :span="24">
        		<table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header el-table--border" style="width: 100%;">
		        	<thead>
		                <tr>
		                    <th colspan="2" rowspan="3" class="el-table_1_column_36 is-leaf">
		                        <div class="cell tCent" v-text="LANG['号码'] || '号码'"></div>
		                    </th>
		                    <th colspan="2" rowspan="3" class="el-table_1_column_36 is-leaf">
		                        <div class="cell tCent"  v-text="LANG['注单数'] || '注单数'"></div>
		                    <th colspan="2" rowspan="3" class="el-table_1_column_36 is-leaf">
		                        <div class="cell tCent"  v-text="LANG['注单金额'] || '注单金额'"></div>
		                    </th>
		                    <th colspan="2" rowspan="3" class="el-table_1_column_36 is-leaf">
		                        <div class="cell tCent"  v-text="LANG['输赢'] || '输赢'"></div>
		                    </th>
		                </tr>
		            </thead>
		            <tr v-for="(item,index) in dataModel" v-if="dataModel.length">
		                <td colspan="2" class="el-table_1_column_19" :class="{warning: item.count > money*100 && money != '' }">
		                    <div class="cell tCent" >
		                        <span>{{item.result}}</span>
		                    </div>
		                </td>
		                <td colspan="2" class="el-table_1_column_19" :class="{warning: item.count > money*100 && money != ''}">
	                    	<div class="cell tCent">
	                    	   <span class="sub" :class="{link: item.A >0 }"@click="openDetails(item)">{{item.num}}</span>
	                        </div>
		                </td>
		                <td colspan="2" class="el-table_1_column_19" :class="{warning: item.count > money*100 && money != ''}">
	                   		<div class="cell tCent">
	                    	   <span class="sub">{{item.count | formatMoney}}</span>
	                        </div>
		                </td>
		                <td colspan="2" class="el-table_1_column_19" :class="{warning: item.count > money*100 && money != ''}">
	                   		<div class="cell tCent">
	                    	   <span class="sub">{{item.lose_earn | formatMoney}}</span>
	                        </div>
		                </td>
		            </tr>
					<tr v-if="dataModel.length>0" >
						<td colspan="2" class="el-table_1_column_19" >
							<div class="cell tCent">
								<span class="sub">{{LANG['合计'] || '合计'}}:</span>
							</div>
						</td>
						<td colspan="2" class="el-table_1_column_19" >
							<div class="cell tCent">
								<span class="sub">{{sumObj.total_num}}</span>
							</div>
						</td>
						<td colspan="2" class="el-table_1_column_19" >
							<div class="cell tCent">
								<span class="sub">{{sumObj.total_count | formatMoney}}</span>
							</div>
						</td>
						<td colspan="2" class="el-table_1_column_19" >
							<div class="cell tCent">
								<span class="sub">{{sumObj.total_lose_earn | formatMoney}}</span>
							</div>
						</td>
					</tr>
		            <tr v-if="dataModel.length == 0" style="text-align:center;height: 100px;">
		                <td colspan="8">暂无数据</td>
		            </tr>
        		</table>
        	</el-col>
        </el-row>
        <el-dialog
		  	:title="message"
  			:visible.sync="dialogVisible"
		  	size="small"
		  	>
			<span>{{LANG['六合彩'] || '六合彩'}} [{{odds_type}} : {{nowNumber}} ] {{LANG['下注明細'] || '下注明細'}}</span>
		  		<table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header el-table--border mt10" style="width: 100%;">
		        	<thead>
		                <tr>
		                    <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
		                        <div class="cell tCent" v-text="LANG['序号'] || '序号'"></div>
		                    </th>
		                    <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
		                        <div class="cell tCent"  v-text="LANG['订单号'] || '订单号'"></div>
		                    <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
		                        <div class="cell tCent"  v-text="LANG['下单时间'] || '下单时间'"></div>
		                    </th>
		                    <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
		                        <div class="cell tCent"  v-text="LANG['期数'] || '期数'"></div>
		                    </th>
		                    <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
		                        <div class="cell tCent"  v-text="LANG['会员'] || '会员'"></div>
		                    </th>
		                    <th colspan="3" rowspan="1" class="el-table_1_column_36 is-leaf">
		                        <div class="cell tCent"  v-text="LANG['下注总额'] || '下注总额'"></div>
		                    </th>
		                    <th colspan="3" rowspan="1" class="el-table_1_column_36 is-leaf">
		                        <div class="cell tCent"  v-text="LANG['下注内容'] || '下注内容'"></div>
		                    </th>
		                </tr>
		            </thead>
		            <tr v-for="(item,index) in dialogModel" v-if="dialogModel.length">
		                <td colspan="2" class="el-table_1_column_19" :class="{warning: item.count > money*100 && money != ''}">
		                    <div class="cell tCent" >
		                        <span>{{item.A}}</span>
		                    </div>
		                </td>
		                <td colspan="2" class="el-table_1_column_19" :class="{warning: item.count > money*100 && money != ''}">
	                    	<div class="cell tCent">
	                    	   <span class="sub" :class="{link: item.A >0 }"@click="openDetails">{{item.A}}</span>
	                        </div>
		                </td>
		                <td colspan="2" class="el-table_1_column_19" :class="{warning: item.count > money*100 && money != ''}">
	                   		<div class="cell tCent">
	                    	   <span class="sub">{{item.B}}</span>
	                        </div>
		                </td>
		                <td colspan="2" class="el-table_1_column_19" :class="{warning: item.count > money*100 && money != ''}">
	                   		<div class="cell tCent">
	                    	   <span class="sub">{{item.C}}</span>
	                        </div>
		                </td>
		                 <td colspan="2" class="el-table_1_column_19" :class="{warning: item.count > money*100 && money != ''}">
	                   		<div class="cell tCent">
	                    	   <span class="sub">{{item.C}}</span>
	                        </div>
		                </td>
		                 <td colspan="3" class="el-table_1_column_19" :class="{warning: item.count > money*100 && money != ''}">
	                   		<div class="cell tCent">
	                    	   <span class="sub">{{item.C}}</span>
	                        </div>
		                </td>
		                 <td colspan="3" class="el-table_1_column_19" :class="{warning: item.count > money*100 && money != ''}">
	                   		<div class="cell tCent">
	                    	   <span class="sub">{{item.C}}</span>
	                        </div>
		                </td>
		            </tr>
        		</table>
			<el-col v-if="dialogModel.length == 0"
					style="line-height: 100px;text-align: center;background-color: #ffffff;">
				<div class="dell">{{LANG['暂无数据'] || '暂无数据'}}</div>
			</el-col>
		</el-dialog>

    </div>
</template>
<script>
	import formEdit from '../../components/formEdit.vue'
	export default{
      	data(){
            return {
            	dataModel: [],
				sumObj: {},
                odds_type: "",
            	dialogModel: [],
            	LANG,
            	editVisible:{
            		state: false,
            	},
            	userConfig:[{"prop":"user_name","value":"","type":"text","label":"会员帐号","placeholder":"输入会员帐号"},
                    {"prop":"lottery_number","value":"","type":"text","label":"期数"},],
            	searchType: 'search',
            	isEdit:{
            		state: false,
            	},
            	labelWidth:'90px',
            	money: '',
            	dialogVisible: false,
            	message:'',
				// 搜索栏数据修改
                updateKeys: "",
				// 期号
				lotteryNum: "",
                lotteryMember: "",
				nowNumber: ""
            }
        },
        components:{
        	formEdit,
        },
        computed:{},
        watch:{},
        methods:{
        	init(){
        	    this.dataModel.splice(0,this.dataModel.length);
        	    this.sumObj = {};
        	    let sumObj = this.sumObj;
        	    let dataModel= this.dataModel;
                this.updateKeys = '';
        	    let _this = this;

				this.$.autoAjax('get',URL.api+ROUTES.GET.order.six, '', {
					ok: (res) => {
						console.log(res)
						if(res.state == 0 && res.data){
							sumObj.total_count = res.attributes.total_count || 0;
							sumObj.total_lose_earn = res.attributes.total_lose_earn || 0;
							sumObj.total_num = res.attributes.total_num || 0;
							_this.lotteryNum = res.data.period;
							_this.updateKeys = "lottery_number," + (res.data.period || '');
							let model = res.data || [];
							_this.odds_type = model[0].odds_type;
							model.forEach((v)=>{
								dataModel.push(v);
							})
						}else if(res.data.state === 4004){
							_this.$message.error(LANG['当前期号未生成或缺失！'] || '当前期号未生成或缺失！');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})

//         		this.$http.get(URL.api+ROUTES.GET.order.six,URLCONFIG).then((res) =>{ // 获取彩期
//                     console.log(res)
//         			if(res.data.state == 0 && res.data.data){
//                         sumObj.total_count = res.data.attributes.total_count || 0;
//                         sumObj.total_lose_earn = res.data.attributes.total_lose_earn || 0;
//                         sumObj.total_num = res.data.attributes.total_num || 0;
//                         _this.lotteryNum = res.data.data.period;
//                         _this.updateKeys = "lottery_number," + (res.data.data.period || '');
//         			    let model = res.data.data || [];
//                         _this.odds_type = model[0].odds_type;
//                         model.forEach((v)=>{
//                             dataModel.push(v);
// 						})
//         			}else if(res.data.state === 4004){
//                         _this.$message.error(LANG['当前期号未生成或缺失！'] || '当前期号未生成或缺失！');
// 					}
//         		}).catch((e)=>{
// //        		    console.log(e);
// 				})
        	},
        	openDetails(obj){
        	    this.dialogModel.splice(0,this.dialogModel.length);
        	    let dialogModel = this.dialogModel;
        	    let _this = this;
                let temp = "?";
                if(this.lotteryNum){
                    temp = temp + "lottery_number=" + this.lotteryNum;
                    if(this.lotteryMember){
                        temp= temp + "&user_name=" + this.lotteryMember;
                    }
                }else{
                    temp= temp + "user_name=" + this.lotteryMember;
                }
                temp = temp + "&base_id=" + obj.base_id;


				this.$.autoAjax('get', URL.api+ROUTES.GET.order.six + ".detail" + temp, '', {
					ok: (res) => {
						if(res.state == 0 && res.data){
							let model = res.data|| [];
							model.forEach((v)=>{
								dialogModel.push(v);
							})
						}else if(res.state === 4004){
							_this.$message.error(LANG['未找到相关数据！'] || '未找到相关数据！');
						}
						_this.dialogVisible = true;
						_this.nowNumber = obj.result;
						_this.message = (LANG["彩期"] || '彩期') + this.lotteryNum + '- ' +  (LANG["明细"] || '明细');
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
//                 this.$http.get(URL.api+ROUTES.GET.order.six + ".detail" + temp,URLCONFIG).then((res) =>{ // 获取彩期
//                     if(res.data.state == 0 && res.data.data){
//                         let model = res.data.data|| [];
//                         model.forEach((v)=>{
//                             dialogModel.push(v);
//                         })
//                     }else if(res.data.state === 4004){
//                         _this.$message.error(LANG['未找到相关数据！'] || '未找到相关数据！');
//                     }
//                     _this.dialogVisible = true;
//                     _this.nowNumber = obj.result;
//                     _this.message = (LANG["彩期"] || '彩期') + this.lotteryNum + '- ' +  (LANG["明细"] || '明细');
//                 }).catch((e)=>{
// //                    console.log(e);
//                 })
        	},
        	doQuery(obj){
        	    this.lotteryNum = obj.item.lottery_number || '';
        	    this.lotteryMember = obj.item.user_name || '';
        	    let temp = "?";
        	    if(this.lotteryNum){
                    temp = temp + "lottery_number=" + this.lotteryNum;
                    if(this.lotteryMember){
                        temp= temp + "&user_name=" + this.lotteryMember;
					}
				}else{
                    temp= temp + "user_name=" + this.lotteryMember;
				}
                this.dataModel.splice(0,this.dataModel.length);
                this.sumObj = {};
                let sumObj = this.sumObj;
                let dataModel= this.dataModel;
                let _this = this;

				this.$.autoAjax('get',URL.api+ROUTES.GET.order.six + temp, '', {
					ok: (res) => {
						if(res.state == 0 && res.data){
							sumObj.total_count = res.data.total_count || 0;
							sumObj.total_lose_earn = res.data.total_lose_earn || 0;
							sumObj.total_num = res.data.total_num || 0;
							_this.lotteryNum = res.data.period;
							_this.updateKeys = "lottery_number," + res.data.period;
							let model = res.data || [];
							model.forEach((v)=>{
								dataModel.push(v);
							})
						}else if(res.state === 4004){
							_this.$message.error(LANG['当前期号未生成或缺失！'] || '当前期号未生成或缺失！');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
//                 this.$http(URL.api+ROUTES.GET.order.six + temp,URLCONFIG).then((res) =>{ // 获取彩期
//                     if(res.data.state == 0 && res.data.data){
//                         sumObj.total_count = res.data.data.total_count || 0;
//                         sumObj.total_lose_earn = res.data.data.total_lose_earn || 0;
//                         sumObj.total_num = res.data.data.total_num || 0;
//                         _this.lotteryNum = res.data.data.period;
//                         _this.updateKeys = "lottery_number," + res.data.data.period;
//                         let model = res.data.data || [];
//                         model.forEach((v)=>{
//                             dataModel.push(v);
//                         })
//                     }else if(res.data.state === 4004){
//                         _this.$message.error(LANG['当前期号未生成或缺失！'] || '当前期号未生成或缺失！');
//                     }
//                 }).catch((e)=>{
// //                    console.log(e);
//                 })
			},
        	resetForm(){},
        },
        mounted(){},
        created(){
        	this.init();
        },
        activated()
        {
            this.updateKeys = -1;
            this.init();
        }
    }
</script>
<style scoped>
	#MarkSixQuery .warning{
	 	background-color: #FFCC99;
        border-color: #FFCC99;
	}
	.link{
		color:#20A0FF;
	}
</style>
