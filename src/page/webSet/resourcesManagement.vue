<template>
	<div id="resourcesManagement">
		<el-row>
			<el-col :span="24">
				<el-card class="box-card">
					<div slot="header">
						<span class="wrapper">
							<el-button type="default" size="small" @click="uploadFile">{{LANG['上传文件']||'上传文件'}}</el-button>
							<el-button type="primary" size="small" @click="addFileFolderFn">{{LANG['新建文件夹']||'新建文件夹'}}</el-button>
							<el-button type="success" size="small" @click="rename" :disabled="isDisabled">{{LANG['重命名']||'重命名'}}</el-button>
							<el-button type="danger" size="small" :disabled="isDisabled" @click="delect">{{LANG['删除']||'删除'}}</el-button>
						</span>
					</div>
					<div>
						<el-row>
							<el-col :span="24">
								<el-breadcrumb separator="/">
									<el-breadcrumb-item><span @click="init">{{LANG['全部文件']||'全部文件'}}</span></el-breadcrumb-item>
									<el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
										<span @click="handleBreadcrumb(item,index)">{{item}}</span>
									</el-breadcrumb-item>
								</el-breadcrumb>
							</el-col>
						</el-row>
							<el-row>
								<el-col :span="24">
									<div class="file-header">
										<ul>
											<li class="name">
												<!-- <el-checkbox class="allSelect"></el-checkbox> -->
												<span>{{LANG['文件名']||'文件名'}}</span>
											</li>
											<li class="size">
												<span>{{LANG['大小']||'大小'}}</span>
											</li>
											<li class="operating">
												<span>{{LANG['操作']||'操作'}}</span>
											</li>
										</ul>
									</div>
									<!--文件内容区-->
									<div ref="fileContent" v-contentHeight>
										<!--新增文件夹-->
										<div class="file-item" v-if="addFileFolder">
											<ul>
												<li class="name">
													<el-checkbox class="allSelect fl"></el-checkbox>
													<div style="float:left;margin-left:4px;margin-right:9px;">
														<img width="20" height="20" src="../../../static/img/folder.svg">
													</div>
													<div style="width:50%;float:left;margin-right:10px;">
														<el-input
															size="small"
															v-model="fileFolderName"
															:placeholder="LANG['文件夹名称,只能数字、字母、下划线']||'文件夹名称,只能数字、字母、下划线'">
														</el-input>
													</div>
													<el-button
														size="small"
														style="color:#3b8cff;border-color:#c5ddff"
														@click="confirmAddFileFolder">
															<i class="el-icon-check"></i>
													</el-button>
													<el-button
														size="small"
														style="color:#3b8cff;border-color:#c5ddff"
														@click="addFileFolder=false">
															<i class="el-icon-close"></i>
													</el-button>
												</li>
												<li class="size">
													<span>-</span>
												</li>
											</ul>
										</div>
										<!--修改文件夹-->
										<div class="file-item" v-if="modifyFileFolder">
											<ul>
												<li class="name">
													<el-checkbox class="allSelect fl"></el-checkbox>
													<div style="float:left;margin-left:4px;margin-right:9px;">
														<img width="20" height="20" src="../../../static/img/folder.svg">
													</div>
													<div style="width:50%;float:left;margin-right:10px;">
														<el-input size="small" v-model="modifyFileFolderName"></el-input>
													</div>
													<el-button
														size="small"
														style="color:#3b8cff;border-color:#c5ddff"
														@click="confirmModifyFileFolder">
															<i class="el-icon-check"></i>
													</el-button>
													<el-button
														size="small"
														style="color:#3b8cff;border-color:#c5ddff"
														@click="cancelModifyFileFolder">
															<i class="el-icon-close"></i>
													</el-button>
												</li>
												<li class="size">
														<span>-</span>
												</li>
											</ul>
										</div>
										<!--修改文件-->
										<div class="file-item" v-if="modifyFile">
											<ul>
												<li class="name">
													<el-checkbox class="allSelect fl"></el-checkbox>
													<div style="width:50%;float:left;margin-right:10px;">
														<el-input size="small" v-model="modifyFileName"></el-input>
													</div>
													<el-button
														size="small"
														style="color:#3b8cff;border-color:#c5ddff"
														@click="confirmModifyFile">
															<i class="el-icon-check"></i>
													</el-button>
													<el-button
														size="small"
														style="color:#3b8cff;border-color:#c5ddff"
														@click="cancelModifyFile">
															<i class="el-icon-close"></i>
													</el-button>
												</li>
												<li class="size">
													<span>-</span>
												</li>
											</ul>
										</div>
										<!--目录列表-->
										<div class="file-item" v-for="(item,index) in dirList" :key="index">
											<ul>
												<li class="name">
													<el-checkbox
														v-if="item.dirtype=='normal'"
														class="allSelect"
														v-model="dirList[index].dirIsCheck"
														@change="dirItemChange(dirList[index].dirIsCheck,index)">
													</el-checkbox>
													<img
														v-if="item.dirtype=='sys'"
														width="40" height="40"
														src="../../../static/img/default.svg" @click="folder(item)">
													<img width="20" height="20" src="../../../static/img/folder.svg" @click="folder(item)">
													<span @click="folder(item)">{{item.name}}</span>
												</li>
												<li class="size">
													<span>-</span>
												</li>
												<li class="operating">
													<span>-</span>
												</li>
											</ul>
										</div>
										<!--文件列表-->
										<div class="file-item" v-for="(item,index) in fileList">
											<ul>
												<li class="name">
													<el-checkbox class="allSelect" v-model="fileList[index].fileIsCheck" @change="fileItemChange(fileList[index].fileIsCheck,index)">
													</el-checkbox>
													<!--<img width="20" height="20" src="../../../static/img/file.svg">-->
													<img width="20" height="20" :src="imgBaseUrl + item.url" @click="previewImg(item)">
													<span @click="previewImg(item)">{{item.name}}</span>
												</li>
												<li class="size">
													<span>{{item.filesize / 1000}}k</span>
												</li>
												<li class="operating">
													<el-button size="small" class="clipboardBtn" @click="copyImgUrl" :data-clipboard-text="imgBaseUrl + item.url">
														{{LANG['复制图片路径']||'复制图片路径'}}
													</el-button>
												</li>
											</ul>
										</div>
										<div class="file-item tCent" v-if="dirList.length==0&&fileList==0&&modifyFile==false&&modifyFileFolder==false">
											<span>该文件夹下无内容</span>
										</div>
									</div>
								</el-col>
							</el-row>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<!--文件上传-->
		<el-dialog title="文件上传" :visible.sync="isShowFileUpload" size="tiny" :before-close="handleClose">
			<span v-if="isShowFileUpload">
				<upload :uploadUrl="baseURL" @response="doSaveFile" :fileNum="1" :folder="fileUploadDir"></upload>
			</span>
			<span slot="footer" class="dialog-footer">
				<el-button @click="isShowFileUpload = false">取 消</el-button>
			</span>
		</el-dialog>
		<!--图片预览-->
		<el-dialog title="预览" :visible.sync="isOpenPreviewImg">
			<img width="660" :src="imgBaseUrl + previewImgUrl">
		</el-dialog>
	</div>
