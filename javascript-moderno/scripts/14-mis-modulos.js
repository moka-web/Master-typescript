
//podria declarar las funciones declarandolas como  export default function
 function imprimirArray (datos){
    datos.forEach(element => {
        console.log(element)
    });

    return datos 
}


export default imprimirArray;


//podria exportar un objeto con mas de una funcion tambien sin declarar export default function
 