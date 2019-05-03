<template>
    <div>
        <formEdit :formVisible="formVisible"
            :formConfig="searchConfig"
            :type="type"
            :labelWidth="labelWidth"
            :isEdit="isEdit"
            :showAdd="false"
            :updateKeys="updateKeys"
            @do-query="doQuery"
            @reset-form="resetForm"
            :initDate="true"></formEdit>
        <el-col :span="24">
            <tablegrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :tableCheck="false"
                    :pageSet="true"
                    :tableIndex="false"
                    :autoshowRefresh="true"
                    :showExport="isShow"
                    :automation="true"
                    @export-data="exportData"
                    :updated="updated"
                    :getData="true"
                    :isCreated="true"
                    @get-table-data="getTableData"
                    @do-handle="doHandle">
                    <tr slot="other" v-if="allData">
                        <td colspan="4" ><div class="cell tCent">{{LANG['小计'] || '小计'}}</div></td>
                        <td>
                            <div class="cell">{{(parseFloat(allData.page_money_sum) / 100).toFixed(2)}}</div>
                        </td>
                        <td colspan="9"></td>
                    </tr>
                    <tr slot="other" v-if="allData">
                        <td colspan="4" ><div class="cell tCent">{{LANG[' 总计'] || '总计'}}</div></td>
                        <td><div class="cell">{{(parseFloat(allData.total_money_sum) / 100).toFixed(2)}}</div></td>
                        <td colspan="9"></td>
                    </tr>
            </tablegrid>
        </el-col>
        <el-col>
            <el-dialog
                    title="当前用户的备注信息:"
                    :visible.sync="dialogVisibleMemo"
                    size="tiny">
                <el-form>
                    <el-form-item>
                        <el-input type="textarea"
                                  :rows="2"
                                  v-model="memoText"
                                  placeholder="暂无备注信息"
                                  v-if=" memoText ==''|| memoText == undefined">
                        </el-input>
                        <el-input
                                type="textarea"
                                :rows="2"
                                :placeholder="memoText"
                                v-model="memoText"
                                v-else>
                        </el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisibleMemo = false">关 闭</el-button>
                    <el-button type="primary" class="formSave" @click="editMemoSubmit">修 改</el-button>
                </span>
            </el-dialog>
        </el-col>
        <el-col>
            <el-dialog
                    :title=show_edit_title
                    :visible.sync="dialog_show_edit"
                    width="'120px'"
                    size="tiny"
                    center>
                <span class="tCent w100" v-if="parseInt(withdraw_bet_principal) >= 0">{{LANG['原常态打码量']||'原常态打码量'}} ：{{withdraw_bet_principal}}</span>
                <span class="tCent w100" v-if="parseInt(withdraw_bet_coupon) >= 0">{{LANG['原优惠打码量']||'原优惠打码量'}} ：{{withdraw_bet_coupon}}</span>
                <p class="mt10">
                    <el-form ref="from_edit_money" :model="from_edit_money" label-width="100px">
                        <el-form-item :label="LANG['现常态打码量']||'现常态打码量'+':'" v-if="parseInt(withdraw_bet_principal) >= 0"
                                      :rules="[{ validator:validatorNumber,trigger:'blur'}]" prop="withdraw_bet_principal">
                            <el-input v-model="from_edit_money.withdraw_bet_principal" class="intW"></el-input>
                        </el-form-item>
                        <el-form-item :label="LANG['现优惠打码量']||'现优惠打码量'+':'" v-if="parseInt(withdraw_bet_coupon) >= 0"
                                      :rules="[{ validator:validatorNumber,trigger:'blur'}]" prop="withdraw_bet_coupon">
                            <el-input v-model="from_edit_money.withdraw_bet_coupon" class="intW"></el-input>
                        </el-form-item>
                    </el-form>
                </p>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialog_show_edit = false">取 消</el-button>
                    <el-button type="primary" @click="saveDiscount">修 改</el-button>
                </span>
            </el-dialog>
        </el-col>
    </div>
