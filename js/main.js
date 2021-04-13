$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    $(document).keyup(function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        modal.toggleClass('modal--visible');
    }
    });
    $('.modal').click(function (e) {
        if ($(e.target).closest('.modal__dialog').length == 0) {
            $(this).fadeOut();
        }
    });
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() + 10)
});


$(function () {
    $('.hero__scroll-down').click(function () {
        $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 600);
        return false;
    });
});
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.scroll_top').show();
        } else {
            $('.scroll_top').hide();
        }
    });

    $('.scroll_top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
    
});

new WOW().init();

inView('.element').once('enter', runAnimation);