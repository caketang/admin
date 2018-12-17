<template>
    <div id="memberSet" v-loading="loading">
        <div class="clearfix" style="margin: 0 auto; width: 933px;">
            <el-col>
                <div class="title">{{LANG['会员设置'] || '会员设置'}}</div>
            </el-col>
            <el-col>
                <el-col :span="8">
                    <span>{{LANG['帐号状态：'] || '帐号状态：'}}</span>
                    <!-- <el-radio-group v-model="memberForm['state']" @change="systemConfrim('changeLimit',memberForm['state'])">
                        <el-radio :label="true" v-model="memberForm['state']">{{LANG['启用'] || '启用'}}</el-radio>
                        <el-radio :label="false" v-model="memberForm['state']"  >{{LANG['停用'] || '停用'}}</el-radio>
                    </el-radio-group> -->
                    <span class="sucess">{{memberForm['state']?"启用":"停用"}}</span>
                    <el-button type="primary" size="mini" @click="systemConfrim('changeLimit', !memberForm['state'])" v-if="!memberForm['state']">{{LANG['启用'] || '启用'}}</el-button>
                    <el-button type="primary" size="mini" @click="systemConfrim('changeLimit', !memberForm['state'])" v-if="memberForm['state']">{{LANG['停用'] || '停用'}}</el-button>
                </el-col>
                <el-col :span="8">
                    <span style="margin-right:10px">{{LANG['M令牌状态：'] || 'M令牌状态：'}}</span>
                    <span class="sucess">{{memberForm['is_mtoken_bind']?"已绑定":"未绑定"}}</span>
                    <el-button type="primary" size="mini" @click="systemConfrim('MremoveBinding')" v-if="memberForm['is_mtoken_bind']">{{LANG['解绑'] || '解绑'}}</el-button>
                </el-col>
                <el-col :span="8">
                    <span style="margin-right:10px">{{LANG['在线状态：'] || '在线状态：'}}</span>
                    <span class="sucess">{{memberForm['online']?"在线":"离线"}}</span>
                    <el-button type="primary" size="mini" @click="systemConfrim('offLine')" v-if="memberForm['online']">{{LANG['踢出'] || '踢出'}}</el-button>
                </el-col>
                <!-- <el-col>
                    <span style="margin-right:10px">{{LANG['自我登录限制状态：'] || '自我登录限制状态：'}}</span>
                    <span>{{memberForm['limit_status']?"有限制":"无限制"}}</span>
                    <el-button type="text" @click="systemConfrim('releaseRestriction')" v-if="memberForm['limit_status']">{{LANG['解决限制'] || '解决限制'}}</el-button>
                </el-col> -->
                <el-form class="form" style="margin-top: 50px;">
                    <el-form-item :label="LANG['权限设置'] || '权限设置'">
                        <!-- <el-checkbox v-for="item in memberForm['jurisdictionList']":label="item.label" v-model="memberForm['limits'][item.label]">{{item.text}}</el-checkbox> -->
                        <el-checkbox v-model="memberForm.refuse_withdraw" @change="saveWithdrawSet(memberForm.refuse_withdraw,'refuse_withdraw')" >{{LANG['禁止提款'] || '禁止提款'}}</el-checkbox>
                        <el-checkbox v-model="memberForm.refuse_sale" @change="saveWithdrawSet(memberForm.refuse_sale,'refuse_sale')" >{{LANG['禁止优惠'] || '禁止优惠'}}</el-checkbox>
                        <el-checkbox v-model="memberForm.refuse_rebate" @change="saveWithdrawSet(memberForm.refuse_rebate,'refuse_rebate')" >{{LANG['禁止返水'] || '禁止返水'}}</el-checkbox>
                        <!-- <el-checkbox v-model="memberForm.refuse_transfer" @change="saveWithdrawSet(memberForm.refuse_transfer,'refuse_transfer')" >{{LANG['禁止额度转换'] || '禁止额度转换'}}</el-checkbox> -->
                        <!--<el-button type="primary" size="small" style="margin-left:30px;" @click="saveSet">保存</el-button>-->
                    </el-form-item>
                    <el-form-item :label="LANG['禁止额度转换'] || '禁止额度转换'">
                        <el-checkbox v-for="item in memberForm.refuse_transfer" :key="item.label" v-model="item.val" @change="saveWithdrawSet(item.val, item.label)" >{{item.label}}</el-checkbox>
                    </el-form-item>
                    <!-- <el-form-item :label="LANG['视讯盈利限制'] || '视讯盈利限制'">
                        <el-input v-model="memberForm['limit_video']"></el-input>
                    </el-form-item> -->
                    <!-- <el-form-item :label="LANG['彩票盈利限制'] || '彩票盈利限制'">
                        <el-input v-model="memberForm['limit_lottery']"></el-input>
                    </el-form-item> -->
                </el-form>
            </el-col>
            <el-col>
                <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm" @do-cancel="doCancel"> </confirm>
            </el-col>
        </div>
    </div>
