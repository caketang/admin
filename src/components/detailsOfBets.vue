<template>
	<div id="details">
        <el-dialog 
            title="下注明细"
            size="tiny"
            v-model="dialogVisible.state"
            v-if="!hidden"
            @close="closeDialog"
            >
           <div class="mb10">
              <span>{{dataModel.game_name}}- 下注记录</span>
           </div>
            <el-card  :body-style="{ padding: '20px' }" class="clearfix">
                <div slot="header" class="clearfix">
                    <span class="leftcontent">注单</span>
                    <span class="rightcontent">结果</span>
                </div>
                <div class="clearfix lottery">
                    <div class="details fl">
                      <div class="text item">
                         <span> 局號:   {{dataModel.round_no}}</span>
                      </div>
                      <div class="text item">
                          <span>桌號:  {{dataModel.tableId}}</span>
                      </div>
                      <div class="text item">
                          <span>游戏ID:   {{dataModel.game_id}}</span>
                      </div>
                      <div class="text item">
                         <span> 時間:    {{dataModel.date}}</span>
                      </div>
                  </div>
                  <div class="poker fr " >
                      <div class="fl mr10">
                          <div class="title tCent mb10 mr">
                              <span class="rcolor" v-show="isBaccarat">{{'庄('+ bankernumber+')'}}</span>
                              <span class="rcolor dragon" v-show="isTiger">{{'龙('+ dragon+')'}}</span>
                              <span class="rcolor dice" v-show="isDice">{{dataModel.result.result}}</span>
                          </div>
                          <div v-show="isBaccarat">
                              <img  v-for="index in banker" :src="'../../static/img/poker/'+ index +'.png'" height="48" width="38" alt="">
                          </div>
                      </div>
                      <div class="fr">
                         <div class="title tCent mb10">
                               <span class="bcolor" v-show="isBaccarat">{{'闲('+ playernumber+')'}}</span>
                               <span class="bcolor dragon" v-show="isTiger">{{'虎('+ tiger+')'}}</span>
                          </div>
                          <div v-show="isBaccarat">
                              <img  v-for="index in player" :src="'../../static/img/poker/'+ index +'.png'" height="48" width="38" alt="">
                          </div>
                      </div>

                  </div>
                </div>
            </el-card>
           <!-- 无数据先hidden<table cellspacing="0" cellpadding="0" border="0" class="el-table el-table__header el-table--border" style="width: 100%;">
               <thead>
                   <tr>
                       <th colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf ">
                           <div class="cell tCent" v-text="LANG['下注类型'] || '下注类型'"></div>
                       </th>
                       <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                           <div class="cell" v-text="LANG['总投注'] || '总投注'"></div>
                       </th>
                       <th colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                           <div class="cell" v-text="LANG['总派彩'] || '总派彩'"></div>
                       </th>
                   </tr>
               </thead>
                       <tr colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                            <td class="el-table_1_column_19">
                               <div class="cell">{{'和'}}</div>
                           </td>
                           <td class="el-table_1_column_19">
                               <div class="cell">{{'1.2'}}</div>
                           </td>
                             <td class="el-table_1_column_19">
                               <div class="cell">{{'1.2'}}</div>
                           </td>
                             <td class="el-table_1_column_19">
                               <div class="cell">{{'1.2'}}</div>
                           </td>
                       </tr>
                       <tr colspan="2" rowspan="1" class="el-table_1_column_36 is-leaf">
                            <td class="el-table_1_column_19">
                               <div class="cell">{{'小'}}</div>
                           </td>
                           <td class="el-table_1_column_19">
                               <div class="cell">{{'1.2'}}</div>
                           </td>
                             <td class="el-table_1_column_19">
                               <div class="cell">{{'1.2'}}</div>
                           </td>
                             <td class="el-table_1_column_19">
                               <div class="cell">{{'1.2'}}</div>
                           </td>
                       </tr>
                        <tr colspan="1" rowspan="1" class="el-table_1_column_36 is-leaf">
                            <td colspan="2" class="el-table_1_column_19 tCent">
                               <div class="cell">{{'总计'}}</div>
                           </td>
                         
                           <td class="el-table_1_column_19">
                               <div class="cell">{{'1.2'}}</div>
                           </td>
                             <td class="el-table_1_column_19">
                               <div class="cell">{{'1.2'}}</div>
                           </td>
                       </tr>
                       <tr v-if="dataModel.length == 0" style="text-align:  center;height: 100px;">
                           <td colspan="4">暂无数据</td>
                       </tr>
           </table> -->
            <span slot="footer" class="dialog-footer">
               <el-button type="primary" @click="closeDialog">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
	export default{
      	data(){
            return {
                LANG,
                hidden:false,
                bossurl:'../../static/img/poker/6.png',
                spoker:'',
                tpoker:'',
                pfpoker:'',
                pspoker:'',
                ptpoker:'',
                bankernumber:0,
                playernumber:0,
            }
        },
        props:{
           //弹窗是否显示
            dialogVisible:{
                type:Object,
                default:{
                    state:false
                }
            },
            dataModel:{
                type:Object,
                default:{result: 0}
            }
        },
        computed:{
            fpoker: function(){
                let type = this.dataModel.game_name;
                let arr, parr;
                if(type === "百家乐")
                {
                    arr = this.dataModel.result.split(';')
                    this.pfpoker = '../../static/img/poker/'+ arr[0] +'.png';
                    this.pspoker = '../../static/img/poker/'+ arr[1] +'.png';
                    if(parr[2])
                    this.pfpoker = '../../static/img/poker/'+ arr[1] +'.png';
                    this.spoker = '../../static/img/poker/'+ arr[1] +'.png';
                    this.tpoker = '../../static/img/poker/'+ arr[2] +'.png';
                    return '../../static/img/poker/'+ arr[0] +'.png'
                }
            },
            banker: function()
            {
              if(this.dataModel.game_name == "百家乐" || this.dataModel.game_name == "极速百家乐" )
              {
                 let arr = this.dataModel.result.split(';');
               
                this.bankernumber = arr[0]
              
                return arr;
              }
              

            },
            player: function(){
               if(this.dataModel.game_name == "百家乐" || this.dataModel.game_name == "极速百家乐")
               {
                let arr = this.dataModel.result.split(';');
               
                this.playernumber = arr[1]
                
                return arr;
               }
              
            },
            isBaccarat:function(){
              if(this.dataModel.game_name == "百家乐" || this.dataModel.game_name == "极速百家乐")
              {
                return true
              }else{
                return false
              }
            },
            isTiger: function()
              { if(this.dataModel.game_name == "龙虎")
                {
                  return true
                }else{
                  return false
                }
            },
            isDice: function(){
                if(this.dataModel.game_name == "骰宝")
                {
                  return true
                }else{
                  return false
                }
            },
            dragon:function()
            {
              if(this.dataModel.game_name == "龙虎")
                {
                  let str = this.dataModel.result.poker.dragon;
                  return Number(str.charAt(str.length-1));
                }
            },
            tiger:function()
            {
              if(this.dataModel.game_name == "龙虎")
                {
                  let str = this.dataModel.result.poker.tiger;
                  return Number(str.charAt(str.length-1));
                }
            },
        },
        components:{},

        watch:{
           
        },
        methods:{
            init(){
                if(this.dialogVisible.state)
                {
                    this.hidden = true
                   
                }
               
              
            },
            closeDialog(){
               this.hidden = false;
               this.dialogVisible.state= false;
            },
        },
        mounted(){},
        created(){
           this.init();
        },
       
    }
</script>
<style scoped>
  .leftcontent{
    margin-left: 70px;
  }
  .rightcontent{
      float: right;
      margin-right: 130px;

  }
  .details{
    margin-left: 20px;
  }
  .rcolor{
    color: red;
  }
  .bcolor{
    color: blue;
  }
  .poker{
    width: 200px;
    margin-right: 20px;
  }
  .dice{
    display: inline-block;
    margin-left: 80px;
    margin-top: 20px;
  }
  .dragon{
      display: inline-block;
   
      margin-top: 20px;
  }
</style>