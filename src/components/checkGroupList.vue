<template>
    <div>
        <div v-for="(item, key) in list" :key="key" class="checkboxContainer">
            <checkGroup :name="item.nameval" :list="item.list" :val="item.val" :valKey="key" :config="item.config" @get-val="getVal"></checkGroup>
        </div>
    </div>
</template>
<script>
    import checkGroup from './checkGroupNew.vue'
    export default {
        data() {
            return {
                LANG,
                temp: {}
            }
        },
        components:{
            checkGroup: checkGroup
        },
        props: {
            // 配置全选组
//           传入对象{
//                nameGroup（字段名）:{'nameval':'全选框后名称',val: []（当前选中值）,list:[]（列表下拉）},
//            }
            list: Object
        },
        methods: {
            // 组件初始化
            init(){
                for(let k in this.list){
                    this.temp[k] = this.list[k];
                }
            },
            getVal(v,key){
                let temp = {};
                this.temp[key].val.splice(0,this.temp[key].val.length)
                for(let i=0;i<v.length;i++){
                    this.temp[key].val.push(v[i]);
                }
                for(let k in this.temp){
                    temp[k] = this.temp[k].val;
                }
                this.$emit('get-list',{'data': temp});
            }
        },
        mounted() {
        },
        created() {
            this.init();
        }
    }
</script>
<style scoped>
    .el-checkbox.el-checkbox {
        margin-left: 0;
    }
    .checkboxContainer {
        border-bottom: 1px solid #ccc;
    }
    .checkboxContainer:last-child{
        border-bottom: none;
    }
</style>