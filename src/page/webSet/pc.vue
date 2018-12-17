<template>
    <div id="pc" class="w100">
        <el-row :gutter="20" type="flex" justify="flex-start" v-if="show">
            <div class="imgBox fl ml20 mt20" v-for="(url, index)  in imgUrlArr">
                <el-card :body-style="{ padding: '0' }" class="mt20 cardBox" :class="{ active: url.checked }" >
                    <img :src="imgUrl + url.key + '_s.jpg'" alt="图片飞走了" width="100%" height="auto" @click="preview(index)">
                    <el-row  class="mb20 mt20" v-if="!url.checked">
                        <el-col :span="5" :offset="6">
                            <!--style="background-color: #f78d7d; color: #fff;"-->
                            <el-button type="primary"  @click="preview(index)">预览</el-button>
                        </el-col>
                        <el-col :span="5" :offset="3">
                            <el-button type="primary" :plain="true"  @click="open(index)">使用</el-button>
                        </el-col>
                    </el-row>
                    <el-row  class="mb20 mt20 tCent" v-else="">
                        <el-col :span="24" >
                            <el-button type="primary"  @click="preview(index)">预览</el-button>
                        </el-col>
                        <div class="cardCheck">使用中</div>
                    </el-row>
                </el-card>
            </div>
        </el-row>
        <div  v-else class="wrapper" >
            <div class="imgwrapper tCent">
                <a href="javascript:;" style="display: block;width: 100%;heigth:auto;" @click="back" title="点击返回模块列表">
                    <img :src="imgUrl + imgUrlArr[showIndexImage].key+'.jpg'" alt="图片飞走了" class="img" width="100%" height="auto">
                </a>
            </div>
        </div>
    </div>

</template>
<script>
    export default{
        data(){
            return {
                imgNumber: 28,
                imgUrlArr: [
                    {id:1,checked:true,key:'blacksky'},
                    {id:2,checked:false,key:'purplestage'},
                    {id:3,checked:false,key:'redclassics'},
                    {id:3,checked:false,key:'shark'},
                ],
                imgUrl: '/static/img/pc_new/',
                show: true,
                bigImage: false,
                showIndexImage: 0,
            }
        },
        components: {},
        methods: {
            initImgUrl(){   // 处理图片路径
                this.show = true;
            },
            preview(n){
                this.show = false;
                this.showIndexImage = n;
         this.showIndexImage = n;
            },
            back(){
                this.show = true;
            },
            open(i){
                for(let k in this.imgUrlArr){
                    this.imgUrlArr[k].checked  = false;
                }
                this.imgUrlArr[i].checked  = true;
                this.$message({
                    showClose: true,
                    message: '使用成功',
                    type: 'success',

                })
            },
        },
        computed: {},
        mounted(){
        },
        created(){
            this.initImgUrl()
        }
    }
</script>
<style scoped lang="less">
    #pc{
        .imgBox{width:282px; }
        .cardCheck{position: absolute;right:0;text-align: right;bottom:-20px;font-size:12px;padding-left:2px;transition:1s;}
        .active{box-sizing: border-box;}
    }
    .el-row {
        flex-wrap: wrap;
    }

    .mb {
        margin-bottom: 10px;
    }
</style>