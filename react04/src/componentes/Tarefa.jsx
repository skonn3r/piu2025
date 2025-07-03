import React, { useState } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [texto, setTexto] = useState("");
  const [filtro, setFiltro] = useState("todos");

  function adicionarTarefa(e) {
    e.preventDefault();
    if (texto.trim() === "") return;
    if (tarefas.some(tarefa => tarefa.texto === texto)) {
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
  function aplyFillter(valor) {
    setFiltro(valor);
  }
  const tarefasFiltradas = tarefas.filter(tarefa => {
    if (filtro === "todos") return true;
    return tarefa.status === filtro;
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📝 Lista de Tarefas</h2>
      <form onSubmit={adicionarTarefa} style={styles.form}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nova tarefa"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Adicionar
        </button>
        <button type="button" onClick={resetar} style={{ ...styles.button, backgroundColor: "#e74c3c" }}>
          Resetar
        </button>
        <label>Filtros</label>
        <select onChange={(e) => aplyFillter(e.target.value)} style={styles.input}>
          <option value="todos">Todos</option>
          <option value="pendente">Pendentes</option>
          <option value="realizada">Realizadas</option>
          <option value="não realizada">Não Realizadas</option>
        </select>
      </form>

      <ul style={styles.lista}>
        {tarefasFiltradas.map((tarefa, index) => (
          <li key={index} style={styles.item}>
            <span style={{ ...styles.texto, color: getStatusColor(tarefa.status) }}>
              {tarefa.texto} ({tarefa.status})
            </span>
            <div style={styles.botoes}>
              <button onClick={() => mudarStatus(index, "realizada")} style={styles.smallButton}>
                Realizada
              </button>
              <button onClick={() => mudarStatus(index, "não realizada")} style={styles.smallButton}>
                Não Realizada
              </button>
              <button onClick={() => mudarStatus(index, "pendente")} style={styles.smallButton}>
                Pendente
              </button>
              <button onClick={() => mover(index, -1)} style={styles.smallButton}>
                ↑
              </button>
              <button onClick={() => mover(index, 1)} style={styles.smallButton}>
                ↓
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


const styles = {
  container: {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap"
  },
  input: {
    flex: "1",
    padding: "10px",
    fontSize: "16px"
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  lista: {
    listStyle: "none",
    padding: 0
  },
  item: {
    backgroundColor: "white",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
  },
  texto: {
    fontSize: "16px",
    fontWeight: "bold"
  },
  botoes: {
    marginTop: "10px",
    display: "flex",
    flexWrap: "wrap",
    gap: "8px"
  },
  smallButton: {
    padding: "5px 10px",
    fontSize: "14px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#ddd",
    cursor: "pointer"
  }
};
  