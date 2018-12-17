<!--货币设定-->
<template>
    <div id="currencySettings" class="templateManage w100">
        <el-card>
            <el-row :gutter="20">
                <el-col :span="24">
                    <el-radio-group v-model="radio" @change="changeRadio">
                        <el-radio label="agent">{{LANG['代理注册'] || '代理注册' }}</el-radio>
                        <el-radio label="user">{{LANG['会员注册'] || '会员注册'}}</el-radio>
                    </el-radio-group>
                </el-col>
                <el-col class="mt10">
                    <el-button size="small" :type="(numberType === 'pc'?'primary':'')" @click="setNumberType('pc')">PC
                    </el-button>
                    <el-button size="small" :type="(numberType === 'h5'?'primary':'')" @click="setNumberType('h5')"
                               :disabled="(radio === 'agent')">H5
                    </el-button>
                </el-col>
                <!--表头-->
                <el-col :span="24">
                    <modelset :headModel="columnsUrl" :bodyModelUrl="tableUrl" @save-data="saveData"></modelset>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>
    import modelSet from '../systemSettings/modelSet.vue'
    import tablegrid from '../../components/tableGrid.vue'

    export default {
        data() {
            return {
                radio: 'agent',
                LANG,
                checkedgx: false,
                //数据接口地址
                tableUrl: "",
                //列配置接口地址
                columnsUrl: "",
                // 默认选中样式
                select: true,
                btntype: "agent",
                type: "",
                numberType: "pc"
            }
        },
        components: {
            modelset: modelSet,
            tablegrid: tablegrid,
        },
        watch: {
            radio: function (val, oldval) {
                if (val !== oldval) {
                    if (val === 'user') {
                        this.type = "user";
                        this.tableUrl = URL.api + ROUTES.GET.system.vipOrAgency + '?type=user' + "&pf=" + this.numberType;
                    }
                    if (val === 'agent') {
                        this.type = "agent";
                        this.tableUrl = URL.api + ROUTES.GET.system.vipOrAgency + '?type=agent';
                    }
                }
            }
        },
        methods: {
            init() {
                //获取列配置
                this.columnsUrl = "static/json/systemSettings/registerSettings/columns.json"
                //数据请求
                this.tableUrl = URL.api + ROUTES.GET.system.vipOrAgency + '?type=agent';
                this.type = "agent";
                this.radio = "agent";
            },
            //保存数据
            saveData(data) {
                // 过滤数据
                if (data['item']) {
                    let temp = {
                        type: this.type,
                        pf: this.numberType,
                        data: data['item']
                    };
                    let _this = this, url = URL.api + ROUTES.PATCH.system.registration;
                    console.log(temp)
                    this.$.autoAjax('patch', url,temp, {
                        ok: (res) => {
                            if (res.state == 0 && res.data) {
                                _this.$message.success(LANG['保存配置成功'] || '保存配置成功');
                            } else {
                                _this.$message.error(LANG['保存配置失败'] || '保存配置失败');
                            }
                        },
                        p: () => {
                        },
                        error: e => {
                            console.log(e)
                        }
                    })
                }
            },
            // 设置PC或h5
            setNumberType(str) {
                if (this.numberType === str) {
                    return;
                } else {
                    this.numberType = str;
                    this.tableUrl = URL.api + ROUTES.GET.system.vipOrAgency + '?type=' + this.type + "&pf=" + this.numberType;
                }
            },
            // 切换代理会员
            changeRadio(v) {
                this.numberType = 'pc';
            }
        },
        created: function () {
            this.init();

        },
        activated() {
            this.init();
        },
    }
</script>
<style scopend>
    .templateManage .el-dialog--small {
        width: 30%;
        min-width: 400px;
        max-width: 600px;
        border-radius: 10px;
    }

    .templateManage .el-dialog--small .fromMargin {
        margin-right: 60px;
    }

    .templateManage .bg-purple-dark {
        background: none;
    }

    .templateManage .addManage {
        float: right;
        margin-right: 5%;
    }

    .templateManage .block {
        text-align: right;
    }

    .el-checkbox {
        margin-left: 10px
    }

    .templateManage .el-col {
        margin-bottom: 10px;
    }

    .btn-active {
        background-color: #0197d2;
    }
</style>
