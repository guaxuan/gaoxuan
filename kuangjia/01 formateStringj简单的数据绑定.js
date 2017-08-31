/**
 * Created by 高玄 on 2017/8/31.
 */
var $$ = function() {};
$$.prototype = {
    //简单的数据绑定formateString
    formateString: function (str, data) {
        return str.replace(/@\((\w+)\)/g, function (match, key) {
            return typeof data[key] === "undefined" ? '' : data[key]
        });
    }
}
$$=new $$();