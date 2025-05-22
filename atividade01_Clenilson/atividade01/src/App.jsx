import React, { useState } from 'react';
import Galeria from './Componentes/Galeria';
import Detalhes from './Componentes/Detalhes';
import TemaToggle from './Componentes/TemaToggle';

import './index.css';

import personagem1 from './assets/personagem1.png';
import personagem2 from './assets/personagem2.png';
import personagem3 from './assets/personagem3.png';
import personagem4 from './assets/personagem4.png';
import personagem6 from './assets/personagem6.png';

const listaPersonagens = [
  { nome: 'Strip Weatchers', descricao: 'O Rei (Strip Weathers) é um experiente e respeitado carro de corrida patrocinado pela Dinoco na franquia Carros.', imagem: personagem1 },
  { nome: 'Mack', descricao: 'Mack é o fiel caminhão-reboque do Relâmpago McQueen na franquia Carros. Leal, trabalhador e um pouco distraído, ele transporta McQueen para as corridas e está sempre pronto para ajudar seu amigo, mesmo nas situações mais difíceis..', imagem: personagem2 },
  { nome: 'Mcquen', descricao: 'Relâmpago McQueen é um carro de corrida vermelho, rápido e determinado, protagonista da franquia Carros da Pixar. Ele é conhecido por seu bordão "Kachow!" e aprende ao longo dos filmes que trabalho em equipe e humildade são tão importantes quanto vencer..', imagem: personagem3 },
  { nome: 'Mate', descricao: 'Mate é um velho guincho enferrujado e divertido da franquia Carros. Melhor amigo de Relâmpago McQueen, ele é leal, ingênuo e sempre bem-humorado. Mesmo simples, tem um grande coração e está sempre pronto para ajudar quem precisa..', imagem: personagem4 },
  { nome: 'Hicks', descricao: 'Chick Hicks é um carro de corrida competitivo e arrogante da franquia Carros. Rival de Relâmpago McQueen, ele está sempre disposto a vencer a qualquer custo, mesmo que isso signifique trapacear. Seu estilo convencido e atitude provocadora o tornam um antagonista marcante..', imagem: personagem6 },
];

export default function App() {
  const [tema, setTema] = useState('light');
  const [selecionado, setSelecionado] = useState(null);

  const alternarTema = () => {
    setTema((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${tema}`}>
      <TemaToggle temaAtual={tema} onToggle={alternarTema} />
      <Galeria personagens={listaPersonagens} onCardClick={setSelecionado} />
      <Detalhes personagem={selecionado} />
    </div>
  );
}
