<template>
    <div id="activeMode">
        <!--每日签到-->
        <el-col :span="14" :offset="5" class="activeModeForm">
            <el-form ref="form" :model="modeData" :rules="rules" label-width="140px" class="mt20">
                <el-col :span="24" class="Layout">
                    <h3 class="tCent" v-text="LANG['规则设置'] || '规则设置'"></h3>
                    <el-form-item label="优惠活动名称" prop="name">
                        <el-input class="w80" v-model="modeData.name" :placeholder="placename"></el-input>
                    </el-form-item>
                    <el-form-item label="优惠类型" prop="type_id">
                        <el-select v-model="modeData.type_id" placeholder="请选择类型" class="w80">
                            <el-option :label=item.label :value=item.value :key=item.index
                                       v-for="(item,index) in type_idList"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="有效时间" required class="w80">
                        <el-col class="w30">
                            <el-form-item prop="begin_time">
                                <dateTimePicker  @get-val="timeChange" v-model="modeData.begin_time" :datekey="'begin_time'"></dateTimePicker>
                            </el-form-item>
                        </el-col>
                        <div style="float:left;" class="w20 tCent"> - </div>
                        <el-col class="w30">
                            <el-form-item prop="end_time">
                                <dateTimePicker  @get-val="timeChange" v-model="modeData.end_time" :datekey="'end_time'"></dateTimePicker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="发放奖金" prop="rule.issueMode" v-if="seachData.type=='add'">
                        <el-radio-group v-model="modeData.rule.issueMode">
                            <el-radio class="radio"  label="auto"><span
                                    v-text="LANG['自动发放'] || '自动发放'"></span>
                            </el-radio>
                            <el-radio class="radio"  label="manual"><span
                                    v-text="LANG['手动发放'] || '手动发放'"></span>
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="发放周期" prop="rule.issueCycle">
                        <el-radio-group v-model="modeData.rule.issueCycle">
                            <el-radio class="radio"  label="day"><span
                                    v-text="LANG['每日'] || '每日'"></span>
                            </el-radio>
                            <el-radio class="radio"  label="week"><span
                                    v-text="LANG['每周'] || '每周'"></span>
                            </el-radio>
                            <el-radio class="radio"  label="month"><span
                                    v-text="LANG['每月'] || '每月'"></span>
                            </el-radio>
                            <el-radio class="radio"  label="active"><span
                                    v-text="LANG['活动期间'] || '活动期间'"></span>
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="优惠规则" required>
                        <el-form-item prop="rule.rule.type" class="addPadding">
                            <el-radio-group v-model="modeData.rule.rule.type">
                                <el-radio class="radio"  label="1"><span
                                        v-text="LANG['以投注流水多'] || '以投注流水多'"></span>
                                </el-radio>
                                <el-radio class="radio"  label="2"><span
                                        v-text="LANG['以赢钱多'] || '以赢钱多'"></span>
                                </el-radio>
                                <el-radio class="radio"  label="3"><span
                                        v-text="LANG['以输钱多'] || '以输钱多'"></span>
                                </el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <div v-for="(item,key) in modeData.rule.rule.prize" class="addPadding">
                            <span v-text="LANG['第'+(key+1)+'名奖金'] || '第'+(key+1)+'名奖金'"></span>
                            <el-form-item :prop=" 'rule.rule.prize['+key+'].value' " :rules="[{ validator:validatorNumber,trigger:'blur'}]" style="display: inline-block;">
                                <el-input v-model="item.value" class="intW"></el-input>
                            </el-form-item>
                            <i class="el-icon-plus" style="padding: 10px;background: #ccc;" v-if="key === 0" @click="addRule(key)"></i>
                            <i class="el-icon-minus" style="padding: 10px;background: #ccc;" @click="deleteRule(key)" v-else></i>
                        </div>
                    </el-form-item>
                    <el-form-item label="领取限制">
                        <el-radio-group v-model="get" @change="limitChange()">
                            <el-radio  label="1" class="radio">
                                <span v-text="LANG['限定次数'] || '限定次数'"></span>
                                <el-form-item prop="rule.limit_times" :rules="[{ validator:validatorLimitNumber,trigger:'blur'}]" style="display: inline-block;">
                                    <el-input v-model="modeData.rule.limit_times" class="intW"></el-input>
                                </el-form-item>
                            </el-radio>
                            <el-radio label="2" class="radio"><span v-text="LANG['无限定次数'] || '无限定次数'"></span></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="有效游戏范围" prop="gameSelect">
                        <el-tree
                                :data="tree"
                                show-checkbox
                                :props="modeData.defaultProps"
                                node-key="id"
                                ref="tree"
                                :default-checked-keys="checkKeys"
                                :default-expanded-keys="expandedKeys"
                                @check-change="handleCheckChange"
                        >
                        </el-tree>
                    </el-form-item>
                    <el-form-item label="有效会员等级" prop="checkedDefut">
                        <el-checkbox :indeterminate="isIndeterminate" v-model="modeData.vipType"
                                     @change="handleCheckAllChange">全部
                        </el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="modeData.checkedDefut" @change="handleCheckedDefutChange">
                            <el-checkbox v-for="(item,index) in vipList" :label=item.label :key=index
                                         name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="发放时间" required v-show="seachData.type=='add'">
                        <span v-text="LANG['第'] || '第'"></span>
                        <el-form-item prop="rule.issueTime" :rules="[{ validator:validatorNumber,trigger:'blur'}]" class="to-inline-block">
                            <el-input class="intW" v-model="modeData.rule.issueTime"></el-input>
                        </el-form-item>
                        <span v-text="LANG['天发放'] || '天发放'"></span>
                    </el-form-item>
                    <el-form-item label="提款要求" prop="rule.withdrawRequire">
                        <el-radio-group v-model="modeData.rule.withdrawRequire" @change="withdrawRequireChange">
                            <el-radio  label="times" class="radio">
                                <span v-text="LANG['倍数'] || '倍数'"></span>
                                <el-form-item style="display: inline-block" prop="rule.withdrawRequireVal" :rules="[{ validator:validatorTimeNumber,trigger:'blur'}]">
                                    <el-input class="intW" v-model="modeData.rule.withdrawRequireVal"></el-input>
                                </el-form-item>
                            </el-radio>
                            <el-radio  label="bet" class="radio">
                                <span v-text="LANG['固定投注流水'] || '固定投注流水'"></span>
                                <el-form-item style="display: inline-block" prop="rule.withdrawRequireVal1" :rules="[{ validator:validatorBetNumber,trigger:'blur'}]">
                                    <el-input class="intW" v-model="modeData.rule.withdrawRequireVal1"></el-input>
                                </el-form-item>
                            </el-radio>
                            <el-radio  label="no" class="radio"><span v-text="LANG['无取款要求'] || '无取款要求'"></span></el-radio>
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
                </el-col>
                <el-col :span="24" class="Layout">
                    <h3 class="tCent" v-text="LANG['内容设置'] || '内容设置'"></h3>
                    <el-form-item label="优惠活动标题" prop="title">
                        <el-input class="w80" v-model="modeData.title"></el-input>
                    </el-form-item>
                    <el-form-item label="语言" prop="language_id">
                        <el-select v-model="modeData.language_id" placeholder="请选择类型" class="w80" @change="changeLanguage" disabled>
                            <el-option :label=item.label :value=item.value v-for="(item,index) in languageList"
                                       :key=index>
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="优惠活动描述" prop="description">
                        <el-input class="w80" type="textarea" v-model="modeData.description"></el-input>
                    </el-form-item>
                    <el-form-item label="图片上传" prop="cover">
                        <el-input v-model="modeData.cover" style="display:none;"></el-input>
                        <upload :uploadUrl="uploadUrl" @response="doSaveFile" :keys="keys" :isInit="imgInit" :fileNum="1" :arrList="modeData.arrList" :imgResolution="'460*180'"></upload>
                    </el-form-item>
                    <el-form-item :label="LANG['优惠规则编辑'] || '优惠规则编辑'" prop="content">
                        <el-input v-model="modeData.content" style="display:none;"></el-input>
                        <markdownEdit v-model="modeData.content" :id="'pcid'" v-if="pcshow"></markdownEdit>
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
    import ElRadio from "../../../node_modules/element-ui/packages/radio/src/radio";
    import dateTimePicker from '../../components/dateTimePicker.vue'

    export default{
        data(){
          const validatorTime = (rule,value,callback) => {
               const beginTime = new Date(this.modeData.begin_time).getTime();
               const endTime = new Date(this.modeData.end_time).getTime();
               if(beginTime > endTime){
                  callback(new Error(LANG['开始时间不能大于结束时间'] || '开始时间不能大于结束时间'));
               }else{
                  callback();
               }
            }
            return {
                LANG,
                modeData: {
                    arrList:[],
                    name: "",//string #活动名称
                    type_id:"",//int ：活动类型ID
                    title: "",//string #活动标题
                     begin_time:'',//datetime #开始时间
                    end_time:'',//datetime #结束时间
                    vipType: [],//会员列表
                    status: 'enabled',//string #状态 enabled 启用,disabled 停用
                    description: "",//string #描述
                    cover: "",//string #封面
                    language_id: "",//int #语言ID
                    language_name: "",//string #语言名称
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
                    open_mode:"",
                    // 链接
                    link: "",
                    rule: {
                        template_id: '',
                        type:'',
                        rule:{
                            type:'',
                            prize:[{
                                value:''
                            }]
                        },
                        limit_times:'',//领取限制次数
                        withdrawRequire: '',//提款要求选择
                        withdrawRequireVal: '',//
                        withdrawRequireVal1: '',//提款倍数
                        member_level: '',
                        issueTime: null,//发放时间
                        issueCycle: '',
                        issueMode:'',//string #发放方式
                        game: []
                    },
                    checkedDefut: [],
                    gameSelect:[],
                },
                get: "",//领取限制方式
                pcshow:false,
                placename:'',
                tree: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                checkKeys:[],//树结构选中节点
                expandedKeys:[], //树结构默认展开节点
                modeDataCopy:{},//重置数据时用
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
                    name:[
                        { required: true, message: '请填写活动名称', trigger : 'blur' }
                    ],
                    type_id: [
                        { required: true, message: '请选择优惠类型', trigger: 'change' }
                    ],
                    language_id:[
                        { required: true, message: '请选择语言类型', trigger: 'change' }
                    ],
                    cover:[
                        { required: true, message: '请上传图片', trigger: 'change' }
                    ],
                    description:[
                        { required: true, message: '请输入活动描述', trigger: 'blur'}
                    ],
                    begin_time:[
                        { required: true, validator:validatorTime, trigger: 'change' }
                    ],
                    end_time:[
                        { required: true, validator:validatorTime, trigger: 'change'}
                    ],
                    'rule.issueTime':[
                        { required: true, message: '请填写发放时间', trigger : 'blur' }
                    ],
                    'rule.issueCycle':[
                        { required: true, message: '请选择发放周期',trigger:'change'}
                    ],
                    'rule.issueMode':[
                        { required: true, message: '请选择发放奖金方式',trigger:'change'}
                    ],
                    'rule.withdrawRequire':[
                        { required: true, message: '请选择提款要求', trigger : 'change' }
                    ],
                    'rule.rule.type':[
                        { required: true, message: '请选择优惠规则类型', trigger : 'change' }
                    ],
                    checkedDefut:[
                        { type: 'array', required: true, message: '请至少选择一个会员等级', trigger: 'change' }
                    ],
                    gameSelect:[
                        { type: 'array', required: true, message: '请至少选择一个游戏范围', trigger: 'change' }
                    ],
                    title:[
                        { required: true, message: '请输入活动标题',trigger:'change'}
                    ],
                    content:[
                        { required: true, message: '请输入优惠规则',trigger:'change'}
                    ]
                }
            }
        },
        components: {
            ElRadio,
            markdownEdit: markdownEdit,
            upload: upload,
            dateTimePicker:dateTimePicker
        },
        methods: {
            init(){
                let _this = this;
                this.modeData.begin_time = window.sessionStorage.sysTime + ' 00:00:00'//datetime #开始时间
                this.modeData.end_time = window.sessionStorage.sysTime+' 23:59:59'//datetime #结束时间
                this.pcshow = true;
                let query = this.$route.query;
                for (let k in query) {
                    this.seachData[k] = query[k];
                }
                //编辑页面数据获得后要操作会员层级数据，所以先要获得到会员层级数据
                function getMeber() {
                    return new Promise(function (resolve,reject) {
                        let alllevel = URL.api + `/user/levels`;

						this.$.autoAjax('get',alllevel, '', {
							ok: (res) => {
								let model = res.data
								_this.vipList = [];
								for (let i in model) {
									_this.vipList.push({
										"label": model[i].name,
										"value": model[i].id.toString(),
										"disable":true
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
                        // _this.$http.get(alllevel, URLCONFIG).then((res) => {
                        //     let model = res.data.data
                        //     _this.vipList = [];
                        //     for (let i in model) {
                        //     _this.vipList.push({
                        //        "label": model[i].name,
                        //        "value": model[i].id.toString(),
                        //        "disable":true
                        //     })
                        //    }
                        //     resolve();
                        // })
                        .catch(function (err) {
//                            console.log(err)
                            reject(err)
                        });
                    })
                }
                getMeber().then(function () {
                    return new Promise(function (resolve,reject) {
                        //获取游戏列表
                        let gameUrl = URL.api + ROUTES.GET.games.list+'?debug=1&details=1';

						this.$.autoAjax('get',gameUrl, '', {
							ok: (res) => {
								resolve();
								let model = res.data;
								let treeArr = [];
								//递归遍历游戏数据
								function setTreeArr(model,treeArr) {
									for (let i in model) {
										treeArr.push({
											"id": parseInt(model[i].id),
											"label": model[i].name,
											"pids":model[i].pids
										});
										if(model[i].children){
											treeArr[i].children = [];
											setTreeArr(model[i].children,treeArr[i].children)
										}
									}
								}
								setTreeArr(model,treeArr);
								_this.tree = treeArr;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // _this.$http.get(gameUrl, URLCONFIG).then((res) => {
                        //     resolve();
                        //     let model = res.data.data;
                        //     let treeArr = [];
                        //     //递归遍历游戏数据
                        //     function setTreeArr(model,treeArr) {
                        //         for (let i in model) {
                        //             treeArr.push({
                        //                 "id": parseInt(model[i].id),
                        //                 "label": model[i].name,
                        //                 "pids":model[i].pids
                        //             });
                        //             if(model[i].children){
                        //                 treeArr[i].children = [];
                        //                 setTreeArr(model[i].children,treeArr[i].children)
                        //             }
                        //         }
                        //     }
                        //     setTreeArr(model,treeArr);
                        //     _this.tree = treeArr;
                        // })
                    })
                }).then(function () {
                     let levelUrl = URL.api + `/active/template/unique?template_id=${_this.seachData.template_id}&&begin_time=${_this.modeData.begin_time}&&end_time=${_this.modeData.end_time}`;

					this.$.autoAjax('get',levelUrl, '', {
						ok: (res) => {
							let model = res.data;
							for (let i in model) {
								_this.vipList.forEach(item => {
									if(item.value === model[i].id.toString()){
										item.disable = false;
									}
								})
							}
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                  //    _this.$http.get(levelUrl, URLCONFIG).then((res) => {
                  //   let model = res.data.data;
                  //   for (let i in model) {
                  //       _this.vipList.forEach(item => {
                  //         if(item.value === model[i].id.toString()){
                  //            item.disable = false;
                  //         }
                  //       })
                  //   }
                  // })
                     .catch(function (err) {
//                       console.log(err)
                  });
                    //获取编辑页面数据
                    if(_this.seachData.type === 'edit'){
                        let editUrl = URL.api + `/active/template.fix/${_this.seachData.id}`;

						this.$.autoAjax('get',editUrl,'', {
							ok: (res) => {
								if(res.state === 0 && res.data) {
									let formData = res.data;
									_this.modeData =  {
										arrList:[],
										name : formData.name,
										type_id : formData.type_id,
										title : formData.title,
										begin_time : formData.begin_time,
										end_time : formData.end_time,
										day : formData.day,
										vipType: [],//会员列表
										money: formData.money,
										status: formData.status,
										description: formData.description,
										language_id: formData.language_id,
										language_name: formData.language_name,
										content: formData.content,
										cover:formData.cover,
										checkedDefut:formData.rule.member_level[0].toString(),
										gameSelect:[],
										rule:{
											rule:{
												type:formData.rule.rule.type.toString(),
												prize:[]
											},
											limit_times:formData.rule.limit_times.toString(),
											withdrawRequire:formData.rule.withdraw_require,
											issueTime: formData.rule.issue_time ,
											issueCycle: formData.rule.issue_cycle,
											issueMode:formData.rule.issue_mode,
											game: []
										}
									};
									//活动图片
									_this.modeData.arrList.push(formData.cover);
									//处理会员层级数据
									let model = res.data.rule.member_level;
									for (let i in model) {
										_this.vipList.forEach(item => {
											if(item.value === model[i].id.toString()){
												item.disable = false;
											}
										})
										_this.modeData.checkedDefut.push(model[i].name)
									}
									//处理领取限制
									if(formData.rule.limit_times > 0){
										_this.get = '1'
									}else{
										_this.get = '2';
										_this.modeData.rule.limit_times = null;
									}
									//优惠规则
									formData.rule.rule.prize.forEach(function (item,key) {
										_this.modeData.rule.rule.prize.push({value:item / 100})
									});
									//处理提款要求
									if(formData.rule.withdraw_require === 'bet'){
										_this.modeData.rule.withdrawRequireVal1 = formData.rule.withdraw_require_val / 100
									}else if(formData.rule.withdraw_require === 'times'){
										_this.modeData.rule.withdrawRequireVal = formData.rule.withdraw_require_val
									}
									//处理树节点
									formData.rule.game.forEach(item => {
										if(parseInt(item.lg_id) === 0){
											_this.checkKeys.push(parseInt(item.type))
										}else{
											_this.checkKeys.push(parseInt(item.lg_id))
										}
									});
									_this.$refs.tree.setCheckedKeys(_this.checkKeys);
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
                        //             _this.modeData =  {
                        //                 arrList:[],
                        //                 name : formData.name,
                        //                 type_id : formData.type_id,
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
                        //                 content: formData.content,
                        //                 cover:formData.cover,
                        //                 checkedDefut:formData.rule.member_level[0].toString(),
                        //                 gameSelect:[],
                        //                 rule:{
                        //                     rule:{
                        //                         type:formData.rule.rule.type.toString(),
                        //                         prize:[]
                        //                     },
                        //                     limit_times:formData.rule.limit_times.toString(),
                        //                     withdrawRequire:formData.rule.withdraw_require,
                        //                     issueTime: formData.rule.issue_time ,
                        //                     issueCycle: formData.rule.issue_cycle,
                        //                     issueMode:formData.rule.issue_mode,
                        //                     game: []
                        //                 }
                        //             };
                        //             //活动图片
                        //             _this.modeData.arrList.push(formData.cover);
                        //             //处理会员层级数据
                        //             let model = res.data.data.rule.member_level;
                        //             for (let i in model) {
                        //               _this.vipList.forEach(item => {
                        //               if(item.value === model[i].id.toString()){
                        //                    item.disable = false;
                        //                }
                        //               })
                        //               _this.modeData.checkedDefut.push(model[i].name)
                        //             }
                        //             //处理领取限制
                        //             if(formData.rule.limit_times > 0){
                        //                 _this.get = '1'
                        //             }else{
                        //                 _this.get = '2';
                        //                 _this.modeData.rule.limit_times = null;
                        //             }
                        //             //优惠规则
                        //             formData.rule.rule.prize.forEach(function (item,key) {
                        //                 _this.modeData.rule.rule.prize.push({value:item / 100})
                        //             });
                        //             //处理提款要求
                        //             if(formData.rule.withdraw_require === 'bet'){
                        //                 _this.modeData.rule.withdrawRequireVal1 = formData.rule.withdraw_require_val / 100
                        //             }else if(formData.rule.withdraw_require === 'times'){
                        //                 _this.modeData.rule.withdrawRequireVal = formData.rule.withdraw_require_val
                        //             }
                        //             //处理树节点
                        //             formData.rule.game.forEach(item => {
                        //                 if(parseInt(item.lg_id) === 0){
                        //                     _this.checkKeys.push(parseInt(item.type))
                        //                 }else{
                        //                     _this.checkKeys.push(parseInt(item.lg_id))
                        //                 }
                        //             });
                        //             _this.$refs.tree.setCheckedKeys(_this.checkKeys);
                        //         }
                        //     })
                    }
                });
                //初始化优惠活动名称
                this.placename = this.seachData.label;
//                获取优惠类型列表
				this.$.autoAjax('get',URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", '', {
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
				this.$.autoAjax('get',langeUrl, '', {
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
            handleCheckAllChange(event) {
                let checkList = [];
                for (let v in this.vipList) {
                    checkList[v] = this.vipList[v].label;
                };
                this.modeData.checkedDefut = event.target.checked ? checkList : [];
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
                let _this = this;
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        let checklist= [];
                        this.modeData.checkedDefut.forEach(function (it) {
                            _this.vipList.forEach(function (item) {
                                if(item.label === it){
                                    checklist.push(item)
                                }
                            });
                        });
                        let member_level = checklist.map(function (item) {
                            return item.value
                        }).join(',');
                        //拿到选中的语言
                        let lan = this.languageList.find(function (item) {
                            return item.value = _this.modeData.language_id
                        });
                        //优惠规则数据过滤
                        let Arr = JSON.parse(JSON.stringify(this.modeData.rule.rule.prize));
                        let ruleArr = Arr.map(function (item) {
                            return parseInt(item.value) * 100
                        });
                        //过滤游戏数据
                        let gameArr = [];
                        //如果this.game里面有数据说明用户有点击过树形结构
                        this.modeData.gameSelect.filter(function (item) {
                            //先过滤掉不是最底层的节点数据
                            return item.children.length === 0
                        }).forEach(function (item) {
                            let arr = item.pids.split('|');
                            let type = null;
                            let lg_id = null;
                            if(arr.length > 1){
                                type = arr.shift();
                                lg_id = arr.pop();
                            }else{
                                type = arr[0];
                                lg_id = 0;
                            }
                            gameArr.push({type:type,lg_id:lg_id})
                        });
                        //提款要求数据处理
                        let withdraw_require_val = null;
                        if(this.modeData.rule.withdrawRequire === 'times'){
                            withdraw_require_val = parseInt(this.modeData.rule.withdrawRequireVal)
                        }else if(this.modeData.rule.withdrawRequire === 'bet'){
                            withdraw_require_val = parseInt(this.modeData.rule.withdrawRequireVal1)*100
                        }else {
                            withdraw_require_val = 0
                        }
                        let formData = {
                            name:this.modeData.name,
                            type_id:this.modeData.type_id,
                            title:this.modeData.title,
                            begin_time:this.modeData.begin_time,
                            end_time:this.modeData.end_time,
                            description:this.modeData.description,
                            cover:this.modeData.cover,
                            language_id: parseInt(this.modeData.language_id),
                            language_name:lan ? lan.label : '',
                            content:this.modeData.content,
                            status:this.modeData.status,
                            rule_type:'arena',
                            rule: {
                                template_id:6,
                                rule:{
                                    type:parseInt(this.modeData.rule.rule.type),
                                    prize:ruleArr
                                },
                                limit_times: this.modeData.rule.limit_times ? this.modeData.rule.limit_times : 0,
                                withdraw_require: this.modeData.rule.withdrawRequire,
                                withdraw_require_val: withdraw_require_val,
                                member_level: member_level,
                                issue_time: parseInt(this.modeData.rule.issueTime),
                                issue_cycle: this.modeData.rule.issueCycle,
                                issue_mode:this.modeData.rule.issueMode,
                                game: gameArr
                            }
                        };
                        if (type === 'add') {
                            let url = URL.api + `/active/template.fix`;

							this.$.autoAjax('put',url,formData, {
								ok: (res) => {
									if(data.state === 0){
										let str = LANG['添加成功'] || '添加成功';
										this.$message.success(str)
										setTimeout(function () {
											_this.$router.push({path: 'addActiveSet'})
										},1000)
									}else if(data.state > 3){
										this.$message.error(data.msg)
									}else {
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
							this.$.autoAjax('put',url,formData, {
								ok: (res) => {
									if(data.state === 0){
										let str = LANG['修改成功'] || '修改成功';
										this.$message.success(str)
										setTimeout(function () {
											_this.$router.push({path: 'activeSet'})
										},1000)
									}else if(data.state > 3){
										this.$message.error(data.msg)
									}else {
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
                        _this.$message.error('请检查表单')
                        return false;
                    }
                });
            },
            goBack(type){
                type == "add" ? this.$router.push({path: 'addActiveSet'}) : this.$router.push({path: 'activeSet'});
            },
            //
            doSaveFile(obj){
                this.modeData.cover = obj.url[0];
            },
            changeLanguage(value){
                let languageList = this.languageList;
            },
            addRule(key){
                let data = {value:''};
                this.modeData.rule.rule.prize.push(data);
            },
            deleteRule(key){
                this.modeData.rule.rule.prize.splice(key,1)
            },
            handleCheckChange(){
                this.modeData.gameSelect = this.$refs.tree.getCheckedNodes();
                this.$refs.form.validateField('gameSelect');
            },
            //領取限制change
            limitChange(){
                if(this.get === '2'){
                    //清空limit_times
                    this.modeData.rule.limit_times = ''
                }
                this.$refs.form.validateField('rule.limit_times');
            },
            //数字验证
            validatorNumber(rule, value, callback){
              //检测值是不是为空
                if(!value){
                  callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                  return;
                }
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value.toString().replace(/^\s+|\s+$/,''))) {
                    if(isNaN(value) || !!value.replace(/^\s+|\s+$/,'') == false){
                        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                    }else{
                        callback(new Error(LANG['小数点后不超过两位'] || '小数点后不超过两位'));
                    }
                } else {
                    if (value < 0) {
                        callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                    } else if(value > 9999999){
                        callback(new Error(LANG['输入金额不能大于9999999'] || '输入金额不能大于9999999'));
                    } else {
                        callback();
                    }
                }
            },
            //限制领取次数验证
            validatorLimitNumber(rule, value, callback){
                if(this.get === '1'){
                    this.validatorNumber.apply(this,arguments)
                }else{
                    callback();
                }
            },
            //提款要求倍数验证
            validatorTimeNumber(rule, value, callback){
                if(this.modeData.rule.withdrawRequire === 'times'){
                    this.validatorNumber.apply(this,arguments)
                }else{
                    callback();
                }
            },
            //提款要求固定投注流水验证
            validatorBetNumber(rule, value, callback){
                if(this.modeData.rule.withdrawRequire === 'bet'){
                    this.validatorNumber.apply(this,arguments)
                }else{
                    callback();
                }
            },
            withdrawRequireChange(){
                this.$refs.form.validateField('rule.withdrawRequireVal');
                this.$refs.form.validateField('rule.withdrawRequireVal1');
            },
            timeChange(obj) {
                setTimeout(() => {
                  this.$refs.form.validateField('begin_time');
                  this.$refs.form.validateField('end_time');
                })

            },
        },
        computed: {},
        activated(){
            this.init()
        },
        beforeRouteLeave (to, from, next) {
            next(true);
            this.$refs.form.resetFields();
            this.checkKeys = []; //清空选中游戏
            this.modeData.description = '';
            this.modeData.arrList = [];
            this.pcshow = false;
        }
    };
</script>
<style scoped>
    .tCent {padding-bottom: 10px;}
    #activeMode .Layout {
        padding: 10px 3%;
    }
    #activeMode .activeModeForm{
        border:1px solid #c8c8c8;
    }
    #activeMode .el-radio+.el-radio{ margin-left:0;}
    #activeMode .el-checkbox+.el-checkbox{ margin-left:0; margin-right:15px;}
    .clear {
        zoom:1
    }
    .clear:after {
        display: block;
        content: '';
        width: 100%;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    .to-inline-block {
        display: inline-block;
    }
    .to-inline-block .ruleInput {
        width: 80px;
    }
    .addPadding {
        padding-bottom: 20px;
    }
    .radio {padding-right: 20px;}
</style>
