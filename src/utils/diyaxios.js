// import axios from 'axios'
// import routers from './routers.js'
// import api from '../api/index';
// axios.defaults.timeout = 100000;
//
// // code状态码200判断
// // axios.interceptors.request.use((req)=>{
// //     global.RESInterface = req.url;
// //     if(/admin\/logout/g.test(req.url)){
// //         // req.headers['X-Request-Uri'] = '/';
// //     }else if(/admin\/login\/pt/g.test(req.url)){
// //         // req.headers['X-Request-Uri'] = '/';
// //     }else{
// //         // req.headers['X-Request-Uri'] = VUE.$route.path;
// //     }
// //     return req;
// // });
// axios.interceptors.response.use((res) => {
//     if(res && res.data && res.data.state != undefined){
//         if(res.data.state !== 0){
//             for(let k in STATEERROR){
//                 if(res.data.state === k){
//                     console.log("message:"+ res.data.state + "errorCodeMsg:" + STATEERROR[k]);
//                 }
//             }
//         }
//         return res;
//     }else if(res.status === 404){
//         return res;
//     }else if(res.status === 401){
//         console.log('909090')
//         global.VUE.$message.error(LANG['权限不足，请登录后重试'] || '权限不足，请登录后重试');
//         window.clearInterval(window.TIME1);    // indexEcharts.vue this.init定时器
//         window.clearInterval(window.msgTimer); // messageNotification.vue 请求出入款消息定时器
//         setTimeout(()=>{
//             global.VUE.$router.push('/login');
//         },800);
//         return res;
//     }else if(res.status === 403){
//         window.clearInterval(window.TIME1);    // indexEcharts.vue this.init定时器
//         window.clearInterval(window.msgTimer); // messageNotification.vue 请求出入款消息定时器
//         global.VUE.$message.error(LANG['非法登录，请登录后重试！'] || '非法登录，请登录后重试！');
//         setTimeout(()=>{
//             global.VUE.$router.push('/login');
//         },800);
//     }else if(res.status === 405){
//         global.VUE.$message.error(LANG['权限不足！'] || '权限不足！');
//         res.data = {
//             data: [],
//             state: 405
//         }
//         return res;
//     }else if(res.data.columns){
//         return res;
//     }
// }, (error) => {
//     if(error.message === "Network Error"){
//         if(/timezone/g.test(RESInterface) || /message\/num/g.test(RESInterface)){
//             // VUE.$message.error(LANG['消息网络错误，请稍候重试'] || '网络错误，请稍候重试');
//         } else {
//             VUE.$message.error(LANG['网络异常，请登录后重试'] || '网络异常，请登录后重试');
//             window.clearInterval(window.TIME1);    // indexEcharts.vue this.init定时器
//             window.clearInterval(window.msgTimer); // messageNotification.vue 请求出入款消息定时器
//             VUE.$router.push('/login');
//         }
//     }
//     let nowUrl = error.config && error.config.url || "";
//     let states = /code (\d*)/.exec(error.message) || [];
//     let status = states.length > 1?parseInt(states[1]): 0;
//     switch (status){
//         case 404:
//             global.VUE.$router.push({path: 'errorPage',query:{code:status,url:nowUrl}});
//             break;
//         case 401:
//             console.log('9090')
//             global.VUE.$message.error(LANG['权限不足，请登录后重试'] || '权限不足，请登录后重试');
//             window.clearInterval(window.TIME1);    // indexEcharts.vue this.init定时器
//             window.clearInterval(window.msgTimer); // messageNotification.vue 请求出入款消息定时器
//             setTimeout(()=>{
//                 global.VUE.$router.push('/login');
//             },800);
//             break;
//         case 403:
//             global.VUE.$router.push({path: 'errorPage',query:{code:status,url:nowUrl}});
//             break;
//         case 500:
//             global.VUE.$router.push({path: 'errorPage',query:{code:status,url:nowUrl}});
//             break;
//     }
// });
//
// global.URLCONFIG = {emulateJson: true, headers: {"Content-Type": "application/json"}};
// global.STATEERROR = {};
// global.ERROR = {
//     "200": "OK",
//     "400": "Bad Request",
//     "401": "Unauthorized",
//     "402": "Request Failed",
//     "403": "Forbidden",
//     "404": "Not Found",
//     "405": "Method Not Allowed",
//     "406": "Not Acceptable",
//     "407": "Proxy Authentication Required",
//     "408": "Request Time-out",
//     "409": "Conflict",
//     "410":   "Gone",
//     "411": "Length Required",
//     "412": "Precondition Failed",
//     "413": "Request Entity Too Large",
//     "414": "Request-URI Too Large",
//     "415": "Unsupported Media Type",
//     "416": "Requested range not satisfiable",
//     "417": "Expectation Failed",
//     "420": "Version Undefined",
//     "500": "Internal Server Error",
//     "501": "Not Implemented",
//     "502": "Bad Gateway",
//     "503": "Service Unavailable",
//     "504": "Gateway Time-out",
//     "505": "HTTP Version not supported",
//     "510": "Version Error",
//     "554": "Under Maintenance",
//     "555": "Service Offline"
// };
// export default axios
