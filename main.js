const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    document.querySelector('.navbar_toggleBtn i').classList.toggle('fa-xmark');
    document.querySelector('.navbar_toggleBtn i').classList.toggle('fa-solid');
    document.querySelector('.navbar_toggleBtn i').classList.toggle('fa-bars');
});

$(document).ready(function () {

    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({

                scrollTop: $($(this).attr('href')).offset().top,

            },
            500,
            'linear'
        );

    });

    $(".faq_main").click(function() {
        $(this).next(".show-open").stop().slideToggle(300);
       $(this).toggleClass('on').siblings().removeClass('on');
       $(this).next(".show-open").siblings(".show-open").slideUp(300); // 1개씩 펼치기
     });

});

/* rank swiper */
var swiper = new Swiper(".rankSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 375
    375: {
      slidesPerView: 3,
      spaceBetween: 110,
    },
     // when window width is >= 1100
     1100: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 1400
    1400: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    // when window width is >= 1700
    1700: {
      slidesPerView: 5,
      spaceBetween: 10
    },
  }
});