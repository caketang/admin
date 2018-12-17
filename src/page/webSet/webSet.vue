
<template>
    <div id="webSet">
        <el-form :model="formData" ref="formData" class="w40 formData mt20" label-width="100px">
            <el-form-item :label="LANG['站点名称'] || '站点名称'" prop="name">
                <el-input v-model="formData.name" size="small"></el-input>
            </el-form-item>
            <el-form-item :label="LANG['站点标题'] || '站点标题'" prop="title">
                <el-input v-model="formData.title" size="small"></el-input>
            </el-form-item>
            <el-form-item :label="LANG['站点关键词'] || '站点关键词'" prop="keywords">
                <el-input v-model="formData.keywords" size="small"></el-input>
            </el-form-item>
            <el-form-item :label="LANG['站点描述'] || '站点描述' " prop="description">
                <el-input v-model="formData.description" size="small"></el-input>
            </el-form-item>
            <el-form-item :label="LANG['模板名称'] || '模板名称'" prop="template">
                <el-input v-model="formData.template" size="small"></el-input>
            </el-form-item>
            <el-form-item :label="LANG['站点LOGO'] || '站点LOGO'" prop="logo">
                <upload :uploadUrl="url" @response="doSaveFile" :folder="'web'"></upload>
            </el-form-item>
            <el-form-item :label="LANG['站点底部信息'] || '站点底部信息'" prop="message_bottom">
                <el-input v-model="formData.message_bottom" type="textarea" :rows="4" size="small"></el-input>
            </el-form-item>
            <div class="formbtn tCent">
                <el-button type="primary" :plain="true" size="small" @click="doSave">{{LANG['保存'] || '保存'}}</el-button>
            </div>
        </el-form>
    </div>
</template>
<script>
    import upload from '../../components/upload.vue'
    export default{
        data(){
            return {
                LANG,
                url: URL.img,
                formData: {
                    name: "22",
                    title: "",
                    keywords: "",
                    description: "",
                    template: "",
                    logo: "",
                    frontend_url: "",
                    backend_url: "",
                    message_bottom: ""
                },
                fileList2: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },]
            }
        },
        components: {
            upload
        },
        methods: {
            int(){
                let formDataUrl = URL.api + ROUTES.GET.system.webSet;

				this.$.autoAjax('get',formDataUrl, '', {
					ok: (res) => {
						let formData = res.data;
						this.formData.name = formData.name;
						this.formData.title = formData.title;
						this.formData.keywords = formData.keywords;
						this.formData.description = formData.description;
						this.formData.template = formData.template;
						// this.formData.logo = formData.logo;
						this.formData.frontend_url = formData.frontend_url;
						this.formData.backend_url = formData.backend_url;
						this.formData.message_bottom = formData.message_bottom;
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(formDataUrl,URLCONFIG).then((res) => {
                //     let formData = res.data.data;
                //     this.formData.name = formData.name;
                //     this.formData.title = formData.title;
                //     this.formData.keywords = formData.keywords;
                //     this.formData.description = formData.description;
                //     this.formData.template = formData.template;
                //     // this.formData.logo = formData.logo;
                //     this.formData.frontend_url = formData.frontend_url;
                //     this.formData.backend_url = formData.backend_url;
                //     this.formData.message_bottom = formData.message_bottom;
                // })
            },
            doSave(){
                let formDataUrl = URL.api + ROUTES.PUT.system.webSet;

				this.$.autoAjax('put',formDataUrl,this.formData, {
					ok: (res) => {
						if(res.state == 0 && res.data){
							this.$message.success(LANG['保存成功'] || '保存成功');
						}else {
							this.$message.error(LANG['保存失败'] || '保存失败');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.put(formDataUrl, JSON.stringify(this.formData), URLCONFIG).then((res) => {
                //    if(res.data.state == 0 && res.data.data){
                //        this.$message.success(LANG['保存成功'] || '保存成功');
                //    }else {
                //        this.$message.error(LANG['保存失败'] || '保存失败');
                //    }
                // })
            },
            //片上传相关
            doSaveFile(obj){
                let url = ''
                obj.url.forEach((item)=>{
                    url+=item
                })
                this.formData.logo = url
            },
        },
        mounted(){
        },
        created(){
            this.int();
        }
    }
</script>
<style >
</style>
