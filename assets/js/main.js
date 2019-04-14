$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 4000,
          },
        speed: 1500,
        init: true,
        slidesPerView: 'auto',
    });

    $('.work-title').on('click', function(event){
        $(this).next().toggleClass("work-content-fade").siblings().removeClass('work-content-fade');
    });

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 900,
        easing: 'easeInOutQuad',
        updateURL: false,
        offset: 30,
    });

    $('.caption h1').fitText(1, {minFontSize: '20px', maxFontSize: '45px'});
    $('.caption p').fitText(1, {minFontSize: '15px', maxFontSize: '22px'});

    $('.team-box h3').fitText(1, {minFontSize: '15px', maxFontSize: '35px'});

    $(".timer").countTo();

    ScrollReveal().reveal('section', {delay: 100, reset: true });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 3,
        responsive : {
            1200 : {
                items: 4,
            },
            768 : {
                items: 3
            }
        }
    });

    // toggle class active navbar
    var navItem = document.querySelectorAll(".menu li")
    $(navItem).on("click", function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
  });

  function openNav() {
      document.querySelector('.overlay-nav').style.width = "100%";
  }
  
  function closeNav() {
      document.querySelector('.overlay-nav').style.width = "0%";
  }

$(window).bind('scroll', function(){
    if($(window).scrollTop() > 50) {
        $('nav').addClass('fixed-nav');
        $('.navbar-brand').css("font-size", "32px");
    } else {
        $('nav').removeClass('fixed-nav');
        $('.navbar-brand').css("font-size", "25px");
    }
});

$(window).on("load", function(){
    $("#loading").delay(1000).fadeOut(2000);
});