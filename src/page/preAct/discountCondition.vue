<template>
    <div id="act_apply">
        <div class="title">
            <a href="javascript:;" @click="goback">
                <el-button type="primary" icon="arrow-left" size="small">{{LANG['返 回'] || '返 回'}}</el-button>
            </a>
        </div>

        <el-tabs v-model="activeName" @tab-click="handleClick" >
            <el-tab-pane :label="LANG['所有会员'] || '所有会员'" name="allMembers">
                <el-form ref="form" :model="editForm" :rules="rules" label-width="80px" class="w60 pleft" style="border:1px solid #e4e4e4;min-width: 730px;">
                    <div class="clear">
                        <el-col :span="13" class="cpSeachData mt10 fl" >
                            <el-form-item :label="LANG['日期'] || '日期'" required>
                                <el-col :span="11">
                                    <el-form-item prop="date_from">
                                        <datepicker  @get-date="beginTimeChange" v-model="editForm.date_from"></datepicker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="2">-</el-col>
                                <el-col :span="11">
                                    <el-form-item prop="date_to">
                                        <datepicker  @get-date="endTimeChange" v-model="editForm.date_to"></datepicker>
                                    </el-form-item>
                                </el-col>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11" class="mt10 mb10 fl" style="padding-top: 5px;">
                            <quickDate :reSet="reSet" @get-day="getDay"></quickDate>
                        </el-col>
                    </div>
                    <div class="clear cl" style="padding:20px 0;">
                        <el-col :span="20">
                            <el-form-item label="会员层级" prop="checkedDefut" required>
                                <el-checkbox :indeterminate="editForm.isIndeterminate" v-model="editForm.vipType" @change="handleCheckAllChange">全部
                                </el-checkbox>
                                <div style="margin: 15px 0;"></div>
                                <el-checkbox-group v-model="editForm.checkedDefut" @change="handleCheckedDefutChange">
                                    <el-checkbox v-for="(item,index) in vipList" :label=item.label :key=index
                                                 name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-col>
                    </div>
                    <div class="clear game">
                        <el-col :span="20">
                            <el-form-item prop="checkedDefut1" label="游戏平台" required>
                                <el-checkbox :indeterminate="editForm.isIndeterminate1" v-model="editForm.gameType" @change="handleCheckGameAllChange">全部</el-checkbox>
                                <el-checkbox  @change="handleCheckAllChangeDz" v-model="editForm.gameTypeDz">电子</el-checkbox>
                                <el-checkbox  @change="handleCheckAllChangeSx" v-model="editForm.gameTypeSx">视讯</el-checkbox>
                                <div style="margin: 15px 0;"></div>
                                <el-checkbox-group v-model="editForm.checkedDefut1">
                                    <el-checkbox v-for="(item,index) in gameList" :label=item.label :key=index
                                                 name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-col>
                    </div>
                </el-form>
            </el-tab-pane>
            <el-tab-pane :label="LANG['单个会员'] || '单个会员'" name="single">
                <el-form ref="form1" :model="editForm1" :rules="rules1" label-width="80px" class="w60 pleft" style="border:1px solid #e4e4e4;min-width: 730px;">
                    <div class="clear">
                        <el-col :span="13" class="cpSeachData mt10">
                            <el-form-item :label="LANG['日期'] || '日期'" required>
                                <el-col :span="11">
                                    <el-form-item prop="date_from">
                                        <datepicker  @get-date="beginTimeChange1" v-model="editForm1.date_from"></datepicker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="2">-</el-col>
                                <el-col :span="11">
                                    <el-form-item prop="date_to">
                                        <datepicker  @get-date="endTimeChange1" v-model="editForm1.date_to"></datepicker>
                                    </el-form-item>
                                </el-col>
                            </el-form-item>
                        </el-col>
                        <el-col :span="11" class="mt10 mb10" style="padding-top: 5px;">
                            <quickDate :reSet="reSet" @get-day="getDay1"></quickDate>
                        </el-col>
                    </div>
                    <div class="clear" style="padding:20px 0;">
                        <el-col :span="20">
                            <el-form-item prop="input" label="会员账号" class="w70">
                                <el-input type="textarea" placeholder="输入会员账号，多个会员帐号之间用英文逗号(,)隔开" v-model="editForm1.input"></el-input>
                            </el-form-item>
                        </el-col>
                    </div>
                    <div class="clear game">
                        <el-col :span="20">
                            <el-form-item prop="checkedDefut1" label="游戏平台" required>
                                <el-checkbox :indeterminate="editForm1.isIndeterminate1" v-model="editForm1.gameType" @change="handleCheckAllChange1">全部</el-checkbox>
                                <el-checkbox  @change="handleCheckAllChangeDz1" v-model="editForm1.gameTypeDz">电子</el-checkbox>
                                <el-checkbox  @change="handleCheckAllChangeSx1" v-model="editForm1.gameTypeSx">视讯</el-checkbox>
                                <div style="margin: 15px 0;"></div>
                                <el-checkbox-group v-model="editForm1.checkedDefut1">
                                    <el-checkbox v-for="(item,index) in gameList" :label=item.label :key=index
                                                 name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                        </el-col>
                    </div>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        <div class="w60 tCent" style="min-width: 730px;">
            <el-button class="act_apply_submit intW mt20" size="small" @click="doSubmit()">{{LANG['统计会员'] || '统计会员'}}</el-button>
        </div>
    </div>
