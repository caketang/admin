<template>
    <div id="tableUsers" :class="scrollClass" ref="tableSingle" :style="tableWidth">
        <el-card>
            <table cellspacing="0" cellpadding="0" border="1" class="el-table el-table__header el-table--border">
                <thead>
                <tr>
                    <th colspan="1" rowspan="2" width="70px" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['会员帐号'] || '会员帐号'}}</div>
                    </th>
                    <th colspan="1" rowspan="2" width="60px" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['真实姓名'] || '真实姓名'}}</div>
                    </th>
                    <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['注册时间'] || '注册时间'}}</div>
                    </th>
                    <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['代理帐号'] || '代理帐号'}}</div>
                    </th>
                    <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['帐号状态'] || '帐号状态'}}</div>
                    </th>
                    <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['主钱包余额'] || '主钱包余额'}}</div>
                    </th>
                    <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['存款笔数'] || '存款笔数'}}</div>
                    </th>
                    <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['存款金额'] || '存款金额'}}</div>
                    </th>
                    <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['取款笔数'] || '取款笔数'}}</div>
                    </th>
                    <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['取款金额'] || '取款金额'}}</div>
                    </th>
                    <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                        <div class="cell">
                            {{LANG['最后存款时间'] || '最后存款时间'}}
                        </div>
                    </th>
                    <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                        <div class="cell">
                            {{LANG['最后取款时间'] || '最后取款时间'}}
                        </div>
                    </th>
                    <!--新增备注-->
                    <th colspan="1" rowspan="2" width="80px" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['电话'] || '电话'}}<br/></div>
                    </th>
                    <th colspan="1" rowspan="2" width="150px" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['邮箱'] || '邮箱'}}<br/></div>
                    </th>
                    <th colspan="1" rowspan="2" width="70px" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['QQ'] || 'QQ'}}<br/></div>
                    </th>
                    <th colspan="1" rowspan="2" width="70px" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['微信号'] || '微信号'}}<br/></div>
                    </th>
                </tr>
                <tr>
                    <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['线上'] || '线上'}}</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['人工'] || '人工'}}<br/></div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                        <div class="cell">{{LANG['线上'] || '线上'}}</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                        <div class="cell">{{LANG['人工'] || '人工'}}</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['线上'] || '线上'}}<br/></div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                        <div class="cell">{{LANG['人工'] || '人工'}}</div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                        <div class="cell">{{LANG['线上'] || '线上'}}<br/></div>
                    </th>
                    <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                        <div class="cell">{{LANG['人工'] || '人工'}}</div>
                    </th>
                </tr>
                </thead>
                <tr v-for="(item,index) in dataModel">
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.user_name}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.truename}}</div>
                    </td>
                    <td colspan="2" class="el-table_1_column_19">
                        <div class="cell">{{item.created}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.agent_name}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.state}}</div>
                    </td>
                    <!--主钱包余额-->
                    <td class="el-table_1_column_19">
                        <div class="cell">{{(item.balance / 100).toFixed(2)}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.deposit_online_times || 0}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.deposit_manual_times || 0}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.deposit_online_money | formatMoney}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.deposit_manual_money | formatMoney}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.withdraw_times}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.withdraw_manual_times}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.withdraw_money | formatMoney}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.withdraw_manual_money | formatMoney}}</div>
                    </td>
                    <td colspan="2" class="el-table_1_column_19">
                        <div class="cell">
                            <p>{{item.deposit_last_time}}</p>
                        </div>
                    </td>
                    <td colspan="2" class="el-table_1_column_19">
                        <div class="cell">
                            <p>{{item.withdraw_last_time}}</p>
                        </div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.mobile}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.email}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.qq}}</div>
                    </td>
                    <td class="el-table_1_column_19">
                        <div class="cell">{{item.weixin}}</div>
                    </td>
                </tr>
                <tr v-if="dataModel.length > 0">
                    <td colspan="6" class="el-table_1_column_19">
                        <div class="cell">小计</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{subtotal.balance | formatMoney}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{subtotal.deposit_online_count}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{subtotal.deposit_manual_count}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{subtotal.deposit_online_price | formatMoney}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{subtotal.deposit_manual_price | formatMoney}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{subtotal.withdraw_online_count}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{subtotal.withdraw_manual_count}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{subtotal.withdraw_online_price | formatMoney}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{subtotal.withdraw_manual_price | formatMoney}}</div>
                    </td>
                    <td colspan="8" class="el-table_1_column_19"></td>
                </tr>
                <tr v-if="dataModel.length > 0">
                    <td colspan="6" class="el-table_1_column_19">
                        <div class="cell">总计</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{totals.balance | formatMoney}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{totals.deposit_online_count}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{totals.deposit_manual_count}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{totals.deposit_online_price | formatMoney}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{totals.deposit_manual_price | formatMoney}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{totals.withdraw_online_count}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{totals.withdraw_manual_count}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{totals.withdraw_online_price | formatMoney}}</div>
                    </td>
                    <td colspan="1" class="el-table_1_column_19">
                        <div class="cell">{{totals.withdraw_manual_price | formatMoney}}</div>
                    </td>
                    <td colspan="8" class="el-table_1_column_19"></td>
                </tr>
                <tr v-if="dataModel.length == 0"
                    style="line-height: 100px;text-align: center;background-color: #ffffff;">
                    <td colspan="22">
                        <div class="tCent">{{LANG['暂无数据'] || '暂无数据'}}</div>
                    </td>
                </tr>
            </table>
            <!--分页-->
            <el-col :span="24" class="toolbar mt20 pb pRight20" v-if="dataModel.length >0 "
                    style="text-align: right;">
                <el-pagination :current-page="currentPage" :page-sizes="[10, 20, 50,100,1000]" :page-size="pageSize"
                               layout="total, sizes, prev, pager, next, jumper"
                               :total="total" style="float:right" @size-change="doSizePage"
                               @current-change="doCurrentChange">
                </el-pagination>
            </el-col>
        </el-card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                baseUrl: "",
                LANG,
                dataModel: [],

                //总条数
                total: 0,
                //每次页条数
                pageSize: 20,
                //总页数
                pageCount: 0,
                //当前页
                subtotal: {
                    balance: 0,
                    deposit_manual_count: 0,
                    deposit_manual_price: 0,
                    deposit_online_count: 0,
                    deposit_online_price: 0,
                    withdraw_manual_count: 0,
                    withdraw_manual_price: 0,
                    withdraw_online_count: 0,
                    withdraw_online_price: 0
                },
                totals: {
                    balance: 0,
                    deposit_manual_count: 0,
                    deposit_manual_price: 0,
                    deposit_online_count: 0,
                    deposit_online_price: 0,
                    withdraw_manual_count: 0,
                    withdraw_manual_price: 0,
                    withdraw_online_count: 0,
                    withdraw_online_price: 0
                }
            }
        },
        props: {
            dataModelUrl: String,
        },
        methods: {
            init() {
                //总条数
                let total = this.total;
                //每次页条数
                let pageSize = this.pageSize;
                //总页数
                let pageCount = this.pageCount;
                let dataModel = this.dataModel;
                let _this = this;
                _this.baseUrl = _this.dataModelUrl;
                if (_this.dataModelUrl) {
                    let index = this.baseUrl.indexOf('?');
                    if (index === -1) {
                        this.baseUrl = this.baseUrl + "?page=" + (this.currentPage === 0 ? 1 : this.currentPage) + "&page_size=" + (pageSize === 0 ? 10 : pageSize);
                    } else {
                        let n = this.baseUrl.indexOf('page=');
                        if (/standard/g.test(this.baseUrl) || /fast/g.test(this.baseUrl)) {
//                                currentPage = currentPage;
                        } else {
                            this.currentPage = 1;
                        }
                        if (n > 0) {
                            this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + this.currentPage || 1);
                        } else {
                            this.baseUrl = this.baseUrl + "&page=" + (this.currentPage === 0 ? 1 : this.currentPage) + "&page_size=" + (pageSize === 0 ? 10 : pageSize);
                        }
                        let m = this.baseUrl.indexOf('page_size=');
                        if (m > 0) {
                            this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + (pageSize === 0 ? 10 : pageSize));
                        } else {
                            this.baseUrl = this.baseUrl + "&page_size=10";
                        }
                    }
                    this.$.autoAjax('get', this.baseUrl, '', {
                        ok: (res) => {
                            dataModel.splice(0, dataModel.length);
                            if (res.state == 0 && res.data) {
                                let tableDate = res.data.list || [];
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
                                    _this.total = res.attributes.total || 10;
                                    _this.pageSize = res.attributes.size || 10;
                                    _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
                                    _this.currentPage = parseInt(res.attributes.number) ? parseInt(res.attributes.number) : 1;
                                }
                                if (res.data.agent_info && res.data.agent_info.toString().length > 5) {
                                    this.$emit('get_agentinfo', {'data': res.data.agent_info});
                                } else {
                                    this.$emit('get_agentinfo', {'data': null});
                                }
                                for (let i in tableDate) {
                                    dataModel.push(tableDate[i])
                                }
                                let subtotal = res.data.subtotal || {};
                                for (let n in subtotal) {
                                    _this.subtotal[n] = subtotal[n];
                                }
                                let total = res.data.total || {};
                                for (let j in subtotal) {
                                    _this.totals[j] = total[j];
                                }
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                }
            },
            //处理操作公共按钮事件
            doHandle(row, fn) {
                this.$emit("do-handle", {
                    "event": event,
                    "row": row,
                    "fn": fn
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
                _this.dataModel.splice(0, _this.dataModel.length);
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
                        let tableDate = res.data.tableDemoDate || res.data || res.data.list ||  res.data.deposit || [];
                        if (tableDate.list) {
                            for (let i in tableDate.list) {
                                _this.dataModel.push(tableDate.list[i])
                            }
                        } else {
                            for (let i in tableDate) {
                                _this.dataModel.push(tableDate[i])
                            }
                        }
                        let subtotal = res.data.subtotal || {};
                        for (let n in subtotal) {
                            _this.subtotal[n] = subtotal[n];
                        }
                        let total = res.data.total || {};
                        for (let j in subtotal) {
                            _this.totals[j] = total[j];
                        }
                        _this.loading = false;
                    },
                    error: e => {
                        _this.loading = false;
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
                this.currentPage = v;
                let page = 0;
                let _this = this
                page = Math.ceil((pageSize * pageCount) / total) || 1;
                _this.dataModel.splice(0, _this.dataModel.length);
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
                        let tableDate = res.data.tableDemoDate || res.data.list ||  res.data.deposit || [];
                        if (tableDate.list) {
                            for (let i in tableDate.list) {
                                _this.dataModel.push(tableDate.list[i])
                            }
                        } else {
                            for (let i in tableDate) {
                                _this.dataModel.push(tableDate[i])
                            }
                        }
                        let subtotal = res.data.subtotal || {};
                        for (let n in subtotal) {
                            _this.subtotal[n] = subtotal[n];
                        }
                        let total = res.data.total || {};
                        for (let j in subtotal) {
                            _this.totals[j] = total[j];
                        }
                        _this.loading = false;
                    },
                    error: e => {
                        _this.loading = false;
                        _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                    }
                })
            }
        },
        watch: {
            //如果数据网址发生变化，就执行数据请求
            dataModelUrl: function (newval) {
                if (newval) {
                    this.init();
                }
            }
        },
        created() {
            this.init()
        },
        computed: {
            scrollClass: function () {
                return {
                    'scrollX': this.tableScroll
                }
            },
            tableWidth: function () {
                let width = document.body.clientWidth;
                return this.tableScroll ? 'width:' + (width - 270) + 'px' : ''
            }
        },
        mounted() {
            let _this = this;
            Bus.$on('form_query', function (v) {
                if (v) {
                    _this.init();
                }
            })
        },
        deactivated() {
            window.clearInterval(window.PAGEREF);
//            Bus.$off('form_query');
        }
    }
</script>
<style scoped>
    .cell {
        padding: 2px;
        font-size: 12px;
    }

    #tableUsers .el-table .cell {
        white-space: normal;
        word-break: break-word;
        line-height: 24px;
    }

    .el-table .cell .sucess_text {
        color: #13CE66
    }

    .el-table .cell .danger_text {
        color: #FF4949
    }

    .scrollX #tables {
        /*min-width: 1920px;*/
        overflow-x: auto;
        white-space: nowrap;
    }

    .scrollX #tables table {
        /*min-width: 1800px;*/
        overflow-x: auto;
        white-space: nowrap;
    }
</style>
