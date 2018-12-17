 import Vue from 'vue'
import marked from 'marked';

/**
 * Created by lxr on 2017/4/5.
 * 处理FORM编辑写值问题
 */

// 静态资源
global.markdownTransform = function (data) {
    // 配置参数请参考 marked 的文档 https://github.com/chjj/marked
    return marked(data, {
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    })
}
global.SOURCE = [{}];
global.FORMVAL = function (row, obj) {
    if (obj && row) {
        for (let j in obj) {
            if (obj[j].isDefault) {
                continue;
            }
            if (typeof(obj[j].value) == "object" && obj[j].type != "select" && obj[j].type != "button" && obj[j].type !== 'dateGroup' && obj[j].type !== 'numberGroup') {

                obj[j].value = [];
            } else if (obj[j].type == 'dateGroup' || obj[j].type == 'numberGroup') {
                obj[j].prop[0].value = "";
                obj[j].prop[1].value = "";
            } else if (obj[j].type == "button") {
                // console.log(typeof(obj[j].value));
                // console.log(obj[j].value);
            } else if (obj[j].type == "select" && /status/g.test(obj[j].prop)) {
                // console.log(obj[j].prop);
            } else if (obj[j].value != undefined) {
                obj[j].value = "";
            }
        }
        for (let k in row) {
            for (let i in obj) {
                if (k == obj[i].prop || (typeof(obj[i].prop) === "object" && k == obj[i].prop[0].prop) || (typeof(obj[i].prop) === "object" && k == obj[i].prop[1].prop)) {
                    if (obj[i].type == "select") {
                        let arr = obj[i].list || [];
                        let strType = false;
                        if (arr && arr[0] && typeof(arr[0]['value']) == "boolean") {
                            strType = arr[0]['value'] ? true : false;
                        }
                        for (let j in arr) {
                            let b = "";
                            let a = arr[j]['value'] || "";
                            a = a.toString().toUpperCase();
                            if (strType) {
                                b = (row[k] ? true : false).toString().toUpperCase();
                            } else {
                                b = row[k] ? row[k].toString().toUpperCase() : "";
                            }
                            if (a === b) {
                                if (strType) {
                                    obj[i].value = arr[j].value ? true : false;
                                } else {
                                    obj[i].value = arr[j].value;
                                }
                                break;
                            }
                        }
                    } else if (obj[i].type == "dateGroup") {
                        if (obj[i].prop[0].prop == k) {
                            obj[i].prop[0].value = FORMATDAT(row[k], 'yyyy-MM-dd HH:mm:ss');
                        }
                        if (obj[i].prop[1].prop == k) {
                            obj[i].prop[1].value = FORMATDAT(row[k], 'yyyy-MM-dd HH:mm:ss');
                        }
                        break;
                    } else if (obj[i].type == "numberGroup") {
                        if (obj[i].prop[0].prop == k) {
                            obj[i].prop[0].value = FORMATMONEY(row[k]);
                        }
                        if (obj[i].prop[1].prop == k) {
                            obj[i].prop[1].value = FORMATMONEY(row[k]);
                        }
                        break;
                    } else if (obj[i].type == "checkGroup") {
                        let list2 = [];
                        let list1 = obj[i]['Arr'];
                        if (typeof(row[k]) == 'object') {
                            list2 = row[k];
                        } else {
                            list2 = (row[k] || '').split(",");
                        }
                        let list3 = obj[i].value = [];
                        for (let h in list1) {
                            for (let f in list2) {
                                let a = list1[h]['value'].toUpperCase();
                                let b = list2[f].toUpperCase();
                                if (a == b) {
                                    list3.push(list1[h]['value']);
                                    break;
                                }
                            }
                        }
                        break;
                    } else if (obj[i].type == "datePicker") {
                        if (!row[k]) {
                            obj[i].value = "1970-01-01 00:00:00";
                        } else {
                            let list = row[k].split(" ");
                            obj[i].value = FORMATDAT(list[0], 'yyyy-MM-dd HH:mm:ss');
                        }
                    } else if (obj[i].type == "upload") {
                        let str = obj[i].value = [];
                        let list = [];
                        if (typeof(row[k]) === "object") {
                            list = row[k];
                        }
                        if (typeof(row[k]) === "string") {
                            list = row[k].split(",");
                        }
                        for (let n in list) {
                            str.push(list[n]);
                        }
                        break;
                    } else {
                        obj[i].value = row[k];
                        break;
                    }
                }
            }
        }
    }
};
//本地存储通用方法
global.saveSession = function (key, obj) {
    if (typeof(obj) == "object") {
        sessionStorage[key] = JSON.stringify(obj);
    } else {
        sessionStorage[key] = obj;
    }
}
global.getSession = function (key, obj) {
    if (typeof(obj) == "object") {
        return JSON.parse(sessionStorage[key]);
    } else {
        return obj;
    }
}
global.FORMATMONEYTOFIXS2 = function (val) {
    let money = Number(val);
    if (isNaN(money)) {
        return 0;
    }
    return money === 0 ? 0.00 : money.toFixed(2);
}
global.FORMATINT = function (val) {
    let money = parseInt(val);
    if (isNaN(money)) {
        return 0;
    }
    return money;
}
/**
 * Created by lxr on 2017/4/5.
 * 处理FORM编辑写值问题
 */
