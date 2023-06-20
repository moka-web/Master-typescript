let persona = {
    nombre:"tomas",
    apellido :"juarez",
    domicilio : {
        pais:"argentina",
        ciudad:{
            nombre : "azul",
            provincia:"buenos aires "
        }
    }
}



// let comprobarprovincia = persona && persona.domicilio && persona.domicilio.pais;

let comprobarprovincia = persona?.domicilio?.ciudad?.nombre
console.log(comprobarprovincia)