<template>
    <div id="formEdit" v-loading.body="formLoading" v-if="showEditFrom">
        <el-dialog :title="formTitel" v-model="formVisible.state" :size="size"
                   v-if="type != 'search' && type != 'twoCol' && !formLoading" @close="closeDialog('noReset')">
            <el-form :model="editForm" :rules="rules" ref="editForm" :label-width="labelWidth" class="pb10">
                <div v-for="(item,index) in formConfig" :key="index">
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'title'">
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'remind'">
                        <span>{{LANG[item.remind] || item.remind}}</span>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type === 'label'">
                        <span class="help_gray">{{editForm[item.prop]}}</span>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'text' || item.type == 'phone' || item.type == 'email' || item.type == 'url' || item.type == 'textarea' || item.type == 'ip' || item.type == 'account') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <el-input v-model="editForm[item.prop]" v-if="!(item.type == 'textarea') "
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  :disabled="(item.disabled?true:false)" @change="changeInput(item.prop)"></el-input>
                        <el-input v-model="editForm[item.prop]" type="textarea" v-if="item.type == 'textarea'"
                                  :rows="(parseInt(item.rows) || 5)"
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  @change="changeTextarea(editForm[item.prop])"
                                  :disabled="(item.disabled?true:false)"></el-input>
                        <span class="help_red"
                              v-if="item.type == 'textarea'&& textareaTest && textareaTest.type && editForm[item.prop].length>textareaTest.length">不能超过 <span>{{textareaTest.length}}</span>个字符最大长度</span>
                        <span class="help_gray"
                              v-if="item.type == 'textarea'&& textareaTest && textareaTest.type && editForm[item.prop].length<=textareaTest.length">当前还可以输入 <span>{{textareaTest.length - editForm[item.prop].length}}</span> 个字符</span>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'password') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <el-input v-model="editForm[item.prop]" type="password" v-if="!showPass"
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  :disabled="(item.disabled?true:false)">
                            <el-button slot="append" @click="showpass" v-if="item.showpasswordname != false">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </el-button>
                        </el-input>
                        <el-input v-model="editForm[item.prop]" type="text" v-if="showPass"
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  :disabled="(item.disabled?true:false)">
                            <el-button slot="append" @click="showpass">
                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                            </el-button>
                        </el-input>
                    </el-form-item>
                    <!--匹配第三方支付和结算方式-->
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'passwordType')  && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <el-input v-model="editForm[item.prop]" type="password" v-if="!showPass">
                            <el-button slot="append" @click="showpass">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </el-button>
                        </el-input>
                        <el-input v-model="editForm[item.prop]" type="text" v-if="showPass">
                            <el-button slot="append" @click="showpass">
                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                            </el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'repeatPassword') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <el-input v-model="editForm[item.prop]" type="password" v-if="!showPass"
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  :disabled="(item.disabled?true:false)">
                            <el-button slot="append" @click="showpass">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                            </el-button>
                        </el-input>
                        <el-input v-model="editForm[item.prop]" type="text" v-if="showPass"
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  :disabled="(item.disabled?true:false)">
                            <el-button slot="append" @click="showpass">
                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                            </el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'button') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <el-button @click="doButtonClick(item)">{{item.text}}</el-button>
                        <span style="margin-left:10px;">{{item.value}}</span>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'number') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <el-input v-model="editForm[item.prop]" type="number"
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  :disabled="(item.disabled?true:false)"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'select') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <el-select v-model="editForm[item.prop]" :placeholder="LANG['请选择'] || '请选择'"
                                   @change="changeSelect(item.propVal,item.list,editForm[item.prop],item.relation,item.relationKey,item.linkArr,item.prop)"
                                   :disabled="item.disabled">
                            <el-option v-for="(option,index) in item.list" :key="index" :label="option.label"
                                       :value="option.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'dateGroup') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :required="(item.required ?item.required: false)">
                        <el-col :span="11">
                            <el-form-item :prop="item.prop[0].prop">
                                <datetimepicker v-model="editForm[item.prop[0].prop]" :datekey="item.prop[0].prop"
                                                :isEnd="false" @get-val="getDateVal"
                                                :showTime="item.showTime"></datetimepicker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line textcenter" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item :prop="item.prop[1].prop">
                                <datetimepicker v-model="editForm[item.prop[1].prop]" :datekey="item.prop[1].prop"
                                                :isEnd="true" @get-val="getDateVal"
                                                :showTime="item.showTime"></datetimepicker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <!--分割线-->
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'numberGroup') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)">
                        <el-col :span="11">
                            <el-form-item :prop="item.prop[0].prop">
                                <el-input v-model="editForm[item.prop[0].prop]" type="number" size="small"
                                          class="intW"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item :prop="item.prop[1].prop">
                                <el-input v-model="editForm[item.prop[1].prop]" type="number" size="small"
                                          class="intW"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'datePicker') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <mydatepick v-model="editForm[item.prop]" @get-date="getDateval"
                                    :datekey="item.prop"></mydatepick>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'datePickernotime') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <datepick v-model="editForm[item.prop]" @get-date="getDayVal" :datekey="item.prop"></datepick>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'dateWeek') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <el-date-picker type="week" :placeholder="LANG['选择周']  || '选择周'" v-model="editForm[item.prop]"
                                        @change="changeWeek(editForm[item.prop],item.propOne,item.propTwo)"></el-date-picker>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'switch') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <el-switch v-model="editForm[item.prop]"></el-switch>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'checkGroup') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <el-checkbox :indeterminate="isIndeterminate[item.prop]" v-model="checkAll[item.prop]"
                                     @change="handleCheckAllChange($event,index,item.prop)" v-show="item.allBtnShow">
                            {{LANG['全选'] || '全选'}}
                        </el-checkbox>
                        <el-checkbox-group v-model="editForm[item.prop]"
                                           @change="handleCheckedCitiesChange($event,index,item.prop)">
                            <el-checkbox v-for="(box,index) in item.list" :key="index" :label="LANG[box] || box"
                                         name="type" class="mr10">{{item.Arr | formatcheckitem(box)}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'checkbox') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <el-checkbox v-model="editForm[item.prop]">{{LANG[item.valLabel] || item.valLabel}}
                        </el-checkbox>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'radioGroup') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <el-radio-group v-model="editForm[item.prop]"
                                        @change="changeRadio(item.checkIndex,item.arr,editForm[item.prop],item.propkey)">
                            <el-radio v-for="(rad,index) in item.list" :key="index"
                                      :label="LANG[rad.value] || rad.value">{{rad.label}}
                            </el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type == 'dateTimeGroup') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :required="(item.required ?item.required: false)">
                        <el-col :span="11">
                            <el-form-item :prop="item.prop[0].prop">
                                <datetimepicker v-model="editForm[item.prop[0].prop]" :datekey="item.prop[0].prop"
                                                :isEnd="false" @get-val="getDateVal"
                                                :showTime="item.showTime"></datetimepicker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line textcenter" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item :prop="item.prop[1].prop">
                                <datetimepicker v-model="editForm[item.prop[1].prop]" :datekey="item.prop[1].prop"
                                                :isEnd="true" @get-val="getDateVal"
                                                :showTime="item.showTime"></datetimepicker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type =='markdown') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <markdownEdit v-model="editForm[item.prop]" :id="item.prop" :config="item.config"
                                      @getContentLength="getconLength"></markdownEdit>
                        <!--<span class="help_red" v-if="textareaTest && textareaTest.type && editForm[item.prop].length && textareaTest.length && editForm[item.prop].length > textareaTest.length" >不能超过 <span>{{textareaTest.length}}</span>个字符最大长度</span>-->
                        <!--<span class="help_gray" v-if="item.type == 'markdown' && textareaTest && textareaTest.type && editForm[item.prop].length && textareaTest.length && editForm[item.prop].length <= textareaTest.length" >当前还可以输入 <span>{{textareaTest.length-editForm[item.prop].length}}</span> 个字符</span>-->
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="(item.type =='upload') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                                  :prop="item.prop">
                        <!--<upload @response="doSaveFile" :keys="item.prop" :folder="item.folder" :isInit="imgInit" :arrList="item.value" :fileNum="item.fileNum"></upload>-->
                        <upload @doUpload="doUpload" :keys="item.prop" v-if="item.prop"></upload>
                    </el-form-item>
                </div>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button class="formCancel" @click="resetForm('no')">{{LANG['取消'] || '取消'}}</el-button>
                <el-button class="formSave" type="primary" @click="saveForm">{{LANG['保存'] || '保存'}}</el-button>
              </span>
        </el-dialog>
        <el-col :span="24" v-if="formConfig[0].type == 'quickDate' && !formLoading" style="margin-bottom: 10px;">
            <quickDate :reSet="reSet" @get-day="getDay" :defaultId=" formConfig[0].defaultId "
                       v-if="formConfig[0].defaultId" :showTimes="formConfig[0].showTimes"></quickDate>
            <quickDate :reSet="reSet" @get-day="getDay" v-else :showTimes="formConfig[0].showTimes"></quickDate>
        </el-col>
        <el-form :model="editForm" :rules="rules" ref="editForm" :label-width="labelWidth"
                 v-if="type == 'search' && !formLoading" :inline="true" class="search">
            <el-form-item v-for="(item,index) in formConfig" :key="index">
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="item.type == 'text' || item.type == 'phone' || item.type == 'email' || item.type == 'url' || item.type == 'ip' || item.type == 'account' || item.type == 'textarea'"
                              :prop="item.prop">
                    <el-input v-model="editForm[item.prop]" v-if="item.type != 'textarea' && item.style" size="small"
                              class="intW" :placeholder="LANG[item.placeholder] || item.placeholder"
                              :disabled="(item.disabled?true:false)" style="width: 250px !important;"></el-input>
                    <el-input v-model="editForm[item.prop]" class="intW"
                              v-if="item.type != 'textarea' && item.style == undefined" size="small"
                              :placeholder="LANG[item.placeholder] || item.placeholder"
                              :disabled="(item.disabled?true:false)" :class="{width150: item.width150}"></el-input>
                    <el-input v-model="editForm[item.prop]" type="textarea" v-if="item.type == 'textarea'"
                              :rows="(item.rows || 1)" size="small"
                              :placeholder="LANG[item.placeholder] || item.placeholder"
                              :disabled="(item.disabled?true:false)" :style="{ width: item.width + 'px' }"></el-input>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'number'" :prop="item.prop">
                    <el-input v-model="editForm[item.prop]" type="number" class="intW" size="small"
                              :placeholder="LANG[item.placeholder] || item.placeholder"
                              :disabled="(item.disabled?true:false)"></el-input>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type =='select') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-select v-model="editForm[item.prop]" :placeholder="LANG['请选择'] || '请选择'" class="intW"
                               size="small"
                               @change="changeSelect(item.propVal,item.list,editForm[item.prop],item.relation,item.relationKey,item.linkArr,item.prop)"
                               :filterable="item.filterable" :disabled="item.disabled">
                        <el-option v-for="(option,index) in item.list" :key="index" :label="option.label"
                                   :value="option.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type =='selectString') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-select v-model="editForm[item.prop]" :placeholder="LANG['请选择'] || '请选择'" class="intW"
                               size="small"
                               @change="changeSelect(item.propVal,item.list,editForm[item.prop],item.relation,item.relationKey,item.linkArr,item.prop)"
                               :filterable="item.filterable" :disabled="item.disabled">
                        <el-option v-for="(option,index) in item.list" :key="index" :label="option.label"
                                   :value="option.value"></el-option>
                    </el-select>
                    <el-input v-model="editForm[item.propInput]" type="text" class="intW" size="small"
                              style="width:120px;" :placeholder="LANG[item.Inputplaceholder] || item.Inputplaceholder"
                              :disabled="(item.disabled?true:false)"></el-input>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'dateGroup'">
                    <el-col :span="11">
                        <el-form-item :prop="item.prop[0].prop">
                            <datetimepicker v-model="editForm[item.prop[0].prop]" :datekey="item.prop[0].prop"
                                            :isEnd="false" :showTime="item.showTime"></datetimepicker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line textcenter" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item :prop="item.prop[1].prop">
                            <datetimepicker v-model="editForm[item.prop[1].prop]" :datekey="item.prop[1].prop"
                                            :isEnd="true" :showTime="item.showTime"></datetimepicker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'dateTimeGroup') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :required="(item.required ?item.required: false)">
                    <el-col :span="11">
                        <el-form-item :prop="item.prop[0].prop">
                            <datetimepicker v-model="editForm[item.prop[0].prop]" :datekey="item.prop[0].prop"
                                            :isEnd="false" :showTime="item.showTime"></datetimepicker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line textcenter" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item :prop="item.prop[1].prop">
                            <datetimepicker v-model="editForm[item.prop[1].prop]" :datekey="item.prop[1].prop"
                                            :isEnd="true" :showTime="item.showTime"></datetimepicker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'numberGroup'">
                    <el-col :span="11">
                        <el-form-item :prop="item.prop[0].prop">
                            <el-input v-model="editForm[item.prop[0].prop]" type="number" size="small"
                                      class="intW"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item :prop="item.prop[1].prop">
                            <el-input v-model="editForm[item.prop[1].prop]" type="number" size="small"
                                      class="intW"></el-input>
                        </el-form-item>
                    </el-col>
                    <!--<inputGroup :type="'numberGroup'" :opts="item.prop[0].prop" :optE="item.prop[1].prop" @get-val="getGroupVal" :reset="reSet"></inputGroup>-->
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="item.type == 'datePicker' && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <mydatepick v-model="editForm[item.prop]" @get-date="getDateval" :datekey="item.prop"></mydatepick>
                    <!--<el-date-picker type="date" :placeholder="LANG['选择日期'] || '选择日期'" v-model="editForm[item.prop]" size="small" ></el-date-picker>-->
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'dateWeek') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-date-picker type="week" format="yyyy 第 WW 周" :placeholder="LANG['选择日期']  || '选择日期'"
                                    v-model="editForm[item.prop]"
                                    @change="changeWeek(editForm[item.prop],item.propOne,item.propTwo)"></el-date-picker>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'switch'" :prop="item.prop">
                    <el-switch v-model="editForm[item.prop]"></el-switch>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'checkGroup'"
                              :prop="item.prop">
                    <el-checkbox :indeterminate="isIndeterminate[item.prop]" v-model="checkAll[item.prop]"
                                 @change="handleCheckAllChange($event,index,item.prop)" v-show="item.allBtnShow"
                                 class="fl mr10">{{LANG['全选'] || '全选'}}<span class="ml10">|</span></el-checkbox>
                    <el-checkbox-group v-model="editForm[item.prop]"
                                       @change="handleCheckedCitiesChange($event,index,item.prop)" class="fl">
                        <el-checkbox v-for="(box,index) in item.list" :key="index" :label="LANG[box] || box" name="type"
                                     class="mr10">{{item.Arr | formatcheckitem(box)}}
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'checkbox'" :prop="item.prop">
                    <el-checkbox v-model="editForm[item.prop]">{{LANG[item.valLabel] || item.valLabel}}</el-checkbox>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'radioGroup'"
                              :prop="item.prop">\
                    <el-radio-group v-model="editForm[item.prop]">
                        <el-radio v-for="(rad,index) in item.list" :key="index" :label="LANG[rad] || rad"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form-item>
            <el-form-item class="ml20">
                <el-button type="primary" size="small" @click="doQuery">{{LANG['查询'] || '查询'}}</el-button>
                <el-button type="primary" size="small" @click="resetForm('ok')">{{LANG['重置'] || '重置'}}</el-button>
            </el-form-item>
        </el-form>
        <el-col style="text-align: right;margin-top: -10px;" v-if="type == 'search' && !formLoading">
            <el-button type="primary" size="small" @click="addNew" class="tRight addBut" v-if="showAdd">{{addText}}
            </el-button>
        </el-col>
        <el-dialog :title="formTitel" v-model="formVisible.state" v-if="type=='twoCol' && !formLoading" :size="large"
                   @close="closeDialog">
            <el-form :model="editForm" :rules="rules" ref="editForm" :label-width="labelWidth">
                <el-col v-for="(item,index) in formConfig" :key="index"
                        :span="(!(item.type == 'dateGroup' || item.type == 'checkGroup' || item.type == 'radioGroup' || item.type =='upload' || item.type =='markdown')?12:24)">
                    <el-form-item :label="LANG[item.label] || item.label"
                                  v-if="item.type == 'text' || item.type == 'phone' || item.type == 'email' || item.type == 'url' || item.type == 'account' || item.type == 'textarea'"
                                  :prop="item.prop">
                        <el-input v-model="editForm[item.prop]" v-if="!(item.type == 'textarea')"
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  :disabled="(item.disabled?true:false)"></el-input>
                        <el-input v-model="editForm[item.prop]" type="textarea" v-if="item.type == 'textarea'"
                                  :rows="(parseInt(item.rows) || 5)"
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  :disabled="(item.disabled?true:false)"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'password'"
                                  :prop="item.prop">
                        <el-input v-model="editForm[item.prop]" type="password" v-if="!showPass"
                                  :disabled="(item.disabled?true:false)">
                            <el-button slot="append" class="fa fa-eye" aria-hidden="true" v-model="showPass"
                                       :placeholder="LANG[item.placeholder] || item.placeholder"></el-button>
                        </el-input>
                        <el-input v-model="editForm[item.prop]" type="text" v-if="showPass"
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  :disabled="(item.disabled?true:false)">
                            <el-button slot="append" class="fa fa-eye-slash" aria-hidden="true"></el-button>
                        </el-input>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'repeatPassword'"
                                  :prop="item.prop">
                        <el-input v-model="editForm[item.prop]" type="password" v-if="!showPass"
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  :disabled="(item.disabled?true:false)"></el-input>
                        <el-input v-model="editForm[item.prop]" type="text" v-if="showPass"
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  :disabled="(item.disabled?true:false)"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'number'"
                                  :prop="item.prop">
                        <el-input v-model="editForm[item.prop]" type="number"
                                  :placeholder="LANG[item.placeholder] || item.placeholder"
                                  :disabled="(item.disabled?true:false)"></el-input>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'select'"
                                  :prop="item.prop">
                        <el-select v-model="editForm[item.prop]" :placeholder="LANG['请选择'] || '请选择'"
                                   @change="changeSelect(item.propVal,item.list,editForm[item.prop],item.relation,item.relationKey,item.linkArr,item.prop)"
                                   :disabled="item.disabled">
                            <el-option v-for="(option,index) in item.list" :key="index" :label="option.label"
                                       :value="option.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'datePicker'"
                                  :prop="item.prop">
                        <mydatepick v-model="editForm[item.prop]" @get-date="getDateval"
                                    :datekey="item.prop"></mydatepick>
                        <!--<el-date-picker type="date" :placeholder="LANG['选择日期'] || '选择日期'" v-model="editForm[item.prop]" ></el-date-picker>-->
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'dateWeek'"
                                  :prop="item.prop">
                        <!--<mydatepick v-model="editForm[item.prop[0].prop]"></mydatepick>-->
                        <el-date-picker type="week" :placeholder="LANG['选择周']  || '选择周'" v-model="editForm[item.prop]"
                                        @change="changeWeek(editForm[item.prop],item.propOne,item.propTwo)"></el-date-picker>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'switch'"
                                  :prop="item.prop">
                        <el-switch v-model="editForm[item.prop]"></el-switch>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'checkbox'"
                                  :prop="item.prop">
                        <el-checkbox v-model="editForm[item.prop]">{{LANG[item.valLabel] || item.valLabel}}
                        </el-checkbox>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'dateGroup'" required>
                        <el-col :span="11">
                            <el-form-item :prop="item.prop[0].prop">
                                <datetimepicker v-model="editForm[item.prop[0].prop]" :datekey="item.prop[0].prop"
                                                :isEnd="false" :showTime="item.showTime"></datetimepicker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line textcenter" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item :prop="item.prop[1].prop">
                                <datetimepicker v-model="editForm[item.prop[1].prop]" :datekey="item.prop[1].prop"
                                                :isEnd="true" :showTime="item.showTime"></datetimepicker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'checkGroup'"
                                  :prop="item.prop">
                        <el-checkbox :indeterminate="isIndeterminate[item.prop]" v-model="checkAll[item.prop]"
                                     @change="handleCheckAllChange($event,index,item.prop)" v-show="item.allBtnShow">
                            {{LANG['全选'] || '全选'}}
                        </el-checkbox>
                        <el-checkbox-group v-model="editForm[item.prop]"
                                           @change="handleCheckedCitiesChange($event,index,item.prop)">
                            <el-checkbox v-for="(box,index) in item.list" :key="index" :label="LANG[box] || box"
                                         name="type">{{item.Arr | formatcheckitem(box)}}
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type == 'radioGroup'"
                                  :prop="item.prop">
                        <el-radio-group v-model="editForm[item.prop]">
                            <el-radio v-for="(rad,index) in item.list" :key="index"
                                      :label="LANG[rad] || rad"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type =='upload'"
                                  :prop="item.prop">
                        <upload @doUpload="doUpload" :keys="item.prop"></upload><!--<upload  @response="doSaveFile" :keys="item.prop" :isInit="imgInit" :folder="item.folder"></upload>-->
                    </el-form-item>
                    <el-form-item :label="LANG[item.label] || item.label" v-if="item.type =='markdown' ">
                        <markdownEdit v-model="editForm[item.prop]" :id="item.prop" :config="item.config"
                                      @getContentLength="getconLength"></markdownEdit>
                    </el-form-item>
                    <!--</el-col>-->
                </el-col>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button class="formCancel" @click="resetForm('no')">{{LANG['取消'] || '取消'}}</el-button>
                <el-button class="formSave" type="primary" @click="saveForm">{{LANG['保存'] || '保存'}}</el-button>
              </span>
        </el-dialog>
        <!--无弹窗FORM-->
        <el-form :model="editForm" :rules="rules" ref="editForm" :label-width="labelWidth" v-if="type === 'pageForm'">
            <div v-for="(item,index) in formConfig" :key="index">
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'text' || item.type == 'phone' || item.type == 'email' || item.type == 'url' || item.type == 'textarea' || item.type == 'ip') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-input v-model="editForm[item.prop]" v-if="!(item.type == 'textarea')"></el-input>
                    <el-input v-model="editForm[item.prop]" type="textarea" v-if="item.type == 'textarea'"
                              :rows="(parseInt(item.rows) || 5)"
                              @change="changeUrl(item.prop, item.domainType)"></el-input>
                    <span class="help_gray" v-if="item.prompt">{{item.prompt}}</span>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label" v-if="item.type === 'label'">
                    <span class="help_gray">{{editForm[item.prop]}}</span>
                </el-form-item>
                <el-form-item label="域名详情" v-if="item.type == 'textarea'">
                    <el-form-item v-if="wwwList.length && wwwList.length > 0 && item.domainType === 'front'">
                        <el-row v-for="(item,key) in wwwList" :key="key">
                            <!--手风琴效果-->
                            <el-collapse accordion :class="{mt10:key>0}">
                                <el-collapse-item :title="item.url" :name="key">
                                    <el-col :span="24" class="bmBorder">
                                        <div class="grid-content tCent">
                                            <ul>
                                                <li class="w20 fl bg-purple">{{LANG['用途'] || '用途'}}</li>
                                                <li class="w40 fl bg-purple">{{LANG['域名'] || '域名'}}</li>
                                                <li class="w40 fl bg-purple">{{LANG['指向域名'] || '指向域名'}}</li>
                                            </ul>
                                        </div>
                                    </el-col>
                                    <!--推广域名-->
                                    <el-col :span="24" class="bmBorder">
                                        <div class="grid-content tCent">
                                            <ul>
                                                <li class="w20 fl bg-purple-light">{{item.master_wwwlabel}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.master_wwwUrl}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.master_wwwUrllocalhost}}</li>
                                            </ul>
                                        </div>
                                    </el-col>
                                    <el-col :span="24" class="bmBorder">
                                        <div class="grid-content tCent">
                                            <ul>
                                                <li class="w20 fl bg-purple-light">{{item.wwwlabel}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.wwwUrl}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.wwwUrllocalhost}}</li>
                                            </ul>
                                        </div>
                                    </el-col>

                                    <el-col :span="24" class="bmBorder">
                                        <div class="grid-content tCent">
                                            <ul>
                                                <li class="w20 fl bg-purple-light">{{item.mlabel}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.mUrl}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.mUrllocalhost}}</li>
                                            </ul>
                                        </div>
                                    </el-col>
                                    <el-col :span="24" class="bmBorder">
                                        <div class="grid-content tCent">
                                            <ul>
                                                <li class="w20 fl bg-purple-light">{{item.agentLabel}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.agentUrl}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.agentUrllocalhost}}</li>
                                            </ul>
                                        </div>
                                    </el-col>
                                    <el-col :span="24" class="bmBorder">
                                        <div class="grid-content tCent">
                                            <ul>
                                                <li class="w20 fl bg-purple-light">{{item.apilabel}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.apiUrl}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.apiUrllocalhost}}</li>
                                            </ul>
                                        </div>
                                    </el-col>
                                    <el-col :span="24" class="bmBorder">
                                        <div class="grid-content tCent">
                                            <ul>
                                                <li class="w20 fl bg-purple-light">{{item.resLabel}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.res}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.reslocalhost}}</li>
                                            </ul>
                                        </div>
                                    </el-col>
                                </el-collapse-item>
                            </el-collapse>

                        </el-row>
                    </el-form-item>
                    <el-form-item v-if="wwwList.length > 0 && item.domainType === 'end'">
                        <el-row v-for="(item,key) in wwwList" :key="key">
                            <!--手风琴效果-->
                            <el-collapse accordion :class="{mt10:key>0}">
                                <el-collapse-item :title="item.url" :name="key">

                                    <el-col :span="24" class="bmBorder">
                                        <div class="grid-content tCent">
                                            <ul>
                                                <li class="w20 fl bg-purple">{{LANG['用途'] || '用途'}}</li>
                                                <li class="w40 fl bg-purple">{{LANG['域名'] || '域名'}}</li>
                                                <li class="w40 fl bg-purple">{{LANG['指向域名'] || '指向域名'}}</li>
                                            </ul>
                                        </div>
                                    </el-col>

                                    <el-col :span="24" class="bmBorder">
                                        <div class="grid-content tCent">
                                            <ul>
                                                <li class="w20 fl bg-purple-light">{{item.adminlabel}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.adminUrl}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.adminlocalhost}}</li>
                                            </ul>
                                        </div>
                                    </el-col>

                                    <el-col :span="24" class="bmBorder">
                                        <div class="grid-content tCent">
                                            <ul>
                                                <li class="w20 fl bg-purple-light">{{item.cpilabel}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.cpiUrl}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.cpilocalhost}}</li>
                                            </ul>
                                        </div>
                                    </el-col>

                                    <el-col :span="24" class="bmBorder">
                                        <div class="grid-content tCent">
                                            <ul>
                                                <li class="w20 fl bg-purple-light">{{item.rpiLabel}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.rpiUrl}}</li>
                                                <li class="w40 fl bg-purple-light">{{item.rpilocalhost}}</li>
                                            </ul>
                                        </div>
                                    </el-col>

                                </el-collapse-item>
                            </el-collapse>
                        </el-row>
                    </el-form-item>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'password') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-input v-model="editForm[item.prop]" type="password" v-if="!showPass">
                        <el-button slot="append" @click="showpass">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </el-button>
                    </el-input>
                    <el-input v-model="editForm[item.prop]" type="text" v-if="showPass">
                        <el-button slot="append" @click="showpass">
                            <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        </el-button>
                    </el-input>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'repeatPassword') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-input v-model="editForm[item.prop]" type="password" v-if="!showPass">
                        <el-button slot="append" @click="showpass">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </el-button>
                    </el-input>
                    <el-input v-model="editForm[item.prop]" type="text" v-if="showPass">
                        <el-button slot="append" @click="showpass">
                            <i class="fa fa-eye-slash" aria-hidden="true"></i>
                        </el-button>
                    </el-input>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'button') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-button @click="doButtonClick(item)">{{item.text}}</el-button>
                    <img :src="editForm[item.prop] " alt="" v-if="editForm[item.prop]"
                         style="margin-left: 10px;vertical-align: top;" height="40px">
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'number') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-input v-model="editForm[item.prop]" type="number"></el-input>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'select') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-select v-model="editForm[item.prop]" :placeholder="LANG['请选择'] || '请选择'"
                               @change="changeSelect(item.propVal,item.list,editForm[item.prop],item.relation,item.relationKey,item.linkArr,item.prop)"
                               :disabled="item.disabled">
                        <el-option v-for="(option,index) in item.list" :key="index" :label="option.label"
                                   :value="option.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'dateGroup') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              required>
                    <el-col :span="11">
                        <el-form-item :prop="item.prop[0].prop">
                            <datetimepicker v-model="editForm[item.prop[0].prop]" :datekey="item.prop[0].prop"
                                            :isEnd="false" :showTime="item.showTime"></datetimepicker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line textcenter" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item :prop="item.prop[1].prop">
                            <datetimepicker v-model="editForm[item.prop[1].prop]" :datekey="item.prop[1].prop"
                                            :isEnd="false" :showTime="item.showTime"></datetimepicker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'numberGroup') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)">
                    <el-col :span="11">
                        <el-form-item :prop="item.prop[0].prop">
                            <el-input v-model="editForm[item.prop[0].prop]" type="number" size="small"
                                      class="intW"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">-</el-col>
                    <el-col :span="11">
                        <el-form-item :prop="item.prop[1].prop">
                            <el-input v-model="editForm[item.prop[1].prop]" type="number" size="small"
                                      class="intW"></el-input>
                        </el-form-item>
                    </el-col>
                    <!--<inputGroup :type="'numberGroup'" :opts="item.prop[0].prop" :optE="item.prop[1].prop" @get-val="getGroupVal" :reset="reSet"></inputGroup>-->
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'datePicker') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <mydatepick v-model="editForm[item.prop]" @get-date="getDateval" :datekey="item.prop"></mydatepick>
                    <!--<el-date-picker type="date" :placeholder="LANG['选择日期']  || '选择日期'" v-model="editForm[item.prop]" ></el-date-picker>-->
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'dateWeek') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-date-picker type="week" :placeholder="LANG['选择周']  || '选择周'" v-model="editForm[item.prop]"
                                    @change="changeWeek(editForm[item.prop],item.propOne,item.propTwo)"></el-date-picker>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'switch') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-switch v-model="editForm[item.prop]"></el-switch>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'checkGroup') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-checkbox :indeterminate="isIndeterminate[item.prop]" v-model="checkAll[item.prop]"
                                 @change="handleCheckAllChange($event,index,item.prop)" v-show="item.allBtnShow">
                        {{LANG['全选'] || '全选'}}
                    </el-checkbox>
                    <el-checkbox-group v-model="editForm[item.prop]"
                                       @change="handleCheckedCitiesChange($event,index,item.prop)">
                        <el-checkbox v-for="(box,index) in item.list" :key="index" :label="LANG[box] || box"
                                     name="type">{{item.Arr | formatcheckitem(box)}}
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'checkbox') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-checkbox v-model="editForm[item.prop]">{{LANG[item.valLabel] || item.valLabel}}</el-checkbox>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type == 'radioGroup') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <el-radio-group v-model="editForm[item.prop]"
                                    @change="changeRadio(item.checkIndex,item.arr,editForm[item.prop],item.propkey)">
                        <el-radio v-for="(rad,index) in item.list" :key="index" :label="LANG[rad.value] || rad.value">
                            {{rad.label}}
                        </el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type =='markdown') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)">
                    <markdownEdit v-model="editForm[item.prop]" :id="item.prop" :config="item.config"
                                  @getContentLength="getconLength"></markdownEdit>
                </el-form-item>
                <el-form-item :label="LANG[item.label] || item.label"
                              v-if="(item.type =='upload') && (item.ifKey ? (editForm[item.ifKey] == item.ifVal) :true)"
                              :prop="item.prop">
                    <!--<upload  @response="doSaveFile" :keys="item.prop" :folder="item.folder" :isInit="imgInit" :arrList="item.value" :fileNum="item.fileNum"></upload>-->
                    <upload @doUpload="doUpload" :keys="item.prop"></upload>
                </el-form-item>
            </div>
            <el-form-item class="ml20">
                <el-button class="formCancel" size="small" @click="resetForm('no')">{{LANG['取消'] || '取消'}}</el-button>
                <el-button type="primary" size="small" @click="saveForm('save')">{{LANG['保存'] || '保存'}}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import Vue from 'vue'
    import markdownEdit from './UEditor.vue'
    import changeAll from './changeAll.vue'
    import quickDate from './quickDate.vue'
    import inputGroup from './inputGroup.vue'
    import radioGroup from './radioGroup.vue'
    import upload from './upload.vue'
    import mydatepick from './dateTimePicker.vue'
    import datepick from './myDatePicker.vue'
    import datetimepicker from './dateTimePicker.vue'

    Vue.filter('formatcheckitem', (arrs, val) => {
        if (!val || arrs.length === undefined || arrs.length === 0) {
            return '';
        }
        for (let k = 0; k < arrs.length; k++) {
            if (arrs[k].value && arrs[k].value === val) {
                return arrs[k].label;
            }
        }
        return val;
    });
    export default {
        data() {
            return {
                LANG,
                checks: [],
                //显示密码
                showPass: false,
                wwwList: [],
                //全选按钮状态
                isIndeterminate: {},
                checkAll: {},
                //文件上传数组索引
                nowindex: -1,
                //选中值
                checkVal: [],
                checkKeys: [],
                //FORM数据
                editForm: {},
                rules: {},
                reSet: false,
                inputRset: false,
                //日期字段 KEY
                dateKey: [],
                dateGroupKeys: {},
                //单个时间字段
                datePickerKey: [],
                formLoading: false,
                updated: false,
                imgInit: false,
                numberMax: -1,
                numberMin: -1,
                // dateIimeGroupKey
                dateIimeGroupKeys: {},
                // markdownKey
                markdownKey: {},
                showEditFrom: true,
                nowcontentNum: 0,
                // 查询数据克隆
                cloneQuery: {},
                domainkeys: {}
            }
        },
        props: {
            //textarea 长度是否要做验证
            textareaTest: Object,
            //markdown 长度是否要做验证
            markdownTest: Object,
            //弹窗台头
            formTitel: {
                type: String,
                default: ""
            },
            //弹窗是否显示
            formVisible: {
                type: Object,
                default: function () {
                    return {state: false}
                }
            },
            formType: String,
            //弹窗大小
            size: {
                //tiny/small/large/full
                type: String,
                default: "large"
            },
            //弹窗上配置
            formConfig: Array,
            //表格LABEL宽度
            labelWidth: {
                type: String,
                default: "100px"
            },
            type: {
                type: String,
                default: "default"
            },
            isEdit: {
                type: Object,
                default: {
                    state: false
                }
            },
            showAdd: {
                type: Boolean,
                default: true
            },
            addText: {
                type: String,
                default: LANG['新增'] || '新增'
            },
            // 修改表单值  KEY和值中间用逗号隔开
            updateKeys: "",
            updateDate: "",
            initDate: {
                type: Boolean,
                default: false
            },
            // 拼接DOMAIN
            dnsUrl: {
                type: String,
                default: ""
            },
            // 是否重置FORM
            formReset: {
                type: Boolean,
                default: false
            },
            // 是否自动修改FORM值
            defaultForm: {
                type: Boolean,
                default: false
            }
        },
        components: {
            markdownEdit: markdownEdit,
            changeAll: changeAll,
            inputGroup: inputGroup,
            quickDate: quickDate,
            radioGroup: radioGroup,
            upload: upload,
            mydatepick: mydatepick,
            datetimepicker: datetimepicker,
            datepick: datepick
        },
        methods: {
            init() {
                let formConfig = this.formConfig;
                let editForm = this.editForm = {};
                let rules = this.rules;
                let checkAll = this.checkAll;
                let isIndeterminate = this.isIndeterminate;
                let checkKeys = this.checkKeys = [];
                let cloneQuery = this.cloneQuery = {};
                this.markdownKey = {};
                let _this = this;
                if (this.formVisible.state) {
                    this.formLoading = true;
                }
                if (this.formType == "add") {
                    FORMVAL([], this.formConfig);
                }
                this.datePickerKey = [];
                this.imgInit = true;
                this.updated = true;
                this.dateKey = [];
                let dateIimeGroupKeys = this.dateIimeGroupKeys = {};
                this.dateGroupKeys = {};
                if (formConfig) {
                    for (let i in formConfig) {
                        if (formConfig[i].type != 'dateGroup' && formConfig[i].type != 'numberGroup' && formConfig[i].type != "quickDate" && formConfig[i].type != 'select' && formConfig[i].type != 'checkGroup' && formConfig[i].type != "dateWeek" && formConfig[i].type != 'datePicker' && formConfig[i].type != "textarea" && formConfig[i].type != "selectString" && formConfig[i].type != 'remind' && formConfig[i].type != 'dateTimeGroup' && formConfig[i].type != 'markdown' && formConfig[i].type != 'datePickernotime') {
                            this.$set(editForm, formConfig[i].prop, formConfig[i].value);
                            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value);
                        } else if (formConfig[i].type == 'remind') {
                        } else if (formConfig[i].type == 'checkbox') {
                            this.$set(editForm, formConfig[i].prop, (formConfig[i].value || false));
                            this.$set(cloneQuery, formConfig[i].prop, (formConfig[i].value || false));
                        } else if (formConfig[i].type == 'markdown') {
                            formConfig[i].domname = 'markdown' + i;
                            formConfig[i].showdom = true;
                            this.markdownKey[formConfig[i].prop] = formConfig[i].prop;
                            this.$set(editForm, formConfig[i].prop, formConfig[i].value);
                            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value);
                        } else if (formConfig[i].type == "textarea") {
                            this.$set(editForm, formConfig[i].prop, formConfig[i].value);
                            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value);
                            this.changeUrl(formConfig[i].prop, formConfig[i].domainType);
                        } else if (formConfig[i].type == 'select') {
                            this.$set(editForm, formConfig[i].prop, formConfig[i].value);
                            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value);
                            if (formConfig[i].propVal) {
                                let arr = formConfig[i].list || [];
                                let nowv = "";
                                for (let k in arr) {
                                    if (arr[k].value && formConfig[i].value == arr[k].value) {
                                        nowv = arr[k].label || "";
                                    }
                                }
                                this.$set(editForm, formConfig[i].propVal, nowv);
                                this.$set(cloneQuery, formConfig[i].propVal, nowv);
                            }
                        } else if (formConfig[i].type == "selectString") {
                            this.$set(editForm, formConfig[i].prop, formConfig[i].value);
                            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value);
                            if (formConfig[i].propInput) {
                                this.$set(editForm, formConfig[i].propInput, '');
                                this.$set(cloneQuery, formConfig[i].propInput, '');
                            }
                        } else if (formConfig[i].type == 'datePicker' || formConfig[i].type == 'datePickernotime') {
                            let dateKey = this.dateKey, value = '';
                            dateKey.push(formConfig[i]["prop"]);
                            if (this.type === 'search' && this.initDate === false) {
                                value = sessionStorage.sysTime + ' 00:00:00';
                            } else {
                                if (formConfig[i]["prop"] && formConfig[i]["value"].length > 7 && !/0000-/.test(formConfig[i]["value"]) && !/NaN-NaN/.test(formConfig[i]["value"])) {
                                    let object = new Date(formConfig[i]["prop"][0]["value"]);
                                    value = object instanceof Date ? FORMATDAT(formConfig[i]["value"], 'yyyy-MM-dd HH:mm:ss') : '';
                                }
                            }
                            this.$set(editForm, formConfig[i]["prop"], value);
                            this.$set(cloneQuery, formConfig[i]["prop"], value);
                        } else if (formConfig[i].type == 'dateGroup' || formConfig[i].type == 'numberGroup' || formConfig[i].type == 'dateTimeGroup') {
                            let value1 = "";
                            let value2 = "";
                            if (formConfig[i].type == 'dateGroup' || formConfig[i].type == 'dateTimeGroup') {
                                let dateKey = this.dateKey;
                                dateKey.push(formConfig[i]["prop"][0]["prop"]);
                                dateKey.push(formConfig[i]["prop"][1]["prop"]);
                                this.dateIimeGroupKeys[formConfig[i]["prop"][1]["prop"]] = formConfig[i]["prop"][0]["prop"];
                                if (this.type === 'search' && (this.initDate === false)) {
                                    if (this.defaultForm) {
                                        if (formConfig[i]["prop"][0]["value"]) {
                                            let object = new Date(formConfig[i]["prop"][0]["value"]);
                                            value1 = object instanceof Date ? FORMATDAT(formConfig[i]["prop"][0]["value"], 'yyyy-MM-dd HH:mm:ss') : sessionStorage.sysTime + ' 00:00:00';
                                        }
                                        if (formConfig[i]["prop"][1]["value"]) {
                                            let object = new Date(formConfig[i]["prop"][1]["value"]);
                                            value2 = object instanceof Date ? FORMATDAT(formConfig[i]["prop"][1]["value"], 'yyyy-MM-dd HH:mm:ss') : sessionStorage.sysTime + ' 23:59:59';
                                        }
                                    } else {
                                        value1 = sessionStorage.dateTimeStart;
                                        value2 = sessionStorage.dateTimeEnd;
                                    }
                                } else if (formConfig[i].type == 'dateTimeGroup' || formConfig[i].type == 'dateGroup') {
                                    if (formConfig[i]["prop"][0]["value"] && formConfig[i]["prop"][0]["value"].length > 7 && !/0000-/.test(formConfig[i]["prop"][0]["value"]) && !/NaN-NaN/.test(formConfig[i]["prop"][0]["value"])) {
                                        let object = new Date(formConfig[i]["prop"][0]["value"]);
                                        value1 = object instanceof Date ? FORMATDAT(formConfig[i]["prop"][0]["value"], 'yyyy-MM-dd HH:mm:ss') : '';
                                    } else {
                                        value1 = '';
                                    }
                                    if (formConfig[i]["prop"][1]["value"] && formConfig[i]["prop"][1]["value"].length > 7 && !/0000-/.test(formConfig[i]["prop"][0]["value"]) && !/NaN-NaN/.test(formConfig[i]["prop"][0]["value"])) {
                                        let object = new Date(formConfig[i]["prop"][1]["value"]);
                                        value2 = object instanceof Date ? FORMATDAT(formConfig[i]["prop"][1]["value"], 'yyyy-MM-dd HH:mm:ss') : '';
                                    } else {
                                        value2 = '';
                                    }
                                }
                                this.$set(editForm, formConfig[i]["prop"][0].prop, value1);
                                this.$set(editForm, formConfig[i]["prop"][1].prop, value2);
                                this.$set(cloneQuery, formConfig[i]["prop"][0].prop, value1);
                                this.$set(cloneQuery, formConfig[i]["prop"][1].prop, value2);
                            } else {
                                value1 = formConfig[i]["prop"][0].value;
                                value2 = formConfig[i]["prop"][1].value;
                                this.$set(editForm, formConfig[i]["prop"][0].prop, value1);
                                this.$set(editForm, formConfig[i]["prop"][1].prop, value2);
                                this.$set(cloneQuery, formConfig[i]["prop"][0].prop, value1);
                                this.$set(cloneQuery, formConfig[i]["prop"][1].prop, value2);
                            }
                        } else if (formConfig[i].type == 'checkGroup') {
                            this.checkKeys.push(formConfig[i].prop);
                            this.$set(checkKeys, formConfig[i].prop, formConfig[i].prop);
                            this.$set(isIndeterminate, formConfig[i].prop, true);
                            this.$set(checkAll, formConfig[i].prop, true);
                            this.$set(editForm, formConfig[i].prop, formConfig[i].value);
                            this.$set(cloneQuery, formConfig[i].prop, formConfig[i].value);
                        } else if (formConfig[i].type == "dateWeek") {
                            this.$set(editForm, formConfig[i].prop, (new Date(formConfig[i].value)));
                            this.$set(editForm, formConfig[i].propOne, "");
                            this.$set(editForm, formConfig[i].propTwo, "");
                            this.$set(cloneQuery, formConfig[i].prop, (new Date(formConfig[i].value)));
                            this.$set(cloneQuery, formConfig[i].propOne, "");
                            this.$set(cloneQuery, formConfig[i].propTwo, "");
                        }
                        if (formConfig[i].type == 'email' || formConfig[i].type == 'url' || formConfig[i].type == 'phone' || formConfig[i].type == 'repeatPassword' || formConfig[i].type == 'ip' || formConfig[i].fns) {
                            rules[formConfig[i].prop] = [];
                        }
                        if (formConfig[i].rules || formConfig[i].required || formConfig[i].fns || formConfig[i].moreZero || formConfig[i].integer) {
                            rules[formConfig[i].prop] = [];
                            for (let key in formConfig[i].rules) {
                                if (formConfig[i].rules[key].require && formConfig[i].type != 'select' && formConfig[i].type != 'dateGroup' && formConfig[i].type != 'checkGroup' && formConfig[i].type != "radioGroup" && formConfig[i].type != "upload" && formConfig[i].type != "textarea" && formConfig[i].type != 'datePicker' && formConfig[i].type != 'dateTimeGroup' && formConfig[i].type != 'datePickernotime') {
                                    rules[formConfig[i].prop].push({
                                        required: true,
                                        message: ((LANG['请输入'] || '请输入') + formConfig[i].label),
                                        trigger: 'blur'
                                    })
                                } else if (formConfig[i].rules[key].require && (formConfig[i].type == 'datePicker' || formConfig[i].type == 'datePickernotime')) {
                                    rules[formConfig[i].prop].push({
                                        required: true,
                                        message: (LANG['请选择时间'] || '请选择时间'),
                                        trigger: 'change'
                                    });
                                } else if (formConfig[i].rules[key].require && formConfig[i].type == 'select') {
                                    rules[formConfig[i].prop].push({
                                        required: true,
                                        message: ((LANG['请输入'] || '请输入') + formConfig[i].label),
                                        trigger: 'change'
                                    })
                                } else if (formConfig[i].rules[key].require && formConfig[i].type == "textarea") {
                                    if (formConfig[i].rulesType === "urls") {
                                        rules[formConfig[i].prop].push({
                                            required: true,
                                            message: ((LANG['请输入'] || '请输入') + formConfig[i].label),
                                            trigger: 'blur'
                                        })
                                        rules[formConfig[i].prop].push({
                                            validator: this.validatorUrls,
                                            trigger: 'change'
                                        })
                                    } else {
                                        rules[formConfig[i].prop].push({
                                            required: true,
                                            message: ((LANG['请输入'] || '请输入') + formConfig[i].label),
                                            trigger: 'blur'
                                        })
                                    }
                                } else if (formConfig[i].rules[key].require && (formConfig[i].type == 'dateGroup' || formConfig[i].type == 'dateTimeGroup')) {
                                    rules[formConfig[i]["prop"][0].prop] = []
                                    rules[formConfig[i]["prop"][1].prop] = []
                                    rules[formConfig[i]["prop"][0].prop].push({
                                        required: true,
                                        message: ((LANG['请选择'] || '请选择') + formConfig[i]["prop"][0].label),
                                        trigger: 'blur,change'
                                    })
                                    rules[formConfig[i]["prop"][1].prop].push({
                                        required: true,
                                        message: ((LANG['请选择'] || '请选择') + formConfig[i]["prop"][1].label),
                                        trigger: 'blur,change'
                                    })
                                    rules[formConfig[i]["prop"][1].prop].push({
                                        validator: this.validatorTimeEnd,
                                        trigger: 'blur,change'
                                    });
                                } else if (formConfig[i].rules[key].require && formConfig[i].type == 'checkGroup') {
                                    rules[formConfig[i].prop].push({
                                        type: 'array',
                                        required: true,
                                        message: ((LANG['请至少选择一项'] || '请至少选择一项') + formConfig[i].label),
                                        trigger: 'change'
                                    })
                                } else if (formConfig[i].rules[key].require && formConfig[i].type == 'radioGroup') {
                                    rules[formConfig[i].prop].push({
                                        required: true,
                                        message: ((LANG['请至少选择一项'] || '请至少选择一项') + formConfig[i].label),
                                        trigger: 'change'
                                    })
                                } else if (formConfig[i].type == "upload") {
                                    rules[formConfig[i].prop].push({
                                        type: 'array',
                                        required: true,
                                        message: ((LANG['请上传图片'] || '请上传图片') + formConfig[i].label),
                                        trigger: 'change'
                                    })
                                }
                                if (formConfig[i].rules[key].min != undefined && formConfig[i].rules[key].max != undefined && formConfig[i].type != 'select') {
                                    rules[formConfig[i].prop].push({
                                        min: formConfig[i].rules[key]['min'],
                                        max: formConfig[i].rules[key].max,
                                        message: ((LANG['输入应该在'] || '输入应该在') + formConfig[i].rules[key].min + '个字符和' + formConfig[i].rules[key].max + '个字符之间'),
                                        trigger: "blur"
                                    })
                                }
                                if (formConfig[i].rules[key].min != undefined && formConfig[i].rules[key].max == undefined && formConfig[i].type != 'select') {
                                    rules[formConfig[i].prop].push({
                                        min: formConfig[i].rules[key]['min'],
                                        message: ((LANG['输入不能少于'] || '输入不能少于') + formConfig[i].rules[key].min + '位'),
                                        trigger: "blur"
                                    })
                                }
                                if (formConfig[i].rules[key].max != undefined && formConfig[i].rules[key].min == undefined && formConfig[i].type != 'select') {
                                    rules[formConfig[i].prop].push({
                                        max: formConfig[i].rules[key].max,
                                        message: ((LANG['输入不能大于'] || '输入不能大于') + formConfig[i].rules[key].max + '位'),
                                        trigger: "blur"
                                    })
                                }
                                if (formConfig[i].rules[key].varMax != undefined && formConfig[i].rules[key].varMin != undefined && formConfig[i].type == 'number') {
                                    this.numberMax = formConfig[i].rules[key].varMax;
                                    this.numberMin = formConfig[i].rules[key].varMin;
                                    rules[formConfig[i].prop].push({
                                        validator: this.validatorNumberMinMax,
                                        trigger: 'blur'
                                    });
                                }
                                if (formConfig[i].rules[key].varMax != undefined && formConfig[i].rules[key].varMin == undefined && formConfig[i].type == 'number') {
                                    this.numberMax = formConfig[i].rules[key].varMax;
                                    rules[formConfig[i].prop].push({
                                        validator: this.validatorNumberMax,
                                        trigger: 'blur'
                                    });
                                }
                                if (formConfig[i].rules[key].fns) {
                                    rules[formConfig[i].prop].push({
                                        validator: this.formConfig[i].rules[key].fns,
                                        trigger: 'blur,change'
                                    });
                                }
                                if (formConfig[i].rules[key].moreZero) {
                                    if (formConfig[i].type == 'numberGroup') {
                                        rules[formConfig[i]["prop"][0]["prop"]] = [];
                                        rules[formConfig[i]["prop"][1]["prop"]] = [];
                                        rules[formConfig[i]["prop"][0]["prop"]].push({
                                            validator: this.validatorMoreZero,
                                            trigger: 'blur'
                                        });
                                        rules[formConfig[i]["prop"][1]["prop"]].push({
                                            validator: this.validatorMoreZero,
                                            trigger: 'blur'
                                        });
                                    } else {
                                        rules[formConfig[i].prop].push({
                                            validator: this.validatorMoreZero,
                                            trigger: 'blur'
                                        });
                                    }
                                }
                                if (formConfig[i].rules[key].integer) {
                                    rules[formConfig[i].prop].push({validator: this.validatorinteger, trigger: 'blur'});
                                }
                            }
                        }
                        if (formConfig[i].type == 'email') {
                            rules[formConfig[i].prop].push({
                                type: 'email',
                                message: (LANG['请输入正确的邮箱地址'] || '请输入正确的邮箱地址'),
                                trigger: 'blur,change'
                            });
                        }
                        if (formConfig[i].type == 'ip') {
                            rules[formConfig[i].prop].push({validator: this.validatorIP, trigger: 'blur'});
                        }
                        if (formConfig[i].type == 'url') {
                            rules[formConfig[i].prop].push({validator: this.validatorUrl, trigger: 'blur'});
                        }
                        if (formConfig[i].type == 'phone') {
                            rules[formConfig[i].prop].push({validator: this.validatorPhon, trigger: 'blur'});
                        }
                        if (formConfig[i].type == 'repeatPassword') {
                            rules[formConfig[i].prop].push({validator: this.validatePass, trigger: 'blur'});
                        }
                        if (formConfig[i].type == 'account') {
                            rules[formConfig[i].prop].push({validator: this.validateAccount, trigger: 'blur'});
                        }
                        if (formConfig[i].type == 'markdown' && formConfig[i].config && formConfig[i].config.maximumWords) {
                            rules[formConfig[i].prop].push({validator: this.validateMarkdown});
                            rules[formConfig[i].prop].push({
                                message: ((LANG['输入的文字不能超过'] || '输入的文字不能超过') + formConfig[i].config.maximumWords + (LANG['个字符'] || '个字符')),
                                trigger: 'blur,change'
                            });
                        }
                    }
                }
                this.imgInit = false;
                this.formLoading = false;
            },
            //保存FROM
            saveForm(str) {
                this.$refs.editForm.validate((valid) => {
                    console.log(valid)
                    if (valid) {
                        let statelist = {};
                        if (this.dateKey.length > 0) {
                            let keys = this.dateKey;
                            for (let k in keys) {
                                statelist[keys[k]] = true;
                                this.editForm[keys[k]] = FORMATDAT(this.editForm[keys[k]], 'yyyy-MM-dd HH:mm:ss');
                            }
                        }
                        if (this.datePickerKey.length) {
                            for (let k = 0; k < this.datePickerKey.length; k++) {
                                this.editForm[this.datePickerKey[k]] = FORMATDAT(this.editForm[this.datePickerKey[k]], 'yyyy-MM-dd HH:mm:ss');
                            }
                        }
                        let temp = {};
                        // 去除前后空格
                        for (let n in this.editForm) {
                            if (statelist[n] || (this.domainkeys['keys'] === n) || this.markdownKey[n]) {
                                temp[n] = this.editForm[n];
                            } else {
                                temp[n] = STRINGTRIM(this.editForm[n]);
                            }
                        }
                        this.$emit("get-form", {"formObj": temp});
                    } else {
                        this.$message.error(LANG['表单验证不通过，请查看填写内容！'] || '表单验证不通过，请查看填写内容！');
                        return false;
                    }
                    if (str !== 'save') {
                        this.resetForm('noReset');
                    }
                });
            },
            // 修改时间日期组件验证
            getDateVal(obj) {
                let tempkey = '';
                for (let k in this.dateIimeGroupKeys) {
                    if (k === obj.daykey) {
                        tempkey = this.dateIimeGroupKeys[k];
                    } else if (this.dateIimeGroupKeys[k] === obj.daykey) {
                        tempkey = k;
                    }
                }
                if (obj.data) {
                    setTimeout(() => {
                        this.$refs.editForm.validateField(obj.daykey);
                        if (tempkey) {
                            this.$refs.editForm.validateField(tempkey);
                        }
                    })
                }
            },
            // 验证富文本字符
            validateMarkdown(rule, value, callback) {
                let keys = rule.field, conLength = 0;
                for (let i = 0; i < this.formConfig.length; i++) {
                    if (this.formConfig[i].prop === keys) {
                        conLength = this.formConfig[i].config.maximumWords;
                        break;
                    }
                }
                if (this.nowcontentNum > conLength) {
                    callback(new Error((LANG['输入的文字不能超过'] || '输入的文字不能超过') + conLength + (LANG['个字符'] || '个字符')));
                } else {
                    callback()
                }
            },
            // 动态验证富文本字符长度
            getconLength(data) {
                this.nowcontentNum = data.num;
                if (data.num) {
                    setTimeout(() => {
                        this.$refs.editForm.validateField(data.key);
                    }, 100);
                }
            },
            //新增
            addNew() {
                this.$emit("add-new", {});
            },
            // 非空验证
            validatormydatepicker(rule, value, callback) {
                if (value) {
                    callback(new Error(LANG['请选择日期'] || '请选择日期'));
                } else {
                    callback()
                }
            },
            //重置FROM
            resetForm(str) {
                if (str === 'no') {
                    this.$emit("cancel-form", {"state": "init"});
                    // return;
                }
                this.reSet = false;
                this.inputRset = true;
                if (this.type !== 'search') {
                    this.$refs.editForm.resetFields();
                }
                this.formVisible.state = false;
                let _this = this;
                let isIndeterminate = this.isIndeterminate;
                for (let k in isIndeterminate) {
                    isIndeterminate[k] = true;
                }
                if (str === "ok") {
                    FORMVAL([], this.formConfig);
                    for (let i in this.formConfig) {
                        if (this.formConfig[i].type === 'selectString') {
                            let temp = this.formConfig[i].list || [];
                            for (let n = 0; n < temp.length; n++) {
                                if (this.editForm[temp[n].propInput]) {
                                    this.editForm[temp[n].propInput] = '';
                                }
                            }
                            if (this.editForm[this.formConfig[i].propInput]) {
                                this.editForm[this.formConfig[i].propInput] = '';
                            }
                        } else if (this.formConfig[i].type === 'dateGroup' || this.formConfig[i].type === 'dateTimeGroup') {
                            if (this.initDate === false) {
                                let value1 = sessionStorage.sysTime + '00:00:00';
                                let value2 = sessionStorage.sysTime + '23:59:59';
                                this.editForm[this.formConfig[i]["prop"][0].prop] = value1;
                                this.editForm[this.formConfig[i]["prop"][1].prop] = value2;
                            } else {
                                this.editForm[this.formConfig[i]["prop"][0].prop] = this.formConfig[i]["prop"][0].value;
                                this.editForm[this.formConfig[i]["prop"][1].prop] = this.formConfig[i]["prop"][1].value;
                            }
                        } else if (this.formConfig[i].type === 'numberGroup') {
                            if (this.initDate === false) {
                                this.editForm[this.formConfig[i]["prop"][0].prop] = '';
                                this.editForm[this.formConfig[i]["prop"][1].prop] = '';
                            } else {
                                this.editForm[this.formConfig[i]["prop"][0].prop] = this.formConfig[i]["prop"][0].value;
                                this.editForm[this.formConfig[i]["prop"][1].prop] = this.formConfig[i]["prop"][1].value;
                            }
                        } else {
                            let type = typeof(this.editForm[this.formConfig[i].prop]), key = this.formConfig[i].prop;

                            switch (type) {
                                case 'string':
                                    this.editForm[key] = '';
                                    break;
                                case 'object':
                                    this.editForm[key] = [];
                                    break;
                                case 'boolean':
                                    this.editForm[key] = '';
                                    break;
                            }
                        }
                    }
                    for (let m in this.editForm) {
                        if (typeof(this.editForm[m]) === 'object') {
                            for (let n in this.editForm[m]) {
                                this.cloneQuery[m][n] = this.editForm[m][n];
                            }
                        } else {
                            this.cloneQuery[m] = this.editForm[m];
                        }
                    }
                    this.$emit("reset-form", {"state": "init", "form": this.editForm});
                }
                setTimeout(() => {
                    _this.inputRset = false;
                    _this.updated = false;
                    if (str !== 'noReset') _this.reSet = true;
                }, 500);
            },
            //重复密码验证
            validatePass(rule, value, callback) {
                if (value !== this.editForm.password) {
                    callback(new Error(LANG['两次输入密码不一致'] || '两次输入密码不一致!'));
                } else {
                    callback();
                }
            },
            // 验证结束时间
            validatorTimeEnd(rule, value, callback) {
                let list = this.dateIimeGroupKeys, s_key = '', editForm = this.editForm;
                for (let k in list) {
                    if (k === rule.field) {
                        s_key = list[k];
                    }
                }
                if (s_key) {
                    if (ISDATE(editForm[rule.field]) && ISDATE(editForm[s_key])) {
                        if (new Date(value).getTime() < new Date(editForm[s_key]).getTime()) {
                            callback(new Error(LANG['结束间不能小于开始时间'] || '结束间不能小于开始时间!'));
                        } else {
                            callback();
                        }
                    } else {
                        callback();
                    }
                } else {
                    callback();
                }
            },
            // 验证是否大于
            validatorMoreZero(rule, value, callback) {
                if (value && FORMATNUMBER(value) < 0) {
                    callback(new Error(LANG['不能输入负数'] || '不能输入负数'));
                }
                else {
                    callback()
                }
            },
            //验证是否为整数
            validatorinteger(rule, value, callback) {
                let integer = /^[0-9]*[0-9][0-9]*$/;
                if (!integer.test(value)) {
                    callback(new Error(LANG['请输入整数'] || '请输入整数'));
                } else {
                    callback();
                }
            },
            //IP验证
            validatorIP(rule, value, callback) {
                if (value && !/^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/.test(value)) {
                    callback(new Error(LANG['请输入合法的IP地址'] || '请输入合法的IP地址!'));
                }
                else {
                    callback()
                }
            },
            //URL验证
            validatorUrl(rule, value, callback) {
                if (value && !/^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/.test(value)) {
                    callback(new Error(LANG['网址格式为http://www.***.com或者https://www.***.com'] || '网址格式为http://www.***.com或者https://www.***.com'));
                } else {
                    callback()
                }
            },
            // URLS验证
            validatorUrls(rule, value, callback) {
                if (value) {
                    let list = value.replace(new RegExp('\r\n|\n\r|\n|\r', 'g'), '|').split('|');
                    let num = 0;
                    list.forEach((v) => {
                        if (v && /[a-zA-Z0-9-]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/.test(v) === false) {
                            callback(new Error(v + (LANG['域名不合法，请修改后重试'] || '域名不合法,请修改后重试')));
                            num++;
                        }
                    })
                    if (num === 0) {
                        callback();
                    }
                } else {
                    callback();
                }
            },
            //手机验证
            validatorPhon(rule, value, callback) {
                if (value && !/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(value)) {
                    callback(new Error(LANG['请输入合法的手机号码'] || '请输入合法的手机号码'));
                }
                else {
                    callback()
                }
            },
            //数字验证
            validatorNumber(rule, value, callback) {
                if (value && !/^[0-9]*$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else {
                    if (value < 0) {
                        callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                    } else {
                        callback();
                    }
                }
            },
            // 验证银行账号
            validateAccount(rule, value, callback) {
                if (!value) {
                    callback(new Error(LANG['账号不能为空'] || '账号不能为空'));
                } else if (!/^[0-9]+$/.test(value)) {
                    callback(new Error(LANG['账号必须全部由数字组成'] || '账号必须全部由数字组成'));
                } else {
                    callback();
                }
            },
            // 数字大小验证
            validatorNumberMinMax(rule, value, callback) {
                if (value && (value < this.numberMin || value > this.numberMax)) {
                    callback(new Error((LANG['金额应该在'] || '金额应该在') + this.numberMin + (LANG['和'] || '和') + this.numberMax + (LANG['之间'] || '之间')));
                } else {
                    callback();
                }
            },
            validatorNumberMax(rule, value, callback) {
                if (value && value > this.numberMax) {
                    callback(new Error((LANG['金额不能大于'] || '金额不能大于') + this.numberMax));
                } else {
                    callback();
                }
            },
            validatorNumberMin(rule, value, callback) {
                if (value && value < this.numberMin) {
                    callback(new Error((LANG['金额不能小于'] || '金额不能小于') + this.numberMax));
                } else {
                    callback();
                }
            },
            //验证结束金额
            validatorLasterNumber(rule, value, callback) {
                if (value && !/^[0-9]*$/.test(value)) {
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                } else if (value <= this.editForm['money_from']) {
                    callback(new Error(LANG['结束金额应该大于起始金额'] || '结束金额应该大于起始金额'));
                } else {
                    callback();
                }
            },
            //验证结束时间
            validatorLasterDate(rule, value, callback) {
                let date_s = Date.parse(this.editForm["dateStart"]);
                let date_e = Date.parse(value);
                if (date_e <= date_s) {
                    callback(new Error(LANG['结束日期应该大于起始日期'] || '结束日期应该大于起始日期'));
                } else {
                    callback();
                }
            },
            //全选多选框
            handleCheckAllChange(e, index, formprop) {
                let event = window.event || e;
                let obj = event.srcElement ? event.srcElement : event.target;
                this.checkVal = obj.checked ? this.formConfig[index].list : [];
                this.editForm[formprop] = obj.checked ? this.formConfig[index].list : [];
                this.isIndeterminate[formprop] = false;
            },
            //多选组点击事件
            handleCheckedCitiesChange(e, index, formprop) {
                let checkedCount = this.editForm[formprop].length;
                this.checkAll[formprop] = checkedCount === this.formConfig[index].list.length;
                this.isIndeterminate[formprop] = checkedCount > 0 && checkedCount < this.formConfig[index].list.length;
            },
            //重置全选数据
            changeReset() {
                this.checkVal = [];
                this.checkedval.checked = [];
                let checks = this.checkAll;
                let isIndeterminate = this.isIndeterminate;
                for (let k in checks) {
                    checks[k] = false;
                    isIndeterminate[k] = false;
                }
            },
            //文本框值修改
//            changeText(obj){
//                this.editForm[obj.keys] = obj.val;
//            },
            //执行查询
            doQuery() {
                let _this = this;
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        let config = _this.formConfig;
                        let query = {};
                        for (let k in config) {
                            if (config[k].type == "dateGroup") {
                                query[config[k]["prop"][0]["prop"]] = FORMATDAT(_this.editForm[config[k]["prop"][0]["prop"]], 'yyyy-MM-dd HH:mm:ss')
                                query[config[k]["prop"][1]["prop"]] = FORMATDAT(_this.editForm[config[k]["prop"][1]["prop"]], 'yyyy-MM-dd HH:mm:ss')
                            } else if (config[k].type === 'dateTimeGroup') {
                                query[config[k]["prop"][0]["prop"]] = _this.editForm[config[k]["prop"][0]["prop"]];
                                query[config[k]["prop"][1]["prop"]] = _this.editForm[config[k]["prop"][1]["prop"]];
                            } else if (config[k].type == "numberGroup") {
                                _this.editForm[config[k]["prop"][0]["prop"]] = isNaN(parseInt(_this.editForm[config[k]["prop"][0]["prop"]])) ? "" : parseInt(_this.editForm[config[k]["prop"][0]["prop"]]);
                                _this.editForm[config[k]["prop"][1]["prop"]] = isNaN(parseInt(_this.editForm[config[k]["prop"][1]["prop"]])) ? "" : parseInt(_this.editForm[config[k]["prop"][1]["prop"]]);
                                query[config[k]["prop"][0]["prop"]] = _this.editForm[config[k]["prop"][0]["prop"]];
                                query[config[k]["prop"][1]["prop"]] = _this.editForm[config[k]["prop"][1]["prop"]];
                            } else if (config[k].type == "selectString") {
                                _this.editForm[config[k].propInput] = STRINGTRIM(_this.editForm[config[k].propInput]);
                                query[_this.editForm[config[k].prop]] = STRINGTRIM(_this.editForm[config[k].propInput]);
                            } else if (config[k].type !== "quickDate") {
                                _this.editForm[config[k].prop] = STRINGTRIM(_this.editForm[config[k].prop]);
                                query[config[k].prop] = STRINGTRIM(_this.editForm[config[k].prop]);
                            }
                        }
                        if (EQUALOBJECT(_this.editForm, _this.cloneQuery)) {
                            Bus.$emit('form_query', true);
                        } else {
                            _this.$emit('do-query', {"item": query});
                        }
                        for (let i in _this.editForm) {
                            if (typeof(_this.editForm[i]) === 'object') {
                                for (let n in _this.editForm[i]) {
                                    _this.cloneQuery[i][n] = _this.editForm[i][n];
                                }
                            } else {
                                _this.cloneQuery[i] = _this.editForm[i];
                            }
                        }
                    }
                })

            },
            //快捷日期事件
            getDay(obj) {
                let dateKey = this.dateKey;
                this.editForm[dateKey[0]] = obj.sday;
                this.editForm[dateKey[1]] = obj.eday;
                this.$emit("get-day", {
                    "sday": obj.sday,
                    "eday": obj.eday
                });
            },
            //组件事件
            getGroupVal(obj) {
                if (obj.item) {
                    this.copyEditForm[obj.keyS] = obj.item.optStart;
                    this.copyEditForm[obj.keyE] = obj.item.optEnd;
                }
            },

            //获取RADIOGROUP值
            getRadioVal(obj) {
                this.editForm[obj.key] = obj.val;
            },
            //切换密码
            showpass() {
                this.showPass = !this.showPass;
            },
            //单选组切换事件
            changeRadio(checkIndex, arr, val, propkey) {
                if (!val) {
                    return;
                }
                if (checkIndex >= 0) {
                    for (let k in arr) {
                        if (arr[k].value === val) {
                            let obj = this.formConfig[checkIndex].list = [];
                            for (let n in arr[k].list) {
                                obj.push(arr[k].list[n]);
                            }
                            this.editForm[propkey] = obj[0].value || obj[0].label;

                        }
                    }
                }
                this.$emit("change-radio", {"item": val});
            },
            //下拉切换事件
            changeSelect(key, arr, val, relation, relationKey, linkArr, prop) {
                if (!val) {
                    return;
                }
                if (key) {
                    let Arr = arr || [];
                    for (let k in Arr) {
                        if (Arr[k].value == val) {
                            this.editForm[key] = Arr[k].label;
                        }
                        if (Arr[k].label == val) {
                            this.editForm[key] = Arr[k].value;
                        }
                    }
                }
                if (relation) {
                    let index = -1;
                    for (let j in arr) {
                        if (arr[j].value == val) {
                            index = j;
                        }
                    }
                    if (index >= 0) {
                        this.formConfig[relationKey].list = [];
                        for (let k in linkArr) {
                            if (k === index) {
                                let model = linkArr[k] || {};
                                for (let n in model) {
                                    this.formConfig[relationKey].list.push(model[n]);
                                }

                            }
                        }
                    }
                }
                if (arr.length) {
                    for (let k = 0; k < arr.length; k++) {
                        if (this.editForm[arr[k].ifkey] != undefined) {
                            this.editForm[arr[k].ifkey] = '';
                            break;
                        }
                    }
                }
                this.$emit("get-select", {"key": prop, "obj": this.editForm});
            },
            // 按钮点击事件
            doButtonClick(obj) {
                this.$emit("get-button", {"item": obj});
            },
            //关闭弹窗
            closeDialog(str) {
                this.resetForm(str);
                this.showEditFrom = false;
//                this.init();
            },
            //周组件切换
            changeWeek(val, keyOne, keyTwo) {
                let t = new Date(val);
                let e = t.valueOf() + 6 * 24 * 60 * 60 * 1000;
                this.editForm[keyOne] = FORMATDATEPICKER(val);
                this.editForm[keyTwo] = FORMATDATEPICKER(e);
            },
            // 保存上传文件
