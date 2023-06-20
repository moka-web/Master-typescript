//crear set
//es como un super Array
let gadgets = new Set(["movil","tablet","portatil"]);

//agregar elementos
//no puedo agregar elementos que ya existen 
gadgets.add(12)
gadgets.add(["1","2"])
gadgets.add("string")


//sacar el tamaño del set 
console.log(gadgets.size)

//comprobar existencia

console.log("existe ?" ,gadgets.has(12))

//eliminar todo el contenido 
gadgets.clear()

//recorrer set
for (const items of gadgets) {
    console.log(items)
}

//gadgets.forEach(e=>console.log(e))

