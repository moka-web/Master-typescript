export default class Storage {
    constructor(){
        
        this.id = 1;
    }

    //recupero datos 
    getData(){

        let movies = JSON.parse(localStorage.getItem("movies"))

        if(!movies || movies.lenght < 1){
            //si no hay nada en local storage le meto esto por defecto ?¡
             movies = [
                {
                    id: 0 ,
                    title:"random movie generated ",
                    description:" random description! "
                }
            ];

            this.id = 1            
        }else{
            //como empiezo a contar de cero le quito 1
            //le sumo uno por cada nuevo objeto en el array 
            this.id = movies[movies.length - 1 ].id + 1 ;
        }

        return movies; 
    }


    
    //para sacar el ultimo id que hayamos guardado
    getLastId(){
        return this.id
    }

    //guardo datos 
    saveData(data){
        localStorage.setItem("movies" , JSON.stringify(data))
    }




}