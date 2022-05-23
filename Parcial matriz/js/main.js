let datos = document.getElementById("datos");
//let numUser = document.getElementById("numUser");
let ingresar = document.getElementById("ingresar");
//let cuantos = document.getElementById("cuantos").value;
let matriz = [];
let cadena = "";
ingresar.onclick = function() {
    console.log("hola")
    llenar()
    notaAlta()
    var li = document.createElement("li");
    li.innerHTML= cadena ;
    datos.appendChild(li)
    
    let escrito = promedio()
    var li = document.createElement("li");
    li.innerHTML= escrito;
    datos.appendChild(li)

    let texto = mostrar();
    var li = document.createElement("li");
    li.innerHTML= texto;
    datos.appendChild(li)
};

function llenar(){
    let numUser = parseInt(document.getElementById("numUser").value);
    console.log(numUser)
    for (let i =0; i<numUser; i++){
        let estudiantes = prompt("cual es el nombre del estudiante");
        console.log(estudiantes);
        let nota = parseFloat(prompt("Cual es la nota del estudiante"));
        matriz[i]= [estudiantes,nota];
        console.log(matriz[i]);
    };
};
function notaAlta (){
    let may = 0;
    let estudiante = [];
    for(let i=0; i<matriz.length-1; i++){
        if(may<matriz[i][1]){
            may = matriz[i][1];
        };
    };
    cadena = `La nota más alta es ${may} <br>`
    cuantasVeces(may)
};
function cuantasVeces(may){
    let acum = 0;
    let estudiante = [];
    for(let i = 0; i<matriz.length; i++){
        if(matriz[i][1]==may){
            acum++
            estudiante[i] = matriz[i][0];
        };
    };
    cadena += `la obtuvieron ${acum} <br>`
    cadena += `la obtuvo: <br>`
    for(let i =0; i<estudiante.length;i++){
        cadena += `-${estudiante[i]} <br>`;
    };
}
function buscar (){
    let cadena2 = ""
    let buscado = prompt("Que estudiantes desea buscar");
    let si = (matriz.includes(buscado));
    console.log (si);
    let encontrar = (matriz.indexOf(buscado));
    if(si==true){
         cadena2 = `Encontrado ${buscado} y su nota es ${matriz[encontrar][1]}`;
        return cadena2;
    }else 
    return cadena2 = `No se ha encontrado al estudiante ${buscado}`;
}
function promedio (){
    let acum = 0;
    let cadena2 = "";
    let v = 0;
    for(let i = 0; i<matriz.length; i++){
        acum = acum + (matriz[i][1]);
    }
    acum = (acum / (matriz.length)).toFixed(2);
    return cadena2 =`El promedio es de ${acum}`;
}
function mostrar(){
    let cadena2 = "Los estudiantes son: <br>";
    for(let i = 0; i<matriz.length; i++){
        cadena2 += `${matriz[i][0]} y su nota es ${matriz[i][1]} <br>`
    }
    return cadena2;
};

//endsWith determina si la cadena termina con la cadena idicada 
//includes devuelve true o flaso  si se incluye en el array 
//indexof* devuelve la posicion del elemento en el arreglo
//split* divide una cadena de texto en un nuevo array separado por lo que se indica
// cadena.split([separador][,limite]) 
//substring devuelve un subconjunto de un objeto 
//tolowercase devuelve la cadena en minusculas 
//touppercase devuelve la cadena en mayusculas 
//trim (remover espacios) remueve espacios al principio y al final de la cadena
//tostring 
//propiedad length longitud de una cadena o arreglo etc 