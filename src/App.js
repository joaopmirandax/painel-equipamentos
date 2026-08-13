import React from "react";
import EquipamentoCard from "./components/EquipamentoCard";
import equipamentos from "./data/equipamentos";
import './style/visual.css';

function App(){
  return(
    <div className="app-container">
      <h1 className="titulo">Painel de Equipamentos Inteligentes</h1>
      {equipamentos.map(equipamentos =>(
        <EquipamentoCard key={equipamentos.id} equipamentos={equipamentos} />
      ))}
    </div>
  )
}

export default App;
