<template>
    <el-row class="warp">
        <div class="upload">
            <div class="upload-text" @click="selectFile">
                <el-button size="small" type="primary">{{LANG['选取文件'] || '选取文件'}}</el-button>
            </div>
            <input multiple id="file-upload" type="file" style="display:none" name="file" ref="fileUpload" accept="image/jp2,image/jpeg,image/png,text/plain">
            <el-button style="margin-left:10px" size="small" type="success" @click="submit"  :loading="uploadStatus">{{LANG['上传到服务器'] || '上传到服务器'}}</el-button>
            <div class="upload-tip" ref="uploadTip">
                {{LANG['只能上传'] || '只能上传'}}
                <span v-for="(item,index) in fileFormat" :key="index">
                    {{item}}<span v-if="(index+1)!==fileFormat.length">、</span>
                </span>{{LANG['文件'] || '文件'}}。
                {{LANG['文件名只能是英文、数字、下划线'] || '文件名只能是英文、数字、下划线'}}，
                {{LANG['且单个文件大小不能超过'] || '且单个文件大小不能超过'}}{{fileSize}}M ,
                <span v-if="imgResolution !== ''">图片建议分辨率大小为{{imgResolution}}</span>
                <br/>
                {{LANG['先点击 “选取文件” ，然后点击 “上传到服务器”，上传文件'] || '先点击 “选取文件” ，然后点击 “上传到服务器”，上传文件'}}
            </div>
        </div>
        <div ref="previewArea" style="max-width:500px;max-height:500px;overflow:auto">
            <div v-for="(item,index) in selectList" :key="index">{{item.name}}
                <span @click="delectFileItem(index)">
                    <i class="el-icon-delete"></i>
                </span>
            </div>
        </div>
        <div v-for="(item,index) in fileList" :key="index">
            <img :src="imgBaseUrl + item.url + '?t=' + Math.random()" alt="" style="margin-right: 10px;width:90%;">
            <el-button @click="delectServerFileItem(item,index)" type="primary" icon="delete" :loading="deleteStatus" size="small"></el-button>
        </div>
    </el-row>
