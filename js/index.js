$(function(){

    var MUS=$('#music_bg').get(0);

    touch.on('.music_btn','tap',function(){
        if( MUS.paused){

            $(".music_btn").addClass("animated");

            MUS.play();     
        }else{
            
            $(".music_btn").removeClass("animated");

            MUS.pause();
        }
    })

    var pageIndex=0; 
    var pageNum=$(".page").length-1;
    touch.on('.main','swipeup',function(e){
        if(pageIndex<pageNum){
            $(".page").eq(pageIndex).addClass('pageUp');
            $(".page").eq(pageIndex).find(".dh").addClass("hide");
             pageIndex=pageIndex+1;
             $(".page").eq(pageIndex).removeClass("pageDown");
            $(".page").eq(pageIndex).find(".dh").removeClass("hide");

        }
    })
    touch.on(".main","swipedown",function(e){
        if(pageIndex>0){
            $(".page").eq(pageIndex).addClass("pageDown");
            $(".page").eq(pageIndex).find(".dh").addClass("hide");
            pageIndex=pageIndex-1;

            $(".page").eq(pageIndex).removeClass("pageUp");
            $(".page").eq(pageIndex).find(".dh").removeClass("hide");

        }




    })    


})