global.ADDSEARCH = function (obj) {
    if (obj) {
        let str = "?"
        for (let i in obj) {
            if (obj[i]) {
                if (typeof(obj[i]) == obj && i == "Sdate") {
                    str += i + "=" + (Date.parse(obj[i])) / 1000 + "&";
                } else if (i == "date_from" || i == "date_to") {
                    str += i + "=" + (Date.parse(obj[i])) / 1000 + "&";
                } else {
                    str += i + "=" + obj[i] + "&";
                }
            }
        }
        return str.substring(0, str.length - 1)
    } else {
        return null
    }
};

// 取数字个位数
global.GETLASTNUM = function (num) {
    let money = Number(num);
    if (isNaN(money)) {
        return 0;
    }
    let str = money.toString();
    str = str.charAt(str.length - 1);
    return Number(str);
}

//格式化日期组件数据
global.FORMATDATEPICKER = function (v) {
    if (v) {
        if (v.toString().length == 10 && !isNaN(v)) {
            v = parseInt(v) * 1000;
        } else if (v.length == 13 && parseInt(v) > 0) {
            v = parseInt(v);
        }
        let t = new Date(v);
        if (isNaN(t.getTime())) {
            return ''
        } else {
            let tf = function (i) {
                return (i < 10 ? '0' : '') + i
            };
            return t.getFullYear() + "-" + tf(t.getMonth() + 1) + "-" + tf(t.getDate());
        }
    } else {
        return "";
    }
}
// 判断是否为日期格式
global.ISDATE = function (v) {
    if (v) {
        let d = new Date(v);
        if (d instanceof Date) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
// 计算当月起始时间
global.MONTHYDAYS = function () {
    let now = new Date();        //今天本周的第几天
    let nowDay = now.getDate();              //当前日
    let nowMonth = now.getMonth();           //当前月
    let nowYear = now.getYear();             //当前年
    nowYear += (nowYear < 2000) ? 1900 : 0;  //
    let obj = {};
    obj.from = getMonthStartDate(nowYear, nowMonth);
    obj.to = getMonthEndDate(nowYear, nowMonth);
    return obj;
}

//获得某月的天数
function getMonthDays(nowyear, myMonth) {
    var monthStartDate = new Date(nowyear, myMonth, 1);
    var monthEndDate = new Date(nowyear, myMonth + 1, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
}

//获得本月的开始日期
function getMonthStartDate(nowyear, myMonth) {
    var monthStartDate = new Date(nowyear, myMonth, 1);
    return FORMATDATEPICKER(monthStartDate);
}

//获得本月的结束日期
function getMonthEndDate(nowyear, myMonth) {
    var monthEndDate = new Date(nowyear, myMonth, getMonthDays(nowyear, myMonth));
    return FORMATDATEPICKER(monthEndDate);
}

// 计算当月起始时间结束
/*// 获取退佣期数列表 // 退佣期数已经有接口了
global.getNum=function () {
    let arr= ARRAYS.rebateNumber;
    let t= new Date();
    let tf = function(i){return (i < 10 ? '0' : '') + i};
    let nowyear = t.getFullYear();
    let nowMonth = t.getMonth() + 1;
    for (let i =parseInt(nowMonth);i>0;i--){
        arr.push({"label": nowyear+tf(i), "value": nowyear+tf(i)});
    }
    let len = arr.length;
    for(let i=12;i>len;i--){
        arr.push({"label": (parseInt(nowyear)-1)+tf(i), "value": (parseInt(nowyear)-1)+tf(i)});
    }
}*/
// 判断是否正常日期
 global.CHECKDATE = function (d) {
     return Object.prototype.toString.call(d) === "[object Date]" && isNaN(d.getTime())
 }
/*getNum();*/
//格式化日期
global.FORMATDAT = function (v, format) {
    if (!v) {
        return "";
    }

    if (v.toString().length == 10 && !isNaN(v)) {
        v = parseInt(v) * 1000;
    } else if (v.length == 13 && parseInt(v) > 0) {
        v = parseInt(v);
    }
    let t = new Date(v);
    if (CHECKDATE(t)) {
        return v
    }
    let tf = function (i) {
        return (i < 10 ? '0' : '') + i
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
};
// 取数组的最大值
global.GETARRAYMAX = function (arr) {
    return Math.max.apply(null, arr);
}
// 取得数组最小值
global.GETARRAYMIN = function (arr) {
    return Math.min.apply(null, arr);
}
global.FORMATNUMBER = function (num) {
    let money = Number(num);
    if (isNaN(money)) {
        return 0;
    } else {
        return money;
    }
}
global.STRINGTRIM = function (str) {
    if(typeof(str) === 'string'){
        return str.replace(/\s+/g,"");
    }
    return str;
}
global.FORMATMONEY = function (num, fixs = 2) {
    let money = Number(num);
    if (isNaN(money)) {
        money = 0;
    }
    return money === 0 ? 0 : parseFloat((money / 100)).toFixed(fixs);
}
global.FORMATMultiplyMoney = function (num) {
    let money = parseFloat(num);
    if (isNaN(money)) {
        money = 0;
    }
    return money === 0 ? 0 : (money * 100);
}
//表单数据过滤
Vue.filter("formatSex", function (v, arr) {
    if (arr.length > 0) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].value == v) {
                return arr[i].text
            }
        }
    }
});
// 相乘后金额过滤
Vue.filter('formatYingShou', function (value, keyOne, keyTwo) {
    let model = value || {}, num = 0;
    if (keyOne && keyTwo) {
        num = FORMATNUMBER(model[keyOne]) * FORMATNUMBER(model[keyTwo]) / 100;
    }
    return num.toFixed(2);
})
// 金额过滤，不是正整数的金额过滤为0
Vue.filter("formatMoney", function (ag, fixs = 2) {
    let money = Number(ag);
    if (!money) {
        money = 0;
    }
    return money === 0 ? 0 : (money / 100).toFixed(fixs);
})
// 金额过滤，不是正整数的金额过滤为0
Vue.filter("formatNumber", function (ag, fixs = 2) {
    let money = Number(ag);
    if (!money) {
        money = 0;
    }
    return money === 0 ? 0 : money.toFixed(fixs);
})
// 性别过滤
Vue.filter("filterGender", function (value) {
    return value == 1 ? '男' : (value == 2 ? '女' : '保密');
})
// 过滤图片地址
Vue.filter('getrpiurl', function (value) {
    return GETRPIURL(value);
})
// 会员来源过滤
Vue.filter("filterChnnel", function (value) {
    return value == "pc" ? '网站注册' : (value == "h5" ? 'H5' : (value == "app" ? 'APP' : '其他'));
})
// 代理来源过滤
Vue.filter("filterChnnelAgent", function (value) {
    switch (value) {
        case '1':
            return 'H5注册'
            break;
        case '2':
            return 'PC网站注册'
            break;
        case '3':
            return '后台创建'
            break;

    }

})
// 用户类型过滤
Vue.filter("filterUserType", function (value) {
    return value == 1 ? '层级代理' : '直属代理';
})
// 过滤金额
Vue.filter("filterMoneyIsNull", function (value) {
    return value !== null ? FORMATMONEY(value) : 0;
})
global.SETSTORAGE = (key, val) => {
    if (typeof(val) === 'object') {
        localStorage.setItem(key, JSON.stringify(val));
    } else {
        localStorage.setItem(key, val);
    }
}
global.GETSTORAGE = (key) => {
    if (/^\{(.*?)\}$/.test(localStorage.getItem(key))) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return localStorage.getItem(key);
    }
}
global.SETSESSIONSTORAGE = (key, val) => {
    if (typeof(val) === 'object') {
        sessionStorage.setItem(key, JSON.stringify(val));
    } else {
        sessionStorage.setItem(key, val);
    }
}
global.GETSESSIONSTORAGE = (key) => {
    if (/^\{(.*?)\}$/.test(sessionStorage.getItem(key))) {
        return JSON.parse(sessionStorage.getItem(key));
    } else {
        return sessionStorage.getItem(key);
    }
}
// 判断两个对象是否相等
global.EQUALOBJECT = function (objOne, objTwo) {
    for (let k in objOne) {
        if ((typeof objOne[k]) === 'object') {
            let tempObj = objOne[k];
            for (let i in tempObj) {
                if (tempObj[i] !== objTwo[k][i]) {
                    return false;
                }
            }
        } else {
            if (objOne[k] != objTwo[k]) {
                return false;
            }
        }
    }
    return true;
}
//和表格列配置
var colsConfig = {}

