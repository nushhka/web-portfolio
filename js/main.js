$(document).ready(function () {
// sticky navigation menu

let nav_offset_top = $('.header_area').height() + 50;

function navbarFixed() {
    if ($('.header_area').length) {
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $('.header_area .menu_bar').addClass('navbar_fixed');
            } else {
                $('.header_area .menu_bar').removeClass('navbar_fixed');
            }
        })
    }
}

navbarFixed();

});