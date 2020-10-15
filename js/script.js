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
/*
var contenedor = document.getElementsByClassName("imagenes-pb");
let result = new Array();

for(let i=0; i<contenedor.length; i++) result.push(1);

function filtroTriple(evt, grupo, filtro){
    if(evt != undefined || evt != null) evt.preventDefault();
    var selectorLista = document.getElementsByClassName(grupo);

    console.log("primera: " + result);

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
        case "grp3":
            for(i = 0; i < selectorLista[0].children.length; i++){
                selectorLista[0].children[i].children[0].classList.remove("selected");
            }
            selectorLista[0].children[filtro].children[0].classList.add("selected");
            break;
        case "grp4":
            for(i = 0; i < selectorLista[0].children.length; i++){
                selectorLista[0].children[i].children[0].classList.remove("selected");
            }
            selectorLista[0].children[filtro].children[0].classList.add("selected");
            break;
    }

    var clase0 = document.getElementsByClassName('grp0')[0].querySelector('.selected').name;
    var clase1 = document.getElementsByClassName('grp1')[0].querySelector('.selected').name;
    var clase2 = document.getElementsByClassName('grp2')[0].querySelector('.selected').name;
    var clase3 = document.getElementsByClassName('grp3')[0].querySelector('.selected').name;
    var clase4 = document.getElementsByClassName('grp4')[0].querySelector('.selected').name;

    filtrarElementos(clase0);
    filtrarElementos(clase1);
    filtrarElementos(clase2);
    filtrarElementos(clase3);
    filtrarElementos(clase4);

    for(let i=0; i<contenedor.length; i++) if(result[i] === 0) contenedor[i].classList.remove("active");

    console.log("segunda: " + result);
}

function filtrarElementos(clase){
    for(let i=0; i<contenedor.length; i++)
    {
        if(contenedor[i].classList.contains(clase) == false) result[i] = 0;
    }
}*/