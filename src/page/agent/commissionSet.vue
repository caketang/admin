<template>
    <div id="CommissionSet">
        <div class="search el-col">
            <el-button class="btn_right" size="small" type="primary" v-text="LANG['新增代理退佣比例'] || '新增代理退佣比例'" @click="doAdd"></el-button>
        </div>
        <el-col>
            <CommissionSet  :tableUrl="tableUrl" @do-handle="doHandle" :tableIndex="false"  :updated="updated" ></CommissionSet>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <el-col :span="24">
            <formEdit :formTitel="formTitel" :formVisible="editVisible" :formConfig="formConfigs" :type="type" size="tiny"
                      :labelWidth="labelWidth" @get-form="getForm" :isEdit="isEdit" :formType="formType"></formEdit>
        </el-col>
    </div>
</template>
<script type="text/ecmascript-6">
    import CommissionSet from '../../components/CommissionSet'
    import formEdit from '../../components/formEdit.vue'
    import confirm from '../../components/confirm.vue'
    export default{
        data(){
            var checkPercent = (rule,value,callback) => {
                if(!value && value !== 0 ){
                   return callback(new Error('请输入百分比'));
                }
                setTimeout(()=>{
                    if (isNaN(value)){
                        callback(new Error('请输入数字'));
                    }else {
                        if(value>100){
                            callback(new Error('百分比不能大于100%'));
                        }else if (value<0){
                            callback(new Error('百分比不能小于0'));
                        }else {
                            callback();
                        }
                    }
                },500)
            };
            var checkNumber = function(rule, value, callback)
            {
                if(!value)
                {
                    callback(new Error('请输入数字'));
                }else  if (!/^([\-1-9]\d*|0)(\.\d{1,2})?$/.test(value.replace(/^\s+|\s+$/,''))) {

                        callback(new Error(LANG['小数点后不超过两位'] || '小数点后不超过两位'));

                }else{
                    if(Number.parseFloat(value) < 0)
                    {
                         callback(new Error(LANG['请输入不小于0的数字'] || '请输入不小于0的数字'));
                    }else if(Number.parseFloat(value) > 9999999){
                         callback(new Error(LANG['请输入小于9999999的数字'] || '请输入小于9999999的数字'));
                    }else{
                        callback();
                    }
                }
            }
            var checkIntNumber = function(rule, value, callback)
            {
                if (!/^-?\d+$/.test(value.replace(/^\s+|\s+$/,''))) {

                        callback(new Error(LANG['请输入整数'] || '请输入整数'));

                }else{
                    if(Number.parseFloat(value) < 0)
                    {
                         callback(new Error(LANG['请输入不小于0的数字'] || '请输入不小于0的数字'));
                    }else if(Number.parseFloat(value) > 9999999){
                         callback(new Error(LANG['请输入小于9999999的数字'] || '请输入小于9999999的数字'));
                    }else{
                        callback();
                    }
                }

            }
            return{
                LANG,
                formTitel:"",
                editVisible:{
                    state: false,
                },
                labelWidth: "150px",
                type: "default",
                isEdit:{
                    state: false,
                },
                formType:"",
                formConfigs:[
                    {"prop": "earn_start", "value": "", "type": "number", "label": "总公司输赢总额", "rules": [{"require": true}, {"fns":checkNumber} ]},
                    {"prop": "valid_user", "value": "", "type": "number", "label": "当月有效会员", "rules": [{"require": true},  {"fns":checkIntNumber}]},
                    {"prop": "sport_bkge", "value": "", "type": "number", "label": "退佣比例(%)体育", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "game_bkge", "value": "", "type": "number", "label": "退佣比例(%)电子", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "lottery_bkge", "value": "", "type": "number", "label": "退佣比例(%)彩票", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "video_bkge", "value": "", "type": "number", "label": "退佣比例(%)视讯", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "valid_bet_start", "value": "", "type": "number", "label": "有效投注额", "rules": [{"require": true}, {"fns":checkNumber}]},
                    {"prop": "sport_rebet", "value": "", "type": "number", "label": "退水比例(%)体育", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "game_rebet", "value": "", "type": "number", "label": "退水比例(%)电子", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "lottery_rebet", "value": "", "type": "number", "label": "退水比例(%)彩票", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "video_rebet", "value": "", "type": "number", "label": "退水比例(%)视讯",  "rules": [{"require": true}, {"fns":checkPercent}]}
                ],
                //表格相关
                columnsUrl:"",
                tableUrl:"",
                nowId: -1,
                //删除确认
                confirmConfig:{
                    state:false,
                    msg:"",
                    fn:"",
                    obj: {},
                },
                updated: false,
            }
        },
        components: {
            CommissionSet:CommissionSet,
            confirm:confirm,
            formEdit: formEdit,
        },
        methods: {

            init(){
                this.columnsUrl="/static/json/agent/CommissionSet/columns.json"
                this.tableUrl = URL.api + ROUTES.GET.commission.agents;
            },
            //新增
            doAdd(){
                this.updated = false;
                this.formType = "add";
                this.formTitel = "新增代理退佣比例";
                this.isEdit.state = false;
                this.editVisible.state = true;
            },
            getForm(data){
                let obj =  data.formObj;
                obj.earn_start = parseInt(obj.earn_start)*100;
                obj.valid_bet_start = parseInt(obj.valid_bet_start)*100;
                obj.type = "1"; // 修改新增type默认为1
                obj.agent_id = 0;
                if (this.formType == "add") {

                    this.$.autoAjax('put',URL.api + ROUTES.PUT.commission.agent, obj, {
                        ok: (res) => {
                            if (res.state == 0 && res.data) {
                                this.updated = true;
                                this.$message.success(LANG["新增成功"] || "新增成功");
                            }
                            else if(res.state == 1002)
                            {
                                let message = res.msg;
                                this.$message.error(LANG[message] || message);
                            }
                            else {
                                this.$message.error(LANG["新增失败,请稍后重试！"] || "新增失败,请稍后重试！");
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                    // this.$http.put(URL.api + ROUTES.PUT.commission.agent, JSON.stringify(obj), URLCONFIG).then((res) => {
                    //     if (res.data.state == 0 && res.data.data) {
                    //         this.updated = true;
                    //         this.$message.success(LANG["新增成功"] || "新增成功");
                    //     }
                    //     else if(res.data.state == 1002)
                    //     {
                    //         let message = res.data.msg;
                    //         this.$message.error(LANG[message] || message);
                    //     }
                    //     else {
                    //         this.$message.error(LANG["新增失败,请稍后重试！"] || "新增失败,请稍后重试！");
                    //     }
					//
                    // })
                } else {

                    this.$.autoAjax('put',URL.api + ROUTES.PUT.commission.agent+'?id='+(this.nowId), obj, {
                        ok: (res) => {
                            if (res.state == 0 && res.data) {
                                this.updated = true;
                                this.$message.success(LANG["修改成功"] || "修改成功");
                            }
                            else if(res.state == 1002)
                            {
                                this.$message.error(LANG[res.msg] || res.msg);
                            }else {
                                this.$message.error(LANG["修改失败，请稍后重试！"] || "修改失败，请稍后重试！");
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                    // this.$http.put(URL.api + ROUTES.PUT.commission.agent+'?id='+(this.nowId), JSON.stringify(obj), URLCONFIG).then((res) => {
                    //     if (res.data.state == 0 && res.data.data) {
                    //         this.updated = true;
                    //         this.$message.success(LANG["修改成功"] || "修改成功");
                    //     }
                    //      else if(res.data.state == 1002)
                    //     {
                    //          this.$message.error(LANG[res.data.msg] || res.data.msg);
                    //     }else {
                    //         this.$message.error(LANG["修改失败，请稍后重试！"] || "修改失败，请稍后重试！");
                    //     }
                    // })
                }
            },

            //表格按钮点击事件
            doHandle(item){
                this.updated = false;
                this.nowId = parseInt(item.row.id)||-1;
                switch (item.fn){
                    case "doEdit":
                        this.doEdit(item.row)
                        break
                    case "doDelete":
                        this.doDelete(item.row)
                        break
                    case "doEnabled":
                        this.doEnabled(item.row)
                        break
                    case "doDisabled":
                        this.doDisabled(item.row)
                        break

                }
            },
            doEnabled(row){
               this.confirmConfig.state = true;
                this.confirmConfig.msg = LANG['确定要启用？'] || '确定要启用？';
                this.confirmConfig.fn = "doEnabled";
                this.confirmConfig.obj = row;
            },
            doDisabled(row)
            {
               this.confirmConfig.state = true;
                this.confirmConfig.msg = LANG['确定要停用？'] || '确定要停用？';
                this.confirmConfig.fn = "doDisabled";
                this.confirmConfig.obj = row;
            },
            //删除
            doDelete(row){
                this.confirmConfig.state = true;
                this.confirmConfig.msg = this.LANG['确定要删除？'] || '确定要删除？';
                this.confirmConfig.fn = "doDelete";
                this.confirmConfig.obj = row;
            },
//            确认删除
            doConfirm(obj){
                let _this = this;
                switch (obj.fn){
                    case "doDelete":
                        let DeleteObj = "&agent_id=0&type=1"

                        this.$.autoAjax('delete',URL.api + ROUTES.DELETE.commission.agent.$+'?id='+(parseInt(this.nowId))+DeleteObj, '', {
                            ok: (res) => {
                                if(res.state == 0 && res.data){
                                    _this.updated = true;
                                    _this.$message.success(LANG["恭喜您，删除成功"] || "恭喜您，删除成功");
                                }else{
                                    _this.$message.error(LANG["删除失败，请稍后重试！"] || "删除失败，请稍后重试！");
                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                        // this.$http.delete(URL.api + ROUTES.DELETE.commission.agent.$+'?id='+(parseInt(this.nowId))+DeleteObj,URLCONFIG).then((res) => {
                        //     if(res.data.state == 0 && res.data.data){
                        //         _this.updated = true;
                        //         _this.$message.success(LANG["恭喜您，删除成功"] || "恭喜您，删除成功");
                        //     }else{
                        //         _this.$message.error(LANG["删除失败，请稍后重试！"] || "删除失败，请稍后重试！");
                        //     }
                        // })
                        break;
                    case "doEnabled":

                            let enabledObj = {type:1, status:1, agent_id:0}

                        this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.agent.$$+'?id='+(_this.nowId), enabledObj, {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.updated = true;
                                    _this.$message.success(LANG["启用成功"] || "启用成功");
                                } else {
                                    _this.$message.error(LANG["启用失败，请稍后重试！"] || "启用失败，请稍后重试！");
                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                            // this.$http.patch(URL.api + ROUTES.PATCH.commission.agent.$$+'?id='+(_this.nowId), JSON.stringify(enabledObj), URLCONFIG).then((res) => {
							//
                            //     if (res.data.state == 0 && res.data.data) {
                            //         _this.updated = true;
                            //         _this.$message.success(LANG["启用成功"] || "启用成功");
                            //     } else {
                            //         _this.$message.error(LANG["启用失败，请稍后重试！"] || "启用失败，请稍后重试！");
                            //     }
							//
                            // })
                    break
                    case "doDisabled":
                        let disObj = {type:1, status:0, agent_id:0}

                        this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.agent.$$+'?id='+(_this.nowId),disObj,  {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.updated = true;
                                    _this.$message.success(LANG["停用成功"] || "停用成功");
                                } else {
                                    _this.$message.error(LANG["停用失败，请稍后重试！"] || "停用失败，请稍后重试！");
                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                        // this.$http.patch(URL.api + ROUTES.PATCH.commission.agent.$$+'?id='+(_this.nowId), JSON.stringify(disObj), URLCONFIG).then((res) => {
						//
                        //         if (res.data.state == 0 && res.data.data) {
                        //             _this.updated = true;
                        //             _this.$message.success(LANG["停用成功"] || "停用成功");
                        //         } else {
                        //             _this.$message.error(LANG["停用失败，请稍后重试！"] || "停用失败，请稍后重试！");
                        //         }
						//
                        //     })
                    break

                }
            },
            //编辑
            doEdit(data){
                let obj = {};
                for(let ele in data)
                {
                  obj[ele] = data[ele]
                }
                //this.isEdit = true;
                this.editId = data.id;
                this.formType = "";
                obj.earn_start = FORMATMONEY(obj.earn_start).toString();
                obj.valid_bet_start = FORMATMONEY(obj.valid_bet_start).toString();
                this.editVisible.state = false;
                let _this = this;
                setTimeout(() => {
                  this.editVisible.state = true;
                  this.formTitel = "修改代理退佣比例"
                  this.formType = "edit";
                  FORMVAL(obj,  _this.formConfigs);
                }, 0)

            },

        },
        computed:{
        },
        mounted(){
        },
        created(){
            this.init()
        }
    }
</script>
<style scoped>
    .btn_right{float:right;margin:0 0 20px 0;}
    .page{position: relative;}
    /*.search .el-form-item__label{width:80px;}*/
    /*.search .el-form-item{width:200px;float:left;margin-bottom: 1px;}*/
    /*.search .el-form .formbtn{float:left;margin-left:10px;padding-top:5px;margin-bottom: 10px;}*/
    /*.search .el-form .outexcel{position: absolute;top:0;right:10px;}*/
</style>
