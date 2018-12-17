<template>
    <div id="memberStatement">
        <formEdit :formVisible="formVisible"
                  :formConfig="searchConfig"
                  :type="type"
                  :showAdd= false
                  :labelWidth="labelWidth"
                  @do-query="doQuery" :isEdit="isEdit"
                  @reset-form="resetform"></formEdit>
        <el-col :span="24">
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    @do-handle="doHandle">
            </tablegrid>
        </el-col>
    </div>
</template>
<script>
    import  quickDate from '../../components/quickDate.vue'
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    export default{
        data(){
            return{
                //表格列数据
                columnsUrl : "",
                //表格数据
                tableUrl : "",
                baseUrl : "",
                //搜索相关
                searchConfig : [
                    {"type":"quickDate"},//快捷日期
                    {"type":"dateGroup","label":"报表日期","prop":[
                        {"prop":"date_from","value":"","label":"开始时间"},
                        {"prop":"date_to","value":"","label":"结束时间"}]
                    },
                    {"prop":"members_name","value":"","label":"用户名","type":"textarea"}],
                type : "search",
                labelWidth : "90px",
                formVisible : {
                    state : false
                },
                //是否编辑数据
                isEdit : {
                    state : false
                },
                dateObj:{}

            }
        },
        components:{
            quickdate : quickDate,
            tablegrid : tableGrid,
            formEdit : formEdit
        },
        methods : {
            init(){
                this.columnsUrl = "static/json/statement/memberStatement/columns.json";
                let temp = MONTHYDAYS();
                this.dateObj.from = temp.from;
                this.dateObj.to = temp.to;
                this.tableUrl = URL.api + ROUTES.GET.state.user.in.out + '?date_from=' + this.dateObj.from + '&date_to=' + this.dateObj.to;
                this.baseUrl = URL.api + ROUTES.GET.state.user.in.out;
                this.searchConfig[1].prop[0].value = this.dateObj.from;
                this.searchConfig[1].prop[1].value = this.dateObj.to;
                this.doQuery({item:{"date_from":this.dateObj.from,"date_to":this.dateObj.to}});
            },
            //取当月日期

            //接收快捷日期数据
            getdays(item){
                this.Sdate.dateStart = item.sday;
                this.Sdate.dateEnd = item.eday;
                this.reSetDate = false;
            },
            doQuery(obj){
                this.tableUrl = this.baseUrl + this.addSearch(obj.item);
            },
            resetform(){
                this.tableUrl = this.baseUrl + '?date_from=' + this.dateObj.from + '&date_to=' + this.dateObj.to;
            },

            //表格数据按钮
            doHandle(item) {
                switch (item.fn) {
                    case "openUserSet":
                        this.openUserSet(item.row)
                        break;
                    case "openOnline":
                        this.openOnline(item.row)
                        break;
                    case "openOffline":
                        this.openOffline(item.row)
                        break;
                    case "openMeberGetOut":
                        this.openMeberGetOut(item.row)
                        break;
                }
            },
            //用户名跳转
            openUserSet(item){
                if(item['user_name']){
                    this.$router.push({path:'/memberManagement',query:{name:item.user_name}});
                }
            },
            // 用户名线上充值
            openOnline(row){
                if(parseInt(row['deposit_online_times'])>0){
                    this.$router.push({path:'/onLineReceipts',query:{user_name: row.user_name}});
                }else{
                    this.$message.error(LANG['该用户无线上充值记录'] || '该用户无线上充值记录');
                }
//                this.$router.push({path:'/onLineReceipts',query:{user_name: row.user_name}});
            },
            // 用户名线下充值
            openOffline(row){
                if(parseInt(row['deposit_offline_times'])>0){
                    this.$router.push({path:'/offlineReceipts',query:{user_name: row.user_name}});
                }else{
                    this.$message.error(LANG['该用户无线下充值记录'] || '该用户无线下充值记录');
                }
//                this.$router.push({path:'/offlineReceipts',query:{user_name: row.user_name}});
            },
            // 提现付款
            openMeberGetOut(row){
                if(parseInt(row['withdraw_times'])>0){
                    this.$router.push({path:'/payment',query:{username:row.user_name}});
                }else{
                    this.$message.error(LANG['该用户无提现记录'] || '该用户无提现记录');
                }
//                this.$router.push({path:'/payment',query:{username:row.user_name}});
            }
        },
        created(){
            this.init();
        }
    }
</script>
<style>
</style>