
//import { cargarinfo } from "./productos.js";
import{getProductos} from "./productos.js";
import{obtenerDatos} from "./usuario.js";
document.getElementById("contenedorCarrito").style.display = "none";
document.getElementById("contenedorFormulario").style.display = "none";
window.onload=getProductos();
let productos =[];
let url = 'https://629faf37461f8173e4ef06a4.mockapi.io/api/v1/';
let usuarios = [];
let button = document.getElementById("finalizar");
let irCarrito = document.getElementById("irCarrito");
let irCarrito2 = document.getElementById("irCarrito2")
let irFormulario = document.getElementById("irFormulario");

//mostrar o no los html
irFormulario.onclick = function(){
    document.getElementById("contenedorFormulario").style.display = "";
    document.getElementById("contenedorCarrito").style.display = "none";
    document.getElementById("contenedorMenu").style.display = "none";
}
irCarrito2.onclick = function(){
    document.getElementById("contenedorFormulario").style.display = "none";
    document.getElementById("contenedorCarrito").style.display = "";
    document.getElementById("contenedorMenu").style.display = "none";
}
irCarrito.onclick = function(){
    document.getElementById("contenedorCarrito").style.display = "";
    document.getElementById("contenedorMenu").style.display = "none";
}

// llamar funcion de añadir al carrito
function añadirP(boton){
    console.log(boton)
    let produc = productos.find(producto => producto.id == boton)
    carrito.push(produc);
    console.log(carrito)
    //total();
    //mostrarCarrito();
}
//Enviar datos a la api 
button.onclick = function(event){
    event.preventDefault()
    let user = obtenerDatos()
    usuarios.push(user);
   // enviarBaseDeDatos(user);
}
