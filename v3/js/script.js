$(function() {
    $(".navbar-fixed-top").hide();
})

$(window).scroll(function() {
    if ($(".navbar").offset().top > 250) {
        $(".navbar-fixed-top").fadeIn(500);
    } else {
        $(".navbar-fixed-top").fadeOut(500);
    }
});