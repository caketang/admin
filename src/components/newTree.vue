<template>
    <div id="newTree">
        <el-card class="box-card diyTree font12">
            <el-row>
                <el-col :span="12">
                    <span>注：前台实际展示时数字大的排在前面；彩票聚合页全部分类这里无法排序</span>
                </el-col>
                <el-col :span="12" class="tRight">
                    <el-button type="primary" size="small" @click="saveForm">保存</el-button>
                </el-col>
            </el-row>
            <el-row class="mt10" v-if="">
                <el-col>
                    <el-col class="treeHeader">
                        <el-col :span="6" class="pleft">一级排序</el-col>
                        <el-col :span="5" class="pleft">二级排序</el-col>
                        <el-col :span="4" class="pleft">信用默认玩法</el-col>
                        <el-col :span="4" class="pleft">官方默认玩法</el-col>
                        <el-col :span="2" class="pleft">是否显示</el-col>
                        <el-col :span="3" class="pleft">操作</el-col>
                    </el-col>
                    <el-col class="menu w100">
                        <el-col v-for="(item,index) in lotterydata" :key="item.id" class="toggle w100">
                            <el-col class="toggle_show" @click.native="new_toggle(index)">
                                <el-col :span="6" class="pleft">
                                    <i class="el-icon-arrow-down" v-if="show[index]"></i>
                                    <i class="el-icon-arrow-right" v-else></i>
                                    <el-input v-model="item['sort']" class="intW ml10" size="small" placeholder="请输入排列序号"
                                              @change="doChange(item,item.id,'top')"></el-input>
                                    <span>{{item.name}}</span>
                                </el-col>
                            </el-col>
                                <el-col class="child" v-for="sub,k in item['sub']" :span="24" :key="sub.id" v-show="show[index]">
                                    <el-col :span="5" :offset="6">
                                        <div>
                                            <el-input v-model="sub['sort']" class="intW ml10" size="small"
                                                      placeholder="请输入内容"
                                                      @change="doChange(sub['sort'],index,'sub',k)"></el-input>
                                            <span>{{sub.name}}</span>
                                        </div>
                                    </el-col>
                                    <el-col :span="4">
                                        {{sub.default_fast_name === '无' ? '无' : ('信用玩法-' + sub.default_fast_name)}}
                                    </el-col>
                                    <el-col :span="4">
                                        {{sub.default_standard_name === '无' ? '无' : ('官方玩法-' + sub.default_standard_name)}}
                                    </el-col>
                                    <el-col :span="2">
                                        {{sub.display == '1' ? '是' : '否'}}
                                    </el-col>
                                    <el-col :span="3">
                                        <el-button class="" size="small" @click="doEdit(sub,k,item.id)">编辑</el-button>
                                    </el-col>
                                </el-col>
                        </el-col>
                    </el-col>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                LANG,
                input: '',
                //是否全部展开
                showTree: true,
                show: {},
            }
        },
        props: {
            lotterydata: Array,
            sortObj: Object
        },
        methods: {
            init() {
                for (let i = 0; i < this.lotterydata.length; i++) {
                    this.$set(this.show, i, true);
                }
            },
            // 编辑数字
            doEdit(row, subkey, itemId) {
                this.$emit('sub-edit', {row: row, subkey: subkey, itemId: itemId});
            },
            // 输入框切换
            doChange(value, index, hierarchy, sub) {
//                switch (hierarchy) {
//                    case 'top':
//
//
////                        for (let k in this.sortObj) {
////                            if (this.sortObj[k].id == index) {
////                                this.lotterydata[this.sortObj[k].key].sort = this.sortObj[index].sort;
////                                this.sortObj[this.sortObj[k].key].sort = this.sortObj[index].sort;
////                                this.sortObj[index].sort = value;
////                            }
////                        };
//                        break;
//                    case 'sub':
//                        let temp = this.sortObj[index].sub || [];
//                        for (let i in temp) {
//                            if ((temp[i].sort == value) && (sub != i)) {
//                                this.lotterydata[this.sortObj[index].key].sub[i].sort = temp[sub].sort;
//                                temp[i].sort = temp[sub].sort;
//                                temp[sub].sort = value;
//                            }
//                        }
//                        break;
//                }
            },
            // 保存数据
            saveForm() {
                this.$emit('save-form', {data: this.lotterydata});
            },
            new_toggle(i) {
                this.show[i] = !this.show[i];
            }
        },
        components: {},
        computed: {},
        watch: {
            'lotterydata.length': function (newval) {
                if (newval) {
                    this.init();
                }
            }
        },
        mounted() {
        },
        created() {
        },
        activated() {
//            setTimeout(() => {
//                this.init();
//            }, 500)
        }
    }
</script>
<style lang="less">
    #newTree {
        .diyTree {
            .treeHeader {
                background-color: rgb(250, 250, 250);
                line-height: 38px;
            }
            .menu {
                .child:hover {
                    background-color: #e5e5e5;

                }
                .toggle {
                    background-color: rgb(241, 243, 248);
                    line-height: 38px;
                    border: 1px solid #dfe6ec;
                }
                .toggle:hover{
                    background: #E6E9E9;
                }
                .toggle:nth-child(even):hover{
                    background: #E6E9E9;

                }
                .toggle:nth-child(even) {
                    background-color: rgb(247, 250, 250);
                }
                .child {
                    background-color: rgb(250, 250, 250);
                    border-bottom: 1px solid rgb(224, 230, 236);
                    line-height: 38px;
                }
                .child:nth-child(even) {
                    background-color: rgb(255, 255, 255);

                }
            }
        }
    }
</style>
