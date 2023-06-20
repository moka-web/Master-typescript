const array1 = [{nombre:"producto",cantidad:3,precio:10000},{nombre:"producto4",cantidad:3,precio:10000},{nombre:"producto2",cantidad:3,precio:10000}]


function conseguirProductos (){

    return new Promise((resolve,reject)=>{
            console.log("esperando respuesta")       
        setTimeout(()=>{
            resolve( array1)
            //reject sirve para indicar que hay un error en la respuesta
        },1000)

    })        
}

function productComprado(){
    return new Promise((resolve, reject) => {
        console.log("comprando")
        setTimeout(()=>{
            resolve({producto:"revolver que tirar tiros "})
        },500)
    })
}





//encadenar promesas

// conseguirProductos()
// .then(items=>{
//     return productComprado();
// })
// .then(venta=>{
//     console.log("producto comprado", venta)
//     //se puede hacer un filter del array
//     //tambien crear una funcion fuera del bloque para filtrar agregar quitar etc  
// }) 
// .catch(error=>error.message)
// .finally(()=>{
//     console.log("promesa finalizada")


// }) 

//promise all 

Promise.all([conseguirProductos(),productComprado()])
.then(venta=>{
    console.log(venta)
})




 