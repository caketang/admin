<template>
    <div id="artificialTransfer" class="page">
        <el-row>
            <el-col class="search" style="z-index: 10;">
                <el-form :model="formInline" class="demo-form-inline" label-width="75px">
                    <el-form-item :label="LANG['体系'] || '体系'" prop="role"
                                  :rules="{ required: true, message: '请选择用户体系', trigger: 'change' }">
                        <el-select v-model="formInline.role" placeholder="请选择" size="small" @change="clearResult">
                            <el-option v-for="(item,index) in memberTypeList" :label="item.label" :key="index"
                                       :value="item.role"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="LANG['用户名'] || '用户名'" prop="username"
                                  :rules="[{ required: true, message: '请输入用户名称', trigger: 'blur' },{ min: 2, max: 16, message: '长度在 3 到16个字符', trigger: 'blur' }]">
                        <el-input v-model="formInline.username" placeholder="请输入用户名" size="small"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="margin-left: -50px;" type="primary" size="small" @click="doQuery(0)">{{LANG['查询'] || '查询'}}</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col v-loading="loading" element-loading-text="拼命加载中">
                <el-col :span="10" class="mt10" v-if="tableDate.length > 0">
                    <el-button type="primary" size="small" @click="doQuery(1)" style="float: right;margin-bottom: 10px">{{LANG['刷新钱包'] || '刷新钱包'}}</el-button>
                    <div style="width: 80%; font-size: 12px;">
                        <div>
                            <span style="color: red;">真实姓名:</span><span>{{note.truename}}</span>
                        </div>
                        <div v-if="formInline.role == '1'">
                            <span style="color: red;">备注:</span><span>{{note.comment}}</span>
                        </div>
                    </div>
                    <el-table :data="tableDate" border>
                        <el-table-column prop="name" :label="LANG['钱包'] || '钱包'" width="100px"></el-table-column>
                        <el-table-column prop="balance" :label="LANG['钱包余额'] || '钱包余额'" width="120px"></el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <div v-if="scope.row['name'] == '主钱包'">
                                    <el-button v-if="formInline.role == 1" size="small" type="text" v-for="(item,index) in btnGroup" :key="index" v-text="LANG[item.txt] || item.txt"
                                               @click="doHandle(item.fn,scope.row)" style="margin-right: 10px; margin-left: 0px;"></el-button>
                                    <el-button v-if="formInline.role == 2" size="small" type="text" v-for="(item,index) in agent_btnGroup" :key="index" v-text="LANG[item.txt] || item.txt"
                                               @click="doHandle(item.fn,scope.row)" style="margin-right: 10px; margin-left: 0px;">
                                    </el-button>
                                </div>
                                <div v-if="scope.row['name'] == '代理钱包'">
                                    <el-button size="small" type="text" v-text="LANG['转入主钱包'] || '转入主钱包'"
                                               @click="doHandle('childToMaster',scope.row)"></el-button>
                                </div>
                                <div v-if="scope.row['name'] != '主钱包' && scope.row['name'] != '代理钱包' && scope.row['name'] != '总余额'">
                                    <el-button size="small" type="text" v-text="LANG['子转主钱包'] || '子转主钱包'"
                                               @click="doHandle('childToMaster',scope.row)"></el-button>
                                    <el-button size="small" type="text" v-text="LANG['主转子钱包'] || '主转子钱包'"
                                               @click="doHandle('masterToChild',scope.row)"></el-button>
                                    <el-tag class="el-tag-maintenance" type="info" v-if="!scope.row.status">{{LANG['维护中'] || '维护中'}}</el-tag>
                                </div>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="10" :offset="1" class="editform" v-if="tableDate.length > 0 && toggle" style="margin-top: 50px;">
                    <h1>{{LANG[formTitle] || formTitle}}<span>({{LANG[walletTitle] || walletTitle}})</span></h1>
                    <el-form :model="depositForm" :rules="depositFormRules" ref="depositForm" label-width="100px"
                             v-show="formTitle == '手动存款'" class="mt10">
                        <el-form-item :label="LANG['用户名'] || '用户名'" prop="name">
                            <el-input v-model="userCont.name" size="small" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['存入金额'] || '存入金额'" prop="amount">
                            <el-input v-model.number="depositForm.amount" size="small" type="number" onpaste="return false;" placeholder="请填写存入金额。金额只能手动输入，不可粘贴输入"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['优惠金额'] || '优惠金额'" prop="discount">
                            <el-input v-model.number="depositForm.discount" size="small" type="number"  placeholder="请填写优惠金额"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['优惠打码量'] || '优惠打码量'" prop="play_code">
                            <el-input v-model.number="depositForm.play_code" type="number"  size="small"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['存入银行'] || '存入银行'" prop="bank_id">
                            <el-select v-model="depositForm.bank_id" :placeholder="LANG['请选择银行'] || '请选择银行'" size="small"
                                       @change="checkBank">
                                <el-option v-for="item in bankList" :label="LANG[item.label] || item.label" :key="item.id"
                                           :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <!--隐藏卡号-->
                        <el-form-item :label="LANG['银行卡号'] || '银行卡号'" prop="bank_no" style="display: none;">
                            <el-input v-model="depositForm.bank_no" :disabled="true" size="small">
                            </el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['备注'] || '备注'" prop="remarks">
                            <el-input v-model="depositForm.memo" type="textarea" :rows="5" size="small"></el-input>
                        </el-form-item>
                        <div class="formbtn">
                            <el-button type="primary" :plain="true" size="small" @click="doAddDeposit" :disabled="formControlBtn.deposit_boolean">{{LANG['保存'] || '保存'}}
                            </el-button>
                        </div>
                    </el-form>
                    <el-form :model="cashForm" :rules="cashFormRules" ref="cashForm" label-width="90px"
                             v-show="formTitle == '手动提款'" class="mt10">
                        <el-form-item :label="LANG['用户名'] || '用户名'" prop="name">
                            <el-input v-model="userCont.name" size="small" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['提款金额'] || '提款金额'" prop="amount">
                            <el-input v-model.number="cashForm.amount" size="small" type="number" ></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['提出银行'] || '提出银行'" prop="bank_id">
                            <el-select v-model="cashForm.bank_id" :placeholder="LANG['请选择银行'] || '请选择银行'" size="small"
                                       @change="userCheckBank">
                                <el-option v-for="item in userBankList" :label="LANG[item.label] || item.label" :key="item.id"
                                           :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <!--隐藏卡号-->
                        <el-form-item :label="LANG['银行卡号'] || '银行卡号'" prop="bank_no" style="display: none;">
                            <el-input v-model="cashForm.bank_no" :disabled="true" size="small">
                            </el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['备注'] || '备注'" prop="remarks">
                            <el-input v-model="cashForm.memo" type="textarea" :rows="5" size="small"></el-input>
                        </el-form-item>
                        <div class="formbtn">
                            <el-button type="primary" :plain="true" size="small" @click="doCash" :disabled="formControlBtn.cash_boolean">{{LANG['保存'] || '保存'}}</el-button>
                        </div>
                    </el-form>
                    <el-form :model="grantDiscountForm" :rules="grantDiscountFormRules" ref="grantDiscountForm"
                             label-width="120px" v-show="formTitle == '发放优惠'" class="mt10">
                        <el-form-item :label="LANG['用户名'] || '用户名'" prop="name">
                            <el-input v-model="userCont.name" :disabled="true" size="small"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['优惠金额'] || '优惠金额'" prop="amount">
                            <el-input v-model.number="grantDiscountForm.amount" size="small" type="number" ></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['打码量'] || '打码量'" prop="condition">
                            <el-input v-model.number="grantDiscountForm.condition" size="small" type="number" ></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['优惠活动名称'] || '优惠活动名称'" prop="aid">
                            <el-select v-model="grantDiscountForm.aid" :placeholder="LANG['请选择优惠活动名称'] || '请选择优惠活动名称'" size="small">
                                <el-option v-for="(item,index) in discountNameList" :key="index" :label="LANG[item.label] || item.label"
                                           :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item :label="LANG['备注'] || '备注'" prop="memo">
                            <el-input v-model="grantDiscountForm.memo" type="textarea" :rows="5" size="small"></el-input>
                        </el-form-item>
                        <div class="formbtn">
                            <el-button type="primary" size="small" @click="doGrantDiscountForm" :disabled="formControlBtn.discount_boolean">{{LANG['保存'] || '保存'}}</el-button>
                        </div>
                    </el-form>
                    <el-form :model="artificialReduceForm" :rules="artificialReduceFormRules" ref="artificialReduceForm"
                             label-width="120px" v-show="formTitle == '手动减少余额'" class="mt10">
                        <el-form-item :label="LANG['用户名'] || '用户名'" prop="name">
                            <el-input v-model="userCont.name" :disabled="true" size="small"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['减金额'] || '减金额'" prop="amount">
                            <el-input v-model.number="artificialReduceForm.amount" size="small" type="number" ></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['备注'] || '备注'" prop="memo">
                            <el-input v-model="artificialReduceForm.memo" type="textarea" :rows="5"
                                      size="small"></el-input>
                        </el-form-item>
                        <div class="formbtn">
                            <el-button type="primary" size="small" @click="doArtificialReduce" :disabled="formControlBtn.reduce_boolean">{{LANG['保存'] || '保存'}}</el-button>
                        </div>
                    </el-form>
                    <!--<el-form :model="artificialAddForm" :rules="artificialAddFormRules" ref="artificialAddForm"-->
                             <!--label-width="120px" v-show="formTitle == '手动增加余额'" class="mt10">-->
                        <!--<el-form-item :label="LANG['用户名'] || '用户名'" prop="name">-->
                            <!--<el-input v-model="userCont.name" :disabled="true" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item :label="LANG['加金额'] || '加金额'" prop="amount">-->
                            <!--<el-input v-model.number="artificialAddForm.amount" size="small" type="number" ></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item v-if="formInline.role == 1" :label="LANG['打码量'] || '打码量'" prop="withdraw_bet">-->
                            <!--<el-input v-model.number="artificialAddForm.withdraw_bet" size="small" type="number" ></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item :label="LANG['备注'] || '备注'" prop="memo">-->
                            <!--<el-input v-model="artificialAddForm.memo" type="textarea" :rows="5" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<div class="formbtn">-->
                            <!--<el-button type="primary" size="small" @click="doArtificialAdd" :disabled="formControlBtn.add_boolean">{{LANG['保存'] || '保存'}}</el-button>-->
                        <!--</div>-->
                    <!--</el-form>-->
                    <!--<el-form :model="grantRebateForm" :rules="grantRebateFormRules" ref="grantRebateForm"-->
                             <!--label-width="120px" v-show="formTitle == '发放返水'" class="mt10">-->
                        <!--<el-form-item :label="LANG['用户名'] || '用户名'" prop="name">-->
                            <!--<el-input v-model="userCont.name" :disabled="true" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item :label="LANG['返水金额'] || '返水金额'" prop="amount">-->
                            <!--<el-input v-model.number="grantRebateForm.amount" size="small" type="number" ></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item :label="LANG['打码量'] || '打码量'" prop="condition">-->
                            <!--<el-input v-model.number="grantRebateForm.condition" size="small" type="number" ></el-input>-->
                        <!--</el-form-item>-->
                        <!--<el-form-item :label="LANG['备注'] || '备注'" prop="memo">-->
                            <!--<el-input v-model="grantRebateForm.memo" type="textarea" :rows="5" size="small"></el-input>-->
                        <!--</el-form-item>-->
                        <!--<div class="formbtn">-->
                            <!--<el-button type="primary" size="small" @click="doGrantRebate" :disabled="formControlBtn.rebate_boolean">{{LANG['保存'] || '保存'}}</el-button>-->
                        <!--</div>-->
                    <!--</el-form>-->
                    <el-form :model="childToMasterForm" :rules="childToMasterFormRules" ref="childToMasterForm"
                             label-width="80px" v-show="formTitle == '子转主钱包'" class="mt10">
                        <el-form-item :label="LANG['用户名'] || '用户名'" prop="name" >
                            <el-input v-model="userCont.name" :disabled="true" size="small"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['金额'] || '金额'" prop="amount">
                            <el-input v-model.number="childToMasterForm.amount" size="small" type="number" ></el-input>
                        </el-form-item>
                        <el-form-item prop="state">
                            <el-radio v-model="childToMasterForm.status" label="1">{{LANG['实际加钱'] || '实际加钱'}}</el-radio>
                            <!-- <el-radio v-model="childToMasterForm.status" label="2">{{LANG['只补单 修复记录'] || '只补单 修复记录'}}</el-radio> -->
                        </el-form-item>
                        <el-form-item :label="LANG['备注'] || '备注'" prop="memo">
                            <el-input v-model="childToMasterForm.memo" type="textarea" :rows="5" size="small"></el-input>
                        </el-form-item>
                        <div class="formbtn">
                            <el-button type="primary" :plain="true" size="small" @click="doChildToMaster" :disabled="formControlBtn.childtomaster_boolean">{{LANG['保存'] || '保存'}}</el-button>
                        </div>
                    </el-form>
                    <el-form :model="masterToChildForm" :rules="masterToChildFormRules" ref="masterToChildForm"
                             label-width="80px" v-show="formTitle == '主转子钱包'" class="mt10">
                        <el-form-item :label="LANG['用户名'] || '用户名'" prop="name">
                            <el-input v-model="userCont.name" :disabled="true" size="small"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['金额'] || '金额'" prop="amount">
                            <el-input v-model.number="masterToChildForm.amount" size="small" type="number" ></el-input>
                        </el-form-item>
                        <el-form-item prop="state">
                            <el-radio v-model="masterToChildForm.status" label="1">{{LANG['实际加钱'] || '实际加钱'}}</el-radio>
                            <!-- <el-radio v-model="masterToChildForm.status" label="2">{{LANG['只补单 修复记录'] || '只补单 修复记录'}}</el-radio> -->
                        </el-form-item>
                        <el-form-item :label="LANG['备注'] || '备注'" prop="memo">
                            <el-input v-model="masterToChildForm.memo" type="textarea" :rows="5" size="small"></el-input>
                        </el-form-item>
                        <div class="formbtn">
                            <el-button type="primary" :plain="true" size="small" @click="doMasterToChild" :disabled="formControlBtn.mastertochild_boolean">{{LANG['保存'] || '保存'}}</el-button>
                        </div>
                    </el-form>
                </el-col>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default{
        data() {
            // 判断非空正整数
            var checkNumber = function(rule, value, callback) {
                if(typeof value != 'number' ) {
                     callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
                 } else if (Math.sign(value) === -1) {
                     callback(new Error(LANG['不能小于0'] || '不能小于0'));
                  }else {
                    callback()
                 }
            }
            // 判断可非空正整数
            var checkPositiveInteger = function(rule, value, callback) {
                if (value === '') {
                    callback();
                } else {
                    if(typeof value != 'number' ) {
                        callback(new Error(LANG['请输入纯数字'] || '请输入纯数字'));
                    } else if (Math.sign(value) === -1) {
                        callback(new Error(LANG['不能小于0'] || '不能小于0'));
                    }else {
                        callback()
                    }
                }
            }
            return {
                LANG,
                formInline: {
                    username: '',
                    role: '1'
                },
                memberTypeList: [{"label": "会员", "role": "1"}, {"label": "代理", "role": "2"}],
                tableDate: [],
                // 权限控制
                // 是否禁止返水，优惠，取款
                permissions: {
                    is_refuse_rebate: 0,
                    is_refuse_sale: 0,
                    is_refuse_withdraw: 0
                },
                //表格数据路径
                tableDateUrl: '',
                btnGroup: [],
                agent_btnGroup: [],
                //表单标题
                formTitle: "",
                walletTitle: "",
                bankNameList: [],
                discountNameList: [],
                //手动存款
                depositForm: {
                    uid: 0,
                    wid: 0,
                    amount: "",
                    play_code: "",
                    discount: "",
                    bank_id: "",
                    bank_no: "",
                    memo: ""
                    // status: '1',
                    // created_uid : 0
                },
                depositFormRules: {
                    amount: [
                            {validator:checkNumber, required: true , trigger: "blur"}],
                    play_code: [
                            {validator:checkPositiveInteger, trigger: "blur"}],
                    discount: [
                            {validator:checkPositiveInteger, trigger: "blur"}],
                    bank_id: [{required: true, message: LANG['请选择存入银行'] || '请选择存入银行', trigger: 'change'}]
                },
                //手动提现
                cashForm: {
                    uid: 0,
                    wid: 0,
                    amount: "",
                    bank_id: "",
                    bank_no: "",
                    memo: ""
                    // status: '1',
                    // created_uid : 0
                },
                cashFormRules: {
                    amount: [
                            {validator:checkNumber, required: true , trigger: "blur"}],
                    bank_id: [{required: true, message: LANG['请选择提出银行'] || '请选择提出银行', trigger: 'change'}]
                },
                //发放优惠
                grantDiscountForm: {
                    uid: "",
                    amount: "",
                    condition: "",
                    aid: "",
                    memo: ""
                    // status: '1'
                },
                grantDiscountFormRules: {
                    amount: [
                        {validator:checkNumber, required: true , trigger: "blur"}],
                    condition: [
                        {validator:checkPositiveInteger, trigger: "blur"}],
                    aid: [
                        {required: true, message: LANG['请选择优惠活动名称'] || '请选择优惠活动名称', trigger: 'change'}]
                },
                //手动减少余额
                artificialReduceForm: {
                    uid: "",
                    wid: "",
                    amount: "",
                    memo: ""
                },
                artificialReduceFormRules: {
                    amount: [{validator:checkNumber, required: true , trigger: "blur"}]
                },
                //手动增加余额
                artificialAddForm: {
                    uid: "",
                    wid: "",
                    amount: "",
                    withdraw_bet: "",
                    memo: ""
                },
                artificialAddFormRules: {
                    amount: [{validator:checkNumber, required: true , trigger: "blur"}],
                    withdraw_bet: [
                        {validator:checkPositiveInteger, trigger: "blur"}]
                },
                //发放返水
                grantRebateForm: {
                    uid: "",
                    amount: "",
                    condition:"",
                    memo: ""
                },
                grantRebateFormRules: {
                    amount: [
                        {validator:checkNumber, required: true , trigger: "blur"}],
                    condition: [
                        {validator:checkPositiveInteger, trigger: "blur"}]
                },
                //子转主钱包
                childToMasterForm: {
                    uid: "",
                    wid: "",
                    sid: "",
                    amount: "",
                    memo: "",
                    type:"2",
                    status:"1"
                },
                childToMasterFormRules: {
                    amount: [
                      {validator:checkNumber, required: true , trigger: "blur"}]
                },
                //主转子钱包
                masterToChildForm: {
                    uid: "",
                    wid: "",
                    sid: "",
                    amount: "",
                    memo: "",
                    type:"1",
                    status:"1"
                },
                masterToChildFormRules: {
                    amount: [
                            {validator:checkNumber, required: true , trigger: "blur"}]
                },
                //主钱包ID;
                primaryId:null,
                //厅主银行列表
                bankList: [],
                // 用户银行卡列表
                userBankList: [],
                //用户资料
                userCont: {
                    name: '',
                    uid: ''
                },
                toggle: false,
                loading: false,
                // 真实姓名和备注
                note: {
                    truename: '',
                    comment: ''
                },
                // 表单提交按钮控制
                formControlBtn: {
                    deposit_boolean: false,
                    cash_boolean: false,
                    discount_boolean: false,
                    reduce_boolean: false,
                    add_boolean: false,
                    rebate_boolean: false,
                    childtomaster_boolean: false,
                    mastertochild_boolean: false
                }
            }
        },
        props: {
            manualData: Object,
        },
        components: {},
        methods: {
            init(){
                //初始化请求地址
                this.tableDateUrl = URL.api + ROUTES.GET.cash.manual;
                //页面跳转传值初始化
                if(this.manualData.role || this.manualData.username){
                    this.formInline.role = this.manualData.role;
                    this.formInline.username = this.manualData.username;
                    this.doQuery(0);
                }else if(this.manualData.member_name && this.manualData.type){
                    this.formInline.role = this.manualData.type;
                    this.formInline.username = this.manualData.member_name;
                    this.doQuery(0);
                }
                //获取厅主银行卡列表
                let acountsUrl = URL.api + ROUTES.GET.cash.bank.acounts;
				this.$.autoAjax('get', acountsUrl, '', {
					ok: (res) => {
						let model = res.data;
						this.bankList = [];
						for (let i in model) {
							if (model[i].state === 'enabled') {
								this.bankList.push({
									"label": model[i].bank_name + ':' + model[i].card + ':' + model[i].accountname,
									"value": model[i].id,
									"card": model[i].card,
									"id": model[i].id
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
                let activeUrl = URL.api + '/active.short'
				this.$.autoAjax('get',activeUrl, '', {
					ok: (res) => {
						let model = res.data;
						this.discountNameList = [];
						for (let i in model) {
							// if (model[i].status) {
							this.discountNameList.push({
								"label": model[i].name,
								"value": model[i].id
							})
							// }
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                this.btnGroup = [{"txt": "手动公司入款", "fn": "manualDeposit", "id": 1},
                    {"txt": "手动提款", "fn": "manualCash", "id": 2},
                    {"txt": "发放优惠", "fn": "grantDiscount", "id": 3},
                    {"txt": "手动减少余额", "fn": "artificialReduce", "id": 4},
                    //{"txt": "手动增加余额", "fn": "artificialAdd", "id": 5},
                    //{"txt": "发放返水", "fn": "grantRebate", "id": 6}
                    ];
//                 this.formTitle = "手动存款"
                this.agent_btnGroup = [//{"txt": "手动增加余额", "fn": "artificialAdd", "id": 1},
                    {"txt": "手动减少余额", "fn": "artificialReduce", "id": 2}]
            },
            // 选择不同体系将页面搜索结果清空
            clearResult() {
                this.tableDate = [];
            },
            /**
             * 执行查询
             *props refresh 0不强制 1强制
             */
            doQuery(refresh){
                for (let i in this.formControlBtn) {
                    this.formControlBtn[i] = false;
                }
                let formData = this.formInline;
                if (!formData.username || !formData.role) {
                    this.$message.error(this.LANG['请选择体系和填写用户名'] || '请选择体系和填写用户名');
                    return;
                }
                this.loading = true;
                this.toggle = false;
                this.tableDate = [];
                let url = "";
                this.formInline.username = STRINGTRIM(this.formInline.username);
                if (parseInt(formData.role) === 1) {
                    // 用户
                    url = this.tableDateUrl + '?role=' + parseInt(formData.role) + '&username=' + formData.username + '&refresh=' + refresh;
                } else {
                    // 代理
                    url = this.tableDateUrl + '?role=' + parseInt(formData.role) + '&username=' + formData.username;
                }

				this.$.autoAjax('get', url,'', {
					ok: (res) => {
						if (res.state == 0) {
							// 设置真实姓名和备注
							this.note.truename = res.data.truename || '';
							this.note.comment = res.data.comment || '';

							let primaryAccount = res.data.primary,tableDate = res.data.secondary,benefit = res.data.benefit[0];
							let totalArr = {"name": "总余额", "balance": res.data.total_balance};
							this.userCont.name = res.data.username;
							this.userCont.uid = res.data.uid;
                            benefit.status = true;
                            primaryAccount.push(benefit);
							tableDate.forEach((json)=>{
								primaryAccount.push(json);
							});
							this.tableDate = primaryAccount;
							this.tableDate.push(totalArr);
							for (let i = 0; i < this.tableDate.length; i++) {
								(this.tableDate[i]["name"] == "主钱包") && (this.primaryId = this.tableDate[i]["sid"]);
								// 显示金额需要除余100
								this.tableDate[i]["balance"] = this.tableDate[i]["balance"] / 100;
							}
							// 处理权限问题
							if (parseInt(formData.role) === 1) {
								this.permissions['is_refuse_rebate'] = parseInt(res.data.is_refuse_rebate);
								this.permissions['is_refuse_sale'] = parseInt(res.data.is_refuse_sale);
								this.permissions['is_refuse_withdraw'] = parseInt(res.data.is_refuse_withdraw);
							}
							// 获取当前用户的银行卡列表
							this.$.autoAjax('get',URL.api+ROUTES.GET.user.newInfo+"?id="+parseInt(this.userCont.uid)+"&type=bank", '', {
								ok: (res2) => {
									// 清空原来上一个查询留下的数据
									this.userBankList = [];
									let model = res2.data;
									for (let i in model) {
										// 判断该会员下的改银行卡是否启用
										if (model[i].state === 'enabled') {
											this.userBankList.push({
												"label": model[i].bank_name + ':' + model[i].card + ':' + model[i].accountname,
												"value": model[i].id,
												"card": model[i].card,
												"id": model[i].id
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
						} else {
							this.$message.error(this.LANG[res.msg] || res.msg);
						}
						this.loading = false;
					},
					p: () => {
					},
					error: e => {
                        this.loading = false;
                    }
				})
            },
            // 表格按钮事件
            doHandle(fn, row){
                // 对于普通会员需要进行权限判断
                if (parseInt(this.formInline.role) === 1) {
                    if (fn === 'manualCash') {
                        if (this.permissions['is_refuse_withdraw']) {
                            this.$message({message: '禁止提款', type: 'error'});
                            return;
                        }
                    } else if (fn === 'grantDiscount') {
                        if (this.permissions['is_refuse_sale']) {
                            this.$message({message: '禁止优惠', type: 'error'});
                            return;
                        }
                    } else if (fn === 'grantRebate') {
                        if (this.permissions['is_refuse_rebate']) {
                            this.$message({message: '禁止返水', type: 'error'});
                            return;
                        }
                    }
                }
                this.toggle = true;
                switch (fn) {
                    // 手动存款
                    case "manualDeposit":
                        this.manualDeposit(row)
                        break
                    // 手动提款
                    case "manualCash":
                        this.manualCash(row)
                        break
                    // 发放优惠
                    case "grantDiscount":
                        this.grantDiscount(row)
                        break
                    // 手动减少余额
                    case "artificialReduce":
                        this.artificialReduce(row)
                        break
                    // 手动增加余额
                    case "artificialAdd":
                        this.artificialAdd(row)
                        break
                    // 发放返水
                    case "grantRebate":
                        this.grantRebate(row)
                        break
                    // 子转主钱包
                    case "childToMaster":
                        this.childToMaster(row)
                        break
                    // 主转子钱包
                    case "masterToChild":
                        this.masterToChild(row)
                        break
                }
            },
            //卡号
            checkBank(){
                for (let i = 0; i < this.bankList.length; i++) {
                    (this.depositForm.bank_id == this.bankList[i]["value"]) && (this.depositForm.bank_no = this.bankList[i]["card"]);
                }
            },
            userCheckBank(){
                for (let i = 0; i < this.userBankList.length; i++) {
                    (this.cashForm.bank_id == this.userBankList[i]["value"]) && (this.cashForm.bank_no = this.userBankList[i]["card"]);
                }
            },
            //重置FORM
            resetForm(formName) {
                this.$refs[formName].resetFields();
                if (formName == 'grantDiscountForm') {
                    this.grantDiscountForm.ckje = null
                    this.grantDiscountForm.yhje = null
                }
            },
            //手动存款
            manualDeposit(row){
                this.walletTitle = "主钱包";
                this.formTitle = "手动存款";
                this.depositForm.wid = parseInt(row.sid);
                this.depositForm.uid = parseInt(this.userCont.uid);
                this.depositForm.amount = "";
                this.depositForm.play_code = "";
                this.depositForm.discount = "";
                this.depositForm.bank_id = '';
                this.depositForm.bank_no = '';
                this.depositForm.memo = '';
            },
            //验证非空参数
            judgmentProp(obj) {
                let flag = true;
                for (let i = 0; i < obj.length; i++) {
                    if (!obj[i]['name']) {
                        (this.$message({message: obj[i]['message'], type: 'warning'}))
                        flag = false;
                        break;
                    }
                }
                return flag;
            },
            //保存手动存款
            doAddDeposit(){
                // 设置手动存款参数
                let formData = {};
                formData.role = parseInt(this.formInline.role);
                for (let i in this.depositForm) {
                    formData[i] = this.depositForm[i];
                }//需要验证的参数
                let formInline_prop = [{name: formData.amount, message: '请输入存入金额'},{name: formData.bank_id, message: '请选择存入银行'}]
                if (!this.judgmentProp(formInline_prop)) {
                    return;
                }
                //对输入数值参数进行转换
                formData.amount = formData.amount?formData.amount.toFixed(2) * 100:'';
                formData.play_code = formData.play_code?formData.play_code.toFixed(2) * 100:'';
                formData.discount = formData.discount?formData.discount.toFixed(2) * 100:'';
                if (!this.djOperateMoney(formData.amount)) return false;
                this.formControlBtn.deposit_boolean = true;
                let acountsUrl = URL.api + ROUTES.POST.cash.deposit;
				this.$.autoAjax('post',acountsUrl,  formData, {
					ok: (res) => {
						// debugger;
						if (res.state == 0 && res.data) {
							this.$message({message: '保存成功',type: 'success'});
							this.doQuery(1);
						} else {
							this.$message({message: res.msg, type: 'error'});
						}
						this.formControlBtn.deposit_boolean = false;
					},
					p: () => {
					},
					error: e => {
                        this.$message.error(e.responseJSON.msg);
                        this.formControlBtn.deposit_boolean = false;
                    }
				})
            },
            //手动提款
            manualCash(row){
                this.walletTitle = "主钱包";
                this.formTitle = "手动提款";
                this.cashForm.wid = parseInt(row.sid);
                this.cashForm.uid = parseInt(this.userCont.uid);
                this.cashForm.amount = "";
                this.cashForm.bank_id = "";
                this.cashForm.bank_no = "";
                this.cashForm.memo = "";
            },
            //保存手动提款
            doCash(){
                // 设置手动提款参数
                let formData = {};
                formData.role = parseInt(this.formInline.role);
                for (let i in this.cashForm) {
                    formData[i] = this.cashForm[i];
                }

                //需要验证的参数
                let formInline_prop = [{name: formData.bank_id, message: '请选择提出银行'}]
                if (!this.judgmentProp(formInline_prop)) {
                    return;
                }

                formData.amount = this.cashForm.amount?this.cashForm.amount.toFixed(2) * 100:'';

                if (!this.djOperateMoney(formData.amount)) return false;
                this.formControlBtn.cash_boolean = true;
                let acountsUrl = URL.api + ROUTES.POST.cash.withdrawal;
                (formData.name != '' || (this.$message({message: '请查询体系后添加', type: 'warning'})) && false)
                && (formData.amount != null || (this.$message({message: '请输入存入金额', type: 'warning'})) && false)
                && (formData.bank_id != '' || (this.$message({message: '请选择存入银行', type: 'warning'})) && false)
                && this.$.autoAjax('post',acountsUrl, formData, {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							this.$message({message: '保存成功',type: 'success'});
							this.doQuery(1);
						} else {
							this.$message({message: res.msg, type: 'error'});
						}
						this.formControlBtn.cash_boolean = false;
					},
					p: () => {
					},
					error: e => {
                        this.$message.error(e.responseJSON.msg);
                        this.formControlBtn.cash_boolean = false;
					}
				})
            },
            //发放优惠
            grantDiscount(row){
                this.walletTitle = "主钱包";
                this.formTitle = "发放优惠",
                this.grantDiscountForm.uid = parseInt(this.userCont.uid);
                this.grantDiscountForm.amount = "";
                this.grantDiscountForm.condition = "";
                this.grantDiscountForm.aid = "";
                this.grantDiscountForm.memo = "";
            },
            //保存发放优惠
            doGrantDiscountForm(){
                let _this = this;
                let active_name = '';
                for(let i in _this.discountNameList){
                    if(_this.grantDiscountForm.aid === _this.discountNameList[i].value){
                        active_name = _this.discountNameList[i].label;
                    }
                }

                // 设置手动发放优惠参数
                let formData = {};
                formData.role = parseInt(this.formInline.role);
                for (let i in this.grantDiscountForm) {
                    formData[i] = this.grantDiscountForm[i];
                }

                //需要验证的参数
                let formInline_prop = [{name: formData.amount, message: '请输入优惠金额'},{name: formData.aid, message: '请选择优惠活动'}]
                if (!this.judgmentProp(formInline_prop)) {
                    return;
                }

                formData.amount = this.grantDiscountForm.amount?this.grantDiscountForm.amount.toFixed(2) * 100:'';
                formData.condition = this.grantDiscountForm.condition?this.grantDiscountForm.condition.toFixed(2) * 100:'';

                if (!this.djOperateMoney(formData.amount)) return false;
                this.formControlBtn.discount_boolean = true;
                let acountsUrl = URL.api + ROUTES.POST.cash.activity;
                formData.active_name = active_name;

				this.$.autoAjax('post',acountsUrl, formData, {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							this.$message({message: '保存成功', type: 'success'});
							this.doQuery(1);
						} else {
							this.$message({message: res.msg, type: 'error'});
						}
						this.formControlBtn.discount_boolean = false;
					},
					p: () => {
					},
					error: e => {
                        this.$message.error(e.responseJSON.msg);
                        this.formControlBtn.discount_boolean = false;
                    }
				})
            },
            //手动减少余额
            artificialReduce(row){
                // this.artificialReduceForm.wid = row.sid;
                this.walletTitle = "主钱包";
                this.formTitle = "手动减少余额";
                this.artificialReduceForm.wid = parseInt(row.sid);
                this.artificialReduceForm.uid = parseInt(this.userCont.uid);
                this.artificialReduceForm.amount = "";
                this.artificialReduceForm.memo = "";
            },
            //保存手动减少余额
            doArtificialReduce(){
                // 设置手动减少余额参数
                let formData = {};
                formData.role = parseInt(this.formInline.role);
                for (let i in this.artificialReduceForm) {
                    formData[i] = this.artificialReduceForm[i];
                }
                formData.amount =  this.artificialReduceForm.amount?this.artificialReduceForm.amount.toFixed(2) * 100:'';
                if (!this.djOperateMoney(formData.amount)) return false;
                this.formControlBtn.reduce_boolean = true;
                let acountsUrl = URL.api + ROUTES.POST.cash.decrease;
				this.$.autoAjax('post',acountsUrl, formData, {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							this.$message({message: '保存成功', type: 'success'});
							this.doQuery(1);
						} else {
							this.$message({message: res.msg, type: 'error'});
						}
						this.formControlBtn.reduce_boolean = false;
					},
					p: () => {
					},
					error: e => {
                        this.$message.error(e.responseJSON.msg);
                        this.formControlBtn.reduce_boolean = false;
					}
				})
            },
            //手动增加余额
            artificialAdd(row){
                this.walletTitle = "主钱包";
                this.formTitle = "手动增加余额";
                this.artificialAddForm.wid = parseInt(row.sid);
                this.artificialAddForm.uid = parseInt(this.userCont.uid);
                this.artificialAddForm.amount = '';
                this.artificialAddForm.withdraw_bet = '';
                this.artificialAddForm.memo = '';

            },
            //保存手动增加余额
            doArtificialAdd(){
                // 设置手动增加余额参数
                let formData = {};
                formData.role = parseInt(this.formInline.role);
                for (let i in this.artificialAddForm) {
                    formData[i] = this.artificialAddForm[i];
                }
                //需要验证的参数
                // 手动增加金额代理没有打码量
                let formInline_prop = formData.role == 1 ? [{name: formData.amount, message: '请输入加金额'}] : [{name: formData.amount, message: '请输入加金额'}]
                if (!this.judgmentProp(formInline_prop)) {
                    return;
                }
                formData.amount = this.artificialAddForm.amount?this.artificialAddForm.amount.toFixed(2) * 100:'';
                formData.withdraw_bet = this.artificialAddForm.withdraw_bet?this.artificialAddForm.withdraw_bet.toFixed(2) * 100:'';
                if (!this.djOperateMoney(formData.amount)) return false;
                this.formControlBtn.add_boolean = true;
                // console.log(JSON.stringify(formData));
                let acountsUrl = URL.api + ROUTES.POST.cash.increase;
				this.$.autoAjax('post',acountsUrl, formData,  {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							this.$message({message: '保存成功',type: 'success'});
							this.doQuery(1);
						} else {
							this.$message({message: res.msg, type: 'error'});
						}
						this.formControlBtn.add_boolean = false;
					},
					p: () => {
					},
					error: e => {
                        this.$message.error(e.responseJSON.msg);
                        this.formControlBtn.add_boolean = false;
					}
				})
            },
            //发放返水
            grantRebate(row){
                this.walletTitle = "主钱包";
                this.formTitle = "发放返水";
                this.grantRebateForm.uid = parseInt(this.userCont.uid);
                this.grantRebateForm.amount = '';
                this.grantRebateForm.condition = '';
                this.grantRebateForm.memo = '';
            },
            //保存发放返水
            doGrantRebate(){
                // 设置手动发放反水参数
                let formData = {};
                formData.role = parseInt(this.formInline.role);
                for (let i in this.grantRebateForm) {
                    formData[i] = this.grantRebateForm[i];
                }
                //需要验证的参数
                let formInline_prop = [{name: formData.amount, message: '请输入返水金额'}]
                if (!this.judgmentProp(formInline_prop)) {
                    return;
                }
                formData.amount = this.grantRebateForm.amount?this.grantRebateForm.amount.toFixed(2) * 100:'';
                formData.condition = this.grantRebateForm.condition?this.grantRebateForm.condition.toFixed(2) * 100:'';
                if (!this.djOperateMoney(formData.amount)) return false;
                this.formControlBtn.rebate_boolean = true;
                let acountsUrl = URL.api + ROUTES.POST.cash.rebate;
				this.$.autoAjax('post',acountsUrl, formData, {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							this.$message({message: '保存成功',type: 'success'});
							this.doQuery(1);
						} else {
							this.$message({message: res.msg, type: 'error'});
						}
						this.formControlBtn.rebate_boolean = false;
					},
					p: () => {
					},
					error: e => {
                        this.$message.error(e.responseJSON.msg);
                        this.formControlBtn.rebate_boolean = false;
					}
				})
            },
            //子转主钱包
            childToMaster(row){
                this.walletTitle = row.name;
                this.formTitle = "子转主钱包";
                this.childToMasterForm.uid = parseInt(this.userCont.uid);
                this.childToMasterForm.wid = parseInt(this.primaryId);
                this.childToMasterForm.sid = parseInt(row.sid);
                this.childToMasterForm.amount = '';
                this.childToMasterForm.memo = '';
                this.childToMasterForm.gameType = row.gameType;
            },
            //保存子转主钱包
            doChildToMaster(){
                // 设置子转主钱包参数
                let formData = {};
                formData.role = parseInt(this.formInline.role);
                for (let i in this.childToMasterForm) {
                    formData[i] = this.childToMasterForm[i];
                }

                //需要验证的参数
                let formInline_prop = [{name: formData.amount, message: '请输入金额'}]
                if (!this.judgmentProp(formInline_prop)) {
                    return;
                }
                formData.amount = this.childToMasterForm.amount?this.childToMasterForm.amount.toFixed(2) * 100:'';
                if (!this.djOperateMoney(formData.amount)) return false;
                this.formControlBtn.childtomaster_boolean = true;
                let acountsUrl = URL.api + ROUTES.POST.cash.childOrmaster;
				this.$.autoAjax('post',acountsUrl, formData, {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							this.$message({message: '保存成功',type: 'success'});
							this.doQuery(1);
						} else {
							this.$message({message: res.msg,type: 'error'});
						}
						this.formControlBtn.childtomaster_boolean = false;
					},
					p: () => {
					},
					error: e => {
                        this.$message.error(e.responseJSON.msg);
                        this.formControlBtn.childtomaster_boolean = false;
					}
				})
            },
            //主转子钱包
            masterToChild(row){
                this.walletTitle = row.name;
                this.formTitle = "主转子钱包"
                this.masterToChildForm.uid = parseInt(this.userCont.uid);
                this.masterToChildForm.wid = parseInt(this.primaryId);
                this.masterToChildForm.sid = parseInt(row.sid);
                this.masterToChildForm.amount = '';
                this.masterToChildForm.memo = '';
                this.masterToChildForm.gameType = row.gameType;
            },
            //保存主转子钱包
            doMasterToChild(){
                // 设置手动主转子钱包参数
                let formData = {};
                formData.role = parseInt(this.formInline.role);
                for (let i in this.masterToChildForm) {
                    formData[i] = this.masterToChildForm[i];
                }

                //需要验证的参数
                let formInline_prop = [{name: formData.amount, message: '请输入金额'}]
                if (!this.judgmentProp(formInline_prop)) {
                    return;
                }

                formData.amount = this.masterToChildForm.amount?this.masterToChildForm.amount.toFixed(2) * 100:'';

                if (!this.djOperateMoney(formData.amount)) return false;
                this.formControlBtn.mastertochild_boolean = true;
                let acountsUrl = URL.api + ROUTES.POST.cash.childOrmaster;

				this.$.autoAjax('post',acountsUrl, formData, {
					ok: (res) => {
						if (res.state == 0 && res.data) {
							this.$message({message: '保存成功', type: 'success'});
							this.doQuery(1);
						} else {
							this.$message({message: res.msg, type: 'error'});
						}
						this.formControlBtn.mastertochild_boolean = false;
					},
					p: () => {
					},
					error: e => {
                        this.$message.error(e.responseJSON.msg);
                        this.formControlBtn.mastertochild_boolean = false;
					}
				})
            },
            // 判断操作金额
            djOperateMoney(money) {
                if (parseInt(money) > 999999999) {
                    this.$message({message: '操作金额不得大于9999999', type: 'error'});
                    return false;
                } else {
                    return true;
                }
            }
        },
        computed: {},
        mounted(){
        },
        created(){
            this.init()
        },
        activated() {
            setTimeout(() => {
                this.init();
            }, 500)
        }
    }
</script>
<style scoped>
    .page {
        position: relative;
    }

    .search {
        margin-bottom: 10px;
    }

    .search .el-form-item__label {
        width: 80px;
    }

    .search .el-form-item {
        width: 200px;
        float: left;
        margin-bottom: 1px;
    }

    .search .el-form-item.lg {
        width: 330px;
        float: left;
    }

    .search .el-form .el-col .line {
        text-align: center;
    }

    .search .el-form .formbtn {
        float: left;
        margin-left: 10px;
        padding-top: 5px;
    }

    .search .el-form .outexcel {
        position: absolute;
        top: 0;
        right: 10px;
    }

    .editform {
        border: 1px solid #ccc;
        padding: 20px;
    }

    .editform .el-form .formbtn {
        margin-left: 100px;
        padding-top: 5px
    }
    .page .el-tag-maintenance {
        margin-left: 10px;
    }
</style>
