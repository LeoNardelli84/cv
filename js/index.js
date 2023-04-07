
AOS.init();

//para conectar con metamask
//https://www.youtube.com/watch?v=DXRSQGvWM8M 

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    $(".info").removeClass("invisible");
    $(".info").addClass("animate__bounceIn");
    $(".parrafo").addClass("animate__zoomIn");
    
    if(scroll >= 140){
        $(".info2").removeClass("invisible");
        $(".info2").addClass("animate__bounceInLeft");
    }
    if(scroll >= 600){
        $(".foto-section3").addClass("animate__flipInY");
    }
    
});




