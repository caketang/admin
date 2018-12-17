<template>
    <div id="memberManagementDetia">
        <el-row>
            <el-col :span="24">
                <el-button class="bankBtn pRight20" type="primary" icon="arrow-left" size="small" @click="returnPage">{{LANG['返 回'] || '返 回'}}
                </el-button>
            </el-col>
            <el-col :span="24" class="mt20">
                <div class="bg-purple-dark userTitle pleft">当前:<el-tag type="primary" color="#fff" class="font14 ml10 mr10">{{username}}</el-tag>{{LANG['用户资料'] || '用户资料'}}</div>
                <el-tabs v-model="activeName" type="border-card" @tab-click="tabClick" class="w100">
                    <el-tab-pane :label="LANG['基本资料'] || '基本资料'" name="basicInformation">
                        <basicInformation :id="nowId"></basicInformation>
                    </el-tab-pane>
                    <el-tab-pane :label="LANG['帐户余额'] || '帐户余额'" name="accountBalance">
                        <accountBalance :id="nowId" :username="username"></accountBalance>
                    </el-tab-pane>
                    <el-tab-pane :label="LANG['取款稽核信息'] || '取款稽核信息'" name="memberManagement">
                        <memberManagement :id="nowId"></memberManagement>
                    </el-tab-pane>
                    <el-tab-pane :label="LANG['银行信息'] || '银行信息'" name="bankDetail">
                        <bankDetail :id="nowId"></bankDetail>
                    </el-tab-pane>
                    <el-tab-pane :label="LANG['会员设置'] || '会员设置'" name="memberSet">
                        <memberSet :id="nowId"></memberSet>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>
<script>
	import sInformation from './statisticalInformation'
	import basicInformation from './basicInformation'
	import accountBalance from './accountBalance'
	import memberManagement from './withdrawInformation.vue'
	import bankDetail from './bankDetial.vue'
	import memberSet from './memberSet.vue'

	export default {
		data() {
			return {
				LANG,
				activeName: "basicInformation"
			}
		},
		props: {
			nowId: Number,
			username: String
		},
		components: {
			sInformation: sInformation,
			basicInformation: basicInformation,
			accountBalance: accountBalance,
			memberManagement: memberManagement,
			bankDetail: bankDetail,
			memberSet: memberSet
		},
		methods: {
			init() {
			},
			//返回会员管理页面
			returnPage() {
				this.$emit('return-page')
			},
			//标签点击事件
			tabClick() {

			}
		},
		computed: {},
		mounted() {
		},
		created() {
			this.init()
		}
	}
</script>
<style scoped>
    .bankBtn {
        color: #fff;
        width: 70px;
        height: 32px;
    }
    .userTitle{color:#fff;line-height:38px;box-shadow:2px 2px 4px 0 rgba(0,0,0,.12);z-index: 9;}
</style>
