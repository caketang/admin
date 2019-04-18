<template>
    <div id="userLevelSet" class="w60">
        <!--此处需要要改-->
        <el-col :span="24">
            <el-col :span="20" style="margin-bottom: 5px;">
                <h1>{{setName}}{{LANG['的层级设定'] || '的层级设定'}}</h1>
                <span class="help_red">{{LANG['注:每日出款次数0为不设上限'] || '注:每日出款次数0为不设上限'}}</span>
            </el-col>
        </el-col>
        <el-form :model="editForm" ref="editForm">
            <!--入款相关-->
            <!--<el-col :span="24">-->
                <!--<div class="grid-content bg-purple-dark mb10" style="text-align: center;line-height: 36px;">{{LANG['入款相关'] || '入款相关'}}</div>-->
            <!--</el-col>-->
            <!--<el-row :gutter="22" >-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['微信入款最低'] || '微信入款最低'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.wechat.min"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '请输入线上最低微信入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.wechat.min" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple">{{LANG['微信入款最高'] || '微信入款最高'}}</div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.wechat.max"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '公司最高微信入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.wechat.max" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row :gutter="22" >-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['支付宝入款最低'] || '支付宝入款最低'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.alipay.min"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '请输入线上最低支付宝入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.alipay.min" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple">{{LANG['支付宝入款最高'] || '支付宝入款最高'}}</div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.alipay.max"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '公司最高支付宝入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.alipay.max" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row :gutter="22" >-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['QQ钱包入款最低'] || 'QQ钱包入款最低'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.qqpay.min"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '请输入线上最低QQ钱包入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.qqpay.min" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple">{{LANG['QQ钱包入款最高'] || 'QQ钱包入款最高'}}</div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.qqpay.max"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '公司最高QQ钱包入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.qqpay.max" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row :gutter="22" >-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['网银入款最低'] || '网银入款最低'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.cyberbank.min"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '请输入线上最低网银入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.cyberbank.min" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple">{{LANG['网银入款最高'] || '网银入款最高'}}</div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.cyberbank.max"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '公司最高网银入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.cyberbank.max" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row :gutter="22" >-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['京东入款最低'] || '京东入款最低'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.jdpay.min"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '请输入线上最低京东入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.jdpay.min" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple">{{LANG['京东入款最高'] || '京东入款最高'}}</div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.jdpay.max"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '公司最高京东入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.jdpay.max" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row :gutter="22" >-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['财付通入款最低'] || '财付通入款最低'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.tenpay.min"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '请输入线上最低财付通入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.tenpay.min" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple">{{LANG['财付通入款最高'] || '财付通入款最高'}}</div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.tenpay.max"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '公司最高财付通入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.tenpay.max" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row :gutter="22" >-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['快捷支付入款最低'] || '快捷支付入款最低'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.unionpay.min"-->
                                  <!--:rules="[-->
                                          <!--{ required: true, message: '请输入线上最低快捷付入款金额'},-->
                                          <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.unionpay.min" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple">{{LANG['快捷支付入款最高'] || '快捷支付入款最高'}}</div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.unionpay.max"-->
                                  <!--:rules="[-->
                                          <!--{ required: true, message: '公司最高快捷支付入款金额'},-->
                                          <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.unionpay.max" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row :gutter="22" >-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['百度支付入款最低'] || '百度支付入款最低'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.baidupay.min"-->
                                  <!--:rules="[-->
                                          <!--{ required: true, message: '请输入线上最低百度支付入款金额'},-->
                                          <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.baidupay.min" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple">{{LANG['百度支付入款最高'] || '百度支付入款最高'}}</div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.baidupay.max"-->
                                  <!--:rules="[-->
                                          <!--{ required: true, message: '公司最高百度支付入款金额'},-->
                                          <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.baidupay.max" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row :gutter="22" >-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['点卡支付入款最低'] || '点卡支付入款最低'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.kapay.min"-->
                                  <!--:rules="[-->
                                          <!--{ required: true, message: '请输入线上最低点卡支付入款金额'},-->
                                          <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.kapay.min" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple">{{LANG['点卡支付入款最高'] || '点卡支付入款最高'}}</div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.kapay.max"-->
                                  <!--:rules="[-->
                                          <!--{ required: true, message: '公司最高点卡支付入款金额'},-->
                                          <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.kapay.max" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row :gutter="22" >-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['云闪付入款最低'] || '云闪付入款最低'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.kapay.min"-->
                                  <!--:rules="[-->
                                          <!--{ required: true, message: '请输入线上最低云闪付入款金额'},-->
                                          <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.quickpay.min" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple">{{LANG['云闪付入款最高'] || '云闪付入款最高'}}</div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="onlines.kapay.max"-->
                                  <!--:rules="[-->
                                          <!--{ required: true, message: '公司最高云闪付入款金额'},-->
                                          <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.onlines.quickpay.max" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row :gutter="22">-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple">{{LANG['公司最低入款金额'] || '公司最低入款金额'}}</div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="offline_min_in"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '公司最低入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.offline_min_in" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['公司最高入款金额'] || '公司最高入款金额'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="offline_max_in"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '公司最高入款金额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.offline_max_in" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row :gutter="22">-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['线上入款流水倍数'] || '线上入款流水倍数'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="online_glide_multi"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '线上入款流水倍数'},-->
                                      <!--{ validator: this.validatorNumber3}-->
                                    <!--]">-->
                        <!--<el-input v-model="editForm.online_glide_multi" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['公司入款流水倍数'] || '公司入款流水倍数'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="offline_glide_multi"-->
                                <!--:rules="[-->
                                      <!--{ required: true, message: '公司入款流水倍数'},-->
                                      <!--{ validator: this.validatorNumber3}-->
                                    <!--]">-->
                        <!--<el-input v-model="editForm.offline_glide_multi" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row :gutter="22">-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['微信入款手续费比例'] || '微信入款手续费比例'}}(%)</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="wechat_in_fee"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '请输入微信入款手续费比例'}-->
                                    <!--]">-->
                        <!--<el-input v-model="editForm.wechat_in_fee" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['支付宝入款手续费比例'] || '支付宝入款手续费比例'}}(%)</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="alipay_in_fee"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '请输入支付宝入款手续费比例'}-->
                                    <!--]">-->
                        <!--<el-input v-model="editForm.alipay_in_fee" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <!--出款相关-->
            <el-col :span="24" class="mb20">
                <div class="grid-content bg-purple-dark mb10" style="text-align: center;">{{LANG['出款相关'] || '出款相关'}}</div>
            </el-col>
            <el-row :gutter="22">
                <el-col :span="6">
                    <div class="grid-content bg-purple"><span>{{LANG['每次最低出款金额'] || '每次最低出款金额'}}</span></div>
                </el-col>
                <el-col :span="6">
                    <el-form-item prop="each_min_out"
                                  :rules="[
                                      { required: true, message: '每次最低出款金额'},
                                      { validator: this.validatorNumber2}]">
                        <el-input v-model="editForm.each_min_out" type="number" auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"><span>{{LANG['每日出款次数限制'] || '每日出款次数限制'}}</span></div>
                </el-col>
                <el-col :span="6">
                    <el-form-item prop="day_out_times"
                                  :rules="[
                                      { required: true, message: '每日出款次数限制'},
                                      { validator: this.validatorNumber1}]">
                        <el-input v-model="editForm.day_out_times" auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="22">
                <el-col :span="6">
                    <div class="grid-content bg-purple"><span>{{LANG['每次最高出款金额'] || '每次最高出款金额'}}</span></div>
                </el-col>
                <el-col :span="6">
                    <el-form-item prop="each_max_out"
                                  :rules="[
                                      { required: true, message: '每次最高出款金额'},
                                      { validator: this.validatorNumber2}]">
                        <el-input v-model="editForm.each_max_out" type="number" auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple"><span>{{LANG['每日出款免手续费笔数'] || '每日出款免手续费笔数'}}</span>
                    </div>
                </el-col>
                <el-col :span="6">
                    <el-form-item prop="day_out_times_nofee"
                                  :rules="[
                                      { required: true, message: '每日出款免手续费笔数'},
                                      { validator: this.validatorNumber1}]">
                        <el-input v-model="editForm.day_out_times_nofee" auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <!--<el-row :gutter="22">-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['提现行政费'] || '提现行政费'}}（%）</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="withdraw_expenese"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '提现行政费百分比'},-->
                                      <!--{ validator: this.validatorNumber4}]">-->
                        <!--<el-input v-model="editForm.withdraw_expenese" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['行政费上限'] || '行政费上限'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="max_expenese"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '行政费上限'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.max_expenese" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <el-row :gutter="22">
                <el-col :span="6">
                    <div class="grid-content bg-purple"><span>{{LANG['提现手续费'] || '提现手续费'}}</span></div>
                </el-col>
                <el-col :span="6">
                    <el-form-item prop="withdraw_fee"
                                  :rules="[
                                      { required: true, message: '请输入提现手续费'},
                                      { validator: this.validatorNumber}]">
                        <el-input v-model="editForm.withdraw_fee" auto-complete="off"></el-input>
                        <!--<span style="color:#ff4949;" class="el-form-item__error" v-if="editForm.withdraw_fee <0 && editForm.withdraw_fee !=''">提现手续费不能少于1 。</span>-->
                    </el-form-item>
                </el-col>
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['免稽核额度'] || '免稽核额度'}}</span>-->
                    <!--</div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="nocheck"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '免稽核额度'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.nocheck" auto-complete="off"></el-input>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            </el-row>
            <!--<el-row :gutter="22">-->
                <!--<el-col :span="6">-->
                    <!--<div class="grid-content bg-purple"><span>{{LANG['每日提款累计总限额'] || '每日提款累计总限额'}}</span></div>-->
                <!--</el-col>-->
                <!--<el-col :span="6">-->
                    <!--<el-form-item prop="day_withdraw_max"-->
                                  <!--:rules="[-->
                                      <!--{ required: true, message: '请输入每日提款累计总限额'},-->
                                      <!--{ validator: this.validatorNumber}]">-->
                        <!--<el-input v-model="editForm.day_withdraw_max" auto-complete="off"></el-input>-->
                        <!--&lt;!&ndash;<span style="color:#ff4949;" class="el-form-item__error" v-if="editForm.withdraw_fee <0 && editForm.withdraw_fee !=''">提现手续费不能少于1 。</span>&ndash;&gt;-->
                    <!--</el-form-item>-->
                <!--</el-col>-->
            <!--</el-row>-->
            <el-row :gutter="22">
                <el-col class="footer">
                    <el-button type="primary" @click="saveForm">{{LANG['保存'] || '保存'}}</el-button>
                    <el-button type="primary" @click="cancelFrom">{{LANG['取消'] || '取消'}}</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                LANG
            }
        },
        props: {
            editForm: {
                type: Object,
                default: {}
            },
            setName:String
        },
        components: {},
        methods: {
            //保存数据
            saveForm(){
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        this.$emit('get-form');
                    }
                });
            },
            //数字金额验证
            validatorNumber(rule, value, callback){
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (value < 0) {
                        callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                    } else if(value > 99999999){
                        callback(new Error(LANG['输入金额不能大于99999999'] || '输入金额不能大于99999999'));
                    } else {
                        callback();
                    }
                }
            },
            //数字次数验证
            validatorNumber1(rule, value, callback){
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (value < 0) {
                        callback(new Error(LANG['输入次数不能小于0次'] || '输入次数不能小于0次'));
                    } else if(value > 999999999){
                        callback(new Error(LANG['输入次数不能大于999999999次'] || '输入次数不能大于999999999次'));
                    } else {
                        callback();
                    }
                }
            },
            // 每次最低最高出款金额
            validatorNumber2(rule, value, callback){
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (value < 0) {
                        callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                    } else if(value > 99999999){
                        callback(new Error(LANG['输入金额不能大于99999999'] || '输入金额不能大于99999999'));
                    } else {
                        callback();
                    }
                }
            },
            // 入款流水倍数
            validatorNumber3(rule, value, callback){
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (value < 0) {
                        callback(new Error(LANG['倍数必须大于0'] || '倍数必须大于0'));
                    } else if(value > 99999999){
                        callback(new Error(LANG['倍数必须小于99999999'] || '倍数必须小于99999999'));
                    } else {
                        callback();
                    }
                }
            },
            //数字百分比验证
            validatorNumber4(rule, value, callback){
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (value < 0) {
                        callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                    } else if(value > 100){
                        callback(new Error(LANG['输入金额不能大于100'] || '输入金额不能大于100'));
                    } else {
                        callback();
                    }
                }
            },
            //取消返回
            cancelFrom(){
                this.$emit('cancel-form');
            }
        },
        computed: {},
        mounted(){
        },
        created(){
        }
    }
</script>
<style scoped>
    #userLevelSet .companyInp{width:15%;min-width: 150px;}
    #userLevelSet .radioFrist{margin-left: 50px;}
    #userLevelSet .companyPre{margin-top: 15px;}
    /*#userLevelSet .grid-content{line-height:36px;}*/

    #userLevelSet .el-form-item__content {
        margin: 0 auto;
    }

    #userLevelSet .grid-content {
        line-height: 36px;
        text-align: right;
        padding-right: 8px;
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
    .footer{text-align: center;border-top: 1px solid #cccccc;margin-top: 20px;padding-top: 20px;}
    #userLevelSet .cancel{text-align: right;padding-bottom: 5px;}
</style>
