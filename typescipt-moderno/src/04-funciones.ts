
//uso normal

function saludo (nombre:string):string{
    
    return"saludo para " + nombre

}

console.log(saludo("tomas"))



//VOID o nada 
//idicamos que la funcion no va a devolver nada 
function mostrarFecha ():void{
  
    console.log("fecha")

}



//never - fin de la aplicacion 
// detiene el ciclo de la aplicacion , todo lo que quede debajo de la invocacion no se va a ejecutar 

function finDeApp():never {
    throw new Error("error")
}

//parametros funciones 
// ? indica opcional si no se pasa el parametro el valor es undefined

function mostrarPais(pais:string = "argentina",continente?:string ):string{
    
    return pais + " " + continente

}



console.log(mostrarPais("argelia","africa"))


//tipo funcion 
//indico que a la variable se le va a asignar una funcion que recibe y devuelve un string 
let grupos: (datos:string[])=> string;

grupos = (datos:string[])=>{
    return "hola  " + datos.toString()
}
console.log(grupos(["la renga" , "los palmeras"]));


//tipos de datos literales 
//traje recibe 4 parametros posibles y solamente esos cuatro datos son validos como parametros
//traje:1|2|3|4

//tipo personalizado

type traje = 1|2|3|4| "batman"|"boleadora"



function tekken (personaje:string,atuendo:traje):string{
return  `el personaje es ${personaje}} ${atuendo}`
}


