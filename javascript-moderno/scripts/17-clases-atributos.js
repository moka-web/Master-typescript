//crear instancias similares con caracteristicas internas particulares 
//las clases reemplazan los clousures 
//podria tambien pasar valores por defecto a los parametros del constructor 
class Auto {
        //esta propiedad es publica npuertas
        //se pueden acceder desde fuera , dentro y de todas las clases heredadas
        npuertas = 4
        //#nbaul es privada solamente puede ser llamada dentro de la clase solo puede ser accesible dentro de los metodos
        #nbaul = 1 
        //metodo que se ejecuta primero
        constructor(marca,modelo,color,velocidad,año){
        //propiedades y atributos
        this.marca=marca
        this.modelo=modelo
        this.color=color
        this.velocidad=velocidad
        this.año= año
    }
    //metodos o funcionalidades del objeto 

    acelerar(){
        this.velocidad += 1;
    }

    frenar(){
        this.velocidad -= 1 ;
    }


    //metodos SET y GET setters y getters 
    //  SET asocia la propiedad de un objeto a una función que será llamada cuando haya un intento de asignar valor a esa propiedad.
    // GET Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada.
     set setMarca(marca){
        return this.marca = marca
    }

    get getMarca(){
        return this.marca;
    }


    //metodos estaticos
    //para invocarlo deberia llamar directamente a la clase 
    static bocinazo(claxon){
        return claxon
    }
}

let mi_auto = new Auto("mercedes","calse A","verde",500,2023 );
let otro_auto = new Auto("fiat","600","verde",100,2023 );

//cada vez que se invoque el metodo la velocidad va a aumentar en 1 
mi_auto.acelerar()
mi_auto.acelerar()
mi_auto.acelerar()
mi_auto.acelerar()

console.log(mi_auto.velocidad);


mi_auto.setMarca="revolver"
console.log(mi_auto.getMarca)



//herencia 
// puedo crear una nueva clase heredando los metodos y propiedades de otra 
class Quad extends Auto{

    constructor(marca,modelo,color,velocidad,año,cilindrada){
        super(
            marca,
            modelo,
            color,
            velocidad,
            año
        )

        this.cilindrada = cilindrada; 
    }

}

let mi_quad = new Quad("yamaha")

console.log(mi_quad)