</template>
<script>
    import tableGrid from '../../../components/tableGrid.vue'
    import formEdit from '../../../components/formEdit.vue'
    export default{
        data(){
            return{
                LANG,
                updated: false,
                //表格列数据
                columnsUrl : "",
                //表格数据
                tableUrl : "",
                //搜索相关
                searchConfig : [
                    {"prop":"user_type","value":"","type":"select","label":"体系","list":[
                        {"label": "用户", "value": "1"},
		                {"label": "代理", "value": "2"}
                    ]},
                    {"prop":"username","value":"","type":"text","label":"用户名"},
                    {
                        "type": "dateGroup",
                        "label": "交易时间",
                        "prop": [
                            {"prop": "time_begin", "value": "", "label": "开始时间"},
                            {"prop": "time_end", "value": "", "label": "结束时间"}
                        ]
                    },
                   // {"type":"dateTimeGroup","label":"操作时间","prop":[{"prop":"time_begin","value":"","label":"开始时间"},{"prop":"time_end","value":"","label":"结束时间"}]},
                    {"prop":"type","value":"","label":"交易类型","type":"select","list":[]},
                    {"prop":"admin_user","value":"","label":"操作者","type":"text"}
                ],
                type : "search",
                labelWidth : "90px",
                formVisible : {
                    state : false
                },
                //是否编辑数据
                isEdit : {
                    state : false
                },
                baseUrl : "",
                allData : "",
                // 备注弹窗
                dialogVisibleMemo: false,
                // 备注内容
                memoText: '',
                nowId: -1,
                // 修改打码量
                dialog_show_edit: false,
                show_edit_title: '',
                withdraw_bet_coupon: 0,
                withdraw_bet_principal: 0,
                from_edit_money: {},
                popKey: '',
                updateKeys: '',
                isShow: sessionStorage.deposit_offlines_export == 'true' ? true : false,
                exportForm:{}
            }
        },
        components:{
            tablegrid : tableGrid,
            formEdit : formEdit
        },
        methods : {
            init(){
                this.updateKeys = '';
                this.columnsUrl = "static/json/manual/columns.json";
                this.baseUrl = URL.api + '/cash/manual.records';
                if(this.$route.query && this.$route.query.day_begin){
                    let query =  {};
                    for(let k in this.$route.query){
                        if( k != 'history' ){
                            query[k] = this.$route.query[k];
                        }
                    }
                    setTimeout(()=>{
                        this.updateKeys = 'time_begin,' + (query.day_begin || '') + ',time_end,' + (query.day_end || '') + ',user_type,' + (query.type || '') + ',username,' + (query.member_name || '');
                        this.tableUrl = this.baseUrl + this.addSearch(query);
                        this.exportForm = query
                    },500);
                } else {
                    this.tableUrl = URL.api + '/cash/manual.records';
                }
                // 获取存提交易类型
				this.$.autoAjax('get',URL.api + ROUTES.GET.cash.record.type, '', {
					ok: (res) => {
						if (res.data && res.state == 0) {
							let model= res.data || [];
							for(let i in model){
								this.searchConfig[3].list.push({
									"label": model[i].name,
									"value": parseInt(model[i].id, 10)
								});
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
            //表格内按钮事件
            doHandle(row){
                this.formType = "";
                this.updated = false;
                this.nowId = row.row.id;
                switch (row.fn){
                    case "openUserInformation":
                        this.openUserInformation(row.row)
                        break;
                    case "doWriteRemarks": // 编辑
                        this.doWriteRemarks(row.row)
                        break;
                    case "updateNormality": // 修改常态打码量
                        this.updateNormality(row.row)
                        break;
                    case "updateDiscount": // 修改优惠打码量
                        this.updateDiscount(row.row)
                        break;
                }
            },
            // 修改常态打码量
            updateNormality(row){
                if(row.isfixBet){
                    this.show_edit_title = '修改用户：' + row.username + '的常态打码量';
                    this.dialog_show_edit = true;
                    this.withdraw_bet_principal = row.withdraw_bet_principal;
                    this.withdraw_bet_coupon = '';
                } else {
                  this.$message.error(LANG['该记录已出款或免稽核额度被清零，不可修改'] || '该记录已出款或免稽核额度被清零，不可修改');
                }
            },
            // 修改优惠打码量
            updateDiscount(row){
                if(row.isfixBet){
                    this.show_edit_title = '修改用户：' + row.username + '的优惠打码量';
                    this.dialog_show_edit = true;
                    this.withdraw_bet_coupon = row.withdraw_bet_coupon;
                    this.withdraw_bet_principal = '';
                } else {
                  this.$message.error(LANG['该记录已出款或免稽核额度被清零，不可修改'] || '该记录已出款或免稽核额度被清零，不可修改');
                }
            },
            // 修改打码量
            saveDiscount(){
                let key = this.withdraw_bet_coupon === '' ? 'withdraw_bet_principal' : 'withdraw_bet_coupon';
                let _this = this;
                this.updated = false;
                let params = {};
                params[key] =  FORMATMultiplyMoney(this.from_edit_money[key]);
                this.dialog_show_edit = false;
                let msg = key === 'withdraw_bet_coupon' ? '优惠打码量' : '常态打码量';

				this.$.autoAjax('patch',URL.api + '/cash/manual.comment/' + parseInt(this.nowId), params, {
					ok: (res) => {
						if (res.state === 0 && res.data) {
							this.updated = true;
							this.$message.success(msg + (LANG['打码量修改成功'] || '打码量修改成功'));
						} else if(res.state){
							this.$message.error(msg + (LANG['打码量修改失败'] || '打码量修改失败') + res.data.msg);
						} else {
							this.$message.error(msg + (LANG['打码量修改失败'] || '打码量修改失败'));
						}
						this.$refs.from_edit_money.resetFields();
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
            },
            doWriteRemarks(row){
                this.dialogVisibleMemo = true;
                this.memoText = row.memo;
            },
            doQuery(obj){
                this.tableUrl = this.baseUrl + this.addSearch(obj.item);
                this.exportForm = obj.item;
            },
             //重置查询
            resetForm(){
                if(this.$route.query && this.$route.query.day_begin){
                    let query =  {};
                    for(let k in this.$route.query){
                        if( k != 'history' ){
                            query[k] = this.$route.query[k];
                        }
                    }
//                    setTimeout(()=>{
//                        this.updateKeys = 'time_begin,' + (query.day_begin || '') + ',time_end,' + (query.day_end || '') + ',user_type,' + (query.type || '') + ',username,' + (query.member_name || '');
//                        this.tableUrl = this.baseUrl + this.addSearch(query);
//                    },500);
                } else {
                    this.tableUrl = this.baseUrl;
                }
            },
            openUserInformation(row) {
                // 根据user_type的类型来判断跳转的是会员或代理
                row.user_type == '1'?this.$router.push({path: "/memberManagement",query:{name: row.username}})
                    :this.$router.push({path: "/agentAccount",query: {agent_name: row.username}})
            },
            // 小记和总记
            getTableData(obj) {
                this.allData = obj.allData.attributes;
            },
            validatorNumber(rule, value, callback){
                //检测值是不是为空
                if(!value){
                  callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                  return;
                }
                if (!/^[0-9]+(.[0-9]{1,2})?$/.test(value.toString().replace(/^\s+|\s+$/,''))) {
                  if(isNaN(value) || !!value.replace(/^\s+|\s+$/,'') == false){
                    callback(new Error(LANG['请输入数字值'] || '请输入数字值'));
                  }else{
                    callback(new Error(LANG['小数点后不超过两位'] || '小数点后不超过两位'));
                  }
                } else {
                    if (value < 0) {
                        callback(new Error(LANG['输入金额必需大于0'] || '输入金额必需大于0'));
                    } else if(value > 9999999){
                        callback(new Error(LANG['输入金额不能大于9999999'] || '输入金额不能大于9999999'));
                     } else {
                        callback();
                    }
                }
            },
            // 导出数据
            exportData() {
                // 当前查询条件 signature = 1
                let form = this.$children[0].$refs.editForm.model;
                this.exportForm.signature = 1
                if (form.time_begin && form.time_end) {
                    this.$.autoAjax('get',this.baseUrl,this.exportForm, {
                        ok:(res) =>{
                            if(res.state ===0 && res.data){
                                window.location.href = res.data.url
                            }
                        },
                        error: e => {
                            this.$message.error(e.responseText.msg);
                        }
                    })
                } else {
                    this.$message.error(LANG['必需选择时间才能导出'] || '必需选择时间才能导出');
                    return;
                }
            },
            //修改备注内容
            editMemoSubmit() {
                let _this = this;
                this.updated = false;
                let params = {
                    memo: this.memoText
                };
                this.dialogVisibleMemo = false;

				this.$.autoAjax('patch',URL.api + '/cash/manual.comment/' + parseInt(this.nowId),params, {
					ok: (res) => {
						if (res.state === 0 && res.data) {
							this.updated = true;
							this.$message.success(LANG['备注写入成功'] || '备注写入成功');
						} else {
							this.$message.error(LANG['备注写入失败'] || '备注写入失败');
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
        created(){
            this.init();
        }
    }
</script>
<style>

</style>
