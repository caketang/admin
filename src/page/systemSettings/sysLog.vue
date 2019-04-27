<template>
    <div id="sysLog">
        <div class="search">
            <formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="searchConfig" :type="type"
                      :labelWidth="labelWidth" :isEdit="isEdit" :showAdd=false @do-query="doQuery" @reset-form="resetForm"></formEdit>
        </div>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableIndex="false"
                    :tableCheck="false"
                    :tableUrl="tableUrl"
                    @do-handle="doHandle"
                    ></tablegrid>
        </el-col>
    </div>
</template>
<script>
    import datepicker from '../../components/datepicker.vue'
    import tableGrid  from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    export default{
        data(){
            return {
                //搜索条件
                type : "search",
                formTitel : "",
                labelWidth : "90px",
                isEdit : {},
                formVisible : {
                    state : false
                },
                searchConfig : [
                    {"prop":"created_uname","value":"","type":"text","label":"操作者"},
                    {"prop":"user_name","value":"","type":"text","label":"被操作者"},
                    {"prop":"ip","value":"","label":"操作IP","type":"text",},
                    {"type":"dateGroup","label":"起止时间","prop":[
                        {"prop":"date_from","value":"","label":"开始时间"},
                        {"prop":"date_to","value":"","label":"结束时间"}
                    ]},
                    {"prop":"op_type","value":"","label":"操作类型","type":"select","list":[
                        {"label": "新增", "value": "add"},
                        {"label": "删除", "value": "delete"},
                        {"label": "修改", "value": "update"},
                        {"label": "审核", "value": "check"},
                        {"label": "登录", "value": "login"},
                        {"label": "登出", "value": "logout"}
                    ]},
                    {"prop":"result","value":"","label":"结果","type":"select","list":[
                        {"label": "成功", "value": "success"},
                        {"label": "失败", "value": "fail"}
                    ]}
                ],
                //数据接口地址
                tableUrl : "",
                columnsUrl : "",
                baseUrl:"",
            }
        },
        components: {
            datepicker:datepicker,
            tablegrid:tableGrid,
            formEdit:formEdit
        },
        methods: {
            init(){
                this.columnsUrl="/static/json/systemSettings/sysLog/columns.json"
                this.tableUrl=URL.api + ROUTES.GET.system.log.admin.type + "?date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
                this.baseUrl=URL.api + ROUTES.GET.system.log.admin.type;
            },
            doHandle(item){

                switch(item.fn)
                {
                    case "openMember":
                        this.openMember(item.row);
                        break;
                }
            },
            openMember(obj)
            {
                this.$router.push({path:'/memberManagement', query:{name:obj.user_name}})

            },
            //执行查询
            doQuery(obj){
                this.tableUrl = this.baseUrl + this.addSearch(obj.item)
            },
             //重置查询
            resetForm(){
                this.tableUrl = this.baseUrl + "?date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
            }
        },
        computed: {},
        mounted(){
        },
        created(){
            this.init()
        }
    }
</script>
<style>
</style>
