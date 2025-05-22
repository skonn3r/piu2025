import React from 'react';
import Card from './Card';
import './Galeria.css';

export default function Galeria({ personagens, onCardClick }) {
  return (
    <div className="galeria">
      {personagens.map((p, index) => (
        <Card key={index} nome={p.nome} imagem={p.imagem} onClick={() => onCardClick(p)} />
      ))}
    </div>
  );
}
