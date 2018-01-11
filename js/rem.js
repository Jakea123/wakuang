function resize(){
    var dw=640;
    var cw=document.documentElement.clientWidth;
    var rem=cw/dw*100;
    if(rem<=32){
        rem=32;
    }
    document.documentElement.style.fontSize=rem+"px";

    /* var deviceWidth = document.documentElement.clientWidth;//设备css像素宽
     var isIPhone = window.navigator.appVersion.match(/iPhone/gi);//判断设备是不是iPhone
     if (isIPhone) {
         dpr = window.devicePixelRatio;
     }else {
         dpr = 1 ;
     }
     var docEl = window.document.documentElement;
     docEl.setAttribute('data-dpr', dpr);*/
}
resize();
window.onresize = function(){
    resize();
}