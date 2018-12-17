<template>

    <div id="oddsSet" class="templateManage" style="width: 100%">
        <el-row>
            <!--表头 -->
            <el-col :span="16"><changeplay @do-change-play="doChangePlay"></changeplay></el-col>
            <el-col :span="8"></el-col>
            <el-col :span="24">
                <!--标准玩法 -->
                <el-tabs v-model="setName" @tab-click="doChangeSet" v-if="playType =='standard'">
                    <!--彩票设置 -->
                    <el-tab-pane :label="lotterSet" name="lotterSet" >
                        <el-col>
                            <el-col :span="6"><span v-text="LANG['当前模板'] || '当前模板'"></span>：
                                <el-select v-model="nowTypeName" placeholder="请选择">
                                    <el-option
                                            v-for="item in nowTypeNameList"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="6"><span v-text="LANG['彩种名称'] || '彩种名称'"></span>：
                                <el-select v-model="lotteryCategoryName" :placeholder="LANG['请选择彩种名称'] || '请选择彩种名称'">
                                    <el-option
                                            v-for="item in lotteryCategoryNameList"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-col>
                        <modelset :bodyModelUrl="lotteryModelUrl" :headModel="standardLotteryCol" @save-data="saveData"></modelset>
                    </el-tab-pane>
                    <!--赔率设置 -->
                    <el-tab-pane :label="oddsSet" name="oddsSet" >
                        <el-col>
                            <el-col :span="5"><span v-text="LANG['当前模板'] || '当前模板'"></span>：
                                <el-select v-model="nowTypeName" placeholder="请选择">
                                    <el-option
                                            v-for="item in nowTypeNameList"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="5"><span v-text="LANG['彩种名称'] || '彩种名称'"></span>：
                                <el-select v-model="lotteryCategoryName" placeholder="请选择">
                                    <el-option
                                            v-for="item in lotteryCategoryNameList"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="5"><span v-text="LANG['玩法类型'] || '玩法类型'"></span>：
                                <el-select v-model="oddsPlayType" :placeholder="LANG['请选择玩法名称'] || '请选择玩法名称'">
                                    <el-option
                                            v-for="item in oddsPlayTypeList"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-col>
                        <oddsset :dataModelUrl="oddsModelUrl" @save-data="saveData"></oddsset>
                    </el-tab-pane>
                </el-tabs>
                <!-- 快捷玩法 -->
                <el-tabs v-model="quicksetName" @tab-click="doQuickChangeSet" v-if="playType =='quick'">
                    <!-- 彩票设置 -->
                    <el-tab-pane :label="lotterSet" name="lotterSet" >
                        <el-col>
                            <el-col :span="6"><span v-text="LANG['当前模板'] || '当前模板'"></span>：
                                <el-select v-model="nowTypeName" placeholder="请选择">
                                    <el-option
                                            v-for="item in nowTypeNameList"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="6"><span v-text="LANG['彩种名称'] || '彩种名称'"></span>：
                                <el-select v-model="lotteryCategoryName" :placeholder="LANG['请选择彩种名称'] || '请选择彩种名称'">
                                    <el-option
                                            v-for="item in lotteryCategoryNameList"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <modelset :bodyModelUrl="lotteryModelUrl" :headModel="quickLotteryCol" @save-data="saveData"></modelset>
                        </el-col>
                    </el-tab-pane>
                    <!--赔率设置 -->
                    <el-tab-pane :label="oddsSet" name="oddsSet" >
                        <el-col>
                            <el-col :span="5"><span v-text="LANG['当前模板'] || '当前模板'" ></span>：
                                <el-select v-model="nowTypeName" placeholder="请选择">
                                    <el-option
                                            v-for="item in nowTypeNameList"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="5"><span v-text= "LANG['彩种名称'] || '彩种名称'"></span>：
                                <el-select v-model="lotteryCategoryName" placeholder="请选择">
                                    <el-option
                                            v-for="item in lotteryCategoryNameList"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-col>
                        <el-col>
                                <quickoddsset :bodyModelUrl="oddsModelUrl"  :bodyModelUrl1="oddsModelUrl1" :bodyModelUrl2="oddsModelUrl2" :columnsUrl="columnsQuickOddsUrl" :resendRequest="resendRequest" @save-data="saveQuickoddsset"></quickoddsset>
                        </el-col>
                    </el-tab-pane>
                    <!--限额设置 -->
                    <el-tab-pane :label="limitSet" name="limitSet" >
                        <el-col>
                            <el-col :span="5"><span v-text="LANG['当前模板'] || '当前模板'"></span>：
                                <el-select v-model="nowTypeName" placeholder="请选择">
                                    <el-option
                                            v-for="item in nowTypeNameList"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="5"><span v-text="LANG['彩种名称'] || '彩种名称'"></span>：
                                <el-select v-model="lotteryCategoryName" placeholder="请选择">
                                    <el-option
                                            v-for="item in lotteryCategoryNameList"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                            <el-col>
                                <modelset :bodyModelUrl="limitSetModelUrl" :headModel="quickLimitSetCol" @save-data="saveData"></modelset>
                            </el-col>
                        </el-col>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import  changePlay from '../../components/changePlay.vue'
    import  modelSet from '../../components/modelSet.vue'
    import oddsSet from '../../components/oddsSet.vue'
    import tablegrid from '../../components/tableGrid.vue'
    import quickOddsSet from '../../components/quickOddsSet.vue'
    export default{
        data(){
            return{
                LANG,
                //玩法类型（快捷、标准）
                playType:"standard",
                //标准设置类型（彩票、赔率）
                setName:"lotterSet",
                //快捷方式设置切换状态
                quicksetName:"lotterSet",
                //彩票设置文字MODEL
                lotterSet:'彩票设置',
                //赠率设置
                oddsSet:'赔率设置',
                //限额设置
                limitSet:'限额设置',
                //是否重发请求
                resendRequest:false,
                //当前模板名称
                nowTypeName:"默认模板",
                //快捷玩法赔率设置中的快捷设置
                quickOddsQuickSet:"",
                //快捷玩法彩票设置列配置
                quickLotteryCol:[],
                //快捷玩法限额设置列配置地址
                quickLimitSetColUrl :"",
                //快捷玩法限额设置列配置
                quickLimitSetCol:[],
                //快捷玩法赔率设置中的快捷设置INPUT
                quickInput:1,
                //当前默认模板列表
                nowTypeNameList:[],
                //彩种名称
                lotteryCategoryName:"",
                //彩种名称列表
                lotteryCategoryNameList:[],
                //赔率玩法类型
                oddsPlayType:"",
                //赔率玩法类型列表
                oddsPlayTypeList:[],
                //彩票数据请求地址
                lotteryModelUrl:null,
                //赔率数据请求地址
                oddsModelUrl:null,
                //赔率数据请求地址
                limitSetModelUrl:null,
                //赔率数据列请求地址
                limitSetColUrl:null,
                //快捷玩法赔率设置列URL
                columnsQuickOddsUrl:"",
                //标准-彩票设置-表格列配置
                standardLotteryCol:[],
                error:'',
                checkedgx:false,
                //快捷玩法设置类型
                quickPlaySetType:""
            }
        },
        components: {
            changeplay:changePlay,
            modelset:modelSet,
            oddsset:oddsSet,
            tablegrid:tablegrid,
            quickoddsset:quickOddsSet
        },
        methods: {
            init(){

                var _this=this
                //当前选项表格数据请求地址(默认为标准玩法-彩票设置)
                this.lotteryModelUrl="static/json/lotteryNew/lotterytemplateSet/standard/tableDate.json";
                //获取列配置(默认为标准玩法-彩票设置)
                var colUrl="static/json/lotteryNew/lotterytemplateSet/standard/column-lottery.json";
                this.$http.get(colUrl).then((res) => {
                    let data = res.data.columns;
                    let standardLotteryCol=_this.standardLotteryCol
                    if(data.length > 0){
                        for (let i in data) {
                            standardLotteryCol.push(data[i])
                        }
                        //跟据参数更换初始值
                        //this.nowTypeName  传当前value
                    }

                }).catch((err)=>{
//                    console.log(err)
                });
                //请求彩票模板类型lotteryModelOptions
                var modelNameUrl="static/json/lotteryNew/lotterytemplateSet/lotteryName.json"
                this.$http.get(modelNameUrl).then((res) => {
                    let data = res.data.options
                    let nowTypeNameList=_this.nowTypeNameList
                    if(data.length > 0){
                        for (let i in data) {
                            nowTypeNameList.push(data[i])
                        }
                        //跟据参数更换初始值
                        //this.nowTypeName  传当前value
                    }
                }).catch((err)=>{
//                    console.log(err)
                })
                //请求彩种名称lotteryCategoryNameList
                var lotteryCategoryNameUrl="static/json/lotteryNew/lotterytemplateSet/lotteryCategoryName.json"
                this.$http.get(lotteryCategoryNameUrl).then((res) => {
                    let data = res.data.options
                    let lotteryCategoryNameList=_this.lotteryCategoryNameList
                    if(data.length > 0){
                        for (let i in data) {
                            lotteryCategoryNameList.push(data[i])
                        }
                        //跟据参数更换初始值
                        //this.lotteryCategoryName  传当前value
                    }
                }).catch((err)=>{
//                    console.log(err)
                })
            },
            //切换玩法
            doChangePlay(str){
                if(str.item == this.playType){
                    return
                }
                //切换玩法   后面跟上类型参数
                if(str.item == 'standard'){
                    this.playType="standard"
                }else{
                    this.playType="quick"
                    var _this=this
                    this.lotteryModelUrl=null;
                    this.columnsQuickOddsUrl=null
                    this.oddsModelUrl=null
                    this.lotteryModelUrl="static/json/lotteryNew/lotterytemplateSet/quick/tableDate.json"+"?setType"+this.setType
                    this.columnsQuickOddsUrl="static/json/lotteryNew/lotterytemplateSet/quick/column-lottery.json"
                    this.$http.get(_this.columnsQuickOddsUrl).then((res)=>{
                        let data = res.data.columns
                        let quickLotteryCol=_this.quickLotteryCol
                        if(data.length > 0){
                            for (let i in data) {
                                quickLotteryCol.push(data[i])
                            }
                            //跟据参数更换初始值
                            //this.nowTypeName  传当前value
                        }
                    }).catch((err)=>{
//                        console.log(err)
                    })
                }

            },
            // 快捷方式修改
			saveQuickoddsset(data){
				this.$message.success(LANG['保存成功！'] || '保存成功！');
            },
            //快捷玩法赔率统一修改
            allEdit(data){
				this.$message.success(LANG['保存成功！'] || '保存成功！');
            },
            //获取路由参数
            fetchData () {
//                console.log(this.$route.params)
            },
            //保存数据
            saveData(data){
				this.$message.success(LANG['保存成功！'] || '保存成功！');

            },
            //保存快捷玩法赔率设置
            doSaveQuickOdds(){
				this.$message.success(LANG['保存成功！'] || '保存成功！');
            },
            //标准切换设置
            doChangeSet(){
                if((this.setName == "lotterSet") && (this.playType="standard")){
                    this.setType="lottery"
                    this.lotteryModelUrl="static/json/lotteryNew/lotterytemplateSet/standard/tableDate.json"+"?setType"+this.setType
                }else{
                    this.setType="odds"
                    var _this=this
                    this.oddsModelUrl="static/json/lotteryNew/lotterytemplateSet/standard/tableDate1.json"+"?setType"+this.setType
                    //请求玩法类型oddsPlayType
                    var oddsPlayTypeUrl="static/json/lotteryNew/lotterytemplateSet/oddsPlayType.json"
                    this.$http.get(oddsPlayTypeUrl).then((res) => {
                        let data = res.data.options
                        let oddsPlayTypeList=_this.oddsPlayTypeList
                        if(data.length > 0){
                            for (let i in data) {
                                oddsPlayTypeList.push(data[i])
                            }
                            //跟据参数更换初始值
                            //this.oddsPlayType  传当前value
                        }
                    }).catch((err)=>{
//                        console.log(err)
                    })
                }

            },
            //快捷玩法设置切换
            doQuickChangeSet(){
                if((this.quicksetName == "lotterSet" ) && (this.playType="quick")){
                    if(this.quickPlaySetType == this.quicksetName){
                        return
                    }
                    this.quickPlaySetType="lotterSet"
                    this.lotteryModelUrl="static/json/lotteryNew/lotterytemplateSet/quick/tableDate.json"+"?setType"+this.setType
                    this.columnsQuickOddsUrl="static/json/lotteryNew/lotterytemplateSet/quick/column-lottery.json"
                    var _this=this
                    this.$http.get(_this.columnsQuickOddsUrl).then((res) => {
                        let data = res.data.columns
                        let quickLotteryCol=_this.quickLotteryCol
                        _this.quickLotteryCol.splice(0,_this.quickLotteryCol.length);
                        if(data.length > 0){
                            for (let i in data) {
                                quickLotteryCol.push(data[i])
                            }
                            //跟据参数更换初始值
                            //this.nowTypeName  传当前value
                        }
                    }).catch((err)=>{
//                        console.log(err)
                    })
                }
                if(this.quicksetName == "oddsSet"){
                    if(this.quickPlaySetType == this.quicksetName){
                        return
                    }
                    this.quickPlaySetType="oddsSet"
                    this.oddsModelUrl="static/json/lotteryNew/lotterytemplateSet/quick/tableDateOdds.json"+"?setType"+this.setType
                    this.oddsModelUrl1="static/json/lotteryNew/lotterytemplateSet/quick/tableDateOdds1.json"+"?setType"+this.setType
                    this.oddsModelUrl2="static/json/lotteryNew/lotterytemplateSet/quick/tableDateOdds2.json"+"?setType"+this.setType
                    this.columnsQuickOddsUrl="static/json/lotteryNew/lotterytemplateSet/quick/column-odds.json"
                    this.resendRequest=true
                }
                if(this.quicksetName == "limitSet"){
                    if(this.quickPlaySetType == this.quicksetName){
                        return
                    }
                    this.quickPlaySetType="limitSet"
                    let quickLimitSetColUrl=this.quickLimitSetColUrl
                    this.limitSetModelUrl="static/json/lotteryNew/lotterytemplateSet/quick/tableDatelimitSet.json"+"?setType"+this.setType
                    quickLimitSetColUrl="static/json/lotteryNew/lotterytemplateSet/quick/column-limit-set.json"
                    if(quickLimitSetColUrl !="" && quickLimitSetColUrl !=null){
                        this.$http.get(quickLimitSetColUrl).then((res) => {
                            let data = res.data.columns
                            let quickLimitSetCol=this.quickLimitSetCol
                            quickLimitSetCol.splice(0,quickLimitSetCol.length);
                            if(data.length > 0){
                                for (let i in data) {
                                    quickLimitSetCol.push(data[i])
                                }
                                //跟据参数更换初始值
                                //this.oddsPlayType  传当前value
                            }
                        }).catch((err)=>{
//                            console.log(err)
                        })
                    }
                }
            }
        },
        created: function () {

            this.init()
        }
    }
</script>
<style scopend>
    .templateManage .el-dialog--small{width:30%;min-width:400px; max-width:600px;border-radius:10px;}
    .templateManage .el-dialog--small .fromMargin{margin-right:60px;}
    .templateManage .bg-purple-dark{background:none;}
    .templateManage .addManage{float:right;margin-right:5%;}
    .templateManage .block{text-align:right;}
    .el-checkbox{margin-left:10px}
    .templateManage .el-col {  margin-bottom: 30px;}
</style>
