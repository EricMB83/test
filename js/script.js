window.onload = function(){
    var fecha = new Date();
    var selectorFecha = fecha.getFullYear();
    document.getElementById("fecha_copy").innerHTML = selectorFecha;
}

function cambiarApartado(numero){
    var contenedorArray = document.getElementsByClassName('menu_superior');

    for(i = 0; i < contenedorArray.length; i++){
        var contenedorNumero = document.getElementById("seccion_muestra_" + i);
        contenedorNumero.classList.remove('active');
        contenedorArray[i].classList.remove('active');
    }

    document.getElementById("seccion_muestra_" + numero).classList.toggle('active');
    contenedorArray[numero].classList.toggle('active');
}