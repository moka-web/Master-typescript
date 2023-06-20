const array1 = [{nombre:"producto",cantidad:3,precio:10000},{nombre:"producto4",cantidad:3,precio:10000},{nombre:"producto2",cantidad:3,precio:10000}]

function conseguirProductos (){

    return new Promise((resolve,reject)=>{
            console.log("esperando respuesta")       
        setTimeout(()=>{
            resolve( array1)
            //reject sirve para indicar que hay un error en la respuesta
        },1000)

    })        
};

// conseguirProductos().then(datos=>console.log(datos))
//try catch
async function getProducts  (){

    try {
        //si quiera resolver varias peticiones a la vez y reducir el tiempo de ejecucion puedo utlizar promise all y reducir el tiempo de espera 
        let products = await conseguirProductos()
        console.log(products)       
    } catch (error) {
        //podria utilizar tambien throw error
        console.log(error.message)
    }
    //espera a que se resuelva el try catch para ejecutar el resto del codigo !
    console.log("fuera del try ")
    

};

getProducts();

