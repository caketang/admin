<template>
    <div id="agencyStatistics">
        <el-col>
            <formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="searchConfig" :type="searchType" :labelWidth="labelWidth" :isEdit="isEdit" @do-query="doQuery" @reset-form="resetForm" :showAdd="false"></formEdit>
        </el-col>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableIndex="false"
                    :tableCheck="false"
                    :formType="type"
                    @do-handle="doHandle"
                    :updated = "updated"
                    :tableUrl="tableUrl"></tablegrid>
        </el-col>
    </div>
</template>
<script>
    import datepicker from '../../components/datepicker.vue'
    import tableGrid  from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    export default{
        data(){
            return{
                LANG,
                columnsUrl:"",
                tableUrl:"",
                baseUrl:"",
                //刷新
                type:"add",
                searchType : "search",
                formTitel : "",
                labelWidth : "90px",
                isEdit : {},
                formVisible : {
                    state : false
                },
                searchConfig : [{"prop":"uname","value":"","type":"text","label":"用户名"},
                    {"prop":"mobile","value":"","type":"text","label":"电话"},
                    {"prop":"email","value":"","type":"text","label":"邮箱"},
                    {"prop":"qq","value":"","type":"text","label":"QQ"},
                    {"prop":"wechart","value":"","type":"text","label":"微信号"},
                    {"type":"dateGroup","label":"统计时间","prop":[{"prop": "date_begin","value":"","label":""},{"prop": "date_end","value":"","label":""}]}
                ],
                updated: false,
            }
        },
        components: {
            datepicker:datepicker,
            tablegrid:tableGrid,
            formEdit:formEdit
        },
        methods: {
            resetForm(){
                this.tableUrl = this.baseUrl + "?date_begin=" + sessionStorage.dateTimeStart + "&date_end=" + sessionStorage.dateTimeEnd;
            },
            init(){
                this.columnsUrl = "/static/json/agent/agencyStatistics/columns.json";
                this.tableUrl = URL.api+ROUTES.GET.commission.total + "?date_begin=" + sessionStorage.dateTimeStart + "&date_end=" + sessionStorage.dateTimeEnd;
                this.baseUrl = URL.api+ROUTES.GET.commission.total;
            },
            //执行查询
            doQuery(obj){
                this.tableUrl = this.baseUrl + this.addSearch(obj.item)
            },
            //刷校招页面
            doRefresh(){
                if(this.type == "add"){
                    this.type ="edit"
                }else{
                    this.type ="add"
                }
                this.tableUrl=URL.api+ROUTES.GET.commission.total;
            },
            //表格按钮点击事件
            doHandle(item){
                switch (item.fn){
                    case "openUserSet": // 用户名跳转
                        this.openUserSet(item.row);
                        break;
                    case "openMembers":
                        this.openMembers(item.row);
                    default:
                        break;
                }
            },
            openMembers(item){
               if(parseInt(item.members) > 0)
                {
                    this.$router.push({path:'/memberManagement',query:{agent:item.agent_name}});
                }
            },
            //用户名跳转
            openUserSet(item){
                this.$router.push({path:'/agentAccount',query:{name:item.agent_name}});
            },
        },
        computed:{
        },
        mounted(){
        },
        created(){
            this.init()
        }
    }
</script>
<style>
    #agencyStatistics #formEdit{
        float: left;
    }
    #agencyStatistics .outexcel{
        float: right;
        margin-top: 5px;
    }
</style>
