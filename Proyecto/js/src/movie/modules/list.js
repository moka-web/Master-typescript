import deleteOfList from "./delete.js";

export default class List{
    //elementos del dom 
    constructor(){
        this.content = document.querySelector("#content")
    }


    movie_template(movie){
        return `
            <article class="movie-item" id="movie-${movie.id}">
                <h3 class="title">${movie.title}</h3>
                <p class="description">${movie.description}</p>
                
                <button class="edit">editar</button>
                <button class="delete" data-id="${movie.id}">eliminar</button>
        
            </article>
        
        `;

    }

    showList(pelis){
        //vaciar dom del conternedor principal para no duplicar el contenido
        this.content.innerHTML ="" ; 

        //recorrer y mostrar todos los objetos del localStorage 

        pelis.forEach(peli => {
            this.content.innerHTML += this.movie_template(peli);
        });

        // funcionalidad botones de borrar 
        deleteOfList()
        //funcionalidad botones de edicion 




    }

}