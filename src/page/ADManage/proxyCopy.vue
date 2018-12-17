<template>
  <div id="proxyCopy" v-loading="loading">
    <el-col STYLE="text-align: right;" class="pb">
      <el-button class="btn_right" size="small" type="primary" v-text="LANG['新增代理文案'] || '新增代理文案'"
                 @click="AddNew"></el-button>
    </el-col>
    <el-col>
      <tablegrid
        :columnsUrl="columnsUrl"
        :tableUrl="tableUrl"
        :tableCheck="false"
        :tableIndex="false"
        :showRefresh="true"
        :updated="updated"
        @do-handle="doHandle">
      </tablegrid>
    </el-col>
    <formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="formConfig" :type="type"
              :labelWidth="labelWidth" :isEdit="isEdit" @get-form="getForm" :formType="formType"></formEdit>

    <el-col>
      <el-dialog :title="titleDetails" v-model="dialogTableVisible" class="detail" size="tiny">
        <el-form :model="details">
          <el-form-item :label="LANG['文案名称:'] || '文案名称:'" :label-width="formLabelWidth">
            <span>{{details.name}}</span>
          </el-form-item>
          <el-form-item :label="LANG['语言:'] || '语言:'" :label-width="formLabelWidth">
            <p style="width: 90%;">{{details['language_name']}}</p>
          </el-form-item>
          <el-form-item :label="LANG['当前排序'] || '当前排序'" :label-width="formLabelWidth">
            <p style="width: 90%;">{{details['sort']}}</p>
          </el-form-item>
          <el-form-item :label="LANG['文案内容:'] || '文案内容:'" :label-width="formLabelWidth">
            <div v-html="details['content']" class="mark_waip"></div>
          </el-form-item>
          <el-form-item :label="LANG['生成时间:'] || '生成时间:'" :label-width="formLabelWidth">
            <span>{{details['created']}}</span>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">关 闭</el-button>
            </span>
      </el-dialog>
    </el-col>
  </div>
