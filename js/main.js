$(document).ready(function(){
    $('#search,.fa-search').mouseenter(function(){
         $('.logo').hide();
    });

    $('#search,.fa-search').mouseleave(function(){
        $('.logo').show();
   });

   $('.fa-bars').click(function(){
        $('.Navbar').toggle();
        $(this).toggleClass('fa-times');
   });

   $('.Navbar ,.Navbar a').click(function(){
     $('.Navbar').hide();
     $('.fa-bars').removeClass('fa-times');
});
   
   $(window).on('scroll load',function(){
        if($(window).scrollTop() >20 ){
             $('#header').css ({
                  'background':'#f75959',
                  'box-shadow':'0 .1rem .3rem #000'

             });

        }else {
          $('#header').css ({
               'background':'#333',
               'box-shadow':'none'
          });
               
        }
   });

     $('.home-slide').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          items:1,
          autoplay:true
     });

     $('.product-slider').owlCarousel({
          loop:true,
          nav:true,
          items:3,
          autoplay:true,
          center:true,
          responsive:{
               0:{
                   items:1,
                   nav:true
               },
               550:{
                   items:2
               },
               1000:{
                   items:3
               }
           }
     });

     $('.review-slider').owlCarousel({
          loop:true,
          nav:true,
          items:1,
          autoplay:true
     });

     $('.brand-slider').owlCarousel({
          loop:true,
          nav:false,
          dots:false,
          items:3,
          autoplay:true,
          responsive:{
               0:{
                    items:1,
                    nav:true
                },
                550:{
                    items:2
                },
                1000:{
                    items:3
                }
           }
     });

});