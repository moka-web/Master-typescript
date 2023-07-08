import Storage from "./storage.js";
import List from "./list.js";

export default function (){

    // crear los objetos 

    const storage = new Storage();
    const list = new List();


    //conseguir los datos 
    let movies_stored = storage.getData();
    let movies_viewed = document.querySelectorAll(".movie-item");

    //recorrer las movies mostradas 

    movies_viewed.forEach(movie=>{
        //seleccionar el boton de editar 
        let edit_btn = movie.querySelector(".edit")
        //asignarun evento click
        edit_btn.onclick = function(){
            //obtengo el id de la movie 
            const movie_id = parseInt(this.getAttribute("data-id"));
            console.log(movie_id)
            //borro los botones para mostrar formulario
            edit_btn.remove();
            movie.querySelector(".delete").remove();

             // añadir html debajo de los botones
            let movie_edit_html = `
                <div class="edit_form">
                    <hr>
                    <h3 class= "title"> editar pelicula </h3>
                    <form>
                        <input type="text" class="edited_title" value="${movie.querySelector(".title").innerHTML}">
                        <textarea class="edited_description"> ${movie.querySelector(".description").innerHTML}</textarea>
                        <input type="submit" class="update" value="actualizar">
                    </form> 
                </div>
            
            `

            movie.innerHTML += movie_edit_html;
              
            // seleccionar el boton de actualizar 
            let update_btn = movie.querySelector(".update")
            //aplicar el evento click 
            update_btn.onclick =function (e){
                e.preventDefault();
                //buscar indice de peliculas a actualizar 
                let index = movies_stored.findIndex(movie => movie.id === movie_id);
                movies_stored[index]={
                    id:movie_id,
                    title:movie.querySelector(".edited_title").value,
                    description:movie.querySelector(".edited_description").value,
                }

                storage.saveData(movies_stored)

                list.showList(movies_stored)

            }
        }
        

       

         

     

        //guardar objeto dentro de ese indice 

    })
    

}