

let titulo = "el señor de los anillos "
let genero = "aventura"
let duracion = "3 horas"

const pelicula ={
    titulo,
    genero,
    duracion, 
    [genero + "2023"] : "chan chan ",
    mostrar : function(){
        return this.titulo +" "+this.genero;
    }
}
// con object.values puedo obtener los valores del objeto para almacenarlos en una variable 
console.log(Object.values(pelicula))


Object.entries(pelicula).forEach(([clave , valor])=>{
    return console.log(clave , valor)
})



