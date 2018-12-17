<template>
    <div id="agentAudit" class="page clearfix" v-loading="loading">
        <formEdit
            :formVisible="editVisible"
            :formConfig="searchConfig"
            :type="searchType"
            :isEdit="searchEdit"
            :labelWidth="labelWidth"
            @do-query="doQuery"
            @reset-form="resetForm"
            :showAdd="false">
        </formEdit>
        <el-col>
            <tablegrid
                :columnsUrl="columnsUrl"
                :tableIndex="false"
                :updated="updated"
                :tableUrl="tableUrl"
                @do-handle="doHandle">
            </tablegrid>
        </el-col>
        <el-col>
            <confirm :confirmConfig="confirmConfig" @do-confirm="doConfirm"></confirm>
        </el-col>
    </div>
</template>
<script>
import tablegrid from '../../components/tableGrid.vue'
import formEdit from '../../components/formEdit.vue'
import confirm from '../../components/confirm.vue'
export default{
    data(){
        return{
            LANG,
            //代理用户名
            agentName:"",
            //审核状态
            examineState:"",
            //代理状态LIST
            examineStateList:[{"label":"待审核","value":0},{"label":"已审核","value":1},{"label":"已拒绝","value":2}],
            //表格数据配置
            columnsUrl:"",
            tableUrl:"",
            baseUrl:"",
            updated:"",
            searchType:"search",
            searchEdit:{},
            searchConfig: [
                {"prop":"name","value":"","type":"text","label":"代理名称"},
                {"prop":"status","value":"","label":"状态","type":"select","list":[
                    {"label":"未审核","value": "0"},
                   {"label":"已拒绝","value":"2"}]
                }
            ],
            formType:"",
            formTitel:"",
            labelWidth:"90px",
            editVisible:{
                state:false
            },
            loading: false,
            nowId: -1,
            //删除确认
            confirmConfig:{
                state:false,
                msg:"",
                fn:""
            },
        }
    },
    components: {
        tablegrid:tablegrid,
        formEdit:formEdit,
        confirm:confirm
    },
    methods: {
        init(){
            this.columnsUrl = "static/json/accoutManage/agentAudit/columns.json";
            this.tableUrl = URL.api + ROUTES.GET.user.agent.reviews + '?' + 'n_status=1';
            this.baseUrl = URL.api + ROUTES.GET.user.agent.reviews;
        },
        //查询
        doQuery(obj){
            this.tableUrl = this.baseUrl+this.addSearch(obj.item);
        },
        //表格事件
        doHandle(item){
            this.nowId = parseInt(item.row.id);
            switch (item.fn){
                case "doReject":
                    this.doReject(item.row)
                    break
                case "doAudit":
                    this.doAudit(item.row)
                    break
                case "doDetial":
                    this.doDetial(item.row)
                    break
            }
        },
        //拒绝
        doReject(row){
            if(parseInt(row.id)){
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定拒绝'] || '确定拒绝') +'"'+ row.name + '"' + (this.LANG['吗？'] || '吗？');
                this.confirmConfig.fn = "reject";
            }
        },
        //审核通过
        doAudit(row){
            if(parseInt(row.id)){
                this.confirmConfig.state = true;
                this.confirmConfig.msg = (this.LANG['确定审核'] || '确定审核') +'"'+ row.name + '"' + (this.LANG['吗？'] || '吗？');
                this.confirmConfig.fn = "audit";
            }
        },
        //确认删除
        doConfirm(obj){
            this.loading = true;
            this.updated = false;
            let _this = this;
            switch (obj.fn) {
                case "reject":

					this.$.autoAjax('patch',URL.api + '/user/agent/handle/'+parseInt(this.nowId),{"status":"2"}, {
						ok: (res) => {
							if (res.state == 0 && res.data) {
								_this.$message.success(LANG['恭喜您，代理拒绝成功！'] || '恭喜您，代理拒绝成功！');
								_this.updated = true;
							} else {
								_this.$message.error(LANG['代理拒绝失败，请稍候重试！'] || '代理拒绝失败，请稍候重试！');
							}
							_this.loading = false;
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.patch(URL.api + '/user/agent/handle/'+parseInt(this.nowId),JSON.stringify({"status":"2"}),URLCONFIG).then((res) => {
                    //     if (res.data.state == 0 && res.data.data) {
                    //         _this.$message.success(LANG['恭喜您，代理拒绝成功！'] || '恭喜您，代理拒绝成功！');
                    //         _this.updated = true;
                    //     } else {
                    //         _this.$message.error(LANG['代理拒绝失败，请稍候重试！'] || '代理拒绝失败，请稍候重试！');
                    //     }
                    //     _this.loading = false;
                    // });
                    break;
                case "audit":

					this.$.autoAjax('patch',URL.api + '/user/agent/handle/'+parseInt(this.nowId), '', {
						ok: (res) => {
							if (res.state == 0 && res.data) {
								_this.$message.success(LANG['恭喜您，代理审核通过！'] || '恭喜您，代理审核通过！');
								_this.updated = true;
							} else {
								_this.$message.error(LANG['代理审核失败，请稍候重试！'] || '代理审核失败，请稍候重试！');
							}
							_this.loading = false;
						},
						p: () => {
						},
						error: e => {
							console.log(e)
						}
					})
                    // this.$http.patch(URL.api + '/user/agent/handle/'+parseInt(this.nowId),JSON.stringify({"status":"1"}),URLCONFIG).then((res) => {
                    //     if (res.data.state == 0 && res.data.data) {
                    //         _this.$message.success(LANG['恭喜您，代理审核通过！'] || '恭喜您，代理审核通过！');
                    //         _this.updated = true;
                    //     } else {
                    //         _this.$message.error(LANG['代理审核失败，请稍候重试！'] || '代理审核失败，请稍候重试！');
                    //     }
                    //     _this.loading = false;
                    // });
                    break;
            }

        },
        //资料
        doDetial(row){
            this.$router.push({path: '/agentAccount', query:{id: row.id, type: row.type}});
        },
        //重置查询
        resetForm(){
            this.tableUrl = this.baseUrl;
        }
    },
    computed:{
    },
    mounted(){
    },
    created(){
        this.init();
    }
}
</script>
<style>

</style>
