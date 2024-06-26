// custom JS

$(document).ready(function(){
    function isMobile() {
        return window.matchMedia("only screen and (max-width: 760px)").matches;
    }

    $('.nav-link').on('click', function() {
        if (isMobile()) {
            var targetOffset = $('#tab-header').offset().top;
            $('html, body').animate({ scrollTop: targetOffset - 10 }, 'fast');
        }
    });
});