<template>
    <div id="modelSet">
        <el-button type="primary" v-text="LANG['保存'] || '保存'"  @click="doSave" style="position: absolute;right:10px;top:0"></el-button>
        <table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header" style="width: 100%;">
            <thead>
            {{headModel}}
            <tr>
                <th colspan="1" rowspan="1" class="is-leaf" v-for="(item,index) in headModel" v-if="item.disabled">
                    <div class="cell" >{{item.label}}<el-checkbox v-if="item.checkbox" :checked="checks[index] | formatCheck" v-model="item[index]" @change="checkAllChange($event,item.prop)"></el-checkbox> </div>
                </th>
            </tr>
            </thead>
        </table>
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body el-table" style="width: 100%;">
            <tr v-for="(item,k) in bodyModel">
                <td class="el-table_1_column_19" v-for="(col,index) in headModel">
                    <div class="cell" ><span v-if="!col.checkbox && !col.number">{{item[col.prop]}}</span>
                        <el-checkbox  :true-label="1" v-if="col.checkbox" :checked="item[col.prop] | formatCheck" v-model="item[col.prop]"></el-checkbox>
                        <input v-if="col.number" type="number" class="el-input__inner" min="1" max="1000000" v-model="item[col.prop]">
                    </div>
                </td>
            </tr>
        </table>
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
                //列选中状态
                checks: [],
                //表格数据
                bodyModel: [],
                headModel: []
            }
        },
        props:{
            headUrl:String,
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
                if(this.headUrl && this.headModel.length == 0) {
                    let headUrl = this.headUrl;
                    let headModel = this.headModel;
                    headModel.splice(0,bodyModel.length);

                    this.$.autoAjax('get',headUrl, '', {
                        ok: (res) => {
                            let data = res.columns || [];
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
                    // this.$http.get(headUrl,URLCONFIG).then((res) => {
                    //     let data = res.data.columns || [];
                    //     if(data.length > 0){
                    //         for (let i in data) {
                    //             headModel.push(data[i])
                    //         }
                    //     }
                    // });
                }
                if(this.bodyModelUrl) {
                    let bodyurl = this.bodyModelUrl
                    let bodyModel = this.bodyModel

                    bodyModel.splice(0,bodyModel.length);
                    let _this = this
                    this.$http.get(bodyurl,URLCONFIG).then((res) => {
                        let data = res.data.tableDemoDate || res.data.data || res.data.data.list || [];
                        if(data.length > 0){
                            for (let i in data) {
                                bodyModel.push(data[i])
                            }
                        }
                    });
                }

                var checks=this.checks;
                var headModel=this.headModel;
                for(let i=0;i<headModel.length;i++){
                    var temp=headModel[i];
                    if(temp.checkbox){
                    }
                }

            },
            //列全选事件
            checkAllChange(event,prop){
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
            //保存数据
            doSave(){
                this.$emit('save-data',{
                    "item":this.bodyModel
                })
            }
        },
        created: function () {
            this.init()
        }
    }
</script>
