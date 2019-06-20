<template>
    <div id="activeMode">
        <el-col>
            <el-button class="bankBtn pRight20" type="primary" icon="arrow-left" size="small" @click="returnPage">
                {{LANG['返 回'] || '返 回'}}
            </el-button>
        </el-col>
        <!--每日签到-->
        <el-form ref="form" :model="modeData" label-width="120px" :rules="rules" class="mt20 clear">
            <el-col :span="24">
                <el-row>
                    <el-col :span="24" class="Layout">
                        <h3 class="tCent" v-text="LANG['规则设置'] || '规则设置'"></h3>
                        <div class="clear">
                            <el-col :span="24">
                                <el-form-item label="优惠活动名称" prop="name">
                                    <el-input class="w80" v-model="modeData.name" :placeholder="placename"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24">
                                <el-form-item label="优惠类型" prop="type_id">
                                    <checkGroup :checkOptions="type_idList" :sReset="sReset" @change-option="changeOption" :checkedval="checkedval"></checkGroup>
                                    <input v-model="modeData.type_id" style="display: none"></input>
                                    <!--<el-select v-model="modeData.type_id" placeholder="请选择类型" class="w80">-->
                                    <!--<el-option :label=item.label :value=item.value :key=item.index v-for="(item,index) in type_idList"></el-option>-->
                                    <!--</el-select>-->
                                </el-form-item>
                            </el-col>
                        </div>
                        <!-- <div class="clear"> -->
                        <!-- <el-col :span="24">
							<el-form-item label="有效时间" required class="w80">
								  <el-col class="w30">
									  <el-form-item prop="begin_time">
										  <dateTimePicker  v-model="modeData.begin_time" :datekey="'begin_time'"></dateTimePicker>
									  </el-form-item>
								  </el-col>
								  <div style="float:left;" class="w20 tCent"> - </div>
								  <el-col class="w30">
									  <el-form-item prop="end_time">
										  <dateTimePicker  v-model="modeData.end_time" :datekey="'end_time'"></dateTimePicker>
									  </el-form-item>
								  </el-col>
							  </el-form-item>
						</el-col> -->
                        <!--<el-col :span="24" v-if="seachData.type=='add'">-->
                        <!--<el-form-item label="发放奖金" prop="issue_mode">-->
                        <!--<el-radio-group v-model="modeData.issue_mode">-->
                        <!--<el-radio class="radio" label="auto"><span v-text="LANG['自动发放'] || '自动发放'"></span>-->
                        <!--</el-radio>-->
                        <!--<el-radio class="radio" label="manual"><span v-text="LANG['手动发放'] || '手动发放'"></span>-->
                        <!--</el-radio>-->
                        <!--</el-radio-group>-->
                        <!--</el-form-item>-->
                        <!--</el-col>-->
                        <!-- </div> -->
                        <!-- 公司入款优惠 -->
                        <div class="clear checkContainer">
                            <el-form-item label="公司入款优惠">
                                <el-checkbox-group v-model="modeData.companyCheck" @change="companyCheckChange">
                                    <el-col :span="24">
                                        <el-checkbox label="first">
                                            <span v-text="LANG['首次优惠'] || '首次优惠'"></span>
                                        </el-checkbox>
                                        <el-row v-for="(item,index) in modeData.company.first" :key="index">
                                            <el-col :sm="24" :md="24" :lg="4" :xs="4">
                                                <el-col class="addPadding">
                                                    <span>存款金额</span>
                                                    <el-form-item class="to-inline-block"
                                                                  :prop=" 'company.first['+index+'].money'">
                                                        <el-input v-model="item.money" type="number"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-col>
                                            <el-col :sm="24" :md="24" :lg="18" :xs="18">
                                                <el-col :lg="14" :sx="14" :md="19" :sm="19">
                                                    <el-radio-group v-model="item.type"
                                                                    @change="companyFirstTypeChange">
                                                        <el-radio style="line-height:35px;" class="radio radioGroup"
                                                                  label="1">
                                                            <span>固定奖金</span>
                                                            <el-form-item class="to-inline-block"
                                                                          :prop=" 'company.first['+index+'].fixedBonus'">
                                                                <el-input v-model="item.fixedBonus"
                                                                          ref="companyFirstInput"
                                                                          @blur="companyFirstInputBlur(index)" type="number"></el-input>
                                                            </el-form-item>
                                                        </el-radio>
                                                        <el-radio style="line-height:35px;" class="radio radioGroup"
                                                                  label="2">
                                                            <span>存款百分比%</span>
                                                            <el-form-item class="to-inline-block"
                                                                          :prop=" 'company.first['+index+'].percentageOfDeposits'">
                                                                <el-input v-model="item.percentageOfDeposits"
                                                                          ref="companyFirstInput"
                                                                          @blur="companyFirstInputBlur(index)" type="number"></el-input>
                                                            </el-form-item>
                                                        </el-radio>
                                                    </el-radio-group>
                                                </el-col>
                                                <el-col :span="4">
                                                    <span>上限</span>
                                                    <el-form-item class="to-inline-block"
                                                                  :prop=" 'company.first['+index+'].upper_limit'">
                                                        <el-input v-model="item.upper_limit" ref="companyFirstInput"
                                                                  @blur="companyFirstInputBlur(index)" type="number"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="1"
                                                        style="height:37px;line-height:37px;text-align:center;background-color:#ccc;">
                                                    <div @click="delectCompanyFirst(index)" v-if="index!=0">
                                                        <i class="el-icon-minus"></i>
                                                    </div>
                                                    <div @click="addCompanyFirst" v-if="index==0">
                                                        <i class="el-icon-plus"></i>
                                                    </div>
                                                </el-col>
                                            </el-col>

                                        </el-row>
                                    </el-col>
                                    <el-col :span="24">
                                        <el-checkbox label="again">
                                            <span v-text="LANG['再存优惠'] || '再存优惠'"></span>
                                        </el-checkbox>
                                        <el-row v-for="(item,index) in modeData.company.again" :key="index">
                                            <el-col :sm="24" :md="24" :lg="4" :xs="4">
                                                <el-col class="addPadding">
                                                    <span>存款金额</span>
                                                    <el-form-item class="to-inline-block"
                                                                  :prop=" 'company.again['+index+'].money'">
                                                        <el-input v-model="item.money" type="number"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                            </el-col>
                                            <el-col :sm="24" :md="24" :lg="18" :xs="18">
                                                <el-col :lg="14" :sx="14" :md="19" :sm="19">
                                                    <el-radio-group v-model="item.type"
                                                                    @change="companyAgainTypeChange">
                                                        <el-radio style="line-height:35px;" class="radioGroup"
                                                                  label="1">
                                                            <span>固定奖金</span>
                                                            <el-form-item class="to-inline-block"
                                                                          :prop=" 'company.again['+index+'].fixedBonus'">
                                                                <el-input v-model="item.fixedBonus"
                                                                          ref="companyAgainInput"
                                                                          @blur="companyAgainInputBlur(index)" type="number"></el-input>
                                                            </el-form-item>
                                                        </el-radio>
                                                        <el-radio style="line-height:35px;" class="radioGroup"
                                                                  label="2">
                                                            <span>存款百分比%</span>
                                                            <el-form-item class="to-inline-block"
                                                                          :prop=" 'company.again['+index+'].percentageOfDeposits'">
                                                                <el-input v-model="item.percentageOfDeposits"
                                                                          ref="companyAgainInput"
                                                                          @blur="companyAgainInputBlur(index)" type="number"></el-input>
                                                            </el-form-item>
                                                        </el-radio>
                                                    </el-radio-group>
                                                </el-col>
                                                <el-col :span="4">
                                                    <span>上限</span>
                                                    <el-form-item class="to-inline-block"
                                                                  :prop=" 'company.again['+index+'].upper_limit'">
                                                        <el-input v-model="item.upper_limit" ref="companyAgainInput"
                                                                  @blur="companyAgainInputBlur(index)" type="number"></el-input>
                                                    </el-form-item>
                                                </el-col>
                                                <el-col :span="1"
                                                        style="height:37px;line-height:37px;text-align:center;background-color:#ccc;">
                                                    <div @click="delectCompanyAgain(index)" v-if="index!=0">
                                                        <i class="el-icon-minus"></i>
                                                    </div>
                                                    <div @click="addCompanyAgain" v-if="index==0">
                                                        <i class="el-icon-plus"></i>
                                                    </div>
                                                </el-col>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                </el-checkbox-group>
                            </el-form-item>

                        </div>
                        <!-- 线上入款优惠 -->
                        <div class="clear checkContainer">
                            <el-form-item label="线上入款优惠">
                                <p class="tip">注：线上入款首存优惠只享有所有支付场景中的一个首存优惠</p>
                                <div v-for="pay in payList">
                                    <p class="payName">{{pay.cn_name}}</p>
                                    <el-checkbox-group v-model="modeData.onlineCheck[pay.en_name]"
                                                       @change="onlineCheckChange(pay.en_name)">
                                        <el-col :span="24">
                                            <el-checkbox label="first">
                                                <span
                                                    v-text="LANG['首次优惠'] || '首次优惠(注：线上入款首存优惠只享有所有支付场景中的一个首存优惠)'"></span>
                                            </el-checkbox>
                                            <el-row v-for="(item,index) in modeData.online[pay.en_name].first"
                                                    :key="index">
                                                <el-col :sm="24" :md="24" :lg="4" :xs="4">
                                                    <el-col class="addPadding">
                                                        <span>存款金额</span>
                                                        <el-form-item class="to-inline-block"
                                                                      :prop=" 'online['+pay.en_name+'].first['+index+'].money'">
                                                            <el-input v-model="item.money" type="number"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-col>
                                                <el-col :sm="24" :md="24" :lg="18" :xs="18">
                                                    <el-col :lg="14" :sx="14" :md="19" :sm="19">
                                                        <el-radio-group v-model="item.type"
                                                                        @change="onlineFirstTypeChange">
                                                            <el-radio style="line-height:35px;" class="radio radioGroup"
                                                                      label="1">
                                                                <span>固定奖金</span>
                                                                <el-form-item class="to-inline-block"
                                                                              :prop=" 'online['+pay.en_name+'].first['+index+'].fixedBonus'">
                                                                    <el-input v-model="item.fixedBonus"
                                                                              ref="onlineFirstInput"
                                                                              @blur="onlineFirstInputBlur(index)" type="number"></el-input>
                                                                </el-form-item>
                                                            </el-radio>
                                                            <el-radio style="line-height:35px;" class="radio radioGroup"
                                                                      label="2">
                                                                <span>存款百分比%</span>
                                                                <el-form-item class="to-inline-block"
                                                                              :prop=" 'online['+pay.en_name+'].first['+index+'].percentageOfDeposits'">
                                                                    <el-input v-model="item.percentageOfDeposits"
                                                                              ref="onlineFirstInput"
                                                                              @blur="onlineFirstInputBlur(index)" type="number"></el-input>
                                                                </el-form-item>
                                                            </el-radio>
                                                        </el-radio-group>
                                                    </el-col>
                                                    <el-col :span="4">
                                                        <span>上限</span>
                                                        <el-form-item class="to-inline-block"
                                                                      :prop=" 'online['+pay.en_name+'].first['+index+'].upper_limit'">
                                                            <el-input v-model="item.upper_limit" ref="onlineFirstInput"
                                                                      @blur="onlineFirstInputBlur(index)" type="number"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="1"
                                                            style="height:37px;line-height:37px;text-align:center;background-color:#ccc;">
                                                        <div @click="delectOnlineFirst(index,pay.en_name)"
                                                             v-if="index!=0">
                                                            <i class="el-icon-minus"></i>
                                                        </div>
                                                        <div @click="addOnlineFirst(pay.en_name)" v-if="index==0">
                                                            <i class="el-icon-plus"></i>
                                                        </div>
                                                    </el-col>
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                        <el-col :span="24">
                                            <el-checkbox label="again">
                                                <span v-text="LANG['再存优惠'] || '再存优惠'"></span>
                                            </el-checkbox>
                                            <el-row v-for="(item,index) in modeData.online[pay.en_name].again"
                                                    :key="index">
                                                <el-col :sm="24" :md="24" :lg="4" :xs="4">
                                                    <el-col class="addPadding">
                                                        <span>存款金额</span>
                                                        <el-form-item class="to-inline-block"
                                                                      :prop=" 'online['+pay.en_name+'].again['+index+'].money'">
                                                            <el-input v-model="item.money" type="number"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-col>
                                                <el-col :sm="24" :md="24" :lg="18" :xs="18">
                                                    <el-col :lg="14" :sx="14" :md="19" :sm="19">
                                                        <el-radio-group v-model="item.type"
                                                                        @change="onlineAgainTypeChange">
                                                            <el-radio style="line-height:35px;" class="radio radioGroup"
                                                                      label="1">
                                                                <span>固定奖金</span>
                                                                <el-form-item class="to-inline-block"
                                                                              :prop=" 'online['+pay.en_name+'].again['+index+'].fixedBonus'">
                                                                    <el-input v-model="item.fixedBonus"
                                                                              ref="onlineAgainInput"
                                                                              @blur="onlineAgainInputBlur(index)" type="number"></el-input>
                                                                </el-form-item>
                                                            </el-radio>
                                                            <el-radio style="line-height:35px;" class="radio radioGroup"
                                                                      label="2">
                                                                <span>存款百分比%</span>
                                                                <el-form-item class="to-inline-block"
                                                                              :prop=" 'online['+pay.en_name+'].again['+index+'].percentageOfDeposits'">
                                                                    <el-input v-model="item.percentageOfDeposits"
                                                                              ref="onlineAgainInput"
                                                                              @blur="onlineAgainInputBlur(index)" type="number"></el-input>
                                                                </el-form-item>
                                                            </el-radio>
                                                        </el-radio-group>
                                                    </el-col>
                                                    <el-col :span="4">
                                                        <span>上限</span>
                                                        <el-form-item class="to-inline-block"
                                                                      :prop=" 'online['+pay.en_name+'].again['+index+'].upper_limit'">
                                                            <el-input v-model="item.upper_limit" ref="onlineAgainInput"
                                                                      @blur="onlineAgainInputBlur(index)" type="number"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                    <el-col :span="1"
                                                            style="height:37px;line-height:37px;text-align:center;background-color:#ccc;">
                                                        <div @click="delectOnlineAgain(index,pay.en_name)"
                                                             v-if="index!=0">
                                                            <i class="el-icon-minus"></i>
                                                        </div>
                                                        <div @click="addOnlineAgain(pay.en_name)" v-if="index==0">
                                                            <i class="el-icon-plus"></i>
                                                        </div>
                                                    </el-col>
                                                </el-col>
                                            </el-row>
                                        </el-col>
                                    </el-checkbox-group>
                                </div>
                            </el-form-item>
                        </div>
                        <!--<el-form-item prop="checkDeposit" :rules="[{ validator:checkDeposit,trigger:'change'}]"-->
                                      <!--class="checkDeposit"></el-form-item>-->
                        <el-form-item label="有效会员等级" prop="checkedDefut">
                            <!--<div style="margin: 15px 0;"></div>-->
                            <el-checkbox-group v-model="modeData.checkedDefut" @change="handleCheckedDefutChange">
                                <el-checkbox v-for="(item,index) in vipList" :label=item.label :key=index
                                             :disabled="item.disable"
                                             :checked="item.checked"
                                             name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="优惠提款要求" required>
                            <!--<span v-text="LANG['(存款+优惠)X'] || '(存款+优惠)X'"></span>-->
                            <el-form-item style="display: inline-block" prop="withdrawRequireVal">
                                <el-input class="intW" :maxlength="2" v-model="modeData.withdrawRequireVal" type="number"></el-input>
                            </el-form-item>
                            <span v-text="LANG['倍'] || '倍'"></span>
                        </el-form-item>
                        <el-form-item label="状态">
                            <el-radio class="radio" v-model="modeData.status" label="enabled"><span
                                v-text="LANG['启用'] || '启用'"></span></el-radio>
                            <el-radio class="radio" v-model="modeData.status" label="disabled"><span
                                v-text="LANG['停用'] || '停用'"></span>
                            </el-radio>
                        </el-form-item>
                        <el-form-item label="可否放弃选择" prop="extra.visible">
                            <el-radio-group v-model="modeData.extra.visible">
                                <el-radio class="radio" label="1"><span v-text="LANG['是'] || '是'"></span></el-radio>
                                <el-radio class="radio" label="0"><span v-text="LANG['否'] || '否'"></span></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24" class="Layout">
                        <h3 class="tCent" v-text="LANG['内容设置'] || '内容设置'"></h3>
                        <el-row>

                            <el-form-item label="优惠活动标题" prop="title">
                                <el-input class="w80" v-model="modeData.title" :maxlength="15"></el-input>
                            </el-form-item>
                            <el-form-item label="语言" prop="language_id">
                                <el-select v-model="modeData.language_id" placeholder="请选择类型" class="w80"
                                           @change="changeLanguage" disabled>
                                    <el-option :label="item.label" :value="item.value"
                                               v-for="(item,index) in languageList" :key="index"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="优惠活动描述" prop="description">
                                <el-input class="w80" type="textarea" :maxlength="2048" v-model="modeData.description"></el-input>
                            </el-form-item>
                            <el-form-item label="设备1" prop="coverUse1">
                                <el-select v-model="modeData.coverUse1" placeholder="请选择">
                                    <el-option label="手机" value="mobile"></el-option>
                                    <!--<el-option label="PC" value="pc"></el-option>-->
                                </el-select>
                            </el-form-item>
                            <el-form-item label="设备1图片上传" prop="coverPic1">
                                <el-input v-model="modeData.coverPic1" style="display:none;"></el-input>
                                <upload :uploadUrl="uploadUrl1" @doUpload="doSaveFile1" :keys="keys1" :isInit="imgInit1"
                                        :fileNum="2" :arrList="modeData.arrList1" :imgResolution="'460*180'" ></upload>
                            </el-form-item>
                            <el-form-item label="设备2" prop="coverUse2">
                                <el-select v-model="modeData.coverUse2" placeholder="请选择">
                                    <!--<el-option label="手机" value="mobile"></el-option>-->
                                    <el-option label="PC" value="pc"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="设备2图片上传" prop="coverPic2">
                                <el-input v-model="modeData.coverPic2" style="display:none;"></el-input>
                                <upload :uploadUrl="uploadUrl2" @doUpload="doSaveFile2" :keys="keys2" :isInit="imgInit2"
                                        :fileNum="2" :arrList="modeData.arrList2" :imgResolution="'460*180'"></upload>
                            </el-form-item>
                            <!--<el-form-item label="图片上传">-->
                                <!--<el-input v-model="modeData.cover" style="display:none;"></el-input>-->
                                <!--<upload :uploadUrl="uploadUrl" @response="doSaveFile" :keys="keys" :isInit="imgInit"-->
                                        <!--:fileNum="1" :arrList="arrList" :imgResolution="'460*180'"></upload>-->
                            <!--</el-form-item>-->
                            <el-form-item label="排序" prop="sort">
                                <el-input v-model="modeData.sort" class="w80" type="number"></el-input>
                            </el-form-item>
                            <el-form-item label="打开方式" prop="open_mode">
                                <el-radio-group v-model="modeData.open_mode" @change="radioChange">
                                    <!--<el-radio class="radio"  label="1"><span-->
                                    <!--v-text="LANG['弹窗'] || '弹窗'"></span>-->
                                    <!--</el-radio>-->
                                    <el-radio class="radio" label="2"><span
                                        v-text="LANG['新窗口打开'] || '新窗口打开'"></span>
                                    </el-radio>
                                    <el-radio class="radio" label="3"><span
                                        v-text="LANG['本页面跳转'] || '本页面跳转'"></span>
                                    </el-radio>
                                    <el-radio class="radio" label="4"><span
                                        v-text="LANG['下拉展开'] || '下拉展开'"></span>
                                    </el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="链接" prop="link" v-if="linkShow">
                                <el-input class="w80" v-model="modeData.link"></el-input>
                            </el-form-item>
                            <el-col>
                                <el-form-item :label="LANG['PC活动规则编辑'] || 'PC活动规则编辑'" prop="content" v-if="pcshow">
                                    <el-input v-model="modeData.content" style="display:none;"></el-input>
                                    <markdownEdit :id="'pcmd'" v-model="modeData.content" class="w80"></markdownEdit>
                                </el-form-item>
                            </el-col>
                            <el-col>
                                <el-form-item :label="LANG['H5活动规则编辑'] || 'H5活动规则编辑'" prop="content2" style="z-index:9"
                                              v-if="mbshow">
                                    <el-input v-model="modeData.content2" style="display:none;"></el-input>
                                    <markdownEdit :id="'mbshowww'" v-model="modeData.content2"
                                                  class="w80"></markdownEdit>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                <el-col :span="24" class="tCent" v-if="seachData.type == 'add'">
                    <el-button type="primary" :plain="true" @click="goBack(type = 'add')">
                        <span v-text="LANG['取消生成'] || '取消生成'"></span>
                    </el-button>
                    <el-button type="primary" @click="doSubmit(type = 'add')">
                        <span v-text="LANG['生成优惠'] || '生成优惠'"></span>
                    </el-button>
                </el-col>
                <el-col :span="24" class="tCent" v-else>
                    <el-button type="primary" :plain="true" @click="goBack(type = 'edit')">
                        <span v-text="LANG['取消修改'] || '取消修改'"></span>
                    </el-button>
                    <el-button type="primary" @click="doSubmit(type = 'edit')">
                        <span v-text="LANG['保存修改'] || '保存修改'"></span>
                    </el-button>
                </el-col>
            </el-col>
        </el-form>
        <confirm :confirmConfig="confirmConfig" @do-confirm="doShowError" @do-cancel="doShowError"></confirm>
    </div>
