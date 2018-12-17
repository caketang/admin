<template>
  <div id="autoDrop2">
    <el-row type="flex" justify="space-between">
      <el-col :span="6">
        <span v-text="LANG['彩种名称'] || '彩种名称'"></span>:
        <el-select v-model="lotteryCategoryName" placeholder="请选择">
          <el-option
            v-for="(item,index) in lotteryCategoryNameList" :key="index"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6" v-show="nowTypeNameShow">
        <span v-text="LANG['动态赔率'] || '动态赔率'"></span>:
        <el-select v-model="nowTypeName" placeholder="请选择">
          <el-option
            v-for="(item,index) in nowTypeNameList" :key="index"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6" v-show="openShow">
        <span v-text="LANG['开启：'] || '开启：'"></span>
            <el-switch
              v-model="open"
              on-text="开启"
              off-text="关闭"
              @change="openState"
             >
            </el-switch>
      </el-col>
      <el-col :span="2" :offset="4">
        <el-button type="primary">保存设置</el-button>
      </el-col>
    </el-row>
    <el-row v-show="gameShow">
      <el-col :span="24">
        <tablegrid
          :columnsUrl="columnsUrl"
          :tableUrl="tableUrl"
          :tableCheck="false"
          :tableIndex="false">
        </tablegrid>
      </el-col>
    </el-row>
    <!--幸运28-->
  <!--<el-row v-show="luck" class="luck">-->
    <!--<el-form :inline="true">-->
      <!--<el-form-item label="13,14大小单双"></el-form-item>-->
      <!--<el-button @click="add">增加</el-button>-->
    <!--</el-form>-->
    <!--<el-form :inline="true" ref="form" :model="form" label-width="100px" v-for="item in items">-->
      <!--<el-form-item label="当总注>">-->
        <!--<el-input v-model="num"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="13,14四项">-->
        <!--<el-input></el-input>-->
      <!--</el-form-item>-->
      <!--<el-button @click="del">删除</el-button>-->
    <!--</el-form>-->
    <!--<el-form :inline="true">-->
      <!--<el-form-item label="13,14组合">  </el-form-item>-->
      <!--<el-button @click="add">增加</el-button>-->
    <!--</el-form>-->
    <!--<el-form :inline="true" label-width="100px" v-for="item in items">-->
      <!--<el-form-item label="当总注>">-->
        <!--<el-input v-model="num"></el-input>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="13,14组合">-->
        <!--<el-input></el-input>-->
      <!--</el-form-item>-->
      <!--<el-button @click="del">删除</el-button>-->
    <!--</el-form>-->
  <!--</el-row>-->
    <div v-for="(arr,index) in arrs" :key="index" v-show="luck" style="border: 1px solid lightgrey;margin: 20px 0px">
    <el-row style="height: 49px;line-height:49px;background-color: #fff;padding-left: 18px">
      <el-col :span="3">
        <span v-text="LANG[arr.title] || arr.title"></span>
      </el-col>
      <el-col :span="6">
        <el-button @click="add">增加</el-button>
      </el-col>

    </el-row>
    <el-row v-for="(item,index) in items" :key="index" style="height: 49px;line-height:49px;border-bottom:1px solid lightgrey;
    padding-bottom: 5px;padding-left: 18px">
      <span>当总注></span>
      <el-input style="width: 100px"></el-input>时
      <span v-text="LANG[arr.content] || arr.content"></span>
      <el-input style="width: 100px;"></el-input>
      <el-button @click="del">删除</el-button>
    </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import tableGrid from '../../components/tableGrid.vue'
  import formEdit from '../../components/formEdit.vue'
  export default{
    data(){
      return {
        LANG,
        msg:[{
          open:'开启：',
          close:'关闭：'
        }],
//        顶部开关
        open:true,
//        开关显示
        openShow:'',
//        赔率显示
        nowTypeNameShow:'',
        //彩种名称
        lotteryCategoryName:"",
        //彩种名称列表
        lotteryCategoryNameList:[],
        //当前模板列表
        nowTypeNameList:[],
        //当前模板名称
        nowTypeName:"",
        columnsUrl:'',
        tableUrl: '',
        luck:'',
        gameShow:'',
        items:[1],
        arrs:[
          {
            title:"13,14大小单双",
            content:"13,14四项"
          },
          {
            title:"13,14组合",
            content:"13,14组合"
          }
        ]
      }
    },
    components:{
      tablegrid: tableGrid
//      formEdit: formEdit,
    },
    methods:{
      openState(){
        if(this.open){

        }
      },
      init(){
        var _this = this;
        this.openShow = false;
        this.nowTypeNameShow = false;
        this.lotteryCategoryName='ks';
        this.nowTypeName='jepl';
        this.luck=false;
        this.gameShow=true;
//        彩种名称
//        var lotteryCategoryNameListUrl="static/json/lottery/lotteryinstantnote/lotteryCategoryName1.json"
//        this.$http.get(lotteryCategoryNameListUrl).then((res) => {
//          let data = res.data.options
//          let lotteryCategoryNameList=_this.lotteryCategoryNameList
//          if(data.length > 0){
//            for (let i in data) {
//              lotteryCategoryNameList.push(data[i])
//            }
//            //跟据参数更换初始值
//            //this.lotteryCategoryName  传当前value
//          }
//        }).catch((err)=>{
//          console.log(err)
//        });
//        //赔率
//        var modelNameUrl="static/json/lottery/lotteryinstantnote/lotteryName1.json"
//        this.$http.get(modelNameUrl).then((res) => {
//          let data = res.data.options
//          let nowTypeNameList=_this.nowTypeNameList
//          if(data.length > 0){
//            for (let i in data) {
//              nowTypeNameList.push(data[i])
//            }
//            //跟据参数更换初始值
//            //this.nowTypeName  传当前value
//          }
//        }).catch((err)=>{
//          console.log(err)
//        })
      },
      add(){
        this.items.push(1);
      },
      del(){
        this.items.splice(1,1)
      },
      //彩种变化
      lotteryCategoryNameSel(){
        if(this.lotteryCategoryName=='ks'){
          this.openShow = true;
          this.luck=false;
          this.gameShow = true;
          this.nowTypeNameShow=true;
          this.columnsUrl="/static/json/Note/lottery/columns4.json";
          this.tableUrl="/static/json/Note/lottery/tableDate2.json";

        }else if(this.lotteryCategoryName=='xy28'){
          this.openShow = true;
          this.luck=true;
          this.gameShow = false;
          this.nowTypeNameShow=false;
        }
        else{
          this.gameShow=true;
          this.luck=false;
          this.openShow=false;
          this.nowTypeNameShow=false;
          this.columnsUrl="";
          this.tableUrl="";
        }
      },
//      赔率变化
      nowTypeNameSel(){
        if(this.nowTypeName == 'clpl'){
          this.tableUrl='/static/json/Note/lottery/tableDate5.json';
        }else {
          this.tableUrl='/static/json/Note/lottery/tableDate2.json';
        }
      }
    },
    created(){
      this.init();
    },
    mounted(){
    },
    watch:{
      'lotteryCategoryName':'lotteryCategoryNameSel',
      'nowTypeName':'nowTypeNameSel'
    }
  };
</script>

<style>
.luck{
  margin-top: 20px;
  padding-top: 10px;
  padding-left: 10px;
  border:1px solid lightgrey;
}
</style>
