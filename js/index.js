
AOS.init();

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    $(".info").removeClass("invisible");
    $(".info").addClass("animate__bounceIn");
    $(".parrafo").addClass("animate__zoomIn");
    
    switch (scroll){
        case 80:
            //codigo aca;
            break;
        case 100: 
            //codigo
            break;
        case 120: 
            $(".info2").removeClass("invisible");
            $(".info2").addClass("animate__bounceInLeft");
            console.log(scroll);
            break;
        case 780:
             $(".foto-section3").addClass("animate__bounceInRight");
            //codigo
            break;
    }//end switch scroll
    
});
