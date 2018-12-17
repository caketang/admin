<template>
    <div>
        <formEdit :formVisible="formVisible"
                  :formConfig="searchConfig"
                  :type="type" :labelWidth="labelWidth"
                  @do-query="doQuery" :isEdit="isEdit"
                  :showAdd="false"
                  @reset-form="resetform"></formEdit>
        <el-col :span="24">
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    @do-handle="doHandle"
                    :tableIndex="false">
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
                //搜索相关
                searchConfig : [
                    {"type":"quickDate"},//快捷日期
                    {"prop":"member_name","value":"","type":"text","label":"用户名"},
                    {"type":"numberGroup","label":"投注金额","prop":[
                        {"prop":"rebet_money_from","value":null},
                        {"prop":"rebet_money_to","value":null}
                    ]},
                    {"type":"numberGroup","label":"存款额","prop":[
                        {"prop":"deposit_money_from","value":null},
                        {"prop":"deposit_money_to","value":null}
                    ]},
                    {"prop":"level","value":"","label":"会员等级","type":"select","list":[]
                    },
                    {"type":"dateGroup","label":"报表日期","prop":[
                        {"prop":"date_from","value":"","label":"开始时间"},
                        {"prop":"date_to","value":"","label":"结束时间"}]
                    }],
                type : "search",
                labelWidth : "90px",
                formVisible : {
                    state : false
                },
                //是否编辑数据
                isEdit : {
                    state : false
                },
                baseUrl : ""
            }
        },
        components:{
            quickdate : quickDate,
            tablegrid : tableGrid,
            formEdit : formEdit
        },
        methods : {
            init(){
                this.columnsUrl = "static/json/statement/playerStatement/columns.json";
                this.tableUrl = URL.api+ROUTES.GET.state.player;
                this.baseUrl = URL.api+ROUTES.GET.state.player;
                let levelUrl = URL.api+ROUTES.GET.user.levels;
                let _this=this;
                this.$http.get(levelUrl,URLCONFIG).then((res) => {
                    let  model=res.data.data;
                    for(let i in model){
                        _this.searchConfig[4].list.push({
                            "label":model[i].name,
                            "value":model[i].id
                        })
                    }
                }).catch(function (err) {
//                    console.log(err)
                })
            },
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
                this.tableUrl = this.baseUrl;
            },

            //表格数据按钮
            doHandle(item) {
                switch (item.fn) {
                    case "openUserSet": // 用户名跳转
                        this.openUserSet(item.row)
                        break;
                    default:
                        break;
                }
            },
            //用户名跳转
            openUserSet(item){
                this.$router.push({path:'/memberManagement',query:{name:item.user_name}});
            },
        },
        created(){
            this.init();
        }
    }
</script>
<style>

</style>