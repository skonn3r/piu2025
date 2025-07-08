import React, { useState } from "react";
import ItemTarefa from "./ItemTarefa";

export default function ListaTarefas({ tarefas, mudarStatus, mover, excluirSelecionadas }) {
  const [selecionadas, setSelecionadas] = useState([]);

  function toggleSelecionada(index) {
    setSelecionadas((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  }

  function excluirTarefa(index) {
    excluirSelecionadas([index]);
    setSelecionadas((prev) => prev.filter((i) => i !== index));
  }

  return (
    <>
      <button
        onClick={() => excluirSelecionadas(selecionadas)}
        disabled={selecionadas.length === 0}
        className="button button-red"
      >
        Excluir Selecionadas
      </button>

      <ul className="lista">
        {tarefas.map((tarefa, index) => (
            <ItemTarefa
              key={index}
              index={index}
              tarefa={tarefa}
              mudarStatus={mudarStatus}
              mover={mover}
              onSelecionar={() => toggleSelecionada(index)}
              selecionado={selecionadas.includes(index)}
              excluirTarefa={() => excluirTarefa(index)}
              total={tarefas.length}
            />
        ))}
      </ul>
    </>
  );
}
