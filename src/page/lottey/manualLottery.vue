<template>
    <div id="manualLottery">
        <el-col :span="24" style="margin:10px 0;">
            <formEdit :formVisible="formVisible"
                      :formConfig="searchConfig"
                      :type="type"
                      :labelWidth="labelWidth"
                      @do-query="doQuery"
                      :isEdit="isEdit"
                      @reset-form="resetForm"
                      :formReset="formReset"
                      :formType="formType"
                      :showAdd="false"
            ></formEdit>
        </el-col>
    </div>
</template>
<script>
    import formEdit from '../../components/formEdit.vue'

    export default {
        data() {
            return {
                formType: "",
                type: "search",
                labelWidth: "90px",
                //搜索相关
                searchConfig: [
                    {
                        "prop": "lottery_id", "value": "", "label": "彩票名称", "type": "select",
                        "list": []
                    },
                    {"prop": "order_number", "value": "", "type": "text", "label": "期 号"},
                ],
                formVisible: {
                    state: false
                },
                LANG,
                isEdit: {
                    state: false
                },
                formReset: false,
            }
        },
        methods: {
            init() {
                //初始化彩票名称
                this.$.autoAjax('get', URL.api + ROUTES.GET.lottery.types.$, '', {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            let model = res.data || [];
                            model.forEach((item) => {
                                this.searchConfig[0].list.push({
                                    "label": item.name,
                                    "value": item.id.toString(),
                                    "pid": item.pid
                                })
                            })

                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },

            doQuery() {
            },
            resetForm() {
                this.resetForm = true
            }
        },
        components: {
            formEdit: formEdit
        },
        computed: {},
        watch: {},
        mounted() {
        },
        created() {
            this.init()
        }
    }
</script>
<style scopend>

</style>
