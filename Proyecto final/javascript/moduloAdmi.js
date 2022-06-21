
document.getElementById("agregarProducto").style.display = "none";
document.getElementById("hacer").style.display="none";
document.getElementById("mostrarProducto").style.display ="none";
document.getElementById("modify").style.display ="none";
document.getElementById("eliminar").style.display ="none";
import {mostrarOpciones, mostrar, actuality, modifyArray, obtenerDatos, deleteProducto,crearC} from "./administrador.js"
import {añadirProducto, opcionesConocer} from "./administrador.js"
import{cargarinfo} from "./productos.js";
let boton = document.getElementById("confirmar");
let url = 'https://629faf37461f8173e4ef06a4.mockapi.io/api/v1/';
let crearCategoria = document.getElementById("crearCategoria");
let agregarNuevo = document.getElementById("agregraNuevo");
let borrarProducto= document.getElementById("borrarProducto");
let oneliminate = document.getElementById("oneliminate");
let productoNuevo = document.getElementById("newProducto");
let conocerProducto = document.getElementById("conocerProducto");
let buscar = document.getElementById("buscar");
let retroceder2 = document.getElementById("retroceder2");
let retroceder4 = document.getElementById("retroceder4");
let borrando = document.getElementById("borrando");
let productos =[];
let retroceder = document.getElementById("retroceder");
let  modificar = document.getElementById("modificar");
let modificando = document.getElementById("modificando");
let buttonModify = document.getElementById("onmodify");
let buscado = [];
let retroceder3 = document.getElementById("retroceder3");
window.onload = (productos = await cargarinfo())
oneliminate.onclick = async function(){
    let productoBorrar = (document.getElementById("productoBorrar").value);
    console.log (productoBorrar);
    let producto = productos.find(produTotal=> produTotal.name == productoBorrar);
    console.log (producto);
    deleteProducto(producto.id);
}
borrarProducto.onclick =  function (){
    document.getElementById("hacer").style.display= "none";
    document.getElementById("eliminar").style.display= "";
}
borrando.onclick = async  function(){
    let productoBorrar = document.getElementById("productoBorrar").value;
    console.log(productoBorrar);
    let producto = productos.find(produTotal=> produTotal.name == productoBorrar);
    try {
        mostrar(producto,"imprimir");
    }catch(error){
        let productos = await cargarinfo()
        let productoBorrar = document.getElementById("productoBorrar").ariaValueMax;
        console.log(productos);
        let producto = productos.find(produTotal=> produTotal.name == productoBorrar);
        mostrar(producto,"imprimir");
    }
}
retroceder4.onclick = function(){
    document.getElementById("hacer").style.display ="";
    document.getElementById("eliminar").style.display = "none";
}
buttonModify.addEventListener("click", ()=>{
    let product = obtenerDatos();
    actuality(product.id, product);
})
//document.getElementById("")
modificando.onclick = async function(){
    productos = await cargarinfo();
    console.log(productos);
    modifyArray(productos);
}
modificar.onclick =  function(){
    document.getElementById("hacer").style.display ="none";
    document.getElementById("modify").style.display = "";
}
conocerProducto.onclick =  async function(){
    document.getElementById("mostrarProducto").style.display ="";
    document.getElementById("hacer").style.display="none";
    document.getElementById("agregarProducto").style.display = "none";
    productos = await cargarinfo();
    opcionesConocer(productos);
}
buscar.onclick =  async function(){
    let verProductos = document.getElementById("verProducto");
    let opcion = verProductos.options[verProductos.selectedIndex].text;
    console.log(opcion)
    let producto = productos.find(produTotal=> produTotal.name == opcion);
    mostrar(producto,"container");
}
retroceder.onclick = function(){
    document.getElementById("hacer").style.display = "";
    document.getElementById("agregarProducto").style.display ="none";
}
retroceder2.onclick = function(){
    document.getElementById("hacer").style.display = "";
    document.getElementById("mostrarProducto").style.display ="none";
}
retroceder3.onclick = function(){
    document.getElementById("modify").style.display ="none";
    document.getElementById("hacer").style.display = "";
}
productoNuevo.onclick = function(){
    añadirProducto();
}
crearCategoria.onclick= function(){
    crearC()
}
boton.onclick = function(event){
    event.preventDefault();
    mostrarOpciones()
}
agregarNuevo.onclick = function(event){
    event.preventDefault();
    document.getElementById("hacer").style.display ="none";
    document.getElementById("agregarProducto").style.display = "";
}