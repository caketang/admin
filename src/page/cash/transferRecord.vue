<template>
    <div id="transferRecord">
        <div class="search">
            <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="type" :labelWidth="labelWidth" :showAdd=false @do-query="doQuery" :isEdit="isEdit" @reset-form="resetForm"></formEdit>
        </div>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableIndex="false"
                    :tableCheck="false"
                    @do-handle="doHandle"
                    :tableUrl="tableUrl"></tablegrid>
        </el-col>
    </div>
</template>
<script>
    import tableGrid  from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    export default{
        data(){
            return{
                //查询条件
                searchConfig:[
                    {"prop":"username","value":"","type":"text","label":"用户名"},
                    {"prop":"no","value":"","type":"text","label":"交易订单号"},
                    {"prop":"status","value":"","label":"状态","type":"select","list":[{"label":"成功","value":"success"},{"label":"失败","value":"fail"}]},
                    {"type":"dateGroup","label":"转帐时间","prop":[{"prop":"start_time","value":"","label":"开始时间"},{"prop":"end_time","value":"","label":"结束时间"}]},
                    {"prop":"out_id","value":"","label":"转出","type":"select","list":[]},
                    {"prop":"in_id","value":"","label":"转入","type":"select","list":[]}
                        ],
                type:"search",
                labelWidth:"90px",
                formVisible:{
                    state:false
                },
                //是否编辑数据
                isEdit:{
                    state:false
                },
                turnOutList: [],
                turnInList: [],
                //数据接口地址
                tableUrl: "",
                //列配置接口地址
                columnsUrl: "",
                baseUrl : ""
            }
        },
        components: {
            tablegrid:tableGrid,
            formEdit:formEdit
        },
        methods: {
            init(){
                this.tableUrl = URL.api + ROUTES.GET.cash.record.transfer + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
                this.baseUrl = URL.api + ROUTES.GET.cash.record.transfer;
                this.columnsUrl = "static/json/cash/transferRecord/columns.json";
                //第三方游戏
                let _this = this;

				this.$.autoAjax('get',URL.api + ROUTES.GET.wallet.types, '', {
					ok: (res) => {
						let turnOutList = _this.searchConfig[4].list;
						let turnInList = _this.searchConfig[5].list;
						if(res.state == 0 && res.data){
							let model= res.data || [];
							for(let i in model){
								turnOutList.push({
									"label": model[i].name,
									"value": model[i].id.toString()
								});
								turnInList.push({
									"label": model[i].name,
									"value": model[i].id.toString()
								});
							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.wallet.types,URLCONFIG).then((res) => {
                //     let turnOutList = _this.searchConfig[4].list;
                //     let turnInList = _this.searchConfig[5].list;
                //     if(res.data.state == 0 && res.data.data){
                //         let model= res.data.data || [];
                //         for(let i in model){
                //             turnOutList.push({
                //                 "label": model[i].name,
                //                 "value": model[i].id.toString()
                //             });
                //             turnInList.push({
                //                 "label": model[i].name,
                //                 "value": model[i].id.toString()
                //             });
                //         }
                //     }
                // })
            },
            //执行查询
            doQuery(obj){
                // 对于金额作出处理
                let obj_f = {};
                obj_f.end_time = obj.item.end_time;
                obj_f.in_id = obj.item.in_id;
                if (obj.item.lower_limit) {
                    obj_f.lower_limit = obj.item.lower_limit * 100;
                }
                obj_f.out_id = obj.item.out_id;
                obj_f.start_time = obj.item.start_time;
                obj_f.status = obj.item.status;
	            obj_f.no = obj.item.no;
                if (obj.item.upper_limit) {
                    obj_f.upper_limit = obj.item.upper_limit * 100;
                }
                obj_f.username = obj.item.username;
                this.tableUrl=this.baseUrl+this.addSearch(obj_f);
            },
           //重置查询
            resetForm(){
                this.tableUrl = this.baseUrl + "?start_time=" + sessionStorage.dateTimeStart + "&end_time=" + sessionStorage.dateTimeEnd;
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
                this.$router.push({path:'/memberManagement',query:{name:item.username}});
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
<style >
    /*.page{position: relative}*/
    /*.search .el-form-item__label{width:80px}*/
    /*.search .el-form-item{width:200px;float:left;margin-bottom: 1px}*/
    /*.search .el-form-item.lg{width:330px;float:left;}*/
    /*.search .el-form .el-col .line{text-align: center}*/
    /*.search .el-form .formbtn{float:left;margin-left:10px;padding-top:5px}*/
    /*.search .el-form .outexcel{position: absolute;top:0;right:10px}*/
</style>