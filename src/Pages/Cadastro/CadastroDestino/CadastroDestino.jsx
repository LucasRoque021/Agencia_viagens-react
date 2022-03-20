import React from "react";
import Navbar from '../../../Components/Navbar/Navbar'
import logoviagem from '../../../assets/img/logoviagem.png'
import './CadastroDestino.css'
import TabelaCadastro from "../../../Components/TabelaCadastro/TabelaCadastro";
import FormCadastroDestino from "../../../Components/FormCadastroDestino/FormCadastroDestino";


export default () => {

  return(
    <>
      <Navbar foto={logoviagem}/>
      <main className="container-cadastro-destino">
        <FormCadastroDestino titulo="Cadastro de destinos"/>
        <TabelaCadastro/>
      </main>

      

    </>
  );
}