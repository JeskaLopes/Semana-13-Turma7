const maiorQueCinco = (numero) =>{
    return new Promise((resolve,reject) =>{
        if (numero > 5) {
            resolve(numero + ' é maior que cinco') 
        } 
        else{
            reject(numero +' é menor que cinco')
        }
    });
};

function confere(numero){
    maiorQueCinco()
    .then (console.log('é maior que cinco'))
    .catch (console.log('é menor que cinco'))
};