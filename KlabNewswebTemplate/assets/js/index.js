$("#search-toggle").click(function() {
    $("#search-div").slideToggle();
});
$("#menu-trigger").click(function() {
    $("#header-menu-mobile").slideToggle();
});
$('.slider').slick({
    dots:true,
    arrows:false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
});
