import Storage from "./storage.js";
import List from "./list.js";

export default class Add{
    constructor(){

        this.storage= new Storage()
        this.list = new List()
        this.title = document.querySelector("#title");
        this.description = document.querySelector("#description");
        this.save_btn = document.querySelector("#save")
    }


    saveMovie(){
        this.save_btn.onclick = (e)=>{
            e.preventDefault();
            
            //conseguir datos actualizados 

            let movies = this.storage.getData(); //movies va a contener un array 

            let lastId = this.storage.getLastId(); //
            
            console.log(movies, lastId)


            //DAtos a guardar 

            let title = this.title.value;
            let description =this.description.value;

            console.log(title,description)
            //validacion del form
            if(title != "" && description != ""){

                let movie = {
                    id:lastId++,
                    title: title,
                    description: description    
                }

                movies.push(movie);// Añadir al array de objetos 
                 

                // localStorage.setItem("movies", JSON.stringify(movie))
                
                this.storage.saveData(movies)//agrego el array nuevo a local storage 

                // this.list.addToList(movie,movies);
                this.list.showList(movies)

            }else{
                alert("faltan ingresar datos ")
            }


            return false;
        }
    }


}