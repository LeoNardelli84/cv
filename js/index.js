
AOS.init();

//para conectar con metamask
//https://www.youtube.com/watch?v=DXRSQGvWM8M 

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
        case 120, 121, 122, 123, 124, 125, 126,
             127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140: 
            $(".info2").removeClass("invisible");
            $(".info2").addClass("animate__bounceInLeft");
           
            //aca testeo lo que hace la variable scroll
            //console.log(scroll);
            break;

    }//end switch scroll
    

});




