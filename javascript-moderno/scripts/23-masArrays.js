let personas = ["tomas","pepe","pistola" , "guachin"]
let paises = [ {pais:"argentina",continente:"america"},{pais:"algeria" , continente:"africa"} ]
//some 

 let existeAlguno = personas.some(nombre=>nombre=="tomas");

 console.log(existeAlguno)


 //every 

 let esIgualsiempre = paises.every(pais => pais.continente == "africa")
 
 console.log(esIgualsiempre)


 //map 

 let nuevoArraymap = personas.map((nombre)=>{
    return nombre +" " + "jajaja" 
 })

 console.log(nuevoArraymap)


 //reduce 

 console.log(personas.reduce((acumulador,currentValue)=>{
    return acumulador + " " + currentValue
 }));



 