<template>
	<div id="notesQuery" v-loading="loading">
		<!--二级分类-->
		<el-tabs v-model="activeNames" @tab-click="handleClick" v-if="categorys && categorys.length">
			<el-tab-pane v-for="item in categorys" :key="item.game_id" :label="item.game_name"
						 :name="item.game_short"></el-tab-pane>
		</el-tabs>
		<!--查询表单-->
		<formEdit v-if="formConfig && formConfig.length"
				  :formVisible="{state: false}"
				  :formConfig="formConfig"
				  :type="'search'"
				  :labelWidth="'90px'"
				  @do-query="doQuery"
				  :isEdit="{state:false}"
				  @reset-form="resetForm"
				  @get-select="getSelectLottery"
				  :showAdd="false"
				  :formReset="formReset"
				  :updateDate="updateDate"
				  :updateKeys="updateKeys"
		></formEdit>
		<!--表格内容-->
		<tablegrid
			:columnsUrl="columnsUrl"
			:tableUrl="tableUrl"
			:showExport="false"
			:times="times"
			@get-table-data="getTableData"
			:getData="true"
			@do-handle="doHandle">
			<tr slot="other" v-if="tableLength > 0 && (activeType === 'lottery' || activeType === 'fish')">
				<td :colspan="activeType === 'lottery' ? 9 : 6">
					<div class="cell">{{LANG['小计'] || '小计'}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.pay_money}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.valid_bet}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.send_prize}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.lose_earn}}</div>
				</td>

			</tr>
			<tr slot="other" v-if="tableLength > 0 && (activeType === 'lottery' || activeType === 'fish')">
				<td :colspan="activeType === 'lottery' ? 9 : 6">
					<div class="cell">{{LANG['总计'] || '总计'}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.pay_money}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.valid_bet}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.send_prize}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.lose_earn}}</div>
				</td>

			</tr>
			<tr slot="other" v-if="tableLength > 0 && activeType === 'live'">
				<td colspan="6">
					<div class="cell">{{LANG['小计'] || '小计'}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.pay_money}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.valid_bet}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.lose_earn}}</div>
				</td>

			</tr>
			<tr slot="other" v-if="tableLength > 0 && activeType === 'live'">
				<td colspan="6">
					<div class="cell">{{LANG['总计'] || '总计'}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.pay_money}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.valid_bet}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.lose_earn}}</div>
				</td>

			</tr>
			<tr slot="other" v-if="tableLength > 0 && activeType === 'egame' && activeNames === 'PT'">
				<td colspan="8">
					<div class="cell">{{LANG['小计'] || '小计'}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.pay_money}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.send_prize}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.jp_contri_subtotal}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.jackpot_bonus_subtotal}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.dollar_ball_bets_subtotal}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.prize_us_subtotal}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.contri_us_subtotal}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.db_jp_subtotal}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.valid_bet}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.lose_earn}}</div>
				</td>
			</tr>
			<tr slot="other" v-if="tableLength > 0 && activeType === 'egame' && activeNames === 'PT'">
				<td colspan="8">
					<div class="cell">{{LANG['总计'] || '总计'}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.pay_money}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.send_prize}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.jp_contri_total}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.jackpot_bonus_total}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.dollar_ball_bets_total}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.prize_us_total}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.contri_us_total}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.db_jp_total}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.valid_bet}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.lose_earn}}</div>
				</td>

			</tr>
			<tr slot="other"
				v-if="tableLength > 0 && activeType === 'egame' && (activeNames == 'MG' || activeNames == 'MW')">

				<td :colspan="7">
					<div class="cell">{{LANG['小-计'] || '小-计'}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.pay_money}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.valid_bet}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.jp_contri_subtotal}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.send_prize}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.lose_earn}}</div>
				</td>

			</tr>
			<tr slot="other"
				v-if="tableLength > 0 && activeType === 'egame' && (activeNames == 'MG' || activeNames == 'MW')">
				<td colspan="7">
					<div class="cell">{{LANG['总-计'] || '总-计'}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.pay_money}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.valid_bet}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.jp_contri_total}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.send_prize}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.lose_earn}}</div>
				</td>
			</tr>
			<tr slot="other"
				v-if="tableLength > 0 && activeType === 'egame' && (activeNames == 'CQ9' || activeNames == 'GNS' || activeNames == 'HB')">
				<td colspan="7">
					<div class="cell">{{LANG['小-计'] || '小-计'}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.pay_money}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.valid_bet}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.send_prize}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.lose_earn}}</div>
				</td>
			</tr>
			<tr slot="other"
				v-if="tableLength > 0 && activeType === 'egame' && (activeNames == 'CQ9' || activeNames == 'GNS' || activeNames == 'HB')">
				<td colspan="7">
					<div class="cell">{{LANG['总-计'] || '总-计'}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.pay_money}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.valid_bet}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.send_prize}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.lose_earn}}</div>
				</td>
			</tr>
			<tr slot="other"
				v-if="tableLength > 0 && activeType === 'egame' && (activeNames == 'FG' || activeNames == 'JDB')">
				<td colspan="7">
					<div class="cell">{{LANG['小计'] || '小计'}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.pay_money}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.send_prize}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.jackpot_bonus_subtotal}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.jp_contri_subtotal}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.valid_bet}}</div>
				</td>
				<td>
					<div class="cell">{{subTotalMoney.lose_earn}}</div>
				</td>

			</tr>
			<tr slot="other"
				v-if="tableLength > 0 && activeType === 'egame' && (activeNames == 'FG' || activeNames == 'JDB')">
				<td colspan="7">
					<div class="cell">{{LANG['总计'] || '总计'}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.pay_money}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.send_prize}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.jackpot_bonus_total}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.jp_contri_total}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.valid_bet}}</div>
				</td>
				<td>
					<div class="cell">{{totalMoney.lose_earn}}</div>
				</td>
			</tr>
		</tablegrid>
	</div>
