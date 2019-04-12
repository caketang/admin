<template>
	<div id="liveNote">
        <div class="search">
            <formEdit
                        :formVisible="formVisible"
                        :formConfig="searchConfig"
                        :type="type"
                        :labelWidth="labelWidth"
                        :isEdit="isEdit"
                        @do-query="doQuery"
                        @reset-form="resetForm"
                        :showAdd="false"></formEdit>
        </div>
        <el-col :span="24">
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="false"
                    :pageSet="true"
                    :updayed="updated"
                    :tableIndex="false"
                    :autoshowRefresh="showRefresh"
                    :showExport="false"
                    :getData="true"
                    @get-table-data="getTableData"
                    @do-handle="doHandle"
                   >
                <tr slot="other" v-if="tableLength > 0">
                    <td colspan="10"><div class="cell">{{LANG['小计'] || '小计'}}</div></td>
                    <td><div class="cell">{{subTotalMoney.sub_pay_money}}</div></td>
                    <td><div class="cell">{{subTotalMoney.sub_valid_money}}</div></td>
                    <td colspan=""><div class="cell">{{subTotalMoney.sub_win_loss}}</div></td>
                </tr>
                <tr slot="other" v-if="tableLength > 0">
                    <td colspan="10" ><div class="cell">{{LANG['总计'] || '总计'}}</div></td>
                    <td><div class="cell">{{totalMoney.total_pay_money}}</div></td>
                    <td><div class="cell">{{totalMoney.total_valid_money}}</div></td>
                    <td colspan=""><div class="cell">{{totalMoney.total_win_loss}}</div></td>
                </tr>
            </tablegrid>
        </el-col>
        <!-- <detailsBet :dialogVisible="Visible" :dataModel="dataModel"></detailsBet> -->
    </div>
</template>
<script>
    import formEdit from '../../components/formEdit.vue'
    import tableGrid from '../../components/tableGrid.vue'
    /*import details from '../../components/detailsOfBets.vue'*/
	export default{
      	data(){
            return {
                showRefresh:false,
                activeName: '0',
                dataModel:{result: 0},
                LANG,
                formVisible:{
                    state: false
                },
                Visible: {
                    state:false
                },
                searchConfig: [
                    {"type":"quickDate","showTimes": true},//快捷日期
                    {"prop": "game_hall_id", "value": "", "type": "select", "label": "厅类",
                     "list":[{"label":"全部","value": ""},{"label":"旗舰厅", "value": 0},{"label":"贵宾厅", "value": 1},{"label":"金臂厅","value": 2},{"label":"至尊厅","value": 3},]},
                    {"prop": "game_id", "value": "", "type": "select", "label": "视讯名称", "list":[]},
                    {"prop": "user_name", "value": "", "type": "text", "label": "会员帐号","placeholder":"输入会员帐号"},
                    // {"prop": "tableId", "value": "", "type": "text", "label": "桌号", "placeholder":"请输入桌号"},
                   /* {"prop": "game_id", "value": "", "type": "text", "label": "游戏ID", "placeholder":"请输入游戏ID"},  */
                    {"prop": "period", "value": "", "type": "text", "label": "场次（靴局）", "placeholder":"请输入场次"},
                    {"prop": "order_number", "value": "", "type": "text", "label": "注单号", "placeholder":"请输入注单号"},
                    {"type":"dateTimeGroup","label":"起始时间","prop":[{"prop":"start_time","value":"","label":"开始时间"},{"prop":"end_time","value":"","label":"结束时间"}]},
                   /* {"prop": "status", "value": "", "type": "select", "label": "状态","list":[{"label":"已结算", "value": 1},{"label":"未清算", "value": 3}]}, 暂时查不到*/
                ],

                type: 'search',
                isEdit: {  state: false},
                labelWidth: "100px",
                columnsUrl:'',
                baseUrl: '',
                tableUrl:'',
                updated:false,
                // 小计
                subTotalMoney: {
                    sub_valid_money: 0,
                    sub_win_loss: 0,
                    sub_pay_money: 0
                },
                totalMoney: {
                    total_valid_money: 0,
                    total_win_loss: 0,
                    total_pay_money: 0
                },
                tableLength: 0
            }
        },
        components:{
            tablegrid: tableGrid,
            formEdit: formEdit,

        },
        computed:{},
        watch:{},
        methods:{
            init(){
                this.columnsUrl = '/static/json/Note/liveNote/columns.json';
                this.baseUrl = URL.api + ROUTES.GET.order.lebo;
                this.getVideoList();
            },
            //表格数据按钮
            doHandle(item) {
               switch (item.fn) {
                    case "openLive": // 用户名跳转
                        this.openLive(item.row)
                        break;
                    case "openMember":
                        this.openMember(item.row)
                        break;
                    default:
                        break;
                }
            },
            // 获取视讯名称
            getVideoList() {

				this.$.autoAjax('get',URL.api + '/games/list?category=1', '', {
					ok: (res) => {
						if (res.state == 0) {
							// 清空列表防止重复
							this.searchConfig[2]['list'] = [{ label: '全部', value: ''}];
							for (let i of res.data) {
								// 匹配游戏视讯
								if (i['name'] === 'LEBO') {
									let model = i['category']['LEBO']
									for (let j in model) {
										this.searchConfig[2]['list'].push({
											"label": model[j],
											"value": j
										});
									}
								}
							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
            },
            openMember(obj) {
                this.$router.push({path: "/memberManagement",query:{name: obj.user_name}});
            },
            openLive(obj) {
                this.Visible.state = true;
                this.dataModel = obj;
            },

            doQuery(obj) {
                if(!this.showRefresh){
                    this.showRefresh = true;
                }
                this.tableUrl = this.baseUrl  +this.addSearch(obj.item);
            },
            resetForm() {
                if(this.showRefresh)
                {

                    this.tableUrl = this.baseUrl +"?game_hall_id="+this.activeName+"&start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
                }

            },
            // 获取总计小计
            getTableData(obj) {
                this.tableLength = 0;
                this.subTotalMoney = {sub_pay_money: 0, sub_valid_money: 0, sub_win_loss: 0};
                this.totalMoney = { total_pay_money: 0, total_valid_money: 0, total_win_loss: 0};
                if(obj.allData && obj.allData.attributes != null){
                    this.tableLength = parseInt(obj.allData.attributes.total);
                }else{
                    this.tableLength = 0;
                }
                if(obj.allData && obj.allData.data && obj.allData.data.subCount){
                    this.subTotalMoney.sub_pay_money = FORMATMONEY(obj.allData.data.subCount.sub_pay_money);
                    this.subTotalMoney.sub_valid_money = FORMATMONEY(obj.allData.data.subCount.sub_valid_money);
                    this.subTotalMoney.sub_win_loss = FORMATMONEY(obj.allData.data.subCount.sub_win_loss);
                }
                if(obj.allData && obj.allData.data && obj.allData.data.count){
                    this.totalMoney.total_pay_money = FORMATMONEY(obj.allData.data.count.total_pay_money);
                    this.totalMoney.total_valid_money = FORMATMONEY(obj.allData.data.count.total_valid_money);
                    this.totalMoney.total_win_loss = FORMATMONEY(obj.allData.data.count.total_win_loss);
                }
            }
        },
        mounted(){

        },
        created(){
            this.init();
        }
    }
</script>
<style scoped>
    .leftcontent{
        line-height: 36px;
        margin-left:60px;
    }
    .rightcontent{
        line-height: 36px;
        float: right;
        margin-right:60px
    }
    .text {

        font-size: 14px;
    }

    .item {
        padding: 9px 0;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>
