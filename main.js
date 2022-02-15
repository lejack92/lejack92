const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
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