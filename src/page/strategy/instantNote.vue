<template>
    <div id="IpBlacklist">
        <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="'search'" :labelWidth="labelWidth"
                  :isEdit="isEdit" @do-query="doQuery" @do-resetForm="resetForm" ></formEdit>
        <el-button type="primary" class="doAddIP" @click="doAddIP" v-text="LANG['新增IP'] || '新增IP'" size="small" style="position: absolute;top:20px;right:20px;"></el-button>
        <el-col>
            <tablegrid
                    @date-selection="doOperation"
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="true"
                    :pageSet="true"
                    :tableIndex="false"
                    @do-handle="doHandle"
            >
            </tablegrid>
        </el-col>
        <el-col>
            <formEdit :formTitel="formTitle" :formVisible="formVisible" :formConfig="formConfig" :type="formType" :labelWidth="formLabelWidth" :isEdit="isEdit" @get-form="submitForm" :formType="formType"></formEdit>
        </el-col>
        <el-col>
            <el-button type="primary" @click="doBatchDel" v-text="LANG['删除'] || '删除'" size="small"></el-button>
            <el-button type="primary" @click="doBatchLimit" v-text="LANG['限制'] || '限制'" size="small"></el-button>
            <el-button type="primary" @click="doBatchAllow" v-text="LANG['允许'] || '允许'" size="small"></el-button>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    import NProgress from 'nprogress'
    export default{
        data(){
            return {
                LANG,
                //表格相关
                columnsUrl: "",
                tableUrl: "",
                //搜索相关
                searchConfig: [//快捷日期
                    {"prop": "ip", "value": "", "type": "text", "label": "IP"},
                    {"prop":"status","value":"","label":"状态","type":"select",
                        "list":[{"label":"允许", "value":1}, {"label":"禁止", "value":0}]},
                    {"type":"dateGroup","label":"建立时间",
                        "prop":[{"prop":"time_begin","value":"","label":"开始时间"},
                            {"prop":"time_end","value":"","label":"结束时间"}]}
                ],
                nowId: -1,
                isEdit: {},
                labelWidth: "80px",
                baseUrl:"",
                // form
                formVisible:{
                    state:false
                },
                formTitle: "",
                formType:"default",
                formLabelWidth:"60px",
                formConfig:[
                    {"prop":"ip","value":"","label":"IP","type":"ip", "rules":[{"require":true}]},
                    {"prop":"memo","value":"","label":"备注","type":"textarea", "rules":[{"max": 128}]},
                    {"prop":"status","value":"","label":"状态","type":"select", "rules":[{"require":true}],
                        "list": [{"label":"允许", "value": "1"}, {"label":"禁止", "value": "0"}]
                    }
                ],
                selectedIds: [] // table选中的选项
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
        },
        methods: {
            init(){
                this.columnsUrl = "static/json/systemSettings/IPblackList/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.system.ipblacks;
                this.baseUrl = URL.api + ROUTES.GET.system.ipblacks;
            },
            //查询
            doQuery( obj ){
                this.tableUrl=this.baseUrl+this.addSearch(obj.item)
            },
            //重置
            resetForm(){
                this.tableUrl = URL.api + ROUTES.GET.unused.list
            },
            //表格数据按钮
            doHandle(item){
                switch (item.fn) {
                    case "doEdit": // 编辑
                        this.doEdit(item.row)
                        break
                    case "doAllow":
                        this.submitAllow(item.row)
                        break
                    case "doLimit":
                        this.submitLimit(item.row)
                        break
                    case "doDel":
                        this.submitDel(item.row)
                        break
                }
            },
            doEdit (row) {
                this.nowId = row.id;
                this.formTitle = this.LANG["修改IP"] || "修改IP";
                this.formType = "edit";
                FORMVAL(row, this.formConfig);
                this.isEdit.state = true;
                this.formVisible.state = true;

            },
            submitAllow (row) {

                this.$.autoAjax('put',URL.api + ROUTES.PUT.system.ipblacks +'/'+ row.id, {state: 1}, {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.$message.success(this.LANG['允许IP成功'] || '允许IP成功');
                        } else {
                            this.$message.error(this.LANG['允许IP失败，请稍后重试'] || '允许IP失败，请稍后重试');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.put(URL.api + ROUTES.PUT.system.ipblacks +'/'+ row.id, JSON.stringify({state: 1}), URLCONFIG).then((res) => {
                //     if (res.data.state === 0 && res.data.data) {
                //         this.$message.success(this.LANG['允许IP成功'] || '允许IP成功');
                //     } else {
                //         this.$message.error(this.LANG['允许IP失败，请稍后重试'] || '允许IP失败，请稍后重试');
                //     }
                // })
            },
            submitLimit (row) {
                this.$.autoAjax('put',URL.api + ROUTES.PUT.system.ipblacks +'/'+ row.id, {state: 0}, {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.$message.success(this.LANG['限制IP成功'] || '限制IP成功');
                        } else {
                            this.$message.error(this.LANG['限制IP失败，请稍后重试'] || '限制IP失败，请稍后重试');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.put(URL.api + ROUTES.PUT.system.ipblacks +'/'+ row.id, JSON.stringify({state: 0}), URLCONFIG).then((res) => {
                //     if (res.data.state === 0 && res.data.data) {
                //         this.$message.success(this.LANG['限制IP成功'] || '限制IP成功');
                //     } else {
                //         this.$message.error(this.LANG['限制IP失败，请稍后重试'] || '限制IP失败，请稍后重试');
                //     }
                // })
            },
            submitDel (row) {

                this.$.autoAjax('delete',URL.api + ROUTES.DELETE.system.ipblacks +'/'+ row.id, '', {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.$message.success(this.LANG['删除IP成功'] || '删除IP成功');
                        } else {
                            this.$message.error(this.LANG['删除IP失败，请稍后重试'] || '删除IP失败，请稍后重试');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.delete(URL.api + ROUTES.DELETE.system.ipblacks +'/'+ row.id, "", URLCONFIG).then((res) => {
                //     if (res.data.state === 0 && res.data.data) {
                //         this.$message.success(this.LANG['删除IP成功'] || '删除IP成功');
                //     } else {
                //         this.$message.error(this.LANG['删除IP失败，请稍后重试'] || '删除IP失败，请稍后重试');
                //     }
                // })
            },
            //选中删除数据
            doDelete(row){
//                NProgress.start();
                var _this = this
                let url = URL.api + ROUTES.DELETE.unused.list
                this.$http.get(url).then(function (res) {

                    NProgress.done();

                }).catch(function (err) {
//                    console.log(err)
                })
            },
            doAddIP (){
                this.formTitle = this.LANG["添加IP"] || "添加IP";
                this.formVisible.state = true;
                this.formType = "add";
                for (let i in this.formConfig) {
                    this.formConfig[i].value = null;
                }
            },
            // 批量删除
            doBatchDel(){
                if ( this.selectedIds.length == 0 ){
                    this.$message.error(this.LANG["请至少选中一条数据"] || "请至少选中一条数据");
                    return;
                }
                let ids = this.selectedIds;


                this.$.autoAjax('delete',URL.api + ROUTES.DELETE.system.ipblacks +'/ids='+ ids.join(","), '', {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.$message.success(this.LANG['批量删除IP成功'] || '批量删除IP成功');
                        } else {
                            this.$message.error(this.LANG['批量删除IP失败，请稍后重试'] || '批量删除IP失败，请稍后重试');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.delete(URL.api + ROUTES.DELETE.system.ipblacks +'/ids='+ ids.join(","), "", URLCONFIG).then((res) => {
                //     if (res.data.state === 0 && res.data.data) {
                //         this.$message.success(this.LANG['批量删除IP成功'] || '批量删除IP成功');
                //     } else {
                //         this.$message.error(this.LANG['批量删除IP失败，请稍后重试'] || '批量删除IP失败，请稍后重试');
                //     }
                // })
            },
            // 批量允许
            doBatchAllow(){
                if ( this.selectedIds.length == 0 ){
                    this.$message.error(this.LANG["请至少选中一条数据"] || "请至少选中一条数据");
                    return;
                }
                let ids = this.selectedIds;

                this.$.autoAjax('PATCH',URL.api + ROUTES.PATCH.system.ipblacks, {state: 1, ids: ids.join(",")},  {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.$message.success(this.LANG['批量允许IP成功'] || '批量允许IP成功');
                        } else {
                            this.$message.error(this.LANG['批量允许IP失败，请稍后重试'] || '批量允许IP失败，请稍后重试');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.PATCH(URL.api + ROUTES.PATCH.system.ipblacks, JSON.stringify({state: 1, ids: ids.join(",")}), URLCONFIG).then((res) => {
                //         if (res.data.state === 0 && res.data.data) {
                //             this.$message.success(this.LANG['批量允许IP成功'] || '批量允许IP成功');
                //         } else {
                //             this.$message.error(this.LANG['批量允许IP失败，请稍后重试'] || '批量允许IP失败，请稍后重试');
                //         }
                //     })

            },
            // 批量限制
            doBatchLimit(){
                if ( this.selectedIds.length == 0 ){
                    this.$message.error(this.LANG["请至少选中一条数据"] || "请至少选中一条数据");
                    return;
                }
                let ids = this.selectedIds;

                this.$.autoAjax('PATCH',URL.api + ROUTES.PATCH.system.ipblacks, {state: 0, ids: ids.join(",")}, {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.$message.success(this.LANG['批量限制IP成功'] || '批量限制IP成功');
                        } else {
                            this.$message.error(this.LANG['批量限制IP失败，请稍后重试'] || '批量限制IP失败，请稍后重试');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.PATCH(URL.api + ROUTES.PATCH.system.ipblacks, JSON.stringify({state: 0, ids: ids.join(",")}), URLCONFIG).then((res) => {
                //     if (res.data.state === 0 && res.data.data) {
                //         this.$message.success(this.LANG['批量限制IP成功'] || '批量限制IP成功');
                //     } else {
                //         this.$message.error(this.LANG['批量限制IP失败，请稍后重试'] || '批量限制IP失败，请稍后重试');
                //     }
                // })
            },
            // 提交新增修改
            submitForm (obj){
                let _this = this;
                let str = "";
                obj.formObj.id = this.nowId;

                this.$.autoAjax('put',URL.api+ ROUTES.PUT.system.ipblacks+"/"+parseInt(this.nowId),obj.formObj, {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            if(_this.formType === "add"){
                                str=_this.LANG['新增IP成功！'] || '新增IP成功！';
                                _this.updateType = "add";
                            }else{
                                str=_this.LANG['IP修改成功！'] || 'IP修改成功！';
                                _this.updateType = "edit";
                            }
                            _this.$message.success(str);

                        }else{
                            if(_this.formType === "edit"){
                                str=_this.LANG['新增IP失败，请稍候重试！'] || '新增IP失败，请稍候重试！';
                            }else{
                                str=_this.LANG['修改IP失败，请稍候重试！'] || '修改IP失败，请稍候重试！';
                            }
                            _this.$message.error(str);
                        }
                        _this.formType = "";
                        _this.formVisible.state = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.put(URL.api+ ROUTES.PUT.system.ipblacks+"/"+parseInt(this.nowId),JSON.stringify(obj.formObj),URLCONFIG).then((res)=>{
                //     if (res.data.state === 0 && res.data.data) {
                //         if(_this.formType === "add"){
                //             str=_this.LANG['新增IP成功！'] || '新增IP成功！';
                //             _this.updateType = "add";
                //         }else{
                //             str=_this.LANG['IP修改成功！'] || 'IP修改成功！';
                //             _this.updateType = "edit";
                //         }
                //         _this.$message.success(str);
				//
                //     }else{
                //         if(_this.formType === "edit"){
                //             str=_this.LANG['新增IP失败，请稍候重试！'] || '新增IP失败，请稍候重试！';
                //         }else{
                //             str=_this.LANG['修改IP失败，请稍候重试！'] || '修改IP失败，请稍候重试！';
                //         }
                //         _this.$message.error(str);
                //     }
                //     _this.formType = "";
                //     _this.formVisible.state = false;
                // })
            },
            doOperation (data) {
                this.selectedIds = []; // 清空已选选项
                var ids = data.row || [];
                ids.map((item) =>{
                    this.selectedIds.push(item.id)
                })

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
