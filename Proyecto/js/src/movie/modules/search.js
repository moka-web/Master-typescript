import Storage from "./storage.js";
import List from "./list.js";


export default function(){
    const storage = new Storage()
    const list = new List()

    //conseguir elementos del dom 

    let content = document.querySelector("#content")
    let search_btn = document.querySelector("#search");
    
    
    search_btn.onclick=(e)=>{
        e.preventDefault();
        //conseguir texto de campo de busqueda
        let wanted = document.querySelector("#search_field").value
        
        //conseguir datos de peliculas actualizado 
        let movies_stored = storage.getData();

        //aplicar filtros de busqueda 

        const new_movies = movies_stored.filter((movie)=>{
            return movie.title.toLowerCase().includes(wanted.toLowerCase())
        }) 

            console.log(new_movies)

        //mostrar listado de coincidencias 

        if (new_movies.length <= 0) {
            content.innerHTML =`<div><h1>no hay coincidencias! </h1><div>`    
        }else{
            list.showList(new_movies)
        }



        

        return false
    }
    
}