<template>
    <div id="gameStatement">
        <formEdit :formVisible="formVisible" :formConfig="searchConfig" :type="type" :isEdit="isEdit" :labelWidth="labelWidth" @do-query="doQuery" @reset-form="resetform" :showAdd="false" :formType="formType" :updateKeys="updateKeys" ></formEdit>
        <el-col :span="24">
            <el-form v-model="modeData">
                <el-form-item label="游戏" prop="game_type">
                    <el-checkbox class="fl mr10"  :indeterminate="isIndeterminate" v-model="modeData.checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                    <el-checkbox-group class="fl" v-model="modeData.checkList" @change="handleCheckedGameChange">
                        <el-checkbox v-for="(item,index) in modeData.gameList" :label="item.value"  :key="index">{{item.label}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
        </el-col>
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
                    :getData="true"
                    @get-table-data="getTableData"
                    @do-handle="doHandle">
                <tr slot="other" v-if="dateTotal">
                    <td colspan="2" v-if="sumDate.user_name !== undefined"><div class="cell">{{LANG['小计'] || '小计'}}</div></td>
                    <td v-if="sumDate.user_name == undefined"><div class="cell">{{LANG['小计'] || '小计'}}</div></td>
                    <td><div class="cell">{{(sumDate.subTotalMoney.all_times) || ''}}</div></td>
                    <td><div class="cell">{{(sumDate.subTotalMoney.total_money || '') | formatMoney}}</div></td>
                </tr>
                <tr slot="other" v-if="dateTotal">
                    <td colspan="2" v-if="sumDate.user_name !== undefined"><div class="cell">{{LANG['合计'] || '合计'}}</div></td>
                    <td v-if="sumDate.user_name == undefined"><div class="cell">{{LANG['合计'] || '合计'}}</div></td>
                    <td><div class="cell">{{(sumDate.totalMoney.all_times) || ''}}</div></td>
                    <td><div class="cell">{{(sumDate.totalMoney.total_money || '') | formatMoney}}</div></td>
                </tr>
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
                modeData:{
                    gameList: [],
                    isIndeterminate: true,
                    checkAll: true,
                    checkList:[],
                },
                // 选中游戏列表
                gameList: [],
                //,默认选中项
                isIndeterminate: true,
                //搜索相关
                searchConfig:[
                    {"type":"quickDate","showTimes": true},//快捷日期
                    {"type":"dateTimeGroup","label":"报表日期","prop":[
                        {"prop":"start_time","value":"","label":"开始时间"},
                        {"prop":"end_time","value":"","label":"结束时间"}
                    ]},
                    {"prop":"type_name","value":"user","label":"账号体系","type":"select","list":[{'label':'会员','value':'user'},{'label':'代理','value':'agent'}],"rules":[{"require":true}]},
                    {"prop":"user_name","value":"","type":"text","label":"用户名"},
                ],
                type:"search",
                labelWidth:"120px",
                formVisible:{
                    state:false
                },
                isEdit: {
                    state: false
                },
                flag:'0',
                levelList: [],
                levelListInit:[],
                updated: false,
                formType: "",
                dateObj:{
                    start_time: "",
                    end_time: "",
                    type: "user",
                    user_name: ""
                },
                // 查询表单修改
                updateKeys:"",
                dateTotal: 0,
                sumDate: {}
            }
        },
        components: {
//            tablegrid: tableGrid,
            formEdit:formEdit,
            edittable:editTable,
            tableGrid: tableGrid
        },
        methods: {
            init(){
                this.columnsUrl = "static/json/statement/PremiumTips/columns.json";
                let gamesUrl = URL.api + ROUTES.GET.order.gamelist;
                this.modeData.checkList.splice(0,this.modeData.checkList.length);
                this.modeData.gameList.splice(0,this.modeData.gameList.length);
                this.levelList.splice(0,this.levelList.length);
                let checkList = this.modeData.checkList;
                let levelListInit = this.levelListInit;
                this.dateObj.start_time = sessionStorage.dateTimeStart;
                this.dateObj.end_time = sessionStorage.dateTimeEnd;
                this.$http.get(gamesUrl,URLCONFIG).then((res) => {
                    if(res.data.state == 0 && res.data.data){
                        let model = res.data.data;
                        for(let i in model){
                            this.modeData.gameList.push({
                                "label":model[i],
                                "value": i
                            });
                            checkList.push(i);
                            levelListInit.push(i);
                            this.isIndeterminate = false;
                        };
                    }
                    this.tableUrl = URL.api + '/state/activity/' +'?flag=0&type=user&games='+ JSON.stringify(this.modeData.checkList) + '&start_time='+ sessionStorage.dateTimeStart + '&end_time=' + sessionStorage.dateTimeEnd;
                    this.levelList.push({name:'游戏报表',"url": this.tableUrl,type:'user',username: ''});
                    this.baseUrl = URL.api + '/state/activity/';
                })
            },
            // 获取表格数据
            getTableData(obj){
                this.dateTotal = obj.allData.data && obj.allData.data.length ? obj.allData.data.length : 0;
                this.sumDate.user_name = obj.allData.data && obj.allData.data[0] ?obj.allData.data[0].user_name : '';
                this.sumDate.subTotalMoney = (obj.allData.attributes &&  obj.allData.attributes.subTotalMoney)? obj.allData.attributes.subTotalMoney : {all_times: 0,total_money:0};
                this.sumDate.totalMoney =  (obj.allData.attributes &&  obj.allData.attributes.totalMoney) ? obj.allData.attributes.totalMoney : {all_times: 0,total_money:0};
            },
            // 拼接游戏
//            addCheckGame(arr){
//                this.gameList.splice(0,this.gameList.length);
//                this.levelListInit.splice(0,this.levelListInit.length);
//                let temp = this.gameList;
//                let levelListInit = this.levelListInit;
//                for(let k in arr){
//                    levelListInit.push(arr[k]);
//                    for(let j in this.modeData.gameList){
//                        if(this.modeData.gameList[j].value === arr[k]){
//                            temp.push(this.modeData.gameList[j].value);
//                        }
//                    }
//                }
//            },
            //全选
            handleCheckAllChange(event) {
                let checkList = [];
                for (let v in this.modeData.gameList) {
                    checkList[v] = this.modeData.gameList[v].value;
                };
                this.modeData.checkList = event.target.checked ?checkList : [];
            },
            handleCheckedGameChange(value){
                let checkedCount = value.length;
                this.modeData.checkAll = checkedCount === this.modeData.gameList.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.modeData.gameList.length;
                this.modeData.checkList = value;
            },
            doHandle(item) {
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
            // 游戏投注跳转
            openGameClass(row){
                this.flag = row.flag || '0';
                let type = row.type || 'user';
                let _this = this;
                this.gameList.splice(0,this.gameList.length);
                let games = this.gameList;
                this.modeData.checkList.splice(0, this.modeData.checkList.length);
                this.modeData.gameList.forEach((v)=>{
                    if(v.value === row['game_name']){
                        _this.modeData.checkList.push(v.value);
                        games.push({
                            "game_id" : row.game_type || '',
                            "game_type": row.gtype || ''
                        });
                    }
                })
                let str = "";
                if(this.dateObj.start_time){
                    str = '&start_time='+ this.dateObj.start_time;
                }
                if(this.dateObj.end_time){
                    str = str + '&end_time=' + this.dateObj.end_time;
                }
                if(str){
                    this.tableUrl = this.baseUrl + "?type=" + type + "&flag=" + this.flag + "&games=" + JSON.stringify(games) + str;
                }else{
                    this.tableUrl = this.baseUrl + "?type=" + type + "&flag=" + this.flag + "&games=" + JSON.stringify(games);
                }
                this.columnsUrl = "static/json/statement/PremiumTips/columns2.json";
                this.levelList.push({
                    name: row['game_name'],
                    url: this.tableUrl,
                    type: '',
                    username: this.levelList[0].username
                });
            },
            // 用户跳转
            openUser(row){
                this.flag = row.flag || '0';
                let type = row.type;
                let name = row.user_name || "";
                if(row.type === 'user'){
                    this.$router.push({path:'/noteManagement',query:{user_name:row.user_name,game_name:row.game_name,game_type:row.game_type,start_time:this.dateObj.start_time,end_time:this.dateObj.end_time,isopen: 1}});
                }else{
                    let str = "";
                    if(this.dateObj.start_time){
                        str = '&start_time='+ this.dateObj.start_time;
                    }
                    if(this.dateObj.end_time){
                        str = str + '&end_time=' + this.dateObj.end_time;
                    }
                    if(str){
                        this.tableUrl = this.baseUrl + "?type=" + type + "&flag=" + this.flag + "&user_name=" + name + "&games=" + JSON.stringify(this.gameList) + str;
                    }else{
                        this.tableUrl = this.baseUrl + "?type=" + type + "&flag=" + this.flag + "&user_name=" + name + "&games=" + JSON.stringify(this.gameList);
                    }
                    this.levelList.push({
                        name: row['user_name'],
                        url: this.tableUrl,
                        type: row.type,
                        username: this.levelList[0].username
                    });
                }
            },
            //查询数据
            doQuery(obj){
                this.dateObj.start_time = obj.item.start_time;
                this.dateObj.end_time = obj.item.end_time;
                this.dateObj.type = obj.item.type;
                this.dateObj.user_name = obj.item.user_name;

                if(obj.item.user_name){
                    this.columnsUrl = "static/json/statement/PremiumTips/columns2.json";
                }else{
                    this.columnsUrl = "static/json/statement/PremiumTips/columns.json";
                }
                this.addCheckGame(this.modeData.checkList); // 拼接游戏
                this.tableUrl = this.baseUrl +this.addSearch(obj.item) + '&flag=0&games='+ JSON.stringify(this.gameList);
                this.levelList.splice(0,this.levelList.length);
                this.levelList.push({name:'游戏报表',"url": this.tableUrl,type:obj.item.type,username:obj.item.user_name,gamses:this.gameList});
            },
            resetform(){
                this.init();
            },
            // 切换层级
            doChangeClass(obj,index){
                if(obj.name != "游戏报表"){
                    this.columnsUrl = "static/json/statement/PremiumTips/columns2.json";
                    this.levelList.splice((index+1), (this.levelList.length - 1));
                    this.tableUrl = obj.url;
                }else{
                    this.levelList.splice((index+1), (this.levelList.length - 1));
                    this.columnsUrl = "static/json/statement/PremiumTips/columns.json"
                    this.tableUrl = obj.url;
                    let levelListInit = this.levelListInit;
                    for(let i=0 ; i<levelListInit.length; i++){
                        this.modeData.checkList.push(levelListInit[i]);
                    }
                }
            }
        },
        created(){
            this.init()
        }
    }
</script>
<style>

</style>