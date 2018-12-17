<template>
    <div>
        <!--<templateSet :componentsList="modelList"></templateSet>-->
        <textEdit></textEdit>
    </div>
</template>
<script>
//import templateSet from '../../components/templateSet.vue'
import textEdit from '../../components/textEdit-2.vue'
console.log(textEdit)
    export default{
        data(){
            return{
                modelList:[
                    {"label":"1","text":`<div>1</div>`,"display":true,"px":"1"},
                    {"label":"2","text":`<div>2</div>`,"display":true,"px":"2"},
                    {"label":"3","text":`<div>3</div>`,"display":true,"px":"3"},
                    {"label":"4","text":`<div>4</div>`,"display":true,"px":"4"}]
            }
        },
        components:{
//            templateSet:templateSet,
            textEdit:textEdit
        },
        methods:{
        },
        mounted(){
        }
    }
</script>
<style>

</style>
<!--<template>-->
    <!--<div>-->
        <!--&lt;!&ndash;<templateSet :componentsList="modelList"></templateSet>&ndash;&gt;-->
        <!--&lt;!&ndash;<textEdit></textEdit>&ndash;&gt;-->
        <!--<changeAll :checkOptions="cityOptions" :checkedval="checkedCities" @change-option="changeOption"></changeAll>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
<!--import templateSet from '../../components/templateSet.vue'-->
<!--import textEdit from '../../components/textEdit.vue'-->
<!--import  changeAll from '../../components/changeAll.vue'-->
    <!--export default{-->
        <!--data(){-->
            <!--return{-->
                <!--modelList:[-->
                    <!--{"label":"1","text":`<div>1</div>`,"display":true,"px":"1"},-->
                    <!--{"label":"2","text":`<div>2</div>`,"display":true,"px":"2"},-->
                    <!--{"label":"3","text":`<div>3</div>`,"display":true,"px":"3"},-->
                    <!--{"label":"4","text":`<div>4</div>`,"display":true,"px":"4"}],-->
                <!--cityOptions:["�Ϻ�","����","���","����","����"],-->
                <!--checkedCities:[],-->
                <!--sReset:{-->
                    <!--"state":false-->
                <!--}-->
            <!--}-->
        <!--},-->
        <!--components:{-->
            <!--templateSet:templateSet,-->
            <!--textEdit:textEdit,-->
            <!--changeAll:changeAll-->
        <!--},-->
        <!--methods:{-->
            <!--//ȫѡ����¼�-->
            <!--changeOption(v){-->
                <!--console.log(v.item)-->
            <!--}-->
        <!--},-->
        <!--mounted(){-->
        <!--}-->
    <!--}-->
<!--</script>-->
<!--<style>-->

<!--</style>-->
