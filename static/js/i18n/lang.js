// import md5 from './md5.js'
import indexes from './cn'
var indexes = [];
var lang = [];

/**
 * Fetch string.
 * @param string str Raw string
 * @returns string
 * @public
 */
function _(str)
{
    var hash = md5(str);
    if (indexes.indexOf(hash))
    {
        var index = indexes[hash];
        return lang[index];
    }
    return str;
}

/**
 * Index language package.
 * @param Array lang Language package array.
 * @returns Array
 */
function index(lang)
{
    var result = new Array;
    for(var i=0; i<lang.length; i++)
    {
        result.push(md5(lang[i]));
    }
    return result;
}
