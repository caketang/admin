<template>
    <div id="memberHierarchy_table">
        <div id="tableSingle" :class="scrollClass" ref="tableSingle" :style="tableWidth">
            <div id="tables">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header el-table--border">
                    <colgroup>
                        <col width=10%></col>
                        <col width=10%></col>
                        <col width=10%></col>
                        <col width=10%></col>
                        <col width=8%></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col width=10%></col>
                    </colgroup>
                    <thead>
                    <tr>
                        <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                            <div class="cell">{{LANG['层级名称'] || '层级名称'}}</div>
                        </th>
                        <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                            <div class="cell">{{LANG['描述'] || '描述'}}</div>
                        </th>
                        <th colspan="6" rowspan="1" class="el-table_1_column_36 is-leaf">
                            <div class="cell">{{LANG['加入条件'] || '加入条件'}}</div>
                        </th>
                        <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                            <div class="cell">{{LANG['会员人数'] || '会员人数'}}</div>
                        </th>
                        <!--新增备注-->
                        <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                            <div class="cell">{{LANG['备注'] || '备注'}}<br/></div>
                        </th>
                        <th colspan="1" rowspan="2" class="el-table_1_column_36 is-leaf">
                            <div class="cell">{{LANG['操作'] || '操作'}}<br/></div>
                        </th>
                    </tr>
                    <tr>
                        <!--新增区间存款-->
                        <!--<th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">-->
                            <!--<div class="cell">{{LANG['会员加入时间'] || '会员加入时间'}}</div>-->
                        <!--</th>-->
                        <!--<th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">-->
                            <!--<div class="cell">{{LANG['存款时间'] || '存款时间'}}<br/></div>-->
                        <!--</th>-->
                        <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                            <div class="cell">{{LANG['区间存款总额'] || '区间存款总额'}}</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                            <div class="cell">{{LANG['存款次数'] || '存款次数'}}</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                            <div class="cell">{{LANG['存款总额'] || '存款总额'}}</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                            <div class="cell">{{LANG['最大存款额'] || '最大存款额'}}</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                            <div class="cell">{{LANG['提款次数'] || '提款次数'}}</div>
                        </th>
                        <th colspan="1" rowspan="1" class="el-table_1_column_37_column_38 is-leaf">
                            <div class="cell">{{LANG['提款总额'] || '提款总额'}}</div>
                        </th>
                    </tr>
                    </thead>
                    <tr v-for="(col,index) in dataModel">
                        <td class="el-table_1_column_19" v-for="(item,key) in columnList">
                            <div class="cell" v-if="item.type != 'button'">
                                <span v-if="item.type === 'link'" @click="doHandle(col,item.fn)" class="success">
                                    <el-button size="small" v-if="col[item.prop]" @click="doHandle(item,col.fn)"
                                               type="text"
                                               v-text="col[item.prop]"></el-button>
                                    <span v-if="!col[item.prop]">{{col[item.prop]}}</span>
                                </span>
                                <span
                                    v-if="item.filters == undefined && item.type !='date' && item.type != 'divisionMoney' && item.type !=='link'">{{col[item.prop]}}</span>
                                <span
                                    v-if="item.type == 'date'">{{col[item.prop] | formatDate('yyyy-MM-dd HH:mm:ss')}}</span>
                                <span v-if="item.type == 'data,connect'">
                                    <p>{{col[item.prop.split(",")[0]] || ""}}</p>
                                    <p>{{col[item.prop.split(",")[1]] || ""}}</p>
                                </span>
                                <span v-if="item.type == 'connect'">
                                    <!--此处写死-->
                                    <p>{{col.deposit_min | formatInt}} ~ {{col.deposit_max | formatInt}}</p>
                                </span>
                                <span
                                    v-if="item.type == 'divisionMoney'">{{isNaN(parseInt(col[item.prop])) ? 0 : parseInt(col[item.prop]) / 100}}</span>
                                <span v-if="item.filters != undefined"
                                      :class="{sucess_text: (col[item.prop] == 1),danger_text:(col[item.prop] == 0)}">{{col[item.prop] | formatSex(item.filters)}}</span>
                                <span class="defutFont" v-if="col['t_default'] == '0'">[ {{LANG['默认'] || '默认'}} ]</span>
                            </div>
                            <div v-if="item.type == 'button' && col['t_default'] === '1'" class="cell">
                                <div v-for="btn in item.btnGroup" style="float:left;margin-left:5px;">
                                    <el-button size="small" v-if="!btn.prop" @click="doHandle(col,btn.fn)"
                                               :type="btn.btnType" v-text="btn.label"></el-button>
                                    <el-button size="small" v-if="btn.prop && col[btn.prop] != btn.val"
                                               @click="doHandle(col,btn.fn)" :type="btn.btnType"
                                               v-text="btn.label"></el-button>
                                </div>
                            </div>
                            <div v-if="item.type == 'button' && col['t_default'] == '0'">
                                <div v-for="btn in item.btnGroup" style="float:left;margin-left:5px;">
                                    <el-button size="small" v-if="btn.label === '设定'" @click="doHandle(col,btn.fn)"
                                               :type="btn.btnType" v-text="btn.label"></el-button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr v-if="dataModel.length == 0"
                        style="line-height: 100px;text-align: center;background-color: #ffffff;">
                        <div style="width: 1439px;">{{LANG['暂无数据'] || '暂无数据'}}</div>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'

    Vue.filter("formatDate", function (v, format) {
        if (parseInt(v).toString().length == 10) {
            v = parseInt(v) * 1000;
        }
        let t = new Date(v);
        let tf = function (i) {
            return (i < 10 ? '0' : '') + i
        };
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
            switch (a) {
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
    Vue.filter('formatConnect', function (v, arr) {
        let item = v || {};
        let str = arr || "";
        let contVal = "";
        let list = str.split(",");
        for (let k in list) {
            if (list[k] && item[list[k]]) {
                contVal = contVal + v[list[k]] + " - ";
            }
        }
        contVal = contVal.toString();
        return contVal.substring(0, contVal.length - 2);
    });
    Vue.filter('formatConnect', function (v, arr) {
        let item = v || {};
        let str = arr || "";
        let contVal = "";
        let list = str.split(",");
        for (let k in list) {
            if (list[k] && item[list[k]]) {
                contVal = contVal + v[list[k]] + " - ";
            }
        }
        contVal = contVal.toString();
        return contVal.substring(0, contVal.length - 2);
    });
    Vue.filter('formatInt', function (v) {
        return parseInt(FORMATNUMBER(v) / 100)
    })
    export default {
        data() {
            return {
                LANG,
                dataModel: [],
                columnList: []
            }
        },
        props: {
            dataModelUrl: String,
            columnsUrl: String,
            //更新数据
            updateDate: Object,
            updated: {
                type: Boolean,
                default: false
            },
            formType: String
        },
        components: {},
        methods: {
            init() {
                let dataModel = this.dataModel = [];
                let _this = this;
                if (this.dataModelUrl) {
                    this.$.autoAjax('get',this.dataModelUrl, '', {
                        ok: (res) => {
                            let tableDate = res.data || [];
                            for (let i in tableDate) {
                                dataModel.push(tableDate[i])
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            this.$message.error(e);
                        }
                    })
                }
                let columnList = this.columnList = [];
                if (this.columnsUrl) {
                    this.$.get(this.columnsUrl, (res) => {
                        let columns = res.columns || [];
                        for (let i in columns) {
                            columnList.push(columns[i])
                        }
                        //根据columns长度判断是否加横向滚动条
                        if (columns.length > 10) {
                            _this.tableScroll = true;
                        } else {
                            _this.tableScroll = false;
                        }
                    })
                }
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
        watch: {
            //如果数据网址发生变化，就执行数据请求
            dataModelUrl: function (newQuestion) {
                this.init();
            },
            //根据是否更新，更新数据
            updated: function (newval) {
                if (newval) {
                    this.init();
                }
            },
            formType: function (newval) {
                if (newval) {
                    this.init();
                }
            }
        },
        created() {
            this.init()
        },
        computed: {
            scrollClass: function () {
                return {
                    'scrollX': this.tableScroll
                }
            },
            tableWidth: function () {
                let width = document.body.clientWidth;
                return this.tableScroll ? 'width:' + (width - 270) + 'px' : ''
            }
        },
    }
</script>
<style scoped>
    .cell {
        text-align: center;
    }

    .el-table .cell .sucess_text {
        color: #13CE66
    }

    .el-table .cell .danger_text {
        color: #FF4949
    }

    .scrollX #tables {
        /*min-width: 1920px;*/
        overflow-x: auto;
        white-space: nowrap;
    }

    .scrollX #tables table {
        /*min-width: 1800px;*/
        overflow-x: auto;
        white-space: nowrap;
    }
</style>
