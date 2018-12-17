<template>
    <div id="treeList" class="clearfix">
        <el-button type="primary" class="addBtn">{{_('保存')}}</el-button>
        <el-tree :data="model" :props="defaultProps" @node-click="handleNodeClick" class="treeLeft"></el-tree>
        <div class="treeRight">
            <changeAll :checkOptions="childrenList" :sReset="sReset" :checkedval="checkedval"></changeAll>
        </div>
    </div>
</template>
<script>
    import changeAll from './changeAll.vue'
    export default{
        data(){
			return{
                childrenList:["功能1","功能2","功能3","功能4"],
                sReset:false,
                checkedval:[]
			}
		},
        props:{
            model:Array
        },
		components: {
            changeAll:changeAll
		},
		methods: {
            handleNodeClick(data){
//                console.log(data);
            }
		},
		computed:{
		},
		mounted(){
		},
		created(){
		}
    }
</script>
<style scoped>
    #treeList{border:1px solid #d1dbe5;width: 100%;padding:10px;margin-top:50px;position: relative;}
    .clearfix{content:'';clear:both;zoom:1;display: table;line-height: 0; }
    .addBtn{position: absolute;right:10px;top:-50px}
    .el-tree{border:none}
    #treeList .treeLeft{width:30%;float:left;border-right:1px solid #d1dbe5;}
    #treeList .treeRight{width:60%;float:left;padding:20px;}
</style>