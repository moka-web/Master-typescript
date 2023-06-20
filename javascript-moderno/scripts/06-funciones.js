//parametros por defecto
function saludo (persona = "julring"){
    return "hola guacho " + persona ;
}

// console.log(saludo());


//arrow functions

// let saludo = function(nombre){
//     return "hola" + nombre;

// }


 let otroSaludo = nombre => "que haces " + nombre;

 console.log(otroSaludo("dorbii"));

 let otroSaludoPerri = (saludo)=>{
    let tuvieja = "tu vieja "
    //se desarrolla la logica 
    return "este es mi saludo " + saludo + tuvieja;
    
 }



 // json 

 let tienda = {
    nombre : "game",
    juegos : ["gta","www", "pool"],
    mostrar : function(){
        console.log(this.nombre)

    },
    mostrar2(){
        this.juegos.forEach(juego=>console.log(juego));

    },
    mostrar3 : ()=>{
        console.log(tienda.nombre)
    } // esto no 
 }



