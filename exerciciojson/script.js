const listaDeLivros = JSON.stringify(autores)
const listaDeLivrosJs = JSON.parse(listaDeLivros)

const insertRows = funcao => {
  let table = ''
  funcao.forEach((livro) => {
    table+= `
      <tr>
        <td>${livro.livro}</td>
        <td>${livro.autor}</td>
        <td>${livro.genero}</td>
      </tr>
    `
  })
  return table
};
const ordenarLivro = document.getElementById("ordenar-livro")
const ordenarAutor = document.getElementById('ordenar-autor');
const ordenarGenero = document.getElementById('ordenar-genero');

const orderList=( livroA, livroB, propriedade) => {
    if(livroA[propriedade].toLowerCase() < livroB[propriedade].toLowerCase()){
        return -1
    }

    if(livroA[propriedade].toLowerCase() > livroB[propriedade].toLowerCase()){
        return 1
    }
    return 0
};

ordenarLivro.addEventListener('click', (e) => {
    const listaOrdenada = listaDeLivrosJs.livros.sort((livroA,livroB) => orderList(livroA,livroB,"livro"))
    document.getElementById('table-section').innerHTML = insertRows(listaOrdenada)

});

ordenarAutor.addEventListener('click', (e) =>{
    const listaOrdenada = listaDeLivrosJs.livros.sort((livroA,livroB) => orderList(livroA,livroB,"autor"))
    document.getElementById('table-section').innerHTML = insertRows(listaOrdenada);
});

ordenarGenero.addEventListener('click',(e) =>{
    const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => orderList(livroA,livroB,"genero"))
    document.getElementById('table-section').innerHTML = insertRows(listaOrdenada);
});











/* 

ordenarLivro.addEventListener("click", (e) => {
  const listaOrdenada = listaDeLivrosJs.livros.sort((livroA, livroB) => {
    if(livroA.livro.toLowerCase() < livroB.livro.toLowerCase()){
      return -1
    }
    if(livroA.livro.toLowerCase() > livroB.livro.toLowerCase()){
      return 1
    }
    return 0
  })
  document.getElementById("table-section").innerHTML = insertRows(listaOrdenada)
})

const ordenarAutor = document.getElementById('ordenar-autor')
ordenarAutor.addEventListener('click', (e) => {
    const autorOrdenado = listaDeLivrosJs.autores.sort((autorA,autorB) =>{
        if(autorA.autor.toLowerCase()<autorB.autor.toLowerCase()){
            return -1
        }

        if(autorA.autor.toLowerCase()>autorB.autor.toLowerCase()){
            return 1
        }
        return 0
    })
    document.getElementById('table-section').innerHTML = insertRows(ordenarAutor)
})
*/














document.getElementById('table-section').innerHTML = insertRows(listaDeLivrosJs.livros)