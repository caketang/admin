<template>
    <el-row id="fundDetailsSummary" class="w100">
        <el-col :span="20" :offset="2">
            <el-button type="primary" size="small" class="outexcel" @click="doRefresh">{{LANG['刷新'] || '刷新'}}</el-button>
        </el-col>
        <el-col :span="20" :offset="2">
            <!--<table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header el-table--border" style="width: 100%;">
                <thead>
                <tr class="tritem">
                    <td class="el-table_1_column_36">
                        <div class="cell">{{LANG['游戏钱包'] || '游戏钱包'}}</div>
                    </td>
                    <td class="el-table_1_column_36">
                        <div class="cell" >{{LANG['余额'] || '余额'}}</div>
                    </td>
                    <td class="el-table_1_column_36">
                        <div class="cell" >{{LANG['更新时间'] || '更新时间'}}</div>
                    </td>
                </tr>
                <tr v-for="item in mbList">
                    <td><div class="cell" >{{item.name}}</div></td>
                    <td><div class="cell" >{{item.balance}}</div></td>
                    <td><div class="cell" >{{item.update_time}}</div></td>
                </tr>
                <tr>
                    <td><div class="cell" >{{LANG['总额'] || '总额'}}</div></td>
                    <td><div class="cell" >{{amount}}</div></td>
                    <td><div class="cell" ></div></td>
                </tr>
                </thead>
            </table>-->

                <el-table
                    :data="tableDate"
                    border
                    style="width: 100%">
                    <el-table-column
                        prop="name"
                        :label="LANG['游戏钱包'] || '游戏钱包'">
                    </el-table-column>
                    <el-table-column
                        prop="balance"
                        :label="LANG['余额'] || '余额'">
                    </el-table-column>
                    <el-table-column
                        prop="time"
                        :label="LANG['更新时间'] || '更新时间'">
                    </el-table-column>
                </el-table>

        </el-col>
    </el-row>
</template>
<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                LANG,
                tableUrl:"",
                tableDate:[],
                mbList: [],
				amount: 0
            }
        },
        components: {
        },
        methods: {
            init(){

				this.$.autoAjax('get',URL.api + ROUTES.GET.cash.record.balance, '', {
					ok: (res) => {
						res.data.forEach((item)=>{
							item.balance = item.balance/100
						})
						this.tableDate = res.data
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
// 				this.$http.get(URL.api + ROUTES.GET.cash.record.balance,URLCONFIG).then((res) => {
//                     res.data.data.forEach((item)=>{
//                         item.balance = item.balance/100
//                     })
//                     this.tableDate = res.data.data
// 				}).catch((err)=>{
// //					console.log(err)
// 				})
            },
            //刷校招页面
            doRefresh(){
                this.init()
            }
        },
        computed:{
        },
        mounted(){
        },
        created(){
			this.init();
        },
        directives: {
            tableWidth:{
                bind: function(el){
                    el.style.width = window.innerWidth-250 + 'px';
                }
            }
        }
    }
</script>
<style>
    .page{position: relative;}
    .outexcel{float:right;margin-bottom:10px;}
    .cell{ text-align: center;}
    .tditem{background-color: #eef1f6;}
    .tritem{background-color: #d3dce6 !important;}
</style>