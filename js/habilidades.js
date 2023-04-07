AOS.init();

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
var fecha = obtenerFecha();

//$(".bg-video").html(fecha);


$(".barra-1").click(function(){

    var barra1 = $(".barra-1").children();
    
    barra1.html("<h3>HTML5</h3>");
    barra1.css('background-color', 'red');
});

