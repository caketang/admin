<template>
    <div id="tableSingle" v-loading="loading" ref="tableSingle">
        <el-col class="tRight mb20" v-if="showExport || autoshowRefresh">
            <span v-if="autoshowRefresh">{{LANG['刷新'] || '刷新'}}</span>
            <el-select v-model="times" placeholder="请选择" size="small" class="intW mr10" @change="changeTimes">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" size="small" @click="exportData" v-if="!autoshowRefresh">{{LANG['导出'] || '导出'}}
            </el-button>
        </el-col>
        <el-col class="tRight mb20" v-if="showRefresh && !showExport">
            <el-button type="primary" size="small" class="addBut" @click="doRefresh">{{LANG['刷新'] || '刷新'}} </el-button>
        </el-col>
        <div v-if="saveData && checkSum === 0" class="tRight mb10">
            <el-button type="primary" size="small" @click="dataSave">{{LANG['保存'] || '保存'}}</el-button>
        </div>
        <el-col v-if="checkSum && checkList.length" class="ft14 line_height30">
            <label for="" class="fl mr10 pleft mb10">{{LANG['您选择了'] || '您选择了'}}
                <span class="selecttext">{{checkSum}}</span>{{LANG['条数据'] || '条数据'}} </label>
            <div v-if="tabOperation !=undefined" class="btngroup">
                <el-button size="small" v-for="(opt,index) in tabOperation" :key="index"
                           @click="doOperation(opt.fn)">{{LANG[opt.label] || opt.label}}
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
                            <div class="cell" @click="doSort(col.prop,col.sortType)" v-if="col.sort">
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
                            <!--<td class="el-table_1_column_19" v-for="(col,index) in columnList" :key="index"-->
                            <!--:style="{'min-Width': (col.width +'px')}"-->
                            <!--v-if="col.disabled == true">-->

                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'date'">
                                <span>{{item[col.prop] | formatDate('yyyy-MM-dd HH:mm:ss') }}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'contentFilterLink'" @click="showLink(col.fn,item)">
                                <el-button size="small" type="text">
                                    {{item | formatContentFilterLink(item['game_name'], col.prop) }}
                                </el-button>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'filterConnect'">
                                <span size="small" type="text">
                                    {{item | formatContentFilter(col.prop, col.filters, col.delimiter) }}
                                </span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'object'">
                                <span v-if="col.formatKey != 'bank'">{{item | formatObject(col.prop)}}</span>
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
                                        {{LANG['银行名称'] || '银行名称'}}：{{item[col.prop.split(",")[2]] || ""}}</p>
                                    <p v-if="col.prop.split(',')[4] !== undefined && col.prop.split(',')[4] != 'null'">
                                        {{LANG['支行'] || '支行'}}：{{item[col.prop.split(",")[0]][col.prop.split(",")[4]] || ""}}</p>
                                </div>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'allState'">
                                <span>{{item | formatAllState(col.prop, col.formatkey, col.truelabel, col.falselabel)}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'connectProp'">
                                <span>{{item | formatConnectProp(col.prop)}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'connectPropMoney'">
                                <span>{{item | formatConnectPropMoney(col.prop)}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'moneyDelimiter'">
                                <span>{{item[col.prop] | formatMoneyDelimiter(col.delimiter)}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="!col.type && !col.filters">
                                <!--<span v-if="col.prop == 'admin_uid'">{{LANG['管理员'] || '管理员'}}</span>-->
                                <span>{{item[col.prop]}}</span>
                                <span class="defutFont"
                                      v-if="item['t_default'] == '0'">[ {{LANG['系统默认'] || '系统默认'}} ]</span>
                            </div>
                            <div class="cell" v-if="col.type && col.type == 'connectAdd'">
                                <span>{{ item | formatConnectAdd(col.prop)}}</span>
                            </div>
                            <div class="cell" v-if="col.type && col.type == 'connectString'">
                                <p>{{LANG['户名'] || '户名'}}：{{item[col.prop.split(",")[0]] || ""}}</p>
                                <p>{{LANG['账号'] || '账号'}}：{{item[col.prop.split(",")[1]] || ""}}</p>
                                <p>{{LANG['支行'] || '支行'}}：{{item[col.prop.split(",")[2]] || ""}}</p>
                            </div>
                            <div class="cell" v-if="col.type && col.type == 'linkConnectAdd'">
                                <el-button size="small" @click="doHandle(item,col.fn)" type="text">
                                    {{item | formatConnectAdd(col.prop)}}
                                </el-button>
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
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.filterType && col.filterType == 'json' && col.type == 'json'">
                                <span>{{item[col.prop] | formatJson}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.filterType && col.filterType == 'array' && col.type == 'array'">
                                <span>{{item[col.prop] | formatArray(col.separators)}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'json' && col.arr">
                                <span>{{item[col.prop] | formatJsonArr(col.arr)}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'connect'">
                                <span :class="{fontWeight:col['fontweight']}">{{item | formatConnect(col.prop, col.delimiter, col.type)}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'connect_odds_type'">
                                <span :class="{fontWeight:col['fontweight']}">{{item | formatConnectodds(col.prop, col.delimiter, col.type)}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'connectInt'">
                                <span :class="{fontWeight:col['fontweight']}">{{item | formatConnect(col.prop, col.delimiter, col.type, 'int')}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'connectDate'">
                                <p>{{item[col.prop.split(",")[0]] || ""}}</p>
                                <p>{{item[col.prop.split(",")[1]] || ""}}</p>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'connect,twoDivisionMoney'">
                                <span :class="{fontWeight:col['fontweight']}">{{item | formatConnectTwo(col.prop, col.delimiter)}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'connectLottery'">
                                <span>{{item | formatConnectLottery(col.prop, lotteryType)}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'contentDate'">
                                <span>{{item | formatContentDate(col.prop, lotteryType)}}</span>
                            </div>
                            <div v-if="col.type == 'connect,divisionMoney'" class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <span :class="{fontWeight:col['fontweight']}">{{item | formatConnect(col.prop, col.delimiter, col.type)}}</span>
                            </div>
                            <div v-if="col.type == 'link'" class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <el-button size="small" v-if="item[col.prop]" @click="doHandle(item,col.fn)"
                                           type="text">
                                    <el-tag type="primary" class="linkCell">{{item[col.prop]}}</el-tag>
                                </el-button>
                                <span v-if="!item[col.prop]">{{item[col.prop]}}</span>
                            </div>
                            <div v-if="col.type == 'linkFilter'" class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <el-button size="small" v-if="item[col.prop]" @click="doHandle(item,col.fn)"
                                           type="text">
                                    <el-tag type="primary" class="linkCell">{{item[col.prop] | formatSex(col.filters)
                                        }}
                                    </el-tag>
                                </el-button>
                            </div>

                            <div v-if="col.type == 'linkDivisionMoney'" class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <el-tooltip placement="right" effect="light" v-if="col.hover && hoverData">
                                    <div slot="content">
                                        <p v-for="(item,key) in hoverData" :key="key" :class="{mt10 :key>0}">
                                            <el-tag type="primary">{{item.label}}:</el-tag>
                                            <span class="pleft">{{item.value}}</span></p>
                                    </div>
                                    <el-tag type="primary" v-if="item[col.prop]" size="small" style="min-width:60px;"
                                            @mouseenter.native.prevent="doHandle(item,col.fn)">
                                        {{item[col.prop] | formatMoney}}
                                    </el-tag>
                                </el-tooltip>
                                <el-button size="small" v-if="item[col.prop] && !col.hover"
                                           @click="doHandle(item,col.fn)"
                                           type="text">
                                    <el-tag type="primary" class="linkCell">{{item[col.prop] | formatMoney}}</el-tag>
                                </el-button>
                                <span v-if="!item[col.prop]">{{item[col.prop]}}</span>
                            </div>
                            <div v-if="col.type == 'img'" class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <img :src="item[col.prop] | getrpiurl" alt="item[col.prop]" height="20px"
                                     width="auto"
                                     v-if="item[col.prop] && item[col.prop].toString().length>5 && col.imgtype !== 'bank'">
                                <img :src="'/static/img/bank/'+item['code']+'.png'" alt="item[col.prop]" height="20px"
                                     width="auto" v-if="col.imgtype == 'bank'" style="vertical-align: middle;"/>
                                <span v-if="col.imgtype == 'bank'">{{item['code']}}</span>
                                <span v-if="!item[col.prop] || (item[col.prop] && item[col.prop].toString().length<5) ">{{LANG['暂无图片'] || '暂无图片'}}</span>
                            </div>
                            <div v-if="col.type == 'button' && ((item['t_default'] == undefined && col.filters == undefined) || item['t_default'] == '1')"
                                 class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <div v-for="btn in col.btnGroup" style="float:left;margin-left:5px;">
                                    <el-button size="small"
                                               v-if="btn.prop == undefined && !item[btn.valueKey] && btn.propOne == undefined && !col.hover"
                                               @click="doHandle(item,btn.fn)"
                                               :type="btn.btnType">{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                    <!--按钮的hover效果-->
                                    <el-tooltip placement="right" effect="light" v-if="col.hover && hoverData">
                                        <div slot="content">
                                            <p v-for="(item,key) in hoverData" :key="key" :class="{mt10 :key>0}">
                                                <el-tag type="primary">{{item.label}}:</el-tag>
                                                <span class="pleft">{{item.value}}</span></p>
                                        </div>
                                        <el-button size="small"
                                                   v-if="btn.prop == undefined && !item[btn.valueKey] && btn.propOne == undefined&& col.hover"
                                                   @mouseenter.native.prevent="doHandle(item,btn.fn)"
                                                   :type="btn.btnType">{{LANG[btn.label] || btn.label}}
                                        </el-button>
                                    </el-tooltip>

                                    <el-button size="small"
                                               v-if="btn.prop && item[btn.prop] == btn.val && (btn.equal == undefined) && !item[btn.valueKey] && btn.propOne == undefined"
                                               @click="doHandle(item,btn.fn)" :type="btn.btnType"
                                    >{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                    <el-button size="small"
                                               v-if="btn.prop && item[btn.prop] != btn.val && (btn.equal == false)  && btn.valNum == 1 && !item[btn.valueKey] && btn.propOne == undefined"
                                               @click="doHandle(item,btn.fn)" :type="btn.btnType"
                                    >{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                    <el-button size="small"
                                               v-if="btn.prop && (item[btn.prop] != btn.val && item[btn.prop] != btn.val1) && (btn.equal == false)  && btn.valNum == 2 && !item[btn.valueKey] && btn.propOne == undefined"
                                               @click="doHandle(item,btn.fn)" :type="btn.btnType"
                                    >{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                    <el-button size="small"
                                               v-if="btn.propOne && btn.propTwo  && item[btn.propOne] == btn.valOne && item[btn.propTwo] == btn.valTwo && btn.prop == undefined"
                                               @click="doHandle(item,btn.fn)" :type="btn.btnType"
                                    >{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                    <span v-if="btn.valueKey && item[btn.valueKey]">{{LANG[item[btn.valueKey]] || item[btn.valueKey]}}</span>
                                </div>
                            </div>
                            <div v-if="col.type == 'linkNumberButton' " class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <span> {{item | formatLinkNumberButton(col.prop, btnLinkGroup)}} </span>
                                <div v-for="btn in btnLinkGroup" style="float:left;margin-left:5px;">
                                    <el-button @click="doHandle(item,col.fn,col.prop,btn)" size="small" type="text">
                                        <el-tag type="primary"> {{btn.value}}
                                        </el-tag>
                                    </el-button>
                                </div>
                            </div>
                            <div v-if="col.type == 'button' && item['t_default'] == '0'" class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <div v-for="btn in col.btnGroup" style="float:left;margin-left:5px;">
                                    <el-button size="small" v-if="btn.prop == undefined && btn.label == '复制新增'"
                                               @click="doHandle(item,btn.fn)"
                                               :type="btn.btnType">{{LANG[btn.label] || btn.label}}
                                    </el-button>
                                </div>
                            </div>
                            <div v-if="col.type == 'button' && col.filters" class="cell">
                                <div v-for="btn in col.btnGroup" style="float:left;margin-left:5px;">
                                <span v-if="btn.filters == undefined ">
                                    <el-button size="small" @click="doHandle(item,btn.fn)" :type="btn.btnType"
                                    >{{LANG[btn.label] || btn.label}}</el-button>
                                </span>
                                    <span v-if="btn.filters && col.filters[0]['value'] === 'enabled'">
                                    <el-button size="small"
                                               v-if="/enabled/.test(item[btn.key]) && btn.filters === 'enabled'"
                                               @click="doHandle(item,btn.fn)" :type="btn.btnType"
                                               v-text="LANG['停用'] || '停用'"></el-button>
                                    <el-button size="small"
                                               v-if="!(/enabled/.test(item[btn.key])) && btn.filters === 'disabled'"
                                               @click="doHandle(item,btn.fn)" :type="btn.btnType"
                                               v-text="LANG['启用'] || '启用'"></el-button>
                                </span>
                                </div>
                            </div>
                            <div class="cell"
                                 v-if="col.filters != undefined && col.type != 'regular' && col.type != 'linkFilter' && col.type != 'ipBlack' && col.type != 'filterConnect'"
                                 :class="{sucess_text: (item[col.prop] == 1 || item[col.prop] == true || item[col.prop] == 'enabled'),info_text:(item[col.prop] == 2),danger_text:(item[col.prop] == 0 || item[col.prop] == false || item[col.prop] == null)}">
                                {{item[col.prop] | formatSex(col.filters) }}
                            </div>
                            <div class="cell"
                                 v-if="col.type == 'ipBlack'"
                                 :class="{sucess_text: (item[col.prop] == 0 || item[col.prop] == false || item[col.prop] == 'disabled'),danger_text:(item[col.prop] == 1 || item[col.prop] == true)}">
                                {{item[col.prop] | formatSex(col.filters) }}
                            </div>
                            <div class="cell" v-if="col.type == 'reduce'">
                                <span class="sucess_text">{{(isNaN(parseInt(item[col.prop[0]])) ? 0 : parseInt(item[col.prop[0]])) - (isNaN(parseInt(item[col.prop[1]])) ? 0 : parseInt(item[col.prop[1]]))}}</span>
                            </div>
                            <div class="cell" v-if="col.type == 'divisionMoney'">
                                <span>{{item[col.prop] | formatMoney}}</span>
                            </div>
                            <div class="cell" v-if="col.type == 'divisionMoney,fours'">
                                <span>{{item[col.prop] | formatMoney(4)}}</span>
                            </div>
                            <div class="cell" v-if="col.type == 'subtract'">
                                <span>{{item | formatSubtract(col.prop)}}</span>
                            </div>
                            <div class="cell" v-if="col.type == 'lotteryCustom'">
                                <span>{{item[col.prop] | formatLotteryCustom(tableUrl)}}</span>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'checkbox'">
                                <el-checkbox :true-label="1" :false-label="0" :checked="item[col.prop] | formatCheck"
                                             v-model="item[col.prop]" @change="changes(k,item,col.prop)"></el-checkbox>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'number'">
                                <input type="number" class="el-input__inner" min="1" v-model="item[col.prop]">
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'switch' ||  col.show">
                                <el-switch v-model="item[col.prop]" @change="changeSwit(k,item,col.prop)"
                                           :on-value="'1' || col.onValue" :off-value="'0'|| col.offValue"
                                           v-if=" item[col.show] && item[col.show].toString() === '1'"></el-switch>
                                <el-switch v-model="item[col.prop]" @change="changeSwit(k,item,col.prop)"
                                           :on-value="'1' || col.onValue" :off-value="'0'|| col.offValue"
                                           v-else></el-switch>
                            </div>
                            <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                                 v-if="col.type == 'list'">
                                <el-select v-model="item[col.prop]" :placeholder="LANG['请选择'] || '请选择'"
                                           @change="changes(k,item,col.prop)" size="small">
                                    <el-option
                                            v-for="lev in listArr"
                                            :key="lev.value"
                                            :label="lev.label"
                                            :value="lev.value"
                                            :disabled="item[col.prop] == lev.value?true:false">
                                    </el-option>
                                </el-select>
                            </div>
                            <!--<div class="cell" :class="{tCent:(col.class != undefined)?true:false}"-->
                            <!--v-if="col.type == 'switch' && col.show === undefined">-->
                            <!--<el-switch v-model="item[col.prop]" @change="changes(k,item,col.prop)"-->
                            <!--:on-value="col.onValue || '1'" :off-value="col.offValue || '0'"></el-switch>-->
                            <!--</div>-->
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
                            <div class="cell">{{subTotalBet.lose_earn | formatMoney}}</div>
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
                            <div class="cell">{{totalBet.lose_earn | formatMoney}}</div>
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

        <!-- {{otherData}} -->
    </div>
</template>
<script type="text/ecmascript-6">
    //列配置
    import columnSet from './columnSet.vue'
    import confirm from './confirm.vue'
    import Vue from 'vue'

    Vue.filter('formatJson', function (v) {
//        let str = v  || "";
        let jsonval = "";
        if (v) {
//            let model = JSON.parse(str) || {};
            let model = v;
            for (let k in model) {
                if (model[k]) {
                    jsonval = jsonval + model[k].toString() + " ";
                }
            }
        }
        return jsonval;
    });
    Vue.filter('formatConnectProp', function (v, prop) {
        let jsonval = "";
        let list = prop.split(",");
        if (v && list.length && list.length == 2) {
            return FORMATMONEY(v[list[0]][list[1]]);
        } else {
            return 0;
        }
    });
    /**
     * @description 注单查询 彩票的玩法和类型拼接
     * @param v url字符串
     */
    Vue.filter('formatConnectodds', function (v, prop) {
        let val = "";
        let list = prop.split(",");
        if (v && list.length && list.length == 2) {
            val = v[list[0]] + `[${v[list[1]] === "fast" ? "信用" : "官方"}]`
            return val;
        } else {
            return '未知玩法类型';
        }
    });
    Vue.filter('formatConnectPropMoney', function (v, prop) {
        let jsonval = "";
        let list = prop.split(",");
        if (v && list.length && list.length == 2) {
            return v[list[0]][list[1]];
        } else {
            return '';
        }
    });
    Vue.filter('formatLinkNumberButton', function (v, props, btnLinkGroup) {
        let item = v || {};
        let list = null;
        if (typeof(item[props]) === 'string') {
            list = props.split(',');
            for (let k = 0; k < list.length; k++) {
                btnLinkGroup[k] = {
                    key: list[k],
                    value: FORMATMONEY(item[list[k]],2),
                };
            }
        }
        if (typeof(item[props]) === 'object') {
            list = item[props];
            for (let m in list) {
                btnLinkGroup[m] = {
                    key: m,
                    value: FORMATMONEY(list[m],2),
                };
            }
        }
//        console.log(btnLinkGroup);
        return '';
    })
    Vue.filter('formatContentFilter', function (v, key, filters, delimiter) {
        let item = v || {}, str = '';
        let temp = (item[key] || '').split(',');
        if (temp.length > 0 && filters && filters.length) {
            for (let k = 0; k < temp.length; k++) {
                for (let i = 0; i < filters.length; i++) {
                    if (filters[i].value === temp[k]) {
                        str = str + filters[i].text + (delimiter || '');
                    }
                }
            }
        }
        return delimiter ? str.substring(0, str.length - 1) : str;
    });
    Vue.filter('formatContentFilterLinkTwo', function (v, type, prop) {
        let item = v || {};
        let obj = item[prop] || {};
        let str = '';
        let sum = 0;
        if (!type) {
            return '';
        }
        switch (type) {
            case "百家乐":
                let arrOne, arrTwo, sumz = 0, sumx = 0;
                if (obj.poker && obj.poker.banker) {
                    arrOne = obj.poker.banker.split("-");
                    if (arrOne.length > 0) {
                        arrOne.forEach((v) => {
                            sumz = sumz + FORMATNUMBER(v);
                        })
                    }
                    str = str + "庄[" + GETLASTNUM(sumz) + "]";
                }
                if (obj.poker && obj.poker.player) {
                    arrTwo = obj.poker.player.split("-");
                    if (arrTwo.length > 0) {
                        arrTwo.forEach((v) => {
                            sumx = sumx + FORMATNUMBER(v);
                        })
                    }
                    str = str + "闲[" + GETLASTNUM(sumx) + "]";
                }
                return str;
                break;
            case "龙虎":
                if (obj.poker && obj.poker.dragon) {
                    str = str + "龙[" + GETLASTNUM(obj.poker.dragon) + "]";
                }
                if (obj.poker && obj.poker.tiger) {
                    str = str + "虎[" + GETLASTNUM(obj.poker.tiger) + "]";
                }
                return str;
                break;
            case "轮盘":
                return obj.result || '';
                break;
            case "骰宝":
                return obj.result || '';
                break;
            default:
                return 'haha';
                break;

        }
    });
    Vue.filter('formatContentFilterLink', function (v, type, prop) {
        let item = v || {};
        let obj = item[prop] || {};
        let str = '';
        type = type.trim();
        let sum = 0;
        if (!type) {
            return '';
        }
        switch (type) {
            case "百家乐":
            case "极速百家乐":
            case "机器人百家乐":
                let arrOne;
                if (obj) {
                    arrOne = obj.split(";");
                    str = str + "庄[" + arrOne[0] + "]";
                    str = str + "闲[" + arrOne[1] + "]";
                }
                return str;
                break;
            case "龙虎":
            case "龙虎百家乐":
                let arrTwo;
                if (obj) {
                    arrTwo = obj.split(";");
                    str = str + "龙[" + arrTwo[0] + "]";
                    str = str + "虎[" + arrTwo[1] + "]";
                }
                return str;
                break;
            case "轮盘":
                return obj || '';
                break;
            case "骰宝":
                return obj || '';
                break;
            default:
                return '未知的类型';
                break;

        }
    });
    Vue.filter('formatConnectAdd', function (v, props) {
        let item = v || {};
        let str = props.toString() || "";
        let list = str.split(",");
        let sum = 0;
        for (let k in list) {
            let num = isNaN(parseInt(item[list[k]])) ? 0 : parseInt(item[list[k]]);
            sum = sum + num;
        }
        return (sum / 100).toFixed(2);
    });
    Vue.filter('formatArray', function (v, separators) {
        let separte = separators || " ";
        let arr = v || [];
        let jsonval = "";
        if (arr.length > 0) {
            // for (let k in arr) {
            //  if (arr[k]) {
            //      jsonval = jsonval + arr[k].toString() + separte;
            //  }
            // }
            jsonval = arr.join(separte);
        }
        return jsonval;
    })
    Vue.filter('formatConnectLottery', function (v, props, lotteryType) {
        let str = props || "";
        let list = str.split(",");
        let conval = "";
        if (list.length > 0 && lotteryType) {
            conval = (v[list[0]] || "") + "-" + (v[list[1]] || "");
        } else {
            conval = v[list[1]] || "";
        }
        return conval;
    })
    Vue.filter('formatJsonArr', function (v, arr) {
        let str = v || "";
        let list = str.split(",");
        let jsonval = "";
        if (v && arr) {
            for (let k in arr) {
                for (let j in list) {
                    if (arr[k]['val'] == list[j]) {
                        jsonval = jsonval + arr[k]['lab'] + " ";
                    }
                }
            }
        }
        return jsonval;
    });
    Vue.filter('formatSubtract', function (v, props) {
        let item = v || {};
        let propList = props.split(",");
        let result = 0;
        if (propList.length > 0) {
            result = item[propList[0]];
            for (let k = 1; k <= propList.length; k++) {
                let num = isNaN(parseInt(item[propList[k]])) ? 0 : parseInt(item[propList[k]]);
                result = result - num;
            }
        }
        return (result / 100).toFixed(2);
    })
    Vue.filter('formatConnect', function (v, arr, delimiter, types, dateType) {
        let item = v || {};
        let str = arr || "";
        let contVal = "";
        let list = str.split(",");

        for (let k in list) {
            let num = 0;
            if (list[k] && item[list[k]] != "null" && item[list[k]] != undefined) {
                if (/divisionMoney/.test(types)) { ///divisionMoney/.test(type)
                    num = FORMATMONEY(item[list[k]]);
                } else {
                    num = item[list[k]];
                }
                if (delimiter) {
                    contVal = contVal + num + " " + delimiter + " ";
                } else {
                    contVal = contVal + num;
                }
            }
        }
        contVal = contVal.toString();
        if (delimiter) {
            return contVal.substring(0, contVal.length - 3);
        } else {
            return contVal;
        }
    });
    Vue.filter('formatConnectTwo', function (v, arr, delimiter, types) {
        let item = v || {};
        let str = arr || "";
        let contVal = "";
        let list = str.split(",");
        if (list.length === 2) {
            if (delimiter) {
                contVal = (item[list[0]] || '') + " " + delimiter + " " + FORMATMONEY(item[list[1]]);
                return contVal;
            } else {
                contVal = (item[list[0]] || '') + " " + FORMATMONEY(item[list[1]]);
                return contVal;
            }
        } else {
            return "";
        }
    });
    Vue.filter('formatMoneyDelimiter', function (v, delimiter) {
        let st = v || "";
        let list = [];
        let str = "";
        if (delimiter) {
            list = st.split(delimiter);
        } else {
            list = st.split(",");
        }
        if (list.length) {
            for (let k in list) {
                if (delimiter) {
                    str = str + FORMATMONEY(list[k]) + " " + delimiter + " ";
                } else {
                    str = str + list[k];
                }
            }
        }
        return delimiter ? str.substring(0, str.length - 3) : str;
    })
    Vue.filter('formatCheck', function (v) {
        if (parseInt(v) === 1) {
            return true;
        } else {
            return false;
        }

    });
    Vue.filter('formatContentDate', function (v, props, delimiter) {
        let val = v || '';
        let str = props || '';
        let list = str.split(",");
        let strObj = "";
        for (let k in list) {
            if (val[list[k]]) {
                strObj = strObj + (delimiter ? (' ' + delimiter + ' ') : ' ') + val[list[k]];
            }
        }
        return delimiter ? strObj.substring(0, strObj.length - 3) : strObj;
    });
    Vue.filter('formatObject', function (v, prop) {
        let props = prop || "";
        let list = props.split(",");
        let str = "";
        if (list.length && list.length >= 2) {

            if (v[list[0]]) {
                for (let i = 1; i < list.length; i++) {

                    str += v[list[0]][list[i]] + " "

                }
                return str
            }

        } else {

            return v[prop];
        }
    });
    // 过滤联合状态
    Vue.filter('formatAllState', function (v, prop, key, truelabel, falselabel) {
        if (v[prop]) {
            let patt = new RegExp(key);
            if (patt.test(v[prop])) {
                return truelabel || '';
            } else {
                return falselabel || '';
            }
        }
    });
    //  香港六合彩开奖结果
    Vue.filter('formatLotteryCustom', function (v, url) {
        if (v && /lottery_id=38/.test(url)) {
            let list = v.split(","), temp = '', num = 0;
            if (list.length > 0) {
                for (let i = 0; i < list.length; i++) {
                    num++;
                    if (num === list.length) {
                        temp = temp + ' +' + list[i];
                    } else {
                        temp = temp + list[i] + ',';
                    }

                }
            }
            return temp;
        } else {
            return v;
        }
    })
    Vue.filter("formatDate", function (v, format) {
        if (!v || v === '0' || v === '0000-00-00 00:00:00') {
            return "";
        }
        if (v.toString().length == 10 && !isNaN(v)) {
            v = parseInt(v) * 1000;
        }
        let t = new Date(v);
        let tf = function (i) {
            return (i < 10 ? '0' : '') + i
        };
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
            switch (a) {
                case 'yyyy':
                    return tf(t.getFullYear());
                    break;
                case 'MM':
                    return tf(t.getMonth() + 1);
                    break;
                case 'mm':
                    return tf(t.getMinutes());
                    break;
                case 'dd':
                    return tf(t.getDate());
                    break;
                case 'HH':
                    return tf(t.getHours());
                    break;
                case 'ss':
                    return tf(t.getSeconds());
                    break;
            }
        })

    })
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
                gridData: [],
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
                //分页相关
                //总页数
                total: 0,
                //一页多少条
                pageSize: 10,
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
                    {"label": "30秒", "value": "30"},
                    {"label": "60秒", "value": "60"},
                    {"label": "120秒", "value": "120"},
                    {"label": "180秒", "value": "180"}
                ],
                times: "30",
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
                btnLinkGroup: {}
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
                default: true
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
                    return [10, 20, 50, 100,200]
                }
            }
            //表格自适应滚动条
//            scorAuto:{
//              type:Boolean,
//              default: false
//            }
        },
        components: {
            confirm: confirm
        },
        methods: {
            //初始化数据
            Datainit() {
                //表格初始化
                this.loading = true;
                let _this = this;
                this.allChecked = false;
                this.checkList = [];
                this.rowsList = {};
                this.checkSum = 0;
                this.listOjb = null;
                this.levelNUmRow = 1;
                this.levelNum = 1;
                //总条数
                let total = this.total;
                //每次页条数
                let pageSize = this.pageSize;
                //总页数
                let pageCount = this.pageCount;
                //当前页
                let currentPage = this.currentPage;
                // 其它数据
                this.otherData = {};
                let otherData = this.otherData;
                let colKey = this.sumKey;
                _this.tableDataList.splice(0, _this.tableDataList.length);
                _this.columnList.splice(0, _this.columnList.length);
                let columnList = _this.columnList || [];
                this.baseUrl = this.tableUrl;
                if ((this.baseUrl != "") && (this.baseUrl != undefined)) {
                    let query = {};
                    if (this.query && this.query.toString().length > 0) {
                        query = this.query;
                    }
                    if (this.pageSet) {
                        let index = this.baseUrl.indexOf('?');
                        if (index === -1) {
                            this.baseUrl = this.baseUrl + "?page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 10 : pageSize);
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
                                this.baseUrl = this.baseUrl + "&page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 10 : pageSize);
                            }
                            let m = this.baseUrl.indexOf('page_size=');
                            if (m > 0) {
                                this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + (pageSize === 0 ? 10 : pageSize));
                            } else {
                                this.baseUrl = this.baseUrl + "&page_size=10";
                            }
                        }
                    }
                    this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
                        _this.tableDataList = [];
                        let tableDate = res && res.data && res.data.data ? res.data.data : [];
                        if (_this.getData) {
                            let model = res.data || {};
                            for (let k in model) {
                                otherData[k] = model[k];
                            }
                        }
                        let list = res && res.data && res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
                        if (res.data.data.length === undefined) {
                            if (res.data.data.list != undefined && res.data.data.list.length) {
                                list = res.data.data.list || [];
                            }
                        }
                        _this.subTotalBet = {};
                        _this.totalBet = {};
                        if (res.data.attributes) {
                            if (res.data.attributes.subTotalBet) {

                                let obj = res.data.attributes.subTotalBet;
                                for (let k in obj) {
                                    _this.subTotalBet[k] = obj[k];
                                }
                            }
                            if (res.data.attributes.totalBet) {

                                let obj = res.data.attributes.totalBet;
                                for (let k in obj) {
                                    _this.totalBet[k] = obj[k];
                                }
                            }
                            _this.total = res && res.data && res.data.attributes && res.data.attributes.total || 10;
                            _this.pageSize = res && res.data && res.data.attributes && res.data.attributes.size || 10;
                            _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
                            _this.currentPage = parseInt(res.data.attributes.number) ? parseInt(res.data.attributes.number) : 1;
                        }
                        if (list.length && list.length > 0) {
                            for (let i in list) {
                                _this.tableDataList.push(list[i]);
                                let temp = list[i], tempobj = {};
                                for (let m in temp) {
                                    tempobj[m] = temp[m];
                                }
                                _this.tableDataColen.push(tempobj);
                            }
                            _this.initCheckList(list);
                        } else if (tableDate.length && tableDate.length > 0) {
                            let sumNumber = _this.sumNumber;
                            for (let j in tableDate) {
                                _this.tableDataList.push(tableDate[j]);
                                let temp = tableDate[j], tempobj = {};
                                for (let m in temp) {
                                    tempobj[m] = temp[m];
                                }
                                _this.tableDataColen.push(tempobj);
                            }
                            this.initCheckList(tableDate);
                        }
                        _this.tableDataList.prototype.clone = function () {
                            return [].concat(this);
                        }
                        if (_this.getData) {
                            let event = window.event || event;
                            _this.$emit("get-table-data", {
                                "event": event,
                                "item": _this.tableDataList,
                                "allData": otherData
                            });
                        }
                        _this.loading = false;
                    }).catch((e) => {
                        if (_this.getData) {
                            let event = window.event || event;
                            _this.$emit("get-table-data", {
                                "event": event,
                                "item": _this.tableDataList,
                                "allData": otherData
                            });
                        }
                        _this.loading = false;
//                        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
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
                        _this.pageSize = tableDate.page_size ? tableDate.page_size : 10;
                        _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
                        _this.currentPage = tableDate.page ? tableDate.page : 1;
                        for (let i in list) {
                            _this.tableDataList.push(list[i]);
                            let temp = list[i], tempobj = {};
                            for (let m in temp) {
                                tempobj[m] = temp[m];
                            }
                            _this.tableDataColen.push(tempobj);
                        }
                        _this.initCheckList(list);
                    }
                    if (_this.getData) {
                        let event = window.event || event;
                        _this.$emit("get-table-data", {
                            "event": event,
                            "item": _this.tableDataList,
                            "otherData": _this.otherData
                        });
                    }
                }
                if ((this.columnsUrl != "") && (this.columnsUrl != undefined)) {
                    this.$http.get(this.columnsUrl, URLCONFIG).then((res) => {

                        columnList.splice(0, columnList.length);
                        let columns = res && res.data && res.data.columns ? res.data.columns : [];
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
                        //根据
//                        if(columns.length > 10){
//                            _this.tableScroll = true;
//                        }else {
//                            _this.tableScroll = false;
//                        }
                    }).catch((e) => {
                        _this.loading = false;
                        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                    })
                }

            },
            //处理操作公共按钮事件
            doHandle(row, fn, prop, btn) {
                let event = window.event || event;
                this.$emit("do-handle", {
                    "event": event,
                    "row": row,
                    "fn": fn,
                    "page": this.currentPage,
                    "prop": prop,
                    "btn": btn
                });
            },
            //处理表格的按钮的hover展示信息
            doHover(row, fn) {
                let event = window.event || event;
                this.$emit("do-hover", {
                    "event": event,
                    "row": row,
                    "fn": fn,
                    "page": this.currentPage
                });
            },
            //写各状态初始
            initCheckList(arr) {
                for (let i in arr) {
                    this.$set(this.checkList, i, false);
                }
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
                    for (let i in this.tableDataList) {
                        arrs.push(this.tableDataList[i]);
                        rows[i] = this.tableDataList[i];
                    }
                    this.checkSum = this.tableDataList.length;
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
                let event = window.event || event;
                this.$emit("do-operation", {
                    "event": event,
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
                    rows[num] = this.tableDataList[num];
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
                let event = window.event || event;
                this.$emit("do-operation", {
                    "event": event,
                    "rows": arrs,
                    "page": this.currentPage
                });
            },
            //切换每页条数
            doSizePage(v) {
                this.loading = true;
                let total = this.total;
                let pageSize = this.pageSize;
                let pageCount = this.pageCount;
                let page = 0;
                let _this = this
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
                        this.baseUrl = this.baseUrl + "&page_size=" + 10;
                    }
                }
                let otherData = {};
                this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
                    _this.total = res.data.attributes.total || 10;
                    _this.pageSize = res.data.attributes.size || 10;
                    _this.pageCount = Math.ceil(this.total / this.pageSize);
                    _this.currentPage = 1;

                    if (_this.getData) {
                        let model = res.data || {};
                        for (let k in model) {
                            otherData[k] = model[k];
                        }
                    }
                    let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
                    if (tableDate.list) {
                        for (let i in tableDate.list) {
                            _this.tableDataList.push(tableDate.list[i]);
                            let temp = tableDate.list[i], tempobj = {};
                            for (let m in temp) {
                                tempobj[m] = temp[m];
                            }
                            _this.tableDataColen.push(tempobj);
                        }
                    } else {
                        for (let i in tableDate) {
                            _this.tableDataList.push(tableDate[i]);
                            let temp = tableDate[i], tempobj = {};
                            for (let m in temp) {
                                tempobj[m] = temp[m];
                            }
                            _this.tableDataColen.push(tempobj);
                        }
                    }
                    if (_this.getData) {
                        let event = window.event || event;
                        _this.$emit("get-table-data", {
                            "event": event,
                            "item": _this.tableDataList,
                            "allData": otherData
                        });
                    }
                    _this.loading = false;
                }).catch((e) => {
                    _this.loading = false;
                    if (_this.getData) {
                        let event = window.event || event;
                        _this.$emit("get-table-data", {
                            "event": event,
                            "item": _this.tableDataList,
                            "allData": otherData
                        });
                    }
                    _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                })

            },
            //切换页数
            doCurrentChange(v) {
                this.loading = true;
                let total = this.total;
                let pageSize = this.pageSize;
                let pageCount = this.pageCount;
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
                        this.baseUrl = this.baseUrl + "&page_size=" + 10;
                    }
                }
                this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
                    _this.total = res.data.attributes.total || 10;
                    _this.pageSize = res.data.attributes.size || 10;
                    _this.pageCount = Math.ceil(this.total / this.pageSize);
                    _this.currentPage = res.data.attributes.number || 1;
                    let otherData = {};
                    if (_this.getData) {
                        let model = res.data || {};
                        for (let k in model) {
                            otherData[k] = model[k];
                        }
                    }
                    let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
                    if (tableDate.list) {
                        for (let i in tableDate.list) {
                            _this.tableDataList.push(tableDate.list[i]);
                            let temp = tableDate.list[i], tempobj = {};
                            for (let m in temp) {
                                tempobj[m] = temp[m];
                            }
                            _this.tableDataColen.push(tempobj);
                        }
                    } else {
                        for (let i in tableDate) {
                            _this.tableDataList.push(tableDate[i]);
                            let temp = tableDate[i], tempobj = {};
                            for (let m in temp) {
                                tempobj[m] = temp[m];
                            }
                            _this.tableDataColen.push(tempobj);
                        }
                    }
                    if (_this.getData) {
                        let event = window.event || event;
                        _this.$emit("get-table-data", {
                            "event": event,
                            "item": _this.tableDataList,
                            "allData": otherData
                        });
                    }
                    _this.loading = false;
                }).catch((e) => {
                    _this.loading = false;
                    if (_this.getData) {
                        let event = window.event || event;
                        _this.$emit("get-table-data", {
                            "event": event,
                            "item": _this.tableDataList,
                            "allData": otherData
                        });
                    }
                    _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                })
            },
            //批量操作
            doOperation(fn) {
                let model = this.rowsList;
                let arrs = [];
                for (let k in model) {
                    arrs.push(model[k]);
                }
                let event = window.event || event;
                this.$emit("do-operation", {
                    "event": event,
                    "fn": fn,
                    "rows": arrs,
                    "page": this.currentPage
                });
            },
            // 连接拼接单击事件
            showLink(fn, row) {
                let event = window.event || event;
                this.$emit("do-handle", {
                    "event": event,
                    "row": row,
                    "fn": fn,
                    "page": this.currentPage
                });
            },
            updateFormData() {
                if (this.tableData.list.length > 0) {
                    this.Datainit();
                }
            },
//            数据变化事件
            changes(index, row, keys) {
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
                    if (this.levelNUmRow % 2 === 0) {
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
                    "dataList": this.tableDataList
                });
            },
            getTableWidth() {

//                if (this.fullWidth) {
//                    let sum = 0;
//                    this.$http.get(this.columnsUrl, URLCONFIG).then((res) => {
//                        if (res.data.columns) {
//                            let list = res.data.columns;
//                            for (let k in list) {
//                                if (list[k].width) {
//                                    sum = sum + parseInt(list[k].width);
//                                }
//                            }
//                            sum = sum > 1130 ? sum : 1130;
//                            if(localStorage.menu_type =='left'){
//                                if ($(window).width() > 1200 && this.automation == false ) {
//                                    $('.tablesOverall').css('width', ($(window).width() - 136)+'px').addClass('socr').find('table').css('min-width', sum + 'px');
//                                }
//                                $(window).resize(function(){
//                                    if ($(window).width() > 1200 && this.automation == false) {
//                                        $('.tablesOverall').css('width',($(window).width() - 136)+'px').addClass('socr').find('table').css('min-width', sum + 'px');
//                                    }
//                                })
//                            }else {
//                                if ($(window).width() > 1200 && this.automation == false ) {
//                                    $('.tablesOverall').css('width', ($(window).width()-136)+'px').addClass('socr').find('table').css('min-width', sum + 'px');
//                                }
//                                $(window).resize(function(){
//                                    if ($(window).width() > 1200 && this.automation == false) {
//                                        $('.tablesOverall').css('width', ($(window).width() - 136)+"px").addClass('socr').find('table').css('min-width', sum + 'px');
//                                    }
//                                })
//                            }
//                        }
//                    })
//                }
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
                let event = window.event || event;
                this.$emit('save-all-data', {
                    "event": event,
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
                let event = window.event || event;
                if (obj && obj.fn) {
                    switch (obj.fn) {
                        case 'updateLevel':
                            let model = this.rowsList;
                            let arrs = [];
                            for (let k in model) {
                                arrs.push(model[k]);
                            }
                            _this.$emit('all_select_data', {
                                "event": event,
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
                let event = window.event || event;
                this.$emit('all_switch_data', {
                    "event": event,
                    "rows": temp,
                    "lock": value,
                    "level": this.levelSelectvalue,
                })
//                this.lockNum ++;
//                let str = '';
//                if(value){
//                    str = this.LANG['确定锁定所选层级吗？'] || '确定锁定所选层级吗';
//                }else{
//                    str = this.LANG['确定取消锁定所选层级吗？'] || '确定取消锁定所选层级吗';
//                }
//                if(this.lockNum % 2 === 0){
//                    this.confirmConfig.state = true;
//                    this.confirmConfig.msg = str;
//                    this.confirmConfig.fn = "lockLevel";
//                }
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
            // 算表格宽度
            autoTable(sum) {
//                let _this = this;
//                let tableW = $('.tablesOverall'), top_contRight = $('.top_contRight'), oWin = window.innerWidth;
//                sum = sum > 1130 ? sum : 1130;
//                let menu_type = localStorage.menu_type == 'top' ? localStorage.menu_type : 'left';
                // automation 是否开关表格自适应 true 是关闭
//                console.log(_this.automation);
//                if (_this.automation == false) {
//                    if (menu_type == 'left') {
//                        $("#table_card,#tables").removeClass('w100_impor');
//                        tableW.parents('.box-card').css({'width': (oWin - 100) + 'px', 'min-width': '1170px'});
//                        tableW.css({
//                            'width': (oWin - 136) + 'px',
//                            'min-width': '1130px'
//                        }).addClass('socr').find('table').css('min-width', sum < 1130 ? 1130 : sum + 'px');
//                    } else if (menu_type == 'top') {
//                        $("#table_card,#tables").removeClass('w100_impor');
//                        top_contRight.css('width', (oWin - 64) + 'px')
//                        tableW.css({
//                            'width': (oWin - 64) + 'px',
//                            'min-width': '1170px'
//                        }).addClass('socr').find('table').css('min-width', sum < 1200 ? 1200 : sum + 'px');
//                    }
//                } else {
//                    $("#table_card,#tables").addClass('w100_impor');
//                    tableW.removeClass('socr');
//                    tableW.parents('.box-card').css({'width': "100%"});
//                }
            },
            doRefresh() {
                this.Datainit();
            }
        },
        watch: {
            '$route'() {//监听路由改变
//                this.autoTable();
            },
//            'tableData.list': 'updateFormData',
            tableUrl: function (newQuestion) {
                this.Datainit();
            },
            tableDataList() {
                this.getTableWidth();
            },
            //根据是否更新，更新数据
            updated: function (newval) {
                if (newval) {
                    this.Datainit();
                }
            },
            formType: function (newval) {
                if (newval == "add" || newval == "edit" || newval == "delete") {
                    this.Datainit();
                }
            },
            opts: function (newval) {
                if (newval) {
                    this.Datainit();
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
            this.Datainit();
        },
        mounted() {
            let sum = 0, _this = this;
            this.$nextTick(() => {
                if (this.columnsUrl) {
                    this.$http.get(this.columnsUrl, URLCONFIG).then((res) => {
                        if (res.data.columns) {
                            let list = res.data.columns;
                            for (let k in list) {
                                if (list[k].width) {
                                    sum = sum + parseInt(list[k].width);
                                }
                            }
                        }
                    })
                    this.autoTable(sum);
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
            window.PAGEREF = null;
            if (parseInt(this.times) > 0 && (this.$route.path === '/onLineReceipts' || this.$route.path === '/offlineReceipts' || this.$route.path === '/memberGetOut' || this.$route.path === '/payment' || this.$route.path === '/noteManagement')) {
                let times = parseInt(this.times) > 0 ? parseInt(this.times) : 0;
                if (times >= 30) {
                    _this.createTimes(parseInt(times));
                }
            } else {
                this.Datainit();
            }
        },
        deactivated() {
            window.clearInterval(window.PAGEREF);
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
        /*表格*/
        .el-table .cell, .el-table th > div {
            padding-left: 4px;
            padding-right: 0
        }

        .col2 {
            background-color: #FAFAFA
        }

        .el-table .cell {
            max-width: 500px
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