</template>
<script>
    import confirm from '../../../components/confirm.vue'
    export default{
        data(){
            return{
                LANG,
                memberForm: {
                    state: false,
                    online: false,
                    is_mtoken_bind: true,
                    limit_status: false,
                    // limit_video: 0,
                    // limit_lottery:0,
                    refuse_withdraw: false,
                    refuse_sale: false,
                    refuse_rebate: false,
                    refuse_transfer: [],
                    role: 1
                },
                //停用状态
                Enable: false,
                //页面初始值
                num: 0,
                //系统提示框
                confirmConfig:{
                    state: false,
                    msg:"",
                    fn:"",
                    obj: {}
                },
                option:"",
                loading: false
            }
        },
        props:{
            id:Number
        },
        components: {
            confirm:confirm
        },
        methods: {
            init(){
                let _this = this;
                let stat = this.memberForm;
                //取用户数据

				this.$.autoAjax('get',URL.api+"/user/setting/" + parseInt(this.id), '', {
					ok: (res) => {
						if( res.state == 0 && res.data){
							let model = res.data;
							// let jurisdictionList = this.jurisdictionList;
							for(let i in model){
								if (i == 'refuse_withdraw' || i == 'refuse_sale' || i == 'refuse_rebate' || i == "limit_status" || i == 'state' || i == 'is_mtoken_bind') {
									stat[i] = model[i] == '1' ? true : false;
								} else if (i == 'refuse_transfer') {
									stat.refuse_transfer = [];
									for (let k in model[i]) {
										let label = k;
										let val = model[i][k] == '1' ? true : false;
										stat.refuse_transfer.push({label: label, val: val});
									}
								} else {
									stat[i] = model[i];
								}
								// 特殊处理
								if (i == 'state') {
									this.num = model[i] == '0' ? 1 : 0;
								}
							}
							stat.online = parseInt(stat.online);
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api+"/user/setting/" + parseInt(this.id),URLCONFIG).then((res)=>{
                //     if( res.data.state == 0 && res.data.data){
                //         let model = res.data.data;
                //         // let jurisdictionList = this.jurisdictionList;
                //         for(let i in model){
                //             if (i == 'refuse_withdraw' || i == 'refuse_sale' || i == 'refuse_rebate' || i == "limit_status" || i == 'state' || i == 'is_mtoken_bind') {
                //                 stat[i] = model[i] == '1' ? true : false;
                //             } else if (i == 'refuse_transfer') {
                //                 stat.refuse_transfer = [];
                //                 for (let k in model[i]) {
                //                     let label = k;
                //                     let val = model[i][k] == '1' ? true : false;
                //                     stat.refuse_transfer.push({label: label, val: val});
                //                 }
                //             } else {
                //                 stat[i] = model[i];
                //             }
                //             // 特殊处理
                //             if (i == 'state') {
                //                 this.num = model[i] == '0' ? 1 : 0;
                //             }
                //         }
                //         stat.online = parseInt(stat.online);
                //     }
                // });
            },
            //消息提示
            systemConfrim(fn,val){
                // this.num ++;
                if(fn == "changeLimit"){
                    let msg = "是否确认";
                    msg =  msg + (val ? "启用" : "停用") + "该会员？";
                    this.confirmConfig = {
                        state: true,
                        msg: msg,
                        fn: fn,
                        obj: {val: val}
                    }
                }else{
                    let msg = "是否确认";
                    switch  (fn){
                        case "offLine":
                            msg = msg +"踢线该会员？";
                            break;
                        case "releaseRestriction":
                            msg = msg +"解除该会员自我登录限制？";
                            break;
                        case "MremoveBinding":
                            msg = msg +"M令牌解绑？";
                            break;
                    }
                    this.confirmConfig = {
                        state: true,
                        msg: msg,
                        fn: fn,
                        obj: {val: val}
                    }
                }

            },
            // 权限设置
            saveWithdrawSet(val,key){
                let str = '', state = val ? '启用' : '停用', fn = '', fn_key = '';
                switch (key){
                    case 'refuse_withdraw' :
                        str = (LANG['确认'] || '确认') + '"' + (LANG[state] || state) + '"' + (LANG["禁止提款吗?"] || '禁止提款吗?');
                        fn = 'refuse_withdraw';
                        break;
                    case 'refuse_sale' :
                        str = (LANG['确认'] || '确认') +  '"' + (LANG[state] || state) + '"'  + (LANG["禁止优惠吗?"] || '禁止优惠吗?');
                        fn = 'refuse_sale';
                        break;
                    case 'refuse_rebate' :
                        str = (LANG['确认'] || '确认') +  '"' + (LANG[state] || state) + '"'  + (LANG["禁止返水吗?"] || '禁止返水吗?');
                        fn = 'refuse_rebate';
                        break;
                    default :
                        str = (LANG['确认'] || '确认') +  '"' + (LANG[state] || state) + '"'  + (LANG["禁止" + key + "额度转换吗?"] || '禁止' + key +'额度转换吗?');
                        fn = key;
                        // fn_key = key;
                        break;
                }

                this.confirmConfig = {
                    state: true,
                    msg: str,
                    fn: fn,
                    obj: {val: val}
                }
            },
            //提示确认后事件
            doConfirm(obj){
                let str = obj.fn;
                switch (str){
                    case "changeLimit":
                        this.changeLimit();
                        break
                    case "offLine":
                        this.offLine();
                        break
                    case "accountStatusSet":
                        this.accountStatusSet();
                        break
                    case "releaseRestriction":
                        this.releaseRestriction();
                        break
                    case "MremoveBinding":
                        this.MremoveBinding();
                        break
                    case "refuse_withdraw":
                        this.doProhibit('refuse_withdraw');
                        break
                    case "refuse_sale":
                        this.doProhibit('refuse_sale');
                        break
                    case "refuse_rebate":
                        this.doProhibit('refuse_rebate');
                        break
                    default :
                        this.doProhibit('refuse_transfer', str);
                        break
                }
            },
            // 禁止设置
            doProhibit(str, fn_key){
                let status = 0;
                if (!fn_key) {
                    status = this.confirmConfig.obj.val ? "1" : "0"
                } else {
                    // 当禁止额度的时候处理status参数
                    let transfer_arr = [];
                    for (let k of this.memberForm.refuse_transfer) {
                        if (k.val) {
                            transfer_arr.push(k.label);
                        }
                    }
                    status = transfer_arr.join(',');
                }
                let query = {
                    ids: this.id.toString(),
                    auth: str,
                    status: status
                };
                this.loading = true;

				this.$.autoAjax('patch',URL.api+ '/user/prohibition/' + parseInt(this.id),query, {
					ok: (res) => {
						if (res.data && res.state == 0) {
							this.$message.success(this.LANG['权限设置成功'] || '权限设置成功');
						}else if (res.state == 4003  || res.state == 405 ) {
							this.$message.error(this.LANG['权限设置失败，没有权限'] || '权限设置失败，没有权限');
						} else {
							this.$message.error(this.LANG['权限设置失败，请稍后重试'] || '权限设置失败，请稍后重试');
						}
						this.loading = false;
						this.init();
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.patch(URL.api+ '/user/prohibition/' + parseInt(this.id), JSON.stringify(query), URLCONFIG).then((res)=>{
                //     if (res.data.data && res.data.state == 0) {
                //         this.$message.success(this.LANG['权限设置成功'] || '权限设置成功');
                //     }else if (res.data.state == 4003  || res.data.state == 405 ) {
                //         this.$message.error(this.LANG['权限设置失败，没有权限'] || '权限设置失败，没有权限');
                //     } else {
                //         this.$message.error(this.LANG['权限设置失败，请稍后重试'] || '权限设置失败，请稍后重试');
                //     }
                //     this.loading = false;
                //     this.init();
                // })
            },
            //账号状态的启用、停用
            changeLimit(){
                if(!this.memberForm['state']){
                    let _this = this;
                    // this.$http.patch(URL.api+ ROUTES.PATCH.user.info.$,JSON.stringify({"ids":parseInt(this.id),"operation":2}),URLCONFIG).then((res)=>{

					this.$.autoAjax('put',URL.api+ ROUTES.PUT.user.setting + parseInt(this.id),{"ids": this.id.toString(), "state": 1}, {
						ok: (res) => {
							if (res.data && res.state == 0) {
								_this.$message.success(_this.LANG['会员帐号启用成功'] || '会员帐号启用成功');
							} else if (res.state == 4003 || res.state == 405 ) {
								_this.$message.error(_this.LANG['修改失败，没有权限'] || '修改失败，没有权限');
							} else {
								_this.$message.error(_this.LANG['会员帐号启用失败，请稍后重试'] || '会员帐号启用失败，请稍后重试');
							}
							this.init();
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.put(URL.api+ ROUTES.PUT.user.setting + parseInt(this.id),JSON.stringify({"ids": this.id.toString(), "state": 1}),URLCONFIG).then((res)=>{
                    //     if (res.data.data && res.data.state == 0) {
                    //         _this.$message.success(_this.LANG['会员帐号启用成功'] || '会员帐号启用成功');
                    //     } else if (res.data.state == 4003 || res.data.state == 405 ) {
                    //         _this.$message.error(_this.LANG['修改失败，没有权限'] || '修改失败，没有权限');
                    //     } else {
                    //         _this.$message.error(_this.LANG['会员帐号启用失败，请稍后重试'] || '会员帐号启用失败，请稍后重试');
                    //     }
                    //     this.init();
                    // })
                    // this.num = this.num + 1;
                }else{
                    let _this = this;
                    // this.$http.patch(URL.api+ ROUTES.PATCH.user.info.$,JSON.stringify({"ids":parseInt(this.id),"operation":1}),URLCONFIG).then((res)=>{

					this.$.autoAjax('put',URL.api+ ROUTES.PUT.user.setting + parseInt(this.id),{"ids": this.id.toString(),"state": 0}, {
						ok: (res) => {
							if (res.data && res.state == 0) {
								_this.$message.success(_this.LANG['会员帐号停用成功'] || '会员帐号停用成功');
							} else if (res.state == 4003 || res.state == 405 ) {
								_this.$message.error(_this.LANG['修改失败，没有权限'] || '修改失败，没有权限');
							} else{
								_this.$message.error(_this.LANG['会员帐号停用失败，请稍后重试'] || '会员帐号停用失败，请稍后重试');
							}
							this.Enable = false;
							this.init();
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.put(URL.api+ ROUTES.PUT.user.setting + parseInt(this.id),JSON.stringify({"ids": this.id.toString(),"state": 0}),URLCONFIG).then((res)=>{
                    //     if (res.data.data && res.data.state == 0) {
                    //         _this.$message.success(_this.LANG['会员帐号停用成功'] || '会员帐号停用成功');
                    //     } else if (res.data.state == 4003 || res.data.state == 405 ) {
                    //         _this.$message.error(_this.LANG['修改失败，没有权限'] || '修改失败，没有权限');
                    //     } else{
                    //         _this.$message.error(_this.LANG['会员帐号停用失败，请稍后重试'] || '会员帐号停用失败，请稍后重试');
                    //     }
                    //     this.Enable = false;
                    //     this.init();
                    // })
                    // this.num = this.num + 1;
                }
                this.confirmConfig = {
                        state: false
                }
            },
            //踢出在线
            offLine(){
                let _this = this;

				this.$.autoAjax('patch',URL.api+ ROUTES.PATCH.user.setting + parseInt(this.id),{"ids": this.id.toString(), "online" : 0}, {
					ok: (res) => {
						if (res.data && res.state == 0) {
							_this.memberForm['online'] = false;
							_this.$message.success(_this.LANG['会员踢线成功'] || '会员踢线成功');
						} else if (res.state == 4003 || res.state == 405 ) {
							_this.$message.error(_this.LANG['修改失败，没有权限'] || '修改失败，没有权限');
						} else {
							_this.$message.error(_this.LANG['会员踢线失败，请稍后重试'] || '会员踢线失败，请稍后重试');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.patch(URL.api+ ROUTES.PATCH.user.setting + parseInt(this.id),JSON.stringify({"ids": this.id.toString(), "online" : 0}),URLCONFIG).then((res)=>{
                //     if (res.data.data && res.data.state == 0) {
                //         _this.memberForm['online'] = false;
                //         _this.$message.success(_this.LANG['会员踢线成功'] || '会员踢线成功');
                //     } else if (res.data.state == 4003 || res.data.state == 405 ) {
                //          _this.$message.error(_this.LANG['修改失败，没有权限'] || '修改失败，没有权限');
                //     } else {
                //         _this.$message.error(_this.LANG['会员踢线失败，请稍后重试'] || '会员踢线失败，请稍后重试');
                //     }
                // })
            },
            //解除限制
            releaseRestriction(){
                let _this = this;
                // this.$http.patch(URL.api+ ROUTES.PATCH.user.info.limit+"?id="+ parseInt(this.id),{},URLCONFIG).then((res)=>{

				this.$.autoAjax('patch',URL.api+ ROUTES.PATCH.user.setting + parseInt(this.id), {"ids": this.id.toString(),"limit_status" : 0}, {
					ok: (res) => {
						if (res.data && res.state == 0) {
							_this.memberForm['limit_status'] = false;
							_this.$message.success(_this.LANG['解除用户自我登录限制成功'] || '解除用户自我登录限制成功');
						}else if(res.state == 4003 || res.state == 405){
							_this.$message.error(_this.LANG['解除用户自我登录限制失败，权限不足'] || '解除用户自我登录限制失败，权限不足');
						} else {
							_this.$message.error(_this.LANG['解除用户自我登录限制失败，请稍后重试'] || '解除用户自我登录限制失败，请稍后重试');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.patch(URL.api+ ROUTES.PATCH.user.setting + parseInt(this.id),JSON.stringify({"ids": this.id.toString(),"limit_status" : 0}),URLCONFIG).then((res)=>{
                //     if (res.data.data && res.data.state == 0) {
                //         _this.memberForm['limit_status'] = false;
                //         _this.$message.success(_this.LANG['解除用户自我登录限制成功'] || '解除用户自我登录限制成功');
                //     }else if(res.data.state == 4003 || res.data.state == 405){
                //         _this.$message.error(_this.LANG['解除用户自我登录限制失败，权限不足'] || '解除用户自我登录限制失败，权限不足');
                //     } else {
                //         _this.$message.error(_this.LANG['解除用户自我登录限制失败，请稍后重试'] || '解除用户自我登录限制失败，请稍后重试');
                //     }
                // })
            },
            // 解除M令牌绑定
            MremoveBinding() {

				this.$.autoAjax('post',URL.api + "/admin/login.unbind", {"uid" : this.memberForm["id"], "role" : this.memberForm["role"]}, {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							this.memberForm['is_mtoken_bind'] = false;
							this.$message.success(this.LANG['解绑成功'] || '解绑成功');
						} else if(res.state == 4003 || res.state == 405){
							this.$message.error(this.LANG['解绑失败，权限不足'] || '解绑失败，权限不足');
						} else {
							this.$message.error(this.LANG['解绑失败'] || '解绑失败');
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.post(URL.api + "/admin/login.unbind", JSON.stringify({"uid" : this.memberForm["id"], "role" : this.memberForm["role"]}), URLCONFIG).then((res) => {
                //     if (res.data.state == 0 && res.data.data) {
                //         this.memberForm['is_mtoken_bind'] = false;
                //         this.$message.success(this.LANG['解绑成功'] || '解绑成功');
                //     } else if(res.data.state == 4003 || res.data.state == 405){
                //         this.$message.error(this.LANG['解绑失败，权限不足'] || '解绑失败，权限不足');
                //     } else {
                //         this.$message.error(this.LANG['解绑失败'] || '解绑失败');
                //     }
                // })
            },
            // 取消确认按钮，确保按钮返回之前状态
            doCancel(obj){
                let key = obj.fn;
                switch (key){
                    case 'refuse_withdraw' :
                        this.memberForm.refuse_withdraw = !obj.obj.val;
                        break;
                    case 'refuse_sale' :
                        this.memberForm.refuse_sale = !obj.obj.val;
                        break;
                    case 'refuse_rebate' :
                        this.memberForm.refuse_rebate = !obj.obj.val;
                        break;
                    default :
                        this.setRefuseTransfer(obj);
                }
            },
            setRefuseTransfer(obj) {
                for (let i of this.memberForm.refuse_transfer) {
                    if (obj.fn == i.label) {
                        i.val = !obj.obj.val
                    }
                }
            }
        },
        computed:{
        },
        mounted(){
        },
        created(){
            this.init();
        }
    }
</script>
<style scoped>
    #memberSet{padding:20px;}
    #memberSet .title { text-align: center; width: 100%; font-weight: 800; font-size: 18px; margin-bottom: 30px !important; }
    #memberSet .sucess{color:#009966}
    #memberSet .form{border: 1px solid #cccccc;padding: 10px;clear: both;}
    #memberSet .form .el-input{width: 300px; }
</style>
