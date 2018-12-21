<template>
    <div id="ZKCnote">
        <el-col :span="24" class="mb20 pb" style="min-height: 500px;">
            <el-col>
                <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :showExport="false"
                    :times="times"
                    :updated="updated"
                    :autoshowRefresh="true"
                    :getData="true"
                    @do-handle="doHandle">
                </tablegrid>
            </el-col>
        </el-col>
    </div>
</template>
<script>
    import tablegrid from '../../components/tableGrid.vue'
    import datepicker from '../../components/dateTimePicker.vue'

    export default {
        data() {
            return {
                times: 30,
                updated:false,
            }
        },
        components: {
            tablegrid: tablegrid,
        },
        props: {
            lotteryData: Object,
            columnsUrl: String,
            //表格数据
            tableUrl: String,
        },
        methods: {
            init() {

            },
            doHandle(){},
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init()
        }
    }
</script>
<style scopend lang="less">
    #ZKCnote {
        .labelContent {
            display: inline-block;
            width: 90px;
            line-height: 38px;
            text-align: right;
            padding-right: 5px;
        }

    }
</style>
