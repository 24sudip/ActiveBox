
$(window).on("load",function(){
    $(".preloader").delay(1000).fadeOut(500)
})

$(function(){

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        if(scrolling > 50){
            $(".main_bg").addClass("nav_bg")
        }else{
            $(".main_bg").removeClass("nav_bg")
        }

        if(scrolling > 30){
            $(".back_to_top").fadeIn(500)
        }else{
            $(".back_to_top").fadeOut(500)
        }
    })

    $(".back_to_top").click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 2000)
    })

    $('.review_text_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        speed:1000,
        autoplay:true
      });
      
})
