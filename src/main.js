import babelpolyfill from 'babel-polyfill' //ES6编码处理
import Vue from 'vue';
import VueRouter from 'vue-router';
// import routes from './config/routes';
import routes from './config/routes_bak'
import axios from 'axios'
// import store from './components/js/store'//负责封装应用的业务逻辑跟数据的交互
// import Vuex from 'vuex'
// import $ from 'jquery';
// import Axios from './utils/diyaxios';
import $ from './utils/jq.js';
import language from './components/language.vue';
// import VueAxios from 'vue-axios';//请求
//引入本地图标
import '../assets/font/iconfont.css'
import ElementUI from 'element-ui' ;
import 'element-ui/lib/theme-default/index.css';
// import './assets/css/animate.css';//动画样式文件
import NProgress from 'nprogress';//页面顶部进度条
import 'nprogress/nprogress.css';
import '../static/css/app.css';//公用样式文件
import App from './page/App';
import replaceString from '../static/js/i18n/index.js'
import './assets/js/jquery.cookie';
import echarts from 'echarts';
import addSearch from './tools/addSearch'
import tools from './tools/tools';
import markdownTransform from './utils/markdownTransform'

// 富文本编辑器
import '../static/ueditor/ueditor.config'
import '../static/ueditor/ueditor.all'
import '../static/ueditor/lang/zh-cn/zh-cn'

//引入自定义主题
// import '../theme/index.css'
Vue.prototype.$ = $;

global.$ = $;
import { Loading } from 'element-ui';
global.EVENT = new Vue();
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.prototype._=replaceString;
// Vue.prototype.$http = Axios;
Vue.prototype.addSearch = addSearch;
Vue.prototype.markdownTransform = markdownTransform;
// Vue.config.debug = true;//开启错误提示
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
router.beforeEach((to, from, next) => {
    NProgress.start();
    if (to.path === '/' && from.path==='/') {
        next({path:"/login"});
    }else{
        next();
    }
})

router.afterEach(transition => {
    NProgress.done();
});
global.Bus = new Vue();
global.VUE = new Vue({
    el: '',
    template: '<App></App>',
    router,
    components: { App},
}).$mount('#app')//替换#app
