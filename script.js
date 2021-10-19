$(document).ready(function(){
    responsive();
    
    $(window).on('resize', function(){
        responsive();
    });

    function responsive () {
        if (window.innerWidth < window.innerHeight) {
            $("svg").attr({"width":"90vw", "height":"71.4vw"});
        } else if (window.innerWidth > window.innerHeight) {
            $("svg").attr({"width":"94.55vh", "height":"75vh"});
        }
    }
});
