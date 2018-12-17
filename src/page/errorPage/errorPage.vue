<template>
    <div id="errorPage" class="w100 tCent">
        <el-col :span="24" class="errorBox w100 tCent">
            <div class="errorBoxChild">
                <!--<img src="/static/img/error.png" alt="" height="auto" width="auto">-->
                <p style="font-size: 16px;">请求地址：<span>{{errorDada.url}}</span></p><br/>
                <p>提示:<br><span>{{errorDada.title}}</span></p>
            </div>
        </el-col>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                LANG,
                
                errorCode: [
                    {code: "200", title: "OK"},
                    {code: "400", title: "Bad Request"},
                    {code: "401", title: "Unauthorized 权限不足"},//权限不足
                    {code: "402", title: "Request Failed"},//
                    {code: "403", title: "Forbidden"},
                    {code: "404", title: "Not Found 页面丢失"},//页面丢失
                    {code: "405", title: "Method Not Allowed"},
                    {code: "406", title: "Not Acceptable"},
                    {code: "407", title: "Proxy Authentication Required"},
                    {code: "408", title: "Request Time-out"},
                    {code: "409", title: "Conflict"},
                    {code: "410", title: "Gone"},
                    {code: "411", title: "Length Required"},
                    {code: "412", title: "Precondition Failed"},
                    {code: "413", title: "Request Entity Too Large"},
                    {code: "414", title: "Request-URI Too Large"},
                    {code: "415", title: "Unsupported Media Type"},
                    {code: "416", title: "Requested range not satisfiable"},
                    {code: "417", title: "Expectation Failed"},
                    {code: "420", title: "Version Undefined"},
                    {code: "500", title: "Internal Server Error 服务器故障"},
                    {code: "501", title: "Not Implemented"},
                    {code: "502", title: "Bad Gateway"},
                    {code: "503", title: "Service Unavailable"},
                    {code: "504", title: "Gateway Time-out"},
                    {code: "505", title: "HTTP Version not supported"},
                    {code: "510", title: "Version Error"},
                    {code: "554", title: "Under Maintenance"},
                    {code: "555", title: "Service Offline"}
                ],
                errorDada: {
                    lable: null,
                    code: null
                },
            }
        },
        props: {},
        watch: {},
        computed: {},
        methods: {
            //初始化
//            404   401  403  500  400
            init(){
                if (this.$route.query) {
                    let query = this.$route.query;
                    this.errorDada.url = query.url || "";
                    for (let i in this.errorCode) {
                        if (query.code == this.errorCode[i].code) {
                            this.errorDada.title = this.errorCode[i].title;
                            this.errorDada.code = query.code;
                            return;
                        }
                    }
                };
                console.log(this.errorDada);
            },
        },
        mounted()
        {
            $(window).on("load resize", () => {
                $('.errorBox').css({height: $(window).height() - '90'});
            });
        },
        created: function () {
            this.init();
        },
    }
</script>
<style scoped>
    #errorPage .errorBox {
        background: #fff;
        min-height: 645px;
    }

    #errorPage .errorBox .errorBoxChild {
        width: 800px;
        height: 645px;
        background: url("/static/img/error.png");
        background-size: 100% 100%;
        margin: 0 auto;
    }

    #errorPage .errorBox .errorBoxChild p {
        font-size: 200%;
        font-weight: bold;
        font-family: 宋体;
        color: #99A9BF;
        position: relative;
        max-width: 460px;
        word-break: break-all;
        left: 340px;
        top: 360px;
        text-align: left;
    }
</style>
