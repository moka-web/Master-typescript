
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
 
// un decorador ejecuta algo antes de la case o modifica el comportamiento de una clase 
@proyectar



class Pelicula{
    constructor(
        public titulo:string,
        public genero:string,
        public proyectando:boolean
    ){}
}
//podria declarar la variable como let batman:any para no forzar el tipo de dato 
let batman = new Pelicula("batman begins","accion",false);



(<any>batman).hacerProyeccion(true)
