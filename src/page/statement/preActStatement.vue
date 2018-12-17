<template>
    <div class="wrap pre-act">
        <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="type" :labelWidth="labelWidth" :isEdit="isEdit" @do-query="doQuery"></formEdit>
        <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                <tablegrid
                        :columnsUrl="columnsUrl"
                        :tableUrl="tableUrl"
                        :tableCheck="false"
                        :pageSet="false"
                        :tableIndex="false"
                        :getData="true"
                        @do-handle="doHandle"
                        @get-table-data ="getTabelData"
                >
                </tablegrid>
            </div>
            <el-col :span="24" class="amount">
                <p>优惠总金额:<span>{{this.activeAmount/100}}</span></p>
            </el-col>
        </el-col>
    </div>
</template>
<script type="text/ecmascript-6">
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    export default {
        data() {
            return {
                //表格相关
                columnsUrl:"",
                tableUrl:"",
                baseUrl:"",
                //搜索相关
                searchConfig:[
                    {"type":"quickDate"},//快捷日期
                    {"prop":"member_name","value":"","type":"text","label":"用户名"},
                    {"prop":"level","value":"","label":"会员等级","type":"select","list":[]},
                    {"type":"dateGroup","label":"优惠发放日期","prop":[
                        {"prop":"date_from","value":"","label":"开始时间"},
                        {"prop":"date_to","value":"","label":"结束时间"}
                    ]},
                    {"type":"numberGroup","label":"优惠金额(元)","prop":[
                        {"prop":"money_from","value":null},
                        {"prop":"money_to","value":null}
                    ],"rules":[{"min":1}]},
                    {"prop":"type","value":"","label":"优惠类型","type":"select","list":[]},
                    {"prop":"active_id","value":"","label":"优惠活动名称","type":"select","list":[]}
                ],
                type:"search",
                isEdit:{},
                labelWidth:"120px",
                formVisible:{
                    state:false
                },
				activeAmount: 0,
                // 表格数据
				tableData: {
					list: [],
					//lastUpdate: 0
				},
                //页面求和字段
                sumKey:""
            }
        },
        components: {
            tablegrid:tableGrid,
            formEdit:formEdit
        },
        methods: {
            init(){
                this.columnsUrl = "static/json/statement/preActStatement/columns.json";
                this.sumKey = "money";
                this.tableUrl = URL.api+ROUTES.GET.state.active;
                this.baseUrl = URL.api+ROUTES.GET.state.active;
                let activeUrl = URL.api+ROUTES.GET.actives.$ + "?page=1&page_size=50";
                //let activeUrl = URL.api+ROUTES.GET.active.auto.short;
                let shortUrl = URL.api+ROUTES.GET.active.types.$ + "?page=1&page_size=50";
                let levelUrl = URL.api+ROUTES.GET.user.levels;
                //let rankingUrl = URL.api+ROUTES.GET.state.ranking;
                //会员等级

				this.$.autoAjax('get',levelUrl, '', {
					ok: (res) => {
						let model=res.data
						for(let i in model){
							this.searchConfig[2].list.push({
								"label":model[i].name,
								"value":model[i].id
							})
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
//                 this.$http.get(levelUrl,URLCONFIG).then((res) => {
//                     let model=res.data.data
//                     for(let i in model){
//                         this.searchConfig[2].list.push({
//                             "label":model[i].name,
//                             "value":model[i].id
//                         })
//                     }
//                 }).catch(function (err) {
// //                    console.log(err)
//                 })


                //优惠活动名称下拉数据获取

				this.$.autoAjax('get',activeUrl, '', {
					ok: (res) => {
						let model=res.data;
						for(let i in model){
							this.searchConfig[6].list.push({
								"label":model[i].name,
								"value":model[i].id
							})
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
//                 this.$http.get(activeUrl,URLCONFIG).then((res) => {
//                     let model=res.data.data;
//                     for(let i in model){
//                        this.searchConfig[6].list.push({
//                             "label":model[i].name,
//                             "value":model[i].id
//                         })
//                     }
//                 }).catch(function (err) {
// //                    console.log(err)
//                 });


                //优惠报表优惠类型

				this.$.autoAjax('get',shortUrl, '', {
					ok: (res) => {
						let model=res.data
						for(let i in model){
							this.searchConfig[5].list.push({
								"label":model[i].name,
								"value":model[i].id
							})
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
//                 this.$http.get(shortUrl,URLCONFIG).then((res) => {
//                     let model=res.data.data
//                     for(let i in model){
//                         this.searchConfig[5].list.push({
//                             "label":model[i].name,
//                             "value":model[i].id
//                         })
//                     }
//                 }).catch(function (err) {
// //                    console.log(err)
//                 })
            },
            //表格数据按钮
            doHandle(item) {
                this.updated = false;
                switch (item.fn) {
                    case "openUserSet": // 用户名跳转
                        this.openUserSet(item.row)
                        break;
                    default:
                        break;
                }
            },
            //用户名跳转
            openUserSet(item) {
                this.$router.push({path: '/memberManagement', query: {name: item.user_name}});
            },
            //查询数据
            doQuery(obj){
                obj.item.money_from = obj.item.money_from*100;
                obj.item.money_to = obj.item.money_to*100;
                this.tableUrl = this.baseUrl + this.addSearch(obj.item)
            },
            //获取页面初始数据
            getTabelData(obj){
                var list = obj.allData.data;
                // 计算总额
                var sum = 0;
                for (var i in list ) {
                    sum += Number(list[i]['money'])
                }
                this.activeAmount = sum; // 设置总额
            }
        },
        created(){
            this.init()
        }
    }
</script>
<style scoped>
.pre-act .amount{
    margin: 20px 0;
}
</style>