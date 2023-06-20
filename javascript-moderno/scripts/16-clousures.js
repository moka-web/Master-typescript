//el _ indica que las variables no pueden ser utilizadas fuera del clousures
//no es recomendable utilizar las variables sin que pasen por los metodos 
//clousures

const auto = (function (){

    let _marca, _hp=0 , _puertas;

    function setMarca(marca){
        _marca = marca
        return _marca
    }   

    function getMarca (){
        return _marca
    }

    function acelerar(){
        _hp++
        return _hp
    }

    function frenar (){
        _hp--
        return _hp
    }

    return{
        setMarca,
        getMarca,
        acelerar,
        frenar
    }

})();


auto.setMarca("bmw");
console.log(auto.getMarca())