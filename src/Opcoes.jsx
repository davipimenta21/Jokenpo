import React from 'react';

const Opcoes = ({ jogarRodada }) => {
  return (
    <div className="opcoes">
      <button onClick={() => jogarRodada('Pedra')}>Pedra</button>
      <button onClick={() => jogarRodada('Papel')}>Papel</button>
      <button onClick={() => jogarRodada('Tesoura')}>Tesoura</button>
    </div>
  );
};

export default Opcoes;
