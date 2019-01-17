<template>
    <div id="modelSet" v-loading="loading">

        <el-button type="primary" v-text="LANG['保 存'] || '保 存'" @click="doSave"
                   style="position: absolute;right:10px;top:-36px" size="small"></el-button>
        <table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header el-table--border"
               style="width: 100%;">
            <thead>
            <tr>
                <th colspan="1" rowspan="3" class="el-table_1_column_36 is-leaf">
                    <div class="cell">
                        <el-checkbox v-model="allChecked" @change="allCheckedOdd"></el-checkbox>
                    </div>
                </th>
                <th colspan="1" rowspan="3" class="el-table_1_column_36 is-leaf">
                    <div class="cell" v-text="LANG['玩法名称'] || '玩法名称'"></div>
                </th>
                <th colspan="1" rowspan="3" class="el-table_1_column_36 is-leaf" style="padding: 0 20px;">
                    <div class="cell" style="padding-top:46px;" v-text="LANG['当前赔率'] || '当前赔率'"></div>
                    <input type="number" v-model="inputone" placeholder="快调" class="el-input__inner el-input"
                           style="margin-top:10px;display:block;" @keyup.13="changeCol($event,'odds')"
                           @blur="changeCol($event,'odds')" min="1">
                </th>
                <th colspan="1" rowspan="3" class="el-table_1_column_36 is-leaf" style="padding: 0 20px;">
                    <div class="cell" v-text="LANG['0.001返奖'] || '0.001返奖'" style="padding-top:46px;"></div>
                    <input type="number" v-model="inputsix" placeholder="快调" class="el-input__inner el-input"
                           style="margin-top:10px;display:block;" @keyup.13="changeCol($event,'per_odds')"
                           @blur="changeCol($event,'per_odds')" min="1">
                </th>
                <!--<th colspan="1" rowspan="3" class="el-table_1_column_36 is-leaf">-->
                <!--<div class="cell"  v-text="LANG['最低赔率'] || '最低赔率'"></div>-->
                <!--</th>-->
                <th colspan="1" rowspan="3" class="el-table_1_column_36 is-leaf">
                    <div class="cell" v-text="LANG['最高赔率'] || '最高赔率'"></div>
                </th>
                <th colspan="1" rowspan="3" class="el-table_1_column_36 is-leaf">
                    <div class="cell" v-text="LANG['玩法开启'] || '玩法开启'"><br/>
                        <el-checkbox style="margin-top:10px" :checked="checksPlayOn?true:false" v-model="checksPlayOn"
                                     @change="checkAllChange($event,'stateus')"></el-checkbox>
                    </div>
                </th>
                <th colspan="4" rowspan="1" class="el-table_1_column_36 is-leaf">
                    <div class="cell" v-text="LANG['限额设置'] || '限额设置'"></div>
                </th>
            </tr>
            <tr>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                    <div class="cell" v-text="LANG['单注最小'] || '单注最小'"></div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                    <div class="cell" v-text="LANG['单注最大'] || '单注最大'"></div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                    <div class="cell" v-text="LANG['单项最大'] || '单项最大'">{{ }}</div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                    <div class="cell" v-text="LANG['单注最高派奖'] || '单注最高派奖'"></div>
                </th>
            </tr>
            <tr>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_39_column_40 is-leaf">
                    <div class="cell">
                        <input type="number" min="2" v-model="inputtwo" placeholder="快调"
                               class="el-input__inner el-input" style="margin-top:10px;display:block"
                               @keyup.13="changeCol($event,'min_bet')" @blur="changeCol($event,'min_bet')">
                    </div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_39_column_41 is-leaf">
                    <div class="cell">
                        <input type="number" placeholder="快调" v-model="inputthree" class="el-input__inner el-input"
                               style="margin-top:10px;display:block" @keyup.13="changeCol($event,'one_bet')"
                               @blur="changeCol($event,'one_bet')">
                    </div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_39_column_42 is-leaf">
                    <div class="cell">
                        <input type="number" placeholder="快调" v-model="inputfour" class="el-input__inner el-input"
                               style="margin-top:10px;display:block" @keyup.13="changeCol($event,'one_term')"
                               @blur="changeCol($event,'one_term')">
                    </div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_39_column_43 is-leaf">
                    <div class="cell">
                        <input type="number" placeholder="快调" v-model="inputfive" class="el-input__inner el-input"
                               style="margin-top:10px;display:block" @keyup.13="changeCol($event,'one_max_money')"
                               @blur="changeCol($event,'one_max_money')">
                    </div>
                </th>
            </tr>
            </thead>
            <tr v-for="(item,index) in dataModel" v-if="dataModel.length">
                <td class="el-table_1_column_19">
                    <div class="cell">
                        <el-checkbox v-model="item.checked" @change="checkedOdd(index, item.checked)"></el-checkbox>
                    </div>
                </td>
                <td class="el-table_1_column_19">
                    <div class="cell">
                        <span v-if="playTypeId === 1">{{item.odds_type}} - {{item.result}}</span>
                        <span v-else>{{item.result}}</span>
                    </div>
                </td>
                <td class="el-table_1_column_19">
                    <div class="cell">
                        <div v-for="(sub,key) in item.sub_odds" style="clear: both;">
                            <span class="sub">{{sub.name}}</span>
                            <span @click="changeInput($event,index,'zdpl')" class="sub">{{sub.odds}}</span>
                            <input type="number" class="el-input__inner" v-model="sub.odds"
                                   @keyup.13="doEnter(index,'odds',key)" @blur="doEnter(index,'odds',key)">
                        </div>
                        <span @click="changeInput($event,index,'zdpl')" v-if="!item.sub_odds">{{item.odds}}</span>
                        <input type="number" class="el-input__inner" v-model="item.odds"
                               @keyup.13="doEnter(index,'odds')" @blur="doEnter(index,'odds')">
                    </div>
                </td>
                <td class="el-table_1_column_19">
                    <div class="cell">
                        <div v-for="(sub,key) in item.sub_odds" style="clear: both;">
                            <span class="sub">{{sub.name}}</span>
                            <span @click="changeInput($event,index,'zdpl')" class="sub">{{sub.per_odds}}</span>
                            <input type="number" class="el-input__inner" v-model="sub.per_odds"
                                   @keyup.13="doEnter(index,'per_odds',key)" @blur="doEnter(index,'per_odds',key)">
                        </div>
                        <span @click="changeInput($event,index,'zdpl')" v-if="!item.sub_odds">{{item.per_odds}}</span>
                        <input type="number" class="el-input__inner" v-model="item.per_odds"
                               @keyup.13="doEnter(index,'per_odds')" @blur="doEnter(index,'per_odds')">
                    </div>
                </td>
                <td class="el-table_1_column_19">
                    <div class="cell">{{item.max_odds}}</div>
                </td>
                <td class="el-table_1_column_19">
                    <div class="cell">
                        <el-checkbox v-model="item.status" :true-label="'enabled'"
                                     :false-label="'disabled'"></el-checkbox>
                    </div>
                </td>
                <td class="el-table_1_column_19">
                    <div class="cell">
                        <span @click="changeInput($event,index,'dzzx')">{{item.min_bet}}</span>
                        <input type="number" class="el-input__inner" v-model="item.min_bet"
                               @keyup.13="doEnter(index,'min_bet')" @blur="doEnter(index,'min_bet')">
                    </div>
                </td>
                <td class="el-table_1_column_19">
                    <div class="cell">
                        <span @click="changeInput($event,index,'dzzd')">{{item.one_bet}}</span>
                        <input type="number" class="el-input__inner" v-model="item.one_bet"
                               @keyup.13="doEnter(index,'one_bet')" @blur="doEnter(index,'one_bet')">
                    </div>
                </td>
                <td class="el-table_1_column_19">
                    <div class="cell">
                        <span @click="changeInput($event,index,'dxzx')">{{item.one_term}}</span>
                        <input type="number" class="el-input__inner" v-model="item.one_term"
                               @keyup.13="doEnter(index,'one_term')" @blur="doEnter(index,'one_term')">
                    </div>
                </td>
                <td class="el-table_1_column_19">
                    <div class="cell">
                        <span @click="changeInput($event,index,'dxzgpj')">{{item.one_max_money}}</span>
                        <input type="number" class="el-input__inner" v-model="item.one_max_money"
                               @keyup.13="doEnter(index,'one_max_money')" @blur="doEnter(index,'one_max_money')">
                    </div>
                </td>
            </tr>
            <tr v-if="dataModel.length == 0" style="text-align:  center;height: 100px;">
                <td colspan="8">暂无数据</td>
            </tr>
        </table>
        <!--分页-->
        <el-col :span="24" class="toolbar mt20" v-if="dataModel.length >0 "
                style="position:relative;">
            <el-pagination :current-page="currentPage" :page-sizes="[10,50,100,200,500]" :page-size="pageSize"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="total" style="float:right" @current-change="doCurrentChange"
                           @size-change="doSizePage">
            </el-pagination>
        </el-col>
    </div>
