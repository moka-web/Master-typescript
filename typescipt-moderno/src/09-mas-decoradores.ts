//decorador de metodo , sirve para modificar como funciona un metodo 

function modMen(mostrar:boolean){

        return function info(target:object,propertyKey:string,descriptor:any){
                if (mostrar) {
                    console.log(target,propertyKey,descriptor)       
                }else{
                    descriptor.value = function(){
                        console.log("metodo Bloqueado")
                    }
                }
            
        };    
    
    
}

function mi_propiedad(target:Object,propertyKey:string, parameterIndex:number){
    console.log("esta propiedad esta en la clase " + target+ " y la propiedad se llama " + propertyKey + parameterIndex)
}

class Ordenador{

     marca:string = "Asus";
    @modMen(false)
    encender(@mi_propiedad mensaje:string){
        console.log("encendiendo")
        console.log(mensaje)
    }
}


let pc = new Ordenador()
pc.encender("estas iniciando windows ")




