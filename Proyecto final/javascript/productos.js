//principal 
//botones añadir productoss

let carrito =[];
function añadirP(boton){
  let compra = boton.id;
  carrito.push(compra);
  console.log(carrito)
  total();
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
function total(){
  let cont =0;
  carrito.forEach(categoria=>{
      productos.forEach(obj => {
          obj.id == categoria ? cont+=(obj.precio) : cont+=0
      });
  })
  console.log(cont);
}

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

function finalizarCompra(){
  if(descuent>1){
      montoT= totalTt - descuent;
      alert (`El total a pagar es ${totalTt} y con el descuento de ${descuent}, te queda en ${montoT}`);
  }else{
      montoT= totalTt;
      alert(`El total a pagar es ${montoT}`);
  }
}

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function confirmar() {
  finalizarCompra();
}

function cancelar(event) {
  alert( "Cancelaste la finalización de la compra");
} 
  confirmacion.onclick= function(){
  ask("Quieres finalizar la compra", confirmar, cancelar);
} 