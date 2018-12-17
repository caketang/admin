<template>
    <div class="listitem">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange(checkAll)">{{name}}</el-checkbox>
        <el-checkbox-group v-model="nowVal" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="(option, n) in list" :label="(list[n][keys[1]]) || option" :key="n" style="margin-right: 5px;">{{list[n][keys[0]] || option}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                LANG,
                keys: [],
                nowVal: [],
                isIndeterminate: false,
                checkAll: false
            }
        },
        props: {
            // 全选名称
            name: {
              type: String,
              default: '全选'
            },
            // 当前选中值
            val: {
                type: Array,
                default: function(){
                    return []
                }
            },
            // checkbox列表
            list: Array,
            // 配置项
            config: {
                type: Object,
                default: function () {
                    return {label: 'label',value: 'value'}
                }
            },
            // 数据KEY
            valKey: {
                type: String,
                default: ''
            }
        },
        methods: {
            // 组件初始化
            init(){
                this.keys.splice(0,this.keys.length);
                if(this.config.label !== 'label' && this.config.value !== 'value'){
                    this.keys.push(this.config.label);
                    this.keys.push(this.config.value);
                }else{
                    this.keys.push('label');
                    this.keys.push('value');
                }
                if(this.val && this.val.length>0){
                    for(let k=0;k<this.val.length;k++){
                        this.nowVal[k] = this.val[k]
                    }
                }else{
                    this.nowVal.splice(0,this.nowVal.length);
                }
            },
            handleCheckAllChange(val) {
                this.nowVal.splice(0,this.nowVal.length);
                if (val) {
                    for(let i=0;i<this.list.length;i++){
                        this.nowVal.push(this.list[i][this.keys[1]]);
                    }
                }
                if(this.$parent.getVal){
                    this.$parent.getVal(value,this.valKey);
                } else {
                    this.$emit('get-val',{'value': this.nowVal,'key': this.valKey});
                }
            },
            handleCheckedCitiesChange(value) {
                if(value.length === this.list.length){
                    this.checkAll = true;
                }else{
                    this.checkAll = false;
                }
                if(this.$parent.getVal){
                    this.$parent.getVal(value,this.valKey);
                }else{
                    this.$emit('get-val',{'value': value,'key': this.valKey});
                }
            }
        },
        mounted() {
        },
        watch:{
            'value.length':function (newval) {
                this.init();
            }
        },
        created() {
            this.init();
        }
    }
</script>
<style scoped>
    .listitem{
        line-height: 30px;
    }
</style>