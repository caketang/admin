
<template>
    <div id="agentcommmiss" >
        <el-col :span="2" :push="22">
              <el-button type="primary" @click="doAdd" v-text="LANG['新增'] || '新增'" size="small"></el-button>
        </el-col>
        <el-col>
            <CommissionSet  :tableUrl="tableUrl" @do-handle="doHandle" :tableIndex="false"  :updated="updated" ></CommissionSet>
        </el-col>
        <!--修改代理佣金设置-->
         <el-col :span="24">
            <formEdit :formTitel="formTitel" :formVisible="editVisible" :formConfig="formConfigs" :type="type"
                      :labelWidth="labelWidth" @get-form="getForm" :isEdit="isEdit" :formType="formType"></formEdit>
        </el-col>
    </div>
</template>
<script>
    import formEdit from '../../../components/formEdit.vue'
    import CommissionSet from '../../../components/CommissionSet.vue'
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
            return {
                editVisible: {
                    state: false
                },
                 // 是否编辑数据
                isEdit: {
                    state: false
                },

                type: "default",
                formConfigs:[
                    {"prop": "earn_start", "value": "", "type": "text", "label": "总公司输赢总额", "rules": [{"require": true}, {"fns": checkNumber}]},
                    {"prop": "valid_user", "value": "", "type": "text", "label": "当月有效会员", "rules": [{"require": true}, {"fns": checkIntNumber}]},
                    {"prop": "sport_bkge", "value": "", "type": "text", "label": "退佣比例(%)体育", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "game_bkge", "value": "", "type": "text", "label": "退佣比例(%)电子", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "lottery_bkge", "value": "", "type": "text", "label": "退佣比例(%)彩票", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "video_bkge", "value": "", "type": "text", "label": "退佣比例(%)视讯", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "valid_bet_start", "value": "", "type": "text", "label": "有效投注额", "rules": [{"require": true}, {"fns": checkNumber}]},
                    {"prop": "sport_rebet", "value": "", "type": "text", "label": "退水比例(%)体育", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "game_rebet", "value": "", "type": "text", "label": "退水比例(%)电子", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "lottery_rebet", "value": "", "type": "text", "label": "退水比例(%)彩票", "rules": [{"require": true}, {"fns":checkPercent}]},
                    {"prop": "video_rebet", "value": "", "type": "text", "label": "退水比例(%)视讯",  "rules": [{"require": true}, {"fns":checkPercent}]}


                ],
                LANG,
                formLabelWidth:"200px",
                labelWidth: "150px",
                formTitel: '',
                formType: "",
                tableVisibilty: false,
                editId: -1,
                editStatus:-1,
                tableUrl:'',
                nowId:-1,
                updated: false,
            }
        },
        components: {
            formEdit: formEdit,
            CommissionSet:CommissionSet,
        },
        props:{
            id: Number,
        },
        methods: {
            init()
            {
                let _this = this;
                this.tableUrl = URL.api + ROUTES.GET.user.agent.commission + '?id=' + parseInt(this.id)+'&type=2';
            },
            doAdd(){
                this.updated = false;
                this.formType = "add";
                this.formTitel = "新增代理佣金";
                this.isEdit.state = false;
                this.editVisible.state = true;
            },
            doEdit(data)
            {
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
                  this.formTitel = "修改代理佣金"
                  this.formType = "edit";
                  FORMVAL(obj,  _this.formConfigs);
                }, 0)
            },
            getForm(obj)
            {
                this.updated = false;
                let _this = this;
                obj.formObj.earn_start = parseInt(obj.formObj.earn_start)*100;
                obj.formObj.valid_bet_start = parseInt(obj.formObj.valid_bet_start)*100;
                obj.formObj.type = 2;
                obj.formObj.agent_id = this.id;
                if(this.formType === "edit")
                {

                    this.$.autoAjax('put',URL.api + ROUTES.PUT.commission.agent+"/"+(this.editId), obj.formObj, {
                        ok: (res) => {
                            if(res.state == 0 && res.data)
                            {
                                this.$message.success(LANG['修改代理佣金成功'] || '修改代理佣金成功')
                                this.updated = true;

                            }else if(res.state == 1002 && res.data )
                            {
                                let message = res.message;
                                this.$message.error(LANG[message] || message);

                            }else{
                                this.$message.error(LANG['修改代理佣金失败'] || '修改代理佣金失败')
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                  //  this.$http.put(URL.api + ROUTES.PUT.commission.agent+"/"+(this.editId), obj.formObj, URLCONFIG).then((res) =>{
				  //
                  //   if(res.state == 0 && res.data)
                  //   {
                  //       this.$message.success(LANG['修改代理佣金成功'] || '修改代理佣金成功')
                  //       this.updated = true;
				  //
                  //   }else if(res.state == 1002 && res.data )
                  //   {
                  //       let message = res.message;
                  //       this.$message.error(LANG[message] || message);
				  //
                  //   }else{
                  //       this.$message.error(LANG['修改代理佣金失败'] || '修改代理佣金失败')
                  //   }
                  // })
                }else{

                    this.$.autoAjax('put',URL.api + ROUTES.PUT.commission.agent, obj.formObj, {
                        ok: (res) => {
                            if(res.state == 0 && res.data)
                            {
                                this.$message.success(LANG['新增代理佣金成功'] || '新增代理佣金成功')
                                this.updated = true;

                            }else
                            if(res.state == 1002 && res.data )
                            {
                                let message = res.message;
                                this.$message.error(LANG[message] || message);

                            }else{
                                this.$message.error(LANG['新增代理佣金失败'] || '新增代理佣金失败')
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                  // this.$http.put(URL.api + ROUTES.PUT.commission.agent, obj.formObj, URLCONFIG).then((res) =>{
				  //
                  //   if(res.state == 0 && res.data)
                  //   {
                  //       this.$message.success(LANG['新增代理佣金成功'] || '新增代理佣金成功')
                  //       this.updated = true;
				  //
                  //   }else
                  //   if(res.state == 1002 && res.data )
                  //   {
                  //       let message = res.message;
                  //       this.$message.error(LANG[message] || message);
				  //
                  //   }else{
                  //       this.$message.error(LANG['新增代理佣金失败'] || '新增代理佣金失败')
                  //   }
                  // })
                }

            },
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
            doDisabled(obj)
            {
                  this.updated = false;
                  let data = {type:2, status:0, agent_id: this.id}

                this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.agent.$(obj.id), data, {
                    ok: (res) => {
                        if(res.state == 0 && res.data)
                        {
                            this.$message.success(LANG['代理佣金停用成功'] || '代理佣金停用成功')
                            this.updated = true;

                        }else{
                            this.$message.error(LANG['代理佣金停用失败'] || '代理佣金停用失败')
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                //   this.$http.patch(URL.api + ROUTES.PATCH.commission.agent.$(obj.id), data, URLCONFIG).then((res) =>{
				//
                //     if(res.state == 0 && res.data)
                //     {
                //         this.$message.success(LANG['代理佣金停用成功'] || '代理佣金停用成功')
                //         this.updated = true;
				//
                //     }else{
                //         this.$message.error(LANG['代理佣金停用失败'] || '代理佣金停用失败')
                //     }
                // })
            },
            doEnabled(obj)
            {
                  this.updated = false;
                  let data = {type:2, status:1, agent_id: this.id}

                this.$.autoAjax('patch',URL.api + ROUTES.PATCH.commission.agent.$(obj.id),data, {
                    ok: (res) => {
                        if(res.data.state == 0 && res.data.data)
                        {
                            this.$message.success(LANG['代理佣金启用成功'] || '代理佣金启用成功')
                            this.updated = true;

                        }else{
                            this.$message.error(LANG['代理佣金启用失败'] || '代理佣金启用失败')
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                //   this.$http.patch(URL.api + ROUTES.PATCH.commission.agent.$(obj.id), JSON.stringify(data), URLCONFIG).then((res) =>{
				//
                //     if(res.data.state == 0 && res.data.data)
                //     {
                //         this.$message.success(LANG['代理佣金启用成功'] || '代理佣金启用成功')
                //         this.updated = true;
				//
                //     }else{
                //         this.$message.error(LANG['代理佣金启用失败'] || '代理佣金启用失败')
                //     }
                // })
            },
            doDelete(obj)
            {   this.updated = false;
                let idStr = '?agent_id='+this.id+"&type=2";

                this.$.autoAjax('delete', URL.api + ROUTES.DELETE.commission.agent.$(obj.id)+idStr, '', {
                    ok: (res) => {
                        if(res.state == 0 && res.data)
                        {
                            this.$message.success(LANG['删除代理佣金成功'] || '删除代理佣金成功')
                            this.updated = true;

                        }else{
                            this.$message.error(LANG['删除代理佣金失败'] || '删除代理佣金失败')
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.delete(URL.api + ROUTES.DELETE.commission.agent.$(obj.id)+idStr, URLCONFIG).then((res) =>{
                //   if(res.data.state == 0 && res.data.data)
                //     {
                //         this.$message.success(LANG['删除代理佣金成功'] || '删除代理佣金成功')
                //         this.updated = true;
				//
                //     }else{
                //         this.$message.error(LANG['删除代理佣金失败'] || '删除代理佣金失败')
                //     }
                // })
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
.change{
    color:#13CE66;
}
</style>
