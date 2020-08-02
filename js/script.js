window.onload = function(){
    var fecha = new Date();
    var selectorFecha = fecha.getFullYear();
    document.getElementById("fecha_copy").innerHTML = selectorFecha;
}