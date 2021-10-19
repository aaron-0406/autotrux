import React from "react";

import nosotros from "../img/nosotros.png";
import vision from "../img/vision_autotrux.png";
import mision from "../img/mision_autotrux.png";
import valores from "../img/valores_autotrux.png";

const Nosotros = () => {
  return (
    <div className="container p-3">
      <h1 className="text-center">NOSOTROS</h1>
      <div className="container">
        <div className="row p-3">
          <div className="col-md-6 p-3">
            <p style={{ textAlign: "justify" }}>
              AutoTrux nace de la visión de nuestro fundador, quien estaba
              planeando las vacaciones de verano para su familia. Se dispuso a
              consultar las alternativas de transporte, pero notaba que faltaba
              una alternativa más personal, con mayor libertad para escoger, con
              unidades que se ajusten a las necesidades y poder compartir la
              experiencia de estar a bordo de un vehículo moderno, apto en todos
              los aspectos. Buscaba también, que las opciones se ajusten a su
              economía, sin que ello represente disminuir en alguna forma la
              calidad del servicio.
              <br />
              <br />
              Es en ese contexto que surge la propuesta de ofrecer exactamente
              lo que el mercado de renta de automóviles no ofrecía. Se logró
              mediante una plataforma más cercana a las personas, con procesos
              más rápidos y transparentes, con una amplia gama de unidades
              modernas de las cuales poder elegir la que se necesite o prefiera.
              Lo más importante, todo lo anterior al alcance del bolsillo de
              nuestros clientes. <br />
              <br />
              Es así que, AutoTrux a través de los años ha ido ofreciendo la
              mejor experiencia de alquiler de automóviles modernos en la ciudad
              de Trujillo, con un trato transparente y respetuoso con nuestros
              clientes. El resultado: solo debes preocuparte por disfrutar tu
              fin de semana, paseo, viaje o vacaciones; lo que prefieras.
              <br />
              <br />
              ¡Bienvenido a AutoTrux!
            </p>
          </div>
          <div className="col-md-6 p-3 my-auto">
            <img
              src={nosotros}
              className="img-fluid"
              alt="Bienvenido a AutoTrux"
            />
          </div>
        </div>
        <div className="row p-3">
          <div className="card-group">
            <div className="card">
              <img
                src={vision}
                className="card-img-top"
                alt="Visión de AutoTrux"
              />
              <div className="card-body">
                <h5 className="card-title">Visión</h5>
                <p className="card-text">
                  Revolucionar el servicio de renta de automóviles en Perú, con
                  la colaboración de profesionales altamente calificados en el
                  rubro.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={mision}
                className="card-img-top"
                alt="Misión de AutoTrux"
              />
              <div className="card-body">
                <h5 className="card-title">Misión</h5>
                <p className="card-text">
                  Ofrecer la mejor experiencia de renta de automóviles para
                  nuestros clientes, poniendo a su disposición la más amplia y
                  moderna flota de unidades.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src={valores}
                className="card-img-top img-fluid"
                alt="Valores de AutoTrux"
              />
              <div className="card-body">
                <h5 className="card-title">Valores</h5>
                <p className="card-text"></p>
                <li>Honestidad</li>
                <li>Puntualidad</li>
                <li>Transparencia</li>
                <li>Compromiso</li>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
