$(document).ready(function(){

    $(window).scroll(function() {
        var $height = $(window).scrollTop();
        var $offsetProject = (($("#metrikProject").offset().top).toFixed()-300);
        var $offsetRole = (($("#role").offset().top).toFixed()-350);
        var $offsetWork = (($("#work").offset().top).toFixed()-250);
        var $offsetReport = (($("#report").offset().top).toFixed()-250);
        var $offsetApplicationFeatures = (($("#apps").offset().top).toFixed()-250);
        var $offsetDataVisualizations = (($("#dataVis").offset().top).toFixed()-250);
        var $offsetStyleGuide = (($("#styleGuide").offset().top).toFixed()-250);
        var $offsetConclusion = (($("#conclusion").offset().top).toFixed()-250);

       
        
        if(($height >= ($offsetProject)) && ($height < $offsetRole)) {
            $('.scrollMetrikProject').addClass('active');
        } else {
            $('.scrollMetrikProject').removeClass('active');
        }

        if(($height >= $offsetRole) && ($height < $offsetWork)){
            $('.scrollRole').addClass('active');
        }
        else{
            $('.scrollRole').removeClass('active');
        }

        if(($height >= $offsetWork) && ($height < $offsetReport)){
            $('.scrollWork').addClass('active');
        }
        else{
            $('.scrollWork').removeClass('active');
        }

        if(($height >= $offsetReport) && ($height < $offsetApplicationFeatures)){
            $('.scrollReport').addClass('active');
        }
        else{
            $('.scrollReport').removeClass('active');
        }

        if(($height >= $offsetApplicationFeatures) && ($height < $offsetDataVisualizations)){
            $('.scrollApps').addClass('active');
        }
        else{
            $('.scrollApps').removeClass('active');
        }

        if(($height >= $offsetDataVisualizations) && ($height < $offsetStyleGuide)){
            $('.scrollDataVis').addClass('active');
        }
        else{
            $('.scrollDataVis').removeClass('active');
        }

        if(($height >= $offsetStyleGuide && ($height < $offsetConclusion))){
            $('.scrollStyleGuide').addClass('active');
        }
        else{
            $('.scrollStyleGuide').removeClass('active');
        }

        if(($height >= $offsetConclusion)){
            $('.scrollConclusion').addClass('active');
        }
        else{
            $('.scrollConclusion').removeClass('active');
        }
    });
});