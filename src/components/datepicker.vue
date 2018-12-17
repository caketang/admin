<template>
  <div class="block">
    <el-col :span="11">
      <el-date-picker
              v-model="Sdate.date_from"
              align="left"
              type="date"
              :placeholder="LANG['选择日期'] || '选择日期'"
              :picker-options="pickerOptions"
              @change="changestart" size="small">
      </el-date-picker>
    </el-col>
    <el-col class="line" :span="2" style="padding-left:5px;">-</el-col>
    <el-col :span="11">
      <el-date-picker
              v-model="Sdate.date_to"
              align="left"
              type="date"
              :placeholder="LANG['选择日期'] || '选择日期'"
              :picker-options="pickerOptions"
              @change="changeend" size="small">
      </el-date-picker>
    </el-col>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                LANG,
//                pickerOptions: {
//                    shortcuts: [{
//                        text: '今天',
//                        onClick(picker) {
//                            picker.$emit('pick', new Date());
//                        }
//                    }, {
//                        text: '昨天',
//                        onClick(picker) {
//                            const date = new Date();
//                            date.setTime(date.getTime() - 3600 * 1000 * 24);
//                            picker.$emit('pick', date);
//                        }
//                    }]
//                }
            };
        },
        props:{
            label:String,
            Sdate:{
                type:Object,
                default:{
                    "date_from":"",
                    "date_to":""
                }

            }
        },
        methods:{
            //开始时间
            changestart(){
                this.date_from=this.formatDate(this.date_from,'yyyy-MM-dd HH:mm:ss');
            },
            //结束时间
            changeend(){
                if(this.Sdate.date_from == ""){
                    this.$message.error(LANG['开始时间必需选择'] || '开始时间必需选择');
                }
                this.date_to=this.formatDate(this.Sdate.date_to,'yyyy-MM-dd HH:mm:ss');
                var result=this.DateComparison(this.Sdate.date_from,this.Sdate.date_to);
                if(!result){
                    this.$message.error(LANG['结束时间必需大于开始时间'] || '结束时间必需大于开始时间');
                    let _this=this;
                    setTimeout(() => {
                        _this.Sdate.date_to="";
                    }, 3000);

                }
//                if(this.date_from !="" && this.date_to!="" && result){
//                    debugger;
//                    this.$emit("do_select-date", {"sDate": this.Sdate.date_from,"eDate":this.Sdate.date_to});
//                }
            },
            //格式化日期
            formatDate(time,format){
                var t = new Date(time);
                var tf = function(i){return (i < 10 ? '0' : '') + i};
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
            },
            //比较日期
            DateComparison(dateS,dateE){
                var oDate1 = new Date(dateS);
                var oDate2 = new Date(dateE);
                if(oDate1.getTime() > oDate2.getTime()){
                    return false;
                } else {
                    return true;
                }
            }
        }
    };
</script>
<style scoped>
  .block{width: 250px;}
  .el-col-2.line{text-align: center;}
  .el-date-editor.el-input {width:110px}
</style>