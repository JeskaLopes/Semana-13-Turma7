const retornaNumero = (numero) => {
    return new Promise ((resolve,reject) =>{
        if(isNaN(numero)){
            reject('Deu Ruim') 
        }
        
        else if (numero%2 == 0){
            setTimeout(() => {
                reject(numero + ' é par')
            }, 2000)
        }
        else{
            setTimeout(() => {
            resolve(numero + ' é impar')
        }, 1000)
        }
    }  
    )};

    function job (numero){
        retornaNumero(numero)
        .then (res => (console.log(res)))
        .then (res1 => (console.log(res1)))
        .catch(erro => (console.log(erro)))
    }