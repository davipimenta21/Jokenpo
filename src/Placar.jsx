import React from 'react';

const Placar = ({ pontuacaoJogador, pontuacaoComputador, empates }) => {
  return (
    <div className="placar">
      <h2>Placar</h2>
      <p>Jogador: {pontuacaoJogador}</p>
      <p>Computador: {pontuacaoComputador}</p>
      <p>Empates: {empates}</p>
    </div>
  );
};

export default Placar;
