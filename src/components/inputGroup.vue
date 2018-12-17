<template>
    <div id="inputGroup">
        <el-col :span="11">
            <el-form-item :prop="placeS">
                <el-input v-model="inputStart" :placeholder="placeS"  type="number" size="small" class="intW" v-if="type == 'numberGroup'" @blur="getVal"></el-input>
                <el-date-picker type="date" :placeholder="LANG['选择日期'] || '选择日期'" v-model="optStart" size="small" class="intW" v-if="type == 'dateGroup'" @change="getVal" ></el-date-picker>
            </el-form-item>
        </el-col>
        <el-col :span="2">-</el-col>
        <el-col :span="11">
            <el-form-item :prop="placeE">
                <el-input v-model="inputEnd" :placeholder="placeE" type="number" size="small" class="intW" v-if="type == 'numberGroup'" @blur="getVal" ></el-input>
                <el-date-picker type="date" :placeholder="LANG['选择日期'] || '选择日期'" v-model="optEnd" size="small" class="intW" v-if="type == 'dateGroup'" @change="getVal"></el-date-picker>
            </el-form-item>
        </el-col>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                LANG,
                optStart:"",
                optEnd:"",
                inputStart:"",
                inputEnd:""
            }
        },
        props:{
            type:String,
            opts:String,
            optE:String,
	        placeS:String,
	        placeE:String,
            getInputData: Boolean,
            state:{
                type:Boolean,
                default:false
            },
            reset:{
                type:Boolean,
                default:false
            }
        },
        components: {},
        methods: {
            init(){
                this.optStart = this.opts;
                this.optEnd = this.optE;
                this.inputStart = parseInt(this.placeS);
                this.inputEnd = parseInt(this.placeE);
            },
            getVal(){
                let dates=0;
                let datee=0;
                let str="";
                let _this=this;
                if(this.type == 'dateGroup') {
                    dates = Date.parse(this.optStart);
                    datee = Date.parse(this.optEnd);
                    str="日期"
                }else{
                    dates = parseInt(this.inputStart);
                    datee = parseInt(this.inputEnd);
                    str="金额"
                }
                if ((dates || datee) && (datee <= dates)) {
                    this.$message.error((LANG['结束'] || '结束')+str+(LANG['必需大于起始'] ||'必需大于起始')+str);
                    setTimeout(() => {
                        _this.optEnd = null;
                        _this.inputEnd = 0;
                    }, 3000);
                }else{
                    this.$emit('get-val',{'item':{"optStart": dates,"optEnd": datee},"keyS":this.opts,"keyE":this.optE})
                }
            },
        },
        watch: {
            //如果重置，就清空数据
            reset:function (newval) {
                if(newval){
                    this.optStart = "";
                    this.optEnd = "";
                    this.inputStart = "";
                    this.inputEnd = "";
                }
            },
            getInputData(){
                this.getVal();
            },
            opts:function(newval){
                this.optStart = newval;
            },
            optE:function (newval) {
                this.optEnd = newval;
            },
            placeS: function(newval) {
                this.inputStart = newval;
            },
            placeE: function(newval) {
                this.inputEnd = newval;
            }
        },
        computed: {
        },
        mounted(){
        	$(function(){

            })
        },
        created(){
            this.init();
        },
        destroyed(){
	        this.init()
        }
    }
</script>
<style scoped>
    .line{text-align: center}
    #inputGroup input{width:100%}
</style>