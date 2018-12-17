<template>
    <div id="lotterSort" v-loading="loading">
        <newtree :lotterydata="list":sortObj="sortObj" @save-form="doSaveForm" @sub-edit="doSubEdit"></newtree>
        <el-col>
            <formEdit :formTitel="formTitel" :formVisible="editVisible" :formConfig="formConfig" :type="'default'"
                      :labelWidth="labelWidth" @get-form="getForm" :isEdit="isEdit" :formType="formType"></formEdit>
        </el-col>
    </div>
</template>
<script>
    import newtree from '../../components/newTree.vue'
    import formEdit from '../../components/formEdit.vue'
    export default {
        data() {
            return {
                LANG,
                list: [],
                list_show: [],//配置哪些是需要展开
                sortObj: {},
                //弹窗
                formConfig: [
                    {"prop": "name", "value": "", "type": "label", "label": "名称"},
                    {
                        "prop": "display",
                        "value": "",
                        "label": "是否显示",
                        "type": "select",
                        "list": [{label: '是',value: '1'},{label: '否',value: '0'}],
                        "rules": [{"require": true}]
                    }
                ],
                labelWidth: "110px",
                formTitel: '',
                editVisible: {
                    state: false
                },
                isEdit: {
                    state: false
                },
                formType: '',
                nowSubId: -1,
                loading: false
            }
        },
        methods: {
            init() {
                this.loading = true;
                this.list.splice(0,this.list.length);
                this.editVisible.state = false;
                let data = this.list;
                this.sortObj = {};
                let sortObj = this.sortObj;
                // 请求彩票数据
                this.$.autoAjax('get', URL.api + '/lottery/sort', '', {
                    ok: (res) => {
                        if(res.state === 0 && res.data){
                            let list = res.data || [];
                            for(let i=0; i<list.length; i++){
                                let obj = {
                                    key: i,
                                    id: list[i].id,
                                    sort: list[i].sort,
                                    show: true
                                }
                                if(list[i].sub){
                                    obj.sub = [];
                                    let temp = list[i].sub;
                                    for(let k=0; k<temp.length; k++){
                                        obj.sub.push({
                                            id: temp[k].id,
                                            sort: temp[k].sort
                                        });
                                    }
                                }
                                sortObj[i] = obj;
                                data.push(list[i]);
                                this.list_show[i] = true;
                            }
                        }
                        this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            // 保存排序
            doSaveForm(obj){
                this.loading = true;
                let temp = obj.data || {},list = [];
                for(let k in temp){
                    list.push({
                        id: temp[k].id,
                        sort: temp[k].sort,
                        sub: temp[k].sub ? temp[k].sub : []
                    });
                }
                let query = {};
                query.list = list;
                this.$.autoAjax('post',URL.api + '/lottery/sort' ,query, {
                    ok: (res) => {
                        if(res.state === 0 && res.data){
                            this.$message.success(LANG['彩票排序成功'] || '彩票排序成功');
                            this.init();
                        } else if(res.msg){
                            this.$message.error(res.msg);
                        } else {
                            this.$message.error(LANG['彩票排序失败，请稍候重试'] || '彩票排序失败，请稍候重试');
                        }
                        this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        this.loading = false;
                    }
                })
            },
            // 编辑彩票子类
            doSubEdit(obj){
                this.loading = true;
                this.formConfig = [
                    {"prop": "name", "value": "", "type": "label", "label": "名称"},
                    {
                        "prop": "display",
                        "value": "",
                        "label": "是否显示",
                        "type": "select",
                        "list": [{label: '是',value: '1'},{label: '否',value: '0'}],
                        "rules": [{"require": true}]
                    }
                ]
                this.$.autoAjax('get',URL.api + '/lottery/sort.set/' + obj.row.id , '', {
                    ok: (res) => {
                        if(res.state === 0 && res.data){
                            let temp = res.data;
                            this.nowSubId = temp.id;
                            this.formConfig[0].value =temp.name || '';
                            this.formConfig[1].value = temp.display;
                            if(temp.options['fast']){
                                this.formConfig.push({
                                    "prop": "default_fast",
                                    "value": "",
                                    "label": "信用",
                                    "type": "select",
                                    "list": [],
                                    "rules": [{"require": true}]
                                });
                                let fast = this.formConfig[2].list;
                                this.formConfig[2].value = temp.default_fast;
                                temp.options['fast'].forEach((item)=>{
                                    fast.push({
                                        label: item.name,
                                        value: item.id
                                    });
                                })
                            }
                            if(temp.options['standard']){
                                this.formConfig.push({
                                    "prop": "default_standard",
                                    "value": "",
                                    "label": "官方",
                                    "type": "select",
                                    "list": [],
                                    "rules": [{"require": true}]
                                });
                                this.formConfig[3].value = temp.default_standard;
                                let standard = this.formConfig[3].list;
                                temp.options['standard'].forEach((item)=>{
                                    standard.push({
                                        label: item.name,
                                        value: item.id
                                    });
                                })
                            }
                            this.editVisible.state = true;
                            this.loading = false;
                        } else {
                            this.$message.error(LANG['数据错误，请稍后重试'] || '数据错误，请稍后重试');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            // 保存编辑内容
            getForm(obj){
                this.loading = true;
                let temp = {
                    id: this.nowSubId,
                    display: obj.formObj.display,
                    default_fast: obj.formObj.default_fast,
                    default_standard: obj.formObj.default_standard
                }
                this.$.autoAjax('post',URL.api + '/lottery/sort.set' ,temp , {
                    ok: (res) => {
                        if(res.state === 0 && res.data){
                            this.$message.success(LANG['彩票信息修改成功'] || '彩票信息修改成功');
                            this.init();
                        } else if(res.msg){
                            this.$message.error(res.msg);
                        } else {
                            this.$message.error(LANG['彩票信息修改失败，请稍后重试'] || '彩票信息修改失败，请稍后重试');
                        }
                        this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            }
        },
        components: {
            newtree: newtree,
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

</style>