</template>
<script>
    import markdownEdit from '../../components/UEditor.vue'
    import upload from '../../components/upload.vue'
    import dateTimePicker from '../../components/dateTimePicker.vue'
    import confirm from '../../components/confirm.vue';
    import checkGroup from '../../components/changeAll.vue'

    export default {
        data() {
            let validatePass = (rule, value, callback) => {
                if (value === '' && this.modeData.withdrawRequire === 'times') {
                    callback(new Error('请输入倍数'));
                } else {
                    callback();
                }
            };
            const sortValidate = (rule, value, callback) => {
                if (/^(0|[1-9]\d*)$/.test(value.toString())) {
                    callback();
                } else {
                    return callback(new Error('请填写非负整数'));
                }
            }
            //URL验证
            let validatorUrl = (rule, value, callback) => {
                if (value && !/^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/.test(value)) {
                    callback(new Error(LANG['请输入合法的网址(格式为http://www.***.com或者https://www.***.com)'] || '请输入合法的网址(格式为http://www.***.com或者https://www.***.com)'));
                } else {
                    callback()
                }
            }
            //验证活动标题
            var validateTitle = (rule, value, callback) =>{
                let reg1 = /[\u4e00-\u9fa5]/g;
                let reg2 = /[^\u4E00-\u9FFF]/g;
                let cunt = 0;
                value = value.replace(/\s+/g,"");
                cunt = cunt+(value.match(reg1)?value.match(reg1).length*2+cunt:cunt);
                cunt = cunt+(value.match(reg2)?value.match(reg2).length+cunt:cunt);
                if(cunt>2048 ||cunt<1){
                    callback(new Error(LANG['请输入长度1到2048位！'] || '请输入长度1到2048位！'))
                }else{
                    callback();
                }
            };
            // 验证活动内容
            var validateHans = (rule, value, callback) =>{
                let reg1 = /[\u4e00-\u9fa5]/g;
                let reg2 = /[^\u4E00-\u9FFF]/g;
                let cunt = 0;
                value = value.replace(/\s+/g,"");
                value = value.replace(/[\r\n]/g, "");
                cunt = cunt+(value.match(reg1)?value.match(reg1).length*2+cunt:cunt);
                cunt = cunt+(value.match(reg2)?value.match(reg2).length+cunt:cunt);
                if(cunt>2048 ||cunt<1){
                    callback(new Error(LANG['请输入有效内容！'] || '请输入有效内容！'))
                }else{
                    callback();
                }
            }
            const validatorTime = (rule, value, callback) => {
                const beginTime = new Date(this.modeData.begin_time).getTime();
                const endTime = new Date(this.modeData.end_time).getTime();
                if (beginTime > endTime) {
                    callback(new Error(LANG['开始时间不能大于结束时间'] || '开始时间不能大于结束时间'));
                } else {
                    callback();
                }
            }

            return {
                LANG,
                pcshow: false,
                mbshow: false,
                linkShow: false,
                placename: '',
                modeDataCopy: {},
                arrList: [],
                pcshow: false,
                //登出确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                payList: [
                    {
                        cn_name: "支付宝扫码",
                        en_name: "alipay"
                    },
                    {
                        cn_name: "微信扫码",
                        en_name: "wechat"
                    },
                    {
                        cn_name: "QQ钱包",
                        en_name: "qqpay"
                    },
                    {
                        cn_name: "网银支付",
                        en_name: "cyberbank"
                    },
                    {
                        cn_name: "京东支付",
                        en_name: "jdpay"
                    },
                    {
                        cn_name: "快捷支付",
                        en_name: "unionpay"
                    },
                    {
                        cn_name: "百度支付",
                        en_name: "baidupay"
                    },
                    {
                        cn_name: "财付通",
                        en_name: "tenpay"
                    },
                    {
                        cn_name: "点卡支付",
                        en_name: "kapay"
                    },
                    {
                        cn_name: "云闪付",
                        en_name: "quickpay"
                    },
                ],
                modeData: {
                    extra: {
                        visible: '0'
                    },
                    name: "",//string #活动名称
                    type_id: "",//int ：活动类型ID
                    title: "",//string #活动标题
                    begin_time: '',//datetime #开始时间
                    end_time: '',//datetime #结束时间
                    issue_mode: "auto",//string #发放方式
                    day: "",//连续签到天数
                    money: "",//优惠金额
                    get: "",//领取限制方式
                    getMath: "",//领取限制次数
                    vipType: [],//会员列表
                    daySign: "",//发放时间
                    withdrawRequireVal: '',//
                    statusWdl: "",//提款要求选择
                    withdrawalsBs: "",//提款倍数
                    withdrawalsGd: "",//提款要求固定输入金额
                    status: 'enabled',//string #状态 enabled 启用,disabled 停用
                    description: "",//string #描述
                    // cover: "",
                    cover:[],
                    coverUse1:'mobile',
                    coverUse2:'pc',
                    coverPic1:'',
                    coverPic2:'',
                    sort: "",//排序
                    language_id: "",//int #语言ID
                    language_name: "",//string #语言名称
                    content: "",//string #内容
                    content2: "",
                    link: '',
                    open_mode: "",
                    checkedDefut: [],
                    fileList2: [],//文件上传
                    template_id: '',
                    checkDeposit: {
                        companyCheck: [],
                        onlineCheck: {
                            "alipay": [],
                            "wechat": [],
                            "qqpay": [],
                            "cyberbank": [],
                            "unionpay": [],
                            "jdpay": [],
                            "baidupay": [],
                            "tenpay": [],
                            "kapay": [],
                            "quickpay": []
                        },
                    },
                    companyCheck: [],
                    onlineCheck: {
                        "alipay": [],
                        "wechat": [],
                        "qqpay": [],
                        "cyberbank": [],
                        "unionpay": [],
                        "jdpay": [],
                        "baidupay": [],
                        "tenpay": [],
                        "kapay": [],
                        "quickpay": []
                    },
                    company: { // 公司入款优惠
                        first: [ // 首存
                            {
                                money: '',
                                prize: '',
                                upper_limit: '',
                                type: '1'
                            }
                        ],
                        again: [ // 再存
                            {
                                money: '',
                                prize: '',
                                upper_limit: '',
                                type: '1'
                            }
                        ]
                    },
                    online: { // 线上入款优惠
                        "alipay": {
                            first: [ // 首存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ],
                            again: [ // 再存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ]
                        },
                        "wechat": {
                            first: [ // 首存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ],
                            again: [ // 再存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ]
                        },
                        "qqpay": {
                            first: [ // 首存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ],
                            again: [ // 再存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ]
                        },
                        "cyberbank": {
                            first: [ // 首存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ],
                            again: [ // 再存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ]
                        },
                        "jdpay": {
                            first: [ // 首存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ],
                            again: [ // 再存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ]
                        },
                        "unionpay": {
                            first: [ // 首存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ],
                            again: [ // 再存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ]
                        },
                        "baidupay": {
                            first: [ // 首存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ],
                            again: [ // 再存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ]
                        },
                        "tenpay": {
                            first: [ // 首存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ],
                            again: [ // 再存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ]
                        },
                        "kapay": {
                            first: [ // 首存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ],
                            again: [ // 再存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ]
                        },
                        "quickpay": {
                            first: [ // 首存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ],
                            again: [ // 再存
                                {
                                    money: '',
                                    prize: '',
                                    upper_limit: '',
                                    type: '1'
                                }
                            ]
                        }
                    }
                },
                //下拉优惠类型列表
                type_idList: [],
                //获取有效会员等级
                vipList: [],
                //默认选中项
                isIndeterminate: true,
                checkList: [],
                //获取页面传过来的值
                seachData: {},
                languageList: [],
                // 上传地址
                uploadUrl: URL.rpi,
                // 上传字段名
                keys: "images",
                // 是否初始化
                imgInit: false,
                companyFirstType: '',
                companyAgainType: '',
                onlineFirstType: '',
                onlineAgainType: '',
                rules: {
                    name: [
                        {required: true, message: '请填写活动名称', trigger: 'blur'},
                        {validator: validateTitle,trigger: 'blur'},
                        {min:1,max:15,message:'请输入1至15 个字符'},
                    ],
                    type_id: [
                        {required: true, type: 'array', message: '请选择优惠类型', trigger: 'change'}
                    ],
                    language_id: [
                        {required: true, message: '请选择语言类型', trigger: 'change'}
                    ],
                    description: [
                        {required: true, validator: validatorTime, trigger: 'blur'},
                        {validator: validateHans,trigger: 'blur,change'}
                    ],
                    begin_time: [
                        {required: true, validator: validatorTime, trigger: 'change'}
                    ],
                    end_time: [
                        {required: true, message: '请输入结束时间', trigger: 'change'}
                    ],
                    'rule.issueTime': [
                        {required: true, message: '请填写发放时间', trigger: 'blur'}
                    ],
                    'rule.issueCycle': [
                        {required: true, message: '请选择发放周期', trigger: 'change'}
                    ],
                    issue_mode: [
                        {required: true, message: '请选择发放奖金方式', trigger: 'change'}
                    ],
                    open_mode: [
                        {required: true, message: '请选择打开方式', trigger: 'change'}
                    ],
                    withdrawRequireVal: [
                        {required: true, message: '请选择提款要求', trigger: 'blur'},
                        {min: 1, max: 2, message: '请输入 1 到 2 个字符'}
                    ],
                    coverPic1: [
                        {required: true, message: '请上传图片', trigger: 'change'}
                    ],
                    'extra.visible': [
                        {required: true, message: '请选择可否放弃选择选项', trigger: 'change'}
                    ],
                    checkedDefut: [
                        {type: 'array', required: true, message: '请至少选择一个会员等级', trigger: 'change'}
                    ],
                    title: [
                        {required: true, message: '请输入活动标题', trigger: 'change'},
                        {min: 1, max: 15, message: '请输入 1 到 15 个字符'},
                        {validator: validateTitle,trigger: 'blur,change'}
                    ],
                    cover: [
                        {required: true, message: '请上传图片', trigger: 'change'}
                    ],
                    link: [{required: true, validator: validatorUrl, trigger: 'change'}],
                    companyCheck: [
                        {type: 'array', required: true, message: '请至少选择一种公司入款优惠', trigger: 'change'}
                    ],
                    onlineCheck: [
                        {type: 'array', required: true, message: '请至少选择一种线上入款优惠', trigger: 'change'}
                    ],
                    sort: [
                        {validator: sortValidate, trigger: 'blur', required: true}
                    ],
                    content: [{required: true, message: '请输入优惠规则', required: true}],
                    content2: [{required: true, message: '请输入优惠规则', required: true}]
                },
                // 类型全选
                sReset: false,
                checkedval: {
                    checked: []
                }
            }
        },
        components: {
            markdownEdit: markdownEdit,
            upload: upload,
            dateTimePicker: dateTimePicker,
            confirm: confirm,
            checkGroup: checkGroup
        },
        methods: {
            init() {
                //获取路由传参
                let _this = this;
                this.modeData.begin_time = window.sessionStorage.sysTime + ' 00:00:00'//datetime #开始时间
                this.modeData.end_time = '2118-01-01 23:59:59'//datetime #结束时间
                let query = this.$route.query;
                for (let k in query) {
                    this.seachData[k] = query[k];
                }
                //初始化优惠活动名称
                this.placename = this.seachData.label;
                //获取优惠类型列表
                this.$.autoAjax('get', URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", '', {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            let model = res.data || [];
                            this.type_idList = [];
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
//                this.$http.get(URL.api + ROUTES.GET.activity.types + "?page=1&page_size=100", URLCONFIG).then((res) => {
//                    if (res.data.state == 0 && res.data.data) {
//                        let model = res.data.data || [];
//                        this.type_idList = [];
//                        for (let k in model) {
//                            this.type_idList.push({
//                                "label": model[k].name,
//                                "value": model[k].id.toString()
//                            });
//                        }
//                    }
//                });
                //所有层级接口
                function getAllLeverl() {
                    return new Promise((resolve, reject) => {
                        let alllevel = URL.api + `/user/levels`;
                        _this.$.autoAjax('get', alllevel, '', {
                            ok: (res) => {
                                let model = res.data;
                                for (let i in model) {
                                    _this.vipList.push({
                                        "label": "VIP"+model[i].level,
                                        "value": model[i].level.toString(),
                                        "disable": false,
                                    })
                                }
                                resolve();
                            },
                            p: () => {
                            },
                            error: e => {
                                reject(err);
                            }
                        })
                    })
                }
                getAllLeverl().then(() => {
                    let levelUrl = URL.api + `/active/template/unique?template_id=${_this.seachData.template_id}&&begin_time=${_this.modeData.begin_time}&&end_time=${_this.modeData.end_time}`;
                    this.$.autoAjax('get', levelUrl, '', {
                        ok: (res) => {
                            let model = res.data;
                            for (let i in model) {
                                _this.vipList.forEach(item => {
                                    if (item.value === model[i].id.toString()) {
                                        item.disable = false;
                                    }
                                })
                            }
                            if (model.length == 0 && _this.seachData.type == 'add') {
                                _this.confirmConfig.state = true;
                                _this.confirmConfig.msg = '所有会员层级都使用了此优惠活动，请到层级关联的优惠活动去修改'
                                _this.confirmConfig.fn = 'doError'
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                    if (this.seachData.type == 'edit') {
                        this.checkedval.checked.splice(0, this.checkedval.checked.length);
                        let editUrl = URL.api + `/active/template.fix/${this.seachData.id}`;
                        let _this = this;
                        this.$.autoAjax('get', editUrl, '', {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    let temp = res.data.types || [], typelist = [];
                                    temp.forEach((item, key) => {
                                        typelist.push(item.id);
                                        this.checkedval.checked.push(item.id.toString());
                                    })
                                    _this.modeData.begin_time = res.data.begin_time;
                                    _this.modeData.content = res.data.content;
                                    _this.modeData.content2 = res.data.content2;
                                    _this.modeData.open_mode = res.data.open_mode;
                                    _this.modeData.link = res.data.link;
                                    _this.modeData.coverUse1 = 'mobile';
                                    _this.modeData.coverUse2 = 'pc';
                                    // _this.modeData.cover = res.data.cover;
                                    _this.modeData.description = res.data.description;
                                    _this.modeData.end_time = res.data.end_time;
                                    _this.modeData.language_id = res.data.language_id;
                                    _this.modeData.sort = res.data.sort;
                                    _this.modeData.language_name = res.data.language_name;
                                    _this.modeData.name = res.data.name;
                                    _this.modeData.status = res.data.status;
                                    _this.modeData.withdrawRequireVal = res.data.rule.withdraw_require_val;
                                    _this.modeData.title = res.data.title;
                                    _this.modeData.type_id = typelist;
                                    _this.modeData.issue_mode = res.data.rule.issue_mode;
                                    _this.modeData.extra.visible = res.data.rule.extra.visible;
                                    //活动图片
                                    // _this.arrList.push(res.data.cover);
                                    const rules = res.data.rule.rule;
                                    rules.company.again.forEach((item, index) => {
                                        if (item.type == 1) {
                                            if (item.prize) {
                                                item.fixedBonus = item.prize
                                            } else {
                                                item.fixedBonus = ''
                                            }
                                        } else {
                                            item.percentageOfDeposits = item.prize
                                            item.upper_limit = item.upper_limit ? item.upper_limit : '';
                                        }
                                        item.money = item.money ? item.money : '';
                                        if (item.money && _this.modeData.companyCheck.indexOf('again') === -1) {
                                            _this.modeData.companyCheck.push('again');
                                            _this.modeData.checkDeposit.companyCheck.push('again');
                                        }
                                    });
                                    rules.company.first.forEach((item, index) => {
                                        if (item.type == 1) {
                                            if (item.prize) {
                                                item.fixedBonus = item.prize
                                            } else {
                                                item.fixedBonus = ''
                                            }
                                        } else {
                                            item.percentageOfDeposits = item.prize
                                            item.upper_limit = item.upper_limit ? item.upper_limit : '';
                                        }
                                        item.money = item.money ? item.money : '';
                                        if (item.money && _this.modeData.companyCheck.indexOf('first') === -1) {
                                            _this.modeData.companyCheck.push('first');
                                            _this.modeData.checkDeposit.companyCheck.push('first');
                                        }
                                    });
                                    _this.modeData.company = rules.company;
                                    for (let key in rules.online) {
                                        rules.online[key].again.forEach((item, index) => {
                                            if (item.type == 1) {
                                                if (item.prize) {
                                                    item.fixedBonus = item.prize
                                                } else {
                                                    item.fixedBonus = ''
                                                }
                                            } else {
                                                item.percentageOfDeposits = item.prize
                                                item.upper_limit = item.upper_limit ? item.upper_limit : '';
                                            }
                                            item.money = item.money ? item.money : '';
                                            if (item.money && _this.modeData.onlineCheck[key].indexOf('again') === -1) {
                                                _this.modeData.onlineCheck[key].push('again')
                                                _this.modeData.checkDeposit.onlineCheck[key].push('again');
                                            }
                                        });
                                        rules.online[key].first.forEach((item, index) => {
                                            if (item.type == 1) {
                                                if (item.prize) {
                                                    item.fixedBonus = item.prize
                                                } else {
                                                    item.fixedBonus = ''
                                                }
                                            } else {
                                                item.percentageOfDeposits = item.prize
                                                item.upper_limit = item.upper_limit ? item.upper_limit : '';
                                            }
                                            item.money = item.money ? item.money : '';
                                            if (item.money && _this.modeData.onlineCheck[key].indexOf('first') === -1) {
                                                _this.modeData.onlineCheck[key].push('first');
                                                _this.modeData.checkDeposit.onlineCheck[key].push('first');
                                            }
                                        });
                                    }
                                    _this.modeData.online = rules.online;
                                    //处理会员层级数据
                                    // let model = res.data.rule.member_level;
                                    // for (let i in model) {
                                    //     _this.vipList.forEach(item => {
                                    //         if (item.value === model[i].id.toString()) {
                                    //             item.disable = false;
                                    //         }
                                    //     })
                                    //     console.log('activeMode_9.vue ok 1093',model[i].name );
                                    //     _this.modeData.checkedDefut.push(model[i].name)
                                    // }
                                    let model1 = res.data.member_level.split(",");
                                    for (let i in model1) {
                                        _this.vipList.forEach(item => {
                                            if (item.value == model1[i]) {
                                                _this.$set(item, 'checked', true);
                                            }else {
                                                _this.$set(item, 'checked', false)
                                            }
                                        })
                                        _this.modeData.checkedDefut.push("VIP"+model1[i])
                                    }

                                }
                            },
                            p: () => {
                            },
                            error: e => {
                                reject(err);
                            }
                        })
                    }else{
                        this.checkedval.checked.splice(0, this.checkedval.checked.length);
                    }
                })
                let langeUrl = URL.api + ROUTES.GET.langeages;
                this.$.autoAjax('get', langeUrl, '', {
                    ok: (res) => {
                        let model = res.data;
                        this.languageList = [];
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
                //     let model = res.data.data;
                //     this.languageList = [];
                //     for (let i in model) {
                //         this.languageList.push({
                //             "label": model[i].name,
                //             "value": model[i].id.toString()
                //         })
                //     }
                //     this.modeData.language_id = '1';
                // })
            },
            // 优惠类型全选
            changeOption(obj) {
                this.modeData.type_id = obj.item;
            },
            // 全选
            handleCheckAllChange(event) {
                let checkList = [];
                for (let v in this.vipList) {
                    checkList[v] = this.vipList[v].label;
                }
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
            doSubmit(type) {
                let _this = this;
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        //拿到选中的语言
                        let lan = this.languageList.find((item) => {
                            return item.value = this.modeData.language_id
                        });
                        //规则数据过滤
                        let company = JSON.parse(JSON.stringify(this.modeData.company));
                        let online = JSON.parse(JSON.stringify(this.modeData.online));

                        function companyFirstSelected() {
                            if (this.modeData.companyCheck.indexOf('first') !== -1) {
                                company.first.forEach((item, index) => {
                                    item.money = item.money
                                    if (item.type == 1) {
                                        item.prize = item.fixedBonus
                                        delete item.upper_limit
                                        delete item.fixedBonus
                                        delete item.percentageOfDeposits
                                    } else {
                                        item.prize = item.percentageOfDeposits
                                        item.upper_limit = item.upper_limit
                                        delete item.fixedBonus
                                        delete item.percentageOfDeposits
                                    }
                                })
                            } else {
                                company.first.forEach(item => {
                                    item.money = 0;
                                    item.prize = '';
                                    item.type = '1';
                                    item.upper_limit = '';
                                    item.percentageOfDeposits = '';
                                    item.fixedBonus = '';
                                })
                            }
                        }

                        function companyAgainSelected() {
                            if (this.modeData.companyCheck.indexOf('again') !== -1) {
                                company.again.forEach((item, index) => {
                                    item.money = item.money
                                    if (item.type == 1) {
                                        item.prize = item.fixedBonus
                                        item.prize = item.fixedBonus
                                        delete item.upper_limit
                                        delete item.fixedBonus
                                        delete item.percentageOfDeposits
                                    } else {
                                        item.prize = item.percentageOfDeposits
                                        item.upper_limit = item.upper_limit
                                        delete item.fixedBonus
                                        delete item.percentageOfDeposits
                                    }
                                })
                            } else {
                                company.again.forEach(item => {
                                    item.money = 0;
                                    item.prize = '';
                                    item.type = '1';
                                    item.upper_limit = '';
                                    item.percentageOfDeposits = '';
                                    item.fixedBonus = '';
                                })
                            }
                        };

                        function onlineFirstSelected() {
                            for (let key in online) {
                                if (this.modeData.onlineCheck[key].indexOf('first') !== -1) {
                                    online[key].first.forEach((item, index) => {
                                        item.money = item.money
                                        if (item.type == 1) {
                                            item.prize = item.fixedBonus
                                            item.prize = item.fixedBonus
                                            delete item.upper_limit
                                            delete item.fixedBonus
                                            delete item.percentageOfDeposits
                                        } else {
                                            item.prize = item.percentageOfDeposits
                                            item.upper_limit = item.upper_limit
                                            delete item.fixedBonus
                                            delete item.percentageOfDeposits
                                        }
                                    })
                                } else {
                                    online[key].first.forEach((item, index) => {
                                        item.money = 0;
                                        item.type = '1';
                                        item.prize = '';
                                        item.upper_limit = '';
                                        item.percentageOfDeposits = '';
                                        item.fixedBonus = '';
                                    })
                                }
                            }
                        };

                        function onlineAgainSelected() {
                            for (let key in online) {
                                if (this.modeData.onlineCheck[key].indexOf('again') !== -1) {
                                    online[key].again.forEach((item, index) => {
                                        item.money = item.money
                                        if (item.type == 1) {
                                            item.prize = item.fixedBonus
                                            item.prize = item.fixedBonus
                                            delete item.upper_limit
                                            delete item.fixedBonus
                                            delete item.percentageOfDeposits
                                        } else {
                                            item.prize = item.percentageOfDeposits
                                            item.upper_limit = item.upper_limit
                                            delete item.fixedBonus
                                            delete item.percentageOfDeposits
                                        }
                                    })
                                } else {
                                    online[key].again.forEach((item, index) => {
                                        item.money = 0;
                                        item.type = '1';
                                        item.prize = '';
                                        item.upper_limit = '';
                                        item.percentageOfDeposits = '';
                                        item.fixedBonus = '';
                                    })
                                }
                            }
                        }

                        let companyCheck = this.modeData.companyCheck;
                        let onlineCheck = this.modeData.onlineCheck;
                        // if (companyCheck.length === 1) {
                        //     if (companyCheck[0] === 'first') {
                        //         companyFirstSelected.call(this);
                        //     } else {
                        //         companyAgainSelected.call(this);
                        //     }
                        // } else {

                        // }
                        companyFirstSelected.call(this);
                        companyAgainSelected.call(this);
                        if (onlineCheck.length === 1) {
                            if (onlineCheck[0] === 'first') {
                                onlineFirstSelected.call(this);
                            } else {
                                onlineAgainSelected.call(this)
                            }
                        } else {
                            onlineFirstSelected.call(this);
                            onlineAgainSelected.call(this);
                        }
                        ;
                        let checklist = [];
                        this.modeData.checkedDefut.forEach(it => {
                            this.vipList.forEach(function (item) {
                                if (item.label === it) {
                                    checklist.push(item)
                                }
                            });
                        });
                        let member_level = checklist.map(function (item) {
                            return item.value
                        }).join(',');
                        //  优惠类型多选
                        let type_idList = this.type_idList, typeList = [], type_id = this.modeData.type_id;
                        for (let m = 0; m < type_id.length; m++) {
                            for (let n = 0; n < type_idList.length; n++) {
                                if (type_id[m] == type_idList[n].value) {
                                    typeList.push({
                                        "id": FORMATINT(type_idList[n].value),
                                        "name": type_idList[n].label
                                    });
                                }
                            }
                        }

                        let cover = []
                        cover.push({"mobile":this.modeData.coverPic1})
                        cover.push({"pc":this.modeData.coverPic2})
                        let formData = {
                            name: this.modeData.name,
                            types: typeList,
                            title: this.modeData.title,
                            begin_time: this.modeData.begin_time,
                            end_time: this.modeData.end_time,
                            description: this.modeData.description,
                            // cover: this.modeData.cover,
                            cover:cover,
                            open_mode: parseInt(this.modeData.open_mode),
                            language_id: parseInt(this.modeData.language_id),
                            language_name: lan ? lan.label : '',
                            sort: parseInt(this.modeData.sort),
                            content: this.modeData.content,
                            content2: this.modeData.content2,
                            link: this.modeData.link,
                            status: this.modeData.status,
                            rule_type: 'favorable',
                            rule: {
                                template_id: 9,
                                extra: {
                                    visible: this.modeData.extra.visible
                                },
                                rule: {
                                    company: company,
                                    online: online
                                },
                                luckydraw_condition: null,
                                limit_times: 0,
                                withdraw_require: 'times',
                                withdraw_require_val: this.modeData.withdrawRequireVal,
                                member_level: member_level,
                                issue_time: '0',
                                issue_cycle: 'day',
                                issue_mode: this.modeData.issue_mode,
                            }
                        };
                        if (type === 'add') {
                            let url = URL.api + `/active/template.fix`;
                            this.$.autoAjax('put', url, formData, {
                                ok: (data) => {
                                    if (data.state === 0) {
                                        let str = LANG['添加成功'] || '添加成功';
                                        this.$message.success(str);
                                        setTimeout(function () {
                                            _this.$router.push({path: 'addActiveSet'})
                                        }, 1000)
                                    } else if (data.state > 3) {
                                        this.$message.error(data.msg)
                                    } else {
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
                            // this.$http.put(url, formData, URLCONFIG).then((data) => {
                            //     if (data.data.state === 0) {
                            //         let str = LANG['添加成功'] || '添加成功';
                            //         this.$message.success(str);
                            //         setTimeout(function () {
                            //             _this.$router.push({path: 'addActiveSet'})
                            //         }, 1000)
                            //     }else if(data.data.state > 3){
                            //         this.$message.error(data.data.msg)
                            //     }else {
                            //         let str = LANG['修改失败'] || '修改失败';
                            //         this.$message.error(str)
                            //     }
                            // })
                        } else {
                            let url = URL.api + `/active/template.fix/${this.seachData.id}`
                            this.$.autoAjax('put', url, formData, {
                                ok: (data) => {
                                    if (data.state === 0) {
                                        let str = LANG['修改成功'] || '修改成功';
                                        this.$message.success(str)
                                        setTimeout(function () {
                                            _this.$router.push({path: 'activeSet'})
                                        }, 1000)
                                    } else if (data.state > 3) {
                                        this.$message.error(data.msg)
                                    } else {
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
                        }
                    } else {
                        _this.$message.error('请检查表单')
                        return false;
                    }
                });
            },
            goBack(type) {
                type == "add" ? this.$router.push({path: 'addActiveSet'}) : this.$router.push({path: 'activeSet'});
            },
            // doSaveFile(obj) {
            //     this.modeData.cover = obj.url[0];
            // },
            doSaveFile1(obj1) {
                this.modeData.coverPic1 = obj1.file;
            },
            doSaveFile2(obj2) {
                this.modeData.coverPic2 = obj2.file;
            },
            changeLanguage(value) {
                let languageList = this.languageList;
            },
            // 新增公司首存优惠
            addCompanyFirst() {
                let obj = {
                    money: '',
                    type: '1',
                    prize: '',
                    upper_limit: '',
                    radio: 'fixedBonus'
                }
                this.modeData.company.first.push(obj)
            },
            // 删除公司首存优惠
            delectCompanyFirst(index) {
                this.modeData.company.first.splice(index, 1)
            },
            // 新增公司再存优惠
            addCompanyAgain() {
                let obj = {
                    money: '',
                    type: '1',
                    prize: '',
                    upper_limit: '',
                    radio: 'fixedBonus'
                }
                this.modeData.company.again.push(obj)
            },
            // 删除公司再存优惠
            delectCompanyAgain(data, index) {
                this.modeData.company.again.splice(index, 1)
            },
            // 新增线上首存优惠
            addOnlineFirst(pay) {
                let obj = {
                    money: '',
                    type: '1',
                    prize: '',
                    upper_limit: '',
                    radio: 'fixedBonus'
                }
                this.modeData.online[pay].first.push(obj)
            },
            // 删除线上首存优惠
            delectOnlineFirst(index, pay) {
                this.modeData.online[pay].first.splice(index, 1)
            },
            // 新增线上再存优惠
            addOnlineAgain(pay) {
                let obj = {
                    money: '',
                    type: '1',
                    prize: '',
                    upper_limit: '',
                    radio: 'fixedBonus'
                }
                this.modeData.online[pay].again.push(obj)
            },
            // 删除线上再存优惠
            delectOnlineAgain(index, pay) {
                this.modeData.online[pay].again.splice(index, 1)
            },
            timeChange(obj) {
                setTimeout(() => {
                    this.$refs.form.validateField('begin_time')
                    this.$refs.form.validateField('end_time')
                })
            },
            checkDeposit(rule, value, callback) {
                let onlineEmpty = true;
                for (let key in value.onlineCheck) {
                    if (value.onlineCheck[key].length > 0) {
                        onlineEmpty = false;
                    }
                }
                if (value.companyCheck.length > 0 || !onlineEmpty) {
                    callback();
                } else {
                    callback(new Error(LANG['至少选择一种入款方式'] || '至少选择一种入款方式'));
                }
            },
            validatorCompanyFirstMoney(rule, value, callback) {
                if (this.modeData.companyCheck.indexOf('first') !== -1) {
                    this.validatorNumber.apply(this, arguments)
                } else {
                    callback();
                }
            },
            validatorCompanyAgainMoney(rule, value, callback) {
                if (this.modeData.companyCheck.indexOf('again') !== -1) {
                    this.validatorNumber.apply(this, arguments)
                } else {
                    callback();
                }
            },
            validatorOnlineFirstMoney(rule, value, callback) {
                if (this.modeData.onlineCheck.indexOf('first') !== -1) {
                    this.validatorNumber.apply(this, arguments)
                } else {
                    callback();
                }
            },
            validatorOnlineAgainMoney(rule, value, callback) {
                if (this.modeData.onlineCheck.indexOf('again') !== -1) {
                    this.validatorNumber.apply(this, arguments)
                } else {
                    callback();
                }
            },
            //优惠规则数字验证
            validatorCompanyFirstTypeNumber(rule, value, callback) {
                let key = this.companyFirstType;
                if (key !== '') {
                    if (this.modeData.company.first[key].type === '2') {
                        this.validatorNumber.apply(this, arguments)
                    } else {
                        callback();
                    }
                } else {
                    callback();
                }
            },
            validatorCompanyFirstMoneyNumber(rule, value, callback) {
                let key = this.companyFirstType;
                if (key !== '') {
                    if (this.modeData.company.first[key].type === '1') {
                        this.validatorNumber.apply(this, arguments)
                    } else {
                        callback();
                    }
                } else {
                    callback();
                }
            },
            companyFirstInputBlur(key) {
                //储存第几行的数据
                this.companyFirstType = key;
            },
            companyCheckChange() {
                this.modeData.checkDeposit.companyCheck = this.modeData.companyCheck
                this.$refs.form.validateField('checkDeposit');
            },
            companyFirstTypeChange() {
                let key = this.companyFirstType;
                this.$refs.companyFirstInput.forEach((item, index) => {
                    item.handleBlur()
                })
            },
            //优惠规则数字验证
            validatorCompanyAgainTypeNumber(rule, value, callback) {
                let key = this.companyAgainType;
                if (key !== '') {
                    if (this.modeData.company.again[key].type === '2') {
                        this.validatorNumber.apply(this, arguments)
                    } else {
                        callback();
                    }
                } else {
                    callback();
                }
            },
            validatorCompanyAgainMoneyNumber(rule, value, callback) {
                let key = this.companyAgainType;
                if (key !== '') {
                    if (this.modeData.company.again[key].type === '1') {
                        this.validatorNumber.apply(this, arguments)
                    } else {
                        callback();
                    }
                } else {
                    callback();
                }
            },
            companyAgainInputBlur(key) {
                //储存第几行的数据
                this.companyAgainType = key;
            },
            companyAgainTypeChange() {
                this.$refs.companyAgainInput.forEach(item => {
                    item.handleBlur()
                })
            },
            //优惠规则数字验证
            validatorOnlineFirstTypeNumber(rule, value, callback) {
                let key = this.onlineFirstType;
                if (key !== '') {
                    if (this.modeData.online.first[key].type === '2') {
                        this.validatorNumber.apply(this, arguments)
                    } else {
                        callback();
                    }
                } else {
                    callback();
                }
            },
            validatorOnlineFirstMoneyNumber(rule, value, callback) {
                let key = this.onlineFirstType;
                if (key !== '') {
                    if (this.modeData.online.first[key].type === '1') {
                        this.validatorNumber.apply(this, arguments)
                    } else {
                        callback();
                    }
                } else {
                    callback();
                }
            },
            onlineCheckChange(pay) {
                this.modeData.checkDeposit.onlineCheck[pay] = this.modeData.onlineCheck[pay];
                this.$refs.form.validateField('checkDeposit');
            },
            onlineFirstInputBlur(key) {
                //储存第几行的数据
                this.onlineFirstType = key;
            },
            onlineFirstTypeChange() {
                this.$refs.onlineFirstInput.forEach(item => {
                    item.handleBlur()
                })
            },
            //优惠规则数字验证
            validatorOnlineAgainTypeNumber(rule, value, callback) {
                let key = this.onlineAgainType;
                if (key !== '') {
                    if (this.modeData.online.again[key].type === '2') {
                        this.validatorNumber.apply(this, arguments)
                    } else {
                        callback();
                    }
                } else {
                    callback();
                }
            },
            validatorOnlineAgainMoneyNumber(rule, value, callback) {
                let key = this.onlineAgainType;
                if (key !== '') {
                    if (this.modeData.online.again[key].type === '1') {
                        this.validatorNumber.apply(this, arguments)
                    } else {
                        callback();
                    }
                } else {
                    callback();
                }
            },
            onlineAgainInputBlur(key) {
                //储存第几行的数据
                this.onlineAgainType = key;
            },
            onlineAgainTypeChange() {
                this.$refs.onlineAgainInput.forEach(item => {
                    item.handleBlur()
                })
            },
            radioChange(value) {
                this.linkShow = value == '4' ? false : true;
                // this.modeData.link = value == '4'?null:this.modeData.link;
                // this.markDownShow = value == '4' ? true:false;
                if (value == '4') {
                    this.pcshow = true;
                    this.mbshow = true;
                    this.rules.content.push({message: '请输入pc活动规则', trigger: "change", required: true})
                    this.rules.content2.push({message: '请输入H5活动规则', trigger: "change", required: true});
                } else {
                    this.rules.content2.shift();
                    this.rules.content.shift();
                    this.pcshow = false;
                    this.mbshow = false;
                    // this.modeData.content = '';
                    // this.modeData.content2 = '';
                }
            },
            // 动态验证富文本字符长度
            getconLength(data) {
                this.nowcontentNum = data.num;
                if (data.num) {
                    setTimeout(() => {
                        this.$refs.form.validateField(data.key);
                    }, 100);
                }
            },
            //数字验证
            validatorNumber(rule, value, callback) {
                //检测值是不是为空
                if (!value) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                    return;
                }
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value.toString().replace(/^\s+|\s+$/, ''))) {
                    if (isNaN(value) || !!value.replace(/^\s+|\s+$/, '') == false) {
                        callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                    } else {
                        callback(new Error(LANG['小数点后不超过两位'] || '小数点后不超过两位'));
                    }
                } else {
                    if (value < 0) {
                        callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                    } else if (value > 9999999) {
                        callback(new Error(LANG['输入金额不能大于9999999'] || '输入金额不能大于9999999'));
                    } else {
                        callback();
                    }
                }
            },
            doShowError(obj) {
                //确认登出
                if (obj.fn == "doError") {
                    this.$router.replace('/activeSet');
                }

            },
            //  返回上页
            returnPage() {
                this.$router.replace('/addActiveSet');
            }
        },
        computed: {},
        activated() {
            this.init()
        },
        beforeRouteLeave(to, from, next) {
            this.$refs.form.resetFields();
            this.checkKeys = []; //清空选中游戏
            this.arrList = [];
            this.vipList = [];
            this.modeData.description = '';
            this.modeData.content = '';
            this.modeData.content2 = '';
            this.pcshow = false;
            this.mbshow = false;
            next(true);
        }
    };
</script>
<style scoped>
    .tip {
        color: orangered;
    }

    .payName {
        border-bottom: 1px solid #ccc;
        font-weight: bold;
    }

    .tCent {
        padding-bottom: 10px;
    }

    #activeMode .Layout {
        padding: 10px 4%;
    }

    #activeMode .w80 {
        width: 80%;
    }

    #activeMode .el-radio + .el-radio {
        margin-left: 0;
    }

    #activeMode .el-checkbox{
        margin-left: 0;
        margin-right: 15px;
    }

    .clear {
        zoom: 1
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
        width: 40%;
    }

    .to-inline-block .ruleInput {
        width: 80px;
    }

    .addPadding {
        padding-bottom: 20px;
    }

    /*.checkContainer .el-input {*/
    /*display: inline-block;*/
    /*}*/
    .radioGroup {
        width: 50%;
    }
</style>
