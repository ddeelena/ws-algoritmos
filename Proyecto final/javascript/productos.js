let carrito =[];
let productos = [];
let cont = 0;
let usuarios =[];
function agregarP(boton){
  let container = document.getElementById("añadidosCarrito");
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
  let produc = productos.find(producto => producto.id == boton.id)
  let producC = carrito.includes(produc);
  console.log(producC);
  produc.cantidad = 1;
  if(producC == false){
    carrito.push(produc);
  }
  let cont = total();
  mostrarCarrito(cont);
}
function aumentarP(producto){
  let  elementIndex = carrito.findIndex((produTotal=> produTotal.name == producto.name));
 if(elementIndex>=0){
  carrito[elementIndex]["cantidad"] += 1;
  let cont = total();
  let container = document.getElementById("añadidosCarrito");
  borrarHijos()
  mostrarCarrito(cont);
}}
function disminuirP(producto){
let  elementIndex = carrito.findIndex((produTotal=> produTotal.name == producto.name));
if(elementIndex>=0){
carrito[elementIndex]["cantidad"] -= 1;
if ((carrito[elementIndex]["cantidad"])<=0){
  carrito[elementIndex]["cantidad"] = 0;
  alert("no se puede compara cantidades negativas")
}else{
  let cont = total();
borrarHijos();
mostrarCarrito(cont);
}
}}
function borrarHijos (){
  let container = document.getElementById("añadidosCarrito");
  let total = document.getElementById("total");
  while(container.firstChild){
    container.removeChild(container.firstChild);
  }
  while (total.firstChild) {
    total.removeChild(total.firstChild);
  }
}
function borrarCarrito(producto){
  console.log(producto)
  let  elementIndex = carrito.findIndex((produTotal=> produTotal.name == producto.name));
  try{
    if(elementIndex>=0){
      carrito.splice(elementIndex,1);
      console.log(carrito);
      borrarHijos();
      let cont = total();
      mostrarCarrito(cont);
    }else{
      console.log("no existe tal producto")
    }
  }catch(error){
    console.log(error);
    console.log(producto)
    let  element = carrito.find((produTotal=> produTotal.name == producto.name));
    let  elementIndex = carrito.findIndex((produTotal=> produTotal.name == element.name));
    carrito.splice(elementIndex,1);
  }
}
export async function cargarinfo (){
  try{
    let respuesta = await fetch ("https://629faf37461f8173e4ef06a4.mockapi.io/api/v1/productos");
    return respuesta.json();
  }catch(error){
    console.log(respuesta);
    console.log(error);
  }

}
export async function getProductos(){
try{
  productos= await cargarinfo();
  mostrarProductos();
}catch(error){
  let respuesta = await fetch ("https://629faf37461f8173e4ef06a4.mockapi.io/api/v1/productos");
  productos = await respuesta.json();
  mostrarProductos();
}
}
//crear();
export function total(){
  let cont =0;
  if(Object.keys(carrito).length>0){
    carrito.forEach(categoria=>{
      productos.forEach(obj => {
          obj.id == categoria.id ? cont+=((obj.precio)*(obj.cantidad)) : cont+=0
      });
  })
  }
  return cont;
}

 export function mostrarProductos(){
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
  img.setAttribute("class","tamaño");
  img.setAttribute("src",`${producto.foto}`);
  img.setAttribute("width","100%");
  img.setAttribute("alt","Eniun");
  let cardBody=document.createElement("div");
  cardBody.setAttribute("class","card-body");
  let cardText=document.createElement("p");
  cardText.setAttribute("class","card-text");
  cardText.innerHTML=`${producto.name}<br>${producto.descripcion}<br> Precio: ${producto.precio}`;
  let containerbutton = document.createElement("div");
  containerbutton.setAttribute("class","d-flex justify-content-between align-items-center");
  let contenederboton = document.createElement("div");
  contenederboton.setAttribute("class","btn-group");
  let button = document.createElement("button");
  button.type = "button";
  button.innerHTML = "Agregar"
  button.setAttribute("class","btn btn-danger");
  button.setAttribute("id",producto.id);
  button.addEventListener("click",()=>{agregarP(producto)})
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

export function mostrarCarrito(cont){
  try{
    carrito.forEach(producto=>{
      let container = document.getElementById("añadidosCarrito");
      let total = document.getElementById("total");
      let div = document.createElement("div");
      div.setAttribute("class", "item");
      div.setAttribute("id",producto.id);
      div.innerHTML="<br>";
      let img = document.createElement("img");
      img.setAttribute("src", `${producto.foto}`);
      let containerTextos =document.createElement("div");
      containerTextos.setAttribute("class", "textos");
      let p= document.createElement("p");
      p.setAttribute("class","nombre-item");
      p.innerHTML = producto.name;
      let p2 = document.createElement("p");
      p2.innerHTML = `El precio del producto es: ${producto.precio}`;
      let buttonborrar = document.createElement("button");
      buttonborrar.setAttribute("id","buttbor")
      buttonborrar.addEventListener("click",()=>{borrarCarrito(producto)});
      let i = document.createElement("i");
      i.setAttribute("class", "fa-solid fa-trash");
      let buttonmas = document.createElement("button");
      buttonmas.innerHTML = "+";
      let buttonmenos = document.createElement("button");
      buttonmenos.innerHTML = "-";
      buttonmas.type = "button";
      buttonmas.addEventListener("click",()=>{aumentarP(producto)});
      buttonmenos.type = "button";
      buttonmenos.addEventListener("click",()=>{disminuirP(producto)});
      buttonmas.setAttribute("class","btn btn-dark");
      buttonmas.setAttribute("id","buttonmas");
      buttonmas.setAttribute("id","buttonmenos");
      buttonmenos.setAttribute("class","btn btn-dark");
      let p3 = document.createElement("p");
      p3.innerHTML = `Cantidad : ${producto.cantidad}`;
      buttonborrar.appendChild(i);
      container.appendChild(div);
      div.appendChild(img);
      div.appendChild(containerTextos);
      containerTextos.appendChild(p);
      containerTextos.appendChild(p2);
      containerTextos.appendChild(p3);
      containerTextos.appendChild(buttonmas);
      containerTextos.appendChild(buttonmenos);
      containerTextos.appendChild(buttonborrar);
      while (total.firstChild) {
        total.removeChild(total.firstChild);
      }
        let precioTotal = document.createElement("p");
        precioTotal.innerHTML = `El total de la compra es: ${cont}`;
        total.appendChild(precioTotal);
  })
  }catch(error){
    console.log(error);
    alert("Se ha presentado un problema al agregar al carrito, intentalo de nuevo en un rato");
  }
}
 export function factura (){
  return carrito;
 }
export  function imprimirFactura(user){
  if ( user != undefined & user != NaN){
        let contenedorFactura = document.getElementById("contenedorFactura");
          let div = document.createElement("div");
          div.setAttribute("class","contenedorDatosUsuario");
          let p = document.createElement("p");
          p. innerHTML =`
          Nombre: ${user.name}<br>
          Correo: ${user.correo}<br>
          municipio: ${user.municipio}<br>
          dirección: ${user.telefono}<br>
          documento: ${user.documento}<br>
          `;
          contenedorFactura.appendChild(div);
          div.appendChild(p);
  }
}