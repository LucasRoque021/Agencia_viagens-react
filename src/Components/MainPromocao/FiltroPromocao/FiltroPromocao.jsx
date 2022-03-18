import React, { useEffect, useRef, useState } from "react";
import './FiltroPromocao.css';
import api from "../../../api";


export default () => {

  const [destino, setDestino] = useState([])
  const inputFiltroPromocao = useRef()

  useEffect(() => { api.get("/destinos").then((res) => setDestino(res.data)).catch((erro) => console.log(erro))},[])

  return(
    <select className="input-filtroPromocao mt-3 mb-1" ref={inputFiltroPromocao}>
      <option className="text-center" value="Todas as Promoções" selected>Todas as Promoções</option>
      {destino.map((destino) => <option className="text-center" value={destino.nomeDestino}>{destino.nomeDestino}</option> )}
    </select>
  )
}