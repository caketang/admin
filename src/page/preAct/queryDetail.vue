<template>
    <div id="subAgentRebate" class="clearfix" v-loading="loading">
        <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="20">
                <div class="title">
                    <a href="javascript:;" @click="goback">
                        <el-button type="primary" icon="arrow-left" size="small">{{LANG['返 回'] || '返 回'}}</el-button>
                    </a>
                </div>
                <div>
                    <p class="font14">当前查询条件：
                        <span class="pleft">日期：<el-tag type="gray">{{query.date_from}}至{{query.date_to}}</el-tag></span>
                        <span class="pleft">游戏平台：<el-tag type="gray">{{query.gameAll}}</el-tag></span>
                        <span class="pleft" v-if="query.memberAll">会员层级：<el-tag type="gray">{{query.memberAll}}</el-tag></span>
                        <!--<el-tag>标签一</el-tag>-->
                        <!--<el-tag type="gray">标签二</el-tag>-->
                        <span class="pleft" v-if="query.user_name">会员名：<span type="gray"
                                                                             class="membername">{{query.user_name}}</span></span>
                    </p>
                </div>
                <div>
                    <div class="fl w40">
                        <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="'search'"
                                  :labelWidth="labelWidth"
                                  :isEdit="isEdit" @do-query="doQuery" @reset-form="resetForm"
                                  :showAdd="false"></formEdit>
                    </div>
                </div>
            </el-col>

        </el-row>

        <el-col>
            <!--@date-selection="doOperation"-->
            <tableDetail
                :columnsUrl="columnsUrl"
                :tableUrl="tableUrl"
                :tableCheck="true"
                :tabOperation="tabOperation"
                :tableIndex="false"
                :allCheck="true"
                :getData="true"
                :sumGame="true"
                :colspan=3
                :showAdd="true"
                @unchecked="nowUnChecked"
                :assembleColumns="assembleColumns"
            >
                <!--<div class="cell tCent" slot="sub">人数 : {{attributes.subTotal}}</div>-->
                <!--<div class="cell tCent" slot="total">总人数 : {{attributes.total}}</div>-->
            </tableDetail>
        </el-col>
    </div>
