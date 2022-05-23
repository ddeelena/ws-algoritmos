
let x = document.getElementById("opciones");

let añadirH = document.getElementById("añadirH");
let añadirF = document.getElementById("añadirF");
let añadirL = document.getElementById("añadirL");
let añadirP = document.getElementById("añadirP");

let totalTt = 0;
let montoT = 0;
let descuent = 1; 
let H,P,F,L;
let HT = 30, PT = 50, FT =50, LT = 20;

añadirH.onclick = function(event){
    event.preventDefault();
    addPrecioH();
}

añadirF.onclick = function(event){
    event.preventDefault();
    addPrecioF();
}

añadirL.onclick = function(event){
    event.preventDefault();
    addPrecioL();
}
añadirP.onclick = function(event){
    event.preventDefault();
    addPrecioP();
}
descuento.onclick = function(event){
    event.preventDefault();
    generarDescuent();
}
montoT.onclick = function(){
    finalizarCompra();
}

function addPrecioH() {
    let cantiH = parseInt(document.getElementById("canH").value);
    let si = maxi(cantiH,HT);
    if( si == 1){
        console.log(cantiH) 
        let precio = 15000;
        let compraH = totalTt + (precio * cantiH);
        totalTt += compraH;
        console.log(compraH);
        let totalH = document.getElementById("numTH");
        totalH.innerHTML = `$` + compraH;
    };
};

function addPrecioL() {
    let cantiL = parseInt(document.getElementById("cantL").value);
    let si = maxi(cantiL,LT);
    if( si == 1){
    let precio = 3500;
    let compraL=  (precio * cantiL);
    totalTt += compraL;
    console.log(compraL);
    let totalL = document.getElementById("numTL");
    totalL.innerHTML = `$` + compraL
    };
};
function addPrecioF() {
    let cantiF = parseInt(document.getElementById("cantF").value);
    let si = maxi(cantiF,FT);
    if( si == 1){
    let precio = 5000;
    let compraF=  (precio * cantiF);
    totalTt += compraF;
    console.log(compraF);
    let totalF = document.getElementById("numTF");
    totalF.innerHTML = `$` + compraF
    };
};
function addPrecioP() {
    let cantiP = parseInt(document.getElementById("cantP").value);
    let si = maxi(cantiP,PT);
    if( si == 1){
    let precio = 2000;
    let compraP= (precio * cantiP);
    totalTt += compraP;
    console.log(compraP);
    let totalP = document.getElementById("numTP");
    totalP.innerHTML = `$`+ compraP
    };
};

function generarDescuent(){
    if(totalTt >= 35000 ){
        descuent = Math.round(Math.random(10,1)+1);
        descuent *= 5500;
        console.log(descuent);
        alert("Tu descuanto fue de " + descuent);
    }else (alert("Para ganar un descuento, debes comprar de 35000 o superiores"));
}

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
    chao();
  }
  
  function cancelar(event) {
    alert( "Cancelaste la finalización de la compra");
  } 
    confirmacion.onclick= function(){
    ask("Quieres finalizar la compra", confirmar, cancelar);
} 


function maxi(cantidad,total){
    if (cantidad >= total){
        alert ("No se puede comprar más de " + total);
        return 0;
    }else return 1;
}

function chao(){
    alert("Fue un placer servirte que tengas un buen día");
}


