
// Changing the Pargraph
$('.first').click (function(){
    $('.f1 .one').show().siblings().hide();
    
});

$('.second').click (function(){
    $('.f1 .two').show().siblings().hide();
});





// Scrolling
$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if(scroll >500)
    {
        $('.header').slideDown();
    }
    else
    {
        $('.header').slideUp();
    }
});






// Fancybox Library 
$(".fancybox").fancybox({
});







// Solutions 
$('.one').css('display','block');
$('div.acordion h3').click(function(){

    $(this).next().slideToggle();
    $('div.acordion p').not(  $(this).next()).slideUp();

});





// Timer
    $('.timer').countTo();






//Nice Scroll
$(function(){
    $("html").niceScroll();
});
