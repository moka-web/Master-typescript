
//con la t indico que es una funcion generica 

function mostrarMensaje<t>(parametro:t){
    return parametro
}


console.log(mostrarMensaje("mensaje"));
console.log(mostrarMensaje(8).toFixed(3))

 