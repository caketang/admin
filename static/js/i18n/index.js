// import md5 from 'js-md5'
import cn from './zh-cn.json'
import hk from './zh-hk.json'
import en from './en-us.json'
import th from './th.json'
// localStorage.clear();
localStorage.cn = JSON.stringify(cn);
localStorage.hk = JSON.stringify(hk);
localStorage.en = JSON.stringify(en);
localStorage.th = JSON.stringify(th);
getstoragelang();
function getstoragelang() {
    var langkey = URL.lang || 'zh-CN';
    switch (langkey){
        case "zh-CN":
            localStorage.lang = localStorage.cn;
            break;
        case "zh-HK":
            localStorage.lang = localStorage.hk;
            break;
        case "en-US":
            localStorage.lang = localStorage.en;
            break;
        case "th-TH":
            localStorage.lang = localStorage.th;
            break;
    }
}
// //去掉字符空格
// function Trim(str){
//     if (str) {
//         return str.replace(/(^\s*)|(\s*$)/g, "")
//     }
// }
// function strToJson(str){
//     if(/^\{/.test(str)){
//         return JSON.parse(str)
//     }else{
//         return str;
//     }
//
// }
/**
 * Fetch string.
 * @param string str Raw string
 * @returns string
 * @public
 */
// export default function replaceString(str) {
//     if (str) {
//         str=Trim(str)
//         let lang=strToJson(localStorage.lang)
//         let key=-1
//         if(localStorage.cn.length >0){
//             key=localStorage.cn.indexOf(str)
//         }
//         if(key != -1){
//             return lang[str] !=undefined ?lang[str]:str
//         }else{
//             return str;
//         }
//     }
//     // return str
// }



