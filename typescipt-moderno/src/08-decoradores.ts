
// function mostrarMensaje(){
//     console.log("proyectando la pelicula")
// }

//si el decorador no va a recibir parametros deberia pasarle un constructor:Function
function proyectar(constructor:Function):any{

    constructor.prototype.hacerProyeccion =function(activar:boolean):void{
        if (activar) {
            console.log("proyecto la pelicula")
        }else{
            console.log("cine cerrado x")
        }
    }
   
}

@proyectar


// un decoprador ejecuta algo antes de la case o modifica el comportamiento de una clase 
class Pelicula{
    constructor(
        public titulo:string,
        public genero:string,
        public proyectando:boolean
    ){}
}

let batman = new Pelicula("batman begins","accion",false);



(<any>batman).hacerProyeccion(true)
