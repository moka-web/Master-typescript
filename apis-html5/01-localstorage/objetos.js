let object = {
    nombre :"tomas",
    apellido:"juarez",
    sitio : " misitioweb.com "
};

//paso el objeto a string para poder guardarlo en localstorage 
let objectString= JSON.stringify(object);


localStorage.setItem("persona", objectString );

console.log(typeof(objectString))


