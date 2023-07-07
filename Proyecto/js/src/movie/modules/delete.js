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
            

            let delete_btn = movie.querySelector('.delete');


            console.log(delete_btn)

            // delete_btn.onclick = function() {
            //     const movie_id = this.getAttribute("id");
            //     console.log(movie_id);
            //   };
            
        })

}