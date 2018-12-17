<template>
    <div id="quickOddslSet">
        <el-row style="position: absolute;right:10px;top:0">
            <el-col :span="24"><span v-text="LANG['快捷设置'] || '快捷设置'" v-if="quickSetting"></span><span v-if="quickSetting">:</span>
                <el-radio class="radio" v-model="quickOddsQuickSet" label="allAdd" v-if="quickSetting">统一加</el-radio>
                <el-radio class="radio" v-model="quickOddsQuickSet" label="allReduce" v-if="quickSetting">统一减</el-radio>
                <el-radio class="radio" v-model="quickOddsQuickSet" label="allUpadte" v-if="quickSetting">全部改为</el-radio>
                <el-input v-model="quickInput" :placeholder="LANG['请输入内容'] || '请输入内容'" style="width:100px;" v-if="quickSetting"></el-input>
                <el-button type="primary" @click="allEdit" v-text="LANG['确定'] || '确定'" v-if="quickSetting"></el-button>
                <el-button type="primary" size="small" v-text="LANG['保存'] || '保存'" @click="doSave" style="margin-left:10px"></el-button>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <!--类型1表格-->
            <el-col :span="8">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header" style="width: 100%;">
                    <thead>
                    <tr>
                        <th colspan="1" rowspan="1" class="is-leaf" v-for="(item,index) in columnsModel">
                            <div class="cell" >{{item.label}}<el-checkbox v-if="item.type == 'checkbox'" :checked="checks[index] | formatCheck" v-model="item[index]" @change="checkAllChange($event,item.prop)"></el-checkbox> </div>
                        </th>
                    </tr>
                    </thead>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" class="el-table__body el-table" style="width: 100%;">
                    <tr v-for="(item,k) in bodyModel">
                        <td class="el-table_1_column_19" v-for="(col,index) in columnsModel">
                            <div class="cell" >
                                <span v-if="!col.type">{{item[col.prop]}}</span>
                                <el-checkbox  :true-label="1" v-if="col.type == 'checkbox'" :checked="item[col.prop] | formatCheck" v-model="item[col.prop]"></el-checkbox>
                                <input v-if="col.type == 'number'" type="number" class="el-input__inner" min="1" v-model="item[col.prop]">
                            </div>
                        </td>
                    </tr>
                </table>
            </el-col>
            <el-col :span="8" v-if="bodyModelUrl1">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header" style="width: 100%;">
                    <thead>
                    <tr>
                        <th colspan="1" rowspan="1" class="is-leaf" v-for="(item,index) in columnsModel">
                            <div class="cell" >{{item.label}}<el-checkbox v-if="item.type == 'checkbox'" :checked="checks[index] | formatCheck" v-model="item[index]" @change="checkAllChange($event,item.prop)"></el-checkbox> </div>
                        </th>
                    </tr>
                    </thead>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" class="el-table__body el-table" style="width: 100%;">
                    <tr v-for="(item,k) in bodyModel1">
                        <td class="el-table_1_column_19" v-for="(col,index) in columnsModel">
                            <div class="cell" >
                                <span v-if="!col.type">{{item[col.prop]}}</span>
                                <el-checkbox  :true-label="1" v-if="col.type == 'checkbox'" :checked="item[col.prop] | formatCheck" v-model="item[col.prop]"></el-checkbox>
                                <input v-if="col.type == 'number'" type="number" class="el-input__inner" min="1" v-model="item[col.prop]">
                            </div>
                        </td>
                    </tr>
                </table>
            </el-col>
            <el-col :span="8" v-if="bodyModelUrl2">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header" style="width: 100%;">
                    <thead>
                    <tr>
                        <th colspan="1" rowspan="1" class="is-leaf" v-for="(item,index) in columnsModel">
                            <div class="cell" >{{item.label}}<el-checkbox v-if="item.type == 'checkbox'" :checked="checks[index] | formatCheck" v-model="item[index]" @change="checkAllChange($event,item.prop)"></el-checkbox> </div>
                        </th>
                    </tr>
                    </thead>
                </table>
                <table cellspacing="0" cellpadding="0" border="0" class="el-table__body el-table" style="width: 100%;">
                    <tr v-for="(item,k) in bodyModel2">
                        <td class="el-table_1_column_19" v-for="(col,index) in columnsModel">
                            <div class="cell" >
                                <span v-if="!col.type">{{item[col.prop]}}</span>
                                <el-checkbox  :true-label="1" v-if="col.type == 'checkbox'" :checked="item[col.prop] | formatCheck" v-model="item[col.prop]"></el-checkbox>
                                <input v-if="col.type == 'number'" type="number" class="el-input__inner" min="1" v-model="item[col.prop]">
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
        return v == 1?true:false;
    });
    export default{
        data(){
            return{
                LANG,
                //选中状态
                checks:[],
                //表格数据
                bodyModel:[],
                //表格数据
                bodyModel1:[],
                //表格数据
                bodyModel2:[],
                //表格列数据
                columnsModel:[],
                //快捷设置
                quickOddsQuickSet:""
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
            //列表数据2
            bodyModelUrl1:{
                type:String,
                default:''
            },
            //列表数据3
            bodyModelUrl2:{
                type:String,
                default:''
            },
            //是否重发请求，默认不发
            resendRequest:{
                type:Boolean,
                default:false
            },
            //是否显示快捷设置，默认为false
            quickSetting: {
                type:Boolean,
                default:true
            }
        },
        watch: {
            //如果数据网址发生变化，就执行数据请求
            resendRequest: function (newQuestion) {
                if(newQuestion){
                    this.init();
                }
            }
        },
        methods:{
            init(){
                //初始化列数据
                if(this.columnsUrl != "" && this.columnsUrl != null) {
                    let columnsUrl = this.columnsUrl
                    let columnsModel = this.columnsModel

                    columnsModel.splice(0,columnsModel.length);
                    let _this = this

					this.$.autoAjax('get',columnsUrl, '', {
						ok: (res) => {
							let data = res.columns
							if(data.length > 0){
								for (let i in data) {
									columnsModel.push(data[i])
								}
							}
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.get(columnsUrl,URLCONFIG).then((res) => {
                    //     let data = res.data.columns
                    //     if(data.length > 0){
                    //         for (let i in data) {
                    //             columnsModel.push(data[i])
                    //         }
                    //     }
                    // })
                    .catch((err)=>{
//                        console.log(err)
                    })
                }
                //初始化请求数据
                if(this.bodyModelUrl != "" && this.bodyModelUrl != null) {
                    let bodyModelUrl = this.bodyModelUrl
                    let bodyModel = this.bodyModel

                    bodyModel.splice(0,bodyModel.length);
                    let _this = this

					this.$.autoAjax('get',bodyModelUrl, '', {
						ok: (res) => {
							let data = res.tableDemoDate
							if(data.length > 0){
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
                    // this.$http.get(bodyModelUrl,URLCONFIG).then((res) => {
                    //     let data = res.data.tableDemoDate
                    //     if(data.length > 0){
                    //         for (let i in data) {
                    //             bodyModel.push(data[i])
                    //         }
                    //     }
                    // })
                    .catch((err)=>{
//                        console.log(err)
                    })
                }
                //初始化请求数据1
                if(this.bodyModelUrl1 != "" && this.bodyModelUrl1 != null) {
                    let bodyModelUrl1 = this.bodyModelUrl1
                    let bodyModel1 = this.bodyModel1

                    bodyModel1.splice(0,bodyModel1.length);
                    let _this = this

					this.$.autoAjax('get',bodyModelUrl1, '', {
						ok: (res) => {
							let data = res.tableDemoDate
							if(data.length > 0){
								for (let i in data) {
									bodyModel1.push(data[i])
								}
							}
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.get(bodyModelUrl1,URLCONFIG).then((res) => {
                    //     let data = res.data.tableDemoDate
                    //     if(data.length > 0){
                    //         for (let i in data) {
                    //             bodyModel1.push(data[i])
                    //         }
                    //     }
                    // })
                    .catch((err)=>{
//                        console.log(err)
                    })
                }
                //初始化请求数据2
                if(this.bodyModelUrl2 != "" && this.bodyModelUrl2 != null) {
                    let bodyModelUrl2 = this.bodyModelUrl2
                    let bodyModel2 = this.bodyModel2

                    bodyModel2.splice(0,bodyModel2.length);
                    let _this = this

					this.$.autoAjax('get',bodyModelUrl2, '', {
						ok: (res) => {
							let data = res.tableDemoDate
							if(data.length > 0){
								for (let i in data) {
									bodyModel2.push(data[i])
								}
							}
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.get(bodyModelUrl2,URLCONFIG).then((res) => {
                    //     let data = res.data.tableDemoDate
                    //     if(data.length > 0){
                    //         for (let i in data) {
                    //             bodyModel2.push(data[i])
                    //         }
                    //     }
                    // })
                    .catch((err)=>{
//                        console.log(err)
                    })
                }
            },
            //列全选事件
            checkAllChange(e,prop){
                let event = window.event|| event ;
                var checks=this.checks
                checks[prop]=event.target.checked
                var bodyModel=this.bodyModel
                if(event.target.checked){
                    for(let i in this.bodyModel){
                        bodyModel[i][prop]=1;
                    }
                }else{
                    for(let i in this.bodyModel){
                        bodyModel[i][prop]=0;
                    }
                }

            },
            //快捷调整所有
            allEdit(){

            },
            //保存数据
            doSave(){
                this.$emit('save-data',{
                    "item":this.bodyModel,
                    "item1":this.bodyModel1,
                    "item2":this.bodyModel2
                })
            }
        },
        created: function () {
            this.init()
        }
    }
</script>
<style>
    #quickOddslSet .cell .el-input__inner{width: 114px;}
</style>