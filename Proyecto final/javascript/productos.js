//principal 
//botones añadir productoss


let añadir = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
añadir.onclick = function(){
    //let producto = document.getElementById("")
    añadirP()
}
function añadirP(){
    //let producto = document.getElementById("");
    if(usuario.tipo=="admin"){
        document.getElementById("").style
    }
}
let productos = [];
async function cargarinfo (){
    let respuesta = await fetch ("https://629faf37461f8173e4ef06a4.mockapi.io/api/v1/productos");
    return respuesta.json();
}
async function getProductos(){
productos= await cargarinfo();
console.log(productos);
}
getProductos();
crear();
let guardar = document.getElementById("todoProductos")

 function crear(){
    let produc = document.createElement("div");
    productos.forEach(producto=>{
        produc.innerHTML += `               
        <div class="col">
        <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" src=${producto.foto} width="100%" height="225" class="img-fluid" alt="Eniun" >
          <div class="card-body">
            <p class="card-text">${producto.name}</p>
            <p>${producto.precio}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" id="pinturaA">Agregar</button>
              </div>
            </div>
          </div>
        </div>
        </div>`;
    guardar.appendChild(produc);
    console.log(produc);
    })
 }
productos.forEach(item=>{
console.log(item)})