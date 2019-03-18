<template>
    <div id="results" class="templateManage" style="width: 100%" v-loading="loading">
        <el-row>
            <el-col :span="24" style="text-align: right;" class="pb ">
                <el-col :span="12" style="text-align: left;">
                    <span>{{LANG["使用平台"] || "使用平台"}}</span>
                    <el-select v-model="pf" size="small" placeholder="请选择" @change="changePlatform"
                               style="width: 200px;">
                        <el-option style="width:200px;"
                                   v-for="item in platformList"
                                   :label="item.label"
                                   :value="item.value"
                                   :key="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="12">
                    <el-button type="primary" @click="doAdd" v-text="LANG['新增轮播广告'] || '新增轮播广告'"
                               size="small"></el-button>
                </el-col>
                <!--编辑界面-->
            </el-col>
            <el-col :span="24">
                <div>
                    <tablegrid
                        :columnsUrl="columnsUrl"
                        :tableUrl="tableUrl"
                        :tableCheck="false"
                        @do-handle="doHandle"
                        :showRefresh="true"
                        :pageSet="true"
                        :updated="updated"
                        :tableIndex="false">
                    </tablegrid>
                </div>
            </el-col>
        </el-row>
        <!--新增-->
        <el-col :span="24">
            <formEdit :formTitel="formTitel" :formVisible="editVisible" :formConfig="formConfig" :type="type" :size="size"
                      :labelWidth="labelWidth" @get-form="getForm" :isEdit="isEdit" :formType="formType"></formEdit>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
        <el-col>
            <el-dialog :title="LANG['轮播广告详情'] || '轮播广告详情' " v-model="dialogTableVisible" class="detail" size="tiny">
                <el-form :model="detailform">
                    <el-form-item :label="LANG['轮播广告名称:'] || '轮播广告名称:'" :label-width="formLabelWidth">
                        <span>{{detailform.name}}</span>
                    </el-form-item>
                    <el-form-item :label="LANG['使用平台:'] || '使用平台:'" :label-width="formLabelWidth">
                        <p style="width: 90%;">{{detailform.pf}}</p>
                    </el-form-item>
                    <el-form-item :label="LANG['使用于:'] || '使用于:'" :label-width="formLabelWidth">
                        <span>{{detailform.position}}</span>
                    </el-form-item>
                    <el-form-item :label="LANG['跳转链接:'] || '跳转链接:'" :label-width="formLabelWidth">
                        <span>{{detailform.link}}</span>
                    </el-form-item>
                    <el-form-item :label="LANG['语言:'] || '语言:'" :label-width="formLabelWidth">
                        <span>{{detailform['language_name']}}</span>
                    </el-form-item>
                    <el-form-item :label="LANG['排序:'] || '排序:'" :label-width="formLabelWidth">
                        <span>{{detailform.sort}}</span>
                    </el-form-item>
                    <el-form-item :label="LANG['轮播图片:'] || '轮播图片:'" :label-width="formLabelWidth">
                        <img :src="detailform.picture" style="margin-right: 10px; width: 90%" />
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">关 闭</el-button>
            </span>
            </el-dialog>
        </el-col>
    </div>
