class Personagem {
  constructor(nome, imagem, descricao) {
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.pontuacao = 0;
  }

  adicionarPontos(pontos) {
    this.pontuacao += pontos;
  }
}

class Quiz {
  constructor(personagens, perguntas) {
    this.personagens = personagens;
    this.perguntas = perguntas;
    this.indicePergunta = 0;
  }

  iniciar() {
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    this.mostrarPergunta();
  }

  mostrarPergunta() {
    const perguntaAtual = this.perguntas[this.indicePergunta];
    const quizDiv = document.getElementById('quiz');

    quizDiv.innerHTML = `<div class="pergunta"><h2>${perguntaAtual.texto}</h2></div><div class="opcoes"></div>`;
    const opcoesDiv = quizDiv.querySelector('.opcoes');

    perguntaAtual.opcoes.forEach(opcao => {
      const botao = document.createElement('button');
      botao.textContent = opcao.texto;
      botao.onclick = () => this.selecionarOpcao(opcao);
      opcoesDiv.appendChild(botao);
    });
  }

  selecionarOpcao(opcao) {
    for (let personagem in opcao.pontos) {
      this.personagens[personagem].adicionarPontos(opcao.pontos[personagem]);
    }
    this.indicePergunta++;
    if (this.indicePergunta < this.perguntas.length) {
      this.mostrarPergunta();
    } else {
      this.mostrarResultado();
    }
  }

  mostrarResultado() {
    document.getElementById('quiz').style.display = 'none';
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';

    const vencedor = Object.values(this.personagens).reduce((a, b) => a.pontuacao > b.pontuacao ? a : b);

    resultadoDiv.innerHTML = `
      <h2>Você é ${vencedor.nome}!</h2>
      <img src="imagens/${vencedor.imagem}" alt="${vencedor.nome}">
      <p>${vencedor.descricao}</p>
      <p>Pontuação total: ${vencedor.pontuacao}</p>
      <button onclick="quiz.reiniciar()">Recomeçar</button>
    `;
  }

  reiniciar() {
    this.indicePergunta = 0;
    for (let key in this.personagens) {
      this.personagens[key].pontuacao = 0;
    }
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
  }
}

const personagens = {
  elwen: new Personagem("Elwen", "elwen.png", "Uma elfa sábia e guardiã das florestas de Eldoria."),
  lyra: new Personagem("Lyra", "lyra.png", "Maga estelar que domina os segredos do cosmos."),
  thorn: new Personagem("Thorn", "thorn.png", "Guerreiro sombrio e protetor do reino.")
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

const quiz = new Quiz(personagens, perguntas);

function iniciarJogo() {
  quiz.iniciar();
}
