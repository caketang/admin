<template>
    <div id="cs" class="templateManage clearfix" v-loading="loading">
        <!--表头-->
        <el-col :span="24" class="addManage"><el-button type="primary"  size="small"  @click="doAdd" v-text="LANG['新增彩票游戏模板'] || '新增彩票游戏模板'"></el-button></el-col>
        <el-col :span="24" class="mt10">
            <!--编辑界面-->
            <formEdit :formTitel="formTitel" :formVisible="editVisible" :formConfig="formConfig" :type="type" :labelWidth="labelWidth" @get-form="getForm" :isEdit="isEdit" :formType="formType"></formEdit>
        </el-col>
        <el-col :span="24">
            <tablegrid
                :columnsUrl="columnsUrl"
                :tableUrl="tableUrl"
                :updated="updated"
                :showRefresh="false"
                @do-handle="doHandle"></tablegrid>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <el-dialog
            :title="LANG['会员层级'] || '会员层级'"
            :visible.sync="dialogMode"
            size="tiny">
            <span>
                <div class="mb10">
                    {{LANG['限额模板名称'] || '限额模板名称'}} ( {{modelTitle}} )
                </div>
                <div class="dialogModeBox">
                     <tablegrid
                         :columnsUrl="columnsMember"
                         :tableUrl="tableMember"
                         :isCreated="true"
                         :tableCheck="true"
                         :tabOperation="tabOperation"
                         :showRefresh="false"
                         @do-operation="doOperation"></tablegrid>
                </div>
            </span>
        </el-dialog>
        <el-dialog
            :title="LANG['会员层级'] || '会员层级'"
            :visible.sync="dialogModeLevel"
            size="tiny">
            <span>
                <div class="mb10">
                    {{LANG['限额模板名称'] || '限额模板名称'}} ( {{LevelTitle}} )--
                </div>
                <div class="dialogModeBox">
                     <tablegrid
                         :columnsUrl="columnsLevel"
                         :tableUrl="tableLevel"
                         :tableCheck="true"
                         :tabOperation="tabOperationLevel"
                         :isCreated="true"
                         :showRefresh="false"
                         @do-operation="doOperationLevel"></tablegrid>
                </div>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    import confirm from '../../components/confirm.vue'
    //    import lotterModelSet from './lotterModelSet.vue'
    export default{
        data(){
            return{
                LANG,
                //数据接口地址
                tableUrl:"",
                //列配置接口地址
                columnsUrl:"",
                //彩票状态选择
                states:ARRAYS.state1,
                //编辑界面数据
                formType:"",
                type:"default",
                formTitel:"",
                labelWidth:"90px",
                editVisible:{
                    state:false
                },
                // 是否编辑数据
                isEdit:{
                    state:false
                },
                formConfig:[
                    {"prop":"t_name","value":"","type":"text","label":"模板名称","rules":[{"require":true}]},
                    {"prop":"t_desc","value":"","type":"textarea","label":"模板描述"},
                    {"prop":"t_status","value":"0","label":"状态","type":"select",
                        "list":ARRAYS.state1,"rules":[{"require":true}]},
                ],
                //复制添加
                copyAdd:false,
                nowId: -1,
                //删除确认
                confirmConfig:{
                    state:false,
                    msg:"",
                    fn:"",
                    obj: {},
                    btnShow: false
                },
                updated: false,
                loading: false,
                //弹窗
                dialogMode:false,
                // 模板会员解缅绑
                columnsMember: '',
                tableMember: '',
                //批量操作按钮
                tabOperation: [{"label": "批量解除关联", "fn": "UnbundMembeer"}],
                modelTitle: '',
                // 会员层级解绑限额
                dialogModeLevel: false,
                LevelTitle: '',
                columnsLevel: '',
                tableLevel: '',
                tabOperationLevel:[{"label": "批量解除关联", "fn": "UnbundLevel"}]
            }
        },
        components: {
            tablegrid:tableGrid,
            formEdit:formEdit,
            confirm:confirm
        },
        methods: {
            init(){
                this.tableUrl = URL.api + ROUTES.GET.lottery.template;
                this.columnsUrl="static/json/lotteryNew/lotterytemplate/columns.json";
                this.dialogMode = false;
            },
            //保存数据
            getForm(obj){
                this.loading = true;
                let _this = this;
                if (this.formType == 'edit') {
                    obj.formObj.id = this.nowId;
                }
                if(this.formType == 'copyAdd') {
                    let temp = {};
                    temp.id = this.nowId;
                    temp.name = obj.formObj.t_name;
                    temp.desc = obj.formObj.t_desc;
                    temp.status = obj.formObj.t_status;
                    this.$.autoAjax('put',URL.api + '/lottery/template.copy', temp, {
                        ok: (res) => {
                            if (res.state === 0 && res.data) {
                                _this.$message.success(LANG['恭喜您，彩票模板复制成功！'] || '恭喜您，彩票模板复制成功！');
                                _this.loading = false;
                                _this.updated = true;
                            } else {
                                _this.$message.success(LANG['彩票模板复制失败，请稍后重试！'] || '彩票模板复制失败，请稍后重试！');
                                _this.loading = false;
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                    // this.$http.put(URL.api + '/lottery/template.copy', temp, URLCONFIG).then((res) => {
                    //     if (res.data.state === 0 && res.data.data) {
                    //         _this.$message.success(LANG['恭喜您，彩票模板复制成功！'] || '恭喜您，彩票模板复制成功！');
                    //         _this.loading = false;
                    //         _this.updated = true;
                    //     } else {
                    //         _this.$message.success(LANG['彩票模板复制失败，请稍后重试！'] || '彩票模板复制失败，请稍后重试！');
                    //         _this.loading = false;
                    //     }
                    // })
                } else {
                    this.$.autoAjax('put',URL.api+ ROUTES.PUT.lottery.template,obj.formObj, {
                        ok: (res) => {
                            if (res.state == 0 && res.data) {
                                if(_this.formType == "add"){
                                    _this.$message.success(LANG['恭喜您，彩票模板添加成功！'] || '恭喜您，彩票模板添加成功！');
                                }else{
                                    _this.$message.success(LANG['恭喜您，彩票模板修改成功！'] || '恭喜您，彩票模板修改成功！');
                                }
                                _this.updated = true;

                            }else{
                                if(_this.formType == "add"){
                                    str = LANG['新增彩票模板失败，请稍候重试！'] || '新增彩票模板失败，请稍候重试！';
                                }else{
                                    str = LANG['修改彩票模板失败，请稍候重试！'] || '修改彩票模板失败，请稍候重试！';
                                }
                                _this.$message.error(str);
                            }
                            this.loading = false;
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                    // this.$http.put(URL.api+ ROUTES.PUT.lottery.template,obj.formObj,URLCONFIG).then((res)=>{
                    //     if (res.data.state == 0 && res.data.data) {
                    //         if(_this.formType == "add"){
                    //             _this.$message.success(LANG['恭喜您，彩票模板添加成功！'] || '恭喜您，彩票模板添加成功！');
                    //         }else{
                    //             _this.$message.success(LANG['恭喜您，彩票模板修改成功！'] || '恭喜您，彩票模板修改成功！');
                    //         }
                    //         _this.updated = true;
					//
                    //     }else{
                    //         if(_this.formType == "add"){
                    //             str = LANG['新增彩票模板失败，请稍候重试！'] || '新增彩票模板失败，请稍候重试！';
                    //         }else{
                    //             str = LANG['修改彩票模板失败，请稍候重试！'] || '修改彩票模板失败，请稍候重试！';
                    //         }
                    //         _this.$message.error(str);
                    //     }
                    //     this.loading = false;
                    // })
                }

            },
            //表格操作点击事件处理
            doHandle(e){
                this.formType = "";
                this.copyShow = false;
                this.nowId = parseInt(e.row['t_id']) || -1;
                this.updated = false;

                switch(e.fn) {
                    case "doCopyAdd":
                        this.doCopyAdd(e.row);
                        break;
                    case "doEdit":
                        this.doEdit(e.row);
                        break;
                    case "doSetOdds":
                        this.doSetOdds(e.row);
                        break;
                    case "doDelDate":
                        this.doDelDate(e.row);
                        break;
                    case "doEnable":
                        this.doEnable(e.row);
                        break;
                    case "doDisable":
                        this.doDisable(e.row);
                        break;
                    case "setMember":
                        this.setMember(e.row);
                        break;
                    case "setLevlLimit":
                        this.setLevlLimit(e.row);
                        break;
                }
            },
            // 解绑会员
            UnbundMembeer(rows){
                let ids = [];
                for(let k=0; k<rows.length; k++){
                    ids.push(rows[k]['user_id']);
                }
                let query = {"user_id": ids}
                this.loading = true;
                this.updated = false;
                let _this = this;

                this.$.autoAjax('post', URL.api + '/lottery/template.users',query, {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            _this.$message.success(LANG['恭喜您，会员解除关联成功！'] || '恭喜您，会员解除关联成功！');
                            _this.updated = true;
                        } else if(res.msg){
                            _this.$message.error(res.msg);
                        }else {
                            _this.$message.error(LANG['会员解除关联失败，请稍候重试！'] || '会员解除关联失败，请稍候重试！');
                        }
                        _this.loading = false;
                        _this.dialogMode = false;
                        _this.updated = true;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.post(URL.api + '/lottery/template.users',query,URLCONFIG).then((res) => {
                //     if (res.data.state == 0 && res.data.data) {
                //         _this.$message.success(LANG['恭喜您，会员解除关联成功！'] || '恭喜您，会员解除关联成功！');
                //         _this.updated = true;
                //     } else if(res.data.msg){
                //         _this.$message.error(res.data.msg);
                //     }else {
                //         _this.$message.error(LANG['会员解除关联失败，请稍候重试！'] || '会员解除关联失败，请稍候重试！');
                //     }
                //     _this.loading = false;
                //     _this.dialogMode = false;
                //     _this.updated = true;
                // })
            },
            // 解绑层级
            UnbundLevel(rows){
                let ids = [];
                for(let k=0; k<rows.length; k++){
                    ids.push(rows[k]['level_id']);
                }
                let query = {"level_id": ids}
                this.loading = true;
                this.updated = false;
                let _this = this;

                this.$.autoAjax('post',URL.api + '/lottery/template.levels/',query, {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            _this.$message.success(LANG['恭喜您，层级解除关联成功！'] || '恭喜您，层级解除关联成功！');
                            _this.updated = true;
                        } else if(res.msg){
                            _this.$message.error(res.msg);
                        }else {
                            _this.$message.error(LANG['层级解除关联失败，请稍候重试！'] || '层级解除关联失败，请稍候重试！');
                        }
                        _this.loading = false;
                        _this.dialogModeLevel = false;
                        _this.updated = true;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.post(URL.api + '/lottery/template.levels/',query,URLCONFIG).then((res) => {
                //     if (res.data.state == 0 && res.data.data) {
                //         _this.$message.success(LANG['恭喜您，层级解除关联成功！'] || '恭喜您，层级解除关联成功！');
                //         _this.updated = true;
                //     } else if(res.data.msg){
                //         _this.$message.error(res.data.msg);
                //     }else {
                //         _this.$message.error(LANG['层级解除关联失败，请稍候重试！'] || '层级解除关联失败，请稍候重试！');
                //     }
                //     _this.loading = false;
                //     _this.dialogModeLevel = false;
                //     _this.updated = true;
                // })
            },
            //  批量操作
            doOperation(obj){
                switch(obj.fn) {
                    case "UnbundMembeer":
                        this.UnbundMembeer(obj.rows);
                        break;
                }
            },
            //  批量操作
            doOperationLevel(obj){
                switch(obj.fn) {
                    case "UnbundLevel":
                        this.UnbundLevel(obj.rows);
                        break;
                }
            },
            // 表单事件 解绑会员
            setMember(row){
                this.modelTitle = row['t_name'];
                this.tableMember = '';
                if(row['member_number'] == 0){
                    this.$message.error(LANG['该模板无会员可解绑'] || '该模板无会员可解绑');
                    this.dialogMode = false;
                }else{
                    this.dialogMode = true;
                    setTimeout(()=>{
                        this.columnsMember = "static/json/lotteryNew/lotterytemplate/columnsMember.json";
                        this.tableMember = URL.api + '/lottery/template.users?tid=' + row['t_id'];
                    },300);
                }
            },
            // 表单事件 解绑层级
            setLevlLimit(row){
                this.LevelTitle = row['t_name'];
                this.tableLevel = '';
                if(row['level_number'] == 0){
                    this.$message.error(LANG['该模板无层级可解绑'] || '该模板无层级可解绑');
                    this.dialogModeLevel = false;
                }else{
                    this.dialogModeLevel = true;
                    setTimeout(()=>{
                        this.columnsLevel = "static/json/lotteryNew/lotterytemplate/columnsLevel.json";
                        this.tableLevel = URL.api + '/lottery/template.levels?tid=' + row['t_id'];
                    },300);
                }
            },
            //复制新增
            doCopyAdd(row){
                this.loading = true;
                this.formType = "";
                FORMVAL(row, this.formConfig);
                this.copyAdd=true;
                let _this = this;
                setTimeout(function(){
                    _this.formTitel = this.LANG["复制新增彩票模板"]||"复制新增彩票模板";
                    _this.editVisible.state = true;
                    _this.formType="copyAdd";
                    _this.loading = false;
                },500)
            },
            //删除数据
            doDelDate(row){
                let name = row['t_name'];
                if(row['t_status'] === "1"){
                    this.$message.error(LANG['启用的模板不可删除，请停用后重试！'] || '启用的模板不可删除，请停用后重试！');
                }else if(FORMATNUMBER(row['member_number']) > 0 || row['level_number'] > 0){
                    this.$message.error(LANG['此模板关联了会员和层级，不可以删除，请把关联的会员、层级全部解除'] || '此模板关联了会员和层级，不可以删除，请把关联的会员、层级全部解除');
                }else{
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') +'"'+ name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "delete";
                }
            },
            //确认删除
            doConfirm(obj){
                this.loading = true;
                let _this = this;
                let object = {};
                if(obj.obj){
                    object = obj.obj;
                }
                object.id = parseInt(this.nowId);
                switch (obj.fn){
                    case "delete":

                        this.$.autoAjax('delete',URL.api + ROUTES.DELETE.lottery.template.$(parseInt(this.nowId)), '', {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.$message.success(LANG['恭喜您，彩票模板删除成功！'] || '恭喜您，彩票模板删除成功！');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(LANG['彩票模板删除失败，请稍候重试！'] || '彩票模板删除失败，请稍候重试！');
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                _this.$message.error(LANG['彩票模板删除失败，请稍候重试！'] || '彩票模板删除失败，请稍候重试！');
                                _this.loading = false;
                            }
                        })
                        // this.$http.delete(URL.api + ROUTES.DELETE.lottery.template.$(parseInt(this.nowId)),URLCONFIG).then((res) => {
                        //     if (res.data.state == 0 && res.data.data) {
                        //         _this.$message.success(LANG['恭喜您，彩票模板删除成功！'] || '恭喜您，彩票模板删除成功！');
                        //         _this.updated = true;
                        //     } else {
                        //         _this.$message.error(LANG['彩票模板删除失败，请稍候重试！'] || '彩票模板删除失败，请稍候重试！');
                        //     }
                        //     _this.loading = false;
                        // }).catch((e)=>{
                        //     _this.$message.error(LANG['彩票模板删除失败，请稍候重试！'] || '彩票模板删除失败，请稍候重试！');
                        //     _this.loading = false;
                        // });
                        break;
                    case "enable":

                        this.$.autoAjax('put',URL.api+ ROUTES.PUT.lottery.template,{"t_status":1,"id":this.nowId,"t_name":object['t_name'],"t_desc":object['t_desc']}, {
                            ok: (res) => {
                                if(res.state == 0  && res.data){
                                    _this.$message.success(LANG['恭喜您，彩票模板启用成功！'] || '恭喜您，彩票模板启用成功！');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(LANG['彩票模板启用失败，请稍候重试！'] || '彩票模板启用失败，请稍候重试！');
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                _this.$message.error(LANG['彩票模板启用失败，请稍候重试！'] || '彩票模板启用失败，请稍候重试！');
                                _this.loading = false;
                            }
                        })
                        // this.$http.put(URL.api+ ROUTES.PUT.lottery.template,JSON.stringify({"t_status":1,"id":this.nowId,"t_name":object['t_name'],"t_desc":object['t_desc']}),URLCONFIG).then((res)=> {
                        //     if(res.data.state == 0  && res.data.data){
                        //         _this.$message.success(LANG['恭喜您，彩票模板启用成功！'] || '恭喜您，彩票模板启用成功！');
                        //         _this.updated = true;
                        //     } else {
                        //         _this.$message.error(LANG['彩票模板启用失败，请稍候重试！'] || '彩票模板启用失败，请稍候重试！');
                        //     }
                        //     _this.loading = false;
                        // }).catch((e)=>{
                        //     _this.$message.error(LANG['彩票模板启用失败，请稍候重试！'] || '彩票模板启用失败，请稍候重试！');
                        //     _this.loading = false;
                        // });
                        break;
                    case "disable":

                        this.$.autoAjax('put',URL.api+ ROUTES.PUT.lottery.template,{"t_status":0,"id":this.nowId,"t_name":object['t_name'],"t_desc":object['t_desc']}, {
                            ok: (res) => {
                                if(res.state == 0  && res.data){
                                    _this.$message.success(LANG['恭喜您，彩票模板停用成功！'] || '恭喜您，彩票模板停用成功！');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(LANG['彩票模板停用失败，请稍候重试！'] || '彩票模板停用失败，请稍候重试！');
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                _this.$message.error(LANG['彩票模板停用失败，请稍候重试！'] || '彩票模板停用失败，请稍候重试！');
                                _this.loading = false;
                            }
                        })
                        // this.$http.put(URL.api+ ROUTES.PUT.lottery.template,{"t_status":0,"id":this.nowId,"t_name":object['t_name'],"t_desc":object['t_desc']},URLCONFIG).then((res)=> {
                        //     if(res.data.state == 0  && res.data.data){
                        //         _this.$message.success(LANG['恭喜您，彩票模板停用成功！'] || '恭喜您，彩票模板停用成功！');
                        //         _this.updated = true;
                        //     } else {
                        //         _this.$message.error(LANG['彩票模板停用失败，请稍候重试！'] || '彩票模板停用失败，请稍候重试！');
                        //     }
                        //     _this.loading = false;
                        // }).catch((e)=>{
                        //     _this.$message.error(LANG['彩票模板停用失败，请稍候重试！'] || '彩票模板停用失败，请稍候重试！');
                        //     _this.loading = false;
                        // });
                        break;
                }
            },
            //设置赔率
            doSetOdds(row){
                this.$router.push({path: '/lotteryOdds',query:{"id":parseInt(this.nowId),"name":row['t_name']}});
            },
            //启用
            doEnable(row){
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定要启用'] || '确定要启用') +'"'+ row['t_name'] + '"' + (this.LANG['这个模板吗?当前网站模板将停止使用.'] || '这个模板吗?当前网站模板将停止使用.');
                this.confirmConfig.fn = "enable";
                this.confirmConfig.obj = row;
            },
            //停用
            doDisable(row){
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定要停用'] || '确定要停用') +'"'+ row['t_name'] + '"' + (this.LANG['这个模板吗?'] || '这个模板吗?');
                this.confirmConfig.fn = "disable";
                this.confirmConfig.obj = row;
            },
            //选中修改数据
            doEdit(row){
                //FORM赋值
                this.loading = true;
                FORMVAL(row, this.formConfig);
                this.formTitel = this.LANG["修改彩票模板"]||"修改彩票模板";
                let _this = this;
                setTimeout(function(){
                    _this.formType ="edit";
                    _this.editVisible.state = true;
                    _this.loading = false;
                },500)
            },
            //新增数据
            doAdd(){
                this.updated = false;
                this.formTitel = "新增彩票模板";
                this.editVisible.state = true;
                this.formType="add";
            }
        },
        created() {
            this.init();
        }
    }
</script>
<style lang="less">
    .templateManage{
        .dialogModeBox{min-height: 100px;max-height:400px;overflow: auto;}
        .el-dialog--small{width:30%;min-width:400px; max-width:600px;border-radius:10px;}
        .el-dialog--small .fromMargin{margin-right:60px;}
        .bg-purple-dark{background:none;}
        .addManage{text-align: right;}
        .block{text-align:right;}
    }
</style>
