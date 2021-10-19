import React from "react";

import cliente_1 from "../img/cliente_1.png";
import cliente_2 from "../img/cliente_2.png";
import cliente_3 from "../img/cliente_3.png";

const Clientes = () => {
  return (
    <div className="container p-3">
      <h1 className="text-center">CLIENTES</h1>
      <div className="container">
        <div className="row p-3">
          <p>Nuestros clientes destacados.</p>
          <div className="card-group">
            <div className="card">
              <img
                src={cliente_1}
                className="card-img-top"
                alt="Cliente de AutoTrux"
              />
            </div>
            <div className="card">
              <img
                src={cliente_2}
                className="card-img-top"
                alt="Cliente de AutoTrux"
              />
            </div>
            <div className="card">
              <img
                src={cliente_3}
                className="card-img-top img-fluid"
                alt="Cliente de AutoTrux"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
