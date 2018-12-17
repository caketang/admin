<template>
	<div id="betquery" v-loading="loading" class="clearfix">
    <formEdit :formVisible="formVisible"
              :formConfig="searchConfig"
              :type="type"
              :labelWidth="labelWidth"
              @do-query="doQuery"
              :isEdit="isEdit"
              @reset-form="resetForm"
              :formType="formType"
              :showAdd="false">
    </formEdit>
      <el-col>
          <tablegrid class="bankTable"
                     :columnsUrl="columnsUrl"
                     :tableUrl="tableUrl"
                     :tableCheck="false"
                     :getData="true"
                     :assembleColumns="assembleColumns"
                     @get-table-data="getTableData"
                     :updated="updated">
              <tr slot="other" v-if="tableLength>0">
              <td colspan="2"><div class="cell tCent">{{LANG['小计'] || '小计'}}</div></td>
              <td v-for="name in games">
                  <div class="cell"><span>{{subTotalValidBet[name]| formatMoney}}</span></div>
              </td>
                  <td>
                      <div class="cell"><span>{{subTotalValidBet['total'] | formatMoney}}</span></div>
                  </td>
          </tr>
          <tr slot="other" v-if="tableLength>0">
              <td colspan="2"><div class="cell tCent">{{LANG['合计'] || '合计'}}</div></td>
              <td v-for="name in games">
                  <div class="cell"><span>{{totalValidBet[name] | formatMoney}}</span></div>
              </td>
              <td>
                  <div class="cell"><span>{{totalValidBet['total'] | formatMoney}}</span></div>
              </td>
          </tr>
          </tablegrid>
      </el-col>
    </div>
</template>
<script>
	import formEdit from '../../components/formEdit.vue';
  import tableGrid from '../../components/tableGrid.vue';
  export default{
      	data(){
            return {
                dataModel:[],
                LANG,
                searchConfig:[
                                 {"prop":"date","value":"","type":"quickDate","showTimes": true},//快捷日期
                                 {"type":"dateGroup","label":"日期","prop":[{"prop":"date_from","value":"","label":"开始时间"},{"prop":"date_to","value":"","label":"结束时间"}]},
                                 {"prop":"user_name","value":"","type":"text","label":"用户名"},],
                formVisible: {
                  state:false
                },
                type:"search",
                labelWidth:"90px",
                    isEdit:{
                        state:false
                    },
                formType:"",
                columnsUrl:"",
                tableUrl: "",
                baseUrl: "",
                updated:false,
                loading: false,
                subTotalValidBet:{},
                totalValidBet:{},
                tableLength:0,
                assembleColumns:{
                    index:3,
                    data:[]
                },
                tableData:{
                    list:[]
                },
                games:[]
            }
        },
        components:{
      	    formEdit:formEdit,
            tablegrid:tableGrid,
        },
        computed:{},
        watch:{},
        methods:{
            init(){
                let _this = this;
                this.baseUrl = URL.api+ROUTES.GET.state.rebate;
                function getGame() {
                    return new Promise((resolve,reject) => {
                        if(_this.assembleColumns.data.length === 0) {

							this.$.autoAjax('get', URL.api + "/games/list", '', {
								ok: (res) => {
									if(res.state === 0 && res.data){
										let model = res.data;
										let games = _this.games;
										model.forEach(item => {
											let obj = {"label":item.name,prop:`games,${item.name}`,"type": "connectProp"};
											games.push(item.name);
											_this.assembleColumns.data.push(obj);
										})
										_this.assembleColumns.data.push({
											"prop": 'total',
											"label":"小计",
											"type":"divisionMoney"
										});
										resolve();
										stop();
									}
								},
								p: () => {
								},
								error: e => {
									console.log(e)
								}
							})
                            // _this.$http.get(URL.api + "/games/list", URLCONFIG).then((res)=>{
                            //     if(res.data.state === 0 && res.data.data){
                            //         let model = res.data.data;
                            //         let games = _this.games;
                            //         model.forEach(item => {
                            //             let obj = {"label":item.name,prop:`games,${item.name}`,"type": "connectProp"};
                            //             games.push(item.name);
                            //             _this.assembleColumns.data.push(obj);
                            //         })
                            //         _this.assembleColumns.data.push({
                            //             "prop": 'total',
                            //             "label":"小计",
                            //             "type":"divisionMoney"
                            //         });
                            //         resolve();
                            //         stop();
                            //     }
                            // })
                            .catch((res) => {
                                _this.$message.error(LANG['未知错误，请稍后重试'] || '未知错误，请稍后重试');
                                reject(res)
                            });
                        }else{
                            resolve();
                        }
                    })
                }
                getGame().then(()=> {
                    _this.columnsUrl = "/static/json/userManagement/agentAccount/columns.json";
                    _this.tableUrl = URL.api+ROUTES.GET.state.rebate+"?date_from=" + sessionStorage.dateTimeStart + "&date_to=" + sessionStorage.dateTimeEnd;
                })
            },
            doQuery(obj){
               this.tableUrl = this.baseUrl+this.addSearch(obj.item);
            },
            resetForm(){
              // this.tableUrl = URL.api+ROUTES.GET.state.rebate+"?date_from=" + sessionStorage.sysTime + "&date_to=" + sessionStorage.sysTime;
              this.init();
            },
            getTableData(obj){
                this.totalMoney = {};
                this.tableLength = obj.allData.data.length || 0;
                this.subTotalValidBet = obj.allData.attributes.subTotalValidBet || {}
                this.totalValidBet = obj.allData.attributes.totalValidBet || {};
            }
        },
        mounted(){},
        created(){
            this.init()
        }
    }
</script>
<style scoped>
</style>