<template>
    <div id="memberHierartSet" v-loading="loading">
        <el-row>
            <el-col :span="24" class="pb" v-if="activeName !== 'searLevel'">
                <el-button type="primary" size="small" @click="blackMemberHierarchy">
                    返 回
                </el-button>
            </el-col>
            <el-col style="text-align: right;">
                <el-button type="primary" size="small" @click.stop="doInit" class="addBut">{{LANG['刷新'] || '刷新'}}
                </el-button>
            </el-col>
            <el-col :span="24">
                <tablegrid
                    v-if="activeName == 'searLevel'"
                    :columnsUrl="columnsUrl"
                    :tableUrl="searchTableUrl"
                    :tableCheck="true"
                    :pageSet="true"
                    :updated="updated"
                    :listKey="listKey"
                    :listArr="listArr"
                    :lockShow="true"
                    :isCreated="true"
                    :saveData="false"
                    :showRefresh="false"
                    @all_switch_data="all_switch_data"
                    @all_select_data="all_select_data"
                    @do-changes="doSelsect"
                    @do-Lock="doLock">
                </tablegrid>
                <tablegrid
                    v-if="activeName !== 'searLevel'"
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="true"
                    :isCreated="true"
                    :pageSet="true"
                    :showRefresh="false"
                    :updated="updated"
                    :listKey="listKey"
                    :listArr="listArr"
                    :lockShow="true"
                    :saveData="false"
                    @all_switch_data="all_switch_data"
                    @all_select_data="all_select_data"
                    @do-changes="doSelsect"
                    @do-Lock="doLock">
                    <!--@data-save="saveDate"-->
                </tablegrid>
            </el-col>
            <!--<el-col :span="24">-->
            <!--<confirm :confirmConfig="confirmConfig" ></confirm>-->
            <!--</el-col>-->
            <el-col>
                <el-dialog
                    :title="'批量'+lockType+'操作'"
                    :visible.sync="lockDialogShow"
                    size="tiny"
                    width="30%"
                    :before-close="handleCloselockDialog">
                    <span>你确定要批量{{lockType}}操作吗？</span>
                    <span slot="footer" class="dialog-footer">
    <el-button @click="lockDialogShow = false">取 消</el-button>
    <el-button type="primary" @click="lockDialogEdit">确 定</el-button>
  </span>
                </el-dialog>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import tableGrid from './tableGrid.vue'
    import NProgress from 'nprogress'
    import confirm from './confirm.vue';

    export default {
        data() {
            return {
                //表格相关
                LANG,
                navSelect: false,
                columnsUrl: "",
                tableUrl: "",
                //锁定接口
                lockUrl: "",
                infoUrl: "",
                updated: false,
                lockType: '',
                lockDialogShow: false,
                arrTwo: null,
                arrTwoObj: null,
                //确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: ""
                },
                lockSwitch: 'ON',
                //会员列表
                levelsList: [],
                // 下接数据更新
                listKey: "",
                listArr: [],
                lockType: '',
                //选中的行数据
                mode: [],
                loading: false
            }


        },
        props: {
            levelId: {
                type: String,
                default: ""
            },
            activeName: String,
            searchTableUrl: String,
            showSet: Boolean,
            colTwo: String
        },
        components: {
            tablegrid: tableGrid,
            confirm: confirm
        },
        methods: {
            init(str) {
                this.loading = true;
//				this.tableUrl = URL.api + ROUTES.GET.user.level.group;
                this.baseUrl = URL.api + ROUTES.GET.user.level.group;
                //锁定
                this.lockUrl = URL.api + ROUTES.PATCH.user.level.lock;
                //获取路由
                this.lid = FORMATNUMBER(this.$route.query.level);
                if ((this.$route.query && (this.$route.query.coltwo === true)) || this.activeName === 'searLevel') {
                    this.columnsUrl = "/static/json/accoutManage/memberHierarSet/columnsTwo.json";
                } else {
                    this.columnsUrl = "/static/json/accoutManage/memberHierarSet/columns.json";
                }
                this.lid > 0 ? (this.tableUrl = this.baseUrl + '/?lid=' + this.lid) : (this.tableUrl = this.baseUrl);
                if (str) {
                    this.updated = false;
                    setTimeout(() => {
                        this.updated = true;
                    }, 500)
                }
                //批量修改层级
                this.infoUrl = URL.api + ROUTES.PATCH.user.info.infoLevel;
                this.navSelect = false;
                this.listKey = "id";
                //会员层级列表
                let levlsListUrl = URL.api + ROUTES.GET.user.levelsList;
                this.$.autoAjax('get', levlsListUrl, '', {
                    ok: (res) => {
                        let mode = res.data;
                        this.listArr.splice(0, this.listArr.length);
                        this.listArr.push({
                            "value": "",
                            "label": "默认：不操作"
                        })
                        for (let i in res.data) {
                            this.listArr.push({
                                "value": mode[i].id,
                                "label": mode[i].name
                            })
                        }
                        this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        this.$message.error(LANG['未知错误，请点击“刷新”按钮后，重试'] || '未知错误，请点击“刷新”按钮后，重试');
                    }
                })
            },
            handleCloselockDialog() {
                this.lockDialogShow = false;
            },
            // 刷新当前页
            doInit() {
                this.init('init');
            },
            //			//返回上一个页面 跳转
            blackMemberHierarchy() {
                this.$router.push({path: '/memberHierarchy'});
            },
            //表格批量操作触发
            doOperation(obj) {
                obj.rows.length > 0 ? this.navSelect = true : this.navSelect = false;
                this.mode = obj.rows;
            },
            //批量操作分层
            all_select_data(obj) {
                this.updated = false;
                let arrOne = [], _this = this,lists = obj.rows || [];
                for (let k = 0; k < lists.length; k++) {
                    let tempOne = {}
                    if (FORMATNUMBER(obj.level) > 0 && obj.level !== obj.rows[k].lid && obj.rows[k].lock == '0') {
                        tempOne[lists[k].id] = obj.level
//                        tempOne[1] = obj.level
                        arrOne.push(tempOne);
                    } else if (obj.level == obj.rows[k].lid) {
                        this.$message.error(LANG['不可移动到相同层级！'] || '不可移动到相同层级！');
                    } else {
//						this.$message(LANG['提示：已锁定层级的会员不会被移动分层。'] || '提示：已锁定层级的会员不会被移动分层。');
                    }
                }
                if (arrOne.length != 0) {
                    this.$.autoAjax('patch', URL.api + '/user/info/level', {list: arrOne}, {
                        ok: (res) => {
                            if (res.state === 0 && res.data && res.data.fail && res.data.fail.length === 0) {
                                this.$notify.info({
                                    title: LANG['消息'] || '消息',
                                    message: LANG['会员层级批量操作成功'] || '会员层级批量操作成功'
                                });
                            } else if (res.state === 0 && res.data && res.data.success && (res.data.success.length > res.data.fail.length)) {
                                this.$message.error(LANG['会员层级批量修改部份成功，请核对后重新提交'] || '会员层级批量修改部份成功，请核对后重新提交');
                            } else {
                                this.$message.error(LANG['会员层级批量修改失败，请查看操作的会员层级是否锁定或者请稍后重试'] || '会员层级批量修改失败，请查看操作的会员层级是否锁定或者请稍后重试');
                            }
                            _this.updated = true;
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                } else {
                    this.$message(LANG['提示：已锁定层级的会员不会被移动分层。'] || '提示：已锁定层级的会员不会被移动分层。');
                }
            },
            //批量操作锁定
            all_switch_data(obj) {
                this.updated = false;
                let arrTwo = [];
                let lists = obj.rows || []
                for (let j = 0; j < lists.length; j++) {
                    let tempTwo = {};
                    if (obj.lock !== obj.rows[j].lock) {
                        tempTwo[lists[j].id] = lists[j].lock == '1' ? '0' : '1'
                        //tempTwo.push(lists[j].lock == '1' ? '0' : '1');
                        arrTwo.push(tempTwo);
                    }
                }
                obj.lock == 1 ? this.lockType = '锁定' : this.lockType = '解除锁定'
                this.lockDialogShow = true;
                this.arrTwo = arrTwo;
                this.arrTwoObj = obj;
                this.$emit("clearFrom", {
                    "clear": true,
                });
            },
            lockDialogEdit() {
                let _this = this,arrTwo = this.arrTwo,obj = this.arrTwoObj;
                arrTwo.length > 0 ?
                    this.$.autoAjax('patch', URL.api + '/user/level/lock', {list: arrTwo}, {
                        ok: (res) => {
                            if (res.state === 0 && res.data && res.data.fail && res.data.fail.length === 0) {
                                obj.lock == '1' ? this.$notify.info({
                                        title: LANG['消息'] || '消息',
                                        message: LANG['会员批量锁定操作成功'] || '会员批量锁定操作成功'
                                    }) :
                                    this.$notify.info({
                                        title: LANG['消息'] || '消息',
                                        message: LANG['会员批量解除锁定操作成功'] || '会员批量解除锁定操作成功'
                                    });
                            } else if (res.state === 0 && res.data && res.data.success && (res.data.success.length > res.data.fail.length)) {
                                obj.lock == '1' ? this.$message.error(LANG['会员层级批量锁定操作部份成功，请核对后重新提交'] || '会员层级批量锁定操作部份成功，请核对后重新提交') :
                                    this.$message.error(LANG['会员层级批量解除锁定操作部份成功，请核对后重新提交'] || '会员层级批量解除锁定操作部份成功，请核对后重新提交')
                            } else {
                                obj.lock == '1' ? this.$message.error(LANG['会员批量锁定操作失败，可能当前层级已是锁定状态或者请稍后重试'] || '会员批量锁定操作失败，可能当前层级已是锁定状态或者请稍后重试') :
                                    this.$message.error(LANG['会员批量解除锁定操作失败，可能当前层级已是未锁定状态或者请稍后重试'] || '会员批量解除锁定操作失败，可能当前层级已是未锁定状态或者请稍后重试')
                            }
                            _this.lockDialogShow = false;
                            _this.updated = true;
                        },
                        p: () => {
                        },
                        error: e => {
                            this.$message.error(LANG['未知错误，请点击“刷新”按钮后，重试'] || '未知错误，请点击“刷新”按钮后，重试');
                        }
                    }) : this.$message(LANG['提示：当前所选会员层级已是' + _this.lockType + '状态'] || '提示：当前所选会员层级已是' + _this.lockType + '状态');
                this.lockDialogShow = false;
                this.$emit("clearFrom", {
                    "clear": true,
                });

            },
            //表格内分层
            doSelsect(row) {
                this.updated = false;
                let _this = this,level = {},levelArr = [];
                level[row.row.id] = row.row.lid
                levelArr.push(level)
                row.row.lock == "1" ? this.$message(LANG['用户：' + row.row.name + '会员层级已锁定，不可操作会员分层！'] || '用户：' + row.row.name + '会员层级已锁定，不可操作会员分层！') :
                    this.$.autoAjax('patch', this.infoUrl, {list:levelArr}, {
                        ok: (res) => {
                            let mode = res.data
                            if (mode !== null || mode.length > 0) {
                                _this.$message.success(LANG['用户：' + row.row.name + '分层操作成功'] || '用户：' + row.row.name + '分层操作成功');
                                this.updated = true;
                            } else {
                                _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                                this.updated = true;
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                this.$emit("clearFrom", {
                    "clear": true,
                });
            },
            //表格内锁定
            doLock(row) {
                this.updated = false;
                let _this = this,lockData ={},lockArr = [];
                lockData[row.row.id] = row.row.lock
                lockArr.push(lockData)
                this.$.autoAjax('patch', this.lockUrl, {list:lockArr}, {
                    ok: (res) => {
                        let mode = res.data
                        if (mode !== null || mode.length > 0) {
                            row.row.lock == '1'
                                ? _this.$message.success(LANG['用户：' + row.row.name + '锁定操作成功'] || '用户：' + row.row.name + '锁定操作成功')
                                : _this.$message.success(LANG['用户：' + row.row.name + '解锁操作成功'] || '用户：' + row.row.name + '解锁操作成功');
                            this.updated = true;
                        } else {
                            _this.$message.error(LANG['未知错误，请稍后重试！'] || '未知错误，请稍后重试！');
                            this.updated = true;
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                this.$emit("clearFrom", {
                    "clear": true,
                });
            },
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init();
        },
        watch: {
            searchTableUrl: function (newval) {
                if (newval) {
                    this.init();
                }
            }
        },
        activated() {
            this.init('init');
        }
    }
</script>
<style lang="less">
    #memberHierartSet {
        .comments {
            color: #475669;
        }
        /*.selectMember {*/
        /*position: relative;*/
        /*top: 26px;*/
        /*left: 170px;*/
        /*}*/
        .showSelect {
            display: none;
        }
    }

</style>
