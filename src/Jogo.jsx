import React, { useState } from 'react';
import Placar from './Placar';
import Resultado from './Resultado';
import Opcoes from './Opcoes';
import JogarNovamente from './JogarNovamente';
import "./App.css"

const opcoes = ['Pedra', 'Papel', 'Tesoura'];

const Jogo = () => {
  const [escolhaJogador, setEscolhaJogador] = useState('');
  const [escolhaComputador, setEscolhaComputador] = useState('');
  const [resultado, setResultado] = useState('');
  const [pontuacaoJogador, setPontuacaoJogador] = useState(0);
  const [pontuacaoComputador, setPontuacaoComputador] = useState(0);
  const [empates, setEmpates] = useState(0);

  const jogarRodada = (escolha) => {
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    setEscolhaJogador(escolha);
    setEscolhaComputador(escolhaComputador);
    determinarVencedor(escolha, escolhaComputador);
  };

  const determinarVencedor = (jogador, computador) => {
    if (jogador === computador) {
      setResultado('Empate!');
      setEmpates(empates + 1);
    } else if (
      (jogador === 'Pedra' && computador === 'Tesoura') ||
      (jogador === 'Papel' && computador === 'Pedra') ||
      (jogador === 'Tesoura' && computador === 'Papel')
    ) {
      setResultado('Você Ganhou!');
      setPontuacaoJogador(pontuacaoJogador + 1);
    } else {
      setResultado('Você Perdeu!');
      setPontuacaoComputador(pontuacaoComputador + 1);
    }
  };

  const reiniciarJogo = () => {
    setEscolhaJogador('');
    setEscolhaComputador('');
    setResultado('');
    setPontuacaoJogador(0);
    setPontuacaoComputador(0);
    setEmpates(0);
  };

  return (
    <div className="jogo">
      <h1>Pedra, Papel, Tesoura</h1>
      <Placar 
        pontuacaoJogador={pontuacaoJogador} 
        pontuacaoComputador={pontuacaoComputador} 
        empates={empates} 
      />
      <Opcoes jogarRodada={jogarRodada} />
      {resultado && (
        <Resultado 
          escolhaJogador={escolhaJogador}
          escolhaComputador={escolhaComputador}
          resultado={resultado}
        />
      )}
      {resultado && <JogarNovamente reiniciarJogo={reiniciarJogo} />}
    </div>
  );
};

export default Jogo;
