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
    let descripcion = document.getElementById("descripcion").value
    console.log(id);
    let  produTotal ={
        "name":producto,
        "precio": precio,
        "cantidad": cantidad,
        "foto": foto,
        "id": id,
        "categoria": opcion,
        "descripicion": descripcion
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
function borrarHijos(contenedor){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
      }
} 
export function mostrar(producto,container){
    let div =  document.getElementById(container);
    borrarHijos(div);
    console.log(producto);
    let cadena = `
    Categoria: ${producto.categoria}<br>
    Nombre: ${producto.name}<br>
    Precio: ${producto.precio}<br>
    Cantidad existente: ${producto.cantidad}<br>
    Id: ${producto.id}<br>
    Descripcion: ${producto.descripcion}`;
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
 export async function modifyArray(productos){
    let productoAmodificar = (document.getElementById("productoAmodificar").value);
    console.log(productoAmodificar);
     let buscado = productos.find(producto => producto.name == productoAmodificar)
    console.log(buscado);
    //mostrar(buscado, "imprimir");
    modificarDatos(buscado);
    
    //deleteProducto(buscado.id);
}
function modificarDatos(producto){
    let datosModify = document.getElementById("datosModify");
    borrarHijos(datosModify);
    for( let  i in  producto){
    let div = document.createElement("div");
    div.setAttribute("class","form-group col-md-6 inpus");
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
    let categoria = (document.getElementById("categoria").value);
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
 export function opcionesConocer(productos){
    let verProducto = document.getElementById("verProducto");
    productos.forEach(element => {
        let opcion = document.createElement("option");
        opcion.innerHTML= element.name;
        verProducto.appendChild(opcion);
    });
}