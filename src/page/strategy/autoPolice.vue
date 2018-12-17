<template>
    <div id="strategy">
        <el-row>
            <el-col :span="12" :offset="4" ><div class="grid-content bg-purple-dark " style="color: #324057">{{warnTitle}}</div></el-col>
            <el-col :span="6" ><div class="grid-content bg-purple"  style="color: #324057">{{warnState}}</div></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="4" :push="1"><div class="grid-content bg-purple">{{warnUp}}</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"> <el-input-number v-model="warnUpnumber" :step="2"></el-input-number></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">    <el-checkbox v-model="checked">短信提醒</el-checkbox></div></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="4" :push="1"><div class="grid-content bg-purple">{{preWarn}}</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"> <el-input-number v-model="warnUpnumber1" :step="2"></el-input-number></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">    <el-checkbox v-model="checked">短信提醒</el-checkbox></div></el-col>


        </el-row>
        <el-row :gutter="10">
            <el-col :span="4" :push="1"><div class="grid-content bg-purple">{{bigWarn}}</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"> <el-input-number v-model="warnUpnumber2" :step="2"></el-input-number></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple">    <el-checkbox v-model="checked">短信提醒</el-checkbox></div></el-col>
            <el-col :span="4" :push="4"><div class="grid-content bg-purple"><img src="../../../static/img/warning.gif" alt=""></div></el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="4" :push="1"><div class="grid-content bg-purple">降赔预警</div></el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <el-radio class="radio" v-model="radio" label="1">开启</el-radio>
                    <el-radio class="radio" v-model="radio" label="2">关闭</el-radio>
                </div>
            </el-col>

        </el-row>
        <el-row :gutter="10">
            <el-col :span="4" :push="1"><div class="grid-content bg-purple">异常用户提醒</div></el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <el-radio class="radio" v-model="radio1" label="1">开启</el-radio>
                    <el-radio class="radio" v-model="radio1" label="2">关闭</el-radio>
                </div>
            </el-col>

        </el-row>
        <el-row :gutter="10">
            <el-col :span="4" :push="1"><div class="grid-content bg-purple">异常注单提醒</div></el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <el-radio class="radio" v-model="radio2" label="1">开启</el-radio>
                    <el-radio class="radio" v-model="radio2" label="2">关闭</el-radio>
                </div>
            </el-col>

        </el-row>
        <el-row :gutter="10">
            <el-col :span="4" :push="1"><div class="grid-content bg-purple">异常ip注单</div></el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <el-radio class="radio" v-model="radio3" label="1">开启</el-radio>
                    <el-radio class="radio" v-model="radio3" label="2">关闭</el-radio>
                </div>
            </el-col>

        </el-row>
        <el-row :gutter="10">
            <el-col :span="4" :push="1"><div class="grid-content bg-purple">连续盈利用户</div></el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <el-radio class="radio" v-model="radio4" label="1">开启</el-radio>
                    <el-radio class="radio" v-model="radio4" label="2">关闭</el-radio>
                </div>
            </el-col>

        </el-row>
        <el-row :gutter="10">
            <el-col :span="4" :push="1"><div class="grid-content bg-purple">接收短信号码</div></el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <el-input v-model="input" placeholder="请输入电话"></el-input>
                </div>
            </el-col>

        </el-row>
        <el-row :gutter="10">
            <el-col :span="4" :push="3">

                    <el-button @click="doColse">取消</el-button>

            </el-col>
            <el-col :span="4" :push="2">
                    <el-button type="primary" @click="doSave">保存</el-button>
            </el-col>

        </el-row>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                warnTitle: '报警项目设置',
                warnState: '报警实时监控中',
                warnUp: '单项投注额超',
                warnUpnumber: 5000,
                warnUpnumber1: 5000,
                warnUpnumber2: 5000,
                preWarn: '派彩预警',
                bigWarn: '大额投注',
                loading2: true,
                radio: '1',
                radio1: '1',
                radio2: '1',
                radio3: '1',
                radio4: '1' ,
                input: '15135702064'


            }
        },
        components: {},
        methods: {
            doColse(){

            },
            doSave(){
                this.$message.success(LANG['保存成功'] || '保存成功');
            },
        },
        computed: {},
        mounted(){
        },
        created(){
        }
    }
</script>
<style scoped>

    .el-row{
        margin-bottom: 30px;
    }
    .el-icon-loading{
        transform: sacle(2);
    }

</style>