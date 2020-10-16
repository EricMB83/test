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

/* FILTRO */

var contenedor = document.getElementsByClassName("imagenes-pb");
let result = new Array(5);
let i = 0;

do{
    result[i] = 1;
    console.log(result);
    i++;
} while(i < 5);

function filtroTriple(evt, grupo, filtro){
    if(evt != undefined || evt != null) evt.preventDefault();
    var selectorLista = document.getElementsByClassName(grupo);
    console.log("contenedor: " + contenedor.length);
    for(let i=0; i<contenedor.length; i++) contenedor[i].classList.add("active");

    switch(grupo){
        case "grp0":
            for(i = 0; i < selectorLista[0].children.length; i++){
                selectorLista[0].children[i].children[0].classList.remove("selected");
            }
            selectorLista[0].children[filtro].children[0].classList.add("selected");
            break;
        case "grp1":
            for(i = 0; i < selectorLista[0].children.length; i++){
                selectorLista[0].children[i].children[0].classList.remove("selected");
            }
            selectorLista[0].children[filtro].children[0].classList.add("selected");
            break;
        case "grp2":
            for(i = 0; i < selectorLista[0].children.length; i++){
                selectorLista[0].children[i].children[0].classList.remove("selected");
            }
            selectorLista[0].children[filtro].children[0].classList.add("selected");
            break;
    }

    var clase0 = document.getElementsByClassName('grp0')[0].querySelector('.selected').name;
    var clase1 = document.getElementsByClassName('grp1')[0].querySelector('.selected').name;
    var clase2 = document.getElementsByClassName('grp2')[0].querySelector('.selected').name;
    
    filtrarElementos(clase0, clase1, clase2);
    console.log(result);

    for(let i=0; i<contenedor.length; i++) if(result[i] === 0) contenedor[i].classList.remove("active");
}

function filtrarElementos(cls0, cls1, cls2){
    for(let i=0; i<contenedor.length; i++)
    {
        if(contenedor[i].classList.contains(cls0) == false || contenedor[i].classList.contains(cls1) == false || contenedor[i].classList.contains(cls2) == false){
            result[i] = 0;
        }else{
            result[i] = 1;
        }
    }
}

/*

HACES UN FILTRO QUE COMPARE

*/