import React, { useState } from "react";
import "./Tarefa.css";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");
  const [filtro, setFiltro] = useState("todos");

  function adicionarTarefa(e) {
    e.preventDefault();
    if (texto.trim() === "") return;
    if (tarefas.some((tarefa) => tarefa.texto === texto)) {
      alert("Tarefa já existe!");
      return;
    }

    const nova = { texto, status: "pendente" };
    setTarefas([...tarefas, nova]);
    setTexto("");
  }

  function mudarStatus(index, status) {
    const novas = [...tarefas];
    novas[index].status = status;
    setTarefas(novas);
  }

  function mover(index, direcao) {
    const novaLista = [...tarefas];
    const novoIndex = index + direcao;
    if (novoIndex < 0 || novoIndex >= tarefas.length) return;
    [novaLista[index], novaLista[novoIndex]] = [novaLista[novoIndex], novaLista[index]];
    setTarefas(novaLista);
  }

  function resetar() {
    setTarefas([]);
  }

  function getStatusColor(status) {
    if (status === "realizada") return "green";
    if (status === "não realizada") return "red";
    return "orange";
  }

  function applyFilter(valor) {
    setFiltro(valor);
  }

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "todos") return true;
    return tarefa.status === filtro;
  });

  return (
    <div className="container">
      <h2 className="title">📝 Lista de Tarefas</h2>
      <form onSubmit={adicionarTarefa} className="form">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nova tarefa"
          className="input"
        />
        <button type="submit" className="button">
          Adicionar
        </button>
        <button type="button" onClick={resetar} className="button button-red">
          Resetar
        </button>
        <label className="label">Filtros</label>
        <select onChange={(e) => applyFilter(e.target.value)} className="input">
          <option value="todos">Todos</option>
          <option value="pendente">Pendentes</option>
          <option value="realizada">Realizadas</option>
          <option value="não realizada">Não Realizadas</option>
        </select>
      </form>

      <ul className="lista">
        {tarefasFiltradas.map((tarefa, index) => (
          <li key={index} className="item">
            <span className="texto" style={{ color: getStatusColor(tarefa.status) }}>
              {tarefa.texto} ({tarefa.status})
            </span>
            <div className="botoes">
              <button onClick={() => mudarStatus(index, "realizada")} className="btn-realizado">
                Realizada
              </button>
              <button onClick={() => mudarStatus(index, "não realizada")} className="btn-nao-realizado">
                Não Realizada
              </button>
              <button onClick={() => mudarStatus(index, "pendente")} className="btn-pendente">
                Pendente
              </button>
              <button onClick={() => mover(index, -1)} className="btn-up">
                ↑
              </button>
              <button onClick={() => mover(index, 1)} className="btn-down">
                ↓
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
