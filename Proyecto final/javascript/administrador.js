let url = 'https://629faf37461f8173e4ef06a4.mockapi.io/api/v1/';
let user = `dquejada1028@cue.edu.co`;
let contra = `hola`;
export function mostrarOpciones(){
    let usuario = document.getElementById("floatingInput").value;
    let contraseña = document.getElementById("floatingPassword").value;
try{
    if( usuario== user && contraseña==contra){
        document.getElementById("hacer").style.display = ""; 
        document.getElementById("entrar").style.display = "none";
    }else alert ("no se pudo iniciar sesion")
}catch(error){
    console.log(error)
    alert("Lo sentimos hubo un error en el sistema intentelo más tarde");
    let user = `dquejada1028@cue.edu.co`;
    let contra = `hola`;
    if( usuario== user && contraseña==contra){
        document.getElementById("hacer").style.display = ""; 
        document.getElementById("entrar").style.display = "none";
    }else alert ("no se pudo iniciar sesion")
}

 }
 export function crearC(){
    let categoria = document.getElementById("categoria1").value
    let  selection = document.createElement("option");
    try {
        if (categoria != null & categoria != NaN & categoria !== ""){
            selection.innerHTML= categoria;
            opciones.appendChild(selection);
        }else{
            alert("Estas intentando crear una categoria invalida")
        }
    }catch(error){
        console.log(error);
        alert("Estas intentando crear una categoria invalida o hay un error al crear, intente de nuevo");
            categoria = "NUEVA";
            selection.innerHTML= categoria;
            opciones.appendChild(selection);
    }
}
 export function añadirProducto(){
    let opciones = document.getElementById("opciones");
    let opcion = opciones.options[opciones.selectedIndex].text;
    let producto = (document.getElementById("producto1")).value
    let precio = parseInt(document.getElementById("precio1").value)
    let cantidad = parseInt(document.getElementById("cantidad1").value)
    let foto = document.getElementById("foto1").value;
    let id = document.getElementById("id1").value;
    console.log(id);
    let  produTotal ={
        "name":producto,
        "precio": precio,
        "cantidad": cantidad,
        "foto": foto,
        "id": id,
        "categoria": opcion,
    }
    console.log(produTotal)
    enviarBaseDeDatos(produTotal);
}
function enviarBaseDeDatos(produTotal){
    fetch(url+"productos",{
        method:'POST',
        body:JSON.stringify(produTotal),
        headers:{
            "Content-type":"application/json"
        }
    })
    alert("se creo con exito");
}
export function mostrar(producto,container){
    let div =  document.getElementById(container);
    console.log(producto);
    let cadena = `
    Categoria: ${producto.categoria}<br>
    Nombre: ${producto.name}<br>
    Precio: ${producto.precio}<br>
    Cantidad existente: ${producto.cantidad}<br>
    Id: ${producto.id}`;
    var h3 = document.createElement("h3");
    h3.innerHTML= cadena ;
    div.appendChild(h3);
}
 export function deleteProducto(id){
    fetch(url+"productos/"+id,{
        method:'DELETE'
    })
    .then(response=>response.json());
    alert(`Se ha eliminado ${id} con exito`)
} 
 export function actuality (id,product){
    fetch(url+"productos/"+id,{
        method:'PUT',
        body:JSON.stringify(product),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then(response=>response.json());
    console.log("actualizando");
    
}
 export function modifyArray(){
    let productoAmodificar = document.getElementById("productoAmodificar").value;
    console.log(productoAmodificar);
     buscado = productos.find(producto => producto.id == productoAmodificar)
    console.log(buscado);
    //mostrar(buscado, "imprimir");
    modificarDatos(buscado);
    
    //deleteProducto(buscado.id);
}
function modificarDatos(producto){
    let datosModify = document.getElementById("datosModify");
    for( let  i in  producto){
    let div = document.createElement("div");
    div.setAttribute("class","form-group col-md-6")
    let label = document.createElement("label");
    label.innerHTML= `- ${i} :`;
    let input = document.createElement("input");
    input.setAttribute("id",i);
    input.setAttribute("value", producto[i])
    div.appendChild(label);
    div.appendChild(input);
    datosModify.appendChild(div);
  }
}
 export function obtenerDatos(){
    let categoria = (document.getElementById("categoria")).value;
    let producto = (document.getElementById("name")).value;
    let precio = parseInt(document.getElementById("precio").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let foto = document.getElementById("foto").value;
    let id = document.getElementById("id").value;
    console.log(categoria);
    console.log(id);
    let  product ={
        "name":producto,
        "precio": precio,
        "cantidad": cantidad,
        "foto": foto,
        "categoria": categoria,
        "id": id,
    }
    console.log(product);
    return product;
}

    //Con esta termianda solo faltaria la funcion de la factura tanto para mostrar la factura que seria 
    // imprimir los datos del usuario y la list del carrito desde el principal, subir eso a la api a un nuevo 
    //recurso y al llamar esa funcion invocada por el boton se imprima 
    // hacer lo de restar cantidades en el objecto y asi mismo se debe actualizar en la api
    // solo faltaria mejorar el dicho de impresion en el de conocer productos y los pequeños detalles de la interfez
    // como el carrito alinear los items, definir si voy a usar el carrito en tabla o no y ya con eso acabo el proyecto
    //meta acabar antes de domingo a las 6 pm 
    // 5:05 am 