<template>
    <div id="mobile">
        <el-row :gutter="20" v-if="show">
            <el-col :span="24" class="contCard">
                <div class="imgBox ml20 mb" v-for="(url, index)  in imgUrlArr" >
                    <el-card :body-style="{ padding: '0' }" class="mt20 cardBox" :class="{ active: url.checked === '1' }" >
                        <img :src="imgUrl + url.key + '_s.jpg'" alt="图片飞走了" width="100%" height="auto" @click="preview(index)">
                        <el-row  class="mb20 mt20" v-if="!(url.checked === '1')">
                            <el-col :span="5" :offset="6">
                                <el-button type="primary"  @click="preview(index)">预览</el-button>
                            </el-col>
                            <el-col :span="5" :offset="3">
                                <el-button type="primary" :plain="true"  @click="open(index)">使用</el-button>
                            </el-col>
                        </el-row>
                        <el-row  class="mb20 mt20 tCent" v-else>
                            <el-col :span="24" >
                                <el-button type="primary"  @click="preview(index)">预览</el-button>
                            </el-col>
                            <div class="cardCheck">使用中</div>
                        </el-row>
                    </el-card>
                </div>

            </el-col>
        </el-row>
        <div  v-else class="wrapper" >
            <div class="imgwrapper tCent">
                <a href="javascript:;" style="display: block;width: auto;heigth:auto;" @click="back" title="点击返回模块列表">
                    <img v-if="this.type === 'h5'"  :src="imgUrl + imgUrlArr[showIndexImage].key+'.jpg'" alt="图片飞走了" class="img" width="auto" height="auto">
                    <img v-else :src="imgUrl + imgUrlArr[showIndexImage].key+'.jpg'" alt="图片飞走了" class="img" width="100%" height="auto">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    import ElButton from "../../node_modules/element-ui/packages/button/src/button";
    export default{
        data(){
            return {
                imgNumber: 13,
                imgUrlArr: [],
                imgUrl: '/static/img/mobile_new/',
                show: true,
                bigImage: false,
                showIndexImage: 0,
            }
        },
        props:{
            // 默认选中值
            showKey:{
                type: String,
                default: ''
            },
            // 列表数据
            model: Array,
            // 模板类型
            type: {
                type: String,
                default: 'h5'
            },
            showWindow: {
                type : Boolean,
                default: false
            }
        },
        components: {ElButton},
        methods: {
            // 初始化
            init(){
                // 取模板列表
                this.imgUrlArr.splice(0,this.imgUrlArr.length);
                let imgUrlArr = this.imgUrlArr;
                this.imgUrl = this.type === 'h5' ? '/static/img/mobile_new/' : '/static/img/pc_new/';
                this.show = true;
                if(this.model.length > 0){
                    let temp = this.showKey ? this.showKey : this.model[0].key;
                    this.model.forEach((v)=>{
                        let check = '0';
                        if(v.key === temp){
                            check = '1';
                        }
                        imgUrlArr.push({
                            id: v.id,
                            key: v.key,
                            checked: check
                        });
                    });
                }
                this.$emit('get-template',{'data':this.imgUrlArr[0],'type':this.type});
            },
            preview(n){
                this.show = false;
                this.showIndexImage = n;
            },
            back(){
                this.show = true;
            },
            open(i){
                for(let k in this.imgUrlArr){
                   this.imgUrlArr[k].checked  = '0';
                }
                this.imgUrlArr[i].checked  = '1';
                this.$emit('get-template',{'data':this.imgUrlArr[i],'type':this.type});
            }
        },
        created(){
            this.init();
        },
        watch:{
            showKey: function (newval) {
                if(newval){
                    this.init();
                }
            },
            type: function (newval) {
                if(newval){
                    this.init();
                }
            },
            showWindow: function (newval) {
                if(newval){
                    this.show = true;
                }
            }
        }
    }
</script>
<style lang="less">
    #mobile{
        .cardCheck{position: absolute;right:0;text-align: right;bottom:-20px;font-size:12px;padding-left:2px;}
        .active{box-sizing: border-box;}
        .contCard{}
        .imgBox{width:282px;display: inline-block;}

    }
    .el-row {
        flex-wrap: wrap;
    }
    .mb {
        margin-bottom: 10px;
    }

</style>