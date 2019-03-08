<template>
    <el-row class="warp">
        <form id="formTag" enctype="multipart/form-data">
            <div class="uploadImgBtn" id="uploadImgBtn">
                <input class="uploadImg" type="file" name="file" id="file" @change="change" :loading="true"><i class="el-icon-upload"></i>选择图片
            </div>
        </form>
        <div class="up-loading" v-if="loading"><i class="el-icon-loading"></i> 正在上传图片...</div>
        <img class="preview" :src="imgUrl" alt="图片预览" v-if="imgUrl">
    </el-row>
</template>
<script>
    //import ElButton from "../../node_modules/element-ui/packages/button/src/button";

    export default {
        //components: {ElButton},
        props: {
            // 外部KEY
            keys:{
                type: String,
                default: ''
            },
        },
        data() {
            return {
                imgBaseUrl: URL.rpi,
                stsToken:sessionStorage.stsToken,
                LANG,
                loading:false,
                imgUrl:''
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                this.loading = false
                this.imgUrl = ''
                this.imgBaseUrl = URL.rpi
                this.stsToken = sessionStorage.stsToken
            },
            change(){
                let _this = this,str = _this.$('#file').val(),arr = str.split('\\'),formData = new FormData(_this.$("#formTag")[0])
                _this.loading = true,
                formData.append("pictrue",arr[arr.length-1])
                formData.append("pf",'h5')
                /**
                 * 存一下this对象，
                 * 将在ajax的回调函数中，
                 * 将要用这个对象，
                 * 用它来改变父盒子的背景图
                 *
                 */
                //
                this.$.ajax({
                    url: _this.imgBaseUrl,
                    type: "post",
                    dataType: "json",
                    cache: false,
                    headers: {
                        'Authorization':_this.stsToken
                    },
                    data:formData,
                    processData: false,// 不处理数据
                    contentType: false, // 不设置内容类型
                    success: function(v){
                        if(v.data && v.code === 10000){
                            _this.imgUrl = v.data.cache_url
                            _this.$message.success('上传图片成功')
                            _this.loading = false
                            //_this.$emit('doUpload',{"file": v.data.file_name,'key':_this.keys});
                        }else {
                            _this.loading = false
                            _this.$message.error('上传图片失败')

                        }
                    },
                    error: function (res) {
                        _this.$message.error('上传图片失败')
                        _this.loading = false
                        console.log('ppppp')
                    }

                })
            }
        },
        watch: {

        },
        computed: {
        }
    }
</script>

<style scoped>
    #formTag,.up-loading{
        display: inline-block;
    }
    .uploadImgBtn {
        width: 90px;
        height: 34px;
        border-radius:5px;
        cursor: pointer;
        position: relative;
        background: #20a0ff;
        border-color: #20a0ff;
        color:#fff;
        -webkit-background-size: cover;
        background-size: cover;
        text-align: center;
    }
    .uploadImgBtn:hover{
        background: #f59275;
        border-color: #f59275;
        color:#fff;
    }

    .uploadImgBtn .uploadImg {
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
    .preview{
        width: 120px;
        height: auto;
        vertical-align: top;
    }
    .pic {
        width: 100px;
        height: 100px;
    }

    .pic img {
        width: 100%;
        height: 100%;
    }
    .upload-text {
        float: left;
    }

    .upload-tip {
        font-size: 12px;
        color: #8391a5;
        margin-top: 7px;
    }
</style>
