<template>
	<div id="memberRanking">
        <el-row>
            <el-col>
                <formEdit :formVisible="formVisible"
                          :formConfig="searchConfig"
                          :formType="formType"
                          :type="'search'"
                          :isEdit="isEdit"
                          :labelWidth="labelWidth"
                          @do-query="doQuery"
                          @reset-form="resetForm"
                          :showAdd="false">
                </formEdit>
            </el-col>
            <el-col>
                <tableGrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :updated="updated"
                    :getData="getData"
                    :isCreated="true"
                    @get-table-data="getTableData"
                    :tableCheck="false"
                    :pageSet="true"
                    :tableIndex="false"
                    @do-handle="doHandle">
                </tableGrid>
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
                formType: "search",
                searchConfig: [
                    {"type": "quickDate", "showTimes": true},//快捷日期
                    {
                        "type": "dateTimeGroup",
                        "label": "报表日期",
                        "showTime": false,
                        "prop": [
                            {"prop": "start_time", "value": "", "label": "开始时间"},
                            {"prop": "end_time", "value": "", "label": "结束时间"}
                        ]
                    },
                    {"prop": "name", "value": "", "label": "用户名", "type": "text", "placeholder": "请输入用户名"},
                ],
                type: "search",
                labelWidth: "120px",
                formVisible: {
                    state: false
                },
                isEdit: {},
                columnsUrl: '',
                tableUrl: '',
                updated: false,
                getData: true,
                sumShow: false,
                start_time: sessionStorage.dateTimeStart,
                end_time: sessionStorage.dateTimeEnd,
                childShow: true
            }
		},
		methods: {
			init() {
                this.tableUrl = URL.api + ROUTES.GET.state.player + this.addSearch({
                    start_time: sessionStorage.dateTimeStart,
                    end_time: sessionStorage.dateTimeEnd
                })
                this.beastUrl = URL.api + ROUTES.GET.state.player
                this.columnsUrl = '../../../static/json/statement/memberRanking/columns.json';

			},
            getTableData(){

            },
            doHandle(){},
            resetForm() {
                this.start_time = sessionStorage.dateTimeStart
                this.end_time = sessionStorage.dateTimeEnd
                this.tableUrl = this.beastUrl + this.addSearch({
                    start_time: this.start_time,
                    end_time: this.end_time
                })
            },
            doQuery(data) {
                this.start_time = data.start_time ? data.start_time : sessionStorage.dateTimeStart
                this.end_time = data.end_time ? data.end_time : sessionStorage.dateTimeEnd
                this.tableUrl = this.beastUrl + this.addSearch(data.item)
            },
		},
		components: {
            formEdit: formEdit,
            tableGrid: tableGrid
        },
		computed: {},
		watch: {},
		mounted() {
		},
		created() {
            this.init()
		}
	}
</script>
<style scopend>

</style>
