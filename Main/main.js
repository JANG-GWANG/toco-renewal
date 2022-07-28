$(document).ready(function(){
    $(".service-card").on({
        "mouseover":function(){
            $(this).children(".card-show").css({'transform':'translate(-70px, -100px)', 'opacity':'0', 'transition':'0.35s', 'pointer-events':'none'});
            $(this).children(".card-hide").css({'transform':'translate(0, 0)', 'opacity':'1', 'transition':'0.35s', 'pointer-events':'none'})
        },
        "mouseout":function(){
            $(this).children(".card-show").css({'transform':'translate(0,0)', 'opacity':'1', 'transition':'0.35s', 'pointer-events':'none'});
            $(this).children(".card-hide").css({'transform':'translate(70px, 100px)', 'opacity':'0', 'transition':'0.35s', 'pointer-events':'none'})
        }
    });
});  