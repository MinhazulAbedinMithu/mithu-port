$(document).ready(function(){
    
    
     var nav = $('#header');
     var dis = nav.offset().top;
  
      $(window).scroll(function () {
         var scrolling = $(this).scrollTop();
        if (scrolling > dis) {
             nav.addClass('p-fixed');
//             $('.navbar .navbar-brand img').attr('src','../img/logo-dark.png');
             // $(".wh-logo").hide();
             // $(".dk-logo").show();
         } else {
             nav.removeClass('p-fixed');
//             $('.navbar .navbar-brand img').attr('src','../img/logo-white.png');
             // $(".dk-logo").hide();
             // $(".wh-logo").show();
         }
     });
    //counter up 
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    

});


(function(){

    $('.slick-slider').slick({
        infinite:true,
        dots:false,
        slideToShow:1,
        slideToScroll:1,
        nextArrow: '<i class="fa fa-arrow-right"></i>',
        prevArrow: '<i class="fa fa-arrow-left"></i>',
    })


})()


