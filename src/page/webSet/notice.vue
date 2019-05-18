<template>
    <div id="notice" v-loading="loading" class="clearfix">
        <el-col :span="24" class="mb20 pb">
			<!--搜索-->
			<formEdit   :formVisible="formVisibleSearch"
                        :formConfig="searchConfig"
                        :type="typeSearch"
					    :labelWidth="labelWidthSearch"
					    @do-query="doQuery"
                        :isEdit="isEditSearch"
                        @reset-form="resetForm"
					    @add-new="openForm"
                        :addText="LANG['新增公告'] || '新增公告'">

			</formEdit>
            <!--<el-button type="primary" class="addManage" size="small" @click="openForm"-->
                       <!--v-text="LANG['新增公告'] || '新增公告'"></el-button>-->
        </el-col>
        <el-col>
            <!--编辑界面-->
            <formEdit
                    :formTitel='formTitel'
                    :formVisible="formVisible"
                    :formConfig="oneColConfig"
                    :type="type"
                    :labelWidth="labelWidth"
                    :markdownTest="markdownTest"
                    :isEdit="isEdit"
                    @get-form="getForm"></formEdit>
        </el-col>
        <el-col :span="24">
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :updated="updated"
                    @do-handle="doHandle"
					:showRefresh="false"
			>
            </tablegrid>
        </el-col>
		<el-col :span="24">
			<el-dialog :title="LANG['编辑消息详情'] || '编辑消息详情' " v-model="dialogTableVisible" class="detail" size="tiny">
				<el-form :model="editFrom" v-if="dialogTableVisible">
					<el-form-item label="公告标题" :label-width="formLabelWidth">
						<!--<span>{{detailform.title}}</span>-->
						<el-input v-model="editFrom.title" size="small" class="w80"></el-input>
					</el-form-item>
					<el-form-item label="内容" :label-width="formLabelWidth">
						<markdown v-model="editFrom.content" :id="'content'" v-if="editFrom['popup_type'] !=='滚动公告'"></markdown>
						<el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="editFrom.content" v-else>
						</el-input>

					</el-form-item>
					<el-form-item label="弹出类型" :label-width="formLabelWidth">
						<span>{{editFrom['popup_type']}}</span>
					</el-form-item>
					<el-form-item label="接收人" :label-width="formLabelWidth">
						<span>{{editFrom['recipient']}}</span>
					</el-form-item>
					<el-form-item label="发布者" :label-width="formLabelWidth">
						<span>{{editFrom['admin_name']}}</span>
					</el-form-item>
					<el-form-item label="开始时间" :label-width="formLabelWidth" :prop="'start_time'">
						<!--<span>{{detailform['start_time']}}</span>-->
						<el-form-item :prop="'start_time'">
							<times v-model="editFrom['start_time']"></times>
						</el-form-item>
					</el-form-item>
					<el-form-item label="结束时间" :label-width="formLabelWidth" :prop="'end_time'">
						<el-form-item :prop="'end_time'">
							<times v-model= "editFrom['end_time']"></times>
						</el-form-item>
					</el-form-item>
					<el-form-item label="发布状态" :label-width="formLabelWidth">
						<span>{{editFrom.status === '1' ? "已发布" : "未发布"}}</span>
					</el-form-item>
				</el-form>
				<span slot="footer" class="dialog-footer">
					<el-button @click="dialogTableVisible = false">关 闭</el-button>
					<el-button @click="doSave()">修 改</el-button>
				</span>
			</el-dialog>
		</el-col>
        <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
    </div>