</template>
<script>
    import Vue from 'vue'

    export default {
        data() {
            return {
                LANG,
                //表头玩法开启
                checksPlayOn: false,
                //表格数据
                dataModel: [],
                //加载状态
                loading: false,
                //总条数
                total: 0,
                //每次页条数
                pageSize: 50,
                //总页数
                pageCount: 0,
                //当前页
                currentPage: 0,
                all_min_odds: 0,
                old_odds: '',
                // 快调快捷INPUT值
                inputsix: '',
                inputfive: '',
                inputfour: '',
                inputthree: '',
                inputtwo: '',
                inputone: '',
                // 全选
                allChecked: false,
                currentCheck: [],
                baseUrl: ''
            }
        },
        props: {
            tableUrl: String,
            columnsUrl: String,
            updated: {
                type: Boolean,
                default: false
            },
            playTypeId: Number
        },
        watch: {
            //如果数据网址发生变化，就执行数据请求
            tableUrl: function (newQuestion) {
                if (newQuestion) {
                    this.init();
                }
            },
            updated: function (newval) {
                if (newval) {
                    this.init();
                }
            }
        },
        methods: {
            //系统初始化
            init() {
                let _this = this;
                // 初始化快调值
                this.inputfive = '';
                this.inputfour = '';
                this.inputthree = '';
                this.inputtwo = '';
                this.inputone = '';
                //总条数
                let total = this.total;
                //每次页条数
                let pageSize = this.pageSize;
                //总页数
                let pageCount = this.pageCount;
                //当前页
                let currentPage = this.currentPage;
                this.baseUrl = this.tableUrl;
                if (this.baseUrl) {
                    this.loading = true;
                    let index = this.baseUrl.indexOf('?');
                    if (index === -1) {
                        this.baseUrl = this.baseUrl + "?page=" + (currentPage === 0 ? 1 : currentPage) + "&page_size=" + (pageSize === 0 ? 10 : pageSize);
                    } else {
                        let n = this.baseUrl.indexOf('page=');
//                      currentPage = currentPage;
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
                    this.dataModel = [];
                    this.all_min_odds = 0;

                    this.$.autoAjax('get', this.baseUrl, '', {
                        ok: (res) => {
                            if (res.state === 0 && res.data) {
                                _this.total = res.attributes.total || 10;
                                _this.pageSize = res.attributes.size || 50;
                                _this.pageCount = Math.ceil(this.total / this.pageSize);
                                _this.currentPage = res.attributes.number || 1;
                                let data = res.data || res.data.list || [];
                                let dataModel = _this.dataModel;
                                //
                                for (let n of data) {
                                    n.checked = false;
                                }


                                _this.all_min_odds = FORMATNUMBER(res.data[0].max_odds);
                                for (let i in data) {
                                    let list = data[i];
                                    let obj = {};
                                    for (let k in list) {
                                        if (k === 'min_bet' || k === 'one_bet' || k === 'one_term' || k === 'one_max_money') {
                                            obj[k] = FORMATMONEY(list[k]);
                                        } else {
                                            if (k === 'max_odds' && FORMATNUMBER(_this.all_min_odds) > 0 && FORMATNUMBER(list[k]) < FORMATNUMBER(_this.all_min_odds)) {
                                                _this.all_min_odds = FORMATNUMBER(list[k]);
                                            }
                                            obj[k] = list[k];
                                        }
                                    }
                                    _this.$set(dataModel, i, obj);
                                }
                                let old_odds = dataModel
                                sessionStorage.setItem('old_odds', JSON.stringify(old_odds));
                            }
                            _this.loading = false;
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                    // this.$http.get(this.baseUrl,URLCONFIG).then((res) => {
                    //     if(res.data.state === 0 && res.data.data){
                    //         _this.total = res.data.attributes.total || 10;
                    //         _this.pageSize = res.data.attributes.size || 50;
                    //         _this.pageCount = Math.ceil(this.total / this.pageSize);
                    //         _this.currentPage = res.data.attributes.number || 1;
                    //         let data = res.data.data || res.data.data.list || [];
                    //         let dataModel = _this.dataModel;
                    //         //
                    //         for (let n of data) {
                    //             n.checked = false;
                    //         }
                    //
                    //
                    //         _this.all_min_odds = FORMATNUMBER(res.data.data[0].max_odds);
                    //         for (let i in data) {
                    //             let list = data[i];
                    //             let obj = {};
                    //             for(let k in list){
                    //                 if(k === 'min_bet' || k === 'one_bet' || k === 'one_term' || k === 'one_max_money'){
                    //                     obj[k] = FORMATMONEY(list[k]);
                    //                 }else{
                    //                     if(k === 'max_odds' && FORMATNUMBER(_this.all_min_odds) >0 && FORMATNUMBER(list[k]) < FORMATNUMBER(_this.all_min_odds)){
                    //                         _this.all_min_odds = FORMATNUMBER(list[k]);
                    //                     }
                    //                     obj[k] = list[k];
                    //                 }
                    //             }
                    //             _this.$set(dataModel,i, obj);
                    //         }
                    //         let old_odds = dataModel
                    //         sessionStorage.setItem('old_odds',JSON.stringify(old_odds));
                    //     }
                    //     _this.loading = false;
                    //
                    // })
                    .catch((e) => {
                        _this.loading = false;
                        _this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！')
                    });

                }
            },
            //保存数据
            doSave() {
                let dataModel = this.dataModel;
                let old_dataModel = JSON.parse(sessionStorage.getItem('old_odds'));
                let obj = [];
                let item = [];
                for (let i in dataModel) {
                    let list = dataModel[i];
                    let temp = {};
                    for (let k in list) {
                        if (k === 'min_bet' || k === 'one_bet' || k === 'one_term' || k === 'one_max_money') {
                            temp[k] = FORMATMultiplyMoney(list[k]);
                        } else {
                            temp[k] = list[k];
                        }
                    }
                    obj.push(temp);
                }
                ;
                //更改前的赔率
                for (let i in old_dataModel) {
                    let list = old_dataModel [i];
                    let temp = {};
                    for (let k in list) {
                        if (k === 'min_bet' || k === 'one_bet' || k === 'one_term' || k === 'one_max_money') {
                            temp[k] = FORMATMultiplyMoney(list[k]);
                        } else {
                            temp[k] = list[k];
                        }
                    }
                    item.push(temp);
                }

                this.$emit('save-data', {
                    "item": obj,
                    "old_odds": item,
                })
            },
            //切换页数
            doCurrentChange(v) {
                this.currentPage = v;
                this.init();
            },
            //切换每页条数
            doSizePage(v) {
                this.pageSize = v;
                this.init();
            },
            //显示编辑框
            changeInput(e, index, prop) {
                let event = window.event || e;
                let obj = event.srcElement ? event.srcElement : event.target;
                event.target.style.display = "none";
                event.target.nextElementSibling.style.display = "block";
                event.target.focus();
            },
            //点击回车
            doEnter(index, prop, subkey) {
                let _this = this;
                if (prop === 'odds') {
                    const h = this.$createElement;
                    if (parseInt(subkey) >= 0) {
                        if (FORMATNUMBER(this.dataModel[index]['sub_odds'][subkey].odds) > FORMATNUMBER(this.dataModel[index].max_odds)) {
                            _this.$notify.error({
                                title: '标题名称',
                                message: h('i', {style: 'color: teal'}, (LANG['赠率值不可大于最高赔率,已修改为最大值'] || '赠率值不可大于最高赔率,已修改为最大值') + this.dataModel[index].max_odds)
                            });
                            this.dataModel[index]['sub_odds'][subkey].odds = this.dataModel[index].max_odds;
                        }
                    } else {
                        if (FORMATNUMBER(this.dataModel[index].odds) > FORMATNUMBER(this.dataModel[index].max_odds)) {
                            _this.$notify.error({
                                title: '标题名称',
                                message: h('i', {style: 'color: teal'}, (LANG['赠率值不可大于最高赔率,已修改为最大值'] || '赠率值不可大于最高赔率,已修改为最大值') + this.dataModel[index].max_odds)
                            });
                            this.dataModel[index].odds = this.dataModel[index].max_odds;
                        }
                    }
                }
                let e = window.event || event;
                let obj = e.srcElement ? e.srcElement : e.target;
                event.target.style.display = "none";
                event.target.previousElementSibling.style.display = "block";
            },
            //开启所有玩法
            checkAllChange(e, str) {
                let event = window.event || e;
                let dataModel = this.dataModel;
                let obj = event.srcElement ? event.srcElement : event.target;
                if (obj.checked) {
                    for (let i in this.dataModel) {
                        dataModel[i][str] = true;
                    }
                } else {
                    for (let i in this.dataModel) {
                        dataModel[i][str] = false;
                    }
                }
            },
            //修改快调
            changeCol(e, prop) {
                const hc = this.$createElement;
                let _this = this;
                let event = window.event || e;
                let obj = event.srcElement ? event.srcElement : event.target;
                if (prop === 'odds') {
                    // 判断当前是否有选中目标比对选中的最高最低赔率，没选默认全选直接比对总赔率
                    if (this.currentCheck.length > 0) {
                        // 当前选中最大最小赔率     当前选中的item最大最小赔率集合
                        let current_max_odds = 0;
                        let current_min_odds = 0;
                        let current_max_odds_arr = [];
                        let current_min_odds_arr = [];

                        // 将选中数组的最大最小赔率放进集合
                        for (let i of this.currentCheck) {
                            current_max_odds_arr.push(FORMATNUMBER(this.dataModel[i]['max_odds']));
                            current_min_odds_arr.push(FORMATNUMBER(this.dataModel[i]['min_odds']))
                        }
                        // 最大赔率集合中取最小值
                        current_max_odds = GETARRAYMIN(current_max_odds_arr);
                        // 最小赔率集合中取最大值
                        current_min_odds = GETARRAYMAX(current_min_odds_arr);

                        // 对比赔率
//                        if (FORMATNUMBER(obj.value) > FORMATNUMBER(current_max_odds)) {
//                            this.$notify.error({
//                                title: '标题名称',
//                                message: hc('i', { style: 'color: teal'}, (LANG['赠率值不可大于最高赔率,请修改后重试'] || '赠率值不可大于最高赔率,请修改后重试') + obj.value)
//                            });
//                            return;
//                        }
//                        if (FORMATNUMBER(obj.value) < FORMATNUMBER(current_min_odds)) {
//                            this.$notify.error({
//                                title: '标题名称',
//                                message: hc('i', { style: 'color: teal'}, (LANG['赠率值不可大于最小赔率,请修改后重试'] || '赠率值不可小于最高赔率,请修改后重试') + obj.value)
//                            });
//                            return;
//                        }

                    } else {
                        // 批量设置赔率，判断批量设置的赔率值是否都大于被设置的值的最高赔率
                        if (FORMATNUMBER(obj.value) > FORMATNUMBER(this.all_min_odds)) {
                            _this.$notify.error({
                                title: '标题名称',
                                message: hc('i', {style: 'color: teal'}, (LANG['赠率值不可大于最高赔率,请修改后重试'] || '赠率值不可大于最高赔率,请修改后重试') + obj.value)
                            });
                            return;
                        }
                    }
                }
                if (FORMATNUMBER(obj.value) < 0) {
                    return this.$message.error(LANG['最小值为0'] || '最小值为0');
                }
                if (obj.value) {
                    for (let i in this.dataModel) {
                        if (this.dataModel[i].sub_odds && prop === 'odds') {
                            if (this.currentCheck.length === 0) {
                                let list = this.dataModel[i].sub_odds;
                                for (let k = 0; k < list.length; k++) {
                                    list[k].odds = obj.value;
                                }
                            } else {
                                for (let n of this.currentCheck) {
                                    if (n == i) {
                                        let list = this.dataModel[i].sub_odds;
                                        for (let k = 0; k < list.length; k++) {
                                            list[k].odds = obj.value;
                                        }
                                    }
                                }
                            }
                        } else {
                            if (this.currentCheck.length === 0) {
                                this.dataModel[i][prop] = obj.value
                            } else {
                                for (let n of this.currentCheck) {
                                    if (n == i) {
                                        this.dataModel[i][prop] = obj.value;
                                    }
                                }
                            }
                        }
                    }
                    obj.blur();
                }

            },
            // 全选
            allCheckedOdd() {
                let bool = this.allChecked;
                for (let i of this.dataModel) {
                    i['checked'] = bool;
                }
                if (!this.allChecked) {
                    this.currentCheck = [];
                } else {
                    this.currentCheck = [];
                    for (let i of this.dataModel.keys()) {
                        this.currentCheck.push(i)
                    }
                }

            },
            checkedOdd(index, value) {
                if (value) {
                    this.currentCheck.push(index);
                    new Set(this.currentCheck);
                } else {
                    let i = this.currentCheck.indexOf(index);
                    this.currentCheck.splice(i, 1)
                }
            }
            //玩法开启
//            changeCheckbox(event,index,key1,key2){
//                let e = window.event|| event;
//                let obj = e.srcElement ? e.srcElement: e.target;
//                let str = this.dataModel[index][key2] || "";
//                let list = str.split(",");
//                let val = this.dataModel[index][key1];
//                for(let k in list){
//                    if(list[k] == "enabled" && !val){
//                        list[k] = "";
//                    }
//                    if(list[k] == "" && val){
//                        list[k] = "enabled";
//                    }
//                }
//                this.dataModel[index][key2] = list.toString();
//            }
        },
        created: function () {
            this.init()
        }
    }
</script>
<style scoped>
    #modelSet {
        position: relative;
    }

    .cell {
        text-align: center;
    }

    .cell input {
        display: none
    }

    .cell span {
        display: block;
        width: 100%;
        height: 100%
    }

    .cell .sub {
        display: block;
        width: 50%;
        float: left;
    }
</style>
