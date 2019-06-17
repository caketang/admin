<template>
    <div id="activeMode11">
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
                        <el-input class="w80" v-model="modeData.name" :placeholder="nameLabel"></el-input>
                    </el-form-item>
                    <el-form-item label="优惠类型" prop="type_id">
                        <checkGroup :checkOptions="type_idList" :sReset="sReset" @change-option="changeOption" :checkedval="checkedval"></checkGroup>
                        <input v-model="modeData.type_id" style="display: none">
                    </el-form-item>
                    <el-form-item label="有效投注达到" prop="rule.rule.valid_bet">
                        <el-input class="w80" v-model="modeData.rule.rule.valid_bet" :placeholder="betLabel" type="number">
                            <template slot="append">元</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="奖金" prop="rule.rule.prize">
                        <el-input class="w80" v-model="modeData.rule.rule.prize" :placeholder="prizeLabel" type="number">
                            <template slot="append">元</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="提款要求" prop="withdraw_require_val">
                        <el-input class="w80" v-model="modeData.withdraw_require_val" :placeholder="requireLabel" type="number">
                            <template slot="append">倍</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-radio class="radio" v-model="modeData.rule.issue_mode" label="manual"><span
                            v-text="LANG['手动'] || '手动'"></span>
                        </el-radio>
                        <el-radio class="radio" v-model="modeData.rule.issue_mode" label="auto"><span
                            v-text="LANG['自动'] || '自动'"></span>
                        </el-radio>
                    </el-form-item>
                    <!--<el-form-item label="发放方式">-->
                        <!--<el-radio-group v-model="get" @change="limitChange()" >-->
                            <!--<el-radio label="1" class="radio">-->
                                <!--<span v-text="LANG['手动'] || '手动'"></span>-->
                            <!--</el-radio>-->
                            <!--<el-radio label="2" class="radio">-->
                                <!--<span v-text="LANG['自动'] || '自动'"></span>-->
                            <!--</el-radio>-->
                        <!--</el-radio-group>-->
                    <!--</el-form-item>-->
                    <h3>内容设置</h3>
                    <el-form-item label="优惠活动标题" prop="title">
                        <el-input class="w80" v-model="modeData.title"  placeholder="请输入优惠活动标题" :maxlength="15"></el-input>
                    </el-form-item>
                    <!--<el-form-item label="优惠规则" prop="discounts_rule">-->
                        <!--<el-input class="w80" v-model="modeData.discounts_rule" placeholder="请输入优惠规则"></el-input>-->
                    <!--</el-form-item>-->
                    <el-form-item label="优惠活动描述" prop="description">
                        <el-input class="w80" type="textarea" v-model="modeData.description" placeholder="请输入优惠活动描述"></el-input>
                    </el-form-item>
                    <el-form-item label="设备1" prop="coverUse1">
                        <el-select v-model="modeData.coverUse1" placeholder="请选择">
                            <el-option label="手机" value="mobile"></el-option>
                            <!--<el-option label="PC" value="pc"></el-option>-->
                        </el-select>
                    </el-form-item>
                    <el-form-item label="设备1图片上传" prop="coverPic1">
                        <el-input v-model="modeData.coverPic1" style="display:none;"></el-input>
                        <upload :uploadUrl="uploadUrl1" @doUpload="doSaveFile1" :keys="keys1" :isInit="imgInit1"
                                :fileNum="2" :arrList="modeData.arrList1" :imgResolution="'460*180'" ></upload>
                    </el-form-item>
                    <el-form-item label="设备2" prop="coverUse2">
                        <el-select v-model="modeData.coverUse2" placeholder="请选择">
                            <!--<el-option label="手机" value="mobile"></el-option>-->
                            <el-option label="PC" value="pc"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="设备2图片上传" prop="coverPic2">
                        <el-input v-model="modeData.coverPic2" style="display:none;"></el-input>
                        <upload :uploadUrl="uploadUrl2" @doUpload="doSaveFile2" :keys="keys2" :isInit="imgInit2"
                                :fileNum="2" :arrList="modeData.arrList2" :imgResolution="'460*180'"></upload>
                    </el-form-item>
                    <el-form-item label="排序" prop="sort">
                        <el-input v-model="modeData.sort" class="w80" type="number"></el-input>
                    </el-form-item>
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
            //验证活动标题
            var validateTitle = (rule, value, callback) =>{
                let reg1 = /[\u4e00-\u9fa5]/g;
                let reg2 = /[^\u4E00-\u9FFF]/g;
                let cunt = 0;
                value = value.replace(/\s+/g,"");
                cunt = cunt+(value.match(reg1)?value.match(reg1).length*2+cunt:cunt);
                cunt = cunt+(value.match(reg2)?value.match(reg2).length+cunt:cunt);
                if(cunt>2048 ||cunt<1){
                    callback(new Error(LANG['请输入长度1到2048位！'] || '请输入长度1到2048位！'))
                }else{
                    callback();
                }
            };
            // 验证活动内容
            var validateHans = (rule, value, callback) =>{
                let reg1 = /[\u4e00-\u9fa5]/g;
                let reg2 = /[^\u4E00-\u9FFF]/g;
                let cunt = 0;
                value = value.replace(/\s+/g,"");
                value = value.replace(/[\r\n]/g, "");
                cunt = cunt+(value.match(reg1)?value.match(reg1).length*2+cunt:cunt);
                cunt = cunt+(value.match(reg2)?value.match(reg2).length+cunt:cunt);
                if(cunt>2048 ||cunt<1){
                    callback(new Error(LANG['请输入有效内容！'] || '请输入有效内容！'))
                }else{
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
                    name: "",//代理邀请注册
                    types: "",//代理邀请注册
                    cover:[],
                    coverUse1:'mobile',
                    coverUse2:'pc',
                    coverPic1:'',
                    coverPic2:'',
                    title: "",//
                    discounts_rule:"",
                    begin_time: "",//
                    end_time: "",//
                    description: "",//
                    language_id: "",//
                    language_name: "",//
                    sort: "",//
                    content: "",//
                    open_mode: "",//
                    link: "",//
                    status: "",//
                    rule_type: "",//
                    withdraw_require_val:'',
                    rule: {
                        template_id: '',
                        rule: {
                            prize: '',
                            valid_bet:'',
                        },
                        withdraw_require:'',
                        send_mode:'',
                       luckydraw_condition: [],
                       limit_times: '',//领取限制次数
                       withdrawRequire: '',//提款要求选择
                       withdrawRequireVal: '',//
                       withdrawRequireVal1: '',//提款倍数
                       member_level: '',
                       issueTime: null,//发放时间
                       issue_cycle: 'day',
                       // issue_mode: 'auto',//string #发放方式
                       game: [],
                       extra: {
                           ip_limit_times: '',
                       }
                    },
                    checkedDefut: [],
                },
                pcshow: false,
                get: "",//领取限制方式
                nameLabel: '请输入优惠活动名称',
                betLabel: '请输入有效投注金额',
                prizeLabel: '请输入奖金',
                requireLabel: '请输入提款要求',
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
                uploadUrl1: URL.rpi,
                uploadUrl2: URL.rpi,
                // 上传字段名
                keys1: "images1",
                keys2: "images2",
                // 是否初始化
                imgInit1: false,
                imgInit2: false,
                rules: {
                    name: [
                        {required: true, message: '请填写活动名称', trigger: 'blur'}
                    ],
                    // title: [
                    //     {required: true, type: 'array', message: '请输入优惠标题', trigger: 'change'}
                    // ],
                    // withdraw_require:[
                    //     {required: true, message: '请填写提款要求', trigger: 'blur'}
                    // ],
                    // coverUse:[
                    //     {required: true, message: '请选择设备', trigger: 'change'}
                    // ],
                    discounts_rule: [
                        {required: true, message: '请填写优惠规则', trigger: 'blur'}
                    ],
                    type_id: [
                        {required: true, type: 'array', message: '请选择优惠类型', trigger: 'blur'}
                    ],
                    language_id: [
                        {required: true, message: '请选择语言类型', trigger: 'change'}
                    ],
                    description: [
                        {required: true, message: '请填写活动描述', trigger: 'blur'},
                        {validator: validateHans,trigger: 'blur,change'}
                    ],
                    begin_time: [
                        {required: true, validator: validatorTime, trigger: 'change'}
                    ],
                    end_time: [
                        {required: true, validator: validatorTime, trigger: 'change'}
                    ],
                    'rule.rule.valid_bet':[
                        {required: true, message: '请填写有效投注', trigger: 'blur'},
                        {validator: sortValidate, trigger: 'blur', required: true}
                    ],
                    'rule.rule.prize':[
                        {required: true, message: '请填写奖金', trigger: 'blur'},
                        {validator: sortValidate, trigger: 'blur', required: true}
                    ],
                    'rule.issue_mode': [
                        {required: true, message: '请选择发放奖金方式', trigger: 'change'}
                    ],
                    'rule.withdrawRequire': [
                        {required: true, message: '请选择提款要求', trigger: 'change'},
                        {validator: sortValidate, trigger: 'blur', required: true}
                    ],
                    // 'rule.withdrawRequireVal': [{validator: validatePass, trigger: 'blur'}],
                    withdraw_require_val: [
                        {required: true, message: '请选择提款要求', trigger: 'blur'},
                        {validator: sortValidate, trigger: 'blur', required: true}
                    ],
                    checkedDefut: [
                        {required: true, message: '请至少选择一个会员等级', trigger: 'change'}
                    ],
                    link: [{required: true, validator: validatorUrl, trigger: 'change'}],
                    // open_mode: [
                    //     {required: true, message: '请选择打开方式', trigger: 'change'}
                    // ],
                    coverPic1: [
                        {required: true, message: '请上传图片', trigger: 'change'}
                    ],
                    title: [
                        {required: true, message: '请输入活动标题', trigger: 'blur'},
                        {min:1,max:15,message:'请输入1至15 个字符'},
                        {validator: validateTitle,trigger: 'blur,change'}
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
                sReset: true,
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
                this.sReset = true;
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
                       _this.$.autoAjax('get', editUrl, '', {
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
                                       valid_bet:formData.valid_bet,
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
                                       // cover: formData.cover,
                                       content: formData.content,
                                       content2: formData.content2,
                                       open_mode: formData.open_mode,
                                       link: formData.link,
                                       coverUse1:'mobile',
                                       coverUse2:'pc',
                                       withdraw_require_val:(formData.rule.withdraw_require_val).toString(),
                                       rule: {
                                           rule: {
                                               prize: (formData.rule.rule.prize).toString(),
                                               valid_bet: (formData.rule.rule.valid_bet).toString()
                                           },
                                           limit_times: formData.rule.limit_times,
                                           withdrawRequire: formData.rule.withdraw_require,
                                           issueTime: '0',
                                           issue_cycle: formData.rule.issue_cycle,
                                           issue_mode: formData.rule.issue_mode,
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
                                       _this.modeData.rule.withdrawRequireVal1 = formData.rule.withdraw_require_val
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
                   }else{
                       _this.checkedval.checked.splice(0, _this.checkedval.checked.length);
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
            },
            // 优惠类型全选
            changeOption(obj) {
                this.modeData.type_id = obj.item;
            },
            //提交表单
            doSubmit(type) {
                let _this = this;
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        //拿到选中的语言
                        let lan = this.languageList.find(function (item) {
                            return item.value = _this.modeData.language_id
                        });
                        // 提款要求数据处理
                        let withdraw_require_val = null;
                        if (this.modeData.rule.withdrawRequire === 'times') {
                            withdraw_require_val = parseInt(this.modeData.rule.withdraw_require_val)
                        } else if (this.modeData.rule.withdrawRequire === 'bet') {
                            withdraw_require_val = parseInt(this.modeData.rule.withdraw_require_val)
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
                        let cover = []
                            cover.push({"mobile":this.modeData.coverPic1})
                            cover.push({"pc":this.modeData.coverPic2})
                        //     cover.push(this.modeData.coverUse1=="mobile"?{
                        //         "mobile":this.modeData.coverPic1
                        // }:{"pc":this.modeData.coverPic1})
                        //     cover.push(this.modeData.coverUse2=="mobile"?{
                        //     "mobile":this.modeData.coverPic2
                        // }:{"pc":this.modeData.coverPic2})
                        let    formData = {
                            name: this.modeData.name,
                            types: typeList,
                            title: this.modeData.title,
                            // discounts_rule:this.modeData.discounts_rule,
                            begin_time: this.modeData.begin_time,
                            end_time: this.modeData.end_time,
                            description: this.modeData.description,
                            cover:cover,
                            // coverUse: this.modeData.coverUse,
                            // coverPic: this.modeData.coverPic,
                            // language_id: parseInt(this.modeData.language_id),
                            language_id: 1,
                            // language_name: lan ? lan.label : '',
                            language_name: '简体中文',
                            sort: parseInt(this.modeData.sort),
                            content: this.modeData.content,
                            content2: this.modeData.content2,
                            open_mode: 2,
                            link: this.modeData.link,
                            // status: this.modeData.status,
                            status: 'enabled',
                            rule_type: 'agent_order_prize',
                            rule: {
                                template_id: this.modeData.rule.template_id ? this.modeData.rule.template_id : 11,
                                rule: {
                                    prize: this.modeData.rule.rule.prize,
                                    valid_bet: this.modeData.rule.rule.valid_bet,
                                    // withdraw_require: this.modeData.rule.rule.withdraw_require,
                                },
                                luckydraw_condition: this.modeData.rule.luckydraw_condition,
                                limit_times: this.modeData.rule.limit_times ? this.modeData.rule.limit_times : 0,
                                withdraw_require: 'times',
                                withdraw_require_val: this.modeData.withdraw_require_val,
                                // member_level: '',
                                // issue_time: '0',
                                // issue_cycle: this.modeData.rule.issue_cycle,
                                issue_mode: this.modeData.rule.issue_mode,
                                game: [],
                                // extra: {
                                //     ip_limit_times: _this.modeData.rule.extra.ip_limit_times,
                                // }
                            }
                        };
                        if (type === 'add') {
                            let url = URL.api + `/active/template.fix`;
                            this.$.autoAjax('put', url, formData, {
                                ok: (res) => {
                                    // if (res.state === 0 && res.data) {
                                    if ( res.data) {
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
                        } else {
                            let url = URL.api + `/active/template.fix/${this.seachData.id}`
                            this.$.autoAjax('put', url, formData, {
                                ok: (res) => {
                                    if ( res.data) {
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
                        }
                    } else {
                        _this.$message.error('请检查表单');
                        return false;
                    }
                });
            },
            //发送方式
            limitChange() {
                if (this.get === '1') {
                    //清空limit_times
                    this.modeData.rule.issue_mode = 'manual';
                }else if(this.get === '2'){
                    this.modeData.rule.issue_mode = 'auto';
                }
                // this.$refs.form.validateField('rule.limit_times');
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
            doSaveFile1(obj1) {
                this.modeData.coverPic1 = obj1.file;
            },
            doSaveFile2(obj2) {
                this.modeData.coverPic2 = obj2.file;
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
                this.$router.replace('/addActiveSet');
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
            this.modeData.arrList1 = [];
            this.modeData.arrList2 = [];
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
