
 $(document).ready(function(){
    //  네비바 햄버거
    $('.ham').click(function() {
        if($('.so').hasClass('more'))
    $('.so').addClass('magictime fadeOut');
    else if($('.so').hasClass('close'))
    $('.so').removeClass('magictime fadeOut');
    });
    // 
    $('.ham').click(function(){
        if($('.so').hasClass('close')){
            $('.so').addClass('magictime fadeIn');
            $('.so').addClass('more').removeClass('close');
        }else if($('.so').hasClass('more')){
            setTimeout(function() { $('.so').addClass('close').removeClass('more');}, 500);
        }
    });

    //  페이지 동작시 기본 설정

    if(window.matchMedia("screen and (max-width: 768px)").matches){
        $(function(){
            $('.news-cont').hide(); 
            $('.news-cont').slice(0,4).show();  
            $('.load').addClass('firstClick')                       
        });
    }else if(window.matchMedia("screen and (max-width: 1024px)").matches){
        $(function(){
            $('.news-cont').hide(); 
            $('.news-cont').slice(0,6).show(); 
            $('.load').addClass('secondClick')
        });   
    }else if(window.matchMedia("screen and (max-width: 1920px)").matches){
        $(function(){
            $('.news-cont').hide(); 
            $('.news-cont').slice(0,8).show(); 
            $('.load').addClass('thirdClick')
        });       
    }

          
   
    

    // 더보기 버튼을 눌렀을때 작동
    $('.load').click(function() {
        if($('.load').hasClass('firstClick')){
            const firstClicked = document.getElementById('firstClicked');            
            $(".news-cont").slice(4,6).show();              
            window.scrollBy({top: firstClicked.getBoundingClientRect().top,behavior:'smooth'});       
            $('.load').removeClass('firstClick').addClass('secondClick');            
        }else if($('.load').hasClass('secondClick')){
            const secondClicked = document.getElementById('secondClicked');
            $(".news-cont").slice(6,8).show();
            window.scrollBy({top: secondClicked.getBoundingClientRect().top,behavior:'smooth'});
            $(".load").removeClass('secondClick').addClass('thirdClick');  
        }else if($('.load').hasClass('thirdClick')){
            const thirdClicked = document.getElementById('thirdClicked');
            $(".news-cont").slice(8,10).show();
            window.scrollBy({top: thirdClicked.getBoundingClientRect().top,behavior:'smooth'});
            $(".load").removeClass('thirdClick');    
            $(".load").css({'display':'none'}); 
            $(".footer").css({'margin-top':"7%"});     
        }    
    });    
});    




