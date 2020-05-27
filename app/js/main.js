$(function () {
    $('.slide__inner').slick({
        arrows: false,
        dots: true,
        fade: true,
        speed: 1000,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.blog__inner').slick({
        arrows: true,
        adaptiveHeight: true,
        speed: 1000,
        easing: 'ease',
        infinite: false,
        waitForAnimate: false,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                arrows: false,
                dots: true
              }
            },
          ]
    });

    $('select').styler();

  // Бургер меню
        $('.menu__btn').on('click', function(){
            $(this).toggleClass('open');
            $('.menu__list').slideToggle();
        });
  
// Кнопка для @media (max-width: 380px)

        $('.header__btn-menu ').on('click', function(){
            $('.header__box').toggleClass('active');
        });

    // Плавный скрол к якорю


    //var margin = 100; // переменная для контроля докрутки
    $("a.scrollto").click(function () { // тут пишите условия, для всех ссылок или для конкретных
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 120 // .top+margin - ставьте минус, если хотите увеличить отступ
        }, {
            duration: 900, // тут можно контролировать скорость
            easing: "swing",
        });
        return false;
    });


    // new WOW().init();
   

    AOS.init();

   new SimpleBar  (document.getElementById ('myEl'), {
       autoHide: false,
       scrollbarMinSize: 20
   }) ;
   new SimpleBar  (document.getElementById ('myEl2'), {
    autoHide: false,
    scrollbarMinSize: 20
}) ;
new SimpleBar  (document.getElementById ('myEl3'), {
    autoHide: false,
    scrollbarMinSize: 20
}) ;



    var mixer = mixitup('.products__inner-box', {
        load: {
            filter: '.category-complex'
        }
    });
});