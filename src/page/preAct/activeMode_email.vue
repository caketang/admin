<template>
    <div id="activeMode">
        <!--每日签到-->
        <el-col :span="24">
            <el-col :span="12" class="Layout">
                <h3 class="tCent" v-text="LANG['规则设置'] || '规则设置'"></h3>
                <el-form ref="form" :model="modeData" label-width="100px" class="mt20">
                    <el-form-item label="优惠活动名称">
                        <el-input class="w80" v-model="modeData.name" disabled="true"></el-input>
                    </el-form-item>
                    <el-form-item label="优惠类型">
                        <el-select v-model="modeData.type_id" placeholder="请选择类型" class="w80">
                            <el-option :label=item.label :value=item.value :key=item.index
                                       v-for="(item,index) in type_idList"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="有效时间">
                        <el-col :span="10">
                            <el-date-picker type="date" placeholder="选择开始日期"
                                            v-model="modeData.begin_time"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="1">-</el-col>
                        <el-col :span="10">
                            <el-date-picker type="date" placeholder="选择结束日期"
                                            v-model="modeData.end_time"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="发放奖金" prop="issue_mode" >
                        <el-radio class="radio" v-model="modeData.issue_mode" label="1"><span
                                v-text="LANG['自动发放'] || '自动发放'"></span>
                        </el-radio>
                        <el-radio class="radio" v-model="modeData.issue_mode" label="2"><span
                                v-text="LANG['手动发放'] || '手动发放'"></span>
                        </el-radio>
                    </el-form-item>
                    <el-form-item label="优惠规则">
                        <span v-text="LANG['完成邮箱验证优惠金额'] || '完成邮箱验证优惠金额'"></span>
                        <el-input v-model="modeData.money" class="intW"></el-input>
                        <span v-text="LANG['元'] || '元'"></span>
                    </el-form-item>
                    <el-form-item label="领取限制">
                        <el-radio v-model="modeData.get" label="1">
                            <span v-text="LANG['限定次数'] || '限定次数'"></span>
                            <el-input v-model="modeData.getMath" class="intW"></el-input>
                        </el-radio>
                        <el-radio v-model="modeData.get" label="2"><span v-text="LANG['无限定次数'] || '无限定次数'"></span>
                        </el-radio>
                    </el-form-item>
                    <el-form-item label="有效会员等级">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="modeData.vipType"
                                     @change="handleCheckAllChange">全部
                        </el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="checkedDefut" @change="handleCheckedDefutChange">
                            <el-checkbox v-for="(item,index) in vipList" :label=item.label :key=index
                                         name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="发放时间">
                        <span v-text="LANG['完成邮箱验证后'] || '完成邮箱验证后'"></span>
                        <el-input class="intW" v-model="modeData.daySign"></el-input>
                        <span v-text="LANG['天发放'] || '天发放'"></span>
                    </el-form-item>
                    <el-form-item label="提款要求">
                        <el-radio v-model="modeData.statusWdl" label="1"><span v-text="LANG['倍数'] || '倍数'"></span>
                            <el-input class="intW" v-model="modeData.withdrawalsBs"></el-input>
                        </el-radio>
                        <el-radio v-model="modeData.statusWdl" label="2"><span
                                v-text="LANG['投注流水'] || '投注流水'"></span>
                            <el-input class="intW" v-model="modeData.withdrawalsGd"></el-input>
                        </el-radio>
                        <el-radio v-model="modeData.statusWdl" label="3"><span v-text="LANG['无取款要求'] || '无取款要求'"></span>
                        </el-radio>
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-radio class="radio" v-model="modeData.status" label="1"><span
                                v-text="LANG['启用'] || '启用'"></span>
                        </el-radio>
                        <el-radio class="radio" v-model="modeData.status" label="0"><span
                                v-text="LANG['停用'] || '停用'"></span>
                        </el-radio>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="12" class="Layout">
                <h3 class="tCent" v-text="LANG['内容设置'] || '内容设置'"></h3>
                <el-form ref="form" :model="modeData" label-width="100px" class="mt20">
                    <el-form-item label="优惠活动标题">
                        <el-input class="w80" v-model="modeData.title"></el-input>
                    </el-form-item>
                    <el-form-item label="语言">
                        <el-select v-model="modeData.language_id" placeholder="请选择类型" class="w80" @change="changeLanguage">
                            <el-option :label=item.label :value=item.value v-for="(item,index) in languageList"
                                       :key=index>
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="优惠活动描述">
                        <el-input class="w80" type="textarea" v-model="modeData.description"></el-input>
                    </el-form-item>
                    <el-form-item label="优惠活动图片">
                        <upload :uploadUrl="uploadUrl" @response="doSaveFile" arrList=""></upload>
                    </el-form-item>
                    <el-form-item :label="LANG['优惠规则编辑'] || '优惠规则编辑'">
                        <markdownEdit></markdownEdit>
                    </el-form-item>
                </el-form>
            </el-col>
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
    import markdownEdit from '../../components/markdownEdit.vue'
    import upload from '../../components/upload.vue'
    export default{
        data(){
            return {
                LANG,
                modeData: {
                    name: "",//string #活动名称
                    type_id: "",//int ：活动类型ID
                    title: "",//string #活动标题
                    begin_time: "",//datetime #开始时间
                    end_time: "",//datetime #结束时间
                    issue_mode: "",//string #发放方式
                    day: "",//连续签到天数
                    money: "",//优惠金额
                    get: "",//领取限制方式
                    getMath: "",//领取限制次数
                    vipType: [],//会员列表
                    daySign: "",//发放时间
                    statusWdl: "",//提款要求选择
                    withdrawalsBs: "",//提款倍数
                    withdrawalsGd: "",//提款要求固定输入金额
                    status: '1',//string #状态 enabled 启用,disabled 停用
                    description: "",//string #描述
                    cover: "",//string #封面
                    language_id: "",//int #语言ID
                    language_name: "",//string #语言名称
                    content: "",//string #内容
//                    state: [],//string #集合信息 apply:可申请, auto:自动参与
//                    updated_uid: "",//int #更新者ID
                    fileList2: [],//文件上传
                    //优惠类型下拉选项请求用
//                    type_idList:[],
                    // 排序
                    sort: "",
                    // 打开方式
                    open_mode:"",
                    // 链接
                    link: ""
                },

                //下拉优惠类型列表
                type_idList: [],
                //获取有效会员等级
                vipList: [],
                //默认选中项
                checkedDefut: [],
                isIndeterminate: true,
                checkList: [],
//                checkAll: true,//全选会员等级
                //获取页面传过来的值
                seachData: {},
                languageList: [],
                // 图片上传地址
                uploadUrl: ""
            }
        },
        components: {
            markdownEdit: markdownEdit,
            upload: upload
        },
        methods: {
            init(){
                //获取路由传参
                if (this.$route.query) {
                    let query = this.$route.query;
                    for (let k in query) {
                        this.seachData[k] = query[k];
                    }
                }
                //初始化优惠活动名称
                this.modeData.name = this.seachData.label;
//                获取优惠类型列表
                this.$http.get(URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", URLCONFIG).then((res) => {
                    if (res.data.state == 0 && res.data.data) {
                        let model = res.data.data || [];
                        for (let k in model) {
                            this.type_idList.push({
                                "label": model[k].name,
                                "value": model[k].id.toString()
                            });
                        }
                    }
                });
                //获取会员列表
                let levelUrl = URL.api + ROUTES.GET.user.level.list;
                this.$http.get(levelUrl, URLCONFIG).then((res) => {
                    let model = res.data.data
                    for (let i in model) {
                        this.vipList.push({
                            "label": model[i].name,
                            "value": model[i].id
                        })
                    }
                }).catch(function (err) {
//                    console.log(err)
                });
                let langeUrl = URL.api + ROUTES.GET.langeages;
                this.$http.get(langeUrl, URLCONFIG).then((res) => {
                    let model = res.data.data
                    for (let i in model) {
                        this.languageList.push({
                            "label": model[i].name,
                            "value": model[i].id.toString()
                        })
                    }
                })

            },
            //全选
            handleCheckAllChange(event) {
                let checkList = [];
                for (let v in this.vipList) {
                    checkList[v] = this.vipList[v].label;
                }
                ;
                this.checkedDefut = event.target.checked ? checkList : [];
                this.isIndeterminate = false;
            },
            //单选
            handleCheckedDefutChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.vipList.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.vipList.length;
            },
            //提交表单
            doSubmit(type){
                let formData = {
                    id:"37",
                    name:this.modeData.name,
                    type_id:"9",
                    title:this.modeData.title,
                    begin_time:this.modeData.begin_time,
                    end_time:this.modeData.end_time,
                    description:this.modeData.description,
                    cover:this.modeData.cover,
                    language_id: parseInt(this.modeData.language_id),
                    language_name:this.modeData.language_name,
                    content:this.modeData.content,
                    issue_mode:this.modeData.issue_mode,
                    status:this.modeData.status,
                    sort:this.modeData.sort,
                    open_mode:this.modeData.open_mode,
                    link: this.modeData.link,
                    rule: {
                        id: "37",
                        template_id: "9",
                        template_name: "充值优惠",
                        active_id: "37",
                        rule: {
                            company: {
                                first: [
                                    {
                                        money: 100000,
                                        type: 1,
                                        prize: 10000
                                    },
                                    {
                                        money: 200000,
                                        type: 2,
                                        prize: 10,
                                        upper_limit: 100000
                                    }
                                ],
                                again: [
                                    {
                                        money: 100000,
                                        type: 1,
                                        prize: 5000
                                    },
                                    {
                                        money: 200000,
                                        type: 2,
                                        prize: 8,
                                        upper_limit: 100000
                                    }
                                ]
                            },
                            online: {
                                first: [
                                    {
                                        money: 100000,
                                        type: 1,
                                        prize: 10
                                    },
                                    {
                                        money: 200000,
                                        type: 2,
                                        prize: 10,
                                        upper_limit: 100000
                                    }
                                ],
                                again: [
                                    {
                                        money: 100000,
                                        type: 1,
                                        prize: 10000
                                    },
                                    {
                                        money: 200000,
                                        type: 2,
                                        prize: 10,
                                        upper_limit: 100000
                                    }
                                ]
                            }
                        },
                        luckydraw_condition: null,
                        limit_times: null,
                        withdraw_require: "times",
                        withdraw_require_val: "5",
                        member_level: null,
                        issue_time: "0",
                        issue_cycle: null,
                        issue_mode: "auto",
                        games: ""
                    }
                };
                let url = URL.api + `/active/template.fix/${formData.id}`
                if (type == 'add') {
                    this.$http.put(url,formData,URLCONFIG)
                        .then(data =>{
//                            console.log(data)
                        })
                } else {

                    this.$http.put(url,URLCONFIG)
                        .then(data =>{
//                            console.log(data)
                        })
                }
            },
            goBack(type){
                type == "add" ? this.$router.push({path: 'addActiveSet'}) : this.$router.push({path: 'activeSet'});
            },
            //
            doSaveFile(obj){
                this.modeData.cover = obj[0];
            },
            changeLanguage(value){
                let languageList = this.languageList;
            }
        },
        computed: {},
        mounted(){
        },
        created(){
            this.init();
        },
        watch: {
            '$route' (to, from) {
                //获取路由传参
                if (this.$route.query) {
                    let query = this.$route.query;
                    for (let k in query) {
                        this.seachData[k] = query[k];
                    }
                }
                //初始化优惠活动名称
                this.modeData.name = this.seachData.label;
            }
        }
    };
</script>
<style scopend>
    #activeMode .Layout {
        padding: 10px 5%;
    }

    #activeMode .w80 {
        width: 80%;
    }
    #activeMode .el-radio+.el-radio{ margin-left:0;}
    #activeMode .el-checkbox+.el-checkbox{ margin-left:0; margin-right:15px;}
</style>