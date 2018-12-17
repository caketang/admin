<template>
    <div id="lotteryZKClarge" class="lotteryZKClarge w100">
        <div id="lotteryZKCprophesy" class="lotteryZKCprophesy w100">
            <el-card>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane :label="item.name" :name="item.gameId" v-for="item,key in gameList" :key="key">
                        <el-col :span="24" class="mb20 pb">
                            <!--搜索-->
                            <formEdit   :formVisible="formVisibleSearch"
                                        :formConfig="searchConfig"
                                        :type="typeSearch"
                                        :labelWidth="labelWidthSearch"
                                        @do-query="doQuery"
                                        :isEdit="isEditSearch"
                                        :showAdd="false"
                                        @reset-form="resetForm">

                            </formEdit>
                            <tablegrid
                                :columnsUrl="columnsUrl"
                                :tableUrl="tableUrl"
                                :updated="updated"
                                :autoshowRefresh="true"
                                @do-handle="doHandle"
                                :showRefresh="false"
                            >
                            </tablegrid>
                        </el-col>
                    </el-tab-pane>
                </el-tabs>
            </el-card>
        </div>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
	export default{
		data(){
			return{
				LANG,
                //表格列数据
                columnsUrl: "",
                //表格数据
                tableUrl: "",
                updated:false,
                activeName: '1',
                gameList:[
                    {name:'3分时时彩',gameId:'1'},
                    {name:'5分时时彩',gameId:'2'},
                    {name:'3分快3',gameId:'3'},
                    {name:'5分快3',gameId:'4'},
                    {name:'5分6合彩',gameId:'5'},
                ],
                labelWidthSearch: "100px",
                typeSearch: "search",
                formVisibleSearch: {
                    state: false
                },
                searchConfig: [
                    {"prop":"order_number","value":"","type":"text","label":"投注金额"},
                    {"prop":"order_number","value":"","type":"text","label":"玩家帐号"},
                ],
                typeSearch: "search",
                labelWidthSearch: "100px",
                formVisibleSearch: {
                    state: false
                },
                //是否编辑数据
                isEditSearch: {
                    state: false
                },
                //--------
                formLabelWidth: "100px",
                dialogTableVisible: false,

			}
		},
		components: {
            tablegrid: tableGrid,
            formEdit: formEdit
		},
		methods: {
			init(){

			},
            init(){
                this.columnsUrl="static/json/lotteryNew/lotteryZKCprophesy/columns.json";

            },
            doQuery(obj){},
            resetForm(){},
            handleClick(tab, event) {
                console.log(tab, event);
            },
            doHandle(){}
		},
		created: function () {
			this.init()
		}
	}
</script>
<style scopend>

</style>
