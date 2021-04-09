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
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        modal.toggleClass('modal--visible');
    }
});