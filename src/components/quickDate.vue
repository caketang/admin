<template>
    <div>
        <el-button size="small" v-for="(item,key) in quickDate" :key="item.id" :plain="true" type="primary" @click="change(item.key,key)" :class="{ btn_active: item.isActive }">{{LANG[item.text] || item.text}}</el-button>
        <span style="display:none">{{isReset}}</span>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                LANG,
                //玩法选中状态
                playType:[],
                //开始时间
                sDate:"",
                //结束时间
                eDate:"",
                //快捷日期数据
                quickDate:[
                    {key:"yesterday",text: '昨日',isActive:false,id:"1"},
                    {key:"today",text: '今日',isActive:false,id:"2"},
                    {key:"thisweek",text: '本周',isActive:false,id:"3"},
                    {key:'lastweek',text:'上周',isActive:false,id:"4"},
                    {key:"thismonth",text: '本月',isActive:false,id:"5"},
                    {key:"lastmonth",text: '上月',isActive:false,id:"6"}
                ]
            }
        },
        props:{
            reSet:false,
            defaultId:{
                type:String
            },
            showTimes: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            isReset: function () {
                if(this.reSet){
                    this.resetBtn()
                }
                return false
            }
        },
        methods:{
            //获取日期
            getDate(dates){
                var dd = new Date(sessionStorage.sysTime)
                dd.setDate(dd.getDate()+dates)
                var y = dd.getFullYear()
                var m = this.formatday(dd.getMonth()+1)
                var d = this.formatday(dd.getDate())
                return y+"-"+m+"-"+d
            },
            //获取周的天数
            getmonday(){
                    var d = new Date(sessionStorage.sysTime)
                    var year = d.getFullYear()
                    var month = this.formatday(d.getMonth()+1)
                    var date = this.formatday(d.getDate())

                    // 周
                    var day=d.getDay()
                    var monday = day!=0?day-1:6 // 本周一与当前日期相差的天数

                    return monday
            },
            //获取月
            getMonth(type,months){
                    var d = new Date(sessionStorage.sysTime);
                    var year = d.getFullYear();
                    var month = this.formatday(d.getMonth()+1)
                    if(months!=0){
                        // 如果本月为12月，年份加1，月份为1，否则月份加1。
                        if(month==12 && months>0){
                            year++;month=1;
                        }else if(month==1 && months<0){
                            year--;month=12;
                        }else{
                            month = parseInt(month) + parseInt(months);
                        }
                    }
                    var date = d.getDate();
                    var firstday=year+"-"+ (months === 0 ? this.formatday(month) : this.formatday(month))+"-01";
                    var lastday="";
                    if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
                        lastday = year+"-"+  (months === 0 ? month :this.formatday(month))+"-"+31;
                    }else if(month==2){
                        // 判断是否为闰年（能被4整除且不能被100整除 或 能被100整除且能被400整除）
                        if((year%4==0 && year%100 !=0)||(year%100 ==0 && year%400 ==0)){
                            lastday = year+"-"+ (months === 0 ? month :this.formatday(month))+"-"+29;
                        }else{
                            lastday = year+"-"+ (months === 0 ? month :this.formatday(month))+"-"+28;
                        }
                    }else{
                        lastday = year+"-"+ (months === 0 ? month :this.formatday(month))+"-"+30;
                    }
                    var day = "";
                    if(type=="s"){
                        day = firstday;
                    }else{
                        day = lastday;
                    }
                    return day;
            },
            //获取年
            getYears(type,years){
                    var d = new Date(sessionStorage.sysTime)
                    var year = d.getFullYear();

                    var fd = (year+years)+"-01-01"
                    var ed = (year+years)+"-12-31"

                    var yr = "";
                    if(type=="s"){
                        yr = fd;
                    }else{
                        yr = ed;
                    }
                    return yr;
            },
            //按钮重置
            resetBtn(key){
                let quickDate=this.quickDate
                for(let i in quickDate){
                    if(key && (quickDate[i].key == key)){
                        quickDate[i].isActive=true
                    }else{
                        quickDate[i].isActive=false
                    }
                }
            },
            // 小于10拼上0
            formatday (i) {
                return (parseInt(i) < 10 ? '0' : '') + parseInt(i);
            },
            //日期计算
            change(str){
                this.resetBtn(str)
                switch(str) {
                    //昨天
                    case 'yesterday':
                        this.sDate = this.showTimes ? this.getDate(-1) + ' 00:00:00' : this.getDate(-1);
                        this.eDate = this.showTimes ? this.getDate(-1) + ' 23:59:59' : this.getDate(-1);
                        this.returnDate()
                        break
                    //今天
                    case 'today':
                        this.sDate = this.showTimes ? this.getDate(0) + ' 00:00:00' : this.getDate(0);
                        this.eDate = this.showTimes ? this.getDate(0) + ' 23:59:59' : this.getDate(0);
                        this.returnDate()
                        break
                    //本周
                    case 'thisweek':
                        this.sDate = this.showTimes ? this.getDate(-this.getmonday()) + ' 00:00:00' : this.getDate(-this.getmonday());
                        this.eDate = this.showTimes ? this.getDate(-this.getmonday()+6) + ' 23:59:59' : this.getDate(-this.getmonday()+6);
                        this.returnDate()
                        break
                    //上周
                    case 'lastweek':
                        this.sDate = this.showTimes ? this.getDate(-this.getmonday()-7) + ' 00:00:00' : this.getDate(-this.getmonday()-7);
                        this.eDate = this.showTimes ? this.getDate(-this.getmonday()-1) + ' 23:59:59' : this.getDate(-this.getmonday()-1);
                        this.returnDate()
                        break
                    //本月
                    case 'thismonth':
                        this.sDate = this.showTimes ? this.getMonth("s",0) + ' 00:00:00' : this.getMonth("s",0);
                        this.eDate = this.showTimes ? this.getMonth("e",0) + ' 23:59:59' : this.getMonth("e",0);
                        this.returnDate()
                        break
                    //上月
                    case 'lastmonth':
                        this.sDate = this.showTimes ? this.getMonth("s",-1) + ' 00:00:00' : this.getMonth("s",-1);
                        this.eDate = this.showTimes ? this.getMonth("e",-1) + ' 23:59:59' : this.getMonth("e",-1);
                        this.returnDate()
                        break
                    //本年
                    case 'thisyear':
                        this.sDate = this.showTimes ? this.getYears("s",0) + ' 00:00:00' : this.getYears("s",0);
                        this.eDate = this.showTimes ? this.getYears("e",-1) + ' 23:59:59' : this.getYears("e",-1);
                        this.returnDate()
                        break
                }
            },
            //返回选中数据
            returnDate(){
                this.$emit("get-day", {
                    "sday": this.sDate,
                    "eday":this.eDate
                });
            },
            init(){
               if(this.defaultId){
                   let data = this.quickDate[this.defaultId-1];
                   this.change(data.key,this.defaultId-1)
               }
            }
        },
        mounted(){
            this.init();
        }
    }
</script>
