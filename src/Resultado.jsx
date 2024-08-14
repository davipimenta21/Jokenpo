import React from 'react';

const Resultado = ({ escolhaJogador, escolhaComputador, resultado }) => {
  return (
    <div className="resultado">
      <p>Você escolheu: {escolhaJogador}</p>
      <p>Computador escolheu: {escolhaComputador}</p>
      <h2>{resultado}</h2>
    </div>
  );
};

export default Resultado;
