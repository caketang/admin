<template>
    <div id="tableSingle" v-loading="loading" ref="tableSingle">
        <el-col class="tRight mb20" v-if="showExport || autoshowRefresh">
            <span v-if="autoshowRefresh">{{LANG['刷新'] || '刷新'}}</span>
            <el-select v-model="times" placeholder="请选择" size="small" class="intW mr10" @change="changeTimes"
                       v-if="autoshowRefresh">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" size="small" @click.stop="exportData" v-if="showExport">{{LANG['导出'] || '导出'}}
            </el-button>
        </el-col>
        <el-col class="tRight mb20" v-if="!showExport">
            <el-col :span="12" style="text-align:left;margin-bottom: 10px;">
                <a href="javascript:;" class="linkCell tag_link tCent" @click.stop="headTextFn($evnet,headTextconf)"
                   v-if="headTextconf.show">{{headTextconf.label}}</a>
            </el-col>
            <el-col :span="12" v-if="showRefresh" style="margin-bottom: 10px">
                <el-button type="primary" size="small" class="addBut" @click.stop="doRefresh">{{LANG['刷新'] || '刷新'}}
                </el-button>
            </el-col>
        </el-col>
        <div v-if="saveData && checkSum === 0" class="tRight mb10">
            <el-button type="primary" size="small" @click.stop="dataSave">{{LANG['保存'] || '保存'}}</el-button>
        </div>
        <el-col v-if="checkSum && checkList.length" class="ft14 line_height30">
            <label for="" class="fl mr10 pleft mb10">{{LANG['您选择了'] || '您选择了'}}
                <span class="selecttext">{{checkSum}}</span>{{LANG['条数据'] || '条数据'}} </label>
            <div v-if="tabOperation !=undefined" class="btngroup">
                <el-button size="small" v-for="(opt,index) in tabOperation" :key="index"
                           @click.stop="doOperation(opt.fn)">{{LANG[opt.label] || opt.label}}
                </el-button>
            </div>
            <div class="w40" v-if="lockShow">
                <el-select v-model="levelSelectvalue" class="intW" placeholder="请选择" size="small"
                           @change="all_select_data">
                    <el-option
                        v-for="item in listArr"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <el-switch
                    v-model="lockSwitch"
                    on-value="1"
                    off-value="0"
                    @change="all_switch_data"
                >
                </el-switch>
                <!--<el-button type="primary" size="small" @click="alldataSave" class="ml10">{{LANG['保存批量'] || '保存批量'}}</el-button>-->
                <span class="comments font12 ml10 help_gray">提示：锁定后的会员层级不能被移动分层。</span>
            </div>
        </el-col>
        <el-card class="box-card pb" id="table_card">
            <div id="tables" class="tablesOverall">
                <table cellspacing="0" cellpadding="0" border="1" class="el-table w100 el-table--border">
                    <tr>
                        <th v-if="tableCheck && tableDataList.length" style="text-align: center;">
                            <div class="cell">
                                <el-checkbox v-model="allChecked" @change="allchecked"></el-checkbox>
                            </div>
                        </th>
                        <th v-if="tableIndex && tableDataList.length">
                            <div class="cell">{{LANG['序号'] || '序号'}}</div>
                        </th>
                        <th class="is-leaf" v-for="(col,index) in columnList" :key="index" v-if="col.disabled == true"
                            :class="ascKey[col.prop]?ascKey[col.prop]:''">
                            <div class="cell" @click.stop="doSort(col.prop,col.sortType)" v-if="col.sort">
                                {{LANG[col.label] || col.label}}
                                <span class="caret-wrapper" v-if="col.sort">
                                    <i class="sort-caret ascending"></i>
                                    <i class="sort-caret descending"></i>
                                </span>
                            </div>
                            <div class="cell" v-else>{{LANG[col.label] || col.label}} <span v-if="col.sortRemarks"
                                                                                            class="defutFont"
                                                                                            style="font-size: 10px;">
                                <el-tooltip :content="col.sortRemarks || '前台实际展示时数字大的排在前面。'" placement="right"
                                            effect="light">
                                    <i class="el-icon-information"></i>
                                </el-tooltip>
                                 </span>
                            </div>
                        </th>
                    </tr>
                    <tr v-for="(item,k) in tableDataList" :key="k" :class="{col2 : !parseInt((k+1)%2)}"
                        v-if="tableDataList.length">
                        <td class="el-table_1_column_19" width="55px" v-if="tableCheck && tableDataList.length">
                            <div class="cell tCent">
                                <el-checkbox v-model="checkList[k]" @change="thisChecked(k)"></el-checkbox>
                            </div>
                        </td>
                        <td class="el-table_ 1_column_19" v-if="tableIndex && tableDataList.length">
                            <div class="cell tCent">{{parseInt(k) + 1}}</div>
                        </td>
                        <td class="el-table_1_column_19" v-for="(col,index) in columnList" :key="index"
                            v-if="col.disabled == true">
                            <div class="cell"
                                 v-if="col.type == 'date' || col.type == 'allState' || col.type == 'array' || col.type == 'filterConnect' || col.type == 'divisionMoney,fours'">
								<span
                                    :class="{state_blue:/new/.test(tableDataColen[k][col.prop])}">{{item[col.prop]}}</span>
                            </div>
                            <div class="cell" v-if="col.type == 'divisionMoney' && col.setred">
                                <span :class="{state_danger: parseFloat(item[col.prop]) < 0 }">{{item[col.prop]}}</span>
                            </div>
                            <!--connectArray-->
                            <div class="cell" v-if="col.type == 'connectArray'">
                                <span>{{item[col.prop]}}</span>
                            </div>
                            <div class="cell" v-if="col.type == 'divisionMoney' && !col.setred">
                                <span>{{item[col.prop]}}</span>
                            </div>
                            <div class="cell" v-if="col.type == 'lottory_play'">
                                <p>
                                    {{LANG['下注'] || '下注'}} ：{{item[col.prop.split(',')[0]] != undefined ? item[col.prop.split(',')[0]] : ''}}</p>
                                <p>
                                    {{LANG['开奖'] || '开奖'}} ：{{item[col.prop.split(',')[1]] != undefined ? item[col.prop.split(',')[1]] : ''}}</p>
                            </div>
                            <div class="cell" v-if="col.type == 'connectProp'">
                                <span>{{item[col.prop.split(',')[1]]}}</span>
                            </div>
                            <div class="cell" v-if="col.type == 'filterAdddivisionMoney'">
                                <span>{{item[col.prop.split(',')[1]]}}</span>
                            </div>
                            <div class="cell" v-if="col.type == 'connect_odds_type'">
                                <span>{{item[col.prop.split(',')[0]]}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'object'">
                                <span v-if="col.formatKey != 'bank'">{{item[col.prop.split(',')[1]]}}</span>
                                <div v-if="col.formatKey == 'bank'">
                                    <p v-if="col.prop.split(',')[1] !== undefined && col.prop.split(',')[1] != 'null'">
                                        {{LANG['户名'] || '户名'}}：{{item[col.prop.split(",")[0]][col.prop.split(",")[1]] || ""}}</p>
                                    <p v-if="col.prop.split(',')[2] !== undefined && col.prop.split(',')[2] != 'null'">
                                        {{LANG['账号'] || '账号'}}：{{item[col.prop.split(",")[0]][col.prop.split(",")[2]] || ""}}</p>
                                    <p v-if="col.prop.split(',')[3] !== undefined && col.prop.split(',')[3] != 'null'">
                                        {{LANG['银行名称'] || '银行名称'}}：{{item[col.prop.split(",")[0]][col.prop.split(",")[3]] || ""}}</p>
                                    <p v-if="col.prop.split(',')[4] !== undefined && col.prop.split(',')[4] != 'null'">
                                        {{LANG['支行'] || '支行'}}：{{item[col.prop.split(",")[0]][col.prop.split(",")[4]] || ""}}</p>
                                </div>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'object,prop'">
                                <div v-if="col.formatKey == 'bank'">
                                    <p v-if="col.prop.split(',')[1] !== undefined && col.prop.split(',')[1] != 'null'">
                                        {{LANG['户名'] || '户名'}}：{{item[col.prop.split(",")[0]][col.prop.split(",")[1]] || ""}}</p>
                                    <p v-if="col.prop.split(',')[3] !== undefined && col.prop.split(',')[3] != 'null'">
                                        {{LANG['账号'] || '账号'}}：{{item[col.prop.split(",")[0]][col.prop.split(",")[3]] || ""}}</p>
                                    <p v-if="col.prop.split(',')[2] !== undefined && col.prop.split(',')[2] != 'null'">
                                        {{LANG['银行名称'] || '银行名称'}}：{{item[col.prop.split(",")[2]][[col.prop.split(",")[5]]] || ""}}</p>
                                    <p v-if="col.prop.split(',')[4] !== undefined && col.prop.split(',')[4] != 'null'">
                                        {{LANG['支行'] || '支行'}}：{{item[col.prop.split(",")[0]][col.prop.split(",")[4]] || ""}}</p>
                                </div>
                            </div>
                            <!--<div class="cell" :class="{tCent:(col.class != undefined)?true:false}"-->
                            <!--v-if="!col.type && !col.filters">-->
                            <!--&lt;!&ndash;<span v-if="col.prop == 'admin_uid'">{{LANG['管理员'] || '管理员'}}</span>&ndash;&gt;-->
                            <!--<span>{{item[col.prop]}}</span>-->
                            <!--<span class="defutFont"-->
                            <!--v-if="item['t_default'] == '0'">[ {{LANG['系统默认'] || '系统默认'}} ]</span>-->
                            <!--</div>-->
                            <div class="cell" v-if="col.type && col.type == 'connectString'">
                                <p>{{LANG['户名'] || '户名'}}：{{item[col.prop.split(",")[0]] || ""}}</p>
                                <p>{{LANG['账号'] || '账号'}}：{{item[col.prop.split(",")[1]] || ""}}</p>
                                <p>{{LANG['支行'] || '支行'}}：{{item[col.prop.split(",")[2]] || ""}}</p>
                            </div>
                            <div class="cell" v-if="col.type && col.type == 'connectSdateEdate'">
                                <p>{{LANG['起始'] || '起始'}}：{{item[col.prop.split(",")[0]] || ""}}</p>
                                <p>{{LANG['结束'] || '结束'}}：{{item[col.prop.split(",")[1]] || ""}}</p>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'connectDate'">
                                <p>{{item[col.prop.split(",")[0]] || ""}}</p>
                                <p>{{item[col.prop.split(",")[1]] || ""}}</p>
                            </div>
                            <div
                                v-if="col.type == 'button' && ((item['t_default'] == undefined && col.filters == undefined) || item['t_default'] == '1')"
                                class="cell"
                                :class="{tCent:(col.class != undefined)?true:false}">
                                <div v-for="btn in col.btnGroup" style="float:left;margin-left:5px;">
                                    <el-button size="small"
                                               v-if="btn.prop == undefined && !tableDataColen[k][btn.valueKey] && btn.propOne == undefined && !col.hover"
                                               @click.stop="doHandle($event,tableDataColen[k],btn.fn)"
                                               :type="btn.btnType">{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                    <!--按钮的hover效果-->
                                    <el-tooltip placement="right" effect="light" v-if="col.hover && hoverData">
                                        <div slot="content">
                                            <p v-for="(items,key) in hoverData" :key="key" :class="{mt10 :key>0}">
                                                <el-tag type="primary">{{items.label}}:</el-tag>
                                                <span class="pleft">{{items.value}}</span></p>
                                        </div>
                                        <el-button size="small"
                                                   v-if="btn.prop == undefined && !tableDataColen[k][btn.valueKey] && btn.propOne == undefined&& col.hover"
                                                   @mouseenter.native.prevent="doHandle($event,tableDataColen[k],btn.fn)"
                                                   :type="btn.btnType">{{LANG[btn.label] || btn.label}}
                                        </el-button>
                                    </el-tooltip>
                                    <el-button size="small"
                                               v-if="btn.prop && tableDataColen[k][btn.prop] == btn.val && (btn.equal == undefined) && !tableDataColen[k][btn.valueKey] && btn.propOne == undefined"
                                               @click.stop="doHandle($event,tableDataColen[k],btn.fn)"
                                               :type="btn.btnType"
                                    >{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                    <el-button size="small"
                                               v-if="btn.prop && tableDataColen[k][btn.prop] != btn.val && (btn.equal == false)  && btn.valNum == 1 && !tableDataColen[k][btn.valueKey] && btn.propOne == undefined"
                                               @click.stop="doHandle($event,tableDataColen[k],btn.fn)"
                                               :type="btn.btnType"
                                    >{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                    <el-button size="small"
                                               v-if="btn.prop && (tableDataColen[k][btn.prop] != btn.val && tableDataColen[k][btn.prop] != btn.val1) && (btn.equal == false)  && btn.valNum == 2 && !tableDataColen[k][btn.valueKey] && btn.propOne == undefined"
                                               @click.stop="doHandle($event,tableDataColen[k],btn.fn)"
                                               :type="btn.btnType"
                                    >{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                    <el-button size="small"
                                               v-if="btn.propOne && btn.propTwo  && tableDataColen[k][btn.propOne] == btn.valOne && tableDataColen[k][btn.propTwo] == btn.valTwo && btn.prop == undefined && !btn.equal"
                                               @click.stop="doHandle($event,tableDataColen[k],btn.fn)"
                                               :type="btn.btnType"
                                    >{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                    <el-button size="small"
                                               v-if="btn.val && btn.val1  && (tableDataColen[k][btn.prop] == btn.val ||  tableDataColen[k][btn.prop] == btn.val1) && btn.prop && btn.equal"
                                               @click.stop="doHandle($event,tableDataColen[k],btn.fn)"
                                               :type="btn.btnType"
                                    >{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                    <span
                                        v-if="btn.valueKey && tableDataColen[k][btn.valueKey]">{{LANG[tableDataColen[k][btn.valueKey]] || tableDataColen[k][btn.valueKey]}}</span>
                                </div>
                            </div>
                            <div v-if="col.type == 'button' && col.filters" class="cell">
                                <div v-for="btn in col.btnGroup" style="float:left;margin-left:5px;">
                                <span v-if="btn.filters == undefined ">
                                    <el-button size="small" @click.stop="doHandle($event,tableDataColen[k],btn.fn)"
                                               :type="btn.btnType"
                                    >{{LANG[btn.label] || btn.label}}</el-button>
                                </span>
                                    <span v-if="btn.filters && col.filters[0]['value'] === 'enabled'">
                                    <el-button size="small"
                                               v-if="/enabled/.test(tableDataColen[k][btn.key]) && btn.filters === 'enabled'"
                                               @click.stop="doHandle($event,tableDataColen[k],btn.fn)"
                                               :type="btn.btnType"
                                               v-text="LANG['停用'] || '停用'"></el-button>
                                    <el-button size="small"
                                               v-if="!(/enabled/.test(tableDataColen[k][btn.key])) && btn.filters === 'disabled'"
                                               @click.stop="doHandle($event,tableDataColen[k],btn.fn)"
                                               :type="btn.btnType"
                                               v-text="LANG['启用'] || '启用'"></el-button>
                                </span>
                                </div>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'switch' ||  col.show">
                                <el-switch v-model="tableDataColen[k][col.prop]"
                                           @change="changeSwit(k,tableDataColen[k],col.prop)"
                                           :on-value="'1' || col.onValue" :off-value="'0'|| col.offValue"
                                           v-if=" tableDataColen[k][col.show] && tableDataColen[k][col.show].toString() === '1'"></el-switch>
                                <el-switch v-model="tableDataColen[k][col.prop]"
                                           @change="changeSwit(k,tableDataColen[k],col.prop)"
                                           :on-value="'1' || col.onValue" :off-value="'0'|| col.offValue"
                                           v-else></el-switch>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'list'">
                                <el-select v-model="item[col.prop]" :placeholder="LANG['请选择'] || '请选择'"
                                           @change="changes(k,item,col.prop)" size="small" v-if="listArr.length">
                                    <el-option
                                        v-for="lev in listArr"
                                        :key="lev.value"
                                        :label="lev.label"
                                        :value="lev.value"
                                        :disabled="item[col.prop] == lev.value?true:false">
                                    </el-option>
                                </el-select>
                                <el-select v-model="item[col.prop]" :placeholder="LANG['请选择'] || '请选择'"
                                           @change="changes(k,item,col.prop)" size="small" v-if="listArr.length ==0">
                                    <el-option
                                        v-for="lev in listArr"
                                        :key="lev.value"
                                        :label="lev.label"
                                        :value="lev.value"
                                        :disabled="item[col.prop] == lev.value?true:false">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'checkbox'">
                                <el-checkbox :true-label="1" :false-label="0"
                                             :checked="tableDataColen[k][col.prop] | formatCheck"
                                             v-model="tableDataColen[k][col.prop]"
                                             @change="changes(k,tableDataColen[k],col.prop)"></el-checkbox>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'number'">
                                <input type="number" class="el-input__inner" min="1" v-model="item[col.prop]">
                            </div>
                            <div class="cell" v-if="col.type == 'reduce'">
								<span
                                    class="sucess_text">{{(isNaN(parseInt(item[col.prop[0]])) ? 0 : parseInt(item[col.prop[0]])) - (isNaN(parseInt(item[col.prop[1]])) ? 0 : parseInt(item[col.prop[1]]))}}</span>
                            </div>
                            <div v-if="col.type == 'button' && item['t_default'] == '0'" class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <div v-for="btn in col.btnGroup" style="float:left;margin-left:5px;">
                                    <el-button size="small" v-if="btn.prop == undefined && btn.label == '复制新增'"
                                               @click.stop="doHandle($event,tableDataColen[k],btn.fn)"
                                               :type="btn.btnType">{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                </div>
                            </div>
                            <div v-if="col.type == 'img'" class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <img :src="item[col.prop]" alt="item[col.prop]" height="20px"
                                     width="auto"
                                     v-if="item[col.prop] && item[col.prop].toString().length>5 && col.imgtype !== 'bank'">
                                <img :src="'/static/img/bank/'+item['code']+'.png'" alt="item[col.prop]" height="20px"
                                     width="auto" v-if="col.imgtype == 'bank'" style="vertical-align: middle;"/>
                                <span v-if="col.imgtype == 'bank'">{{item['code']}}</span>
                                <span v-if="!item[col.prop] || (item[col.prop] && item[col.prop].toString().length<5) ">{{LANG['暂无图片'] || '暂无图片'}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'contentFilterLink'"
                                 @click.stop="showLink(col.fn,tableDataColen[k])">
                                <el-button size="small" type="text">{{item[col.prop]}}</el-button>
                            </div>
                            <div class="cell" v-if="col.type === 'regular'">
                                <span v-if="col.filters[0]['value'] === 'enabled'">
                                    <span v-if="/enabled/.test(item[col.prop])"
                                          class="sucess_text"> {{col.filters[0]['text'] || ""}}
                                    </span>
                                    <span v-else class="danger_text">{{col.filters[1]['text'] || ""}}</span>
                                </span>
                                <span v-if="col.filters[0]['value'] === 'default'">
                                    <span v-if="/default/.test(item[col.prop])" class="sucess_text">
                                        {{col.filters[0]['text'] || ""}}
                                    </span>
                                    <span v-else class="danger_text">{{col.filters[1]['text'] || ""}}</span>
                                </span>
                                <span v-if="col.filters[0]['value'] === 'new'">
                                    <span v-if="/new/.test(item[col.prop])" class="sucess_text">
                                        {{col.filters[0]['text'] || ""}}
                                    </span>
                                    <span v-else class="danger_text">{{col.filters[1]['text'] || ""}}</span>
                                </span>
                            </div>
                            <div class="cell" v-if="col.type && col.type == 'linkConnectAdd' || col.type == 'subtract'">
								<span
                                    v-if="col.type == 'subtract'">{{item[col.prop.split(',')[col.prop.split(',').length - 1]]}}</span>
                                <!--类型为linkConnectAdd的人工存提记录特殊处理-->
                                <a href="javascript:;"
                                   v-else-if="col.prop === 'withdraw_bet_principal' && item['fix_type'] && item['isfixBet'] && (item['fix_type']== '1' || item['fix_type']== '3')">
									<span class="linkCell tag_link"
                                          @click.stop="doHandle($event,tableDataColen[k],col.fn)">{{item[col.prop.split(',')[0]]}}</span>
                                </a>
                                <a href="javascript:;"
                                   v-else-if="col.prop === 'withdraw_bet_coupon' && item['isfixBet'] && (item['fix_type']== '2' || item['fix_type']== '3')">
									<span class="linkCell tag_link"
                                          @click.stop="doHandle($event,tableDataColen[k],col.fn)">{{item[col.prop.split(',')[0]]}}</span>
                                </a>
                                <span
                                    v-else-if="((col.prop === 'withdraw_bet_principal' || col.prop === 'withdraw_bet_coupon') && (item['fix_type']== 0)) || (col.prop === 'withdraw_bet_principal' && item['fix_type'] == 2) || (col.prop === 'withdraw_bet_coupon' && item['fix_type'] == 1)">否</span>
                                <a href="javascript:;"
                                   v-else-if="item[col.prop.split(',')[0]] != undefined && col.fn && col.prop !== 'withdraw_bet_principal' && col.prop !== 'withdraw_bet_coupon'">
									<span class="linkCell tag_link"
                                          @click.stop="doHandle($event,tableDataColen[k],col.fn)">{{item[col.prop.split(',')[0]]}}</span>
                                </a>
                                <span v-else
                                      @click.stop="doHandle($event,tableDataColen[k],col.fn)">{{item[col.prop.split(',')[0]]}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'connect'">
                                <span :class="{fontWeight:col['fontweight']}">{{item[col.prop]}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'connectInt'">
                                <span :class="{fontWeight:col['fontweight']}">{{item[col.type]}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'connect,twoDivisionMoney'">
                                <span :class="{fontWeight:col['fontweight']}">{{item[col.prop]}}</span>
                            </div>
                            <div v-if="col.type == 'link'" class="cell" style="word-wrap: break-word;word-break: normal"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <a href="javascript:;" class="tag_link"
                                   v-if="item[col.prop] && item['t_default'] == undefined"
                                   @click.stop="doHandle($event,tableDataColen[k],col.fn)">
                                    <span class="linkCell">{{item[col.prop]}}</span>
                                </a>
                                <a href="javascript:;"
                                   v-if="item[col.prop] && item['t_default']  && item['t_default'] != 0"
                                   @click.stop="doHandle($event,tableDataColen[k],col.fn)">
                                    <span class="linkCell tag_link">{{item[col.prop]}}</span>
                                </a>
                                <span class="defutFont"
                                      v-if="item['t_default'] == '0'">[ {{LANG['系统默认'] || '系统默认'}} ]</span>
                                <span v-if="!item[col.prop]"
                                      @click.stop="doHandle($event,tableDataColen[k],col.fn)">{{item[col.prop]}}</span>
                            </div>
                            <div v-if="col.type == 'linkFilter'" class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <el-button size="small" v-if="item[col.prop]"
                                           @click.stop="doHandle($event,tableDataColen[k],col.fn)"
                                           type="text">
                                    <span class="linkCell tag_link">{{item[col.prop] | formatSex(col.filters)
                                        }}
                                    </span>
                                </el-button>
                            </div>
                            <div v-if="col.type == 'linkDivisionMoney'" class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <el-popover
                                    class="popover_diy"
                                    v-if="col.hover && hoverData"
                                    placement="right"
                                    :title="col.prop === 'th3_amount' ?(LANG['子钱包明细：'] || '子钱包明细：') : ''"
                                    width="50%"
                                    trigger="click">
                                    <div v-if="hoverData.length">
                                        <p v-for="(items,keys) in hoverData" :key="keys" :class="{mt10 :keys>0}">
                                            <span class="tag_link">{{items.label}}:</span>
                                            <span class="pleft">{{items.value}}</span>
                                        </p>
                                    </div>
                                    <el-button style="min-width:60px;border:none;background:rgba(110,183,249,0)"
                                               slot="reference" size="mini" class="popover_diy_btn"
                                               @click.stop="doHandle($evnet,tableDataColen[k],col.fn)">
                                        <el-tag type="primary" size="small" style="min-width:60px">{{item[col.prop]}}
                                        </el-tag>
                                    </el-button>
                                </el-popover>
                                <el-popover
                                    class="popover_diy"
                                    v-else-if="col.mousehover && hoverData"
                                    placement="right"
                                    :title="col.prop === 'th3_amount' ?(LANG['子钱包明细：'] || '子钱包明细：') : ''"
                                    width="50%"
                                    trigger="hover">
                                    <div v-if="hoverData.length">
                                        <p v-for="(items,keys) in hoverData" :key="keys" :class="{mt10 :keys>0}">
                                            <span class="tag_link">{{items.label}}:</span>
                                            <span class="pleft">{{items.value}}</span>
                                        </p>
                                    </div>
                                    <el-button style="min-width:60px;border:none;background:rgba(110,183,249,0)"
                                               slot="reference" size="mini" class="popover_diy_btn"
                                               @mouseenter.native.prevent="doHandle($event,tableDataColen[k],col.fn)">
                                        <el-tag type="primary" size="small" style="min-width:60px">{{item[col.prop]}}
                                        </el-tag>
                                    </el-button>
                                </el-popover>
                                <el-button size="small" v-else-if="item[col.prop] != undefined && !col.hover"
                                           @click.stop="doHandle($event,tableDataColen[k],col.fn)"
                                           type="text">
                                    <span class="linkCell tag_link">{{item[col.prop]}}</span>
                                </el-button>
                                <span v-else>{{item[col.prop]}}</span>
                            </div>
                            <div v-if="col.type == 'linkNumberButton' " class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <span> {{item[col.prop]}} </span>
                                <div v-for="btn in btnLinkGroup[k]" style="float:left;margin-left:5px;">
                                    <el-button @click.stop="doHandle($event,tableDataColen[k],col.fn,col.prop,btn)"
                                               size="small" type="text">
                                        <span class="tag_link"> {{btn.value}}
                                        </span>
                                    </el-button>
                                </div>
                            </div>
                            <div class="cell" v-if="col.type == 'ipBlack'"
                                 :class="{'state_blue':tableDataColen[k][col.prop] == '0','state_danger':tableDataColen[k][col.prop] == '1'}">
                                {{item[col.prop]}}
                            </div>
                            <div class="cell"
                                 v-if="(col.type == 'connect') || (col.type == 'contentDate') || (col.type == 'connect,twoDivisionMoney') || (col.type == 'connect,divisionMoney')"
                                 :class="{sucess_text: (item[col.prop] == 0 || item[col.prop] == false || item[col.prop] == 'disabled'),danger_text:(item[col.prop] == 1 || item[col.prop] == true)}">
                                {{item[(col.prop.split(',')[0])]}}
                            </div>
                            <div v-if="col.type == undefined && col.filters == undefined" class="cell"
                                 :class="{tCent:(col.class != undefined && col.class =='tCent')?true:false,state_blue:(col.class != undefined&& col.class =='state_blue')?true:false}">
								<span :class="{fontWeight:col['fontweight']}"
                                      style="display: inline-block; max-width: 140px;"
                                      v-if="col.tenWords">{{item[col.prop]}}</span>
                                <span :class="{fontWeight:col['fontweight']}"
                                      v-if="!col.tenWords">{{item[col.prop]}}</span>
                                <span class="defutFont"
                                      v-if="item['t_default'] == '0'">[ {{LANG['系统默认'] || '系统默认'}} ]</span>
                            </div>
                            <div v-if="col.type == undefined && col.filters" class="cell">
								<span
                                    :class="tableDataColen[k][col.prop] | getStatusColor(col.statusKey)">{{item[col.prop]}}</span>
                                <span class="defutFont"
                                      v-if="item['t_default'] == '0'">[ {{LANG['系统默认'] || '系统默认'}} ]</span>
                            </div>
                        </td>
                    </tr>
                    <!--表格总合-->
                    <tr v-if="sumGame && subTotalBet && tableDataList.length">
                        <td v-if="columnList.length === 9" colspan="3">
                            <div class="cell tCent">{{LANG['小计'] || '小计'}}</div>
                        </td>
                        <td v-else>
                            <div class="cell">{{LANG['小计'] || '小计'}}</div>
                        </td>
                        <td>
                            <div class="cell">{{subTotalBet.bet_times }}</div>
                        </td>
                        <td>
                            <div class="cell">{{subTotalBet.bet_money | formatMoney}}</div>
                        </td>
                        <td>
                            <div class="cell">{{subTotalBet.valid_bet | formatMoney}}</div>
                        </td>
                        <td>
                            <div class="cell">{{subTotalBet.bonus | formatMoney(4)}}</div>
                        </td>
                        <td>
                            <div class="cell">{{subTotalBet.contri | formatMoney(4)}}</div>
                        </td>
                        <td>
                            <div class="cell" :class="{state_danger: parseFloat(subTotalBet.lose_earn) < 0 }">
                                {{subTotalBet.lose_earn | formatMoney}}
                            </div>
                        </td>
                    </tr>
                    <tr v-if="sumGame && totalBet && tableDataList.length">
                        <td v-if="columnList.length === 9" colspan="3">
                            <div class="cell tCent">{{LANG['合计'] || '合计'}}</div>
                        </td>
                        <td v-else>
                            <div class="cell">{{LANG['合计'] || '合计'}}</div>
                        </td>
                        <td>
                            <div class="cell">{{totalBet.bet_times }}</div>
                        </td>
                        <td>
                            <div class="cell">{{totalBet.bet_money | formatMoney}}</div>
                        </td>
                        <td>
                            <div class="cell">{{totalBet.valid_bet | formatMoney}}</div>
                        </td>
                        <td>
                            <div class="cell">{{totalBet.bonus | formatMoney(4)}}</div>
                        </td>
                        <td>
                            <div class="cell">{{totalBet.contri | formatMoney(4)}}</div>
                        </td>
                        <td>
                            <div class="cell" :class="{state_danger: parseFloat(totalBet.lose_earn) < 0 }">
                                {{totalBet.lose_earn | formatMoney}}
                            </div>
                        </td>
                    </tr>
                    <slot name="other"></slot>
                </table>

                <el-col v-if="tableDataList.length == 0"
                        style="line-height: 100px;text-align: center;background-color: #ffffff;border:1px solid #dfe6ec;">
                    <div class="dell">{{LANG['暂无数据'] || '暂无数据'}}</div>
                </el-col>
            </div>
            <el-col>
                <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm" @do-cancel="doCancel"></confirm>
            </el-col>
            <!--分页-->
            <el-col :span="24" class="toolbar mt20 pRight20" v-if="pageSet && tableDataList.length >0 "
                    style="position:relative;text-align: right;">
                <el-pagination :current-page="currentPage" :page-sizes="pageSizeList" :page-size="pageSize"
                               layout="total, sizes, prev, pager, next, jumper"
                               :total="total" @size-change="doSizePage"
                               @current-change="doCurrentChange">
                </el-pagination>
            </el-col>
        </el-card>
    </div>
</template>
<script type="text/ecmascript-6">
    //列配置
    import columnSet from './columnSet.vue'
    import confirm from './confirm.vue'
    export default {
        data() {
            return {
                LANG,
                //列配置
                columnConfig: [],
                //复制列参数
                columnList: [],
                //表格列表数据
                tableDataList: [],
                tableDataColen: [],
                // 合计相关
                subTotalBet: {
                    bet_money: 0,
                    bet_times: 0,
                    lose_earn: 0,
                    send_prize: 0,
                    bonus: 0,
                    contri: 0,
                    valid_bet: 0
                },
                totalBet: {
                    bet_money: 0,
                    bet_times: 0,
                    lose_earn: 0,
                    send_prize: 0,
                    bonus: 0,
                    contri: 0,
                    valid_bet: 0
                },
                times: 0,
                //分页相关
                //总页数
                total: 0,
                //一页多少条
                pageSize: 20,
                //共多少页
                pageCount: 1,
                // 当前页
                currentPage: 1,
                otherData: null,
                //求和数据
                sumArr: [],
                baseUrl: "",
                sumNumber: 0,
                //全选CHECKBOX
                allChecked: false,
                checkList: [],
                //当前选中数据
                rowsList: {},
                //当前选中总数
                checkSum: 0,
                loading: false,
                //横向滚动条
                tableScroll: false,
                // 超时时间
                options: [
                    {"label": "不更新", "value": "0"},
                    {"label": "10秒", "value": "10"},
                    {"label": "30秒", "value": "30"},
                    {"label": "60秒", "value": "60"},
                    {"label": "120秒", "value": "120"},
                    {"label": "180秒", "value": "180"}
                ],
                // 下接对象
                listObj: {},
                //会员层级
                levelSelectvalue: '',
                lockSwitch: 'ON',
                ascKey: {},
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                levelNum: 1,
                levelNUmRow: 1,
                // 按钮拼接对象
                btnLinkGroup: [],
                classObj: {
                    state_blue: false,
                    state_success: false,
                    state_warning: false,
                    state_danger: false,
                    state_info: false
                },
                isInit: false
            }
        },
        props: {
            //表格数据
            tableData: Object,
            //数据请求地址
            tableUrl: String,
            //数据列配置
            columns: Array,
            columnsUrl: String,
            //是否拼接columns
            assembleColumns: Object,
            //是否表格自适应宽度
            automation: {
                type: Boolean,
                default: false
            },
            //多选中表格数据之后是否显示锁定
            lockShow: Boolean,
            //表格hover展示数据
            hoverData: Array,
            //是否显示选择框
            tableCheck: {
                type: Boolean,
                default: false
            },
            //是否显增索引
            tableIndex: {
                type: Boolean,
                default: false
            },
            //是否显示列内边框
            tableBorder: {
                type: Boolean,
                default: true
            },
            //行内双击事件
            tableRowDbclick: {
                type: Boolean,
                default: true
            },
            //是否显示分页
            pageSet: {
                type: Boolean,
                default: true
            },
            //批量操作按钮
            tabOperation: Array,
            //表格汇总相关
            sumGame: {
                type: Boolean,
                default: false
            },
            sumKey: "",
            updateDate: Object,
            updated: {
                type: Boolean,
                default: false
            },
            //表单类型，刷新数据
            formType: String,
            //传入查询对象
            query: Object,
            //操作类型，用于查询数据刷新
            opts: String,
            //是否给页面发送数据 默认不发送
            getData: {
                type: Boolean,
                default: false
            },
            //保存数据
            saveData: {
                type: Boolean,
                default: false
            },
            //数据修改后回调
            updateMessage: {
                type: String,
                default: ""
            },
            // 表格宽度自适应
            autoWidth: {
                type: Boolean,
                default: false
            },
            lotteryType: {
                type: Boolean,
                default: false
            },
            // 表格宽度
            fullWidth: {
                type: Boolean,
                default: true
            },
            // 导出按钮
            showExport: {
                type: Boolean,
                default: false
            },
            // 表格下拉数据更新
            listKey: {
                type: String,
                default: ''
            },
            listArr: Array,
            // 刷新数据
            showRefresh: {
                type: Boolean,
                default: false
            },
            // 自动刷新
            autoshowRefresh: {
                type: Boolean,
                default: false
            },
            // 表格单页条数
            pageSizeList: {
                type: Array,
                default: function () {
                    return [10, 20, 50, 100, 200, 500, 1000]
                }
            },
            // 表格头部按钮配置
            headTextconf: {
                type: Object,
                default: function () {
                    return {label: '', fn: '', show: false}
                }
            },
            // 刷新时间
            refreshTimes: {
                type: String,
                default: '0'
            },
            // 初始化创建
            isCreated: {
                type: Boolean,
                default: false
            }
            //表格自适应滚动条
//            scorAuto:{
//            	type:Boolean,
//	            default: false
//            }
        },
        components: {
            confirm: confirm
        },
        methods: {
            // 数据初始化
            reSet() {
                //表格初始化
                this.allChecked = false;
                this.checkList = [];
                this.rowsList = {};
                this.checkSum = 0;
                this.listOjb = null;
                this.levelNUmRow = 1;
                this.levelNum = 1;
                this.isInit = false;
                //总条数
                this.total = 0;
                //每次页条数
                this.pageSize = 20;
                //总页数
                this.pageCount = 1;
                //当前页
                this.currentPage = 1;
                // 其它数据
                this.otherData = {};
                this.tableDataList.splice(0, this.tableDataList.length);
                this.tableDataColen.splice(0, this.tableDataColen.length);
                this.columnList.splice(0, this.columnList.length);
                this.btnLinkGroup = this.btnLinkGroup.splice(0, this.btnLinkGroup);
            },
            //初始化数据
            Datainit(changeUrl) {
                let _this = this;
                this.loading = true;
                //总条数
                let total = this.total;
                //每次页条数
                let pageSize = this.pageSize;
                //总页数
                let pageCount = this.pageCount;
                //当前页
                let currentPage = changeUrl ? 1 : this.currentPage;
                this.otherData = {};
                let otherData = this.otherData;
                let colKey = this.sumKey;
                let columnList = _this.columnList || [];
                this.baseUrl = this.tableUrl;
                if ((this.columnsUrl != "") && (this.columnsUrl != undefined)) {
//                    this.$.get(this.columnsUrl, (res) => {
//                        if (res) {
//                            columnList.splice(0, columnList.length);
//                            let columns = res && res.columns ? res.columns : [];
//                            if (this.assembleColumns) {
//                                let index = this.assembleColumns.index;
//                                let origin = columns.slice(0, index);
//                                let end = columns.slice(index, columns.length);
//                                let columsObj = {
//                                    orignCol: origin,
//                                    endCol: end,
//                                    connectCol: this.assembleColumns.data
//                                };
//                                columns = CONNECTCOLUMS(columsObj, 100);
//                            }
//                            if (columns.length > 0) {
//                                for (let i in columns) {
//                                    columnList.push(columns[i])
//                                    if (columns[i].disabled == true) {
//                                        _this.columnConfig.push(columns[i].prop);
//                                    }
//                                    if (columns[i].sort === true) {
//                                        _this.$set(_this.ascKey, columns[i].prop, '');
//                                    }
//                                }
//                            }
//                            // 取列表数据
//                            if ((this.baseUrl != "") && (this.baseUrl != undefined)) {
//                                let query = {};
//                                if (this.query && this.query.toString().length > 0) {
//                                    query = this.query;
//                                }
//                                if (this.pageSet) {
//                                    let index = this.baseUrl.indexOf('?');
//                                    if (index === -1) {
//                                        this.baseUrl = this.baseUrl + "?page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 20 : pageSize);
//                                    } else {
//                                        let n = this.baseUrl.indexOf('page=');
//                                        if (/standard/g.test(this.baseUrl) || /fast/g.test(this.baseUrl)) {
////                                currentPage = currentPage;
//                                        } else {
//                                            currentPage = 1;
//                                        }
//                                        if (n > 0) {
//                                            this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + currentPage || 1);
//                                        } else {
//                                            this.baseUrl = this.baseUrl + "&page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 20 : pageSize);
//                                        }
//                                        let m = this.baseUrl.indexOf('page_size=');
//                                        if (m > 0) {
//                                            this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + (pageSize === 0 ? 20 : pageSize));
//                                        } else {
//                                            this.baseUrl = this.baseUrl + "&page_size=20";
//                                        }
//                                    }
//                                }
//                                this.$.autoAjax('get', this.baseUrl, '', {
//                                    ok: (res) => {
//                                        _this.tableDataList = [];
//                                        _this.tableDataColen = [];
//                                        let tableDate = res && res.data ? res.data : [];
//                                        if (_this.getData) {
//                                            let model = res.data || {};
//                                            for (let k in model) {
//                                                otherData[k] = model[k];
//                                            }
//                                        }
//                                        let list = res && res.data && res.data && res.data.tableDemoDate || res.data.list || res.data.data || res.data.deposit || [];
//                                        if (res.data.length === undefined) {
//                                            if (res.data.list != undefined && res.data.list.length) {
//                                                list = res.data.list || [];
//                                            }
//                                        }
//                                        _this.subTotalBet = {};
//                                        _this.totalBet = {};
//                                        if (res.attributes) {
//                                            if (res.attributes.subTotalBet) {
//
//                                                let obj = res.attributes.subTotalBet;
//                                                for (let k in obj) {
//                                                    _this.subTotalBet[k] = obj[k];
//                                                }
//                                            }
//                                            if (res.attributes.totalBet) {
//
//                                                let obj = res.attributes.totalBet;
//                                                for (let k in obj) {
//                                                    _this.totalBet[k] = obj[k];
//                                                }
//                                            }
//                                            _this.total = res && res.attributes && res.attributes.total || 0;
//                                            _this.pageSize = res && res.attributes && res.attributes.page_size || 20;
//                                            _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
//                                            _this.currentPage = parseInt(res.attributes.page) ? parseInt(res.attributes.page) : 1;
//                                        }
//                                        if (list.length && list.length > 0) {
//                                            for (let i in list) {
//                                                // 根据列表配置写数据
//                                                let temp = list[i], tempobj = {};
//                                                for (let m in temp) {
//                                                    tempobj[m] = temp[m];
//                                                }
//                                                _this.tableDataColen.push(tempobj);
//                                                _this.tableDataList.push(_this.formatRowDate(list[i], columnList, i));
//                                            }
//                                            _this.initCheckList(list);
//                                        } else if (tableDate.length && tableDate.length > 0) {
//                                            let sumNumber = _this.sumNumber;
//                                            for (let j in tableDate) {
//                                                _this.tableDataList.push(_this.formatRowDate(tableDate[j], columnList, j));
//                                                let temp = tableDate[j], tempobj = {};
//                                                for (let m in temp) {
//                                                    tempobj[m] = temp[m];
//                                                }
//                                                _this.tableDataColen.push(tempobj);
//                                            }
//                                            this.initCheckList(tableDate);
//                                        }
////										_this.tableDataList.prototype.clone = function () {
////											return [].concat(this);
////										}
//                                        if (_this.getData) {
//                                            otherData.attributes = res.attributes
//                                            _this.$emit("get-table-data", {
//                                                "item": _this.tableDataColen,
//                                                "allData": otherData
//                                            });
//                                        }
//                                        _this.loading = false;
//                                    },
//                                    p: () => {
//                                    },
//                                    error: e => {
//                                        if (_this.getData) {
//                                            _this.$emit("get-table-data", {
//                                                "item": _this.tableDataColen,
//                                                "allData": otherData
//                                            });
//                                        }
//                                        _this.loading = false;
//                                    }
//                                })
//                            } else {
//                                this.loading = false;
//                                // 通过formData渲染表格
//                                if (!this.tableData) return;
//                                let query = {};
//                                if (this.query && this.query.toString().length > 0) {
//                                    query = this.query;
//                                }
//                                let tableDate = this.tableData;
//                                let otherData = _this.otherData[0] = {};
//                                let list = this.tableData.list || [];
//                                if (list.length && list.length > 0) {
//                                    //写相关其它数据
//                                    for (let i in tableDate) {
//                                        otherData[i] = tableDate[i];
//                                    }
//                                    _this.total = tableDate.total ? tableDate.total : 0;
//                                    _this.pageSize = tableDate.page_size ? tableDate.page_size : 20;
//                                    _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
//                                    _this.currentPage = tableDate.page ? tableDate.page : 1;
//                                    for (let i in list) {
//                                        _this.tableDataList.push(_this.formatRowDate(list[i], columnList, i));
//                                        let temp = list[i], tempobj = {};
//                                        for (let m in temp) {
//                                            tempobj[m] = temp[m];
//                                        }
//                                        _this.tableDataColen.push(tempobj);
//                                    }
//                                    _this.initCheckList(list);
//                                }
//                                if (_this.getData) {
//                                    _this.$emit("get-table-data", {
//                                        "item": _this.tableDataColen,
//                                        "otherData": _this.otherData
//                                    });
//                                }
//                            }
//                        } else {
//                            this.$message.error('列配置请求失败，请稍后重试！')
//                        }
//                    });
                    this.$.get(this.columnsUrl, (res) => {
                        if (res) {
                            columnList.splice(0, columnList.length);
                            let columns = res && res.columns ? res.columns : [];
                            if (this.assembleColumns) {
                                let index = this.assembleColumns.index;
                                let origin = columns.slice(0, index);
                                let end = columns.slice(index, columns.length);
                                let columsObj = {
                                    orignCol: origin,
                                    endCol: end,
                                    connectCol: this.assembleColumns.data
                                };
                                columns = CONNECTCOLUMS(columsObj, 100);
                            }
                            if (columns.length > 0) {
                                for (let i in columns) {
                                    columnList.push(columns[i])
                                    if (columns[i].disabled == true) {
                                        _this.columnConfig.push(columns[i].prop);
                                    }
                                    if (columns[i].sort === true) {
                                        _this.$set(_this.ascKey, columns[i].prop, '');
                                    }
                                }
                            }
                            // 取列表数据
                            if ((this.baseUrl != "") && (this.baseUrl != undefined)) {
                                let query = {};
                                if (this.query && this.query.toString().length > 0) {
                                    query = this.query;
                                }
                                if (this.pageSet) {
                                    let index = this.baseUrl.indexOf('?');
                                    if (index === -1) {
                                        this.baseUrl = this.baseUrl + "?page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 20 : pageSize);
                                    } else {
                                        let n = this.baseUrl.indexOf('page=');
                                        if (/standard/g.test(this.baseUrl) || /fast/g.test(this.baseUrl)) {
//                                currentPage = currentPage;
                                        } else {
                                            currentPage = 1;
                                        }
                                        if (n > 0) {
                                            this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + currentPage || 1);
                                        } else {
                                            this.baseUrl = this.baseUrl + "&page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 20 : pageSize);
                                        }
                                        let m = this.baseUrl.indexOf('page_size=');
                                        if (m > 0) {
                                            this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + (pageSize === 0 ? 20 : pageSize));
                                        } else {
                                            this.baseUrl = this.baseUrl + "&page_size=20";
                                        }
                                    }
                                }
                                this.$.autoAjax('get', this.baseUrl, '', {
                                    ok: (res) => {
                                        _this.tableDataList = [];
                                        _this.tableDataColen = [];
                                        let tableDate = res && res.data ? res.data : [];
                                        if (_this.getData) {
                                            let model = res.data || {};
                                            for (let k in model) {
                                                otherData[k] = model[k];
                                            }
                                        }
                                        let list = res && res.data && res.data.tableDemoDate || res.data.list || res.data.data || res.data.deposit || [];
                                        if (res.data.length === undefined) {
                                            if (res.data.list != undefined && res.data.list.length) {
                                                list = res.data.list || [];
                                            }
                                        }
                                        _this.subTotalBet = {};
                                        _this.totalBet = {};
                                        if (res.attributes) {
                                            if (res.attributes.subTotalBet) {
                                                let obj = res.attributes.subTotalBet;
                                                for (let k in obj) {
                                                    _this.subTotalBet[k] = obj[k];
                                                }
                                            }
                                            if (res.attributes.totalBet) {
                                                let obj = res.attributes.totalBet;
                                                for (let k in obj) {
                                                    _this.totalBet[k] = obj[k];
                                                }
                                            }
                                            _this.total = res && res.attributes && res.attributes.total || 0;
                                            _this.pageSize = res && res.attributes && res.attributes.page_size || 20;
                                            _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
                                            _this.currentPage = parseInt(res.attributes.page) ? parseInt(res.attributes.page) : 1;
                                        }
                                        if (list.length && list.length > 0) {
                                            for (let i in list) {
                                                // 根据列表配置写数据
                                                let temp = list[i], tempobj = {};
                                                for (let m in temp) {
                                                    tempobj[m] = temp[m];
                                                }
                                                _this.tableDataColen.push(tempobj);
                                                _this.tableDataList.push(_this.formatRowDate(list[i], columnList, i));
                                            }
                                            _this.initCheckList(list);
                                        } else if (tableDate.length && tableDate.length > 0) {
                                            let sumNumber = _this.sumNumber;
                                            for (let j in tableDate) {
                                                _this.tableDataList.push(_this.formatRowDate(tableDate[j], columnList, j));
                                                let temp = tableDate[j], tempobj = {};
                                                for (let m in temp) {
                                                    tempobj[m] = temp[m];
                                                }
                                                _this.tableDataColen.push(tempobj);
                                            }
                                            this.initCheckList(tableDate);
                                        }
//										_this.tableDataList.prototype.clone = function () {
//											return [].concat(this);
//										}
                                        if (_this.getData) {
                                            otherData.attributes = res.attributes
                                            _this.$emit("get-table-data", {
                                                "item": _this.tableDataColen,
                                                "allData": otherData
                                            });
                                        }
                                        _this.loading = false;
                                    },
                                    p: () => {
                                    },
                                    error: e => {
                                        if (_this.getData) {
                                            _this.$emit("get-table-data", {
                                                "item": _this.tableDataColen,
                                                "allData": otherData
                                            });
                                        }
                                        _this.loading = false;
                                    }
                                })
                            } else {
                                this.loading = false;
                                // 通过formData渲染表格
                                if (!this.tableData) return;
                                let query = {};
                                if (this.query && this.query.toString().length > 0) {
                                    query = this.query;
                                }
                                let tableDate = this.tableData;
                                let otherData = _this.otherData[0] = {};
                                let list = this.tableData.list || [];
                                if (list.length && list.length > 0) {
                                    //写相关其它数据
                                    for (let i in tableDate) {
                                        otherData[i] = tableDate[i];
                                    }
                                    _this.total = tableDate.total ? tableDate.total : 0;
                                    _this.pageSize = tableDate.page_size ? tableDate.page_size : 20;
                                    _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
                                    _this.currentPage = tableDate.page ? tableDate.page : 1;
                                    for (let i in list) {
                                        _this.tableDataList.push(_this.formatRowDate(list[i], columnList, i));
                                        let temp = list[i], tempobj = {};
                                        for (let m in temp) {
                                            tempobj[m] = temp[m];
                                        }
                                        _this.tableDataColen.push(tempobj);
                                    }
                                    _this.initCheckList(list);
                                }
                                if (_this.getData) {
                                    _this.$emit("get-table-data", {
                                        "item": _this.tableDataColen,
                                        "otherData": _this.otherData
                                    });
                                }
                            }
                        } else {
                            _this.loading = false;
                            _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                        }
                    })
                } else {
                    this.loading = false;
                }
            },
            formatRowDate(row, col, index) {
                let _this = this;
                let obj = {}, keys = [];
                for (let k in row) {
                    obj[k] = row[k];
                    for (let i = 0; i < col.length; i++) {
                        keys = col[i].prop ? col[i].prop.split(',') : ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'];
                        if ((col[i].prop === k) || (keys[0] === k) || (keys[1] === k) || (keys[2] === k) || (keys[3] === k) || (keys[4] === k) || (keys[5] === k)) {
                            if (col[i].type != undefined) {
                                switch (col[i].type) {
                                    case 'date':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatDate(row[k], 'yyyy-MM-dd HH:mm:ss');
                                        }
                                        continue;
                                    case 'contentFilterLink':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatContentFilterLink(row, row['game_name'], col[i].prop);
                                        }
                                        continue;
                                    case 'filterConnect':
                                        obj[k] = tableFilter.formatContentFilter(row, col[i].prop, col[i].filters, col[i].delimiter);
                                        continue;
                                    case 'regular':
                                        obj[k] = row[k];
                                        continue;
                                    case 'allState':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatAllState(row, col[i].prop, col[i].formatkey, col[i].truelabel, col[i].falselabel);
                                        }
                                        continue;
                                    case 'connectProp':
                                        if (obj[keys[1]] === row[keys[1]]) {
                                            obj[keys[1]] = tableFilter.formatConnectProp(row, col[i].prop);
                                        }
                                        continue;
                                    case 'connectPropMoney':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatContentFilterLink(row, col[i].prop);
                                        }
                                        continue;
                                    case 'moneyDelimiter':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatMoneyDelimiter(item[col[i].prop], col[i].delimiter);
                                        }
                                        continue;
                                    case 'connectAdd':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatConnectAdd(row, col[i].prop);
                                        }
                                        continue;
                                    case 'linkConnectAdd':
                                        if (obj[keys[0]] === row[keys[0]]) {
                                            obj[keys[0]] = tableFilter.formatConnectAdd(row, col[i].prop);
                                        }
                                        continue;
                                    case 'img':
                                        let str = row[col[i].prop] || '';
                                        if (str.toString().length < 5) {
                                            obj[k] = '暂无图片';
                                        } else if (col[i].imgtype && col[i].imgtype == 'bank') {
                                            obj[k] = '/static/img/bank/' + row['code'] + '.png';
                                        } else if (row[col[i].prop].toString().length > 5 && col[i].imgtype !== 'bank') {
                                            obj[k] = tableFilter.getrpiurl(row[col[i].prop]);
                                        }
                                        continue;
                                    case 'object,prop':
                                        obj[keys[0]] = row[keys[0]];
                                        if (keys[2] != undefined) {
                                            obj[keys[2]] = row[keys[2]];
                                        }
                                        continue;
                                    case 'object':
                                        if (col[i].formatKey && (col[i].formatKey != 'bank')) {
                                            if (obj[keys[1]] === row[keys[1]]) {
                                                obj[keys[1]] = tableFilter.formatObject(row, col[i].prop);
                                            }
                                        } else {
                                            obj[keys[0]] = row[keys[0]];
                                        }
                                        continue;
                                    case 'array':
                                        if (col[i].filterType && col[i].filterType == 'array' && col[i].type == 'array' && obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatArray(row[k], col[i].separators);
                                        }
                                        continue;
                                    case 'connect_odds_type':
                                        if (obj[keys[0]] === row[keys[0]]) {
                                            obj[keys[0]] = tableFilter.formatConnectodds(row, col[i].prop);
                                        }
                                        continue;
                                    case 'json':
                                        if (col[i].arr) {
                                            if (obj[k] === row[k]) {
                                                obj[k] = tableFilter.formatContentFilterLink(row[col[i].prop], col[i].arr);
                                            }
                                        } else {
                                            obj[k] = '';
                                        }
                                        continue;
                                    case 'connect':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatConnect(row, col[i].prop, col[i].delimiter, col[i].type);
                                        }
                                        continue;
                                    case 'connectInt':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatConnect(row, col[i].prop, col[i].delimiter, col[i].type, 'int');
                                        }
                                        continue;
                                    case 'connect,twoDivisionMoney':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatConnectTwo(row, col[i].prop, col[i].delimiter);
                                        }
                                        continue;
                                    case 'connectArray':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatConnectArray(row, col[i].prop);
                                        }
                                        break;
                                    case 'connectLottery':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatConnectLottery(row, col[i].prop, _this.lotteryType);
                                        }
                                        continue;
                                    case 'contentDate':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatContentDate(row, col[i].prop, _this.lotteryType);
                                        }
                                        continue;
                                    case 'connect,divisionMoney':
                                        let key = col[i].prop.split(',')[0];
                                        obj[key] = tableFilter.formatConnect(row, col[i].prop, col[i].delimiter, col[i].type);
                                        continue;
                                    case 'link':
                                        obj[k] = row[k];
                                        continue;
                                    case 'linkDivisionMoney':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatMoney(row[k]);
                                        }
                                        continue;
                                    case 'linkNumberButton':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatLinkNumberButton(row, col[i].prop, _this.btnLinkGroup, index);
                                        }
                                        continue;
                                    case 'ipBlack':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatSex(row[col[i].prop], col[i].filters);
                                        }
                                        continue;
                                    case 'divisionMoney':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatMoney(row[col[i].prop]);
                                        }
                                        continue;
                                    case 'divisionMoney,fours':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatMoney(row[col[i].prop], 4);
                                        }
                                        continue;
                                    case 'subtract':
                                        if (obj[keys[keys.length - 1]] == undefined) {
                                            obj[keys[keys.length - 1]] = tableFilter.formatSubtract(row, col[i].prop);
                                        }
                                        continue;
                                    case 'lotteryCustom':
                                        if (obj[k] === row[k]) {
                                            obj[k] = tableFilter.formatLotteryCustom(row[col[i].prop], _this.tableUrl);
                                        }
                                        continue;
                                    // 定制拼接过滤字段，并除100
                                    case 'filterAdddivisionMoney':
                                        if (obj[k] === row[k]) {
                                            obj[keys[1]] = tableFilter.formatContentFilterAdd(row, col[i].prop);
                                        }
                                        continue;
                                    default:
                                        obj[k] = row[k];
                                        continue;
                                }
                            } else if (col[i].filterType && col[i].filterType == 'json' && col[i].type == 'json') {
                                obj[k] = tableFilter.formatJson(row[col[i].prop]);
                            } else if (col[i].filterType && col[i].filterType == 'array' && col[i].type == 'array') {
                                obj[k] = tableFilter.formatArray(row[col[i].prop], col[i].separators);
                            } else if (col[i].filters != undefined) {
                                obj[k] = tableFilter.formatSex(row[col[i].prop], col[i].filters);
                            } else if (!col[i].type) {
                                obj[k] = row[col[i].prop];
                            }
                            break;
                        }
                    }
                }
                return obj;
            },
            //处理操作公共按钮事件
            doHandle(event, row, fn, prop, btn) {
                this.$emit("do-handle", {
                    "event": event,
                    "row": row,
                    "fn": fn,
                    "page": this.currentPage,
                    "prop": prop,
                    "btn": btn,
                    "x": event.pageX,
                    "y": event.pageY,
                });
            },
            //处理表格的按钮的hover展示信息
