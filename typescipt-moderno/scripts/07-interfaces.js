"use strict";
//interfaces que propiedades va a tener un objeto , ***definir*** propiedades y contenido de una clase 
//interface objeto literal
let gta = {
    titulo: "gta 5",
    categoria: "rpg",
    edad: 18,
    mostrar() {
        console.log(this.titulo + this.categoria);
    },
    actualizar(consola) {
        console.log("buscando actualizaciones");
        return "actualizado";
    }
};
console.log(gta.actualizar("actualizar"));
//clase 
//para crear nuevas propiedades tengo que asegurarme que esten previamente declaradas en la interface 
class Fifa {
    constructor(titulo, categoria, edad, duracion, lanzado) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.edad = edad;
        this.duracion = duracion;
        this.lanzado = lanzado;
    }
    mostrar() {
        console.log(this.titulo + this.categoria);
    }
    actualizar(consola) {
        console.log("buscando actualizaciones");
        return "actualizado";
    }
}
let fifa_23 = new Fifa("fifa23", "fulbo", 18);
console.log(fifa_23.mostrar());
