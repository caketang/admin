<template>
    <div id="idleAccount">
        <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="type" :labelWidth="labelWidth"
                  :isEdit="isEdit" @do-query="doQuery" @reset-form="resetForm" :showAdd="false"></formEdit>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="true"
                    :pageSet="true"
                    :tabOperation="tabOperation"
                    :updated="updated"
                    @do-operation="doOperation"
                    @do-handle="doHandle">
            </tablegrid>
            <!-- <el-button icon="delete" @click="delMeg" > 删 除</el-button> -->
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    import NProgress from 'nprogress'
    import confirm from '../../components/confirm.vue';

    export default{
        data(){
            return {
                //表格相关
                LANG,
                columnsUrl: "",
                tableUrl: "",
                //搜索相关
                searchConfig: [//快捷日期
                    {"prop": "username", "value": "", "type": "text", "label": "用户名"},
                    {"prop": "balance", "value": "", "type": "text", "label": "总额小于"},
                    {"prop": "over_day", "value": "", "type": "number", "label": "超过几天没有登录", "rules": [{"require": true,"moreZero":true,"integer":true}]}],
                type: "search",
                isEdit: {},
                labelWidth: "135px",
                formVisible: {
                    state: false
                },
                baseUrl:"",
                //批量操作按钮
                tabOperation : [{"label":"批量停用","fn":"delMeg"},{"label":"批量封号","fn":"sealMeg"}],
                updated: false,
                //确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
            }
        },
        components: {
            tablegrid: tableGrid,
            formEdit: formEdit,
            confirm: confirm
        },
        methods: {
            init(){
                this.columnsUrl = "static/json/accoutManage/idleAccount/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.unused.list;
                this.baseUrl = URL.api + ROUTES.GET.unused.list;
            },
            doHandle(item) {
                this.updated = false;
                this.nowId = item.row.id || -1;
                switch (item.fn) {
                    case "openUserSet": // 用户名跳转
                        this.openUserSet(item.row)
                        break;
                    default:
                        break;
                }
            },
            //用户名跳转
            openUserSet(item){
                this.$router.push({path:'/memberManagement',query:{name:item.name}});
            },
            //查询
            doQuery( obj ){
                let obj_f = {};
                if (obj.item.balance) {
                    obj_f.balance = obj.item.balance * 100;
                }
                if (obj.item.over_day) {
                    obj_f.over_day = obj.item.over_day;
                }
                if (obj.item.username) {
                    obj_f.username = obj.item.username;
                }
                this.tableUrl=this.baseUrl+this.addSearch(obj_f);
            },
            //重置
            resetForm(){
                this.tableUrl = this.baseUrl;
            },
            //确认删除
            doConfirm(obj){
                let _this = this;
                this.updated = false;
                let id = obj.obj.map(function(i){
                    return i.id;
                });
                let ids=id.join(",");
                switch (obj.fn) {
                    // 批量删除
                    case "delete":
                        let url = URL.api +'/user/unused';
                        let id = ids.split(',');

                        this.$.autoAjax('patch',url,{'ids': id}, {
                            ok: (res) => {
                                if (res.state == 0) {
                                    this.$message.success(this.LANG['成功停用所选用户'] || '成功停用所选用户');
                                    this.updated = true;
                                } else {
                                    this.$message.error(this.LANG['批量停用失败'] || '批量停用失败');
                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                        // this.$http.patch(url, JSON.stringify({'ids': id}),URLCONFIG).then((res) => {
                        //     if (res.data.state == 0) {
                        //         this.$message.success(this.LANG['成功停用所选用户'] || '成功停用所选用户');
                        //         this.updated = true;
                        //     } else {
                        //         this.$message.error(this.LANG['批量停用失败'] || '批量停用失败');
                        //     }
                        // })
                        .catch(function (err) {
//                            console.log(err)
                        })
                        break;
                    // 批量封号
                    case "seal":

                        this.$.autoAjax('put',URL.api + ROUTES.PUT.user.setting, {'ids': ids, 'state': 4}, {
                            ok: (res) => {
                                if (res.state != undefined && res.state == 0 && res.state == 0) {
                                    this.$message.success(this.LANG['闲置帐号封号成功'] || '闲置帐号封号成功');
                                    this.updated = true;
                                } else {
                                    this.$message.error(this.LANG['闲置帐号封号失败，请稍后重试'] || '闲置帐号封号失败，请稍后重试');
                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                        // this.$http.put(URL.api + ROUTES.PUT.user.setting, JSON.stringify({'ids': ids, 'state': 4}), URLCONFIG).then((res) => {
                        //     if (res.data.state != undefined && res.data.state == 0 && res.data.state == 0) {
                        //         this.$message.success(this.LANG['闲置帐号封号成功'] || '闲置帐号封号成功');
                        //         this.updated = true;
                        //     } else {
                        //         this.$message.error(this.LANG['闲置帐号封号失败，请稍后重试'] || '闲置帐号封号失败，请稍后重试');
                        //     }
                        // })
                        //等接口
                        break;
                }
            },
            //批量删除提示
            delMeg(list) {
                if (list.length > 0) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定批量停用吗?'] || '确定批量停用吗?');
                    this.confirmConfig.fn = "delete";
                    this.confirmConfig.obj = list;
                }
            },
            // 批量封号提示
            sealMeg(list) {
                if (list.length > 0) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定批量封号吗?'] || '确定批量封号吗?');
                    this.confirmConfig.fn = "seal";
                    this.confirmConfig.obj = list;
                }
            },
            //表格批量操作触发
            doOperation(obj){
                switch (obj.fn){
                    // 批量删除
                    case "delMeg":
                        this.delMeg(obj.rows)
                        break;
                    // 批量封号
                    case "sealMeg":
                        this.sealMeg(obj.rows)
                        break;
                }
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
