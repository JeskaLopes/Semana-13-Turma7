class Botao {
    constructor(cor, tamanho, texto, icone){
        this.cor = cor,
        this.tamanho=tamanho,
        this.texto=texto,
        this.icone=icone
    }

    desenhaBotao(){
        const novoBotaoDom = document.createElement('button')
        novoBotaoDom.setAttribute('class', `${this.cor} ${this.tamanho}`)
        document.getElementById('button-section').appendChild(novoBotaoDom)
        console.log(novoBotaoDom);

        if(this.icone){
            const tagIcone = document.createElement("i")
            tagIcone.setAttribute('class', `fas ${this.icone}`)
            novoBotaoDom.appendChild(tagIcone)
            const text = document.createTextNode(this.texto)
            novoBotaoDom.appendChild(text)
        }
        else{
            novoBotaoDom.innerHTML = this.texto
        }
    }

};

let novoBotao =  new Botao('roxo','grande','Default')
novoBotao.desenhaBotao();


let botaoRoxo = new Botao('transparente', 'grande','Default')
botaoRoxo.desenhaBotao();

let botaoRoxoTransparente = new Botao('borda-roxa', 'grande','Default')
botaoRoxoTransparente.desenhaBotao();

const botaoMore = new Botao('roxo', 'grande', ' Default ', 'fa-plus-circle')
botaoMore.desenhaBotao();


