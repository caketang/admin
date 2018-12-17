<template>
    <div id="operationLog">
        <div class="search">
            <formEdit :formTitel="formTitel" :formVisible="formVisible" :showAdd=false :formConfig="searchConfig" :type="type" :labelWidth="labelWidth" :isEdit="isEdit" @do-query="doQuery" @reset-form="resetForm"></formEdit>
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
                    {"prop":"username","value":"","type":"text","label":"用户名"},
                    {"prop":"ip","value":"","type":"text","label":"ip"},
                    {"prop":"domain","value":"","type":"text","label":"域名"},
                    {"type":"dateGroup","label":"起止时间","prop":[
                        {"prop":"date_begin","value":"","label":"开始时间"},
                        {"prop":"date_end","value":"","label":"结束时间"}
                    ]},
                    {"prop":"type","value":"","label":"类型","type":"select","list":[]},
                    {"prop":"status","value":"","label":"结果","type":"select","list":[
                        {"label": "成功", "value": "1"},
                        {"label": "失败", "value": "0"}
                    ]},
                ],
                //数据接口地址
                tableUrl : "",
                columnsUrl : "",
                baseUrl:"",
            }
        },
        components: {
            tablegrid:tableGrid,
            formEdit:formEdit,
        },
        methods: {
            init(){
//                for (let k in this.searchConfig[4].list) {
//                    debugger;
//                    this.searchConfig[3].list[k].value = parseInt(this.searchConfig[3].list[k].value);
//                }
                this.columnsUrl="/static/json/systemSettings/operationLog/columns.json"
                this.tableUrl=URL.api + ROUTES.GET.system.log.user.operation + "?date_begin=" + sessionStorage.dateTimeStart + "&date_end=" + sessionStorage.dateTimeEnd;
                this.baseUrl=URL.api + ROUTES.GET.system.log.user.operation;
                this.getLogType();
            },
            // 取日志类型
            getLogType(){
                let typeList = this.searchConfig[4].list;

				this.$.autoAjax('get',URL.api + '/system/log/user.type/', '', {
					ok: (res) => {
						if(res.data && res.state === 0){
							let list = res.data || [];
							for(let k=0; k<list.length; k++){
								typeList.push({
									"label": list[k].name,
									"value": list[k].id.toString()
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
                // this.$http.get(URL.api + '/system/log/user.type/',URLCONFIG).then((res)=>{
                //     if(res.data.data && res.data.state === 0){
                //         let list = res.data.data || [];
                //         for(let k=0; k<list.length; k++){
                //             typeList.push({
                //                 "label": list[k].name,
                //                 "value": list[k].id.toString()
                //             });
                //         }
                //     }
                // })
                .catch((e)=>{
//                    console.log(e);
                });
            },
            // 连接跳转
            doHandle(obj){
                if(obj.fn === "openUserDetail"){
                    this.$router.push({path: "/memberManagement",query:{name: obj.row.name}})
                }
            },
            //执行查询
            doQuery(obj){
                this.tableUrl = this.baseUrl + this.addSearch(obj.item);
            },
            //重置查询
            resetForm(){
                this.tableUrl = this.baseUrl + "?date_begin=" + sessionStorage.dateTimeStart + "&date_end=" + sessionStorage.dateTimeEnd;
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