</template>
<script>
import Clipboard from 'clipboard';
import upload from '../../components/upload.vue';
export default {
	name: 'resourcesManagement',
	data() {
		return {
			LANG,
			baseURL: URL.rpi,
			imgBaseUrl: URL.img,
			fileUploadDir: '', // 文件上传目录
			addFileFolder: false,
			modifyFileFolder: false, // 是否显示修改文件夹的输入框
			isDisabled: true,
			isShowFileUpload: false,
			fileFolderName: '',
			modifyFileFolderName: '',
			modifyFile: false, // 是否显示修改文件的输入框
			modifyFileName: '',
			dirList: [], // 目录列表
			fileList: [], // 文件列表
			breadcrumbList: [], // 面包屑导航列表
			dirCheckList: [], // 目录选中列表
			fileCheckList: [], // 文件选中列表
			isOpenPreviewImg: false,
			previewImgUrl: ''
		}
	},
	components: {
		upload
	},
	mounted() {
		this.init();
	},
	activated () {
		this.init();
	},
	methods: {
		init: function () {
			let options = {
				target: this.$refs.fileContent
			}
			let loadingInstance = this.$loading(options)

            this.$.autoAjax('get',this.baseURL,  '', {
                ok: (res) => {
                    if (res.state == '0') {
                        loadingInstance.close();
                        this.breadcrumbList = [];
                        this.dirList = res.data.dir;
                        this.fileList = res.data.file;
                    }
                },
                p: () => {
                },
                error: e => {
                    loadingInstance.close();
                    this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
                }
            })
			// this.$http.get(this.baseURL, URLCONFIG).then((res) => {
			// 	if (res.data.state == '0') {
			// 		loadingInstance.close();
			// 		this.breadcrumbList = [];
			// 		this.dirList = res.data.data.dir;
			// 		this.fileList = res.data.data.file;
			// 	}
			// }).catch((e) => {
			// 	loadingInstance.close();
			// 	this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
			// });
		},
		// 打开当前目录的子目录
		folder: function (data) {
			let options = {
				target: this.$refs.fileContent
			}
			let loadingInstance = this.$loading(options)
			this.breadcrumbList.push(data.name)

            this.$.autoAjax('get',this.baseURL + data.folder,'', {
                ok: (res) => {
                    if (res.state == '0') {
                        loadingInstance.close();
                        this.dirList = res.data.dir;
                        this.fileList = res.data.file;
                    }
                },
                p: () => {
                },
                error: e => {
                    loadingInstance.close();
                    this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
                }
            })
			// this.$http.get(this.baseURL + data.folder, URLCONFIG).then((res) => {
			// 	if (res.data.state == '0') {
			// 		loadingInstance.close();
			// 		this.dirList = res.data.data.dir;
			// 		this.fileList = res.data.data.file;
			// 	}
			// }).catch((e) => {
			// 	loadingInstance.close();
			// 	this.$message.error(LANG['未知错误 ，请稍后重试！'] || '未知错误 ，请稍后重试！');
			// });
		},
		// 新增文件夹
		addFileFolderFn: function () {
			this.addFileFolder = true
			// 使滚动条滚动到最顶部
			this.$refs.fileContent.scrollTop = 0 + 'px'
		},
		// 确认新建文件夹
		confirmAddFileFolder: function () {
			let options = {
				target: this.$refs.fileContent
			}
			let loadingInstance = this.$loading(options)
			let param = '';
			this.breadcrumbList.forEach((item) => {
				param = param + '/' + item
			})

            this.$.autoAjax('post',this.baseURL + (param == '' ? '/' : param), {post_type: 'createdir', folder: this.fileFolderName}, {
                ok: (res) => {
                    if (res.state == '0') {
                        loadingInstance.close();
                        this.fileFolderName = '';
                        this.$message('创建成功！');
                        this.addFileFolder = false;
                        this.dirList.push(res.data.dir[0]);
                    } else {
                        this.$message(res.msg);
                        loadingInstance.close();
                    }
                },
                p: () => {
                },
                error: e => {
                    loadingInstance.close();
                    this.$message(err)
                }
            })
			// this.$http.post(this.baseURL + (param == '' ? '/' : param), {post_type: 'createdir', folder: this.fileFolderName}, URLCONFIG).then((res) => {
			// 	if (res.data.state == '0') {
			// 		loadingInstance.close();
			// 		this.fileFolderName = '';
			// 		this.$message('创建成功！');
			// 		this.addFileFolder = false;
			// 		this.dirList.push(res.data.data.dir[0]);
			// 	} else {
			// 		this.$message(res.data.msg);
			// 		loadingInstance.close();
			// 	}
			// }).catch((err) => {
			// 	loadingInstance.close();
			// 	this.$message(err)
			// })
		},
		// 重命名
		rename: function () {
			// 使滚动条滚动到最顶部
			this.$refs.fileContent.scrollTop = 0 + 'px'
			let list = this.dirCheckList.length > 0 ? this.dirCheckList : this.fileCheckList;
			let item = list[0].split('/')[list[0].split('/').length - 1];
			if (this.dirCheckList.length > 0) {
				this.modifyFileFolder = true;
				this.modifyFileFolderName = item;
				this.dirList.forEach((i, index) => {
					if (i.name == item) {
						// 保存被移除的文件夹单项，如果用户点取消可以恢复
						this.temporaryDirItem = this.dirList.splice(index, 1);
						this.temporaryDirIndex = index;
					}
					if (this.dirList[index]) {
						this.dirList[index].dirIsCheck = false;
					}
				})
				this.dirCheckList = [];
				this.isDisabled = true;
			} else {
				this.modifyFile = true;
				this.modifyFileName = item;
				this.fileList.forEach((i, index) => {
					if (i.name == item) {
						// 保存被移除的文件单项，如果用户点取消可以恢复
						this.temporaryFileItem = this.fileList.splice(index, 1);
						this.temporaryFileIndex = index;
					}
					if (this.fileList[index]) {
						this.fileList[index].fileIsCheck = false;
					}
				})
				this.fileCheckList = [];
				this.isDisabled = true;
			}
		},
		// 确认文件夹重命名
		confirmModifyFileFolder: function () {
			let param = '';
			this.breadcrumbList.forEach((item) => {
				param = param + '/' + item
			})

            this.$.autoAjax('post',this.baseURL + param + this.temporaryDirItem[0].folder, {post_type: 'rname', nname: this.modifyFileFolderName}, {
                ok: (res) => {
                    if (res.state == '0') {
                        this.$message('修改成功！');
                        this.refresh();
                        this.modifyFileFolder = false;
                        this.modifyFileFolderName = '';
                    }
                },
                p: () => {
                },
                error: e => {
                    this.$message(err)
                }
            })
			// this.$http.post(this.baseURL + param + this.temporaryDirItem[0].folder, {post_type: 'rname', nname: this.modifyFileFolderName}, URLCONFIG).then((res) => {
			// 	if (res.data.state == '0') {
			// 		this.$message('修改成功！');
			// 		this.refresh();
			// 		this.modifyFileFolder = false;
			// 		this.modifyFileFolderName = '';
			// 	}
			// }).catch((err) => {
			// 	this.$message(err)
			// })
		},
		// 取消文件夹重命名
		cancelModifyFileFolder: function () {
			this.modifyFileFolder = false;
			this.temporaryDirItem[0].dirIsCheck = false;
			this.dirList.splice(this.temporaryDirIndex, 0, this.temporaryDirItem[0]);
		},
		// 确认文件重命名
		confirmModifyFile: function () {
			let param = '';
			this.breadcrumbList.forEach((item) => {
				param = param + '/' + item
			})

            this.$.autoAjax('post',this.baseURL + param + this.temporaryFileItem[0].folder, {post_type: 'rname', nname: this.modifyFileName}, {
                ok: (res) => {
                    if (res.state == '0') {
                        this.$message('修改成功！');
                        this.refresh();
                        this.modifyFile = false;
                        this.modifyFileName = '';
                    }
                },
                p: () => {
                },
                error: e => {
                    this.$message(err)
                }
            })
			// this.$http.post(this.baseURL + param + this.temporaryFileItem[0].folder, {post_type: 'rname', nname: this.modifyFileName}, URLCONFIG).then((res) => {
			// 	if (res.data.state == '0') {
			// 		this.$message('修改成功！');
			// 		this.refresh();
			// 		this.modifyFile = false;
			// 		this.modifyFileName = '';
			// 	}
			// }).catch((err) => {
			// 	this.$message(err)
			// })
		},
		// 取消文件重命名
		cancelModifyFile: function () {
			this.modifyFile = false;
			this.temporaryFileItem[0].fileIsCheck = false;
			this.fileList.splice(this.temporaryFileIndex, 0, this.temporaryFileItem[0]);
		},
		// 删除
		delect: function () {
			this.$confirm('确认删除吗？该操作不可恢复').then(() => {
				let options = {
					target: this.$refs.fileContent
				}
				let loadingInstance = this.$loading(options)
				let list = this.dirCheckList.length > 0 ? this.dirCheckList : this.fileCheckList;

                this.$.autoAjax('delete',this.baseURL + list[0], '', {
                    ok: (res) => {
                        if (res.state == '0') {
                            loadingInstance.close();
                            if (this.dirCheckList.length > 0) {
                                this.refresh();
                                this.$message('删除成功！');
                                this.isDisabled = true;
                            } else {
                                this.refresh();
                                this.$message('删除成功！');
                                this.isDisabled = true;
                            }
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        loadingInstance.close();
                        this.$message(err)
                    }
                })
				// this.$http.delete(this.baseURL + list[0], URLCONFIG).then((res) => {
				// 	if (res.data.state == '0') {
				// 		loadingInstance.close();
				// 		if (this.dirCheckList.length > 0) {
				// 			this.refresh();
				// 			this.$message('删除成功！');
				// 			this.isDisabled = true;
				// 		} else {
				// 			this.refresh();
				// 			this.$message('删除成功！');
				// 			this.isDisabled = true;
				// 		}
				// 	}
				// }).catch((err) => {
				// 	loadingInstance.close();
				// 	this.$message(err)
				// })
			}).catch(() => {
			});
		},
		// 面包屑导航
		handleBreadcrumb: function (data, index) {
			let options = {
				target: this.$refs.fileContent
			}
			let loadingInstance = this.$loading(options)
			this.breadcrumbList.splice(index + 1, this.breadcrumbList.length - index);
			let param = '';
			this.breadcrumbList.forEach((item) => {
				param = param + '/' + item
			})

            this.$.autoAjax('get',this.baseURL + param, '', {
                ok: (res) => {
                    if (res.state == '0') {
                        loadingInstance.close();
                        this.dirList = res.data.dir;
                        this.fileList = res.data.file;
                    }
                },
                p: () => {
                },
                error: e => {
                    loadingInstance.close();
                    this.$message(err)
                }
            })
			// this.$http.get(this.baseURL + param, URLCONFIG).then((res) => {
			// 	if (res.data.state == '0') {
			// 		loadingInstance.close();
			// 		this.dirList = res.data.data.dir;
			// 		this.fileList = res.data.data.file;
			// 	}
			// }).catch((err) => {
			// 	loadingInstance.close();
			// 	this.$message(err)
			// })
		},
		// 目录change事件
		dirItemChange: function (isCheck, index) {
			if (isCheck) {
				this.dirCheckList.push(this.dirList[index].folder);
			} else {
				let i = this.dirCheckList.indexOf(this.dirList[index].folder);
				this.dirCheckList.splice(i, 1);
			}
			if (this.dirCheckList.length == 1 || this.fileCheckList.length == 1) {
				this.isDisabled = false;
			} else {
				this.isDisabled = true;
			}
		},
		// 文件change事件
		fileItemChange: function (isCheck, index) {
			if (isCheck) {
				this.fileCheckList.push(this.fileList[index].folder);
			} else {
				let i = this.fileCheckList.indexOf(this.fileList[index].folder);
				this.fileCheckList.splice(i, 1);
			}
			if (this.dirCheckList.length == 1 || this.fileCheckList.length == 1) {
				this.isDisabled = false;
			} else {
				this.isDisabled = true;
			}
		},
		// 刷新当前目录
		refresh: function () {
			let options = {
				target: this.$refs.fileContent
			}
			let loadingInstance = this.$loading(options)
			let param = '';
			this.breadcrumbList.forEach((item) => {
				param = param + '/' + item
			})

            this.$.autoAjax('get',this.baseURL + param, '', {
                ok: (res) => {
                    if (res.state == '0') {
                        this.dirCheckList = [];
                        this.fileCheckList = [];
                        loadingInstance.close();
                        res.data.dir.forEach((item) => {
                            item.dirIsCheck = false;
                        })
                        res.data.file.forEach((item) => {
                            item.fileIsCheck = false;
                        })
                        this.dirList = res.data.dir;
                        this.fileList = res.data.file;
                    }
                },
                p: () => {
                },
                error: e => {
                    loadingInstance.close();
                    this.$message(err)
                }
            })
			// this.$http.get(this.baseURL + param, URLCONFIG).then((res) => {
			// 	if (res.data.state == '0') {
			// 		this.dirCheckList = [];
			// 		this.fileCheckList = [];
			// 		loadingInstance.close();
			// 		res.data.data.dir.forEach((item) => {
			// 			item.dirIsCheck = false;
			// 		})
			// 		res.data.data.file.forEach((item) => {
			// 			item.fileIsCheck = false;
			// 		})
			// 		this.dirList = res.data.data.dir;
			// 		this.fileList = res.data.data.file;
			// 	}
			// }).catch((err) => {
			// 	loadingInstance.close();
			// 	this.$message(err)
			// })
		},
		// 文件上传
		uploadFile: function () {
			this.isShowFileUpload = true;
			let param = '';
			this.breadcrumbList.forEach((item) => {
				param = param + '/' + item
			})
			this.fileUploadDir = param;
		},
		// 关闭文件上传对话框
		handleClose: function () {
			this.isShowFileUpload = false;
		},
		doSaveFile: function (data) {
			this.$message('上传成功！');
			this.isShowFileUpload = false;
			this.refresh();
		},
		// 图片预览
		previewImg: function (data) {
			this.isOpenPreviewImg = true;
			this.previewImgUrl = data.url;
		},
		// copy图片路径
		copyImgUrl: function () {
			let clipboard = new Clipboard('.clipboardBtn');
			clipboard.on('success', (e) => {
				this.$message('复制成功！')
			});
			clipboard.on('error', (e) => {
				this.$message.error('复制失败请重试！')
			})
		}
	},
	directives: {
		// 计算文件夹内容区高度的指令
		contentHeight: {
			bind: function (el) {
				let calculation = () => {
					el.style.height = window.innerHeight - 270 + 'px';
					el.style.maxHeight = window.innerHeight - 270 + 'px';
					el.style.overflow = 'auto';
				}
				calculation();
				window.onresize = () => calculation();
			}
		}
	}
}
</script>
<style scoped>
img {
	vertical-align: middle;
}
.file-header {
	height: 36px;
	border-bottom: 1px solid #f2f6fd;
	margin-top: 8px;
	font-size: 14px;
	color: #888;
}
.file-header .name {
	width: 45%;
	line-height: 36px;
	float: left;
}
.file-header .name .allSelect {
	margin-left: 6px;
	margin-right: 6px;
}
.file-header .size {
	width: 30%;
	line-height: 36px;
	float: left;
	text-align: center
}
.file-header .operating {
	width: 25%;
	line-height: 36px;
	float: left;
	text-align: center
}
.file-item {
	height: 36px;
	border-bottom: 1px solid #f2f6fd;
	margin-top: 8px;
	font-size: 14px;
	color: #888;
}
.file-item .name {
	width: 45%;
	line-height: 36px;
	float: left;
	cursor: pointer;
}
.file-item .name .allSelect {
	margin-left: 6px;
	margin-right: 6px;
}
.file-item .size {
	width: 30%;
	line-height: 36px;
	float: left;
	text-align: center
}
.file-item .operating {
	width: 25%;
	line-height: 36px;
	float: left;
	text-align: center
}
</style>
