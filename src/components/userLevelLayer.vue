<template>
    <div id="userLevelLayer">
        <el-dialog :title="LANG['修改会员等级'] || '修改会员等级'" v-model="model.visible" size="tiny">
            <h1>{{LANG[model.title] || model.title}}</h1>
            <el-table :data="model.lList">
                <el-table-column prop="date" :label="LANG['等级选择'] || '等级选择'" width="100">
                    <template slot-scope="scope">
                        <el-checkbox-group v-model="scope.row.disable">
                            <!--<el-checkbox v-model="scope.row.disable" @change="checkRadio(scope.row.disable,scope.row.num)"></el-checkbox>-->

                            <el-checkbox @change="checkRadio"></el-checkbox>
                        </el-checkbox-group>
                    </template>
                </el-table-column>
                <el-table-column prop="name" :label="LANG['等级名称'] || '等级名称'" width="100"> </el-table-column>
                <el-table-column prop="desc" :label="LANG['描述'] || '描述'"  > </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="model.visible = false">取 消</el-button>
                <el-button type="primary" @click="doLayered">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                LANG,
                activeData:[]
            }
        },
        props:{
            model:Object
        },
        methods: {
            init(){
                this.activeData = [];
            },
            doLayered(){
                console.log(this.model.visible)
                if(this.activeData.length === 0){
                    this.$message.error(LANG['请先选择层级！'] || '请先选择层级！');
                }else{
                    this.$emit("update-level",this.activeData);
                    this.model.visible=false;
                }
            },
            //切换单选
            checkRadio(){
                let checkData = [];
                let list=this.model.lList;
                list.forEach((item)=>{
                   if(item.disable)checkData.push({
                       'lid':item.id,
                       'val':item.name
                   })
                })
                this.activeData = checkData;
            }
        },
        watch: {
            model: {
                handler(val, old) {
                    if(!val.visible)this.activeData = [];
                },
                //是否绑定初始值
                immediate: false,
                //深度监听
                deep: true
            },
        },
        created() {
            this.init()
        },

    }
</script>
<style scoped>
    #userLevelLayer h1{margin-bottom: 10px;}
</style>
