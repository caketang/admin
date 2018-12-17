<template>
    <div id="tableSingle" v-loading="loading" ref="tableSingle">
        <el-col class="tRight mb20" v-if="showExport">
            <el-button type="primary" size="small" @click="exportData">{{LANG['导出'] || '导出'}} </el-button>
        </el-col>
        <el-col class="ft14 mb10">
            <!--<label for="" class="fl mr10">{{LANG['您选择了'] || '您选择了'}}-->
                <!--<span class="selecttext">{{checkSum}}</span>{{LANG['条数据'] || '条数据'}} </label>-->
            <!--<div v-if="tabOperation !=undefined" class="btngroup">-->
                <!--<el-button size="small" v-for="(opt,index) in tabOperation" :key="index"-->
                           <!--@click="doOperation(opt.fn)">{{LANG[opt.label] || opt.label}}-->
                <!--</el-button>-->
            <!--</div>-->
            <div class="font14 mt10 fl w50" v-if="allCheckSum">
                <span class="fl mr10" style="line-height: 36px;" >{{LANG['本页您选择了'] || '本页您选择了'}}
                <span class="selecttext" >{{checkSum}}</span>{{LANG['条数据'] || '条数据'}} </span>
                <el-button size="small"  @click="doOperation('delMeg')" :loading="loadingOne">{{LANG['冲销'] || '冲销'}}</el-button>
                </div>
            </el-col>
            <div id="tables" class="tablesOverall">
                <table cellspacing="0" cellpadding="0" border="1" class="el-table w100 el-table--border mt10">
                    <tr>
                        <th v-if="tableCheck && tableDataList.length">
                            <div class="cell">
                                <el-checkbox v-model="allChecked" @change="allchecked" :disabled="checkDisabled"></el-checkbox>
                            </div>
                        </th>
                        <th v-if="tableIndex && tableDataList.length">
                            <div class="cell">{{LANG['序号'] || '序号'}}</div>
                        </th>
                        <th class="is-leaf" v-for="(col,index) in columnList" :key="index" v-if="col.disabled == true">
                            <div v-if="!col.click">{{col.label}}</div>
                            <div v-else>
                                <el-button size="small" v-for="(item,index) in col.btnGroup" :key="index" @click="doSort(item.fn,index)" type="text" style="display: block;" :class="colorIndex===index?'clickState':''">{{item.label}}</el-button>
                            </div>
                        </th>
                    </tr>
                    <tr v-for="(item,k) in tableDataList" :key="k" :class="{col2 : !parseInt((k+1)%2)}" v-if="tableDataList.length">
                        <td class="el-table_1_column_19" width="55px" v-if="tableCheck && tableDataList.length">
                            <!--<div class="cell" v-if="checkCondition">-->
                            <!--<el-checkbox v-model="checkList[k]" @change="thisChecked(k)" :disabled="item[checkCondition.prop] == checkCondition.value"></el-checkbox>-->
                        <!--</div>-->
                        <div class="cell">
                            <el-checkbox v-model="checkList[k]" @change="thisChecked(k)" :disabled="(item.revoked == '0'? false : true)"></el-checkbox>
                        </div>
                    </td>
                    <td class="el-table_ 1_column_19" v-if="tableIndex && tableDataList.length">
                        <div class="cell tCent">{{parseInt(k) + 1}}</div>
                    </td>
                    <td class="el-table_1_column_19" v-for="(col,index) in columnList" :key="index"
                        :style="{'min-Width': (col.width +'px')}"
                        v-if="col.disabled == true">
                        <!--定制-->
                        <div class="cell" :class="{tCent:(col.class != undefined)?true:false}" v-if="col.type == 'twoLine'">
                            <div v-if="col.filterByWord">
                                <div v-for="item1 in item[col.filterByWord]">
                                    <div v-if="col.filterCondition.split(',').length > 1">
                                        <div v-if="col[col.filterCondition.split(',')[0]] == item1[col.filterCondition.split(',')[0]] && col[col.filterCondition.split(',')[1]] == item1[col.filterCondition.split(',')[1]]">
                                            <span style="display: block">{{item1.valid_bet | formatMoney}}</span>
                                            <span style="display: block;color:#20a0ff">{{item1.coupon | formatMoney}}</span>
                                        </div>
                                    </div>
                                    <div v-else>
                                        <span v-if="col[col.filterCondition.split(',')[0]] == item1[col.filterCondition.split(',')[0]]">
                                            <span style="display: block">{{item1.valid_bet | formatMoney}}</span>
                                            <span style="display: block;color:#20a0ff">{{item1.coupon | formatMoney}}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <span style="display: block">{{item[col.prop.split(',')[0]] | formatMoney}}</span>
                                <span style="display: block;color:#20a0ff">{{item[col.prop.split(',')[1]] |formatMoney}}</span>
                            </div>
                            <!--<span style="display: block;color:blue;">{{item[col.prop].split('|')[1] }}</span>-->
                        </div>
                        <div class="cell" :class="{tCent:(col.class != undefined)?true:false}"
                             v-if="!col.type && !col.filters">
                            <span >{{item[col.prop]}}</span>
                        </div>
                        <div class="cell" :class="{tCent:(col.class != undefined)?true:false} "
                             v-if="col.filters">
                            <span class="danger_text" v-if="item[col.prop] == '1'">{{item[col.prop] | formatSex(col.filters)}}</span>
                            <span class="sucess_text" v-else>{{item[col.prop] | formatSex(col.filters)}}</span>
                        </div>
                    </td>
                </tr>
                <!--表格总合-->
                <tr v-if="sumGame && allTableDataList.subTotalData && allTableDataList.size ">
                    <td>
                        <div class="cell">{{LANG['小计'] || '小计'}}</div>
                    </td>
                    <td :colspan="colspan">
                        <div class="cell tCent" slot="sub">人数 / 冲销: {{attributes.subTotal}}  / {{attributes.subTotalRevoke}}</div>
                    </td>
                    <td>
                        <span class="cell" style="display: block">{{allTableDataList.subTotalMoney.valid_bet| formatMoney}}</span>
                        <span class="cell" style="display: block;color:#20a0ff;">{{allTableDataList.subTotalMoney.coupon| formatMoney}}</span>
                    </td>
                    <td v-for="(col,index) in bottomColumnList" :key="index">
                        <div v-for="(item,index1) in allTableDataList.subTotalData" :key="index1" class="cell" v-if="col.filterCondition && col[col.filterCondition.split(',')[0]] == item[col.filterCondition.split(',')[0]] && col[col.filterCondition.split(',')[1]] == item[col.filterCondition.split(',')[1]]">
                            <span style="display: block">{{item.valid_bet | formatMoney}}</span>
                            <span style="display: block;color:#20a0ff">{{item.coupon | formatMoney}}</span>
                        </div>
                    </td>
                </tr>
                <tr v-if="sumGame && allTableDataList.totalMoney && allTableDataList.size">
                    <td>
                        <div class="cell">{{LANG['总计'] || '总计'}}</div>
                    </td>
                    <td :colspan="colspan">
                        <div class="cell tCent" slot="total">总人数 / 冲销 : {{attributes.total}} / {{attributes.totalRevoke}}</div>
                    </td>
                    <td>
                        <span class="cell" style="display: block">{{allTableDataList.totalMoney.valid_bet| formatMoney}}</span>
                        <span class="cell" style="display: block;color:#20a0ff;">{{allTableDataList.totalMoney.coupon| formatMoney}}</span>
                    </td>
                    <td v-for="(col,index) in bottomColumnList" :key="index">
                        <div v-for="(item,index1) in allTableDataList.totalData" :key="index1" class="cell" v-if="col.filterCondition && col[col.filterCondition.split(',')[0]] == item[col.filterCondition.split(',')[0]] && col[col.filterCondition.split(',')[1]] == item[col.filterCondition.split(',')[1]]">
                            <span style="display: block">{{item.valid_bet | formatMoney}}</span>
                            <span style="display: block;color:#20a0ff">{{item.coupon | formatMoney}}</span>
                        </div>
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
            <el-pagination :current-page="currentPage" :page-sizes="[10, 20, 50, 100, 1000]" :page-size="pageSize"
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

    export default {
        data() {
            return {
                LANG,
                //列配置
                columnConfig: [],
                //复制列参数
                columnList: [],
                bottomColumnList:[],
                //表格列表数据
                tableDataList: [],
                //总计数据
                allTableDataList: {},
                gridData: [],
                // 合计相关
                subTotalBet: {},
                totalBetArray:[],
                totalBet: {},
                //分页相关
                //总页数
                total: 0,
                //一页多少条
                pageSize: 1000,
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
                allCheckSum: 0,
                loading: false,
                //横向滚动条
                tableScroll: false,
                colorIndex:null,
                checkDisabled:false,
              //  打码量操作
              modeData:{
                name:'',
                withdraw_per:''
              },
              sLoading: false,
              checked: {},
              attributes: {
                  subTotal: 0,
                  total: 0
              },
              timeXJ:0,
              timeTZ:0,
              loadingOne: false
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
            assembleColumns:Object,
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
            //是否全选
            allCheck:{
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
//            tabOperation: Array,
//            checkCondition:Object,
            //表格汇总相关
            sumGame: {
                type: Boolean,
                default: false
            },
            colspan:{
                type:Number,
                default:1
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
            showAdd: {
                type: Boolean,
                default: false
            },
            showDetail: {
                type: Boolean,
                default: false
            },
            isLoading: {
                type: Boolean,
                default: false
            }
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
                this.unchecked = {};
                this.modeData.withdraw_per = '';
                this.modeData.name = '';
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
                if(this.$refs.form){
                    this.$refs.form.resetFields();
                }
                this.attributes.subTotal= 0;
                this.attributes.total= 0;
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
                            this.baseUrl = this.baseUrl + "?page=" + (currentPage === 0 ?1 : currentPage) + "&page_size=" + (pageSize === 0 ? 1000 : pageSize);
                        } else {
                            let n = this.baseUrl.indexOf('page=');
                            currentPage = 1;
                            if (n > 0) {
                                this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + currentPage || 1);
                            } else {
                                this.baseUrl = this.baseUrl + "&page=" + (currentPage === 0 ?1 : currentPage) + "&page_size=" + (pageSize === 0 ? 1000 : pageSize);
                            }
                            let m = this.baseUrl.indexOf('page_size=');
                            if (m > 0) {
                                this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + (pageSize === 0 ? 1000 : pageSize));
                            } else {
                                this.baseUrl = this.baseUrl + "&page_size=1000";
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
                        let list = res && res.data &&  res.data.data && res.data.data.list|| [];
                        // if (res.data.data.length === undefined) {
                        //     if (res.data.data.list != undefined && res.data.data.list.length) {
                        //         list = res.data.data.list || [];
                        //     }
                        // }
                        _this.subTotalBet = {};
                        _this.totalBet = {};
                        if (res.data.attributes) {
                            this.attributes.subTotal= res.data.data.length || 0;
                            this.attributes.total= res.data.attributes.total || 0;
                            this.attributes.totalRevoke = res.data.attributes.totalRevoke || 0;
                            this.attributes.subTotalRevoke = res.data.attributes.subTotalRevoke || 0;
                            /*总计*/
                            if (res.data.attributes && res.data.attributes.totalData) {
                                _this.allTableDataList.totalData = res.data.attributes.totalData;
                                _this.allTableDataList.totalMoney = res.data.attributes.totalMoney;
                            }
                            /*小计*/
                            if (res.data.attributes && res.data.attributes.subTotalData) {
                                _this.allTableDataList.subTotalData = res.data.attributes.subTotalData;
                                _this.allTableDataList.subTotalMoney = res.data.attributes.subTotalMoney;
                            }
                            _this.allTableDataList.size = tableDate.length;
                            _this.total = res && res.data && res.data.attributes && res.data.attributes.total || 10;
                            _this.pageSize = res && res.data && res.data.attributes && res.data.attributes.size || 1000;
                            _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
                            _this.currentPage = parseInt(res.data.attributes.number) ? parseInt(res.data.attributes.number) : 1;
                        }else{
                            _this.allTableDataList = {};
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
//                        let checkCondition = this.checkCondition;
//                        if(checkCondition){
//                            let arrs = [];
//                            for (let i in this.tableDataList) {
//                                if(this.tableDataList[i][checkCondition.prop] == checkCondition.value){
//                                    arrs.push(this.tableDataList[i]);
//                                }
//                            }
//                            if(arrs.length === this.tableDataList.length){
//                                this.checkDisabled = true;
//                            }else{
//                                this.checkDisabled = false;
//                            }
//                        }
                        _this.loading = false;
//                        if(this.allCheck){
//                            this.allChecked = this.allCheck;
//                            _this.allchecked();
//                        }
                    }).catch((e) => {
                        _this.loading = false;
//                        console.log(e);
//                        _this.$message.error(LANG['网络问题，请稍后重试！'] || '网络问题，请稍后重试！');
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
                        _this.pageSize = tableDate.page_size ? tableDate.page_size : 1000;
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
                    this.$http.get(this.columnsUrl, URLCONFIG).then((res) => {
                        columnList.splice(0, columnList.length);
                        let columns = res && res.data && res.data.columns ? res.data.columns : [];
                        if(this.assembleColumns){
                            let index = this.assembleColumns.index;
                            let origin = columns.slice(0,index);
                            let end = columns.slice(index,columns.length);
                            let columsObj = {
                                orignCol:origin,
                                endCol:end,
                                connectCol:this.assembleColumns.data
                            };
                            columns = CONNECTCOLUMS(columsObj,100);
                            this.bottomColumnList = columns.slice(index,columns.length);
                        }
                        if (columns.length > 0) {
                            for (let i in columns) {
                                columnList.push(columns[i])
                                if (columns[i].disabled == true) {
                                    _this.columnConfig.push(columns[i].prop);
                                }
                            }
                        }
                    }).catch((e) => {
                        _this.loading = false;
                        _this.$message.error(LANG['网络问题，请稍后重试！'] || '网络问题，请稍后重试！');
                    })
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
                let rows = this.rowsList = {};
                let checked = this.checked;
                this.checkSum = 0;
                this.allChecked = true;
                let sum =0;
                for (let i in arr) {
                    if(checked[arr[i].detail_id]){
                        this.$set(this.checkList, i, true);
                        sum ++;
                    } else {
                        this.$set(this.checkList, i, false);
                    }
                    rows[i] = arr[i];
                }
                if(sum === arr.length && sum > 0){
                    this.allChecked = true;
                } else {
                    this.allChecked = false;
                }
                this.checkSum = sum;
            },
            //选据择所有数据
            allchecked() {
                let allChecked = this.allChecked;
                let unchecked = this.unchecked;
                let model = this.tableDataList;
                let checks = this.checkList;
                let checkCondition = this.checkCondition;
                let checked = this.checked;
                let rows = this.rowsList;
                let arrs = [];
                let sum = 0;
                if (allChecked) {
                    for (let i in this.tableDataList) {
                        if(this.tableDataList[i].revoked == '0'){
                            arrs.push(this.tableDataList[i]);
                            rows[i] = this.tableDataList[i];
                            checked[this.tableDataList[i].detail_id] = this.tableDataList[i].detail_id;
                            checks[i] = true;
                            this.allCheckSum++;
                            sum ++;
                        }
                    }
                } else {
                    this.checkSum = 0;
                    arrs.splice(0,arrs.length);
                    for(let i in checks){
                        checks[i] = false;
                    }
                    for(let k in rows){
                        if(checked[rows[k].detail_id]){
                            this.allCheckSum--;
                            delete checked[rows[k].detail_id];
                        }
                    }
                    checked = {};
                    rows = null;
                }
                if(this.attributes.subTotalRevoke === this.tableDataList.length){
                    this.$message.error(LANG['本页无会员可冲销'] || '本页无会员可冲销');
                }
                this.allChecked = this.tableDataList.length === sum ? true : false;
                this.checkSum = this.tableDataList.length === sum ? this.tableDataList.length : sum;
//                if(sum === 0){
//                    this.$message.error(LANG['本页已无可冲销数据'] || '本页已无可冲销数据');
//                }
//                this.$emit("do-operation", {
//                    "event": event,
//                    "rows": arrs,
//                    "page": this.currentPage
//                });
            },
            //选择当前数据
            thisChecked(num) {
                let allChecked = this.allChecked;
                let checked = this.checked;
                let model = this.tableDataList;
                let checks = this.checkList;
                let rows = this.rowsList;
                let arrs = [];
                let sum = 0;
                if (checks[num]) {
                    rows[num] = this.tableDataList[num];
                    checked[rows[num].detail_id] = rows[num].detail_id;
                    sum++;
                    this.checkSum = this.checkSum + 1;
                } else {
                    if( checked[rows[num].detail_id]){
                        delete checked[this.tableDataList[num].detail_id];
                        sum--;
                    }
                    if(rows[num]){
                        delete rows[num];
                    }
                    this.checkSum = this.checkSum - 1;
                }
                if (this.checkSum === model.length) {
                    this.allChecked = true;
                }
                if (this.checkSum === 0) {
                    this.allChecked = false;
                }
                for(let k in rows){
                    arrs.push(rows[k]);
                }
                this.allCheckSum = sum;
//                this.$emit("do-operation", {
//                    "event": event,
//                    "rows": arrs,
//                    'dataList': unchecked,
//                    "page": this.currentPage
//                });
            },
            //切换每页条数
            doSizePage(v) {
                this.loading = true;
                let _this = this;
                let total = this.total;
                let pageSize = this.pageSize;
                let pageCount = this.pageCount;
                let otherData = {};
                let page = 0;
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
                        this.baseUrl = this.baseUrl + "&page_size=" + 1000;
                    }
                }
                this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
                    _this.total = res.data.attributes.total || 10;
                    _this.pageSize = res.data.attributes.size || 1000;
                    _this.pageCount = Math.ceil(this.total / this.pageSize);
                    _this.currentPage = 1;
                    let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
                    if (tableDate.list) {
                        for (let i in tableDate.list) {
                            _this.tableDataList.push(tableDate.list[i])
                        }
                        _this.initCheckList(tableDate.list);
                    } else {
                        for (let i in tableDate) {
                            _this.tableDataList.push(tableDate[i])
                        }
                        _this.initCheckList(tableDate);
                    }
                    if (_this.getData) {
                        let model = res.data || {};
                        for (let k in model) {
                            otherData[k] = model[k];
                        }
                    }
//                    let checkCondition = this.checkCondition;
//                    if(checkCondition){
//                        let arrs = [];
//                        for (let i in this.tableDataList) {
//                            if(this.tableDataList[i][checkCondition.prop] == checkCondition.value){
//                                arrs.push(this.tableDataList[i]);
//                            }
//                        }
//                        if(arrs.length === this.tableDataList.length){
//                            this.checkDisabled = true;
//                        }else{
//                            this.checkDisabled = false;
//                        }
//                    }
                    /*小计合计*/
                    _this.allTableDataList = {} //先清空数据
                    if (res.data.attributes) {
                        _this.attributes.subTotal= res.data.data.length || 0;
                        _this.attributes.total= res.data.attributes.total || 0;
                        _this.attributes.totalRevoke = res.data.attributes.totalRevoke || 0;
                        _this.attributes.subTotalRevoke = res.data.attributes.subTotalRevoke || 0;
                        /*总计*/
                        if (res.data.attributes && res.data.attributes.totalData) {
                            _this.allTableDataList.totalData = res.data.attributes.totalData;
                            _this.allTableDataList.totalMoney = res.data.attributes.totalMoney;
                        }
                        /*小计*/
                        if (res.data.attributes && res.data.attributes.subTotalData) {
                            _this.allTableDataList.subTotalData = res.data.attributes.subTotalData;
                            _this.allTableDataList.subTotalMoney = res.data.attributes.subTotalMoney;
                        }
                    }
                    _this.allTableDataList.size = tableDate.length;
                    if (_this.getData) {
                        _this.$emit("get-table-data", {
                            "event": event,
                            "item": _this.tableDataList,
                            "allData": otherData
                        });
                    }
                    _this.loading = false;
                }).catch((e) => {
                    _this.loading = false;
                    _this.$message.error(LANG['网络问题，请稍后重试！'] || '网络问题，请稍后重试！');
                })
            },
            //切换页数
            doCurrentChange(v) {
                this.loading = true;
                let total = this.total;
                let pageSize = this.pageSize;
                let pageCount = this.pageCount;
                let otherData = {};
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
                        this.baseUrl = this.baseUrl + "&page_size=" + 1000;
                    }
                }
                this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
                    _this.total = res.data.attributes.total || 10;
                    _this.pageSize = res.data.attributes.size || 1000;
                    _this.pageCount = Math.ceil(this.total / this.pageSize);
                    _this.currentPage = res.data.attributes.number || 1;
                    let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
                    if (tableDate.list) {
                        for (let i in tableDate.list) {
                            _this.tableDataList.push(tableDate.list[i])
                        }
                        _this.initCheckList(tableDate.list);
                    } else {
                        for (let i in tableDate) {
                            _this.tableDataList.push(tableDate[i])
                        }
                        _this.initCheckList(tableDate);
                    }
                    if (_this.getData) {
                        let model = res.data || {};
                        for (let k in model) {
                            otherData[k] = model[k];
                        }
                    }
                    /*总计*/
                    _this.allTableDataList = {};//先清空数据
                    if (res.data.attributes) {
                        _this.attributes.subTotal= res.data.data.length || 0;
                        _this.attributes.total= res.data.attributes.total || 0;
                        _this.attributes.totalRevoke = res.data.attributes.totalRevoke || 0;
                        _this.attributes.subTotalRevoke = res.data.attributes.subTotalRevoke || 0;
                        /*总计*/
                        if (res.data.attributes && res.data.attributes.totalData) {
                            _this.allTableDataList.totalData = res.data.attributes.totalData;
                            _this.allTableDataList.totalMoney = res.data.attributes.totalMoney;
                        }
                        /*小计*/
                        if (res.data.attributes && res.data.attributes.subTotalData) {
                            _this.allTableDataList.subTotalData = res.data.attributes.subTotalData;
                            _this.allTableDataList.subTotalMoney = res.data.attributes.subTotalMoney;
                        }
                    }
                    this.attributes.subTotal= res.data.data.length || 0;
                    this.attributes.subTotalRevoke= res.data.attributes.subTotalRevoke || 0;
                    _this.allTableDataList.size = tableDate.length;
                    if (_this.getData) {
                        _this.$emit("get-table-data", {
                            "event": event,
                            "item": _this.tableDataList,
                            "allData": otherData
                        });
                    }