</template>
<script type="text/ecmascript-6">
    import tableGrid from '../../components/tableGrid.vue';
    import formEdit from '../../components/formEdit.vue';
    import confirm from '../../components/confirm.vue';
    import ElCol from "element-ui/packages/col/src/col";
    export default {
        data() {
            return {
                formLabelWidth: '100px',
                detailform: {},
                dialogTableVisible: false,
                LANG,
                columnsUrl: "",
                //表格数据
                tableUrl: "",
                baseUrl: "",
                //弹窗
                formConfig: [
                    {"prop": "name", "value": "", "type": "text", "label": "轮播广告名称", "rules": [{"require": true}]},
                    {
                        "prop": "pf",
                        "value": "",
                        "label": "使用平台",
                        "type": "select",
                        "list": ARRAYS.PLATFORMS,
                        "relation": true,
                        "relationKey": 2,
                        "linkArr": {"0": ARRAYS.position, "1": [ARRAYS.position[0]]},
                        "rules": [{"require": true}]
                    },
                    {
                        "prop": "position",
                        "value": "",
                        "label": "使用于",
                        "type": "select",
                        "list": ARRAYS.position,
                        "rules": [{"require": true}]
                    },
                    {"prop": "link", "value": "", "type": "url", "label": "跳转链接"},
                    {
                        "prop": "language_id",
                        "value": "",
                        "label": "语言",
                        "type": "select",
                        "list": [],
                        "propVal": "language_name",
                        "rules": [{"require": true}]
                    },
                    {
                        "prop": "sort",
                        "value": "",
                        "label": "排序",
                        'type': "number",
                        "rules": [{min: 0}],
                        "rules": [{"require": true}, {"integer": true}]
                    },
                    {
                        "prop": "images",
                        "value": [],
                        'type': "upload",
                        "fileNum": 1,
                        "label": "轮播图片",
                        "action": URL.img,
                        "folder": "adlist",
                        "rules": [{"require": false}]
                    },

                ],
                size:'small',
                labelWidth: "110px",
                type: "default",
                formTitel: "",
                formType: "",
                editVisible: {
                    state: false
                },
                // 是否编辑数据
                isEdit: {
                    state: false
                },

                //编辑弹窗
                dialogEdit: false,
                //编辑From
                editFrom: {
                    name: '',
                    use_for: '',
                    images: '',
                    language: '',
                    status: '',
                },
                use_forList: [],
                langList: [],
                statusList: ARRAYS.state2,
                nowId: -1,
                //当前平台
                pf: "pc",
                nowPlatform: "pc",
                platformList: ARRAYS.PLATFORMS,
                updated: false,
                //删除确认
                confirmConfig: {
                    state: false,
                    msg: "",
                    fn: "",
                    obj: null,
                },
                loading: false,

            }
        },
        components: {
            ElCol,
            tablegrid: tableGrid,
            formEdit: formEdit,
            confirm: confirm
        },
        methods: {
            init() {
                let _this = this;
                this.columnsUrl = "/static/json/ADManage/ADList/columns.json";
                this.tableUrl = URL.api + ROUTES.GET.copywriter.carousel + "?pf=" + this.pf;
                this.baseUrl = URL.api + ROUTES.GET.copywriter.carousel;
                //获取语言列表
                let langeUrl = URL.api + ROUTES.GET.langeages;
                this.$.autoAjax('get', langeUrl, '', {
                    ok: (res) => {
                        let model = res.data
                        for (let i in model) {
                            _this.langList.push({
                                "label": model[i].name,
                                "value": model[i].id.toString()
                            });
                            _this.formConfig[4].list.push({
                                "label": model[i].name,
                                "value": model[i].id.toString()
                            })
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //表格操作点击事件处理
            doHandle(e) {
                this.formType = "";
                this.updated = false;
                this.nowId = parseInt(e.row.id) || -1;
                switch (e.fn) {
                    case "doCompile":
                        this.doCompile(e.row);
                        break;
                    case "doApply":
                        this.doApply(e.row);
                        break;
                    case "doPass":
                        this.doPass(e.row);
                        break;
                    case "doStart":
                        this.doStart(e.row);
                        break;
                    case "doStop":
                        this.doStop(e.row);
                        break;
                    case "doDel":
                        this.doDel(e.row);
                        break;
                    case "doDetails":
                        this.doDetails(e.row);
                        break;
                }
            },
            doDetails(obj) {
                let _this = this;
                this.dialogTableVisible = true;
                let detailform = this.detailform;
                ({
                    name: detailform.name,
                    pf: detailform.pf,
                    link: detailform.link,
                    language_name: detailform.language_name,
                    sort: detailform.sort,
                    position: detailform.position,
                } = obj);
                let position = ARRAYS.position;
                if (!detailform.link) {
                    detailform.link = "无"
                }
                for (let index in position) {
                    if (position[index].value === detailform.position) {
                        detailform.position = position[index].label;
                    }
                }
                this.detailform.picture = URL.img + obj.picture;
            },
            //新增
            doAdd() {
                this.updated = false;
                this.formType = "add";
                this.formTitel = "新增轮播广告";
                this.isEdit.state = false;
                this.editVisible.state = true;
            },
            //申请
            doApply(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定申请'] || '确定申请') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "apply";
                    this.confirmConfig.obj = row;
                }
            },
            //启用
            doStart(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定启用'] || '确定启用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "start";
                    this.confirmConfig.obj = row;
                }
            },
            //停用
            doStop(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定停用'] || '确定停用') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "stop";
                    this.confirmConfig.obj = row;
                }
            },
            //编辑
            doCompile() {
                this.loading = true;
                let _this = this;
                _this.isEdit.state = false;
                let fromDataUrl = URL.api + ROUTES.GET.copywriter.carousel;
                this.$.autoAjax('get',fromDataUrl,parseInt(this.nowId), {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            _this.isEdit.state = true;
                            _this.formType = "edit";
                            _this.formTitel = "修改轮播广告";
                            FORMVAL(res.data, _this.formConfig);
                            let str = res.data.picture || "";
                            _this.formConfig[6].value.push(str);
                            _this.editVisible.state = true;
                        } else {
                            _this.$message.error(LANG['修改轮播广失败，请稍后重试！']);
                        }
                        _this.loading = false;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },
            //删除
            doDel(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') + '"' + row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "delete";
                }
            },
            //确认删除
            doConfirm(obj) {
                this.loading = true;
                let _this = this;
                switch (obj.fn) {
                    case "delete":
                        this.$.autoAjax('delete',URL.api + ROUTES.PUT.copywriter.carousel + "/" + parseInt(this.nowId) + "?pf=" + this.pf, '', {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.formType = "delete";
                                    _this.$message.success(LANG['恭喜您，删除成功！'] || '恭喜您，删除成功！');
                                    _this.updated = true;
                                } else {
                                    this.$message.error(LANG['删除失败，请稍后重试！'] || '删除失败，请稍后重试！');
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                _this.loading = false;
                                console.log(e)
                            }
                        })
                        break;
                    case "stop":
                        let disableddata = {
                            "status": "disabled",
                            "pf": this.pf,
                            "language_id": parseInt(obj.obj.language_id),
                            "position": obj.obj.position,
                            "approve":obj.obj.approve
                        }

                        this.$.autoAjax('patch',URL.api + ROUTES.PUT.copywriter.carousel + "/" + parseInt(this.nowId), disableddata, {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.$message.success(LANG['恭喜您，停用成功！'] || '恭喜您，停用成功！');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(LANG['停用失败，请稍后重试！']);
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                        break;
                    case "start":
                        let enableddata = {
                            "status": "enabled",
                            "pf": this.pf,
                            "language_id": parseInt(obj.obj.language_id),
                            "position": obj.obj.position,
                            "approve":obj.obj.approve
                        }

                        this.$.autoAjax('patch',URL.api + ROUTES.PUT.copywriter.carousel + "/" + parseInt(this.nowId), enableddata, {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.$message.success(LANG['恭喜您，启用成功！'] || '恭喜您，启用成功！');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(LANG['启用失败，请稍后重试！']);
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                        break;
                    case "apply":
                        let applyddata = {
                            "approve": "pass",
                            "pf": this.pf,
                            "language_id": parseInt(obj.obj.language_id),
                            "position": obj.obj.position,
                        }

                        this.$.autoAjax('patch', URL.api + ROUTES.PUT.copywriter.carousel + "/" + parseInt(this.nowId), applyddata,{
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    _this.$message.success(LANG['恭喜您，申请成功！'] || '恭喜您，申请成功！');
                                    _this.updated = true;
                                } else {
                                    _this.$message.error(LANG['申请失败，请稍后重试！']);
                                }
                                _this.loading = false;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                        // this.$http.patch(URL.api + ROUTES.PUT.copywriter.carousel + "/" + parseInt(this.nowId), JSON.stringify(applyddata), URLCONFIG).then((res) => {
                        //     if (res.data.state == 0 && res.data.data) {
                        //         _this.$message.success(LANG['恭喜您，申请成功！'] || '恭喜您，申请成功！');
                        //         _this.updated = true;
                        //     } else {
                        //         _this.$message.error(LANG['申请失败，请稍后重试！']);
                        //     }
                        //     _this.loading = false;
                        // });
                        break;
                }

            },
            //切换平台
            changePlatform(val) {
                if (val == this.nowPlatform) {
                    return
                } else {
                    this.nowPlatform = val;
                    switch (val) {
                        case "h5":
                            this.tableUrl = this.baseUrl + "?pf=h5";

                            break;
                        case "pc":
                            this.tableUrl = this.baseUrl + "?pf=pc";

                            break;
                    }
                }
            },
            //保存弹窗数据
            getForm(obj) {
                let _this = this;
                let typeUrl = URL.api + ROUTES.PUT.copywriter.carousel;

                if (this.formType == "edit") {
                    typeUrl = URL.api + ROUTES.PUT.copywriter.carousel + '/' + this.nowId;
                } else {
                    obj.formObj['status'] = 'disabled'
                }
                if (obj.formObj.link === "") {
                    delete obj.formObj.link
                }
                obj.formObj['picture'] = obj.formObj['images'].toString();
                delete obj.formObj['images']
                console.log(obj.formObj)
                this.$.autoAjax('put',typeUrl, obj.formObj, {
                    ok: (res) => {
                        if (res.state === 2) {
                            _this.$message.error(LANG['轮播图片不能为空'] || '轮播图片不能为空');
                        } else {
                            if (res.state == 0 && res.data) {
                                let str = "";
                                if (_this.formType == "add") {
                                    str = LANG['恭喜您，新增轮播广告成功！'] || '恭喜您，新增轮播广告成功！';
                                } else {
                                    str = LANG['恭喜您，修改轮播广告成功！'] || '恭喜您，修改轮播广告成功！';
                                }
                                _this.updated = true;
                                _this.$message.success(str);
                            } else {
                                let str = "";
                                if (_this.formType == "add") {
                                    str = LANG['新增轮播广告失败！'] || '新增轮播广告失败！';
                                } else {
                                    str = LANG['修改轮播广告失败！'] || '修改轮播广告失败！';
                                }
                                _this.$message.error(str);
                            }
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
            },

        },
        computed: {},
        mounted() {
        },
        created: function () {
            this.init()
        }
    }
</script>
<style lang="less">

</style>
