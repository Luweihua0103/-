var $wrap = $('.wrapper');

var timer = setInterval(function(){
    $wrap.removeClass('init');
},200);

$('.item').on('click',function(){
    $(this).addClass('active');
    $wrap.addClass('wrapper-active');
})
$('.close').on('click',function(e){
    e.stopPropagation();
    $(this).removeClass('active');
    $wrap.removeClass('wrapper-active');
})