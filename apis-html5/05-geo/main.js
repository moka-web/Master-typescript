if (navigator.geolocation  ) {
    console.log("geolocation dispopnible")

    //conseguir posicion
    navigator.geolocation.getCurrentPosition(
        (position)=>{
            let latitud = position.coords.latitude;
            let longitud = position.coords.longitude;
            
            console.log(position)
        },
         error=>{
            console.log(error.message)
         }   
        )
}