import React from "react";
import { useState, useEffect } from "react";
import './MainPromocao.css';
import CardPromocao from "./CardPromocao/CardPromocao";
import FiltroPromocao from "./FiltroPromocao/FiltroPromocao";
import bus from "../../assets/img/bus.png"
import api from "../../api";

export default () =>{

  const [promocao, setPromocao] = useState([])


  useEffect(() => {api.get('/promocoes')
  .then((res) => setPromocao(res.data)).catch((erro) => console.log(erro))},[])

  return(
    <main>
        <section className="container-fluid mb-2 text-center">
          <h1 className="font-config pt-3">Promoções</h1>
          <FiltroPromocao/>
        </section>


        <div className="tela-promocao">
          {promocao.map((promocao) => (
            <CardPromocao destino = {promocao.destino.nomeDestino} fotoPromocao={(promocao.destino.foto === ""? bus:promocao.destino.foto )} dataEmbarque={promocao.data} localEmbarque={promocao.localPartida} preco={promocao.precoPromocao}  key= {promocao.idPromocao}/>
          ))}
          
        </div>
        <div className="tela-promocao">
          <CardPromocao destino = {"Campos"} fotoPromocao={bus}/>
          <CardPromocao destino = {"São Paulo"} fotoPromocao={bus}/>
          <CardPromocao destino = {"Petrópolis"} fotoPromocao={bus}/>
          <CardPromocao destino = {"Santos"} fotoPromocao={bus}/>
          <CardPromocao destino = {"Belo Horizonte"} fotoPromocao={bus}/>
          <CardPromocao destino = {"Recife"} fotoPromocao={bus}/>
          <CardPromocao destino = {"Salvador"} fotoPromocao={bus}/>
          <CardPromocao destino = {"Brasilia"} fotoPromocao={bus}/>
          <CardPromocao destino = {"Porto Alegre"} fotoPromocao={bus}/>
        </div>
        
      </main>
  );
}