<template>
    <div id="CommissionSet">
        <el-col class="tRight" style="margin-bottom: 10px;">
            <el-button type="primary" size="small" class="addBut" @click="doRefresh">{{LANG['刷新'] || '刷新'}} </el-button>
        </el-col>
        <table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header el-table--border" style="width: 100%;" id="tables">
            <thead>
            <tr>
                <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                    <div class="cell">{{LANG['公司盈利金额'] || '公司盈利金额'}}</div>
                </th>
                <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                    <div class="cell" >{{LANG['当月有效会员数'] || '当月有效会员数'}}</div>
                </th>
                <th colspan="4" rowspan="1" class="el-table_1_column_36 is-leaf">
                    <div class="cell tCent">{{LANG['退佣比例（%）'] || '退佣比例（%）'}}</div>
                </th>
                <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                    <div class="cell" >{{LANG['有效投注额'] || '有效投注额'}}<br/></div>
                </th>
                <th colspan="4" rowspan="1" class="el-table_1_column_36 is-leaf">
                    <div class="cell tCent" >{{LANG['退水比例（%）'] || '退水比例（%）'}}</div>
                </th>
                 <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                    <div class="cell" >{{LANG['状态'] || '状态'}}</div>
                </th>
                <th colspan="2" rowspan="2" class="el-table_1_column_36 is-leaf">
                    <div class="cell" >{{LANG['最后更新时间'] || '最后更新时间'}}</div>
                </th>
                <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                    <div class="cell" >{{LANG['操作'] || '操作'}}</div>
                </th>
            </tr>
            <tr>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                    <div class="cell">{{LANG['体育'] || '体育'}}</div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                    <div class="cell">{{LANG['电子'] || '电子'}}</div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                    <div class="cell">{{LANG['彩票'] || '彩票'}}</div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                    <div class="cell">{{LANG['视讯'] || '视讯'}}</div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                    <div class="cell">{{LANG['体育'] || '体育'}}</div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                    <div class="cell">{{LANG['电子'] || '电子'}}</div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                    <div class="cell">{{LANG['彩票'] || '彩票'}}</div>
                </th>
                <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                    <div class="cell">{{LANG['视讯'] || '视讯'}}</div>
                </th>
            </tr>

            </thead>
            <tr v-for="item in tableDataList">
                <td><div class="cell">{{item.earn_start |formatMoney}}</div></td>
                <td>  <div class="cell">{{item.valid_user}}</div></td>
                <td> <div class="cell">{{item.sport_bkge}}</div></td>
                <td> <div class="cell">{{item.game_bkge}}</div></td>
                <td> <div class="cell">{{item.lottery_bkge}}</div></td>
                <td> <div class="cell">{{item.video_bkge}}</div></td>
                <td> <div class="cell">{{item.valid_bet_start | formatMoney}}</div></td>
                <td><div class="cell">{{item.sport_rebet}}</div></td>
                <td><div class="cell">{{item.game_rebet}}</div></td>
                <td> <div class="cell">{{item.lottery_rebet}}</div></td>
                <td> <div class="cell">{{item.video_rebet}}</div></td>
                <td><div class="cell" :class="{sucess_text:item.status == '1',danger_text:item.status == '0'}">{{item.status == "1"?'启用':'停用'}}</div></td>
                <td colspan="2"><div class="cell">{{item.updated}}</div></td>

                <td class="el-table_1_column_19" >
                    <div class="btn cell" style="padding-left:13px;">
                        <div class="fl" style="margin-left:5px">
                            <el-button size="small" @click="doHandle(item, 'doEdit')" type="text">修改</el-button>
                        </div>
                        <div class="fl" style="margin-left:5px">
                            <el-button size="small" class="mf" v-if="item.status == '0'" @click="doHandle(item, 'doEnabled')" type="text" >启用</el-button>
                        </div>
                        <div class="fl" style="margin-left:5px">
                            <el-button size="small" class="mf" v-if="item.status == '1'" @click="doHandle(item, 'doDisabled')" type="text" >停用</el-button>
                        </div>
                        <div class="fl" style="margin-left:5px">
                            <el-button size="small"  class="mf" @click="doHandle(item, 'doDelete')" type="text">删除</el-button>
                        </div>

                    </div>
                </td>
            </tr>
             <tr v-if="tableDataList.length == 0" style="text-align:center;height: 100px;">
                <td colspan="15">暂无数据</td>
            </tr>

        </table>

        <el-col :span="24" class="toolbar mt20" v-if="tableDataList.length >0 "
                style="position:relative;">
            <el-pagination :current-page="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="pageSize"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="total" style="float:right" @size-change="doSizePage"
                           @current-change="doCurrentChange">
            </el-pagination>
        </el-col>
    </div>
