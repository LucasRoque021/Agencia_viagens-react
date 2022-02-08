import React from "react";
import './TituloCadastro.css';

export default (props) => {
  return(
    <section className="container-fluid mb-2">
          <h1 className="font-config">{props.titulo}</h1>

          <p>
            <a className="btn btn-cadastro" role="button" href="#"
              >{props.nomeBotao}</a
            >
          </p>
    </section>
  );
}