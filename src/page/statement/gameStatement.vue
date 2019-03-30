<template>
    <div id="gameStatement" v-loading="loading">
        <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="type" :isEdit="isEdit" :labelWidth="labelWidth" @do-query="doQuery" @reset-form="resetform" :showAdd="false" :formType="formType" :updateKeys="updateKeys" ></formEdit>
        <!--<el-col :span="24">-->
            <!--<el-form v-model="modeData">-->
            <!--<el-form-item label="游戏" prop="game_type">-->
                <!--{{modeData.checkList}}-->
                <!--<el-checkbox class="fl mr10"  :indeterminate="isIndeterminate" v-model="modeData.checkAll" @change="handleCheckAllChange">全选</el-checkbox>-->
                <!--<el-checkbox-group class="fl" v-model="modeData.checkList" @change="handleCheckedGameChange">-->
                    <!--<el-checkbox v-for="(item,index) in modeData.gameList" :label="item.value"  :key="index">{{item.value}}</el-checkbox>-->
                <!--</el-checkbox-group>-->
            <!--</el-form-item>-->
            <!--</el-form>-->
        <!--</el-col>-->
        <el-col>
            <span v-for="(item,index) in levelList" :key="index">
                <el-button type="text" @click="doChangeClass(item,index)" >{{item.name}}</el-button>
                <span v-if="index !== (levelList.length-1)"> / </span>
            </span>
        </el-col>
        <el-col :span="24">
            <tableGrid
                    :columnsUrl="columnsUrl"
                    :tableUrl="tableUrl"
                    :updated="updated"
                    :sumGame="true"
                    @do-handle="doHandle">
            </tableGrid>
        </el-col>
    </div>