//            doHover(row, fn) {
//                let event = window.event || event;
//                this.$emit("do-hover", {
//                    "event": event,
//                    "row": row,
//                    "fn": fn,
//                    "page": this.currentPage
//                });
//            },
            //写各状态初始
            initCheckList(arr) {
                for (let i in arr) {
                    this.$set(this.checkList, i, false);
                }
            },
            // 头部文字事件
            headTextFn(event, obj) {
                this.$emit("do-handle", {
                    "event": event,
                    "row": {},
                    "page": this.currentPage,
                    "fn": obj.fn
                });
            },
            //选据择所有数据
            allchecked() {
                let allChecked = this.allChecked;
                let model = this.tableDataList;
                let checks = this.checkList;
                let rows = this.rowsList;
                let arrs = [];
                let bl = false;
                if (allChecked) {
                    bl = true;
                    for (let i in this.tableDataColen) {
                        arrs.push(this.tableDataColen[i]);
                        rows[i] = this.tableDataColen[i];
                    }
                    this.checkSum = this.tableDataColen.length;
                } else {
                    bl = false;
                    this.checkSum = 0;
                    arrs.splice(0, arrs.length);
                    // rows = null;
                    for (let i in rows) {
                        delete rows[i];
                    }
                }
                for (let k in model) {
                    checks[k] = bl;
                }
                this.$emit("do-operation", {
                    "rows": arrs,
                    "page": this.currentPage
                });
            },
            //选择当前数据
            thisChecked(num) {
                let allChecked = this.allChecked;
                let model = this.tableDataList;
                let checks = this.checkList;
                let rows = this.rowsList;
                let arrs = [];
                if (checks[num]) {
                    rows[num] = this.tableDataColen[num];
                    this.checkSum = this.checkSum + 1;
                } else {
                    delete rows[num];
                    this.checkSum = this.checkSum - 1;
                }
                if (this.checkSum === model.length) {
                    this.allChecked = true;
                }
                if (this.checkSum === 0) {
                    this.allChecked = false;
                }
                for (let k in rows) {
                    arrs.push(rows[k]);
                }
                this.$emit("do-operation", {
                    "rows": arrs,
                    "page": this.currentPage
                });
            },
            //切换每页条数
            doSizePage(v) {
                this.tableDataColen.splice(0, this.tableDataColen.length);
                this.loading = true;
                let total = this.total;
                let pageSize = this.pageSize;
                let pageCount = this.pageCount;
                let page = 0;
                let _this = this;
                if (v == 1000) {
                    // 选择1000条后，默认刷新时间为120秒
                    this.times = 120;
                }
                page = Math.ceil((pageSize * pageCount) / total) || 1;
                _this.tableDataList.splice(0, _this.tableDataList.length);
                let index = this.baseUrl.indexOf('?');
                if (index === -1) {
                    this.baseUrl = this.baseUrl + "?page=1&page_size=" + v;
                } else {
                    let n = this.baseUrl.indexOf('page=');
                    if (n > 0) {
                        this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=1");
                    } else {
                        this.baseUrl = this.baseUrl + "&page=1&page_size=" + v;
                    }
                    let m = this.baseUrl.indexOf('page_size=');
                    if (m > 0) {
                        this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + v);
                    } else {
                        this.baseUrl = this.baseUrl + "&page_size=" + 20;
                    }
                }
                let otherData = {};
                this.$.autoAjax('get', this.baseUrl, '', {
                    ok: (res) => {
                        _this.total = res.attributes.total || 0;
                        _this.pageSize = res.attributes.page_size || 20;
                        _this.pageCount = Math.ceil(this.total / this.pageSize);
                        _this.currentPage = 1;
                        if (_this.getData) {
                            let model = res.data || {};
                            for (let k in model) {
                                otherData[k] = model[k];
                            }
                        }
                        let tableDate = res.data.tableDemoDate || res.data || res.data.list || res.data.data || res.data.deposit || [];
                        if (tableDate.list) {
                            for (let i in tableDate.list) {
                                _this.tableDataList.push(_this.formatRowDate(tableDate.list[i], this.columnList, i));
                                let temp = tableDate.list[i], tempobj = {};
                                for (let m in temp) {
                                    tempobj[m] = temp[m];
                                }
                                _this.tableDataColen.push(tempobj);
                            }
                        } else {
                            for (let i in tableDate) {
                                _this.tableDataList.push(_this.formatRowDate(tableDate[i], this.columnList, i));
                                let temp = tableDate[i], tempobj = {};
                                for (let m in temp) {
                                    tempobj[m] = temp[m];
                                }
                                _this.tableDataColen.push(tempobj);
                            }
                        }
                        if (_this.getData) {
                            _this.$emit("get-table-data", {
                                "item": _this.tableDataColen,
                                "allData": otherData
                            });
                        }
                        _this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        _this.loading = false;
                        if (_this.getData) {
                            _this.$emit("get-table-data", {
                                "item": _this.tableDataColen,
                                "allData": otherData
                            });
                        }
                        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                    }
                })
            },
            //切换页数
            doCurrentChange(v) {
                this.loading = true;
                let total = this.total;
                let pageSize = this.pageSize;
                let pageCount = this.pageCount;
                this.tableDataColen.splice(0, this.tableDataColen.length);
                this.currentPage = v;
                let page = 0;
                let _this = this
                page = Math.ceil((pageSize * pageCount) / total) || 1;
                _this.tableDataList.splice(0, _this.tableDataList.length);
                let index = this.baseUrl.indexOf('?');
                if (index === -1) {
                    this.baseUrl = this.baseUrl + "?page=" + v + "&page_size=" + this.pageSize;
                } else {
                    let n = this.baseUrl.indexOf('page=');
                    if (n > 0) {
                        this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + v);
                    } else {
                        this.baseUrl = this.baseUrl + "&page=" + v + "&page_size=" + this.pageSize;
                    }
                    let m = this.baseUrl.indexOf('page_size=');
                    if (m > 0) {
                        this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + this.pageSize);
                    } else {
                        this.baseUrl = this.baseUrl + "&page_size=" + 20;
                    }
                }
                this.$.autoAjax('get', this.baseUrl, '', {
                    ok: (res) => {
                        _this.total = res.attributes.total || 0;
                        _this.pageSize = res.attributes.page_size || 20;
                        _this.pageCount = Math.ceil(this.total / this.pageSize);
                        _this.currentPage = res.attributes.page || 1;
                        let otherData = {};
                        if (_this.getData) {
                            let model = res.data || {};
                            for (let k in model) {
                                otherData[k] = model[k];
                            }
                        }
                        let tableDate = res.data.tableDemoDate || res.data || res.data.list || res.data.data || res.data.deposit || [];
                        if (tableDate.list) {
                            for (let i in tableDate.list) {
                                _this.tableDataList.push(_this.formatRowDate(tableDate.list[i], this.columnList, i));
                                let temp = tableDate.list[i], tempobj = {};
                                for (let m in temp) {
                                    tempobj[m] = temp[m];
                                }
                                _this.tableDataColen.push(tempobj);
                            }
                        } else {
                            for (let i in tableDate) {
                                _this.tableDataList.push(_this.formatRowDate(tableDate[i], this.columnList, i));
                                let temp = tableDate[i], tempobj = {};
                                for (let m in temp) {
                                    tempobj[m] = temp[m];
                                }
                                _this.tableDataColen.push(tempobj);
                            }
                        }
                        if (_this.getData) {
                            otherData.attributes = res.attributes
                            _this.$emit("get-table-data", {
                                "item": _this.tableDataColen,
                                "allData": otherData
                            });
                        }
                        _this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        _this.loading = false;
                        if (_this.getData) {
                            _this.$emit("get-table-data", {
                                "item": _this.tableDataColen,
                                "allData": otherData
                            });
                        }
                        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                    }
                })
            },
            //批量操作
            doOperation(fn) {
                let model = this.rowsList;
                let arrs = [];
                for (let k in model) {
                    arrs.push(model[k]);
                }
                this.$emit("do-operation", {
                    "fn": fn,
                    "rows": arrs,
                    "page": this.currentPage
                });
            },
            // 连接拼接单击事件
            showLink(fn, row) {
                this.$emit("do-handle", {
                    "row": row,
                    "fn": fn,
                    "page": this.currentPage
                });
            },
