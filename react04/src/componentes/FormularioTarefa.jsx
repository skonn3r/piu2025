export default function FormularioTarefa({ texto, setTexto, adicionarTarefa, resetar, applyFilter }) {
  return (
    <form onSubmit={adicionarTarefa} className="form">
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nova tarefa"
        className="input"
      />
      <button type="submit" className="button">Adicionar</button>
      <button type="button" onClick={resetar} className="button button-red">Resetar</button>
      <label className="label">Filtros</label>
      
      <select onChange={(e) => applyFilter(e.target.value)} className="input">
        <option value="todos">Todos</option>
        <option value="pendente">Pendentes</option>
        <option value="realizada">Realizadas</option>
        <option value="não realizada">Não Realizadas</option>
      </select>
    </form>
  );
}
