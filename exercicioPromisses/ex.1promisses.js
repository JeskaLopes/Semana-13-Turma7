//exercicio1

const retornaPromisse = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Hello Word")
        }, 2000)
    });
};

function job(){
    retornaPromisse()
    .then(res => console.log(res))
};


