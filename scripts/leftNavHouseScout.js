$(document).ready(function(){

    $(window).scroll(function() {
        var $height = $(window).scrollTop();
        var $offsetProblem = (($("#problem").offset().top).toFixed()-300);
        var $offsetTargetAudience = (($("#targetAudience").offset().top).toFixed()-250);
        var $offsetUserResearch = (($("#userResearch").offset().top).toFixed()-150);
        var $offsetPersona = (($("#persona").offset().top).toFixed()-250);
        var $offsetIdeation = (($("#ideation").offset().top).toFixed()-250);
        var $offsetSketches = (($("#sketches").offset().top).toFixed()-250);
        var $offsetPaperPrototype = (($("#paperPrototype").offset().top).toFixed()-250);
        var $offsetMidFi = (($("#midfi").offset().top).toFixed()-250);
        var $offsetHighFi = (($("#highfi").offset().top).toFixed()-250);
        var $offsetConclusion = (($("#conclusion").offset().top).toFixed()-250);

       
        
        if(($height >= ($offsetProblem)) && ($height < $offsetTargetAudience)) {
            $('.scrollProblem').addClass('active');
        } else {
            $('.scrollProblem').removeClass('active');
        }

        if(($height >= $offsetTargetAudience) && ($height < $offsetUserResearch)){
            $('.scrollTargetAudience').addClass('active');
        }
        else{
            $('.scrollTargetAudience').removeClass('active');
        }

        if(($height >= $offsetUserResearch) && ($height < $offsetPersona)){
            $('.scrollUserResearch').addClass('active');
        }
        else{
            $('.scrollUserResearch').removeClass('active');
        }

        if(($height >= $offsetPersona) && ($height < $offsetIdeation)){
            $('.scrollPersona').addClass('active');
        }
        else{
            $('.scrollPersona').removeClass('active');
        }

        if(($height >= $offsetIdeation) && ($height < $offsetSketches)){
            $('.scrollIdeation').addClass('active');
        }
        else{
            $('.scrollIdeation').removeClass('active');
        }

        if(($height >= $offsetSketches) && ($height < $offsetPaperPrototype)){
            $('.scrollSketches').addClass('active');
        }
        else{
            $('.scrollSketches').removeClass('active');
        }

        if(($height >= $offsetPaperPrototype && ($height < $offsetMidFi))){
            $('.scrollPaperPrototype').addClass('active');
        }
        else{
            $('.scrollPaperPrototype').removeClass('active');
        }

        if(($height >= $offsetMidFi && ($height < $offsetHighFi))){
            $('.scrollMidFi').addClass('active');
        }
        else{
            $('.scrollMidFi').removeClass('active');
        }

        if(($height >= $offsetHighFi && ($height < $offsetConclusion))){
            $('.scrollHighFi').addClass('active');
        }
        else{
            $('.scrollHighFi').removeClass('active');
        }

        if(($height >= $offsetConclusion)){
            $('.scrollConclusion').addClass('active');
        }
        else{
            $('.scrollConclusion').removeClass('active');
        }
    });
});