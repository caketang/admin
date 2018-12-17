<template>
	<div id="ZKCnote">
        <el-col :span="24" class="mb20 pb" style="min-height: 500px;">
            <el-col>
                <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :showExport="false"
                    :times="times"
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
                updated: false,
                times: 30,
            }
		},
        components: {
            tablegrid: tablegrid,
        },
        props:{
            lotteryData:Object,
            columnsUrl:String,
            //表格数据
            tableUrl: String,
        },
		methods: {
			init() {

			},
            doHandle() {
            }
		},
		computed: {},
//		watch: {
//            //如果数据网址发生变化，就执行数据请求
//            lotteryData: {
//                handler(val, old) {
////                    this.init();
//                    console.log(val)
//                },
//                //是否绑定初始值
//                immediate: true,
//                //深度监听
//                deep: true
//            },
//        },
		mounted() {
		},
		created() {
            this.init()
		}
	}
</script>
<style scopend>

</style>
