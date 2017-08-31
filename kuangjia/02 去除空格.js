/**
 * Created by 高玄 on 2017/8/31.
 */
var $$ = function() {};
//第二种写法
$$.prototype = {
    $id: function (id) {
        return document.getElementById(id)
    },
    //去除左边空格
    ltrim: function (str) {
        return str.replace(/(^\s*)/g, '');
    },
    //去除右边空格
    rtrim: function (str) {
        return str.replace(/(\s*$)/g, '');
    },
    //去除空格
    trim: function (str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }
}
$$ = new $$();