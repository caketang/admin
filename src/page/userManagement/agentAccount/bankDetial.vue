<template>
    <div id="bankDetail" class="clearfix" v-loading="loading">
     <!--   <el-col>
            <div class="title">{{LANG['银行信息'] || '银行信息'}}</div>
            <div>
                <h5>{{LANG['帐户余额：'] || '帐户余额：'}}{{otherData[0]}}</h5>
                <h5>{{LANG['提款锁定：'] || '提款锁定：'}}{{otherData[1]}}</h5>
            </div>
            <div style="float:right">

            </div>
        </el-col>-->
        <el-row>
            <div  class="state_info font14"><span>{{LANG['注'] || '注'}}:</span>{{LANG['当代理存在真实姓名，新增或编辑银行卡默认户名为代理的真实姓名！'] || '当代理存在真实姓名，新增或编辑银行卡默认户名为代理的真实姓名！'}}</div>
            <el-col  :span="2" class="state_info"><span>{{LANG['帐户余额：'] || '帐户余额：'}}</span><span>{{parseInt(balance) / 100}}</span></el-col>
            <el-col :span="2" class="state_info"><span>{{LANG['提款冻结：'] || '提款冻结：'}}</span><span>{{parseInt(locking)  / 100}}</span></el-col>
            <el-col  :span="20" class="tRight">
                <el-button type="primary" @click="addBank" size="small">{{LANG['新增银行卡'] || '新增银行卡'}}</el-button>
            </el-col>
        </el-row>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="false"
                    :tableIndex="false"
                    :pageSet="false"
                    :isCreated="true"
                    :getData= "getData"
                    @do-handle="doHandle"
                    @get-table-data="getTableData"
                    :updated="updated"
                    :showRefresh="false"
            ></tablegrid>
        </el-col>
        <!--添加银行-->
        <el-col>
            <formEdit :formTitel="formTitel" :formVisible="editVisible" :formConfig="formConfig" :type="type" :labelWidth="labelWidth" @get-form="getForm" :isEdit="isEdit" :formType="formType"></formEdit>

        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
    </div>
