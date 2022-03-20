import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import logoviagem from "../../../assets/img/logoviagem.png"
import './CadastroPromocao.css';
import TabelaPromocao from "../../../Components/TabelaPromocao/TabelaPromocao";
import FormCadastroPromocao from "../../../Components/FormCadastroPromocao/FormCadastroPromocao";


export default () => {

  return(
    <>
      <Navbar foto={logoviagem}/>
      <main className="container-cadastro-destino">
        <FormCadastroPromocao titulo="Cadastro de promoção"/>
        <TabelaPromocao/>
      </main>

      

    </>
  );
}