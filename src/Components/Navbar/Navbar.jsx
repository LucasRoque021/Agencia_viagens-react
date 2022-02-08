import React from "react";
import './Navbar.css';
import {Link} from "react-router-dom";


export default (props) => {
  return(
    <header>
        <nav className="navbar navbar-expand-md p-1 navbar-dark">
          <Link to="/">
            <a className="navbar-brand mr-4 align-middle logo text-light">
              <img src={props.foto} className="d-inline-block align-top" alt="Logomarca"/>LR Viagens
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#textoNavbar" aria-controls="textoNavbar" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="textoNavbar">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active mr-1">
                  <Link to="/">
                    <a className="nav-link">HOME <span className="sr-only">(Página atual)</span></a>
                  </Link>
                </li>
                <li className="nav-item active mr-1">
                  <Link to="/Destino">
                    <a className="nav-link">DESTINOS</a>                 
                  </Link>
                </li>
                <li className="nav-item active mr-1">
                  <Link to="/Promocao">
                    <a className="nav-link">PROMOÇÕES</a>                
                  </Link>
                </li>
                <li className="nav-item active mr-1">
                  <Link to="/Contatos">
                    <a className="nav-link">CONTATOS</a>
                  </Link>
                </li>
            </ul>

          </div>
        </nav>
    </header>
  );
}