</template>
<script>
    import datepicker from '../../components/myDatePicker.vue'
	import quickDate from '../../components/quickDate.vue'
	import ElRow from "element-ui/packages/row/src/row";
	export default{
		data(){
			return {
				LANG,
				//表格相关
				activeName: "allMembers",
				reSet: false,
				reSet1: false,
				vipList:[],
                gameList:[],
				editForm:{
					//默认选中项
					isIndeterminate: true,
					isIndeterminate1:true,
					date_from: '',
					date_to: '',
					vipType:true,
                    gameType:true,
                    gameTypeDz:false,
                    gameTypeSx:false,
                    checkedDefut:[],
					checkedDefut1:[]
				},
				editForm1:{
					//默认选中项
					isIndeterminate: true,
					isIndeterminate1:true,
					date_from: '',
					date_to: '',
                    input:'',
					vipType:true,
                    gameType:true,
                    gameTypeDz:false,
                    gameTypeSx:false,
					checkedDefut:[],
					checkedDefut1:[]
				},
				rules: {
					date_from:[
						{ required: true, message: '请输入开始时间', trigger: 'change' }
					],
					date_to:[
						{ required: true, message: '请输入结束时间', trigger: 'change'}
					],
					checkedDefut:[
						{ type: 'array', required: true, message: '请至少选择一个会员等级', trigger: 'change' }
					],
					checkedDefut1:[
						{ type: 'array', required: true, message: '请至少选择一个会员等级', trigger: 'change' }
					]
				},
				rules1: {
					date_from:[
						{ required: true, message: '请输入开始时间', trigger: 'change' }
					],
					date_to:[
						{ required: true, message: '请输入结束时间', trigger: 'change'}
					],
					input:[
						{ required: true, message: '请输入会员账号', trigger: 'change'}
					],
					checkedDefut1:[
						{ type: 'array', required: true, message: '请至少选择一个会员等级', trigger: 'change' }
					]
				}
			}
		},
		components: {
			ElRow,
            datepicker:datepicker,
			quickDate: quickDate,
		},
		methods: {
			init(){
                this.editForm.date_to = FORMATDATEPICKER(new Date(parseInt(sessionStorage.dateTime)));
                this.editForm.date_from = FORMATDATEPICKER(new Date(parseInt(sessionStorage.dateTime)));
                this.editForm1.date_to = FORMATDATEPICKER(new Date(parseInt(sessionStorage.dateTime)));
                this.editForm1.date_from = FORMATDATEPICKER(new Date(parseInt(sessionStorage.dateTime)));
                this.reqVips();
                this.reqGames();
			},
			handleClick(){

			},
            reqGames(){
                let _this = this;
                let url = URL.api+'/games';

                this.$.autoAjax('get',url,'', {
                    ok: (res) => {
                        if(res.data){
                            let  model = res.data;
                            for ( let i in model ) {
                                _this.gameList.push({
                                    "label": model[i].game_name,
                                    "type":model[i].game_type,
                                    "value": model[i].game_id
                                })
                                this.editForm.checkedDefut1.push(model[i].game_name)
                                this.editForm1.checkedDefut1.push(model[i].game_name)
                            }
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
			/**
			 * 获取会员等级
			 */
			reqVips() {
				let _this = this,levelUrl = URL.api+ROUTES.GET.user.level.list;
                this.$.autoAjax('get', levelUrl, '', {
                    ok: (res) => {
                        if(res.data){
                            let  model = res.data;
                            for ( let i in model ) {
                                _this.vipList.push({
                                    "label": "VIP"+model[i].level,
                                    "value": model[i].level
                                });
                                this.editForm.checkedDefut.push("VIP"+model[i].level)
                            }
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
			},
			getDay(obj) {
				this.editForm.date_from = obj.sday;
				this.editForm.date_to = obj.eday;
			},
            getDay1(obj) {
                this.editForm1.date_from = obj.sday;
                this.editForm1.date_to = obj.eday;
            },
			//会员全选
			handleCheckAllChange(event) {
				let checkList = [];
				for (let v in this.vipList) {
					checkList[v] = this.vipList[v].label;
				};
				this.editForm.checkedDefut = event.target.checked ? checkList : [];
				this.editForm.isIndeterminate = false;
			},
            //游戏全选
            handleCheckGameAllChange(event) {
                let checkList = [];
                for (let v in this.gameList) {
                    checkList[v] = this.gameList[v].label;
                };
                this.editForm.checkedDefut1 = event.target.checked ? checkList : [];
                this.editForm.isIndeterminate1 = false;
                this.editForm.gameTypeDz = false;
                this.editForm.gameTypeSx = false;
            },
			//全选
			handleCheckAllChange1(event) {
				let checkList = [];
				for (let v in this.gameList) {
					checkList[v] = this.gameList[v].label;
				};
				this.editForm1.checkedDefut1 = event.target.checked ? checkList : [];
				this.editForm1.isIndeterminate = false;
                this.editForm1.gameTypeDz = false;
                this.editForm1.gameTypeSx = false;
			},
			handleCheckAllChangeDz(event){
                let arr = this.gameList.filter(item => {
                    return item.type === "egame"
                });
                let checkList = [];
                for (let v in arr) {
                    checkList[v] = arr[v].label;
                };
                this.editForm.checkedDefut1 = event.target.checked ? checkList : [];
                this.editForm.isIndeterminate1 = false;
                this.editForm.gameType = false;
                this.editForm.gameTypeSx = false;
            },
			handleCheckAllChangeSx(event){
                let arr = this.gameList.filter(item => {
                    return item.type === "live"
                });
                let checkList = [];
                for (let v in arr) {
                    checkList[v] = arr[v].label;
                };
                this.editForm.checkedDefut1 = event.target.checked ? checkList : [];
                this.editForm.isIndeterminate1 = false;
                this.editForm.gameType = false;
                this.editForm.gameTypeDz = false;
			},
			handleCheckAllChangeDz1(event){
                let arr = this.gameList.filter(item => {
                    return item.type === "egame"
                });
                let checkList = [];
                for (let v in arr) {
                    checkList[v] = arr[v].label;
                };
                this.editForm1.checkedDefut1 = event.target.checked ? checkList : [];
                this.editForm1.isIndeterminate1 = false;
                this.editForm1.gameType = false;
                this.editForm1.gameTypeSx = false;
			},
			handleCheckAllChangeSx1(event){
                let arr = this.gameList.filter(item => {
                    return item.type === "live"
                });
                let checkList = [];
                for (let v in arr) {
                    checkList[v] = arr[v].label;
                };
                this.editForm1.checkedDefut1 = event.target.checked ? checkList : [];
                this.editForm1.isIndeterminate1 = false;
                this.editForm1.gameTypeDz = false;
                this.editForm1.gameType = false;
			},
			handleCheckedDefutChange(){

			},
			//提交表单
			doSubmit(){
				let _this = this;
				let name = this.activeName;
				if(name === 'allMembers'){
					this.$refs.form.validate((valid) => {
						if (valid) {
							let dateFrom = this.editForm.date_from;
							let dateTo = this.editForm.date_to;
							let member = '';
							let check = this.editForm.checkedDefut;
							let checkList = [];
							let memberAll = '';
                            check.forEach(item => {
                                this.vipList.forEach(item1 => {
                                    if(item === item1.label){
                                        checkList.push(item1)
                                    }
                                })
                            });
                            if(check.length === 1) {
                                member = checkList.map(item => {
                                    return item.value
                                })[0];
                            }else{
                                member = checkList.map(item => {
                                    return item.value
                                }).join(',')
                            }
							if(check.length === this.vipList.length){
                                memberAll = '全部'
                            }else if(check.length === 1){
							    memberAll = check[0]
                            }else {
                                memberAll = check.join(',')
                            }
							let game = '';
                            let gameType = '';
							let gameCheck = this.editForm.checkedDefut1;
                            let gameCheckList = [];
                            let gameAll = '';
                            gameCheck.forEach(item => {
                                this.gameList.forEach(item1 => {
                                    if(item === item1.label){
                                        gameCheckList.push(item1)
                                    }
                                })
                            });
                            if(gameCheck.length === 1) {
                                game = gameCheckList.map(item => {
                                    return item.value
                                })[0];
                                gameType = gameCheckList.map(item => {
                                    return item.type
                                })[0];
                            }else{
                                game = gameCheckList.map(item => {
                                    return parseInt(item.value)
                                }).join(',');
                                gameType = gameCheckList.map(item => {
                                    return item.type
                                }).join(',');
                            }
                            if (gameCheck.length === this.gameList.length){
                                gameAll = '全部'
                            }else if(gameCheck.length === 1){
                                gameAll = gameCheck[0]
                            }else{
                                gameAll = gameCheck.join(',')
                            }
							this.$router.push({path: "/queryDetail",query:{date_from:dateFrom,date_to:dateTo,level_id:member,game_id:game,gameType:gameType,type:"level",gameAll:gameAll,memberAll:memberAll}});
						} else {
//							console.log('error submit!!');
							return false;
						}
					});
				}else{
					this.$refs.form1.validate((valid) => {
						if (valid) {
							let dateFrom = this.editForm1.date_from;
							let dateTo = this.editForm1.date_to;
							let user_name = this.editForm1.input;
                            let game = '';
                            let gameType = '';
                            let gameCheck = this.editForm1.checkedDefut1;
                            let gameCheckList = [];
                            let gameAll = '';
                            gameCheck.forEach(item => {
                                this.gameList.forEach(item1 => {
                                    if(item === item1.label){
                                        gameCheckList.push(item1)
                                    }
                                })
                            });
                            if(gameCheck.length === 1) {
                                game = gameCheckList.map(item => {
                                    return item.value
                                })[0];
                                gameType = gameCheckList.map(item => {
                                    return item.type
                                })[0];
                            }else{
                                game = gameCheckList.map(item => {
                                    return item.value
                                }).join(',')
                                gameType = gameCheckList.map(item => {
                                    return item.type
                                }).join(',');
                            }
                            if (gameCheck.length === this.gameList.length){
                                gameAll = '全部'
                            }else if(gameCheck.length === 1){
                                gameAll = gameCheck[0]
                            }else{
                                gameAll = gameCheck.join(',')
                            }
                            this.$router.push({path: "/queryDetail",query:{date_from:dateFrom,date_to:dateTo,user_name:user_name,game_id:game,gameType:gameType,gameAll:gameAll,type:"uname"}});
						} else {
//							console.log('error submit!!');
							return false;
						}
					});
				}
			},
			beginTimeChange(){
				this.editForm.date_from = FORMATDAT(this.editForm.date_from,'yyyy-MM-dd');
			},
			endTimeChange(){
				this.editForm.date_to = FORMATDAT(this.editForm.date_to,'yyyy-MM-dd');
			},
			beginTimeChange1(){
				this.editForm1.date_from = FORMATDAT(this.editForm1.date_from,'yyyy-MM-dd');
			},
			endTimeChange1(){
				this.editForm1.date_to = FORMATDAT(this.editForm1.date_to,'yyyy-MM-dd');
			},
            goback(){
                this.$router.push({path:"/discount"})
            },
		},
		computed: {},
		mounted(){
			$('body').on('click', () => {
				$('#tooltip').hide();
			})
            let wHeight = window.innerHeight;
            $('#act_apply').css('height',wHeight-100);
		},
		created(){
			this.init()
		},
        beforeRouteLeave (to, from, next) {
            this.$refs.form.resetFields();
            this.$refs.form1.resetFields();
            this.vipList.forEach(item => {
                this.editForm.checkedDefut.push(item.label)
            })
            this.gameList.forEach(item => {
                this.editForm.checkedDefut1.push(item.label)
                this.editForm1.checkedDefut1.push(item.label)
            })
            next(true);
        }
	}
</script>
<style scoped>
    .game .el-checkbox{width: 100px;}
    .game .el-checkbox+.el-checkbox {
        margin-left: 0;
    }
    .title {margin-bottom: 10px;}
    .el-form-item__label {
        text-align: left!important;
    }
    .floatDiv:hover{
        display: block;
    }
    .rela{
        position: relative;
    }
    .el-date-editor.el-input{width:120px;}
    #act_apply .batch-buttons{
        margin: 20px 0;
    }
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
</style>
