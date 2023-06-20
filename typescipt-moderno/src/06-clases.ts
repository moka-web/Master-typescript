 abstract class Coche {
//   marca: string 
//   modelo: string 
//   year: number
//   color: string 
//   arrancado: boolean
//   velocidad: number 
// public: accesible desde cualquier parte 
//protected : se puede acceder solo desde las clases 
//privadas : solo desde la clase original 
//esto es a nivel de codigo se puede acceder desde el navegador 

    public prueba:string;

  constructor( 
    public marca: string, 
    public modelo: string , 
    public year: number, 
    protected color: string, 
    protected arrancado:boolean = false, 
    protected velocidad:number=0) {
        this.prueba = "tomas juarez dev"
    }

  public arrancar(): void {
    this.arrancado = true;
  }
  public apagar(): void {
    this.arrancado = false;
  }

  private mostrarTodo(){
    return this.marca+ " " + this.modelo
  }

  public mostrarCoche():string{
    return this.mostrarTodo()

  }
  //se asigna valor como a una variable 
  public set asignarColor(color:string){
        this.color=color
  }
  //se accede igual que a una variable 
  public get getColor():string{
    return this.color
  }

  //no es necesario especirficar si es public o private 
  static saludar():string{
    return "hola que tal"
  }

}


 


//herencia 


class Camion extends Coche{
    constructor( 
        
        public marca: string, 
        public modelo: string , 
        public year: number, 
        protected color: string, 
        ) {
            super(marca,modelo,year,color)
        }

        public arrancar(): void {
            console.log("clase hija")
            this.velocidad = 200 ;
            this.arrancado= true
        }


        public mostrar() {
            this.arrancar()
            return this.arrancado;

        }
}


let mi_camion = new Camion("jeep","renegade",2023,"blue");


console.log(mi_camion.mostrarCoche())




//clases abastractas 
// las clases abstractas sirven solamente para heredar pero no van a poder ser instanciadas

// let mi_coche = new Coche("ford","falcon",2000,"red");

// console.log(mi_coche.mostrarCoche());


