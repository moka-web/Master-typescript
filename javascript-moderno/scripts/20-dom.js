//seleccionar elementos con id
window.addEventListener("DOMContentLoaded",()=>{
    //clasica
    //let container= document.getElementById("container")
    // container.style.backgroundColor = "blue";
    // container.innerText = "que haces misil";
    // container.className = "ficha";

    //puedo convinar diferentes tipos de selectores 
    //let container = document.querySelector("#container")
    let containers = document.querySelectorAll(".container")
    
    containers.forEach((e,i)=>{
        e.innerText="repetido"
        e.className="otra-clase"

        if (i == 2 ) {
            e.style.widht = "200px"
            e.style.backgroundColor = "red"          
        }

        
    })


})

//seleccionar elementos con una clase 