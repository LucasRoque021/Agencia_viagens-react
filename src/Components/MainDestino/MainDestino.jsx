import React, { useEffect, useState } from "react";
import './MainDestinos.css'

import {Link} from "react-router-dom";
import { getDestinos } from "../../service/DestinoServices";



 function MainDestino() {
  
  const [destino, setDestino] = useState([])
  

  useEffect(() => {getDestinos().then((res) => setDestino(res)).catch((erro) => console.log(erro))},[])

  

  return(
    <main className="pb-3 mt-2 font-config">
      <h1 className="font-config text-center">Nossos Destinos</h1>

      {destino.map((destino) => (
        
          <section className="card-destino container mt-5" key={destino.idDestino}>

            <div className="row align-items-center">
              
              <div className="col-md-6 destino-foto">
                <Link to={"/Promocao"}>
                  <img src={destino.foto} alt={`Foto de ${destino.nomeDestino}`}/>
                </Link>
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

export default MainDestino