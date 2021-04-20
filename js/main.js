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

    // пропадает при нажатии на Esc
    $(document).keyup(function (e) {
        if (e.key === "Escape") {
            modal.removeClass('modal--visible');
        }
    });
    // Скрывает модальное окно при нажатии вне него
    $(document).click(function (event) {
        if ($(event.target).is('.modal')) {
            modal.toggleClass('modal--visible');
        }
    });
    var mySwiper = new Swiper('.swiper-container', {
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
    var nextS = $('.swiper-next');
    var prevS = $('.swiper-prev');
    var bulletsS = $('.swiper-pagination-s');

    bullets.css('left', prev.width() + 10)
    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bulletsS.css('left', prevS.width() + 10)
    nextS.css('left', prevS.width() + 10 + bulletsS.width() + 10)
});


$(function () {
    $('.hero__scroll-down').click(function () {
        $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 1000);
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
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });
});

new WOW().init();

// валидация форма
var modal = $('.modal');
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
    submitHandler: function (form) {
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(form).serialize(),
            success: function (response) {
                console.log('Ajax работает');
                alert('Форма отправлена, мы свяжемся с вами через   10 минут');
                $(form)[0].reset();
                modal.removeClass('modal--visible');
            },
            error: function (response) {
                console.error('Ошибка запроса ' + response);
            }
        });
    }
});

$('.control__form').validate({
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
$('.footer__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
        // строчное правило
        userName: {
            required: true,
            minlength: 3,
            maxlength: 15
        },
        userQuestion: {
            required: true,
            minlength: 10,
            maxlength: 150
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
        userQuestion: "Вопросик не забудь",
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
            iconImageSize: [30, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
    myMap.geoObjects
        .add(myPlacemark);
});