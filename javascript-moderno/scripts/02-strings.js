

document.addEventListener("DOMContentLoaded", function(){
    let nombre= "tomas ";
    let apellido = "juarez";
    let profesion = "desarrolador web"

    let plantilla = `
    ${nombre}
    ${apellido}
    ${profesion}
    `
    function ficha (nombre, apellido,profesion){

    let fichaTecnica = 
    `<div>
        <h1>${nombre}</h1>
        <h2>${apellido}</h2>
        <h3>${profesion}</h3>
    </div>`;

    return fichaTecnica;}

    console.log(plantilla);

    let cajaFichas = document.createElement("section");
   
cajaFichas.innerHTML =  ficha("tomas","juarez","programador")
;
    document.body.appendChild(cajaFichas) ; 
},false)