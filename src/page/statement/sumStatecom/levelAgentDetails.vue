<template>
    <div id="levelAgent">
        <el-col>
            <span>报表详情{{title}}</span>
        </el-col>
        <el-radio-group v-model="activeName" class="mb10" @change="handleClick">
            <el-radio label="agent">代理</el-radio>
            <el-radio label="user">会员</el-radio>
        </el-radio-group>

        <tablegrid
            :columnsUrl="columnsUrl"
            :tableUrl="tableUrl"
            :tableCheck="false"
            @do-handle="doHandle"
            :pageSet="true"
            :isCreated="true"
            :updated="updated"
            :tableIndex="false"
            :getData="getData"
            @get-table-data="getTableData">
            <tr :span="12" class="sumdiv ml20" slot="other" v-if="sumShow">
                <td colspan="1">
                    <div class="cell">
                        <span class="font16 ">{{LANG['总计'] || '总计'}} </span>
                    </div>
                </td>
                <td colspan="1">
                    <div class="cell">
                        <span class="font16 ">{{allData.bet_times}} </span>
                    </div>
                </td>
                <td colspan="1">
                    <div class="cell">
                        <span class="font16 ">{{allData.bet_money | formatMoney}} </span>
                    </div>
                </td>
                <td colspan="1">
                    <div class="cell">
                        <span class="font16 ">{{allData.valid_bet | formatMoney}} </span>
                    </div>
                </td>
                <td colspan="1">
                    <div class="cell">
                        <span class="font16 "
                              :class="{state_danger: parseFloat(allData.lose_earn) < 0 }">{{allData.lose_earn | formatMoney}} </span>
                    </div>
                </td>
                <td colspan="1">
                    <div class="cell">
                        <span class="font16 ">{{allData.bonus | formatMoney(4)}} </span>
                    </div>
                </td>
                <td colspan="1">
                    <div class="cell">
                        <span class="font16 ">{{allData.contri | formatMoney(4)}} </span>
                    </div>
                </td>
            </tr>

        </tablegrid>
    </div>
</template>
<script>
    import tableGrid from '../../../components/tableGrid.vue'
    import Vue from 'vue'

    export default {
        data() {
            return {
                LANG,
                activeName: 'agent',
                columnsUrl: '',
                tableUrl: '',
                updated: false,
                sumShow: false,
                allData: {},
                getData: true,

            }
        },
        props: {
            id: {
                default: -1,
            },
            dates: {
                type: String,
                default: "",
            },
            name: {
                type: String,
                default: "",
            },
            furl: {
                type: String,
                default: "",
            },
            title: {
                type: String,
                default: "",
            }

        },
        computed: {},
        components: {
            tablegrid: tableGrid,
        },
        watch: {
            activeName: function (val, oldval) {
                if (val != oldval) {
                    if (val === "member") {
                        this.init();

                    }
                }
            },
            id: function (val, oldval) {
                if (val != oldval) {
                    if (this.activeName === "level_agent") {
                        this.init();

                    }
                }
            }
        },
        methods: {
            init() {
                this.tableUrl = this.furl + "&agent_id=" + this.id + "&type=agent"
                this.columnsUrl = '../../../../static/json/statement/sumStatement/levelAgentcolumns.json'
            },
            handleClick(obj) {
                if (obj == "agent") {
                    this.tableUrl = this.furl + "&agent_id=" + this.id + "&type=agent"
                    this.columnsUrl = '../../../../static/json/statement/sumStatement/levelAgentcolumns.json'
                }
                if (obj == "user") {
                    this.tableUrl = this.furl + "&agent_id=" + this.id + "&type=user";
                    this.columnsUrl = '../../../../static/json/statement/sumStatement/membercolumns.json'
                }
            },
            doHandle(obj) {
                if (obj.row.id) {
                    this.tableUrl = this.furl + "&agent_id=" + obj.row.id + "&type=agent"
                    this.$emit('update:id', obj.row.id);
                    this.$emit('update:name', obj.row.name);
                    if (this.$parent.$parent.$parent.$parent.pushUrls) {
                        this.$parent.$parent.$parent.$parent.pushUrls({
                            name: obj.row.name,
                            id: obj.row.id,
                            type: "level",
                            url: this.tableUrl
                        });
                    }
                }
            },
            //取表数据
            getTableData(obj) {
                this.allData = {};
                if (obj.allData.data.length && obj.allData.attributes) {
                    let model = obj.allData.attributes;
                    this.sumShow = true;
                    for (let i in model) {
                        this.allData[i] = model[i];
                    }

                } else {
                    this.sumShow = false;
                }

            },
        },
        mounted() {
        },
        created() {
            this.init();
            let _this = this;
            VUE.$on('loadings', function (obj) {
                _this.$emit('update:id', obj.id);


            })
        },
        activated() {
            this.updated = false;
            setTimeout(() => {
                this.updated = true;
                console.log(this);
            }, 500)
        }
    }
</script>
<style scoped>
</style>
