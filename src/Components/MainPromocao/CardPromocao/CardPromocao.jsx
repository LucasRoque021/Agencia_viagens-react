import React from "react";
import './CardPromocao.css';

export default(props) => {
    let destino = props.destino;
    let dataEmbarque;
    let preco;

    switch(destino){
      case "Campos":
        dataEmbarque = "28/03/2022 10:00";
        preco = "80,00";
        break;
      case "São Paulo":
        dataEmbarque = "29/03/2022 12:00";
        preco = "100,00";
        break;
      case "Petrópolis":
        dataEmbarque = "30/03/2022 09:00";
        preco = "60,00";
        break;
      case "Santos":
        dataEmbarque = "02/03/2022 09:30";
        preco = "90,00";
        break;
      case "Belo Horizonte":
        dataEmbarque = "20/03/2022 22:00";
        preco = "100,00";
        break;
      case "Recife":
        dataEmbarque = "27/03/2022 07:45";
        preco = "150,00";
        break;
      case "Porto Alegre":
        dataEmbarque = "14/03/2022 14:20";
        preco = "150,00";
        break;
      case "Salvador":
        dataEmbarque = "25/02/2022 13:15";
        preco = "135,00";
        break;
      case "Brasilia":
        dataEmbarque = "08/03/2022 17:40";
        preco = "120,00";
        break;
      case "Fortaleza":
        dataEmbarque = "12/03/2022 22:00";
        preco = "160,00";
        break;
      case "Manaus":
        dataEmbarque = "09/03/2022 23:00";
        preco = "180,00";
        break;
    }
  return(
    <>
      <div className="card-promocao font-config">
        <div className="foto-promocao">
          <img id="onibus" src= {props.fotoPromocao} alt="Foto da promoção" />
        </div>
        <section>

          <h3 className="text-center">{props.destino}</h3>
          <p>Data de embarque: {dataEmbarque}</p>
        </section>

        <section className="preco">
          <h3>R$ {preco}</h3>
          <a role="button" href="#">Comprar</a>
        </section>
      </div>

      
    </>
    
  );
}