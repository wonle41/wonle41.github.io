$(function(){
    // nav
    $(".navBtn").click(function(){
        $("header nav").addClass('on');
    });
    $(".navIn>span").click(function(){
        $("header nav").removeClass("on");
    });
    $(window).resize(function(){
        var w=$(this).width();
        if(w>=768){
            $(".navIn>span").click();
        }
    });
    $(window).scroll(function(){
        var t=$(this).scrollTop();
        if(t>2225){
            $(".section").addClass("on");
        }
        else{
            $(".section").removeClass('on');
        }
    });
    let tabHeader = document.getElementsByClassName("tab-header")[0];
    let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
    let tabBody = document.getElementsByClassName("tab-body")[0];
    let tabsPane = tabHeader.getElementsByTagName("div");
for(let i=0;i<tabsPane.length;i++){
  tabsPane[i].addEventListener("click",function(){
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[i].classList.add("active");
    
    tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
  });
}


});