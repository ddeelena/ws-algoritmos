//informacion de los usuarios, formulario del producto y factura 
//mostrar y no mostrar dependiendo del onclick
//hacer javascript modulo donde solo se llamen los botones e importe las funciones y datos 
//hacer javascript donde se genere la factura s
// en el del administrador solo hacer las funciones del adminsitrador como ver, agregar, y modificar 
// en el del usuario obtner los datos de el formulario y hacer la factura importando datos del de productos
//en el de productos generar las targetas de los productos 
let url = 'https://629faf37461f8173e4ef06a4.mockapi.io/api/v1/';
//let button = document.getElementById("finalizar");

 export function obtenerDatos(){
    let nombre = document.getElementById("validationCustom01").value;
    let apellido = document.getElementById("validationCustom02").value;
    let correo = document.getElementById("validationCustomUsername").value;
    let direccion = document.getElementById("validationCustom03").value;
    let municipio = document.getElementById("validationCustom04");
    let opcionMunicipio = municipio.options[municipio.selectedIndex].text;
    let numTelefonico = document.getElementById("validationCustom05").value;
    let documento = document.getElementById("validationCustom07").value;
    let user = {
        name: nombre + "   "+ apellido,
        correo: correo,
        direccion : direccion,
        ciudad : opcionMunicipio,
        telefono : numTelefonico,
        documento: documento,
        };
        enviarBaseDeDatos(user);
         return user;
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
