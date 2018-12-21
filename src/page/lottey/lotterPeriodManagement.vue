   <template>
    <div id="lotterSingleNote" class="templateManage w100" style="z-index:4;">
        <el-row>
            <el-col :span="24">
                <tablegrid
                        :columnsUrl="columnsUrl"
                        :tableUrl="tableModelUrl"
                        :pageSet="false"
                        :updated="updated"
                        :showRefresh="false"
                        @do-Lock="doChanges"></tablegrid>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import tablegrid from '../../components/tableGrid.vue'
    export default{
        data(){
            return {
                //表格列地址
                columnsUrl: "",
                tableModelUrl: "",
                oType: {
                    standard: '',
                    fast: '',
                    is_auto: ''
                },
//                baseUrl: ""
                //请求后刷新
	            updated:false,
            }
        },
        components: {
            tablegrid: tablegrid
        },
        methods: {
            //初始化页面
            init(row){
                this.columnsUrl = "/static/json/lotteryNew/lotterperiodManagement/columns.json"
                this.tableModelUrl = URL.api + ROUTES.GET.lottery.order.period;
	            this.updated = false;
                // this.baseUrl = URL.api + ROUTES.GET.lottery.order.period;
            },
            // 开关配置
            // { "prop":"is_standard",
            //     "label":"标准玩法开关",
            //     "type":"switch",
            //     "switchStatus":true,
            //     "class":"tCent",
            //     "show":"support_standard",
            //     "sortable":true,
            //     "disabled": true
            // },
            // { "prop":"is_fast",
            //     "label":"快速玩法开关",
            //     "class":"tCent",
            //     "switchStatus":true,
            //     "type":"switch",
            //     "show":"support_fast",
            //     "sortable":true,
            //     "disabled": true
            // }
            //开关修改事件,
            doChanges(obj){
            	let _this = this;
	            _this.updated = false;
                let oUrl = URL.api + ROUTES.PATCH.lottery.switch + "/" + obj.row.l_id;
                let oType = {};
                setTimeout(() => {
                    oType.fast = obj.row['is_fast'];
                    oType.standard = obj.row['is_standard'];
                    oType.is_auto = obj.row['is_auto'];

                    this.$.autoAjax('patch',oUrl, oType, {
                        ok: (res) => {
                            if (res.data && res.state == 0) {
                                this.$message({
                                    showClose: true,
                                    message: '操作成功',
                                    type: 'success',

                                })
                                _this.updated = true;
                            }else{
                                this.$message({
                                    showClose: true,
                                    message: '操作失败，请稍后重试！',
                                    type: 'error',

                                })
                                _this.updated = true;
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                }, 0)
            }
        },
        mounted(){
        },
        created: function () {
            this.init();
        }
    }
</script>
<style scopend>
    .templateManage .cell .el-input__inner {
        width: 140px;
    }

    .templateManage .el-dialog--small {
        width: 30%;
        min-width: 400px;
        max-width: 600px;
        border-radius: 10px;
    }

    .templateManage .el-dialog--small .fromMargin {
        margin-right: 60px;
    }

    .templateManage .bg-purple-dark {
        background: none;
    }

    .templateManage .addManage {
        float: right;
        margin-right: 5%;
    }

    .templateManage .block {
        text-align: right;
    }

    .templateManage .el-input {
        display: block
    }

    .templateManage .el-col {
        margin-bottom: 20px;
    }
</style>