/**
 * 数组升降序排列函数
 * data 数据源 类型数组
 * key 排序字段 类型字符串
 * sortFlag 升降序标识 类型字符串
 * 升序  dataSort(arr, "total")
 * 降序  dataSort(arr, "total", "drop")
 */
global.DATASORT = function (data, key, sortFlag) {
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (parseInt(data[i][key]) > parseInt(data[j][key])) {
                [data[i], data[j]] = [data[j], data[i]];
            }
        }
        ;
    }
    ;
    return sortFlag === "drop" ? data : data.reverse();
}

/**
 * 动态json字符串拼接函数
 * colObj 拼接对象 colObj = {orignCol: oCol, connectCol: cCol, endCol: eCol};
 * let oCol = {
        "colums": [
            {
                "prop": "id",
                "label": "ID"
            }
        ]
    }
 let cCol = ["a", "b", "c", "d", "e"];
 let eCol = [
 {
     "label":"操作",
     "type":"button",
     "width":210,
     "btnGroup":[
         {"btnType":"text","label":"修改","fn":"doEdit"}
     ]
 }
 ]
 * width 配置列的宽度 可选 默认100
 */
global.GETRPIURL = function (str) {
    if (str) {
        return URL.img + str;
    } else {
        return ''
    }
}
global.CONNECTCOLUMS = function (col, width) {
    col.connectCol.forEach((item, index) => {
        let data = {"sortable": true, "width": width ? width : 100, "disabled": true};
        for (let key in item) {
            data[key] = item[key]
        }
        col.orignCol.push(data)
    });
    if (col.endCol) {
        for (let j of col.endCol) {
            col.orignCol.push(j)
        }
    }
    return col.orignCol;
}


