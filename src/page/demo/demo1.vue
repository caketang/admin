<template><formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="formConfig" :type="type" :labelWidth="labelWidth" :isEdit="isEdit" @get-form="getForm" :formType="formType"></formEdit>
    <div id="demo1">
        <!--<el-button type="success" @click="saveText" >保存</el-button>-->
        <!--<markdownEdit :content="content" @change_text="changeText"></markdownEdit>-->
        <!--<transition v-for="(ball,index) in balls">-->
            <!--<div class="ball" >-->
                <!--<div class="inner inner-hook">11</div>-->
            <!--</div>-->
        <!--</transition>-->
        <!--<changeAll :checkOptions="checkOptions" :sReset="sReset" :checkedval="checkedval"></changeAll>-->
        <button @click="openForm">点我打开弹窗</button>
        <!--<formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="formConfig" :type="type"></formEdit>-->
        <formEdit :formTitel="formTitel" :formVisible="formVisible" :formConfig="formConfig" :type="type" :labelWidth="labelWidth" :isEdit="isEdit" @get-form="getForm" :formType="formType"></formEdit>

    </div>
</template>
<script>
//import markdownEdit from '../../components/markdownEdit.vue'
//import changeAll from '../../components/changeAll.vue'
import formEdit from '../../components/formEdit.vue'
import api from '../../api'
    export default {
        data(){
            return{
                //提供三种类型  search(搜索条件FROM) default(纵向弹窗FORM) twoCol(两栏弹窗布局)
                type:"default",
                formTitel:"",
                labelWidth:"90px",
                isEdit: {
                    state:false
                },
                formVisible:{
                    state:false
                },
                //当前FORM类型，新增add,修改edit
                formType:"",
                formConfig:[
                            {"prop":"name","value":"","type":"text","label":"用户名","rules":[{"require":true}]},
                            {"prop":"password","value":"","type":"password","label":"密码","rules":[{"require":true}]},
                            {"prop":"repeatPassword","value":"","label":"确认密码","type":"repeatPassword","rules":[{"require":true}]},
                            {"prop":"email","value":"","label":"email","type":"email","rules":[{"require":true}]},
                            {"prop":"number","value":"","label":"数字","type":"number","rules":[{"require":true}]},
                            {"prop":"category","value":"","label":"类型","type":"select",
                                "list":[{"label":"标签1","value":"标签1"},
                                        {"label":"标签2","value":"标签2"},
                                         {"label":"标签3","value":"标签3"}],
                                "rules":[{"require":true}]},
                            {"type":"dateGroup","label":"起始时间","prop":[{"prop":"dateStart","value":"","label":"开始时间"},{"prop":"dateEnd","value":"","label":"结束时间"}],"rules":[{"require":true}]},
                            {"prop":"phone","value":"","label":"手机","type":"phone","rules":[{"require":true}]},
                            {"prop":"checkgroup","value":[],"label":"多选","sReset":false,"checkAll":false,"allBtnShow":false,"type":"checkGroup","list":["活动1","活动2","活动3","活动4","活动5"],"rules":[{"require":true}]},
                            {"prop":"checkbox","value":"","type":"checkbox","label":"单选","valLabel":"记住密码","rules":[{"require":true}]},
                            {"prop":"cheshi","value":"","type":"radioGroup","label":"2选1","radioInput":true,
                                "list":[{"radio":"","radioLabel":"day","label":"选项1","input":1,"inputType":"day","label2":"%","min":1,"max":31},{"radio":"","radioLabel":"week","label":"选项2","input":"","inputType":"week","label2":"%"}],
                                "rules":[{"require":true}]},
                            {"prop":"cheshi","value":"","type":"radioGroup","label":"2选1","radioInput":false,
                                "list":[{"radio":"","radioLabel":"day","label":"选项1"},{"radio":"","radioLabel":"week","label":"选项2"}],
                                "rules":[{"require":true}]},
                            {"prop":"remarks","value":"","type":"textarea","label":"备注","rules":[{"require":true}]},
                            {"prop":"name","value":"","type":"markdown","label":"活动内容","rules":[{"require":true}]},
                            {"prop":"youhui","value":[],"action":"//jsonplaceholder.typicode.com/posts/",
                                //上传图片列表  list-type:[text/picture/picture-card]
                                "list":[{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                                    {name: 'food2.jpeg',  url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
                                "type":"upload","label":"优惠活动页","listType":"picture","rules":[{"require":true}]}],
                searchConfig:[{"type":"quickDate"},//快捷日期
                    {"prop":"name","value":"","type":"text","label":"用户名"},
                    {"prop":"email","value":"","label":"email","type":"email"},
                    {"prop":"number","value":"","label":"数字","type":"number"},
                    {"prop":"category","value":"","label":"类型","type":"select",
                        "list":[{"label":"标签1","value":"标签1"},
                            {"label":"标签2","value":"标签2"},
                            {"label":"标签3","value":"标签3"}]},
                    {"prop":"category1","value":"","label":"类型","type":"select",
                        "list":[{"label":"标签1","value":"标签1"},
                            {"label":"标签2","value":"标签2"},
                            {"label":"标签3","value":"标签3"}]},
                    {"prop":"category2","value":"","label":"类型","type":"select",
                        "list":[{"label":"标签1","value":"标签1"},
                            {"label":"标签2","value":"标签2"},
                            {"label":"标签3","value":"标签3"}]},
                    {"prop":"category3","value":"","label":"类型","type":"select",
                        "list":[{"label":"标签1","value":"标签1"},
                            {"label":"标签2","value":"标签2"},
                            {"label":"标签3","value":"标签3"}]},
                    {"type":"numberGroup","label":"金额起始","prop":[{"prop":"money_from","value":null},{"prop":"money_to","value":null}],"rules":[{"min":1}]},
                    {"type":"dateGroup","label":"起始时间","prop":[{"prop":"dateStart","value":"","label":"开始时间"},{"prop":"dateEnd","value":"","label":"结束时间"}]}
                ]
            }
        },
        components:{
            formEdit:formEdit
//            markdownEdit:markdownEdit,s
//            changeAll:changeAll
        },
        methods:{
            //保存
//            saveText(){
//                console.log(this.content)
//            },
//            changeText(content){
//                this.content=content.val
//                console.log(content.val)
//            }
            openForm(){
                this.formTitel="新增数据"
                this.formVisible.state=true
            },
            //取FOMR值
            getForm(obj){
                console.log(obj.formObj);
            }
        },
        mounted(){
//            this.$http.get(api.getPlayListByWhere('全部', 'hot', 0, true, 6)).then((res) => {
//                console.log(res)
////                this.isloading = false
//                this.list=res.data.playlists
////                this.playList = res.data.playlists
//            }).catch((error) => {
//                console.log('加载歌单信息出错:' + error)
//            })
            //边接数组
//            let aa=[1,2,3,4,5]
//            this.list=[this.haha, ...aa,...aa]
            $(function(){
                (function(){

                })();
            });
        }
    }
</script>
<style >

</style>