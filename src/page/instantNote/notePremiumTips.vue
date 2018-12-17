<template>
	<div id="PremiumTips">
		<el-row>
			<el-col :span="24">
				<form-edit :formVisible="formVisibleSearch"
						   :formConfig="searchConfig"
						   :type="typeSearch"
						   :labelWidth="labelWidthSearch"
						   @do-query="doQuery"
						   :isEdit="isEditSearch"
						   @reset-form="resetForm"
						   :showAdd="false"
				></form-edit>
			</el-col>
		</el-row>

		<el-row>
			<el-col :span="24">
				<table-grid
					:columnsUrl="columnsUrl"
					:tableUrl="tableUrl"
					:tableCheck="false"
					:tableIndex="false"
					:showheadbtn="true"
					:updated="updated"
					@get-table-data="getTableData"
					:showRefresh="true"
					:getData="true"
					@do-handle="doHandle">
					<tr slot="other" v-if="tableLength > 0">
						<td colspan="7">
							<div class="cell">{{LANG['小计'] || '小计'}}</div>
						</td>
						<td>
							<div class="cell">{{subTotalMoney.total_money}}</div>
						</td>
					</tr>
					<tr slot="other" v-if="tableLength > 0 ">
						<td colspan="7">
							<div class="cell">{{LANG['总计'] || '总计'}}</div>
						</td>
						<td>
							<div class="cell">{{totalMoney.total_money}}</div>
						</td>
					</tr>
				</table-grid>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import formEdit from '../../components/formEdit.vue'
	import tableGrid from '../../components/tableGrid.vue'

	export default {
		data() {
			return {
				LANG,
				tableLength: 0,
				// 小计
				subTotalMoney: {},
				totalMoney: {},
				updated: false,
				columnsUrl: '',
				tableUrl: '',
				labelWidthSearch: "100px",
				typeSearch: "search",
				formVisibleSearch: {
					state: false
				},
				//搜索
				searchConfig: [
					{"type": "quickDate", "showTimes": true},//快捷日期
					{"prop": "user_name", "value": "", "type": "text", "label": "用户名"},
					{"prop": "order_activity_number", "value": "", "type": "text", "label": "订单号"},
					{
						"type": "dateTimeGroup",
						"label": "交易时间",
						"prop": [{"prop": "start_time", "value": "", "label": "开始时间"}, {
							"prop": "end_time",
							"value": "",
							"label": "结束时间"
						}]
					},
					{
						"prop": "game_name", "value": "", "label": "游戏", "type": "select",
						"list": []
					},
				],
				//是否编辑数据
				isEditSearch: {
					state: false
				},


			}
		},
		methods: {
			init() {
				this.tableUrl = URL.api + ROUTES.GET.order.activity + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
				this.baseUrl = URL.api + ROUTES.GET.order.activity;
				this.columnsUrl = '../../../static/json/Note/notepremiumtips/notepremiumtips.json'

				this.$.autoAjax('get', URL.api + ROUTES.GET.order.gamelist, '', {
					ok: (res) => {
						if (res.state === 0 && res.data) {
							for (let [val, item] of Object.entries(res.data)) {
								this.searchConfig[4].list.push({label: item, value: val})
							}
						} else {
							this.$message.error(LANG['获取游戏类型失败'] || '获取游戏类型失败');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
				// this.$http.get(URL.api + ROUTES.GET.order.gamelist, URLCONFIG).then((res) => {
				//     if(res.data.state === 0 && res.data.data)
				//     {
				//         for(let [val, item] of Object.entries(res.data.data))
				//         {
				//             this.searchConfig[4].list.push({label:item, value:val})
				//         }
				//     }else{
				//         this.$message.error(LANG['获取游戏类型失败']  || '获取游戏类型失败');
				//     }
				// })
			},
			getTableData(obj) {
				this.tableLength = 0;
				this.subTotalMoney = {total_money: 0};
				this.totalMoney = {total_money: 0};
				if (obj.allData && obj.allData.attributes != null) {
					this.tableLength = obj.allData.attributes.total;
				} else {
					this.tableLength = 0;
				}

				if (obj.allData && obj.allData.attributes) {
					this.subTotalMoney.total_money = FORMATMONEY(obj.allData.attributes.subTotalMoney.total_money);
					this.totalMoney.total_money = FORMATMONEY(obj.allData.attributes.totalMoney.total_money);
				}
			},
			doQuery(obj) {
				this.tableUrl = this.baseUrl + this.addSearch(obj.item);
			},
			resetForm() {
				this.tableUrl = this.baseUrl + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
			},
			doHandle() {
			},
		},
		components: {
			formEdit,
			tableGrid,
		},
		computed: {},
		watch: {},
		mounted() {
		},
		created() {
			this.init();
		}
	}
</script>
<style scopend>

</style>