$(function(){
    $("#nav>ul>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(this).find(".sub").stop().slideUp();
    });
    // slide 0~7
    //변수제작
    var n=0;//번호변수, 전역변수
    var dis=0;//위치변수
    $(".rolling li").click(function(e){
        e.preventDefault();
        n=$(this).index();
        //console.log(n);
        dis=n*(-1)*100+"%";
        //console.log(dis);
        // $(".slide ul").css({left: dis});
        // $(".rolling li").removeClass("on");
        // //$(this).addClass("on");//this방식
        // $(".rolling li").eq(n).addClass("on");//eq방식
        slideMoving();
       
    });
    $(".left").click(function(e){
        e.preventDefault();
        if(n>0){
            n--;
        }else{
            n=3;
        }
        // dis=n*(-1)*100+"%";
        // $(".slide ul").css({left:dis});
        // $(".rolling li").removeClass("on");
        // $(".rolling li").eq(n).addClass("on");
        slideMoving();
    });
    $(".right").click(function(e){
        e.preventDefault();
        if(n<3){
            n++;
        }else{
            n=0;
        }
        // dis=n*(-1)*100+"%";
        // $(".slide ul").css({left:dis});
        // $(".rolling li").removeClass("on");
        // $(".rolling li").eq(n).addClass("on");
        slideMoving();
    });
    setInterval(function(){
        if(n<3){n++;}else{n=0};
        slideMoving();
    },3000);
    function slideMoving(){
        dis=n*(-1)*100+"%";
        $(".slide ul").css({left:dis});
        $(".rolling li").removeClass("on");
        $(".rolling li").eq(n).addClass("on");
    };
    // $(window).scroll(function(){
    //     var h=$(document).scrollTop();
    //     console.log(h);
    //     if(h>3074){
            
    //     }
    //     else{
         
    //     }
    // });
});