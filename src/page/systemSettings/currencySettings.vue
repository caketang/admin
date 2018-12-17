<!--货币设定-->
<template>
    <div id="currencySettings" class="templateManage w100">
        <el-row>
            <el-col class="currencyMain">
                <tablegrid
                        :columnsUrl="columnsUrl"
                        :tableUrl="tableUrl"
                        @do-handle="doHandle"
                        :tableCheck="false"
                        :showRefresh="false"
                        :pageSet="false"
                        :tableIndex="false"
                        :updated="updataTable"
                        >
                </tablegrid>
            </el-col>
            <!--<el-col v-else v-loading="loading" element-loading-text="拼命加载中"></el-col>-->
        </el-row>
    </div>
</template>
<script type="text/ecmascript-6">
    //    import editTable from '../../components/editTable.vue'
    import tableGrid from '../../components/tableGrid.vue'
    export default{
        data(){
            return {
                LANG,
                //表格列地址
                columnsUrl: "",
                tableUrl: "",
                formDataLength:'',
                loading: true,
                updataTable:false,
            }
        },
        components: {
//            edittable:editTable,
            tablegrid: tableGrid,
        },
        methods: {
            //初始化页面
            init(){
                this.columnsUrl = "static/json/systemSettings/currencySettings/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.system.currency;
//                this.$http.get(this.tableUrl).then((res) => {
//                    this.formDataLength = res.data.data.length;
//                }).catch(function (err) {
//                        console.log(err)
//                })
            },
            doHandle(e){
                switch (e.fn) {
                    case "dostart":
                        this.dostart(e.row)
                        break;
                }
            },
            dostart(row){
                this.updataTable=false;
                let doStart = {state: '1'}
                let doStop = {state: '0'}
                let formDataUrl = URL.api + ROUTES.PATCH.system.currency + '/' + row.id;
                row.status == '1' && this.$.autoAjax('patch',formDataUrl, doStop, {
					ok: (res) => {
						if (res.data && res.state === 0) {
							this.$message.success(this.LANG['状态改变成功！'] || '状态改变成功！');
							//刷新数据
							this.updataTable=true;
						} else {
							this.$message.error(this.LANG['状态改变失败！'] || '状态改变失败！');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})

                // this.$http.patch(formDataUrl, doStop,URLCONFIG).then((res) => {
                //     if (res.data.data && res.data.state === 0) {
                //         this.$message.success(this.LANG['状态改变成功！'] || '状态改变成功！');
                //         //刷新数据
                //         this.updataTable=true;
                //     } else {
                //         this.$message.error(this.LANG['状态改变失败！'] || '状态改变失败！');
                //     }
                // })
                .catch(function (err) {
//                    console.log(err)
                });
                row.status == '0' && this.$.autoAjax('patch',formDataUrl, doStart, {
					ok: (res) => {
						if (res.data && res.state === 0) {
							this.$message.success(this.LANG['状态改变成功！'] || '状态改变成功！');
							//刷新数据
							this.updataTable=true;
						} else {
							this.$message.error(this.LANG['状态改变失败！'] || '状态改变失败！');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})

                // this.$http.patch(formDataUrl, doStart,URLCONFIG).then((res) => {
                //     if (res.data.data && res.data.state === 0) {
                //         this.$message.success(this.LANG['状态改变成功！'] || '状态改变成功！');
                //         //刷新数据
                //         this.updataTable=true;
                //     } else {
                //         this.$message.error(this.LANG['状态改变失败！'] || '状态改变失败！');
                //     }
                // })
                .catch(function (err) {
//                    console.log(err)
                })

            },

        },
        created: function () {
            this.init();
        }
    }
</script>
<style scoped>
    .currencyMain{padding: 0 10px;}
</style>