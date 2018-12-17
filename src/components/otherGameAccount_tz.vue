<template>
    <div id="modelSet" v-loading="loading">
        <table border="0" class="el-table el-table__header el-table--border el-table__header-wrapper" style="width: 100%;">
            <thead>
            <tr>
                <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="2" >{{LANG['用户名'] || '用户名'}}</th>
                <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="2" >{{LANG['第三方游戏'] || '第三方游戏'}}</th>
                <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="2" >{{LANG['第三方帐户名称'] || '第三方帐户名称'}}</th>

                <th class="el-table_1_column_36 is-leaf" colspan="4" rowspan="1" >{{LANG['投注信息'] || '投注信息'}}</th>
                <th class="el-table_1_column_36 is-leaf" colspan="3" rowspan="1">{{LANG['转帐信息'] || '转帐信息'}}</th>
                <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="2" width="180px">{{LANG['最后更新时间'] || '最后更新时间'}}</th>

            </tr>
            <tr>
                <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{LANG['笔数'] || '笔数'}}</th>
                <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{LANG['金额'] || '金额'}}</th>
                <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{LANG['平均额'] || '平均额'}}</th>
                <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{LANG['输赢'] || '输赢'}}</th>
                <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{LANG['转入'] || '转入'}}</th>
                <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{LANG['转出'] || '转出'}}</th>
                <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{LANG['入-出'] || '入-出'}}</th>
            </tr>
            </thead>
            <tr v-for="(item,k) in bodyModel">

                <td class="el-table_1_column_19" v-for="(col,index) in headModel" v-if="col.disabled">
                    <div class="cell" >
                      <span v-if="col.type != 'date' && col.type != 'state' && col.type !='object'">{{item[col.prop]}}</span>
                    <span v-if="col.type == 'date'">{{item[col.prop] | formatDate('yyyy-MM-dd HH:mm:ss') }}</span>
                     <span v-if="col.type == 'state'" :class="{ sucess: (item[col.prop] == 1), 'stop': (item[col.prop] == 0) }">{{item[col.prop] | formatState}}</span>
                     <div v-if="col.type == 'button'" v-for="btn in col.btnGroup" style="float:left;margin-left:5px;">-->
                          <el-button size="small" v-if="item[btn.prop] == btn.val" @click="doHandle(item,btn.fn)" :type="btn.btnType" v-text="btn.label"> </el-button>
                     </div>
                        <div v-if="col.type == 'object'">
                            <span v-if="col.prop == 'bet_times'">{{item[col.prop]}}</span>
                            <span v-if="col.prop == 'bet_money'">{{parseInt(item[col.prop])>0?parseInt(item[col.prop])/100 : 0}}</span>
                            <span v-if="col.prop == 'in_money'">{{parseInt(item[col.prop])>0?parseInt(item[col.prop])/100 : 0}}</span>
                            <span v-if="col.prop == 'out_money'">{{parseInt(item[col.prop])>0?parseInt(item[col.prop])/100 : 0}}</span>
                            <span v-if="col.prop == 'in_out'">{{(parseInt(item['in_money'])>0?parseInt(item['in_money'])/100 : 0) - (parseInt(item['out_money'])>0?parseInt(item['out_money'])/100 : 0)}}</span>
                            <span v-if="col.prop == 'lose_earn'">{{parseInt(item[col.prop])>0?parseInt(item[col.prop])/100 : 0}}</span>
                           <span v-if="col.prop == 'amount_avg'">{{(parseInt(item['bet_money']) / parseInt(item['bet_times'])/100) | formatNumber }}</span>

                        </div>
                    </div>
                </td>
            </tr>
        </table>
        <!--分页-->
        <el-col :span="24" class="toolbar mt20" v-if="bodyModel.length >0 "
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
    import  Vue from 'vue'
    //转换启用停用
    Vue.filter("formatState",function(v){
        return v == 1?'启用':"停用"
    });
    //转换日期
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
    Vue.filter("formatNumber",function (v) {
        return parseFloat(v).toFixed(2);
    })
    export default{
        data(){
            return{
                LANG,
                bodyModel:[],
                headModel:[],
                //分页相关
                //总页数
                total: 0,
                //一页多少条
                pageSize: 0,
                //共多少页
                pageCount: 1,
                // 当前页
                currentPage: 1,
                loading: false
            }
        },
        props:{
            headModelUrl:String,
            bodyModelUrl:String,
            username:String,
            optType:String,
            updated:{
                type:Boolean,
                default: false,
            }
        },
        watch: {
            //如果数据网址发生变化，就执行数据请求
            bodyModelUrl: function (newQuestion) {
                this.init();
            },
            //通过用户名查询数据
//            username:function (newval) {
//                this.init();
//            },
            //修改数据后刷新数据
            optType:function (newval) {
                if(newval == '启用'  || newval == '停用'){
                    this.init();
                }
            },
           /* updated(newval){
                if(newval)
                {
                    this.init();
                }
            }*/
        },
        methods:{
            //初始化
            init(){
                if(this.bodyModelUrl != "" && this.bodyModelUrl != null) {
                    this.loading = true;
                    let bodyurl = this.bodyModelUrl;
                    let bodyModel = this.bodyModel;
                    let currentPage = this.currentPage;
                    let pageSize = this.pageSize;
                    // 处理分页
                    let index = bodyurl.indexOf('?');
                    if (index === -1) {
                        bodyurl = bodyurl + "?page=" + (currentPage || 1) + "&page_size=" + (pageSize || 10);
                    } else {
                        let n = bodyurl.indexOf('page=');
                        if (n > 0) {
                            bodyurl = bodyurl.replace(/page=\d+/, "page=" + currentPage || 1);
                        } else {
                            bodyurl = bodyurl + "&page=" + (currentPage || 1) + "&page_size=" + (pageSize || 10);
                        }
                        let m = bodyurl.indexOf('page_size=');
                        if (m > 0) {
                            bodyurl = bodyurl.replace(/page_size=\d+/, "page_size=" + (pageSize || 10));
                        } else {
                            bodyurl = bodyurl + "&page_size=" + 10;
                        }
                    }

                    bodyModel.splice(0,bodyModel.length);
                    let _this = this;
                    this.$http.get(bodyurl,URLCONFIG).then((res) => {
                        if (res.data.attributes) {
                            _this.total = res && res.data && res.data.attributes && res.data.attributes.total || 10;
                            _this.pageSize = res && res.data && res.data.attributes &&  res.data.attributes.size || 10;
                            _this.pageCount = Math.ceil(_this.total / _this.pageSize) ? Math.ceil(_this.total / _this.pageSize) : 1;
                            _this.currentPage = parseInt(res.data.attributes.number) ? parseInt(res.data.attributes.number) : 1;
                        }
                        let data = res.data.data?res.data.data:[];
                        if(data.length > 0){
                            ;
                            for (let i in data) {
                                bodyModel.push(data[i])

                            }
                        }
                        _this.loading = false;
                    }).catch((e)=>{
                        _this.loading = false;
                        _this.$message.error(LANG['未知错误， 请稍后重试！'] || '未知错误， 请稍后重试！');
                    })
                }
                if(this.headModelUrl != "" && (this.headModelUrl != undefined)) {
                    let headModelUrl = this.headModelUrl
                    let headModel = this.headModel
                    let _this = this;
                    this.$http.get(headModelUrl,URLCONFIG).then((res) => {
                        headModel.splice(0, headModel.length);

                        let data = res.data.columns ? res.data.columns : [];
                        if(data.length > 0){

                            for (let i in data) {
                                headModel.push(data[i])
                            }
                        }
                    }).catch((e)=>{
                        _this.$message.error(LANG['未知错误， 请稍后重试！'] || '未知错误， 请稍后重试！');
                    })
                }

            },
            doHandle(row,fn){
                this.$emit("do-handle", {
                    "event": event,
                    "row": row,
                    "fn":fn
                });
            },
            //切换每页条数
            doSizePage(v){
                this.loading =true;
                let total = this.total;
                let pageSize = this.pageSize;
                let pageCount = this.pageCount;
                let page = 0;
                let _this = this;
                let bodyModelUrl = this.bodyModelUrl;
                page = Math.ceil((pageSize * pageCount) / total) || 1;
                this.bodyModel.splice(0,this.bodyModel.length);
                let index = bodyModelUrl.indexOf('?');
                if (index === -1) {
                    bodyModelUrl = bodyModelUrl + "?page=1&page_size=" + v;
                } else {
                    let n = bodyModelUrl.indexOf('page=');
                    if (n > 0) {
                        bodyModelUrl = bodyModelUrl.replace(/page=\d+/, "page=" + this.currentPage);
                    } else {
                        bodyModelUrl = bodyModelUrl + "&page=1&page_size=" + v;
                    }
                    let m = bodyModelUrl.indexOf('page_size=');
                    if (m > 0) {
                        bodyModelUrl = bodyModelUrl.replace(/page_size=\d+/, "page_size=" + v);
                    } else {
                        bodyModelUrl = bodyModelUrl + "&page_size=" + 10;
                    }
                }
                this.$http.get(bodyModelUrl, URLCONFIG).then((res) => {
                    _this.total = res.data.attributes.total || 10;
                    _this.pageSize = res.data.attributes.size || 10;
                    _this.pageCount = Math.ceil(this.total / this.pageSize);
                    _this.currentPage = 1;
                    let tableDate = res.data.data || res.data.data.list || res.data.data.data || [];
                    for (let i in tableDate) {
                        _this.bodyModel.push(tableDate[i])
                    }
                    _this.loading = false;
                }).catch((e)=>{
                    _this.loading = false;
                    _this.$message.error(LANG['未知错误， 请稍后重试！'] || '未知错误， 请稍后重试！');
                })

            },
            //切换页数
            doCurrentChange(v){
                this.loading = true;
                let total = this.total;
                let pageSize = this.pageSize;
                let pageCount = this.pageCount;
                this.currentPage = v;
                let page = 0;
                let _this = this;
                let bodyModelUrl = this.bodyModelUrl;
                page = Math.ceil((pageSize * pageCount) / total) || 1;
                this.bodyModel.splice(0,this.bodyModel.length);
                let index = bodyModelUrl.indexOf('?');
                if (index === -1) {
                    bodyModelUrl = bodyModelUrl + "?page=" + v + "&page_size=" + this.pageSize;
                } else {
                    let n = bodyModelUrl.indexOf('page=');
                    if (n > 0) {
                        bodyModelUrl = bodyModelUrl.replace(/page=\d+/, "page=" + v);
                    } else {
                        bodyModelUrl = bodyModelUrl + "&page=" + v + "&page_size=" + this.pageSize;
                    }
                    let m = bodyModelUrl.indexOf('page_size=');
                    if (m > 0) {
                        bodyModelUrl = bodyModelUrl.replace(/page_size=\d+/, "page_size=" + this.pageSize);
                    } else {
                        bodyModelUrl = bodyModelUrl + "&page_size=" + 10;
                    }
                }
                this.$http.get(bodyModelUrl, URLCONFIG).then((res) => {
                    _this.total = res.data.attributes.total || 10;
                    _this.pageSize = res.data.attributes.size || 10;
                    _this.pageCount = Math.ceil(this.total / this.pageSize);
                    _this.currentPage = res.data.attributes.number || 1;
                    let tableDate = res.data.data || res.data.data.list || res.data.data.data || res.data.data.deposit || [];
                    for (let i in tableDate) {
                        _this.bodyModel.push(tableDate[i])
                    }
                    _this.loading = false;
                }).catch((e)=>{
                    _this.loading = false;
                    _this.$message.error(LANG['未知错误， 请稍后重试！'] || '未知错误， 请稍后重试！');
                })
            },
        },
        created () {
            this.init()
        }
    }
</script>
<style>
    .el-table th,.el-table td{text-align: center}
    .sucess{color: rgb(0, 153, 102);}
    .stop{color: rgb(255, 0, 0);}
</style>
