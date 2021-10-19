$(document).ready(function(){
    $(window).on('resize', function(){
        if (window.innerWidth < window.innerHeight) {
            $("svg").attr({"width":"69.33vw", "height":"55vw"});
        } else if (window.innerWidth > window.innerHeight) {
            $("svg").attr({"width":"69.33vh", "height":"55vh"});
        }
    });
});