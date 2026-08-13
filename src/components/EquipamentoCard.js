const EquipamentoCard = ({ equipamentos }) => {
  return (
    <div className="card">
      <img className="imagem-equip" src={equipamentos.imagem} alt={equipamentos.nome} />
        <h2 className="nome-equip">{equipamentos.nome}</h2>
        <p className={'status status=${equipamentos.status.toLowerCase()}'}/>
              Status: {equipamentos.status}
    </div>
  );
}

export default EquipamentoCard

