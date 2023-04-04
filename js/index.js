
AOS.init();
var scroll = $(window).scrollTop();

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    $(".info").removeClass("invisible");
    $(".info").addClass("animate__zoomIn");
    $(".parrafo").addClass("animate__zoomIn");
    $(".img-fondo").addClass("animate__bounceInRight");

    if (scroll >= 70) {
        
        //ejecuta una funcion info2
    } else {

    }
});
