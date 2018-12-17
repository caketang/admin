<template>
	<div id="table" >
		<el-table
				:data="tableDataList"
				border
				@selection-change="handleSelectionChange"
				@row-dblclick="doEdit"
				stripe v-loading="listLoading">
			<el-table-column type="expand" v-if="columnListgroup" label="点击看详情">
				<template scope="props" id="aaa">
					<p v-for="item in columnListgroup">
						{{item.label}}：{{props.row[item.prop]}}
					</p>
				</template>
			</el-table-column>
			<el-table-column v-for="column  in columnList"
							 :prop="column.prop"
							 :label="column.label"
							 :width="column.width"
							 :sortable="column.sortable">

				<template scope="scope">
					<div v-if="column.type == 'img'"><img :src="scope.row.imgsrc" alt="scope.row.prop" /></div>
					<div v-if="column.type == 'button'">
						<div v-for="item in column.btnGroup" style="float:left;margin-left:5px;">
							<el-button size="small"  v-if="!item.prop"  @click="doHandle(scope.row,item.fn)" :type="item.btnType" v-text="item.label"> </el-button>
							<el-button size="small"  v-if="item.prop && scope.row[item.prop] == item.val"  @click="doHandle(scope.row,item.fn)" :type="item.btnType" v-text="item.label"> </el-button>
						</div>
					</div>
					<div v-if="column.type == 'switch'">
						<el-switch  v-model="scope.row.state" > </el-switch>
					</div>
					<div v-if="column.type == 'checkbox'">
						<el-checkbox v-model="scope.row.state" :checked="scope.row.state | formatSex(column.filters) "></el-checkbox>
					</div>
					<div v-if="column.type == 'date'">
						<span>{{scope.row[column.prop] | formatDate('yyyy-MM-dd HH:mm:ss') }}</span>
					</div>
					<div v-if="column.type == 'link'">
						<el-button size="small"  @click="doHandle(scope.row,column.fn)" type="text" v-text="scope.row[column.prop]"> </el-button>
					</div>
					<div v-if="column.type == undefined && column.prop != 'sex'" >
						<span style="color:#009966" v-if="scope.row[column.prop] == 1">{{scope.row[column.prop] | formatSex(column.filters) }}</span>
						<span style="color:#FF0000" v-if="scope.row[column.prop] == 0">{{scope.row[column.prop] | formatSex(column.filters) }}</span>
						<span v-if="scope.row[column.prop] != 1 && scope.row[column.prop] != 0">{{scope.row[column.prop]}}</span>
					</div>
				</template>
			</el-table-column>
		</el-table>
		<!--分页-->
		<el-col :span="24" class="toolbar" v-if="pageSet">
			<el-pagination :current-page="1" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
						   :total="80" style="float:right" @size-change="doSizePage" @current-change="doCurrentChange">
			</el-pagination>
		</el-col>
	</div>

