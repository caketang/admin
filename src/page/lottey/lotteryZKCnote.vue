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
        <el-dialog
            :title="dialogTitle"
            :visible.sync="dialogVisible"
            size="tiny"
            :before-close="handleClose">
            <el-row :gutter="20">
              <div><span class="labelContent">彩种：</span><el-tag type="gray">{{lotteryData.lottery_name}}</el-tag></div>
                <div><span class="labelContent">彩期列表：</span><el-tag type="success">{{lottery_number}}</el-tag></div>
               <div><span class="labelContent">封盘时间：</span><span>21：32：04</span> 现在时间：<span>11:23:11</span></div>
               <div><span class="labelContent">预设彩果：</span><el-input
                   size="small"
                   placeholder="请输入预设开奖号码"
                   v-model="manual" class="w60">
               </el-input></div>
                <p class="font14 state_info">温馨提示：开奖号码必须是5个号码0-9的数字组成，且必须使用半角逗号隔开，如：5,4,6,7,9</p>
            </el-row>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
        </el-dialog>

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
                //弹窗设置
                dialogVisible:false,
                dialogTitle:'预设彩果',
                lottery_number:'',
                manual:''
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
                this.lottery_number = ''
            },
            doHandle(row) {
                switch (row.fn){
                    case 'doEdit':
                        this.doEdit(row)
                        break;
                }
            },
            handleClose(){
                this.dialogVisible = false
            },
            doEdit(row){
//                console.log(row.row.lottery_number)
                this.lottery_number = row.row.lottery_number
                this.dialogVisible = true
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
<style scopend lang="less">
    #ZKCnote{
        .labelContent{
            display: inline-block;
            width: 90px;
            text-align: right;
            padding-right:5px;
        }

    }
</style>
