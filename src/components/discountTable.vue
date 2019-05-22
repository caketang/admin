<template>
    <div id="tableSingle" v-loading="loading" ref="tableSingle">
        <el-col class="tRight mb20" v-if="showExport">
            {{LANG['刷新'] || '刷新'}}：
            <el-select v-model="times" placeholder="请选择" size="small" class="intW mr10">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" size="small" @click="exportData">{{LANG['导出'] || '导出'}} </el-button>
        </el-col>
        <el-col v-if="checkSum && checkList.length" class="ft14 mb10">
            <label for="" class="fl mr10">{{LANG['您选择了'] || '您选择了'}}
                <span class="selecttext">{{checkSum}}</span>{{LANG['条数据'] || '条数据'}} </label>
            <div v-if="tabOperation !=undefined" class="btngroup">
                <el-button size="small" v-for="(opt,index) in tabOperation" :key="index"
                           @click="doOperation(opt.fn)">{{LANG[opt.label] || opt.label}}
                </el-button>
            </div>
        </el-col>
        <el-col v-if="saveData" class="tRight mb10">
            <el-button type="primary" size="small" @click="dataSave">{{LANG['保存数据'] || '保存数据'}}</el-button>
        </el-col>
        <div id="tables" class="tablesOverall">
            <table cellspacing="0" cellpadding="0" border="1" class="el-table w100 el-table--border mt10">
                <tr>
                    <th v-if="tableCheck && tableDataList.length">
                        <div class="cell">
                            <el-checkbox v-model="allChecked" @change="allchecked"></el-checkbox>
                        </div>
                    </th>
                    <th v-if="tableIndex && tableDataList.length">
                        <div class="cell">{{LANG['序号'] || '序号'}}</div>
                    </th>
                    <th class="is-leaf" v-for="(col,index) in columnList" :key="index" v-if="col.disabled == true">
                        <div class="cell">{{col.label}}</div>
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
                        :style="{'min-Width': (col.width +'px')}"
                        v-if="col.disabled == true">
                        <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                             v-if="col.type == 'date'">
                            <span>{{item[col.prop] | formatDate('yyyy-MM-dd HH:mm:ss') }}</span>
                        </div>
                        <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                             v-if="col.type == 'object'">
                            <span>{{item | formatObject(col.prop)}}</span>
                        </div>
                        <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                             v-if="col.type == 'moneyDelimiter'">
                            <span>{{item[col.prop] | formatMoneyDelimiter(col.delimiter)}}</span>
                        </div>
                        <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                             v-if="!col.type && !col.filters">
                            <span v-if="col.prop == 'admin_uid'">{{LANG['管理员'] || '管理员'}}</span>
                            <span v-if="col.prop != 'admin_uid'">{{item[col.prop]}}</span>
                            <span class="defutFont"
                                  v-if="item['t_default'] == '0'">[ {{LANG['系统默认'] || '系统默认'}} ]</span>
                        </div>
                        <div class="cell" v-if="col.type && col.type == 'connectAdd'">
                            <span>{{ item | formatConnectAdd(col.prop)}}</span>
                        </div>
                        <div class="cell" v-if="col.type && col.type == 'connectString'">
                            <p>{{LANG['户名'] || '户名'}}：{{item[col.prop.split(",")[0]] || ""}}</p>
                            <p>{{LANG['账号'] || '账号'}}：{{item[col.prop.split(",")[1]] || ""}}</p>
                            <p>{{LANG['开户行'] || '开户行'}}：{{item[col.prop.split(",")[2]] || ""}}</p>
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
                            <span>{{item[col.prop] | formatArray}}</span>
                        </div>
                        <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                             v-if="col.type == 'json' && col.arr">
                            <span>{{item[col.prop] | formatJsonArr(col.arr)}}</span>
                        </div>
                        <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                             v-if="col.filterByWord">
                            <div v-for="item1 in item[col.filterByWord]">
                                <div v-if="col.filterCondition.split(',').length > 1">
                                    <span
                                        v-if="col[col.filterCondition.split(',')[0]] == item1[col.filterCondition.split(',')[0]] && col[col.filterCondition.split(',')[1]] == item1[col.filterCondition.split(',')[1]]">{{item1[col.prop]}}</span>
                                </div>
                                <div v-else>
                                    <span
                                        v-if="col[col.filterCondition.split(',')[0]] == item1[col.filterCondition.split(',')[0]]">{{item1[col.prop]}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                             v-if="col.type == 'connect'">
                            <span
                                :class="{fontWeight:col['fontweight']}">{{item | formatConnect(col.prop, col.delimiter, col.type)}}</span>
                        </div>
                        <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                             v-if="col.type == 'connectLottery'">
                            <span>{{item | formatConnectLottery(col.prop, lotteryType)}}</span>
                        </div>
                        <div v-if="col.type == 'connect,divisionMoney'" class="cell"
                             :class="{tCent:(col.class != undefined)?true:false}">
                            <span
                                :class="{fontWeight:col['fontweight']}">{{item | formatConnect(col.prop, col.delimiter, col.type)}}</span>
                        </div>
                        <div v-if="col.type == 'link'" class="cell"
                             :class="{tCent:(col.class != undefined)?true:false}">
                            <el-button size="small" v-if="item[col.prop]" @click="doHandle(item,col.fn)" type="text"
                                       v-text="item[col.prop]"></el-button>
                            <span v-if="!item[col.prop]">{{item[col.prop]}}</span>
                        </div>
                        <div v-if="col.type == 'linkDivisionMoney'" class="cell"
                             :class="{tCent:(col.class != undefined)?true:false}">
                            <el-button size="small" v-if="item[col.prop]" @click="doHandle(item,col.fn)" type="text"
                            >{{item[col.prop] | formatMoney}}
                            </el-button>
                            <span v-if="!item[col.prop]">{{item[col.prop]}}</span>
                        </div>
                        <div>

                        </div>
                        <div v-if="col.type == 'img'" class="cell" :class="{tCent:(col.class != undefined)?true:false}">
                            <img :src="item[col.prop]" alt="item[col.prop]" height="20px"
                                 width="auto" v-if="item[col.prop].toString().length>10 && col.imgtype !== 'bank'">
                            <img :src="'/static/img/bank/'+item['code']+'.png'" alt="item[col.prop]" height="20px"
                                 width="auto" v-if="col.imgtype == 'bank'" style="vertical-align: middle;"/>
                            <!--<img :src="'/static/img/promotion/01.gif'" alt="item[col.prop]" height="20px" width="auto"-->
                            <!--v-if="col.imgtype == 'promotion'" style="vertical-align: middle;"/>-->
                            <span v-if="col.imgtype == 'bank'">{{item['code']}}</span>
                            <span v-if="item[col.prop].toString().length<10">{{LANG['暂无图片'] || '暂无图片'}}</span>
                        </div>
                        <div
                            v-if="col.type == 'button' && ((item['t_default'] == undefined && col.filters == undefined) || item['t_default'] == '1')"
                            class="cell"
                            :class="{tCent:(col.class != undefined)?true:false}">
                            <div v-for="btn in col.btnGroup" style="float:left;margin-left:5px;">
                                <el-button size="small" v-if="btn.prop == undefined && !item[btn.valueKey]"
                                           @click="doHandle(item,btn.fn)"
                                           :type="btn.btnType" v-text="btn.label"></el-button>
                                <el-button size="small"
                                           v-if="btn.prop && item[btn.prop] == btn.val && (btn.equal == undefined) && !item[btn.valueKey]"
                                           @click="doHandle(item,btn.fn)" :type="btn.btnType"
                                           v-text="btn.label"></el-button>
                                <el-button size="small"
                                           v-if="btn.prop && item[btn.prop] != btn.val && (btn.equal == false)  && btn.valNum == 1 && !item[btn.valueKey]"
                                           @click="doHandle(item,btn.fn)" :type="btn.btnType"
                                           v-text="btn.label"></el-button>
                                <el-button size="small"
                                           v-if="btn.prop && (item[btn.prop] != btn.val && item[btn.prop] != btn.val1) && (btn.equal == false)  && btn.valNum == 2 && !item[btn.valueKey]"
                                           @click="doHandle(item,btn.fn)" :type="btn.btnType"
                                           v-text="btn.label"></el-button>
                                <span v-if="btn.valueKey && item[btn.valueKey]">{{item[btn.valueKey]}}</span>
                            </div>
                        </div>
                        <div v-if="col.type == 'button' && item['t_default'] == '0'" class="cell"
                             :class="{tCent:(col.class != undefined)?true:false}">
                            <div v-for="btn in col.btnGroup" style="float:left;margin-left:5px;">
                                <el-button size="small" v-if="btn.prop == undefined && btn.label == '复制新增'"
                                           @click="doHandle(item,btn.fn)"
                                           :type="btn.btnType" v-text="btn.label"></el-button>
                            </div>
                        </div>
                        <div v-if="col.type == 'button' && col.filters" class="cell">
                            <div v-for="btn in col.btnGroup" style="float:left;margin-left:5px;">
                                <span v-if="btn.filters == undefined ">
                                    <el-button size="small" @click="doHandle(item,btn.fn)" :type="btn.btnType"
                                               v-text="btn.label"></el-button>
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
                        <div class="cell" v-if="col.filters != undefined && col.type != 'regular'"
                             :class="{sucess_text: (item[col.prop] == 1 || item[col.prop] == true || item[col.prop] == 'enabled'),info_text:(item[col.prop] == 2),danger_text:(item[col.prop] == 0 || item[col.prop] == false || item[col.prop] == null)}">
                            {{item[col.prop] | formatSex(col.filters) }}
                        </div>
                        <div class="cell" v-if="col.type == 'reduce'">
                            <span
                                class="sucess_text">{{(isNaN(parseInt(item[col.prop[0]])) ? 0 : parseInt(item[col.prop[0]])) - (isNaN(parseInt(item[col.prop[1]])) ? 0 : parseInt(item[col.prop[1]]))}}</span>
                        </div>
                        <div class="cell" v-if="col.type == 'divisionMoney'">
                            <span>{{item[col.prop] | formatMoney}}</span>
                        </div>
                        <div class="cell" v-if="col.type == 'subtract'">
                            <span>{{item | formatSubtract(col.prop)}}</span>
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
                             v-if="col.type == 'switch' && col.show">
                            <el-switch v-model="item[col.prop]" @change="changes(k,item,col.prop)"
                                       :on-value="col.onValue || '1'" :off-value="col.offValue || '0'"
                                       v-if="item[col.show].toString() === '1'"></el-switch>
                        </div>
                        <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                             v-if="col.type == 'switch' && col.show === undefined">
                            <el-switch v-model="item[col.prop]" @change="changes(k,item,col.prop)"
                                       :on-value="col.onValue || '1'" :off-value="col.offValue || '0'"></el-switch>
                        </div>
                    </td>
                </tr>
                <!--表格总合-->
                <tr v-if="sumGame && subTotalBet">
                    <td v-if="columnList.length === 8" colspan="3">
                        <div class="cell tCent">{{LANG['小计'] || '小计'}}</div>
                    </td>
                    <td v-else>
                        <div class="cell">{{LANG['小计'] || '小计'}}</div>
                    </td>
                    <td>
                        <div class="cell">{{subTotalBet.bet_times }}</div>
                    </td>
                    <td>
                        <div class="cell">{{subTotalBet.bet_money}}</div>
                    </td>
                    <td>
                        <div class="cell">{{subTotalBet.valid_bet}}</div>
                    </td>
                    <td>
                        <div class="cell">{{subTotalBet.send_prize}}</div>
                    </td>
                    <td>
                        <div class="cell">{{subTotalBet.lose_earn}}</div>
                    </td>
                </tr>
                <tr v-if="sumGame && totalBet">
                    <td v-if="columnList.length === 8" colspan="3">
                        <div class="cell tCent">{{LANG['合计'] || '合计'}}</div>
                    </td>
                    <td v-else>
                        <div class="cell">{{LANG['合计'] || '合计'}}</div>
                    </td>
                    <td>
                        <div class="cell">{{totalBet.bet_times }}</div>
                    </td>
                    <td>
                        <div class="cell">{{totalBet.bet_money}}</div>
                    </td>
                    <td>
                        <div class="cell">{{totalBet.valid_bet}}</div>
                    </td>
                    <td>
                        <div class="cell">{{totalBet.send_prize}}</div>
                    </td>
                    <td>
                        <div class="cell">{{totalBet.lose_earn}}</div>
                    </td>
                </tr>
            </table>
            <el-col v-if="tableDataList.length == 0"
                    style="line-height: 100px;text-align: center;background-color: #ffffff;">
                <div class="dell">{{LANG['暂无数据'] || '暂无数据'}}</div>
            </el-col>
        </div>
        <!--分页-->
        <el-col :span="24" class="toolbar mt20 pRight20" v-if="pageSet && tableDataList.length >0 "
                style="position:relative;text-align: right;">
            <el-pagination :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="total" style="float:right" @size-change="doSizePage"
                           @current-change="doCurrentChange">
            </el-pagination>
        </el-col>
        <!-- {{otherData}} -->
    </div>
</template>
<script type="text/ecmascript-6">
    //列配置
    import columnSet from './columnSet.vue'
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
    })
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
    Vue.filter('formatArray', function (v) {
        let arr = v || [];
        let jsonval = "";
        if (arr.length > 0) {
            for (let k in arr) {
                if (arr[k]) {
                    jsonval = jsonval + arr[k].toString() + " ";
                }
            }
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
    Vue.filter('formatConnect', function (v, arr, delimiter, types) {
        let item = v || {};
        let str = arr || "";
        let contVal = "";
        let list = str.split(",");

        for (let k in list) {
            let num = 0;
            if (list[k] && item[list[k]] != "null" && item[list[k]] != "" && item[list[k]] != null) {
                if (/divisionMoney/.test(types)) { ///divisionMoney/.test(type)
                    num = (item[list[k]] / 100).toFixed(2);
                } else {
                    num = item[list[k]];
                }
                if (delimiter && num) {
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
    Vue.filter("formatDate", function (v, format) {
        if (!v || v === '0') {
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
//        computed:{
//          scrollClass:function () {
//              return {
//                  'scrollX':this.tableScroll
//              }
//          },
//          tableWidth:function () {
//              let width = document.body.clientWidth;
//              return this.tableScroll?'width:' + (width -270) + 'px':''
//          }
//        },
        data() {
            return {
                LANG,
                //列配置
                columnConfig: [],
                //复制列参数
                columnList: [],
                //表格列表数据
                tableDataList: [],
                gridData: [],
                // 合计相关
                subTotalBet: {
                    bet_money: 0,
                    bet_times: 0,
                    lose_earn: 0,
                    send_prize: 0,
                    valid_bet: 0
                },
                totalBet: {
                    bet_money: 0,
                    bet_times: 0,
                    lose_earn: 0,
                    send_prize: 0,
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
                times: 30
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
            //表格自适应滚动条
//            scorAuto:{
//            	type:Boolean,
//	            default: false
//            }
        },
        components: {},
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
                //总条数
                let total = this.total;
                //每次页条数
                let pageSize = this.pageSize;
                //总页数
                let pageCount = this.pageCount;
                //当前页
                let currentPage = this.currentPage;
                // 其它数据
                let otherData = this.otherData = {};
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
                    this.$.autoAjax('get', this.baseUrl, '', {
                        ok: (res) => {
                            _this.tableDataList = [];
                            let tableDate = res && res.data && res.data ? res.data : [];
                            if (_this.getData) {
                                let model = res.data || {};
                                for (let k in model) {
                                    otherData[k] = model[k];
                                }
                            }
                            let list = res && res.data && res.tableDemoDate || res.data || res.data.list || res.data.data || res.data.deposit || [];
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
                                _this.total = res && res.data && res.attributes && res.attributes.total || 10;
                                _this.pageSize = res && res.data && res.attributes && res.attributes.size || 10;
                                _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
                                _this.currentPage = parseInt(res.attributes.number) ? parseInt(res.attributes.number) : 1;
                            }
                            if (list.length && list.length > 0) {
                                for (let i in list) {
                                    _this.tableDataList.push(list[i]);
                                }
                                _this.initCheckList(list);
                            } else if (tableDate.length && tableDate.length > 0) {
                                let sumNumber = _this.sumNumber;
                                for (let j in tableDate) {
                                    _this.tableDataList.push(tableDate[j]);
                                }
                                this.initCheckList(tableDate);
                            }
                            if (_this.getData) {
                                _this.$emit("get-table-data", {
                                    "event": event,
                                    "item": _this.tableDataList,
                                    "allData": _this.otherData
                                });
                            }
                            _this.loading = false;
                        },
                        p: () => {
                        },
                        error: e => {
                            _this.loading = false;
                        }
                    })
//                     this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
//                         _this.tableDataList = [];
//                         let tableDate = res && res.data && res.data.data ? res.data.data : [];
//                         if (_this.getData) {
//                             let model = res.data || {};
//                             for (let k in model) {
//                                 otherData[k] = model[k];
//                             }
//                         }
//                         let list = res && res.data && res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
//                         if (res.data.data.length === undefined) {
//                             if (res.data.data.list != undefined && res.data.data.list.length) {
//                                 list = res.data.data.list || [];
//                             }
//                         }
//                         _this.subTotalBet = {};
//                         _this.totalBet = {};
//                         if (res.data.attributes) {
//                             if (res.data.attributes.subTotalBet) {
//
//                                 let obj = res.data.attributes.subTotalBet;
//                                 for (let k in obj) {
//                                     _this.subTotalBet[k] = obj[k];
//                                 }
//                             }
//                             if (res.data.attributes.totalBet) {
//
//                                 let obj = res.data.attributes.totalBet;
//                                 for (let k in obj) {
//                                     _this.totalBet[k] = obj[k];
//                                 }
//                             }
//                             _this.total = res && res.data && res.data.attributes && res.data.attributes.total || 10;
//                             _this.pageSize = res && res.data && res.data.attributes && res.data.attributes.size || 10;
//                             _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
//                             _this.currentPage = parseInt(res.data.attributes.number) ? parseInt(res.data.attributes.number) : 1;
//                         }
//                         if (list.length && list.length > 0) {
//                             for (let i in list) {
//                                 _this.tableDataList.push(list[i]);
//                             }
//                             _this.initCheckList(list);
//                         } else if (tableDate.length && tableDate.length > 0) {
//                             let sumNumber = _this.sumNumber;
//                             for (let j in tableDate) {
//                                 _this.tableDataList.push(tableDate[j]);
//                             }
//                             this.initCheckList(tableDate);
//                         }
//                         if (_this.getData) {
//                             _this.$emit("get-table-data", {
//                                 "event": event,
//                                 "item": _this.tableDataList,
//                                 "allData": _this.otherData
//                             });
//                         }
//                         _this.loading = false;
//                     }).catch((e) => {
//                         _this.loading = false;
// //                        console.log(e);
// //                        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
//                     })
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
                        }
                        _this.initCheckList(list);
                    }
                    if (_this.getData) {
                        _this.$emit("get-table-data", {
                            "event": event,
                            "item": _this.tableDataList,
                            "otherData": _this.otherData
                        });
                    }
                }
                if ((this.columnsUrl != "") && (this.columnsUrl != undefined)) {
                    this.$.get(this.columnsUrl, (res) => {
                        columnList.splice(0, columnList.length);
                        let columns = res && res.data && res.columns ? res.columns : [];
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
                            }
                        }
                    })
//                    this.$.autoAjax('get',this.columnsUrl, '', {
//                        ok: (res) => {
//
//                        },
//                        p: () => {
//                        },
//                        error: e => {
//                            _this.loading = false;
//                            _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
//                        }
//                    })
//                     this.$http.get(this.columnsUrl, URLCONFIG).then((res) => {
//                         columnList.splice(0, columnList.length);
//                         let columns = res && res.data && res.data.columns ? res.data.columns : [];
//                         if(this.assembleColumns){
//                             let index = this.assembleColumns.index;
//                             let origin = columns.slice(0,index);
//                             let end = columns.slice(index,columns.length);
//                             let columsObj = {
//                                 orignCol:origin,
//                                 endCol:end,
//                                 connectCol:this.assembleColumns.data
//                             };
//                             columns = CONNECTCOLUMS(columsObj,100);
//                         }
//                         if (columns.length > 0) {
//                             for (let i in columns) {
//                                 columnList.push(columns[i])
//                                 if (columns[i].disabled == true) {
//                                     _this.columnConfig.push(columns[i].prop);
//                                 }
//                             }
//                         }
//                         //根据
// //                        if(columns.length > 10){
// //                            _this.tableScroll = true;
// //                        }else {
// //                            _this.tableScroll = false;
// //                        }
//                     }).catch((e) => {
// //                        console.log(e)
//                         _this.loading = false;
//                         _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
//                     })
                }

            },
            //处理操作公共按钮事件
            doHandle(row, fn) {
                this.$emit("do-handle", {
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

                this.$.autoAjax('get', this.baseUrl, '', {
                    ok: (res) => {
                        _this.total = res.attributes.total || 10;
                        _this.pageSize = res.attributes.size || 10;
                        _this.pageCount = Math.ceil(this.total / this.pageSize);
                        _this.currentPage = 1;
                        let tableDate = res.tableDemoDate || res.data || res.data.list || res.data.data || res.data.deposit || [];
                        if (tableDate.list) {
                            for (let i in tableDate.list) {
                                _this.tableDataList.push(tableDate.list[i])
                            }
                        } else {
                            for (let i in tableDate) {
                                _this.tableDataList.push(tableDate[i])
                            }
                        }
                        _this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        _this.loading = false;
                        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                    }
                })
                // this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
                //     _this.total = res.data.attributes.total || 10;
                //     _this.pageSize = res.data.attributes.size || 10;
                //     _this.pageCount = Math.ceil(this.total / this.pageSize);
                //     _this.currentPage = 1;
                //     let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
                //     if (tableDate.list) {
                //         for (let i in tableDate.list) {
                //             _this.tableDataList.push(tableDate.list[i])
                //         }
                //     } else {
                //         for (let i in tableDate) {
                //             _this.tableDataList.push(tableDate[i])
                //         }
                //     }
                //     _this.loading = false;
                // }).catch((e) => {
                //     _this.loading = false;
                //     _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                // })

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

                this.$.autoAjax('get', this.baseUrl, '', {
                    ok: (res) => {
                        _this.total = res.attributes.total || 10;
                        _this.pageSize = res.attributes.size || 10;
                        _this.pageCount = Math.ceil(this.total / this.pageSize);
                        _this.currentPage = res.attributes.number || 1;
                        let tableDate = res.tableDemoDate || res.data || res.data.list || res.data.data || res.data.deposit || [];
                        if (tableDate.list) {
                            for (let i in tableDate.list) {
                                _this.tableDataList.push(tableDate.list[i])
                            }
                        } else {
                            for (let i in tableDate) {
                                _this.tableDataList.push(tableDate[i])
                            }
                        }
                        _this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        _this.loading = false;
                        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                    }
                })
                // this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
                //     _this.total = res.data.attributes.total || 10;
                //     _this.pageSize = res.data.attributes.size || 10;
                //     _this.pageCount = Math.ceil(this.total / this.pageSize);
                //     _this.currentPage = res.data.attributes.number || 1;
                //     let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
                //     if (tableDate.list) {
                //         for (let i in tableDate.list) {
                //             _this.tableDataList.push(tableDate.list[i])
                //         }
                //     } else {
                //         for (let i in tableDate) {
                //             _this.tableDataList.push(tableDate[i])
                //         }
                //     }
                //     _this.loading = false;
                // }).catch((e) => {
                //     _this.loading = false;
                //     _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                // })
            },
            //批量操作
            doOperation(fn) {
                let model = this.rowsList;
                let arrs = [];
                for (let k in model) {
                    arrs.push(model[k]);
                }
                this.$emit("do-operation", {
                    "event": event,
                    "fn": fn,
                    "rows": arrs,
                    "page": this.currentPage
                });
            },
            updateFormData() {
                if (this.tableData.list.length > 0) {
                    this.Datainit();
                }
            },
            //处理操作公共按钮事件
            doHandle(row, fn) {
                this.$emit("do-handle", {
                    "event": event,
                    "row": row,
                    "fn": fn,
                    "page": this.currentPage
                });
            },
            //数据变化事件
            changes(index, row, keys) {
                if (index >= 0) {
                    this.$emit("do-changes", {
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
                if (this.fullWidth) {
                    let sum = 0;
                    if (this.columnsUrl) {
                        this.$.get(this.columnsUrl, (res) => {
                            if (res.columns) {
                                let list = res.columns;
                                for (let k in list) {
                                    if (list[k].width) {
                                        sum = sum + parseInt(list[k].width);
                                    }
                                }
                                sum = sum > 900 ? sum : 1100;
                            }
                        })
                    }
                }
            },
            // 导出数据
            exportData() {
                this.$emit("export-data");
            }
        },
        watch: {
            'tableData': 'updateFormData',
            'tableData.list': 'updateFormData',
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
            this.Datainit()
        },
        mounted() {
            this.$nextTick(() => {
                EVENT.$emit('table.loaded');
            });
            //this.getTableWidth();
        }
    }
</script>
<style scoped>
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
        font-weight: 700;
    }
</style>
