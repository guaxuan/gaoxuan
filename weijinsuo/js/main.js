/**
 * Created by 高玄 on 2017/7/27.
 */
'use strict';
$(function () {
   function resize(){
       var windowWidth=$(window).width();
       var isSmall=windowWidth < 768;
       $("#main_ad> .carousel-inner> .item").each(function (i,item) {
           var $item = $(item);
           var imgSrc = isSmall ? $item.data('images-xs') : $item.data('images-lg');
           $item.css('backgroundImage','url("'+imgSrc+'")');
           if(isSmall){
               $item.html('<img src="'+imgSrc+'" alt="" />');
           }
           else {
                   $item.empty();
               }

       });
   }
    $(window).on('resize',resize).trigger('resize');
    $('[data-toggle="tooltip"]').tooltip();


    var $ulcontent=$('.nav-tabs');
    var sum= 30;
    var $lis=$ulcontent.children();
    $lis.each(function (index,ele) {
        sum+=ele.scrollWidth;
    });
    if (sum>$(window).width()){
        $ulcontent
            .css('width', sum)
            .parent().css('overflow-x', 'scroll');
    }
});