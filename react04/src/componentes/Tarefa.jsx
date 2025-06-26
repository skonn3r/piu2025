import React, { useState } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionarTarefa(e) {
    e.preventDefault();
    if (texto.trim() === "") return;
    setTarefas([...tarefas, texto]);
    setTexto("");
  }

  function resetarTarefas() {
    setTarefas([]);
  }

  return (
    <div>
        <h2> Lista de Tarefas React </h2>
      <form onSubmit={adicionarTarefa}>
        <input value={texto} onChange={e => setTexto(e.target.value)} />
        <button type="submit">Adicionar</button>
        <p></p>
        <button type="button" onClick={resetarTarefas}>Resetar</button>
      </form>

      <ul>
        {tarefas.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}
