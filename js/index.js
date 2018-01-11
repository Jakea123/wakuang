$(function(){
    $(".btn").on("click",function(){
        $(".gBox").addClass("stop");
        $(".gouzi").addClass("zhua");
    })


    $(".slideBox").on('touchstart',function(e) {
        e.preventDefault();
        var touch = e.originalEvent.targetTouches[0];
        x1= touch.pageX;
        var pos= $(this).position();
        _left = pos.left;
    });
    $(".slideBox").on('touchend',function(e) {
        e.preventDefault();
        var touch = e.originalEvent.targetTouches[0];
        var pos= $(this).position();
        _left = pos.left;
    });
    $(".slideBox").on('touchmove',function(e) {
        e.preventDefault();
        var touch = e.originalEvent.targetTouches[0];
        var x= touch.pageX;
        var m = x1-x
        $(this).css("left",-m+_left);
    });

    var oDiv = $('.gouzi');
    var tag = $(".tag");
    oDiv.on("animationend",function(){
        if(oDiv.hasClass("up")){
            return
        }else {
        var arr=[];
        var arr1=[];

        var h = tag.offset().top + tag.height();
        var w = tag.offset().left + tag.width()/2;

        var z = $(".gift");
        for (var i=0;i<z.length;i++){
            //console.log(z.eq(i).offset().top-b1)
            arr.push(Math.abs(z.eq(i).offset().top+z.eq(i).height()/2 -h));
            arr1.push(Math.abs(z.eq(i).offset().left+z.eq(i).width()/2-w));
        }

        //console.log(arr);
        //console.log(arr1);
        var newarr =[];
        for(var j = 0;j<arr.length;j++){
           newarr.push(arr[j]+arr1[j]);
       }
        //console.log(newarr);
        var n = arr.indexOf(Math.min.apply(Math, arr));
        var n1 = arr1.indexOf(Math.min.apply(Math, arr1));
        var num = newarr.indexOf(Math.min.apply(Math, newarr));
        console.log(n,n1,num);
            z.eq(num).css("display","none");
            oDiv.append(z.eq(num).clone());
            $(".gouzi > div").css({
            "display":"block",
            "top":"5.2rem",
            "left":"-8%",
            "right":"0",
            "margin":"auto",
            "transform":"none"
        })
        oDiv.css("top","120px");
        $(".gouzi").addClass("up");
        setTimeout(function(){
            $(".bg").css("z-index","100");
            $(".bg").css("opacity","0.7");
            $(".close").css("opacity","1");
            $(".prize").addClass("show");
            $(".guang").addClass("show");
            $(".guang").animate({
                top:"0.6rem"
            },1000)
            },2000);
        }
    })
    $(".close").on("click",function(){
        $(".prize").removeClass("show");
        $(".guang").removeClass("show");
        $(".guang").css("top","-7.57rem");
        $(".bg").css("opacity","0");
        $(".bg").css("z-index","0");
        $(".close").css("opacity","0");
        $(".gouzi").removeClass("zhua up");
        $(".gift").css("display","block");
        $(".gouzi div").remove();
        $(".gBox").removeClass("stop");
    })
})