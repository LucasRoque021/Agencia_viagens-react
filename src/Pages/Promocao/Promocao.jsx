import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import logoviagem from '../../assets/img/logoviagem.png';
import Footer from "../../Components/Footer/Footer";
import cartoes from "../../assets/img/cartoes.png";
import MainPromocao from "../../Components/MainPromocao/MainPromocao";
import './Promocao.css';

export default () =>{
  return(
    <>
      <Navbar foto={logoviagem}/>
      <main className="bg-promocao">

      <MainPromocao/>

      <Footer fotoCartoes={cartoes}/>
      </main>
    </>
  );
}