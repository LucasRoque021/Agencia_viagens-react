import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import logoviagem from '../../assets/img/logoviagem.png';
import MainHome from "../../Components/MainHome/MainHome";
import mapa_brasil from "../../assets/img/mapa_brasil.png";
import bus from "../../assets/img/bus.png";
import Footer from "../../Components/Footer/Footer";
import cartoes from "../../assets/img/cartoes.png";

export default () => {
  return(
    <>
      <Navbar foto={logoviagem}/>

      <MainHome mapa={mapa_brasil} bus={bus}/>

      <Footer fotoCartoes={cartoes}/>
      
    </>
  )
}