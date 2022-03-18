import React from "react";
import { useState } from "react";
import './CardPromocao.css';


export default(props) => {
    
    const [num, setNum] = useState(1)

    

    

  return(
    <>


      <section className="card-promocao font-config">
        <div className="foto-promocao">
          <img id="onibus" src= {props.fotoPromocao} alt="Foto da promoção" />
        </div>
        <section>

          <h3 className="text-center mt-2">{props.destino}</h3>
          <p>Data de embarque: {props.dataEmbarque}</p>
          <p>Local de embarque: {props.localEmbarque}</p>
        </section>
        <section className="qtdPassagem">
          <span>Nº de passagens: </span>
          <div>
            <button className="btn botaoPassagens" onClick={()=>{ if(num>1)setNum(num-1)}}>-</button>
            <span className="mr-1 ml-1">{num}</span>
            <button className="btn botaoPassagens" onClick={()=> setNum(num+1)}>+</button>
          </div>
        </section>

        <section className="preco">
          <h3>R$ {Number(props.preco).toFixed(2)}</h3>
          <a role="button" href="#">Comprar</a>
        </section>
      </section>

      
    </>
    
  );
}