//                    let checkCondition = this.checkCondition;
//                    if(checkCondition){
//                        let arrs = [];
//                        for (let i in this.tableDataList) {
//                            if(this.tableDataList[i][checkCondition.prop] == checkCondition.value){
//                                arrs.push(this.tableDataList[i]);
//                            }
//                        }
//                        if(arrs.length === this.tableDataList.length){
//                            this.checkDisabled = true;
//                        }else{
//                            this.checkDisabled = false;
//                        }
//                    }
                    _this.loading = false;
                }).catch((e) => {
                    _this.loading = false;
                    _this.$message.error(LANG['网络问题，请稍后重试！'] || '网络问题，请稍后重试！');
                })
            },
            //批量冲销
            doOperation(fn) {
                let arr=[];
                for(let k in this.checked){
                    arr.push(k);
                }
                this.loadingOne = true;
                this.$emit("do-operation", {
                    "dataList": arr
                });

//                let model = this.rowsList;
//                let checkCondition = this.checkCondition;
//                let arrs = [];
//                if(checkCondition){
//                    for (let i in model) {
//                        if(model[i][checkCondition.prop] !== checkCondition.value){
//                            arrs.push(model[i]);
//                        }
//                    }
//                }else{
//                    for (let i in model) {
//                        arrs.push(model[i]);
//                    }
//                }
//                this.$emit("do-operation", {
//                    "event": event,
//                    "fn": fn,
//                    "rows": arrs,
//                    "page": this.currentPage
//                });
            },
            doSort(fn,index){
                let data = this.tableDataList;
                let timeXJ = this.timeXJ;
                let timeTZ = this.timeTZ;
                switch (fn){
                    case "sortByXJ":
                        if(timeXJ%2 === 0){
                            data.sort(function (a,b) {
                                return a.coupon - b.coupon
                            });
                        }else{
                            data.sort(function (a,b) {
                                return b.coupon - a.coupon
                            });
                        }
                        this.timeXJ++;
                        break;
                    case "sortByTZ":
                        if(timeTZ%2 === 0){
                            data.sort(function (a,b) {
                                return a.valid_bet - b.valid_bet
                            });
                        }else{
                            data.sort(function (a,b) {
                                return b.valid_bet - a.valid_bet
                            });
                        }
                        this.timeTZ++;
                        break;
                }
            },
            updateFormData() {
                if(this.tableData.list.length > 0){
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
                    if(this.columnsUrl){
                        this.$http.get(this.columnsUrl, URLCONFIG).then((res) => {
                            if (res.data.columns) {
                                let list = res.data.columns;
                                for (let k in list) {
                                    if (list[k].width) {
                                        sum = sum + parseInt(list[k].width);
                                    }
                                }
                                sum = sum > 900 ? sum : 1100;
                                if ($(window).width() > 1200) {
                                    $('.tablesOverall').find('table').css('min-width', sum + 'px');
                                    $('.tablesOverall').css('width', $(window).width() - 110).addClass('socr');
                                }

                            }
                        })
                    }
                }
            },
            // 导出数据
            exportData(){
                this.$emit("export-data");
            },
            // 保存优惠
            save(){
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        let arr=[];
                        for(let k in this.unchecked){
                            arr.push(k);
                        }
                        this.$emit("unchecked", {
                            "dataList": arr,
                            "modeData": this.modeData
                        });
                    } else {
//                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
        watch: {
            'tableData.list': 'updateFormData',
            tableUrl: function (newQuestion) {
                this.Datainit();
            },
            tableDataList() {
                this.getTableWidth();
            },
//            isLoading: function (newval) {
//              if(newval === false){
//                  this.loadingOne = false;
//              }
//            },
            //根据是否更新，更新数据
//            updated: function (newval) {
//                if (newval) {
//                    this.Datainit();
//                }
//            },
            formType: function (newval) {
                if (newval == "add" || newval == "edit" || newval == "delete") {
                    this.Datainit();
                }
            },
            opts: function (newval) {
                if (newval) {
                    this.Datainit();
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
        },
        activated() {
            this.allCheckSum = 0;
            this.checked = {};
            this.pageSize = 1000;
            this.loadingOne = false;
            let _this = this;
            setTimeout(function () {
                _this.Datainit();
            },500)
        }
    }
</script>
<style scoped>
    .clickState {color:blue;}
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