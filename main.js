const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".caixa-resultado");

 const perguntas = [
    pergunta1,{
        enunciado:"Voce gosta de bolo?",
        alternativas: [
            {
                texto:"alternativa A",
                afirmacao: "Voce é uma pesoal normal"
            },
            {
                texto:"alternativa B", 
                afirmacao: "Voce é chato pra carambolas"
            }
        ]

    }
    {
        enunciado:"Voce dorme ?",
        alternativas: [
            {
                texto:"alternativa A",
                afirmacao: "Voce é uma pesoal normal"
            },
            {
                texto:"alternativa B", 
                afirmacao: "Voce é estranho"
            }
        ]

    }
   





    function mostraPergunta(){
    if (atual>= perguntas.length){
        mostraResultado();
        return;
        
    }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
     }
    