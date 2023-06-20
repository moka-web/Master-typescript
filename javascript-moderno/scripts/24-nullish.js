//nullish coalescing operator

function multiplicacion ( numero1 ,numero2){
    // numero1 =( numero1 == null ? 1 : numero1);
    // numero2 =(numero2 == null ? 1 : numero2);
    //nullish
    numero1 = numero1 ?? 1 
    numero2 = numero2 ?? 1 


    console.log(numero1,numero2)

    return numero1 * numero2


}

function mostrarUsuario (id, nombre){
    let _id = id ?? "id desconocido";
    let _nombre = nombre ?? "nombre desconocido"
    
    // let mi_usuario = (id + " " + nombre) ?? "usuario desconocido"

    return _id + " " + _nombre
}




console.log(multiplicacion())

console.log(mostrarUsuario())