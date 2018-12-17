<template>
    <div>
        <i class="fa fa-cog" aria-hidden="true" v-if="!setState" @click="changeSet"></i>
        <!--<i data-v-64de8892="" class="el-icon-setting" v-if="!setState"></i>-->
        <el-select v-model="columnConfig" multiple :placeholder="_('表格列配置')" @change="changeColumnConfig" style="width:700px;" v-if="setState">
        <el-option
                v-for="item in columnsModel"
                :label="item.label"
                :value="item.prop"
                :key="item.id"
        >
        </el-option>
    </el-select>
    <el-button type="success" v-if="setState" @click="saveSet" v-text="_('保存配置')"></el-button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                //配置选中数据
                columnsModel:[],
                //显示状态
                setState:false
            }
        },
        props:{
            //数据列配置
            columns:Array,
            columnConfig:Array
        },
        methods: {
            changeColumnConfig(){
                this.$emit("do_change-col", {
                    "event": event,
                    "item": this.columnConfig
                });
            },
            saveSet(){
                this.setState=false
            },
            changeSet(){
                this.setState=true
            }
        },
        mounted : function () {
            var _this=this
                let columns=this.columns
                for(let i in columns){
                    this.columnsModel.push({
                        "id": i,
                        "label":columns[i],
                        "prop":columns[i]
                    })

                }
        }
    }
</script>
