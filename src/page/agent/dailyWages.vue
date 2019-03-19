<template>
	<div id="dailyWages">
        <div class="search mb20">
            <formEdit :formVisible="formVisible"
                      :formConfig="searchConfig"
                      :type="type"
                      :labelWidth="labelWidth"
                      @do-query="doQuery"
                      :isEdit="isEdit"
                      @reset-form="resetForm"
                      @add-new="addNew"
                      :addText="LANG['新 建'] || '新 建'"
                      :formType="formType"></formEdit>
        </div>
        <el-col>
            <tablegrid
                :columnsUrl="columnsUrl"
                :tableUrl="tableUrl"
                :updated="updated"
                :isCreated="true"
                :pageSet="false"
                @do-handle="doHandle"></tablegrid>
        </el-col>
	</div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
	export default {
		data() {
			return {
                LANG,
                //数据接口地址
                tableUrl: "",
                //列配置接口地址
                columnsUrl: "",
                updated:false,
                //搜索相关
                formType: "",
                searchConfig: [
                    {"prop": "name", "value": "", "type": "text", "label": "标 题"},
                    {
                        "prop": "agent_type",
                        "value": "",
                        "label": "代理类型",
                        "type": "select",
                        "list": [{'label': '直属代理', 'value': '2'}, {'label': '层级代理', 'value': '1'}]
                    },
                    {
                        "prop": "online", "value": "", "label": "状 态", "type": "select",
                        "list": [{"label": "全部", "value": ""},
                            {"label": "在线", "fn": true, "value": '1'},
                            {"label": "离线", "fn": false, "value": '0'}]
                    },
                    {
                        "prop": "status", "value": "", "label": "帐号状态", "type": "select",
                        "list": [{"label": "全部", "value": ""},
                            {"label": "启用", "fn": true, "value": '1'},
                            {"label": "停用", "fn": false, "value": '3'}]
                    }
                ],
                type: "search",
                labelWidth: "90px",
                formVisible: {
                    state: false
                },
                isEdit: {
                    state: false
                },
            }
		},
		methods: {
			init() {

			},
            //表格按钮点击事件
            doHandle(item) {
//                this.nowId = parseInt(item.row.id);
//                switch (item.fn) {
//                    case "doEdit":
//                        this.doEdit(item.row)
//                        break
//                    case "doDelete":
//                        this.doDelete(item.row)
//                        break
//                    case "doEnabled":
//                        this.doEnabled(item.row)
//                        break
//                    case "doDisabled":
//                        this.doDisabled(item.row)
//                        break
//                }
            },
            resetForm(){},
            doQuery(){},
            addNew(){}
		},
		components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
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