//            doSaveFile(obj){
//                let list = obj.url || [];
//                this.editForm[obj.key] = [];
//                for(let k in list){
//                    this.editForm[obj.key].push(list[k]);
//                }
//            },
            doUpload(o){
                this.editForm[o.key].push(o.file);
            },
            // 域名配置列表
            changeUrl(keys, domainType) {
                this.domainkeys.keys = keys;
                let str = this.editForm[keys];
                this.wwwList.splice(0, this.wwwList.length);
                let arr = this.wwwList;
                let dnsUrl = this.dnsUrl || window.location.host;
                if (str) {
                    let list = str.replace(new RegExp('\r\n|\n\r|\n|\r', 'g'), '|').split('|');
                    for (let k = 0; k < list.length; k++) {
                        if (list[k] != "" && /\w+.[a-zA-Z]+(.[a-zA-Z]+)?$/.test(list[k])) {
                            if (domainType === "front") {
                                arr.push({
                                    'url': list[k],
                                    'wwwlabel': 'PC站',
                                    'wwwUrl': "www." + list[k],
                                    "wwwUrllocalhost": "www." + dnsUrl,
                                    'master_wwwlabel': '主域',
                                    'master_wwwUrl': list[k],
                                    "master_wwwUrllocalhost": "www." + dnsUrl,
                                    'mlabel': 'H5',
                                    'mUrl': "m." + list[k],
                                    "mUrllocalhost": "m." + dnsUrl,
                                    'agentLabel': '代理站',
                                    'agentUrl': "agent." + list[k],
                                    "agentUrllocalhost": "agent." + dnsUrl,
                                    'apilabel': 'API',
                                    'apiUrl': "api." + list[k],
                                    "apiUrllocalhost": "api." + dnsUrl,
                                    'resLabel': '资源',
                                    'res': 'res.' + list[k],
                                    "reslocalhost": "res." + dnsUrl,
                                });
                            } else if (domainType === "end") {
                                arr.push({
                                    'url': list[k],
                                    'adminlabel': '厅主后台',
                                    'adminUrl': "admin." + list[k],
                                    "adminlocalhost": "admin." + dnsUrl,
                                    'cpilabel': 'API',
                                    'cpiUrl': "cpi." + list[k],
                                    "cpilocalhost": "cpi." + dnsUrl,
                                    'rpiLabel': 'RPI',
                                    'rpiUrl': 'rpi.' + list[k],
                                    "rpilocalhost": 'rpi.' + dnsUrl,
                                })
                            }
                        }
                    }
                }
            },
            // 日期单击回调
            getDayVal(obj) {
                if (obj.daykey && this.editForm[obj.daykey]) {
                    this.editForm[obj.daykey] = obj.day;
                }
            },
            // 日期时间值修改
