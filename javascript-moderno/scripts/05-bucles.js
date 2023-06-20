const nombres = ["nombre1","nombre2","nombre3","nombre4"];


//bucle clasico
for(let i = 0 ; i < nombres.length ; i ++){
    // console.log(nombres[i])

}


//for of accede al contenido directo 
for(let nombre of nombres)[
    // console.log(nombre)
]


//for in accede al contenido del indice - sirve tambien para recorrer json 

for(let indice in nombres) {
    // console.log(indice,nombres[indice])
}


//for each

nombres.forEach((nombre , indice , array_completo) => {

// console.log(nombre,indice,array_completo) 
}
);

// iterables

const mi_iterable = nombres[Symbol.iterator]();

// console.log(mi_iterable,typeof mi_iterable, mi_iterable.next())
// console.log(mi_iterable.next())
// console.log(mi_iterable.next())
// console.log(mi_iterable.next())
// console.log(mi_iterable.next())

//JSON
let fruta = {
    nombre: "manzana",
    color:"verde"
}

fruta[Symbol.iterator] = function(){
    let indice = 0;
    let propertys = Object.values(this)
    return{
        next(){
        

            if (indice >= propertys.length) {
                return{
                    done:true,
                    value:undefined
                }
            }

            return{
                done:false,
                value: propertys[indice++]
            }

        }
    }
}

for (let property of fruta){
    console.log(property)
}
for (let property in fruta){
    console.log(property, ":", fruta[property])
}