import React from 'react';
import './Card.css';

export default function Card({ nome, imagem, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={imagem} alt={nome} />
      <p>{nome}</p>
    </div>
  );
}
