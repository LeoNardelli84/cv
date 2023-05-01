AOS.init();

 //tiped.js

  
  
 var typed = new Typed("#txt-video", {
  strings: ['Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque odit, culpa, dolorum earum perferendis fuga quae praesentium pariatur deserunt nemo, tempore sunt error. Cumque, cum reprehenderit odit architecto sunt eaque.'],
  typeSpeed: 40,
  startDelay: 1000,
  showCursor: false,
  loop: false
});

function obtenerFecha(){

    var fecha = new Date();
    var dia = fecha.getDate();
    var mes =  fecha.getMonth();
    var anio = fecha.getFullYear();
    var num_dia = fecha.getDay();
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    return ( dias[num_dia] + " " + dia + " de " + meses[mes] + " de " + anio);

  }

//var fecha = obtenerFecha();
//console.log(fecha);

$(".progress").click(function(){

  var barra = $(this).children();
  var hab = barra.children('h3').html()
 
  switch (hab) {
    case 'HTML 5':
      barra.css('width', '98%')
      break;
    case 'Javascript':
      barra.css('width', '75%')
      break;
    case 'CSS':
      barra.css('width', '95%')
      break;
    case 'Bootstrap':
      barra.css('width', '90%')
      break;
    case 'Jquery':
      barra.css('width', '70%')
      break;
    case 'Git':
      barra.css('width', '60%')
      break;
    case 'Github':
      barra.css('width', '80%')
      break;
    case 'Linux':
      barra.css('width', '45%')
      break;
  }

 

});



/*
$(window).scroll(function(){

  var scroll = $(window).scrollTop();
  var opacity = (scroll) + "%";

  if (scroll > 0){
    $(".barras").css( "opacity", opacity);
  }
  
  console.log(scroll)
  console.log(opacity)
});
*/