</template>
<script>
    import tableDetail from '../../components/table.vue'
    import formEdit from '../../components/formEdit.vue'

    export default {
        data() {
            return {
                LANG,
                //默认全选
                allChecked: false,
                loading: false,
                tableData: {},
                columnsUrl: "",
                tableUrl: '',
                baseUrl: '',
                sLoading: false,
                //批量操作按钮
                tabOperation: [],
                assembleColumns: {
                    index: 4,
                    data: []
                },

                allData: {},
                query: {},
                userId: '',
                del_userId: '',
                games: [],
                modeData: {
                    name: '',
                    withdraw_per: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入事件名称', trigger: 'blur'}
                    ],
                    withdraw_per: [
                        {required: true, message: '请输入打码量', trigger: 'blur'}
                    ]
                },
//                timeXJ: 0,
//                timeTZ: 0,
                //搜索相关
                searchConfig: [
                    {
                        "prop": "coupon_type", "value": 1, "label": "状态", "type": "select",
                        "list": [{"label": "全部", "value": 0},
                            {"label": "有优惠", "value": 1},
                            {"label": "无优惠", "value": 2}]
                    }
                ],
                isEdit: {},
                labelWidth: "100px",
                // form
                formVisible: {
                    state: false
                }
            }
        },
        components: {
            tableDetail: tableDetail,
            formEdit: formEdit
        },
        methods: {
            init() {
                let _this = this;
                let query = this.$route.query;
                if (sessionStorage.del_userId !== null || sessionStorage.del_userId !== undefined) {
//                    sessionStorage.del_userId = null;
                }
                //默认全部勾选
                _this.allChecked = true;
                this.query = {};//初始化query
                for (let k in query) {
                    this.query[k] = query[k];
                }
                if (Object.keys(query).indexOf('user_name') == -1) {
                    delete this.query.user_name
                }
                if (Object.keys(query).indexOf('memberAll') == -1) {
                    delete this.query.memberAll
                }

                /*获取游戏选项*/
                function getGame() {
                    return new Promise((resolve, reject) => {
                        if (_this.assembleColumns.data.length === 0) {
                            _this.$.autoAjax('get', URL.api + "/games", '', {
                                ok: (res) => {
                                    if (res.state === 0 && res.data) {
                                        let model = res.data;
                                        model.forEach(item => {
                                            let obj = {
                                                "label": item.game_name,
                                                'type': "twoLine",
                                                "game_id": item.game_id,
                                                "game_type": item.game_type,
                                                filterByWord: "games",
                                                prop: "val",
                                                filterCondition: "game_type,game_id"
                                            };
                                            _this.assembleColumns.data.push(obj);
                                        })
                                        resolve(model);
                                    }
                                },
                                p: () => {
                                },
                                error: e => {
                                    console.log(e)
                                }
                            })
                        } else {
                            resolve()
                        }
                    })
                }

                getGame().then(() => {
                    _this.columnsUrl = "static/json/preAct/queryDetail/columns.json";
                    _this.queryUrl.apply(this);
                })
            },
            queryUrl() {
                let idIsNotNumber = isNaN(this.query.game_id);
                let ids = [];
                let gameType = [];
                if (idIsNotNumber) {
                    ids = this.query.game_id.split(',');
                    gameType = this.query.gameType.split(',');
                } else {
                    ids.push(this.query.game_id);
                    gameType.push(this.query.gameType)
                }
                let games = [];
                ids.forEach((item, index) => {
                    games.push({
                        game_type: gameType[index],
                        game_id: item
                    })
                });
                this.games = games;
                this.tableUrl = URL.api + `/active/rebetset/member?date_from=${this.query.date_from}&&date_to=${this.query.date_to}&&games=${JSON.stringify(games)}&&type=${this.query.type}&&coupon_type=1`;
                this.baseUrl = URL.api + `/active/rebetset/member?date_from=${this.query.date_from}&&date_to=${this.query.date_to}&&games=${JSON.stringify(games)}&&type=${this.query.type}`;
                if (this.query.user_name) {
                    this.tableUrl = this.tableUrl + `&&user_name=${this.query.user_name}`;
                    this.baseUrl = this.baseUrl + `&&user_name=${this.query.user_name}`;
                }
                if (this.query.level_id) {
                    this.tableUrl = this.tableUrl + `&&level_id=${this.query.level_id}`;
                    this.baseUrl = this.baseUrl + `&&level_id=${this.query.level_id}`
                }
            },
            doHandle(item) {
                switch (item.fn) {
                    case "doDetail":
                        this.doDetail(item.row);
                        break;
                }
            },
//            getData(obj) {
//                let attributes = obj.allData.attributes;
//                if (attributes) {
//                    this.attributes = attributes;
//                    this.attributes.subTotal = obj.allData.data.length
//                }
//            },
            //表格批量操作触发  save_del_userId
            doOperation(obj) {
                let check_user = {}
                this.userId = obj.rows.map(item => {
                    return item.user_id
                }).join(',');
                if (obj.del_rows !== undefined) {
                    this.del_userId = obj.del_rows.map(item => {
                        return item.user_id;
                    }).join(',');
                    this.del_userId.split(',').map(item => {
                        check_user[item] = item;
                    })
                    sessionStorage.check_user = JSON.stringify(check_user);
                }


            },
            // 获取未选择列表
            nowUnChecked(obj) {
                this.sLoading = true;
                let url = URL.api + '/active/rebetset/records';
                let arr = [];
                if (this.query.user_name && obj.rows) {
                    for (let k in obj.rows) {
                        arr[k] = obj.rows[k].user_id;
                    }
                }
                let data = {
                    "start_time": this.query.date_from,
                    "end_time": this.query.date_to,
                    "name": obj.modeData.name,
                    "withdraw_per": FORMATMultiplyMoney(obj.modeData.withdraw_per),
                    "member_level": this.query.memberAll === "全部" ? '0' : (this.query.level_id || '0'),
                    "games": this.query.gameAll === "全部" ? [] : this.games,
                    "user_id": arr,
                    //需要排除的ID
                    "excluded_user_id": obj.dataList.length > 0 ? obj.dataList : [],
                };
                this.$.autoAjax('put', url, data, {
                    ok: (res) => {
                        if (res.state === 0 && res.data) {
                            let str = LANG['存入成功'] || '存入成功';
                            this.$message.success(str);
                            this.$router.push({path: '/discount'})
                        } else {
                            this.$message.error(LANG['存入失败，请稍候重试'] || '存入失败，请稍候重试');
                            this.$router.push({path: '/discount'})
                        }
                        this.sLoading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            goback() {
                this.$router.push({path: "/discountCondition"})
            },
            doQuery(obj) {
                this.tableUrl = this.baseUrl + `&&coupon_type=${obj.item.coupon_type}`;
            },
            //重置查询
            resetForm() {
                this.tableUrl = this.baseUrl;
            }
        },
        computed: {},
        mounted() {
        },
        activated() {
            this.init()
        },
        beforeRouteLeave(to, from, next) {
            if (this.$refs.form) {
                this.$refs.form.resetFields();
            }
            // this.query = {};
            next(true);
        }
    }
</script>
<style scoped>
    .title {
        margin-bottom: 10px;
    }

    .el-form-item {
        margin-bottom: 0;
    }

    body {
        overflow-x: hidden !important;
    }

    .search {
        padding: 0 !important;
    }

    .name {
        width: 250px;
    }

    .membername {
        word-break: break-all;
        white-space: pre-wrap;
    }
</style>
