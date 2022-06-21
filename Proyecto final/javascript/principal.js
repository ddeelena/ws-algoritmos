
//import { cargarinfo } from "./productos.js";
import{getProductos, factura, total} from "./productos.js";
import{obtenerDatos,imprimirFactura,imprimirCarrito} from "./usuario.js";
document.getElementById("contenedorFormulario").style.display = "none";
document.getElementById("contenedorFactura").style.display = "none";
window.onload=getProductos();
let productos =[];
let url = 'https://629faf37461f8173e4ef06a4.mockapi.io/api/v1/';
let usuarios = [];
let button = document.getElementById("finalizar");
let irCarrito = document.getElementById("irCarrito");
let irCarrito2 = document.getElementById("irCarrito2")
let car = document.getElementById("compraAhora");
let finalizarCompra = document.getElementById("compraFinalizada"); 
//mostrar o no los html
finalizarCompra.addEventListener("click",()=>{
    document.getElementById("contenedorFormulario").style.display = "none";
    document.getElementById("contenedorMenu").style.display = "";
});
car.addEventListener("click",()=>{
    document.getElementById("contenedorMenu").style.display = "none";
    document.getElementById("contenedorFormulario").style.display = "";
    //mostrarCarrito();
});
irCarrito2.onclick = function(){
    document.getElementById("contenedorFormulario").style.display = "none";
    document.getElementById("contenedorMenu").style.display = "";
}
irCarrito.onclick = function(){
    document.getElementById("contenedorFormulario").style.display = "";
    document.getElementById("contenedorMenu").style.display = "none";
    //mostrarCarrito();
}

button.addEventListener("click",()=> {
    let user = obtenerDatos();
    usuarios.push(user);
    let carrito = factura();
    console.log(carrito);
    let cont = total();
    try{
        if (Object.keys(carrito).length != 0){
            document.getElementById("contenedorFormulario").style.display = "none";
            document.getElementById("contenedorFactura").style.display = "";
            imprimirFactura(user);
            imprimirCarrito(carrito,cont);
        }else{
            alert("no has agregado nada al carrito")
        }
    }catch(error){
        console.log(error);
        alert("Hubo una falla en el sistema, te regiremos a la pagina de inicio")
        document.getElementById("contenedorFormulario").style.display = "none";
        document.getElementById("contenedorMenu").style.display = "";
    }
})
