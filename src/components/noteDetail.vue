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
                        <td> <div class="cell" >{{tableData.pay_money|formatMoney}}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="cell" >{{LANG['彩票名称'] || '彩票名称'}}</div></td>
                        <td> <div class="cell" >{{tableData.lottery_name}}</div></td>
                        <td> <div class="cell" >{{LANG['有效投注'] || '有效投注'}}</div></td>
                        <td> <div class="cell" >{{tableData.valid_bet |formatMoney}}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="cell" >{{LANG['玩法'] || '玩法'}}</div></td>
                        <td> <div class="cell" >{{tableData.odds_type}}</div></td>
                        <td> <div class="cell" >{{LANG['赔率'] || '赔率'}}</div></td>
                        <td> <div class="cell" >{{tableData.odds | filterArray}}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="cell" >{{LANG['期号'] || '期号'}}</div></td>
                        <td> <div class="cell" >{{tableData.lottery_number}}</div></td>
                        <td> <div class="cell" >{{LANG['派彩金额'] || '派彩金额'}}</div></td>
                        <td> <div class="cell" >{{tableData.send_prize |formatMoney}}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="cell" >{{LANG['注数'] || '注数'}}</div></td>
                        <td> <div class="cell" >{{tableData.bet_num}}</div></td>
                        <td> <div class="cell" >{{LANG['倍数'] || '倍数'}}</div></td>
                        <td> <div class="cell" >{{tableData.times}}</div></td>
                    </tr>
                    <tr>
                        <td> <div class="cell" >{{LANG['状态'] || '状态'}}</div></td>
                        <td> <div class="cell" >{{tableData.status | filterStatus}}</div></td>
                        <td> <div class="cell" >{{LANG['输赢'] || '输赢'}}</div></td>
                        <td> <div class="cell" >{{tableData.lose_earn |formatMoney}}</div></td>
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
                    <tr>
                        <td > <div class="cell" >{{LANG['开奖号码'] || '开奖号码'}}</div></td>
                        <td colspan="3"> <div class="cell" >{{tableData.period_code}}</div></td>
                    </tr>
<!--                     <tr>
                        <td> <div class="cell" >{{LANG['投注金额'] || '投注金额'}}</div></td>
                        <td colspan="3"> <div class="cell" >{{tableData.pay_money | filterMoneyIsNull}}</div></td>
                    </tr> -->
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
        if(arr.length && arr.length > 1){
            return arr.join("/");
        }else {
            return arr[0]
        }
    })
    Vue.filter("filterStatus", function(value) {
        return value == "open" ? "已结算" : (value == "unopen" ? "未结算" : "已撤销")
    })
    export default{
        data(){
            return{
                LANG,
            }
        },
        props:{
            tableData:Array
        }
    }
</script>