</template>
<script>
    import Vue from 'vue'
    Vue.filter("formatSex",function(v,arr){
        if(arr.length>0){
            for(var i=0;i<arr.length;i++){
                if(arr[i].value == v){
                    return arr[i].text
                }
            }
        }
    });
    Vue.filter("formatDate",function (v,format) {
        let t = new Date(v);
        let tf = function(i){return (i < 10 ? '0' : '') + i};
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
            switch(a){
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
    export default{
        data(){
            return{
                LANG,
                tableDataList:[],
                baseUrl: "",
                columnList:[],
                //分页相关
                //总页数
                total: 0,
                //一页多少条
                pageSize: 10,
                //共多少页
                pageCount: 1,
                // 当前页
                currentPage: 1
            }
        },
        props:{
           tableUrl:String,
            flag:true,
            updated:{
                type: Boolean,
                default: false
            },
            pageSet:{
                type:Boolean,
                default: true
            }
        },
        methods: {
            init(){
                let _this=this;
                this.baseUrl = this.tableUrl;
                let baseUrl = this.baseUrl;
                if (this.pageSet) {
                    let index = this.baseUrl.indexOf('?');
                    if (index === -1) {
                        this.baseUrl = this.baseUrl + "?page=" + (this.currentPage || 1) + "&page_size=" + (this.pageSize || 10);
                    } else {
                        let n = this.baseUrl.indexOf('page=');
                        if (n > 0) {
                            this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + this.currentPage || 1);
                        } else {
                            this.baseUrl = this.baseUrl + "&page=" + (this.currentPage || 1) + "&page_size=" + (this.pageSize || 10);
                        }
                        let m = this.baseUrl.indexOf('page_size=');
                        if (m > 0) {
                            this.baseUrl = this.baseUrl.replace(/page_size=\d+/, "page_size=" + (this.pageSize || 10));
                        } else {
                            this.baseUrl = this.baseUrl + "&page_size=" + 10;
                        }
                    }
                }
                _this.tableDataList.splice(0,_this.tableDataList.length)
                _this.columnList.splice(0,_this.columnList.length)
                let columnList=_this.columnList;
                if((this.baseUrl !="") && (this.baseUrl != undefined)){

                    this.$.autoAjax('get',this.baseUrl, '', {
                        ok: (res) => {
                            _this.total = res.attributes.total || 10;
                            _this.pageSize = res.attributes.size || 10;
                            _this.pageCount = Math.ceil(this.total / this.pageSize);
                            _this.currentPage = res.attributes.number || 1;

                            let  tableDate = res.data || res.list || [];
                            for(let i in tableDate){
                                _this.tableDataList.push(tableDate[i])
                            }
                            if (tableDate) {
                                _this.$emit("get-table-data", {

                                    "item": tableDate,

                                });
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
//                     this.$http.get(this.baseUrl,URLCONFIG).then((res) => {
//                        _this.total = res.data.attributes.total || 10;
//                         _this.pageSize = res.data.attributes.size || 10;
//                         _this.pageCount = Math.ceil(this.total / this.pageSize);
//                         _this.currentPage = res.data.attributes.number || 1;
//
//                         let  tableDate = res.data.data || res.data.list || [];
//                         for(let i in tableDate){
//                             _this.tableDataList.push(tableDate[i])
//                         }
//                         if (tableDate) {
//                         _this.$emit("get-table-data", {
//
//                             "item": tableDate,
//
//                         });
//                     }
//                     }).catch(function (err) {
// //                        console.log(err)
//                     })
                }

            },
            //表格按钮事件
            doHandle(row,fn){
                this.$emit("do-handle", {
                    "event": event,
                    "row": row,
                    "fn":fn
                });
            },
            //  刷新
            doRefresh(){
                this.init();
            },
            //设置每页条数据
            doSizePage(v){
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
                        this.baseUrl = this.baseUrl.replace(/page=\d+/, "page=" + this.currentPage);
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

                this.$.autoAjax('get',this.baseUrl,  '', {
                    ok: (res) => {
                        _this.total = res.attributes.total || 10;
                        _this.pageSize = res.attributes.size || 10;
                        _this.pageCount = Math.ceil(this.total / this.pageSize);
                        _this.currentPage = 1;
                        let tableDate = res.data || res.data.list || res.data.data || [];
                        for (let i in tableDate) {
                            _this.tableDataList.push(tableDate[i])
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
                //     _this.total = res.data.attributes.total || 10;
                //     _this.pageSize = res.data.attributes.size || 10;
                //     _this.pageCount = Math.ceil(this.total / this.pageSize);
                //     _this.currentPage = 1;
                //     let tableDate = res.data.data || res.data.data.list || res.data.data.data || [];
                //     for (let i in tableDate) {
                //         _this.tableDataList.push(tableDate[i])
                //     }
                // })
            },
            //切换页数
            doCurrentChange(v){
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

                this.$.autoAjax('get',this.baseUrl, '', {
                    ok: (res) => {
                        _this.total = res.attributes.total || 10;
                        _this.pageSize = res.attributes.size || 10;
                        _this.pageCount = Math.ceil(this.total / this.pageSize);
                        _this.currentPage = res.attributes.number || 1;
                        let tableDate = res.tableDemoDate || res.data || res.data.list || res.data.data || res.data.deposit || [];
                        for (let i in tableDate) {
                            _this.tableDataList.push(tableDate[i])
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.get(this.baseUrl, URLCONFIG).then((res) => {
                //     _this.total = res.data.attributes.total || 10;
                //     _this.pageSize = res.data.attributes.size || 10;
                //     _this.pageCount = Math.ceil(this.total / this.pageSize);
                //     _this.currentPage = res.data.attributes.number || 1;
                //     let tableDate = res.data.tableDemoDate || res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
                //     for (let i in tableDate) {
                //         _this.tableDataList.push(tableDate[i])
                //     }
                // })
            },
        },
        watch: {
            updated:function (newval) {
                if(newval){
                    this.init();
                }
            }
        },
        computed:{
        },
        mounted(){
        },
        created(){
            this.init();
        }
    }
</script>
<style scoped lang="less">
    .btn{
        text-align: center;
        .mf{
            margin-left:0;
        }
    }
    .el-table .sucess_text {
        color: #13CE66
    }
    .el-table .danger_text {
        color: #FF4949
    }
</style>
