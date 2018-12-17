<template>
    <div id="editTable" class="editTable">
        <el-row :gutter="20">
            <el-col :span="24" class="mt10">
                <table cellspacing="0" cellpadding="0" border="1" class="el-table el-table__header w100" >
                    <tr>
                        <th colspan="1" rowspan="1" class="is-leaf" v-for="(item,index) in columnsModel" >
                            <div class="cell" >{{item.label}}</div>
                        </th>
                    </tr>
                    <tr v-for="(item,k) in bodyModel">
                        <td class="el-table_1_column_19" v-for="(col,index) in columnsModel" >
                            <div class="cell" v-if="col.type == 'date'">
                                <span>{{item[col.prop] | formatDate('yyyy-MM-dd HH:mm:ss') }}</span>
                            </div>
                            <div class="cell" v-if="col.type == 'divisionMoney'">
                                <span>{{item[col.prop] | formatMoney}}</span>
                            </div>
                            <div  class="cell"  v-if="!col.type">
                                <span>{{item[col.prop]}}</span>
                            </div>
                            <div v-if="col.type == 'linkDivisionMoney'" class="cell"
                                 :class="{tCent:(col.class != undefined)?true:false}">
                                <el-button size="small" v-if="item[col.prop]" @click="doHandle(item,col.fn)"
                                           type="text">
                                    <el-tag type="primary" class="linkCell">{{item[col.prop] | formatMoney}}</el-tag>
                                </el-button>
                                <span v-if="!item[col.prop]">{{item[col.prop]}}</span>
                            </div>
                            <div class="cell" v-if="col.type == 'checkbox'" @click="showDialog(k,col.prop,item[col.prop],item)">
                                <el-checkbox  :true-label="1" :checked="item[col.prop] | formatCheck" v-model="item[col.prop]"></el-checkbox>
                            </div>
                            <div class="cell" v-if="col.type == 'number'" >
                                <input  type="number" class="el-input__inner" min="1" v-model="item[col.prop]"  @keyup.13="showDialog(k,col.prop,item[col.prop],item,'number')" @blur="showDialog(k,col.prop,item[col.prop],item,'number')" @focus="saveInputVal(item[col.prop])">
                            </div>
                            <div class="cell" v-if="col.type == 'switch'"  @click="showDialog(k,col.prop,item[col.prop],item)">
                                <el-switch  v-model="item[col.prop]" > </el-switch>
                            </div>
                        </td>
                    </tr>
                </table>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import  Vue from 'vue'
    //转换checkbox状态值
    Vue.filter("formatCheck",function(v){
        return v == "1"?true:false;
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
                //表格数据
                bodyModel:[],
                //表格列数据
                columnsModel:[],
                //提示框是否可见
                dialogVisible:false,
                //SWITCH组件列数组
                switchIndex:[],
                //number输入框原始值
                inputVal:-1
            }
        },
        props:{
            //组件列配置地址
            columnsUrl:{
                type:String,
                default:''
            },
            //列表数据1
            bodyModelUrl:{
                type:String,
                default:''
            },
            //修改后请求地址
            updateModelUrl:{
                type:String,
                default:''
            },
            getData: {
                type: Boolean,
                default: false
            }
        },
        methods:{
            init(){
                //初始化列数据
                this.columnsModel.splice(0,this.columnsModel.length)
                if(this.columnsUrl != "" && this.columnsUrl != null) {
                    let columnsUrl = this.columnsUrl
                    let columnsModel = this.columnsModel
                    let _this=this
                    this.$http.get(columnsUrl,URLCONFIG).then((res) => {
                        let data = res.data.columns
                        if(data.length > 0){
                            for (let i in data) {

                                if(data[i].type == "switch"){
                                    _this.switchIndex.push(data[i].prop)
                                }
                                columnsModel.push(data[i])
                            }
                        }
                    }).catch((err)=>{
//                        console.log(err)
                    })
                }
                //初始化请求数据
                this.bodyModel.splice(0,this.bodyModel.length)
                if(this.bodyModelUrl != "" && this.bodyModelUrl != null) {
                    let bodyModelUrl = this.bodyModelUrl
                    let bodyModel = this.bodyModel
                    let _this=this
                    let switchIndex=this.switchIndex
                    this.$http.get(bodyModelUrl,URLCONFIG).then((res) => {
                        let alldata = res.data.data ;
                        let data = res.data.data.list;
                        if(alldata.length > 0){
                            for (let i in alldata) {
                                //SWITCH类型过滤器
                                for (let j in switchIndex){
                                    if(alldata[i][switchIndex[j]]){
                                        alldata[i][switchIndex[j]]=true
                                    }else{
                                        alldata[i][switchIndex[j]]=false
                                    }
                                }
                                bodyModel.push(alldata[i])
                            }
                        }else{
                            if(data.length){
                                for (let i in data) {
                                    //SWITCH类型过滤器
                                    for (let j in switchIndex){
                                        if(data[i][switchIndex[j]]){
                                            data[i][switchIndex[j]]=true
                                        }else{
                                            data[i][switchIndex[j]]=false
                                        }
                                    }
                                    bodyModel.push(data[i])
                                }
                            }
                        }
                        if (_this.getData) {
                            _this.$emit("get-table-data", {
                                "event": event,
                                "item": _this.bodyModel,
                                "allData": alldata
                            });
                        }
                    }).catch((err)=>{
//                        console.log(err)
                    })
                }
            },
            /*显示提示框并处理点击事伯
                bodykey数组键值
                colkey列键值
                colVal列值
                item当前ROW数据值
                type传入事件点击DOM类型
            * */
            showDialog(bodykey,colkey,colVal,item,type){
                let bodyModel=this.bodyModel
                //当前数据ID值
                let nowid=item.id
                let _this=this

                if(this.updateModelUrl != null && this.updateModelUrl != ""){
                    // 发送请求

                }
                //失败修改为原来的值
                if(colVal == 20){ //模拟失败
                    if(type == "number"){
                        bodyModel[bodykey][colkey]=this.inputVal
                    }else{
                        bodyModel[bodykey][colkey]=this.updateVal(colVal)
                    }
                    var str=_this._('修改失败');
                    _this.$message.success(str);
                }else{
                    //成功不修改现有值
                    var str=_this._('修改成功');
                    _this.$message.success(str);
                }
            },
            //修改数据
            updateVal(val){
                switch(val){
                    case 1:
                        return 0
                        break
                    case 0:
                        return 1
                        break;
                    case true:
                        return false
                        break
                    case false:
                        return true
                        break;
                }
            },
            //保存输入框值
            saveInputVal(v){
                this.inputVal=v
            },
            //保存数据
            doSave(){
                this.$emit('save-data',{
                    "item":this.bodyModel
                })
            },
            foo(){
                return true
            },
            //处理操作公共按钮事件
            doHandle(row, fn) {
                this.$emit("do-handle", {
                    "event": event,
                    "row": row,
                    "fn": fn
                });
            }
        },
        created: function () {
            this.init()
        },
        watch: {
            bodyModelUrl: function (newQuestion) {
                this.init();
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
