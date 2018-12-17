<template>
    <div id="addActiveSet">
        <div><el-button type="primary" v-text="LANG['取消创建活动'] || '取消创建活动'"  @click="docancel"  v-if="windowsOpen == '0'" class="ml20"></el-button></div>
        <el-row :gutter="20">
            <div>
                <!--模板选择界面-->
                <el-col :span="24" >
                    <el-col class="mt20 activeCent" v-for="item in addModeList" :key="item.id">
                        <el-card :body-style="{ padding: '0px' }">
                            <div class="cardHeader">
                                <div class="w30 fl mt20" style="margin-left:10%;"><img :src=item.imgUrl alt="优惠活动图片" title="点击下方按钮可创建新活动"></div>
                                <div class="w60 fl mt20">
                                    <h3>{{item.label}}</h3>
                                    <p>{{item.details}}</p>
                                </div>
                            </div>
                            <div style="padding: 14px;" class="cl">
                                <div class="bottom clearfix tCent">
                                    <el-button :plain="true" type="primary" size="small" @click="doClick(item)" ><i> + </i><span v-text="LANG['创建活动'] || '创建活动'"></span>
                                    </el-button>
                                </div>
                            </div>
                        </el-card>
                        <div v-if="item.id=='1'||item.id=='2'||item.id=='3'||item.id=='4'||item.id=='6'||item.id=='5'||item.id=='7'||item.id=='8'" class="mask">
                            敬请期待
                        </div>
                    </el-col>
                </el-col>
                <!--每日签到-->
                <!--<activeMode v-if="windowsOpen > 0" :openPage="windowsOpen" @go-back="doBack" ></activeMode>-->
            </div>
        </el-row>
    </div>
</template>
<script>
//    import activeMode from './activeMode.vue';
    export default{
        data(){
            return {
                LANG,
                windowsOpen:'0',
                addModeList: [],
                imgList:[
                    {label: '每日签到', imgUrl:'static/img/activity/active_11.png',"id":"1"},
                    {label: '验证邮箱', imgUrl:'static/img/activity/active_22.png',"id":"2"},
                    {label: '手机验证', imgUrl:'static/img/activity/active_33.png',"id":"3"},
                    {label: '每日抽奖', imgUrl:'static/img/activity/active_44.png',"id":"4"},
                    {label: '救援金', imgUrl:'static/img/activity/active_55.png',"id":"5"},
                    {label: '擂台赛', imgUrl:'static/img/activity/active_66.png',"id":"6"},
                    {label: '奖上奖', imgUrl:'static/img/activity/active_77.png',"id":"7"},
                    {label: '连续闯关', imgUrl:'static/img/activity/active_88.png',"id":"8"},
                    {label: '存款优惠', imgUrl:'static/img/activity/active_99.png',"id":"9"},
                    {label: '注册优惠', imgUrl:'static/img/activity/active_00.png',"id":"0"},
                ],
            }
        },
        components: {
//            activeMode:activeMode,
        },
        methods: {
            init(){
//                this.windowsOpen = '0';
                let listUrl = URL.api+ROUTES.GET.template.tempList;

                this.$.autoAjax('get',listUrl, '', {
                    ok: (res) => {
                        let model = res.data;
                        for (let i in model){
                            this.addModeList.push({
                                "id": model[i].id,
                                "label": model[i].name,
                                "details":model[i].description,
//                            'imgUrl':this.imgList[i].imgUrl,
                                'imgUrl':'static/img/activity/active_' + model[i].id + model[i].id +'.png',
                                "fn":'tempBtn' + model[i].id,
                            });
                        }
                    },
                    p: () => {
                    },
                    error: e => {
                        console.log(e)
                    }
                })
//                 this.$http.get(listUrl,URLCONFIG).then((res) => {
//                     let model = res.data.data;
//                     for (let i in model){
//                         this.addModeList.push({
//                             "id": model[i].id,
//                             "label": model[i].name,
//                             "details":model[i].description,
// //                            'imgUrl':this.imgList[i].imgUrl,
//                             'imgUrl':'static/img/activity/active_' + model[i].id + model[i].id +'.png',
//                             "fn":'tempBtn' + model[i].id,
//                         });
//                     }
//                 });
            },
            tempBtn(i,item){
                this.$router.push({path:`activeMode_${i}`,query:{label:item,template_id:i,type:"add"}});
            },
            doClick(item){
                this.tempBtn(item.id,item.label);
            },
            //返回上一层
            docancel(){
                this.$router.push({path: '/activeSet'});
            },
            doBack(data){
                this.windowsOpen = data;
            }

        },
//        components: {
//            activeMode:activeMode
//        },
        computed: {
        },
        mounted(){

        },
        created(){
            this.init();
        }
    }
</script>
<style scoped>
    #addActiveSet  .activeCent{
        max-width:320px;
    }
    #addActiveSet .cardHeader {
        height: 120px;
        background: #F9FAFC;
        border-bottom:1px solid #E5E9F2;
    }

    #addActiveSet .cardHeader h3 {
        line-height: 40px;
    }

    #addActiveSet .cardHeader p {
        line-height: 40px;
    }
    #addActiveSet .activeCent {
        position: relative;
        padding: 0!important;
        margin-right: 10px;
    }
    #addActiveSet .mask {
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        position: absolute;
        left: 0;
        top:0;
        text-align: center;
        line-height: 160px;
        font-size: 40px;
        color:#fff;
    }
</style>
