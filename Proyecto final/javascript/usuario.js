//informacion de los usuarios, formulario del producto y factura 
//mostrar y no mostrar dependiendo del onclick
let boton = document.getElementById("confirmar");
let user = `dquejada1028@cue.edu.co`;
let contra = `hola`;
boton.onclick = function(event){
    event.preventDefault();
    mostrarOpciones()
}
 document.getElementById("agregarProducto").style.display= "none";
 document.getElementById("hacer").style.visibility="hidden";
 document.getElementById("mostrarProducto").style.display ="none";
 function mostrarOpciones(){
    let usuario = document.getElementById("floatingInput").value;
    let contraseña = document.getElementById("floatingPassword").value;
    if( usuario== user && contraseña==contra){
        document.getElementById("hacer").style.visibility = "visible"; 
        document.getElementById("entrar").style.display = "none";
    }else alert ("no se pudo")
 }
function añadirP(){
    
}