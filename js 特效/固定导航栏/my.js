/**
 * Created by andy on 2016/5/3.
 */
function $(id) {return document.getElementById(id);}
function scroll() {
    //  ie9+和其他浏览器
    if(window.pageYOffset != null)  
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}