$(document).ready(function(){

    $(window).scroll(function() {
        var $height = $(window).scrollTop();
        var $offsetDesignChallenge = (($("#designChallenge").offset().top).toFixed()-250);
        var $offsetAssumptions = (($("#assumptions").offset().top).toFixed()-150);
        var $offsetTargetAudience = (($("#targetAudience").offset().top).toFixed()-150);
        var $offsetMemorizationTechniques = (($("#memorizationTechniques").offset().top).toFixed()-150);
        var $offsetProduct = (($("#product").offset().top).toFixed()-150);
        var $offsetFeatures = (($("#features").offset().top).toFixed()-150);
        var $offsetUserFlows = (($("#userFlows").offset().top).toFixed()-150);
       
        
        if(($height >= ($offsetDesignChallenge)) && ($height < $offsetAssumptions)) {
            $('.scrollDesignChallenge').addClass('active');
            // alert("background");
        } else {
            $('.scrollDesignChallenge').removeClass('active');
        }

        if(($height >= $offsetAssumptions) && ($height < $offsetTargetAudience)){
            $('.scrollAssumptions').addClass('active');
        }
        else{
            $('.scrollAssumptions').removeClass('active');
            // $('.scrollDesignProcess').removeClass('active');
        }

        if(($height >= $offsetTargetAudience) && ($height < $offsetMemorizationTechniques)){
            $('.scrollTargetAudience').addClass('active');
        }
        else{
            $('.scrollTargetAudience').removeClass('active');
        }

        if(($height >= $offsetMemorizationTechniques) && ($height < $offsetProduct)){
            $('.scrollMemorizationTechniques').addClass('active');
        }
        else{
            $('.scrollMemorizationTechniques').removeClass('active');
        }

        if(($height >= $offsetProduct) && ($height < $offsetFeatures)){
            $('.scrollProduct').addClass('active');
        }
        else{
            $('.scrollProduct').removeClass('active');
        }

        if(($height >= $offsetFeatures) && ($height < $offsetUserFlows)){
            $('.scrollFeatures').addClass('active');

        }
        else{
            $('.scrollFeatures').removeClass('active');
        }

        if(($height >= $offsetUserFlows){
            $('.scrollUserFlows').addClass('active');
        }
        else{
            $('.scrollUserFlows').removeClass('active');
        }
    });
});