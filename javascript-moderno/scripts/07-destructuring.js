let frutas = ["manzana","pera ", "naranja"]; 

// let manzana = frutas[0];
//etc 

let [manzana , pera , naranja] = frutas;

// Sirve tambien para objetos 


//desestructurar string 


let usuario = " hola mi nombre es usuario";
//con split obtengo los valor indicacndo un separador
let [uno, dos ,tres ,cuatro, cinco] = usuario.split("")

// crear variables

let lenguaje = "js" , 
    framework = "vanilla"


//utilidad parametros funciones 

function mostrarUsuario ({nombre, apellido = undefined,ciudad}){
    console.log(nombre , apellido ,ciudad)
}

mostrarUsuario({nombre:"tomas",ciudad:"ciudad"})


