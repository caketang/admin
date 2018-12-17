<template>
    <div id="message">
        <el-col :span="24">
            <el-button type="primary" class="addManage" @click="openForm" v-text="_('新 增')"></el-button>
            <!--编辑界面-->
            <formEdit :formVisible="formVisible" :formConfig="oneColConfig" :type="type" :labelWidth="labelWidth" size="tiny"
                      :isEdit="isEdit"></formEdit>
        </el-col>
        <el-col :span="24">
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="false"
                    :pageSet="false"
                    :tableIndex="false">
            </tablegrid>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
//    import markdownEdit from '../../components/markdownEdit.vue'
    export default{
        data(){
            return {
                //表格列数据
                columnsUrl: "",
                //表格数据
                tableUrl: "",
                editFormTtile: '',
                editFormVisible: false,
                oneColConfig: [
                    {"prop":"level","value":"","label":"发送类型","type":"select",
                        "list":["VIP1","VIP2","VIP3","VIP4","VIP5","VIP6","VIP7","VIP8"]},
                    {"prop":"checkgroup","value":[],"label":"","sReset":false,"checkAll":false,"allBtnShow":false,"type":"checkGroup","list":["选择全部","VIP1","VIP2","VIP3","VIP4"]},
                    {"prop":"checkbox","value":"","type":"checkbox","label":"","valLabel":"全部代理"},
                    {"prop":"textarea","value":"","label":"自定义接收人","type":"textarea"},
                    {"prop":"youhui","value":[],"action":"//jsonplaceholder.typicode.com/posts/",
                        "list":[{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                        "type":"upload","label":"图片上传","listType":"picture"},
                    {"prop":"level","value":"","label":"语言","type":"select",
                        "list":["中文","ENGLISH"],"rules":[{"require":true}]},
                    {"prop": "ip", "value": "", "type": "text", "label": "公告标题"},
                    {"prop":"","value":"","label":"内容", "type":"markdown",},
                    {"type":"dateGroup","label":"起始时间","prop":[{"prop":"dateStart","value":"","label":"开始时间"},{"prop":"dateEnd","value":"","label":"结束时间"}]},
                    {"prop":"cheshi","value":"","type":"radioGroup","label":"弹出类型",
                        "list":[{"radio":"","radioLabel":"day","label":"登录弹出"},{"radio":"","radioLabel":"week","label":"首页弹出"},{"radio":"","radioLabel":"week2","label":"滚动公告"}]},
                ],
                type: "",
                labelWidth: "80px",
                isEdit: {},
                formVisible: {
                    state: false
                },
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
//            markdownEdit:markdownEdit,
        },
        methods: {
            openForm(){
                this.formTitel="新增数据"
                this.formVisible.state=true
            },
            init(){
                this.columnsUrl = "static/json/message/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.notices.list;
                this.baseUrl = URL.api + ROUTES.GET.notices.list;
            },
            //查询数据
//            doQuery(obj){
//                this.tableUrl=this.baseUrl+this.addSearch(obj.item)
//            }
            doAdd(){

            },
        },
        created(){
            this.init()
        }
    }
</script>
<style scoped>
    #message .el-date-editor--date .el-input__inner{margin-left: 100px;}
    #message .el-dialog__header{height:32px;}
</style>