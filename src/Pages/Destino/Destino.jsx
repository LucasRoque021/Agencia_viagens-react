import React from "react";
import './Destino.css';
import Navbar from "../../Components/Navbar/Navbar";
import logoviagem from '../../assets/img/logoviagem.png';
import Footer from "../../Components/Footer/Footer";
import cartoes from "../../assets/img/cartoes.png";
import MainDestino from "../../Components/MainDestino/MainDestino";

export default () => {
  return(
    <>
      <Navbar foto={logoviagem}/>

      <MainDestino/>

      <Footer fotoCartoes={cartoes}/>
    </>
  );
}