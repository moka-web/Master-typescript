
//drag && drop 


const cajas = document.querySelectorAll(".caja");
const dragzone = document.querySelector("#zonaDrop");
const cajero = document.querySelector("#cajero");




cajas.forEach((caja , indice)=>{
 
    caja.setAttribute("id","caja"+indice) //asignar id a elementos 
    

    caja.addEventListener("dragstart" , (e)=>{
        //console.log("estas moviendo la caja " + parseInt(indice + 1))
       
        //compartir info del elemento que muevo 
        //guardo los datos en data transfer para cuando hago el drop pueda mover el elemento 
        e.dataTransfer.setData("text", e.target.id );
    })

  
})

  // DRAGOVER Y DROP DE LA DROPZONE
     


    dragzone.addEventListener("dragover",(e)=>{
        e.preventDefault()
    })

    dragzone.addEventListener("drop", (e)=>{
        e.preventDefault();
        console.log("la dejaste adentro")
        
        //recibir informacion y soltarla en la zona 
        
        let caja = e.dataTransfer.getData("text");
        console.log( "dejo la : "+caja)
        //agrega al contenedor el elemento
        e.target.appendChild(document.querySelector("#"+caja));

        console.log("has plantado el tomate" + caja)
    });

   


    //DRAGOVER Y DROP DEL CAJERO 
   
    cajero.addEventListener("dragover",(e)=>{
        console.log("entra aca ?")
        e.preventDefault()
    })

    cajero.addEventListener("drop", (e)=>{
        e.preventDefault();
        console.log("la dejaste adentro")
        
        //recibir informacion y soltarla en la zona 
        
        let caja = e.dataTransfer.getData("text");
        console.log( "dejo la : "+caja)
        //agrega al contenedor el elemento
        e.target.appendChild(document.querySelector("#"+caja));

        console.log("has recogido el tomate" + caja)
    });
    
    



     
    
    
    
    
    
    
    
    //dragenter    //dragstart //drag // dragend

    // dragzone.addEventListener("dragenter", (e)=>{
    //     e.preventDefault();
    //     console.log("llego la caja")
    // })

    //  dragover sin este no funciona
    
    // dragzone.addEventListener("dragleave", (e)=>{
    //     e.preventDefault();
    //     console.log("la sacaste rey ")
    // })



