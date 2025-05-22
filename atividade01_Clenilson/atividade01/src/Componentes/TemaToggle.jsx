import React from 'react';

export default function TemaToggle({ temaAtual, onToggle }) {
  return (
    <button onClick={onToggle}>
      Mudar para {temaAtual === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
