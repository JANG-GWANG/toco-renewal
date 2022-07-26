
 $(document).ready(function(){
    $('.ham').click(function () {
        if($('.so').hasClass('more'))
    $('.so').addClass('magictime fadeOut');
    else if($('.so').hasClass('close'))
    $('.so').removeClass('magictime fadeOut');
    });
     });
     
    $(document).ready(function(){
        $('.ham').click(function(){
            if($('.so').hasClass('close')){
                $('.so').addClass('magictime fadeIn');
                $('.so').addClass('more').removeClass('close');
            }else if($('.so').hasClass('more')){
                setTimeout(function() { $('.so').addClass('close').removeClass('more');}, 500);
            }
        });
    });



$(document).ready(function(){
    $('.news-cont').hide();        
    $('.news-cont').slice(0,6).show();        
}); 
function morePage(){
    $(".news-cont").slice(6,11).show();
    $(".load").css('display','none');          
    $(".footer").css('margin-top',"7%"); 
}    