import React from "react";
import './Contatos.css'
import Navbar from "../../Components/Navbar/Navbar";
import logoviagem from '../../assets/img/logoviagem.png';
import Footer from "../../Components/Footer/Footer";
import cartoes from "../../assets/img/cartoes.png";
import MainContatos from "../../Components/MainContatos/MainContatos";

export default () => {
  return(
    <>
      <Navbar foto={logoviagem}/>

      <MainContatos/>

      <Footer fotoCartoes={cartoes}/>
    </>
  );
}