//            getDateTimeval(val){
//                if(val.data){
//                    this.editForm[val.daykey] = val.data;
//                }
//            },
            // INPUT输入事件
            changeInput(key) {
                if (this.editForm[key]) {
                    this.$emit("get-input", {"key": key, "form": this.editForm});
                }
            },
            //textarea 输入事件
            changeTextarea(item) {
                let textareaVal = {length: item.length, value: item}
                this.$emit("get-textarea", textareaVal);
            },
        },
//        watch: {
//            formConfig: {
//                handler(val, old) {
//                    val.config.forEach((items) => {
//                        this.rules[items.prop] = items.rules;
//                    })
//                },
//                //是否绑定初始值
//                immediate: true,
//                //深度监听
//                deep: true
//            }
//        },
        watch: {
            formType: function (newval) {
                if (newval) {
                    this.init();
                }
            },
            'formVisible.state': function (newval) {
                if (newval) {
                    this.showEditFrom = true;
                    this.init();
                }
            },
            updateKeys: function (newval) {
                if (newval) {
                    let list = newval.split(',');
                    for (let i = 0; i < list.length; i++) {
                        if ((i === 0 || (i % 2) === 0) && typeof(this.editForm[list[i]]) != "undefined") {
                            let type = typeof(this.editForm[list[i]]), temp;
                            switch (type) {
                                case 'boolean':
                                    temp = (list[i + 1] && eval(list[i + 1].toLowerCase())) ? true : false;
                                    break;
                                case 'number':
                                    let num = parseInt(list[i + 1]);
                                    temp = isNaN(num) ? '' : num;
                                    break;
                                case 'object':
                                    if (this.$parent.setFormArray) {
                                        this.$parent.setFormArray(list[i], this.editForm);
                                    }
                                    return;
                                default :
                                    temp = list[i + 1];
                                    break;
                            }
                            if (list[i] === 'redirect') {
                                if (this.$parent.setAllForm) {
                                    this.$parent.setAllForm(this.editForm);
                                }
                                return
                            }
                            this.editForm[list[i]] = temp;
                            this.cloneQuery[list[i]] = temp;
                        }
                    }
                }
            },
            updateDate: function (newval) {
                if (newval) {
                    let list = newval.split(',');
                    if (typeof(this.editForm[list[0]]) != "undefined") {
                        this.editForm[list[0]] = (list[1] ? list[1] : '');
                        this.cloneQuery[list[0]] = (list[1] ? list[1] : '');
                    }
                    if (typeof(this.editForm[list[2]]) != "undefined") {
                        this.editForm[list[2]] = (list[3] ? list[3] : '');
                        this.cloneQuery[list[2]] = (list[3] ? list[3] : '');
                    }
                }
            },
            formReset: function (newval) {
                if (newval) {
                    this.resetForm('ok');
                }
            }
        },
        mounted() {
        },
        activated() {
            let _this = this;
            this.init();
            Bus.$on('form_Reset', function (v) {
                if (v && _this.$refs.editForm) {
                    _this.resetForm('ok');
                }
            })
        },
        created() {
            this.init();
        },
        deactivated() {
            this.editForm = {};
            this.checkKeys = [];
            this.cloneQuery = {};
        }
    }
</script>
<style>
    #formEdit .search {
        min-width: 860px;
    }

    #formEdit .el-date-editor.el-input {
        width: 120px;
        height: 30px;
    }

    #formEdit .el-form-item:first-child {
        margin-right: 0;
    }

    #formEdit .el-input__inner {
        height: 30px;
    }

    #formEdit .formbtn {
        float: left
    }

    #formEdit .el-form-item__content .el-date-editor .el-icon-date {
        padding-top: 3px;
    }

    #formEdit .el-dialog__wrapper .el-dialog .el-dialog__body .el-form {
        overflow: inherit;
    }

    #formEdit .el-dialog__wrapper .el-dialog .el-dialog__body .el-form .el-select {
        width: 100%;
    }

    #formEdit .el-checkbox + .el-checkbox {
        margin-left: 0px;
    }

    #formEdit .el-dialog__wrapper .el-dialog .el-dialog__body .el-checkbox {
        margin-right: 15px;
    }

    #formEdit .el-radio__label {
        white-space: initial;
    }

    #formEdit .el-radio-group {
        width: 100%;
    }

    #formEdit .width150 {
        width: 155px !important;
    }
</style>
