//separadores numericos _ _

let numero = 2_000_000_000

console.log(numero)

//replace replace all
let frase = "aca vengo rtascandome un huevo huevo "

// let nueva_frase = frase.replace(/aca/g , "alla")

let nueva_frase = frase.replaceAll("huevo" , "tuerca")


console.log(nueva_frase)

//asignadores logicos 


let nombre  = null //= "tomas";

let edad = 123 ;


nombre ||= edad;

let comprobar = nombre || edad;
console.log(comprobar)