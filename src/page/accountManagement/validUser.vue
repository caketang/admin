<template>
    <div id="validUser">
        <el-radio-group v-model="activeName" class="mb10" v-show="!showDetail">
            <el-radio label="agent">{{LANG['有效会员列表'] || '有效会员列表'}}</el-radio>
            <!--<el-radio label="member">{{LANG['会员查询'] || '会员查询'}}</el-radio>-->
            <!--<el-radio label="agentInformation">{{LANG['代理资料'] || '代理资料'}}</el-radio>-->
        </el-radio-group>
        <el-col v-if="activeName == 'agent' && !showDetail">
            <agent @show-detail="doShowDetail" @return-page="returnList" :stime="stime" :etime="etime"></agent>
        </el-col>
        <el-col v-if="activeName == 'member' && !showDetail">
            <member :activeName='activeName' ></member>
        </el-col>
        <el-col v-if="activeName == 'agentInformation' && !showDetail">
            <agentinformation></agentinformation>
        </el-col>
        <el-col v-if="showDetail">
            <validUserDetail :nowId="nowId" :agentName="agentName"  @return-page="returnList" :stime="stime" :etime="etime" :type="nowtype"></validUserDetail>
        </el-col>
    </div>
</template>
<script>
    import agent from './validUserAgent.vue'
    import member from './validUserMember.vue'
    import agentinformation from './validUserAgentInformation.vue'
    import validUserDetail from './validUserDetail.vue'
    export default {
        data() {
            return {
                LANG,
                activeName: "agent",
                showDetail: false,
                nowId: -1,
                agentName: '',
                stime: '',
                etime: '',
                nowtype: ''
            }
        },
        methods: {
            // 初始化
            init() {
                this.activeName = 'agent';
            },
            // showDetail
            doShowDetail(obj){
                this.showDetail = true;
                this.nowId = obj.id;
                this.agentName = obj.agentName;
                this.stime = obj.stime;
                this.etime = obj.etime;
                this.nowtype = obj.type;
            },
            //  返回初始页
            returnList(){
                this.showDetail = false;
            },
        },
        components: {
            agent : agent,
            member : member,
            agentinformation : agentinformation,
            validUserDetail: validUserDetail
        },
        computed: {},
        mounted() {
        },
        created() {
            this.init();
        },
        activated(){
            this.init();
            this.activeName = 'agent';
            this.showDetail = false;
        }
    }
</script>
<style scopend>

</style>
