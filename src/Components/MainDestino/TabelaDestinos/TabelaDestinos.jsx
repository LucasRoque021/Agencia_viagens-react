import React from "react";
import './TabelaDestinos.css';

export default () => {
  return(
      <div className="tabela-cadastro mt-4 mb-4 table-responsive">

        <table className="table table-sm table-borderless table-hover">
            <thead>
                <tr>
                    <th>
                        Destino
                    </th>
                    <th>
                        Preço da passagem
                    </th>
                    <th>
                        Data de embarque
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
      
              <tr>
                  <td>
                      Belo Horizonte
                  </td>
                  <td>
                      R$119,90
                  </td>
                  <td>
                      19/02/2022 09:00
                  </td>
                  <td>
                    <a className="btn btn-cadastro" role="button" asp-action="Edit" href="#">Editar</a>
                    <a className="btn btn-cadastro" role="button" href="#">Detalhes</a>
                    <a className="btn btn-cadastro" role="button" href="#">Apagar</a>
                  </td>
                
              </tr>

              <tr>
                  <td>
                      Brasilia
                  </td>
                  <td>
                      R$150,00
                  </td>
                  <td>
                      27/02/2022 14:00
                  </td>
                  <td>
                      <a className="btn btn-cadastro" role="button" asp-action="Edit" href="#">Editar</a>
                      <a className="btn btn-cadastro" role="button" href="#">Detalhes</a>
                      <a className="btn btn-cadastro" role="button" href="#">Apagar</a>
                  </td>
                
              </tr>

              <tr>
                <td>
                    Petrópolis
                </td>
                <td>
                    R$55,50
                </td>
                <td>
                    20/02/2022 10:30
                </td>
                <td>
                    <a className="btn btn-cadastro" role="button" asp-action="Edit" href="#">Editar</a>
                    <a className="btn btn-cadastro" role="button" href="#">Detalhes</a>
                    <a className="btn btn-cadastro" role="button" href="#">Apagar</a>
                </td>
            
              </tr>

              <tr>
                <td>
                    Recife
                </td>
                <td>
                    R$150,00
                </td>
                <td>
                    28/03/2022 09:30
                </td>
                <td>
                    <a className="btn btn-cadastro" role="button" asp-action="Edit" href="#">Editar</a>
                    <a className="btn btn-cadastro" role="button" href="#">Detalhes</a>
                    <a className="btn btn-cadastro" role="button" href="#">Apagar</a>
                </td>
              
              </tr>

            </tbody>
        </table>
    
      </div>
  );
}