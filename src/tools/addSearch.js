/**
 * Created by lxr on 2017/3/30.
 */
export default function addSearch(obj) {
    if (obj) {
       let str="?"
        for(let i in obj) {
            if (obj[i] === 0 ||  obj[i] === '0' || obj[i] || obj[i] === false ||  obj[i] === 0) {
                if (/\d+-\d+-\d+/g.test(obj[i])) {
                    let d=obj[i].toString();
                    let object = new Date(obj[i]);
                    if( object instanceof Date){
                        // 拼接时间戳
                        if(obj[i].toString().length>13){
                            str += i + "=" + obj[i] + "&";
                        }else{
                            if(FORMATDATEPICKER(d) != "NaN-NaN-NaN"){
                                str += i + "=" + FORMATDATEPICKER(d) + "&";
                            }
                        }
                    }
                } else if(typeof(obj[i])  == "object"){
                    let object = new Date(obj[i]);
                    if( object instanceof Date && obj[i].length === undefined){
                        // 拼接时间戳
                        if(obj[i].toString().length>13){
                            str += i + "=" + obj[i] + "&";
                        }else if(FORMATDATEPICKER(obj[i]) != "NaN-NaN-NaN"){
                            str += i + "=" + FORMATDATEPICKER(obj[i]) + "&";
                        }
                    }
                }else if(typeof(obj[i]) == "boolean"){
                    str += i + "=" + obj[i].toString() + "&";
                }else{
                    str += i + "=" + obj[i] + "&";
                }
            }
        }
        return str.substring(0,str.length-1);
    }else{
        return null
    }
}