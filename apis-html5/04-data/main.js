let lista = document.querySelectorAll("#lista li")


lista.forEach(e=>{
   let continente=  e.dataset.continente;
    e.innerHTML += " - " + continente

    if (continente == "latam") {
        e.style.backgroundColor = "gray"
        
    }
})