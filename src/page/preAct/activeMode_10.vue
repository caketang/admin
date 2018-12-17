<template>
    <div id="activeMode">
        <el-col>
            <el-button class="bankBtn pRight20" type="primary" icon="arrow-left" size="small" @click="returnPage">
                {{LANG['返 回'] || '返 回'}}
            </el-button>
        </el-col>
        <!--注册优惠-->
        <el-col :span="14" :offset="5" class="activeModeForm">
            <el-form ref="form" :model="modeData" :rules="rules" label-width="140px" class="mt20">
                <el-col :span="24" class="Layout">
                    <h3 class="tCent" v-text="LANG['规则设置'] || '规则设置'"></h3>
                    <el-form-item label="优惠活动名称" prop="name">
                        <el-input class="w80" v-model="modeData.name" :placeholder="placename"></el-input>
                    </el-form-item>
                    <el-form-item label="优惠类型" prop="type_id">
                        <checkGroup :checkOptions="type_idList" :sReset="sReset" @change-option="changeOption"
                                    :checkedval="checkedval"></checkGroup>
                        <input v-model="modeData.type_id" style="display: none"></input>
                        <!--<el-select v-model="modeData.type_id" placeholder="请选择类型" class="w80">-->
                        <!--<el-option :label=item.label :value=item.value :key=item.index-->
                        <!--v-for="(item,index) in type_idList"></el-option>-->
                        <!--</el-select>-->
                    </el-form-item>
                    <!-- <el-form-item label="有效时间" required class="w80">
                        <el-col class="w30">
                            <el-form-item prop="begin_time">
                                <dateTimePicker  v-model="modeData.begin_time" :datekey="'begin_time'"></dateTimePicker>
                            </el-form-item>
                        </el-col>
                        <div style="float:left;" class="w20 tCent"> - </div>
                        <el-col class="w30">
                            <el-form-item prop="end_time">
                                <dateTimePicker  v-model="modeData.end_time" :datekey="'end_time'"></dateTimePicker>
                            </el-form-item>
                        </el-col>
                    </el-form-item> -->
                    <!--<el-form-item label="发放奖金" prop="rule.issueMode" v-if="seachData.type=='add'">-->
                    <!--<el-radio-group v-model="modeData.rule.issueMode">-->
                    <!--<el-radio class="radio"  label="auto"><span-->
                    <!--v-text="LANG['自动发放'] || '自动发放'"></span>-->
                    <!--</el-radio>-->
                    <!--<el-radio class="radio"  label="manual"><span-->
                    <!--v-text="LANG['手动发放'] || '手动发放'"></span>-->
                    <!--</el-radio>-->
                    <!--</el-radio-group>-->
                    <!--</el-form-item>-->
                    <el-form-item label="优惠规则" required>
                        <span v-text="LANG['注册成功优惠'] || '注册成功优惠'"></span>
                        <el-form-item prop="rule.rule.prize" class="to-inline-block"
                                      :rules="[{ validator:validatorNumber,trigger:'blur'}]">
                            <el-input v-model="modeData.rule.rule.prize" class="intW"
                                      :disabled="seachData.type=='edit'"></el-input>
                        </el-form-item>
                        <span v-text="LANG['元'] || '元'"></span>
                    </el-form-item>
                    <el-form-item label="领取限制">
                        <el-radio-group v-model="get" @change="limitChange()" :disabled="seachData.type=='edit'">
                            <el-radio label="1" class="radio">
                                <span v-text="LANG['限定次数'] || '限定次数'"></span>
                                <el-form-item prop="rule.limit_times"
                                              :rules="[{ validator:validatorLimitNumber,trigger:'blur'}]"
                                              style="display: inline-block;">
                                    <el-input v-model="modeData.rule.limit_times" class="intW"
                                              :disabled="seachData.type=='edit'"></el-input>
                                </el-form-item>
                            </el-radio>
                            <el-radio label="2" class="radio"><span v-text="LANG['无限定次数'] || '无限定次数'"></span></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <!-- <el-form-item label="发放时间" required v-show="seachData.type=='add'">
                        <span v-text="LANG['注册完成后第'] || '注册完成后第'"></span>
                        <el-form-item prop="rule.issueTime" :rules="[{ validator:validatorNumber,trigger:'blur'}]" class="to-inline-block">
                            <el-input class="intW" v-model="modeData.rule.issueTime"></el-input>
                        </el-form-item>
                        <span v-text="LANG['天发放'] || '天发放'"></span>
                    </el-form-item> -->
                    <el-form-item label="提款要求" prop="rule.withdrawRequire">
                        <el-radio-group v-model="modeData.rule.withdrawRequire" @change="withdrawRequireChange"
                                        :disabled="seachData.type=='edit'">
                            <el-radio label="times" class="radio">
                                <span v-text="LANG['倍数'] || '倍数'"></span>
                                <el-form-item style="display: inline-block" prop="rule.withdrawRequireVal"
                                              :rules="[{ validator:validatorTimeNumber,trigger:'blur'}]">
                                    <el-input class="intW" v-model="modeData.rule.withdrawRequireVal"
                                              :disabled="seachData.type=='edit'"></el-input>
                                </el-form-item>
                            </el-radio>
                            <el-radio label="bet" class="radio">
                                <span v-text="LANG['固定投注流水'] || '固定投注流水'"></span>
                                <el-form-item style="display: inline-block" prop="rule.withdrawRequireVal1"
                                              :rules="[{ validator:validatorBetNumber,trigger:'blur'}]">
                                    <el-input class="intW" v-model="modeData.rule.withdrawRequireVal1"
                                              :disabled="seachData.type=='edit'"></el-input>
                                </el-form-item>
                            </el-radio>
                            <el-radio label="no" class="radio"><span v-text="LANG['无取款要求'] || '无取款要求'"></span>
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-radio class="radio" v-model="modeData.status" label="enabled"><span
                            v-text="LANG['启用'] || '启用'"></span>
                        </el-radio>
                        <el-radio class="radio" v-model="modeData.status" label="disabled"><span
                            v-text="LANG['停用'] || '停用'"></span>
                        </el-radio>
                    </el-form-item>
                    <el-form-item label="IP领取限制:">
                        <span v-text="LANG['同一个IP不同账号可以领取'] || '同一个IP不同账号可以领取'"></span>
                        <el-form-item prop="rule.extra.ip_limit_times" class="to-inline-block"
                                      :rules="[{ validator:validatorNumber,trigger:'blur'}]">
                            <el-input v-model="modeData.rule.extra.ip_limit_times" class="intW"></el-input>
                        </el-form-item>
                        <span v-text="LANG['次'] || '次'"></span>
                    </el-form-item>
                </el-col>
                <el-col :span="24" class="Layout">
                    <h3 class="tCent" v-text="LANG['内容设置'] || '内容设置'"></h3>
                    <el-form-item label="优惠活动标题" prop="title">
                        <el-input class="w80" v-model="modeData.title"></el-input>
                    </el-form-item>
                    <el-form-item label="语言" prop="language_id">
                        <el-select v-model="modeData.language_id" placeholder="请选择类型" class="w80"
                                   @change="changeLanguage" disabled>
                            <el-option :label="item.label" :value="item.value" v-for="(item,index) in languageList"
                                       :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="优惠活动描述" prop="description">
                        <el-input class="w80" type="textarea" v-model="modeData.description"></el-input>
                    </el-form-item>
                    <el-form-item label="图片上传" prop="cover">
                        <el-input v-model="modeData.cover" style="display:none;"></el-input>
                        <upload :uploadUrl="uploadUrl" @response="doSaveFile" :keys="keys" :isInit="imgInit"
                                :fileNum="1" :arrList="modeData.arrList" :imgResolution="'460*180'"></upload>
                    </el-form-item>
                    <el-form-item label="排序" prop="sort">
                        <el-input v-model="modeData.sort" class="w80"></el-input>
                    </el-form-item>
                    <el-form-item label="打开方式" prop="open_mode">
                        <el-radio-group v-model="modeData.open_mode" @change="radioChange">
                            <!--<el-radio class="radio"  label="1"><span-->
                            <!--v-text="LANG['弹窗'] || '弹窗'"></span>-->
                            <!--</el-radio>-->
                            <el-radio class="radio" label="2"><span
                                v-text="LANG['新窗口打开'] || '新窗口打开'"></span>
                            </el-radio>
                            <el-radio class="radio" label="3"><span
                                v-text="LANG['本页面跳转'] || '本页面跳转'"></span>
                            </el-radio>
                            <el-radio class="radio" label="4"><span
                                v-text="LANG['下拉展开'] || '下拉展开'"></span>
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="链接" prop="link" v-if="linkShow">
                        <el-input class="w80" v-model="modeData.link"></el-input>
                    </el-form-item>
                    <el-col>
                        <el-form-item :label="LANG['PC活动规则编辑'] || 'PC活动规则编辑'" prop="content" v-if="pcshow">
                            <el-input v-model="modeData.content" style="display:none;"></el-input>
                            <markdownEdit :id="'pcmd'" v-model="modeData.content" class="w80"></markdownEdit>
                        </el-form-item>
                    </el-col>
                    <el-col>
                        <el-form-item :label="LANG['H5活动规则编辑'] || 'H5活动规则编辑'" prop="content2" style="z-index:9"
                                      v-if="mbshow">
                            <el-input v-model="modeData.content2" style="display:none;"></el-input>
                            <markdownEdit :id="'mbshowww'" v-model="modeData.content2" class="w80"></markdownEdit>
                        </el-form-item>
                    </el-col>
                </el-col>
            </el-form>
            <el-col :span="24" class="tCent" v-if="seachData.type == 'add'">
                <el-button type="primary" :plain="true" @click="goBack(type = 'add')"><span
                    v-text="LANG['取消生成'] || '取消生成'"></span></el-button>
                <el-button type="primary" @click="doSubmit(type = 'add')"><span v-text="LANG['生成优惠'] || '生成优惠'"></span>
                </el-button>
            </el-col>
            <el-col :span="24" class="tCent" v-else>
                <el-button type="primary" :plain="true" @click="goBack(type = 'edit')"><span
                    v-text="LANG['取消修改'] || '取消修改'"></span></el-button>
                <el-button type="primary" @click="doSubmit(type = 'edit')"><span v-text="LANG['保存修改'] || '保存修改'"></span>
                </el-button>
            </el-col>
        </el-col>
    </div>
