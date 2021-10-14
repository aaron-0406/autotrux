import React from 'react';

import slide1 from "../img/slide1.png";
import slide2 from "../img/slide2.png";
import slide3 from "../img/slide3.png";

import aside0 from "../img/aside0.png";
import aside1 from "../img/aside1.png";
import aside2 from "../img/aside2.png";

const Home = () => {
    return (
        <div className="container-flex">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="Bienvenida" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide2} className="d-block w-100" alt="Contáctanos" />
                    </div>
                    <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="Nosotros" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container">
                <div className="row text-center p-3">
                    <div className="col-md-12">
                        <h1 className="text-center">AUTOTRUX</h1>
                        <img src={aside0} className="img-fluid" alt="Renta ahora" />
                    </div>
                </div>
                <div className="row text-center p-3">
                    <div className="col-md-6 p-3">
                        <h2 className="text-center">AUTOS</h2>
                        <img src={aside1}  className="img-fluid" alt="Autos" />
                        <a href="#" className="btn btn-primary">Autos</a>
                    </div>
                    <div className="col-md-6 p-3">
                        <h2 className="text-center">CAMIONETAS</h2>
                        <img src={aside2}  className="img-fluid" alt="Camionetas" />
                        <a href="#" className="btn btn-primary">Camionetas</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;