</template>
<script type="text/ecmascript-6">
    import  tablegrid from '../../../components/tableGrid.vue'
    import formEdit from '../../../components/formEdit.vue'
    import confirm from '../../../components/confirm.vue';
    export default{
        data(){
            return{
                LANG,
                //表格相关
                columnsUrl:"",
                tableUrl:"",
                //数据相关
                dataGride:[],
                otherData:[],
                //弹窗相关
                formConfig:[
                    {"prop":"bank_id","value":"","label":"银行名称","type":"select",
                        "list":[],
                        "rules":[{"require":true}]},
                    {"prop":"accountname","value":"","type":"text","label":"户名","rules":[{"require":true}]},
                    {"prop":"card","value":"","type":"account","label":"银行帐号","rules":[{"require":true}]},
                    {"prop":"address","value":"","type":"text","label":"开户行","rules":[{"require":true}]},

                ],
                type:"default",
                formTitel:"",
                labelWidth:"90px",
                editVisible:{
                    state:false
                },
                // 是否编辑数据
                isEdit:{
                    state:false
                },
                baseUrl:"",
                updated: false,
                // true需要子组件返回数据
                getData: true,
                balance: '', // 账户余额
                locking: '', // 提款锁定
                formType: "",
                ID: '', // 银行ID, 修改信息要用
                loading: false,
                confirmConfig:{
                    state:false,
                    msg:"",
                    fn:""
                },
                nowId: -1,
                bankArr:[],
            }
        },
        components: {
            tablegrid:tablegrid,
            formEdit:formEdit,
            confirm:confirm
        },
        props:{
            id:Number
        },
        methods: {
            // 页面初始化
            init(){
                this.columnsUrl="/static/json/accoutManage/agentAccount/bankDetial/columns.json"
                this.tableUrl=URL.api + ROUTES.GET.user.agent.balance + '/' + this.id;
                this.baseUrl=URL.api + ROUTES.GET.user.agent.balance + '/' + this.id;
                this.$.autoAjax('get',URL.api+ ROUTES.GET.banks,'', {
                    ok: (res) => {
                        if (res.state !=undefined  && res.state == 0 && res.data.length) {
                            let model= res.data;
                            this.bankArr = model;
                            let formConfig= this.formConfig[0].list;
                            for(let i in model){
                                formConfig.push({
                                    "label": model[i].name,
                                    "value": model[i].id.toString()
                                })
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
            //获取表格数据
            getTableData(obj){

                // 账户余额 提款锁定
                if(obj.allData.balance === null)
                {
                    this.balance = 0;
                }else
                {
                    this.balance = obj.allData.balance;
                }
                if(obj.allData.locking === null)
                {
                    this.locking = 0;
                }else {
                     this.locking = obj.allData.locking;
                }


                let dataGride = this.dataGride;
                let otherData = this.otherData;
                //表格数据
                let model = obj.item;
                let otherModel = obj.allData[0];
                for (let i in model){
                    dataGride.push(model[i]);
                }
                for(let k in otherModel){
                    otherData.push(otherModel[k]);
                }
            },
            //添加银行
            addBank(){
                this.formTitel=LANG['添加银行帐号'] || '添加银行帐号';
                this.editVisible.state = true;
                this.formType="add";
                this.formConfig[1]["disabled"] = false;

            },

            //保存弹窗数据
            getForm( obj ){
                this.updated = false;
                let _this = this;
                let url = "";
                let message = "";
                let bankId = parseInt(obj.formObj.bank_id, 10)
                let data = {};
                data.card = obj.formObj.card;
                data.bank_id = bankId;
                // 找银行名字
                let bankname = bank => bank.id == bankId
                let bankresult = this.bankArr.find(bankname)
                if(bankresult)
                {
                    data.bank_name = bankresult['name']
                }else{
                    _this.$message.error(LANG['未找到银行名称'] || '未找到银行名称');
                    return;
                }
                data.address = obj.formObj.address;
                data.accountname = obj.formObj.accountname;
                data.role = 2;
                data.uid = this.id;
                if(this.formType == "add")
                {
                    url = URL.api+ ROUTES.PUT.user.agent.bank.add;
                }else{
                    url=URL.api+ ROUTES.PUT.user.agent.bank.add+"?id="+this.ID
                }
                this.$http.put(url,data,URLCONFIG).then((res) => {
                    if (res.data.state == 0 && res.data.data) {
                        if(this.formType == "add"){
                            message = LANG['恭喜您，银行帐号添加成功！'] || '恭喜您，银行帐号添加成功！';
                        }else{
                            message = LANG['恭喜您，银行帐号修改成功！'] || '恭喜您，银行帐号修改成功！';
                        }
                        _this.$message.success(message);
                        _this.updated = true;
                    } else {
                        //新增银行卡可能出现的报错提示
                        // if (this.formType == "add") {
                        //     if (res.data.state === 4002) {
                        //         message = LANG['银行帐号添加失败，卡号重复！'] || '银行帐号添加失败，卡号重复！';
                        //     } else if (res.data.state === 4001) {
                        //         message = LANG['银行帐号添加失败，添加银行卡过多，最多只能添加5张！'] || '银行帐号添加失败，添加银行卡过多，最多只能添加5张！';
                        //     } else if (res.data.state === 4003) {
                        //         message = LANG['无权限操作！'] || '无权限操作！';
                        //     } else {
                        //         message = LANG['银行帐号添加失败，请稍后重试！'] || '银行帐号添加失败，请稍后重试！';
                        //     }
                        // }
                        // if(this.formType == "edit")
                        // {
                        //     if (res.data.state === 4003) {
                        //         message = LANG['无权限操作！'] || '无权限操作！';
                        //     } else {
                        //         message = LANG['银行帐号添加失败，请稍后重试！'] || '银行帐号添加失败，请稍后重试！';
                        //     }
                        // }
                        message = LANG[res.data.msg] || res.data.msg;
                        _this.$message.error(message);
                    }
                })


            },
            //表格点击事件
            doHandle(item){
                this.updated = false;
                this.nowId = parseInt(item.row.id) || -1;
                switch (item.fn){
                    case "doEdit":
                        this.doEdit(item.row)
                        break
                    case "doDisable":
                        this.doDisable(item.row)
                        break
                    case "doEnable":
                        this.doEnable(item.row)
                        break
                }
            },
            //修改
            doEdit(row){
                this.formConfig[1]["disabled"] = true;
                this.ID = row.id
                this.formTitel = LANG['修改银行帐号'] || '修改银行帐号';
                this.formType = "";
                setTimeout(() => {
                    let list = this.formConfig[0].list;
                    for(let i in list){
                        if(list[i].label == row['bank_name']){
                            this.formConfig[0]['value'] = list[i].value.toString();
                        }
                    }
                    this.formConfig[1]['value']= row.accountname;
                    this.formConfig[2]['value']= row['card'];
                    this.formConfig[3]['value']= row['address'];
                    this.formType = "edit";
                    this.isEdit.state = true;
                    this.editVisible.state = true;

                }, 500)


            },
            //停用
            doConfirm(obj){
                this.loading = true;
                let _this = this;
                switch (obj.fn){
                    case "start":
                        this.$http.patch(URL.api+ ROUTES.PUT.user.agent.bank.$(_this.nowId),{"status":1},URLCONFIG).then((res)=>{

                            if (res.data.state == 0 && res.data.data) {
                                _this.$message.success(LANG['银行卡启用成功'] || '银行卡启用成功');
                                _this.updated = true;

                            }else if (res.data.state == 4003 || res.data.state == 405 ) {
                               _this.$message.error(LANG['无权限操作！'] || '无权限操作！');
                            }else{
                                _this.$message.error(LANG['银行卡启用失败，请稍后重试'] || '银行卡启用失败，请稍后重试');
                            }
                            _this.loading = false
                        })
                    break;
                    case "stop":
                        this.$http.patch(URL.api+ ROUTES.PUT.user.agent.bank.$(_this.nowId),{"status":0},URLCONFIG).then((res)=>{

                            if (res.data.state == 0&& res.data.data) {
                                _this.$message.success(LANG['银行停用卡成功'] || '银行卡停用成功');
                                _this.updated = true;
                            }else if (res.data.state == 4003 || res.data.state == 405) {
                                _this.$message.error(LANG['无权限操作！'] || '无权限操作！');
                            }else{
                                _this.$message.error(LANG['银行卡停用失败，请稍后重试'] || '银行卡停用失败，请稍后重试');
                            }
                            _this.loading = false
                        })
                    break
                }
            },
            doDisable(row){

                if(parseInt(row.id)){
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (LANG['确定停用'] || '确定停用') +'"'+ row.accountname + '"' + (LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "stop";
                }

            },
            //启用
            doEnable(row){

                if(parseInt(row.id)){
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (LANG['确定启用'] || '确定启用') +'"'+ row.accountname + '"' + (LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "start";
                }

            }
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
<style>
    #bankDetail{padding:20px 0;min-width:800px;}
    #bankDetail .title{text-align: center;width:100%;font-weight: 800;font-size: 18px;margin-bottom: 30px !important;}
</style>