</template>
<script>
    //列数据过滤
    import Vue from 'vue'
    import columnSet from  './columnSet.vue'
    Vue.filter("formatSex",function(v,arr){
        if(arr.length>0){
            for(var i=0;i<arr.length;i++){
                if(arr[i].value == v){
                    return arr[i].text
                }
            }
        }
    });
    Vue.filter("formatDate",function (v,format) {
        let t = new Date(v);
        let tf = function(i){return (i < 10 ? '0' : '') + i};
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
            switch(a){
                case 'yyyy':
                    return tf(t.getFullYear());
                    break;
                case 'MM':
                    return tf(t.getMonth() + 1);
                    break;
                case 'mm':
                    return tf(t.getMinutes());
                    break;
                case 'dd':
                    return tf(t.getDate());
                    break;
                case 'HH':
                    return tf(t.getHours());
                    break;
                case 'ss':
                    return tf(t.getSeconds());
                    break;
            }
        })

    })
    export default{

        data(){
            return {
                //选中数据
                dateSelection:[],
                //列配置
                columnConfig:[],
                //复制列参数
                columnList:[],
				//复制列参数详情组
                columnListgroup:[],
				//表格列表数据
                tableDataList:[]
            }
        },
        props:{
            //表格数据
            tableData:Array,
			//数据请求地址
            tableUrl:String,
			//数据列配置
            columns:Array,
            columnsUrl:String,
			//是否显示分页
            pageSet:{
                type:Boolean,
                default:true
			}

        },
        components: {
            columnSet:columnSet
        },
        methods: {
            //初始化数据
			Datainit(){
                let _this=this;
                _this.tableDataList.splice(0,_this.tableDataList.length)
                _this.columnList.splice(0,_this.columnList.length)
                _this.columnListgroup.splice(0,_this.columnList.length)
                let columnList=_this.columnList
				let columnListgroup=_this.columnListgroup
                if((this.tableUrl !="") && (this.tableUrl != undefined)){

					// this.$.autoAjax('get', this.tableUrl, '', {
					// 	ok: (res) => {
					// 		let  tableDate=res.tableDemoDate
					// 		for(let i in tableDate){
					// 			_this.tableDataList.push(tableDate[i])
					// 		}
					// 	},
					// 	p: () => {
					// 	},
					// 	error: e => {
					// 		console.log(e)
					// 	}
					// })
                    this.$http.get(this.tableUrl,URLCONFIG).then((res) => {
                        let  tableDate=res.data.tableDemoDate
                        for(let i in tableDate){
                            _this.tableDataList.push(tableDate[i])
                        }
               		 })
					.catch(function (err) {
//			          console.log(err)
                     })
                }

                if((this.columnsUrl !="") && (this.columnsUrl != undefined)){
					this.$.get( this.columnsUrl,(res) =>  {
						let columns=res.columns,columnsgroup=res.columnsgroup
						if(columns.length>0){
							for(let i in columns){
								columnList.push(columns[i])
							}

						}

						if(columnsgroup.length>0){
							for(let i in columnsgroup){
								columnListgroup.push(columnsgroup[i])
							}
						}
					})
					// this.$http.get(this.columnsUrl,URLCONFIG).then((res) => {
                     //    let columns=res.data.columns
                     //    if(columns.length>0){
                     //        for(let i in columns){
                     //            columnList.push(columns[i])
                     //        }
					//
                     //    }
                     //    let columnsgroup=res.data.columnsgroup
                     //    if(columnsgroup.length>0){
                     //        for(let i in columnsgroup){
                     //            columnListgroup.push(columnsgroup[i])
                     //        }
                     //    }
					// })
                }
			},
            //表格删除按钮事件
            handleDelete(row){
                this.$emit("do_del-node", {
                    "event": event,
                    "item": row
                });
            },
            //表格checkBOX选中项
            handleSelectionChange(selection){
                this.dateSelection=selection.concat();
                this.$emit("do_select-node", {
                    "event": event,
                    "item": selection
                });
            },
			//添加数据
            doAdd(){

			},
            //双击弹出编辑框
            doEdit(){

            },
            //删除选中数据
            doDel(){

            },
            //导出数据
            doExcel(){

            },
			//处理操作公共按钮事件
            doHandle(row,fn){
                this.$emit("do-handle", {
                    "event": event,
                    "row": row,
					"fn":fn
                });
			},
            //切换列表配置
            doChangeColSet(v){
//				console.log(v);
            },
			//切换每页条数
            doSizePage(v){
//				console.log("切换每页显示条数")
//				console.log(v)
			},
			//切换页数
			doCurrentChange(v){
//                console.log("切换当前选中页数")
//                console.log(v)
			}
        },
        computed: {
            csselect:function(){
                return "您选中了"+this.dateSelection.length+"条数据";
            }
			//            // 列配置数据
//            columnList:function(){
//                debugger;
//                var  tempArr=[];
//                if(this.columnConfig.length >0){
//                    for(let i in this.columns){
//                        for(let j in this.columnConfig){
//                            if(this.columns[i].prop == this.columnConfig[j]){
//                                tempArr.push(this.columns[i]);
//                                break;
//                            }
//                        }
//                    }
//                }
//                return tempArr;
//            },
//			//表格数据
//            tableDataList:function(){
//
//                if(this.columnConfig.length == this.columns.length){
//                    return this.tableData;
//                }else{
//                    console.log(this.columnConfig)
//					console.log(this.columns)
//                    debugger;
//                    let tempList=[];
//                    let tableData=this.tableData;
//                    let columnConfig=this.columnConfig;
//                    for(let i in tableData){
//                        let tempArr={};
//                        for(let j in columnConfig){
//                            let temp=columnConfig[j];
//                            if(temp != "operation"){
//                                tempArr[temp]=tableData[i][temp];
//                            }
//                        }
//                        tempList.push(tempArr);
//                    }
//                    return tempList;
//                }
//            }
        },
        watch: {
            //如果数据网址发生变化，就执行数据请求
            tableUrl: function (newQuestion) {
                this.Datainit();
                console.log("重发请求")
            }
        },
        created: function () {
            //初始化列配置
            this.Datainit()
        }
    }
</script>
<style >
	.el-table__expanded-cell {background-color: #eef1f6 !important;}
</style>