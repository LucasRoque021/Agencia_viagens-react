import React, { useEffect, useRef, useState } from "react";
import './FiltroPromocao.css';
import { getDestinos } from "../../../service/DestinoServices";


import { connect } from "react-redux";




 function FiltroPromocao({dispatch}) {

  const [destino, setDestino] = useState([])
  const inputFiltroPromocao = useRef()

  function selecionarDestino(){
    const value = inputFiltroPromocao.current.value
    console.log(value)

    return{
      type: "SELECIONAR_DESTINO",
      destinoEscolhido: value
    }
  }

  useEffect(() => { getDestinos().then((res) => setDestino(res)).catch((erro) => console.log(erro))},[])

  return(
    <select onChange={() => dispatch(selecionarDestino())} className="input-filtroPromocao mt-3 mb-1" ref={inputFiltroPromocao}>
      <option className="text-center" value="Todas as Promoções">Todas as Promoções</option>
      {destino.map((destino) => <option className="text-center" value={destino.nomeDestino}>{destino.nomeDestino}</option> )}
    </select>
  )
}

export default connect(state => ({destinoEscolhido: state.destinoEscolhido}))(FiltroPromocao);