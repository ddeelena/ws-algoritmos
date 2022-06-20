
let url = 'https://629faf37461f8173e4ef06a4.mockapi.io/api/v1/';
//let button = document.getElementById("finalizar");

function validarDatos(){
    let condicion = true;
    let nombre = document.getElementById("validationCustom01").value;
    condicion = validar(nombre)
    let apellido = document.getElementById("validationCustom02").value;
    validar 
    let correo = document.getElementById("validationCustomUsername").value;
    let direccion = document.getElementById("validationCustom03").value;
    let municipio = document.getElementById("validationCustom04");
    let opcionMunicipio = municipio.options[municipio.selectedIndex].text;
    let numTelefonico = document.getElementById("validationCustom05").value;
    let documento = document.getElementById("validationCustom07").value;
}
 export function obtenerDatos(){
 try{
    let nombre = document.getElementById("validationCustom01").value;
    let apellido = document.getElementById("validationCustom02").value;
    let correo = document.getElementById("validationCustomUsername").value;
    let direccion = document.getElementById("validationCustom03").value;
    let municipio = document.getElementById("validationCustom04");
    let opcionMunicipio = municipio.options[municipio.selectedIndex].text;
    let numTelefonico = document.getElementById("validationCustom05").value;
    let documento = document.getElementById("validationCustom07").value;
        let user = {
            name: nombre + " "+ apellido,
            correo: correo,
            direccion : direccion,
            municipio: opcionMunicipio,
            telefono : numTelefonico,
            documento: documento,
            };
            enviarBaseDeDatos(user);
            return user;
 }catch(error){
    console.log(error)
    alert("No se pudo efectuar, por favor intente de nuevo o verifique que haya llenado todo los datos")
 }
}
 function enviarBaseDeDatos(user){
    console.log("subiendo")
    fetch(url+"Compras",{
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            "Content-type":"application/json"
        }
    })
}
export  function imprimirFactura(user){
    if ( user != undefined & user != NaN){
          let contenedorFactura = document.getElementById("contenedorImprimir");
            let div = document.createElement("div");
            div.setAttribute("class","contenedorDatosUsuario");
            let p = document.createElement("p");
            p. innerHTML =`
            Nombre: ${user.name}<br>
            Correo: ${user.correo}<br>
            municipio: ${user.municipio}<br>
            dirección: ${user.telefono}<br>
            documento: ${user.documento}<br><br>
            Productos Comprados:
            `;
            contenedorFactura.appendChild(div);
            div.appendChild(p);
    }
  }
  export function imprimirCarrito(carrito,cont){
    if ( carrito != undefined & carrito != NaN){
        let contenedorFactura = document.getElementById("contenedorImprimir");
        carrito.forEach(element => {
            let div = document.createElement("div");
            div.setAttribute("class","contenedorDatosUsuario");
            let p = document.createElement("p");
            p. innerHTML =`
            Nombre: ${element.name}<br>
            Precio: ${element.precio}<br>
            cantidad: ${element.cantidad}<br>
            `;
            contenedorFactura.appendChild(div);
            div.appendChild(p);
        });
        let p = document.createElement("p");
        p.innerHTML = `
        <br> El total a pagar es de ${cont}`
        contenedorFactura.appendChild(p);
  }
}
 export function validar (dato){
    let condicion = true;
    if (dato.value.length < 1 || dato.value.trim() ==""){
        condicion = false;
    }
}