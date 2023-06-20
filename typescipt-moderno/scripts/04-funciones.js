"use strict";
//uso normal
function saludo(nombre) {
    return "saludo para " + nombre;
}
console.log(saludo("tomas"));
//VOID o nada 
//idicamos que la funcion no va a devolver nada 
function mostrarFecha() {
    console.log("fecha");
}
//never - fin de la aplicacion 
// detiene el ciclo de la aplicacion , todo lo que quede debajo de la invocacion no se va a ejecutar 
function finDeApp() {
    throw new Error("error");
}
//parametros funciones 
// ? indica opcional si no se pasa el parametro el valor es undefined
function mostrarPais(pais = "argentina", continente) {
    return pais + " " + continente;
}
console.log(mostrarPais("argelia", "africa"));
//tipo funcion 
//indico que a la variable se le va a asignar una funcion que recibe y devuelve un string 
let grupos;
grupos = (datos) => {
    return "hola  " + datos.toString();
};
console.log(grupos(["la renga", "los palmeras"]));
function tekken(personaje, atuendo) {
    return `el personaje es ${personaje}} ${atuendo}`;
}
