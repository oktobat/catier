$(function(){

    $("article").mouseenter(function(){
        $(this).stop().animate({
            width:"35%"
        }, 1000)
        // video 재생(play())과 멈춤(paues())을 위해서는
        // .get(인덱스번호)와 함께 사용해야 함
        var vid = $(this).find("video").get(0)
        vid.currentTime = 0; // video 재생시간을 맨처음으로
        vid.play()
    })
    $("article").mouseleave(function(){
        $(this).stop().animate({
            width:"12%"
        }, 100)
        $(this).find("video").get(0).pause()
    })


})