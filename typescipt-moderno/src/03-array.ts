
let personas:string[] = ["tomas" ,"perro", "gato"];

//implicitamente personas es un array de strings por lo tanto no puedo agregarle cualquier tipo de dato

personas.push("carlitos");

// console.log(personas)


let years:number[]=[1,2,3,4];

years.push(2025);

// console.log(years);

//TUPLAS

let pelicula :[string,boolean,number] = ["batman inicia" , true , 1990];
// la tupla siempre mantiene la misma estructura siempre debe haber un string, un boolean y un number
// pelicula.push(123123);
// console.log(pelicula);




// ENUM - enumeracion
//no se pueden modificar los datos , es un "objeto..." de solo lectura
enum DatosPersonales{
    nombre= "tomas",
    direccion = "street",
    ciudad = "pueblo fantasma",
    dni = 123312
}


// console.log( DatosPersonales)


//CAST O CONVERTIR A OTRO TIPO 

let texto_random:any =  1234; 

let frase_final:string = <string>texto_random

console.log(frase_final);