//            updateFormData() {
//                if (this.tableData.list.length > 0) {
//                    this.Datainit();
//                }
//            },
//            数据变化事件
            changes(index, row, keys) {
//			    console.log(index)
//			    console.log(row)
//			    console.log(keys)
                if (!row[keys]) {
                    if (this.levelNUmRow % 2 === 0) {
                        this.$message.error(LANG['请选择你要修改的层级！'] || '请选择你要修改的层级！');
                    }
                } else {
                    if (row.lock == 1) {
                        this.$message.error(LANG['层级已锁定，不可操作！'] || '层级已锁定，不可操作！');
                        row[keys] = this.tableDataColen[index][keys];
                        return;
                    }
                    if (this.levelNUmRow === 0) {
                        this.levelNUmRow = 1;
                    } else {
                        this.levelNUmRow++;
                    }
                    if (this.levelNUmRow) {
                        let level = '';
                        for (let k = 0; k < this.listArr.length; k++) {
                            if (this.listArr[k].value === row[keys]) {
                                level = this.listArr[k].label;
                            }
                        }
                        this.confirmConfig.state = true;
                        this.confirmConfig.msg = (this.LANG['确定将层级修改为'] || '确定将层级修改为') + '"' + level + '"' + (this.LANG['吗？'] || '吗？');
                        this.confirmConfig.fn = "doChanges";
                        this.confirmConfig.obj = {row: row, keys: keys, index: index};
//                        this.levelNUmRow -- ;
                    }
//                    console.log(this.levelNUmRow %2)
                }
            },
            changeSwit(index, row, keys) {
                if (index >= 0) {
                    this.$emit("do-Lock", {
                        "row": row,
                        "index": index,
                        "key": keys
                    });
                }
            },
            //保存表格数据
            dataSave() {
                this.$emit("data-save", {
                    "dataList": this.tableDataColen
                });
            },
            getTableWidth() {
            },
            // 导出数据
            exportData() {
                this.$emit("export-data");
            },
            // 切换刷新时间
            changeTimes(v) {
                let _this = this;
                if (parseInt(v) === 0) {
                    window.clearInterval(window.PAGEREF);
                } else {
                    this.createTimes(parseInt(v));
                }
            },
            // 创建定时器
            createTimes(times) {
                let _this = this;
                window.clearInterval(window.PAGEREF);
                window.PAGEREF = setInterval(function () {
                    _this.Datainit();
                }, times * 1000);
            },
            //批量获取会员层级
