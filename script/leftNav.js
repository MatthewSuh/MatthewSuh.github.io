$(document).ready(function(){


    $(window).scroll(function() {
        var $height = $(window).scrollTop();
        var $offsetBackground = ($("#background").offset().top).toFixed();
        var $offset = ($("#background").offset().top).toFixed();
        var $offsetBackground = ($("#background").offset().top).toFixed();
        var $offsetBackground = ($("#background").offset().top).toFixed();
        var $offsetBackground = ($("#background").offset().top).toFixed();
        var $offsetBackground = ($("#background").offset().top).toFixed();

        if($height > $offsetBackground) {
            $('.leftNavStyle').addClass('active');
        } else {
            $('.leftNavStyle').removeClass('active');
        }
    });
});