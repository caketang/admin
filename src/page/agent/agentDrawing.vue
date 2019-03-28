<template>
    <div id="agentDrawing" class="clearfix" v-loading="loading">
        <div class="search">
            <formEdit :formTitel="formTitel"
                      :showAdd=false
                      :formType="formType"
                      :formVisible="formVisible"
                      :formConfig="searchConfig"
                      :type="type"
                      :labelWidth="labelWidth"
                      :initDate="initDate"
                      :isEdit="isEdit"
                      :updateDate="updateDate"
                      @do-query="doQuery"
                      @reset-form="resetForm">
            </formEdit>
        </div>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableIndex="false"
                    :tableCheck = "true"
                    :tabOperation="tabOperation"
                    @do-operation="doOperation"
                    @do-handle="doHandle"
                    :updated = "updated"
            ></tablegrid>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
    </div>
</template>
<script>
    import datepicker from '../../components/datepicker.vue'
    import tableGrid  from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    import confirm from '../../components/confirm.vue';
    export default{
        data(){
            return {
                LANG,
                //搜索条件
                type: "search",
                formTitel: "",
                labelWidth: "90px",
                isEdit: {},
                updateDate: "",
                formVisible: {
                    state: false
                },
                searchConfig: [
                    {"prop": "agent_name", "value": "", "type": "text", "label": "代理用户名"},
                    {
                        "type": "dateGroup",
                        "label": "起止时间",
                        "prop": [{"prop": "time_begin", "value": "", "label": "开始时间"}, {
                            "prop": "time_end",
                            "value": "",
                            "label": "结束时间"
                        }]
                    },
                    {
                        "prop": "status", "value": "", "label": "状态", "type": "select",
                        "list": [{"label": "待处理", "value": "pending"},
                            {"label": "已支付", "value": "paid"},
                            {"label": "已取消","value": "refused" }]
                    },
                    {"prop": "no", "value": "", "type": "text", "label": "订单号"},
                ],
                //批量操作按钮
                tabOperation: [{"label": "批量支付", "fn": "dobatchPay"},
                    {"label": "批量取消", "fn": "dobatchRefuse"}],
                //数据接口地址
                tableUrl: "",
                columnsUrl: "",
                baseUrl: "",
                //checkbox 点击保存数据
                selection: [],
                updated:false,
                loading: false,
                nowId: -1,
                confirmConfig:{
                    state:false,
                    msg:"",
                    fn:""
                },
                formType: "",
                // 是否初始化时间
                initDate: false,
            }
        },
        components: {
            datepicker:datepicker,
            tablegrid:tableGrid,
            formEdit:formEdit,
            confirm:confirm
        },
        methods: {
            init(){
                // 判断query是否有值
                if (JSON.stringify(this.$route.query) == "{}") {
                    this.tableUrl = URL.api + ROUTES.GET.commission.withdrawal + "?time_begin=" + sessionStorage.dateTimeStart + "&time_end=" + sessionStorage.dateTimeEnd;
                }
                this.columnsUrl="/static/json/agent/agentDrawing/columns.json"
                this.baseUrl = URL.api + ROUTES.GET.commission.withdrawal;
            },
            doHandle(item){
                this.updated = false;
                this.nowId = parseInt(item.row.id) || -1;
                switch (item.fn){
                    case "doPay":
                        this.doPay(item.row)
                        break
                    case "doRefuse":
                        this.doRefuse(item.row)
                        break;
                    case "openUserSet": // 用户名跳转
                        this.openUserSet(item.row)
                        break;

                }
            },
            //批量操作按钮
            doOperation(list){
                this.updated = false
                this.selection = [];
                this.selection = list.rows;
                console.log(this.selection);
                switch (list.fn){
                    case "dobatchPay":
                        this.dobatchPay(list.fn)
                        break
                    case "dobatchRefuse":
                        this.dobatchRefuse(list.fn)
                        break
                }
            },
            //批量支付
            dobatchPay(item){
                let payid = [];
                for(let oLi in this.selection){
                    let oStatus =   this.selection[oLi].status;
                    if(oStatus == "pending"){
                        payid.push(this.selection[oLi]);
                    }
                }
                console.log();
                if (payid.length > 0) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定']||'确定' + payid.length + this.LANG['条未支付数据批量支付'] || '条未支付数据批量支付') +(this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "doBatchPay";
                } else {
                    this.$message.error(LANG["没有可操作的未支付数据"] || '没有可操作的未支付数据');
                    return;
                }
            },
            //批量拒绝
            dobatchRefuse(item){
                let payid = [];
                for(let oLi in this.selection){
                    let oStatus =   this.selection[oLi].status;
                    if(oStatus == "pending"){
                        payid.push(this.selection[oLi]);
                    }
                }
                if (payid.length > 0) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定']||'确定' + payid.length + this.LANG['条未支付数据批量取消'] || '条未支付数据批量取消' ) +(this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "doBatchRefuse";
                } else {
                    this.$message.error(LANG["没有可操作的未支付数据"] || '没有可操作的未支付数据');
                    return;
                }
            },
            doConfirm(obj){
                let _this = this;
                switch(obj.fn){
                    case "pay":
                        this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.withdrawal, {"status":2,"ids":_this.nowId.toString()}, {
                            ok: (res) => {
                                _this.updated = false;
                                if(res.state == 0 && res.data){
                                    //刷新数据
                                    this.$message.success(LANG["支付成功"] || '支付成功');
                                    _this.updated = true
                                }else{
                                    this.$message.error(LANG["支付失败"] || '支付失败');
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                    break;
                    case "refuse":

                        this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.withdrawal,{"status":3,"ids":_this.nowId.toString()}, {
                            ok: (res) => {
                                if(res.state == 0 && res.data){
                                    //刷新数据
                                    this.$message.success(LANG["取消成功"] || '取消成功');
                                    _this.updated = true
                                }else{
                                    this.$message.error(LANG["取消失败"] || '取消失败');
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                        // this.$http.patch(URL.api + ROUTES.PATCH.commission.withdrawal,JSON.stringify({"status":3,"ids":_this.nowId.toString()}),URLCONFIG).then((res) => {
                        //     if(res.data.state == 0 && res.data.data){
                        //         //刷新数据
                        //         this.$message.success(LANG["取消成功"] || '取消成功');
                        //         _this.updated = true
                        //     }else{
                        //         this.$message.error(LANG["取消失败"] || '取消失败');
                        //     }
                        //     _this.loading = false;
                        // })
                    break;
                    case "doBatchPay":
                        // if(_this.selection.length == 0){
                        //     this.$message.error(LANG["请选择一条数据"] || '请选择一条数据');
                        //     return;
                        // }
                        let payid = [];
                        for(let oLi in _this.selection){
                            let oStatus =   _this.selection[oLi].status;
                            if( oStatus !== "prepare" && oStatus !== "paid"){
                                payid.push(_this.selection[oLi]);
                            }
                        }
                        if(payid.length > 0){
                            let idArr = '';
                            if(payid.length === 1){
                                idArr = payid[0].id;
                            }else{
                                idArr = payid.map(function (item) {
                                    return item.id
                                }).join(',');
                            }
                            let payObj = { "ids":idArr.toString(),"status":2};

                            this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.withdrawal,payObj, {
                                ok: (res) => {
                                    if(res.state == 0 && res.data){
                                        let success_list = res.data.success;
                                        //刷新数据
                                        _this.$message.success(LANG["批量" + success_list.length + "条数据支付成功"] || '批量' + success_list.length + '条数据支付成功');
                                        _this.updated  = true;
                                        //清空选中的数据
                                        this.selection=[];
                                    }else{
                                        _this.$message.error(LANG["批量支付失败"] || '批量支付失败');
                                        //清空选中的数据
                                        _this.selection=[];
                                    }
                                },
                                p: () => {
                                },
                                error: e => {
                                    console.log(e)
                                }
                            })
                            // this.$http.patch(URL.api + ROUTES.PATCH.commission.withdrawal,JSON.stringify(payObj),URLCONFIG).then((res) => {
                            //     if(res.data.state == 0 && res.data.data){
                            //         let success_list = res.data.data.success;
                            //         //刷新数据
                            //         _this.$message.success(LANG["批量" + success_list.length + "条数据支付成功"] || '批量' + success_list.length + '条数据支付成功');
                            //         _this.updated  = true;
                            //         //清空选中的数据
                            //         this.selection=[];
                            //     }else{
                            //         _this.$message.error(LANG["批量支付失败"] || '批量支付失败');
                            //         //清空选中的数据
                            //         _this.selection=[];
                            //     }
                            // })
                        }else{
                            this.$message.error(LANG['没有未处理的申请'] || '没有未处理的申请')
                        }
                        break;
                    case "doBatchRefuse":
                        // if(_this.selection.length == 0){
                        //     this.$message.error(LANG["请选择一条数据"] || '请选择一条数据');
                        //     return;
                        // };
                        let id = [];
                        for(let oLi in _this.selection){
                            let oStatus =   _this.selection[oLi].status;
                            if( oStatus !== "prepare" && oStatus !== "paid"){
                                id.push(_this.selection[oLi]);
                            }

                        }
//                        let id = _this.selection.filter(function(i){
//                            return i.status === "1";
//                        })
                        if(id.length > 0) {
                            let ids = '';
                            if (id.length === 1) {
                                ids = id[0].id;
                            } else {
                                ids = id.map(function (item) {
                                    return item.id
                                }).join(",");
                            }
                            let refuseObj = { "ids":ids,"status":3};

                            this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.withdrawal,refuseObj, {
                                ok: (res) => {
                                    if(res.state == 0 && res.data){
                                        //刷新数据
                                        let success_list = res.data.success;
                                        _this.$message.success(LANG["批量" + success_list.length + "条数据取消成功"] || '批量' + success_list.length + '条数据取消成功');
                                        //清空选中的数据
                                        _this.updated = true;
                                        _this.selection=[];
                                    }else{
                                        _this.$message.error(LANG["批量取消失败"] || '批量取消失败');
                                        //清空选中的数据
                                        _this.selection=[];
                                    }
                                },
                                p: () => {
                                },
                                error: e => {
                                    console.log(e)
                                }
                            })
                            // this.$http.patch(URL.api + ROUTES.PATCH.commission.withdrawal,JSON.stringify(refuseObj),URLCONFIG).then((res) => {
                            //     if(res.data.state == 0 && res.data.data){
                            //         //刷新数据
                            //         let success_list = res.data.data.success;
                            //         _this.$message.success(LANG["批量" + success_list.length + "条数据取消成功"] || '批量' + success_list.length + '条数据取消成功');
                            //         //清空选中的数据
                            //         _this.updated = true;
                            //         _this.selection=[];
                            //     }else{
                            //         _this.$message.error(LANG["批量取消失败"] || '批量取消失败');
                            //         //清空选中的数据
                            //         _this.selection=[];
                            //     }
                            // })
                        }else{
                            this.$message.error(LANG['没有未处理的申请'] || '没有未处理的申请')
                        }
                        break;
                }
            },
            //支付
            doPay(row){
                if(parseInt(row.id)){
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定支付'] || '确定支付') +'"'+ row.agent_name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "pay";
                }
        },
            //拒绝
            doRefuse(row){
                if(parseInt(row.id)){
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定取消'] || '确定取消') +'"'+ row.agent_name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "refuse";
                }
            },
            //执行查询
            doQuery(obj){
                this.tableUrl = this.baseUrl + this.addSearch(obj.item)
            },
            //用户名跳转
            openUserSet(item){
                this.$router.push({path:'/agentAccount',query:{name:item.agent_name}});
            },
            //重置查询
            resetForm(){
                this.tableUrl = this.baseUrl + "?time_begin=" + sessionStorage.dateTimeStart + "&time_end=" + sessionStorage.dateTimeEnd;
            },
        },
        computed: {},
        mounted(){
        },
        created(){
            this.init()
        },
        activated() {
            this.formType = 'update' + (Math.random() * 9 + 1);
            if (this.$route.query.status) {
                let arrs = [];
                if (this.$route.query.status === 'pending') {
                    arrs.push('待处理');
                }
                this.searchConfig[2]['value'] = arrs[0];
                this.initDate = true;
                this.tableUrl = URL.api + ROUTES.GET.commission.withdrawal + "?status=" + this.$route.query.status;
            }
        },
        deactivated() {
            this.$route.query.status = null;
        }
    }
</script>
<style>


</style>
