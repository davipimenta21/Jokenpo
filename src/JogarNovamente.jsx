import React from 'react';

const JogarNovamente = ({ reiniciarJogo }) => {
  return (
    <button className="jogar-novamente" onClick={reiniciarJogo}>
      Jogar Novamente
    </button>
  );
};

export default JogarNovamente;
