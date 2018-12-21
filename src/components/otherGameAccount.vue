<template>
    <div id="modelSet">
        <table border="0" class="el-table el-table__header el-table--border" style="width: 100%;">
            <thead>
                <tr>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="2">{{_('公司帐号')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="2">{{_('用户名')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="2">{{_('第三方游戏')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="2">{{_('状态')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="4" rowspan="1">{{_('投注信息')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="3" rowspan="1">{{_('转帐信息')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="2">{{_('最后更新时间')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="2">{{_('操作')}}</th>
                </tr>
                <tr>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{_('笔数')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{_('金额')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{_('平均额')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{_('输赢')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{_('转入')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{_('转出')}}</th>
                    <th class="el-table_1_column_36 is-leaf" colspan="1" rowspan="1">{{_('入-出')}}</th>
                </tr>
            </thead>
        </table>
        <table border="0" class="el-table__body el-table el-table--border" style="width: 100%;">
            <tr v-for="(item,k) in bodyModel">
                <td class="el-table_1_column_19" v-for="(col,index) in headModel">
                    <div class="cell" >
                        <span v-if="col.type != 'date' && col.type != 'state'">{{item[col.prop]}}</span>
                        <span v-if="col.type == 'date'">{{item[col.prop] | formatDate('yyyy-MM-dd HH:mm:ss') }}</span>
                        <span v-if="col.type == 'state'" :class="{ sucess: (item[col.prop] == 1), 'stop': (item[col.prop] == 0) }">{{item[col.prop] | formatState}}</span>
                        <div v-if="col.type == 'button'" v-for="btn in col.btnGroup" style="float:left;margin-left:5px;">
                            <el-button size="small" v-if="item[btn.prop] == btn.val" @click="doHandle(item,btn.fn)" :type="btn.btnType" v-text="btn.label"> </el-button>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
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
    export default{
        data(){
            return{
                bodyModel:[],
                headModel:[]
            }
        },
        props:{
            headModelUrl:String,
            bodyModelUrl:String
        },
        watch: {
            //如果数据网址发生变化，就执行数据请求
            bodyModelUrl: function (newQuestion) {
                this.init();
            }
        },
        methods:{
            //初始化
            init(){
                if(this.bodyModelUrl != "" && this.bodyModelUrl != null) {
                    let bodyurl = this.bodyModelUrl
                    let bodyModel = this.bodyModel

                    bodyModel.splice(0,bodyModel.length);
                    let _this = this

                    this.$.autoAjax('get',bodyurl,'', {
                        ok: (res) => {
                            let data = res.tableDemoDate
                            if(data.length > 0) {
                                for (let i in data) {
                                    bodyModel.push(data[i])
                                }
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
//                     this.$http.get(bodyurl,URLCONFIG).then((res) => {
//                             let data = res.data.tableDemoDate
//                             if(data.length > 0) {
//                             for (let i in data) {
//                                 bodyModel.push(data[i])
//                             }
//                         }
//                     }).catch((err)=>{
// //                        console.log(err)
//                     })
                }
                if(this.headModelUrl != "" && this.headModelUrl != null) {
                    let headModelUrl = this.headModelUrl
                    let headModel = this.headModel

                    headModel.splice(0,headModel.length);
                    let _this = this
                    debugger;

                    this.$.autoAjax('get',headModelUrl, '', {
                        ok: (res) => {
                            debugger;
                            let data = res.columns
                            if(data.length > 0){
                                for (let i in data) {
                                    headModel.push(data[i])
                                }
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
//                     this.$http.get(headModelUrl,URLCONFIG).then((res) => {
//                         debugger;
//                         let data = res.data.columns
//                         if(data.length > 0){
//                             for (let i in data) {
//                                 headModel.push(data[i])
//                             }
//                         }
//                     }).catch((err)=>{
// //                        console.log(err)
//                     })
                }

            }
        },
        created: function () {
            this.init()
        }
    }
</script>
<style>
    .el-table th,.el-table td{text-align: center}
    .sucess{color: rgb(0, 153, 102);}
    .stop{color: rgb(255, 0, 0);}
</style>
