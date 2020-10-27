import React from "react";
import Requisitante from "./components/requisitante/requisitante"
import Pedido from "./components/pedido/pedido"
import Equipamento from "./components/caracteristicasDoEquipamento/equipamento"
import Ficha from "./components/fichaDelTecnico/ficha"
import Horario from "./components/horario/horario"
import Descripcion from "./components/descripcion/descripcion"
import Materiales from "./components/materialUtilizado/materiales"

export default function Home() {
  return <div><h1>Relatorio de Serviço</h1>
    <Requisitante />
    <Pedido />
    <Equipamento />
    <Ficha />
    <Horario />
    <Descripcion />
    <Materiales />
  </div>

}