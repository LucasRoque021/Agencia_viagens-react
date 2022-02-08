import React from "react";
import './Carousel.css';

export default (props) => {
  return (
        <section>
          <div id="carouselExampleControls" className="carousel slide mb-3" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={props.fotorj} alt="Foto do Rio de Janeiro"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Rio de Janeiro</h5>

                </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={props.fotosa} alt="Foto de Salvador"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Salvador</h5>
                </div>

              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={props.fotosp} alt="Foto de São Paulo"/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>São Paulo</h5>
                </div>

              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Anterior</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Próximo</span>
              </a>
            </div>
          </div>
        </section>
  );
}