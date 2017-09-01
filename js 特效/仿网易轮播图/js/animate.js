/**
 * Created by andy on 2016/6/19.
 */
// 多个属性运动框架  添加回调函数
function animate(obj,json,fn) { 
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true; 
        for(var attr in json){  
            //开始遍历 json
            var current = 0;
            if(attr == "opacity")
            {
                current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;
                console.log(current);
            }
            else
            {
                current = parseInt(getStyle(obj,attr));
            }
            var step = ( json[attr] - current) / 10; 
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            //判断透明度
            if(attr == "opacity") 
            {
                if("opacity" in obj.style)
                {
                    obj.style.opacity = (current + step) /100;
                }
                else
                { 
                    obj.style.filter = "alpha(opacity = "+(current + step)* 10+")";

                }
            }
            else if(attr == "zIndex")
            {
                obj.style.zIndex = json[attr];
            }
            else
            {
                obj.style[attr] = current  + step + "px" ;
            }

            if(current != json[attr]) 
            {
                flag =  false;
            }
        }
        if(flag) 
        {
            clearInterval(obj.timer);
            if(fn) 
            {
                fn();
            }
        }
    },10)
}
function getStyle(obj,attr) {  
    if(obj.currentStyle) 
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return window.getComputedStyle(obj,null)[attr];
    }
}