//notificaciones


if (Notification == "undefined "){
    console.log("tu navegador no es compatible con las notificaciones ")
}else{
    console.log(" es compatible ")
    //pedir permiso
    if (Notification.permission !== "granted")  {
               Notification.requestPermission()
    }

    console.log(Notification.permission)

    let principal = "hola soy la noti";
    let options = {
        body:"cuerpo de la notificacion ",
        icon:"https://freepngimg.com/png/31528-the-witcher-picture/icon"
    }

    const notificacion = new Notification(principal,options);

    notificacion.onclick= (e)=>{
        e.preventDefault();
        window.open("https://tn.com.ar/")
    }

    notificacion.onclose= ()=>{
        alert("ups te queria vender un loro")
    }

    //tiempo de expiracion 

    setTimeout(()=>{
        notificacion.close()
    },3000)
   
}