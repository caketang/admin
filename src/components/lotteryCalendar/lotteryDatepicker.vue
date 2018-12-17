<template>
    <div id="lotteryDatePikcer">
        <div class="datePicker f_disselected" @mouseover="clearTimeWarpQue" >
            <div class="datePickerHead">
                <el-button type="info" icon="arrow-left" @click="preMonth">{{_('上一月')}}</el-button>
                <el-button type="text">{{year}}{{_('年')}}</el-button>
                <el-button type="text">{{month}}{{_('月')}}</el-button>
                <el-button type="info" icon="arrow-right" @click="nxtMonth" >{{_('下一月')}}</el-button>
            </div>
            <div class="datePickerBody">
                <p><span v-for="(weekday,index) in weekdayArry" class="weekday">{{ weekday }}</span></p>
                <p class="datePickerNum">
            <span
                    class="day"
                    :class="{ 'u_cf30': item.color, 'isToday': item.curDay}"
                    v-for="(item,index) in days"
                    @click="chooseDay(index)
            ">{{ item.dayNum }}</span>
                </p>
            </div>
        </div>
        <div class="datePickerInput">
            详情显示
        </div>
    </div>
</template>

<script>
    var curDate = new Date();
    var curYear = curDate.getFullYear()
    var curMonth = curDate.getMonth()
    var curDay = curDate.getDate()
    export default {
        data () {
            return {
                //当前选项卡名称
                setName:"",
                //日期当前月
                nowMonth:curMonth+1,
                nowYear:curYear,
                //系统年、月
                year: curYear,
                month: curMonth + 1,
                weekdayArry: ['日','一','二','三','四','五','六']
            }
        },
        computed: {
            days: function () {//生成当前月的日期数据
                const self = this;
                return getDayArry(self.year, self.month, this.hasChoosedDay)
            }
        },
        methods: {
            //选项卡点击
            handleClick(){
                if(this.setName == "lotteryDatepikcer"){
//                    console.log("取六合彩数据")
                }
                if(this.setName == "shengXiaoSet"){
                    let shengXiaoList=this.shengXiaoList
                    let updateForm=this.updateForm
                    for(let i in shengXiaoList){
                        for(let j in updateForm){
                            if(shengXiaoList[i].key == j){
                                updateForm[j]=shengXiaoList[i].str
                            }
                        }
                    }
//                    console.log("取生肖数据")
                }
            },
            clearTimeWarpQue: function () {
                clearTimeout(this.datePickerBoxTimer);
            },
            //----------- 切换月 START ---------------
            preMonth: function () {//上一月
                const isFirstMonth = this.month == 1;
                this.month = isFirstMonth ? 12 : this.month - 1;
                this.year = isFirstMonth ? this.year - 1 : this.year;
                if(this.nowYear >= this.year){
                    //判断是否需要请求数据
                }else{

                }
                this.isChoosed = this.highDay();
            },
            nxtMonth: function () {//下一月
                const isLastMonth = this.month == 12;
                this.month = isLastMonth ? 1 : +this.month + 1;
                this.year = isLastMonth ? +this.year + 1 : this.year;
                if(this.nowYear <= this.year){
                    if(this.month>this.nowMonth){
                        let str=this._('系统还未开奖,请选择上月查看开奖信息')
                        this.$message.error(str)
                    }

                }else{

                }
                this.isChoosed = this.highDay();
            },
            //计算当前日期是否高亮
            highDay: function(){
                if(!this.curDay) return curYear == this.year && curMonth == this.month - 1 && curDay == this.curDay
            },
            //保存生肖数据
            saveShenXiao(){
//                console.log("保存生肖数据")
            }
        }
    };
    //-------------------------月份数组拼接 START------------------------------------
    function getDayArry(year, month, hasChoosedDay) {
        //获取当前月天数数组
        var curMonthDays = getMonthDays(year,month)
        var preMonthDays = getMonthDays(year,month == 0 ? 11 : month - 1);
        // var nxtMonthDays = getMonthDays(month == 11 ? 0 : month + 1);
        var firstDay = getDayInWeek(year, (month - 1), 1); //当前月第一天是星期几
        var allDays =  Math.ceil((+curMonthDays + firstDay) / 7) * 7;
        var dayArry = [];
        for(var i = 1; i <= allDays; i++){
            var isPre = i <= firstDay;
            var isNxt = i > (firstDay + curMonthDays);
            var isCurMonth = !isPre && !isNxt;
            var day = isPre ? preMonthDays - firstDay + i : isNxt ? i - firstDay - curMonthDays : i - firstDay;
            dayArry.push({
                dayNum: day,
                isChoosed: !hasChoosedDay ? (curDay == (i - firstDay) && curMonth == (month - 1) && curYear == year) : hasChoosedDay == (i - firstDay),
                isSpecailDay: false,
                isCurMonth: isCurMonth,
                color: false
            })
        };
        return dayArry;
        $('body').on('blur', '.input', function(event) {
            var _self = $(this);
            var _val = _self.val();
            if(!_val || !isNaN(_val) || _val.indexOf('.') > 0){//判断是否为空，是否为数字，是否为小数
                //do something
                //
            }else if(_val > 9999){
                //do something
                //
            }else if(_val < 1){
                //do something
                //
            }
        });
    };
    function getMonthDays(year,month) {
        //获取某年某月有多少天
        if(!!!month) return;
        var tempDate = new Date(year, month, 0).getDate();
        return tempDate;
    };
    function getDayInWeek(year, month, day) {
        //返回某年某月某日是星期几
        if(!!!year || !!!month || !!!day || month - 1 < 0) return 0;
        var tempDate = new Date(year, month, day).getDay();
        return tempDate;
    };
    //-------------------------月份数组拼接 END------------------------------------
</script>

<style>
    .datePicker{width:78%;padding:20px;float:left}
    .datePickerHead {width:100%;background-color: #C0CCDA;border-radius: 5px;padding:20px 10px;text-align: right}
    .datePickerHead > span:hover{color: #333;}
    .datePickerBody span{display: inline-block;width:13%;font-size: 12px;margin-bottom: 5px;text-align: center;border-radius: 5px;background: #fff;margin-left: 1%;height: 100px;line-height: 100px;color: #999;}
    .datePickerBody .weekday{color: #666;}
    .datePickerInput {width:20%;margin-left:20px;float:left;height:748px;}
    .el-form .el-input{width:200px}
</style>