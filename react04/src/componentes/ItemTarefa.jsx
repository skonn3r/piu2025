export default function ItemTarefa({
  tarefa,index,mudarStatus,mover,onSelecionar,selecionado,excluirTarefa,total,}) {
    
  function getStatusColor(status) {
    if (status === "realizada") return "green";
    if (status === "não realizada") return "red";
    return "orange";
  }

  return (
    <li className="item">
  <div className="checkbox-topo-direita">
    <input
      type="checkbox"
      checked={selecionado}
      onChange={onSelecionar}
    />
  </div>

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
    <button onClick={excluirTarefa} className="button button-red">Excluir</button>
    {index > 0 && (
      <button onClick={() => mover(index, -1)} className="btn-up">↑</button>
    )}
    {index < total - 1 && (
      <button onClick={() => mover(index, 1)} className="btn-down">↓</button>
    )}
  </div>
</li>

  );
}
