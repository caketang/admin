<template>
    <div id="changeAll">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="">全选</el-checkbox>
        <el-checkbox-group v-model="checkedval.checked" @change="handleCheckedCitiesChange" class="mt15">
            <el-checkbox v-for="(item,index) in checkOptions" :key="index" :label="item.value || item">{{item.label || item}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
    export default{
        data(){
			return{
                //选中值
                checkVal:[],
                //是否已全选
                checkAll: false,
                //全选样式
                isIndeterminate: true
			}
		},
		props: {
            //选择数据
            checkOptions:Array,
            //默认选中值
            checkedval:{
                type:Object,
                default:{
                    checked:[]
                }
            },
            sReset:Boolean
		},
        watch: {
            sReset: function (newVal) {
                if(newVal === true){
                    this.changeReset()
                }
            }
        },
		methods: {
            // 初始化
            init(){
                if(this.checkedval.checked.length>0){
                    for(let i in this.checkedval){
                        this.checkVal.push(this.checkedval[i])
                        this.checkedval.checked.push(this.checkedval[i])
                    }
                    this.checkAll=true
                }else{
                    this.checkVal=[]
                    this.checkedval.checked=[]
                    this.checkAll=false
                    this.isIndeterminate = false;
                }
            },
            // 全选状态
            checkallState(){
                let _this = this;
                if(this.checkOptions.length === this.checkedval.checked.length && this.checkOptions.length > 0){
                    this.checkAll =  true;
                } else {
                    this.checkAll =  false;
                }
            },
            //全选按钮事件
            handleCheckAllChange(e) {
                let event = window.event|| e;
                let obj = event.srcElement ? event.srcElement: event.target;
                let temp = [];
                if(this.checkOptions.length && this.checkOptions[0].value){
                    this.checkOptions.forEach((item)=>{
                        temp.push(item.value);
                    })
                } else {
                    temp = this.checkOptions;
                }
                this.checkVal = obj.checked ? temp : [];
                this.checkedval.checked = obj.checked ? temp : [];
                this.isIndeterminate = false;
                this.$emit('change-option',{"item":this.checkedval.checked})
            },
            //checkbox点击事件
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.checkOptions.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.checkOptions.length;
                this.$emit('change-option',{"item":this.checkedval.checked})
            },
            //重置数据
            changeReset(){
                this.checkVal=[]
                this.checkedval.checked=[]
                this.checkAll=false
                this.isIndeterminate = false
            }
		},
        mounted(){
            this.init()
        },
        updated() {
            let _this = this;
            this.$nextTick(function () {
                _this.checkallState();
            })
        }
    }
</script>
<style scoped>
    .mt15{margin-top: 10px}
</style>