$(document).ready(function(){
    responsive();
    
    $(window).on('resize', function(){
        responsive();
    });

    function responsive () {
        if (window.innerWidth < window.innerHeight) {
            $("svg").attr({"width":"69.33vw", "height":"55vw"});
        } else if (window.innerWidth > window.innerHeight) {
            $("svg").attr({"width":"69.33vh", "height":"55vh"});
        }
    }
});
