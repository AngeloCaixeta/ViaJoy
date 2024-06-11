const arrayPostagens = [
    {
      titulo: "Ônibus para Barão de Cocais",
      subtitulo: "Saindo de Belo Horizonte",
      data: "Ida e Volta",
      imagem: "/imagens/igreja.jpg",
      texto: "Em Barão de Cocais, você pode conhecer o Sítio Arqueológico da Pedra Pintada, cenário deslumbrante, com pinturas bem conservadas e datadas de 6.000 anos a.C."
    },
    {
      titulo: "Avião para Londres",
      subtitulo: "Saindo de Belo Horizonte",
      data: "Ida e Volta",
      imagem: "/imagens/big-ben.jpg",
      texto: "A cidade de Londres conta com quase nove milhões de habitantes. Ela é o maior município em população do Reino Unido e um dos maiores de toda a Europa"
    },
    {
      titulo: "Avião para Berlim",
      subtitulo: "Saindo de Belo Horizonte",
      data: "Ida e Volta",
      imagem: "/imagens/Berlim.jpg",
      texto: "Berlim é um cidade jovem, moderna, alternativa, mas que também preserva (e muito bem) o seu passado. Comece a percorrer a capital alemã fazendo um passeio guiado pelo Centro Histórico, passando por importantes pontos turísticos como o Portão de Brandemburgo, o Monumento do Holocausto e o Checkpoint Charlie."
    },
  ]
  
  for (let i=0; i <arrayPostagens.length; i++){
  const article = document.createElement('article')
  article.id = `post- ${[i + 1]}`
  
  article.innerHTML = `
  <img src="${arrayPostagens[i].imagem}">
  <h3>${arrayPostagens[i].titulo}</h3>
  <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
  <div class="data">${arrayPostagens[i].data}</div>
  <p>${arrayPostagens[i].texto}</p>
  `
  const main = document.querySelector('section3');
  main.appendChild(article);

  }

  function nameValidate() {
    const input = document.getElementById('origem');
    if (input.value.length < 3) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
}

function nameValidate2() {
  const input = document.getElementById('destino');
  if (input.value.length < 3) {
      input.classList.add('error');
  } else {
      input.classList.remove('error');
  }
}

