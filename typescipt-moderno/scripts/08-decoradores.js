"use strict";
// function mostrarMensaje(){
//     console.log("proyectando la pelicula")
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//si el decorador no va a recibir parametros deberia pasarle un constructor:Function
function proyectar(constructor) {
    constructor.prototype.hacerProyeccion = function (activar) {
        if (activar) {
            console.log("proyecto la pelicula");
        }
        else {
            console.log("cine cerrado x");
        }
    };
}
// un decorador ejecuta algo antes de la case o modifica el comportamiento de una clase 
let Pelicula = class Pelicula {
    constructor(titulo, genero, proyectando) {
        this.titulo = titulo;
        this.genero = genero;
        this.proyectando = proyectando;
    }
};
Pelicula = __decorate([
    proyectar,
    __metadata("design:paramtypes", [String, String, Boolean])
], Pelicula);
//podria declarar la variable como let batman:any para no forzar el tipo de dato 
let batman = new Pelicula("batman begins", "accion", false);
batman.hacerProyeccion(true);