//            handelSelect(){
//                this.$emit('do-handelSelect',{
//                    value:this.levelSelectvalue
//                })
//            },
//            handelLock(){
//                this.$emit('do-handelLock',{
//                    value:this.lockSwitch
//                })
//            },
            // 批量保存操作
            alldataSave() {
                let model = this.rowsList;
                let arrs = [];
                for (let k in model) {
                    arrs.push(model[k]);
                }
                this.$emit('save-all-data', {
                    "rows": arrs,
                    "level": this.levelSelectvalue,
                    "lock": this.lockSwitch
                })
            },
            //批量下啦选中
            all_select_data(value) {
                if (this.levelNum === 0) {
                    this.levelNum = 1;
                } else {
                    this.levelNum++;
                }
                if (!value) {
                    if (this.levelNum % 2 === 0) {
                        this.$message.error(LANG['请选择你要修改的层级！'] || '请选择你要修改的层级！');
                    }
                } else if (this.levelNum % 2 === 0) {
                    let level = '';
                    for (let k = 0; k < this.listArr.length; k++) {
                        if (this.listArr[k].value === value) {
                            level = this.listArr[k].label;
                        }
                    }
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定将层级修改为'] || '确定将层级修改为') + '"' + level + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "updateLevel";
                }
            },
            doCancel(obj) {
                if (obj && obj.obj && (obj.obj.index != undefined) && obj.obj.keys && obj.obj.row) {
                    this.levelNUmRow = 0;
                    obj.obj.row[obj.obj.keys] = this.tableDataColen[obj.obj.index][obj.obj.keys];
                } else {
                    this.levelNum = 0;
                    this.levelSelectvalue = '';
                    this.lockSwitch = false;
                }
            },
            // 确认修改层级
            doConfirm(obj) {
                let _this = this;
                if (obj && obj.fn) {
                    switch (obj.fn) {
                        case 'updateLevel':
                            let model = this.rowsList;
                            let arrs = [];
                            for (let k in model) {
                                arrs.push(model[k]);
                            }
                            _this.$emit('all_select_data', {
                                "rows": arrs,
                                "level": _this.levelSelectvalue,
                                "lock": _this.lockSwitch
                            })
                            _this.levelNum = 0;
                            break;
                        case 'doChanges':
                            if (obj.obj && obj.obj.index >= 0) {
                                _this.$emit("do-changes", {
                                    "row": obj.obj.row,
                                    "index": obj.obj.index,
                                    "key": obj.obj.keys
                                });
                                _this.tableDataColen[obj.obj.index][obj.obj.keys] = obj.obj.row[obj.obj.keys];
                                _this.levelNUmRow = 0;
                            }
                            break;
                    }
                }
            },
            //批量switch操作
            all_switch_data(value) {
                let temp = [], tempModel = this.rowsList;
                for (let k in tempModel) {
                    temp.push(tempModel[k]);
                }
                this.$emit('all_switch_data', {
                    "rows": temp,
                    "lock": value,
                    "level": this.levelSelectvalue,
                })
            },
            // 排序
            doSort(prop, type) {
                let temp = this.ascKey[prop];
                for (let k in this.ascKey) {
                    this.ascKey[k] = '';
                }
                if (temp === 'ascending') {
                    this.ascKey[prop] = 'descending';
                } else if (temp === 'descending' || temp === '') {
                    this.ascKey[prop] = 'ascending';
                }

                if (this.ascKey[prop] === 'ascending') {
                    this.tableDataList.sort(function (a, b) {
                        let tmepa, tempb;
                        if (type === 'date') {
                            tmepa = !isNaN(Date.parse(a[prop])) ? Date.parse(a[prop]) : 0;
                            tempb = !isNaN(Date.parse(b[prop])) ? Date.parse(b[prop]) : 0;
                        } else {
                            tmepa = a[prop] ? a[prop] : 0;
                            tempb = b[prop] ? b[prop] : 0;
                        }
                        return tmepa - tempb
                    });
                } else {
                    this.tableDataList.sort(function (a, b) {
                        let tmepone, temptwo;
                        if (type === 'date') {
                            tmepone = !isNaN(Date.parse(a[prop])) ? Date.parse(a[prop]) : 0;
                            temptwo = !isNaN(Date.parse(b[prop])) ? Date.parse(b[prop]) : 0;
                        } else {
                            tmepone = a[prop] ? a[prop] : 0;
                            temptwo = b[prop] ? b[prop] : 0;
                        }
                        return temptwo - tmepone
                    });
                }
            },
            doRefresh() {
                this.Datainit();
            }
        },
        filters: {
            getStatusColor: function (value, statusKey) {
                let obj = {}
                var statsu_str = ""
                // statusKey 代理审核页面状态个别处理
                if (statusKey && statusKey === 'agentAudit') {
                    if (value == "0") {
                        statsu_str = "sucess_text";
                    } else if (value == "2") {
                        statsu_str = "state_danger"
                    } else if (value == "3") {
                        statsu_str = "state_info"
                    }
                    obj[statsu_str] = true;
                } else {
                    if (value == "1" || value == "enabled" || value == "paid" || value == 'pass' || value == 'underway') {
                        statsu_str = "sucess_text";
                    } else if (value == "0" || value == "disabled" || value == "rejected" || value == "failed" || value == "2" || value == 'open') {
                        statsu_str = "state_danger"
                    } else if (value == "4" || value == 'cancel' || value == 'canceled' || value == 'refused') {
                        statsu_str = "state_info"
                    } else if (value == "paid" || value == "3") {
                        statsu_str = "state_success"
                    } else if (value == "applying" || value == "pending") {
                        statsu_str = "state_warning"
                    }
                    obj[statsu_str] = true;
                }
                return obj;
            }
        },
        watch: {
            tableUrl: function (newQuestion) {
                if (newQuestion && this.isInit) {
                    this.Datainit('changeUrl');
                }
            },
            tableDataList() {
                this.getTableWidth();
            },
            //根据是否更新，更新数据
            updated: function (newval) {
                if (newval && this.isInit) {
                    this.Datainit();
                }
            },
            formType: function (newval) {
                if ((newval == "add" || newval == "edit" || newval == "delete") && this.isInit) {
                    this.Datainit();
                }
            },
            refreshTimes: function (newval) {
                this.times = newval.toString();
            },
            opts: function (newval) {
                if (newval && this.isInit) {
                    this.Datainit();
                }
            },
            // 根据刷新状态创建定时器
            autoshowRefresh: function (newval) {
                let _this = this;
                window.clearInterval(window.PAGEREF);
                window.PAGEREF = null;
                if (newval) {
                    if (parseInt(this.times) > 0 && (this.$route.path === '/onLineReceipts' || this.$route.path === '/offlineReceipts' || this.$route.path === '/memberGetOut' || this.$route.path === '/noteManagement' || this.$route.path === '/apply')) {
                        let times = parseInt(this.times) > 0 ? parseInt(this.times) : 0;
                        if (times >= 30) {
                            _this.createTimes(parseInt(times));
                        }
                    } else {
                        this.Datainit();
                    }
                }
            },
            //修改数据失败处理
            updateMessage: function (newval) {
                if (newval) {
                    let str = newval;
                    let list = str.split(",");
                    if (list.length === 3) {
                        switch (list[2]) {
                            case "true":
                                this.tableDataList[list[0]][list[1]] = false;
                            case "false":
                                this.tableDataList[list[0]][list[1]] = true;
                            case "0":
                                this.tableDataList[list[0]][list[1]] = "0";
                            case "q":
                                this.tableDataList[list[0]][list[1]] = "1";
                        }

                    }
                }
            }
        },
        created() {
            //初始化列配置
            if (this.isCreated) {
                if (!this.isInit) {
                    this.isInit = true;
                }
                this.Datainit();
            }
        },
        mounted() {
            let sum = 0, _this = this;
            this.$nextTick(() => {
                if (this.columnsUrl) {
                    this.$.get(this.columnsUrl, (res) => {
                        if (res.columns) {
                            let list = res.columns;
                            for (let k in list) {
                                if (list[k].width) {
                                    sum = sum + parseInt(list[k].width);
                                }
                            }
                        } else {
                            this.$message.error('获取列表配置失败')
                        }
                    })
                    $(window).on('load resize', function () {
//                        _this.autoTable(sum);

                    })
                    this.$nextTick(() => {
                        EVENT.$emit('table.loaded');
                    });
                }
            })

        },
        activated() {
            let _this = this;
            if (!this.isInit) {
                this.isInit = true;
            }
            window.PAGEREF = null;
            if (this.$route.path === '/onLineReceipts' || this.$route.path === '/offlineReceipts' || this.$route.path === '/memberGetOut' || this.$route.path === '/apply') {
                this.times = '30';
            } else {
                this.times = '0';
            }
            if (parseInt(this.times) > 0 && this.autoshowRefresh && (this.$route.path === '/onLineReceipts' || this.$route.path === '/offlineReceipts' || this.$route.path === '/memberGetOut' || this.$route.path === '/noteManagement' || this.$route.path === '/apply')) {
                let times = parseInt(this.times) > 0 ? parseInt(this.times) : 0;
                if (times >= 30) {
                    _this.Datainit();
                    _this.createTimes(parseInt(times));
                }
            } else {
                if (!this.isCreated) {
                    this.Datainit();
                }
            }
            Bus.$on('form_query', function (v) {
                if (v) {
                    _this.Datainit();
                }
            })
            //Bus.$emit('form_Reset', true);
        },
        deactivated() {
            window.clearInterval(window.PAGEREF);
            Bus.$off('form_query');
            this.reSet();
        }
    }
</script>
<style lang="less">
    #tableSingle {
        .el-table, .el-table button, .el-table a, .el-table th {
            font-size: 0.8rem;
        }
        .el-table th, .el-table td {
            min-width: 60px;
        }
        .el-table {
            tr:hover {
                background: #F2F6FC;
            }
        }
        /*表格*/
        .el-table .cell, .el-table th > div {
            padding-left: 4px;
            padding-right: 0
        }

        .col2 {
            background-color: #FAFAFA
        }

        .el-table .sucess_text {
            color: #13CE66
        }

        .el-table .info_text {
            color: #20A0FF
        }

        .el-table .danger_text {
            color: #FF4949
        }

        .fontWeight {
            font-weight: 500;
        }

        .linkCell {
            min-width: 50px;
        }

        .line_height30 {
            line-height: 30px;
        }
    }

    .w100_impor {
        width: 100% !important;
    }
</style>
