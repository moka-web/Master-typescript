"use strict";
class Coche {
    constructor(marca, modelo, year, color, arrancado = false, velocidad = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.arrancado = arrancado;
        this.velocidad = velocidad;
        this.prueba = "tomas juarez dev";
    }
    arrancar() {
        this.arrancado = true;
    }
    apagar() {
        this.arrancado = false;
    }
    mostrarTodo() {
        return this.marca + " " + this.modelo;
    }
    mostrarCoche() {
        return this.mostrarTodo();
    }
    //se asigna valor como a una variable 
    set asignarColor(color) {
        this.color = color;
    }
    //se accede igual que a una variable 
    get getColor() {
        return this.color;
    }
    //no es necesario especirficar si es public o private 
    static saludar() {
        return "hola que tal";
    }
}
//herencia 
class Camion extends Coche {
    constructor(marca, modelo, year, color) {
        super(marca, modelo, year, color);
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
    }
    arrancar() {
        console.log("clase hija");
        this.velocidad = 200;
        this.arrancado = true;
    }
    mostrar() {
        this.arrancar();
        return this.arrancado;
    }
}
let mi_camion = new Camion("jeep", "renegade", 2023, "blue");
console.log(mi_camion.mostrarCoche());
//clases abastractas 
// las clases abstractas sirven solamente para heredar pero no van a poder ser instanciadas
// let mi_coche = new Coche("ford","falcon",2000,"red");
// console.log(mi_coche.mostrarCoche());
