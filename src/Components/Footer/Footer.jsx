import React from "react";
import './Footer.css'

export default (props) => {
  return(
      <footer className="footer center mt-3 pb-3">
        <div className="text-center p-2">
          <h2 className="font-config">Formas de pagamento</h2>
          <img className="cartoes" src={props.fotoCartoes} alt="Aceitamos cartões" />

        </div>
        <article className="text-center mt-4 font-config">&copy; LR VIAGENS - RECODE PRO</article>
      </footer>
  );
}