</template>
<script>
    import markdownEdit from '../../components/UEditor.vue'
    import upload from '../../components/upload.vue'
    import dateTimePicker from '../../components/dateTimePicker.vue'
    import checkGroup from '../../components/changeAll.vue'

    export default {
        data() {
            let validatePass = (rule, value, callback) => {
                if (value === '' && this.modeData.rule.withdrawRequire === 'times') {
                    callback(new Error('请输入倍数'));
                } else {
                    callback();
                }
            };
            //URL验证
            let validatorUrl = (rule, value, callback) => {
                if (value && !/^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/.test(value)) {
                    callback(new Error(LANG['请输入合法的网址(格式为http://www.***.com或者https://www.***.com)'] || '请输入合法的网址(格式为http://www.***.com或者https://www.***.com)'));
                } else {
                    callback()
                }
            }
            let validatePass1 = (rule, value, callback) => {
                if (value === '' && this.modeData.rule.withdrawRequire === 'bet') {
                    callback(new Error('请输入投注金额'));
                } else {
                    callback();
                }
            };
            const sortValidate = (rule, value, callback) => {
                if (/^(0|[1-9]\d*)$/.test(value.toString())) {
                    callback();
                } else {
                    return callback(new Error('请填写非负整数'));
                }
            };
            const validatorTime = (rule, value, callback) => {
                const beginTime = new Date(this.modeData.begin_time).getTime();
                const endTime = new Date(this.modeData.end_time).getTime();
                if (beginTime > endTime) {
                    callback(new Error(LANG['开始时间不能大于结束时间'] || '开始时间不能大于结束时间'));
                } else {
                    callback();
                }
            }
            return {
                LANG,
                pcshow: false,
                mbshow: false,
                linkShow: false,
                modeData: {
                    arrList: [],
                    name: "",//string #活动名称
                    type_id: "",//int ：活动类型ID
                    title: "",//string #活动标题
                    begin_time: '',//datetime #开始时间
                    end_time: '',//datetime #结束时间
                    vipType: [],//会员列表
                    status: 'enabled',//string #状态 enabled 启用,disabled 停用
                    description: "",//string #描述
                    cover: "",//string #封面
                    language_id: "",//int #语言ID
                    language_name: "",//string #语言名称
                    sort: "",//排序
                    content: "",//string #内容
                    content2: "",//string #内容
//                    state: [],//string #集合信息 apply:可申请, auto:自动参与
//                    updated_uid: "",//int #更新者ID
                    fileList2: [],//文件上传
                    //优惠类型下拉选项请求用
//                    type_idList:[],
                    // 排序
                    sort: "",
                    // 打开方式
                    open_mode: "",
                    // 链接
                    link: null,
                    rule: {
                        template_id: '',
                        rule: {
                            prize: ''
                        },
                        luckydraw_condition: [],
                        limit_times: '',//领取限制次数
                        withdrawRequire: '',//提款要求选择
                        withdrawRequireVal: '',//
                        withdrawRequireVal1: '',//提款倍数
                        member_level: '',
                        issueTime: null,//发放时间
                        issue_cycle: 'day',
                        issueMode: 'auto',//string #发放方式
                        game: [],
                        extra: {
                            ip_limit_times: '',
                        }
                    },
                    checkedDefut: [],
                },
                pcshow: false,
                get: "",//领取限制方式
                placename: '',
                //下拉优惠类型列表
                type_idList: [],
                //获取有效会员等级
                vipList: [],
                //默认选中项
                isIndeterminate: true,
                checkList: [],
//                checkAll: true,//全选会员等级
                //获取页面传过来的值
                seachData: {},
                languageList: [],
                // 上传地址
                uploadUrl: URL.rpi,
                // 上传字段名
                keys: "images",
                // 是否初始化
                imgInit: false,
                rules: {
                    name: [
                        {required: true, message: '请填写活动名称', trigger: 'blur'}
                    ],
                    type_id: [
                        {required: true, type: 'array', message: '请选择优惠类型', trigger: 'change'}
                    ],
                    language_id: [
                        {required: true, message: '请选择语言类型', trigger: 'change'}
                    ],
                    description: [
                        {required: true, message: '请输入活动描述', trigger: 'blur'}
                    ],
                    cover: [
                        {required: true, message: '', trigger: 'change'}
                    ],
                    begin_time: [
                        {required: true, validator: validatorTime, trigger: 'change'}
                    ],
                    end_time: [
                        {required: true, validator: validatorTime, trigger: 'change'}
                    ],
                    'rule.issueMode': [
                        {required: true, message: '请选择发放奖金方式', trigger: 'change'}
                    ],
                    'rule.withdrawRequire': [
                        {required: true, message: '请选择提款要求', trigger: 'change'}
                    ],
                    'rule.withdrawRequireVal': [{validator: validatePass, trigger: 'blur'}],
                    'rule.withdrawRequireVal1': [{validator: validatePass1, trigger: 'blur'}],
                    checkedDefut: [
                        {required: true, message: '请至少选择一个会员等级', trigger: 'change'}
                    ],
                    link: [{required: true, validator: validatorUrl, trigger: 'change'}],
                    open_mode: [
                        {required: true, message: '请选择打开方式', trigger: 'change'}
                    ],
                    cover: [
                        {required: false, message: '请上传图片', trigger: 'change'}
                    ],
                    title: [
                        {required: true, message: '请输入活动标题', trigger: 'change'}
                    ],
                    content: [
                        {required: true, message: '请输入优惠规则', trigger: 'change'}
                    ],
                    content2: [
                        {required: true, message: '请输入优惠规则', trigger: 'change'}
                    ],
                    sort: [
                        {validator: sortValidate, trigger: 'blur', required: true}
                    ]
                },
                // 类型全选
                sReset: false,
                checkedval: {
                    checked: []
                }
            }
        },
        components: {
            markdownEdit: markdownEdit,
            upload: upload,
            dateTimePicker: dateTimePicker,
            checkGroup: checkGroup
        },
        methods: {
            init() {
                let _this = this;
                this.modeData.begin_time = window.sessionStorage.sysTime + ' 00:00:00'//datetime #开始时间
                this.modeData.end_time = '2118-01-01 23:59:59'//datetime #结束时间
                let query = this.$route.query;
                for (let k in query) {
                    this.seachData[k] = query[k];
                }

                //编辑页面数据获得后要操作会员层级数据，所以先要获得到会员层级数据
                function getMeber() {
                    return new Promise(function (resolve, reject) {
                        let levelUrl = URL.api + `/active/template/unique?template_id=${_this.seachData.template_id}&&begin_time=${_this.modeData.begin_time}&&end_time=${_this.modeData.end_time}`;
                        _this.$.autoAjax('get', levelUrl, '', {
                            ok: (res) => {
                                let model = res.data
                                _this.vipList = [];
                                for (let i in model) {
                                    _this.vipList.push({
                                        "label": model[i].name,
                                        "value": model[i].id.toString()
                                    })
                                }
                                resolve();
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                    })
                }
                getMeber().then(function () {
                    //获取编辑页面数据
                    if (_this.seachData.type === 'edit') {
                        _this.checkedval.checked.splice(0, _this.checkedval.checked.length);
                        let editUrl = URL.api + `/active/template.fix/${_this.seachData.id}`;
                        this.$.autoAjax('get', editUrl, '', {
                            ok: (res) => {
                                if (res.state === 0 && res.data) {
                                    let formData = res.data;
                                    let temp = res.data.types || [], typelist = [];
                                    temp.forEach((item, key) => {
                                        typelist.push(item.id);
                                        _this.checkedval.checked.push(item.id.toString());
                                    })
                                    _this.modeData = {
                                        arrList: [],
                                        name: formData.name,
                                        type_id: typelist,
                                        title: formData.title,
                                        begin_time: formData.begin_time,
                                        end_time: formData.end_time,
                                        day: formData.day,
                                        vipType: [],//会员列表
                                        money: formData.money,
                                        status: formData.status,
                                        description: formData.description,
                                        language_id: formData.language_id,
                                        language_name: formData.language_name,
                                        sort: formData.sort,
                                        cover: formData.cover,
                                        content: formData.content,
                                        content2: formData.content2,
                                        open_mode: formData.open_mode,
                                        link: formData.link,
                                        rule: {
                                            rule: {
                                                prize: (formData.rule.rule.prize / 100).toString()
                                            },
                                            limit_times: formData.rule.limit_times,
                                            withdrawRequire: formData.rule.withdraw_require,
                                            issueTime: '0',
                                            issue_cycle: formData.rule.issue_cycle,
                                            issueMode: formData.rule.issue_mode,
                                            game: [],
                                            extra: {
                                                ip_limit_times: formData.rule.extra.ip_limit_times,
                                            }
                                        },
                                    };
                                    //处理会员层级数据
                                    // let meberList = formData.rule.member_level.split(',');
                                    // _this.vipList.forEach(function (item) {
                                    //     meberList.forEach(function (meberItem) {
                                    //         if(meberItem === item.value){
                                    //             _this.modeData.checkedDefut.push(item.label)
                                    //             console.log(_this.modeData.checkedDefut)
                                    //         }
                                    //     })
                                    // })
                                    //活动图片
                                    _this.modeData.arrList.push(formData.cover);
                                    //处理领取限制
                                    if (formData.rule.limit_times > 0) {
                                        _this.get = '1'
                                    } else {
                                        _this.get = '2';
                                        _this.modeData.rule.limit_times = null;
                                    }
                                    //处理提款要求
                                    if (formData.rule.withdraw_require === 'bet') {
                                        _this.modeData.rule.withdrawRequireVal1 = formData.rule.withdraw_require_val / 100
                                    } else if (formData.rule.withdraw_require === 'times') {
                                        _this.modeData.rule.withdrawRequireVal = formData.rule.withdraw_require_val
                                    }
                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                        // _this.$http.get(editUrl,URLCONFIG).then(res => {
                        //         if(res.data.state === 0 && res.data.data) {
                        //             let formData = res.data.data;
                        //             let temp = res.data.data.types || [],typelist = [];
                        //             temp.forEach((item,key)=>{
                        //                 typelist.push(item.id);
                        //                 _this.checkedval.checked.push(item.id.toString());
                        //             })
                        //             _this.modeData =  {
                        //                 arrList:[],
                        //                 name : formData.name,
                        //                 type_id : typelist,
                        //                 title : formData.title,
                        //                 begin_time : formData.begin_time,
                        //                 end_time : formData.end_time,
                        //                 day : formData.day,
                        //                 vipType: [],//会员列表
                        //                 money: formData.money,
                        //                 status: formData.status,
                        //                 description: formData.description,
                        //                 language_id: formData.language_id,
                        //                 language_name: formData.language_name,
                        //                 sort:formData.sort,
                        //                 cover:formData.cover,
                        //                 content: formData.content,
                        //                 content2:formData.content2,
                        //                 open_mode:formData.open_mode,
                        //                 link:formData.link,
                        //                 rule:{
                        //                     rule: {
                        //                         prize:(formData.rule.rule.prize / 100).toString()
                        //                     },
                        //                     limit_times:formData.rule.limit_times,
                        //                     withdrawRequire:formData.rule.withdraw_require,
                        //                     issueTime: '0' ,
                        //                     issue_cycle: formData.rule.issue_cycle,
                        //                     issueMode:formData.rule.issue_mode,
                        //                     game: [],
                        //                     extra:{
                        //                         ip_limit_times:formData.rule.extra.ip_limit_times,
                        //                     }
                        //                 },
                        //             };
                        //             //处理会员层级数据
                        //             // let meberList = formData.rule.member_level.split(',');
                        //             // _this.vipList.forEach(function (item) {
                        //             //     meberList.forEach(function (meberItem) {
                        //             //         if(meberItem === item.value){
                        //             //             _this.modeData.checkedDefut.push(item.label)
                        //             //             console.log(_this.modeData.checkedDefut)
                        //             //         }
                        //             //     })
                        //             // })
                        //             //活动图片
                        //             _this.modeData.arrList.push(formData.cover);
                        //             //处理领取限制
                        //             if(formData.rule.limit_times > 0){
                        //                 _this.get = '1'
                        //             }else{
                        //                 _this.get = '2';
                        //                 _this.modeData.rule.limit_times = null;
                        //             }
                        //             //处理提款要求
                        //             if(formData.rule.withdraw_require === 'bet'){
                        //                 _this.modeData.rule.withdrawRequireVal1 = formData.rule.withdraw_require_val /100
                        //             }else if(formData.rule.withdraw_require === 'times'){
                        //                 _this.modeData.rule.withdrawRequireVal = formData.rule.withdraw_require_val
                        //             }
                        //         }
                        //     })
                    }
                });
                //初始化优惠活动名称
                this.placename = this.seachData.label;
//                获取优惠类型列表

                this.$.autoAjax('get', URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", '', {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            this.type_idList = [];
                            let model = res.data || [];
                            for (let k in model) {
                                this.type_idList.push({
                                    "label": model[k].name,
                                    "value": model[k].id.toString()
                                });
                            }
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.get(URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", URLCONFIG).then((res) => {
                //     if (res.data.state === 0 && res.data.data) {
                //         this.type_idList = [];
                //         let model = res.data.data || [];
                //         for (let k in model) {
                //             this.type_idList.push({
                //                 "label": model[k].name,
                //                 "value": model[k].id.toString()
                //             });
                //         }
                //     }
                // });
                let langeUrl = URL.api + ROUTES.GET.langeages;

                this.$.autoAjax('get', langeUrl, '', {
                    ok: (res) => {
                        this.languageList = [];
                        let model = res.data
                        for (let i in model) {
                            this.languageList.push({
                                "label": model[i].name,
                                "value": model[i].id.toString()
                            })
                        }
                        this.modeData.language_id = '1';
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.get(langeUrl, URLCONFIG).then((res) => {
                //     this.languageList = [];
                //     let model = res.data.data
                //     for (let i in model) {
                //         this.languageList.push({
                //             "label": model[i].name,
                //             "value": model[i].id.toString()
                //         })
                //     }
                //     this.modeData.language_id = '1';
                // })
            },
            //全选
            // handleCheckAllChange(event) {
            //     let checkList = [];
            //     for (let v in this.vipList) {
            //         checkList[v] = this.vipList[v].label;
            //     };
            //     this.modeData.checkedDefut = event.target.checked ? checkList : [];
            //     this.isIndeterminate = false;
            // },
            // //单选
            // handleCheckedDefutChange(value) {
            //     let checkedCount = value.length;
            //     this.checkAll = checkedCount === this.vipList.length;
            //     this.isIndeterminate = checkedCount > 0 && checkedCount < this.vipList.length;
            // },
            // 优惠类型全选
            changeOption(obj) {
                this.modeData.type_id = obj.item;
            },
            //提交表单
            doSubmit(type) {
                let _this = this;
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        //会员层级字符串
                        // let checklist= [];
                        // this.modeData.checkedDefut.forEach(function (it) {
                        //     _this.vipList.forEach(function (item) {
                        //         if(item.label === it){
                        //             checklist.push(item)
                        //         }
                        //     });
                        // });
                        // let member_level = checklist.map(function (item) {
                        //     return item.value
                        // }).join(',');
                        //拿到选中的语言
                        let lan = this.languageList.find(function (item) {
                            return item.value = _this.modeData.language_id
                        });
                        //提款要求数据处理
                        let withdraw_require_val = null;
                        if (this.modeData.rule.withdrawRequire === 'times') {
                            withdraw_require_val = parseInt(this.modeData.rule.withdrawRequireVal)
                        } else if (this.modeData.rule.withdrawRequire === 'bet') {
                            withdraw_require_val = parseInt(this.modeData.rule.withdrawRequireVal1) * 100
                        } else {
                            withdraw_require_val = 0
                        }

                        //  优惠类型多选
                        let type_idList = this.type_idList, typeList = [], type_id = this.modeData.type_id;
                        for (let m = 0; m < type_id.length; m++) {
                            for (let n = 0; n < type_idList.length; n++) {
                                if (type_id[m] == type_idList[n].value) {
                                    typeList.push({
                                        "id": FORMATINT(type_idList[n].value),
                                        "name": type_idList[n].label
                                    });
                                }
                            }
                        }

                        let formData = {
                            name: this.modeData.name,
                            types: typeList,
                            title: this.modeData.title,
                            begin_time: this.modeData.begin_time,
                            end_time: this.modeData.end_time,
                            description: this.modeData.description,
                            cover: this.modeData.cover,
                            language_id: parseInt(this.modeData.language_id),
                            language_name: lan ? lan.label : '',
                            sort: parseInt(this.modeData.sort),
                            content: this.modeData.content,
                            content2: this.modeData.content2,
                            open_mode: this.modeData.open_mode,
                            link: this.modeData.link,
                            status: this.modeData.status,
                            rule_type: 'register',
                            rule: {
                                template_id: this.modeData.rule.template_id ? this.modeData.rule.template_id : 10,
                                rule: {
                                    prize: this.modeData.rule.rule.prize * 100
                                },
                                luckydraw_condition: this.modeData.rule.luckydraw_condition,
                                limit_times: this.modeData.rule.limit_times ? this.modeData.rule.limit_times : 0,
                                withdraw_require: this.modeData.rule.withdrawRequire,
                                withdraw_require_val: withdraw_require_val,
                                member_level: '',
                                issue_time: '0',
                                issue_cycle: this.modeData.rule.issue_cycle,
                                issue_mode: this.modeData.rule.issueMode,
                                game: [],
                                extra: {
                                    ip_limit_times: _this.modeData.rule.extra.ip_limit_times,
                                }
                            }
                        };
                        if (type === 'add') {
                            let url = URL.api + `/active/template.fix`;

                            this.$.autoAjax('put', url, formData, {
                                ok: (res) => {
                                    if (data.state === 0) {
                                        let str = LANG['添加成功'] || '添加成功';
                                        this.$message.success(str)
                                        setTimeout(function () {
                                            _this.$router.push({path: 'addActiveSet'})
                                        }, 1000)
                                    } else if (data.state > 3) {
                                        this.$message.error(data.msg)
                                    } else {
                                        let str = LANG['修改失败'] || '修改失败';
                                        this.$message.error(str)
                                    }
                                },
                                p: () => {
                                },
                                error: e => {
                                    console.log(e)
                                }
                            })
                            // this.$http.put(url,formData,URLCONFIG).then(data =>{
                            //         if(data.data.state === 0){
                            //             let str = LANG['添加成功'] || '添加成功';
                            //             this.$message.success(str)
                            //             setTimeout(function () {
                            //                 _this.$router.push({path: 'addActiveSet'})
                            //             },1000)
                            //         }else if(data.data.state > 3){
                            //             this.$message.error(data.data.msg)
                            //         }else {
                            //             let str = LANG['修改失败'] || '修改失败';
                            //             this.$message.error(str)
                            //         }
                            //     })
                        } else {
                            let url = URL.api + `/active/template.fix/${this.seachData.id}`

                            this.$.autoAjax('put', url, formData, {
                                ok: (res) => {
                                    if (data.state === 0) {
                                        let str = LANG['修改成功'] || '修改成功';
                                        this.$message.success(str)
                                        setTimeout(function () {
                                            _this.$router.push({path: 'activeSet'})
                                        }, 1000)
                                    } else if (data.state > 3) {
                                        this.$message.error(data.msg)
                                    } else {
                                        let str = LANG['修改失败'] || '修改失败';
                                        this.$message.error(str)
                                    }
                                },
                                p: () => {
                                },
                                error: e => {
                                    console.log(e)
                                }
                            })
                            // this.$http.put(url,formData,URLCONFIG).then(data =>{
                            //         if(data.data.state === 0){
                            //             let str = LANG['修改成功'] || '修改成功';
                            //             this.$message.success(str)
                            //             setTimeout(function () {
                            //                 _this.$router.push({path: 'activeSet'})
                            //             },1000)
                            //         }else if(data.data.state > 3){
                            //             this.$message.error(data.data.msg)
                            //         }else {
                            //             let str = LANG['修改失败'] || '修改失败';
                            //             this.$message.error(str)
                            //         }
                            //     })
                        }
                    } else {
                        _this.$message.error('请检查表单');
                        return false;
                    }
                });
            },
            //領取限制change
            limitChange() {
                if (this.get === '2') {
                    //清空limit_times
                    this.modeData.rule.limit_times = ''
                }
                this.$refs.form.validateField('rule.limit_times');
            },
            radioChange(value) {
                this.linkShow = value == '4' ? false : true;
                // this.modeData.link = value == '4'?null:this.modeData.link;
                // this.markDownShow = value == '4' ? true:false;
                if (value == '4') {
                    this.pcshow = true;
                    this.mbshow = true;
                    this.rules.content.push({message: '请输入pc活动规则', trigger: "change", required: true})
                    this.rules.content2.push({message: '请输入H5活动规则', trigger: "change", required: true});
                } else {
                    this.rules.content2.shift();
                    this.rules.content.shift();
                    this.pcshow = false;
                    this.mbshow = false;
                    // this.modeData.content = '';
                    // this.modeData.content2 = '';
                }
            },
            //数字验证
            validatorNumber(rule, value, callback) {
                //检测值是不是为空
                if (!value) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                    return;
                }
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value.toString().replace(/^\s+|\s+$/, ''))) {
                    if (isNaN(value) || !!value.replace(/^\s+|\s+$/, '') == false) {
                        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                    } else {
                        callback(new Error(LANG['小数点后不超过两位'] || '小数点后不超过两位'));
                    }
                } else {
                    if (value < 0) {
                        callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                    } else if (value > 9999999) {
                        callback(new Error(LANG['输入金额不能大于9999999'] || '输入金额不能大于9999999'));
                    } else {
                        callback();
                    }
                }
            },
            //限制领取次数验证
            validatorLimitNumber(rule, value, callback) {
                if (this.get === '1') {
                    this.validatorNumber.apply(this, arguments)
                } else {
                    callback();
                }
            },
            //提款要求倍数验证
            validatorTimeNumber(rule, value, callback) {
                if (this.modeData.rule.withdrawRequire === 'times') {
                    this.validatorNumber.apply(this, arguments)
                } else {
                    callback();
                }
            },
            //提款要求固定投注流水验证
            validatorBetNumber(rule, value, callback) {
                if (this.modeData.rule.withdrawRequire === 'bet') {
                    this.validatorNumber.apply(this, arguments)
                } else {
                    callback();
                }
            },
            goBack(type) {
                type == "add" ? this.$router.push({path: 'addActiveSet'}) : this.$router.push({path: 'activeSet'});
            },
            //
            doSaveFile(obj) {
                this.modeData.cover = obj.url[0];
            },
            changeLanguage(value) {
                let languageList = this.languageList;
            },
            withdrawRequireChange() {
                this.$refs.form.validateField('rule.withdrawRequireVal');
                this.$refs.form.validateField('rule.withdrawRequireVal1');
            },
            timeChange(obj) {
                setTimeout(() => {
                    this.$refs.form.validateField('begin_time')
                    this.$refs.form.validateField('end_time')
                })
            },
            //  返回上页
            returnPage() {
                this.$router.replace('/activeSet');
            }
        },
        computed: {},
        activated() {
            this.init()
        },
        beforeRouteLeave(to, from, next) {
            next(true);
            this.$refs.form.resetFields();
            this.modeData.description = '';
            this.modeData.arrList = [];
            this.modeData.content = '';
            this.modeData.content2 = '';
            this.pcshow = false;
            this.mbshow = false;
        }
    };
</script>
<style scoped>
    .tCent {
        padding-bottom: 10px;
    }

    #activeMode .Layout {
        padding: 10px 4%;
    }

    #activeMode .activeModeForm {
        border: 1px solid #c8c8c8;
    }

    #activeMode .el-radio + .el-radio {
        margin-left: 10px;
    }

    #activeMode .el-checkbox + .el-checkbox {
        margin: 0 6px;
    }

    .to-inline-block {
        display: inline-block;
    }

    .to-inline-block .ruleInput {
        width: 80px;
    }

    .radio {
        padding-right: 20px;
    }

    .addPadding {
        padding-bottom: 20px;
    }
</style>
