$(window).load(function() {
  $('#load').hide();
});

// 메인페이지 메뉴더보기 클릭시 디자인 변경
$('#menuicon').on('click', function() {
    if ( $(this).prop('checked') ) {
        // 메뉴더보기 열릴 때
        $('.nav-gnb').css({'background-color':'#fff', 'border-bottom':'1px solid #E9E9E9', 'box-sizing':"border-box"});
        $('.menu-text').css({'color':'#000'});
        $('.menuicon').css({'background-color':'#000'});
        $('.menuicon-color').css({'background-color':'#000'});
        document.getElementById("main-logo").src="./img/toco-common/logo-Resoft.svg";
        $('.menu-text').hover(function(){
            $(this).css('color','#184B9F');
        }, function(){
            $(this).css('color','#000');
        });
    } else {
        // 메뉴더보기 닫힌 후
        $('.nav-gnb').css({'background-color':'','border-bottom':'','transition':''});
        $('.menu-text').css({'color':''});
        $('.menuicon').css({'background-color':''});
        $('.menuicon-color').css({'background-color':'', 'transition':'all .35s'});
        document.getElementById("main-logo").src="./img/toco-common/logo-Resoft-white.png";
        $('.menu-text').hover(function(){
            $(this).css('color','#184B9F');
        }, function(){
            $(this).css('color','#fff');
        });
    }
});



// 다른 페이지 메뉴 마우스 올렸을 때 디자인
$('#page-menuicon').on('click', function() {
    if ( $(this).prop('checked') ) {
        // 메뉴더보기 열릴 때
        $('.nav-gnb').css({'border-bottom':'1px solid #E9E9E9', 'box-sizing':'border-box'});
        $('.page-menu-text').hover(function(){
            $(this).css({'color':'#a0f3ed','transition':'all .35s'});
        }, function(){
            $(this).css({'color':'#fff','transition':'all .35s'});
        });
    } else {
        // 메뉴더보기 닫힌 후
    }
});



// 사업현황페이지 슬릭슬라이더
$(function(){
    $(".etc-projects").slick({
        slide: "div",                   // 슬라이드 되어야 할 태그
        infinite : true,                // 무한 반복 옵션     
        slidesToShow : 5,               // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,             // 스크롤 한번에 움직일 컨텐츠 개수
        speed : 400,                    // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true,                  // 옆으로 이동하는 화살표 표시 여부
        dots : false,                   // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,                // 자동 스크롤 사용 여부
        autoplaySpeed : 2000,           // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover : true,            // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        vertical : false,               // 세로 방향 슬라이드 옵션
        prevArrow : false,              // 이전 버튼
        nextArrow : false,              // 다음 버튼
        draggable : true,               // 드래그 가능 여부
        
        // 반응형 웹 구현 옵션
        responsive: [
            {   // 화면크기 1600px 일때
                breakpoint: 1600,
                settings: {slidesToShow: 4}
            },
            {   // 화면크기 1300px 일때
                breakpoint: 1300,
                settings: {slidesToShow: 3}
            },
            {   // 화면크기 668px 일때
                breakpoint: 668,
                settings: {slidesToShow: 2}
            },
            {   // 화면크기 468px 일때
                breakpoint: 468,
                settings: {slidesToShow: 1}
            }

        ]
    });
});



// $(document).ready(function(){
//     $('#page-menuicon').click(function () {
//         if($('.nav-lnb').hasClass('more'))
//     $('.nav-lnb').addClass('magictime slideDownReturn');
//     else if($('.nav-lnb').hasClass('close'))
//     $('.nav-lnb').removeClass('magictime slideDownReturn');
// });
//      });
// $(document).ready(function(){
//     $('#page-menuicon').click(function(){
//         if($('.nav-lnb').hasClass('close')){
//             $('.nav-lnb').addClass('magictime slideDown');
//             $('.nav-lnb').addClass('more').removeClass('close');
//         }else if($('.nav-lnb').hasClass('more')){
//             setTimeout(function(){$('.nav-lnb').addClass('close').removeClass('more');}, 500);
//         }
//     });
// });

