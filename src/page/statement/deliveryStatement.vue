<template>
    <div id="deliveryStatement">
        <el-row class="deliveryStatement_main">
            <el-col :span="24" class="deliveryStatement_searchForm">
                <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="'search'"
                          :labelWidth="labelWidth"
                          :isEdit="isEdit" @do-query="doQuery" @reset-form="resetForm" :showAdd="false"></formEdit>
            </el-col>
            <el-col :span="24">
                    <div class=" deliveryStatement_title">
                        <!--<h3><span>debug</span> 厅主</h3>&lt;!&ndash;（注：当前显示，实际是获取数据显示，无数据会不显示)&ndash;&gt;-->
                    </div>
                    <tablegrid
                            :columnsUrl="columnsUrl"
                            :tableUrl="tableUrl"
                            :tableCheck="false"
                            :pageSet="false"
                            :tableIndex="false"
                            :getData="true"
                            @do-handle="doHandle"
                            >
                    </tablegrid>
            </el-col>
        </el-row>

    </div>
</template>
<script>
	import tableGrid from '../../components/tableGrid.vue'
	import formEdit from '../../components/formEdit.vue'

	export default {
		data() {
			return {
				LANG,
				//表格列数据
				columnsUrl: "",
				//表格数据
				tableUrl: "",
				//重置数据url
				baseUrl: "",
				//搜索相关
				searchConfig: [
					{
						"prop": "period_number", "value": "", "label": "期数", "type": "select", "placeholder": "选择期数",
						"list": []
					},
					{
						"prop": "status", "value": "", "label": "状态", "type": "select", "placeholder": "请选择状态",
						"list": [
							{"label": "全部", "value": "all"},
							{"label": "未付款", "value": "pending"},
							{"label": "已付款", "value": "paid"},//，all全部 pending未付款 paid已付款"
						]
					},
				],

				type: "search",
				labelWidth: "90px",
				formVisible: {
					state: false
				},
				//是否编辑数据
				isEdit: {
					state: false
				},
			}

		},
		components: {
			tablegrid: tableGrid,
			formEdit: formEdit,
		},

		methods: {
			init() {
				this.columnsUrl = "static/json/statement/deliveryStatement/columns.json";
				//表格数据
				this.tableUrl = URL.api + ROUTES.GET.system.settlement;
				this.baseUrl = URL.api + ROUTES.GET.system.settlement;
				//获取期数列表
				let periodUrl = URL.api + '/system/website.settlement.period';

				this.$.autoAjax('get',periodUrl, '', {
					ok: (res) => {
						let mode = res.data;
						for (let i in mode) {
							this.searchConfig[0].list.push({
								'id': mode[i].id,
								'label': '第' + mode[i].number + '期',
								'value': mode[i].number
							})
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
				// this.$http.get(periodUrl, URLCONFIG).then((res) => {
				// 	let mode = res.data.data;
				// 	for (let i in mode) {
				// 		this.searchConfig[0].list.push({
                 //            'id': mode[i].id,
				// 			'label': '第' + mode[i].number + '期',
				// 			'value': mode[i].number
				// 		})
				// 	}
				// });
			},
			//执行查询
			doQuery(obj) {
				this.tableUrl = this.baseUrl + this.addSearch(obj.item);

			},
			resetForm() {
//				console.log('重置')
			},
			doHandle(item){
//				this.updated = false;
				switch (item.fn) {
					case "toDeliveDetail":
						this.toDeliveDetail(item.row);
						break;

				}
			},
			toDeliveDetail(row){
				this.$router.push({path:'/deliveryDetail',query:{period_number:row.period_number,id:row.id}})
            }
		},
		created() {
			this.init()
		},
		activated() {

		},

	}
</script>
<style lang="less" scoped>
    @bg-color: #fff;
    .deliveryTable #tables {
        width: 900px !important;
    }

    #deliveryStatement {
        .deliveryStatement_searchForm {
            box-sizing: border-box;
        }

        .deliveryStatement_title {
            h3 {
                padding-left: 15px;
            }

        }
    }
</style>