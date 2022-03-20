import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import logoviagem from '../../assets/img/logoviagem.png'
import './Cadastro.css'
import { Link } from "react-router-dom";


export default () => {

  return(
    <>
      <Navbar foto={logoviagem}/>
      <main className="container-cadastro">
        <Link to={"/Cadastro/CadastroDestino"}>
          <button>Acesso a cadastro de destinos</button>
        </Link>

        <Link to={"/Cadastro/CadastroPromocao"}>
          <button>Acesso a cadastro de promoções</button>
        </Link>
        
        <Link to={"/Cadastro/CadastroMensagem"}>
          <button>Acesso a mensagens</button>
        </Link>
      </main>
    </>
  );
}