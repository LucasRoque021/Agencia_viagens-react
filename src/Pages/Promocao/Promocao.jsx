import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import logoviagem from '../../assets/img/logoviagem.png';
import Footer from "../../Components/Footer/Footer";
import cartoes from "../../assets/img/cartoes.png";
import MainPromocao from "../../Components/MainPromocao/MainPromocao";

export default () =>{
  return(
    <>
      <Navbar foto={logoviagem}/>

      <MainPromocao/>

      <Footer fotoCartoes={cartoes}/>
    </>
  );
}