"use strict";
//decorador de metodo , sirve para modificar como funciona un metodo 
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function modMen(mostrar) {
    return function info(target, propertyKey, descriptor) {
        if (mostrar) {
            console.log(target, propertyKey, descriptor);
        }
        else {
            descriptor.value = function () {
                console.log("metodo Bloqueado");
            };
        }
    };
}
function mi_propiedad(target, propertyKey, parameterIndex) {
    console.log("esta propiedad esta en la clase " + target + " y la propiedad se llama " + propertyKey + parameterIndex);
}
class Ordenador {
    constructor() {
        this.marca = "Asus";
    }
    encender(mensaje) {
        console.log("encendiendo");
        console.log(mensaje);
    }
}
__decorate([
    modMen(false),
    __param(0, mi_propiedad),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], Ordenador.prototype, "encender", null);
let pc = new Ordenador();
pc.encender("estas iniciando windows ");
