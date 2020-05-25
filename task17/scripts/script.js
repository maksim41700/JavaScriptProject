$(document).ready(function() {

    $('.main_btna, .main_btn, nav>ul>li:eq(1)').on('click', function() {
        $('.overlay').show('slow');
        $('.modal').slideDown('slow');
    });

    $('.close').on('click', function() {
        $('.overlay').hide('slow');
        $('.modal').slideUp('slow');
    });

});