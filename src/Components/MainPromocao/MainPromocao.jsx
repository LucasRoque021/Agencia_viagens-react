import React from "react";
import { useState, useEffect } from "react";
import './MainPromocao.css';
import CardPromocao from "./CardPromocao/CardPromocao";
import FiltroPromocao from "./FiltroPromocao/FiltroPromocao";
import bus from "../../assets/img/bus.png"

import { getPromocoes } from "../../service/PromocaoService";

import { connect } from "react-redux";

function MainPromocao ({destinoEscolhido}) {

  const [promocao, setPromocao] = useState([])

  

  useEffect(() => {getPromocoes()
  .then((res) => setPromocao(res)).catch((erro) => console.log(erro))},[])

  return(
    <main>
        <section className="container-fluid mb-2 text-center">
          <h1 className="font-config pt-3">Promoções</h1>
          <FiltroPromocao/>
        </section>


        <div className="tela-promocao">
          {promocao.map((promocao) => {
            if(destinoEscolhido === promocao.destino.nomeDestino || destinoEscolhido === "Todas as Promoções"){ 
              return(
              <CardPromocao destino = {promocao.destino.nomeDestino} fotoPromocao={(promocao.destino.foto === ""? bus:promocao.destino.foto )} dataEmbarque={promocao.data} localEmbarque={promocao.localPartida} preco={promocao.precoPromocao}  key= {promocao.idPromocao}/>
            )}
            
          })}
          
        </div>
        
        
      </main>
  );
}

export default connect(state => ({destinoEscolhido: state.destinoEscolhido}))(MainPromocao);