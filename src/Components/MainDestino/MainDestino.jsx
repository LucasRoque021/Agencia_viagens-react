import React, { useEffect, useState } from "react";
import './MainDestinos.css'
import TituloCadastro from "../TituloCadastro/TituloCadastro";
import TabelaDestinos from "./TabelaDestinos/TabelaDestinos";
import api from "../../api";



export default () => {
  
  const [destino, setDestino] = useState([])


  useEffect(() => {api.get('/destinos').
  then((res) => setDestino(res.data)).catch((erro) => console.log(erro))},[])

  return(
    <main class="pb-3 mt-2 font-config">
      <h1 className="font-config text-center">Nossos Destinos</h1>

      {destino.map((destino) => (
        <section className="card-destino container mt-5" key={destino.idDestino}>

          <div className="row align-items-center">
            <div className="col-md-6 destino-foto">
              <img src={destino.foto} alt={`Foto de ${destino.nomeDestino}`}/>
            </div>
            <div className="col-md-6 destino-texto">
              <h4 className="text-center mb-2">{destino.nomeDestino}</h4>
              <p className="text-center">{destino.descricao}</p>
            </div>
          </div>
        </section>
      ))}

         
    </main>
  );
}