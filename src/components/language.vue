<template>
    <div id="language">
        <el-radio-group v-model="radio" @change="changeLanguage">
            <el-radio class="radio" :label="lag.key" v-for="(lag,index) in dataList" :key="index">
                <img :src="lag.img" alt="图片出去玩了" width="auto" height="100%"
                     style="vertical-align:middle;margin-bottom: 2px;">
                {{LANG[lag.text] || lag.text}}
            </el-radio>
        </el-radio-group>
    </div>
</template>
<script>
    export default {
        name: "language",
        data() {
            return {
                LANG,
                lang: '语言',
                dataList: [
                    {"text": "简体中文", "key": "zh-CN", "img": "/static/img/languge/CN.png"},
                    {"text": "繁體中文", "key": "zh-HK", "img": "/static/img/languge/HK.png"},
                    {"text": "English", "key": "en-US", "img": "/static/img/languge/US.png"},
//                    {"text": "ภาษาไทย","key":"th-TH","img":"/static/img/languge/Thailand.jpg"},
                    // {"text": "保加利亚","key": "bg"},
                    // {"text": "波兰","key":"pl"}
                    // {"text": "丹麦","key":"da"},
                    // {"text": "德国","key": "de"},
                    // {"text": "菲律宾","key":"en-ph"},
                    // {"text": "高棉语","key":"other"},
                    // {"text": "荷兰","key": "af"},
                    // {"text": "捷克","key":"cs"},
                    // {"text": "罗马尼亚","key":"ro"},
                    // {"text": "马来西亚","key": "en-my"},
                    // {"text": "缅甸","key":"miandian"},
                    // {"text": "挪威","key":"no"},
                    // {"text": "葡萄牙","key": "pt"},
                    // {"text": "日本","key":"ja-jp"},
                    // {"text": "瑞典","key":"sv-se"},
                    // {"text": "斯洛伐克","key":"sk"},
                    // {"text": "西班牙","key": "es"},
                    // {"text": "希腊","key":"el-gr"},
                    // {"text": "匈牙利","key":"hu-hu"},
                    // {"text": "意大利","key": "it"},
                    // {"text": "印尼","key":"id"},
                    // {"text": "越南","key":"vi"}
                ],
                radio: 'zh-CN'
            }
        },
        props: {
            model: Array
        },
        components: {},
        methods: {
            //切换语言
            changeLanguage(command) {
                sessionStorage.langkey = command;
                if (URLCONFIG && URLCONFIG.headers && LANGHEAD[command]) {
                    URLCONFIG.headers['Accept-Language'] = LANGHEAD[command];
                }
                switch (command) {
                    case "zh-CN":
                        sessionStorage.lang = localStorage.cn;
                        this.addLangGetSet();
                        break;
                    case "zh-HK":
                        sessionStorage.lang = localStorage.hk;
                        this.addLangGetSet();
                        break;
                    case "en-US":
                        sessionStorage.lang = localStorage.en;
                        this.addLangGetSet();
                        break;
                    case "th-TH":
                        sessionStorage.lang = localStorage.th;
                        this.addLangGetSet();
                        break;
                }
//                document.location.reload();
            },
            //添加语言GET\SET 方法
            addLangGetSet() {
                let model = JSON.parse(sessionStorage.lang);
                if (model) {
                    for (let i in model) {
                        global.LANG[i] = model[i];
                    }
                    ;
                }
            },
            handleError() {

            }
        },
        mounted() {
            this.radio = sessionStorage.langkey || URL.lang || 'zh-CN';
        },
        created() {
            if(URL.lang && !sessionStorage.lang) {
                let temp = URL.lang.split('-'), str = '';
                if (temp.length == 2) {
                    str = temp[0] + '-' + temp[1].toUpperCase();
                }
                this.changeLanguage(str || 'zh-CN');
            } else {
                this.changeLanguage(sessionStorage.langkey || 'zh-CN');
            }
        }
    }
</script>
<style lang="less">


    #language {
        text-align: left;
        .icon-iconfontdiqiu {
            vertical-align: middle;
        }
        .el-radio + .el-radio {
            margin-left: 0;
        }
        .radio{width:100%;margin-top: 4px;}
    }
</style>