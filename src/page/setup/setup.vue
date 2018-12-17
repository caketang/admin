<template>
    <div id="setup">
        <el-row style="background:#00bca4;color:#ffffff;padding:10px;" class="tCent">
            <h1>{{LANG['厅主站点配置'] || '厅主站点配置'}}</h1>
        </el-row>
        <el-row type="flex" justify="center" class="steps" style="padding-top: 100px;">
            <el-col :span="8">
                <step :active="num"></step>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center" class="steps">
            <el-col :span="10">
                <!--货币FORM-->
                <el-form ref="moneyForm" :model="moneyForm"  :rules="moneyRules" label-width="150px" v-show="num == 1">
                    <el-form-item :label="LANG['选择货币'] || '选择货币'"  prop="money">
                        <el-select v-model="moneyForm.money">
                            <el-option  v-for="(option,index) in moneylist" :key="index" :label="option.label" :value="option.value"> </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <!--邮箱FORM-->
                <el-form ref="emailForm" :model="emailForm"  :rules="emailRules" label-width="150px" v-show="num == 2">
                    <el-form-item :label="LANG['SMTP服务器'] || 'SMTP服务器'" prop="mailhost">
                        <el-select v-model="emailForm.mailhost" placeholder="请选择">
                            <el-option v-for="(item, index) in mailhostArr" :key="index":label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="LANG['邮箱地址'] || '邮箱地址'"   prop="mailaddress">
                        <el-input v-model="emailForm.mailaddress" type="email" ></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['邮箱密码'] || '邮箱密码'"   prop="mailpass">
                        <el-input v-model="emailForm.mailpass" type="password"></el-input>
                    </el-form-item>
                </el-form>
                <!--后台FORM-->
                <el-form ref="adminForm" :model="adminForm"  :rules="adminRules" label-width="150px" v-show="num == 3">
                    <el-form-item :label="LANG['站点名称'] || '站点名称'"   prop="name">
                        <el-input v-model="adminForm.name"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['站点标题'] || '站点标题'"   prop="title">
                        <el-input v-model="adminForm.title"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['站点底部信息'] || '站点底部信息'" prop="bottom">
                        <el-input v-model="adminForm.bottom"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['厅主域名'] || '厅主域名'"   prop="domain">
                        <el-input v-model="adminForm.domain" @change="changewww('admin')" type="textarea"></el-input>
                    </el-form-item>
                    <el-form-item v-if="adminList.length > 0">
                        <el-collapse>
                            <el-collapse-item v-for="(item,key) in adminList" key="key" :title="item.url":name="(parseInt(key)+1)">
                                <!--标题-->
                                <el-col :span="24" class="bmBorder">
                                    <div class="grid-content tCent">
                                        <ul>
                                            <li class="w20 fl bg-purple">{{LANG['用途'] || '用途'}}</li>
                                            <li class="w40 fl bg-purple">{{LANG['域名'] || '域名'}}</li>
                                            <li class="w40 fl bg-purple">{{LANG['指向域名'] || '指向域名'}}</li>
                                        </ul>
                                    </div>
                                </el-col>
                                <!--推广域名-->
                                <el-col :span="24" class="bmBorder">
                                    <div class="grid-content tCent">
                                        <ul>
                                            <li class="w20 fl bg-purple-light">{{item.adminlabel}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.adminUrl}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.adminlocalhost}}</li>
                                        </ul>
                                    </div>
                                </el-col>
                                <el-col :span="24" class="bmBorder">
                                    <div class="grid-content tCent">
                                        <ul>
                                            <li class="w20 fl bg-purple-light">{{item.cpilabel}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.cpiUrl}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.cpilocalhost}}</li>
                                        </ul>
                                    </div>
                                </el-col>
                                <el-col :span="24" class="bmBorder">
                                    <div class="grid-content tCent">
                                        <ul>
                                            <li class="w20 fl bg-purple-light">{{item.rpiLabel}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.rpi}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.rpilocalhost}}</li>
                                        </ul>
                                    </div>
                                </el-col>
                            </el-collapse-item>
                        </el-collapse>
                    </el-form-item>
                    <!--<el-form-item :label="LANG['站点LOGO'] || '站点LOGO'" >-->
                        <!--<upload :uploadUrl="url" @response="doSaveFile" :folder="'web'"></upload>-->
                    <!--</el-form-item>-->
                    <el-form-item label="选择语言"  prop="lang" >
                        <el-select v-model="adminForm.lang">
                            <el-option  v-for="(item,index) in langugaeslist" :key="index" :label="item.label" :value="item.value"> </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="LANG['是否SSL加密'] || '是否SSL加密'"   prop="is_ssl">
                        <el-select v-model="adminForm.is_ssl">
                            <el-option   label="启用" value="1"> </el-option>
                            <el-option   label="停用" value="0"> </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <!--前台FORM-->
                <el-form ref="wwwForm" :model="wwwForm"  :rules="wwwRules" label-width="150px" v-show="num == 4">
                    <el-form-item :label="LANG['站点名称'] || '站点名称'"    prop="name">
                        <el-input v-model="wwwForm.name"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['站点标题'] || '站点标题'"   prop="title">
                        <el-input v-model="wwwForm.title"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG['站点底部信息'] || '站点底部信息'" prop="bottom">
                        <el-input v-model="wwwForm.bottom"></el-input>
                    </el-form-item>
                    <el-form-item label="选择语言"  prop="lang">
                        <el-select v-model="wwwForm.lang">
                            <el-option  v-for="(item,index) in langugaeslist" :key="index" :label="item.label" :value="item.value"> </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="LANG['前台主域名'] || '前台主域名'" prop="domain">
                        <el-input v-model="wwwForm.domain" type="textarea" placeholder="请输入主域名：example.com，实际使用域名将自动添加前缀,如:www.example.com" @change="changewww('www')"></el-input>
                    </el-form-item>
                    <el-form-item v-if="wwwList.length > 0">
                        <el-collapse v-model="activeName">
                            <el-collapse-item v-for="(item,key) in wwwList" key="key" :title="item.url" :name="(parseInt(key)+1)">
                                <!--标题-->
                                <el-col :span="24" class="bmBorder">
                                    <div class="grid-content tCent">
                                        <ul>
                                            <li class="w20 fl bg-purple">{{LANG['用途'] || '用途'}}</li>
                                            <li class="w40 fl bg-purple">{{LANG['域名'] || '域名'}}</li>
                                            <li class="w40 fl bg-purple">{{LANG['指向域名'] || '指向域名'}}</li>
                                        </ul>
                                    </div>
                                </el-col>
                                <!--推广域名-->
                                <el-col :span="24" class="bmBorder">
                                    <div class="grid-content tCent">
                                        <ul>
                                            <li class="w20 fl bg-purple-light">{{item.master_wwwlabel}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.master_wwwUrl}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.master_wwwlocalhost}}</li>
                                        </ul>
                                    </div>
                                </el-col>
                                <el-col :span="24" class="bmBorder">
                                    <div class="grid-content tCent">
                                        <ul>
                                            <li class="w20 fl bg-purple-light">{{item.wwwlabel}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.wwwUrl}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.wwwlocalhost}}</li>
                                        </ul>
                                    </div>
                                </el-col>
                                <el-col :span="24" class="bmBorder">
                                    <div class="grid-content tCent">
                                        <ul>
                                            <li class="w20 fl bg-purple-light">{{item.mlabel}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.mUrl}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.h5localhost}}</li>
                                        </ul>
                                    </div>
                                </el-col>
                                <el-col :span="24" class="bmBorder">
                                    <div class="grid-content tCent">
                                        <ul>
                                            <li class="w20 fl bg-purple-light">{{item.agentLabel}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.agentUrl}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.agentlocalhost}}</li>
                                        </ul>
                                    </div>
                                </el-col>
                                <el-col :span="24" class="bmBorder">
                                    <div class="grid-content tCent">
                                        <ul>
                                            <li class="w20 fl bg-purple-light">{{item.apilabel}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.apiUrl}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.apilocalhost}}</li>
                                        </ul>
                                    </div>
                                </el-col>
                                <el-col :span="24" class="bmBorder">
                                    <div class="grid-content tCent">
                                        <ul>
                                            <li class="w20 fl bg-purple-light">{{item.resLabel}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.res}}</li>
                                            <li class="w40 fl bg-purple-light">{{item.reslocalhost}}</li>
                                        </ul>
                                    </div>
                                </el-col>
                            </el-collapse-item>
                        </el-collapse>
                    </el-form-item>
                    <el-form-item :label="LANG['PC模板'] || 'PC模板'" prop="www">
                        <el-button @click="getTemplate('pc')">{{LANG['模板选择'] || '模板选择'}}</el-button>
                        <img :src="pcSrc" alt="" height="40px" style="margin-left: 10px; vertical-align: top;" v-if="pcSrc">
                        <!--<el-select v-model="wwwForm.www_tname">-->
                        <!--<el-option  v-for="(item,index) in pcTmpList" :key="index" :label="item.label" :value="item.label">-->
                        <!--</el-option>-->
                        <!--</el-select>-->
                    </el-form-item>
                    <el-form-item :label="LANG['H5模板'] || 'H5模板'" prop="m_tname">
                        <el-button @click="getTemplate('h5')">{{LANG['模板选择'] || '模板选择'}}</el-button>
                        <img :src="h5Src" alt="" height="40px" style="margin-left: 10px; vertical-align: top;" v-if="h5Src">
                        <!--<el-select v-model="wwwForm.m_tname">-->
                        <!--<el-option  v-for="(item,index) in h5TmpList" :key="index" :label="item.label" :value="item.label">-->
                        <!--</el-option>-->
                        <!--</el-select>-->
                    </el-form-item>
                    <!--<el-form-item :label="LANG['站点LOGO'] || '站点LOGO'" prop="logo">-->
                        <!--<upload :uploadUrl="url" @response="doSaveFile" :folder="'web'"></upload>-->
                    <!--</el-form-item>-->
                    <el-form-item :label="LANG['是否SSL加密'] || '是否SSL加密'"   prop="is_ssl">
                        <el-select v-model="wwwForm.is_ssl">
                            <el-option   :label="LANG['启用'] || '启用'" value="1"> </el-option>
                            <el-option   :label="LANG['停用'] || '停用'" value="0"> </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <!--前台FORM-->
                <el-form ref="linkForm" :model="linkForm"  :rules="linkRules" label-width="150px" v-show="num == 5">
                    <el-form-item :label="LANG['代理网址'] || '代理网址'"    prop="domain">
                        <el-input v-model="linkForm.domain"></el-input>
                    </el-form-item>
                </el-form>
                <div v-if="num == 6" class="tCent">
                    <el-button @click="openUrl('pc')">{{LANG['PC站点'] || 'PC站点'}}</el-button>
                    <el-button @click="openUrl('h5')">{{LANG['H5站点'] || 'H5站点'}}</el-button>
                    <el-button @click="openUrl('agent')">{{LANG['代理站点'] || '代理站点'}}</el-button>
                    <el-button @click="openUrl('admin')" class="mb20">{{LANG['厅主后台'] || '厅主后台'}}</el-button>
                    <p >PC站点：<a target="_black" :href="pcLink">{{pcLink}}</a></p>
                    <p>H5站点：<a target="_black" :href="h5Link">{{h5Link}}</a></p>
                    <p>代理站点：<a target="_black" :href="agentLink">{{agentLink}}</a></p>
                    <p>厅主首页：<a target="_black" :href="adminLink">{{adminLink}}</a></p>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-dialog title="发送邮箱地址" :visible.sync="maildialogVisible">
                <el-form ref="addressform" :model="addressform"  :rules="addressRules" label-width="150px">
                    <el-form-item label="邮箱地址" label-width="150px" prop="mailAddress">
                        <el-input v-model="addressform.mailAddress" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="maildialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="doTest()" :loading="loadingThree">确 定</el-button>
                </div>
            </el-dialog>
        </el-row>
        <el-row type="flex"  justify="center" class="operation">
            <el-col :span="16" class="butgroup tCent">
                <el-button type="primary" @click="prev" v-show="num > 1 && num < 5" >上一步</el-button>
                <el-button type="primary" @click="doNext" v-show="num ==2 && showMailNext" :loading="loading">下一步</el-button>
                <el-button type="primary" @click="doNext" v-show="num !==2 && num < 5" :loading="loading">下一步</el-button>
                <el-button type="primary" @click="showMailForm" v-show="num === 2 && !showMailNext" :loading="loadingTwo">测试邮箱</el-button>
                <el-button type="primary" v-if="num === 5" @click="save">开启站点</el-button>
                <el-button type="primary" @click="doNextmail"  :loading="loadingFour" v-show="num === 2 && !showMailNext">跳过邮箱</el-button>
            </el-col>
            <el-col>
                <el-dialog
                        title="模板列表"
                        :visible.sync="dialogVisible"
                        size="large">
                    <H5Model :model="templist" :type="tempType" @get-template="doGetTemplate"></H5Model>
                    <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
                </el-dialog>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import step from './steps.vue'
    import H5Model from '../../components/mobile.vue'
    import upload from '../../components/upload.vue'
    require('../../../static/themeMode/green.css')
    require('../../../static/css/app.css')
    export default{
        data(){
            return {
                mailhostArr:ARRAYS.mailConfig,
                LANG,
                num: 1,
                isnext: true,
                langugaeslist: [],
                moneylist: [],
                pcTmpList: [],
                h5TmpList: [],
                templist: [],
                // 货币设置
                moneyForm:{
                    money: ""
                },
                moneyRules:{
                    money: [{required: true, message: LANG['请选择货币'] || '请选择货币', trigger: 'change'}],
                },
                // 邮件设置
                emailForm:{
                    mailhost: "",
                    mailpass: "",
                    mailaddress: "",
                },
                emailRules:{
                    mailhost: [{required: true, message: LANG['请设置SMTP服务器地址'] || '请设置SMTP服务器地址', trigger: 'blur'}],
                    mailpass: [{required: true, message: LANG['请设置密码'] || '请设置密码', trigger: 'blur'}],
                    mailaddress: [{required: true, message: LANG['请设置邮箱地址'] || '请设置邮箱地址', trigger: 'blur'},
                        {type: 'email', message: (LANG['请输入正确的邮箱地址'] || '请输入正确的邮箱地址'), trigger: 'blur,change'}],

                },
                // 后台站点
                adminList:[],
                adminForm:{
                    name: "",
                    title: "",
                    bottom: "",
                    domain: "",
                    is_ssl: "",
                    lang: "",
                    logo: ""
                },
                adminRules:{
                    name: [{required: true, message: LANG['请设置厅主站点名称'] || '请设置厅主站点名称', trigger: 'blur'}],
                    title: [{required: true, message: LANG['请设置厅主台头名称'] || '请设置厅主台头名称', trigger: 'blur'}],
                    domain: [{required: true, message: LANG['请设置厅主后台域名'] || '请设置厅主后台域名', trigger: 'blur'},
                            {validator: this.validatorUrls, trigger: 'change'},
                            {validator: this.validatorwwwTwo, trigger: 'blur'}],
                    bottom: [{required: true, message: LANG['请设置厅主底部'] || '请设置厅主底部', trigger: 'blur'}],
                    lang: [{required: true, message: LANG['请设置厅主后台语言'] || '请设置厅主后台语言', trigger: 'blur'}],
                    is_ssl: [{required: true, message: LANG['请设置SSL'] || '请设置SSL', trigger: 'change'}]
                },
                // 前台站点
                wwwList:[],
                wwwForm:{
                    name: "",
                    title: "",
                    bottom: "",
                    domain: "",
                    www_tid: "",
                    www_tname: "",
                    m_tid: "",
                    m_tname: "",
                    lang: "",
                    logo: "",
                    is_ssl: ""
                },
                wwwRules:{
                    name: [{required: true, message: LANG['请设置站点名称'] || '请设置站点名称', trigger: 'blur'}],
                    title: [{required: true, message: LANG['请设置站点标题'] || '请设置站点标题', trigger: 'blur'}],
                    domain: [{required: true, message: LANG['请设置PC站点域名'] || '请设置PC站点域名', trigger: 'blur'},
                            {validator: this.validatorUrls, trigger: 'change'}],
                    bottom: [{required: true, message: LANG['请设置厅主底部'] || '请设置厅主底部', trigger: 'blur'}],
                    m_tname: [{required: true, message: LANG['请设置H5站点模板'] || '请设置H5站点模板', trigger: 'blur'}],
                    www_tname: [{required: true, message: LANG['请设置PC站点模板'] || '请设置PC站点模板', trigger: 'blur'}],
                    lang: [{required: true, message: LANG['请设置站点语言'] || '请设置站点语言', trigger: 'blur'}],
                    is_ssl: [{required: true, message: LANG['请设置站点语言'] || '请设置站点语言', trigger: 'blur'}]
                },
                // 按钮状态
                loading: false,
                loadingTwo: false,
                loadingThree: false,
                loadingFour: false,
                showMailNext: false,
                // 邮箱测试弹窗
                maildialogVisible: false,
                addressform:{
                    mailAddress: ""
                },
                addressRules:{
                    mailAddress: [{required: true, message: LANG['请输入发送的邮箱地址'] || '请输入发送的邮箱地址', trigger: 'blur'}]
                },
                url: URL.img,
                linkForm:{
                    domain:''
                },
                linkRules:{
                    domain:[{required: true, message: LANG['请输入推广链接'] || '请输入推广链接', trigger: 'blur'},
                        {validator: this.validatorUrlFull, trigger: 'blur'}]
                },
                // 模板中转变量 用于提交赋值
                tempType: "",
                dialogVisible:false,
                pcSrc: "",
                h5Src: "",
                // 生成系统页面
                pcLink: "",
                h5Link: "",
                agentLink: "",
                adminLink: "",
                activeName: ''
            };
        },
        components:{
            step: step,
            upload: upload,
            H5Model: H5Model
        },
        computed:{},
        watch:{},
        methods:{
            init(){
                let _this = this;
                this.showMailNext = false;
                if(typeof(settings) === 'undefined' || !settings.init){
                    this.$router.push({'path': '/index'});
                }
//               this.num = 4;
                if (sessionStorage.token && sessionStorage.userName) {
                    global.URLCONFIG = {
                        emulateJson: true,
                        headers: {
                            "Content-Type": "application/json",
//                            "Authorization": "Bearer " + sessionStorage.token
                            "Authorization": sessionStorage.token
                        },
                        validateStatus: function (status) {
                            return status;
                        }
                    };
                } else{
                    this.$message(LANG['登录超时，请重新登录！'] || '登录超时，请重新登录！');
                    this.$router.replace('/login');
                    return;
                }
                // 取语言列表

				this.$.autoAjax('get',URL.api + ROUTES.GET.langeages, '', {
					ok: (res) => {
						if(res.state == 0 && res.data) {
							let obj = res.data || [];
							for(let i in obj){
								_this.langugaeslist.push({"label":obj[i].name, "value":obj[i].code});
							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.langeages, URLCONFIG).then((res) => {
                //     if(res.data.state == 0 && res.data.data) {
                //         let obj = res.data.data || [];
                //         for(let i in obj){
                //             _this.langugaeslist.push({"label":obj[i].name, "value":obj[i].code});
                //         }
                //     }
                // });
                // 取货币列表

				this.$.autoAjax('get',URL.api + ROUTES.GET.system.currency, '', {
					ok: (res) => {
						if(res.state == 0 && res.data) {
							let obj = res.data || [];
							_this.moneyForm.money = res.data[0].id.toString() || "";
							for(let i in obj){
								_this.moneylist.push({"label":obj[i].ctype, "value":obj[i].id, "cytype": obj[i].cytype});
							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.system.currency, URLCONFIG).then((res) => {
                //     if(res.data.state == 0 && res.data.data) {
                //         let obj = res.data.data || [];
                //         _this.moneyForm.money = res.data.data[0].id.toString() || "";
                //         for(let i in obj){
                //             _this.moneylist.push({"label":obj[i].ctype, "value":obj[i].id, "cytype": obj[i].cytype});
                //         }
                //     }
                // });
                // 取模板列表
                let styleUrl = URL.api + "/system/website/style";

				this.$.autoAjax('get',styleUrl, '', {
					ok: (res) => {
						let model_h5 = res.data.h5, model_pc = res.data.pc;
						_this.pcTmpList.splice(0,_this.pcTmpList.length);
						_this.h5TmpList.splice(0,_this.h5TmpList.length);
						for (let i in model_h5) {
							_this.h5TmpList.push({
								"id": model_h5[i].id,
								"key": model_h5[i].key,
								"checked": model_h5[i].checked
							})
						}
						for (let i in model_pc) {
							_this.pcTmpList.push({
								"id": model_pc[i].id,
								"key": model_pc[i].key,
								"checked": model_pc[i].checked
							})
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(styleUrl,URLCONFIG).then((res) => {
                //     let model_h5 = res.data.data.h5, model_pc = res.data.data.pc;
                //     _this.pcTmpList.splice(0,_this.pcTmpList.length);
                //     _this.h5TmpList.splice(0,_this.h5TmpList.length);
                //     for (let i in model_h5) {
                //         _this.h5TmpList.push({
                //             "id": model_h5[i].id,
                //             "key": model_h5[i].key,
                //             "checked": model_h5[i].checked
                //         })
                //     }
                //     for (let i in model_pc) {
                //         _this.pcTmpList.push({
                //             "id": model_pc[i].id,
                //             "key": model_pc[i].key,
                //             "checked": model_pc[i].checked
                //         })
                //     }
                // })
            },
            doNext(){
                let nowNum = this.num;
                switch (nowNum){
                    case 1:
                        this.saveMoney();
                        break;
                    case 2:
                        this.saveEmail();
                        break;
                    case 3:
                        this.saveAdmin();
                        break;
                    case 4:
                        this.saveWWW();
                        break;
                }
            },
            doNextmail(){
                this.num ++ ;
            },
            // 测试邮箱
            showMailForm(){
                this.$refs.emailForm.validate((valid) => {
                    if (valid) {
                        this.maildialogVisible = true;
                    }
                })
            },
            // 重置FORM
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            doTest(){
                let _this = this;
                this.$refs.addressform.validate((valid)=>{
                    if(valid){
                        _this.loadingThree = true;
                        let obj= null;
                        for(let i=0; i<ARRAYS.mailConfig.length; i++){
                            if(ARRAYS.mailConfig[i].value === this.emailForm.mailhost){
                                obj = {
                                    mailhost: ARRAYS.mailConfig[i].value,
                                    mailport: ARRAYS.mailConfig[i].port,
                                    mailname: this.emailForm.mailaddress.split('@')[0],
                                    mailpass:this.emailForm.mailpass,
                                    mailaddress: this.emailForm.mailaddress,
                                    is_ssl: ARRAYS.mailConfig[i].is_ssl
                                }
                            }
                        }
                        obj.receivers= [{receive:_this.addressform.mailAddress,alias:'test'}];

						this.$.autoAjax('post',URL.api + ROUTES.POST.system.email.test, obj, {
							ok: (res) => {
								if(res.state === 0 && res.data){
									_this.$message.success(LANG['邮箱测试成功，请点击下一步继续设置！'] || '邮箱测试成功，请点击下一步继续设置！');
									_this.loadingThree = false;
									_this.maildialogVisible = false;
									_this.showMailNext = true;
								}else if(res.state === 2){
									_this.$message.error(LANG['邮箱配置错误，请修改后重试！'] || '邮箱配置错误，请修改后重试！');
									_this.maildialogVisible = false;
									_this.loadingThree = false;
								}
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // _this.$http.post(URL.api + ROUTES.POST.system.email.test,JSON.stringify(obj),URLCONFIG).then((res)=>{
                        //     if(res.data.state === 0 && res.data.data){
                        //         _this.$message.success(LANG['邮箱测试成功，请点击下一步继续设置！'] || '邮箱测试成功，请点击下一步继续设置！');
                        //         _this.loadingThree = false;
                        //         _this.maildialogVisible = false;
                        //         _this.showMailNext = true;
                        //     }else if(res.data.state === 2){
                        //         _this.$message.error(LANG['邮箱配置错误，请修改后重试！'] || '邮箱配置错误，请修改后重试！');
                        //         _this.maildialogVisible = false;
                        //         _this.loadingThree = false;
                        //     }
                        // })
                        .catch((e)=>{
                            _this.loadingThree = false;
//                            console.log(e);
                        })
                    }
                });
            },
            // 保存货币
            saveMoney(){
                let _this = this;
                let num = this.moneyForm.money;
                this.$refs.moneyForm.validate((valid) => {
                    if (valid) {
                        _this.loading = true;

						this.$.autoAjax('patch',URL.api + ROUTES.PATCH.system.currency + "/"+ parseInt(num),{"state":1},{
							ok: (res) => {
								if(res.state === 0 && res.data){
									_this.$message.success(LANG['货币配置成功，请继续设置下面内容！'] || '货币配置成功，请继续设置下面内容！');
									if(_this.num < 5){
										++_this.num;
									}
									_this.loading = false;
									_this.resetForm('addressform');
								}else{
									_this.$message.error(LANG['货币配置失败，请稍后重试！'] || '货币配置失败，请稍后重试！');
									_this.loading = false;
								}
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // _this.$http.patch(URL.api + ROUTES.PATCH.system.currency + "/"+ parseInt(num),{"state":1},URLCONFIG).then((res)=>{
                        //     if(res.data.state === 0 && res.data.data){
                        //         _this.$message.success(LANG['货币配置成功，请继续设置下面内容！'] || '货币配置成功，请继续设置下面内容！');
                        //         if(_this.num < 5){
                        //             ++_this.num;
                        //         }
                        //         _this.loading = false;
                        //         _this.resetForm('addressform');
                        //     }else{
                        //         _this.$message.error(LANG['货币配置失败，请稍后重试！'] || '货币配置失败，请稍后重试！');
                        //         _this.loading = false;
                        //     }
                        // })
                        .catch((e)=>{
//                            console.log(e);
                        })
                    }
                })
            },
            // 保存邮箱
            saveEmail(){
                let _this = this;
                _this.loading = true;

				this.$.autoAjax('put',URL.api + ROUTES.PUT.system.email.settings,_this.emailForm, {
					ok: (res) => {
						if(res.state === 0 && res.data){
							_this.$message.success(LANG['邮箱配置成功，请继续设置下面内容！'] || '邮箱配置成功，请继续设置下面内容！');
							if(_this.num < 5){
								++_this.num;
							}
							_this.loading = false;
						}else{
							_this.$message.error(LANG['邮箱配置失败，请稍后重试！'] || '邮箱配置失败，请稍后重试！');
							_this.loading = false;
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // _this.$http.put(URL.api + ROUTES.PUT.system.email.settings,JSON.stringify(_this.emailForm),URLCONFIG).then((res)=>{
                //     if(res.data.state === 0 && res.data.data){
                //         _this.$message.success(LANG['邮箱配置成功，请继续设置下面内容！'] || '邮箱配置成功，请继续设置下面内容！');
                //         if(_this.num < 5){
                //             ++_this.num;
                //         }
                //         _this.loading = false;
                //     }else{
                //         _this.$message.error(LANG['邮箱配置失败，请稍后重试！'] || '邮箱配置失败，请稍后重试！');
                //         _this.loading = false;
                //     }
                // })
                .catch((e)=>{
//                    console.log(e);
                })
            },
            // 保存 ADMIN
            saveAdmin(){
                let _this = this;
                this.$refs.adminForm.validate((valid) => {
                    if (valid) {
                        _this.loading = true;
                        let obj = {
                            "type":1,
                            "build":1,
                            "remarks":""
                        };
                        for(let k in _this.adminForm){
                            if(k === 'domain'){
                                obj[k] = _this.adminForm[k].split(/[\n]/g);
                            }else{
                                obj[k] = _this.adminForm[k];
                            }
                        }
                        obj.remarks = '';

						this.$.autoAjax('put',URL.api + ROUTES.PUT.system.domain,obj, {
							ok: (res) => {
								if(res.state === 0 && res.data){
									_this.$message.success(LANG['厅主站点配置成功，请继续设置下面内容！'] || '厅主站点配置成功，请继续设置下面内容！');
									if(_this.num < 5){
										++_this.num;
									}
									_this.loading = false;
								}else if(res.state === 4005){
									_this.$message.error(LANG['厅主站点验证失败，请修改后重试！'] || '厅主站点验证失败，请修改后重试！');
									_this.showUrlError(res.data);
									_this.loading = false;
								}else{
									_this.$message.error(LANG['厅主站点配置失败，请稍后重试！'] || '厅主站点配置失败，请稍后重试！');
								}
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // _this.$http.put(URL.api + ROUTES.PUT.system.domain,JSON.stringify(obj),URLCONFIG).then((res)=>{
                        //     if(res.data.state === 0 && res.data.data){
                        //         _this.$message.success(LANG['厅主站点配置成功，请继续设置下面内容！'] || '厅主站点配置成功，请继续设置下面内容！');
                        //         if(_this.num < 5){
                        //             ++_this.num;
                        //         }
                        //         _this.loading = false;
                        //     }else if(res.data.state === 4005){
                        //         _this.$message.error(LANG['厅主站点验证失败，请修改后重试！'] || '厅主站点验证失败，请修改后重试！');
                        //         _this.showUrlError(res.data.data);
                        //         _this.loading = false;
                        //     }else{
                        //         _this.$message.error(LANG['厅主站点配置失败，请稍后重试！'] || '厅主站点配置失败，请稍后重试！');
                        //     }
                        // })
                        .catch((e)=>{
                            _this.loading = false;
//                            console.log(e);
                        })
                    }else{
                        _this.$message.error(LANG['验证未通过，请查看！'] || '验证未通过，请查看！');
                    }
                })
            },
            // 保存主域名
            saveWWW(){
                let _this = this;
                this.$refs.wwwForm.validate((valid) => {
                    if (valid) {
                        _this.loading = true;
                        let obj = {
                            "type":2,
                            "build":1,
                            "remarks":""
                        };
                        for(let k in _this.wwwForm){
                            if(k === 'domain'){
                                obj[k] = _this.wwwForm[k].split(/[\n]/g);
                            }else{
                                obj[k] = _this.wwwForm[k];
                            }
                        }
                        for(let k in _this.pcTmpList){
                            if(_this.pcTmpList[k].label === obj.www_tname){
                                obj.www_tid = _this.pcTmpList[k].value;
                            }
                        }
                        for(let k in _this.h5TmpList){
                            if(_this.h5TmpList[k].label === obj.m_tname){
                                obj.m_tid = _this.h5TmpList[k].value;
                            }
                        }

						this.$.autoAjax('put',URL.api + ROUTES.PUT.system.domain,obj, {
							ok: (res) => {
								if(res.state === 0 && res.data){
									_this.$message.success(LANG['站点配置成功，请继续设置下面内容！'] || '站点配置成功，请继续设置下面内容！');
									if(_this.num < 5){
										++_this.num;
									}
									_this.loading = false;
									this.getLink();
								}else if(res.state === 4005){
									_this.$message.error(LANG['厅主站点验证失败，请修改后重试！'] || '厅主站点验证失败，请修改后重试！');
									_this.showUrlError(res.data);
									_this.loading = false;
								}else{
									_this.$message.error(LANG['站点配置失败，请稍后重试！'] || '站点配置失败，请稍后重试！');
									_this.loading = false;
								}
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // _this.$http.put(URL.api + ROUTES.PUT.system.domain,JSON.stringify(obj),URLCONFIG).then((res)=>{
                        //     if(res.data.state === 0 && res.data.data){
                        //         _this.$message.success(LANG['站点配置成功，请继续设置下面内容！'] || '站点配置成功，请继续设置下面内容！');
                        //         if(_this.num < 5){
                        //             ++_this.num;
                        //         }
                        //         _this.loading = false;
                        //         this.getLink();
                        //     }else if(res.data.state === 4005){
                        //         _this.$message.error(LANG['厅主站点验证失败，请修改后重试！'] || '厅主站点验证失败，请修改后重试！');
                        //         _this.showUrlError(res.data.data);
                        //         _this.loading = false;
                        //     }else{
                        //         _this.$message.error(LANG['站点配置失败，请稍后重试！'] || '站点配置失败，请稍后重试！');
                        //         _this.loading = false;
                        //     }
                        // })
                        .catch((e)=>{
                            _this.loading = false;
//                            console.log(e);
                        })
                    }else{
                        _this.$message.error(LANG['验证未通过，请查看！'] || '验证未通过，请查看！');
                    }
                })
            },
            prev(){
                if(this.num > 1){
                    --this.num;
                }
            },
            save(){
                let _this = this;
                this.$refs.linkForm.validate((valid) => {
                    if (valid) {
                        _this.loading = true;
                        let obj = {};
                        obj.domain = _this.linkForm.domain;
                        obj.comment = "备注";

						this.$.autoAjax('put',URL.api + ROUTES.PUT.commission.link,obj, {
							ok: (res) => {
								if(res.state === 0 && res.data){
									_this.$message.success(LANG['推广链接配置成功，点击开启站点完成配置！'] || '推广链接配置成功，点击开启站点完成配置！');
									_this.loading = false;
									_this.clearUrl();
								}else{
									_this.$message.error(LANG['站点配置失败，请稍后重试！'] || '站点配置失败，请稍后重试！');
									_this.loading = false;
								}
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // _this.$http.put(URL.api + ROUTES.PUT.commission.link,JSON.stringify(obj),URLCONFIG).then((res)=>{
                        //     if(res.data.state === 0 && res.data.data){
                        //         _this.$message.success(LANG['推广链接配置成功，点击开启站点完成配置！'] || '推广链接配置成功，点击开启站点完成配置！');
                        //         _this.loading = false;
                        //         _this.clearUrl();
                        //     }else{
                        //         _this.$message.error(LANG['站点配置失败，请稍后重试！'] || '站点配置失败，请稍后重试！');
                        //         _this.loading = false;
                        //     }
                        // })
                        .catch((e)=>{
                            _this.loading = false;
//                            console.log(e);
                        })
                    }
                })
            },
            // 删除临时域名
            clearUrl(){
                let _this = this;

				this.$.autoAjax('post',URL.api + '/system/domain.clean',{}, {
					ok: (res) => {
						if(res.state === 0 && res.data){
							if(_this.num < 6){
								++_this.num;
							}
							_this.$message.success(LANG['域名清除成功，请按配置的文件访问！'] || '域名清除成功，请按配置的文件访问！');
						}else{
							if(_this.num < 6){
								++_this.num;
							}
							_this.clearUrl();
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.post(URL.api + '/system/domain.clean',{},URLCONFIG).then((res)=>{
                //     if(res.data.state === 0 && res.data.data){
                //         if(_this.num < 6){
                //             ++_this.num;
                //         }
                //         _this.$message.success(LANG['域名清除成功，请按配置的文件访问！'] || '域名清除成功，请按配置的文件访问！');
                //     }else{
                //         if(_this.num < 6){
                //             ++_this.num;
                //         }
                //         _this.clearUrl();
                //     }
                // });
            },
            //URL验证
            validatorUrl(rule, value, callback){
                if (!/^[\w\-]+(\.[\w\-]+)+$/.test(value)) {
                    callback(new Error(LANG['请输入合法的域名，不带HTTP'] || '请输入合法的域名，不带HTTP'));
                }else {
                    callback()
                }
            },
            validatorUrlFull(rule, value, callback){
                if (!/^http(s)?:\/\/[\w\-]+(\.[\w\-]+)+$/.test(value)) {
                    callback(new Error(LANG['请输入合法的域名，需要带HTTP'] || '请输入合法的域名，需要带HTTP'));
                }
                else {
                    callback()
                }
            },
            //验证后台域名为两个
            validatorwwwTwo(rule, value, callback){
                let list = value.split(/[\n]/g);
                if (list.length>2) {
                    callback(new Error(LANG['域名最多只能两个'] || '域名最多只能两个'));
                }else {
                    callback()
                }
            },
            // 图片上传相关
            doSaveFile(obj){
                let url = ''
                obj.url.forEach((item)=>{
                    url+=item
                })
                return url;
            },
            // 跳转厅主首页
            goIndex(){
                this.$router.push({path:'/index'});
            },
            // 动态展示域名
            changewww(type){
                let str = type === 'admin' ? this.adminForm.domain : this.wwwForm.domain;
                this.adminList.splice(0,this.adminList.length);
                this.wwwList.splice(0,this.wwwList.length);
                if(type === 'admin'){
                    let arr = this.adminList
                    if(str){
                        let list = str.split(/[\n]/g);
                        for(let k = 0 ; k < list.length; k++ ){
                            if(list[k]){
                                arr.push({
                                    'url': list[k],
                                    'adminlabel':'厅主后台',
                                    'adminUrl': "admin." + list[k],
                                    'cpilabel':'API',
                                    'cpiUrl': "cpi."+ list[k],
                                    'rpiLabel': '资源',
                                    'rpi': 'rpi.' + list[k],
                                    "adminlocalhost": this.filterUrl(window.location.host,'admin'),
                                    "cpilocalhost": this.filterUrl(window.location.host,'cpi'),
                                    "rpilocalhost": this.filterUrl(window.location.host,'rpi'),
                                });
                            }
                        }
                    }
                }else{
                    let arr = this.wwwList;
                    if(str){
                        let list = str.split(/[\n]/g);
                        for(let k = 0 ; k < list.length; k++ ){
                            if(list[k]){
                                arr.push({
                                    'url': list[k],
                                    'master_wwwlabel':'主域',
                                    'master_wwwUrl': list[k],
                                    "master_wwwlocalhost": this.filterUrl(window.location.host,'www'),
                                    'wwwlabel':'PC站',
                                    'wwwUrl': "www." + list[k],
                                    'mlabel':'H5站',
                                    'mUrl': "m." + list[k],
                                    'agentLabel':'代理站',
                                    'agentUrl': "agent." + list[k],
                                    'apilabel':'API',
                                    'apiUrl': "api."+ list[k],
                                    'resLabel': '资源',
                                    'res': 'res.' + list[k],
                                    "wwwlocalhost": this.filterUrl(window.location.host,'www'),
                                    "h5localhost": this.filterUrl(window.location.host,'m'),
                                    "apilocalhost": this.filterUrl(window.location.host,'api'),
                                    "reslocalhost": this.filterUrl(window.location.host,'res'),
                                    "agentlocalhost": this.filterUrl(window.location.host,'agent')
                                });
                            }
                        }
                    }
                }
            },
            // 打开模板
            getTemplate(nowType){
                this.tempType = nowType;
                this.templist.splice(0,this.templist.length);
                if(nowType === 'h5'){
                    for(let k in this.h5TmpList){
                        this.$set(this.templist,k,this.h5TmpList[k]);
                    }
                }else{
                    for(let k in this.pcTmpList){
                        this.$set(this.templist,k,this.pcTmpList[k]);
                    }
                }
                this.dialogVisible = true;
            },
            // 获取选择模板
            doGetTemplate(obj){
                if(obj.type === "pc"){
                    this.wwwForm.www_tid = obj.data.id;
                    this.wwwForm.www_tname = obj.data.key;
                    this.pcSrc = "/static/img/pc_new/" + obj.data.key + ".jpg";
                }else{
                    this.wwwForm.m_tid = obj.data.id;
                    this.wwwForm.m_tname = obj.data.key;
                    this.h5Src = "/static/img/mobile_new/" + obj.data.key + ".jpg";
                }
            },
            // 获取连接
            getLink(){
                let h = this.wwwForm.is_ssl === '1' ? "https://" : "http://";
                let url = this.wwwForm.domain.split(/[\n]/g);
                let urladmin = this.adminForm.domain.split(/[\n]/g);
                this.pcLink = h + "www." + url[0];
                this.h5Link = h + "m." + url[0];
                this.agentLink = h + "agent." + url[0];
                this.adminLink = h + "admin." + urladmin[0];
            },
            //域名过滤
            filterUrl(url,str){
              if(url){
                  let rep = /admin/.test(url);
                  if(rep){
                      return url.replace(/admin/, str)
                  } else {
                      return str + '.' + url;
                  }
              } else {
                  return '';
              }
            },
            // 按钮事件
            openUrl(str){
                switch (str){
                    case 'pc':
                        window.open(this.pcLink);
                        break;
                    case 'h5':
                        window.open(this.h5Link);
                        break;
                    case 'agent':
                        window.open(this.agentLink);
                        break;
                    case 'admin':
                        window.open(this.adminLink);
                        break;
                }

            },
            // URLS验证
            validatorUrls(rule, value, callback){
                if(value){
                    let state = 0;
                    let list = value.split(/[\n]/g);
                    list.forEach((v)=>{
                        // if(!/\w+.[a-zA-Z]+(.[a-zA-Z]+)?$/.test(v)){
                        if(!/\w+(.([a-zA-Z]{2,}))+$/.test(v)){
                            state++;
                            callback(new Error( v + (LANG['域名不合法，请修改后重试'] || '域名不合法,请修改后重试')));
                        }
                    })
                    if (state === 0) {
                        callback();
                    }else{
                        callback(new Error( LANG['域名不合法，请修改后重试'] || '域名不合法,请修改后重试'));
                    }
                }else{
                    callback();
                }
            },
            showUrlError(arr){
                let msg = "";
                if(arr.length === 0){
                    return;
                }
                for(let k in arr){
                    msg = msg + arr[k] +'\r\n';
                }
                this.$notify.error({
                    title: '域名验证失败列表',
                    message: msg,
                    duration: 0
                });
            }
        },
        mounted(){},
        created(){
            this.init();
        }
    }
</script>
<style scoped>
    .steps{
        margin-bottom: 50px;width: 100%;
    }
    .steps p{
        margin-bottom: 10px;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .bmBorder{border-bottom: 1px solid #fff;}
    .butgroup button{ margin-left:20px;display: inline-block}
</style>
