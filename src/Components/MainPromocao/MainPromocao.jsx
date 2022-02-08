import React from "react";
import './MainPromocao.css';
import CardPromocao from "./CardPromocao/CardPromocao";
import bus from "../../assets/img/bus.png"

export default () =>{
  return(
    <main className="pb-3 mt-3">
        <section className="container-fluid mb-2 text-center">
          <h1 className="font-config">Promoções</h1>
        </section>
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