import Add from "./modules/add.js"
import List from "./modules/list.js";
import Storage from "./modules/storage.js";
export default class App{

    constructor(){
        //inicializar props
        this.add = new Add()
        this.list = new List()
        this.storage= new Storage()
    }

    load(){
        //añadir
        this.add.saveMovie();

        //conseguir array de objetos del localStorage 
        const movies = this.storage.getData()

        //listar

        this.list.showList(movies)
        
        //buscar    
        
        console.log("la aplicacion de peliculas ha sido inicializada")
    }

}