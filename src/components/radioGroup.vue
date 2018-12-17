<template>
    <div id="radioGroup">
        <el-radio-group v-model="radioVal" @change="getVal" class="w100">
            <div class="group w50" v-for="opt in list">
                <div class="item">
                    <el-radio  :label="opt.radioLabel">{{LANG[opt.label] || opt.label}}</el-radio>
                </div>
                <div class="item" v-if="radioInput">
                    <el-input v-model="opt.input" :min="(opt.min)?opt.min:1" :max="(opt.max)?opt.max:1000" size="small" class="intW"  v-if="opt.inputType == 'day'" @blur="getVal" type="number"></el-input>
                    <el-select v-model="opt.input" :placeholder="LANG['请选择'] || '请选择'" v-if="opt.inputType == 'week'" size="small" style="width:100px;" @change="getVal">
                        <el-option label="一" :value="41"> </el-option>
                        <el-option label="二" :value="42"> </el-option>
                        <el-option label="三" :value="43"> </el-option>
                        <el-option label="四" :value="44"> </el-option>
                        <el-option label="五" :value="45"> </el-option>
                        <el-option label="六" :value="46"> </el-option>
                        <el-option label="日" :value="47"> </el-option>
                    </el-select>
                </div>
                <div class="item" v-if="opt.label2">
                    <label class="el-form-item__label" v-text="opt.label2"></label>
                </div>
            </div>
        </el-radio-group>
        <div class="el-form-item__error" v-if="err">{{LANG[err] || err}}</div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                LANG,
                list:[],
                radioVal:"",
                err:""
            }
        },
        props:{
            opts:Array,
            keys:String,
            radioInput:{
                type:Boolean,
                default:false
            }
        },
        components: {},
        methods: {
            init(){
                let opts=this.opts;
                let list=this.list;
                if (opts.length >0){
                    for(let i in opts){
                        if(opts[i])
                            list.push(opts[i]);
                    }
                }
            },
            getVal(){
                let getVal=null;
                if(this.radioVal == 'day' && this.radioInput){
                    getVal=this.list[0].input;
                    if(getVal >31 && this.radioInput){
                        this.err=this.LANG['输入值月日期值不能大于31，已修改为31'] || '输入值月日期值不能大于31，已修改为31';
                        this.list[0].input=31;
                        let _this=this;
                        setTimeout(() => {
                            _this.err="";
                        }, 3000);
                    }
                }else if(this.radioInput){
                    getVal=this.list[1].input;
                }else{
                    getVal= this.radioVal;
                }
                if(getVal == "" && this.radioInput){
                    this.err=this.LANG['请输入INPUT的值'] || '请输入INPUT的值';
                }else{
                    this.err="";
                    this.$emit("get-radioVal",{"val":getVal,"key":this.keys,"groupVal":this.radioVal});
                }
            }
        },
        computed: {},
        mounted(){
        },
        created(){
            this.init();
        }
    }
</script>
<style scoped>
    .group{margin-left: 5px;}
    .group .item{float:left;margin-left: 5px;line-height: 36px;}
    .group .item .intW{width: 100px;}
    .group:last-child{clear: both;}
</style>