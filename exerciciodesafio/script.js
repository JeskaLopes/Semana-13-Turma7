const insertRows = aff => {
    let table = ''
    aff.forEach((livro) => {
      table+= `
        <tr>
          <td>${livro.livro}</td>
        </tr>
      `
    })
    return table
  };

  const exibirLivros = document.getElementById('livro')
  const exibirSorteados = document.getElementById('sortear');
  const exibirAutores = document.getElementById('autores');
  const exibirGenero = document. getElementById('genero');

  const orderList=( livroA, livroB, propriedade) => {
    if(livroA[propriedade].toLowerCase() < livroB[propriedade].toLowerCase()){
        return -1
    }

    if(livroA[propriedade].toLowerCase() > livroB[propriedade].toLowerCase()){
        return 1
    }
    return 0
};

exibirLivros.addEventListener('click', (e) =>{
    document.getElementById('table-section').innerHTML = insertRows(biblioteca.livros)
});

exibirSorteados.addEventListener('click', (e) => {
    const listaOrdenada = biblioteca.livros.sort((livroA,livroB) => orderList(livroA,livroB,"livro"))
    document.getElementById('table-section').innerHTML = insertRows(listaOrdenada)

});
exibirSorteados.addEventListener('click', (e) => {
    const listaOrdenada = biblioteca.livros.sort((livroA,livroB) => orderList(livroA,livroB,"autor"))
    document.getElementById('table-section').innerHTML = insertRows(listaOrdenada)

});

exibirSorteados.addEventListener('click', (e) => {
    const listaOrdenada = biblioteca.livros.sort((livroA,livroB) => orderList(livroA,livroB,"autor"))
    document.getElementById('table-section').innerHTML = insertRows(listaOrdenada)

});

exibirAutores.addEventListener('click', (e) =>{
    document.getElementById('table-section').innerHTML = insertRows(biblioteca.autor)
});
