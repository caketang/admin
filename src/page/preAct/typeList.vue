<template>
    <div id="typeList" class="clearfix" v-loading="loading">
        <el-col style="text-align: right;margin-bottom: 10px;">
            <el-button class="btn_right"  type="primary" size="small" v-text="LANG['新增优惠类型'] || '新增优惠类型'" @click="AddNew" ></el-button>
        </el-col>
        <el-col>
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableIndex="false"
                    :tableCheck="false"
                    :updated="updated"
                    @do-handle="doHandle"
                    :showRefresh="true"
                    :tableUrl="tableUrl"></tablegrid>
        </el-col>
        <el-col>
            <formEdit :formTitel="formTitel"
                      :formVisible="editVisible"
                      :formConfig="formConfig"
                      :type="type"
                      :labelWidth="labelWidth"
                      @get-form="getForm"
                      :isEdit="isEdit"
                      :formType="formType"></formEdit>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
    </div>
</template>
<script>
    import tableGrid  from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    import confirm from '../../components/confirm.vue'
    export default{
        data(){
            return{
                LANG,
                //弹窗
                formConfig:[
                    {"prop":"name","value":"","type":"text","label":"优惠活动类型名称","rules":[{"require":true}]},
                    {"prop":"description","value":"","type":"textarea","label":"优惠活动类型描述","rules":[{"max":30,"require":true}]},
                    {"prop":"sort","value":"0","type":"text","label":"排序","rules":[{"max":30,"require":true},{"integer":true}]},
                ],
                type:"default",
                formTitel:"",
                labelWidth:"150px",
                editVisible:{
                    state:false
                },
                // 是否编辑数据
                isEdit:{
                    state:false
                },
                //数据接口地址
                tableUrl: "",
                //列配置接口地址
                columnsUrl: "",
                baseUrl : "",
                //是否刷新表格列表
                updated:false,
                formType:'',
                //删除确认
                confirmConfig:{
                    state:false,
                    msg:"",
                    fn:""
                },
                loading: false,
                nowId: -1
            }
        },
        components: {
            tablegrid:tableGrid,
            formEdit:formEdit,
            confirm:confirm
        },
        methods: {
            init(){
                this.tableUrl = URL.api + ROUTES.GET.activity.types;
                this.columnsUrl = "static/json/preAct/typeList/columns.json";
            },
            //新增
            AddNew(){
                this.formTitel = this.LANG["新增优惠活动类型"]||"新增优惠活动类型";
                this.editVisible.state = true;
                this.formType="add";
            },
            //保存弹窗数据
            getForm( obj ){
                let _this = this;
                this.updated = false;
                this.fullscreenLoading = true;
                obj.formObj.id=this.nowId;
                if(this.formType == "add"){

					this.$.autoAjax('put',URL.api+ ROUTES.POST.activity.type,obj.formObj, {
						ok: (res) => {
							if (res.state == 0 && res.data) {
								_this.$message.success(_this.LANG["恭喜您，新增优惠活动类型成功！"] || "恭喜您，新增优惠活动类型成功！");
								_this.formType = "";
								_this.updated = true;
							}else{
								_this.$message.success((_this.LANG["新增优惠活动类型失败！"] || "新增优惠活动类型失败！") + res.msg);
								_this.formType = "";
								_this.updated = true;
							}
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.put(URL.api+ ROUTES.POST.activity.type,JSON.stringify(obj.formObj),URLCONFIG).then((res)=>{
                    //      if (res.data.state == 0 && res.data.data) {
                    //          _this.$message.success(_this.LANG["恭喜您，新增优惠活动类型成功！"] || "恭喜您，新增优惠活动类型成功！");
                    //          _this.formType = "";
                    //         _this.updated = true;
                    //     }else{
                    //          _this.$message.success((_this.LANG["新增优惠活动类型失败！"] || "新增优惠活动类型失败！") + res.data.msg);
                    //          _this.formType = "";
                    //          _this.updated = true;
                    //      }
                    // })
                }else{
                    obj.formObj.id = this.nowId;
					this.$.autoAjax('put', URL.api+ ROUTES.PUT.activity.newType+"?id="+(obj.formObj.id),obj.formObj, {
						ok: (res) => {
							if (res.state !=undefined  && res.state == 0) {
								_this.$message.success(_this.LANG["恭喜您，修改优惠活动类型成功！"] || "恭喜您，修改优惠活动类型成功！");
								_this.formType = "";
								_this.updated = true;
							}else{
								_this.$message.success((_this.LANG["新增优惠活动类型失败！"] || "新增优惠活动类型失败！") + res.msg);
								_this.formType = "";
								_this.updated = true;
							}
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.put(URL.api+ ROUTES.PUT.activity.newType+"?id="+(obj.formObj.id),JSON.stringify(obj.formObj),URLCONFIG).then((res)=>{
                    //     if (res.data.state !=undefined  && res.data.state == 0) {
                    //         _this.$message.success(_this.LANG["恭喜您，修改优惠活动类型成功！"] || "恭喜您，修改优惠活动类型成功！");
                    //         _this.formType = "";
                    //         _this.updated = true;
                    //     }else{
                    //     _this.$message.success((_this.LANG["新增优惠活动类型失败！"] || "新增优惠活动类型失败！") + res.data.msg);
                    //     _this.formType = "";
                    //     _this.updated = true;
                    // }
                    // })
                }

            },
            //表格按钮点击事件
            doHandle(item){
                this.updated = false;
                this.formType = "";
                this.nowId = item.row.id;
                switch (item.fn){
                    case "doEdit":
                        this.doEdit(item.row)
                        break
                    case "doDelete":
                        this.doDelete(item.row)
                        break
                }
            },
            //编辑
            doEdit(row){
                // let val = row.id;
                let _this = this;
                this.loading = true;
                this.formTitel = this.LANG["修改优惠活动类型"]||"修改优惠活动类型";
                FORMVAL(row, this.formConfig);
                setTimeout(()=>{
                    _this.formType = "edit";
                    _this.loading = false;
                    _this.editVisible.state = true;
                },1000);

            },
            //删除
            doDelete(row){
                if(parseInt(row.id)){
                    this.confirmConfig.state = true;
                    this.confirmConfig.msg = (this.LANG['确定删除'] || '确定删除') +'"'+ row.name + '"' + (this.LANG['吗？'] || '吗？');
                    this.confirmConfig.fn = "delete";
                }
            },
            //确认操作
            doConfirm(obj){
                this.loading = true;
                let _this = this;
                switch (obj.fn) {
                    case "delete":

						this.$.autoAjax('delete', URL.api + ROUTES.DELETE.activity.type.$(parseInt(this.nowId)), {
							ok: (res) => {
								if(res.state == 0 && res.data){
									_this.updated = true;
									_this.$message.success(_this.LANG["删除成功"] || "删除成功");

								}else{
									_this.updated = false;
									_this.$message.success(_this.LANG["删除失败"] || "删除失败");

								}
								_this.loading = false;
							},
							p: () => {
							},
							error: e => {
								console.log(e)
							}
						})
                        // this.$http.delete(URL.api + ROUTES.DELETE.activity.type.$(parseInt(this.nowId)),URLCONFIG).then((res) => {
                        //     if(res.data.state == 0 && res.data.data){
                        //         _this.updated = true;
                        //         _this.$message.success(_this.LANG["删除成功"] || "删除成功");
						//
                        //     }else{
                        //         _this.updated = false;
                        //         _this.$message.success(_this.LANG["删除失败"] || "删除失败");
						//
                        //     }
                        //     _this.loading = false;
                        // })
                        break;
                }
            }

        },
        computed: {},
        mounted(){
        },
        created(){
            this.init();
        }
    }
</script>
<style>
</style>
