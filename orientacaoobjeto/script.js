class Botao {
    constructor(cor, tamanho, texto){
        this.cor = cor;
        this.tamanho=tamanho;
        this.texto=texto;
    }

    desenhaBotao(){
        const novoBotaoDom = document.createElement('button')
        novoBotaoDom.setAttribute('class', `${this.cor} ${this.tamanho}`)
        novoBotaoDom.innerHTML = this.texto
        document.getElementById('button-section').appendChild(novoBotaoDom)
    }
};

let novoBotao =  new Botao('roxo','grande','Default')
novoBotao.desenhaBotao();

let botaoRoxo = new Botao('transparente', 'grande','Default')
botaoRoxo.desenhaBotao();

let botaoRoxoTransparente = new Botao('borda-roxa', 'grande','Default')
botaoRoxoTransparente.desenhaBotao();

let botaoMore = new Botao('roxo', 'grande','⥤ Default')
botaoMore.desenhaBotao();


