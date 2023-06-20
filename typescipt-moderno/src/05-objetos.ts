//objetos en typescript

type empresas={
    nombre:string,
    sector:string,
    servicios:string,
    facturacion:number,
    mostrar:()=>string
};

let empresa:empresas={
    nombre:"techint",
    sector:"metalurgica",
    servicios:"cañerias",
    facturacion:55_000_000,
    mostrar(){
        return this.nombre + " " + this.sector;
    }
};

//aunque no declare los tipos de datos typescript no me va a permitir sobreescribir los tipos datos del objeto ,

console.log(typeof empresa.servicios)


