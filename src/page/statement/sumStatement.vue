<template>
    <div class="page">
        <el-col v-show="homeform" class="clearfix">
            <formEdit   :formVisible="formVisible" 
                        :formConfig="searchConfig"
                        :formType="formType"
                        :type="'search'"
                        :isEdit="isEdit"
                        :labelWidth="labelWidth"
                        @do-query="doQuery"
                        @reset-form="resetForm"
                        :showAdd="false">
                        </formEdit>
        </el-col>
        <el-col>
            <span v-for="(item,index) in levelList" :key="index">
                <el-button type="text" @click="doChangeClass(item,index)" >{{LANG[item.name] || item.name}}</el-button>
                <span v-if="index !== (levelList.length-1)"> / </span>
            </span>
        </el-col>
        <el-col v-show="homeform">
            <el-col>
                <tableData :tableUrl="tableUrl" @showAgent="showAgent"></tableData>
            </el-col>
        </el-col>
        <!--直属代理和直属会员-->
        <el-col v-if="isDetail">
            <memberdetails :Url="detailsUrl" :label="detailslabel" :type="showtype" :agentUrl="agentUrl" ref="reload"></memberdetails>
        </el-col>
        <!--层级代理-->
        <el-col v-if="levelAgent">
            <levelagent :Url="detailsUrl" :label="detailslabel" :date="label"　:fUrl="firstUrl"  ref="child"></levelagent>
        </el-col>
    </div>
