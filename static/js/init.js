/**
 * Created by lxr on 2017/8/9.
 */
if(typeof(URL) == 'undefined'){
    var URL = {
        'api': '',
        'title': "",
        'img': '',
        'logo': '/static/img/logo.png',
        'quicknum':10
    }
}
function setTitle(){
    document.title = URL.title? URL.title : '厅主管理系统';
}
function setapi() {
    if(typeof(settings) !== 'undefined' && !settings.init){
        let str = settings.ssl ? 'https://' : "http://";
        URL.api = settings.domain ? (str + 'cpi.' + settings.domain) : URL.api;
        URL.img = settings.domain ? (str + 'rpi.' +  settings.domain) : URL.img;
        URL.rpi = settings.domain ? (str + 'rpi.' + settings.domain + '/api') : '';
        URL.title = settings.site && settings.site.title ? settings.site.title : URL.title;
        URL.lang = settings.site && settings.site.lang ? settings.site.lang : URL.lang;
        URL.logoImg = settings.logo && settings.logo.normal ? settings.logo.normal : URL.logoImg;
        URL.theme = settings.site && settings.site.theme ? ('/static/themeMode/' + settings.site.theme + '.css') : URL.theme;
        URL.favicon = settings.site && settings.site.favicon ? (URL.img + settings.site.favicon) : '/static/img/favicon.ico';
    }else if(typeof(settings) !== 'undefined' && settings.init && settings.site){
        let str = window.location.href.split(":")[0] + "://";
        let url = getHost().replace(/admin./, "");
        URL.api = str + 'cpi.'+ url;
        URL.rpi = str + 'rpi.'+ url + '/api';
        URL.img = str + 'rpi.'+ url;
        URL.title = settings.site && settings.site.title ? settings.site.title : URL.title;
        URL.lang = settings.site && settings.site.lang ? settings.site.lang : URL.lang;
        URL.favicon = settings.site && settings.site.favicon ? (URL.img + settings.site.favicon) : '/static/img/favicon.ico';
    }else if(URL.api === "" && typeof(settings) === 'undefined'){
        top.location.href="static/404.html";
    }
}
// 获取当前域名
function getHost(){
   return  window.location.host;
   //  return 'admin.lebodev.com'
}

setapi();
setTitle();
document.getElementById('webIco').href = URL.favicon || '/static/img/favicon.ico';
var  parameter = location.search?location.search.substring(1) : "";
//将url参数转为json对象 str = 'key=value&key=value&key=value'
let myhref = window.location.href.split('?')[1]?window.location.href.split('?')[1] : '';
function urlToJson(str){
    if(parameter === ""){
        return [];
    }
    str = '{"'+str+'"}';
    str = str.replace(/&/g, '","').replace(/=/g, '":"');
    return JSON.parse(str);
};
if(typeof(JUMPCONFIG) == 'undefined') {
    JUMPCONFIG = urlToJson(myhref);
}
window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
    var info = "错误信息：" + errorMessage + "</br>" +
        "出错文件：" + scriptURI + "</br> " +
        "出错行号：" + lineNumber + "</br>" +
        "出错列号：" + columnNumber + "</br>" +
        "错误详情：" + errorObj + "</br></br>";
    console.log(info);
}