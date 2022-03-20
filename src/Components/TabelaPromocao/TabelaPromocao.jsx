import React from "react";
import './TabelaPromocao.css'
import { useEffect,useState } from "react";

import { deletarPromocao, getPromocoes } from "../../service/PromocaoService";



export default () => {

  const [promocao, setPromocao] = useState([])
  
  

  useEffect(() => {getPromocoes().then((res) => setPromocao(res)).catch((erro) => console.log(erro))},[])

  function deletar(id) {
    deletarPromocao(id).then(getPromocoes().then((res) => setPromocao(res)).then(() => window.location.reload())).catch((erro) => console.log(erro))
  }

  return(
      <div className="tabela-cadastro mt-4 mb-4 table-responsive">

        <table className="table table-sm table-borderless table-hover">
            <thead>
                <tr>
                    <th>
                        Destino
                    </th>
                    <th>
                        Local de embarque
                    </th>
                    <th>
                        Preço
                    </th>
                    <th>
                        Tempo de viagem
                    </th>
                    <th>
                        Data de embarque
                    </th>
                    <th>

                    </th>
                </tr>
            </thead>
            <tbody>
              {promocao.map((promocao) => (
                <tr key={promocao.idPromocao}>
                  <td>
                      {promocao.destino.nomeDestino}
                  </td>
                  <td>
                      {promocao.localPartida}
                  </td>
                  <td>
                      {promocao.precoPromocao}
                  </td>
                  <td>
                      {promocao.tempoDeViagem}
                  </td>
                  <td>
                      {promocao.data.replace('T', ' ')}
                  </td>
                  <td>
                    <button className="btn btn-cadastro" onClick={() => deletar(promocao.idPromocao)}>Excluir</button>
                  </td>
              
                 </tr>
              ))}
              

            </tbody>
        </table>
    
      </div>
  );
}