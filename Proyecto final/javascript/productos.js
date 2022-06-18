//principal 
//botones añadir productoss
//let guardar = document.getElementById("todoProductos");
//let botones = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
window.onload=getProductos();
let finalizar = document.getElementById("finalizar");
let carrito =[];
let productos = [];
//let boton = document.getElementsByTagNameNS("btn btn-sm btn-outline-secondary","main");
finalizar.onclick = function(){
  añadirP()
}

function añadirP(boton){
  let compra = boton;
  let carro = productos.find(producto=> producto.id == compra)
  carrito.push(carro);
  console.log(carrito)
  total();
  //mostrarCarrito();
}

async function cargarinfo (){
    let respuesta = await fetch ("https://629faf37461f8173e4ef06a4.mockapi.io/api/v1/productos");
    return respuesta.json();
}
async function getProductos(){
productos= await cargarinfo();
console.log(productos);
mostrarProductos();
}

//crear();
function total(){
  let cont =0;
  carrito.forEach(categoria=>{
      productos.forEach(obj => {
          obj.id == categoria ? cont+=(obj.precio) : cont+=0
      });
  })
  //console.log(cont);
}

function mostrarProductos(){
  let containerProductos= document.getElementById("productosContainer")
  let divContainer = document.createElement("div");
  divContainer.setAttribute("class","album py-5 bg-light")
  let container = document.createElement("div");
  container.setAttribute("class", "container");
  let contenedor = document.createElement("div");
  contenedor.setAttribute("class","row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3")
  containerProductos.appendChild(divContainer);
  divContainer.appendChild(container);
  container.appendChild(contenedor);
  //let divContainer= document.getElementById("productsContainer");
  productos.forEach(producto=>{
  let div = document.createElement("div");
  div.setAttribute("class","col");
  let divCard= document.createElement("div");
  divCard.setAttribute("class","card shadow-sm organizar");
  divCard.setAttribute("width","200");
  divCard.setAttribute("height","400");
  let img= document.createElement("img");
  img.setAttribute("class","bd-placeholder-img card-img-top");
  img.setAttribute("class","img-fluid");
  img.setAttribute("src",`${producto.foto}`);
  img.setAttribute("width","100%");
  img.setAttribute("height","225");
  img.setAttribute("alt","Eniun");
  let cardBody=document.createElement("div");
  cardBody.setAttribute("class","card-body");
  let cardText=document.createElement("p");
  cardText.setAttribute("class","card-text");
  cardText.innerHTML=`${producto.name}- ${producto.precio}`;
  let containerbutton = document.createElement("div");
  containerbutton.setAttribute("class","d-flex justify-content-between align-items-center");
  let contenederboton = document.createElement("div");
  contenederboton.setAttribute("class","btn-group");
  let button = document.createElement("button");
  button.type = "button";
  button.innerHTML = "Agregar"
  button.setAttribute("class","btn btn-sm btn-outline-secondary");
  button.setAttribute("id",producto.id);
  button.onclick = añadirP;
  contenedor.appendChild(div);
  div.appendChild(divCard); 
  divCard.appendChild(img);
  divCard.appendChild(cardBody);
  cardBody.appendChild(cardText);
  cardBody.appendChild(containerbutton);
  containerbutton.appendChild(contenederboton);
  contenederboton.appendChild(button);
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



function mostrarCarrito(){
  //tbody.innerHTML=``;
  let tbody = document.getElementById("tbody")
   carrito.map(item =>{
      let new_tr= document.createElement(`tr`)
      new_tr.classList.add(`itemCart`)
      let content = `
      <th scope="row">1</th>
      <td class="table__productos">
        <img src=${item.foto}  alt="">
        <h6 class="title">${item.name}</h6>
      </td>
      <td class="table__price"><p>${item.precio}</p></td>
      <td class="table__cantidad">
        <input type="number" min="1" value=${item.cantidad} class="input__elemento">
        <button class="delete btn btn-danger">x</button>
      </td>
      
      new_tr.innerHTML= content;
      tbody.appendChild(new_tr);`
  })
}
