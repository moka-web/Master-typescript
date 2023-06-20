// //variables : var , let, const  
// // contenedor de informacion o caja donde guardamos datos 

// //VAR TIENE AMBITO GLOBAL O FUNCIONAL
// var nombre = "mi nombre"

// function mostrarNombre (){
//     var nombre = "pepa";
//     // la variable apellido existe solamente en el scope o ambito de la funcion mostrarNombre 
//     var apellido = "pig"
//     console.log("dentro",nombre )
// }


// mostrarNombre();
// console.log( "fuera" ,nombre)

//LET : ambito de bloque 
//mejora el rendimiento a la hora de declarar las variables 


let pais = "argentina";


// console.log(pais)

function mostrarPais(){
    // console.log(pais)
}

// mostrarPais()


if( pais == "argentina"){

    //las variables declaradas con let van a existir y pueden ser llamadas dentro del bloque o el ambito de la funcion no puedo llamarla desde afuera 
    let  continente = "latinoamerica";
    // console.log(continente)

}


for(contador = 0 ;  contador <=5 ; contador++){
    // console.log(contador)
}



//CONST : Crear constantes o variables cuyo contenido no es variable

let edad = 18 

// console.log(edad)

edad = 15 

// console.log(edad)

// cuando las variables se declaran con let se les puede asignar un nuevo valor 


const ciudad = "Buenos Aires";
const fechaDeNaciemiento = "11/8/93"

console.log(ciudad,fechaDeNaciemiento)

// las variables declaradas con const van a poder ser leidas pero sus valores no pueden ser modificados 