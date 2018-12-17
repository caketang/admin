<template>
    <div id="LoginAccount">
        <div class="search">
            <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="type" :labelWidth="labelWidth"
                      :isEdit="isEdit" @do-query="doQuery" @reset-form="resetForm" :showAdd="false"></formEdit>
        </div>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="false"
                    :pageSet="true"
                    :updayed="updated"
                    :tableIndex="false"
                    @do-handle="doHandle">
            </tablegrid>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'

    export default {
        data() {
            return {
                //表格相关
                columnsUrl: "",
                tableUrl: "",
                //搜索相关
                searchConfig: [
                    {"prop": "username", "value": "", "type": "text", "label": "用户名"},
                    {"prop": "ip", "value": "", "type": "ip", "label": "IP"},
                    {"prop": "www", "value": "", "type": "text", "label": "域名"},
                    {"type":"dateGroup","label":"登录时间","prop":[{"prop":"register_from","value":"","label":"开始时间"},{"prop":"register_to","value":"","label":"结束时间"}]}
                ],
                type: "search",
                isEdit: {},
                labelWidth: "80px",
                formVisible: {
                    state: false
                },
                baseUrl: "",
                updated: false,
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit
        },
        methods: {
            init() {
                this.columnsUrl = "static/json/accoutManage/LoginAccount/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.user.login;
                this.baseUrl = URL.api + ROUTES.GET.user.login;
            },
            //表格数据按钮
            doHandle(item) {
                this.updated = false;
                switch (item.fn) {
                    case "openUserSet": // 用户名跳转
                        this.openUserSet(item.row)
                        break;
                    case "openAgentSet": // 用户名跳转
                        this.openAgentSet(item.row)
                        break;
                    default:
                        break;
                }
            },
            //用户名跳转
            openUserSet(item) {
                this.$router.push({path: '/memberManagement', query: {name: item.name}});
            },
            openAgentSet(item) {
                this.$router.push({path: "/agentAccount",query:{name: item.agent}});

            },
            //执行查询
            doQuery(obj) {
                this.tableUrl = this.baseUrl + this.addSearch(obj.item);
            },
            //重置查询
            resetForm() {
                this.tableUrl = this.baseUrl;
            }

        },
        computed: {},
        mounted() {
        },
        created() {
            this.init()
        }
    }
</script>
<style>
</style>