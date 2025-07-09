import React, { useState } from "react";
import FormularioTarefa from "./componentes/FormularioTarefa";
import ListaTarefas from "./componentes/ListaTarefas";
import "./componentes/Tarefa.css";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");
  const [filtro, setFiltro] = useState("todos");

  function adicionarTarefa(e) {
    e.preventDefault();
    if (texto.trim() === "") return;
    if (tarefas.some((t) => t.texto === texto)) {
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

  function applyFilter(valor) {
    setFiltro(valor);
  }

  function excluirSelecionadas(selecionadas) {
    const novas = tarefas.filter((_, index) => !selecionadas.includes(index));
    setTarefas(novas);
  }



  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "todos") return true;
    return tarefa.status === filtro;
  });

  return (
  <>
    <div className="logo">
      <h1>Lista de Tarefas 📅</h1>
    </div>
    <div className="container">
      <FormularioTarefa
        texto={texto}
        setTexto={setTexto}
        adicionarTarefa={adicionarTarefa}
        resetar={resetar}
        applyFilter={applyFilter}
      />
      <ListaTarefas
        tarefas={tarefasFiltradas}
        mudarStatus={mudarStatus}
        excluirSelecionadas={excluirSelecionadas}
        mover={mover}
      />
    </div>
    </>
  );
}
