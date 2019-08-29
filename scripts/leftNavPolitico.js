$(document).ready(function(){

    $(window).scroll(function() {
        var $height = $(window).scrollTop();
        var $offsetBackground = (($("#background").offset().top).toFixed()-250);
        // var $offsetDesign = (($("#design").offset().top).toFixed()-150);
        var $offsetAnalysis = (($("#analysis").offset().top).toFixed()-250);
        var $offsetUserResearch = (($("#userResearch").offset().top).toFixed()-250);
        var $offsetPersonas = (($("#personas").offset().top).toFixed()-350);
        var $offsetPoliticoResearch = (($("#politicoResearch").offset().top).toFixed()-250);
        // var $offsetTheRedesign = (($("#theRedesign").offset().top).toFixed()-150);
        var $offsetRedesign = (($("#redesign").offset().top).toFixed()-250);
        var $offsetSketches = (($("#sketches").offset().top).toFixed()-250);
        var $offsetWireframe = (($("#wireframe").offset().top).toFixed()-250);
        var $offsetConclusion = (($("#conclusion").offset().top).toFixed()-250);
       
        
        if(($height >= ($offsetBackground)) && ($height < $offsetAnalysis)) {
            $('.scrollBackground').addClass('active');
            // alert("background");
        } else {
            $('.scrollBackground').removeClass('active');
            $('.scrollDesignProcess').removeClass('active');
        }

        if(($height >= $offsetAnalysis) && ($height < $offsetUserResearch)){
            $('.scrollAnalysis').addClass('active');
            $('.scrollDesignProcess').addClass('active');
        }
        else{
            $('.scrollAnalysis').removeClass('active');
            // $('.scrollDesignProcess').removeClass('active');
        }

        if(($height >= $offsetUserResearch) && ($height < $offsetPersonas)){
            $('.scrollUserResearch').addClass('active');
            $('.scrollDesignProcess').addClass('active');
        }
        else{
            $('.scrollUserResearch').removeClass('active');
            // $('.scrollDesignProcess').removeClass('active');
        }

        if(($height >= $offsetPersonas) && ($height < $offsetPoliticoResearch)){
            $('.scrollPersonas').addClass('active');
            $('.scrollDesignProcess').addClass('active');
        }
        else{
            $('.scrollPersonas').removeClass('active');
            // $('.scrollDesignProcess').removeClass('active');
        }

        if(($height >= $offsetPoliticoResearch) && ($height < $offsetRedesign)){
            $('.scrollPoliticoResearch').addClass('active');
            $('.scrollDesignProcess').addClass('active');
        }
        else{
            $('.scrollPoliticoResearch').removeClass('active');
            // $('.scrollDesignProcess').removeClass('active');
        }

        if(($height >= $offsetRedesign) && ($height < $offsetSketches)){
            $('.scrollRedesignFocus').addClass('active');
            $('.scrollRedesign').addClass('active');

        }
        else{
            $('.scrollRedesignFocus').removeClass('active');
            $('.scrollRedesign').removeClass('active');

        }

        if(($height >= $offsetSketches) && ($height < $offsetWireframe)){
            $('.scrollSketches').addClass('active');
            $('.scrollRedesign').addClass('active');
        }
        else{
            $('.scrollSketches').removeClass('active');
        }

        if(($height >= $offsetWireframe) && ($height < $offsetConclusion)){
            $('.scrollWireframe').addClass('active');
            $('.scrollRedesign').addClass('active');
        }
        else{
            $('.scrollWireframe').removeClass('active');
        }

        if(($height >= $offsetConclusion)){
            $('.scrollConclusion').addClass('active');
        }
        else{
            $('.scrollConclusion').removeClass('active');
        }


    });
});