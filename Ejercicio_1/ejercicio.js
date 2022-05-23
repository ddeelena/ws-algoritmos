
let gratis = true;

function inscripcion(){
    let lugar = prompt("¿Vive en armenia?");
    if(lugar == "Si" || lugar == "si" ){
        let grado = prompt("¿En que grado esta?, digite en numero");

        if (grado == "11" || grado == "10"){
            alert("Su inscripcion a sido realizada con exito");
            if (gratis == true){
                alert("Usted tiene derecho al formulario de inscripcion gratis");
                gratis = false;
            }else{
              alert("El valor de la inscripcion es de  100.000" );
            }
        }else{
            alert("No se puede realizar la inscripcion, ya que usted no esta en 11 o 10")
        }
    }else{
        alert("No se pudo realizar la inscripción, usted no cuenta con los requisitos");
    }
}

for (let i =0; i < 3; i++){
    inscripcion();
}