// 表格过滤
global.tableFilter = {
    formatSex: function (v, arr) {
        if (arr.length > 0) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].value == v) {
                    return arr[i].text
                }
            }
        }
    },
    formatJson: function (v) {
        let jsonval = "";
        if (v) {
            let model = v;
            for (let k in model) {
                if (model[k]) {
                    jsonval = jsonval + model[k].toString() + " ";
                }
            }
        }
        return jsonval;
    },
    formatConnectProp: function (v, prop) {
        let jsonval = "";
        let list = prop.split(",");
        if (v && list.length && list.length == 2) {
            return FORMATMONEY(v[list[0]][list[1]]);
        } else {
            return 0;
        }
    },
    formatConnectPropMoney: function (v, prop) {
        let jsonval = "";
        let list = prop.split(",");
        if (v && list.length && list.length == 2) {
            return v[list[0]][list[1]];
        } else {
            return '';
        }
    },
    formatLinkNumberButton: function (v, props, btnLinkGroup, index) {
        let item = v || {};
        let list = null;
        if (typeof(item[props]) === 'string') {
            list = props.split(',');
            for (let k = 0; k < list.length; k++) {
                btnLinkGroup[k] = {
                    key: list[k],
                    value: FORMATMONEY(item[list[k]], 2),
                };
            }
        }
        if (typeof(item[props]) === 'object') {
            list = item[props];
            let obj = {};
            for (let m in list) {
                obj[m] = {
                    key: m,
                    value: FORMATMONEY(list[m], 2),
                };
            }
            btnLinkGroup[index] = obj;
        }
        return '';
    },
    formatContentFilter: function (v, key, filters, delimiter) {
        let item = v || {}, str = '';
        let temp = (item[key] || '').split(',');
        if (temp.length > 0 && filters && filters.length) {
            for (let k = 0; k < temp.length; k++) {
                for (let i = 0; i < filters.length; i++) {
                    if (filters[i].value === temp[k]) {
                        str = str + filters[i].text + (delimiter || '');
                    }
                }
            }
        }
        return delimiter ? str.substring(0, str.length - 1) : str;
    },
    formatContentFilterLinkTwo: function (v, type, prop) {
        let item = v || {};
        let obj = item[prop] || {};
        let str = '';
        let sum = 0;
        if (!type) {
            return '';
        }
        switch (type) {
            case "百家乐":
                let arrOne, arrTwo, sumz = 0, sumx = 0;
                if (obj.poker && obj.poker.banker) {
                    arrOne = obj.poker.banker.split("-");
                    if (arrOne.length > 0) {
                        arrOne.forEach((v) => {
                            sumz = sumz + FORMATNUMBER(v);
                        })
                    }
                    str = str + "庄[" + GETLASTNUM(sumz) + "]";
                }
                if (obj.poker && obj.poker.player) {
                    arrTwo = obj.poker.player.split("-");
                    if (arrTwo.length > 0) {
                        arrTwo.forEach((v) => {
                            sumx = sumx + FORMATNUMBER(v);
                        })
                    }
                    str = str + "闲[" + GETLASTNUM(sumx) + "]";
                }
                return str;
                break;
            case "龙虎":
                if (obj.poker && obj.poker.dragon) {
                    str = str + "龙[" + GETLASTNUM(obj.poker.dragon) + "]";
                }
                if (obj.poker && obj.poker.tiger) {
                    str = str + "虎[" + GETLASTNUM(obj.poker.tiger) + "]";
                }
                return str;
                break;
            case "轮盘":
                return obj.result || '';
                break;
            case "骰宝":
                return obj.result || '';
                break;
            default:
                return 'haha';
                break;
        }
    },
    formatContentFilterLink: function (v, type, prop) {
        let item = v || {};
        let obj = item[prop] || {};
        let str = '';
        type = type.trim();
        let sum = 0;
        if (!type) {
            return '';
        }
        switch (type) {
            case "百家乐":
            case "极速百家乐":
            case "机器人百家乐":
                let arrOne;
                if (obj) {
                    arrOne = obj.split(";");
                    str = str + "庄[" + arrOne[0] + "]";
                    str = str + "闲[" + arrOne[1] + "]";
                }
                return str;
                break;
            case "龙虎":
            case "龙虎百家乐":
                let arrTwo;
                if (obj) {
                    arrTwo = obj.split(";");
                    str = str + "龙[" + arrTwo[0] + "]";
                    str = str + "虎[" + arrTwo[1] + "]";
                }
                return str;
                break;
            case "轮盘":
                return obj || '';
                break;
            case "骰宝":
                return obj || '';
                break;
            default:
                return '未知的类型';
                break;

        }
    },
    formatConnectAdd: function (v, props) {
        let item = v || {};
        let str = props.toString() || "";
        let list = str.split(",");
        let sum = 0;
        for (let k in list) {
            let num = isNaN(parseInt(item[list[k]])) ? 0 : parseInt(item[list[k]]);
            sum = sum + num;
        }
        return (sum / 100).toFixed(2);
    },
    formatArray: function (v, separators) {
        let separte = separators || " ";
        let arr = v || [];
        let jsonval = "";
        if (arr.length > 0) {
            jsonval = arr.join(separte);
        }
        return jsonval;
    },
    formatConnectLottery: function (v, props, lotteryType) {
        let str = props || "";
        let list = str.split(",");
        let conval = "";
        if (list.length > 0 && lotteryType) {
            conval = (v[list[0]] || "") + "-" + (v[list[1]] || "");
        } else {
            conval = v[list[1]] || "";
        }
        return conval;
    },
    formatJsonArr: function (v, arr) {
        let str = v || "";
        let list = str.split(",");
        let jsonval = "";
        if (v && arr) {
            for (let k in arr) {
                for (let j in list) {
                    if (arr[k]['val'] == list[j]) {
                        jsonval = jsonval + arr[k]['lab'] + " ";
                    }
                }
            }
        }
        return jsonval;
    },
    formatSubtract: function (v, props) {
        let item = v || {};
        let propList = props.split(",");
        let result = 0;
        if (propList.length > 0) {
            result = item[propList[0]];
            for (let k = 1; k <= propList.length; k++) {
                let num = isNaN(parseInt(item[propList[k]])) ? 0 : parseInt(item[propList[k]]);
                result = result - num;
            }
        }
        return (result / 100).toFixed(2);
    },
    formatConnect: function (v, arr, delimiter, types, dateType) {
        let item = v || {};
        let str = arr || "";
        let contVal = "";
        let list = str.split(",");

        for (let k in list) {
            let num = 0;
            if (list[k] && item[list[k]] != "null" && item[list[k]] != undefined) {
                if (/divisionMoney/.test(types)) { ///divisionMoney/.test(type)
                    num = FORMATMONEY(item[list[k]]);
                } else {
                    num = item[list[k]];
                }
                if (delimiter) {
                    contVal = contVal + num + " " + delimiter + " ";
                } else {
                    contVal = contVal + num;
                }
            }
        }
        contVal = contVal.toString();
        if (delimiter) {
            return contVal.substring(0, contVal.length - 3);
        } else {
            return contVal;
        }
    },
    formatConnectArray: function(v, prop) {
        let item = v || {};
        let contVal = '';
        let list = item[prop];
        if(list.length && list.length > 0){
            list.forEach((val)=>{
                contVal = contVal + val.name + ',';
            })
            return contVal.substring(0, contVal.length - 1) ;
        }
        return contVal;
    },
    formatConnectTwo: function (v, arr, delimiter, types) {
        let item = v || {};
        let str = arr || "";
        let contVal = "";
        let list = str.split(",");
        if (list.length === 2) {
            if (delimiter) {
                contVal = (item[list[0]] || '') + " " + delimiter + " " + FORMATMONEY(item[list[1]]);
                return contVal;
            } else {
                contVal = (item[list[0]] || '') + " " + FORMATMONEY(item[list[1]]);
                return contVal;
            }
        } else {
            return "";
        }
    },
    formatMoneyDelimiter: function (v, delimiter) {
        let st = v || "";
        let list = [];
        let str = "";
        if (delimiter) {
            list = st.split(delimiter);
        } else {
            list = st.split(",");
        }
        if (list.length) {
            for (let k in list) {
                if (delimiter) {
                    str = str + FORMATMONEY(list[k]) + " " + delimiter + " ";
                } else {
                    str = str + list[k];
                }
            }
        }
        return delimiter ? str.substring(0, str.length - 3) : str;
    },
    formatCheck: function (v) {
        if (parseInt(v) === 1) {
            return true;
        } else {
            return false;
        }
    },
    formatContentDate: function (v, props, delimiter) {
        let val = v || '';
        let str = props || '';
        let list = str.split(",");
        let strObj = "";
        for (let k in list) {
            if (val[list[k]]) {
                strObj = strObj + (delimiter ? (' ' + delimiter + ' ') : ' ') + val[list[k]];
            }
        }
        return delimiter ? strObj.substring(0, strObj.length - 3) : strObj;
    },
    formatObject: function (v, prop) {
        let props = prop || "";
        let list = props.split(",");
        if (list.length && list.length == 2) {
            return v[list[0]][list[1]];
        } else {
            return v[prop];
        }
    },
    // 过滤联合状态
    formatAllState: function (v, prop, key, truelabel, falselabel) {
        if (v[prop]) {
            let patt = new RegExp(key);
            if (patt.test(v[prop])) {
                return truelabel || '';
            } else {
                return falselabel || '';
            }
        }
    },
    //  香港六合彩开奖结果
    formatLotteryCustom: function (v, url) {
        if (v && /lottery_id=38/.test(url)) {
            let list = v.split(","), temp = '', num = 0;
            if (list.length > 0) {
                for (let i = 0; i < list.length; i++) {
                    num++;
                    if (num === list.length) {
                        temp = temp + ' +' + list[i];
                    } else {
                        temp = temp + list[i] + ',';
                    }

                }
            }
            return temp;
        } else {
            return v;
        }
    },
    formatDate: function (v, format) {
        if (!v || v === '0' || v === '0000-00-00 00:00:00') {
            return "";
        }
        if (v.toString().length == 10 && !isNaN(v)) {
            v = parseInt(v) * 1000;
        }
        let t = new Date(v);
        let tf = function (i) {
            return (i < 10 ? '0' : '') + i
        };
        return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
            switch (a) {
                case 'yyyy':
                    return tf(t.getFullYear());
                    break;
                case 'MM':
                    return tf(t.getMonth() + 1);
                    break;
                case 'mm':
                    return tf(t.getMinutes());
                    break;
                case 'dd':
                    return tf(t.getDate());
                    break;
                case 'HH':
                    return tf(t.getHours());
                    break;
                case 'ss':
                    return tf(t.getSeconds());
                    break;
            }
        })
    },
    formatYingShou: function (value, keyOne, keyTwo) {
        let model = value || {}, num = 0;
        if (keyOne && keyTwo) {
            num = FORMATNUMBER(model[keyOne]) * FORMATNUMBER(model[keyTwo]) / 100;
        }
        return num.toFixed(2);
    },
    formatMoney: function (ag, fixs = 2) {
        let money = Number(ag);
        if (!money) {
            money = 0;
        }
        return money === 0 ? 0 : (money / 100).toFixed(fixs);
    },
    filterGender: function (value) {
        return value == 1 ? '男' : (value == 2 ? '女' : '保密');
    },
    // 过滤图片地址
    getrpiurl: function (value) {
        return URL.img + value;
    },
    // 会员来源过滤
    filterChnnel: function (value) {
        return value == "pc" ? '网站注册' : (value == "h5" ? 'H5' : (value == "app" ? 'APP' : '其他'));
    },
    // 用户类型过滤
    filterUserType: function (value) {
        return value == 1 ? '层级代理' : '直属代理';
    },
    /**
     * @description 注单查询 彩票的玩法和类型拼接
     * @param v prop 字符串
     */
    formatConnectodds: function (v, prop) {
        let val = "";
        let list = prop.split(",");
        if (v && list.length && list.length == 2) {
            val = v[list[0]] + `[${v[list[1]] === "fast" ? "信用" : "官方"}]`
            return val;
        } else {
            return '未知玩法类型';
        }
    },
    // 过滤金额
    filterMoneyIsNull: function (value) {
        return value !== null ? parseInt(value) / 100 : 0;
    },
    formatContentFilterAdd: function (v, prop) {
        let item = v || {};
        let list = prop.split(',') || [];
        let type = item['deal_type_name'].trim();
        if (!type) {
            return '';
        }
        switch (type) {
            case "线上入款":
                return FORMATMONEY(item[list[0]]) + ' (+' + FORMATMONEY(item[list[1]]) + ')';
                break;
            case "公司入款":
                return FORMATMONEY(item[list[0]]) + ' (+' + FORMATMONEY(item[list[1]]) + ')';
                break;
            case "手动存款":
                return FORMATMONEY(item[list[0]]) + ' (+' + FORMATMONEY(item[list[1]]) + ')';
                break;
            case "会员提款":
                return FORMATMONEY(item[list[0]]) + ' (+' + FORMATMONEY(item[list[1]]) + ')';
                break;
            case "申请出款":
                return FORMATMONEY(item[list[0]]) + ' (+' + FORMATMONEY(item[list[1]]) + ')';
                break;
            case "手动提款":
                return FORMATMONEY(item[list[0]]) + ' (+' + FORMATMONEY(item[list[1]]) + ')';
                break;
            case "优惠活动":
                return FORMATMONEY(item[list[0]]) + ' (+' + FORMATMONEY(item[list[1]]) + ')';
                break;
            case "返水优惠":
                return FORMATMONEY(item[list[0]]) + ' (+' + FORMATMONEY(item[list[1]]) + ')';
                break;
            case "手动发放优惠":
                return FORMATMONEY(item[list[0]]) + ' (+' + FORMATMONEY(item[list[1]]) + ')';
                break;
            case "手动发放返水":
                return FORMATMONEY(item[list[0]]) + ' (+' + FORMATMONEY(item[list[1]]) + ')';
                break;
            default:
                return FORMATMONEY(item[list[0]]);
                break;

        }
    }
}