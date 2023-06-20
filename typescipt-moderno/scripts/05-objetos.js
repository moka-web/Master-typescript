"use strict";
//objetos en typescript
let empresa = {
    nombre: "techint",
    sector: "metalurgica",
    servicios: "cañerias",
    facturacion: 55000000,
    mostrar() {
        return this.nombre + " " + this.sector;
    }
};
//aunque no declare los tipos de datos typescript no me va a permitir sobreescribir los tipos datos del objeto ,
console.log(typeof empresa.servicios);
