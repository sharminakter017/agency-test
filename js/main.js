(function ($) {
  "use strict";

   // sticky
   var wind = $(window);
   var sticky = $('.header-bottom');
   var body = $('body');
   wind.on('scroll', function () {
       var scroll = wind.scrollTop();
       if (scroll < 300) {
        sticky.addClass('sticky-nav');
        body.addClass('sticky-active');
       } else {
          

           sticky.removeClass('sticky-nav');
           body.removeClass('sticky-active');
       }
   });

   //click sticky-active-menu
    $('.sticky-active-menu').click(function(){
        $('.navbar-collapse').toggleClass('active-mobile-menu');
    });

    $('.sticky-active-menu').click(function(){
        $('.sticky-nav').toggleClass('active-menu');
        $('.menu-bars').toggleClass('active-bar');
    });
    $('#btn-headerCart').click(function(){
        $('#offcanvas').addClass('show');
    });
    $('.btn-closeOffcanvas').click(function(){
        $('#offcanvas').removeClass('show');
    });
    
    //Flexbox for Single page
    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });
    });
    // to top Script
     $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('#to-top').fadeIn();
        } else{
            $('#to-top').fadeOut();
        }
    });
    $("#to-top").click(function(){
        $('html , body').animate({scrollTop :0},100);
    });

    



})

// Show Menu for Mobile devide 
function activeMenu(){
    $("#mainMenu").toggleClass("Show-menu");
    $(".menu-item").removeClass("expaned");
    $("body").toggleClass("overlay");
}
// Toggle Submenu for modile device 
function toggleSubmenu(e){
    $(".menu-item").removeClass("expaned");
    $(e).toggleClass("expaned");
}

