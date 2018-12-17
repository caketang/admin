<template>
    <div id="modelSet">
        <el-button type="primary" size="small" v-text="LANG['保存'] || '保存'" @click="doSave"
                   style="float: right;"></el-button>
        <table cellspacing="0" cellpadding="0" border="1" class="el-table el-table__header tCent w100">
            <tr>
                <th colspan="1" rowspan="1" class="is-leaf three tCent">
                    <div>{{LANG['注册内容'] || '注册内容'}}</div>
                </th>
                <th colspan="1" rowspan="1" class="is-leaf three tCent">
                    <div>{{LANG['是否显示'] || '是否显示'}}
                        <el-checkbox v-model="allshow" @change="checkAllChange('allshow')"></el-checkbox>
                    </div>
                </th>
                <th colspan="1" rowspan="1" class="is-leaf three tCent">
                    <div>{{LANG['是否必填'] || '是否必填'}}
                        <el-checkbox v-model="allrequire" :disabled="allshow?false:true"
                                     @change="checkAllChange('allrequire')"></el-checkbox>
                    </div>
                </th>
                <th colspan="1" rowspan="1" class="is-leaf three tCent">
                    <div>{{LANG['是否验证'] || '是否验证'}}
                        <el-checkbox v-model="allValidate"
                                     @change="checkAllChange('allValidate')"></el-checkbox>
                    </div>
                </th>
            </tr>
            <tbody>
            <tr v-for="(item,k) in tableData">
                <td class="el-table_1_column_19 three" v-for="(col,index) in oColumn">
                    <el-tag type="success" class="font14" v-if="!col.checkbox">{{LANG[item[col.prop]] || item[col.prop]}}</el-tag>
                    <el-button type="success" size="mini" v-if="item[col.prop] == '1'"
                               :disabled="item.visibility=='0'&&col.prop =='necessity'?true:false"
                               @click="changeCheck(col.prop,col,k)">启用</el-button>
                    <el-button type="warning" size="mini" v-if="item[col.prop] == '0'"
                               :disabled="item.visibility=='0'&&col.prop =='necessity'?true:false"
                               @click="changeCheck(col.prop,col,k)">停用</el-button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                LANG,
                // 全选注册
                allshow: false,
                // 全选必填
                allrequire: false,
                allValidate: false,
                //表格数据
                tableData: [],
                oColumn: [],
            }
        },
        props: {
            headModel: String,
            bodyModelUrl: String
        },
        methods: {
            //初始化
            init() {
                let _this = this;
                if (this.bodyModelUrl) {
                    let url = this.bodyModelUrl;
                    this.$.autoAjax('get', url, '', {
                        ok: (res) => {
                            this.tableData = res.data;
                            this.allshow = this.changeAll('visibility') === this.tableData.length;
                            this.allrequire = this.changeAll('necessity') === this.tableData.length;
                            this.allValidate = this.changeAll('validate') === 6;
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                }
                //表头
                this.$.get(this.headModel, (res) => {
                    _this.oColumn = res.columns || [];
                })
            },
//            //列全选事件
            checkAllChange(type) {
                this.tableData.forEach((item) => {
                    switch (type) {
                        case 'allshow':
                            if(!this.allshow){
                                this.allrequire = false;
                                item.necessity = '0'
                            }
                            this.allshow ? item.visibility = '1' : item.visibility = '0';
                            break
                        case 'allrequire':
                            this.allrequire ? item.necessity = '1' : item.necessity = '0';
                            break
                        case 'allValidate':
                            if(this.allValidate){
                                if(item.validate =='1' || item.validate=='0'){
                                        item.validate = '1';
                                }
                            }else {
                                if(item.validate =='1' || item.validate=='0'){
                                    item.validate = '0';
                                }
                            }
                            break
                    }
                })
            },
            changeAll(prop) {
                let n = 0;
                this.tableData.forEach((items) => {
                    if (items[prop] == '1') {
                        n++;
                    }else if(items[prop] == '0'){
                        n--;
                    }
                })
                return n;
            },
            //单条数据操作
            changeCheck(key,col,k) {
                this.tableData[k][key] = this.tableData[k][key]=='1'?'0':'1';
                switch (key) {
                    case 'visibility':
                        this.tableData[k]['necessity'] = this.tableData[k][key]=='0'?'0':this.tableData[k]['necessity'];
                        this.tableData[k]['validate'] = this.tableData[k][key]=='0'?'0':this.tableData[k]['validate']
                        this.allshow = this.changeAll(key) === this.tableData.length;
                        break;
                    case 'necessity':
                        this.allrequire = this.changeAll(key) === this.tableData.length;
                        break;
                    case 'validate':
                        this.allValidate = this.changeAll(key) === 6;
                        break;
                }
            },
            doSave() {
                this.$emit('save-data', {"item": this.tableData})
            }
        },
        watch: {
            //如果数据网址发生变化，就执行数据请求
            bodyModelUrl: {
                handler(val, old) {
                    this.init();
                },
                //是否绑定初始值
                immediate: true,
                //深度监听
                deep: true
            },
        },
        created: function () {
            this.init();
        },
    }
</script>
<style scoped lang="less">
    #modelSet {
        .three {
            width: 400px;
        }
        .el-table th {
            text-align: center;
        }
    }
</style>
