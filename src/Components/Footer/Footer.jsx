import React from "react";
import './Footer.css'

export default (props) => {
  return(
      <footer className="footer mb-3 center">
        <div className="text-center">
          <h2 className="font-config">Formas de pagamento</h2>
          <img className="cartoes" src={props.fotoCartoes} alt="Aceitamos cartões" />

        </div>
      </footer>
  );
}