</template>
<script>
  import tableGrid from '../../components/tableGrid.vue'
  import formEdit from '../../components/formEdit.vue'

  export default {
    data() {

      return {
        loading: false,
        LANG,
        //数据接口地址
        tableUrl: "",
        //列配置接口地址
        columnsUrl: "",
        //新增修改
        type: "default",
        formTitel: "",
        labelWidth: "90px",
        isEdit: {
          state: false
        },
        formVisible: {
          state: false
        },
        //当前FORM类型，新增add,修改edit
        formType: "",
        // 详情弹窗参数配置
        formConfig: [
          {
            "prop": "name", "value": "", "label": "文案类型", "type": "select",
            "list": ARRAYS.proxyCopyList, // 司机要求前端写死
            "rules": [{"require": true}]
          },
          {
            "prop": "language_id", "value": "", "label": "语言", "type": "select",
            "list": [],
            "propVal": "language_name",
            "rules": [{"require": true}]
          },
          {"prop": "sort", "value": "", "type": "number", "label": "排序", "rules": [{"require": true, "integer": true}]},
          {
            "prop": "content", "value": "", "type": "markdown", "label": "文案内容",
            "rules": [{"require": true}]
          }
        ],
        editflag: false,
        updated: false,
        nowId: -1,
        //查看详情的标题
        titleDetails: '',
        //查看的窗口状态
        dialogTableVisible: false,
        details: {},
        formLabelWidth: '100px'

      }
    },
    components: {
      tablegrid: tableGrid,
      formEdit: formEdit
    },
    methods: {
      init() {
        this.tableUrl = URL.api + ROUTES.GET.copywriter.proxy;
        this.baseUrl = URL.api + ROUTES.GET.copywriter.proxy;
        this.columnsUrl = "/static/json/ADManage/proxyCopy/columns.json";
        //获取语言列表
        let langeUrl = URL.api + ROUTES.GET.langeages;

          this.$.autoAjax('get',langeUrl, '', {
              ok: (res) => {
                  let model = res.data
                  for (let i in model) {
                      this.formConfig[1].list.push({
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
        // this.$http.get(langeUrl, URLCONFIG).then((res) => {
        //   let model = res.data.data
        //   for (let i in model) {
        //     this.formConfig[1].list.push({
        //       "label": model[i].name.toString(),
        //       "value": model[i].id.toString()
        //     })
        //   }
        // })
        /* // 获取代理文案类型 司机要求前端写死
		 let typeUrl = URL.api + '/copywriter/types';
		 this.$http.get(typeUrl, URLCONFIG).then((res) => {
			 let model = res.data.data
			 for (let i in model) {
				 this.formConfig[0].list.push({
					 "label": model[i].name,
					 "value": model[i].name
				 })
			 }
		 })*/
      },
      //表格操作点击事件处理
      doHandle(e) {
        this.formType = "";
        switch (e.fn) {
          case "doDetails":
            this.doDetails(e.row);
            break;
          case "doApption":
            this.doApption(e.row);
            break;
          case "doEnabled":
            this.doEnabled(e.row);
            break;
          case "doDisabled":
            this.doDisabled(e.row);
            break;
          case "doEdit":
            this.doEdit(e.row);
            break;
          case "doDelete":
            this.doDelete(e.row);
            break;
        }
      },
      //新增
      AddNew() {
        this.formTitel = "新增代理文案";
        this.formType = "add";
        this.formVisible.state = true
      },
      //保存数据
      getForm(obj) {
        // 代理文案只有pc平台拥有
        obj.formObj.pf = 'pc';
        this.fullscreenLoading = true;
        this.updated = false;
        let str = "";
        if (this.formType != "edit") {

            this.$.autoAjax('put',URL.api + ROUTES.POST.copywriter.proxy,obj.formObj, {
                ok: (res) => {
                    if (res.data && res.state == 0) {
                        this.$message.success(LANG["恭喜您，新增代理文案成功！"] || "恭喜您，新增代理文案成功！");
                    } else if (res.data == false && res.state > 3) {
                        str = res.msg;
                        this.$message.error(LANG[str] || str);
                    }
                    this.formType = ""
                    obj.formObj = "";
                    this.updated = true;
                },
                p: () => {
                },
                error: e => {
                    console.log(e)
                }
            })
          // this.$http.put(URL.api + ROUTES.POST.copywriter.proxy, JSON.stringify(obj.formObj), URLCONFIG).then((res) => {
          //   if (res.data.data && res.data.state == 0) {
          //     this.$message.success(LANG["恭喜您，新增代理文案成功！"] || "恭喜您，新增代理文案成功！");
          //   } else if (res.data.data == false && res.data.state > 3) {
          //     str = res.data.msg;
          //     this.$message.error(LANG[str] || str);
          //   }
          //   this.formType = ""
          //   obj.formObj = "";
          //   this.updated = true;
          // })
        } else {

            this.$.autoAjax('put',URL.api + ROUTES.PUT.copywriter.proxy.newProxy+"?id="+(this.nowId), obj.formObj, {
                ok: (res) => {
                    if (res.data && res.state == 0) {
                        this.$message.success(LANG["恭喜您，修改代理文案成功！"] || "恭喜您，修改代理文案成功！");
                    } else if (res.data == false && res.state > 3) {
                        str = res.msg;
                        this.$message.error(LANG[str] || str);
                    }
                    this.formType = "";
                    obj.formObj = ""
                    this.updated = true;
                },
                p: () => {
                },
                error: e => {
                    console.log(e)
                }
            })
          // this.$http.put(URL.api + ROUTES.PUT.copywriter.proxy.newProxy+"?id="+(this.nowId), JSON.stringify(obj.formObj), URLCONFIG).then((res) => {
          //   if (res.data.data && res.data.state == 0) {
          //     this.$message.success(LANG["恭喜您，修改代理文案成功！"] || "恭喜您，修改代理文案成功！");
          //   } else if (res.data.data == false && res.data.state > 3) {
          //     str = res.data.msg;
          //     this.$message.error(LANG[str] || str);
          //   }
          //   this.formType = "";
          //   obj.formObj = ""
          //   this.updated = true;
          // })
        }

      },
      //启用
      doEnabled(row) {
        let _this = this;
        let val = row.id;
        this.updated = false;

          this.$.autoAjax('patch',URL.api + ROUTES.PATCH.copywriter.proxy.$(val), {"status": "enabled", "language_id": parseInt(row.language_id), "pf": row.pf}, {
              ok: (res) => {
                  if (res.state == 0 && res.data) {
                      this.$message.success(LANG["启用成功"] || "启用成功");
                      this.updated = true;
                  } else {
                      this.$message.error(LANG["启用失败"] || "启用失败");
                  }
              },
              p: () => {
              },
              error: e => {
                  console.log(e)
              }
          })
        // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.proxy.$(val), JSON.stringify({"status": "enabled", "language_id": parseInt(row.language_id), "pf": row.pf}), URLCONFIG).then((res) => {
        //   if (res.data.state == 0 && res.data.data) {
        //     this.$message.success(LANG["启用成功"] || "启用成功");
        //     this.updated = true;
        //   } else {
        //     this.$message.error(LANG["启用失败"] || "启用失败");
        //   }
		//
        // })
      },
      doDelete(row) {
        let _this = this;
        let val = row.id;
        this.updated = false;

          this.$.autoAjax('delete',URL.api + ROUTES.DELETE.copywriter.proxy.$(val), '', {
              ok: (res) => {
                  if (res.state == 0 && res.data) {
                      this.$message.success(LANG["删除成功"] || "删除成功");
                      this.updated = true;
                  } else {
                      this.$message.error(LANG["删除失败"] || "删除失败");
                  }
              },
              p: () => {
              },
              error: e => {
                  console.log(e)
              }
          })
        // this.$http.delete(URL.api + ROUTES.DELETE.copywriter.proxy.$(val), URLCONFIG).then((res) => {
        //   if (res.data.state == 0 && res.data.data) {
        //     this.$message.success(LANG["删除成功"] || "删除成功");
        //     this.updated = true;
        //   } else {
        //     this.$message.error(LANG["删除失败"] || "删除失败");
        //   }
		//
        // })

      },
      //停用
      doDisabled(row) {
        let _this = this;
        let val = row.id;
        this.updated = false;

          this.$.autoAjax('patch',URL.api + ROUTES.PATCH.copywriter.proxy.$(val), {"status": "disabled", "language_id": parseInt(row.language_id), "pf": row.pf}, {
              ok: (res) => {
                  if (res.state == 0 && res.data) {
                      this.$message.success(LANG["停用成功"] || "停用成功");
                      this.updated = true;
                  } else {
                      this.$message.error(LANG["停用失败"] || "停用失败");
                  }
              },
              p: () => {
              },
              error: e => {
                  console.log(e)
              }
          })
        // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.proxy.$(val), JSON.stringify({"status": "disabled", "language_id": parseInt(row.language_id), "pf": row.pf}), URLCONFIG).then((res) => {
        //   if (res.data.state == 0 && res.data.data) {
        //     this.$message.success(LANG["停用成功"] || "停用成功");
        //     this.updated = true;
        //   } else {
        //     this.$message.error(LANG["停用失败"] || "停用失败");
        //   }
		//
        // })
      },
      //申请
      doApption(obj) {
        let val = obj.id;
        this.updated = false;

          this.$.autoAjax('patch',URL.api + ROUTES.PATCH.copywriter.proxy.$(val), {"approve_status": "applying", "language_id": obj.language_id, "pf": obj.pf}, {
              ok: (res) => {
                  if (res.data && res.state == 0) {
                      //刷新数据
                      this.$message.success(LANG["申请成功"] || "申请成功");
                  } else {
                      this.$message.error(LANG["申请失败"] || "申请失败");
                  }
                  this.updated = true;
              },
              p: () => {
              },
              error: e => {
                  console.log(e)
              }
          })
        // this.$http.patch(URL.api + ROUTES.PATCH.copywriter.proxy.$(val), JSON.stringify({"approve_status": "applying", "language_id": obj.language_id, "pf": obj.pf}), URLCONFIG).then((res) => {
        //   if (res.data && res.data.state == 0) {
        //     //刷新数据
        //     this.$message.success(LANG["申请成功"] || "申请成功");
        //   } else {
        //     this.$message.error(LANG["申请失败"] || "申请失败");
        //   }
        //   this.updated = true;
        // })
      },

      //编辑
      doDetails(row) {
        row.type_id = row.type;
        this.nowId = row.id;
        this.titleDetails = '《' + row.name + '》' + '的详情';
        this.dialogTableVisible = true;
        for (let k in row) {
//                    if(k === 'content'){
//                        this.details[k] = this.markdownTransform(row[k]);
//                    }else{
          this.details[k] = row[k];
//                    }
        }
      },
      doEdit(row) {
        this.nowId = row.id;
        this.loading = true;
        this.formVisible.state = true;
        this.isEdit.state = true;
        this.formTitel = "修改代理文案";
        FORMVAL(row, this.formConfig);
        this.formType = "edit";
        this.loading = false;
      }
    },
    created() {
      this.init();
    }
  }
</script>
<style>
  .tempAdHome .el-dialog {
    min-width: 400px;
  }

  .tempAdHome .bg-purple-dark {
    background: none;
  }

  .tempAdHome .addManage {
    float: right;
  }

  .tempAdHome .block {
    text-align: right;
  }

  #proxyCopy .mark_waip table {
    width: 100% !important;
  }

  #proxyCopy .detail .el-form-item__content img {
    width: 100%;
  }
</style>
