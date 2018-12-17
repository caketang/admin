<template>
    <div id="noteDetail">
        <el-row>
            <el-col :span="24">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header" style="width: 100%;">
                    <tr>
                        <th colspan="4" rowspan="1" class="is-leaf" >
                            <div class="cell" >{{LANG['注单号：'] || '注单号：'}}{{tableData.order_number}}</div>
                        </th>
                    </tr>
                    <tr>
                        <td> <div class="cell" >{{LANG['用户名'] || '用户名'}}</div></td>
                        <td> <div class="cell" >{{tableData.user_name}}</div></td>
                        <td> <div class="cell" >{{LANG['上级代理'] || '上级代理'}}</div></td>
                        <td> <div class="cell" >{{tableData.agent_name}}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="cell" >{{LANG['投注时间'] || '投注时间'}}</div></td>
                        <!--<td> <div class="cell" >{{tableData.tztime | formatDate('yyyy-MM-dd HH:mm:ss') }} </div></td>-->
                        <td> <div class="cell" >{{tableData.created | formatDate('yyyy-MM-dd HH:mm:ss') }} </div></td>
                        <td> <div class="cell" >{{LANG['投注金额'] || '投注金额'}}</div></td>
                        <td> <div class="cell" >{{tableData.pay_money/100}}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="cell" >{{LANG['彩票名称'] || '彩票名称'}}</div></td>
                        <td> <div class="cell" >{{tableData.lottery_name}}</div></td>
                        <td> <div class="cell" >{{LANG['有效投注'] || '有效投注'}}</div></td>
                        <td> <div class="cell" >{{tableData.valid_bet /100}}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="cell" >{{LANG['玩法'] || '玩法'}}</div></td>
                        <td> <div class="cell" >{{tableData.play_type1_name}}</div></td>
                        <td> <div class="cell" >{{LANG['赔率'] || '赔率'}}</div></td>
                        <td> <div class="cell" >{{tableData.odds | filterArray }}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="cell" >{{LANG['期号'] || '期号'}}</div></td>
                        <td> <div class="cell" >{{tableData.lottery_number}}</div></td>
                        <td> <div class="cell" >{{LANG['派彩金额'] || '派彩金额'}}</div></td>
                        <td> <div class="cell" >{{tableData.send_prize /100}}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="cell" >{{LANG['状态'] || '状态'}}</div></td>
                        <td> <div class="cell" >{{tableData.state | filterStatus}}</div></td>
                        <td> <div class="cell" >{{LANG['输赢'] || '输赢'}}</div></td>
                        <td> <div class="cell" >{{tableData.lose_earn/100}}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="cell" >{{LANG['来源'] || '来源'}}</div></td>
                        <td> <div class="cell" >{{tableData.origin | filterOrign}}</div></td>
                        <td> <div class="cell" >{{LANG['所属追号'] || '所属追号'}}</div></td>
                        <td> <div class="cell" >{{tableData.chase_number}}</div></td>
                    </tr>
                    <tr>
                        <td > <div class="cell" >{{LANG['投注内容'] || '投注内容'}}</div></td>
                        <td colspan="3"> <div class="cell" >{{tableData.play_number}}</div></td>
                    </tr>
                </table>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import  Vue from 'vue'
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
    Vue.filter("filterOrign", function(value) {
        return value == "1" ? "pc" : (value == '2' ? "h5" : "app");
    })
    Vue.filter("filterArray", function(arr) {
        if(arr && arr.length > 1){
            return arr.join("/");
        }else if(arr && arr.length === 1){
            return arr[0]
        }
    })
    Vue.filter("filterStatus", function(value) {
        let data;
        switch (value){
            case 'open':
                data = '已开奖'
                break;
            case 'winning':
                data = '已中奖'
                break;
            case 'fast':
                data = '快速玩法'
                break;
            case 'canceled':
                data = '撤销'
                break;
        }
        return data;
    })
    export default{
        data(){
            return{
                LANG,
            }
        },
        props:['tableData'],
        created(){
        },
        mounted(){

        },
        watch:{
            tableData:function () {}
        }
    }
</script>
