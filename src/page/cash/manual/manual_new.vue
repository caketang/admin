<template>
    <div id="manual_new">
        <el-row class="tabsNav">
            <el-col :span="8" class="tabsNavItem tCent"  :class="{active: itemIndex == '1'}"><div class="grid-content" @click="handleClick('1')">{{LANG['人工存提'] || '人工存提'}}</div></el-col>
            <el-col :span="8" class="tabsNavItem tCent" :class="{active: itemIndex == '2'}"><div class="grid-content" @click="handleClick('2')">{{LANG['批量存提'] || '批量存提'}}</div></el-col>
            <el-col :span="8" class="tabsNavItem tCent"  :class="{active: itemIndex == '3'}"><div class="grid-content" @click="handleClick('3')">{{LANG['人工存提记录'] || '人工存提记录'}}</div></el-col>
        </el-row>
        <el-col class="mt20" >
            <artificialtransfer :manualData="seachData" v-if="itemIndex == '1'"></artificialtransfer>
            <batchSave v-if="itemIndex == '2'"></batchSave>
            <history v-if="itemIndex == '3'"></history>
        </el-col>
    </div>
</template>
<script>
    import artificialTransfer from './artificialTransfer.vue'
    import batchSave from './batchSave.vue'
    import history from './history.vue'
    export default{
        data(){
            return {
                LANG,
                activeName: 'second',
                //点击的是哪个选项Nav
                itemIndex:'1',
                seachData: {}
            }
        },
        components: {
            artificialtransfer:artificialTransfer,
            batchSave:batchSave,
            history:history
        },
        methods: {
            init(){
                if(this.$route.query){
                    let query = this.$route.query;
                    for(let k in query){
                        this.seachData[k] = query[k];
                    }
                    if(this.$route.query.history){
                        this.handleClick('3');
                    }
                }
            },
            handleClick(i){
                this.itemIndex = i;
            }
        },
        computed: {},
        mounted(){
//            $('.tabsNavItem:first').addClass('active');
//            $('.tabsNavItem').click(function(){
//                $(this).addClass('active').siblings('.tabsNavItem').removeClass('active');
//            })
        },
        created(){
            this.init();
        },
        activated() {
//            this.handleClick('1');
//            $('.tabsNavItem:first').addClass('active').siblings('.tabsNavItem').removeClass('active');
            this.init();
        },
//         watch : {
//             $route : function() {
//                 if (this.$route.query) {
//                     this.init();
//                 }
//             }
//         }
    }
</script>
<style scoped>
    #manual_new .tabsNav{border-bottom:1px solid #D3DCE6;height:48px;line-height:48px;box-sizing:border-box;}
    #manual_new .tabsNav .tabsNavItem{height:48px;line-height:48px;max-width:180px;cursor:pointer;}
    #manual_new .active{border-bottom:3px solid #20A0FF; color:#20A0FF;}
</style>
