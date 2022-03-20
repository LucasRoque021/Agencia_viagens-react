import React from "react";
import './FormCadastroPromocao.css';
import { useRef, useEffect, useState } from "react";

import { getDestinos } from "../../service/DestinoServices";
import { postPromocao } from "../../service/PromocaoService";



export default (props) => {

  const [destinoViagem, setDestinoViagem] = useState([])
  
  

  useEffect(() => {getDestinos()
  .then((res) => setDestinoViagem(res)).catch((erro) => console.log(erro))},[])

  const destino = useRef();
  const localEmbarque = useRef();
  const preco = useRef();
  const tempoViagem = useRef();
  const data = useRef();


  

  function postarPromocao(event) {
    event.preventDefault()
    const promocao = {
      localPartida: localEmbarque.current.value,
      precoPromocao: preco.current.value,
      tempoDeViagem: tempoViagem.current.value,
      data: data.current.value,
      destino: {idDestino: destino.current.value}
    }
    postPromocao(promocao).then(() => window.location.reload()).catch((erro) => console.log(erro))
  }

 

  return(
    <section className="container-fluid mb-2">
          <h1 className="font-config">{props.titulo}</h1>

          <form onSubmit={postarPromocao}>
            <div className="form-group">
              <label for="exampleFormControSelectlInput1">Nome do destino:</label>
              <select className="form-control" id="exampleFormControlSelect1" ref={destino}>
                {destinoViagem.map((destino) => (
                  <option key={destino.idDestino} value={destino.idDestino}>{destino.nomeDestino}</option>
                ))}
                
              </select>
             
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput2">Local de embarque:</label>
              <input type="text" className="form-control" id="exampleFormControlInput2" ref={localEmbarque}/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput3">Valor da promoção(R$):</label>
              <input type="number" className="form-control" id="exampleFormControlInput3" step={0.05} ref={preco}/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput3">Horas de viagem:</label>
              <input type="number" className="form-control" id="exampleFormControlInput3" ref={tempoViagem}/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput3">Data do embarque:</label>
              <input type="datetime-local" className="form-control" id="exampleFormControlInput3" ref={data}/>
            </div>
            <button type="submit" className="btn btn-cadastro">Cadastrar promoção</button>
          </form>
          
          
    </section>
  );
}