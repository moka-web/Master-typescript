//comprobar si el navegador es compatible 

if(typeof(Storage) == "undefined"){
    window.location.href = "algun sitio"   
}



//guardar datos en el navegador 

localStorage.setItem("nombre","Tomas juarez" );


//recuperar datos del almacenamiento local 

console.log(localStorage.getItem("nombre"))

//remover 

localStorage.removeItem("nombre")

//remover todos 

localStorage.clear()