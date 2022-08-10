$(document).ready(function(){
    // 슬릭 슬라이더 옵션
    $('.slick-header-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover:true,
        arrows: true,
        infinite:true,
        speed: 500,
        prevArrow: $('#prev-arrow'),
        nextArrow: $('#next-arrow')
    });
    //  슬릭 멈추기
    $('#stop-btn').click(function(){
        $('.slick-header-wrap').slick('slickPause');
    });
    //   앱카드 애니메이션
    $(".service-card").on({
        "mouseover":function(){
            $(this).children(".card-show").css({'transform':'translate(-70px, -100px)', 'opacity':'0', 'transition':'0.35s', 'pointer-events':'none'});
            $(this).children(".card-hide").css({'transform':'translate(0, 0)', 'opacity':'1', 'transition':'0.35s', 'pointer-events':'none'});
        },
        "mouseout":function(){
            $(this).children(".card-show").css({'transform':'translate(0,0)', 'opacity':'1', 'transition':'0.35s', 'pointer-events':'none'});
            $(this).children(".card-hide").css({'transform':'translate(70px, 100px)', 'opacity':'0', 'transition':'0.35s', 'pointer-events':'none'});
            
        }
    });
});  
