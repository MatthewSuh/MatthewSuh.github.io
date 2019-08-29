$(document).ready(function(){

    $(window).scroll(function() {
        var $height = $(window).scrollTop();
        var $offsetBackground = (($("#background").offset().top).toFixed()-250);
        var $offsetAnalysis = (($("#analysis").offset().top).toFixed()-250);
        var $offsetUserResearch = (($("#userResearch").offset().top).toFixed()-250);
        var $offsetPersonas = (($("#personas").offset().top).toFixed()-350);
        var $offsetPoliticoResearch = (($("#politicoResearch").offset().top).toFixed()-250);
        var $offsetRedesign = (($("#redesign").offset().top).toFixed()-250);
        var $offsetSketches = (($("#sketches").offset().top).toFixed()-250);
        var $offsetWireframe = (($("#wireframe").offset().top).toFixed()-250);
        var $offsetConclusion = (($("#conclusion").offset().top).toFixed()-250);
       
        
        if(($height >= ($offsetBackground)) && ($height < $offsetAnalysis)) {
            $('.scrollBackground').addClass('active');
        } else {
            $('.scrollBackground').removeClass('active');
        }

        if(($height >= $offsetAnalysis) && ($height < $offsetUserResearch)){
            $('.scrollAnalysis').addClass('active');
        }
        else{
            $('.scrollAnalysis').removeClass('active');
        }

        if(($height >= $offsetUserResearch) && ($height < $offsetPersonas)){
            $('.scrollUserResearch').addClass('active');
        }
        else{
            $('.scrollUserResearch').removeClass('active');
        }

        if(($height >= $offsetPersonas) && ($height < $offsetPoliticoResearch)){
            $('.scrollPersonas').addClass('active');
        }
        else{
            $('.scrollPersonas').removeClass('active');
        }

        if(($height >= $offsetPoliticoResearch) && ($height < $offsetRedesign)){
            $('.scrollPoliticoResearch').addClass('active');
        }
        else{
            $('.scrollPoliticoResearch').removeClass('active');
        }

        if(($height >= $offsetRedesign) && ($height < $offsetSketches)){
            $('.scrollRedesignFocus').addClass('active');

        }
        else{
            $('.scrollRedesignFocus').removeClass('active');
        }

        if(($height >= $offsetSketches) && ($height < $offsetWireframe)){
            $('.scrollSketches').addClass('active');
        }
        else{
            $('.scrollSketches').removeClass('active');
        }

        if(($height >= $offsetWireframe) && ($height < $offsetConclusion)){
            $('.scrollWireframe').addClass('active');
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