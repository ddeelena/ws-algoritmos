//getElementById lo que hace es obtener un elemento por medio de su id

setTimeout(bienvendido,3000); //Espero 3000 milisegundos para llemar a la función 
function dejarPasar(){
    var  nombre = document.getElementById("nombre").value;
    var edad =  document.getElementById("edad").value;
    if(edad >= 18){
        alert("Hola " + nombre + " bienvendido a nuestro sitio");
    }else{
        alert(nombre + " Tu no puede entrar aqui");
    }
}
//getElementByTagName lo que hace es obtener un elemento por medio de su etiqueta 

let tex = document.getElementsByTagName("h2");
console.log(tex);



document.getElementById("link").setAttribute("href","https://www.youtube.com/watch?v=aQZHAl_eV1c")
let x = document.getElementById("atributo"); //agrega un atributo 
let target = x.getAttribute("target");
function cambiar () {document.getElementById("xx").innerHTML=target};//lo que hace es modificar un elemento del html

const mover = document.getElementById("desplazar");

<<<<<<< HEAD
mover.addEventListener("click",() =>{
    window.scrollTo(300, 200);
});
=======
document.addEventListener("click",function (){
    window.scroll(0,200)
    document.getElementById("demo").innerHTML = "Hello World!";
});
function mover(){
    window.scrollTo(0,300);
}
>>>>>>> a6af508 (Merge branch 'master' of https://github.com/ddeelena/ws-algoritmos)

function bienvendido(){
    alert("Bienvenido a nuestra pagina");
}

const seccion =()=>{
    alert("¿Quieres iniciar sección?");
    console.log("5");
}
let tiempo = window.setInterval(seccion,100000);  //Cada cierto tiempo llama a l función 

function arreglo(){
    const array = [" uva "," mora "," fresa "];
    array.forEach(Element => document.write(Element + "<br>")); 
}

//Confirm genera una pregunta donde ok es true y cancel es falso
function confirmacion(){
    var mensaje;
    var opcion = confirm("Deseas Salir");
    if (opcion == true) {
        mensaje = "Has clickado OK";
	} else {
	    mensaje = "Has clickado Cancelar";
	}
    modificar(mensaje);
}
//document.createElement lo que haces es crear un elemento de html por medio de la etiqueta
function modificar(mensaje){
    const parrafo = document.createElement("h2");
    parrafo.innerText = mensaje; 
    //Agrega un hijo al cuerpo
    document.body.appendChild(parrafo);
};
<<<<<<< HEAD
=======
function crear(){
    let saludo = document.createElement("h2");
    saludo = "Creando un elemento";
    console.log(saludo);
}

>>>>>>> a6af508 (Merge branch 'master' of https://github.com/ddeelena/ws-algoritmos)
