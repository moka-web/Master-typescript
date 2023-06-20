//expandir valores spread
let peliculas = ["batman","larenga"]


console.log(...peliculas);

function mostrarpelis (heroe1,heroe2) {
    console.log(`mis superheroes favoritos 
    ${heroe1}
    ${heroe2}
    `)
}


mostrarpelis(...peliculas);

let masPelis = ["peli1","peli2" , ...peliculas]

//   rest
//representa un numero inmdefinido de parametros utilizando un array 
//con resto de peliculas puedo pasarle un numero indefinido de parametros como array 
function peliculillas (pelicula1 , pelicula2, ...restodepeliculas){
    console.log(pelicula1)
    console.log(pelicula2)
    for( let pelicula of restodepeliculas){
        console.log(pelicula)
    }
}

peliculillas("tutu","papa")