</template>
<script>
	import tableGrid from '../../components/tableGrid.vue'
	import formEdit from '../../components/formEdit.vue'
	import confirm from '../../components/confirm.vue'
	import times from '../../components/dateTimePicker.vue'
	import markdown from '../../components/UEditor.vue'

	export default {
		data() {
			return {
				LANG,
				//表格列数据
				columnsUrl: "",
				//表格数据
				tableUrl: "",
				editFormTtile: '',
                //markdown字节长度限制
				markdownTest:{
					//markdown的字符长度设置
					length:500,
                    //是否需要做长度验证,true为需要
					type:true
				},
				formTitel: "",
				editFormVisible: false,
				oneColConfig: [
					{
						"prop": "popup_type",
						"label": "弹出类型",
						"type": "radioGroup",
                        "radioInput":true,
                        "value":"",
						"list": [{"label": "登录弹出", "value": "1"}, {"label": "首页弹出", "value": "2"}, {
							"label": "滚动公告",
							"value": "3"
						}],
						"checkIndex": "1",
						"propkey": "send_type",
						"arr": [{
							"value": "1",
							"list": [{value: "1", label: "会员"}, {value: "2", label: "代理"}, {value: "3", label: "自定义"}]
						},
							{"value": "2", "list": [{value: "4", label: "会员"}, {value: "5", label: "代理"}]},
							{"value": "3", "list": [{value: "4", label: "会员"}, {value: "5", label: "代理"}]}],
						"rules": [{"require": true}]
					},
					{
						"prop": "send_type", "value": "", "label": "接收人", "type": "select", "list": [
						{value: "1", label: "会员"},
						{value: "2", label: "代理"},
						{value: "3", label: "自定义"}], "rules": [{"require": true}]
					},
					{
						"prop": "checkgroup",
						"value": [],
						"label": "发送类型",
						"sReset": false,
						"checkAll": true,
						"allBtnShow": true,
						"type": "checkGroup",
						"list": [],
						"Arr": [],
						"ifVal": "1",
						"ifKey": "send_type",
						"rules": [{"require": true}]
					},
					// {"prop":"checkbox","value":"","type":"checkbox","label":"","valLabel":"全部代理","ifVal":"2","ifKey":"agentlx","rules":[{"require":true}]},
					{
						"prop": "textarea",
						"value": "",
						"label": "自定义接收人",
						"placeholder": "注:自定义接收人只能是会员用户/账号(多个请用英文逗号隔开)",
						"type": "textarea",
						"ifVal": "3",
						"ifKey": "send_type",
						"rules": [{"require": true}]
					},
					// {"prop":"size","value":"","label":"消息类型","type":"select",
					//     "list":[{value: "选项1", label: "一般消息"}, {value: "选项2", label: "重要消息"}],"rules":[{"require":true}]},
					{"prop": "language_id", "value": "", "type": "select", "label": "语言", "list": [], "rules": [{"require": true}]},
					{"prop": "title", "value": "", "type": "text", "label": "标题", "rules": [{"require": true}]},
					//ID6
                    {"prop": "login_content", "value": "", "label": "内容", "type": "markdown","ifVal": "1", "config":{maximumWords: 5000}, "ifKey": "popup_type", "rules": [{"require": true}]},
                    {"prop": "home_content", "value": "", "label": "内容", "type": "markdown","ifVal": "2", "config":{maximumWords: 5000},"ifKey": "popup_type", "rules": [{"require": true}]},
                    {
                        "prop": "scoll_content",
                        "value": "",
                        "label": "内容",
                        "type": "textarea",
                        "ifVal": "3", "ifKey": "popup_type",
                        "rules": [{"require": true}]
                    },
					{
						"type": "dateTimeGroup",
						"label": "起始时间",
						"prop": [{"prop": "start_time", "value": "", "label": "开始时间"}, {
							"prop": "end_time",
							"value": "",
							"label": "结束时间"
						}],
						"rules": [{"require": true}],
						"required": true
					},
				],
				type: "default",
				labelWidth: "80px",
                //是否编辑数据
                isEdit: {
                    state: false
                },
				formVisible: {
					state: false
				},
				baseUrl: "",
				//详情
				detailform: {},
				//搜索
                searchConfig: [
                    {"prop": "title", "value": "", "type": "text", "label": "公告标题"},
                    {
                        "prop": "status", "value": "", "label": "启用状态", "type": "select",
                        "list": [{"label": "全部", "value": ""},{"label": "启用", "value": "1"},{"label": "停用", "value": "2"}
                        ]
                    },
                ],
                typeSearch: "search",
                labelWidthSearch: "100px",
                formVisibleSearch: {
                    state: false
                },
                //是否编辑数据
                isEditSearch: {
                    state: false
                },
				//--------
				formLabelWidth: "100px",
				dialogTableVisible: false,
				loading: false,
				updated: false,
				//删除确认
				confirmConfig: {
					state: false,
					msg: "",
					fn: "",
					obj: null,
				},
				editFrom:{
				    id: -1,
                    title:'',
                    content:'',
                    start_time: sessionStorage.dateTimeStart,
                    end_time: sessionStorage.dateTimeEnd
				}

			}
		},
		components: {
			tablegrid: tableGrid,
			formEdit: formEdit,
			confirm: confirm,
            times:times,
            markdown:markdown,
        },
		methods: {
			init() {
				this.columnsUrl = "static/json/message/columns.json";
				this.tableUrl = URL.api + ROUTES.GET.notices.list;
				this.baseUrl = URL.api + ROUTES.GET.notices.list;
				//获取语言列表
				let langeUrl = URL.api + ROUTES.GET.langeages;
                this.$.autoAjax('get',langeUrl, '', {
                    ok: (res) => {
                        let model = res.data
                        for (let i in model) {
                            this.oneColConfig[4].list.push({
                                "label": model[i].name.toString(),
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
				//获会员层级
				let levelUrl = URL.api + ROUTES.GET.user.level.list;
				let _this = this;
                this.$.autoAjax('get',levelUrl, '', {
                    ok: (res) => {
                        console.log(res)
                        let model = res.data
                        for (let i in model) {
                            _this.oneColConfig[2].list.push(model[i].level);
                            _this.oneColConfig[2].Arr.push({
                                "label": 'VIP'+model[i].level,
                                "value": model[i].level
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
            //文本框值修改
            changeText(obj){
                this.editFrom['content'] = obj.val;
            },
            // 日期时间值修改
            getDateTimeval_start(v){
                this.editFrom.start_time = v.data;
            },
            getDateTimeval_end(v){
                this.editFrom.end_time = v.data
            },
			//新增
            openForm(obj) {
                this.formTitel = LANG['新增'] || '新增';
                this.isEdit.state = false;
                this.formVisible.state = true;
                this.formType="add";
            },
			getForm(data) {
				let _this = this;
				let req = {};
				let backData = data.formObj;
				if (backData.send_type == '1' && backData.popup_type == '1') {
					req.recipient = backData.checkgroup.join(',');
				} else if (backData.send_type == '2' && backData.popup_type == '1') {
					req.recipient = "1";
				} else {
					req.recipient = backData.textarea;
				}
				let send_type = parseInt(backData.send_type);
				if (parseInt(backData.send_type) === 4) {
					send_type = 1;
				} else if (parseInt(backData.send_type) === 5) {
					send_type = 2;
				}
				req.send_type = send_type;
				req.language_id = backData.language_id;
				req.title = backData.title;
				if(backData.popup_type == '1'){
                    req.content = backData.login_content;
//                    delete backData.home_content;
//                    delete backData.scoll_content;
				}else  if(backData.popup_type == '2'){
                    req.content = backData.home_content;
//                    delete backData.login_content;
//                    delete backData.scoll_content;
				}else if(backData.popup_type == '3'){
                    req.content = backData.scoll_content;
//                    delete  backData.login_content;
//                    delete  backData.home_content;
                };
				req.start_time = backData.start_time;
				req.end_time = backData.end_time;
				req.popup_type = parseInt(backData.popup_type, 10);
				if((req.recipient.split(',').length) == _this.oneColConfig[2].Arr.length){
					req.recipient = "";
                }
				this.updated = false;
                let str = "";

                this.$.autoAjax('put',URL.api + '/notice', req, {
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            this.$message.success(LANG['消息添加成功'] || '消息添加成功！');
                            this.updated = true;
                        } else if (res.data == false  && res.state > 3) {
                            str = res.msg;
                            this.$message.error(LANG[str] || str);
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
				// this.$http.put(URL.api + '/notice', JSON.stringify(req), URLCONFIG).then((res) => {
				// 	if (res.data.state == 0 && res.data.data) {
				// 		this.$message.success(LANG['消息添加成功'] || '消息添加成功！');
				// 		this.updated = true;
				// 	} else if (res.data.data == false  && res.data.state > 3) {
                 //              str = res.data.msg;
                 //              this.$message.error(LANG[str] || str);
                 //        }
				// })
			},
            //			查询数据
            doQuery(obj){
                this.tableUrl=this.baseUrl+this.addSearch(obj.item)
            },
            //  重置搜索条件
            resetForm(obj){
                if (obj.state && obj.state == "init") {
                    this.tableUrl = this.baseUrl;
                }
            },
			doHandle(obj) {
				switch (obj.fn) {
				    //编辑
					case "doDetail":
						this.doDetail(obj.row);
						break;
					case "doDel":
						this.doDel(obj.row);
						break;
					case "doDesable":
						this.doDesable(obj.row);
                        break;
                    //编辑
//					case "doEdit":
//						this.doEdit(obj.row);
//                        break;
                    //启用
					case "doStart":
						this.doStart(obj.row);
                        break;
                    //停用
					case "doStop":
						this.doStop(obj.row);
                        break;
                }
			},
			//编辑
			doDetail(row) {
				let detailform = this.detailform;
				let _this = this;
				for (let k in row) {
                    k === 'content'? row.popup_type !=='滚动公告' ? detailform[k] = this.markdownTransform(row[k]): detailform[k] = row[k]: detailform[k] = row[k];
				}
				this.dialogTableVisible = true;
				for(let i in _this.detailform){
                    this.editFrom[i] = detailform[i];
				}
                this.confirmConfig.obj = row;
			},
			//保存修改
            doSave(){
                let _this = this, query = {};
                _this.updated = false;
                for(let k in this.editFrom){
                    if(k === "popup_type"){
                        switch (this.editFrom[k]){
							case '登录弹出':
                                query[k] = 1;
                                break;
                            case '首页弹出':
                                query[k] = 2;
                                break;
                            case '滚动公告':
                                query[k] = 3;
                                break;
						}
					}else{
                        query[k] = this.editFrom[k];
					}
				}
				if(query.recipient === '所有层级'){
                    query.recipient = '';
				}else{
                    let values = query.recipient.split(',');
                    if (query.send_type == '1' && values.length>0) {
                        let temp = this.oneColConfig[2].Arr || [],list = [];
                        for(let i=0; i<values.length; i++){
							for(let k=0; k<temp.length; k++){
							    if(values[i] === temp[k].label){
							        list.push(temp[k].value);
								}
							}
                        }
                        query.recipient = list.join(',');
					}
				}

                this.$.autoAjax('put',URL.api + '/notice?id=' + parseInt(query.id), query, {
                    ok: (res) => {
                        let str = "";
                        if (res.state == 0 && res.data) {
                            this.$message.success(LANG['消息修改成功！'] || '消息修改成功！');
                            this.updated = true;
                        } else if (res.data == false  && res.state > 3) {
                            str = res.msg;
                            this.$message.error(LANG[str] || str);
                        }else{
                            this.$message.error(LANG['消息修改失败！'] || '消息修改失败！');
                        }
                        _this.dialogTableVisible = false;
                        _this.loading = false;
                        _this.updated = true;
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
                // this.$http.put(URL.api + '/notice?id=' + parseInt(query.id), JSON.stringify(query), URLCONFIG).then((res) => {
                //     let str = "";
                //     if (res.data.state == 0 && res.data.data) {
                //         this.$message.success(LANG['消息修改成功！'] || '消息修改成功！');
                //         this.updated = true;
                //     } else if (res.data.data == false  && res.data.state > 3) {
                //               str = res.data.msg;
                //               this.$message.error(LANG[str] || str);
                //     }else{
                //         this.$message.error(LANG['消息修改失败！'] || '消息修改失败！');
                //     }
                //     _this.dialogTableVisible = false;
                //     _this.loading = false;
                //     _this.updated = true;
                // })
                .catch((e) => {
                    _this.loading = false;
//                    console.log(e);
                });
//                this.confirmConfig.state = true;
//                this.confirmConfig.msg = (this.LANG['确定修改此公告吗？'] || '确定修改此公告吗？');
//                this.confirmConfig.fn = "saveForm";
//                this.dialogTableVisible = false;

            },
			doDel(row) {
				if (parseInt(row.id)) {
					this.confirmConfig.state = true;
					this.confirmConfig.msg = (this.LANG['确定删除标题为'] || '确定删除标题为') + '"' + row.title + '"' + (this.LANG['内容吗？删除后会员将看不到此公告信息，且不可以恢复。'] || '内容吗？删除后会员将看不到此公告信息，且不可以恢复。');
					this.confirmConfig.fn = "delete";
					this.confirmConfig.obj = row;
				}
			},
			//启用
            doStart(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['你确定启用'] || '你确定启用') + '"' + row.title + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "start";
                    this.confirmConfig.obj = row;
                }
            },
			//停用
            doStop(row) {
                if (parseInt(row.id)) {
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['你确定停用'] || '你确定停用') + '"' + row.title + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "stop";
                    this.confirmConfig.obj = row;
                }
            },
			//确认删除
			doConfirm(obj) {
				this.loading = true;
				let _this = this;
                this.updated = false;
				switch (obj.fn) {
					case "delete":

                        this.$.autoAjax('delete',URL.api + ROUTES.DELETE.notice.$(parseInt(obj.obj.id)), '', {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    this.$message.success(LANG['消息删除成功！'] || '消息删除成功！');
                                    this.updated = true;
                                } else if(res.state >0){
                                    this.$message.error((LANG['消息删除失败！'] || '消息删除失败！') + res.msg);
                                }else{
                                    this.$message.error(LANG['消息删除失败！'] || '消息删除失败！');
                                }
                                _this.loading = false;
                                _this.updated = true;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
						// this.$http.delete(URL.api + ROUTES.DELETE.notice.$(parseInt(obj.obj.id)), URLCONFIG).then((res) => {
						// 	if (res.data.state == 0 && res.data.data) {
						// 		this.$message.success(LANG['消息删除成功！'] || '消息删除成功！');
						// 		this.updated = true;
						// 	} else if(res.data.state >0){
                         //        this.$message.error((LANG['消息删除失败！'] || '消息删除失败！') + res.data.msg);
						// 	}else{
						// 		this.$message.error(LANG['消息删除失败！'] || '消息删除失败！');
						// 	}
						// 	_this.loading = false;
                         //    _this.updated = true;
						// })
                        .catch((e) => {
							_this.loading = false;
						});
						break;
					// 启用
                    case "start":

                        this.$.autoAjax('patch',URL.api + '/notice?id=' + parseInt(obj.obj.id), {'status': 1}, {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    this.$message.success(LANG['消息启用成功！'] || '消息启用成功！');
                                    this.updated = true;
                                } else if(res.state >0){
                                    this.$message.error((LANG['消息启用失败！'] || '消息启用失败！') + res.msg);
                                }else{
                                    this.$message.error(LANG['消息启用失败！'] || '消息启用失败！');
                                }
                                _this.loading = false;
                                _this.updated = true;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                        // this.$http.patch(URL.api + '/notice?id=' + parseInt(obj.obj.id), JSON.stringify({'status': 1}), URLCONFIG).then((res) => {
                        //     if (res.data.state == 0 && res.data.data) {
                        //         this.$message.success(LANG['消息启用成功！'] || '消息启用成功！');
                        //         this.updated = true;
                        //     } else if(res.data.state >0){
                        //         this.$message.error((LANG['消息启用失败！'] || '消息启用失败！') + res.data.msg);
                        //     }else{
                        //         this.$message.error(LANG['消息启用失败！'] || '消息启用失败！');
                        //     }
                        //     _this.loading = false;
                        //     _this.updated = true;
                        // })
                        .catch((e) => {
                            _this.loading = false;
                        });
                        break;
                    // 停用
                    case "stop":

                        this.$.autoAjax('patch',URL.api + '/notice?id=' + parseInt(obj.obj.id), {'status': 2}, {
                            ok: (res) => {
                                if (res.state == 0 && res.data) {
                                    this.$message.success(LANG['消息停用成功！'] || '消息停用成功！');
                                    this.updated = true;
                                } else if(res.state >0){
                                    this.$message.error((LANG['消息停用失败！'] || '消息停用失败！') + res.msg);
                                }else{
                                    this.$message.error(LANG['消息停用失败！'] || '消息停用失败！');
                                }
                                _this.loading = false
                                _this.updated = true;
                            },
                            p: () => {
                            },
                            error: e => {
                                console.log(e)
                            }
                        })
                        // this.$http.patch(URL.api + '/notice?id=' + parseInt(obj.obj.id), JSON.stringify({'status': 2}), URLCONFIG).then((res) => {
                        //     if (res.data.state == 0 && res.data.data) {
                        //         this.$message.success(LANG['消息停用成功！'] || '消息停用成功！');
                        //         this.updated = true;
                        //     } else if(res.data.state >0){
                        //         this.$message.error((LANG['消息停用失败！'] || '消息停用失败！') + res.data.msg);
                        //     }else{
                        //         this.$message.error(LANG['消息停用失败！'] || '消息停用失败！');
                        //     }
                        //     _this.loading = false
                        //     _this.updated = true;
                        // })
                        .catch((e) => {
                            _this.loading = false;
//                            console.log(e);
                        });
                        break;
				}
			},
			doDesable(row) {
				this.updated = false;

                this.$.autoAjax('put',URL.api + '/notice', {"id": row.id},{
                    ok: (res) => {
                        if (res.state == 0 && res.data) {
                            this.$message.success(LANG['发布成功'] || '发布成功！');
                            this.updated = true;
                        } else {
                            this.$message.error(LANG['发布失败'] || '发布失败！');
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
				// this.$http.put(URL.api + '/notice', JSON.stringify({"id": row.id}), URLCONFIG).then((res) => {
				// 	if (res.data.state == 0 && res.data.data) {
				// 		this.$message.success(LANG['发布成功'] || '发布成功！');
				// 		this.updated = true;
				// 	} else {
				// 		this.$message.error(LANG['发布失败'] || '发布失败！');
				// 	}
				// })
			}
		},
        mounted(){

        },
		created() {
			this.init();
		}
	}
</script>
<style lang="less">
    #notice {
		.detail .el-form-item__label {
			width: 100px;
		}
		.content_img_Box img{width: 100%;height: auto;}
		.el-date-editor.el-input {
			width: 120px;
			height: 30px;
		}
	}

</style>
