
 $(document).ready(function(){
    //  네비바 햄버거
    // $('.ham').click(function() {
    //     if($('.so').hasClass('more'))
    // $('.so').addClass('magictime fadeOut');
    // else if($('.so').hasClass('close'))
    // $('.so').removeClass('magictime fadeOut');
    // });
    // // 
    // $('.ham').click(function(){
    //     if($('.so').hasClass('close')){
    //         $('.so').addClass('magictime fadeIn');
    //         $('.so').addClass('more').removeClass('close');
    //     }else if($('.so').hasClass('more')){
    //         setTimeout(function() { $('.so').addClass('close').removeClass('more');}, 500);
    //     }
    // });
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


    //  페이지 동작시 콘텐츠 갯수 및 클래스 지정

    if(window.matchMedia("screen and (max-width: 768px)").matches){
        $(function(){
            $('.news-cont').hide(); 
            $('.saveButton').hide();
            $('.news-cont').slice(0,4).show();  
            $('.loadButton').addClass('firstLoad')   ;    
            $('.btn-group-vertical>.btn-group:not(:first-child)>.btn, .btn-group-vertical>.btn~.btn').css({'border-top-left-radius':'100%','border-top-right-radius':'100%'})                   
        });
    }else if(window.matchMedia("screen and (max-width: 1024px)").matches){
        $(function(){
            $('.news-cont').hide(); 
            $('.news-cont').slice(0,6).show(); 
            $('.loadButton').addClass('secondLoad');
            $('.saveButton').addClass('thirdSave');
        });   
    }else if(window.matchMedia("screen and (max-width: 1920px)").matches){
        $(function(){
            $('.news-cont').hide(); 
            $('.news-cont').slice(0,8).show(); 
            $('.loadButton').addClass('thirdLoad');
            $('.saveButton').addClass('secondSave');          
        });       
    }else{
        $('.loadButton').hide();            
        $('.saveButton').addClass('firstSave');
        $('.btn-group-vertical>.btn-group:not(:last-child)>.btn, .btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle)').css({'border-bottom-left-radius':'100%','border-bottom-right-radius':'100%'});
    }

          
   
    

    // 펼치기 버튼을 눌렀을때 작동
    $('.loadButton').click(function() {
        if($('.loadButton').hasClass('firstLoad')){
            const secondPoint = document.getElementById('secondPoint');            
            $(".news-cont").slice(4,6).show();              
            $(".saveButton").show();            
            window.scrollBy({top: secondPoint.getBoundingClientRect().top,behavior:'smooth'});       
            $('.loadButton').removeClass('firstLoad').addClass('secondLoad');   
            $('.saveButton').addClass('thirdSave');     
            $('.btn-group-vertical>.btn-group:not(:first-child)>.btn, .btn-group-vertical>.btn~.btn').css({'border-top-left-radius':'0','border-top-right-radius':'0'}) 
        }else if($('.loadButton').hasClass('secondLoad')){
            const thirdPoint = document.getElementById('thirdPoint');
            $(".news-cont").slice(6,8).show();
            $(".saveButton").show();
            window.scrollBy({top: thirdPoint.getBoundingClientRect().top,behavior:'smooth'});
            $(".loadButton").removeClass('secondLoad').addClass('thirdLoad'); 
            $('.saveButton').addClass('secondSave').removeClass('thirdSave');  
        }else if($('.loadButton').hasClass('thirdLoad')){
            const fourthPoint = document.getElementById('fourthPoint');
            $(".news-cont").slice(8,10).show();
            $(".saveButton").show();
            window.scrollBy({top: fourthPoint.getBoundingClientRect().top,behavior:'smooth'});
            $(".loadButton").removeClass('thirdLoad');  
            $('.saveButton').addClass('firstSave').removeClass('secondSave');              
            $(".loadButton").hide();
            $('.btn-group-vertical>.btn-group:not(:last-child)>.btn, .btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle)').css({'border-bottom-left-radius':'100%','border-bottom-right-radius':'100%'});
        };
    });  
    // 접기 버튼을 눌렀을때 작동
    $('.saveButton').click(function() {
        if($('.saveButton').hasClass('firstSave')){
            const thirdPoint = document.getElementById('thirdPoint');
            window.scrollBy({top: thirdPoint.getBoundingClientRect().top,behavior:'smooth'});
            $(".news-cont").slice(8,10).hide();
            $(".loadButton").show();            
            $(".saveButton").removeClass('firstSave').addClass('secondSave');
            $(".loadButton").addClass('thirdLoad').removeClass('secondLoad');
            $(".footer").css({'margin-top':"0"});
            $('.btn-group-vertical>.btn-group:not(:last-child)>.btn, .btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle)').css({'border-bottom-left-radius':'0','border-bottom-right-radius':'0'});
        }else if($('.saveButton').hasClass('secondSave')){
            const secondPoint = document.getElementById('secondPoint'); 
            window.scrollBy({top: secondPoint.getBoundingClientRect().top,behavior:'smooth'}); 
            $(".news-cont").slice(6,8).hide();
            $(".loadButton").show();            
            $(".saveButton").removeClass('secondSave').addClass('thirdSave');  
            $(".loadButton").addClass('secondLoad').removeClass('firstLoad');                    
        }else if($('.saveButton').hasClass('thirdSave')){
            const firstPoint = document.getElementById('firstPoint'); 
            window.scrollBy({top: firstPoint.getBoundingClientRect().top,behavior:'smooth'});   
            $(".news-cont").slice(4,6).hide();
            $(".loadButton").show();
            $(".saveButton").hide();
            $(".saveButton").removeClass('thirdSave');  
            $(".loadButton").addClass('firstLoad');  
            $('.btn-group-vertical>.btn-group:not(:first-child)>.btn, .btn-group-vertical>.btn~.btn').css({'border-top-left-radius':'100%','border-top-right-radius':'100%'})                                         
         };
    });  
});    




