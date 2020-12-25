$(document).ready(function() {
    $('#home-button').click(function() {
        $('#loading-screen').toggleClass('opa-loading')
        $('body').toggleClass('overflowToggle');
        setTimeout(function(){
            $('#loading-screen').toggleClass('hide-loading');
        }, 500);
    });
});