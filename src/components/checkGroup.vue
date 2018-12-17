<template>
    <div>
        <div v-for="(item, index) in checkGrounpList" :key="index" class="checkboxContainer">
            <el-checkbox v-model="item.checkAll" @change="handleCheckAllChange(item.checkAll, item.children, item.isIndeterminate, index)">{{item.name}}</el-checkbox>
            <!--<div style="margin-right: 5px;"></div>-->
            <el-checkbox-group v-model="item.checkedChildren" @change="handleCheckedCitiesChange(item.checkedChildren, item.children, index)">
                <el-checkbox v-for="(option, n) in item.children" :label="option" :key="n" style="margin-right: 5px;">{{option}}</el-checkbox>
            </el-checkbox-group>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                LANG,
            }
        },
        props: {
            checkGrounpList: Array
        },
        methods: {
            handleCheckAllChange(val, children, isIndeterminate, index) {
                // console.log(val);
                if (val) {
                    this.checkGrounpList[index]["checkedChildren"] = this.checkGrounpList[index]["children"];
                    this.checkGrounpList[index]["childrenStatus"].forEach((item) => {
                        item.status = true;
                    })
                } else {
                    this.checkGrounpList[index]["checkedChildren"] = [];
                    this.checkGrounpList[index]["childrenStatus"].forEach((item) => {
                        item.status = false;
                    })
                }
                // this.checkGrounpList[index]["isIndeterminate"] = false;
                // console.log(this.checkGrounpList);
                
            },
            handleCheckedCitiesChange(value, children, index) {
                // console.log(value);

                // 获取当前选择数组的长度
                let checkedCount = value.length;
                this.checkGrounpList[index]["checkAll"] = checkedCount === children.length;
                // this.checkGrounpList[index]["isIndeterminate"] = checkedCount > 0 && checkedCount < children.length;

                // 处理数组
                // 
                this.checkGrounpList[index]["childrenStatus"].forEach((item) => {
                            item.status = false;
                })
                for (let i of this.checkGrounpList[index]["checkedChildren"]) {
                    this.checkGrounpList[index]["childrenStatus"].forEach((item) => {
                        if (i === item.cn_name) {
                            item.status = true;
                        }
                    })
                }
                // console.log(this.checkGrounpList);
            }
        },
        mounted() {
            // console.log(this.checkGrounpList);
        },
        created() {

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