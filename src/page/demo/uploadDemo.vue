<template>
    <div>
        <el-button @click="openForm">点击弹窗</el-button>
        <formEdit
                :formTitel="formTitel"
                :formVisible="editVisible"
                :formConfig="formConfig"
                :type="type"
                :labelWidth="labelWidth"
                @get-form="getForm"
                :isEdit="isEdit"
                :formType="formType"></formEdit>
        <el-col class="mt20">
            <label for="upload">直接调用</label>
        </el-col>
        <el-col class="mt20">
            <upload :uploadUrl="uploadUrl" @response="doSaveFile" :keys="keys" :isInit="imgInit" :fileNum="1"></upload>
        </el-col>
    </div>

</template>
<script>
    import  formEdit from '../../components/formEdit.vue'
    import upload from '../../components/upload.vue'
    export default{
        name: 'vue',
        data() {
            return {
                //弹窗
                // 图片配置   prop 字段名、value 初值、type 类型必需为upload、label 表单显示文字、action 上传地址、fileNum 可上传的文件数据，批量上传不用配置、rules 验证条件
                formConfig: [
                    {"prop":"images","value":[],'type': "upload","label": "使用于","action": URL.img,"fileNum":3,"rules":[{"require":true}]}
                ],
                labelWidth:"110px",
                type: "default",
                formTitel: "",
                formType: "",
                editVisible: {
                    state: false
                },
                isEdit: {
                    state: false
                },
                // 直接调用上传传参
                // 上传地址
                uploadUrl: URL.img,
                // 上传字段名
                keys: "images",
                // 是否初始化
                imgInit: false

            }
        },
        components: {
            formEdit: formEdit,
            upload: upload
        },
        methods: {
            // 保存上传文件
            openForm() {
                this.editVisible.state = true;
            },
            // 获取表单数据
            getForm(obj) {
                // 输出格式为数据，请自行转换
                console.log(obj.formObj.images);
            },
            // 保存上传目录
            doSaveFile(obj){
                console.log("url -- " + obj.url);
                console.log("key -- " + obj.key);
            }
        }
    }
</script>

<style scoped>
</style>
