let personas = ["tomas","pepe","pistola" , "guachin"]

// buscar en un array find , devuelve el elemento que cumpla con la condicion que se le pase 

let buscarPersona = personas.find(persona=>{
    return persona == "tomas"
})

console.log(buscarPersona)

//findIndex 


let buscarIndiceDeNombre = personas.findIndex(persona=>{
    return persona == "tomas"
})

console.log(buscarIndiceDeNombre)


// crear array basandome en un objeto iterable 

let arrayLetras = Array.from("tomas.com");
console.log(arrayLetras)
let arrayNummerosCuadrados= Array.from([1,2,3,4,5,6], numero=>{
    return Math.pow(numero,2)
})
console.log(arrayNummerosCuadrados)


//comprobar si existe un elemento dentro del array 

console.log(personas.includes("tomas")) // retorna un boolean indicando si existe o no el elemento


//filtrar arrays retornar un nuevo arreglo con los elementos que cumplan con la condicion

let nuevasgente= personas.filter(personas=>personas.length >= 5);
console.log(nuevasgente);

