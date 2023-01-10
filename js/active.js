$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    adaptiveHeight: true

  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    navText:["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
  $('.slider1').owlCarousel({
    loop:false,
    nav: true,
    navText:["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});
      