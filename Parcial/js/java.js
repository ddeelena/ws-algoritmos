let ingresar = document.getElementById("ingresar");
let buscar = document.getElementById("buscar");
let nota = document.getElementById("")
let mostrar = document.getElementById("mostrar")
let mostrarD = document.getElementById("mostrarD")
let todos = document.getElementById("todos");
let estudiantes = [];
let notas =[];
let mayor = 0;

ingresar.onclick = function() {
    llenar();
    
};

mostrarD.onclick = function(){
    notaAlta(); 
    let texto = promedio();
    var li = document.createElement("li");
        li.innerHTML= texto;
    mostrar.appendChild(li)
}
buscar.onclick = function() {
   let texto = buscando();
   var li = document.createElement("li");
   li.innerHTML= texto;
    mostrar.appendChild(li)
};

todos.onclick = function(){
    let texto = todoLosEstudiantes();
    var li = document.createElement("li");
    li.innerHTML= texto;
    mostrar.appendChild(li)

}
function llenar() {
    let numuser= parseInt(document.getElementById("numuser").value);
    console.log(numuser)
    for(let i=0; i<numuser; i++){
        console.log ("hola");
        estudiantes[i]=(prompt("Ingrese el nombre del estudiante"));
        notas[i]= parseFloat(prompt("ingrese la not5a del estudiante"));
        console.log (notas[i], estudiantes[i])
        
    };
};

function notaAlta(){
    let cantArreglo = notas.length;
    let cadena = "la nota mayor fue: ";
    console.log(cantArreglo)
    console.log(mayor)
    for (let i = 0; i<cantArreglo; i++){
        if(mayor< notas[i]){
         mayor = notas[i];
        };
    };
    var li = document.createElement("li");
        li.innerHTML= `la nota mayor fue ${mayor}` ;
    mostrar.appendChild(li)
    cuantasVeces();
};

function cuantasVeces(){
    let cantArr = notas.length;
    let estudent =[];
    let cadena= "";
    console.log(cantArr);
    let acum = 0;
    for (let j=0 ; j<cantArr; j++){
        if(mayor == notas[j]){
            estudent[acum]= (estudiantes[j] + "<br>");
            acum++;
        };
    };
    console.log(estudent)
    cadena += (` la obtuvieron ${acum} <br>`)
    let cantest = estudent.length;
     cadena += (`La obtuvieron: <br>`);
    for (let j=0; j<cantest; j++){
        cadena += (estudent[j]);
    };
    var li = document.createElement("li");
        li.innerHTML= cadena ;
    mostrar.appendChild(li)
    
};
function buscando (){
    let nombre = prompt("Que dato desea buscar");
    let posicion = estudiantes.indexOf(nombre);
    console.log(nombre) 
    let si =(estudiantes.includes(nombre));
    console.log(si)
    if(si== true) {
        let cadena2 = `Encontrado: ${estudiantes[posicion]} y su nota es ${notas[posicion]}`
    return cadena2;
    }else {
        let cadena2 = `No se a encontrado a el  alumno ${nombre}, por favor escriba bien el dato`
        return cadena2;
    }
};
function promedio(){
    let acum = 0;
    for (let j= 0; j<notas.length; j++){
        acum += notas[j];
    };
    acum = (acum/notas.length).toFixed(2)
    console.log(acum);
    console.log(notas.length)
    let cadena2= `El promedio es  ${acum}`
    return cadena2;
};
function todoLosEstudiantes(){
    let cadena2 = "";
    for(let j=0; j<estudiantes.length;j++){
        console.log(estudiantes[j]);
        cadena2 += ` ${estudiantes[j]}, y su nota es ${notas[j]} <br>`
    };
    return cadena2;
};
