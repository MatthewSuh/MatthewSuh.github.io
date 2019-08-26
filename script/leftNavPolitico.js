$(document).ready(function(){

    $(window).scroll(function() {
        var $height = $(window).scrollTop();
        var $offsetBackground = ($("#background").offset().top).toFixed();
        var $offsetDesign = ($("#design").offset().top).toFixed();

       
        
        if(($height > $offsetBackground) && ($height < $offsetDesign)) {
            $('.scrollBackground').addClass('active');
            // alert("background");
        } else {
            $('.scrollBackground').removeClass('active');
        }
    });
});