</template>
<script>
	import formEdit from './formEdit.vue';
	import tablegrid from './tableGrid.vue';

	export default {
		data() {
			return {
				LANG,
				// 表单相关
				updateDate: '',
				updateKeys: '',
				tableUrl: '',
				// 二级分类
				activeNames: '',
				times: 30,
				nowActiveType: '',
				loading: false,
				// 表格相关
				baseUrl: '',
				columnsUrl: '',
				subTotalMoney: {},
				totalMoney: {},
				tableLength: 0,
				egamecol: 0,
				num: 0,
				formReset: false
			}
		},
		props: {

			// 表单相关
			formConfig: Array,
			// 二级分类
			categorys: Array,
			activeType: {
				type: String,
				default: 'lottery'
			}
		},
		methods: {
			init(newval) {
				this.loading = true;
				let list = []
				//获取彩票名称
				this.$.autoAjax('get',URL.api + ROUTES.GET.lottery.types.$, '', {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							let model = res.data || []
							for (let k in model) {
								if (model[k].pid !== 0 && model[k].is_standard === '1') {
									list.push({
										"label": model[k]['name'],
										"value": model[k]['id']
									});
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
				// this.$http.get(URL.api + ROUTES.GET.lottery.types.$, URLCONFIG).then(function (res) {
				// 	if (res.data.state == 0 && res.data.data) {
				// 		let model = res.data.data || []
				// 		for (let k in model) {
				// 			if (model[k].pid !== 0 && model[k].is_standard === '1') {
				// 				list.push({
				// 					"label": model[k]['name'],
				// 					"value": model[k]['id']
				// 				});
				// 			}
				// 		}
				// 	}
				// });
				setTimeout(() => {
					let nowquery, updateKeys;
					let query = this.$route.query;
					if (JSON.stringify(this.$route.query) == '{}' || !this.$route.query.start_time) {
						nowquery = '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd;
					} else {
						nowquery = this.getRouteQuery();
					}
					let game_tye = this.$route.query.game_type;
					if (this.categorys.length) {
						for (let i = 0; i < this.categorys.length; i++) {
							if (this.categorys[i].game_id == game_tye) {
								this.activeNames = this.categorys[i].game_short;
								this.nowActiveType = this.categorys[i].game_type;
								this.getDefaultCategorys(this.categorys[i].game_type, newval, nowquery);
							}
						}
					} else {
						this.activeNames = 'lottery';
						this.nowActiveType = 'lottery';
						this.getDefaultCategorys('lottery', newval, nowquery);
					}
					if (this.activeType != this.nowActiveType) {
						updateKeys = 'user_name,,';
					}
					this.updateKeys = updateKeys;
					this.loading = false;
					this.formConfig[4].list = list;
				}, 2000);
			},
			// 处理默认二级分类值
			getDefaultCategorys(type, newval, nowquery) {
				this.formReset = false;
				if (!type) {
					return;
				}
				this.activeNames = '';
				setTimeout(() => {
					this.formReset = true;
				}, 800)
				this.baseUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[type] && NOTESQUERYCONFIG[type]['baseUrl'] || '';
				switch (type) {
					case 'lottery':
						this.columnsUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[type] && NOTESQUERYCONFIG[type]['columnsUrls']['lottery'] || '';
						this.tableUrl = (newval ? newval : this.baseUrl) + nowquery;
						break;
					case 'live':
						this.activeNames = this.activeNames || 'LEBO';
						this.columnsUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[type] && NOTESQUERYCONFIG[type]['columnsUrls'][this.activeNames] || '';
						this.tableUrl = (newval ? newval : this.baseUrl) + nowquery + '&type_name=' + this.activeNames + '&order_type=2';
						break;
					case 'egame':
						this.activeNames = this.activeNames || 'YOPLAY';
						this.columnsUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[type] && NOTESQUERYCONFIG[type]['columnsUrls'][this.activeNames] || '';
						this.tableUrl = (newval ? newval : this.baseUrl) + nowquery + '&type_name=' + this.activeNames + '&order_type=1';
						break;
//                    case 'fish':
//                        this.activeNames = this.activeNames || 'BG';
//                        this.columnsUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[type] && NOTESQUERYCONFIG[type]['columnsUrls'][this.activeNames] || '';
//                        this.tableUrl = (newval ? newval: this.baseUrl)  + nowquery + '&type_name=' + this.activeNames;
//                        break;
				}
			},
			// 处理查询参数
			getRouteQuery() {
				let nowquery = '?', name, s_time, e_time;
				if (JSON.stringify(this.$route.query) != '{}') {
					let query = this.$route.query;
					name = query.user_name || '';
					s_time = query.start_time || '';
					e_time = query.end_time || '';
					if (name) {
						nowquery += 'user_name=' + name;
					}
					if (s_time) {
						if (nowquery.length > 5) {
							nowquery += '&start_time=' + s_time;
						} else {
							nowquery += 'start_time=' + s_time;
						}

					}
					if (e_time) {
						if (nowquery.length > 5) {
							nowquery += '&end_time=' + e_time;
						} else {
							nowquery += 'end_time=' + e_time;
						}
					}
				}
				return nowquery;
			},
			// 表单查询
			doQuery(obj) {
				if (this.activeType === 'lottery') {
					this.tableUrl = this.baseUrl + this.addSearch(obj.item);
				} else if (this.activeType === 'fish') {
					this.tableUrl = this.baseUrl + this.addSearch(obj.item) + '&type_name=' + this.activeNames;
				} else {
					this.tableUrl = this.addSearch(obj.item)?this.baseUrl + this.addSearch(obj.item) + '&type_name=' + this.activeNames + '&order_type=' + (this.activeType === 'live' ? 2 : 1):
						this.baseUrl + '?type_name=' + this.activeNames + '&order_type=' + (this.activeType === 'live' ? 2 : 1);
//					this.tableUrl = this.baseUrl + this.addSearch(obj.item) + '&type_name=' + this.activeNames + '&order_type=' + (this.activeType === 'live' ? 2 : 1);
//					console.log(this.addSearch(obj.item))
				}
			},
			// 重置FORM
			resetForm() {
				if (this.activeType === 'lottery') {
					this.tableUrl = this.baseUrl + '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd;
				} else if (this.activeType === 'fish') {
					this.tableUrl = this.baseUrl + '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd + '&type_name=' + this.activeNames;
				} else {
					this.tableUrl = this.baseUrl + '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd + '&type_name=' + this.activeNames + '&order_type=' + (this.activeType === 'live' ? 2 : 1);
				}
			},
			// 表单关联查询
			getSelectLottery() {

			},
			// 获取表格数据
			getTableData(obj) {
				this.tableLength = 0;
				this.subTotalMoney = {};
				this.totalMoney = {};
				if (obj.allData && obj.allData.attributes) {
					this.tableLength = obj.allData.attributes.total;
					let attributes = obj.allData.attributes;
					if (attributes.subTotalMoney) {
						for (let k in attributes.subTotalMoney) {
							this.subTotalMoney[k] = FORMATMONEY(attributes.subTotalMoney[k]);
						}
					}
					if (attributes.totalMoney) {
						for (let i in attributes.totalMoney) {
							this.totalMoney[i] = FORMATMONEY(attributes.totalMoney[i]);
						}
					}
				}
			},
			// 表格点击事件
			doHandle(item) {
				switch (item.fn) {
					case "openMember":
						this.openMember(item.row)
						break;
					case "openAgent":
						this.openAgent(item.row)
						break;
				}
			},
			// 代理跳转
			openAgent(obj) {
				this.$router.push({path: "/agentAccount", query: {name: (obj.agent || obj.agent_name)}});
			},
			// 用户跳转
			openMember(obj) {
				this.$router.push({path: "/memberManagement", query: {name: obj.user_name}});
			},
			// 分类切换
			handleClick(type) {
//				console.log(type.name)
//				console.log(NOTESQUERYCONFIG)
//                this.columnsUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[this.activeType] && NOTESQUERYCONFIG[this.activeType]['baseUrl'] || '';
//                this.baseUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[this.activeType] && NOTESQUERYCONFIG[this.activeType]['baseUrl'] || '';
				this.updateKeys = '';
				setTimeout(() => {
					this.updateKeys = 'user_name,,order_number,,start_time,' + sessionStorage.dateTimeStart + ',end_time,' + sessionStorage.dateTimeEnd;
				})
				switch (this.activeType) {
					case 'live':
						this.tableUrl = this.baseUrl + '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd + '&type_name=' + type.name + '&order_type=2';
						break;
					case 'egame':
						this.columnsUrl = NOTESQUERYCONFIG && NOTESQUERYCONFIG[this.activeType] && NOTESQUERYCONFIG[this.activeType]['columnsUrls'][type.name] || '';
						this.tableUrl = this.baseUrl + '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd + '&type_name=' + type.name + '&order_type=1';
						break;
////                    case 'fish':
////                        this.tableUrl = this.baseUrl + '?start_time=' +sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd + '&type_name=' + type.name;
////                        break;
				}
			}
		},
		components: {
			formEdit: formEdit,
			tablegrid: tablegrid
		},
		computed: {},
		watch: {
			activeType: function (newval) {
				if (newval && this.nowActiveType && (newval != this.nowActiveType)) {
					let temp = '?start_time=' + sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd;
					this.getDefaultCategorys(newval, '', temp);
				} else if (this.nowActiveType) {
					this.init();
				}
			}
		},
		mounted() {
		},
		activated() {
			this.init();

		}
	}
</script>
