// funciones anidadas         

let nombre = "tomas"

function mostrarNombre (){

    let apellido = "juarez"

    function mostrarApellido(){

        let profesion = "programador"
        function mostrarProfesion (){
            return nombre + " " + apellido + " " + profesion;
        }
        return mostrarProfesion
    }

    return mostrarApellido;
}

console.log(mostrarNombre()()())