<template>
    <div id="lotteryZKCmanual" class="lotteryZKCmanual w100">
        <el-card class="box-card tCent" v-for="item,k in 8" :key="k">
            <el-row>
                <el-col :span="24" class="container">
                    <h3>三分时时彩</h3>
                </el-col>
                <el-col :span="24" class="container">
                    期号：<span>1233232</span>
                </el-col>
                <el-col :span="24" class="container">
                    预设彩果：<el-tag type="success" class="font16">4,8,9</el-tag>
                </el-col>
                <el-col :span="24" class="container">
                    距离封盘时间：<el-tag type="warning" class="font16">{{ `${hr}:${min}:${sec}` }}</el-tag>
                </el-col>
                <el-col :span="24" class="container">
                    手动设置开奖号码：
                </el-col>
                <el-col :span="24" class="container">
                    <el-input type="number" class="w80" v-model="input" placeholder="请输入开奖号码" size="small"></el-input>
                </el-col>
                <el-col :span="24" class="container">
                    <el-button type="warning" @click="submit">确 认</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script>

	export default{
		data(){
			return{
				LANG,
				input:'',
                hr: 0, min: 0, sec: 0

			}
		},
		components: {

		},
		methods: {
			init(){
				this.countdown()
			},
			countdown(){
				const end = Date.parse(new Date('2018-12-10'))
				const now = Date.parse(new Date())
				const msec = end - now
				let hr = parseInt(msec / 1000 / 60 / 60 % 24)
				let min = parseInt(msec / 1000 / 60 % 60)
				let sec = parseInt(msec / 1000 % 60)
				this.hr = hr > 9 ? hr : '0' + hr
				this.min = min > 9 ? min : '0' + min
				this.sec = sec > 9 ? sec : '0' + sec
				const that = this
				setTimeout(function () {
					that.countdown()
				}, 1000)
            },
			submit(){},
		},
		created: function () {
			this.init()
		}
	}
</script>
<style scopend lang="less">
    #lotteryZKCmanual{
        .box-card{
            margin :10px;
            width: 400px;height:380px;
            display: inline-block;
            .container{
                line-height: 32px;
                margin-bottom: 15px;
            }
        }
    }
</style>
