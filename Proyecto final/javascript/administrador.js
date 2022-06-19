import{cargarinfo} from "./productos.js";
//import { obtenerDatos } from "./usuario.js";
let boton = document.getElementById("confirmar");
let url = 'https://629faf37461f8173e4ef06a4.mockapi.io/api/v1/';
let agregarNuevo = document.getElementById("agregraNuevo");
let conocer = document.getElementById("conocerProducto");
let productoNuevo = document.getElementById("newProducto");
let conocerProducto = document.getElementById("conocerProducto");
let buscar = document.getElementById("buscar");
let retroceder2 = document.getElementById("retroceder2");
let productos =[];
let retroceder = document.getElementById("retroceder");
let user = `dquejada1028@cue.edu.co`;
let contra = `hola`;
let  modificar = document.getElementById("modificar");
let modificando = document.getElementById("modificando");
document.getElementById("agregarProducto").style.display = "none";
document.getElementById("hacer").style.display="none";
document.getElementById("mostrarProducto").style.display ="none";
document.getElementById("modify").style.display ="none";
//document.getElementById("")
modificando.onclick = async function(){
    productos = await cargarinfo();
    console.log(productos);
    modifyArray();
}
modificar.onclick =  function(){
    document.getElementById("hacer").style.display ="none";
    document.getElementById("modify").style.display = "";
}
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
retroceder2.onclick = function(){
    document.getElementById("hacer").style.display = "";
    document.getElementById("mostrarProducto").style.display ="none";
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
function deleteProducto(id){
    fetch(url+"productos/"+id,{
        method:'DELETE'
    })
    .then(response=>response.json());
} 
function modifyArray(){
    let productoAmodificar = document.getElementById("productoAmodificar").value;
    console.log(productoAmodificar);
    let buscado = productos.find(producto => producto.name == productoAmodificar)
    deleteProducto(buscado.id);
}
    //buscar como poder modificar la api, sies mas facil borrar y luego re subir o cual es el metodo para 
    //actualizar como funciona el put en la api y asi mismo hacer esa 
    //en la de borrar mirar la funcion de la profesora 
    //Con esta termianda solo faltaria la funcion de la factura tanto para mostrar la factura que seria 
    // imprimir los datos del usuario y la list del carrito desde el principal, subir eso a la api a un nuevo 
    //recurso y al llamar esa funcion invocada por el boton se imprima 
    // hacer lo de restar cantidades en el objecto y asi mismo se debe actualizar en la api
    // solo faltaria mejorar el dicho de impresion en el de conocer productos y los pequeños detalles de la interfez
    // como el carrito alinear los items, definir si voy a usar el carrito en tabla o no y ya con eso acabo el proyecto
    //meta acabar antes de domingo a las 6 pm 
    // 5:05 am 