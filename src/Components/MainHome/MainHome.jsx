import React from "react";
import Carousel from "./Carousel/Carousel";
import foto_rio from "../../assets/img/foto_rio.png";
import foto_salvador from "../../assets/img/foto_salvador.png";
import foto_sp from "../../assets/img/foto_sp.png";
import "./MainHome.css";


export default (props) => {
  return(
      <main className="pb-3">
        <Carousel fotorj = {foto_rio} fotosa = {foto_salvador} fotosp = {foto_sp}/>

        <section>
          <div className="text-center mb-2">
            <h1 className="display-4">Bem-Vindo(a) à LR Viagens</h1>
            <p>Viagens de norte a sul do Brasil!</p>
          </div>

          <div className="container text-center">
            <div className="row justify-content-around">
              <div className="info-cards col-12 col-sm-5 mb-4">
                  <h5>Passagens para o Brasil inteiro</h5>
                  <div>
                      <img id="mapa-brasil" src={props.mapa} alt="Mapa do Brasil"/>
                      <ul>
                          
                          <li>Ônibus fretados</li>
                          <li>Variedade de horários de embarque</li>
                      </ul>
                  </div>
              </div>
              <div className="info-cards col-12 col-sm-5 mb-4">
                  <h5>Nossos ônibus</h5>
                  <div>
                      <img id="onibus" src={props.bus} alt="Ônibus" />
                      <ul>
                          <li>Wi-fi</li>
                          <li>Ar-condicionado</li>
                          <li>Conforto</li>
                          <li>Segurança</li>
                      </ul>
                  </div>
              </div>
            </div>
          </div>

        </section>
      </main>
  );
}