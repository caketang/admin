<template>
    <div id="results" class="tempAdHome" style="width: 100%">
        <el-row>
            <el-col :span="24" v-if="!oddsToggle">
                <el-button type="primary" class="addManage" @click="doAdd" v-text="_('新 增')"></el-button>
                <!--编辑界面-->
                <el-dialog :title="editFormTtile" v-model="editFormVisible" class="fromTitle">
                    <el-form :model="editForm" label-width="120px" :rules="editFormRules" ref="editForm">
                        <el-form-item :label="_('文案标题')" prop="templateName">
                            <el-input v-model="editForm.templateName" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item :label="_('简体中文内容')" prop="templatCH">
                            <el-input v-model="editForm.templatCH" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item :label="_('繁体中文')" prop="templateFT">
                            <el-input v-model="editForm.templateFT" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item :label="_('英文内容')" prop="templateEN">
                            <el-input v-model="editForm.templateEN" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item :label="_('排序')" prop="templateSort">
                            <el-input-number v-model="num1" @change="handleChange" :min="1" :max="20"></el-input-number>
                        </el-form-item>
                        <el-form-item :label="_('使用于')" prop="templateLocal">
                            <el-select v-model="editForm.templateLocal" :placeholder="_('请选择')">
                                <el-option
                                        v-for="item in states"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item :label="_('状态')" prop="templateState">
                            <el-select v-model="editForm.templateState" :placeholder="_('请选择')">
                                <el-option
                                        v-for="item in statesT"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" @click.native="saveFrom" :loading="editLoading">{{_(btnEditText)}}</el-button>
                        <el-button @click.native="resetForm">{{_('取消')}}</el-button>
                    </div>
                </el-dialog>
            </el-col>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <tablegrid
                            :columnsUrl="columnsUrl"
                            :tableUrl="tableUrl"
                            :tableCheck="false"
                            :tableIndex="false"
                            @do-handle="doHandle"></tablegrid>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import tableGrid from '../../components/tableGrid.vue'
    import NProgress from 'nprogress'
    export default{
        data(){
            return {
                //数据接口地址
                tableUrl: "static/json/ADmanage/ADHome/tableDate.json",
                baseUrl : "static/json/ADmanage/ADHome/tableDate.json",
                //列配置接口地址
                columnsUrl: "static/json/ADmanage/ADHome/columns.json",
                //编辑框状态
                editFormVisible: false,
                states: [{
                    value: "0",
                    label: '全部'
                }, {
                    value: "1",
                    label: 'H5'
                }, {
                    value: "2",
                    label: 'pc'
                }],
                statesT:[{
                    value: "1",
                    label: '启用'
                }, {
                    value: "0",
                    label: '停用'
                }],
                editForm: {
                    id: -1,
                    templateName: 'hahha',
                    templatCH: '',
                    templatFT: '',
                    templatEN: '',
                    templateSort:'',
                    templateLocal: '',
                    templateState:''

                },
                editFormRules: {
                    templateName: [
                        {required: true, message: this._('请输入文案标题'), trigger: 'blur'}
                    ],
                    templatCH: [
                        {required: true, message: this._('请输入简体中文'), trigger: 'blur'}
                    ],
                    templatFT: [
                        {required: true, message: this._('请输入繁体中文'), trigger: 'blur'}
                    ],
                    templatEN: [
                        {required: true, message: this._('请输入英文'), trigger: 'blur'}
                    ],
                    templateSort: [
                        {required: true, message: this._('请输入排序序号'), trigger: 'blur'}
                    ],
                    templateLocal: [
                        {required: true, message: this._('请选择使用的项目'), trigger: 'blur'}
                    ],
                    templateState: [
                        {required: true, message: this._('请选择状态'), trigger: 'blur'}
                    ],
                },
                //排序数字初始值
                num1: 1,
                //列表加载
                listLoading: false,
                //复制添加
                copyAdd: false,
                //玩法状态
                lotterSetType: "standard",
                //赔率设置开关
                oddsToggle: false
            }
        },
        components: {
            tablegrid: tableGrid,
        },
        methods: {
            //表格操作点击事件处理
            doHandle(e){
                switch (e.fn) {
                    case "doCopyAdd":
                        this.doCopyAdd(e.row);
                        break;
                    case "doEdit":
                        this.doEdit(e.row);
                        break;
                    case "doSetOdds":
                        this.doSetOdds(e.row);
                        break;
                    case "doDelDate":
                        this.doDelDate(e.row);
                        break;
                }
            },
            doAdd(){
                if (!this.copyAdd) {
                    this.editForm.templateName = "";
                    this.editForm.templateDescribe = "";
                    this.editForm.templateState = "";
                    this.copyAdd = false;
                }
                this.editFormVisible = true;
                this.editFormTtile = '文案新增/修改';
                this.btnEditText = "保存";
            },
            //图片上传
            handleRemove(file, fileList) {
//                console.log(file, fileList);
            },
            handlePreview(file) {
//                console.log(file);
            },
            //排序数字加减
            handleChange(value) {
//                console.log(value);
            }
        },
    }
</script>
<style>
    .tempAdHome .el-dialog--small {
        width: 30%;
        min-width: 400px;
        max-width: 600px;
        border-radius: 10px;
    }

    .tempAdHome .el-dialog--small .fromMargin {
        margin-right: 60px;
    }

    .tempAdHome .bg-purple-dark {
        background: none;
    }

    .tempAdHome .addManage {
        float: right;
        margin-right: 5%;
    }

    .tempAdHome .block {
        text-align: right;
    }
</style>