</template>
<script>
    import ElButton from "../../node_modules/element-ui/packages/button/src/button";
    export default{
        components: {ElButton},
        name:'vueupload',
        props: {
            // 上传URL
            uploadUrl: {
                type: String,
                default: URL.rpi
            },
            // 图片建议分辨率大小
            imgResolution: {
                type: String,
                default: ''
            },
            // 上传文件夹
            folder: {
                type: String,
                default: ''
            },
            // 外部KEY
            keys:{
                type: String,
                default: ''
            },
            // 请求头
            requestHeaders: {
                type: Object,
                default: function(){
                    return URLCONFIG;
                }
            },
            // 文件大小（默认2m）
            fileSize: {
                type: Number,
                default: function(){
                    return 10
                }
            },
            // 文件格式（默认，jpg、jpeg、png）
            fileFormat: {
                type: Array,
                default: function(){
                    return ['jpg','jpeg','png','gif']
                }
            },
            // 是否需要初始化
            isInit: {
                type: Boolean,
                default: false
            },
            // 初始文件列表
            arrList: {
                type: Array,
                default: function(){
                    return []
                }
            },
            // 上传文件限制
            fileNum: {
                type: Number,
                default: 1
            }
        },
        data(){
            return {
                imgBaseUrl: URL.img,
                LANG,
                selectList: [],
                // 上传失败列表
                errorList: [],
                uploadStatus: false,
                deleteStatus: false,
            }
        },
        methods: {
            init(){
                if(this.arrList.length === 0){
                    this.selectList = [];
                    this.fileList = [];
                    this.errorList = [];
                }else if(this.arrList[0]){
                    let model = this.arrList;
                    let selectList = this.fileList = [];
                    for(let k in model){
                        let str = "";
                        if(/api\/*/g.test(model[k])){
                            str = model[k].replace(/https?:\/\/\w*\.\w+\.\w+\/\w+\/\w+/,'');
                        }else{
                            str = model[k];
                        }
                        selectList.push({
                            url: model[k],
                            folder: str
                        });
                    }
                }
            },
            selectFile(e){
                this.$refs.fileUpload.click();
                $(this.$refs.fileUpload).one('change',()=>{
                    this.fileUploadChange()
                });
                e.preventDefault();
            },
            fileUploadChange(){
                let isMatch = function(str){
                    // 匹配字母数字下划线开头或结尾的任意字符
                    let reg = /^[a-zA-Z\d_]*$/;
                    return reg.test(str)
                }
                var fileInput = this.$refs.fileUpload;
                this.selectList = [];
                for(var i=0; i<fileInput.files.length; i++){
                    // 判断文件大小是否符合
                    if(fileInput.files[i].size/1024<this.fileSize*1024){
                        // 判断文件格式是否符合
                        let lowerCase = fileInput.files[i].type.split('/')[1];
                        let capital = fileInput.files[i].type.split('/')[1].toUpperCase();
                        let isLowerCase = this.fileFormat.indexOf(lowerCase);
                        let isCapital = this.fileFormat.indexOf(capital);

                        if(isLowerCase != -1 || isCapital != -1){
                            if( !isMatch(fileInput.files[i].name.split('.')[0]) ){
                                this.$message(`${fileInput.files[i].name}文件名格式不符合！只能是英文数字下划线`)
                            }else{
                                // 符合的就push保存起来待上传
                                this.selectList.push(fileInput.files[i])
                            }
                        }else{
                            this.$message(`${fileInput.files[i].name}文件格式不符合！`)
                        }

                    }else{
                        this.$message(`${fileInput.files[i].name}文件大小超过限制！`)
                    }
                }
                // 处理完选择的文件之后把input[file]的value重置使得下一次change事件得以触发
                this.$refs.fileUpload.value = '';
            },
            submit(){
                let _this = this;
                var formData = new FormData();
                if(parseInt(this.fileNum) >0 && ((this.fileList.length) >= parseInt(this.fileNum))){
                    this.$message.error((LANG['只能上传'] || '只能上传')+this.fileNum+(LANG['个文件，请修改后重试！'] || '个文件，请修改后重试！'));
                    return;
                }
                formData.append('post_type', 'upfile');
                if(this.selectList.length>0){
                    this.selectList.forEach((item)=>{
                        formData.append('upfile[]', item,item.name);
                    })
                    this.uploadStatus = true;
                    this.$.autoAjax('post', this.uploadUrl + '/' +  this.folder,formData,this.requestHeaders, '', {
                        ok: (res) => {
                            this.selectList = [];
                            if(res.state  && res.state == 0 && res.data.file[0].type === 'success'){
                                let fileList = res.data.file || [];
                                for(let k in fileList){
                                    if(fileList[k].type === "success"){
                                        let model = this.fileList;
                                        let num = 0;
                                        for(let n in model){
                                            if(model[n].url === fileList[k].url){
                                                num++ ;
                                            }
                                        }
                                        if(num === 0){
                                            this.fileList.push(fileList[k]);
                                        }
                                    }
                                }
                                this.$message.success(LANG['文件上传成功！'] || '文件上传成功！');// 此处为单传一个图片成功提示
                            }else{
                                this.$message.error(LANG['文件上传失败，请稍后重试！'] || '文件上传失败，请稍后重试！');
                            }
                            // 传到组件外部的回调
                            let model = [];
                            let fileList = this.fileList;
                            for(let k in fileList){
                                model.push(fileList[k].url);
                            }
                            this.$emit("response",{url:model,key:this.keys})
                            this.uploadStatus = false;
                        },
                        p: () => {
                        },
                        error: e => {
                            this.uploadStatus = false;
                            this.$message.error(LANG['服务器错误请稍后重试！'] || '服务器错误请稍后重试！');
                        }
                    })
                }else{
                    this.$message('请先选取要上传的文件');
                }
            },
            delectFileItem(index){
                this.selectList.splice(index,1)
            },
            delectServerFileItem(item,index){
                this.deleteStatus = true;
                let _this = this;
                if(/api\/*/g.test(item.url) === false){
                    this.fileList.splice(index,1);
                    this.deleteStatus = false;
                    let model = [];
                    let fileList = _this.fileList;
                    for(let k in fileList){
                        model.push(fileList[k].url);
                    }
                    _this.$message.success(LANG['文件删除成功！'] || '文件删除成功！');
                    _this.$emit("response",{url:model,key:_this.keys});
                    return;
                }
                this.$.autoAjax('delete', this.uploadUrl + '/' + item.folder,this.requestHeaders, '', {
                    ok: (res) => {
                        if(res.state && res.state == "0"){
                            _this.fileList.splice(index,1);
                            let model = [];
                            let fileList = _this.fileList;
                            for(let k in fileList){
                                model.push(fileList[k].url);
                            }
                            _this.$message.success(LANG['文件删除成功！'] || '文件删除成功！');
                            _this.$emit("response",{url:model,key:_this.keys});
                        }else{
                            _this.$message.error(res.msg + LANG['文件删除失败！'] || '文件删除失败！');
                        }
                        _this.deleteStatus = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            }
            // 读取本地文件的方法，暂时不用
            // handleImageFile(file) {
            //     var previewArea = this.$refs.previewArea
            //     previewArea.innerHtml = '';
            //     var img = document.createElement('img');
            //     img.style.marginRight = 10 + 'px';
            //     img.style.width = 100 + 'px';
            //     img.style.height = 100 + 'px';
            //     img.file = file;
            //     previewArea.appendChild(img);
            //     var reader = new FileReader();
            //     reader.onload = (function(aImg) {
            //         return function(e) {
            //             aImg.src = e.target.result;
            //         }
            //     })(img);
            //     reader.readAsDataURL(file);
            // }
        },
        watch: {
            isInit: function (newval) {
                if(newval){
                    this.init();
                }
            }
        },
        computed: {
            arrLength() {
                return this.arrList.length
            },
            fileList() {
                let selectList = [];
                if(this.arrList.length === 0){
                    this.selectList = [];
                    this.errorList = [];
                }else if(this.arrList[0]){
                    let model = this.arrList;
                    for(let k in model){
                        let str = "";
                        if(/api\/*/g.test(model[k])){
                            str = model[k].replace(/https?:\/\/\w*\.\w+\.\w+\/\w+\/\w+/,'');
                        }else{
                            str = model[k];
                        }
                        selectList.push({
                            url: model[k],
                            folder: str
                        });
                    }
                }
                return selectList;
            }
        },
    }
</script>

<style>
    .upload-text{
        float: left;
    }
    .upload-tip{
        font-size: 12px;
        color: #8391a5;
        margin-top: 7px;
    }
</style>
