import React, { useState } from 'react';

const TrocarImagem = () => {
  const personagens = [
    {
      nome: 'Relâmpago McQueen',
      imagem: 'mcquen.webp',
      descricao: (
        <>
          Relâmpago McQueen é o carro de corrida vermelho número 95, protagonista da franquia <em>Carros</em>.
          É conhecido por sua velocidade, confiança e carisma. Ao longo dos filmes, aprende sobre amizade,
          humildade e trabalho em equipe.
        </>
      ),
      alt: 'Imagem do McQueen'
    },
    {
      nome: 'Mate',
      imagem: 'mate.webp',
      descricao: (
        <>
          Mate é um caminhão-reboque enferrujado, simples e de bom coração. Apesar de seu jeito atrapalhado,
          é extremamente leal, engraçado e sempre pronto para ajudar seus amigos. Sua amizade com McQueen é um
          dos pilares da franquia <em>Carros</em>.
        </>
      ),
      alt: 'Imagem do Mate'
    }
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const trocarImagem = () => {
    setIndiceAtual(prev => (prev + 1) % personagens.length);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const personagemAtual = personagens[indiceAtual];

  const temaEstilo = {
    backgroundColor: darkMode ? '#121212' : '#f2f2f2',
    color: darkMode ? '#f2f2f2' : '#121212',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: '40px 20px',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    fontFamily: 'Arial'
  };

  const botaoEstilo = {
    padding: '10px 20px',
    margin: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: darkMode ? '#333' : '#ddd',
    color: darkMode ? '#fff' : '#000',
    transition: 'background-color 0.3s ease'
  };

  return (
    <div style={temaEstilo}>
      <h2>{personagemAtual.nome}</h2>

      <p>{personagemAtual.descricao}</p>

      <img
        src={personagemAtual.imagem}
        alt={personagemAtual.alt}
        width={300}
        style={{ borderRadius: '10px', margin: '20px 0' }}
      />

      <div>
        <button onClick={trocarImagem} style={botaoEstilo}>
          Trocar Imagem
        </button>
        <button onClick={toggleDarkMode} style={botaoEstilo}>
          {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
      </div>
    </div>
  );
};

export default TrocarImagem;
