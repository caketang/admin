<template>
    <div>
        <el-button v-for="(item,key) in quickDate" :key="item.id" :type="item.id == nowId?'primary':''" @click="change(item)" size="small">{{item.name}}</el-button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                //玩法选中状态
                playType:[],
                //快捷玩法数据
                quickDate:[],
                nowId: ""
//                    {key:"normal",text: '彩票标准玩法',category:"lottery"},
//                    {key:"fast",text: '彩票快速玩法',category:"lottery"},
//                    {key:"hgty",text: '皇冠体育',category:"sport"},
//                    {key:"sbty",text: '沙巴体育',category:"sport"},
//                    {key:"mgsx",text: 'MG视讯',category:"live"},
//                    {key:'lebosx',text:'LEBO视讯',category:"live"},
//                    {key:"mgdz",text: 'MG电子',category:"game"},
//                    {key:"ctsx",text: 'CT视讯',category:"live"},
//                    {key:"bbinsx",text: 'BBIN视讯',category:"live"},
//                    {key:"bbindz",text: 'BBIN电子',category:"game"},
//                    {key:"agsx",text: 'AG视讯',category:"live"},
//                    {key:"agdz",text: 'AG电子',category:"game"},
//                    {key:'agby',text:'AG捕鱼',category:"fishing"},
//                    {key:"ogsx",text: 'OG视讯',category:"live"},
//                    {key:"bgsx",text: 'BG视讯',category:"live"},
//
//                ]
            }
        },
        methods:{
            init(){
                let playType = this.playType;
                let quickDate = this.quickDate = [];
                let _this = this;

				this.$.autoAjax('get',URL.api + ROUTES.GET.games.all, '', {
					ok: (res) => {
						if(res.state === 0 && res.data){
							let model = res.data || [];
							_this.nowId = model[0].id;
							for(let k in model){
								quickDate.push(model[k]);
							}
							this.$emit("get-play-type", {
								"item": model[0]
							});
						}
					},
					p: () => {
					},
					error: e => {
						console.log(e)
					}
				})
                // this.$http.get(URL.api + ROUTES.GET.games.all,URLCONFIG).then((res)=>{
                //     if(res.data.state === 0 && res.data.data){
                //        let model = res.data.data || [];
                //         _this.nowId = model[0].id;
                //        for(let k in model){
                //            quickDate.push(model[k]);
                //        }
                //         this.$emit("get-play-type", {
                //             "item": model[0]
                //         });
                //     }
                // });
            },
            //选回选择数据
            change(obj){
                this.nowId = obj.id;
                this.$emit("get-play-type", {
                    "item": obj
                });
            }
        },
        created(){
            this.init()
        }
    }
</script>
