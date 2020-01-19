var widthScreen = $(window).width();
const smoothScroll = (elementId, persentase = 1) => {
    $('html, body').animate({
        scrollTop: $(`${elementId}`).offset().top * persentase,
    }, 300);
}

$(document).ready(() => {
    $('.btn-get-started').click(function () {
        let elementId = $(this).attr('href');

        if (widthScreen > 700) {
            smoothScroll(elementId, 0.76);
        } else {
            smoothScroll(elementId);
        }
    });
});