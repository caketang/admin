<template>
    <div class="wrap">
        <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog title="提示" v-model="dialogVisible" size="tiny">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="文本框">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="邮件">
                    <el-input type="email" v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="number">
                    <el-input type="number" v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="password">
                    <el-input type="password" v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="下拉select">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option label="选项1" value="shanghai"></el-option>
                        <el-option label="选项2" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="选择时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                        style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"
                                        style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="switch开关">
                    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="多选">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="选择1" name="type"></el-checkbox>
                        <el-checkbox label="选择2" name="type"></el-checkbox>
                        <el-checkbox label="选择3" name="type"></el-checkbox>
                        <el-checkbox label="选择4" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="单选">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="选择1"></el-radio>
                        <el-radio label="选择2"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="文本域">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="上传图片">
                    <el-upload
                            class="upload-demo"
                            action="//jsonplaceholder.typicode.com/posts/"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :file-list="fileList2"
                            list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="MD文档框">
                    <markdownEdit :content="content" @change_text="changeText"></markdownEdit>
                    <el-button type="success" @click="saveText">保存</el-button>
                </el-form-item>
                <!--<el-form-item>-->
                    <!--<el-button type="primary" @click="onSubmit">立即创建</el-button>-->
                <!--</el-form-item>-->
            </el-form>
            <span slot="footer" class="dialog-footer"><el-button @click="dialogVisible = false">取 消</el-button><el-button
                    type="primary" @click="dialogVisible = false">确 定</el-button></span>
        </el-dialog>
    </div>
</template>
<script>
    import markdownEdit from '../../components/markdownEdit.vue'
    export default {
        data() {
            return {
                dialogVisible: false,
                //图片上传预览
                fileList2: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }, {
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }],
                //md编辑框
                content: "1111",
                form: {
                    name: '',
                    email: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    select: ''
                }
            }
        },
        components: {
            markdownEdit: markdownEdit
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            onSubmit() {
                console.log('submit!');
            },
            //md文本框处理事件
            saveText(){
                console.log(this.content)
            },
            //保存
            changeText(content){
                this.content = content.val
                console.log(content.val)
            }
        }
    }
</script>
<style scoped>

</style>