
//esto te permite saber si el usuario esta viendo la web o esta en otra pestaño por ejemplo 

let mi_video = document.querySelector("#mi_video")

window.addEventListener("visibilitychange",()=>{
    if (document.visibilityState === "visible") {
      mi_video.play()  
    }else{
        mi_video.pause();
    }
})