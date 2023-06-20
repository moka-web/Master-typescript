let nuevo_post =JSON.stringify({
    title:"newPost",
    body:"contenido",
    userId:123    
})

//importante pasar el objeto a json sino no funca !!!!!!!



fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body: nuevo_post,
    headers:{
        "Content-Type": "application/json ; charset=UTF-8"
    }
})
.then(res=>res.json())
.then(datos=>console.log(datos))
.catch(error=>console.log(error.message))



//si quisiera introducir los datos a una variable , funcion o manipular el dom con los datos traidos del fetch deberia hacerlo dentro del segundo then donde ya tengo obtengo los datos  los datos