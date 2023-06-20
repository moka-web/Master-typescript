//maps

//es como un set orden KEY:VALUE y no permite duplicados

const antiguos_gadgets ={
    seis: "pelota",
    siete: "rinion",
    ocho: "bulon"
}


const gadgets = new Map(Object.entries(antiguos_gadgets))


// los valores a nivel KEY nunca se pueden repetir , si los value
//las key pueden ser cualquier tipo de dato 

gadgets.set(1,"pc")
.set(2,"pc")
.set(true,"pc")
.set(3,"pc")
.set("herramienta","pc");

console.log(gadgets.get("ocho"))




//weakMap y weakSet solo puedes guardar objetos de javascript
//tiene mas restricciones  b
