//interfaces que propiedades va a tener un objeto , ***definir*** propiedades y contenido de una clase 


interface VideoJuego{
    titulo:string;
    categoria:string;
    edad:number;
    duracion?:number;
    lanzado?:boolean;
    mostrar():void;
    actualizar(consola:string):string;
}



//interface objeto literal
let gta:VideoJuego={
    titulo:"gta 5",
    categoria:"rpg",
    edad:18,
    mostrar(){
        console.log(this.titulo+this.categoria)
    },
    actualizar(consola){
        console.log("buscando actualizaciones")
        return "actualizado"
    }
}


console.log(gta.actualizar("actualizar"))



//clase 
//para crear nuevas propiedades tengo que asegurarme que esten previamente declaradas en la interface 
class Fifa implements VideoJuego{
    constructor(
       public titulo:string,
       public categoria:string,
       public edad:number,
       public duracion?:number,
       public lanzado?:boolean,



    )
    {}
    mostrar(){
        console.log(this.titulo+this.categoria)
    }
    actualizar(consola:string):string{
        console.log("buscando actualizaciones")
        return "actualizado"
    }
}


let fifa_23 = new Fifa("fifa23","fulbo",18);


console.log(fifa_23.mostrar())