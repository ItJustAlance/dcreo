$(function() {
    var win_w = $(document).width();
    var win_h = $(window).height();
    $(window).scroll(function() {
      if($(window).scrollTop() > 100) {
        $(".header").addClass('fixed');
      } else {
        $(".header").removeClass('fixed');
      }
    });
  
  if (win_w < 550){
    $('.jq-slider-performance').slick({
      infinite: true,
      slidesToShow: 2,
      arrows: true,
      dots: false,
      prevArrow: $('.b-slider-perfomance .arr-prev'),
      nextArrow: $('.b-slider-perfomance .arr-next'),
    });
  } else {
    $('.jq-slider-performance').slick({
      infinite: true,
      slidesToShow: 3,
      arrows: true,
      dots: false,
      prevArrow: $('.b-slider-perfomance .arr-prev'),
      nextArrow: $('.b-slider-perfomance .arr-next'),
    });
  }
  
  $("#hamburger-icon").on("click", function() {
    $("body").toggleClass("active_m");
    $(".nav").slideToggle();
  });
  
  
  $(".js-project-open").on("click", function() {
    $("#popup-project").addClass("active");
    $("body").addClass("body-lock")
  });
  $(".js-popup-close").on("click", function() {
    $(".b-popup").removeClass("active");
    $("body").removeClass("body-lock")
  });
    $(".listing-news .b-news").on("click", function() {
      $(this).toggleClass("active");
      $(this).next().slideToggle();
    });
	
    if ($('.phone_mask').length) {
        $(".phone_mask").mask("+7 (999) 999-9999");
    }
  
    
    $(".js-toggle-title").on("click", function (){
      $(this).next(".js-toggle__toggle").slideToggle()
    })
  $(".js-show-project").on("click", function (){
    $(".js-show-project__wrapper").addClass("show");
    $(this).parent(".b-btn__show-project").fadeOut();
    return false;
  })
  $(".js-client-etc__btn").on("click", function (){
    $(".js-client-etc__wrapper").addClass("show");
    $(this).parent(".b-client-etc").fadeOut();
    return false;
  })
});

$(window).on("load", function() {
  setTimeout(() => {
    $(".js-logo-load").addClass("animate");
  }, 1000);
  setTimeout(() => {
    $(".js-logo-load").addClass("load");
  }, 1800);
  setTimeout(() => {
    $("body").addClass("page-load");
  }, 2300);
  setTimeout(() => {
    $(".js-logo-load").removeClass("loading");
    $(".js-logo-load").removeClass("animate");
    $(".js-logo-load").removeClass("load");
  }, 33200);
});


