
 $(document).ready(function(){
    // 
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
    // 
    $('.news-cont').hide();        
    $('.news-cont').slice(0,6).show(); 

    // 
    $('.load').click(function() {
        if($('.load').hasClass('firstClick')){
            $(".news-cont").slice(6,8).show();         
            $('.load').removeClass('firstClick').addClass('secondClick');            
        }else if($('.load').hasClass('secondClick')){
            $(".news-cont").slice(8,10).show();
            $(".load").removeClass('secondClick');    
            $(".load").css({'display':'none'}); 
            $(".footer").css({'margin-top':"7%"});     
        }  
    });    
});    


// function morePage(){
    
//     $(".news-cont").slice(6,10).show();      
//     $(".load").css({'display':'none' });           
//     $(".footer").css({'margin-top':"7%"}); 
    
// }    



