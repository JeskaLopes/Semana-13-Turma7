const cepInput = document.getElementById('cep');
const logradouroInput = document.getElementById('logradouro');
const complementoInput = document.getElementById('complemento');
const bairroInput = document.getElementById('bairro');
const localidadeInput = document.getElementById('localidade');
const ufInput = document.getElementById('uf');
const cepError = document.getElementById('cep-error')


const getData = url => {
    return new Promise ((resolve,reject) => {
        const requisicao = new XMLHttpRequest()
        requisicao.open("GET", url)
        requisicao.onload = function(){
            if(requisicao.status === 200){
                const resposta = JSON.parse(requisicao.responseText)
                resolve (resposta)
            }
            else{
                reject('CEP Inválido')
            }
        }
        requisicao.onerror = () =>{
            reject ('Cep Invalido')
        }
        requisicao.send()
    })
}

cepInput.addEventListener("blur", () => {
    const valorDoCep = cepInput.value;
    if(valorDoCep){
    getData(`http://viacep.com.br/ws/${valorDoCep}/json/`)
    .then (resultadoDaApi => {
        cepInput.classList.remove("error")
        cepInput.value = resultadoDaApi.cep;
        logradouroInput.value = resultadoDaApi.logradouro;
        complementoInput.value = resultadoDaApi.complemento;
        bairroInput.value = resultadoDaApi.bairro;
        localidadeInput.value = resultadoDaApi.localidade;
        ufInput.value = resultadoDaApi.uf;
    })
    .catch (erro => {
        cepInput.classList.remove("error")
        cepError.innerHTML = erro;
        logradouroInput.value = " "
        complementoInput.value = " "
        bairroInput.value = " "
        localidadeInput.value = " "
        ufInput.value = " "
    })
    }
    else{
        cepInput.classList.add("error")
        cepError.innerHTML = "Campo Obrigatório"
    }
});

