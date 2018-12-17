<!--第三方客服-->
<template>
    <div id="otherService">
        <div class="el-col">
            <el-form class="el-form" ref="form" :model="modeData">
                <el-col>
                    <el-form-item>
                        <el-radio-group style="width: 100%;" v-model="select">
                            <el-col class="radio-block">
                                <el-col :span="5">
                                    <el-radio label="lebo">
                                        <span v-text="LANG['LEBO客服系统'] || 'LEBO客服系统'"></span>
                                    </el-radio>
                                </el-col>
                                <el-col :span="19">
                                    <div>
                                        <p class="title">pc端</p>
                                        <el-form-item prop="lebo.pc.code">
                                            <textarea name=""  style="width: 100%;" rows="10" placeholder="请输入在线客服代码" v-model="modeData.lebo.pc.code"></textarea>
                                        </el-form-item>
                                    </div>
                                    <div>
                                        <p class="title">移动端</p>
                                        <el-input placeholder="请输入在线客服链接" v-model="modeData.lebo.mobile.code"></el-input>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col class="radio-block">
                                <el-col :span="5">
                                    <el-radio label="usa">
                                        <span v-text="LANG['美国客服系统'] || '美国客服系统'"></span>
                                    </el-radio>
                                </el-col>
                                <el-col :span="19">
                                    <div>
                                        <p class="title">pc端</p>
                                        <textarea name=""  style="width: 100%;" rows="10" placeholder="请输入在线客服代码" v-model="modeData.usa.pc.code"></textarea>
                                    </div>
                                    <div class="supportPos">
                                        <span class="title">客服入口显示位置</span>
                                        <el-radio-group v-model="modeData.usa.pc.position">
                                            <el-radio label="left-middle">
                                                <span v-text="LANG['左中'] || '左中'"></span>
                                            </el-radio>
                                            <el-radio label="left-bottom">
                                                <span v-text="LANG['左下'] || '左下'"></span>
                                            </el-radio>
                                            <el-radio label="right-middle">
                                                <span v-text="LANG['右中'] || '右中'"></span>
                                            </el-radio>
                                            <el-radio label="right-bottom">
                                                <span v-text="LANG['右下'] || '右下'"></span>
                                            </el-radio>
                                        </el-radio-group>
                                    </div>
                                    <div>
                                        <p class="title">移动端</p>
                                        <el-input placeholder="请输入在线客服链接" v-model="modeData.usa.mobile.code"></el-input>
                                    </div>
                                </el-col>
                            </el-col>
                            <el-col class="radio-block">
                                <el-col :span="5">
                                    <el-radio label="live800">
                                        <span v-text="LANG['LIVE800客服系统'] || 'LIVE800客服系统'"></span>
                                    </el-radio>
                                </el-col>
                                <el-col :span="19">
                                    <div>
                                        <p class="title">pc端</p>
                                        <el-form-item prop="live800.pc.code">
                                            <el-input placeholder="请输入在线客服窗口地址URL" v-model="modeData.live800.pc.code"></el-input>
                                        </el-form-item>
                                    </div>
                                    <div class="supportPos">
                                        <span class="title">客服入口显示位置</span>
                                        <el-radio-group v-model="modeData.live800.pc.position">
                                            <el-radio label="left-middle">
                                                <span v-text="LANG['左中'] || '左中'"></span>
                                            </el-radio>
                                            <el-radio label="left-bottom">
                                                <span v-text="LANG['左下'] || '左下'"></span>
                                            </el-radio>
                                            <el-radio label="right-middle">
                                                <span v-text="LANG['右中'] || '右中'"></span>
                                            </el-radio>
                                            <el-radio label="right-bottom">
                                                <span v-text="LANG['右下'] || '右下'"></span>
                                            </el-radio>
                                        </el-radio-group>
                                    </div>
                                    <div>
                                        <p class="title">移动端</p>
                                        <el-input placeholder="请输入在线客服链接" v-model="modeData.live800.mobile.code"></el-input>
                                    </div>
                                </el-col>
                            </el-col>
                        </el-radio-group>
                    </el-form-item>
                    <!--<el-form-item>-->
                        <!--<el-col>-->
                            <!--<el-col :span="5">-->
                                <!--<span class="title">客服入口显示开关</span>-->
                            <!--</el-col>-->
                            <!--<el-col :span="19">-->
                                <!--<el-radio-group v-model="modeData.display">-->
                                    <!--<el-radio :label="true" >-->
                                        <!--<span v-text="LANG['开'] || '开'"></span>-->
                                    <!--</el-radio>-->
                                    <!--<el-radio :label="false">-->
                                        <!--<span v-text="LANG['关'] || '关'"></span>-->
                                    <!--</el-radio>-->
                                <!--</el-radio-group>-->
                            <!--</el-col>-->
                        <!--</el-col>-->
                    <!--</el-form-item>-->
                </el-col>
                <el-button type="primary" @click="doSave" class="saveBtn">
                    <span v-text="LANG['保存修改'] || '保存修改'"></span>
                </el-button>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default{
        data () {
            return {
                LANG,
                select:'lebo',
                modeData: {
                    lebo: {
                        pc: {
                            code: "",
                            position: "",
                        },
                        mobile: {
                            code: ""
                        },
                        selected: false
                    },
                    usa: {
                        pc: {
                            code: "",
                            position: "left-middle",
                        },
                        mobile: {
                            code: ""
                        },
                        selected: false
                    },
                    live800: {
                        pc: {
                            code: "",
                            position: "left-middle",
                        },
                        mobile: {
                            code: ""
                        },
                        selected: false
                    },
//                    display: true
                },
            }
        },
        methods: {
            init(){
                this.submitData = JSON.parse(JSON.stringify(this.modeData));

				this.$.autoAjax('get',URL.api + ROUTES.GET.system.service, '', {
					ok: (res) => {
						if(res.state == 0 && res.data ){
							let list = res.data.services;
							let modeData = this.modeData;
							this.modeData.display = res.data.display;
							for(let key in list){
								if((list[key].mobile && list[key].mobile.code) || (list[key].pc && list[key].pc.code)){
									modeData[key] = list[key];
								}
								if(this.modeData[key].selected === true){
									this.select = key;
								}
							}
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.system.service,URLCONFIG).then((res) => {
                //     if(res.data.state == 0 && res.data.data ){
                //         let list = res.data.data.services;
                //         let modeData = this.modeData;
                //         this.modeData.display = res.data.data.display;
                //         for(let key in list){
                //             if((list[key].mobile && list[key].mobile.code) || (list[key].pc && list[key].pc.code)){
                //                 modeData[key] = list[key];
                //             }
                //             if(this.modeData[key].selected === true){
                //                 this.select = key;
                //             }
                //         }
                //     }
                // })
            },
            //保存
            doSave(){
                let select = this.select;
                let data = {services: this.modeData,display: this.modeData.display};
                data.services.lebo.selected = false;
                data.services.usa.selected = false;
                data.services.live800.selected = false;
                data.services[select].selected = true;
               delete data.display;

				this.$.autoAjax('patch',URL.api + ROUTES.PATCH.system.service,data, {
					ok: (res) => {
						if(res.state == 0 && res.data){
							this.$message.success(LANG["保存成功"] || "保存成功");
							this.init();
						}else{
							this.$message.success(LANG["保存失败！"] || "保存失败！");
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.patch(URL.api + ROUTES.PATCH.system.service,JSON.stringify(data),URLCONFIG).then((res) => {
                //     if(res.data.state == 0 && res.data.data){
                //         this.$message.success(LANG["保存成功"] || "保存成功");
                //         this.init();
                //     }else{
                //         this.$message.success(LANG["保存失败！"] || "保存失败！");
                //     }
                // })
            },
            doReset(){

            },
            validateLeboPcCode(rule, value, callback){
                if(this.select === 'lebo' && value == ''){
                    callback(new Error(LANG['请输入在线客服代码'] || '请输入在线客服代码'));
                }else{
                    callback();
                }
            },
            validateLivePcCode(rule, value, callback){
                if(this.select === 'live800' && value == ''){
                    callback(new Error(LANG['请输入在线客服窗口地址URL'] || '请输入在线客服窗口地址URL'));
                }else{
                    callback();
                }
            }
        },
        computed: {},
        mounted(){
        },
        created(){
            this.init();
        }
    }
</script>
<style scoped>
    #otherService{width:50%;min-width: 800px;margin: 0 auto;padding-top:30px;}
    .border{
        border: 1px solid #cccccc;
        padding: 20px;
        margin: 10px 0;
    }
    /*.oContent{border: 1px solid #dedede;padding:40px 0;}*/
    /*.serviceTitle{*/
        /*margin: 10px 0px;*/
        /*text-align: left;*/
        /*padding-left: 10%;*/
    /*}*/
    .base{
        text-align: center;
    }
    .base textarea{
        width: 80%;
        min-height: 200px;
    }
    .server-title {
        float: none;
        text-align: left;
        line-height: normal;
        color: inherit;
        font-size: inherit;
        padding: 0;
    }
    .title {
        font-size: 14px;
        padding-bottom: 10px;
    }
    .radio-block {
       padding-bottom: 20px;
    }
    .supportPos {
        padding: 20px 0;
    }
    .supportPos .title {
        padding-right: 15px;
    }
    .saveBtn {
        float: right;
    }
</style>
