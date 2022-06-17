//Mi aplicativo para el proyecto final quiero que sea un sistema para una papeleria 
//con dos secciones, una primera donde los usuarios puedan hacer compras y/o sacar turnos
//para poder que esta sea más rapida, y otra seccion donde el administrador pueda hacer
//el inventario más o menos en este aplicativo, así sería tanto para el cliente como para 
//el administrador
if(localStorage.getItem("Persona")!=null){
    alert("Bienvenid@ a tu inventario "+localStorage.getItem("usuario"));
  }
  else{
    let nombre= prompt("ingrese nombre");
    localStorage.setItem("Persona",nombre);
}

let opciones = document.getElementById("opciones");
const crearCategoria = document.getElementById("crearCategoria");
const crearProducto = document.getElementById("newProducto");
const agregarInicio = document.getElementById("agregarInicio");
const saberCategoria = document.getElementById("saberCategoria");
const aumentar = document.getElementById("aumentar");
const disminuir = document.getElementById("disminuir");
let mostrar = document.getElementById("mostrar");
const eliminar = document.getElementById("eliminar");
const buscar = document.getElementById("buscar");
const ordenar = document.getElementById("ordenar");
let categorias = [];
let opcion ="";
let productos = [];
let categoriax;
var h3 = document.createElement("h3");
h3.innerHTML= `Aqui se mostraran los datos que necesites`;
mostrar.appendChild(h3)

crearCategoria.onclick = function(){
    crear();
}
crearProducto.onclick = function(){
   productos.push(produc());
}
agregarInicio.onclick = function(){
    productos.unshift(produc());
}
saberCategoria.onclick = function(){
    while (mostrar.firstChild) {
        mostrar.removeChild(mostrar.firstChild);
      }
    buscarCategoria();
    alert(`Hay ${productos.length} en el inventario`);
    totalPrecio();
    totalCategoria();
}
disminuir.onclick = function(){
    while (mostrar.firstChild) {
        mostrar.removeChild(mostrar.firstChild);
      }
    let productoAd = document.getElementById("productoAD").value;
    disminuirP(productoAd);
};
aumentar.onclick = function(){
    while (mostrar.firstChild) {
        mostrar.removeChild(mostrar.firstChild);
      }
    let productoAd = document.getElementById("productoAD").value;
    aumentarP(productoAd); 
}
eliminar.onclick = function(){
    while (mostrar.firstChild) {
        mostrar.removeChild(mostrar.firstChild);
      }
    let productoAd = document.getElementById("productoAD").value;
    eliminarP(productoAd)
}
buscar.onclick = function(){
    while (mostrar.firstChild) {
        mostrar.removeChild(mostrar.firstChild);
      }
    let productoAd = document.getElementById("productoAD").value;
    buscarNombre(productoAd);
}
ordenar.onclick = function(){
     while (mostrar.firstChild) {
        mostrar.removeChild(mostrar.firstChild);
      }
    ordenarP();
  

}
function crear (){
    let categoria = document.getElementById("categoria").value
    categorias.push(categoria);
     const  selection = document.createElement("option");
     //selection.setAttribute("value",categoria.toLowerCase)
     selection.innerHTML= categoria;
     opciones.appendChild(selection);
    console.log(selection);
};
let produTotal;
function produc(){
    opcion = opciones.options[opciones.selectedIndex].text;
    let producto = (document.getElementById("producto")).value
    let precio = parseInt(document.getElementById("precio").value)
    let cantidad = parseInt(document.getElementById("cantidad").value)
     produTotal ={
        "categoria": opcion,
        "producto": producto,
        "precio": precio,
        "cantidad": cantidad
    }
    return produTotal;
}


function buscarCategoria (){
    for (let k=0; k<categorias.length;k++){
     categoriax = productos.filter(produTotal => produTotal.categoria === categorias[k]);
     var h3 = document.createElement("h3");
     h3.innerHTML= `Hay ${categoriax.length} producto(s) en la categoria ${categorias[k]}<br>`
     mostrar.appendChild(h3)
    }
}

function totalPrecio(){
     let total =  productos.reduce((acum,cont) =>{
            return acum+=(cont.precio*cont.cantidad)
    },0);
    var h3 = document.createElement("h3");
    h3.innerHTML= `El total de los precios ${total}`;
    mostrar.appendChild(h3)
    console.log(total)
    
}
function totalCategoria(){
    let cont;
    categorias.forEach(categoria=>{
        cont =0;
        productos.forEach(obj => {
            obj.categoria == categoria ? cont+=(obj.precio*obj.cantidad) : cont+=0
        });
        var h3 = document.createElement("h3");
        h3.innerHTML= `El total de la categoria ${categoria} es  ${cont}`;
        mostrar.appendChild(h3)
    })
}
function disminuirP(producto){
   let  elementIndex = productos.findIndex((produTotal=> produTotal.producto == producto));
   console.log(elementIndex)
   if(elementIndex>=0){
    console.log(productos[elementIndex]);
    productos[elementIndex]["cantidad"] -= 1;
    console.log(productos[elementIndex]);
   }else{
       alert("El producto no existe")
   }
  
}
function aumentarP(producto){
    let  elementIndex = productos.findIndex((produTotal=> produTotal.producto == producto));
   console.log(elementIndex)
   if(elementIndex>=0){
    console.log(productos[elementIndex]);
    productos[elementIndex]["cantidad"] += 1;
    console.log(productos[elementIndex]);
   }else{
       alert("El producto no existe")
   }
}
function buscarNombre(buscado){
    let productoBuscado = productos.find(produTotal=> produTotal.producto == buscado);
    console.log(productoBuscado)
    let cadena ="";
    if(productoBuscado== undefined){
        cadena =`No existe tal producto`;
        
    }else{
        cadena = `
        Categoria: ${productoBuscado.categoria}<br>
        Nombre: ${productoBuscado.producto}<br>
        Precio: ${productoBuscado.precio}<br>
        Cantidad existente: ${productoBuscado.cantidad}`;
    }
    var h3 = document.createElement("h3");
        h3.innerHTML= cadena ;
        mostrar.appendChild(h3)
}
function ordenarP (){
    let orden = [];
    orden = productos.map(producto => producto.producto)
    let alfa = orden.sort();
    var h3 = document.createElement("h3");
    h3.innerHTML= `Los productos son: `+ alfa;
    mostrar.appendChild(h3)
}
function eliminarP (producto){
    let productoBuscado = productos.findIndex(produTotal=> produTotal.producto == producto);
    console.log(productoBuscado)
    productos.splice(productoBuscado,1);
}
