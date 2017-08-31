/**
 * Created by 高玄 on 2017/8/31.
 */
var $$ = function() {};

$$.prototype = {
    tab: function (id) {
        //获取某个父元素下面的子元素
        var box = document.getElementById(id);
        var spans = box.getElementsByTagName('span');
        var lis = box.getElementsByTagName('li');
        for (var i = 0; i < spans.length; i++) {
            spans[i].index = i;
            spans[i].onmouseover = function () {
                //排他思想 --  将所有的span置为默认状态  --- 然后再将当前鼠标移上的span置为class -- select
                for (var i = 0; i < spans.length; i++) {
                    spans[i].className = '';
                    lis[i].className = '';
                }
                this.className = 'select';
                lis[this.index].className = 'select';
            }
        }
    }
}
$$ = new $$();