</template>
<script>
    import editTable from '../../components/editTable.vue'
    import tableGrid from '../../components/tableGrid.vue'
    import formEdit from '../../components/formEdit.vue'
    export default{
        data(){
            return {
                LANG,
                //表格列数据
                columnsUrl: "",
                //表格数据
                baseUrl: '',
				tableUrl: "",
                // 选中游戏列表
                checkList: [],
                gameList: [],
                //搜索相关
                searchConfig:[
                    {"type":"quickDate","showTimes": true},//快捷日期
                    {"type":"dateTimeGroup","label":"报表日期","showTime": false,"prop":[
                        {"prop":"date_from","value":"","label":"开始时间"},
                        {"prop":"date_to","value":"","label":"结束时间"}
                    ]},
                    {"prop":"type","value":"user","label":"账号体系","type":"select","list":[{'label':'会员','value':'user'}],"rules":[{"require":true}]},
                    {"prop":"user_name","value":"","type":"text","label":"用户名"},
                    //ID4
                    {
                        "prop": "gamelist",
                        "value": [],
                        "label": "游戏",
                        "sReset": false,
                        "checkAll": true,
                        "allBtnShow": true,
                        "type": "checkGroup",
                        "list": [],
                        "Arr": []
                    },
                ],
                type:"search",
                labelWidth:"120px",
                formVisible:{
                    state:false
                },
				isEdit: {
                	state: false
				},
                updated: false,
                formType: "",
                // 业务相关
				flag:'0',
                levelList: [],
                levelListInit: [],
                dateObj:{
                    date_from: "",
                    date_to: "",
                    type: "user",
                    user_name: ""
                },
                // 查询表单修改
                updateKeys:"",
                loading: false
            }
        },
        components: {
            formEdit:formEdit,
            edittable:editTable,
			tableGrid: tableGrid
        },
        methods: {
            init(){
                this.loading = true;
                this.updateKeys = '';
                this.columnsUrl = "static/json/statement/gameStatement/columns.json";
//                let gamesUrl = URL.api + ROUTES.GET.games.list;
                let gamesUrl = URL.api + '/games';

				this.$.autoAjax('get',gamesUrl, '', {
					ok: (res) => {
						this.checkList.splice(0,this.checkList.length);
						this.levelListInit.splice(0,this.levelListInit.length);
						this.levelList.splice(0,this.levelList.length);
						this.searchConfig[4].list = [];
						this.searchConfig[4].Arr = [];
						this.dateObj.date_from = sessionStorage.dateTimeStart;
						this.dateObj.date_to = sessionStorage.dateTimeEnd;
						let model=res.data;
						if(model.length>0)
							for(let i in model){
								this.searchConfig[4].Arr.push({
									"value":model[i].game_id,
									"label":model[i].game_name,
									"game_type":model[i].game_type
								});
								this.searchConfig[4].list.push(model[i].game_name);
								this.checkList.push(model[i].game_name);
							};
						let querygames = this.addCheckGame(this.checkList);
						this.baseUrl = URL.api + ROUTES.GET.state.game;
						if (this.$route.query && this.$route.query.type) { // 检查是否正常跳转
							this.dateObj.date_from = this.$route.query.date_from;
							this.dateObj.date_to = this.$route.query.date_to;
							this.dateObj.type = this.$route.query.type;
							this.dateObj.user_name = this.$route.query.user_name;
							this.columnsUrl = "static/json/statement/gameStatement/columns2.json";
							this.updateKeys = "date_from,"+ this.dateObj.date_from + ",date_to,"+ this.dateObj.date_to +  ",type,"+ this.dateObj.type +  ",user_name,"+ this.dateObj.user_name;
							this.tableUrl = this.baseUrl +'?flag=0&type=' + this.dateObj.type + '&games='+ JSON.stringify(querygames) + '&date_from='+ this.dateObj.date_from + '&date_to=' + this.dateObj.date_to + '&user_name=' + this.dateObj.user_name;
						} else {
							this.updateKeys = 'type,user,gamelist,' + JSON.stringify(this.searchConfig[4].list);
							this.tableUrl = this.baseUrl +'?flag=0&type=user&games='+ JSON.stringify(querygames) + '&date_from='+ sessionStorage.dateTimeStart + '&date_to=' + sessionStorage.dateTimeEnd;
						}
						this.loading = false;
						this.levelList.push({name:'游戏报表',"url": this.tableUrl,type:'user',username: '',querygames: this.searchConfig[4].list.toString()});
					},
					p: () => {
					},
					error: e => {
						this.loading = false;
					}
				})
//                 this.$http.get(gamesUrl,URLCONFIG).then((res) => {
//                     this.checkList.splice(0,this.checkList.length);
//                     this.levelListInit.splice(0,this.levelListInit.length);
//                     this.levelList.splice(0,this.levelList.length);
//                     this.searchConfig[4].list = [];
//                     this.searchConfig[4].Arr = [];
//                     this.dateObj.date_from = sessionStorage.dateTimeStart;
//                     this.dateObj.date_to = sessionStorage.dateTimeEnd;
//                     let model=res.data.data;
//                     if(model.length>0)
//                     for(let i in model){
//                         this.searchConfig[4].Arr.push({
//                             "value":model[i].game_id,
//                             "label":model[i].game_name,
//                             "game_type":model[i].game_type
//                         });
//                         this.searchConfig[4].list.push(model[i].game_name);
//                         this.checkList.push(model[i].game_name);
//                     };
//                     let querygames = this.addCheckGame(this.checkList);
//                     this.baseUrl = URL.api + ROUTES.GET.state.game;
//                     if (this.$route.query && this.$route.query.type) { // 检查是否正常跳转
//                         this.dateObj.date_from = this.$route.query.date_from;
//                         this.dateObj.date_to = this.$route.query.date_to;
//                         this.dateObj.type = this.$route.query.type;
//                         this.dateObj.user_name = this.$route.query.user_name;
//                         this.columnsUrl = "static/json/statement/gameStatement/columns2.json";
//                         this.updateKeys = "date_from,"+ this.dateObj.date_from + ",date_to,"+ this.dateObj.date_to +  ",type,"+ this.dateObj.type +  ",user_name,"+ this.dateObj.user_name;
//                         this.tableUrl = this.baseUrl +'?flag=0&type=' + this.dateObj.type + '&games='+ JSON.stringify(querygames) + '&date_from='+ this.dateObj.date_from + '&date_to=' + this.dateObj.date_to + '&user_name=' + this.dateObj.user_name;
//                     } else {
//                         this.updateKeys = 'type,user,gamelist,' + JSON.stringify(this.searchConfig[4].list);
//                         this.tableUrl = this.baseUrl +'?flag=0&type=user&games='+ JSON.stringify(querygames) + '&date_from='+ sessionStorage.dateTimeStart + '&date_to=' + sessionStorage.dateTimeEnd;
//                     }
//                     this.loading = false;
//                     this.levelList.push({name:'游戏报表',"url": this.tableUrl,type:'user',username: '',querygames: this.searchConfig[4].list.toString()});
//
//                 }).catch((err)=> {
//                     this.loading = false;
// //                    console.log(err)
//                 });
            },
            // 设置FORM数组值
            setFormArray(key,form){
                if(form[key]){
                    form[key] = [];
                    this.checkList.forEach((item)=>{
                        form[key].push(item);
                    })
                }
            },
            // 拼接游戏
            addCheckGame(arr){
                this.levelListInit.splice(0,this.levelListInit.length);
                let temp = [];
                let levelListInit = this.levelListInit;
                for(let k in arr){
                    levelListInit.push(arr[k]);
                    for(let j in this.searchConfig[4].Arr){
                        if(this.searchConfig[4].Arr[j].label === arr[k]){
                            temp.push({
                                game_id: this.searchConfig[4].Arr[j].value,
                                game_type: this.searchConfig[4].Arr[j].game_type
                            });
                        }
                    }
                }
                this.gameList = temp;
                return temp;
            },
//            //全选
//            handleCheckAllChange(event) {
//                let checkList = [];
//                for (let v in this.modeData.gameList) {
//                    checkList[v] = this.modeData.gameList[v].value;
//                };
//                this.modeData.checkList = event.target.checked ?checkList : [];
//            },
//            handleCheckedGameChange(value){
//                let checkedCount = value.length;
//                this.modeData.checkAll = checkedCount === this.modeData.gameList.length;
//                this.isIndeterminate = checkedCount > 0 && checkedCount < this.modeData.gameList.length;
//                this.modeData.checkList = value;
//            },
            doHandle(item) {
                this.updateKeys = '';
                this.nowId = item.row.id || -1;
                switch (item.fn) {
                    case "openUser": // 用户名跳转
                        this.openUser(item.row)
                        break;
                    case "openGameClass": // 代理跳转
                        this.openGameClass(item.row)
                        break;
                }
            },
            updateGames(arr){
                this.checkList.splice(0,this.checkList.length);
                arr.forEach((item)=>{
                    this.checkList.push(item);
                });
                setTimeout(()=>{
                    this.updateKeys = 'gamelist,' + JSON.stringify(this.checkList);
                },500)
            },
            // 游戏投注跳转
            openGameClass(row){
                this.flag = row.flag || '0';
                let type = row.type || 'user';
                let temp = [];
                temp.push(row.game_name);
                // 修改游戏选中值
                this.updateGames(temp);
                // 拼接游戏
                let query = this.addCheckGame(this.checkList);
                let _this = this;
                let str = "";
                if(this.dateObj.date_from){
                    str = '&date_from='+ this.dateObj.date_from;
                }
                if(this.dateObj.date_to){
                    str = str + '&date_to=' + this.dateObj.date_to;
                }
                this.updateKeys = '';
                if(str){
                    this.tableUrl = this.baseUrl + "?type=" + type + "&flag=" + this.flag + "&games=" + JSON.stringify(query) + str;
                }else{
                    this.tableUrl = this.baseUrl + "?type=" + type + "&flag=" + this.flag + "&games=" + JSON.stringify(query);
                }
                this.columnsUrl = "static/json/statement/gameStatement/columns2.json";
                this.levelList.push({
                    name: row['game_name'],
                    url: this.tableUrl,
                    type: '',
                    username: this.levelList[0].username,
                    querygames: temp.toString()
                });
            },
            // 用户跳转
            openUser(row){
                this.flag = row.flag || '0';
                let type = row.type;
                let name = row.user_name || "";
                // 修改游戏选中值
                let temp = [];
                temp.push(row.game_name);
                this.updateGames(temp);
                // 拼接游戏
                let query = this.addCheckGame(this.checkList);
                if(row.type === 'user'){
                    this.$router.push({path:'/noteManagement',query:{user_name:row.user_name,game_name:row.game_name,game_type:row.game_type,start_time:this.dateObj.date_from,end_time:this.dateObj.date_to,isopen: 1}});
                }else{
                    let str = "";
                    let query = this.addCheckGame(this.checkList);
                    if(this.dateObj.date_from){
                        str = '&date_from='+ this.dateObj.date_from;
                    }
                    if(this.dateObj.date_to){
                        str = str + '&date_to=' + this.dateObj.date_to;
                    }
                    if(str){
                        this.tableUrl = this.baseUrl + "?type=" + type + "&flag=" + this.flag + "&user_name=" + name + "&games=" + JSON.stringify(query) + str;
                    }else{
                        this.tableUrl = this.baseUrl + "?type=" + type + "&flag=" + this.flag + "&user_name=" + name + "&games=" + JSON.stringify(query);
                    }
                    this.levelList.push({
                        name: row['user_name'],
                        url: this.tableUrl,
                        type: row.type,
                        username: this.levelList[0].username,
                        querygames: temp.toString()
                    });
                }
            },
            //查询数据
            doQuery(obj){
                this.dateObj.date_from = obj.item.date_from;
                this.dateObj.date_to = obj.item.date_to;
                this.dateObj.type = obj.item.type;
                this.dateObj.user_name = obj.item.user_name;
                this.checkList = obj.item.gamelist;
                if(obj.item.user_name){
                    this.columnsUrl = "static/json/statement/gameStatement/columns2.json";
                }else{
                    this.columnsUrl = "static/json/statement/gameStatement/columns.json";
                }
                // 拼接游戏
                let query = this.addCheckGame(obj.item.gamelist);
                this.tableUrl = this.baseUrl +this.addSearch(obj.item) + '&flag=0&games='+ JSON.stringify(query);
                this.levelList.splice(0,this.levelList.length);
                this.levelList.push({name:'游戏报表',"url": this.tableUrl,type:obj.item.type,username:obj.item.user_name,querygames: obj.item.gamelist.toString()});
            },
            resetform(){
                this.init();
            },
            // 切换层级
            doChangeClass(obj,index){
                console.log(obj);
                if(obj.name != "游戏报表"){
                    this.columnsUrl = "static/json/statement/gameStatement/columns2.json";
                    this.levelList.splice((index+1), (this.levelList.length - 1));
                    this.tableUrl = obj.url;
                }else{
                    this.levelList.splice((index+1), (this.levelList.length - 1));
                    this.columnsUrl = "static/json/statement/gameStatement/columns.json"
                    this.tableUrl = obj.url;
                }
                if(obj.querygames){
                    this.updateGames(obj.querygames.split(','));
                }
            }
        },
        created(){
//            this.init()
        },
        activated(){
            this.init()
        }
    }
</script>
<style>

</style>
