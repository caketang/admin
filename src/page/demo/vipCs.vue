<template>
    <div id="vipcs" class="vipDialog w100">
        <el-row>
            <el-col :span="24" v-if="!oddsToggle">
                <el-button type="primary" class="addManage" @click="doAdd" v-text="_('新 增')"></el-button>
                <!--编辑界面-->
                <el-dialog :title="editFormTtile" v-model="editFormVisible" class="fromTitle">
                    <el-form :model="editForm" :rules="editFormRules" ref="editForm">
                        <el-form-item :label="_('会员币別')" prop="templateType">
                            <el-select v-model="editForm.templateLocal" :placeholder="_('请选择')">
                                <el-option
                                        v-for="item in states"
                                        :label="item.label"
                                        :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <!--入款相关-->
                        <el-col :span="24" class="mb20">
                            <div class="grid-content bg-purple-dark" style="text-align: center;">入款相关</div>
                        </el-col>
                        <el-row :gutter="22">
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>线上最低入款金额</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="onMinMoney">
                                    <el-input v-model="editForm.onMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <div class="grid-content bg-purple">线下最低入款金额</div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="upMinMoney">
                                    <el-input v-model="editForm.upMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="22">
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>线上最高入款金额</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="onMinMoney">
                                    <el-input v-model="editForm.onMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>线下最高入款金额</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="upMinMoney">
                                    <el-input v-model="editForm.upMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="22">
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>线上入款流水倍数</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="onMinMoney">
                                    <el-input v-model="editForm.onMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>线下入款流水倍数</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="upMinMoney">
                                    <el-input v-model="editForm.upMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="22">
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>微信入款手续费比例(%)</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="onMinMoney">
                                    <el-input v-model="editForm.onMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>支付宝入款手续费比例(%)</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="upMinMoney">
                                    <el-input v-model="editForm.upMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <!--出款相关-->
                        <el-col :span="24" class="mb20">
                            <div class="grid-content bg-purple-dark" style="text-align: center;">出款相关</div>
                        </el-col>
                        <el-row :gutter="22">
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>每次最低出款金额</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="onMinMoney">
                                    <el-input v-model="editForm.onMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>每日出款次数限制</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="upMinMoney">
                                    <el-input v-model="editForm.upMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="22">
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>每次最高出款金额</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="onMinMoney">
                                    <el-input v-model="editForm.onMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>每日出款免手续费笔数</span>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="upMinMoney">
                                    <el-input v-model="editForm.upMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="22">
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>提现行政费百分比（%）</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="onMinMoney">
                                    <el-input v-model="editForm.onMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>行政费上限</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="upMinMoney">
                                    <el-input v-model="editForm.upMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="22">
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>提现手续费比例（%）</span></div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="onMinMoney">
                                    <el-input v-model="editForm.onMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <div class="grid-content bg-purple"><span>免稽核额度</span>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item prop="upMinMoney">
                                    <el-input v-model="editForm.upMinMoney" auto-complete="off"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col><label>稽核不通过是限制出款

                                <el-checkbox v-model="checked"></el-checkbox>
                            </label></el-col>
                        </el-row>
                        <!--公司入款优惠-->
                        <!--<el-row :gutter="22">-->
                            <!--<el-col>-->
                                <!--&lt;!&ndash;首次优惠&ndash;&gt;-->
                                <!--<el-radio-group v-model="radio2" class="w100">-->
                                    <!--<el-col :span="3">-->
                                        <!--<el-radio :label="1" style="line-height:36px;">{{_('首次优惠')}}</el-radio>-->
                                    <!--</el-col>-->
                                    <!--<el-col :span="5">-->
                                        <!--<el-radio :label="2">{{_('固定奖金')}}-->


                                            <!--<el-input auto-complete="off" class="groupBuying"></el-input>-->
                                        <!--</el-radio>-->
                                    <!--</el-col>-->
                                    <!--<el-col :span="9">-->
                                        <!--<el-radio :label="3">{{_('存款百分比%')}}-->


                                            <!--<el-input auto-complete="off" class="groupBuying"></el-input>-->
                                            <!--<span>上限</span>-->
                                            <!--<el-input auto-complete="off" class="groupBuying"></el-input>-->
                                        <!--</el-radio>-->
                                    <!--</el-col>-->
                                    <!--<el-col :span="7">-->
                                        <!--<el-form-item :label="_('提款条件:(存款+优惠)X')" prop="templateFT">-->
                                            <!--<el-input class="groupBuying" auto-complete="off"></el-input>-->
                                        <!--</el-form-item>-->
                                    <!--</el-col>-->
                                <!--</el-radio-group>-->
                                <!--&lt;!&ndash;每次优惠&ndash;&gt;-->
                                <!--<el-radio-group v-model="radio2" class="w100">-->
                                    <!--<el-col :span="3">-->
                                        <!--<el-radio :label="1" style="line-height:36px;">{{_('每次优惠')}}</el-radio>-->
                                    <!--</el-col>-->
                                    <!--<el-col :span="5">-->
                                        <!--<el-radio :label="2">{{_('固定奖金')}}-->


                                            <!--<el-input auto-complete="off" class="groupBuying"></el-input>-->
                                        <!--</el-radio>-->
                                    <!--</el-col>-->
                                    <!--<el-col :span="9">-->
                                        <!--<el-radio :label="3">{{_('存款百分比%')}}-->


                                            <!--<el-input auto-complete="off" class="groupBuying"></el-input>-->
                                            <!--<span>上限</span>-->
                                            <!--<el-input auto-complete="off" class="groupBuying"></el-input>-->
                                        <!--</el-radio>-->
                                    <!--</el-col>-->
                                    <!--<el-col :span="7">-->
                                        <!--<el-form-item :label="_('提款条件:(存款+优惠)X')" prop="templateFT">-->
                                            <!--<el-input class="groupBuying" auto-complete="off"></el-input>-->
                                        <!--</el-form-item>-->
                                    <!--</el-col>-->
                                <!--</el-radio-group>-->
                                <!--<lable>-->
                                    <!--<el-checkbox v-model="checked"></el-checkbox>-->
                                    <!--{{_('放弃所有优惠')}}-->

                                <!--</lable>-->
                            <!--</el-col>-->
                        <!--</el-row>-->
                        <!--线上入款优惠-->
                        <el-row :gutter="22">
                            <el-col :span="24">
                                <!--首次优惠-->
                                <el-radio-group v-model="radio2" class="w100 fastAct">
                                    <el-radio class="actInput" :label="1" style="line-height:36px;">{{_('首次优惠')}}</el-radio>
                                    <el-radio class="actInput" :label="2">{{_('固定奖金')}}
                                        <el-input auto-complete="off" class="groupBuying"></el-input>%
                                    </el-radio>
                                    <el-radio class="actInput" :label="3">{{_('存款百分比%')}}
                                        <el-input auto-complete="off" class="groupBuying"></el-input>
                                        <span>上限</span>
                                        <el-input auto-complete="off" class="groupBuying"></el-input>
                                    </el-radio>
                                    <el-col :span="7" class="actInput">
                                    <el-form-item  :label="_('提款条件:(存款+优惠)X')" prop="templateFT">
                                        <el-input class="groupBuying" auto-complete="off"></el-input>
                                    </el-form-item>
                                    </el-col>
                                </el-radio-group>
                                <!--每次优惠-->
                                <el-radio-group v-model="radio2" class="w100 fastAct">
                                    <el-radio class="actInput" :label="1" style="line-height:36px;">{{_('首次优惠')}}</el-radio>
                                    <el-radio class="actInput" :label="2">{{_('固定奖金')}}
                                        <el-input auto-complete="off" class="groupBuying"></el-input>%
                                    </el-radio>
                                    <el-radio class="actInput" :label="3">{{_('存款百分比%')}}
                                        <el-input auto-complete="off" class="groupBuying"></el-input>
                                        <span>上限</span>
                                        <el-input auto-complete="off" class="groupBuying"></el-input>
                                    </el-radio>
                                    <el-col :span="7" class="actInput">
                                        <el-form-item  :label="_('提款条件:(存款+优惠)X')" prop="templateFT">
                                            <el-input class="groupBuying" auto-complete="off"></el-input>
                                        </el-form-item>
                                    </el-col>
                                </el-radio-group>
                                <label>
                                    <el-checkbox v-model="checked"></el-checkbox>
                                    {{_('放弃所有优惠')}}

                                </label>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button type="primary" :loading="editLoading">{{_(btnEditText)}}</el-button>
                        <el-button @click.native="resetForm">{{_('取消')}}</el-button>
                    </div>
                </el-dialog>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                radio2: 2,
                editFormVisible: false,
                states: [{
                    value: "0",
                    label: 'RMB 人民币'
                }, {
                    value: "1",
                    label: '$ 美元'
                }, {
                    value: "2",
                    label: '£ 英镑'
                }, {
                    value: "3",
                    label: '€ 欧元'
                }, {
                    value: "4",
                    label: '￥ CNY'
                }],
                editForm: {
                    id: -1,
                    templateType: '',
                    onMinMoney: '',//线上最低存款金额
                    upMinMoney: '',//线下最低存款金额

                },
                editFormRules: {
                    templateType: [
                        {required: true, message: this._('请输入文案标题'), trigger: 'blur'}
                    ],
                },

            }
        },
        components: {},
        methods: {
            doAdd(){
                if (!this.copyAdd) {
                    this.editForm.templateName = "";
                    this.editForm.templateDescribe = "";
                    this.editForm.templateState = "";
                    this.copyAdd = false;
                }
                this.editFormVisible = true;
                this.editFormTtile = '会员等级设定';
                this.btnEditText = "保存";
            },
        },
    }
</script>
<style scopend>
    .vipDialog .el-form-item__content {
        margin: 0 auto;
    }

    .vipDialog .grid-content {
        line-height: 36px;
        text-align: right;
        padding-right: 8px;
    }

    .vipDialog .el-dialog {
        min-width: 860px;
    }

    .vipDialog .groupBuying {
        width: auto;
        max-width: 80px;
    }

    .el-row {
        margin-bottom: 20px;

    &
    :last-child {
        margin-bottom: 0;
    }

    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .mb20 div{margin:20px 0;}
    .fastAct .actInput{float:left;margin-left:20px;}
    .fastAct .actInput:first-child{margin-left: 0;}
</style>