const personagens = {
    elwen: {
      nome: "Elwen",
      imagem: "elwen.png",
      descricao: "Uma elfa sábia e guardiã das florestas de Eldoria.",
      pontuacao: 0
    },
    lyra: {
      nome: "Lyra",
      imagem: "lyra.png",
      descricao: "Maga estelar que domina os segredos do cosmos.",
      pontuacao: 0
    },
    thorn: {
      nome: "Thorn",
      imagem: "thorn.png",
      descricao: "Guerreiro sombrio e protetor do reino.",
      pontuacao: 0
    }
  };
  
  const perguntas = [
    {
      texto: "Qual é o seu passatempo favorito?",
      opcoes: [
        { texto: "Ler livros de magia", pontos: { elwen: 3, lyra: 2, thorn: 1 } },
        { texto: "Jogar esportes mágicos", pontos: { elwen: 1, lyra: 3, thorn: 2 } },
        { texto: "Criar feitiços", pontos: { elwen: 2, lyra: 1, thorn: 3 } }
      ]
    },
    {
      texto: "Qual animal mágico te representa?",
      opcoes: [
        { texto: "Fênix", pontos: { elwen: 2, lyra: 3, thorn: 1 } },
        { texto: "Lobo", pontos: { elwen: 1, lyra: 2, thorn: 3 } },
        { texto: "Coruja", pontos: { elwen: 3, lyra: 2, thorn: 1 } }
      ]
    },
    {
      texto: "O que você mais valoriza?",
      opcoes: [
        { texto: "Sabedoria", pontos: { elwen: 3, lyra: 2, thorn: 1 } },
        { texto: "Coragem", pontos: { elwen: 1, lyra: 1, thorn: 3 } },
        { texto: "Criatividade", pontos: { elwen: 2, lyra: 3, thorn: 2 } }
      ]
    },
    {
      texto: "Qual é sua estação do ano favorita?",
      opcoes: [
        { texto: "Primavera", pontos: { elwen: 3, lyra: 2, thorn: 1 } },
        { texto: "Outono", pontos: { elwen: 2, lyra: 1, thorn: 3 } },
        { texto: "Inverno", pontos: { elwen: 1, lyra: 3, thorn: 2 } }
      ]
    },
    {
      texto: "Qual elemento te define?",
      opcoes: [
        { texto: "Água", pontos: { elwen: 3, lyra: 2, thorn: 1 } },
        { texto: "Fogo", pontos: { elwen: 1, lyra: 3, thorn: 2 } },
        { texto: "Terra", pontos: { elwen: 2, lyra: 1, thorn: 3 } }
      ]
    },
    {
      texto: "Qual seu tipo de magia preferida?",
      opcoes: [
        { texto: "Curativa", pontos: { elwen: 3, lyra: 2, thorn: 1 } },
        { texto: "Estelar", pontos: { elwen: 2, lyra: 3, thorn: 1 } },
        { texto: "Sombria", pontos: { elwen: 1, lyra: 1, thorn: 3 } }
      ]
    },
    {
      texto: "Onde você se sente em casa?",
      opcoes: [
        { texto: "Na floresta", pontos: { elwen: 3, lyra: 2, thorn: 1 } },
        { texto: "Entre as estrelas", pontos: { elwen: 2, lyra: 3, thorn: 1 } },
        { texto: "Nas sombras da cidade", pontos: { elwen: 1, lyra: 1, thorn: 3 } }
      ]
    },
    {
      texto: "Com quem você lutaria?",
      opcoes: [
        { texto: "Criaturas malignas", pontos: { elwen: 3, lyra: 2, thorn: 1 } },
        { texto: "Invasores cósmicos", pontos: { elwen: 2, lyra: 3, thorn: 1 } },
        { texto: "Traidores do reino", pontos: { elwen: 1, lyra: 1, thorn: 3 } }
      ]
    },
    {
      texto: "O que você leva para uma missão?",
      opcoes: [
        { texto: "Livros antigos", pontos: { elwen: 3, lyra: 2, thorn: 1 } },
        { texto: "Cristais mágicos", pontos: { elwen: 2, lyra: 3, thorn: 1 } },
        { texto: "Espada encantada", pontos: { elwen: 1, lyra: 1, thorn: 3 } }
      ]
    },
    {
      texto: "Qual seu maior talento?",
      opcoes: [
        { texto: "Empatia", pontos: { elwen: 3, lyra: 2, thorn: 1 } },
        { texto: "Visão além do alcance", pontos: { elwen: 2, lyra: 3, thorn: 1 } },
        { texto: "Determinação", pontos: { elwen: 1, lyra: 1, thorn: 3 } }
      ]
    }
  ];
  
  let indicePergunta = 0;
  let pontuacoes = { elwen: 0, lyra: 0, thorn: 0 };
  
  function iniciarJogo() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    mostrarPergunta();
  }
  
  function mostrarPergunta() {
    const perguntaAtual = perguntas[indicePergunta];
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `<div class="pergunta"><h2>${perguntaAtual.texto}</h2></div><div class="opcoes"></div>`;
  
    const opcoesDiv = quizDiv.querySelector('.opcoes');
    perguntaAtual.opcoes.forEach((opcao, index) => {
      const botao = document.createElement('button');
      botao.textContent = opcao.texto;
      botao.onclick = () => selecionarOpcao(opcao);
      opcoesDiv.appendChild(botao);
    });
  }
  
  function selecionarOpcao(opcao) {
    for (let personagem in opcao.pontos) {
      pontuacoes[personagem] += opcao.pontos[personagem];
    }
    indicePergunta++;
    if (indicePergunta < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  }
  
  function mostrarResultado() {
    document.getElementById('quiz').style.display = 'none';
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';
  
    const vencedor = Object.keys(pontuacoes).reduce((a, b) => pontuacoes[a] > pontuacoes[b] ? a : b);
  
    const personagens = {
      elwen: {
        nome: "Elwen",
        imagem: "imagens/elwen,png",
        descricao: "Uma elfa poderosa do bosque encantado.",
      },
      lyra: {
        nome: "Lyra",
        imagem: "imagens/lyra.png",
        descricao: "Maga estelar com domínio das constelações.",
      },
      thorn: {
        nome: "Thorn",
        imagem: "imagens/thorn.png",
        descricao: "Guerreiro sombrio das profundezas.",
      }
    };
  
    const personagem = personagens[vencedor];
    resultadoDiv.innerHTML = `
      <h2>Você é ${personagem.nome}!</h2>
      <img src="${personagem.imagem}" alt="${personagem.nome}">
      <p>${personagem.descricao}</p>
      <p>Pontuação total: ${pontuacoes[vencedor]}</p>
      <button onclick="reiniciar()">Recomeçar</button>
    `;
  }
  
  function reiniciar() {
    indicePergunta = 0;
    pontuacoes = { elwen: 0, lyra: 0, thorn: 0 };
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
  }
  