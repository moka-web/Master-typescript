import Storage from "./storage.js";
import List from "./list.js";


export default function (){

    //crear objetos 
    const storage = new Storage();
    const list = new List();


    // datos de las peliculas disponibles 

    let movies_stored = storage.getData()
    let movies_viewed = document.querySelectorAll("#content .movie-item");

     //recorrer peliculas mostradas

     movies_viewed.forEach(movie=>
        {
            
            //capturo el button
            let delete_btn = movie.querySelector('.delete');


            
            delete_btn.onclick = function() {
                //obtengo el id de la pelicula
                const movie_id = this.getAttribute("data-id");
                //filtro el array 
                const new_movies_stored = movies_stored.filter((movie)=>movie.id !== parseInt(movie_id))
                console.log(new_movies_stored);
                //actualizo el listado  
                storage.saveData(new_movies_stored);
                //muestro el nuevo arreglo 
                list.showList(new_movies_stored)

            };
            
        })

}