</template>
<script>
   
    import formEdit from '../../components/formEdit.vue'
    import tableData from './sumStatecom/reportForms.vue' // 总报表组件
    import memberDetails from './sumStatecom/memberDetail.vue'// 直属代理和直属会员报表详情组件
    import  levelAgentDetails from './sumStatecom/levelAgent.vue' // 层级代理报表
    export default{
        data(){
            return{
                LANG,
                columnsUrl:'',
                tableUrl:'',
                totalData:{},
                LANG,
                formType:"search",
                detailslabel:'',
                detailsUrl:'',
                updated: false,
                homeform: true, // 判断总报表是否显示
                loading: true,
                date:'',
                isDetail: false, // 判断直属代理和会员代理下面的会员详情是否显示
                type: 'agent',
                nowId: -1,
                levelAgent: false, // 判断层级代理下的会员详情是否显示
                dataModel:[],
                //表格列数据
                showtype: "",
                //表格数据
                tableUrl:"",
				searchConfig: [{"type":"quickDate","showTimes": true},//快捷日期
					{"type":"dateTimeGroup","label":"报表日期","showTime": false,"prop":[{"prop":"date_from","value":"","label":"开始时间"},
                        {"prop":"date_to","value":"","label":"结束时间"}]},
                ],
				type:"search",
				labelWidth:"120px",
				formVisible:{
					state:false
				},
				isEdit: {
					state: false
				},
                 // 导航条
                levelList: [],
                firstUrl: '',
                agentUrl: '',
                stime: sessionStorage.dateTimeStart,
                etime: sessionStorage.dateTimeEnd,
            }
        },
        components:{
            formEdit: formEdit,
            tableData:tableData,
            memberdetails: memberDetails,
            levelagent: levelAgentDetails,
           
        },
        methods:{
            init(){
                this.baseUrl = URL.api+ROUTES.GET.state.summary;
                this.tableUrl = this.baseUrl + "?date_from=" + this.stime + "&date_to=" +this.etime;
                this.date = "&date_from=" + this.stime + "&date_to=" + this.etiem
                this.label = '('+this.stime +'至' + this.etime+')'
                this.levelList.splice(0,this.levelList.length);
                this.levelList.push({name:'总报表',"url": this.tableUrl});
                this.firstUrl =　URL.api+ROUTES.GET.state.summary + "?date_from=" + this.stime + "&date_to=" + this.etime;
            },
            //接收快捷日期数据
            getdays(item){
                this.Sdate.dateStart=item.sday
                this.Sdate.dateEnd=item.eday
                this.reSetDate=false
            },
            pushList(obj){
                this.levelList.push(obj);
            },
            pushUrls(obj){
                this.levelList.push(obj);
            },
            // 表格点击代理查看
            showAgent(row){
                switch (row.type){
                    case "agent":
                        this.showtype = "agent";
                        this.homeform = false;
                        this.isDetail = true;
                        this.agentUrl = this.tableUrl;
                        this.detailsUrl = this.tableUrl+"&type=agent";
                        this.detailslabel = '代理报表详情'+this.label
                        this.levelList.push({name: '直属代理',"url": this.detailsUrl});
                    break
                    case "member":
                        this.showtype = "member";
                        this.homeform = false;
                        this.isDetail = true;
                        this.detailsUrl = this.tableUrl+"&type=member";
                        this.detailslabel = '直属会员报表详情'+this.label
                        this.levelList.push({name: '直属会员'});
                    break
                    case "level_agent":
                      
                        this.homeform = false
                        this.isDetail = false;  
                        this.levelAgent = true;
                        this.detailsUrl = this.tableUrl+"&type=level_agent";
                        this.detailslabel = this.label
                        this.levelList.push({name: '层级代理',"url": this.detailsUrl});
                    break
                }
                     
                
            },
            doHandle(obj){

            },
            doQuery(obj){
                this.tableUrl = this.baseUrl + this.addSearch(obj.item);
                this.date = "&date_from=" + obj.item.date_from + "&date_to=" + obj.item.date_to
                this.firstUrl = this.baseUrl +"?date_from=" + obj.item.date_from + "&date_to=" + obj.item.date_to
                this.label = '('+obj.item.date_from +'至' + obj.item.date_to+')'  
				this.levelList.splice(0,this.levelList.length);
                this.levelList.push({name:'总报表',"url": this.tableUrl});

            },
             returnPage(obj) {
                if(obj.item === "details")
                {
                    if(this.levelList.length>1)
                    {
                        this.levelList.pop();
                    }
                }
                else{
                    if(this.levelList.length>1)
                    {
                        this.levelList.pop();
                    }
                    this.homeform = true;
                    this.isDetail = false;
                    this.levelAgent = false;
                }
            },
            returnPages(){
                this.levelList.pop();
                this.homeform = false;
                this.isDetail = false;
                this.levelAgent = true;
            },
            // 重置查询条件
            resetForm(){
                this.init();
            },
           // 切换层级
            doChangeClass(obj,index){
                if(obj.name == "总报表"){
                    this.levelList.splice((index+1), (this.levelList.length - 1));
                    this.tableUrl = obj.url;
                    this.homeform = true;
                    this.isDetail = false;
                    this.levelAgent = false;
                   
                } else if(obj.name == "层级代理"){
                    this.homeform = false;
                    this.isDetail = false;
                    this.levelAgent = true;
                    this.$refs.child.isShow= true;
                    this.$refs.child.isDetails= false;
                    this.levelList.splice((index+1), (this.levelList.length - 1));
                }else if(obj.type === "level_agent")// 层级代理下的
                {
                    this.homeform = false;
                    this.isDetail = false;
                    this.levelAgent = true;
                    this.$refs.child.isShow= false;
                    this.$refs.child.isDetails= true;
                    if(this.$children[3].$children[0].showDetails){
                        this.$children[3].$children[0].showDetails({id:obj.id,name:obj.name,pushList: false});
                    }
                    this.levelList.splice((index+1), (this.levelList.length - 1));
                }else if(obj.name == "直属代理")
                {
                    this.$refs.reload.init();
                    this.$refs.reload.updated = false;
                    this.showtype = "agent";
                    this.levelList.splice((index+1), (this.levelList.length - 1));
                }
            }
        },
        created(){
            this.init();
        },
        activated() {
            this.init();
            this.homeform = true;
            this.isDetail = false;
            this.levelAgent = false;
        }
    }
</script>
<style>

</style>