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
// валидация форма
$('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
        // строчное правило
        userName: {
            required: true,
            minlength: 3,
            maxlength: 15
        },
        userPhone: "required",
        // правило-объект (блок)
        userEmail: {
            required: true,
            email: true
        }
    }, // сообщения
    messages: {
        userName: {
            required: "Заполните поле",
            minlength: "Имя не короче 3 букв",
            maxlength: "Имя не больше 15 букв"
        },
        userPhone: "Заполните поле",
        userEmail: {
            required: "Введите корректный email",
            email: "Введите в формате: name@domain.com"
        }
    },
});

$('.controlform').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
        // строчное правило
        userName: {
            required: true,
            minlength: 3,
            maxlength: 15
        },
        userPhone: "required",
        // правило-объект (блок)
        userEmail: {
            required: "Введите корректный email",
            email: true
        }
    }, // сообщения
    messages: {
        userName: {
            required: "Заполните поле",
            minlength: "Имя не короче 3 букв",
            maxlength: "Имя не больше 15 букв"
        },
        userPhone: "Телефон обезателен",
    },
});

// маски
$('[type=tel]').mask('+7(000)000-00-00', { placeholder: "+7(___)__-__-___" });

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [5.751574, 37.573856],
        zoom: 9
    }, {
        searchControlProvider: 'yandex#search'
    }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/map-icon.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});