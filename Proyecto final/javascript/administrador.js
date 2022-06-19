import{cargarinfo} from "./productos.js";
//import { obtenerDatos } from "./usuario.js";
let boton = document.getElementById("confirmar");
let url = 'https://629faf37461f8173e4ef06a4.mockapi.io/api/v1/';
let agregarNuevo = document.getElementById("agregraNuevo");
let conocer = document.getElementById("conocerProducto");
let productoNuevo = document.getElementById("newProducto");
let conocerProducto = document.getElementById("conocerProducto");
let buscar = document.getElementById("buscar");
let productos =[];
let retroceder = document.getElementById("retroceder");
let user = `dquejada1028@cue.edu.co`;
let contra = `hola`;
document.getElementById("agregarProducto").style.display = "none";
document.getElementById("hacer").style.display="none";
document.getElementById("mostrarProducto").style.display ="none";
//document.getElementById("")
conocerProducto.onclick = function(){
    document.getElementById("mostrarProducto").style.display ="";
    document.getElementById("hacer").style.display="none";
    document.getElementById("agregarProducto").style.display = "none";
}
buscar.onclick =  async function(){
    productos = await cargarinfo();
    mostrar();
}
retroceder.onclick = function(){
    document.getElementById("hacer").style.display = "";
    document.getElementById("agregarProducto").style.display ="none";
}
productoNuevo.onclick = function(){
    crearCategoria();
    añadirProducto();
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
 function mostrarOpciones(){
    let usuario = document.getElementById("floatingInput").value;
    let contraseña = document.getElementById("floatingPassword").value;
    if( usuario== user && contraseña==contra){
        document.getElementById("hacer").style.display = ""; 
        document.getElementById("entrar").style.display = "none";
    }else alert ("no se pudo")

 }
function crearCategoria(){
    let categoria = document.getElementById("categoria").value
    const  selection = document.createElement("option");
    if (categoria != null){
        //categorias.push(categoria);
        selection.innerHTML= categoria;
        opciones.appendChild(selection);
    }else{
        categoria ="lapiz";
        selection.innerHTML= categoria;
        opciones.appendChild()
    }
}
function añadirProducto(){
    let opcion = opciones.options[opciones.selectedIndex].text;
    let producto = (document.getElementById("producto")).value
    let precio = parseInt(document.getElementById("precio").value)
    let cantidad = parseInt(document.getElementById("cantidad").value)
    let foto = document.getElementById("foto").value;
    let id = document.getElementById("id").value;
    let  produTotal ={
        "name":producto,
        "precio": precio,
        "cantidad": cantidad,
        "foto": foto,
        "categoria": opcion,
        "id": id
    }
    console.log(produTotal)
    enviarBaseDeDatos(produTotal);
}
function enviarBaseDeDatos(produTotal){
    console.log("subiendo")
    fetch(url+"productos",{
        method:'POST',
        body:JSON.stringify(produTotal),
        headers:{
            "Content-type":"application/json"
        }
    })
}
function mostrar(){
    let verProductos = document.getElementById("verProducto");
    let opcion = verProductos.options[verProductos.selectedIndex].text;
    let producto = productos.find(produTotal=> produTotal.name == opcion);
    let div =  document.getElementById("container");
    console.log(producto);
    let cadena = `
    Categoria: ${producto.categoria}<br>
    Nombre: ${producto.name}<br>
    Precio: ${producto.precio}<br>
    Cantidad existente: ${producto.cantidad}<br>
    Id: ${producto.id}`;
    var h3 = document.createElement("h3");
    h3.innerHTML= cadena ;
    div.appendChild(h3);

}
