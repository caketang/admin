<template>
    <div class="wrap">
        <el-form ref="form" :rules="rules2" :model="form" label-width="80px" :inline="true">
            <el-form-item label="文本框">
                <el-input v-model="form.name" ></el-input>
            </el-form-item>
            <el-form-item label="邮件">
                <el-input type="email" v-model="form.email"></el-input>
            </el-form-item>

            <el-form-item label="number">
                <el-input type="number" v-model="form.number"></el-input>
            </el-form-item>
            <el-form-item label="下拉select">
                <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="选项1" value="shanghai"></el-option>
                    <el-option label="选项2" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="单选">
                <el-radio-group v-model="form.resource">
                    <el-radio label="选择1"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="多选">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox label="选择1" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="选择时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;">
                    </el-date-picker>
                </el-col>
                <el-col class="line" :span="1">--</el-col>
                <el-col :span="11">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"
                                    style="width: 100%;">
                    </el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="余额选择" prop="moneyStart">
                <el-input  type="number" v-model="form.moneyStart" auto-complete="off" step="0.01"></el-input>
            </el-form-item>
            <el-form-item prop="moneyEnd">
                <el-input type="number" v-model="form.moneyEnd" auto-complete="off" step="0.01"></el-input>
            </el-form-item>

            <el-button type="primary" @click="onSubmit">立即查询</el-button>
            <el-button>重置查询</el-button>
        </el-form>
    </div>
</template>
<script>
    import markdownEdit from '../../components/markdownEdit.vue'
    //    import ElCol from "element-ui/packages/col/src/col";
    export default {
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('金额不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                            callback();
                    }
                }, 1000);
            };
            var validatemoneyStart = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入金额'));
                } else {
                    if (this.form.moneyEnd !== '') {
                        this.$refs.form.validateField('moneyEnd');
                    }
                    callback();
                }
            };
            var validatemoneyStart2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入查询金额的范围'));
                } else if (value <= this.form.moneyStart) {
                    callback(new Error('结束金额范围不能小于起始金额'));
                } else {
                    callback();
                }
            };
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
                    select: '',
                    number: '',
                    moneyStart: '',
                    moneyEnd: '',
                },
                rules2: {
                    moneyStart: [
                        { validator: validatemoneyStart, trigger: 'blur' }
                    ],
                    moneyEnd: [
                        { validator: validatemoneyStart2, trigger: 'blur' }
                    ]
                }
            }
        },
        components: {
//            ElCol,
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
            },
        }
    }
</script>
<style scoped>

</style>