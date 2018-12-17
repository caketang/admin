<template>
    <div id="otherMembers" v-loading="loading">
        <el-col>
            <formEdit
                    :formVisible="{}"
                    :formConfig="searchConfig"
                    :type="'search'"
                    :isEdit="{}"
                    :labelWidth="labelWidth"
                    @do-query="doQuery"
                    @reset-form="resetForm"
                    :showAdd="false">
            </formEdit>
            <el-col >
                <p class="txtext">* {{LANG["请输入'会员帐号' 或 '第三方游戏帐户' 查询数据"] || '请输入"会员帐号" 或 "第三方游戏帐户" 查询数据'}}</p>
            </el-col>
        </el-col>
        <el-col >
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl">
            </tablegrid>
        </el-col>
    </div>
</template>
<script>
    import tablegrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    export default {
        data() {
            return {
                LANG,
                labelWidth:"90px",
                //  搜索相关
                searchConfig: [
                    {"prop":"uname","value":"","type":"text","label":"会员帐号","placeholder":"查询会员帐号"},
                    {"prop":"game_username","value":"","label":"第三方帐户","type":"text","placeholder":"第三方帐户号查询"},
                    {"prop":"game_id","value":"","label":"第三方游戏","type":"select","list":[]
                    }
                ],
                // 表格相关
                columnsUrl: "",
                tableUrl: "",
                loading: false
            }
        },
        methods: {
            init() {
                this.baseUrl = URL.api + '/user/game.3th/members';
                this.columnsUrl = "static/json/accoutManage/otherMembers/columns.json";
                this.tableUrl = URL.api + '/user/game.3th/members';
                this.searchConfig[2].list.splice(0,this.searchConfig[2].list.length);
                let list = this.searchConfig[2].list;

				this.$.autoAjax('get',URL.api + '/games', '', {
					ok: (res) => {
						if(res.state === 0 && res.data){
							let model = res.data || [];
							for(let k=0;k<model.length;k++){
								if(parseInt(model[k].game_id) > 0){
									list.push({
										value: model[k].game_id,
										label: model[k].game_name
									});
								}
							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + '/games',URLCONFIG).then((res)=>{
                //     if(res.data.state === 0 && res.data.data){
                //         let model = res.data.data || [];
                //         for(let k=0;k<model.length;k++){
                //             if(parseInt(model[k].game_id) > 0){
                //                 list.push({
                //                     value: model[k].game_id,
                //                     label: model[k].game_name
                //                 });
                //             }
                //         }
                //     }
                // })
                .catch((e)=>{
//                    console.log(e);
                });
            },
            // 执行查询
            doQuery(obj){
               this.tableUrl = this.baseUrl + this.addSearch(obj.item);
            },
            // 重置查询
            resetForm(){
                this.tableUrl = this.baseUrl;
            }
        },
        components: {
            tablegrid: tablegrid,
            formEdit: formEdit
        },
        computed: {},
        watch: {},
        mounted() {
        },
        created() {
            this.init();
        }
    }
</script>
<style scopend>
    .txtext{color:#99a9bf;font-size: 14px;}
</style>
