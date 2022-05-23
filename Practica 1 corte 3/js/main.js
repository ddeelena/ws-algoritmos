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
    buscarCategoria();
    alert(`Hay ${productos.length} en el inventario`);
    totalPrecio()
}
disminuir.onclick = function(){
    let productoAd = document.getElementById("productoAD").value;
    disminuirP(productoAd);
};
aumentar.onclick = function(){
    let productoAd = document.getElementById("productoAD").value;
    aumentarP(productoAd); 
}
eliminar.onclick = function(){
    let productoAd = document.getElementById("productoAD").value;
    eliminarP(productoAd)
}
buscar.onclick = function(){
    let productoAd = document.getElementById("productoAD").value;
    buscarNombre(productoAd);
}
ordenar.onclick = function(){
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
    let conte =0;
    for (let k=0; k<categorias.length;k++){
     categoriax = productos.filter(produTotal => produTotal.categoria === categorias[k]);
     var h3 = document.createElement("h3");
     h3.innerHTML= `hay ${categoriax.length} productos en la categoria ${categorias[k]}<br>`
     mostrar.appendChild(h3)
     console.log(`hay ${categoriax.length} productos en la categoria ${categorias[k]}<br>`);
    }
}

function totalPrecio(){
    let cont =0;
    productos.forEach(object =>{object.precio
            cont += object.precio;
    });
    var h3 = document.createElement("h3");
    h3.innerHTML= `El total de los precios ${cont}`;
    mostrar.appendChild(h3)
    console.log(cont)
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
    for (let i = 0; i < productos.length; i++){
        orden.push(productos[i].producto)
    }
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
